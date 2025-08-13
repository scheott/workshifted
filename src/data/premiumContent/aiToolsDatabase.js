// src/data/premiumContent/aiToolsDatabase.js
export const AITOOLS_DB = {
  // Core/automation
  automation_basic: { label: "Zapier / Make" },
  rpa: { label: "RPA (UiPath / Power Automate)" },
  docs_ai: { label: "Docs AI (Google/Microsoft)" },
  kb_ai: { label: "Knowledge Base AI (Confluence/Notion Q&A)" },
  comms_suite: { label: "Comms Suite (Slack/Teams)" },

  // Analytics/BI
  power_bi: { label: "Power BI" },
  tableau: { label: "Tableau" },
  bigquery: { label: "BigQuery" },
  dbt: { label: "dbt" },
  bi_suite: { label: "BI Suite (Looker/Mode/Metabase)" },

  // Marketing
  ga4: { label: "Google Analytics 4" },
  ads_ai: { label: "Ads AI (Google/Meta)" },
  prompt_copy: { label: "Copy Assistant (Jasper/Writer)" },
  cms_ai: { label: "CMS AI (Contentful/WordPress)" },
  seo_suite: { label: "SEO Suite (Ahrefs/Semrush)" },
  compliance_copy: { label: "Compliant Copy Assistant" },

  // Product/experimentation
  experiment_platform: { label: "Experiment Platform (LaunchDarkly/Optimizely)" },
  analytics_suite: { label: "Product Analytics (Amplitude/Mixpanel)" },
  eval_harness: { label: "LLM Eval Harness (Ragas/DeepEval)" },
  prompt_testing: { label: "Prompt Testing (Helicone/Custom)" },

  // Eng/AI app dev
  openai_api: { label: "OpenAI/Anthropic API" },
  langchain: { label: "LangChain/LangGraph" },
  pgvector: { label: "pgvector / Pinecone" },
  copilot: { label: "GitHub Copilot" },

  // MLOps/serving
  mlflow: { label: "MLflow" },
  wandb: { label: "Weights & Biases" },
  kserve: { label: "KServe" },
  triton: { label: "NVIDIA Triton" },
  evidently: { label: "Evidently AI" },

  // DevOps/Observability
  kubernetes: { label: "Kubernetes" },
  seldon: { label: "Seldon Core" },
  grafana: { label: "Grafana" },
  prometheus: { label: "Prometheus" },

  // QA/Testing
  playwright: { label: "Playwright" },
  cypress: { label: "Cypress" },
  ragas: { label: "Ragas" },
  deepeval: { label: "DeepEval" },
  guardrails: { label: "Guardrails" },

  // GTM/Sales/CS
  sfdc: { label: "Salesforce" },
  hubspot: { label: "HubSpot" },
  sequencing: { label: "Sequencing (Salesloft/Outreach)" },
  zendesk: { label: "Zendesk" },
  intercom: { label: "Intercom" },
  health_scoring: { label: "Health Scoring (Gainsight/Custom)" },

  // HR/Legal
  ats: { label: "ATS (Greenhouse/Lever)" },
  survey_ai: { label: "Survey AI (Typeform/Qualtrics)" },
  clm: { label: "Contract Lifecycle (Ironclad/DocuSign CLM)" },
  policy_ai: { label: "AI Policy/Governance Toolkit" },

  // Research/Content/Design
  research_ai: { label: "AI Research (Perplexity/Custom)" },
  slide_ai: { label: "AI Slides (Tome/Beautiful.ai)" },
  figma: { label: "Figma" },
  design_tokens: { label: "Design Tokens" },
};
export default AITOOLS_DB;
