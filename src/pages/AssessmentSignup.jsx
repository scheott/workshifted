// src/pages/AssessmentSignup.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { computeRiskScore, suggestEvolutionPaths, buildFreeBlurb } from '../data/aiRiskEngine';
import Footer from '../components/Footer';
import { 
  CheckCircle, 
  TrendingUp, 
  AlertTriangle, 
  ArrowRight, 
  Sparkles,
  Shield,
  Target,
  Users,
  Brain
} from 'lucide-react';

const AssessmentSignup = () => {
  const [assessmentResults, setAssessmentResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    // If user is already authenticated, redirect to dashboard
    if (user) {
      navigate('/dashboard', { replace: true });
      return;
    }

    processAssessmentData();
  }, [user, location.state, navigate]);

  const processAssessmentData = async () => {
    // Get assessment data from location state or localStorage
    let assessmentData = location.state?.assessmentData;
    
    if (!assessmentData) {
      const stored = localStorage.getItem('tempAssessmentData');
      if (stored) {
        try {
          assessmentData = JSON.parse(stored);
        } catch (e) {
          console.error('Error parsing stored assessment data:', e);
          navigate('/assessment', { replace: true });
          return;
        }
      }
    }

    if (!assessmentData) {
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

      // Add a small delay for better UX
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setShowResults(true), 300);
      }, 1200);

    } catch (error) {
      console.error('Error computing assessment results:', error);
      navigate('/assessment', { replace: true });
    }
  };

  const extractInsights = () => {
    if (!assessmentResults) return {};

    const { risk, evolutionPaths } = assessmentResults;
    
    // More robust parsing with fallbacks
    const summaryMatch = risk.summary?.match(/Biggest driver: ([^.]+)\. Biggest moat: ([^.]+)\./);
    const biggestDriver = summaryMatch?.[1] || 'routine, repetitive tasks';
    const biggestMoat = summaryMatch?.[2] || 'strategic thinking and human judgment';
    
    const topPath = evolutionPaths?.[0];
    const quickWin = topPath?.why?.[0]?.replace(/^Quick win: /, '') || 
                    "Start learning AI tools in your field this week to stay ahead of automation";

    const riskLevel = risk.score < 35 ? 'low' : risk.score < 65 ? 'moderate' : 'high';
    
    return { biggestDriver, biggestMoat, quickWin, riskLevel, riskScore: risk.score };
  };

  const handleGetResults = () => {
    navigate('/auth', { 
      state: { 
        fromAssessment: true,
        assessmentCompleted: true 
      }
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Brain className="w-6 h-6 text-blue-600 animate-pulse" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-900">Analyzing Your AI Career Profile...</p>
            <p className="text-sm text-gray-600">Computing personalized insights from your responses</p>
          </div>
        </div>
      </div>
    );
  }

  if (!assessmentResults) {
    return null;
  }

  const { biggestDriver, biggestMoat, quickWin, riskLevel, riskScore } = extractInsights();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-3">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Your AI Career Assessment Results</h1>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Results Preview Card */}
        <div className={`bg-white rounded-xl shadow-xl p-8 mb-8 transition-all duration-700 ${
          showResults ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3 mr-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-left">
                <h2 className="text-3xl font-bold text-gray-900">Assessment Complete!</h2>
                <p className="text-lg text-gray-600">Here are your key AI career insights</p>
              </div>
            </div>
          </div>

          {/* Key Insights Grid */}
          <div className="grid gap-6 mb-8">
            
            {/* Your Strength */}
            <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
              <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-green-800 mb-2 text-lg">Your AI-Proof Strength</h3>
                <p className="text-green-700 leading-relaxed">
                  <span className="font-semibold capitalize">{biggestMoat}</span> is your superpower in the AI age. 
                  While AI handles routine work, this human skill becomes MORE valuable and harder to replicate.
                </p>
              </div>
            </div>

            {/* Risk Area */}
            <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-100">
              <div className="bg-orange-100 rounded-full p-2 flex-shrink-0">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-orange-800 mb-2 text-lg">Area to Strengthen</h3>
                <p className="text-orange-700 leading-relaxed">
                  Your biggest automation risk comes from <span className="font-semibold">{biggestDriver}</span>. 
                  Don't worry – we've identified proven strategies to turn this into a competitive advantage.
                </p>
              </div>
            </div>

            
          </div>

          {/* Risk Score Teaser */}
          <div className="text-center mb-6">
            <div className="relative p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-gray-300 mb-2 tracking-wider">??%</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">Your Complete AI Risk Score</div>
                <div className="text-sm text-gray-500">
                  See your exact automation risk percentage and detailed breakdown
                </div>
              </div>
            </div>
          </div>

          {/* Value Preview */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              What You'll Get in Your Complete Results
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-full p-1">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm text-gray-700">Exact AI risk percentage for your role</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-full p-1">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm text-gray-700">Personalized 90-day action plan</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-full p-1">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm text-gray-700">AI-resistant skills to develop</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-full p-1">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm text-gray-700">Career positioning strategies</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`bg-white rounded-xl shadow-xl p-8 transition-all duration-700 delay-300 ${
          showResults ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-gray-900">Ready to Secure Your Career?</h2>

            </div>
            
            <div className="max-w-md mx-auto space-y-4">
              <button
                onClick={handleGetResults}
                className="group w-full bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                <span>Get My Complete Results</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="space-y-2">
                <p className="text-xs text-gray-500">
                  ✓ Free account • ✓ No credit card required • ✓ Instant access
                </p>
                

              </div>
              
              <div className="pt-2">
                <button
                  onClick={handleGetResults}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                >
                  Already have an account? Sign in here →
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