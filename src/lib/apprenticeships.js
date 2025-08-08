export async function fetchApprenticeships(careerTitle, state) {
  if (!state) return [];
  try {
    const query = encodeURIComponent(careerTitle);
    const res = await fetch(
      `https://api.apprenticeship.gov/v1/apprenticeship/occupations/search?keyword=${query}&state=${state}`
    );
    if (!res.ok) throw new Error(`API request failed: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('Error fetching apprenticeships:', error);
    return [];
  }
}
