// src/pages/Landing.jsx – Conversion-optimized, AI-resilient framing, safe claims
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import Footer from '../components/Footer';

const Landing = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkUserStatus = async () => {
      if (authLoading) return;
      if (!user) {
        setChecking(false);
        return;
      }
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
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">WorkShifted</div>
            </div>
            <div className="flex items-center space-x-4 md:space-x-8">
              <nav className="hidden sm:flex items-center space-x-6" aria-label="Primary">
                <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">How it Works</a>
                <a href="#careers" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Careers</a>
                <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">FAQ</a>
              </nav>
              <Link
                to="/auth"
                className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                aria-label="Sign in or create an account"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-6">
                🤝 Office Skills → Hands-On Careers
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Worried about AI? Find{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                AI-resilient trade careers
              </span>{" "}
              that fit your strengths.
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              Take a quick question assessment to map your skills to in-demand trades. See estimated pay ranges, time-to-start, and starter courses—no hype, just options.
            </p>

            {/* Hero CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <Link
                to="/auth"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                data-cta="hero_start_assessment"
              >
                Start Free Question Assessment
              </Link>
              <button
                onClick={() => window.scrollTo({ top: document.getElementById('how-it-works')?.offsetTop || 0, behavior: 'smooth' })}
                className="w-full sm:w-auto border border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors"
                aria-label="See how WorkShifted works"
              >
                How it works
              </button>
            </div>

            {/* Trust / Proof */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">5</div>
                <div className="text-sm text-gray-600">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">0$</div>
                <div className="text-sm text-gray-600">Free to try</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">Instant</div>
                <div className="text-sm text-gray-600">Personalized matches</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">No CC</div>
                <div className="text-sm text-gray-600">No spam, ever</div>
              </div>
            </div>

            {/* Legal-safe clarity line */}
            <p className="text-xs text-gray-500 mt-6 max-w-xl mx-auto">
              No job is 100% “AI-proof.” Results are informational, not guarantees. Licensing and training requirements vary by state and employer.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">From Office to Opportunity in 3 Steps</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We translate your current strengths into practical trade career options you can pursue in months, not years.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.862 4.487A9.726 9.726 0 103.5 12.75M3 3l6 6" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Answer 20 Questions</h3>
              <p className="text-gray-600 leading-relaxed">About your work style, strengths, and goals. Takes under 5 minutes.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 4a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">See Your Top Matches</h3>
              <p className="text-gray-600 leading-relaxed">Get 2–3 career suggestions with estimated pay, training time, and why each fits you.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m-4-4h8" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow a Starter Roadmap</h3>
              <p className="text-gray-600 leading-relaxed">See beginner courses, typical timelines, and local/apprenticeship options to get moving.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Examples */}
      <section id="careers" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Career Transitions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Examples of where office skills commonly translate well. (Exact pay and requirements vary by location.)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Electrician */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center" aria-hidden="true">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span className="text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded">Steady demand</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Electrician</h3>
              <p className="text-gray-600 mb-4 text-sm">Great fit for analytical, detail-oriented folks who like systems and problem-solving.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Training:</span><span className="font-medium">Months to start; multi-year apprenticeship to advance</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Work style:</span><span className="font-medium">Hands-on, on-site</span></div>
              </div>
            </div>

            {/* HVAC */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center" aria-hidden="true">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 12a7.5 7.5 0 11-15 0" /></svg>
                </div>
                <span className="text-sm font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded">Growing field</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">HVAC Technician</h3>
              <p className="text-gray-600 mb-4 text-sm">Blend of technical troubleshooting and customer interaction; solid path to self-employment.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Training:</span><span className="font-medium">Trade program or apprenticeship</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Work style:</span><span className="font-medium">On-site, varied environments</span></div>
              </div>
            </div>

            {/* Plumber */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center" aria-hidden="true">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6" /></svg>
                </div>
                <span className="text-sm font-medium text-purple-700 bg-purple-100 px-2 py-1 rounded">Primarily on-site</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plumber</h3>
              <p className="text-gray-600 mb-4 text-sm">Organized, project-minded people do well; clear path from helper → journeyman → contractor.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Training:</span><span className="font-medium">Months to entry; license timelines vary by state</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Work style:</span><span className="font-medium">Hands-on, problem-solving</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightweight FAQ (addresses “is it difficult?” + safe claims) */}
      <section id="faq" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Quick answers</h2>
          <div className="space-y-4">
            <details className="bg-white border border-gray-200 rounded-xl p-5">
              <summary className="font-semibold text-gray-900 cursor-pointer">Is switching to the trades “hard”?</summary>
              <p className="mt-2 text-gray-600">
                It takes effort, but many people start in helper or apprentice roles within months. Expect hands-on learning, safety training, and steady skill building.
              </p>
            </details>
            <details className="bg-white border border-gray-200 rounded-xl p-5">
              <summary className="font-semibold text-gray-900 cursor-pointer">Do I need a degree?</summary>
              <p className="mt-2 text-gray-600">
                Usually no. Requirements vary by state and employer. Our results page outlines typical steps and links to starter courses.
              </p>
            </details>
            <details className="bg-white border border-gray-200 rounded-xl p-5">
              <summary className="font-semibold text-gray-900 cursor-pointer">Are these jobs “AI-proof”?</summary>
              <p className="mt-2 text-gray-600">
                Nothing is 100% AI-proof. Many trade tasks must be done on-site and rely on human judgment, making them less exposed than typical office roles.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to see your AI-resilient matches?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start the quick question assessment and get personalized trade career options with estimated pay and time-to-start.
          </p>
          <Link
            to="/auth"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            data-cta="footer_start_assessment"
          >
            Start Free Assessment
          </Link>
          <p className="text-xs text-blue-100 mt-4">Information only; not career, legal, or financial advice.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
