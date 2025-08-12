// Updated Header component for Landing.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingHeader = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl md:text-3xl font-bold text-blue-600">
              WorkShifted
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-6" aria-label="Primary">
              <a 
                href="#how-it-works" 
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                How it Works
              </a>
              <a 
                href="#careers" 
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                Careers
              </a>
              
              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  Career Research
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                    <Link
                      to="/ai-job-displacement-statistics"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <div className="font-medium">AI Job Statistics</div>
                      <div className="text-xs text-gray-500">47% of jobs at automation risk</div>
                    </Link>
                    <Link
                      to="/will-ai-take-my-job-by-industry"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <div className="font-medium">Will AI Take My Job?</div>
                      <div className="text-xs text-gray-500">Industry-specific risk analysis</div>
                    </Link>
                    <Link
                      to="/recession-proof-careers-2025"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <div className="font-medium">Recession-Proof Careers</div>
                      <div className="text-xs text-gray-500">Jobs that survive economic downturns</div>
                    </Link>
                    <Link
                      to="/ai-vs-human-jobs-complete-guide"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <div className="font-medium">AI vs Human Jobs Guide</div>
                      <div className="text-xs text-gray-500">Complete automation analysis</div>
                    </Link>
                  </div>
                )}
              </div>
              
              <a 
                href="#faq" 
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                FAQ
              </a>
            </nav>
            
            <Link
              to="/auth"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
              aria-label="Sign in or create an account"
            >
              Free Assessment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#how-it-works" 
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it Works
              </a>
              <a 
                href="#careers" 
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </a>
              
              {/* Mobile Resources */}
              <div className="border-l-2 border-blue-200 pl-4">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Career Research</div>
                <div className="space-y-3">
                  <Link
                    to="/ai-job-displacement-statistics"
                    className="block text-sm text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI Job Statistics
                  </Link>
                  <Link
                    to="/will-ai-take-my-job-by-industry"
                    className="block text-sm text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Will AI Take My Job?
                  </Link>
                  <Link
                    to="/recession-proof-careers-2025"
                    className="block text-sm text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Recession-Proof Careers
                  </Link>
                  <Link
                    to="/ai-vs-human-jobs-complete-guide"
                    className="block text-sm text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI vs Human Jobs
                  </Link>
                </div>
              </div>
              
              <a 
                href="#faq" 
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              
              <Link
                to="/auth"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Free Assessment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default LandingHeader;