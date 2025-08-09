// src/hooks/useCourses.js
import { useState, useEffect, useCallback } from 'react';
import { fetchCoursesForCareer, filterCoursesByType, filterCoursesByCost } from '../lib/courses';
import { useActivityTracker } from './useActivityTracker';

export const useCourses = (careerTitle, careerKey = null) => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    type: 'all', // all, certification, professional, university, video, practical
    cost: 'all', // all, free, paid
  });

  const { trackCourseClick } = useActivityTracker();

  // Fetch courses when career changes
  useEffect(() => {
    if (!careerTitle) return;

    const loadCourses = async () => {
      setLoading(true);
      setError(null);

      try {
        const courseData = await fetchCoursesForCareer(careerTitle, careerKey);
        setCourses(courseData);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to load courses. Please try again.');
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, [careerTitle, careerKey]);

  // Apply filters when courses or filters change
  useEffect(() => {
    let result = courses;

    // Apply type filter
    if (filters.type !== 'all') {
      result = filterCoursesByType(result, filters.type);
    }

    // Apply cost filter  
    if (filters.cost !== 'all') {
      result = filterCoursesByCost(result, filters.cost);
    }

    setFilteredCourses(result);
  }, [courses, filters]);

  // Update filters
  const updateFilter = useCallback((filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  }, []);

  // Track course interaction
  const handleCourseClick = useCallback((course) => {
    trackCourseClick(course.title, course.provider, course.url);
    
    // Open course in new tab
    window.open(course.url, '_blank', 'noopener,noreferrer');
  }, [trackCourseClick]);

  // Get course statistics
  const getStats = useCallback(() => {
    const stats = {
      total: courses.length,
      free: filterCoursesByCost(courses, 'free').length,
      paid: filterCoursesByCost(courses, 'paid').length,
      byType: {}
    };

    // Count by type
    const types = ['certification', 'professional', 'university', 'video', 'practical', 'apprenticeship'];
    types.forEach(type => {
      stats.byType[type] = filterCoursesByType(courses, type).length;
    });

    return stats;
  }, [courses]);

  // Get recommended courses (top-rated, free first)
  const getRecommended = useCallback((limit = 4) => {
    const freeCourses = filterCoursesByCost(courses, 'free');
    const paidCourses = filterCoursesByCost(courses, 'paid');
    
    // Prioritize free courses, then by rating
    const sorted = [
      ...freeCourses.sort((a, b) => (b.rating || 0) - (a.rating || 0)),
      ...paidCourses.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    ];

    return sorted.slice(0, limit);
  }, [courses]);

  // Search courses
  const searchCourses = useCallback((query) => {
    if (!query.trim()) {
      setFilteredCourses(courses);
      return;
    }

    const searchTerm = query.toLowerCase();
    const results = courses.filter(course => 
      course.title.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm) ||
      course.provider.toLowerCase().includes(searchTerm) ||
      course.skills.some(skill => skill.toLowerCase().includes(searchTerm))
    );

    setFilteredCourses(results);
  }, [courses]);

  // Reset filters
  const resetFilters = useCallback(() => {
    setFilters({
      type: 'all',
      cost: 'all'
    });
  }, []);

  return {
    // Data
    courses: filteredCourses,
    allCourses: courses,
    loading,
    error,
    filters,
    
    // Actions
    updateFilter,
    handleCourseClick,
    searchCourses,
    resetFilters,
    
    // Computed
    stats: getStats(),
    recommended: getRecommended(),
    
    // Utils
    isEmpty: courses.length === 0,
    hasFiltered: filteredCourses.length !== courses.length
  };
};