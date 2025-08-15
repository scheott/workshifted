// src/pages/AITools.jsx - Premium AI Tools Database
import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { 
  Search, Filter, ExternalLink, Star, StarOff, Zap, Clock, 
  TrendingUp, Database, Grid, List, ChevronDown, X, 
  MessageSquare, Code, BarChart3, Briefcase, Users, Palette, 
  Shield, Cog, Brain, FileText, Video, Headphones, ArrowLeft,
  Crown, Award
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
  const [sortBy, setSortBy] = useState('recommended'); // 'recommended', 'name', 'difficulty', 'category'
  const [userProfile, setUserProfile] = useState(null);
  const [recommendedTools, setRecommendedTools] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user's recommended tools from their assessment/plan
  useEffect(() => {
    fetchUserData();
  }, [user]);

  const fetchUserData = async () => {
    if (!user) return;

    try {
      // Fetch user profile
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      setUserProfile(profile);

      // Fetch latest assessment to get recommended tools
      const { data: assessment } = await supabase
        .from('ai_risk_assessments')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (assessment?.evolution_paths?.recommended_tools) {
        // Extract tool names from the recommended_tools array
        const toolNames = assessment.evolution_paths.recommended_tools.map(tool => 
          typeof tool === 'string' ? tool : tool.label || tool.name
        );
        setRecommendedTools(toolNames);
      }

    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Convert database to array with keys
  const allTools = useMemo(() => {
    return Object.entries(AITOOLS_DB).map(([key, tool]) => ({
      key,
      ...tool,
      isRecommended: recommendedTools.some(recTool => 
        recTool.toLowerCase().includes(tool.name.toLowerCase()) ||
        tool.name.toLowerCase().includes(recTool.toLowerCase())
      )
    }));
  }, [recommendedTools]);

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

  // Filter and sort tools with recommended tools first
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

    // Sort tools with recommended first
    filtered.sort((a, b) => {
      // If sorting by recommended (default), put recommended tools first
      if (sortBy === 'recommended') {
        if (a.isRecommended && !b.isRecommended) return -1;
        if (!a.isRecommended && b.isRecommended) return 1;
        // If both recommended or both not recommended, sort by name
        return a.name.localeCompare(b.name);
      }

      // Otherwise use the selected sorting method
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

  // Helper functions
  const toggleFavorite = (toolKey) => {
    const newFavorites = new Set(favoriteTools);
    if (newFavorites.has(toolKey)) {
      newFavorites.delete(toolKey);
    } else {
      newFavorites.add(toolKey);
    }
    setFavoriteTools(newFavorites);
  };

  const clearFilters = () => {
    setSelectedRole('all');
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setSearchTerm('');
    setSortBy('recommended');
  };

  const getRoleSpecificUseCase = (tool, role) => {
    if (role !== 'all' && tool.useCase[role]) {
      return tool.useCase[role];
    }
    return tool.useCase.default || tool.purpose;
  };

  const getCategoryIcon = (category) => {
    const iconMap = {
      'Communication': <MessageSquare className="w-5 h-5" />,
      'Development': <Code className="w-5 h-5" />,
      'Data Science': <BarChart3 className="w-5 h-5" />,
      'Business Tools': <Briefcase className="w-5 h-5" />,
      'Collaboration': <Users className="w-5 h-5" />,
      'Design': <Palette className="w-5 h-5" />,
      'Security': <Shield className="w-5 h-5" />,
      'Automation': <Cog className="w-5 h-5" />,
      'AI Platforms': <Brain className="w-5 h-5" />,
      'Content Creation': <FileText className="w-5 h-5" />,
      'Media': <Video className="w-5 h-5" />,
      'Audio': <Headphones className="w-5 h-5" />,
      'Finance Tools': <TrendingUp className="w-5 h-5" />
    };
    return iconMap[category] || <Zap className="w-5 h-5" />;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'border-green-200 text-green-700 bg-green-50';
      case 'Intermediate': return 'border-yellow-200 text-yellow-700 bg-yellow-50';
      case 'Advanced': return 'border-red-200 text-red-700 bg-red-50';
      default: return 'border-gray-200 text-gray-700 bg-gray-50';
    }
  };

  const getTimeToValueIcon = (timeToValue) => {
    if (timeToValue?.includes('week')) return <Clock className="w-3 h-3" />;
    if (timeToValue?.includes('day')) return <Zap className="w-3 h-3" />;
    return <Clock className="w-3 h-3" />;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your personalized tools...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Tools Database</h1>
                <p className="text-gray-600">
                  {recommendedTools.length > 0 
                    ? `${filteredTools.filter(tool => tool.isRecommended).length} tools recommended for you • ${filteredTools.length} total tools`
                    : `${filteredTools.length} AI tools to boost your productivity`
                  }
                </p>
              </div>
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mt-6">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                      {roles.map(role => (
                        <option key={role} value={role}>
                          {role === 'all' ? 'All Roles' : role}
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
                      <option value="recommended">Recommended First</option>
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

      {/* Recommended Tools Section */}
      {recommendedTools.length > 0 && sortBy === 'recommended' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">Recommended for You</h3>
            </div>
            <p className="text-blue-700 text-sm">
              Based on your assessment, these tools are specifically recommended for your role and goals.
            </p>
          </div>
        </div>
      )}

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
              <div key={tool.key} className={`bg-white rounded-xl border transition-all duration-200 ${
                tool.isRecommended 
                  ? 'border-blue-300 shadow-lg ring-2 ring-blue-100' 
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
              } ${viewMode === 'list' ? 'p-6' : 'overflow-hidden'}`}>
                {viewMode === 'grid' ? (
                  // Grid View
                  <>
                    <div className="p-6 pb-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={tool.isRecommended ? 'text-blue-600' : 'text-gray-600'}>
                            {getCategoryIcon(tool.category)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                              {tool.isRecommended && (
                                <Award className="w-4 h-4 text-blue-600" title="Recommended for you" />
                              )}
                            </div>
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
                        {tool.isRecommended && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                            Recommended
                          </span>
                        )}
                      </div>

                      <div className="text-sm text-gray-600 mb-4">
                        <strong>Pricing:</strong> {tool.pricing}
                      </div>

                      {tool.integrations && tool.integrations.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-xs font-medium text-gray-700 mb-2">INTEGRATIONS:</h4>
                          <div className="flex flex-wrap gap-1">
                            {tool.integrations.slice(0, 3).map((integration, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                {integration}
                              </span>
                            ))}
                            {tool.integrations.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                                +{tool.integrations.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4 text-sm text-gray-600 flex-1 mr-4">
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
                          className={`flex items-center gap-1 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-colors flex-shrink-0 ${
                            tool.isRecommended 
                              ? 'bg-blue-600 hover:bg-blue-700' 
                              : 'bg-gray-600 hover:bg-gray-700'
                          }`}
                        >
                          <ExternalLink className="w-3 h-3" />
                          Visit
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  // List View
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={tool.isRecommended ? 'text-blue-600' : 'text-gray-600'}>
                        {getCategoryIcon(tool.category)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                          {tool.isRecommended && (
                            <Award className="w-4 h-4 text-blue-600" title="Recommended for you" />
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          {getRoleSpecificUseCase(tool, selectedRole)}
                        </p>
                      </div>
                    </div>
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