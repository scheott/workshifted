export const carpenterLearningPath = {
  career: "carpenter",
  title: "Carpenter Learning Path",
  estimatedDuration: "4–8 months to helper; 2–4 years to journeyman",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "Learn wood science, framing basics, and site safety.",
      estimatedTime: "2–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Understand lumber grades, moisture, and fasteners",
        "Review framing, sheathing, and finish carpentry scope",
        "Know PPE, ladder/scaffold safety, and saw safety"
      ]
    },
    {
      id: 2,
      title: "Tool Familiarity",
      description: "Hands-on with saws, nailers, levels, and layout tools.",
      estimatedTime: "1–2 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Use circular/miter/table saws safely",
        "Operate nailers, drills, and routers",
        "Do square/layout with tape, chalk, laser"
      ]
    },
    {
      id: 3,
      title: "Code and Regulations",
      description: "Study residential code (IRC) for structural/framing.",
      estimatedTime: "3–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Understand span tables, headers, joists, and bracing",
        "Know fire blocking and egress rules",
        "Follow inspection sequences"
      ]
    },
    {
      id: 4,
      title: "Basic Techniques",
      description: "Framing, door/window install, and trim basics.",
      estimatedTime: "4–6 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Frame walls, floors, rafters, and roofs",
        "Install doors/windows plumb, level, square",
        "Perform base/casing installs with clean miters"
      ]
    },
    {
      id: 5,
      title: "Blueprint Reading",
      description: "Read plans, elevations, and framing details.",
      estimatedTime: "2–3 weeks",
      category: "skills",
      priority: "recommended",
      learningObjectives: [
        "Interpret dimensions, sections, and details",
        "Translate plans to field layout",
        "Coordinate with MEP rough-ins"
      ]
    },
    {
      id: 6,
      title: "Entry-Level Certification",
      description: "Complete OSHA 10 and fall protection training.",
      estimatedTime: "2–4 weeks",
      category: "certification",
      priority: "essential",
      learningObjectives: [
        "Complete OSHA 10 Construction",
        "Take manufacturer install certifications where available",
        "Document training for employers"
      ]
    },
    {
      id: 7,
      title: "Hands-On Practice",
      description: "Build mock frames, stairs, and finish samples.",
      estimatedTime: "4–8 weeks",
      category: "experience",
      priority: "essential",
      learningObjectives: [
        "Practice speed and accuracy in framing",
        "Set cabinets and build clean finish details",
        "Meet quality and safety standards"
      ]
    },
    {
      id: 8,
      title: "Job Search Preparation",
      description: "Apply to framing and finish crews.",
      estimatedTime: "1–2 weeks",
      category: "experience",
      priority: "recommended",
      learningObjectives: [
        "Create a photo portfolio of builds",
        "Prepare trade interview stories (quality, safety, teamwork)",
        "Network with GCs, unions, and carpentry shops"
      ]
    },
    {
      id: 9,
      title: "Advanced Skills Development",
      description: "Stairs, custom built-ins, and exterior cladding.",
      estimatedTime: "Ongoing",
      category: "skills",
      priority: "optional",
      learningObjectives: [
        "Template and build custom stairs",
        "Fab built-ins with tight tolerances",
        "Install siding and exterior details to spec"
      ]
    },
    {
      id: 10,
      title: "Professional Growth",
      description: "Foreman, estimator, or small contractor path.",
      estimatedTime: "1–3 years",
      category: "certification",
      priority: "optional",
      learningObjectives: [
        "Lead crews and schedule work",
        "Learn takeoffs and estimating",
        "Consider licensing for small projects"
      ]
    }
  ],
  recommendedResources: [
    {
      category: "fundamentals",
      title: "NCCER Carpentry",
      provider: "NCCER",
      url: "https://www.nccer.org/",
      cost: "Paid",
      description: "Structured carpentry curriculum and credentials.",
      relevantSteps: [1, 3, 4]
    },
    {
      category: "skills",
      title: "Union Apprenticeship Programs",
      provider: "United Brotherhood of Carpenters",
      url: "https://www.carpenters.org/",
      cost: "Paid (earn while you learn)",
      description: "Training centers and apprenticeship opportunities.",
      relevantSteps: [6, 7, 8]
    }
  ],
  freeResources: [
    { title: "YouTube Carpentry", description: "Search 'framing basics', 'finish carpentry', 'stair layout'." },
    { title: "Library/IRC", description: "Access International Residential Code references." },
    { title: "Manufacturer Install Guides", description: "Window/door/siding makers publish detailed instructions." },
    { title: "Community College", description: "Low-cost intro carpentry labs." }
  ]
};