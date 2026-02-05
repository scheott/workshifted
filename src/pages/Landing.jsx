// src/pages/Landing.jsx - Sales Professional Pivot Version
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import Footer from '../components/Footer';
import LandingHeader from '../components/LandingHeader';

const Landing = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [assessmentsCompleted, setAssessmentsCompleted] = useState(null);

  useEffect(() => {
    const fetchCounts = async () => {
      const { count, error } = await supabase
        .from('assessment_results')
        .select('id', { count: 'exact', head: true });
      if (!error) setAssessmentsCompleted(count || 0);
    };
    fetchCounts();
  }, []);

  useEffect(() => {
    const checkUserStatus = async () => {
      if (authLoading) return;
      if (!user) { setChecking(false); return; }
      const { count, error } = await supabase
        .from('assessment_results')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .limit(1);
      if (error) {
        console.error(error);
        navigate('/assessment', { replace: true });
      } else {
        navigate(count > 0 ? '/dashboard' : '/assessment', { replace: true });
      }
    };
    checkUserStatus();
  }, [user, authLoading, navigate]);

  if (authLoading || checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="flex items-center space-x-2" role="status" aria-live="polite">
          <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-lg text-gray-700">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />

      {/* Hero Section - Sales Focus */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-6">
                🎯 For Sales Professionals Only
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Don't Get Replaced by AI Sales Tools—{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
                Become the AI-Powered Closer They Can't Fire
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              SDRs are being replaced by Clay, Apollo, and AI sequencing tools. Take our 5-minute Sales AI Risk Assessment to discover your automation vulnerability—and get a 30-day playbook to 10x your quota instead of losing your job.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                to="/assessment"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                aria-label="Start your free AI sales risk assessment"
              >
                Get My Sales AI Risk Score (Free)
              </Link>
              <a
                href="#how-it-works"
                className="text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors border-2 border-blue-600"
              >
                See How It Works
              </a>
            </div>

            <div className="text-sm text-gray-600 mb-12">
              <span className="font-medium">✨ Free assessment</span> • <span className="font-medium">5 minutes</span> • <span className="font-medium">Sales-specific playbook</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Sales Specific */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The Sales AI Revolution Is Here
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              <em>AI is already transforming sales. The question is: will you lead it or be replaced by it?</em>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-red-600 mb-2">47%</div>
              <div className="text-sm text-gray-600">
                of SDR tasks can be automated by current AI tools <sup>①</sup>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">3x</div>
              <div className="text-sm text-gray-600">
                faster deal velocity for reps using AI prospecting tools <sup>②</sup>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">82%</div>
              <div className="text-sm text-gray-600">
                of B2B buyers prefer human closers over AI for complex deals <sup>③</sup>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">30d</div>
              <div className="text-sm text-gray-600">
                to become an AI-powered closer with the right playbook <sup>④</sup>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500 max-w-3xl mx-auto space-y-1">
            <div>
              <sup>①</sup> OpenAI/UPenn task exposure estimates for sales development roles.
              <a className="ml-1 underline" href="https://arxiv.org/pdf/2303.10130.pdf" target="_blank" rel="noopener noreferrer">Source</a>
            </div>
            <div>
              <sup>②</sup> Based on Apollo.io and Clay user performance data for AI-enhanced prospecting.
            </div>
            <div>
              <sup>③</sup> Gartner B2B Buying Journey research on buyer preferences for complex sales.
            </div>
            <div>
              <sup>④</sup> WorkShifted 30-day AI Sales Transformation Playbook framework.
            </div>
          </div>
        </div>
      </section>

      {/* Career Evolution Examples - Sales Specific */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              3 Types of Sales Jobs. Only 1 Survives AI.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't abandon your sales career. Transform into an AI-powered closer that companies will pay a premium for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* At Risk */}
            <div className="bg-red-50 rounded-2xl p-8 shadow-lg border border-red-200">
              <div className="text-center mb-6">
                <span className="text-4xl">⚠️</span>
                <h3 className="text-xl font-bold text-red-900 mt-4">HIGH RISK</h3>
                <p className="text-red-700">The AI-Replaced SDR</p>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>❌ Cold calling from lists</li>
                <li>❌ Manual email sequences</li>
                <li>❌ Data entry & CRM updates</li>
                <li>❌ Basic qualification calls</li>
                <li>❌ Volume-based metrics only</li>
              </ul>
              <div className="mt-6 text-center">
                <span className="text-xs text-red-600 font-medium">Timeline: 12-24 months</span>
              </div>
            </div>

            {/* Transitioning */}
            <div className="bg-orange-50 rounded-2xl p-8 shadow-lg border border-orange-200">
              <div className="text-center mb-6">
                <span className="text-4xl">🔄</span>
                <h3 className="text-xl font-bold text-orange-900 mt-4">MODERATE RISK</h3>
                <p className="text-orange-700">The AI-Augmented AE</p>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>✅ Uses AI for research</li>
                <li>⚠️ Still does manual demos</li>
                <li>⚠️ Basic personalization</li>
                <li>✅ Some relationship building</li>
                <li>⚠️ Learning AI tools slowly</li>
              </ul>
              <div className="mt-6 text-center">
                <span className="text-xs text-orange-600 font-medium">Needs to evolve in 6-12 months</span>
              </div>
            </div>

            {/* Thriving */}
            <div className="bg-green-50 rounded-2xl p-8 shadow-lg border border-green-200">
              <div className="text-center mb-6">
                <span className="text-4xl">🚀</span>
                <h3 className="text-xl font-bold text-green-900 mt-4">AI-PROOF</h3>
                <p className="text-green-700">The AI-Powered Closer</p>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>✅ AI handles all prospecting</li>
                <li>✅ Focus on complex negotiations</li>
                <li>✅ Strategic account planning</li>
                <li>✅ Deep relationship building</li>
                <li>✅ 10x quota with AI leverage</li>
              </ul>
              <div className="mt-6 text-center">
                <span className="text-xs text-green-600 font-medium">In demand at 2x salary</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/assessment"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Find Out Which Category I'm In
            </Link>
          </div>
        </div>
      </section>

      {/* Evolution Paths */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your 30-Day Sales Evolution Path
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* SDR Evolution */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="bg-red-100 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-red-900">SDR / BDR</h3>
                <p className="text-sm text-red-700">Current risk level: CRITICAL</p>
              </div>

              <h4 className="font-semibold text-gray-900 mb-3">Evolution → AI-Enhanced Closer</h4>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-red-600">Danger zones:</span>
                  <p className="text-gray-600">Cold calling, list building, email sequences, basic qualification</p>
                </div>
                <div>
                  <span className="font-medium text-green-600">Safe zones:</span>
                  <p className="text-gray-600">Complex discovery, objection handling, relationship building</p>
                </div>
                <div>
                  <span className="font-medium text-blue-600">30-day plan:</span>
                  <p className="text-gray-600">Week 1: AI tool stack → Week 2: AI prospecting → Week 3: AI demos → Week 4: Position as closer</p>
                </div>
              </div>
            </div>

            {/* AE Evolution */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="bg-orange-100 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-orange-900">Account Executive</h3>
                <p className="text-sm text-orange-700">Current risk level: MODERATE</p>
              </div>

              <h4 className="font-semibold text-gray-900 mb-3">Evolution → Strategic Revenue Partner</h4>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-red-600">Danger zones:</span>
                  <p className="text-gray-600">Standard demos, follow-up sequences, proposal generation</p>
                </div>
                <div>
                  <span className="font-medium text-green-600">Safe zones:</span>
                  <p className="text-gray-600">Executive selling, strategic planning, complex negotiations</p>
                </div>
                <div>
                  <span className="font-medium text-blue-600">30-day plan:</span>
                  <p className="text-gray-600">Week 1: AI research mastery → Week 2: AI-powered demos → Week 3: Strategic selling → Week 4: Enterprise positioning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your AI Sales Transformation Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sales AI Risk Assessment</h3>
              <p className="text-gray-600">
                Answer 8 questions about your sales role, daily tasks, and current AI usage to get your personalized risk score.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3 Quick Wins (Free)</h3>
              <p className="text-gray-600">
                Get immediate action items you can implement today to start using AI in your sales process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">30-Day Playbook ($79)</h3>
              <p className="text-gray-600">
                Follow your complete transformation plan with AI tools, prompts, scripts, and positioning strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The AI-Powered Sales Professional Playbook
            </h2>
            <p className="text-xl text-gray-600">Everything you need to become irreplaceable in 30 days</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl mb-4">📊</div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Sales Tool Stack</h3>
              <p className="text-sm text-gray-600">Curated list of AI tools for prospecting, demos, follow-up, and closing—with setup guides</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl mb-4">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">50+ Battle-Tested Prompts</h3>
              <p className="text-sm text-gray-600">Copy-paste prompts for every stage of the sales cycle that actually work</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl mb-4">📅</div>
              <h3 className="font-semibold text-gray-900 mb-2">30-Day Action Plan</h3>
              <p className="text-sm text-gray-600">Week-by-week implementation guide with daily action items</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl mb-4">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Interview Scripts</h3>
              <p className="text-sm text-gray-600">Position yourself as an "AI-enhanced closer" in job interviews</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl mb-4">📈</div>
              <h3 className="font-semibold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-sm text-gray-600">Real examples of sales pros who pivoted from at-risk to irreplaceable</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl mb-4">🎥</div>
              <h3 className="font-semibold text-gray-900 mb-2">Video Walkthrough</h3>
              <p className="text-sm text-gray-600">Step-by-step video guide for implementing each week's action items</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Being Replaceable. Start Being Irreplaceable.
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join sales professionals who are getting ahead of AI disruption instead of being disrupted by it.
          </p>
          <Link
            to="/assessment"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            Get My Free Sales AI Risk Score
          </Link>
          <p className="text-sm text-blue-200 mt-4">
            5-minute assessment • Sales-specific results • 3 free quick wins
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
