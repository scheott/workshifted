// src/data/evolutionPaths.js
// Evolution path catalog by current role family.
// Each entry describes 3 role-adjacent, AI-resilient paths the user can evolve into.
// The aiRiskEngine consumes these to compute fit %, difficulty, timeline, and 90‑day plans.
//
// Shape per path:
// {
//   title: string,
//   demands: { human_judgment:0..1, stakeholder:0..1, automation_literacy:0..1 },
//   skills: string[]  // lightweight tags used for gap distance (see ROLE_TASK_TAGS below)
//   tools: string[]   // concrete stack to learn/use
//   courses: { title, provider, cost, duration, rating }[]  // short, realistic picks
//   aggressiveness: 'safe' | 'moderate' | 'bold' // used to align with user risk scenario
// }

// ──────────────────────────────────────────────────────────────────────────────
// Tags inferred from the "role_specific_tasks" answer. Keep short & generic.
export const ROLE_TASK_TAGS = {
  reports_data: ["analytics", "sql", "bi"],
  projects_coord: ["pm", "coordination", "change_mgmt"],
  client_facing: ["stakeholder", "sales", "cs"],
  creative_strategy: ["strategy", "content", "creative"],
  process_admin: ["admin", "compliance", "kb"],
  research_analysis: ["research", "writing", "documentation"],
};

// Helper builders
const c = (title, provider, cost, duration, rating) => ({ title, provider, cost, duration, rating });
const courses = (arr) => arr;
const path = (title, demands, skills, tools, courses, aggressiveness = "moderate") =>
  ({ title, demands, skills, tools, courses, aggressiveness });

