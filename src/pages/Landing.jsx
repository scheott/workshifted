// src/pages/Landing.jsx - Optimized for conversion and professionalism
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

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

  // Show loading while checking user status
  if (authLoading || checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
              <div className="hidden sm:flex items-center space-x-6">
                <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">How it Works</a>
                <a href="#careers" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Careers</a>
              </div>
              <Link
                to="/auth"
                className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-6">
                🎯 Skills-Based Career Matching
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Turn Your Office Skills Into a 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                High-Paying Trade Career
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover how your existing skills translate to skilled trades. Get matched with careers that pay well, 
              offer job security, and let you work with your hands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/auth"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Take Free Skills Assessment
              </Link>
              <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-500">

              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">✓</div>
                <div className="text-sm text-gray-600">No Credit Card Required</div>
              </div>

              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">✓</div>
                <div className="text-sm text-gray-600">No Spam</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">3-5min</div>
                <div className="text-sm text-gray-600">Quick Assessment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">✓</div>
                <div className="text-sm text-gray-600">Instant Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Office to Opportunity in 3 Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven process matches your existing skills to high-demand trade careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Take Skills Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                Answer 5 simple questions about your work style, technical aptitude, and preferences. Takes 3-5 minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Matched</h3>
              <p className="text-gray-600 leading-relaxed">
                See your top 3 career matches with salary ranges, training time, and honest pros/cons for each option.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 00-2-2z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow Your Roadmap</h3>
              <p className="text-gray-600 leading-relaxed">
                Get step-by-step guidance, training programs, and local opportunities to start your new career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Examples Section */}
      <section id="careers" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Career Transitions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how your office skills translate to these in-demand trades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Electrician */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">High Demand</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Electrician</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Problem-solving skills from IT/engineering translate perfectly. Work with complex systems and technology.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Salary:</span>
                  <span className="font-medium">Competitive pay</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Training:</span>
                  <span className="font-medium">6-24 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best for:</span>
                  <span className="font-medium">Analytical minds</span>
                </div>
              </div>
            </div>

            {/* HVAC */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">Growing Field</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">HVAC Technician</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Customer service skills from business roles shine here. Mix of technical work and client interaction.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Salary:</span>
                  <span className="font-medium">Good earning potential</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Training:</span>
                  <span className="font-medium">6-18 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best for:</span>
                  <span className="font-medium">People skills</span>
                </div>
              </div>
            </div>

            {/* Plumber */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">Recession-Proof</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plumber</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Project management skills from office work apply to complex installations and renovations.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Salary:</span>
                  <span className="font-medium">Strong income potential</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Training:</span>
                  <span className="font-medium">6-24 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Best for:</span>
                  <span className="font-medium">Problem solvers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why People Choose Skilled Trades
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Better Pay</h3>
              <p className="text-sm text-gray-600">
                Many trades pay more than office jobs, with less student debt required
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Job Security</h3>
              <p className="text-sm text-gray-600">
                Can't be outsourced or automated. Always need skilled hands locally
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M12 5.04c1.18 0 2.287.256 3.29.713M20.24 12.24a9 9 0 11-8.48-8.48" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Work-Life Balance</h3>
              <p className="text-sm text-gray-600">
                Clear boundaries between work and home. No endless emails or meetings
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Real Impact</h3>
              <p className="text-sm text-gray-600">
                See tangible results from your work. Help people solve real problems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Perfect Trade Career?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take our free 5-minute skills assessment and discover which trade careers match your background
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/auth"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Free Assessment
            </Link>
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-blue-100">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Takes 3-5 minutes
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                No email required
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">WorkShifted</div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 WorkShifted. All rights reserved. • Helping office workers discover fulfilling trade careers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;