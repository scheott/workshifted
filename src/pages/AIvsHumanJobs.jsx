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
        { job: "Data Entry Clerk", risk: 95, timeline: "1-2 years", reason: "Fully automatable with current technology", evolution: "AI Data Manager, Process Automation Specialist" },
        { job: "Bookkeeper", risk: 85, timeline: "2-3 years", reason: "AI can handle routine transactions and reconciliation", evolution: "Financial AI Coordinator, Automated Finance Analyst" },
        { job: "Tax Preparer", risk: 82, timeline: "2-4 years", reason: "Software already handles most tax scenarios", evolution: "AI Tax Strategy Advisor, Complex Case Specialist" },
        { job: "Financial Analyst (Junior)", risk: 75, timeline: "3-5 years", reason: "Pattern recognition and data analysis", evolution: "Strategic Finance Partner, AI Model Validator" },
        { job: "Market Research Analyst", risk: 68, timeline: "3-6 years", reason: "AI can process large datasets and identify trends", evolution: "Consumer Insight Strategist, AI Research Director" }
      ]
    },
    creative: {
      title: "Creative Work",
      aiRisk: "Medium",
      description: "Jobs involving creative thinking, original content, and artistic expression",
      examples: [
        { job: "Content Writer (Basic)", risk: 70, timeline: "1-3 years", reason: "AI tools like ChatGPT can generate basic content", evolution: "Brand Voice Director, AI Content Strategist" },
        { job: "Graphic Designer (Template)", risk: 65, timeline: "2-4 years", reason: "AI design tools becoming more sophisticated", evolution: "Creative AI Coordinator, Visual Brand Strategist" },
        { job: "Marketing Copywriter", risk: 55, timeline: "3-5 years", reason: "AI can write persuasive copy but lacks brand understanding", evolution: "Brand Storytelling Director, Human Psychology Specialist" },
        { job: "Creative Director", risk: 25, timeline: "8+ years", reason: "Requires strategic thinking and brand vision", evolution: "Human-AI Creative Leader, Brand Experience Architect" },
        { job: "Fine Artist", risk: 15, timeline: "10+ years", reason: "Human expression and emotional connection", evolution: "AI-Augmented Artist, Digital Art Pioneer" }
      ]
    },
    interpersonal: {
      title: "Interpersonal Work",
      aiRisk: "Low",
      description: "Jobs requiring human interaction, empathy, and complex communication",
      examples: [
        { job: "Therapist/Counselor", risk: 5, timeline: "15+ years", reason: "Requires deep emotional understanding and human connection", evolution: "Digital Therapy Integration Specialist, Human-AI Wellness Coordinator" },
        { job: "Sales Manager", risk: 15, timeline: "10+ years", reason: "Relationship building and complex negotiation", evolution: "AI-Powered Sales Strategist, Customer Relationship AI Director" },
        { job: "HR Manager", risk: 18, timeline: "8+ years", reason: "Complex human dynamics and emotional intelligence", evolution: "People & AI Integration Leader, Human Experience Director" },
        { job: "Teacher", risk: 25, timeline: "10+ years", reason: "Personalized instruction and emotional support", evolution: "AI Learning Facilitator, Human Development Specialist" },
        { job: "Healthcare Provider", risk: 20, timeline: "12+ years", reason: "Physical presence and empathetic care required", evolution: "AI-Augmented Care Provider, Human Health Advocate" }
      ]
    },
    physical: {
      title: "Physical Work",
      aiRisk: "Low",
      description: "Jobs requiring manual dexterity, physical presence, or complex motor skills",
      examples: [
        { job: "Electrician", risk: 8, timeline: "15+ years", reason: "Complex problem-solving in varied environments", evolution: "Smart Building AI Specialist, Electrical Systems AI Coordinator" },
        { job: "Plumber", risk: 10, timeline: "15+ years", reason: "Unpredictable problems requiring human adaptability", evolution: "IoT Plumbing Systems Expert, Smart Home Integration Specialist" },
        { job: "Carpenter", risk: 12, timeline: "12+ years", reason: "Custom work and problem-solving in physical spaces", evolution: "AI-Assisted Construction Manager, Smart Building Specialist" },
        { job: "Chef", risk: 35, timeline: "8+ years", reason: "Creativity and adaptation to customer preferences", evolution: "Culinary AI Director, Food Experience Designer" },
        { job: "Personal Trainer", risk: 15, timeline: "10+ years", reason: "Personalized motivation and physical assessment", evolution: "AI Fitness Integration Coach, Human Performance Specialist" }
      ]
    }
  };

  const aiCapabilities = [
    {
      capability: "Data Processing",
      description: "Analyzing vast amounts of structured and unstructured data quickly",
      humanAdvantage: "Contextual understanding and ethical judgment",
      examples: ["Financial analysis", "Research synthesis", "Report generation"]
    },
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
      examples: ["Crisis management", "Innovation", "Strategic planning"],
      futureOutlook: "AI assists but human creativity and intuition lead breakthrough solutions"
    },
    {
      advantage: "Moral & Ethical Judgment",
      description: "Making decisions that consider complex ethical implications",
      importance: "Critical",
      examples: ["Legal decisions", "Medical ethics", "Policy making"],
      futureOutlook: "AI can inform but humans must make final moral judgments"
    }
  ];

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
                Get My AI Strategy
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
            🤖 vs 👨 Strategic Partnership Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI vs Human Jobs: 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 block">
              The Leadership Playbook
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Stop competing with AI—start directing it. Comprehensive analysis of where humans excel, 
            where AI dominates, and how to position yourself as the strategic leader in the middle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/auth"
              className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get My AI Leadership Plan
            </Link>
            <Link
              to="/ai-job-displacement-statistics"
              className="border border-purple-600 text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              View Risk Statistics
            </Link>
          </div>
          <p className="text-sm text-gray-600">
            5 minutes • Personalized roadmap • Learn to direct AI instead of competing with it
          </p>
        </div>

        {/* Key Insight */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Strategic Reality</h2>
              <p className="text-lg text-gray-700 mb-6">
                The future isn't humans vs. AI—it's humans <span className="font-semibold text-purple-600">directing</span> AI. 
                The professionals who learn to orchestrate human-AI collaboration will become the most valuable players in every industry.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-lg p-4 border border-purple-100">
                  <div className="text-2xl font-bold text-red-600 mb-2">Compete</div>
                  <div className="text-sm text-gray-600">Get displaced</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-100">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">Ignore</div>
                  <div className="text-sm text-gray-600">Fall behind</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-100">
                  <div className="text-2xl font-bold text-green-600 mb-2">Direct</div>
                  <div className="text-sm text-gray-600">Lead the future</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Analysis by Category */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Your Evolution Roadmap by Role Type
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Every role has an evolution path. The key is understanding where AI excels and positioning yourself 
            as the human director of AI capabilities. Higher automation risk = greater leadership opportunity.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
            {Object.entries(jobCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === key
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {jobCategories[activeTab].title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {jobCategories[activeTab].description}
                </p>
              </div>
              <div className="text-right">
                <div className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  jobCategories[activeTab].aiRisk === 'High' ? 'bg-red-100 text-red-700' :
                  jobCategories[activeTab].aiRisk === 'Medium' ? 'bg-orange-100 text-orange-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {jobCategories[activeTab].aiRisk} AI Risk = {jobCategories[activeTab].aiRisk} Leadership Opportunity
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {jobCategories[activeTab].examples.map((example, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-2">
                        {example.job}
                      </h4>
                      <div className="flex items-center mb-2">
                        <div className={`w-32 bg-gray-200 rounded-full h-2 mr-3`}>
                          <div 
                            className={`h-2 rounded-full ${
                              example.risk >= 70 ? 'bg-red-500' :
                              example.risk >= 40 ? 'bg-orange-500' :
                              'bg-green-500'
                            }`}
                            style={{ width: `${example.risk}%` }}
                          />
                        </div>
                        <span className={`font-semibold ${
                          example.risk >= 70 ? 'text-red-600' :
                          example.risk >= 40 ? 'text-orange-600' :
                          'text-green-600'
                        }`}>
                          {example.risk}%
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Timeline: {example.timeline}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Why AI Threatens This Role</h5>
                      <p className="text-sm text-gray-600 mb-3">{example.reason}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-blue-900 mb-2">Your Evolution Path</h5>
                      <p className="text-sm text-blue-700 font-medium">{example.evolution}</p>
                      <div className="mt-2">
                        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          Become the AI Director
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities vs Human Advantages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The Strategic Landscape: AI Capabilities vs Human Advantages
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* AI Capabilities */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">🤖 Where AI Dominates</h3>
              <p className="text-gray-600 mb-6">Understanding AI's strengths helps you delegate the right tasks while focusing on uniquely human value.</p>
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
                      <span className="text-xs font-semibold text-red-900">Your Strategic Edge:</span>
                      <p className="text-red-700 text-xs mt-1">{capability.humanAdvantage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Human Advantages */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">👨 Where Humans Lead</h3>
              <p className="text-gray-600 mb-6">These are your competitive advantages—the areas where you become more valuable, not less.</p>
              <div className="space-y-6">
                {humanAdvantages.map((advantage, index) => (
                  <div key={index} className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-green-900">{advantage.advantage}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        advantage.importance === 'Critical' ? 'bg-green-600 text-white' :
                        advantage.importance === 'High' ? 'bg-green-500 text-white' :
                        'bg-green-400 text-white'
                      }`}>
                        {advantage.importance}
                      </span>
                    </div>
                    <p className="text-green-800 text-sm mb-3">{advantage.description}</p>
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-green-900">Applications:</span>
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

        {/* Action Plan CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Become an AI Leader?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get your personalized roadmap to directing AI in your specific role—before your competitors do.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">📊 Role Risk Analysis</h3>
                <p className="text-sm opacity-90">Understand exactly which of your tasks AI will automate and when</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">🎯 AI Leadership Strategy</h3>
                <p className="text-sm opacity-90">Position yourself as the human who directs AI systems in your field</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">📈 Evolution Roadmap</h3>
                <p className="text-sm opacity-90">90-day plan to become the AI coordinator everyone depends on</p>
              </div>
            </div>
            <Link
              to="/auth"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Start My AI Leadership Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

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