// src/pages/AuthCallback.jsx - FIXED VERSION
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import Footer from '../components/Footer';

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;

    const handleAuthCallback = async () => {
      try {
        // Wait for session (supabase parses the URL hash)
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('Session error:', sessionError);
          navigate('/auth', { replace: true });
          return;
        }

        let user = session?.user;

        if (!user) {
          // Listen for auth state changes if no immediate session
          const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user && active) {
              checkUserAndRoute(session.user);
            }
          });
          
          // Clean up subscription after timeout
          setTimeout(() => subscription.unsubscribe(), 5000);
          return;
        }

        await checkUserAndRoute(user);
      } catch (err) {
        console.error('Auth callback error:', err);
        if (active) navigate('/auth', { replace: true });
      }
    };

    const checkUserAndRoute = async (user) => {
      try {
        console.log('Checking user routing for:', user.id);
        
        // For OAuth users, ensure profile is created/updated
        if (user.app_metadata?.provider && user.app_metadata.provider !== 'email') {
          console.log('OAuth user detected, updating profile...');
          
          const { error: profileError } = await supabase.rpc('update_user_profile_from_oauth', {
            p_user_id: user.id
          });
          
          if (profileError) {
            console.error('Error updating OAuth profile:', profileError);
          }
        }
        
        // Check for assessment results - use the correct table name
        const { data: assessmentData, error: assessmentError } = await supabase
          .from('assessment_results') // Make sure this matches your actual table name
          .select('id')
          .eq('user_id', user.id)
          .limit(1);

        if (!active) return;
        
        if (assessmentError) {
          console.error('Error checking assessment results:', assessmentError);
          navigate('/assessment', { replace: true });
          return;
        }

        // If no assessment exists, send to assessment
        if (!assessmentData || assessmentData.length === 0) {
          console.log('No assessment found, redirecting to assessment');
          navigate('/assessment', { replace: true });
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
          // Fallback to dashboard if profile check fails
          navigate('/dashboard', { replace: true });
          return;
        }

        // Always send authenticated users with assessments to dashboard
        // They can navigate to results from there if they want
        console.log('User has assessment, going to dashboard');
        navigate('/dashboard', { replace: true });
        
      } catch (err) {
        console.error('User check error:', err);
        if (active) navigate('/assessment', { replace: true });
      }
    };

    handleAuthCallback();
    
    return () => { 
      active = false; 
    };
  }, [navigate]);

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-lg text-gray-700">Signing you in…</span>
        </div>
        <p className="text-sm text-gray-500">Setting up your account...</p>
      </div>
      <Footer />
    </div>
  );
}