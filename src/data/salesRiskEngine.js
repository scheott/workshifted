// src/data/salesRiskEngine.js
// Sales-specific risk scoring and evolution path generation

import { roleRiskMultipliers, salesAIToolCategories } from './salesAssessmentQuestions';

/**
 * Compute the sales AI risk score based on assessment answers
 * @param {Object} answers - The user's answers from the assessment
 * @returns {Object} - Risk score, level, label, and color
 */
export const computeSalesRiskScore = (answers) => {
  let riskScore = 0;
  
  // Role-based base risk (0-30 points)
  const roleRisks = {
    sdr_bdr: 30,      // Highest risk
    ae: 18,           // Moderate
    manager: 12,      // Lower
    csm: 15,          // Moderate
    se: 10,           // Lower
    other: 18         // Default moderate
  };
  riskScore += roleRisks[answers.current_role] || 18;
  
  // Daily tasks automation exposure (0-25 points)
  // Higher percentage of automatable tasks = higher risk
  const dailyTasksPercent = answers.daily_tasks || 50;
  riskScore += Math.round(dailyTasksPercent * 0.25);
  
  // AI usage level (0-20 points, INVERSE)
  // Less AI usage = higher risk (you're behind)
  const aiUsageRisks = {
    1: 20,  // Never use AI - highest risk
    2: 15,  // Rarely
    3: 10,  // Sometimes
    4: 5,   // Frequently
    5: 0    // Expert - no additional risk
  };
  riskScore += aiUsageRisks[answers.ai_usage] || 10;
  
  // Closing ratio (0-15 points)
  // Less closing = more risk (SDR work is automatable)
  const closingRisks = {
    always_close: 0,
    mostly_close: 3,
    sometimes_close: 8,
    rarely_close: 12,
    never_close: 15
  };
  riskScore += closingRisks[answers.closing_ratio] || 8;
  
  // Relationship building importance (0-10 points, INVERSE)
  // More relationship focus = less risk
  const relationshipRisks = {
    1: 10,  // Not important - high risk
    2: 8,
    3: 5,
    4: 2,
    5: 0    // Critical - lowest risk
  };
  riskScore += relationshipRisks[answers.relationship_building] || 5;
  
  // Cap at 100
  riskScore = Math.min(100, riskScore);
  
  // Categorize risk
  let riskLevel, riskLabel, riskColor, riskEmoji;
  if (riskScore >= 70) {
    riskLevel = 'critical';
    riskLabel = 'CRITICAL RISK';
    riskColor = 'red';
    riskEmoji = '🚨';
  } else if (riskScore >= 50) {
    riskLevel = 'high';
    riskLabel = 'HIGH RISK';
    riskColor = 'orange';
    riskEmoji = '⚠️';
  } else if (riskScore >= 30) {
    riskLevel = 'moderate';
    riskLabel = 'MODERATE RISK';
    riskColor = 'yellow';
    riskEmoji = '🔄';
  } else {
    riskLevel = 'low';
    riskLabel = 'LOW RISK';
    riskColor = 'green';
    riskEmoji = '✅';
  }
  
  return {
    score: riskScore,
    level: riskLevel,
    label: riskLabel,
    color: riskColor,
    emoji: riskEmoji
  };
};

/**
 * Generate evolution paths based on answers and risk score
 * @param {Object} answers - The user's answers
 * @param {Object} riskResult - The computed risk score
 * @returns {Array} - Sorted evolution paths
 */
