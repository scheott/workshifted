// src/data/aiPlanCore.js
export const CORE = {
  nonNegotiables: [
    "Define 2–3 KPIs and baseline them",
    "Create a Prompt Library (versioned, examples, do/don't)",
    "Set data privacy rules (PII, access, storage, approvals)",
    "Document SOPs and a rollback/fallback path",
    "Record short Loom demos for each workflow"
  ],
  qualityGates: {
    accuracy: "≥ 95% against human-verified samples",
    privacy: "No PII in prompts; approved data sources only",
    traceability: "Citations/links for claims; versioned prompts",
    safety: "Human review for external comms & legal content",
    observability: "Log runs, failures, and time saved"
  },
  weeks: [
    { week: 1, steps: ["KPI alignment & baselines", "Confirm data/PII rules", "Prompt Library v1 shell"] },
    { week: 2, steps: ["Tool access & least-privilege set", "Golden examples collected", "Review checklist v1"] },
    { week: 5, steps: ["QA checks added to all tracks", "Define Definition-of-Done per track"] },
    { week: 8, steps: ["Pilot training (30–60m)", "Collect adoption & error feedback"] },
    { week: 12, steps: ["Exec readout: wins, risks, roadmap", "Assign owners & update cadence"] }
  ]
};