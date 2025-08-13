// src/pages/PremiumPlan.jsx - Full 90-Day AI-Proofing Plan
import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { CheckCircle, Clock, Target, BookOpen, ArrowRight, Trophy, Lock } from 'lucide-react';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';
import { buildHybridPlan } from '../data/premiumContent/hybridPlanGenerator';

const PremiumPlan = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [userProfile, setUserProfile] = useState(null);
  const [latestAssessment, setLatestAssessment] = useState(null);
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [userProgress, setUserProgress] = useState({});
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    fetchData();
  }, [user, navigate]);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch user profile
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      setUserProfile(profile);
      setIsPremium(profile?.subscription_status === 'premium');

      // Redirect if not premium
      if (profile?.subscription_status !== 'premium') {
        navigate('/dashboard');
        return;
      }

      // Fetch latest assessment
      const { data: assessment } = await supabase
        .from('ai_risk_assessments')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      setLatestAssessment(assessment);

      // Generate personalized plan
      if (assessment) {
        const plan = buildHybridPlan({
          answers: assessment.answers,
          risk: assessment.risk_result,
          selectedPath: assessment.evolution_paths?.[0]
        });
        setGeneratedPlan(plan);
      }

      // Load progress from user profile
      const progress = profile?.ai_plan_progress || {};
      setUserProgress(progress);

    } catch (error) {
      console.error('Error fetching premium plan data:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleActionComplete = async (actionId) => {
    const newProgress = {
      ...userProgress,
      [actionId]: !userProgress[actionId]
    };

    setUserProgress(newProgress);

    // Save to database
    try {
      const { error } = await supabase
        .from('user_profiles')
        .update({ ai_plan_progress: newProgress })
        .eq('user_id', user.id);

      if (error) {
        console.error('Error saving progress:', error);
      }
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const calculatePhaseProgress = (actions) => {
    if (!actions.length) return 0;
    const completed = actions.filter(action => userProgress[action.id]).length;
    return Math.round((completed / actions.length) * 100);
  };

  const calculateOverallProgress = () => {
    if (!generatedPlan) return 0;
    const allActions = [
      ...(generatedPlan.fast_start || []),
      ...(generatedPlan.momentum || []),
      ...(generatedPlan.positioning || [])
    ];
    return calculatePhaseProgress(allActions);
  };

  // Handle other dashboard functions
  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleDeleteAccount = () => {
    // Implement delete account logic
  };

  const handleExploreCareers = () => {
    navigate('/assessment');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-lg text-gray-700">Loading your AI-proofing plan...</span>
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

  const userRole = latestAssessment?.answers?.profile_role_family || 'Professional';
  const pathTitle = latestAssessment?.evolution_paths?.[0]?.title || 'AI Career Evolution';
  const overallProgress = calculateOverallProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <DashboardHeader 
        user={user}
        onSignOut={handleSignOut}
        onDeleteAccount={handleDeleteAccount}
        onExploreCareers={handleExploreCareers}
        currentPage="plan"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Your 90-Day AI-Proofing Plan
              </h1>
              <p className="text-gray-600">
                Personalized roadmap: {userRole} → {pathTitle}
              </p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-blue-600">{overallProgress}%</div>
              <div className="text-sm text-gray-500">Complete</div>
            </div>
          </div>

          {/* Overall Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-600 to-green-600 h-4 rounded-full transition-all duration-300"
              style={{ width: `${overallProgress}%` }}
            />
          </div>

          {/* Plan Introduction */}
          {generatedPlan?.intro && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800">{generatedPlan.intro}</p>
            </div>
          )}
        </div>

        {/* Phase 1: Fast Start (Days 1-7) */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Fast Start</h2>
              <p className="text-gray-600">Days 1-7 • Quick wins and foundation</p>
            </div>
            <div className="ml-auto">
              <div className="text-lg font-semibold text-green-600">
                {calculatePhaseProgress(generatedPlan?.fast_start || [])}% Complete
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {generatedPlan?.fast_start?.map((action, index) => (
              <ActionCard
                key={action.id}
                action={action}
                isCompleted={userProgress[action.id]}
                onToggle={() => toggleActionComplete(action.id)}
                phase="fast_start"
                index={index + 1}
              />
            ))}
          </div>
        </div>

        {/* Phase 2: Momentum (Days 8-30) */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              2
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Momentum</h2>
              <p className="text-gray-600">Days 8-30 • Skill building and workflow optimization</p>
            </div>
            <div className="ml-auto">
              <div className="text-lg font-semibold text-blue-600">
                {calculatePhaseProgress(generatedPlan?.momentum || [])}% Complete
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {generatedPlan?.momentum?.map((action, index) => (
              <ActionCard
                key={action.id}
                action={action}
                isCompleted={userProgress[action.id]}
                onToggle={() => toggleActionComplete(action.id)}
                phase="momentum"
                index={index + 1}
              />
            ))}
          </div>
        </div>

        {/* Phase 3: Positioning (Days 31-90) */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              3
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Positioning</h2>
              <p className="text-gray-600">Days 31-90 • Leadership and career advancement</p>
            </div>
            <div className="ml-auto">
              <div className="text-lg font-semibold text-purple-600">
                {calculatePhaseProgress(generatedPlan?.positioning || [])}% Complete
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {generatedPlan?.positioning?.map((action, index) => (
              <ActionCard
                key={action.id}
                action={action}
                isCompleted={userProgress[action.id]}
                onToggle={() => toggleActionComplete(action.id)}
                phase="positioning"
                index={index + 1}
              />
            ))}
          </div>
        </div>

        {/* Completion Celebration */}
        {overallProgress === 100 && (
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-8 text-center">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Congratulations! You're AI-Proofed! 🎉
            </h3>
            <p className="text-gray-600 mb-6">
              You've completed your 90-day AI career protection plan. You're now positioned as an AI leader in your field.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View Dashboard
              </button>
              <button
                onClick={() => navigate('/templates')}
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Get More Templates
              </button>
            </div>
          </div>
        )}

      </div>

      <Footer />
    </div>
  );
};

// Action Card Component
const ActionCard = ({ action, isCompleted, onToggle, phase, index }) => {
  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'fast_start': return 'border-green-200 bg-green-50';
      case 'momentum': return 'border-blue-200 bg-blue-50';
      case 'positioning': return 'border-purple-200 bg-purple-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'task': return <Target className="w-5 h-5" />;
      case 'meeting': return <Clock className="w-5 h-5" />;
      case 'artifact': return <BookOpen className="w-5 h-5" />;
      default: return <CheckCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className={`border-2 rounded-lg p-6 transition-all ${
      isCompleted 
        ? 'border-green-300 bg-green-50' 
        : getPhaseColor(phase)
    }`}>
      <div className="flex items-start gap-4">
        
        {/* Completion Checkbox */}
        <button
          onClick={onToggle}
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
            isCompleted 
              ? 'bg-green-500 border-green-500 text-white' 
              : 'border-gray-300 hover:border-green-400'
          }`}
        >
          {isCompleted && <CheckCircle className="w-5 h-5" />}
        </button>

        {/* Action Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center gap-2">
              {getTypeIcon(action.type)}
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                {action.type}
              </span>
            </div>
            {action.est_minutes && (
              <span className="text-sm text-gray-500">
                ~{action.est_minutes} min
              </span>
            )}
          </div>
          
          <h3 className={`text-lg font-semibold mb-2 ${
            isCompleted ? 'text-green-800 line-through' : 'text-gray-900'
          }`}>
            {action.title}
          </h3>
          
          <p className={`mb-4 ${
            isCompleted ? 'text-green-700' : 'text-gray-600'
          }`}>
            {action.details}
          </p>

          {/* Tool References */}
          {action.tool_refs && action.tool_refs.length > 0 && (
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-500">Tools:</span>
              {action.tool_refs.map((tool, i) => (
                <span key={i} className="bg-white border border-gray-200 px-2 py-1 rounded text-xs">
                  {tool}
                </span>
              ))}
            </div>
          )}

          {/* Priority Indicator */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Priority:</span>
              <div className={`px-2 py-1 rounded text-xs font-medium ${
                action.priority === 1 
                  ? 'bg-red-100 text-red-700' 
                  : action.priority === 2 
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {action.priority === 1 ? 'High' : action.priority === 2 ? 'Medium' : 'Low'}
              </div>
            </div>
            
            {isCompleted && (
              <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                Completed
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPlan;