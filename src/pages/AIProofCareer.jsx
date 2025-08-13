// src/pages/AIProofCareer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';

const AIProofCareer = () => {
  const aiProofStrategies = [
    {
      strategy: "Develop AI-Human Collaboration Skills",
      description: "Learn to work alongside AI tools rather than compete with them. Master prompt engineering and AI tool integration.",
      timeframe: "4-8 weeks",
      difficulty: "Beginner"
    },
    {
      strategy: "Focus on High-Touch Human Skills",
      description: "Strengthen abilities that require emotional intelligence, complex reasoning, and interpersonal relationships.",
      timeframe: "3-6 months",
      difficulty: "Intermediate"
    },
    {
      strategy: "Become the AI Coordinator",
      description: "Position yourself as the person who manages AI implementations and human-AI workflows in your organization.",
      timeframe: "6-12 months",
      difficulty: "Advanced"
    },
    {
      strategy: "Specialize in AI Governance",
      description: "Develop expertise in AI ethics, compliance, and quality control - areas requiring human judgment.",
      timeframe: "6-18 months",
      difficulty: "Advanced"
    },
    {
      strategy: "Master Strategic Thinking",
      description: "Move from tactical execution to strategic planning and decision-making that requires business context.",
      timeframe: "6-12 months",
      difficulty: "Intermediate"
    },
    {
      strategy: "Build Cross-Functional Expertise",
      description: "Develop knowledge across multiple departments to become indispensable for complex, integrated projects.",
      timeframe: "12-24 months",
      difficulty: "Advanced"
    }
  ];

  const aiResistantSkills = [
    {
      category: "Creative & Strategic Skills",
      skills: ["Creative problem-solving", "Strategic planning", "Innovation management", "Design thinking"],
      whyResistant: "AI excels at pattern recognition but struggles with truly novel solutions and long-term strategic thinking."
    },
    {
      category: "Interpersonal Skills",
      skills: ["Team leadership", "Conflict resolution", "Emotional intelligence", "Complex negotiation"],
      whyResistant: "Human relationships, empathy, and social dynamics remain uniquely human capabilities."
    },
    {
      category: "Contextual Judgment",
      skills: ["Risk assessment", "Ethical decision-making", "Cultural sensitivity", "Stakeholder management"],
      whyResistant: "Business context, cultural nuance, and ethical reasoning require human understanding and accountability."
    },
    {
      category: "Adaptive Learning",
      skills: ["Cross-functional collaboration", "Change management", "Rapid skill acquisition", "Systems thinking"],
      whyResistant: "Adapting to new situations and learning from limited examples remains a human advantage."
    }
  ];

  const careerEvolutionExamples = [
    {
      fromRole: "Marketing Manager",
      toRole: "AI Marketing Strategist",
      riskReduction: "45% → 15%",
      keyChanges: ["Leads AI tool adoption", "Focuses on brand strategy", "Manages human-AI workflows"],
      timeline: "3-6 months"
    },
    {
      fromRole: "HR Coordinator",
      toRole: "People & AI Integration Specialist",
      riskReduction: "67% → 25%",
      keyChanges: ["Oversees AI recruitment tools", "Handles complex employee relations", "Designs AI governance policies"],
      timeline: "6-9 months"
    },
    {
      fromRole: "Financial Analyst",
      toRole: "AI-Enhanced Financial Advisor",
      riskReduction: "62% → 20%",
      keyChanges: ["Uses AI for analysis efficiency", "Focuses on client relationships", "Interprets AI insights for clients"],
      timeline: "6-12 months"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to AI-Proof Your Career: 10 Proven Strategies for 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Don't let artificial intelligence make your skills obsolete. Learn the essential strategies to future-proof your career and position yourself as an AI-resistant professional in any industry.
            </p>
            <Link
              to="/auth"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg inline-block"
            >
              Get My Personalized AI-Proofing Plan
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              ✨ Free assessment • Custom roadmap • Join 3,247+ professionals future-proofing their careers
            </p>
          </div>
        </div>
      </section>

      {/* What Makes a Career AI-Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Makes a Career AI-Proof?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">🧠</div>
              <h3 className="font-semibold text-gray-900 mb-2">Human Judgment</h3>
              <p className="text-gray-600 text-sm">Complex decision-making requiring context, ethics, and emotional intelligence</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">🤝</div>
              <h3 className="font-semibold text-gray-900 mb-2">Relationship Building</h3>
              <p className="text-gray-600 text-sm">Deep interpersonal connections and trust-based interactions</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">💡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Creative Innovation</h3>
              <p className="text-gray-600 text-sm">Original thinking and novel problem-solving approaches</p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Strategic Leadership</h3>
              <p className="text-gray-600 text-sm">High-level planning and organizational vision</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <p className="text-gray-700">
              <strong>Key Insight:</strong> AI-proof careers combine human strengths with AI capabilities rather than competing against them. 
              The future belongs to professionals who can orchestrate human-AI collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* 10 AI-Proofing Strategies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            10 Essential Strategies to AI-Proof Your Career
          </h2>
          
          <div className="space-y-6">
            {aiProofStrategies.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {index + 1}. {item.strategy}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    ⏱️ {item.timeframe}
                  </span>
                  <span className={`px-3 py-1 rounded-full ${
                    item.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    item.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    📊 {item.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Resistant Skills */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Skills That AI Can't Replace
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            <em>Focus your development on these human-advantage skills that remain resistant to automation.</em>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiResistantSkills.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Why AI-Resistant:</h4>
                  <p className="text-gray-600 text-sm">{category.whyResistant}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Evolution Examples */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Real Career Evolution Examples
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            See how professionals are transforming their roles to become AI-resistant while keeping their core expertise.
            <em> Timeline estimates based on dedicated skill development. Individual results may vary.</em>
          </p>
          
          <div className="space-y-8">
            {careerEvolutionExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="text-center md:text-left">
                    <h3 className="font-semibold text-gray-900 mb-2">From:</h3>
                    <p className="text-lg text-gray-700 mb-4">{example.fromRole}</p>
                    <div className="text-center">
                      <span className="text-2xl">➡️</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">To:</h3>
                    <p className="text-lg font-medium text-blue-600 mb-4">{example.toRole}</p>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg inline-block">
                      Risk: {example.riskReduction}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Key Changes:</h3>
                    <ul className="space-y-1 text-gray-600 text-sm mb-4">
                      {example.keyChanges.map((change, changeIndex) => (
                        <li key={changeIndex} className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          {change}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500">Timeline: {example.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/auth"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Get My Personalized Evolution Plan
            </Link>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Your 90-Day AI-Proofing Implementation Plan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">30</div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Days 1-30: Foundation</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Complete AI career risk assessment</li>
                <li>• Identify your AI-resistant strengths</li>
                <li>• Learn basic AI tools in your field</li>
                <li>• Map your evolution pathway</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">60</div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Days 31-60: Building</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Develop AI collaboration skills</li>
                <li>• Take on AI-integration projects</li>
                <li>• Build strategic thinking capabilities</li>
                <li>• Network with AI-forward professionals</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">90</div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Days 61-90: Positioning</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Present AI initiatives to leadership</li>
                <li>• Establish yourself as AI coordinator</li>
                <li>• Document your success metrics</li>
                <li>• Plan your next evolution phase</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions About AI-Proofing
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Can any career really be "AI-proof"?</h3>
              <p className="text-gray-600">
                No career is 100% immune to AI impact. "AI-proof" means developing skills and positioning that make you valuable alongside AI rather than replaceable by it. The goal is career resilience and adaptation, not complete immunity. Technology adoption varies significantly by company and industry.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">How long does it take to AI-proof a career?</h3>
              <p className="text-gray-600">
                Basic AI-resistance can be developed in 3-6 months through focused skill development. However, becoming truly AI-resistant is an ongoing process that requires continuous learning and adaptation. Timeline varies based on your starting point, industry, and dedication to skill development.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Do I need technical skills to be AI-resistant?</h3>
              <p className="text-gray-600">
                Not necessarily. While understanding AI capabilities helps, many AI-resistant roles focus on human skills like leadership, creativity, and relationship building. The key is learning to collaborate with AI tools rather than programming them. Basic prompt engineering and AI tool literacy are more important than coding skills.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">What if my company isn't adopting AI yet?</h3>
              <p className="text-gray-600">
                This gives you an advantage to become the AI pioneer when adoption begins. Develop AI skills independently, create pilot projects, and position yourself as the go-to person for AI integration. Use this time to build expertise and demonstrate value when the company is ready to embrace AI.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibf text-gray-900 mb-3">Are these strategies guaranteed to protect my job?</h3>
              <p className="text-gray-600">
                No strategy can guarantee job security in a rapidly changing economy. However, developing AI-resistant skills and positioning significantly improves your career resilience and adaptability. Success depends on individual effort, market conditions, company decisions, and many other factors beyond AI adoption alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start AI-Proofing Your Career Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait for AI to disrupt your industry. Take our assessment to discover your personalized AI-proofing strategy and secure your professional future.
          </p>
          <Link
            to="/auth"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            Get My Free AI-Proofing Assessment
          </Link>
          <p className="text-sm text-blue-200 mt-4">
            ✨ Personalized strategy • 90-day roadmap • Join 3,000+ professionals
          </p>
          <p className="text-xs text-blue-300 mt-2">
            <em>Educational guidance only. Career outcomes depend on multiple factors and individual effort.</em>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIProofCareer;