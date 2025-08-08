export const assessmentQuestions = [
  // Section 1: Current Skills & Experience
  {
    id: 1,
    question: "What best describes your current work environment?",
    category: "work_environment",
    type: "single-choice",
    options: [
      { 
        value: "office_analytical", 
        label: "Office-based, lots of data analysis and spreadsheets", 
        weight: { analytical: 3, technical: 2, detail: 2 } 
      },
      { 
        value: "office_creative", 
        label: "Office-based, creative projects and design work", 
        weight: { creative: 3, detail: 2, spatial: 2 } 
      },
      { 
        value: "office_management", 
        label: "Office-based, managing people and projects", 
        weight: { leadership: 3, communication: 2, organizational: 2 } 
      },
      { 
        value: "customer_service", 
        label: "Customer-facing, solving problems and helping people", 
        weight: { communication: 3, problem_solving: 2, patience: 2 } 
      },
      { 
        value: "remote_tech", 
        label: "Remote work, mostly technical/software tasks", 
        weight: { technical: 3, independent: 3, analytical: 1 } 
      }
    ]
  },
  
  {
    id: 2,
    question: "Which of these best describes your problem-solving approach?",
    category: "problem_solving",
    type: "single-choice",
    options: [
      { 
        value: "systematic", 
        label: "I follow a systematic process, checking each step methodically", 
        weight: { detail: 3, analytical: 3, safety_conscious: 2 } 
      },
      { 
        value: "intuitive", 
        label: "I rely on intuition and experience to find quick solutions", 
        weight: { hands_on: 3, problem_solving: 3, adaptability: 2 } 
      },
      { 
        value: "collaborative", 
        label: "I gather input from others and build consensus", 
        weight: { communication: 3, leadership: 2, teamwork: 3 } 
      },
      { 
        value: "research", 
        label: "I research thoroughly and analyze all options before deciding", 
        weight: { analytical: 3, technical: 2, patience: 2 } 
      },
      { 
        value: "experimental", 
        label: "I try different approaches until I find what works", 
        weight: { creative: 2, hands_on: 3, adaptability: 3 } 
      }
    ]
  },

  {
    id: 3,
    question: "How comfortable are you with physical work?",
    category: "physical_comfort",
    type: "single-choice",
    options: [
      { 
        value: "very_comfortable", 
        label: "Very comfortable - I exercise regularly and enjoy physical activity", 
        weight: { physical_stamina: 3, hands_on: 2, outdoor_work: 2 } 
      },
      { 
        value: "comfortable", 
        label: "Comfortable - I can handle moderate physical activity throughout the day", 
        weight: { physical_stamina: 2, hands_on: 2, adaptability: 1 } 
      },
      { 
        value: "willing_to_adapt", 
        label: "Willing to build up - I'm ready to improve my physical fitness", 
        weight: { adaptability: 3, determination: 2, physical_stamina: 1 } 
      },
      { 
        value: "prefer_light", 
        label: "Prefer lighter work - I'm better suited for precision than heavy lifting", 
        weight: { detail: 3, technical: 2, precision: 3 } 
      },
      { 
        value: "concerned", 
        label: "Concerned about physical demands - I have some limitations to consider", 
        weight: { technical: 2, analytical: 2, safety_conscious: 3 } 
      }
    ]
  },

  // Section 2: Work Preferences & Style
  {
    id: 4,
    question: "What type of work schedule appeals to you most?",
    category: "schedule_preference",
    type: "single-choice",
    options: [
      { 
        value: "standard_hours", 
        label: "Standard business hours (9-5, Monday-Friday)", 
        weight: { work_life_balance: 3, organizational: 2 } 
      },
      { 
        value: "flexible_hours", 
        label: "Flexible hours - I like controlling when I work", 
        weight: { independent: 3, entrepreneurial: 2, adaptability: 2 } 
      },
      { 
        value: "project_based", 
        label: "Project-based - Intense work periods followed by time off", 
        weight: { determination: 2, independent: 2, hands_on: 2 } 
      },
      { 
        value: "on_call", 
        label: "On-call availability - Emergency response excites me", 
        weight: { problem_solving: 3, adaptability: 3, customer_service: 2 } 
      },
      { 
        value: "seasonal", 
        label: "Seasonal variation - Different busy periods throughout the year", 
        weight: { adaptability: 3, outdoor_work: 2, physical_stamina: 1 } 
      }
    ]
  },

  {
    id: 5,
    question: "How do you prefer to learn new skills?",
    category: "learning_style",
    type: "single-choice",
    options: [
      { 
        value: "hands_on_practice", 
        label: "Hands-on practice - Show me once, then let me try", 
        weight: { hands_on: 3, kinesthetic_learning: 3, independent: 1 } 
      },
      { 
        value: "structured_courses", 
        label: "Structured courses with clear milestones and certifications", 
        weight: { detail: 2, organizational: 2, academic: 3 } 
      },
      { 
        value: "mentorship", 
        label: "Apprenticeship-style learning with an experienced mentor", 
        weight: { communication: 2, patience: 2, traditional_learning: 3 } 
      },
      { 
        value: "self_directed", 
        label: "Self-directed through videos, manuals, and online resources", 
        weight: { independent: 3, technical: 2, analytical: 2 } 
      },
      { 
        value: "peer_learning", 
        label: "Learning alongside peers in a group setting", 
        weight: { teamwork: 3, communication: 2, social: 2 } 
      }
    ]
  },

  {
    id: 6,
    question: "What motivates you most in your work?",
    category: "motivation",
    type: "single-choice",
    options: [
      { 
        value: "tangible_results", 
        label: "Seeing tangible results - buildings, repairs, installations I've completed", 
        weight: { hands_on: 3, creative: 2, achievement: 3 } 
      },
      { 
        value: "problem_solving", 
        label: "Solving unique challenges that require creative thinking", 
        weight: { problem_solving: 3, analytical: 2, creative: 2 } 
      },
      { 
        value: "helping_people", 
        label: "Helping people directly and seeing their appreciation", 
        weight: { customer_service: 3, communication: 2, empathy: 3 } 
      },
      { 
        value: "financial_growth", 
        label: "Building financial security and growing my earning potential", 
        weight: { entrepreneurial: 3, determination: 2, business_minded: 3 } 
      },
      { 
        value: "skill_mastery", 
        label: "Becoming a recognized expert in my field", 
        weight: { technical: 3, detail: 2, achievement: 2 } 
      }
    ]
  },

  // Section 3: Technical Aptitude & Interests
  {
    id: 7,
    question: "How comfortable are you with tools and equipment?",
    category: "tool_comfort",
    type: "single-choice",
    options: [
      { 
        value: "very_experienced", 
        label: "Very comfortable - I regularly use tools for hobbies or home projects", 
        weight: { hands_on: 3, mechanical: 3, technical: 2 } 
      },
      { 
        value: "some_experience", 
        label: "Some experience - I've done basic repairs and DIY projects", 
        weight: { hands_on: 2, mechanical: 2, adaptability: 2 } 
      },
      { 
        value: "willing_learner", 
        label: "Limited experience but eager to learn proper techniques", 
        weight: { adaptability: 3, determination: 2, safety_conscious: 2 } 
      },
      { 
        value: "prefer_precision", 
        label: "I prefer precision instruments over heavy machinery", 
        weight: { detail: 3, precision: 3, technical: 2 } 
      },
      { 
        value: "technology_focused", 
        label: "More comfortable with digital tools and diagnostic equipment", 
        weight: { technical: 3, analytical: 3, modern_tech: 3 } 
      }
    ]
  },

  {
    id: 8,
    question: "Which type of problem interests you most?",
    category: "problem_type",
    type: "single-choice",
    options: [
      { 
        value: "electrical_systems", 
        label: "Figuring out why something isn't getting power or working electrically", 
        weight: { electrical: 3, problem_solving: 2, technical: 3 } 
      },
      { 
        value: "mechanical_issues", 
        label: "Diagnosing mechanical problems - things that move, rotate, or pump", 
        weight: { mechanical: 3, hands_on: 2, problem_solving: 2 } 
      },
      { 
        value: "structural_challenges", 
        label: "Understanding how things fit together and bear weight", 
        weight: { spatial: 3, analytical: 2, construction: 3 } 
      },
      { 
        value: "system_optimization", 
        label: "Making systems run more efficiently - airflow, water flow, energy use", 
        weight: { analytical: 3, environmental: 2, technical: 2 } 
      },
      { 
        value: "design_planning", 
        label: "Planning layouts and designing solutions before building", 
        weight: { creative: 3, spatial: 3, organizational: 2 } 
      }
    ]
  },

  {
    id: 9,
    question: "How do you feel about working in different environments?",
    category: "environment_adaptability",
    type: "single-choice",
    options: [
      { 
        value: "love_variety", 
        label: "Love it - Different locations keep the work interesting", 
        weight: { adaptability: 3, outdoor_work: 2, independent: 2 } 
      },
      { 
        value: "outdoor_preference", 
        label: "Prefer outdoor work - I enjoy being outside in various weather", 
        weight: { outdoor_work: 3, physical_stamina: 2, resilience: 2 } 
      },
      { 
        value: "indoor_preference", 
        label: "Prefer indoor work - Climate-controlled environments suit me best", 
        weight: { detail: 2, technical: 2, precision: 2 } 
      },
      { 
        value: "residential_comfort", 
        label: "Comfortable in homes - I like the personal interaction with homeowners", 
        weight: { customer_service: 3, communication: 2, trust_building: 3 } 
      },
      { 
        value: "commercial_industrial", 
        label: "Prefer commercial/industrial - Larger scale projects appeal to me", 
        weight: { technical: 2, teamwork: 2, commercial: 3 } 
      }
    ]
  },

  // Section 4: Business & Career Growth
  {
    id: 10,
    question: "What are your thoughts on eventually running your own business?",
    category: "entrepreneurial",
    type: "single-choice",
    options: [
      { 
        value: "definitely_yes", 
        label: "Definitely - Being my own boss is a major goal", 
        weight: { entrepreneurial: 3, business_minded: 3, leadership: 2 } 
      },
      { 
        value: "maybe_future", 
        label: "Maybe in the future after gaining experience", 
        weight: { entrepreneurial: 2, determination: 2, planning: 2 } 
      },
      { 
        value: "partnership", 
        label: "Interested in partnership or small crew leadership", 
        weight: { leadership: 2, teamwork: 3, business_minded: 1 } 
      },
      { 
        value: "prefer_employee", 
        label: "Prefer being an employee with good benefits and stability", 
        weight: { stability: 3, teamwork: 2, work_life_balance: 2 } 
      },
      { 
        value: "specialized_expert", 
        label: "Want to be a specialized expert contractors call for complex jobs", 
        weight: { technical: 3, achievement: 2, independent: 2 } 
      }
    ]
  },

  {
    id: 11,
    question: "How important is work-life balance to you?",
    category: "work_life_balance",
    type: "single-choice",
    options: [
      { 
        value: "top_priority", 
        label: "Top priority - I want predictable hours and weekends off", 
        weight: { work_life_balance: 3, stability: 2, organizational: 2 } 
      },
      { 
        value: "important", 
        label: "Important but flexible - Some overtime is okay for good pay", 
        weight: { work_life_balance: 2, adaptability: 2, financial: 2 } 
      },
      { 
        value: "career_focused", 
        label: "Career-focused now - Willing to work hard to establish myself", 
        weight: { determination: 3, achievement: 2, entrepreneurial: 2 } 
      },
      { 
        value: "seasonal_flexibility", 
        label: "Like seasonal variation - Busy periods and slower periods", 
        weight: { adaptability: 3, outdoor_work: 2, independent: 2 } 
      },
      { 
        value: "project_based", 
        label: "Prefer project-based - Intense work then time off between projects", 
        weight: { independent: 3, hands_on: 2, contract_work: 3 } 
      }
    ]
  },

  // Section 5: Communication & Customer Interaction
  {
    id: 12,
    question: "How comfortable are you dealing directly with customers/clients?",
    category: "customer_interaction",
    type: "single-choice",
    options: [
      { 
        value: "love_it", 
        label: "Love it - Building relationships with clients is rewarding", 
        weight: { customer_service: 3, communication: 3, trust_building: 3 } 
      },
      { 
        value: "comfortable", 
        label: "Comfortable - I can explain technical things in simple terms", 
        weight: { communication: 2, teaching: 2, patience: 2 } 
      },
      { 
        value: "prefer_limited", 
        label: "Prefer limited interaction - Focus on the work, not the talk", 
        weight: { independent: 3, technical: 2, hands_on: 2 } 
      },
      { 
        value: "team_liaison", 
        label: "Good with updates and reports, not sales or negotiation", 
        weight: { communication: 2, organizational: 2, detail: 2 } 
      },
      { 
        value: "behind_scenes", 
        label: "Prefer behind-the-scenes work with minimal customer contact", 
        weight: { independent: 3, technical: 3, commercial: 2 } 
      }
    ]
  },

  {
    id: 13,
    question: "What's your approach to workplace safety?",
    category: "safety_mindset",
    type: "single-choice",
    options: [
      { 
        value: "extremely_cautious", 
        label: "Extremely cautious - Safety protocols are never negotiable", 
        weight: { safety_conscious: 3, detail: 2, regulatory: 3 } 
      },
      { 
        value: "very_conscious", 
        label: "Very conscious - I follow all rules and think before acting", 
        weight: { safety_conscious: 2, organizational: 2, responsible: 2 } 
      },
      { 
        value: "balanced", 
        label: "Balanced - Safety is important but shouldn't slow work unnecessarily", 
        weight: { adaptability: 2, practical: 2, efficiency: 2 } 
      },
      { 
        value: "quick_learner", 
        label: "Quick learner - I'll adopt whatever safety culture is required", 
        weight: { adaptability: 3, teamwork: 2, learning: 2 } 
      },
      { 
        value: "risk_aware", 
        label: "Risk-aware - I assess each situation and adapt accordingly", 
        weight: { problem_solving: 2, independent: 2, analytical: 2 } 
      }
    ]
  },

  // Section 6: Specific Skills & Interests
  {
    id: 14,
    question: "Which of these activities sounds most appealing?",
    category: "activity_preference",
    type: "single-choice",
    options: [
      { 
        value: "wiring_circuits", 
        label: "Wiring a smart home system with automated lighting and controls", 
        weight: { electrical: 3, modern_tech: 3, detail: 2 } 
      },
      { 
        value: "pipe_systems", 
        label: "Designing and installing an efficient plumbing system", 
        weight: { plumbing: 3, spatial: 2, problem_solving: 2 } 
      },
      { 
        value: "climate_control", 
        label: "Troubleshooting why a building isn't heating or cooling properly", 
        weight: { hvac: 3, analytical: 2, problem_solving: 3 } 
      },
      { 
        value: "renovation", 
        label: "Planning and executing a complete room renovation", 
        weight: { construction: 3, creative: 2, project_management: 2 } 
      },
      { 
        value: "emergency_repair", 
        label: "Responding to emergency calls to fix critical problems", 
        weight: { problem_solving: 3, customer_service: 2, adaptability: 3 } 
      }
    ]
  },

  {
    id: 15,
    question: "How do you feel about continuous learning and certification requirements?",
    category: "continuous_learning",
    type: "single-choice",
    options: [
      { 
        value: "love_learning", 
        label: "Love it - Staying current with new technology and methods is exciting", 
        weight: { learning: 3, technical: 2, modern_tech: 3 } 
      },
      { 
        value: "necessary_growth", 
        label: "See it as necessary for growth and better opportunities", 
        weight: { achievement: 2, determination: 2, professional: 2 } 
      },
      { 
        value: "structured_path", 
        label: "Prefer a clear certification path with defined milestones", 
        weight: { organizational: 3, academic: 2, detail: 2 } 
      },
      { 
        value: "practical_only", 
        label: "Fine with practical training, less interested in theory", 
        weight: { hands_on: 3, practical: 3, kinesthetic_learning: 2 } 
      },
      { 
        value: "minimal_preferred", 
        label: "Prefer trades with minimal ongoing certification requirements", 
        weight: { independent: 2, stability: 2, traditional: 2 } 
      }
    ]
  },

  {
    id: 16,
    question: "What's your tolerance for getting dirty or dealing with unpleasant conditions?",
    category: "condition_tolerance",
    type: "single-choice",
    options: [
      { 
        value: "no_problem", 
        label: "No problem at all - Getting dirty is part of honest work", 
        weight: { resilience: 3, hands_on: 3, practical: 3 } 
      },
      { 
        value: "acceptable", 
        label: "Acceptable - I can handle it when necessary", 
        weight: { adaptability: 2, practical: 2, determination: 2 } 
      },
      { 
        value: "prefer_cleaner", 
        label: "Prefer cleaner work but can tolerate occasional messiness", 
        weight: { electrical: 2, precision: 2, technical: 2 } 
      },
      { 
        value: "minimal_mess", 
        label: "Strongly prefer minimal mess and good working conditions", 
        weight: { detail: 2, organizational: 2, commercial: 2 } 
      },
      { 
        value: "depends_pay", 
        label: "Depends on the pay - I'll do anything if it pays well enough", 
        weight: { financial: 3, practical: 2, adaptability: 2 } 
      }
    ]
  },

  // Section 7: Financial & Location
  {
    id: 17,
    question: "How important is earning potential in your career choice?",
    category: "financial_priority",
    type: "single-choice",
    options: [
      { 
        value: "top_priority", 
        label: "Top priority - I'm choosing this path primarily for better income", 
        weight: { financial: 3, entrepreneurial: 2, determination: 2 } 
      },
      { 
        value: "very_important", 
        label: "Very important - Good pay is essential but not the only factor", 
        weight: { financial: 2, practical: 2, planning: 2 } 
      },
      { 
        value: "balanced", 
        label: "Balanced - I want fair pay but also job satisfaction", 
        weight: { work_life_balance: 2, stability: 2, satisfaction: 2 } 
      },
      { 
        value: "growth_focused", 
        label: "Growth-focused - Starting pay less important than future potential", 
        weight: { achievement: 2, entrepreneurial: 2, planning: 3 } 
      },
      { 
        value: "stability_over_max", 
        label: "Prefer stable, consistent income over maximum earning potential", 
        weight: { stability: 3, work_life_balance: 2, security: 3 } 
      }
    ]
  },

  {
    id: 18,
    question: "Are you willing to travel or relocate for work?",
    category: "mobility",
    type: "single-choice",
    options: [
      { 
        value: "love_travel", 
        label: "Love to travel - Seeing different places is a perk", 
        weight: { adaptability: 3, independent: 2, commercial: 2 } 
      },
      { 
        value: "regional_ok", 
        label: "Regional travel is fine - Within a few hours of home base", 
        weight: { adaptability: 2, practical: 2, independent: 2 } 
      },
      { 
        value: "daily_commute", 
        label: "Daily commute only - Home every night is important", 
        weight: { work_life_balance: 3, stability: 2, local: 3 } 
      },
      { 
        value: "relocate_opportunity", 
        label: "Would relocate for the right opportunity", 
        weight: { determination: 2, adaptability: 3, ambitious: 2 } 
      },
      { 
        value: "strictly_local", 
        label: "Strictly local - I need to stay in my current area", 
        weight: { local: 3, stability: 3, community: 2 } 
      }
    ]
  },

  // Section 8: Team Dynamics & Leadership
  {
    id: 19,
    question: "What role do you naturally take in a team?",
    category: "team_role",
    type: "single-choice",
    options: [
      { 
        value: "natural_leader", 
        label: "Natural leader - I organize and direct others", 
        weight: { leadership: 3, communication: 2, organizational: 2 } 
      },
      { 
        value: "expert_advisor", 
        label: "Expert advisor - Others come to me for technical guidance", 
        weight: { technical: 3, teaching: 2, achievement: 2 } 
      },
      { 
        value: "reliable_executor", 
        label: "Reliable executor - Give me a task and I'll get it done right", 
        weight: { responsible: 3, detail: 2, independent: 2 } 
      },
      { 
        value: "collaborative", 
        label: "Collaborative partner - I work best bouncing ideas off others", 
        weight: { teamwork: 3, communication: 2, social: 2 } 
      },
      { 
        value: "solo_contributor", 
        label: "Solo contributor - I prefer working independently within a team", 
        weight: { independent: 3, technical: 2, hands_on: 2 } 
      }
    ]
  },

  {
    id: 20,
    question: "How do you handle stressful or high-pressure situations?",
    category: "stress_management",
    type: "single-choice",
    options: [
      { 
        value: "thrive_pressure", 
        label: "Thrive under pressure - I'm at my best in urgent situations", 
        weight: { adaptability: 3, problem_solving: 3, emergency: 3 } 
      },
      { 
        value: "stay_calm", 
        label: "Stay calm and methodical - I don't let pressure affect my work", 
        weight: { analytical: 2, safety_conscious: 2, professional: 3 } 
      },
      { 
        value: "prefer_planned", 
        label: "Prefer planned work - I like to avoid emergency situations", 
        weight: { organizational: 3, planning: 3, detail: 2 } 
      },
      { 
        value: "quick_recovery", 
        label: "Handle it well short-term but need downtime to recharge", 
        weight: { adaptability: 2, work_life_balance: 2, resilience: 2 } 
      },
      { 
        value: "team_support", 
        label: "Better with team support during high-stress situations", 
        weight: { teamwork: 3, communication: 2, support_seeking: 2 } 
      }
    ]
  }
];

