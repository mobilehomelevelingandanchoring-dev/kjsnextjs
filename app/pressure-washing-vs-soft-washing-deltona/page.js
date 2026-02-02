import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Pressure Washing vs Soft Washing Deltona | Which is Right for You?',
  description: 'Understanding the difference between pressure washing and soft washing in Deltona, FL. Learn which method is best for your home, roof, and property surfaces.',
  keywords: ['pressure washing vs soft washing', 'soft washing Deltona', 'pressure washing Deltona', 'difference between pressure and soft washing', 'best cleaning method'],
  openGraph: {
    title: 'Pressure Washing vs Soft Washing | Deltona FL Guide',
    description: 'Comprehensive comparison of pressure washing and soft washing for Deltona homeowners. Make the right choice for your property.',
    url: 'https://kjsupremepressurewashing.com/pressure-washing-vs-soft-washing-deltona/',
    type: 'article',
    images: [{ url: 'https://kjsupremepressurewashing.com/og-image.jpg', width: 1200, height: 630, alt: 'Pressure Washing vs Soft Washing' }],
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/pressure-washing-vs-soft-washing-deltona/',
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function PressureVsSoftWashingPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'Pressure Washing vs Soft Washing', url: 'https://kjsupremepressurewashing.com/pressure-washing-vs-soft-washing-deltona/' },
  ];

  const faqs = [
    {
      question: 'Is soft washing safe for all surfaces?',
      answer: 'Soft washing is safe for most exterior surfaces including vinyl siding, stucco, brick, wood, and shingles. The low-pressure application combined with proper cleaning solutions makes it ideal for delicate surfaces that could be damaged by high-pressure washing.'
    },
    {
      question: 'Does soft washing last longer than pressure washing?',
      answer: 'Yes, soft washing typically lasts 4-6 times longer than pressure washing because it kills organic growth at the source rather than just blasting it away. The cleaning solutions continue working after application, providing longer-lasting results.'
    },
    {
      question: 'Which method is better for roofs?',
      answer: 'Soft washing is the only recommended method for cleaning roofs. High-pressure washing can damage shingles, remove protective granules, and void warranties. Soft washing safely eliminates algae and moss without harming your roof.'
    },
    {
      question: 'Is pressure washing or soft washing more expensive?',
      answer: 'Pricing is typically similar for both methods. While soft washing uses specialized cleaning solutions, it requires less time and water. The longer-lasting results of soft washing often provide better value despite comparable upfront costs.'
    },
  ];

  const schemas = [
    generateWebPageSchema({
      title: 'Pressure Washing vs Soft Washing Deltona | Which is Right for You?',
      description: 'Understanding the difference between pressure washing and soft washing in Deltona, FL. Learn which method is best for your home, roof, and property surfaces.',
      url: 'https://kjsupremepressurewashing.com/pressure-washing-vs-soft-washing-deltona/',
      type: 'Article'
    }),
    generateBreadcrumbSchema(breadcrumbs),
    generateFAQSchema(faqs),
  ];

  return (
    <>
      <StructuredData schema={schemas} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Pressure Washing vs Soft Washing: Deltona's Complete Guide</h1>
              <p className="text-xl md:text-2xl text-blue-100">Understanding the differences to make the right choice for your property</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Many Deltona homeowners use the terms "pressure washing" and "soft washing" interchangeably, but they're actually two distinct cleaning methods with different applications, benefits, and ideal uses. Understanding the difference helps you choose the right approach for your property and ensures the best results without risking damage.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Side-by-Side Comparison</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Pressure Washing */}
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600">
                  <h3 className="text-2xl font-bold mb-6 text-blue-600">Pressure Washing</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">How It Works:</h4>
                      <p className="text-gray-700">Uses high-pressure water (1,500-3,000+ PSI) to blast away dirt, grime, and stains from surfaces.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Concrete driveways and sidewalks</li>
                        <li>Paver patios and walkways</li>
                        <li>Brick surfaces and hardscapes</li>
                        <li>Parking lots and garage floors</li>
                        <li>Heavy-duty commercial applications</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Advantages:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Highly effective for tough stains</li>
                        <li>Works well on hard surfaces</li>
                        <li>Fast cleaning for large areas</li>
                        <li>Ideal for oil and grease removal</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Limitations:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Can damage delicate surfaces</li>
                        <li>May remove paint or protective coatings</li>
                        <li>Not suitable for roofs or siding</li>
                        <li>Shorter-lasting results</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Soft Washing */}
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-600">
                  <h3 className="text-2xl font-bold mb-6 text-green-600">Soft Washing</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">How It Works:</h4>
                      <p className="text-gray-700">Uses low-pressure application (under 500 PSI) combined with specialized cleaning solutions to eliminate organic growth.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Roofs (shingles, tiles, metal)</li>
                        <li>House siding (vinyl, stucco, wood)</li>
                        <li>Painted surfaces</li>
                        <li>Windows and screens</li>
                        <li>Fences and decks</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Advantages:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Safe for delicate surfaces</li>
                        <li>Kills algae and mold at the root</li>
                        <li>Longer-lasting results (4-6x longer)</li>
                        <li>Protects surface integrity</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Limitations:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Less effective on oil/grease stains</li>
                        <li>Requires specialized knowledge</li>
                        <li>May need dwell time for solutions</li>
                        <li>Not ideal for all hard surfaces</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Which Method for Which Surface?</h2>

              <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Surface Type</th>
                      <th className="px-6 py-4 text-center">Recommended Method</th>
                      <th className="px-6 py-4 text-left">Why?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { surface: 'Shingle Roofs', method: 'Soft Washing', reason: 'High pressure damages shingles and voids warranties' },
                      { surface: 'Vinyl Siding', method: 'Soft Washing', reason: 'Prevents water intrusion and surface damage' },
                      { surface: 'Stucco', method: 'Soft Washing', reason: 'Avoids cracks and penetration into porous surface' },
                      { surface: 'Concrete Driveways', method: 'Pressure Washing', reason: 'Durable surface can handle high pressure for deep cleaning' },
                      { surface: 'Paver Patios', method: 'Pressure Washing', reason: 'Effective for removing embedded dirt without damage' },
                      { surface: 'Wood Decks', method: 'Soft Washing', reason: 'Prevents splintering, gouging, and wood fiber damage' },
                      { surface: 'Painted Surfaces', method: 'Soft Washing', reason: 'Protects paint integrity and prevents peeling' },
                      { surface: 'Brick (Sealed)', method: 'Soft Washing', reason: 'Preserves sealant and prevents mortar erosion' },
                      { surface: 'Fences', method: 'Soft Washing', reason: 'Safe for both wood and vinyl without causing damage' },
                      { surface: 'Windows', method: 'Soft Washing', reason: 'Gentle cleaning without risking glass or seal damage' },
                    ].map((item, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-medium text-gray-900">{item.surface}</td>
                        <td className="px-6 py-4 text-center">
                          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                            item.method === 'Soft Washing' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {item.method}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-700">{item.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Why Deltona Homes Need Both Methods</h2>

              <div className="prose max-w-none text-gray-700 space-y-4">
                <p className="text-lg">
                  Deltona's subtropical climate creates unique challenges for property maintenance. High humidity, frequent rain, and warm temperatures accelerate organic growth like algae, mold, and mildew on exterior surfaces. This makes professional cleaning essential for maintaining property value and curb appeal.
                </p>
                <p className="text-lg">
                  Most Deltona properties benefit from a combination of both methods:
                </p>
              </div>

              <div className="mt-8 space-y-6">
                {[
                  {
                    title: 'Soft Washing for Vertical Surfaces',
                    desc: 'Your home\'s siding, windows, and especially roof should be soft washed. Deltona\'s algae and mold growth require the biological killing power of soft washing solutions, which penetrate and eliminate growth at the source while protecting delicate surfaces.'
                  },
                  {
                    title: 'Pressure Washing for Hardscapes',
                    desc: 'Driveways, sidewalks, and concrete patios accumulate oil stains, tire marks, and embedded dirt that require the mechanical power of pressure washing. These durable surfaces can handle and benefit from high-pressure cleaning.'
                  },
                  {
                    title: 'Professional Assessment',
                    desc: 'A professional cleaning company will assess each surface and use the appropriate method. Using the wrong technique can cause expensive damage or produce disappointing results.'
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Expert Cleaning for Your Deltona Property</h2>
              <p className="text-xl mb-8 text-blue-100">
                KJS Supreme Pressure Washing uses the right method for each surface, ensuring safe, effective cleaning that protects your investment.
              </p>
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
