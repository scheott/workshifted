// src/data/aiSkillsDatabase.js
// Role-based AI-resilient skills and human+AI hybrid capabilities
// Keys match your role values exactly.

export const AI_SKILLS_DATABASE = {
  // ===== Marketing / Growth =====
  marketing: {
    aiResistantSkills: [
      "Creative strategy & brand thinking",
      "Stakeholder relationship management",
      "Campaign optimization & testing",
      "Cross-functional collaboration",
      "Brand voice, positioning & messaging",
      "Market psychology & consumer behavior",
      "Ethical persuasion & narrative design",
      "Budget prioritization & channel mix judgment"
    ],
    hybridSkills: [
      "AI prompt engineering for content & ads",
      "AI-assisted SEO research & content briefs",
      "Attribution analysis with AI-driven modeling",
      "Human–AI creative workflows (concept → iterate → refine)",
      "Predictive campaign planning & lift testing with AI",
      "AI tool evaluation, governance & content QA"
    ]
  },

  // ===== Analyst / Data / BI =====
  analyst: {
    aiResistantSkills: [
      "Problem framing & hypothesis-driven analysis",
      "Statistical reasoning & experiment design",
      "Data storytelling for non-technical audiences",
      "Domain knowledge & business acumen",
      "KPI design, measurement & tradeoff judgment",
      "Stakeholder management & requirements elicitation",
      "Data ethics, privacy & bias awareness"
    ],
    hybridSkills: [
      "NL → SQL prompting & warehouse copilots",
      "AI-assisted EDA, feature discovery & anomaly triage",
      "Dashboard narration & auto-insight validation",
      "Causal inference checks with AI support",
      "Forecasting with AutoML + human oversight",
      "Data quality agents & governance workflows with AI"
    ]
  },

  // ===== Project / Program Manager =====
  project_manager: {
    aiResistantSkills: [
      "Stakeholder alignment & expectation setting",
      "Risk/issue management & escalation",
      "Dependency mapping & critical path control",
      "Change management & communications",
      "Negotiation & conflict resolution",
      "Facilitation & decision-making under ambiguity"
    ],
    hybridSkills: [
      "AI-generated status summaries & RAID logs",
      "Meeting transcription → actions/owners with AI",
      "Backlog grooming & estimation using historical data",
      "AI-assisted resource planning & scenario modeling",
      "Process mining basics to remove bottlenecks",
      "Template libraries & PM playbooks with AI"
    ]
  },

  // ===== Product Manager / Owner =====
  product: {
    aiResistantSkills: [
      "Product sense & problem selection",
      "Customer empathy & discovery interviewing",
      "Prioritization, tradeoffs & roadmap storytelling",
      "Experimentation strategy & success criteria",
      "Cross-functional leadership & influence without authority",
      "Outcome thinking vs. output thinking"
    ],
    hybridSkills: [
      "PRD/user stories drafting with AI (human review)",
      "Feedback clustering & VoC synthesis with LLMs",
      "AI-assisted opportunity sizing & scenario trees",
      "Telemetry schema & event design with AI checks",
      "Pricing/packaging simulations with AI",
      "AI ethics, safety & guardrail definition for features"
    ]
  },

  // ===== Sales / Business Development =====
  sales: {
    aiResistantSkills: [
      "Discovery & qualification (business pain → value)",
      "Relationship building & trust",
      "Executive presence & storytelling",
      "Negotiation & objection handling",
      "Territory strategy & account planning",
      "Multi-threading & consensus creation"
    ],
    hybridSkills: [
      "AI-personalized outreach & call prep",
      "Conversation intelligence for coaching & next steps",
      "Proposal/quote drafting with AI (accuracy review)",
      "Deal risk signals & forecasting with AI",
      "Competitive research using citational AI",
      "CRM hygiene automations & copilot usage"
    ]
  },

  // ===== Customer Success / Account Management =====
  cs_am: {
    aiResistantSkills: [
      "Empathy, active listening & de-escalation",
      "Outcome-driven success planning",
      "Renewal strategy & executive alignment",
      "Change management & adoption playbooks",
      "Value realization storytelling",
      "Cross-functional coordination"
    ],
    hybridSkills: [
      "AI-powered health scoring & churn signals",
      "QBR/EBR deck drafting with AI + data checks",
      "Knowledge-base gap spotting & article drafts with AI",
      "Incident comms & timeline summaries via AI",
      "Usage pattern analysis & play trigger design",
      "Renewal/risk trackers auto-updated by AI"
    ]
  },

  // ===== Revenue Ops / Sales Ops =====
  revops: {
    aiResistantSkills: [
      "Systems thinking across GTM stack",
      "Data governance & pipeline integrity",
      "Comp & routing design tradeoffs",
      "Change enablement & process design",
      "Executive communication of GTM insights"
    ],
    hybridSkills: [
      "AI-assisted lead scoring & ICP refinement",
      "Forecast reconciliation & risk surfacing",
      "Playbook generation & enforcement with AI",
      "ETL automations & enrichment orchestration",
      "Territory/coverage simulations with AI",
      "CRM copilot rules & guardrails"
    ]
  },

  // ===== Finance / Accounting / FP&A =====
  finance: {
    aiResistantSkills: [
      "Accounting judgment (GAAP/IFRS) & controls",
      "Scenario analysis & capital allocation",
      "Cash flow thinking & working capital management",
      "Board/executive-ready narrative building",
      "Risk management & compliance",
      "Cross-functional business partnering"
    ],
    hybridSkills: [
      "Excel Copilot for modeling & commentary drafting",
      "Variance analysis with AI anomaly detection",
      "Close/reconciliation workflows with AI checks",
      "Driver-based forecasting with AutoML + review",
      "Contract/cost analysis via AI (human validation)",
      "Finance data governance with AI monitors"
    ]
  },

  // ===== Operations / Supply Chain =====
  operations: {
    aiResistantSkills: [
      "Process design & continuous improvement (Lean)",
      "Capacity planning & constraint management",
      "Vendor management & negotiation",
      "Quality management & compliance",
      "Operational risk & contingency planning",
      "Service design & SLA ownership"
    ],
    hybridSkills: [
      "Process mining & digital twin simulations",
      "Demand forecasting with AI + human overrides",
      "RPA oversight & exception handling",
      "Inventory optimization with AI signals",
      "Workforce scheduling with AI assist",
      "Control tower dashboards with AI alerts"
    ]
  },

  // ===== Administrative / Support =====
  admin: {
    aiResistantSkills: [
      "Professional judgment & discretion",
      "Prioritization & calendar triage",
      "Concise communication & anticipation of needs",
      "Vendor/event coordination",
      "Documentation & record accuracy",
      "Hospitality & culture enablement"
    ],
    hybridSkills: [
      "AI scheduling assistants & travel planning",
      "Doc/template creation with AI",
      "Meeting notes → tasks & follow-ups via AI",
      "Inbox triage & routing with AI rules",
      "Form automation & approvals with AI",
      "Basic data cleanup with AI copilots"
    ]
  },

  // ===== People / HR / Recruiting =====
  hr: {
    aiResistantSkills: [
      "Emotional intelligence & empathy",
      "Complex conflict resolution & mediation",
      "Organizational design & workforce planning",
      "DEI literacy & inclusive practices",
      "Policy development & change enablement",
      "Ethics & compliance judgment"
    ],
    hybridSkills: [
      "AI-augmented job descriptions & structured interviews",
      "Screening/scheduling automations (bias-monitored)",
      "Skills taxonomy & role mapping with AI",
      "Engagement pulse analysis with AI + privacy",
      "Learning path curation with AI recommendations",
      "HR analytics storylines with AI visuals"
    ]
  },

  // ===== Team Lead / Manager / Director =====
  management: {
    aiResistantSkills: [
      "Vision setting & strategy cascade",
      "Coaching, feedback & performance management",
      "Decision-making under uncertainty",
      "Culture building & psychological safety",
      "Prioritization & portfolio balancing",
      "Ethical leadership & accountability"
    ],
    hybridSkills: [
      "AI-assisted meeting summaries & action tracking",
      "Org health signals & sentiment synthesis (privacy-aware)",
      "Capacity/roadmap simulations using AI",
      "OKR progress rollups via AI",
      "Talent calibration support with structured prompts",
      "Change narratives & comms drafting with AI"
    ]
  },

  // ===== Consultant / Advisory / Strategy =====
  consultant: {
    aiResistantSkills: [
      "MECE problem structuring & issue trees",
      "Client discovery & stakeholder alignment",
      "Storylining & executive communications",
      "Quant/qual synthesis & insight generation",
      "Change management & capability building",
      "Ethics & confidentiality judgment"
    ],
    hybridSkills: [
      "Citational AI research & source triangulation",
      "Scenario modeling & sensitivity analysis with AI",
      "Deck drafting & visualization with AI tools",
      "Process mining diagnostics & opportunities sizing",
      "Benchmarks & comps with AI sanity checks",
      "Proposal/SoW generation with guardrails"
    ]
  },

  // ===== UX/UI / Creative / Design =====
  design: {
    aiResistantSkills: [
      "User research & synthesis (interviews, usability)",
      "Information architecture & interaction patterns",
      "Visual hierarchy, typography & composition",
      "Accessibility & inclusive design judgment",
      "Design critique & rationale communication",
      "Design system stewardship"
    ],
    hybridSkills: [
      "AI-assisted wireframing & content-first design",
      "UX writing prompts & variant exploration",
      "Generative imagery for moodboards (policy-aware)",
      "Token extraction & handoff documentation with AI",
      "Insight clustering from feedback with LLMs",
      "Rapid prototyping with AI agents"
    ]
  },

  // ===== Legal / Compliance / Risk =====
  legal: {
    aiResistantSkills: [
      "Legal reasoning & precedent analysis",
      "Risk assessment & negotiation",
      "Policy interpretation & counsel",
      "Regulatory strategy & compliance design",
      "Ethics & confidentiality",
      "Crisis response & remediation planning"
    ],
    hybridSkills: [
      "Contract review triage with AI (human validation)",
      "E-discovery prioritization & de-duplication with AI",
      "Clause comparison & playbook drafting via AI",
      "Regulatory horizon scanning with citational AI",
      "Policy/template generation with guardrails",
      "Matter summaries & exec briefings via AI"
    ]
  },

  // ===== Content / Communications / PR =====
  content: {
    aiResistantSkills: [
      "Editorial judgment & storytelling",
      "Brand voice guardianship",
      "Interviewing & source management",
      "Fact-checking & standards",
      "Crisis comms & message discipline",
      "Omnichannel planning & cadence"
    ],
    hybridSkills: [
      "LLM outlining & first-draft acceleration (human edits)",
      "SEO strategy with AI-assisted research",
      "Repurposing long-form → clips/posts via AI",
      "Style guide enforcement with AI checkers",
      "Localization & variant generation with AI",
      "Analytics-informed iteration using AI insights"
    ]
  },

  // ===== Software Engineer / Frontend (and general app dev) =====
  engineer_frontend: {
    aiResistantSkills: [
      "System design & architectural tradeoffs",
      "Debugging, performance profiling & reliability",
      "Accessibility & security best practices",
      "Code review judgment & maintainability",
      "API design & contract negotiation",
      "Product/UX collaboration"
    ],
    hybridSkills: [
      "Copilot-style codegen & refactors (review discipline)",
      "Test generation & coverage guidance with AI",
      "Automated migration assistance (e.g., framework upgrades)",
      "AI linting & static analysis triage",
      "Playwright/Cypress test authoring with AI",
      "Docs & ADR drafting with AI"
    ]
  },

  // ===== Data Engineer / Data Scientist =====
  engineer_data: {
    aiResistantSkills: [
      "Data modeling & warehouse architecture",
      "Pipeline reliability, observability & SLAs",
      "Statistics & experimental rigor",
      "ML problem framing & metric selection",
      "Cost/perf tradeoffs across storage/compute",
      "Data governance & privacy by design"
    ],
    hybridSkills: [
      "Prompt-to-SQL & catalog copilots",
      "AutoML selection/validation & drift monitoring",
      "Feature store management with AI helpers",
      "Vector/embeddings pipelines & retrieval patterns",
      "AI-assisted data quality tests & lineage mapping",
      "Notebook → production hardening with AI"
    ]
  },

  // ===== DevOps / Infrastructure / Platform =====
  devops: {
    aiResistantSkills: [
      "Reliability engineering & SLO design",
      "Incident command & communication",
      "Capacity planning & cost optimization",
      "Networking, security & compliance judgment",
      "Observability strategy & runbook design",
      "Platform enablement & developer experience"
    ],
    hybridSkills: [
      "AIOps for anomaly detection & root-cause hints",
      "IaC codegen/review with AI (Terraform, etc.)",
      "Pipeline YAMLs & release notes via AI",
      "Automated incident timelines & postmortems",
      "Threat intel triage with AI (signals → actions)",
      "Self-service portals with AI assistants"
    ]
  },

  // ===== QA / Testing / Technical Support =====
  qa_testing: {
    aiResistantSkills: [
      "Risk-based test strategy & prioritization",
      "Exploratory testing & bug investigation",
      "Repro steps clarity & communication",
      "Test data design & environment control",
      "Quality advocacy & release readiness calls",
      "Usability & accessibility testing judgment"
    ],
    hybridSkills: [
      "AI-assisted test case generation & maintenance",
      "Visual regression & diff analysis with AI",
      "Log/trace summarization for defect triage",
      "Property-based & fuzz testing with AI help",
      "Synthetic data generation with guardrails",
      "Bug clustering & pattern detection via AI"
    ]
  },

  // ===== OTHER / GENERAL CAREER RESILIENCE =====
  other: {
    aiResistantSkills: [
      "Adaptability & continuous learning mindset",
      "Critical thinking & first-principles problem solving",
      "Ethical reasoning & accountability",
      "Collaboration & communication",
      "Time management & self-direction",
      "Domain expertise in chosen field"
    ],
    hybridSkills: [
      "Prompt literacy & retrieval-augmented workflows",
      "Personal automation with AI (email, docs, sheets)",
      "Data literacy & basic analytics with AI",
      "Knowledge management & second-brain systems",
      "Tool evaluation, privacy & governance basics",
      "Creating AI playbooks for your role"
    ]
  }
};

export default AI_SKILLS_DATABASE;