// Enhanced career profiles with more detailed matching
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
    growth_path: "Journeyman → Master Electrician → Electrical Contractor → Business Owner"
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
    growth_path: "Apprentice → Journeyman → Master Plumber → Plumbing Contractor"
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
    growth_path: "Technician → Senior Tech → Service Manager → HVAC Business Owner"
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
    growth_path: "Assistant PM → Project Manager → Senior PM → Construction Executive"
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
    growth_path: "Installer → Lead Installer → Site Supervisor → Solar Business Owner"
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
    growth_path: "Apprentice → Journeyman → Master Carpenter → General Contractor"
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
    growth_path: "Welder → Certified Welder → Welding Inspector → Welding Supervisor"
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
    growth_path: "Technician → Master Technician → Shop Foreman → Shop Owner"
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
    growth_path: "Inspector → Senior Inspector → Lead Inspector → Inspection Business Owner"
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
    growth_path: "Crew Member → Crew Leader → Account Manager → Landscape Business Owner"
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
    growth_path: "Technician → Senior Tech → Service Manager → Repair Business Owner"
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
    growth_path: "Apprentice → Mechanic → Adjuster → Supervisor → Consultant"
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
    growth_path: "Apprentice → Locksmith → Master Locksmith → Security Business Owner"
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
    growth_path: "Technician → Senior Tech → Route Manager → Branch Manager"
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
    growth_path: "Installer → Lead Tech → Network Specialist → Field Supervisor"
  }
};

