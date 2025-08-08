// src/pages/Results.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useAuth } from "../hooks/useAuth";
import {
  calculateCareerMatches,
  getPersonalizedRecommendations,
} from "../data/assessmentQuestions";

// --- TEMP: premium flag stub ----
// Replace later with a real check (e.g., profiles.is_premium via Supabase)
const usePremium = () => {
  const [isPremium, setIsPremium] = useState(false);
  return { isPremium, setIsPremium };
};

// --- TEMP: simple course library (free + paid) ---
const COURSE_LIBRARY = {
  electrician: [
    { title: "Intro to Electrical Systems", provider: "edX", duration: "8–12 hrs", cost: "Free", url: "#" },
    { title: "Residential Wiring Basics", provider: "Udemy", duration: "6–8 hrs", cost: "$19.99", url: "#" },
    { title: "NEC Code Essentials", provider: "Coursera", duration: "10–12 hrs", cost: "$39", url: "#" },
  ],
  plumber: [
    { title: "Basics of Plumbing", provider: "edX", duration: "8–10 hrs", cost: "Free", url: "#" },
    { title: "Residential Plumbing Systems", provider: "Udemy", duration: "5–7 hrs", cost: "$16.99", url: "#" },
    { title: "Backflow Prevention Intro", provider: "YouTube", duration: "2 hrs", cost: "Free", url: "#" },
  ],
  hvac_technician: [
    { title: "HVAC Fundamentals", provider: "edX", duration: "10–15 hrs", cost: "Free", url: "#" },
    { title: "EPA 608 Prep", provider: "Udemy", duration: "4–6 hrs", cost: "$14.99", url: "#" },
    { title: "Airflow & Duct Design", provider: "Coursera", duration: "8–10 hrs", cost: "$39", url: "#" },
  ],
  default: [
    { title: "OSHA 10: Safety Basics", provider: "edX", duration: "10 hrs", cost: "Free", url: "#" },
  ],
};

const getCoursesFor = (careerKey, count = 1) => {
  const list = COURSE_LIBRARY[careerKey] || COURSE_LIBRARY.default;
  return list.slice(0, count);
};

// --- Location helper (best-effort IP geolocation) ---
async function getStateFromIP() {
  try {
    const resp = await fetch("https://ipapi.co/json/");
    const data = await resp.json();
    return data.region || data.country_name || "Your Area";
  } catch {
    return "Your Area";
  }
}

