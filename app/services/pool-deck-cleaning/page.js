import Link from 'next/link';

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Pool Deck Cleaning Services",
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
  "description": "Professional pool deck cleaning services in Central Florida. Remove slippery algae, calcium deposits, and stains from concrete, paver, and travertine pool decks. Safety-focused slip prevention.",
  "serviceType": "Pool Deck Cleaning and Safety Enhancement"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you prevent pool decks from getting slippery after cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use algaecide treatments that kill algae spores at the cellular level, preventing rapid regrowth. Post-cleaning sealing with slip-resistant additives creates texture that maintains traction even when wet. For existing smooth surfaces, we can apply anti-slip coatings or recommend textured overlays. Regular cleaning (every 6-12 months in Florida) prevents algae buildup that causes dangerous slippery conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Will pressure washing damage my pool deck surface?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When done correctly, no. We adjust PSI based on surface: concrete handles 3,000-4,000 PSI, pavers need 1,500-2,500 PSI, travertine requires gentle 800-1,200 PSI, and cool deck surfaces use 2,000-2,500 PSI. Improper pressure damages surfaces—excessive force on pavers erodes joints, high pressure on travertine creates pitting, and wrong technique on cool deck degrades the textured coating."
      }
    },
    {
      "@type": "Question",
      "name": "What causes white calcium buildup on pool decks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "White calcium deposits (calcium carbonate or calcium silicate) form when pool water with high calcium levels splashes onto the deck and evaporates. Florida's hard water exacerbates this issue. Calcium carbonate responds to mild acid cleaners, while calcium silicate requires stronger treatments. Prevention involves balanced pool chemistry and regular deck cleaning to remove deposits before they bond permanently."
      }
    },
    {
      "@type": "Question",
      "name": "How often should pool decks be cleaned in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Florida pool decks need cleaning every 6-12 months due to constant moisture exposure, high humidity, and year-round pool use. Decks with heavy tree coverage or in shaded areas may need quarterly cleaning. Signs you need cleaning include visible algae (green slime), slippery surfaces when wet, calcium buildup, or dark staining. Regular cleaning prevents slip-and-fall hazards."
      }
    },
    {
      "@type": "Question",
      "name": "Can you clean pool deck pavers without removing the sand?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, professional paver cleaning uses controlled pressure and proper technique to clean without washing out joint sand. We use 1,500-2,500 PSI with sweeping motions parallel to joints, avoiding concentrated streams directly on sand lines. If sand loss occurs, we can resand with polymeric sand that hardens to resist erosion and inhibit weed growth."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to use the pool immediately after deck cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wait 24 hours after cleaning before pool use. This allows cleaning solution residue to fully rinse away and prevents it from entering the pool. We use pool-safe cleaning products, but residual chemicals can affect pool chemistry if they wash in immediately. After 24 hours and a final rinse, the deck is safe for use and swimming can resume normally."
      }
    }
  ]
};

export const metadata = {
  title: 'Pool Deck Cleaning Central Florida | Slip Prevention | KJS Supreme',
  description: 'Professional pool deck cleaning in Deltona, Orlando, Sanford. Remove slippery algae, calcium deposits. Clean concrete, paver, travertine, cool deck surfaces. Safety-focused. Free quotes: (213) 841-6924.',
  keywords: 'pool deck cleaning Central Florida, pool deck pressure washing, slip prevention, algae removal pool deck, calcium deposit removal, travertine pool deck cleaning Deltona',
  openGraph: {
    title: 'Pool Deck Cleaning Services | Slip Prevention | KJS Supreme',
    description: 'Make your pool deck safe and beautiful. Professional cleaning removes dangerous algae and stains.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://kjssupremepressurewashing.com/services/pool-deck-cleaning',
  },
};

