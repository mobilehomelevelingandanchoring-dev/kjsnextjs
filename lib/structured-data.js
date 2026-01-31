/**
 * Structured Data (JSON-LD Schema) Generator
 * ==========================================
 * Generates schema.org compliant JSON-LD for:
 * - LocalBusiness
 * - Service
 * - WebPage
 * - BreadcrumbList
 * - FAQPage
 * - Review/AggregateRating
 */

import { SITE_CONFIG, SERVICES, LOCATIONS } from './seo-config';

/**
 * LocalBusiness Schema
 * Used on: Homepage, About, Contact pages
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.shortName,
    description: 'Professional residential and commercial pressure washing services in Central Florida. Specializing in house washing, driveway cleaning, roof cleaning, and more.',
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: [
      `${SITE_CONFIG.url}/logo.webp`,
      `${SITE_CONFIG.url}/og-image.jpg`,
    ],
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/logo.webp`,
      width: 512,
      height: 512,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    areaServed: Object.values(LOCATIONS).map((loc) => ({
      '@type': 'City',
      name: `${loc.name}, FL`,
    })),
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Check',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'John D.',
        },
        datePublished: '2024-11-15',
        reviewBody: 'KJS Supreme did an amazing job on our driveway and house exterior. Professional, on time, and the results were outstanding!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah M.',
        },
        datePublished: '2024-10-20',
        reviewBody: 'Best pressure washing service in Deltona! They cleaned our roof and it looks brand new. Highly recommend!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      },
    ],
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.youtube,
      SITE_CONFIG.social.linkedin,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pressure Washing Services',
      itemListElement: Object.entries(SERVICES).map(([slug, service]) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
      })),
    },
  };
}

/**
 * Organization Schema
 * Used on: All pages (in layout)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.webp`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish'],
    },
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.youtube,
      SITE_CONFIG.social.linkedin,
    ],
  };
}

/**
 * Service Schema
 * Used on: Individual service pages
 */
export function generateServiceSchema(serviceSlug, locationSlug = null) {
  const service = SERVICES[serviceSlug];
  if (!service) return null;

  const location = locationSlug ? LOCATIONS[locationSlug] : null;
  const serviceName = location
    ? `${service.name} in ${location.name}, FL`
    : service.name;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}/services/${serviceSlug}${locationSlug ? `/${locationSlug}` : ''}#service`,
    name: serviceName,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_CONFIG.url}/#localbusiness`,
      name: SITE_CONFIG.name,
    },
    areaServed: location
      ? {
          '@type': 'City',
          name: `${location.name}, FL`,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: location.county,
          },
        }
      : {
          '@type': 'State',
          name: 'Florida',
        },
    serviceType: service.name,
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        price: service.priceRange,
      },
      availability: 'https://schema.org/InStock',
    },
  };
}

/**
 * WebPage Schema
 * Used on: All pages
 */
export function generateWebPageSchema({ title, description, url, type = 'WebPage' }) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url: url,
    name: title,
    description: description,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.url}/#website`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    about: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_CONFIG.url}/#localbusiness`,
    },
    inLanguage: 'en-US',
  };
}

/**
 * BreadcrumbList Schema
 * Used on: All pages except homepage
 */
export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * FAQPage Schema
 * Used on: FAQ page and service pages with FAQ sections
 */
export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Website Schema with SearchAction
 * Used on: All pages (in layout)
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Combined Schema for a page
 * Merges multiple schemas into a single graph
 */
export function generateCombinedSchema(schemas) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.filter(Boolean),
  };
}
