// src/data/apprenticeships/index.js

export const CURATED_APPRENTICESHIPS = {
  electrician: {
    CA: [
      {
        title: "Electrical Training Institute (ETI) – Inside Wireman",
        description: "IBEW Local 11/NECA’s flagship apprenticeship with OJT + classroom; multiple specialized tracks.",
        location: "Los Angeles (Commerce), CA",
        type: "Union Apprenticeship",
        url: "https://www.laett.com/",
        provider: "IBEW Local 11 / LA NECA",
        duration: "5 years",
        cost: "Paid training (progressive wage)",
        highlights: ["Earn while you learn", "College credit options", "Benefits & pension"]
      }
    ],
    NY: [
      {
        title: "Local 3 IBEW – Apprentice Program (JIB/JIBEI)",
        description: "5½-year union apprenticeship blending full-time OJT with weekly related instruction + college courses.",
        location: "New York City, NY",
        type: "Union Apprenticeship",
        url: "https://www.jibei.org/education-training/apprentice-program/",
        provider: "Local 3 IBEW / Joint Industry Board",
        duration: "5.5 years",
        cost: "Paid training (progressive wage)",
        highlights: ["OJT + classroom", "Associate degree coursework", "Union benefits"]
      }
    ],
    TX: [
      {
        title: "Houston Electrical JATC – Inside Wireman",
        description: "Registered apprenticeship delivering 8,000+ OJT hours and 180 hours/year classroom.",
        location: "Houston, TX",
        type: "Union Apprenticeship",
        url: "https://www.houstonjatc.com/",
        provider: "IBEW Local 716 / NECA",
        duration: "4 years",
        cost: "Paid training",
        highlights: ["US DOL registered", "Journeyman pathway", "Benefits"],
        address: "108 Covern St, Houston, TX 77061"
      }
    ],
    FL: [
      {
        title: "IBEW Local 349 – Electrical Apprenticeship",
        description: "5-year inside wireman apprenticeship with day-one OJT, lab training and classroom instruction.",
        location: "Miami, FL",
        type: "Union Apprenticeship",
        url: "https://www.ibew349.org/?page=Apprenticeship&zone=%2Funionactive%2Fview_page.cfm",
        provider: "IBEW Local 349",
        duration: "5 years",
        cost: "Paid training",
        highlights: ["Earn while you learn", "Health & pension", "Modern labs"],
        phone: "305-324-7578",
        address: "1601 NW 17th Ave, Miami, FL 33125"
      }
    ]
  },

  plumber: {
    CA: [
      {
        title: "UA Local 78 – Plumber Apprenticeship",
        description: "Five-year earn-while-you-learn program with related technical instruction.",
        location: "Los Angeles, CA",
        type: "Union Apprenticeship",
        url: "https://www.uaplumber78.com/apprentice-applicant",
        provider: "UA Local 78",
        duration: "5 years",
        cost: "Paid training",
        highlights: ["No tuition", "Union wage progression", "Benefits"],
        address: "1111 W. James M. Wood Blvd., Los Angeles, CA 90015"
      }
    ],
    NY: [
      {
        title: "Plumbers Local 1 – JATC Apprenticeship",
        description: "Five-year plumbing apprenticeship with classroom and OJT leading to journeyman status.",
        location: "New York City, NY",
        type: "Union Apprenticeship",
        url: "https://www.ualocal1.org/training.aspx?pID=5917&zone=Training-Center",
        provider: "UA Local 1",
        duration: "5 years",
        cost: "Paid training",
        highlights: ["Union pay & benefits", "Weekly related instruction"],
        phone: "(718) 752-9630"
      }
    ],
    TX: [
      {
        title: "Plumbers Local 68 – HAPJAC Apprenticeship",
        description: "Service & repair plumber apprenticeship with scheduled application periods.",
        location: "Houston, TX",
        type: "Union Apprenticeship",
        url: "https://www.plu68.com/training-center/apprentice-notice/",
        provider: "UA Local 68",
        duration: "5 years",
        cost: "Paid training",
        highlights: ["Structured OJT + classes", "Union benefits"],
        address: "454 Link Rd, Houston, TX 77009"
      }
    ],
    FL: [
      {
        title: "UA Local 123 – Plumbers, Pipefitters & HVAC-R Apprenticeship",
        description: "No-cost 5-year apprenticeship with multiple trade tracks (plumber/pipefitter/HVAC-R).",
        location: "Dover (Tampa Bay), FL",
        type: "Union Apprenticeship",
        url: "https://lu123.com/apprenticeship.aspx",
        provider: "UA Local 123",
        duration: "5 years",
        cost: "Paid training (no tuition)",
        highlights: ["College credit via HCC partner", "Pension & health"],
        address: "3601 McIntosh Rd, Dover, FL 33527"
      }
    ]
  },

  hvac_technician: {
    CA: [
      {
        title: "Sheet Metal Workers Local 104 – HVAC/AC Mechanic Apprenticeship",
        description: "Premier 5-year program for building trades sheet metal, HVAC and TAB.",
        location: "Bay Area & NorCal, CA",
        type: "Union Apprenticeship",
        url: "https://smw104training.org/program-information",
        provider: "SMART Local 104 JATC",
        duration: "5 years",
        cost: "Paid training",
        highlights: ["High-tech labs", "Earn while you learn", "Benefits"]
      }
    ],
    NY: [
      {
        title: "SMART Local 28 – Sheet Metal/HVAC Apprenticeship",
        description: "NYC program training union HVAC/sheet metal workers with related instruction.",
        location: "New York City, NY",
        type: "Union Apprenticeship",
        url: "https://www.smart28apprenticeship.org/",
        provider: "SMART Local 28 Education Fund",
        duration: "4–5 years",
        cost: "Paid training",
        highlights: ["OJT + classroom", "Union benefits"]
      }
    ],
    TX: [
      {
        title: "SMART Local 67 – HVAC Sheet Metal Apprenticeship",
        description: "4-year apprenticeship with 6,400+ OJT hours and tuition-free classes.",
        location: "San Antonio & South TX",
        type: "Union Apprenticeship",
        url: "https://biggerbettersmarter.org/",
        provider: "SMART Local 67 JATC",
        duration: "4 years",
        cost: "Paid training",
        highlights: ["Earn while you learn", "Benefits & pension"]
      }
    ],
    FL: [
      {
        title: "Sheet Metal Workers Local 15 – HVAC Apprenticeship",
        description: "Registered apprenticeship preparing HVAC sheet metal workers in Central Florida.",
        location: "Tampa & Central FL",
        type: "Union Apprenticeship",
        url: "https://www.smwlocal15.org/",
        provider: "SMART Local 15 JATC",
        duration: "4–5 years",
        cost: "Paid training",
        highlights: ["Union wages", "Industry certifications"]
      }
    ]
  },

  carpenter: {
    CA: [
      {
        title: "Western States Carpenters Training Fund – Apprenticeship",
        description: "Debt-free, earn-while-you-learn pathway with training centers across CA.",
        location: "Statewide (e.g., Buena Park), CA",
        type: "Union Apprenticeship",
        url: "https://www.wsctf.org/",
        provider: "Western States Carpenters Training Fund",
        duration: "4 years",
        cost: "Paid training",
        highlights: ["Quarterly classes", "Benefits"],
        phone: "(714) 571-0449",
        address: "7111 Firestone Blvd #137, Buena Park, CA 90621"
      }
    ],
    NY: [
      {
        title: "NYC Carpenters Training Center – Apprenticeship",
        description: "Union apprenticeship for carpenters, millwrights, dockbuilders and more.",
        location: "New York City, NY",
        type: "Union Apprenticeship",
        url: "https://www.nyccarpenterstrainingcenter.org/",
        provider: "New York City District Council of Carpenters",
        duration: "4 years",
        cost: "Paid training",
        highlights: ["Hands-on labs", "Union benefits"]
      }
    ],
    TX: [
      {
        title: "Central South Carpenters – Apprenticeship (Houston Training Center)",
        description: "Regional UBC apprenticeship with modern facilities and OJT.",
        location: "Houston/Pasadena, TX",
        type: "Union Apprenticeship",
        url: "https://www.carpenters.org/training_centers/tx/",
        provider: "Central South Carpenters",
        duration: "4 years",
        cost: "Paid training",
        highlights: ["Multiple TX centers", "Benefits"],
        address: "5500 Spencer Hwy, Pasadena, TX 77505"
      }
    ],
    FL: [
      {
        title: "Florida Carpenters Training Program",
        description: "Four-year union apprenticeship; quarterly training blocks.",
        location: "Tampa & Orlando, FL",
        type: "Union Apprenticeship",
        url: "https://www.flcrc.org/central-florida-training",
        provider: "Florida Regional Council of Carpenters",
        duration: "4 years",
        cost: "Paid training",
        highlights: ["Earn while you learn", "Union benefits"]
      }
    ]
  },

  elevator_technician: {
    CA: [
      {
        title: "IUEC Local 18 / NEIEP – Elevator Constructor Apprenticeship",
        description: "NEIEP-delivered 4–5 year program with OJT + 100–200 class hours/year.",
        location: "SoCal (Los Angeles/San Diego), CA",
        type: "Union Apprenticeship",
        url: "https://neieprecruitment.org/start/recruitments/9b7c667d-2e27-49dc-965a-8d2a00e50fa5",
        provider: "IUEC Local 18 / NEIEP",
        duration: "4–5 years",
        cost: "Paid training",
        highlights: ["Earn while you learn", "National standards"],
        phone: "626-449-4404",
        address: "2011 E Financial Way, Glendora, CA 91741"
      }
    ],
    NY: [
      {
        title: "IUEC Local 1 / NEIEP – Elevator Constructor Apprenticeship",
        description: "Four-year NEIEP program combining full-time work with weekly classes.",
        location: "New York City, NY",
        type: "Union Apprenticeship",
        url: "https://localoneiuec.com/apprenticeship.aspx",
        provider: "IUEC Local One / NEIEP",
        duration: "4 years",
        cost: "Paid training",
        highlights: ["8,000 work hours", "Mechanic exam eligibility"],
        phone: "718-767-7004",
        address: "47-24 27th St, Long Island City, NY 11101"
      }
    ],
    TX: [
      {
        title: "IUEC Local 31 / NEIEP – Elevator Constructor Apprenticeship",
        description: "Registered apprenticeship; recruiting via NEIEP portal when open.",
        location: "San Antonio & Houston area, TX",
        type: "Union Apprenticeship",
        url: "https://www.iuec31.org/",
        provider: "IUEC Local 31 / NEIEP",
        duration: "4–5 years",
        cost: "Paid training",
        highlights: ["Standardized aptitude test + interview", "Union benefits"]
      }
    ],
    FL: [
      {
        title: "IUEC Local 71 / NEIEP – Elevator Constructor Apprenticeship",
        description: "South Florida recruitment cycles via NEIEP; OJT + classroom training.",
        location: "Miami & Southeast FL",
        type: "Union Apprenticeship",
        url: "https://www.iuec71.org/",
        provider: "IUEC Local 71 / NEIEP",
        duration: "4–5 years",
        cost: "Paid training",
        highlights: ["Earn while you learn", "Benefits & pension"]
      }
    ]
  },

  telecom_installer: {
    CA: [
      {
        title: "ETI – Sound & Communications Installer Apprenticeship",
        description: "3-year union program for low-voltage/telecom systems (sound, data, security).",
        location: "Los Angeles (Commerce), CA",
        type: "Union Apprenticeship",
        url: "https://www.laett.com/index.cfm?page=Sound202620Communications&zone=%2Funionactive%2Fview_page.cfm",
        provider: "IBEW Local 11 / LA NECA",
        duration: "3 years",
        cost: "Paid training",
        highlights: ["OJT + classroom", "Specialized low-voltage"]
      }
    ],
    NY: [
      {
        title: "Local 3 IBEW – Apprentice Program (Telecom Track)",
        description: "Local 3’s apprentice system covers electrical and telecom scopes with weekly classes.",
        location: "New York City, NY",
        type: "Union Apprenticeship",
        url: "https://www.jibei.org/education-training/apprentice-program/",
        provider: "Local 3 IBEW / Joint Industry Board",
        duration: "4–5.5 years (track dependent)",
        cost: "Paid training",
        highlights: ["College coursework", "Union benefits"]
      }
    ],
    TX: [
      {
        title: "Houston Electrical JATC – Teledata/Telecom Apprenticeship",
        description: "JATC program training telecommunications technicians alongside electrical apprenticeships.",
        location: "Houston, TX",
        type: "Union Apprenticeship",
        url: "https://www.houstonjatc.com/",
        provider: "IBEW Local 716 / NECA",
        duration: "3–4 years",
        cost: "Paid training",
        highlights: ["US DOL registered", "OJT + related instruction"]
      }
    ],
    FL: [
      {
        title: "IBEW Local 349 – Sound & Communications (Telecom) Apprenticeship",
        description: "IBEW 349’s apprenticeship includes low-voltage/telecom scopes with classroom + labs.",
        location: "Miami, FL",
        type: "Union Apprenticeship",
        url: "https://www.ibew349.org/?page=Apprenticeship&zone=%2Funionactive%2Fview_page.cfm",
        provider: "IBEW Local 349",
        duration: "3–5 years (scope dependent)",
        cost: "Paid training",
        highlights: ["Earn while you learn", "Benefits"]
      }
    ]
  },
// --- ADD THESE KEYS UNDER CURATED_APPRENTICESHIPS ---

solar_installer: {
  CA: [
    {
      title: "GRID Alternatives — Solar Installation Training (IBT & SolarCorps)",
      description: "Hands-on solar PV training for entry-level installers; short bootcamps and service fellowships with real rooftop installs.",
      location: "Statewide (various chapters), CA",
      type: "Trade School",
      url: "https://gridalternatives.org/program/solar-installation-training/",
      provider: "GRID Alternatives",
      duration: "Bootcamps & cohorts (varies by site)",
      cost: "Free/low-cost; some stipends available",
      highlights: ["Real installs", "Entry-level PV skills", "Job placement support"]
    }
  ],
  NY: [
    {
      title: "NYSERDA Clean Energy — Registered Apprenticeships & OJT",
      description: "State-supported clean energy apprenticeships and on-the-job training pathways with solar employers across New York.",
      location: "Statewide, NY",
      type: "Merit Shop",
      url: "https://www.nyserda.ny.gov/Residents-and-Homeowners/Clean-Energy-Training-and-Jobs/Clean-Energy-Workforce/Apprenticeships",
      provider: "NYSERDA & registered sponsors",
      duration: "Varies by sponsor (typically 1–4 years)",
      cost: "Paid apprenticeship / OJT",
      highlights: ["Earn while you learn", "Multiple regions", "Employer network"]
    }
  ],
  TX: [
    {
      title: "Austin Community College — Solar Photovoltaic Systems",
      description: "PV system design/installation coursework and NABCEP-aligned training via Continuing Education.",
      location: "Austin, TX",
      type: "Community College",
      url: "https://continue.austincc.edu/search?keyword=solar",
      provider: "Austin Community College",
      duration: "Short course series (≈1 semester)",
      cost: "Tuition (varies by course)",
      highlights: ["NABCEP prep", "Hands-on labs", "Evening/weekend options"]
    }
  ],
  FL: [
    {
      title: "Florida Solar Energy Center (UCF) — Solar Training",
      description: "State’s flagship solar training center offering PV associate prep, code & design courses (online + in-person).",
      location: "Cocoa/Statewide, FL",
      type: "Trade School",
      url: "https://energyresearch.ucf.edu/fsec/course-schedule/",
      provider: "Florida Solar Energy Center (UCF)",
      duration: "Short courses (1–5 days; varies)",
      cost: "Course-based fees",
      highlights: ["PV fundamentals", "Code & safety", "Credential prep"]
    }
  ]
},

auto_mechanic: {
  CA: [
    {
      title: "Cypress College — Toyota T-TEN (A.S.)",
      description: "Manufacturer-backed program with paid co-op at Toyota/Lexus dealers and college coursework toward an A.S.",
      location: "Cypress, CA",
      type: "Community College",
      url: "https://www.cypresscollege.edu/academics/automotive-technology/",
      provider: "Toyota T-TEN at Cypress College",
      duration: "2 years",
      cost: "Tuition; paid dealer co-op",
      highlights: ["Earn while you learn", "Toyota/Lexus certifications", "ASE-aligned"]
    }
  ],
  NY: [
    {
      title: "Monroe Community College — GM ASEP (AAS)",
      description: "Alternating classroom and paid dealership experience to become a GM-certified technician.",
      location: "Rochester, NY",
      type: "Community College",
      url: "https://www.monroecc.edu/depts/autotech/gm-asep/",
      provider: "GM ASEP at MCC",
      duration: "2 years",
      cost: "Tuition; paid dealership OJT",
      highlights: ["Paid OJT", "GM certifications", "ASE Education Foundation accredited"]
    }
  ],
  TX: [
    {
      title: "San Jacinto College — GM ASEP (AAS)",
      description: "ASE Education Foundation–accredited AAS with alternating paid GM dealership training.",
      location: "La Porte (Houston area), TX",
      type: "Community College",
      url: "https://publications.sanjac.edu/areas-study/construction-industry-manufacturing-transportation/auto-tech-gm-asep-aas/",
      provider: "San Jacinto College (GM ASEP)",
      duration: "2 years",
      cost: "Tuition; paid dealer co-op",
      highlights: ["Dealer-sponsored OJT", "Latest GM platforms", "Internship capstone"]
    }
  ],
  FL: [
    {
      title: "Palm Beach State College — Toyota T-TEN (A.S.)",
      description: "Toyota/Lexus technician pathway combining college coursework and paid dealer rotations.",
      location: "Lake Worth, FL",
      type: "Community College",
      url: "https://www.palmbeachstate.edu/programs/automotive/toyota-tten.aspx",
      provider: "Toyota T-TEN at PBSC",
      duration: "2 years",
      cost: "Tuition; paid dealer co-op",
      highlights: ["Manufacturer training", "Job placement support", "ASE prep"]
    }
  ]
},

welder: {
  CA: [
    {
      title: "Iron Workers Local 433 — Apprenticeship",
      description: "Four-year union apprenticeship (structural/ornamental) with welding certifications and benefits.",
      location: "Greater Los Angeles, CA",
      type: "Union Apprenticeship",
      url: "https://ironworkers433.org/",
      provider: "Iron Workers Local 433 JATC",
      duration: "4 years",
      cost: "Paid apprenticeship",
      highlights: ["Welding certs", "Health & pension", "Safety training"]
    }
  ],
  NY: [
    {
      title: "Iron Workers Locals 40 & 361 — JATC Apprenticeship",
      description: "Registered apprenticeship for NYC ironworkers including structural welding and rigging.",
      location: "New York City, NY",
      type: "Union Apprenticeship",
      url: "https://nycironworkers.org/iron-workers-locals-40-361-training-facility/",
      provider: "Locals 40 & 361 JATC",
      duration: "≈4 years",
      cost: "Paid apprenticeship",
      highlights: ["Welding & rigging", "NYSDOL registered", "Benefits package"]
    }
  ],
  TX: [
    {
      title: "Iron Workers Local 263 — JATC Apprenticeship",
      description: "Dallas–Fort Worth union program with welding tests, rigging, and structural steel.",
      location: "DFW, TX",
      type: "Union Apprenticeship",
      url: "https://www.ironworkerslocal263.org/",
      provider: "Iron Workers Local 263",
      duration: "≈4 years",
      cost: "Paid apprenticeship",
      highlights: ["Weld testing", "Safety certs", "Earn while you learn"]
    }
  ],
  FL: [
    {
      title: "Iron Workers Local 397 — JATC Apprenticeship",
      description: "Tampa Bay program including pre-apprenticeship orientation and a 4-year state-accredited apprenticeship.",
      location: "Tampa, FL",
      type: "Union Apprenticeship",
      url: "https://iwl397.com/apprenticeship.aspx",
      provider: "Iron Workers Local 397",
      duration: "4 years",
      cost: "Paid apprenticeship",
      highlights: ["OSHA training", "Welding shop access", "Journeyman upgrade"]
    }
  ]
},

home_inspector: {
  CA: [
    {
      title: "InterNACHI — California Home Inspector Training (Online)",
      description: "Self-paced training, exams, and resources for home inspectors (CA has no state license).",
      location: "Online/Statewide, CA",
      type: "Trade School",
      url: "https://www.nachi.org/licensing-and-certification",
      provider: "InterNACHI School",
      duration: "Self-paced (online)",
      cost: "Membership includes courses",
      highlights: ["Exam prep", "Report templates", "Business resources"]
    }
  ],
  NY: [
    {
      title: "ICA School — New York 140-Hour Home Inspector Program",
      description: "State-approved 100-hour class + 40-hour field training to meet NY licensing requirements.",
      location: "Statewide (multiple cities), NY",
      type: "Trade School",
      url: "https://icaschool.com/state-licensing/new-york/",
      provider: "Inspection Certification Associates (ICA)",
      duration: "140 hours (100 class + 40 field)",
      cost: "Course tuition",
      highlights: ["NY DOS compliant", "Field ride-alongs", "NHIE prep"]
    }
  ],
  TX: [
    {
      title: "ICA — Texas Home Inspector Course (TREC-Approved)",
      description: "Qualifying education for Apprentice/Real Estate/Professional Inspector pathways per TREC.",
      location: "Online/Statewide, TX",
      type: "Trade School",
      url: "https://icaschool.com/state-licensing/texas/",
      provider: "ICA (TREC-approved provider)",
      duration: "Varies by license path",
      cost: "Course tuition",
      highlights: ["TREC QE provider", "Sponsor network", "Exam prep"]
    }
  ],
  FL: [
    {
      title: "Gold Coast Schools — Florida Home Inspector Pre-License (120 hrs)",
      description: "DBPR-approved 120-hour pre-licensing with hands-on components and exam prep.",
      location: "South Florida + Online, FL",
      type: "Trade School",
      url: "https://goldcoastschools.com/courses/construction/florida-home-inspector-pre-license-course/",
      provider: "Gold Coast Schools",
      duration: "120 hours",
      cost: "Course tuition",
      highlights: ["DBPR-approved", "Hands-on labs", "State exam prep"]
    }
  ]
},

landscaper: {
  CA: [
    {
      title: "NALP — Landscape Management Apprenticeship (Employer-Sponsored)",
      description: "US DOL-registered program delivered with participating CA landscape companies.",
      location: "Employer sites statewide, CA",
      type: "Merit Shop",
      url: "https://www.landscapeprofessionals.org/Apprenticeship/Apprenticeship/LandscapeApprenticeship.aspx",
      provider: "National Association of Landscape Professionals",
      duration: "2,000 OJT hours + 144+ related instruction",
      cost: "Paid apprenticeship",
      highlights: ["Install & maintenance", "Irrigation basics", "Portable credential"]
    }
  ],
  NY: [
    {
      title: "NALP — Landscape Management Apprenticeship (NY Employers)",
      description: "Earn-and-learn pathway with NY landscape firms; classroom via NALP online modules.",
      location: "Employer sites statewide, NY",
      type: "Merit Shop",
      url: "https://www.landscapeindustrycareers.org/job-board/landscape-apprenticeship-program/",
      provider: "NALP + participating employers",
      duration: "2,000 OJT hours + related instruction",
      cost: "Paid apprenticeship",
      highlights: ["Earn wage increases", "College-credit options", "DOL credential"]
    }
  ],
  TX: [
    {
      title: "Texas Nursery & Landscape Association — Landscape Technician Apprenticeship",
      description: "State industry association pathway combining OJT with classroom instruction.",
      location: "Employer sites statewide, TX",
      type: "Merit Shop",
      url: "https://www.tnlaonline.org/apprenticeship/",
      provider: "TNLA (with employer sponsors)",
      duration: "Varies by employer (typically 2,000 OJT hrs + classes)",
      cost: "Paid apprenticeship",
      highlights: ["TNLA curriculum", "Irrigation & maintenance", "Industry credential"]
    }
  ],
  FL: [
    {
      title: "FNGLA — Nursery & Landscape Apprenticeship",
      description: "Florida’s registered apprenticeship with tracks for Landscape, Irrigation, and Horticulture Technicians.",
      location: "Employer sites statewide, FL",
      type: "Merit Shop",
      url: "https://fngla.org/professional-growth/apprenticeship",
      provider: "Florida Nursery, Growers & Landscape Association",
      duration: "OJT + classroom (varies by track)",
      cost: "Paid apprenticeship",
      highlights: ["Multiple tracks", "Statewide employers", "DOL credential"]
    }
  ]
},

appliance_repair: {
  CA: [
    {
      title: "Los Medanos College — Appliance Service Technology",
      description: "College certificate program covering major appliance diagnostics and repair.",
      location: "Pittsburg, CA",
      type: "Community College",
      url: "https://www.losmedanos.edu/ast/",
      provider: "Los Medanos College",
      duration: "Certificate (length varies by plan)",
      cost: "Tuition",
      highlights: ["Hands-on labs", "Manufacturer partnerships", "Job placement support"]
    }
  ],
  NY: [
    {
      title: "Hempstead Adult & Continuing Education — Major Appliance Repair",
      description: "Adult education course focusing on common household appliance servicing.",
      location: "Hempstead, NY",
      type: "Trade School",
      url: "https://www.hempsteadschools.org/page/major-appliance-repair",
      provider: "Hempstead UFSD Adult & Continuing Education",
      duration: "Course series (evenings; varies)",
      cost: "Course fee",
      highlights: ["Major appliances", "Hands-on practice", "Entry-level prep"]
    }
  ],
  TX: [
    {
      title: "Dyer Appliance Academy — Core Appliance Repair",
      description: "Intensive hands-on academy training for residential appliance diagnostics and repair.",
      location: "Arlington, TX",
      type: "Trade School",
      url: "https://www.dyerinstitute.com/",
      provider: "Dyer Appliance Academy",
      duration: "Bootcamp (multi-week; varies)",
      cost: "Program tuition",
      highlights: ["Shop labs", "Industry instructors", "Job leads"]
    }
  ],
  FL: [
    {
      title: "Miami Lakes Educational Center — Major Appliance & Refrigeration",
      description: "Career/Technical program covering major appliance and refrigeration fundamentals.",
      location: "Miami Lakes, FL",
      type: "Trade School",
      url: "https://www.mlec.edu/adult-education/programs",
      provider: "Miami Lakes Educational Center & Technical College",
      duration: "Program (length varies by cohort)",
      cost: "Tuition/fees",
      highlights: ["Hands-on shop", "Refrigeration basics", "Local employer links"]
    }
  ]
},

locksmith: {
  CA: [
    {
      title: "California Institute of Locksmithing — Locksmith Training",
      description: "Established locksmith school offering in-class and live online training from fundamentals to advanced.",
      location: "Commerce/Online, CA",
      type: "Trade School",
      url: "https://lock411.thinkific.com/",
      provider: "California Institute of Locksmithing",
      duration: "Short courses to multi-week",
      cost: "Course tuition",
      highlights: ["Hands-on practice", "Automotive/residential/commercial tracks", "Business skills"]
    }
  ],
  NY: [
    {
      title: "Charles Stuart School — Locksmithing",
      description: "Queens-based locksmith program with multiple course levels from basic to advanced.",
      location: "Queens (NYC), NY",
      type: "Trade School",
      url: "https://www.charlesstuartschool.com/lock/curriculum/",
      provider: "Charles Stuart School",
      duration: "Modular courses (days/evenings)",
      cost: "Course tuition",
      highlights: ["Basic → advanced", "Automotive/electronic options", "Certificate of completion"]
    }
  ],
  TX: [
    {
      title: "ALOA Training Center — Locksmith Fundamentals & CE",
      description: "Dallas training center of the national locksmith association with 5-day fundamentals and specialty courses.",
      location: "Dallas, TX",
      type: "Trade School",
      url: "https://www.aloa.org/education",
      provider: "ALOA Security Professionals Association",
      duration: "5-day intensives + CE (varies)",
      cost: "Course tuition",
      highlights: ["Nationally recognized", "Cert pathways (RL/CRL/CPL/CML/CAL)", "Hands-on labs"]
    }
  ],
  FL: [
    {
      title: "The Locksmith School — Locksmith Training",
      description: "Hands-on locksmith classes offered in Tampa with instruction across residential, commercial, and automotive topics.",
      location: "Tampa, FL",
      type: "Trade School",
      url: "https://thelocksmithschool.net/location/tampa-florida-locksmith-training/",
      provider: "The Locksmith School",
      duration: "Short courses/bootcamps",
      cost: "Course tuition",
      highlights: ["Practical skills", "Small cohorts", "Business guidance"]
    }
  ]
},

pest_control: {
  CA: [
    {
      title: "Revolution National Pest Council — Pest Control Apprenticeship",
      description: "State-listed apprenticeship/bootcamp preparing techs for CA structural pest roles with job placement support.",
      location: "Carson/Los Angeles, CA",
      type: "Trade School",
      url: "https://www.revolutionnationalpestcouncil.com/",
      provider: "Revolution National Pest Council",
      duration: "≈10 weeks (400 hours) or as posted",
      cost: "Often grant-funded (WIOA/VA eligible)",
      highlights: ["Field training", "Exam prep", "Placement assistance"]
    }
  ],
  NY: [
    {
      title: "Cornell Cooperative Extension — Pesticide Applicator Certification Training",
      description: "Statewide manuals and courses to prepare for NYSDEC applicator/technician exams (structural & landscape categories).",
      location: "Statewide/Online, NY",
      type: "Trade School",
      url: "https://psep.cce.cornell.edu/certification/",
      provider: "CCE Pesticide Safety Education Program",
      duration: "Self-paced + class sessions (varies)",
      cost: "Manuals & course fees",
      highlights: ["Exam prep", "Recertification options", "NYSDEC guidance"]
    }
  ],
  TX: [
    {
      title: "Texas Dept. of Agriculture — Structural Pest Control Apprentice + 20-Hour Training",
      description: "Register as an apprentice and complete the required 20-hour technician training (providers include Texas A&M AgriLife).",
      location: "Statewide, TX",
      type: "Merit Shop",
      url: "https://texasagriculture.gov/Regulatory-Programs/Pesticides/Structural-Pest-Control-Service/Structural-Pest-Control-Licensing/SPCS-Technician-and-Apprentice-Licensing",
      provider: "Texas Department of Agriculture (SPCS)",
      duration: "Apprentice year + 20 classroom hrs + OJT",
      cost: "State fees + course tuition",
      highlights: ["Clear license path", "Approved providers", "Employer OJT"]
    }
  ],
  FL: [
    {
      title: "UF/IFAS Extension — Pest Control & Pesticide Licensing Training",
      description: "University extension courses and CEUs aligned with FDACS licensing requirements for structural and landscape categories.",
      location: "Statewide/Online, FL",
      type: "Trade School",
      url: "https://sfyl.ifas.ufl.edu/online-learning-opportunities/pest-control--pesticide-licensing/",
      provider: "University of Florida IFAS Extension",
      duration: "Short courses & CEUs (varies)",
      cost: "Course/CEU fees",
      highlights: ["Exam prep", "CEUs", "Multiple categories"]
    }
  ]
},

construction_pm: {
  CA: [
    {
      title: "AGC of California — Project Manager Development & Certificates",
      description: "Construction-specific PM courses (PMDP, planning & scheduling certificate) offered statewide & virtually.",
      location: "Statewide/Virtual, CA",
      type: "Merit Shop",
      url: "https://www.agc-ca.org/training-education/",
      provider: "Associated General Contractors of California",
      duration: "Modules & certificates (12–40 hrs each)",
      cost: "Course tuition",
      highlights: ["Construction-focused", "Industry instructors", "Member discounts"]
    }
  ],
  NY: [
    {
      title: "LaGuardia Community College — Construction Project Management Certificate",
      description: "Five-course continuing education certificate covering estimating, scheduling, and construction operations.",
      location: "Queens (NYC), NY",
      type: "Community College",
      url: "https://www.laguardia.edu/ce/career-skills-training/construction-project-management/",
      provider: "CUNY LaGuardia CE",
      duration: "Five courses (varies by term)",
      cost: "Course tuition",
      highlights: ["Evening options", "Certificate of completion", "Industry-aligned"]
    }
  ],
  TX: [
    {
      title: "AGC Houston — Project Manager Development Program (AGC Edge)",
      description: "40-hour, five-unit construction PM program delivered virtually or locally through AGC chapters.",
      location: "Houston/Virtual, TX",
      type: "Merit Shop",
      url: "https://members.agchouston.org/calendar/Details/agc-edge-project-manager-development-program-virtual-training-1234537?sourceTypeId=Website",
      provider: "AGC Houston (AGC of America)",
      duration: "≈40 hours (5 units)",
      cost: "Program tuition",
      highlights: ["Contractor-built curriculum", "Interactive cohort", "National credential"]
    }
  ],
  FL: [
    {
      title: "ABC Central Florida — Project & Construction Management",
      description: "Classes on construction management processes with NCCER-aligned training for working professionals.",
      location: "Orlando, FL",
      type: "Merit Shop",
      url: "https://abccentralflorida.com/training-development/project-construction-management/",
      provider: "Associated Builders & Contractors — Central Florida",
      duration: "Short courses (varies by schedule)",
      cost: "Course tuition",
      highlights: ["Evening classes", "Contractor network", "NCCER credentials"]
    }
  ]
},

// --- ADD THESE KEYS UNDER CURATED_APPRENTICESHIPS ---

solar_installer: {
  CA: [
    {
      title: "GRID Alternatives — Solar Installation Training (IBT & SolarCorps)",
      description: "Hands-on solar PV training for entry-level installers; short bootcamps and service fellowships with real rooftop installs.",
      location: "Statewide (various chapters), CA",
      type: "Trade School",
      url: "https://gridalternatives.org/program/solar-installation-training/",
      provider: "GRID Alternatives",
      duration: "Bootcamps & cohorts (varies by site)",
      cost: "Free/low-cost; some stipends available",
      highlights: ["Real installs", "Entry-level PV skills", "Job placement support"]
    }
  ],
  NY: [
    {
      title: "NYSERDA Clean Energy — Registered Apprenticeships & OJT",
      description: "State-supported clean energy apprenticeships and on-the-job training pathways with solar employers across New York.",
      location: "Statewide, NY",
      type: "Merit Shop",
      url: "https://www.nyserda.ny.gov/Residents-and-Homeowners/Clean-Energy-Training-and-Jobs/Clean-Energy-Workforce/Apprenticeships",
      provider: "NYSERDA & registered sponsors",
      duration: "Varies by sponsor (typically 1–4 years)",
      cost: "Paid apprenticeship / OJT",
      highlights: ["Earn while you learn", "Multiple regions", "Employer network"]
    }
  ],
  TX: [
    {
      title: "Austin Community College — Solar Photovoltaic Systems",
      description: "PV system design/installation coursework and NABCEP-aligned training via Continuing Education.",
      location: "Austin, TX",
      type: "Community College",
      url: "https://continue.austincc.edu/search?keyword=solar",
      provider: "Austin Community College",
      duration: "Short course series (≈1 semester)",
      cost: "Tuition (varies by course)",
      highlights: ["NABCEP prep", "Hands-on labs", "Evening/weekend options"]
    }
  ],
  FL: [
    {
      title: "Florida Solar Energy Center (UCF) — Solar Training",
      description: "State’s flagship solar training center offering PV associate prep, code & design courses (online + in-person).",
      location: "Cocoa/Statewide, FL",
      type: "Trade School",
      url: "https://energyresearch.ucf.edu/fsec/course-schedule/",
      provider: "Florida Solar Energy Center (UCF)",
      duration: "Short courses (1–5 days; varies)",
      cost: "Course-based fees",
      highlights: ["PV fundamentals", "Code & safety", "Credential prep"]
    }
  ]
},

auto_mechanic: {
  CA: [
    {
      title: "Cypress College — Toyota T-TEN (A.S.)",
      description: "Manufacturer-backed program with paid co-op at Toyota/Lexus dealers and college coursework toward an A.S.",
      location: "Cypress, CA",
      type: "Community College",
      url: "https://www.cypresscollege.edu/academics/automotive-technology/",
      provider: "Toyota T-TEN at Cypress College",
      duration: "2 years",
      cost: "Tuition; paid dealer co-op",
      highlights: ["Earn while you learn", "Toyota/Lexus certifications", "ASE-aligned"]
    }
  ],
  NY: [
    {
      title: "Monroe Community College — GM ASEP (AAS)",
      description: "Alternating classroom and paid dealership experience to become a GM-certified technician.",
      location: "Rochester, NY",
      type: "Community College",
      url: "https://www.monroecc.edu/depts/autotech/gm-asep/",
      provider: "GM ASEP at MCC",
      duration: "2 years",
      cost: "Tuition; paid dealership OJT",
      highlights: ["Paid OJT", "GM certifications", "ASE Education Foundation accredited"]
    }
  ],
  TX: [
    {
      title: "San Jacinto College — GM ASEP (AAS)",
      description: "ASE Education Foundation–accredited AAS with alternating paid GM dealership training.",
      location: "La Porte (Houston area), TX",
      type: "Community College",
      url: "https://publications.sanjac.edu/areas-study/construction-industry-manufacturing-transportation/auto-tech-gm-asep-aas/",
      provider: "San Jacinto College (GM ASEP)",
      duration: "2 years",
      cost: "Tuition; paid dealer co-op",
      highlights: ["Dealer-sponsored OJT", "Latest GM platforms", "Internship capstone"]
    }
  ],
  FL: [
    {
      title: "Palm Beach State College — Toyota T-TEN (A.S.)",
      description: "Toyota/Lexus technician pathway combining college coursework and paid dealer rotations.",
      location: "Lake Worth, FL",
      type: "Community College",
      url: "https://www.palmbeachstate.edu/programs/automotive/toyota-tten.aspx",
      provider: "Toyota T-TEN at PBSC",
      duration: "2 years",
      cost: "Tuition; paid dealer co-op",
      highlights: ["Manufacturer training", "Job placement support", "ASE prep"]
    }
  ]
},

welder: {
  CA: [
    {
      title: "Iron Workers Local 433 — Apprenticeship",
      description: "Four-year union apprenticeship (structural/ornamental) with welding certifications and benefits.",
      location: "Greater Los Angeles, CA",
      type: "Union Apprenticeship",
      url: "https://ironworkers433.org/",
      provider: "Iron Workers Local 433 JATC",
      duration: "4 years",
      cost: "Paid apprenticeship",
      highlights: ["Welding certs", "Health & pension", "Safety training"]
    }
  ],
  NY: [
    {
      title: "Iron Workers Locals 40 & 361 — JATC Apprenticeship",
      description: "Registered apprenticeship for NYC ironworkers including structural welding and rigging.",
      location: "New York City, NY",
      type: "Union Apprenticeship",
      url: "https://nycironworkers.org/iron-workers-locals-40-361-training-facility/",
      provider: "Locals 40 & 361 JATC",
      duration: "≈4 years",
      cost: "Paid apprenticeship",
      highlights: ["Welding & rigging", "NYSDOL registered", "Benefits package"]
    }
  ],
  TX: [
    {
      title: "Iron Workers Local 263 — JATC Apprenticeship",
      description: "Dallas–Fort Worth union program with welding tests, rigging, and structural steel.",
      location: "DFW, TX",
      type: "Union Apprenticeship",
      url: "https://www.ironworkerslocal263.org/",
      provider: "Iron Workers Local 263",
      duration: "≈4 years",
      cost: "Paid apprenticeship",
      highlights: ["Weld testing", "Safety certs", "Earn while you learn"]
    }
  ],
  FL: [
    {
      title: "Iron Workers Local 397 — JATC Apprenticeship",
      description: "Tampa Bay program including pre-apprenticeship orientation and a 4-year state-accredited apprenticeship.",
      location: "Tampa, FL",
      type: "Union Apprenticeship",
      url: "https://iwl397.com/apprenticeship.aspx",
      provider: "Iron Workers Local 397",
      duration: "4 years",
      cost: "Paid apprenticeship",
      highlights: ["OSHA training", "Welding shop access", "Journeyman upgrade"]
    }
  ]
},

home_inspector: {
  CA: [
    {
      title: "InterNACHI — California Home Inspector Training (Online)",
      description: "Self-paced training, exams, and resources for home inspectors (CA has no state license).",
      location: "Online/Statewide, CA",
      type: "Trade School",
      url: "https://www.nachi.org/licensing-and-certification",
      provider: "InterNACHI School",
      duration: "Self-paced (online)",
      cost: "Membership includes courses",
      highlights: ["Exam prep", "Report templates", "Business resources"]
    }
  ],
  NY: [
    {
      title: "ICA School — New York 140-Hour Home Inspector Program",
      description: "State-approved 100-hour class + 40-hour field training to meet NY licensing requirements.",
      location: "Statewide (multiple cities), NY",
      type: "Trade School",
      url: "https://icaschool.com/state-licensing/new-york/",
      provider: "Inspection Certification Associates (ICA)",
      duration: "140 hours (100 class + 40 field)",
      cost: "Course tuition",
      highlights: ["NY DOS compliant", "Field ride-alongs", "NHIE prep"]
    }
  ],
  TX: [
    {
      title: "ICA — Texas Home Inspector Course (TREC-Approved)",
      description: "Qualifying education for Apprentice/Real Estate/Professional Inspector pathways per TREC.",
      location: "Online/Statewide, TX",
      type: "Trade School",
      url: "https://icaschool.com/state-licensing/texas/",
      provider: "ICA (TREC-approved provider)",
      duration: "Varies by license path",
      cost: "Course tuition",
      highlights: ["TREC QE provider", "Sponsor network", "Exam prep"]
    }
  ],
  FL: [
    {
      title: "Gold Coast Schools — Florida Home Inspector Pre-License (120 hrs)",
      description: "DBPR-approved 120-hour pre-licensing with hands-on components and exam prep.",
      location: "South Florida + Online, FL",
      type: "Trade School",
      url: "https://goldcoastschools.com/courses/construction/florida-home-inspector-pre-license-course/",
      provider: "Gold Coast Schools",
      duration: "120 hours",
      cost: "Course tuition",
      highlights: ["DBPR-approved", "Hands-on labs", "State exam prep"]
    }
  ]
},

landscaper: {
  CA: [
    {
      title: "NALP — Landscape Management Apprenticeship (Employer-Sponsored)",
      description: "US DOL-registered program delivered with participating CA landscape companies.",
      location: "Employer sites statewide, CA",
      type: "Merit Shop",
      url: "https://www.landscapeprofessionals.org/Apprenticeship/Apprenticeship/LandscapeApprenticeship.aspx",
      provider: "National Association of Landscape Professionals",
      duration: "2,000 OJT hours + 144+ related instruction",
      cost: "Paid apprenticeship",
      highlights: ["Install & maintenance", "Irrigation basics", "Portable credential"]
    }
  ],
  NY: [
    {
      title: "NALP — Landscape Management Apprenticeship (NY Employers)",
      description: "Earn-and-learn pathway with NY landscape firms; classroom via NALP online modules.",
      location: "Employer sites statewide, NY",
      type: "Merit Shop",
      url: "https://www.landscapeindustrycareers.org/job-board/landscape-apprenticeship-program/",
      provider: "NALP + participating employers",
      duration: "2,000 OJT hours + related instruction",
      cost: "Paid apprenticeship",
      highlights: ["Earn wage increases", "College-credit options", "DOL credential"]
    }
  ],
  TX: [
    {
      title: "Texas Nursery & Landscape Association — Landscape Technician Apprenticeship",
      description: "State industry association pathway combining OJT with classroom instruction.",
      location: "Employer sites statewide, TX",
      type: "Merit Shop",
      url: "https://www.tnlaonline.org/apprenticeship/",
      provider: "TNLA (with employer sponsors)",
      duration: "Varies by employer (typically 2,000 OJT hrs + classes)",
      cost: "Paid apprenticeship",
      highlights: ["TNLA curriculum", "Irrigation & maintenance", "Industry credential"]
    }
  ],
  FL: [
    {
      title: "FNGLA — Nursery & Landscape Apprenticeship",
      description: "Florida’s registered apprenticeship with tracks for Landscape, Irrigation, and Horticulture Technicians.",
      location: "Employer sites statewide, FL",
      type: "Merit Shop",
      url: "https://fngla.org/professional-growth/apprenticeship",
      provider: "Florida Nursery, Growers & Landscape Association",
      duration: "OJT + classroom (varies by track)",
      cost: "Paid apprenticeship",
      highlights: ["Multiple tracks", "Statewide employers", "DOL credential"]
    }
  ]
},

appliance_repair: {
  CA: [
    {
      title: "Los Medanos College — Appliance Service Technology",
      description: "College certificate program covering major appliance diagnostics and repair.",
      location: "Pittsburg, CA",
      type: "Community College",
      url: "https://www.losmedanos.edu/ast/",
      provider: "Los Medanos College",
      duration: "Certificate (length varies by plan)",
      cost: "Tuition",
      highlights: ["Hands-on labs", "Manufacturer partnerships", "Job placement support"]
    }
  ],
  NY: [
    {
      title: "Hempstead Adult & Continuing Education — Major Appliance Repair",
      description: "Adult education course focusing on common household appliance servicing.",
      location: "Hempstead, NY",
      type: "Trade School",
      url: "https://www.hempsteadschools.org/page/major-appliance-repair",
      provider: "Hempstead UFSD Adult & Continuing Education",
      duration: "Course series (evenings; varies)",
      cost: "Course fee",
      highlights: ["Major appliances", "Hands-on practice", "Entry-level prep"]
    }
  ],
  TX: [
    {
      title: "Dyer Appliance Academy — Core Appliance Repair",
      description: "Intensive hands-on academy training for residential appliance diagnostics and repair.",
      location: "Arlington, TX",
      type: "Trade School",
      url: "https://www.dyerinstitute.com/",
      provider: "Dyer Appliance Academy",
      duration: "Bootcamp (multi-week; varies)",
      cost: "Program tuition",
      highlights: ["Shop labs", "Industry instructors", "Job leads"]
    }
  ],
  FL: [
    {
      title: "Miami Lakes Educational Center — Major Appliance & Refrigeration",
      description: "Career/Technical program covering major appliance and refrigeration fundamentals.",
      location: "Miami Lakes, FL",
      type: "Trade School",
      url: "https://www.mlec.edu/adult-education/programs",
      provider: "Miami Lakes Educational Center & Technical College",
      duration: "Program (length varies by cohort)",
      cost: "Tuition/fees",
      highlights: ["Hands-on shop", "Refrigeration basics", "Local employer links"]
    }
  ]
},

locksmith: {
  CA: [
    {
      title: "California Institute of Locksmithing — Locksmith Training",
      description: "Established locksmith school offering in-class and live online training from fundamentals to advanced.",
      location: "Commerce/Online, CA",
      type: "Trade School",
      url: "https://lock411.thinkific.com/",
      provider: "California Institute of Locksmithing",
      duration: "Short courses to multi-week",
      cost: "Course tuition",
      highlights: ["Hands-on practice", "Automotive/residential/commercial tracks", "Business skills"]
    }
  ],
  NY: [
    {
      title: "Charles Stuart School — Locksmithing",
      description: "Queens-based locksmith program with multiple course levels from basic to advanced.",
      location: "Queens (NYC), NY",
      type: "Trade School",
      url: "https://www.charlesstuartschool.com/lock/curriculum/",
      provider: "Charles Stuart School",
      duration: "Modular courses (days/evenings)",
      cost: "Course tuition",
      highlights: ["Basic → advanced", "Automotive/electronic options", "Certificate of completion"]
    }
  ],
  TX: [
    {
      title: "ALOA Training Center — Locksmith Fundamentals & CE",
      description: "Dallas training center of the national locksmith association with 5-day fundamentals and specialty courses.",
      location: "Dallas, TX",
      type: "Trade School",
      url: "https://www.aloa.org/education",
      provider: "ALOA Security Professionals Association",
      duration: "5-day intensives + CE (varies)",
      cost: "Course tuition",
      highlights: ["Nationally recognized", "Cert pathways (RL/CRL/CPL/CML/CAL)", "Hands-on labs"]
    }
  ],
  FL: [
    {
      title: "The Locksmith School — Locksmith Training",
      description: "Hands-on locksmith classes offered in Tampa with instruction across residential, commercial, and automotive topics.",
      location: "Tampa, FL",
      type: "Trade School",
      url: "https://thelocksmithschool.net/location/tampa-florida-locksmith-training/",
      provider: "The Locksmith School",
      duration: "Short courses/bootcamps",
      cost: "Course tuition",
      highlights: ["Practical skills", "Small cohorts", "Business guidance"]
    }
  ]
},

pest_control: {
  CA: [
    {
      title: "Revolution National Pest Council — Pest Control Apprenticeship",
      description: "State-listed apprenticeship/bootcamp preparing techs for CA structural pest roles with job placement support.",
      location: "Carson/Los Angeles, CA",
      type: "Trade School",
      url: "https://www.revolutionnationalpestcouncil.com/",
      provider: "Revolution National Pest Council",
      duration: "≈10 weeks (400 hours) or as posted",
      cost: "Often grant-funded (WIOA/VA eligible)",
      highlights: ["Field training", "Exam prep", "Placement assistance"]
    }
  ],
  NY: [
    {
      title: "Cornell Cooperative Extension — Pesticide Applicator Certification Training",
      description: "Statewide manuals and courses to prepare for NYSDEC applicator/technician exams (structural & landscape categories).",
      location: "Statewide/Online, NY",
      type: "Trade School",
      url: "https://psep.cce.cornell.edu/certification/",
      provider: "CCE Pesticide Safety Education Program",
      duration: "Self-paced + class sessions (varies)",
      cost: "Manuals & course fees",
      highlights: ["Exam prep", "Recertification options", "NYSDEC guidance"]
    }
  ],
  TX: [
    {
      title: "Texas Dept. of Agriculture — Structural Pest Control Apprentice + 20-Hour Training",
      description: "Register as an apprentice and complete the required 20-hour technician training (providers include Texas A&M AgriLife).",
      location: "Statewide, TX",
      type: "Merit Shop",
      url: "https://texasagriculture.gov/Regulatory-Programs/Pesticides/Structural-Pest-Control-Service/Structural-Pest-Control-Licensing/SPCS-Technician-and-Apprentice-Licensing",
      provider: "Texas Department of Agriculture (SPCS)",
      duration: "Apprentice year + 20 classroom hrs + OJT",
      cost: "State fees + course tuition",
      highlights: ["Clear license path", "Approved providers", "Employer OJT"]
    }
  ],
  FL: [
    {
      title: "UF/IFAS Extension — Pest Control & Pesticide Licensing Training",
      description: "University extension courses and CEUs aligned with FDACS licensing requirements for structural and landscape categories.",
      location: "Statewide/Online, FL",
      type: "Trade School",
      url: "https://sfyl.ifas.ufl.edu/online-learning-opportunities/pest-control--pesticide-licensing/",
      provider: "University of Florida IFAS Extension",
      duration: "Short courses & CEUs (varies)",
      cost: "Course/CEU fees",
      highlights: ["Exam prep", "CEUs", "Multiple categories"]
    }
  ]
},

construction_pm: {
  CA: [
    {
      title: "AGC of California — Project Manager Development & Certificates",
      description: "Construction-specific PM courses (PMDP, planning & scheduling certificate) offered statewide & virtually.",
      location: "Statewide/Virtual, CA",
      type: "Merit Shop",
      url: "https://www.agc-ca.org/training-education/",
      provider: "Associated General Contractors of California",
      duration: "Modules & certificates (12–40 hrs each)",
      cost: "Course tuition",
      highlights: ["Construction-focused", "Industry instructors", "Member discounts"]
    }
  ],
  NY: [
    {
      title: "LaGuardia Community College — Construction Project Management Certificate",
      description: "Five-course continuing education certificate covering estimating, scheduling, and construction operations.",
      location: "Queens (NYC), NY",
      type: "Community College",
      url: "https://www.laguardia.edu/ce/career-skills-training/construction-project-management/",
      provider: "CUNY LaGuardia CE",
      duration: "Five courses (varies by term)",
      cost: "Course tuition",
      highlights: ["Evening options", "Certificate of completion", "Industry-aligned"]
    }
  ],
  TX: [
    {
      title: "AGC Houston — Project Manager Development Program (AGC Edge)",
      description: "40-hour, five-unit construction PM program delivered virtually or locally through AGC chapters.",
      location: "Houston/Virtual, TX",
      type: "Merit Shop",
      url: "https://members.agchouston.org/calendar/Details/agc-edge-project-manager-development-program-virtual-training-1234537?sourceTypeId=Website",
      provider: "AGC Houston (AGC of America)",
      duration: "≈40 hours (5 units)",
      cost: "Program tuition",
      highlights: ["Contractor-built curriculum", "Interactive cohort", "National credential"]
    }
  ],
  FL: [
    {
      title: "ABC Central Florida — Project & Construction Management",
      description: "Classes on construction management processes with NCCER-aligned training for working professionals.",
      location: "Orlando, FL",
      type: "Merit Shop",
      url: "https://abccentralflorida.com/training-development/project-construction-management/",
      provider: "Associated Builders & Contractors — Central Florida",
      duration: "Short courses (varies by schedule)",
      cost: "Course tuition",
      highlights: ["Evening classes", "Contractor network", "NCCER credentials"]
    }
  ]
}
}