export default function PoolDeckCleaningPage() {
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
        {/* Hero */}
        <section className="bg-gradient-to-br from-cyan-700 via-cyan-800 to-cyan-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center space-x-2 text-cyan-200 text-sm">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li>/</li>
                  <li><Link href="/services" className="hover:text-white">Services</Link></li>
                  <li>/</li>
                  <li className="text-white">Pool Deck Cleaning</li>
                </ol>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Pool Deck Cleaning in Central Florida
              </h1>
              <p className="text-xl md:text-2xl text-cyan-100 mb-8 leading-relaxed">
                Keep your pool area safe and beautiful. Professional cleaning removes dangerous algae,
                calcium deposits, and stains from all pool deck surfaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-white text-cyan-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-100 transition-colors text-center">
                  Get Free Quote
                </Link>
                <a href="tel:+12138416924" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors text-center">
                  (213) 841-6924
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Focus */}
        <section className="py-16 bg-amber-50 border-l-4 border-amber-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <svg className="w-12 h-12 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Pool Deck Safety is Critical</h2>
                  <p className="text-gray-700 mb-3">
                    <strong>Slippery pool decks cause thousands of injuries annually.</strong> Algae growth creates
                    invisible biofilm that becomes dangerously slick when wet—especially problematic around pools where
                    barefoot traffic and running children are common.
                  </p>
                  <p className="text-gray-700">
                    Professional cleaning removes algae at the root, applies preventive treatments, and can add
                    anti-slip coatings for enhanced safety. Don't wait for an accident—proactive maintenance protects
                    your family and guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pool Deck Surfaces */}
        <section aria-labelledby="surfaces-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="surfaces-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pool Deck Surfaces We Clean
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Each pool deck material requires specific cleaning techniques for safety and longevity.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <article className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Concrete Pool Decks</h3>
                <p className="text-gray-600 mb-4">
                  Poured concrete is the most common pool deck surface. We clean at <strong>3,000-4,000 PSI</strong>,
                  removing algae, calcium deposits, and sunscreen/oil stains. Concrete's porous nature absorbs stains,
                  requiring pre-treatment for deep cleaning.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Stamped concrete</strong> (decorative textured patterns) needs careful 2,500-3,000 PSI cleaning
                  to avoid damaging the pattern or removing color. We clean crevices where algae hides without eroding
                  the decorative surface.
                </p>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <p className="text-sm text-cyan-800">
                    <strong>Post-Cleaning:</strong> Sealing recommended. Sealers prevent staining, inhibit algae growth,
                    and make future cleaning easier. Reseal every 2-3 years in Florida's harsh climate.
                  </p>
                </div>
              </article>

              <article className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Paver Pool Decks</h3>
                <p className="text-gray-600 mb-4">
                  Concrete or natural stone pavers clean at <strong>1,500-2,500 PSI</strong> with joint-safe techniques.
                  We avoid washing out polymeric sand between pavers while thoroughly cleaning the surface and edges.
                </p>
                <p className="text-gray-600 mb-4">
                  Pavers offer natural slip resistance when clean, but algae in joints creates hazards. We clean joints
                  completely, kill algae spores, and can resand/seal for long-lasting protection.
                </p>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <p className="text-sm text-cyan-800">
                    <strong>Paver Advantages:</strong> Individual pavers can be replaced if damaged. Joints allow water
                    drainage, reducing standing water. Textured surfaces provide better traction than smooth concrete.
                  </p>
                </div>
              </article>

              <article className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Travertine Pool Decks</h3>
                <p className="text-gray-600 mb-4">
                  Travertine (natural limestone) is popular for Florida pools due to heat-reflective properties—it stays
                  cooler underfoot. However, its porous nature requires gentle <strong>800-1,200 PSI</strong> cleaning.
                  High pressure damages natural holes and texture.
                </p>
                <p className="text-gray-600 mb-4">
                  We use <Link href="/services/soft-washing" className="text-blue-600 hover:underline">soft washing</Link> with
                  pH-neutral cleaners, avoiding acids that etch limestone. Special attention to calcium deposit removal
                  without damaging the stone.
                </p>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <p className="text-sm text-cyan-800">
                    <strong>Travertine Care:</strong> Seal after cleaning to fill pores and reduce staining. Use stone-safe
                    cleaners only. Avoid acidic pool chemicals splashing on the deck as they etch the surface.
                  </p>
                </div>
              </article>

              <article className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cool Deck & Textured Coatings</h3>
                <p className="text-gray-600 mb-4">
                  Cool deck (Kool Deck) is a cement-based coating applied over concrete, creating a textured, heat-reflective
                  surface. We clean at <strong>2,000-2,500 PSI</strong>, carefully preserving the textured coating that
                  provides slip resistance and heat reduction.
                </p>
                <p className="text-gray-600 mb-4">
                  Aggressive pressure or harsh chemicals degrade the coating. We use coating-safe cleaners and appropriate
                  pressure to remove algae and stains without compromising the surface texture.
                </p>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <p className="text-sm text-cyan-800">
                    <strong>Coating Maintenance:</strong> Cool deck coatings last 10-15 years with proper care. Cleaning
                    extends coating life by preventing organic growth that breaks down the material. Recoating available
                    when wear occurs.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Common Pool Deck Problems */}
        <section aria-labelledby="problems-heading" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="problems-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Common Pool Deck Problems in Florida
              </h2>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-cyan-600">Slippery Algae</h3>
                <p className="text-gray-600">
                  Green algae forms rapidly on damp pool decks. Creates invisible biofilm that's extremely slippery when
                  wet. Particularly dangerous with children running and diving. Requires algaecide treatment plus pressure
                  washing for complete removal.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-cyan-600">Calcium Deposits</h3>
                <p className="text-gray-600">
                  White crusty buildup from pool water splash evaporation. Florida's hard water accelerates formation.
                  Calcium carbonate responds to mild acids; calcium silicate needs stronger treatment. Regular cleaning
                  prevents permanent bonding.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-cyan-600">Rust Stains</h3>
                <p className="text-gray-600">
                  Orange-brown stains from metal patio furniture, pool equipment, or well water with high iron content.
                  Require oxalic acid-based rust removers. Pressure washing alone ineffective. Source identification
                  prevents recurrence.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-cyan-600">Sunscreen & Oil Stains</h3>
                <p className="text-gray-600">
                  Body oils, sunscreen, and tanning products create dark stains on concrete. These petroleum-based
                  contaminants penetrate porous surfaces. Require degreaser pre-treatment with hot water pressure washing
                  for removal.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-cyan-600">Efflorescence</h3>
                <p className="text-gray-600">
                  White powdery salt deposits that appear on concrete and pavers. Caused by water migration through the
                  material bringing salts to the surface. Common after Florida's heavy rains. Requires specialized cleaners
                  to dissolve salts.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-cyan-600">Mold in Joints</h3>
                <p className="text-gray-600">
                  Black mold grows in paver joints and concrete cracks where moisture accumulates. Not just cosmetic—creates
                  health hazards and accelerates surface degradation. Requires fungicidal treatment to kill spores and
                  prevent rapid return.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pool Deck Cleaning FAQ
              </h2>
            </header>

            <div className="max-w-3xl mx-auto space-y-4">
              <details className="bg-gray-50 rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  How do you prevent pool decks from getting slippery after cleaning?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    We use algaecide treatments that kill algae spores at the cellular level, preventing rapid regrowth.
                    Post-cleaning sealing with slip-resistant additives creates texture that maintains traction even when wet.
                    For existing smooth surfaces, we can apply anti-slip coatings or recommend textured overlays. Regular cleaning
                    (every 6-12 months in Florida) prevents algae buildup that causes dangerous slippery conditions.
                  </p>
                </div>
              </details>

              <details className="bg-gray-50 rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  Will pressure washing damage my pool deck surface?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    When done correctly, no. We adjust PSI based on surface: concrete handles 3,000-4,000 PSI, pavers need
                    1,500-2,500 PSI, travertine requires gentle 800-1,200 PSI, and cool deck surfaces use 2,000-2,500 PSI.
                    Improper pressure damages surfaces—excessive force on pavers erodes joints, high pressure on travertine
                    creates pitting, and wrong technique on cool deck degrades the textured coating.
                  </p>
                </div>
              </details>

              <details className="bg-gray-50 rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  What causes white calcium buildup on pool decks?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    White calcium deposits (calcium carbonate or calcium silicate) form when pool water with high calcium levels
                    splashes onto the deck and evaporates. Florida's hard water exacerbates this issue. Calcium carbonate responds
                    to mild acid cleaners, while calcium silicate requires stronger treatments. Prevention involves balanced pool
                    chemistry and regular deck cleaning to remove deposits before they bond permanently.
                  </p>
                </div>
              </details>

              <details className="bg-gray-50 rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  How often should pool decks be cleaned in Florida?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Florida pool decks need cleaning every 6-12 months due to constant moisture exposure, high humidity, and
                    year-round pool use. Decks with heavy tree coverage or in shaded areas may need quarterly cleaning. Signs
                    you need cleaning include visible algae (green slime), slippery surfaces when wet, calcium buildup, or dark
                    staining. Regular cleaning prevents slip-and-fall hazards.
                  </p>
                </div>
              </details>

              <details className="bg-gray-50 rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  Can you clean pool deck pavers without removing the sand?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Yes, professional paver cleaning uses controlled pressure and proper technique to clean without washing out
                    joint sand. We use 1,500-2,500 PSI with sweeping motions parallel to joints, avoiding concentrated streams
                    directly on sand lines. If sand loss occurs, we can resand with polymeric sand that hardens to resist erosion
                    and inhibit weed growth.
                  </p>
                </div>
              </details>

              <details className="bg-gray-50 rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  Is it safe to use the pool immediately after deck cleaning?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Wait 24 hours after cleaning before pool use. This allows cleaning solution residue to fully rinse away and
                    prevents it from entering the pool. We use pool-safe cleaning products, but residual chemicals can affect pool
                    chemistry if they wash in immediately. After 24 hours and a final rinse, the deck is safe for use and swimming
                    can resume normally.
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
        <section aria-labelledby="areas-heading" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="text-center mb-10">
              <h2 id="areas-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Pool Deck Cleaning Service Areas
              </h2>
            </header>

            <nav aria-label="Service locations">
              <ul className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {locations.map((loc) => (
                  <li key={loc.slug}>
                    <Link href={`/locations/${loc.slug}`} className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-lg hover:bg-cyan-200 transition-colors inline-block">
                      {loc.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/locations" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors inline-block">
                    + All Locations
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Services</h2>
            <nav aria-label="Related services">
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <li><Link href="/services/patio-cleaning" className="block bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"><span className="text-3xl mb-2 block">🪴</span><span className="font-semibold text-gray-800">Patio Cleaning</span></Link></li>
                <li><Link href="/services/paver-cleaning" className="block bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"><span className="text-3xl mb-2 block">🧱</span><span className="font-semibold text-gray-800">Paver Cleaning</span></Link></li>
                <li><Link href="/services/concrete-cleaning" className="block bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"><span className="text-3xl mb-2 block">🏗️</span><span className="font-semibold text-gray-800">Concrete Cleaning</span></Link></li>
                <li><Link href="/services/deck-cleaning" className="block bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"><span className="text-3xl mb-2 block">🏗️</span><span className="font-semibold text-gray-800">Deck Cleaning</span></Link></li>
              </ul>
            </nav>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Make Your Pool Deck Safe & Beautiful</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Get a free quote for professional pool deck cleaning. Remove dangerous algae and restore your pool area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-cyan-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-100 transition-colors">Get Free Quote</Link>
              <a href="tel:+12138416924" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">(213) 841-6924</a>
            </div>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
