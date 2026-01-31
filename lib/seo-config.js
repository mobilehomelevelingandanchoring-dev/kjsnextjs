/**
 * Technical SEO Configuration for KJS Supreme Pressure Washing
 * ============================================================
 * This file contains all SEO-related configurations including:
 * - Site metadata
 * - Canonical URL rules
 * - Structured data templates
 * - Meta robots directives
 */

export const SITE_CONFIG = {
  name: 'KJS Supreme Pressure Washing LLC',
  shortName: 'KJS Supreme',
  url: 'https://kjsupremepressurewashing.com',
  phone: '+1-213-841-6924',
  phoneDisplay: '(213) 841-6924',
  email: 'info@kjssupremepressurewashing.com',
  address: {
    street: '1757 S Village Dr',
    city: 'Deltona',
    state: 'FL',
    zip: '32725',
    country: 'US',
  },
  geo: {
    latitude: 28.9005,
    longitude: -81.2637,
  },
  hours: {
    weekdays: '07:00-18:00',
    saturday: '08:00-16:00',
    sunday: 'Closed',
  },
  social: {
    facebook: 'https://www.facebook.com/kjssupremepressurewashing',
    instagram: 'https://www.instagram.com/kjssupremepressurewashing',
    youtube: 'https://www.youtube.com/@kjssupremepressurewashing',
    linkedin: 'https://www.linkedin.com/company/kjs-supreme-pressure-washing',
    google: 'https://g.page/r/YOUR_GOOGLE_BUSINESS_ID',
  },
};

/**
 * Canonical URL Configuration
 * ---------------------------
 * Rules:
 * 1. Always use HTTPS (redirect HTTP to HTTPS)
 * 2. Use non-www version (redirect www to non-www)
 * 3. No trailing slashes (redirect /page/ to /page)
 * 4. Lowercase URLs only
 */
export function getCanonicalUrl(path = '') {
  const cleanPath = path
    .toLowerCase()
    .replace(/\/+$/, '') // Remove trailing slashes
    .replace(/^\/+/, '/'); // Ensure single leading slash

  return `${SITE_CONFIG.url}${cleanPath === '/' ? '' : cleanPath}`;
}

/**
 * Meta Robots Configuration
 * -------------------------
 * Page-type specific indexing rules
 */
export const META_ROBOTS = {
  // Index and follow - main content pages
  default: 'index, follow',

  // High-priority pages
  homepage: 'index, follow, max-image-preview:large, max-snippet:-1',
  service: 'index, follow, max-image-preview:large',
  location: 'index, follow, max-image-preview:large',

  // Medium priority
  serviceLocation: 'index, follow',

  // No index pages (admin, thank you, etc.)
  noindex: 'noindex, follow',

  // No follow (external link pages)
  nofollow: 'index, nofollow',
};

/**
 * Default Metadata Generator
 */
export function generateMetadata({ title, description, path = '', robots = 'default', image }) {
  const canonical = getCanonicalUrl(path);
  const ogImage = image || `${SITE_CONFIG.url}/og-image.jpg`;

  return {
    title: title || `${SITE_CONFIG.name} | Professional Pressure Washing Services`,
    description: description || 'Professional residential and commercial pressure washing services in Central Florida. Serving Deltona, Orlando, Sanford & surrounding areas.',
    alternates: {
      canonical: canonical,
    },
    robots: META_ROBOTS[robots] || META_ROBOTS.default,
    openGraph: {
      title: title,
      description: description,
      url: canonical,
      siteName: SITE_CONFIG.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [ogImage],
    },
    other: {
      'geo.region': 'US-FL',
      'geo.placename': 'Deltona',
      'geo.position': `${SITE_CONFIG.geo.latitude};${SITE_CONFIG.geo.longitude}`,
      'ICBM': `${SITE_CONFIG.geo.latitude}, ${SITE_CONFIG.geo.longitude}`,
    },
  };
}

/**
 * Service Data for Schema Generation
 */
