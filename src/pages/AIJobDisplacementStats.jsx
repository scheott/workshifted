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
    className="underline decoration-dotted hover:decoration-solid hover:text-blue-700"
  >
    {children}
  </a>
);

const StatCard = ({ value, label, sublabel, tone, sourceHref, sourceText }) => {
  const toneMap = {
    red: 'bg-red-50 border-red-200 text-red-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    green: 'bg-green-50 border-green-200 text-green-700'
  };
  return (
    <div className={`border rounded-xl p-6 text-center ${toneMap[tone] || ''}`}>
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-sm text-gray-700">{label}</div>
      {sublabel && <div className="text-xs text-gray-500 mt-1">{sublabel}</div>}
      {sourceHref && sourceText && (
        <div className="text-[11px] text-gray-500 mt-3">
          Source: <SourceLink href={sourceHref}>{sourceText}</SourceLink>
        </div>
      )}
    </div>
  );
};

const Bar = ({ pct, color = 'bg-gray-900' }) => (
  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3" aria-hidden="true">
    <div className={`${color} h-2 rounded-full`} style={{ width: `${pct}%` }} />
  </div>
);

const AIJobDisplacementStats = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <LandingHeader />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              🤖 Real Data, Real Solutions
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Don't Let AI Replace You—
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 block">
              Learn to Lead It
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            While others panic about job displacement, smart professionals are positioning themselves as AI leaders. 
            Here's what the data really says—and how to use it to your advantage.
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get My Personal AI Strategy
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Key Stats Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Reality Check</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <StatCard
              value="14%"
              label="Jobs with high automation risk"
              sublabel="But most remain secure with the right strategy"
              tone="orange"
              sourceHref="https://wecglobal.org/uploads/2019/07/2016_OECD_Risk-Automation-Jobs.pdf"
              sourceText="OECD (task-based estimate)"
            />
            <StatCard
              value="69M"
              label="New roles created by AI adoption"
              sublabel="AI coordinators, prompt specialists, etc."
              tone="green"
              sourceHref="https://www.weforum.org/publications/the-future-of-jobs-report-2023/digest/"
              sourceText="WEF Future of Jobs 2023"
            />
            <StatCard
              value="$18k+"
              label="Average salary boost"
              sublabel="For professionals who embrace AI tools"
              tone="blue"
              sourceHref="https://www.prnewswire.com/news-releases/new-lightcast-report-ai-skills-command-28-salary-premium-as-demand-shifts-beyond-tech-industry-302511141.html"
              sourceText="Lightcast (2025)"
            />
            <StatCard
              value="~100 days"
              label="Time to become AI-proficient"
              sublabel="In your current role with right plan"
              tone="green"
              sourceHref="https://www.weforum.org/stories/2018/09/future-of-jobs-2018-things-to-know/"
              sourceText="WEF (2018) avg. reskilling"
            />
          </div>
        </section>

        {/* The Real Story */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Real Story Behind the Headlines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">❌ What Media Gets Wrong</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• "AI will eliminate entire job categories"</li>
                  <li>• "You need to completely change careers"</li>
                  <li>• "Only technical people will survive"</li>
                  <li>• "It's happening overnight"</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ What's Actually Happening</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• AI automates tasks, not entire jobs</li>
                  <li>• Most roles evolve rather than disappear</li>
                  <li>• Human skills become MORE valuable</li>
                  <li>• Early adopters get promoted</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <p className="text-lg text-blue-800 font-medium">
                <span className="font-bold">Key Insight:</span> The people who learn to direct AI instead of competing with it will be the winners.
              </p>
            </div>
          </div>
        </section>

        {/* Automation Risk by Role */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Automation Risk by Job Role
            </h2>
            <p className="text-gray-600 mb-6 text-center max-w-3xl mx-auto">
              Understanding your risk level is the first step to building your AI strategy. 
              Higher risk = greater opportunity to become the AI expert in your field.
            </p>
            <p className="text-[11px] text-gray-500 text-center mb-8">
              Percentages below use <em>probability of computerization</em> from Frey &amp; Osborne (2013).
              <SourceLink href="https://www.oxfordmartin.ox.ac.uk/publications/the-future-of-employment"> Source</SourceLink>
            </p>
            
            <div className="space-y-4">
              {/* High Risk - High Opportunity */}
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  High Risk = High Leadership Opportunity (70–99% tasks automatable)
                </h3>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div>
                    <span className="font-medium text-gray-900">Data Entry Clerks</span>
                    <div className="text-sm text-blue-600">→ AI Data Managers, Process Automation Specialists</div>
                  </div>
                  <div className="flex items-center">
                    <Bar pct={99} color="bg-red-600" />
                    <span className="text-red-700 font-semibold">99%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div>
                    <span className="font-medium text-gray-900">Bookkeeping Clerks</span>
                    <div className="text-sm text-blue-600">→ Financial AI Coordinators, Automated Finance Analysts</div>
                  </div>
                  <div className="flex items-center">
                    <Bar pct={98} color="bg-red-600" />
                    <span className="text-red-700 font-semibold">98%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <div>
                    <span className="font-medium text-gray-900">Administrative Assistants</span>
                    <div className="text-sm text-blue-600">→ AI Workflow Coordinators, Executive AI Partners</div>
                  </div>
                  <div className="flex items-center">
                    <Bar pct={96} color="bg-red-600" />
                    <span className="text-red-700 font-semibold">96%</span>
                  </div>
                </div>
              </div>

              {/* Medium Risk */}
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                  Medium Risk = Strategic Evolution (30–70% tasks automatable)
                </h3>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div>
                    <span className="font-medium text-gray-900">Customer Service Representatives</span>
                    <div className="text-sm text-blue-600">→ AI Customer Experience Managers, Human Escalation Specialists</div>
                  </div>
                  <div className="flex items-center">
                    <Bar pct={55} color="bg-orange-500" />
                    <span className="text-orange-600 font-semibold">55%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div>
                    <span className="font-medium text-gray-900">Marketing Specialists</span>
                    <div className="text-sm text-blue-600">→ AI Marketing Strategists, Brand Voice Directors</div>
                  </div>
                  <div className="flex items-center">
                    <Bar pct={61} color="bg-orange-500" />
                    <span className="text-orange-600 font-semibold">61%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <div>
                    <span className="font-medium text-gray-900">Financial Analysts</span>
                    <div className="text-sm text-blue-600">→ Strategic Finance Partners, AI Model Validators</div>
                  </div>
                  <div className="flex items-center">
                    <Bar pct={23} color="bg-yellow-500" />
                    <span className="text-yellow-600 font-semibold">23%</span>
                  </div>
                </div>
              </div>

              {/* Low Risk */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Low Risk = AI Amplification (≤10% tasks automatable)
                </h3>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div>
                    <span className="font-medium text-gray-900">Software Engineers</span>
                    <div className="text-sm text-blue-600">→ AI-Augmented Developers, Human-AI Development Leads</div>
                  </div>
                  <div className="flex items-center">
                    <Bar pct={4.2} color="bg-green-500" />
                    <span className="text-green-600 font-semibold">4.2%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div>
                    <span className="font-medium text-gray-900">Sales Managers</span>
                    <div className="text-sm text-blue-600">→ AI-Powered Sales Strategists, Relationship AI Coordinators</div>
                  </div>
                  <div className="flex items-center">
                    <Bar pct={1.3} color="bg-green-500" />
                    <span className="text-green-600 font-semibold">1.3%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <div>
                    <span className="font-medium text-gray-900">HR Managers</span>
                    <div className="text-sm text-blue-600">→ People &amp; AI Integration Leaders, Human Experience Directors</div>
                  </div>
                  <div className="flex items-center">
                    <Bar pct={0.55} color="bg-green-500" />
                    <span className="text-green-600 font-semibold">0.55%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-gray-500 mt-4">
              Specific occupation figures sourced from Frey &amp; Osborne (2013): 
              Data Entry Keyers 0.99; Bookkeeping, Accounting &amp; Auditing Clerks 0.98; 
              Secretaries &amp; Admin Assistants (except legal/medical/executive) 0.96; 
              Customer Service Representatives 0.55; Market Research Analysts &amp; Marketing Specialists 0.61; 
              Financial Analysts 0.23; Software Developers, Applications 0.042; Sales Managers 0.013; 
              Human Resources Managers 0.0055.{" "}
              <SourceLink href="https://www.oxfordmartin.ox.ac.uk/publications/the-future-of-employment">Main paper</SourceLink>,{" "}
              <SourceLink href="https://www.fhi.ox.ac.uk/wp-content/uploads/The-Future-of-Employment-How-Susceptible-Are-Jobs-to-Computerization.pdf">table PDF</SourceLink>,{" "}
              <SourceLink href="https://www.americanactionforum.org/insight/the-future-of-employment-high-risk-occupations-for-automation/">marketing specialists ref</SourceLink>.
            </div>
          </div>
        </section>

        {/* Action Plan CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Your 90-Day AI Leadership Plan</h2>
            <p className="text-xl mb-6 opacity-90">
              Don't wait for AI to disrupt your industry. Get ahead of it.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Days 1-30: Position Analysis</h3>
                <ul className="text-sm opacity-90 space-y-1">
                  <li>• Audit your role for AI opportunities</li>
                  <li>• Learn relevant AI tools for your field</li>
                  <li>• Map your transferable skills</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Days 31-60: Skill Building</h3>
                <ul className="text-sm opacity-90 space-y-1">
                  <li>• Master prompt engineering</li>
                  <li>• Build AI collaboration workflows</li>
                  <li>• Create AI-augmented work examples</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Days 61-90: Strategic Repositioning</h3>
                <ul className="text-sm opacity-90 space-y-1">
                  <li>• Pitch AI projects to leadership</li>
                  <li>• Position as "AI coordinator"</li>
                  <li>• Network in AI transformation roles</li>
                </ul>
              </div>
            </div>
            <Link
              to="/auth"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Get My Personalized Plan
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Sources */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Sources</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-sm text-gray-700 mb-4">All statistics and projections are sourced from peer-reviewed research or primary analyses:</p>
            <p className="text-xs text-gray-600 mb-2">
              • OECD (2016): <SourceLink href="https://wecglobal.org/uploads/2019/07/2016_OECD_Risk-Automation-Jobs.pdf">The Risk of Automation for Jobs in OECD Countries</SourceLink>
            </p>
            <p className="text-xs text-gray-600 mb-2">
              • World Economic Forum (2023): <SourceLink href="https://www.weforum.org/publications/the-future-of-jobs-report-2023/digest/">Future of Jobs Report 2023</SourceLink>
            </p>
            <p className="text-xs text-gray-600 mb-2">
              • Lightcast (2025): <SourceLink href="https://www.prnewswire.com/news-releases/new-lightcast-report-ai-skills-command-28-salary-premium-as-demand-shifts-beyond-tech-industry-302511141.html">AI Skills Command ~28% Salary Premium (~$18k)</SourceLink>
            </p>
            <p className="text-xs text-gray-600 mb-2">
              • World Economic Forum (2018): <SourceLink href="https://www.weforum.org/stories/2018/09/future-of-jobs-2018-things-to-know/">Avg. 101 days reskilling</SourceLink>
            </p>
            <p className="text-xs text-gray-600 mb-2">
              • Frey &amp; Osborne (2013): <SourceLink href="https://www.oxfordmartin.ox.ac.uk/publications/the-future-of-employment">The Future of Employment: How Susceptible Are Jobs to Computerisation?</SourceLink> (occupation probabilities)
            </p>
            <p className="text-xs text-gray-600 mb-2">
              • Supporting lookup for specific occupations: <SourceLink href="https://www.fhi.ox.ac.uk/wp-content/uploads/The-Future-of-Employment-How-Susceptible-Are-Jobs-to-Computerization.pdf">table PDF</SourceLink>, <SourceLink href="https://www.americanactionforum.org/insight/the-future-of-employment-high-risk-occupations-for-automation/">AAF summary (marketing specialists)</SourceLink>
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Last updated: Aug 2025. We prioritize primary research and avoid speculation. Percentages for occupations reflect <em>probability of computerization</em>, not certainty.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AIJobDisplacementStats;
