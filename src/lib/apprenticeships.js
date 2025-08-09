// src/lib/apprenticeships.js - Hybrid Implementation

import { 
  CURATED_APPRENTICESHIPS, 
  CAREER_SEARCH_TERMS, 
  CAREER_ORGANIZATIONS 
} from '../data/apprenticeships/index.js';

export async function fetchApprenticeships(careerTitle, state) {
  console.log('🔍 Fetching apprenticeships (hybrid approach):', { careerTitle, state });
  
  if (!state) return [];
  
  const careerKey = careerTitle.toLowerCase().replace(/\s+/g, '_');
  
  // 1. Get curated programs for this career/state
  const curatedPrograms = getCuratedPrograms(careerKey, state);
  
  // 2. Generate smart search links as "programs"
  const searchLinks = generateSearchLinks(careerTitle, state, careerKey);
  
  // 3. Combine curated + search links
  const allResults = [
    ...curatedPrograms,
    ...searchLinks
  ];
  
  console.log(`✅ Found ${curatedPrograms.length} curated + ${searchLinks.length} search links for ${careerTitle} in ${state}`);
  
  return allResults;
}

// Get curated programs from our data
function getCuratedPrograms(careerKey, state) {
  const careerData = CURATED_APPRENTICESHIPS[careerKey];
  if (!careerData || !careerData[state]) {
    return [];
  }
  
  return careerData[state].map(program => ({
    ...program,
    source: 'curated',
    isExternal: false
  }));
}

// Generate smart search links as "virtual programs"
function generateSearchLinks(careerTitle, state, careerKey) {
  const searchResults = [];
  const stateName = getStateName(state);
  
  // 1. Official apprenticeship.gov search
  searchResults.push({
    title: `Find ${careerTitle} Apprenticeships in ${stateName}`,
    description: `Search the official U.S. Department of Labor apprenticeship database for registered ${careerTitle.toLowerCase()} programs in your area.`,
    location: `${stateName}`,
    type: "Official Search",
    url: `https://www.apprenticeship.gov/apprenticeship-job-finder?keywords=${encodeURIComponent(careerTitle)}&location=${encodeURIComponent(stateName)}`,
    provider: "U.S. Department of Labor",
    duration: "Varies",
    cost: "Search tool",
    source: 'search_link',
    isExternal: true,
    highlights: ["Official government database", "Registered programs only", "Up-to-date listings"]
  });
  
  // 2. Career-specific organization searches
  const organizations = CAREER_ORGANIZATIONS[careerKey] || [];
  organizations.forEach(org => {
    searchResults.push({
      title: `${org.name} ${careerTitle} Programs in ${stateName}`,
      description: `Find ${org.name}-affiliated ${careerTitle.toLowerCase()} training programs and apprenticeships in ${stateName}.`,
      location: `${stateName}`,
      type: "Organization Search",
      url: `https://www.google.com/search?q="${org.searchTerm}"+${encodeURIComponent(stateName)}`,
      provider: org.name,
      duration: "Varies",
      cost: "Search results",
      source: 'search_link',
      isExternal: true,
      highlights: ["Industry-specific programs", "Professional network", "Quality training"]
    });
  });
  
  // 3. Community college search
  searchResults.push({
    title: `Community College ${careerTitle} Programs`,
    description: `Find certificate and degree programs in ${careerTitle.toLowerCase()} at community colleges throughout ${stateName}.`,
    location: `${stateName}`,
    type: "Education Search",
    url: `https://www.google.com/search?q="${careerTitle}+certificate+program"+community+college+${encodeURIComponent(stateName)}`,
    provider: "Community Colleges",
    duration: "6 months - 2 years",
    cost: "Varies by school",
    source: 'search_link',
    isExternal: true,
    highlights: ["Flexible scheduling", "Financial aid available", "Transfer credits"]
  });
  
  // 4. General training program search
  const searchTerms = CAREER_SEARCH_TERMS[careerKey] || [careerTitle + " training"];
  const primarySearchTerm = searchTerms[0];
  
  searchResults.push({
    title: `Local ${careerTitle} Training Centers`,
    description: `Search for private training schools, bootcamps, and specialized ${careerTitle.toLowerCase()} education providers in your area.`,
    location: `${stateName}`,
    type: "Training Search", 
    url: `https://www.google.com/search?q="${primarySearchTerm}"+near+${encodeURIComponent(stateName)}+2024`,
    provider: "Various Providers",
    duration: "Varies",
    cost: "Varies",
    source: 'search_link',
    isExternal: true,
    highlights: ["Private training options", "Intensive programs", "Job placement assistance"]
  });
  
  return searchResults;
}

// Helper function to convert state codes to names
function getStateName(stateCode) {
  const stateNames = {
    'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
    'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
    'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
    'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
    'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
    'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
    'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
    'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
    'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
    'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming',
    'DC': 'District of Columbia'
  };
  
  return stateNames[stateCode] || stateCode;
}

// Optional: Function to get just curated programs (if you want to separate them in UI)
export function getCuratedApprenticeships(careerTitle, state) {
  const careerKey = careerTitle.toLowerCase().replace(/\s+/g, '_');
  return getCuratedPrograms(careerKey, state);
}

// Optional: Function to get just search links (if you want to separate them in UI)
export function getSearchLinks(careerTitle, state) {
  const careerKey = careerTitle.toLowerCase().replace(/\s+/g, '_');
  return generateSearchLinks(careerTitle, state, careerKey);
}