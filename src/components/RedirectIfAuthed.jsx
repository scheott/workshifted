// src/components/RedirectIfAuthed.jsx - FIXED VARIABLE NAMES
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

export default function RedirectIfAuthed({ children }) {
  const { user, loading } = useAuth();
  const [redirectPath, setRedirectPath] = useState(null);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    if (!user || loading) return;
    
    const checkUserStatus = async () => {
      setChecking(true);
      try {
        // Check for assessment results
        const { count, error } = await supabase
          .from('ai_risk_assessments')
          .select('id', { count: 'exact', head: true })
          .eq('user_id', user.id)
          .limit(1);

        if (error) {
          console.error('Error checking assessment results:', error);
          setRedirectPath('/assessment');
          return;
        }

        // If no assessment, go to assessment
        if (!count || count === 0) {
          setRedirectPath('/assessment');
          return;
        }

        // Check if user has selected a career
        const { data: profileData, error: profileError } = await supabase
          .from('user_profiles')
          .select('selected_career, selected_career_data')
          .eq('user_id', user.id)
          .single();

        if (profileError) {
          console.error('Error checking user profile:', profileError);
          // Fallback to dashboard
          setRedirectPath('/dashboard');
          return;
        }

        setRedirectPath('/dashboard');

      } catch (error) {
        console.error('Error checking user status:', error);
        // Fallback to dashboard
        setRedirectPath('/dashboard');
      } finally {
        setChecking(false);
      }
    };

    checkUserStatus();
  }, [user, loading]);

  if (loading || checking) return null; // or a spinner
  
  if (user && redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }
  
  return user && !redirectPath ? <Navigate to="/dashboard" replace /> : children;
}