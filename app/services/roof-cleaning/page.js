import Link from 'next/link';

export const metadata = {
  title: 'Roof Cleaning Services Central Florida | Soft Wash Algae & Mold Removal | KJS Supreme',
  description: 'Professional roof cleaning in Central Florida using safe soft wash methods. Remove black streaks (Gloeocapsa magma), algae, mold, and lichen from shingles, tile, and metal roofs. Serving Deltona, Orlando, Sanford.',
  keywords: [
    'roof cleaning Central Florida',
    'soft wash roof cleaning',
    'black streaks on roof',
    'Gloeocapsa magma removal',
    'roof algae removal',
    'roof mold removal',
    'shingle cleaning',
    'tile roof cleaning',
    'metal roof cleaning',
    'roof cleaning Deltona',
    'roof cleaning Orlando',
    'roof cleaning Sanford',
    'roof cleaning Lake Mary',
    'roof soft washing near me',
    'professional roof cleaning',
    'roof stain removal',
    'lichen removal roof'
  ],
  openGraph: {
    title: 'Professional Roof Cleaning Services | Central Florida',
    description: 'Safe soft wash roof cleaning that removes black streaks, algae, and mold. Protect your roof investment with proper cleaning methods.',
    images: ['/images/roof-cleaning-deltona-fl-01.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/services/roof-cleaning',
  },
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Roof Cleaning Services",
  "alternateName": ["Roof Soft Washing", "Roof Algae Removal", "Black Streak Removal"],
  "description": "Professional soft wash roof cleaning service that safely removes algae, mold, mildew, lichen, and black streaks from all roof types without damaging shingles or tiles.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "KJS Supreme Pressure Washing",
    "telephone": "+1-213-841-6924",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Deltona",
      "addressRegion": "FL",
      "addressCountry": "US"
    }
  },
  "areaServed": [
    { "@type": "City", "name": "Deltona", "addressRegion": "FL" },
    { "@type": "City", "name": "Orlando", "addressRegion": "FL" },
    { "@type": "City", "name": "Sanford", "addressRegion": "FL" },
    { "@type": "City", "name": "Lake Mary", "addressRegion": "FL" },
    { "@type": "City", "name": "Daytona Beach", "addressRegion": "FL" },
    { "@type": "City", "name": "DeBary", "addressRegion": "FL" },
    { "@type": "City", "name": "Orange City", "addressRegion": "FL" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roof Cleaning Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Asphalt Shingle Roof Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tile Roof Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Metal Roof Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Roof Cleaning" } }
    ]
  }
};

// FAQ Schema - 6 questions matching visible content
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What causes the black streaks on my roof?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Black streaks on roofs are caused by Gloeocapsa magma, a type of cyanobacteria (blue-green algae) that feeds on the limestone filler in asphalt shingles. This organism produces a dark pigmented sheath to protect itself from UV rays, creating the characteristic black streaking pattern. In Florida's humid climate with annual humidity exceeding 70%, it spreads rapidly across roof surfaces through rainwater runoff and wind-borne spore transmission."
      }
    },
    {
      "@type": "Question",
      "name": "Will roof cleaning damage my shingles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not when done correctly using soft washing methods. Our soft wash approach uses low pressure (under 60 PSI, similar to a garden hose) combined with specialized cleaning solutions at pH 11-12. High-pressure washing (3,000+ PSI) CAN damage shingles by stripping protective ceramic granules, exposing the asphalt substrate to UV degradation, which is why professional roof cleaners never use pressure washers on roofs."
      }
    },
    {
      "@type": "Question",
      "name": "How long does roof cleaning last in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional soft wash roof cleaning typically lasts 2-3 years in Central Florida's humid subtropical climate. Results vary based on environmental factors: shade coverage from oak canopy, proximity to water bodies (lakes increase humidity), roof pitch angle affecting water drainage, and north-facing exposure receiving less UV sanitization. Properties with heavy live oak coverage may need cleaning every 18-24 months."
      }
    },
    {
      "@type": "Question",
      "name": "Is roof cleaning safe for my plants and lawn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, when performed by professionals following proper protocols. We thoroughly pre-wet surrounding vegetation to saturation (creating a protective water barrier), use biodegradable sodium hypochlorite solutions that break down into salt and water through photolysis, and conduct post-treatment rinse of all landscaping. Our solutions neutralize within 24-48 hours through natural oxidation when exposed to sunlight and oxygen."
      }
    },
    {
      "@type": "Question",
      "name": "Can you clean tile roofs and metal roofs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we clean all roof types common in Central Florida including asphalt shingles (3-tab and architectural), concrete tile (flat and barrel profiles), clay tile (Spanish and Mediterranean styles), and metal roofing (standing seam and corrugated). Each material requires different solution concentrations (ranging from 1:1 to 1:4 dilution ratios) and dwell times (5-20 minutes), which we adjust based on your specific roof type, porosity level, and contamination severity."
      }
    },
    {
      "@type": "Question",
      "name": "Why is soft washing better than pressure washing for roofs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Soft washing uses low pressure (40-60 PSI) and pH-balanced cleaning solutions to kill organisms at the cellular level by disrupting cell membranes and protein structures, providing results lasting 2-3 years. Pressure washing uses high-pressure water (3,000-4,000 PSI) that strips protective ceramic granules from asphalt shingles (reducing shingle lifespan by 30-50%), cracks concrete tiles through impact force, voids manufacturer warranties, and only removes surface staining without killing root colonies—leading to regrowth within 3-6 months."
      }
    }
  ]
};

