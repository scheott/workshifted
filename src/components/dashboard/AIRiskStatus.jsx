// src/components/dashboard/AIRiskStatus.jsx
import React, { useState } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, Shield, Clock, ChevronDown, ChevronUp, Info } from 'lucide-react';

const AIRiskStatus = ({ 
  latestAssessment, 
  assessmentHistory, 
  daysSinceAssessment, 
  onRetakeAssessment, 
  onViewResults 
}) => {
  const riskResult = latestAssessment?.risk_result;
  const currentScore = riskResult?.score || 0;
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  
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
          
          {/* Micro-disclaimer right under the score */}
          <div className="text-xs text-gray-500 mb-3 flex items-center justify-center lg:justify-start gap-1">
            <Info className="w-3 h-3" />
            <span>Educational estimate based on current trends</span>
          </div>
          
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${riskInfo.bgColor} ${riskInfo.color} mb-2`}>
            {riskInfo.level}
          </div>
          
          <p className="text-gray-600 text-sm">
            {userRole} • {userIndustry}
          </p>

          {/* Trend Display */}
          {trend && (
            <div className="mt-3 flex items-center justify-center lg:justify-start gap-2">
              {trend.direction === 'up' ? (
                <TrendingUp className="w-4 h-4 text-red-500" />
              ) : trend.direction === 'down' ? (
                <TrendingDown className="w-4 h-4 text-green-500" />
              ) : null}
              <span className={`text-sm ${
                trend.improved ? 'text-green-600' : 'text-red-600'
              }`}>
                {trend.direction === 'same' ? 'No change' : 
                 `${trend.improved ? 'Decreased' : 'Increased'} by ${trend.change} points`}
              </span>
            </div>
          )}
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

          {/* Collapsible Disclaimer Section */}
          <div className="mt-4">
            <button
              onClick={() => setShowDisclaimer(!showDisclaimer)}
              className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-700 transition-colors"
            >
              <span>How we calculate this</span>
              {showDisclaimer ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
            
            {showDisclaimer && (
              <div className="mt-3 p-3 bg-gray-50 rounded-lg text-xs text-gray-600 space-y-2">
                <div>
                  <strong>Methodology:</strong> Score combines routine work patterns (45%), role/industry baselines (22%), 
                  AI tool exposure (13%), and protective factors like human judgment (-10%) and stakeholder interaction (-10%).
                </div>
                <div>
                  <strong>Limitations:</strong> This is an educational tool based on current research and trends. 
                  AI development is unpredictable. Individual circumstances, company culture, and market changes 
                  may differ significantly from these estimates.
                </div>
                <div>
                  <strong>Purpose:</strong> Designed to encourage proactive career planning, not predict definitive outcomes. 
                  Use as one factor among many in your career decisions.
                </div>
              </div>
            )}
          </div>
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