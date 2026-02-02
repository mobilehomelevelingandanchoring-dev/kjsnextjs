import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Pressure Washing Orlando FL | Professional Exterior Cleaning Services',
  description: 'Top-rated pressure washing services in Orlando, Florida. House washing, roof cleaning, driveway cleaning & more. Serving Orange County since day one. Free quotes.',
  keywords: ['pressure washing Orlando', 'Orlando pressure washing', 'house washing Orlando FL', 'roof cleaning Orlando', 'commercial pressure washing Orlando'],
  openGraph: {
    title: 'Pressure Washing Orlando FL | KJS Supreme',
    description: 'Orlando\'s trusted pressure washing company. Professional cleaning for homes and businesses throughout Orange County.',
    url: 'https://kjsupremepressurewashing.com/pressure-washing-orlando-fl/',
    type: 'website',
    images: [{ url: 'https://kjsupremepressurewashing.com/og-image.jpg', width: 1200, height: 630, alt: 'Pressure Washing Orlando FL' }],
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/pressure-washing-orlando-fl/',
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function PressureWashingOrlandoPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'Pressure Washing Orlando FL', url: 'https://kjsupremepressurewashing.com/pressure-washing-orlando-fl/' },
  ];

  const schemas = [
    generateServiceSchema('pressure-washing', 'orlando'),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <StructuredData schema={schemas} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Pressure Washing Services in Orlando, FL</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">Expert exterior cleaning for Orlando's homes and businesses</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Orlando's Trusted Pressure Washing Company</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p className="text-lg">
                  Orlando's subtropical climate, combined with high humidity and frequent rainfall, creates challenging conditions for property maintenance. Algae, mold, mildew, and dirt accumulate quickly on exterior surfaces, diminishing curb appeal and potentially causing damage over time.
                </p>
                <p className="text-lg">
                  KJS Supreme Pressure Washing serves Orlando homeowners and businesses with professional exterior cleaning services designed specifically for Central Florida's climate. From residential house washing to large-scale commercial projects, we deliver exceptional results that protect your property and enhance its appearance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Complete Pressure Washing Services in Orlando</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'Residential House Washing', desc: 'Soft washing for vinyl, stucco, brick, and all siding types. Safe, effective cleaning that protects your home.' },
                  { title: 'Commercial Pressure Washing', desc: 'Storefronts, office buildings, parking lots, and commercial properties. Maintain a professional image.' },
                  { title: 'Roof Cleaning', desc: 'Remove black streaks, algae, and moss with safe soft washing techniques designed for Florida roofs.' },
                  { title: 'Driveway & Concrete', desc: 'Eliminate oil stains, tire marks, and dirt from driveways, sidewalks, and concrete surfaces.' },
                  { title: 'Deck & Patio Cleaning', desc: 'Restore outdoor living spaces. Remove grime, mildew, and weathering from wood and composite decks.' },
                  { title: 'Fence Washing', desc: 'Bring fences back to life with professional cleaning for wood, vinyl, and aluminum fencing.' },
                  { title: 'Pool Deck Cleaning', desc: 'Safe cleaning that removes algae and slippery buildup from pool deck surfaces.' },
                  { title: 'Gutter Cleaning', desc: 'Complete gutter cleaning and exterior brightening to improve function and appearance.' },
                  { title: 'Window Cleaning', desc: 'Crystal-clear windows that enhance your view and property appearance.' },
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Serving All Orlando Neighborhoods</h2>
              <p className="text-lg text-gray-700 mb-6">
                We proudly serve residential and commercial clients throughout Orlando and Orange County, including:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                {[
                  'Downtown Orlando', 'Winter Park', 'College Park', 'Baldwin Park', 'Thornton Park', 'Lake Nona',
                  'Dr. Phillips', 'Windermere area', 'Waterford Lakes', 'Millenia', 'Metro West', 'Avalon Park',
                  'East Orlando', 'South Orlando', 'Pine Hills', 'Alafaya', 'Azalea Park', 'Conway'
                ].map((area, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Why Orlando Trusts KJS Supreme</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: 'Licensed & Insured', desc: 'Fully licensed and comprehensively insured to protect you and your property.' },
                  { title: 'Orlando Area Experts', desc: 'We understand Central Florida\'s climate and the specific challenges it presents.' },
                  { title: 'Professional Equipment', desc: 'Commercial-grade equipment and professional cleaning solutions for superior results.' },
                  { title: 'Eco-Friendly Methods', desc: 'Environmentally responsible cleaning products that are safe for your family, pets, and landscaping.' },
                  { title: 'Experienced Team', desc: 'Trained technicians with years of experience in pressure washing and soft washing.' },
                  { title: '100% Satisfaction Guaranteed', desc: 'We guarantee your complete satisfaction with every service we provide.' },
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Orlando Property Today</h2>
              <p className="text-xl mb-8 text-blue-100">Get a free, no-obligation quote for professional pressure washing services in Orlando.</p>
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
