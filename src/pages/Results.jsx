// src/pages/Results.jsx - Complete Rewrite
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { fetchApprenticeships } from '../lib/apprenticeships';

// Radar Chart Component for Skills Visualization
const SkillsRadarChart = ({ userSkills, requiredSkills, skillsBreakdown }) => {
  const categories = skillsBreakdown?.categories || [];
  
  // Calculate angles for each skill category
  const getCoordinates = (value, index, total, radius = 80) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    const adjustedValue = (value / 10) * radius; // Scale to 0-80px radius
    return {
      x: 120 + adjustedValue * Math.cos(angle),
      y: 120 + adjustedValue * Math.sin(angle)
    };
  };

  const userPoints = categories.map((category, index) => {
    const userValue = userSkills[category.name.toLowerCase().replace(/\s+/g, '_')] || 0;
    return getCoordinates(Math.min(userValue, 10), index, categories.length);
  });

  const requiredPoints = categories.map((category, index) => {
    const requiredValue = category.weight || 5;
    return getCoordinates(requiredValue, index, categories.length);
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Your Skills Match Analysis</h3>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* SVG Radar Chart */}
        <div className="flex-shrink-0">
          <svg width="240" height="240" className="mx-auto">
            {/* Grid circles */}
            {[2, 4, 6, 8, 10].map(radius => (
              <circle
                key={radius}
                cx="120"
                cy="120"
                r={radius * 8}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            ))}
            
            {/* Grid lines */}
            {categories.map((_, index) => {
              const end = getCoordinates(10, index, categories.length);
              return (
                <line
                  key={index}
                  x1="120"
                  y1="120"
                  x2={end.x}
                  y2={end.y}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
              );
            })}
            
            {/* Required skills polygon */}
            <polygon
              points={requiredPoints.map(p => `${p.x},${p.y}`).join(' ')}
              fill="rgba(59, 130, 246, 0.1)"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            
            {/* User skills polygon */}
            <polygon
              points={userPoints.map(p => `${p.x},${p.y}`).join(' ')}
              fill="rgba(16, 185, 129, 0.2)"
              stroke="#10b981"
              strokeWidth="3"
            />
            
            {/* Labels */}
            {categories.map((category, index) => {
              const labelPos = getCoordinates(12, index, categories.length, 100);
              return (
                <text
                  key={index}
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  className="text-xs font-medium fill-gray-700"
                  dominantBaseline="middle"
                >
                  {category.name}
                </text>
              );
            })}
          </svg>
          
          {/* Legend */}
          <div className="flex justify-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm text-gray-600">Your Skills</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-blue-500 border-dashed rounded"></div>
              <span className="text-sm text-gray-600">Required</span>
            </div>
          </div>
        </div>
        
        {/* Skills breakdown */}
        <div className="flex-1">
          <div className="space-y-3">
            {categories.map((category, index) => {
              const userValue = userSkills[category.name.toLowerCase().replace(/\s+/g, '_')] || 0;
              const required = category.weight;
              const percentage = Math.min((userValue / required) * 100, 100);
              
              return (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{category.name}</span>
                    <span className="text-sm text-gray-500">{userValue}/{required}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        percentage >= 80 ? 'bg-green-500' : 
                        percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600">{category.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// Learning Path Step Component
const LearningStep = ({ step, isCompleted, onToggle, userProgress }) => {
  const [expanded, setExpanded] = useState(false);
  
  const getStepIcon = (type) => {
    switch (type) {
      case 'education':
        return '📚';
      case 'certification':
        return '🏆';
      case 'experience':
        return '🔧';
      case 'networking':
        return '🤝';
      default:
        return '📋';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'education':
        return 'bg-blue-100 text-blue-800';
      case 'certification':
        return 'bg-yellow-100 text-yellow-800';
      case 'experience':
        return 'bg-green-100 text-green-800';
      case 'networking':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`border rounded-lg p-4 transition-all ${isCompleted ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(step.id)}
          className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            isCompleted 
              ? 'bg-green-500 border-green-500 text-white' 
              : 'border-gray-300 hover:border-green-400'
          }`}
        >
          {isCompleted && '✓'}
        </button>
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{getStepIcon(step.type)}</span>
                <h4 className={`font-semibold ${isCompleted ? 'text-green-800' : 'text-gray-900'}`}>
                  {step.title}
                </h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(step.type)}`}>
                  {step.type}
                </span>
                {step.required && (
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                    Required
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm mb-2">{step.description}</p>
              <p className="text-xs text-gray-500">Estimated time: {step.estimatedTime}</p>
            </div>
            
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-gray-400 hover:text-gray-600 ml-2"
            >
              <svg className={`w-5 h-5 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {/* Resources (expandable) */}
          {expanded && step.resources && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h5 className="font-medium text-gray-900 mb-3">Resources:</h5>
              <div className="grid gap-3">
                {step.resources.map((resource, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <h6 className="font-medium text-gray-900">{resource.title}</h6>
                      <span className="text-sm text-gray-500">{resource.cost}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-500">
                        {resource.provider} • {resource.duration}
                      </div>
                      {resource.url && (
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          View Resource →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Results Component
const Results = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const careerParam = searchParams.get('career');
  
  // State
  const [loading, setLoading] = useState(true);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [userMatches, setUserMatches] = useState([]);
  const [userTraits, setUserTraits] = useState({});
  const [learningPath, setLearningPath] = useState(null);
  const [realityCheck, setRealityCheck] = useState(null);
  const [skillsBreakdown, setSkillsBreakdown] = useState(null);
  const [userProgress, setUserProgress] = useState([]);
  const [apprenticeships, setApprenticeships] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  // Load user data and career info
  useEffect(() => {
    if (!user) return;
    
    const loadData = async () => {
      try {
        // Get user's assessment results
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

        // Get user profile for selected career and location
        const { data: profileData } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();

        setUserLocation(profileData);

        // Determine which career to show
        let targetCareer = null;
        if (careerParam) {
          targetCareer = assessmentData.career_matches.find(c => c.key === careerParam);
        } else if (profileData?.selected_career) {
          targetCareer = assessmentData.career_matches.find(c => c.key === profileData.selected_career);
        } else {
          targetCareer = assessmentData.career_matches[0]; // Default to top match
        }

        if (!targetCareer) {
          navigate('/dashboard');
          return;
        }

        setSelectedCareer(targetCareer);

        // Load career-specific data files
        await loadCareerData(targetCareer.key);

        // Load user progress for this career
        await loadUserProgress(targetCareer.key);

        // Load apprenticeships if location available
        if (profileData?.state) {
          const apprenticeshipData = await fetchApprenticeships(targetCareer.title, profileData.state);
          setApprenticeships(apprenticeshipData);
        }

      } catch (error) {
        console.error('Error loading results data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user, careerParam, navigate]);

  // Helper function to convert career key to camelCase export name
  const toCamelCase = (str) => {
    return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
  };

  // Load career-specific data files
  const loadCareerData = async (careerKey) => {
    try {
      // Dynamically import the career data files
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

  // Load user's progress for this career
  const loadUserProgress = async (careerKey) => {
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('milestone_type', 'learning_step_completed')
        .order('completed_at', { ascending: false });

      if (error) throw error;

      // Filter for this career's progress
      const careerProgress = data.filter(p => 
        p.milestone_data?.career === careerKey
      );

      setUserProgress(careerProgress);
    } catch (error) {
      console.error('Error loading user progress:', error);
      setUserProgress([]);
    }
  };

  // Toggle learning step completion
  const toggleStepCompletion = async (stepId) => {
    try {
      const existingProgress = userProgress.find(p => 
        p.milestone_data?.step_id === stepId && p.milestone_data?.career === selectedCareer.key
      );

      if (existingProgress) {
        // Remove completion
        await supabase
          .from('user_progress')
          .delete()
          .eq('id', existingProgress.id);

        setUserProgress(prev => prev.filter(p => p.id !== existingProgress.id));
      } else {
        // Add completion
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

  // Calculate progress percentage
  const getProgressPercentage = () => {
    if (!learningPath?.steps) return 0;
    const requiredSteps = learningPath.steps.filter(s => s.required);
    const completedRequired = requiredSteps.filter(s => 
      userProgress.some(p => p.milestone_data?.step_id === s.id)
    );
    return Math.round((completedRequired.length / requiredSteps.length) * 100);
  };

  // Check if step is completed
  const isStepCompleted = (stepId) => {
    return userProgress.some(p => p.milestone_data?.step_id === stepId);
  };

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
            
            {/* Progress indicator */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-700">
                Progress: {getProgressPercentage()}%
              </span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getProgressPercentage()}%` }}
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
              <div className="text-4xl font-bold">{getProgressPercentage()}%</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Skills Analysis */}
            {skillsBreakdown && (
              <SkillsRadarChart 
                userSkills={userTraits}
                requiredSkills={selectedCareer.requiredWeights}
                skillsBreakdown={skillsBreakdown}
              />
            )}

            {/* Learning Path */}
            {learningPath && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Your Learning Path</h3>
                  <div className="text-sm text-gray-500">
                    Estimated Duration: {learningPath.estimatedDuration}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {learningPath.steps.map((step, index) => (
                    <LearningStep
                      key={step.id}
                      step={step}
                      isCompleted={isStepCompleted(step.id)}
                      onToggle={toggleStepCompletion}
                      userProgress={userProgress}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Reality Check */}
            {realityCheck && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Reality Check: What You Need to Know</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Physical Demands */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      💪 Physical Demands
                    </h4>
                    <ul className="space-y-2">
                      {realityCheck.physicalDemands.map((demand, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-orange-500 mt-0.5">•</span>
                          {demand}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Work Conditions */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      🏗️ Work Conditions
                    </h4>
                    <ul className="space-y-2">
                      {realityCheck.workConditions.map((condition, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">•</span>
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mental Challenges */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      🧠 Mental Challenges
                    </h4>
                    <ul className="space-y-2">
                      {realityCheck.mentalChallenges.map((challenge, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-purple-500 mt-0.5">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Time Commitment */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      ⏰ Time Commitment
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div><strong>Apprenticeship:</strong> {realityCheck.timeCommitment.apprenticeship}</div>
                      <div><strong>Weekly Hours:</strong> {realityCheck.timeCommitment.weeklyHours}</div>
                      <div><strong>Continuing Ed:</strong> {realityCheck.timeCommitment.continuingEducation}</div>
                    </div>
                  </div>
                </div>

                {/* Earnings Reality */}
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    💰 Earnings Reality
                  </h4>
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
                      <div className="font-semibold text-gray-900">{realityCheck.earningsReality.masterElectrician}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Business Owner</div>
                      <div className="font-semibold text-gray-900">{realityCheck.earningsReality.businessOwner}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Local Apprenticeships */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Local Opportunities {userLocation?.state && `in ${userLocation.state}`}
              </h3>
              
              {apprenticeships.length > 0 ? (
                <div className="grid gap-4">
                  {apprenticeships.slice(0, 5).map((program, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{program.title || 'Apprenticeship Program'}</h4>
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {program.type || 'Apprenticeship'}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{program.description}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{program.location || userLocation?.city}</span>
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
                    {userLocation?.state 
                      ? `Loading apprenticeships in ${userLocation.state}...`
                      : 'Enable location access to see local apprenticeship opportunities.'
                    }
                  </p>
                  {!userLocation?.location_consent && (
                    <button 
                      onClick={() => {/* TODO: Request location permission */}}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Enable Location Access
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* All Resources & Certifications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Complete Resource Library</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Certifications */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    🏆 Required Certifications
                  </h4>
                  <div className="space-y-3">
                    {selectedCareer.certifications.map((cert, index) => (
                      <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                        <div className="font-medium text-gray-900">{cert}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Required for {selectedCareer.title} licensing
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Growth Path */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    📈 Career Growth Path
                  </h4>
                  <div className="space-y-2">
                    {selectedCareer.growth_path.split('→').map((stage, index, array) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                          index === 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className={`font-medium ${index === 0 ? 'text-green-800' : 'text-gray-700'}`}>
                            {stage.trim()}
                          </div>
                          {index === 0 && (
                            <div className="text-xs text-green-600">← You start here</div>
                          )}
                        </div>
                        {index < array.length - 1 && (
                          <div className="text-gray-400">→</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
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

            {/* Other Career Options */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Other Top Matches</h3>
              <div className="space-y-3">
                {userMatches.slice(0, 3).filter(c => c.key !== selectedCareer.key).map((career, index) => (
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

            {/* Networking Tips */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Networking Actions</h3>
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
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors"
                >
                  Back to Dashboard
                </button>
                <button
                  onClick={() => navigate('/assessment')}
                  className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 py-2 px-4 rounded-lg transition-colors"
                >
                  Retake Assessment
                </button>
                <button
                  onClick={() => {
                    // TODO: Generate PDF report
                    alert('PDF generation coming soon!');
                  }}
                  className="w-full bg-green-100 hover:bg-green-200 text-green-700 py-2 px-4 rounded-lg transition-colors"
                >
                  Download PDF Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;