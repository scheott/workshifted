// src/pages/AIJobDisplacementStats.jsx
import React from 'react';
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

const AIJobDisplacementStats = () => {
  return (
    <div className="min-h-screen bg-white">
        <LandingHeader />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
            🚨 2025 AI Impact Report
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Job Displacement Statistics: 
            <span className="text-red-600"> 47% of Jobs</span> at Risk by 2030
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Comprehensive analysis of which jobs artificial intelligence is likely to automate, based on recent studies from Oxford Economics, McKinsey Global Institute, and Goldman Sachs Research.
          </p>
          
          {/* Quick CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              ⚡ Quick Career Security Check
            </h3>
            <p className="text-blue-700 mb-4">
              Find AI-resistant careers that match your skills in 5 minutes
            </p>
            <Link
              to="/auth"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Take Free Assessment →
            </Link>
          </div>
        </div>

        {/* Key Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key AI Displacement Statistics</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">47%</div>
              <div className="text-sm text-red-700">of US jobs at high automation risk by 2030</div>
              <div className="text-xs text-red-600 mt-1">Source: Oxford Economics</div>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">300M</div>
              <div className="text-sm text-orange-700">jobs could be automated globally</div>
              <div className="text-xs text-orange-600 mt-1">Source: Goldman Sachs</div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">25%</div>
              <div className="text-sm text-yellow-700">of work activities automatable today</div>
              <div className="text-xs text-yellow-600 mt-1">Source: McKinsey</div>
            </div>
          </div>
        </section>

        {/* Jobs at Highest Risk */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Jobs at Highest Automation Risk</h2>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Data Entry Clerks</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                  <span className="text-red-600 font-semibold">92%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Bookkeeping Clerks</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '86%'}}></div>
                  </div>
                  <span className="text-red-600 font-semibold">86%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Customer Service Reps</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '79%'}}></div>
                  </div>
                  <span className="text-red-600 font-semibold">79%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Financial Analysts</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '73%'}}></div>
                  </div>
                  <span className="text-orange-600 font-semibold">73%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Administrative Assistants</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '68%'}}></div>
                  </div>
                  <span className="text-orange-600 font-semibold">68%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-3">
                <span className="font-medium text-gray-900">Marketing Specialists</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '61%'}}></div>
                  </div>
                  <span className="text-yellow-600 font-semibold">61%</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            Automation probability percentages based on Oxford Economics and Frey-Osborne methodology analysis.
          </p>
        </section>

        {/* Timeline of AI Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Timeline of AI Job Impact</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24 text-center">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">2024</div>
              </div>
              <div className="ml-6">
                <h3 className="font-semibold text-gray-900 mb-2">Current Impact</h3>
                <p className="text-gray-600">AI tools like ChatGPT, automation software, and machine learning already affecting content creation, data analysis, and customer service roles.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24 text-center">
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">2025-27</div>
              </div>
              <div className="ml-6">
                <h3 className="font-semibold text-gray-900 mb-2">Acceleration Phase</h3>
                <p className="text-gray-600">Widespread adoption of AI in accounting, legal research, basic programming, and routine analysis. 15-25% of knowledge work tasks automated.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24 text-center">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">2028-30</div>
              </div>
              <div className="ml-6">
                <h3 className="font-semibold text-gray-900 mb-2">Major Displacement</h3>
                <p className="text-gray-600">Advanced AI capabilities lead to significant job displacement in administrative, analytical, and routine cognitive work. Peak impact period.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Most Affected */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Industries Most Affected by AI</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-4">Highest Risk Industries</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700"><strong>Banking & Finance:</strong> 54% of tasks automatable</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700"><strong>Insurance:</strong> 49% of tasks automatable</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700"><strong>Accounting:</strong> 46% of tasks automatable</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span className="text-gray-700"><strong>Legal Services:</strong> 44% of tasks automatable</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span className="text-gray-700"><strong>Media & Tech:</strong> 42% of tasks automatable</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-4">Lower Risk Industries</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700"><strong>Construction:</strong> 12% of tasks automatable</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700"><strong>Installation & Repair:</strong> 15% of tasks automatable</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700"><strong>Healthcare (Hands-on):</strong> 18% of tasks automatable</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  <span className="text-gray-700"><strong>Education:</strong> 22% of tasks automatable</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  <span className="text-gray-700"><strong>Food Service:</strong> 25% of tasks automatable</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-6">
            Data compiled from McKinsey Global Institute, Goldman Sachs Research, and PwC economic analysis.
          </p>
        </section>

        {/* What This Means for Workers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What This Means for Workers</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">The Reality</h3>
                <ul className="space-y-3 text-blue-800">
                  <li>• AI will likely complement rather than completely replace most workers initially</li>
                  <li>• Job displacement will be gradual but accelerating</li>
                  <li>• Workers in routine cognitive tasks face highest risk</li>
                  <li>• Geographic variations in impact based on local economy</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Preparation Strategies</h3>
                <ul className="space-y-3 text-blue-800">
                  <li>• Develop skills that require human judgment and dexterity</li>
                  <li>• Build backup career options in less automatable fields</li>
                  <li>• Focus on local, hands-on, and relationship-based work</li>
                  <li>• Start learning new skills while still employed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Career Backup Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">AI-Resistant Career Backup Options</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">Electrician</h3>
              <p className="text-green-700 text-sm mb-3">Automation Risk: <strong>8%</strong></p>
              <p className="text-green-800 text-sm">Requires on-site problem solving, manual dexterity, and safety judgment that AI cannot replicate.</p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">Plumber</h3>
              <p className="text-green-700 text-sm mb-3">Automation Risk: <strong>12%</strong></p>
              <p className="text-green-800 text-sm">Physical installation and repair work requiring human assessment of unique situations.</p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">HVAC Tech</h3>
              <p className="text-green-700 text-sm mb-3">Automation Risk: <strong>9%</strong></p>
              <p className="text-green-800 text-sm">Complex system diagnostics and repair requiring hands-on expertise and customer interaction.</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build Your Career Backup Plan Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait for automation to impact your job. Take our free assessment to discover AI-resistant career options that match your skills and interests.
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
            Free assessment • 5 minutes • No spam • Get personalized results
          </p>
        </section>

        {/* Read More Section */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Your Research</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                to="/recession-proof-careers-2025"
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">🛡️ Recession-Proof Careers</h3>
                <p className="text-gray-600 text-sm">Jobs that survive economic downturns and disruption</p>
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
        <section className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sources & Methodology</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">McKinsey Global Institute (2017, 2023)</p>
              <p>Sector-level technical automation potential and 2030 projections. <SourceLink href="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/digital%20disruption/harnessing%20automation%20for%20a%20future%20that%20works/mgi-a-future-that-works-full-report-updated.pdf">A Future That Works (PDF)</SourceLink> | <SourceLink href="https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai">Generative AI Impact</SourceLink></p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">Goldman Sachs Global Investment Research (2023)</p>
              <p>Task exposure percentages by occupational group (~300M jobs exposed globally). <SourceLink href="https://www.ansa.it/documents/1680080409454_ert.pdf">The Potentially Large Effects of Artificial Intelligence on Economic Growth (PDF)</SourceLink></p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">Frey & Osborne (Oxford Martin School, 2013)</p>
              <p>Occupation-level probability of computerisation (47% of US employment at risk). <SourceLink href="https://www.oxfordmartin.ox.ac.uk/publications/the-future-of-employment">The Future of Employment</SourceLink> | <SourceLink href="https://oms-www.files.svdcdn.com/production/downloads/academic/The_Future_of_Employment.pdf">Full Paper (PDF)</SourceLink></p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">PwC Economic Analysis (2024)</p>
              <p>AI economic impact analysis and job displacement modeling. <SourceLink href="https://www.pwc.com/gx/en/issues/data-and-analytics/publications/artificial-intelligence-study.html">AI and Related Technologies Report</SourceLink></p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">Oxford Economics (2024)</p>
              <p>Updated analysis on job computerisation susceptibility. <SourceLink href="https://www.oxfordeconomics.com/resource/how-susceptible-are-jobs-to-computerisation/">How Susceptible are Jobs to Computerisation</SourceLink></p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Methodology:</span> Statistics compiled from peer-reviewed academic research and institutional economic analysis. Automation risk percentages represent technical feasibility estimates, not guaranteed job displacement timelines. Geographic and economic factors may affect actual implementation. All figures represent task exposure or technical potential based on current AI capabilities. Last updated: January 2025.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AIJobDisplacementStats;