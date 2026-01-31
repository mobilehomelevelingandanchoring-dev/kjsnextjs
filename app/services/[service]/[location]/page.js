import Link from 'next/link';
import { notFound } from 'next/navigation';
import StructuredData from '@/components/StructuredData';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import { getCanonicalUrl } from '@/lib/seo-config';

// Service data
const services = {
  'house-washing': {
    name: 'House Washing',
    description: 'Professional exterior house cleaning that safely removes dirt, mold, mildew, and algae from your home\'s siding.',
    benefits: ['Removes mold, mildew, and algae', 'Safe for all siding types', 'Improves curb appeal', 'Protects your investment'],
    process: ['Pre-rinse and inspection', 'Apply eco-friendly cleaning solution', 'Soft wash exterior surfaces', 'Rinse and final inspection'],
  },
  'driveway-cleaning': {
    name: 'Driveway Cleaning',
    description: 'Deep cleaning for concrete and paver driveways that eliminates oil stains, tire marks, and organic growth.',
    benefits: ['Removes oil and grease stains', 'Eliminates mold and algae', 'Restores original appearance', 'Prevents slip hazards'],
    process: ['Surface assessment', 'Pre-treat stubborn stains', 'High-pressure cleaning', 'Edge detailing and rinse'],
  },
  'roof-cleaning': {
    name: 'Roof Cleaning',
    description: 'Gentle soft washing that removes black streaks, algae, and moss without damaging your shingles or tiles.',
    benefits: ['Extends roof lifespan', 'Removes black streaks', 'Kills algae at the root', 'Improves energy efficiency'],
    process: ['Roof inspection', 'Protect landscaping', 'Apply soft wash solution', 'Low-pressure rinse'],
  },
  'deck-cleaning': {
    name: 'Deck Cleaning',
    description: 'Professional deck cleaning and restoration for wood and composite decks, removing weathering and organic growth.',
    benefits: ['Restores natural wood beauty', 'Removes mildew and algae', 'Prepares for staining/sealing', 'Extends deck life'],
    process: ['Deck assessment', 'Apply wood-safe cleaner', 'Gentle pressure washing', 'Brightening treatment'],
  },
  'gutter-cleaning': {
    name: 'Gutter Cleaning',
    description: 'Thorough gutter cleaning and exterior brightening to maintain proper drainage and curb appeal.',
    benefits: ['Prevents water damage', 'Removes black streaks', 'Improves drainage', 'Protects foundation'],
    process: ['Remove debris', 'Flush downspouts', 'Clean gutter exterior', 'Check for proper flow'],
  },
  'patio-cleaning': {
    name: 'Patio Cleaning',
    description: 'Restore your outdoor living space with professional patio cleaning that removes stains and organic growth.',
    benefits: ['Removes stubborn stains', 'Eliminates slippery algae', 'Restores color', 'Safe for all materials'],
    process: ['Surface preparation', 'Apply cleaning solution', 'Pressure wash surface', 'Rinse and inspect'],
  },
  'fence-cleaning': {
    name: 'Fence Cleaning',
    description: 'Revitalize wood, vinyl, and metal fences with expert cleaning that removes years of buildup.',
    benefits: ['Restores fence appearance', 'Removes green algae', 'Prepares for staining', 'Extends fence life'],
    process: ['Assess fence condition', 'Apply appropriate cleaner', 'Gentle pressure wash', 'Final rinse'],
  },
  'pool-deck-cleaning': {
    name: 'Pool Deck Cleaning',
    description: 'Safe and effective pool deck cleaning that removes algae, mold, and slippery buildup around your pool.',
    benefits: ['Improves safety', 'Removes slippery algae', 'Brightens concrete', 'Enhances pool area'],
    process: ['Protect pool water', 'Apply cleaning solution', 'Pressure wash deck', 'Rinse thoroughly'],
  },
  'sidewalk-cleaning': {
    name: 'Sidewalk Cleaning',
    description: 'Professional sidewalk cleaning that removes gum, stains, dirt, and grime from walkways.',
    benefits: ['Removes gum and stains', 'Improves appearance', 'Reduces slip hazards', 'Enhances property value'],
    process: ['Pre-treat stains', 'Apply degreaser', 'High-pressure cleaning', 'Edge detailing'],
  },
  'concrete-cleaning': {
    name: 'Concrete Cleaning',
    description: 'Deep cleaning for all concrete surfaces including patios, garage floors, and walkways.',
    benefits: ['Removes deep stains', 'Eliminates oil spots', 'Restores color', 'Extends concrete life'],
    process: ['Surface assessment', 'Stain pre-treatment', 'Surface cleaner wash', 'Final rinse'],
  },
  'paver-cleaning': {
    name: 'Paver Cleaning & Sealing',
    description: 'Complete paver restoration including cleaning, re-sanding, and sealing to protect and beautify.',
    benefits: ['Restores paver color', 'Prevents weed growth', 'Protects from stains', 'Long-lasting results'],
    process: ['Deep clean pavers', 'Remove old sand', 'Apply polymeric sand', 'Seal pavers'],
  },
  'soft-washing': {
    name: 'Soft Washing',
    description: 'Low-pressure cleaning for delicate surfaces like stucco, painted surfaces, and screens.',
    benefits: ['Safe for delicate surfaces', 'Kills mold at root', 'Long-lasting clean', 'No surface damage'],
    process: ['Surface assessment', 'Apply biodegradable solution', 'Low-pressure application', 'Gentle rinse'],
  },
  'window-cleaning': {
    name: 'Window Cleaning',
    description: 'Professional exterior window cleaning for crystal clear views and improved curb appeal.',
    benefits: ['Streak-free results', 'Cleans frames and sills', 'Removes hard water spots', 'Improves natural light'],
    process: ['Pre-rinse windows', 'Apply cleaning solution', 'Squeegee clean', 'Detail edges'],
  },
  'commercial-pressure-washing': {
    name: 'Commercial Pressure Washing',
    description: 'Large-scale cleaning for businesses, parking lots, storefronts, and commercial properties.',
    benefits: ['Professional appearance', 'Flexible scheduling', 'Maintenance contracts', 'All property types'],
    process: ['Site assessment', 'Custom cleaning plan', 'Professional execution', 'Quality inspection'],
  },
};

