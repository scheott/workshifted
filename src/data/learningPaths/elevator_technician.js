// File: src/data/learningPaths/elevator_technician.js
export const elevatorTechnicianLearningPath = {
  career: "elevator_technician",
  title: "Elevator Technician Path",
  estimatedDuration: "6–12 months to helper role; 4 years to mechanic via apprenticeship",
  steps: [
    {
      id: 1,
      title: "Safety & Systems Intro",
      description: "Learn hoistway safety, controls, hydraulics, and codes.",
      estimatedTime: "2–4 weeks",
      type: "education",
      required: true,
      resources: [
        {
          type: "video",
          title: "Elevator Systems Overview (Playlists)",
          provider: "YouTube (assorted)",
          url: "https://www.youtube.com/results?search_query=elevator+mechanic+basics",
          duration: "2–4 hours",
          cost: "Free",
          description: "Orientation to mechanical and control systems."
        }
      ]
    },
    {
      id: 2,
      title: "Apprenticeship",
      description: "Apply to union apprenticeship for classroom + OJT.",
      estimatedTime: "2–6 weeks (cycle varies)",
      type: "experience",
      required: true,
      resources: [
        {
          type: "application",
          title: "NEIEP (IUEC) Apprenticeship",
          provider: "National Elevator Industry Educational Program",
          url: "https://www.neiep.org/",
          duration: "4 years",
          cost: "Paid training",
          description: "Union pathway to elevator mechanic."
        },
        {
          type: "application",
          title: "Apprenticeship Finder (state offices)",
          provider: "Apprenticeship.gov",
          url: "https://www.apprenticeship.gov/apprenticeship-job-finder",
          duration: "Search tool",
          cost: "Free",
          description: "Locate registered programs and contacts."
        }
      ]
    },
    {
      id: 3,
      title: "Credentials & Advancement",
      description: "Complete CET modules and later pursue QEI.",
      estimatedTime: "1–3 months (modules); QEI after experience",
      type: "certification",
      required: false,
      resources: [
        {
          type: "certification",
          title: "CET® – Certified Elevator Technician",
          provider: "NAEC",
          url: "https://www.naec.org/education/cet-certified-elevator-technician/",
          duration: "Coursework + OJT",
          cost: "Paid",
          description: "Industry-recognized education path."
        },
        {
          type: "certification",
          title: "QEI – Qualified Elevator Inspector",
          provider: "NAESA",
          url: "https://www.naesai.org/qei-certification",
          duration: "Experience + exam",
          cost: "Paid",
          description: "Advanced inspection credential."
        }
      ]
    }
  ]
};
