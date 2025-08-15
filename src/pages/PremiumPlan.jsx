// src/pages/PremiumPlan.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import DashboardHeader from '../components/DashboardHeader';
import { Lock } from 'lucide-react';

// NEW IMPORTS
import { fetchOrGeneratePlan } from '../lib/fetchOrGeneratePlan';
import { buildTasksFromPlan } from '../lib/buildTasksFromPlan';
import { ProgressHeader, TrackCard, CoreSection } from '../components/plan/PlanProgressComponents';

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
  const [overallPercent, setOverallPercent] = useState(0);
  const [phasePercents, setPhasePercents] = useState([0, 0, 0]);

  useEffect(() => {
    if (authLoading) return;
    
    if (!user) {
      navigate('/auth');
      return;
    }
    
    fetchData();
  }, [user, authLoading, navigate]);

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
      setIsPremium(profile?.subscription_status === 'premium');

      // Redirect if not premium
      if (profile?.subscription_status !== 'premium') {
        navigate('/dashboard');
        return;
      }

      setLoadingStep('Loading your assessment...');

      // Fetch latest assessment
      const { data: assessment, error: assessmentError } = await supabase
        .from('ai_risk_assessments')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (assessment) {
        setLatestAssessment(assessment);
        
        // Check if plan already exists or generate new one
        if (assessment.evolution_paths && assessment.evolution_paths.tracks) {
          const planTasks = buildTasksFromPlan(assessment.evolution_paths);
          setTasks(planTasks);
          setPersonalizedPlan(assessment.evolution_paths);
          await loadTaskProgress(assessment.id);
        } else {
          await generatePlan(assessment);
        }
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setLoadingStep('');
    }
  };

  const generatePlan = async (assessment) => {
    try {
      setLoadingStep('Generating your personalized plan...');
      
      console.log('🟡 Starting plan generation for assessment:', assessment.id);
      console.log('🟡 Assessment answers:', assessment.answers);
      
      const { evolution_paths } = await fetchOrGeneratePlan(
        assessment.id, 
        user.id, 
        assessment.answers
      );
      
      console.log('🟢 Plan generated:', evolution_paths);
      
      if (!evolution_paths || !evolution_paths.tracks) {
        console.error('❌ No tracks in evolution_paths, using fallback');
        
        // Use fallback plan
        const fallbackPlan = {
          version: 1,
          persona: "AI Strategy Lead",
          weekly_investment_hours: 3,
          tracks: [
            {
              id: "writing_comms",
              title: "Communication Optimization",
              goal: "Cut comms time 50%",
              kpis: ["time_saved_per_week"],
              week_plan: ["W1: Setup baseline", "W2: Create templates", "W3: Test & refine", "W4: Deploy & measure"]
            },
            {
              id: "data_reporting",
              title: "Data Analysis Automation", 
              goal: "Automate 60% of reporting",
              kpis: ["cycle_time"],
              week_plan: ["W1: Audit current process", "W2: Build AI pipeline", "W3: Add quality checks", "W4: Go live"]
            },
            {
              id: "workflow_automation",
              title: "Process Optimization",
              goal: "Remove 5+ manual steps", 
              kpis: ["manual_steps_removed"],
              week_plan: ["W1: Map workflows", "W2: Identify automation", "W3: Build & test", "W4: Scale deployment"]
            }
          ]
        };
        
        setPersonalizedPlan(fallbackPlan);
        const planTasks = buildTasksFromPlan(fallbackPlan);
        console.log('🟡 Fallback tasks:', planTasks);
        setTasks(planTasks);
        await loadTaskProgress(assessment.id);
        return;
      }
      
      const planTasks = buildTasksFromPlan(evolution_paths);
      console.log('🟢 Built tasks:', planTasks);
      
      setTasks(planTasks);
      setPersonalizedPlan(evolution_paths);
      
      await loadTaskProgress(assessment.id);
      
      // Save plan back to assessment
      await supabase
        .from('ai_risk_assessments')
        .update({ evolution_paths })
        .eq('id', assessment.id);
        
    } catch (error) {
      console.error('❌ Error generating plan:', error);
      
      // Fallback on error
      const fallbackPlan = {
        version: 1,
        persona: "AI Strategy Lead", 
        weekly_investment_hours: 3,
        tracks: [
          {
            id: "writing_comms",
            title: "Communication Optimization",
            goal: "Cut comms time 50%",
            kpis: ["time_saved_per_week"],
            week_plan: ["W1: Setup", "W2: Draft", "W3: Test", "W4: Deploy"]
          },
          {
            id: "data_reporting", 
            title: "Data Analysis",
            goal: "Automate reporting",
            kpis: ["cycle_time"],
            week_plan: ["W1: Setup", "W2: Draft", "W3: Test", "W4: Deploy"]
          },
          {
            id: "workflow_automation",
            title: "Process Automation", 
            goal: "Remove manual steps",
            kpis: ["manual_steps_removed"],
            week_plan: ["W1: Setup", "W2: Draft", "W3: Test", "W4: Deploy"]
          }
        ]
      };
      
      setPersonalizedPlan(fallbackPlan);
      const planTasks = buildTasksFromPlan(fallbackPlan);
      setTasks(planTasks);
      await loadTaskProgress(assessment.id);
    }
  };

  const loadTaskProgress = async (assessmentId) => {
    try {
      const { data: progressData } = await supabase
        .from('ai_plan_task_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('assessment_id', assessmentId);
      
      const progressMap = {};
      progressData?.forEach(row => {
        progressMap[row.task_key] = row.completed;
      });
      
      setTaskProgress(progressMap);
      calculateProgress(progressMap);
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  };

  const handleTaskToggle = async (task, completed) => {
    try {
      const newProgress = { ...taskProgress, [task.key]: completed };
      setTaskProgress(newProgress);
      calculateProgress(newProgress);
      
      await supabase
        .from('ai_plan_task_progress')
        .upsert({
          user_id: user.id,
          assessment_id: latestAssessment.id,
          track_id: task.trackId,
          task_key: task.key,
          completed,
          completed_at: completed ? new Date().toISOString() : null
        }, { 
          onConflict: 'user_id,assessment_id,task_key' 
        });
        
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const calculateProgress = (progressMap) => {
    const completedCount = Object.values(progressMap).filter(Boolean).length;
    const totalTasks = tasks.length;
    
    const overall = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
    setOverallPercent(overall);
    
    // Simple phase calculation
    const phases = [overall, overall, overall];
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
        <div className="text-center">
          <Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium Access Required</h2>
          <p className="text-gray-600 mb-6">Upgrade to access your personalized 90-day AI-proofing plan.</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
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

    const coreTasks = tasks.filter(t => t.trackId === 'core');
    const trackData = ['writing_comms', 'data_reporting', 'workflow_automation'].map(trackId => {
      const track = personalizedPlan.tracks?.find(t => t.id === trackId);
      const trackTasks = tasks.filter(t => t.trackId === trackId);
      const completedSteps = trackTasks.filter(t => taskProgress[t.key]).length;
      
      return { track, tasks: trackTasks, completedSteps };
    }).filter(item => item.track);

    return (
      <div className="space-y-8">
        <ProgressHeader 
          overall={overallPercent}
          phases={phasePercents}
          persona={personalizedPlan.persona || 'AI Strategy Lead'}
          weeklyHours={personalizedPlan.weekly_investment_hours || 3}
        />
        
        <CoreSection 
          coreTasks={coreTasks}
          progressMap={taskProgress}
          onToggle={handleTaskToggle}
        />
        
        {trackData.map(({ track, tasks: trackTasks, completedSteps }) => (
          <TrackCard
            key={track.id}
            track={track}
            steps={trackTasks}
            progressMap={taskProgress}
            onToggle={handleTaskToggle}
            completedSteps={completedSteps}
          />
        ))}
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