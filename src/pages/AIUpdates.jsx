// AI Updates - General Industry News (Not Personalized)
// src/pages/AIUpdates.jsx

import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import DashboardHeader from '../components/DashboardHeader';
import { 
  Bell, 
  Calendar, 
  TrendingUp, 
  AlertTriangle, 
  Info, 
  ExternalLink,
  Filter,
  Search,
  Clock
} from 'lucide-react';

const AIUpdates = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkPremiumAccess();
  }, [user]);

  const checkPremiumAccess = async () => {
    if (!user) return;

    try {
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('subscription_status')
        .eq('user_id', user.id)
        .single();

      if (profile?.subscription_status !== 'premium') {
        navigate('/dashboard');
        return;
      }

      setUserProfile(profile);
    } catch (error) {
      console.error('Error checking access:', error);
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  // Static industry updates - you can later connect this to a CMS or API
  const updates = [
    {
      id: 1,
      type: 'threat',
      title: 'Claude 3.5 Sonnet Shows Major Gains in Code Generation',
      summary: 'Anthropic\'s latest model demonstrates significant improvements in software development tasks, potentially impacting developer roles requiring routine coding.',
      date: '2025-08-12',
      impact: 'High',
      categories: ['Technology', 'Software Development'],
      source: 'Anthropic Blog',
      link: '#'
    },
    {
      id: 2,
      type: 'opportunity',
      title: 'Fortune 500 Companies Hiring AI Coordinators at Record Pace',
      summary: '73% increase in "AI Implementation Manager" and "AI Coordinator" roles across major corporations. Average salary: $95k-$140k.',
      date: '2025-08-10',
      impact: 'High',
      categories: ['Career', 'Management'],
      source: 'LinkedIn Workforce Report',
      link: '#'
    },
    {
      id: 3,
      type: 'threat',
      title: 'AI Bookkeeping Tools Reach 94% Accuracy',
      summary: 'New automated accounting platforms are handling complex reconciliations with near-human accuracy, affecting entry-level finance roles.',
      date: '2025-08-09',
      impact: 'Medium',
      categories: ['Finance', 'Accounting'],
      source: 'CFO Magazine',
      link: '#'
    },
    {
      id: 4,
      type: 'opportunity',
      title: 'AI Prompt Engineering Becomes Fastest Growing Skill',
      summary: 'Demand for prompt engineering skills grows 340% year-over-year. Professionals adding this skill see 25% salary increases.',
      date: '2025-08-08',
      impact: 'Medium',
      categories: ['Skills', 'Career'],
      source: 'Indeed Job Market Analysis',
      link: '#'
    },
    {
      id: 5,
      type: 'info',
      title: 'ChatGPT Enterprise Adds Team Collaboration Features',
      summary: 'New shared workspaces, custom GPTs for teams, and admin controls make enterprise AI adoption easier for organizations.',
      date: '2025-08-07',
      impact: 'Low',
      categories: ['Tools', 'Enterprise'],
      source: 'OpenAI Updates',
      link: '#'
    },
    {
      id: 6,
      type: 'threat',
      title: 'AI Marketing Tools Handle 67% of Campaign Creation',
      summary: 'Latest study shows AI platforms can autonomously create, test, and optimize marketing campaigns with minimal human oversight.',
      date: '2025-08-05',
      impact: 'High',
      categories: ['Marketing', 'Advertising'],
      source: 'Marketing Land Research',
      link: '#'
    },
    {
      id: 7,
      type: 'opportunity',
      title: 'Human-AI Collaboration Roles See 89% Job Growth',
      summary: 'Positions that combine human judgment with AI capabilities are the fastest-growing segment of the job market.',
      date: '2025-08-03',
      impact: 'High',
      categories: ['Career', 'Future of Work'],
      source: 'World Economic Forum',
      link: '#'
    },
    {
      id: 8,
      type: 'info',
      title: 'EU AI Act Implementation Begins',
      summary: 'New regulations require AI transparency in hiring, lending, and other high-stakes decisions. Companies must adapt compliance processes.',
      date: '2025-08-01',
      impact: 'Medium',
      categories: ['Regulation', 'Compliance'],
      source: 'European Commission',
      link: '#'
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'threat': return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'opportunity': return <TrendingUp className="w-5 h-5 text-green-500" />;
      case 'info': return <Info className="w-5 h-5 text-blue-500" />;
      default: return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'threat': return 'bg-red-50 border-red-200';
      case 'opportunity': return 'bg-green-50 border-green-200';
      case 'info': return 'bg-blue-50 border-blue-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const getImpactBadge = (impact) => {
    const colors = {
      'High': 'bg-red-100 text-red-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'Low': 'bg-blue-100 text-blue-800'
    };
    return colors[impact] || colors['Low'];
  };

  const filteredUpdates = activeFilter === 'all' 
    ? updates 
    : updates.filter(update => update.type === activeFilter);

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
      <DashboardHeader 
        user={user}
        onSignOut={() => {}} 
        currentPage="updates"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Industry Updates</h1>
          <p className="text-gray-600">Stay informed about AI developments affecting careers and industries</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'all', label: 'All Updates', count: updates.length },
            { id: 'threat', label: 'Threats', count: updates.filter(u => u.type === 'threat').length },
            { id: 'opportunity', label: 'Opportunities', count: updates.filter(u => u.type === 'opportunity').length },
            { id: 'info', label: 'General Info', count: updates.filter(u => u.type === 'info').length }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {filter.label}
              <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                activeFilter === filter.id ? 'bg-blue-200' : 'bg-gray-200'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Updates List */}
        <div className="space-y-4">
          {filteredUpdates.map((update) => (
            <div key={update.id} className={`bg-white rounded-lg border p-6 hover:shadow-md transition-shadow ${getTypeColor(update.type)}`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getTypeIcon(update.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{update.title}</h3>
                      <p className="text-gray-600 mb-3">{update.summary}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactBadge(update.impact)} ml-4 flex-shrink-0`}>
                      {update.impact} Impact
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(update.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span>{update.source}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {update.categories.map((category, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {category}
                        </span>
                      ))}
                    </div>
                    
                    {update.link && (
                      <button 
                        onClick={() => window.open(update.link, '_blank')}
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

        {/* Empty State */}
        {filteredUpdates.length === 0 && (
          <div className="text-center py-12">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No updates found</h3>
            <p className="text-gray-600">Try adjusting your filters or check back later for new content.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <div className="text-center">
            <Bell className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">Get the latest AI industry developments delivered to your inbox weekly</p>
            <div className="flex justify-center">
              <div className="flex gap-2 max-w-md w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Weekly digest • No spam • Unsubscribe anytime
            </p>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <Clock className="w-4 h-4 inline-block mr-1" />
          Last updated: {new Date().toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric',
            year: 'numeric'
          })}
        </div>
      </div>
    </div>
  );
};

export default AIUpdates;