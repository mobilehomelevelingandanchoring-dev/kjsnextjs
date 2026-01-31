import Link from 'next/link';

// Service Schema for Patio Cleaning
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Patio Cleaning Services",
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
  "description": "Professional patio cleaning services for concrete, brick, stone, and paver patios in Central Florida. Remove algae, mold, and stains to restore your outdoor entertainment area.",
  "serviceType": "Patio Cleaning and Restoration"
};

// FAQ Schema for Patio Cleaning
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What PSI is safe for cleaning patios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PSI requirements vary by surface: concrete patios handle 3,000-4,000 PSI, brick and pavers need 1,500-2,500 PSI, natural stone requires 1,200-1,800 PSI, and travertine needs gentle 800-1,200 PSI. Using excessive pressure on softer materials causes pitting, joint erosion, and surface damage. We adjust pressure based on your specific patio material."
      }
    },
    {
      "@type": "Question",
      "name": "Will pressure washing damage patio pavers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When done correctly, no. Professional paver cleaning uses appropriate pressure (1,500-2,500 PSI) and proper techniques to avoid washing out joint sand. We clean pavers with controlled sweeping motions, avoid concentrated streams on joints, and can resand joints after cleaning if needed. DIY cleaning with too much pressure commonly causes joint erosion."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I clean my Florida patio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Florida patios should be cleaned 1-2 times per year due to rapid algae and mold growth. Shaded patios or those near water bodies may need quarterly cleaning. Spring cleaning (after oak pollen season) and fall cleaning maintain appearance and prevent slippery algae buildup. Regular cleaning extends patio life by preventing organic staining."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my patio get green so quickly in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Florida's combination of high humidity (75%+), warm temperatures year-round, and afternoon rain showers creates perfect algae growing conditions. Shaded patios stay damp longer, accelerating growth. The green you see is typically algae and moss that thrive in Florida's subtropical climate. Pressure washing with algaecide treatment provides longer-lasting results."
      }
    },
    {
      "@type": "Question",
      "name": "Should I seal my patio after cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sealing is highly recommended for pavers, natural stone, and concrete patios in Florida. A quality sealer protects against UV fading, prevents organic staining, inhibits algae growth, and makes future cleaning easier. Wait 48-72 hours after cleaning for the surface to fully dry before applying sealer. Resealing every 2-3 years maintains protection."
      }
    },
    {
      "@type": "Question",
      "name": "Can you remove rust stains from my concrete patio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, rust stains require specialized treatment. Pressure washing alone won't remove rust—you need an acid-based rust remover or oxalic acid treatment. Common rust sources include metal patio furniture, flower pots, and lawn fertilizer containing iron. We identify the rust source and recommend solutions to prevent recurrence after removal."
      }
    }
  ]
};

export const metadata = {
  title: 'Patio Cleaning Central Florida | Concrete, Pavers, Stone | KJS Supreme',
  description: 'Professional patio cleaning in Deltona, Orlando, Sanford. Clean concrete, brick, paver, and stone patios. Remove algae, mold, stains. Restore outdoor living spaces. Free quotes: (213) 841-6924.',
  keywords: 'patio cleaning Central Florida, concrete patio cleaning, paver patio cleaning, brick patio cleaning, stone patio Deltona, algae removal Orlando, outdoor cleaning',
  openGraph: {
    title: 'Professional Patio Cleaning Services | KJS Supreme Pressure Washing',
    description: 'Restore your outdoor living space. Expert patio cleaning for all surface types in Central Florida.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://kjssupremepressurewashing.com/services/patio-cleaning',
  },
};

