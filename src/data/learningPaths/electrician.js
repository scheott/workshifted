export const electricianLearningPath = {
  career: "electrician",
  title: "Electrician Learning Path",
  estimatedDuration: "6–12 months to helper; 2–4 years to journeyman via apprenticeship",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "Learn core electrical theory, safety, and terminology.",
      estimatedTime: "2–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Understand voltage, current, resistance, and power (Ohm’s Law)",
        "Learn AC/DC basics, series/parallel circuits",
        "Know OSHA jobsite safety and lockout/tagout basics"
      ]
    },
    {
      id: 2,
      title: "Tool Familiarity",
      description: "Get hands-on with hand/power tools used daily.",
      estimatedTime: "1–2 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Use multimeters, non-contact testers, and clamp meters",
        "Practice conduit bending and cable pulling",
        "Maintain tools and PPE properly"
      ]
    },
    {
      id: 3,
      title: "Code and Regulations",
      description: "Study the National Electrical Code (NEC) and local rules.",
      estimatedTime: "3–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Navigate NEC structure and common articles",
        "Understand permitting/inspection processes",
        "Identify local amendments and licensing rules"
      ]
    },
    {
      id: 4,
      title: "Basic Techniques",
      description: "Practice staple electrical installs and terminations.",
      estimatedTime: "4–6 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Rough-in and trim-out for receptacles, switches, and lighting",
        "Terminate devices and panels safely",
        "Apply proper grounding and bonding"
      ]
    },
    {
      id: 5,
      title: "Blueprint Reading",
      description: "Read electrical plans and one-line diagrams.",
      estimatedTime: "2–3 weeks",
      category: "skills",
      priority: "recommended",
      learningObjectives: [
        "Interpret symbols, schedules, and legends",
        "Follow conduit/circuit routing on plans",
        "Coordinate with other trades from drawings"
      ]
    },
    {
      id: 6,
      title: "Entry-Level Certification",
      description: "Complete basic required training and registration.",
      estimatedTime: "2–4 weeks",
      category: "certification",
      priority: "essential",
      learningObjectives: [
        "Finish OSHA 10 Construction",
        "Register as an apprentice/trainee where required",
        "Understand exam pathways for journeyman/master"
      ]
    },
    {
      id: 7,
      title: "Hands-On Practice",
      description: "Apply skills on mockups or supervised projects.",
      estimatedTime: "4–8 weeks",
      category: "experience",
      priority: "essential",
      learningObjectives: [
        "Build circuits from panel to device",
        "Troubleshoot using meters and test plans",
        "Work efficiently while meeting code"
      ]
    },
    {
      id: 8,
      title: "Job Search Preparation",
      description: "Get placement-ready for helper/apprentice roles.",
      estimatedTime: "1–2 weeks",
      category: "experience",
      priority: "recommended",
      learningObjectives: [
        "Craft a trade-focused resume and portfolio",
        "Practice trade interview questions",
        "Apply to contractors and apprenticeship programs"
      ]
    },
    {
      id: 9,
      title: "Advanced Skills Development",
      description: "Go deeper with motor controls and low-voltage.",
      estimatedTime: "Ongoing",
      category: "skills",
      priority: "optional",
      learningObjectives: [
        "Learn motor controls, VFDs, and PLC basics",
        "Explore solar/storage tie-ins and EVSE",
        "Improve estimating and material takeoffs"
      ]
    },
    {
      id: 10,
      title: "Professional Growth",
      description: "Pursue higher licenses and business skills.",
      estimatedTime: "1–3 years",
      category: "certification",
      priority: "optional",
      learningObjectives: [
        "Sit for journeyman/master exams when eligible",
        "Develop leadership and project coordination",
        "Consider contractor licensing and business ownership"
      ]
    }
  ],
  recommendedResources: [
    {
      category: "fundamentals",
      title: "NEC Fundamentals & Code Updates",
      provider: "Mike Holt / Code Academies",
      url: "https://www.mikeholt.com/",
      cost: "Paid",
      description: "High-quality NEC explanations, videos, and exam prep.",
      relevantSteps: [3, 4, 6]
    },
    {
      category: "certification",
      title: "Apprenticeship Finder",
      provider: "Apprenticeship.gov",
      url: "https://www.apprenticeship.gov/apprenticeship-job-finder",
      cost: "Free",
      description: "Search registered electrician apprenticeship programs.",
      relevantSteps: [6, 8]
    }
  ],
  freeResources: [
    { title: "YouTube Channels", description: "Search for 'electrical basics', 'NEC tutorials', 'conduit bending'." },
    { title: "Library/NEC Access", description: "Check your library or employer access to NEC handbooks." },
    { title: "Community College", description: "Intro to electrical trades and safety courses at low cost." },
    { title: "Manufacturer Resources", description: "Panelboard, breaker, and device makers publish install guides." }
  ]
};
