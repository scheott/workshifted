const YT_API = 'https://www.googleapis.com/youtube/v3/search';
const COURSERA_API = 'https://api.coursera.org/api/courses.v1';

export async function fetchCourseraCourses(keyword, limit = 4) {
  try {
    const url = `${COURSERA_API}?q=search&query=${encodeURIComponent(keyword)}&fields=name,slug,photoUrl,description`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Coursera API failed: ${res.status}`);
    const json = await res.json();

    const items = (json?.elements || []).slice(0, limit).map(c => ({
      title: c.name,
      provider: 'Coursera',
      url: `https://www.coursera.org/learn/${c.slug}`,
      duration: 'Varies',
      cost: 'Free audit (often)',
      rating: null,
      thumbnail: c.photoUrl || null,
      description: c.description || ''
    }));
    return items;
  } catch (e) {
    console.warn('Coursera fetch error', e);
    return [];
  }
}

export async function fetchYouTubeCourses(keyword, limit = 4) {
  try {
    const key = import.meta.env.VITE_YT_API_KEY;
    if (!key) return [];
    const params = new URLSearchParams({
      key,
      part: 'snippet',
      q: `${keyword} course`,
      type: 'video',
      maxResults: String(limit)
    });
    const res = await fetch(`${YT_API}?${params.toString()}`);
    if (!res.ok) throw new Error(`YouTube API failed: ${res.status}`);
    const json = await res.json();
    const items = (json?.items || []).map(item => ({
      title: item.snippet.title,
      provider: 'YouTube',
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      duration: 'Video',
      cost: 'Free',
      rating: null,
      thumbnail: item.snippet.thumbnails?.medium?.url || null,
      description: item.snippet.description || ''
    }));
    return items;
  } catch (e) {
    console.warn('YouTube fetch error', e);
    return [];
  }
}

/** Optional stub if you later get an edX/Open edX discovery endpoint + key
export async function fetchEdxCourses(keyword, limit = 4) {
  try {
    // Example for Open edX Discovery-like endpoints (varies by deployment)
    // const res = await fetch(`https://<discovery-host>/api/v1/search/courses/?q=${encodeURIComponent(keyword)}&page_size=${limit}`, {
    //   headers: { Authorization: `Bearer ${import.meta.env.VITE_EDX_TOKEN}` }
    // });
    // const json = await res.json();
    // return json.results.map(r => ({ ...map fields... }));
    return [];
  } catch {
    return [];
  }
}
*/

export async function fetchCoursesForCareer(careerTitle) {
  // keyword mapping (tweak as you like)
  const keyword = careerTitle
    .replace('HVAC Technician', 'HVAC')
    .replace('Telecommunications Installer', 'Fiber optics')
    .replace('Construction Project Manager', 'Construction management');

  const [coursera, youtube] = await Promise.all([
    fetchCourseraCourses(keyword),
    fetchYouTubeCourses(keyword),
  ]);

  return [...coursera, ...youtube].slice(0, 4);
}
