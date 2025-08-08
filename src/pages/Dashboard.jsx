import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import CheckoutModal from '../components/CheckoutModal';
import { usePayments } from '../hooks/usePayments';

const UserDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const [assessmentResults, setAssessmentResults] = useState([]);
  const [topMatches, setTopMatches] = useState([]);
  const [activityLog, setActivityLog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const { checkPaymentStatus } = usePayments();

  // ✅ Fixed: Added useEffect for fetchUserData
  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

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

      if (!profile || (!profile.first_name && user.user_metadata)) {
        const { error: updateError } = await supabase.rpc('update_user_profile_from_oauth', {
          p_user_id: user.id
        });
        if (!updateError) {
          const { data: updatedProfile } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('user_id', user.id)
            .single();
          setUserProfile(updatedProfile);
        }
      } else {
        setUserProfile(profile);
      }

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
      setTopMatches(assessments?.[0]?.career_matches?.slice(0, 3) || []);
      setActivityLog(activity || []);
      
      // Check premium status
      const currentProfile = profile || userProfile;
      setIsPremium(currentProfile?.subscription_status === 'premium' || currentProfile?.subscription_status === 'paid');
      
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
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

  const getProgressPercentage = () => {
    let progress = 0;
    if (assessmentResults.length > 0) progress += 30;
    if (topMatches.length > 0) progress += 20;
    if (isPremium) progress += 25; // Premium adds more progress
    // TODO: Add more progress indicators based on courses completed, etc.
    return Math.min(progress, 100);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  // ✅ Fixed: Updated to use checkout modal
  const handleUpgrade = () => {
    setShowCheckoutModal(true);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // ✅ Added: Handle successful payment
  const handlePaymentSuccess = () => {
    setIsPremium(true);
    setShowCheckoutModal(false);
    // Refresh user data to reflect premium status
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
  }

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

            {/* Center: Progress */}
            <div className="hidden md:flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-700">
                Transition Progress: {getProgressPercentage()}%
              </span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getProgressPercentage()}%` }}
                />
              </div>
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
            {topMatches.length > 0 
              ? `Based on your assessment, you're on track to start as a ${topMatches[0]?.title} in ${topMatches[0]?.timeline?.replace('apprenticeship', '') || '6-12 months'}.`
              : "Ready to discover your perfect blue collar career? Take the assessment to get started!"
            }
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Career Matches & Learning Path */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Career Matches Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Your Career Matches</h2>
              
              {topMatches.length > 0 ? (
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

                      {/* Why This Fits You - Premium Preview */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Why This Fits You</h4>
                        <div className={`text-sm text-gray-600 ${!isPremium ? 'relative' : ''}`}>
                          {!isPremium && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-white z-10 flex items-center justify-end">
                              <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                          <div className={!isPremium ? 'filter blur-sm' : ''}>
                            <p>Your analytical skills translate perfectly to electrical troubleshooting...</p>
                            <p>Strong attention to detail matches safety requirements...</p>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={isPremium ? () => navigate('/results') : handleUpgrade}
                        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                          isPremium 
                            ? 'bg-blue-600 text-white hover:bg-blue-700' 
                            : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border border-yellow-300'
                        }`}
                      >
                        {isPremium ? 'View Full Career Plan →' : 'Unlock Full Plan'}
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
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

            {/* Learning Path Section */}
            {topMatches.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Your Learning Path</h2>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="space-y-6">
                    {/* Step 1 - Always unlocked */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Complete Skills Assessment</h3>
                        <p className="text-sm text-gray-500">✓ Done! You've identified your career matches.</p>
                      </div>
                    </div>

                    {/* Step 2 - Courses Preview */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">2</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Take Foundation Courses</h3>
                        <div className={`${!isPremium ? 'relative' : ''}`}>
                          {!isPremium && (
                            <div className="absolute inset-0 bg-white bg-opacity-80 z-10 flex items-center">
                              <span className="text-yellow-700 font-medium text-sm">🔒 Upgrade to see personalized courses</span>
                            </div>
                          )}
                          <div className={`space-y-2 ${!isPremium ? 'filter blur-sm' : ''}`}>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm font-medium">Electrical Fundamentals</div>
                              <div className="text-xs text-gray-500">Coursera • 8-12 hours • Free audit</div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <div className="text-sm font-medium">OSHA Safety Training</div>
                              <div className="text-xs text-gray-500">edX • 10 hours • Free</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Premium Steps */}
                    {[3, 4, 5].map((stepNum) => (
                      <div key={stepNum} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isPremium ? 'bg-gray-100' : 'bg-gray-50 border-2 border-dashed border-gray-300'
                          }`}>
                            {!isPremium ? (
                              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <span className="text-gray-600 font-semibold text-sm">{stepNum}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-semibold ${isPremium ? 'text-gray-900' : 'text-gray-400'}`}>
                            {stepNum === 3 && 'Get Certified'}
                            {stepNum === 4 && 'Apply for Apprenticeships'}
                            {stepNum === 5 && 'Network with Industry Pros'}
                          </h3>
                          <p className={`text-sm ${isPremium ? 'text-gray-500' : 'text-gray-400'}`}>
                            {!isPremium && '🔒 '}
                            {stepNum === 3 && 'Complete certification requirements for your chosen career'}
                            {stepNum === 4 && 'Find and apply to local apprenticeship programs'}
                            {stepNum === 5 && 'Connect with professionals in your target field'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {!isPremium && (
                    <div className="mt-6 pt-4 border-t">
                      <button
                        onClick={handleUpgrade}
                        className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                      >
                        Unlock Full Learning Path - $29
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Progress & Activity */}
          <div className="space-y-8">
            
            {/* Skills Progress */}
            {topMatches.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Skills Match</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-green-600">
                      <span className="text-white font-bold text-xl">{topMatches[0]?.matchPercentage}%</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Match with {topMatches[0]?.title}</p>
                  </div>
                  
                  {/* Progress Badges */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                      <div className="text-green-600 font-semibold text-sm">✓ Assessment Complete</div>
                    </div>
                    <div className={`border rounded-lg p-3 text-center ${
                      isPremium ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className={`font-semibold text-sm ${
                        isPremium ? 'text-green-600' : 'text-gray-400'
                      }`}>
                        {isPremium ? '✓' : '🔒'} Career Selected
                      </div>
                    </div>
                    <div className="bg-gray-50 border-gray-200 border rounded-lg p-3 text-center">
                      <div className="text-gray-400 font-semibold text-sm">⭘ First Course</div>
                    </div>
                    <div className="bg-gray-50 border-gray-200 border rounded-lg p-3 text-center">
                      <div className="text-gray-400 font-semibold text-sm">⭘ Certification</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Assessments</span>
                  <span className="font-semibold text-gray-900">{assessmentResults.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Career Matches</span>
                  <span className="font-semibold text-gray-900">{topMatches.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Plan Status</span>
                  <span className={`font-semibold ${isPremium ? 'text-green-600' : 'text-yellow-600'}`}>
                    {isPremium ? 'Premium' : 'Free'}
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
              {activityLog.length > 0 ? (
                <div className="space-y-3">
                  {activityLog.slice(0, 5).map((activity, index) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-blue-600 mt-2"></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          {activity.activity_type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </p>
                        <p className="text-xs text-gray-500">{formatDate(activity.created_at)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 text-center py-4">No recent activity</p>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/assessment')}
                  className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-3 text-left transition-colors"
                >
                  <div className="font-medium text-gray-900">Retake Assessment</div>
                  <div className="text-xs text-gray-500">Update your career matches</div>
                </button>
                
                {topMatches.length > 0 && (
                  <button
                    onClick={() => navigate('/results')}
                    className="w-full bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-3 text-left transition-colors"
                  >
                    <div className="font-medium text-blue-900">View Full Results</div>
                    <div className="text-xs text-blue-600">See detailed career information</div>
                  </button>
                )}

                {!isPremium && (
                  <button
                    onClick={handleUpgrade}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-3 text-left hover:shadow-lg transition-all"
                  >
                    <div className="font-medium">Upgrade to Premium</div>
                    <div className="text-xs text-blue-100">Unlock full career plans & courses</div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Fixed: Removed old upgrade modal, keeping only checkout modal */}
      
      {/* ✅ Added: CheckoutModal Component */}
      <CheckoutModal 
        isOpen={showCheckoutModal}
        onClose={() => setShowCheckoutModal(false)}
        onSuccess={handlePaymentSuccess}
      />

      {/* Bottom CTA for Free Users */}
      {!isPremium && topMatches.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Ready for your full career plan?</div>
                <div className="text-sm text-gray-500">Get courses, certifications, and local opportunities.</div>
              </div>
              {/* ✅ Fixed: Connected to checkout modal */}
              <button 
                onClick={() => setShowCheckoutModal(true)}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Upgrade - $29
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;