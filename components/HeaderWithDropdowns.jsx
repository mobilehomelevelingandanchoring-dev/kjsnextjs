'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeaderWithDropdowns() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const serviceLinks = [
    { name: 'All Services', href: '/services' },
    { name: 'House Washing', href: '/services/house-washing' },
    { name: 'Driveway Cleaning', href: '/services/driveway-cleaning' },
    { name: 'Roof Cleaning', href: '/services/roof-cleaning' },
    { name: 'Deck Cleaning', href: '/services/deck-cleaning' },
    { name: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
    { name: 'Patio Cleaning', href: '/services/patio-cleaning' },
    { name: 'Fence Cleaning', href: '/services/fence-cleaning' },
    { name: 'Pool Deck Cleaning', href: '/services/pool-deck-cleaning' },
    { name: 'Sidewalk Cleaning', href: '/services/sidewalk-cleaning' },
    { name: 'Concrete Cleaning', href: '/services/concrete-cleaning' },
    { name: 'Paver Cleaning & Sealing', href: '/services/paver-cleaning' },
    { name: 'Soft Washing', href: '/services/soft-washing' },
    { name: 'Window Cleaning', href: '/services/window-cleaning' },
    { name: 'Commercial Services', href: '/services/commercial-pressure-washing' },
  ];

  const locationLinks = [
    { name: 'All Locations', href: '/locations' },
    { name: 'Deltona', href: '/locations/deltona' },
    { name: 'Orlando', href: '/locations/orlando' },
    { name: 'Daytona Beach', href: '/locations/daytona-beach' },
    { name: 'Sanford', href: '/locations/sanford' },
    { name: 'Lake Mary', href: '/locations/lake-mary' },
    { name: 'Winter Park', href: '/locations/winter-park' },
    { name: 'Apopka', href: '/locations/apopka' },
    { name: 'Altamonte Springs', href: '/locations/altamonte-springs' },
    { name: 'Casselberry', href: '/locations/casselberry' },
    { name: 'Maitland', href: '/locations/maitland' },
    { name: 'Winter Garden', href: '/locations/winter-garden' },
    { name: 'Oviedo', href: '/locations/oviedo' },
    { name: 'Winter Springs', href: '/locations/winter-springs' },
    { name: 'DeBary', href: '/locations/debary' },
    { name: 'DeLand', href: '/locations/deland' },
    { name: 'Orange City', href: '/locations/orange-city' },
    { name: 'Port Orange', href: '/locations/port-orange' },
    { name: 'New Smyrna Beach', href: '/locations/new-smyrna-beach' },
    { name: 'Palm Coast', href: '/locations/palm-coast' },
    { name: 'Kissimmee', href: '/locations/kissimmee' },
    { name: 'St. Cloud', href: '/locations/st-cloud' },
    { name: 'Celebration', href: '/locations/celebration' },
    { name: 'Clermont', href: '/locations/clermont' },
    { name: 'Mount Dora', href: '/locations/mount-dora' },
    { name: 'Tavares', href: '/locations/tavares' },
    { name: 'Eustis', href: '/locations/eustis' },
    { name: 'Ocoee', href: '/locations/ocoee' },
    { name: 'Winter Haven', href: '/locations/winter-haven' },
    { name: 'Davenport', href: '/locations/davenport' },
    { name: 'Haines City', href: '/locations/haines-city' },
    { name: 'Wekiwa Springs', href: '/locations/wekiwa-springs' },
    { name: 'Osteen', href: '/locations/osteen' },
    { name: 'Zellwood', href: '/locations/zellwood' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true, dropdown: 'services' },
    { name: 'Residential', href: '/residential' },
    { name: 'Commercial', href: '/commercial' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Locations', href: '/locations', hasDropdown: true, dropdown: 'locations' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* LOGO + BUSINESS NAME */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 lg:w-14 lg:h-14">
              <Image
                src="/logo.webp"
                alt="KJS Supreme Pressure Washing Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800 leading-tight">
                KJS Supreme
              </span>
              <span className="text-sm text-gray-600">
                Pressure Washing LLC
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 hover:underline underline-offset-4 flex items-center gap-1"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {link.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {(link.dropdown === 'services' ? serviceLinks : locationLinks).map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* MOBILE CTA + MENU BUTTON */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Phone Button */}
            <a
              href="tel:+12138416924"
              className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Call us"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="flex flex-col space-y-1.5 p-3 hover:bg-gray-100 rounded-lg min-w-[44px] min-h-[44px] items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>

          {/* Desktop CTA Button */}
          <a
            href="tel:+12138416924"
            className="hidden lg:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (213) 841-6924
          </a>
        </div>

        {/* MOBILE NAV */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4 max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-lg transition-colors duration-200 min-h-[48px]"
                    onClick={() => !link.hasDropdown && setMobileMenuOpen(false)}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {link.hasDropdown && (
                    <div className="pl-4 mt-1 space-y-1 border-l-2 border-blue-200 ml-4 max-h-48 overflow-y-auto">
                      {(link.dropdown === 'services' ? serviceLinks : locationLinks).map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-2.5 px-4 text-sm text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-50 min-h-[44px] flex items-center"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="block w-full py-4 px-4 bg-yellow-400 text-blue-900 font-bold rounded-lg text-center hover:bg-yellow-300 transition-colors min-h-[56px] flex items-center justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
