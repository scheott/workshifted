// src/data/salesAssessmentQuestions.js
// Sales-specific assessment questions for AI Risk Score

export const salesAssessmentQuestions = [
  {
    id: 'current_role',
    question: 'What best describes your current sales role?',
    type: 'single-choice',
    options: [
      { value: 'sdr_bdr', label: 'SDR/BDR (Outbound prospecting & qualification)' },
      { value: 'ae', label: 'Account Executive (Closing deals)' },
      { value: 'manager', label: 'Sales Manager/Leader' },
      { value: 'csm', label: 'Customer Success/Account Manager' },
      { value: 'se', label: 'Sales Engineer/Solutions Consultant' },
      { value: 'other', label: 'Other sales-related role' }
    ],
    weight: 30
  },
  {
    id: 'daily_tasks',
    question: 'What percentage of your day is spent on these tasks?',
    helper: 'Think about prospecting, list building, email sequences, cold calling, CRM updates',
    type: 'slider',
    min: 0,
    max: 100,
    step: 5,
    labels: {
      0: '0% (All strategic work)',
      50: '50% (Mixed)',
      100: '100% (All automatable tasks)'
    },
    weight: 25
  },
  {
    id: 'ai_usage',
    question: 'How much do you currently use AI tools in your sales process?',
    type: 'likert5',
    anchors: [
      'Never use AI',
      'Rarely (ChatGPT sometimes)',
      'Sometimes (a few tools)',
      'Frequently (daily)',
      'Expert level (AI-first workflow)'
    ],
    weight: 20
  },
  {
    id: 'closing_ratio',
    question: 'How often do you personally close deals vs. hand off to others?',
    type: 'single-choice',
    options: [
      { value: 'always_close', label: 'I close all my own deals' },
      { value: 'mostly_close', label: 'I close most, hand off some' },
      { value: 'sometimes_close', label: 'About 50/50' },
      { value: 'rarely_close', label: 'I mostly generate leads for others' },
      { value: 'never_close', label: 'I only do prospecting/qualification' }
    ],
    weight: 15
  },
  {
    id: 'relationship_building',
    question: 'How critical are deep client relationships to your success?',
    type: 'likert5',
    anchors: [
      'Not important - volume game',
      'Somewhat important',
      'Important',
      'Very important',
      'Critical - relationship is everything'
    ],
    weight: 10
  },
  {
    id: 'company_ai',
    question: 'Is your company currently using or testing AI sales tools?',
    type: 'single-choice',
    options: [
      { value: 'yes_using', label: 'Yes, actively using AI tools' },
      { value: 'testing', label: 'Testing/piloting AI tools' },
      { value: 'discussing', label: 'Discussing but not implementing' },
      { value: 'not_yet', label: 'Not on our radar yet' },
      { value: 'dont_know', label: "I'm not sure" }
    ],
    weight: 5
  },
  {
    id: 'biggest_fear',
    question: 'What worries you most about AI in sales?',
    type: 'single-choice',
    options: [
      { value: 'replaced', label: 'My role will be eliminated' },
      { value: 'behind', label: "I'll fall behind competitors using AI" },
      { value: 'irrelevant', label: 'My skills will become irrelevant' },
      { value: 'quota', label: "Won't be able to hit quota without AI" },
      { value: 'not_worried', label: "I'm not worried about AI" }
    ],
    weight: 0 // This is for segmentation, not scoring
  },
  {
    id: 'learning_goal',
    question: 'What would make this assessment most valuable to you?',
    type: 'single-choice',
    options: [
      { value: 'tools', label: 'Specific AI tools I should learn' },
      { value: 'skills', label: 'Skills to develop to stay relevant' },
      { value: 'position', label: 'How to position myself as AI-enhanced' },
      { value: 'plan', label: 'Step-by-step 30-day action plan' },
      { value: 'all', label: 'All of the above!' }
    ],
    weight: 0 // This is for personalization, not scoring
  }
];

// Role-specific risk multipliers
export const roleRiskMultipliers = {
  sdr_bdr: 1.5,      // Highest risk - most automatable
  ae: 1.0,           // Moderate risk
  manager: 0.8,      // Lower risk - more strategic
  csm: 0.9,          // Moderate risk - relationship heavy
  se: 0.7,           // Lower risk - technical expertise
  other: 1.0         // Default
};

// AI tool categories for sales
export const salesAIToolCategories = [
  {
    id: 'prospecting',
    name: 'Prospecting & List Building',
    tools: ['Apollo.io', 'Clay', 'ZoomInfo', 'Cognism', 'Lusha'],
    description: 'AI-powered lead generation and enrichment'
  },
  {
    id: 'outreach',
    name: 'Outreach & Sequencing',
    tools: ['Outreach', 'Salesloft', 'Instantly', 'Smartlead', 'Lavender'],
    description: 'AI email writing and sequence optimization'
  },
  {
    id: 'research',
    name: 'Account Research',
    tools: ['ChatGPT', 'Perplexity', 'Gong', 'Chorus', '6sense'],
    description: 'AI-powered company and contact research'
  },
  {
    id: 'demos',
    name: 'Demo & Presentation',
    tools: ['Loom AI', 'Vidyard', 'Pitch', 'Beautiful.ai', 'Gamma'],
    description: 'AI-enhanced presentations and demos'
  },
  {
    id: 'closing',
    name: 'Closing & Documents',
    tools: ['DocuSign', 'PandaDoc', 'Proposify', 'DealHub', 'Docsend'],
    description: 'AI-powered proposals and contracts'
  }
];

export default salesAssessmentQuestions;
