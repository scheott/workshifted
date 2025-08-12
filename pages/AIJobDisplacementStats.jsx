// src/pages/AIJobDisplacementStats.jsx
import React from 'react';
import { Link } from 'react-router-dom';
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

const StatCard = ({ value, label, sublabel, tone }) => {
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
    </div>
  );
};

const Bar = ({ pct, color = 'bg-gray-900' }) => (
  <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
    <div className={`${color} h-2 rounded-full`} style={{ width: `${pct}%` }} />
  </div>
);

const AIJobDisplacementStats = () => {
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
            <li className="text-gray-900">AI Job Displacement — What reputable studies actually say</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
            2025 Evidence Review
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI, Automation, and Jobs: Grounded Statistics & Sources
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Below are <span className="font-semibold">verifiable</span> figures from McKinsey Global Institute, Goldman Sachs Global Investment Research, and the Oxford Martin School (Frey & Osborne). Where precise percentages don’t exist, we avoid making them up and explain why.
          </p>

          {/* Quick CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12 text-left">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">⚡ Quick Career Security Check</h3>
            <p className="text-blue-700 mb-4">Find hands-on, lower-exposure career paths that match your skills in 5 minutes</p>
            <Link
              to="/auth"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Take Free Assessment →
            </Link>
          </div>
        </div>

        {/* Key Statistics (sourced) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key statistics (with sources)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            <StatCard
              value="≈30%"
              label={(
                <>
                  of US work <span className="whitespace-nowrap">hours by 2030</span> may be automated
                </>
              )}
              sublabel={(
                <>
                  Source: McKinsey Global Institute (2023). <SourceLink href="https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai">Report</SourceLink>
                </>
              )}
              tone="yellow"
            />
            <StatCard
              value="≈300M"
              label="full-time jobs exposed globally to AI"
              sublabel={(
                <>
                  Source: Goldman Sachs GIR (2023). <SourceLink href="https://www.ansa.it/documents/1680080409454_ert.pdf">PDF</SourceLink>
                </>
              )}
              tone="orange"
            />
            <StatCard
              value="47%"
              label={(
                <>
                  US employment <span className="whitespace-nowrap">‘at risk of computerisation’</span> (long‑run potential, not a 2030 forecast)
                </>
              )}
              sublabel={(
                <>
                  Source: Frey & Osborne (2013/2017). <SourceLink href="https://www.oxfordmartin.ox.ac.uk/publications/the-future-of-employment">Paper</SourceLink>
                </>
              )}
              tone="red"
            />
          </div>
          <p className="text-xs text-gray-600">
            Notes: Goldman Sachs estimates ~<span className="font-semibold">one‑fourth of current work</span> could be automated in the US/EU; McKinsey’s "≈30% by 2030" refers to <span className="font-semibold">hours</span> automated, while Frey & Osborne’s 47% is a probability-of-computerisation estimate over an unspecified timeframe, not a dated prediction.
          </p>
        </section>

        {/* Jobs at High / Medium Exposure (occupation-level, FO probabilities) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Occupation examples (Frey & Osborne probabilities)</h2>
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="space-y-4">
              {/* Data Entry Keyers */}
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Data Entry Keyers</span>
                <div className="flex items-center">
                  <Bar pct={99} color="bg-red-600" />
                  <span className="text-red-700 font-semibold">99%</span>
                </div>
              </div>
              {/* Bookkeeping Clerks */}
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Bookkeeping, Accounting & Auditing Clerks</span>
                <div className="flex items-center">
                  <Bar pct={98} color="bg-red-600" />
                  <span className="text-red-700 font-semibold">98%</span>
                </div>
              </div>
              {/* Secretaries / Admin Assistants */}
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Secretaries & Administrative Assistants (except legal/medical/executive)</span>
                <div className="flex items-center">
                  <Bar pct={96} color="bg-red-600" />
                  <span className="text-red-700 font-semibold">96%</span>
                </div>
              </div>
              {/* Customer Service Reps */}
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Customer Service Representatives</span>
                <div className="flex items-center">
                  <Bar pct={55} color="bg-orange-500" />
                  <span className="text-orange-600 font-semibold">55%</span>
                </div>
              </div>
              {/* Marketing Specialists */}
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-900">Market Research Analysts & Marketing Specialists</span>
                <div className="flex items-center">
                  <Bar pct={61} color="bg-orange-500" />
                  <span className="text-orange-600 font-semibold">61%</span>
                </div>
              </div>
              {/* Financial Analysts */}
              <div className="flex items-center justify-between py-3">
                <span className="font-medium text-gray-900">Financial Analysts</span>
                <div className="flex items-center">
                  <Bar pct={23} color="bg-yellow-500" />
                  <span className="text-yellow-600 font-semibold">23%</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Source: Frey & Osborne occupation probabilities. Links: 
            <span className="ml-1"><SourceLink href="https://oms-www.files.svdcdn.com/production/downloads/academic/The_Future_of_Employment.pdf">FO 2013 PDF</SourceLink></span> · 
            <span className="ml-1"><SourceLink href="https://futureoflife.org/data/PDF/michael_osborne.pdf">FO tables (presentation)</SourceLink></span> · 
            <span className="ml-1"><SourceLink href="https://reparti.free.fr/freyosborne17.pdf">Appendix listing (examples)</SourceLink></span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Reminder: these are <span className="italic">long‑run potential</span> probabilities of computerisation; actual adoption depends on costs, regulation, consumer acceptance, and complementary tech.
          </p>
        </section>

        {/* Sectors/Occupations most exposed (Goldman) + Sectors with high technical potential (McKinsey) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Where exposure is highest (two lenses)</h2>

          {/* Occupational groups (Goldman Sachs) */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Occupational groups most exposed to AI (US)</h3>
            <p className="text-sm text-gray-600 mb-3">
              Goldman Sachs estimates the <span className="font-medium">share of tasks</span> exposed to AI automation. Selected groups:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"/>Office & Administrative Support — <span className="font-semibold">46%</span></li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"/>Legal — <span className="font-semibold">44%</span></li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"/>Architecture & Engineering — <span className="font-semibold">37%</span></li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"/>Life/Physical/Social Science — <span className="font-semibold">36%</span></li>
                <li className="flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"/>Business & Financial Operations — <span className="font-semibold">35%</span></li>
              </ul>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Source: Goldman Sachs GIR (2023), Exhibit 5. <SourceLink href="https://www.ansa.it/documents/1680080409454_ert.pdf">PDF</SourceLink>
            </p>
          </div>

          {/* Sectors (McKinsey) */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sectors with high technical automation potential (US)</h3>
            <p className="text-sm text-gray-600 mb-3">McKinsey estimates the <span className="font-medium">share of time</span> in each sector’s activities that could be automated with currently demonstrated tech:</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-red-600 mb-3">Higher potential</h4>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"/>Accommodation & Food Services — <span className="font-semibold">73%</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"/>Manufacturing — <span className="font-semibold">60%</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"/>Agriculture — <span className="font-semibold">58%</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"/>Transportation & Warehousing — <span className="font-semibold">57%</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"/>Retail Trade — <span className="font-semibold">53%</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-3">Lower potential</h4>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"/>Educational Services — <span className="font-semibold">27%</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"/>Professional, Scientific & Technical Services — <span className="font-semibold">35%</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"/>Management of Companies — <span className="font-semibold">35%</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"/>Information — <span className="font-semibold">36%</span></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"/>Health Care & Social Assistance — <span className="font-semibold">36%</span></li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Source: McKinsey Global Institute, <em>A Future That Works</em> (2017), Exhibit 9. <SourceLink href="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/digital%20disruption/harnessing%20automation%20for%20a%20future%20that%20works/mgi-a-future-that-works-full-report-updated.pdf">PDF</SourceLink>
            </p>
          </div>
        </section>

        {/* What This Means for Workers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What this means for workers</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Reality check</h3>
                <ul className="space-y-3 text-blue-800">
                  <li>• Full <span className="italic">jobs</span> are rarely automated end‑to‑end; <span className="font-medium">tasks</span> are.</li>
                  <li>• Exposure varies by occupation group and sector (see above).</li>
                  <li>• Adoption is gradual and depends on economics, regulation, and culture.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Practical prep</h3>
                <ul className="space-y-3 text-blue-800">
                  <li>• Grow skills that mix judgement, customer interaction, and manual work.</li>
                  <li>• Build a backup path into lower‑exposure, hands‑on roles if you’re in a high‑exposure desk job.</li>
                  <li>• Start learning while employed; stack certs and on‑the‑job practice.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Career Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Hands‑on career options often less exposed</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">Electrician</h3>
              <p className="text-green-800 text-sm">On‑site diagnostics, code compliance, and safety‑critical work in varied environments are hard to fully automate.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">Plumber</h3>
              <p className="text-green-800 text-sm">Physical installation and repair in unpredictable spaces requires human dexterity and problem‑solving.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">HVAC Technician</h3>
              <p className="text-green-800 text-sm">Diagnostics, maintenance, and retrofits blend field work with customer interaction—automation tends to assist, not replace.</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Important: There is <span className="font-semibold">no single, authoritative percentage</span> for “automation risk” for these specific trades. Most credible sources report <em>task/sector exposure</em>, not precise job‑level odds for trades. Avoid unsourced numeric claims here.
          </p>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Your Career Backup Plan Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don’t wait for automation to impact your job. Take our free assessment to discover hands‑on career options that match your skills and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/auth" className="bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Start Free Career Assessment
            </Link>
            <Link to="/will-ai-take-my-job-by-industry" className="border border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200">
              Check Your Industry/Occupation Exposure
            </Link>
          </div>
          <p className="text-xs text-blue-100 mt-6">Free assessment • 5 minutes • No spam • Get personalized results</p>
        </section>

        {/* Sources & Methodology */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sources & methodology</h3>
          <div className="text-sm text-gray-700 space-y-2">
            <p>• McKinsey Global Institute (2017): <em>A Future That Works</em> — sector technical automation potential (Exhibit 9). <SourceLink href="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/digital%20disruption/harnessing%20automation%20for%20a%20future%20that%20works/mgi-a-future-that-works-full-report-updated.pdf">PDF</SourceLink></p>
            <p>• McKinsey Global Institute (2023): Generative AI could automate up to ~30% of US work hours by 2030. <SourceLink href="https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai">Overview</SourceLink></p>
            <p>• Goldman Sachs Global Investment Research (2023): ~300M FTE jobs exposed; task‑exposure by occupation group. <SourceLink href="https://www.ansa.it/documents/1680080409454_ert.pdf">PDF</SourceLink></p>
            <p>• Frey & Osborne (2013/2017): Occupation‑level probability of computerisation (long‑run potential), including the examples above. <SourceLink href="https://www.oxfordmartin.ox.ac.uk/publications/the-future-of-employment">Working paper</SourceLink></p>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Last updated: Jan 2025. We deliberately avoid unsourced numbers. If you spot a claim that needs a citation, tell us and we’ll fix it.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AIJobDisplacementStats;