// Career-specific search terms for better results
export const CAREER_SEARCH_TERMS = {
  electrician: [
    "electrical apprenticeship",
    "IBEW apprenticeship",
    "electrical training program",
    "electrician school"
  ],
  plumber: [
    "plumbing apprenticeship",
    "UA plumber training",
    "plumbing trade school",
    "pipefitter apprenticeship"
  ],
  hvac_technician: [
    "HVAC apprenticeship",
    "refrigeration training",
    "HVAC trade school",
    "air conditioning apprenticeship"
  ],
  carpenter: [
    "carpentry apprenticeship",
    "construction training",
    "woodworking program",
    "building trades school"
  ],
  welder: [
    "welding apprenticeship",
    "welding school",
    "AWS welding certification",
    "metal fabrication training"
  ],
  auto_mechanic: [
    "automotive apprenticeship",
    "mechanic training program",
    "automotive technology school",
    "ASE certification program"
  ],
  construction_pm: [
    "construction project management certificate",
    "AGC PMDP",
    "construction management training",
    "NCCER project management"
  ],
  solar_installer: [
    "solar installer training",
    "NABCEP PV associate",
    "solar apprenticeship",
    "photovoltaic installation course"
  ],
  home_inspector: [
    "home inspector pre-licensing",
    "InterNACHI training",
    "ASHI home inspection course",
    "NHIE exam prep"
  ],
  landscaper: [
    "landscape apprenticeship",
    "horticulture technician training",
    "irrigation technician course",
    "NALP apprenticeship"
  ],
  appliance_repair: [
    "appliance repair training",
    "major appliance technician course",
    "appliance repair school",
    "appliance technician certification"
  ],
  elevator_technician: [
    "elevator constructor apprenticeship",
    "IUEC apprenticeship",
    "NEIEP recruitment",
    "elevator technician training"
  ],
  locksmith: [
    "locksmith training course",
    "locksmith apprenticeship",
    "ALOA classes",
    "automotive locksmith training"
  ],
  pest_control: [
    "pest control technician training",
    "pesticide applicator certification",
    "structural pest control license",
    "pest management apprenticeship"
  ],
  telecom_installer: [
    "low voltage apprenticeship",
    "sound and communications apprenticeship",
    "BICSI installer training",
    "fiber optic technician course"
  ]
};

