// File: src/data/learningPaths/home_inspector.js
export const homeInspectorLearningPath = {
  career: "home_inspector",
  title: "Home Inspector Path",
  estimatedDuration: "2–4 months to first inspection; varies by state",
  steps: [
    {
      id: 1,
      title: "Standards of Practice",
      description: "Learn SOP, ethics, and system-by-system inspection flow.",
      estimatedTime: "2–4 weeks",
      type: "education",
      required: true,
      resources: [
        {
          type: "course",
          title: "InterNACHI® Training",
          provider: "InterNACHI",
          url: "https://www.nachi.org/training",
          duration: "Self-paced",
          cost: "Membership",
          description: "Licensing modules available in many states."
        },
        {
          type: "course",
          title: "ASHI Education",
          provider: "ASHI",
          url: "https://www.homeinspector.org/Education",
          duration: "Varies",
          cost: "Paid",
          description: "Training and CE aligned to ASHI standards."
        }
      ]
    },
    {
      id: 2,
      title: "State Licensing",
      description: "Meet hours, pass exam, and register your business.",
      estimatedTime: "3–8 weeks (typical)",
      type: "certification",
      required: true,
      resources: [
        {
          type: "reference",
          title: "State Licensing Requirements",
          provider: "Your State",
          url: "https://www.google.com/search?q=home+inspector+license+requirements+your+state",
          duration: "—",
          cost: "—",
          description: "Confirm pre-licensing, exam, and insurance."
        }
      ]
    },
    {
      id: 3,
      title: "Ancillary Add-Ons",
      description: "Add radon/termite/infrared to increase revenue per job.",
      estimatedTime: "2–4 weeks",
      type: "certification",
      required: false,
      resources: [
        {
          type: "certification",
          title: "NRPP Radon Measurement",
          provider: "NRPP",
          url: "https://nrpp.info/",
          duration: "Course + exam",
          cost: "Paid",
          description: "Widely recognized radon credential."
        }
      ]
    }
  ]
};
