// Update to src/pages/Dashboard.jsx - Streamlined dashboard with confirmation modals

import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { useNavigate, useLocation } from 'react-router-dom';
import CheckoutModal from '../components/CheckoutModal';
import { usePayments } from '../hooks/usePayments';

const UserDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [userProfile, setUserProfile] = useState(null);
  const [assessmentResults, setAssessmentResults] = useState([]);
  const [topMatches, setTopMatches] = useState([]);
  const [activityLog, setActivityLog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showCareerSelection, setShowCareerSelection] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [confirmationAction, setConfirmationAction] = useState(null);
  const { checkPaymentStatus } = usePayments();

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  // Handle assessment results passed from Assessment page
  useEffect(() => {
    if (location.state?.topMatches) {
      setTopMatches(location.state.topMatches);
      setShowCareerSelection(true);
      // Clear the state so it doesn't persist on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Check premium status on load
  useEffect(() => {
    if (user) {
      checkPaymentStatus(user.id).then(result => {
        setIsPremium(result.isPremium);
      });
    }
  }, [user, checkPaymentStatus]);

  const fetchUserData = async () => {
    try {
      // Fetch user profile
      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (profileError) {
        console.error('Error fetching profile:', profileError);
      }

      // Set the profile (remove the RPC call that's causing 404)
      setUserProfile(profile);

      // Debug: Log the profile data to check selected_career
      console.log('User profile data:', profile);
      console.log('Selected career:', profile?.selected_career);
      console.log('Selected career data:', profile?.selected_career_data);

      // Fetch assessment results (most recent)
      const { data: assessments } = await supabase
        .from('assessment_results')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      // Fetch activity log
      const { data: activity } = await supabase
        .from('user_activity_log')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(10);

      setAssessmentResults(assessments || []);
      
      // If no assessment results from navigation state, use stored ones
      if (!location.state?.topMatches && assessments?.[0]?.career_matches) {
        setTopMatches(assessments[0].career_matches.slice(0, 3));
      }
      
      setActivityLog(activity || []);
      
      // Check if user has selected a career
      console.log('Checking selected career logic:', profile?.selected_career);
      if (profile?.selected_career) {
        console.log('User has selected career, hiding career selection modal');
        setShowCareerSelection(false);
      } else {
        console.log('User has no selected career');
      }
      
      // Check premium status
      const currentProfile = profile || userProfile;
      setIsPremium(currentProfile?.subscription_status === 'premium' || currentProfile?.subscription_status === 'paid');
      
      console.log('Final userProfile state will be:', profile);
      
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCareerSelection = async (selectedCareer) => {
    try {
      // Update user profile with selected career
      const { error } = await supabase
        .from('user_profiles')
        .update({
          selected_career: selectedCareer.key || selectedCareer.title.toLowerCase().replace(/\s+/g, '_'),
          selected_career_data: selectedCareer,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id);

      if (error) throw error;

      // Log the career selection activity
      await supabase
        .from('user_activity_log')
        .insert({
          user_id: user.id,
          activity_type: 'career_selected',
          activity_data: {
            career_title: selectedCareer.title,
            match_percentage: selectedCareer.matchPercentage,
            selected_at: new Date().toISOString()
          }
        });

      // Update local state immediately
      setUserProfile(prev => ({
        ...prev,
        selected_career: selectedCareer.key || selectedCareer.title.toLowerCase().replace(/\s+/g, '_'),
        selected_career_data: selectedCareer
      }));

      // Hide career selection modal
      setShowCareerSelection(false);

      // Navigate to Results page with the selected career
      navigate('/results');
      
    } catch (error) {
      console.error('Error selecting career:', error);
    }
  };

  const handleRetakeAssessment = () => {
    if (userProfile?.selected_career) {
      setConfirmationAction('retake');
      setShowConfirmationModal(true);
    } else {
      navigate('/assessment');
    }
  };

  const handleChangeCareerFocus = () => {
    setConfirmationAction('change_career');
    setShowConfirmationModal(true);
  };

  const confirmAction = async () => {
    if (confirmationAction === 'retake') {
      // Clear selected career when retaking assessment
      try {
        const { error } = await supabase
          .from('user_profiles')
          .update({
            selected_career: null,
            selected_career_data: null,
            updated_at: new Date().toISOString()
          })
          .eq('user_id', user.id);

        if (error) throw error;

        // Update local state
        setUserProfile(prev => ({
          ...prev,
          selected_career: null,
          selected_career_data: null
        }));

        // Log the activity
        await supabase
          .from('user_activity_log')
          .insert({
            user_id: user.id,
            activity_type: 'assessment_retaken',
            activity_data: {
              previous_career: userProfile?.selected_career_data?.title,
              retaken_at: new Date().toISOString()
            }
          });

      } catch (error) {
        console.error('Error clearing career selection:', error);
      }
      
      navigate('/assessment');
    } else if (confirmationAction === 'change_career') {
      setShowCareerSelection(true);
    }
    setShowConfirmationModal(false);
    setConfirmationAction(null);
  };

  // Add function to refresh user data after changes
  const refreshUserData = async () => {
    await fetchUserData();
  };

  const getDisplayName = () => {
    if (userProfile?.first_name) {
      return userProfile.first_name + (userProfile.last_name ? ` ${userProfile.last_name}` : '');
    }
    if (user?.user_metadata?.full_name) return user.user_metadata.full_name;
    if (user?.user_metadata?.name) return user.user_metadata.name;
    if (user?.user_metadata?.first_name) return user.user_metadata.first_name;
    return user?.email?.split('@')[0] || 'User';
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const handleUpgrade = () => {
    setShowCheckoutModal(true);
  };

  const handlePaymentSuccess = () => {
    setIsPremium(true);
    setShowCheckoutModal(false);
    fetchUserData();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-green-50">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-lg text-gray-700">Loading dashboard...</span>
        </div>
      </div>
    );
  };

  // Show career selection modal if user just completed assessment
  if (showCareerSelection && topMatches.length > 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold text-blue-600">WorkShifted</div>
                <div className="text-lg text-gray-600">Choose Your Path</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {getDisplayName().charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-gray-700 font-medium">{getDisplayName()}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Career Selection */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              🎉 Great! Here are your top career matches
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the career path you'd like to focus on. You can always change this later from your dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {topMatches.map((career, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-2 border-transparent hover:border-blue-300"
                onClick={() => handleCareerSelection(career)}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{career.matchPercentage}%</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{career.title}</h3>
                  <div className="text-sm text-gray-500 mb-4">Match Score</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Salary:</span>
                    <span className="font-semibold">{career.salary}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Time to start:</span>
                    <span className="font-semibold">{career.timeline}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {career.description}
                </p>

                <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Choose This Path →
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowCareerSelection(false)}
              className="text-gray-500 hover:text-gray-700 underline"
            >
              I'll decide later - take me to dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Regular dashboard view
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Left: Logo + Dashboard */}
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-blue-600">WorkShifted</div>
              <div className="text-lg text-gray-600">Dashboard</div>
            </div>

            {/* Right: User menu */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {getDisplayName().charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-gray-700 font-medium">{getDisplayName()}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl text-white p-6 mb-8">
          <h1 className="text-2xl font-bold mb-2">
            Welcome back, {getDisplayName()} 👋
          </h1>
          <p className="text-blue-100">
            {userProfile?.selected_career 
              ? `You're focused on becoming a ${userProfile.selected_career_data?.title || 'skilled tradesperson'}. Check your progress below!`
              : topMatches.length > 0 
                ? `Based on your assessment, you have ${topMatches.length} great career matches. Ready to pick your focus?`
                : "Ready to discover your perfect blue collar career? Take the assessment to get started!"
            }
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Career Focus & Quick Actions */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Career Focus Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {userProfile?.selected_career ? 'Your Career Focus' : 'Your Career Matches'}
                </h2>
              </div>
              
              {userProfile?.selected_career ? (
                // Show career progress tracking
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{userProfile.selected_career_data?.title}</h3>
                      <p className="text-gray-600">{userProfile.selected_career_data?.description}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{userProfile.selected_career_data?.matchPercentage}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Salary</div>
                      <div className="font-semibold">{userProfile.selected_career_data?.salary}</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Timeline</div>
                      <div className="font-semibold">{userProfile.selected_career_data?.timeline}</div>
                    </div>
                  </div>

                  {/* Progress Steps */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Your Progress</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Assessment Complete</span>
                        <span className="text-green-600">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Career Selected</span>
                        <span className="text-green-600">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Learning Plan Started</span>
                        <span className={isPremium ? "text-green-600" : "text-gray-400"}>
                          {isPremium ? "✓" : "○"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate('/results')}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    View Full Career Plan →
                  </button>
                </div>
              ) : topMatches.length > 0 ? (
                // Show career matches for selection
                <div className="grid md:grid-cols-3 gap-6">
                  {topMatches.map((career, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-900">{career.title}</h3>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{career.matchPercentage}%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Salary:</span>
                          <span className="font-semibold">{career.salary}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Time to start:</span>
                          <span className="font-semibold">{career.timeline}</span>
                        </div>
                      </div>

                      <button 
                        onClick={() => handleCareerSelection(career)}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        Focus on This Career →
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                // No assessment taken yet
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Career Matches Yet</h3>
                  <p className="text-gray-500 mb-6">Take our assessment to discover careers that match your skills!</p>
                  <button
                    onClick={() => navigate('/assessment')}
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Take Skills Assessment
                  </button>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            {(topMatches.length > 0 || userProfile?.selected_career) && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={handleRetakeAssessment}
                    className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-4 text-left transition-colors"
                  >
                    <div className="font-medium text-gray-900">Retake Assessment</div>
                    <div className="text-sm text-gray-500">Update your career matches</div>
                  </button>
                  
                  {userProfile?.selected_career ? (
                    <button
                      onClick={handleChangeCareerFocus}
                      className="bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-lg p-4 text-left transition-colors"
                    >
                      <div className="font-medium text-orange-900">Change Career Focus</div>
                      <div className="text-sm text-orange-600">Switch to a different career path</div>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowCareerSelection(true)}
                      className="bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-4 text-left transition-colors"
                    >
                      <div className="font-medium text-green-900">Choose Career Focus</div>
                      <div className="text-sm text-green-600">Pick your primary career path</div>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Upgrade Card */}
          <div className="space-y-8">
            {/* Upgrade Card */}
            {!isPremium && (
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl text-white p-6">
                <h3 className="text-lg font-bold mb-2">Unlock Your Full Potential</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get personalized courses, local opportunities, and step-by-step career plans.
                </p>
                <button
                  onClick={handleUpgrade}
                  className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Upgrade to Premium - $29
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md mx-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {confirmationAction === 'retake' ? 'Retake Assessment?' : 'Change Career Focus?'}
            </h3>
            <p className="text-gray-600 mb-6">
              {confirmationAction === 'retake' 
                ? 'This will update your career matches and may change your current career focus. You might lose some progress.'
                : 'Changing your career focus will reset your learning progress. You might lose some completed milestones.'
              }
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowConfirmationModal(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmAction}
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={showCheckoutModal}
        onClose={() => setShowCheckoutModal(false)}
        onSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default UserDashboard;