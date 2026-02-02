import { Metadata } from 'next';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: 'Privacy Policy | KJS Supreme Pressure Washing LLC',
  description: 'Learn how KJS Supreme Pressure Washing LLC collects, uses, and protects your personal information. Our commitment to your privacy and data security.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'KJS Supreme privacy', 'customer privacy'],
  openGraph: {
    title: 'Privacy Policy | KJS Supreme Pressure Washing',
    description: 'Our commitment to protecting your privacy and personal information.',
    url: 'https://kjsupremepressurewashing.com/privacy-policy/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/privacy-policy/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://kjsupremepressurewashing.com' },
    { name: 'Privacy Policy', url: 'https://kjsupremepressurewashing.com/privacy-policy/' },
  ];

  const lastUpdated = 'February 1, 2026';

  const schemas = [
    generateWebPageSchema({
      title: 'Privacy Policy | KJS Supreme Pressure Washing LLC',
      description: 'Learn how KJS Supreme Pressure Washing LLC collects, uses, and protects your personal information.',
      url: 'https://kjsupremepressurewashing.com/privacy-policy/',
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-blue-100">
                Your privacy is important to us. Learn how we protect your information.
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Introduction</h2>
                <p className="text-gray-700 mb-4">
                  KJS Supreme Pressure Washing LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://kjsupremepressurewashing.com" className="text-blue-600 hover:text-blue-800">kjsupremepressurewashing.com</a>, use our services, or interact with us in any way.
                </p>
                <p className="text-gray-700">
                  Please read this Privacy Policy carefully. By using our website or services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our website or services.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Information We Collect</h2>

                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Personal Information You Provide</h3>
                <p className="text-gray-700 mb-4">We may collect the following personal information that you voluntarily provide to us:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address</li>
                  <li><strong>Service Information:</strong> Property address, service type requested, service preferences</li>
                  <li><strong>Payment Information:</strong> Billing address and payment details (processed securely through third-party payment processors)</li>
                  <li><strong>Communication Records:</strong> Messages, emails, phone call recordings, and other communications with us</li>
                  <li><strong>Account Information:</strong> Username, password, and account preferences (if applicable)</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Information Automatically Collected</h3>
                <p className="text-gray-700 mb-4">When you visit our website, we automatically collect certain information about your device and usage:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li><strong>Device Information:</strong> IP address, browser type, device type, operating system</li>
                  <li><strong>Usage Data:</strong> Pages viewed, time spent on pages, click-through rates, referring URLs</li>
                  <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                  <li><strong>Cookies and Tracking:</strong> Cookie identifiers, web beacons, and similar technologies</li>
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use the information we collect for the following purposes:</p>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Service Delivery</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Provide and deliver pressure washing services</li>
                      <li>Process and manage service requests and appointments</li>
                      <li>Send service confirmations, updates, and reminders</li>
                      <li>Process payments and send invoices</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Communication</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Respond to your inquiries and provide customer support</li>
                      <li>Send important notices about our services and policies</li>
                      <li>Provide quotes and estimates for services</li>
                      <li>Send promotional materials and special offers (with your consent)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">Business Operations</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Improve our website, services, and customer experience</li>
                      <li>Analyze usage patterns and trends</li>
                      <li>Prevent fraud and ensure security</li>
                      <li>Comply with legal obligations and protect our rights</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Share Your Information */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">How We Share Your Information</h2>
                <p className="text-gray-700 mb-4">We may share your information in the following circumstances:</p>

                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business (payment processors, scheduling software, email service providers)</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                  <li><strong>Protection of Rights:</strong> To protect our rights, property, safety, or that of our customers</li>
                  <li><strong>With Your Consent:</strong> When you explicitly agree to share your information</li>
                </ul>

                <p className="text-gray-700 mt-4">
                  <strong>We do not sell your personal information to third parties.</strong>
                </p>
              </section>

              {/* Data Security */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Secure server infrastructure and firewalls</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication requirements</li>
                  <li>Employee training on data privacy and security</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              {/* Your Privacy Rights */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Your Privacy Rights</h2>
                <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>

                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Restriction:</strong> Request restriction of processing under certain circumstances</li>
                </ul>

                <p className="text-gray-700 mt-4">
                  To exercise these rights, please contact us at <a href="tel:+12138416924" className="text-blue-600 hover:text-blue-800">(213) 841-6924</a> or <a href="mailto:info@kjsupremepressurewashing.com" className="text-blue-600 hover:text-blue-800">info@kjsupremepressurewashing.com</a>.
                </p>
              </section>

              {/* Cookies and Tracking */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. Cookies are small data files stored on your device.
                </p>

                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Types of Cookies We Use:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Marketing Cookies:</strong> Track visitors for advertising purposes</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>

                <p className="text-gray-700">
                  You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
                </p>
              </section>

              {/* Third-Party Links */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Third-Party Links</h2>
                <p className="text-gray-700">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Children's Privacy</h2>
                <p className="text-gray-700">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately so we can delete it.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Changes to This Privacy Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated policy on our website with a new "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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
