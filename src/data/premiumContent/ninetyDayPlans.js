// src/data/premiumContent/hybridPlanCatalog.js
// Hybrid, highly-personalizable roadmap catalog.
// Use with a generator that reads assessment answers + risk and assembles:
//  - Fast Start (7 days)
//  - Momentum (~30 days)
//  - Positioning (~90 days, optional)
//
// Token legend you can interpolate in `details` strings:
//  {{role}} {{industry_label}} {{company_size_label}} {{risk_band}} {{path_title}}
//  {{primary_task_focus}} {{top_tool_1}} {{top_tool_2}} {{timeline_label}}

export const HYBRID_PLAN_CATALOG = {
  copy_variants: {
    intro: {
      concerned: "We'll lower your exposure fast with quick wins and safeguards, then build confidence with small wins.",
      proactive: "Let's turn your strengths into visible AI leadership this month and stack wins from there.",
      curious: "Test-drive practical AI skills with light lifts; keep what works, drop what doesn't.",
      stuck: "We'll unlock momentum with small, confidence-building tasks that show real progress."
    },
    risk_explainer: {
      low: "Low exposure today — protect your moat and publish visible wins.",
      moderate: "Moderate exposure — shift routine to AI and own the playbook.",
      high: "High exposure — accelerate automation and move up‑stack toward orchestration."
    }
  },

  universal: {
    fast_start_actions: [
      {
        id: "fs-workspace",
        type: "task",
        title: "Set up your AI workspace",
        details: "Create a dedicated {{role}} workspace with prompt snippets, a 'Do/Don't' guardrail list, and a wins log.",
        est_minutes: 20
      },
      {
        id: "fs-quick-win",
        type: "artifact",
        title: "Ship a 60‑minute quick win",
        details: "Automate one repetitive step from your {{primary_task_focus}} using {{top_tool_1}}; record a 60‑sec before/after screen capture.",
        est_minutes: 60,
        tool_refs: ["automation_basic"],
        conditions: { risk_band_in: ["moderate", "high"] }
      },
      {
        id: "fs-stakeholder",
        type: "meeting",
        title: "Book a 15‑min stakeholder chat",
        details: "Ask one partner what would save them 30 minutes a week. Use that input to target your next quick win.",
        est_minutes: 15,
        conditions: { company_size_in: ["medium", "large", "enterprise"] }
      }
    ],
    positioning_assets: [
      {
        id: "pos-linkedin",
        type: "message",
        title: "Post a visible outcome",
        details: "Share: 'Reduced {{primary_task_focus}} time by 30% using {{top_tool_1}} with QA checks.'",
        est_minutes: 15
      },
      {
        id: "pos-onepager",
        type: "artifact",
        title: "AI initiative one‑pager",
        details: "Draft a one‑pager outlining problem, solution, safety checks, and next steps for your {{path_title}} pilot.",
        est_minutes: 40,
        conditions: { company_size_in: ["medium", "large", "enterprise"] }
      }
    ]
  },

  roles: {
    // ───────────────────────────────────────────────────────── MARKETING ─────
    marketing: {
      tool_recs: {
        default: ["ga4", "ads_ai", "prompt_copy", "hubspot", "cms_ai"],
        by_industry: {
            media: ["cms_ai","seo_suite"],
            retail: ["seo_suite","hubspot"],
            finance: ["compliance_copy"],         // finance-safe copy assistant
            healthcare: ["policy_ai","kb_ai"],    // regulated content guardrails
            }

      },
      fast_start_actions: [
        {
          id: "mkt-copy-kit",
          type: "artifact",
          title: "Build a copy prompt kit",
          details: "Create 5 reusable prompts for A/B ad copy and subject lines; log outcomes in a sheet.",
          est_minutes: 45,
          tool_refs: ["prompt_copy"]
        },
        {
          id: "mkt-report-draft",
          type: "task",
          title: "Automate weekly report draft",
          details: "Use {{top_tool_2}} to auto‑draft the weekly performance report; add a reviewer checklist.",
          est_minutes: 60,
          tool_refs: ["hubspot", "ga4"],
          conditions: { risk_band_in: ["moderate", "high"] }
        }
      ],
      momentum_actions: [
        {
          id: "mkt-campaign-optimizer",
          type: "task",
          title: "Launch an AI‑assisted campaign optimizer",
          details: "Set rules in Ads AI to rotate variants; add a guardrail: no change >15% CPA without review.",
          est_minutes: 90,
          tool_refs: ["ads_ai"]
        },
        {
          id: "mkt-seo-refresh",
          type: "task",
          title: "SEO content refresh",
          details: "Use {{top_tool_1}} to rewrite 3 underperforming pages; human edit for voice; measure CTR uplift.",
          est_minutes: 90,
          tool_refs: ["seo_suite", "cms_ai"],
          conditions: { industry_in: ["media", "retail", "tech"] }
        },
        {
          id: "mkt-artifact-case",
          type: "artifact",
          title: "Publish a 2‑page case study",
          details: "Document lift in CTR/CPA and time saved; share internally.",
          est_minutes: 60
        }
      ],
      positioning_actions: [
        {
          id: "mkt-playbook",
          type: "artifact",
          title: "Marketing AI playbook v1",
          details: "Draft your team's playbook: prompts, QA checks, and safe‑use rules tailored to {{industry_label}}.",
          est_minutes: 120,
          conditions: { company_size_in: ["medium", "large", "enterprise"] }
        },
        {
          id: "mkt-demo",
          type: "meeting",
          title: "15‑min internal demo",
          details: "Demo 2 quick wins and your playbook; ask for a pilot scope for the next sprint.",
          est_minutes: 30
        }
      ]
    },

    // ───────────────────────────────────────────────────────── PRODUCT ───────
    product: {
      tool_recs: {
        default: ["experiment_platform", "analytics_suite", "eval_harness", "prompt_testing"],
        by_industry: {
            tech: ["prompt_testing","eval_harness"],
            healthcare: ["policy_ai"], 
            public: ["policy_ai"]
        }

      },
      fast_start_actions: [
        { id: "pm-experiment-catalog", type: "artifact", title: "Experiment backlog", details: "Create a 10‑idea backlog of AI experiments tied to key metrics.", est_minutes: 40 },
        { id: "pm-eval-basics", type: "task", title: "Add eval basics", details: "Define success metrics and a lightweight eval harness for one AI feature.", est_minutes: 60, tool_refs: ["eval_harness"] }
      ],
      momentum_actions: [
        { id: "pm-prd-llm", type: "artifact", title: "PRD for AI feature", details: "Write a short PRD including risks, guardrails, and rollback criteria.", est_minutes: 60 },
        { id: "pm-experiment-rollout", type: "task", title: "Run an AI experiment", details: "Ship one A/B test; baseline, launch, and capture learnings.", est_minutes: 120, tool_refs: ["experiment_platform"] }
      ],
      positioning_actions: [
        { id: "pm-ai-roadmap", type: "artifact", title: "AI roadmap v1", details: "Map 3 quarters of AI bets with expected impact and dependencies.", est_minutes: 120, conditions: { company_size_in: ["medium", "large", "enterprise"] } },
        { id: "pm-showcase", type: "meeting", title: "Product showcase", details: "Present experiment outcomes and next bets to leadership.", est_minutes: 45 }
      ]
    },

    // ───────────────────────────────────────────────────────── ANALYST ───────
    analyst: {
      tool_recs: {
        default: ["power_bi", "tableau", "bigquery", "dbt", "automation_basic"],
        by_industry: {
            finance: ["power_bi","excel"],
            retail: ["bi_suite"],
            manufacturing: ["bi_suite"],
            tech: ["bigquery","dbt"]
        }

      },
      fast_start_actions: [
        { id: "anl-auto-refresh", type: "task", title: "Automate a refresh", details: "Schedule an auto‑refresh + emailed snapshot for one dashboard.", est_minutes: 45, tool_refs: ["power_bi", "tableau"] },
        { id: "anl-zapier-pipeline", type: "task", title: "No‑code pipeline", details: "Use {{top_tool_1}} to ingest a CSV, clean it, and post results to a sheet.", est_minutes: 60, tool_refs: ["automation_basic"] }
      ],
      momentum_actions: [
        { id: "anl-dbt-model", type: "task", title: "Stand up a dbt model", details: "Create one source and one model; document lineage.", est_minutes: 120, tool_refs: ["dbt"] },
        { id: "anl-artifact-case", type: "artifact", title: "Time‑saved case study", details: "Quantify weekly minutes saved and accuracy improvements.", est_minutes: 45 }
      ],
      positioning_actions: [
        { id: "anl-qc-playbook", type: "artifact", title: "QC & Eval playbook", details: "Write checks for data quality and AI‑generated insights.", est_minutes: 90 },
        { id: "anl-demo", type: "meeting", title: "Ops demo", details: "Demo your pipeline + dashboards to stakeholders; propose Ops SLAs.", est_minutes: 30 }
      ]
    },

    // ───────────────────────────────────────────────────────── PROJECT MGMT ──
    project_manager: {
      tool_recs: { default: ["jira", "notion", "automation_basic", "comms_suite"] },
      fast_start_actions: [
        { id: "pm-risk-log", type: "artifact", title: "AI risk log", details: "Add risk/mitigation entries for one pilot.", est_minutes: 30 },
        { id: "pm-scope-pilot", type: "task", title: "Scope a 2‑week pilot", details: "Define problem, success metric, and guardrails for a safe pilot.", est_minutes: 45 }
      ],
      momentum_actions: [
        { id: "pm-standup-template", type: "artifact", title: "Stand‑up template", details: "Create an AI‑aware stand‑up template to track AI tasks and QA.", est_minutes: 30 },
        { id: "pm-change-plan", type: "artifact", title: "Change plan", details: "Draft comms + training steps for rollout; include rollback criteria.", est_minutes: 90 }
      ],
      positioning_actions: [
        { id: "pm-ai-portfolio", type: "artifact", title: "Pilot portfolio", details: "Summarize pilots, outcomes, and next steps in a 1‑pager.", est_minutes: 60 },
        { id: "pm-exec-brief", type: "meeting", title: "Exec brief", details: "5‑slide brief: impact, risks, and asks.", est_minutes: 45 }
      ]
    },

    // ───────────────────────────────────────────────────────── FRONTEND DEV ─
    engineer_frontend: {
      tool_recs: { default: ["openai_api", "langchain", "pgvector", "copilot", "eval_harness"] },
      fast_start_actions: [
        { id: "dev-copilot-setup", type: "task", title: "Tune your pair‑programmer", details: "Optimize Copilot settings; write a short prompt style guide for your repo.", est_minutes: 30, tool_refs: ["copilot"] },
        { id: "dev-rag-demo", type: "artifact", title: "Ship a RAG demo", details: "Build a minimal knowledge search using {{top_tool_1}} + {{top_tool_2}}; add auth & logging.", est_minutes: 120, tool_refs: ["openai_api", "pgvector"], conditions: { risk_band_in: ["moderate", "high"] } }
      ],
      momentum_actions: [
        { id: "dev-eval-harness", type: "task", title: "Add an eval harness", details: "Introduce a basic eval suite for your LLM features (accuracy & regressions).", est_minutes: 90, tool_refs: ["eval_harness"] },
        { id: "dev-case-study", type: "artifact", title: "2‑page engineering case study", details: "Document before/after cycle time on a feature built with AI assistance.", est_minutes: 60 }
      ],
      positioning_actions: [
        { id: "dev-playbook", type: "artifact", title: "Frontend AI playbook", details: "Publish repo conventions: prompt libs, evals, guardrails, and rollback steps.", est_minutes: 120 },
        { id: "dev-internal-talk", type: "meeting", title: "Lunch‑and‑learn", details: "Share lessons learned; propose standardizing your playbook across repos.", est_minutes: 45 }
      ]
    },

    // ───────────────────────────────────────────────────────── DATA ENG / DS ─
    engineer_data: {
      tool_recs: { default: ["mlflow", "wandb", "kserve", "triton", "evidently"] },
      fast_start_actions: [
        { id: "de-mlflow", type: "task", title: "Stand up MLflow/W&B", details: "Track one model with experiment metadata and artifacts.", est_minutes: 90, tool_refs: ["mlflow", "wandb"] },
        { id: "de-metrics", type: "artifact", title: "Drift dashboard", details: "Create a simple data drift dashboard and set an alert threshold.", est_minutes: 90, tool_refs: ["evidently"] }
      ],
      momentum_actions: [
        { id: "de-kserve", type: "task", title: "Containerize + serve", details: "Serve a model via KServe/Triton; add canary + rollback.", est_minutes: 120, tool_refs: ["kserve", "triton"] },
        { id: "de-runbook", type: "artifact", title: "Incident runbook", details: "Write triage steps for bad outputs and performance regressions.", est_minutes: 60 }
      ],
      positioning_actions: [
        { id: "de-slo", type: "artifact", title: "SLA/SLO doc", details: "Define SLOs for latency, accuracy, and cost; review quarterly.", est_minutes: 90 },
        { id: "de-governance", type: "artifact", title: "Governance memo", details: "Propose model governance checkpoints with Risk/Legal.", est_minutes: 60, conditions: { company_size_in: ["large", "enterprise"] } }
      ]
    },

    // ───────────────────────────────────────────────────────── DEVOPS / PLAT ─
    devops: {
      tool_recs: { default: ["kubernetes", "kserve", "seldon", "grafana", "prometheus"] },
      fast_start_actions: [
        { id: "ops-helm-llm", type: "task", title: "Helm charts for LLM", details: "Create/review Helm charts for LLM inference service; document requests/limits.", est_minutes: 90, tool_refs: ["kubernetes"] },
        { id: "ops-observability", type: "task", title: "Observability baseline", details: "Add logs/traces/metrics for token usage, latency, and errors.", est_minutes: 60, tool_refs: ["grafana", "prometheus"] }
      ],
      momentum_actions: [
        { id: "ops-vector-db", type: "task", title: "Vector DB operations", details: "Stand up {{top_tool_2}} with backup/restore and retention policies.", est_minutes: 90 },
        { id: "ops-cost-guardrails", type: "artifact", title: "Cost guardrails", details: "Define budgets, alerts, and autoscaling policies for inference.", est_minutes: 60 }
      ],
      positioning_actions: [
        { id: "ops-golden-path", type: "artifact", title: "Golden path template", details: "Publish a template repo with boilerplate, CI, and observability prewired.", est_minutes: 120 },
        { id: "ops-platform-launch", type: "meeting", title: "Platform launch", details: "Present the platform v1 and adoption path to teams.", est_minutes: 45 }
      ]
    },

    // ───────────────────────────────────────────────────────── QA / TESTING ──
    qa_testing: {
      tool_recs: { default: ["playwright", "cypress", "ragas", "deepeval", "guardrails"] },
      fast_start_actions: [
        { id: "qa-flow-tests", type: "task", title: "Convert flows to API/e2e tests", details: "Cover two core flows; add pass/fail gates in CI.", est_minutes: 90, tool_refs: ["playwright", "cypress"] },
        { id: "qa-llm-evals", type: "task", title: "LLM behavior evals", details: "Add correctness, safety, and regression tests for AI features.", est_minutes: 90, tool_refs: ["ragas", "deepeval"] }
      ],
      momentum_actions: [
        { id: "qa-guardrails", type: "task", title: "Guardrails + fallbacks", details: "Implement guardrails with timeouts/fallbacks for flaky endpoints.", est_minutes: 60, tool_refs: ["guardrails"] },
        { id: "qa-dashboard", type: "artifact", title: "Quality dashboard", details: "Publish a dashboard tracking failure modes and MTTR.", est_minutes: 60 }
      ],
      positioning_actions: [
        { id: "qa-release-checklist", type: "artifact", title: "AI release checklist", details: "Checklist for evals, thresholds, and rollback; make it standard.", est_minutes: 60 },
        { id: "qa-champion", type: "meeting", title: "Champion program", details: "Recruit 2 team champions; train them on your checklist.", est_minutes: 45 }
      ]
    },

    // ───────────────────────────────────────────────────────── SALES ─────────
    sales: {
      tool_recs: { default: ["sfdc", "hubspot", "sequencing", "prompt_copy"] },
      fast_start_actions: [
        { id: "sales-seq", type: "task", title: "Optimize one sequence", details: "Use AI to write 3 variants; A/B test and lock a winner.", est_minutes: 45, tool_refs: ["sequencing", "prompt_copy"] },
        { id: "sales-notes", type: "task", title: "AI meeting notes", details: "Adopt AI notes + action items; summarize for manager weekly.", est_minutes: 30 }
      ],
      momentum_actions: [
        { id: "sales-prospecting", type: "task", title: "Outbound prospecting boost", details: "Automate list build + first‑touch personalization; 30 accounts/week.", est_minutes: 90 },
        { id: "sales-case", type: "artifact", title: "Before/after deck", details: "Document reply rate lift and hours saved; share internally.", est_minutes: 45 }
      ],
      positioning_actions: [
        { id: "sales-enablement", type: "artifact", title: "Enablement kit", details: "Create prompt kits for outreach, objections, and call prep.", est_minutes: 90 },
        { id: "sales-pilot", type: "meeting", title: "Pilot ask", details: "Ask to run a 4‑week automation pilot for one segment.", est_minutes: 20 }
      ]
    },

    // ───────────────────────────────────────────────────────── CS / AM ───────
    cs_am: {
      tool_recs: { default: ["zendesk", "intercom", "kb_ai", "health_scoring"] },
      fast_start_actions: [
        { id: "cs-macro-kit", type: "artifact", title: "Macro + prompt kit", details: "Create 10 macros/prompt starters for top issues.", est_minutes: 60, tool_refs: ["kb_ai"] },
        { id: "cs-health-signal", type: "task", title: "Add one health signal", details: "Create a simple churn risk signal and weekly review.", est_minutes: 45, tool_refs: ["health_scoring"] }
      ],
      momentum_actions: [
        { id: "cs-bot-routing", type: "task", title: "Bot + routing rules", details: "Add a bot for basic triage; set confidence threshold and human fallback.", est_minutes: 90 },
        { id: "cs-artifact-case", type: "artifact", title: "Retention case study", details: "Quantify deflections and CSAT; share internally.", est_minutes: 45 }
      ],
      positioning_actions: [
        { id: "cs-kb-owner", type: "artifact", title: "KB ownership proposal", details: "Propose owning the KB + AI prompts, with a monthly review.", est_minutes: 45 },
        { id: "cs-stakeholder", type: "meeting", title: "CS <> Product sync", details: "Set a bi‑weekly feedback loop; track top 3 issues.", est_minutes: 30 }
      ]
    },

    // ───────────────────────────────────────────────────────── REVOPS ────────
    revops: {
      tool_recs: { default: ["sfdc", "hubspot", "dbt", "bi_suite", "automation_basic"] },
      fast_start_actions: [
        { id: "ro-cleanup", type: "task", title: "Field hygiene cleanup", details: "Fix one pipeline stage; add validation and alerts.", est_minutes: 60 },
        { id: "ro-zap", type: "task", title: "Automate a handoff", details: "Automate SDR→AE handoff with {{top_tool_1}}; add QA.", est_minutes: 60, tool_refs: ["automation_basic"] }
      ],
      momentum_actions: [
        { id: "ro-bi-scorecard", type: "artifact", title: "GTM scorecard", details: "Publish a weekly scorecard; include definition of each metric.", est_minutes: 90, tool_refs: ["bi_suite"] },
        { id: "ro-dbt-pipeline", type: "task", title: "dbt pipeline", details: "Model lifecycle stages; document sources and lineage.", est_minutes: 120, tool_refs: ["dbt"] }
      ],
      positioning_actions: [
        { id: "ro-playbook", type: "artifact", title: "RevOps automation playbook", details: "Write SOPs for routing, dedupe, and enrichment using AI.", est_minutes: 120 },
        { id: "ro-governance", type: "artifact", title: "GTM data governance", details: "Propose ownership + reviews; align Sales, CS, and Marketing.", est_minutes: 60 }
      ]
    },

    // ───────────────────────────────────────────────────────── FINANCE ───────
    finance: {
      tool_recs: { default: ["power_bi", "excel", "sql", "automation_basic"] },
      fast_start_actions: [
        { id: "fin-close-automation", type: "task", title: "Close process automation", details: "Automate a reconciliation step; document checks.", est_minutes: 60 },
        { id: "fin-report-draft", type: "task", title: "Auto‑draft variance report", details: "Draft variance commentary with AI; add reviewer checklist.", est_minutes: 60 }
      ],
      momentum_actions: [
        { id: "fin-fpa-model", type: "task", title: "FP&A model refresh", details: "Refactor one model; add scenario toggles and data validation.", est_minutes: 120 },
        { id: "fin-powerbi-dashboard", type: "artifact", title: "Finance dashboard", details: "Publish a KPI dashboard with drill‑downs; schedule weekly snapshots.", est_minutes: 90, tool_refs: ["power_bi"] }
      ],
      positioning_actions: [
        { id: "fin-governance", type: "artifact", title: "Data governance memo", details: "Propose data ownership, checks, and audit logs for AI outputs.", est_minutes: 60, conditions: { company_size_in: ["large", "enterprise"] } },
        { id: "fin-partner-sync", type: "meeting", title: "Business partner sync", details: "Monthly sync with Ops/Sales to prioritize automation opportunities.", est_minutes: 30 }
      ]
    },

    // ───────────────────────────────────────────────────────── OPERATIONS ────
    operations: {
      tool_recs: { default: ["rpa", "automation_basic", "bi_suite"] },
      fast_start_actions: [
        { id: "ops-map", type: "task", title: "Map a process", details: "Map a 10‑step process and mark two automation candidates.", est_minutes: 45 },
        { id: "ops-qa", type: "artifact", title: "QA checklist", details: "Draft a QA checklist for the target process.", est_minutes: 30 }
      ],
      momentum_actions: [
        { id: "ops-rpa-pilot", type: "task", title: "Pilot an automation", details: "Build a small RPA/Zapier flow; add audit logging.", est_minutes: 120, tool_refs: ["rpa", "automation_basic"] },
        { id: "ops-kpi", type: "artifact", title: "Ops KPI dashboard", details: "Track time/cost saved and defect rate.", est_minutes: 60, tool_refs: ["bi_suite"] }
      ],
      positioning_actions: [
        { id: "ops-playbook", type: "artifact", title: "Ops automation playbook", details: "Document standard connectors, retries, and fallbacks.", est_minutes: 120 },
        { id: "ops-qbr", type: "meeting", title: "Ops QBR", details: "Present wins; propose next 2 candidates.", est_minutes: 45 }
      ]
    },

    // ───────────────────────────────────────────────────────── ADMIN ─────────
    admin: {
      tool_recs: { default: ["automation_basic", "docs_ai", "kb_ai"] },
      fast_start_actions: [
        { id: "adm-forms", type: "task", title: "Form automation", details: "Auto‑file or route one form type using {{top_tool_1}}.", est_minutes: 45 },
        { id: "adm-template-kit", type: "artifact", title: "Template kit", details: "Build 5 templates (emails, checklists) for frequent asks.", est_minutes: 45 }
      ],
      momentum_actions: [
        { id: "adm-kb", type: "artifact", title: "KB page refresh", details: "Update or create 5 knowledge base pages with AI‑assist.", est_minutes: 90, tool_refs: ["kb_ai"] },
        { id: "adm-intake", type: "task", title: "Intake routing", details: "Create an intake form + auto‑assignment rules.", est_minutes: 60 }
      ],
      positioning_actions: [
        { id: "adm-service-catalog", type: "artifact", title: "Service catalog", details: "Publish what’s automated, what’s manual, and SLAs.", est_minutes: 60 },
        { id: "adm-monthly-review", type: "meeting", title: "Monthly review", details: "Share efficiency wins; request next automation candidates.", est_minutes: 30 }
      ]
    },

    // ───────────────────────────────────────────────────────── HR / PEOPLE ──
    hr: {
      tool_recs: { default: ["ats", "kb_ai", "survey_ai", "automation_basic"] },
      fast_start_actions: [
        { id: "hr-jd-refresh", type: "artifact", title: "JD refresh", details: "Create AI‑assisted job description templates with inclusive language.", est_minutes: 45 },
        { id: "hr-screening", type: "task", title: "Screening automation", details: "Draft screening questions and a structured review rubric.", est_minutes: 60 }
      ],
      momentum_actions: [
        { id: "hr-onboarding", type: "artifact", title: "Onboarding KB", details: "Build a searchable onboarding guide with Q&A.", est_minutes: 90, tool_refs: ["kb_ai"] },
        { id: "hr-survey", type: "task", title: "Pulse survey", details: "Run a quarterly pulse survey; analyze with AI and share actions.", est_minutes: 90, tool_refs: ["survey_ai"] }
      ],
      positioning_actions: [
        { id: "hr-policy", type: "artifact", title: "AI use policy draft", details: "Draft safe‑use policy in partnership with Legal.", est_minutes: 90, conditions: { company_size_in: ["large", "enterprise"] } },
        { id: "hr-lnd", type: "artifact", title: "L&D module", details: "Create a 30‑min intro to AI tools for your org.", est_minutes: 120 }
      ]
    },

    // ───────────────────────────────────────────────────────── MANAGEMENT ───
    management: {
      tool_recs: { default: ["comms_suite", "bi_suite", "automation_basic"] },
      fast_start_actions: [
        { id: "mgr-priorities", type: "task", title: "Priorities audit", details: "Identify 2 teams with the highest routine load; pick one pilot each.", est_minutes: 45 },
        { id: "mgr-okr", type: "artifact", title: "AI OKR draft", details: "Draft OKRs linking AI initiatives to outcomes (time saved, NPS).", est_minutes: 45 }
      ],
      momentum_actions: [
        { id: "mgr-review", type: "meeting", title: "Monthly review", details: "Set a 30‑min monthly review on AI pilots and outcomes.", est_minutes: 30 },
        { id: "mgr-dash", type: "artifact", title: "Exec dashboard", details: "BI dashboard for efficiency and adoption KPIs.", est_minutes: 90, tool_refs: ["bi_suite"] }
      ],
      positioning_actions: [
        { id: "mgr-governance", type: "artifact", title: "Governance charter", details: "Define guardrails, roles, and escalation paths.", est_minutes: 90, conditions: { company_size_in: ["large", "enterprise"] } },
        { id: "mgr-townhall", type: "meeting", title: "Town hall", details: "Present wins and the roadmap to org; recruit champions.", est_minutes: 45 }
      ]
    },

    // ───────────────────────────────────────────────────────── CONSULTANT ───
    consultant: {
      tool_recs: { default: ["research_ai", "kb_ai", "automation_basic", "slide_ai"] },
      fast_start_actions: [
        { id: "con-discovery", type: "artifact", title: "Discovery template", details: "Create a discovery template with AI‑assisted question banks.", est_minutes: 45 },
        { id: "con-rapid-research", type: "task", title: "Rapid research loop", details: "Run a 60‑min AI‑assisted research sprint; deliver a 1‑pager.", est_minutes: 60, tool_refs: ["research_ai", "slide_ai"] }
      ],
      momentum_actions: [
        { id: "con-value-map", type: "artifact", title: "Value map", details: "Map automation opportunities to client outcomes (time, cost, quality).", est_minutes: 60 },
        { id: "con-prototype", type: "task", title: "Prototype a no‑code flow", details: "Build a small automation proof‑of‑value in {{top_tool_1}}.", est_minutes: 120 }
      ],
      positioning_actions: [
        { id: "con-playbook", type: "artifact", title: "Client playbook", details: "Package your templates and QA checklists for repeat use.", est_minutes: 90 },
        { id: "con-thought", type: "message", title: "Thought leadership post", details: "Publish a 300‑word case study (no client names) with metrics.", est_minutes: 30 }
      ]
    },

    // ───────────────────────────────────────────────────────── DESIGN ────────
    design: {
      tool_recs: { default: ["figma", "design_tokens", "prompt_copy", "kb_ai"] },
      fast_start_actions: [
        { id: "des-tokenize", type: "task", title: "Tokenize a component", details: "Convert one component to design tokens; document usage.", est_minutes: 60, tool_refs: ["design_tokens"] },
        { id: "des-prompt-guide", type: "artifact", title: "Prompt guide", details: "Create a style/voice guide for content prompts.", est_minutes: 45, tool_refs: ["prompt_copy"] }
      ],
      momentum_actions: [
        { id: "des-variant-gen", type: "task", title: "Variant generator", details: "Set up AI to generate 3 variants; create a review rubric.", est_minutes: 60, tool_refs: ["figma"] },
        { id: "des-research-repo", type: "artifact", title: "Research repo", details: "Build a searchable repo of insights and patterns.", est_minutes: 90, tool_refs: ["kb_ai"] }
      ],
      positioning_actions: [
        { id: "des-system-playbook", type: "artifact", title: "Design systems playbook", details: "Document token usage, prompts, and QA steps.", est_minutes: 90 },
        { id: "des-showcase", type: "meeting", title: "Showcase", details: "Present tokenization benefits to Product and Eng.", est_minutes: 45 }
      ]
    },

    // ───────────────────────────────────────────────────────── LEGAL ────────
    legal: {
      tool_recs: { default: ["clm", "kb_ai", "policy_ai"] },
      fast_start_actions: [
        { id: "leg-clause-lib", type: "artifact", title: "Clause library", details: "Create a clause library with AI‑assisted summaries and risks.", est_minutes: 90, tool_refs: ["clm"] },
        { id: "leg-intake", type: "task", title: "Intake triage", details: "Add intake forms with routing and SLA expectations.", est_minutes: 45 }
      ],
      momentum_actions: [
        { id: "leg-playbook", type: "artifact", title: "Contract playbook", details: "Define fallbacks, thresholds, and escalation paths.", est_minutes: 120 },
        { id: "leg-policy-draft", type: "artifact", title: "AI policy draft", details: "Draft a safe‑use policy in partnership with HR/IT.", est_minutes: 90, conditions: { company_size_in: ["large", "enterprise"] } }
      ],
      positioning_actions: [
        { id: "leg-governance-board", type: "meeting", title: "Governance board", details: "Propose a monthly AI governance board with key stakeholders.", est_minutes: 45 },
        { id: "leg-metrics", type: "artifact", title: "Risk metrics", details: "Define review cadence and metrics for turnaround and disputes.", est_minutes: 60 }
      ]
    },

    // ───────────────────────────────────────────────────────── CONTENT / PR ──
    content: {
      tool_recs: { default: ["cms_ai", "prompt_copy", "seo_suite", "kb_ai"] },
      fast_start_actions: [
        { id: "cnt-style-guide", type: "artifact", title: "AI style guide", details: "Define tone, banned phrases, and brand examples.", est_minutes: 60 },
        { id: "cnt-repurpose", type: "task", title: "Repurpose content", details: "Turn one long asset into 5 short posts with AI; human edit.", est_minutes: 60, tool_refs: ["prompt_copy", "cms_ai"] }
      ],
      momentum_actions: [
        { id: "cnt-calendar", type: "artifact", title: "Content calendar", details: "Build a 4‑week calendar with AI suggestions and SME reviews.", est_minutes: 60 },
        { id: "cnt-seo-refresh", type: "task", title: "SEO refresh", details: "Refresh 3 posts; track rankings and CTR.", est_minutes: 90, tool_refs: ["seo_suite"] }
      ],
      positioning_actions: [
        { id: "cnt-playbook", type: "artifact", title: "Content ops playbook", details: "Document prompts, QA, and distribution flow.", est_minutes: 90 },
        { id: "cnt-internal-demo", type: "meeting", title: "Internal demo", details: "Show before/after and pitch a quarter‑long content ops pilot.", est_minutes: 45 }
      ]
    }
  }
};

export default HYBRID_PLAN_CATALOG;
