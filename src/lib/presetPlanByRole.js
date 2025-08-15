export function presetPlanByRole(role) {
  const titles = {
    writing_comms: role === "sales" ? "Personalized Outreach + Call Notes"
                  : role === "product" ? "Feedback → PRD Outline"
                  : role === "legal" ? "Clause Summaries & Redlines"
                  : "Status & Report Summaries",
    data_reporting: (role==="analyst"||role==="finance") ? "Auto-Narrated KPI Pack"
                   : role==="revops" ? "Forecast Reconciliation Notes"
                   : "KPI Pack with Variance Commentary",
    workflow_automation: role==="operations" ? "Intake → Approval → Assignment (SLA)"
                        : role==="cs_am" ? "Health Alerts → QBR Draft"
                        : "Intake → Tasks → Alerts Automation"
  };

  const wk = [
    "W1: Baseline samples + prompt card v1",
    "W2: Draft + add checks/guardrails",
    "W3: Measure before/after + tighten",
    "W4: Pilot/demo + SOP handoff"
  ];

  return {
    version: 1,
    persona: "Value Workflow Lead",
    weekly_investment_hours: 3,
    tracks: [
      { id: "writing_comms", title: titles.writing_comms, goal: "Cut comms time 40–50%", kpis: ["time_saved_per_week","quality_improvement","cycle_time"], week_plan: wk },
      { id: "data_reporting", title: titles.data_reporting, goal: "One-click refresh + auto-narratives with human sign-off", kpis: ["cycle_time","adoption","time_saved_per_week"], week_plan: wk },
      { id: "workflow_automation", title: titles.workflow_automation, goal: "Remove 3–5 manual steps", kpis: ["manual_steps_removed","sla_compliance","time_saved_per_week"], week_plan: wk }
    ],
    free_blurb: { headline: "Your 90-Day AI Plan", summary: "Three focused tracks with measurable time savings by Week 8." }
  };
}
