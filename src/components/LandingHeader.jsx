// src/components/LandingHeader.jsx - CORRECT VERSION
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingHeader = () => {
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
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    <Link
                      to="/will-ai-take-my-job-by-industry"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      Will AI Take My Job? (By Industry)
                    </Link>
                    <Link
                      to="/ai-job-displacement-statistics"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      AI Job Displacement Statistics
                    </Link>
                    <Link
                      to="/ai-vs-human-jobs-complete-guide"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      AI vs Human Jobs Complete Guide
                    </Link>
                  </div>
                )}
              </div>


            </nav>

            {/* CTA Button - Always goes to /auth */}
            <Link
              to="/auth"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm hover:shadow-md"
            >
              Free Assessment/ Sign In
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
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-1">
              
              {/* Core Assessment Links - All go to /auth */}
              <Link
                to="/auth"
                className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-3 px-4 rounded-md transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI Career Risk Assessment
              </Link>
              
              <Link
                to="/auth"
                className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-3 px-4 rounded-md transition-colors font-medium"
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

              {/* Research Resources Section */}
              <div className="pt-4">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Research</p>
                </div>
                <div className="space-y-1 ml-4 mt-2">
                  <Link
                    to="/will-ai-take-my-job-by-industry"
                    className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Will AI Take My Job? (By Industry)
                  </Link>
                  <Link
                    to="/ai-job-displacement-statistics"
                    className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI Job Displacement Statistics
                  </Link>
                  <Link
                    to="/ai-vs-human-jobs-complete-guide"
                    className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI vs Human Jobs Complete Guide
                  </Link>
                </div>
              </div>
              
              <a 
                href="#faq" 
                className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors text-sm font-medium py-3 px-4 rounded-md"
                onClick={(e) => { 
                  e.preventDefault(); 
                  setIsMobileMenuOpen(false);
                  handleLinkClick('#faq'); 
                }}
              >
                FAQ
              </a>
              
              {/* Mobile CTA Button - Always goes to /auth */}
              <Link
                to="/auth"
                className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center shadow-sm hover:shadow-md mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;