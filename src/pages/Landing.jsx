// src/pages/Landing.jsx - Updated with "Career Insurance" messaging
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import LandingHeader from '../components/LandingHeader'; // Add this import at the top

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-6">
                🛡️ AI-era career backup planning
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              What if your desk job{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                quits you?
              </span>{" "}
              Build career insurance with skilled trades.
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              Take a 5-minute assessment to discover which skilled trades match your strengths. Learn part-time on weekends while keeping your current job—no major life disruption required.
            </p>

            {/* Hero CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                to="/auth"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                data-cta="hero_start_assessment"
              >
                Start Free Assessment
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
                <div className="text-2xl md:text-3xl font-bold text-blue-600">$0</div>
                <div className="text-sm text-gray-600">Assessment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">Weekend</div>
                <div className="text-sm text-gray-600">Learning only</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-600">Keep</div>
                <div className="text-sm text-gray-600">Current job</div>
              </div>
            </div>

            {/* Legal-safe clarity line */}
            <p className="text-xs text-gray-500 mt-6 max-w-xl mx-auto">
              Educational guidance only. Individual results may vary. No employment, salary, or career success guarantees. Career and training requirements vary by location.
            </p>
          </div>
        </div>
      </section>

      {/* Why Career Insurance Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Build a Backup Plan Now?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Economic uncertainty and technological change make backup career options increasingly valuable for long-term security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-red-100 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.5 0L4.232 13.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Economic Uncertainty</h3>
              <p className="text-gray-600 leading-relaxed">
                Technology advancements and economic shifts can impact job security across industries. Diversified skills provide stability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hands-On Demand</h3>
              <p className="text-gray-600 leading-relaxed">
                Skilled trades require on-site work and human problem-solving, offering different economic drivers than many office roles.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Good Earning Potential</h3>
              <p className="text-gray-600 leading-relaxed">
                Many trades offer competitive wages. Median electrician salary: $56k-$98k annually, varying by location and specialization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Build Career Insurance in 3 Steps</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover your trade career options and create a weekend learning plan—all while keeping your current job security. 
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Take Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                Answer questions about your skills, interests, and work preferences. Takes 5 minutes and identifies which trades align with your strengths.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">See Your Matches</h3>
              <p className="text-gray-600 leading-relaxed">
                Get personalized career matches with local salary data, training timeline estimates, and explanations of why each fits your profile.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 9a1 1 0 110-2 1 1 0 010 2zm6-10V7a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h6a1 1 0 011 1z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build Your Insurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Get a weekend learning plan with specific courses, local training options, and a timeline to build trade skills gradually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Examples */}
      <section id="careers" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Career Insurance Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Examples of skilled trades that offer different economic foundations than typical office work. Exact requirements and compensation vary by location. "Career insurance" is a metaphor for skill diversification

            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Electrician */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Electrician</h3>
                  <p className="text-sm text-gray-600">Power systems & wiring</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Median Salary Range:</span>
                  <span className="font-semibold">$56k - $98k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Training Time:</span>
                  <span className="font-semibold">4-5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Weekend Learning:</span>
                  <span className="font-semibold text-green-600">✓ Possible</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Strong demand for residential, commercial, and industrial electrical work. Can often start with basic electrical courses.
              </p>
            </div>

            {/* Plumber */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Plumber</h3>
                  <p className="text-sm text-gray-600">Pipes & water systems</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Median Salary Range:</span>
                  <span className="font-semibold">$52k - $89k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Training Time:</span>
                  <span className="font-semibold">4-5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Weekend Learning:</span>
                  <span className="font-semibold text-green-600">✓ Possible</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Essential for all buildings. Good demand for service calls, new construction, and system maintenance.
              </p>
            </div>

            {/* HVAC */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">HVAC Technician</h3>
                  <p className="text-sm text-gray-600">Heating & cooling</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Median Salary Range:</span>
                  <span className="font-semibold">$48k - $77k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Training Time:</span>
                  <span className="font-semibold">6 months - 2 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Weekend Learning:</span>
                  <span className="font-semibold text-green-600">✓ Possible</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Year-round demand for climate control systems. Can start with basic HVAC courses and certifications.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Salary ranges based on U.S. Bureau of Labor Statistics data and may vary significantly by location, experience, and market conditions. Training requirements vary by state and employer.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            <details className="bg-white border border-gray-200 rounded-xl p-5">
              <summary className="font-semibold text-gray-900 cursor-pointer">Can I really learn a trade while working full-time?</summary>
              <p className="mt-2 text-gray-600">
                Many people successfully build trade skills through evening and weekend programs, online courses, and part-time apprenticeships. The timeline varies, but gradual skill development is common.
              </p>
            </details>
            <details className="bg-white border border-gray-200 rounded-xl p-5">
              <summary className="font-semibold text-gray-900 cursor-pointer">Do I need to quit my job to pursue trade training?</summary>
              <p className="mt-2 text-gray-600">
                Not necessarily. Many trade programs offer flexible scheduling including evening classes, weekend workshops, and online components. You can often build foundational knowledge before making any career changes.
              </p>
            </details>
            <details className="bg-white border border-gray-200 rounded-xl p-5">
              <summary className="font-semibold text-gray-900 cursor-pointer">What if I have no hands-on experience?</summary>
              <p className="mt-2 text-gray-600">
                Most trade programs are designed for beginners. Your transferable skills from office work—problem-solving, customer service, project management—often translate well to trade environments.
              </p>
            </details>
            <details className="bg-white border border-gray-200 rounded-xl p-5">
              <summary className="font-semibold text-gray-900 cursor-pointer">How long does it take to start earning in a trade?</summary>
              <p className="mt-2 text-gray-600">
                Timeline varies by trade and location. Some trades offer entry-level positions within months, while others require longer training. Many apprenticeships provide paid learning opportunities.
              </p>
            </details>
            <details className="bg-white border border-gray-200 rounded-xl p-5">
              <summary className="font-semibold text-gray-900 cursor-pointer">Are trade jobs recession-proof?</summary>
              <p className="mt-2 text-gray-600">
                No job is completely recession-proof. However, many trades involve essential services (electricity, plumbing, heating) that maintain demand across economic cycles, offering different risk profiles than some office roles.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build a Backup Plan?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the free assessment to discover which skilled trades match your strengths and interests. Build backup skills on weekends while keeping your current job security.
          </p>
          <Link
            to="/auth"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            data-cta="footer_start_assessment"
          >
            Start Free Assessment
          </Link>
          <p className="text-xs text-blue-100 mt-4">Educational guidance only. Not career, legal, or financial advice. Individual results may vary. "Career insurance" is a metaphor for skill diversification</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;