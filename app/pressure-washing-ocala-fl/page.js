import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Pressure Washing Ocala FL | Professional Exterior Cleaning',
  description: 'Expert pressure washing services in Ocala, FL. KJS Supreme offers professional house washing, driveway cleaning, and roof cleaning. Licensed & insured. Free quotes available.',
  keywords: ['pressure washing Ocala', 'power washing Ocala FL', 'house washing Ocala', 'driveway cleaning Ocala', 'roof cleaning Ocala', 'exterior cleaning Ocala Florida'],
  openGraph: {
    title: 'Pressure Washing Ocala FL | KJS Supreme Pressure Washing',
    description: 'Professional pressure washing services in Ocala, Florida. Expert exterior cleaning for residential and commercial properties.',
    url: 'https://kjsupremepressurewashing.com/pressure-washing-ocala-fl',
    type: 'website',
    images: [
      {
        url: 'https://kjsupremepressurewashing.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KJS Supreme Pressure Washing Ocala FL',
      },
    ],
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/pressure-washing-ocala-fl',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function PressureWashingOcalaPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'Pressure Washing Ocala FL', url: 'https://kjsupremepressurewashing.com/pressure-washing-ocala-fl' },
  ];

  const schemas = [
    generateServiceSchema('pressure-washing', 'ocala'),
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
                Professional Pressure Washing Services in Ocala, FL
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Expert exterior cleaning solutions for homes and businesses in Ocala, Florida
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="tel:+13862102969"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white"
                >
                  Call (386) 210-2969
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                Our Pressure Washing Services in Ocala
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">House Washing</h3>
                  <p className="text-gray-700">
                    Remove dirt, mold, and mildew from your home's exterior surfaces using safe soft washing techniques.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Driveway Cleaning</h3>
                  <p className="text-gray-700">
                    Restore your concrete driveway to like-new condition by eliminating oil stains, tire marks, and grime.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Roof Cleaning</h3>
                  <p className="text-gray-700">
                    Safely remove algae, moss, and black streaks from your roof without damaging shingles.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Patio & Deck Cleaning</h3>
                  <p className="text-gray-700">
                    Revitalize your outdoor living spaces with professional cleaning for patios, decks, and porches.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Fence Cleaning</h3>
                  <p className="text-gray-700">
                    Bring your wooden or vinyl fence back to life with thorough pressure washing services.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Commercial Pressure Washing</h3>
                  <p className="text-gray-700">
                    Keep your Ocala business looking professional with regular commercial exterior cleaning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                Why Choose KJS Supreme in Ocala?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                    <p className="text-gray-700">
                      Fully licensed and insured for your peace of mind and property protection.
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
                    <h3 className="text-xl font-semibold mb-2">Local Ocala Experts</h3>
                    <p className="text-gray-700">
                      We understand Ocala's unique climate and how it affects your property's exterior.
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
                    <h3 className="text-xl font-semibold mb-2">Eco-Friendly Solutions</h3>
                    <p className="text-gray-700">
                      We use environmentally safe cleaning solutions that are tough on dirt but gentle on plants.
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
                      We're not satisfied until you are. 100% satisfaction guarantee on all services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Ocala Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Serving Ocala, Florida
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Ocala, known as the "Horse Capital of the World," is home to beautiful properties that deserve professional care. Our pressure washing services help Ocala homeowners and businesses maintain their property's curb appeal and value in Florida's challenging climate.
                </p>
                <p className="mb-4">
                  From historic downtown Ocala to the sprawling horse farms and modern residential communities, we provide comprehensive exterior cleaning services throughout Marion County. Our team understands the specific challenges that Ocala's humid subtropical climate presents for property maintenance.
                </p>
                <p>
                  Whether you need house washing in Silver Springs Shores, commercial pressure washing near the Ocala Town Square, or roof cleaning in the Golden Ocala area, KJS Supreme Pressure Washing is your trusted local provider.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Ocala Property?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Get a free, no-obligation quote today. Fast response times and flexible scheduling available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
                >
                  Request Free Quote
                </Link>
                <Link
                  href="tel:+13862102969"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white"
                >
                  Call Now: (386) 210-2969
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
