// src/components/dashboard/QuickActions.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, RefreshCw, Database, Newspaper, 
  Lock, ArrowRight, Calendar, Zap 
} from 'lucide-react';

const QuickActions = ({ isPremium, onUpgrade, isLoading }) => {
  const navigate = useNavigate();

  const actions = [
    {
      id: 'evolution-plan',
      title: '90-Day Evolution Plan',
      description: 'Your personalized roadmap to become AI-resistant and irreplaceable',
      icon: TrendingUp,
      isPremium: true,
      href: '/plan',
      color: 'from-purple-500 to-blue-600',
      textColor: 'text-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: ['Step-by-step roadmap', 'Career positioning guide']
    },
    {
      id: 'ai-tools',
      title: 'AI Tools Database',
      description: '30+ curated AI tools with role-specific use cases and guides',
      icon: Database,
      isPremium: true,
      href: '/ai-tools-database',
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: ['Advanced search & filters', 'Regular updates']
    },
    {
      id: 'ai-news',
      title: 'AI News Updates',
      description: 'Industry-specific intelligence on AI developments affecting your career',
      icon: Newspaper,
      isPremium: true,
      href: '/ai-updates',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-700',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      features: ['AI updates', 'Monthly reports']
    },
    {
      id: 'retake-assessment',
      title: 'Retake Assessment',
      description: 'Get updated insights on your AI career risk and opportunities',
      icon: RefreshCw,
      isPremium: false,
      href: '/assessment',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      features: ['Updated risk analysis', 'New career matches', 'Fresh recommendations']
    }
  ];

  const handleActionClick = (action) => {
    // Don't navigate if still loading user data
    if (isLoading) {
      console.log('Still loading user data, please wait...');
      return;
    }
    
    console.log('Action clicked:', action.id, 'isPremium:', isPremium, 'action.isPremium:', action.isPremium);
    
    if (action.isPremium && !isPremium) {
      console.log('Calling onUpgrade');
      onUpgrade();
    } else {
      console.log('Navigating to:', action.href);
      navigate(action.href);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
          <p className="text-sm text-gray-600">Your AI career mission control center</p>
        </div>
        <Calendar className="w-5 h-5 text-gray-400" />
      </div>

      <div className="grid gap-4">
        {actions.map((action) => {
          const isAccessible = !action.isPremium || isPremium;
          
          return (
            <div
              key={action.id}
              className={`relative group cursor-pointer transition-all duration-200 ${
                isAccessible 
                  ? 'hover:shadow-md' 
                  : 'opacity-75'
              }`}
              onClick={() => handleActionClick(action)}
            >
              <div className={`p-4 rounded-lg border-2 ${action.borderColor} ${action.bgColor} ${
                isAccessible ? 'hover:border-opacity-80' : ''
              }`}>
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${action.color} text-white flex-shrink-0`}>
                    <action.icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className={`font-semibold ${action.textColor}`}>
                        {action.title}
                      </h4>
                      {action.isPremium && !isPremium && (
                        <Lock className="w-4 h-4 text-gray-400" />
                      )}
                      {action.isPremium && isPremium && (
                        <Zap className="w-4 h-4 text-yellow-500" />
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      {action.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-1">
                      {action.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            action.isPremium && !isPremium 
                              ? 'bg-gray-300' 
                              : 'bg-green-400'
                          }`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Arrow */}
                  <div className="flex-shrink-0">
                    {isAccessible ? (
                      <ArrowRight className={`w-5 h-5 ${action.textColor} group-hover:translate-x-1 transition-transform`} />
                    ) : (
                      <Lock className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Premium overlay for locked items */}
                {action.isPremium && !isPremium && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-white/30 rounded-lg pointer-events-none" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Upgrade CTA for non-premium users */}
      {!isPremium && (
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-1">
              Unlock Your Complete AI Career Insurance
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Get access to your evolution plan, AI tools database, and ongoing intelligence updates
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Lifetime access
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3" />
                Instant activation
              </span>
              <span className="flex items-center gap-1">
                <Database className="w-3 h-3" />
                Regular updates
              </span>
            </div>
            <button
              onClick={onUpgrade}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Upgrade to Premium - $29
            </button>
          </div>
        </div>
      )}

      {/* Stats for premium users */}
      {isPremium && (
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-green-600">✓</div>
            <div className="text-xs text-gray-600">Premium Active</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-blue-600">30+</div>
            <div className="text-xs text-gray-600">AI Tools</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-lg font-bold text-purple-600">∞</div>
            <div className="text-xs text-gray-600">Lifetime Access</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickActions;