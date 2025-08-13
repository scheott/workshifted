// src/data/premiumContent/templates/linkedinScripts.js
// Re-usable LinkedIn copy generators tuned for AI-evolution positioning.
// Use tokens from results (role, industry, selected path, outcomes) to render personalized content.

// ─────────────────────────────────────────────────────────────────────────────
// Public API
export function linkedinHeadline({ pathTitle = "AI Coordinator", role = "Professional", industryLabel = "", tone = "neutral" } = {}) {
  const year = new Date().getFullYear();
  const focus = pathTitle.split(" ")[0];
  const tag = tone === "bold" ? "Lead with AI" : tone === "safe" ? "Human + AI, Safely" : "Automation + Impact";
  const ind = industryLabel ? ` • ${industryLabel}` : "";
  return `${focus} • ${tag} • ${year}${ind}`;
}

export function linkedinAbout({
  role = "Marketing Manager",
  pathTitle = "AI Marketing Strategist",
  outcomes = [], // e.g., ["Cut reporting time 30%", "Lifted CTR 12%" ]
  tools = [], // e.g., ["Power BI", "Zapier", "OpenAI API"]
  strengths = [], // e.g., ["stakeholder alignment", "data storytelling"]
  motivation = "proactive", // concerned | proactive | curious | stuck
} = {}) {
  const toneLead = {
    concerned: "I help reduce routine work quickly and safely.",
    proactive: "I turn human + AI workflows into measurable wins.",
    curious: "I test practical AI workflows to see what sticks.",
    stuck: "I ship small wins that build momentum fast.",
  }[motivation] || "I improve speed-to-value with human + AI.";

  const outcomesLine = outcomes.length ? `Recent outcomes: ${outcomes.map(o => `• ${o}`).join(" ")}` : "";
  const toolsLine = tools.length ? `Toolbox: ${tools.join(", ")}.` : "";
  const strengthsLine = strengths.length ? `Strengths: ${strengths.join(", ")}.` : "";

  return `I’m a ${role} evolving into a ${pathTitle}. ${toneLead}
${outcomesLine}
${toolsLine}
${strengthsLine}
If you're exploring AI adoption, I'm happy to share playbooks and before/after examples.`.trim();
}

export function linkedinExperienceBullets({
  project = "AI reporting pilot",
  impact = "time saved",
  pct = 30,
  timeSaved = "3 hrs/week",
  qualityGain = null,
  tools = [],
  guardrails = ["human review", "eval harness", "rollback"],
  stakeholders = ["Marketing", "Sales"],
} = {}) {
  const t = tools.length ? ` using ${tools.join(", ")}` : "";
  const g = guardrails.length ? ` with ${guardrails.join(", ")}` : "";
  const s = stakeholders.length ? `; partnered with ${stakeholders.join(", ")}` : "";
  const q = qualityGain ? `; improved quality (+${qualityGain})` : "";
  return [
    `Led ${project}${t}; achieved ${pct}% ${impact} (${timeSaved})${g}${s}${q}.`,
    `Documented a reusable playbook and trained the team on safe-use prompts and QA gates.`,
    `Presented before/after metrics and secured scope for the next pilot.`,
  ];
}

export function linkedinFeaturedPost({
  win = "Reduced weekly reporting time by 30%",
  tool = "Power BI + Zapier",
  before = "manual copy/paste",
  after = "auto-drafted report with human review",
  safeguards = ["QA checklist", "rollback switch"],
  callToAction = "DM if you want the prompt kit or SOP",
} = {}) {
  const guard = safeguards.length ? `Safeguards: ${safeguards.join(", ")}.` : "";
  return `Quick win: ${win}.
Before: ${before} → After: ${after} using ${tool}.
${guard}
${callToAction}`.trim();
}

export function linkedinOpenToWork({
  pathTitle = "AI Implementation PM",
  tags = ["AI adoption", "automation", "enablement"],
} = {}) {
  return `Exploring roles in ${pathTitle} • ${tags.join(" • ")}`;
}

export function linkedinConnectionRequest({
  context = "We’re both working on AI adoption",
  mutual = null,
  ask = "Happy to share a 2-page case study if useful",
} = {}) {
  const m = mutual ? ` (mutual: ${mutual})` : "";
  return `Hi there — ${context}${m}. ${ask}.`;
}

export function linkedinCommentScript({ topic = "AI + Marketing", angle = "practical" } = {}) {
  const line = angle === "risk" ?
    "Love this. Worth adding: safeguards (QA, evals, rollback) are what make AI wins stick." :
    angle === "leadership" ?
    "+1. The fastest wins happen when one person owns prompts, QA, and a simple playbook." :
    "Great thread. Small, measurable wins beat big-bang AI projects every time.";
  return line;
}

export const linkedinHashtags = (tags = ["AI", "automation", "careerevolution"]) => tags.map(t => (t.startsWith("#") ? t : `#${t}`)).join(" ");

// Convenience preset builder for results page
export function buildLinkedInPack({ role, pathTitle, outcomes = [], tools = [], motivation = "proactive" } = {}) {
  const headline = linkedinHeadline({ pathTitle, role, tone: motivation === "concerned" ? "safe" : motivation === "bold" ? "bold" : "neutral" });
  const about = linkedinAbout({ role, pathTitle, outcomes, tools, motivation });
  const featured = linkedinFeaturedPost({ win: outcomes[0] || "Shipped a small AI win", tool: tools.slice(0,2).join(" + ") || "AI toolkit" });
  const bullets = linkedinExperienceBullets({ tools, pct: 20, timeSaved: "2 hrs/week" });
  const openTo = linkedinOpenToWork({ pathTitle });
  return { headline, about, featured, bullets, openTo };
}

export default {
  linkedinHeadline,
  linkedinAbout,
  linkedinExperienceBullets,
  linkedinFeaturedPost,
  linkedinOpenToWork,
  linkedinConnectionRequest,
  linkedinCommentScript,
  linkedinHashtags,
  buildLinkedInPack,
};
