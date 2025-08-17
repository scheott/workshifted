// src/pages/AssessmentSignup.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { computeRiskScore, suggestEvolutionPaths, buildFreeBlurb } from '../data/aiRiskEngine';
import Footer from '../components/Footer';
import { CheckCircle, TrendingUp, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';

const AssessmentSignup = () => {
  const [assessmentResults, setAssessmentResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    // If user is already authenticated, redirect to dashboard
    if (user) {
      navigate('/dashboard', { replace: true });
      return;
    }

    // Get assessment data from location state or localStorage
    let assessmentData = location.state?.assessmentData;
    
    if (!assessmentData) {
      // Try to get from localStorage
      const stored = localStorage.getItem('tempAssessmentData');
      if (stored) {
        try {
          assessmentData = JSON.parse(stored);
        } catch (e) {
          console.error('Error parsing stored assessment data:', e);
        }
      }
    }

    if (!assessmentData) {
      // No assessment data found, redirect to assessment
      navigate('/assessment', { replace: true });
      return;
    }

    // Compute risk and evolution paths
    try {
      const risk = computeRiskScore(assessmentData);
      const evolutionPaths = suggestEvolutionPaths(assessmentData, risk);
      const freeBlurb = buildFreeBlurb(assessmentData, risk);

      setAssessmentResults({
        answers: assessmentData,
        risk,
        evolutionPaths,
        freeBlurb
      });
    } catch (error) {
      console.error('Error computing assessment results:', error);
      navigate('/assessment', { replace: true });
    }
    
    setIsLoading(false);
  }, [user, location.state, navigate]);

  // Remove the handleSignup function since we're redirecting to auth page

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your assessment...</p>
        </div>
      </div>
    );
  }

  if (!assessmentResults) {
    return null;
  }

  // Extract insights from the computed results
  const { risk, evolutionPaths, freeBlurb } = assessmentResults;
  const userRole = risk.role || 'Professional';
  
  // Parse the summary for biggest moat and driver
  const summaryMatch = risk.summary.match(/Biggest driver: ([^.]+)\. Biggest moat: ([^.]+)\./);
  const biggestDriver = summaryMatch ? summaryMatch[1] : 'routine tasks';
  const biggestMoat = summaryMatch ? summaryMatch[2] : 'human judgment';
  
  // Get the top evolution path for quick win
  const topPath = evolutionPaths[0];
  const quickWin = topPath?.why?.[0] || "Start learning AI tools in your field this week";

  // Determine risk level messaging
  const riskLevel = risk.score < 35 ? 'low' : risk.score < 65 ? 'moderate' : 'high';
  const riskColor = riskLevel === 'low' ? 'green' : riskLevel === 'moderate' ? 'orange' : 'red';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Your AI Career Assessment Results</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Results Preview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-blue-600 mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Great job completing your assessment!</h2>
            </div>
            <p className="text-lg text-gray-600">Here are your personalized insights:</p>
          </div>

          {/* 3 Key Insights */}
          <div className="space-y-6 mb-8">
            {/* Strength/Moat */}
            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Your Biggest Strength</h3>
                <p className="text-green-700">
                  <span className="capitalize">{biggestMoat}</span> - this becomes MORE valuable as AI handles routine work. 
                  You're already building the skills that matter most in the AI age.
                </p>
              </div>
            </div>

            {/* Risk Area */}
            <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-orange-800 mb-1">Watch This Area</h3>
                <p className="text-orange-700">
                  Your biggest automation risk comes from <span className="font-medium">{biggestDriver}</span>. 
                  The good news? There are proven strategies to turn this into an advantage.
                </p>
              </div>
            </div>

            {/* Quick Win */}
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-1">Your Quick Win</h3>
                <p className="text-blue-700">
                  {quickWin.replace(/^Quick win: /, '')}
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ready to see your complete AI Risk Score and personalized roadmap?
            </h3>
            <p className="text-gray-600 mb-4">
              Get your detailed analysis, specific skill recommendations, and 90-day action plan to become irreplaceable.
            </p>
          </div>
        </div>

        {/* Call to Action - Redirect to Login */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Complete Assessment Results</h2>
            <p className="text-gray-600 mb-6">Create your free account to access your full AI-resistance roadmap</p>
            
            <div className="max-w-md mx-auto space-y-4">
              <button
                onClick={() => navigate('/auth')}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center text-lg"
              >
                Get My Complete Results
                <ArrowRight className="w-6 h-6 ml-2" />
              </button>
              
              <p className="text-xs text-gray-500">
                Free account • No credit card required • Access your results instantly
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <span>Already have an account?</span>
                <button
                  onClick={() => navigate('/auth')}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign in here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AssessmentSignup;