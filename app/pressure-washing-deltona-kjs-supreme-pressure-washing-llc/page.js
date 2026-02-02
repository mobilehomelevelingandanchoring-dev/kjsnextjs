import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateServiceSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Pressure Washing Deltona FL | KJS Supreme Pressure Washing LLC',
  description: 'KJS Supreme Pressure Washing LLC provides top-rated pressure washing services in Deltona, Florida. Professional house washing, roof cleaning, and driveway cleaning. Licensed, insured, and locally owned.',
  keywords: ['pressure washing Deltona', 'KJS Supreme Deltona', 'Deltona pressure washing', 'house washing Deltona FL', 'roof cleaning Deltona', 'driveway cleaning Deltona'],
  openGraph: {
    title: 'Pressure Washing Deltona FL | KJS Supreme Pressure Washing LLC',
    description: 'Deltona\'s trusted pressure washing experts. Professional exterior cleaning services for homes and businesses.',
    url: 'https://kjsupremepressurewashing.com/pressure-washing-deltona-kjs-supreme-pressure-washing-llc/',
    type: 'website',
    images: [
      {
        url: 'https://kjsupremepressurewashing.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KJS Supreme Pressure Washing Deltona FL',
      },
    ],
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/pressure-washing-deltona-kjs-supreme-pressure-washing-llc/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function PressureWashingDeltonaKJSPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'Pressure Washing Deltona', url: 'https://kjsupremepressurewashing.com/pressure-washing-deltona-kjs-supreme-pressure-washing-llc/' },
  ];

  const schemas = [
    generateLocalBusinessSchema(),
    generateServiceSchema('pressure-washing', 'deltona'),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <StructuredData schema={schemas} />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                KJS Supreme Pressure Washing LLC - Deltona's Premier Cleaning Experts
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Professional pressure washing services for Deltona homes and businesses since day one
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
                >
                  Get Free Estimate
                </Link>
                <Link
                  href="tel:+12138416924"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white"
                >
                  Call (213) 841-6924
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About KJS Supreme in Deltona */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Deltona's Trusted Pressure Washing Company
              </h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p className="text-lg">
                  KJS Supreme Pressure Washing LLC is proud to call Deltona home. As a locally owned and operated business, we understand the specific needs of Deltona property owners and the challenges that Central Florida's climate presents for exterior maintenance.
                </p>
                <p className="text-lg">
                  Our commitment to quality, professionalism, and customer satisfaction has made us Deltona's go-to choice for pressure washing services. We serve homeowners and businesses throughout Deltona and surrounding Volusia County communities with the same dedication and attention to detail that built our reputation.
                </p>
                <p className="text-lg">
                  Whether you need house washing to remove algae and mildew, roof cleaning to eliminate black streaks, or driveway cleaning to restore your concrete's appearance, KJS Supreme Pressure Washing LLC delivers exceptional results every time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                Comprehensive Pressure Washing Services in Deltona
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">House Washing</h3>
                  <p className="text-gray-700">
                    Gentle soft washing techniques to clean your home's siding, stucco, or brick without damage. Remove years of dirt, algae, and mold buildup.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Roof Cleaning</h3>
                  <p className="text-gray-700">
                    Safely eliminate roof algae, moss, and black streaks using low-pressure soft washing methods that protect your shingles.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Driveway & Concrete Cleaning</h3>
                  <p className="text-gray-700">
                    Restore your driveway, sidewalks, and concrete surfaces by removing oil stains, tire marks, and embedded dirt.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Deck & Patio Cleaning</h3>
                  <p className="text-gray-700">
                    Revive your outdoor living spaces with thorough cleaning that removes grime, mildew, and weathering stains.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Fence Washing</h3>
                  <p className="text-gray-700">
                    Bring your wooden or vinyl fence back to its original beauty with professional pressure washing services.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Gutter Cleaning</h3>
                  <p className="text-gray-700">
                    Prevent water damage and maintain proper drainage with complete gutter cleaning and exterior gutter brightening.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose KJS Supreme */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Why Deltona Residents Choose KJS Supreme
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Locally Owned & Operated</h3>
                    <p className="text-gray-700">
                      We're your Deltona neighbors, committed to serving our community with integrity and excellence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Licensed & Fully Insured</h3>
                    <p className="text-gray-700">
                      Complete insurance coverage and proper licensing for your protection and peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Equipment</h3>
                    <p className="text-gray-700">
                      Commercial-grade pressure washing equipment and eco-friendly cleaning solutions for superior results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
                    <p className="text-gray-700">
                      We stand behind our work with a 100% satisfaction guarantee on all pressure washing services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Serving Deltona & Surrounding Areas
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                While Deltona is our home base, KJS Supreme Pressure Washing LLC proudly serves property owners throughout Volusia County and Central Florida. Our service area includes DeBary, Orange City, Sanford, Lake Mary, Daytona Beach, Ormond Beach, Port Orange, and beyond.
              </p>
              <p className="text-lg text-gray-700">
                No job is too big or too small. From single-family homes to multi-unit residential properties and commercial buildings, we deliver the same level of professionalism and quality on every project.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience the KJS Supreme Difference?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact Deltona's premier pressure washing company today for a free, no-obligation estimate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
                >
                  Request Free Estimate
                </Link>
                <Link
                  href="tel:+12138416924"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white"
                >
                  Call Now: (213) 841-6924
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
