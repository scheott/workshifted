// src/pages/AIvsHumanJobs.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AIvsHumanJobs = () => {
  const [activeTab, setActiveTab] = useState('cognitive');

  const jobCategories = {
    cognitive: {
      title: "Cognitive Work",
      aiRisk: "High",
      description: "Jobs primarily involving data processing, analysis, and routine decision making",
      examples: [
        { job: "Data Entry Clerk", risk: 95, timeline: "1-2 years", reason: "Fully automatable with current technology" },
        { job: "Bookkeeper", risk: 85, timeline: "2-3 years", reason: "AI can handle routine transactions and reconciliation" },
        { job: "Tax Preparer", risk: 82, timeline: "2-4 years", reason: "Software already handles most tax scenarios" },
        { job: "Financial Analyst (Junior)", risk: 75, timeline: "3-5 years", reason: "Pattern recognition and data analysis" },
        { job: "Market Research Analyst", risk: 68, timeline: "3-6 years", reason: "AI can process large datasets and identify trends" }
      ]
    },
    creative: {
      title: "Creative Work",
      aiRisk: "Medium",
      description: "Jobs involving creative thinking, original content, and artistic expression",
      examples: [
        { job: "Content Writer (Basic)", risk: 70, timeline: "1-3 years", reason: "AI tools like ChatGPT can generate basic content" },
        { job: "Graphic Designer (Template)", risk: 65, timeline: "2-4 years", reason: "AI design tools becoming more sophisticated" },
        { job: "Marketing Copywriter", risk: 55, timeline: "3-5 years", reason: "AI can write persuasive copy but lacks brand understanding" },
        { job: "Creative Director", risk: 25, timeline: "8+ years", reason: "Requires strategic thinking and brand vision" },
        { job: "Fine Artist", risk: 15, timeline: "10+ years", reason: "Personal expression and human connection remain unique" }
      ]
    },
    manual: {
      title: "Manual & Physical Work",
      aiRisk: "Low",
      description: "Jobs requiring physical presence, manual dexterity, and on-site problem solving",
      examples: [
        { job: "Electrician", risk: 8, timeline: "15+ years", reason: "Complex problem-solving in unique environments" },
        { job: "Plumber", risk: 12, timeline: "15+ years", reason: "Manual dexterity and on-site diagnostics" },
        { job: "HVAC Technician", risk: 9, timeline: "15+ years", reason: "System troubleshooting requires human judgment" },
        { job: "Carpenter", risk: 15, timeline: "12+ years", reason: "Custom work and problem-solving in varied conditions" },
        { job: "Automotive Technician", risk: 18, timeline: "10+ years", reason: "Complex diagnostics but some automation possible" }
      ]
    },
    interpersonal: {
      title: "Interpersonal Work",
      aiRisk: "Medium-Low",
      description: "Jobs centered on human relationships, emotional intelligence, and complex communication",
      examples: [
        { job: "Customer Service (Basic)", risk: 78, timeline: "1-3 years", reason: "Chatbots handle routine inquiries effectively" },
        { job: "Sales Representative (Transactional)", risk: 60, timeline: "3-5 years", reason: "AI can handle basic sales processes" },
        { job: "Therapist", risk: 15, timeline: "15+ years", reason: "Human empathy and complex emotional understanding" },
        { job: "Teacher (K-12)", risk: 25, timeline: "10+ years", reason: "Relationship building and adaptive instruction" },
        { job: "Nurse", risk: 20, timeline: "12+ years", reason: "Patient care requires human touch and judgment" }
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
    if (risk >= 70) return 'text-red-600 bg-red-100';
    if (risk >= 50) return 'text-orange-600 bg-orange-100';
    if (risk >= 30) return 'text-yellow-600 bg-yellow-100';
    return 'text-green-600 bg-green-100';
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li>→</li>
            <li><Link to="/ai-job-displacement-statistics" className="hover:text-blue-600">AI Statistics</Link></li>
            <li>→</li>
            <li className="text-gray-900">AI vs Human Jobs</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-4">
            🤖 vs 👨 Complete Analysis
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI vs Human Jobs: The
            <span className="text-purple-600"> Complete Guide</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Comprehensive analysis of which jobs AI can replace, which remain human-centric, and how to position yourself for long-term career security in the age of automation.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">40%</div>
              <div className="text-sm text-gray-600">Jobs at high risk</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">35%</div>
              <div className="text-sm text-gray-600">Medium risk</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">25%</div>
              <div className="text-sm text-gray-600">Low risk</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2030</div>
              <div className="text-sm text-gray-600">Peak impact year</div>
            </div>
          </div>
        </div>

        {/* Job Categories Analysis */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Jobs by AI Risk Category</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.entries(jobCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeTab === key 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{jobCategories[activeTab].title}</h3>
                <p className="text-gray-600 mt-1">{jobCategories[activeTab].description}</p>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                jobCategories[activeTab].aiRisk === 'High' ? 'bg-red-100 text-red-800' :
                jobCategories[activeTab].aiRisk === 'Medium' ? 'bg-orange-100 text-orange-800' :
                jobCategories[activeTab].aiRisk === 'Medium-Low' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {jobCategories[activeTab].aiRisk} AI Risk
              </span>
            </div>

            <div className="space-y-4">
              {jobCategories[activeTab].examples.map((job, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">{job.job}</h4>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRiskColor(job.risk)}`}>
                        {job.risk}% Risk
                      </span>
                      <span className="text-sm text-gray-600 font-medium">{job.timeline}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{job.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What AI Does Well */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What AI Does Well vs. Human Advantages</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* AI Capabilities */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">🤖 AI Strengths</h3>
              <div className="space-y-6">
                {aiCapabilities.map((capability, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-red-900 mb-3">{capability.capability}</h4>
                    <p className="text-red-800 text-sm mb-3">{capability.description}</p>
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-red-900">Examples:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {capability.examples.map((example, i) => (
                          <span key={i} className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-red-200 pt-3">
                      <span className="text-xs font-semibold text-red-900">Human Edge:</span>
                      <p className="text-red-700 text-xs mt-1">{capability.humanAdvantage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Human Advantages */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">👨 Human Advantages</h3>
              <div className="space-y-6">
                {humanAdvantages.map((advantage, index) => (
                  <div key={index} className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-green-900">{advantage.advantage}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        advantage.importance === 'Critical' ? 'bg-green-600 text-white' :
                        advantage.importance === 'High' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {advantage.importance}
                      </span>
                    </div>
                    <p className="text-green-800 text-sm mb-3">{advantage.description}</p>
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-green-900">Examples:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {advantage.examples.map((example, i) => (
                          <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-green-200 pt-3">
                      <span className="text-xs font-semibold text-green-900">Future Outlook:</span>
                      <p className="text-green-700 text-xs mt-1">{advantage.futureOutlook}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Predictions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AI Displacement Timeline</h2>
          
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-center mr-6">
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">2024-2025</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Current Wave</h3>
                  <p className="text-gray-700 mb-3">AI tools like ChatGPT, automated customer service, and basic content generation already impacting:</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Basic content writing and copywriting</li>
                    <li>• Simple customer service interactions</li>
                    <li>• Data entry and basic analysis</li>
                    <li>• Template-based design work</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-center mr-6">
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">2025-2027</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Acceleration Phase</h3>
                  <p className="text-gray-700 mb-3">More sophisticated AI systems affecting mid-level cognitive work:</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Financial analysis and basic accounting</li>
                    <li>• Junior legal research and document review</li>
                    <li>• Marketing campaign optimization</li>
                    <li>• Basic software development tasks</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-center mr-6">
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">2028-2032</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Major Transition</h3>
                  <p className="text-gray-700 mb-3">AI capabilities expand to more complex cognitive tasks:</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Advanced financial planning and analysis</li>
                    <li>• Complex content strategy and creation</li>
                    <li>• Medical diagnosis assistance</li>
                    <li>• Sophisticated customer relationship management</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-center mr-6">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">2030+</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Stabilization</h3>
                  <p className="text-gray-700 mb-3">Human-AI collaboration becomes the norm, with clear divisions:</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• AI handles routine processing and analysis</li>
                    <li>• Humans focus on strategy, relationships, and creativity</li>
                    <li>• Physical trades remain primarily human-driven</li>
                    <li>• New jobs emerge in AI management and oversight</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Protection Strategies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Protection Strategies</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Build Physical Skills</h3>
              <p className="text-blue-800 text-sm mb-4">
                Develop hands-on capabilities that require human presence and problem-solving in real-world environments.
              </p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Electrical work and troubleshooting</li>
                <li>• Mechanical repair and maintenance</li>
                <li>• Construction and installation</li>
                <li>• Healthcare and personal services</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-3">Focus on Relationships</h3>
              <p className="text-green-800 text-sm mb-4">
                Emphasize roles that require emotional intelligence, trust-building, and complex human interaction.
              </p>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Client relationship management</li>
                <li>• Team leadership and mentoring</li>
                <li>• Complex sales and negotiation</li>
                <li>• Counseling and coaching</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Become AI-Adjacent</h3>
              <p className="text-purple-800 text-sm mb-4">
                Learn to work alongside AI tools, managing and directing artificial intelligence systems effectively.
              </p>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• AI system management and oversight</li>
                <li>• Data interpretation and context</li>
                <li>• AI training and optimization</li>
                <li>• Human-AI workflow design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Immediate Action Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Take Action Now</h2>
          
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Your 90-Day Career Security Plan</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-200 mb-3">Days 1-30: Assess</h4>
                <ul className="text-blue-100 text-sm space-y-2">
                  <li>• Evaluate your current job's AI risk</li>
                  <li>• Identify transferable skills</li>
                  <li>• Research AI-resistant career options</li>
                  <li>• Take career assessment tests</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-200 mb-3">Days 31-60: Explore</h4>
                <ul className="text-blue-100 text-sm space-y-2">
                  <li>• Research trade training programs</li>
                  <li>• Connect with professionals in target fields</li>
                  <li>• Attend industry events and workshops</li>
                  <li>• Start basic skill-building courses</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-200 mb-3">Days 61-90: Begin</h4>
                <ul className="text-blue-100 text-sm space-y-2">
                  <li>• Enroll in weekend training program</li>
                  <li>• Build professional network</li>
                  <li>• Start hands-on skill development</li>
                  <li>• Create transition timeline</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Career Assessment CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your AI-Resistant Career Match
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Take our comprehensive assessment to discover which human-centric careers align with your skills, interests, and provide long-term security against automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/auth"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Free Career Assessment
            </Link>
            <Link
              to="/recession-proof-careers-2025"
              className="border border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200"
            >
              See Recession-Proof Options
            </Link>
          </div>
          
          <p className="text-xs text-blue-100 mt-6">
            5 minutes • Personalized results • No spam • Start building your career security today
          </p>
        </div>

        {/* Related Resources */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Your Research</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/ai-job-displacement-statistics"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📊 AI Displacement Statistics</h3>
              <p className="text-gray-600 text-sm">Detailed data on automation risk by industry and timeline</p>
            </Link>
            
            <Link 
              to="/will-ai-take-my-job-by-industry"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🎯 Industry Risk Analysis</h3>
              <p className="text-gray-600 text-sm">Specific automation predictions for your field</p>
            </Link>
            
            <Link 
              to="/recession-proof-careers-2025"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🛡️ Recession-Proof Careers</h3>
              <p className="text-gray-600 text-sm">Jobs that survive economic downturns and disruption</p>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AIvsHumanJobs;