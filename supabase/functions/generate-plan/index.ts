// supabase/functions/generate-plan/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// ---------- preset fallback ----------
function presetPlanByRole(role: string) {
  const titles = {
    writing_comms:
      role === "sales" ? "Personalized Outreach + Call Notes"
      : role === "product" ? "Feedback → PRD Outline"
      : role === "legal" ? "Clause Summaries & Redlines"
      : "Status & Report Summaries",
    data_reporting:
      role === "analyst" || role === "finance" ? "Auto-Narrated KPI Pack"
      : role === "revops" ? "Forecast Reconciliation Notes"
      : "KPI Pack with Variance Commentary",
    workflow_automation:
      role === "operations" ? "Intake → Approval → Assignment (SLA)"
      : role === "cs_am" ? "Health Alerts → QBR Draft"
      : "Intake → Tasks → Alerts Automation",
  };

  const wk = [
    "W1: Baseline samples + prompt card v1",
    "W2: Draft + add checks/guardrails",
    "W3: Measure before/after + tighten",
    "W4: Pilot/demo + SOP handoff",
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

// ---------- prompt builder ----------
function buildPrompt(args: {
  answers: any, risk_result: any,
  skills_for_role?: any, tools_for_role?: string[]
}) {
  const { answers, risk_result, skills_for_role, tools_for_role } = args;

  const role =
    answers?.current_role ||
    answers?.profile_role_family ||
    "other";

  const industry = answers?.profile_industry || answers?.industry || "other";
  const motivation = answers?.motivation || "job_security";

  const riskPercent =
    typeof risk_result?.percent === "number"
      ? Math.max(0, Math.min(1, risk_result.percent))
      : typeof risk_result?.score === "number"
        ? Math.max(0, Math.min(100, risk_result.score)) / 100
        : 0.5;

  const tools = tools_for_role?.length ? tools_for_role : [];
  const skills = skills_for_role || { aiResistantSkills: [], hybridSkills: [] };

  return `
You are an AI product assistant. Generate a 90-day plan.

INPUTS:
role=${role}, industry=${industry}, motivation=${motivation}, risk_percent=${riskPercent}
answers=${JSON.stringify(answers)}
risk_result=${JSON.stringify(risk_result)}
skills_for_role=${JSON.stringify(skills)}
tools_for_role=${JSON.stringify(tools)}

RULES:
- Return STRICT JSON (no markdown).
- Exactly 3 tracks with ids: writing_comms, data_reporting, workflow_automation.
- Use ONLY tools in tools_for_role (if provided). If empty, don't name products.
- Week steps: 4 per track (W1–W4), each <25 words, practical and specific.
- Persona label must be one of: "Analytics Storyteller","Automation Champion","Discovery Synthesizer","Pipeline Optimizer","Customer Outcomes Leader","Solo Systems Builder","Value Workflow Lead".
- weekly_investment_hours between 2 and 6.

SCHEMA:
{
  "version": 1,
  "persona": "string",
  "weekly_investment_hours": number,
  "tracks": [
    { "id": "writing_comms", "title": "string", "goal": "string", "kpis": ["time_saved_per_week","quality_improvement","cycle_time"], "week_plan": ["W1: ...","W2: ...","W3: ...","W4: ..."] },
    { "id": "data_reporting", "title": "string", "goal": "string", "kpis": ["cycle_time","adoption","time_saved_per_week"], "week_plan": ["W1: ...","W2: ...","W3: ...","W4: ..."] },
    { "id": "workflow_automation", "title": "string", "goal": "string", "kpis": ["manual_steps_removed","sla_compliance","time_saved_per_week"], "week_plan": ["W1: ...","W2: ...","W3: ...","W4: ..."] }
  ],
  "free_blurb": { "headline": "string", "summary": "string" }
}
`.trim();
}

// ---------- CORE (quality gates + weeks) ----------
const CORE = {
  nonNegotiables: [
    "Define 2–3 KPIs and baseline them",
    "Create a Prompt Library (versioned, examples, do/don’t)",
    "Set data privacy rules (PII, access, storage, approvals)",
    "Document SOPs and a rollback/fallback path",
    "Record short Loom demos for each workflow",
  ],
  qualityGates: {
    accuracy: "≥ 95% against human-verified samples",
    privacy: "No PII in prompts; approved data sources only",
    traceability: "Citations/links; versioned prompts",
    safety: "Human review for external comms & legal content",
    observability: "Log runs, failures, and time saved",
  },
  weeks: [
    { week: 1, steps: ["KPI alignment & baselines", "Confirm data/PII rules", "Prompt Library v1 shell"] },
    { week: 2, steps: ["Tool access & least-privilege set", "Golden examples collected", "Review checklist v1"] },
    { week: 5, steps: ["QA checks added to all tracks", "Define Definition-of-Done per track"] },
    { week: 8, steps: ["Pilot training (30–60m)", "Collect adoption & error feedback"] },
    { week: 12, steps: ["Exec readout: wins, risks, roadmap", "Assign owners & update cadence"] },
  ],
};

// ---------- inline enrichment ----------
function enrichPlanEdge(
  plan: any,
  args: { answers?: any; tools_for_role?: string[]; skills_for_role?: any } = {}
) {
  if (!plan || !Array.isArray(plan.tracks)) return plan;

  const answers = args.answers || {};
  const role = (answers.current_role || answers.profile_role_family || "professional").replaceAll("_"," ");
  const motivation = answers.motivation || "job_security";
  const pref = answers.work_preference || "";

  const whyByMotivation: Record<string,string> = {
    higher_pay: "Focus on measurable time savings and ROI.",
    work_life_balance: "Remove manual steps and reduce context switching.",
    job_security: "Harden reporting, coverage, and SOPs to reduce key-person risk.",
    meaningful_work: "Prioritize customer outcomes and clarity in communications.",
    entrepreneurship: "Package repeatable workflows that compound value."
  };
  const whyMotiv = whyByMotivation[motivation] || "Build reusable workflows and document them.";

  const baseRisks = [
    "No PII in prompts; approved data sources only.",
    "Human review for external communications and legal content."
  ];

  const promptLib: Record<string,string[]> = {
    writing_comms: [
      "Summarize this weekly status for execs in 120 words. Include risks and next steps.",
      "Rewrite for stakeholder <X>. Keep neutral tone. Add two action bullets."
    ],
    data_reporting: [
      "Explain KPI variance (>±10%) with likely drivers. Add confidence and next checks.",
      "Draft a dashboard narrative: trend, outliers, recommendations."
    ],
    workflow_automation: [
      "Propose a 3-step intake→task automation. Include fallback/override.",
      "List exceptions and alerts for this workflow. Suggest detection rules."
    ]
  };

  const defaultTaskMeta = {
    W1: { estimate: 40, priority: "High",   dod: ["Baseline captured","Prompt card v1 saved"] },
    W2: { estimate: 60, priority: "High",   dod: ["Checks added","Style/validation applied"] },
    W3: { estimate: 60, priority: "Normal", dod: ["Before/after measured","Target set"] },
    W4: { estimate: 45, priority: "Normal", dod: ["Pilot feedback logged","SOP + Loom linked"] }
  };

  const toolkit = Array.isArray(plan.recommended_tools) && plan.recommended_tools.length
    ? plan.recommended_tools
    : (args.tools_for_role || []).slice(0,4);

  const tracks = plan.tracks.map((t: any) => {
    const id = t.id;
    const out = { ...t };

    out.whyThisFits = [
      `Role: ${role} — aligns with your ${pref || "work style"}.`,
      whyMotiv
    ];
    out.toolkit = toolkit;
    out.prompts = promptLib[id] || [];
    out.risks = baseRisks;
    out.artifacts = ["Prompt card", "SOP page", "Loom demo"];
    out.task_meta = { ...defaultTaskMeta, ...(t.task_meta || {}) };

    if (id === "writing_comms" && !/%|\d/.test(out.goal || "")) {
      out.goal = "Cut comms time 50–60% by Week 8";
    }
    if (id === "data_reporting" && !/refresh|one-?click|24/.test(String(out.goal || "").toLowerCase())) {
      out.goal = "One-click refresh + auto-narratives with human sign-off";
    }
    if (id === "workflow_automation" && !/manual steps|fallback/i.test(out.goal || "")) {
      out.goal = "Remove 3–5 manual steps with fallback/override";
    }

    return out;
  });

  return { ...plan, tracks, recommended_tools: toolkit };
}

// ---------- idempotence hash ----------
async function hashInputs(obj: unknown) {
  const str = JSON.stringify(obj ?? {});
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,"0")).join("");
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return new Response(JSON.stringify({ error: "Missing JSON body" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { assessmentId, userId, tools_for_role, skills_for_role, force } = body;

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Load assessment
    const { data: assessment, error } = await supabase
      .from("ai_risk_assessments")
      .select("*")
      .eq("id", assessmentId)
      .eq("user_id", userId)
      .single();

    if (error || !assessment) {
      return new Response(JSON.stringify({ error: "Assessment not found" }), {
        status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Short-circuit if inputs unchanged and not forcing
    const inputs_hash = await hashInputs({ answers: assessment.answers, risk: assessment.risk_result });
    const existing_hash = assessment.evolution_paths?.meta?.inputs_hash;
    if (existing_hash && existing_hash === inputs_hash && !force) {
      return new Response(JSON.stringify({
        evolution_paths: assessment.evolution_paths,
        free_blurb: assessment.free_blurb
      }), { headers: { ...corsHeaders, "Content-Type": "application/json" }});
    }

    // Build plan (OpenAI or preset)
    const openaiKey = Deno.env.get("OPENAI_API_KEY");
    let plan: any;

    if (openaiKey) {
      try {
        const prompt = buildPrompt({
          answers: assessment.answers,
          risk_result: assessment.risk_result,
          tools_for_role,
          skills_for_role,
        });

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 25000);

        const resp = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${openaiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            response_format: { type: "json_object" },
            max_tokens: 1200,
            temperature: 0.4,
          }),
          signal: controller.signal,
        });
        clearTimeout(timeout);

        if (!resp.ok) throw new Error(`OpenAI ${resp.status}`);

        const data = await resp.json();
        const content = data?.choices?.[0]?.message?.content || "";
        let json: any = null;
        try { json = content ? JSON.parse(content) : null; } catch { json = null; }

        const ok =
          json &&
          Array.isArray(json.tracks) &&
          json.tracks.length === 3 &&
          json.tracks.every((t: any) =>
            ["writing_comms","data_reporting","workflow_automation"].includes(t.id) &&
            Array.isArray(t.week_plan) && t.week_plan.length === 4
          );

        plan = ok ? json : presetPlanByRole(
          assessment.answers?.current_role || assessment.answers?.profile_role_family || "other"
        );
      } catch {
        plan = presetPlanByRole(assessment.answers?.current_role || assessment.answers?.profile_role_family || "other");
      }
    } else {
      plan = presetPlanByRole(assessment.answers?.current_role || assessment.answers?.profile_role_family || "other");
    }

    // Enrich, attach CORE, and save
    const enriched = enrichPlanEdge(plan, {
      answers: assessment.answers, tools_for_role, skills_for_role
    });

    const evolution_paths = {
      ...enriched,
      core: CORE,
      meta: { generator_version: 1, inputs_hash, generated_at: new Date().toISOString() }
    };

    const free_blurb = enriched.free_blurb || {
      headline: "Your 90-Day AI Plan",
      summary: "Measurable time savings by Week 8."
    };

    const { error: updateErr } = await supabase
      .from("ai_risk_assessments")
      .update({ evolution_paths, free_blurb, updated_at: new Date().toISOString() })
      .eq("id", assessmentId)
      .eq("user_id", userId);

    if (updateErr) {
      return new Response(JSON.stringify({ error: updateErr.message }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ evolution_paths, free_blurb }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
