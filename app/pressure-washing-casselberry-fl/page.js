import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Pressure Washing Casselberry FL | Professional Exterior Cleaning',
  description: 'Expert pressure washing services in Casselberry, Florida. House washing, roof cleaning, and driveway cleaning for Seminole County homes. Free quotes. Licensed & insured.',
  keywords: ['pressure washing Casselberry', 'Casselberry pressure washing', 'house washing Casselberry FL', 'roof cleaning Casselberry', 'exterior cleaning Casselberry'],
  openGraph: {
    title: 'Pressure Washing Casselberry FL | KJS Supreme',
    description: 'Professional pressure washing services for Casselberry homes and businesses.',
    url: 'https://kjsupremepressurewashing.com/pressure-washing-casselberry-fl/',
    type: 'website',
    images: [{ url: 'https://kjsupremepressurewashing.com/og-image.jpg', width: 1200, height: 630, alt: 'Pressure Washing Casselberry FL' }],
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/pressure-washing-casselberry-fl/',
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function PressureWashingCasselberryPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'Pressure Washing Casselberry FL', url: 'https://kjsupremepressurewashing.com/pressure-washing-casselberry-fl/' },
  ];

  const schemas = [
    generateServiceSchema('pressure-washing', 'casselberry'),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <StructuredData schema={schemas} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Pressure Washing Services in Casselberry, FL</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">Trusted exterior cleaning for Casselberry homes and businesses</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">Get Free Quote</Link>
                <Link href="tel:+12138416924" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white">Call (213) 841-6924</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Professional Pressure Washing in Casselberry</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p className="text-lg">
                  KJS Supreme Pressure Washing proudly serves Casselberry with professional exterior cleaning services that enhance curb appeal and protect property value. From Red Bug Lake to the Casselberry Golf Club area, we help homeowners maintain beautiful, clean exteriors year-round.
                </p>
                <p className="text-lg">
                  Casselberry's location in Seminole County means properties face challenges from humidity, pollen, and organic growth. Our expert pressure washing and soft washing services effectively remove algae, mold, dirt, and stains while protecting your home's surfaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Complete Exterior Cleaning Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'House Washing', desc: 'Gentle soft washing for vinyl, stucco, and brick. Remove years of buildup safely and effectively.' },
                  { title: 'Roof Cleaning', desc: 'Eliminate black streaks and roof algae using proven soft washing methods that protect shingles.' },
                  { title: 'Driveway & Concrete', desc: 'Restore driveways, sidewalks, and patios by removing oil stains and embedded dirt.' },
                  { title: 'Deck & Fence Cleaning', desc: 'Revive wood and vinyl surfaces with professional cleaning that prepares for sealing or staining.' },
                  { title: 'Gutter Cleaning', desc: 'Prevent water damage with complete gutter cleaning and exterior gutter brightening services.' },
                  { title: 'Commercial Washing', desc: 'Keep your Casselberry business looking professional with regular exterior maintenance.' },
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Why Casselberry Residents Choose Us</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: 'Seminole County Experts', desc: 'Local knowledge of Casselberry neighborhoods and environmental factors affecting your property.' },
                  { title: 'Licensed & Insured', desc: 'Complete insurance coverage and proper licensing for your protection and peace of mind.' },
                  { title: 'Eco-Friendly Solutions', desc: 'Safe cleaning products that protect your landscaping, pets, and the local environment.' },
                  { title: 'Satisfaction Guaranteed', desc: '100% satisfaction guarantee. We\'re not happy until you\'re thrilled with the results.' },
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Casselberry Property Today</h2>
              <p className="text-xl mb-8 text-blue-100">Professional pressure washing with guaranteed results. Get your free estimate now.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">Request Free Quote</Link>
                <Link href="tel:+12138416924" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white">Call: (213) 841-6924</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
