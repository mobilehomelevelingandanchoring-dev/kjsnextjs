import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'House Washing Services Central Florida | Soft Wash Exterior Cleaning | KJS Supreme',
  description: 'Professional house washing in Central Florida. Safe soft wash removes mold, mildew, algae from vinyl, stucco, brick siding. Serving Deltona, Orlando, Sanford & 30+ cities. Free quotes!',
  keywords: [
    'house washing Central Florida',
    'exterior house cleaning',
    'soft wash house',
    'pressure wash house Orlando',
    'mold removal siding',
    'vinyl siding cleaning',
    'stucco cleaning Florida',
    'house washing near me',
  ],
  openGraph: {
    title: 'Professional House Washing Services | KJS Supreme Pressure Washing',
    description: 'Restore your home\'s curb appeal with professional soft wash house cleaning. Safe for all siding types. Serving Central Florida.',
    type: 'website',
    locale: 'en_US',
    url: 'https://kjsupremepressurewashing.com/services/house-washing',
    images: ['/images/house-washing-deltona-fl-01.jpg'],
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/services/house-washing',
  },
};

// Service schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'House Washing Services',
  description: 'Professional soft wash house washing services to remove mold, mildew, algae, and dirt from home exteriors in Central Florida.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'KJS Supreme Pressure Washing LLC',
    telephone: '+1-213-841-6924',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1757 S Village Dr',
      addressLocality: 'Deltona',
      addressRegion: 'FL',
      postalCode: '32725',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Deltona, FL' },
    { '@type': 'City', name: 'Orlando, FL' },
    { '@type': 'City', name: 'Sanford, FL' },
    { '@type': 'City', name: 'Daytona Beach, FL' },
  ],
  serviceType: 'House Washing',
};

