// src/pages/AIvsHumanJobs.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import LandingHeader from '../components/LandingHeader';

const SourceLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="text-blue-600 hover:text-blue-800 underline decoration-dotted hover:decoration-solid transition-colors"
  >
    {children}
  </a>
);

const AIvsHumanJobs = () => {
  const [activeTab, setActiveTab] = useState('cognitive');

  const jobCategories = {
    cognitive: {
      title: "Cognitive Work",
      aiRisk: "High",
      description: "Jobs primarily involving data processing, analysis, and routine decision making",
      examples: [
        { 
          job: "Data Entry Keyers", 
          risk: 99, 
          source: "Frey & Osborne (2013)",
          reason: "Fully automatable with current technology" 
        },
        { 
          job: "Bookkeeping, Accounting & Auditing Clerks", 
          risk: 98, 
          source: "Frey & Osborne (2013)",
          reason: "AI can handle routine transactions and reconciliation" 
        },
        { 
          job: "Tax Preparers", 
          risk: 99, 
          source: "Frey & Osborne (2013)",
          reason: "Software already handles most tax scenarios" 
        },
        { 
          job: "Financial Analysts", 
          risk: 23, 
          source: "Frey & Osborne (2013)",
          reason: "Strategic analysis and business context remain important" 
        },
        { 
          job: "Market Research Analysts & Marketing Specialists", 
          risk: 61, 
          source: "Frey & Osborne (2013)",
          reason: "AI can process large datasets but strategy requires human insight" 
        }
      ]
    },
    creative: {
      title: "Creative Work",
      aiRisk: "Low-Medium",
      description: "Jobs involving creative thinking, original content, and artistic expression",
      examples: [
        { 
          job: "Technical Writers", 
          risk: 89, 
          source: "Frey & Osborne (2013)",
          reason: "Template-based writing highly automatable" 
        },
        { 
          job: "Graphic Designers", 
          risk: 8, 
          source: "Frey & Osborne (2013)",
          reason: "Creative design requires human artistic vision" 
        },
        { 
          job: "Editors", 
          risk: 6, 
          source: "Frey & Osborne (2013)",
          reason: "Editorial judgment and narrative understanding" 
        },
        { 
          job: "Writers & Authors", 
          risk: 4, 
          source: "Frey & Osborne (2013)",
          reason: "Original creative expression remains distinctly human" 
        },
        { 
          job: "Art Directors", 
          risk: 2, 
          source: "Frey & Osborne (2013)",
          reason: "Strategic creative direction and brand vision" 
        },
        { 
          job: "Fine Artists", 
          risk: 4, 
          source: "Frey & Osborne (2013)",
          reason: "Personal expression and human connection remain unique" 
        }
      ]
    },
    
    interpersonal: {
      title: "Interpersonal Work",
      aiRisk: "Low-Medium",
      description: "Jobs centered on human relationships, emotional intelligence, and complex communication",
      examples: [
        { 
          job: "Customer Service Representatives", 
          risk: 55, 
          source: "Frey & Osborne (2013)",
          reason: "Routine inquiries automated but complex issues need human touch" 
        },
        { 
          job: "Retail Salespersons", 
          risk: 97, 
          source: "Frey & Osborne (2013)",
          reason: "Transactional sales increasingly automated" 
        },
        { 
          job: "Marriage & Family Therapists", 
          risk: 1, 
          source: "Frey & Osborne (2013)",
          reason: "Human empathy and complex emotional understanding essential" 
        },
        { 
          job: "Elementary School Teachers", 
          risk: 0.4, 
          source: "Frey & Osborne (2013)",
          reason: "Relationship building and adaptive instruction require human connection" 
        },
        { 
          job: "Registered Nurses", 
          risk: 1, 
          source: "Frey & Osborne (2013)",
          reason: "Patient care requires human touch and clinical judgment" 
        }
      ]
    }
  };

  const aiCapabilities = [
    {
      capability: "Pattern Recognition",
      description: "AI excels at identifying patterns in large datasets",
      humanAdvantage: "Context and meaning behind patterns",
      examples: ["Fraud detection", "Medical imaging", "Market analysis"]
    },
    {
      capability: "Routine Processing",
      description: "Repetitive tasks with clear rules and processes",
      humanAdvantage: "Handling exceptions and edge cases",
      examples: ["Data entry", "Basic calculations", "Standard reports"]
    },
    {
      capability: "Language Generation",
      description: "Creating text based on prompts and training data",
      humanAdvantage: "Original thought and cultural understanding",
      examples: ["Basic articles", "Product descriptions", "Email responses"]
    },
    {
      capability: "Prediction & Forecasting",
      description: "Making predictions based on historical data",
      humanAdvantage: "Understanding context and unusual circumstances",
      examples: ["Stock prices", "Weather", "Demand forecasting"]
    }
  ];

  const humanAdvantages = [
    {
      advantage: "Physical Presence",
      description: "Many jobs require being physically present in specific locations",
      importance: "Critical",
      examples: ["Home repairs", "Equipment installation", "Emergency response"],
      futureOutlook: "Robots may eventually compete, but timeline is 15+ years for complex environments"
    },
    {
      advantage: "Emotional Intelligence",
      description: "Understanding and responding to human emotions and social cues",
      importance: "High",
      examples: ["Counseling", "Complex sales", "Team leadership"],
      futureOutlook: "AI may simulate emotions but genuine empathy remains human"
    },
    {
      advantage: "Creative Problem Solving",
      description: "Finding novel solutions to unprecedented problems",
      importance: "High",
      examples: ["Innovation", "Crisis management", "Custom solutions"],
      futureOutlook: "AI assists but humans drive creative breakthroughs"
    },
    {
      advantage: "Manual Dexterity",
      description: "Fine motor skills and hand-eye coordination in complex environments",
      importance: "Medium-High",
      examples: ["Surgery", "Craftsmanship", "Precision assembly"],
      futureOutlook: "Robotics advancing but human adaptability still superior"
    },
    {
      advantage: "Ethical Judgment",
      description: "Making decisions based on values, ethics, and social responsibility",
      importance: "Critical",
      examples: ["Legal decisions", "Medical ethics", "Policy making"],
      futureOutlook: "Humans will likely retain final authority on ethical matters"
    }
  ];

  const getRiskColor = (risk) => {
    if (risk >= 70) return 'text-red-600 bg-red-100 border-red-200';
    if (risk >= 50) return 'text-orange-600 bg-orange-100 border-orange-200';
    if (risk >= 30) return 'text-yellow-600 bg-yellow-100 border-yellow-200';
    return 'text-green-600 bg-green-100 border-green-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <LandingHeader />


      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 mb-6 border border-blue-200 shadow-sm">
            🤖 Complete Analysis
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI vs Human Jobs:
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Complete Guide
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Compare AI capabilities with human strengths across different job types. Based on <span className="font-semibold text-blue-700">peer-reviewed research</span> from Oxford, McKinsey, and Goldman Sachs.
          </p>
        </div>

        {/* Quick Stats */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Research Findings</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">~30%</div>
                <div className="text-gray-700 font-medium mb-2">of US work hours</div>
                <div className="text-sm text-gray-600">could be automated by 2030</div>
                <div className="text-xs text-blue-600 mt-2">
                  <SourceLink href="https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai">McKinsey Global Institute (2023)</SourceLink>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">46%</div>
                <div className="text-gray-700 font-medium mb-2">task exposure</div>
                <div className="text-sm text-gray-600">in Office & Admin Support</div>
                <div className="text-xs text-orange-600 mt-2">
                  <SourceLink href="https://www.ansa.it/documents/1680080409454_ert.pdf">Goldman Sachs GIR (2023)</SourceLink>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">42%</div>
                <div className="text-gray-700 font-medium mb-2">of business tasks</div>
                <div className="text-sm text-gray-600">expected automated by 2027</div>
                <div className="text-xs text-green-600 mt-2">
                  <SourceLink href="https://www.weforum.org/reports/the-future-of-jobs-report-2023">World Economic Forum (2023)</SourceLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Categories Tabs */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Job Categories 
            <span className="text-blue-600">Analysis</span>
          </h2>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 bg-gray-100 rounded-2xl p-2">
            {Object.entries(jobCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{jobCategories[activeTab].title}</h3>
                <span className={`px-4 py-2 rounded-full text-sm font-bold border-2 ${
                  jobCategories[activeTab].aiRisk === 'High' ? 'text-red-600 bg-red-100 border-red-200' :
                  jobCategories[activeTab].aiRisk === 'Medium' ? 'text-orange-600 bg-orange-100 border-orange-200' :
                  jobCategories[activeTab].aiRisk === 'Low-Medium' ? 'text-yellow-600 bg-yellow-100 border-yellow-200' :
                  'text-green-600 bg-green-100 border-green-200'
                }`}>
                  AI Risk: {jobCategories[activeTab].aiRisk}
                </span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{jobCategories[activeTab].description}</p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Probability of Computerisation 
                <span className="text-sm font-normal text-gray-600">(Frey & Osborne, 2013)</span>
              </h4>
              {jobCategories[activeTab].examples.map((job, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 text-lg">{job.job}</h5>
                      <p className="text-sm text-gray-600 mt-1">{job.source}</p>
                    </div>
                    <div className="text-right ml-4">
                      <span className={`text-3xl font-bold ${
                        job.risk >= 70 ? 'text-red-600' :
                        job.risk >= 50 ? 'text-orange-600' :
                        job.risk >= 30 ? 'text-yellow-600' :
                        'text-green-600'
                      }`}>
                        {job.risk}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        job.risk >= 70 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                        job.risk >= 50 ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                        job.risk >= 30 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                        'bg-gradient-to-r from-green-500 to-green-600'
                      }`}
                      style={{width: `${job.risk}%`}}
                    ></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{job.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Context */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Understanding the 
              <span className="text-blue-600">Numbers</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 mb-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">What These Percentages Mean</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Frey & Osborne percentages represent <span className="font-semibold">long-run technical feasibility</span> of computerisation, not timeline predictions. A 60% score means there's a 60% probability the occupation could eventually be automated, given sufficient technological development.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 mb-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Important Context</h3>
                <p className="text-gray-700 leading-relaxed">
                  These are technical potential estimates from 2013, before large language models. Many physical jobs show higher computerisation probabilities due to manufacturing automation, but real-world constraints slow adoption in field work.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Timeline Reality</h3>
                <p className="text-gray-700 leading-relaxed">
                  <SourceLink href="https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai">McKinsey (2023)</SourceLink> estimates up to 30% of US work hours could be automated by 2030. <SourceLink href="https://www.weforum.org/reports/the-future-of-jobs-report-2023">WEF (2023)</SourceLink> employer surveys expect 42% of business tasks automated by 2027.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities vs Human Advantages */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            AI Capabilities vs 
            <span className="text-green-600">Human Advantages</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* AI Capabilities */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What AI Does Well</h3>
              </div>
              <div className="space-y-6">
                {aiCapabilities.map((capability, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">{capability.capability}</h4>
                    <p className="text-gray-700 text-sm mb-2">{capability.description}</p>
                    <p className="text-blue-700 text-sm mb-2">
                      <span className="font-medium">Human advantage:</span> {capability.humanAdvantage}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {capability.examples.map((example, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Human Advantages */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-xl">👨‍💼</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Human Strengths</h3>
              </div>
              <div className="space-y-6">
                {humanAdvantages.map((advantage, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{advantage.advantage}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        advantage.importance === 'Critical' ? 'bg-red-100 text-red-800' :
                        advantage.importance === 'High' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {advantage.importance}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-2">{advantage.description}</p>
                    <p className="text-green-700 text-sm mb-2">
                      <span className="font-medium">Future outlook:</span> {advantage.futureOutlook}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {advantage.examples.map((example, i) => (
                        <span key={i} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Career Strategy Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Career 
            <span className="text-blue-600">Strategies</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Focus on Physical Skills</h3>
              <p className="text-blue-800 text-sm mb-4 leading-relaxed">
                Build expertise in hands-on work that requires physical presence and real-world problem solving.
              </p>
              <ul className="text-blue-700 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Electrical work and troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Mechanical repair and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Construction and installation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Healthcare and personal services</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">Focus on Relationships</h3>
              <p className="text-green-800 text-sm mb-4 leading-relaxed">
                Emphasize roles that require emotional intelligence, trust-building, and complex human interaction.
              </p>
              <ul className="text-green-700 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Client relationship management</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Team leadership and mentoring</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Complex sales and negotiation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Counseling and coaching</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-4">Become AI-Adjacent</h3>
              <p className="text-purple-800 text-sm mb-4 leading-relaxed">
                Learn to work alongside AI tools, managing and directing artificial intelligence systems effectively.
              </p>
              <ul className="text-purple-700 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>AI system management and oversight</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Prompt engineering and AI training</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Human-AI collaboration workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>AI ethics and quality assurance</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Action Steps */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            What You Can Do 
            <span className="text-blue-600">Now</span>
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg font-bold mr-6">1</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Assess Your Current Risk</h3>
                <p className="text-gray-600 leading-relaxed">Honestly evaluate how much of your current work could be automated with today's AI tools. Use the categories above to understand your exposure level.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg font-bold mr-6">2</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Explore Backup Career Options</h3>
                <p className="text-gray-600 leading-relaxed">Research hands-on careers that match your interests and skills. Focus on work that requires physical presence, complex problem-solving, or human relationships.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg font-bold mr-6">3</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Start Learning While Employed</h3>
                <p className="text-gray-600 leading-relaxed">Begin building skills in AI-resistant fields through weekend courses, certifications, or part-time apprenticeships. This creates career optionality without disrupting your current income.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Future-Proof Your Career?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't wait for automation to impact your job. Take our assessment to discover hands-on career options that provide long-term security and match your background.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/auth"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Start Free Career Assessment
              </Link>
              <Link
                to="/will-ai-take-my-job-by-industry"
                className="border border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200"
              >
                Check Your Industry Risk
              </Link>
            </div>
            <p className="text-xs text-blue-100 mt-6">
              5 minutes • Personalized results • Start building your career security today
            </p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Your Research</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                to="/ai-job-displacement-statistics"
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">📊 AI Displacement Statistics</h3>
                <p className="text-gray-600 text-sm">Detailed data on automation risk by industry and timeline</p>
              </Link>
              
              <Link 
                to="/will-ai-take-my-job-by-industry"
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">🎯 Industry Risk Analysis</h3>
                <p className="text-gray-600 text-sm">Specific automation predictions for your field</p>
              </Link>
              
              <Link 
                to="/recession-proof-careers-2025"
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">🛡️ Recession-Proof Careers</h3>
                <p className="text-gray-600 text-sm">Jobs that survive economic downturns and disruption</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Sources & Methodology */}
        <section className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sources & Methodology</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">Frey & Osborne (Oxford Martin School, 2013)</p>
              <p>Occupation-level probability of computerisation. All job-specific percentages come from this peer-reviewed study. <SourceLink href="https://www.oxfordmartin.ox.ac.uk/publications/the-future-of-employment">The Future of Employment</SourceLink> | <SourceLink href="https://oms-www.files.svdcdn.com/production/downloads/academic/The_Future_of_Employment.pdf">Full Paper (PDF)</SourceLink></p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">McKinsey Global Institute (2023)</p>
              <p>30% of US work hours potentially automatable by 2030. <SourceLink href="https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai">Generative AI Impact Analysis</SourceLink></p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">Goldman Sachs Global Investment Research (2023)</p>
              <p>Task exposure percentages by occupational group (46% Office & Admin Support, 44% Legal, etc.). <SourceLink href="https://www.ansa.it/documents/1680080409454_ert.pdf">The Potentially Large Effects of Artificial Intelligence on Economic Growth (PDF)</SourceLink></p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">World Economic Forum (2023)</p>
              <p>Employer survey expecting 42% of business tasks automated by 2027. <SourceLink href="https://www.weforum.org/reports/the-future-of-jobs-report-2023">Future of Jobs Report 2023</SourceLink></p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Important Note:</span> Frey & Osborne percentages represent long-run technical feasibility of computerisation, not timeline predictions or guaranteed job losses. The study was conducted in 2013, before large language models. Physical job automation percentages may seem high due to manufacturing contexts but real-world field work remains complex. All statistics are properly cited and verifiable.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AIvsHumanJobs;