// src/components/CourseCard.jsx
import React from 'react';

const CourseCard = ({ course, onClick, compact = false, showSkills = true }) => {
  const getTypeIcon = (type) => {
    const icons = {
      certification: '🏆',
      apprenticeship: '🔧', 
      professional: '💼',
      university: '🎓',
      video: '▶️',
      practical: '🛠️',
      technical: '⚙️'
    };
    return icons[type] || '📚';
  };

  const getTypeColor = (type) => {
    const colors = {
      certification: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      apprenticeship: 'bg-green-100 text-green-800 border-green-200',
      professional: 'bg-blue-100 text-blue-800 border-blue-200', 
      university: 'bg-purple-100 text-purple-800 border-purple-200',
      video: 'bg-red-100 text-red-800 border-red-200',
      practical: 'bg-orange-100 text-orange-800 border-orange-200',
      technical: 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colors[type] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getCostColor = (cost) => {
    if (cost.toLowerCase().includes('free') || cost === '$0') {
      return 'text-green-600 font-semibold';
    }
    if (cost.toLowerCase().includes('paid') || cost.includes('$')) {
      return 'text-blue-600 font-semibold';
    }
    return 'text-gray-600';
  };

  const handleClick = () => {
    onClick?.(course);
  };

  if (compact) {
    return (
      <div 
        onClick={handleClick}
        className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer group"
      >
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
            {course.title}
          </h3>
          <span className="text-lg ml-2 flex-shrink-0">
            {getTypeIcon(course.type)}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span className="truncate">{course.provider}</span>
          <span className={getCostColor(course.cost)}>{course.cost}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{course.duration}</span>
          {course.rating && (
            <div className="flex items-center">
              <span className="text-yellow-400 text-xs">★</span>
              <span className="text-xs text-gray-600 ml-1">{course.rating}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={handleClick}
      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">{getTypeIcon(course.type)}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(course.type)}`}>
              {course.type.charAt(0).toUpperCase() + course.type.slice(1)}
            </span>
          </div>
          
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
            {course.title}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-3 mb-3">
            {course.description}
          </p>
        </div>
      </div>

      {/* Course Details */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-xs text-gray-500 mb-1">Provider</div>
          <div className="font-medium text-gray-900 text-sm truncate">{course.provider}</div>
        </div>
        
        <div>
          <div className="text-xs text-gray-500 mb-1">Duration</div>
          <div className="font-medium text-gray-900 text-sm">{course.duration}</div>
        </div>
        
        <div>
          <div className="text-xs text-gray-500 mb-1">Cost</div>
          <div className={`font-medium text-sm ${getCostColor(course.cost)}`}>
            {course.cost}
          </div>
        </div>
        
        <div>
          <div className="text-xs text-gray-500 mb-1">Rating</div>
          <div className="flex items-center">
            {course.rating ? (
              <>
                <span className="text-yellow-400 text-sm">★</span>
                <span className="font-medium text-gray-900 text-sm ml-1">
                  {course.rating}
                </span>
              </>
            ) : (
              <span className="text-gray-400 text-sm">Not rated</span>
            )}
          </div>
        </div>
      </div>

      {/* Skills Tags */}
      {showSkills && course.skills && course.skills.length > 0 && (
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-2">Skills you'll learn</div>
          <div className="flex flex-wrap gap-2">
            {course.skills.slice(0, 4).map((skill, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-200"
              >
                {skill}
              </span>
            ))}
            {course.skills.length > 4 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-200">
                +{course.skills.length - 4} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Action Button */}
      <div className="pt-4 border-t border-gray-100">
        <button 
          className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 group-hover:from-blue-700 group-hover:to-green-700"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          {course.type === 'video' ? 'Watch Course' : 
           course.type === 'apprenticeship' ? 'View Program' :
           'Start Learning'}
          <span className="ml-2">→</span>
        </button>
      </div>

      {/* Special indicators */}
      {course.cost.toLowerCase().includes('free') && (
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            FREE
          </span>
        </div>
      )}
      
      {course.type === 'certification' && (
        <div className="absolute top-4 right-4">
          <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            CERT
          </span>
        </div>
      )}
    </div>
  );
};

// Course List Component
export const CourseList = ({ 
  courses, 
  onCourseClick, 
  loading = false, 
  compact = false,
  showSkills = true,
  emptyMessage = "No courses found. Try adjusting your filters."
}) => {
  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 animate-pulse">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
              <div className="w-20 h-6 bg-gray-200 rounded"></div>
            </div>
            <div className="w-full h-6 bg-gray-200 rounded mb-2"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-2">
              <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
              <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">📚</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Courses Available</h3>
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  const gridClass = compact 
    ? "grid md:grid-cols-2 lg:grid-cols-4 gap-4"
    : "grid md:grid-cols-2 lg:grid-cols-3 gap-6";

  return (
    <div className={gridClass}>
      {courses.map((course, index) => (
        <CourseCard 
          key={`${course.provider}-${course.title}-${index}`}
          course={course}
          onClick={onCourseClick}
          compact={compact}
          showSkills={showSkills}
        />
      ))}
    </div>
  );
};

export default CourseCard;