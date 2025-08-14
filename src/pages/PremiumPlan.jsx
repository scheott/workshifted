// src/pages/PremiumPlan.jsx - PERSONALIZED using buildHybridPlan
import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { 
  CheckCircle, 
  Clock, 
  Target, 
  BookOpen, 
  ArrowRight, 
  Trophy, 
  Lock,
  Zap,
  TrendingUp,
  Users,
  Lightbulb,
  AlertCircle,
  FileText,
  MessageSquare
} from 'lucide-react';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';
import { buildHybridPlan } from '../data/premiumContent/hybridPlanGenerator';
import { AITOOLS_DB } from '../data/premiumContent/aiToolsDatabase';

const PremiumPlan = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  
  const [userProfile, setUserProfile] = useState(null);
  const [latestAssessment, setLatestAssessment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [loadingStep, setLoadingStep] = useState('');
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [personalizedPlan, setPersonalizedPlan] = useState(null);

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

      setLoadingStep('Generating your personalized plan...');

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
        
        setLoadingStep('Customizing for your role and industry...');
        
        // Generate personalized plan using your buildHybridPlan system
        const hybridPlan = buildHybridPlan({
          answers: assessment.answers,
          risk: assessment.risk_result,
          selectedPath: assessment.evolution_paths?.[0] // Top evolution path
        });
        
        setPersonalizedPlan(hybridPlan);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setLoadingStep('');
    }
  };

  const toggleStepCompletion = (stepId) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  // Convert your hybridPlan structure to the UI structure
  const convertToUIStructure = (hybridPlan) => {
    if (!hybridPlan) return { week1to2: [], week3to6: [], week7to10: [], week11to12: [] };

    return {
      week1to2: hybridPlan.fast_start_actions?.map(action => ({
        id: action.id,
        title: action.title,
        description: action.details,
        category: action.type === 'task' ? 'Implementation' : action.type === 'artifact' ? 'Planning' : 'Tools',
        estimatedTime: action.est_minutes ? `${action.est_minutes} min` : 'Variable',
        priority: action.priority === 1 ? 'high' : action.priority === 2 ? 'medium' : 'low',
        type: action.type
      })) || [],

      week3to6: hybridPlan.momentum_actions?.map(action => ({
        id: action.id,
        title: action.title,
        description: action.details,
        category: action.type === 'task' ? 'Implementation' : action.type === 'artifact' ? 'Portfolio' : 'Learning',
        estimatedTime: action.est_minutes ? `${action.est_minutes} min` : 'Variable',
        priority: action.priority === 1 ? 'high' : action.priority === 2 ? 'medium' : 'low',
        type: action.type
      })) || [],

      week7to10: hybridPlan.positioning_assets?.slice(0, Math.ceil(hybridPlan.positioning_assets.length / 2))?.map(action => ({
        id: action.id,
        title: action.title,
        description: action.details,
        category: action.type === 'meeting' ? 'Leadership' : action.type === 'artifact' ? 'Positioning' : 'Implementation',
        estimatedTime: action.est_minutes ? `${action.est_minutes} min` : 'Variable',
        priority: action.priority === 1 ? 'high' : action.priority === 2 ? 'medium' : 'low',
        type: action.type
      })) || [],

      week11to12: hybridPlan.positioning_assets?.slice(Math.ceil(hibridPlan.positioning_assets?.length / 2))?.map(action => ({
        id: `final-${action.id}`,
        title: `Advanced: ${action.title}`,
        description: `Scale up: ${action.details}`,
        category: 'Leadership',
        estimatedTime: action.est_minutes ? `${Math.ceil(action.est_minutes * 1.5)} min` : 'Extended',
        priority: 'high',
        type: action.type
      })) || []
    };
  };

  const plan = personalizedPlan ? convertToUIStructure(personalizedPlan) : { week1to2: [], week3to6: [], week7to10: [], week11to12: [] };
  const allSteps = [...plan.week1to2, ...plan.week3to6, ...plan.week7to10, ...plan.week11to12];
  const completedCount = allSteps.filter(step => completedSteps.has(step.id)).length;
  const progressPercentage = allSteps.length > 0 ? Math.round((completedCount / allSteps.length) * 100) : 0;

  const getActionTypeIcon = (type) => {
    switch (type) {
      case 'task': return <Target className="w-5 h-5 text-blue-600" />;
      case 'artifact': return <FileText className="w-5 h-5 text-green-600" />;
      case 'meeting': return <MessageSquare className="w-5 h-5 text-purple-600" />;
      default: return <Lightbulb className="w-5 h-5 text-gray-600" />;
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Tools': return <Zap className="w-5 h-5" />;
      case 'Planning': return <Target className="w-5 h-5" />;
      case 'Implementation': return <CheckCircle className="w-5 h-5" />;
      case 'Learning': return <BookOpen className="w-5 h-5" />;
      case 'Portfolio': return <Trophy className="w-5 h-5" />;
      case 'Leadership': return <Users className="w-5 h-5" />;
      case 'Positioning': return <TrendingUp className="w-5 h-5" />;
      default: return <Lightbulb className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Tools': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-purple-100 text-purple-800';
      case 'Implementation': return 'bg-green-100 text-green-800';
      case 'Learning': return 'bg-orange-100 text-orange-800';
      case 'Portfolio': return 'bg-yellow-100 text-yellow-800';
      case 'Leadership': return 'bg-red-100 text-red-800';
      case 'Positioning': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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

  const userRole = latestAssessment?.answers?.profile_role_family || 'Professional';
  const industry = latestAssessment?.answers?.profile_industry || 'Technology';
  const riskScore = latestAssessment?.risk_result?.score || 50;

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
        {/* Personalized Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your 90-Day AI-Proofing Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized roadmap for {userRole} professionals in {industry}. 
            Risk Score: {riskScore}/100 • Focus: {riskScore >= 70 ? 'Urgent Action' : riskScore >= 40 ? 'Proactive Evolution' : 'Strategic Advantage'}
          </p>
        </div>

        {/* Personalized Context from buildHybridPlan */}
        {personalizedPlan && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Your Situation</h3>
                {personalizedPlan.intro && (
                  <p className="text-gray-700 mb-2">{personalizedPlan.intro}</p>
                )}
                {personalizedPlan.risk_explainer && (
                  <p className="text-sm text-blue-700 font-medium">{personalizedPlan.risk_explainer}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Progress Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Progress</h2>
            <div className="text-3xl font-bold text-green-600">{progressPercentage}%</div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-600 to-green-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">{completedCount}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{allSteps.length - completedCount}</div>
              <div className="text-sm text-gray-600">Remaining</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-sm text-gray-600">Weeks Total</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{Math.ceil((allSteps.length - completedCount) / 3) || 12}</div>
              <div className="text-sm text-gray-600">Weeks Left</div>
            </div>
          </div>
        </div>

        {/* AI Tool Recommendations */}
        {personalizedPlan?.recommended_tools && personalizedPlan.recommended_tools.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Recommended Tools for {userRole}s
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {personalizedPlan.recommended_tools.map((tool, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h4 className="font-medium text-gray-900 text-sm">{tool.label}</h4>
                  <p className="text-xs text-gray-500 mt-1">Priority {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Phase 1: Fast Start (Weeks 1-2) */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
            <h2 className="text-2xl font-bold text-gray-900">Phase 1: Fast Start</h2>
            <span className="ml-3 text-gray-500">Weeks 1-2</span>
          </div>
          
          <div className="grid gap-4">
            {plan.week1to2.map((step) => (
              <div key={step.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => toggleStepCompletion(step.id)}
                    className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      completedSteps.has(step.id) 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {completedSteps.has(step.id) && <CheckCircle className="w-4 h-4" />}
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {step.type ? getActionTypeIcon(step.type) : getCategoryIcon(step.category)}
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(step.category)}`}>
                        {step.category}
                      </span>
                      <span className="text-sm text-gray-500">{step.estimatedTime}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                    {step.priority === 'high' && (
                      <span className="inline-flex items-center gap-1 mt-2 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        <AlertCircle className="w-3 h-3" />
                        High Priority
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {plan.week1to2.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <Target className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Complete your assessment to see personalized actions</p>
              </div>
            )}
          </div>
        </div>

        {/* Phase 2: Build Momentum (Weeks 3-6) */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
            <h2 className="text-2xl font-bold text-gray-900">Phase 2: Build Momentum</h2>
            <span className="ml-3 text-gray-500">Weeks 3-6</span>
          </div>
          
          <div className="grid gap-4">
            {plan.week3to6.map((step) => (
              <div key={step.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => toggleStepCompletion(step.id)}
                    className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      completedSteps.has(step.id) 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {completedSteps.has(step.id) && <CheckCircle className="w-4 h-4" />}
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {step.type ? getActionTypeIcon(step.type) : getCategoryIcon(step.category)}
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(step.category)}`}>
                        {step.category}
                      </span>
                      <span className="text-sm text-gray-500">{step.estimatedTime}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                    {step.priority === 'high' && (
                      <span className="inline-flex items-center gap-1 mt-2 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        <AlertCircle className="w-3 h-3" />
                        High Priority
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 3: Strategic Positioning (Weeks 7-10) */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
            <h2 className="text-2xl font-bold text-gray-900">Phase 3: Strategic Positioning</h2>
            <span className="ml-3 text-gray-500">Weeks 7-10</span>
          </div>
          
          <div className="grid gap-4">
            {plan.week7to10.map((step) => (
              <div key={step.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => toggleStepCompletion(step.id)}
                    className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      completedSteps.has(step.id) 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {completedSteps.has(step.id) && <CheckCircle className="w-4 h-4" />}
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {step.type ? getActionTypeIcon(step.type) : getCategoryIcon(step.category)}
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(step.category)}`}>
                        {step.category}
                      </span>
                      <span className="text-sm text-gray-500">{step.estimatedTime}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                    {step.priority === 'high' && (
                      <span className="inline-flex items-center gap-1 mt-2 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        <AlertCircle className="w-3 h-3" />
                        High Priority
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 4: Leadership & Scale (Weeks 11-12) */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</div>
            <h2 className="text-2xl font-bold text-gray-900">Phase 4: Leadership & Scale</h2>
            <span className="ml-3 text-gray-500">Weeks 11-12</span>
          </div>
          
          <div className="grid gap-4">
            {plan.week11to12.map((step) => (
              <div key={step.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => toggleStepCompletion(step.id)}
                    className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      completedSteps.has(step.id) 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {completedSteps.has(step.id) && <CheckCircle className="w-4 h-4" />}
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {step.type ? getActionTypeIcon(step.type) : getCategoryIcon(step.category)}
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(step.category)}`}>
                        {step.category}
                      </span>
                      <span className="text-sm text-gray-500">{step.estimatedTime}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                    {step.priority === 'high' && (
                      <span className="inline-flex items-center gap-1 mt-2 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        <AlertCircle className="w-3 h-3" />
                        High Priority
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Start?</h3>
          <p className="text-gray-600 mb-6">
            Begin with your high-priority Phase 1 actions. These are specifically designed for your {userRole} role in {industry}.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => navigate('/templates')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Templates
            </button>
            <button 
              onClick={() => navigate('/ai-leadership-guide')}
              className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Leadership Guide
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PremiumPlan;