import Link from 'next/link';

// Service Schema for Fence Cleaning
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fence Cleaning Services",
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
  "description": "Professional fence cleaning services for wood, vinyl, aluminum, and chain-link fences in Central Florida. Remove algae, mold, and restore curb appeal.",
  "serviceType": "Fence Cleaning and Restoration"
};

// FAQ Schema for Fence Cleaning
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What PSI should be used for cleaning fences?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fence cleaning PSI varies by material: wood fences require 500-1,200 PSI depending on age and condition, vinyl fences clean safely at 1,500-2,000 PSI, aluminum and chain-link handle 2,000-2,500 PSI, while composite fences need gentle 500-800 PSI. Excessive pressure damages wood grain, cracks vinyl, or strips paint from metal fences."
      }
    },
    {
      "@type": "Question",
      "name": "Can pressure washing damage my wood fence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, if done improperly. Too much pressure (over 1,500 PSI) splinters wood fibers, raises grain, and creates a fuzzy surface. Professional fence cleaning uses appropriate pressure, maintains proper nozzle distance (12-18 inches), and follows the wood grain direction. Older, weathered fences require even lower pressure to prevent damage."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I clean my fence in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Florida fences should be cleaned annually, or every 6-8 months for heavily shaded fences. Florida's humidity and frequent rain cause rapid algae and mold growth, especially on north-facing fence sections that stay damp. Regular cleaning prevents permanent staining and extends fence life by removing damaging organic growth."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my fence turn green in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Green discoloration on fences is algae growth, thriving in Florida's 75%+ humidity and warm temperatures. Shaded fence sections, areas near sprinklers, and north-facing panels stay damp longer, accelerating algae. Beyond appearance, algae holds moisture against fence materials, accelerating rot in wood and degrading vinyl surfaces over time."
      }
    },
    {
      "@type": "Question",
      "name": "Should I seal or stain my fence after cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For wood fences, yes. Cleaning opens wood pores, creating ideal conditions for stain or sealer absorption. Wait 48-72 hours after cleaning for the wood to dry completely. Semi-transparent stains showcase wood grain while providing UV protection. Solid stains offer maximum Florida sun protection. Vinyl and metal fences don't require sealing."
      }
    },
    {
      "@type": "Question",
      "name": "Will cleaning remove gray weathering from my wood fence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Partially. Gray weathering is caused by UV breakdown of lignin in wood. Pressure washing removes surface oxidation and some gray discoloration, but deeply weathered wood may retain gray undertones. Wood brightener treatment after cleaning neutralizes the wood and restores more of the original color before staining or sealing."
      }
    }
  ]
};

export const metadata = {
  title: 'Fence Cleaning Central Florida | Wood, Vinyl, Aluminum | KJS Supreme',
  description: 'Professional fence cleaning in Deltona, Orlando, Sanford. Clean wood, vinyl, composite, and metal fences. Remove algae, mold, restore curb appeal. Free quotes: (213) 841-6924.',
  keywords: 'fence cleaning Central Florida, wood fence cleaning, vinyl fence cleaning, fence pressure washing Deltona, fence algae removal Orlando, fence restoration',
  openGraph: {
    title: 'Professional Fence Cleaning Services | KJS Supreme Pressure Washing',
    description: 'Restore your fence to like-new condition. Expert cleaning for all fence types in Central Florida.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://kjssupremepressurewashing.com/services/fence-cleaning',
  },
};

