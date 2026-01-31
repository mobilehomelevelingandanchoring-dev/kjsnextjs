import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Driveway Cleaning & Pressure Washing Central Florida | KJS Supreme',
  description: 'Professional driveway pressure washing in Central Florida. Remove oil stains, tire marks, algae from concrete & pavers. Safe PSI levels, no damage. Deltona, Orlando, Sanford & 30+ cities.',
  keywords: [
    'driveway cleaning Central Florida',
    'driveway pressure washing',
    'concrete cleaning Orlando',
    'paver driveway cleaning',
    'oil stain removal driveway',
    'pressure wash driveway cost',
    'driveway cleaning near me',
  ],
  openGraph: {
    title: 'Professional Driveway Cleaning Services | KJS Supreme Pressure Washing',
    description: 'Transform your driveway with professional pressure washing. Remove oil stains, algae, and years of buildup. Serving Central Florida.',
    type: 'website',
    locale: 'en_US',
    url: 'https://kjsupremepressurewashing.com/services/driveway-cleaning',
    images: ['/images/driveway-cleaning-orlando-fl-01.jpg'],
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/services/driveway-cleaning',
  },
};

// Service schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Driveway Cleaning Services',
  description: 'Professional driveway pressure washing to remove oil stains, tire marks, algae, and dirt from concrete and paver driveways in Central Florida.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'KJS Supreme Pressure Washing LLC',
    telephone: '+1-213-841-6924',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Deltona',
      addressRegion: 'FL',
      postalCode: '32725',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Deltona, FL' },
    { '@type': 'City', name: 'Orlando, FL' },
    { '@type': 'City', name: 'Sanford, FL' },
  ],
  serviceType: 'Driveway Pressure Washing',
};

