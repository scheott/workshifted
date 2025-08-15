// src/pages/AIvsHumanJobs.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';

const SOURCES = [
  {
    id: 'fo2013',
    title: "Frey & Osborne (2013/2017) — The Future of Employment",
    url: "https://www.oxfordmartin.ox.ac.uk/publications/the-future-of-employment/",
    note: "Occupation-level probabilities of computerisation (\"automatability\")."
  },
  {
    id: 'fo_pdf_main',
    title: "Frey & Osborne PDF (Appendix with occupation probabilities)",
    url: "https://reparti.free.fr/freyosborne17.pdf",
    note: "Contains the detailed table (SOC codes and probabilities)."
  },
  {
    id: 'fo_pdf_alt',
    title: "Frey & Osborne PDF (Oxford FHI mirror)",
    url: "https://www.fhi.ox.ac.uk/wp-content/uploads/The-Future-of-Employment-How-Susceptible-Are-Jobs-to-Computerization.pdf",
    note: "Alternate mirror for the same paper."
  },
  {
    id: 'wef2023',
    title: "World Economic Forum — Future of Jobs Report 2023 (overview)",
    url: "https://www.weforum.org/press/2023/05/future-of-jobs-report-2023/",
    note: "Top declining roles by 2027 (e.g., Data Entry Clerks; Accounting, Bookkeeping & Payroll Clerks)."
  },
  {
    id: 'wef2023_detail',
    title: "WEF 2023 — Role change by 2027 (detailed page)",
    url: "https://www.weforum.org/stories/2023/05/jobs-of-the-future-2023/",
    note: "Breakdowns like “Data-entry Clerks: 25–35% less demand by 2027”."
  },
  {
    id: 'mck_2023',
    title: "McKinsey Global Institute (2023) — Generative AI and Productivity",
    url: "https://www.mckinsey.com/mgi/our-research/powering-ahead-how-ai-is-accelerating-the-us-economy",
    note: "Adoption timing: ~50% of today’s work activities automated between 2030–2060 (midpoint ~2045)."
  },
  {
    id: 'openai_gpts',
    title: "OpenAI et al. (2023) — GPTs are GPTs (arXiv)",
    url: "https://arxiv.org/abs/2303.10130",
    note: "80% of US workers could see ≥10% of tasks affected; 19% could see ≥50%."
  },
  {
    id: 'aaf_fo_lowrisk',
    title: "American Action Forum — Low-risk occupations from FO",
    url: "https://www.americanactionforum.org/insight/ai-automation-and-jobs/",
    note: "Lists low FO probabilities (e.g., Registered Nurses ~0.009; Therapists ~0.014)."
  },
  {
    id: 'yumpu_fo_table',
    title: "FO occupation table (mirror extract with SOC codes)",
    url: "https://www.yumpu.com/en/document/view/38184307/frey-and-osborne-2013-the-future-of-employment-how-susceptible-are-jobs",
    note: "Convenient snapshot of FO table rows used for trades (e.g., electricians/plumbers/carpenters)."
  }
];

