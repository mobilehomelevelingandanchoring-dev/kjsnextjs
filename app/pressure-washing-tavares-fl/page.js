import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Pressure Washing Tavares FL | Lake County Exterior Cleaning Experts',
  description: 'Professional pressure washing services in Tavares, Florida. Expert house washing, roof cleaning, and driveway cleaning for Lake County properties. Free estimates. Licensed & insured.',
  keywords: ['pressure washing Tavares', 'Tavares pressure washing', 'house washing Tavares FL', 'Lake County pressure washing', 'exterior cleaning Tavares'],
  openGraph: {
    title: 'Pressure Washing Tavares FL | KJS Supreme',
    description: 'Tavares\' trusted pressure washing company. Professional exterior cleaning for Lake County homes and businesses.',
    url: 'https://kjsupremepressurewashing.com/pressure-washing-tavares-fl/',
    type: 'website',
    images: [{ url: 'https://kjsupremepressurewashing.com/og-image.jpg', width: 1200, height: 630, alt: 'Pressure Washing Tavares FL' }],
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/pressure-washing-tavares-fl/',
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function PressureWashingTavaresPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'Pressure Washing Tavares FL', url: 'https://kjsupremepressurewashing.com/pressure-washing-tavares-fl/' },
  ];

  const schemas = [
    generateServiceSchema('pressure-washing', 'tavares'),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <StructuredData schema={schemas} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Pressure Washing Services in Tavares, FL</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">Lake County's premier exterior cleaning specialists</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">Get Free Quote</Link>
                <Link href="tel:+13862102969" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white">Call (386) 210-2969</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Expert Pressure Washing in Tavares</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p className="text-lg">
                  Located in the heart of Florida's Lake County, Tavares is known as "America's Seaplane City" and features beautiful waterfront properties and historic neighborhoods that deserve professional care. KJS Supreme Pressure Washing provides comprehensive exterior cleaning services throughout Tavares and surrounding Lake County communities.
                </p>
                <p className="text-lg">
                  Tavares' lakeside location means properties face unique challenges from humidity, water-related algae growth, and environmental debris. Our expert team uses proven pressure washing and soft washing techniques to keep your property looking its best while protecting surfaces from damage.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Tavares Pressure Washing Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'Residential House Washing', desc: 'Safe, effective cleaning for all exterior siding types. Remove algae, dirt, and organic growth.' },
                  { title: 'Roof Soft Washing', desc: 'Specialized low-pressure roof cleaning that eliminates black streaks without damaging shingles.' },
                  { title: 'Driveway Cleaning', desc: 'Powerful cleaning for concrete and paver driveways. Remove oil stains, tire marks, and grime.' },
                  { title: 'Dock & Deck Cleaning', desc: 'Waterfront property specialists. Clean and restore docks, decks, and waterfront structures.' },
                  { title: 'Patio & Walkway Cleaning', desc: 'Restore outdoor living spaces with thorough cleaning of patios, walkways, and pool decks.' },
                  { title: 'Commercial Services', desc: 'Professional exterior cleaning for Tavares businesses, storefronts, and commercial properties.' },
                ].map((service, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600">{service.title}</h3>
                    <p className="text-gray-700">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Serving All of Tavares & Lake County</h2>
              <p className="text-lg text-gray-700 mb-6">
                From downtown Tavares to Dora Canal, Lake Dora waterfront properties, and throughout Lake County, we provide reliable pressure washing services that enhance property value and curb appeal. Our team understands the specific needs of waterfront and lakeside properties.
              </p>
              <p className="text-lg text-gray-700">
                We also serve nearby communities including Eustis, Mount Dora, Leesburg, and other Lake County areas with the same commitment to quality and customer satisfaction.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Why Choose KJS Supreme in Tavares?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: 'Waterfront Property Experts', desc: 'Specialized knowledge of cleaning lakefront and waterfront properties in the Tavares area.' },
                  { title: 'Licensed & Insured', desc: 'Fully licensed and comprehensively insured for your complete protection.' },
                  { title: 'Eco-Safe Methods', desc: 'Lake-safe cleaning solutions that protect Florida\'s precious waterways and aquatic ecosystems.' },
                  { title: '100% Satisfaction Guarantee', desc: 'We guarantee your complete satisfaction with every pressure washing service.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Revitalize Your Tavares Property?</h2>
              <p className="text-xl mb-8 text-blue-100">Contact us for a free, no-obligation estimate. Serving Tavares and all of Lake County.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">Request Free Estimate</Link>
                <Link href="tel:+13862102969" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white">Call: (386) 210-2969</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
