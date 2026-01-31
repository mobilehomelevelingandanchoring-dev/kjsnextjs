import Link from 'next/link';

export default function LocationsSection() {
  const locations = [
    {
      name: 'Deltona',
      description: 'Proudly serving our home base with exceptional pressure washing services.',
      href: '/locations/deltona',
      image: '🏡',
      featured: true,
    },
    {
      name: 'Orlando',
      description: 'Professional cleaning services for Orlando and surrounding areas.',
      href: '/locations/orlando',
      image: '🌆',
    },
    {
      name: 'Daytona Beach',
      description: 'Coastal property cleaning specialists for Daytona Beach residents.',
      href: '/locations/daytona-beach',
      image: '🏖️',
    },
    {
      name: 'Sanford',
      description: 'Reliable pressure washing services throughout Sanford communities.',
      href: '/locations/sanford',
      image: '🏘️',
    },
    {
      name: 'Lake Mary',
      description: 'Premium property maintenance for Lake Mary homeowners and businesses.',
      href: '/locations/lake-mary',
      image: '🌳',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
            Service Areas
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Serving Central Florida
          </h2>
          <p className="text-lg text-gray-600">
            We're proud to bring professional pressure washing services to communities across Central Florida.
            Find your area and experience the KJS Supreme difference.
          </p>
        </div>

        {/* Featured Location */}
        <div className="mb-12">
          <Link
            href={locations[0].href}
            className="group block bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Content */}
              <div className="text-white flex flex-col justify-center">
                <div className="inline-block px-4 py-2 bg-yellow-400 text-blue-900 rounded-full text-sm font-bold mb-4 w-fit">
                  🏆 Headquarters
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                  {locations[0].name}
                </h3>
                <p className="text-xl text-blue-100 mb-6">
                  {locations[0].description}
                </p>
                <div className="flex items-center text-yellow-300 font-semibold text-lg">
                  Explore Services in {locations[0].name}
                  <svg className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="flex items-center justify-center">
                <div className="w-full h-64 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/20">
                  <div className="text-center">
                    <div className="text-8xl mb-4">{locations[0].image}</div>
                    <p className="text-white/70">Featured Location</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Other Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.slice(1).map((location, index) => (
            <Link
              key={index}
              href={location.href}
              className="group bg-gray-50 hover:bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {location.image}
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {location.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm">
                {location.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center text-blue-600 font-semibold text-sm">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Central Florida Coverage Map */}
        <div className="mt-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">We Cover All of Central Florida</h3>
            <p className="text-gray-600">Serving communities throughout Central Florida with professional pressure washing services</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1795352.9134898128!2d-81.646989!3d28.493136099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd10249a5fd6bd%3A0x1c8ca282e17f348d!2sCentral%20Florida%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1769783711791!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KJS Supreme Pressure Washing Service Area - Central Florida"
              className="w-full"
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">Don't see your area listed?</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Us About Your Location
          </Link>
        </div>
      </div>
    </section>
  );
}
