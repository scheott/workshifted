// File: src/data/learningPaths/hvac_technician.js
export const hvacTechnicianLearningPath = {
  career: "hvac_technician",
  title: "HVAC Technician Career Path",
  estimatedDuration: "4–9 months to first job; ongoing upskilling",
  steps: [
    {
      id: 1,
      title: "HVAC Fundamentals",
      description: "Master refrigeration cycle, airflow, and electrical basics.",
      estimatedTime: "3–6 weeks",
      type: "education",
      required: true,
      resources: [
        {
          type: "course",
          title: "HVAC On-Demand Modules",
          provider: "ASHRAE Learning Institute",
          url: "https://www.ashrae.org/professional-development/elearning-on-demand",
          duration: "10–20 hours (per track)",
          cost: "Paid",
          description: "Industry-standard fundamentals and PDHs."
        }
      ]
    },
    {
      id: 2,
      title: "EPA 608 Certification",
      description: "Obtain legally required certification for refrigerants.",
      estimatedTime: "1–2 weeks (study + exam)",
      type: "certification",
      required: true,
      resources: [
        {
          type: "certification",
          title: "Section 608 Technician Certification",
          provider: "U.S. EPA (via approved proctors)",
          url: "https://www.epa.gov/section608/section-608-technician-certification-0",
          duration: "Study + exam",
          cost: "Paid exam",
          description: "Universal 608 recommended."
        },
        {
          type: "course",
          title: "EPA 608 Study & Testing",
          provider: "ESCO Institute",
          url: "https://www.escogroup.org/training/epa608.aspx",
          duration: "Self-paced",
          cost: "Paid",
          description: "Most common provider for 608 prep and testing."
        }
      ]
    },
    {
      id: 3,
      title: "Entry-Level Experience",
      description: "Ride-alongs and junior tech roles to build diagnostic skill.",
      estimatedTime: "1–3 months",
      type: "experience",
      required: true,
      resources: [
        {
          type: "application",
          title: "Local HVAC Employers",
          provider: "Contractors Near You",
          url: "https://www.google.com/search?q=HVAC+technician+jobs+near+me",
          duration: "—",
          cost: "—",
          description: "Apply for apprentice/helper roles."
        }
      ]
    },
    {
      id: 4,
      title: "Professional Credentials",
      description: "Add NATE/HVAC Excellence to stand out and earn more.",
      estimatedTime: "2–6 weeks (per credential)",
      type: "certification",
      required: false,
      resources: [
        {
          type: "certification",
          title: "NATE Certification",
          provider: "NATE",
          url: "https://www.nahvac.org/",
          duration: "Exam prep + exam",
          cost: "Paid",
          description: "Core + specialty exams validate skill."
        }
      ]
    }
  ]
};
