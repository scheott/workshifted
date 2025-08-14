// src/pages/PremiumPlan.jsx - Optimized 90-Day AI-Proofing Plan
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
  Lightbulb
} from 'lucide-react';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';

const PremiumPlan = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  
  const [userProfile, setUserProfile] = useState(null);
  const [latestAssessment, setLatestAssessment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [loadingStep, setLoadingStep] = useState('');
  const [completedSteps, setCompletedSteps] = useState(new Set());

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

      if (assessmentError) {
        console.error('Assessment error:', assessmentError);
        // Still show the page even without assessment data
      }

      setLatestAssessment(assessment);

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

  // Generate personalized plan based on assessment data
  const generatePlan = () => {
    const userRole = latestAssessment?.answers?.profile_role_family || 'analyst';
    const riskScore = latestAssessment?.risk_result?.score || 50;
    const industry = latestAssessment?.answers?.profile_industry || 'tech';
    
    return {
      week1to2: [
        {
          id: 'setup-ai-tools',
          title: 'Set up your AI toolkit',
          description: `Install and configure ChatGPT, Claude, or other AI tools for your ${userRole} role`,
          category: 'Tools',
          estimatedTime: '2 hours',
          priority: 'high'
        },
        {
          id: 'identify-tasks',
          title: 'Identify automatable tasks',
          description: 'List 10 repetitive tasks you do weekly that could be automated',
          category: 'Planning',
          estimatedTime: '1 hour',
          priority: 'high'
        },
        {
          id: 'first-automation',
          title: 'Create your first automation',
          description: 'Automate one simple task using AI or no-code tools',
          category: 'Implementation',
          estimatedTime: '3 hours',
          priority: 'medium'
        }
      ],
      week3to4: [
        {
          id: 'ai-workflow',
          title: 'Build an AI-enhanced workflow',
          description: 'Create a workflow that combines AI tools with your existing processes',
          category: 'Implementation',
          estimatedTime: '4 hours',
          priority: 'high'
        },
        {
          id: 'upskill-learning',
          title: 'Complete AI skills course',
          description: 'Finish a relevant online course about AI in your field',
          category: 'Learning',
          estimatedTime: '6 hours',
          priority: 'medium'
        },
        {
          id: 'document-wins',
          title: 'Document your AI wins',
          description: 'Create a portfolio of how AI has improved your work',
          category: 'Portfolio',
          estimatedTime: '2 hours',
          priority: 'medium'
        }
      ],
      week5to8: [
        {
          id: 'team-training',
          title: 'Train your team on AI tools',
          description: 'Share your AI knowledge with colleagues and become the go-to person',
          category: 'Leadership',
          estimatedTime: '3 hours',
          priority: 'high'
        },
        {
          id: 'process-optimization',
          title: 'Optimize a team process',
          description: 'Use AI to improve a process that affects your whole team',
          category: 'Implementation',
          estimatedTime: '5 hours',
          priority: 'high'
        },
        {
          id: 'industry-expertise',
          title: 'Develop industry AI expertise',
          description: `Research AI trends and tools specific to ${industry} industry`,
          category: 'Learning',
          estimatedTime: '4 hours',
          priority: 'medium'
        }
      ],
      week9to12: [
        {
          id: 'ai-initiative',
          title: 'Propose an AI initiative',
          description: 'Present a formal AI improvement proposal to leadership',
          category: 'Leadership',
          estimatedTime: '6 hours',
          priority: 'high'
        },
        {
          id: 'external-presence',
          title: 'Build external AI presence',
          description: 'Share your AI expertise through LinkedIn, blogs, or speaking',
          category: 'Positioning',
          estimatedTime: '4 hours',
          priority: 'medium'
        },
        {
          id: 'mentor-others',
          title: 'Mentor others in AI adoption',
          description: 'Help other professionals in your network adopt AI tools',
          category: 'Leadership',
          estimatedTime: '3 hours',
          priority: 'medium'
        }
      ]
    };
  };

  const plan = generatePlan();
  const allSteps = [...plan.week1to2, ...plan.week3to4, ...plan.week5to8, ...plan.week9to12];
  const completedCount = allSteps.filter(step => completedSteps.has(step.id)).length;
  const progressPercentage = Math.round((completedCount / allSteps.length) * 100);

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
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your 90-Day AI-Proofing Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform from AI-vulnerable to AI-empowered in 12 weeks. Your personalized roadmap based on your {userRole} role and {riskScore}/100 risk score.
          </p>
        </div>

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
              <div className="text-2xl font-bold text-green-600">{Math.ceil((allSteps.length - completedCount) / 3)}</div>
              <div className="text-sm text-gray-600">Weeks Left</div>
            </div>
          </div>
        </div>

        {/* Phase 1: Quick Wins (Weeks 1-2) */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
            <h2 className="text-2xl font-bold text-gray-900">Phase 1: Quick Wins</h2>
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
                      {getCategoryIcon(step.category)}
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(step.category)}`}>
                        {step.category}
                      </span>
                      <span className="text-sm text-gray-500">{step.estimatedTime}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2: Building Momentum (Weeks 3-4) */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
            <h2 className="text-2xl font-bold text-gray-900">Phase 2: Building Momentum</h2>
            <span className="ml-3 text-gray-500">Weeks 3-4</span>
          </div>
          
          <div className="grid gap-4">
            {plan.week3to4.map((step) => (
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
                      {getCategoryIcon(step.category)}
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(step.category)}`}>
                        {step.category}
                      </span>
                      <span className="text-sm text-gray-500">{step.estimatedTime}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 3: Scaling Impact (Weeks 5-8) */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
            <h2 className="text-2xl font-bold text-gray-900">Phase 3: Scaling Impact</h2>
            <span className="ml-3 text-gray-500">Weeks 5-8</span>
          </div>
          
          <div className="grid gap-4">
            {plan.week5to8.map((step) => (
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
                      {getCategoryIcon(step.category)}
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(step.category)}`}>
                        {step.category}
                      </span>
                      <span className="text-sm text-gray-500">{step.estimatedTime}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 4: Leadership & Positioning (Weeks 9-12) */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</div>
            <h2 className="text-2xl font-bold text-gray-900">Phase 4: Leadership & Positioning</h2>
            <span className="ml-3 text-gray-500">Weeks 9-12</span>
          </div>
          
          <div className="grid gap-4">
            {plan.week9to12.map((step) => (
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
                      {getCategoryIcon(step.category)}
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(step.category)}`}>
                        {step.category}
                      </span>
                      <span className="text-sm text-gray-500">{step.estimatedTime}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center">
          <Trophy className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Congratulations on Starting Your AI Journey!
          </h2>
          <p className="text-xl mb-6">
            In 90 days, you'll transform from AI-vulnerable to AI-empowered. Stay consistent, track your progress, and celebrate each milestone.
          </p>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PremiumPlan;