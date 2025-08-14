// Personalized Templates Library - Uses Assessment Data
// src/pages/TemplatesLibrary.jsx

import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import DashboardHeader from '../components/DashboardHeader';
import { Download, FileText, Mail, MessageSquare, Copy, Check } from 'lucide-react';
// Import individual functions instead of non-existent collections
import { 
  linkedinHeadline, 
  linkedinAbout, 
  linkedinFeaturedPost 
} from '../data/premiumContent/linkedinScripts';
import { 
  aiInitiativeEmail, 
  pilotScopeOnePager, 
  statusUpdateEmail 
} from '../data/premiumContent/bossProposals';

const TemplatesLibrary = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('linkedin');
  const [copiedId, setCopiedId] = useState(null);
  const [latestAssessment, setLatestAssessment] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Get personalization tokens from assessment
  const getPersonalizationTokens = () => {
    if (!latestAssessment) return {};

    const answers = latestAssessment.answers || {};
    const role = answers.profile_role_family || 'Professional';
    const industry = answers.profile_industry || 'Technology';
    const riskScore = latestAssessment.risk_result?.score || 50;

    return {
      role: role.charAt(0).toUpperCase() + role.slice(1),
      industry: industry.charAt(0).toUpperCase() + industry.slice(1),
      riskScore: riskScore,
      riskLevel: riskScore >= 70 ? 'High' : riskScore >= 40 ? 'Moderate' : 'Low',
      company: 'your company' // Could be extracted from assessment if available
    };
  };

  // Personalize template content
  const personalizeContent = (content, tokens) => {
    return content.replace(/\{\{(\w+)\}\}/g, (match, key) => tokens[key] || match);
  };

  const tokens = getPersonalizationTokens();

  // Generate personalized templates using assessment data
  const generatePersonalizedTemplates = () => {
    if (!latestAssessment) return { linkedin: [], proposals: [], emails: [] };

    return {
      linkedin: [
        {
          id: 'linkedin-ai-skills',
          title: `${tokens.role} AI Skills Showcase`,
          description: 'Position yourself as an AI-forward professional',
          content: personalizeContent(`🤖 Just completed my first month integrating AI into my {{role}} workflow

Key wins this month:
• Reduced routine {{industry}} tasks by 30-40% using ChatGPT
• Created reusable prompt templates for our team
• Built quality control processes to maintain standards
• Identified 3 new automation opportunities

My AI risk assessment showed {{riskLevel}} automation risk - but that just means it's time to evolve from task-doer to AI-coordinator.

The future belongs to professionals who can direct AI, not those who compete with it.

What AI tools are transforming your {{role}} work? 👇

#AITransformation #{{industry}} #FutureOfWork #{{role}}`, tokens)
        },
        {
          id: 'linkedin-coordinator',
          title: 'AI Coordinator Positioning',
          description: 'Position yourself as the team AI expert',
          content: personalizeContent(`💡 Stepping up as the unofficial "AI Coordinator" for our {{role}} team

My mission: Help {{company}} harness AI tools while maintaining the human judgment that makes us valuable.

This month's focus:
✅ Audited which {{industry}} tasks could benefit from AI assistance  
✅ Tested 5 different AI tools for our specific workflows
✅ Created safety protocols and quality checkpoints
✅ Trained 3 colleagues on prompt engineering basics

The goal isn't to replace {{role}} expertise - it's to amplify it.

Who else is leading AI adoption in their {{industry}} team? Let's connect! 🚀

#AILeadership #{{role}} #{{industry}} #WorkplaceInnovation`, tokens)
        }
      ],
      proposals: [
        {
          id: 'proposal-ai-initiative',
          title: `${tokens.role} AI Automation Pilot`,
          description: 'Pitch an AI project specific to your role',
          content: aiInitiativeEmail({
            managerName: '[Boss Name]',
            project: `{{role}} process optimization`,
            timebox: '4 weeks',
            outcome: `reduce routine {{industry}} tasks by 30%`,
            metricOwner: 'Operations',
            safeguards: ['human review', 'quality checkpoints', 'rollback plan']
          }).replace(/\{\{(\w+)\}\}/g, (match, key) => tokens[key] || match)
        }
      ],
      emails: [
        {
          id: 'email-status-update',
          title: `${tokens.role} AI Project Status`,
          description: 'Weekly progress update template',
          content: statusUpdateEmail({
            pilotName: `{{role}} AI Integration`,
            week: '[X]',
            progress: ['Automated [specific {{industry}} task]', 'Created prompt library with 8 templates', 'Achieved 95% accuracy with QA checkpoint'],
            blockers: ['[Specific challenge if any]'],
            next: ['Expand to [next process]', 'Train 2 more team members', 'Document {{industry}} best practices']
          }).replace(/\{\{(\w+)\}\}/g, (match, key) => tokens[key] || match)
        }
      ]
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your personalized templates...</p>
        </div>
      </div>
    );
  }

  const templates = generatePersonalizedTemplates();

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader 
        user={user}
        onSignOut={() => {}} 
        currentPage="templates"
      />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Personalized Template Library</h1>
          <p className="text-gray-600">
            Templates customized for your {tokens.role} role in {tokens.industry}
            {tokens.riskScore && ` (Risk Score: ${tokens.riskScore}/100)`}
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'linkedin', label: 'LinkedIn Scripts', icon: MessageSquare },
              { id: 'proposals', label: 'Boss Proposals', icon: FileText },
              { id: 'emails', label: 'Status Updates', icon: Mail }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Personalization Notice */}
        {latestAssessment && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-900">Personalized for You</span>
            </div>
            <p className="text-sm text-blue-700">
              These templates are customized based on your assessment: {tokens.role} role, {tokens.industry} industry, 
              with {tokens.riskLevel.toLowerCase()} AI automation risk. Feel free to edit before using.
            </p>
          </div>
        )}

        {/* Template Grid */}
        <div className="grid gap-6">
          {templates[activeTab]?.map((template) => (
            <div key={template.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{template.title}</h3>
                  <p className="text-sm text-gray-600">{template.description}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(template.content, template.id)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors text-sm font-medium"
                >
                  {copiedId === template.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                  {template.content}
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* No Assessment Warning */}
        {!latestAssessment && (
          <div className="text-center py-12">
            <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment Required</h3>
            <p className="text-gray-600 mb-4">
              Take the AI risk assessment to unlock personalized templates.
            </p>
            <button
              onClick={() => navigate('/assessment')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Take Assessment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplatesLibrary;