export const elevatorTechnicianLearningPath = {
  career: "elevator_technician",
  title: "Elevator Technician Learning Path",
  estimatedDuration: "6–12 months to helper; ~4 years to mechanic via apprenticeship",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "Hoistway safety, controls, hydraulics, and codes.",
      estimatedTime: "2–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Understand traction vs. hydraulic systems",
        "Learn lockout/tagout and pit/machine room safety",
        "Know basic relay logic and controllers"
      ]
    },
    {
      id: 2,
      title: "Tool Familiarity",
      description: "Rigging, meters, alignment, and service tools.",
      estimatedTime: "1–2 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Use rigging gear and alignment tools",
        "Operate multimeters and service tools safely",
        "Maintain slings, shackles, and PPE"
      ]
    },
    {
      id: 3,
      title: "Code and Regulations",
      description: "ASME A17.1/CSA B44 and local elevator rules.",
      estimatedTime: "3–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Navigate elevator code requirements",
        "Understand inspections and documentation",
        "Follow lockout and rescue procedures"
      ]
    },
    {
      id: 4,
      title: "Basic Techniques",
      description: "Door operators, controllers, and hydraulics basics.",
      estimatedTime: "4–6 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Adjust door equipment and safety edges",
        "Troubleshoot controller faults",
        "Service hydraulic units and valves"
      ]
    },
    {
      id: 5,
      title: "Blueprint Reading",
      description: "Wiring diagrams, schematics, and prints.",
      estimatedTime: "2–3 weeks",
      category: "skills",
      priority: "recommended",
      learningObjectives: [
        "Read ladder logic and wiring diagrams",
        "Trace circuits to devices",
        "Understand prints for modernization"
      ]
    },
    {
      id: 6,
      title: "Entry-Level Certification",
      description: "Enter apprenticeship and core safety training.",
      estimatedTime: "2–4 weeks",
      category: "certification",
      priority: "essential",
      learningObjectives: [
        "Apply to IUEC/NEIEP or local programs",
        "Complete OSHA 10/30 as required",
        "Document hours and classroom progress"
      ]
    },
    {
      id: 7,
      title: "Hands-On Practice",
      description: "Assist maintenance and mod teams.",
      estimatedTime: "4–8 weeks",
      category: "experience",
      priority: "essential",
      learningObjectives: [
        "Perform preventive maintenance checklists",
        "Support mod/repair tasks safely",
        "Record service notes accurately"
      ]
    },
    {
      id: 8,
      title: "Job Search Preparation",
      description: "Prep for interviews and apprenticeship intake.",
      estimatedTime: "1–2 weeks",
      category: "experience",
      priority: "recommended",
      learningObjectives: [
        "Build a mechanical aptitude portfolio",
        "Practice safety-first interview narratives",
        "Network with local elevator companies"
      ]
    },
    {
      id: 9,
      title: "Advanced Skills Development",
      description: "Advanced controllers and rope/traction work.",
      estimatedTime: "Ongoing",
      category: "skills",
      priority: "optional",
      learningObjectives: [
        "Learn drive upgrades and modern controls",
        "Perform sheave/rope work with supervision",
        "Study advanced troubleshooting"
      ]
    },
    {
      id: 10,
      title: "Professional Growth",
      description: "CET/QEI and leadership paths.",
      estimatedTime: "1–3 years",
      category: "certification",
      priority: "optional",
      learningObjectives: [
        "Pursue CET (NAEC) and later QEI (NAESA)",
        "Lead crews as mechanic-in-charge",
        "Consider inspection or modernization leadership"
      ]
    }
  ],
  recommendedResources: [
    {
      category: "certification",
      title: "NEIEP Apprenticeship",
      provider: "NEIEP (IUEC)",
      url: "https://www.neiep.org/",
      cost: "Paid (earn while you learn)",
      description: "Union pathway to elevator mechanic.",
      relevantSteps: [6, 7]
    },
    {
      category: "certification",
      title: "CET & QEI",
      provider: "NAEC / NAESA",
      url: "https://www.naec.org/",
      cost: "Paid",
      description: "Tech and inspector credentials.",
      relevantSteps: [10]
    }
  ],
  freeResources: [
    { title: "YouTube Playlists", description: "Search 'elevator mechanic basics', 'door operator adjustment'." },
    { title: "Manufacturer Docs", description: "Controller and door operator manuals." },
    { title: "Library/Code Access", description: "ASME code references (through institutions/employers)." },
    { title: "Apprenticeship.gov", description: "Search registered elevator apprentice openings." }
  ]
};
