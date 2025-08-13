// src/pages/AIProofMarketingCareers.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';

const AIProofMarketingCareers = () => {
  const marketingRiskData = [
    { role: 'Marketing Coordinators', risk: 75, automation: 'High', reason: 'Email scheduling, basic analytics, content distribution' },
    { role: 'PPC Specialists', risk: 65, automation: 'Medium-High', reason: 'Bid management, keyword research, basic optimization' },
    { role: 'Content Writers (SEO)', risk: 70, automation: 'High', reason: 'Template-based writing, basic optimization' },
    { role: 'Marketing Analysts', risk: 60, automation: 'Medium-High', reason: 'Reporting, data collection, trend analysis' },
    { role: 'Marketing Managers', risk: 45, automation: 'Medium', reason: 'Strategy, team management, stakeholder relations' },
    { role: 'Brand Strategists', risk: 25, automation: 'Low', reason: 'Creative vision, brand voice, strategic planning' },
    { role: 'Growth Product Managers', risk: 35, automation: 'Low-Medium', reason: 'User psychology, complex experimentation' },
    { role: 'Creative Directors', risk: 20, automation: 'Low', reason: 'Artistic vision, team leadership, client relationships' }
  ];

  const evolutionPaths = [
    {
      from: 'Marketing Coordinator',
      to: 'AI Marketing Operations Specialist',
      timeline: '4-6 months',
      keySkills: ['AI tool mastery', 'Workflow automation', 'Process optimization'],
      description: 'Become the person who manages and optimizes AI marketing tools and processes'
    },
    {
      from: 'Content Writer',
      to: 'AI Content Strategist',
      timeline: '3-6 months',
      keySkills: ['Prompt engineering', 'Brand voice curation', 'Content quality control'],
      description: 'Lead AI-assisted content creation while ensuring brand consistency and quality'
    },
    {
      from: 'Marketing Analyst',
      to: 'Marketing AI Integration Lead',
      timeline: '6-9 months',
      keySkills: ['AI analytics tools', 'Data interpretation', 'Strategic insights'],
      description: 'Bridge the gap between AI-generated data and strategic business decisions'
    },
    {
      from: 'Marketing Manager',
      to: 'AI Marketing Strategist',
      timeline: '6-12 months',
      keySkills: ['AI strategy development', 'Team leadership', 'ROI optimization'],
      description: 'Develop comprehensive AI marketing strategies and lead human-AI collaboration'
    }
  ];

  const aiResistantSkills = [
    {
      category: 'Strategic Thinking',
      skills: ['Brand positioning', 'Market strategy', 'Competitive analysis', 'Long-term planning'],
      whyImportant: 'AI can analyze data but requires human insight for strategic interpretation and planning'
    },
    {
      category: 'Creative Leadership',
      skills: ['Creative direction', 'Brand voice development', 'Campaign concepting', 'Visual storytelling'],
      whyImportant: 'Original creative vision and brand authenticity remain uniquely human capabilities'
    },
    {
      category: 'Relationship Management',
      skills: ['Stakeholder communication', 'Client relationships', 'Team leadership', 'Cross-functional collaboration'],
      whyImportant: 'Complex relationships and organizational dynamics require human emotional intelligence'
    },
    {
      category: 'AI Collaboration',
      skills: ['Prompt engineering', 'AI tool evaluation', 'Quality control', 'Human-AI workflow design'],
      whyImportant: 'The future of marketing involves managing AI tools rather than being replaced by them'
    }
  ];

  const aiImpactAreas = [
    {
      area: 'Content Creation',
      aiCapability: 'Generate copy, social posts, email content, basic articles',
      humanAdvantage: 'Brand voice curation, strategic messaging, authentic storytelling',
      recommendation: 'Use AI for first drafts, focus on editing and brand alignment'
    },
    {
      area: 'Data Analysis',
      aiCapability: 'Process large datasets, identify patterns, generate reports',
      humanAdvantage: 'Business context interpretation, strategic insights, actionable recommendations',
      recommendation: 'Let AI handle data processing, focus on strategic interpretation'
    },
    {
      area: 'Campaign Management',
      aiCapability: 'Automated bidding, audience targeting, A/B testing',
      humanAdvantage: 'Creative strategy, campaign concepting, cross-channel orchestration',
      recommendation: 'Use AI for optimization, lead creative and strategic direction'
    },
    {
      area: 'Customer Segmentation',
      aiCapability: 'Behavioral analysis, predictive modeling, automated segmentation',
      humanAdvantage: 'Customer empathy, persona development, messaging strategy',
      recommendation: 'Use AI insights to inform human-crafted customer experiences'
    }
  ];

  const ninetyDayPlan = [
    {
      phase: 'Foundation (Days 1-30)',
      focus: 'AI Tool Mastery',
      actions: [
        'Complete AI marketing tools assessment',
        'Master 3 core AI tools (ChatGPT, Claude, Copy.ai)',
        'Learn prompt engineering fundamentals',
        'Audit current marketing processes for AI opportunities'
      ]
    },
    {
      phase: 'Integration (Days 31-60)',
      focus: 'Process Optimization',
      actions: [
        'Implement AI-assisted content workflows',
        'Create brand voice guidelines for AI tools',
        'Develop quality control processes',
        'Train team on AI collaboration best practices'
      ]
    },
    {
      phase: 'Leadership (Days 61-90)',
      focus: 'Strategic Positioning',
      actions: [
        'Present AI marketing strategy to leadership',
        'Establish yourself as AI coordinator',
        'Measure and document productivity improvements',
        'Plan next-phase AI initiatives'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI-Proof Marketing Careers: Your Evolution Guide for 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Marketing is being transformed by AI, but smart marketers are evolving rather than being replaced. Discover which marketing roles remain AI-resistant and how to position yourself as an AI marketing strategist.
            </p>
            <Link
              to="/auth"
              className="bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors shadow-lg inline-block"
            >
              Get My Marketing Career Evolution Plan
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              ✨ Free assessment • Marketing-specific roadmap • Join 847+ marketing professionals
            </p>
          </div>
        </div>
      </section>

      {/* Marketing AI Risk Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI Automation Risk by Marketing Role
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            <em>Risk percentages based on current AI capabilities and marketing automation trends. Individual results may vary by company, industry, and specific responsibilities.</em>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketingRiskData.map((role, index) => (
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
                  'bg-green-50 text-green-700'
                }`}>
                  {role.automation} Automation Risk
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Impact Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How AI Is Transforming Marketing Functions
          </h2>
          
          <div className="space-y-8">
            {aiImpactAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border">
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
                      Strategy
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
            Marketing Career Evolution Paths
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Transform your existing marketing role into an AI-resistant position. These evolution paths build on your current expertise while positioning you for the AI-augmented future.
            <em> Timeline estimates based on focused skill development.</em>
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

      {/* AI-Resistant Marketing Skills */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Essential AI-Resistant Marketing Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiResistantSkills.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Core Skills:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm text-center">
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
            Your 90-Day Marketing Evolution Plan
          </h2>
          
          <div className="space-y-8">
            {ninetyDayPlan.map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                    <p className="text-pink-600 font-medium">{phase.focus}</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <ul className="space-y-2">
                    {phase.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start">
                        <span className="text-pink-600 mr-2">•</span>
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
              className="bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors shadow-lg"
            >
              Get My Detailed Evolution Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Marketing Career Evolution FAQ
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Will AI really replace marketing jobs?</h3>
              <p className="text-gray-600">
                AI will automate many marketing tasks, but it creates opportunities for marketers to focus on strategy, creativity, and relationship building. The most successful marketers will learn to collaborate with AI rather than compete against it. Job displacement varies significantly by role, company, and individual adaptation to new tools.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">How quickly is AI changing marketing?</h3>
              <p className="text-gray-600">
                AI adoption in marketing is accelerating rapidly. Content generation, email marketing, and PPC management are already heavily automated. However, strategic roles, creative direction, and relationship management remain primarily human-driven. Timeline for change varies by company size and industry.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Do I need technical skills to be AI-resistant in marketing?</h3>
              <p className="text-gray-600">
                You don't need to code, but you should understand how to use AI marketing tools effectively. Focus on prompt engineering, AI tool evaluation, and understanding how to maintain brand voice across AI-generated content. Technical literacy is helpful but not essential for most marketing evolution paths.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">What if I'm already using AI tools in marketing?</h3>
              <p className="text-gray-600">
                Great! You're ahead of the curve. Focus on becoming the AI coordinator in your organization. Help colleagues adopt AI tools, develop best practices, and position yourself as the expert in human-AI collaboration. Document your productivity improvements and present strategic AI initiatives to leadership.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Are these evolution timelines realistic?</h3>
              <p className="text-gray-600">
                Timeline estimates assume focused effort and vary based on your starting point, current skills, and time commitment. Some marketers may evolve faster, others slower. Success depends on individual dedication, learning agility, market conditions, and company openness to AI adoption. Use timelines as guidance, not guarantees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Evolution Your Marketing Career Before AI Does
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Take our marketing-specific assessment to discover your automation risk and get a personalized roadmap to become an AI marketing strategist.
          </p>
          <Link
            to="/auth"
            className="bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            Start My Marketing Evolution Assessment
          </Link>
          <p className="text-sm text-pink-200 mt-4">
            ✨ Marketing-specific analysis • 90-day roadmap • Join 847+ marketing professionals
          </p>
          <p className="text-xs text-pink-300 mt-2">
            <em>Educational guidance only. Career outcomes depend on market conditions, individual effort, and company decisions.</em>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIProofMarketingCareers;