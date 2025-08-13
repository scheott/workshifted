// src/data/aiAssessmentQuestions.js
// AI-Resistance Assessment — 12 questions (≈ 4–6 minutes)
// Factors used by engine: TRI (Task Routine Index), HJE (Human Judgment & Empathy),
// SCI (Stakeholder/Client Interaction), TAE (Tool Adoption & Exposure).
// Priors: role_family + industry. Extras for personalization: motivation, role_specific_tasks,
// company_size, goal_risk_scenario, goal_income_vs_security.
// NOTE: Kept to 12 by adding company_size and removing the second HJE item.

export const aiAssessmentQuestions = [
  // ── A. Opening context / tone targeting (personalization only) ───────────────
  {
    id: "motivation",
    section: "intro",
    category: "motivation",
    type: "single-choice",
    required: true,
    question: "What brought you here today?",
    options: [
      { value: "concerned", label: "I'm worried AI might affect my job" },
      { value: "proactive", label: "I want to stay ahead of workplace changes" },
      { value: "curious", label: "Just curious about AI and careers" },
      { value: "stuck", label: "Feeling stuck and looking for direction" }
    ],
    scoring: { factor: "motivation" } // personalize copy; do not affect risk
  },

  // ── B. Priors for role × industry exposure (engine lookup) ───────────────────
  {
    id: "profile_role_family",
    section: "profile",
    category: "role_family",
    type: "single-choice",
    required: true,
    question: "Which best describes your current role?",
    options: [
      { value: "analyst", label: "Analyst / Data / BI" },
      { value: "project_manager", label: "Project / Program Manager" },
      { value: "product", label: "Product Manager / Product Owner" },
      { value: "marketing", label: "Marketing / Growth" },
      { value: "sales", label: "Sales / Business Development" },
      { value: "cs_am", label: "Customer Success / Account Management" },
      { value: "revops", label: "Revenue Operations / Sales Operations" },
      { value: "finance", label: "Finance / Accounting / FP&A" },
      { value: "operations", label: "Operations / Supply Chain" },
      { value: "admin", label: "Administrative / Support" },
      { value: "hr", label: "People / HR / Recruiting" },
      { value: "management", label: "Team Lead / Manager / Director" },
      { value: "consultant", label: "Consultant / Advisory / Strategy" },
      { value: "design", label: "UX/UI / Creative / Design" },
      { value: "legal", label: "Legal / Compliance / Risk" },
      { value: "content", label: "Content / Communications / PR" },
      { value: "engineer_frontend", label: "Software Engineer / Developer" },
      { value: "engineer_data", label: "Data Engineer / Data Scientist" },
      { value: "devops", label: "DevOps / Infrastructure / Platform" },
      { value: "qa_testing", label: "QA / Testing / Technical Support" },
      { value: "other", label: "Other" }
    ],
    scoring: { factor: "prior_role_family" }
  },
  {
    id: "profile_industry",
    section: "profile",
    category: "industry",
    type: "single-choice",
    required: true,
    question: "Which industry are you primarily in?",
    options: [
      { value: "tech", label: "Technology / Software" },
      { value: "finance", label: "Banking / Finance / Insurance" },
      { value: "healthcare", label: "Healthcare / Life Sciences" },
      { value: "prof_services", label: "Professional Services / Consulting / Legal" },
      { value: "manufacturing", label: "Manufacturing / Industrial" },
      { value: "retail", label: "Retail / eCommerce / CPG" },
      { value: "media", label: "Media / Publishing / Entertainment" },
      { value: "real_estate", label: "Real Estate / Property" },
      { value: "public", label: "Government / Nonprofit / Education" },
      { value: "other", label: "Other" }
    ],
    scoring: { factor: "prior_industry" }
  },

  // OPTIONAL but recommended (personalization only). Kept total at 12 by dropping a second HJE item.
  {
    id: "company_size",
    section: "profile",
    category: "company_size",
    type: "single-choice",
    required: true,
    question: "What's your company size?",
    options: [
      { value: "startup", label: "Startup (under 50 people)" },
      { value: "small", label: "Small company (50–200)" },
      { value: "medium", label: "Medium company (200–1,000)" },
      { value: "large", label: "Large company (1,000+)" },
      { value: "enterprise", label: "Enterprise (10,000+)" }
    ],
    scoring: { factor: "company_size" } // DO NOT feed into risk; use to tailor paths & plan
  },

  // ── C. Role context (guides path selection & copy) ───────────────────────────
  {
    id: "role_specific_tasks",
    section: "profile",
    category: "role_context",
    type: "single-choice",
    required: true,
    question: "Which best describes your main daily work?",
    options: [
      { value: "reports_data", label: "Creating reports, analyzing data, tracking metrics" },
      { value: "projects_coord", label: "Coordinating projects, managing timelines, organizing teams" },
      { value: "client_facing", label: "Client meetings, sales calls, customer support" },
      { value: "creative_strategy", label: "Creating content, designing strategies, solving problems" },
      { value: "process_admin", label: "Following processes, administrative tasks, compliance" },
      { value: "research_analysis", label: "Research, writing, documentation, knowledge work" }
    ],
    scoring: { factor: "role_specific_tasks" } // influences evolution paths; not risk directly
  },

  // ── D. Task Routine Index (TRI) — 2 items ────────────────────────────────────
  {
    id: "tri_pct_delegate",
    section: "tasks",
    category: "tri",
    type: "slider",
    required: true,
    question:
      "What percentage of your week could someone else do if they had your exact instructions?",
    min: 0,
    max: 100,
    step: 5,
    helper: "Estimate how much of your work is repeatable with clear steps.",
    scoring: { factor: "tri", normalize: "divideBy100" } // 0..1
  },
  {
    id: "tri_could_ai_do_30",
    section: "tasks",
    category: "tri",
    type: "likert5",
    required: true,
    question:
      "If set up correctly, could 30%+ of your current tasks be handled by today’s basic AI/automation?",
    anchors: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
    scoring: { factor: "tri", map: { 1: 0.0, 2: 0.2, 3: 0.4, 4: 0.7, 5: 1.0 } }
  },

  // ── E. Human Judgment & Empathy (HJE) — 1 item ──────────────────────────────
  {
    id: "hje_empathy_calls",
    section: "judgment",
    category: "hje",
    type: "likert5",
    required: true,
    question:
      "How often do you make decisions where context or emotions meaningfully affect the right answer?",
    anchors: ["Never", "Rarely", "Sometimes", "Often", "Very often"],
    scoring: { factor: "hje", map: { 1: 0.0, 2: 0.25, 3: 0.5, 4: 0.75, 5: 1.0 } }
  },

  // ── F. Stakeholder / Client Interaction (SCI) — 1 item ───────────────────────
  {
    id: "sci_hours_live",
    section: "stakeholders",
    category: "sci",
    type: "single-choice",
    required: true,
    question:
      "About how many hours per week are live conversations with clients, executives, or cross-functional partners?",
    options: [
      { value: "0", label: "0 hrs", map: 0.0 },
      { value: "1_3", label: "1–3 hrs", map: 0.25 },
      { value: "4_6", label: "4–6 hrs", map: 0.5 },
      { value: "7_10", label: "7–10 hrs", map: 0.75 },
      { value: "10_plus", label: "10+ hrs", map: 1.0 }
    ],
    scoring: { factor: "sci", fromOptionMap: true }
  },

  // ── G. Tool Adoption & Exposure (TAE) — 1 item ───────────────────────────────
  {
    id: "tae_usage_level",
    section: "tools",
    category: "tae",
    type: "single-choice",
    required: true,
    question: "How much do you use AI or automation tools in your work today?",
    options: [
      { value: "none", label: "None", map: 0.0 },
      { value: "rare", label: "Rare experiments", map: 0.2 },
      { value: "sometimes", label: "Sometimes for small tasks", map: 0.4 },
      { value: "weekly", label: "Weekly and meaningful", map: 0.6 },
      { value: "daily", label: "Daily and integral", map: 0.8 }
    ],
    helper:
      "Includes tools like ChatGPT/Copilot, Zapier/Make, dbt/SQL automations, BI auto-insights, CRM workflows.",
    scoring: { factor: "tae", fromOptionMap: true }
  },

  // ── H. Goals & Preference (path pacing & tone; not risk) — 2 items ───────────
  {
    id: "goal_risk_scenario",
    section: "goals",
    category: "risk_tolerance",
    type: "single-choice",
    required: true,
    question: "Which sounds more appealing?",
    options: [
      { value: "safe", label: "Small improvements to my current role over 6–12 months" },
      { value: "moderate", label: "Learning new skills that could lead to a promotion" },
      { value: "bold", label: "Positioning myself as the 'AI expert' on my team" }
    ],
    scoring: { factor: "goal_risk_scenario" } // influences path aggressiveness & plan pacing
  },
  {
    id: "goal_income_security",
    section: "goals",
    category: "preference",
    type: "slider",
    required: true,
    min: 0,
    max: 100,
    step: 5,
    question: "Right now, what matters more to you?",
    leftLabel: "Learning new skills to advance my career",
    rightLabel: "Staying secure in my current role",
    scoring: { factor: "goal_income_vs_security", normalize: "divideBy100" }
  }
];

// Engine notes:
// - Compute TRI/HJE/SCI/TAE as the average of their items (clip 0..1).
// - Suggested risk formula:
//     risk = 0.45*TRI + 0.22*PRIOR(role×industry) + 0.13*TAE - 0.10*HJE - 0.10*SCI
//     score = Math.round(100 * clamp01(risk))
// - Use motivation + role_specific_tasks + company_size + goal_risk_scenario + income_vs_security to tailor
//   evolution paths, plan pacing, and result messaging (do NOT include them in risk).
