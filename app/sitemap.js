import { gigs } from './spelningar/gigsData';
import { landingPages } from '../components/landing/pages';

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

  const landingEntries = landingPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.9,
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
    ...landingEntries,
    ...gigEntries,
  ];
}