export const CAREER_ORGANIZATIONS = {
  electrician: [
    { name: "IBEW", url: "https://www.ibew.org", searchTerm: "IBEW Local apprenticeship" },
    { name: "IEC", url: "https://www.ieci.org", searchTerm: "IEC apprenticeship electrical" },
    { name: "ABC", url: "https://www.abc.org", searchTerm: "ABC electrical training" },
    { name: "NECA", url: "https://www.necanet.org", searchTerm: "NECA JATC apprenticeship" }
  ],

  plumber: [
    { name: "United Association (UA)", url: "https://www.ua.org", searchTerm: "UA Local plumber apprenticeship" },
    { name: "PHCC", url: "https://www.phccweb.org", searchTerm: "PHCC plumbing apprenticeship" },
    { name: "NCCER", url: "https://www.nccer.org", searchTerm: "NCCER plumbing training" }
  ],

  hvac_technician: [
    { name: "UA (HVACR)", url: "https://www.ua.org", searchTerm: "UA HVAC apprenticeship" },
    { name: "SMACNA", url: "https://www.smacna.org", searchTerm: "SMACNA training center" },
    { name: "ACCA", url: "https://www.acca.org", searchTerm: "ACCA HVAC training" },
    { name: "NATE", url: "https://www.natex.org", searchTerm: "NATE certification" }
  ],

  carpenter: [
    { name: "United Brotherhood of Carpenters", url: "https://www.carpenters.org", searchTerm: "carpenters union apprenticeship" },
    { name: "NCCER", url: "https://www.nccer.org", searchTerm: "NCCER carpentry training" },
    { name: "ABC", url: "https://www.abc.org", searchTerm: "ABC carpentry apprenticeship" }
  ],

  welder: [
    { name: "AWS (American Welding Society)", url: "https://www.aws.org", searchTerm: "AWS welding certification" },
    { name: "NCCER", url: "https://www.nccer.org", searchTerm: "NCCER welding training" },
    { name: "Ironworkers International", url: "https://www.ironworkers.org", searchTerm: "Ironworkers apprenticeship welding" }
  ],

  auto_mechanic: [
    { name: "ASE (Automotive Service Excellence)", url: "https://www.ase.com", searchTerm: "ASE certification" },
    { name: "ASE Education Foundation", url: "https://www.aseeducationfoundation.org", searchTerm: "ASE accredited automotive program" },
    { name: "Toyota T-TEN", url: "https://www.toyota.com/usa/tten", searchTerm: "Toyota T-TEN program" },
    { name: "GM ASEP", url: "https://www.gm.com/careers/students/graduates/asep", searchTerm: "GM ASEP program" }
  ],

  construction_pm: [
    { name: "AGC of America", url: "https://www.agc.org", searchTerm: "AGC PMDP" },
    { name: "ABC", url: "https://www.abc.org", searchTerm: "ABC project management training" },
    { name: "CMAA", url: "https://www.cmaanet.org", searchTerm: "CMAA construction management training" },
    { name: "PMI", url: "https://www.pmi.org", searchTerm: "PMI construction project management" }
  ],

  solar_installer: [
    { name: "NABCEP", url: "https://www.nabcep.org", searchTerm: "NABCEP PV associate" },
    { name: "IREC", url: "https://www.irecusa.org", searchTerm: "IREC accredited solar training" },
    { name: "SEIA", url: "https://www.seia.org", searchTerm: "SEIA workforce training" },
    { name: "Solar Energy International (SEI)", url: "https://www.solarenergy.org", searchTerm: "SEI solar training" }
  ],

  home_inspector: [
    { name: "InterNACHI", url: "https://www.nachi.org", searchTerm: "InterNACHI home inspector training" },
    { name: "ASHI", url: "https://www.homeinspector.org", searchTerm: "ASHI home inspector certification" },
    { name: "EBPHI / NHIE", url: "https://www.homeinspectionexam.org", searchTerm: "NHIE exam prep" }
  ],

  landscaper: [
    { name: "NALP", url: "https://www.landscapeprofessionals.org", searchTerm: "NALP apprenticeship" },
    { name: "Irrigation Association", url: "https://www.irrigation.org", searchTerm: "irrigation technician training" },
    { name: "ISA (Arborists)", url: "https://www.isa-arbor.com", searchTerm: "ISA arborist certification" }
  ],

  appliance_repair: [
    { name: "United Appliance Servicers Association (UASA)", url: "https://www.unitedservicers.com", searchTerm: "appliance repair training" },
    { name: "Professional Service Association (PSA)", url: "https://www.psaworld.com", searchTerm: "PSA training NASTeC" },
    { name: "Manufacturer Training (Brand Dealers)", url: "https://www.whirlpool.com/services/about-careers.html", searchTerm: "appliance manufacturer service training" }
  ],

  elevator_technician: [
    { name: "IUEC", url: "https://www.iuec.org", searchTerm: "IUEC apprenticeship" },
    { name: "NEIEP", url: "https://www.neiep.org", searchTerm: "NEIEP recruitment" },
    { name: "NAEC", url: "https://www.naec.org", searchTerm: "NAEC education training" }
  ],

  locksmith: [
    { name: "ALOA", url: "https://www.aloa.org", searchTerm: "ALOA locksmith classes" },
    { name: "SAVTA", url: "https://www.savta.org", searchTerm: "SAVTA safe technician training" },
    { name: "DHI (Door & Hardware Institute)", url: "https://www.dhi.org", searchTerm: "DHI access control training" }
  ],

  pest_control: [
    { name: "NPMA", url: "https://www.pestworld.org", searchTerm: "NPMA training apprenticeship" },
    { name: "PSEP (Extension Network)", url: "https://psep.us", searchTerm: "pesticide applicator training" },
    { name: "ESA A.C.E. Certification", url: "https://www.entocert.org", searchTerm: "Associate Certified Entomologist exam" }
  ],

  telecom_installer: [
    { name: "BICSI", url: "https://www.bicsi.org", searchTerm: "BICSI installer training" },
    { name: "The Fiber Optic Association (FOA)", url: "https://www.thefoa.org", searchTerm: "FOA CFOT training" },
    { name: "ETA International", url: "https://www.eta-i.org", searchTerm: "ETA fiber optics certification" }
  ]
};


// TODO (next batch): solar_installer, auto_mechanic, welder, home_inspector, landscaper, appliance_repair, locksmith, pest_control — for CA, NY, TX, FL.
