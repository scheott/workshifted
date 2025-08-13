import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Shield, TrendingUp, Clock, Star, BookOpen, Briefcase, Users, Target, ChevronRight, Download, CheckCircle, AlertTriangle, Eye, EyeOff } from 'lucide-react';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

// AI Risk Gauge Component (Animated version for results)
const AIRiskGauge = ({ score, role, isAnimated = true }) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    if (isAnimated) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedScore(prev => {
            if (prev >= score) {
              clearInterval(interval);
              return score;
            }
            return prev + 1;
          });
        }, 20);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setAnimatedScore(score);
    }
  }, [score, isAnimated]);

  const getColor = (score) => {
    if (score >= 70) return 'text-red-500';
    if (score >= 40) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getColorClass = (score) => {
    if (score >= 70) return '#ef4444';
    if (score >= 40) return '#eab308';
    return 'text-green-500';
  };

  const getRiskLevel = (score) => {
    if (score >= 70) return 'High Risk';
    if (score >= 40) return 'Moderate Risk';
    return 'Low Risk';
  };

  const getAdvice = (score) => {
    if (score >= 70) return 'Urgent action needed - start AI-proofing immediately';
    if (score >= 40) return 'Time to evolve - learn to lead AI in your field';
    return 'Stay vigilant - maintain your competitive edge';
  };

  return (
    <div className="text-center py-12">
      <div className="relative w-48 h-48 mx-auto mb-6">
        <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={score >= 70 ? '#ef4444' : score >= 40 ? '#eab308' : '#22c55e'}
            strokeWidth="3"
            strokeDasharray={`${animatedScore}, 100`}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`text-4xl font-bold ${getColor(score)}`}>{animatedScore}%</div>
            <div className="text-sm text-gray-500 mt-1">Automation Risk</div>
          </div>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Your role: <span className="text-blue-600">{role}</span>
      </h1>
      <p className={`text-xl font-semibold mb-2 ${getColor(score)}`}>
        Automation Risk: {score}% by 2028
      </p>
      <p className="text-gray-600 mb-4">Based on your tasks, industry, and company size.</p>
      <p className={`font-medium ${getColor(score)}`}>{getAdvice(score)}</p>
    </div>
  );
};

