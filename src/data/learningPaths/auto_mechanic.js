// File: src/data/learningPaths/auto_mechanic.js
export const autoMechanicLearningPath = {
  career: "auto_mechanic",
  title: "Automotive Technician Path",
  estimatedDuration: "4–9 months to first job; mastery via ASE series",
  steps: [
    {
      id: 1,
      title: "Core Automotive Systems",
      description: "Engines, brakes, suspension, and diagnostics basics.",
      estimatedTime: "3–6 weeks",
      type: "education",
      required: true,
      resources: [
        {
          type: "video",
          title: "Automotive Diagnostics Basics (Playlists)",
          provider: "YouTube (assorted)",
          url: "https://www.youtube.com/results?search_query=automotive+diagnostics+basics",
          duration: "3–6 hours",
          cost: "Free",
          description: "OBD-II, scan tools, scopes, and flowcharts."
        }
      ]
    },
    {
      id: 2,
      title: "Required Certifications",
      description: "Get EPA 609 for MVAC A/C work; prep for ASE.",
      estimatedTime: "2–6 weeks",
      type: "certification",
      required: true,
      resources: [
        {
          type: "certification",
          title: "EPA 609 (MVAC) Certification",
          provider: "U.S. EPA (approved orgs)",
          url: "https://www.epa.gov/section608/certification-programs-section-608-technicians",
          duration: "Study + exam",
          cost: "Paid exam",
          description: "Required for mobile A/C refrigerants."
        },
        {
          type: "certification",
          title: "ASE A1–A8 (Prep)",
          provider: "ASE",
          url: "https://www.ase.com/",
          duration: "Varies",
          cost: "Paid",
          description: "Credible signal of competence; pick one to start."
        }
      ]
    },
    {
      id: 3,
      title: "Entry-Level Tech",
      description: "Start in lube/maintenance and shadow master techs.",
      estimatedTime: "1–3 months",
      type: "experience",
      required: true,
      resources: [
        {
          type: "application",
          title: "Apprentice / Lube Tech Roles",
          provider: "Local Shops / Dealers",
          url: "https://www.google.com/search?q=lube+tech+apprentice+jobs+near+me",
          duration: "—",
          cost: "—",
          description: "Gain real diagnostic reps quickly."
        }
      ]
    }
  ]
};
