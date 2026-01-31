import Link from 'next/link';
import Image from 'next/image';

// Service Schema for Deck Cleaning
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Deck Cleaning Services",
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
  "description": "Professional deck cleaning and restoration services for wood and composite decks in Central Florida. Safe pressure washing with wood brightening treatments.",
  "serviceType": "Deck Cleaning and Restoration"
};

// FAQ Schema for Deck Cleaning
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What PSI should be used for deck cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deck cleaning requires careful pressure control. Softwood decks (pine, cedar) should be cleaned at 500-800 PSI, while hardwoods can handle 1,000-1,200 PSI. Composite decking requires even lower pressure (under 500 PSI) with wider fan tips. Using too high pressure damages wood fibers, causing splintering and premature aging."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I have my deck cleaned in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Central Florida's humid climate, decks should be professionally cleaned every 1-2 years. Decks in heavily shaded areas or near water may need annual cleaning due to faster mold and algae growth. Regular cleaning extends deck life and maintains the wood's structural integrity."
      }
    },
    {
      "@type": "Question",
      "name": "Should I seal my deck after pressure washing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, sealing after cleaning is highly recommended for wood decks. The cleaning process opens wood pores, making it the ideal time to apply sealant or stain. Wait 24-48 hours after cleaning for the wood to dry completely before applying sealant. Sealed decks resist Florida's UV rays and moisture better."
      }
    },
    {
      "@type": "Question",
      "name": "Can pressure washing damage my deck?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Improper pressure washing can damage decks by splintering wood fibers, raising the grain, or etching composite materials. Professional cleaners use appropriate PSI levels, correct nozzle distances (12-18 inches), and proper techniques like following the wood grain. We adjust our approach for each deck material."
      }
    },
    {
      "@type": "Question",
      "name": "What causes the gray color on my wood deck?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gray discoloration on wood decks is caused by UV exposure breaking down lignin (the natural glue in wood) and oxidation of the surface fibers. This weathering process is accelerated in Florida's intense sunlight. Our cleaning process includes a wood brightener treatment that restores the natural color by removing oxidized fibers."
      }
    },
    {
      "@type": "Question",
      "name": "How do you clean composite decking differently from wood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Composite decking (Trex, TimberTech, Azek) requires lower pressure (under 500 PSI), specialized composite-safe cleaners, and wider spray patterns. We never use bleach on composite decks as it can cause discoloration. The cleaning technique also differs—we avoid concentrated streams that can damage the protective cap layer."
      }
    }
  ]
};

export const metadata = {
  title: 'Deck Cleaning Services Central Florida | Wood & Composite | KJS Supreme',
  description: 'Professional deck cleaning in Deltona, Orlando, Sanford. Wood and composite deck restoration, mold removal, wood brightening. Safe pressure washing techniques. Free quotes: (213) 841-6924.',
  keywords: 'deck cleaning Central Florida, deck pressure washing, wood deck cleaning, composite deck cleaning, Trex cleaning, deck restoration Deltona, deck mold removal Orlando',
  openGraph: {
    title: 'Professional Deck Cleaning Services | KJS Supreme Pressure Washing',
    description: 'Restore your outdoor living space. Expert deck cleaning for wood and composite decks in Central Florida.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://kjssupremepressurewashing.com/services/deck-cleaning',
  },
};

