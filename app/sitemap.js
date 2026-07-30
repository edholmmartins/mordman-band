import { gigs } from './spelningar/gigsData';

const BASE_URL = 'https://www.mordman.se';

export default function sitemap() {
  const gigEntries = gigs.map((gig) => ({
    url: `${BASE_URL}/spelningar/${gig.slug}`,
    lastModified: gig.date,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/spelningar`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...gigEntries,
  ];
}
