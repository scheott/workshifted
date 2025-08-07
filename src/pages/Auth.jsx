import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AuthForm from '../components/auth/AuthForm';

const Auth = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (user) {
    return <Navigate to="/assessment" replace />;
  }

  return <AuthForm onSuccess={() => window.location.reload()} />;
};

export default Auth;