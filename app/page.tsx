import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

// FAQ Schema for Home Page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the difference between pressure washing and soft washing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pressure washing uses high-pressure water (1,500-4,000 PSI) to clean hard surfaces like concrete driveways and pavers. Soft washing uses low pressure (under 500 PSI) with specialized cleaning solutions to safely clean delicate surfaces like roofs, vinyl siding, and stucco without causing damage. Professional cleaners determine the right method based on surface type."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I have my home pressure washed in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Due to Central Florida's humid subtropical climate, we recommend house washing every 1-2 years, roof cleaning every 2-3 years, and driveway cleaning annually. Properties in heavily shaded areas or with north-facing surfaces may benefit from more frequent cleaning due to faster algae and mold growth."
      }
    },
    {
      "@type": "Question",
      "name": "Are your cleaning solutions safe for my plants and pets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We use eco-friendly, biodegradable cleaning solutions that are safe for your landscaping, pets, and family. We pre-wet vegetation before cleaning and rinse plants afterward to ensure their protection. Our solutions break down quickly and leave no harmful residue."
      }
    },
    {
      "@type": "Question",
      "name": "Can pressure washing damage my property?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When done incorrectly, yes. That's why professional service matters. Our trained technicians know the right pressure levels and techniques for each surface type. We use soft washing for delicate surfaces like roofs and siding, and only use high pressure on durable surfaces like concrete. We never use excessive pressure that could damage surfaces."
      }
    },
    {
      "@type": "Question",
      "name": "What causes the black streaks on my roof?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Black streaks on roofs are caused by Gloeocapsa magma, a cyanobacteria (blue-green algae) that feeds on limestone in asphalt shingles. This organism thrives in Florida's humid climate and produces a dark protective sheath. Left untreated, it can shorten roof lifespan and increase energy costs. Soft washing is the only safe and effective removal method."
      }
    }
  ]
};

