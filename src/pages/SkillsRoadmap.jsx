import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import DashboardHeader from '../components/DashboardHeader';
import { Target, Clock, Award, BookOpen, CheckCircle, TrendingUp } from 'lucide-react';
import { buildHybridPlan } from '../data/premiumContent/hybridPlanGenerator';
import { AITOOLS_DB } from '../data/premiumContent/aiToolsDatabase';

const SkillsRoadmap = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activePhase, setActivePhase] = useState('fast_start');
  const [latestAssessment, setLatestAssessment] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [personalizedPlan, setPersonalizedPlan] = useState(null);

  useEffect(() => {
    fetchAssessmentData();
  }, [user]);

  const fetchAssessmentData = async () => {
    if (!user) return;

    try {
      // Fetch user profile
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (profile?.subscription_status !== 'premium') {
        navigate('/dashboard');
        return;
      }

      setUserProfile(profile);

      // Fetch latest assessment
      const { data: assessment } = await supabase
        .from('ai_risk_assessments')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (assessment) {
        setLatestAssessment(assessment);
        
        // Generate personalized plan using your existing system
        const plan = buildHybridPlan({
          answers: assessment.answers,
          risk: assessment.risk_result,
          selectedPath: assessment.evolution_paths?.[0] // Use top evolution path
        });
        
        setPersonalizedPlan(plan);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Generating your personalized roadmap...</p>
        </div>
      </div>
    );
  }

  if (!latestAssessment) {
    return (
      <div className="min-h-screen bg-gray-50">
        <DashboardHeader user={user} onSignOut={() => {}} currentPage="skills" />
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Assessment Required</h1>
          <p className="text-gray-600 mb-6">Complete your AI risk assessment to see your personalized roadmap.</p>
          <button
            onClick={() => navigate('/assessment')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Take Assessment
          </button>
        </div>
      </div>
    );
  }

  const role = latestAssessment.answers?.profile_role_family || 'professional';
  const industry = latestAssessment.answers?.profile_industry || 'technology';
  const riskScore = latestAssessment.risk_result?.score || 50;

  // Use your existing plan structure
  const phases = {
    fast_start: {
      title: 'Fast Start (Days 1-30)',
      description: `Master AI basics for ${role} work`,
      actions: personalizedPlan?.fast_start_actions || []
    },
    momentum: {
      title: 'Build Momentum (Days 31-60)',
      description: `Implement AI workflows in ${industry}`,
      actions: personalizedPlan?.momentum_actions || []
    },
    positioning: {
      title: 'Strategic Positioning (Days 61-90)',
      description: 'Lead AI transformation initiatives',
      actions: personalizedPlan?.positioning_assets || []
    }
  };

  const getActionTypeColor = (type) => {
    switch (type) {
      case 'task': return 'bg-blue-50 text-blue-700';
      case 'artifact': return 'bg-green-50 text-green-700';
      case 'meeting': return 'bg-purple-50 text-purple-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  const getActionTypeIcon = (type) => {
    switch (type) {
      case 'task': return <Target className="w-4 h-4" />;
      case 'artifact': return <BookOpen className="w-4 h-4" />;
      case 'meeting': return <Award className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader 
        user={user}
        onSignOut={() => {}} 
        currentPage="skills"
      />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your AI-Proofing Roadmap</h1>
          <p className="text-gray-600">
            Personalized for {role} in {industry} • Risk Score: {riskScore}/100
          </p>
        </div>

        {/* Risk Context */}
        {personalizedPlan?.intro && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Your Situation</h2>
            </div>
            <p className="text-gray-700 mb-2">{personalizedPlan.intro}</p>
            {personalizedPlan.risk_explainer && (
              <p className="text-sm text-blue-700 font-medium">{personalizedPlan.risk_explainer}</p>
            )}
          </div>
        )}

        {/* Phase Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-1">
            {Object.entries(phases).map(([phaseId, phase]) => (
              <button
                key={phaseId}
                onClick={() => setActivePhase(phaseId)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activePhase === phaseId
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {phase.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Phase Content */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {phases[activePhase].title}
            </h2>
            <p className="text-gray-600">{phases[activePhase].description}</p>
          </div>

          <div className="grid gap-6">
            {phases[activePhase].actions.map((action, index) => (
              <div key={action.id || index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    {getActionTypeIcon(action.type)}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{action.title}</h3>
                      <p className="text-gray-600 mb-3">{action.details}</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${getActionTypeColor(action.type)}`}>
                    {action.type}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{action.est_minutes ? `${action.est_minutes} min` : 'Variable time'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    <span>Priority {action.priority || 'Medium'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {phases[activePhase].actions.length === 0 && (
            <div className="text-center py-8">
              <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase Coming Soon</h3>
              <p className="text-gray-600">Complete your assessment to unlock personalized actions.</p>
            </div>
          )}
        </div>

        {/* Tool Recommendations */}
        {personalizedPlan?.recommended_tools && (
          <div className="mt-8 bg-white rounded-xl shadow-sm border p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended AI Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {personalizedPlan.recommended_tools.map((tool, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h4 className="font-medium text-gray-900 mb-1">{tool.label}</h4>
                  <p className="text-sm text-gray-600">For {role} workflows</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsRoadmap;