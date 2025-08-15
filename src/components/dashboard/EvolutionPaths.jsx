// AI-First Evolution Paths - Skills & Tools First, Career Options Second
// src/components/dashboard/EvolutionPaths.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  ChevronRight, 
  Lock, 
  Zap, 
  Target, 
  TrendingUp,
  Wrench,
  Users
} from 'lucide-react';
import { AI_SKILLS_DATABASE } from '../../data/aiSkillsDatabase';

const EvolutionPaths = ({ 
  evolutionPaths, 
  selectedCareer, 
  onSelectPath,
  isPremium,
  userRole = "Professional" // Add this prop
}) => {
  const navigate = useNavigate();
  // Remove state since we're showing career options directly

  // Check if we have no evolution paths data
  if (!evolutionPaths || evolutionPaths.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Skills & Tools</h3>
        <p className="text-gray-600">Complete your AI risk assessment to see personalized recommendations.</p>
      </div>
    );
  }

    // Handle both old and new evolution paths format
    const getPathsArray = () => {
    if (!evolutionPaths) return [];
    
    // New format: { tracks: [...] }
    if (evolutionPaths.tracks && Array.isArray(evolutionPaths.tracks)) {
        return evolutionPaths.tracks.map(track => ({
        title: track.title,
        description: track.goal,
        fit: 85
        }));
    }
    
    // Old format: array
    if (Array.isArray(evolutionPaths)) {
        return evolutionPaths;
    }
    
    return [];
    };

    const pathsArray = getPathsArray();
    const primaryPath = pathsArray[0];
    const secondaryPaths = pathsArray.slice(1, 3);

  // Use actual AI-resistant skills from your data or assessment results
  // Get AI-resistant skills from your skills database
  const getAIResistantSkills = () => {
    // Debug logging
    console.log('User Role:', userRole);
    console.log('AI_SKILLS_DATABASE:', AI_SKILLS_DATABASE);
    
    // If you have role-specific skills from assessment results, use those first
    if (primaryPath.aiResistantSkills) {
      console.log('Using assessment skills:', primaryPath.aiResistantSkills);
      return primaryPath.aiResistantSkills;
    }
    
    // Map user role to skills database key
    const getRoleKey = (role) => {
      const roleLower = role.toLowerCase();
      
      if (roleLower.includes('marketing') || roleLower.includes('brand')) return 'marketing';
      if (roleLower.includes('hr') || roleLower.includes('people') || roleLower.includes('human')) return 'hr';
      if (roleLower.includes('finance') || roleLower.includes('accounting') || roleLower.includes('financial')) return 'finance';
      if (roleLower.includes('sales') || roleLower.includes('business development') || roleLower.includes('account')) return 'sales';
      if (roleLower.includes('operations') || roleLower.includes('ops')) return 'operations';
      if (roleLower.includes('project') || roleLower.includes('program') || roleLower.includes('scrum')) return 'project_management';
      if (roleLower.includes('customer') || roleLower.includes('support') || roleLower.includes('service')) return 'customer_service';
      if (roleLower.includes('data') || roleLower.includes('analytics') || roleLower.includes('analyst')) return 'data_analytics';
      if (roleLower.includes('content') || roleLower.includes('writer') || roleLower.includes('copywriter')) return 'content_writing';
      
      // Default fallback
      return 'marketing';
    };
    
    const roleKey = getRoleKey(userRole);
    console.log('Mapped role key:', roleKey);
    
    const skillsData = AI_SKILLS_DATABASE[roleKey];
    console.log('Skills data for role:', skillsData);
    
    if (skillsData && skillsData.aiResistantSkills) {
      console.log('Using database skills:', skillsData.aiResistantSkills);
      return skillsData.aiResistantSkills;
    }
    
    console.log('Using fallback skills');
    return [
      "Strategic thinking & problem-solving",
      "Client relationships & communication", 
      "Creative strategy & innovation",
      "Team leadership & change management"
    ];
  };

  // Get hybrid skills (AI + Human collaboration skills)
  const getHybridSkills = () => {
    const getRoleKey = (role) => {
      const roleLower = role.toLowerCase();
      
      if (roleLower.includes('marketing') || roleLower.includes('brand')) return 'marketing';
      if (roleLower.includes('hr') || roleLower.includes('people') || roleLower.includes('human')) return 'hr';
      if (roleLower.includes('finance') || roleLower.includes('accounting') || roleLower.includes('financial')) return 'finance';
      if (roleLower.includes('sales') || roleLower.includes('business development') || roleLower.includes('account')) return 'sales';
      if (roleLower.includes('operations') || roleLower.includes('ops')) return 'operations';
      if (roleLower.includes('project') || roleLower.includes('program') || roleLower.includes('scrum')) return 'project_management';
      if (roleLower.includes('customer') || roleLower.includes('support') || roleLower.includes('service')) return 'customer_service';
      if (roleLower.includes('data') || roleLower.includes('analytics') || roleLower.includes('analyst')) return 'data_analytics';
      if (roleLower.includes('content') || roleLower.includes('writer') || roleLower.includes('copywriter')) return 'content_writing';
      
      return 'marketing';
    };
    
    const roleKey = getRoleKey(userRole);
    const skillsData = AI_SKILLS_DATABASE[roleKey];
    
    return skillsData ? skillsData.hybridSkills : [];
  };

  const aiResistantSkills = getAIResistantSkills();
  const hybridSkills = getHybridSkills();
  const aiToolsForRole = primaryPath.tools || [];

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      {/* Main heading - AI Skills Focus */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <Zap className="w-5 h-5 text-blue-600" />
          Stay Ahead with AI
        </h3>
        <p className="text-sm text-gray-600">
          Master these AI tools and skills to become irreplaceable in your current role - and open doors to new opportunities.
        </p>
      </div>

      {/* SECTION 1: AI Tools to Learn NOW */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Wrench className="w-5 h-5 text-blue-600" />
          <h4 className="text-lg font-semibold text-gray-900">AI Tools for {userRole}s</h4>
        </div>
        
        <p className="text-gray-700 mb-4">
          Start with these AI tools to 10x your productivity and show your company you're leading the AI revolution:
        </p>

        {aiToolsForRole.length > 0 && (
          <div className="mb-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {aiToolsForRole.slice(0, 6).map((tool, index) => (
                <div key={index} className="bg-white rounded-lg border border-blue-200 p-3 text-center">
                  <div className="font-medium text-gray-900 text-sm">{tool}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
        onClick={() => {
            if (isPremium) {
            navigate('/plan');
            } else {
            onSelectPath(primaryPath);
            }
        }}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
        {isPremium ? 'Get Your 90-Day AI Plan' : 'Get Complete AI Roadmap'}
        <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* SECTION 2: AI-Resistant Skills */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <h4 className="text-lg font-semibold text-gray-900">Skills AI Can't Replace</h4>
        </div>
        
        <p className="text-gray-700 mb-4">
          Double down on these human-advantage skills that will always be valuable:
        </p>

        {/* Show AI-resistant skills from data */}
        <div className="space-y-2 mb-4">
          {aiResistantSkills.slice(0, 4).map((skill, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{skill}</span>
            </div>
          ))}
        </div>

        <div className="text-sm text-gray-600 mb-4">
          💡 <strong>Your 90-day plan</strong> shows you exactly how to strengthen these skills while learning AI tools.
        </div>

        {/* Add Hybrid Skills section */}
        {hybridSkills.length > 0 && (
          <div className="mt-4 pt-4 border-t border-green-200">
            <h5 className="font-medium text-gray-900 mb-2">AI + Human Collaboration Skills:</h5>
            <div className="flex flex-wrap gap-2">
              {hybridSkills.slice(0, 3).map((skill, index) => (
                <span key={index} className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* SECTION 3: Career Opportunities (Always Visible) */}
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-purple-600" />
          <h4 className="font-semibold text-gray-900">Career Opportunities</h4>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Once you've mastered AI tools and skills, these are directions you could explore if you want new opportunities:
        </p>

        {/* Primary Career Path */}
        <div className="bg-purple-50 rounded-lg border border-purple-200 p-4 mb-4">
          <div className="flex items-start justify-between mb-2">
            <h5 className="font-semibold text-gray-900">{primaryPath.title}</h5>
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
              {primaryPath.fit}% fit
            </span>
          </div>
          <p className="text-sm text-gray-700 mb-3">{primaryPath.description}</p>
          
          {primaryPath.why && primaryPath.why.length > 0 && (
            <div className="space-y-1">
              {primaryPath.why.slice(0, 2).map((reason, index) => (
                <div key={index} className="flex items-start gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{reason}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Secondary Career Paths */}
        {secondaryPaths.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {secondaryPaths.map((path, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 p-3">
                <div className="flex items-start justify-between mb-1">
                  <h6 className="font-medium text-gray-900 text-sm">{path.title}</h6>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                    {path.fit}% fit
                  </span>
                </div>
                <p className="text-xs text-gray-600">{path.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Upgrade Prompt */}
      {!isPremium && (
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-200 p-4 mt-6">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-indigo-500 mt-0.5" />
            <div className="flex-1">
              <h5 className="font-medium text-gray-900 mb-1">Get Your Complete AI Action Plan</h5>
              <p className="text-sm text-gray-600 mb-3">
                90-day roadmap with weekly actions, tool tutorials, skill-building exercises, and positioning strategies.
              </p>
              <button
                onClick={onSelectPath}
                className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Get AI-Proof Plan - $29
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvolutionPaths;