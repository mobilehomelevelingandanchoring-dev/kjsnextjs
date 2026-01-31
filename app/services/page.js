import Link from 'next/link';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import { getCanonicalUrl } from '@/lib/seo-config';

export const metadata = {
  title: 'Pressure Washing Services Central Florida | Residential & Commercial | KJS Supreme',
  description: 'Professional pressure washing and soft washing services in Central Florida. House washing, driveway cleaning, roof cleaning, deck cleaning, paver sealing. Serving Deltona, Orlando, Sanford, Daytona Beach.',
  keywords: [
    'pressure washing services Central Florida',
    'soft washing services',
    'house washing',
    'driveway cleaning',
    'roof cleaning',
    'deck cleaning',
    'paver sealing',
    'commercial pressure washing',
    'residential pressure washing',
    'exterior cleaning services',
    'Deltona pressure washing',
    'Orlando pressure washing',
    'Sanford pressure washing'
  ],
  alternates: {
    canonical: getCanonicalUrl('/services'),
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
  openGraph: {
    title: 'Professional Pressure Washing Services | Central Florida',
    description: 'Complete exterior cleaning for homes and businesses. Soft washing, pressure washing, and specialized surface treatments throughout Central Florida.',
    url: getCanonicalUrl('/services'),
    siteName: 'KJS Supreme Pressure Washing LLC',
    locale: 'en_US',
    type: 'website',
    images: ['/images/house-washing-deltona-fl-01.jpg'],
  },
};

// FAQ Schema for Services page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What pressure washing services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer comprehensive exterior cleaning including house washing, driveway cleaning, roof cleaning, deck cleaning, paver cleaning and sealing, pool deck cleaning, fence cleaning, sidewalk cleaning, window cleaning, gutter cleaning, and commercial pressure washing. We use both pressure washing and soft washing depending on the surface."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between pressure washing and soft washing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pressure washing uses high-pressure water (1,500-4,000 PSI) to clean hard surfaces like concrete, brick, and pavers. Soft washing uses low pressure (under 500 PSI) with cleaning solutions to safely clean delicate surfaces like roofs, stucco, vinyl siding, and painted surfaces. We determine the right method based on your surface type."
      }
    },
    {
      "@type": "Question",
      "name": "Which surfaces need soft washing vs pressure washing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Soft washing is required for roofs, vinyl siding, stucco, painted surfaces, wood siding, and screen enclosures. Pressure washing is appropriate for concrete driveways, sidewalks, brick, stone, and pavers. Using the wrong method can damage surfaces, so professional assessment is important."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I have my home's exterior cleaned in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Central Florida's humid climate, we recommend house washing every 1-2 years, roof cleaning every 2-3 years, and driveway cleaning annually. Properties with heavy tree coverage or north-facing surfaces may need more frequent cleaning due to faster algae and mold growth."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer commercial pressure washing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide commercial pressure washing for storefronts, office buildings, parking lots, retail centers, restaurants, HOA common areas, churches, and multi-family properties. We offer flexible scheduling and maintenance contracts for ongoing service."
      }
    }
  ]
};

