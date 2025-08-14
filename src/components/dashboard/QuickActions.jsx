// src/components/dashboard/QuickActions.jsx
import React from 'react';
import { RefreshCw, BarChart3, TrendingUp, Crown, AlertTriangle, Clock } from 'lucide-react';

const QuickActions = ({ 
  isPremium, 
  daysSinceAssessment, 
  onRetakeAssessment, 
  onViewResults, 
  onUpgrade,
  onViewPlan,
  onViewSkillsRoadmap
}) => {
  
  const getAssessmentStatus = () => {
    if (!daysSinceAssessment) return null;
    if (daysSinceAssessment >= 90) {
      return { 
        message: 'Assessment is 3+ months old',
        urgency: 'high',
        icon: AlertTriangle,
        color: 'text-red-600',
        bgColor: 'bg-red-50'
      };
    }
    if (daysSinceAssessment >= 30) {
      return { 
        message: 'Consider updating assessment',
        urgency: 'medium',
        icon: Clock,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50'
      };
    }
    return null;
  };

  const assessmentStatus = getAssessmentStatus();

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      
      <div className="space-y-3">
        
        {/* Assessment Actions */}
        <button
          onClick={onRetakeAssessment}
          className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left"
        >
          <RefreshCw className="w-5 h-5 text-blue-600" />
          <div className="flex-1">
            <div className="font-medium text-gray-900">Retake Assessment</div>
            <div className="text-sm text-gray-600">Update your AI risk score</div>
          </div>
        </button>

        <button
          onClick={onViewResults}
          className="w-full flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-left"
        >
          <BarChart3 className="w-5 h-5 text-green-600" />
          <div className="flex-1">
            <div className="font-medium text-gray-900">View Full Results</div>
            <div className="text-sm text-gray-600">See detailed risk analysis</div>
          </div>
        </button>

        {/* Premium Actions */}
        {isPremium ? (
        <>
            <button 
            onClick={onViewPlan}
            className="w-full flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-left"
            >
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <div className="flex-1">
                <div className="font-medium text-gray-900">View 90-Day Plan</div>
                <div className="text-sm text-gray-600">Personalized AI-proofing roadmap</div>
            </div>
            </button>
            
            <button 
            onClick={onViewSkillsRoadmap}
            className="w-full flex items-center gap-3 p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors text-left"
            >
            <Crown className="w-5 h-5 text-indigo-600" />
            <div className="flex-1">
                <div className="font-medium text-gray-900">Skills Roadmap</div>
                <div className="text-sm text-gray-600">Track your AI-resistant skills</div>
            </div>
            </button>
        </>
        ) : (
          <button
            onClick={onUpgrade}
            className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-lg transition-colors text-left border border-indigo-200"
          >
            <Crown className="w-5 h-5 text-indigo-600" />
            <div className="flex-1">
              <div className="font-medium text-gray-900">Unlock Premium Features</div>
              <div className="text-sm text-gray-600">90-day plans, templates, guides</div>
            </div>
            <div className="text-sm font-semibold text-indigo-600">$29</div>
          </button>
        )}
      </div>

      {/* Assessment Status Warning */}
      {assessmentStatus && (
        <div className={`mt-4 p-3 rounded-lg border ${assessmentStatus.bgColor}`}>
          <div className="flex items-center gap-2">
            <assessmentStatus.icon className={`w-4 h-4 ${assessmentStatus.color}`} />
            <div className="flex-1">
              <div className={`text-sm font-medium ${assessmentStatus.color}`}>
                {assessmentStatus.message}
              </div>
              <div className="text-xs text-gray-600">
                Last taken {daysSinceAssessment} days ago
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Account Status */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Account Status</span>
          <span className={`font-medium ${isPremium ? 'text-green-600' : 'text-gray-900'}`}>
            {isPremium ? 'Premium' : 'Free'}
          </span>
        </div>
        {!isPremium && (
          <button
            onClick={onUpgrade}
            className="w-full mt-2 text-center text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Upgrade to access all features →
          </button>
        )}
      </div>
    </div>
  );
};

export default QuickActions;