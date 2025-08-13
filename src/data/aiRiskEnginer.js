// src/data/aiRiskEngine.js
// The brain (modular): uses priors, path catalog, and premium plan generator.

import {
  ROLE_PRIOR,
  INDUSTRY_NUDGE,
  getIndustryThreatTimeline,
} from "./industryRiskPriors";
import { ROLE_PATHS, ROLE_TASK_TAGS } from "./evolutionPaths";
import { generateNinetyDayPlan } from "./premiumContent/ninetyDayPlans";

const clamp01 = (x) => Math.max(0, Math.min(1, x));
const round = (x, n = 0) => Number(x.toFixed(n));
const get = (answers, id, fallback = null) =>
  answers?.[id]?.value ?? answers?.[id] ?? fallback;

const likert5Map = (val) => {
  if (typeof val === "number") return ({1:0,2:0.25,3:0.5,4:0.75,5:1}[val] ?? 0.5);
  return 0.5;
};

const SCI_OPTION_MAP = { 0: 0.0, "0": 0.0, "1_3": 0.25, "4_6": 0.5, "7_10": 0.75, "10_plus": 1.0 };
const TAE_OPTION_MAP = { none: 0.0, rare: 0.2, sometimes: 0.4, weekly: 0.6, daily: 0.8 };

export function computeRiskScore(answers = {}) {
  // Subscores (0..1)
  const TRI = clamp01((Number(get(answers, "tri_pct_delegate", 0)) / 100 +
    likert5Map(get(answers, "tri_could_ai_do_30", 3))) / 2);

  const HJE = clamp01(likert5Map(get(answers, "hje_empathy_calls", 3)));
  const SCI = clamp01(SCI_OPTION_MAP[get(answers, "sci_hours_live", "0")] ?? 0.5);
  const TAE = clamp01(TAE_OPTION_MAP[get(answers, "tae_usage_level", "none")] ?? 0);

  // Priors
  const role = get(answers, "profile_role_family", "other");
  const industry = get(answers, "profile_industry", "other");
  const PRIOR = clamp01((ROLE_PRIOR[role] ?? ROLE_PRIOR.other) + (INDUSTRY_NUDGE[industry] ?? 0));

  // Explainable risk formula
  const W = { TRI: 0.45, PRIOR: 0.22, TAE: 0.13, HJE: -0.10, SCI: -0.10 };
  const risk01 = clamp01(W.TRI*TRI + W.PRIOR*PRIOR + W.TAE*TAE + W.HJE*HJE + W.SCI*SCI);
  const score = Math.round(100 * risk01);

  const contributions = [
    { factor: "Routine work", key: "TRI", weight: W.TRI, value: TRI, points: round(100*W.TRI*TRI) },
    { factor: "Role × industry exposure", key: "PRIOR", weight: W.PRIOR, value: PRIOR, points: round(100*W.PRIOR*PRIOR) },
    { factor: "Tool/automation exposure", key: "TAE", weight: W.TAE, value: TAE, points: round(100*W.TAE*TAE) },
    { factor: "Human judgment", key: "HJE", weight: W.HJE, value: HJE, points: round(100*W.HJE*HJE) },
    { factor: "Stakeholder interaction", key: "SCI", weight: W.SCI, value: SCI, points: round(100*W.SCI*SCI) },
  ];

  const summary = buildScoreSummary(score, { TRI, HJE, SCI, TAE, PRIOR });

  // Confidence (simple)
  let confidence = "high";
  if (TRI <= 0.2 && TAE >= 0.6) confidence = "medium";
  if (TRI >= 0.8 && HJE >= 0.8 && SCI >= 0.8) confidence = "medium";

  return {
    score,
    risk01,
    subscores: { TRI, HJE, SCI, TAE, PRIOR },
    contributions,
    confidence,
    role,
    industry,
    summary,
  };
}

function buildScoreSummary(score, s) {
  const up = [{k:"TRI",v:s.TRI,l:"routine work"},{k:"PRIOR",v:s.PRIOR,l:"role/industry exposure"},{k:"TAE",v:s.TAE,l:"tool exposure"}].sort((a,b)=>b.v-a.v)[0];
  const down = [{k:"HJE",v:s.HJE,l:"human judgment"},{k:"SCI",v:s.SCI,l:"stakeholder work"}].sort((a,b)=>b.v-a.v)[0];
  const band = score < 35 ? "low" : score < 65 ? "moderate" : "high";
  return `AI-Risk ${score}/100 (${band}). Biggest driver: ${up.l}. Biggest moat: ${down.l}.`;
}

