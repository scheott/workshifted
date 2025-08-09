export const autoMechanicLearningPath = {
  career: "auto_mechanic",
  title: "Auto Mechanic Learning Path",
  estimatedDuration: "4–8 months to lube/tech-helper; 1–2 years to line tech",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "Automotive systems, safety, and shop procedures.",
      estimatedTime: "2–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Understand engines, drivetrains, brakes, and electronics",
        "Know PPE, lift safety, and hazard communication",
        "Follow RO processes and digital inspections"
      ]
    },
    {
      id: 2,
      title: "Tool Familiarity",
      description: "Hand/power tools, torque specs, and scan tools.",
      estimatedTime: "1–2 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Use torque wrenches and specialty sockets",
        "Operate OBD-II scanners and multimeters",
        "Maintain tools and organize service bays"
      ]
    },
    {
      id: 3,
      title: "Code and Regulations",
      description: "EPA, refrigerant handling, and shop compliance.",
      estimatedTime: "3–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Understand EPA MVAC (609) for A/C work",
        "Follow waste oil and parts disposal rules",
        "Know warranty/recall documentation basics"
      ]
    },
    {
      id: 4,
      title: "Basic Techniques",
      description: "Service brakes, fluids, tires, and basic diagnostics.",
      estimatedTime: "4–6 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Replace pads/rotors and bleed brakes",
        "Perform oil/coolant/trans service and tire work",
        "Diagnose basic electrical with DVOM"
      ]
    },
    {
      id: 5,
      title: "Blueprint Reading",
      description: "Read service manuals, TSBs, and wiring diagrams.",
      estimatedTime: "2–3 weeks",
      category: "skills",
      priority: "recommended",
      learningObjectives: [
        "Use OEM service info and TSBs",
        "Trace wiring diagrams and connector views",
        "Follow torque sequences and specs"
      ]
    },
    {
      id: 6,
      title: "Entry-Level Certification",
      description: "Pursue ASE entry-level or A/C 609 credential.",
      estimatedTime: "2–4 weeks",
      category: "certification",
      priority: "essential",
      learningObjectives: [
        "Earn ASE Entry-Level or select A-series tests",
        "Complete EPA Section 609 for MVAC",
        "Document training and log hours"
      ]
    },
    {
      id: 7,
      title: "Hands-On Practice",
      description: "Shadow senior techs and complete flagged jobs.",
      estimatedTime: "4–8 weeks",
      category: "experience",
      priority: "essential",
      learningObjectives: [
        "Follow diagnostic flowcharts accurately",
        "Improve wrench time and comebacks prevention",
        "Document findings with photos/scan data"
      ]
    },
    {
      id: 8,
      title: "Job Search Preparation",
      description: "Target entry-level tech roles at dealers/shops.",
      estimatedTime: "1–2 weeks",
      category: "experience",
      priority: "recommended",
      learningObjectives: [
        "Tailor resume to systems worked on",
        "Practice customer communication scenarios",
        "Network with shop owners and parts reps"
      ]
    },
    {
      id: 9,
      title: "Advanced Skills Development",
      description: "Hybrid/EV safety, CAN diagnostics, and ADAS.",
      estimatedTime: "Ongoing",
      category: "skills",
      priority: "optional",
      learningObjectives: [
        "Learn high-voltage safety and service",
        "Use labscope and interpret CAN traffic",
        "Understand ADAS calibration basics"
      ]
    },
    {
      id: 10,
      title: "Professional Growth",
      description: "Pursue full ASE A1–A8 and leadership.",
      estimatedTime: "1–3 years",
      category: "certification",
      priority: "optional",
      learningObjectives: [
        "Complete ASE certifications and recert cycles",
        "Move into lead tech or shop foreman roles",
        "Consider opening a specialty shop"
      ]
    }
  ],
  recommendedResources: [
    {
      category: "certification",
      title: "ASE Certification",
      provider: "ASE",
      url: "https://www.ase.com/",
      cost: "Paid",
      description: "ASE study guides, practice tests, and certification.",
      relevantSteps: [6, 10]
    },
    {
      category: "skills",
      title: "OEM/Aftermarket Training",
      provider: "Manufacturer & Parts Networks",
      url: "https://www.nastf.org/",
      cost: "Free/Paid",
      description: "OEM info portals and aftermarket training partners.",
      relevantSteps: [5, 7, 9]
    }
  ],
  freeResources: [
    { title: "YouTube/Forums", description: "Search 'brake service', 'wiring diagram reading', 'OBD-II diagnosis'." },
    { title: "Library Databases", description: "Some libraries offer AllData/Chilton access." },
    { title: "EPA 609 Resources", description: "MVAC certification info and A/C safety." },
    { title: "Parts Vendor Clinics", description: "Local evening clinics by parts distributors." }
  ]
};