// src/components/LandingHeader.jsx - Updated with Sign In button
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
              <a 
                href="#how-it-works" 
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#how-it-works'); }}
              >
                How it Works
              </a>
              <a 
                href="#careers" 
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#careers'); }}
              >
                Careers
              </a>
              
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isRoleSpecificOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link
                      to="/ai-proof-marketing-careers"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsRoleSpecificOpen(false)}
                    >
                      Marketing Professionals
                    </Link>
                    <Link
                      to="/ai-proof-finance-careers"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsRoleSpecificOpen(false)}
                    >
                      Finance Professionals
                    </Link>
                    <Link
                      to="/ai-proof-sales-careers"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsRoleSpecificOpen(false)}
                    >
                      Sales Professionals
                    </Link>
                    <Link
                      to="/ai-proof-hr-careers"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsRoleSpecificOpen(false)}
                    >
                      HR Professionals
                    </Link>
                  </div>
                )}
              </div>
              
              <a 
                href="#faq" 
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#faq'); }}
              >
                FAQ
              </a>
            </nav>
            
            {/* Desktop Auth Buttons */}
            <div className="flex items-center space-x-3">
              <Link
                to="/auth?mode=signin"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm px-3 py-2 rounded-lg hover:bg-gray-50"
                aria-label="Sign in to your account"
              >
                Sign In
              </Link>
              <Link
                to="/assessment"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                aria-label="Start free assessment"
              >
                Free Assessment
              </Link>
            </div>
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
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3 bg-gray-50 border-t border-gray-200">
              <a 
                href="#how-it-works" 
                className="block text-gray-600 hover:text-blue-600 hover:bg-white transition-colors text-sm font-medium py-3 px-4 rounded-md"
                onClick={(e) => { 
                  e.preventDefault(); 
                  setIsMobileMenuOpen(false);
                  handleLinkClick('#how-it-works'); 
                }}
              >
                How it Works
              </a>
              <a 
                href="#careers" 
                className="block text-gray-600 hover:text-blue-600 hover:bg-white transition-colors text-sm font-medium py-3 px-4 rounded-md"
                onClick={(e) => { 
                  e.preventDefault(); 
                  setIsMobileMenuOpen(false);
                  handleLinkClick('#careers'); 
                }}
              >
                Careers
              </a>
              
              {/* Mobile Role-Specific Links */}
              <div className="space-y-1 pl-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">By Role</p>
                <Link
                  to="/ai-proof-marketing-careers"
                  className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Marketing Professionals
                </Link>
                <Link
                  to="/ai-proof-finance-careers"
                  className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Finance Professionals
                </Link>
                <Link
                  to="/ai-proof-sales-careers"
                  className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sales Professionals
                </Link>
                <Link
                  to="/ai-proof-hr-careers"
                  className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HR Professionals
                </Link>
              </div>
              
              <a 
                href="#faq" 
                className="block text-gray-600 hover:text-blue-600 hover:bg-white transition-colors text-sm font-medium py-3 px-4 rounded-md"
                onClick={(e) => { 
                  e.preventDefault(); 
                  setIsMobileMenuOpen(false);
                  handleLinkClick('#faq'); 
                }}
              >
                FAQ
              </a>
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 space-y-3">
                <Link
                  to="/auth?mode=signin"
                  className="block w-full text-center bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/assessment"
                  className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center shadow-sm hover:shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Free Assessment
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default LandingHeader;