// ──────────────────────────────────────────────────────────────────────────────
// Role → 3 evolution paths (expand anytime). Keep titles concrete and stacks real.
export const ROLE_PATHS = {
  // ANALYST / DATA / BI
  analyst: [
    path(
      "Automation Analyst",
      { human_judgment: 0.4, stakeholder: 0.5, automation_literacy: 0.7 },
      ["automation", "analytics", "bi"],
      ["Zapier", "Make", "Google Sheets / Excel", "QA checklists"],
      courses([
        c("No‑Code Automation with Zapier & Make", "Udemy", "$19–$49", "6–8h", 4.6),
        c("Excel to Power BI: Dashboards & Automation", "Coursera", "Free/Cert $49", "10–12h", 4.7),
      ]),
      "safe"
    ),
    path(
      "Analytics Engineer (dbt/SQL)",
      { human_judgment: 0.4, stakeholder: 0.4, automation_literacy: 0.8 },
      ["sql", "analytics"],
      ["dbt", "SQL", "Airflow / Prefect"],
      courses([
        c("dbt Fundamentals", "dbt Labs (YouTube)", "Free", "4–6h", 4.7),
        c("Data Pipelines with Airflow", "Udemy", "$19–$49", "6–10h", 4.5),
      ]),
      "moderate"
    ),
    path(
      "AI Ops Coordinator",
      { human_judgment: 0.6, stakeholder: 0.7, automation_literacy: 0.6 },
      ["coordination", "kb", "analytics"],
      ["Prompt library", "Confluence / Notion", "LLM evals"],
      courses([
        c("LLM Evaluation Basics", "DeepLearning.AI", "Free", "3–4h", 4.6),
      ]),
      "safe"
    ),
  ],

  // PROJECT / PROGRAM MANAGER
  project_manager: [
    path(
      "AI Implementation PM",
      { human_judgment: 0.7, stakeholder: 0.8, automation_literacy: 0.5 },
      ["pm", "change_mgmt", "coordination"],
      ["Jira", "Notion", "Risk logs", "Playbooks"],
      courses([
        c("AI for Project Managers", "Coursera", "Free/Cert $49", "8–10h", 4.6),
        c("Change Management Foundations", "LinkedIn Learning", "$", "3–4h", 4.6),
      ]),
      "safe"
    ),
    path(
      "RevOps + Automation PM",
      { human_judgment: 0.6, stakeholder: 0.7, automation_literacy: 0.6 },
      ["pm", "revops", "automation"],
      ["HubSpot / Salesforce", "Zapier", "QA gates"],
      courses([c("RevOps Foundations", "HubSpot Academy", "Free", "4–6h", 4.7)]),
      "moderate"
    ),
    path(
      "Change‑Management Lead (AI)",
      { human_judgment: 0.8, stakeholder: 0.9, automation_literacy: 0.4 },
      ["change_mgmt", "coordination"],
      ["Stakeholder maps", "Comms kits"],
      courses([c("Leading Organizational Change", "Coursera", "Free/Cert $49", "10–12h", 4.7)]),
      "safe"
    ),
  ],

  // PRODUCT MANAGER / PRODUCT OWNER
  product: [
    path(
      "AI Product Manager",
      { human_judgment: 0.7, stakeholder: 0.8, automation_literacy: 0.6 },
      ["strategy", "pm", "coordination"],
      ["PRD templates", "LLM test harness", "Experiment logs"],
      courses([c("AI Product Management", "Udacity / YouTube", "Free/$", "6–10h", 4.5)]),
      "bold"
    ),
    path(
      "Experimentation PM (AI)",
      { human_judgment: 0.6, stakeholder: 0.6, automation_literacy: 0.6 },
      ["analytics", "strategy"],
      ["A/B frameworks", "LLM evals"],
      courses([c("Experiment Design & Analysis", "Coursera", "Free/Cert $49", "6–8h", 4.6)]),
      "moderate"
    ),
    path(
      "Platform PM – AI Enablement",
      { human_judgment: 0.6, stakeholder: 0.8, automation_literacy: 0.5 },
      ["pm", "coordination", "kb"],
      ["Playbooks", "Enablement kits"],
      courses([]),
      "safe"
    ),
  ],

  // MARKETING / GROWTH
  marketing: [
    path(
      "AI Marketing Strategist",
      { human_judgment: 0.6, stakeholder: 0.7, automation_literacy: 0.6 },
      ["strategy", "content"],
      ["Ads AI", "SEO tooling", "Prompt libs"],
      courses([
        c("AI in Marketing", "Coursera", "Free/Cert $49", "8–10h", 4.6),
        c("Prompting for Copy", "Udemy", "$19–$49", "3–5h", 4.5),
      ]),
      "moderate"
    ),
    path(
      "RevOps Enablement (Content Systems)",
      { human_judgment: 0.5, stakeholder: 0.6, automation_literacy: 0.7 },
      ["revops", "content", "automation"],
      ["HubSpot / Salesforce", "Zapier", "QA"],
      courses([]),
      "safe"
    ),
    path(
      "Content Systems Manager",
      { human_judgment: 0.6, stakeholder: 0.5, automation_literacy: 0.6 },
      ["content", "kb"],
      ["CMS AI", "Confluence / Notion"],
      courses([]),
      "safe"
    ),
  ],

  // SALES / BUSINESS DEVELOPMENT
  sales: [
    path(
      "Sales Automation Specialist",
      { human_judgment: 0.4, stakeholder: 0.6, automation_literacy: 0.7 },
      ["automation", "revops"],
      ["Salesforce / HubSpot", "Sequences", "Zapier"],
      courses([]),
      "moderate"
    ),
    path(
      "Sales Enablement + AI",
      { human_judgment: 0.6, stakeholder: 0.8, automation_literacy: 0.5 },
      ["enablement", "content"],
      ["Playbooks", "Prompt libs"],
      courses([]),
      "safe"
    ),
    path(
      "Partner / Ecosystem Manager",
      { human_judgment: 0.7, stakeholder: 0.8, automation_literacy: 0.4 },
      ["stakeholder"],
      ["Alliances", "Co‑marketing"],
      courses([]),
      "safe"
    ),
  ],

  // CUSTOMER SUCCESS / ACCOUNT MANAGEMENT
  cs_am: [
    path(
      "CS Ops (AI Routing)",
      { human_judgment: 0.5, stakeholder: 0.6, automation_literacy: 0.7 },
      ["cs", "automation"],
      ["Zendesk / Intercom", "Chatbots", "KB"],
      courses([]),
      "moderate"
    ),
    path(
      "Proactive Retention Analyst",
      { human_judgment: 0.6, stakeholder: 0.6, automation_literacy: 0.6 },
      ["analytics", "cs"],
      ["Health scoring", "Playbooks"],
      courses([]),
      "safe"
    ),
    path(
      "Knowledge Base / Prompt Librarian",
      { human_judgment: 0.6, stakeholder: 0.5, automation_literacy: 0.5 },
      ["kb", "content"],
      ["Notion / Confluence"],
      courses([]),
      "safe"
    ),
  ],

  // REVENUE OPERATIONS / SALES OPERATIONS
  revops: [
    path(
      "RevOps Automation Architect",
      { human_judgment: 0.5, stakeholder: 0.6, automation_literacy: 0.8 },
      ["revops", "automation"],
      ["Salesforce / HubSpot", "dbt", "Zapier"],
      courses([]),
      "bold"
    ),
    path(
      "GTM Data Architect",
      { human_judgment: 0.5, stakeholder: 0.6, automation_literacy: 0.7 },
      ["sql", "analytics"],
      ["BI", "dbt"],
      courses([]),
      "moderate"
    ),
    path(
      "Lifecycle Ops Lead",
      { human_judgment: 0.6, stakeholder: 0.7, automation_literacy: 0.6 },
      ["coordination", "revops"],
      ["Playbooks"],
      courses([]),
      "safe"
    ),
  ],

  // FINANCE / ACCOUNTING / FP&A
  finance: [
    path(
      "FP&A Automation Lead",
      { human_judgment: 0.5, stakeholder: 0.6, automation_literacy: 0.7 },
      ["analytics", "automation"],
      ["Power BI", "VBA / SQL", "Zapier"],
      courses([]),
      "moderate"
    ),
    path(
      "Strategic Finance Partner",
      { human_judgment: 0.7, stakeholder: 0.8, automation_literacy: 0.5 },
      ["stakeholder", "storytelling"],
      ["Decks", "Narratives"],
      courses([]),
      "safe"
    ),
    path(
      "Data Governance Analyst",
      { human_judgment: 0.6, stakeholder: 0.6, automation_literacy: 0.6 },
      ["governance", "kb"],
      ["Catalogs", "Policies"],
      courses([]),
      "safe"
    ),
  ],

  // OPERATIONS / SUPPLY CHAIN
  operations: [
    path(
      "Process Automation Lead",
      { human_judgment: 0.5, stakeholder: 0.6, automation_literacy: 0.8 },
      ["automation", "pm"],
      ["RPA / Zapier", "Checklists"],
      courses([]),
      "moderate"
    ),
    path(
      "AI Operations Analyst",
      { human_judgment: 0.5, stakeholder: 0.6, automation_literacy: 0.6 },
      ["analytics"],
      ["BI", "Ops KPIs"],
      courses([]),
      "safe"
    ),
    path(
      "Quality & Continuous Improvement (AI)",
      { human_judgment: 0.6, stakeholder: 0.6, automation_literacy: 0.5 },
      ["qa", "change_mgmt"],
      ["SPC", "Audits"],
      courses([]),
      "safe"
    ),
  ],

  // ADMINISTRATIVE / SUPPORT
  admin: [
    path(
      "Workflow Automation Specialist",
      { human_judgment: 0.4, stakeholder: 0.5, automation_literacy: 0.8 },
      ["automation", "kb"],
      ["Zapier", "Make", "Docs AI"],
      courses([]),
      "moderate"
    ),
    path(
      "Knowledge Base Curator",
      { human_judgment: 0.5, stakeholder: 0.5, automation_literacy: 0.6 },
      ["kb"],
      ["Notion", "Confluence"],
      courses([]),
      "safe"
    ),
    path(
      "CX Ops (AI Routing)",
      { human_judgment: 0.5, stakeholder: 0.6, automation_literacy: 0.6 },
      ["cs", "automation"],
      ["IVR", "Chatbots"],
      courses([]),
      "safe"
    ),
  ],

  // HR / PEOPLE / RECRUITING
  hr: [
    path(
      "Talent Ops Automation",
      { human_judgment: 0.5, stakeholder: 0.6, automation_literacy: 0.7 },
      ["automation", "kb"],
      ["ATS", "Zapier"],
      courses([]),
      "moderate"
    ),
    path(
      "People Analytics Partner",
      { human_judgment: 0.6, stakeholder: 0.7, automation_literacy: 0.5 },
      ["analytics", "storytelling"],
      ["BI", "Survey tools"],
      courses([]),
      "safe"
    ),
    path(
      "L&D – AI Curriculum",
      { human_judgment: 0.6, stakeholder: 0.7, automation_literacy: 0.5 },
      ["enablement", "kb"],
      ["Playbooks", "Training kits"],
      courses([]),
      "safe"
    ),
  ],

  // MANAGEMENT / LEADERSHIP
  management: [
    path(
      "AI Adoption Lead",
      { human_judgment: 0.8, stakeholder: 0.9, automation_literacy: 0.5 },
      ["change_mgmt", "coordination"],
      ["Comms kits", "Governance"],
      courses([]),
      "safe"
    ),
    path(
      "Process Improvement + Automation",
      { human_judgment: 0.6, stakeholder: 0.7, automation_literacy: 0.6 },
      ["pm", "automation"],
      ["Lean", "RPA"],
      courses([]),
      "moderate"
    ),
    path(
      "Data‑Driven Ops Manager",
      { human_judgment: 0.6, stakeholder: 0.7, automation_literacy: 0.6 },
      ["analytics", "storytelling"],
      ["BI", "Scorecards"],
      courses([]),
      "safe"
    ),
  ],

  // CONSULTANT / ADVISORY / STRATEGY
  consultant: [
    path(
      "AI Strategy Consultant",
      { human_judgment: 0.8, stakeholder: 0.8, automation_literacy: 0.5 },
      ["research", "storytelling", "stakeholder"],
      ["Frameworks", "Discovery templates"],
      courses([]),
      "bold"
    ),
    path(
      "Automation Discovery Consultant",
      { human_judgment: 0.7, stakeholder: 0.8, automation_literacy: 0.6 },
      ["automation", "pm"],
      ["Process mapping", "Zapier / RPA"],
      courses([]),
      "moderate"
    ),
    path(
      "Change Management & Enablement",
      { human_judgment: 0.8, stakeholder: 0.9, automation_literacy: 0.4 },
      ["change_mgmt", "enablement"],
      ["Comms kits"],
      courses([]),
      "safe"
    ),
  ],

  // UX/UI / CREATIVE / DESIGN
  design: [
    path(
      "AI Design Systems Manager",
      { human_judgment: 0.6, stakeholder: 0.6, automation_literacy: 0.6 },
      ["design", "kb"],
      ["Figma", "Design tokens", "Prompt ops"],
      courses([]),
      "moderate"
    ),
    path(
      "Content Design & Prompt Ops",
      { human_judgment: 0.6, stakeholder: 0.6, automation_literacy: 0.6 },
      ["content", "prompting"],
      ["LLM style guides"],
      courses([]),
      "safe"
    ),
    path(
      "Research Ops (AI)",
      { human_judgment: 0.7, stakeholder: 0.7, automation_literacy: 0.5 },
      ["research", "kb"],
      ["Insights repos"],
      courses([]),
      "safe"
    ),
  ],

  // LEGAL / COMPLIANCE / RISK
  legal: [
    path(
      "AI‑Augmented Compliance Analyst",
      { human_judgment: 0.7, stakeholder: 0.6, automation_literacy: 0.5 },
      ["compliance", "kb"],
      ["Policy hubs", "LLM QC"],
      courses([]),
      "safe"
    ),
    path(
      "Contract Automation Lead",
      { human_judgment: 0.6, stakeholder: 0.6, automation_literacy: 0.6 },
      ["automation", "kb"],
      ["CLM", "Playbooks"],
      courses([]),
      "moderate"
    ),
    path(
      "AI Policy & Governance",
      { human_judgment: 0.8, stakeholder: 0.7, automation_literacy: 0.4 },
      ["governance"],
      ["Risk frameworks"],
      courses([]),
      "safe"
    ),
  ],

  // CONTENT / COMMS / PR
  content: [
    path(
      "AI Editorial Strategist",
      { human_judgment: 0.6, stakeholder: 0.6, automation_literacy: 0.6 },
      ["content", "strategy"],
      ["CMS AI", "Prompt libs"],
      courses([]),
      "moderate"
    ),
    path(
      "Content Systems Lead",
      { human_judgment: 0.6, stakeholder: 0.5, automation_literacy: 0.6 },
      ["content", "kb"],
      ["Notion / Confluence"],
      courses([]),
      "safe"
    ),
    path(
      "Comms Ops (AI‑assist)",
      { human_judgment: 0.7, stakeholder: 0.7, automation_literacy: 0.5 },
      ["communications", "stakeholder"],
      ["Playbooks"],
      courses([]),
      "safe"
    ),
  ],

  // SOFTWARE ENGINEER / FRONTEND
  engineer_frontend: [
    path(
      "AI‑Augmented Developer",
      { human_judgment: 0.4, stakeholder: 0.4, automation_literacy: 0.8 },
      ["code", "automation"],
      ["OpenAI / Anthropic API", "LangChain", "pgvector"],
      courses([
        c("Build a RAG App", "YouTube", "Free", "2–4h", 4.6),
        c("OpenAI API for Devs", "Udemy", "$19–$49", "4–6h", 4.6),
      ]),
      "bold"
    ),
    path(
      "AI‑Assisted Product Developer",
      { human_judgment: 0.6, stakeholder: 0.6, automation_literacy: 0.7 },
      ["code", "strategy"],
      ["Eval harness", "Prompt libs"],
      courses([]),
      "moderate"
    ),
    path(
      "UI Systems with AI",
      { human_judgment: 0.5, stakeholder: 0.5, automation_literacy: 0.6 },
      ["design", "code"],
      ["Design tokens", "Copilot"],
      courses([]),
      "safe"
    ),
  ],

  // DATA ENGINEER / DATA SCIENTIST
  engineer_data: [
    path(
      "AI Infrastructure Specialist (MLOps)",
      { human_judgment: 0.5, stakeholder: 0.6, automation_literacy: 0.9 },
      ["code", "mlops"],
      ["MLflow / Weights & Biases", "KServe / Triton", "Evidently"],
      courses([]),
      "bold"
    ),
    path(
      "Data Products with AI",
      { human_judgment: 0.6, stakeholder: 0.6, automation_literacy: 0.7 },
      ["analytics", "sql"],
      ["dbt", "Feature stores"],
      courses([]),
      "moderate"
    ),
    path(
      "Model Eval & Governance",
      { human_judgment: 0.7, stakeholder: 0.7, automation_literacy: 0.6 },
      ["governance", "evals"],
      ["Risk frameworks"],
      courses([]),
      "safe"
    ),
  ],

  // DEVOPS / INFRASTRUCTURE / PLATFORM
  devops: [
    path(
      "AI Platform Engineer",
      { human_judgment: 0.5, stakeholder: 0.6, automation_literacy: 0.9 },
      ["platform", "code"],
      ["Kubernetes", "KServe", "Observability"],
      courses([]),
      "bold"
    ),
    path(
      "LLMOps SRE",
      { human_judgment: 0.5, stakeholder: 0.6, automation_literacy: 0.8 },
      ["sre", "mlops"],
      ["Tracing", "Cost guardrails"],
      courses([]),
      "moderate"
    ),
    path(
      "Vector Platform Owner",
      { human_judgment: 0.5, stakeholder: 0.5, automation_literacy: 0.8 },
      ["platform"],
      ["pgvector / Pinecone"],
      courses([]),
      "moderate"
    ),
  ],

  // QA / TESTING / TECH SUPPORT
  qa_testing: [
    path(
      "AI QA Lead",
      { human_judgment: 0.6, stakeholder: 0.6, automation_literacy: 0.7 },
      ["qa", "evals"],
      ["Playwright / Cypress", "Ragas / DeepEval"],
      courses([]),
      "moderate"
    ),
    path(
      "Automation Testing Architect",
      { human_judgment: 0.5, stakeholder: 0.5, automation_literacy: 0.8 },
      ["qa", "automation"],
      ["CI gates", "Guardrails"],
      courses([]),
      "moderate"
    ),
    path(
      "Safety Evaluation Specialist",
      { human_judgment: 0.7, stakeholder: 0.6, automation_literacy: 0.6 },
      ["evals", "governance"],
      ["Red‑teaming", "Incident playbooks"],
      courses([]),
      "safe"
    ),
  ],

  // UX WRITING / COMMS already under content; Designers under design.

  // FALLBACK for unlisted roles
  other: [
    path(
      "Automation Coordinator",
      { human_judgment: 0.5, stakeholder: 0.6, automation_literacy: 0.6 },
      ["automation", "coordination"],
      ["Zapier / Make", "Playbooks"],
      courses([]),
      "moderate"
    ),
    path(
      "Knowledge Ops Manager",
      { human_judgment: 0.6, stakeholder: 0.6, automation_literacy: 0.5 },
      ["kb", "content"],
      ["Notion / Confluence", "Search / Retrieval"],
      courses([]),
      "safe"
    ),
    path(
      "AI Adoption PM",
      { human_judgment: 0.7, stakeholder: 0.8, automation_literacy: 0.5 },
      ["pm", "change_mgmt"],
      ["Comms kits", "Governance"],
      courses([]),
      "safe"
    ),
  ],
};