const services = [
  {
    name: 'House Washing',
    slug: 'house-washing',
    description: 'Complete exterior house cleaning to remove dirt, mold, and mildew from vinyl, stucco, brick, and wood siding.',
    image: '/images/house-washing-deltona-fl-01.jpg',
    alt: 'Professional house washing service removing mold and mildew from home exterior in Deltona, FL',
    location: 'Deltona, FL',
    method: 'soft',
  },
  {
    name: 'Driveway Cleaning',
    slug: 'driveway-cleaning',
    description: 'Deep cleaning for concrete and paver driveways to eliminate oil stains, tire marks, and organic growth.',
    image: '/images/driveway-cleaning-orlando-fl-01.jpg',
    alt: 'Driveway pressure washing removing stains from concrete in Orlando, FL',
    location: 'Orlando, FL',
    method: 'pressure',
  },
  {
    name: 'Roof Cleaning',
    slug: 'roof-cleaning',
    description: 'Gentle soft washing techniques to safely remove black streaks, algae, and moss while extending roof life.',
    image: '/images/roof-cleaning-sanford-fl-01.jpg',
    alt: 'Soft wash roof cleaning removing black algae streaks in Sanford, FL',
    location: 'Sanford, FL',
    method: 'soft',
  },
  {
    name: 'Deck Cleaning',
    slug: 'deck-cleaning',
    description: 'Professional cleaning for wood and composite decks to restore beauty and prevent weather damage.',
    image: '/images/deck-cleaning-oviedo-fl-01.jpg',
    alt: 'Wood deck pressure washing and restoration service in Oviedo, FL',
    location: 'Oviedo, FL',
    method: 'soft',
  },
  {
    name: 'Gutter Cleaning',
    slug: 'gutter-cleaning',
    description: 'Thorough gutter cleaning and exterior brightening to maintain proper drainage and curb appeal.',
    image: '/images/gutter-cleaning-casselberry-fl-01.jpg',
    alt: 'Gutter cleaning and brightening service removing tiger stripes in Casselberry, FL',
    location: 'Casselberry, FL',
    method: 'soft',
  },
  {
    name: 'Patio Cleaning',
    slug: 'patio-cleaning',
    description: 'Restore your outdoor living space with professional patio and lanai cleaning services.',
    image: '/images/patio-cleaning-lake-mary-fl-01.jpg',
    alt: 'Patio pressure washing restoring outdoor living space in Lake Mary, FL',
    location: 'Lake Mary, FL',
    method: 'pressure',
  },
  {
    name: 'Fence Cleaning',
    slug: 'fence-cleaning',
    description: 'Revitalize wood, vinyl, and metal fences with our expert pressure washing techniques.',
    image: '/images/fence-cleaning-deltona-fl-01.jpg',
    alt: 'Fence cleaning and restoration for wood and vinyl fences in Deltona, FL',
    location: 'Deltona, FL',
    method: 'soft',
  },
  {
    name: 'Pool Deck Cleaning',
    slug: 'pool-deck-cleaning',
    description: 'Safe and effective cleaning for pool decks to remove algae, mold, and create slip-resistant surfaces.',
    image: '/images/pool-deck-cleaning-daytona-beach-fl-01.jpg',
    alt: 'Pool deck pressure washing removing algae buildup in Daytona Beach, FL',
    location: 'Daytona Beach, FL',
    method: 'pressure',
  },
  {
    name: 'Sidewalk Cleaning',
    slug: 'sidewalk-cleaning',
    description: 'Remove gum, stains, and grime from sidewalks and walkways for safer, cleaner paths.',
    image: '/images/sidewalk-cleaning-winter-park-fl-01.jpg',
    alt: 'Sidewalk pressure washing removing stains and grime in Winter Park, FL',
    location: 'Winter Park, FL',
    method: 'pressure',
  },
  {
    name: 'Concrete Cleaning',
    slug: 'concrete-cleaning',
    description: 'Deep cleaning for all concrete surfaces including patios, garage floors, and parking areas.',
    image: '/images/concrete-cleaning-apopka-fl-01.jpg',
    alt: 'Concrete surface cleaning and stain removal in Apopka, FL',
    location: 'Apopka, FL',
    method: 'pressure',
  },
  {
    name: 'Paver Cleaning & Sealing',
    slug: 'paver-cleaning',
    description: 'Professional paver restoration including cleaning, re-sanding joints, and protective sealing.',
    image: '/images/paver-sealing-kissimmee-fl-01.jpg',
    alt: 'Paver cleaning and sealing service restoring brick pavers in Kissimmee, FL',
    location: 'Kissimmee, FL',
    method: 'pressure',
  },
  {
    name: 'Soft Washing',
    slug: 'soft-washing',
    description: 'Low-pressure cleaning for delicate surfaces like stucco, painted surfaces, screens, and lanais.',
    image: '/images/soft-washing-debary-fl-01.jpg',
    alt: 'Soft washing service for delicate exterior surfaces in DeBary, FL',
    location: 'DeBary, FL',
    method: 'soft',
  },
  {
    name: 'Window Cleaning',
    slug: 'window-cleaning',
    description: 'Crystal clear windows with our professional exterior window cleaning for homes and businesses.',
    image: '/images/window-cleaning-celebration-fl-01.jpg',
    alt: 'Exterior window cleaning service for streak-free results in Celebration, FL',
    location: 'Celebration, FL',
    method: 'soft',
  },
  {
    name: 'Commercial Pressure Washing',
    slug: 'commercial-pressure-washing',
    description: 'Large-scale cleaning solutions for storefronts, parking lots, and commercial properties.',
    image: '/images/commercial-pressure-washing-orlando-fl-01.jpg',
    alt: 'Commercial pressure washing for business exterior in Orlando, FL',
    location: 'Orlando, FL',
    method: 'both',
  },
];