export default function DeckCleaningPage() {
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
                  <li className="text-white">Deck Cleaning</li>
                </ol>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional Deck Cleaning in Central Florida
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed">
                Restore your outdoor living space with expert deck cleaning. We safely clean wood and
                composite decks, removing mold, mildew, and weathering while protecting your investment.
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

        {/* Florida Climate Impact Section */}
        <section aria-labelledby="climate-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <header className="max-w-3xl mx-auto text-center mb-12">
              <h2 id="climate-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Florida Decks Need Professional Cleaning
              </h2>
              <p className="text-lg text-gray-600">
                Central Florida's subtropical climate creates the perfect environment for deck deterioration.
                Understanding these challenges helps you protect your outdoor investment.
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <article className="bg-amber-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">UV Damage & Graying</h3>
                <p className="text-gray-600">
                  Florida receives 230+ sunny days annually. UV rays break down <strong>lignin</strong>—the
                  natural compound that holds wood fibers together—causing the gray, weathered appearance.
                  Our cleaning includes brightening treatments that restore natural wood color.
                </p>
              </article>

              <article className="bg-green-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Humidity & Mold Growth</h3>
                <p className="text-gray-600">
                  With 75%+ average humidity, Central Florida decks are constantly exposed to moisture.
                  This creates ideal conditions for <strong>mold, mildew, and algae</strong> that make
                  surfaces slippery and accelerate wood rot. Professional cleaning kills these organisms at the root.
                </p>
              </article>

              <article className="bg-blue-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pollen & Debris</h3>
                <p className="text-gray-600">
                  Florida's year-round growing season means constant pollen and organic debris. Oak pollen
                  in spring creates a yellow film, while falling leaves trap moisture. Regular cleaning
                  prevents staining and maintains <Link href="/services/soft-washing" className="text-blue-600 hover:underline">surface protection</Link>.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Deck Types Section */}
        <section aria-labelledby="deck-types-heading" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="deck-types-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Deck Materials We Clean
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Each deck material requires specific cleaning techniques and pressure levels.
                We customize our approach for optimal results without damage.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Wood Decks */}
              <article className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Wood Decks</h3>

                <dl className="space-y-4">
                  <div className="border-l-4 border-amber-500 pl-4">
                    <dt className="font-semibold text-gray-900">Pressure-Treated Pine</dt>
                    <dd className="text-gray-600">
                      Most common deck wood in Florida. Clean at 500-800 PSI. The treatment chemicals
                      (ACQ or copper azole) resist rot but not surface mold. Annual cleaning recommended.
                    </dd>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-4">
                    <dt className="font-semibold text-gray-900">Cedar & Redwood</dt>
                    <dd className="text-gray-600">
                      Naturally rot-resistant softwoods requiring gentle cleaning at 500-600 PSI.
                      These woods gray faster in Florida sun but respond well to brightening treatments.
                    </dd>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-4">
                    <dt className="font-semibold text-gray-900">Ipe & Hardwoods</dt>
                    <dd className="text-gray-600">
                      Dense tropical hardwoods can handle 1,000-1,200 PSI. Their tight grain resists
                      moisture but still accumulates surface mold. Often require specialized hardwood cleaners.
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <strong>Pro Tip:</strong> After cleaning, we recommend waiting 24-48 hours before
                    applying sealant. Open wood pores absorb sealant better, providing longer-lasting protection.
                  </p>
                </div>
              </article>

              {/* Composite Decks */}
              <article className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Composite & PVC Decks</h3>

                <dl className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <dt className="font-semibold text-gray-900">Trex & TimberTech</dt>
                    <dd className="text-gray-600">
                      Wood-plastic composites require under 500 PSI with composite-safe cleaners.
                      Never use bleach—it damages the protective cap layer and causes fading.
                    </dd>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <dt className="font-semibold text-gray-900">Azek & PVC</dt>
                    <dd className="text-gray-600">
                      100% PVC decking is more resistant but still collects mold in textured surfaces.
                      Use wide fan tips and maintain 12+ inch distance to prevent heat damage.
                    </dd>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <dt className="font-semibold text-gray-900">Capped Composite</dt>
                    <dd className="text-gray-600">
                      Modern capped composites have a protective polymer shell. We clean the surface
                      without compromising this layer, which provides UV and stain resistance.
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Did You Know?</strong> Composite decks don't need sealing, but they do
                    need regular cleaning. Mold grows on the surface film, not the material itself.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section aria-labelledby="process-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Professional Deck Cleaning Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A systematic approach ensures thorough cleaning without damage.
                Each step is calibrated for your specific deck material.
              </p>
            </header>

            <ol className="max-w-4xl mx-auto space-y-6">
              <li className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</span>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Inspection & Assessment</h3>
                  <p className="text-gray-600">
                    We identify your deck material, check for loose boards, popped nails, and structural
                    concerns. This determines the appropriate PSI, cleaning solution, and technique.
                    We note areas needing extra attention like heavy mold or staining.
                  </p>
                </div>
              </li>

              <li className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</span>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Treatment Application</h3>
                  <p className="text-gray-600">
                    A deck-safe cleaning solution is applied and allowed to dwell for 10-15 minutes.
                    This breaks down mold, mildew, and algae at the cellular level, making removal easier
                    and reducing the pressure needed. We use <Link href="/services/soft-washing" className="text-blue-600 hover:underline">eco-friendly solutions</Link> safe for surrounding plants.
                  </p>
                </div>
              </li>

              <li className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</span>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pressure Washing</h3>
                  <p className="text-gray-600">
                    Using the appropriate PSI for your deck material, we clean with consistent overlapping
                    strokes following the wood grain. Proper nozzle distance (12-18 inches) and angle
                    prevent damage. We pay special attention to gaps between boards where debris accumulates.
                  </p>
                </div>
              </li>

              <li className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">4</span>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wood Brightening (Wood Decks Only)</h3>
                  <p className="text-gray-600">
                    An oxalic acid-based brightener neutralizes the cleaning solution and restores the
                    wood's natural pH. This step removes gray oxidation and brings back the original
                    wood color—often making decks look years younger.
                  </p>
                </div>
              </li>

              <li className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">5</span>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Final Rinse & Inspection</h3>
                  <p className="text-gray-600">
                    A thorough rinse removes all cleaning residue. We inspect the entire surface for
                    missed spots and touch up as needed. For wood decks, we advise on sealing options
                    and optimal timing for stain or sealant application.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* PSI Guide Section */}
        <section aria-labelledby="psi-heading" className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="psi-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Deck Cleaning PSI Guide
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Using the wrong pressure level is the #1 cause of deck damage.
                Here's the professional approach for each material.
              </p>
            </header>

            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto bg-gray-800 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-amber-600">
                    <th className="px-6 py-4 text-left font-bold">Deck Material</th>
                    <th className="px-6 py-4 text-left font-bold">Recommended PSI</th>
                    <th className="px-6 py-4 text-left font-bold">Nozzle</th>
                    <th className="px-6 py-4 text-left font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 font-medium">Pressure-Treated Pine</td>
                    <td className="px-6 py-4">500-800 PSI</td>
                    <td className="px-6 py-4">25° or 40°</td>
                    <td className="px-6 py-4 text-gray-300">Follow grain direction</td>
                  </tr>
                  <tr className="bg-gray-750">
                    <td className="px-6 py-4 font-medium">Cedar/Redwood</td>
                    <td className="px-6 py-4">500-600 PSI</td>
                    <td className="px-6 py-4">40°</td>
                    <td className="px-6 py-4 text-gray-300">Very soft—lower is better</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Ipe/Hardwoods</td>
                    <td className="px-6 py-4">1,000-1,200 PSI</td>
                    <td className="px-6 py-4">25°</td>
                    <td className="px-6 py-4 text-gray-300">Dense grain handles more</td>
                  </tr>
                  <tr className="bg-gray-750">
                    <td className="px-6 py-4 font-medium">Trex/Composite</td>
                    <td className="px-6 py-4">Under 500 PSI</td>
                    <td className="px-6 py-4">40° or 65°</td>
                    <td className="px-6 py-4 text-gray-300">No bleach; composite cleaner</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">PVC/Azek</td>
                    <td className="px-6 py-4">Under 500 PSI</td>
                    <td className="px-6 py-4">40° or 65°</td>
                    <td className="px-6 py-4 text-gray-300">Avoid heat buildup</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
              For comparison, <Link href="/services/driveway-cleaning" className="text-amber-400 hover:underline">concrete driveways</Link> are
              cleaned at 3,000-4,000 PSI. Using driveway pressure on a deck would cause severe damage.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section aria-labelledby="faq-heading" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Deck Cleaning FAQ
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about professional deck cleaning in Central Florida.
              </p>
            </header>

            <div className="max-w-3xl mx-auto space-y-4">
              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  What PSI should be used for deck cleaning?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Deck cleaning requires careful pressure control. Softwood decks (pine, cedar) should be
                    cleaned at 500-800 PSI, while hardwoods can handle 1,000-1,200 PSI. Composite decking
                    requires even lower pressure (under 500 PSI) with wider fan tips. Using too high pressure
                    damages wood fibers, causing splintering and premature aging.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  How often should I have my deck cleaned in Florida?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    In Central Florida's humid climate, decks should be professionally cleaned every 1-2 years.
                    Decks in heavily shaded areas or near water may need annual cleaning due to faster mold
                    and algae growth. Regular cleaning extends deck life and maintains the wood's structural integrity.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  Should I seal my deck after pressure washing?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Yes, sealing after cleaning is highly recommended for wood decks. The cleaning process
                    opens wood pores, making it the ideal time to apply sealant or stain. Wait 24-48 hours
                    after cleaning for the wood to dry completely before applying sealant. Sealed decks
                    resist Florida's UV rays and moisture better.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  What causes the gray color on my wood deck?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Gray discoloration on wood decks is caused by UV exposure breaking down lignin—the
                    natural compound that holds wood fibers together—and oxidation of the surface fibers.
                    This weathering process is accelerated in Florida's intense sunlight. Our cleaning
                    process includes a wood brightener treatment that restores the natural color by removing
                    oxidized fibers.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  Can pressure washing damage my deck?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Improper pressure washing can damage decks by splintering wood fibers, raising the grain,
                    or etching composite materials. Professional cleaners use appropriate PSI levels, correct
                    nozzle distances (12-18 inches), and proper techniques like following the wood grain.
                    We adjust our approach for each deck material.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  How do you clean composite decking differently from wood?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Composite decking (Trex, TimberTech, Azek) requires lower pressure (under 500 PSI),
                    specialized composite-safe cleaners, and wider spray patterns. We never use bleach on
                    composite decks as it can cause discoloration. The cleaning technique also differs—we
                    avoid concentrated streams that can damage the protective cap layer.
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
                Deck Cleaning Service Areas
              </h2>
              <p className="text-gray-600">
                Professional deck cleaning throughout Central Florida.
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
                  <Link href="/services/fence-cleaning" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <span className="text-3xl mb-2 block">🏗️</span>
                    <span className="font-semibold text-gray-800">Fence Cleaning</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/patio-cleaning" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <span className="text-3xl mb-2 block">🪴</span>
                    <span className="font-semibold text-gray-800">Patio Cleaning</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/pool-deck-cleaning" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <span className="text-3xl mb-2 block">🏊</span>
                    <span className="font-semibold text-gray-800">Pool Deck Cleaning</span>
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
              Ready to Restore Your Deck?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Get a free quote for professional deck cleaning. We'll assess your deck material
              and provide a customized cleaning plan.
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
