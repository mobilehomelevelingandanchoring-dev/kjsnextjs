import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateOrganizationSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'About Us | KJS Supreme Pressure Washing - Florida Exterior Cleaning Experts',
  description: 'Learn about KJS Supreme Pressure Washing, your trusted exterior cleaning company serving Central Florida. Professional, reliable, and dedicated to excellence since day one.',
  keywords: ['about KJS Supreme', 'pressure washing company Florida', 'exterior cleaning experts', 'Central Florida pressure washing', 'professional cleaning services'],
  openGraph: {
    title: 'About KJS Supreme Pressure Washing | Our Story',
    description: 'Discover the KJS Supreme difference. Professional pressure washing and exterior cleaning services throughout Central Florida.',
    url: 'https://kjsupremepressurewashing.com/about-us/',
    type: 'website',
    images: [
      {
        url: 'https://kjsupremepressurewashing.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About KJS Supreme Pressure Washing',
      },
    ],
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/about-us/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function AboutUsPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'About Us', url: 'https://kjsupremepressurewashing.com/about-us/' },
  ];

  const schemas = [
    generateOrganizationSchema(),
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
                About KJS Supreme Pressure Washing
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Your trusted partner for professional exterior cleaning throughout Central Florida
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Story
              </h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p className="text-lg">
                  KJS Supreme Pressure Washing was founded with a simple mission: to provide Central Florida property owners with reliable, professional exterior cleaning services they can trust. What started as a commitment to quality and customer satisfaction has grown into one of the region's most respected pressure washing companies.
                </p>
                <p className="text-lg">
                  We understand that your property is one of your most valuable investments. That's why we treat every home and business we service as if it were our own. Our team combines industry-leading techniques with eco-friendly solutions to deliver exceptional results that enhance curb appeal and protect your property's value.
                </p>
                <p className="text-lg">
                  Based in Deltona and serving communities throughout Central Florida, we've built our reputation on honesty, reliability, and outstanding workmanship. Every member of our team is trained in the latest pressure washing and soft washing techniques to ensure your property receives the care it deserves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                Our Core Values
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality First</h3>
                  <p className="text-gray-700">
                    We never compromise on quality. Every job receives the same meticulous attention to detail and professional care.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Customer-Focused</h3>
                  <p className="text-gray-700">
                    Your satisfaction is our success. We listen to your needs and deliver solutions that exceed expectations.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Eco-Responsible</h3>
                  <p className="text-gray-700">
                    We use environmentally safe cleaning solutions that protect your property and the planet.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Why Choose KJS Supreme?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Licensed & Insured</h3>
                    <p className="text-gray-700">
                      We maintain full licensing and comprehensive insurance coverage to protect your property and provide peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Professional Equipment</h3>
                    <p className="text-gray-700">
                      We invest in commercial-grade equipment and stay current with the latest cleaning technologies to deliver superior results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Trained Technicians</h3>
                    <p className="text-gray-700">
                      Our team receives ongoing training in proper pressure washing techniques, safety protocols, and customer service excellence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">100% Satisfaction Guarantee</h3>
                    <p className="text-gray-700">
                      We stand behind our work. If you're not completely satisfied, we'll make it right or refund your money.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Local Florida Expertise</h3>
                    <p className="text-gray-700">
                      As a local company, we understand the unique challenges of Florida's climate and how to protect your property effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Serving Central Florida
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We proudly serve residential and commercial clients throughout Central Florida, including Deltona, Orlando, Daytona Beach, Sanford, DeBary, Orange City, Lake Mary, Casselberry, Winter Springs, Oviedo, and surrounding communities in Volusia, Seminole, Orange, and Lake counties.
              </p>
              <p className="text-lg text-gray-700">
                Whether you need house washing, roof cleaning, driveway cleaning, or commercial pressure washing, our team is ready to deliver exceptional results. We offer flexible scheduling, competitive pricing, and the quality service you deserve.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Experience the KJS Supreme Difference
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Ready to see what professional pressure washing can do for your property? Contact us today for a free quote.
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
      </main>
    </>
  );
}
