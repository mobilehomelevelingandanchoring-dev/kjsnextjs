import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Gallery | KJS Supreme Pressure Washing',
  description: 'View our pressure washing project gallery. See before and after results of house washing, driveway cleaning, roof cleaning, and commercial pressure washing in Central Florida.',
  keywords: ['pressure washing gallery', 'before after pressure washing', 'house washing results', 'driveway cleaning photos', 'Central Florida pressure washing'],
  openGraph: {
    title: 'Pressure Washing Gallery | KJS Supreme',
    description: 'Browse our portfolio of professional pressure washing projects across Central Florida.',
    images: ['/images/house-washing-deltona-fl-01.jpg'],
  },
};

// Gallery images data with SEO-friendly information
const galleryImages = [
  {
    id: 1,
    src: '/images/house-washing-deltona-fl-01.jpg',
    alt: 'Professional house washing service in Deltona, FL - exterior home cleaning by KJS Supreme Pressure Washing',
    title: 'House Washing',
    location: 'Deltona, FL',
    category: 'house-washing',
  },
  {
    id: 2,
    src: '/images/driveway-cleaning-orlando-fl-01.jpg',
    alt: 'Driveway pressure washing in Orlando, FL - concrete cleaning and restoration services',
    title: 'Driveway Cleaning',
    location: 'Orlando, FL',
    category: 'driveway-cleaning',
  },
  {
    id: 3,
    src: '/images/roof-cleaning-sanford-fl-01.jpg',
    alt: 'Soft wash roof cleaning in Sanford, FL - safe and effective roof stain removal',
    title: 'Roof Cleaning',
    location: 'Sanford, FL',
    category: 'roof-cleaning',
  },
  {
    id: 4,
    src: '/images/patio-cleaning-lake-mary-fl-01.jpg',
    alt: 'Patio pressure washing in Lake Mary, FL - outdoor living space restoration',
    title: 'Patio Cleaning',
    location: 'Lake Mary, FL',
    category: 'patio-cleaning',
  },
  {
    id: 5,
    src: '/images/commercial-pressure-washing-orlando-fl-01.jpg',
    alt: 'Commercial pressure washing in Orlando, FL - business property exterior cleaning',
    title: 'Commercial Washing',
    location: 'Orlando, FL',
    category: 'commercial',
  },
  {
    id: 6,
    src: '/images/sidewalk-cleaning-winter-park-fl-01.jpg',
    alt: 'Sidewalk pressure washing in Winter Park, FL - walkway and path cleaning services',
    title: 'Sidewalk Cleaning',
    location: 'Winter Park, FL',
    category: 'sidewalk-cleaning',
  },
  {
    id: 7,
    src: '/images/fence-cleaning-deltona-fl-01.jpg',
    alt: 'Fence cleaning and restoration in Deltona, FL - wood and vinyl fence pressure washing',
    title: 'Fence Cleaning',
    location: 'Deltona, FL',
    category: 'fence-cleaning',
  },
  {
    id: 8,
    src: '/images/pool-deck-cleaning-daytona-beach-fl-01.jpg',
    alt: 'Pool deck pressure washing in Daytona Beach, FL - slip-resistant surface cleaning',
    title: 'Pool Deck Cleaning',
    location: 'Daytona Beach, FL',
    category: 'pool-deck-cleaning',
  },
  {
    id: 9,
    src: '/images/concrete-cleaning-apopka-fl-01.jpg',
    alt: 'Concrete cleaning and stain removal in Apopka, FL - professional surface restoration',
    title: 'Concrete Cleaning',
    location: 'Apopka, FL',
    category: 'concrete-cleaning',
  },
  {
    id: 10,
    src: '/images/soft-washing-debary-fl-01.jpg',
    alt: 'Soft washing service in DeBary, FL - gentle cleaning for delicate surfaces',
    title: 'Soft Washing',
    location: 'DeBary, FL',
    category: 'soft-washing',
  },
  {
    id: 11,
    src: '/images/gutter-cleaning-casselberry-fl-01.jpg',
    alt: 'Gutter cleaning and brightening in Casselberry, FL - exterior gutter restoration',
    title: 'Gutter Cleaning',
    location: 'Casselberry, FL',
    category: 'gutter-cleaning',
  },
  {
    id: 12,
    src: '/images/deck-cleaning-oviedo-fl-01.jpg',
    alt: 'Deck pressure washing in Oviedo, FL - wood deck cleaning and restoration',
    title: 'Deck Cleaning',
    location: 'Oviedo, FL',
    category: 'deck-cleaning',
  },
  {
    id: 13,
    src: '/images/paver-sealing-kissimmee-fl-01.jpg',
    alt: 'Paver cleaning and sealing in Kissimmee, FL - paver restoration and protection',
    title: 'Paver Sealing',
    location: 'Kissimmee, FL',
    category: 'paver-cleaning',
  },
  {
    id: 14,
    src: '/images/window-cleaning-celebration-fl-01.jpg',
    alt: 'Window cleaning service in Celebration, FL - streak-free exterior window washing',
    title: 'Window Cleaning',
    location: 'Celebration, FL',
    category: 'window-cleaning',
  },
];

