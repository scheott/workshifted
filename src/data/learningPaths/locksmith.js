// File: src/data/learningPaths/locksmith.js
export const locksmithLearningPath = {
  career: "locksmith",
  title: "Locksmith Path",
  estimatedDuration: "2–6 months to steady service calls",
  steps: [
    {
      id: 1,
      title: "Mechanics & Ethics",
      description: "Learn pinning, impressioning, bypass, and legal/ethical rules.",
      estimatedTime: "2–4 weeks",
      type: "education",
      required: true,
      resources: [
        {
          type: "course",
          title: "ALOA Education & Training",
          provider: "ALOA Security Professionals",
          url: "https://www.aloa.org/education/",
          duration: "Varies",
          cost: "Paid",
          description: "Core locksmith skills and specialty courses."
        }
      ]
    },
    {
      id: 2,
      title: "Licensing (If Required)",
      description: "Some states require locksmith licensing or registration.",
      estimatedTime: "1–4 weeks",
      type: "certification",
      required: true,
      resources: [
        {
          type: "reference",
          title: "State Locksmith License Requirements",
          provider: "Your State",
          url: "https://www.google.com/search?q=locksmith+license+requirements+your+state",
          duration: "—",
          cost: "—",
          description: "Check ID/authorization rules and background checks."
        }
      ]
    },
    {
      id: 3,
      title: "Mobile Setup & Practice",
      description: "Build a mobile kit and practice common service scenarios.",
      estimatedTime: "2–6 weeks",
      type: "experience",
      required: false,
      resources: [
        {
          type: "networking",
          title: "Local Supplier / Distributor Accounts",
          provider: "Regional Security Distributors",
          url: "https://www.google.com/search?q=locksmith+distributor+near+me",
          duration: "—",
          cost: "Varies",
          description: "Access to blanks, cylinders, and hardware."
        }
      ]
    }
  ]
};
