// File: src/data/learningPaths/electrician.js
export const electricianLearningPath = {
  career: "electrician",
  title: "Electrician Career Path",
  estimatedDuration: "6–12 months to first job; 4–5 years to full licensure",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "Learn electrical basics, circuit theory, and essential safety.",
      estimatedTime: "2–6 weeks",
      type: "education",
      required: true,
      resources: [
        {
          type: "course",
          title: "Electrical Fundamentals (Intro)",
          provider: "MIT OpenCourseWare",
          url: "https://ocw.mit.edu/",
          duration: "12–15 hours",
          cost: "Free",
          description: "Core electrical principles to build intuition."
        },
        {
          type: "video",
          title: "Basic Residential Wiring Playlist",
          provider: "YouTube (assorted)",
          url: "https://www.youtube.com/results?search_query=residential+wiring+basics",
          duration: "3–6 hours",
          cost: "Free",
          description: "Practical demos of outlets, switches, and circuits."
        }
      ]
    },
    {
      id: 2,
      title: "Safety & Code",
      description: "Complete safety training and start NEC code study.",
      estimatedTime: "1–3 weeks",
      type: "certification",
      required: true,
      resources: [
        {
          type: "certification",
          title: "OSHA 10-Hour Construction",
          provider: "OSHA Outreach (Authorized Providers)",
          url: "https://www.osha.gov/training/outreach/training-providers",
          duration: "10 hours",
          cost: "Paid",
          description: "Foundational site-safety card for entry-level workers."
        },
        {
          type: "course",
          title: "NFPA 70E Electrical Safety",
          provider: "360training (example) / NFPA providers",
          url: "https://www.360training.com/osha-campus/osha-training/nfpa70e-training",
          duration: "6–10 hours",
          cost: "Paid",
          description: "Shock/arc-flash safety, boundaries, PPE, and LOTO."
        }
      ]
    },
    {
      id: 3,
      title: "Get Into an Apprenticeship",
      description: "Apply to earn-while-you-learn programs (union or merit shop).",
      estimatedTime: "2–6 weeks (application cycle varies)",
      type: "experience",
      required: true,
      resources: [
        {
          type: "application",
          title: "IBEW/NECA Apprenticeship (JATC)",
          provider: "electrical training ALLIANCE",
          url: "https://www.electricaltrainingalliance.org/",
          duration: "4–5 years",
          cost: "Paid training",
          description: "National union apprenticeship: classroom + OJT."
        },
        {
          type: "application",
          title: "IEC Electrical Apprenticeship",
          provider: "Independent Electrical Contractors",
          url: "https://ieci.org/",
          duration: "4 years",
          cost: "Paid training",
          description: "Merit-shop apprenticeship via local IEC chapters."
        },
        {
          type: "application",
          title: "Apprenticeship Finder (all programs)",
          provider: "Apprenticeship.gov",
          url: "https://www.apprenticeship.gov/apprenticeship-job-finder",
          duration: "Search tool",
          cost: "Free",
          description: "Find registered programs near you."
        }
      ]
    },
    {
      id: 4,
      title: "Code & Journeyman Prep",
      description: "Study NEC and track hours toward your journeyman license.",
      estimatedTime: "6–12 months (ongoing)",
      type: "education",
      required: true,
      resources: [
        {
          type: "course",
          title: "NEC 2023 Update Course",
          provider: "Continuing Ed Providers",
          url: "https://keeplearning.louisiana.edu/course/national-electrical-code-nfpa-70-2023-update",
          duration: "8–16 hours",
          cost: "Paid",
          description: "Stay current on the latest NEC changes."
        },
        {
          type: "reference",
          title: "State Licensing & Requirements",
          provider: "Your State Board",
          url: "https://www.google.com/search?q=state+electrician+journeyman+license+requirements",
          duration: "—",
          cost: "—",
          description: "Confirm hours, exams, and reciprocity for your state."
        }
      ]
    },
    {
      id: 5,
      title: "Network & Tools",
      description: "Join local trade associations and build your starter tool set.",
      estimatedTime: "Ongoing",
      type: "networking",
      required: false,
      resources: [
        {
          type: "networking",
          title: "Local Electrical Contractors Association",
          provider: "Trade Association",
          url: "https://www.google.com/search?q=electrical+contractors+association+near+me",
          duration: "Monthly",
          cost: "Varies",
          description: "Meet contractors and find job leads."
        }
      ]
    }
  ]
};
