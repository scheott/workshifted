// src/components/dashboard/AIToolsRecommendations.jsx
import React from 'react';
import { ExternalLink, Lock, BookOpen, Briefcase, Users, BarChart3, MessageSquare, Palette } from 'lucide-react';

const AIToolsRecommendations = ({ userRole, userIndustry, isPremium, onUpgrade }) => {
  
  // Basic tool recommendations based on role
  const getToolsForRole = (role) => {
    const toolsByRole = {
      marketing: [
        { name: 'ChatGPT', purpose: 'Content creation & strategy', icon: MessageSquare, url: 'https://chatgpt.com', free: true },
        { name: 'Canva AI', purpose: 'Visual content & design', icon: Palette, url: 'https://canva.com', free: false },
        { name: 'HubSpot AI', purpose: 'Marketing automation', icon: BarChart3, url: 'https://hubspot.com', free: false }
      ],
      analyst: [
        { name: 'ChatGPT', purpose: 'Data analysis & insights', icon: MessageSquare, url: 'https://chatgpt.com', free: true },
        { name: 'Claude', purpose: 'Research & analysis', icon: BookOpen, url: 'https://claude.ai', free: true },
        { name: 'Tableau AI', purpose: 'Advanced data visualization', icon: BarChart3, url: 'https://tableau.com', free: false }
      ],
      sales: [
        { name: 'ChatGPT', purpose: 'Email writing & proposals', icon: MessageSquare, url: 'https://chatgpt.com', free: true },
        { name: 'Salesforce AI', purpose: 'Lead scoring & insights', icon: Users, url: 'https://salesforce.com', free: false },
        { name: 'Gong AI', purpose: 'Call analysis & coaching', icon: Briefcase, url: 'https://gong.io', free: false }
      ],
      project_manager: [
        { name: 'ChatGPT', purpose: 'Planning & communication', icon: MessageSquare, url: 'https://chatgpt.com', free: true },
        { name: 'Notion AI', purpose: 'Project documentation', icon: BookOpen, url: 'https://notion.so', free: false },
        { name: 'Monday.com AI', purpose: 'Workflow automation', icon: Briefcase, url: 'https://monday.com', free: false }
      ],
      finance: [
        { name: 'ChatGPT', purpose: 'Financial analysis & reports', icon: MessageSquare, url: 'https://chatgpt.com', free: true },
        { name: 'Excel Copilot', purpose: 'Advanced spreadsheet work', icon: BarChart3, url: 'https://microsoft.com', free: false },
        { name: 'QuickBooks AI', purpose: 'Automated bookkeeping', icon: Briefcase, url: 'https://quickbooks.com', free: false }
      ],
      hr: [
        { name: 'ChatGPT', purpose: 'Job descriptions & policies', icon: MessageSquare, url: 'https://chatgpt.com', free: true },
        { name: 'BambooHR AI', purpose: 'Candidate screening', icon: Users, url: 'https://bamboohr.com', free: false },
        { name: 'Workday AI', purpose: 'Employee insights', icon: BarChart3, url: 'https://workday.com', free: false }
      ]
    };

    return toolsByRole[role] || [
      { name: 'ChatGPT', purpose: 'General productivity', icon: MessageSquare, url: 'https://chatgpt.com', free: true },
      { name: 'Claude', purpose: 'Research & analysis', icon: BookOpen, url: 'https://claude.ai', free: true },
      { name: 'Notion AI', purpose: 'Documentation & planning', icon: BookOpen, url: 'https://notion.so', free: false }
    ];
  };

  const recommendedTools = getToolsForRole(userRole);
  const freeTools = recommendedTools.filter(tool => tool.free);
  const premiumTools = recommendedTools.filter(tool => !tool.free);

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        AI Tools for {userRole || 'Your Role'}
      </h3>
      
      {/* Free Tools */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Start With These (Free)
        </h4>
        <div className="space-y-3">
          {freeTools.map((tool, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <tool.icon className="w-5 h-5 text-green-600" />
              <div className="flex-1">
                <div className="font-medium text-gray-900">{tool.name}</div>
                <div className="text-sm text-gray-600">{tool.purpose}</div>
              </div>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Tools */}
      {premiumTools.length > 0 && (
        <div className={`${!isPremium ? 'opacity-60' : ''}`}>
          <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Advanced Tools {!isPremium && '(Premium)'}
          </h4>
          <div className="space-y-3">
            {premiumTools.map((tool, index) => (
              <div key={index} className="relative">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <tool.icon className="w-5 h-5 text-blue-600" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{tool.name}</div>
                    <div className="text-sm text-gray-600">{tool.purpose}</div>
                  </div>
                  {isPremium ? (
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <Lock className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upgrade Prompt */}
      {!isPremium && premiumTools.length > 0 && (
        <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <div className="text-center">
            <div className="text-sm font-medium text-gray-900 mb-1">
              Unlock Advanced AI Tools Guide
            </div>
            <div className="text-xs text-gray-600 mb-2">
              Get detailed setup guides, prompts, and workflows for each tool
            </div>
            <button
              onClick={onUpgrade}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Upgrade for $29 →
            </button>
          </div>
        </div>
      )}

      {/* Tool Usage Tip */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <div className="text-sm font-medium text-gray-900 mb-1">💡 Pro Tip</div>
        <div className="text-xs text-gray-600">
          Start with the free tools and master one before moving to the next. 
          Focus on automating your most repetitive tasks first.
        </div>
      </div>
    </div>
  );
};

export default AIToolsRecommendations;