export const metadata: Metadata = {
  title: 'Pressure Washing Services Central Florida | Deltona, Orlando, Sanford | KJS Supreme',
  description: 'Professional pressure washing & soft washing in Central Florida. House washing, roof cleaning, driveway cleaning serving Deltona, Orlando, Sanford. 9+ years experience, eco-friendly. Free quotes: (213) 841-6924.',
  keywords: 'pressure washing Central Florida, soft washing, house washing Deltona, driveway cleaning Orlando, roof cleaning Sanford, exterior cleaning, mold removal, algae removal, commercial pressure washing, residential pressure washing',
  openGraph: {
    title: 'Professional Pressure Washing Services in Central Florida | KJS Supreme Pressure Washing LLC',
    description: 'Expert residential and commercial pressure washing services. Restore your property curb appeal with eco-friendly cleaning solutions.',
    type: 'website',
    locale: 'en_US',
    images: ['/images/house-washing-deltona-fl-01.jpg'],
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com',
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative text-white overflow-hidden min-h-[600px]" aria-labelledby="hero-heading">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/house-washing-deltona-fl-01.jpg"
            alt="Professional house washing service in Deltona, FL - KJS Supreme Pressure Washing transforming home exteriors"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-900/90" />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/30 rounded-full text-sm font-semibold backdrop-blur-sm">
              Trusted by 500+ Central Florida Property Owners
            </div>

            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Pressure Washing Services Across{' '}
              <span className="text-yellow-300">Central Florida</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              KJS Supreme Pressure Washing LLC delivers expert residential and commercial exterior cleaning
              throughout Deltona, Orlando, Sanford, and surrounding communities. We restore curb appeal,
              protect your property investment, and use eco-friendly solutions safe for your family and landscaping.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:+12138416924"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-200 border-2 border-white/30"
              >
                Call (213) 841-6924
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">9+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">5★</div>
                <div className="text-sm text-blue-200">Google Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Contextual Introduction - Trust Building */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Your Neighbors Trust Us to Keep Central Florida Properties Looking Their Best
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  For over nine years, KJS Supreme Pressure Washing LLC has been the go-to choice for
                  homeowners and business owners throughout Central Florida. Based right here in Deltona
                  at 1757 S Village Dr, we understand the unique challenges that Florida's subtropical
                  climate presents to property exteriors.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Our founder started this company with a simple mission: provide honest, professional
                  pressure washing services that genuinely protect and beautify properties. Today, that
                  commitment drives every job we take on, from a single driveway cleaning to full
                  commercial property maintenance programs.
                </p>
                <p className="text-lg text-gray-600">
                  We're fully licensed, insured, and dedicated to using the latest equipment and
                  eco-friendly cleaning solutions. When you work with us, you're working with local
                  professionals who take pride in our community and our craft.
                </p>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Fully Licensed & Insured</div>
                      <div className="text-sm text-gray-600">Complete liability coverage for your peace of mind</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">9+ Years Local Experience</div>
                      <div className="text-sm text-gray-600">Deep knowledge of Central Florida properties</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">5-Star Google Reviews</div>
                      <div className="text-sm text-gray-600">Trusted by hundreds of satisfied customers</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Eco-Friendly Solutions</div>
                      <div className="text-sm text-gray-600">Safe for your family, pets, and landscaping</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Awareness Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Central Florida Properties Need Regular Pressure Washing
            </h2>
            <p className="text-lg text-gray-600">
              Florida's warm, humid climate creates the perfect environment for mold, mildew, algae,
              and organic growth to thrive on your property's exterior surfaces. Without regular
              maintenance, these contaminants can cause serious damage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mold & Mildew Growth</h3>
              <p className="text-gray-600">
                Florida's 70%+ humidity levels create ideal conditions for mold and mildew to spread
                rapidly across siding, roofs, and concrete surfaces, potentially causing health concerns
                and structural damage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Algae & Black Streaks</h3>
              <p className="text-gray-600">
                <strong>Gloeocapsa magma</strong>, the cyanobacteria causing those black roof streaks, feeds on
                limestone in shingles. Left untreated, it shortens roof lifespan and increases energy costs.
                Only <Link href="/services/soft-washing" className="text-blue-600 hover:underline">soft washing</Link> safely removes it.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Property Value Decline</h3>
              <p className="text-gray-600">
                Dirty exteriors can reduce property value by 5-10%. Curb appeal matters for home sales,
                rental properties, and simply taking pride in your investment. First impressions are lasting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Structural Damage</h3>
              <p className="text-gray-600">
                Organic growth holds moisture against surfaces, accelerating rot in wood, degradation
                of paint, and deterioration of concrete. Prevention through cleaning costs far less than repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Gallery Section */}
      <section className="py-20 bg-white" aria-labelledby="featured-work-heading">
        <div className="container mx-auto px-4">
          <header className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
              See Our Results
            </span>
            <h2 id="featured-work-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Recent Pressure Washing Projects in Central Florida
            </h2>
            <p className="text-lg text-gray-600">
              Browse our portfolio of completed work across Deltona, Orlando, Sanford, and surrounding communities.
              Every project showcases our commitment to quality exterior cleaning.
            </p>
          </header>

          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" role="list" aria-label="Featured pressure washing projects gallery">
            <li>
              <figure className="group relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/house-washing-deltona-fl-01.jpg"
                  alt="Professional house washing service removing mold and mildew from exterior siding in Deltona, Florida"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="text-white font-semibold block">House Washing</span>
                  <span className="text-gray-300 text-sm">Deltona, FL</span>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className="group relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/driveway-cleaning-orlando-fl-01.jpg"
                  alt="Driveway pressure washing removing oil stains and tire marks from concrete in Orlando, Florida"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="text-white font-semibold block">Driveway Cleaning</span>
                  <span className="text-gray-300 text-sm">Orlando, FL</span>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className="group relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/roof-cleaning-sanford-fl-01.jpg"
                  alt="Soft wash roof cleaning removing black algae streaks from shingles in Sanford, Florida"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="text-white font-semibold block">Roof Cleaning</span>
                  <span className="text-gray-300 text-sm">Sanford, FL</span>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className="group relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/pool-deck-cleaning-daytona-beach-fl-01.jpg"
                  alt="Pool deck pressure washing removing algae and creating slip-resistant surface in Daytona Beach, Florida"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="text-white font-semibold block">Pool Deck Cleaning</span>
                  <span className="text-gray-300 text-sm">Daytona Beach, FL</span>
                </figcaption>
              </figure>
            </li>
          </ul>

          <div className="text-center mt-10">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              View Full Gallery
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Cluster Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Complete Exterior Cleaning Solutions
            </div>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Pressure Washing Services for Every Need
            </h2>
            <p className="text-lg text-gray-600">
              From gentle soft washing for delicate surfaces to high-pressure cleaning for tough stains,
              we have the expertise and equipment to handle any exterior cleaning challenge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/services/house-washing" className="group bg-gray-50 hover:bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">House Washing</h3>
              <p className="text-gray-600 mb-4">
                Complete exterior cleaning for vinyl, stucco, brick, and wood siding. Our soft wash
                method safely removes years of dirt, mold, and mildew without damaging your home's surfaces.
              </p>
              <span className="text-blue-600 font-semibold">Learn More →</span>
            </Link>

            <Link href="/services/roof-cleaning" className="group bg-gray-50 hover:bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Roof Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Gentle soft washing removes black streaks, algae, and moss from shingle, tile, and
                metal roofs. Extend your roof's lifespan and improve energy efficiency without damage.
              </p>
              <span className="text-blue-600 font-semibold">Learn More →</span>
            </Link>

            <Link href="/services/driveway-cleaning" className="group bg-gray-50 hover:bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Driveway Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Deep cleaning for concrete and paver driveways eliminates oil stains, tire marks,
                rust, and organic growth. Restore your driveway's original appearance and prevent slip hazards.
              </p>
              <span className="text-blue-600 font-semibold">Learn More →</span>
            </Link>

            <Link href="/services/gutter-cleaning" className="group bg-gray-50 hover:bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
              <div className="text-5xl mb-4">🌧️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Gutter Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Complete gutter cleaning inside and out. We remove debris, ensure proper drainage,
                and brighten gutter faces to eliminate those unsightly black streaks and tiger stripes.
              </p>
              <span className="text-blue-600 font-semibold">Learn More →</span>
            </Link>

            <Link href="/services/patio-cleaning" className="group bg-gray-50 hover:bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
              <div className="text-5xl mb-4">🪴</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Patio & Deck Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Restore your outdoor living spaces with professional cleaning for concrete patios,
                pavers, wood decks, and composite decking. Safe methods preserve your investment.
              </p>
              <span className="text-blue-600 font-semibold">Learn More →</span>
            </Link>

            <Link href="/services/pool-deck-cleaning" className="group bg-gray-50 hover:bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
              <div className="text-5xl mb-4">🏊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Pool Deck & Screen Enclosures</h3>
              <p className="text-gray-600 mb-4">
                Safe cleaning for pool decks and lanai screen enclosures. Remove slippery algae,
                restore brightness, and create a safer, more inviting pool area for your family.
              </p>
              <span className="text-blue-600 font-semibold">Learn More →</span>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Residential vs Commercial Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serving Both Residential & Commercial Properties
            </h2>
            <p className="text-lg text-gray-300">
              Whether you're a homeowner wanting to restore your property's curb appeal or a business
              owner needing to maintain a professional appearance, we have tailored solutions for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Residential Services</h3>
              <p className="text-gray-300 mb-6">
                Your home is your biggest investment. Our residential pressure washing services help
                protect that investment while creating a clean, welcoming environment for your family.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-2">✓</span> Complete house exterior washing
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-2">✓</span> Driveway and walkway cleaning
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-2">✓</span> Roof soft washing
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-2">✓</span> Deck and patio restoration
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-2">✓</span> Fence and pool cage cleaning
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-2">✓</span> Gutter cleaning and brightening
                </li>
              </ul>
              <Link href="/residential" className="inline-block mt-6 text-yellow-300 font-semibold hover:text-yellow-200">
                Explore Residential Services →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Commercial Services</h3>
              <p className="text-gray-300 mb-6">
                First impressions matter in business. Keep your commercial property looking professional
                with our comprehensive cleaning services designed for businesses of all sizes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-2">✓</span> Storefront and building washing
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-2">✓</span> Parking lot and garage cleaning
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-2">✓</span> Sidewalk and entrance maintenance
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-2">✓</span> Dumpster pad sanitization
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-2">✓</span> Graffiti removal
                </li>
                <li className="flex items-center text-gray-200">
                  <span className="text-green-400 mr-2">✓</span> Scheduled maintenance programs
                </li>
              </ul>
              <Link href="/commercial" className="inline-block mt-6 text-yellow-300 font-semibold hover:text-yellow-200">
                Explore Commercial Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section with Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
              Proudly Serving Central Florida
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Pressure Washing Throughout Central Florida
            </h2>
            <p className="text-lg text-gray-600">
              From our home base in Deltona, we serve communities across Volusia, Seminole, Orange,
              Lake, Osceola, and Polk counties. Our team travels throughout the region to deliver
              exceptional exterior cleaning services.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Volusia County</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li><Link href="/locations/deltona" className="hover:text-blue-600">Deltona (HQ)</Link></li>
                      <li><Link href="/locations/deland" className="hover:text-blue-600">DeLand</Link></li>
                      <li><Link href="/locations/daytona-beach" className="hover:text-blue-600">Daytona Beach</Link></li>
                      <li><Link href="/locations/port-orange" className="hover:text-blue-600">Port Orange</Link></li>
                      <li><Link href="/locations/debary" className="hover:text-blue-600">DeBary</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Seminole County</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li><Link href="/locations/sanford" className="hover:text-blue-600">Sanford</Link></li>
                      <li><Link href="/locations/lake-mary" className="hover:text-blue-600">Lake Mary</Link></li>
                      <li><Link href="/locations/altamonte-springs" className="hover:text-blue-600">Altamonte Springs</Link></li>
                      <li><Link href="/locations/casselberry" className="hover:text-blue-600">Casselberry</Link></li>
                      <li><Link href="/locations/winter-springs" className="hover:text-blue-600">Winter Springs</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Orange County</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li><Link href="/locations/orlando" className="hover:text-blue-600">Orlando</Link></li>
                      <li><Link href="/locations/winter-park" className="hover:text-blue-600">Winter Park</Link></li>
                      <li><Link href="/locations/apopka" className="hover:text-blue-600">Apopka</Link></li>
                      <li><Link href="/locations/winter-garden" className="hover:text-blue-600">Winter Garden</Link></li>
                      <li><Link href="/locations/zellwood" className="hover:text-blue-600">Zellwood</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Lake County</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li><Link href="/locations/tavares" className="hover:text-blue-600">Tavares</Link></li>
                      <li><Link href="/locations/mount-dora" className="hover:text-blue-600">Mount Dora</Link></li>
                      <li><Link href="/locations/clermont" className="hover:text-blue-600">Clermont</Link></li>
                      <li><Link href="/locations/eustis" className="hover:text-blue-600">Eustis</Link></li>
                    </ul>
                  </div>
                </div>
                <Link href="/locations" className="inline-block mt-6 text-blue-600 font-semibold hover:text-blue-700">
                  View All Service Areas →
                </Link>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1795352.9134898128!2d-81.646989!3d28.493136099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd10249a5fd6bd%3A0x1c8ca282e17f348d!2sCentral%20Florida%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1769783711791!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KJS Supreme Pressure Washing Service Area - Central Florida"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - E-E-A-T Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Central Florida Trusts KJS Supreme Pressure Washing
            </h2>
            <p className="text-lg text-gray-600">
              When you choose us, you're choosing a locally-owned company that's built its reputation
              on quality work, honest pricing, and genuine customer care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">9+ Years of Experience</h3>
              <p className="text-gray-600">
                Nearly a decade serving Central Florida has given us deep expertise in handling every
                type of surface and cleaning challenge unique to our region's climate.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fully Licensed & Insured</h3>
              <p className="text-gray-600">
                Complete liability insurance protects your property and gives you peace of mind.
                We're properly licensed to operate throughout Florida.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">5-Star Customer Reviews</h3>
              <p className="text-gray-600">
                Our customers consistently rate us 5 stars for quality, professionalism, and results.
                We let our work and our reviews speak for themselves.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">
                We use biodegradable, environmentally responsible cleaning solutions that are safe
                for your family, pets, and landscaping while still delivering powerful results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Equipment</h3>
              <p className="text-gray-600">
                We invest in commercial-grade pressure washing equipment and surface cleaners that
                deliver superior results compared to consumer-grade alternatives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local & Responsive</h3>
              <p className="text-gray-600">
                As a local business, we're invested in our community. We respond quickly, show up
                when promised, and stand behind every job we complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Our Pressure Washing Process Works
            </h2>
            <p className="text-lg text-gray-600">
              We've streamlined our process to make professional pressure washing easy and stress-free
              for you. Here's what to expect when you work with KJS Supreme.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Request Your Free Quote</h3>
                  <p className="text-gray-600">
                    Call us at (213) 841-6924 or fill out our online contact form. Tell us about your
                    property and what you'd like cleaned. We'll schedule a convenient time to assess
                    your needs and provide a detailed, no-obligation estimate.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Property Assessment</h3>
                  <p className="text-gray-600">
                    We'll evaluate your property's surfaces, identify the types of staining or growth
                    present, and determine the best cleaning approach. This ensures we use the right
                    pressure levels and cleaning solutions for optimal results without any damage.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Preparation & Protection</h3>
                  <p className="text-gray-600">
                    Before we begin, we protect your landscaping, cover electrical outlets, close windows,
                    and ensure the work area is safe. We take precautions to prevent any water intrusion
                    or damage to surrounding areas.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Cleaning</h3>
                  <p className="text-gray-600">
                    Using the appropriate method—soft washing for delicate surfaces or pressure washing
                    for tough stains—we thoroughly clean every inch of the designated areas. Our eco-friendly
                    solutions break down organic growth while our equipment removes years of buildup.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">5</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Final Walkthrough & Satisfaction Guarantee</h3>
                  <p className="text-gray-600">
                    We conduct a thorough inspection with you to ensure every area meets our high standards
                    and your expectations. We're not satisfied until you are. If anything needs attention,
                    we address it immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our pressure washing services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What's the difference between pressure washing and soft washing?
              </h3>
              <p className="text-gray-600">
                Pressure washing uses high-pressure water (1,500-4,000 PSI) to clean hard surfaces like{' '}
                <Link href="/services/driveway-cleaning" className="text-blue-600 hover:underline">concrete driveways</Link>.{' '}
                <Link href="/services/soft-washing" className="text-blue-600 hover:underline">Soft washing</Link> uses
                low pressure with specialized solutions to safely clean delicate surfaces like{' '}
                <Link href="/services/roof-cleaning" className="text-blue-600 hover:underline">roofs</Link>,{' '}
                <Link href="/services/house-washing" className="text-blue-600 hover:underline">siding</Link>, and painted surfaces.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How often should I have my home pressure washed in Florida?
              </h3>
              <p className="text-gray-600">
                Due to Central Florida's humid climate, we recommend <Link href="/services/house-washing" className="text-blue-600 hover:underline">house washing</Link> every
                1-2 years, <Link href="/services/roof-cleaning" className="text-blue-600 hover:underline">roof cleaning</Link> every 2-3 years,
                and <Link href="/services/driveway-cleaning" className="text-blue-600 hover:underline">driveway cleaning</Link> annually.
                Properties in heavily shaded areas may need more frequent cleaning. See our{' '}
                <Link href="/faq" className="text-blue-600 hover:underline">FAQ page</Link> for detailed guidance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Are your cleaning solutions safe for my plants and pets?
              </h3>
              <p className="text-gray-600">
                Yes. We use eco-friendly, biodegradable cleaning solutions that are safe for your
                landscaping, pets, and family. We pre-wet vegetation before cleaning and rinse plants
                afterward to ensure their protection. Our solutions break down quickly in the environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What causes the black streaks on my roof?
              </h3>
              <p className="text-gray-600">
                Black streaks are caused by Gloeocapsa magma, a cyanobacteria that feeds on limestone in shingles.
                It thrives in Florida's humidity and can shorten roof lifespan.{' '}
                <Link href="/services/soft-washing" className="text-blue-600 hover:underline">Soft washing</Link> is
                the only safe removal method. Learn more on our{' '}
                <Link href="/services/roof-cleaning" className="text-blue-600 hover:underline">roof cleaning page</Link>.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Can pressure washing damage my property?
              </h3>
              <p className="text-gray-600">
                When done incorrectly, yes. That's why professional service matters. We use{' '}
                <Link href="/services/soft-washing" className="text-blue-600 hover:underline">soft washing</Link> for
                delicate surfaces like roofs and siding, and only use high pressure on durable surfaces like concrete.
                See our <Link href="/services" className="text-blue-600 hover:underline">services page</Link> for details on each method.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied Central Florida property owners who trust KJS Supreme
              Pressure Washing for their exterior cleaning needs. Get your free quote today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:+12138416924"
                className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Call (213) 841-6924
              </a>
            </div>

            <div className="text-blue-200">
              <p className="mb-2">
                <strong className="text-white">KJS Supreme Pressure Washing LLC</strong>
              </p>
              <p>1757 S Village Dr, Deltona, FL 32725</p>
              <p>Serving Deltona, Orlando, Sanford, and all of Central Florida</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* LocalBusiness Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "KJS Supreme Pressure Washing LLC",
            "image": "https://kjssupremepressurewashing.com/logo.webp",
            "description": "Professional residential and commercial pressure washing services in Central Florida. Serving Deltona, Orlando, Sanford, and surrounding areas with eco-friendly cleaning solutions.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1757 S Village Dr",
              "addressLocality": "Deltona",
              "addressRegion": "FL",
              "postalCode": "32725",
              "addressCountry": "US"
            },
            "telephone": "+1-213-841-6924",
            "url": "https://kjssupremepressurewashing.com",
            "areaServed": [
              "Deltona, FL",
              "Orlando, FL",
              "Sanford, FL",
              "DeLand, FL",
              "Daytona Beach, FL",
              "Apopka, FL",
              "Casselberry, FL",
              "Winter Springs, FL",
              "Lake Mary, FL",
              "Altamonte Springs, FL"
            ],
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "150"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "07:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/kjssupremepressurewashing",
              "https://www.instagram.com/kjssupremepressurewashing"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pressure Washing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "House Washing",
                    "description": "Complete exterior house cleaning including siding, soffits, and trim"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Roof Cleaning",
                    "description": "Soft wash roof cleaning to remove algae, moss, and black streaks"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Driveway Cleaning",
                    "description": "High-pressure concrete and paver driveway cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Pressure Washing",
                    "description": "Professional cleaning for businesses, storefronts, and commercial properties"
                  }
                }
              ]
            }
          })
        }}
      />
    </>
  );
}
