export const welderLearningPath = {
  career: "welder",
  title: "Welder Learning Path",
  estimatedDuration: "3–6 months to production welder; 1–2 years to structural certs",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "Learn welding processes, metallurgy, and shop safety.",
      estimatedTime: "2–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Understand SMAW, GMAW/MIG, GTAW/TIG, FCAW",
        "Know joint design, filler metals, and heat control",
        "Master PPE, ventilation, and fire prevention"
      ]
    },
    {
      id: 2,
      title: "Tool Familiarity",
      description: "Set up machines, gas systems, and cutting tools.",
      estimatedTime: "1–2 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Dial in voltage, wire speed, and amperage",
        "Use oxy-fuel and plasma cutting safely",
        "Maintain torches, liners, and consumables"
      ]
    },
    {
      id: 3,
      title: "Code and Regulations",
      description: "Intro to AWS codes and WPS/PQR concepts.",
      estimatedTime: "3–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Recognize AWS D1.1 and other common standards",
        "Understand WPS, PQR, and welder qualification",
        "Follow shop QA/QC procedures"
      ]
    },
    {
      id: 4,
      title: "Basic Techniques",
      description: "Learn flat, horizontal, vertical, and overhead welds.",
      estimatedTime: "4–6 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Run beads with consistent travel speed and angle",
        "Control distortion and weld penetration",
        "Perform fillet and groove welds"
      ]
    },
    {
      id: 5,
      title: "Blueprint Reading",
      description: "Interpret weld symbols and fabrication drawings.",
      estimatedTime: "2–3 weeks",
      category: "skills",
      priority: "recommended",
      learningObjectives: [
        "Read weld symbols and notes",
        "Follow assembly drawings and tolerances",
        "Plan sequence and fixturing"
      ]
    },
    {
      id: 6,
      title: "Entry-Level Certification",
      description: "Pursue initial welder performance qualifications.",
      estimatedTime: "2–4 weeks",
      category: "certification",
      priority: "essential",
      learningObjectives: [
        "Test to a basic fillet/groove WPS",
        "Document welder qualification records",
        "Complete OSHA 10 (shop/construction as relevant)"
      ]
    },
    {
      id: 7,
      title: "Hands-On Practice",
      description: "Build coupons and small projects to spec.",
      estimatedTime: "4–8 weeks",
      category: "experience",
      priority: "essential",
      learningObjectives: [
        "Meet acceptance criteria for visual/NDT",
        "Improve consistency and productivity",
        "Follow WPS parameters strictly"
      ]
    },
    {
      id: 8,
      title: "Job Search Preparation",
      description: "Apply to fab shops, shipyards, or field crews.",
      estimatedTime: "1–2 weeks",
      category: "experience",
      priority: "recommended",
      learningObjectives: [
        "Create a weld test prep plan",
        "Show portfolio of coupons and projects",
        "Network with local employers and unions"
      ]
    },
    {
      id: 9,
      title: "Advanced Skills Development",
      description: "Stainless/aluminum TIG, pipe welding, and NDT basics.",
      estimatedTime: "Ongoing",
      category: "skills",
      priority: "optional",
      learningObjectives: [
        "Master TIG for thin and exotic materials",
        "Practice 2G/3G/4G and 5G/6G pipe positions",
        "Learn radiography/ultrasonic test expectations"
      ]
    },
    {
      id: 10,
      title: "Professional Growth",
      description: "Pursue higher certs and lead/fab roles.",
      estimatedTime: "1–3 years",
      category: "certification",
      priority: "optional",
      learningObjectives: [
        "Earn additional AWS procedures and positions",
        "Lead small fabrication teams",
        "Consider CWI (after meeting prerequisites)"
      ]
    }
  ],
  recommendedResources: [
    {
      category: "certification",
      title: "AWS Training & Certification",
      provider: "American Welding Society",
      url: "https://www.aws.org/",
      cost: "Paid",
      description: "Welder certs, procedures, and inspector pathways.",
      relevantSteps: [3, 6, 10]
    },
    {
      category: "skills",
      title: "Community College Welding",
      provider: "Local Colleges/Tech Centers",
      url: "https://www.aacc.nche.edu/",
      cost: "Paid",
      description: "Hands-on labs, safety, and code-based instruction.",
      relevantSteps: [1, 2, 4]
    }
  ],
  freeResources: [
    { title: "YouTube Welding", description: "Search 'MIG settings', 'TIG torch control', 'weld symbols'." },
    { title: "Manufacturer Guides", description: "Miller/Lincoln manuals and process notes." },
    { title: "Library/AWS Books", description: "Welding handbooks and code commentaries." },
    { title: "Open Course PDFs", description: "Many schools post welding syllabi and lab guides." }
  ]
};