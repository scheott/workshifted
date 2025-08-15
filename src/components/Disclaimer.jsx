// src/components/Disclaimer.jsx - Universal disclaimer component

import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Disclaimer = ({ type = "general", className = "" }) => {
  const disclaimers = {
    general: {
      title: "Important Disclaimer",
      content: "The information provided is for educational purposes only and should not be considered as professional career advice. Individual results may vary based on personal circumstances, market conditions, and implementation effort."
    },
    
    assessment: {
      title: "Assessment Disclaimer", 
      content: "This assessment provides general guidance based on current market trends and is not a guarantee of future job security or career outcomes. AI and job market developments are unpredictable and change rapidly."
    },
    
    plan: {
      title: "Plan Implementation Disclaimer",
      content: "The 90-day plan provides suggested actions based on general best practices. Success depends on consistent implementation, individual circumstances, and market conditions. Results are not guaranteed."
    },
    
    statistics: {
      title: "Statistical Information Disclaimer", 
      content: "Statistics and projections are based on available research and current trends. AI development and job market changes are unpredictable. Data may not reflect future realities or individual circumstances."
    },
    
    ai_tools: {
      title: "AI Tools Disclaimer",
      content: "Tool recommendations are based on current market analysis. We are not affiliated with recommended tools unless specifically stated. Pricing, features, and availability may change without notice."
    }
  };

  const disclaimer = disclaimers[type] || disclaimers.general;

  return (
    <div className={`bg-amber-50 border border-amber-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="text-sm font-semibold text-amber-800 mb-1">{disclaimer.title}</h4>
          <p className="text-sm text-amber-700 leading-relaxed">{disclaimer.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;

// Usage examples:
// <Disclaimer type="assessment" />
// <Disclaimer type="plan" className="mt-6" />
// <Disclaimer type="statistics" />
// <Disclaimer /> // Uses general disclaimer