// Personalized AI Leadership Guide - Uses Assessment Data
// src/pages/AILeadershipGuide.jsx

import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import DashboardHeader from '../components/DashboardHeader';
import { 
  Crown, 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  MessageSquare,
  FileText,
  BarChart3,
  Zap,
  Award
} from 'lucide-react';

const AILeadershipGuide = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [latestAssessment, setLatestAssessment] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(1);

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

      // Redirect if not premium
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

      setLatestAssessment(assessment);
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
          <p className="text-gray-600">Loading your leadership guide...</p>
        </div>
      </div>
    );
  }

  if (!latestAssessment) {
    return (
      <div className="min-h-screen bg-gray-50">
        <DashboardHeader user={user} onSignOut={() => {}} currentPage="guide" />
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Assessment Required</h1>
          <p className="text-gray-600 mb-6">Complete your AI risk assessment to see your personalized leadership guide.</p>
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

  // Get personalization data from assessment
  const role = latestAssessment.answers?.profile_role_family || 'professional';
  const industry = latestAssessment.answers?.profile_industry || 'technology';
  const companySize = latestAssessment.answers?.company_size || 'small';
  const riskScore = latestAssessment.risk_result?.score || 50;
  
  // Capitalize role and industry for display
  const roleDisplay = role.charAt(0).toUpperCase() + role.slice(1);
  const industryDisplay = industry.charAt(0).toUpperCase() + industry.slice(1);

  // Get risk urgency
  const getRiskUrgency = (score) => {
    if (score >= 70) return { level: 'Urgent', color: 'text-red-600', bg: 'bg-red-50' };
    if (score >= 40) return { level: 'Important', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { level: 'Strategic', color: 'text-green-600', bg: 'bg-green-50' };
  };

  const urgency = getRiskUrgency(riskScore);

  // Personalized leadership steps based on assessment data
  const getPersonalizedSteps = () => {
    const baseSteps = [
      {
        id: 1,
        title: `Position Yourself as ${roleDisplay} AI Coordinator`,
        icon: Crown,
        description: `Become the go-to AI expert for ${roleDisplay} work in ${industryDisplay}`,
        timeframe: '1-2 weeks',
        priority: riskScore >= 70 ? 'urgent' : 'high',
        actions: [
          `Audit your current ${roleDisplay} workflows for AI opportunities`,
          `Research 3-5 AI tools specifically used in ${industryDisplay} ${role} work`,
          `Create a 30-60-90 day AI adoption roadmap for your role`,
          `Position yourself internally as the "AI Implementation Lead" for ${roleDisplay} functions`
        ],
        personalizedTip: riskScore >= 70 
          ? `⚠️ With your ${riskScore}/100 risk score, positioning as an AI leader is urgent - start this week!`
          : riskScore >= 40
          ? `📈 Your ${riskScore}/100 risk score means you have a window to lead - take advantage now.`
          : `🎯 Your ${riskScore}/100 risk score gives you strategic flexibility - use this to your advantage.`
      },
      {
        id: 2,
        title: `Lead ${industryDisplay} Team Through AI Adoption`,
        icon: Users,
        description: `Guide your colleagues in AI-enhanced ${role} practices`,
        timeframe: '2-4 weeks',
        priority: 'high',
        actions: [
          `Host weekly "AI Tool Spotlight" sessions for ${roleDisplay} tasks`,
          `Create shared prompt libraries for common ${industryDisplay} workflows`,
          `Establish quality control protocols for AI-assisted ${role} work`,
          `Track and celebrate time-saving wins specific to ${industryDisplay} processes`,
          companySize === 'large' || companySize === 'enterprise' 
            ? 'Present findings to department leadership with ROI metrics'
            : 'Share successes with management and key stakeholders'
        ],
        personalizedTip: companySize === 'startup' || companySize === 'small'
          ? `💡 In smaller companies, you can move fast - implement changes quickly and show results.`
          : `🏢 In larger organizations, focus on documentation and formal processes to scale your impact.`
      },
      {
        id: 3,
        title: `Build Strategic AI Initiatives for ${industryDisplay}`,
        icon: Target,
        description: `Create business cases for AI adoption in ${role} functions`,
        timeframe: '3-6 weeks',
        priority: 'medium',
        actions: [
          `Map high-impact automation opportunities specific to ${industryDisplay} ${role} work`,
          `Create detailed business cases with ROI calculations for ${role} AI tools`,
          `Develop change management plans for ${roleDisplay} team AI adoption`,
          `Present comprehensive AI strategy to leadership with ${industryDisplay}-specific metrics`,
          `Identify partnership opportunities with other departments for AI initiatives`
        ],
        personalizedTip: riskScore >= 70
          ? `🔥 High automation risk means leadership will be receptive to AI initiatives - strike while the iron is hot!`
          : `📊 Build compelling business cases showing how AI enhances rather than replaces ${roleDisplay} expertise.`
      },
      {
        id: 4,
        title: `Scale Your AI Leadership Across ${industryDisplay}`,
        icon: TrendingUp,
        description: `Become recognized as an AI transformation leader`,
        timeframe: '4-8 weeks',
        priority: 'medium',
        actions: [
          `Document proven AI automation playbooks for ${roleDisplay} functions`,
          `Train other ${industryDisplay} teams on your successful AI implementation methods`,
          `Speak at company events about AI transformation in ${role} work`,
          `Network with other AI transformation leaders in ${industryDisplay}`,
          `Consider external speaking opportunities or thought leadership content`,
          `Mentor junior ${roleDisplay}s on AI-enhanced career development`
        ],
        personalizedTip: `🌟 Position yourself as the "${roleDisplay} AI Transformation Expert" - this expertise is transferable across companies in ${industryDisplay}.`
      }
    ];

    return baseSteps;
  };

  const steps = getPersonalizedSteps();

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader 
        user={user}
        onSignOut={() => {}} 
        currentPage="guide"
      />
      
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Personalized Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Crown className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Leadership Guide</h1>
          <p className="text-xl text-gray-600">
            Personalized for {roleDisplay}s in {industryDisplay} • Risk Score: {riskScore}/100
          </p>
        </div>

        {/* Risk Context Alert */}
        <div className={`${urgency.bg} border border-opacity-20 rounded-xl p-6 mb-8`}>
          <div className="flex items-center gap-3 mb-3">
            <Zap className={`w-6 h-6 ${urgency.color}`} />
            <h2 className={`text-lg font-semibold ${urgency.color}`}>
              {urgency.level} Action Required
            </h2>
          </div>
          <p className="text-gray-700">
            Your {riskScore}/100 automation risk score indicates {urgency.level.toLowerCase()} need for AI leadership positioning. 
            {riskScore >= 70 && " High-risk roles require immediate action to stay competitive."}
            {riskScore >= 40 && riskScore < 70 && " You have a strategic window to position yourself as an AI leader."}
            {riskScore < 40 && " You can strategically position yourself ahead of the curve."}
          </p>
        </div>

        {/* Step Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-1">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeStep === step.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Step {step.id}
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        {steps.map((step) => 
          activeStep === step.id && (
            <div key={step.id} className="bg-white rounded-xl shadow-sm border p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-semibold text-gray-900">{step.title}</h2>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(step.priority)}`}>
                      {step.priority}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <span className="text-sm text-blue-600 font-medium">⏱️ {step.timeframe}</span>
                </div>
              </div>
              
              {/* Personalized Tip */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Personalized for You</h3>
                <p className="text-gray-700 text-sm">{step.personalizedTip}</p>
              </div>

              {/* Action Items */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 mb-3">Action Items:</h3>
                {step.actions.map((action, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{action}</span>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                  disabled={activeStep === 1}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Previous Step
                </button>
                <button
                  onClick={() => setActiveStep(Math.min(steps.length, activeStep + 1))}
                  disabled={activeStep === steps.length}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step →
                </button>
              </div>
            </div>
          )
        )}

        {/* Quick Reference Card */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
          <div className="text-center mb-6">
            <Award className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Reference</h3>
            <p className="text-gray-600">Key actions for {roleDisplay} AI leadership</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4">
              <MessageSquare className="w-5 h-5 text-blue-600 mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">Positioning Message</h4>
              <p className="text-sm text-gray-600">
                "I'm leading AI adoption for {roleDisplay} work, focusing on enhancing human judgment rather than replacing it."
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <FileText className="w-5 h-5 text-green-600 mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">Key Deliverable</h4>
              <p className="text-sm text-gray-600">
                Create a "{roleDisplay} AI Playbook" with tools, processes, and quality controls for {industryDisplay}.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <BarChart3 className="w-5 h-5 text-purple-600 mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">Success Metrics</h4>
              <p className="text-sm text-gray-600">
                Track time saved, quality maintained, and team AI adoption rates for {roleDisplay} tasks.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <Target className="w-5 h-5 text-orange-600 mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">End Goal</h4>
              <p className="text-sm text-gray-600">
                Become known as the "{roleDisplay} AI Expert" both internally and in the {industryDisplay} industry.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Ready to implement your leadership strategy?</p>
            <div className="flex justify-center gap-3">
              <button 
                onClick={() => navigate('/plan')}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                View 90-Day Plan
              </button>
              <button 
                onClick={() => navigate('/templates')}
                className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Get Templates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILeadershipGuide;