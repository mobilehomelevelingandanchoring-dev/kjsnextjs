import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Pressure Washing Costs 2026 | Pricing Guide for Florida Homeowners',
  description: 'Comprehensive guide to pressure washing costs in Florida. Learn average prices for house washing, roof cleaning, driveway cleaning & more. Pricing factors explained.',
  keywords: ['pressure washing costs', 'pressure washing prices', 'how much does pressure washing cost', 'pressure washing pricing Florida', 'house washing cost'],
  openGraph: {
    title: 'Pressure Washing Costs | Complete Pricing Guide',
    description: 'Understand pressure washing costs and pricing factors. Get accurate estimates for Florida pressure washing services.',
    url: 'https://kjsupremepressurewashing.com/pressure-washing-costs',
    type: 'article',
    images: [{ url: 'https://kjsupremepressurewashing.com/og-image.jpg', width: 1200, height: 630, alt: 'Pressure Washing Costs Guide' }],
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/pressure-washing-costs',
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function PressureWashingCostsPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'Pressure Washing Costs', url: 'https://kjsupremepressurewashing.com/pressure-washing-costs' },
  ];

  const faqs = [
    {
      question: 'How much does it cost to pressure wash a house?',
      answer: 'House washing typically costs $200-$500 for most single-story homes, $300-$700 for two-story homes, and $400-$900 for larger or three-story homes in Florida. Actual costs depend on square footage, siding type, and condition.'
    },
    {
      question: 'What is the average cost to pressure wash a driveway?',
      answer: 'Driveway pressure washing averages $100-$300 depending on size and condition. Smaller driveways (200-400 sq ft) typically cost $100-$150, while larger driveways (800+ sq ft) range from $200-$300 or more.'
    },
    {
      question: 'How often should I pressure wash my house in Florida?',
      answer: 'In Florida\'s humid climate, most homes benefit from pressure washing 1-2 times per year. Annual cleaning is minimum recommended, while twice-yearly cleaning (spring and fall) provides optimal maintenance for most properties.'
    },
    {
      question: 'Is soft washing more expensive than pressure washing?',
      answer: 'Soft washing and pressure washing are typically priced similarly. The cost difference is minimal because soft washing requires specialized cleaning solutions and techniques. The value lies in safer, more effective cleaning for delicate surfaces.'
    },
  ];

  const schemas = [
    generateWebPageSchema({
      title: 'Pressure Washing Costs 2026 | Pricing Guide for Florida Homeowners',
      description: 'Comprehensive guide to pressure washing costs in Florida. Learn average prices for house washing, roof cleaning, driveway cleaning & more.',
      url: 'https://kjsupremepressurewashing.com/pressure-washing-costs',
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Pressure Washing Costs Guide</h1>
              <p className="text-xl md:text-2xl text-blue-100">Complete pricing information for Florida homeowners in 2026</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Understanding pressure washing costs helps you budget for property maintenance and ensures you get fair pricing. This comprehensive guide covers average costs for common pressure washing services in Florida, factors that affect pricing, and tips for getting the best value.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Average Pressure Washing Costs by Service</h2>

              <div className="space-y-6">
                {[
                  {
                    service: 'House Washing',
                    range: '$200 - $900',
                    details: [
                      'Single-story (1,000-1,500 sq ft): $200-$400',
                      'Two-story (2,000-3,000 sq ft): $300-$700',
                      'Large homes (3,500+ sq ft): $500-$900+',
                      'Price per square foot: $0.08-$0.20'
                    ]
                  },
                  {
                    service: 'Roof Cleaning',
                    range: '$250 - $800',
                    details: [
                      'Small roofs (1,000-1,500 sq ft): $250-$400',
                      'Medium roofs (2,000-3,000 sq ft): $400-$600',
                      'Large roofs (3,500+ sq ft): $600-$800+',
                      'Soft washing recommended for shingle roofs'
                    ]
                  },
                  {
                    service: 'Driveway Cleaning',
                    range: '$100 - $400',
                    details: [
                      'Small driveway (200-400 sq ft): $100-$150',
                      'Medium driveway (400-800 sq ft): $150-$250',
                      'Large driveway (800-1,200 sq ft): $250-$400',
                      'Additional cost for oil stain treatment'
                    ]
                  },
                  {
                    service: 'Deck or Patio Cleaning',
                    range: '$150 - $500',
                    details: [
                      'Small deck/patio (100-200 sq ft): $150-$250',
                      'Medium deck/patio (200-400 sq ft): $250-$350',
                      'Large deck/patio (400+ sq ft): $350-$500+',
                      'Wood decks may require additional treatment'
                    ]
                  },
                  {
                    service: 'Fence Washing',
                    range: '$150 - $500',
                    details: [
                      'Priced per linear foot: $1.50-$3.00',
                      '100 linear feet: $150-$300',
                      '200 linear feet: $300-$500',
                      'Both sides cleaned for quoted price'
                    ]
                  },
                  {
                    service: 'Gutter Cleaning',
                    range: '$100 - $300',
                    details: [
                      'Single-story home: $100-$150',
                      'Two-story home: $150-$250',
                      'Large or complex homes: $250-$300+',
                      'Often includes exterior gutter brightening'
                    ]
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-semibold text-gray-900">{item.service}</h3>
                      <span className="text-2xl font-bold text-blue-600">{item.range}</span>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      {item.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Factors That Affect Pressure Washing Costs</h2>

              <div className="space-y-6">
                {[
                  {
                    factor: 'Property Size',
                    desc: 'Larger properties require more time, labor, and cleaning solution, increasing overall costs. Most companies charge by square footage or project scope.'
                  },
                  {
                    factor: 'Surface Type & Condition',
                    desc: 'Delicate surfaces requiring soft washing, heavily soiled areas, or surfaces with stubborn stains may cost more due to specialized techniques and solutions needed.'
                  },
                  {
                    factor: 'Accessibility',
                    desc: 'Hard-to-reach areas, steep roofs, multi-story buildings, or properties with limited access may require specialized equipment and increase labor time.'
                  },
                  {
                    factor: 'Location & Travel',
                    desc: 'Properties outside standard service areas may incur travel fees. Urban vs. rural locations can also affect pricing due to operating costs.'
                  },
                  {
                    factor: 'Additional Services',
                    desc: 'Combining multiple services (house washing + roof cleaning) often results in package discounts. However, specialty treatments add to base costs.'
                  },
                  {
                    factor: 'Seasonal Demand',
                    desc: 'Peak seasons (spring and fall in Florida) may have higher demand. Some companies offer off-season discounts or maintenance package pricing.'
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.factor}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Tips for Getting the Best Value</h2>

              <div className="space-y-4">
                {[
                  'Get multiple quotes from licensed and insured companies to compare pricing and services',
                  'Ask about package deals when combining services (house + roof + driveway often costs less together)',
                  'Schedule regular maintenance to prevent heavy buildup that costs more to clean',
                  'Book during off-peak seasons when companies may offer discounts',
                  'Verify what\'s included in the quote (prep work, post-cleaning, guarantee)',
                  'Check reviews and references - cheapest isn\'t always best value',
                  'Ask about maintenance programs that offer discounted rates for recurring service',
                  'Ensure the company is properly licensed and insured before accepting the lowest bid'
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700 text-lg">{tip}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get a Free, Accurate Quote for Your Property</h2>
              <p className="text-xl mb-8 text-blue-100">Contact KJS Supreme Pressure Washing for transparent pricing and professional service in Central Florida.</p>
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
