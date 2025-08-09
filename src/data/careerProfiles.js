// src/data/careerProfiles.js
export const careerProfiles = {
  electrician: {
    title: "Electrician",
    requiredWeights: {
      electrical: 8,
      technical: 7,
      problem_solving: 6,
      hands_on: 6,
      detail: 6,
      safety_conscious: 7,
      analytical: 5
    },
    salary: "$56,000 - $96,000",
    timeline: "6-24 months apprenticeship",
    description: "Install, maintain, and repair electrical systems in homes and buildings",
    certifications: ["Electrical License", "OSHA Safety", "NEC Code Certification"],
    growth_path: "Journeyman → Master Electrician → Electrical Contractor → Business Owner",

    skills_breakdown: [
      { name: "Technical Skills", description: "Circuit theory, wiring methods, tool use, code reading", weight: 0.25 },
      { name: "Problem Solving", description: "Systematic troubleshooting with meters and diagrams", weight: 0.20 },
      { name: "Hands-on Precision", description: "Clean terminations, bends, conduit, panels", weight: 0.20 },
      { name: "Safety & Compliance", description: "Lockout/tagout, PPE, NEC rules", weight: 0.20 },
      { name: "Communication & Documentation", description: "Work orders, change logs, customer updates", weight: 0.15 }
    ],
    daily_tasks: [
      "Install and repair residential/commercial wiring, fixtures, and panels",
      "Read blueprints and apply NEC code to layout circuits",
      "Test circuits and pinpoint faults using multimeters and tracers",
      "Document work, permits, and inspections"
    ],
    learning_steps: [
      { key: "electrical_code", title: "Study NEC fundamentals", category: "Learning" },
      { key: "osha_safety", title: "Complete OSHA 10 (construction/electrical)", category: "Certification" },
      { key: "apprenticeship_apply", title: "Apply to IBEW/IEC apprenticeship", category: "Application" },
      { key: "state_license", title: "Log hours and sit for journeyman license", category: "Licensing" }
    ],
    skill_highlights: ["Electrical Theory", "NEC Knowledge", "Troubleshooting", "Safety Awareness"],
    reality_check: {
      physical_demands: "Standing/kneeling, ladder and attic work, lifting 40–60 lbs",
      work_environment: "Indoor/outdoor, tight spaces, occasional heights",
      typical_day: "70% hands-on installs, 20% troubleshooting, 10% paperwork"
    }
  },

  plumber: {
    title: "Plumber",
    requiredWeights: {
      plumbing: 8,
      hands_on: 7,
      problem_solving: 7,
      spatial: 6,
      physical_stamina: 6,
      customer_service: 5,
      independent: 5
    },
    salary: "$56,000 - $95,000",
    timeline: "4-5 year apprenticeship",
    description: "Install and repair water, drainage, and gas piping systems",
    certifications: ["Plumbing License", "Backflow Prevention", "Gas Fitting Certificate"],
    growth_path: "Apprentice → Journeyman → Master Plumber → Plumbing Contractor",

    skills_breakdown: [
      { name: "Hands-on/Mechanical", description: "Cutting, threading, soldering, joining materials", weight: 0.25 },
      { name: "Problem Solving", description: "Leaks, low pressure, clogs, system diagnostics", weight: 0.25 },
      { name: "Spatial Reasoning", description: "Routing lines in existing structures", weight: 0.15 },
      { name: "Customer Service", description: "In-home professionalism and explanations", weight: 0.15 },
      { name: "Physical Stamina", description: "Crawlspaces, lifting fixtures, long days", weight: 0.10 },
      { name: "Safety & Compliance", description: "Backflow, venting, gas codes", weight: 0.10 }
    ],
    daily_tasks: [
      "Install/repair water, drain, and gas lines and fixtures",
      "Diagnose leaks, clogs, and water heater issues",
      "Solder, crimp, or solvent-weld connections",
      "Explain findings and estimates to homeowners"
    ],
    learning_steps: [
      { key: "code_basics", title: "Learn residential plumbing code & venting", category: "Learning" },
      { key: "backflow_intro", title: "Study backflow prevention basics", category: "Learning" },
      { key: "apprenticeship_join", title: "Join PHCC or union apprenticeship", category: "Application" },
      { key: "journeyman_exam", title: "Complete hours and take journeyman exam", category: "Licensing" }
    ],
    skill_highlights: ["Troubleshooting", "Pipefitting", "Customer Communication", "Code Awareness"],
    reality_check: {
      physical_demands: "Frequent kneeling/crawling, lifting 50+ lbs",
      work_environment: "Crawlspaces, bathrooms, outdoors in all seasons",
      typical_day: "65% hands-on, 20% diagnostics, 15% customer/admin"
    }
  },

  hvac_technician: {
    title: "HVAC Technician",
    requiredWeights: {
      hvac: 8,
      technical: 7,
      problem_solving: 7,
      analytical: 6,
      electrical: 5,
      mechanical: 6,
      customer_service: 5
    },
    salary: "$50,000 - $77,000",
    timeline: "6-18 months training",
    description: "Install, maintain, and repair heating, ventilation, and air conditioning systems",
    certifications: ["EPA 608 Certification", "HVAC Excellence", "NATE Certification"],
    growth_path: "Technician → Senior Tech → Service Manager → HVAC Business Owner",

    skills_breakdown: [
      { name: "Technical Systems", description: "Refrigeration cycle, airflow, controls", weight: 0.25 },
      { name: "Diagnostics", description: "Pressures, superheat/subcool, electrical faults", weight: 0.25 },
      { name: "Electrical/Mechanical", description: "Low/high voltage, motors, brazing", weight: 0.20 },
      { name: "Customer Service", description: "Explaining issues and options", weight: 0.15 },
      { name: "Safety & EPA", description: "Refrigerant handling and regulations", weight: 0.15 }
    ],
    daily_tasks: [
      "Install and service furnaces, A/C, and heat pumps",
      "Check refrigerant pressures and electrical components",
      "Perform seasonal maintenance and airflow balancing",
      "Quote repairs and explain system health"
    ],
    learning_steps: [
      { key: "hvac_fundamentals", title: "Study HVAC fundamentals (temps/pressures)", category: "Learning" },
      { key: "epa_608", title: "Pass EPA 608 certification", category: "Certification" },
      { key: "o_j_t", title: "Shadow senior techs for field diagnostics", category: "On-the-Job" },
      { key: "nate_prep", title: "Prepare for NATE/Excellence certifications", category: "Certification" }
    ],
    skill_highlights: ["Diagnostics", "Electrical Basics", "Customer Communication", "Refrigerant Handling"],
    reality_check: {
      physical_demands: "Attics/roofs, lifting condensers, carrying tools",
      work_environment: "Hot/cold spaces, outdoors, cramped mechanical rooms",
      typical_day: "60% service/repair, 25% installs, 15% paperwork/sales"
    }
  },

  construction_pm: {
    title: "Construction Project Manager",
    requiredWeights: {
      leadership: 8,
      communication: 7,
      organizational: 7,
      analytical: 6,
      detail: 6,
      planning: 7,
      problem_solving: 6
    },
    salary: "$70,000 - $120,000",
    timeline: "3-12 months transition",
    description: "Coordinate construction projects, manage budgets, schedules, and teams",
    certifications: ["PMP Certification", "OSHA 30", "Construction Management Certificate"],
    growth_path: "Assistant PM → Project Manager → Senior PM → Construction Executive",

    skills_breakdown: [
      { name: "Leadership & Coordination", description: "Subcontractor oversight, team alignment", weight: 0.25 },
      { name: "Planning & Scheduling", description: "Critical path, sequencing, look-ahead plans", weight: 0.25 },
      { name: "Communication/Stakeholders", description: "Owners, architects, inspectors", weight: 0.20 },
      { name: "Cost & Risk", description: "Budgets, change orders, safety risk", weight: 0.20 },
      { name: "Documentation", description: "RFIs, submittals, meeting minutes", weight: 0.10 }
    ],
    daily_tasks: [
      "Run coordination meetings; track schedule and budget",
      "Review RFIs/submittals and site safety",
      "Approve invoices and change orders",
      "Walk the jobsite and resolve blockers"
    ],
    learning_steps: [
      { key: "pm_basics", title: "Learn construction PM workflows (Procore, docs)", category: "Learning" },
      { key: "osha_30", title: "Complete OSHA 30 Construction", category: "Certification" },
      { key: "field_experience", title: "Gain assistant PM/superintendent experience", category: "On-the-Job" },
      { key: "pmp_prep", title: "Prepare for PMP/CM certificate", category: "Certification" }
    ],
    skill_highlights: ["Scheduling", "Leadership", "Budgeting", "Risk Management"],
    reality_check: {
      physical_demands: "Frequent walking on sites; occasional ladder climbs",
      work_environment: "Office + active jobsite, weather exposure at times",
      typical_day: "40% coordination, 35% site walks, 25% admin/budget"
    }
  },

  solar_installer: {
    title: "Solar Panel Installer",
    requiredWeights: {
      electrical: 6,
      outdoor_work: 7,
      physical_stamina: 7,
      modern_tech: 7,
      environmental: 6,
      hands_on: 6,
      safety_conscious: 6
    },
    salary: "$48,000 - $85,000",
    timeline: "3-6 months training",
    description: "Install and maintain solar photovoltaic systems on rooftops and ground mounts",
    certifications: ["NABCEP PV Installation", "OSHA 10", "Electrical Safety"],
    growth_path: "Installer → Lead Installer → Site Supervisor → Solar Business Owner",

    skills_breakdown: [
      { name: "Working at Heights", description: "Roof safety, harness use, ladder work", weight: 0.25 },
      { name: "Electrical/Technical", description: "DC wiring, inverters, racking", weight: 0.20 },
      { name: "Safety & Compliance", description: "Fall protection, lockout, fire code", weight: 0.20 },
      { name: "Modern Tech", description: "Monitoring apps, design tools", weight: 0.15 },
      { name: "Teamwork & Communication", description: "Crew coordination and client updates", weight: 0.10 },
      { name: "Physical Stamina", description: "Lifting panels, long days in sun/cold", weight: 0.10 }
    ],
    daily_tasks: [
      "Install racking, panels, wire runs, and inverters",
      "Seal roof penetrations and ensure weatherproofing",
      "Test system performance and monitoring",
      "Follow fall-protection and site safety procedures"
    ],
    learning_steps: [
      { key: "pv_basics", title: "Complete PV fundamentals course", category: "Learning" },
      { key: "fall_protection", title: "Get fall-protection and ladder safety training", category: "Certification" },
      { key: "pv_assoc", title: "Earn NABCEP PV Associate (optional but valued)", category: "Certification" },
      { key: "crew_experience", title: "Build experience on residential crews", category: "On-the-Job" }
    ],
    skill_highlights: ["Roof Safety", "DC/AC Wiring", "Crewwork", "Commissioning"],
    reality_check: {
      physical_demands: "Carrying 40–60 lb panels, rooftop work, kneeling",
      work_environment: "Outdoors at heights; heat/cold exposure",
      typical_day: "75% installs, 15% testing/commissioning, 10% paperwork"
    }
  },

  carpenter: {
    title: "Carpenter",
    requiredWeights: {
      hands_on: 8,
      spatial: 7,
      creative: 6,
      detail: 6,
      physical_stamina: 6,
      construction: 7,
      precision: 6
    },
    salary: "$49,000 - $87,000",
    timeline: "3-4 year apprenticeship",
    description: "Build, install, and repair structures and fixtures made from wood and other materials",
    certifications: ["Carpentry Apprenticeship", "OSHA 10", "Blueprint Reading"],
    growth_path: "Apprentice → Journeyman → Master Carpenter → General Contractor",

    skills_breakdown: [
      { name: "Hands-on Precision", description: "Framing, finish work, fasteners, tools", weight: 0.30 },
      { name: "Spatial/Blueprints", description: "Takeoffs, measurements, layout", weight: 0.20 },
      { name: "Problem Solving", description: "Fit issues, material constraints", weight: 0.20 },
      { name: "Safety", description: "Saw safety, PPE, ladder use", weight: 0.15 },
      { name: "Communication", description: "Coordination with GC and trades", weight: 0.15 }
    ],
    daily_tasks: [
      "Frame walls, roofs, and install doors/trim/cabinetry",
      "Read plans and mark layouts accurately",
      "Operate saws, nailers, squares, and levels safely",
      "Maintain a clean, safe work area"
    ],
    learning_steps: [
      { key: "tools_basics", title: "Master measuring and core tools", category: "Learning" },
      { key: "osha_10", title: "Complete OSHA 10 Construction", category: "Certification" },
      { key: "apprenticeship_path", title: "Enter union/community college apprenticeship", category: "Application" },
      { key: "portfolio_build", title: "Build portfolio: framing + finish projects", category: "On-the-Job" }
    ],
    skill_highlights: ["Precision", "Blueprint Reading", "Tool Mastery", "Safety"],
    reality_check: {
      physical_demands: "Lifting lumber/sheets, kneeling, repetitive motion",
      work_environment: "Active jobsites; dust, noise, weather exposure",
      typical_day: "75% hands-on, 15% layout, 10% cleanup/admin"
    }
  },

  welder: {
    title: "Welder",
    requiredWeights: {
      hands_on: 8,
      precision: 8,
      technical: 6,
      physical_stamina: 6,
      detail: 7,
      safety_conscious: 7,
      independent: 6
    },
    salary: "$45,000 - $88,000",
    timeline: "6-18 months training",
    description: "Join metal parts using various welding techniques for construction and manufacturing",
    certifications: ["AWS Certified Welder", "OSHA 10", "Welding Inspection"],
    growth_path: "Welder → Certified Welder → Welding Inspector → Welding Supervisor",

    skills_breakdown: [
      { name: "Precision & Technique", description: "MIG/TIG/Stick, bead quality, fit-up", weight: 0.30 },
      { name: "Safety & Procedures", description: "Fire watch, ventilation, PPE", weight: 0.25 },
      { name: "Manual Dexterity", description: "Steady hands, fine motor control", weight: 0.20 },
      { name: "Technical Knowledge", description: "Metallurgy, WPS, symbols", weight: 0.15 },
      { name: "Independence/Focus", description: "Consistent quality over long runs", weight: 0.10 }
    ],
    daily_tasks: [
      "Prepare joints, set parameters, and weld to spec",
      "Grind, cut, and finish welds; inspect for defects",
      "Read blueprints and welding symbols",
      "Maintain equipment and follow WPS/PQRs"
    ],
    learning_steps: [
      { key: "process_basics", title: "Learn MIG/TIG/Stick fundamentals", category: "Learning" },
      { key: "osha_hotwork", title: "Hot-work safety training", category: "Certification" },
      { key: "aws_cert", title: "Test for AWS D1.1 or process-specific certs", category: "Certification" },
      { key: "specialize", title: "Specialize (pipe, structural, stainless)", category: "On-the-Job" }
    ],
    skill_highlights: ["Bead Quality", "Safety", "Blueprint Symbols", "Process Knowledge"],
    reality_check: {
      physical_demands: "Lifting steel, awkward positions, heat exposure",
      work_environment: "Shops, fabrication yards, field sites",
      typical_day: "80% welding/fitting, 10% prep, 10% inspection"
    }
  },

  auto_mechanic: {
    title: "Automotive Technician",
    requiredWeights: {
      mechanical: 8,
      problem_solving: 7,
      technical: 7,
      hands_on: 7,
      detail: 6,
      modern_tech: 6,
      analytical: 6
    },
    salary: "$46,000 - $75,000",
    timeline: "6-24 months training",
    description: "Diagnose, repair, and maintain vehicles using modern diagnostic equipment",
    certifications: ["ASE Certification", "EPA 609", "State Inspection License"],
    growth_path: "Technician → Master Technician → Shop Foreman → Shop Owner",

    skills_breakdown: [
      { name: "Diagnostics", description: "Scan tools, scope, flowcharts", weight: 0.30 },
      { name: "Mechanical Systems", description: "Engines, brakes, suspension, HVAC", weight: 0.25 },
      { name: "Technical Tools", description: "Service info, torques, special tools", weight: 0.20 },
      { name: "Customer Communication", description: "Explaining estimates and fixes", weight: 0.15 },
      { name: "Safety & Procedures", description: "Lift use, hazardous materials", weight: 0.10 }
    ],
    daily_tasks: [
      "Diagnose warning lights and drivability issues",
      "Perform maintenance, brakes, and component replacements",
      "Use OEM service info and TSBs",
      "Document findings with photos and notes"
    ],
    learning_steps: [
      { key: "service_info", title: "Learn to navigate OEM service info", category: "Learning" },
      { key: "ase_prep", title: "Prepare for ASE A1-A8 exams", category: "Certification" },
      { key: "epa_609", title: "Obtain EPA 609 (MVAC) for A/C work", category: "Certification" },
      { key: "brand_specialty", title: "Specialize in a brand or EV systems", category: "On-the-Job" }
    ],
    skill_highlights: ["Diagnostics", "Mechanical Aptitude", "Customer Skills", "Service Procedures"],
    reality_check: {
      physical_demands: "Lifting wheels/parts, standing most of the day",
      work_environment: "Shop bays with noise and fluids; some road tests",
      typical_day: "55% repairs, 30% diagnostics, 15% paperwork/parts"
    }
  },

  home_inspector: {
    title: "Home Inspector",
    requiredWeights: {
      detail: 8,
      analytical: 7,
      communication: 7,
      organizational: 6,
      customer_service: 6,
      independent: 7,
      technical: 5
    },
    salary: "$52,000 - $95,000",
    timeline: "3-6 months training",
    description: "Evaluate residential properties for safety, structural integrity, and code compliance",
    certifications: ["Home Inspector License", "InterNACHI Certification", "Radon Testing"],
    growth_path: "Inspector → Senior Inspector → Lead Inspector → Inspection Business Owner",

    skills_breakdown: [
      { name: "Detail & Observation", description: "Identify defects across systems", weight: 0.30 },
      { name: "Analytical/Reporting", description: "Clear, photo-rich reports", weight: 0.25 },
      { name: "Client Communication", description: "Educate buyers on risks and maintenance", weight: 0.20 },
      { name: "Building Systems", description: "Roof, structure, electrical, plumbing, HVAC", weight: 0.15 },
      { name: "Independence/Time Mgmt", description: "Scheduling, travel, solo work", weight: 0.10 }
    ],
    daily_tasks: [
      "Inspect exterior, roof, structure, electrical, plumbing, HVAC",
      "Test fixtures, outlets, appliances, and safety devices",
      "Photograph issues and write narrative reports",
      "Walk clients through findings"
    ],
    learning_steps: [
      { key: "standards_practice", title: "Study SOP/ethics (InterNACHI/ASHI)", category: "Learning" },
      { key: "state_requirements", title: "Complete state pre-licensing hours", category: "Licensing" },
      { key: "field_ridealongs", title: "Do ride-alongs with experienced inspectors", category: "On-the-Job" },
      { key: "ancillary_addons", title: "Add radon/termite/mold certifications", category: "Certification" }
    ],
    skill_highlights: ["Observation", "Report Writing", "Client Education", "Systems Knowledge"],
    reality_check: {
      physical_demands: "Ladders, roofs (when safe), attics/crawlspaces",
      work_environment: "Homes under varying conditions; solo travel",
      typical_day: "60% on-site inspection, 30% reporting, 10% client calls"
    }
  },

  landscaper: {
    title: "Landscaping Professional",
    requiredWeights: {
      outdoor_work: 8,
      creative: 7,
      physical_stamina: 7,
      hands_on: 7,
      spatial: 6,
      entrepreneurial: 5,
      seasonal: 6
    },
    salary: "$35,000 - $75,000",
    timeline: "3-6 months training",
    description: "Design, install, and maintain outdoor spaces including gardens and hardscapes",
    certifications: ["Landscape Industry Certification", "Pesticide License", "Irrigation Tech"],
    growth_path: "Crew Member → Crew Leader → Account Manager → Landscape Business Owner",

    skills_breakdown: [
      { name: "Outdoor/Physical Work", description: "Lifting, digging, equipment operation", weight: 0.30 },
      { name: "Creative/Design", description: "Plant selection, hardscape layout", weight: 0.20 },
      { name: "Hands-on/Equipment", description: "Mowers, trimmers, skid steers", weight: 0.20 },
      { name: "Customer Service", description: "On-site professionalism and upsells", weight: 0.15 },
      { name: "Seasonal Resilience", description: "Weather extremes and seasonality", weight: 0.15 }
    ],
    daily_tasks: [
      "Install plants, sod, mulch, and simple hardscapes",
      "Operate equipment and maintain tools",
      "Irrigation checks and basic repairs",
      "Discuss maintenance plans with clients"
    ],
    learning_steps: [
      { key: "hort_basics", title: "Study basic horticulture and soils", category: "Learning" },
      { key: "equipment_safety", title: "Complete small-equipment safety training", category: "Certification" },
      { key: "irrigation_intro", title: "Learn irrigation layout and controllers", category: "Learning" },
      { key: "cert_track", title: "Pursue NALP or Irrigation Association certs", category: "Certification" }
    ],
    skill_highlights: ["Equipment Operation", "Horticulture Basics", "Customer Service", "Irrigation"],
    reality_check: {
      physical_demands: "Heavy lifting, repetitive motions, long days",
      work_environment: "Outdoors in heat/cold; pollen/dust exposure",
      typical_day: "80% field work, 10% transport, 10% client/admin"
    }
  },

  appliance_repair: {
    title: "Appliance Repair Technician",
    requiredWeights: {
      problem_solving: 8,
      technical: 7,
      customer_service: 7,
      independent: 7,
      electrical: 5,
      mechanical: 6,
      detail: 6
    },
    salary: "$41,000 - $68,000",
    timeline: "3-6 months training",
    description: "Diagnose and repair household appliances in customers' homes",
    certifications: ["NASTeC Certification", "EPA 608", "Manufacturer Certifications"],
    growth_path: "Technician → Senior Tech → Service Manager → Repair Business Owner",

    skills_breakdown: [
      { name: "Diagnostics", description: "Schematics, error codes, testing sequences", weight: 0.30 },
      { name: "Electro-Mechanical", description: "Motors, pumps, boards, valves", weight: 0.25 },
      { name: "Customer Service", description: "In-home communication and professionalism", weight: 0.20 },
      { name: "Independent Work", description: "Route planning, inventory, invoicing", weight: 0.15 },
      { name: "Safety", description: "Electrical safety and sealed-system handling", weight: 0.10 }
    ],
    daily_tasks: [
      "Diagnose and repair washers, dryers, ranges, fridges",
      "Order and install parts; test operation",
      "Read wiring diagrams and service bulletins",
      "Provide quotes and maintenance tips"
    ],
    learning_steps: [
      { key: "schematic_lit", title: "Learn to read appliance schematics", category: "Learning" },
      { key: "608_if_needed", title: "Get EPA 608 for sealed systems (refrigeration)", category: "Certification" },
      { key: "brand_training", title: "Take OEM brand training modules", category: "Learning" },
      { key: "route_ops", title: "Set up tools, parts, and route workflows", category: "On-the-Job" }
    ],
    skill_highlights: ["Diagnostics", "Electrical Safety", "Customer Care", "Parts Management"],
    reality_check: {
      physical_demands: "Moving appliances, kneeling, confined spaces",
      work_environment: "In-home service; variable conditions",
      typical_day: "65% repairs, 20% driving, 15% parts/admin"
    }
  },

  elevator_technician: {
    title: "Elevator Technician",
    requiredWeights: {
      technical: 8,
      electrical: 7,
      mechanical: 7,
      problem_solving: 7,
      safety_conscious: 8,
      detail: 7,
      physical_stamina: 6
    },
    salary: "$88,000 - $130,000",
    timeline: "4-year apprenticeship",
    description: "Install, maintain, and repair elevators, escalators, and moving walkways",
    certifications: ["NAEC Certification", "State License", "QEI Certification"],
    growth_path: "Apprentice → Mechanic → Adjuster → Supervisor → Consultant",

    skills_breakdown: [
      { name: "Safety & Compliance", description: "Lockout, hoistway safety, fall protection", weight: 0.30 },
      { name: "Electrical/Mechanical", description: "Drives, controllers, hydraulics", weight: 0.30 },
      { name: "Problem Solving", description: "Fault isolation, adjustments, tuning", weight: 0.20 },
      { name: "Physical Stamina", description: "Climbing ladders, machine rooms", weight: 0.10 },
      { name: "Teamwork/Communication", description: "Crew coordination and logs", weight: 0.10 }
    ],
    daily_tasks: [
      "Install, adjust, and maintain elevators/escalators",
      "Troubleshoot control systems and safety circuits",
      "Perform preventive maintenance and inspections",
      "Document code compliance and repairs"
    ],
    learning_steps: [
      { key: "neiep_entry", title: "Apply to NEIEP/IUEC apprenticeship", category: "Application" },
      { key: "electro_mech", title: "Study elevator electrical/mechanical systems", category: "Learning" },
      { key: "cet_track", title: "Complete NAEC CET modules", category: "Certification" },
      { key: "qei_future", title: "Pursue QEI inspector credential later", category: "Certification" }
    ],
    skill_highlights: ["Safety", "Controls", "Mechanical Systems", "Precision Adjustment"],
    reality_check: {
      physical_demands: "Confined spaces, heights, lifting components",
      work_environment: "Shafts, machine rooms, commercial buildings",
      typical_day: "60% maintenance/repair, 25% installs, 15% paperwork"
    }
  },

  locksmith: {
    title: "Locksmith",
    requiredWeights: {
      detail: 8,
      precision: 8,
      problem_solving: 7,
      customer_service: 6,
      independent: 7,
      technical: 6,
      trust_building: 7
    },
    salary: "$40,000 - $75,000",
    timeline: "3-12 months training",
    description: "Install, repair, and modify locks and security systems",
    certifications: ["Locksmith License", "ALOA Certification", "Safe Technician"],
    growth_path: "Apprentice → Locksmith → Master Locksmith → Security Business Owner",

    skills_breakdown: [
      { name: "Precision & Detail", description: "Pinning, impressioning, fitment", weight: 0.30 },
      { name: "Problem Solving", description: "Bypass methods, decoding, restricted keys", weight: 0.25 },
      { name: "Customer Trust/Service", description: "Security guidance and professionalism", weight: 0.20 },
      { name: "Technical/Access Control", description: "Electronic locks and systems", weight: 0.15 },
      { name: "Independence", description: "Mobile service, small-biz operations", weight: 0.10 }
    ],
    daily_tasks: [
      "Rekey, repair, and install locks, cylinders, and hardware",
      "Open locked doors legally and safely",
      "Cut keys and program transponders (auto)",
      "Quote security upgrades and access control"
    ],
    learning_steps: [
      { key: "lock_basics", title: "Master pinning, keying, and hardware types", category: "Learning" },
      { key: "aloa_courses", title: "Complete ALOA training modules", category: "Learning" },
      { key: "legal_ethics", title: "Understand ID/authorization and compliance", category: "Learning" },
      { key: "biz_setup", title: "Set up mobile shop tools and inventory", category: "On-the-Job" }
    ],
    skill_highlights: ["Precision", "Ethics/Trust", "Mechanical Aptitude", "Customer Service"],
    reality_check: {
      physical_demands: "Fine motor work; occasional awkward positions",
      work_environment: "Mobile, residential/commercial; some after-hours",
      typical_day: "60% service calls, 25% shop work, 15% admin/sales"
    }
  },

  pest_control: {
    title: "Pest Control Technician",
    requiredWeights: {
      problem_solving: 7,
      customer_service: 7,
      detail: 6,
      safety_conscious: 7,
      independent: 6,
      resilience: 7,
      analytical: 5
    },
    salary: "$38,000 - $65,000",
    timeline: "2-3 months training",
    description: "Inspect properties and apply treatments to control pests",
    certifications: ["State License", "EPA Certification", "IPM Certification"],
    growth_path: "Technician → Senior Tech → Route Manager → Branch Manager",

    skills_breakdown: [
      { name: "Problem Solving", description: "Identify sources and plan treatments", weight: 0.25 },
      { name: "Safety & Compliance", description: "Pesticide labels, PPE, regulations", weight: 0.20 },
      { name: "Customer Service", description: "Set expectations and educate clients", weight: 0.20 },
      { name: "Resilience", description: "Weather, odors, pests, tight spaces", weight: 0.15 },
      { name: "Detail & Documentation", description: "Photos, notes, application logs", weight: 0.10 },
      { name: "Analytical/ID", description: "Species identification and behavior", weight: 0.10 }
    ],
    daily_tasks: [
      "Inspect structures and identify pest activity",
      "Apply treatments per label and safety protocols",
      "Seal entry points and advise on prevention",
      "Log applications and follow up with clients"
    ],
    learning_steps: [
      { key: "label_literacy", title: "Study product labels and IPM strategies", category: "Learning" },
      { key: "state_license_pest", title: "Obtain state applicator license", category: "Licensing" },
      { key: "ipc_methods", title: "Practice integrated pest management (IPM)", category: "On-the-Job" },
      { key: "add_on_services", title: "Add termite/bed bug/specialty endorsements", category: "Certification" }
    ],
    skill_highlights: ["Safety", "Species ID", "Customer Care", "Field Problem Solving"],
    reality_check: {
      physical_demands: "Walking, carrying sprayers, attic/crawlspace work",
      work_environment: "Heat/cold, odors, confined areas, protective gear",
      typical_day: "65% treatments/inspections, 20% travel, 15% admin"
    }
  },

  telecom_installer: {
    title: "Telecommunications Installer",
    requiredWeights: {
      technical: 7,
      modern_tech: 8,
      problem_solving: 6,
      customer_service: 6,
      physical_stamina: 6,
      detail: 6,
      outdoor_work: 5
    },
    salary: "$42,000 - $78,000",
    timeline: "3-12 months training",
    description: "Install and maintain internet, cable, and phone systems",
    certifications: ["FOA Certification", "BICSI Installer", "Tower Climbing Cert"],
    growth_path: "Installer → Lead Installer → Site Supervisor → Telecom Project Manager",

    skills_breakdown: [
      { name: "Modern Tech/Networking", description: "Fiber/copper standards, hardware", weight: 0.25 },
      { name: "Hands-on/Cabling", description: "Pulls, terminations, dress and labeling", weight: 0.25 },
      { name: "Problem Solving", description: "Fault isolation and continuity", weight: 0.20 },
      { name: "Safety (Fall/RF)", description: "Ladders, lifts, towers, RF awareness", weight: 0.15 },
      { name: "Customer Service", description: "Site etiquette and handover", weight: 0.10 },
      { name: "Detail/Testing", description: "Certify links with test sets", weight: 0.05 }
    ],
    daily_tasks: [
      "Install fiber/copper cabling, trays, and terminations",
      "Label, test, and certify links (OTDR/certifier)",
      "Mount racks, patch panels, and equipment",
      "Follow site safety and documentation standards"
    ],
    learning_steps: [
      { key: "cabling_standards", title: "Study TIA/EIA & fiber basics", category: "Learning" },
      { key: "cfot_cert", title: "Earn FOA CFOT (fiber) or BICSI Installer", category: "Certification" },
      { key: "lift_fall_safety", title: "Complete lift/fall protection; tower if applicable", category: "Certification" },
      { key: "field_hours", title: "Accumulate field hours; specialize (FTTH/5G/enterprise)", category: "On-the-Job" }
    ],
    skill_highlights: ["Fiber/Copper Cabling", "Testing/Certification", "Safety", "Documentation"],
    reality_check: {
      physical_demands: "Pulling cable, ladders/lifts, occasional tower work",
      work_environment: "Construction sites, offices, outdoors, MDF/IDF rooms",
      typical_day: "70% installs, 20% testing/labeling, 10% paperwork"
    }
  }
};
