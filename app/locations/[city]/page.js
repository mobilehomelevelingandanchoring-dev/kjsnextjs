import Link from 'next/link';
import { notFound } from 'next/navigation';

const locations = {
  'deltona': { name: 'Deltona', county: 'Volusia County', description: 'Our home base in Volusia County. Fast response times and deep local knowledge.' },
  'orlando': { name: 'Orlando', county: 'Orange County', description: 'Serving Orlando metro area with professional pressure washing for homes and businesses.' },
  'daytona-beach': { name: 'Daytona Beach', county: 'Volusia County', description: 'Coastal property specialists serving Daytona Beach and the beachside communities.' },
  'sanford': { name: 'Sanford', county: 'Seminole County', description: 'Professional pressure washing for historic Sanford and surrounding neighborhoods.' },
  'lake-mary': { name: 'Lake Mary', county: 'Seminole County', description: 'Premium property maintenance for Lake Mary communities and businesses.' },
  'winter-park': { name: 'Winter Park', county: 'Orange County', description: 'Expert pressure washing for Winter Park\'s beautiful homes and storefronts.' },
  'apopka': { name: 'Apopka', county: 'Orange County', description: 'Reliable cleaning services for Apopka residential and commercial properties.' },
  'altamonte-springs': { name: 'Altamonte Springs', county: 'Seminole County', description: 'Professional services for Altamonte Springs homes and businesses.' },
  'casselberry': { name: 'Casselberry', county: 'Seminole County', description: 'Quality pressure washing services throughout Casselberry.' },
  'maitland': { name: 'Maitland', county: 'Orange County', description: 'Serving Maitland homes and commercial properties with expert care.' },
  'winter-garden': { name: 'Winter Garden', county: 'Orange County', description: 'Expert cleaning for Winter Garden and West Orange County.' },
  'oviedo': { name: 'Oviedo', county: 'Seminole County', description: 'Professional services for Oviedo families and businesses.' },
  'winter-springs': { name: 'Winter Springs', county: 'Seminole County', description: 'Quality cleaning services in Winter Springs.' },
  'debary': { name: 'DeBary', county: 'Volusia County', description: 'Serving the DeBary community with reliable pressure washing.' },
  'deland': { name: 'DeLand', county: 'Volusia County', description: 'Professional pressure washing in historic DeLand.' },
  'orange-city': { name: 'Orange City', county: 'Volusia County', description: 'Quality services for Orange City residents and businesses.' },
  'port-orange': { name: 'Port Orange', county: 'Volusia County', description: 'Coastal cleaning specialists serving Port Orange.' },
  'new-smyrna-beach': { name: 'New Smyrna Beach', county: 'Volusia County', description: 'Beach property experts in New Smyrna Beach.' },
  'palm-coast': { name: 'Palm Coast', county: 'Flagler County', description: 'Serving Palm Coast and Flagler County with professional care.' },
  'kissimmee': { name: 'Kissimmee', county: 'Osceola County', description: 'Professional services for Kissimmee homes and businesses.' },
  'st-cloud': { name: 'St. Cloud', county: 'Osceola County', description: 'Quality cleaning services in St. Cloud.' },
  'celebration': { name: 'Celebration', county: 'Osceola County', description: 'Premium services for the Celebration community.' },
  'clermont': { name: 'Clermont', county: 'Lake County', description: 'Expert pressure washing in Clermont and South Lake.' },
  'mount-dora': { name: 'Mount Dora', county: 'Lake County', description: 'Serving historic Mount Dora with care and expertise.' },
  'tavares': { name: 'Tavares', county: 'Lake County', description: 'Quality services in Tavares, the Lake County seat.' },
  'eustis': { name: 'Eustis', county: 'Lake County', description: 'Professional cleaning services in Eustis.' },
  'ocoee': { name: 'Ocoee', county: 'Orange County', description: 'Serving the Ocoee community with reliable service.' },
  'winter-haven': { name: 'Winter Haven', county: 'Polk County', description: 'Expert services in Winter Haven and Polk County.' },
  'davenport': { name: 'Davenport', county: 'Polk County', description: 'Quality cleaning in Davenport and Four Corners.' },
  'haines-city': { name: 'Haines City', county: 'Polk County', description: 'Professional services in Haines City.' },
  'wekiwa-springs': { name: 'Wekiwa Springs', county: 'Seminole County', description: 'Serving Wekiwa Springs area residents.' },
  'osteen': { name: 'Osteen', county: 'Volusia County', description: 'Quality pressure washing in rural Osteen.' },
  'zellwood': { name: 'Zellwood', county: 'Orange County', description: 'Serving the Zellwood community.' },
};

