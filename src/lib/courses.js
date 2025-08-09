// src/lib/courses.js - Enhanced with manual curation + YouTube
const YT_API = 'https://www.googleapis.com/youtube/v3/search';

// Manually curated high-quality courses (100% legal to link)
export const CURATED_COURSES = {
  // ——— ELECTRICIAN ———
  electrician: [
    {
      title: "Inside Wireman / Electrical Apprenticeship (IBEW/NECA)",
      provider: "electrical training ALLIANCE",
      url: "https://www.electricaltrainingalliance.org/",
      duration: "4–5 years (earn-while-you-learn)",
      cost: "Paid apprenticeship",
      rating: null,
      description: "National IBEW/NECA apprenticeship covering code, wiring, safety, & on-the-job training.",
      type: "apprenticeship",
      skills: ["NEC", "Residential/Commercial Wiring", "Safety"]
    },
    {
      title: "IEC Electrical Apprenticeship",
      provider: "Independent Electrical Contractors (IEC)",
      url: "https://ieci.org/",
      duration: "4 years (earn-while-you-learn)",
      cost: "Paid apprenticeship",
      rating: null,
      description: "Merit-shop apprenticeship with classroom + OJT via local IEC chapters.",
      type: "apprenticeship",
      skills: ["NEC", "Blueprints", "Safety"]
    },
    {
      title: "NFPA 70E Electrical Safety (Online)",
      provider: "360training (OSHA-authorized)",
      url: "https://www.360training.com/osha-campus/osha-training/nfpa70e-training",
      duration: "6–10 hours",
      cost: "Paid",
      rating: null,
      description: "Meets consensus electrical safety best practices—arc flash, boundaries, PPE.",
      type: "certification",
      skills: ["Electrical Safety", "Arc Flash", "LOTO"]
    },
    {
      title: "National Electrical Code (NEC) 2023 Update",
      provider: "University of Louisiana (Continuing Ed)",
      url: "https://keeplearning.louisiana.edu/course/national-electrical-code-nfpa-70-2023-update",
      duration: "8–16 hours",
      cost: "Paid",
      rating: null,
      description: "Structured NEC change review to keep code knowledge current.",
      type: "professional",
      skills: ["NEC 2023", "Compliance"]
    }
  ],

  // ——— PLUMBER ———
  plumber: [
    {
      title: "PHCC Academy Online Plumbing Apprenticeship",
      provider: "PHCC Educational Foundation",
      url: "https://www.phccweb.org/foundation/phcc-academy-plumbing-hvac-apprenticeship-courses/",
      duration: "4+ years (RTI) | earn-while-you-learn via local sponsor",
      cost: "Paid apprenticeship",
      rating: null,
      description: "U.S. DOL-recognized online related training for plumbing apprentices.",
      type: "apprenticeship",
      skills: ["Systems", "Code", "Safety"]
    },
    {
      title: "Backflow Prevention Assembly Tester (ASSE 5110)",
      provider: "ASSE / IAPMO BPI (various providers)",
      url: "https://asse-plumbing.org/personnel-certification/backflow-prevention",
      duration: "3–5 days",
      cost: "Paid",
      rating: null,
      description: "Nationally recognized backflow testing certification course + exam.",
      type: "certification",
      skills: ["Backflow", "Testing", "Compliance"]
    },
    {
      title: "IAPMO Online Plumbing CEU Courses",
      provider: "IAPMO Learn",
      url: "https://www.iapmolearn.org/",
      duration: "Self-paced",
      cost: "Paid",
      rating: null,
      description: "Code-focused CEU courses (varies by state).",
      type: "professional",
      skills: ["Code", "Compliance"]
    },
    {
      title: "Backflow Certification (School Example)",
      provider: "Ranken Technical College (ASSE-certified)",
      url: "https://ranken.edu/backflow/",
      duration: "3–5 days",
      cost: "Paid",
      rating: null,
      description: "Hands-on ASSE tester certification course with exam.",
      type: "certification",
      skills: ["Backflow", "Testing"]
    }
  ],

  // ——— HVAC TECHNICIAN ———
  hvac_technician: [
    {
      title: "EPA Section 608 Technician Certification",
      provider: "U.S. EPA (approved proctors: ESCO, etc.)",
      url: "https://www.epa.gov/section608/section-608-technician-certification-0",
      duration: "Study + exam",
      cost: "Paid exam (study free/paid)",
      rating: null,
      description: "Required to work with refrigerants; Universal recommended.",
      type: "certification",
      skills: ["Refrigerants", "Environmental Compliance"]
    },
    {
      title: "EPA 608 Exam & Study Manual",
      provider: "ESCO Institute",
      url: "https://www.escogroup.org/training/epa608.aspx",
      duration: "Study + exam",
      cost: "Paid",
      rating: null,
      description: "Most common provider for 608 study materials and testing.",
      type: "certification",
      skills: ["Refrigerants", "Recovery"]
    },
    {
      title: "Fundamentals of HVAC Systems (On-Demand)",
      provider: "ASHRAE Learning Institute",
      url: "https://www.ashrae.org/professional-development/elearning-on-demand",
      duration: "~20 PDH (course package)",
      cost: "Paid",
      rating: null,
      description: "Industry-standard fundamentals; PDHs accepted widely.",
      type: "professional",
      skills: ["HVAC Fundamentals", "Controls", "Hydronics"]
    }
  ],

  // ——— CONSTRUCTION PROJECT MANAGER ———
  construction_pm: [
    {
      title: "Procore Certification: Project Manager",
      provider: "Procore (Free)",
      url: "https://www.procore.com/certification",
      duration: "3–6 hours",
      cost: "Free",
      rating: null,
      description: "Hands-on software workflows used across the industry; CE units available.",
      type: "professional",
      skills: ["RFIs", "Submittals", "Schedules", "Docs"]
    },
    {
      title: "OSHA 30-Hour Construction (Authorized Online)",
      provider: "OSHA Outreach (see provider list)",
      url: "https://www.osha.gov/training/outreach/training-providers",
      duration: "30 hours",
      cost: "Paid",
      rating: null,
      description: "Widely required supervisory safety training.",
      type: "certification",
      skills: ["Construction Safety", "Hazard Recognition"]
    },
    {
      title: "PMP® (requirements + prep)",
      provider: "Project Management Institute (PMI)",
      url: "https://www.pmi.org/certifications/project-management-pmp",
      duration: "35 hours prep + experience",
      cost: "Paid exam",
      rating: null,
      description: "Gold-standard PM credential; valuable for Construction PM career path.",
      type: "certification",
      skills: ["Scheduling", "Cost", "Risk", "Stakeholders"]
    }
  ],

  // ——— SOLAR INSTALLER ———
  solar_installer: [
    {
      title: "PVOL101: Solar Design & Installation (Online)",
      provider: "Solar Energy International (SEI)",
      url: "https://www.solarenergy.org/online/",
      duration: "40+ hours",
      cost: "Paid",
      rating: null,
      description: "Industry-trusted PV fundamentals; counts toward NABCEP.",
      type: "professional",
      skills: ["PV Design", "Wiring", "Safety"]
    },
    {
      title: "Solar PV Boot Camp + NABCEP PV Associate Prep",
      provider: "HeatSpring",
      url: "https://www.heatspring.com/courses/solar-pv-boot-camp-nabcep-pv-associate-exam-prep",
      duration: "18–25 hours",
      cost: "Paid",
      rating: null,
      description: "Meets PVA training reqs; exam prep + practice.",
      type: "certification",
      skills: ["PV Fundamentals", "Code", "Safety"]
    },
    {
      title: "NABCEP PV Associate Program",
      provider: "NABCEP",
      url: "https://www.nabcep.org/certifications/associate-program/",
      duration: "Training + exam",
      cost: "Paid exam",
      rating: null,
      description: "Entry credential for PV; recognized widely.",
      type: "certification",
      skills: ["PV Basics"]
    },
    {
      title: "RE100: Intro to Renewable Energy (Free)",
      provider: "SEI",
      url: "https://solarenergytraining.org/",
      duration: "Self-paced",
      cost: "Free",
      rating: null,
      description: "Free intro to renewables; good pre-req.",
      type: "video",
      skills: ["Renewables Overview"]
    }
  ],

  // ——— CARPENTER ———
  carpenter: [
    {
      title: "OSHA 10/30 Construction (Authorized Online)",
      provider: "OSHA Outreach (choose provider)",
      url: "https://www.osha.gov/training/outreach/training-providers",
      duration: "10–30 hours",
      cost: "Paid",
      rating: null,
      description: "Core safety card often requested on job sites.",
      type: "certification",
      skills: ["Safety", "Hazard Recognition"]
    }
    // Suggest adding local union/community college apprenticeship links at runtime via CareerOneStop API below.
  ],

  // ——— WELDER ———
  welder: [
    {
      title: "OSHA 10/30 Construction (Authorized Online)",
      provider: "OSHA Outreach (choose provider)",
      url: "https://www.osha.gov/training/outreach/training-providers",
      duration: "10–30 hours",
      cost: "Paid",
      rating: null,
      description: "Safety foundation; add hot-work training locally.",
      type: "certification",
      skills: ["Safety", "PPE", "Hazards"]
    }
    // Add local AWS/AWS-partner programs via CareerOneStop API results.
  ],

  // ——— AUTOMOTIVE TECH ———
  auto_mechanic: [
    {
      title: "EPA Section 609 (MVAC) Certification Info",
      provider: "U.S. EPA (MVAC)",
      url: "https://www.epa.gov/section608/certification-programs-section-608-technicians", // anchor page for cert orgs
      duration: "Study + exam",
      cost: "Paid exam",
      rating: null,
      description: "609 is required for mobile A/C refrigerants (administered by approved orgs).",
      type: "certification",
      skills: ["Refrigerants", "MVAC"]
    }
    // Add ASE prep and local college programs via CareerOneStop API results.
  ],

  // ——— HOME INSPECTOR ———
  home_inspector: [
    {
      title: "InterNACHI® Home Inspector Training",
      provider: "InterNACHI",
      url: "https://www.nachi.org/training",
      duration: "Self-paced + proctored state topics",
      cost: "Membership",
      rating: null,
      description: "Largest inspector association; licensing courses in many states.",
      type: "professional",
      skills: ["Systems", "Reporting", "Standards of Practice"]
    },
    {
      title: "ASHI Education",
      provider: "American Society of Home Inspectors",
      url: "https://www.homeinspector.org/Education",
      duration: "Varies",
      cost: "Paid",
      rating: null,
      description: "Training and CE tied to ASHI standards; state options.",
      type: "professional",
      skills: ["Inspection Methods", "Ethics"]
    },
    {
      title: "Radon Measurement (NRPP) – Training & Cert",
      provider: "NRPP / (various providers)",
      url: "https://nrpp.info/",
      duration: "Course + exam",
      cost: "Paid",
      rating: null,
      description: "Common add-on credential for inspectors in many states.",
      type: "certification",
      skills: ["Radon Testing", "Reporting"]
    }
  ],

  // ——— LANDSCAPER ———
  landscaper: [
    {
      title: "Landscape Industry Certified",
      provider: "National Association of Landscape Professionals",
      url: "https://www.landscapeprofessionals.org/",
      duration: "Exam prep + exam",
      cost: "Paid",
      rating: null,
      description: "National credential with specialty tracks (Hort Tech, etc.).",
      type: "certification",
      skills: ["Horticulture", "Irrigation", "Safety"]
    },
    {
      title: "Irrigation Technician / Designer Courses",
      provider: "Irrigation Association",
      url: "https://www.irrigation.org/education-resources/education-courses",
      duration: "Varies",
      cost: "Paid",
      rating: null,
      description: "Core irrigation training & exams; highly valued by employers.",
      type: "professional",
      skills: ["Irrigation", "Hydraulics"]
    }
    // Add state pesticide applicator prep via CareerOneStop search by location.
  ],

  // ——— APPLIANCE REPAIR ———
  appliance_repair: [
    {
      title: "Master Samurai Tech – Core & Advanced",
      provider: "Master Samurai Tech",
      url: "https://mastersamuraitech.com/",
      duration: "Self-paced",
      cost: "Paid",
      rating: null,
      description: "Highly regarded practical training on modern appliance diagnostics.",
      type: "professional",
      skills: ["Diagnostics", "Schematics"]
    },
    {
      title: "Fred’s Appliance Academy",
      provider: "Fred’s Appliance Academy",
      url: "https://www.fredsapplianceacademy.com/",
      duration: "1–3 weeks (bootcamps)",
      cost: "Paid",
      rating: null,
      description: "Hands-on bootcamps; strong industry network.",
      type: "professional",
      skills: ["Troubleshooting", "Customer Service"]
    },
    {
      title: "Section 608 (Stationary HVAC) – for sealed systems",
      provider: "U.S. EPA (approved proctors)",
      url: "https://www.epa.gov/section608/section-608-technician-certification-0",
      duration: "Study + exam",
      cost: "Paid exam",
      rating: null,
      description: "Needed when appliance techs handle refrigerants.",
      type: "certification",
      skills: ["Refrigerants", "Environmental Compliance"]
    }
  ],

  // ——— ELEVATOR TECHNICIAN ———
  elevator_technician: [
    {
      title: "CET® – Certified Elevator Technician Program",
      provider: "NAEC",
      url: "https://www.naec.org/education/cet-certified-elevator-technician/",
      duration: "Apprenticeship + coursework",
      cost: "Paid",
      rating: null,
      description: "Industry-recognized path for elevator mechanics.",
      type: "certification",
      skills: ["Electrical/Mechanical", "Safety"]
    },
    {
      title: "NEIEP Apprenticeship (IUEC)",
      provider: "National Elevator Industry Educational Program",
      url: "https://www.neiep.org/",
      duration: "4 years (earn-while-you-learn)",
      cost: "Paid apprenticeship",
      rating: null,
      description: "Union apprenticeship (IUEC) with classroom + OJT.",
      type: "apprenticeship",
      skills: ["Install", "Maintenance", "Adjusting"]
    },
    {
      title: "QEI – Qualified Elevator Inspector",
      provider: "NAESA",
      url: "https://www.naesai.org/qei-certification",
      duration: "Experience + exam",
      cost: "Paid",
      rating: null,
      description: "Advanced credential for inspectors after mechanic experience.",
      type: "certification",
      skills: ["Inspection", "Code"]
    }
  ],

  // ——— LOCKSMITH ———
  locksmith: [
    {
      title: "ALOA Locksmith Training & Certifications",
      provider: "ALOA Security Professionals",
      url: "https://www.aloa.org/education/",
      duration: "Varies",
      cost: "Paid",
      rating: null,
      description: "CML/CPS/CPL tracks + safe tech; check state license rules.",
      type: "professional",
      skills: ["Locksets", "Keying", "Access Control"]
    }
  ],

  // ——— PEST CONTROL ———
  pest_control: [
    {
      title: "NPMA Online Learning Center",
      provider: "National Pest Management Association",
      url: "https://www.npmapestworld.org/your-team-tools/online-learning-center/all-online-courses/",
      duration: "Self-paced",
      cost: "Paid",
      rating: null,
      description: "Technical + business courses; state CE credits in many regions.",
      type: "professional",
      skills: ["IPM", "Identification", "Regulatory"]
    },
    {
      title: "NPMA PRO Certification Exam Prep",
      provider: "NPMA QualityPro",
      url: "https://www.npmapestworld.org/your-team-tools/online-learning-center/qualitypro-courses-and-exams/",
      duration: "Varies",
      cost: "Paid",
      rating: null,
      description: "Professional credentialing prep for service/sales/office roles.",
      type: "certification",
      skills: ["Treatment", "Safety", "Customer Service"]
    }
  ],

  // ——— TELECOM INSTALLER ———
  telecom_installer: [
    {
      title: "CFOT – Certified Fiber Optic Technician",
      provider: "FOA",
      url: "https://www.foa.org/FOA_Certifications_and_Courses/fiber_optic_technician.html",
      duration: "3–5 days (typ.)",
      cost: "Paid",
      rating: null,
      description: "Baseline fiber certification accepted universally.",
      type: "certification",
      skills: ["Fiber", "Splicing", "Testing"]
    },
    {
      title: "BICSI Installer 1/2",
      provider: "BICSI",
      url: "https://www.bicsi.org/education-certification/",
      duration: "1–2 weeks + exam",
      cost: "Paid",
      rating: null,
      description: "Structured cabling standards; gold standard for low-voltage.",
      type: "certification",
      skills: ["Cabling", "Standards", "Testing"]
    },
    {
      title: "Tower Climbing & Rescue (industry-standard)",
      provider: "Comtrain (example provider)",
      url: "https://comtrainusa.com/",
      duration: "2–4 days",
      cost: "Paid",
      rating: null,
      description: "Tower safety and rescue required for wireless/5G field work.",
      type: "certification",
      skills: ["Fall Protection", "Rescue", "RF Safety"]
    }
  ],

  // General trades fallback (keep yours if you like)
  general_trades: [
    {
      title: "OSHA 10-Hour General Industry",
      provider: "OSHA Outreach",
      url: "https://www.osha.gov/training/outreach/training-providers",
      duration: "10 hours",
      cost: "Paid",
      rating: null,
      description: "Foundational safety credential for any trade.",
      type: "certification",
      skills: ["Safety", "Hazard Recognition"]
    }
  ]
};


