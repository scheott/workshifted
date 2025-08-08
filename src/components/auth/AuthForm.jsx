import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';

const EnhancedAuthForm = ({ onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [locationData, setLocationData] = useState(null);

  const getFriendlyErrorMessage = (error) => {
    if (error?.message.includes('Invalid login credentials')) {
      return 'Incorrect email or password. Please try again.';
    }
    if (error?.message.includes('Email not confirmed')) {
      return 'Please check your email and click the confirmation link before signing in.';
    }
    if (error?.message.includes('Password should be at least 6 characters')) {
      return 'Password must be at least 6 characters long.';
    }
    if (error?.message.includes('Invalid email')) {
      return 'Please enter a valid email address.';
    }
    if (error?.message.includes('User already registered')) {
      return 'An account with this email already exists. Try signing in instead.';
    }
    
    console.log('Supabase error:', error);
    return 'Something went wrong. Please try again or contact support if the problem persists.';
  };

  const requestLocationPermission = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by this browser.'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const locationData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: new Date().toISOString()
          };
          resolve(locationData);
        },
        (error) => {
          console.log('Location error:', error);
          // Don't reject, just resolve with null - location is optional
          resolve(null);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        }
      );
    });
  };

  const createUserProfile = async (userId, userData, locationData) => {
    const profileData = {
      user_id: userId,
      first_name: userData.firstName,
      location_lat: locationData?.latitude || null,
      location_lng: locationData?.longitude || null,
      location_consent: locationData ? true : false,
      subscription_status: 'free',
      created_at: new Date().toISOString()
    };

    const { error } = await supabase
      .from('user_profiles')
      .insert([profileData]);

    if (error) {
      console.error('Error creating user profile:', error);
      throw error;
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLocationRequest = async () => {
    try {
      const location = await requestLocationPermission();
      setLocationData(location);
      setShowLocationModal(false);
      return location;
    } catch (error) {
      console.error('Location permission denied:', error);
      setShowLocationModal(false);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        if (data.user) onSuccess();
      } else {
        // For signup, first show location permission modal
        setShowLocationModal(true);
        setLoading(false);
        return;
      }
    } catch (error) {
      setError(getFriendlyErrorMessage(error));
      setLoading(false);
    }
  };

  const completeSignup = async (locationData) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      
      if (error) throw error;
      
      if (data.user) {
        // Create user profile with location data
        await createUserProfile(data.user.id, formData, locationData);
        
        setSuccessMessage('Success! Check your email to confirm your account, then you can sign in.');
        setFormData({ email: '', password: '', firstName: '' });
        setTimeout(() => {
          setIsLogin(true);
          setSuccessMessage('');
        }, 3000);
      }
    } catch (error) {
      setError(getFriendlyErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const LocationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Help Us Find Opportunities Near You</h3>
          <p className="text-sm text-gray-500 mb-6">
            We'd like to use your location to show you relevant apprenticeships and training programs in your area. This is optional and you can change this later.
          </p>
          <div className="space-y-3">
            <button
              onClick={async () => {
                const location = await handleLocationRequest();
                completeSignup(location);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Allow Location Access
            </button>
            <button
              onClick={() => {
                setShowLocationModal(false);
                completeSignup(null);
              }}
              className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Skip for Now
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            We respect your privacy. Location data is only used to find local opportunities and is never shared with third parties.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {showLocationModal && <LocationModal />}
      
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setSuccessMessage('');
              }}
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg transition-all duration-300">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            </div>
          )}

          {successMessage && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg transition-all duration-300">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {successMessage}
              </div>
            </div>
          )}

          <div className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required={!isLogin}
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter your first name"
                />
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                required
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder={isLogin ? "Enter your password" : "Create a password (6+ characters)"}
              />
            </div>
          </div>

          {!isLogin && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm">
                  <p className="text-blue-700 font-medium">What happens next?</p>
                  <p className="text-blue-600 mt-1">
                    After creating your account, we'll ask for location permission (optional) to find apprenticeships and training programs near you. This helps us provide personalized career recommendations.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
            >
              <div className="flex items-center">
                {loading && (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {loading ? 'Please wait...' : (isLogin ? 'Sign in' : 'Create account')}
              </div>
            </button>
          </div>

          {!isLogin && (
            <div className="text-center">
              <p className="text-xs text-gray-500">
                By creating an account, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500 underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500 underline">
                  Terms of Service
                </a>
              </p>
            </div>
          )}

          {!isLogin && (
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setIsLogin(true);
                  setError('');
                  setSuccessMessage('');
                }}
                className="text-sm text-blue-600 hover:text-blue-500 hover:underline transition-colors duration-200"
              >
                ← Back to Sign In
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default EnhancedAuthForm;