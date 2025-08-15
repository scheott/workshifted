// src/pages/AIProofSalesCareers.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';

const SourceLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="underline decoration-dotted hover:decoration-solid hover:text-blue-700"
  >
    {children}
  </a>
);

const AIProofSalesCareers = () => {
  // Mapped to closest SOC roles from Frey & Osborne (see Sources section)
  const salesRiskData = [
    { role: 'Inside Sales Reps (Transactional)', risk: 85, automation: 'High', reason: 'Lead qualification, basic product demos, order processing' }, // 41-4012: 0.85
    { role: 'Telemarketing/Cold Callers', risk: 99, automation: 'High', reason: 'Automated dialing, script-based conversations, initial outreach' }, // 41-9041: 0.99
    { role: 'Sales Development Reps', risk: 55, automation: 'Medium-High', reason: 'Lead research, initial qualification, meeting scheduling' }, // 41-3011: 0.54 (~55)
    { role: 'Customer Success Reps', risk: 55, automation: 'Medium', reason: 'Basic account monitoring, renewal notifications, usage reporting' }, // 43-4051: 0.55
    { role: 'Account Executives', risk: 25, automation: 'Low-Medium', reason: 'Complex sales cycles, relationship building, negotiation' }, // 41-4011: 0.25
    { role: 'Sales Engineers', risk: 0.41, automation: 'Low-Medium', reason: 'Technical consulting, custom solutions, client education' }, // 41-9031: 0.0041 (~0.41%)
    { role: 'Enterprise Sales Directors', risk: 1.3, automation: 'Low', reason: 'Strategic relationships, complex deals, executive selling' }, // 11-2022: 0.013
    { role: 'VP Sales/CRO', risk: 1.5, automation: 'Very Low', reason: 'Sales strategy, team leadership, organizational relationships' } // 11-1011: 0.015
  ];

  const evolutionPaths = [
    {
      from: 'Inside Sales Rep',
      to: 'AI-Enhanced Sales Specialist',
      timeline: '4-6 months',
      keySkills: ['Sales AI tools', 'Consultative selling', 'Customer psychology'],
      description: 'Use AI for lead qualification and research while focusing on relationship building and complex deal closing'
    },
    {
      from: 'Sales Development Rep',
      to: 'Revenue Operations & AI Lead',
      timeline: '6-9 months',
      keySkills: ['Sales automation', 'Process optimization', 'Data analysis'],
      description: 'Become the expert who designs and manages AI-powered sales processes and workflows'
    },
    {
      from: 'Account Executive',
      to: 'Strategic Account AI Coordinator',
      timeline: '6-12 months',
      keySkills: ['Account intelligence', 'Relationship mapping', 'Strategic selling'],
      description: 'Leverage AI for account research and insights while leading complex, high-value sales relationships'
    },
    {
      from: 'Customer Success Rep',
      to: 'AI-Powered Growth Strategist',
      timeline: '8-12 months',
      keySkills: ['Predictive analytics', 'Expansion selling', 'Customer lifecycle management'],
      description: 'Use AI to predict customer needs and expansion opportunities while building strategic partnerships'
    }
  ];

  const aiImpactAreas = [
    {
      area: 'Lead Generation & Prospecting',
      aiCapability: 'Automated lead scoring, email sequences, social selling, contact discovery',
      humanAdvantage: 'Relationship building, complex qualification, industry expertise, trust development',
      recommendation: 'Use AI for research and initial outreach, focus on relationship building and consultative selling'
    },
    {
      area: 'Sales Process Management',
      aiCapability: 'CRM automation, pipeline analysis, forecasting, activity tracking',
      humanAdvantage: 'Deal strategy, negotiation tactics, stakeholder management, closing techniques',
      recommendation: 'Let AI handle data entry and analysis, specialize in deal strategy and relationship management'
    },
    {
      area: 'Customer Communication',
      aiCapability: 'Email templates, scheduling, basic follow-up, chatbot responses',
      humanAdvantage: 'Complex conversations, objection handling, emotional intelligence, persuasion',
      recommendation: 'Use AI for routine communication, focus on high-stakes conversations and relationship building'
    },
    {
      area: 'Sales Analytics & Forecasting',
      aiCapability: 'Performance tracking, trend analysis, predictive modeling, reporting',
      humanAdvantage: 'Strategic interpretation, market context, coaching insights, decision making',
      recommendation: 'Leverage AI for data analysis, focus on strategic insights and team development'
    }
  ];

  const aiResistantSkills = [
    {
      category: 'Relationship Building',
      skills: ['Trust development', 'Emotional intelligence', 'Active listening', 'Rapport building'],
      whyImportant: 'Complex B2B sales require human connection, empathy, and trust that AI cannot replicate'
    },
    {
      category: 'Strategic Selling',
      skills: ['Consultative approach', 'Solution design', 'Value articulation', 'ROI demonstration'],
      whyImportant: 'High-value sales require understanding customer business context and creating tailored solutions'
    },
    {
      category: 'Negotiation & Persuasion',
      skills: ['Complex negotiation', 'Objection handling', 'Influence techniques', 'Closing strategies'],
      whyImportant: 'Negotiation involves psychology, timing, and adaptive strategies that require human judgment'
    },
    {
      category: 'AI Integration',
      skills: ['Sales tech evaluation', 'Process automation', 'Data interpretation', 'Team training'],
      whyImportant: 'The future of sales involves managing AI tools while maintaining the human connection'
    }
  ];

  const ninetyDayPlan = [
    {
      phase: 'Foundation (Days 1-30)',
      focus: 'AI Tool Assessment & Integration',
      actions: [
        'Complete comprehensive sales AI risk assessment',
        'Audit current sales process for automation opportunities',
        'Master core sales AI tools (CRM AI, outreach automation)',
        'Identify your strongest relationship-building skills'
      ]
    },
    {
      phase: 'Optimization (Days 31-60)',
      focus: 'Process Enhancement & Skill Development',
      actions: [
        'Implement AI-assisted prospecting and lead qualification',
        'Develop consultative selling and strategic account skills',
        'Practice AI-enhanced customer research and preparation',
        'Build expertise in data-driven sales conversations'
      ]
    },
    {
      phase: 'Leadership (Days 61-90)',
      focus: 'Strategic Positioning & Team Impact',
      actions: [
        'Present sales efficiency improvements to management',
        'Lead team adoption of AI sales tools and best practices',
        'Establish yourself as the sales-AI integration expert',
        'Document productivity gains and plan advanced AI initiatives'
      ]
    }
  ];

  // Updated to reflect evidence-based probabilities (see Sources).
  const salesSpecializations = [
    {
      area: 'Enterprise Sales',
      riskLevel: 'Low (1.3%)', // Sales Managers 11-2022
      aiImpact: 'Account research, competitive intelligence, proposal automation',
      humanOpportunity: 'Executive relationships, complex negotiations, strategic partnerships',
      evolutionTip: 'Use AI for research and preparation while becoming the trusted advisor for C-level relationships'
    },
    {
      area: 'Technical Sales',
      riskLevel: 'Low (0.41%)', // Sales Engineers 41-9031
      aiImpact: 'Product demonstrations, technical documentation, configuration tools',
      humanOpportunity: 'Solution design, technical consulting, custom integrations',
      evolutionTip: 'Leverage AI for standard demos while specializing in complex technical consulting'
    },
    {
      area: 'Inside Sales',
      riskLevel: 'High (85%)', // Wholesale & Manufacturing Sales Reps (non-technical) 41-4012
      aiImpact: 'Lead qualification, initial outreach, basic product information',
      humanOpportunity: 'Consultative selling, relationship building, complex problem solving',
      evolutionTip: 'Use AI for efficiency while moving upmarket to more complex, relationship-driven sales'
    },
    {
      area: 'Channel Sales',
      riskLevel: 'Low-Medium (25%)', // Wholesale & Manufacturing Sales Reps (technical/scientific) 41-4011
      aiImpact: 'Partner onboarding, performance tracking, basic partner communication',
      humanOpportunity: 'Strategic partnerships, conflict resolution, joint business planning',
      evolutionTip: 'Leverage AI for partner management while focusing on strategic relationship development'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI-Proof Sales Careers: Navigate Sales Automation & Stay Competitive
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Sales is being transformed by AI-powered prospecting, automated sequences, and predictive analytics. Discover which sales roles remain AI-resistant and how to evolve into a relationship-focused, AI-enhanced sales professional.
            </p>
            <Link
              to="/auth"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg inline-block"
            >
              Get My Sales Career Evolution Plan
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              ✨ Free assessment • Sales-specific roadmap 
            </p>
          </div>
        </div>
      </section>

      {/* Sales AI Risk by Role */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI Automation Risk by Sales Role
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            <em>Risk percentages based on published probabilities for closely related occupations. Individual results may vary by industry, deal complexity, and specific responsibilities.</em>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {salesRiskData.map((role, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">{role.role}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    role.risk >= 70 ? 'bg-red-100 text-red-800' :
                    role.risk >= 50 ? 'bg-orange-100 text-orange-800' :
                    role.risk >= 30 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {role.risk}% Risk
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div 
                    className={`h-2 rounded-full ${
                      role.risk >= 70 ? 'bg-red-500' :
                      role.risk >= 50 ? 'bg-orange-500' :
                      role.risk >= 30 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${role.risk}%` }}
                  ></div>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>AI Impact:</strong> {role.reason}
                </p>
                <span className={`text-xs px-2 py-1 rounded ${
                  role.automation === 'High' ? 'bg-red-50 text-red-700' :
                  role.automation === 'Medium-High' ? 'bg-orange-50 text-orange-700' :
                  role.automation === 'Medium' ? 'bg-yellow-50 text-yellow-700' :
                  role.automation === 'Low-Medium' ? 'bg-blue-50 text-blue-700' :
                  'bg-green-50 text-green-700'
                }`}>
                  {role.automation} Automation Risk
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Impact Analysis */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI Impact by Sales Industry
          </h2>
          
        <div className="space-y-8">
          {[
            {
              industry: 'SaaS/Technology',
              riskLevel: 'Medium-High',
              trends: ['Product-led growth', 'Self-service onboarding', 'AI-powered demos'],
              humanValue: 'Enterprise deals, custom implementations, strategic consulting',
              advice: 'Move upmarket to enterprise accounts where human relationships and strategic selling remain crucial'
            },
            {
              industry: 'Financial Services',
              riskLevel: 'Medium',
              trends: ['Robo-advisors', 'Automated underwriting', 'Digital onboarding'],
              humanValue: 'Complex financial planning, regulatory compliance, trust building',
              advice: 'Focus on high-touch advisory roles and complex financial products requiring human expertise'
            },
            {
              industry: 'Manufacturing/Industrial',
              riskLevel: 'Low-Medium',
              trends: ['Digital catalogs', 'Automated quoting', 'Self-service ordering'],
              humanValue: 'Custom solutions, technical consulting, long-term partnerships',
              advice: 'Leverage industry expertise and technical knowledge for consultative, solution-based selling'
            }
          ].map((industry, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.industry}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    industry.riskLevel.includes('High') ? 'bg-red-100 text-red-800' :
                    industry.riskLevel.includes('Medium') ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {industry.riskLevel} Risk
                  </span>
                </div>
                
                <div>
                  <h4 className="font-medium text-red-700 mb-2">AI Trends:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {industry.trends.map((trend, trendIndex) => (
                      <li key={trendIndex}>• {trend}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Human Value:</h4>
                  <p className="text-gray-600 text-sm">{industry.humanValue}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Strategy:</h4>
                  <p className="text-gray-600 text-sm">{industry.advice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Sales Specialization Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI Impact by Sales Specialization
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              ...[
                {
                  area: 'Enterprise Sales',
                  riskLevel: 'Low (1.3%)',
                  aiImpact: 'Account research, competitive intelligence, proposal automation',
                  humanOpportunity: 'Executive relationships, complex negotiations, strategic partnerships',
                  evolutionTip: 'Use AI for research and preparation while becoming the trusted advisor for C-level relationships'
                },
                {
                  area: 'Technical Sales',
                  riskLevel: 'Low (0.41%)',
                  aiImpact: 'Product demonstrations, technical documentation, configuration tools',
                  humanOpportunity: 'Solution design, technical consulting, custom integrations',
                  evolutionTip: 'Leverage AI for standard demos while specializing in complex technical consulting'
                },
                {
                  area: 'Inside Sales',
                  riskLevel: 'High (85%)',
                  aiImpact: 'Lead qualification, initial outreach, basic product information',
                  humanOpportunity: 'Consultative selling, relationship building, complex problem solving',
                  evolutionTip: 'Use AI for efficiency while moving upmarket to more complex, relationship-driven sales'
                },
                {
                  area: 'Channel Sales',
                  riskLevel: 'Low-Medium (25%)',
                  aiImpact: 'Partner onboarding, performance tracking, basic partner communication',
                  humanOpportunity: 'Strategic partnerships, conflict resolution, joint business planning',
                  evolutionTip: 'Leverage AI for partner management while focusing on strategic relationship development'
                }
              ]
            ].map((spec, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{spec.area}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    spec.riskLevel.includes('High') ? 'bg-red-100 text-red-800' :
                    spec.riskLevel.includes('Medium') ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {spec.riskLevel}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">AI Impact:</h4>
                    <p className="text-gray-600 text-sm">{spec.aiImpact}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Human Opportunity:</h4>
                    <p className="text-gray-600 text-sm">{spec.humanOpportunity}</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Evolution Strategy:</h4>
                    <p className="text-blue-800 text-sm">{spec.evolutionTip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Impact Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How AI Is Transforming Sales Functions
          </h2>
          
          <div className="space-y-8">
            {aiImpactAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{area.area}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-red-700 mb-2 flex items-center">
                      <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                      AI Capability
                    </h4>
                    <p className="text-gray-600 text-sm">{area.aiCapability}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-green-700 mb-2 flex items-center">
                      <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span>
                      Human Advantage
                    </h4>
                    <p className="text-gray-600 text-sm">{area.humanAdvantage}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2 flex items-center">
                      <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                      Evolution Strategy
                    </h4>
                    <p className="text-gray-600 text-sm">{area.recommendation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-Day Implementation Plan */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Your 90-Day Sales Evolution Plan
          </h2>
          
          <div className="space-y-8">
            {ninetyDayPlan.map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                    <p className="text-blue-600 font-medium">{phase.focus}</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <ul className="space-y-2">
                    {phase.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-600">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/auth"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Get My Detailed Sales Evolution Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Sources</h2>
          <p className="text-sm text-gray-700 mb-4">
            Role risk percentages are mapped to the closest U.S. SOC occupation using:
          </p>
          <ul className="text-xs text-gray-600 space-y-2">
            <li>
              • Frey, C. B., & Osborne, M. A. (2013). <em>The Future of Employment</em>. Oxford Martin. 
              <SourceLink href="https://oms-www.files.svdcdn.com/production/downloads/academic/The_Future_of_Employment.pdf">Full paper (occupation probabilities table)</SourceLink>
            </li>
            <li>
              Mapping examples: Telemarketers (99%), Customer Service Representatives (55%), Advertising Sales Agents (54%), 
              Sales Representatives—Wholesale & Manufacturing (Non-Technical) (85%), Sales Representatives—Technical & Scientific Products (25%), 
              Sales Engineers (0.41%), Sales Managers (1.3%), Chief Executives (1.5%).
            </li>
          </ul>
          <p className="text-xs text-gray-500 mt-4">
            Notes: We align modern titles to the most comparable SOC roles. Actual risk depends on company, product complexity, and responsibilities.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIProofSalesCareers;
