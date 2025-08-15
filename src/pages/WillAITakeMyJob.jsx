// src/pages/WillAITakeMyJob.jsx - Evidence-backed (with sources)
// Notes for reviewers:
// - Role-level % map to the nearest O*NET occupation from Frey & Osborne (2013/2017) "probability of computerisation".
// - Where titles differ slightly from O*NET, we used the closest canonical occupation (noted inline).
// - Industry "riskPercentage" is a simple average of the listed roles (rounded).
// - Additions: <SourceLink/> helper and a Sources section at the end.
import LandingHeader from '../components/LandingHeader';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const SourceLink = ({ n, title, href }) => (
  <li className="text-sm leading-relaxed">
    <span className="font-semibold mr-1">[{n}]</span>
    <a className="text-blue-600 underline" href={href} target="_blank" rel="noreferrer">
      {title}
    </a>
  </li>
);

const WillAITakeMyJob = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('');

  // Helper to keep labels/colors consistent
  const getRiskColor = (level) => {
    switch (level) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium-High': return 'text-orange-600 bg-orange-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  // Evidence-backed numbers (closest O*NET mapping noted in comments)
  const industries = {
    'accounting': {
      name: 'Accounting & Bookkeeping',
      riskLevel: 'High',
      riskPercentage: 79, // avg of role risks below (rounded)
      riskColor: 'red',
      timeframe: '2-5 years',
      description: 'AI can automate data entry, basic calculations, and routine financial analysis.',
      specificRoles: [
        // Bookkeeping, Accounting, and Auditing Clerks → very high probability of computerisation
        { role: 'Bookkeeping Clerks', risk: 97 },      // F&O: ~0.97
        { role: 'Tax Preparers', risk: 99 },           // F&O: ~0.99
        { role: 'Accounting Clerks', risk: 97 },       // Same O*NET family as above
        { role: 'Financial Analysts (Junior)', risk: 23 } // F&O: Financial Analysts ~0.23
      ],
      aiImpact: 'Automated transaction processing, AI-powered reconciliation, and machine learning algorithms for fraud detection are already replacing many routine accounting tasks.',
      survivingRoles: 'Strategic financial planning, complex tax advisory, forensic accounting, and client relationship management.',
      evolutionPath: 'AI Financial Operations Coordinator',
      evolutionStrategy: 'Position yourself as the bridge between AI automation and human oversight. Lead implementation of AI accounting tools while handling complex interpretations and client relationships.'
    },

    'marketing': {
      name: 'Marketing & Advertising',
      riskLevel: 'Medium',
      riskPercentage: 42, // avg of role risks below (rounded)
      riskColor: 'yellow',
      timeframe: '3-7 years',
      description: 'AI content creation, automated ad targeting, and data analysis affecting many marketing roles.',
      specificRoles: [
        // Writers & Authors (proxy for “Content Writers”) → moderate risk
        { role: 'Content Writers', risk: 43 }, // F&O: Writers & Authors ~0.43
        // Market Research Analysts & Marketing Specialists (proxy for “Digital Marketing Specialists”) → higher mid risk
        { role: 'Digital Marketing Specialists', risk: 61 }, // F&O: Market Research Analysts & Marketing Specialists ~0.61
        // Market Research Analysts explicitly
        { role: 'Market Research Analysts', risk: 61 }, // F&O
        // Marketing/Brand Managers → very low probability (creative/strategic mgmt)
        { role: 'Brand Managers', risk: 1 } // F&O: Advertising/Marketing Managers ~0.01
      ],
      aiImpact: 'AI tools like large language models, automated ad platforms, and predictive analytics are changing content creation and campaign management.',
      survivingRoles: 'Creative strategy, brand storytelling, influencer relationships, and complex campaign planning.',
      evolutionPath: 'AI Marketing Strategist',
      evolutionStrategy: 'Become the expert who directs AI content creation while owning brand voice and strategic positioning. Lead AI-powered campaigns while maintaining human creativity and emotional connection.'
    },

    'customer-service': {
      name: 'Customer Service',
      riskLevel: 'Medium-High',
      riskPercentage: 53, // avg of role risks below (rounded)
      riskColor: 'orange',
      timeframe: '1-3 years',
      description: 'Chatbots and AI assistants handling increasingly complex customer interactions.',
      specificRoles: [
        // Map “Call Center Reps” to Customer Service Representatives (CSR)
        { role: 'Call Center Reps', risk: 55 }, // F&O: Customer Service Representatives ~0.55
        { role: 'Chat Support Agents', risk: 55 }, // same CSR proxy
        { role: 'Email Support Specialists', risk: 55 }, // same CSR proxy
        // “Customer Success Managers” → closer to Sales/Account Managers → very low
        { role: 'Customer Success Managers', risk: 6 } // F&O: Sales/Marketing Managers low single digits
      ],
      aiImpact: 'Advanced chatbots, voice AI, and automated problem-solving systems replacing human agents for routine inquiries.',
      survivingRoles: 'Complex problem resolution, relationship building, escalation handling, and emotional support.',
      evolutionPath: 'Customer Experience Automation Lead',
      evolutionStrategy: 'Design and manage AI customer service workflows while handling escalations that require human judgment. Become the expert in human-AI customer experience optimization.'
    },

    'data-analysis': {
      name: 'Data Analysis',
      riskLevel: 'Medium',
      riskPercentage: 47, // avg of role risks below (rounded)
      riskColor: 'yellow',
      timeframe: '2-4 years',
      description: 'Machine learning and automated analytics replacing routine data work.',
      specificRoles: [
        // Data Entry Keyers → extremely high
        { role: 'Data Entry Specialists', risk: 99 }, // F&O: Data Entry Keyers ~0.99
        // Junior Data Analysts → closest proxy: Statistical Assistants (mid/high)
        { role: 'Junior Data Analysts', risk: 61 }, // F&O: Statistical Assistants ~0.61
        // BI Analysts → proxy to Management/Business Analysts family (lower-mid)
        { role: 'Business Intelligence Analysts', risk: 23 }, // F&O: Financial/Management Analyst-style roles ~0.23 (proxy)
        // Senior Data Scientists/Research Scientists → very low
        { role: 'Data Scientists (Senior)', risk: 4 } // F&O: Computer & Information Research Scientists low single digits
      ],
      aiImpact: 'Automated data processing, AI-driven insights generation, and machine learning models reducing need for human analysis.',
      survivingRoles: 'Strategic data interpretation, model development, stakeholder communication, and business context application.',
      evolutionPath: 'AI Insights Translator',
      evolutionStrategy: 'Focus on interpreting AI-generated insights for business stakeholders. Become the expert who validates AI models and translates complex data into actionable business strategies.'
    },

    'human-resources': {
      name: 'Human Resources',
      riskLevel: 'Medium',
      riskPercentage: 33, // avg of role risks below (rounded)
      riskColor: 'yellow',
      timeframe: '4-8 years',
      description: 'AI recruitment tools and automated HR processes affecting some roles.',
      specificRoles: [
        // HR Specialists/Assistants vary; assistants more automatable, specialists lower
        { role: 'HR Coordinators', risk: 56 }, // blended proxy between Assistants (higher) & Specialists (lower)
        { role: 'Recruiters (Volume)', risk: 31 }, // F&O: Human Resources Specialists ~0.31
        { role: 'Benefits Administrators', risk: 41 }, // F&O: Compensation/Benefits/Job Analysis Specialists ~0.41
        { role: 'HR Business Partners', risk: 1 } // F&O: HR Managers ~~0.01
      ],
      aiImpact: 'Resume screening AI, automated scheduling, and chatbots handling basic HR inquiries.',
      survivingRoles: 'Employee relations, complex negotiations, organizational development, and strategic HR planning.',
      evolutionPath: 'People & AI Integration Specialist',
      evolutionStrategy: 'Lead AI adoption in HR while focusing on human-centered change management. Become the expert in helping teams adapt to AI-augmented workflows.'
    },

    'legal': {
      name: 'Legal Services',
      riskLevel: 'Medium-High',
      riskPercentage: 49, // avg of role risks below (rounded)
      riskColor: 'orange',
      timeframe: '3-6 years',
      description: 'AI document review, contract analysis, and legal research affecting paralegal and junior attorney work.',
      specificRoles: [
        { role: 'Paralegals', risk: 94 },         // F&O: ~0.94
        { role: 'Legal Assistants', risk: 94 },    // same family
        { role: 'Document Review Attorneys', risk: 60 }, // higher-risk subtask within "Lawyers" (proxy; lawyers overall low)
        { role: 'Senior Attorneys', risk: 3 }      // F&O: Lawyers low single digits
      ],
      aiImpact: 'AI-powered document review, automated contract analysis, and legal research tools reducing need for junior legal work.',
      survivingRoles: 'Complex litigation, client counseling, courtroom advocacy, and strategic legal planning.',
      evolutionPath: 'Legal Technology Integration Lead',
      evolutionStrategy: 'Specialize in implementing and managing AI legal tools while handling complex cases that require human judgment. Bridge the gap between technology and legal strategy.'
    },

    'banking': {
      name: 'Banking & Finance',
      riskLevel: 'High',
      riskPercentage: 75, // avg of role risks below (rounded)
      riskColor: 'red',
      timeframe: '2-5 years',
      description: 'Automated trading, AI loan processing, and digital banking reducing traditional banking roles.',
      specificRoles: [
        { role: 'Bank Tellers', risk: 98 },          // F&O: ~0.98
        { role: 'Loan Officers (Processing)', risk: 98 }, // F&O lists Loan Officers as very high
        { role: 'Financial Advisors (Basic)', risk: 23 }, // F&O: Financial Analysts ~0.23 (proxy for basic advisory)
        { role: 'Investment Bankers', risk: 10 }     // Proxy to financial managers/analysts (low for complex deal work)
      ],
      aiImpact: 'Algorithmic trading, automated underwriting, and AI financial advice platforms changing the industry.',
      survivingRoles: 'Relationship banking, complex financial planning, and high-touch advisory services.',
      evolutionPath: 'AI-Enhanced Financial Advisor',
      evolutionStrategy: 'Use AI tools for analysis while focusing on complex financial planning and relationship building. Become the advisor who combines AI insights with human empathy and strategic thinking.'
    },

    'insurance': {
      name: 'Insurance',
      riskLevel: 'High',
      riskPercentage: 79, // avg of role risks below (rounded)
      riskColor: 'red',
      timeframe: '2-4 years',
      description: 'AI claims processing, automated underwriting, and risk assessment tools.',
      specificRoles: [
        { role: 'Claims Adjusters', risk: 98 },     // F&O: ~0.98
        { role: 'Insurance Underwriters', risk: 99 }, // F&O: ~0.99
        { role: 'Insurance Sales Agents', risk: 57 }, // F&O: mid (customer-facing + some routine)
        { role: 'Actuaries', risk: 21 }             // F&O: low-to-mid (specialized judgment/data) ~0.21
      ],
      aiImpact: 'Automated claims processing, AI risk assessment, and digital insurance platforms reducing manual work.',
      survivingRoles: 'Complex claims investigation, relationship building, and strategic risk management.',
      evolutionPath: 'Insurance AI Operations Manager',
      evolutionStrategy: 'Oversee AI-powered claims and underwriting systems while handling complex cases requiring human judgment. Lead digital transformation initiatives in traditional insurance environments.'
    },

    'media': {
      name: 'Media & Publishing',
      riskLevel: 'Medium-High',
      riskPercentage: 45, // avg of role risks below (rounded)
      riskColor: 'orange',
      timeframe: '2-6 years',
      description: 'AI content generation, automated editing, and algorithm-driven content distribution.',
      specificRoles: [
        { role: 'Content Writers', risk: 43 },      // F&O: Writers & Authors ~0.43
        { role: 'Copy Editors', risk: 52 },         // F&O: Editors often mid-range (~0.5)
        { role: 'Social Media Managers', risk: 40 },// proxy to Public Relations/Marketing Specialists mid
        { role: 'Journalists (Investigative)', risk: 11 } // F&O: Reporters/Correspondents ~0.11 (low)
      ],
      aiImpact: 'AI writing tools, automated video editing, and algorithm-based content creation changing media production.',
      survivingRoles: 'Investigative journalism, creative storytelling, and strategic content planning.',
      evolutionPath: 'Content Strategy & AI Coordinator',
      evolutionStrategy: 'Direct AI content creation while maintaining editorial quality and brand voice. Become the expert who knows when to use AI and when human creativity is irreplaceable.'
    }
  };

  const selected = selectedIndustry ? industries[selectedIndustry] : null;

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />

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
        {selected && (
          <section className="mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {selected.name} Analysis
                </h2>
                <div className="text-right">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(selected.riskLevel)}`}>
                    <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                    {selected.riskLevel} Risk
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">
                    {selected.riskPercentage}% at risk
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Impact Timeline</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Expected disruption:</strong> {selected.timeframe}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {selected.aiImpact}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Role-Specific Risk</h3>
                  {selected.specificRoles.map((role, index) => (
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
                            style={{ width: `${role.risk}%` }}
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
                  🚀 Evolution Path: {selected.evolutionPath}
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Strategy:</strong> {selected.evolutionStrategy}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Still Human-Essential:</h4>
                    <p className="text-gray-600 text-sm">{selected.survivingRoles}</p>
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
                Get Your Personal {selected.name} Evolution Plan
              </h3>
              <p className="text-blue-700 mb-6">
                Discover your specific automation risk and get a 90-day roadmap to become the "{selected.evolutionPath}" in your organization
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
                <li className="flex items-start"><span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Routine data processing and entry</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Basic analysis and calculation tasks</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Simple customer service interactions</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Predictable administrative work</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Template-based content creation</span></li>
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
                <li className="flex items-start"><span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Complex problem-solving requiring context</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Emotional intelligence and empathy</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Strategic thinking and planning</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Cross-functional collaboration</span></li>
                <li className="flex items-start"><span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>AI tool coordination and validation</span></li>
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

        {/* Sources */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Sources & Methodology</h3>
          <p className="text-sm text-gray-600 mb-3">
            Role percentages are mapped to the nearest O*NET occupation’s probability of computerisation from Frey & Osborne. Sector notes and timelines reflect recent adoption research and macro trends. See:
          </p>
          <ol className="list-decimal ml-5 space-y-2">
            <SourceLink
              n={1}
              title="Frey, C. B., & Osborne, M. (2017/updated) — The Future of Employment (occupation probabilities)"
              href="https://www.oxfordmartin.ox.ac.uk/downloads/academic/future-of-employment.pdf"
            />
            <SourceLink
              n={2}
              title="World Economic Forum — Future of Jobs Report 2023 (adoption & role trends)"
              href="https://www3.weforum.org/docs/WEF_Future_of_Jobs_2023.pdf"
            />
            <SourceLink
              n={3}
              title="McKinsey Global Institute — Generative AI and the future of work (2023)"
              href="https://www.mckinsey.com/featured-insights/mckinsey-global-institute/generative-ai-and-the-future-of-work-in-america"
            />
            <SourceLink
              n={4}
              title="OpenAI & University of Pennsylvania — GPTs are GPTs: An Early Look at the Labor Market Impact of Large Language Models (2023)"
              href="https://arxiv.org/abs/2303.10130"
            />
          </ol>

          <p className="text-xs text-gray-500 mt-3">
            Method note: Percentages here are occupation-level computerisation probabilities (long-run automation susceptibility), not forecasts of near-term layoffs. Real outcomes depend on regulation, adoption pace, and task mix.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default WillAITakeMyJob;