// Location data
const locations = {
  'deltona': { name: 'Deltona', county: 'Volusia County', description: 'our home base' },
  'orlando': { name: 'Orlando', county: 'Orange County', description: 'Central Florida\'s largest city' },
  'daytona-beach': { name: 'Daytona Beach', county: 'Volusia County', description: 'the famous beach city' },
  'sanford': { name: 'Sanford', county: 'Seminole County', description: 'historic downtown Sanford' },
  'lake-mary': { name: 'Lake Mary', county: 'Seminole County', description: 'the growing Lake Mary area' },
  'winter-park': { name: 'Winter Park', county: 'Orange County', description: 'upscale Winter Park' },
  'apopka': { name: 'Apopka', county: 'Orange County', description: 'the Apopka community' },
  'altamonte-springs': { name: 'Altamonte Springs', county: 'Seminole County', description: 'Altamonte Springs' },
  'casselberry': { name: 'Casselberry', county: 'Seminole County', description: 'Casselberry' },
  'maitland': { name: 'Maitland', county: 'Orange County', description: 'Maitland' },
  'winter-garden': { name: 'Winter Garden', county: 'Orange County', description: 'Winter Garden' },
  'oviedo': { name: 'Oviedo', county: 'Seminole County', description: 'Oviedo' },
  'winter-springs': { name: 'Winter Springs', county: 'Seminole County', description: 'Winter Springs' },
  'debary': { name: 'DeBary', county: 'Volusia County', description: 'DeBary' },
  'deland': { name: 'DeLand', county: 'Volusia County', description: 'DeLand' },
  'orange-city': { name: 'Orange City', county: 'Volusia County', description: 'Orange City' },
  'port-orange': { name: 'Port Orange', county: 'Volusia County', description: 'Port Orange' },
  'new-smyrna-beach': { name: 'New Smyrna Beach', county: 'Volusia County', description: 'New Smyrna Beach' },
  'palm-coast': { name: 'Palm Coast', county: 'Flagler County', description: 'Palm Coast' },
  'kissimmee': { name: 'Kissimmee', county: 'Osceola County', description: 'Kissimmee' },
  'st-cloud': { name: 'St. Cloud', county: 'Osceola County', description: 'St. Cloud' },
  'celebration': { name: 'Celebration', county: 'Osceola County', description: 'Celebration' },
  'clermont': { name: 'Clermont', county: 'Lake County', description: 'Clermont' },
  'mount-dora': { name: 'Mount Dora', county: 'Lake County', description: 'historic Mount Dora' },
  'tavares': { name: 'Tavares', county: 'Lake County', description: 'Tavares' },
  'eustis': { name: 'Eustis', county: 'Lake County', description: 'Eustis' },
  'ocoee': { name: 'Ocoee', county: 'Orange County', description: 'Ocoee' },
  'winter-haven': { name: 'Winter Haven', county: 'Polk County', description: 'Winter Haven' },
  'davenport': { name: 'Davenport', county: 'Polk County', description: 'Davenport' },
  'haines-city': { name: 'Haines City', county: 'Polk County', description: 'Haines City' },
  'wekiwa-springs': { name: 'Wekiwa Springs', county: 'Seminole County', description: 'Wekiwa Springs' },
  'osteen': { name: 'Osteen', county: 'Volusia County', description: 'Osteen' },
  'zellwood': { name: 'Zellwood', county: 'Orange County', description: 'Zellwood' },
};