// utility: compute userWeights from responses
export const computeUserWeights = (responses) => {
  const userWeights = {};
  Object.values(responses).forEach(answer => {
    const q = assessmentQuestions.find(q => q.options.some(o => o.value === answer));
    if (!q) return;
    const opt = q.options.find(o => o.value === answer);
    if (!opt?.weight) return;
    Object.entries(opt.weight).forEach(([trait, val]) => {
      userWeights[trait] = (userWeights[trait] || 0) + val;
    });
  });
  return userWeights;
};

export const calculateCareerMatches = (responses) => {
  const userWeights = computeUserWeights(responses);
  const careerScores = Object.entries(careerProfiles).map(([key, career]) => {
    let matchScore = 0;
    let matchedTraits = 0;

    Object.entries(career.requiredWeights).forEach(([trait, requiredValue]) => {
      const userValue = userWeights[trait];
      if (userValue != null) {
        const traitMatch = Math.min(userValue / requiredValue, 1) * 100;
        matchScore += traitMatch;
        matchedTraits++;
      }
    });

    const averageMatch = matchedTraits > 0 ? matchScore / matchedTraits : 0;
    return {
      key,
      ...career,
      matchPercentage: Math.round(averageMatch),
      matchedTraits,
      userTraits: userWeights
    };
  });

  return careerScores.sort((a, b) => b.matchPercentage - a.matchPercentage);
};

