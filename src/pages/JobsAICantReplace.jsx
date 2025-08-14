// src/pages/JobsAICantReplace.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';

const SourceLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="underline decoration-dotted hover:decoration-solid hover:text-purple-700"
  >
    {children}
  </a>
);

const JobsAICantReplace = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  // NOTE ON SOURCING:
  // Percentages below are automation probabilities from Frey & Osborne (Oxford, 2013/2017 update)
  // mapped to the closest U.S. SOC occupation for each role label.
  // See "Sources" at the bottom for links and mapping notes.

  const industryData = [
    {
      id: 'healthcare',
      name: 'Healthcare & Medicine',
      overallRisk: 'Low', // based on very low probabilities for physicians, nurses, therapists
      description: 'Human connection and complex diagnosis remain essential',
      aiResistantJobs: [
        { role: 'Surgeons', risk: 0.4, reason: 'Requires precision, judgment, and real-time decision-making' }, // Surgeons ~0.36%
        { role: 'Therapists & Counselors', risk: 1.3, reason: 'Emotional intelligence and human connection are irreplaceable' }, // Marriage & family therapists ~1.3%
        { role: 'Emergency Medicine Physicians', risk: 0.4, reason: 'Life-or-death decisions require human accountability' }, // Physicians & surgeons ~0.42%
        { role: 'Nurses (Critical Care)', risk: 0.9, reason: 'Patient care and family communication remain human-centered' } // Registered nurses ~0.9%
      ],
      vulnerableJobs: [
        { role: 'Medical Transcriptionists', risk: 89 },
        { role: 'Medical Coding Specialists', risk: 91 }, // proxied by Medical Records & Health Info Technicians
        { role: 'Radiology Technicians', risk: 23 } // Radiologic technologists & technicians
      ]
    },
    {
      id: 'education',
      name: 'Education & Training',
      overallRisk: 'Low',
      description: 'Human mentorship and adaptability crucial for learning',
      aiResistantJobs: [
        { role: 'Elementary Teachers', risk: 0.44, reason: 'Child development and emotional support require human connection' }, // Elementary ~0.44–0.45%
        { role: 'Special Education Teachers', risk: 0.77, reason: 'Individualized care and adaptation to unique needs' }, // Special Ed (secondary) ~0.77%
        { role: 'University Professors', risk: 3.2, reason: 'Research, critical thinking, and mentorship remain human-driven' }, // Postsecondary teachers ~3.2%
        { role: 'Corporate Trainers', risk: 1.4, reason: 'Adult learning and organizational dynamics need human insight' } // Training & development specialists ~1.4%
      ],
      vulnerableJobs: [
        { role: 'Test Proctors', risk: 56 }, // proxied by Teacher Assistants ~56%
        { role: 'Educational Content Writers', risk: 3.8 }, // proxied by Writers & Authors ~3.8% (lower than many assume)
        { role: 'Language Tutors (Basic)', risk: 13 } // proxied by Self-enrichment education teachers ~13%
      ]
    },
    {
      id: 'creative',
      name: 'Creative & Arts',
      overallRisk: 'Low',
      description: 'Original creativity and human expression remain valuable',
      aiResistantJobs: [
        { role: 'Art Directors', risk: 2.3, reason: 'Strategic creative vision and brand interpretation' },
        { role: 'Film Directors', risk: 2.2, reason: 'Storytelling and human emotion direction' }, // Producers & Directors
        { role: 'Creative Writers (Original)', risk: 3.8, reason: 'Unique voice and authentic human experience' }, // Writers & Authors
        { role: 'Musicians (Performance)', risk: 7.4, reason: 'Live performance and emotional connection with audience' } // Musicians & Singers ~7.4%
      ],
      vulnerableJobs: [
        { role: 'Stock Photo Creators', risk: 2.1 }, // proxied by Photographers ~2.1%
        { role: 'Basic Graphic Designers', risk: 8.2 },
        { role: 'Content Writers (SEO)', risk: 3.8 } // proxied by Writers & Authors
      ]
    },
    {
      id: 'business',
      name: 'Business & Management',
      overallRisk: 'Medium',
      description: 'Leadership and strategic thinking resist automation',
      aiResistantJobs: [
        { role: 'C-Suite Executives', risk: 1.5, reason: 'Strategic vision and stakeholder relationships' }, // Chief Executives
        { role: 'Sales Directors', risk: 1.3, reason: 'Complex relationship building and negotiation' }, // Sales Managers
        { role: 'Change Management Consultants', risk: 13, reason: 'Human psychology and organizational dynamics' }, // Management Analysts ~13%
        { role: 'Executive Coaches', risk: 1.3, reason: 'Personal development and leadership mentoring' } // proxied by similar low-risk advisory roles
      ],
      vulnerableJobs: [
        { role: 'Data Entry Clerks', risk: 99 },
        { role: 'Basic Financial Analysts', risk: 23 },
        { role: 'Administrative Assistants', risk: 96 } // Executive secretaries & admin assistants
      ]
    },
    {
      id: 'skilled-trades',
      name: 'Skilled Trades',
      overallRisk: 'Medium',
      description: 'Physical dexterity and problem-solving in unpredictable environments',
      aiResistantJobs: [
        { role: 'Electricians', risk: 15, reason: 'Complex problem-solving in varied physical environments' },
        { role: 'Plumbers', risk: 35, reason: 'Diagnostic skills and adaptation to unique situations' },
        { role: 'HVAC Technicians', risk: 65, reason: 'System integration and customer interaction' },
        { role: 'Automotive Technicians', risk: 59, reason: 'Diagnostic reasoning and hands-on repair skills' }
      ],
      vulnerableJobs: [
        { role: 'Assembly Line Workers', risk: 97 }, // proxied by Assemblers & Fabricators / Team Assemblers (97–98%)
        { role: 'Quality Control Inspectors', risk: 98 }, // Inspectors, Testers, Sorters, Samplers, and Weighers
        { role: 'Basic Maintenance Workers', risk: 50 } // Installation, maintenance & repair workers (all other) ~50%
      ]
    },
    {
      id: 'technology',
      name: 'Technology',
      overallRisk: 'Medium',
      description: 'AI is transforming tech work, but human oversight remains crucial',
      aiResistantJobs: [
        { role: 'AI/ML Engineers', risk: 13, reason: 'Design and oversee AI systems' }, // proxied by Software Developers, Systems Software ~13%
        { role: 'DevOps Engineers', risk: 3.0, reason: 'Complex system integration and troubleshooting' }, // Network & Computer Systems Admins ~3%
        { role: 'Product Managers', risk: 16, reason: 'Strategic vision and stakeholder management' }, // General & Operations Managers ~16%
        { role: 'Cybersecurity Specialists', risk: 21, reason: 'Threat assessment and strategic defense planning' } // InfoSec / Web Dev / Net Arch group ~21%
      ],
      vulnerableJobs: [
        { role: 'Basic Web Developers', risk: 21 }, // grouped category with InfoSec & Network Architects ~21%
        { role: 'QA Testers (Manual)', risk: 22 }, // proxied by Computer Occupations, All Other
        { role: 'Technical Writers', risk: 89 }
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
              <em> Individual career security depends on multiple factors including skill development, industry adoption rates, and economic conditions.</em>
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

                {/* Mapping note per section (small, subtle) */}
                <p className="text-xs text-gray-500 mt-6">
                  *Role risks mapped to closest U.S. SOC occupations in source data; see details in Sources.
                </p>
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

      {/* Sources */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <p className="text-sm text-gray-700">
            • Frey, C. B., & Osborne, M. A. (2013, 2017 update). <SourceLink href="https://oms-www.files.svdcdn.com/production/downloads/academic/The_Future_of_Employment.pdf">The Future of Employment: How Susceptible are Jobs to Computerisation?</SourceLink> (Occupation probabilities; roles above mapped to closest SOC categories)
          </p>
          <p className="text-sm text-gray-700 mt-2">
            • World Economic Forum (2023). <SourceLink href="https://www.weforum.org/reports/the-future-of-jobs-report-2023/">Future of Jobs Report 2023</SourceLink> (sectoral adoption trends; context)
          </p>
          <p className="text-sm text-gray-700 mt-2">
            • OECD (2019). <SourceLink href="https://www.oecd.org/employment/Automation-and-Training.pdf">Automation and Training</SourceLink> (macro estimates; context)
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Mapping examples: “Medical Coding Specialists” → Medical Records & Health Information Technicians; “Emergency Medicine Physicians” → Physicians & Surgeons; “Corporate Trainers” → Training & Development Specialists; “Basic Web Developers” → grouped category (Information Security Analysts, Web Developers & Network Architects); “QA Testers (Manual)” → Computer Occupations, All Other; “Educational Content Writers” → Writers & Authors; “Assembly Line Workers” → Assemblers & Fabricators/Team Assemblers. Percentages represent estimated probability of computerisation in the cited research, not guaranteed outcomes. 
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Last updated: Jan 2025.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobsAICantReplace;
