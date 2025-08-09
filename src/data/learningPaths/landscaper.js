export const landscaperLearningPath = {
  career: "landscaper",
  title: "Landscaper Learning Path",
  estimatedDuration: "2–4 months to crew member; 6–12 months to crew lead",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "Horticulture basics, soil, irrigation, and safety.",
      estimatedTime: "2–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Identify common plants and turf types",
        "Understand soil health and irrigation cycles",
        "Learn equipment safety and PPE"
      ]
    },
    {
      id: 2,
      title: "Tool Familiarity",
      description: "Operate mowers, trimmers, blowers, and small tools.",
      estimatedTime: "1–2 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Start-up/shut-down procedures",
        "Sharpen blades and maintain equipment",
        "Transport and load tools safely"
      ]
    },
    {
      id: 3,
      title: "Code and Regulations",
      description: "Watering rules, pesticide basics, and local regs.",
      estimatedTime: "3–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Follow watering/irrigation restrictions",
        "Understand pesticide applicator basics",
        "Know noise and disposal ordinances"
      ]
    },
    {
      id: 4,
      title: "Basic Techniques",
      description: "Mowing patterns, pruning, mulching, and installs.",
      estimatedTime: "4–6 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Perform clean trims and pruning cuts",
        "Mulch and bed prep best practices",
        "Assist in hardscape and plant installs"
      ]
    },
    {
      id: 5,
      title: "Blueprint Reading",
      description: "Read basic landscape plans and irrigation layouts.",
      estimatedTime: "2–3 weeks",
      category: "skills",
      priority: "recommended",
      learningObjectives: [
        "Interpret symbols and planting schedules",
        "Translate plans to site layout",
        "Calculate quantities from drawings"
      ]
    },
    {
      id: 6,
      title: "Entry-Level Certification",
      description: "Pursue applicator license (if needed) and OSHA basics.",
      estimatedTime: "2–4 weeks",
      category: "certification",
      priority: "essential",
      learningObjectives: [
        "Obtain state pesticide applicator license if required",
        "Complete OSHA 10 (as applicable)",
        "Document training hours"
      ]
    },
    {
      id: 7,
      title: "Hands-On Practice",
      description: "Perform maintenance routes and small installs.",
      estimatedTime: "4–8 weeks",
      category: "experience",
      priority: "essential",
      learningObjectives: [
        "Hit schedule targets with quality",
        "Troubleshoot irrigation and plant health",
        "Communicate with clients professionally"
      ]
    },
    {
      id: 8,
      title: "Job Search Preparation",
      description: "Apply to maintenance and design–build firms.",
      estimatedTime: "1–2 weeks",
      category: "experience",
      priority: "recommended",
      learningObjectives: [
        "Show before/after photos and plant IDs",
        "Practice customer service and upsell conversations",
        "Network with local landscape associations"
      ]
    },
    {
      id: 9,
      title: "Advanced Skills Development",
      description: "Hardscape, irrigation tech, and design basics.",
      estimatedTime: "Ongoing",
      category: "skills",
      priority: "optional",
      learningObjectives: [
        "Install pavers/retaining walls properly",
        "Program multi-zone irrigation controllers",
        "Use basic CAD/design tools"
      ]
    },
    {
      id: 10,
      title: "Professional Growth",
      description: "Crew leadership and business ownership path.",
      estimatedTime: "1–3 years",
      category: "certification",
      priority: "optional",
      learningObjectives: [
        "Gain Landscape Industry Certified credentials",
        "Lead crews and manage maintenance routes",
        "Start a small maintenance/design business"
      ]
    }
  ],
  recommendedResources: [
    {
      category: "certification",
      title: "Landscape Industry Certified",
      provider: "NALP",
      url: "https://www.landscapeprofessionals.org/",
      cost: "Paid",
      description: "Credible credentials for maintenance and install roles.",
      relevantSteps: [6, 10]
    },
    {
      category: "skills",
      title: "Community College Horticulture",
      provider: "Local Colleges/Extensions",
      url: "https://www.extension.org/",
      cost: "Paid/Free",
      description: "Intro horticulture, irrigation, and soil labs.",
      relevantSteps: [1, 4, 9]
    }
  ],
  freeResources: [
    { title: "YouTube Landscaping", description: "Search 'proper pruning', 'mulch depth', 'irrigation troubleshooting'." },
    { title: "County Extension", description: "Free plant and pest identification resources." },
    { title: "Manufacturer Guides", description: "Irrigation controller manuals and install guides." },
    { title: "Library/Textbooks", description: "Horticulture and landscape maintenance books." }
  ]
};