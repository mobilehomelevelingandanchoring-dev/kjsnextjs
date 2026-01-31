import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | KJS Supreme Pressure Washing LLC - Central Florida',
  description: 'Learn about KJS Supreme Pressure Washing LLC - 9+ years serving Central Florida with professional pressure washing. Licensed, insured, eco-friendly. Serving Deltona, Orlando, Sanford & 30+ cities.',
  keywords: ['about KJS Supreme', 'pressure washing company', 'Central Florida pressure washing', 'licensed pressure washing', 'Deltona pressure washing company'],
  openGraph: {
    title: 'About KJS Supreme Pressure Washing LLC',
    description: 'Family-owned pressure washing company serving Central Florida for 9+ years. Licensed, insured, and committed to excellence.',
    type: 'website',
    locale: 'en_US',
    url: 'https://kjsupremepressurewashing.com/about',
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/about',
  },
};

// Structured Data for Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://kjsupremepressurewashing.com/#organization',
  name: 'KJS Supreme Pressure Washing LLC',
  description: 'Professional residential and commercial pressure washing services in Central Florida. Serving Deltona, Orlando, Sanford, and 30+ cities.',
  url: 'https://kjsupremepressurewashing.com',
  telephone: '+1-213-841-6924',
  foundingDate: '2016',
  founder: {
    '@type': 'Person',
    name: 'KJS Supreme Pressure Washing Team',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1757 S Village Dr',
    addressLocality: 'Deltona',
    addressRegion: 'FL',
    postalCode: '32725',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.9005',
    longitude: '-81.2637',
  },
  areaServed: [
    { '@type': 'City', name: 'Deltona, FL' },
    { '@type': 'City', name: 'Orlando, FL' },
    { '@type': 'City', name: 'Sanford, FL' },
    { '@type': 'City', name: 'Daytona Beach, FL' },
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '150',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section aria-labelledby="about-heading" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-blue-200">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><span aria-hidden="true">/</span></li>
                <li aria-current="page" className="text-white font-medium">About Us</li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <h1 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About KJS Supreme Pressure Washing
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                For over 9 years, we've been Central Florida's trusted choice for professional
                pressure washing services. Family values, professional results.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section aria-labelledby="story-heading" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <article>
                  <h2 id="story-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Our Story: Building Trust One Property at a Time
                  </h2>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      KJS Supreme Pressure Washing LLC was founded in Deltona, Florida with a simple mission:
                      provide honest, professional exterior cleaning services that genuinely protect and
                      beautify properties throughout Central Florida.
                    </p>
                    <p>
                      What started as a commitment to quality has grown into one of the most trusted
                      pressure washing companies in the region. Over the past 9+ years, we've served
                      more than 500 satisfied customers across Deltona, Orlando, Sanford, Daytona Beach,
                      and dozens of other Central Florida communities.
                    </p>
                    <p>
                      We understand that your home or business is your biggest investment. That's why
                      we treat every property as if it were our own, using professional-grade equipment,
                      eco-friendly cleaning solutions, and techniques refined through years of experience
                      in Florida's unique climate.
                    </p>
                  </div>
                </article>

                <aside className="bg-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">By the Numbers</h3>
                  <dl className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                      <dt className="text-sm text-gray-600 mb-1">Years in Business</dt>
                      <dd className="text-4xl font-bold text-blue-600">9+</dd>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                      <dt className="text-sm text-gray-600 mb-1">Happy Customers</dt>
                      <dd className="text-4xl font-bold text-blue-600">500+</dd>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                      <dt className="text-sm text-gray-600 mb-1">Google Rating</dt>
                      <dd className="text-4xl font-bold text-yellow-500">5.0</dd>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                      <dt className="text-sm text-gray-600 mb-1">Cities Served</dt>
                      <dd className="text-4xl font-bold text-blue-600">30+</dd>
                    </div>
                  </dl>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section aria-labelledby="values-heading" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600">
                These principles guide every job we take on, every interaction with customers,
                and every decision we make as a company.
              </p>
            </header>

            <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto" role="list">
              <li className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  Honest pricing, transparent communication, and always doing what we say we'll do.
                </p>
              </li>

              <li className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We never cut corners. Every job gets our full attention and professional expertise.
                </p>
              </li>

              <li className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  Eco-friendly solutions that protect your property, family, and Florida's environment.
                </p>
              </li>

              <li className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">
                  We're your neighbors, invested in keeping Central Florida properties beautiful.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Our Work Gallery */}
        <section aria-labelledby="work-gallery-heading" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <header className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="work-gallery-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                See Our Work in Action
              </h2>
              <p className="text-lg text-gray-600">
                Browse examples of our professional <Link href="/services" className="text-blue-600 hover:underline">pressure washing services</Link> across
                Central Florida communities.
              </p>
            </header>

            <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" role="list" aria-label="Work showcase gallery">
              <li>
                <figure className="group relative overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/images/house-washing-deltona-fl-01.jpg"
                    alt="Professional house washing service removing mold and mildew from home exterior in Deltona, FL"
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <Link href="/services/house-washing" className="text-white font-semibold block hover:text-yellow-300">House Washing</Link>
                    <span className="text-gray-300 text-sm">Deltona, FL</span>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="group relative overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/images/driveway-cleaning-orlando-fl-01.jpg"
                    alt="Driveway pressure washing removing oil stains and tire marks from concrete in Orlando, FL"
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <Link href="/services/driveway-cleaning" className="text-white font-semibold block hover:text-yellow-300">Driveway Cleaning</Link>
                    <span className="text-gray-300 text-sm">Orlando, FL</span>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="group relative overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/images/roof-cleaning-sanford-fl-01.jpg"
                    alt="Soft wash roof cleaning removing black algae streaks in Sanford, FL"
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <Link href="/services/roof-cleaning" className="text-white font-semibold block hover:text-yellow-300">Roof Cleaning</Link>
                    <span className="text-gray-300 text-sm">Sanford, FL</span>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="group relative overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/images/commercial-pressure-washing-orlando-fl-01.jpg"
                    alt="Commercial pressure washing for business property exterior in Orlando, FL"
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <Link href="/services/commercial-pressure-washing" className="text-white font-semibold block hover:text-yellow-300">Commercial Services</Link>
                    <span className="text-gray-300 text-sm">Orlando, FL</span>
                  </figcaption>
                </figure>
              </li>
            </ul>

            <div className="text-center mt-10">
              <Link href="/gallery" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
                View Full Gallery
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section aria-labelledby="why-choose-heading" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose KJS Supreme Pressure Washing?
              </h2>
              <p className="text-lg text-gray-600">
                When you hire us, you're getting more than just a pressure washing service.
                You're partnering with professionals who care about your property as much as you do.
              </p>
            </header>

            <div className="max-w-5xl mx-auto">
              <ul className="space-y-6" role="list">
                <li className="flex gap-6 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Licensed & Insured</h3>
                    <p className="text-gray-600">
                      Complete liability coverage protects your property and gives you peace of mind.
                      We carry comprehensive insurance and maintain all required business licenses
                      to operate throughout Florida.
                    </p>
                  </div>
                </li>

                <li className="flex gap-6 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Cleaning Solutions</h3>
                    <p className="text-gray-600">
                      We use biodegradable, environmentally responsible cleaning products that are
                      safe for your family, pets, and landscaping while still delivering powerful
                      cleaning results.
                    </p>
                  </div>
                </li>

                <li className="flex gap-6 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Professional-Grade Equipment</h3>
                    <p className="text-gray-600">
                      We invest in commercial-grade pressure washing equipment, surface cleaners,
                      and soft wash systems that deliver superior results compared to consumer-grade
                      alternatives.
                    </p>
                  </div>
                </li>

                <li className="flex gap-6 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">100% Satisfaction Guarantee</h3>
                    <p className="text-gray-600">
                      We're not satisfied until you are. If any area doesn't meet your expectations,
                      we'll return to address it at no additional charge. Your complete satisfaction
                      is our priority.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section aria-labelledby="service-area-heading" className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <header className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="service-area-heading" className="text-3xl md:text-4xl font-bold mb-6">
                Proudly Serving Central Florida
              </h2>
              <p className="text-lg text-blue-100">
                From our home base in Deltona, we provide professional pressure washing services
                throughout Volusia, Seminole, Orange, Lake, Osceola, and Polk counties.
              </p>
            </header>

            <div className="max-w-4xl mx-auto">
              <nav aria-label="Service locations">
                <ul className="flex flex-wrap justify-center gap-3" role="list">
                  {[
                    'Deltona', 'Orlando', 'Sanford', 'Daytona Beach', 'Lake Mary',
                    'Winter Park', 'Apopka', 'Altamonte Springs', 'Casselberry',
                    'DeBary', 'DeLand', 'Orange City', 'Oviedo', 'Winter Springs',
                    'Clermont', 'Kissimmee', 'Celebration'
                  ].map((city) => (
                    <li key={city}>
                      <Link
                        href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-block px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors"
                      >
                        {city}, FL
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <p className="text-center mt-8">
                <Link href="/locations" className="text-yellow-300 hover:text-yellow-200 font-semibold">
                  View All 30+ Service Areas →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section aria-labelledby="cta-heading" className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Ready to Experience the KJS Supreme Difference?
            </h2>
            <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote for your property. We'll assess your needs
              and provide honest recommendations tailored to your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors shadow-lg"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:+12138416924"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (213) 841-6924
              </a>
            </div>
          </div>
        </section>

        {/* Related Links with Images */}
        <section aria-labelledby="related-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 id="related-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Explore Our Services
            </h2>
            <nav aria-label="Related services">
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto" role="list">
                <li>
                  <Link href="/services/house-washing" className="group block bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow">
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src="/images/house-washing-deltona-fl-01.jpg"
                        alt="House washing service"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">House Washing</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/services/roof-cleaning" className="group block bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow">
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src="/images/roof-cleaning-sanford-fl-01.jpg"
                        alt="Roof cleaning service"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Roof Cleaning</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/services/driveway-cleaning" className="group block bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow">
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src="/images/driveway-cleaning-orlando-fl-01.jpg"
                        alt="Driveway cleaning service"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Driveway Cleaning</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial-pressure-washing" className="group block bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow">
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src="/images/commercial-pressure-washing-orlando-fl-01.jpg"
                        alt="Commercial pressure washing service"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Commercial</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </main>
    </>
  );
}
