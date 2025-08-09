// File: src/data/learningPaths/welder.js
export const welderLearningPath = {
  career: "welder",
  title: "Welder Career Path",
  estimatedDuration: "3–6 months to employable skill; specialization ongoing",
  steps: [
    {
      id: 1,
      title: "Process Fundamentals",
      description: "Learn MIG, TIG, and Stick basics and safety.",
      estimatedTime: "3–6 weeks",
      type: "education",
      required: true,
      resources: [
        {
          type: "video",
          title: "Intro to MIG/TIG/Stick Welding (Playlists)",
          provider: "YouTube (assorted)",
          url: "https://www.youtube.com/results?search_query=MIG+TIG+Stick+welding+basics",
          duration: "3–6 hours",
          cost: "Free",
          description: "Process overviews and demos."
        },
        {
          type: "certification",
          title: "Hot Work & Shop Safety",
          provider: "Local Providers / OSHA Outreach",
          url: "https://www.osha.gov/training/outreach/training-providers",
          duration: "1–2 days",
          cost: "Paid",
          description: "Fire watch, PPE, ventilation, permits."
        }
      ]
    },
    {
      id: 2,
      title: "Structural Standards",
      description: "Train and test to common codes (e.g., AWS D1.1).",
      estimatedTime: "3–8 weeks",
      type: "certification",
      required: true,
      resources: [
        {
          type: "certification",
          title: "AWS Certified Welder",
          provider: "American Welding Society",
          url: "https://www.aws.org/certification/page/certified-welder",
          duration: "Course + test",
          cost: "Paid",
          description: "Performance-based plate/pipe tests to code."
        }
      ]
    },
    {
      id: 3,
      title: "Specialize",
      description: "Consider pipe, stainless, aluminum, or field welding.",
      estimatedTime: "1–3 months",
      type: "experience",
      required: false,
      resources: [
        {
          type: "application",
          title: "Entry-Level Welder Jobs",
          provider: "Local Shops / Contractors",
          url: "https://www.google.com/search?q=welder+jobs+near+me",
          duration: "—",
          cost: "—",
          description: "Gain hours and process range on real work."
        }
      ]
    }
  ]
};
