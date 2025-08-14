
// src/pages/Dashboard.jsx - AI Career Insurance Command Center
import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { usePayments } from '../hooks/usePayments';
import Footer from '../components/Footer';
import DashboardHeader from '../components/DashboardHeader';

// Dashboard Components
import AIRiskStatus from '../components/dashboard/AIRiskStatus';
import EvolutionPaths from '../components/dashboard/EvolutionPaths';
import QuickActions from '../components/dashboard/QuickActions';
import AIToolsRecommendations from '../components/dashboard/AIToolsRecommendations';
import PremiumFeatures from '../components/dashboard/PremiumFeatures';
import CheckoutModal from '../components/CheckoutModal';

const UserDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { checkPaymentStatus } = usePayments();

  // State management
  const [userProfile, setUserProfile] = useState(null);
  const [latestAssessment, setLatestAssessment] = useState(null);
  const [assessmentHistory, setAssessmentHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  
  // Modals
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    try {
      setLoading(true);

      // Fetch user profile
      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        console.error('Error fetching profile:', profileError);
      }
      setUserProfile(profile);
      setIsPremium(profile?.subscription_status === 'premium');
      // Add this after setUserProfile(profile);


      // Fetch latest assessment
      const { data: latestAssessmentData, error: latestError } = await supabase
        .from('ai_risk_assessments')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      console.log('🔍 DASHBOARD DEBUG:');
      console.log('Latest Assessment Data:', latestAssessmentData);
      console.log('Evolution Paths:', latestAssessmentData?.evolution_paths);
      console.log('Risk Result:', latestAssessmentData?.risk_result);
      console.log('Answers:', latestAssessmentData?.answers);
      if (latestError && latestError.code !== 'PGRST116') {
        console.error('Error fetching latest assessment:', latestError);
      } else if (latestAssessmentData) {
        setLatestAssessment(latestAssessmentData);
      }

      // Fetch assessment history for trend analysis
      const { data: historyData, error: historyError } = await supabase
        .from('ai_risk_assessments')
        .select('risk_result, created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5);

      if (historyError) {
        console.error('Error fetching assessment history:', historyError);
      } else {
        setAssessmentHistory(historyData || []);
      }

    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Handle account deletion
  const handleDeleteAccount = () => {
    setShowDeleteModal(true);
  };

  const confirmDeleteAccount = async () => {
    if (deleteConfirmation !== 'DELETE') {
      alert('Please type DELETE to confirm account deletion');
      return;
    }

    setIsDeletingAccount(true);
    try {
      // Delete user data from all tables
      const tables = ['user_profiles', 'ai_risk_assessments'];
      
      for (const table of tables) {
        const { error } = await supabase
          .from(table)
          .delete()
          .eq('user_id', user.id);
          
        if (error) {
          console.error(`Error deleting from ${table}:`, error);
        }
      }

      // Sign out and redirect
      await supabase.auth.signOut();
      navigate('/', { replace: true });
      
    } catch (error) {
      console.error('Error deleting account:', error);
      alert('Error deleting account. Please try again or contact support.');
    } finally {
      setIsDeletingAccount(false);
      setShowDeleteModal(false);
      setDeleteConfirmation('');
    }
  };

  // Handle explore careers (retake assessment)
  const handleExploreCareers = () => {
    navigate('/assessment');
  };

  // Get display name for user
  const getDisplayName = () => {
    if (userProfile?.full_name) return userProfile.full_name;
    if (userProfile?.first_name) return userProfile.first_name;
    if (user?.user_metadata?.full_name) return user.user_metadata.full_name;
    if (user?.user_metadata?.first_name) return user.user_metadata.first_name;
    return user?.email?.split('@')[0] || 'User';
  };
  const handleDownloadTemplates = () => {
    if (isPremium) {
      navigate('/templates');
    } else {
      handleUpgrade();
    }
  };

  const handleAILeadershipGuide = () => {
    if (isPremium) {
      navigate('/ai-leadership-guide');
    } else {
      handleUpgrade();
    }
  };

  const handleViewSkillsRoadmap = () => {
    if (isPremium) {
      navigate('/skills-roadmap');
    } else {
      handleUpgrade();
    }
  };
    const handleViewPlan = () => {
    if (isPremium) {
      navigate('/plan');
    } else {
      handleUpgrade();
    }
  };


  const handleViewAIUpdates = () => {
    if (isPremium) {
      navigate('/ai-updates');
    } else {
      handleUpgrade();
    }
  };
  // Handle upgrade
  const handleUpgrade = () => {
    setShowCheckoutModal(true);
  };

  // Calculate days since last assessment
  const daysSinceAssessment = latestAssessment 
    ? Math.floor((new Date() - new Date(latestAssessment.created_at)) / (1000 * 60 * 60 * 24))
    : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-lg text-gray-700">Loading your AI career dashboard...</span>
        </div>
      </div>
    );
  }

  // If no assessment, guide them to take one
  if (!latestAssessment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <DashboardHeader 
          user={user}
          userProfile={userProfile}
          onSignOut={handleSignOut}
          onDeleteAccount={handleDeleteAccount}
          onExploreCareers={handleExploreCareers}
          currentPage="dashboard"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to WorkShifted, {getDisplayName()}!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's start by understanding your AI career risk and building your personalized protection plan.
            </p>
            <button
              onClick={() => navigate('/assessment')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Take Your AI Risk Assessment
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Takes 5 minutes • Get your personalized risk score and career protection strategy
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <DashboardHeader 
        user={user}
        onSignOut={handleSignOut}
        onDeleteAccount={handleDeleteAccount}
        onExploreCareers={handleExploreCareers}
        currentPage="dashboard"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AI Career Command Center
          </h1>
          <p className="text-gray-600">
            Monitor your AI risk, explore career evolution paths, and stay ahead of automation.
          </p>
        </div>

        {/* AI Risk Status - Hero Section */}
        <div className="mb-8">
          <AIRiskStatus 
            latestAssessment={latestAssessment}
            assessmentHistory={assessmentHistory}
            daysSinceAssessment={daysSinceAssessment}
            onRetakeAssessment={() => navigate('/assessment')}
            onViewResults={() => navigate('/plan')}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Evolution Paths */}
            <EvolutionPaths 
              evolutionPaths={latestAssessment.evolution_paths}
              selectedCareer={userProfile?.selected_career_data}
              onSelectPath={handleUpgrade}
              isPremium={isPremium}
            />

            {/* Premium Features Preview */}
            <PremiumFeatures 
              isPremium={isPremium}
              onUpgrade={handleUpgrade}
              userRole={latestAssessment.answers?.profile_role_family}
            />

          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            
            {/* Quick Actions */}
            <QuickActions
                isPremium={isPremium}
                daysSinceAssessment={daysSinceAssessment}
                onRetakeAssessment={handleExploreCareers}
                onViewResults={() => navigate('/results')}
                onUpgrade={handleUpgrade}
                onViewPlan={handleViewPlan}
                onViewSkillsRoadmap={handleViewSkillsRoadmap}
            />

            {/* AI Tools Recommendations */}
            <AIToolsRecommendations 
              userRole={latestAssessment.answers?.profile_role_family}
              userIndustry={latestAssessment.answers?.profile_industry}
              isPremium={isPremium}
              onUpgrade={handleUpgrade}
            />

          </div>
        </div>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-red-600 mb-4">Delete Account</h3>
            <p className="text-gray-600 mb-4">
              This will permanently delete your account and all associated data. This action cannot be undone.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Type <strong>DELETE</strong> to confirm:
            </p>
            <input
              type="text"
              value={deleteConfirmation}
              onChange={(e) => setDeleteConfirmation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
              placeholder="Type DELETE to confirm"
            />
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeleteConfirmation('');
                }}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                disabled={isDeletingAccount}
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteAccount}
                disabled={deleteConfirmation !== 'DELETE' || isDeletingAccount}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDeletingAccount ? 'Deleting...' : 'Delete Account'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <CheckoutModal
          isOpen={showCheckoutModal}
          onClose={() => setShowCheckoutModal(false)}
          userEmail={user?.email}
        />
      )}

      <Footer />
    </div>
  );
};

export default UserDashboard;