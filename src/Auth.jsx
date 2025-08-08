// src/Auth.jsx
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import AuthForm from './components/auth/AuthForm';
import { supabase } from './lib/supabase';

const Auth = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) navigate('/dashboard', { replace: true });
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">Loading…</div>
    );
  }

  // If user exists, the effect will redirect. Render nothing.
  if (user) return null;

  return (
    <>
      <div className="absolute top-4 left-4">
        <Link to="/" className="text-blue-600 hover:text-blue-500 hover:underline">← Back</Link>
      </div>
      <AuthForm onSuccess={() => navigate('/assessment', { replace: true })} />
    </>
  );
};

export default Auth;