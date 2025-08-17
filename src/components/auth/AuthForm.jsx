// src/components/auth/AuthForm.jsx - Fixed to default to signup for new users
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { trackUserLogin, trackUserRegistration } from '../../utils/analytics';

const AuthForm = ({ onSuccess }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if user came from a signup flow (assessment results) or login flow (header sign in)
  const shouldDefaultToSignup = location.pathname === '/auth' && 
    (location.state?.fromAssessment || 
     document.referrer.includes('/assessment') || 
     location.search.includes('mode=signup') ||
     (!location.search.includes('mode=signin'))); // Default to signup unless explicitly signin
  
  const [isLogin, setIsLogin] = useState(!shouldDefaultToSignup); // Default to signup for new users
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Listen for URL search params to determine mode
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const mode = urlParams.get('mode');
    if (mode === 'signin') {
      setIsLogin(true);
    } else if (mode === 'signup') {
      setIsLogin(false);
    }
  }, [location.search]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError(''); // Clear errors when user starts typing
  };

  const createUserProfile = async (userId, userData) => {
    try {
      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert([
          {
            id: userId,
            email: userData.email,
            first_name: userData.firstName || null,
            subscription_status: 'free',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ]);

      if (profileError) {
        console.error('Profile creation error:', profileError);
      } else {
        console.log('Profile created successfully');
      }
    } catch (err) {
      console.error('Error creating profile:', err);
    }
  };

  const getFriendlyErrorMessage = (error) => {
    const message = error?.message || '';
    if (message.includes('Invalid login credentials')) {
      return 'Invalid email or password. Please check your credentials and try again.';
    }
    if (message.includes('Email not confirmed')) {
      return 'Please check your email and click the confirmation link before signing in.';
    }
    if (message.includes('User already registered')) {
      return 'An account with this email already exists. Try signing in instead.';
    }
    if (message.includes('Password should be at least')) {
      return 'Password must be at least 6 characters long.';
    }
    if (message.includes('Signup is disabled')) {
      return 'New signups are temporarily disabled. Please try again later.';
    }
    return message || 'An unexpected error occurred. Please try again.';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    if (!isLogin && !formData.firstName?.trim()) {
      setError('Please enter your first name.');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        // Sign in
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email: formData.email.trim(),
          password: formData.password,
        });

        if (signInError) throw signInError;

        // Track login
        trackUserLogin('email');

        // Check if user has completed assessment
        if (data?.user?.id) {
          console.log('User signed in:', data.user.id);
          
          // For sign in, always go to dashboard
          // Dashboard will handle routing based on user's assessment status
          if (onSuccess) {
            onSuccess();
          } else {
            window.location.href = '/dashboard';
          }
        }

      } else {
        // Sign up
        console.log('Attempting signup with:', { 
          email: formData.email.trim(), 
          firstName: formData.firstName 
        });
        
        const { data, error: signUpErr } = await supabase.auth.signUp({
          email: formData.email.trim(),
          password: formData.password,
          options: {
            data: { 
              first_name: formData.firstName || undefined 
            },
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        });
        
        if (signUpErr) {
          console.error('Signup error:', signUpErr);
          throw signUpErr;
        }

        console.log('Signup response:', data);

        // Track registration
        trackUserRegistration('email');

        // The trigger should create the profile automatically, but let's be safe
        if (data?.user?.id) {
          // Wait a moment for the trigger to execute
          setTimeout(() => {
            createUserProfile(data.user.id, formData);
          }, 1000);
        }

        if (data?.user && !data?.user?.email_confirmed_at) {
          setSuccessMessage('Success! Check your email to confirm your account, then you can sign in.');
          setFormData({ email: '', password: '', firstName: '' });
          setTimeout(() => {
            setIsLogin(true);
            setSuccessMessage('');
          }, 2500);
        } else if (data?.user) {
          // Email confirmation not required (auto-confirm enabled)
          if (onSuccess) {
            onSuccess();
          } else {
            window.location.href = '/assessment';
          }
        }
      }
    } catch (err) {
      console.error('Auth error:', err);
      setError(getFriendlyErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setSuccessMessage('');
                // Update URL to reflect the mode change
                const url = new URL(window.location);
                url.searchParams.set('mode', !isLogin ? 'signin' : 'signup');
                window.history.replaceState({}, '', url);
              }}
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg transition-all duration-300">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span role="alert">{error}</span>
              </div>
            </div>
          )}

          {successMessage && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg transition-all duration-300">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
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
                  required
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter your first name"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
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
                placeholder={isLogin ? "Enter your password" : "Choose a password (min 6 characters)"}
              />
            </div>
          </div>

          {isLogin && (
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => navigate('/auth/reset-password')}
                className="text-sm text-blue-600 hover:text-blue-500 transition-colors duration-200"
              >
                Forgot your password?
              </button>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {loading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;