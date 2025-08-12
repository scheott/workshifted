// src/components/CheckoutModal.jsx - Clean rewrite with disclaimer
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { usePayments } from '../hooks/usePayments';

const PaymentDisclaimer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg mb-6">
      {/* Clickable header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between text-left hover:bg-yellow-100 transition-colors rounded-lg"
      >
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.19 2.5 1.732 2.5z" />
          </svg>
          <h4 className="font-semibold text-yellow-800">Important Disclaimer - Click to Read</h4>
        </div>
        <svg 
          className={`w-5 h-5 text-yellow-600 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expandable content */}
      {isExpanded && (
        <div className="px-4 pb-4">
          <div className="text-sm text-yellow-700 space-y-3">
            <div>
              <p className="font-medium">🎓 Educational Content Only</p>
              <p>WorkShifted provides career guidance and educational resources. We do not guarantee job placement, specific salary outcomes, or career success.</p>
            </div>
            
            <div>
              <p className="font-medium">📊 Individual Results Vary</p>
              <p>Career outcomes depend on market conditions, individual effort, location, economic factors, and personal circumstances beyond our control.</p>
            </div>
            
            <div>
              <p className="font-medium">🚫 No Professional Advice</p>
              <p>Our content is for informational purposes only and does not constitute professional career counseling, financial advice, or employment guarantees.</p>
            </div>
            
            <div>
              <p className="font-medium">🔗 Third-Party Resources</p>
              <p>We link to external training programs and resources but are not responsible for their content, quality, outcomes, or business practices.</p>
            </div>
            
            <div>
              <p className="font-medium">💰 One-Time Payment</p>
              <p>One-time payment of $29 for lifetime access. Refunds available within 30 days at our discretion.</p>
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-yellow-200">
            <p className="text-xs text-yellow-600">
              By proceeding with payment, you acknowledge that you have read and agree to our{' '}
              <a href="/terms" target="_blank" className="underline hover:text-yellow-800">Terms of Service</a>
              {' '}and{' '}
              <a href="/privacy" target="_blank" className="underline hover:text-yellow-800">Privacy Policy</a>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const CheckoutModal = ({ isOpen, onClose, onSuccess, trigger }) => {
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

  return (
    <>
      {/* Trigger button */}
      {trigger}
      
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Upgrade to Premium</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Premium Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">What you'll get:</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Personalized learning roadmap with progress tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Location-based apprenticeship and training opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Reality check insights about work conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Step-by-step career guidance</span>
                  </li>
                </ul>
              </div>

              {/* Disclaimer */}
              <PaymentDisclaimer />

              {/* Error Display */}
              {(paymentError || error) && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700">
                    {paymentError || error}
                  </p>
                </div>
              )}

              {/* Pricing */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">$29</div>
                  <div className="text-blue-700">one-time payment</div>
                  <div className="text-xs text-blue-600 mt-1">Lifetime access • 30-day refund policy</div>
                </div>
              </div>

              {/* Payment Button */}
              <button
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  'Get Lifetime Access - $29'
                )}
              </button>

              {/* Security Notice */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  🔒 Secure payment powered by Stripe
                </p>
              </div>

              {/* Money Back Guarantee */}
              <div className="mt-3 text-center">
                <p className="text-xs text-gray-600">
                  💰 30-day money-back guarantee • Lifetime access
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutModal;