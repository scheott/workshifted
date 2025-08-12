// src/pages/PaymentPages.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { usePayments } from '../hooks/usePayments';
import Footer from '../components/Footer';


const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  const { handlePaymentSuccess, loading } = usePayments();
  const [verificationStatus, setVerificationStatus] = useState('verifying');
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('=== PaymentSuccess Debug ===');
    console.log('Full URL:', window.location.href);
    console.log('Search params string:', window.location.search);
    console.log('All URL params:', Object.fromEntries(searchParams.entries()));
    
    // Try to get session ID from URL first, then fallback to sessionStorage
    let sessionId = searchParams.get('session_id');
    
    if (!sessionId) {
      console.log('No session_id in URL, trying sessionStorage...');
      sessionId = sessionStorage.getItem('stripe_session_id');
      console.log('Session ID from sessionStorage:', sessionId);
      
      // Clean up after use
      if (sessionId) {
        sessionStorage.removeItem('stripe_session_id');
      }
    }
    
    console.log('PaymentSuccess: Final session ID:', sessionId);
    console.log('PaymentSuccess: User:', user?.id);
    console.log('=== End Debug ===');
    
    if (!sessionId || !user) {
      console.error('Missing data:', { sessionId: !!sessionId, user: !!user });
      setError('Invalid payment session - no session ID found');
      setVerificationStatus('error');
      return;
    }

    const verifyAndActivate = async () => {
      try {
        console.log('Starting payment verification for session:', sessionId);
        const success = await handlePaymentSuccess(sessionId, user.id);
        
        if (success) {
          setVerificationStatus('success');
          // Redirect to dashboard after 3 seconds
          setTimeout(() => {
            navigate('/dashboard', { replace: true });
          }, 3000);
        } else {
          setVerificationStatus('error');
          setError('Failed to activate premium features');
        }
      } catch (err) {
        console.error('Payment verification error:', err);
        setVerificationStatus('error');
        setError(err.message || 'Verification failed');
      }
    };

    verifyAndActivate();
  }, [searchParams, user, handlePaymentSuccess, navigate]);

  if (verificationStatus === 'verifying' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Verifying Your Payment</h2>
          <p className="text-gray-600">Please wait while we activate your premium features...</p>
        </div>
      </div>
    );
  }

  if (verificationStatus === 'error') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
            <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Payment Verification Failed</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go to Dashboard
            </button>
            <p className="text-sm text-gray-500">
              If you continue to have issues, please contact support.
            </p>
          </div>
          
          {/* Debug info for development */}
          <div className="mt-4 p-3 bg-gray-100 rounded text-xs text-left">
            <strong>Debug Info:</strong><br />
            URL: {window.location.href}<br />
            Error: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
          <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Premium! 🎉</h2>
        <p className="text-gray-600 mb-6">
          Your payment was successful and premium features have been activated.
        </p>
        
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold text-gray-900 mb-2">What's now unlocked:</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>✅ Complete career transition plans</li>
            <li>✅ Course recommendations</li>
            <li>✅ Location based apprenticeship opportunities</li>
            <li>✅ Progress tracking</li>
          </ul>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          Redirecting to your dashboard in a few seconds...
        </p>
        
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          Go to Dashboard Now
        </button>
      </div>
    </div>
  );
};

const PaymentCancel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 mb-4">
          <svg className="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.19 2.5 1.732 2.5z" />
          </svg>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-2">Payment Cancelled</h2>
        <p className="text-gray-600 mb-6">
          No worries! Your payment was cancelled and no charges were made.
        </p>
        
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800">
            <strong>Still interested in upgrading?</strong><br />
            Premium features are available whenever you're ready to take the next step in your career transition.
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Back to Dashboard
          </button>
          
          <button
            onClick={() => navigate('/results')}
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
          >
            View Free Results
          </button>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">
          Questions? Contact us for help with your career transition.
        </p>
      </div>
      {/* Footer at bottom */}
      <Footer />
    </div>
  );
};

export { PaymentSuccess, PaymentCancel };