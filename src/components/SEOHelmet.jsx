// src/components/SEOHelmet.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHelmet = ({ 
  title, 
  description, 
  canonical,
  noindex = false,
  ogImage = "/og-default.png",
  ogType = "website"
}) => {
  const location = useLocation();
  
  useEffect(() => {
    // Set title
    document.title = title || "WorkShifted - AI Career Evolution | Don't Get Replaced, Get AI-Augmented";
    
    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || "Don't let AI replace you - learn to lead it. Get your personalized AI-resistance roadmap and become irreplaceable in your career with WorkShifted's AI evolution assessment.";
    
    // Set canonical URL - CRITICAL for fixing duplicate content
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    const baseUrl = 'https://workshifted.com'; // Replace with your actual domain
    const cleanPath = location.pathname.replace(/\/$/, '') || '';
    canonicalLink.href = canonical || `${baseUrl}${cleanPath}`;
    
    // Set robots meta for noindex pages
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = noindex ? 'noindex, nofollow' : 'index, follow';
    
    // Open Graph tags
    const setOGTag = (property, content) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = content;
    };
    
    setOGTag('og:title', title || document.title);
    setOGTag('og:description', description || metaDescription.content);
    setOGTag('og:url', canonicalLink.href);
    setOGTag('og:type', ogType);
    setOGTag('og:image', `${baseUrl}${ogImage}`);
    
    // Twitter Card tags
    const setTwitterTag = (name, content) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.name = name;
        document.head.appendChild(twitterTag);
      }
      twitterTag.content = content;
    };
    
    setTwitterTag('twitter:card', 'summary_large_image');
    setTwitterTag('twitter:title', title || document.title);
    setTwitterTag('twitter:description', description || metaDescription.content);
    setTwitterTag('twitter:image', `${baseUrl}${ogImage}`);
    
  }, [title, description, canonical, noindex, location.pathname, ogImage, ogType]);
  
  return null; // This component doesn't render anything
};

export default SEOHelmet;