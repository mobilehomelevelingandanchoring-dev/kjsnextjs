import Link from 'next/link';

export default function CTASection({ variant = 'default' }) {
  // Default CTA
  if (variant === 'default') {
    return (
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Get a free quote today and discover why hundreds of homeowners trust KJS Supreme
              for their pressure washing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-10 py-5 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link
                href="tel:+12138416924"
                className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-200 border-2 border-white/30"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Contact CTA variant
  if (variant === 'contact') {
    return (
      <section className="py-20 bg-gradient-to-br from-green-500 to-green-700">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Contact Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Let's Get Started!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Contact us today for a free, no-obligation quote. Our friendly team is ready to answer
                  your questions and schedule your service.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                      <a href="tel:+12138416924" className="text-green-600 hover:text-green-700 font-semibold">
                        +1 (213) 841-6924
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                      <p className="text-gray-600">Deltona, FL</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Mon-Sat: 8am - 6pm</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - CTA Buttons */}
              <div className="flex flex-col justify-center space-y-4">
                <Link
                  href="/contact"
                  className="block w-full px-8 py-5 bg-green-600 text-white text-center font-bold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Request Free Quote
                </Link>
                <Link
                  href="/services"
                  className="block w-full px-8 py-5 bg-gray-900 text-white text-center font-bold rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  View Our Services
                </Link>
                <Link
                  href="/faq"
                  className="block w-full px-8 py-5 bg-white text-gray-900 text-center font-bold rounded-lg hover:bg-gray-50 transition-colors duration-200 border-2 border-gray-200"
                >
                  Have Questions? Visit FAQ
                </Link>

                {/* Trust Badges */}
                <div className="pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">500+</div>
                      <div className="text-xs text-gray-600">Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">10+</div>
                      <div className="text-xs text-gray-600">Years</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">5★</div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Simple CTA variant
  if (variant === 'simple') {
    return (
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Ready to Get Started?
              </h2>
              <p className="text-gray-400 text-lg">
                Schedule your free consultation today
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center whitespace-nowrap"
              >
                Get Free Quote
              </Link>
              <Link
                href="tel:+12138416924"
                className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center whitespace-nowrap"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
}