// Why This Score Component
const WhyThisScore = ({ breakdown, role }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Why We Scored You This Way
      </h2>
      <div className="space-y-4">
        {breakdown.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
              item.risk === 'high' ? 'bg-red-100' : 
              item.risk === 'medium' ? 'bg-yellow-100' : 'bg-green-100'
            }`}>
              {item.risk === 'high' ? 
                <AlertTriangle className="w-4 h-4 text-red-600" /> :
                item.risk === 'medium' ?
                <Clock className="w-4 h-4 text-yellow-600" /> :
                <Shield className="w-4 h-4 text-green-600" />
              }
            </div>
            <div className="flex-1">
              <p className="text-gray-800 font-medium">{item.factor}</p>
              <p className={`text-sm mt-1 ${
                item.risk === 'high' ? 'text-red-600' : 
                item.risk === 'medium' ? 'text-yellow-600' : 'text-green-600'
              }`}>
                {item.risk === 'high' ? 'High automation risk' : 
                 item.risk === 'medium' ? 'Medium automation risk' : 'Low automation risk'}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Data-backed analysis:</strong> Our assessment uses real industry automation trends, 
          task analysis research, and current AI capabilities to calculate your personalized risk score.
        </p>
      </div>
    </div>
  );
};

// Primary Evolution Path Card
const PrimaryEvolutionPath = ({ path, onViewPlan }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 p-8">
      <div className="text-center mb-6">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
          <Star className="w-4 h-4 mr-1" />
          Top Recommendation
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{path.title}</h2>
        <p className="text-lg text-blue-600 font-semibold">{path.match_percentage}% Perfect Fit</p>
      </div>
      
      <div className="text-center mb-6">
        <p className="text-gray-700 text-lg leading-relaxed">{path.description}</p>
      </div>

      <div className="space-y-3 mb-8">
        <h3 className="font-semibold text-gray-900">3 Quick Wins in 90 Days:</h3>
        {path.quick_wins.map((win, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{win}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          onClick={onViewPlan}
          className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          See Your Full 90-Day Plan
          <ChevronRight className="w-5 h-5" />
        </button>
        <button className="px-6 py-3 border border-blue-300 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

// Secondary Evolution Paths
const SecondaryEvolutionPaths = ({ paths, onComparePlans }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">
        Alternative Career Evolution Paths
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paths.map((path, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-300 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-semibold text-gray-900 text-lg">{path.title}</h4>
              <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                {path.match_percentage}% fit
              </span>
            </div>
            <p className="text-gray-600 mb-4">{path.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {path.timeline}
              </span>
              <span className="flex items-center gap-1">
                <Target className="w-4 h-4" />
                {path.difficulty}
              </span>
            </div>
            <button 
              onClick={onComparePlans}
              className="w-full border border-blue-300 text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Compare Plans
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// AI Tools Recommendations
const ToolRecommendations = ({ tools, role, industry }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
        AI Tools You Should Start With
      </h3>
      <p className="text-gray-600 text-center mb-6">
        Recommended for {role} professionals in {industry}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="text-center border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <tool.icon className="w-8 h-8 text-gray-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">{tool.name}</h4>
            <p className="text-sm text-gray-600 mb-4">{tool.benefit}</p>
            <a 
              href={tool.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
            >
              Learn More
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// What's Next Section
const WhatsNext = ({ planPreview, isPremium, onUpgrade, onSaveResults }) => {
  const [showPreview, setShowPreview] = useState(false);

  if (isPremium) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Your Complete 90-Day Action Plan
        </h3>
        {/* Full plan content for premium users */}
        <div className="space-y-6">
          {planPreview.weeks.map((week, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-gray-900 mb-3">Week {week.number}: {week.title}</h4>
              <ul className="space-y-2">
                {week.actions.map((action, actionIndex) => (
                  <li key={actionIndex} className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 rounded border-gray-300" />
                    <span className="text-gray-700">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">What's Next?</h3>
        <p className="text-lg text-gray-700 mb-6">
          Unlock your <strong>full personalized 90-day plan</strong>, 3 role comparisons, 
          and premium templates for just <span className="text-2xl font-bold text-indigo-600">$29</span>
        </p>
      </div>

      {/* Preview Toggle */}
      <div className="text-center mb-6">
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700"
        >
          {showPreview ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          {showPreview ? 'Hide' : 'Preview'} Your Plan
        </button>
      </div>

      {/* Blurred Preview */}
      {showPreview && (
        <div className="relative mb-8">
          <div className="filter blur-sm opacity-60 bg-white rounded-lg p-6 border">
            <div className="space-y-4">
              {planPreview.preview.map((week, index) => (
                <div key={index} className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-medium text-gray-900 mb-2">Week {week.number}: {week.title}</h4>
                  <ul className="space-y-1">
                    {week.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="text-sm text-gray-600">• {action}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">Week 3: Advanced AI Strategy</h4>
                <ul className="space-y-1">
                  <li className="text-sm text-gray-600">• Develop AI-human collaboration frameworks</li>
                  <li className="text-sm text-gray-600">• Create your AI leadership portfolio</li>
                  <li className="text-sm text-gray-600">• Network with AI transformation leaders</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl p-6 text-center max-w-sm">
              <Shield className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Complete Plan Locked</h4>
              <p className="text-sm text-gray-600 mb-4">
                Get your full 12-week roadmap plus bonus templates
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Benefits */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-900 mb-4 text-center">What You'll Get:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Complete 12-week action plan</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">LinkedIn AI skills update script</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Boss proposal templates</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">3 career path comparisons</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">AI tools starter pack</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Monthly AI threat updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={onUpgrade}
          className="flex-1 bg-indigo-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Get Your Complete Plan - $29
        </button>
        <button 
          onClick={onSaveResults}
          className="flex-1 border border-indigo-300 text-indigo-600 py-4 px-8 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors"
        >
          Save Results (Free)
        </button>
      </div>
    </div>
  );
};

// Social Proof Component
const SocialProof = ({ stats }) => {
  return (
    <div className="text-center py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-3xl font-bold text-indigo-600 mb-2">{stats.users_helped}</div>
          <p className="text-gray-600">Professionals AI-proofed</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-green-600 mb-2">{stats.success_rate}%</div>
          <p className="text-gray-600">Successfully evolved their careers</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-blue-600 mb-2">{stats.avg_salary_increase}%</div>
          <p className="text-gray-600">Average salary increase</p>
        </div>
      </div>
      
      <div className="mt-8 max-w-2xl mx-auto">
        <p className="text-lg text-gray-700 italic">
          "I went from fearing AI to leading our company's AI transformation. 
          WorkShifted's plan helped me become the 'AI coordinator' and got me a 30% raise."
        </p>
        <p className="text-sm text-gray-500 mt-2">— Sarah Chen, Marketing Manager → AI Strategy Lead</p>
      </div>
    </div>
  );
};

// Newsletter Signup
const NewsletterSignup = ({ role }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    setSubscribed(true);
  };

  return (
    <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
      <h3 className="text-xl font-semibold mb-2">Stay Ahead of AI Changes</h3>
      <p className="text-gray-300 mb-6">
        Get monthly AI threat updates specifically for {role} roles
      </p>
      
      {subscribed ? (
        <div className="flex items-center justify-center gap-2 text-green-400">
          <CheckCircle className="w-5 h-5" />
          <span>Thanks! You'll receive updates soon.</span>
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-blue-300"
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Updates
          </button>
        </form>
      )}
    </div>
  );
};

// Main Results Component
const Results = () => {
  const [assessmentData, setAssessmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userStatus, setUserStatus] = useState('guest'); // guest, user, premium

  useEffect(() => {
    loadAssessmentResults();
  }, []);

  const loadAssessmentResults = async () => {
    try {
      // Get assessment results from localStorage or URL params
      const urlParams = new URLSearchParams(window.location.search);
      const assessmentId = urlParams.get('assessment');
      
      if (assessmentId) {
        // Fetch from Supabase
        const { data, error } = await supabase
          .from('assessments')
          .select('*')
          .eq('id', assessmentId)
          .single();
          
        if (error) throw error;
        setAssessmentData(data);
      } else {
        // Load from localStorage (for demo)
        const storedData = localStorage.getItem('assessmentResults');
        if (storedData) {
          setAssessmentData(JSON.parse(storedData));
        }
      }
      
      // Check user authentication status
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Check if premium
        const { data: profile } = await supabase
          .from('user_profiles')
          .select('subscription_status')
          .eq('user_id', user.id)
          .single();
          
        setUserStatus(profile?.subscription_status === 'active' ? 'premium' : 'user');
      }
      
    } catch (error) {
      console.error('Error loading assessment results:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpgrade = () => {
    // Redirect to payment flow
    window.location.href = '/upgrade';
  };

  const handleSaveResults = async () => {
    // Save to account or create account
    window.location.href = '/signup';
  };

  const handleViewPlan = () => {
    if (userStatus === 'premium') {
      window.location.href = '/dashboard';
    } else {
      handleUpgrade();
    }
  };

  const handleComparePlans = () => {
    handleUpgrade();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Analyzing your AI risk...</p>
        </div>
      </div>
    );
  }

  if (!assessmentData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No assessment data found. Please take the assessment first.</p>
          <button 
            onClick={() => window.location.href = '/assessment'}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            Take Assessment
          </button>
        </div>
      </div>
    );
  }

  // Sample data - replace with actual calculation based on assessment
  const riskScore = assessmentData.risk_score || 45;
  const userRole = assessmentData.current_role || 'Marketing Manager';
  const userIndustry = assessmentData.industry || 'Technology';
  
  const scoreBreakdown = [
    {
      factor: "30% of your time is routine reporting and data analysis",
      risk: "high"
    },
    {
      factor: "You regularly use empathy and stakeholder management",
      risk: "low" 
    },
    {
      factor: "Your industry is projected to see major AI disruption by 2028",
      risk: "medium"
    },
    {
      factor: "You have limited experience with AI tools",
      risk: "high"
    }
  ];

  const primaryPath = {
    title: "AI Marketing Strategist",
    description: "You'll direct AI tools for content creation and data analysis while focusing on strategic thinking and human psychology that AI can't replicate.",
    match_percentage: 92,
    quick_wins: [
      "Master 3 AI marketing tools in your first month",
      "Position yourself as the 'AI coordinator' on your team",
      "Increase productivity by 40% using AI-human collaboration"
    ]
  };

  const secondaryPaths = [
    {
      title: "Digital Transformation Lead",
      description: "Guide organizations through AI adoption and change management processes.",
      match_percentage: 78,
      timeline: "6-12 months",
      difficulty: "Advanced"
    },
    {
      title: "AI Tools Consultant",
      description: "Help businesses implement and optimize AI workflows across departments.",
      match_percentage: 85,
      timeline: "3-6 months", 
      difficulty: "Intermediate"
    }
  ];

  const recommendedTools = [
    {
      name: "Claude",
      benefit: "Advanced writing and strategy assistance",
      icon: BookOpen,
      link: "https://claude.ai"
    },
    {
      name: "Canva AI",
      benefit: "AI-powered design and visual content",
      icon: Briefcase,
      link: "https://canva.com"
    },
    {
      name: "HubSpot AI",
      benefit: "Marketing automation and customer insights",
      icon: Users,
      link: "https://hubspot.com"
    }
  ];

  const planPreview = {
    preview: [
      {
        number: 1,
        title: "AI Awareness Audit",
        actions: [
          "Complete comprehensive role vulnerability assessment",
          "Research AI tools currently used in your industry", 
          "Identify 3 tasks you can delegate to AI this week"
        ]
      },
      {
        number: 2,
        title: "Tool Mastery Foundation",
        actions: [
          "Sign up for 3 recommended AI tools",
          "Complete prompt engineering basics course",
          "Create your first AI-assisted marketing campaign"
        ]
      }
    ],
    weeks: [] // Full plan for premium users
  };

  const socialStats = {
    users_helped: "3,247",
    success_rate: 87,
    avg_salary_increase: 32
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section - AI Risk Score */}
        <div className="bg-white rounded-xl shadow-sm border mb-8">
          <AIRiskGauge score={riskScore} role={userRole} />
        </div>

        {/* Why This Score */}
        <div className="mb-8">
          <WhyThisScore breakdown={scoreBreakdown} role={userRole} />
        </div>

        {/* Primary Evolution Path */}
        <div className="mb-8">
          <PrimaryEvolutionPath path={primaryPath} onViewPlan={handleViewPlan} />
        </div>

        {/* Secondary Paths */}
        <div className="mb-8">
          <SecondaryEvolutionPaths paths={secondaryPaths} onComparePlans={handleComparePlans} />
        </div>

        {/* AI Tools Recommendations */}
        <div className="mb-8">
          <ToolRecommendations tools={recommendedTools} role={userRole} industry={userIndustry} />
        </div>

        {/* What's Next Section */}
        <div className="mb-8">
          <WhatsNext 
            planPreview={planPreview} 
            isPremium={userStatus === 'premium'} 
            onUpgrade={handleUpgrade}
            onSaveResults={handleSaveResults}
          />
        </div>

        {/* Social Proof */}
        <div className="mb-8">
          <SocialProof stats={socialStats} />
        </div>

        {/* Newsletter Signup */}
        <div className="mb-8">
          <NewsletterSignup role={userRole} />
        </div>

      </div>
    </div>
  );
};

export default Results;