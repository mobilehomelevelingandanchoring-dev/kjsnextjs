import Link from 'next/link';

// Service Schema for Gutter Cleaning
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Gutter Cleaning Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "KJS Supreme Pressure Washing LLC",
    "telephone": "+1-213-841-6924",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1757 S Village Dr",
      "addressLocality": "Deltona",
      "addressRegion": "FL",
      "postalCode": "32725"
    }
  },
  "areaServed": ["Deltona", "Orlando", "Sanford", "Lake Mary", "Daytona Beach", "Winter Park"],
  "description": "Professional gutter cleaning, debris removal, downspout clearing, and gutter brightening services in Central Florida. Remove tiger stripes and prevent water damage.",
  "serviceType": "Gutter Cleaning and Maintenance"
};

// FAQ Schema for Gutter Cleaning
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should gutters be cleaned in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Central Florida, gutters should be cleaned at least twice per year—once in late spring after oak pollen season and once in late fall after leaf drop. Homes surrounded by oak trees, pine trees, or near lakes may need quarterly cleaning. Florida's year-round growing season and frequent storms cause faster debris accumulation than in northern climates."
      }
    },
    {
      "@type": "Question",
      "name": "What causes black streaks (tiger stripes) on gutters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Black tiger stripes on gutters are caused by electrostatic bonding between aluminum gutters and asphalt roof particles mixed with environmental pollutants. When rainwater runs over asphalt shingles, it picks up oxidized petroleum distillates that bond to the gutter's painted surface. Standard pressure washing won't remove these—specialized gutter brightening chemicals are required."
      }
    },
    {
      "@type": "Question",
      "name": "Can clogged gutters cause foundation problems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Clogged gutters overflow, dumping thousands of gallons of water directly against your foundation. In Florida's sandy soil, this creates erosion channels and can cause foundation settling. Over time, this leads to cracks in the foundation and slab, water intrusion in basements or crawl spaces, and structural damage costing thousands to repair."
      }
    },
    {
      "@type": "Question",
      "name": "Do gutter guards work in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gutter guards reduce but don't eliminate cleaning needs in Florida. They help with large leaves but struggle with oak pollen, pine needles, and Spanish moss. The fine mesh screens can clog with Florida's sticky pollen, sometimes making cleaning harder. Most professionals recommend twice-yearly inspection even with guards installed."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I don't clean my gutters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Neglected gutters lead to cascading problems: water overflow damages fascia boards and soffit, creating entry points for carpenter ants and termites. Standing water in clogged gutters breeds mosquitoes. Weight from debris and standing water can pull gutters away from the house. Foundation erosion from overflow can cost $5,000-$15,000 to repair—far more than regular gutter maintenance."
      }
    },
    {
      "@type": "Question",
      "name": "How do you clean gutters without damaging them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional gutter cleaning uses hand removal for debris, avoiding metal scoops that scratch gutter interiors. We flush downspouts with controlled water pressure (never high-pressure washing inside gutters, which damages seams). For exterior brightening, we use gutter-specific cleaners at safe dilution ratios—harsh chemicals or excessive pressure can strip paint or dent aluminum."
      }
    }
  ]
};

export const metadata = {
  title: 'Gutter Cleaning Central Florida | Tiger Stripe Removal | KJS Supreme',
  description: 'Professional gutter cleaning in Deltona, Orlando, Sanford. Debris removal, downspout clearing, tiger stripe removal. Prevent water damage and foundation issues. Free quotes: (213) 841-6924.',
  keywords: 'gutter cleaning Central Florida, gutter brightening, tiger stripe removal, downspout cleaning, clogged gutters Deltona, gutter maintenance Orlando, black streaks gutters',
  openGraph: {
    title: 'Professional Gutter Cleaning Services | KJS Supreme Pressure Washing',
    description: 'Complete gutter maintenance: debris removal, downspout clearing, and tiger stripe removal in Central Florida.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://kjssupremepressurewashing.com/services/gutter-cleaning',
  },
};

