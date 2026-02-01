import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'How to Start a Gutter Cleaning Business | Complete Guide 2026',
  description: 'Learn how to start a profitable gutter cleaning business with our comprehensive guide. Equipment needs, pricing strategies, marketing tips, and business essentials for success.',
  keywords: ['start gutter cleaning business', 'gutter cleaning business guide', 'how to start gutter business', 'gutter cleaning startup', 'gutter business equipment', 'gutter cleaning pricing'],
  openGraph: {
    title: 'How to Start a Gutter Cleaning Business | Step-by-Step Guide',
    description: 'Everything you need to know to launch and grow a successful gutter cleaning business in 2026.',
    url: 'https://kjsupremepressurewashing.com/how-to-start-a-gutter-cleaning-business/',
    type: 'article',
    images: [
      {
        url: 'https://kjsupremepressurewashing.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Gutter Cleaning Business',
      },
    ],
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/how-to-start-a-gutter-cleaning-business/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function HowToStartGutterCleaningBusinessPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'How to Start a Gutter Cleaning Business', url: 'https://kjsupremepressurewashing.com/how-to-start-a-gutter-cleaning-business/' },
  ];

  const faqs = [
    {
      question: 'How much does it cost to start a gutter cleaning business?',
      answer: 'You can start a basic gutter cleaning business for $2,000-$5,000, which covers essential equipment like a ladder, safety gear, tools, and basic marketing. A more comprehensive setup with professional equipment may cost $5,000-$10,000.'
    },
    {
      question: 'Do I need a license to start a gutter cleaning business?',
      answer: 'Licensing requirements vary by state and municipality. Most areas require a general business license, and some may require contractor licensing or specific permits. Always check with your local city and county offices for specific requirements.'
    },
    {
      question: 'How much can you make with a gutter cleaning business?',
      answer: 'Gutter cleaning businesses can earn $50,000-$100,000+ annually. Solo operators typically earn $40-$80 per hour, with jobs ranging from $100-$300 depending on home size and gutter condition. Scaling with employees can significantly increase revenue.'
    },
    {
      question: 'What equipment do I need to start cleaning gutters?',
      answer: 'Essential equipment includes: extension ladders (20-40 ft), safety harness, work gloves, gutter scoop, buckets, leaf blower, garden hose with spray nozzle, and a reliable vehicle. Optional upgrades include gutter vacuum systems and stabilizer bars.'
    },
  ];

  const schemas = [
    generateWebPageSchema({
      title: 'How to Start a Gutter Cleaning Business | Complete Guide 2026',
      description: 'Learn how to start a profitable gutter cleaning business with our comprehensive guide.',
      url: 'https://kjsupremepressurewashing.com/how-to-start-a-gutter-cleaning-business/',
      type: 'Article'
    }),
    generateBreadcrumbSchema(breadcrumbs),
    generateFAQSchema(faqs),
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
                How to Start a Gutter Cleaning Business
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Your complete guide to launching a profitable gutter cleaning service in 2026
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p className="text-lg">
                  Starting a gutter cleaning business is an excellent opportunity for entrepreneurs looking to enter the home services industry with relatively low startup costs and high profit potential. Gutters need regular maintenance, creating consistent demand for professional cleaning services year-round.
                </p>
                <p className="text-lg">
                  This comprehensive guide covers everything you need to know to start and grow a successful gutter cleaning business, from equipment and licensing to pricing strategies and customer acquisition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
                Step-by-Step Guide to Starting Your Gutter Business
              </h2>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-gray-900">Research and Plan Your Business</h3>
                      <p className="text-gray-700 mb-3">
                        Before investing in equipment, research your local market. Identify your target area, analyze competitors, and determine what services you'll offer beyond basic gutter cleaning.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Research local demand and competition</li>
                        <li>Define your service area and target customers</li>
                        <li>Create a basic business plan with revenue projections</li>
                        <li>Decide on additional services (gutter repair, guard installation, power washing)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-gray-900">Handle Legal Requirements</h3>
                      <p className="text-gray-700 mb-3">
                        Establish your business legally to protect yourself and build credibility with customers.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Register your business name and structure (LLC recommended)</li>
                        <li>Obtain necessary licenses and permits from local authorities</li>
                        <li>Get an EIN (Employer Identification Number) from the IRS</li>
                        <li>Purchase general liability insurance ($1-2 million coverage)</li>
                        <li>Consider workers' compensation insurance if hiring employees</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-gray-900">Invest in Essential Equipment</h3>
                      <p className="text-gray-700 mb-3">
                        Quality equipment is crucial for safety, efficiency, and professional results.
                      </p>
                      <div className="space-y-3 text-gray-700">
                        <div>
                          <h4 className="font-semibold text-gray-900">Must-Have Equipment:</h4>
                          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                            <li>Extension ladders (20-32 ft minimum, consider 40 ft for larger homes)</li>
                            <li>Ladder stabilizer/standoff bars</li>
                            <li>Safety harness and roof anchor points</li>
                            <li>Heavy-duty work gloves</li>
                            <li>Gutter scoop and hand tools</li>
                            <li>5-gallon buckets for debris</li>
                            <li>Garden hose with pressure nozzle</li>
                            <li>Leaf blower (gas or battery-powered)</li>
                            <li>Reliable truck or van</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Optional Upgrades:</h4>
                          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                            <li>Gutter vacuum system ($500-$2,000)</li>
                            <li>Ladder lift system for easier positioning</li>
                            <li>Pressure washer for exterior gutter cleaning</li>
                            <li>Trailer for equipment transport</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-gray-900">Set Your Pricing Structure</h3>
                      <p className="text-gray-700 mb-3">
                        Competitive yet profitable pricing is essential for business success.
                      </p>
                      <div className="space-y-3 text-gray-700">
                        <p><strong>Common Pricing Models:</strong></p>
                        <ul className="list-disc list-inside space-y-2">
                          <li><strong>Per Linear Foot:</strong> $0.75-$1.50 per linear foot of gutter</li>
                          <li><strong>By Home Size:</strong> $100-$150 (1-story), $150-$250 (2-story), $250-$400 (3-story)</li>
                          <li><strong>Hourly Rate:</strong> $50-$100 per hour for residential work</li>
                        </ul>
                        <p className="mt-3">
                          Factor in travel distance, gutter condition, roof pitch, and accessibility when pricing. Offer discounts for recurring service agreements to build a steady client base.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-gray-900">Market Your Services</h3>
                      <p className="text-gray-700 mb-3">
                        Effective marketing is crucial for attracting your first customers and building momentum.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Create a professional website with clear service descriptions and pricing</li>
                        <li>Set up Google Business Profile for local search visibility</li>
                        <li>Use door hangers and flyers in target neighborhoods</li>
                        <li>Leverage social media (Facebook, Instagram) with before/after photos</li>
                        <li>Ask satisfied customers for reviews on Google and Facebook</li>
                        <li>Partner with real estate agents and property managers</li>
                        <li>Consider local advertising (community newspapers, home service directories)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      6
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-gray-900">Deliver Excellent Service</h3>
                      <p className="text-gray-700 mb-3">
                        Your reputation is everything in the service business. Focus on quality and customer satisfaction.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Show up on time and communicate professionally</li>
                        <li>Perform thorough cleanings, including downspout flushing</li>
                        <li>Clean up debris completely before leaving</li>
                        <li>Take before and after photos to show value</li>
                        <li>Offer maintenance tips and schedule future cleanings</li>
                        <li>Follow up after service to ensure satisfaction</li>
                        <li>Request reviews and referrals from happy customers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips for Success */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Tips for Growing Your Gutter Cleaning Business
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Offer Seasonal Packages</h3>
                  <p className="text-gray-700">
                    Create spring and fall cleaning packages to encourage twice-yearly service. This builds recurring revenue and client relationships.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Expand Service Offerings</h3>
                  <p className="text-gray-700">
                    Add complementary services like gutter guard installation, minor repairs, pressure washing, or window cleaning to increase revenue per customer.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Build a Referral Program</h3>
                  <p className="text-gray-700">
                    Offer discounts or free services to customers who refer new clients. Word-of-mouth is powerful in the home services industry.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Invest in Professional Tools</h3>
                  <p className="text-gray-700">
                    As you grow, upgrade to professional-grade equipment that increases efficiency and allows you to take on larger commercial jobs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Professional Gutter Cleaning in Florida?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                While you're building your gutter cleaning business, KJS Supreme Pressure Washing offers professional gutter cleaning services throughout Central Florida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/services"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
