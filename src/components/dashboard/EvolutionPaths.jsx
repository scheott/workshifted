// src/components/dashboard/EvolutionPaths.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ChevronRight, Lock } from 'lucide-react';

const EvolutionPaths = ({ 
  evolutionPaths, 
  selectedCareer, 
  onSelectPath,
  isPremium 
}) => {
  const navigate = useNavigate();

  // Check if we have no evolution paths data
  if (!evolutionPaths || evolutionPaths.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Career Evolution Paths</h3>
        <p className="text-gray-600">Complete your AI risk assessment to see personalized career paths.</p>
      </div>
    );
  }

  const primaryPath = evolutionPaths[0];
  const secondaryPaths = evolutionPaths.slice(1, 3);

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Evolution Path</h3>
      
      {/* Primary Path */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200 p-6 mb-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="text-xl font-semibold text-gray-900">{primaryPath.title}</h4>
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
              {primaryPath.fit}% fit
            </span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">{primaryPath.description}</p>
        
        {/* Show "why" reasons as benefits */}
        {primaryPath.why && primaryPath.why.length > 0 && (
          <div className="mb-4">
            <h5 className="font-medium text-gray-900 mb-2">Why This Path:</h5>
            <div className="space-y-1">
              {primaryPath.why.slice(0, 3).map((reason, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Show tools if available */}
        {primaryPath.tools && primaryPath.tools.length > 0 && (
          <div className="mb-4">
            <h5 className="font-medium text-gray-900 mb-2">Key Tools:</h5>
            <div className="flex flex-wrap gap-2">
              {primaryPath.tools.slice(0, 4).map((tool, index) => (
                <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3">
            <button
                onClick={() => {
                    if (isPremium) {
                        navigate('/plan');
                    } else {
                        onSelectPath();
                    }
                }}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
                {isPremium ? 'View My 90-Day Plan' : 'Get Complete Roadmap'}
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
      </div>

      {/* Secondary Paths - No buttons, just informational */}
      {secondaryPaths.length > 0 && (
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Other paths you could consider</h4>
          <p className="text-sm text-gray-600 mb-4">These are alternative directions where your skills could also be valuable:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {secondaryPaths.map((path, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-medium text-gray-900">{path.title}</h5>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                    {path.fit}% fit
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{path.description}</p>
                {/* Show tools for secondary paths too */}
                {path.tools && path.tools.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {path.tools.slice(0, 3).map((tool, toolIndex) => (
                      <span key={toolIndex} className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upgrade Prompt for Free Users */}
      {!isPremium && (
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200 p-4 mt-6">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-indigo-500 mt-0.5" />
            <div className="flex-1">
              <h5 className="font-medium text-gray-900 mb-1">Unlock Your Complete Career Plan</h5>
              <p className="text-sm text-gray-600 mb-3">
                Get detailed 90-day roadmaps, skill development plans, and positioning strategies for each path.
              </p>
              <button
                onClick={onSelectPath}
                className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Upgrade for $29
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvolutionPaths;