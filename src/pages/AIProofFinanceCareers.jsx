// src/pages/AIProofFinanceCareers.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';

const SourceLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="underline decoration-dotted hover:decoration-solid hover:text-blue-700"
  >
    {children}
  </a>
);

const AIProofFinanceCareers = () => {
  // Frey & Osborne (2013/2017) + ILO adaptation provide occupation probabilities.
  // "Loan Processors" uses the closest SOC proxy: Loan Officers.
  const financeRiskData = [
    { role: 'Bank Tellers', risk: 98, automation: 'Very High', reason: 'Transaction processing, account inquiries, basic customer service' }, // F&O 43-3071 ~0.98
    { role: 'Loan Processors (proxy: Loan Officers)', risk: 98, automation: 'Very High', reason: 'Document verification, credit analysis, application processing' }, // F&O 13-2072 ~0.98
    { role: 'Financial Analysts (Junior)', risk: 23, automation: 'Medium-Low', reason: 'Data analysis, report generation, trend identification' }, // F&O 13-2051 ~0.23
    { role: 'Accounting Clerks', risk: 98, automation: 'Very High', reason: 'Data entry, invoice processing, basic bookkeeping' }, // F&O 43-3031 ~0.98
    { role: 'Financial Advisors (Basic)', risk: 58, automation: 'Medium-High', reason: 'Portfolio recommendations, basic financial planning' }, // ILO table (from F&O): Personal Financial Advisors ~0.58
    { role: 'Investment Analysts', risk: 23, automation: 'Medium-Low', reason: 'Market research, complex analysis, strategic recommendations' }, // F&O maps to Financial Analysts ~0.23
    { role: 'Relationship Managers', risk: 1.6, automation: 'Low', reason: 'Client relationships, complex financial planning' }, // F&O proxy: Securities/Financial Services Sales Agents ~0.016
    { role: 'Investment Bankers', risk: 6.9, automation: 'Low', reason: 'Deal structuring, client advisory, strategic transactions' } // F&O proxy: Financial Managers ~0.069
  ];

  const evolutionPaths = [
    {
      from: 'Financial Analyst',
      to: 'AI-Enhanced Financial Strategist',
      timeline: '6-9 months',
      keySkills: ['AI analytics tools', 'Strategic interpretation', 'Stakeholder communication'],
      description: 'Use AI for data processing while focusing on strategic insights and business recommendations'
    },
    {
      from: 'Loan Officer',
      to: 'AI-Assisted Relationship Banker',
      timeline: '4-8 months',
      keySkills: ['AI underwriting tools', 'Relationship building', 'Complex case management'],
      description: 'Leverage AI for basic approvals while handling complex cases and building client relationships'
    },
    {
      from: 'Accounting Specialist',
      to: 'Financial AI Operations Manager',
      timeline: '6-12 months',
      keySkills: ['AI accounting tools', 'Process automation', 'Quality control'],
      description: 'Oversee AI-driven accounting processes while ensuring accuracy and compliance'
    },
    {
      from: 'Financial Advisor',
      to: 'Wealth Management AI Coordinator',
      timeline: '8-12 months',
      keySkills: ['AI portfolio tools', 'Client psychology', 'Comprehensive planning'],
      description: 'Combine AI insights with deep client relationships and complex financial planning'
    }
  ];

  const aiImpactAreas = [
    {
      area: 'Investment Research',
      aiCapability: 'Market data analysis, pattern recognition, automated research reports',
      humanAdvantage: 'Market context interpretation, contrarian insights, client-specific recommendations',
      recommendation: 'Use AI for data gathering, focus on strategic interpretation and client advisory'
    },
    {
      area: 'Risk Assessment',
      aiCapability: 'Credit scoring, fraud detection, algorithmic risk modeling',
      humanAdvantage: 'Contextual judgment, exceptional case handling, regulatory compliance',
      recommendation: 'Let AI handle standard assessments, specialize in complex and edge cases'
    },
    {
      area: 'Financial Planning',
      aiCapability: 'Portfolio optimization, scenario modeling, basic recommendations',
      humanAdvantage: 'Life goal understanding, emotional support, family dynamics',
      recommendation: 'Use AI for calculations, focus on relationship building and life planning'
    },
    {
      area: 'Trading & Portfolio Management',
      aiCapability: 'Algorithmic trading, automated rebalancing, market monitoring',
      humanAdvantage: 'Strategic oversight, client communication, unusual market conditions',
      recommendation: 'Oversee AI trading systems while managing client relationships and strategy'
    }
  ];

  // Sector-level context from credible sources (kept same UI but the % strings now reflect published figures)
  const industryInsights = [
    {
      sector: 'Banking',
      riskLevel: 'High (≈39% automatable; ≈34% augmentable)',
      aiTrends: ['Automated loan processing', 'AI customer service', 'Fraud detection'],
      opportunities: ['Relationship banking', 'Complex lending', 'Regulatory compliance'],
      advice: 'Focus on high-touch client services and complex financial products'
    },
    {
      sector: 'Investment Management',
      riskLevel: 'Medium (analysts ≈23% risk; sales agents ≈1.6%)',
      aiTrends: ['Algorithmic trading', 'Robo-advisors', 'Portfolio optimization'],
      opportunities: ['Client advisory', 'Alternative investments', 'Risk management'],
      advice: 'Become the strategic advisor who interprets AI insights for clients'
    },
    {
      sector: 'Corporate Finance',
      riskLevel: 'Medium-High (~61% of finance activities automatable/mostly automatable)',
      aiTrends: ['Automated reporting', 'Predictive analytics', 'Process automation'],
      opportunities: ['Strategic planning', 'M&A advisory', 'Board communication'],
      advice: 'Move from number-crunching to strategic business partnering'
    },
    {
      sector: 'Insurance',
      riskLevel: 'High (clerical tasks ≈98–99% automatable)',
      aiTrends: ['Claims automation', 'Risk modeling', 'Underwriting AI'],
      opportunities: ['Complex claims', 'Client relationships', 'Product development'],
      advice: 'Specialize in complex cases and maintain the human touch in customer service'
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
              AI-Proof Finance Careers: Navigate Banking & Investment Automation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Finance is being rapidly transformed by AI and automation. Discover which finance roles remain AI-resistant and how to evolve your career to become an AI-enhanced financial professional rather than an AI casualty.
            </p>
            <Link
              to="/auth"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg inline-block"
            >
              Get My Finance Career Evolution Plan
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              ✨ Free assessment • Finance-specific roadmap • Join 625+ finance professionals
            </p>
          </div>
        </div>
      </section>

      {/* Finance AI Risk by Role */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI Automation Risk by Finance Role
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            <em>Risk percentages are drawn from published occupation-level research (see sources). Individual results vary by institution size, regulation, and job scope.</em>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {financeRiskData.map((role, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">{role.role}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      role.risk >= 75
                        ? 'bg-red-100 text-red-800'
                        : role.risk >= 60
                        ? 'bg-orange-100 text-orange-800'
                        : role.risk >= 40
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {role.risk}% Risk
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div
                    className={`h-2 rounded-full ${
                      role.risk >= 75
                        ? 'bg-red-500'
                        : role.risk >= 60
                        ? 'bg-orange-500'
                        : role.risk >= 40
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                    }`}
                    style={{ width: `${role.risk}%` }}
                  ></div>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>AI Impact:</strong> {role.reason}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    role.automation === 'Very High'
                      ? 'bg-red-50 text-red-700'
                      : role.automation === 'High'
                      ? 'bg-orange-50 text-orange-700'
                      : role.automation === 'Medium-High'
                      ? 'bg-yellow-50 text-yellow-700'
                      : role.automation === 'Medium'
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-green-50 text-green-700'
                  }`}
                >
                  {role.automation} Automation Risk
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sector Analysis */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI Impact by Financial Services Sector
          </h2>

        {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryInsights.map((sector, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{sector.sector}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      sector.riskLevel.includes('High') ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {sector.riskLevel}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">AI Trends:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.aiTrends.map((trend, trendIndex) => (
                        <span key={trendIndex} className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">
                          {trend}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Human Opportunities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.opportunities.map((opp, oppIndex) => (
                        <span key={oppIndex} className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                          {opp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Strategic Advice:</h4>
                    <p className="text-blue-800 text-sm">{sector.advice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* subtle inline note under the grid */}
          <p className="text-xs text-gray-500 mt-6">
            Notes: Banking exposure based on Accenture analysis of ~2.7M US banking employees. Corporate finance exposure reflects McKinsey analysis of finance activities automation potential. See sources below.
          </p>
        </div>
      </section>

      {/* AI Impact Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How AI Is Transforming Finance Functions
          </h2>

          <div className="space-y-8">
            {aiImpactAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{area.area}</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-red-700 mb-2 flex items-center">
                      <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                      AI Capability
                    </h4>
                    <p className="text-gray-600 text-sm">{area.aiCapability}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-green-700 mb-2 flex items-center">
                      <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span>
                      Human Advantage
                    </h4>
                    <p className="text-gray-600 text-sm">{area.humanAdvantage}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-blue-700 mb-2 flex items-center">
                      <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                      Evolution Strategy
                    </h4>
                    <p className="text-gray-600 text-sm">{area.recommendation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Evolution Paths */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Finance Career Evolution Paths
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Transform your existing finance role into an AI-resistant position. These evolution paths leverage your financial expertise while positioning you for an AI-augmented future.
            <em> Timeline estimates based on focused skill development and may vary by individual circumstances.</em>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {evolutionPaths.map((path, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-sm border">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-medium text-gray-600 mb-2">From:</h3>
                  <p className="text-xl font-semibold text-gray-900 mb-4">{path.from}</p>
                  <div className="text-3xl mb-4">⬇️</div>
                  <h3 className="text-lg font-medium text-green-600 mb-2">To:</h3>
                  <p className="text-xl font-bold text-green-600">{path.to}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Skills to Develop:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.keySkills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Evolution Strategy:</h4>
                    <p className="text-gray-600 text-sm">{path.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-gray-500">Timeline: {path.timeline}</span>
                    <Link
                      to="/auth"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      Get My Plan
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-Day Implementation Plan */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Your 90-Day Finance Evolution Plan
          </h2>

          <div className="space-y-8">
            {[
              {
                phase: 'Assessment (Days 1-30)',
                focus: 'Current State Analysis',
                actions: [
                  'Complete comprehensive finance AI risk assessment',
                  'Identify which daily tasks can be automated',
                  'Research AI tools relevant to your finance role',
                  'Map your relationship-building and strategic thinking strengths'
                ]
              },
              {
                phase: 'Skill Building (Days 31-60)',
                focus: 'AI Tool Mastery',
                actions: [
                  'Master AI financial analysis tools (Excel AI, financial modeling)',
                  'Develop expertise in one specialized fintech platform',
                  'Practice prompt engineering for financial research',
                  'Build templates for AI-assisted client communications'
                ]
              },
              {
                phase: 'Positioning (Days 61-90)',
                focus: 'Strategic Leadership',
                actions: [
                  'Present AI efficiency improvements to management',
                  'Lead pilot AI project in your department',
                  'Establish yourself as the AI-finance integration expert',
                  'Document ROI improvements and plan next initiatives'
                ]
              }
            ].map((phase, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-white rounded-2xl p-8 shadow-sm border">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                    <p className="text-green-600 font-medium">{phase.focus}</p>
                  </div>
                </div>

                <div className="ml-16">
                  <ul className="space-y-2">
                    {phase.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span className="text-gray-600">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/auth"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
            >
              Get My Detailed Finance Evolution Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Finance Career Evolution FAQ
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'How quickly is AI changing the finance industry?',
                a:
                  'AI adoption in finance is accelerating rapidly, with many routine tasks already automated. However, regulatory requirements and the need for human accountability slow certain changes. High-touch advisory roles and complex decision-making remain primarily human. Timeline varies significantly by institution size and regulatory environment.'
              },
              {
                q: 'Will robo-advisors replace financial advisors?',
                a:
                  'Robo-advisors handle basic portfolio management well, but human advisors excel at comprehensive financial planning, emotional support during market volatility, and complex life situations. The most successful advisors will use robo-tools for efficiency while focusing on relationship building and strategic planning. Market segmentation is likely rather than wholesale replacement.'
              },
              {
                q: 'How do regulations affect AI adoption in finance?',
                a:
                  'Financial regulations require human oversight, explainable decisions, and accountability - all factors that slow pure AI automation. Compliance, risk management, and client advisory roles benefit from this regulatory protection. However, regulations themselves evolve, so staying current with compliance requirements becomes increasingly important.'
              },
              {
                q: 'Should I specialize in fintech to be AI-resistant?',
                a:
                  'Fintech knowledge is valuable, but don\'t abandon traditional finance skills. The best approach combines deep financial expertise with AI tool proficiency. Focus on becoming the bridge between traditional finance knowledge and new AI capabilities rather than purely technical specialization.'
              },
              {
                q: 'Are these risk assessments accurate for my specific situation?',
                a:
                  'Risk assessments reflect general industry trends and current AI capabilities, but individual situations vary greatly. Your specific role, company, geographic location, and regulatory environment all affect actual risk levels. Use these assessments as guidance for career planning, not definitive predictions. Consider taking our personalized assessment for more specific insights.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
            <li>
              Frey & Osborne, <SourceLink href="https://www.oxfordmartin.ox.ac.uk/publications/the-future-of-employment">The Future of Employment (paper & tables)</SourceLink>
            </li>
            <li>
              Regional table with finance occupations (incl. Tellers, Loan Officers, Underwriters, Sales Agents):{' '}
              <SourceLink href="https://oerc.osu.edu/sites/default/files/publications/The-Future-of-Smart-Work-in-Central-Ohio.pdf">
                OERC “Future of Smart Work” (Appendix tables)
              </SourceLink>
            </li>
            <li>
              ILO adaptation of F&O for finance roles (incl. Financial advisers 0.58; Analysts 0.23):{' '}
              <SourceLink href="https://www.ilo.org/sites/default/files/2024-08/Digitalization%20and%20the%20future%20of%20work%20in%20the%20financial%20services%20sector.pdf">
                ILO Financial Services & Digitalization report
              </SourceLink>
            </li>
            <li>
              McKinsey (finance function automation potential ~42% fully + 19% mostly):{' '}
              <SourceLink href="https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/bots-algorithms-and-the-future-of-the-finance-function">
                Bots, algorithms, and the future of the finance function
              </SourceLink>
            </li>
            <li>
              Accenture banking exposure (≈39% automatable; ≈34% augmentable):{' '}
              <SourceLink href="https://bankingblog.accenture.com/3-ways-generative-ai-will-transform-banking">
                3 ways generative AI will transform banking
              </SourceLink>{' '}
              &nbsp;and{' '}
              <SourceLink href="https://www.accenture.com/content/dam/accenture/final/accenture-com/document-2/Accenture-Age-AI-Banking-New-Reality.pdf">
                The age of AI: Banking’s new reality
              </SourceLink>
            </li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">
            Where a job title isn’t a standard SOC occupation (e.g., “Loan Processors”), the closest SOC proxy is used (Loan Officers). Percentages denote probability of computerisation (task-level automation risk), not guaranteed outcomes.
          </p>
        </div>
      </section>

      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Finance Career Before AI Disruption
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Take our finance-specific assessment to discover your automation risk and get a personalized roadmap to become an AI-enhanced finance professional.
          </p>
          <Link
            to="/auth"
            className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            Start My Finance Evolution Assessment
          </Link>
          <p className="text-sm text-green-200 mt-4">
            ✨ Finance-specific analysis • 90-day roadmap 
          </p>
          <p className="text-xs text-green-300 mt-2">
            <em>Educational guidance only. Career outcomes depend on market conditions, regulatory changes, individual effort, and company decisions.</em>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIProofFinanceCareers;
