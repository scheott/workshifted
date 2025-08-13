// src/pages/Landing.jsx - AI Career Evolution Pivot
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
      // To this:
      const { count, error } = await supabase
        .from('ai_risk_assessments')
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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-6">
                🚨 47% of jobs at AI risk by 2030
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Don't let AI replace you —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                learn to lead it
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get your AI-resistance score and discover 3 evolution paths that turn your current role into an AI-coordinating powerhouse. Build skills part-time while keeping your current job.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                to="/auth"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get My AI Risk Score (Free)
              </Link>
              <a
                href="#how-it-works"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-200"
              >
                See How It Works
              </a>
            </div>

            <p className="text-sm text-gray-600">
              5-minute assessment • Personalized roadmap • No spam • 47,000+ professionals protected
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 mb-4">Trusted by professionals at</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <span className="font-semibold text-gray-700">Google</span>
              <span className="font-semibold text-gray-700">Microsoft</span>
              <span className="font-semibold text-gray-700">Amazon</span>
              <span className="font-semibold text-gray-700">Meta</span>
              <span className="font-semibold text-gray-700">Netflix</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your AI-Proof Career Plan in 3 Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform AI anxiety into career advancement with a personalized evolution roadmap
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get Your AI Risk Score
              </h3>
              <p className="text-gray-600 mb-6">
                5-minute assessment analyzes your role's automation risk and identifies your AI-resistant strengths. See exactly which tasks are vulnerable and which make you irreplaceable.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Example:</strong> "Marketing Manager - 45% automation risk. Vulnerable: reporting, analysis. Protected: strategy, stakeholder alignment."
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Choose Your Evolution Path
              </h3>
              <p className="text-gray-600 mb-6">
                Discover 3 AI-resistant career evolutions tailored to your current role. Each path shows difficulty, timeline, and salary potential - no career abandonment required.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <strong>Paths:</strong> AI Marketing Strategist, RevOps Automation Lead, Content Systems Manager
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Execute Your 90-Day Plan
              </h3>
              <p className="text-gray-600 mb-6">
                Get step-by-step roadmap with specific tools, courses, and templates. Build AI-collaboration skills while positioning yourself as the "AI coordinator" at your company.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-purple-800">
                  <strong>Includes:</strong> Tool tutorials, LinkedIn scripts, boss proposal templates, certification paths
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Most jobs won't disappear — they'll evolve
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                The winners won't be those who avoid AI, but those who learn to direct it. Position yourself as the bridge between human insight and AI capability.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Stay in Your Industry</h3>
                    <p className="text-gray-600">Evolve within your current field instead of starting over. Leverage your existing relationships and domain expertise.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Build While Working</h3>
                    <p className="text-gray-600">Learn AI-collaboration skills part-time. No need to quit your job or take career risks.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Increase Your Value</h3>
                    <p className="text-gray-600">Become the person who brings AI solutions to your team. Position yourself for promotion, not replacement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Success Stories</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-600 mb-3">"Went from 'worried about AI' to leading our automation initiatives. Got promoted to AI Strategy Lead within 6 months."</p>
                  <p className="text-sm font-medium text-gray-900">Sarah K. - Marketing Manager → AI Strategy Lead</p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-600 mb-3">"Used the roadmap to build internal AI tools. Now I'm the go-to person for AI projects across 3 departments."</p>
                  <p className="text-sm font-medium text-gray-900">Mike R. - Financial Analyst → AI Operations Coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to AI-Proof Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 47,000+ professionals who've transformed AI anxiety into career advancement. Get your personalized roadmap in 5 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/auth"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Free Assessment →
            </Link>
            <a
              href="#careers"
              className="border border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200"
            >
              See Evolution Examples
            </a>
          </div>
          
          <p className="text-xs text-blue-100 mt-6">
            Free assessment • 5 minutes • No spam • Premium plan only $29
          </p>
        </div>
      </section>

      {/* Career Evolution Examples */}
      <section id="careers" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Resistant Career Evolution Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how professionals in different roles are positioning themselves as AI coordinators instead of AI competitors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Marketing Evolution */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-orange-100 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-orange-900">Financial Analyst</h3>
                <p className="text-sm text-orange-700">Automation Risk: 60%</p>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-3">Evolution Path: Strategic Finance Partner</h4>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-red-600">Danger zones:</span>
                  <p className="text-gray-600">Data processing, basic modeling, routine reporting</p>
                </div>
                
                <div>
                  <span className="font-medium text-green-600">Safe zones:</span>
                  <p className="text-gray-600">Business interpretation, stakeholder communication</p>
                </div>
                
                <div>
                  <span className="font-medium text-blue-600">90-day plan:</span>
                  <p className="text-gray-600">AI model validation → Automated insights → Business translation</p>
                </div>
              </div>
            </div>

            {/* PM Evolution */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-green-100 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-green-900">Project Manager</h3>
                <p className="text-sm text-green-700">Automation Risk: 30%</p>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-3">Evolution Path: AI Implementation Lead</h4>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-red-600">Danger zones:</span>
                  <p className="text-gray-600">Scheduling, status tracking, basic coordination</p>
                </div>
                
                <div>
                  <span className="font-medium text-green-600">Safe zones:</span>
                  <p className="text-gray-600">Change management, human-AI workflow design</p>
                </div>
                
                <div>
                  <span className="font-medium text-blue-600">90-day plan:</span>
                  <p className="text-gray-600">AI project coordination → Human-AI workflows → Change leadership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">How is this different from generic "learn AI" advice?</h3>
              <p className="text-gray-600">We focus on your specific role and create evolution paths within your current industry. Instead of "take a Python course," you get "become the AI coordinator for marketing teams" with exact steps tailored to your experience.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Do I need to learn coding?</h3>
              <p className="text-gray-600">Most paths require no coding. You'll learn to direct AI tools, design workflows, and position yourself strategically. Think "AI conductor" not "AI programmer."</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">What if my company doesn't use AI yet?</h3>
              <p className="text-gray-600">Perfect! You'll be positioned as the AI pioneer. We provide templates to propose AI initiatives and become the go-to person for automation projects.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">How much time does this require?</h3>
              <p className="text-gray-600">Plan for 3-5 hours per week. Build skills incrementally while keeping your current job. Most evolution paths take 90 days to establish credibility.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;