export default function FenceCleaningPage() {
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
        <section className="bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center space-x-2 text-amber-200 text-sm">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li>/</li>
                  <li><Link href="/services" className="hover:text-white">Services</Link></li>
                  <li>/</li>
                  <li className="text-white">Fence Cleaning</li>
                </ol>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional Fence Cleaning in Central Florida
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed">
                Restore your fence's curb appeal with professional cleaning. We safely clean wood, vinyl,
                composite, and metal fences—removing years of algae, mold, and weathering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-white text-amber-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-100 transition-colors text-center">
                  Get Free Quote
                </Link>
                <a href="tel:+12138416924" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors text-center">
                  (213) 841-6924
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Fence Types Section */}
        <section aria-labelledby="fence-types-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="fence-types-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fence Types We Clean
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Each fence material requires specific cleaning pressure and techniques for safe, effective results.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <article className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wood Fences</h3>
                <p className="text-gray-600 mb-4">
                  Cedar, pine, and redwood fences clean at <strong>500-1,200 PSI</strong>. We follow the grain,
                  avoid splintering, and can apply wood brightener to restore natural color. Perfect prep for
                  staining or sealing.
                </p>
                <p className="text-sm text-amber-600 font-semibold">Popular in: Privacy fences, picket fences</p>
              </article>

              <article className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Vinyl/PVC Fences</h3>
                <p className="text-gray-600 mb-4">
                  Vinyl fences handle <strong>1,500-2,000 PSI</strong>. We remove green algae, black mold, and
                  oxidation without cracking or warping the material. Vinyl-safe cleaners prevent yellowing
                  and discoloration.
                </p>
                <p className="text-sm text-green-600 font-semibold">Popular in: White privacy fences, pool fences</p>
              </article>

              <article className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aluminum Fences</h3>
                <p className="text-gray-600 mb-4">
                  Powder-coated aluminum cleans at <strong>2,000-2,500 PSI</strong>. We remove dirt, pollen,
                  and oxidation while protecting the finish. Proper technique prevents paint chipping or
                  powder coating damage.
                </p>
                <p className="text-sm text-blue-600 font-semibold">Popular in: Ornamental fences, pool enclosures</p>
              </article>

              <article className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Chain-Link Fences</h3>
                <p className="text-gray-600 mb-4">
                  Galvanized chain-link handles <strong>2,000-3,000 PSI</strong>. We remove rust stains, algae,
                  and debris caught in the mesh. The high pressure efficiently cleans both sides of the fence
                  without damage.
                </p>
                <p className="text-sm text-gray-600 font-semibold">Popular in: Backyard fences, dog runs</p>
              </article>

              <article className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Composite Fences</h3>
                <p className="text-gray-600 mb-4">
                  Wood-plastic composite needs gentle <strong>500-800 PSI</strong>, similar to <Link href="/services/deck-cleaning" className="text-blue-600 hover:underline">composite decking</Link>.
                  Too much pressure damages the protective cap layer. We use composite-safe cleaners.
                </p>
                <p className="text-sm text-purple-600 font-semibold">Popular in: Low-maintenance privacy fences</p>
              </article>

              <article className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wrought Iron Fences</h3>
                <p className="text-gray-600 mb-4">
                  Wrought iron cleans at <strong>2,000-2,500 PSI</strong>. We remove rust, oxidation, and old
                  paint without damaging ornamental details. Rust treatment available before repainting for
                  long-lasting protection.
                </p>
                <p className="text-sm text-gray-700 font-semibold">Popular in: Historic homes, decorative fencing</p>
              </article>
            </div>
          </div>
        </section>

        {/* Florida Fence Challenges */}
        <section aria-labelledby="challenges-heading" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="max-w-3xl mx-auto text-center mb-12">
              <h2 id="challenges-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Florida Fences Deteriorate Faster
              </h2>
              <p className="text-lg text-gray-600">
                Central Florida's subtropical climate accelerates fence aging and requires more frequent maintenance.
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Algae & Mold Growth</h3>
                <p className="text-gray-600">
                  Fences in shaded areas or near irrigation develop <strong>green algae and black mold</strong> rapidly.
                  North-facing fence sections receive less sun and stay damp longer. Beyond appearance, organic growth
                  holds moisture against fence materials, accelerating wood rot and degrading vinyl.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">UV Weathering</h3>
                <p className="text-gray-600">
                  Florida's intense UV exposure (230+ sunny days annually) breaks down fence finishes and wood lignin.
                  Wood fences turn gray, vinyl yellows, and painted surfaces fade. Regular cleaning plus protective
                  coatings extend fence life against <strong>UV damage</strong>.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Storm Debris</h3>
                <p className="text-gray-600">
                  Hurricane season deposits leaves, twigs, and dirt onto fences. This debris traps moisture and
                  creates staining. <strong>Post-storm cleaning</strong> prevents permanent discoloration and removes
                  mold-feeding organic matter before it establishes.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Cleaning Process */}
        <section aria-labelledby="process-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Fence Cleaning Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Material-specific techniques ensure thorough cleaning without damage.
              </p>
            </header>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</span>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Material Assessment</h3>
                  <p className="text-gray-600">
                    We identify fence material, age, and condition. This determines safe PSI levels, appropriate
                    cleaning solutions, and technique. We note damaged sections that need special care or repair.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</span>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Treatment Application</h3>
                  <p className="text-gray-600">
                    Material-specific cleaners are applied: mold/algae killers for organic growth, degreasers for
                    stubborn stains, rust removers for metal fences. The solution dwells for 10-15 minutes to break
                    down contaminants before rinsing.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</span>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pressure Washing</h3>
                  <p className="text-gray-600">
                    Using appropriate PSI for your fence material, we clean both sides (when accessible). For wood,
                    we follow the grain. For vinyl, we use sweeping horizontal motions. We clean from top to bottom,
                    ensuring even coverage and no missed spots.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">4</span>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wood Brightening (Wood Fences Only)</h3>
                  <p className="text-gray-600">
                    An oxalic acid-based brightener restores wood's natural pH and removes gray oxidation. This step
                    brings back the original wood color and prepares the surface for optimal stain or sealer absorption.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">5</span>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Final Inspection & Recommendations</h3>
                  <p className="text-gray-600">
                    We inspect the cleaned fence and address any remaining issues. For wood fences, we provide staining/sealing
                    recommendations. For all fences, we note any repairs needed and suggest maintenance schedules based
                    on your specific conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wood Fence Restoration */}
        <section aria-labelledby="restoration-heading" className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-12">
                <h2 id="restoration-heading" className="text-3xl md:text-4xl font-bold mb-6">
                  Wood Fence Restoration
                </h2>
                <p className="text-lg text-gray-300">
                  Transform gray, weathered wood fences back to their natural beauty.
                </p>
              </header>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-amber-400">The Problem: UV Weathering</h3>
                  <p className="text-gray-300 mb-4">
                    Florida's intense sun breaks down <strong>lignin</strong>—the natural glue holding wood fibers together.
                    This causes the characteristic gray, weathered appearance on untreated wood fences. The process happens
                    faster in Florida than cooler climates.
                  </p>
                  <p className="text-gray-300">
                    Weathered wood isn't just cosmetic. The broken-down surface absorbs more water, accelerating rot and
                    creating ideal conditions for mold growth. Left untreated, weathering significantly shortens fence lifespan.
                  </p>
                </div>

                <div className="bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-amber-400">The Solution: Clean + Brighten + Seal</h3>
                  <p className="text-gray-300 mb-4">
                    <strong>Step 1:</strong> Pressure washing removes surface dirt, mold, and some gray oxidation.<br />
                    <strong>Step 2:</strong> Wood brightener (oxalic acid) neutralizes the wood and removes remaining gray.<br />
                    <strong>Step 3:</strong> Stain or sealer (applied 48-72 hours after drying) protects against future UV damage.
                  </p>
                  <p className="text-gray-300">
                    This three-step process can make a 5-10 year old fence look nearly new again. Reapply stain/sealer every
                    2-3 years to maintain protection in Florida's harsh climate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section aria-labelledby="faq-heading" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fence Cleaning FAQ
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about professional fence cleaning in Central Florida.
              </p>
            </header>

            <div className="max-w-3xl mx-auto space-y-4">
              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  What PSI should be used for cleaning fences?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Fence cleaning PSI varies by material: wood fences require 500-1,200 PSI depending on age and
                    condition, vinyl fences clean safely at 1,500-2,000 PSI, aluminum and chain-link handle 2,000-2,500 PSI,
                    while composite fences need gentle 500-800 PSI. Excessive pressure damages wood grain, cracks vinyl,
                    or strips paint from metal fences.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  Can pressure washing damage my wood fence?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Yes, if done improperly. Too much pressure (over 1,500 PSI) splinters wood fibers, raises grain, and
                    creates a fuzzy surface. Professional fence cleaning uses appropriate pressure, maintains proper nozzle
                    distance (12-18 inches), and follows the wood grain direction. Older, weathered fences require even
                    lower pressure to prevent damage.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  How often should I clean my fence in Florida?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Florida fences should be cleaned annually, or every 6-8 months for heavily shaded fences. Florida's
                    humidity and frequent rain cause rapid algae and mold growth, especially on north-facing fence sections
                    that stay damp. Regular cleaning prevents permanent staining and extends fence life by removing damaging
                    organic growth.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  Why does my fence turn green in Florida?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Green discoloration on fences is algae growth, thriving in Florida's 75%+ humidity and warm temperatures.
                    Shaded fence sections, areas near sprinklers, and north-facing panels stay damp longer, accelerating algae.
                    Beyond appearance, algae holds moisture against fence materials, accelerating rot in wood and degrading
                    vinyl surfaces over time.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  Should I seal or stain my fence after cleaning?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    For wood fences, yes. Cleaning opens wood pores, creating ideal conditions for stain or sealer absorption.
                    Wait 48-72 hours after cleaning for the wood to dry completely. Semi-transparent stains showcase wood grain
                    while providing UV protection. Solid stains offer maximum Florida sun protection. Vinyl and metal fences
                    don't require sealing.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  Will cleaning remove gray weathering from my wood fence?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Partially. Gray weathering is caused by UV breakdown of lignin in wood. Pressure washing removes surface
                    oxidation and some gray discoloration, but deeply weathered wood may retain gray undertones. Wood brightener
                    treatment after cleaning neutralizes the wood and restores more of the original color before staining or sealing.
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
                Fence Cleaning Service Areas
              </h2>
              <p className="text-gray-600">
                Professional fence cleaning throughout Central Florida.
              </p>
            </header>

            <nav aria-label="Service locations">
              <ul className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {locations.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg hover:bg-amber-200 transition-colors inline-block"
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
                  <Link href="/services/deck-cleaning" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <span className="text-3xl mb-2 block">🏗️</span>
                    <span className="font-semibold text-gray-800">Deck Cleaning</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/house-washing" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <span className="text-3xl mb-2 block">🏠</span>
                    <span className="font-semibold text-gray-800">House Washing</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/patio-cleaning" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <span className="text-3xl mb-2 block">🪴</span>
                    <span className="font-semibold text-gray-800">Patio Cleaning</span>
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
        <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Restore Your Fence?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Get a free quote for professional fence cleaning. Remove years of algae, mold, and
              weathering to restore your fence's curb appeal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-amber-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-100 transition-colors">
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
