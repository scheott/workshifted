// src/pages/PremiumPlan.jsx - FIXED for correct data structure
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
        
        try {
          // Generate personalized plan using buildHybridPlan
          const hybridPlan = buildHybridPlan({
            answers: assessment.answers,
            risk: assessment.risk_result,
            selectedPath: assessment.evolution_paths?.[0] // Use top evolution path

          });
          console.log('🔍 TOOLS SPECIFIC DEBUG:');
            console.log('hybridPlan.tools exists:', !!hybridPlan.tools);
            console.log('hybridPlan.tools:', hybridPlan.tools);
            console.log('hybridPlan.tools type:', typeof hybridPlan.tools);
            console.log('hybridPlan.tools length:', hybridPlan.tools?.length);
          
          console.log('✅ Generated plan successfully:', hybridPlan);
          setPersonalizedPlan(hybridPlan);
        } catch (error) {
          console.error('Error generating plan:', error);
        }
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setLoadingStep('');
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
            Risk Score: {riskScore}/100 • Focus: {riskScore >= 70 ? 'Urgent Action' : riskScore >= 40 ? 'Strategic Positioning' : 'Proactive Enhancement'}
          </p>
        </div>

        {/* Plan Content */}
        {personalizedPlan ? (
          <>
            {/* Plan Header */}
            {personalizedPlan.header && (
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{personalizedPlan.header.pathTitle}</h2>
                <p className="text-gray-700 mb-3">{personalizedPlan.header.intro}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                    Timeline: {personalizedPlan.header.timeline}
                  </span>
                  <span className="text-gray-600">{personalizedPlan.header.riskNote}</span>
                </div>
              </div>
            )}

            {/* Fast Start Actions */}
            {personalizedPlan.fast_start && personalizedPlan.fast_start.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">Fast Start</h3>
                    <p className="text-gray-600">Days 1-30 • Build momentum with quick wins</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  {personalizedPlan.fast_start.map((action, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h4>
                          <p className="text-gray-600 mb-3">{action.details}</p>
                          <div className="flex items-center gap-4">
                            {action.est_minutes && (
                              <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                                ~{action.est_minutes} minutes
                              </span>
                            )}
                            {action.priority === 1 && (
                              <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                                High Priority
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Momentum Actions */}
            {personalizedPlan.momentum && personalizedPlan.momentum.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">Build Momentum</h3>
                    <p className="text-gray-600">Days 31-60 • Establish systems and workflows</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  {personalizedPlan.momentum.map((action, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h4>
                          <p className="text-gray-600 mb-3">{action.details}</p>
                          <div className="flex items-center gap-4">
                            {action.est_minutes && (
                              <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                                ~{action.est_minutes} minutes
                              </span>
                            )}
                            {action.priority === 1 && (
                              <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                                High Priority
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Positioning Actions */}
            {personalizedPlan.positioning && personalizedPlan.positioning.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">Strategic Positioning</h3>
                    <p className="text-gray-600">Days 61-90 • Establish leadership and expertise</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  {personalizedPlan.positioning.map((action, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h4>
                          <p className="text-gray-600 mb-3">{action.details}</p>
                          <div className="flex items-center gap-4">
                            {action.est_minutes && (
                              <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                                ~{action.est_minutes} minutes
                              </span>
                            )}
                            {action.priority === 1 && (
                              <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                                High Priority
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tools Section - Enhanced with full database */}
            {personalizedPlan.tools && personalizedPlan.tools.length > 0 && (() => {
            // Import the enhanced tools database at the top of your file
            // import { AITOOLS_DB } from '../data/premiumContent/aiToolsDatabase';
            
            return (
                <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                    <h3 className="text-2xl font-semibold text-gray-900">Recommended AI Tools</h3>
                    <p className="text-gray-600">Curated tools for your {userRole} role in {industry}</p>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {personalizedPlan.tools.map((tool, index) => {
                    // Get enhanced tool data from database
                    const enhancedTool = AITOOLS_DB[tool.key];
                    
                    if (!enhancedTool) {
                        // Fallback for tools not in enhanced database
                        return (
                        <div key={tool.key || index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{tool.label}</h4>
                            <span className="text-sm bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
                            Recommended
                            </span>
                        </div>
                        );
                    }
                    
                    // Use role-specific use case if available
                    const roleSpecificUseCase = enhancedTool.useCase[userRole.toLowerCase()] || enhancedTool.useCase.default;
                    
                    return (
                        <div key={tool.key || index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                        {/* Tool Header */}
                        <div className="flex items-start justify-between mb-3">
                            <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{enhancedTool.name}</h4>
                            <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded-full font-medium">
                                {enhancedTool.category}
                            </span>
                            </div>
                            <div className="text-right">
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                {enhancedTool.difficulty}
                            </span>
                            </div>
                        </div>

                        {/* Tool Description */}
                        <p className="text-gray-600 text-sm mb-3">{enhancedTool.purpose}</p>
                        
                        {/* Role-Specific Use Case */}
                        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                            <h5 className="text-sm font-semibold text-blue-900 mb-1">For {userRole}s:</h5>
                            <p className="text-sm text-blue-800">{roleSpecificUseCase}</p>
                        </div>

                        {/* Tool Details */}
                        <div className="space-y-2 mb-4">
                            <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Pricing:</span>
                            <span className="text-gray-700 font-medium">{enhancedTool.pricing}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Time to Value:</span>
                            <span className="text-gray-700 font-medium">{enhancedTool.timeToValue}</span>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                            {enhancedTool.tags?.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {tag}
                            </span>
                            ))}
                        </div>

                        {/* Action Button */}
                        <div className="flex items-center justify-between">
                            {enhancedTool.url && (
                            <a 
                                href={enhancedTool.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                            >
                                Get Started →
                            </a>
                            )}
                            <span className="text-xs text-gray-500">
                            {enhancedTool.integrations?.length || 0} integrations
                            </span>
                        </div>
                        </div>
                    );
                    })}
                </div>

                {/* Tools Learning Section */}
                <div className="mt-8 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">🎯 Quick Start Strategy</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-green-600 font-bold">1</span>
                        </div>
                        <p className="font-medium text-gray-900">Start with Basics</p>
                        <p className="text-gray-600">Begin with beginner-friendly tools like ChatGPT and Canva</p>
                    </div>
                    <div className="text-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-600 font-bold">2</span>
                        </div>
                        <p className="font-medium text-gray-900">Build Workflows</p>
                        <p className="text-gray-600">Connect tools with Zapier to automate repetitive tasks</p>
                    </div>
                    <div className="text-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-purple-600 font-bold">3</span>
                        </div>
                        <p className="font-medium text-gray-900">Scale & Optimize</p>
                        <p className="text-gray-600">Add advanced analytics and specialized tools</p>
                    </div>
                    </div>
                </div>
                </div>
            );
            })()}

            {/* Next Steps CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Start Your Transformation?</h3>
              <p className="text-gray-600 mb-6">
                Begin with your Fast Start actions. These are specifically designed for {userRole} professionals in {industry}.
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
          </>
        ) : (
          <div className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Unable to Generate Plan</h2>
            <p className="text-gray-600 mb-6">
              We couldn't generate your personalized plan. Please try refreshing the page or contact support.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PremiumPlan;