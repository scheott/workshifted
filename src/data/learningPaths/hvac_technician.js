export const hvacTechnicianLearningPath = {
  career: "hvac_technician",
  title: "HVAC Technician Learning Path",
  estimatedDuration: "6–10 months to entry-level; 2–3 years to independent tech",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "Learn thermodynamics, refrigeration cycle, and safety.",
      estimatedTime: "2–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Understand pressure/temperature relationships and superheat/subcooling",
        "Know refrigeration cycle components and airflow fundamentals",
        "Master electrical safety and refrigerant handling basics"
      ]
    },
    {
      id: 2,
      title: "Tool Familiarity",
      description: "Use gauges, recovery machines, meters, and hand tools.",
      estimatedTime: "1–2 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Attach and read manifold gauges correctly",
        "Use vacuum pumps and micron gauges",
        "Operate multimeters and clamp meters safely"
      ]
    },
    {
      id: 3,
      title: "Code and Regulations",
      description: "EPA refrigerant rules and mechanical/electrical codes.",
      estimatedTime: "3–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Understand EPA Section 608 requirements",
        "Learn mechanical/electrical code interactions",
        "Follow recovery, recycling, and recordkeeping rules"
      ]
    },
    {
      id: 4,
      title: "Basic Techniques",
      description: "Charging, evacuation, brazing, and airflow testing.",
      estimatedTime: "4–6 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Evacuate to proper microns and verify tightness",
        "Measure superheat/subcooling and charge systems",
        "Bend/braze tubing and verify airflow (static pressure)"
      ]
    },
    {
      id: 5,
      title: "Blueprint Reading",
      description: "Wiring diagrams, piping schematics, and duct layouts.",
      estimatedTime: "2–3 weeks",
      category: "skills",
      priority: "recommended",
      learningObjectives: [
        "Trace low/high-voltage wiring",
        "Read piping circuits and valve arrangements",
        "Follow duct design and sizing basics"
      ]
    },
    {
      id: 6,
      title: "Entry-Level Certification",
      description: "Pass EPA 608 and complete OSHA training.",
      estimatedTime: "2–4 weeks",
      category: "certification",
      priority: "essential",
      learningObjectives: [
        "Study and pass EPA Section 608 exam (Type I/II/III/Universal)",
        "Complete OSHA 10 Construction",
        "Document certification for employers"
      ]
    },
    {
      id: 7,
      title: "Hands-On Practice",
      description: "Service and install under supervision.",
      estimatedTime: "4–8 weeks",
      category: "experience",
      priority: "essential",
      learningObjectives: [
        "Perform startups and maintenance (filters, coils, charge checks)",
        "Troubleshoot electrical and refrigerant issues",
        "Communicate findings to customers professionally"
      ]
    },
    {
      id: 8,
      title: "Job Search Preparation",
      description: "Prepare for entry-level tech or installer roles.",
      estimatedTime: "1–2 weeks",
      category: "experience",
      priority: "recommended",
      learningObjectives: [
        "Build resume with lab projects and certifications",
        "Practice technical interviewing and customer scenarios",
        "Network with local contractors and wholesalers"
      ]
    },
    {
      id: 9,
      title: "Advanced Skills Development",
      description: "Heat pumps, variable-speed, and building performance.",
      estimatedTime: "Ongoing",
      category: "skills",
      priority: "optional",
      learningObjectives: [
        "Master inverter/variable speed diagnostics",
        "Learn airflow balancing and load calculations",
        "Explore smart controls and IAQ solutions"
      ]
    },
    {
      id: 10,
      title: "Professional Growth",
      description: "Pursue NATE/industry credentials and leadership.",
      estimatedTime: "1–3 years",
      category: "certification",
      priority: "optional",
      learningObjectives: [
        "Earn NATE certifications and manufacturer credentials",
        "Move into lead tech/installer or service management",
        "Consider HVAC business ownership"
      ]
    }
  ],
  recommendedResources: [
    {
      category: "certification",
      title: "EPA 608 Prep & Exam",
      provider: "ESCO Institute / HVAC Excellence",
      url: "https://www.escoinst.com/",
      cost: "Paid",
      description: "Official prep and testing for EPA Section 608.",
      relevantSteps: [3, 6]
    },
    {
      category: "skills",
      title: "HVAC Fundamentals",
      provider: "Community College / NCCER HVAC",
      url: "https://www.nccer.org/",
      cost: "Paid",
      description: "Structured fundamentals, lab practice, and safety.",
      relevantSteps: [1, 2, 4]
    }
  ],
  freeResources: [
    { title: "YouTube Training", description: "Search 'superheat vs subcooling', 'micron gauge basics', 'wiring diagrams'." },
    { title: "Manufacturer Universities", description: "Carrier, Trane, Lennox, etc., offer free modules." },
    { title: "Library Texts", description: "HVAC theory and technician handbooks." },
    { title: "Utility Programs", description: "Some utilities fund free HVAC training modules." }
  ]
};