export default function ServicesPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'Services', url: 'https://kjsupremepressurewashing.com/services' },
  ];

  return (
    <>
      <StructuredData data={[
        generateLocalBusinessSchema(),
        generateBreadcrumbSchema(breadcrumbs),
        faqSchema,
      ]} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section aria-labelledby="services-heading" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-blue-200">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><span aria-hidden="true">/</span></li>
                <li aria-current="page" className="text-white font-medium">Services</li>
              </ol>
            </nav>
            <h1 id="services-heading" className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Professional Pressure Washing Services in Central Florida
            </h1>
            <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto mb-6">
              Complete exterior cleaning solutions for residential and commercial properties.
              We use the right method for each surface—<Link href="/services/soft-washing" className="underline hover:text-white">soft washing</Link> for
              delicate materials, pressure washing for hard surfaces—to deliver exceptional results without damage.
            </p>
            <p className="text-lg text-blue-200 text-center max-w-2xl mx-auto">
              Serving Deltona, Orlando, Sanford, Lake Mary, Daytona Beach, and communities throughout Central Florida.
            </p>
          </div>
        </section>

        {/* Florida Context Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Why Florida Homes Need Regular Exterior Cleaning</h2>
            <p className="text-lg text-gray-600 mb-6 text-center leading-relaxed">
              Central Florida's humid subtropical climate creates ideal conditions for mold, mildew, algae, and organic growth
              on every exterior surface. With over 50 inches of annual rainfall and humidity regularly exceeding 80%,
              your home's exterior faces challenges that homeowners in drier climates never experience.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1-2 Years</div>
                <p className="text-gray-600 text-sm">Recommended house washing frequency</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2-3 Years</div>
                <p className="text-gray-600 text-sm">Recommended roof cleaning frequency</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Annually</div>
                <p className="text-gray-600 text-sm">Recommended driveway cleaning</p>
              </div>
            </div>
          </div>
        </section>

        {/* Method Comparison Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">We Use the Right Method for Every Surface</h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Using the wrong cleaning method can cause expensive damage. We assess each surface and apply
              the appropriate technique to ensure thorough cleaning without harm.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  <Link href="/services/soft-washing" className="hover:text-blue-600">Soft Washing</Link>
                  <span className="text-sm font-normal text-gray-500 ml-2">(Under 500 PSI)</span>
                </h3>
                <p className="text-gray-600 mb-4">
                  Low-pressure cleaning with specialized solutions that kill mold, mildew, and algae at the root level.
                  Results last 2-4 times longer than pressure washing.
                </p>
                <h4 className="font-semibold text-gray-800 mb-2">Best For:</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> <Link href="/services/roof-cleaning" className="text-blue-600 hover:underline">Roof cleaning</Link> (shingles, tile, metal)</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> <Link href="/services/house-washing" className="text-blue-600 hover:underline">House washing</Link> (vinyl, stucco, painted)</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> <Link href="/services/deck-cleaning" className="text-blue-600 hover:underline">Wood decks</Link> and fences</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Screen enclosures and pool cages</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> <Link href="/services/window-cleaning" className="text-blue-600 hover:underline">Windows</Link> and gutters</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Pressure Washing
                  <span className="text-sm font-normal text-gray-500 ml-2">(1,500-4,000 PSI)</span>
                </h3>
                <p className="text-gray-600 mb-4">
                  High-pressure water to remove embedded dirt, stains, and organic matter from hard surfaces.
                  Ideal for tough cleaning jobs on durable materials.
                </p>
                <h4 className="font-semibold text-gray-800 mb-2">Best For:</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li className="flex items-center"><span className="text-blue-500 mr-2">→</span> <Link href="/services/driveway-cleaning" className="text-blue-600 hover:underline">Concrete driveways</Link></li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">→</span> <Link href="/services/sidewalk-cleaning" className="text-blue-600 hover:underline">Sidewalks</Link> and walkways</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">→</span> <Link href="/services/paver-cleaning" className="text-blue-600 hover:underline">Brick and stone pavers</Link></li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">→</span> <Link href="/services/pool-deck-cleaning" className="text-blue-600 hover:underline">Pool decks</Link> and patios</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">→</span> <Link href="/services/concrete-cleaning" className="text-blue-600 hover:underline">Concrete surfaces</Link></li>
                </ul>
              </div>
            </div>

            <p className="text-center mt-6 text-gray-600">
              <Link href="/faq" className="text-blue-600 hover:underline">Visit our FAQ page</Link> for detailed guidance on choosing the right cleaning method.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section aria-labelledby="all-services-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 id="all-services-heading" className="text-3xl font-bold mb-4 text-gray-900 text-center">Our Pressure Washing Services</h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Click any service below to learn more about our process, see before/after results, and get answers to common questions.
            </p>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" role="list">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden border border-gray-100"
                  >
                    <figure>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          {service.location}
                        </div>
                        <div className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full ${
                          service.method === 'soft' ? 'bg-green-500 text-white' :
                          service.method === 'pressure' ? 'bg-blue-500 text-white' :
                          'bg-purple-500 text-white'
                        }`}>
                          {service.method === 'soft' ? 'Soft Wash' : service.method === 'pressure' ? 'Pressure Wash' : 'Both Methods'}
                        </div>
                      </div>
                      <figcaption className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                        <span className="inline-flex items-center text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                          Learn More
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </figcaption>
                    </figure>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Residential vs Commercial */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Residential & Commercial Services</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  <Link href="/residential" className="hover:text-blue-600">Residential Cleaning</Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete home exterior cleaning for single-family homes, townhouses, and condos throughout Central Florida.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> Full house washing packages</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> Driveway and walkway cleaning</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> Roof cleaning and maintenance</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> Pool cage and screen cleaning</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> HOA compliance cleaning</li>
                </ul>
                <Link href="/residential" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                  View Residential Services →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  <Link href="/commercial" className="hover:text-blue-600">Commercial Cleaning</Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional-grade cleaning for businesses, retail centers, and commercial properties with flexible scheduling.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> Storefront and facade cleaning</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> Parking lot and garage cleaning</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> Restaurant exterior cleaning</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> HOA common area maintenance</li>
                  <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> Ongoing maintenance contracts</li>
                </ul>
                <Link href="/commercial" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                  View Commercial Services →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <details className="bg-gray-50 border border-gray-200 rounded-lg p-4 group">
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  What pressure washing services do you offer?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3">
                  We offer comprehensive exterior cleaning including <Link href="/services/house-washing" className="text-blue-600 hover:underline">house washing</Link>,
                  <Link href="/services/driveway-cleaning" className="text-blue-600 hover:underline"> driveway cleaning</Link>,
                  <Link href="/services/roof-cleaning" className="text-blue-600 hover:underline"> roof cleaning</Link>,
                  <Link href="/services/deck-cleaning" className="text-blue-600 hover:underline"> deck cleaning</Link>,
                  <Link href="/services/paver-cleaning" className="text-blue-600 hover:underline"> paver cleaning and sealing</Link>,
                  pool deck cleaning, fence cleaning, sidewalk cleaning, window cleaning, gutter cleaning,
                  and <Link href="/services/commercial-pressure-washing" className="text-blue-600 hover:underline">commercial pressure washing</Link>.
                </p>
              </details>

              <details className="bg-gray-50 border border-gray-200 rounded-lg p-4 group">
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  What's the difference between pressure washing and soft washing?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3">
                  <Link href="/services/soft-washing" className="text-blue-600 hover:underline">Soft washing</Link> uses
                  low pressure (under 500 PSI) with cleaning solutions to safely clean delicate surfaces like roofs, stucco,
                  and vinyl siding. Pressure washing uses high pressure (1,500-4,000 PSI) to clean hard surfaces like
                  concrete and brick. We determine the right method based on your surface type.
                </p>
              </details>

              <details className="bg-gray-50 border border-gray-200 rounded-lg p-4 group">
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  How often should I have my home's exterior cleaned in Florida?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3">
                  In Central Florida's humid climate, we recommend house washing every 1-2 years, roof cleaning every 2-3 years,
                  and driveway cleaning annually. Properties with heavy tree coverage or north-facing surfaces may need more
                  frequent cleaning. Visit our <Link href="/faq" className="text-blue-600 hover:underline">FAQ page</Link> for
                  detailed maintenance guidance.
                </p>
              </details>

              <details className="bg-gray-50 border border-gray-200 rounded-lg p-4 group">
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  Do you offer commercial pressure washing services?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3">
                  Yes, we provide <Link href="/services/commercial-pressure-washing" className="text-blue-600 hover:underline">commercial pressure washing</Link> for
                  storefronts, office buildings, parking lots, retail centers, restaurants, HOA common areas, churches,
                  and multi-family properties. We offer flexible scheduling and maintenance contracts for ongoing service.
                </p>
              </details>

              <details className="bg-gray-50 border border-gray-200 rounded-lg p-4 group">
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  What areas do you serve?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-3">
                  We serve all of Central Florida including Deltona, Orlando, Sanford, Lake Mary, Daytona Beach, DeBary,
                  Orange City, Winter Park, Oviedo, Casselberry, Apopka, Kissimmee, Celebration, and surrounding communities.
                  Visit our <Link href="/locations" className="text-blue-600 hover:underline">locations page</Link> for a full
                  list of service areas.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section aria-labelledby="cta-heading" className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us for a free, no-obligation quote. We'll assess your property and recommend the best services
              for your needs—no pressure, no upsells.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Get a Free Quote
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
