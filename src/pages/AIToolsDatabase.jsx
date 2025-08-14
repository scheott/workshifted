// src/pages/AIToolsDatabase.jsx - Premium AI Tools Database
import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { aiToolsDatabase } from '../data/premiumContent/aiToolsDatabase';

const AIToolsDatabase = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [favoriteTools, setFavoriteTools] = useState(new Set());

  useEffect(() => {
    if (!user?.is_premium) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  // Get unique roles and categories
  const roles = useMemo(() => {
    const roleSet = new Set();
    aiToolsDatabase.tools.forEach(tool => {
      tool.bestFor.forEach(role => roleSet.add(role));
    });
    return ['all', ...Array.from(roleSet).sort()];
  }, []);

  const categories = useMemo(() => {
    const categorySet = new Set();
    aiToolsDatabase.tools.forEach(tool => categorySet.add(tool.category));
    return ['all', ...Array.from(categorySet).sort()];
  }, []);

  // Filter tools
  const filteredTools = useMemo(() => {
    return aiToolsDatabase.tools.filter(tool => {
      const matchesRole = selectedRole === 'all' || tool.bestFor.includes(selectedRole);
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.keyFeatures.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesRole && matchesCategory && matchesSearch;
    });
  }, [selectedRole, selectedCategory, searchTerm]);

  const toggleFavorite = (toolId) => {
    setFavoriteTools(prev => {
      const newSet = new Set(prev);
      if (newSet.has(toolId)) {
        newSet.delete(toolId);
      } else {
        newSet.add(toolId);
      }
      return newSet;
    });
  };

  const getPricingColor = (pricing) => {
    if (pricing === 'Free') return 'bg-green-100 text-green-800';
    if (pricing.includes('Free')) return 'bg-blue-100 text-blue-800';
    return 'bg-purple-100 text-purple-800';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Writing & Content': '✍️',
      'Code & Development': '💻',
      'Design & Creative': '🎨',
      'Data & Analytics': '📊',
      'Productivity': '⚡',
      'Communication': '💬',
      'Research': '🔍',
      'Marketing': '📢',
      'Finance': '💰',
      'HR & Recruiting': '👥'
    };
    return icons[category] || '🤖';
  };

  if (!user?.is_premium) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Tools Database</h1>
          <p className="text-gray-600">100+ AI tools organized by role and use case with setup guides</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              {aiToolsDatabase.tools.filter(t => t.pricing === 'Free').length} Free Tools
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              {aiToolsDatabase.tools.filter(t => t.pricing.includes('Free')).length} Freemium Tools
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              {aiToolsDatabase.tools.length} Total Tools
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Tools</label>
              <input
                type="text"
                placeholder="Search by name, description, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Role Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Role</label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {roles.map(role => (
                  <option key={role} value={role}>
                    {role === 'all' ? 'All Roles' : role}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTools.length} of {aiToolsDatabase.tools.length} tools
            {selectedRole !== 'all' && ` for ${selectedRole}`}
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div key={tool.id} className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 overflow-hidden">
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getCategoryIcon(tool.category)}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                      <span className="text-sm text-gray-500">{tool.category}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(tool.id)}
                    className={`p-2 rounded-full transition-colors ${
                      favoriteTools.has(tool.id)
                        ? 'text-red-500 hover:bg-red-50'
                        : 'text-gray-400 hover:bg-gray-50 hover:text-red-500'
                    }`}
                  >
                    <svg className="w-5 h-5" fill={favoriteTools.has(tool.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tool.description}</p>

                {/* Pricing */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getPricingColor(tool.pricing)}`}>
                    {tool.pricing}
                  </span>
                </div>

                {/* Best For */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-gray-700 mb-2">BEST FOR:</h4>
                  <div className="flex flex-wrap gap-1">
                    {tool.bestFor.slice(0, 3).map((role, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {role}
                      </span>
                    ))}
                    {tool.bestFor.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                        +{tool.bestFor.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-gray-700 mb-2">KEY FEATURES:</h4>
                  <ul className="space-y-1">
                    {tool.keyFeatures.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Try Tool
                  </a>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="mr-1">⭐</span>
                    <span>{tool.rating}/5</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tools found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIToolsDatabase;