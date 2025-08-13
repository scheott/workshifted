// src/pages/Landing.jsx - AI Career Evolution Pivot Version
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-6">
                🤖 AI Career Evolution Strategy
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Don't let AI replace you—{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                learn to lead it
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take our 5-minute AI Career Risk Assessment to discover your automation vulnerability and get a personalized roadmap to become AI-resistant. Position yourself as the AI coordinator, not the AI casualty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                to="/auth"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                aria-label="Start your free AI career risk assessment"
              >
                Get My AI Risk Score (Free)
              </Link>
              <a
                href="#how-it-works"
                className="text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors border-2 border-blue-600"
              >
                See How It Works
              </a>
            </div>

            <div className="text-sm text-gray-600 mb-12">
              <span className="font-medium">✨ Free assessment</span> • <span className="font-medium">5 minutes</span> • <span className="font-medium">3,247+ professionals</span> already evolved their careers
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              AI Is Already Changing Careers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              <em>Based on current industry data and WorkShifted user assessments. Results vary by role and industry.</em>
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-red-600 mb-2">67%</div>
              <div className="text-sm text-gray-600">Marketing roles at automation risk</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">71%</div>
              <div className="text-sm text-gray-600">Data analysis jobs vulnerable</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-sm text-gray-600">Average productivity increase when AI-augmented</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">3-6mo</div>
              <div className="text-sm text-gray-600">Time to become AI-resistant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Evolution Examples */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Career Evolution, Not Career Change
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't abandon your experience. Transform your existing role into an AI-resistant position that leverages your expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Marketing Evolution */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="bg-blue-100 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-blue-900">Marketing Manager</h3>
                <p className="text-sm text-blue-700">Automation Risk: 45%</p>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-3">Evolution Path: AI Marketing Strategist</h4>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-red-600">Danger zones:</span>
                  <p className="text-gray-600">Reporting, basic analysis, A/B testing</p>
                </div>
                
                <div>
                  <span className="font-medium text-green-600">Safe zones:</span>
                  <p className="text-gray-600">Strategy, stakeholder alignment, brand voice</p>
                </div>
                
                <div>
                  <span className="font-medium text-blue-600">90-day plan:</span>
                  <p className="text-gray-600">Prompt engineering → AI content systems → Brand voice curation</p>
                </div>
              </div>
            </div>

            {/* Finance Evolution */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="bg-orange-100 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-orange-900">Financial Analyst</h3>
                <p className="text-sm text-orange-700">Automation Risk: 62%</p>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-3">Evolution Path: AI-Enhanced Financial Advisor</h4>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-red-600">Danger zones:</span>
                  <p className="text-gray-600">Data entry, basic modeling, report generation</p>
                </div>
                
                <div>
                  <span className="font-medium text-green-600">Safe zones:</span>
                  <p className="text-gray-600">Client relationships, complex planning, risk interpretation</p>
                </div>
                
                <div>
                  <span className="font-medium text-blue-600">90-day plan:</span>
                  <p className="text-gray-600">Financial AI tools → Advanced modeling → Client advisory positioning</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/auth"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Discover My Evolution Path
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your AI-Proofing Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600">
                Answer questions about your current role, daily tasks, and AI exposure to get your automation risk score.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Evolution Plan</h3>
              <p className="text-gray-600">
                Get your personalized AI-resistance roadmap with specific skills, tools, and positioning strategies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600">
                Follow your 90-day plan to become the AI coordinator in your field while keeping your current job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Is this about changing careers completely?</h3>
              <p className="text-gray-600">No. This is about evolving your current role to become AI-resistant. You'll build on your existing experience while positioning yourself as the AI pioneer in your field.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">How accurate are the automation risk scores?</h3>
              <p className="text-gray-600">Our risk assessments are based on current AI capabilities, industry automation trends, and task analysis. Individual results may vary based on company size, industry, and specific role responsibilities. This is educational guidance, not predictive certainty.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Do I need to learn programming?</h3>
              <p className="text-gray-600">Most evolution paths don't require coding. You'll focus on prompt engineering, AI tool mastery, and strategic positioning—skills that complement your existing expertise.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">How much time does this require?</h3>
              <p className="text-gray-600">Plan for 3-5 hours per week. Build skills incrementally while keeping your current job. Most evolution paths take 90 days to establish credibility. Results vary by individual effort and role complexity.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">What if my company doesn't want AI adoption?</h3>
              <p className="text-gray-600">You'll be positioned as the AI pioneer when they're ready. We provide templates to propose AI initiatives and become the go-to person for automation projects. This positions you for internal promotion or external opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your AI Career Evolution Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are getting ahead of AI disruption instead of being disrupted by it.
          </p>
          <Link
            to="/auth"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            Get My Free AI Risk Assessment
          </Link>
          <p className="text-sm text-blue-200 mt-4">
            5-minute assessment • Personalized results • No credit card required
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;