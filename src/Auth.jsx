import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import AuthForm from './components/auth/AuthForm';
import { supabase } from './lib/supabase';

const Auth = () => {
  const { user, loading } = useAuth();

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      window.location.reload();
    } catch (error) {
      console.error('Error signing out:', error);
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back!</h2>
          <p className="text-gray-600">You're already signed in.</p>
          <div className="space-y-4">
            <a href="/assessment" className="block">
              <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Take Skills Assessment
              </button>
            </a>
            <button 
              onClick={handleSignOut}
              className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <AuthForm onSuccess={() => window.location.href = '/assessment'} />;
};

export default Auth;