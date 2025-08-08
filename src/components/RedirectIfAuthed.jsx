// src/components/RedirectIfAuthed.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function RedirectIfAuthed({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null; // or a spinner
  return user ? <Navigate to="/dashboard" replace /> : children;
}