export const getPersonalizedRecommendations = (topMatches, userWeights) => {
  return topMatches.slice(0, 3).map(career => {
    const strengths = [];
    const improvements = [];

    Object.entries(career.requiredWeights).forEach(([trait, required]) => {
      const uv = userWeights[trait] || 0;
      if (uv >= required * 0.8) strengths.push(trait);
      else if (uv < required * 0.5) improvements.push(trait);
    });

    return {
      ...career,
      strengths,
      improvements,
      whyGoodFit: generateFitExplanation(strengths, career.title),
      nextSteps: generateNextSteps(career, improvements)
    };
  });
};

// Generate explanations for why a career is a good fit
const generateFitExplanation = (strengths, careerTitle) => {
  const strengthDescriptions = {
    technical: "strong technical aptitude",
    problem_solving: "excellent problem-solving skills",
    hands_on: "preference for hands-on work",
    leadership: "natural leadership abilities",
    communication: "strong communication skills",
    detail: "attention to detail",
    analytical: "analytical thinking",
    customer_service: "customer service excellence",
    safety_conscious: "commitment to safety",
    organizational: "organizational skills"
  };

  const topStrengths = strengths
    .slice(0, 3)
    .map(s => strengthDescriptions[s] || s.replace(/_/g, ' '));

  if (topStrengths.length === 0) {
    return `Based on your answers, ${careerTitle} is still a promising path for you.`;
  }

  return `Your ${topStrengths.join(', ')} make you well-suited for a career as a ${careerTitle}.`;
};

// Generate personalized next steps
const generateNextSteps = (career, improvements) => {
  const steps = [
    `Research ${career.title} training programs in your area`,
    `Connect with local ${career.title} professionals for informational interviews`,
    `Review certification requirements: ${career.certifications.join(', ')}`
  ];

  if (improvements.length > 0) {
    steps.push(
      `Develop skills in: ${improvements
        .slice(0, 2)
        .map(i => i.replace(/_/g, ' '))
        .join(' and ')}`
    );
  }

  return steps;
};