export default function PatioCleaningPage() {
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
        <section className="bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center space-x-2 text-green-200 text-sm">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li>/</li>
                  <li><Link href="/services" className="hover:text-white">Services</Link></li>
                  <li>/</li>
                  <li className="text-white">Patio Cleaning</li>
                </ol>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional Patio Cleaning in Central Florida
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
                Transform your outdoor living space with professional patio cleaning. We remove algae,
                mold, and stains from all patio surfaces—concrete, pavers, brick, and stone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-white text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-100 transition-colors text-center">
                  Get Free Quote
                </Link>
                <a href="tel:+12138416924" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors text-center">
                  (213) 841-6924
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Patio Materials Section */}
        <section aria-labelledby="materials-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="materials-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Patio Surfaces We Clean
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Different patio materials require specific cleaning techniques and pressure levels.
                We customize our approach for safe, effective cleaning.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Concrete & Brick */}
              <article className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Concrete & Brick Patios</h3>

                <dl className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <dt className="font-semibold text-gray-900">Poured Concrete</dt>
                    <dd className="text-gray-600">
                      The most durable patio surface, concrete handles 3,000-4,000 PSI. We remove
                      algae, oil stains, and rust. Optional sealing after cleaning protects against
                      Florida's UV rays and prevents future staining.
                    </dd>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <dt className="font-semibold text-gray-900">Stamped Concrete</dt>
                    <dd className="text-gray-600">
                      Textured concrete requires careful cleaning at 2,000-3,000 PSI to avoid damaging
                      the pattern. We clean crevices where algae accumulates without eroding the decorative
                      surface. Post-cleaning sealing enhances color.
                    </dd>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <dt className="font-semibold text-gray-900">Brick Patios</dt>
                    <dd className="text-gray-600">
                      Clay brick is softer than concrete, requiring 1,500-2,500 PSI. We clean the brick
                      surface and mortar joints without erosion. Polymeric sand replacement available
                      after cleaning to lock joints and resist weed growth.
                    </dd>
                  </div>
                </dl>
              </article>

              {/* Pavers & Stone */}
              <article className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pavers & Natural Stone</h3>

                <dl className="space-y-4">
                  <div className="border-l-4 border-amber-500 pl-4">
                    <dt className="font-semibold text-gray-900">Concrete Pavers</dt>
                    <dd className="text-gray-600">
                      Interlocking pavers clean at 1,500-2,500 PSI with joint-safe techniques. We avoid
                      washing out sand between pavers. Post-cleaning, we can resand with polymeric sand
                      and seal to lock in color and resist staining.
                    </dd>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-4">
                    <dt className="font-semibold text-gray-900">Natural Stone (Flagstone, Slate)</dt>
                    <dd className="text-gray-600">
                      Natural stone requires gentle 1,200-1,800 PSI. Each stone type has unique
                      porosity and hardness. We use stone-safe cleaners and appropriate pressure to
                      remove organic growth without pitting or etching the surface.
                    </dd>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-4">
                    <dt className="font-semibold text-gray-900">Travertine</dt>
                    <dd className="text-gray-600">
                      This porous limestone needs the gentlest approach at 800-1,200 PSI. High pressure
                      damages travertine's natural holes and texture. We use <Link href="/services/soft-washing" className="text-blue-600 hover:underline">soft washing</Link> with
                      pH-neutral cleaners for safe results.
                    </dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>
        </section>

        {/* Florida Patio Challenges */}
        <section aria-labelledby="challenges-heading" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="max-w-3xl mx-auto text-center mb-12">
              <h2 id="challenges-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Florida Patios Need Frequent Cleaning
              </h2>
              <p className="text-lg text-gray-600">
                Central Florida's climate creates ideal conditions for rapid patio deterioration.
                Understanding these challenges helps you maintain your outdoor investment.
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <article className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Algae & Mold Growth</h3>
                <p className="text-gray-600">
                  With 75%+ humidity and daily afternoon rain, Florida patios stay damp. Shaded areas
                  develop <strong>green algae</strong> within weeks. This isn't just cosmetic—algae
                  creates slippery, dangerous surfaces and stains porous materials permanently if left untreated.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tannin Staining</h3>
                <p className="text-gray-600">
                  Florida's abundant oak trees drop leaves year-round. Wet oak leaves release <strong>tannic
                  acid</strong> that creates brown stains on concrete and pavers. These stains penetrate
                  porous surfaces and become permanent without specialized cleaning treatments.
                </p>
              </article>

              <article className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Efflorescence</h3>
                <p className="text-gray-600">
                  Florida's frequent rain causes <strong>white chalky deposits</strong> (efflorescence)
                  on concrete and pavers. This occurs when water pulls salts from within the material to
                  the surface. While not harmful, it looks unsightly and requires proper cleaning techniques.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Our Cleaning Process */}
        <section aria-labelledby="process-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Professional Patio Cleaning Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A methodical approach ensures thorough cleaning while protecting your patio surface.
              </p>
            </header>

            <ol className="max-w-4xl mx-auto space-y-6">
              <li className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</span>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Surface Assessment</h3>
                  <p className="text-gray-600">
                    We identify your patio material and condition. This determines appropriate pressure,
                    nozzle selection, and cleaning solutions. We note problem areas like deep stains,
                    damaged joints, or loose pavers that need special attention.
                  </p>
                </div>
              </li>

              <li className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</span>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Treatment Application</h3>
                  <p className="text-gray-600">
                    Specialized cleaners are applied to tackle specific issues: algaecide for organic growth,
                    degreasers for oil stains, rust removers for iron deposits. The solution dwells for
                    10-15 minutes, breaking down contaminants for easier removal.
                  </p>
                </div>
              </li>

              <li className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</span>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Surface Rotation Cleaning</h3>
                  <p className="text-gray-600">
                    For large flat surfaces, we use a surface cleaner attachment that provides even pressure
                    distribution and prevents striping patterns. This creates uniform results without the
                    "wand lines" typical of standard pressure washing.
                  </p>
                </div>
              </li>

              <li className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">4</span>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Detail Work & Rinse</h3>
                  <p className="text-gray-600">
                    Edges, corners, and textured areas are hand-cleaned with precision wand work. A thorough
                    rinse removes all cleaning solution residue. We ensure proper water flow away from your
                    home's foundation.
                  </p>
                </div>
              </li>

              <li className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">5</span>
                <div className="bg-gray-50 p-6 rounded-xl flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Post-Clean Inspection & Sealing</h3>
                  <p className="text-gray-600">
                    We inspect the cleaned surface and address any remaining problem spots. For pavers and
                    natural stone, we discuss sealing options. Sealing protects against future staining and
                    makes maintenance easier. Application available 48-72 hours after cleaning once fully dry.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Common Patio Stains */}
        <section aria-labelledby="stains-heading" className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="stains-heading" className="text-3xl md:text-4xl font-bold mb-6">
                Common Patio Stains We Remove
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Florida patios face unique staining challenges. Here's how we handle each type.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <article className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-green-400">Algae & Moss</h3>
                <p className="text-gray-300 mb-3">
                  Green algae makes surfaces slippery and dangerous. We use algaecide treatment followed
                  by pressure washing to kill spores and remove growth. Optional algae inhibitor extends
                  clean appearance.
                </p>
                <p className="text-sm text-gray-400">Treatment: Algaecide + pressure wash</p>
              </article>

              <article className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-green-400">Oil & Grease Stains</h3>
                <p className="text-gray-300 mb-3">
                  Grills, lawn mowers, and vehicles drip oil onto patios. These petroleum-based stains
                  penetrate concrete. We apply degreasers with heat-activated cleaning for deep oil removal.
                </p>
                <p className="text-sm text-gray-400">Treatment: Commercial degreaser + hot water</p>
              </article>

              <article className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-green-400">Rust Stains</h3>
                <p className="text-gray-300 mb-3">
                  Metal furniture, fertilizers with iron, and pool chemicals cause orange-brown rust stains.
                  These require acid-based rust removers—pressure washing alone won't work.
                </p>
                <p className="text-sm text-gray-400">Treatment: Oxalic acid rust remover</p>
              </article>

              <article className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-green-400">Tannin Stains</h3>
                <p className="text-gray-300 mb-3">
                  Oak leaves create brown organic stains. Fresh tannin stains respond to alkaline cleaners.
                  Set-in tannin stains need specialized tannin removers or oxalic acid treatment.
                </p>
                <p className="text-sm text-gray-400">Treatment: Tannin remover or oxalic acid</p>
              </article>

              <article className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-green-400">Efflorescence</h3>
                <p className="text-gray-300 mb-3">
                  White chalky salt deposits appear on concrete and pavers from water migration. We use
                  efflorescence removers (mild acid) to dissolve salts without damaging the surface.
                </p>
                <p className="text-sm text-gray-400">Treatment: Acid-based efflorescence remover</p>
              </article>

              <article className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-green-400">Mildew & Mold</h3>
                <p className="text-gray-300 mb-3">
                  Black mildew grows in shaded, humid areas. Beyond appearance, it causes respiratory issues.
                  We use fungicidal treatments that kill mold spores and prevent rapid return.
                </p>
                <p className="text-sm text-gray-400">Treatment: Fungicide + pressure wash</p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section aria-labelledby="faq-heading" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Patio Cleaning FAQ
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about professional patio cleaning in Central Florida.
              </p>
            </header>

            <div className="max-w-3xl mx-auto space-y-4">
              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  What PSI is safe for cleaning patios?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    PSI requirements vary by surface: concrete patios handle 3,000-4,000 PSI, brick and pavers
                    need 1,500-2,500 PSI, natural stone requires 1,200-1,800 PSI, and travertine needs gentle
                    800-1,200 PSI. Using excessive pressure on softer materials causes pitting, joint erosion,
                    and surface damage. We adjust pressure based on your specific patio material.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  Will pressure washing damage patio pavers?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    When done correctly, no. Professional paver cleaning uses appropriate pressure (1,500-2,500 PSI)
                    and proper techniques to avoid washing out joint sand. We clean pavers with controlled sweeping
                    motions, avoid concentrated streams on joints, and can resand joints after cleaning if needed.
                    DIY cleaning with too much pressure commonly causes joint erosion.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  How often should I clean my Florida patio?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Florida patios should be cleaned 1-2 times per year due to rapid algae and mold growth.
                    Shaded patios or those near water bodies may need quarterly cleaning. Spring cleaning (after
                    oak pollen season) and fall cleaning maintain appearance and prevent slippery algae buildup.
                    Regular cleaning extends patio life by preventing organic staining.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  Why does my patio get green so quickly in Florida?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Florida's combination of high humidity (75%+), warm temperatures year-round, and afternoon
                    rain showers creates perfect algae growing conditions. Shaded patios stay damp longer,
                    accelerating growth. The green you see is typically algae and moss that thrive in Florida's
                    subtropical climate. Pressure washing with algaecide treatment provides longer-lasting results.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  Should I seal my patio after cleaning?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Sealing is highly recommended for pavers, natural stone, and concrete patios in Florida.
                    A quality sealer protects against UV fading, prevents organic staining, inhibits algae growth,
                    and makes future cleaning easier. Wait 48-72 hours after cleaning for the surface to fully dry
                    before applying sealer. Resealing every 2-3 years maintains protection.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-xl shadow-lg group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900">
                  Can you remove rust stains from my concrete patio?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>
                    Yes, rust stains require specialized treatment. Pressure washing alone won't remove rust—you
                    need an acid-based rust remover or oxalic acid treatment. Common rust sources include metal
                    patio furniture, flower pots, and lawn fertilizer containing iron. We identify the rust source
                    and recommend solutions to prevent recurrence after removal.
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
                Patio Cleaning Service Areas
              </h2>
              <p className="text-gray-600">
                Professional patio cleaning throughout Central Florida.
              </p>
            </header>

            <nav aria-label="Service locations">
              <ul className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {locations.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="bg-green-100 text-green-800 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors inline-block"
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
                  <Link href="/services/pool-deck-cleaning" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <span className="text-3xl mb-2 block">🏊</span>
                    <span className="font-semibold text-gray-800">Pool Deck Cleaning</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/paver-cleaning" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <span className="text-3xl mb-2 block">🧱</span>
                    <span className="font-semibold text-gray-800">Paver Cleaning</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/deck-cleaning" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <span className="text-3xl mb-2 block">🏗️</span>
                    <span className="font-semibold text-gray-800">Deck Cleaning</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/concrete-cleaning" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <span className="text-3xl mb-2 block">🏗️</span>
                    <span className="font-semibold text-gray-800">Concrete Cleaning</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Restore Your Patio?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Get a free quote for professional patio cleaning. Transform your outdoor living
              space and remove years of algae, mold, and stains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-100 transition-colors">
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
