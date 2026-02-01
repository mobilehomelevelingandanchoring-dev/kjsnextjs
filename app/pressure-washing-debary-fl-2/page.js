import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Pressure Washing DeBary FL | Top-Rated Exterior Cleaning Services',
  description: 'Professional pressure washing services in DeBary, Florida. Expert house washing, roof cleaning, and driveway cleaning. Licensed, insured, and locally trusted. Free estimates available.',
  keywords: ['pressure washing DeBary', 'power washing DeBary FL', 'house washing DeBary', 'roof cleaning DeBary', 'driveway cleaning DeBary Florida'],
  openGraph: {
    title: 'Pressure Washing DeBary FL | KJS Supreme Pressure Washing',
    description: 'DeBary\'s trusted pressure washing experts. Professional cleaning for residential and commercial properties.',
    url: 'https://kjsupremepressurewashing.com/pressure-washing-debary-fl-2/',
    type: 'website',
    images: [
      {
        url: 'https://kjsupremepressurewashing.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pressure Washing DeBary FL',
      },
    ],
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/pressure-washing-debary-fl-2/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function PressureWashingDeBary2Page() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'Pressure Washing DeBary FL', url: 'https://kjsupremepressurewashing.com/pressure-washing-debary-fl-2/' },
  ];

  const schemas = [
    generateServiceSchema('pressure-washing', 'debary'),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <StructuredData schema={schemas} />

      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Pressure Washing Services in DeBary, FL
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Expert exterior cleaning for DeBary homes and businesses
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
                  Get Free Quote
                </Link>
                <Link href="tel:+13862102969" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white">
                  Call (386) 210-2969
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                DeBary's Trusted Pressure Washing Company
              </h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p className="text-lg">
                  DeBary residents trust KJS Supreme Pressure Washing for professional exterior cleaning services that protect and enhance property value. Located along the scenic St. Johns River, DeBary properties face unique challenges from humidity, algae, and environmental debris that require expert care.
                </p>
                <p className="text-lg">
                  Our pressure washing services help DeBary homeowners maintain beautiful, clean exteriors while preventing damage from mold, mildew, and organic growth. From Gemini Springs to River City, we serve the entire DeBary community with reliable, affordable exterior cleaning solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                Our DeBary Pressure Washing Services
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">House Washing</h3>
                  <p className="text-gray-700">
                    Safe soft washing for all siding types. Remove dirt, algae, and mildew without damaging your home's exterior.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Roof Cleaning</h3>
                  <p className="text-gray-700">
                    Eliminate roof algae and black streaks using specialized soft washing techniques that protect your shingles.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Driveway Cleaning</h3>
                  <p className="text-gray-700">
                    Restore your concrete or paver driveway by removing oil stains, tire marks, and embedded grime.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Deck & Patio Washing</h3>
                  <p className="text-gray-700">
                    Revitalize outdoor living spaces with thorough cleaning that prepares surfaces for staining or sealing.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Pool Deck Cleaning</h3>
                  <p className="text-gray-700">
                    Keep pool areas safe and attractive with professional cleaning that removes algae and slippery buildup.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Commercial Services</h3>
                  <p className="text-gray-700">
                    Maintain a professional appearance for your DeBary business with regular exterior cleaning services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Why DeBary Chooses KJS Supreme
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Local DeBary Experts</h3>
                    <p className="text-gray-700">
                      We understand DeBary's riverside environment and provide cleaning solutions tailored to local conditions.
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
                    <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                    <p className="text-gray-700">
                      Full licensing and comprehensive insurance for your protection and peace of mind.
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
                    <h3 className="text-xl font-semibold mb-2">Eco-Friendly Cleaning</h3>
                    <p className="text-gray-700">
                      Environmentally safe solutions that protect your landscaping and the St. Johns River watershed.
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
                    <h3 className="text-xl font-semibold mb-2">100% Satisfaction Guaranteed</h3>
                    <p className="text-gray-700">
                      We stand behind our work with a complete satisfaction guarantee on all services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your DeBary Property?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact us today for a free estimate. Professional service, competitive pricing, guaranteed results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
                  Request Free Estimate
                </Link>
                <Link href="tel:+13862102969" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white">
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
