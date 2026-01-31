'use client';

import { useState } from 'react';
import Link from 'next/link';

// Contact page structured data
const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact KJS Supreme Pressure Washing LLC',
  description: 'Get a free quote for professional pressure washing services in Central Florida. Contact KJS Supreme Pressure Washing by phone, email, or online form.',
  url: 'https://kjsupremepressurewashing.com/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'KJS Supreme Pressure Washing LLC',
    telephone: '+1-213-841-6924',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1757 S Village Dr',
      addressLocality: 'Deltona',
      addressRegion: 'FL',
      postalCode: '32725',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00',
      },
    ],
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section aria-labelledby="contact-heading" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-blue-200">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><span aria-hidden="true">/</span></li>
                <li aria-current="page" className="text-white font-medium">Contact</li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <h1 id="contact-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Ready to transform your property? Get a free, no-obligation quote today.
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section aria-labelledby="contact-form-heading" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <aside aria-labelledby="contact-info-heading">
                  <h2 id="contact-info-heading" className="text-3xl font-bold text-gray-900 mb-8">
                    Get in Touch
                  </h2>

                  <address className="not-italic space-y-6">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                        <a href="tel:+12138416924" className="text-blue-600 hover:text-blue-700 text-lg font-medium">
                          (213) 841-6924
                        </a>
                        <p className="text-gray-600 text-sm mt-1">Call or text anytime</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Service Area</h3>
                        <p className="text-gray-700">Based in Deltona, FL</p>
                        <p className="text-gray-600 text-sm mt-1">Serving 30+ cities across Central Florida</p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Business Hours</h3>
                        <dl className="text-gray-700 space-y-1">
                          <div className="flex justify-between">
                            <dt>Monday - Friday:</dt>
                            <dd className="font-medium">7:00 AM - 6:00 PM</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt>Saturday:</dt>
                            <dd className="font-medium">8:00 AM - 4:00 PM</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt>Sunday:</dt>
                            <dd className="font-medium text-gray-500">Closed</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </address>

                  {/* Quick Response Promise */}
                  <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-2">Fast Response Guarantee</h3>
                    <p className="text-gray-600">
                      We respond to all inquiries within 24 hours. For urgent requests,
                      give us a call and we'll get back to you even faster.
                    </p>
                  </div>

                  {/* Map */}
                  <div className="mt-8">
                    <h3 className="font-bold text-gray-900 mb-4">Service Area Map</h3>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1795352.9134898128!2d-81.646989!3d28.493136099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd10249a5fd6bd%3A0x1c8ca282e17f348d!2sCentral%20Florida%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1769783711791!5m2!1sen!2s"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="KJS Supreme Pressure Washing Service Area - Central Florida"
                      />
                    </div>
                  </div>
                </aside>

                {/* Contact Form */}
                <div>
                  <div className="bg-gray-50 p-8 rounded-2xl">
                    <h2 id="contact-form-heading" className="text-2xl font-bold text-gray-900 mb-2">
                      Request a Free Quote
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Fill out the form below and we'll get back to you within 24 hours with a customized quote.
                    </p>

                    {submitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                        <p className="text-gray-600 mb-6">
                          We've received your request and will contact you within 24 hours.
                        </p>
                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                          }}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Submit Another Request
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="John Smith"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                              placeholder="(555) 123-4567"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                            Service Interested In
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                          >
                            <option value="">Select a service...</option>
                            <option value="house-washing">House Washing</option>
                            <option value="roof-cleaning">Roof Cleaning</option>
                            <option value="driveway-cleaning">Driveway Cleaning</option>
                            <option value="deck-cleaning">Deck & Patio Cleaning</option>
                            <option value="gutter-cleaning">Gutter Cleaning</option>
                            <option value="pool-deck">Pool Deck Cleaning</option>
                            <option value="commercial">Commercial Services</option>
                            <option value="other">Other / Multiple Services</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Tell Us About Your Project
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                            placeholder="Describe your property and what you'd like cleaned. Include approximate square footage if known."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            'Get My Free Quote'
                          )}
                        </button>

                        <p className="text-sm text-gray-500 text-center">
                          By submitting this form, you agree to receive communications from KJS Supreme Pressure Washing.
                          We respect your privacy and will never share your information.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Contact Us Section */}
        <section aria-labelledby="why-contact-heading" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 id="why-contact-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Get a Quote from KJS Supreme?
            </h2>
            <ul className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto" role="list">
              <li className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold text-gray-900 mb-2">Free Estimates</h3>
                <p className="text-gray-600 text-sm">No-obligation quotes with transparent pricing. No hidden fees.</p>
              </li>
              <li className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-gray-900 mb-2">Fast Response</h3>
                <p className="text-gray-600 text-sm">We respond within 24 hours. Urgent? Call us for immediate assistance.</p>
              </li>
              <li className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm">Full liability coverage for your peace of mind.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Service Links */}
        <section aria-labelledby="services-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 id="services-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Services
            </h2>
            <nav aria-label="Services">
              <ul className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto" role="list">
                {[
                  { name: 'House Washing', href: '/services/house-washing' },
                  { name: 'Roof Cleaning', href: '/services/roof-cleaning' },
                  { name: 'Driveway Cleaning', href: '/services/driveway-cleaning' },
                  { name: 'Deck Cleaning', href: '/services/deck-cleaning' },
                  { name: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
                  { name: 'Patio Cleaning', href: '/services/patio-cleaning' },
                  { name: 'Pool Deck', href: '/services/pool-deck-cleaning' },
                  { name: 'Commercial', href: '/services/commercial-pressure-washing' },
                ].map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="inline-block px-4 py-2 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full text-sm font-medium transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </main>
    </>
  );
}
