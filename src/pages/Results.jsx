// src/pages/Results.jsx - Fixed to use working CheckoutModal instead of broken SubscriptionGate
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { fetchApprenticeships } from '../lib/apprenticeships';
import CheckoutModal from '../components/CheckoutModal';

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

// Learning Path Step Component
const LearningStep = ({ step, isCompleted, onToggle, isPremium }) => {
  const [expanded, setExpanded] = useState(false);
  
  const getStepIcon = (type) => {
    switch (type) {
      case 'education': return '📚';
      case 'certification': return '🏆';
      case 'experience': return '🔧';
      case 'networking': return '🤝';
      default: return '📋';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'education': return 'bg-blue-100 text-blue-800';
      case 'certification': return 'bg-yellow-100 text-yellow-800';
      case 'experience': return 'bg-green-100 text-green-800';
      case 'networking': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`border rounded-lg p-4 transition-all ${isCompleted ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
      <div className="flex items-start gap-4">
        <button
          onClick={() => isPremium && onToggle(step.id)}
          disabled={!isPremium}
          className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            isCompleted ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-green-400'
          } ${!isPremium ? 'opacity-50 cursor-not-allowed' : ''}`}
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

  const getProgressPercentage = () => {
    if (!learningPath?.steps || !isPremium) return 0;
    const requiredSteps = learningPath.steps.filter(s => s.required);
    const completedRequired = requiredSteps.filter(s => 
      userProgress.some(p => p.milestone_data?.step_id === s.id)
    );
    return Math.round((completedRequired.length / requiredSteps.length) * 100);
  };

  const isStepCompleted = (stepId) => {
    return userProgress.some(p => p.milestone_data?.step_id === stepId);
  };

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
            {isPremium ? (
              learningPath && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Your Learning Roadmap</h3>
                    <div className="text-sm text-gray-500">
                      Estimated Duration: {learningPath.estimatedDuration}
                    </div>
                  </div>
                  <div className="space-y-4">
                    {learningPath.steps.map((step) => (
                      <LearningStep
                        key={step.id}
                        step={step}
                        isCompleted={isStepCompleted(step.id)}
                        onToggle={toggleStepCompletion}
                        isPremium={isPremium}
                      />
                    ))}
                  </div>
                </div>
              )
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Learning Roadmap</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Get step-by-step guidance tailored for {selectedCareer.title} with progress tracking.
                    </p>
                    <button 
                      onClick={handleUpgrade}
                      className="text-blue-600 text-sm font-medium hover:text-blue-800 cursor-pointer"
                    >
                      Unlock Complete Roadmap →
                    </button>
                  </div>
                </div>
              </div>
            )}

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

            {/* Certification Requirements - FREE */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Certification Requirements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">📜 Required Certifications</h4>
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
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">📈 Career Progression</h4>
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
                          {index === 0 && <div className="text-xs text-green-600">← You start here</div>}
                        </div>
                        {index < array.length - 1 && <div className="text-gray-400">→</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default Results;