export const generateSalesEvolutionPaths = (answers, riskResult) => {
  const paths = [];
  
  // Path 1: AI-Enhanced Closer
  paths.push({
    id: 'ai_closer',
    title: 'AI-Enhanced Closer',
    subtitle: 'From SDR grind to strategic closing',
    description: 'Use AI for all prospecting and admin work, focus 100% on high-value closing conversations. Let AI find the deals, you close them.',
    timeline: '30 days',
    keySkills: ['Prompt engineering', 'AI tool stacking', 'Strategic selling', 'Complex negotiations'],
    riskReduction: 60,
    salaryImpact: '+30-50%',
    recommended: answers.current_role === 'sdr_bdr' || answers.current_role === 'ae',
    weeklyPlan: [
      { week: 1, focus: 'AI Tool Stack Setup', tasks: ['Set up Apollo/Clay', 'ChatGPT sales prompts', 'CRM automation'] },
      { week: 2, focus: 'AI Prospecting Mastery', tasks: ['Build AI-powered lists', 'Sequence automation', 'Response handling'] },
      { week: 3, focus: 'AI-Enhanced Discovery', tasks: ['Research prompts', 'Meeting prep AI', 'Demo optimization'] },
      { week: 4, focus: 'Position as Closer', tasks: ['LinkedIn update', 'Internal pitch', 'Interview prep'] }
    ]
  });
  
  // Path 2: Sales Operations + AI Specialist
  paths.push({
    id: 'sales_ops',
    title: 'Sales Ops + AI Specialist',
    subtitle: 'Become the AI implementation expert',
    description: 'Position yourself as the person who helps the entire sales team leverage AI. Design workflows, select tools, and train others.',
    timeline: '60 days',
    keySkills: ['Sales tech stack', 'Process design', 'Change management', 'AI implementation'],
    riskReduction: 70,
    salaryImpact: '+20-40%',
    recommended: answers.current_role === 'manager',
    weeklyPlan: [
      { week: 1, focus: 'AI Tool Audit', tasks: ['Map current stack', 'Identify gaps', 'Research solutions'] },
      { week: 2, focus: 'Pilot Program Design', tasks: ['Select tools', 'Create test plan', 'Define metrics'] },
      { week: 3, focus: 'Implementation', tasks: ['Tool setup', 'Workflow design', 'Integration'] },
      { week: 4, focus: 'Training & Rollout', tasks: ['Create playbooks', 'Train team', 'Measure results'] }
    ]
  });
  
  // Path 3: Strategic Account Manager
  paths.push({
    id: 'strategic_am',
    title: 'Strategic Account Manager',
    subtitle: 'Deep relationships + AI-powered insights',
    description: 'Focus on enterprise accounts where relationships matter most. Use AI for research and insights while you build trust.',
    timeline: '45 days',
    keySkills: ['Account planning', 'Business acumen', 'Data storytelling', 'Executive selling'],
    riskReduction: 50,
    salaryImpact: '+25-45%',
    recommended: answers.relationship_building >= 4,
    weeklyPlan: [
      { week: 1, focus: 'AI Research Mastery', tasks: ['Company analysis prompts', 'Stakeholder mapping', 'Industry trends'] },
      { week: 2, focus: 'Strategic Planning', tasks: ['Account plans with AI', 'Growth opportunities', 'Risk analysis'] },
      { week: 3, focus: 'Executive Engagement', tasks: ['Insight delivery', 'QBR enhancement', 'Value communication'] },
      { week: 4, focus: 'Positioning', tasks: ['Case study creation', 'Internal advocacy', 'Career positioning'] }
    ]
  });
  
  // Path 4: Revenue Operations Leader
  paths.push({
    id: 'rev_ops',
    title: 'Revenue Operations Leader',
    subtitle: 'From individual contributor to strategic leader',
    description: 'Move into RevOps where you design the systems and processes that help the entire revenue team succeed with AI.',
    timeline: '90 days',
    keySkills: ['Revenue strategy', 'Analytics', 'Cross-functional leadership', 'Tech stack design'],
    riskReduction: 80,
    salaryImpact: '+40-60%',
    recommended: answers.current_role === 'manager' && riskResult.score < 50,
    weeklyPlan: [
      { week: 1, focus: 'RevOps Foundation', tasks: ['Map revenue process', 'Data analysis', 'Stakeholder interviews'] },
      { week: 2, focus: 'AI Strategy', tasks: ['Tool evaluation', 'ROI modeling', 'Implementation plan'] },
      { week: 3, focus: 'Process Optimization', tasks: ['Workflow design', 'Automation setup', 'Metrics dashboard'] },
      { week: 4, focus: 'Leadership Positioning', tasks: ['Present results', 'Expand scope', 'Career development'] }
    ]
  });
  
  // Sort by recommended first, then by risk reduction
  return paths.sort((a, b) => {
    if (a.recommended && !b.recommended) return -1;
    if (!a.recommended && b.recommended) return 1;
    return b.riskReduction - a.riskReduction;
  });
};

/**
 * Generate 3 quick wins based on the user's situation
 * @param {Object} answers - The user's answers
 * @returns {Array} - 3 quick wins they can implement today
 */
