// src/data/premiumContent/aiToolsDatabase.js - ENHANCED VERSION
export const AITOOLS_DB = {
  // === CORE/PRODUCTIVITY ===
  chatgpt: {
    name: "ChatGPT",
    label: "ChatGPT",
    purpose: "AI assistant for writing, analysis, coding, and complex problem-solving tasks",
    category: "AI Assistant",
    url: "https://chat.openai.com",
    pricing: "Free tier available, $20/month for Plus",
    useCase: {
      analyst: "Draft reports, analyze datasets, create financial models, automate calculations",
      manager: "Strategic planning, team communication, process optimization",
      developer: "Code generation, debugging, documentation, architecture planning",
      marketer: "Content creation, campaign ideas, customer persona development",
      default: "Writing, analysis, problem-solving, and task automation"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["API", "Browser Extension", "Mobile App"],
    tags: ["ai-assistant", "writing", "analysis", "coding"]
  },

  notion: {
    name: "Notion",
    label: "Notion", 
    purpose: "All-in-one workspace combining notes, databases, wikis, and project management",
    category: "Productivity",
    url: "https://notion.so",
    pricing: "Free tier available, $8/month per user for teams",
    useCase: {
      analyst: "Organize research, create knowledge bases, track project status, build dashboards",
      manager: "Team documentation, process workflows, meeting notes, OKR tracking",
      developer: "Technical documentation, API references, project planning",
      marketer: "Content calendars, campaign tracking, asset management",
      default: "Note-taking, project management, team collaboration"
    },
    difficulty: "Beginner",
    timeToValue: "1-2 weeks",
    integrations: ["Slack", "Google Drive", "Zapier", "API"],
    tags: ["productivity", "collaboration", "documentation", "database"]
  },

  zapier: {
    name: "Zapier",
    label: "Zapier",
    purpose: "Automation platform connecting 5000+ apps to eliminate repetitive tasks",
    category: "Automation",
    url: "https://zapier.com",
    pricing: "Free tier (100 tasks/month), $19.99/month for Starter",
    useCase: {
      analyst: "Automate data collection, report generation, spreadsheet updates",
      manager: "Streamline approvals, sync calendars, automate status updates",
      developer: "CI/CD workflows, issue tracking, deployment notifications",
      marketer: "Lead nurturing, social media posting, campaign tracking",
      default: "Connect apps, automate workflows, eliminate manual data entry"
    },
    difficulty: "Intermediate",
    timeToValue: "1-3 days per automation",
    integrations: ["5000+ apps", "Webhooks", "API", "Email Parser"],
    tags: ["automation", "integration", "workflow", "no-code"]
  },

  canva: {
    name: "Canva",
    label: "Canva",
    purpose: "Design platform with AI-powered features for creating professional graphics",
    category: "Design",
    url: "https://canva.com",
    pricing: "Free tier available, $12.99/month for Pro",
    useCase: {
      analyst: "Create presentation slides, infographics, data visualizations, reports",
      manager: "Team presentations, process diagrams, org charts, meeting materials",
      developer: "Technical documentation graphics, architecture diagrams, UI mockups",
      marketer: "Social media graphics, ad creatives, brand materials, campaign assets",
      default: "Professional graphics, presentations, social media content"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["Google Drive", "Dropbox", "Social Media", "Print Services"],
    tags: ["design", "graphics", "presentation", "marketing"]
  },

  google_workspace: {
    name: "Google Workspace",
    label: "Google Workspace",
    purpose: "Suite of productivity tools with AI features like Smart Compose and data insights",
    category: "Productivity Suite",
    url: "https://workspace.google.com",
    pricing: "$6/month per user for Business Starter",
    useCase: {
      analyst: "Smart data analysis in Sheets, collaborative reporting, automated insights",
      manager: "AI-powered meeting summaries, smart scheduling, team collaboration",
      developer: "Collaborative coding docs, project tracking, automated workflows",
      marketer: "Content collaboration, campaign planning, performance tracking",
      default: "Email, documents, spreadsheets, video calls with AI enhancements"
    },
    difficulty: "Beginner",
    timeToValue: "Immediate",
    integrations: ["Native Google ecosystem", "Third-party apps", "API access"],
    tags: ["productivity", "collaboration", "ai-enhanced", "cloud"]
  },

  // === ANALYTICS/BI ===
  power_bi: {
    name: "Power BI",
    label: "Power BI",
    purpose: "Business intelligence platform for data visualization and advanced analytics",
    category: "Business Intelligence",
    url: "https://powerbi.microsoft.com",
    pricing: "$10/month per user for Pro",
    useCase: {
      analyst: "Interactive dashboards, financial modeling, trend analysis, KPI tracking",
      manager: "Executive dashboards, performance monitoring, data-driven decisions",
      developer: "Custom analytics solutions, API integrations, embedded reports",
      marketer: "Campaign performance, customer analytics, attribution modeling",
      default: "Data visualization, business reporting, analytics dashboards"
    },
    difficulty: "Intermediate",
    timeToValue: "1-2 weeks",
    integrations: ["Excel", "SQL Server", "Azure", "Salesforce", "Google Analytics"],
    tags: ["analytics", "visualization", "business-intelligence", "microsoft"]
  },

  tableau: {
    name: "Tableau",
    label: "Tableau",
    purpose: "Advanced data visualization platform for complex analytical insights",
    category: "Data Visualization",
    url: "https://tableau.com",
    pricing: "$70/month per user for Creator",
    useCase: {
      analyst: "Complex data modeling, statistical analysis, predictive analytics",
      manager: "Strategic insights, performance dashboards, trend identification",
      developer: "Custom analytics applications, data pipeline visualization",
      marketer: "Customer journey analysis, cohort analysis, attribution modeling",
      default: "Advanced data visualization, statistical analysis, predictive modeling"
    },
    difficulty: "Advanced",
    timeToValue: "2-4 weeks",
    integrations: ["Salesforce", "AWS", "Google Cloud", "Snowflake", "SQL databases"],
    tags: ["analytics", "visualization", "enterprise", "advanced"]
  },

  // === AUTOMATION/RPA ===
  automation_basic: {
    name: "Make (formerly Integromat)",
    label: "Zapier / Make",
    purpose: "Visual automation platform for complex multi-step workflows",
    category: "Advanced Automation",
    url: "https://make.com",
    pricing: "Free tier (1000 operations), $9/month for Core",
    useCase: {
      analyst: "Complex data processing, multi-source reporting, automated calculations",
      manager: "Advanced approval workflows, cross-platform integrations",
      developer: "API orchestration, webhook management, data transformation",
      marketer: "Multi-channel campaigns, lead scoring, customer journey automation",
      default: "Complex automation, data transformation, multi-app workflows"
    },
    difficulty: "Intermediate",
    timeToValue: "3-7 days",
    integrations: ["1000+ apps", "HTTP/API", "Webhooks", "Custom functions"],
    tags: ["automation", "integration", "visual", "advanced"]
  },

  // === SPECIALIZED BY ROLE ===
  
  // Finance/Analyst specific
  excel_copilot: {
    name: "Excel with Copilot",
    label: "Excel Copilot",
    purpose: "AI-enhanced Excel for advanced data analysis and financial modeling",
    category: "Finance Tools",
    url: "https://microsoft.com/excel",
    pricing: "Included with Microsoft 365 Copilot ($30/month)",
    useCase: {
      analyst: "AI-generated formulas, automated insights, financial modeling assistance",
      default: "Spreadsheet analysis with AI assistance"
    },
    difficulty: "Intermediate",
    timeToValue: "1-2 weeks",
    integrations: ["Power BI", "SharePoint", "Teams", "Power Automate"],
    tags: ["finance", "spreadsheet", "modeling", "microsoft", "ai-assistant"]
  },

  jupyter_notebook: {
    name: "Jupyter Notebook",
    label: "Jupyter Notebook",
    purpose: "Interactive computing environment for data science and analysis",
    category: "Data Science",
    url: "https://jupyter.org",
    pricing: "Free, cloud hosting available",
    useCase: {
      analyst: "Financial modeling, statistical analysis, data exploration, reporting",
      developer: "Data analysis, machine learning, algorithm development",
      default: "Interactive data analysis and visualization"
    },
    difficulty: "Advanced",
    timeToValue: "1-2 weeks",
    integrations: ["Python", "R", "SQL", "Cloud platforms", "Git"],
    tags: ["data-science", "analysis", "python", "modeling", "advanced"]
  }
};

// Helper function to get tools by role
export function getToolsByRole(role, industry = null) {
  return Object.entries(AITOOLS_DB)
    .filter(([key, tool]) => {
      // Check if tool has specific use case for this role
      return tool.useCase[role] || tool.useCase.default;
    })
    .map(([key, tool]) => ({
      key,
      ...tool,
      roleSpecificPurpose: tool.useCase[role] || tool.useCase.default
    }));
}

// Helper function to get tools by category
export function getToolsByCategory(category) {
  return Object.entries(AITOOLS_DB)
    .filter(([key, tool]) => tool.category === category)
    .map(([key, tool]) => ({ key, ...tool }));
}

// Helper function to get beginner-friendly tools
export function getBeginnerTools() {
  return Object.entries(AITOOLS_DB)
    .filter(([key, tool]) => tool.difficulty === "Beginner")
    .map(([key, tool]) => ({ key, ...tool }));
}

export default AITOOLS_DB;