export async function fetchYouTubeCourses(keyword, limit = 3) {
  try {
    const key = import.meta.env.VITE_YT_API_KEY;
    if (!key) {
      console.warn('YouTube API key not found');
      return [];
    }

    const params = new URLSearchParams({
      key,
      part: 'snippet',
      q: `${keyword} training course tutorial`,
      type: 'video',
      maxResults: String(limit),
      videoDuration: 'medium', // Filter for substantial content
      videoDefinition: 'high',
      order: 'relevance'
    });

    const res = await fetch(`${YT_API}?${params.toString()}`);
    if (!res.ok) throw new Error(`YouTube API failed: ${res.status}`);
    
    const json = await res.json();
    return (json?.items || []).map(item => ({
      title: item.snippet.title,
      provider: 'YouTube',
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      duration: 'Video',
      cost: 'Free',
      rating: null,
      thumbnail: item.snippet.thumbnails?.medium?.url || null,
      description: item.snippet.description.slice(0, 150) + '...',
      type: 'video',
      skills: [], // Could be enhanced with AI extraction
      channel: item.snippet.channelTitle
    }));
  } catch (e) {
    console.warn('YouTube fetch error', e);
    return [];
  }
}

// Government/Official training resources
export async function fetchGovernmentTraining(careerType) {
  // CareerOneStop API (US Department of Labor) - actually free and available!
  try {
    const baseUrl = 'https://api.careeronestop.org/v1/training';
    // Note: This API requires registration but is free for non-commercial use
    // For now, return curated government resources
    
    const govResources = {
      electrician: [
        {
          title: "Apprenticeship.gov - Electrician Programs",
          provider: "US Department of Labor",
          url: "https://www.apprenticeship.gov/apprenticeship-job-finder",
          duration: "4 years",
          cost: "Paid training",
          rating: 5.0,
          description: "Official apprenticeship finder for electrical programs",
          type: "apprenticeship",
          skills: ["Electrical Installation", "Safety", "Code Compliance"]
        }
      ],
      plumber: [
        {
          title: "Apprenticeship.gov - Plumbing Programs", 
          provider: "US Department of Labor",
          url: "https://www.apprenticeship.gov/apprenticeship-job-finder",
          duration: "4-5 years", 
          cost: "Paid training",
          rating: 5.0,
          description: "Official apprenticeship finder for plumbing programs",
          type: "apprenticeship",
          skills: ["Pipe Installation", "Water Systems", "Code Compliance"]
        }
      ]
      // Add more as needed
    };

    return govResources[careerType] || [];
  } catch (error) {
    console.warn('Government training fetch error:', error);
    return [];
  }
}

