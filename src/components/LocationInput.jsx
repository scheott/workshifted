// src/components/LocationInput.jsx
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';

const US_STATES = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
  { code: 'DC', name: 'District of Columbia' }
];

const LocationInput = ({ currentState, onLocationUpdate, className = "" }) => {
  const { user } = useAuth();
  const [selectedState, setSelectedState] = useState(currentState || '');
  const [city, setCity] = useState('');
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(!currentState);

  const handleSaveLocation = async (e) => {
    e.preventDefault();
    if (!selectedState || !user) return;

    setSaving(true);
    try {
      // Update user profile with location
      const { error } = await supabase
        .from('user_profiles')
        .update({
          state: selectedState,
          city: city || null,
          location_consent: true,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id);

      if (error) throw error;

      // Call the callback to update parent component
      onLocationUpdate?.({
        state: selectedState,
        city: city || null,
        location_consent: true
      });

      setShowForm(false);
    } catch (error) {
      console.error('Error saving location:', error);
      alert('Failed to save location. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleEditLocation = () => {
    setShowForm(true);
  };

  // If user has location and not editing, show current location
  if (!showForm && currentState) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-4 ${className}`}>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-green-900">📍 Your Location</h4>
            <p className="text-green-700">
              {US_STATES.find(s => s.code === currentState)?.name || currentState}
            </p>
          </div>
          <button
            onClick={handleEditLocation}
            className="text-green-600 hover:text-green-800 text-sm font-medium"
          >
            Change
          </button>
        </div>
      </div>
    );
  }

  // Show location input form
  return (
    <div className={`bg-blue-50 border border-blue-200 rounded-lg p-4 ${className}`}>
      <h4 className="font-medium text-blue-900 mb-3">
        📍 Set Your Location
      </h4>
      <p className="text-blue-700 text-sm mb-4">
        Help us find apprenticeships and opportunities in your area.
      </p>
      
      <form onSubmit={handleSaveLocation} className="space-y-4">
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
            State *
          </label>
          <select
            id="state"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select your state...</option>
            {US_STATES.map(state => (
              <option key={state.code} value={state.code}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City (Optional)
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            City helps us show more relevant opportunities
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={!selectedState || saving}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              !selectedState || saving
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {saving ? 'Saving...' : 'Save Location'}
          </button>
          
          {currentState && (
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default LocationInput;