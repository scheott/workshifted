// src/pages/Assessment.jsx
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { aiAssessmentQuestions } from '../data/aiAssessmentQuestions';
import { computeRiskScore, suggestEvolutionPaths, buildFreeBlurb } from '../data/aiRiskEngine';
import Footer from '../components/Footer';

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasCompletedBefore, setHasCompletedBefore] = useState(false);
  const [checkingHistory, setCheckingHistory] = useState(true);

  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Check if user has completed assessment before
  useEffect(() => {
    const checkAssessmentHistory = async () => {
      if (!user) {
        setCheckingHistory(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('ai_risk_assessments')
          .select('id')
          .eq('user_id', user.id)
          .limit(1);

        if (error) {
          console.error('Error checking assessment history:', error);
        } else {
          setHasCompletedBefore(data && data.length > 0);
        }
      } catch (err) {
        console.error('Error checking assessment history:', err);
      } finally {
        setCheckingHistory(false);
      }
    };

    checkAssessmentHistory();
  }, [user]);

  const totalSteps = aiAssessmentQuestions.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const currentQuestion = aiAssessmentQuestions[currentStep];
  const watchedValues = watch();
  const currentAnswer = watchedValues[`question_${currentQuestion.id}`];

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // FIND this in Assessment.jsx (around line 75-120):
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Transform form data by removing "question_" prefix
      const transformedData = {};
      Object.keys(data).forEach(key => {
        const cleanKey = key.replace(/^question_/, '');
        transformedData[cleanKey] = data[key];
      });

      console.log('🔍 Original form data:', data);
      console.log('🔍 Transformed data:', transformedData);

      // 1) Compute AI risk and evolution paths with transformed data
      const riskResult = computeRiskScore(transformedData);
      const evolutionPaths = suggestEvolutionPaths(transformedData, riskResult);
      const freeBlurb = buildFreeBlurb(transformedData, riskResult);

      console.log('🔍 Computed risk result:', riskResult);
      console.log('🔍 Evolution paths:', evolutionPaths);
      console.log('🔍 Free blurb:', freeBlurb);

      // 2) Handle authenticated vs anonymous users
      if (user) {
        // AUTHENTICATED USER - Save to database and go to dashboard
        const insertData = {
          user_id: user.id,
          answers: data, // Store original form data with question_ prefix
          risk_result: riskResult,
          evolution_paths: evolutionPaths,
          free_blurb: freeBlurb,
        };
        
        console.log('🔍 About to insert:', insertData);

        const { error } = await supabase
          .from('ai_risk_assessments')
          .insert([insertData]);

        if (error) throw error;

        // Navigate to dashboard
        navigate('/dashboard', { 
          state: { 
            riskResult,
            evolutionPaths,
            freeBlurb,
            answers: transformedData,
            fromAssessment: true 
          } 
        });
      } else {
        // ANONYMOUS USER - Store temporarily and show teaser
        localStorage.setItem('tempAssessmentData', JSON.stringify(transformedData));
        navigate('/assessment-signup');
      }
    } catch (error) {
      console.error('Error saving assessment:', error);
      alert('There was an error saving your responses. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (checkingHistory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-lg text-gray-700">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AI Career Risk Assessment
          </h1>
          <p className="text-gray-600">
            Understand your role's AI exposure and discover your next career move
          </p>
          
          {/* Progress bar */}
          <div className="mt-6 bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-600 to-green-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Question {currentStep + 1} of {totalSteps}
          </p>
        </div>

        {/* Assessment Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Question */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {currentQuestion.question}
              </h2>
              
              {/* Helper text */}
              {currentQuestion.helper && (
                <p className="text-sm text-gray-600 mb-4">
                  {currentQuestion.helper}
                </p>
              )}
              
              {/* Question Input */}
              <div className="space-y-3">
                {currentQuestion.type === 'single-choice' && currentQuestion.options && (
                  <>
                    {currentQuestion.options.map((option) => (
                      <label 
                        key={option.value} 
                        className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <input
                          type="radio"
                          value={option.value}
                          {...register(`question_${currentQuestion.id}`, { 
                            required: currentQuestion.required 
                          })}
                          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <div className="flex-1">
                          <span className="text-gray-900 font-medium">
                            {option.label}
                          </span>
                        </div>
                      </label>
                    ))}
                  </>
                )}

                {currentQuestion.type === 'likert5' && (
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <label 
                        key={value}
                        className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <input
                          type="radio"
                          value={value}
                          {...register(`question_${currentQuestion.id}`, { 
                            required: currentQuestion.required 
                          })}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <div className="flex-1 flex justify-between items-center">
                          <span className="text-gray-900">
                            {currentQuestion.anchors ? currentQuestion.anchors[value - 1] : `Option ${value}`}
                          </span>
                          <span className="text-sm text-gray-500">
                            {value}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                )}

                {currentQuestion.type === 'slider' && (
                  <div className="space-y-4">
                    <div className="px-4">
                      <input
                        type="range"
                        min={currentQuestion.min || 0}
                        max={currentQuestion.max || 100}
                        step={currentQuestion.step || 1}
                        {...register(`question_${currentQuestion.id}`, { 
                          required: currentQuestion.required 
                        })}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>{currentQuestion.leftLabel || currentQuestion.min || 0}</span>
                        <span className="font-medium">
                          {currentAnswer || currentQuestion.min || 0}
                          {currentQuestion.max === 100 ? '%' : ''}
                        </span>
                        <span>{currentQuestion.rightLabel || currentQuestion.max || 100}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Error message */}
              {errors[`question_${currentQuestion.id}`] && (
                <p className="text-red-600 text-sm mt-2">
                  This question is required.
                </p>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>

            {currentStep < totalSteps - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!currentAnswer}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  !currentAnswer
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={!currentAnswer || isSubmitting}
                className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                  !currentAnswer || isSubmitting
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-lg'
                }`}
              >
                {isSubmitting ? 'Calculating Your Results...' : 'Get My Results'}
              </button>
            )}
          </div>

          {/* Retake Notice - ALTERNATIVE VERSION WITH PROMINENT BACK BUTTON */}
          {hasCompletedBefore && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
              <div className="text-center">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> You've taken this assessment before. Your new results will replace your previous assessment.
                </p>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  className="bg-white text-blue-600 border border-blue-300 px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Dashboard
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default Assessment;