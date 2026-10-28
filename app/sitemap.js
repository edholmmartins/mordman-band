import { gigs } from './spelningar/gigsData';

const BASE_URL = 'https://www.mordman.se';

// Bump by hand when page content changes (not new Date(): that tells Google
// every page changed on every build).
const SITE_UPDATED = '2026-10-28';

export default function sitemap() {
  const gigEntries = gigs.map((gig) => ({
    url: `${BASE_URL}/spelningar/${gig.slug}`,
    lastModified: gig.date < SITE_UPDATED ? gig.date : SITE_UPDATED,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/spelningar`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...gigEntries,
  ];
}
