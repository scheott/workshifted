// src/data/premiumContent/aiToolsDatabase.js - EXPANDED AI TOOLS
export const AITOOLS_DB = {
  // === CORE / GENERAL AI ASSISTANTS ===
  chatgpt: {
    name: "ChatGPT",
    label: "ChatGPT",
    purpose: "AI assistant for writing, analysis, coding, and complex problem-solving tasks",
    category: "AI Assistant",
    url: "https://chat.openai.com",
    pricing: "Free tier available, $20/month for Plus",
    useCase: {
      analyst: "Draft reports, analyze datasets, prototype models, automate spreadsheet work",
      project_manager: "Create plans, RAID logs, timelines, risk/issue summaries, project comms",
      product: "Spec first drafts, PRDs, user stories, acceptance criteria, impact mapping",
      marketing: "Content ideation, briefs, ad copy, audience research, landing page drafts",
      sales: "Personalized outreach drafts, call prep, objection handling scripts",
      cs_am: "Ticket summaries, response drafting, success plans, renewal prep",
      revops: "Pipeline hygiene scripts, territory logic, playbook drafting",
      finance: "Variance analysis explanations, budget narratives, FP&A commentary",
      operations: "SOPs, checklists, process maps, root-cause writeups",
      admin: "Inbox triage, meeting notes, scheduling messages, documentation",
      hr: "Job descriptions, interview guides, policy drafts",
      management: "Strategy docs, org updates, performance review guidance",
      consultant: "Research briefs, discovery questions, proposal outlines",
      design: "UX writing, persona narratives, heuristic review checklists",
      legal: "Clause explanations (not legal advice), policy redlines, summarization",
      content: "Long-form outlines, social calendars, press angles",
      engineer_frontend: "Component scaffolds, tests, refactors, docstrings",
      engineer_data: "ETL pseudocode, SQL drafting, feature engineering ideas",
      devops: "IaC snippets, runbook outlines, incident postmortem drafts",
      qa_testing: "Test case ideas, bug repro steps, risk-based test plans",
      default: "Writing, analysis, problem-solving, and task automation"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["API", "Browser Extension", "Mobile App"],
    tags: ["ai-assistant", "writing", "analysis", "coding"]
  },

  claude: {
    name: "Claude",
    label: "Claude",
    purpose: "Helpful, concise AI assistant strong at reasoning, writing, and analysis",
    category: "AI Assistant",
    url: "https://claude.ai",
    pricing: "Free tier available, paid Pro plan",
    useCase: {
      product: "Turn messy notes into crisp PRDs and user stories; evaluate product risks",
      consultant: "Synthesize research into POVs; structure proposals and exec summaries",
      content: "High-quality long-form drafts, knowledge base articles, FAQs",
      engineer_frontend: "Explain unfamiliar codebases; draft tests; refactor suggestions",
      default: "Structured drafting, deep analysis, and synthesis of complex info"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["API", "Slack", "Browser"],
    tags: ["assistant", "reasoning", "writing"]
  },

  perplexity: {
    name: "Perplexity",
    label: "Perplexity AI",
    purpose: "Answer engine with cited sources for research and competitive analysis",
    category: "Research",
    url: "https://www.perplexity.ai",
    pricing: "Free tier available, paid Pro plan",
    useCase: {
      analyst: "Rapid desk research with citations for market and trend scans",
      product: "Landscape scans of competitors and analogous solutions",
      consultant: "Quick POV formation with credible sources and quotes",
      legal: "Initial policy/regulatory scans with links (not legal advice)",
      default: "Fact-finding with citations for trustworthy research"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["Browser", "Mobile App"],
    tags: ["research", "search", "citations"]
  },

  microsoft_copilot_365: {
    name: "Microsoft Copilot for 365",
    label: "Copilot (Microsoft 365)",
    purpose: "AI inside Word, Excel, PowerPoint, Outlook, and Teams",
    category: "Productivity Suite",
    url: "https://www.microsoft.com/microsoft-365/copilot",
    pricing: "Add-on subscription (varies by plan)",
    useCase: {
      project_manager: "Create status decks, summarize Teams threads, draft project emails",
      finance: "Excel analysis prompts for forecasts, variance commentary, scenario asks",
      management: "Draft org updates, summarize meetings, prepare decision memos",
      default: "Generate docs, summarize meetings, and speed up email + slides"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["Word", "Excel", "PowerPoint", "Outlook", "Teams"],
    tags: ["productivity", "office", "enterprise-ai"]
  },

  // === PRODUCTIVITY / WORK OS ===
  notion: {
    name: "Notion",
    label: "Notion",
    purpose: "All-in-one workspace combining notes, databases, wikis, and project management",
    category: "Productivity",
    url: "https://notion.so",
    pricing: "Free tier available, $8/month per user for teams",
    useCase: {
      analyst: "Research hub, KPI dashboards, insight logs",
      product: "PRDs, roadmaps, feedback databases",
      operations: "SOPs, runbooks, checklist databases",
      content: "Editorial calendars and asset libraries",
      default: "Note-taking, project management, team collaboration"
    },
    difficulty: "Beginner",
    timeToValue: "1-2 weeks",
    integrations: ["Slack", "Google Drive", "Zapier", "API"],
    tags: ["productivity", "collaboration", "documentation", "database"]
  },

  zapier: {
    name: "Zapier",
    label: "Zapier",
    purpose: "Automation platform connecting 5000+ apps to eliminate repetitive tasks",
    category: "Automation",
    url: "https://zapier.com",
    pricing: "Free tier (100 tasks/month), $19.99/month for Starter",
    useCase: {
      revops: "Auto-enrich leads, route deals, update CRM fields, pipeline alerts",
      marketing: "Feed ads + form leads into CRM, nurture sequences, content workflows",
      operations: "Ticket escalations, procurement approvals, handoffs between tools",
      default: "Connect apps, automate workflows, eliminate manual data entry"
    },
    difficulty: "Intermediate",
    timeToValue: "1-3 days per automation",
    integrations: ["5000+ apps", "Webhooks", "API", "Email Parser"],
    tags: ["automation", "integration", "workflow", "no-code"]
  },

  automation_basic: {
    name: "Make (formerly Integromat)",
    label: "Make",
    purpose: "Visual automation platform for complex multi-step workflows",
    category: "Advanced Automation",
    url: "https://make.com",
    pricing: "Free tier (1000 operations), $9/month for Core",
    useCase: {
      analyst: "Multi-source data prep and reporting pipelines",
      operations: "Cross-system approvals and inventory syncs",
      devops: "Webhook orchestration between CI/CD and alerts",
      default: "Complex automation, data transformation, multi-app workflows"
    },
    difficulty: "Intermediate",
    timeToValue: "3-7 days",
    integrations: ["1000+ apps", "HTTP/API", "Webhooks", "Custom functions"],
    tags: ["automation", "integration", "visual", "advanced"]
  },

  google_workspace: {
    name: "Google Workspace",
    label: "Google Workspace",
    purpose: "Suite of productivity tools with AI features like Smart Compose and data insights",
    category: "Productivity Suite",
    url: "https://workspace.google.com",
    pricing: "$6/month per user for Business Starter",
    useCase: {
      project_manager: "Meeting notes in Docs, schedule optimization in Calendar",
      content: "Drafts in Docs, quick edits, comment resolution",
      admin: "Form-driven intakes into Sheets + automation hooks",
      default: "Email, documents, spreadsheets, video calls with AI enhancements"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["Native Google ecosystem", "Third-party apps", "API access"],
    tags: ["productivity", "collaboration", "ai-enhanced", "cloud"]
  },

  // === DESIGN / CREATIVE ===
  canva: {
    name: "Canva",
    label: "Canva",
    purpose: "Design platform with AI features (Magic Write, Magic Design) for graphics & slides",
    category: "Design",
    url: "https://canva.com",
    pricing: "Free tier available, $12.99/month for Pro",
    useCase: {
      marketing: "Ad creatives, social posts, campaign visuals at scale",
      content: "Thumbnails, blog graphics, one-pagers",
      product: "Quick concept visuals and simple UI mockups",
      default: "Professional graphics, presentations, social media content"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["Google Drive", "Dropbox", "Social Media", "Print Services"],
    tags: ["design", "graphics", "presentation", "marketing"]
  },

  figma_ai: {
    name: "Figma with AI",
    label: "Figma AI",
    purpose: "Generate UI copy, auto-annotate components, and speed up design handoffs",
    category: "Design",
    url: "https://www.figma.com",
    pricing: "Free tier, paid plans for teams",
    useCase: {
      design: "Generate placeholder UX copy, component descriptions, token help",
      product: "Wireframe variations faster, annotate flows for devs",
      engineer_frontend: "Specs + redlines clarity; component intents",
      default: "Faster design exploration and clearer handoffs"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["Plugins", "Dev Mode", "FigJam"],
    tags: ["design", "ux", "ui", "handoff"]
  },

  midjourney: {
    name: "Midjourney",
    label: "Midjourney",
    purpose: "AI-generated images for concepting, mood boards, and visual ideation",
    category: "Creative",
    url: "https://www.midjourney.com",
    pricing: "Paid plans",
    useCase: {
      marketing: "Unique ad concepts and storyboards",
      content: "Hero images, article art, thumbnails",
      design: "Mood boards, visual directions, style studies",
      default: "Rapid visual ideation for campaigns and designs"
    },
    difficulty: "Intermediate",
    timeToValue: "Same day",
    integrations: ["Discord"],
    tags: ["images", "creative", "concepting"]
  },

  // === ANALYTICS / DATA / BI ===
  power_bi: {
    name: "Power BI",
    label: "Power BI",
    purpose: "Business intelligence platform for data visualization and analytics",
    category: "Business Intelligence",
    url: "https://powerbi.microsoft.com",
    pricing: "$10/month per user for Pro",
    useCase: {
      analyst: "Interactive dashboards, KPI tracking, time series & cohort analysis",
      finance: "Budget vs. actuals, cash flow visuals, driver trees",
      management: "Exec dashboards and rollups, board-ready visuals",
      default: "Data visualization, business reporting, analytics dashboards"
    },
    difficulty: "Intermediate",
    timeToValue: "1-2 weeks",
    integrations: ["Excel", "SQL Server", "Azure", "Salesforce", "Google Analytics"],
    tags: ["analytics", "visualization", "business-intelligence", "microsoft"]
  },

  tableau: {
    name: "Tableau",
    label: "Tableau",
    purpose: "Advanced data visualization platform for complex analytical insights",
    category: "Data Visualization",
    url: "https://tableau.com",
    pricing: "$70/month per user for Creator",
    useCase: {
      analyst: "Complex data modeling and storytelling in dashboards",
      operations: "Operational KPIs, supply chain views, SLA monitoring",
      consultant: "Client-ready visual narratives and scenario explorations",
      default: "Advanced data visualization and predictive modeling"
    },
    difficulty: "Advanced",
    timeToValue: "2-4 weeks",
    integrations: ["Salesforce", "AWS", "Google Cloud", "Snowflake", "SQL databases"],
    tags: ["analytics", "visualization", "enterprise", "advanced"]
  },

  bigquery_gemini: {
    name: "BigQuery with Gemini",
    label: "BigQuery + Gemini",
    purpose: "Ask data questions in natural language and generate SQL for BigQuery",
    category: "Data",
    url: "https://cloud.google.com/bigquery",
    pricing: "Pay-as-you-go (BigQuery) + AI features per plan",
    useCase: {
      engineer_data: "Generate SQL from prompts, explore schemas, summarize results",
      analyst: "Faster ad hoc queries and prototyping without perfect SQL recall",
      operations: "Quickly surface ops anomalies from large datasets",
      default: "Natural language → SQL for faster analytics iterations"
    },
    difficulty: "Intermediate",
    timeToValue: "1-2 days",
    integrations: ["Looker", "GCS", "Vertex AI"],
    tags: ["sql", "nl2sql", "gcp", "analytics"]
  },

  snowflake_cortex: {
    name: "Snowflake Cortex",
    label: "Snowflake Cortex",
    purpose: "Built-in LLMs and functions for AI apps and chat with your data",
    category: "Data",
    url: "https://www.snowflake.com",
    pricing: "Usage-based",
    useCase: {
      engineer_data: "Text-to-SQL, embeddings, and vector search in the data cloud",
      analyst: "Chat with curated datasets; accelerate data discovery",
      product: "Power product analytics copilots from warehouse data",
      default: "Warehouse-native AI for analytics and apps"
    },
    difficulty: "Advanced",
    timeToValue: "1-2 weeks",
    integrations: ["Snowpark", "Streams/Tasks", "Partner apps"],
    tags: ["warehouse", "vector", "llm", "analytics"]
  },

  // === DEV / ENGINEERING ===
  github_copilot: {
    name: "GitHub Copilot",
    label: "GitHub Copilot",
    purpose: "AI pair programmer for code completion, tests, and explanations",
    category: "Developer Tools",
    url: "https://github.com/features/copilot",
    pricing: "Paid per user/month",
    useCase: {
      engineer_frontend: "Component scaffolds, hooks, tests, accessibility hints",
      engineer_data: "ETL scripts, SQL, docstrings, quick notebook helpers",
      devops: "IaC snippets, pipeline YAMLs, action workflows",
      qa_testing: "Unit/integration test suggestions and edge-case prompts",
      default: "Accelerate coding with contextual suggestions"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["VS Code", "JetBrains", "Neovim"],
    tags: ["coding", "autocomplete", "testing"]
  },

  cursor: {
    name: "Cursor IDE",
    label: "Cursor",
    purpose: "Code editor with built-in AI agent for refactors and multi-file edits",
    category: "Developer Tools",
    url: "https://www.cursor.com",
    pricing: "Free tier and paid plans",
    useCase: {
      engineer_frontend: "Refactor React/Vite apps, generate tests, fix build errors",
      devops: "Edit CI/CD configs with agent guidance across files",
      engineer_data: "Transform notebooks to production scripts faster",
      default: "Agentic coding and multi-file editing with AI"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["Local repos", "Git", "CLI"],
    tags: ["ide", "agent", "refactor"]
  },

  // === SALES / REVOPS ===
  salesforce_einstein: {
    name: "Salesforce Einstein",
    label: "Einstein (Salesforce)",
    purpose: "Embedded AI for deal insights, email drafting, and forecasting",
    category: "Sales",
    url: "https://www.salesforce.com",
    pricing: "Add-on; varies by cloud",
    useCase: {
      sales: "Draft follow-ups, qualify leads, next-best-action prompts",
      revops: "Forecast accuracy checks and pipeline risk surfacing",
      management: "Roll-up views and coaching signals for teams",
      default: "AI across CRM for selling and forecasting"
    },
    difficulty: "Intermediate",
    timeToValue: "1-3 weeks",
    integrations: ["Sales Cloud", "Service Cloud", "Tableau"],
    tags: ["crm", "sales", "forecasting"]
  },

  hubspot_ai: {
    name: "HubSpot AI",
    label: "HubSpot AI",
    purpose: "Content assistants, lead scoring, and inbox copilots in HubSpot",
    category: "Sales & Marketing",
    url: "https://www.hubspot.com",
    pricing: "Varies by hub + AI features",
    useCase: {
      marketing: "Blog/landing drafts, topic clusters, SEO outlines",
      sales: "Inbox copilots, personalized sequences, call notes",
      revops: "Lifecycle scoring, playbook drafts, attribution checks",
      default: "AI embedded in CRM + Marketing/Service hubs"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["CMS", "Sales Hub", "Service Hub"],
    tags: ["crm", "content", "lead-scoring"]
  },

  gong_ai: {
    name: "Gong AI",
    label: "Gong",
    purpose: "Conversation intelligence: analyze calls for coaching and deal risk",
    category: "Sales",
    url: "https://www.gong.io",
    pricing: "Sales-based pricing",
    useCase: {
      sales: "Call summaries, objection patterns, competitive mentions",
      management: "Rep coaching cues and deal risk trends",
      cs_am: "Renewal risk via conversation signals",
      default: "Mine calls for insights to improve revenue outcomes"
    },
    difficulty: "Intermediate",
    timeToValue: "1-2 weeks",
    integrations: ["Zoom", "Salesforce", "HubSpot"],
    tags: ["revintel", "calls", "coaching"]
  },

  // === SUPPORT / SUCCESS ===
  zendesk_ai: {
    name: "Zendesk AI",
    label: "Zendesk AI",
    purpose: "AI-powered triage, suggested replies, and self-serve deflection",
    category: "Customer Support",
    url: "https://www.zendesk.com",
    pricing: "Add-on to Zendesk plans",
    useCase: {
      cs_am: "Auto-tagging, priority suggestions, macros for faster resolutions",
      operations: "Routing logic to meet SLAs and deflect simple tickets",
      management: "Queue analytics and emerging-issue detection",
      default: "Reduce handle time and improve response quality"
    },
    difficulty: "Beginner",
    timeToValue: "1-2 weeks",
    integrations: ["Help Center", "Chat", "Talk", "CRM"],
    tags: ["support", "triage", "deflection"]
  },

  intercom_fin: {
    name: "Intercom Fin",
    label: "Intercom Fin",
    purpose: "AI agent for instant customer answers with grounded KB content",
    category: "Customer Support",
    url: "https://www.intercom.com",
    pricing: "Per-resolution or plan add-on",
    useCase: {
      cs_am: "Deflect repetitive questions, escalate only complex cases",
      content: "Turn KB gaps into content tasks with auto-insights",
      operations: "24/7 coverage without scaling headcount linearly",
      default: "Reliable AI agent using your docs + guardrails"
    },
    difficulty: "Beginner",
    timeToValue: "Days",
    integrations: ["Help Center", "CRM", "Slack"],
    tags: ["agent", "kb", "support-automation"]
  },

  // === HR / TALENT ===
  greenhouse_ai: {
    name: "Greenhouse AI",
    label: "Greenhouse AI",
    purpose: "Job description help, email drafting, and interview assistance",
    category: "HR",
    url: "https://www.greenhouse.com",
    pricing: "Add-on to Greenhouse",
    useCase: {
      hr: "Inclusive JD drafts, candidate comms, interview kits",
      management: "Structured feedback prompts, calibration support",
      default: "Faster, more consistent hiring workflows"
    },
    difficulty: "Beginner",
    timeToValue: "1-2 weeks",
    integrations: ["ATS", "Calendar", "Email"],
    tags: ["recruiting", "ats", "hiring"]
  },

  paradox_olivia: {
    name: "Paradox Olivia",
    label: "Paradox (Olivia)",
    purpose: "AI recruiting assistant for screening, scheduling, and FAQs",
    category: "HR",
    url: "https://www.paradox.ai",
    pricing: "Enterprise pricing",
    useCase: {
      hr: "Automate scheduling, screen candidates, reduce time-to-interview",
      operations: "High-volume frontline hiring support",
      default: "Conversational recruiting to speed up pipelines"
    },
    difficulty: "Beginner",
    timeToValue: "Days",
    integrations: ["ATS", "Calendar", "SMS"],
    tags: ["recruiting", "assistant", "scheduling"]
  },

  // === LEGAL ===
  harvey_ai: {
    name: "Harvey AI",
    label: "Harvey",
    purpose: "Legal copilot for research, drafting, and clause comparison (enterprise)",
    category: "Legal",
    url: "https://www.harvey.ai",
    pricing: "Enterprise",
    useCase: {
      legal: "First-pass research, clause comparisons, brief and memo drafting",
      management: "Policy drafts and compliance summaries",
      default: "Accelerate legal analysis (not a substitute for counsel)"
    },
    difficulty: "Advanced",
    timeToValue: "2-4 weeks",
    integrations: ["DMS", "Contract systems"],
    tags: ["legal", "contracts", "research"]
  },

  // === CONTENT / COMMS ===
  grammarly_go: {
    name: "GrammarlyGO",
    label: "GrammarlyGO",
    purpose: "Context-aware AI writing assistant inside email, docs, and the browser",
    category: "Writing",
    url: "https://www.grammarly.com",
    pricing: "Free + Premium plans",
    useCase: {
      content: "Tone-appropriate drafts and rewrites; press notes; briefs",
      sales: "Stronger outreach emails with tone + clarity adjustments",
      admin: "Polished comms for scheduling and follow-ups",
      default: "Edit, shorten, expand, and adapt tone quickly"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["Browser", "Word", "Gmail"],
    tags: ["writing", "editing", "email"]
  },

  descript: {
    name: "Descript",
    label: "Descript",
    purpose: "AI-powered audio/video editing, transcripts, and screen recordings",
    category: "Content",
    url: "https://www.descript.com",
    pricing: "Free + paid tiers",
    useCase: {
      content: "Podcast/video editing by text; filler word removal; overdub",
      marketing: "Repurpose webinars into clips with transcripts and captions",
      cs_am: "Training videos and help content quickly",
      default: "Edit AV like docs; fast content production"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["YouTube", "Drive", "Premiere"],
    tags: ["video", "audio", "transcript"]
  },

  otter_ai: {
    name: "Otter.ai",
    label: "Otter",
    purpose: "Meeting transcription with AI summaries and action items",
    category: "Meetings",
    url: "https://otter.ai",
    pricing: "Free + paid tiers",
    useCase: {
      project_manager: "Instant meeting notes, tasks, and follow-ups",
      product: "Usability session transcripts and highlights",
      management: "Board and leadership meeting summaries",
      default: "Accurate transcripts and concise summaries"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["Zoom", "Calendar", "Drive"],
    tags: ["meetings", "transcription", "summaries"]
  },

  // === PM / PRODUCTIVITY ===
  asana_ai: {
    name: "Asana Intelligence",
    label: "Asana AI",
    purpose: "AI for summarizing projects, drafting tasks, and predicting at-risk work",
    category: "Project Management",
    url: "https://asana.com",
    pricing: "Included in select plans",
    useCase: {
      project_manager: "Auto-summarize status, suggest next steps, risk surfacing",
      operations: "Template SOPs into action plans; SLA follow-through",
      management: "Roll-ups across portfolios for clarity",
      default: "Convert plans and notes into structured project work"
    },
    difficulty: "Beginner",
    timeToValue: "1 week",
    integrations: ["Slack", "GDrive", "Jira"],
    tags: ["projects", "tasks", "summaries"]
  },

  jira_intelligence: {
    name: "Atlassian Intelligence",
    label: "Jira AI",
    purpose: "AI inside Jira/Confluence for issue summaries and doc drafting",
    category: "Project Management",
    url: "https://www.atlassian.com/ai",
    pricing: "Add-on pricing",
    useCase: {
      engineer_frontend: "Issue summaries, acceptance criteria, test hints",
      product: "PRD outlines in Confluence; link issues to goals",
      qa_testing: "Summarize bug clusters; propose repro steps",
      default: "Explain issues, draft docs, and speed up workflows"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["Jira", "Confluence", "Bitbucket"],
    tags: ["issues", "docs", "summaries"]
  },

  productboard_ai: {
    name: "Productboard AI",
    label: "Productboard AI",
    purpose: "Turn feedback into insights; cluster themes; summarize user needs",
    category: "Product",
    url: "https://www.productboard.com",
    pricing: "Plan add-on",
    useCase: {
      product: "Summarize feedback, map to roadmap items, auto-insights",
      design: "Surface UX pain patterns across feedback sources",
      management: "Prioritize with data-backed summaries",
      default: "Faster voice-of-customer → prioritization loop"
    },
    difficulty: "Intermediate",
    timeToValue: "1-2 weeks",
    integrations: ["Zendesk", "Salesforce", "Jira", "Intercom"],
    tags: ["product", "feedback", "prioritization"]
  },

  // === OPERATIONS / AIOPS / SECURITY ===
  celonis_process_copilot: {
    name: "Celonis Process Copilot",
    label: "Celonis AI",
    purpose: "Process mining + AI copilot to find bottlenecks and savings",
    category: "Operations",
    url: "https://www.celonis.com",
    pricing: "Enterprise",
    useCase: {
      operations: "Reveal flow inefficiencies, recommend fixes, quantify impact",
      finance: "AP/AR cycle optimizations and working capital insights",
      consultant: "Data-backed process change proposals",
      default: "Turn event logs into actionable process improvements"
    },
    difficulty: "Advanced",
    timeToValue: "2-6 weeks",
    integrations: ["ERP", "CRM", "Databases"],
    tags: ["process-mining", "ops", "efficiency"]
  },

  datadog_bits_ai: {
    name: "Datadog Bits AI",
    label: "Datadog AI",
    purpose: "AI assistance for logs, traces, and incident context",
    category: "DevOps",
    url: "https://www.datadoghq.com",
    pricing: "Add-on",
    useCase: {
      devops: "Explain spikes, craft monitors, summarize incidents",
      engineer_frontend: "Trace user-facing errors to backend causes faster",
      management: "Post-incident summaries for exec updates",
      default: "Faster detection, diagnosis, and communication"
    },
    difficulty: "Intermediate",
    timeToValue: "1-2 weeks",
    integrations: ["APM", "Logs", "RUM", "Security"],
    tags: ["observability", "aiops", "incidents"]
  },

  snyk_ai_fix: {
    name: "Snyk AI Fix",
    label: "Snyk AI Fix",
    purpose: "AI-generated remediation suggestions for vulnerabilities",
    category: "Security",
    url: "https://snyk.io",
    pricing: "Paid plans",
    useCase: {
      devops: "Auto-suggest code fixes for vulns with context",
      engineer_frontend: "Dependency issues and quick PRs",
      management: "Risk reduction visibility and developer velocity",
      default: "Triage → patch loop speeds up with AI"
    },
    difficulty: "Intermediate",
    timeToValue: "Days",
    integrations: ["GitHub", "GitLab", "CI/CD"],
    tags: ["security", "vulnerabilities", "devsecops"]
  },

  // === FINANCE / ANALYST / DATA SCIENCE ===
  excel_copilot: {
    name: "Excel with Copilot",
    label: "Excel Copilot",
    purpose: "AI-enhanced Excel for advanced data analysis and financial modeling",
    category: "Finance Tools",
    url: "https://microsoft.com/excel",
    pricing: "Included with Microsoft 365 Copilot ($30/month)",
    useCase: {
      finance: "AI-generated formulas, insights, scenario planning, narratives",
      analyst: "Ad hoc modeling without fighting syntax; chart explanations",
      operations: "Turn raw exports into usable summaries quickly",
      default: "Spreadsheet analysis with AI assistance"
    },
    difficulty: "Intermediate",
    timeToValue: "1-2 weeks",
    integrations: ["Power BI", "SharePoint", "Teams", "Power Automate"],
    tags: ["finance", "spreadsheet", "modeling", "microsoft", "ai-assistant"]
  },

  jupyter_notebook: {
    name: "Jupyter Notebook",
    label: "Jupyter Notebook",
    purpose: "Interactive computing environment for data science and analysis",
    category: "Data Science",
    url: "https://jupyter.org",
    pricing: "Free, cloud hosting available",
    useCase: {
      engineer_data: "Exploratory analysis, feature engineering, quick ML prototypes",
      analyst: "Data exploration and visualization in Python/R",
      consultant: "Client-ready notebooks with narrative + charts",
      default: "Interactive data analysis and visualization"
    },
    difficulty: "Advanced",
    timeToValue: "1-2 weeks",
    integrations: ["Python", "R", "SQL", "Cloud platforms", "Git"],
    tags: ["data-science", "analysis", "python", "modeling", "advanced"]
  }
};

// Helper: tools by role
export function getToolsByRole(role, industry = null) {
  return Object.entries(AITOOLS_DB)
    .filter(([_, tool]) => tool.useCase[role] || tool.useCase.default)
    .map(([key, tool]) => ({
      key,
      ...tool,
      roleSpecificPurpose: tool.useCase[role] || tool.useCase.default
    }));
}

// Helper: tools by category
export function getToolsByCategory(category) {
  return Object.entries(AITOOLS_DB)
    .filter(([_, tool]) => tool.category === category)
    .map(([key, tool]) => ({ key, ...tool }));
}

// Helper: beginner-friendly tools
export function getBeginnerTools() {
  return Object.entries(AITOOLS_DB)
    .filter(([_, tool]) => tool.difficulty === "Beginner")
    .map(([key, tool]) => ({ key, ...tool }));
}

export default AITOOLS_DB;
