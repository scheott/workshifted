// File: src/data/skillsBreakdown/hvac_technician.js
export const hvacTechnicianSkillsBreakdown = {
  career: "hvac_technician",
  title: "HVAC Technician Skills Analysis",
  categories: [
    {
      name: "HVAC Systems",
      weight: 8,
      description: "Heating/cooling fundamentals and components",
      subSkills: ["Refrigeration cycle", "Airflow/ducts", "Controls"]
    },
    {
      name: "Technical Aptitude",
      weight: 7,
      description: "Using gauges, meters, and service software",
      subSkills: ["Manifold gauges", "Electrical meters", "Service info"]
    },
    {
      name: "Problem Solving",
      weight: 7,
      description: "Diagnosing no-heat/no-cool and performance issues",
      subSkills: ["Superheat/subcool", "Electrical faults", "Airflow diagnostics"]
    },
    {
      name: "Analytical Thinking",
      weight: 6,
      description: "Interpreting data to choose the right fix",
      subSkills: ["Trend reading", "Cause-effect", "Sequence of ops"]
    },
    {
      name: "Electrical Basics",
      weight: 5,
      description: "Low/high-voltage circuits and safety",
      subSkills: ["Capacitors/relays", "Schematics", "PPE"]
    },
    {
      name: "Mechanical Aptitude",
      weight: 6,
      description: "Motors, blowers, brazing, and mechanical fits",
      subSkills: ["Brazing", "Bearings", "Fan curves"]
    },
    {
      name: "Customer Service",
      weight: 5,
      description: "Communicating findings and options clearly",
      subSkills: ["Plain-language explanations", "Upsell ethics", "Service etiquette"]
    }
  ]
};