const services = [
  { name: 'House Washing', slug: 'house-washing' },
  { name: 'Driveway Cleaning', slug: 'driveway-cleaning' },
  { name: 'Roof Cleaning', slug: 'roof-cleaning' },
  { name: 'Deck Cleaning', slug: 'deck-cleaning' },
  { name: 'Gutter Cleaning', slug: 'gutter-cleaning' },
  { name: 'Patio Cleaning', slug: 'patio-cleaning' },
  { name: 'Fence Cleaning', slug: 'fence-cleaning' },
  { name: 'Pool Deck Cleaning', slug: 'pool-deck-cleaning' },
  { name: 'Sidewalk Cleaning', slug: 'sidewalk-cleaning' },
  { name: 'Concrete Cleaning', slug: 'concrete-cleaning' },
  { name: 'Paver Cleaning', slug: 'paver-cleaning' },
  { name: 'Soft Washing', slug: 'soft-washing' },
  { name: 'Window Cleaning', slug: 'window-cleaning' },
  { name: 'Commercial Services', slug: 'commercial-pressure-washing' },
];

export async function generateStaticParams() {
  return Object.keys(locations).map((city) => ({ city }));
}

export async function generateMetadata({ params }) {
  const location = locations[params.city];
  if (!location) return { title: 'Not Found' };
  return {
    title: `Pressure Washing Services in ${location.name}, FL | KJS Supreme`,
    description: `Professional pressure washing in ${location.name}, ${location.county}. House washing, driveway cleaning, roof cleaning & more. Free quotes!`,
  };
}

export default function CityPage({ params }) {
  const location = locations[params.city];
  if (!location) notFound();

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        Pressure Washing Services in {location.name}, FL
      </h1>

      <p className="text-xl text-gray-700 mb-8">
        KJS Supreme Pressure Washing proudly serves {location.name} and {location.county} with professional pressure washing services. {location.description}
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Services in {location.name}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}/${params.city}`}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-blue-600">{service.name}</h3>
              <p className="text-sm text-gray-600">Professional {service.name.toLowerCase()} in {location.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-10 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Why {location.name} Chooses KJS Supreme</h2>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✓</span> Locally owned and operated</li>
          <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✓</span> Fully licensed and insured</li>
          <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✓</span> Free estimates, no obligation</li>
          <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✓</span> Eco-friendly cleaning solutions</li>
          <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✓</span> Satisfaction guaranteed</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">About {location.name}</h2>
        <p className="text-gray-600 mb-4">
          Located in {location.county}, {location.name} experiences the typical Central Florida climate with high humidity, frequent rain, and warm temperatures year-round. These conditions lead to rapid growth of mold, mildew, and algae on home exteriors, driveways, roofs, and other surfaces.
        </p>
        <p className="text-gray-600">
          Regular pressure washing helps {location.name} property owners maintain their investments, improve curb appeal, and prevent costly damage from organic growth.
        </p>
      </section>

      <section className="bg-gray-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Get a Free Quote in {location.name}</h2>
        <p className="text-gray-300 mb-6">Ready to transform your property? Contact us today!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">Get Free Quote</Link>
          <a href="tel:+12138416924" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold">(213) 841-6924</a>
        </div>
      </section>
    </article>
  );
}