// FAQ data
const faqItems = [
  {
    q: 'Does pressure washing damage concrete driveways?',
    a: 'When done correctly by professionals, pressure washing does not damage concrete. We use appropriate PSI levels (2,500-3,500 PSI), proper nozzles, and commercial surface cleaners that distribute pressure evenly. Damage only occurs from improper technique—holding the wand too close, using excessive pressure, or using the wrong nozzle angle.',
  },
  {
    q: 'How much PSI do I need to clean my driveway?',
    a: 'Most concrete driveways require 2,500-3,500 PSI for effective cleaning. Light dirt needs around 2,000 PSI, while oil stains and heavy buildup may need 3,000+ PSI with degreasing solutions. We use professional equipment with surface cleaners for even, streak-free results.',
  },
  {
    q: 'Will a 2000 PSI pressure washer clean a driveway?',
    a: 'A 2,000 PSI washer can clean lightly soiled driveways but often struggles with oil stains, heavy algae, or embedded dirt common in Central Florida. For thorough cleaning, 2,500-3,500 PSI is recommended. Consumer equipment also has lower water flow (GPM), reducing cleaning effectiveness.',
  },
  {
    q: 'How often should I have my driveway cleaned in Florida?',
    a: 'In Central Florida, we recommend driveway cleaning every 12-24 months. Driveways with heavy shade, near trees, or with frequent oil drips may need annual cleaning. Regular maintenance prevents permanent staining and keeps your property looking its best.',
  },
  {
    q: 'Can you remove oil stains from my driveway?',
    a: 'Yes, we specialize in oil stain removal. Fresh stains are easier to remove than old, set-in stains. We use professional degreasing solutions combined with hot water (when needed) and high-pressure cleaning. While some very old stains may lighten rather than disappear completely, most oil stains can be significantly improved or fully removed.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

// PSI Guide data
const psiGuide = [
  { stainType: 'Light Dirt & Pollen', psi: '1,500-2,000', notes: 'Surface dust, pollen, light debris' },
  { stainType: 'Moderate Algae & Mildew', psi: '2,000-2,500', notes: 'Green algae, light mold, general grime' },
  { stainType: 'Heavy Algae & Black Mold', psi: '2,500-3,000', notes: 'Thick organic growth, dark staining' },
  { stainType: 'Oil & Grease Stains', psi: '3,000-3,500', notes: 'Requires degreaser + hot water for best results' },
  { stainType: 'Rust Stains', psi: '2,500-3,000', notes: 'Requires specialized rust remover solution' },
  { stainType: 'Tire Marks', psi: '2,500-3,000', notes: 'Hot water improves removal effectiveness' },
];

export default function DrivewayCleaningPage() {
  const serviceAreas = [
    'Deltona', 'Orlando', 'Sanford', 'Daytona Beach', 'Lake Mary',
    'Winter Park', 'Apopka', 'Oviedo', 'Kissimmee', 'Clermont'
  ];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/driveway-cleaning-orlando-fl-01.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-blue-200">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><span aria-hidden="true">/</span></li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li><span aria-hidden="true">/</span></li>
                <li aria-current="page" className="text-white font-medium">Driveway Cleaning</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional Driveway Cleaning in Central Florida
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl">
                Transform your driveway from dingy to dazzling. We remove oil stains, tire marks, algae,
                and years of buildup using professional-grade equipment and safe pressure levels that
                won't damage your concrete or pavers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-center"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+12138416924"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (213) 841-6924
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Driveways Get Dirty in Florida */}
        <section className="py-16 bg-white" aria-labelledby="florida-driveways">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 id="florida-driveways" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Why Florida Driveways Get Dirty So Fast
                  </h2>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      Central Florida's climate is particularly harsh on driveways. With <strong>high humidity,
                      frequent rain, and warm temperatures year-round</strong>, your driveway becomes a breeding
                      ground for algae, mold, and mildew—often within months of cleaning.
                    </p>
                    <p>
                      Add in daily vehicle traffic that deposits <strong>oil drips, transmission fluid, and
                      tire marks</strong>, plus Florida's notorious afternoon thunderstorms that wash debris
                      onto your driveway, and it's no wonder concrete surfaces become discolored quickly.
                    </p>
                    <p>
                      The good news? Professional pressure washing can restore your driveway to like-new
                      condition, removing years of buildup in just a few hours. Regular cleaning every
                      <strong> 12-24 months</strong> keeps your property looking its best and prevents
                      permanent staining.
                    </p>
                  </div>
                </div>
                <figure className="relative">
                  <Image
                    src="/images/driveway-cleaning-orlando-fl-01.jpg"
                    alt="Driveway pressure washing removing oil stains and algae from concrete in Orlando, Florida"
                    width={600}
                    height={450}
                    className="rounded-xl shadow-lg"
                  />
                  <figcaption className="text-sm text-gray-500 mt-3 text-center">
                    Professional driveway cleaning in Orlando, FL - dramatic before and after results
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* PSI Guide Section */}
        <section className="py-16 bg-gray-50" aria-labelledby="psi-guide">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-12">
                <h2 id="psi-guide" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  PSI Guide: How Much Pressure for Driveway Cleaning?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  One of the most common questions we receive. Using the right PSI prevents damage
                  while ensuring effective cleaning. Here's what different stains require:
                </p>
              </header>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                  <thead className="bg-blue-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Stain Type</th>
                      <th className="px-6 py-4 text-left font-semibold">Recommended PSI</th>
                      <th className="px-6 py-4 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {psiGuide.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-medium text-gray-900">{row.stainType}</td>
                        <td className="px-6 py-4 text-blue-600 font-semibold">{row.psi}</td>
                        <td className="px-6 py-4 text-gray-600">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">Why Professional Equipment Matters</h3>
                <p className="text-gray-700">
                  Consumer pressure washers typically max out at 2,000-2,500 PSI with 2 GPM (gallons per minute).
                  Our commercial equipment delivers 3,000-4,000 PSI with 4+ GPM—meaning we clean faster and more
                  thoroughly. We also use <strong>surface cleaners</strong> that distribute pressure evenly,
                  eliminating the striping pattern that occurs with wand-only cleaning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Does Pressure Washing Damage Concrete */}
        <section className="py-16 bg-white" aria-labelledby="concrete-damage">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 id="concrete-damage" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Does Pressure Washing Damage Concrete?
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="text-xl text-center mb-8">
                  This is one of the most frequently asked questions we receive—and the answer is
                  <strong> no, when done correctly</strong>.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-red-800 mb-4">What CAN Damage Concrete:</h3>
                    <ul className="space-y-2 text-red-700">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span>Holding nozzle too close (under 6 inches)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span>Using 0° (red) nozzle on concrete</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span>Excessive pressure on old/weak concrete</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span>Spraying at an angle into cracks/joints</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-green-800 mb-4">How We Protect Your Concrete:</h3>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Surface cleaners for even pressure distribution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Proper 25° or 40° fan nozzles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Maintain 8-12 inch distance from surface</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Assess concrete condition before cleaning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Surfaces We Clean */}
        <section className="py-16 bg-gray-50" aria-labelledby="surfaces">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-12">
                <h2 id="surfaces" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Driveway Surfaces We Clean
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We clean all types of driveway materials common in Central Florida, adjusting our
                  technique and pressure settings for each surface type.
                </p>
              </header>

              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
                <li className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Concrete Driveways</h3>
                  <p className="text-gray-600">
                    The most common driveway material in Florida. We use 2,500-3,500 PSI with surface
                    cleaners for uniform, streak-free cleaning.
                  </p>
                </li>
                <li className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Paver Driveways</h3>
                  <p className="text-gray-600">
                    Brick and concrete pavers require careful cleaning to protect joint sand. We offer
                    <Link href="/services/paver-cleaning" className="text-blue-600 hover:underline"> paver cleaning and sealing</Link> services.
                  </p>
                </li>
                <li className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Stamped Concrete</h3>
                  <p className="text-gray-600">
                    Decorative stamped concrete needs lower pressure to protect the pattern and any
                    applied sealers. We adjust our approach accordingly.
                  </p>
                </li>
                <li className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Exposed Aggregate</h3>
                  <p className="text-gray-600">
                    Popular in Florida for its texture and drainage. We clean exposed aggregate
                    without dislodging the decorative stones.
                  </p>
                </li>
                <li className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Brick Driveways</h3>
                  <p className="text-gray-600">
                    Traditional brick driveways require moderate pressure to protect mortar joints
                    while effectively removing stains and organic growth.
                  </p>
                </li>
                <li className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Garage Floors</h3>
                  <p className="text-gray-600">
                    We include garage floor cleaning with driveway service—removing oil drips, tire
                    marks, and accumulated dirt from your garage.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What We Remove */}
        <section className="py-16 bg-blue-900 text-white" aria-labelledby="stains-removed">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-12">
                <h2 id="stains-removed" className="text-3xl md:text-4xl font-bold mb-4">
                  Stains & Buildup We Remove
                </h2>
                <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                  From everyday grime to stubborn stains, our professional equipment and
                  specialized treatments tackle it all.
                </p>
              </header>

              <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <li className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Oil & Grease</h3>
                  <p className="text-blue-100">
                    Motor oil, transmission fluid, and grease stains from vehicles.
                  </p>
                </li>
                <li className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Tire Marks</h3>
                  <p className="text-blue-100">
                    Black tire rubber marks from turning wheels and hot tires.
                  </p>
                </li>
                <li className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Algae & Mold</h3>
                  <p className="text-blue-100">
                    Green algae and black mold that thrive in Florida's humidity.
                  </p>
                </li>
                <li className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Rust Stains</h3>
                  <p className="text-blue-100">
                    Rust from fertilizer, irrigation, or metal objects left on concrete.
                  </p>
                </li>
                <li className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Leaf Tannins</h3>
                  <p className="text-blue-100">
                    Brown stains from decomposing leaves and organic matter.
                  </p>
                </li>
                <li className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Paint Spills</h3>
                  <p className="text-blue-100">
                    Latex and some oil-based paint drips and overspray.
                  </p>
                </li>
                <li className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Gum & Tar</h3>
                  <p className="text-blue-100">
                    Chewing gum, roofing tar, and adhesive residue.
                  </p>
                </li>
                <li className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">General Grime</h3>
                  <p className="text-blue-100">
                    Years of dirt, dust, and accumulated debris.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-12">
                <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Driveway Cleaning FAQ
                </h2>
                <p className="text-lg text-gray-600">
                  Common questions about our driveway pressure washing services.
                </p>
              </header>

              <dl className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md">
                    <dt className="text-xl font-semibold text-gray-900 mb-3">{item.q}</dt>
                    <dd className="text-gray-600">{item.a}</dd>
                  </div>
                ))}
              </dl>

              <p className="text-center mt-8">
                <Link href="/faq" className="text-blue-600 font-semibold hover:text-blue-700">
                  View All Frequently Asked Questions →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50" aria-labelledby="service-areas">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-8">
                <h2 id="service-areas" className="text-3xl font-bold text-gray-900 mb-4">
                  Driveway Cleaning Service Areas
                </h2>
                <p className="text-lg text-gray-600">
                  Professional driveway cleaning throughout Central Florida.
                </p>
              </header>

              <nav aria-label="Driveway cleaning service areas">
                <ul className="flex flex-wrap justify-center gap-3">
                  {serviceAreas.map((city) => (
                    <li key={city}>
                      <Link
                        href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors font-medium"
                      >
                        {city}, FL
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/locations"
                      className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors font-medium"
                    >
                      + 20 More Cities
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white" aria-labelledby="related-services">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 id="related-services" className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Related Services
              </h2>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <li>
                  <Link href="/services/concrete-cleaning" className="block p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                    <span className="font-medium text-gray-800">Concrete Cleaning</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/paver-cleaning" className="block p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                    <span className="font-medium text-gray-800">Paver Cleaning</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/sidewalk-cleaning" className="block p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                    <span className="font-medium text-gray-800">Sidewalk Cleaning</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/house-washing" className="block p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                    <span className="font-medium text-gray-800">House Washing</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Ready to Transform Your Driveway?
            </h2>
            <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote for professional driveway cleaning.
              We'll assess your driveway and provide honest, upfront pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:+12138416924"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (213) 841-6924
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