export async function generateStaticParams() {
  const params = [];
  for (const service of Object.keys(services)) {
    for (const location of Object.keys(locations)) {
      params.push({ service, location });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const service = services[params.service];
  const location = locations[params.location];

  if (!service || !location) return { title: 'Not Found' };

  const path = `/services/${params.service}/${params.location}`;
  const canonical = getCanonicalUrl(path);

  return {
    title: `${service.name} in ${location.name}, FL | KJS Supreme Pressure Washing`,
    description: `Professional ${service.name.toLowerCase()} services in ${location.name}, Florida. ${service.description} Call for a free quote!`,
    alternates: {
      canonical: canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${service.name} in ${location.name}, FL`,
      description: `Professional ${service.name.toLowerCase()} services in ${location.name}, Florida. ${service.description}`,
      url: canonical,
      siteName: 'KJS Supreme Pressure Washing LLC',
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default function ServiceLocationPage({ params }) {
  const service = services[params.service];
  const location = locations[params.location];

  if (!service || !location) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'Services', url: 'https://kjsupremepressurewashing.com/services' },
    { name: service.name, url: `https://kjsupremepressurewashing.com/services/${params.service}` },
    { name: location.name, url: `https://kjsupremepressurewashing.com/services/${params.service}/${params.location}` },
  ];

  return (
    <>
      <StructuredData data={[
        generateServiceSchema(params.service, params.location),
        generateBreadcrumbSchema(breadcrumbs),
      ]} />
      <article className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        {service.name} in {location.name}, FL
      </h1>

      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
        Looking for professional {service.name.toLowerCase()} services in {location.name}?
        KJS Supreme Pressure Washing provides expert {service.name.toLowerCase()} for residential
        and commercial properties throughout {location.name} and {location.county}. {service.description}
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Why {location.name} Properties Need {service.name}
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Central Florida's humid climate creates ideal conditions for mold, mildew, and algae growth.
          Properties in {location.name} are exposed to frequent rain, high humidity, and intense sun
          that can cause rapid buildup of dirt and organic matter on exterior surfaces.
        </p>
        <p className="text-lg text-gray-600">
          Regular {service.name.toLowerCase()} protects your property, maintains curb appeal,
          and prevents long-term damage that can be costly to repair.
        </p>
      </section>

      <section className="mb-10 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Service Benefits</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {service.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span> {benefit}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Our {service.name} Process</h2>
        <div className="space-y-3">
          {service.process.map((step, index) => (
            <div key={index} className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">
                {index + 1}
              </span>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Why Choose KJS Supreme?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-800">Fully Insured</h3>
            <p className="text-gray-600 text-sm">Complete liability coverage for your peace of mind</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Local Experts</h3>
            <p className="text-gray-600 text-sm">Based in Deltona, serving {location.name} and surrounding areas</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Eco-Friendly</h3>
            <p className="text-gray-600 text-sm">Biodegradable cleaning solutions safe for your landscape</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Free Quotes</h3>
            <p className="text-gray-600 text-sm">Transparent pricing with no hidden fees</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Service Area</h2>
        <p className="text-gray-600 mb-4">
          We proudly serve {location.name} and all surrounding communities in {location.county}.
          Our team travels throughout Central Florida to provide professional pressure washing services.
        </p>
        <p className="text-gray-600">
          <strong>Other services in {location.name}:</strong>{' '}
          {Object.entries(services)
            .filter(([key]) => key !== params.service)
            .slice(0, 5)
            .map(([key, s], index, arr) => (
              <span key={key}>
                <Link href={`/services/${key}/${params.location}`} className="text-blue-600 hover:underline">
                  {s.name}
                </Link>
                {index < arr.length - 1 ? ', ' : ''}
              </span>
            ))}
          , and more.
        </p>
      </section>

      <section className="bg-gray-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Get a Free {service.name} Quote in {location.name}</h2>
        <p className="text-gray-300 mb-6">
          Ready to transform your property? Contact us today for a free, no-obligation estimate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Quote
          </Link>
          <a
            href="tel:+12138416924"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            (213) 841-6924
          </a>
        </div>
      </section>
    </article>
    </>
  );
}