export default function RoofCleaningPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-4">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Roof Cleaning Services in Central Florida
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl leading-relaxed">
              Safe <Link href="/services/soft-washing" className="text-blue-300 hover:text-blue-200 underline">soft wash roof cleaning</Link> that eliminates Gloeocapsa magma, algae, mold, and lichen without damaging your shingles, tiles, or metal roofing. Serving Deltona, Orlando, Sanford, Lake Mary, and communities throughout Central Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl text-center"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+12138416924"
                className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl text-center"
              >
                Call (213) 841-6924
              </a>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-16 max-w-6xl">

          {/* Why Florida Roofs Need Cleaning */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Florida Roofs Need Professional Cleaning</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Central Florida's humid subtropical climate (Köppen classification Cfa) creates ideal conditions for biological contamination on roofs. With annual rainfall exceeding 50 inches, relative humidity averaging 73% year-round, and temperatures remaining above 70°F for 8+ months, your roof becomes a hospitable breeding ground for Gloeocapsa magma, moss, lichen, and various mold species that homeowners in arid climates never encounter.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border-l-4 border-red-500 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">The Real Cost of Roof Neglect</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-semibold text-gray-800 mb-1">↑ Energy Bills (15-25% increase)</dt>
                    <dd className="text-gray-700 pl-4">Dark algae colonies reduce solar reflectance index (SRI) from 78 to 35, increasing attic temperatures by 15-20°F and forcing HVAC systems to work 40% harder during peak cooling months.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-800 mb-1">↓ Shingle Lifespan (30-40% reduction)</dt>
                    <dd className="text-gray-700 pl-4">Gloeocapsa magma secretes acidic byproducts (pH 4.5-5.5) that accelerate asphalt oxidation, limestone filler dissolution, and granule detachment—reducing 25-year shingles to 15-year lifespans.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-800 mb-1">⚠️ Warranty Voidance</dt>
                    <dd className="text-gray-700 pl-4">Major manufacturers (GAF, Owens Corning, CertainTeed) require maintenance documentation; visible neglect voids material defect coverage and algae-resistance warranties.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-800 mb-1">💰 Property Value Impact (-$8,000 to -$15,000)</dt>
                    <dd className="text-gray-700 pl-4">Real estate appraisers deduct 2-5% of home value for visible roof contamination; buyers negotiate $10,000+ price reductions or demand replacement before closing.</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-l-4 border-blue-500 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Florida-Specific Challenges</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-semibold text-gray-800 mb-1">🌳 Live Oak Tree Coverage</dt>
                    <dd className="text-gray-700 pl-4">Deltona's mature oak canopy creates 60-80% shade coverage, preventing UV sanitization while depositing tannins, pollen, and organic debris that feed algae colonies.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-800 mb-1">💨 Coastal Salt Exposure</dt>
                    <dd className="text-gray-700 pl-4">Properties within 15 miles of Atlantic coast receive salt spray containing chloride ions that accelerate metal flashing corrosion and retain moisture in porous roofing materials.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-800 mb-1">🌊 Lake Effect Humidity</dt>
                    <dd className="text-gray-700 pl-4">Proximity to Lake Monroe, Spring Lake, and 600+ retention ponds elevates microclimate humidity to 85-90% during summer months, extending dew point duration from 8 to 14 hours daily.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-800 mb-1">🏘️ HOA Requirements</dt>
                    <dd className="text-gray-700 pl-4">Deltona Lakes, Arbor Ridge, and Santiago Trails communities enforce appearance standards with 30-60 day violation cure periods and $100-250/day non-compliance fines.</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          {/* The Science Behind Black Streaks */}
          <section className="mb-16 bg-gradient-to-br from-gray-50 to-slate-100 p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The Science Behind Black Roof Streaks</h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Those dark streaks running down your roof aren't dirt, pollution, or normal wear—they're a living organism called <strong className="text-gray-900">Gloeocapsa magma</strong>, a cyanobacterial species (formerly classified as blue-green algae) that has colonized over 60% of North American roofs since the 1990s introduction of fiberglass-based asphalt shingles containing limestone filler as cost-effective mineral ballast.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Gloeocapsa Magma Lifecycle & Damage Mechanisms</h3>
              <dl className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <dt className="text-xl font-semibold text-gray-900 mb-2">Stage 1: Spore Colonization (Weeks 1-4)</dt>
                  <dd className="text-gray-700 leading-relaxed">
                    Airborne cyanobacterial spores (2-5 microns diameter) land on damp shingle surfaces, particularly north-facing sections receiving minimal UV exposure. Spores germinate when surface moisture exceeds 6 hours daily at temperatures above 50°F—conditions Florida meets 300+ days annually. Initial colonies appear as faint gray-green discoloration in shingle valleys and edges.
                  </dd>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <dt className="text-xl font-semibold text-gray-900 mb-2">Stage 2: Biofilm Formation (Months 2-6)</dt>
                  <dd className="text-gray-700 leading-relaxed">
                    Established colonies produce extracellular polymeric substances (EPS)—a sticky biofilm matrix composed of polysaccharides, proteins, and nucleic acids. This biofilm traps moisture against shingle surface for 18-24 hours post-rainfall (vs. 2-4 hours on clean surfaces), creating perpetual hydration that accelerates limestone filler dissolution through carbonic acid formation (H₂O + CO₂ → H₂CO₃).
                  </dd>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <dt className="text-xl font-semibold text-gray-900 mb-2">Stage 3: Pigmented Shield Development (Months 6-12)</dt>
                  <dd className="text-gray-700 leading-relaxed">
                    To protect from UV radiation (Florida receives 4,500-5,000 annual sunshine hours), Gloeocapsa magma synthesizes dark pigmented sheaths containing scytonemin and gloeocapsin—UV-absorbing compounds that create the characteristic black streaking. This pigmentation reduces shingle albedo (reflectivity) from 0.25-0.30 to 0.05-0.10, causing 15-20°F attic temperature increases and corresponding 25-40% cooling cost spikes.
                  </dd>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <dt className="text-xl font-semibold text-gray-900 mb-2">Stage 4: Material Degradation (Years 2-5)</dt>
                  <dd className="text-gray-700 leading-relaxed">
                    Mature colonies penetrate 2-3mm into shingle surface, consuming limestone filler (CaCO₃) through microbial respiration that produces organic acids. This creates surface pitting, granule adhesion failure, and asphalt substrate exposure. Simultaneously, perpetual moisture retention accelerates oxidative aging—converting flexible petroleum polymers into brittle hydrocarbons prone to thermal cracking and wind uplift damage.
                  </dd>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <dt className="text-xl font-semibold text-gray-900 mb-2">Stage 5: Secondary Contamination (Years 3-8)</dt>
                  <dd className="text-gray-700 leading-relaxed">
                    The moisture-rich environment created by algae biofilm attracts secondary colonizers: moss species (Bryophyta division) that root into shingle layers, lichen symbiotes (fungal-algal partnerships) that secrete roof-etching acids, and black mold species (Stachybotrys, Aspergillus) that penetrate through roof deck into attic insulation—creating indoor air quality hazards and structural wood decay from chronic moisture exposure.
                  </dd>
                </div>
              </dl>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              This is why <Link href="/services/soft-washing" className="text-blue-600 hover:text-blue-700 font-semibold underline">soft washing</Link> is the only appropriate cleaning method for roofs—it uses pH-adjusted sodium hypochlorite solutions (11-12 pH at 1-3% concentration) to kill cyanobacteria at the cellular level through protein denaturation and cell membrane oxidation, providing 24-36 month results versus 3-6 month regrowth typical after pressure washing that only removes surface pigmentation without eliminating root colonies.
            </p>
          </section>

          {/* Soft Washing vs Pressure Washing */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why We Use Soft Washing—Not Pressure Washing</h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              High-pressure washing (3,000-4,000 PSI) is never appropriate for roof cleaning. The force that effectively cleans <Link href="/services/driveway-cleaning" className="text-blue-600 hover:underline">concrete driveways</Link> (compressive strength 3,000-5,000 PSI) will catastrophically damage asphalt shingles (tensile strength 300-400 PSI). Here's why our soft wash method represents the professional standard endorsed by ARMA (Asphalt Roofing Manufacturers Association) and all major shingle manufacturers:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl border-2 border-red-300 shadow-lg">
                <div className="text-4xl mb-4">❌</div>
                <h3 className="text-2xl font-bold mb-4 text-red-900">Pressure Washing Damage</h3>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    <span><strong>Granule Stripping:</strong> 3,000+ PSI dislodges ceramic granules bonded at 80-120 PSI, exposing asphalt substrate to UV degradation (reduces 25-year shingles to 10-12 years)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    <span><strong>Tile Fracturing:</strong> Impact force exceeds tensile strength of concrete tiles (450 PSI) and clay tiles (600 PSI), causing hairline cracks that propagate during freeze-thaw cycles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    <span><strong>Water Intrusion:</strong> High-pressure spray forces water under shingle tabs, through nail holes, and behind flashing—causing deck rot, insulation saturation, and interior ceiling damage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    <span><strong>Warranty Voidance:</strong> GAF, CertainTeed, Owens Corning explicitly prohibit pressure washing; violation immediately voids material defect coverage and algae-resistance warranties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    <span><strong>Surface-Only Results:</strong> Removes pigmented biofilm without killing root colonies; regrowth visible within 3-6 months as surviving spores recolonize cleaned areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    <span><strong>Flashing Damage:</strong> Concentrated spray bends aluminum step flashing, separates counterflashing from masonry, and ruptures rubber pipe boots—creating leak pathways</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl border-2 border-green-300 shadow-lg">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-4 text-green-900">Soft Wash Benefits</h3>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span><strong>Safe Pressure (40-60 PSI):</strong> Lower than garden hose pressure (70-80 PSI); relies on chemical action rather than mechanical force to eliminate contamination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span><strong>Universal Material Compatibility:</strong> Safe for asphalt shingles, concrete tile, clay tile, slate, wood shake, and metal roofing—each treated with material-specific solution concentrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span><strong>Root-Level Kill:</strong> Sodium hypochlorite (1-3% concentration, pH 11-12) oxidizes cell membranes and denatures proteins, eliminating 99.9% of Gloeocapsa magma, mold, mildew, and lichen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span><strong>Long-Lasting Results:</strong> Complete colony elimination provides 24-36 month results in Central Florida climate vs. 3-6 month regrowth after pressure washing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span><strong>Warranty Compliance:</strong> Approved by ARMA, GAF, CertainTeed, Owens Corning as safe maintenance method that preserves material defect coverage and algae warranties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span><strong>Eco-Friendly Chemistry:</strong> Biodegradable solutions break down through photolysis (UV exposure) and oxidation within 24-48 hours into salt (NaCl) and water (H₂O)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong className="text-gray-900">Industry Standard:</strong> The Asphalt Roofing Manufacturers Association (ARMA) recommends soft washing with sodium hypochlorite solutions as the only safe cleaning method for asphalt shingles. Our process follows ARMA Technical Bulletin 2019-1 specifications for concentration, dwell time, and application methodology to ensure both effectiveness and material preservation.
              </p>
            </div>
          </section>

          {/* Roof Material Types */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Roof Types We Clean Throughout Central Florida</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We adjust our soft wash approach based on your specific roofing material's porosity, composition, and contamination severity. Each type requires different solution concentrations (ranging from 1:1 to 1:4 dilution ratios) and dwell times (5-20 minutes) for optimal results without material compromise:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border-t-4 border-blue-600">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Asphalt Shingles</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The predominant roofing material in Central Florida residential construction (installed on 75% of homes). Modern fiberglass-reinforced asphalt shingles contain 10-40% limestone filler (CaCO₃) as mineral ballast—the primary food source for Gloeocapsa magma colonization.
                </p>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between border-b pb-1">
                    <dt className="font-semibold text-gray-800">Treatment Concentration:</dt>
                    <dd className="text-gray-700">1:3 dilution (SH 1.5-2%)</dd>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <dt className="font-semibold text-gray-800">Dwell Time:</dt>
                    <dd className="text-gray-700">10-15 minutes</dd>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <dt className="font-semibold text-gray-800">Application PSI:</dt>
                    <dd className="text-gray-700">40-60 PSI (downstream)</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-semibold text-gray-800">Types Treated:</dt>
                    <dd className="text-gray-700">3-tab, architectural, designer</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border-t-4 border-orange-600">
                <div className="text-4xl mb-4">🧱</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Concrete Tile</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Popular in Florida for hurricane resistance (wind rating to 150 mph) and thermal mass properties. High porosity (water absorption 6-13%) allows deep algae penetration into surface capillaries, requiring stronger treatment concentrations for complete eradication.
                </p>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between border-b pb-1">
                    <dt className="font-semibold text-gray-800">Treatment Concentration:</dt>
                    <dd className="text-gray-700">1:2 dilution (SH 2.5-3%)</dd>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <dt className="font-semibold text-gray-800">Dwell Time:</dt>
                    <dd className="text-gray-700">15-20 minutes</dd>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <dt className="font-semibold text-gray-800">Application PSI:</dt>
                    <dd className="text-gray-700">50-70 PSI (surface penetration)</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-semibold text-gray-800">Profiles Cleaned:</dt>
                    <dd className="text-gray-700">Flat, barrel, S-tile, high-profile</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border-t-4 border-red-600">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Clay Tile</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Premium roofing material offering 50-100 year lifespan and Mediterranean aesthetic. Low porosity (water absorption 3-6%) resists deep contamination but glazed surfaces require pH-controlled solutions to prevent finish etching and patina disruption.
                </p>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between border-b pb-1">
                    <dt className="font-semibold text-gray-800">Treatment Concentration:</dt>
                    <dd className="text-gray-700">1:4 dilution (SH 1.0-1.5%)</dd>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <dt className="font-semibold text-gray-800">Dwell Time:</dt>
                    <dd className="text-gray-700">8-12 minutes</dd>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <dt className="font-semibold text-gray-800">Application PSI:</dt>
                    <dd className="text-gray-700">40-50 PSI (gentle rinse)</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-semibold text-gray-800">Styles Serviced:</dt>
                    <dd className="text-gray-700">Spanish, mission, Mediterranean</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border-t-4 border-gray-600">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Metal Roofing</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Increasingly popular for energy efficiency (reflects 65-70% of solar radiation) and longevity (40-70 years). While metal resists biological growth better than porous materials, oxidation, pollen buildup, mildew, and lichen still accumulate—particularly in fastener valleys and panel seams.
                </p>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between border-b pb-1">
                    <dt className="font-semibold text-gray-800">Treatment Concentration:</dt>
                    <dd className="text-gray-700">1:5 dilution (SH 0.8-1.2%)</dd>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <dt className="font-semibold text-gray-800">Dwell Time:</dt>
                    <dd className="text-gray-700">5-10 minutes</dd>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <dt className="font-semibold text-gray-800">Application PSI:</dt>
                    <dd className="text-gray-700">60-80 PSI (panel cleaning)</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-semibold text-gray-800">Systems Treated:</dt>
                    <dd className="text-gray-700">Standing seam, corrugated, R-panel</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          {/* Our 5-Step Process */}
          <section className="mb-16 bg-gradient-to-br from-blue-900 to-slate-800 text-white p-10 rounded-xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Professional Soft Wash Process</h2>
            <p className="text-xl mb-10 text-gray-200 leading-relaxed">
              We follow a systematic 5-step methodology that prioritizes your roof's structural integrity while delivering thorough, long-lasting contamination elimination backed by 24-36 month results guarantee:
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Property Assessment & Roof Inspection</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Our certified technicians conduct comprehensive roof evaluation documenting: material type and age, pitch angle (affecting water drainage), current contamination severity (light/moderate/heavy), biological species present (algae/moss/lichen), secondary damage indicators (granule loss, thermal cracking, flashing degradation), and landscaping proximity requiring protection. This assessment determines appropriate solution concentration (1:1 to 1:5 dilution), dwell time (5-20 minutes), and specialized equipment requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Landscape Protection & Pre-Wetting</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Before any chemical application, we thoroughly pre-wet all surrounding vegetation to saturation point—creating a protective water barrier that prevents solution contact with plant tissues. Sensitive ornamentals (azaleas, ferns, impatiens) receive individual plastic sheeting protection. We also cover outdoor furniture, protect HVAC condensers, and ensure proper drainage away from fish ponds and swimming pools. Our biodegradable sodium hypochlorite solutions naturally break down through photolysis, but these precautions guarantee zero plant damage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Soft Wash Solution Application</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Using specialized low-pressure soft wash systems (40-80 PSI depending on material), we apply pH-balanced cleaning solution from bottom-to-top in overlapping patterns ensuring 100% coverage. Solution contains: sodium hypochlorite (1-3% concentration based on contamination severity), surfactant blend for enhanced surface wetting and biofilm penetration, and water conditioners to prevent hard water spotting. Application rate averages 1 gallon per 100 square feet, with heavier concentrations on north-facing sections showing severe algae colonization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">4</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Dwell Time & Biological Eradication</h3>
                  <p className="text-gray-200 leading-relaxed">
                    The cleaning solution remains on surface for material-specific dwell times: asphalt shingles (10-15 min), concrete tile (15-20 min), clay tile (8-12 min), metal roofing (5-10 min). During this period, sodium hypochlorite oxidizes Gloeocapsa magma cell membranes through chlorine ion penetration, denatures proteins via pH disruption (pH 11-12 vs. cellular pH 6.5-7.5), and destroys mold/mildew/lichen through oxidative stress—achieving 99.9% kill rate at cellular level rather than surface-only cosmetic cleaning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">5</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Low-Pressure Rinse & Quality Inspection</h3>
                  <p className="text-gray-200 leading-relaxed">
                    We complete treatment with thorough low-pressure rinse (40-60 PSI) to remove dead biomass, neutralize remaining solution, and reveal clean roof surface. All landscaping receives secondary rinse ensuring zero chemical residue on plants or soil. Final inspection verifies: complete coverage with no missed sections, elimination of visible contamination, proper water drainage through gutters, and client satisfaction. We document before/after photos, provide maintenance timeline recommendations, and offer optional 12-month follow-up inspections to monitor results longevity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Results Timeline */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What to Expect After Professional Soft Wash Treatment</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Following professional soft wash treatment, you'll notice immediate improvement in roof appearance as killed organisms begin breaking down. Unlike pressure washing that only removes surface pigmentation, our cellular-level eradication provides progressively better results over the following weeks as dead biofilm naturally erodes through rainfall and UV exposure:
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Results Timeline & Longevity</h3>
              <dl className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <dt className="text-xl font-semibold text-gray-900 mb-2">Immediately Post-Treatment (Day 0-1)</dt>
                  <dd className="text-gray-700 leading-relaxed">
                    Visible staining begins lightening as sodium hypochlorite oxidizes pigmented biofilm. Heavy algae colonies show 40-60% improvement; light contamination may appear 80-90% clean. Dead organisms remain adhered to surface until mechanical removal via rainfall occurs over subsequent days.
                  </dd>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <dt className="text-xl font-semibold text-gray-900 mb-2">Short-Term Results (Days 2-7)</dt>
                  <dd className="text-gray-700 leading-relaxed">
                    First rainfall mechanically removes dead biofilm, revealing 90-95% contamination elimination. Black streaks disappear as killed Gloeocapsa magma washes from shingle surface. Green algae patches fade to brown then wash away. Roof shows dramatic appearance transformation with uniform color restoration.
                  </dd>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <dt className="text-xl font-semibold text-gray-900 mb-2">Complete Results (Weeks 2-4)</dt>
                  <dd className="text-gray-700 leading-relaxed">
                    Heavy lichen (symbiotic fungal-algal organisms with root-like rhizines) naturally detaches through repeated rainfall cycles. Stubborn moss remnants in shingle valleys complete decomposition. Roof achieves 98-100% contamination removal with original color fully restored. Minor variations in older shingles due to previous UV degradation may remain.
                  </dd>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <dt className="text-xl font-semibold text-gray-900 mb-2">Long-Term Protection (Months 6-36)</dt>
                  <dd className="text-gray-700 leading-relaxed">
                    Results typically last 24-36 months in Central Florida's humid climate. Longevity varies based on: oak tree coverage (shade prevents UV sanitization), proximity to lakes (increased microclimate humidity), roof pitch angle (low slopes retain moisture longer), and north-facing exposure (receives less direct sunlight). Properties with heavy tree coverage may require cleaning every 18-24 months; full-sun roofs often achieve 36-48 month results.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed">
                <strong className="text-gray-900">Important Note:</strong> While most contamination disappears within 24-48 hours, we recommend allowing 2-3 weeks for complete lichen removal and final results stabilization. Heavy lichen infestations may require secondary treatment or manual removal for 100% eradication. We offer complimentary 30-day follow-up inspections to address any remaining contamination at no additional cost.
              </p>
            </div>
          </section>

          {/* Residential & Commercial */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Residential & Commercial Roof Cleaning Services</h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">🏠 Residential Properties</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We clean all common residential roof types throughout Central Florida residential communities. Whether you own a single-family home in Deltona Lakes, a townhouse in Arbor Ridge, or a lakefront property in Sanford's Cameron Park, we adjust our soft wash methodology to match your specific roofing material, contamination severity, and surrounding landscape.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Combined with <Link href="/services/house-washing" className="text-blue-600 hover:text-blue-700 font-semibold underline">house washing</Link> (removing algae, mold, and pollen from siding, soffits, and fascia) and <Link href="/services/driveway-cleaning" className="text-blue-600 hover:text-blue-700 font-semibold underline">driveway cleaning</Link> (eliminating oil stains, tire marks, and concrete discoloration), a clean roof completes your home's comprehensive exterior transformation.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Single-family homes (1-story to 3-story)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Townhouses & condominiums (HOA coordination)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Vacation rentals & investment properties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Pre-sale cleaning (maximizes curb appeal & appraisal value)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">🏢 Commercial Properties</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  For business owners, property managers, and HOA boards, a clean roof projects maintenance awareness, property pride, and tenant consideration. We service retail centers, office buildings, HOA clubhouses, churches, multi-family residential complexes, and industrial facilities throughout Volusia, Seminole, and Orange counties.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We offer flexible scheduling (evening/weekend appointments) to minimize business disruption, provide ongoing maintenance contracts for properties requiring quarterly or bi-annual service, and coordinate with property management teams for multi-building portfolio cleaning.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span>Retail shopping centers & strip malls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span>Office buildings & medical facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span>HOA clubhouses & amenity centers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span>Apartment complexes (20+ unit buildings)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">✓</span>
                    <span>Churches, schools & municipal buildings</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-blue-400 transition-all shadow-md">
                <summary className="text-xl font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  What causes the black streaks on my roof?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform text-2xl">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed pl-2">
                  Black streaks on roofs are caused by <strong>Gloeocapsa magma</strong>, a type of cyanobacteria (blue-green algae) that feeds on the limestone filler in asphalt shingles. This organism produces a dark pigmented sheath to protect itself from UV rays, creating the characteristic black streaking pattern. In Florida's humid climate with annual humidity exceeding 70%, it spreads rapidly across roof surfaces through rainwater runoff and wind-borne spore transmission.
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-blue-400 transition-all shadow-md">
                <summary className="text-xl font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Will roof cleaning damage my shingles?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform text-2xl">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed pl-2">
                  Not when done correctly using <Link href="/services/soft-washing" className="text-blue-600 hover:text-blue-700 font-semibold underline">soft washing</Link> methods. Our soft wash approach uses low pressure (under 60 PSI, similar to a garden hose) combined with specialized cleaning solutions at pH 11-12. High-pressure washing (3,000+ PSI) CAN damage shingles by stripping protective ceramic granules, exposing the asphalt substrate to UV degradation, which is why professional roof cleaners never use pressure washers on roofs.
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-blue-400 transition-all shadow-md">
                <summary className="text-xl font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  How long does roof cleaning last in Florida?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform text-2xl">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed pl-2">
                  Professional soft wash roof cleaning typically lasts 2-3 years in Central Florida's humid subtropical climate. Results vary based on environmental factors: shade coverage from oak canopy, proximity to water bodies (lakes increase humidity), roof pitch angle affecting water drainage, and north-facing exposure receiving less UV sanitization. Properties with heavy live oak coverage may need cleaning every 18-24 months.
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-blue-400 transition-all shadow-md">
                <summary className="text-xl font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Is roof cleaning safe for my plants and lawn?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform text-2xl">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed pl-2">
                  Yes, when performed by professionals following proper protocols. We thoroughly pre-wet surrounding vegetation to saturation (creating a protective water barrier), use biodegradable sodium hypochlorite solutions that break down into salt and water through photolysis, and conduct post-treatment rinse of all landscaping. Our solutions neutralize within 24-48 hours through natural oxidation when exposed to sunlight and oxygen.
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-blue-400 transition-all shadow-md">
                <summary className="text-xl font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Can you clean tile roofs and metal roofs?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform text-2xl">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed pl-2">
                  Yes, we clean all roof types common in Central Florida including asphalt shingles (3-tab and architectural), concrete tile (flat and barrel profiles), clay tile (Spanish and Mediterranean styles), and metal roofing (standing seam and corrugated). Each material requires different solution concentrations (ranging from 1:1 to 1:4 dilution ratios) and dwell times (5-20 minutes), which we adjust based on your specific roof type, porosity level, and contamination severity.
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-blue-400 transition-all shadow-md">
                <summary className="text-xl font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  Why is soft washing better than pressure washing for roofs?
                  <span className="text-blue-600 group-open:rotate-180 transition-transform text-2xl">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed pl-2">
                  <Link href="/services/soft-washing" className="text-blue-600 hover:text-blue-700 font-semibold underline">Soft washing</Link> uses low pressure (40-60 PSI) and pH-balanced cleaning solutions to kill organisms at the cellular level by disrupting cell membranes and protein structures, providing results lasting 2-3 years. Pressure washing uses high-pressure water (3,000-4,000 PSI) that strips protective ceramic granules from asphalt shingles (reducing shingle lifespan by 30-50%), cracks concrete tiles through impact force, voids manufacturer warranties, and only removes surface staining without killing root colonies—leading to regrowth within 3-6 months.
                </p>
              </details>
            </div>
          </section>

          {/* Related Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Complete Your Home's Exterior Transformation</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Many homeowners combine roof cleaning with complementary services for a complete exterior transformation. Package discounts available for multi-service appointments:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/house-washing" className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-blue-200 hover:border-blue-400 text-center group">
                <div className="text-4xl mb-3">🏠</div>
                <span className="font-bold text-xl text-gray-900 block mb-2 group-hover:text-blue-600">House Washing</span>
                <span className="text-gray-700">Remove algae, mold & pollen from siding</span>
              </Link>
              <Link href="/services/driveway-cleaning" className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-gray-200 hover:border-gray-400 text-center group">
                <div className="text-4xl mb-3">🚗</div>
                <span className="font-bold text-xl text-gray-900 block mb-2 group-hover:text-gray-600">Driveway Cleaning</span>
                <span className="text-gray-700">Eliminate oil stains & restore concrete</span>
              </Link>
              <Link href="/services/soft-washing" className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl hover:shadow-lg transition-all border-2 border-green-200 hover:border-green-400 text-center group">
                <div className="text-4xl mb-3">💧</div>
                <span className="font-bold text-xl text-gray-900 block mb-2 group-hover:text-green-600">Soft Washing</span>
                <span className="text-gray-700">Learn about our gentle cleaning method</span>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-10 rounded-xl text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Restore Your Roof?</h2>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              If your roof shows signs of black streaks, algae, mold, or lichen contamination, contact us for a free assessment and detailed quote. We serve Deltona, Orlando, Daytona Beach, Sanford, Lake Mary, DeBary, Orange City, and communities throughout Volusia, Seminole, and Orange counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl text-lg"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+12138416924"
                className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-10 py-5 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl text-lg"
              >
                Call (213) 841-6924
              </a>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}
