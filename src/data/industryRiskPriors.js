// src/data/industryRiskPriors.js
// Role×Industry priors and an industry threat timeline helper used by aiRiskEngine.
// Values are in 0..1 where higher => more exposed to automation of routine tasks.
// Tweak these as you gather real outcomes.

export const ROLE_PRIOR = {
  analyst: 0.55,
  project_manager: 0.35,
  product: 0.40,
  marketing: 0.50,
  sales: 0.45,
  cs_am: 0.40,
  revops: 0.50,
  finance: 0.48,
  operations: 0.42,
  admin: 0.75,
  hr: 0.50,
  management: 0.25,
  consultant: 0.45,
  design: 0.52,
  legal: 0.35,
  content: 0.60,
  engineer_frontend: 0.42,
  engineer_data: 0.38,
  devops: 0.32,
  qa_testing: 0.55,
  other: 0.50,
};

// Industry nudges are small adjustments applied to ROLE_PRIOR.
export const INDUSTRY_NUDGE = {
  tech: +0.05,
  finance: +0.02,
  healthcare: -0.03,
  prof_services: +0.00,
  manufacturing: -0.02,
  retail: +0.02,
  media: +0.05,
  real_estate: +0.02,
  public: -0.05,
  other: 0.0,
};

// Lightweight industry automation outlook used in free-tier copy.
const INDUSTRY_THREAT_TIMELINE = {
  tech: { by2028: 0.35, note: "automation of routine coding, testing, reporting" },
  finance: { by2028: 0.40, note: "reporting, reconciliations, baseline analysis" },
  healthcare: { by2028: 0.25, note: "documentation, prior auth, back-office ops" },
  prof_services: { by2028: 0.38, note: "first-pass research & drafting" },
  manufacturing: { by2028: 0.22, note: "procurement & QC support" },
  retail: { by2028: 0.33, note: "ops & merchandising analytics" },
  media: { by2028: 0.45, note: "content ops & ad optimization" },
  real_estate: { by2028: 0.28, note: "listings, comps, outreach automation" },
  public: { by2028: 0.20, note: "forms processing & knowledge search" },
  other: { by2028: 0.30, note: "varies by function" },
};

export const getIndustryThreatTimeline = (industry) =>
  INDUSTRY_THREAT_TIMELINE[industry] || INDUSTRY_THREAT_TIMELINE.other;

// Optional helper if you want a single call to compute a prior for a given role×industry
export const priorFor = (role = "other", industry = "other") => {
  const base = ROLE_PRIOR[role] ?? ROLE_PRIOR.other;
  const nudge = INDUSTRY_NUDGE[industry] ?? 0;
  return Math.max(0, Math.min(1, base + nudge));
};
