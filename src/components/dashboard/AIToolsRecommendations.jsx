// src/components/dashboard/AIToolsRecommendations.jsx
import React from 'react';
import { ExternalLink, Lock, Zap, Clock, TrendingUp } from 'lucide-react';
import { getToolsByRole } from '../../data/premiumContent/aiToolsDatabase';

const AIToolsRecommendations = ({ userRole, userIndustry, isPremium, onUpgrade }) => {
  
  // Get tools from the comprehensive database
  const getAllToolsForRole = (role) => {
    const tools = getToolsByRole(role || 'default');
    
    // Sort by priority: Beginner tools first, then by time-to-value
    return tools.sort((a, b) => {
      // Prioritize beginner tools
      if (a.difficulty === 'Beginner' && b.difficulty !== 'Beginner') return -1;
      if (b.difficulty === 'Beginner' && a.difficulty !== 'Beginner') return 1;
      
      // Then prioritize immediate time-to-value
      if (a.timeToValue === 'Immediate' && b.timeToValue !== 'Immediate') return -1;
      if (b.timeToValue === 'Immediate' && a.timeToValue !== 'Immediate') return 1;
      
      return 0;
    });
  };

  const allTools = getAllToolsForRole(userRole);
  const freeTools = allTools.slice(0, 4); // Show 4 tools for free users
  const premiumTools = allTools.slice(4, 8); // Show next 4 as premium preview

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTimeToValueIcon = (timeToValue) => {
    if (timeToValue === 'Immediate') return <Zap className="w-3 h-3" />;
    if (timeToValue?.includes('days')) return <TrendingUp className="w-3 h-3" />;
    return <Clock className="w-3 h-3" />;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          AI You Should Know
        </h3>
        <span className="text-sm text-gray-500">
          {allTools.length} tools available
        </span>
      </div>
      
      {/* Free Tools */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Start With These
        </h4>
        <div className="space-y-3">
          {freeTools.map((tool, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-900">{tool.name}</span>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${getDifficultyColor(tool.difficulty)}`}>
                    {tool.difficulty}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    {getTimeToValueIcon(tool.timeToValue)}
                    {tool.timeToValue}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-2">{tool.roleSpecificPurpose}</div>
                <div className="text-xs text-gray-500">
                  {tool.pricing} • {tool.category}
                </div>
              </div>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 flex-shrink-0"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Tools Preview */}
      {premiumTools.length > 0 && (
        <div className="relative">
          <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Advanced Tools {!isPremium && '(Preview)'}
          </h4>
          
          <div className={`space-y-3 ${!isPremium ? 'opacity-60' : ''}`}>
            {premiumTools.map((tool, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{tool.name}</span>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${getDifficultyColor(tool.difficulty)}`}>
                        {tool.difficulty}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        {getTimeToValueIcon(tool.timeToValue)}
                        {tool.timeToValue}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{tool.roleSpecificPurpose}</div>
                    <div className="text-xs text-gray-500">
                      {tool.pricing} • {tool.category}
                    </div>
                  </div>
                  {isPremium ? (
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 flex-shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  )}
                </div>
                
                {/* Blur overlay for non-premium users */}
                {!isPremium && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-white/60 rounded-lg pointer-events-none" />
                )}
              </div>
            ))}
          </div>

          {/* Upgrade CTA */}
          {!isPremium && (
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <div className="text-center">
                <h5 className="font-medium text-gray-900 mb-1">
                  See All {allTools.length} AI Tools
                </h5>
                <p className="text-sm text-gray-600 mb-3">
                  Get the complete database with filtering, implementation guides, and regular updates
                </p>
                <button
                  onClick={onUpgrade}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Upgrade to Premium
                </button>
              </div>
            </div>
          )}

          {/* Premium users see "View Full Database" link */}
          {isPremium && (
            <div className="mt-4 text-center">
              <a
                href="/ai-tools-database"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View Complete AI Tools Database →
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIToolsRecommendations;