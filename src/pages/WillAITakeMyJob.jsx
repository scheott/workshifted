// src/pages/WillAITakeMyJob.jsx - Pivoted for AI Evolution Strategy
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const WillAITakeMyJob = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  
  const industries = {
    'accounting': {
      name: 'Accounting & Bookkeeping',
      riskLevel: 'High',
      riskPercentage: 73,
      riskColor: 'red',
      timeframe: '2-5 years',
      description: 'AI can automate data entry, basic calculations, and routine financial analysis.',
      specificRoles: [
        { role: 'Bookkeeping Clerks', risk: 86 },
        { role: 'Tax Preparers', risk: 78 },
        { role: 'Accounting Clerks', risk: 75 },
        { role: 'Financial Analysts (Junior)', risk: 65 }
      ],
      aiImpact: 'Automated transaction processing, AI-powered reconciliation, and machine learning algorithms for fraud detection are already replacing many routine accounting tasks.',
      survivingRoles: 'Strategic financial planning, complex tax advisory, forensic accounting, and client relationship management.',
      evolutionPath: 'AI Financial Operations Coordinator',
      evolutionStrategy: 'Position yourself as the bridge between AI automation and human oversight. Lead implementation of AI accounting tools while handling complex interpretations and client relationships.'
    },
    'marketing': {
      name: 'Marketing & Advertising',
      riskLevel: 'Medium-High',
      riskPercentage: 61,
      riskColor: 'orange',
      timeframe: '3-7 years',
      description: 'AI content creation, automated ad targeting, and data analysis affecting many marketing roles.',
      specificRoles: [
        { role: 'Content Writers', risk: 68 },
        { role: 'Digital Marketing Specialists', risk: 58 },
        { role: 'Market Research Analysts', risk: 55 },
        { role: 'Brand Managers', risk: 42 }
      ],
      aiImpact: 'AI tools like ChatGPT, automated ad platforms, and predictive analytics are changing content creation and campaign management.',
      survivingRoles: 'Creative strategy, brand storytelling, influencer relationships, and complex campaign planning.',
      evolutionPath: 'AI Marketing Strategist',
      evolutionStrategy: 'Become the expert who directs AI content creation while owning brand voice and strategic positioning. Lead AI-powered campaigns while maintaining human creativity and emotional connection.'
    },
    'customer-service': {
      name: 'Customer Service',
      riskLevel: 'High',
      riskPercentage: 79,
      riskColor: 'red',
      timeframe: '1-3 years',
      description: 'Chatbots and AI assistants handling increasingly complex customer interactions.',
      specificRoles: [
        { role: 'Call Center Reps', risk: 85 },
        { role: 'Chat Support Agents', risk: 82 },
        { role: 'Email Support Specialists', risk: 78 },
        { role: 'Customer Success Managers', risk: 45 }
      ],
      aiImpact: 'Advanced chatbots, voice AI, and automated problem-solving systems replacing human agents for routine inquiries.',
      survivingRoles: 'Complex problem resolution, relationship building, escalation handling, and emotional support.',
      evolutionPath: 'Customer Experience Automation Lead',
      evolutionStrategy: 'Design and manage AI customer service workflows while handling escalations that require human judgment. Become the expert in human-AI customer experience optimization.'
    },
    'data-analysis': {
      name: 'Data Analysis',
      riskLevel: 'High',
      riskPercentage: 71,
      riskColor: 'red',
      timeframe: '2-4 years',
      description: 'Machine learning and automated analytics replacing routine data work.',
      specificRoles: [
        { role: 'Data Entry Specialists', risk: 92 },
        { role: 'Junior Data Analysts', risk: 74 },
        { role: 'Business Intelligence Analysts', risk: 69 },
        { role: 'Data Scientists (Senior)', risk: 35 }
      ],
      aiImpact: 'Automated data processing, AI-driven insights generation, and machine learning models reducing need for human analysis.',
      survivingRoles: 'Strategic data interpretation, model development, stakeholder communication, and business context application.',
      evolutionPath: 'AI Insights Translator',
      evolutionStrategy: 'Focus on interpreting AI-generated insights for business stakeholders. Become the expert who validates AI models and translates complex data into actionable business strategies.'
    },
    'human-resources': {
      name: 'Human Resources',
      riskLevel: 'Medium',
      riskPercentage: 52,
      riskColor: 'yellow',
      timeframe: '4-8 years',
      description: 'AI recruitment tools and automated HR processes affecting some roles.',
      specificRoles: [
        { role: 'HR Coordinators', risk: 67 },
        { role: 'Recruiters (Volume)', risk: 59 },
        { role: 'Benefits Administrators', risk: 54 },
        { role: 'HR Business Partners', risk: 32 }
      ],
      aiImpact: 'Resume screening AI, automated scheduling, and chatbots handling basic HR inquiries.',
      survivingRoles: 'Employee relations, complex negotiations, organizational development, and strategic HR planning.',
      evolutionPath: 'People & AI Integration Specialist',
      evolutionStrategy: 'Lead AI adoption in HR while focusing on human-centered change management. Become the expert in helping teams adapt to AI-augmented workflows.'
    },
    'legal': {
      name: 'Legal Services',
      riskLevel: 'Medium-High',
      riskPercentage: 64,
      riskColor: 'orange',
      timeframe: '3-6 years',
      description: 'AI document review, contract analysis, and legal research affecting paralegal and junior attorney work.',
      specificRoles: [
        { role: 'Paralegals', risk: 72 },
        { role: 'Legal Assistants', risk: 69 },
        { role: 'Document Review Attorneys', risk: 78 },
        { role: 'Senior Attorneys', risk: 28 }
      ],
      aiImpact: 'AI-powered document review, automated contract analysis, and legal research tools reducing need for junior legal work.',
      survivingRoles: 'Complex litigation, client counseling, courtroom advocacy, and strategic legal planning.',
      evolutionPath: 'Legal Technology Integration Lead',
      evolutionStrategy: 'Specialize in implementing and managing AI legal tools while handling complex cases that require human judgment. Bridge the gap between technology and legal strategy.'
    },
    'banking': {
      name: 'Banking & Finance',
      riskLevel: 'High',
      riskPercentage: 68,
      riskColor: 'red',
      timeframe: '2-5 years',
      description: 'Automated trading, AI loan processing, and digital banking reducing traditional banking roles.',
      specificRoles: [
        { role: 'Bank Tellers', risk: 81 },
        { role: 'Loan Officers (Processing)', risk: 74 },
        { role: 'Financial Advisors (Basic)', risk: 58 },
        { role: 'Investment Bankers', risk: 35 }
      ],
      aiImpact: 'Algorithmic trading, automated underwriting, and AI financial advice platforms changing the industry.',
      survivingRoles: 'Relationship banking, complex financial planning, and high-touch advisory services.',
      evolutionPath: 'AI-Enhanced Financial Advisor',
      evolutionStrategy: 'Use AI tools for analysis while focusing on complex financial planning and relationship building. Become the advisor who combines AI insights with human empathy and strategic thinking.'
    },
    'insurance': {
      name: 'Insurance',
      riskLevel: 'High',
      riskPercentage: 72,
      riskColor: 'red',
      timeframe: '2-4 years',
      description: 'AI claims processing, automated underwriting, and risk assessment tools.',
      specificRoles: [
        { role: 'Claims Adjusters', risk: 78 },
        { role: 'Insurance Underwriters', risk: 75 },
        { role: 'Insurance Sales Agents', risk: 65 },
        { role: 'Actuaries', risk: 42 }
      ],
      aiImpact: 'Automated claims processing, AI risk assessment, and digital insurance platforms reducing manual work.',
      survivingRoles: 'Complex claims investigation, relationship building, and strategic risk management.',
      evolutionPath: 'Insurance AI Operations Manager',
      evolutionStrategy: 'Oversee AI-powered claims and underwriting systems while handling complex cases requiring human judgment. Lead digital transformation initiatives in traditional insurance environments.'
    },
    'media': {
      name: 'Media & Publishing',
      riskLevel: 'Medium-High',
      riskPercentage: 59,
      riskColor: 'orange',
      timeframe: '2-6 years',
      description: 'AI content generation, automated editing, and algorithm-driven content distribution.',
      specificRoles: [
        { role: 'Content Writers', risk: 71 },
        { role: 'Copy Editors', risk: 68 },
        { role: 'Social Media Managers', risk: 56 },
        { role: 'Journalists (Investigative)', risk: 25 }
      ],
      aiImpact: 'AI writing tools, automated video editing, and algorithm-based content creation changing media production.',
      survivingRoles: 'Investigative journalism, creative storytelling, and strategic content planning.',
      evolutionPath: 'Content Strategy & AI Coordinator',
      evolutionStrategy: 'Direct AI content creation while maintaining editorial quality and brand voice. Become the expert who knows when to use AI and when human creativity is irreplaceable.'
    }
  };

  const getRiskColor = (level) => {
    switch(level) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium-High': return 'text-orange-600 bg-orange-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <Link to="/" className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">WorkShifted</div>
            </Link>
            <div className="flex items-center space-x-4 md:space-x-8">
              <nav className="hidden sm:flex items-center space-x-6" aria-label="Primary">
                <Link to="/#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">How it Works</Link>
                <Link to="/#careers" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Careers</Link>
                <Link to="/#faq" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">FAQ</Link>
              </nav>
              <Link
                to="/auth"
                className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
              >
                Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li>→</li>
            <li><Link to="/ai-job-displacement-statistics" className="hover:text-blue-600">AI Statistics</Link></li>
            <li>→</li>
            <li className="text-gray-900">Will AI Take My Job?</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
            🎯 Industry Evolution Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Will AI Take My Job?
            <span className="text-blue-600"> Evolution Strategy by Industry</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Don't just check your risk — discover how to evolve within your industry. Each role analysis includes specific evolution paths and 90-day action plans to become AI-resistant.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              ⚡ Get Your Personal Evolution Plan
            </h3>
            <p className="text-blue-700 mb-4">
              Beyond industry averages — get your specific AI risk score and 3 personalized evolution paths
            </p>
            <Link
              to="/auth"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Take Free AI-Resistance Assessment →
            </Link>
          </div>
        </div>

        {/* Industry Selector */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Industry for Detailed Analysis</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(industries).map(([key, industry]) => (
              <button
                key={key}
                onClick={() => setSelectedIndustry(key)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedIndustry === key 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{industry.name}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(industry.riskLevel)}`}>
                    {industry.riskPercentage}%
                  </span>
                </div>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Selected Industry Analysis */}
        {selectedIndustry && (
          <section className="mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {industries[selectedIndustry].name} Analysis
                </h2>
                <div className="text-right">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(industries[selectedIndustry].riskLevel)}`}>
                    <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                    {industries[selectedIndustry].riskLevel} Risk
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">
                    {industries[selectedIndustry].riskPercentage}% at risk
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Impact Timeline</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Expected disruption:</strong> {industries[selectedIndustry].timeframe}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {industries[selectedIndustry].aiImpact}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Role-Specific Risk</h3>
                  {industries[selectedIndustry].specificRoles.map((role, index) => (
                    <div key={index} className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-700">{role.role}</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`h-2 rounded-full ${
                              role.risk >= 70 ? 'bg-red-500' :
                              role.risk >= 50 ? 'bg-orange-500' :
                              role.risk >= 30 ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}
                            style={{width: `${role.risk}%`}}
                          ></div>
                        </div>
                        <span className={`text-sm font-medium ${
                          role.risk >= 70 ? 'text-red-600' :
                          role.risk >= 50 ? 'text-orange-600' :
                          role.risk >= 30 ? 'text-yellow-600' :
                          'text-green-600'
                        }`}>
                          {role.risk}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evolution Strategy */}
              <div className="bg-white rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  🚀 Evolution Path: {industries[selectedIndustry].evolutionPath}
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Strategy:</strong> {industries[selectedIndustry].evolutionStrategy}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Still Human-Essential:</h4>
                    <p className="text-gray-600 text-sm">{industries[selectedIndustry].survivingRoles}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Your Evolution Advantage:</h4>
                    <p className="text-gray-600 text-sm">
                      Position yourself as the expert who manages AI tools while handling complex human judgment tasks that AI cannot replicate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA for selected industry */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 text-center">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Get Your Personal {industries[selectedIndustry].name} Evolution Plan
              </h3>
              <p className="text-blue-700 mb-6">
                Discover your specific automation risk and get a 90-day roadmap to become the "{industries[selectedIndustry].evolutionPath}" in your organization
              </p>
              <Link
                to="/auth"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Free Assessment
              </Link>
            </div>
          </section>
        )}

        {/* General AI-Resistance Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Universal AI-Resistance Principles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-xl">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold text-red-900">Most Vulnerable Tasks</h3>
              </div>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Routine data processing and entry</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Basic analysis and calculation tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Simple customer service interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Predictable administrative work</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Template-based content creation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-green-900">Most Protected Skills</h3>
              </div>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Complex problem-solving requiring context</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Emotional intelligence and empathy</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Strategic thinking and planning</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Cross-functional collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>AI tool coordination and validation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Action Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Your AI Evolution Action Plan</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Audit Your AI Vulnerability</h3>
                <p className="text-gray-600">Honestly assess which of your daily tasks could be automated with current AI tools. Identify your automation-resistant strengths.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Learn AI Collaboration</h3>
                <p className="text-gray-600">Start using AI tools in your current role. Become the person who knows how to direct AI effectively rather than competing with it.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Position as AI Coordinator</h3>
                <p className="text-gray-600">Volunteer to lead AI initiatives at your company. Become the bridge between AI capabilities and human oversight.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Your Personalized Roadmap</h3>
                <p className="text-gray-600">Take our AI-resistance assessment to get specific evolution paths, timeline, and 90-day action plan for your role.</p>
                <Link
                  to="/auth"
                  className="inline-block mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Start Free Assessment →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Wait for AI to Impact Your Career
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get ahead of the curve with a personalized AI-resistance plan. Discover your evolution path and start building AI-collaboration skills today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/auth"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get My AI Evolution Plan
            </Link>
            <Link
              to="/ai-job-displacement-statistics"
              className="border border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200"
            >
              See Full Statistics
            </Link>
          </div>
          
          <p className="text-xs text-blue-100 mt-6">
            Free assessment • 5 minutes • Personalized roadmap • 47,000+ professionals protected
          </p>
        </section>

        {/* Read More Section */}
        <section className="mb-16 mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Your AI Career Research</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                to="/ai-job-displacement-statistics"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">📊 Complete AI Statistics</h3>
                <p className="text-gray-600 text-sm">Detailed automation risk data by role and timeline</p>
              </Link>
            
              <Link 
                to="/ai-vs-human-jobs-complete-guide"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🤖 AI vs Human Guide</h3>
                <p className="text-gray-600 text-sm">Complete analysis of which jobs AI can and cannot replace</p>
              </Link>
            
              <Link 
                to="/recession-proof-careers-2025"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🛡️ AI-Resistant Careers</h3>
                <p className="text-gray-600 text-sm">Jobs that survive both economic downturns and AI disruption</p>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default WillAITakeMyJob;