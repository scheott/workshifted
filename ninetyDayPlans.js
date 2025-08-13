// src/data/premiumContent/hybridPlanCatalog.js
// Complete hybrid, highly-personalizable roadmap catalog for AI career evolution
// Generates personalized 90-day plans: Fast Start (7 days) → Momentum (30 days) → Positioning (90 days)
//
// Token interpolation legend for `details` strings:
//  {{role}} {{industry_label}} {{company_size_label}} {{risk_band}} {{path_title}}
//  {{primary_task_focus}} {{top_tool_1}} {{top_tool_2}} {{timeline_label}}

export const HYBRID_PLAN_CATALOG = {
  // ─────────────────────────────────────────────────────── COPY VARIANTS ───────
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
    },
    timeline_descriptions: {
      "6–12 weeks": "Quick progression with focused effort",
      "12–20 weeks": "Steady transformation with room to iterate",
      "20–24 weeks": "Comprehensive evolution with deep skill building"
    }
  },

  // ─────────────────────────────────────────────────────── UNIVERSAL ACTIONS ───
  universal: {
    fast_start_actions: [
      {
        id: "fs-workspace",
        type: "task",
        title: "Set up your AI workspace",
        details: "Create a dedicated {{role}} workspace with prompt snippets, a 'Do/Don't' guardrail list, and a wins log.",
        est_minutes: 20,
        priority: 1
      },
      {
        id: "fs-quick-win",
        type: "artifact",
        title: "Ship a 60‑minute quick win",
        details: "Automate one repetitive step from your {{primary_task_focus}} using {{top_tool_1}}; record a 60‑sec before/after screen capture.",
        est_minutes: 60,
        tool_refs: ["automation_basic"],
        conditions: { risk_band_in: ["moderate", "high"] },
        priority: 2
      },
      {
        id: "fs-stakeholder",
        type: "meeting",
        title: "Book a 15‑min stakeholder chat",
        details: "Ask one partner what would save them 30 minutes a week. Use that input to target your next quick win.",
        est_minutes: 15,
        conditions: { company_size_in: ["medium", "large", "enterprise"] },
        priority: 3
      },
      {
        id: "fs-baseline",
        type: "task",
        title: "Document your baseline",
        details: "Track current time spent on routine tasks; you'll measure improvement against this.",
        est_minutes: 30,
        priority: 1
      }
    ],
    positioning_assets: [
      {
        id: "pos-linkedin",
        type: "message",
        title: "Post a visible outcome",
        details: "Share: 'Reduced {{primary_task_focus}} time by 30% using {{top_tool_1}} with QA checks.'",
        est_minutes: 15,
        priority: 2
      },
      {
        id: "pos-onepager",
        type: "artifact",
        title: "AI initiative one‑pager",
        details: "Draft a one‑pager outlining problem, solution, safety checks, and next steps for your {{path_title}} pilot.",
        est_minutes: 40,
        conditions: { company_size_in: ["medium", "large", "enterprise"] },
        priority: 1
      },
      {
        id: "pos-champion",
        type: "task",
        title: "Become the go-to AI resource",
        details: "Offer to run a lunch-and-learn on AI tools for your team; position yourself as the expert.",
        est_minutes: 45,
        priority: 3
      }
    ]
  },

  // ─────────────────────────────────────────────────────── ROLE DEFINITIONS ────
  roles: {
    // ───────────────────────────────────────────────────────── MARKETING ─────
    marketing: {
      tool_recs: {
        default: ["chatgpt", "jasper", "canva", "zapier", "hubspot"],
        by_industry: {
          media: ["cms_ai", "seo_suite", "buzzsumo"],
          retail: ["seo_suite", "hubspot", "klaviyo"],
          finance: ["compliance_copy", "grammarly"],
          healthcare: ["policy_ai", "kb_ai", "approved_content"],
          tech: ["product_hunt", "github_copilot", "notion_ai"]
        }
      },
      fast_start_actions: [
        {
          id: "mkt-copy-kit",
          type: "artifact",
          title: "Build a copy prompt kit",
          details: "Create 5 reusable prompts for A/B ad copy and subject lines; log outcomes in a sheet.",
          est_minutes: 45,
          tool_refs: ["prompt_copy"],
          priority: 1
        },
        {
          id: "mkt-report-draft",
          type: "task",
          title: "Automate weekly report draft",
          details: "Use {{top_tool_2}} to auto‑draft the weekly performance report; add a reviewer checklist.",
          est_minutes: 60,
          tool_refs: ["hubspot", "ga4"],
          conditions: { risk_band_in: ["moderate", "high"] },
          priority: 2
        },
        {
          id: "mkt-competitor-analysis",
          type: "task",
          title: "AI-powered competitor analysis",
          details: "Use AI to analyze 5 competitor campaigns; extract patterns and opportunities.",
          est_minutes: 90,
          priority: 3
        }
      ],
      momentum_actions: [
        {
          id: "mkt-campaign-optimizer",
          type: "task",
          title: "Launch an AI‑assisted campaign optimizer",
          details: "Set rules in Ads AI to rotate variants; add a guardrail: no change >15% CPA without review.",
          est_minutes: 90,
          tool_refs: ["ads_ai"],
          priority: 1
        },
        {
          id: "mkt-seo-refresh",
          type: "task",
          title: "SEO content refresh",
          details: "Use {{top_tool_1}} to rewrite 3 underperforming pages; human edit for voice; measure CTR uplift.",
          est_minutes: 90,
          tool_refs: ["seo_suite", "cms_ai"],
          conditions: { industry_in: ["media", "retail", "tech"] },
          priority: 2
        },
        {
          id: "mkt-artifact-case",
          type: "artifact",
          title: "Publish a 2‑page case study",
          details: "Document lift in CTR/CPA and time saved; share internally.",
          est_minutes: 60,
          priority: 3
        },
        {
          id: "mkt-personalization",
          type: "task",
          title: "Implement AI personalization",
          details: "Set up dynamic content personalization using AI; track engagement lift.",
          est_minutes: 120,
          priority: 2
        }
      ],
      positioning_actions: [
        {
          id: "mkt-playbook",
          type: "artifact",
          title: "Marketing AI playbook v1",
          details: "Draft your team's playbook: prompts, QA checks, and safe‑use rules tailored to {{industry_label}}.",
          est_minutes: 120,
          conditions: { company_size_in: ["medium", "large", "enterprise"] },
          priority: 1
        },
        {
          id: "mkt-demo",
          type: "meeting",
          title: "15‑min internal demo",
          details: "Demo 2 quick wins and your playbook; ask for a pilot scope for the next sprint.",
          est_minutes: 30,
          priority: 2
        },
        {
          id: "mkt-thought-leadership",
          type: "artifact",
          title: "Thought leadership piece",
          details: "Write 'How We Use AI in {{industry_label}} Marketing' for company blog.",
          est_minutes: 90,
          priority: 3
        }
      ]
    },

    // ───────────────────────────────────────────────────────── PRODUCT ───────
    product: {
      tool_recs: {
        default: ["chatgpt", "miro", "figma", "notion_ai", "linear"],
        by_industry: {
          tech: ["github_copilot", "vercel_ai", "anthropic_api"],
          healthcare: ["policy_ai", "compliance_check"],
          finance: ["risk_assessment_ai", "compliance_check"],
          public: ["policy_ai", "accessibility_checker"]
        }
      },
      fast_start_actions: [
        {
          id: "pm-experiment-catalog",
          type: "artifact",
          title: "Experiment backlog",
          details: "Create a 10‑idea backlog of AI experiments tied to key metrics.",
          est_minutes: 40,
          priority: 1
        },
        {
          id: "pm-eval-basics",
          type: "task",
          title: "Add eval basics",
          details: "Define success metrics and a lightweight eval harness for one AI feature.",
          est_minutes: 60,
          tool_refs: ["eval_harness"],
          priority: 2
        },
        {
          id: "pm-user-research",
          type: "task",
          title: "AI-assisted user research",
          details: "Use AI to analyze user feedback and extract top 5 themes.",
          est_minutes: 45,
          priority: 3
        }
      ],
      momentum_actions: [
        {
          id: "pm-prd-llm",
          type: "artifact",
          title: "PRD for AI feature",
          details: "Write a short PRD including risks, guardrails, and rollback criteria.",
          est_minutes: 60,
          priority: 1
        },
        {
          id: "pm-experiment-rollout",
          type: "task",
          title: "Run an AI experiment",
          details: "Ship one A/B test; baseline, launch, and capture learnings.",
          est_minutes: 120,
          tool_refs: ["experiment_platform"],
          priority: 2
        },
        {
          id: "pm-roadmap-optimization",
          type: "task",
          title: "AI-optimized roadmap",
          details: "Use AI to analyze feature requests and prioritize based on impact/effort.",
          est_minutes: 90,
          priority: 3
        }
      ],
      positioning_actions: [
        {
          id: "pm-ai-roadmap",
          type: "artifact",
          title: "AI roadmap v1",
          details: "Map 3 quarters of AI bets with expected impact and dependencies.",
          est_minutes: 120,
          conditions: { company_size_in: ["medium", "large", "enterprise"] },
          priority: 1
        },
        {
          id: "pm-showcase",
          type: "meeting",
          title: "Product showcase",
          details: "Present experiment outcomes and next bets to leadership.",
          est_minutes: 45,
          priority: 2
        },
        {
          id: "pm-certification",
          type: "task",
          title: "Get AI product certification",
          details: "Complete an AI product management certification to establish credibility.",
          est_minutes: 480,
          priority: 3
        }
      ]
    },

    // ───────────────────────────────────────────────────────── ANALYST ───────
    analyst: {
      tool_recs: {
        default: ["chatgpt", "tableau", "python", "excel", "zapier"],
        by_industry: {
          finance: ["power_bi", "excel", "bloomberg_api"],
          retail: ["looker", "segment", "mixpanel"],
          manufacturing: ["sap_analytics", "tableau"],
          tech: ["bigquery", "dbt", "mode"],
          healthcare: ["sas", "epic_reporting"]
        }
      },
      fast_start_actions: [
        {
          id: "anl-auto-refresh",
          type: "task",
          title: "Automate a refresh",
          details: "Schedule an auto‑refresh + emailed snapshot for one dashboard.",
          est_minutes: 45,
          tool_refs: ["power_bi", "tableau"],
          priority: 1
        },
        {
          id: "anl-zapier-pipeline",
          type: "task",
          title: "No‑code pipeline",
          details: "Use {{top_tool_1}} to ingest a CSV, clean it, and post results to a sheet.",
          est_minutes: 60,
          tool_refs: ["automation_basic"],
          priority: 2
        },
        {
          id: "anl-anomaly-detection",
          type: "task",
          title: "Set up anomaly detection",
          details: "Implement AI-based anomaly detection for key metrics.",
          est_minutes: 90,
          priority: 3
        }
      ],
      momentum_actions: [
        {
          id: "anl-dbt-model",
          type: "task",
          title: "Stand up a dbt model",
          details: "Create one source and one model; document lineage.",
          est_minutes: 120,
          tool_refs: ["dbt"],
          priority: 1
        },
        {
          id: "anl-artifact-case",
          type: "artifact",
          title: "Time‑saved case study",
          details: "Quantify weekly minutes saved and accuracy improvements.",
          est_minutes: 45,
          priority: 2
        },
        {
          id: "anl-predictive-model",
          type: "task",
          title: "Build predictive model",
          details: "Create a simple ML model for forecasting using AutoML tools.",
          est_minutes: 150,
          priority: 3
        }
      ],
      positioning_actions: [
        {
          id: "anl-qc-playbook",
          type: "artifact",
          title: "QC & Eval playbook",
          details: "Write checks for data quality and AI‑generated insights.",
          est_minutes: 90,
          priority: 1
        },
        {
          id: "anl-demo",
          type: "meeting",
          title: "Analytics showcase",
          details: "Demo your pipeline + dashboards to stakeholders; propose new SLAs.",
          est_minutes: 30,
          priority: 2
        },
        {
          id: "anl-center-excellence",
          type: "artifact",
          title: "Analytics CoE proposal",
          details: "Propose forming an Analytics Center of Excellence you'd lead.",
          est_minutes: 120,
          priority: 3
        }
      ]
    },

    // ───────────────────────────────────────────────────────── PROJECT MGMT ──
    project_manager: {
      tool_recs: {
        default: ["monday", "asana", "notion", "miro", "zapier"],
        by_industry: {
          tech: ["jira", "linear", "github_projects"],
          enterprise: ["ms_project", "servicenow"],
          consulting: ["smartsheet", "clickup"]
        }
      },
      fast_start_actions: [
        {
          id: "pm-risk-log",
          type: "artifact",
          title: "AI risk log",
          details: "Add risk/mitigation entries for one pilot.",
          est_minutes: 30,
          priority: 1
        },
        {
          id: "pm-scope-pilot",
          type: "task",
          title: "Scope a 2‑week pilot",
          details: "Define problem, success metric, and guardrails for a safe pilot.",
          est_minutes: 45,
          priority: 2
        },
        {
          id: "pm-status-automation",
          type: "task",
          title: "Automate status updates",
          details: "Set up AI to draft weekly status reports from project data.",
          est_minutes: 60,
          priority: 3
        }
      ],
      momentum_actions: [
        {
          id: "pm-standup-template",
          type: "artifact",
          title: "Stand‑up template",
          details: "Create an AI‑aware stand‑up template to track AI tasks and QA.",
          est_minutes: 30,
          priority: 1
        },
        {
          id: "pm-change-plan",
          type: "artifact",
          title: "Change plan",
          details: "Draft comms + training steps for rollout; include rollback criteria.",
          est_minutes: 90,
          priority: 2
        },
        {
          id: "pm-resource-optimization",
          type: "task",
          title: "AI resource planning",
          details: "Use AI to optimize resource allocation across projects.",
          est_minutes: 120,
          priority: 3
        }
      ],
      positioning_actions: [
        {
          id: "pm-ai-portfolio",
          type: "artifact",
          title: "Pilot portfolio",
          details: "Summarize pilots, outcomes, and next steps in a 1‑pager.",
          est_minutes: 60,
          priority: 1
        },
        {
          id: "pm-exec-brief",
          type: "meeting",
          title: "Exec brief",
          details: "5‑slide brief: impact, risks, and asks.",
          est_minutes: 45,
          priority: 2
        },
        {
          id: "pm-pmo-transformation",
          type: "artifact",
          title: "PMO transformation plan",
          details: "Design AI-enabled PMO with new processes and tools.",
          est_minutes: 180,
          priority: 3
        }
      ]
    },

    // ───────────────────────────────────────────────────────── ENGINEERING ───
    engineer_frontend: {
      tool_recs: {
        default: ["github_copilot", "cursor", "chatgpt", "vercel", "figma"],
        by_industry: {
          tech: ["anthropic_api", "openai_api", "langchain"],
          finance: ["secure_ai_tools", "compliance_scanner"],
          healthcare: ["hipaa_compliant_ai", "secure_coding"]
        }
      },
      fast_start_actions: [
        {
          id: "dev-copilot-setup",
          type: "task",
          title: "Tune your pair‑programmer",
          details: "Optimize Copilot settings; write a short prompt style guide for your repo.",
          est_minutes: 30,
          tool_refs: ["copilot"],
          priority: 1
        },
        {
          id: "dev-code-review",
          type: "task",
          title: "AI code review setup",
          details: "Implement AI-powered code review in your CI/CD pipeline.",
          est_minutes: 90,
          priority: 2
        },
        {
          id: "dev-test-generation",
          type: "task",
          title: "AI test generation",
          details: "Use AI to generate unit tests for uncovered code.",
          est_minutes: 60,
          priority: 3
        }
      ],
      momentum_actions: [
        {
          id: "dev-rag-demo",
          type: "artifact",
          title: "Ship a RAG demo",
          details: "Build a minimal knowledge search using {{top_tool_1}}; add auth & logging.",
          est_minutes: 180,
          tool_refs: ["openai_api", "pgvector"],
          conditions: { risk_band_in: ["moderate", "high"] },
          priority: 1
        },
        {
          id: "dev-eval-harness",
          type: "task",
          title: "Add an eval harness",
          details: "Introduce a basic eval suite for your LLM features (accuracy & regressions).",
          est_minutes: 90,
          tool_refs: ["eval_harness"],
          priority: 2
        },
        {
          id: "dev-case-study",
          type: "artifact",
          title: "Engineering case study",
          details: "Document before/after cycle time on a feature built with AI assistance.",
          est_minutes: 60,
          priority: 3
        }
      ],
      positioning_actions: [
        {
          id: "dev-playbook",
          type: "artifact",
          title: "Frontend AI playbook",
          details: "Publish repo conventions: prompt libs, evals, guardrails, and rollback steps.",
          est_minutes: 120,
          priority: 1
        },
        {
          id: "dev-internal-talk",
          type: "meeting",
          title: "Tech talk",
          details: "Present 'AI-Augmented Development' to engineering org.",
          est_minutes: 45,
          priority: 2
        },
        {
          id: "dev-open-source",
          type: "task",
          title: "Open source contribution",
          details: "Contribute to an AI dev tool project to build reputation.",
          est_minutes: 240,
          priority: 3
        }
      ]
    },

    // ───────────────────────────────────────────────────────── DATA ENG ──────
    engineer_data: {
      tool_recs: {
        default: ["dbt", "airflow", "snowflake", "databricks", "python"],
        by_industry: {
          tech: ["mlflow", "wandb", "kubeflow"],
          finance: ["risk_models", "compliance_ml"],
          retail: ["customer_360", "recommendation_engines"]
        }
      },
      fast_start_actions: [
        {
          id: "de-mlflow",
          type: "task",
          title: "Stand up MLflow/W&B",
          details: "Track one model with experiment metadata and artifacts.",
          est_minutes: 90,
          tool_refs: ["mlflow", "wandb"],
          priority: 1
        },
        {
          id: "de-metrics",
          type: "artifact",
          title: "Drift dashboard",
          details: "Create a simple data drift dashboard and set an alert threshold.",
          est_minutes: 90,
          tool_refs: ["evidently"],
          priority: 2
        },
        {
          id: "de-feature-store",
          type: "task",
          title: "Feature store setup",
          details: "Implement basic feature store for ML model inputs.",
          est_minutes: 120,
          priority: 3
        }
      ],
      momentum_actions: [
        {
          id: "de-kserve",
          type: "task",
          title: "Containerize + serve",
          details: "Serve a model via KServe/Triton; add canary + rollback.",
          est_minutes: 120,
          tool_refs: ["kserve", "triton"],
          priority: 1
        },
        {
          id: "de-runbook",
          type: "artifact",
          title: "Incident runbook",
          details: "Write triage steps for bad outputs and performance regressions.",
          est_minutes: 60,
          priority: 2
        },
        {
          id: "de-automl-pipeline",
          type: "task",
          title: "AutoML pipeline",
          details: "Build automated ML pipeline with hyperparameter tuning.",
          est_minutes: 180,
          priority: 3
        }
      ],
      positioning_actions: [
        {
          id: "de-slo",
          type: "artifact",
          title: "SLA/SLO doc",
          details: "Define SLOs for latency, accuracy, and cost; review quarterly.",
          est_minutes: 90,
          priority: 1
        },
        {
          id: "de-governance",
          type: "artifact",
          title: "ML governance framework",
          details: "Propose model governance checkpoints with Risk/Legal.",
          est_minutes: 120,
          conditions: { company_size_in: ["large", "enterprise"] },
          priority: 2
        },
        {
          id: "de-ml-platform",
          type: "artifact",
          title: "ML platform vision",
          details: "Design company-wide ML platform architecture.",
          est_minutes: 240,
          priority: 3
        }
      ]
    },

    // ───────────────────────────────────────────────────────── SALES ─────────
    sales: {
      tool_recs: {
        default: ["salesforce", "gong", "outreach", "chatgpt", "linkedin_sales_nav"],
        by_industry: {
          tech: ["product_demo_ai", "technical_sales_ai"],
          finance: ["compliance_messaging", "risk_assessment"],
          healthcare: ["hipaa_compliant_crm", "medical_terminology_ai"]
        }
      },
      fast_start_actions: [
        {
          id: "sales-seq",
          type: "task",
          title: "Optimize one sequence",
          details: "Use AI to write 3 variants; A/B test and lock a winner.",
          est_minutes: 45,
          tool_refs: ["sequencing", "prompt_copy"],
          priority: 1
        },
        {
          id: "sales-notes",
          type: "task",
          title: "AI meeting notes",
          details: "Adopt AI notes + action items; summarize for manager weekly.",
          est_minutes: 30,
          priority: 2
        },
        {
          id: "sales-research",
          type: "task",
          title: "AI prospect research",
          details: "Use AI to research and personalize outreach for 10 prospects.",
          est_minutes: 60,
          priority: 3
        }
      ],
      momentum_actions: [
        {
          id: "sales-prospecting",
          type: "task",
          title: "Outbound prospecting boost",
          details: "Automate list build + first‑touch personalization; 30 accounts/week.",
          est_minutes: 90,
          priority: 1
        },
        {
          id: "sales-case",
          type: "artifact",
          title: "Before/after deck",
          details: "Document reply rate lift and hours saved; share internally.",
          est_minutes: 45,
          priority: 2
        },
        {
          id: "sales-objection-handling",
          type: "artifact",
          title: "AI objection library",
          details: "Build AI-powered objection handling playbook.",
          est_minutes: 90,
          priority: 3
        }
      ],
      positioning_actions: [
        {
          id: "sales-enablement",
          type: "artifact",
          title: "Enablement kit",
          details: "Create prompt kits for outreach, objections, and call prep.",
          est_minutes: 90,
          priority: 1
        },
        {
          id: "sales-pilot",
          type: "meeting",
          title: "Pilot presentation",
          details: "Present AI sales acceleration pilot results to leadership.",
          est_minutes: 30,
          priority: 2
        },
        {
          id: "sales-revenue-intelligence",
          type: "artifact",
          title: "Revenue intelligence proposal",
          details: "Design AI-driven revenue intelligence system.",
          est_minutes: 150,
          priority: 3
        }
      ]
    },

    // ───────────────────────────────────────────────────────── CS / SUCCESS ──
    cs_am: {
      tool_recs: {
        default: ["zendesk", "intercom", "gainsight", "chatgpt", "loom"],
        by_industry: {
          tech: ["product_analytics", "api_monitoring"],
          finance: ["compliance_support", "secure_messaging"],
          healthcare: ["patient_portal", "hipaa_chat"]
        }
      },
      fast_start_actions: [
        {
          id: "cs-macro-kit",
          type: "artifact",
          title: "Macro + prompt kit",
          details: "Create 10 macros/prompt starters for top issues.",
          est_minutes: 60,
          tool_refs: ["kb_ai"],
          priority: 1
        },
        {
          id: "cs-health-signal",
          type: "task",
          title: "Add one health signal",
          details: "Create a simple churn risk signal and weekly review.",
          est_minutes: 45,
          tool_refs: ["health_scoring"],
          priority: 2
        },
        {
          id: "cs-knowledge-base",
          type: "task",
          title: "AI knowledge base audit",
          details: "Use AI to identify and fill gaps in customer documentation.",
          est_minutes: 90,
          priority: 3
        }
      ],
      momentum_actions: [
        {
          id: "cs-bot-routing",
          type: "task",
          title: "Bot + routing rules",
          details: "Add a bot for basic triage; set confidence threshold and human fallback.",
          est_minutes: 90,
          priority: 1
        },
        {
          id: "cs-artifact-case",
          type: "artifact",
          title: "Retention case study",
          details: "Quantify deflections and CSAT; share internally.",
          est_minutes: 45,
          priority: 2
        },
        {
          id: "cs-proactive-outreach",
          type: "task",
          title: "Proactive AI outreach",
          details: "Build AI system to identify and reach at-risk customers.",
          est_minutes: 120,
          priority: 3
        }
      ],
      positioning_actions: [
        {
          id: "cs-kb-owner",
          type: "artifact",
          title: "KB ownership proposal",
          details: "Propose owning the KB + AI prompts, with a monthly review.",
          est_minutes: 45,
          priority: 1
        },
        {
          id: "cs-stakeholder",
          type: "meeting",
          title: "CS <> Product sync",
          details: "Set a bi‑weekly feedback loop; track top 3 issues.",
          est_minutes: 30,
          priority: 2
        },
        {
          id: "cs-success-metrics",
          type: "artifact",
          title: "Success metrics framework",
          details: "Define and implement customer success KPIs with AI tracking.",
          est_minutes: 120,
          priority: 3
        }
      ]
    },

    // ───────────────────────────────────────────────────────── REVOPS ────────
    revops: {
      tool_recs: {
        default: ["salesforce", "hubspot", "dbt", "tableau", "zapier"],
        by_industry: {
          tech: ["segment", "heap", "hightouch"],
          finance: ["compliance_tools", "audit_automation"],
          retail: ["customer_data_platform", "loyalty_systems"]
        }
      },
      fast_start_actions: [
        {
          id: "ro-cleanup",
          type: "task",
          title: "Field hygiene cleanup",
          details: "Fix one pipeline stage; add validation and alerts.",
          est_minutes: 60,
          priority: 1
        },
        {
          id: "ro-zap",
          type: "task",
          title: "Automate a handoff",
          details: "Automate SDR→AE handoff with {{top_tool_1}}; add QA.",
          est_minutes: 60,
          tool_refs: ["automation_basic"],
          priority: 2
        },
        {
          id: "ro-lead-scoring",
          type: "task",
          title: "AI lead scoring",
          details: "Implement ML-based lead scoring model.",
          est_minutes: 120,
          priority: 3
        }
      ],
      momentum_actions: [
        {
          id: "ro-bi-scorecard",
          type: "artifact",
          title: "GTM scorecard",
          details: "Publish a weekly scorecard; include definition of each metric.",
          est_minutes: 90,
          tool_refs: ["bi_suite"],
          priority: 1
        },
        {
          id: "ro-dbt-pipeline",
          type: "task",
          title: "dbt pipeline",
          details: "Model lifecycle stages; document sources and lineage.",
          est_minutes: 120,
          tool_refs: ["dbt"],
          priority: 2
        },
        {
          id: "ro-revenue-forecasting",
          type: "task",
          title: "AI revenue forecasting",
          details: "Build ML model for accurate revenue predictions.",
          est_minutes: 180,
          priority: 3
        }
      ],
      positioning_actions: [
        {
          id: "ro-playbook",
          type: "artifact",
          title: "RevOps automation playbook",
          details: "Write SOPs for routing, dedupe, and enrichment using AI.",
          est_minutes: 120,
          priority: 1
        },
        {
          id: "ro-governance",
          type: "artifact",
          title: "GTM data governance",
          details: "Propose ownership + reviews; align Sales, CS, and Marketing.",
          est_minutes: 60,
          priority: 2
        },
        {
          id: "ro-gtm-intelligence",
          type: "artifact",
          title: "GTM intelligence platform",
          details: "Design unified revenue intelligence system.",
          est_minutes: 240,
          priority: 3
        }
      ]
    },

    // ───────────────────────────────────────────────────────── FINANCE ───────
    finance: {
      tool_recs: {
        default: ["excel", "power_bi", "alteryx", "blackline", "chatgpt"],
        by_industry: {
          tech: ["netsuite", "stripe_sigma", "chargebee"],
          finance: ["bloomberg", "refinitiv", "risk_models"],
          retail: ["sap", "oracle_fusion"],
          healthcare: ["epic_finance", "medicare_billing"]
        }
      },
      fast_start_actions: [
        {
          id: "fin-close-automation",
          type: "task",
          title: "Close process automation",
          details: "Automate a reconciliation step; document checks.",
          est_minutes: 60,
          priority: 1
        },
        {
          id: "fin-report-draft",
          type: "task",
          title: "Auto‑draft variance report",
          details: "Draft variance commentary with AI; add reviewer checklist.",
          est_minutes: 60,
          priority: 2
        },
        {
          id: "fin-anomaly-detection",
          type: "task",
          title: "Expense anomaly detection",
          details: "Set up AI to flag unusual transactions.",
          est_minutes: 90,
          priority: 3
        }
      ],
      momentum_actions: [
        {
          id: "fin-fpa-model",
          type: "task",
          title: "FP&A model refresh",
          details: "Refactor one model; add scenario toggles and data validation.",
          est_minutes: 120,
          priority: 1
        },
        {
          id: "fin-powerbi-dashboard",
          type: "artifact",
          title: "Finance dashboard",
          details: "Publish a KPI dashboard with drill‑downs; schedule weekly snapshots.",
          est_minutes: 90,
          tool_refs: ["power_bi"],
          priority: 2
        },
        {
          id: "fin-forecasting",
          type: "task",
          title: "AI cash flow forecasting",
          details: "Build ML model for cash flow predictions.",
          est_minutes: 150,
          priority: 3
        }
      ],
      positioning_actions: [
        {
          id: "fin-governance",
          type: "artifact",
          title: "Data governance memo",
          details: "Propose data ownership, checks, and audit logs for AI outputs.",
          est_minutes: 60,
          conditions: { company_size_in: ["large", "enterprise"] },
          priority: 1
        },
        {
          id: "fin-partner-sync",
          type: "meeting",
          title: "Business partner sync",
          details: "Monthly sync with Ops/Sales to prioritize automation opportunities.",
          est_minutes: 30,
          priority: 2
        },
        {
          id: "fin-transformation",
          type: "artifact",
          title: "Finance transformation roadmap",
          details: "Design 3-year digital finance transformation plan.",
          est_minutes: 240,
          priority: 3
        }
      ]
    },

    // ───────────────────────────────────────────────────────── OPERATIONS ────
    operations: {
      tool_recs: {
        default: ["power_automate", "zapier", "monday", "tableau", "python"],
        by_industry: {
          manufacturing: ["sap", "mes_systems", "iot_platforms"],
          retail: ["inventory_ai", "demand_forecasting"],
          logistics: ["route_optimization", "warehouse_automation"]
        }
      },
      fast_start_actions: [
        {
          id: "ops-map",
          type: "task",
          title: "Map a process",
          details: "Map a 10‑step process and mark two automation candidates.",
          est_minutes: 45,
          priority: 1
        },
        {
          id: "ops-qa",
          type: "artifact",
          title: "QA checklist",
          details: "Draft a QA checklist for the target process.",
          est_minutes: 30,
          priority: 2
        },
        {
          id: "ops-bottleneck",
          type: "task",
          title: "AI bottleneck analysis",
          details: "Use AI to identify and prioritize process bottlenecks.",
          est_minutes: 60,
          priority: 3
        }
      ],
      momentum_actions: [
        {
          id: "ops-rpa-pilot",
          type: "task",
          title: "Pilot an automation",
          details: "Build a small RPA/Zapier flow; add audit logging.",
          est_minutes: 120,
          tool_refs: ["rpa", "automation_basic"],
          priority: 1
        },
        {
          id: "ops-kpi",
          type: "artifact",
          title: "Ops KPI dashboard",
          details: "Track time/cost saved and defect rate.",
          est_minutes: 60,
          tool_refs: ["bi_suite"],
          priority: 2
        },
        {
          id: "ops-predictive-maintenance",
          type: "task",
          title: "Predictive analytics",
          details: "Implement predictive model for operations optimization.",
          est_minutes: 180,
          priority: 3
        }
      ],
      positioning_actions: [
        {
          id: "ops-playbook",
          type: "artifact",
          title: "Ops automation playbook",
          details: "Document standard connectors, retries, and fallbacks.",
          est_minutes: 120,
          priority: 1
        },
        {
          id: "ops-qbr",
          type: "meeting",
          title: "Ops QBR",
          details: "Present wins; propose next 2 candidates.",
          est_minutes: 45,
          priority: 2
        },
        {
          id: "ops-excellence-center",
          type: "artifact",
          title: "Operational excellence framework",
          details: "Design company-wide ops excellence program.",
          est_minutes: 240,
          priority: 3
        }
      ]
    },

    // ───────────────────────────────────────────────────────── HR / PEOPLE ───
    hr: {
      tool_recs: {
        default: ["workday", "greenhouse", "chatgpt", "culture_amp", "lattice"],
        by_industry: {
          tech: ["lever", "triplebyte", "codeSignal"],
          finance: ["background_check_ai", "compliance_training"],
          healthcare: ["credential_verification", "shift_scheduling"]
        }
      },
      fast_start_actions: [
        {
          id: "hr-jd-refresh",
          type: "artifact",
          title: "JD refresh",
          details: "Create AI‑assisted job description templates with inclusive language.",
          est_minutes: 45,
          priority: 1
        },
        {
          id: "hr-screening",
          type: "task",
          title: "Screening automation",
          details: "Draft screening questions and a structured review rubric.",
          est_minutes: 60,
          priority: 2
        },
        {
          id: "hr-sentiment",
          type: "task",
          title: "Employee sentiment analysis",
          details: "Use AI to analyze feedback and identify themes.",
          est_minutes: 90,
          priority: 3
        }
      ],
      momentum_actions: [
        {
          id: "hr-onboarding",
          type: "artifact",
          title: "Onboarding KB",
          details: "Build a searchable onboarding guide with Q&A.",
          est_minutes: 90,
          tool_refs: ["kb_ai"],
          priority: 1
        },
        {
          id: "hr-survey",
          type: "task",
          title: "Pulse survey",
          details: "Run a quarterly pulse survey; analyze with AI and share actions.",
          est_minutes: 90,
          tool_refs: ["survey_ai"],
          priority: 2
        },
        {
          id: "hr-talent-matching",
          type: "task",
          title: "AI talent matching",
          details: "Build internal mobility matching system.",
          est_minutes: 150,
          priority: 3
        }
      ],
      positioning_actions: [
        {
          id: "hr-policy",
          type: "artifact",
          title: "AI use policy draft",
          details: "Draft safe‑use policy in partnership with Legal.",
          est_minutes: 90,
          conditions: { company_size_in: ["large", "enterprise"] },
          priority: 1
        },
        {
          id: "hr-lnd",
          type: "artifact",
          title: "L&D module",
          details: "Create a 30‑min intro to AI tools for your org.",
          est_minutes: 120,
          priority: 2
        },
        {
          id: "hr-people-analytics",
          type: "artifact",
          title: "People analytics platform",
          details: "Design predictive people analytics system.",
          est_minutes: 240,
          priority: 3
        }
      ]
    },

    // ───────────────────────────────────────────────────────── MANAGEMENT ────
    management: {
      tool_recs: {
        default: ["notion", "miro", "tableau", "chatgpt", "microsoft_teams"],
        by_industry: {
          tech: ["linear", "github", "slack_analytics"],
          finance: ["bloomberg", "board_reporting_tools"],
          enterprise: ["power_bi", "servicenow", "workday"]
        }
      },
      fast_start_actions: [
        {
          id: "mgr-priorities",
          type: "task",
          title: "Priorities audit",
          details: "Identify 2 teams with the highest routine load; pick one pilot each.",
          est_minutes: 45,
          priority: 1
        },
        {
          id: "mgr-okr",
          type: "artifact",
          title: "AI OKR draft",
          details: "Draft OKRs linking AI initiatives to outcomes (time saved, NPS).",
          est_minutes: 45,
          priority: 2
        },
        {
          id: "mgr-team-assessment",
          type: "task",
          title: "Team AI readiness",
          details: "Assess team's AI readiness and skill gaps.",
          est_minutes: 60,
          priority: 3
        }
      ],
      momentum_actions: [
        {
          id: "mgr-review",
          type: "meeting",
          title: "Monthly review",
          details: "Set a 30‑min monthly review on AI pilots and outcomes.",
          est_minutes: 30,
          priority: 1
        },
        {
          id: "mgr-dash",
          type: "artifact",
          title: "Exec dashboard",
          details: "BI dashboard for efficiency and adoption KPIs.",
          est_minutes: 90,
          tool_refs: ["bi_suite"],
          priority: 2
        },
        {
          id: "mgr-innovation-lab",
          type: "task",
          title: "Innovation lab",
          details: "Launch team innovation lab for AI experiments.",
          est_minutes: 120,
          priority: 3
        }
      ],
      positioning_actions: [
        {
          id: "mgr-governance",
          type: "artifact",
          title: "Governance charter",
          details: "Define guardrails, roles, and escalation paths.",
          est_minutes: 90,
          conditions: { company_size_in: ["large", "enterprise"] },
          priority: 1
        },
        {
          id: "mgr-townhall",
          type: "meeting",
          title: "Town hall",
          details: "Present wins and the roadmap to org; recruit champions.",
          est_minutes: 45,
          priority: 2
        },
        {
          id: "mgr-transformation",
          type: "artifact",
          title: "Digital transformation strategy",
          details: "Create comprehensive digital transformation roadmap.",
          est_minutes: 300,
          priority: 3
        }
      ]
    },

    // ───────────────────────────────────────────────────────── FALLBACK ──────
    other: {
      tool_recs: {
        default: ["chatgpt", "notion", "zapier", "canva", "google_workspace"]
      },
      fast_start_actions: [
        {
          id: "other-audit",
          type: "task",
          title: "Task audit",
          details: "List your top 10 weekly tasks; mark 3 automation candidates.",
          est_minutes: 30,
          priority: 1
        },
        {
          id: "other-first-automation",
          type: "task",
          title: "First automation",
          details: "Automate your most repetitive task using {{top_tool_1}}.",
          est_minutes: 60,
          priority: 2
        }
      ],
      momentum_actions: [
        {
          id: "other-workflow",
          type: "task",
          title: "Build a workflow",
          details: "Connect 2-3 tools you use daily with automation.",
          est_minutes: 90,
          priority: 1
        },
        {
          id: "other-documentation",
          type: "artifact",
          title: "Process documentation",
          details: "Document your new AI-enhanced workflow.",
          est_minutes: 60,
          priority: 2
        }
      ],
      positioning_actions: [
        {
          id: "other-proposal",
          type: "artifact",
          title: "AI initiative proposal",
          details: "Propose an AI pilot for your department.",
          est_minutes: 90,
          priority: 1
        },
        {
          id: "other-champion",
          type: "meeting",
          title: "Champion meeting",
          details: "Present your AI wins to leadership.",
          est_minutes: 30,
          priority: 2
        }
      ]
    }
  }
};

