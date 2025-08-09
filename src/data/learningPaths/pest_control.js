// File: src/data/learningPaths/pest_control.js
export const pestControlLearningPath = {
  career: "pest_control",
  title: "Pest Control Technician Path",
  estimatedDuration: "1–3 months to licensed tech",
  steps: [
    {
      id: 1,
      title: "Pest ID & IPM",
      description: "Learn species identification and integrated pest management.",
      estimatedTime: "2–4 weeks",
      type: "education",
      required: true,
      resources: [
        {
          type: "course",
          title: "NPMA Online Learning Center",
          provider: "National Pest Management Association",
          url: "https://www.npmapestworld.org/your-team-tools/online-learning-center/all-online-courses/",
          duration: "Self-paced",
          cost: "Paid",
          description: "Technical and customer-facing courses."
        }
      ]
    },
    {
      id: 2,
      title: "State Applicator License",
      description: "Study label literacy and pass your state exam.",
      estimatedTime: "2–6 weeks",
      type: "certification",
      required: true,
      resources: [
        {
          type: "reference",
          title: "State Pesticide Applicator Licensing",
          provider: "Your State",
          url: "https://www.google.com/search?q=state+pesticide+applicator+license",
          duration: "—",
          cost: "Paid exam",
          description: "Commercial applicator licensing information."
        }
      ]
    },
    {
      id: 3,
      title: "On-Route Experience",
      description: "Train with a senior tech on inspections and treatments.",
      estimatedTime: "2–4 weeks",
      type: "experience",
      required: true,
      resources: [
        {
          type: "application",
          title: "Entry-Level Technician Roles",
          provider: "Local Pest Companies",
          url: "https://www.google.com/search?q=pest+control+technician+jobs+near+me",
          duration: "—",
          cost: "—",
          description: "Build route efficiency and customer skills."
        }
      ]
    }
  ]
};
