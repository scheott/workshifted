export const homeInspectorLearningPath = {
  career: "home_inspector",
  title: "Home Inspector Learning Path",
  estimatedDuration: "2–4 months to trainee; 6–12 months to independent inspector",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "Learn building systems, SOPs, and safety.",
      estimatedTime: "2–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Understand structural, roof, electrical, HVAC, plumbing",
        "Learn Standards of Practice (ASHI/InterNACHI)",
        "Know ladder safety, PPE, and confined spaces"
      ]
    },
    {
      id: 2,
      title: "Tool Familiarity",
      description: "Use moisture meters, IR cams, GFCI testers, and more.",
      estimatedTime: "1–2 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Operate basic inspection tools and maintain calibration",
        "Capture quality photos for reports",
        "Organize toolkits for field work"
      ]
    },
    {
      id: 3,
      title: "Code and Regulations",
      description: "State licensing rules and SOP/COE compliance.",
      estimatedTime: "3–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Research your state’s licensing requirements",
        "Follow SOP/Code of Ethics in reporting",
        "Understand limitations and disclaimers"
      ]
    },
    {
      id: 4,
      title: "Basic Techniques",
      description: "Perform full inspections and write clear reports.",
      estimatedTime: "4–6 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Develop systematic inspection flow",
        "Identify common defects across systems",
        "Write concise reports with photos and recommendations"
      ]
    },
    {
      id: 5,
      title: "Blueprint Reading",
      description: "Read plans, specs, and past permits/records.",
      estimatedTime: "2–3 weeks",
      category: "skills",
      priority: "recommended",
      learningObjectives: [
        "Interpret plan sets and revisions",
        "Check permits/COs and record findings",
        "Explain deviations to clients"
      ]
    },
    {
      id: 6,
      title: "Entry-Level Certification",
      description: "Complete state-required training and association entry.",
      estimatedTime: "2–4 weeks",
      category: "certification",
      priority: "essential",
      learningObjectives: [
        "Finish state-approved course where required",
        "Join InterNACHI/ASHI for SOP/COE and CE",
        "Adopt report software (Spectora/HIP/etc.)"
      ]
    },
    {
      id: 7,
      title: "Hands-On Practice",
      description: "Shadow experienced inspectors and perform supervised jobs.",
      estimatedTime: "4–8 weeks",
      category: "experience",
      priority: "essential",
      learningObjectives: [
        "Practice complete inspections end-to-end",
        "Benchmark report turnaround time",
        "Collect client testimonials"
      ]
    },
    {
      id: 8,
      title: "Job Search Preparation",
      description: "Launch as employee or independent inspector.",
      estimatedTime: "1–2 weeks",
      category: "experience",
      priority: "recommended",
      learningObjectives: [
        "Create sample reports and marketing site",
        "Network with realtors and broker offices",
        "Set pricing and service area"
      ]
    },
    {
      id: 9,
      title: "Advanced Skills Development",
      description: "Radon, mold, sewer scope, and thermal add-ons.",
      estimatedTime: "Ongoing",
      category: "skills",
      priority: "optional",
      learningObjectives: [
        "Add ancillary services and pricing",
        "Learn thermal imaging interpretation",
        "Develop QA processes and checklists"
      ]
    },
    {
      id: 10,
      title: "Professional Growth",
      description: "CE credits, specialty certs, and business growth.",
      estimatedTime: "1–3 years",
      category: "certification",
      priority: "optional",
      learningObjectives: [
        "Maintain CE and association status",
        "Hire/mentor additional inspectors",
        "Scale with SOP-compliant systems"
      ]
    }
  ],
  recommendedResources: [
    {
      category: "certification",
      title: "InterNACHI CPI Path",
      provider: "InterNACHI",
      url: "https://www.nachi.org/",
      cost: "Paid",
      description: "Training, SOP, and CPI certification pathway.",
      relevantSteps: [3, 6]
    },
    {
      category: "skills",
      title: "ASHI Education",
      provider: "ASHI",
      url: "https://www.homeinspector.org/",
      cost: "Paid",
      description: "Education, standards, and networking.",
      relevantSteps: [1, 4, 10]
    }
  ],
  freeResources: [
    { title: "YouTube Inspections", description: "Search 'home inspection walkthrough', 'report writing tips'." },
    { title: "State Licensing Sites", description: "Requirements, approved courses, and CE lists." },
    { title: "Sample Reports", description: "Public sample reports from inspectors to model quality." },
    { title: "Library/Code Access", description: "IRC access and building science books." }
  ]
};