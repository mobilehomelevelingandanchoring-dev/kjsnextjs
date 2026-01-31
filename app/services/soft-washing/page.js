import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Soft Washing Services Central Florida | Low-Pressure Exterior Cleaning | KJS Supreme',
  description: 'Professional soft washing in Central Florida. Safe, low-pressure cleaning for roofs, stucco, vinyl siding, and delicate surfaces. Kills mold, mildew, and algae at the root. Serving Deltona, Orlando, Sanford.',
  keywords: [
    'soft washing Central Florida',
    'soft wash vs pressure wash',
    'low pressure washing',
    'soft washing near me',
    'roof soft washing',
    'house soft washing',
    'stucco cleaning',
    'vinyl siding cleaning',
    'soft washing Deltona',
    'soft washing Orlando',
    'soft washing Sanford',
    'mold removal exterior',
    'algae removal house',
    'gentle pressure washing',
    'exterior cleaning services',
    'soft wash chemicals',
    'soft wash roof cleaning'
  ],
  openGraph: {
    title: 'Professional Soft Washing Services | Central Florida',
    description: 'Low-pressure exterior cleaning that kills mold, mildew, and algae at the root. Safe for roofs, stucco, vinyl, and painted surfaces.',
    images: ['/images/soft-washing-deltona-fl-01.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/services/soft-washing',
  },
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Soft Washing Services",
  "alternateName": ["Low-Pressure Washing", "Chemical Washing", "Gentle Exterior Cleaning"],
  "description": "Professional soft washing service using low pressure and specialized biodegradable solutions to safely clean delicate exterior surfaces including roofs, stucco, vinyl siding, and painted surfaces.",
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
    { "@type": "City", "name": "Winter Park", "addressRegion": "FL" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Soft Washing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Soft Washing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "House Soft Washing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stucco Soft Washing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Screen Enclosure Cleaning" } }
    ]
  }
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between soft washing and pressure washing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Soft washing uses low pressure (under 500 PSI, similar to a garden hose) combined with specialized cleaning solutions to kill mold, mildew, and algae at the cellular level. Pressure washing uses high-pressure water (1,500-4,000 PSI) to physically blast contaminants off surfaces. Soft washing is safer for delicate surfaces and provides longer-lasting results because it kills organisms rather than just removing them."
      }
    },
    {
      "@type": "Question",
      "name": "What surfaces require soft washing instead of pressure washing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Soft washing is required for roofs (shingles, tile, metal), stucco, vinyl siding, painted surfaces, wood siding, screen enclosures, outdoor furniture, and any surface that could be damaged by high pressure. Pressure washing is appropriate for hard surfaces like concrete driveways, brick, stone, and pavers."
      }
    },
    {
      "@type": "Question",
      "name": "Is soft washing safe for my plants and landscaping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, when performed by professionals. We thoroughly pre-wet all vegetation before application and use biodegradable cleaning solutions that break down quickly in the environment. We also rinse all landscaping after the service to remove any residue."
      }
    },
    {
      "@type": "Question",
      "name": "How long do soft washing results last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Soft washing results typically last 2-4 times longer than pressure washing because the cleaning solution kills organisms at the root level. For roofs in Central Florida, results typically last 2-3 years. For house exteriors, results often last 1-2 years depending on shade, humidity, and environmental factors."
      }
    },
    {
      "@type": "Question",
      "name": "What chemicals are used in soft washing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional soft wash solutions typically contain sodium hypochlorite (similar to pool chlorine), surfactants that help the solution cling to surfaces and penetrate organic growth, and sometimes algaecides for extended protection. All solutions we use are biodegradable and break down into harmless compounds within hours."
      }
    },
    {
      "@type": "Question",
      "name": "Can soft washing remove black streaks from my roof?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, soft washing is the ONLY safe and effective method for removing black streaks from roofs. These streaks are caused by Gloeocapsa magma, a cyanobacteria that soft wash solutions kill completely. Pressure washing would damage shingles and void most manufacturer warranties."
      }
    },
    {
      "@type": "Question",
      "name": "Why is soft washing better for Florida homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Florida's humid subtropical climate creates ideal conditions for algae, mold, and mildew growth. Soft washing kills these organisms at the cellular level, providing longer-lasting protection in our high-humidity environment. Pressure washing only removes surface growth, which returns quickly in Florida's climate."
      }
    }
  ]
};