// FAQ data for this page
const faqItems = [
  {
    q: 'How often should I have my house washed in Florida?',
    a: 'In Central Florida\'s humid climate, we recommend house washing every 12-18 months. Homes with heavy shade, north-facing walls, or near lakes may need cleaning every 6-12 months due to faster algae and mold growth.',
  },
  {
    q: 'Is soft washing safe for my siding?',
    a: 'Yes, soft washing is the safest method for cleaning home exteriors. We use low pressure (under 500 PSI) with specialized cleaning solutions that kill organic growth without damaging vinyl, stucco, brick, or painted surfaces.',
  },
  {
    q: 'How much does house washing cost in Central Florida?',
    a: 'House washing typically costs $200-$600 depending on home size, siding type, and condition. A standard 2,000 sq ft single-story home averages $250-$350. We provide free, detailed quotes with no hidden fees.',
  },
  {
    q: 'Will house washing damage my plants and landscaping?',
    a: 'No, we take precautions to protect your landscaping. We pre-wet plants before cleaning and use eco-friendly, biodegradable solutions. Our technicians are trained to rinse thoroughly and minimize any impact on surrounding vegetation.',
  },
  {
    q: 'How long does house washing take?',
    a: 'Most single-story homes take 1-3 hours including setup and treatment time. Two-story homes typically take 2-4 hours. We\'ll provide a time estimate when we quote your specific project.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function HouseWashingPage() {
  const serviceAreas = [
    'Deltona', 'Orlando', 'Sanford', 'Daytona Beach', 'Lake Mary',
    'Winter Park', 'Apopka', 'Oviedo', 'Kissimmee', 'Clermont'
  ];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/house-washing-deltona-fl-01.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-blue-200">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><span aria-hidden="true">/</span></li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li><span aria-hidden="true">/</span></li>
                <li aria-current="page" className="text-white font-medium">House Washing</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional House Washing Services in Central Florida
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl">
                Restore your home's curb appeal with our safe, effective soft wash exterior cleaning.
                We remove mold, mildew, algae, and dirt from all siding types—protecting your investment
                in Florida's challenging climate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-center"
                >
                  Get Free Quote
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
          </div>
        </section>

        {/* Why Florida Homes Need Regular Washing */}
        <section className="py-16 bg-white" aria-labelledby="florida-climate">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 id="florida-climate" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Why Central Florida Homes Need Regular Washing
                  </h2>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      Florida's humid subtropical climate creates the perfect breeding ground for <strong>mold, mildew,
                      and algae</strong>. With average humidity levels of 75-90% and warm temperatures year-round,
                      organic growth on your home's exterior is inevitable—not a reflection of poor maintenance.
                    </p>
                    <p>
                      The black and green streaks you see on siding aren't just unsightly—they're actively damaging
                      your home. Algae like <em>Gloeocapsa magma</em> feed on limestone fillers in paint and stucco,
                      while mold and mildew can penetrate surfaces, causing premature deterioration and potential
                      health concerns.
                    </p>
                    <p>
                      Regular house washing removes these organisms before they cause permanent damage, protecting
                      your investment and maintaining your home's value. In Central Florida, this typically means
                      cleaning every <strong>12-18 months</strong>—more frequently for shaded or north-facing homes.
                    </p>
                  </div>
                </div>
                <figure className="relative">
                  <Image
                    src="/images/house-washing-deltona-fl-01.jpg"
                    alt="Professional house washing service removing mold and mildew from home exterior siding in Deltona, Florida"
                    width={600}
                    height={450}
                    className="rounded-xl shadow-lg"
                  />
                  <figcaption className="text-sm text-gray-500 mt-3 text-center">
                    House washing service in Deltona, FL - before and after soft wash treatment
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* What We Clean */}
        <section className="py-16 bg-gray-50" aria-labelledby="surfaces-cleaned">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-12">
                <h2 id="surfaces-cleaned" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Siding Types We Safely Clean
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our soft wash method is safe for all common Florida siding materials. We adjust our approach
                  based on your specific surfaces to deliver optimal results without damage.
                </p>
              </header>

              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
                <li className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Vinyl Siding</h3>
                  <p className="text-gray-600">
                    Florida's most popular siding. We remove green algae, black mold streaks, and oxidation
                    without warping or damaging the vinyl surface.
                  </p>
                </li>
                <li className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Stucco & EIFS</h3>
                  <p className="text-gray-600">
                    Common in Central Florida homes. Soft washing safely cleans textured stucco without
                    damaging the surface or forcing water behind the coating.
                  </p>
                </li>
                <li className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Brick & Stone</h3>
                  <p className="text-gray-600">
                    We clean brick, block, and stone exteriors with appropriate pressure settings to
                    protect mortar joints while removing stains and biological growth.
                  </p>
                </li>
                <li className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Wood Siding</h3>
                  <p className="text-gray-600">
                    Soft washing is essential for wood to prevent damage. We clean cedar, pine, and
                    engineered wood siding safely, preparing surfaces for staining if needed.
                  </p>
                </li>
                <li className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Painted Surfaces</h3>
                  <p className="text-gray-600">
                    Low-pressure soft washing cleans painted exteriors without stripping or damaging
                    paint. We can also prepare surfaces for repainting.
                  </p>
                </li>
                <li className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Soffits & Fascia</h3>
                  <p className="text-gray-600">
                    Often overlooked areas that collect dirt and cobwebs. We include soffits and fascia
                    in our house washing for complete curb appeal restoration.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-blue-900 text-white" aria-labelledby="our-process">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-12">
                <h2 id="our-process" className="text-3xl md:text-4xl font-bold mb-4">
                  Our Soft Wash House Cleaning Process
                </h2>
                <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                  We use <Link href="/services/soft-washing" className="text-yellow-300 hover:underline">professional soft washing</Link>—low
                  pressure combined with specialized cleaning solutions—to safely and effectively clean your home.
                </p>
              </header>

              <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <li className="bg-white/10 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                  <h3 className="text-xl font-bold mb-2">Inspection & Prep</h3>
                  <p className="text-blue-100">
                    We inspect your home's exterior, identify problem areas, cover plants, and close windows and doors.
                  </p>
                </li>
                <li className="bg-white/10 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                  <h3 className="text-xl font-bold mb-2">Apply Cleaning Solution</h3>
                  <p className="text-blue-100">
                    We apply our eco-friendly, biodegradable soft wash solution that kills mold, mildew, and algae at the root.
                  </p>
                </li>
                <li className="bg-white/10 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                  <h3 className="text-xl font-bold mb-2">Dwell Time</h3>
                  <p className="text-blue-100">
                    The solution works for 10-15 minutes, breaking down organic growth and lifting stains from surfaces.
                  </p>
                </li>
                <li className="bg-white/10 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center font-bold text-xl mb-4">4</div>
                  <h3 className="text-xl font-bold mb-2">Rinse & Inspect</h3>
                  <p className="text-blue-100">
                    We thoroughly rinse all surfaces, inspect results, and address any remaining spots for a perfect finish.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white" aria-labelledby="benefits">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-12">
                <h2 id="benefits" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Benefits of Professional House Washing
                </h2>
              </header>

              <ul className="grid md:grid-cols-2 gap-6">
                <li className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Restore Curb Appeal</h3>
                    <p className="text-gray-600">
                      Remove years of buildup to reveal your home's true colors. Neighbors will think you repainted!
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Protect Your Investment</h3>
                    <p className="text-gray-600">
                      Regular cleaning prevents mold and algae from causing permanent damage to siding, paint, and trim.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">HOA Compliance</h3>
                    <p className="text-gray-600">
                      Many Central Florida HOAs require exterior maintenance. We provide documentation for your records.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Healthier Home</h3>
                    <p className="text-gray-600">
                      Remove mold and allergens from exterior surfaces to improve air quality around your home.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Increase Property Value</h3>
                    <p className="text-gray-600">
                      Clean exteriors can increase perceived home value by 5-10%—essential if you're selling.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Prep for Painting</h3>
                    <p className="text-gray-600">
                      House washing is essential preparation for repainting, ensuring proper paint adhesion and longevity.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-12">
                <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  House Washing FAQ
                </h2>
                <p className="text-lg text-gray-600">
                  Common questions about our house washing services in Central Florida.
                </p>
              </header>

              <dl className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                    <dt className="text-xl font-semibold text-gray-900 mb-3">{item.q}</dt>
                    <dd className="text-gray-600">{item.a}</dd>
                  </div>
                ))}
              </dl>

              <p className="text-center mt-8">
                <Link href="/faq" className="text-blue-600 font-semibold hover:text-blue-700">
                  View All Frequently Asked Questions →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white" aria-labelledby="service-areas">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-8">
                <h2 id="service-areas" className="text-3xl font-bold text-gray-900 mb-4">
                  House Washing Service Areas
                </h2>
                <p className="text-lg text-gray-600">
                  We provide professional house washing throughout Central Florida.
                </p>
              </header>

              <nav aria-label="House washing service areas">
                <ul className="flex flex-wrap justify-center gap-3">
                  {serviceAreas.map((city) => (
                    <li key={city}>
                      <Link
                        href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors font-medium"
                      >
                        {city}, FL
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/locations"
                      className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors font-medium"
                    >
                      + 20 More Cities
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50" aria-labelledby="related-services">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 id="related-services" className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Related Services
              </h2>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <li>
                  <Link href="/services/roof-cleaning" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                    <span className="font-medium text-gray-800">Roof Cleaning</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/gutter-cleaning" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                    <span className="font-medium text-gray-800">Gutter Cleaning</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/soft-washing" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                    <span className="font-medium text-gray-800">Soft Washing</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/window-cleaning" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                    <span className="font-medium text-gray-800">Window Cleaning</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Ready to Restore Your Home's Curb Appeal?
            </h2>
            <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote for professional house washing.
              We'll assess your home and provide honest recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors"
              >
                Get Your Free Quote
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
