import Link from 'next/link';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import { getCanonicalUrl } from '@/lib/seo-config';

export const metadata = {
  title: 'Service Areas | Pressure Washing in Central Florida',
  description: 'KJS Supreme Pressure Washing serves 33+ cities across Central Florida including Deltona, Orlando, Sanford, Daytona Beach, and more. Professional pressure washing near you.',
  keywords: ['pressure washing near me', 'Central Florida pressure washing', 'Deltona pressure washing', 'Orlando pressure washing', 'Sanford pressure washing'],
  alternates: {
    canonical: getCanonicalUrl('/locations'),
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
  openGraph: {
    title: 'Pressure Washing Service Areas in Central Florida',
    description: 'Professional pressure washing services in Deltona, Orlando, Sanford, Daytona Beach, and 30+ other Central Florida cities.',
    url: getCanonicalUrl('/locations'),
    siteName: 'KJS Supreme Pressure Washing LLC',
    locale: 'en_US',
    type: 'website',
    images: ['/images/house-washing-deltona-fl-01.jpg'],
  },
};

// Featured work from different locations
const featuredWork = [
  {
    city: 'Deltona',
    service: 'House Washing',
    image: '/images/house-washing-deltona-fl-01.jpg',
    alt: 'Professional house washing service removing mold and algae in Deltona, FL',
  },
  {
    city: 'Orlando',
    service: 'Driveway Cleaning',
    image: '/images/driveway-cleaning-orlando-fl-01.jpg',
    alt: 'Driveway pressure washing removing oil stains in Orlando, FL',
  },
  {
    city: 'Sanford',
    service: 'Roof Cleaning',
    image: '/images/roof-cleaning-sanford-fl-01.jpg',
    alt: 'Soft wash roof cleaning removing black streaks in Sanford, FL',
  },
  {
    city: 'Daytona Beach',
    service: 'Pool Deck Cleaning',
    image: '/images/pool-deck-cleaning-daytona-beach-fl-01.jpg',
    alt: 'Pool deck pressure washing in Daytona Beach, FL',
  },
  {
    city: 'Lake Mary',
    service: 'Patio Cleaning',
    image: '/images/patio-cleaning-lake-mary-fl-01.jpg',
    alt: 'Patio pressure washing and restoration in Lake Mary, FL',
  },
  {
    city: 'Winter Park',
    service: 'Sidewalk Cleaning',
    image: '/images/sidewalk-cleaning-winter-park-fl-01.jpg',
    alt: 'Sidewalk and walkway pressure washing in Winter Park, FL',
  },
];

const locations = [
  { name: 'Deltona', slug: 'deltona', description: 'Our home base - serving the entire Deltona area with fast, reliable service.' },
  { name: 'Orlando', slug: 'orlando', description: 'Professional pressure washing for Orlando residents and businesses.' },
  { name: 'Daytona Beach', slug: 'daytona-beach', description: 'Coastal property specialists serving Daytona Beach and surrounding areas.' },
  { name: 'Sanford', slug: 'sanford', description: 'Quality cleaning services for Sanford homes and commercial properties.' },
  { name: 'Lake Mary', slug: 'lake-mary', description: 'Premium property maintenance for Lake Mary communities.' },
  { name: 'Winter Park', slug: 'winter-park', description: 'Expert pressure washing for Winter Park properties.' },
  { name: 'Apopka', slug: 'apopka', description: 'Reliable cleaning services for Apopka residents.' },
  { name: 'Altamonte Springs', slug: 'altamonte-springs', description: 'Professional services for Altamonte Springs area.' },
  { name: 'Casselberry', slug: 'casselberry', description: 'Quality pressure washing in Casselberry.' },
  { name: 'Maitland', slug: 'maitland', description: 'Serving Maitland homes and businesses.' },
  { name: 'Winter Garden', slug: 'winter-garden', description: 'Expert cleaning for Winter Garden properties.' },
  { name: 'Oviedo', slug: 'oviedo', description: 'Professional services in Oviedo.' },
  { name: 'Winter Springs', slug: 'winter-springs', description: 'Quality cleaning in Winter Springs.' },
  { name: 'DeBary', slug: 'debary', description: 'Serving the DeBary community.' },
  { name: 'DeLand', slug: 'deland', description: 'Professional pressure washing in DeLand.' },
  { name: 'Orange City', slug: 'orange-city', description: 'Quality services for Orange City.' },
  { name: 'Port Orange', slug: 'port-orange', description: 'Coastal cleaning specialists in Port Orange.' },
  { name: 'New Smyrna Beach', slug: 'new-smyrna-beach', description: 'Beach property experts in New Smyrna.' },
  { name: 'Palm Coast', slug: 'palm-coast', description: 'Serving Palm Coast and Flagler County.' },
  { name: 'Kissimmee', slug: 'kissimmee', description: 'Professional services in Kissimmee.' },
  { name: 'St. Cloud', slug: 'st-cloud', description: 'Quality cleaning in St. Cloud.' },
  { name: 'Celebration', slug: 'celebration', description: 'Premium services for Celebration community.' },
  { name: 'Clermont', slug: 'clermont', description: 'Expert pressure washing in Clermont.' },
  { name: 'Mount Dora', slug: 'mount-dora', description: 'Serving historic Mount Dora.' },
  { name: 'Tavares', slug: 'tavares', description: 'Quality services in Tavares.' },
  { name: 'Eustis', slug: 'eustis', description: 'Professional cleaning in Eustis.' },
  { name: 'Ocoee', slug: 'ocoee', description: 'Serving the Ocoee area.' },
  { name: 'Winter Haven', slug: 'winter-haven', description: 'Expert services in Winter Haven.' },
  { name: 'Davenport', slug: 'davenport', description: 'Quality cleaning in Davenport.' },
  { name: 'Haines City', slug: 'haines-city', description: 'Professional services in Haines City.' },
  { name: 'Wekiwa Springs', slug: 'wekiwa-springs', description: 'Serving Wekiwa Springs area.' },
  { name: 'Osteen', slug: 'osteen', description: 'Quality pressure washing in Osteen.' },
  { name: 'Zellwood', slug: 'zellwood', description: 'Serving the Zellwood community.' },
];

export default function LocationsPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'Locations', url: 'https://kjsupremepressurewashing.com/locations' },
  ];

  return (
    <>
      <StructuredData data={[
        generateLocalBusinessSchema(),
        generateBreadcrumbSchema(breadcrumbs),
      ]} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section aria-labelledby="locations-heading" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-blue-200">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><span aria-hidden="true">/</span></li>
                <li aria-current="page" className="text-white font-medium">Service Areas</li>
              </ol>
            </nav>
            <h1 id="locations-heading" className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Pressure Washing Service Areas
            </h1>
            <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
              Proudly serving 33+ cities across Central Florida. From our Deltona headquarters, we provide professional
              pressure washing services within a 30-mile radius.
            </p>
          </div>
        </section>

        {/* Featured Work Gallery */}
        <section aria-labelledby="featured-work-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <header className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="featured-work-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Recent Work Across Central Florida
              </h2>
              <p className="text-lg text-gray-600">
                See examples of our <Link href="/services" className="text-blue-600 hover:underline">pressure washing services</Link> from
                communities we serve throughout the region.
              </p>
            </header>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" role="list" aria-label="Featured work gallery">
              {featuredWork.map((work, index) => (
                <li key={index}>
                  <figure className="group relative overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={work.image}
                      alt={work.alt}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                      <span className="text-white font-semibold block">{work.service}</span>
                      <span className="text-gray-300 text-sm">{work.city}, FL</span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>

            <div className="text-center mt-8">
              <Link href="/gallery" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
                View Full Gallery
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section aria-labelledby="cities-heading" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 id="cities-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Cities We Serve
            </h2>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" role="list">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                  >
                    <h3 className="text-xl font-bold mb-2 text-blue-600 hover:text-blue-700 flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {location.name}, FL
                    </h3>
                    <p className="text-gray-600 text-sm">{location.description}</p>
                    <span className="inline-flex items-center mt-3 text-blue-500 text-sm font-medium">
                      View Services
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services Offered Section */}
        <section aria-labelledby="services-offered-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 id="services-offered-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Services Available in All Locations
            </h2>
            <nav aria-label="Available services">
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto" role="list">
                {[
                  { name: 'House Washing', href: '/services/house-washing' },
                  { name: 'Roof Cleaning', href: '/services/roof-cleaning' },
                  { name: 'Driveway Cleaning', href: '/services/driveway-cleaning' },
                  { name: 'Deck Cleaning', href: '/services/deck-cleaning' },
                  { name: 'Patio Cleaning', href: '/services/patio-cleaning' },
                  { name: 'Pool Deck Cleaning', href: '/services/pool-deck-cleaning' },
                  { name: 'Fence Cleaning', href: '/services/fence-cleaning' },
                  { name: 'Commercial Services', href: '/services/commercial-pressure-washing' },
                ].map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="block p-4 bg-gray-50 hover:bg-blue-50 rounded-lg text-center font-medium text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* CTA Section */}
        <section aria-labelledby="cta-heading" className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Don't See Your City Listed?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We may still serve your area! Contact us to check if we can provide pressure washing services at your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Contact Us Today
              </Link>
              <a
                href="tel:+12138416924"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (213) 841-6924
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
