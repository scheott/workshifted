import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Shield, TrendingUp, Clock, Star, BookOpen, Briefcase, Users, Target, ChevronRight, Download } from 'lucide-react';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);

// AI Risk Gauge Component
const AIRiskGauge = ({ score, role }) => {
  const getColor = (score) => {
    if (score >= 70) return 'text-red-500';
    if (score >= 40) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getRiskLevel = (score) => {
    if (score >= 70) return 'High Risk';
    if (score >= 40) return 'Moderate Risk';
    return 'Low Risk';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="2"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={score >= 70 ? '#ef4444' : score >= 40 ? '#eab308' : '#22c55e'}
              strokeWidth="2"
              strokeDasharray={`${score}, 100`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-2xl font-bold ${getColor(score)}`}>{score}%</div>
              <div className="text-xs text-gray-500">Risk</div>
            </div>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Automation Risk</h3>
        <p className={`font-medium ${getColor(score)}`}>{getRiskLevel(score)}</p>
        <p className="text-sm text-gray-600 mt-1">for {role}</p>
        <p className="text-xs text-gray-500 mt-2">Updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

// Quick Summary Card
const SummaryCard = ({ userData }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Your AI Evolution Profile</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Current Role:</span>
          <span className="font-medium text-gray-900">{userData.current_role || 'Not specified'}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Automation Risk:</span>
          <span className="font-medium text-gray-900">{userData.risk_score || 0}% by 2028</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Evolution Path:</span>
          <span className="font-medium text-blue-600">{userData.recommended_path || 'AI-Augmented Professional'}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Industry:</span>
          <span className="font-medium text-gray-900">{userData.industry || 'Technology'}</span>
        </div>
      </div>
    </div>
  );
};

// Evolution Path Card
const EvolutionPathCard = ({ path, isPrimary = false }) => {
  return (
    <div className={`rounded-lg border p-6 transition-all hover:shadow-md ${isPrimary ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold text-gray-900">{path.title}</h4>
        {isPrimary && <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Recommended</span>}
      </div>
      <p className="text-sm text-gray-600 mb-4">{path.description}</p>
      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {path.timeline}
        </span>
        <span className="flex items-center gap-1">
          <Target className="w-3 h-3" />
          {path.difficulty}
        </span>
        <span className="flex items-center gap-1">
          <Star className="w-3 h-3" />
          {path.match_percentage}% match
        </span>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
        View 90-Day Plan
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

// Premium Plan Viewer
const PremiumPlanViewer = ({ plan, isPremium, userRole }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Your 90-Day AI-Proofing Plan</h3>
        <p className="text-sm text-gray-600">Personalized roadmap for {userRole}</p>
      </div>
      
      <div className="p-6">
        {isPremium ? (
          <div className="space-y-6">
            {plan.weeks.map((week, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">Week {week.number}: {week.title}</h4>
                <ul className="space-y-2">
                  {week.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="flex items-start gap-2 text-sm text-gray-600">
                      <input type="checkbox" className="mt-1 rounded border-gray-300" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative">
            {/* Free preview - first 2 weeks */}
            <div className="space-y-6 mb-6">
              {plan.preview.map((week, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900 mb-2">Week {week.number}: {week.title}</h4>
                  <ul className="space-y-2">
                    {week.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="mt-1 rounded border-gray-300" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Blurred premium content */}
            <div className="relative">
              <div className="filter blur-sm opacity-50 space-y-6">
                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-medium text-gray-900 mb-2">Week 3: Advanced AI Tool Mastery</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-600">
                      <input type="checkbox" className="mt-1 rounded border-gray-300" disabled />
                      <span>Master industry-specific AI tools</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-600">
                      <input type="checkbox" className="mt-1 rounded border-gray-300" disabled />
                      <span>Build AI-human collaboration workflows</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-sm">
                  <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Unlock Your Full Plan</h4>
                  <p className="text-sm text-gray-600 mb-4">Get your complete 90-day AI-proofing roadmap with personalized action items, tool recommendations, and career positioning strategies.</p>
                  <button className="bg-blue-600 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors">
                    Upgrade for $29
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Tool Recommendations
const ToolRecommendations = ({ tools, userRole, userIndustry }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Recommended AI Tools</h3>
        <p className="text-sm text-gray-600">Curated for {userRole} in {userIndustry}</p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <tool.icon className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{tool.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{tool.benefit}</p>
                  <a 
                    href={tool.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm font-medium hover:text-blue-700"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Template Library
const TemplateLibrary = ({ templates }) => {
  const copyToClipboard = (content) => {
    navigator.clipboard.writeText(content);
    // You could add a toast notification here
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Templates & Scripts</h3>
        <p className="text-sm text-gray-600">Ready-to-use content for your AI evolution</p>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {templates.map((template, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{template.name}</h4>
                <button
                  onClick={() => copyToClipboard(template.content)}
                  className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1"
                >
                  <Download className="w-4 h-4" />
                  Copy
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-3">{template.description}</p>
              <div className="bg-gray-50 rounded p-3 text-sm text-gray-700 max-h-32 overflow-y-auto">
                {template.preview}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Insights Feed
const InsightsFeed = ({ articles, userRole, userIndustry }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Impact Updates</h3>
        <p className="text-sm text-gray-600">Latest developments affecting {userRole} roles</p>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {articles.map((article, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{article.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{article.summary}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{article.date}</span>
                    <span>{article.source}</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{article.relevance}</span>
                  </div>
                </div>
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm font-medium hover:text-blue-700 ml-4"
                >
                  Read →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        // Fetch user profile and assessment data
        const { data: profile, error } = await supabase
          .from('user_profiles') // Adjust table name to match your schema
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error) throw error;
        setUserData(profile);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your AI evolution dashboard...</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No assessment data found. Please complete your assessment first.</p>
        </div>
      </div>
    );
  }

  // Sample data - replace with actual data from your database
  const evolutionPaths = [
    {
      title: "AI Marketing Strategist",
      description: "Lead AI-human collaboration in marketing campaigns and customer engagement",
      timeline: "3-6 months",
      difficulty: "Moderate",
      match_percentage: 92
    },
    {
      title: "Digital Transformation Lead",
      description: "Guide organizations through AI adoption and change management",
      timeline: "6-12 months", 
      difficulty: "Advanced",
      match_percentage: 78
    },
    {
      title: "AI Tools Consultant",
      description: "Help businesses implement and optimize AI workflows",
      timeline: "2-4 months",
      difficulty: "Beginner",
      match_percentage: 85
    }
  ];

  const ninetyDayPlan = {
    preview: [
      {
        number: 1,
        title: "AI Awareness Audit",
        actions: [
          "Complete comprehensive role vulnerability assessment",
          "Research AI tools currently used in your industry",
          "Identify 3 tasks you can start delegating to AI this week"
        ]
      },
      {
        number: 2,
        title: "Tool Familiarization", 
        actions: [
          "Sign up for 3 AI tools relevant to your role",
          "Complete prompt engineering basics course",
          "Create your first AI-assisted project"
        ]
      }
    ],
    weeks: [
      // Full plan would be here for premium users
    ]
  };

  const recommendedTools = [
    {
      name: "Claude",
      benefit: "Advanced writing and analysis assistance",
      icon: BookOpen,
      link: "https://claude.ai"
    },
    {
      name: "Canva AI",
      benefit: "AI-powered design creation",
      icon: Briefcase,
      link: "https://canva.com"
    },
    {
      name: "Notion AI",
      benefit: "Intelligent document and project management",
      icon: Users,
      link: "https://notion.so"
    },
    {
      name: "Copy.ai",
      benefit: "Marketing copy generation",
      icon: TrendingUp,
      link: "https://copy.ai"
    }
  ];

  const templates = [
    {
      name: "LinkedIn AI Skills Update",
      description: "Professional post announcing your AI collaboration expertise",
      preview: "Excited to share that I've been diving deep into AI tools to enhance my marketing strategies...",
      content: "Full LinkedIn post template here..."
    },
    {
      name: "Boss AI Initiative Proposal",
      description: "Proposal template for leading AI implementation at your company",
      preview: "I'd like to propose an AI integration initiative that could improve our team's productivity by 30%...",
      content: "Full proposal template here..."
    }
  ];

  const aiUpdates = [
    {
      title: "New AI Marketing Tools Reshape Campaign Management",
      summary: "Latest AI platforms are automating 60% of routine marketing tasks, creating opportunities for strategic roles",
      date: "2 days ago",
      source: "Marketing AI Weekly",
      relevance: "High Impact",
      url: "#"
    },
    {
      title: "LinkedIn Adds AI Collaboration Skills to Top Hiring Trends",
      summary: "Companies increasingly seek professionals who can effectively manage human-AI workflows",
      date: "1 week ago", 
      source: "LinkedIn Talent Blog",
      relevance: "Career Relevant",
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your AI Evolution Dashboard</h1>
          <p className="text-gray-600">Your personalized roadmap to staying ahead of AI disruption</p>
        </div>

        {/* Top Row - At-a-Glance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1">
            <AIRiskGauge score={userData.risk_score || 45} role={userData.current_role || 'Marketing Manager'} />
          </div>
          <div className="lg:col-span-2">
            <SummaryCard userData={userData} />
          </div>
        </div>

        {/* Evolution Paths */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Evolution Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {evolutionPaths.map((path, index) => (
              <EvolutionPathCard key={index} path={path} isPrimary={index === 0} />
            ))}
          </div>
        </div>

        {/* 90-Day Plan */}
        <div className="mb-8">
          <PremiumPlanViewer 
            plan={ninetyDayPlan} 
            isPremium={userData.subscription_status === 'active'} 
            userRole={userData.current_role || 'Marketing Manager'}
          />
        </div>

        {/* Tools & Templates Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ToolRecommendations 
            tools={recommendedTools} 
            userRole={userData.current_role || 'Marketing Manager'}
            userIndustry={userData.industry || 'Technology'}
          />
          <TemplateLibrary templates={templates} />
        </div>

        {/* Insights Feed */}
        <div className="mb-8">
          <InsightsFeed 
            articles={aiUpdates}
            userRole={userData.current_role || 'Marketing Manager'}
            userIndustry={userData.industry || 'Technology'}
          />
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Stay Ahead of AI Changes</h3>
          <p className="text-blue-100 mb-4">Get weekly updates on AI developments affecting your role</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border-0 focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;