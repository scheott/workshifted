// import { supabase } from './supabase';

// const ipApi = 'https://ipapi.co/json/'; // Free, no key (light limits)

// export async function getOrCreateUserState() {
//   // 1) Try profile first
//   const { data: { user } } = await supabase.auth.getUser();
//   if (!user) return null;

//   const { data: existing, error } = await supabase
//     .from('user_profiles')
//     .select('state, city, country')
//     .eq('user_id', user.id)
//     .single();

//   if (!error && existing?.state) return existing.state;

//   // 2) Fall back to IP geolocation (client-side)
//   try {
//     const res = await fetch(ipApi, { cache: 'no-store' });
//     const ip = await res.json();
//     const inferred = {
//       city: ip?.city || null,
//       state: ip?.region_code || ip?.region || null, // US: region_code is 2-letter
//       country: ip?.country || null,
//     };

//     // Normalize US state to 2-letter if possible
//     if (inferred.country === 'US' && inferred.state && inferred.state.length !== 2 && ip?.region_code) {
//       inferred.state = ip.region_code;
//     }

//     // Upsert profile for the user
//     await supabase.from('user_profiles').upsert({
//       user_id: user.id,
//       city: inferred.city,
//       state: inferred.state,
//       country: inferred.country,
//       updated_at: new Date().toISOString()
//     });

//     return inferred.state || null;
//   } catch (e) {
//     console.warn('IP geolocation failed', e);
//     return null;
//   }
// }
