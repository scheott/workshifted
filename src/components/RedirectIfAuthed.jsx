// src/components/RedirectIfAuthed.jsx - FIXED VERSION
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
        console.log('RedirectIfAuthed: Checking status for user:', user.id);
        
        // Check for assessment results - make sure table name matches your database
        const { data: assessmentData, error: assessmentError } = await supabase
          .from('assessment_results') // Ensure this matches your actual table name
          .select('id')
          .eq('user_id', user.id)
          .limit(1);

        if (assessmentError) {
          console.error('Error checking assessment:', assessmentError);
          setRedirectPath('/assessment');
          return;
        }

        // If no assessment, go to assessment
        if (!assessmentData || assessmentData.length === 0) {
          console.log('No assessment found, redirecting to assessment');
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
          console.error('Error checking profile:', profileError);
          // Fallback to dashboard
          setRedirectPath('/dashboard');
          return;
        }

        // Always send authenticated users with assessments to dashboard
        // They can navigate to results from there if they want
        console.log('User has assessment, going to dashboard');
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

  // Show loading while checking auth or user status
  if (loading || checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  // If user is authenticated and we have a redirect path, redirect
  if (user && redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }
  
  // If user is authenticated but no specific redirect path determined, go to dashboard
  if (user && !redirectPath) {
    return <Navigate to="/dashboard" replace />;
  }
  
  // If no user, render children (the auth form/landing page)
  return children;
}