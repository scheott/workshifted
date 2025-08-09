export const plumberLearningPath = {
  career: "plumber",
  title: "Plumber Learning Path",
  estimatedDuration: "4–8 months to helper; 2–4 years to journeyman via apprenticeship",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "Learn water supply, DWV systems, and safety basics.",
      estimatedTime: "2–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Understand potable water, drainage, venting, and gas concepts",
        "Learn material types (copper, PEX, PVC/ABS, black iron)",
        "Know PPE, trench safety, and confined space basics"
      ]
    },
    {
      id: 2,
      title: "Tool Familiarity",
      description: "Practice with cutting, joining, and threading tools.",
      estimatedTime: "1–2 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Use pipe cutters, reamers, torches, press tools",
        "Thread and seal black iron properly",
        "Maintain press jaws, torches, and meters"
      ]
    },
    {
      id: 3,
      title: "Code and Regulations",
      description: "Study IPC/UPC and gas/mechanical code intersections.",
      estimatedTime: "3–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Navigate plumbing code tables and fixture units",
        "Understand permits/inspections and slope requirements",
        "Learn backflow and cross-connection control basics"
      ]
    },
    {
      id: 4,
      title: "Basic Techniques",
      description: "Install DWV, supply lines, and fixtures to code.",
      estimatedTime: "4–6 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Solder/braze copper; crimp/press PEX; solvent weld PVC/ABS",
        "Set fixtures and connect traps/vents",
        "Pressure test, leak check, and QC"
      ]
    },
    {
      id: 5,
      title: "Blueprint Reading",
      description: "Interpret isometrics and riser diagrams.",
      estimatedTime: "2–3 weeks",
      category: "skills",
      priority: "recommended",
      learningObjectives: [
        "Read plumbing isometric drawings",
        "Calculate pipe sizing from tables",
        "Coordinate with other trades"
      ]
    },
    {
      id: 6,
      title: "Entry-Level Certification",
      description: "Finish safety, apprentice registration, and backflow awareness.",
      estimatedTime: "2–4 weeks",
      category: "certification",
      priority: "essential",
      learningObjectives: [
        "Complete OSHA 10 Construction",
        "Register as apprentice where required",
        "Understand local license exam pathways"
      ]
    },
    {
      id: 7,
      title: "Hands-On Practice",
      description: "Do mock-ups and supervised installs/repairs.",
      estimatedTime: "4–8 weeks",
      category: "experience",
      priority: "essential",
      learningObjectives: [
        "Rough-in and finish full-bath and kitchen systems",
        "Snake/jet lines and troubleshoot clogs/leaks",
        "Document work and materials accurately"
      ]
    },
    {
      id: 8,
      title: "Job Search Preparation",
      description: "Target helper and apprentice roles.",
      estimatedTime: "1–2 weeks",
      category: "experience",
      priority: "recommended",
      learningObjectives: [
        "Build plumbing-focused resume",
        "Practice scenario-based interview answers",
        "Network with shops, unions, and PHCC chapters"
      ]
    },
    {
      id: 9,
      title: "Advanced Skills Development",
      description: "Explore hydronics, gas piping, and backflow testing.",
      estimatedTime: "Ongoing",
      category: "skills",
      priority: "optional",
      learningObjectives: [
        "Learn boilers, radiant heat, and circulator sizing",
        "Install and test gas lines to code",
        "Prepare for backflow tester certification"
      ]
    },
    {
      id: 10,
      title: "Professional Growth",
      description: "Progress to journeyman/master and estimating.",
      estimatedTime: "1–3 years",
      category: "certification",
      priority: "optional",
      learningObjectives: [
        "Sit for journeyman/master exams when eligible",
        "Develop estimating and small-project PM",
        "Consider service business ownership"
      ]
    }
  ],
  recommendedResources: [
    {
      category: "fundamentals",
      title: "NCCER Plumbing Curriculum",
      provider: "NCCER",
      url: "https://www.nccer.org/",
      cost: "Paid",
      description: "Structured plumbing learning with industry-recognized modules.",
      relevantSteps: [1, 3, 4]
    },
    {
      category: "certification",
      title: "Apprenticeship Programs",
      provider: "PHCC / Apprenticeship.gov",
      url: "https://www.phccweb.org/education-training/",
      cost: "Paid/Free",
      description: "Training and registered apprenticeships directory.",
      relevantSteps: [6, 8]
    }
  ],
  freeResources: [
    { title: "YouTube Tutorials", description: "Search 'DWV basics', 'copper soldering', 'PEX press'." },
    { title: "Library Codes", description: "UPC/IPC references via library or contractor resources." },
    { title: "Community College", description: "Intro plumbing and backflow awareness courses." },
    { title: "Manufacturer Guides", description: "PEX, valve, and fixture makers publish detailed manuals." }
  ]
};