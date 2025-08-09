// File: src/data/learningPaths/solar_installer.js
export const solarInstallerLearningPath = {
  career: "solar_installer",
  title: "Solar Panel Installer Path",
  estimatedDuration: "2–5 months to first job",
  steps: [
    {
      id: 1,
      title: "PV Fundamentals",
      description: "Learn PV design, wiring, racking, and safety.",
      estimatedTime: "3–6 weeks",
      type: "education",
      required: true,
      resources: [
        {
          type: "course",
          title: "PVOL101: Solar Design & Installation",
          provider: "Solar Energy International (SEI)",
          url: "https://www.solarenergy.org/online/",
          duration: "40+ hours",
          cost: "Paid",
          description: "Industry-trusted; counts toward NABCEP."
        },
        {
          type: "video",
          title: "RE100: Intro to Renewable Energy",
          provider: "SEI",
          url: "https://solarenergytraining.org/",
          duration: "Self-paced",
          cost: "Free",
          description: "Good overview for true beginners."
        }
      ]
    },
    {
      id: 2,
      title: "Safety @ Heights",
      description: "Complete fall-protection and ladder safety.",
      estimatedTime: "1 week",
      type: "certification",
      required: true,
      resources: [
        {
          type: "certification",
          title: "OSHA Fall Protection / OSHA 10",
          provider: "OSHA Outreach (Authorized Providers)",
          url: "https://www.osha.gov/training/outreach/training-providers",
          duration: "10 hours",
          cost: "Paid",
          description: "Essential site and rooftop safety."
        }
      ]
    },
    {
      id: 3,
      title: "PV Associate Credential",
      description: "Earn NABCEP PV Associate to validate fundamentals.",
      estimatedTime: "2–4 weeks (prep)",
      type: "certification",
      required: false,
      resources: [
        {
          type: "certification",
          title: "NABCEP PV Associate Program",
          provider: "NABCEP",
          url: "https://www.nabcep.org/certifications/associate-program/",
          duration: "Training + exam",
          cost: "Paid",
          description: "Entry-level PV credential."
        },
        {
          type: "course",
          title: "PV Boot Camp + PVA Exam Prep",
          provider: "HeatSpring",
          url: "https://www.heatspring.com/courses/solar-pv-boot-camp-nabcep-pv-associate-exam-prep",
          duration: "18–25 hours",
          cost: "Paid",
          description: "Structured prep and practice questions."
        }
      ]
    },
    {
      id: 4,
      title: "Join an Install Crew",
      description: "Apply to local solar companies and build hands-on reps.",
      estimatedTime: "1–2 months",
      type: "experience",
      required: true,
      resources: [
        {
          type: "application",
          title: "Entry-Level Solar Installer Jobs",
          provider: "Local Employers",
          url: "https://www.google.com/search?q=solar+installer+jobs+near+me",
          duration: "—",
          cost: "—",
          description: "Start as installer/crew tech and progress to lead."
        }
      ]
    }
  ]
};
