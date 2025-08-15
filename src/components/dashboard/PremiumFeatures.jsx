// src/components/dashboard/PremiumFeatures.jsx
import React from 'react';
import { Lock, Shield, TrendingUp, Database, Zap, Filter, Search, BarChart3 } from 'lucide-react';

const PremiumFeatures = ({ onUpgrade }) => {
  const premiumFeatures = [
    {
      icon: Shield,
      title: "AI Career Risk Assessment",
      description: "Detailed analysis of your role's automation vulnerability with timeline projections",
      status: "included"
    },
    {
      icon: TrendingUp,
      title: "Personalized Evolution Roadmap",
      description: "Step-by-step guide to become AI-resistant and position yourself as an AI coordinator",
      status: "included"
    },
    {
      icon: Database,
      title: "Complete AI Tools Database",
      description: "150+ curated AI tools with role-specific use cases, difficulty ratings, and implementation guides",
      status: "featured",
      highlights: [
        "Advanced search and filtering",
        "Implementation guides for each tool",
        "Role-specific use case examples",
        "Regular updates with new tools",
        "Integration recommendations",
        "Difficulty and time-to-value ratings"
      ]
    },
    {
      icon: BarChart3,
      title: "Monthly AI Threat Updates",
      description: "Industry-specific intelligence on AI developments affecting your role and career path",
      status: "included"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg">
          <Lock className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Premium Features</h3>
          <p className="text-sm text-gray-600">Unlock your complete AI career insurance toolkit</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {premiumFeatures.map((feature, index) => (
          <div key={index} className={`p-4 rounded-lg border-2 transition-all ${
            feature.status === 'featured' 
              ? 'border-blue-200 bg-blue-50' 
              : 'border-gray-200 bg-gray-50'
          }`}>
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${
                feature.status === 'featured'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-600 text-white'
              }`}>
                <feature.icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-gray-900">{feature.title}</h4>
                  {feature.status === 'featured' && (
                    <span className="px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full font-medium">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                
                {/* Show highlights for featured item */}
                {feature.highlights && (
                  <div className="mt-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {feature.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-blue-700">
                          <Zap className="w-3 h-3" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Database Preview Stats */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6 border border-blue-200">
        <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
          <Database className="w-4 h-4 text-blue-600" />
          AI Tools Database Preview
        </h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">150+</div>
            <div className="text-xs text-gray-600">Curated Tools</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">12</div>
            <div className="text-xs text-gray-600">Categories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">15+</div>
            <div className="text-xs text-gray-600">Role Types</div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="text-center mb-6">
        <div className="text-2xl font-bold text-gray-900 mb-1">$29</div>
        <div className="text-sm text-gray-600 mb-3">One-time payment • Lifetime access</div>
        <div className="text-xs text-green-600 font-medium">
          Save $1000s on career pivoting • Future-proof your income
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onUpgrade}
        className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Unlock Premium Features
      </button>

      {/* Trust indicators */}
      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <Shield className="w-3 h-3" />
          30-day guarantee
        </div>
        <div className="flex items-center gap-1">
          <Zap className="w-3 h-3" />
          Instant access
        </div>
        <div className="flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          Regular updates
        </div>
      </div>
    </div>
  );
};

export default PremiumFeatures;