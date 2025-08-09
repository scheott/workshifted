// File: src/data/learningPaths/telecom_installer.js
export const telecomInstallerLearningPath = {
  career: "telecom_installer",
  title: "Telecommunications Installer Path",
  estimatedDuration: "2–5 months to certified installer",
  steps: [
    {
      id: 1,
      title: "Cabling & Fiber Fundamentals",
      description: "Learn copper/fiber standards, terminations, and testing.",
      estimatedTime: "2–4 weeks",
      type: "education",
      required: true,
      resources: [
        {
          type: "course",
          title: "FOA Fiber U (Intro Courses)",
          provider: "Fiber Optic Association",
          url: "https://www.foa.org/tech/ref/appln/FiberU.html",
          duration: "Self-paced",
          cost: "Free",
          description: "Well-regarded fiber basics ahead of certification."
        }
      ]
    },
    {
      id: 2,
      title: "Industry Certification",
      description: "Earn CFOT or BICSI Installer for job-ready credentials.",
      estimatedTime: "2–6 weeks",
      type: "certification",
      required: true,
      resources: [
        {
          type: "certification",
          title: "CFOT – Certified Fiber Optic Technician",
          provider: "FOA",
          url: "https://www.foa.org/FOA_Certifications_and_Courses/fiber_optic_technician.html",
          duration: "3–5 days + exam",
          cost: "Paid",
          description: "Baseline fiber cert accepted broadly."
        },
        {
          type: "certification",
          title: "BICSI Installer 1/2",
          provider: "BICSI",
          url: "https://www.bicsi.org/education-certification/",
          duration: "1–2 weeks + exam",
          cost: "Paid",
          description: "Structured cabling standards and best practices."
        }
      ]
    },
    {
      id: 3,
      title: "Safety for Lifts/Towers",
      description: "Get fall protection and tower rescue if applicable.",
      estimatedTime: "2–4 days",
      type: "certification",
      required: false,
      resources: [
        {
          type: "certification",
          title: "Tower Climbing & Rescue",
          provider: "Comtrain (example provider)",
          url: "https://comtrainusa.com/",
          duration: "2–4 days",
          cost: "Paid",
          description: "Required for many wireless/5G roles."
        }
      ]
    }
  ]
};
