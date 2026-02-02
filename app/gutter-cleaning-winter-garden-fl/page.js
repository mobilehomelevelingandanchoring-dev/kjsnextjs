import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Gutter Cleaning Winter Garden FL | Professional Gutter Services',
  description: 'Expert gutter cleaning services in Winter Garden, Florida. Prevent water damage with professional gutter cleaning and maintenance. Licensed, insured, free estimates.',
  keywords: ['gutter cleaning Winter Garden', 'Winter Garden gutter cleaning', 'gutter services Winter Garden FL', 'gutter maintenance Winter Garden'],
  openGraph: {
    title: 'Gutter Cleaning Winter Garden FL | KJS Supreme',
    description: 'Professional gutter cleaning services in Winter Garden. Protect your home from water damage.',
    url: 'https://kjsupremepressurewashing.com/gutter-cleaning-winter-garden-fl/',
    type: 'website',
    images: [{ url: 'https://kjsupremepressurewashing.com/og-image.jpg', width: 1200, height: 630, alt: 'Gutter Cleaning Winter Garden FL' }],
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/gutter-cleaning-winter-garden-fl/',
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function GutterCleaningWinterGardenPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'Gutter Cleaning Winter Garden FL', url: 'https://kjsupremepressurewashing.com/gutter-cleaning-winter-garden-fl/' },
  ];

  const schemas = [
    generateServiceSchema('gutter-cleaning', 'winter-garden'),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <StructuredData schema={schemas} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Gutter Cleaning in Winter Garden, FL</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">Protect your Winter Garden home from water damage with expert gutter cleaning</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Expert Gutter Cleaning for Winter Garden Homes</h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p className="text-lg">
                  Winter Garden's beautiful tree-lined streets and lush landscaping create a picturesque setting, but they also mean one thing for homeowners: gutters that fill quickly with leaves, pine needles, and debris. Regular gutter cleaning is essential for protecting your Winter Garden property from water damage and maintaining proper drainage.
                </p>
                <p className="text-lg">
                  KJS Supreme Pressure Washing provides comprehensive gutter cleaning services throughout Winter Garden and West Orange County. Our professional team removes all debris from your gutters and downspouts, ensures proper water flow, and protects your home's foundation, landscaping, and exterior from water-related damage.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Why Regular Gutter Cleaning Matters</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Prevent Foundation Damage',
                    desc: 'Clogged gutters cause water to overflow near your foundation, leading to cracks, settling, and costly structural repairs.',
                    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  },
                  {
                    title: 'Avoid Roof & Fascia Rot',
                    desc: 'Standing water in gutters damages roof edges and fascia boards, requiring expensive repairs or replacement.',
                    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                  },
                  {
                    title: 'Protect Landscaping',
                    desc: 'Overflowing gutters dump water directly onto landscaping, killing plants and creating erosion around your home.',
                    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  },
                  {
                    title: 'Eliminate Pest Habitats',
                    desc: 'Debris-filled gutters attract mosquitoes, rodents, and other pests that can invade your home.',
                    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                  },
                  {
                    title: 'Prevent Ice Dams',
                    desc: 'While rare in Florida, blocked gutters can cause water backup that leads to roof leaks during unusual cold weather.',
                    icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  },
                  {
                    title: 'Maintain Home Value',
                    desc: 'Clean, functional gutters are essential for home maintenance and are checked during property inspections.',
                    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Our Gutter Cleaning Process</h2>

              <div className="space-y-6">
                {[
                  { step: 1, title: 'Inspection', desc: 'We inspect your gutter system to identify problems and assess the level of cleaning needed.' },
                  { step: 2, title: 'Debris Removal', desc: 'Remove all leaves, pine needles, dirt, and debris from gutters and downspouts by hand.' },
                  { step: 3, title: 'Downspout Flushing', desc: 'Flush downspouts to ensure complete clearing and proper water flow from roof to ground.' },
                  { step: 4, title: 'Exterior Gutter Cleaning', desc: 'Clean the exterior of gutters to remove dirt, black streaks, and oxidation stains (gutter brightening).' },
                  { step: 5, title: 'Final Check', desc: 'Test water flow and inspect for any damage or issues that need attention.' },
                  { step: 6, title: 'Cleanup', desc: 'Haul away all debris and leave your property clean and tidy.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Serving Winter Garden & West Orange County</h2>
              <p className="text-lg text-gray-700 mb-6">
                We provide professional gutter cleaning services throughout Winter Garden, including historic downtown, Oakland, Windermere area, and all West Orange County neighborhoods. Our team knows the area and understands the specific challenges that Winter Garden's mature trees and landscaping present for gutter maintenance.
              </p>
              <p className="text-lg text-gray-700">
                Whether you have a historic home in downtown Winter Garden or a modern property near Oakland Nature Preserve, we deliver the same professional service and attention to detail on every job.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Why Choose KJS Supreme?</h2>
              <div className="space-y-4">
                {[
                  'Licensed and fully insured for your protection',
                  'Professional equipment and trained technicians',
                  'Complete debris removal and downspout flushing',
                  'Exterior gutter brightening included',
                  'Flexible scheduling and reliable service',
                  'Competitive pricing with no hidden fees',
                  '100% satisfaction guarantee',
                  'Serving Winter Garden and surrounding communities'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Winter Garden Home Today</h2>
              <p className="text-xl mb-8 text-blue-100">Schedule professional gutter cleaning and prevent costly water damage. Free estimates available.</p>
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
