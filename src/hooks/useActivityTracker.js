// src/hooks/useActivityTracker.js
import { useCallback } from 'react';
import { useAuth } from './useAuth';
import { supabase } from '../lib/supabase';

export const useActivityTracker = () => {
  const { user } = useAuth();

  const trackActivity = useCallback(async (activityType, activityData = {}) => {
    if (!user) return;

    try {
      await supabase.rpc('log_user_activity', {
        p_user_id: user.id,
        p_activity_type: activityType,
        p_activity_data: activityData
      });
    } catch (error) {
      console.error('Error tracking activity:', error);
      // Don't throw - activity tracking shouldn't break the app
    }
  }, [user]);

  const trackProgress = useCallback(async (milestoneType, milestoneData = {}) => {
    if (!user) return;

    try {
      await supabase.rpc('update_user_progress', {
        p_user_id: user.id,
        p_milestone_type: milestoneType,
        p_milestone_data: milestoneData
      });
    } catch (error) {
      console.error('Error tracking progress:', error);
    }
  }, [user]);

  // Specific tracking functions for common activities
  const trackCareerView = useCallback((careerTitle, careerData) => {
    trackActivity('career_view', {
      career_title: careerTitle,
      ...careerData
    });
  }, [trackActivity]);

  const trackCourseClick = useCallback((courseTitle, platform, courseUrl) => {
    trackActivity('course_click', {
      course_title: courseTitle,
      platform,
      course_url: courseUrl,
      timestamp: new Date().toISOString()
    });
  }, [trackActivity]);

  const trackApprenticeshipView = useCallback((programName, company, location) => {
    trackActivity('apprenticeship_view', {
      program_name: programName,
      company,
      location,
      timestamp: new Date().toISOString()
    });
  }, [trackActivity]);

  const trackAssessmentCompletion = useCallback((assessmentResults) => {
    trackProgress('assessment_completed', {
      results: assessmentResults,
      completed_at: new Date().toISOString()
    });
  }, [trackProgress]);

  const trackLocationPermission = useCallback((granted, location = null) => {
    trackActivity('location_permission', {
      granted,
      location,
      timestamp: new Date().toISOString()
    });
  }, [trackActivity]);

  return {
    trackActivity,
    trackProgress,
    trackCareerView,
    trackCourseClick,
    trackApprenticeshipView,
    trackAssessmentCompletion,
    trackLocationPermission
  };
};