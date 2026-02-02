import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import { generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema, generateLocalBusinessSchema } from '@/lib/structured-data';
import { SITE_CONFIG, generateMetadata as generateSeoMetadata } from '@/lib/seo-config';

const PAGE_URL = 'https://kjsupremepressurewashing.com/exterior-cleaning-guide-deltona';
const PAGE_TITLE = 'Why Central Florida Homes Need Regular Exterior Cleaning | Deltona Guide';
const PAGE_DESCRIPTION = 'Learn why Deltona homes face unique exterior cleaning challenges. Understand mold, algae, and mildew differences, safe cleaning methods for each surface, and maintenance best practices for Florida\'s subtropical climate.';

export const metadata = {
  ...generateSeoMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    path: '/exterior-cleaning-guide-deltona',
    robots: 'service',
  }),
  keywords: ['exterior cleaning Deltona', 'Florida home maintenance', 'mold vs algae vs mildew', 'soft washing vs pressure washing', 'Central Florida humidity', 'Deltona homeowner guide', 'home exterior maintenance Florida'],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'article',
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
    images: [{
      url: `${SITE_CONFIG.url}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'Exterior Cleaning Guide for Deltona FL Homes'
    }],
    publishedTime: '2026-02-02T00:00:00.000Z',
    authors: [SITE_CONFIG.name],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_CONFIG.url}/og-image.jpg`],
  },
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Deltona',
    'geo.position': `${SITE_CONFIG.geo.latitude};${SITE_CONFIG.geo.longitude}`,
    'ICBM': `${SITE_CONFIG.geo.latitude}, ${SITE_CONFIG.geo.longitude}`,
    'article:publisher': SITE_CONFIG.social.facebook,
    'article:section': 'Home Maintenance',
    'article:tag': 'exterior cleaning, pressure washing, soft washing, Florida homes, mold removal',
  },
};

