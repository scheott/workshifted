// src/pages/WillAITakeMyJob.jsx
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
      backupCareers: ['Electrician', 'Plumber', 'HVAC Technician']
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
      backupCareers: ['Solar Installer', 'Electrician', 'Construction Manager']
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
      backupCareers: ['HVAC Technician', 'Plumber', 'Automotive Technician']
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
      backupCareers: ['Electrician', 'Network Technician', 'Industrial Mechanic']
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
      backupCareers: ['Construction Manager', 'HVAC Technician', 'Solar Installer']
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
      backupCareers: ['Electrician', 'Plumber', 'Construction Manager']
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
      backupCareers: ['HVAC Technician', 'Solar Installer', 'Electrician']
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
      backupCareers: ['Automotive Technician', 'Plumber', 'HVAC Technician']
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
      backupCareers: ['Solar Installer', 'Electrician', 'Construction Manager']
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
            🎯 Industry-Specific Analysis
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Will AI Take My Job?
            <span className="text-blue-600"> Industry Breakdown</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Get specific automation risk analysis for your industry, timeline predictions, and career backup options based on the latest AI research.
          </p>
        </div>

        {/* Industry Selector */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Select Your Industry</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(industries).map(([key, industry]) => (
              <button
                key={key}
                onClick={() => setSelectedIndustry(key)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  selectedIndustry === key 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{industry.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getRiskColor(industry.riskLevel)}`}>
                    {industry.riskLevel}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                    <div 
                      className={`h-2 rounded-full ${
                        industry.riskColor === 'red' ? 'bg-red-500' : 
                        industry.riskColor === 'orange' ? 'bg-orange-500' : 'bg-yellow-500'
                      }`}
                      style={{width: `${industry.riskPercentage}%`}}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{industry.riskPercentage}%</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Quick Assessment CTA */}
        {!selectedIndustry && (
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-center text-white mb-12">
            <h3 className="text-2xl font-bold mb-4">Not Sure Which Industry Fits You?</h3>
            <p className="text-blue-100 mb-6">
              Take our free assessment to discover AI-resistant career options that match your skills
            </p>
            <Link
              to="/auth"
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Take Free Career Assessment
            </Link>
          </div>
        )}

        {/* Selected Industry Analysis */}
        {selectedIndustry && (
          <section className="mb-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {industries[selectedIndustry].name} Analysis
                </h2>
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className={`text-4xl font-bold mb-2 ${
                      industries[selectedIndustry].riskColor === 'red' ? 'text-red-600' : 
                      industries[selectedIndustry].riskColor === 'orange' ? 'text-orange-600' : 'text-yellow-600'
                    }`}>
                      {industries[selectedIndustry].riskPercentage}%
                    </div>
                    <div className="text-sm text-gray-600">Automation Risk</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {industries[selectedIndustry].timeframe}
                    </div>
                    <div className="text-sm text-gray-600">Expected Timeline</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Current AI Impact</h3>
                  <p className="text-gray-700 mb-4">{industries[selectedIndustry].description}</p>
                  <p className="text-gray-600 text-sm">{industries[selectedIndustry].aiImpact}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Role-Specific Risk</h3>
                  <div className="space-y-3">
                    {industries[selectedIndustry].specificRoles.map((role, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-700 text-sm">{role.role}</span>
                        <div className="flex items-center">
                          <div className="w-20 bg-gray-200 rounded-full h-1.5 mr-2">
                            <div 
                              className={`h-1.5 rounded-full ${
                                role.risk >= 70 ? 'bg-red-500' : 
                                role.risk >= 50 ? 'bg-orange-500' : 'bg-yellow-500'
                              }`}
                              style={{width: `${role.risk}%`}}
                            ></div>
                          </div>
                          <span className="text-xs font-semibold text-gray-600">{role.risk}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Likely to Survive</h3>
                <p className="text-gray-700">{industries[selectedIndustry].survivingRoles}</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Recommended Career Backup Options
                </h3>
                <div className="flex flex-wrap gap-3">
                  {industries[selectedIndustry].backupCareers.map((career, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {career}
                    </span>
                  ))}
                </div>
                <p className="text-green-700 text-sm mt-3">
                  These trades require hands-on skills and on-site problem solving that AI cannot easily replicate.
                </p>
              </div>
            </div>

            {/* CTA for selected industry */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 text-center">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Build Your Career Backup Plan
              </h3>
              <p className="text-blue-700 mb-6">
                Discover which AI-resistant trades match your {industries[selectedIndustry].name.toLowerCase()} background and skills
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

        {/* General Trends */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">General AI Impact Trends</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Most at Risk</h3>
              <ul className="space-y-2 text-red-800">
                <li>• Routine data processing and entry</li>
                <li>• Basic analysis and calculation tasks</li>
                <li>• Simple customer service interactions</li>
                <li>• Predictable administrative work</li>
                <li>• Template-based content creation</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Least at Risk</h3>
              <ul className="space-y-2 text-green-800">
                <li>• Physical installation and repair work</li>
                <li>• Complex problem-solving in unique situations</li>
                <li>• Face-to-face relationship building</li>
                <li>• Creative and strategic thinking</li>
                <li>• Manual dexterity and fine motor skills</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Action Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What You Can Do Now</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Assess Your Current Risk</h3>
                <p className="text-gray-600">Honestly evaluate how much of your current work could be automated with today's AI tools.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Explore Backup Career Options</h3>
                <p className="text-gray-600">Research trades and hands-on careers that align with your interests and transferable skills.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Learning Part-Time</h3>
                <p className="text-gray-600">Begin building trade skills through weekend courses, online training, or evening programs while keeping your current job.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Your Safety Net</h3>
                <p className="text-gray-600">Develop backup income options before you need them, creating career security and peace of mind.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Wait for Automation to Hit
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take control of your career future. Get personalized backup career recommendations based on your skills and interests.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/auth"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get Your Backup Career Plan
            </Link>
            <Link
              to="/ai-job-displacement-statistics"
              className="border border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200"
            >
              See Full Statistics
            </Link>
          </div>
          
          <p className="text-xs text-blue-100 mt-6">
            Free assessment • Personalized results • 5 minutes • No spam
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default WillAITakeMyJob;