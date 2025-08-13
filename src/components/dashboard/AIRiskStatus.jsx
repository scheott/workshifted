// src/components/dashboard/AIRiskStatus.jsx
import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, Shield, Clock } from 'lucide-react';

const AIRiskStatus = ({ 
  latestAssessment, 
  assessmentHistory, 
  daysSinceAssessment, 
  onRetakeAssessment, 
  onViewResults 
}) => {
  const riskResult = latestAssessment?.risk_result;
  const currentScore = riskResult?.score || 0;
  
  // Calculate trend
  const getTrend = () => {
    if (assessmentHistory.length < 2) return null;
    const previousScore = assessmentHistory[1]?.risk_result?.score;
    if (!previousScore) return null;
    
    const change = currentScore - previousScore;
    return {
      direction: change > 0 ? 'up' : change < 0 ? 'down' : 'same',
      change: Math.abs(change),
      improved: change < 0 // Lower risk score is better
    };
  };

  const trend = getTrend();

  const getRiskLevel = (score) => {
    if (score >= 70) return { level: 'High Risk', color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200' };
    if (score >= 40) return { level: 'Moderate Risk', color: 'text-yellow-600', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200' };
    return { level: 'Low Risk', color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200' };
  };

  const getRiskIcon = (score) => {
    if (score >= 70) return <AlertTriangle className="w-8 h-8 text-red-500" />;
    if (score >= 40) return <Clock className="w-8 h-8 text-yellow-500" />;
    return <Shield className="w-8 h-8 text-green-500" />;
  };

  const getAdvice = (score) => {
    if (score >= 70) return 'Urgent action needed - start AI-proofing immediately';
    if (score >= 40) return 'Time to evolve - learn to lead AI in your field';
    return 'Stay vigilant - maintain your competitive edge';
  };

  const getAssessmentPrompt = () => {
    if (!daysSinceAssessment) return null;
    if (daysSinceAssessment >= 90) {
      return { 
        message: 'Your assessment is over 3 months old. AI threats evolve quickly!',
        urgency: 'high',
        action: 'Retake Assessment'
      };
    }
    if (daysSinceAssessment >= 30) {
      return { 
        message: 'Consider retaking your assessment to track changes.',
        urgency: 'medium',
        action: 'Update Assessment'
      };
    }
    return null;
  };

  const riskInfo = getRiskLevel(currentScore);
  const assessmentPrompt = getAssessmentPrompt();
  const userRole = latestAssessment?.answers?.profile_role_family || 'Professional';
  const userIndustry = latestAssessment?.answers?.profile_industry || 'Technology';

  return (
    <div className={`bg-white rounded-xl shadow-sm border-2 ${riskInfo.borderColor} p-8`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Risk Score Display */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
            {getRiskIcon(currentScore)}
            <div>
              <div className={`text-4xl font-bold ${riskInfo.color}`}>
                {currentScore}%
              </div>
              <div className="text-sm text-gray-500">AI Risk Score</div>
            </div>
          </div>
          
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${riskInfo.bgColor} ${riskInfo.color} mb-2`}>
            {riskInfo.level}
          </div>
          
          <p className="text-gray-600 text-sm">
            {userRole} • {userIndustry}
          </p>
        </div>

        {/* Risk Summary & Advice */}
        <div className="lg:col-span-1">
          <h3 className="font-semibold text-gray-900 mb-2">Assessment Summary</h3>
          <p className="text-gray-600 text-sm mb-4">
            {riskResult?.summary || 'Your AI risk assessment results.'}
          </p>
          <p className={`text-sm font-medium ${riskInfo.color}`}>
            {getAdvice(currentScore)}
          </p>
          
          {/* Trend Display */}
          {trend && (
            <div className="mt-4 flex items-center gap-2">
              {trend.direction === 'up' ? (
                <TrendingUp className={`w-4 h-4 ${trend.improved ? 'text-red-500' : 'text-green-500'}`} />
              ) : trend.direction === 'down' ? (
                <TrendingDown className={`w-4 h-4 ${trend.improved ? 'text-green-500' : 'text-red-500'}`} />
              ) : null}
              <span className="text-sm text-gray-600">
                {trend.change > 0 ? (
                  <>
                    {trend.change} point {trend.improved ? 'improvement' : 'increase'} since last assessment
                  </>
                ) : (
                  'No change since last assessment'
                )}
              </span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="text-center lg:text-right">
          <div className="space-y-3">
            <button
              onClick={onViewResults}
              className="w-full lg:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Full Results
            </button>
            
            <button
              onClick={onRetakeAssessment}
              className="w-full lg:w-auto border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Retake Assessment
            </button>
          </div>

          {/* Assessment Age Warning */}
          {assessmentPrompt && (
            <div className={`mt-4 p-3 rounded-lg text-sm ${
              assessmentPrompt.urgency === 'high' 
                ? 'bg-red-50 text-red-700 border border-red-200' 
                : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
            }`}>
              <div className="font-medium mb-1">Assessment Update</div>
              <div className="text-xs">{assessmentPrompt.message}</div>
            </div>
          )}

          {/* Last Taken */}
          <div className="mt-4 text-xs text-gray-500">
            Last taken: {daysSinceAssessment !== null ? `${daysSinceAssessment} days ago` : 'Recently'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRiskStatus;