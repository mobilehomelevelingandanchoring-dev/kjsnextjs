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
  'deltona',
  'orlando',
  'daytona-beach',
  'sanford',
  'lake-mary',
  'winter-park',
  'apopka',
  'altamonte-springs',
  'casselberry',
  'maitland',
  'winter-garden',
  'oviedo',
  'winter-springs',
  'debary',
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
  'tavares',
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

  return [...staticPages, ...servicePages, ...locationPages, ...serviceLocationPages];
}
