// src/components/dashboard/EvolutionPaths.jsx
import React from 'react';
import { Star, ChevronRight, CheckCircle, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const EvolutionPaths = ({ evolutionPaths, selectedCareer, onSelectPath, isPremium }) => {
  const navigate = useNavigate();
  if (!evolutionPaths || evolutionPaths.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Career Evolution Paths</h3>
        <p className="text-gray-600">Your personalized career paths will appear here after assessment analysis.</p>
      </div>
    );
  }

  const primaryPath = evolutionPaths[0];
  const secondaryPaths = evolutionPaths.slice(1, 3);

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Your AI-Resistant Career Paths</h3>
      
      {/* Primary Recommendation */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
              <Star className="w-3 h-3 mr-1" />
              Top Match
            </div>
            {selectedCareer && selectedCareer.title === primaryPath.title && (
              <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                <CheckCircle className="w-3 h-3 mr-1" />
                Selected
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-blue-600">{primaryPath.match_score}%</div>
            <div className="text-xs text-gray-500">Match</div>
          </div>
        </div>
        
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{primaryPath.title}</h4>
        <p className="text-gray-600 mb-4">{primaryPath.description}</p>
        
        {primaryPath.benefits && (
          <div className="mb-4">
            <h5 className="font-medium text-gray-900 mb-2">Key Benefits:</h5>
            <div className="space-y-1">
              {primaryPath.benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3">
            <button
                onClick={() => {
                    if (isPremium) {
                // Navigate to premium plan instead of showing upgrade modal
                    navigate('/plan');
                    } else {
                    onSelectPath(); // Show upgrade modal
                    }
                }}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
                {isPremium ? 'View My 90-Day Plan' : 'Get Complete Roadmap'}
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
      </div>

      {/* Secondary Paths */}
      {secondaryPaths.length > 0 && (
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Alternative Paths</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {secondaryPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-medium text-gray-900">{path.title}</h5>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                    {path.match_score}% fit
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{path.description}</p>
                <button
                onClick={onSelectPath} // This shows upgrade modal for free users, or navigates premium users to /plan
                className="w-full border border-blue-300 text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                {isPremium ? 'View Full Plan' : 'Learn More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upgrade Prompt for Free Users */}
      {!isPremium && (
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200 p-4">
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