export const applianceRepairLearningPath = {
  career: "appliance_repair",
  title: "Appliance Repair Technician Learning Path",
  estimatedDuration: "3–6 months to entry-level tech",
  steps: [
    {
      id: 1,
      title: "Foundation Knowledge",
      description: "Electrical basics, schematics, and safety for appliances.",
      estimatedTime: "2–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Read appliance wiring diagrams and tech sheets",
        "Understand motors, relays, sensors, and controls",
        "Follow electrical safety and LOTO practices"
      ]
    },
    {
      id: 2,
      title: "Tool Familiarity",
      description: "Meters, specialty tools, and service documentation.",
      estimatedTime: "1–2 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Use multimeters and clamp meters safely",
        "Handle specialty tools (spanners, spade bits, etc.)",
        "Access/interpret service manuals and error codes"
      ]
    },
    {
      id: 3,
      title: "Code and Regulations",
      description: "EPA 608 Type I (sealed systems) and disposal.",
      estimatedTime: "3–4 weeks",
      category: "fundamentals",
      priority: "essential",
      learningObjectives: [
        "Know refrigerant rules for refrigerators/freezers",
        "Follow environmental disposal requirements",
        "Maintain service records and parts traceability"
      ]
    },
    {
      id: 4,
      title: "Basic Techniques",
      description: "Diagnostic flow and common repair procedures.",
      estimatedTime: "4–6 weeks",
      category: "skills",
      priority: "essential",
      learningObjectives: [
        "Use tech sheets to run test modes",
        "Replace common parts (pumps, elements, boards)",
        "Solder/braze sealed system joints (where trained)"
      ]
    },
    {
      id: 5,
      title: "Blueprint Reading",
      description: "Interpret wiring and exploded views for parts.",
      estimatedTime: "2–3 weeks",
      category: "skills",
      priority: "recommended",
      learningObjectives: [
        "Cross-reference parts lists and diagrams",
        "Follow harness routing and connectors",
        "Translate diagrams into repair steps"
      ]
    },
    {
      id: 6,
      title: "Entry-Level Certification",
      description: "EPA 608 Type I and brand training modules.",
      estimatedTime: "2–4 weeks",
      category: "certification",
      priority: "essential",
      learningObjectives: [
        "Pass EPA 608 Type I where applicable",
        "Complete OEM training (online academies)",
        "Document training with badges/certificates"
      ]
    },
    {
      id: 7,
      title: "Hands-On Practice",
      description: "Bench diagnose and field-simulate common failures.",
      estimatedTime: "4–8 weeks",
      category: "experience",
      priority: "essential",
      learningObjectives: [
        "Practice safe disassembly/reassembly",
        "Verify repairs and clear error codes",
        "Reduce comebacks through QA checks"
      ]
    },
    {
      id: 8,
      title: "Job Search Preparation",
      description: "Apply to service companies or start solo micro-service.",
      estimatedTime: "1–2 weeks",
      category: "experience",
      priority: "recommended",
      learningObjectives: [
        "Assemble portfolio of repaired appliances",
        "Practice customer communication and upsells",
        "Network with parts suppliers and shops"
      ]
    },
    {
      id: 9,
      title: "Advanced Skills Development",
      description: "Sealed system work and smart appliances.",
      estimatedTime: "Ongoing",
      category: "skills",
      priority: "optional",
      learningObjectives: [
        "Perfom sealed system diagnostics and repairs",
        "Update firmware and troubleshoot smart connectivity",
        "Specialize by brand or category"
      ]
    },
    {
      id: 10,
      title: "Professional Growth",
      description: "Certifications and business scaling.",
      estimatedTime: "1–3 years",
      category: "certification",
      priority: "optional",
      learningObjectives: [
        "Pursue NASTeC/PSA certifications",
        "Build recurring contracts with property managers",
        "Scale with dispatch and inventory systems"
      ]
    }
  ],
  recommendedResources: [
    {
      category: "certification",
      title: "EPA Section 608 (Type I)",
      provider: "ESCO Institute",
      url: "https://www.escoinst.com/",
      cost: "Paid",
      description: "Prep and testing for sealed system refrigerant handling.",
      relevantSteps: [3, 6]
    },
    {
      category: "skills",
      title: "OEM Service Academies",
      provider: "Manufacturers",
      url: "https://www.nastf.org/",
      cost: "Free/Paid",
      description: "Official brand modules, bulletins, and wiring diagrams.",
      relevantSteps: [2, 4, 9]
    }
  ],
  freeResources: [
    { title: "YouTube Appliance Repair", description: "Search 'dishwasher not draining', 'washer error codes', 'sealed system basics'." },
    { title: "Library Access", description: "Electronics troubleshooting and small motor repair books." },
    { title: "Parts Vendor Guides", description: "Exploded views and install guides from parts retailers." },
    { title: "Community College", description: "Intro electronics and soldering courses." }
  ]
};