export default function GutterCleaningPage() {
  const locations = [
    { name: 'Deltona', slug: 'deltona' },
    { name: 'Orlando', slug: 'orlando' },
    { name: 'Sanford', slug: 'sanford' },
    { name: 'Lake Mary', slug: 'lake-mary' },
    { name: 'Daytona Beach', slug: 'daytona-beach' },
    { name: 'Winter Park', slug: 'winter-park' },
  ];

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center space-x-2 text-blue-200 text-sm">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li>/</li>
                  <li><Link href="/services" className="hover:text-white">Services</Link></li>
                  <li>/</li>
                  <li className="text-white">Gutter Cleaning</li>
                </ol>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional Gutter Cleaning in Central Florida
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Protect your home from water damage with complete gutter maintenance. We remove debris,
                clear downspouts, and eliminate tiger stripes to keep your gutters flowing freely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-100 transition-colors text-center">
                  Get Free Quote
                </Link>
                <a href="tel:+12138416924" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors text-center">
                  (213) 841-6924
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Florida Gutters Need Special Attention */}
        <section aria-labelledby="florida-challenges-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <header className="max-w-3xl mx-auto text-center mb-12">
              <h2 id="florida-challenges-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Florida Gutters Clog Faster
              </h2>
              <p className="text-lg text-gray-600">
                Central Florida's unique environment accelerates gutter problems compared to other regions.
                Understanding these challenges helps protect your home.
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <article className="bg-amber-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Oak Pollen Season</h3>
                <p className="text-gray-600">
                  Central Florida's <strong>oak pollen season (February-May)</strong> creates a sticky yellow-green
                  film that coats everything. Unlike dry northern leaves, this pollen forms a paste when wet that
                  rapidly clogs downspouts and creates dam-like blockages in gutters.
                </p>
              </article>

              <article className="bg-green-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Year-Round Growth</h3>
                <p className="text-gray-600">
                  Florida has no true dormant season. <strong>Pine needles, oak leaves, and Spanish moss</strong> fall
                  continuously throughout the year. A northern home might get one big leaf drop in fall; Florida
                  homes get constant debris year-round.
                </p>
              </article>

              <article className="bg-blue-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hurricane Season Debris</h3>
                <p className="text-gray-600">
                  <strong>June through November</strong>, tropical storms deposit massive amounts of leaves, twigs,
                  and roof granules into gutters. Post-storm gutter cleaning is essential to prevent overflow
                  during the next rain event.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section aria-labelledby="services-heading" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Gutter Maintenance Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive gutter service addresses both function and appearance.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Interior Cleaning */}
              <article className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-700 font-bold">1</span>
                  Interior Gutter Cleaning
                </h3>

                <dl className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <dt className="font-semibold text-gray-900">Hand Debris Removal</dt>
                    <dd className="text-gray-600">
                      We manually remove leaves, pine needles, oak pollen sludge, and roof granules. Hand
                      removal prevents scratching the gutter interior—metal scoops can damage protective
                      coatings and create rust points.
                    </dd>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <dt className="font-semibold text-gray-900">Downspout Clearing</dt>
                    <dd className="text-gray-600">
                      Clogged downspouts are checked and cleared using controlled water pressure or
                      plumber's snake. We ensure water flows freely from gutter to ground, preventing
                      backup and overflow.
                    </dd>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <dt className="font-semibold text-gray-900">Flow Testing</dt>
                    <dd className="text-gray-600">
                      After cleaning, we run water through the system to verify proper pitch and drainage.
                      We identify low spots where water pools and check for leaks at seams and corners.
                    </dd>
                  </div>
                </dl>
              </article>

              {/* Exterior Brightening */}
              <article className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3 text-amber-700 font-bold">2</span>
                  Gutter Brightening Service
                </h3>

                <dl className="space-y-4">
                  <div className="border-l-4 border-amber-500 pl-4">
                    <dt className="font-semibold text-gray-900">Tiger Stripe Removal</dt>
                    <dd className="text-gray-600">
                      Black tiger stripes are removed using specialized gutter brightening chemicals that
                      break the electrostatic bond between asphalt particles and aluminum. Standard
                      <Link href="/services/house-washing" className="text-blue-600 hover:underline ml-1">house washing</Link> solutions won't remove these stains.
                    </dd>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-4">
                    <dt className="font-semibold text-gray-900">Oxidation Removal</dt>
                    <dd className="text-gray-600">
                      Florida's intense UV exposure causes gutter paint to oxidize, creating a chalky
                      appearance. Our brightening treatment removes this oxidation layer, restoring the
                      original color and shine.
                    </dd>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-4">
                    <dt className="font-semibold text-gray-900">Safe Application</dt>
                    <dd className="text-gray-600">
                      Gutter brighteners contain strong acids that require careful handling. We use proper
                      dilution ratios and dwell times to clean effectively without damaging paint, creating
                      pitting, or harming landscaping.
                    </dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>
        </section>

        {/* The Science of Tiger Stripes */}
        <section aria-labelledby="tiger-stripes-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-12">
                <h2 id="tiger-stripes-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Understanding Tiger Stripes (And Why They're So Stubborn)
                </h2>
                <p className="text-lg text-gray-600">
                  Those black vertical streaks on your gutters aren't just dirt—they're a chemical bonding issue.
                </p>
              </header>

              <article className="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What Causes Tiger Stripes?</h3>
                <p className="text-gray-600 mb-4">
                  When rainwater flows over your asphalt shingle roof, it picks up oxidized petroleum distillates
                  (the binding agent in asphalt). These particles mix with atmospheric pollutants, creating a
                  slightly acidic solution that drips down the gutter face.
                </p>
                <p className="text-gray-600 mb-4">
                  Here's the problem: Aluminum gutters develop a slight positive electrical charge, while these
                  asphalt particles carry a negative charge. They bond through <strong>electrostatic attraction</strong>—the
                  same force that makes static cling work. This isn't surface dirt you can wipe away; it's molecular bonding.
                </p>
                <p className="text-gray-600">
                  The vertical stripe pattern forms because water follows the same drip paths during each rain,
                  concentrating the deposits in lines. Gutters under valleys or where multiple roof planes meet
                  show the worst striping due to higher water volume.
                </p>
              </article>

              <article className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Regular Cleaning Won't Remove Them</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                    <p className="text-gray-600">
                      <strong>Pressure washing alone:</strong> The bond is too strong. You need chemical intervention,
                      not just mechanical force. High pressure can even damage gutters before removing the stain.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                    <p className="text-gray-600">
                      <strong>Regular house wash detergent:</strong> Standard <Link href="/services/soft-washing" className="text-blue-600 hover:underline">soft washing</Link> solutions
                      work on organic growth (algae, mold) but not on petroleum-based bonding.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-600">
                      <strong>Gutter brightening chemicals:</strong> These specialized formulas (typically containing
                      hydrofluoric or oxalic acid) break the electrostatic bond at the molecular level, releasing
                      the particles so they can be rinsed away.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Damage Prevention */}
        <section aria-labelledby="prevention-heading" className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="prevention-heading" className="text-3xl md:text-4xl font-bold mb-6">
                What Clogged Gutters Cost You
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Regular gutter cleaning prevents thousands of dollars in home damage.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <article className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-amber-400">Foundation Damage</h3>
                <p className="text-gray-300 mb-3">
                  A 1" rainfall dumps 600+ gallons from your roof. Clogged gutters overflow this onto your
                  foundation, eroding Florida's sandy soil and causing settling.
                </p>
                <p className="text-sm text-gray-400">Average repair cost: $5,000-$15,000</p>
              </article>

              <article className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-amber-400">Fascia & Soffit Rot</h3>
                <p className="text-gray-300 mb-3">
                  Overflowing water saturates the fascia board behind your gutter. Wood rot develops quickly
                  in Florida's humidity, creating entry points for carpenter ants and termites.
                </p>
                <p className="text-sm text-gray-400">Average repair cost: $2,000-$8,000</p>
              </article>

              <article className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-amber-400">Landscape Erosion</h3>
                <p className="text-gray-300 mb-3">
                  Gutter overflow creates channels in your landscaping, washing away mulch and topsoil.
                  Pooling water near the foundation kills shrubs and creates muddy areas.
                </p>
                <p className="text-sm text-gray-400">Average repair cost: $1,000-$3,000</p>
              </article>

              <article className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-amber-400">Basement/Crawlspace Flooding</h3>
                <p className="text-gray-300 mb-3">
                  Water against your foundation finds its way inside. In Florida's rainy season, this creates
                  persistent moisture problems, mold growth, and structural damage.
                </p>
                <p className="text-sm text-gray-400">Average repair cost: $3,000-$10,000</p>
              </article>

              <article className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-amber-400">Mosquito Breeding</h3>
                <p className="text-gray-300 mb-3">
                  Standing water in clogged gutters creates perfect mosquito breeding habitat. A single
                  clogged gutter can produce thousands of mosquitoes in Florida's warm climate.
                </p>
                <p className="text-sm text-gray-400">Health risk + pest control costs</p>
              </article>

              <article className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-amber-400">Gutter Detachment</h3>
                <p className="text-gray-300 mb-3">
                  Debris and standing water add significant weight. Gutters pull away from fascia boards,
                  damaging mounting hardware and creating dangerous hanging sections.
                </p>
                <p className="text-sm text-gray-400">Average repair cost: $800-$2,500</p>
              </article>
            </div>

            <p className="text-center text-gray-400 mt-10 max-w-2xl mx-auto">
              <strong className="text-white">Cost of regular gutter cleaning: $150-$300 twice per year.</strong><br />
              The investment in maintenance is a fraction of repair costs.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section aria-labelledby="faq-heading" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Gutter Cleaning FAQ
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about gutter maintenance in Central Florida.
              </p>
            </header>

            <div className="max-w-3xl mx-auto space-y-4">
              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  How often should gutters be cleaned in Florida?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    In Central Florida, gutters should be cleaned at least twice per year—once in late spring
                    after oak pollen season and once in late fall after leaf drop. Homes surrounded by oak trees,
                    pine trees, or near lakes may need quarterly cleaning. Florida's year-round growing season
                    and frequent storms cause faster debris accumulation than in northern climates.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  What causes black streaks (tiger stripes) on gutters?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Black tiger stripes on gutters are caused by electrostatic bonding between aluminum gutters
                    and asphalt roof particles mixed with environmental pollutants. When rainwater runs over asphalt
                    shingles, it picks up oxidized petroleum distillates that bond to the gutter's painted surface.
                    Standard pressure washing won't remove these—specialized gutter brightening chemicals are required.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  Can clogged gutters cause foundation problems?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Yes. Clogged gutters overflow, dumping thousands of gallons of water directly against your
                    foundation. In Florida's sandy soil, this creates erosion channels and can cause foundation
                    settling. Over time, this leads to cracks in the foundation and slab, water intrusion in
                    basements or crawl spaces, and structural damage costing thousands to repair.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  Do gutter guards work in Florida?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Gutter guards reduce but don't eliminate cleaning needs in Florida. They help with large leaves
                    but struggle with oak pollen, pine needles, and Spanish moss. The fine mesh screens can clog with
                    Florida's sticky pollen, sometimes making cleaning harder. Most professionals recommend twice-yearly
                    inspection even with guards installed.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  What happens if I don't clean my gutters?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Neglected gutters lead to cascading problems: water overflow damages fascia boards and soffit,
                    creating entry points for carpenter ants and termites. Standing water in clogged gutters breeds
                    mosquitoes. Weight from debris and standing water can pull gutters away from the house. Foundation
                    erosion from overflow can cost $5,000-$15,000 to repair—far more than regular gutter maintenance.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  How do you clean gutters without damaging them?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Professional gutter cleaning uses hand removal for debris, avoiding metal scoops that scratch
                    gutter interiors. We flush downspouts with controlled water pressure (never high-pressure washing
                    inside gutters, which damages seams). For exterior brightening, we use gutter-specific cleaners
                    at safe dilution ratios—harsh chemicals or excessive pressure can strip paint or dent aluminum.
                  </p>
                </div>
              </details>
            </div>

            <div className="text-center mt-8">
              <Link href="/faq" className="text-blue-600 hover:underline font-semibold">
                View All FAQs →
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section aria-labelledby="areas-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <header className="text-center mb-10">
              <h2 id="areas-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Gutter Cleaning Service Areas
              </h2>
              <p className="text-gray-600">
                Professional gutter maintenance throughout Central Florida.
              </p>
            </header>

            <nav aria-label="Service locations">
              <ul className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {locations.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors inline-block"
                    >
                      {loc.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/locations"
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors inline-block"
                  >
                    + All Locations
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        {/* Related Services */}
        <section aria-labelledby="related-heading" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 id="related-heading" className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Related Services
            </h2>

            <nav aria-label="Related services">
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <li>
                  <Link href="/services/house-washing" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <span className="text-3xl mb-2 block">🏠</span>
                    <span className="font-semibold text-gray-800">House Washing</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/roof-cleaning" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <span className="text-3xl mb-2 block">🏘️</span>
                    <span className="font-semibold text-gray-800">Roof Cleaning</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/window-cleaning" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <span className="text-3xl mb-2 block">🪟</span>
                    <span className="font-semibold text-gray-800">Window Cleaning</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/soft-washing" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <span className="text-3xl mb-2 block">🧴</span>
                    <span className="font-semibold text-gray-800">Soft Washing</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Protect Your Home with Clean Gutters
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free quote for professional gutter cleaning and brightening. Prevent costly
              water damage with regular maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-100 transition-colors">
                Get Free Quote
              </Link>
              <a href="tel:+12138416924" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                (213) 841-6924
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
