import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">WorkShifted</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Success Stories</a>
              <Link
                to="/auth"
                aria-label="Sign in to your account"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block md:inline">Discover how your </span>
            <span className="text-blue-600">white collar skills</span>{' '}
            translate to{' '}
            <span className="text-green-600">high-paying blue collar careers</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stop feeling trapped in your office job. Find meaningful, well-paid work that matches your existing skills and gets you started in months, not years.
          </p>
          <Link
            to="/auth"
            aria-label="Start your skills assessment"
            className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Start Skills Assessment
          </Link>
          <p className="text-sm text-gray-500 mt-4">Free • Takes 2 minutes • No spam</p>
        </div>
      </section>

      {/* Benefit Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Skills Assessment Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Skills Assessment</h3>
            <p className="text-gray-600">
              Our AI-powered assessment analyzes your <strong>transferable skills</strong> and matches you with blue collar careers where you'll excel from day one.
            </p>
          </div>

          {/* Earning Potential Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Earning Potential</h3>
            <p className="text-gray-600">
              Discover careers with <strong>$50k-$95k+ salaries</strong>, often higher than your current role. Many blue collar jobs offer better work-life balance too.
            </p>
          </div>

          {/* Learning Path Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Path</h3>
            <p className="text-gray-600">
              Get personalized course recommendations and <strong>step-by-step plans</strong> to transition into your new career in 4-12 months.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to escape the cubicle?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands who've discovered fulfilling, high-paying careers that actually use their skills.
          </p>
          <Link
            to="/auth"
            aria-label="Start your skills assessment"
            className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Start Skills Assessment
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">WorkShifted</div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Terms</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-500 text-sm">
            © 2025 WorkShifted. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
