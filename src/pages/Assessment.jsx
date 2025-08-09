// src/pages/Assessment.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { assessmentQuestions, calculateCareerMatches, computeUserWeights } from '../data/assessmentQuestions';
import Footer from '../components/Footer';


const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const totalSteps = assessmentQuestions.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const currentQuestion = assessmentQuestions[currentStep];
  const watchedValues = watch();
  const currentAnswer = watchedValues[`question_${currentQuestion.id}`];

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // 1) Compute results
      const userWeights = computeUserWeights(data);
      const matches = calculateCareerMatches(data);
      const topMatches = matches.slice(0, 3);

      // 2) Insert into Supabase
      const { error } = await supabase
        .from('assessment_results')
        .insert([
          {
            user_id: user.id,
            answers: data,
            career_matches: topMatches,
            user_traits: userWeights,
          },
        ]);

      if (error) throw error;

      // 3) Navigate to dashboard with assessment results for career selection
      // FIXED: Changed from /results to /dashboard with state
      navigate('/dashboard', { 
        state: { 
          topMatches, 
          userWeights,
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

  const handleNext = () => {
    if (currentStep < totalSteps - 1) setCurrentStep((s) => s + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-blue-600">WorkShifted</div>
            <div className="text-sm text-gray-500">
              Question {currentStep + 1} of {totalSteps}
            </div>
          </div>
        </div>
      </header>

      {/* Progress */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-gray-200 rounded-full h-3 mb-8">
          <div
            className="bg-gradient-to-r from-blue-600 to-green-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {currentQuestion.question}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                    currentAnswer === option.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    value={option.value}
                    {...register(`question_${currentQuestion.id}`, {
                      required: 'Please select an answer',
                    })}
                    className="mt-1 mr-4 text-blue-600 focus:ring-blue-500"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{option.label}</div>
                  </div>
                </label>
              ))}
            </div>

            {errors[`question_${currentQuestion.id}`] && (
              <p className="mt-4 text-red-600 text-sm">
                {errors[`question_${currentQuestion.id}`].message}
              </p>
            )}

            {/* Nav buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
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
                      Analyzing...
                    </div>
                  ) : (
                    'Get My Results'
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
      </div>

      <div className="h-16" />
      {/* Footer at bottom */}
      <Footer />
    </div>
  );
};

export default Assessment;