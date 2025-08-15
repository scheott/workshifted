// src/lib/enrichPlan.js
// Enriches a generated plan with context: whyThisFits, toolkit, prompts, risks, artifacts, task_meta
export function enrichPlan(plan, { answers = {}, tools_for_role = [], skills_for_role = {} } = {}) {
  if (!plan || !Array.isArray(plan.tracks)) return plan;

  const role = (answers.current_role || answers.profile_role_family || 'professional').replaceAll('_',' ');
  const motivation = answers.motivation || 'job_security';
  const pref = answers.work_preference || '';

  const whyFromMotivation = {
    higher_pay: "Focus on measurable time savings and ROI.",
    work_life_balance: "Remove manual steps and reduce context switching.",
    job_security: "Harden reporting, coverage, and SOPs to reduce key-person risk.",
    meaningful_work: "Prioritize customer outcomes and clarity in communications.",
    entrepreneurship: "Package repeatable workflows that compound value."
  }[motivation] || "Build reusable workflows and document them.";

  const baseRisks = [
    "No PII in prompts; approved data sources only.",
    "Human review for external communications and legal content."
  ];

  // Default prompts by track
  const promptLib = {
    writing_comms: [
      "Summarize this weekly status for execs in 120 words. Include risks and next steps.",
      "Rewrite for stakeholder <X>. Keep neutral tone. Add two action bullets."
    ],
    data_reporting: [
      "Explain KPI variance (>±10%) with likely drivers. Add confidence and next checks.",
      "Draft a narrative for this dashboard: trend, outliers, and recommendations."
    ],
    workflow_automation: [
      "Propose a 3-step automation for this intake → task flow. Include fallback/override.",
      "List exceptions and alerts for this workflow. Suggest detection rules."
    ]
  };

  const defaultTaskMeta = {
    W1: { estimate: 40, priority: "High",   dod: ["Baseline captured","Prompt card v1 saved"] },
    W2: { estimate: 60, priority: "High",   dod: ["Checks added","Style/validation applied"] },
    W3: { estimate: 60, priority: "Normal", dod: ["Before/after measured","Target set"] },
    W4: { estimate: 45, priority: "Normal", dod: ["Pilot feedback logged","SOP + Loom linked"] }
  };

  // Enrich every track
  plan.tracks = plan.tracks.map(t => {
    const tk = t.id;
    const enriched = { ...t };

    // Why this fits (short, personal)
    const why = [
      `Role: ${role} — aligns with your ${pref || 'work style'}.`,
      whyFromMotivation
    ];
    enriched.whyThisFits = why;

    // Toolkit (from caller; keep short)
    enriched.toolkit = Array.isArray(plan.recommended_tools) && plan.recommended_tools.length
      ? plan.recommended_tools
      : (tools_for_role || []).slice(0,4);

    // Prompts (2 per track)
    enriched.prompts = promptLib[tk] || [];

    // Risks/guardrails + artifacts
    enriched.risks = baseRisks;
    enriched.artifacts = ["Prompt card", "SOP page", "Loom demo"];

    // Task meta (W1–W4)
    enriched.task_meta = { ...defaultTaskMeta, ...(t.task_meta || {}) };

    // Ensure goals are measurable
    if (tk === 'writing_comms' && !/%\b|\d/.test(enriched.goal || '')) {
      enriched.goal = "Cut comms time 50–60% by Week 8";
    }
    if (tk === 'data_reporting' && !/refresh|one-?click|24/.test((enriched.goal||'').toLowerCase())) {
      enriched.goal = "One-click refresh + auto-narratives with human sign-off";
    }
    if (tk === 'workflow_automation' && !/manual steps|fallback/i.test(enriched.goal || '')) {
      enriched.goal = "Remove 3–5 manual steps with fallback/override";
    }

    return enriched;
  });

  // Bubble up recommended_tools if not already present
  if (!plan.recommended_tools && tools_for_role?.length) {
    plan.recommended_tools = tools_for_role.slice(0,5);
  }

  return plan;
}
export default enrichPlan;
