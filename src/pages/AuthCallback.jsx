// src/pages/AuthCallback.jsx
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
          if (user && active) check(user.id);
        });
        setTimeout(() => subscription.unsubscribe(), 3000);
      } else {
        check(user.id);
      }
    };

    const check = async (userId) => {
      try {
        const { count } = await supabase
          .from('assessment_results')
          .select('id', { count: 'exact', head: true })
          .eq('user_id', userId)
          .limit(1);
        if (!active) return;
        navigate(count > 0 ? '/dashboard' : '/assessment', { replace: true });
      } catch {
        if (active) navigate('/assessment', { replace: true });
      }
    };

    go();
    return () => { active = false; };
  }, [navigate]);

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="text-gray-700">Signing you in…</div>
    </div>
  );
}
