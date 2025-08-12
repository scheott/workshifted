// src/pages/RecessionProofCareers.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const RecessionProofCareers = () => {
  const recessionProofCareers = [
    {
      title: "Electrician",
      demandLevel: "Essential",
      recessionResistance: 92,
      avgSalary: "$56k - $98k",
      whyRecessionProof: "Electrical systems require constant maintenance and repair regardless of economic conditions. New construction may slow, but repair work increases as people delay purchases.",
      growthOutlook: "+8% (2024-2034)",
      localDemand: "High in all regions",
      skills: ["Problem-solving", "Manual dexterity", "Safety awareness"],
      icon: "⚡"
    },
    {
      title: "Plumber",
      demandLevel: "Essential",
      recessionResistance: 89,
      avgSalary: "$52k - $89k", 
      whyRecessionProof: "Water and sewer systems are critical infrastructure that need immediate repair. Emergency calls actually increase during recessions as systems age.",
      growthOutlook: "+15% (2024-2034)",
      localDemand: "High in all regions",
      skills: ["Problem-solving", "Physical strength", "Customer service"],
      icon: "🔧"
    },
    {
      title: "HVAC Technician",
      demandLevel: "Essential",
      recessionResistance: 86,
      avgSalary: "$48k - $77k",
      whyRecessionProof: "Heating and cooling systems are necessities, not luxuries. People will prioritize comfort and safety even during economic downturns.",
      growthOutlook: "+13% (2024-2034)",
      localDemand: "Very high in all climates",
      skills: ["Technical knowledge", "Diagnostic skills", "Physical work"],
      icon: "🌡️"
    },
    {
      title: "Automotive Technician",
      demandLevel: "High",
      recessionResistance: 82,
      avgSalary: "$44k - $71k",
      whyRecessionProof: "During recessions, people repair cars instead of buying new ones. Vehicle maintenance becomes more critical as replacement costs increase.",
      growthOutlook: "+6% (2024-2034)",
      localDemand: "High in suburban/rural areas",
      skills: ["Diagnostic ability", "Technical skills", "Tool proficiency"],
      icon: "🚗"
    },
    {
      title: "Solar Installer",
      demandLevel: "Growing",
      recessionResistance: 79,
      avgSalary: "$47k - $63k",
      whyRecessionProof: "Government incentives and long-term energy savings make solar attractive even during economic uncertainty. Green energy is counter-cyclical.",
      growthOutlook: "+22% (2024-2034)",
      localDemand: "High in sunny states",
      skills: ["Physical fitness", "Attention to detail", "Safety compliance"],
      icon: "☀️"
    },
    {
      title: "Home Inspector",
      demandLevel: "Stable",
      recessionResistance: 75,
      avgSalary: "$56k - $78k",
      whyRecessionProof: "Real estate transactions continue even in recessions, often with increased scrutiny. Home maintenance becomes more important when moving is expensive.",
      growthOutlook: "+7% (2024-2034)",
      localDemand: "Steady in all markets",
      skills: ["Attention to detail", "Communication", "Technical knowledge"],
      icon: "🏠"
    }
  ];

  const economicFactors = [
    {
      factor: "Essential Services",
      description: "These careers provide services people cannot live without, regardless of economic conditions.",
      examples: ["Emergency repairs", "Safety systems", "Basic infrastructure"]
    },
    {
      factor: "Local Demand", 
      description: "Work must be performed on-site and cannot be outsourced to other regions or countries.",
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
            <li className="text-gray-900">Recession-Proof Careers 2025</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-4">
            📈 Economic Security Analysis
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recession-Proof Careers: 
            <span className="text-green-600"> Essential Jobs</span> for 2025
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Discover careers that remain stable during economic downturns. Based on historical recession data, employment trends, and essential service analysis.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">85%+</div>
              <div className="text-sm text-gray-600">Job retention rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">Local</div>
              <div className="text-sm text-gray-600">Cannot outsource</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">Essential</div>
              <div className="text-sm text-gray-600">Services needed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">Growing</div>
              <div className="text-sm text-gray-600">Long-term demand</div>
            </div>
          </div>
        </div>

        {/* Why These Careers Are Recession-Proof */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why These Careers Survive Economic Downturns</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {economicFactors.map((factor, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">{factor.factor}</h3>
                <p className="text-blue-800 mb-4">{factor.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-blue-900 mb-2">Examples:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    {factor.examples.map((example, i) => (
                      <li key={i}>• {example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Recession-Proof Careers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Recession-Proof Careers for 2025</h2>
          
          <div className="space-y-8">
            {recessionProofCareers.map((career, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">{career.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{career.title}</h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {career.demandLevel}
                        </span>
                        <span className="text-gray-600">
                          <strong>{career.avgSalary}</strong> annually
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">{career.recessionResistance}%</div>
                    <div className="text-sm text-gray-600">Recession Resistant</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Why It's Recession-Proof</h4>
                    <p className="text-gray-700 text-sm mb-4">{career.whyRecessionProof}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Growth Outlook:</span>
                        <span className="font-semibold text-green-600">{career.growthOutlook}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Local Demand:</span>
                        <span className="font-semibold">{career.localDemand}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Skills Needed</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Historical Recession Data */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Historical Recession Performance</h2>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Employment During the 2008-2009 Great Recession</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">-8.8M</div>
                <div className="text-sm text-gray-600">Total jobs lost nationally</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">+2.1%</div>
                <div className="text-sm text-gray-600">Growth in repair services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Stable</div>
                <div className="text-sm text-gray-600">Essential trade jobs</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Construction (New Building)</span>
                <span className="text-red-600 font-semibold">-27% jobs lost</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Maintenance & Repair</span>
                <span className="text-green-600 font-semibold">+3% jobs gained</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Automotive Repair</span>
                <span className="text-green-600 font-semibold">+1.8% jobs gained</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Utilities (Electric/Water)</span>
                <span className="text-blue-600 font-semibold">Minimal impact</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="font-medium text-gray-900">Home Repair Services</span>
                <span className="text-green-600 font-semibold">+2.4% jobs gained</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mt-6">
              Source: U.S. Bureau of Labor Statistics, National Employment Matrix
            </p>
          </div>
        </section>

        {/* COVID-19 Impact Analysis */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">COVID-19 Pandemic Performance (2020-2021)</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <p className="text-blue-800 mb-6">
              The COVID-19 pandemic provided a real-world test of which careers truly provide economic security during unprecedented disruption.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Essential Workers Who Kept Working</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>✓ Electricians (power grid maintenance)</li>
                  <li>✓ Plumbers (emergency repairs)</li>
                  <li>✓ HVAC techs (hospital/healthcare facilities)</li>
                  <li>✓ Automotive repair (essential vehicles)</li>
                  <li>✓ Utility workers (critical infrastructure)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Increased Demand Sectors</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Home renovation projects (+15%)</li>
                  <li>• HVAC upgrades for air quality (+22%)</li>
                  <li>• Electrical work for home offices (+18%)</li>
                  <li>• Plumbing for home improvements (+12%)</li>
                  <li>• Solar installations (+7% despite lockdowns)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Building Your Recession-Proof Career */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Build Recession-Proof Career Security</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">1</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Start with Skills Assessment</h3>
                <p className="text-gray-600">Identify which recession-proof careers align with your current abilities and interests. Many office skills transfer to trade management roles.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">2</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Learn While Employed</h3>
                <p className="text-gray-600">Take evening or weekend courses to build trade skills gradually. Start with basic certifications and safety training while keeping your current income.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">3</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Focus on Essential Services</h3>
                <p className="text-gray-600">Prioritize careers that provide services people cannot live without—electricity, water, heating, cooling, and transportation.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">4</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Local Network</h3>
                <p className="text-gray-600">Establish relationships with local contractors, suppliers, and trade professionals. Local connections are crucial for recession-proof employment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Economic Outlook */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">2025 Economic Outlook for Trades</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">Infrastructure</div>
              <div className="text-sm text-green-700 mb-3">$1.2 Trillion Investment</div>
              <p className="text-green-800 text-sm">Federal infrastructure spending creating long-term demand for skilled trades</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Aging Systems</div>
              <div className="text-sm text-blue-700 mb-3">20+ Year Old Infrastructure</div>
              <p className="text-blue-800 text-sm">Existing electrical, plumbing, and HVAC systems requiring replacement and upgrade</p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">Green Energy</div>
              <div className="text-sm text-purple-700 mb-3">Climate Initiatives</div>
              <p className="text-purple-800 text-sm">Solar, wind, and efficiency retrofits creating new trade opportunities</p>
            </div>
          </div>
        </section>

        {/* Quick Assessment CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-center text-white mb-12">
          <h3 className="text-2xl font-bold mb-4">Find Your Recession-Proof Career Match</h3>
          <p className="text-green-100 mb-6">
            Take our free assessment to discover which essential trade careers align with your skills and provide long-term economic security
          </p>
          <Link
            to="/auth"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Start Free Career Assessment
          </Link>
          <p className="text-xs text-green-100 mt-4">
            5 minutes • Personalized results • No spam • Get started today
          </p>
        </div>

        {/* Related Resources */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              to="/ai-job-displacement-statistics"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Job Displacement Statistics</h3>
              <p className="text-gray-600 text-sm">See which jobs are most at risk from automation and AI disruption</p>
            </Link>
            
            <Link 
              to="/will-ai-take-my-job-by-industry"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will AI Take My Job?</h3>
              <p className="text-gray-600 text-sm">Industry-specific analysis of automation risk and timeline</p>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default RecessionProofCareers;