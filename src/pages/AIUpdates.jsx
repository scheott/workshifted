// AI Updates - General Industry News (News only)
// src/pages/AIUpdates.jsx

import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import DashboardHeader from '../components/DashboardHeader';
import { Bell, Calendar, ExternalLink, Clock, CheckCircle } from 'lucide-react';

const AIUpdates = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [waitlist, setWaitlist] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState(null);

  useEffect(() => {
    checkPremiumAndLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const checkPremiumAndLoad = async () => {
    if (!user) return;

    try {
      // Pull subscription + newsletter_waitlist in one query
      const { data: profile, error } = await supabase
        .from('user_profiles')
        .select('subscription_status, newsletter_waitlist, newsletter_waitlist_at')
        .eq('user_id', user.id)
        .single();

      if (error) throw error;

      if (profile?.subscription_status !== 'premium') {
        navigate('/dashboard');
        return;
      }

      setWaitlist(Boolean(profile?.newsletter_waitlist));
      setSavedAt(profile?.newsletter_waitlist_at || null);
    } catch (err) {
      console.error('Error checking access:', err);
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleWaitlist = async () => {
    if (!user) return;
    try {
      setSaving(true);
      const next = !waitlist;

      // Upsert in case the row doesn't exist for some reason
      const { data, error } = await supabase
        .from('user_profiles')
        .upsert(
          {
            user_id: user.id,
            newsletter_waitlist: next,
            newsletter_waitlist_at: next ? new Date().toISOString() : null,
          },
          { onConflict: 'user_id' }
        )
        .select('newsletter_waitlist, newsletter_waitlist_at')
        .single();

      if (error) throw error;

      setWaitlist(Boolean(data?.newsletter_waitlist));
      setSavedAt(data?.newsletter_waitlist_at || null);
    } catch (err) {
      console.error('Error updating newsletter waitlist:', err);
      // optional: toast
    } finally {
      setSaving(false);
    }
  };

  // Real 2025 news (newest first)
  const updates = [
    {
      id: 1,
      title: 'GPT-5 launch underwhelms some users, but shines in coding',
      summary:
        'OpenAI’s GPT-5 drew mixed reviews after launch; critics called gains incremental, though coding performance and cost/speed improvements stood out.',
      date: '2025-08-15',
      source: 'The Verge',
      link: 'https://www.theverge.com/openai/759755/gpt-5-failed-the-hype-test-sam-altman-openai',
    },
    {
      id: 2,
      title: 'ChatGPT to give advance notice before retiring older models',
      summary:
        'Following backlash over replacing 4o with GPT-5, OpenAI says it won’t remove older models without warning and is bringing 4o back as an option.',
      date: '2025-08-13',
      source: 'The Verge',
      link: 'https://www.theverge.com/openai/758537/chatgpt-4o-gpt-5-model-backlash-replacement',
    },
    {
      id: 3,
      title: 'Anthropic boosts Claude Sonnet 4 to a 1M-token context window',
      summary:
        'Enterprise API customers can now send much longer prompts; Anthropic says the change helps long-horizon, agentic coding tasks.',
      date: '2025-08-12',
      source: 'TechCrunch',
      link: 'https://techcrunch.com/2025/08/12/anthropics-claude-ai-model-can-now-handle-longer-prompts/',
    },
    {
      id: 4,
      title: 'EU AI Act: Obligations for general-purpose AI models now apply',
      summary:
        'Key governance rules and GPAI obligations became applicable in the EU as of Aug 2, 2025; bans and literacy rules began Feb 2025; full applicability due Aug 2026.',
      date: '2025-08-02',
      source: 'European Commission',
      link: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
    },
    {
      id: 5,
      title: 'EU confirms no delay to AI Act timeline ahead of August milestones',
      summary:
        'Commission reiterates key obligations will take effect in August 2025, with significant penalties for violations.',
      date: '2025-07-04',
      source: 'Reuters',
      link: 'https://www.reuters.com/world/europe/artificial-intelligence-rules-go-ahead-no-pause-eu-commission-says-2025-07-04/',
    },
    {
      id: 6,
      title: 'OpenAI adds connectors, record mode, and flexible pricing for ChatGPT business',
      summary:
        'Enterprise updates include connectors to internal tools (and MCP), a “record mode,” and pricing changes aimed at broader org adoption.',
      date: '2025-06-04',
      source: 'OpenAI',
      link: 'https://openai.com/business/updates-to-chatgpt-business-plans-livestream-june-2025/',
    },
    {
      id: 7,
      title: 'Future of Jobs 2025: Employers map skills shifts through 2030',
      summary:
        'WEF’s new report aggregates views from 1,000+ employers (14M+ workers) on tech trends, AI adoption, and the roles/skills set to grow.',
      date: '2025-01-07',
      source: 'World Economic Forum',
      link: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/',
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading latest AI updates...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader user={user} onSignOut={() => {}} currentPage="updates" />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Industry News</h1>
          <p className="text-gray-600">A curated feed of noteworthy AI developments and policy changes</p>
        </div>

        {/* News List */}
        <div className="space-y-4">
          {updates.map((item) => (
            <div key={item.id} className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  </div>

                  <p className="text-gray-700 mb-3">{item.summary}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(item.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <span>{item.source}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">News</span>
                    {item.link && (
                      <button
                        onClick={() => window.open(item.link, '_blank')}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        Read More
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter / Coming Soon */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8">
          <div className="flex items-start sm:items-center sm:justify-between gap-4 flex-col sm:flex-row">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <Bell className="w-5 h-5 text-blue-600" />
                <span className="px-2 py-0.5 text-xs rounded-full bg-gray-200 text-gray-700">Coming soon</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Weekly AI Careers Newsletter</h3>
              <p className="text-gray-600">
                Get a concise roundup of the most important AI changes affecting white-collar roles, plus transition tips.
              </p>
              {waitlist && (
                <p className="mt-2 text-sm text-green-700 flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  You’re on the list. {savedAt ? `Added ${new Date(savedAt).toLocaleDateString()}.` : ''}
                </p>
              )}
            </div>

            <div className="w-full sm:w-auto">
              <label className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={waitlist}
                  disabled={saving}
                  onChange={handleToggleWaitlist}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {waitlist ? 'Opted in for launch' : 'Opt in when it starts'}
                  </div>
                  <div className="text-xs text-gray-500">
                    {saving ? 'Saving…' : 'We’ll email you when it goes live.'}
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <Clock className="w-4 h-4 inline-block mr-1" />
          Last updated:{' '}
          {new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
      </div>
    </div>
  );
};

export default AIUpdates;