const MATCH = (a,b)=>1-Math.abs(clamp01(a)-clamp01(b));
const skillsGapDistance = (userTags, pathSkills=[]) => {
  const u = new Set(userTags);
  const miss = pathSkills.filter(s=>!u.has(s)).length;
  return clamp01(miss / Math.max(1, pathSkills.length));
};
const inferUserTags = (answers) => {
  const tags = new Set();
  const t = get(answers, "role_specific_tasks");
  (ROLE_TASK_TAGS[t] || []).forEach(x=>tags.add(x));
  const tae = get(answers, "tae_usage_level", "none");
  if (tae === "weekly" || tae === "daily") tags.add("automation");
  if (get(answers, "profile_role_family","").includes("engineer")) tags.add("code");
  return [...tags];
};

export function suggestEvolutionPaths(answers={}, risk=computeRiskScore(answers)) {
  const role = risk.role || get(answers,"profile_role_family","other");
  const size = get(answers,"company_size","small");
  const scenario = get(answers,"goal_risk_scenario","moderate");
  const { TRI,HJE,SCI,TAE } = risk.subscores;

  const candidates = (ROLE_PATHS[role] || ROLE_PATHS.analyst).slice();
  const userTags = inferUserTags(answers);

  const ranked = candidates.map(p=>{
    const fit = 0.35*MATCH(p.demands.human_judgment,HJE)
              + 0.25*MATCH(p.demands.stakeholder,SCI)
              + 0.20*MATCH(p.demands.automation_literacy,TAE)
              + 0.20*(1 - skillsGapDistance(userTags, p.skills));

    const difficulty = Math.max(1, Math.min(5, 1 + Math.ceil(5*skillsGapDistance(userTags,p.skills) - (TAE>=0.6?1:0))));
    const timeline = deriveTimeline(size, scenario, difficulty, TAE);
    const why = buildWhyBullets(p,{HJE,SCI,TAE},userTags).slice(0,4);

    const finalFit = clamp01(fit + 0.05 * scenarioAlign(scenario, p.aggressiveness));
    return { title:p.title, fit: Math.round(finalFit*100), difficulty, timeline, why, tools:p.tools, courses:p.courses, aggressiveness:p.aggressiveness, pathSkills:p.skills };
  }).sort((a,b)=>b.fit-a.fit).slice(0,3);

  return ranked;
}

function deriveTimeline(size, scenario, difficulty, TAE){
  const base = {startup:8, small:10, medium:12, large:14, enterprise:16}[size] || 12;
  let weeks = base + (difficulty-3)*2 - (TAE>=0.6?2:0);
  if (scenario==="bold") weeks-=2;
  if (scenario==="safe") weeks+=2;
  return weeks<=12? "6–12 weeks" : weeks<=20? "12–20 weeks" : "20–24 weeks";
}
const scenarioAlign = (scenario,agg)=> (scenario===agg?1:0);
function buildWhyBullets(p,s,userTags){
  const out=[];
  if (s.SCI>=0.6 && p.demands.stakeholder>=0.6) out.push("You already do stakeholder work — key for this role.");
  if (s.HJE>=0.6 && p.demands.human_judgment>=0.6) out.push("Strong judgment/ambiguity handling maps well here.");
  if (s.TAE>=0.6 && p.demands.automation_literacy>=0.6) out.push("Your AI/automation exposure shortens the ramp.");
  const gaps = p.skills.filter(t=>!userTags.includes(t)).slice(0,2);
  if (gaps.length) out.push(`Quick win: add ${gaps.join(" + ")}.`);
  if (!out.length) out.push("Leverages your strengths while reducing routine work.");
  return out;
}

export function buildFreeBlurb(answers={}, risk=computeRiskScore(answers)){
  const { score, subscores, industry } = risk;
  const tl = getIndustryThreatTimeline(industry);
  const [top] = suggestEvolutionPaths(answers, risk);
  return {
    headline: `Your role’s AI-Risk is ${score}/100 — ${score<35?"low":score<65?"moderate":"high"}.`,
    sub: `Biggest driver: ${subscores.TRI>=0.6?"routine tasks":"industry exposure"}. Biggest moat: ${subscores.SCI>=subscores.HJE?"stakeholder work":"human judgment"}.`,
    timeline: `In your industry, ~${Math.round(tl.by2028*100)}% of routine tasks could be automated by 2028 (${tl.note}).`,
    suggestion: `Near-term evolution: ${top.title} (${top.timeline}). Focus on ${top.why[0] || "reducing routine work and owning the playbook."}`,
  };
}

export { getIndustryThreatTimeline, generateNinetyDayPlan };
export default { computeRiskScore, suggestEvolutionPaths, buildFreeBlurb, getIndustryThreatTimeline, generateNinetyDayPlan };
