// src/components/LandingHeader.jsx - FIXED MISSING IMPORT
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // ADDED THIS IMPORT

const LandingHeader = () => {
  const { user } = useAuth(); // Now this will work
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isRoleSpecificOpen, setIsRoleSpecificOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsResourcesOpen(false);
    setIsRoleSpecificOpen(false);
    setIsMobileMenuOpen(false);
  };

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
              
              {/* Main Assessment Links */}
              <Link 
                to="/ai-career-risk-assessment"
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                Risk Assessment
              </Link>
              
              <Link 
                to="/ai-proof-your-career"
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                AI-Proof Guide
              </Link>

              {/* Role-Specific Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsRoleSpecificOpen(!isRoleSpecificOpen)}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  By Role
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isRoleSpecificOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isRoleSpecificOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    <Link
                      to="/ai-proof-marketing-careers"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsRoleSpecificOpen(false)}
                    >
                      Marketing Careers
                    </Link>
                    <Link
                      to="/ai-proof-finance-careers"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsRoleSpecificOpen(false)}
                    >
                      Finance & Banking
                    </Link>
                    <Link
                      to="/ai-proof-hr-careers"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsRoleSpecificOpen(false)}
                    >
                      HR & People Ops
                    </Link>
                    <Link
                      to="/ai-proof-sales-careers"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsRoleSpecificOpen(false)}
                    >
                      Sales & Business Dev
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  Research
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Industry Analysis</p>
                    </div>
                    <Link
                      to="/jobs-ai-cannot-replace"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      Jobs AI Can't Replace
                    </Link>
                    <Link
                      to="/ai-vs-human-jobs-complete-guide"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      AI vs Human Jobs Guide
                    </Link>
                    <Link
                      to="/will-ai-take-my-job-by-industry"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      Will AI Take My Job? (By Industry)
                    </Link>
                    <div className="px-4 py-2 border-b border-gray-100 mt-2">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Career Planning</p>
                    </div>
                    <Link
                      to="/recession-proof-careers-2025"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      Recession-Proof Careers 2025
                    </Link>
                    <Link
                      to="/ai-job-displacement-statistics"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      AI Job Displacement Statistics
                    </Link>
                  </div>
                )}
              </div>

              <a 
                href="#faq" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('#faq'); }}
                className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors text-sm font-medium cursor-pointer"
              >
                FAQ
              </a>
            </nav>

            {/* CTA Button - Auth-aware */}
            <Link
              to={user ? "/dashboard" : "/auth"}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm hover:shadow-md"
              aria-label={user ? "Go to your dashboard" : "Start your free AI career assessment"}
            >
              {user ? "Dashboard" : "Free Assessment"}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            
            {/* Core Assessment Links */}
            <Link
              to="/ai-career-risk-assessment"
              className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-3 px-4 rounded-md transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI Career Risk Assessment
            </Link>
            
            <Link
              to="/ai-proof-your-career"
              className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-3 px-4 rounded-md transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How to AI-Proof Your Career
            </Link>

            {/* Role-Specific Section */}
            <div className="pt-4">
              <div className="px-4 py-2">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">By Role</p>
              </div>
              <div className="space-y-1 ml-4">
                <Link
                  to="/ai-proof-marketing-careers"
                  className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Marketing Careers
                </Link>
                <Link
                  to="/ai-proof-finance-careers"
                  className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Finance & Banking Jobs
                </Link>
                <Link
                  to="/ai-proof-hr-careers"
                  className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HR & People Operations
                </Link>
                <Link
                  to="/ai-proof-sales-careers"
                  className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sales & Business Development
                </Link>
              </div>
            </div>

            {/* Research Section */}
            <div className="pt-4">
              <div className="px-4 py-2">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Research</p>
              </div>
              <div className="space-y-1 ml-4">
                <Link
                  to="/jobs-ai-cannot-replace"
                  className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Jobs AI Can't Replace
                </Link>
                <Link
                  to="/ai-vs-human-jobs-complete-guide"
                  className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  AI vs Human Jobs Guide
                </Link>
                <Link
                  to="/will-ai-take-my-job-by-industry"
                  className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Will AI Take My Job? (By Industry)
                </Link>
                <Link
                  to="/recession-proof-careers-2025"
                  className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Recession-Proof Careers 2025
                </Link>
                <Link
                  to="/ai-job-displacement-statistics"
                  className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  AI Displacement Statistics
                </Link>
              </div>
            </div>

            <a 
              href="#faq" 
              onClick={(e) => { e.preventDefault(); handleLinkClick('#faq'); }}
              className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium py-3 px-4 rounded-md cursor-pointer"
            >
              FAQ
            </a>

            {/* Mobile CTA Button */}
            <div className="pt-4 px-2">
              <Link
                to={user ? "/dashboard" : "/auth"}
                className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center shadow-sm hover:shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={user ? "Go to your dashboard" : "Start your free career assessment"}
              >
                {user ? "Dashboard" : "Free Assessment"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;