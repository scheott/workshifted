// src/components/GoogleAnalytics.jsx
// Simple Google Analytics implementation that works with React 19
import { useEffect } from 'react';

const GoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Don't load if no tracking ID is provided
    if (!GA_MEASUREMENT_ID) {
      console.warn('Google Analytics Measurement ID not found. Make sure VITE_GA_MEASUREMENT_ID is set in your environment variables.');
      return;
    }

    // Check if gtag is already loaded
    if (window.gtag) {
      return;
    }

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    `;
    document.head.appendChild(script2);

    // Cleanup function
    return () => {
      // Remove scripts if component unmounts (though this rarely happens for GA)
      const scripts = document.querySelectorAll(`script[src*="googletagmanager.com"]`);
      scripts.forEach(script => script.remove());
    };
  }, [GA_MEASUREMENT_ID]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;