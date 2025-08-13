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

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // 1) Compute AI risk and evolution paths
      const riskResult = computeRiskScore(data);
      const evolutionPaths = suggestEvolutionPaths(data, riskResult);
      const freeBlurb = buildFreeBlurb(data, riskResult);

      // 2) Insert into Supabase
      const { error } = await supabase
        .from('ai_risk_assessments')
        .insert([
          {
            user_id: user.id,
            answers: data,
            risk_result: riskResult,
            evolution_paths: evolutionPaths,
            free_blurb: freeBlurb,
          },
        ]);

      if (error) throw error;

      // 3) Navigate to results page
      navigate('/results', { 
        state: { 
          riskResult,
          evolutionPaths,
          freeBlurb,
          answers: data,
          fromAssessment: true 
        } 
      });
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

                {currentQuestion.type === 'likert5' && currentQuestion.anchors && (
                  <>
                    {currentQuestion.anchors.map((anchor, index) => (
                      <label 
                        key={index + 1} 
                        className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <input
                          type="radio"
                          value={index + 1}
                          {...register(`question_${currentQuestion.id}`, { 
                            required: currentQuestion.required 
                          })}
                          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <div className="flex-1">
                          <span className="text-gray-900 font-medium">
                            {anchor}
                          </span>
                        </div>
                      </label>
                    ))}
                  </>
                )}

                {currentQuestion.type === 'slider' && (
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{currentQuestion.leftLabel}</span>
                      <span>{currentQuestion.rightLabel}</span>
                    </div>
                    <input
                      type="range"
                      min={currentQuestion.min}
                      max={currentQuestion.max}
                      step={currentQuestion.step}
                      {...register(`question_${currentQuestion.id}`, { 
                        required: currentQuestion.required 
                      })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="text-center">
                      <span className="text-lg font-medium text-blue-600">
                        {watchedValues[`question_${currentQuestion.id}`] || currentQuestion.min}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Helper text */}
              {currentQuestion.helper && (
                <p className="text-sm text-gray-500 mt-3">
                  {currentQuestion.helper}
                </p>
              )}

              {/* Error message */}
              {errors[`question_${currentQuestion.id}`] && (
                <p className="text-red-500 text-sm mt-2">
                  Please select an option to continue.
                </p>
              )}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>

              {currentStep === totalSteps - 1 ? (
                <button
                  type="submit"
                  disabled={!currentAnswer || isSubmitting}
                  className={`px-8 py-2 rounded-lg font-medium transition-all duration-200 ${
                    !currentAnswer || isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-lg transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Analyzing Your AI Risk...
                    </div>
                  ) : (
                    'Get My AI Risk Report'
                  )}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!currentAnswer}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    !currentAnswer
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Retake notice */}
        {hasCompletedBefore && (
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Retaking Assessment
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>You've completed this assessment before. Your new results will replace your previous ones.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="h-16" />
      <Footer />
    </div>
  );
};

export default Assessment;