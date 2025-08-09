// File: src/data/learningPaths/carpenter.js
export const carpenterLearningPath = {
  career: "carpenter",
  title: "Carpenter Career Path",
  estimatedDuration: "3–6 months to first job; 3–4 years apprenticeship for mastery",
  steps: [
    {
      id: 1,
      title: "Core Skills & Safety",
      description: "Measuring, layout, tool use, and jobsite safety.",
      estimatedTime: "2–4 weeks",
      type: "education",
      required: true,
      resources: [
        {
          type: "certification",
          title: "OSHA 10-Hour Construction",
          provider: "OSHA Outreach (Authorized Providers)",
          url: "https://www.osha.gov/training/outreach/training-providers",
          duration: "10 hours",
          cost: "Paid",
          description: "Commonly requested for new hires."
        },
        {
          type: "video",
          title: "Carpentry Basics (Playlists)",
          provider: "YouTube (assorted)",
          url: "https://www.youtube.com/results?search_query=carpentry+basics+framing+finish",
          duration: "3–6 hours",
          cost: "Free",
          description: "Framing and finish fundamentals."
        }
      ]
    },
    {
      id: 2,
      title: "Apprenticeship or Entry Role",
      description: "Join a union/community college program or start as a helper.",
      estimatedTime: "2–6 weeks",
      type: "experience",
      required: true,
      resources: [
        {
          type: "application",
          title: "Carpentry Apprenticeships",
          provider: "Apprenticeship.gov",
          url: "https://www.apprenticeship.gov/apprenticeship-job-finder",
          duration: "Search tool",
          cost: "Free",
          description: "Find registered carpentry programs."
        }
      ]
    },
    {
      id: 3,
      title: "Blueprints & Advanced Skills",
      description: "Study prints, codes, and finish carpentry techniques.",
      estimatedTime: "3–8 weeks",
      type: "education",
      required: false,
      resources: [
        {
          type: "course",
          title: "Blueprint Reading for Construction",
          provider: "Penn Foster (example)",
          url: "https://www.pennfoster.edu/programs/trades/blueprint-reading",
          duration: "4–6 weeks",
          cost: "Paid",
          description: "Construction drawings and takeoffs."
        }
      ]
    }
  ]
};
