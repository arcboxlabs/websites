const GEO_CACHE_KEY = 'arcbox_geo';

// EEA + UK + Switzerland, where ePrivacy rules require consent before
// non-essential cookies — analytics runs cookieless there instead.
const COOKIELESS_REGIONS = new Set([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  'IS', 'LI', 'NO', 'GB', 'CH'
]);

// EEA territories whose IANA zones are not under Europe/: Cyprus, Iceland,
// Svalbard, the Spanish and Portuguese Atlantic islands, and the French
// overseas departments where the GDPR applies.
const CONSENT_TIMEZONES_OUTSIDE_EUROPE = new Set([
  'Asia/Nicosia',
  'Asia/Famagusta',
  'Atlantic/Reykjavik',
  'Arctic/Longyearbyen',
  'Atlantic/Canary',
  'Atlantic/Madeira',
  'Atlantic/Azores',
  'America/Martinique',
  'America/Guadeloupe',
  'America/Cayenne',
  'Indian/Reunion',
  'Indian/Mayotte'
]);

/** Synchronous fast path from the per-session geo cache; null when undetected. */
export function getCachedCookielessRegion(): boolean | null {
  try {
    const cached = sessionStorage.getItem(GEO_CACHE_KEY);
    return cached === null ? null : COOKIELESS_REGIONS.has(cached);
  } catch {
    return null;
  }
}

let detection: Promise<boolean> | null = null;

export function isCookielessRegion(): Promise<boolean> {
  detection ??= detectRegion();
  return detection;
}

async function detectRegion(): Promise<boolean> {
  const cached = getCachedCookielessRegion();
  if (cached !== null) {
    return cached;
  }

  try {
    // First-party Cloudflare endpoint, available on every proxied zone
    const response = await fetch('/cdn-cgi/trace');
    const country = /^loc=([A-Z]+)$/m.exec(await response.text())?.[1];
    if (country) {
      const cookieless = COOKIELESS_REGIONS.has(country);
      // Cache only outside consent regions: visitors there receive analytics
      // cookies anyway, while consent-region devices get zero writes of any
      // kind — ePrivacy applies to sessionStorage just as it does to cookies.
      if (!cookieless) {
        try {
          sessionStorage.setItem(GEO_CACHE_KEY, country);
        } catch {
          // storage unavailable — detection still succeeded
        }
      }
      return cookieless;
    }
  } catch {
    // endpoint unreachable (e.g. local dev) — fall through to timezone heuristic
  }

  // Deliberately over-inclusive: an EU visitor mistaken for non-EU is a
  // compliance problem, the reverse only costs cross-session analytics.
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timeZone.startsWith('Europe/') || CONSENT_TIMEZONES_OUTSIDE_EUROPE.has(timeZone);
  } catch {
    return true;
  }
}
