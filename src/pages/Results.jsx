// src/pages/Results.jsx - Focused on Selected Career
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useAuth } from "../hooks/useAuth";
import { careerProfiles } from "../data/careerProfiles";
import CoursesSection from "../components/CoursesSection";

const Results = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // State
  const [userProfile, setUserProfile] = useState(null);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [careerData, setCareerData] = useState(null);
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    if (user) {
      fetchResultsData();
    }
  }, [user]);

  const fetchResultsData = async () => {
    try {
      // Get user profile
      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (profileError) throw profileError;
      setUserProfile(profile);

      // Check if they have a selected career
      if (!profile.selected_career) {
        // Redirect to dashboard to pick a career first
        navigate('/dashboard', { replace: true });
        return;
      }

      // Get selected career data
      setSelectedCareer(profile.selected_career_data);
      
      // Get career profile data
      const profileData = careerProfiles[profile.selected_career];
      setCareerData(profileData);

      // Get progress data
      const { data: progressData } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('career_path', profile.selected_career)
        .single();

      setProgress(progressData?.milestones || {});

      // Check premium status (you'll implement this)
      setIsPremium(profile.subscription_status === 'premium');

    } catch (error) {
      console.error('Error fetching results data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProgress = async (stepKey, completed) => {
    const newProgress = { ...progress, [stepKey]: completed };
    setProgress(newProgress);

    try {
      await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          career_path: userProfile.selected_career,
          milestones: newProgress,
          updated_at: new Date().toISOString()
        });
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const getLearningSteps = () => {
    if (!careerData) return [];

    const baseSteps = [
      {
        key: 'assessment_complete',
        title: 'Complete Skills Assessment',
        description: 'Identify your career match and strengths',
        category: 'Foundation',
        completed: true
      },
      {
        key: 'career_selected',
        title: 'Choose Career Focus',
        description: 'Select your primary career path',
        category: 'Foundation',
        completed: true
      },
      {
        key: 'research_career',
        title: 'Research Your Career',
        description: 'Learn about daily tasks, salary expectations, and growth opportunities',
        category: 'Research'
      },
      {
        key: 'foundation_course',
        title: 'Complete Foundation Course',
        description: 'Take an introductory course in your field',
        category: 'Learning'
      },
      {
        key: 'safety_training',
        title: 'Complete Safety Training',
        description: 'Get OSHA certification or equivalent safety training',
        category: 'Certification'
      },
      {
        key: 'network_professionals',
        title: 'Connect with Professionals',
        description: 'Reach out to 3 people working in your chosen field',
        category: 'Networking'
      }
    ];

    return [...baseSteps, ...(careerData.learning_steps || [])];
  };

  const getProgressPercentage = () => {
    const steps = getLearningSteps();
    const completedSteps = steps.filter(step => progress[step.key] || step.completed).length;
    return Math.round((completedSteps / steps.length) * 100);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'learning-path', label: 'Learning Path', icon: '🎯' },
    { id: 'courses', label: 'Courses', icon: '📚' },
    { id: 'reality-check', label: 'Reality Check', icon: '💼' },
    { id: 'local-opportunities', label: 'Local Opportunities', icon: '📍' }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-2 text-gray-700">
          <svg className="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span>Loading your career plan...</span>
        </div>
      </div>
    );
  }

  if (!selectedCareer || !careerData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">
          <h2 className="text-xl font-bold text-gray-900 mb-4">No Career Selected</h2>
          <p className="text-gray-600 mb-6">Please select a career focus from your dashboard first.</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const learningSteps = getLearningSteps();
  const progressPercentage = getProgressPercentage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Dashboard</span>
              </button>
              <div className="text-gray-300">•</div>
              <div className="text-2xl font-bold text-blue-600">Your Career Plan</div>
            </div>
            <div className="text-sm text-gray-500">
              {progressPercentage}% Complete
            </div>
          </div>
        </div>
      </header>

      {/* Career Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">{selectedCareer.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-blue-100">
                <div className="flex items-center space-x-2">
                  <span>💰</span>
                  <span>{selectedCareer.salary}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>⏱️</span>
                  <span>{selectedCareer.timeline}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🎯</span>
                  <span>{selectedCareer.matchPercentage}% match</span>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">{progressPercentage}%</div>
                <div className="text-sm text-blue-200">Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Career Overview */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Overview</h2>
              <p className="text-gray-700 text-lg mb-6">{selectedCareer.description}</p>
              
              {/* Skills Match */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Why This Career Fits You</h3>
                  <div className="space-y-3">
                    {careerData.skills_breakdown?.slice(0, 4).map((skill, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-700">{skill.name}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${skill.score}%` }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-blue-600">{skill.score}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Growth Path</h3>
                  <div className="space-y-3">
                    {careerData.growth_path?.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-600 text-xs font-semibold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    )) || [
                      <div key="1" className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-600 text-xs font-semibold">1</span>
                        </div>
                        <span className="text-gray-700">Entry Level → Journeyman → Specialist → Business Owner</span>
                      </div>
                    ]}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{progressPercentage}%</div>
                <div className="text-gray-600">Progress Complete</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {learningSteps.filter(s => progress[s.key] || s.completed).length}
                </div>
                <div className="text-gray-600">Steps Completed</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {learningSteps.length - learningSteps.filter(s => progress[s.key] || s.completed).length}
                </div>
                <div className="text-gray-600">Steps Remaining</div>
              </div>
            </div>
          </div>
        )}

        {/* Learning Path Tab */}
        {activeTab === 'learning-path' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Step-by-Step Learning Path</h2>
            
            <div className="space-y-6">
              {learningSteps.map((step, index) => (
                <div key={step.key} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
                        progress[step.key] || step.completed
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                      onClick={() => !step.completed && updateProgress(step.key, !progress[step.key])}
                    >
                      {progress[step.key] || step.completed ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span className="text-sm font-semibold">{index + 1}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-lg font-semibold ${progress[step.key] || step.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                        {step.title}
                      </h3>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        step.category === 'Foundation' ? 'bg-blue-100 text-blue-800' :
                        step.category === 'Learning' ? 'bg-green-100 text-green-800' :
                        step.category === 'Certification' ? 'bg-yellow-100 text-yellow-800' :
                        step.category === 'Networking' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {step.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    
                    {/* Step resources */}
                    {step.resources && (
                      <div className="flex flex-wrap gap-2">
                        {step.resources.map((resource, idx) => (
                          <a
                            key={idx}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-md hover:bg-blue-100 transition-colors"
                          >
                            {resource.title} →
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <CoursesSection 
            careerTitle={selectedCareer.title}
            careerKey={userProfile.selected_career}
            isPremium={isPremium}
            showFilters={true}
            compact={false}
          />
        )}

        {/* Reality Check Tab */}
        {activeTab === 'reality-check' && (
          <div className="space-y-8">
            {/* What You'll Actually Do */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Actually Do Every Day</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Tasks</h3>
                  <ul className="space-y-3">
                    {careerData.daily_tasks?.map((task, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Work Environment</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">Physical Demands</div>
                      <div className="text-gray-600">{careerData.reality_check?.physical_demands || "Moderate physical activity required"}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Work Environment</div>
                      <div className="text-gray-600">{careerData.reality_check?.work_environment || "Mix of indoor and outdoor work"}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Typical Day</div>
                      <div className="text-gray-600">{careerData.reality_check?.typical_day || "Hands-on work with problem solving"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenges & Rewards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-4">⚠️ Challenges to Expect</h3>
                <ul className="space-y-2">
                  {careerData.challenges?.map((challenge, index) => (
                    <li key={index} className="text-gray-700">• {challenge}</li>
                  )) || [
                    <li key="1" className="text-gray-700">• Physical demands of the work</li>,
                    <li key="2" className="text-gray-700">• Learning complex technical skills</li>,
                    <li key="3" className="text-gray-700">• Working in various weather conditions</li>
                  ]}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">✅ Rewards & Benefits</h3>
                <ul className="space-y-2">
                  {careerData.rewards?.map((reward, index) => (
                    <li key={index} className="text-gray-700">• {reward}</li>
                  )) || [
                    <li key="1" className="text-gray-700">• Good earning potential</li>,
                    <li key="2" className="text-gray-700">• Job security and demand</li>,
                    <li key="3" className="text-gray-700">• Tangible results from your work</li>
                  ]}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Local Opportunities Tab */}
        {activeTab === 'local-opportunities' && (
          <div className="space-y-8">
            {/* Location prompt */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Local Opportunities</h2>
              <p className="text-gray-600 mb-6">Enable location to see apprenticeships, training programs, and networking events near you.</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                📍 Enable Location Access
              </button>
            </div>

            {/* Placeholder local content */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Apprenticeship Programs</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="font-medium text-gray-900">IBEW Local 379</div>
                    <div className="text-sm text-gray-600">Electrical apprenticeship • Paid training</div>
                    <div className="text-sm text-blue-600">Applications open year-round</div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="font-medium text-gray-900">ABC Charlotte Chapter</div>
                    <div className="text-sm text-gray-600">Multi-trade apprenticeships • Merit-based</div>
                    <div className="text-sm text-green-600">Next class starts January</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Schools</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="font-medium text-gray-900">Central Piedmont Community College</div>
                    <div className="text-sm text-gray-600">Electrical Systems Technology</div>
                    <div className="text-sm text-purple-600">2-year program</div>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="font-medium text-gray-900">Miller-Motte Technical College</div>
                    <div className="text-sm text-gray-600">Electrical Technology</div>
                    <div className="text-sm text-orange-600">15-month program</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;