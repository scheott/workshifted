// src/data/premiumContent/templates/bossProposals.js
// Internal proposals, emails, and outlines to position the user as the "AI coordinator".
// Keep these short, low-risk, and measurable.

// ─────────────────────────────────────────────────────────────────────────────
// Email: Ask to run a time-boxed pilot
export function aiInitiativeEmail({
  managerName = "<Manager>",
  project = "AI-assisted reporting",
  timebox = "4 weeks",
  outcome = "cut reporting time by 30%",
  metricOwner = "Ops",
  safeguards = ["human review", "QA checks", "rollback"],
} = {}) {
  const guard = safeguards.join(", ");
  return `Subject: Proposal: ${project} pilot (${timebox})

Hi ${managerName},

I'd like to run a time-boxed pilot to ${outcome}. The goal is a low-risk test with clear measurement.
Scope: define the target workflow, ship a safe MVP, and measure impact with ${metricOwner}.
Safeguards: ${guard}.

If approved, I'll share milestones and brief weekly updates. Low risk, measurable upside.

— <You>`;
}

// One-pager: Pilot scope for leadership sign-off
export function pilotScopeOnePager({
  title = "AI Pilot: Reporting Automation",
  problem = "Manual copy/paste and inconsistent summaries",
  currentProcess = "Weekly data export → manual formatting → email",
  hypothesis = "AI can draft reports and humans can review in minutes",
  safeguards = ["QA checklist", "approval gate", "rollback"],
  metrics = ["time saved", "error rate", "stakeholder satisfaction"],
  timeline = "2 weeks MVP → 2 weeks pilot",
  stakeholders = ["Ops", "Marketing"],
} = {}) {
  return `# ${title}

**Problem**  
${problem}

**Current Process**  
${currentProcess}

**Hypothesis**  
${hypothesis}

**Safeguards**  
- ${safeguards.join("\n- ")}

**Success Metrics**  
- ${metrics.join("\n- ")}

**Timeline**  
${timeline}

**Stakeholders**  
${stakeholders.join(", ")}
`;
}

// Meeting agenda template
export function meetingAgenda({ duration = 30, items = [
  "Goal & constraints (5m)",
  "Current pain points (5m)",
  "Pilot proposal (10m)",
  "Risks & safeguards (5m)",
  "Decision & next steps (5m)",
] } = {}) {
  return `Agenda (${duration} min)\n- ${items.join("\n- ")}`;
}

// Executive brief outline (deck)
export function execBriefOutline({
  pathTitle = "AI Implementation PM",
  wins = ["30% time saved", "Fewer errors"],
  risks = ["data privacy", "hallucinations"],
  budget = "$0–$2k tools",
  asks = ["Approve pilot scope", "Share 1 stakeholder"]
} = {}) {
  return [
    `1) Why now: routine work + AI maturity (1 slide)`,
    `2) Proposed role: ${pathTitle} (1 slide)`,
    `3) Quick wins delivered: ${wins.join(", ")} (1 slide)`,
    `4) Risks & safeguards: ${risks.join(", ")} (1 slide)`,
    `5) Budget: ${budget} (1 slide)`,
    `6) Ask: ${asks.join("; ")} (1 slide)`,
  ];
}

// Risk & controls appendix
export function riskControlsAppendix({
  dataPrivacy = ["no PII in prompts", "use approved providers"],
  humanReview = ["dual review for critical outputs"],
  evalMetrics = ["accuracy threshold", "regression tests"],
  rollback = ["disable switch", "fallback to baseline"],
} = {}) {
  return `## Risk & Controls

**Data Privacy**  
- ${dataPrivacy.join("\n- ")}

**Human Review**  
- ${humanReview.join("\n- ")}

**Evaluation**  
- ${evalMetrics.join("\n- ")}

**Rollback**  
- ${rollback.join("\n- ")}
`;
}

// Simple ROI helper (deterministic math; call it to print numbers in your UI)
export function roiCalculator({
  baselineHours = 10, // hours/week spent today
  hoursSavedPerWeek = 3, // hours/week saved by pilot
  hourlyCost = 60, // $/hour loaded
  qaTimePerWeek = 0.5, // added human review
  toolCostPerMonth = 50,
} = {}) {
  const netHours = Math.max(0, hoursSavedPerWeek - qaTimePerWeek);
  const weeklySavings = netHours * hourlyCost;
  const monthlySavings = weeklySavings * 4 - toolCostPerMonth;
  const paybackWeeks = weeklySavings > 0 ? Math.ceil(toolCostPerMonth / weeklySavings) : Infinity;
  return { netHours, weeklySavings, monthlySavings, paybackWeeks };
}

// Weekly status email for pilots
export function statusUpdateEmail({
  pilotName = "Reporting Automation",
  week = 2,
  progress = ["MVP live", "QA checklist drafted"],
  blockers = ["Waiting for data access"],
  next = ["Run evals", "Schedule demo"],
} = {}) {
  return `Subject: ${pilotName} — Week ${week} update

Wins: ${progress.join(", ")}
Blockers: ${blockers.join(", ")}
Next: ${next.join(", ")}
`;
}

// Promotion / title-change proposal memo
export function promotionProposal({
  newTitle = "AI Coordinator (Internal)",
  scope = ["Surface automation candidates", "Own playbooks & QA", "Enable team training"],
  justification = ["Delivered three quick wins", "Built a reusable playbook", "Reduced cycle time 25%"],
  outcomes = ["Time saved", "Quality uplift"],
  roadmap = ["Quarterly review", "Scale to two more teams"],
} = {}) {
  return `# ${newTitle}

**Scope**  
- ${scope.join("\n- ")}

**Why now**  
- ${justification.join("\n- ")}

**Outcomes to measure**  
- ${outcomes.join("\n- ")}

**Roadmap**  
- ${roadmap.join("\n- ")}
`;
}

export default {
  aiInitiativeEmail,
  pilotScopeOnePager,
  meetingAgenda,
  execBriefOutline,
  riskControlsAppendix,
  roiCalculator,
  statusUpdateEmail,
  promotionProposal,
};
