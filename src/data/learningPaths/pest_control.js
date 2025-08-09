export const pestControlLearningPath = {
  career: "pest_control",
  title: "Pest Control Technician Learning Path",
  estimatedDuration: "2–3 months to tech; 6–12 months to route lead",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "IPM principles, pest biology, and safety.",
      estimatedTime: "2–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Learn integrated pest management (IPM)",
        "Identify common pests and life cycles",
        "Know pesticide labels, PPE, and spill response"
      ]
    },
    {
      id: 2,
      title: "Tool Familiarity",
      description: "Sprayers, dusters, monitors, and exclusion tools.",
      estimatedTime: "1–2 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Calibrate and maintain application equipment",
        "Place monitors and traps effectively",
        "Perform exclusion with sealants and screens"
      ]
    },
    {
      id: 3,
      title: "Code and Regulations",
      description: "State licensing, recordkeeping, and labels/MSDS.",
      estimatedTime: "3–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Meet state applicator licensing rules",
        "Maintain treatment records and SDS access",
        "Follow re-entry and notification requirements"
      ]
    },
    {
      id: 4,
      title: "Basic Techniques",
      description: "Inspection, identification, and treatment plans.",
      estimatedTime: "4–6 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Perform thorough inspections",
        "Choose targeted treatments and baits",
        "Educate customers on sanitation and prevention"
      ]
    },
    {
      id: 5,
      title: "Blueprint Reading",
      description: "Read site maps and building layouts for routes.",
      estimatedTime: "2–3 weeks",
      category: "skills",
      priority: "recommended",
      learningObjectives: [
        "Plan inspection routes efficiently",
        "Map harborage and access points",
        "Coordinate with facility managers"
      ]
    },
    {
      id: 6,
      title: "Entry-Level Certification",
      description: "Pass state applicator/core exams.",
      estimatedTime: "2–4 weeks",
      category: "certification",
      priority: "essential",
      learningObjectives: [
        "Study state core/manufacturer training",
        "Pass general pest and category exams",
        "Document CE requirements"
      ]
    },
    {
      id: 7,
      title: "Hands-On Practice",
      description: "Perform supervised treatments and service routes.",
      estimatedTime: "4–8 weeks",
      category: "experience",
      priority: "essential",
      learningObjectives: [
        "Apply products per label and safety",
        "Track results with follow-ups",
        "Communicate findings to clients"
      ]
    },
    {
      id: 8,
      title: "Job Search Preparation",
      description: "Apply to pest firms or facility roles.",
      estimatedTime: "1–2 weeks",
      category: "experience",
      priority: "recommended",
      learningObjectives: [
        "Create record of treatments and results",
        "Practice customer communication scenarios",
        "Network with local firms and facility managers"
      ]
    },
    {
      id: 9,
      title: "Advanced Skills Development",
      description: "Commercial accounts, food safety, and audits.",
      estimatedTime: "Ongoing",
      category: "skills",
      priority: "optional",
      learningObjectives: [
        "Manage food processing and audits",
        "Use data for trend analysis",
        "Specialize in termites, wildlife, or bed bugs"
      ]
    },
    {
      id: 10,
      title: "Professional Growth",
      description: "CE, category add-ons, and route leadership.",
      estimatedTime: "1–3 years",
      category: "certification",
      priority: "optional",
      learningObjectives: [
        "Add termite/fumigation/wildlife categories",
        "Lead routes and train juniors",
        "Consider starting a pest company"
      ]
    }
  ],
  recommendedResources: [
    {
      category: "certification",
      title: "State Applicator Licensing",
      provider: "State Dept. of Agriculture/Environmental",
      url: "https://www.epa.gov/pesticide-worker-safety/pesticide-applicator-certification",
      cost: "Paid",
      description: "Official route to applicator licensing and categories.",
      relevantSteps: [3, 6]
    },
    {
      category: "skills",
      title: "NPMA Training",
      provider: "National Pest Management Association",
      url: "https://www.npmapestworld.org/",
      cost: "Paid",
      description: "Structured learning and CE opportunities.",
      relevantSteps: [1, 4, 9]
    }
  ],
  freeResources: [
    { title: "Extension Services", description: "University extension pest ID and IPM guides." },
    { title: "YouTube IPM", description: "Search 'pest inspection basics', 'IPM strategies'." },
    { title: "Labels/SDS", description: "Manufacturer labels and safety data sheets." },
    { title: "EPA Resources", description: "Pesticide safety and certification guidance." }
  ]
};