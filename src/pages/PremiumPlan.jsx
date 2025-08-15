// src/pages/PremiumPlan.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import DashboardHeader from '../components/DashboardHeader';
import { Lock } from 'lucide-react';

// NEW IMPORTS
import { fetchOrGeneratePlan } from '../lib/fetchOrGeneratePlan';
import { buildTasksFromPlan } from '../lib/buildTasksFromPlan';
import enrichPlan from '../lib/enrichPlan';
import phaseAlignWeeks from '../lib/phaseAlignWeeks';
import { ProgressHeader, TrackCard, CoreSection } from '../components/plan/PlanProgressComponents';
import CheckoutModal from '../components/CheckoutModal';

const PremiumPlan = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  
  // EXISTING STATE
  const [userProfile, setUserProfile] = useState(null);
  const [latestAssessment, setLatestAssessment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [loadingStep, setLoadingStep] = useState('');
  const [personalizedPlan, setPersonalizedPlan] = useState(null);

  // NEW STATE
  const [tasks, setTasks] = useState([]);
  const [taskProgress, setTaskProgress] = useState({});
  const [noteMap, setNoteMap] = useState({});
  const [overallPercent, setOverallPercent] = useState(0);
  const [phasePercents, setPhasePercents] = useState({ fastStart: 0, momentum: 0, positioning: 0 });
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  // Phase ranges constant to avoid re-allocation
  const PHASE_RANGES = [
    { start: 1, end: 4, key: 'fastStart' },
    { start: 5, end: 8, key: 'momentum' },
    { start: 9, end: 12, key: 'positioning' }
  ];

  // Memoize trackData to avoid recomputation on every render
  const trackData = useMemo(() => (
    ['writing_comms', 'data_reporting', 'workflow_automation']
      .map(trackId => {
        const track = personalizedPlan?.tracks?.find(t => t.id === trackId);
        if (!track) return null;
        const trackTasks = tasks.filter(t => t.trackId === trackId);
        const completedSteps = trackTasks.filter(t => taskProgress[t.key]).length;
        return { track, tasks: trackTasks, completedSteps };
      })
      .filter(Boolean)
  ), [personalizedPlan, tasks, taskProgress]);

  useEffect(() => {
    if (authLoading) return;
    
    if (!user) {
      navigate('/auth');
      return;
    }
    
    fetchData();
  }, [user, authLoading, navigate]);

  // Recompute progress when tasks or taskProgress changes
  useEffect(() => {
    calculateProgress(taskProgress);
  }, [tasks, taskProgress]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setLoadingStep('Loading your profile...');

      // Fetch user profile
      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (profileError) {
        console.error('Profile error:', profileError);
        navigate('/dashboard');
        return;
      }

      setUserProfile(profile);
      
      // Check premium status - your subscription_status is 'premium'
      const isPremiumUser = profile?.subscription_status === 'premium' || 
                           profile?.subscription_status === 'active' ||
                           profile?.subscription_tier === 'premium' || 
                           profile?.is_premium === true;
      
      setIsPremium(isPremiumUser);

      if (!isPremiumUser) {
        setLoading(false);
        return;
      }

      // Fetch latest assessment
      setLoadingStep('Loading your assessment...');
      const { data: assessments, error: assessmentError } = await supabase
        .from('ai_risk_assessments')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1);

      if (assessmentError) {
        console.error('Assessment error:', assessmentError);
        setLoading(false);
        return;
      }

      if (!assessments || assessments.length === 0) {
        navigate('/assessment');
        return;
      }

      const assessment = assessments[0];
      setLatestAssessment(assessment);

      // Check if plan exists, generate if not
      if (!assessment.evolution_paths) {
        await generatePlan(assessment);
      } else {
        await loadExistingPlan(assessment);
      }

    } catch (error) {
      console.error('Error in fetchData:', error);
      setLoading(false);
    }
  };

  const generatePlan = async (assessment) => {
    try {
      setLoadingStep('Generating your personalized plan...');
      const { evolution_paths } = await fetchOrGeneratePlan(assessment.id, user.id, assessment.answers);

      // Enrich locally with context (why, prompts, toolkit, DoD)
      const enriched = enrichPlan(
        { ...evolution_paths, recommended_tools: evolution_paths.recommended_tools || [] },
        {
          answers: assessment.answers,
          tools_for_role: evolution_paths.recommended_tools || []
        }
      );

      // Build tasks and align to phases
      let planTasks = buildTasksFromPlan(enriched);
      planTasks = phaseAlignWeeks(planTasks);

      setPersonalizedPlan(enriched);
      setTasks(planTasks);

      await loadTaskProgress(assessment.id);
      setLoading(false);

    } catch (error) {
      console.error('Error generating plan:', error);
      setLoading(false);
    }
  };

  const loadExistingPlan = async (assessment) => {
    try {
      setLoadingStep('Loading your existing plan...');

      // Enrich the existing plan with new context features
      const enriched = enrichPlan(
        assessment.evolution_paths,
        {
          answers: assessment.answers,
          tools_for_role: assessment.evolution_paths.recommended_tools || []
        }
      );

      // Build tasks and align to phases
      let planTasks = buildTasksFromPlan(enriched);
      planTasks = phaseAlignWeeks(planTasks);

      setPersonalizedPlan(enriched);
      setTasks(planTasks);

      await loadTaskProgress(assessment.id);
      setLoading(false);

    } catch (error) {
      console.error('Error loading existing plan:', error);
      setLoading(false);
    }
  };

  const loadTaskProgress = async (assessmentId) => {
    try {
      console.log('🔍 Loading task progress for assessment:', assessmentId);
      
      // Load both progress and notes
      const { data: rows, error } = await supabase
        .from('ai_plan_task_progress')
        .select('task_key, completed, notes')
        .eq('user_id', user.id)
        .eq('assessment_id', assessmentId);

      if (error) {
        console.error('Error loading task progress:', error);
        return;
      }

      console.log('📊 Raw task progress data:', rows);

      const progressMap = {};
      const noteMapInit = {};
      
      rows?.forEach(row => {
        progressMap[row.task_key] = row.completed;
        if (row.notes) noteMapInit[row.task_key] = row.notes;
      });

      console.log('📋 Progress map:', progressMap);
      console.log('📝 Note map:', noteMapInit);

      setTaskProgress(progressMap);
      setNoteMap(noteMapInit);
      // Progress will be calculated by useEffect

    } catch (error) {
      console.error('Error loading task progress:', error);
    }
  };

  const handleTaskToggle = async (task, completed) => {
    try {
      console.log('🔄 Toggling task:', task.key, 'to:', completed);
      
      // Update local state immediately with functional update
      setTaskProgress(prev => {
        const newProgress = { ...prev, [task.key]: completed };
        console.log('📊 New progress state:', newProgress);
        return newProgress;
      });

      // Update database
      const result = await supabase
        .from('ai_plan_task_progress')
        .upsert({
          user_id: user.id,
          assessment_id: latestAssessment.id,
          track_id: task.trackId,
          task_key: task.key,
          completed: completed,
          completed_at: completed ? new Date().toISOString() : null
        }, { 
          onConflict: 'user_id,assessment_id,task_key' 
        });
        
      console.log('💾 Database update result:', result);
        
    } catch (error) {
      console.error('Error updating task:', error);
      // Revert local state on error
      setTaskProgress(prev => ({ ...prev, [task.key]: !completed }));
    }
  };

  const saveNote = async (task, note) => {
    try {
      await supabase
        .from('ai_plan_task_progress')
        .upsert({
          user_id: user.id,
          assessment_id: latestAssessment.id,
          track_id: task.trackId,
          task_key: task.key,
          notes: note
        }, { 
          onConflict: 'user_id,assessment_id,task_key' 
        });
      
      setNoteMap(prev => ({ ...prev, [task.key]: note }));
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const calculateProgress = (progressMap) => {
    const completedCount = Object.values(progressMap).filter(Boolean).length;
    const totalTasks = tasks.length;
    
    setOverallPercent(totalTasks ? Math.round((completedCount / totalTasks) * 100) : 0);
    
    // Calculate phase percentages based on week alignment - using object structure
    const phases = {};
    PHASE_RANGES.forEach(range => {
      const phaseTasks = tasks.filter(t => t.week >= range.start && t.week <= range.end);
      const done = phaseTasks.filter(t => progressMap[t.key]).length;
      phases[range.key] = phaseTasks.length ? Math.round((done / phaseTasks.length) * 100) : 0;
    });

    setPhasePercents(phases);
  };

  // Loading states
  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            {loadingStep || 'Loading your AI-proofing plan...'}
          </p>
        </div>
      </div>
    );
  }

  if (!isPremium) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium Access Required</h2>
          <p className="text-gray-600 mb-6">Upgrade to access your personalized 90-day AI-proofing plan.</p>
          
          <div className="space-y-3">
            <button
              onClick={() => setShowCheckoutModal(true)}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Upgrade to Premium - $29
            </button>
            
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
          
          {/* Debug info - remove in production */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-3 bg-yellow-50 rounded text-xs text-left">
              <strong>Debug:</strong> subscription_status: {userProfile?.subscription_status}, 
              subscription_tier: {userProfile?.subscription_tier}, 
              is_premium: {userProfile?.is_premium?.toString()}
            </div>
          )}
        </div>

        <CheckoutModal
          isOpen={showCheckoutModal}
          onClose={() => setShowCheckoutModal(false)}
          onSuccess={() => {
            setShowCheckoutModal(false);
            // Refresh the page to re-check premium status
            window.location.reload();
          }}
        />
      </div>
    );
  }

  // Main render
  const renderPlanContent = () => {
    if (!personalizedPlan || tasks.length === 0) {
      return (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Generating your personalized plan...</p>
        </div>
      );
    }

    const coreTasks = tasks.filter(t => t.trackId === 'core' && t.type === 'non_negotiable'); // Only non-negotiables now

    return (
      <div className="space-y-8">
        <ProgressHeader 
          overall={overallPercent}
          phases={phasePercents}
          persona={personalizedPlan.persona || 'AI Strategy Lead'}
          weeklyHours={personalizedPlan.weekly_investment_hours || 3}
          userProfile={userProfile}
          userRole={userProfile?.current_role || userProfile?.profile_role_family}
        />
        
        <CoreSection 
          coreTasks={coreTasks}
          progressMap={taskProgress}
          noteMap={noteMap}
          onToggle={handleTaskToggle}
          onSaveNote={saveNote}
          plan={personalizedPlan}
        />
        
        {trackData.map(({ track, tasks: trackTasks, completedSteps }) => (
          <TrackCard
            key={track.id}
            track={track}
            steps={trackTasks}
            progressMap={taskProgress}
            noteMap={noteMap}
            onToggle={handleTaskToggle}
            onSaveNote={saveNote}
            completedSteps={completedSteps}
            plan={personalizedPlan}
          />
        ))}

        {/* Quality Gates Section */}
        {personalizedPlan.core?.qualityGates && (
          <section className="rounded-2xl border p-4 bg-white">
            <h3 className="text-lg font-semibold">Quality Gates</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
              {Object.entries(personalizedPlan.core.qualityGates).map(([k, v]) => (
                <li key={k}><strong className="capitalize">{k}:</strong> {v}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader 
        user={user}
        userProfile={userProfile}
        onSignOut={async () => {
          await supabase.auth.signOut();
          navigate('/', { replace: true });
        }}
        onDeleteAccount={() => {}}
        onExploreCareers={() => navigate('/assessment')}
        currentPage="plan"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your 90-Day AI-Proofing Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized roadmap to future-proof your career with AI collaboration skills.
          </p>
        </div>

        {renderPlanContent()}
      </div>
    </div>
  );
};

export default PremiumPlan;