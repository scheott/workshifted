import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    const init = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        if (!mounted.current) return;
        setSession(data.session ?? null);
        setUser(data.session?.user ?? null);
      } catch (e) {
        console.error('getSession error:', e);
      } finally {
        if (mounted.current) setLoading(false);
      }
    };

    init();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
      if (!mounted.current) return;
      setSession(newSession ?? null);
      setUser(newSession?.user ?? null);
      setLoading(false);
    });

    return () => {
      mounted.current = false;
      subscription?.unsubscribe();
    };
  }, []);

  return { user, session, userId: user?.id ?? null, isAuthenticated: !!user, loading };
};
