export const solarInstallerLearningPath = {
  career: "solar_installer",
  title: "Solar Installer Learning Path",
  estimatedDuration: "3–6 months to entry-level installer; 1–2 years to crew lead",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "Learn PV basics, safety, and electrical fundamentals.",
      estimatedTime: "2–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Understand how PV modules work and system topologies",
        "Know roof/work-at-heights safety and fall protection",
        "Review DC basics and conductor/breaker sizing"
      ]
    },
    {
      id: 2,
      title: "Tool Familiarity",
      description: "Practice with racking tools, meters, and PPE.",
      estimatedTime: "1–2 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Use torque wrenches, sealants, and flashing kits",
        "Measure irradiance and verify polarity/continuity",
        "Maintain harnesses and anchors"
      ]
    },
    {
      id: 3,
      title: "Code and Regulations",
      description: "NEC PV articles, local permitting, fire setbacks.",
      estimatedTime: "3–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Apply NEC 690/705/710 and labeling requirements",
        "Understand AHJ permitting and inspection steps",
        "Learn roof access and array spacing rules"
      ]
    },
    {
      id: 4,
      title: "Basic Techniques",
      description: "Racking layout, module install, wiring, and terminations.",
      estimatedTime: "4–6 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Lay out rails, standoffs, and array geometry",
        "Install modules, optimizers/microinverters",
        "Route wiring and complete safe terminations"
      ]
    },
    {
      id: 5,
      title: "Blueprint Reading",
      description: "Plan sets, one-lines, and structural notes.",
      estimatedTime: "2–3 weeks",
      category: "skills",
      priority: "recommended",
      learningObjectives: [
        "Interpret PV plan sheets and BOM",
        "Follow one-line diagrams for AC/DC",
        "Coordinate with roof and electrical trades"
      ]
    },
    {
      id: 6,
      title: "Entry-Level Certification",
      description: "Earn OSHA 10 and prep for NABCEP PV Associate.",
      estimatedTime: "2–4 weeks",
      category: "certification",
      priority: "essential",
      learningObjectives: [
        "Finish OSHA 10 Construction and ladder safety",
        "Study for NABCEP PV Associate exam",
        "Document training for employers"
      ]
    },
    {
      id: 7,
      title: "Hands-On Practice",
      description: "Build mock arrays and assist real installs.",
      estimatedTime: "4–8 weeks",
      category: "experience",
      priority: "essential",
      learningObjectives: [
        "Flash penetrations correctly and maintain roof integrity",
        "Verify torque specs and electrical tests",
        "Perform commissioning checklists"
      ]
    },
    {
      id: 8,
      title: "Job Search Preparation",
      description: "Target installer/helper roles with residential installers.",
      estimatedTime: "1–2 weeks",
      category: "experience",
      priority: "recommended",
      learningObjectives: [
        "Create install photo portfolio",
        "Practice safety-first interview narratives",
        "Network with local EPCs and solar firms"
      ]
    },
    {
      id: 9,
      title: "Advanced Skills Development",
      description: "Storage integration and service troubleshooting.",
      estimatedTime: "Ongoing",
      category: "skills",
      priority: "optional",
      learningObjectives: [
        "Learn battery systems, transfer switches, and ATS",
        "Master optimizer/microinverter diagnostics",
        "Explore performance monitoring and O&M"
      ]
    },
    {
      id: 10,
      title: "Professional Growth",
      description: "Pursue NABCEP Installer and crew leadership.",
      estimatedTime: "1–3 years",
      category: "certification",
      priority: "optional",
      learningObjectives: [
        "Sit for NABCEP PV Installation Professional",
        "Lead crews and manage safety/quality",
        "Consider starting a specialty solar business"
      ]
    }
  ],
  recommendedResources: [
    {
      category: "certification",
      title: "NABCEP PV Associate",
      provider: "NABCEP",
      url: "https://www.nabcep.org/",
      cost: "Paid",
      description: "Entry credential for PV fundamentals and safety.",
      relevantSteps: [6]
    },
    {
      category: "skills",
      title: "Solar Energy International (SEI) Courses",
      provider: "SEI",
      url: "https://www.solarenergy.org/",
      cost: "Paid",
      description: "Highly regarded PV design, install, and storage training.",
      relevantSteps: [1, 3, 4, 9]
    }
  ],
  freeResources: [
    { title: "YouTube PV Basics", description: "Search 'PV racking install', 'module wiring', 'NABCEP associate tips'." },
    { title: "Manufacturer Training", description: "Inverter and racking vendors offer free installer academies." },
    { title: "Utility/AHJ Sites", description: "Local interconnection guides and permit requirements." },
    { title: "Library/NEC", description: "Access NEC code books and PV handbooks." }
  ]
};
