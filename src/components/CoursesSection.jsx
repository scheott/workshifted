// src/components/CoursesSection.jsx
import React, { useState } from 'react';
import { useCourses } from '../hooks/useCourses';
import { CourseList } from './CourseCard';

const CoursesSection = ({ 
  careerTitle, 
  careerKey, 
  isPremium = false, 
  showFilters = true,
  compact = false,
  maxCourses = null 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllCourses, setShowAllCourses] = useState(false);
  
  const {
    courses,
    allCourses,
    loading,
    error,
    filters,
    updateFilter,
    handleCourseClick,
    searchCourses,
    resetFilters,
    stats,
    recommended
  } = useCourses(careerTitle, careerKey);

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    searchCourses(query);
  };

  // Get courses to display based on premium status and limits
  const getDisplayCourses = () => {
    let displayCourses = courses;
    
    if (!isPremium) {
      // Free users get limited courses
      displayCourses = courses.slice(0, 3);
    } else if (maxCourses && !showAllCourses) {
      displayCourses = courses.slice(0, maxCourses);
    }
    
    return displayCourses;
  };

  const displayCourses = getDisplayCourses();
  const hasMore = courses.length > displayCourses.length;

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
        <div className="text-red-600 text-4xl mb-2">⚠️</div>
        <h3 className="font-semibold text-red-900 mb-1">Failed to Load Courses</h3>
        <p className="text-red-700 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {careerTitle ? `${careerTitle} Courses` : 'Training Courses'}
          </h2>
          <p className="text-gray-600 mt-1">
            {loading ? 'Loading courses...' : 
             isPremium ? `${stats.total} courses available` :
             `${stats.free} free courses • Upgrade for ${stats.total - stats.free} more`}
          </p>
        </div>

        {/* Search */}
        {showFilters && !loading && allCourses.length > 0 && (
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Filters */}
      {showFilters && !loading && allCourses.length > 0 && (
        <div className="flex flex-wrap items-center gap-3 p-4 bg-gray-50 rounded-xl">
          <span className="text-sm font-medium text-gray-700">Filter by:</span>
          
          {/* Type Filter */}
          <select 
            value={filters.type}
            onChange={(e) => updateFilter('type', e.target.value)}
            className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Types</option>
            <option value="certification">Certifications ({stats.byType.certification || 0})</option>
            <option value="apprenticeship">Apprenticeships ({stats.byType.apprenticeship || 0})</option>
            <option value="professional">Professional ({stats.byType.professional || 0})</option>
            <option value="university">University ({stats.byType.university || 0})</option>
            <option value="video">Videos ({stats.byType.video || 0})</option>
            <option value="practical">Practical ({stats.byType.practical || 0})</option>
          </select>

          {/* Cost Filter */}
          <select 
            value={filters.cost}
            onChange={(e) => updateFilter('cost', e.target.value)}
            className="px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Costs</option>
            <option value="free">Free Only ({stats.free})</option>
            <option value="paid">Paid Only ({stats.paid})</option>
          </select>

          {/* Reset Filters */}
          {(filters.type !== 'all' || filters.cost !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                resetFilters();
                setSearchQuery('');
                handleSearch('');
              }}
              className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
            >
              Clear filters
            </button>
          )}

          {/* Course count */}
          <div className="ml-auto text-sm text-gray-500">
            {displayCourses.length} of {courses.length} courses shown
          </div>
        </div>
      )}

      {/* Premium Upgrade Notice */}
      {!isPremium && !loading && allCourses.length > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-dashed border-blue-200 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                🔒 Unlock {stats.total - 3} More Courses
              </h3>
              <p className="text-gray-600 text-sm">
                Get access to premium courses, certifications, and personalized recommendations.
              </p>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Upgrade - $29
            </button>
          </div>
        </div>
      )}

      {/* Course List */}
      <CourseList 
        courses={displayCourses}
        onCourseClick={handleCourseClick}
        loading={loading}
        compact={compact}
        showSkills={isPremium}
        emptyMessage={searchQuery ? 
          `No courses found for "${searchQuery}". Try different keywords.` : 
          "No courses available for this career yet."
        }
      />

      {/* Load More Button */}
      {hasMore && isPremium && (
        <div className="text-center">
          <button
            onClick={() => setShowAllCourses(!showAllCourses)}
            className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            {showAllCourses ? 'Show Less' : `Show ${courses.length - displayCourses.length} More Courses`}
          </button>
        </div>
      )}

      {/* Course Stats for Premium Users */}
      {isPremium && !loading && allCourses.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Course Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.free}</div>
              <div className="text-sm text-gray-600">Free Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{stats.byType.certification || 0}</div>
              <div className="text-sm text-gray-600">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.byType.apprenticeship || 0}</div>
              <div className="text-sm text-gray-600">Apprenticeships</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{stats.byType.video || 0}</div>
              <div className="text-sm text-gray-600">Video Tutorials</div>
            </div>
          </div>
        </div>
      )}

      {/* Recommended Section for Premium */}
      {isPremium && recommended.length > 0 && (
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-4">✨ Recommended for You</h3>
          <CourseList 
            courses={recommended}
            onCourseClick={handleCourseClick}
            compact={true}
            showSkills={false}
          />
        </div>
      )}
    </div>
  );
};

export default CoursesSection;