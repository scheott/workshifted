// src/pages/Results.jsx - Fixed to use working CheckoutModal instead of broken SubscriptionGate
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { fetchApprenticeships } from '../lib/apprenticeships';
import CheckoutModal from '../components/CheckoutModal';
import Footer from '../components/Footer';


// ⬇️ NEW: manual location helpers + UI
import { getUserLocation, getStateName } from '../lib/location';
import LocationInput from '../components/LocationInput';

// Fixed component that properly matches your skill keys
const FixedSkillsDisplay = ({ userSkills, selectedCareer, skillsBreakdown }) => {
  // Create mapping between display names and actual userSkills keys
  const skillKeyMapping = {
    "Problem Solving": "problem_solving",
    "Technical Aptitude": "technical", 
    "Technical Skills": "technical",
    "Customer Service": "customer_service",
    "Independent Work": "independent",
    "Electrical Basics": "electrical",
    "Mechanical Aptitude": "mechanical", 
    "Attention to Detail": "detail",
    "Physical Stamina": "physical_stamina",
    "Safety Conscious": "safety_conscious",
    "Communication": "customer_service",
    "Precision": "precision",
    "Analytical Thinking": "analytical",
    "Organization": "detail",
    "Trust Building": "trust_building",
    "Modern Technology": "modern_tech",
    "Outdoor Work": "outdoor_work",
    "Resilience": "resilience"
  };

  const getSkillsData = () => {
    // If we have detailed breakdown, use that
    if (skillsBreakdown?.categories) {
      return skillsBreakdown.categories.map(category => {
        const skillKey = skillKeyMapping[category.name] || category.name.toLowerCase().replace(/\s+/g, '_');
        const userValue = userSkills[skillKey] || 0;
        
        return {
          name: category.name,
          description: category.description,
          userValue: userValue,
          required: category.weight || 5,
          skillKey: skillKey
        };
      }).filter(skill => skill.userValue > 0); // Only show skills they have some rating for
    }
    
    // Fallback: use career's requiredWeights if available
    if (selectedCareer?.requiredWeights) {
      return Object.entries(selectedCareer.requiredWeights).map(([key, required]) => {
        const userValue = userSkills[key] || 0;
        const displayName = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        
        return {
          name: displayName,
          description: getSkillDescription(key),
          userValue: userValue,
          required: required,
          skillKey: key
        };
      }).filter(skill => skill.userValue > 0);
    }
    
    // Final fallback: show all userSkills that have values
    return Object.entries(userSkills || {})
      .filter(([key, value]) => value > 0)
      .map(([key, value]) => ({
        name: key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        description: getSkillDescription(key),
        userValue: value,
        required: 7, // Default
        skillKey: key
      }));
  };

  // Helper to get descriptions for skill keys
  const getSkillDescription = (key) => {
    const descriptions = {
      technical: "Understanding systems and technology",
      problem_solving: "Diagnosing and fixing issues",
      detail: "Precision and accuracy in work",
      customer_service: "Professional communication",
      independent: "Working with minimal supervision",
      physical_stamina: "Handling physical demands",
      safety_conscious: "Prioritizing safety procedures",
      electrical: "Electrical systems knowledge",
      mechanical: "Mechanical systems understanding",
      precision: "Exact and careful work",
      analytical: "Breaking down complex problems",
      modern_tech: "Current technology skills",
      outdoor_work: "Comfortable working outside",
      resilience: "Handling challenges and setbacks",
      trust_building: "Building client confidence"
    };
    return descriptions[key] || "Important skill for this career";
  };

  const skills = getSkillsData();
  
  if (!skills || skills.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Skills Match</h3>
        <p className="text-gray-500 text-sm">Complete your assessment to see your skills analysis.</p>
      </div>
    );
  }

  // Calculate strengths (above 70% match) and growth areas (below 70% match)
  const strengths = skills.filter(skill => (skill.userValue / skill.required) >= 0.7);
  const growthAreas = skills.filter(skill => (skill.userValue / skill.required) < 0.7);

  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Your Skills for {selectedCareer?.title}</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        {/* Strengths */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-600">✅</span>
            <h4 className="font-semibold text-green-800">Your Strengths</h4>
            <span className="text-xs text-gray-500">({strengths.length})</span>
          </div>
          {strengths.length > 0 ? (
            <div className="space-y-2">
              {strengths.slice(0, 5).map((skill, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">{skill.name}</span>
                </div>
              ))}
              {strengths.length > 5 && (
                <div className="text-xs text-gray-500 ml-4">
                  +{strengths.length - 5} more strengths
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-500">Great opportunity to develop new strengths!</p>
          )}
        </div>

        {/* Growth Areas */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-blue-600">🎯</span>
            <h4 className="font-semibold text-blue-800">Growth Opportunities</h4>
            <span className="text-xs text-gray-500">({growthAreas.length})</span>
          </div>
          {growthAreas.length > 0 ? (
            <div className="space-y-2">
              {growthAreas.slice(0, 5).map((skill, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">{skill.name}</span>
                </div>
              ))}
              {growthAreas.length > 5 && (
                <div className="text-xs text-gray-500 ml-4">
                  +{growthAreas.length - 5} more to develop
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-500">You're well-matched across all key skills!</p>
          )}
        </div>
      </div>

      {/* Simple summary */}
      <div className="mt-4 pt-3 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          {strengths.length >= growthAreas.length 
            ? `Strong match! You have ${strengths.length} key strengths for this career.`
            : `Good potential! Focus on developing ${Math.min(growthAreas.length, 3)} key areas through training.`
          }
        </p>
      </div>
    </div>
  );
};

// Enhanced Learning Roadmap Components for Results.jsx

// Compact Learning Step Component
const LearningStep = ({ step, isCompleted, onToggle, isPremium, learningPath, isExpanded, onExpandToggle }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'fundamentals': return '📚';
      case 'skills': return '🔧';
      case 'certification': return '🏆';
      case 'experience': return '💼';
      default: return '📋';
    }
  };
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'fundamentals': return 'bg-blue-100 text-blue-800';
      case 'skills': return 'bg-green-100 text-green-800';
      case 'certification': return 'bg-yellow-100 text-yellow-800';
      case 'experience': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'essential': return 'border-l-red-500';
      case 'recommended': return 'border-l-blue-500';
      case 'optional': return 'border-l-gray-400';
      default: return 'border-l-gray-400';
    }
  };

  // Find relevant resources for this step
  const getRelevantResources = () => {
    if (!learningPath?.recommendedResources) return [];
    return learningPath.recommendedResources.filter(resource => 
      resource.relevantSteps?.includes(step.id)
    );
  };

  const relevantResources = getRelevantResources();
  const hasExpandableContent = relevantResources.length > 0 || step.category === 'certification';

  // COMPACT VIEW (default)
  if (!isExpanded) {
    return (
      <div 
        className={`border-l-4 ${getPriorityColor(step.priority)} rounded-lg bg-white shadow-sm transition-all cursor-pointer hover:shadow-md ${
          isCompleted ? 'bg-green-50' : ''
        }`}
        onClick={onExpandToggle}
      >
        <div className="p-3">
          <div className="flex items-center gap-3">
            {/* Completion checkbox */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                isPremium && onToggle(step.id);
              }}
              disabled={!isPremium}
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                isCompleted ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-green-400'
              } ${!isPremium ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
            >
              {isCompleted && (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            {/* Icon and title */}
            <span className="text-lg">{getCategoryIcon(step.category)}</span>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-900 truncate">{step.title}</h4>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(step.category)}`}>
                {step.category}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                step.priority === 'essential' ? 'bg-red-100 text-red-800' :
                step.priority === 'recommended' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {step.priority}
              </span>
              <span className="text-sm text-gray-500">{step.estimatedTime}</span>
            </div>

            {/* Expand indicator */}
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // EXPANDED VIEW
  return (
    <div className={`border-l-4 ${getPriorityColor(step.priority)} rounded-lg bg-white shadow-sm transition-all ${
      isCompleted ? 'bg-green-50' : ''
    }`}>
      <div className="p-4">
        <div className="flex items-start gap-4">
          {/* Completion checkbox */}
          <button
            onClick={() => isPremium && onToggle(step.id)}
            disabled={!isPremium}
            className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
              isCompleted ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-green-400'
            } ${!isPremium ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
          >
            {isCompleted && (
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          {/* Main content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">{getCategoryIcon(step.category)}</span>
                <h4 className="font-semibold text-gray-900">{step.title}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(step.category)}`}>
                  {step.category}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  step.priority === 'essential' ? 'bg-red-100 text-red-800' :
                  step.priority === 'recommended' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {step.priority}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{step.estimatedTime}</span>
                <button
                  onClick={onExpandToggle}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-3">{step.description}</p>

            {/* Learning Objectives */}
            {step.learningObjectives && step.learningObjectives.length > 0 && (
              <div className="mb-3">
                <h5 className="text-sm font-medium text-gray-900 mb-2">What you'll learn:</h5>
                <ul className="space-y-1">
                  {step.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Resources Section */}
            {hasExpandableContent && (
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                
                {/* Paid Resources */}
                {relevantResources.length > 0 && (
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                      <span>💳</span>
                      Recommended Paid Resources
                    </h5>
                    <div className="grid gap-3">
                      {relevantResources.map((resource, index) => (
                        <div key={index} className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                          <div className="flex justify-between items-start mb-2">
                            <h6 className="font-medium text-gray-900">{resource.title}</h6>
                            <span className="text-sm text-blue-600 font-medium">{resource.cost}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                          <div className="flex justify-between items-center">
                            <div className="text-xs text-gray-500">{resource.provider}</div>
                            {resource.url && (
                              <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                              >
                                View Course
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* For certification steps with no paid resources */}
                {step.category === 'certification' && relevantResources.length === 0 && (
                  <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                      💡 <strong>Certification Tip:</strong> This step typically requires official testing or licensing. 
                      Check with your state board or certifying body for specific requirements and exam dates.
                    </p>
                  </div>
                )}
                
              </div>
            )}

            {/* Show free resource hint for steps without paid resources */}
            {!hasExpandableContent && (
              <div className="mt-3">
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="text-sm text-blue-800">
                    💡 <strong>Learning tip:</strong> You can learn this step using free resources. 
                    See the "Free Resources" section at the bottom of this roadmap for specific suggestions.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};
// Progress calculation function - Updated for new structure
const getProgressPercentage = (userProgress, learningPath) => {
  if (!learningPath?.steps || learningPath.steps.length === 0) return 0;
  
  // Calculate progress based on priority weights
  const stepWeights = {
    essential: 3,
    recommended: 2, 
    optional: 1
  };
  
  let totalWeight = 0;
  let completedWeight = 0;
  
  learningPath.steps.forEach(step => {
    const weight = stepWeights[step.priority] || 1;
    totalWeight += weight;
    
    const isCompleted = userProgress.some(p => 
      p.milestone_data?.step_id === step.id
    );
    
    if (isCompleted) {
      completedWeight += weight;
    }
  });
  
  return totalWeight > 0 ? Math.round((completedWeight / totalWeight) * 100) : 0;
};

const LearningRoadmapSection = ({ learningPath, userProgress, isPremium, toggleStepCompletion, selectedCareer, onUpgrade }) => {
  const [expandedStep, setExpandedStep] = useState(null);

  if (!learningPath) return null;

  const getProgressPercentage = () => {
    if (!learningPath?.steps || learningPath.steps.length === 0) return 0;
    
    const stepWeights = {
      essential: 3,
      recommended: 2, 
      optional: 1
    };
    
    let totalWeight = 0;
    let completedWeight = 0;
    
    learningPath.steps.forEach(step => {
      const weight = stepWeights[step.priority] || 1;
      totalWeight += weight;
      
      const isCompleted = userProgress.some(p => 
        p.milestone_data?.step_id === step.id
      );
      
      if (isCompleted) {
        completedWeight += weight;
      }
    });
    
    return totalWeight > 0 ? Math.round((completedWeight / totalWeight) * 100) : 0;
  };
  
  const handleUpgrade = () => {
    setShowCheckoutModal(true);
  };

  const getStepsByPriority = () => {
    const grouped = {
      essential: [],
      recommended: [],
      optional: []
    };
    
    learningPath.steps.forEach(step => {
      grouped[step.priority]?.push(step);
    });
    
    return grouped;
  };

  const stepsByPriority = getStepsByPriority();
  const isStepCompleted = (stepId) => userProgress.some(p => p.milestone_data?.step_id === stepId);

  return (
    <>
      {isPremium ? (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Your Learning Roadmap</h3>
              <p className="text-sm text-gray-600 mt-1">
                Estimated Duration: {learningPath.estimatedDuration} • Click to expand steps
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{getProgressPercentage()}%</div>
              <div className="text-xs text-gray-500">Complete</div>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Overall Progress</span>
              <span className="text-sm text-gray-600">{getProgressPercentage()}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Essential: {stepsByPriority.essential.filter(s => isStepCompleted(s.id)).length}/{stepsByPriority.essential.length}</span>
              <span>Recommended: {stepsByPriority.recommended.filter(s => isStepCompleted(s.id)).length}/{stepsByPriority.recommended.length}</span>
              <span>Optional: {stepsByPriority.optional.filter(s => isStepCompleted(s.id)).length}/{stepsByPriority.optional.length}</span>
            </div>
          </div>

          {/* Learning Steps - COMPACT BY DEFAULT */}
          <div className="space-y-3">
            {learningPath.steps.map((step) => (
              <LearningStep
                key={step.id}
                step={step}
                isCompleted={isStepCompleted(step.id)}
                onToggle={toggleStepCompletion}
                isPremium={isPremium}
                learningPath={learningPath}
                isExpanded={expandedStep === step.id}
                onExpandToggle={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
              />
            ))}
          </div>

          {/* Free Resources Section - MOVED HERE */}
          {learningPath?.freeResources && learningPath.freeResources.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                <span>🆓</span>
                Free Learning Resources for All Steps
              </h4>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-green-800 mb-3">
                  Use these free resources to learn any of the skills above:
                </p>
                <div className="grid gap-3">
                  {learningPath.freeResources.map((resource, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-green-700 font-medium text-sm">{resource.title}: </span>
                        <span className="text-sm text-gray-700">{resource.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Learning Roadmap</h3>
              <p className="text-gray-600 text-sm mb-3">
                Get step-by-step guidance tailored for {selectedCareer.title} with progress tracking.
              </p>
              <div className="bg-blue-50 rounded-lg p-3 mb-4">
                <div className="text-sm text-blue-800 font-medium mb-1">
                  {learningPath.steps.length} Learning Steps Available
                </div>
                <div className="text-xs text-blue-600">
                  {stepsByPriority.essential.length} Essential • {stepsByPriority.recommended.length} Recommended • {stepsByPriority.optional.length} Optional
                </div>
              </div>
              <CheckoutModal 
                trigger={
                  <button 
                  onClick={onUpgrade}
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all"
                  >
                    Unlock Full Roadmap - $29
                  </button>
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Main Results Component
const Results = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const careerParam = searchParams.get('career');
  
  const [loading, setLoading] = useState(true);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [userMatches, setUserMatches] = useState([]);
  const [userTraits, setUserTraits] = useState({});
  const [learningPath, setLearningPath] = useState(null);
  const [realityCheck, setRealityCheck] = useState(null);
  const [skillsBreakdown, setSkillsBreakdown] = useState(null);
  const [userProgress, setUserProgress] = useState([]);
  const [apprenticeships, setApprenticeships] = useState([]);
  const [userLocation, setUserLocation] = useState(null); // { state, city, country, location_consent }
  const [userProfile, setUserProfile] = useState(null);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  // Check if user is premium
  const isPremium = userProfile?.subscription_status === 'premium' || userProfile?.subscription_status === 'paid';

  useEffect(() => {
    if (!user) return;
    const loadData = async () => {
      try {
        const { data: assessmentData } = await supabase
          .from('assessment_results')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (!assessmentData) {
          navigate('/assessment');
          return;
        }

        setUserMatches(assessmentData.career_matches || []);
        setUserTraits(assessmentData.user_traits || {});

        // Get user profile for premium status and selected_career
        const { data: profileData } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();

        setUserProfile(profileData);

        // ⬇️ NEW: fetch saved manual location (state/city)
        const profileLocation = await getUserLocation();
        setUserLocation(profileLocation);

        // Determine which career to show
        let targetCareer = null;
        if (careerParam) {
          targetCareer = (assessmentData.career_matches || []).find(c => c.key === careerParam);
        } else if (profileData?.selected_career) {
          targetCareer = (assessmentData.career_matches || []).find(c => c.key === profileData.selected_career);
        } else {
          targetCareer = (assessmentData.career_matches || [])[0];
        }

        if (!targetCareer) {
          navigate('/dashboard');
          return;
        }

        setSelectedCareer(targetCareer);

        await loadCareerData(targetCareer.key);

        // Only load progress if premium
        if (profileData?.subscription_status === 'premium' || profileData?.subscription_status === 'paid') {
          await loadUserProgress(targetCareer.key);
        }

        // ⬇️ NEW: fetch apprenticeships using manual state if present
        if (profileLocation?.state) {
          const apprenticeshipData = await fetchApprenticeships(targetCareer.title, profileLocation.state);
          setApprenticeships(apprenticeshipData);
        } else {
          setApprenticeships([]);
        }
      } catch (error) {
        console.error('Error loading results data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user, careerParam, navigate]);

  const toCamelCase = (str) => {
    return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
  };

  const loadCareerData = async (careerKey) => {
    try {
      const [learningPathModule, realityCheckModule, skillsModule] = await Promise.all([
        import(`../data/learningPaths/${careerKey}.js`).catch(() => null),
        import(`../data/realityChecks/${careerKey}.js`).catch(() => null),
        import(`../data/skillsBreakdown/${careerKey}.js`).catch(() => null)
      ]);

      if (learningPathModule) {
        const pathKey = `${toCamelCase(careerKey)}LearningPath`;
        setLearningPath(learningPathModule[pathKey] || null);
      }

      if (realityCheckModule) {
        const checkKey = `${toCamelCase(careerKey)}RealityCheck`;
        setRealityCheck(realityCheckModule[checkKey] || null);
      }

      if (skillsModule) {
        const skillsKey = `${toCamelCase(careerKey)}SkillsBreakdown`;
        setSkillsBreakdown(skillsModule[skillsKey] || null);
      }
    } catch (error) {
      console.error('Error loading career data files:', error);
    }
  };

  const loadUserProgress = async (careerKey) => {
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('milestone_type', 'learning_step_completed')
        .order('completed_at', { ascending: false });

      if (error) throw error;

      const careerProgress = (data || []).filter(p => p.milestone_data?.career === careerKey);
      setUserProgress(careerProgress);
    } catch (error) {
      console.error('Error loading user progress:', error);
      setUserProgress([]);
    }
  };

  const toggleStepCompletion = async (stepId) => {
    if (!isPremium) return;
    
    try {
      const existingProgress = userProgress.find(p => 
        p.milestone_data?.step_id === stepId && p.milestone_data?.career === selectedCareer.key
      );

      if (existingProgress) {
        await supabase.from('user_progress').delete().eq('id', existingProgress.id);
        setUserProgress(prev => prev.filter(p => p.id !== existingProgress.id));
      } else {
        const { data, error } = await supabase
          .from('user_progress')
          .insert({
            user_id: user.id,
            milestone_type: 'learning_step_completed',
            milestone_data: {
              career: selectedCareer.key,
              step_id: stepId,
              step_title: learningPath.steps.find(s => s.id === stepId)?.title
            },
            completed_at: new Date().toISOString()
          })
          .select()
          .single();

        if (error) throw error;
        setUserProgress(prev => [...prev, data]);
      }
    } catch (error) {
      console.error('Error toggling step completion:', error);
    }
  };

// Updates needed in Results.jsx

  // 1. Replace the getProgressPercentage function:
  const getProgressPercentage = () => {
    if (!learningPath?.steps || learningPath.steps.length === 0) return 0;
    
    // Calculate progress based on priority weights
    const stepWeights = {
      essential: 3,
      recommended: 2, 
      optional: 1
    };
    
    let totalWeight = 0;
    let completedWeight = 0;
    
    learningPath.steps.forEach(step => {
      const weight = stepWeights[step.priority] || 1;
      totalWeight += weight;
      
      const isCompleted = userProgress.some(p => 
        p.milestone_data?.step_id === step.id && p.milestone_data?.career === selectedCareer.key
      );
      
      if (isCompleted) {
        completedWeight += weight;
      }
    });
    
    return totalWeight > 0 ? Math.round((completedWeight / totalWeight) * 100) : 0;
  };

  // 2. Replace the isStepCompleted function:
  const isStepCompleted = (stepId) => {
    return userProgress.some(p => 
      p.milestone_data?.step_id === stepId && p.milestone_data?.career === selectedCareer.key
    );
  };

  // 3. Replace the Learning Path section in the JSX:
  {/* Learning Path - PREMIUM with Compact Paywall */}
  <LearningRoadmapSection 
    learningPath={learningPath}
    userProgress={userProgress}
    isPremium={isPremium}
    toggleStepCompletion={toggleStepCompletion}
    selectedCareer={selectedCareer}
    onUpgrade={() => setShowCheckoutModal(true)}
  />

  // 4. Update the progress sidebar section:
  {isPremium ? (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Your Progress</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Completed Steps</span>
          <span className="font-semibold">
            {userProgress.filter(p => p.milestone_data?.career === selectedCareer.key).length}/{learningPath?.steps?.length || 0}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Essential Steps</span>
          <span className="font-semibold">
            {userProgress.filter(p => {
              const step = learningPath?.steps?.find(s => s.id === p.milestone_data?.step_id);
              return step?.priority === 'essential' && p.milestone_data?.career === selectedCareer.key;
            }).length}/{learningPath?.steps?.filter(s => s.priority === 'essential')?.length || 0}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Overall Progress</span>
          <span className="font-semibold text-green-600">{getProgressPercentage()}%</span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
        
        {/* Priority breakdown */}
        <div className="text-xs text-gray-500 space-y-1">
          <div className="flex justify-between">
            <span>Essential:</span>
            <span>{learningPath?.steps?.filter(s => s.priority === 'essential' && isStepCompleted(s.id)).length || 0}/{learningPath?.steps?.filter(s => s.priority === 'essential').length || 0}</span>
          </div>
          <div className="flex justify-between">
            <span>Recommended:</span>
            <span>{learningPath?.steps?.filter(s => s.priority === 'recommended' && isStepCompleted(s.id)).length || 0}/{learningPath?.steps?.filter(s => s.priority === 'recommended').length || 0}</span>
          </div>
          <div className="flex justify-between">
            <span>Optional:</span>
            <span>{learningPath?.steps?.filter(s => s.priority === 'optional' && isStepCompleted(s.id)).length || 0}/{learningPath?.steps?.filter(s => s.priority === 'optional').length || 0}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl text-white p-6">
      <h3 className="text-lg font-bold mb-2">Track Your Progress</h3>
      <p className="text-blue-100 text-sm mb-4">
        Upgrade to premium to track your learning progress and check off completed steps.
      </p>
      <div className="bg-white bg-opacity-20 rounded-lg p-3">
        <div className="text-center">
          <div className="text-2xl font-bold mb-1">?</div>
          <div className="text-xs">Progress Tracking</div>
        </div>
      </div>
    </div>
  )}
  // ⬇️ NEW: called when LocationInput saves a new state/city
  const handleLocationUpdate = async (loc) => {
    setUserLocation(loc);
    if (selectedCareer?.title && loc?.state) {
      try {
        const data = await fetchApprenticeships(selectedCareer.title, loc.state);
        setApprenticeships(data || []);
      } catch (e) {
        console.error('Error fetching apprenticeships for updated location:', e);
        setApprenticeships([]);
      }
    } else {
      setApprenticeships([]);
    }
  };

  // Helper function to get master level salary dynamically
  const getMasterLevelSalary = (realityCheck) => {
    const earnings = realityCheck?.earningsReality;
    if (!earnings) return 'Not available';
    
    // Try different field names used across careers
    return earnings.masterElectrician || 
           earnings.masterPlumber || 
           earnings.masterLead || 
           earnings.seniorLead || 
           earnings.masterLevel ||
           'Not available';
  };

  const handleUpgrade = () => {
    setShowCheckoutModal(true);
  };

  const handlePaymentSuccess = () => {
    // Refresh user profile to get updated premium status
    loadUserData();
    setShowCheckoutModal(false);
  };

  const displayLocation = userLocation?.state
    ? `${userLocation?.city ? `${userLocation.city}, ` : ''}${getStateName(userLocation.state)}`
    : '';

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-lg text-gray-700">Loading your career plan...</span>
        </div>
      </div>
    );
  }

  if (!selectedCareer) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Not Found</h2>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Back to Dashboard
              </button>
              <div className="text-2xl font-bold text-blue-600">WorkShifted</div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-700">
                Progress: {isPremium ? getProgressPercentage() : '?'}%
              </span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${isPremium ? getProgressPercentage() : 0}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Career Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl text-white p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{selectedCareer.title} Career Path</h1>
              <p className="text-blue-100 text-lg mb-4">{selectedCareer.description}</p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-blue-200">Your Match</div>
                  <div className="text-2xl font-bold">{selectedCareer.matchPercentage}%</div>
                </div>
                <div>
                  <div className="text-sm text-blue-200">Salary Range</div>
                  <div className="text-lg font-semibold">{selectedCareer.salary}</div>
                </div>
                <div>
                  <div className="text-sm text-blue-200">Time to Start</div>
                  <div className="text-lg font-semibold">{selectedCareer.timeline}</div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-blue-200 text-sm mb-1">Completion</div>
              <div className="text-4xl font-bold">{isPremium ? getProgressPercentage() : '?'}%</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Skills Display - FREE */}
            <FixedSkillsDisplay 
              userSkills={userTraits}
              selectedCareer={selectedCareer}
              skillsBreakdown={skillsBreakdown}
            />

            {/* Learning Path - PREMIUM with Compact Paywall */}
              <LearningRoadmapSection 
                learningPath={learningPath}
                userProgress={userProgress}
                isPremium={isPremium}
                toggleStepCompletion={toggleStepCompletion}
                selectedCareer={selectedCareer}
                onUpgrade={() => setShowCheckoutModal(true)}
              />

            {/* Reality Check - PREMIUM with Compact Paywall */}
            {isPremium ? (
              realityCheck && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Reality Check: What You Need to Know</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">💪 Physical Demands</h4>
                      <ul className="space-y-2">
                        {realityCheck.physicalDemands.map((demand, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-orange-500 mt-0.5">•</span>
                            {demand}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">🏗️ Work Conditions</h4>
                      <ul className="space-y-2">
                        {realityCheck.workConditions.map((condition, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-blue-500 mt-0.5">•</span>
                            {condition}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">🧠 Mental Challenges</h4>
                      <ul className="space-y-2">
                        {realityCheck.mentalChallenges.map((challenge, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-purple-500 mt-0.5">•</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">⏰ Time Commitment</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div><strong>Apprenticeship:</strong> {realityCheck.timeCommitment.apprenticeship}</div>
                        <div><strong>Weekly Hours:</strong> {realityCheck.timeCommitment.weeklyHours}</div>
                        <div><strong>Continuing Ed:</strong> {realityCheck.timeCommitment.continuingEducation}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">💰 Earnings Reality</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600">Apprentice Start</div>
                        <div className="font-semibold text-gray-900">{realityCheck.earningsReality.apprenticeStarting}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Journeyman</div>
                        <div className="font-semibold text-gray-900">{realityCheck.earningsReality.journeymanAverage}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Master Level</div>
                        <div className="font-semibold text-gray-900">{getMasterLevelSalary(realityCheck)}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Business Owner</div>
                        <div className="font-semibold text-gray-900">{realityCheck.earningsReality.businessOwner}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.19 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Reality Check</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Honest insights about physical demands, work conditions, and salary expectations for {selectedCareer.title}.
                    </p>
                    <button 
                      onClick={handleUpgrade}
                      className="text-yellow-600 text-sm font-medium hover:text-yellow-800 cursor-pointer"
                    >
                      Unlock Reality Check →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Training Programs - PREMIUM with Compact Paywall */}
            {isPremium ? (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    Training Programs {displayLocation ? `in ${displayLocation}` : ''}
                  </h3>
                </div>

                {/* ⬇️ If no state yet, prompt to set location */}
                {!userLocation?.state && (
                  <div>
                    <p className="text-gray-600 mb-4">
                      Set your state (and optional city) to see training programs near you.
                    </p>
                    <LocationInput
                      currentState={null}
                      onLocationUpdate={handleLocationUpdate}
                    />
                  </div>
                )}

                {/* If state exists, show results or an empty-state with a quick changer */}
                {userLocation?.state && (
                  <>
                    {apprenticeships.length > 0 ? (
                      <div className="grid gap-4">
                        {apprenticeships.slice(0, 5).map((program, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-gray-900">{program.title || 'Training Program'}</h4>
                              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                {program.type || 'Program'}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{program.description}</p>
                            <div className="flex justify-between items-center text-sm text-gray-500">
                              <span>{program.location || userLocation?.city || getStateName(userLocation.state)}</span>
                              {program.url && (
                                <a 
                                  href={program.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 font-medium"
                                >
                                  Learn More →
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">
                          No programs found for {getStateName(userLocation.state)} yet. Try another nearby state or adjust your search.
                        </p>
                        <LocationInput
                          currentState={userLocation.state}
                          onLocationUpdate={handleLocationUpdate}
                          className="max-w-md mx-auto"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Regional Training Programs</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Find training programs and apprenticeships in your area.
                    </p>
                    <button 
                      onClick={handleUpgrade}
                      className="text-green-600 text-sm font-medium hover:text-green-800 cursor-pointer"
                    >
                      Find Programs Near You →
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            
            {/* Progress Card */}
            {isPremium ? (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Your Progress</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Completed Steps</span>
                    <span className="font-semibold">
                      {userProgress.length}/{learningPath?.steps?.length || 0}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Required Steps</span>
                    <span className="font-semibold">
                      {userProgress.filter(p => {
                        const step = learningPath?.steps?.find(s => s.id === p.milestone_data?.step_id);
                        return step?.required;
                      }).length}/{learningPath?.steps?.filter(s => s.required)?.length || 0}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Overall Progress</span>
                    <span className="font-semibold text-green-600">{getProgressPercentage()}%</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl text-white p-6">
                <h3 className="text-lg font-bold mb-2">Track Your Progress</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Upgrade to premium to track your learning progress and check off completed steps.
                </p>
                <div className="bg-white bg-opacity-20 rounded-lg p-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">?</div>
                    <div className="text-xs">Progress Tracking</div>
                  </div>
                </div>
              </div>
            )}

            {/* Other Top Matches - FREE */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Other Top Matches</h3>
              <div className="space-y-3">
                {userMatches.slice(0, 3).filter(c => c.key !== selectedCareer.key).map((career) => (
                  <button
                    key={career.key}
                    onClick={() => navigate(`/results?career=${career.key}`)}
                    className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <div className="font-medium text-gray-900">{career.title}</div>
                      <div className="text-sm text-blue-600 font-semibold">{career.matchPercentage}%</div>
                    </div>
                    <div className="text-sm text-gray-600">{career.salary}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Networking Actions - FREE */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Next Steps</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium text-blue-900">Connect with Professionals</div>
                  <div className="text-sm text-blue-700 mt-1">
                    Reach out to 2-3 local {selectedCareer.title.toLowerCase()}s for informational interviews
                  </div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-medium text-green-900">Join Trade Organizations</div>
                  <div className="text-sm text-green-700 mt-1">
                    Find local {selectedCareer.title} associations and attend meetings
                  </div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="font-medium text-purple-900">Visit Job Sites</div>
                  <div className="text-sm text-purple-700 mt-1">
                    Ask to shadow professionals or visit active work sites
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors"
                >
                  Back to Dashboard
                </button>
                
                {/* PDF Download - PREMIUM */}
                {isPremium ? (
                  <button
                    onClick={() => { alert('PDF generation coming soon!'); }}
                    className="w-full bg-green-100 hover:bg-green-200 text-green-700 py-2 px-4 rounded-lg transition-colors"
                  >
                    Download Career Guide
                  </button>
                ) : (
                  <div className="relative">
                    <button 
                      className="w-full bg-gray-100 text-gray-400 py-2 px-4 rounded-lg cursor-not-allowed"
                      disabled
                    >
                      Download Career Guide 🔒
                    </button>
                    <button
                      onClick={handleUpgrade}
                      className="absolute inset-0 bg-transparent cursor-pointer"
                    >
                      <span className="sr-only">Upgrade to download</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={showCheckoutModal}
        onClose={() => setShowCheckoutModal(false)}
        onSuccess={handlePaymentSuccess}
      />
      {/* Footer at bottom */}
      <Footer />
    </div>
  );
};

export default Results;