import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'House Washing', href: '/services/house-washing' },
    { name: 'Driveway Cleaning', href: '/services/driveway-cleaning' },
    { name: 'Roof Cleaning', href: '/services/roof-cleaning' },
    { name: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
    { name: 'Patio Cleaning', href: '/services/patio-cleaning' },
    { name: 'Pool Deck Cleaning', href: '/services/pool-deck-cleaning' },
    { name: 'Commercial Services', href: '/services/commercial-pressure-washing' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'All Services', href: '/services' },
    { name: 'Service Areas', href: '/locations' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const locations = [
    { name: 'Deltona', href: '/pressure-washing-deltona-kjs-supreme-pressure-washing-llc/' },
    { name: 'Orlando', href: '/pressure-washing-orlando-fl/' },
    { name: 'Sanford', href: '/locations/sanford' },
    { name: 'Daytona Beach', href: '/locations/daytona-beach' },
    { name: 'DeLand', href: '/locations/deland' },
    { name: 'View All Areas', href: '/locations' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/kjssupremepressurewashing',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/kjssupremepressurewashing',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@kjssupremepressurewashing',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/kjs-supreme-pressure-washing',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Google',
      href: 'https://g.page/r/YOUR_GOOGLE_BUSINESS_ID',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300" itemScope itemType="https://schema.org/LocalBusiness">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Business Information */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo & Name */}
            <Link href="/" className="flex items-center gap-3 mb-6" aria-label="KJS Supreme Pressure Washing Home">
              <div className="relative w-12 h-12 bg-white rounded-lg p-1 flex-shrink-0">
                <Image
                  src="/logo.webp"
                  alt="KJS Supreme Pressure Washing Logo"
                  fill
                  className="object-contain"
                  itemProp="logo"
                />
              </div>
              <div>
                <span className="text-white text-lg font-bold block" itemProp="name">KJS Supreme Pressure Washing LLC</span>
                <span className="text-gray-400 text-sm" itemProp="description">Professional Exterior Cleaning</span>
              </div>
            </Link>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="tel:+13862102969"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group min-h-[48px]"
                itemProp="telephone"
                aria-label="Call KJS Supreme Pressure Washing at (386) 210-2969"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-gray-400 block">Call Us</span>
                  <span className="font-semibold">(386) 210-2969</span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-gray-300" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-gray-400 block">Located In</span>
                  <span className="font-semibold" itemProp="streetAddress">1757 S Village Dr</span>
                  <span className="block text-sm">
                    <span itemProp="addressLocality">Deltona</span>, <span itemProp="addressRegion">FL</span> <span itemProp="postalCode">32725</span>
                  </span>
                  <meta itemProp="addressCountry" content="US" />
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-gray-800">
              Our Services
            </h3>
            <ul className="space-y-1">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm py-2 block min-h-[44px] flex items-center"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm py-2 block min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-gray-800">
              Service Areas
            </h3>
            <ul className="space-y-1">
              {locations.map((location) => (
                <li key={location.name}>
                  <Link
                    href={location.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm py-2 block min-h-[44px] flex items-center"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} KJS Supreme Pressure Washing LLC. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 transition-colors py-1">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-300 transition-colors py-1">
                Terms of Service
              </Link>
              <a
                href="https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResultDetail?inquirytype=EntityName&directionType=Initial&searchNameOrder=KJSSUPREMEPRESSUREWASHING"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-300 transition-colors py-1"
              >
                Sunbiz Verification
              </a>
            </div>
          </div>
          <div className="text-xs text-gray-600 text-center mt-4 space-y-2">
            <p itemProp="areaServed" itemScope itemType="https://schema.org/GeoCircle">
              <span itemProp="description">Professional Pressure Washing Services in </span>
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">Deltona</span>,
                <span itemProp="addressLocality"> Orlando</span>,
                <span itemProp="addressLocality"> Sanford</span>,
                <span itemProp="addressLocality"> Daytona Beach</span> &
                <span itemProp="addressRegion"> Central Florida</span>
              </span>
            </p>
            <p className="text-gray-700">
              Licensed & Insured | House Washing | Roof Cleaning | Driveway Cleaning | Commercial Pressure Washing
            </p>
            <meta itemProp="priceRange" content="$$" />
            <meta itemProp="url" content="https://kjsupremepressurewashing.com" />
          </div>
        </div>
      </div>
    </footer>
  );
}