// Main function to get all courses for a career
export async function fetchCoursesForCareer(careerTitle, careerKey = null) {
  const key = careerKey || careerTitle.toLowerCase().replace(/\s+/g, '_');
  
  // Get curated courses
  const curated = CURATED_COURSES[key] || CURATED_COURSES.general_trades;
  
  // Get YouTube supplementary content
  const youtube = await fetchYouTubeCourses(careerTitle);
  
  // Get government resources
  const government = await fetchGovernmentTraining(key);
  
  // Combine and prioritize
  const allCourses = [
    ...curated,
    ...government,
    ...youtube
  ];

  // Sort by priority: certification > professional > university > video
  const priority = { certification: 4, apprenticeship: 4, professional: 3, university: 2, technical: 2, video: 1, practical: 1 };
  
  return allCourses
    .sort((a, b) => (priority[b.type] || 0) - (priority[a.type] || 0))
    .slice(0, 8); // Return top 8 courses
}

// Filter courses by type
export const filterCoursesByType = (courses, type) => {
  if (type === 'all') return courses;
  return courses.filter(course => course.type === type);
};

// Filter by cost
export const filterCoursesByCost = (courses, costType) => {
  switch (costType) {
    case 'free':
      return courses.filter(course => 
        course.cost.toLowerCase().includes('free') || 
        course.cost === '$0' ||
        course.cost.toLowerCase().includes('audit')
      );
    case 'paid':
      return courses.filter(course => 
        !course.cost.toLowerCase().includes('free') && 
        course.cost !== '$0' &&
        !course.cost.toLowerCase().includes('audit')
      );
    default:
      return courses;
  }
};