export default function Results() {
  const { user } = useAuth();
  const { isPremium, setIsPremium } = usePremium();
  const navigate = useNavigate();
  const location = useLocation();

  // UI + data state
  const [loading, setLoading] = useState(true);
  const [stateRegion, setStateRegion] = useState("Your Area");

  // These two drive the whole page:
  const [matches, setMatches] = useState([]);      // array of career match objects
  const [userTraits, setUserTraits] = useState({}); // the computed weights map

  // Region load (fire and forget)
  useEffect(() => {
    getStateFromIP().then(setStateRegion);
  }, []);

  // Initialize from navigation state if available; otherwise fetch from Supabase
  useEffect(() => {
    let isMounted = true;

    const initFromLocationOrDB = async () => {
      // 1) If we came from Assessment, we should have these in location.state
      const locMatches = location.state?.topMatches;
      const locTraits = location.state?.userWeights;

      if (locMatches?.length && locTraits && isMounted) {
        setMatches(locMatches);
        setUserTraits(locTraits);
        setLoading(false);
        return;
      }

      // 2) Fallback: read the most recent stored result from Supabase
      if (!user) {
        // Not logged in (shouldn't happen due to PrivateRoute), but guard anyway
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("assessment_results")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();

        if (error) throw error;

        const storedMatches = data?.career_matches || [];
        const storedTraits = data?.user_traits || {};
        const storedAnswers = data?.answers || null;

        // Prefer stored matches/traits; compute as last resort if only answers exist
        if (storedMatches.length && Object.keys(storedTraits).length) {
          if (!isMounted) return;
          setMatches(storedMatches);
          setUserTraits(storedTraits);
        } else if (storedAnswers) {
          const recomputed = calculateCareerMatches(storedAnswers);
          if (!isMounted) return;
          setMatches(recomputed);
          // we don’t have computeUserWeights imported here; if needed you can store in DB.
          // For now, best-effort: derive traits from the top match’s embedded userTraits if present.
          setUserTraits(recomputed[0]?.userTraits || {});
        }
      } catch (e) {
        console.error("Load results error:", e);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    initFromLocationOrDB();

    return () => {
      isMounted = false;
    };
  }, [location.state, user]);

  const topMatch = matches[0];
  const premiumSlice = useMemo(() => matches.slice(0, 3), [matches]);

  // Build full recommendation object (strengths/improvements) for top match
  const topRec = useMemo(() => {
    if (!topMatch) return null;
    const [rec] = getPersonalizedRecommendations([topMatch], userTraits);
    return rec || null;
  }, [topMatch, userTraits]);

  const handleUpgrade = () => {
    // TODO: route to checkout; upon success, mark profiles.is_premium = true in Supabase
    setIsPremium(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-2 text-gray-700">
          <svg className="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span>Loading your results…</span>
        </div>
      </div>
    );
  }

  if (!matches.length) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">No results yet</h2>
            <p className="text-gray-600 mb-6">
              Complete the assessment to see your personalized career matches.
            </p>
            <button
              onClick={() => navigate("/assessment")}
              className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Take the Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  // UI helper
  const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-xl shadow p-6 ${className}`}>{children}</div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">WorkShifted</div>
          <div className="text-sm text-gray-500">Results Dashboard</div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-3 gap-6">
        {/* Left: Free Section */}
        <div className="md:col-span-2 space-y-6">
          {/* Top Match Card (Free) */}
          <Card>
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-gray-500 mb-1">Your Top Match</div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {topMatch.title}{" "}
                  <span className="text-blue-600 text-lg font-semibold">
                    · {topMatch.matchPercentage}%
                  </span>
                </h1>
                <p className="text-gray-600 mt-2">{topMatch.description}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 mt-6">
              <div className="rounded-lg bg-blue-50 p-3">
                <div className="text-xs text-gray-500">Salary (est.)</div>
                <div className="font-semibold">{topMatch.salary}</div>
              </div>
              <div className="rounded-lg bg-green-50 p-3">
                <div className="text-xs text-gray-500">Time to Start</div>
                <div className="font-semibold">{topMatch.timeline}</div>
              </div>
              <div className="rounded-lg bg-purple-50 p-3">
                <div className="text-xs text-gray-500">Region</div>
                <div className="font-semibold">{stateRegion}</div>
              </div>
            </div>

            {topRec && (
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Why this fits you</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {topRec.strengths.slice(0, 5).map((s) => (
                    <li key={s}>Your {s.replace(/_/g, " ")} aligns well with this role.</li>
                  ))}
                </ul>
              </div>
            )}

            {/* One free course */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Recommended Course (Free)</h3>
              <ul className="space-y-2">
                {getCoursesFor(topMatch.key || topMatch.title.toLowerCase(), 1).map((c, i) => (
                  <li key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div>
                      <div className="font-medium">{c.title}</div>
                      <div className="text-xs text-gray-500">
                        {c.provider} · {c.duration} · {c.cost}
                      </div>
                    </div>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer text-blue-600 hover:underline text-sm"
                    >
                      View
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Go to Dashboard CTA */}
            <div className="mt-8">
              <button
                onClick={() => navigate("/dashboard")}
                className="cursor-pointer bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black"
              >
                Go to Dashboard
              </button>
            </div>
          </Card>

          {/* Paid content preview (locked if not premium) */}
          <Card>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Full Matches & Plan</h2>
              {!isPremium && (
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  Locked
                </span>
              )}
            </div>

            <div className={`${!isPremium ? "blur-sm select-none pointer-events-none" : ""} mt-4`}>
              {/* Top 3 matches */}
              <div className="grid md:grid-cols-3 gap-3">
                {premiumSlice.map((m) => (
                  <div key={m.key || m.title} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">{m.title}</h3>
                      <span className="text-blue-600 font-medium">{m.matchPercentage}%</span>
                    </div>
                    <p className="text-sm text-gray-600">{m.description}</p>
                    <div className="mt-2 text-xs text-gray-500">
                      <div>Salary: {m.salary}</div>
                      <div>Timeline: {m.timeline}</div>
                    </div>

                    {/* Certifications */}
                    {m.certifications?.length ? (
                      <div className="mt-3">
                        <div className="text-xs text-gray-500 mb-1">Certifications</div>
                        <div className="flex flex-wrap gap-2">
                          {m.certifications.map((cert) => (
                            <span key={cert} className="text-xs bg-gray-100 rounded px-2 py-1">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {/* Courses (show 3 when premium) */}
                    <div className="mt-3">
                      <div className="text-xs text-gray-500 mb-1">Courses</div>
                      <ul className="space-y-1">
                        {getCoursesFor(m.key || m.title.toLowerCase(), 3).map((c, i) => (
                          <li key={i} className="text-sm flex items-center justify-between">
                            <span>
                              {c.title} <span className="text-xs text-gray-500">· {c.provider}</span>
                            </span>
                            <a
                              href={c.url}
                              target="_blank"
                              rel="noreferrer"
                              className="cursor-pointer text-blue-600 hover:underline text-xs"
                            >
                              View
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Next steps */}
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Next Steps (Personalized)</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Connect with 2–3 local professionals for informational chats.</li>
                  <li>Review certification paths and schedule your first exam.</li>
                  <li>Enroll in a starter course this week.</li>
                  <li>Apply to apprenticeships in {stateRegion} (preview below).</li>
                </ul>
              </div>

              {/* Apprenticeships (placeholder list – wire to apprenticeship.gov later) */}
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Apprenticeships in {stateRegion}</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="border rounded-lg p-3">
                    <div className="font-medium">Electrical Apprenticeship</div>
                    <div className="text-xs text-gray-500">IBEW Local • Paid • Apply year-round</div>
                    <a href="#" className="cursor-pointer text-blue-600 hover:underline text-sm mt-1 inline-block">
                      View details
                    </a>
                  </div>
                  <div className="border rounded-lg p-3">
                    <div className="font-medium">Plumbing Apprenticeship</div>
                    <div className="text-xs text-gray-500">UA Local • Paid • Next cohort: Fall</div>
                    <a href="#" className="cursor-pointer text-blue-600 hover:underline text-sm mt-1 inline-block">
                      View details
                    </a>
                  </div>
                </div>
              </div>

              {/* Download (paid) */}
              <div className="mt-6">
                <button className="cursor-pointer px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-50">
                  Download PDF Report
                </button>
              </div>
            </div>

            {!isPremium && (
              <div className="mt-4 bg-gradient-to-r from-blue-50 to-green-50 border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Unlock your full plan</div>
                    <div className="text-sm text-gray-600">
                      Get all matches, certifications, local apprenticeships, and a downloadable plan.
                    </div>
                  </div>
                  <button
                    onClick={handleUpgrade}
                    className="cursor-pointer bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg hover:shadow"
                  >
                    Get Full Learning Plan – $29
                  </button>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Right: Profile & Actions */}
        <div className="space-y-6">
          <Card>
            <div className="text-sm text-gray-500 mb-1">Account</div>
            <div className="font-semibold">{user?.email}</div>
            <div className="mt-3 text-sm">
              <span className="text-gray-500">Plan: </span>
              <span className={isPremium ? "text-green-700 font-semibold" : "text-gray-800 font-semibold"}>
                {isPremium ? "Premium" : "Free"}
              </span>
            </div>
          </Card>

          <Card>
            <div className="text-sm text-gray-500 mb-3">Quick Actions</div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => navigate("/assessment")}
                className="cursor-pointer w-full border rounded-lg px-3 py-2 hover:bg-gray-50"
              >
                Retake Assessment
              </button>
              {!isPremium && (
                <button
                  onClick={handleUpgrade}
                  className="cursor-pointer w-full bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg px-3 py-2 hover:shadow"
                >
                  Upgrade to Premium
                </button>
              )}
            </div>
          </Card>
        </div>
      </main>

      {/* Sticky upgrade bar */}
      {!isPremium && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <div className="text-sm">
              Unlock full results, certifications, local apprenticeships, and a downloadable plan.
            </div>
            <button
              onClick={handleUpgrade}
              className="cursor-pointer bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg hover:shadow"
            >
              Get Full Learning Plan – $29
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
