// src/pages/RecessionProofCareers.jsx
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

const RecessionProofCareers = () => {
  const careers = [
    {
      title: "Electrician",
      salary: "$63,310",
      salaryRange: "median annual wage",
      jobOutlook: "+8% (faster than average)",
      timeframe: "2023-2033",
      description: "Install, maintain, and repair electrical power systems",
      skills: ["Electrical systems", "Safety protocols", "Problem solving", "Manual dexterity"],
      localDemand: "High in all regions",
      source: "Bureau of Labor Statistics (May 2024)"
    },
    {
      title: "Plumber",
      salary: "$61,550",
      salaryRange: "median annual wage",
      jobOutlook: "+1%", 
      timeframe: "2023-2033",
      description: "Install and repair piping systems for water, steam, and other liquids",
      skills: ["Pipe fitting", "Water systems", "Customer service", "Physical stamina"],
      localDemand: "High in all regions",
      source: "Bureau of Labor Statistics (May 2024)"
    },
    {
      title: "HVAC Technician",
      salary: "$57,300",
      salaryRange: "median annual wage", 
      jobOutlook: "+6%",
      timeframe: "2023-2033",
      description: "Install, maintain, and repair heating, ventilation, air conditioning systems",
      skills: ["HVAC systems", "Refrigeration", "Electrical basics", "Customer service"],
      localDemand: "Very high in all climates",
      source: "Bureau of Labor Statistics (May 2024)"
    }
  ];

  const economicFactors = [
    {
      factor: "Essential Services",
      description: "These jobs provide critical infrastructure that cannot be postponed during economic downturns.",
      examples: ["Emergency repairs", "Safety compliance", "Health and safety systems"]
    },
    {
      factor: "Local & Cannot Outsource", 
      description: "Physical work that must be done on-site by local workers, immune to globalization.",
      examples: ["Home repairs", "Local installation", "Emergency services"]
    },
    {
      factor: "Aging Infrastructure",
      description: "Economic downturns often coincide with deferred maintenance, creating more repair work.",
      examples: ["Older systems breaking", "Delayed replacements", "Increased maintenance needs"]
    },
    {
      factor: "Counter-Cyclical Demand",
      description: "Some services actually increase during recessions as people repair instead of replace.",
      examples: ["Car repairs vs. new cars", "Home repairs vs. moving", "Equipment maintenance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <LandingHeader />


      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-green-100 to-blue-100 text-green-800 mb-6 border border-green-200 shadow-sm">
            📈 Economic Security Analysis
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Recession-Proof Careers: 
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Essential Jobs for 2025
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover careers that remain stable during economic downturns. Based on <span className="font-semibold text-green-700">Bureau of Labor Statistics data</span> and historical recession performance analysis.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <div className="text-center bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-green-600">Essential</div>
              <div className="text-sm text-gray-600">Services needed</div>
            </div>
            <div className="text-center bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-blue-600">Local</div>
              <div className="text-sm text-gray-600">Cannot outsource</div>
            </div>
            <div className="text-center bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-purple-600">On-Site</div>
              <div className="text-sm text-gray-600">Physical presence</div>
            </div>
            <div className="text-center bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-orange-600">Stable</div>
              <div className="text-sm text-gray-600">Consistent demand</div>
            </div>
          </div>
        </div>

        {/* Why These Careers Are Recession-Proof */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Why These Careers Survive 
            <span className="text-green-600">Economic Downturns</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {economicFactors.map((factor, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-green-900 mb-4">{factor.factor}</h3>
                <p className="text-green-800 mb-6 leading-relaxed">{factor.description}</p>
                <div>
                  <h4 className="text-sm font-bold text-green-900 mb-3">Examples:</h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    {factor.examples.map((example, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Options */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Top Recession-Resistant 
            <span className="text-blue-600">Careers</span>
          </h2>
          
          <div className="grid gap-8">
            {careers.map((career, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{career.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{career.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Median Salary:</span>
                        <span className="font-bold text-green-600">{career.salary}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Job Outlook ({career.timeframe}):</span>
                        <span className={`font-bold ${
                          career.jobOutlook.includes('+') ? 'text-green-600' :
                          career.jobOutlook.includes('−') || career.jobOutlook.includes('-') ? 'text-red-600' :
                          'text-blue-600'
                        }`}>
                          {career.jobOutlook}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Local Demand:</span>
                        <span className="font-semibold text-gray-900">{career.localDemand}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Key Skills Needed</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium border border-blue-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <div className="text-xs text-gray-600 mb-1">Source</div>
                      <div className="text-sm font-medium text-gray-800">{career.source}</div>
                    </div>
                    <Link
                      to="/auth"
                      className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Explore This Career
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* COVID-19 Impact Analysis */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            COVID-19 Pandemic 
            <span className="text-green-600">Performance</span> (2020-2021)
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-blue-800 mb-8 text-lg leading-relaxed text-center">
              The COVID-19 pandemic provided a real-world test of which careers truly provide economic security during unprecedented disruption.
            </p>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-900">Essential Workers Who Kept Working</h3>
                </div>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Electricians (power grid maintenance)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Plumbers (emergency repairs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>HVAC techs (hospital/healthcare facilities)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Automotive repair (essential vehicles)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Utility workers (critical infrastructure)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Market Performance</h3>
                </div>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Home improvement spending: <span className="font-semibold">+3% to $420B</span> (Harvard JCHS)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Solar installations: <span className="font-semibold">+43% to 19.2 GW</span> (SEIA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Critical infrastructure trades maintained essential worker status</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-3">Official Essential Worker Designation</h4>
              <p className="text-blue-800 leading-relaxed">
                <SourceLink href="https://www.cisa.gov/topics/critical-infrastructure-security-and-resilience/critical-infrastructure-sectors">DHS/CISA guidance</SourceLink> listed construction and critical infrastructure trades (electricians, plumbers, HVAC) as Essential Critical Infrastructure Workers in 2020-2021, helping these jobs continue operating during lockdowns.
              </p>
            </div>
          </div>
        </section>

        {/* 2025 Economic Outlook */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            2025 Economic 
            <span className="text-green-600">Outlook</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Infrastructure Investment</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-gray-900">Bipartisan Infrastructure Law</p>
                  <p className="text-gray-700 text-sm">$1.2T package ($550B new funding) supporting long-run demand for skilled trades</p>
                  <p className="text-xs text-green-600 mt-1">
                    <SourceLink href="https://www.whitehouse.gov/bipartisan-infrastructure-law/">Source: White House</SourceLink>
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-900">Energy Incentives</p>
                  <p className="text-gray-700 text-sm">30% Residential Clean Energy Credit through 2032 (Inflation Reduction Act)</p>
                  <p className="text-xs text-blue-600 mt-1">
                    <SourceLink href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit">Source: IRS</SourceLink>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Demographic Trends</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold text-gray-900">Aging Built Environment</p>
                  <p className="text-gray-700 text-sm">Median U.S. home age: 43 years (2021) - historic high, increasing maintenance needs</p>
                  <p className="text-xs text-orange-600 mt-1">
                    <SourceLink href="https://www.jchs.harvard.edu/">Source: Harvard JCHS</SourceLink>
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-gray-900">Vehicle Fleet Aging</p>
                  <p className="text-gray-700 text-sm">Average vehicle age: 12.8 years (2025) - supporting repair demand</p>
                  <p className="text-xs text-purple-600 mt-1">
                    <SourceLink href="https://www.spglobal.com/">Source: S&P Global</SourceLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Building Your Recession-Proof Career */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            How to Build Career 
            <span className="text-blue-600">Security</span>
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg font-bold mr-6">1</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Start with Skills Assessment</h3>
                <p className="text-gray-600 leading-relaxed">Identify which recession-proof careers align with your current abilities and interests. Many office skills transfer to trade management roles.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg font-bold mr-6">2</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Learn While Employed</h3>
                <p className="text-gray-600 leading-relaxed">Take evening or weekend courses to build trade skills gradually. Many community colleges offer flexible programs for working professionals.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg font-bold mr-6">3</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Build Financial Cushion</h3>
                <p className="text-gray-600 leading-relaxed">Save 6-12 months of expenses while transitioning. This provides security during apprenticeship or entry-level periods.</p>
              </div>
            </div>
            
            <div className="flex items-start bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg font-bold mr-6">4</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Network and Apprentice</h3>
                <p className="text-gray-600 leading-relaxed">Connect with local contractors and trade unions. Many offer apprenticeship programs that provide paid training while you learn.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Building Your Economic Security Today</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't wait for the next recession to realize you need career backup options. Take our assessment to discover which recession-resistant trades match your skills and interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/auth"
                className="bg-white text-green-700 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Start Free Career Assessment
              </Link>
              <Link
                to="/will-ai-take-my-job-by-industry"
                className="border border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-green-700 transition-all duration-200"
              >
                Check AI Risk by Industry
              </Link>
            </div>
            <p className="text-xs text-green-100 mt-6">
              5 minutes • Personalized results • Start building your recession-proof career plan today
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
        <section className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sources & Methodology</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">U.S. Bureau of Labor Statistics (2024)</p>
              <p>Occupational Employment and Wage Statistics (OEWS), May 2024 - all salary data. Occupational Outlook Handbook - all job growth projections (2023-2033). <SourceLink href="https://www.bls.gov/">Official BLS Website</SourceLink></p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">Federal Reserve Economic Data (FRED)</p>
              <p>Great Recession employment data by sector (2007-2009). <SourceLink href="https://fred.stlouisfed.org/">FRED Database</SourceLink></p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">DHS/CISA Essential Worker Guidelines</p>
              <p>Critical Infrastructure Workers designation during COVID-19 pandemic. <SourceLink href="https://www.cisa.gov/topics/critical-infrastructure-security-and-resilience/critical-infrastructure-sectors">CISA Critical Infrastructure</SourceLink></p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-semibold text-gray-900 mb-1">Economic Outlook Sources</p>
              <p>Bipartisan Infrastructure Law: <SourceLink href="https://www.whitehouse.gov/bipartisan-infrastructure-law/">White House</SourceLink> | Home improvement data: <SourceLink href="https://www.jchs.harvard.edu/">Harvard JCHS</SourceLink> | Solar data: <SourceLink href="https://www.seia.org/">SEIA</SourceLink> | Vehicle age: <SourceLink href="https://www.spglobal.com/">S&P Global</SourceLink></p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Disclaimer:</span> All statistics are from official government and industry sources as of 2024-2025. Job outlooks represent BLS projections and may vary based on local economic conditions. This information is for educational purposes only and not career, financial, or investment advice. Individual results may vary.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default RecessionProofCareers;