// ─────────────────────────────────────────────────────── HELPER FUNCTIONS ────
export function getToolRecommendations(role, industry) {
  const roleConfig = HYBRID_PLAN_CATALOG.roles[role] || HYBRID_PLAN_CATALOG.roles.other;
  const defaultTools = roleConfig.tool_recs.default || [];
  const industryTools = roleConfig.tool_recs.by_industry?.[industry] || [];
  
  // Combine and deduplicate
  return [...new Set([...defaultTools, ...industryTools])];
}

export function filterActionsByConditions(actions, context) {
  return actions.filter(action => {
    if (!action.conditions) return true;
    
    for (const [key, value] of Object.entries(action.conditions)) {
      if (key === 'risk_band_in' && !value.includes(context.risk_band)) return false;
      if (key === 'company_size_in' && !value.includes(context.company_size)) return false;
      if (key === 'industry_in' && !value.includes(context.industry)) return false;
    }
    
    return true;
  });
}

export function interpolateTokens(text, tokens) {
  return text.replace(/\{\{(\w+)\}\}/g, (match, key) => tokens[key] || match);
}

export function prioritizeActions(actions, maxActions = 5) {
  return actions
    .sort((a, b) => (a.priority || 99) - (b.priority || 99))
    .slice(0, maxActions);
}

export default HYBRID_PLAN_CATALOG;