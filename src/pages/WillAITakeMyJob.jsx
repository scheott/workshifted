// src/pages/WillAITakeMyJob.jsx
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

const WillAITakeMyJob = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  
  const industries = {
    'accounting': {
      name: 'Accounting & Bookkeeping',
      riskLevel: 'High',
      riskPercentage: 35, // Goldman Sachs: Business & Financial Operations
      riskColor: 'orange',
      timeframe: 'Gradual adoption by 2030',
      description: 'Business & Financial Operations faces significant AI task exposure according to Goldman Sachs research.',
      specificRoles: [
        { role: 'Bookkeeping, Accounting & Auditing Clerks', risk: 98, source: 'Frey & Osborne (2013)' },
        { role: 'Tax Preparers', risk: 93, source: 'Frey & Osborne (2013)' },
        { role: 'Accountants & Auditors', risk: 94, source: 'Frey & Osborne (2013)' },
        { role: 'Financial Analysts', risk: 23, source: 'Frey & Osborne (2013)' }
      ],
      aiImpact: 'Goldman Sachs estimates 35% of tasks in Business & Financial Operations could be exposed to AI automation.',
      survivingRoles: 'Strategic financial planning, complex advisory work, client relationship management, and high-level analysis requiring business context.',
      backupCareers: ['Electrician', 'Plumber', 'HVAC Technician'],
      sources: [
        'Goldman Sachs Global Investment Research (2023): Business & Financial Operations - 35% task exposure',
        'Frey & Osborne (2013): Occupation-level probability of computerisation'
      ]
    },
    'marketing': {
      name: 'Marketing & Advertising',
      riskLevel: 'Medium',
      riskPercentage: 26, // Goldman Sachs: Arts, Design, Entertainment, Sports & Media
      riskColor: 'yellow',
      timeframe: 'Gradual adoption by 2030',
      description: 'Arts, Design, Entertainment, Sports & Media occupations show moderate AI task exposure.',
      specificRoles: [
        { role: 'Market Research Analysts & Marketing Specialists', risk: 61, source: 'Frey & Osborne (2013)' },
        { role: 'Advertising Sales Agents', risk: 54, source: 'Frey & Osborne (2013)' },
        { role: 'Public Relations Specialists', risk: 18, source: 'Frey & Osborne (2013)' },
        { role: 'Art Directors', risk: 2, source: 'Frey & Osborne (2013)' }
      ],
      aiImpact: 'Goldman Sachs research indicates ~26% of tasks in creative and media fields could be automated, though creative strategy remains largely human-driven.',
      survivingRoles: 'Creative strategy, brand storytelling, complex campaign planning, and relationship-driven marketing requiring human insight.',
      backupCareers: ['Solar Installer', 'Electrician', 'Construction Manager'],
      sources: [
        'Goldman Sachs Global Investment Research (2023): Arts, Design, Entertainment, Sports & Media - 26% task exposure',
        'Frey & Osborne (2013): Marketing and creative role probabilities'
      ]
    },
    'customer-service': {
      name: 'Customer Service',
      riskLevel: 'High',
      riskPercentage: 46, // Goldman Sachs: Office & Administrative Support
      riskColor: 'red',
      timeframe: 'Already happening - accelerating through 2030',
      description: 'Office & Administrative Support shows the highest AI task exposure in Goldman Sachs analysis.',
      specificRoles: [
        { role: 'Customer Service Representatives', risk: 55, source: 'Frey & Osborne (2013)' },
        { role: 'Information Clerks (General)', risk: 84, source: 'Frey & Osborne (2013)' },
        { role: 'Receptionists & Information Clerks', risk: 96, source: 'Frey & Osborne (2013)' },
        { role: 'Customer Service Managers', risk: 19, source: 'Frey & Osborne (2013)' }
      ],
      aiImpact: 'Goldman Sachs identifies Office & Administrative Support as having 46% of tasks exposed to AI automation - the highest of any occupational group.',
      survivingRoles: 'Complex problem resolution, relationship building, escalation handling, emotional support, and high-touch customer management.',
      backupCareers: ['HVAC Technician', 'Plumber', 'Automotive Technician'],
      sources: [
        'Goldman Sachs Global Investment Research (2023): Office & Administrative Support - 46% task exposure (highest category)',
        'Frey & Osborne (2013): Customer service role probabilities'
      ]
    },
    'data-analysis': {
      name: 'Data Analysis',
      riskLevel: 'High',
      riskPercentage: 35, // Goldman Sachs: Business & Financial Operations
      riskColor: 'orange',
      timeframe: 'Gradual adoption by 2030',
      description: 'Data analysis falls under Business & Financial Operations, showing significant automation potential.',
      specificRoles: [
        { role: 'Data Entry Keyers', risk: 99, source: 'Frey & Osborne (2013)' },
        { role: 'Statistical Assistants', risk: 88, source: 'Frey & Osborne (2013)' },
        { role: 'Market Research Analysts', risk: 61, source: 'Frey & Osborne (2013)' },
        { role: 'Operations Research Analysts', risk: 43, source: 'Frey & Osborne (2013)' }
      ],
      aiImpact: 'Goldman Sachs estimates 35% of Business & Financial Operations tasks are exposed to AI. Data entry and routine analysis are particularly vulnerable.',
      survivingRoles: 'Strategic data interpretation, complex model development, stakeholder communication, and business context application requiring human judgment.',
      backupCareers: ['Electrician', 'Network Technician', 'Industrial Mechanic'],
      sources: [
        'Goldman Sachs Global Investment Research (2023): Business & Financial Operations category',
        'Frey & Osborne (2013): Data and statistical role probabilities'
      ]
    },
    'human-resources': {
      name: 'Human Resources',
      riskLevel: 'High',
      riskPercentage: 35, // Goldman Sachs: Business & Financial Operations
      riskColor: 'orange',
      timeframe: 'Gradual adoption by 2030',
      description: 'HR functions fall under Business & Financial Operations with significant AI task exposure potential.',
      specificRoles: [
        { role: 'Human Resources Assistants (except Payroll)', risk: 90, source: 'Frey & Osborne (2013)' },
        { role: 'Compensation, Benefits & Job Analysis Specialists', risk: 96, source: 'Frey & Osborne (2013)' },
        { role: 'Training & Development Specialists', risk: 13, source: 'Frey & Osborne (2013)' },
        { role: 'Human Resources Managers', risk: 1, source: 'Frey & Osborne (2013)' }
      ],
      aiImpact: 'Goldman Sachs data shows 35% task exposure in Business & Financial Operations. Administrative HR tasks face higher automation risk than strategic roles.',
      survivingRoles: 'Employee relations, complex negotiations, organizational development, strategic HR planning, and leadership coaching.',
      backupCareers: ['Construction Manager', 'HVAC Technician', 'Solar Installer'],
      sources: [
        'Goldman Sachs Global Investment Research (2023): Business & Financial Operations - 35% task exposure',
        'Frey & Osborne (2013): HR role-specific probabilities'
      ]
    },
    'legal': {
      name: 'Legal Services',
      riskLevel: 'High',
      riskPercentage: 44, // Goldman Sachs: Legal occupations
      riskColor: 'red',
      timeframe: 'Gradual adoption by 2030',
      description: 'Legal occupations show 44% AI task exposure according to Goldman Sachs research - second highest among professional categories.',
      specificRoles: [
        { role: 'Paralegals & Legal Assistants', risk: 94, source: 'Frey & Osborne (2013)' },
        { role: 'Legal Secretaries', risk: 97, source: 'Frey & Osborne (2013)' },
        { role: 'Court Reporters', risk: 98, source: 'Frey & Osborne (2013)' },
        { role: 'Lawyers', risk: 4, source: 'Frey & Osborne (2013)' }
      ],
      aiImpact: 'Goldman Sachs identifies Legal as having 44% of tasks exposed to AI automation - particularly document review, research, and administrative work.',
      survivingRoles: 'Complex litigation, client counseling, courtroom advocacy, strategic legal planning, and relationship-based legal work.',
      backupCareers: ['Electrician', 'Plumber', 'Construction Manager'],
      sources: [
        'Goldman Sachs Global Investment Research (2023): Legal occupations - 44% task exposure',
        'Frey & Osborne (2013): Legal profession probabilities'
      ]
    },
    'banking': {
      name: 'Banking & Finance',
      riskLevel: 'High',
      riskPercentage: 35, // Goldman Sachs: Business & Financial Operations
      riskColor: 'orange',
      timeframe: 'Gradual adoption by 2030',
      description: 'Banking roles fall under Business & Financial Operations with significant automation potential.',
      specificRoles: [
        { role: 'Tellers', risk: 98, source: 'Frey & Osborne (2013)' },
        { role: 'Loan Officers', risk: 64, source: 'Frey & Osborne (2013)' },
        { role: 'Insurance Underwriters', risk: 99, source: 'Frey & Osborne (2013)' },
        { role: 'Personal Financial Advisors', risk: 58, source: 'Frey & Osborne (2013)' }
      ],
      aiImpact: 'Goldman Sachs estimates 35% of Business & Financial Operations tasks are automatable. Routine banking transactions and processing face highest risk.',
      survivingRoles: 'Relationship banking, complex financial planning, high-touch advisory services, and strategic financial decision-making.',
      backupCareers: ['HVAC Technician', 'Solar Installer', 'Electrician'],
      sources: [
        'Goldman Sachs Global Investment Research (2023): Business & Financial Operations category',
        'Frey & Osborne (2013): Banking and finance role probabilities'
      ]
    },
    'insurance': {
      name: 'Insurance',
      riskLevel: 'High',
      riskPercentage: 35, // Goldman Sachs: Business & Financial Operations
      riskColor: 'orange',
      timeframe: 'Gradual adoption by 2030',
      description: 'Insurance operations fall under Business & Financial Operations with significant AI automation potential.',
      specificRoles: [
        { role: 'Insurance Claims & Policy Processing Clerks', risk: 98, source: 'Frey & Osborne (2013)' },
        { role: 'Insurance Underwriters', risk: 99, source: 'Frey & Osborne (2013)' },
        { role: 'Insurance Sales Agents', risk: 92, source: 'Frey & Osborne (2013)' },
        { role: 'Insurance Appraisers (Auto Damage)', risk: 43, source: 'Frey & Osborne (2013)' }
      ],
      aiImpact: 'Goldman Sachs data indicates 35% task exposure in Business & Financial Operations. Underwriting and claims processing show particularly high automation potential.',
      survivingRoles: 'Complex claims investigation, relationship building, strategic risk management, and specialized insurance advisory work.',
      backupCareers: ['Automotive Technician', 'Plumber', 'HVAC Technician'],
      sources: [
        'Goldman Sachs Global Investment Research (2023): Business & Financial Operations - 35% task exposure',
        'Frey & Osborne (2013): Insurance industry probabilities'
      ]
    },
    'media': {
      name: 'Media & Publishing',
      riskLevel: 'Medium',
      riskPercentage: 26, // Goldman Sachs: Arts, Design, Entertainment, Sports & Media
      riskColor: 'yellow',
      timeframe: 'Gradual adoption by 2030',
      description: 'Media and publishing fall under Arts, Design, Entertainment, Sports & Media with moderate AI task exposure.',
      specificRoles: [
        { role: 'Technical Writers', risk: 89, source: 'Frey & Osborne (2013)' },
        { role: 'Reporters & Correspondents', risk: 11, source: 'Frey & Osborne (2013)' },
        { role: 'Editors', risk: 6, source: 'Frey & Osborne (2013)' },
        { role: 'Writers & Authors', risk: 4, source: 'Frey & Osborne (2013)' }
      ],
      aiImpact: 'Goldman Sachs estimates ~26% of tasks in creative and media fields could be automated. Technical and template-based writing face higher risk than creative origination.',
      survivingRoles: 'Investigative journalism, creative storytelling, strategic content planning, and original creative work requiring human insight.',
      backupCareers: ['Solar Installer', 'Electrician', 'Construction Manager'],
      sources: [
        'Goldman Sachs Global Investment Research (2023): Arts, Design, Entertainment, Sports & Media - 26% task exposure',
        'Frey & Osborne (2013): Media and publishing role probabilities'
      ]
    }
  };

  const getRiskColor = (level) => {
    switch(level) {
      case 'Very High': return 'text-red-700 bg-red-100 border-red-200';
      case 'High': return 'text-red-600 bg-red-100 border-red-200';
      case 'Medium-High': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <LandingHeader />


      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 mb-6 border border-blue-200 shadow-sm">
            🎯 Industry-Specific Analysis
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Will AI Take My Job?
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Industry Breakdown
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get specific automation risk analysis for your industry based on <span className="font-semibold text-blue-700">Goldman Sachs</span>, <span className="font-semibold text-blue-700">McKinsey</span>, and <span className="font-semibold text-blue-700">Oxford research</span>. All statistics cited and verified.
          </p>
        </div>

        {/* Industry Selector */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Select Your Industry</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(industries).map(([key, industry]) => (
              <button
                key={key}
                onClick={() => setSelectedIndustry(key)}
                className={`p-6 rounded-2xl border-2 text-left transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 ${
                  selectedIndustry === key 
                    ? 'border-blue-500 bg-blue-50 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{industry.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getRiskColor(industry.riskLevel)}`}>
                    {industry.riskLevel}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-3 mr-4">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        industry.riskColor === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' : 
                        industry.riskColor === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 
                        'bg-gradient-to-r from-yellow-500 to-yellow-600'
                      }`}
                      style={{width: `${industry.riskPercentage}%`}}
                    ></div>
                  </div>
                  <span className="text-lg font-bold text-gray-700">{industry.riskPercentage}%</span>
                </div>
                <p className="text-sm text-gray-600">Task exposure estimate</p>
              </button>
            ))}
          </div>
        </section>

        {/* Quick Assessment CTA */}
        {!selectedIndustry && (
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white mb-16 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Not Sure Which Industry Fits You?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
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
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {industries[selectedIndustry].name} Analysis
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
                  <div className="text-center">
                    <div className={`text-5xl font-bold mb-2 ${
                      industries[selectedIndustry].riskColor === 'red' ? 'text-red-600' : 
                      industries[selectedIndustry].riskColor === 'orange' ? 'text-orange-600' : 'text-yellow-600'
                    }`}>
                      {industries[selectedIndustry].riskPercentage}%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Task Exposure Risk</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {industries[selectedIndustry].timeframe}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Expected Timeline</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Current AI Impact</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{industries[selectedIndustry].description}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{industries[selectedIndustry].aiImpact}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Role-Specific Risk</h3>
                  <div className="space-y-4">
                    {industries[selectedIndustry].specificRoles.map((role, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-900 font-medium text-sm">{role.role}</span>
                          <span className="text-sm font-bold text-gray-700">{role.risk}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div 
                            className={`h-2 rounded-full ${
                              role.risk >= 70 ? 'bg-gradient-to-r from-red-500 to-red-600' : 
                              role.risk >= 50 ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 
                              'bg-gradient-to-r from-yellow-500 to-yellow-600'
                            }`}
                            style={{width: `${role.risk}%`}}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500">{role.source}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-blue-900 mb-3">What's Likely to Survive</h3>
                <p className="text-blue-800 leading-relaxed">{industries[selectedIndustry].survivingRoles}</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-green-900 mb-4">
                  Recommended Career Backup Options
                </h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  {industries[selectedIndustry].backupCareers.map((career, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
                      {career}
                    </span>
                  ))}
                </div>
                <p className="text-green-700 text-sm leading-relaxed">
                  These trades require hands-on skills and on-site problem solving that AI cannot easily replicate.
                </p>
              </div>

              {/* Sources for this industry */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Sources</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  {industries[selectedIndustry].sources.map((source, index) => (
                    <li key={index}>• {source}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA for selected industry */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 rounded-2xl p-8 mt-8 text-center shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Build Your Career Backup Plan
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                Discover which AI-resistant trades match your {industries[selectedIndustry].name.toLowerCase()} background and skills
              </p>
              <Link
                to="/auth"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Free Assessment
                <span className="ml-2">→</span>
              </Link>
            </div>
          </section>
        )}

        {/* General Trends */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            General AI Impact 
            <span className="text-blue-600">Trends</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white text-xl">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold text-red-900">Most at Risk</h3>
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
                <h3 className="text-2xl font-bold text-green-900">Most Protected</h3>
              </div>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Complex problem-solving requiring context</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Physical tasks in unpredictable environments</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>High-touch relationship building</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Creative and strategic thinking</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>On-site troubleshooting and repair</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Timeline Context */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding the 
              <span className="text-blue-600">Timeline</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 mb-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">What McKinsey Says</h3>
                <p className="text-gray-700 leading-relaxed">
                  <SourceLink href="https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai">McKinsey Global Institute (2023)</SourceLink> estimates that up to ~30% of US work hours could be automated by 2030, accelerated by generative AI capabilities.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 mb-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Important Context</h3>
                <p className="text-gray-700 leading-relaxed">
                  These percentages represent <span className="font-semibold">task exposure</span> and <span className="font-semibold">technical potential</span> - not guaranteed job losses. Actual adoption depends on economics, regulation, worker retraining, and consumer acceptance.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">The Smart Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Rather than waiting to see what happens, build skills in AI-resistant fields while maintaining your current career. This creates optionality without disruption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Future-Proof Your Career?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't wait for automation to impact your job. Take our assessment to discover hands-on career options that match your background and provide AI-resistant income security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/auth"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Start Free Career Assessment
              </Link>
              <Link
                to="/ai-job-displacement-statistics"
                className="border border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200"
              >
                See Complete AI Statistics
              </Link>
            </div>
            <p className="text-xs text-blue-100 mt-6">
              5 minutes • Personalized results • All statistics verified and cited
            </p>
          </div>
        </section>

        {/* Read More Section */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Your Research</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                to="/ai-job-displacement-statistics"
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">📊 AI Job Displacement Statistics</h3>
                <p className="text-gray-600 text-sm">Detailed data on automation risk by industry and timeline</p>
              </Link>
              
              <Link 
                to="/will-ai-take-my-job-by-industry"
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">🎯 Will AI Take My Job?</h3>
                <p className="text-gray-600 text-sm">Industry-specific analysis of automation risk and timeline</p>
              </Link>
              
              <Link 
                to="/ai-vs-human-jobs-complete-guide"
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">🤖 AI vs Human Jobs Guide</h3>
                <p className="text-gray-600 text-sm">Complete automation analysis across job categories</p>
              </Link>
            </div>
          </div>
        </section>
        {/* Sources & Methodology */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sources & Methodology</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">Goldman Sachs Global Investment Research (2023)</p>
              <p>Task exposure percentages by occupational group. <SourceLink href="https://www.ansa.it/documents/1680080409454_ert.pdf">The Potentially Large Effects of Artificial Intelligence on Economic Growth (PDF)</SourceLink></p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">McKinsey Global Institute (2017, 2023)</p>
              <p>Sector-level technical automation potential and 2030 projections. <SourceLink href="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/digital%20disruption/harnessing%20automation%20for%20a%20future%20that%20works/mgi-a-future-that-works-full-report-updated.pdf">A Future That Works (PDF)</SourceLink> | <SourceLink href="https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai">Generative AI Impact</SourceLink></p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">Frey & Osborne (Oxford Martin School, 2013)</p>
              <p>Occupation-level probability of computerisation. <SourceLink href="https://www.oxfordmartin.ox.ac.uk/publications/the-future-of-employment">The Future of Employment</SourceLink> | <SourceLink href="https://oms-www.files.svdcdn.com/production/downloads/academic/The_Future_of_Employment.pdf">Full Paper (PDF)</SourceLink></p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Methodology:</span> Industry percentages mapped from Goldman Sachs occupational group data. Role-specific percentages from Frey & Osborne computerisation probabilities. McKinsey data used for sector automation potential. All figures represent task exposure or technical potential, not guaranteed job displacement. Last updated: January 2025.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default WillAITakeMyJob;