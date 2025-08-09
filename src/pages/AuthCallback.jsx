// src/pages/AuthCallback.jsx - FIXED LOGIN ROUTING
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;

    const go = async () => {
      // Wait for session (supabase parses the URL hash)
      const { data: { session } } = await supabase.auth.getSession();
      let user = session?.user ?? null;

      if (!user) {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => {
          user = s?.user ?? null;
          if (user && active) check(user);
        });
        setTimeout(() => subscription.unsubscribe(), 3000);
      } else {
        check(user);
      }
    };

    const check = async (user) => {
      try {
        console.log('Auth callback - user data:', user);
        
        // For OAuth users, ensure profile is created/updated with proper name
        if (user.app_metadata?.provider && user.app_metadata.provider !== 'email') {
          console.log('OAuth user detected, updating profile...');
          
          // Call our helper function to update profile from OAuth data
          const { error: profileError } = await supabase.rpc('update_user_profile_from_oauth', {
            p_user_id: user.id
          });
          
          if (profileError) {
            console.error('Error updating OAuth profile:', profileError);
          } else {
            console.log('OAuth profile updated successfully');
          }
        }
        
        // FIXED: Check for both assessment results AND selected career
        const { data: assessmentData, error: assessmentError } = await supabase
          .from('assessment_results')
          .select('id')
          .eq('user_id', user.id)
          .limit(1);

        if (!active) return;
        
        if (assessmentError) {
          console.error('Error checking assessment results:', assessmentError);
          navigate('/assessment', { replace: true });
          return;
        }

        // If no assessment, go to assessment
        if (!assessmentData || assessmentData.length === 0) {
          navigate('/assessment', { replace: true });
          return;
        }

        // FIXED: Check if user has selected a career
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

        // FIXED: Route based on whether they have selected a career
        if (profileData?.selected_career && profileData?.selected_career_data) {
          // User has completed assessment AND selected a career -> go to results
          navigate('/results', { replace: true });
        } else {
          // User has assessment but hasn't selected career -> go to dashboard for career selection
          navigate('/dashboard', { replace: true });
        }
        
      } catch (err) {
        console.error('Auth callback error:', err);
        if (active) navigate('/assessment', { replace: true });
      }
    };

    go();
    return () => { active = false; };
  }, [navigate]);

  return (
    <div className="min-h-screen grid place-items-center">
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
    </div>
  );
}