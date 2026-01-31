import Link from 'next/link';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Window Cleaning Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "KJS Supreme Pressure Washing LLC",
    "telephone": "+1-213-841-6924"
  },
  "areaServed": ["Deltona", "Orlando", "Sanford", "Lake Mary", "Daytona Beach"],
  "description": "Professional exterior window cleaning, hard water stain removal, screen restoration, track and sill cleaning for residential and commercial properties."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you remove hard water stains from windows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hard water deposits are calcium carbonate (CaCO₃) and magnesium carbonate (MgCO₃) minerals. Removal requires acidic cleaner (pH 2-3) dissolving mineral bonds. We use dilute hydrochloric acid or specialized glass restoration compounds. Apply, agitate with scrub pad, rinse thoroughly. Severe etching (mineral penetration into glass surface) requires wet sanding with 0000 steel wool or cerium oxide polishing compound. Prevention: water softener or purified water for final rinse."
      }
    },
    {
      "@type": "Question",
      "name": "Why do Florida windows get so dirty so fast?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Florida's climate creates unique window contamination. Airborne pollen from oak (February-May) and pine (March-April) produces sticky yellow coating. High humidity causes water condensation trapping dust and salt spray. Sprinkler overspray deposits dissolved minerals. Love bugs (May, September) create acidic residue that etches glass if not removed promptly. Monthly cleaning recommended in Florida vs quarterly in northern climates."
      }
    },
    {
      "@type": "Question",
      "name": "Can you clean second-story windows safely?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We use water-fed pole systems with purified water (deionized or reverse osmosis) reaching 40+ feet. Eliminates ladder risk. Purified water contains zero dissolved minerals—dries spot-free without squeegee. Bristle brush scrubs while pure water rinses. For ground-floor windows, traditional squeegee technique provides superior streak-free results. High-rise buildings require rope access or boom lift equipment."
      }
    },
    {
      "@type": "Question",
      "name": "What causes screen oxidation and can it be reversed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aluminum screen frames develop white powdery oxidation (aluminum oxide, Al₂O₃) from UV exposure plus salt air. Chalking occurs when protective coating breaks down. Fiberglass mesh develops gray discoloration from embedded dirt. Restoration: scrub screens with soft brush, mild detergent (pH 7-8), rinse thoroughly. Oxidation requires gentle abrasive (Bon Ami, baking soda paste). Severely deteriorated screens need replacement—cleaning doesn't restore structural integrity of brittle mesh."
      }
    },
    {
      "@type": "Question",
      "name": "How often should commercial windows be cleaned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Storefront windows need monthly cleaning for curb appeal and product visibility. Office buildings benefit from quarterly exterior cleaning, bi-annual interior. Restaurants require monthly exterior cleaning—grease vapor from exhaust fans attracts dirt. Medical facilities need monthly cleaning for professional appearance. High-pollen season (February-May) may require additional cleanings. Coastal properties need more frequent service due to salt spray accumulation."
      }
    },
    {
      "@type": "Question",
      "name": "Will pressure washing damage Low-E windows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Low-E (low-emissivity) windows have microscopic metallic coating on interior glass surface. High pressure or harsh chemicals damage coating causing permanent discoloration. Exterior glass safe for gentle pressure washing (under 500 PSI) with neutral pH cleaner. Interior Low-E surface requires hand washing with soft cloth and mild detergent. Warranty typically voids if abrasive cleaners or high pressure used. Always verify Low-E coating location before cleaning."
      }
    }
  ]
};

export const metadata = {
  title: 'Window Cleaning Central Florida | Hard Water Removal | Screen Restoration',
  description: 'Professional window cleaning in Deltona, Orlando, Sanford. Hard water stain removal, screen cleaning, track restoration services.',
};