// All “risk” values below come from Frey & Osborne (probability of computerisation, 0–100%).
// Timelines reference WEF 2023 (for 2027 shifts) or McKinsey 2023 (2030–2060 adoption window).
const jobCategories = {
  cognitive: {
    title: "Cognitive Work",
    aiRisk: "High",
    description: "Roles with heavy routine analysis, rules-based work, and structured inputs",
    examples: [
      {
        job: "Data Entry Clerk",
        risk: 99, // FO: 0.99
        timeline: "WEF expects 25–35% less demand by 2027; high automatability.",
        reason: "Highly routine, structured text entry",
        evolution: "AI Data Ops Coordinator, Process Automation Specialist",
        sources: ['fo_pdf_main', 'wef2023_detail']
      },
      {
        job: "Bookkeeping, Accounting & Payroll Clerk",
        risk: 98, // FO: 0.98
        timeline: "Listed among top declining roles by 2027 (WEF).",
        reason: "Rule-based reconciliation and reporting",
        evolution: "Financial AI Coordinator, Controls & Data Integrity Lead",
        sources: ['fo_pdf_main', 'wef2023']
      },
      {
        job: "Tax Preparer",
        risk: 99, // FO: 0.99
        timeline: "High automatability; adoption generally 2030–2060 window.",
        reason: "Codified rules & standardized inputs",
        evolution: "AI Tax Strategy Advisor, Complex Case Specialist",
        sources: ['fo_pdf_main', 'mck_2023']
      },
      {
        job: "Market Research Analyst & Marketing Specialist",
        risk: 61, // FO: 0.61
        timeline: "High language-model exposure; 2030–2060 adoption window.",
        reason: "Pattern finding in text & survey data",
        evolution: "Consumer Insight Synthesizer, AI Research Director",
        sources: ['fo_pdf_main', 'openai_gpts', 'mck_2023']
      },
      {
        job: "Financial Analyst",
        risk: 23, // FO: 0.23
        timeline: "Significant augmentation; 2030–2060 adoption window.",
        reason: "Judgment + modeling; repetitive parts automatable",
        evolution: "Strategic Finance Partner, AI Model Validator",
        sources: ['fo_pdf_main', 'mck_2023']
      }
    ]
  },

  creative: {
    title: "Creative Work",
    aiRisk: "Medium",
    description: "Original concepts, storytelling, brand voice, multi-modal ideation",
    examples: [
      {
        job: "Writers & Authors",
        risk: 4, // FO: 0.038
        timeline: "FO low, but gen-AI raises exposure; 2030–2060 adoption window.",
        reason: "Conceptual/brand context still matters",
        evolution: "Brand Voice Director, AI Content Strategist",
        sources: ['fo_pdf_alt', 'openai_gpts', 'mck_2023']
      },
      {
        job: "Graphic Designer",
        risk: 8, // FO: 0.082
        timeline: "Tooling rapidly improves; 2030–2060 adoption window.",
        reason: "Templates assisted; brand systems still human-led",
        evolution: "Creative AI Coordinator, Visual Brand Systems Lead",
        sources: ['fo_pdf_main', 'mck_2023']
      },
      {
        job: "Advertising & Promotions Manager",
        risk: 4, // FO: 0.039
        timeline: "Augmentation > automation; 2030–2060 window.",
        reason: "Strategy, orchestration, outcomes accountability",
        evolution: "AI Campaign Orchestrator, Growth Experiments Lead",
        sources: ['fo_pdf_main', 'mck_2023']
      },
      {
        job: "Art / Creative Director",
        risk: 2, // FO: ~0.023–0.025 in FO tables
        timeline: "Human leadership on taste/brand; 2030–2060 window.",
        reason: "Cross-disciplinary direction & stakeholder alignment",
        evolution: "Human-AI Creative Leader, Brand Experience Architect",
        sources: ['yumpu_fo_table', 'mck_2023']
      }
    ]
  },

  interpersonal: {
    title: "Interpersonal Work",
    aiRisk: "Low",
    description: "High-touch, context-rich roles requiring empathy, ethics, and persuasion",
    examples: [
      {
        job: "Therapist / Counselor (e.g., Marriage & Family Therapist)",
        risk: 1, // FO ~0.014
        timeline: "Low automatability; augmentation only.",
        reason: "Deep empathy and human trust",
        evolution: "Digital Therapy Integration Specialist, Human-AI Wellness Coordinator",
        sources: ['yumpu_fo_table', 'aaf_fo_lowrisk']
      },
      {
        job: "Sales Manager",
        risk: 1, // FO ~0.013–0.014
        timeline: "Augmented pipeline ops; human relationships persist.",
        reason: "Complex negotiation & leadership",
        evolution: "AI-Powered Sales Strategist, RevOps Orchestrator",
        sources: ['reparti_fo_fallback', 'yumpu_fo_table']
      },
      {
        job: "HR Manager",
        risk: 1, // FO ~0.005–0.01
        timeline: "Decision support; ethics & policy remain human-led.",
        reason: "Sensitive judgment & conflict resolution",
        evolution: "People & AI Integration Leader, Human Experience Director",
        sources: ['aaf_fo_lowrisk', 'fo_pdf_alt']
      },
      {
        job: "Elementary School Teacher",
        risk: 0, // FO ~0.004–0.15 depending on category; we use ~0.4% tier
        timeline: "Augmented lesson planning; human instruction stays core.",
        reason: "Personalized instruction & support",
        evolution: "AI Learning Facilitator, Human Development Specialist",
        sources: ['reparti_fo_fallback']
      },
      {
        job: "Registered Nurse",
        risk: 1, // FO ~0.009
        timeline: "Clinical judgment + physical presence remain critical.",
        reason: "Hands-on care & exception handling",
        evolution: "AI-Augmented Care Provider, Human Health Advocate",
        sources: ['aaf_fo_lowrisk']
      }
    ]
  },

  physical: {
    title: "Physical Work",
    aiRisk: "Low–Mixed",
    description: "Manual dexterity, on-site troubleshooting, variable environments",
    examples: [
      {
        job: "Electrician",
        risk: 15, // FO ~0.15
        timeline: "Low near-term automation; robotics is hard in varied spaces.",
        reason: "Unstructured physical tasks & safety constraints",
        evolution: "Smart Building AI Specialist, Electrical Systems AI Coordinator",
        sources: ['yumpu_fo_table']
      },
      {
        job: "Plumber",
        risk: 35, // FO ~0.35
        timeline: "Partial tool augmentation; full automation unlikely near-term.",
        reason: "Diagnosis in variable environments",
        evolution: "IoT Plumbing Systems Expert, Smart Home Integration Specialist",
        sources: ['yumpu_fo_table']
      },
      {
        job: "Carpenter",
        risk: 72, // FO ~0.72 (notably higher in FO)
        timeline: "FO suggests higher potential; adoption constrained by robotics.",
        reason: "FO methodology differences; real-world adoption slower",
        evolution: "AI-Assisted Construction Manager, Smart Building Specialist",
        sources: ['yumpu_fo_table']
      },
      {
        job: "Chef / Head Cook",
        risk: 10, // FO ~0.10
        timeline: "Assisted prep; creative & service aspects remain human.",
        reason: "Taste, experience, and on-site service",
        evolution: "Culinary AI Director, Food Experience Designer",
        sources: ['yumpu_fo_table']
      },
      {
        job: "Personal Trainer",
        risk: 1, // FO ~0.007–0.01 in low-risk health/education cluster
        timeline: "AI planning assist; human motivation/intervention critical.",
        reason: "In-person assessment & coaching",
        evolution: "AI Fitness Integration Coach, Human Performance Specialist",
        sources: ['aaf_fo_lowrisk']
      }
    ]
  }
};

