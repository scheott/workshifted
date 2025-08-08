import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

const Dashboard = () => {
  const { user } = useAuth();
  const [assessments, setAssessments] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      
      // Fetch user assessments
      const { data: assessmentData, error: assessmentError } = await supabase
        .from('assessment_responses')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (assessmentError) throw assessmentError;
      setAssessments(assessmentData || []);

      // Fetch user profile if you have one
      const { data: profileData } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      setUserProfile(profileData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getProgressPercentage = () => {
    // Calculate based on completed assessments, courses, etc.
    const steps = [
      assessments.length > 0, // Has taken assessment
      userProfile?.preferred_career, // Has selected career
      userProfile?.completed_courses?.length > 0, // Has completed courses
      userProfile?.resume_uploaded, // Has uploaded resume
    ];
    
    const completedSteps = steps.filter(Boolean).length;
    return Math.round((completedSteps / steps.length) * 100);
  };

  const getDashboardStats = () => {
    return {
      assessmentsTaken: assessments.length,
      careersExplored: assessments.reduce((acc, assessment) => {
        return acc + (assessment.career_matches?.length || 0);
      }, 0),
      coursesCompleted: userProfile?.completed_courses?.length || 0,
      daysActive: userProfile ? 
        Math.floor((new Date() - new Date(userProfile.created_at)) / (1000 * 60 * 60 * 24)) : 0
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-lg text-gray-700">Loading your dashboard...</span>
        </div>
      </div>
    );
  }

  const stats = getDashboardStats();
  const progressPercentage = getProgressPercentage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-blue-600">WorkShifted</div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome back, {user?.email?.split('@')[0]}
              </span>
              <button 
                onClick={() => supabase.auth.signOut()}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Career Journey</h1>
          <p className="text-gray-600">Track your progress and explore new opportunities</p>
        </div>

        {/* Progress Overview */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 mb-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-xl font-semibold mb-2">Your Progress</h2>
              <p className="text-blue-100">Keep building your path to a new career</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-3xl font-bold mb-1">{progressPercentage}%</div>
              <div className="w-32 bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Assessments</p>
                <p className="text-2xl font-bold text-gray-900">{stats.assessmentsTaken}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Careers Explored</p>
                <p className="text-2xl font-bold text-gray-900">{stats.careersExplored}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Courses Completed</p>
                <p className="text-2xl font-bold text-gray-900">{stats.coursesCompleted}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Days Active</p>
                <p className="text-2xl font-bold text-gray-900">{stats.daysActive}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview', icon: '📊' },
                { id: 'assessments', label: 'My Assessments', icon: '📝' },
                { id: 'careers', label: 'Career Matches', icon: '💼' },
                { id: 'learning', label: 'Learning Path', icon: '🎯' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Quick Actions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a href="/assessment" className="block p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group">
                      <div className="text-center">
                        <div className="text-2xl mb-2">🔄</div>
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">Retake Assessment</div>
                        <div className="text-sm text-gray-500">Get updated career matches</div>
                      </div>
                    </a>
                    
                    <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all group">
                      <div className="text-center">
                        <div className="text-2xl mb-2">📚</div>
                        <div className="font-medium text-gray-900 group-hover:text-green-600">Browse Courses</div>
                        <div className="text-sm text-gray-500">Explore learning options</div>
                      </div>
                    </button>
                    
                    <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all group">
                      <div className="text-center">
                        <div className="text-2xl mb-2">👥</div>
                        <div className="font-medium text-gray-900 group-hover:text-purple-600">Find Mentors</div>
                        <div className="text-sm text-gray-500">Connect with professionals</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    {assessments.length > 0 ? (
                      <div className="space-y-3">
                        {assessments.slice(0, 3).map((assessment, index) => (
                          <div key={assessment.id} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-sm text-gray-700">
                                Completed skills assessment
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">
                              {formatDate(assessment.created_at)}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-4">
                        No activity yet. Take your first assessment to get started!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'assessments' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Assessment History</h3>
                  <a href="/assessment" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Take New Assessment
                  </a>
                </div>

                {assessments.length > 0 ? (
                  <div className="space-y-4">
                    {assessments.map((assessment) => (
                      <div key={assessment.id} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="text-lg font-semibold text-gray-900">
                                Skills Assessment
                              </h4>
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                Completed
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">
                              Taken on {formatDate(assessment.created_at)}
                            </p>
                            
                            {assessment.career_matches && (
                              <div className="flex flex-wrap gap-2">
                                {assessment.career_matches.slice(0, 3).map((match, index) => (
                                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                    {match.title} ({match.match_percentage}%)
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          
                          <button className="ml-4 text-blue-600 hover:text-blue-800 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📋</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No assessments yet</h3>
                    <p className="text-gray-600 mb-6">Take your first skills assessment to discover career matches</p>
                    <a href="/assessment" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      Start Assessment
                    </a>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'careers' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Your Career Matches</h3>
                
                {assessments.length > 0 && assessments[0].career_matches ? (
                  <div className="grid gap-6">
                    {assessments[0].career_matches.map((career, index) => (
                      <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900">{career.title}</h4>
                            <p className="text-gray-600">{career.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600">
                              {career.match_percentage}%
                            </div>
                            <div className="text-sm text-gray-500">Match</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="font-semibold text-gray-900">{career.salary_range}</div>
                            <div className="text-sm text-gray-600">Avg. Salary</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="font-semibold text-gray-900">{career.training_time}</div>
                            <div className="text-sm text-gray-600">Training Time</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="font-semibold text-gray-900">{career.job_outlook}</div>
                            <div className="text-sm text-gray-600">Job Outlook</div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            {career.key_skills?.slice(0, 3).map((skill, skillIndex) => (
                              <span key={skillIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                                {skill}
                              </span>
                            ))}
                          </div>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🎯</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No career matches yet</h3>
                    <p className="text-gray-600 mb-6">Complete an assessment to see your personalized career matches</p>
                    <a href="/assessment" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      Start Assessment
                    </a>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'learning' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Your Learning Path</h3>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        Upgrade to Full Learning Plan
                      </h4>
                      <p className="text-gray-600">
                        Get personalized courses, mentorship, and step-by-step guidance for just $29
                      </p>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all">
                      Upgrade Now
                    </button>
                  </div>
                </div>

                {/* Sample Learning Content */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Recommended Next Steps</h4>
                  
                  <div className="space-y-3">
                    {[
                      { title: 'Complete Skills Assessment', completed: assessments.length > 0, time: '5 min' },
                      { title: 'Explore Career Matches', completed: false, time: '10 min' },
                      { title: 'Research Local Training Programs', completed: false, time: '30 min' },
                      { title: 'Connect with Industry Professionals', completed: false, time: '1 hour' },
                    ].map((step, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            step.completed ? 'bg-green-500' : 'bg-gray-300'
                          }`}>
                            {step.completed ? (
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                          <div>
                            <div className={`font-medium ${step.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                              {step.title}
                            </div>
                            <div className="text-sm text-gray-500">{step.time}</div>
                          </div>
                        </div>
                        {!step.completed && (
                          <button className="text-blue-600 hover:text-blue-800 transition-colors">
                            Start
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        {assessments.length === 0 && (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Ready to discover your perfect career match?
            </h3>
            <p className="text-gray-600 mb-6">
              Take our AI-powered skills assessment and unlock personalized career recommendations.
            </p>
            <a href="/assessment" className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all">
              Start Skills Assessment
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;