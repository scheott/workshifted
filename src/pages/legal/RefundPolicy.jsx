// src/pages/legal/RefundPolicy.jsx - Updated for AI Career Evolution Pivot
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to WorkShifted
            </Link>
            <div className="text-xl font-bold text-blue-600">WorkShifted</div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Refund Policy</h1>
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h3 className="text-green-800 font-semibold mb-2">30-Day Money-Back Guarantee</h3>
                <p className="text-green-700 text-sm">
                  We're confident WorkShifted will help guide your AI career evolution. If you're not satisfied 
                  with your AI-resistance roadmap, we offer a full refund within 30 days of purchase.
                </p>
              </div>

              <h2>Our Commitment to You</h2>
              <p>
                At WorkShifted, we believe in the value of our AI career evolution platform. We want you to feel 
                confident in your investment in your professional future. That's why we offer a straightforward, 
                no-hassle refund policy.
              </p>

              <h2>Eligibility for Refunds</h2>
              <p>You may request a full refund if:</p>
              <ul>
                <li><strong>Within 30 days:</strong> Your refund request is made within 30 calendar days of your purchase date</li>
                <li><strong>Unsatisfied with content:</strong> You found the AI risk assessment, evolution roadmap, or premium resources did not meet your expectations</li>
                <li><strong>Technical issues:</strong> You experienced persistent technical problems that prevented you from accessing premium features</li>
                <li><strong>Changed circumstances:</strong> Your career situation changed significantly, making the AI evolution content no longer relevant</li>
                <li><strong>Inaccurate expectations:</strong> The premium content didn't match what was described in our marketing materials</li>
              </ul>

              <h2>What's Not Eligible</h2>
              <p>Refunds are not available in these situations:</p>
              <ul>
                <li>Requests made more than 30 days after purchase</li>
                <li>Buyer's remorse after completing the full premium AI evolution roadmap</li>
                <li>Dissatisfaction with career outcomes (we provide guidance, not guaranteed protection from automation)</li>
                <li>Changes in AI development that differ from our predictions or timelines</li>
                <li>Technical issues caused by user's device or internet connection</li>
                <li>Disagreement with AI risk assessment results or industry predictions</li>
              </ul>

              <h2>How to Request a Refund</h2>
              <p>Requesting a refund is simple:</p>
              <ol>
                <li><strong>Contact us:</strong> Email <a href="mailto:weworkshifted@gmail.com" className="text-blue-600 hover:underline">weworkshifted@gmail.com</a> with "Refund Request" in the subject line</li>
                <li><strong>Include details:</strong> Provide your account email, purchase date, and reason for the refund request</li>
                <li><strong>We respond quickly:</strong> We'll review your request within 2 business days</li>
                <li><strong>Fast processing:</strong> Approved refunds are processed within 5-7 business days</li>
              </ol>

              <h2>Refund Process</h2>
              <ul>
                <li><strong>Full refund:</strong> You'll receive the complete $29 purchase price</li>
                <li><strong>Original payment method:</strong> Refunds are issued to the same payment method used for purchase</li>
                <li><strong>Account access:</strong> Premium features will be deactivated upon refund processing</li>
                <li><strong>Data retention:</strong> Your AI risk assessment results and progress will remain accessible</li>
              </ul>

              <h2>Partial Use Policy</h2>
              <p>
                We understand that AI career evolution is a process. Even if you've used some premium features, 
                reviewed your AI-resistance roadmap, or accessed recommended courses, you're still eligible for a full refund 
                within the 30-day window if you're not satisfied with the overall value provided.
              </p>

              <h2>Alternative Solutions</h2>
              <p>
                Before requesting a refund, consider reaching out to us. We're often able to resolve issues through:
              </p>
              <ul>
                <li>Technical support for access problems</li>
                <li>Additional guidance on implementing your AI-resistance strategies</li>
                <li>Clarification on how to best use your risk assessment results</li>
                <li>Updated recommendations based on new AI developments in your industry</li>
                <li>Help interpreting your personalized evolution roadmap</li>
              </ul>

              <h2>AI Development Disclaimer</h2>
              <p>
                Since AI technology evolves rapidly and unpredictably, our assessments and recommendations represent 
                our best analysis based on current trends. We cannot guarantee the accuracy of future AI development 
                timelines or workplace impacts. Refunds based on disagreement with our AI predictions or risk assessments 
                are not automatically granted, but we'll review each case individually.
              </p>

              <h2>Questions About Refunds</h2>
              <p>
                We're here to help with any questions about our refund policy. Contact us at{' '}
                <a href="mailto:weworkshifted@gmail.com" className="text-blue-600 hover:underline">
                  weworkshifted@gmail.com
                </a>{' '}
                and we'll respond within 24 hours during business days (Monday-Friday, 9 AM - 5 PM EST).
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <h3 className="text-blue-800 font-semibold mb-2">Our Promise</h3>
                <p className="text-blue-700 text-sm">
                  We're committed to your AI career evolution success. If WorkShifted isn't the right fit for your 
                  professional development journey, we'll make the refund process as smooth as possible so you can 
                  find the resources that work best for your situation.
                </p>
              </div>

              <p className="text-sm text-gray-600 mt-8">
                Last updated: August 2025<br/>
                Questions? Contact: <a href="mailto:weworkshifted@gmail.com" className="text-blue-600 hover:underline">weworkshifted@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer at bottom */}
      <Footer />
    </div>
  );
};

export default RefundPolicy;