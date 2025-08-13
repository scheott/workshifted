// src/pages/AICareerRiskAssessment.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';

const AICareerRiskAssessment = () => {
  const riskData = [
    { industry: 'Data Analysis', risk: 71, description: 'Machine learning automating routine analysis' },
    { industry: 'Banking & Finance', risk: 68, description: 'Algorithmic trading and automated underwriting' },
    { industry: 'Customer Service', risk: 76, description: 'AI chatbots handling routine inquiries' },
    { industry: 'Legal Services', risk: 64, description: 'AI document review and contract analysis' },
    { industry: 'Marketing', risk: 52, description: 'Automated content and campaign optimization' },
    { industry: 'Human Resources', risk: 52, description: 'AI recruitment and automated scheduling' }
  ];

  const riskFactors = [
    {
      factor: 'Routine Tasks',
      description: 'Jobs with repetitive, rule-based tasks face higher automation risk',
      impact: 'High'
    },
    {
      factor: 'Data Processing',
      description: 'Roles involving data entry, analysis, or reporting are increasingly automated',
      impact: 'High'
    },
    {
      factor: 'Human Interaction',
      description: 'Complex interpersonal relationships and emotional intelligence remain human advantages',
      impact: 'Protective'
    },
    {
      factor: 'Creative Strategy',
      description: 'High-level strategic thinking and creative problem-solving resist automation',
      impact: 'Protective'
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
              AI Career Risk Assessment: Will AI Replace Your Job?
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover your automation vulnerability with our comprehensive AI career risk assessment. Get a personalized risk score and actionable strategies to future-proof your career.
            </p>
            <Link
              to="/auth"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg inline-block"
            >
              Get My AI Risk Score (Free)
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              ✨ Free 5-minute assessment • Instant results • Used by 3,247+ professionals
            </p>
          </div>
        </div>
      </section>

      {/* Risk by Industry */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI Automation Risk by Industry
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            <em>Risk percentages based on current AI capabilities and industry automation trends. Individual results may vary by specific role, company size, and responsibilities.</em>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riskData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">{item.industry}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.risk >= 70 ? 'bg-red-100 text-red-800' :
                    item.risk >= 60 ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.risk}% Risk
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div 
                    className={`h-2 rounded-full ${
                      item.risk >= 70 ? 'bg-red-500' :
                      item.risk >= 60 ? 'bg-orange-500' :
                      'bg-yellow-500'
                    }`}
                    style={{ width: `${item.risk}%` }}
                  ></div>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the Assessment Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How Our AI Career Risk Assessment Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Role Analysis</h3>
              <p className="text-gray-600">
                We analyze your specific job title, daily tasks, and responsibilities against current AI capabilities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Scoring</h3>
              <p className="text-gray-600">
                Our algorithm evaluates automation potential, human-advantage factors, and industry trends.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Evolution Strategy</h3>
              <p className="text-gray-600">
                Get personalized recommendations to transform your role into an AI-resistant position.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/auth"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Start My Risk Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Risk Factors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Factors That Determine AI Career Risk
          </h2>
          
          <div className="space-y-6">
            {riskFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{factor.factor}</h3>
                    <p className="text-gray-600">{factor.description}</p>
                  </div>
                  <span className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${
                    factor.impact === 'High' ? 'bg-red-100 text-red-800' :
                    factor.impact === 'Protective' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {factor.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Evolution Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            From Risk to Opportunity: Career Evolution Examples
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border">
              <div className="bg-orange-100 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-orange-900">Marketing Manager</h3>
                <p className="text-sm text-orange-700">Current Risk: 45%</p>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-4">Evolution: AI Marketing Strategist</h4>
              
              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-medium text-red-600">Tasks at Risk:</span>
                  <p className="text-gray-600">Report generation, basic data analysis, routine A/B testing</p>
                </div>
                
                <div>
                  <span className="font-medium text-green-600">Human Advantages:</span>
                  <p className="text-gray-600">Brand strategy, stakeholder relationships, creative campaigns</p>
                </div>
                
                <div>
                  <span className="font-medium text-blue-600">Evolution Strategy:</span>
                  <p className="text-gray-600">Master AI tools for efficiency while leading brand voice and strategy initiatives</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border">
              <div className="bg-red-100 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-red-900">Data Analyst</h3>
                <p className="text-sm text-red-700">Current Risk: 71%</p>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-4">Evolution: AI Integration Specialist</h4>
              
              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-medium text-red-600">Tasks at Risk:</span>
                  <p className="text-gray-600">Data cleaning, basic reporting, routine statistical analysis</p>
                </div>
                
                <div>
                  <span className="font-medium text-green-600">Human Advantages:</span>
                  <p className="text-gray-600">Business context, model interpretation, stakeholder communication</p>
                </div>
                
                <div>
                  <span className="font-medium text-blue-600">Evolution Strategy:</span>
                  <p className="text-gray-600">Become the AI model manager and business insights translator</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/auth"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Discover My Evolution Path
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Your AI Risk Assessment Includes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Free Assessment Results</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Personalized automation risk score (0-100%)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Industry-specific threat timeline
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Basic AI-proofing recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Career evolution path suggestion
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium AI Career Insurance ($29)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">★</span>
                  Detailed 90-day transformation roadmap
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">★</span>
                  Skills gap analysis and learning priorities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">★</span>
                  AI tools recommendations for your role
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">★</span>
                  Templates for proposing AI initiatives
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">★</span>
                  Monthly AI threat updates for your industry
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">How accurate are AI career risk predictions?</h3>
              <p className="text-gray-600">
                Our assessments are based on current AI capabilities, documented automation trends, and task analysis research. However, technology adoption varies by company and industry. Results provide educational guidance about potential risks, not definitive predictions. Individual career outcomes depend on many factors including personal effort, market conditions, and company decisions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Will AI really replace my specific job?</h3>
              <p className="text-gray-600">
                AI typically automates specific tasks within jobs rather than eliminating entire positions immediately. Our assessment identifies which aspects of your role face automation risk and which human skills remain valuable. The goal is career evolution, not replacement.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Is this assessment based on real data?</h3>
              <p className="text-gray-600">
                Yes. We analyze publicly available research on AI capabilities, industry automation reports, and user-submitted role data. Risk percentages reflect current trends but may not predict future outcomes with certainty. Use results as guidance for career planning, not absolute forecasts.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">What if my assessment shows high risk?</h3>
              <p className="text-gray-600">
                High risk indicates opportunity for strategic career evolution. Our recommendations focus on leveraging your existing skills while developing AI-resistant capabilities. Most high-risk roles can transform into AI-coordinating positions with targeted skill development.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Do I need to change careers completely?</h3>
              <p className="text-gray-600">
                No. Our approach focuses on career evolution, not career change. You'll build on your existing expertise while developing AI-resistant skills and positioning. Most professionals can adapt their current role rather than starting over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Wait for AI to Disrupt Your Career
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take control of your professional future with our AI career risk assessment. Get ahead of automation instead of being left behind.
          </p>
          <Link
            to="/auth"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            Get My Free AI Risk Score Now
          </Link>
          <p className="text-sm text-blue-200 mt-4">
            ✨ 5-minute assessment • Instant personalized results • Join 3,247+ professionals
          </p>
          <p className="text-xs text-blue-300 mt-2">
            <em>Educational guidance only. Results may vary. Individual career outcomes depend on multiple factors.</em>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AICareerRiskAssessment;