export default function WindowCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        <article>
          <header>
            <h1>Professional Window Cleaning in Central Florida</h1>
            <p>Exterior window cleaning, hard water stain removal, screen restoration, and track cleaning for residential and commercial properties. Crystal clear, streak-free results.</p>
          </header>

          <section>
            <h2>Florida Window Contamination Types</h2>

            <h3>Hard Water Mineral Deposits</h3>
            <p>Florida groundwater contains 120-180 ppm (parts per million) dissolved minerals—considered "hard" water. Sprinkler overspray deposits calcium carbonate (CaCO₃), magnesium carbonate (MgCO₃), and calcium sulfate (CaSO₄) on glass. Water evaporates leaving white crusty deposits bonded to glass surface.</p>
            <p>Fresh deposits (under 30 days) remove with acidic glass cleaner (pH 2-3). Aged deposits (6+ months) penetrate glass surface creating permanent etching. Requires wet sanding with 0000 steel wool plus cerium oxide polishing compound. Severe etching irreversible—glass replacement necessary. Prevention: adjust sprinkler heads away from windows, install water softener, use purified water rinse after cleaning.</p>

            <h3>Pollen Accumulation and Adhesion</h3>
            <p>Central Florida experiences dual pollen seasons. Spring (February-May): oak pollen produces sticky yellow coating containing protein allergens that bond to glass when wet. Summer (March-April): pine pollen releases oily resin causing streaking during rain. Fall (August-November): ragweed pollen though less adhesive still creates haze.</p>
            <p>Pollen mixed with morning dew creates paste requiring surfactant cleaner to break protein/resin bonds. Water alone smears pollen. Use alkaline cleaner (pH 9-10) for protein dissolution, then neutral pH rinse. Squeegee technique prevents streaking. Pollen season cleaning frequency: bi-weekly for pollen-facing exposures (east/south), monthly for north/west windows.</p>

            <h3>Salt Spray and Coastal Oxidation</h3>
            <p>Properties within 10 miles of coast experience airborne sodium chloride (NaCl) deposition. Salt spray creates white film on glass plus corrosion on aluminum frames. Chloride accelerates oxidation of metal window components—frames, tracks, and screens develop white powdery aluminum oxide (Al₂O₃).</p>
            <p>Salt removal requires thorough rinsing with deionized water. Tap water rinse leaves mineral residue. Frame oxidation cleaning: soft brush with baking soda paste (mild abrasive) or specialized aluminum brightener. Rinse completely—residual salt attracts moisture causing rapid re-soiling.</p>

            <h3>Love Bug Acidic Residue</h3>
            <p>Plecia nearctica (love bugs) swarm May and September. Dead bugs on windows decompose producing acidic compounds (pH 4-5) that etch glass if left over 48 hours. Creates permanent clouding requiring glass polishing or replacement for severe etching.</p>
            <p>Fresh bug residue (under 2 days) removes with alkaline cleaner neutralizing acid, plus gentle scrubbing. Dried residue (3+ days) requires soaking with wet towel plus bug remover solvent. Never dry-scrape bugs—abrasive exoskeletons scratch glass. Immediate removal after swarm events critical to prevent etching.</p>
          </section>

          <section>
            <h2>Window Cleaning Methods and Equipment</h2>

            <h3>Traditional Squeegee Technique (Ground Level)</h3>
            <p>Professional squeegee method: apply cleaning solution with microfiber applicator, scrub with appropriate pressure, squeegee in overlapping strokes (top to bottom or side to side), wipe squeegee blade between strokes, detail edges with lint-free towel. Provides superior streak-free results on accessible windows.</p>
            <p>Blade material critical: natural rubber for cool weather (stays soft), synthetic rubber for hot Florida sun (resists degradation). Replace blade every 30-60 days—worn blades create streaks. Solution: dish soap (2-3 drops per gallon) or professional window cleaner. Avoid ammonia-based cleaners on tinted windows—causes purple discoloration.</p>

            <h3>Water-Fed Pole System (High Windows)</h3>
            <p>Telescoping pole (up to 40 feet) with soft bristle brush and water jets. Requires purified water: reverse osmosis (RO) or deionization (DI) removes 99.9% of dissolved minerals. Zero mineral content allows spot-free air drying—no squeegee needed. Brush scrubs while pure water rinses.</p>
            <p>Advantages: eliminates ladder risk, faster for multi-story buildings, cleans frames and screens simultaneously. Limitations: requires pure water system (expensive equipment), ineffective on heavily soiled ground-floor windows (squeegee superior), cannot remove hard water etching. Best for routine maintenance on second-story and higher windows.</p>

            <h3>Pressure Washing for Exterior Frames</h3>
            <p>Low pressure (300-500 PSI) cleans vinyl and aluminum window frames, tracks, and sills. Higher pressure (over 800 PSI) forces water past window seals causing interior leaks. Use fan nozzle (25-40 degrees) maintaining 18-inch standoff. Never aim directly at glass—creates water spots requiring re-cleaning.</p>
            <p>Frame material considerations: vinyl frames tolerate 500 PSI, aluminum 500 PSI, wood frames maximum 300 PSI to prevent paint damage. Clean tracks and weep holes (drainage ports at bottom of frame) to prevent water accumulation and mold growth. Rinse with purified water if available to prevent mineral deposits in tracks.</p>
          </section>

          <section>
            <h2>Screen Cleaning and Restoration</h2>

            <h3>Screen Material Types</h3>
            <p>Fiberglass mesh: most common, 18x16 weave (18 strands per inch horizontal, 16 vertical), gray or charcoal color. Develops embedded dirt requiring scrubbing. Aluminum mesh: stronger but prone to oxidation creating white powder. Pet-resistant screen: vinyl-coated polyester, thicker strands, more durable but harder to clean. Solar screens: dense weave blocks 80-90% UV, requires gentle cleaning to maintain coating.</p>

            <h3>Screen Oxidation Reversal</h3>
            <p>Aluminum screen frames oxidize from UV plus humidity creating aluminum oxide (Al₂O₃) white chalky coating. Removal: spray with water, scrub with soft brush and baking soda paste (mild abrasive), rinse thoroughly. Commercial aluminum brighteners (oxalic acid based) more effective but require careful handling and complete rinsing.</p>
            <p>Fiberglass mesh discoloration from embedded dirt: soak with all-purpose cleaner (pH 9-10), scrub both sides with soft brush, rinse with garden hose pressure. Avoid high pressure—damages mesh. Severely brittle or torn screens require replacement—cleaning won't restore structural integrity.</p>

            <h3>Screen Cleaning Process</h3>
            <p>Remove screens from windows for thorough cleaning. Lay flat on clean surface (driveway, patio). Spray with water, apply all-purpose cleaner or dish soap solution, scrub both sides with soft brush in circular motion, rinse completely until water runs clear. Air dry before reinstalling—wet screens difficult to handle and water drips during installation.</p>
            <p>Alternatively clean in place (screens non-removable): spray exterior side, scrub gently, rinse carefully controlling water direction to prevent interior water intrusion. Less effective than removed cleaning but suitable for monthly maintenance between deep cleans.</p>
          </section>

          <section>
            <h2>Track and Sill Restoration</h2>

            <h3>Window Track Contamination</h3>
            <p>Tracks accumulate dirt, dead insects, pollen, and paint chips. Weep holes (small drainage ports) clog causing water backup and interior leaks. Mold growth common in perpetually damp tracks from poor drainage. Sliding windows malfunction from track debris preventing smooth operation.</p>
            <p>Cleaning process: vacuum loose debris, spray with all-purpose cleaner, scrub with small brush (old toothbrush effective), flush with water while ensuring weep holes drain freely, dry with towel. Clear weep holes using thin wire or compressed air—critical for preventing water intrusion during rain.</p>

            <h3>Exterior Sill Cleaning</h3>
            <p>Concrete or stone sills develop algae, mildew, and efflorescence (white mineral deposits). Painted wood sills accumulate dirt embedded in weathered paint. Cleaning: pressure wash at 500 PSI with fan nozzle for masonry sills, hand scrub with soft brush for wood sills to prevent paint damage.</p>
            <p>Algae removal requires sodium hypochlorite (10% solution) killing organisms before pressure washing. Efflorescence needs acidic cleaner (pH 2-4) dissolving calcium deposits. Wood sill protection: clean, allow to dry 48 hours, apply exterior primer and paint to prevent moisture penetration and wood rot.</p>
          </section>

          <section>
            <h2>5-Step Professional Window Cleaning Process</h2>

            <h3>Step 1: Pre-Cleaning Inspection</h3>
            <p>Identify window types: single-pane, double-pane, Low-E coating, tinted, tempered. Check for existing damage: cracks, seal failure (condensation between panes), scratches, hard water etching. Document condition with photos. Test small area with cleaning solution to verify compatibility—especially important for tinted and Low-E windows.</p>

            <h3>Step 2: Frame and Screen Cleaning</h3>
            <p>Remove screens, clean separately per process above. Pressure wash frames at 300-500 PSI removing loose dirt, pollen, and cobwebs. Scrub oxidized aluminum with baking soda paste. Clean tracks with brush and vacuum, ensuring weep holes clear. Rinse frames with purified water if available preventing mineral deposits.</p>

            <h3>Step 3: Hard Water Stain Treatment</h3>
            <p>Apply acidic glass cleaner (pH 2-3) to mineral deposits. Allow 5-minute dwell time for acid to dissolve calcium bonds. Agitate with white scrub pad (non-scratch). Rinse thoroughly. Severe etching requires wet sanding: spray glass with soapy water, gently rub with 0000 steel wool, rinse, polish with cerium oxide compound on buffing pad.</p>

            <h3>Step 4: Glass Cleaning</h3>
            <p>Ground-floor accessible windows: apply cleaning solution with microfiber applicator, scrub in circular motion, squeegee using overlapping strokes, detail edges with lint-free towel. High windows: scrub with water-fed pole using purified water, allow to air dry spot-free. Change squeegee direction (horizontal vs vertical) between inside and outside to identify which side has streaks during inspection.</p>

            <h3>Step 5: Final Inspection and Detail</h3>
            <p>Inspect from inside and outside in good lighting (natural light best). Remove any remaining streaks, water spots, or missed areas. Reinstall cleaned dry screens. Wipe sills and frames dry preventing water stains. Document completion with photos showing crystal clear results.</p>
          </section>

          <section>
            <h2>Window Cleaning Frequency Guidelines</h2>
            <dl>
              <dt>Residential Windows</dt>
              <dd>Exterior cleaning quarterly (every 3 months) for maintenance. Bi-monthly during heavy pollen season (February-May). Annual hard water treatment if sprinkler overspray occurs. Interior cleaning annually or as needed. Coastal properties benefit from monthly exterior cleaning due to salt spray.</dd>

              <dt>Commercial Storefronts</dt>
              <dd>Monthly exterior cleaning maintains curb appeal and product visibility. Bi-weekly during high-pollen season. Daily quick wipe of entry doors removing fingerprints and smudges. Interior weekly or bi-weekly depending on customer traffic.</dd>

              <dt>Office Buildings</dt>
              <dd>Quarterly exterior cleaning for professional appearance. Bi-annual interior cleaning. Ground-floor windows need more frequent attention from landscaping debris and sprinkler contact. Upper floors cleaned annually unless visible soiling from weather events.</dd>

              <dt>Medical and Professional Offices</dt>
              <dd>Monthly exterior cleaning projects professional image. Bi-weekly during pollen season. Interior monthly in patient/client areas. Clean immediately after construction or renovation producing dust contamination.</dd>
            </dl>
          </section>

          <section>
            <h2>Window Cleaning FAQ</h2>

            <details>
              <summary>How do you remove hard water stains from windows?</summary>
              <p>Hard water deposits are calcium carbonate (CaCO₃) and magnesium carbonate (MgCO₃) minerals. Removal requires acidic cleaner (pH 2-3) dissolving mineral bonds. We use dilute hydrochloric acid or specialized glass restoration compounds. Apply, agitate with scrub pad, rinse thoroughly. Severe etching (mineral penetration into glass surface) requires wet sanding with 0000 steel wool or cerium oxide polishing compound. Prevention: water softener or purified water for final rinse.</p>
            </details>

            <details>
              <summary>Why do Florida windows get so dirty so fast?</summary>
              <p>Florida's climate creates unique window contamination. Airborne pollen from oak (February-May) and pine (March-April) produces sticky yellow coating. High humidity causes water condensation trapping dust and salt spray. Sprinkler overspray deposits dissolved minerals. Love bugs (May, September) create acidic residue that etches glass if not removed promptly. Monthly cleaning recommended in Florida vs quarterly in northern climates.</p>
            </details>

            <details>
              <summary>Can you clean second-story windows safely?</summary>
              <p>Yes. We use water-fed pole systems with purified water (deionized or reverse osmosis) reaching 40+ feet. Eliminates ladder risk. Purified water contains zero dissolved minerals—dries spot-free without squeegee. Bristle brush scrubs while pure water rinses. For ground-floor windows, traditional squeegee technique provides superior streak-free results. High-rise buildings require rope access or boom lift equipment.</p>
            </details>

            <details>
              <summary>What causes screen oxidation and can it be reversed?</summary>
              <p>Aluminum screen frames develop white powdery oxidation (aluminum oxide, Al₂O₃) from UV exposure plus salt air. Chalking occurs when protective coating breaks down. Fiberglass mesh develops gray discoloration from embedded dirt. Restoration: scrub screens with soft brush, mild detergent (pH 7-8), rinse thoroughly. Oxidation requires gentle abrasive (Bon Ami, baking soda paste). Severely deteriorated screens need replacement—cleaning doesn't restore structural integrity of brittle mesh.</p>
            </details>

            <details>
              <summary>How often should commercial windows be cleaned?</summary>
              <p>Storefront windows need monthly cleaning for curb appeal and product visibility. Office buildings benefit from quarterly exterior cleaning, bi-annual interior. Restaurants require monthly exterior cleaning—grease vapor from exhaust fans attracts dirt. Medical facilities need monthly cleaning for professional appearance. High-pollen season (February-May) may require additional cleanings. Coastal properties need more frequent service due to salt spray accumulation.</p>
            </details>

            <details>
              <summary>Will pressure washing damage Low-E windows?</summary>
              <p>Yes. Low-E (low-emissivity) windows have microscopic metallic coating on interior glass surface. High pressure or harsh chemicals damage coating causing permanent discoloration. Exterior glass safe for gentle pressure washing (under 500 PSI) with neutral pH cleaner. Interior Low-E surface requires hand washing with soft cloth and mild detergent. Warranty typically voids if abrasive cleaners or high pressure used. Always verify Low-E coating location before cleaning.</p>
            </details>
          </section>

          <section>
            <h2>Related Services</h2>
            <nav>
              <ul>
                <li><Link href="/services/house-washing">House Washing</Link></li>
                <li><Link href="/services/commercial-pressure-washing">Commercial Pressure Washing</Link></li>
                <li><Link href="/services/gutter-cleaning">Gutter Cleaning</Link></li>
              </ul>
            </nav>
          </section>
        </article>
      </main>
    </>
  );
}
