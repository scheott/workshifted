export const telecomInstallerLearningPath = {
  career: "telecom_installer",
  title: "Telecom Installer Learning Path",
  estimatedDuration: "3–6 months to installer; 1–2 years to lead/fiber tech",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "Copper/fiber basics, topology, and safety.",
      estimatedTime: "2–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Understand Ethernet standards and PoE",
        "Learn fiber types, connectors, and attenuation",
        "Follow ladder, ceiling, and confined space safety"
      ]
    },
    {
      id: 2,
      title: "Tool Familiarity",
      description: "Crimpers, testers, fusion splicers, and OTDRs.",
      estimatedTime: "1–2 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Terminate copper keystones and patch panels",
        "Use fiber cleavers and fusion splicers",
        "Operate certifiers and basic OTDR tests"
      ]
    },
    {
      id: 3,
      title: "Code and Regulations",
      description: "NEC low-voltage, firestopping, and pathway rules.",
      estimatedTime: "3–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Follow plenum/non-plenum rating rules",
        "Install sleeves and firestop correctly",
        "Meet bend radius and fill ratio limits"
      ]
    },
    {
      id: 4,
      title: "Basic Techniques",
      description: "Cable pulling, dressing, labeling, and testing.",
      estimatedTime: "4–6 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Pull/dress cables with strain relief",
        "Label both ends and document routes",
        "Certify links to spec and create reports"
      ]
    },
    {
      id: 5,
      title: "Blueprint Reading",
      description: "Read floor plans, risers, and one-lines.",
      estimatedTime: "2–3 weeks",
      category: "skills",
      priority: "recommended",
      learningObjectives: [
        "Interpret telecom drawings and device locations",
        "Plan pathways and TR/IDF layouts",
        "Coordinate with GC and MEP trades"
      ]
    },
    {
      id: 6,
      title: "Entry-Level Certification",
      description: "Earn BICSI Installer 1 (or equivalent) and OSHA 10.",
      estimatedTime: "2–4 weeks",
      category: "certification",
      priority: "essential",
      learningObjectives: [
        "Pass BICSI fundamentals course/exam",
        "Complete OSHA 10 Construction",
        "Document training for employers"
      ]
    },
    {
      id: 7,
      title: "Hands-On Practice",
      description: "Install small projects under supervision.",
      estimatedTime: "4–8 weeks",
      category: "experience",
      priority: "essential",
      learningObjectives: [
        "Complete device drops end-to-end",
        "Perform fiber splices and tests",
        "Produce clean documentation packages"
      ]
    },
    {
      id: 8,
      title: "Job Search Preparation",
      description: "Target LV installer and fiber tech roles.",
      estimatedTime: "1–2 weeks",
      category: "experience",
      priority: "recommended",
      learningObjectives: [
        "Build a cert report portfolio",
        "Practice jobsite coordination scenarios",
        "Network with integrators and MSPs"
      ]
    },
    {
      id: 9,
      title: "Advanced Skills Development",
      description: "Wireless, CCTV, access control, and DAS.",
      estimatedTime: "Ongoing",
      category: "skills",
      priority: "optional",
      learningObjectives: [
        "Install and aim wireless APs",
        "Integrate CCTV and access control",
        "Support DAS components with RF basics"
      ]
    },
    {
      id: 10,
      title: "Professional Growth",
      description: "BICSI Installer 2/Tech and leadership.",
      estimatedTime: "1–3 years",
      category: "certification",
      priority: "optional",
      learningObjectives: [
        "Earn higher BICSI credentials",
        "Lead crews and manage punchlists",
        "Estimate small LV projects"
      ]
    }
  ],
  recommendedResources: [
    {
      category: "certification",
      title: "BICSI Installer Program",
      provider: "BICSI",
      url: "https://www.bicsi.org/",
      cost: "Paid",
      description: "Industry-recognized credentials for cabling installers.",
      relevantSteps: [6, 10]
    },
    {
      category: "skills",
      title: "Manufacturer Training",
      provider: "Cable/Connectivity Makers",
      url: "https://www.commscope.com/",
      cost: "Free/Paid",
      description: "Termination and certification best practices.",
      relevantSteps: [2, 4]
    }
  ],
  freeResources: [
    { title: "YouTube Low-Voltage", description: "Search 'Cat6 termination', 'fiber fusion splice', 'OTDR basics'." },
    { title: "Firestopping Guides", description: "UL firestop systems and datasheets." },
    { title: "Library/NEC LV", description: "Low-voltage sections and best practices." },
    { title: "Vendor Docs", description: "Connectivity and cabling install manuals." }
  ]
};