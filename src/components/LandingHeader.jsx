// src/components/LandingHeader.jsx - Updated with new SEO page navigation
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isRoleSpecificOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
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
                      Finance & Banking Jobs
                    </Link>
                    <Link
                      to="/ai-proof-hr-careers"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsRoleSpecificOpen(false)}
                    >
                      HR & People Operations
                    </Link>
                    <Link
                      to="/ai-proof-sales-careers"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsRoleSpecificOpen(false)}
                    >
                      Sales & Business Development
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Research & Resources Dropdown */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Industry Analysis</p>
                    </div>
                    <Link
                      to="/jobs-ai-cannot-replace"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      Jobs AI Can't Replace (By Industry)
                    </Link>
                    <Link
                      to="/ai-vs-human-jobs-complete-guide"
                      className="block text-sm text-gray-700 hover:text-blue-600 py-2 px-4 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      AI vs Human Jobs Complete Guide
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

            {/* CTA Button */}
            <Link
              to="/auth"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm hover:shadow-md"
              aria-label="Start your free AI career assessment"
            >
              Free Assessment
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
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Research & Analysis</p>
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
                  Will AI Take My Job?
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
                to="/auth"
                className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center shadow-sm hover:shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Start your free career assessment"
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

// ===================================================================
// INTERNAL LINKING STRATEGY DOCUMENTATION
// ===================================================================

/*
LINKING HIERARCHY & FLOW:

1. **Homepage** → Core assessment pages
   - Primary CTA: AI Career Risk Assessment
   - Secondary: AI-Proof Your Career Guide

2. **Assessment Pages** → Role-specific pages
   - AI Career Risk Assessment → All role pages
   - AI-Proof Your Career → All role pages
   - Jobs AI Can't Replace → All role pages

3. **Role-Specific Pages** → Related content
   - Marketing → Finance, HR, Sales (cross-promotion)
   - Each role page → Assessment (conversion)
   - Each role page → Industry analysis pages

4. **Industry Pages** → Assessment conversion
   - All industry pages → AI Career Risk Assessment
   - Industry pages → Relevant role pages

LINKING RULES FOR EACH PAGE TYPE:

**Homepage (Landing.jsx):**
- Hero CTA → AI Career Risk Assessment
- Career examples → Role-specific pages
- FAQ → Supporting pages
- Footer → All major pages

**AI Career Risk Assessment:**
- Role examples → Role-specific pages
- "Get personalized plan" → Assessment signup
- Related content → Jobs AI Can't Replace
- Cross-links → All role pages

**AI-Proof Your Career:**
- Strategy examples → Role-specific pages
- Implementation plan → Assessment signup
- Skill categories → Role pages
- Related → Jobs AI Can't Replace

**Jobs AI Can't Replace:**
- Industry filters → Role-specific pages
- Human advantage examples → Role pages
- Strategy section → Assessment signup
- Related → AI vs Human Jobs Guide

**Role-Specific Pages (Marketing, Finance, HR, Sales):**
- Evolution paths → Assessment signup
- Related roles → Other role pages
- Industry insights → Jobs AI Can't Replace
- Skills → AI-Proof Your Career guide
- Footer → All assessment pages

**Supporting Pages:**
- AI vs Human Jobs → Role pages + Assessment
- Will AI Take My Job → Jobs AI Can't Replace
- Recession-Proof Careers → Assessment + Role pages
- Statistics → All core pages

CONTEXTUAL LINKING EXAMPLES:

In Marketing page content:
"While marketing automation is growing, finance professionals face even higher risks. Learn about [AI-proof finance careers](/ai-proof-finance-careers) or discover [which jobs AI can't replace](/jobs-ai-cannot-replace) across all industries."

In Assessment page content:
"Ready to dive deeper? Explore specific strategies for [marketing professionals](/ai-proof-marketing-careers), [finance workers](/ai-proof-finance-careers), or [HR specialists](/ai-proof-hr-careers)."

In Jobs AI Can't Replace:
"For detailed evolution strategies in your field, see our guides for [marketing careers](/ai-proof-marketing-careers) or take our [AI career risk assessment](/ai-career-risk-assessment) for personalized recommendations."

CONVERSION FUNNEL LINKING:

AWARENESS (High-traffic pages):
- Jobs AI Can't Replace
- AI vs Human Jobs Guide  
- Will AI Take My Job

CONSIDERATION (Problem-focused):
- AI Career Risk Assessment
- AI-Proof Your Career Guide

DECISION (Solution-focused):
- Role-specific pages
- Assessment signup

Each page should have 3-5 strategic internal links:
1. One "up" link (broader topic)
2. One "down" link (more specific)
3. One "lateral" link (related topic)
4. One conversion link (assessment)
5. One cross-promotion (other role/industry)

ANCHOR TEXT VARIETY:
- "AI career risk assessment"
- "personalized career roadmap"  
- "discover your evolution path"
- "AI-proof [role] careers"
- "get your risk score"
- "[industry] automation trends"
- "career evolution strategy"

SEO BENEFIT:
- Distributes link equity across all pages
- Keeps users engaged longer (lower bounce rate)
- Creates topic clusters for better rankings
- Provides multiple conversion paths
- Improves crawlability for search engines
*/