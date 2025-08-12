import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Contact = () => {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">support@workshifted.com</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Support</h3>
                    <p className="text-gray-600">We typically respond within 24 hours</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday, 9 AM - 5 PM EST</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium text-gray-900">Billing Questions</h3>
                    <p className="text-sm text-gray-600">Subscription and payment issues</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Technical Support</h3>
                    <p className="text-sm text-gray-600">Account access and technical issues</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Career Guidance</h3>
                    <p className="text-sm text-gray-600">Questions about our recommendations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional contact options */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Other Ways to Reach Us</h2>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Feature Requests:</strong> Have an idea for improving WorkShifted? 
                  We'd love to hear from you at weworkshifted@gmail.com

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer at bottom */}
      <Footer />
    </div>
  );
};

export default Contact;