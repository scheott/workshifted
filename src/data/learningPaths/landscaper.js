// File: src/data/learningPaths/landscaper.js
export const landscaperLearningPath = {
  career: "landscaper",
  title: "Landscaping Professional Path",
  estimatedDuration: "2–4 months to first job; seasonal growth ongoing",
  steps: [
    {
      id: 1,
      title: "Horticulture & Basics",
      description: "Soils, plant selection, and safe equipment operation.",
      estimatedTime: "2–4 weeks",
      type: "education",
      required: true,
      resources: [
        {
          type: "video",
          title: "Landscape Basics (Playlists)",
          provider: "YouTube (assorted)",
          url: "https://www.youtube.com/results?search_query=landscaping+basics+horticulture",
          duration: "2–4 hours",
          cost: "Free",
          description: "Grounding in plants and maintenance."
        }
      ]
    },
    {
      id: 2,
      title: "Credentials",
      description: "Earn industry credentials that increase job readiness.",
      estimatedTime: "2–6 weeks",
      type: "certification",
      required: false,
      resources: [
        {
          type: "certification",
          title: "Landscape Industry Certified",
          provider: "NALP",
          url: "https://www.landscapeprofessionals.org/",
          duration: "Exam prep + exam",
          cost: "Paid",
          description: "Recognized credential with specialty tracks."
        },
        {
          type: "course",
          title: "Irrigation Technician / Designer Courses",
          provider: "Irrigation Association",
          url: "https://www.irrigation.org/education-resources/education-courses",
          duration: "Varies",
          cost: "Paid",
          description: "High-value irrigation skillset."
        }
      ]
    },
    {
      id: 3,
      title: "Entry-Level Crew",
      description: "Join a crew to build field skills quickly.",
      estimatedTime: "1–2 months",
      type: "experience",
      required: true,
      resources: [
        {
          type: "application",
          title: "Landscaping Jobs Near Me",
          provider: "Local Employers",
          url: "https://www.google.com/search?q=landscaping+jobs+near+me",
          duration: "—",
          cost: "—",
          description: "Start in install/maintenance; learn equipment."
        }
      ]
    }
  ]
};
