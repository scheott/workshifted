// src/pages/JobsAICantReplace.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';

const JobsAICantReplace = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industryData = [
    {
      id: 'healthcare',
      name: 'Healthcare & Medicine',
      overallRisk: 'Low-Medium',
      description: 'Human connection and complex diagnosis remain essential',
      aiResistantJobs: [
        { role: 'Surgeons', risk: 15, reason: 'Requires precision, judgment, and real-time decision-making' },
        { role: 'Therapists & Counselors', risk: 10, reason: 'Emotional intelligence and human connection are irreplaceable' },
        { role: 'Emergency Medicine Physicians', risk: 20, reason: 'Life-or-death decisions require human accountability' },
        { role: 'Nurses (Critical Care)', risk: 25, reason: 'Patient care and family communication remain human-centered' }
      ],
      vulnerableJobs: [
        { role: 'Medical Transcriptionists', risk: 85 },
        { role: 'Medical Coding Specialists', risk: 75 },
        { role: 'Radiology Technicians', risk: 60 }
      ]
    },
    {
      id: 'education',
      name: 'Education & Training',
      overallRisk: 'Low-Medium',
      description: 'Human mentorship and adaptability crucial for learning',
      aiResistantJobs: [
        { role: 'Elementary Teachers', risk: 20, reason: 'Child development and emotional support require human connection' },
        { role: 'Special Education Teachers', risk: 15, reason: 'Individualized care and adaptation to unique needs' },
        { role: 'University Professors', risk: 30, reason: 'Research, critical thinking, and mentorship remain human-driven' },
        { role: 'Corporate Trainers', risk: 35, reason: 'Adult learning and organizational dynamics need human insight' }
      ],
      vulnerableJobs: [
        { role: 'Test Proctors', risk: 80 },
        { role: 'Educational Content Writers', risk: 65 },
        { role: 'Language Tutors (Basic)', risk: 70 }
      ]
    },
    {
      id: 'creative',
      name: 'Creative & Arts',
      overallRisk: 'Medium',
      description: 'Original creativity and human expression remain valuable',
      aiResistantJobs: [
        { role: 'Art Directors', risk: 25, reason: 'Strategic creative vision and brand interpretation' },
        { role: 'Film Directors', risk: 20, reason: 'Storytelling and human emotion direction' },
        { role: 'Creative Writers (Original)', risk: 30, reason: 'Unique voice and authentic human experience' },
        { role: 'Musicians (Performance)', risk: 15, reason: 'Live performance and emotional connection with audience' }
      ],
      vulnerableJobs: [
        { role: 'Stock Photo Creators', risk: 85 },
        { role: 'Basic Graphic Designers', risk: 75 },
        { role: 'Content Writers (SEO)', risk: 70 }
      ]
    },
    {
      id: 'business',
      name: 'Business & Management',
      overallRisk: 'Medium-High',
      description: 'Leadership and strategic thinking resist automation',
      aiResistantJobs: [
        { role: 'C-Suite Executives', risk: 20, reason: 'Strategic vision and stakeholder relationships' },
        { role: 'Sales Directors', risk: 25, reason: 'Complex relationship building and negotiation' },
        { role: 'Change Management Consultants', risk: 30, reason: 'Human psychology and organizational dynamics' },
        { role: 'Executive Coaches', risk: 15, reason: 'Personal development and leadership mentoring' }
      ],
      vulnerableJobs: [
        { role: 'Data Entry Clerks', risk: 95 },
        { role: 'Basic Financial Analysts', risk: 80 },
        { role: 'Administrative Assistants', risk: 70 }
      ]
    },
    {
      id: 'skilled-trades',
      name: 'Skilled Trades',
      overallRisk: 'Low',
      description: 'Physical dexterity and problem-solving in unpredictable environments',
      aiResistantJobs: [
        { role: 'Electricians', risk: 10, reason: 'Complex problem-solving in varied physical environments' },
        { role: 'Plumbers', risk: 15, reason: 'Diagnostic skills and adaptation to unique situations' },
        { role: 'HVAC Technicians', risk: 20, reason: 'System integration and customer interaction' },
        { role: 'Automotive Technicians', risk: 25, reason: 'Diagnostic reasoning and hands-on repair skills' }
      ],
      vulnerableJobs: [
        { role: 'Assembly Line Workers', risk: 85 },
        { role: 'Quality Control Inspectors', risk: 75 },
        { role: 'Basic Maintenance Workers', risk: 60 }
      ]
    },
    {
      id: 'technology',
      name: 'Technology',
      overallRisk: 'Medium-High',
      description: 'AI is transforming tech work, but human oversight remains crucial',
      aiResistantJobs: [
        { role: 'AI/ML Engineers', risk: 25, reason: 'Design and oversee AI systems' },
        { role: 'DevOps Engineers', risk: 30, reason: 'Complex system integration and troubleshooting' },
        { role: 'Product Managers', risk: 35, reason: 'Strategic vision and stakeholder management' },
        { role: 'Cybersecurity Specialists', risk: 40, reason: 'Threat assessment and strategic defense planning' }
      ],
      vulnerableJobs: [
        { role: 'Basic Web Developers', risk: 70 },
        { role: 'QA Testers (Manual)', risk: 80 },
        { role: 'Technical Writers', risk: 75 }
      ]
    }
  ];

  const humanAdvantageFactors = [
    {
      factor: 'Emotional Intelligence',
      description: 'Understanding and responding to human emotions, building trust and rapport',
      examples: ['Therapists', 'Teachers', 'Sales Leaders', 'Managers']
    },
    {
      factor: 'Creative Problem-Solving',
      description: 'Generating novel solutions to complex, unprecedented challenges',
      examples: ['Designers', 'Engineers', 'Consultants', 'Entrepreneurs']
    },
    {
      factor: 'Physical Dexterity',
      description: 'Fine motor skills and adaptation to varied physical environments',
      examples: ['Surgeons', 'Craftspeople', 'Technicians', 'Artists']
    },
    {
      factor: 'Ethical Judgment',
      description: 'Making decisions based on moral reasoning and cultural context',
      examples: ['Judges', 'Doctors', 'Executives', 'Counselors']
    },
    {
      factor: 'Strategic Leadership',
      description: 'Long-term vision, organizational change, and stakeholder alignment',
      examples: ['CEOs', 'Directors', 'Project Managers', 'Politicians']
    }
  ];

  const filteredIndustries = selectedIndustry === 'all' ? industryData : industryData.filter(industry => industry.id === selectedIndustry);

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Jobs That AI Can't Replace: Complete Industry Guide 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover which careers remain AI-resistant across every major industry. Find jobs that leverage uniquely human skills and learn how to position yourself in roles that complement rather than compete with artificial intelligence.
            </p>
            <Link
              to="/auth"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg inline-block"
            >
              Find My AI-Resistant Career Path
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              ✨ Free assessment • Industry-specific analysis • Join 3,247+ professionals
            </p>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Makes Jobs AI-Resistant?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">🤝</div>
              <h3 className="font-semibold text-gray-900 mb-2">Human Connection</h3>
              <p className="text-gray-600 text-sm">Roles requiring empathy, trust-building, and complex interpersonal relationships</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">🧠</div>
              <h3 className="font-semibold text-gray-900 mb-2">Complex Judgment</h3>
              <p className="text-gray-600 text-sm">Decision-making requiring context, ethics, and accountability</p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Adaptability</h3>
              <p className="text-gray-600 text-sm">Flexibility to handle unexpected situations and novel problems</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <p className="text-gray-700">
              <strong>Important:</strong> No job is 100% immune to AI impact. These roles represent careers with strong human advantages that are likely to evolve alongside AI rather than be replaced by it. 
              <em>Individual career security depends on multiple factors including skill development, industry adoption rates, and economic conditions.</em>
            </p>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedIndustry('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedIndustry === 'all' 
                ? 'bg-purple-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-purple-50'
              }`}
            >
              All Industries
            </button>
            {industryData.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedIndustry === industry.id 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-purple-50'
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Analysis */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredIndustries.map((industry) => (
              <div key={industry.id} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      industry.overallRisk === 'Low' ? 'bg-green-100 text-green-800' :
                      industry.overallRisk === 'Low-Medium' ? 'bg-yellow-100 text-yellow-800' :
                      industry.overallRisk === 'Medium' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {industry.overallRisk} AI Risk
                    </span>
                  </div>
                  <p className="text-gray-600">{industry.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* AI-Resistant Jobs */}
                  <div>
                    <h4 className="text-xl font-semibold text-green-700 mb-6 flex items-center">
                      <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm mr-2">✓</span>
                      AI-Resistant Roles
                    </h4>
                    <div className="space-y-4">
                      {industry.aiResistantJobs.map((job, index) => (
                        <div key={index} className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-gray-900">{job.role}</h5>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                              {job.risk}% Risk
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm">{job.reason}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vulnerable Jobs */}
                  <div>
                    <h4 className="text-xl font-semibold text-red-700 mb-6 flex items-center">
                      <span className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-sm mr-2">!</span>
                      Higher Risk Roles
                    </h4>
                    <div className="space-y-4">
                      {industry.vulnerableJobs.map((job, index) => (
                        <div key={index} className="bg-red-50 rounded-lg p-4 border border-red-200">
                          <div className="flex items-center justify-between">
                            <h5 className="font-semibold text-gray-900">{job.role}</h5>
                            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                              {job.risk}% Risk
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Advantage Factors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            The 5 Human Advantage Factors
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            These uniquely human capabilities provide the strongest protection against AI automation across all industries.
          </p>
          
          <div className="space-y-8">
            {humanAdvantageFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{factor.factor}</h3>
                    <p className="text-gray-600">{factor.description}</p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-medium text-gray-900 mb-3">Example Roles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {factor.examples.map((example, exampleIndex) => (
                        <span key={exampleIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Strategy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How to Position Yourself in AI-Resistant Roles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">If You're in a High-Risk Role</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">1.</span>
                  Identify which aspects of your job are most automatable
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">2.</span>
                  Develop skills in AI-resistant areas of your field
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">3.</span>
                  Position yourself as the AI coordinator or manager
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">4.</span>
                  Focus on strategy, relationships, and complex problem-solving
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-green-900 mb-6">If You're in a Low-Risk Role</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">1.</span>
                  Learn to integrate AI tools to increase your productivity
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">2.</span>
                  Stay updated on AI developments in your industry
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">3.</span>
                  Develop expertise in human-AI collaboration
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">4.</span>
                  Mentor others in adapting to AI-augmented workflows
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/auth"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
            >
              Get My Personalized Career Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Are these job predictions guaranteed?</h3>
              <p className="text-gray-600">
                No. These assessments reflect current AI capabilities and industry trends, but technology adoption varies significantly by company, region, and economic factors. Job security depends on many variables beyond AI automation, including individual performance, market demand, and company decisions. Use this analysis as guidance for career planning, not absolute predictions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">How quickly will AI impact these industries?</h3>
              <p className="text-gray-600">
                AI adoption timelines vary widely. Some industries may see significant changes within 2-5 years, while others may take 10+ years. Factors include regulatory requirements, safety considerations, cost of implementation, and consumer acceptance. Individual companies may adopt AI at very different rates even within the same industry.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Should I avoid high-risk career fields entirely?</h3>
              <p className="text-gray-600">
                Not necessarily. High-risk fields often present opportunities to become AI coordinators or specialists. The key is understanding which aspects of roles face automation risk and positioning yourself in the human-advantage areas. Many successful professionals will evolve their roles rather than change fields entirely.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">What about jobs that don't exist yet?</h3>
              <p className="text-gray-600">
                AI will likely create new job categories we can't fully predict today, just as the internet created roles that didn't exist in 1990. Focus on developing adaptable skills like learning agility, problem-solving, and human collaboration that transfer across emerging roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Find Your AI-Resistant Career Path
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Take our comprehensive assessment to discover which AI-resistant roles match your skills and interests across all industries.
          </p>
          <Link
            to="/auth"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            Start My Career Assessment
          </Link>
          <p className="text-sm text-purple-200 mt-4">
            ✨ Industry-specific analysis • Personalized recommendations • Free assessment
          </p>
          <p className="text-xs text-purple-300 mt-2">
            <em>Career guidance only. Individual results depend on multiple factors including skills, market conditions, and personal effort.</em>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobsAICantReplace;