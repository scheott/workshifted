// File: src/data/learningPaths/plumber.js
export const plumberLearningPath = {
  career: "plumber",
  title: "Plumber Career Path",
  estimatedDuration: "6–12 months to first job; 4–5 years to full licensure",
  steps: [
    {
      id: 1,
      title: "Plumbing Fundamentals",
      description: "Get familiar with water systems, venting, and fixtures.",
      estimatedTime: "2–6 weeks",
      type: "education",
      required: true,
      resources: [
        {
          type: "course",
          title: "Plumbing Systems Design (Intro topics)",
          provider: "edX (various)",
          url: "https://www.edx.org/",
          duration: "4–8 weeks",
          cost: "Free audit",
          description: "Hydraulics and system basics to build foundation."
        },
        {
          type: "video",
          title: "This Old House – Plumbing Tutorials",
          provider: "This Old House",
          url: "https://www.thisoldhouse.com/plumbing",
          duration: "Self-paced",
          cost: "Free",
          description: "Hands-on repairs and installation demos."
        }
      ]
    },
    {
      id: 2,
      title: "Safety & Backflow",
      description: "Learn code concepts and earn a backflow tester credential.",
      estimatedTime: "1–3 weeks (course + exam)",
      type: "certification",
      required: true,
      resources: [
        {
          type: "certification",
          title: "Backflow Prevention Assembly Tester (ASSE 5110)",
          provider: "ASSE / IAPMO providers",
          url: "https://asse-plumbing.org/personnel-certification/backflow-prevention",
          duration: "3–5 days",
          cost: "Paid",
          description: "Nationally recognized backflow credential."
        },
        {
          type: "reference",
          title: "EPA Backflow Guidance",
          provider: "U.S. EPA",
          url: "https://www.epa.gov/dwreginfo/backflow-prevention-devices",
          duration: "2–4 hours",
          cost: "Free",
          description: "Regulatory guidance and best practices."
        }
      ]
    },
    {
      id: 3,
      title: "Join an Apprenticeship",
      description: "Earn while you learn with structured RTI + OJT.",
      estimatedTime: "2–6 weeks (application cycle varies)",
      type: "experience",
      required: true,
      resources: [
        {
          type: "application",
          title: "PHCC Academy (RTI for apprenticeships)",
          provider: "PHCC Educational Foundation",
          url: "https://www.phccweb.org/foundation/phcc-academy-plumbing-hvac-apprenticeship-courses/",
          duration: "4 years (RTI)",
          cost: "Paid (sponsor)",
          description: "DOL-recognized related training; pair with employer."
        },
        {
          type: "application",
          title: "Apprenticeship Finder (all programs)",
          provider: "Apprenticeship.gov",
          url: "https://www.apprenticeship.gov/apprenticeship-job-finder",
          duration: "Search tool",
          cost: "Free",
          description: "Find plumbing apprenticeships near you."
        }
      ]
    },
    {
      id: 4,
      title: "Licensing Path",
      description: "Track hours, pass journeyman exam, and add gas endorsements.",
      estimatedTime: "6–12 months (to exam eligibility varies by state)",
      type: "education",
      required: true,
      resources: [
        {
          type: "reference",
          title: "State Plumbing License Requirements",
          provider: "Your State Board",
          url: "https://www.google.com/search?q=state+plumbing+license+requirements",
          duration: "—",
          cost: "—",
          description: "Confirm hours, exams, and endorsements."
        },
        {
          type: "course",
          title: "IAPMO Code CEU Courses",
          provider: "IAPMO Learn",
          url: "https://www.iapmolearn.org/",
          duration: "Self-paced",
          cost: "Paid",
          description: "Code-focused CE for exam prep."
        }
      ]
    }
  ]
};
