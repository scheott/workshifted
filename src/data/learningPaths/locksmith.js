export const locksmithLearningPath = {
  career: "locksmith",
  title: "Locksmith Learning Path",
  estimatedDuration: "3–6 months to entry-level; 1–2 years to advanced tech",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "Lock types, keying systems, and safety/legal basics.",
      estimatedTime: "2–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Understand pin tumbler, wafer, disc-detainer, and mortise locks",
        "Learn keyways, bitting, and masterkey systems",
        "Know legal/ethical guidelines and verification procedures"
      ]
    },
    {
      id: 2,
      title: "Tool Familiarity",
      description: "Key machines, picks, decoders, and installation tools.",
      estimatedTime: "1–2 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Use duplicators and code-cutting machines",
        "Pick and decode common lock types",
        "Install locks, strikes, and door hardware cleanly"
      ]
    },
    {
      id: 3,
      title: "Code and Regulations",
      description: "Local locksmith licensing and fire/egress codes.",
      estimatedTime: "3–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Meet local licensing/registration requirements",
        "Follow egress and fire door code rules",
        "Understand restricted key systems policies"
      ]
    },
    {
      id: 4,
      title: "Basic Techniques",
      description: "Rekeying, impressioning, bypass methods, and installs.",
      estimatedTime: "4–6 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Rekey common cylinders and create master key sets",
        "Impression keys on simple locks",
        "Perform non-destructive entry and clean retrofits"
      ]
    },
    {
      id: 5,
      title: "Blueprint Reading",
      description: "Read door schedules and hardware sets.",
      estimatedTime: "2–3 weeks",
      category: "skills",
      priority: "recommended",
      learningObjectives: [
        "Interpret hardware schedules/specs",
        "Select compatible cylinders/cores",
        "Coordinate with contractors and AHJs"
      ]
    },
    {
      id: 6,
      title: "Entry-Level Certification",
      description: "Pursue ALOA certifications and state licenses.",
      estimatedTime: "2–4 weeks",
      category: "certification",
      priority: "essential",
      learningObjectives: [
        "Study ALOA fundamentals (ALOA PRP)",
        "Complete state licensing where required",
        "Document lawful work procedures"
      ]
    },
    {
      id: 7,
      title: "Hands-On Practice",
      description: "Practice rekeying and service calls under supervision.",
      estimatedTime: "4–8 weeks",
      category: "experience",
      priority: "essential",
      learningObjectives: [
        "Build speed/quality in rekeys and installs",
        "Troubleshoot door issues (alignment, latch, closer)",
        "Handle customer verification/consent professionally"
      ]
    },
    {
      id: 8,
      title: "Job Search Preparation",
      description: "Apply to locksmith shops or start mobile services.",
      estimatedTime: "1–2 weeks",
      category: "experience",
      priority: "recommended",
      learningObjectives: [
        "Create portfolio of rekey/impression jobs",
        "Practice phone triage and dispatch scripts",
        "Network with property managers and HOAs"
      ]
    },
    {
      id: 9,
      title: "Advanced Skills Development",
      description: "Automotive, safes, and access control basics.",
      estimatedTime: "Ongoing",
      category: "skills",
      priority: "optional",
      learningObjectives: [
        "Program transponder keys and remotes",
        "Open and service safes (with training)",
        "Install electronic strikes and access control"
      ]
    },
    {
      id: 10,
      title: "Professional Growth",
      description: "Pursue ALOA/SAVTA credentials and business ops.",
      estimatedTime: "1–3 years",
      category: "certification",
      priority: "optional",
      learningObjectives: [
        "Earn higher ALOA/SAVTA certs",
        "Develop masterkey system design expertise",
        "Scale mobile or storefront operations"
      ]
    }
  ],
  recommendedResources: [
    {
      category: "certification",
      title: "ALOA Training & PRP",
      provider: "ALOA",
      url: "https://www.aloa.org/",
      cost: "Paid",
      description: "Core locksmith training and certifications.",
      relevantSteps: [6, 10]
    },
    {
      category: "skills",
      title: "Manufacturer Training",
      provider: "Lock/Hardware Makers",
      url: "https://www.dhi.org/",
      cost: "Free/Paid",
      description: "Hardware install and access control courses.",
      relevantSteps: [4, 9]
    }
  ],
  freeResources: [
    { title: "YouTube Locksmith", description: "Search 'rekey a lock', 'impressioning basics', 'door closer adjustment'." },
    { title: "Door/Hardware Guides", description: "Spec sheets and template downloads from manufacturers." },
    { title: "Library", description: "Locksmithing fundamentals and hardware references." },
    { title: "Forums/Communities", description: "Best practices, legality discussions, and tips." }
  ]
};