export default function SoftWashingPage() {
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

      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Soft Washing Services in Central Florida
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Professional low-pressure exterior cleaning that safely removes mold, mildew, algae, and organic stains
            from delicate surfaces. Our soft wash method kills contaminants at the root for results that last
            2-4 times longer than traditional pressure washing.
          </p>
        </header>

        {/* Hero Image */}
        <figure className="mb-12">
          <Image
            src="/images/soft-washing-deltona-fl-01.jpg"
            alt="Professional soft washing service cleaning stucco home exterior in Deltona, Florida"
            width={1200}
            height={675}
            className="rounded-lg shadow-lg w-full"
            priority
          />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            Soft washing safely cleans stucco, vinyl, and painted surfaces
          </figcaption>
        </figure>

        {/* What is Soft Washing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">What Is Soft Washing?</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Soft washing is a specialized exterior cleaning method that combines low-pressure water application
            (typically under 500 PSI—about the same as a garden hose) with biodegradable cleaning solutions
            designed to kill mold, mildew, algae, bacteria, and other organic growth at the cellular level.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Unlike pressure washing, which relies on physical force to blast contaminants off surfaces, soft
            washing uses chemistry to eliminate growth. This fundamental difference makes soft washing both
            safer for delicate surfaces and more effective at preventing regrowth.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">The Key Difference</h3>
            <p className="text-gray-700">
              <strong>Pressure washing removes</strong> organic matter from surfaces through force.
              <strong> Soft washing kills</strong> organic matter at the root level through chemistry.
              This is why soft wash results last 2-4 times longer—there's nothing left alive to regrow.
            </p>
          </div>
        </section>

        {/* Soft Washing vs Pressure Washing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Soft Washing vs. Pressure Washing: When to Use Each</h2>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Both methods have their place in professional exterior cleaning. Understanding when to use each
            protects your property and ensures the best results.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Soft Washing (Low Pressure)</h3>
              <p className="text-sm text-gray-600 mb-4">Under 500 PSI | Solution does the work</p>
              <h4 className="font-semibold text-gray-800 mb-2">Use For:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><Link href="/services/roof-cleaning" className="text-blue-600 hover:underline">Roof cleaning</Link> (shingles, tile, metal)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><Link href="/services/house-washing" className="text-blue-600 hover:underline">House exteriors</Link> (vinyl, stucco, painted)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Wood siding and decks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Screen enclosures and pool cages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Outdoor furniture and fences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Any surface that could be damaged by pressure</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Pressure Washing (High Pressure)</h3>
              <p className="text-sm text-gray-600 mb-4">1,500-4,000 PSI | Force does the work</p>
              <h4 className="font-semibold text-gray-800 mb-2">Use For:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">→</span>
                  <span><Link href="/services/driveway-cleaning" className="text-blue-600 hover:underline">Concrete driveways</Link> and sidewalks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">→</span>
                  <span>Brick and stone surfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">→</span>
                  <span><Link href="/services/paver-cleaning" className="text-blue-600 hover:underline">Pavers</Link> (with appropriate PSI)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">→</span>
                  <span>Garage floors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">→</span>
                  <span>Heavy equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">→</span>
                  <span>Hard surfaces with embedded stains</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-yellow-800">Warning Signs of Improper Cleaning</h3>
            <p className="text-gray-700">
              If a company offers to "pressure wash your roof" or uses high pressure on stucco or vinyl siding,
              this is a red flag. Professional exterior cleaners know that these surfaces require soft washing.
              High pressure can strip granules from shingles, damage stucco texture, force water behind siding,
              and void manufacturer warranties.
            </p>
          </div>
        </section>

        {/* How Soft Washing Works */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">How Soft Washing Works</h2>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The effectiveness of soft washing comes from the specialized cleaning solutions, not pressure.
            Here's what happens when we soft wash your property:
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Solution Application</h3>
                <p className="text-gray-600 mt-2">
                  Using specialized equipment, we apply a cleaning solution at low pressure to the entire surface.
                  The solution contains surfactants that help it cling to vertical surfaces and penetrate organic growth.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Penetration & Kill</h3>
                <p className="text-gray-600 mt-2">
                  The solution penetrates the cellular structure of mold, mildew, algae, and bacteria,
                  destroying them from within. This is why we allow dwell time—the solution needs contact
                  time to work through the organism's protective barriers.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Breakdown & Rinse</h3>
                <p className="text-gray-600 mt-2">
                  Dead organic matter breaks down and washes away—either immediately during rinsing or
                  naturally with rainfall over the following days. Heavy lichen may take 1-2 weeks to
                  fully release, which is normal and indicates the treatment worked at root level.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Residual Protection</h3>
                <p className="text-gray-600 mt-2">
                  The cleaning solution leaves behind a residual that continues inhibiting new growth
                  for weeks after treatment. This is why soft wash results last so much longer than
                  pressure washing, which provides zero residual protection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Florida Needs Soft Washing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Soft Washing Is Essential in Florida</h2>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Central Florida's humid subtropical climate creates the perfect environment for biological growth
            on exterior surfaces. Our combination of warmth, moisture, and rainfall makes organic contamination
            a year-round challenge that northern homeowners rarely face.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50"+</div>
              <p className="text-gray-600">Annual rainfall in Central Florida</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">80%+</div>
              <p className="text-gray-600">Typical summer humidity levels</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">365</div>
              <p className="text-gray-600">Days of growing conditions for algae</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            In this environment, pressure washing provides only temporary relief. The organisms you blast
            off today will return within months because you've only removed what you can see—the root
            structures remain embedded in your surfaces. Soft washing solves this by killing everything,
            including what's invisible to the naked eye.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Common Florida Growth Problems We Treat</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> Black algae streaks (Gloeocapsa magma)</li>
              <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> Green algae on siding and fences</li>
              <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> Mold and mildew staining</li>
              <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> Lichen on roofs and walkways</li>
              <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> Moss in shaded areas</li>
              <li className="flex items-center"><span className="text-blue-600 mr-2">→</span> Pollen accumulation</li>
            </ul>
          </div>
        </section>

        {/* Surfaces We Soft Wash */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Surfaces We Soft Wash</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Roofs</h3>
              <p className="text-gray-600 mb-3">
                <Link href="/services/roof-cleaning" className="text-blue-600 hover:underline">Roof soft washing</Link> is
                the only safe method for cleaning shingles, tile, and metal roofing. High pressure strips
                granules, cracks tiles, and voids warranties.
              </p>
              <p className="text-sm text-blue-600">Asphalt shingles • Tile • Metal</p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">House Exteriors</h3>
              <p className="text-gray-600 mb-3">
                <Link href="/services/house-washing" className="text-blue-600 hover:underline">House washing</Link> with
                soft wash is essential for vinyl siding, stucco, and painted surfaces. We clean the entire
                exterior without damaging the finish.
              </p>
              <p className="text-sm text-blue-600">Vinyl • Stucco • Painted wood • Fiber cement</p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Screen Enclosures</h3>
              <p className="text-gray-600 mb-3">
                Pool cages and screen enclosures are susceptible to algae and mildew buildup. Our soft
                wash method cleans screens thoroughly without tearing the mesh or damaging frames.
              </p>
              <p className="text-sm text-blue-600">Pool cages • Lanai screens • Patio enclosures</p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Wood Surfaces</h3>
              <p className="text-gray-600 mb-3">
                Decks, fences, and pergolas benefit from soft washing, which cleans without raising the
                grain or damaging the wood fibers like pressure washing can.
              </p>
              <p className="text-sm text-blue-600">Decks • Fences • Pergolas • Gazebos</p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Outdoor Furniture</h3>
              <p className="text-gray-600 mb-3">
                Patio furniture, cushion frames, and outdoor kitchens accumulate mold and mildew in
                Florida's humidity. Soft washing restores them without damage.
              </p>
              <p className="text-sm text-blue-600">Patio sets • Cushion frames • Outdoor kitchens</p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Commercial Properties</h3>
              <p className="text-gray-600 mb-3">
                Storefronts, awnings, signage, and building facades require gentle cleaning to maintain
                their appearance without damaging branding or architectural details.
              </p>
              <p className="text-sm text-blue-600">Storefronts • Awnings • Signs • Facades</p>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Soft Washing Process</h2>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Before We Arrive</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">1.</span>
                    <span>Close all windows and doors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">2.</span>
                    <span>Move vehicles from the driveway</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">3.</span>
                    <span>Remove or cover delicate potted plants near the house</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">4.</span>
                    <span>Bring in pet food/water bowls</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Steps</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">1.</span>
                    <span>Thorough property inspection and protection of landscaping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">2.</span>
                    <span>Low-pressure application of biodegradable cleaning solution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">3.</span>
                    <span>Appropriate dwell time for complete treatment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">4.</span>
                    <span>Gentle rinse and landscape watering</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Safety and Environment */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Safety & Environmental Responsibility</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-800">Landscape Protection</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pre-wet all vegetation before application</li>
                <li>• Cover sensitive plants when necessary</li>
                <li>• Rinse all landscaping after service</li>
                <li>• Solutions dilute and break down rapidly</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Eco-Friendly Solutions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Biodegradable cleaning agents</li>
                <li>• Break down into harmless compounds</li>
                <li>• No phosphates or harmful residues</li>
                <li>• Safe for pets after drying</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose KJS */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose KJS Supreme for Soft Washing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Proper Training & Equipment</h3>
              <p className="text-gray-600">We use commercial-grade soft wash systems with calibrated solution mixing for consistent, effective results on every job.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Fully Insured</h3>
              <p className="text-gray-600">Comprehensive liability insurance protects your property throughout the cleaning process.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Local Florida Experience</h3>
              <p className="text-gray-600">Based in Deltona, we understand Central Florida's specific climate challenges and have refined our methods accordingly.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Transparent Pricing</h3>
              <p className="text-gray-600">Detailed quotes before work begins with no hidden fees. We price based on surface area and condition, not upsells.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="bg-white border border-gray-200 rounded-lg p-4 group">
              <summary className="text-lg font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                What is the difference between soft washing and pressure washing?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-3">
                Soft washing uses low pressure (under 500 PSI) with cleaning solutions to kill organisms at the
                cellular level. Pressure washing uses high pressure (1,500-4,000 PSI) to physically remove
                contaminants. Soft washing is safer for delicate surfaces and provides longer-lasting results.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-4 group">
              <summary className="text-lg font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                What surfaces require soft washing instead of pressure washing?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-3">
                Soft washing is required for <Link href="/services/roof-cleaning" className="text-blue-600 hover:underline">roofs</Link> (shingles,
                tile, metal), stucco, <Link href="/services/house-washing" className="text-blue-600 hover:underline">vinyl siding</Link>,
                painted surfaces, wood siding, screen enclosures, and outdoor furniture. Pressure washing is
                appropriate for <Link href="/services/driveway-cleaning" className="text-blue-600 hover:underline">concrete</Link>, brick, stone, and pavers.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-4 group">
              <summary className="text-lg font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                Is soft washing safe for my plants and landscaping?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-3">
                Yes. We thoroughly pre-wet all vegetation before application and use biodegradable solutions
                that break down quickly. We also rinse all landscaping after service. In thousands of jobs,
                we've never damaged properly protected landscaping.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-4 group">
              <summary className="text-lg font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                How long do soft washing results last?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-3">
                Results typically last 2-4 times longer than pressure washing. For roofs in Central Florida,
                expect 2-3 years. For house exteriors, 1-2 years depending on shade and humidity. The variation
                depends on environmental factors specific to your property.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-4 group">
              <summary className="text-lg font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                What chemicals are used in soft washing?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-3">
                Professional soft wash solutions contain sodium hypochlorite (similar to pool chlorine),
                surfactants that help the solution penetrate organic growth, and sometimes algaecides for
                extended protection. All solutions are biodegradable and break down within hours.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-4 group">
              <summary className="text-lg font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                Can soft washing remove black streaks from my roof?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-3">
                Yes, soft washing is the ONLY safe method for removing <Link href="/services/roof-cleaning" className="text-blue-600 hover:underline">black roof streaks</Link>.
                These streaks are caused by Gloeocapsa magma bacteria, which our solutions kill completely.
                Pressure washing would damage shingles and void warranties.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-4 group">
              <summary className="text-lg font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                Why is soft washing better for Florida homes?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-3">
                Florida's humidity creates ideal conditions for rapid organic growth. Soft washing kills
                organisms at the cellular level, providing longer-lasting protection. Pressure washing only
                removes surface growth, which returns quickly in our climate. See our <Link href="/faq" className="text-blue-600 hover:underline">FAQ page</Link> for
                more Florida-specific guidance.
              </p>
            </details>
          </div>
        </section>

        {/* Related Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Soft Washing Services</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/roof-cleaning" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors text-center">
              <span className="font-semibold text-gray-800 block">Roof Cleaning</span>
              <span className="text-sm text-gray-600">Shingles, tile & metal roofs</span>
            </Link>
            <Link href="/services/house-washing" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors text-center">
              <span className="font-semibold text-gray-800 block">House Washing</span>
              <span className="text-sm text-gray-600">Vinyl, stucco & painted surfaces</span>
            </Link>
            <Link href="/services/driveway-cleaning" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors text-center">
              <span className="font-semibold text-gray-800 block">Driveway Cleaning</span>
              <span className="text-sm text-gray-600">Pressure washing for concrete</span>
            </Link>
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Service Areas</h2>
          <p className="text-lg text-gray-600 mb-4">
            We provide professional soft washing services throughout Central Florida:
          </p>
          <div className="flex flex-wrap gap-2">
            {['Deltona', 'Orlando', 'Sanford', 'Lake Mary', 'Daytona Beach', 'DeBary', 'Orange City', 'Winter Park'].map((loc) => (
              <Link
                key={loc}
                href={`/locations/${loc.toLowerCase().replace(' ', '-')}`}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
              >
                {loc}
              </Link>
            ))}
            <Link
              href="/locations"
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              + View All Areas
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Free Soft Washing Quote</h2>
          <p className="text-lg mb-6 text-gray-300">
            Protect your property with professional soft washing. We serve Deltona, Orlando, Daytona Beach,
            Sanford, Lake Mary, and communities throughout Central Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+12138416924"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Call (213) 841-6924
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
