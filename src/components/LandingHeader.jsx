import React, { useState } from 'react';

const LandingHeader = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (href) => {
    // For demo purposes - in your app, use your routing solution
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setIsResourcesOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              WorkShifted
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-6" aria-label="Primary">
              <a 
                href="#how-it-works" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('#how-it-works'); }}
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium cursor-pointer"
              >
                How it Works
              </a>
              <a 
                href="#careers" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('#careers'); }}
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium cursor-pointer"
              >
                Careers
              </a>
              
              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                  aria-expanded={isResourcesOpen}
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

                {/* Desktop Dropdown Menu */}
                {isResourcesOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                      Career Research
                    </div>
                    <div className="py-2">
                      <a
                        href="/ai-job-displacement-statistics"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        onClick={() => setIsResourcesOpen(false)}
                      >
                        AI Job Displacement Statistics
                      </a>
                      <a
                        href="/will-ai-take-my-job-by-industry"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        onClick={() => setIsResourcesOpen(false)}
                      >
                        Will AI Take My Job? (By Industry)
                      </a>
            
                      <a
                        href="/ai-vs-human-jobs-complete-guide"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        onClick={() => setIsResourcesOpen(false)}
                      >
                        AI vs Human Jobs Complete Guide
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              <a 
                href="#faq" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('#faq'); }}
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium cursor-pointer"
              >
                FAQ
              </a>
            </nav>
            
            <a
              href="/auth"
              className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm whitespace-nowrap shadow-sm hover:shadow-md"
              aria-label="Start your free career assessment"
            >
              Free Assessment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2 -m-2 rounded-md"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
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
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-1">
              <a 
                href="#how-it-works" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('#how-it-works'); }}
                className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors text-base font-medium py-3 px-4 rounded-md cursor-pointer"
              >
                How it Works
              </a>
              <a 
                href="#careers" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('#careers'); }}
                className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors text-base font-medium py-3 px-4 rounded-md cursor-pointer"
              >
                Careers
              </a>
              
              {/* Mobile Resources Section */}
              <div className="bg-gray-50 rounded-md mx-2 p-4 my-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Career Research
                </div>
                <div className="space-y-2">
                  <a
                    href="/ai-job-displacement-statistics"
                    className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI Job Displacement Statistics
                  </a>
                  <a
                    href="/will-ai-take-my-job-by-industry"
                    className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Will AI Take My Job? (By Industry)
                  </a>
                  <a
                    href="/recession-proof-careers-2025"
                    className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Recession-Proof Careers 2025
                  </a>
                  <a
                    href="/ai-vs-human-jobs-complete-guide"
                    className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-3 hover:bg-white rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI vs Human Jobs Complete Guide
                  </a>
                </div>
              </div>

              <a 
                href="#faq" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('#faq'); }}
                className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors text-base font-medium py-3 px-4 rounded-md cursor-pointer"
              >
                FAQ
              </a>

              {/* Mobile CTA Button */}
              <div className="pt-4 px-2">
                <a
                  href="/auth"
                  className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center shadow-sm hover:shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Start your free career assessment"
                >
                  Free Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </header>
  );
};

export default LandingHeader;