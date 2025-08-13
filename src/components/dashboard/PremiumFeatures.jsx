// src/components/dashboard/PremiumFeatures.jsx
import React from 'react';
import { Lock, CheckCircle, Download, FileText, Users, TrendingUp, Calendar, Star } from 'lucide-react';

const PremiumFeatures = ({ isPremium, onUpgrade, userRole }) => {
  
  const premiumFeatures = [
    {
      icon: Calendar,
      title: '90-Day AI-Proofing Plan',
      description: 'Step-by-step weekly actions to become AI-resistant',
      preview: 'Week 1: Master ChatGPT for your role\nWeek 2: Identify automation opportunities\nWeek 3: Position as AI coordinator...',
      locked: !isPremium
    },
    {
      icon: FileText,
      title: 'Career Positioning Templates',
      description: 'LinkedIn scripts, boss proposals, and positioning guides',
      preview: 'LinkedIn headline templates\nAI initiative proposals\nSkills gap analysis worksheets...',
      locked: !isPremium
    },
    {
      icon: TrendingUp,
      title: 'Skills Development Roadmap',
      description: 'Personalized learning path for AI-resistant skills',
      preview: 'Recommended courses\nCertification priorities\nSkill milestone tracking...',
      locked: !isPremium
    },
    {
      icon: Users,
      title: 'Industry AI Threat Updates',
      description: 'Monthly reports on AI developments affecting your role',
      preview: 'Industry automation trends\nNew AI tools to watch\nCareer protection strategies...',
      locked: !isPremium
    }
  ];

  if (isPremium) {
    return (
      <div className="bg-white rounded-xl shadow-sm border p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <Star className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Premium Features</h3>
            <p className="text-sm text-green-600 font-medium">Active Subscription</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {premiumFeatures.map((feature, index) => (
            <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-start gap-3">
                <feature.icon className="w-5 h-5 text-green-600 mt-1" />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center gap-1">
                    Access Now
                    <Download className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-gray-900">You're AI-Proofed!</span>
          </div>
          <p className="text-sm text-gray-600">
            You have access to all premium features. Use your 90-day plan to stay ahead of AI automation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border p-8">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          AI Career Insurance - $29
        </h3>
        <p className="text-gray-600">
          Comprehensive protection plan for {userRole || 'your role'}
        </p>
      </div>

      <div className="space-y-4 mb-6">
        {premiumFeatures.map((feature, index) => (
          <div key={index} className="relative">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 opacity-75">
              <div className="flex items-start gap-3">
                <feature.icon className="w-5 h-5 text-gray-400 mt-1" />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                  <div className="text-xs text-gray-500 font-mono bg-white p-2 rounded border">
                    {feature.preview}
                  </div>
                </div>
                <Lock className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
          <h4 className="font-semibold text-gray-900 mb-2">What You Get:</h4>
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Complete 90-day plan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">LinkedIn AI scripts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Boss proposal templates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Monthly AI updates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">Skills roadmap</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700">AI tools guide</span>
            </div>
          </div>
        </div>

        <button
          onClick={onUpgrade}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-lg"
        >
          Get AI Career Insurance - $29
        </button>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            One-time payment • Instant access • Used by professionals at top companies
          </p>
        </div>
      </div>
    </div>
  );
};

export default PremiumFeatures;