// src/utils/analytics.js
// Utility functions for tracking custom events in Google Analytics

// Helper function to check if gtag is available
const isGtagAvailable = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (!isGtagAvailable()) {
    console.warn('Google Analytics not loaded yet');
    return;
  }

  window.gtag('event', eventName, {
    event_category: 'WorkShifted',
    ...parameters
  });
};

// Track page views (useful for SPAs when routes change)
export const trackPageView = (pagePath, pageTitle) => {
  if (!isGtagAvailable()) {
    console.warn('Google Analytics not loaded yet');
    return;
  }

  window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
    page_path: pagePath,
    page_title: pageTitle
  });
};

// Specific tracking functions for your WorkShifted app
export const trackAssessmentStart = () => {
  trackEvent('assessment_started', {
    event_category: 'Assessment',
    event_label: 'Skills Assessment'
  });
};

export const trackAssessmentComplete = (careerMatches) => {
  trackEvent('assessment_completed', {
    event_category: 'Assessment',
    event_label: 'Skills Assessment',
    value: careerMatches?.length || 0
  });
};

export const trackCareerExploration = (careerTitle) => {
  trackEvent('career_explored', {
    event_category: 'Career',
    event_label: careerTitle
  });
};

export const trackPremiumUpgrade = (upgradeType = 'results') => {
  trackEvent('premium_upgrade_attempt', {
    event_category: 'Premium',
    event_label: upgradeType,
    value: 29 // $29 price
  });
};

export const trackPremiumSuccess = () => {
  trackEvent('purchase', {
    transaction_id: Date.now().toString(),
    value: 29,
    currency: 'USD',
    items: [{
      item_id: 'premium_learning_path',
      item_name: 'Premium Learning Path',
      category: 'Premium Features',
      quantity: 1,
      price: 29
    }]
  });
};

export const trackCourseClick = (courseName, platform, careerType) => {
  trackEvent('course_click', {
    event_category: 'Course',
    event_label: `${platform} - ${courseName}`,
    custom_parameters: {
      career_type: careerType,
      platform: platform
    }
  });
};

export const trackUserRegistration = (method = 'email') => {
  trackEvent('sign_up', {
    method: method
  });
};

export const trackUserLogin = (method = 'email') => {
  trackEvent('login', {
    method: method
  });
};