import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Roof Cleaning Ocala FL | Safe Soft Washing for Shingle Roofs',
  description: 'Professional roof cleaning in Ocala, Florida. Remove black streaks, algae, and moss safely with soft washing. Extend roof life and boost curb appeal. Free estimates.',
  keywords: ['roof cleaning Ocala', 'Ocala roof cleaning', 'roof soft washing Ocala FL', 'remove roof algae Ocala', 'black streaks roof cleaning Ocala'],
  openGraph: {
    title: 'Roof Cleaning Ocala FL | KJS Supreme Pressure Washing',
    description: 'Expert roof cleaning services in Ocala. Safe, effective soft washing that protects your shingles.',
    url: 'https://kjsupremepressurewashing.com/roof-cleaning-ocala-fl/',
    type: 'website',
    images: [{ url: 'https://kjsupremepressurewashing.com/og-image.jpg', width: 1200, height: 630, alt: 'Roof Cleaning Ocala FL' }],
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/roof-cleaning-ocala-fl/',
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function RoofCleaningOcalaPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'Roof Cleaning Ocala FL', url: 'https://kjsupremepressurewashing.com/roof-cleaning-ocala-fl/' },
  ];

  const schemas = [
    generateServiceSchema('roof-cleaning', 'ocala'),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <StructuredData schema={schemas} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Roof Cleaning in Ocala, FL</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">Safe soft washing that removes algae, moss, and black streaks without damaging shingles</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Expert Roof Cleaning for Ocala Homes</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p className="text-lg">
                  Florida's humid climate creates the perfect environment for roof algae, moss, and the unsightly black streaks that affect so many Ocala roofs. These organisms don't just look bad—they actually damage your shingles and reduce your roof's lifespan. Professional roof cleaning can restore your roof's appearance and protect your investment.
                </p>
                <p className="text-lg">
                  KJS Supreme Pressure Washing uses specialized soft washing techniques specifically designed for roof cleaning. Unlike high-pressure washing that can damage shingles, our low-pressure soft washing safely eliminates algae, moss, lichen, and black streaks while protecting your roof's integrity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Benefits of Professional Roof Cleaning</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: 'Extend Roof Lifespan', desc: 'Remove harmful organisms that break down shingle granules and accelerate roof deterioration.' },
                  { title: 'Improve Curb Appeal', desc: 'Restore your roof\'s original appearance and dramatically enhance your home\'s overall look.' },
                  { title: 'Increase Home Value', desc: 'A clean roof significantly boosts property value and makes homes more attractive to buyers.' },
                  { title: 'Lower Energy Costs', desc: 'Dark algae absorbs heat. A clean roof reflects more sunlight, reducing cooling costs.' },
                  { title: 'Prevent Expensive Repairs', desc: 'Regular cleaning prevents damage that leads to costly repairs or premature roof replacement.' },
                  { title: 'Maintain Warranty', desc: 'Many roof warranties require regular maintenance. Professional cleaning helps protect your coverage.' },
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Our Roof Cleaning Process</h2>
              <div className="space-y-6">
                {[
                  { step: 1, title: 'Inspection', desc: 'We thoroughly inspect your roof to identify problem areas and check for any existing damage.' },
                  { step: 2, title: 'Preparation', desc: 'Protect landscaping, gutters, and surrounding areas before beginning the cleaning process.' },
                  { step: 3, title: 'Soft Washing Application', desc: 'Apply professional-grade cleaning solution using low-pressure equipment designed for roofs.' },
                  { step: 4, title: 'Organic Matter Elimination', desc: 'Cleaning solution kills algae, moss, lichen, and bacteria at the root level.' },
                  { step: 5, title: 'Gentle Rinsing', desc: 'Thoroughly rinse the roof using low-pressure techniques that won\'t damage shingles.' },
                  { step: 6, title: 'Final Inspection', desc: 'Complete final inspection to ensure all organic growth is removed and roof is pristine.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Why Choose KJS Supreme for Roof Cleaning?</h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg"><strong>Soft Washing Specialists:</strong> We use ONLY soft washing for roofs, never high-pressure washing that damages shingles.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg"><strong>Professional Grade Solutions:</strong> EPA-approved cleaning solutions that are effective yet safe for your property and landscaping.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg"><strong>Experienced Technicians:</strong> Trained professionals who understand proper roof cleaning techniques and safety protocols.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg"><strong>Fully Insured:</strong> Comprehensive insurance coverage protects your property and gives you complete peace of mind.</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg"><strong>Satisfaction Guaranteed:</strong> We stand behind our work with a 100% satisfaction guarantee on all roof cleaning services.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Restore Your Ocala Roof?</h2>
              <p className="text-xl mb-8 text-blue-100">Get a free estimate for professional roof cleaning. Protect your investment and enhance curb appeal.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">Request Free Quote</Link>
                <Link href="tel:+13862102969" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white">Call: (386) 210-2969</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
