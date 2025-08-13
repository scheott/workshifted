// src/pages/AIProofSalesCareers.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';

const AIProofSalesCareers = () => {
  const salesRiskData = [
    { role: 'Inside Sales Reps (Transactional)', risk: 68, automation: 'High', reason: 'Lead qualification, basic product demos, order processing' },
    { role: 'Telemarketing/Cold Callers', risk: 75, automation: 'High', reason: 'Automated dialing, script-based conversations, initial outreach' },
    { role: 'Sales Development Reps', risk: 55, automation: 'Medium-High', reason: 'Lead research, initial qualification, meeting scheduling' },
    { role: 'Customer Success Reps', risk: 48, automation: 'Medium', reason: 'Basic account monitoring, renewal notifications, usage reporting' },
    { role: 'Account Executives', risk: 42, automation: 'Medium', reason: 'Complex sales cycles, relationship building, negotiation' },
    { role: 'Sales Engineers', risk: 35, automation: 'Low-Medium', reason: 'Technical consulting, custom solutions, client education' },
    { role: 'Enterprise Sales Directors', risk: 25, automation: 'Low', reason: 'Strategic relationships, complex deals, executive selling' },
    { role: 'VP Sales/CRO', risk: 18, automation: 'Very Low', reason: 'Sales strategy, team leadership, organizational relationships' }
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

  const salesSpecializations = [
    {
      area: 'Enterprise Sales',
      riskLevel: 'Low (25%)',
      aiImpact: 'Account research, competitive intelligence, proposal automation',
      humanOpportunity: 'Executive relationships, complex negotiations, strategic partnerships',
      evolutionTip: 'Use AI for research and preparation while becoming the trusted advisor for C-level relationships'
    },
    {
      area: 'Technical Sales',
      riskLevel: 'Low-Medium (35%)',
      aiImpact: 'Product demonstrations, technical documentation, configuration tools',
      humanOpportunity: 'Solution design, technical consulting, custom integrations',
      evolutionTip: 'Leverage AI for standard demos while specializing in complex technical consulting'
    },
    {
      area: 'Inside Sales',
      riskLevel: 'High (68%)',
      aiImpact: 'Lead qualification, initial outreach, basic product information',
      humanOpportunity: 'Consultative selling, relationship building, complex problem solving',
      evolutionTip: 'Use AI for efficiency while moving upmarket to more complex, relationship-driven sales'
    },
    {
      area: 'Channel Sales',
      riskLevel: 'Medium (45%)',
      aiImpact: 'Partner onboarding, performance tracking, basic partner communication',
      humanOpportunity: 'Strategic partnerships, conflict resolution, joint business planning',
      evolutionTip: 'Leverage AI for partner management while focusing on strategic relationship development'
    }
  ];

  const industryInsights = [
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
              ✨ Free assessment • Sales-specific roadmap • Join 723+ sales professionals
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
            <em>Risk percentages based on current AI capabilities in sales technology. Individual results may vary by industry, deal complexity, and specific responsibilities.</em>
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
            {industryInsights.map((industry, index) => (
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
            {salesSpecializations.map((spec, index) => (
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

      {/* Career Evolution Paths */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Sales Career Evolution Paths
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Transform your existing sales role into an AI-resistant position. These evolution paths build on your sales skills while positioning you for an AI-augmented sales future.
            <em> Timeline estimates based on focused skill development and may vary by individual circumstances.</em>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {evolutionPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-medium text-gray-600 mb-2">From:</h3>
                  <p className="text-xl font-semibold text-gray-900 mb-4">{path.from}</p>
                  <div className="text-3xl mb-4">⬇️</div>
                  <h3 className="text-lg font-medium text-blue-600 mb-2">To:</h3>
                  <p className="text-xl font-bold text-blue-600">{path.to}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Skills to Develop:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.keySkills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Evolution Strategy:</h4>
                    <p className="text-gray-600 text-sm">{path.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-gray-500">Timeline: {path.timeline}</span>
                    <Link
                      to="/auth"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Get My Plan
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Resistant Sales Skills */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Essential AI-Resistant Sales Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiResistantSkills.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Core Skills:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Why AI-Resistant:</h4>
                  <p className="text-gray-600 text-sm">{category.whyImportant}</p>
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

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Sales Career Evolution FAQ
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Will AI replace salespeople entirely?</h3>
              <p className="text-gray-600">
                AI will automate many routine sales tasks, but complex B2B sales, relationship building, and strategic selling remain fundamentally human activities. AI creates opportunities for salespeople to focus on higher-value activities while handling administrative tasks more efficiently. The most successful salespeople will learn to collaborate with AI rather than compete against it.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">How quickly is AI changing sales?</h3>
              <p className="text-gray-600">
                AI adoption in sales is accelerating rapidly, with lead generation, email sequencing, and CRM automation already widespread. However, complex deal closing, relationship management, and strategic selling remain primarily human-driven. The pace varies significantly by industry, deal size, and company maturity.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Should I move to enterprise sales to be AI-resistant?</h3>
              <p className="text-gray-600">
                Enterprise sales generally offers more AI resistance due to relationship complexity and deal size, but it's not the only path. You can also evolve within your current segment by developing consultative skills, industry expertise, and AI collaboration capabilities. The key is adding human value that complements AI efficiency.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">What sales AI tools should I learn?</h3>
              <p className="text-gray-600">
                Focus on tools in your current tech stack first - most CRMs now have AI features. Learn prospecting automation (Outreach, Apollo), conversation intelligence (Gong, Chorus), and forecasting tools. However, don't neglect fundamental sales skills - AI tools enhance good salespeople but can't fix poor sales fundamentals.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Are these evolution timelines realistic for sales roles?</h3>
              <p className="text-gray-600">
                Timeline estimates assume focused effort and vary based on your experience, current skills, and market conditions. Sales roles often require relationship building and trust development, which take time. Some salespeople may evolve faster, others slower. Success depends on individual effort, market opportunity, and company support for skill development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Evolve Your Sales Career Before AI Disruption
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take our sales-specific assessment to discover your automation risk and get a personalized roadmap to become a relationship-focused, AI-enhanced sales professional.
          </p>
          <Link
            to="/auth"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            Start My Sales Evolution Assessment
          </Link>
          <p className="text-sm text-blue-200 mt-4">
            ✨ Sales-specific analysis • 90-day roadmap • Join 723+ sales professionals
          </p>
          <p className="text-xs text-blue-300 mt-2">
            <em>Educational guidance only. Career outcomes depend on market conditions, individual effort, and company decisions.</em>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIProofSalesCareers;