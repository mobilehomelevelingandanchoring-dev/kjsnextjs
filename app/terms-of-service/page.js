import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Terms of Service | KJS Supreme Pressure Washing LLC',
  description: 'Read the terms and conditions for using KJS Supreme Pressure Washing services. Important information about service agreements, liability, and customer responsibilities.',
  keywords: ['terms of service', 'service agreement', 'terms and conditions', 'KJS Supreme terms', 'pressure washing agreement'],
  openGraph: {
    title: 'Terms of Service | KJS Supreme Pressure Washing',
    description: 'Terms and conditions for pressure washing services in Central Florida.',
    url: 'https://kjsupremepressurewashing.com/terms-of-service/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/terms-of-service/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function TermsOfServicePage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'Terms of Service', url: 'https://kjsupremepressurewashing.com/terms-of-service/' },
  ];

  const lastUpdated = 'February 1, 2026';

  const schemas = [
    generateWebPageSchema({
      title: 'Terms of Service | KJS Supreme Pressure Washing LLC',
      description: 'Read the terms and conditions for using KJS Supreme Pressure Washing services.',
      url: 'https://kjsupremepressurewashing.com/terms-of-service/',
      type: 'WebPage'
    }),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <StructuredData schema={schemas} />

      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
              <p className="text-xl text-blue-100">
                Important information about using our pressure washing services
              </p>
              <p className="text-sm text-blue-200 mt-4">
                Last Updated: <time dateTime="2026-02-01">{lastUpdated}</time>
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">

              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Agreement to Terms</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to KJS Supreme Pressure Washing LLC. These Terms of Service ("Terms") govern your use of our website, services, and business relationship with us. By accessing our website at <a href="https://kjsupremepressurewashing.com" className="text-blue-600 hover:text-blue-800">kjsupremepressurewashing.com</a> or engaging our pressure washing services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-700">
                  If you do not agree with these Terms, please do not use our website or services. We reserve the right to modify these Terms at any time, and changes become effective immediately upon posting.
                </p>
              </section>

              {/* Services */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Services</h2>

                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Service Description</h3>
                <p className="text-gray-700 mb-4">
                  KJS Supreme Pressure Washing LLC provides professional exterior cleaning services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Residential and commercial pressure washing</li>
                  <li>House washing and soft washing</li>
                  <li>Roof cleaning</li>
                  <li>Driveway and concrete cleaning</li>
                  <li>Deck and patio cleaning</li>
                  <li>Fence washing</li>
                  <li>Gutter cleaning</li>
                  <li>Other exterior cleaning services</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Service Area</h3>
                <p className="text-gray-700 mb-4">
                  We primarily serve Central Florida, including but not limited to Deltona, Orlando, Daytona Beach, Sanford, and surrounding communities in Volusia, Seminole, Orange, and Lake counties. Service availability may vary by location.
                </p>
              </section>

              {/* Booking and Scheduling */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Booking and Scheduling</h2>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Service Requests</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>All service requests are subject to availability and confirmation</li>
                    <li>Quotes and estimates are valid for 30 days unless otherwise specified</li>
                    <li>We reserve the right to decline service requests at our discretion</li>
                    <li>Minimum service charges may apply for certain jobs</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Cancellations and Rescheduling</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Customers must provide at least 24 hours notice to cancel or reschedule</li>
                    <li>Cancellations with less than 24 hours notice may incur a cancellation fee</li>
                    <li>We reserve the right to reschedule services due to weather conditions or other unforeseen circumstances</li>
                    <li>No-shows may result in full charge for scheduled services</li>
                  </ul>
                </div>
              </section>

              {/* Pricing and Payment */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Pricing and Payment</h2>

                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Pricing</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Prices quoted are estimates based on information provided by the customer</li>
                  <li>Final pricing may vary if actual conditions differ from description</li>
                  <li>All prices are in U.S. Dollars and subject to applicable taxes</li>
                  <li>We reserve the right to modify pricing at any time</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Payment Terms</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Payment is due upon completion of services unless other arrangements are made</li>
                  <li>We accept cash, check, and major credit cards</li>
                  <li>A deposit may be required for large commercial projects</li>
                  <li>Late payments may incur additional fees</li>
                  <li>All payments are non-refundable once services are completed</li>
                </ul>
              </section>

              {/* Customer Responsibilities */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Customer Responsibilities</h2>

                <p className="text-gray-700 mb-4">As a customer, you agree to:</p>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Property Access</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Provide safe and clear access to all areas requiring service</li>
                      <li>Ensure water and electrical access is available if needed</li>
                      <li>Inform us of any hazards, delicate items, or special concerns</li>
                      <li>Secure pets and remove obstacles from work areas</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Property Condition</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Provide accurate description of property condition</li>
                      <li>Disclose any pre-existing damage or concerns</li>
                      <li>Ensure all windows and doors are properly sealed</li>
                      <li>Move or protect valuable items as needed</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Communication</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Provide accurate contact information</li>
                      <li>Respond to appointment confirmations promptly</li>
                      <li>Notify us of any changes or concerns immediately</li>
                      <li>Be available or designate a representative during service</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Liability and Warranties */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Liability and Warranties</h2>

                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Liability</h3>
                <p className="text-gray-700 mb-4">
                  KJS Supreme Pressure Washing LLC is fully licensed and insured. We maintain comprehensive liability insurance to protect our customers and their property. However:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>We are not liable for damage to improperly installed or maintained surfaces</li>
                  <li>We are not responsible for pre-existing damage not disclosed to us</li>
                  <li>Claims for damage must be reported within 48 hours of service</li>
                  <li>Our liability is limited to the cost of services provided</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Service Warranty</h3>
                <p className="text-gray-700 mb-4">
                  We guarantee satisfaction with our work. If you're not satisfied with our services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Notify us within 7 days of service completion</li>
                  <li>We will return to address any concerns at no additional charge</li>
                  <li>Warranty does not cover damage from customer negligence or natural causes</li>
                  <li>Warranty is void if unauthorized repairs or modifications are made</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Disclaimer of Warranties</h3>
                <p className="text-gray-700 mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  IN NO EVENT SHALL KJS SUPREME PRESSURE WASHING LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES.
                </p>
                <p className="text-gray-700">
                  OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM.
                </p>
              </section>

              {/* Intellectual Property */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All content on our website, including text, graphics, logos, images, and software, is the property of KJS Supreme Pressure Washing LLC or our licensors and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-700">
                  You may not reproduce, distribute, modify, or create derivative works from our website content without our express written permission.
                </p>
              </section>

              {/* Indemnification */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Indemnification</h2>
                <p className="text-gray-700">
                  You agree to indemnify, defend, and hold harmless KJS Supreme Pressure Washing LLC, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of or relating to your use of our services, violation of these Terms, or violation of any rights of another party.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Governing Law and Dispute Resolution</h2>

                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Governing Law</h3>
                <p className="text-gray-700 mb-6">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law principles.
                </p>

                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Dispute Resolution</h3>
                <p className="text-gray-700 mb-4">
                  In the event of a dispute, you agree to first attempt to resolve the matter informally by contacting us. If informal resolution is unsuccessful:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Any legal action must be brought in the courts of Volusia County, Florida</li>
                  <li>You agree to submit to the personal jurisdiction of these courts</li>
                  <li>Any claims must be brought within one year of the dispute arising</li>
                </ul>
              </section>

              {/* Severability */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Severability</h2>
                <p className="text-gray-700">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be replaced with a valid provision that most closely matches the intent of the original.
                </p>
              </section>

              {/* Entire Agreement */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Entire Agreement</h2>
                <p className="text-gray-700">
                  These Terms, together with our Privacy Policy and any service agreements, constitute the entire agreement between you and KJS Supreme Pressure Washing LLC regarding our services and supersede all prior agreements and understandings.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">KJS Supreme Pressure Washing LLC</p>
                  <p className="text-gray-700">Deltona, Florida</p>
                  <p className="text-gray-700 mt-2">
                    Phone: <a href="tel:+12138416924" className="text-blue-600 hover:text-blue-800">(213) 841-6924</a>
                  </p>
                  <p className="text-gray-700">
                    Email: <a href="mailto:info@kjsupremepressurewashing.com" className="text-blue-600 hover:text-blue-800">info@kjsupremepressurewashing.com</a>
                  </p>
                  <p className="text-gray-700 mt-2">
                    Website: <a href="https://kjsupremepressurewashing.com" className="text-blue-600 hover:text-blue-800">kjsupremepressurewashing.com</a>
                  </p>
                </div>
              </section>

              {/* Acknowledgment */}
              <section className="mb-12">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <p className="text-gray-900 font-semibold mb-2">Important Notice</p>
                  <p className="text-gray-700">
                    By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please discontinue use of our services immediately.
                  </p>
                </div>
              </section>

              {/* Back to Home */}
              <div className="text-center mt-12 pt-8 border-t border-gray-200">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
              </div>

            </div>
          </div>
        </article>
      </main>
    </>
  );
}
