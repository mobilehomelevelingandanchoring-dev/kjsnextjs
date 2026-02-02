const BASE_URL = 'https://kjsupremepressurewashing.com';

const services = [
  'house-washing',
  'driveway-cleaning',
  'roof-cleaning',
  'deck-cleaning',
  'gutter-cleaning',
  'patio-cleaning',
  'fence-cleaning',
  'pool-deck-cleaning',
  'sidewalk-cleaning',
  'concrete-cleaning',
  'paver-cleaning',
  'soft-washing',
  'window-cleaning',
  'commercial-pressure-washing',
];

const locations = [
  // Removed: deltona, orlando, casselberry, debary, tavares (now have dedicated SEO pages)
  'daytona-beach',
  'sanford',
  'lake-mary',
  'winter-park',
  'apopka',
  'altamonte-springs',
  'maitland',
  'winter-garden',
  'oviedo',
  'winter-springs',
  'deland',
  'orange-city',
  'port-orange',
  'new-smyrna-beach',
  'palm-coast',
  'kissimmee',
  'st-cloud',
  'celebration',
  'clermont',
  'mount-dora',
  'eustis',
  'ocoee',
  'winter-haven',
  'davenport',
  'haines-city',
  'wekiwa-springs',
  'osteen',
  'zellwood',
];

export default function sitemap() {
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about-us/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/residential`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/commercial`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy-policy/`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms-of-service/`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];

  // SEO-optimized location-specific pages
  const seoLocationPages = [
    {
      url: `${BASE_URL}/pressure-washing-ocala-fl`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/pressure-washing-deltona-kjs-supreme-pressure-washing-llc/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pressure-washing-in-seminole-county-fl/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/pressure-washing-debary-fl-2/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/pressure-washing-casselberry-fl/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/pressure-washing-tavares-fl/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/roof-cleaning-ocala-fl/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/pressure-washing-orlando-fl/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gutter-cleaning-winter-garden-fl/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ];

  // Informational/Guide pages
  const guidePagesPages = [
    {
      url: `${BASE_URL}/how-to-start-a-gutter-cleaning-business/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/pressure-washing-costs`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/pressure-washing-vs-soft-washing-deltona/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/exterior-cleaning-guide-deltona`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Service pages (14 pages)
  const servicePages = services.map((service) => ({
    url: `${BASE_URL}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Location pages (33 pages)
  const locationPages = locations.map((location) => ({
    url: `${BASE_URL}/locations/${location}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Service + Location pages (462 pages = 14 services x 33 locations)
  const serviceLocationPages = [];
  for (const service of services) {
    for (const location of locations) {
      serviceLocationPages.push({
        url: `${BASE_URL}/services/${service}/${location}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  }

  return [
    ...staticPages,
    ...seoLocationPages,
    ...guidePagesPages,
    ...servicePages,
    ...locationPages,
    ...serviceLocationPages
  ];
}