export const SERVICES = {
  'house-washing': {
    name: 'House Washing',
    description: 'Professional exterior house washing to remove dirt, mold, mildew, and algae from your home\'s siding.',
    priceRange: '$150 - $500',
  },
  'driveway-cleaning': {
    name: 'Driveway Cleaning',
    description: 'Deep cleaning for concrete and paver driveways, removing oil stains, tire marks, and organic growth.',
    priceRange: '$100 - $300',
  },
  'roof-cleaning': {
    name: 'Roof Cleaning',
    description: 'Safe soft washing for shingle, tile, and metal roofs to remove black streaks and algae.',
    priceRange: '$250 - $600',
  },
  'deck-cleaning': {
    name: 'Deck Cleaning',
    description: 'Restore your wood or composite deck with professional pressure washing and treatment.',
    priceRange: '$150 - $400',
  },
  'gutter-cleaning': {
    name: 'Gutter Cleaning',
    description: 'Complete gutter cleaning inside and out, plus brightening of gutter faces.',
    priceRange: '$100 - $250',
  },
  'patio-cleaning': {
    name: 'Patio Cleaning',
    description: 'Professional cleaning for concrete, paver, and stone patios.',
    priceRange: '$100 - $300',
  },
  'fence-cleaning': {
    name: 'Fence Cleaning',
    description: 'Restore your wood, vinyl, or aluminum fence to like-new condition.',
    priceRange: '$100 - $350',
  },
  'pool-deck-cleaning': {
    name: 'Pool Deck Cleaning',
    description: 'Safe, thorough cleaning for pool decks and surrounding areas.',
    priceRange: '$150 - $400',
  },
  'sidewalk-cleaning': {
    name: 'Sidewalk Cleaning',
    description: 'Commercial-grade sidewalk and walkway cleaning services.',
    priceRange: '$75 - $200',
  },
  'concrete-cleaning': {
    name: 'Concrete Cleaning',
    description: 'Deep cleaning for all concrete surfaces including driveways, patios, and garage floors.',
    priceRange: '$100 - $400',
  },
  'paver-cleaning': {
    name: 'Paver Cleaning & Sealing',
    description: 'Complete paver restoration including cleaning, re-sanding, and sealing.',
    priceRange: '$200 - $600',
  },
  'soft-washing': {
    name: 'Soft Washing',
    description: 'Gentle, low-pressure cleaning for delicate surfaces like stucco, painted wood, and roofs.',
    priceRange: '$150 - $500',
  },
  'window-cleaning': {
    name: 'Window Cleaning',
    description: 'Crystal clear exterior window cleaning for homes and businesses.',
    priceRange: '$100 - $300',
  },
  'commercial-pressure-washing': {
    name: 'Commercial Pressure Washing',
    description: 'Professional pressure washing for storefronts, parking lots, and commercial buildings.',
    priceRange: '$300 - $2000',
  },
};

/**
 * Location Data for Schema Generation
 */
export const LOCATIONS = {
  'deltona': { name: 'Deltona', county: 'Volusia County' },
  'orlando': { name: 'Orlando', county: 'Orange County' },
  'daytona-beach': { name: 'Daytona Beach', county: 'Volusia County' },
  'sanford': { name: 'Sanford', county: 'Seminole County' },
  'lake-mary': { name: 'Lake Mary', county: 'Seminole County' },
  'winter-park': { name: 'Winter Park', county: 'Orange County' },
  'apopka': { name: 'Apopka', county: 'Orange County' },
  'altamonte-springs': { name: 'Altamonte Springs', county: 'Seminole County' },
  'casselberry': { name: 'Casselberry', county: 'Seminole County' },
  'maitland': { name: 'Maitland', county: 'Orange County' },
  'winter-garden': { name: 'Winter Garden', county: 'Orange County' },
  'oviedo': { name: 'Oviedo', county: 'Seminole County' },
  'winter-springs': { name: 'Winter Springs', county: 'Seminole County' },
  'debary': { name: 'DeBary', county: 'Volusia County' },
  'deland': { name: 'DeLand', county: 'Volusia County' },
  'orange-city': { name: 'Orange City', county: 'Volusia County' },
  'port-orange': { name: 'Port Orange', county: 'Volusia County' },
  'new-smyrna-beach': { name: 'New Smyrna Beach', county: 'Volusia County' },
  'palm-coast': { name: 'Palm Coast', county: 'Flagler County' },
  'kissimmee': { name: 'Kissimmee', county: 'Osceola County' },
  'st-cloud': { name: 'St. Cloud', county: 'Osceola County' },
  'celebration': { name: 'Celebration', county: 'Osceola County' },
  'clermont': { name: 'Clermont', county: 'Lake County' },
  'mount-dora': { name: 'Mount Dora', county: 'Lake County' },
  'tavares': { name: 'Tavares', county: 'Lake County' },
  'eustis': { name: 'Eustis', county: 'Lake County' },
  'ocoee': { name: 'Ocoee', county: 'Orange County' },
  'winter-haven': { name: 'Winter Haven', county: 'Polk County' },
  'davenport': { name: 'Davenport', county: 'Polk County' },
  'haines-city': { name: 'Haines City', county: 'Polk County' },
  'wekiwa-springs': { name: 'Wekiwa Springs', county: 'Seminole County' },
  'osteen': { name: 'Osteen', county: 'Volusia County' },
  'zellwood': { name: 'Zellwood', county: 'Orange County' },
};