export default function ExteriorCleaningGuidePage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Exterior Cleaning Guide', url: PAGE_URL },
  ];

  const faqs = [
    {
      question: 'Why does my house get dirty so fast in Florida?',
      answer: 'Florida\'s subtropical climate creates ideal conditions for biological growth. High humidity (averaging 74% annually), warm temperatures that rarely drop below 50°F, and frequent rain during wet season means organic matter like algae, mold, and mildew can establish and spread year-round on exterior surfaces.'
    },
    {
      question: 'What is the difference between mold, mildew, and algae on my home?',
      answer: 'Algae is photosynthetic and appears as green or black streaking—it needs light and moisture but not organic material. Mold comes in various colors with a fuzzy texture and requires organic material to feed on. Mildew is a type of mold that appears as flat, powdery white or gray patches, typically staying on the surface rather than penetrating materials.'
    },
    {
      question: 'Can I pressure wash my roof?',
      answer: 'No. Pressure washing any roofing material—shingles, tile, or metal—causes damage far exceeding any benefit. High pressure strips protective granules from shingles, cracks tiles, and compromises metal finishes. Roofs require soft washing exclusively, which uses low pressure combined with specialized cleaning solutions.'
    },
    {
      question: 'How often should I clean my home\'s exterior in Deltona?',
      answer: 'In Central Florida\'s climate: roofs every 2-3 years, house exteriors (siding, stucco) annually to every 18 months, driveways and concrete annually, and pool decks every 6-12 months. Properties with significant tree coverage or northern exposure may require more frequent attention.'
    },
    {
      question: 'What surfaces can handle high-pressure washing?',
      answer: 'Concrete surfaces—driveways, sidewalks, and pool decks—can withstand significant pressure (3,000+ PSI) without damage. Most other residential surfaces including roofing, siding, stucco, painted surfaces, and wood require soft washing with low pressure to prevent damage.'
    },
  ];

  // Article Schema for enhanced SERP features
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${PAGE_URL}#article`,
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    datePublished: '2026-02-02T00:00:00.000Z',
    dateModified: '2026-02-02T00:00:00.000Z',
    author: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': PAGE_URL,
    },
    articleSection: 'Home Maintenance',
    keywords: 'exterior cleaning, pressure washing, soft washing, Florida homes, mold removal, algae removal, Deltona FL',
    wordCount: 2500,
    about: [
      { '@type': 'Thing', name: 'Pressure Washing' },
      { '@type': 'Thing', name: 'Soft Washing' },
      { '@type': 'Thing', name: 'Home Maintenance' },
      { '@type': 'Thing', name: 'Mold Removal' },
    ],
    mentions: [
      { '@type': 'Place', name: 'Deltona, Florida' },
      { '@type': 'Place', name: 'Volusia County, Florida' },
      { '@type': 'Place', name: 'Central Florida' },
    ],
  };

  const schemas = [
    generateWebPageSchema({
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      type: 'Article'
    }),
    generateBreadcrumbSchema(breadcrumbs),
    generateFAQSchema(faqs),
    articleSchema,
  ];

  return (
    <>
      <StructuredData schema={schemas} />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Central Florida Homes Need Regular Exterior Cleaning</h1>
              <p className="text-xl md:text-2xl text-blue-100">Understanding the unique challenges of maintaining your home in a subtropical climate</p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                Homeowners in Deltona want to understand why their home's exterior surfaces deteriorate so quickly and how to properly maintain them given Florida's unique subtropical climate. This guide explains the environmental factors at play, identifies what's actually growing on your home, and outlines the appropriate cleaning methods for each surface type.
              </p>
            </div>
          </div>
        </section>

        {/* Climate Factor Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">The Climate Factor: What Makes Deltona Different</h2>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Deltona sits in Volusia County within Central Florida's subtropical zone, where conditions create a near-perfect environment for biological growth on exterior surfaces. The combination of high humidity (averaging 74% annually), warm temperatures that rarely drop below 50°F, and a distinct wet season from June through September means organic matter has year-round conditions to thrive.
                </p>

                <p className="text-lg leading-relaxed">
                  Unlike homes in drier climates where dust and dirt are the primary concerns, Deltona properties face a constant cycle of moisture exposure. Morning dew rarely evaporates completely before afternoon thunderstorms add more moisture. This persistent dampness allows microorganisms to establish themselves on virtually any exterior surface—concrete, vinyl, stucco, wood, and roofing materials.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                  <p className="text-lg text-gray-800">
                    The problem compounds over time. What begins as a faint discoloration becomes a visible layer of growth within weeks. Left unchecked for months, these organisms penetrate porous materials, making removal increasingly difficult and potentially causing structural degradation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Growth Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Understanding What's Actually Growing on Your Home</h2>
              <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                Homeowners often use "mold," "mildew," and "algae" interchangeably, but these are distinct organisms with different characteristics and implications.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Algae */}
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-600">
                  <h3 className="text-2xl font-bold mb-4 text-green-700">Algae</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      The green or black streaking commonly seen on roofs, sidewalks, and north-facing walls is typically algae—specifically <em>Gloeocapsa magma</em> on roofing shingles.
                    </p>
                    <p>
                      Algae is photosynthetic, meaning it needs light and moisture but not organic material to survive. It feeds on the limestone filler in asphalt shingles and thrives on concrete surfaces.
                    </p>
                    <p className="text-sm bg-green-50 p-3 rounded">
                      <strong>Impact:</strong> While algae doesn't directly damage most materials, it retains moisture against surfaces, accelerating wear over time.
                    </p>
                  </div>
                </div>

                {/* Mold */}
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-600">
                  <h3 className="text-2xl font-bold mb-4 text-red-700">Mold</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Mold appears in various colors—black, green, white, or orange—and has a fuzzy or slimy texture. Unlike algae, mold requires organic material to feed on.
                    </p>
                    <p>
                      On home exteriors, it colonizes areas where organic debris accumulates: gutters, areas beneath trees, and surfaces with existing algae growth (mold feeds on dead algae).
                    </p>
                    <p className="text-sm bg-red-50 p-3 rounded">
                      <strong>Impact:</strong> Mold poses health concerns and can cause material degradation, particularly on wood surfaces.
                    </p>
                  </div>
                </div>

                {/* Mildew */}
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gray-500">
                  <h3 className="text-2xl font-bold mb-4 text-gray-700">Mildew</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Mildew is actually a type of mold, typically appearing as flat, powdery white or gray patches on surfaces.
                    </p>
                    <p>
                      It's most common on painted surfaces, fabric awnings, and outdoor furniture. Mildew tends to stay on the surface rather than penetrating materials.
                    </p>
                    <p className="text-sm bg-gray-100 p-3 rounded">
                      <strong>Impact:</strong> Easier to remove than established mold, but still indicates moisture conditions that need addressing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-yellow-50 border border-yellow-200 p-6 rounded-lg max-w-4xl mx-auto">
                <h4 className="font-semibold text-lg mb-2 text-gray-900">Why the Distinction Matters</h4>
                <p className="text-gray-700">
                  Effective cleaning requires understanding what you're dealing with. Algae requires different treatment than mold. Applying the wrong cleaning solution—or the wrong pressure level—can kill the organism on the surface while leaving root structures intact, resulting in rapid regrowth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Surfaces Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Common Exterior Surfaces in Deltona Homes and Their Vulnerabilities</h2>
              <p className="text-lg text-gray-700 mb-10">
                Deltona's housing stock, largely developed from the 1960s onward, features several predominant exterior materials, each with specific maintenance considerations.
              </p>

              <div className="space-y-8">
                {[
                  {
                    title: 'Stucco',
                    description: 'Extremely common in Central Florida construction, stucco is porous and textured—ideal conditions for trapping moisture and harboring growth. The texture creates micro-environments where organisms establish protected colonies.',
                    warning: 'Aggressive pressure washing can damage stucco\'s surface, creating more texture and worsening the problem long-term.'
                  },
                  {
                    title: 'Vinyl Siding',
                    description: 'Vinyl doesn\'t support biological growth directly, but its surface readily accumulates the dust and pollen that organisms feed on. The overlapping panel design also traps moisture between the siding and underlying structure.',
                    warning: 'Water forced behind vinyl siding during improper cleaning can cause hidden moisture damage.'
                  },
                  {
                    title: 'Concrete and Pavers',
                    description: 'Driveways, walkways, pool decks, and paver patios absorb water and provide excellent growing conditions for algae and mold. The rough texture of broom-finished concrete is particularly susceptible.',
                    warning: 'Beyond aesthetics, algae-covered concrete becomes dangerously slippery when wet.'
                  },
                  {
                    title: 'Painted Wood (Soffits, Fascia, Trim)',
                    description: 'Wood components retain moisture and provide organic material for mold growth. Paint failure often begins at these locations, where biological growth lifts paint edges and allows moisture infiltration.',
                    warning: 'These areas require gentler cleaning approaches than concrete surfaces.'
                  },
                  {
                    title: 'Roofing Materials',
                    description: 'Asphalt shingles contain limestone that algae consume. The dark streaking on roofs isn\'t just cosmetic—the organisms are literally eating the roofing material. Tile roofs develop algae and lichen in their porous surfaces and crevices.',
                    warning: 'Improper roof cleaning causes more damage than the organisms themselves; high-pressure washing on roofing is never appropriate.'
                  },
                ].map((surface, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{surface.title}</h3>
                    <p className="text-gray-700 mb-3">{surface.description}</p>
                    <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded">
                      <strong>Caution:</strong> {surface.warning}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pressure vs Soft Washing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Pressure, Soft Washing, and Surface Compatibility</h2>
              <p className="text-lg text-gray-700 mb-10">
                The term "pressure washing" describes a spectrum of cleaning methods, from gentle rinsing to surface-damaging force. Understanding this spectrum prevents costly mistakes.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* High Pressure */}
                <div className="bg-blue-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-blue-800">When High Pressure Is Appropriate</h3>
                  <p className="text-gray-700 mb-4">
                    Concrete surfaces—driveways, sidewalks, and pool decks—can withstand significant pressure (3,000+ PSI) without damage. Hard, non-porous surfaces benefit from mechanical force to remove embedded contamination.
                  </p>
                  <p className="text-gray-700">
                    Even here, proper technique matters: maintaining consistent distance, using appropriate nozzle angles, and avoiding concentrated pressure on any single point.
                  </p>
                  <div className="mt-4">
                    <Link href="/services/driveway-cleaning" className="text-blue-600 hover:text-blue-800 font-medium">
                      Learn more about driveway cleaning →
                    </Link>
                  </div>
                </div>

                {/* Soft Washing */}
                <div className="bg-green-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-green-800">When Soft Washing Is Necessary</h3>
                  <p className="text-gray-700 mb-4">
                    Most residential surfaces require soft washing—a method combining low pressure (similar to a garden hose) with specialized cleaning solutions that kill organisms at the root level.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Roofing materials of any type</li>
                    <li>Stucco and EIFS (synthetic stucco)</li>
                    <li>Vinyl and aluminum siding</li>
                    <li>Painted surfaces and wood</li>
                    <li>Windows and screens</li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/services/soft-washing" className="text-green-600 hover:text-green-800 font-medium">
                      Learn more about soft washing →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Damage Warning */}
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-red-800">The Damage High Pressure Causes</h4>
                <p className="text-gray-700 mb-4">
                  Using excessive pressure on inappropriate surfaces creates several problems:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li><strong>Stucco:</strong> Erodes the surface layer, creating more texture for future growth</li>
                  <li><strong>Vinyl siding:</strong> Forces water behind panels, warps material, removes finish</li>
                  <li><strong>Asphalt shingles:</strong> Strips protective granules, dramatically shortening roof lifespan</li>
                  <li><strong>Wood:</strong> Raises grain, creates splintering, forces water into material</li>
                  <li><strong>Paint:</strong> Lifts edges, causes peeling, drives moisture under remaining paint</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  The damage often isn't immediately apparent but manifests over the following months as accelerated deterioration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Considerations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">Local Considerations for Deltona Homeowners</h2>

              <div className="space-y-8">
                {/* HOA */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">HOA Requirements</h3>
                  <p className="text-gray-700 mb-4">
                    Many Deltona communities have homeowners associations with exterior maintenance standards. Common requirements include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>No visible mold, mildew, or algae on home exteriors</li>
                    <li>Driveways and walkways maintained in clean condition</li>
                    <li>Roofs free of visible staining or growth</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Violations can result in fines or required remediation within specified timeframes. Regular maintenance prevents reactive scrambling when violation notices arrive.
                  </p>
                </div>

                {/* Property Value */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Property Value and Sale Preparation</h3>
                  <p className="text-gray-700 mb-4">
                    Curb appeal directly impacts property valuations. Appraisers and potential buyers notice exterior condition immediately. A home with visible algae streaking on the roof and green-stained concrete signals deferred maintenance, raising questions about what other maintenance has been neglected.
                  </p>
                  <p className="text-gray-700">
                    For homeowners considering selling, exterior cleaning provides significant return relative to cost. It's one of the most cost-effective improvements for visual impact.
                  </p>
                </div>

                {/* Maintenance Frequency */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Maintenance Frequency in Florida's Climate</h3>
                  <p className="text-gray-700 mb-4">
                    Given Central Florida's conditions, most properties benefit from exterior cleaning on the following general schedule:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 pr-4 font-semibold text-gray-900">Surface</th>
                          <th className="py-3 font-semibold text-gray-900">Recommended Frequency</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-3 pr-4 text-gray-700">Roofs</td>
                          <td className="py-3 text-gray-700">Every 2-3 years (more for shaded properties)</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 text-gray-700">House exteriors (siding, stucco)</td>
                          <td className="py-3 text-gray-700">Annually to every 18 months</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 text-gray-700">Driveways and concrete</td>
                          <td className="py-3 text-gray-700">Annually (twice yearly for shaded areas)</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 text-gray-700">Pool decks and enclosures</td>
                          <td className="py-3 text-gray-700">Every 6-12 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700 mt-4 text-sm">
                    Properties with significant tree coverage, northern exposure, or proximity to bodies of water may require more frequent attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">Common Mistakes That Cause Problems</h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Using Household Bleach Incorrectly',
                    description: 'Sodium hypochlorite (bleach) is effective against biological growth, but household bleach at improper concentrations damages plants, degrades surfaces, and provides only superficial cleaning. Professional-grade solutions are formulated differently than store-bought bleach.'
                  },
                  {
                    title: 'Pressure Washing Roofs',
                    description: 'This mistake is common and costly. Pressure washing any roofing material—shingles, tile, or metal—causes damage far exceeding any benefit. Shingle granules wash away, tiles crack and shift, and metal finishes are compromised. Roofs require soft washing exclusively.'
                  },
                  {
                    title: 'Neglecting Surrounding Plants and Landscape',
                    description: 'Cleaning solutions, even biodegradable ones, require proper plant protection. Wetting plants thoroughly before cleaning, maintaining coverage during the process, and rinsing afterward prevents chemical damage. Skipping this step can kill landscaping that took years to establish.'
                  },
                  {
                    title: 'Waiting Too Long Between Cleanings',
                    description: 'Biological growth compounds progressively. Light contamination that\'s easily addressed becomes deeply embedded over time. Particularly on roofs and stucco, delayed cleaning allows organisms to penetrate materials, making complete removal difficult and potentially impossible without surface damage.'
                  },
                  {
                    title: 'DIY Without Understanding Surface Requirements',
                    description: 'Renting a pressure washer and using maximum pressure on every surface—a common DIY approach—frequently causes thousands of dollars in damage. Each surface requires specific pressure levels, nozzle types, and cleaning agents. What works on concrete will destroy vinyl siding.'
                  },
                ].map((mistake, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{mistake.title}</h3>
                      <p className="text-gray-700">{mistake.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Practical Takeaways */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Practical Takeaways</h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p>
                  Maintaining exterior surfaces in Deltona's climate isn't optional—it's an ongoing requirement of homeownership in a subtropical environment. Understanding the distinction between what grows on your home, which surfaces require which cleaning approaches, and what mistakes to avoid puts you in position to make informed decisions about your property's maintenance.
                </p>

                <p>
                  For surfaces that can handle pressure—concrete driveways, sidewalks, and pool decks—proper <Link href="/services/driveway-cleaning" className="text-blue-600 hover:text-blue-800">pressure washing</Link> effectively removes embedded contamination. For everything else—roofs, siding, stucco, painted surfaces—<Link href="/services/soft-washing" className="text-blue-600 hover:text-blue-800">soft washing</Link> with appropriate solutions provides cleaning without the collateral damage that improper techniques cause.
                </p>

                <p>
                  Related services like <Link href="/services/house-washing" className="text-blue-600 hover:text-blue-800">house washing</Link>, <Link href="/services/roof-cleaning" className="text-blue-600 hover:text-blue-800">roof cleaning</Link>, and <Link href="/services/concrete-cleaning" className="text-blue-600 hover:text-blue-800">concrete cleaning</Link> each address specific surfaces with methods appropriate to the material. Understanding these distinctions helps homeowners maintain their properties effectively while avoiding the preventable damage that results from one-size-fits-all approaches.
                </p>
              </div>

              <div className="mt-10 p-6 bg-gray-100 rounded-lg">
                <p className="text-gray-600 text-sm italic">
                  This information applies specifically to residential properties in Deltona and the surrounding Central Florida region. Climate conditions, common building materials, and maintenance requirements differ significantly in other geographic areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help With Your Property's Exterior?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Get a professional assessment to determine the right cleaning approach for each surface on your property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
                  Request Free Quote
                </Link>
                <Link href="tel:+12138416924" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-lg border-2 border-white">
                  Call: (213) 841-6924
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
