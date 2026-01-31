import Link from 'next/link';

export const metadata = {
  title: 'Pressure Washing FAQ | Questions & Answers | KJS Supreme Central Florida',
  description: 'Get answers to common pressure washing questions. Learn about costs, safe surfaces, soft washing vs pressure washing, how often to clean, and why hire professionals in Central Florida.',
  keywords: [
    'pressure washing FAQ',
    'how much does pressure washing cost',
    'what surfaces can be pressure washed',
    'soft washing vs pressure washing',
    'how often pressure wash house Florida',
    'Central Florida pressure washing',
  ],
  openGraph: {
    title: 'Pressure Washing FAQ | KJS Supreme Pressure Washing',
    description: 'Comprehensive answers to all your pressure washing questions. Expert guidance from Central Florida\'s trusted exterior cleaning professionals.',
    type: 'website',
    locale: 'en_US',
    url: 'https://kjsupremepressurewashing.com/faq',
  },
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com/faq',
  },
};

// Comprehensive FAQ data organized by topic
const faqCategories = [
  {
    id: 'basics',
    title: 'Pressure Washing Basics',
    description: 'Understanding pressure washing fundamentals and how it works.',
    questions: [
      {
        q: 'What is pressure washing?',
        a: 'Pressure washing (also called power washing) uses high-pressure water spray to remove dirt, mold, mildew, algae, loose paint, and other contaminants from exterior surfaces. Professional equipment typically operates between 1,500-4,000 PSI (pounds per square inch), with water flow rates of 2-4 gallons per minute. The combination of pressure and volume effectively cleans surfaces that would take hours to scrub by hand.',
        link: '/services',
      },
      {
        q: 'How does pressure washing work?',
        a: 'Pressure washing works by forcing water through a concentrated nozzle at high velocity. The impact breaks the bond between dirt, grime, and the surface being cleaned. Different nozzle tips (0°, 15°, 25°, 40°) control the spray pattern and intensity. Professional technicians select the appropriate pressure, nozzle, and technique based on the surface material to achieve optimal cleaning without damage.',
        link: '/services',
      },
      {
        q: 'What is the difference between pressure washing and power washing?',
        a: 'The terms are often used interchangeably, but technically power washing uses heated water while pressure washing uses ambient temperature water. Hot water is more effective for removing grease and oil stains. For most residential and commercial exterior cleaning in Central Florida, standard pressure washing with appropriate cleaning solutions achieves excellent results.',
        link: '/services',
      },
      {
        q: 'What prep work is needed before pressure washing?',
        a: 'Before pressure washing, we: 1) Inspect surfaces for damage or loose materials, 2) Cover or move outdoor furniture, plants, and decorations, 3) Close all windows and doors, 4) Pre-treat heavily soiled areas with appropriate cleaning solutions, 5) Wet surrounding landscaping to protect plants, 6) Test pressure settings on an inconspicuous area. Proper preparation ensures safe, effective cleaning.',
        link: '/contact',
      },
    ],
  },
  {
    id: 'soft-washing',
    title: 'Soft Washing vs Pressure Washing',
    description: 'Understanding when to use soft washing versus traditional pressure washing.',
    questions: [
      {
        q: 'Why is soft washing better than pressure washing for some surfaces?',
        a: 'Soft washing uses low pressure (under 500 PSI) combined with specialized biodegradable cleaning solutions to kill mold, mildew, algae, and bacteria at the root. Unlike high-pressure washing that can damage delicate surfaces, soft washing is safe for roofs, stucco, painted surfaces, and wood. The cleaning solutions continue working after application, providing longer-lasting results—typically 4-6 times longer than pressure washing alone.',
        link: '/services/soft-washing',
      },
      {
        q: 'What is soft washing?',
        a: 'Soft washing is a low-pressure cleaning method that relies on specialized cleaning solutions rather than force to clean surfaces. The solutions (typically containing sodium hypochlorite and surfactants) kill organic growth like algae, mold, and mildew. This method is essential for roofs, where high pressure can damage shingles, and for delicate surfaces like stucco, EIFS, and painted wood.',
        link: '/services/soft-washing',
      },
      {
        q: 'Is soft washing safe for my property?',
        a: 'Yes, soft washing is safe when performed by trained professionals. We use biodegradable, eco-friendly solutions that are safe for your family, pets, and landscaping when applied correctly. We pre-wet plants, use appropriate dilution rates, and rinse thoroughly. Soft washing is actually safer than pressure washing for many surfaces because it eliminates the risk of pressure damage.',
        link: '/services/soft-washing',
      },
      {
        q: 'What surfaces require soft washing instead of pressure washing?',
        a: 'Soft washing is required or recommended for: roofs (shingles, tile, metal), stucco and EIFS, painted surfaces, wood siding and decks, vinyl siding, screen enclosures, and lanais. These surfaces can be damaged by high pressure but respond excellently to soft washing treatment. Our technicians assess each surface and select the appropriate method.',
        link: '/services/soft-washing',
      },
    ],
  },
  {
    id: 'cost-pricing',
    title: 'Cost & Pricing',
    description: 'Understanding pressure washing costs and what factors affect pricing.',
    questions: [
      {
        q: 'How much does pressure washing cost per hour?',
        a: 'Professional pressure washing in Central Florida typically costs $50-$150 per hour depending on the service type, equipment needed, and complexity. However, most companies (including ours) quote by the job or square footage rather than hourly rates. This provides price certainty—you know exactly what you\'ll pay before work begins. Contact us for a free, no-obligation quote for your specific project.',
        link: '/contact',
      },
      {
        q: 'How much does it cost to pressure wash a house?',
        a: 'House washing in Central Florida typically ranges from $200-$600 depending on home size, number of stories, siding material, and level of soiling. A typical 2,000 sq ft single-story home averages $250-$350. Two-story homes cost more due to equipment and safety requirements. We provide free quotes with exact pricing—no surprises.',
        link: '/services/house-washing',
      },
      {
        q: 'What factors affect pressure washing prices?',
        a: 'Key pricing factors include: 1) Square footage of the area, 2) Surface type and condition, 3) Accessibility (height, obstacles), 4) Level of soiling/staining, 5) Cleaning method required (pressure vs soft wash), 6) Additional treatments (mold removal, sealing). We assess all factors during our free estimate to provide accurate, upfront pricing.',
        link: '/contact',
      },
    ],
  },
  {
    id: 'surfaces',
    title: 'Safe Surfaces & Materials',
    description: 'Learn which surfaces can and cannot be pressure washed safely.',
    questions: [
      {
        q: 'What surfaces can be safely cleaned with pressure washing?',
        a: 'Surfaces safe for pressure washing include: concrete (driveways, sidewalks, patios), brick and pavers, stone surfaces, metal fencing, vinyl siding (with appropriate pressure), and composite decking. Each surface requires specific pressure settings and techniques. Surfaces like roofs, stucco, and painted wood require soft washing instead. Our technicians are trained to select the right method for each surface.',
        link: '/services',
      },
      {
        q: 'Does pressure washing damage concrete?',
        a: 'When done correctly, pressure washing does not damage concrete. However, improper technique—using too much pressure, holding the wand too close, or using the wrong nozzle—can etch or pit the surface. Professional technicians use surface cleaners and maintain proper distance (6-12 inches) with appropriate pressure (2,500-3,500 PSI for concrete) to clean effectively without damage.',
        link: '/services/concrete-cleaning',
      },
      {
        q: 'Does pressure washing damage bricks?',
        a: 'Brick can be safely pressure washed, but older or deteriorating mortar requires caution. We assess brick condition before cleaning and adjust pressure accordingly (typically 500-1,500 PSI for brick). The mortar joints are most vulnerable—we avoid direct spray at angles that could erode mortar. For historic or damaged brick, soft washing is the safer option.',
        link: '/services/concrete-cleaning',
      },
      {
        q: 'What are some things we should never pressure wash?',
        a: 'Never pressure wash: 1) Asphalt roofing shingles (use soft wash only), 2) Old or damaged mortar/brick, 3) Painted surfaces with peeling paint, 4) Electrical panels, meters, and outlets, 5) Air conditioning units, 6) Windows at high pressure, 7) Vehicles with high pressure, 8) Stained wood without proper technique. When in doubt, soft washing is the safer alternative.',
        link: '/services/soft-washing',
      },
      {
        q: 'Is power washing safe for all types of surfaces?',
        a: 'No, high-pressure washing can damage delicate surfaces. Roofs, stucco, painted wood, and vinyl siding can be harmed by excessive pressure. That\'s why professional assessment is important—we determine whether each surface needs pressure washing, soft washing, or a combination approach. Using the wrong method can cause costly damage.',
        link: '/services',
      },
    ],
  },
  {
    id: 'psi-technical',
    title: 'PSI & Technical Questions',
    description: 'Technical information about pressure settings and equipment.',
    questions: [
      {
        q: 'How much PSI do I need to clean my driveway?',
        a: 'Most concrete driveways require 2,500-3,500 PSI for effective cleaning. Light dirt and pollen can be removed at 2,000 PSI, while oil stains and heavy buildup may need 3,000+ PSI combined with degreasing solutions. Professional surface cleaners distribute pressure evenly, preventing the striping pattern that occurs with wand-only cleaning.',
        link: '/services/driveway-cleaning',
      },
      {
        q: 'Will a 2000 PSI pressure washer clean a driveway?',
        a: 'A 2,000 PSI pressure washer can clean lightly soiled driveways but may struggle with oil stains, heavy algae, or embedded dirt. For thorough concrete cleaning, 2,500-3,500 PSI is recommended. Consumer-grade washers also have lower water flow (GPM), which significantly affects cleaning efficiency. Professional equipment combines higher PSI with greater water volume for faster, more thorough results.',
        link: '/services/driveway-cleaning',
      },
      {
        q: 'Is 1800 PSI enough to clean concrete?',
        a: '1,800 PSI can clean lightly soiled concrete but is generally insufficient for driveways, sidewalks, and patios with typical Central Florida buildup (algae, mold, tire marks). For effective concrete cleaning, 2,500+ PSI is recommended. Professional services use commercial equipment (3,000-4,000 PSI) with surface cleaners for uniform, efficient cleaning.',
        link: '/services/concrete-cleaning',
      },
      {
        q: 'How much water does a high pressure cleaner use?',
        a: 'Professional pressure washers use 2-4 gallons per minute (GPM). A typical house washing takes 30-60 minutes, using 60-240 gallons. While this sounds like a lot, it\'s actually more efficient than garden hose cleaning, which uses 6-10 GPM without the cleaning power. The combination of pressure and flow rate makes professional cleaning both effective and relatively water-efficient.',
        link: '/services',
      },
    ],
  },
  {
    id: 'frequency',
    title: 'Cleaning Frequency & Maintenance',
    description: 'How often should you pressure wash your property in Central Florida?',
    questions: [
      {
        q: 'How often should you pressure wash your home in Florida?',
        a: 'In Central Florida\'s humid subtropical climate, we recommend pressure washing your home every 12-18 months. However, homes with heavy shade, north-facing walls, or proximity to lakes may need cleaning every 6-12 months due to accelerated algae and mold growth. Signs you need cleaning include visible green/black streaks, dull siding, or musty odors near exterior walls.',
        link: '/services/house-washing',
      },
      {
        q: 'How often should I pressure wash my property?',
        a: 'Recommended frequency by surface: House exterior (12-18 months), Roof (2-3 years with soft washing), Driveway/concrete (12-24 months), Deck/patio (12 months), Pool deck (6-12 months due to moisture), Fence (12-24 months). Florida\'s humidity, rainfall, and warm temperatures accelerate organic growth, requiring more frequent cleaning than northern states.',
        link: '/services',
      },
      {
        q: 'Can pressure washing help with home maintenance?',
        a: 'Absolutely. Regular pressure washing prevents costly repairs by: 1) Removing mold/mildew before it causes rot, 2) Preventing algae from degrading roofing materials, 3) Maintaining paint adhesion by removing contaminants, 4) Preserving deck and fence wood from moisture damage, 5) Keeping concrete from becoming permanently stained. Preventive cleaning costs far less than repairs from neglect.',
        link: '/residential',
      },
      {
        q: 'How long does it take to pressure wash a house?',
        a: 'A typical single-story home (1,500-2,500 sq ft) takes 1-3 hours including setup and soft washing treatment. Two-story homes take 2-4 hours. Factors affecting time include home size, siding type, accessibility, and level of soiling. We provide time estimates during our free quote so you can plan accordingly.',
        link: '/services/house-washing',
      },
    ],
  },
  {
    id: 'hire-professionals',
    title: 'Hiring Professionals',
    description: 'Why hire professional pressure washing services and how to choose the right company.',
    questions: [
      {
        q: 'Why should we hire professionals for pressure washing?',
        a: 'Professional pressure washing offers: 1) Commercial-grade equipment (3-4x more powerful than rentals), 2) Trained technicians who won\'t damage surfaces, 3) Proper chemical knowledge for different stains, 4) Liability insurance protecting your property, 5) Time savings (professionals are 3-5x faster), 6) Consistent, streak-free results, 7) Safety on ladders and roofs. DIY attempts often cause damage costing more than professional service.',
        link: '/about',
      },
      {
        q: 'How to select the best pressure wash contractors?',
        a: 'When choosing a pressure washing company, verify: 1) Proper licensing and insurance, 2) Positive reviews and references, 3) Experience with your specific surface types, 4) Clear, written quotes with no hidden fees, 5) Satisfaction guarantee, 6) Knowledge of soft washing vs pressure washing, 7) Professional equipment (not rental machines). Ask about their process and chemicals used.',
        link: '/about',
      },
      {
        q: 'Is power washing your house difficult to do yourself?',
        a: 'DIY pressure washing carries significant risks: 1) Surface damage from incorrect pressure/technique, 2) Personal injury from high-pressure spray or ladders, 3) Water intrusion into walls through gaps, 4) Uneven cleaning (striping patterns), 5) Chemical burns or plant damage from improper solutions. Rental equipment is also less powerful and efficient than professional gear. For most homeowners, professional service is safer and more cost-effective.',
        link: '/contact',
      },
      {
        q: 'Where do I find a local pressure washer in Central Florida?',
        a: 'KJS Supreme Pressure Washing serves all of Central Florida including Deltona, Orlando, Sanford, Daytona Beach, Lake Mary, Winter Park, Kissimmee, and 30+ surrounding cities. We\'re locally owned, fully licensed and insured, with 9+ years of experience in Florida\'s unique climate conditions. Contact us for a free quote at (213) 841-6924.',
        link: '/locations',
      },
    ],
  },
  {
    id: 'roof-cleaning',
    title: 'Roof Cleaning',
    description: 'Questions about cleaning roofs safely and effectively.',
    questions: [
      {
        q: 'Why should I pressure wash my roof?',
        a: 'You should NOT pressure wash your roof—soft washing is the only safe method. High pressure damages shingles, voids warranties, and can cause leaks. Soft washing safely removes black streaks (Gloeocapsa magma algae), moss, and lichen that shorten roof life. Clean roofs also reflect heat better, reducing cooling costs. In Florida, roof cleaning every 2-3 years prevents premature replacement.',
        link: '/services/roof-cleaning',
      },
      {
        q: 'What causes black streaks on the roof of your house?',
        a: 'Black streaks on roofs are caused by Gloeocapsa magma, a cyanobacteria (blue-green algae) that feeds on the limestone filler in asphalt shingles. It thrives in Florida\'s humid climate and spreads via airborne spores. The dark color absorbs heat, increasing cooling costs. Left untreated, it degrades shingles and spreads to neighboring roofs. Soft washing kills the algae and prevents regrowth.',
        link: '/services/roof-cleaning',
      },
      {
        q: 'Can I clean my roof myself, or should I hire professionals?',
        a: 'We strongly recommend professional roof cleaning for safety and effectiveness. Roof work involves fall risks, potential for shingle damage, and proper chemical handling. Professionals have: 1) Proper safety equipment, 2) Correct soft wash solutions and dilution rates, 3) Experience avoiding damage, 4) Insurance coverage. DIY attempts often result in injuries, leaks, or voided warranties.',
        link: '/services/roof-cleaning',
      },
      {
        q: 'How important is roof cleaning?',
        a: 'Roof cleaning is essential for roof longevity and home value. Algae and moss: 1) Degrade shingle materials, shortening roof life by 5-10 years, 2) Void manufacturer warranties if left untreated, 3) Increase energy costs by absorbing heat, 4) Reduce curb appeal and home value, 5) Can spread to other surfaces. Regular soft washing protects your investment.',
        link: '/services/roof-cleaning',
      },
    ],
  },
  {
    id: 'florida-specific',
    title: 'Central Florida Specific',
    description: 'Questions specific to pressure washing in Central Florida\'s climate.',
    questions: [
      {
        q: 'Why do Florida homes need more frequent pressure washing?',
        a: 'Florida\'s humid subtropical climate creates ideal conditions for mold, mildew, and algae growth. High humidity (75-90% average), warm temperatures year-round, frequent afternoon rain, and abundant shade promote rapid organic growth on exterior surfaces. Central Florida homes typically need cleaning 30-50% more often than homes in drier climates.',
        link: '/about',
      },
      {
        q: 'What is the best time of year for pressure washing in Central Florida?',
        a: 'Pressure washing can be done year-round in Central Florida, but optimal times are: Spring (March-May) to remove winter buildup before humid summer, and Fall (October-November) after hurricane season. Avoid cleaning during active rain. Morning cleaning is best during summer to allow drying before afternoon thunderstorms.',
        link: '/contact',
      },
      {
        q: 'Do HOAs in Central Florida require pressure washing?',
        a: 'Many Central Florida HOAs have exterior maintenance requirements that include keeping homes free of mold, mildew, and staining. Failure to maintain your home\'s exterior can result in violation notices and fines. Regular pressure washing (typically annually) keeps your home compliant and avoids HOA issues. We can provide documentation of cleaning for HOA records.',
        link: '/residential',
      },
      {
        q: 'How does hurricane season affect pressure washing needs?',
        a: 'Hurricane season (June-November) can deposit debris, dirt, and organic matter on surfaces. Post-storm cleaning removes contaminants before they cause staining or damage. Pre-season gutter cleaning ensures proper drainage during heavy rains. We recommend scheduling gutter cleaning before June and a full exterior assessment after any significant storms.',
        link: '/services/gutter-cleaning',
      },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Pressure Washing',
    description: 'Questions about commercial and business pressure washing services.',
    questions: [
      {
        q: 'What is commercial pressure washing?',
        a: 'Commercial pressure washing serves businesses, property managers, and HOAs with large-scale exterior cleaning. Services include: storefronts, parking lots, sidewalks, building exteriors, dumpster pads, drive-thrus, gas stations, and common areas. Commercial projects require higher-capacity equipment, flexible scheduling (often after hours), and experience with various commercial surfaces.',
        link: '/services/commercial-pressure-washing',
      },
      {
        q: 'What are the advantages of commercial pressure washing?',
        a: 'Commercial pressure washing benefits include: 1) Enhanced professional image and curb appeal, 2) Reduced slip-and-fall liability from clean walkways, 3) Compliance with health codes (restaurants, medical), 4) Extended pavement and surface life, 5) Better tenant/customer satisfaction, 6) Property value protection. Regular maintenance costs less than neglect-related repairs.',
        link: '/commercial',
      },
      {
        q: 'Do you offer maintenance contracts for businesses?',
        a: 'Yes, we offer customized maintenance programs for commercial properties. Scheduled cleanings (monthly, quarterly, or annually) ensure consistent appearance and prevent buildup. Contract clients receive priority scheduling, discounted rates, and simplified billing. Contact us to discuss a maintenance plan tailored to your property\'s needs.',
        link: '/commercial',
      },
    ],
  },
];

// Generate FAQ schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap(category =>
    category.questions.map(q => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-blue-200">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><span aria-hidden="true">/</span></li>
                <li aria-current="page" className="text-white font-medium">FAQ</li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pressure Washing FAQ
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Get answers to your pressure washing questions from Central Florida's trusted exterior cleaning experts.
                Learn about costs, safe surfaces, cleaning frequency, and why professional service matters.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="bg-gray-100 py-6 border-b">
          <div className="container mx-auto px-4">
            <nav aria-label="FAQ categories">
              <ul className="flex flex-wrap justify-center gap-2">
                {faqCategories.map((category) => (
                  <li key={category.id}>
                    <a
                      href={`#${category.id}`}
                      className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
                    >
                      {category.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              {faqCategories.map((category) => (
                <article key={category.id} id={category.id} className="scroll-mt-24">
                  <header className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h2>
                    <p className="text-gray-600">{category.description}</p>
                  </header>

                  <dl className="space-y-6">
                    {category.questions.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                      >
                        <dt className="text-xl font-semibold text-gray-900 mb-3">
                          {item.q}
                        </dt>
                        <dd className="text-gray-700 leading-relaxed">
                          {item.a}
                          {item.link && (
                            <Link
                              href={item.link}
                              className="inline-flex items-center gap-1 text-blue-600 font-medium ml-2 hover:text-blue-700"
                            >
                              Learn more
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Contact us for a free consultation and personalized answers
              about your specific pressure washing needs in Central Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Contact Us
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

        {/* Related Resources */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Explore Our Services
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <li>
                <Link href="/services/house-washing" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                  <span className="font-medium text-gray-800">House Washing</span>
                </Link>
              </li>
              <li>
                <Link href="/services/roof-cleaning" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                  <span className="font-medium text-gray-800">Roof Cleaning</span>
                </Link>
              </li>
              <li>
                <Link href="/services/driveway-cleaning" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                  <span className="font-medium text-gray-800">Driveway Cleaning</span>
                </Link>
              </li>
              <li>
                <Link href="/services/soft-washing" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                  <span className="font-medium text-gray-800">Soft Washing</span>
                </Link>
              </li>
              <li>
                <Link href="/residential" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                  <span className="font-medium text-gray-800">Residential</span>
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                  <span className="font-medium text-gray-800">Commercial</span>
                </Link>
              </li>
              <li>
                <Link href="/locations" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                  <span className="font-medium text-gray-800">Service Areas</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
                  <span className="font-medium text-gray-800">Get a Quote</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