// Helper to link sources listed per example
const SourceBadges = ({ ids = [] }) => {
  const pick = SOURCES.filter(s => ids.includes(s.id));
  if (!pick.length) return null;
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {pick.map(s => (
        <a
          key={s.id}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded border border-gray-200 hover:bg-gray-50"
        >
          Source: {s.title.replace(/ —.*/,'')}
        </a>
      ))}
    </div>
  );
};

const AIvsHumanJobs = () => {
  const [activeTab, setActiveTab] = useState('cognitive');

  // Convenience map for header badge color
  const riskBadge = (risk) =>
    risk === 'High' ? 'bg-red-100 text-red-700'
    : risk === 'Medium' ? 'bg-orange-100 text-orange-700'
    : 'bg-green-100 text-green-700';

  return (
    <div className="min-h-screen bg-white">
      {/* Use shared landing header */}
      <LandingHeader />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li>→</li>
            <li><Link to="/ai-job-displacement-statistics" className="hover:text-blue-600">AI Statistics</Link></li>
            <li>→</li>
            <li className="text-gray-900">AI vs Human Jobs</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-4">
            🤖 vs 👨 Strategic Partnership Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI vs Human Jobs:
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 block">
              The Leadership Playbook
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Stop competing with AI—start directing it. Below are real, research-backed risk
            estimates (Frey & Osborne) and adoption timelines (McKinsey/WEF), plus evolution paths.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/auth"
              className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get My AI Leadership Plan
            </Link>
            <Link
              to="/ai-job-displacement-statistics"
              className="border border-purple-600 text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              View Risk Statistics
            </Link>
          </div>
          <p className="text-sm text-gray-600">
            5 minutes • Personalized roadmap • Learn to direct AI instead of competing with it
          </p>
        </div>

        {/* Methodology note */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-8 text-sm text-purple-900">
          <strong>Methodology:</strong> “Risk” values are the
          Frey–Osborne <em>probability of computerisation</em> (technical automatability) for the
          occupation. These are <em>not</em> forecasts of job loss. Short-term demand changes cite
          WEF 2023 (to 2027). Long-term adoption windows cite McKinsey 2023 (2030–2060).
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {Object.entries(jobCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === key
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active tab */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {jobCategories[activeTab].title}
              </h3>
              <p className="text-gray-600 mt-2">
                {jobCategories[activeTab].description}
              </p>
            </div>
            <div className="text-right">
              <div
                className={`text-sm font-semibold px-3 py-1 rounded-full ${riskBadge(jobCategories[activeTab].aiRisk)}`}
              >
                {jobCategories[activeTab].aiRisk} AI Risk = {jobCategories[activeTab].aiRisk} Leadership Opportunity
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {jobCategories[activeTab].examples.map((example, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">
                      {example.job}
                    </h4>
                    <div className="flex items-center mb-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3" aria-hidden>
                        <div
                          className={`h-2 rounded-full ${
                            example.risk >= 70 ? 'bg-red-500' :
                            example.risk >= 40 ? 'bg-orange-500' :
                            'bg-green-500'
                          }`}
                          style={{ width: `${example.risk}%` }}
                        />
                      </div>
                      <span
                        className={`font-semibold ${
                          example.risk >= 70 ? 'text-red-600' :
                          example.risk >= 40 ? 'text-orange-600' :
                          'text-green-600'
                        }`}
                      >
                        {example.risk}%
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Timeline: {example.timeline}
                    </div>
                    <SourceBadges ids={example.sources} />
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Why AI Affects This Role</h5>
                    <p className="text-sm text-gray-600 mb-3">{example.reason}</p>
                  </div>

                  <div>
                    <h5 className="font-medium text-blue-900 mb-2">Your Evolution Path</h5>
                    <p className="text-sm text-blue-700 font-medium">{example.evolution}</p>
                    <div className="mt-2">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        Become the AI Director
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI vs Human Capability section (unchanged from your version) */}
        {/* ... keep the rest of your sections here if you want ... */}

        {/* Sources */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="space-y-3 text-sm">
            {SOURCES.map(s => (
              <li key={s.id} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-medium underline">
                  {s.title}
                </a>
                {s.note ? <div className="text-gray-600 mt-1">{s.note}</div> : null}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AIvsHumanJobs;
