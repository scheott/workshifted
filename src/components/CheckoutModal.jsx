// src/components/CheckoutModal.jsx - Improved responsive design
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { usePayments } from '../hooks/usePayments';

const CheckoutModal = ({ isOpen, onClose, onSuccess }) => {
  const { user } = useAuth();
  const { initiatePayment, loading, error } = usePayments();
  const [paymentError, setPaymentError] = useState('');

  const handlePayment = async () => {
    try {
      setPaymentError('');
      const success = await initiatePayment(user.id, user.email);
      
      if (success) {
        onSuccess?.();
        onClose();
      }
    } catch (err) {
      console.error('Payment initiation error:', err);
      setPaymentError(err.message || 'Failed to start payment process. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-6 pb-4">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
            disabled={loading}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Icon and Title */}
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-green-600 mb-4">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Upgrade to Premium
            </h3>
            <p className="text-gray-600 text-sm">
              Unlock your complete career transition plan
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="px-6 pb-4">
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-gray-900 mb-3 text-sm">What's included:</h4>
            <div className="space-y-2">
              {[
                'Complete step-by-step learning paths',
                'Progress tracking with checkboxes',
                'Reality check analysis',
                'Skills breakdown insights',
                'Downloadable PDF career reports',
                'Full career transition guides'
              ].map((feature, index) => (
                <div key={index} className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                $29
                <span className="text-base font-normal text-gray-600 ml-1">one-time</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                No subscription • Lifetime access • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {(error || paymentError) && (
          <div className="mx-6 mb-4">
            <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{error || paymentError}</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="px-6 pb-6">
          <div className="space-y-3">
            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                'Continue to Payment'
              )}
            </button>

            <button
              onClick={onClose}
              disabled={loading}
              className="w-full text-gray-500 hover:text-gray-700 transition-colors py-2 text-sm disabled:opacity-50"
            >
              Maybe later
            </button>
          </div>
        </div>

        {/* Security Notice */}
        <div className="px-6 pb-6">
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center justify-center text-xs text-gray-500">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure payment processed by Stripe
            </div>
            <p className="text-xs text-gray-400 mt-1 text-center">
              Your payment information is encrypted and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;