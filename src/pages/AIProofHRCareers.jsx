// src/pages/AIProofHRCareers.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';

const AIProofHRCareers = () => {
  const hrRiskData = [
    { role: 'HR Coordinators', risk: 67, automation: 'High', reason: 'Scheduling, basic inquiries, document processing, benefits enrollment' },
    { role: 'Recruiters (Volume)', risk: 59, automation: 'Medium-High', reason: 'Resume screening, candidate sourcing, initial interview scheduling' },
    { role: 'Benefits Administrators', risk: 54, automation: 'Medium-High', reason: 'Enrollment processing, basic inquiries, compliance tracking' },
    { role: 'HR Analysts', risk: 62, automation: 'High', reason: 'Data reporting, trend analysis, compliance reporting' },
    { role: 'Training Coordinators', risk: 48, automation: 'Medium', reason: 'Learning management, basic training delivery, progress tracking' },
    { role: 'HR Business Partners', risk: 32, automation: 'Low-Medium', reason: 'Strategic consulting, employee relations, organizational development' },
    { role: 'Talent Acquisition Leaders', risk: 28, automation: 'Low', reason: 'Strategic hiring, relationship building, complex negotiations' },
    { role: 'CHRO/HR Directors', risk: 20, automation: 'Low', reason: 'People strategy, organizational culture, executive leadership' }
  ];

  const evolutionPaths = [
    {
      from: 'HR Coordinator',
      to: 'People & AI Integration Specialist',
      timeline: '4-8 months',
      keySkills: ['AI HR tools', 'Change management', 'Employee experience design'],
      description: 'Lead AI adoption in HR while focusing on human-centered change management and employee support'
    },
    {
      from: 'Recruiter',
      to: 'AI-Enhanced Talent Strategist',
      timeline: '6-9 months',
      keySkills: ['AI sourcing tools', 'Relationship building', 'Diversity & inclusion'],
      description: 'Use AI for candidate sourcing while specializing in complex hiring and relationship building'
    },
    {
      from: 'HR Analyst',
      to: 'People Analytics & AI Insights Lead',
      timeline: '6-12 months',
      keySkills: ['People analytics', 'AI model interpretation', 'Strategic storytelling'],
      description: 'Transform AI-generated data into strategic people insights and organizational recommendations'
    },
    {
      from: 'Training Coordinator',
      to: 'Learning Experience & AI Coach',
      timeline: '8-12 months',
      keySkills: ['AI learning platforms', 'Adult learning psychology', 'Personalized development'],
      description: 'Design AI-augmented learning experiences while providing human coaching and mentorship'
    }
  ];

  const aiImpactAreas = [
    {
      area: 'Recruitment & Hiring',
      aiCapability: 'Resume screening, candidate matching, interview scheduling, basic assessments',
      humanAdvantage: 'Cultural fit evaluation, complex role requirements, relationship building, diversity focus',
      recommendation: 'Use AI for initial screening, focus on strategic hiring and candidate experience'
    },
    {
      area: 'Employee Relations',
      aiCapability: 'Policy Q&A chatbots, basic conflict detection, compliance monitoring',
      humanAdvantage: 'Complex mediation, emotional support, organizational dynamics, sensitive investigations',
      recommendation: 'Let AI handle routine questions, specialize in complex interpersonal situations'
    },
    {
      area: 'Performance Management',
      aiCapability: 'Data aggregation, trend analysis, goal tracking, basic feedback suggestions',
      humanAdvantage: 'Performance coaching, career development, difficult conversations, contextual evaluation',
      recommendation: 'Use AI for data insights, focus on coaching and development conversations'
    },
    {
      area: 'Learning & Development',
      aiCapability: 'Personalized learning paths, content delivery, progress tracking, skill assessments',
      humanAdvantage: 'Learning facilitation, mentoring, soft skills development, organizational culture',
      recommendation: 'Leverage AI for personalization, lead human-centered learning experiences'
    }
  ];

  const aiResistantSkills = [
    {
      category: 'Emotional Intelligence',
      skills: ['Empathy and listening', 'Conflict resolution', 'Cultural sensitivity', 'Trust building'],
      whyImportant: 'Human workplace challenges require emotional understanding and interpersonal skills that AI cannot replicate'
    },
    {
      category: 'Strategic Thinking',
      skills: ['Organizational development', 'Change management', 'Culture building', 'Business partnership'],
      whyImportant: 'People strategy requires understanding of business context, organizational dynamics, and long-term vision'
    },
    {
      category: 'Complex Problem-Solving',
      skills: ['Employee investigations', 'Organizational design', 'Policy development', 'Crisis management'],
      whyImportant: 'Complex workplace situations require human judgment, contextual understanding, and ethical reasoning'
    },
    {
      category: 'AI Collaboration',
      skills: ['HR tech evaluation', 'AI bias detection', 'Employee privacy protection', 'Human-AI workflow design'],
      whyImportant: 'The future of HR involves responsibly managing AI tools while protecting employee interests'
    }
  ];

  const ninetyDayPlan = [
    {
      phase: 'Discovery (Days 1-30)',
      focus: 'Current State & Opportunity Assessment',
      actions: [
        'Complete comprehensive HR AI risk assessment',
        'Audit current HR processes for automation opportunities',
        'Research AI HR tools relevant to your role',
        'Identify your strongest interpersonal and strategic skills'
      ]
    },
    {
      phase: 'Development (Days 31-60)',
      focus: 'Skill Building & Tool Mastery',
      actions: [
        'Master key AI HR tools (ATS AI, chatbots, analytics platforms)',
        'Develop change management and communication skills',
        'Practice AI-assisted recruitment or performance management',
        'Build expertise in people analytics and data interpretation'
      ]
    },
    {
      phase: 'Leadership (Days 61-90)',
      focus: 'Strategic Positioning',
      actions: [
        'Present AI efficiency improvements to HR leadership',
        'Lead pilot project for AI integration in your area',
        'Establish yourself as the human-AI collaboration expert',
        'Document employee experience improvements and plan next initiatives'
      ]
    }
  ];

  const hrSpecializations = [
    {
      area: 'Talent Acquisition',
      riskLevel: 'Medium-High (59%)',
      aiImpact: 'Automated sourcing, resume screening, initial candidate matching',
      humanOpportunity: 'Complex role requirements, cultural fit assessment, candidate experience',
      evolutionTip: 'Become the relationship builder who uses AI for efficiency while focusing on strategic hires'
    },
    {
      area: 'Employee Experience',
      riskLevel: 'Medium (45%)',
      aiImpact: 'Chatbots for basic questions, automated surveys, data analysis',
      humanOpportunity: 'Culture building, engagement strategy, complex employee needs',
      evolutionTip: 'Use AI for data insights while leading human-centered experience design'
    },
    {
      area: 'Learning & Development',
      riskLevel: 'Medium (48%)',
      aiImpact: 'Personalized learning, content delivery, skill gap analysis',
      humanOpportunity: 'Coaching, mentoring, soft skills development, leadership training',
      evolutionTip: 'Leverage AI for personalization while focusing on human development and facilitation'
    },
    {
      area: 'Compensation & Benefits',
      riskLevel: 'High (54%)',
      aiImpact: 'Market analysis, benefits administration, compliance tracking',
      humanOpportunity: 'Strategy development, complex negotiations, executive compensation',
      evolutionTip: 'Use AI for analysis and administration while specializing in strategic compensation design'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI-Proof HR Careers: Navigate Human Resources Automation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              HR is being transformed by AI-powered recruitment, employee analytics, and automated processes. Discover which HR roles remain AI-resistant and how to evolve into a people-focused, AI-enhanced HR professional.
            </p>
            <Link
              to="/auth"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg inline-block"
            >
              Get My HR Career Evolution Plan
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              ✨ Free assessment • HR-specific roadmap • Join 543+ HR professionals
            </p>
          </div>
        </div>
      </section>

      {/* HR AI Risk by Role */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI Automation Risk by HR Role
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            <em>Risk percentages based on current AI capabilities in HR technology. Individual results may vary by company size, industry, and specific job responsibilities.</em>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hrRiskData.map((role, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">{role.role}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    role.risk >= 60 ? 'bg-red-100 text-red-800' :
                    role.risk >= 50 ? 'bg-orange-100 text-orange-800' :
                    role.risk >= 30 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {role.risk}% Risk
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div 
                    className={`h-2 rounded-full ${
                      role.risk >= 60 ? 'bg-red-500' :
                      role.risk >= 50 ? 'bg-orange-500' :
                      role.risk >= 30 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${role.risk}%` }}
                  ></div>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>AI Impact:</strong> {role.reason}
                </p>
                <span className={`text-xs px-2 py-1 rounded ${
                  role.automation === 'High' ? 'bg-red-50 text-red-700' :
                  role.automation === 'Medium-High' ? 'bg-orange-50 text-orange-700' :
                  role.automation === 'Medium' ? 'bg-yellow-50 text-yellow-700' :
                  'bg-green-50 text-green-700'
                }`}>
                  {role.automation} Automation Risk
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HR Specialization Analysis */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            AI Impact by HR Specialization
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hrSpecializations.map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{spec.area}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    spec.riskLevel.includes('High') ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {spec.riskLevel}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">AI Impact:</h4>
                    <p className="text-gray-600 text-sm">{spec.aiImpact}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Human Opportunity:</h4>
                    <p className="text-gray-600 text-sm">{spec.humanOpportunity}</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-2">Evolution Strategy:</h4>
                    <p className="text-purple-800 text-sm">{spec.evolutionTip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Impact Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How AI Is Transforming HR Functions
          </h2>
          
          <div className="space-y-8">
            {aiImpactAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{area.area}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-red-700 mb-2 flex items-center">
                      <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                      AI Capability
                    </h4>
                    <p className="text-gray-600 text-sm">{area.aiCapability}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-green-700 mb-2 flex items-center">
                      <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span>
                      Human Advantage
                    </h4>
                    <p className="text-gray-600 text-sm">{area.humanAdvantage}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2 flex items-center">
                      <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span>
                      Evolution Strategy
                    </h4>
                    <p className="text-gray-600 text-sm">{area.recommendation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Evolution Paths */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            HR Career Evolution Paths
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Transform your existing HR role into an AI-resistant position. These evolution paths build on your people skills while positioning you for an AI-augmented HR future.
            <em> Timeline estimates based on focused skill development and may vary by individual circumstances.</em>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {evolutionPaths.map((path, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-sm border">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-medium text-gray-600 mb-2">From:</h3>
                  <p className="text-xl font-semibold text-gray-900 mb-4">{path.from}</p>
                  <div className="text-3xl mb-4">⬇️</div>
                  <h3 className="text-lg font-medium text-purple-600 mb-2">To:</h3>
                  <p className="text-xl font-bold text-purple-600">{path.to}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Skills to Develop:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.keySkills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Evolution Strategy:</h4>
                    <p className="text-gray-600 text-sm">{path.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-gray-500">Timeline: {path.timeline}</span>
                    <Link
                      to="/auth"
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                    >
                      Get My Plan
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Resistant HR Skills */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Essential AI-Resistant HR Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiResistantSkills.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Core Skills:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Why AI-Resistant:</h4>
                  <p className="text-gray-600 text-sm">{category.whyImportant}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-Day Implementation Plan */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Your 90-Day HR Evolution Plan
          </h2>
          
          <div className="space-y-8">
            {ninetyDayPlan.map((phase, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-8 shadow-sm border">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                    <p className="text-purple-600 font-medium">{phase.focus}</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <ul className="space-y-2">
                    {phase.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span className="text-gray-600">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/auth"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
            >
              Get My Detailed HR Evolution Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            HR Career Evolution FAQ
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Will AI eliminate HR jobs?</h3>
              <p className="text-gray-600">
                AI will automate many routine HR tasks, but the core purpose of HR - managing human relationships, culture, and complex workplace situations - remains fundamentally human. AI creates opportunities to focus on higher-value strategic work while handling administrative tasks more efficiently. Job evolution rather than elimination is the likely outcome for most HR roles.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">How is AI currently being used in HR?</h3>
              <p className="text-gray-600">
                AI is increasingly used for resume screening, candidate sourcing, employee engagement surveys, chatbots for basic HR questions, and predictive analytics for turnover. However, complex employee relations, strategic planning, and culture building remain primarily human-driven. The pace of adoption varies significantly by company size and industry.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">What about AI bias in HR decisions?</h3>
              <p className="text-gray-600">
                AI bias in HR is a significant concern, creating opportunities for HR professionals who understand both technology and fairness principles. Roles focused on AI governance, bias detection, and ensuring equitable AI implementation are emerging. This represents a human-advantage area where HR expertise combines with AI oversight.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Should I specialize in HR technology?</h3>
              <p className="text-gray-600">
                HR technology knowledge is valuable, but don't abandon core people skills. The most successful HR professionals combine deep understanding of human behavior with proficiency in AI tools. Focus on becoming the bridge between technology capabilities and human needs rather than purely technical specialization.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Are these evolution timelines realistic for HR?</h3>
              <p className="text-gray-600">
                Timeline estimates assume focused effort and vary based on your starting point, current skills, and company culture. HR roles often require relationship building and trust, which can take time to establish. Some professionals may evolve faster, others slower. Success depends on individual effort, organizational support, and market conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Future-Proof Your HR Career with AI Integration
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Take our HR-specific assessment to discover your automation risk and get a personalized roadmap to become a people-focused, AI-enhanced HR professional.
          </p>
          <Link
            to="/auth"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            Start My HR Evolution Assessment
          </Link>
          <p className="text-sm text-purple-200 mt-4">
            ✨ HR-specific analysis • 90-day roadmap • Join 543+ HR professionals
          </p>
          <p className="text-xs text-purple-300 mt-2">
            <em>Educational guidance only. Career outcomes depend on organizational culture, individual effort, and market conditions.</em>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIProofHRCareers;