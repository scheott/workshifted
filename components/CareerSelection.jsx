// src/components/CareerSelection.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';

const CareerSelection = ({ topMatches, onCareerSelected }) => {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [saving, setSaving] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleCareerSelect = (career) => {
    setSelectedCareer(career);
    setShowConfirmation(true);
  };

  const confirmSelection = async () => {
    if (!selectedCareer || !user) return;

    setSaving(true);
    try {
      // Update user profile with selected career
      const { error } = await supabase
        .from('user_profiles')
        .update({
          selected_career: selectedCareer.key || selectedCareer.title.toLowerCase().replace(/\s+/g, '_'),
          selected_career_data: {
            title: selectedCareer.title,
            match_percentage: selectedCareer.matchPercentage,
            salary: selectedCareer.salary,
            timeline: selectedCareer.timeline,
            description: selectedCareer.description,
            selected_at: new Date().toISOString()
          },
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id);

      if (error) throw error;

      // Track the selection activity
      await supabase
        .from('user_activity_log')
        .insert({
          user_id: user.id,
          activity_type: 'career_selected',
          activity_data: {
            career_title: selectedCareer.title,
            match_percentage: selectedCareer.matchPercentage,
            selection_date: new Date().toISOString()
          }
        });

      // Call the callback if provided
      onCareerSelected?.(selectedCareer);
      
      // Navigate to dashboard
      navigate('/dashboard', { replace: true });

    } catch (error) {
      console.error('Error saving career selection:', error);
      alert('Failed to save your selection. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const cancelSelection = () => {
    setSelectedCareer(null);
    setShowConfirmation(false);
  };

  // Get skill highlights for a career
  const getSkillHighlights = (career) => {
    // Extract top skills from career data or generate based on career type
    const skillMap = {
      'Electrician': ['Problem Solving', 'Technical Skills', 'Safety Awareness', 'Detail Oriented'],
      'Plumber': ['Hands-on Work', 'Problem Solving', 'Physical Stamina', 'Customer Service'],
      'HVAC Technician': ['Technical Skills', 'Analytical Thinking', 'Problem Solving', 'Customer Service'],
      'Construction Project Manager': ['Leadership', 'Organization', 'Communication', 'Planning'],
      'Solar Panel Installer': ['Technical Skills', 'Physical Work', 'Environmental Focus', 'Safety'],
      'Carpenter': ['Hands-on Work', 'Creativity', 'Precision', 'Problem Solving'],
      'Welder': ['Precision', 'Technical Skills', 'Safety Awareness', 'Independence'],
      'Automotive Technician': ['Problem Solving', 'Technical Skills', 'Detail Oriented', 'Mechanical Aptitude']
    };
    
    return skillMap[career.title] || ['Problem Solving', 'Technical Skills', 'Adaptability', 'Work Ethic'];
  };

  const getDailyTasks = (career) => {
    const taskMap = {
      'Electrician': [
        'Install and repair electrical wiring systems',
        'Troubleshoot electrical problems using testing equipment',
        'Read blueprints and technical diagrams',
        'Ensure compliance with electrical codes and safety standards'
      ],
      'Plumber': [
        'Install and repair pipes, fixtures, and fittings',
        'Diagnose plumbing problems and blockages',
        'Use specialized tools like pipe cutters and drain snakes',
        'Explain repairs and costs to customers'
      ],
      'HVAC Technician': [
        'Install, maintain, and repair heating and cooling systems',
        'Diagnose system problems using diagnostic equipment',
        'Replace filters, belts, and other components',
        'Explain system operation to customers'
      ],
      'Construction Project Manager': [
        'Coordinate schedules and resources across multiple trades',
        'Review blueprints and ensure quality standards',
        'Manage budgets and track project costs',
        'Communicate with clients, contractors, and suppliers'
      ],
      'Solar Panel Installer': [
        'Mount solar panels on rooftops and ground structures',
        'Connect electrical components and wiring',
        'Test system performance and safety',
        'Work at heights with safety equipment'
      ]
    };
    
    return taskMap[career.title] || [
      'Perform hands-on technical work',
      'Solve problems using specialized tools',
      'Follow safety procedures and protocols',
      'Interact with customers and team members'
    ];
  };

  if (showConfirmation && selectedCareer) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Confirm Your Career Path</h2>
            <p className="text-gray-600">You've chosen to focus on becoming a:</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedCareer.title}</h3>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
                <span>💰 {selectedCareer.salary}</span>
                <span>⏱️ {selectedCareer.timeline}</span>
                <span>🎯 {selectedCareer.matchPercentage}% match</span>
              </div>
              <p className="text-gray-700">{selectedCareer.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Your Matching Skills</h4>
              <div className="space-y-2">
                {getSkillHighlights(selectedCareer).map((skill, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">What You'll Do Daily</h4>
              <div className="space-y-2">
                {getDailyTasks(selectedCareer).slice(0, 4).map((task, index) => (
                  <div key={index} className="flex items-start text-sm">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h5 className="font-medium text-yellow-800 mb-1">Good to know</h5>
                <p className="text-sm text-yellow-700">
                  Don't worry - you can always change your focus later. This just helps us personalize your learning path and dashboard.
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={cancelSelection}
              disabled={saving}
              className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              Go Back
            </button>
            <button
              onClick={confirmSelection}
              disabled={saving}
              className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:transform-none"
            >
              {saving ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </div>
              ) : (
                'Start My Journey'
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Career Focus</h1>
            <p className="text-gray-600">
              Pick one of your top matches to get a personalized learning path and focused dashboard
            </p>
          </div>
        </div>
      </header>

      {/* Career Options */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {topMatches.slice(0, 3).map((career, index) => (
            <div 
              key={career.key || career.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => handleCareerSelect(career)}
            >
              {/* Match Badge */}
              <div className="relative">
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                    {career.matchPercentage}% Match
                  </div>
                </div>
                {index === 0 && (
                  <div className="absolute -top-3 -left-3 z-10">
                    <div className="bg-yellow-500 text-white px-3 py-1 rounded-full font-semibold text-xs">
                      🏆 TOP MATCH
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8">
                {/* Career Title */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{career.title}</h2>
                  <p className="text-gray-600 text-sm">{career.description}</p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-500 mb-1">Salary Range</div>
                    <div className="font-semibold text-blue-900">{career.salary}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-500 mb-1">Time to Start</div>
                    <div className="font-semibold text-green-900">{career.timeline}</div>
                  </div>
                </div>

                {/* Skills Preview */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Your Matching Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {getSkillHighlights(career).slice(0, 3).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* What You'll Do */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Daily Tasks Include</h4>
                  <ul className="space-y-1">
                    {getDailyTasks(career).slice(0, 2).map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button 
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCareerSelect(career);
                  }}
                >
                  Choose This Path →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help Deciding?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-blue-600 font-semibold mb-2">💰 Consider Salary</div>
                <p className="text-gray-600">Look at earning potential and growth opportunities in your area.</p>
              </div>
              <div>
                <div className="text-green-600 font-semibold mb-2">⏱️ Time Investment</div>
                <p className="text-gray-600">Consider how quickly you want to start working in your new career.</p>
              </div>
              <div>
                <div className="text-purple-600 font-semibold mb-2">❤️ Personal Interest</div>
                <p className="text-gray-600">Choose what excites you most - passion drives success!</p>
              </div>
            </div>
            <div className="mt-6">
              <button 
                onClick={() => navigate('/results')}
                className="text-blue-600 hover:text-blue-800 underline text-sm"
              >
                ← View Full Results Again
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerSelection;