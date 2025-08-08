// src/components/auth/AuthForm.jsx
import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';

const AuthForm = ({ onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  const getFriendlyErrorMessage = (error) => {
    const msg = error?.message || '';
    if (msg.includes('Invalid login credentials')) return 'Incorrect email or password. Please try again.';
    if (msg.includes('Email not confirmed')) return 'Please check your email and click the confirmation link before signing in.';
    if (msg.includes('Password should be at least 6 characters')) return 'Password must be at least 6 characters long.';
    if (msg.includes('Invalid email')) return 'Please enter a valid email address.';
    if (msg.includes('User already registered')) return 'An account with this email already exists. Try signing in instead.';
    if (msg.includes('signup_disabled')) return 'Account registration is currently disabled. Please contact support.';
    if (msg.toLowerCase().includes('oauth')) return 'Sign-in with Google was canceled or failed. Please try again.';
    console.log('Supabase error:', error); // For debugging
    return 'Something went wrong. Please try again or contact support if the problem persists.';
  };

  const handleProviderLogin = async () => {
    try {
      setError('');
      setSuccessMessage('');
      setOauthLoading(true);
      // Note: OAuth requires a redirect. Supabase will handle session after returning to this URL.
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${origin}/auth`,
        },
      });
      if (error) throw error;
      // Redirect happens automatically on success.
    } catch (err) {
      setError(getFriendlyErrorMessage(err));
      setOauthLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        if (data.user) onSuccess();
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${origin}/auth`,
          },
        });
        if (error) throw error;
        if (data.user) {
          setSuccessMessage('Success! Check your email to confirm your account, then you can sign in.');
          setEmail('');
          setPassword('');
          setTimeout(() => {
            setIsLogin(true);
            setSuccessMessage('');
          }, 3000);
        }
      }
    } catch (err) {
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
              }}
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>

        {/* Alerts */}
        {error && (
          <div
            className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg transition-all duration-300"
            role="alert"
            aria-live="assertive"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              {error}
            </div>
          </div>
        )}

        {successMessage && (
          <div
            className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg transition-all duration-300"
            role="status"
            aria-live="polite"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
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

        {/* OAuth */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleProviderLogin}
            disabled={oauthLoading}
            className="w-full border border-gray-300 bg-white text-gray-800 py-2 px-4 rounded-md hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {oauthLoading ? 'Redirecting…' : 'Continue with Google'}
          </button>
        </div>

        <div className="flex items-center my-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-gray-500 text-sm">or continue with email</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <form className="mt-2 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPw ? 'text' : 'password'}
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder={isLogin ? 'Enter your password' : 'Create a password (6+ characters)'}
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute inset-y-0 right-0 px-3 text-sm text-gray-600 hover:text-gray-800"
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                >
                  {showPw ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          </div>

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
                {loading ? 'Please wait...' : isLogin ? 'Sign in' : 'Create account'}
              </div>
            </button>
          </div>

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

export default AuthForm;
