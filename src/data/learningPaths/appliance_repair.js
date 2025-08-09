// File: src/data/learningPaths/appliance_repair.js
export const applianceRepairLearningPath = {
  career: "appliance_repair",
  title: "Appliance Repair Technician Path",
  estimatedDuration: "2–4 months to first solo tickets",
  steps: [
    {
      id: 1,
      title: "Diagnostics & Schematics",
      description: "Learn how to read diagrams and run test sequences.",
      estimatedTime: "2–4 weeks",
      type: "education",
      required: true,
      resources: [
        {
          type: "course",
          title: "Core Appliance Repair",
          provider: "Master Samurai Tech",
          url: "https://mastersamuraitech.com/",
          duration: "Self-paced",
          cost: "Paid",
          description: "Top-rated diagnostics training."
        },
        {
          type: "course",
          title: "Hands-On Bootcamp",
          provider: "Fred’s Appliance Academy",
          url: "https://www.fredsapplianceacademy.com/",
          duration: "1–3 weeks",
          cost: "Paid",
          description: "Intensive hands-on labs."
        }
      ]
    },
    {
      id: 2,
      title: "Safety & Refrigerants (if applicable)",
      description: "Obtain EPA 608 for sealed system work.",
      estimatedTime: "1–2 weeks",
      type: "certification",
      required: false,
      resources: [
        {
          type: "certification",
          title: "EPA 608 Certification",
          provider: "U.S. EPA (approved proctors)",
          url: "https://www.epa.gov/section608/section-608-technician-certification-0",
          duration: "Study + exam",
          cost: "Paid exam",
          description: "Needed when handling refrigerants."
        }
      ]
    },
    {
      id: 3,
      title: "OEM/Brand Training",
      description: "Take manufacturer modules and service bulletins.",
      estimatedTime: "2–6 weeks (ongoing)",
      type: "education",
      required: false,
      resources: [
        {
          type: "reference",
          title: "Brand Service Training (search)",
          provider: "Manufacturers",
          url: "https://www.google.com/search?q=appliance+brand+service+training+Whirlpool+GE+LG+Samsung",
          duration: "—",
          cost: "Varies",
          description: "Gain brand-specific skills and docs access."
        }
      ]
    }
  ]
};
