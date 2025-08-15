// src/pages/AITools.jsx - Premium AI Tools Database
import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Filter, ExternalLink, Star, StarOff, Zap, Clock, 
  TrendingUp, Database, Grid, List, ChevronDown, X, 
  MessageSquare, Code, BarChart3, Briefcase, Users, Palette, 
  Shield, Cog, Brain, FileText, Video, Headphones, ArrowLeft
} from 'lucide-react';
import AITOOLS_DB, { getToolsByRole, getToolsByCategory, getBeginnerTools } from '../data/premiumContent/aiToolsDatabase';

const AITools = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // State management
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [favoriteTools, setFavoriteTools] = useState(new Set());
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('name'); // 'name', 'difficulty', 'category'

  // No redirect needed - handled by PrivateRoute and QuickActions

  // Convert database to array with keys
  const allTools = useMemo(() => {
    return Object.entries(AITOOLS_DB).map(([key, tool]) => ({
      key,
      ...tool
    }));
  }, []);

  // Get unique values for filters
  const roles = useMemo(() => {
    const roleSet = new Set();
    allTools.forEach(tool => {
      Object.keys(tool.useCase).forEach(role => {
        if (role !== 'default') roleSet.add(role);
      });
    });
    return ['all', ...Array.from(roleSet).sort()];
  }, [allTools]);

  const categories = useMemo(() => {
    const categorySet = new Set();
    allTools.forEach(tool => categorySet.add(tool.category));
    return ['all', ...Array.from(categorySet).sort()];
  }, [allTools]);

  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  // Filter and sort tools
  const filteredTools = useMemo(() => {
    let filtered = allTools.filter(tool => {
      const matchesSearch = searchTerm === '' || 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesRole = selectedRole === 'all' || tool.useCase[selectedRole];
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'all' || tool.difficulty === selectedDifficulty;

      return matchesSearch && matchesRole && matchesCategory && matchesDifficulty;
    });

    // Sort tools
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'difficulty':
          const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
          return (difficultyOrder[a.difficulty] || 0) - (difficultyOrder[b.difficulty] || 0);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [allTools, searchTerm, selectedRole, selectedCategory, selectedDifficulty, sortBy]);

  // Utility functions
  const toggleFavorite = (toolKey) => {
    const newFavorites = new Set(favoriteTools);
    if (newFavorites.has(toolKey)) {
      newFavorites.delete(toolKey);
    } else {
      newFavorites.add(toolKey);
    }
    setFavoriteTools(newFavorites);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTimeToValueIcon = (timeToValue) => {
    if (timeToValue === 'Immediate') return <Zap className="w-3 h-3 text-green-500" />;
    if (timeToValue?.includes('days')) return <TrendingUp className="w-3 h-3 text-blue-500" />;
    return <Clock className="w-3 h-3 text-gray-500" />;
  };

  const getCategoryIcon = (category) => {
    const iconMap = {
      'AI Assistant': Brain,
      'Developer Tools': Code,
      'Data Visualization': BarChart3,
      'Productivity': Briefcase,
      'Sales': Users,
      'Design': Palette,
      'Security': Shield,
      'DevOps': Cog,
      'Research': FileText,
      'Video': Video,
      'Audio': Headphones
    };
    const IconComponent = iconMap[category] || Database;
    return <IconComponent className="w-5 h-5" />;
  };

  const clearFilters = () => {
    setSelectedRole('all');
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setSearchTerm('');
  };

  const getRoleSpecificUseCase = (tool, role) => {
    if (role === 'all') return tool.purpose;
    return tool.useCase[role] || tool.useCase.default || tool.purpose;
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Dashboard</span>
            </button>
            <div className="text-sm text-gray-500">
              Premium Feature
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">AI Tools Database</h1>
                <p className="text-gray-600 mt-1">
                  {filteredTools.length} of {allTools.length} curated AI tools for professionals
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                  className="p-2 text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg"
                >
                  {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tools, categories, or use cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                      {roles.map(role => (
                        <option key={role} value={role}>
                          {role === 'all' ? 'All Roles' : role.replace('_', ' ').toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                      {difficulties.map(difficulty => (
                        <option key={difficulty} value={difficulty}>
                          {difficulty === 'all' ? 'All Levels' : difficulty}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="name">Name</option>
                      <option value="difficulty">Difficulty</option>
                      <option value="category">Category</option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800"
                >
                  <X className="w-4 h-4" />
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tools Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {filteredTools.length === 0 ? (
          <div className="text-center py-12">
            <Database className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tools found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
          }>
            {filteredTools.map((tool) => (
              <div key={tool.key} className={`bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 ${
                viewMode === 'list' ? 'p-6' : 'overflow-hidden'
              }`}>
                {viewMode === 'grid' ? (
                  // Grid View
                  <>
                    <div className="p-6 pb-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="text-blue-600">
                            {getCategoryIcon(tool.category)}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                            <span className="text-sm text-gray-500">{tool.category}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleFavorite(tool.key)}
                          className={`p-2 rounded-full transition-colors ${
                            favoriteTools.has(tool.key)
                              ? 'text-yellow-500 hover:bg-yellow-50'
                              : 'text-gray-400 hover:bg-gray-50 hover:text-yellow-500'
                          }`}
                        >
                          {favoriteTools.has(tool.key) ? <Star className="w-5 h-5" fill="currentColor" /> : <StarOff className="w-5 h-5" />}
                        </button>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {getRoleSpecificUseCase(tool, selectedRole)}
                      </p>

                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(tool.difficulty)}`}>
                          {tool.difficulty}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          {getTimeToValueIcon(tool.timeToValue)}
                          {tool.timeToValue}
                        </span>
                      </div>

                      <div className="text-sm text-gray-600 mb-4">
                        <strong>Pricing:</strong> {tool.pricing}
                      </div>

                      {tool.integrations && tool.integrations.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-xs font-medium text-gray-700 mb-2">INTEGRATIONS:</h4>
                          <div className="flex flex-wrap gap-1">
                            {tool.integrations.slice(0, 3).map((integration, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                {integration}
                              </span>
                            ))}
                            {tool.integrations.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                                +{tool.integrations.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Tool
                      </a>
                    </div>
                  </>
                ) : (
                  // List View
                  <div className="flex items-start gap-4">
                    <div className="text-blue-600 mt-1">
                      {getCategoryIcon(tool.category)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                          <span className="text-sm text-gray-500">{tool.category}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(tool.difficulty)}`}>
                            {tool.difficulty}
                          </span>
                          <button
                            onClick={() => toggleFavorite(tool.key)}
                            className={`p-1 rounded transition-colors ${
                              favoriteTools.has(tool.key)
                                ? 'text-yellow-500'
                                : 'text-gray-400 hover:text-yellow-500'
                            }`}
                          >
                            {favoriteTools.has(tool.key) ? <Star className="w-4 h-4" fill="currentColor" /> : <StarOff className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {getRoleSpecificUseCase(tool, selectedRole)}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{tool.pricing}</span>
                          <span className="flex items-center gap-1">
                            {getTimeToValueIcon(tool.timeToValue)}
                            {tool.timeToValue}
                          </span>
                        </div>
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Visit
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AITools;