export const generateQuickWins = (answers) => {
  const allQuickWins = [
    {
      id: 'list_building',
      title: 'Automate Your List Building',
      description: 'Use ChatGPT to build targeted prospect lists in minutes instead of hours.',
      prompt: `You are a sales prospecting expert. Generate a list of 20 companies that match these criteria:
- Industry: [YOUR INDUSTRY]
- Company size: [YOUR ICP SIZE]
- Location: [YOUR TERRITORY]
- Likely pain points: [YOUR SOLUTION SOLVES]

For each company, provide:
1. Company name
2. Why they might need [YOUR SOLUTION]
3. Likely decision maker title
4. One personalization hook`,
      timeToImplement: '10 minutes',
      expectedResult: 'Build lists 5x faster',
      relevantFor: ['sdr_bdr', 'ae']
    },
    {
      id: 'email_personalization',
      title: '10x Your Email Response Rate',
      description: 'Use AI to write hyper-personalized emails that actually get responses.',
      prompt: `Write a cold email to [PROSPECT NAME] at [COMPANY].

Context:
- Their company recently [TRIGGER EVENT]
- My product helps with [VALUE PROP]
- Keep it under 100 words
- Make it feel human, not AI-generated
- Include one specific insight about their company
- End with a soft CTA

Tone: Casual, helpful, not salesy`,
      timeToImplement: '5 minutes per email',
      expectedResult: '3x higher response rate',
      relevantFor: ['sdr_bdr', 'ae']
    },
    {
      id: 'meeting_prep',
      title: 'AI-Powered Meeting Prep',
      description: 'Walk into every call with deep company research done in 5 minutes.',
      prompt: `Research [COMPANY NAME] and prepare me for a sales call.

Provide:
1. Company overview (2 sentences)
2. Recent news or announcements
3. Likely challenges they face
4. 3 discovery questions specific to their situation
5. Potential objections and how to handle them
6. Key stakeholders to ask about`,
      timeToImplement: '5 minutes',
      expectedResult: 'Double your discovery quality',
      relevantFor: ['sdr_bdr', 'ae', 'se']
    },
    {
      id: 'objection_handling',
      title: 'Build Your Objection Response Library',
      description: 'Use AI to prepare responses to every possible objection.',
      prompt: `I sell [YOUR PRODUCT/SERVICE] to [YOUR ICP].

Generate responses to these common objections:
1. "We don't have budget right now"
2. "We're already working with [COMPETITOR]"
3. "I need to talk to my team"
4. "Send me some information"
5. "The timing isn't right"

For each objection, provide:
- Acknowledgment
- Pivot question
- Value reframe
- Next step close`,
      timeToImplement: '15 minutes',
      expectedResult: 'Handle objections confidently',
      relevantFor: ['sdr_bdr', 'ae', 'csm']
    },
    {
      id: 'linkedin_positioning',
      title: 'Update Your LinkedIn for AI Era',
      description: 'Position yourself as an AI-powered sales professional, not an AI casualty.',
      prompt: `Rewrite my LinkedIn headline and summary.

Current role: [YOUR ROLE]
Skills I want to highlight: [LIST SKILLS]
Unique value I bring: [YOUR VALUE]

New headline should:
- Mention AI-powered or AI-enhanced
- Focus on results, not tasks
- Be under 120 characters

New summary should:
- Lead with my transformation mindset
- Mention specific AI tools I use
- Include quantified results
- End with what I'm looking for`,
      timeToImplement: '20 minutes',
      expectedResult: 'Stand out to recruiters',
      relevantFor: ['sdr_bdr', 'ae', 'manager', 'se', 'csm']
    },
    {
      id: 'demo_optimization',
      title: 'Create an AI-Enhanced Demo Flow',
      description: 'Use AI to personalize every demo and anticipate questions.',
      prompt: `Help me prepare a product demo for [COMPANY NAME].

Based on their situation:
- Industry: [THEIR INDUSTRY]
- Size: [THEIR SIZE]
- Likely pain points: [THEIR CHALLENGES]

Create:
1. Custom demo agenda (3-4 key points)
2. Personalized use cases to show
3. Questions to ask during the demo
4. Anticipated questions and answers
5. Custom ROI story for their situation`,
      timeToImplement: '10 minutes per demo',
      expectedResult: 'Increase demo-to-close rate',
      relevantFor: ['ae', 'se']
    }
  ];
  
  // Filter by relevance and return top 3
  const role = answers.current_role || 'sdr_bdr';
  const relevantWins = allQuickWins.filter(win => 
    win.relevantFor.includes(role)
  );
  
  return relevantWins.slice(0, 3);
};

/**
 * Get recommended AI tools based on role and needs
 * @param {Object} answers - The user's answers
 * @returns {Array} - Recommended tools by category
 */
export const getRecommendedTools = (answers) => {
  const role = answers.current_role || 'sdr_bdr';
  
  const roleToolPriorities = {
    sdr_bdr: ['prospecting', 'outreach', 'research'],
    ae: ['research', 'demos', 'closing'],
    manager: ['research', 'demos', 'closing'],
    csm: ['research', 'closing', 'demos'],
    se: ['research', 'demos', 'closing'],
    other: ['prospecting', 'outreach', 'research']
  };
  
  const priorities = roleToolPriorities[role];
  
  return salesAIToolCategories
    .filter(cat => priorities.includes(cat.id))
    .sort((a, b) => priorities.indexOf(a.id) - priorities.indexOf(b.id));
};

export default {
  computeSalesRiskScore,
  generateSalesEvolutionPaths,
  generateQuickWins,
  getRecommendedTools
};
