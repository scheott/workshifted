// src/data/premiumContent/hybridPlanGenerator.js
// Assembles a personalized Hybrid Plan (Fast Start → Momentum → Positioning)
// using the HYBRID_PLAN_CATALOG, the user's answers, and the risk outputs.
//
// Usage example (inside your Results page):
//   import HYBRID_PLAN_CATALOG from "@/data/premiumContent/hybridPlanCatalog";
//   import { AITOOLS_DB } from "@/data/premiumContent/aiToolsDatabase";
//   import { ROLE_TASK_TAGS } from "@/data/evolutionPaths";
//   import { buildHybridPlan } from "@/data/premiumContent/hybridPlanGenerator";
//   const plan = buildHybridPlan({ answers, risk, selectedPath, catalog: HYBRID_PLAN_CATALOG, aiToolsDb: AITOOLS_DB });

import { HYBRID_PLAN_CATALOG } from "./ninetyDayPlans";
import { ROLE_TASK_TAGS } from "../evolutionPaths";
import { AITOOLS_DB } from "./aiToolsDatabase";

// ─────────────────────────────────────────────────────────────────────────────
// Public API
export function buildHybridPlan({ answers, risk, selectedPath, catalog = HYBRID_PLAN_CATALOG, aiToolsDb = AITOOLS_DB }) {
  const role = answers?.profile_role_family || "other";
  const industry = answers?.profile_industry || "other";
  const size = answers?.company_size || "small";
  const scenario = answers?.goal_risk_scenario || "moderate";
  const motivation = answers?.motivation || "proactive";
  const band = inferRiskBand(risk?.score ?? 50);

  const roleCat = catalog.roles[role] || catalog.roles.other;
  const tools = resolveTools(roleCat?.tool_recs, industry, aiToolsDb);

  const tokens = makeTokens({ answers, risk, selectedPath, tools, aiToolsDb });

  // Pick blocks by conditions
  const ctx = { industry, size, band, scenario, answers, risk, role, userTags: inferUserTags(answers) };
  const fastBlocks = pickBlocks([...(catalog.universal.fast_start_actions||[]), ...(roleCat.fast_start_actions||[])], ctx);
  const momentumBlocks = pickBlocks([...(roleCat.momentum_actions||[])], ctx);
  const positioningBlocks = pickBlocks([...(catalog.universal.positioning_assets||[]), ...(roleCat.positioning_actions||[])], ctx);

  // Render/interpolate tokens
  const render = (b) => ({ ...b, details: interpolate(b.details || "", tokens) });

  const intro = catalog.copy_variants?.intro?.[motivation] || "Let's stack quick wins.";
  const riskNote = catalog.copy_variants?.risk_explainer?.[band] || "Moderate exposure — shift routine to AI.";

  return {
    header: {
      intro,
      riskNote,
      timeline: selectedPath?.timeline || deriveTimeline(size, scenario, 3, risk?.subscores?.TAE || 0.4),
      pathTitle: selectedPath?.title || titleCase(role),
    },
    fast_start: fastBlocks.map(render),
    momentum: momentumBlocks.map(render),
    positioning: positioningBlocks.map(render),
    tools,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Internals
const clamp01 = (x)=>Math.max(0,Math.min(1,x));
const titleCase = (s)=> (s||"").replace(/[_-]+/g," ").replace(/\w\S*/g,(t)=>t.charAt(0).toUpperCase()+t.slice(1));

function inferRiskBand(score){ return score<35?"low":score<65?"moderate":"high"; }

function deriveTimeline(size, scenario, difficulty=3, TAE=0.4){
  const base = {startup:8, small:10, medium:12, large:14, enterprise:16}[size] || 12;
  let weeks = base + (difficulty-3)*2 - (TAE>=0.6?2:0);
  if (scenario==="bold") weeks-=2; if (scenario==="safe") weeks+=2;
  return weeks<=12?"6–12 weeks":weeks<=20?"12–20 weeks":"20–24 weeks";
}

function industryLabel(id){
  const map={ tech:"Technology / Software", finance:"Banking / Finance / Insurance", healthcare:"Healthcare / Life Sciences", prof_services:"Professional Services / Consulting / Legal", manufacturing:"Manufacturing / Industrial", retail:"Retail / eCommerce / CPG", media:"Media / Publishing / Entertainment", real_estate:"Real Estate / Property", public:"Government / Nonprofit / Education", other:"Other" };
  return map[id] || titleCase(id);
}

function companySizeLabel(id){
  const map={ startup:"Startup (<50)", small:"Small (50–200)", medium:"Medium (200–1,000)", large:"Large (1,000+)", enterprise:"Enterprise (10,000+)"};
  return map[id] || titleCase(id);
}

function primaryTaskFocusLabel(id){
  const map={ reports_data:"reporting & analysis", projects_coord:"stakeholder coordination", client_facing:"client & partner work", creative_strategy:"creative strategy & problem‑solving", process_admin:"process & compliance", research_analysis:"research, writing & documentation" };
  return map[id] || "core work";
}

function inferUserTags(answers){
  const t = new Set();
  const work = answers?.role_specific_tasks;
  (ROLE_TASK_TAGS[work]||[]).forEach(x=>t.add(x));
  const tae = answers?.tae_usage_level;
  if (tae==="weekly" || tae==="daily") t.add("automation");
  if ((answers?.profile_role_family||"").includes("engineer")) t.add("code");
  return [...t];
}

function resolveTools(toolRecs={}, industry, db){
  const base = [...new Set([...(toolRecs?.default||[]), ...((toolRecs?.by_industry?.[industry])||[])])];
  // return objects with key + label for display
  return base.map(key=>({ key, label: db[key]?.label || titleCase(key) }));
}

function interpolate(str, tokens){
  return (str||"").replace(/{{\s*([\w_]+)\s*}}/g,(m,k)=> tokens?.[k] ?? m);
}

function makeTokens({ answers, risk, selectedPath, tools }){
  const role = answers?.profile_role_family || "other";
  const roleLabel = titleCase(role);
  const industry = answers?.profile_industry || "other";
  const size = answers?.company_size || "small";
  const focus = primaryTaskFocusLabel(answers?.role_specific_tasks);
  return {
    role: roleLabel,
    industry_label: industryLabel(industry),
    company_size_label: companySizeLabel(size),
    risk_band: inferRiskBand(risk?.score ?? 50),
    path_title: selectedPath?.title || roleLabel,
    primary_task_focus: focus,
    top_tool_1: tools?.[0]?.label || "an AI tool",
    top_tool_2: tools?.[1]?.label || "another AI tool",
    timeline_label: selectedPath?.timeline || deriveTimeline(size, answers?.goal_risk_scenario||"moderate", 3, risk?.subscores?.TAE||0.4),
  };
}

function matches(conditions={}, ctx){
  const { industry, size, band, scenario, answers, risk, userTags } = ctx;
  if (!conditions) return true;
  const listOk = (arr, val)=> !arr?.length || arr.includes(val);
  if (!listOk(conditions.industry_in, industry)) return false;
  if (!listOk(conditions.company_size_in, size)) return false;
  if (!listOk(conditions.risk_band_in, band)) return false;
  if (!listOk(conditions.scenario_in, scenario)) return false;
  if (conditions.requires_tags?.length){
    const u = new Set(userTags||[]);
    if (!conditions.requires_tags.every(t=>u.has(t))) return false;
  }
  // exclude_if: simple subscores thresholds
  if (conditions.exclude_if?.subscores){
    const s = risk?.subscores || {};
    const ex = conditions.exclude_if.subscores;
    if (ex.TAE_gte!=null && (s.TAE ?? 0) >= ex.TAE_gte) return false;
    if (ex.TRI_lte!=null && (s.TRI ?? 1) <= ex.TRI_lte) return false;
    if (ex.SCI_gte!=null && (s.SCI ?? 0) >= ex.SCI_gte) return false;
    if (ex.HJE_gte!=null && (s.HJE ?? 0) >= ex.HJE_gte) return false;
  }
  return true;
}

function pickBlocks(blocks=[], ctx){
  return blocks.filter(b=>matches(b.conditions, ctx));
}

export default { buildHybridPlan };
