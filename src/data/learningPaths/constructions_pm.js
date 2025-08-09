export const constructionPmLearningPath = {
  career: "construction_pm",
  title: "Construction Project Manager Learning Path",
  estimatedDuration: "3–6 months to assistant PM/COO; 1–3 years to full PM",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "Learn construction delivery methods, roles, and safety.",
      estimatedTime: "2–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Understand design–bid–build, CM-at-risk, design–build",
        "Know roles: owner, GC, subs, inspectors",
        "Master OSHA site safety basics and pre-task planning"
      ]
    },
    {
      id: 2,
      title: "Tool Familiarity",
      description: "Use PM tools for scheduling, docs, and RFIs.",
      estimatedTime: "1–2 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Operate Procore (or similar), PlanGrid, and Bluebeam",
        "Build simple CPM schedules (Primavera/MS Project)",
        "Manage punchlists and submittal logs"
      ]
    },
    {
      id: 3,
      title: "Code and Regulations",
      description: "Study IBC, local codes, permits, and compliance.",
      estimatedTime: "3–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Navigate IBC and local amendments",
        "Understand permit workflows and inspections",
        "Coordinate trade code requirements"
      ]
    },
    {
      id: 4,
      title: "Basic Techniques",
      description: "Core PM workflows: scope, cost, schedule, quality.",
      estimatedTime: "4–6 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Create WBS, estimates, and baseline schedules",
        "Run RFIs, submittals, and change orders",
        "Manage site logistics, QC, and closeout"
      ]
    },
    {
      id: 5,
      title: "Blueprint Reading",
      description: "Read architectural, structural, MEP plans/specs.",
      estimatedTime: "2–3 weeks",
      category: "skills",
      priority: "recommended",
      learningObjectives: [
        "Interpret specs divisions and plan sets",
        "Coordinate RCPs, sections, and details",
        "Lead plan review meetings"
      ]
    },
    {
      id: 6,
      title: "Entry-Level Certification",
      description: "Complete OSHA 30 and foundational PM certificates.",
      estimatedTime: "2–4 weeks",
      category: "certification",
      priority: "essential",
      learningObjectives: [
        "Earn OSHA 30 Construction",
        "Complete Procore or similar PM platform certs",
        "Understand CAPM/PMP pathways"
      ]
    },
    {
      id: 7,
      title: "Hands-On Practice",
      description: "Assist a PM on real jobs or capstone projects.",
      estimatedTime: "4–8 weeks",
      category: "experience",
      priority: "essential",
      learningObjectives: [
        "Run meetings and distribute minutes",
        "Track budgets, RFIs, submittals, and change orders",
        "Coordinate with superintendents and subs"
      ]
    },
    {
      id: 8,
      title: "Job Search Preparation",
      description: "Target APM or coordinator roles.",
      estimatedTime: "1–2 weeks",
      category: "experience",
      priority: "recommended",
      learningObjectives: [
        "Create project portfolio sheets",
        "Practice schedule and case interviews",
        "Network with GCs and construction recruiters"
      ]
    },
    {
      id: 9,
      title: "Advanced Skills Development",
      description: "Lean, risk management, and advanced scheduling.",
      estimatedTime: "Ongoing",
      category: "skills",
      priority: "optional",
      learningObjectives: [
        "Apply Last Planner and pull planning",
        "Build probabilistic schedules and risk registers",
        "Improve cost control and earned value tracking"
      ]
    },
    {
      id: 10,
      title: "Professional Growth",
      description: "Pursue PMP/CM-BIM and leadership tracks.",
      estimatedTime: "1–3 years",
      category: "certification",
      priority: "optional",
      learningObjectives: [
        "Earn CAPM/PMP when eligible",
        "Lead larger projects and teams",
        "Consider GC/ownership pathways"
      ]
    }
  ],
  recommendedResources: [
    {
      category: "skills",
      title: "Procore Certification",
      provider: "Procore",
      url: "https://learn.procore.com/",
      cost: "Free",
      description: "Vendor certs for PM, Engineer, and Superintendent tracks.",
      relevantSteps: [2, 6]
    },
    {
      category: "certification",
      title: "Construction Management Specializations",
      provider: "Coursera / edX",
      url: "https://www.coursera.org/",
      cost: "Paid (subscription)",
      description: "Scheduling, estimating, and project controls courses.",
      relevantSteps: [2, 4, 9]
    }
  ],
  freeResources: [
    { title: "YouTube Walkthroughs", description: "Search 'Procore basics', 'CPM scheduling intro', 'Bluebeam tips'." },
    { title: "AGC/AIA Docs", description: "Sample contracts and best practices." },
    { title: "City Permit Sites", description: "Local permit workflows and checklists." },
    { title: "Trade Publications", description: "ENR, Construction Dive for trends and case studies." }
  ]
};