const categories = [
  { name: 'All Projects', slug: 'all', description: 'View all our work' },
  { name: 'House Washing', slug: 'house-washing', description: 'Exterior home cleaning' },
  { name: 'Driveway Cleaning', slug: 'driveway-cleaning', description: 'Concrete restoration' },
  { name: 'Roof Cleaning', slug: 'roof-cleaning', description: 'Soft wash results' },
  { name: 'Commercial', slug: 'commercial', description: 'Business properties' },
];

// JSON-LD Structured Data for ImageGallery
function generateGallerySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'KJS Supreme Pressure Washing Project Gallery',
    description: 'Professional pressure washing project photos showcasing our work across Central Florida including house washing, driveway cleaning, roof cleaning, and commercial services.',
    url: 'https://kjsupremepressurewashing.com/gallery',
    publisher: {
      '@type': 'LocalBusiness',
      name: 'KJS Supreme Pressure Washing LLC',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Deltona',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    },
    image: galleryImages.map((img) => ({
      '@type': 'ImageObject',
      url: `https://kjsupremepressurewashing.com${img.src}`,
      name: img.title,
      description: img.alt,
      contentLocation: {
        '@type': 'Place',
        name: img.location,
      },
    })),
  };
}

export default function GalleryPage() {
  const gallerySchema = generateGallerySchema();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section aria-labelledby="gallery-heading" className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 id="gallery-heading" className="text-4xl md:text-5xl font-bold mb-4">
              Our Pressure Washing Projects Gallery
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See the dramatic transformations we deliver for homes and businesses across Central Florida.
              Our professional pressure washing services restore curb appeal and protect your property investment.
            </p>
          </div>
        </section>

        {/* Categories Filter Section */}
        <section aria-labelledby="categories-heading" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 id="categories-heading" className="text-3xl font-bold text-center mb-8 text-gray-800">
              Browse by Category
            </h2>
            <nav aria-label="Gallery categories">
              <ul className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <button
                      className="px-6 py-3 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full text-gray-800 font-medium transition-colors border-2 border-transparent hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-label={`Filter by ${category.name}`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* Main Gallery Section */}
        <section aria-labelledby="projects-heading" className="py-16">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="projects-heading" className="text-3xl font-bold mb-4 text-gray-800">
                Recent Projects
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Each project showcases our commitment to quality and attention to detail.
                Serving Deltona, Orlando, Sanford, Daytona Beach, and 30+ cities across Central Florida.
              </p>
            </header>

            {/* Semantic Gallery Grid */}
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
              aria-label="Pressure washing project gallery"
            >
              {galleryImages.map((image) => (
                <li key={image.id}>
                  <figure className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold">
                          View Project
                        </span>
                      </div>
                    </div>
                    <figcaption className="p-4">
                      <h3 className="font-bold text-lg text-gray-800">{image.title}</h3>
                      <p className="text-gray-600 flex items-center gap-1 mt-1">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {image.location}
                      </p>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services Highlight Section */}
        <section aria-labelledby="services-highlight" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 id="services-highlight" className="text-3xl font-bold text-center mb-4 text-gray-800">
              Our Pressure Washing Services
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              From residential homes to commercial properties, we deliver exceptional results with every project.
            </p>

            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list">
              {[
                { name: 'House Washing', icon: '🏠', href: '/services/house-washing' },
                { name: 'Driveway Cleaning', icon: '🚗', href: '/services/driveway-cleaning' },
                { name: 'Roof Cleaning', icon: '🏡', href: '/services/roof-cleaning' },
                { name: 'Commercial', icon: '🏢', href: '/services/commercial-pressure-washing' },
                { name: 'Deck Cleaning', icon: '🪵', href: '/services/deck-cleaning' },
                { name: 'Patio Cleaning', icon: '☀️', href: '/services/patio-cleaning' },
                { name: 'Pool Deck', icon: '🏊', href: '/services/pool-deck-cleaning' },
                { name: 'Soft Washing', icon: '💧', href: '/services/soft-washing' },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex flex-col items-center p-6 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors text-center group"
                  >
                    <span className="text-3xl mb-2" role="img" aria-hidden="true">
                      {service.icon}
                    </span>
                    <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section aria-labelledby="cta-heading" className="py-16 bg-blue-900">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers across Central Florida.
              Get a free, no-obligation estimate today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors text-lg"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+12138416924"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (213) 841-6924
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
