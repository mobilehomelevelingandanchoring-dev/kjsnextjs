import Link from 'next/link';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Concrete Cleaning Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "KJS Supreme Pressure Washing LLC",
    "telephone": "+1-213-841-6924"
  },
  "areaServed": ["Deltona", "Orlando", "Sanford", "Lake Mary", "Daytona Beach"],
  "description": "Deep concrete cleaning for driveways, garage floors, warehouse floors. Oil removal, efflorescence treatment, surface preparation."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you remove oil stains from concrete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Petroleum-based oil requires alkaline degreaser (pH 13-14) with hot water extraction. Apply degreaser, allow 15-minute dwell for saponification, then pressure wash at 3,500-4,000 PSI with 200°F water. Old stains need poultice treatment: mix degreaser with absorbent clay, apply 1/4 inch thick, cover with plastic, let cure 24 hours, then pressure wash."
      }
    },
    {
      "@type": "Question",
      "name": "What causes white powder on concrete surfaces?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Efflorescence is calcium carbonate (CaCO₃) crystallization from subsurface moisture migration. Water dissolves calcium hydroxide in concrete, carries it to surface, evaporates leaving white salt deposits. Florida's porous limestone aggregate plus high water table accelerates formation. Requires acidic cleaner (pH 2-4) to dissolve deposits. Sealing prevents recurrence."
      }
    },
    {
      "@type": "Question",
      "name": "Can concrete be cleaned without etching the surface?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Surface etching occurs from excessive pressure or incorrect nozzle angle. Concrete tolerates 3,000-4,000 PSI when applied correctly. Use 15-25 degree fan nozzle, maintain 12-inch standoff, keep wand moving. Zero-degree nozzles or holding too close creates visible erosion lines and exposes aggregate. Surface cleaner attachments prevent etching through controlled pressure distribution."
      }
    },
    {
      "@type": "Question",
      "name": "Why does Florida concrete crack and spall faster?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Florida's limestone aggregate is more porous than northern granite aggregate. High water table plus seasonal flooding causes continuous wet-dry cycling. Chloride intrusion from coastal salt air penetrates concrete, corroding rebar and causing spalling. UV degradation weakens surface cement paste. Regular cleaning and sealing extends lifespan by reducing moisture penetration."
      }
    },
    {
      "@type": "Question",
      "name": "How often should warehouse concrete floors be cleaned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Industrial floors need quarterly deep cleaning for safety compliance and forklift traction. Food processing facilities require monthly cleaning per FDA standards. Automotive shops benefit from bi-monthly degreasing to prevent slip hazards. Retail spaces typically need semi-annual cleaning unless high traffic or outdoor exposure necessitates quarterly service."
      }
    },
    {
      "@type": "Question",
      "name": "What is concrete surface preparation before coating?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Epoxy coating requires CSP 3-5 (Concrete Surface Profile) via mechanical abrasion or acid etching. Pressure washing alone insufficient—creates CSP 1-2. We combine 4,000 PSI cleaning with rotary surface grinder or scarifier to achieve proper profile. Surface must be clean, dry, and properly profiled for coating adhesion. Moisture testing required before coating application."
      }
    }
  ]
};

export const metadata = {
  title: 'Industrial Concrete Cleaning Florida | Warehouse Floors | Surface Prep',
  description: 'Commercial concrete pressure washing in Central Florida. Deep cleaning for garage floors, warehouse concrete, surface preparation for coatings.',
};

export default function ConcreteCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        <article>
          <header>
            <h1>Industrial Concrete Cleaning in Central Florida</h1>
            <p>Deep cleaning for commercial concrete surfaces. Garage floors, warehouse facilities, surface preparation for epoxy coatings. Oil removal, efflorescence treatment, and compliance cleaning.</p>
          </header>

          <section>
            <h2>Industrial Concrete Contamination Types</h2>

            <h3>Petroleum Product Penetration</h3>
            <p>Motor oil, hydraulic fluid, and grease penetrate concrete porosity 1/8 to 1/4 inch deep. Simple surface cleaning insufficient. Requires chemical saponification (converting oil to water-soluble soap) through alkaline degreaser application. Hot water (180-200°F) improves penetration and emulsification.</p>
            <p>Concrete's capillary pore structure (5-10 microns) traps petroleum molecules. Fresh spills respond to degreaser plus pressure washing. Aged stains (6+ months) need poultice treatment: absorbent clay mixed with degreaser, applied thick, covered with plastic, allowed to cure 24-48 hours drawing oil upward for removal.</p>

            <h3>Efflorescence Salt Migration</h3>
            <p>White crystalline deposits of calcium carbonate, calcium sulfate, or sodium sulfate. Formed when water migrates through concrete carrying dissolved salts to surface where evaporation leaves crystal deposits. Florida's porous limestone aggregate plus high water table creates chronic efflorescence.</p>
            <p>Primary efflorescence occurs during concrete curing (first 28 days). Secondary efflorescence results from groundwater intrusion, especially after flooding events. Requires acidic cleaning (muriatic acid 10-15% or phosphoric acid) to dissolve calcium-based salts. Alkaline cleaners ineffective.</p>

            <h3>Rust Staining from Rebar Exposure</h3>
            <p>Iron oxide (Fe₂O₃) creates orange-brown staining when rebar corrodes. Chloride intrusion from coastal salt air penetrates concrete cover, reaching rebar and initiating electrochemical corrosion. Staining indicates structural concern beyond cosmetic issue.</p>
            <p>Treatment requires oxalic acid or sodium hydrosulfite to reduce iron oxide to colorless ferrous state. However, surface cleaning doesn't address underlying rebar corrosion. Concrete patching and rebar coating necessary to prevent recurring stains and structural failure.</p>

            <h3>Tire Rubber and Carbon Black Deposits</h3>
            <p>Parking areas accumulate styrene-butadiene rubber plus carbon black filler from tire contact. Heat and friction bond rubber to concrete. Black tracking patterns follow vehicle paths. Standard pressure washing spreads deposits.</p>
            <p>Removal requires alkaline cleaner (pH 13-14) that breaks down rubber polymers, combined with hot water (180°F+) at 3,500-4,000 PSI. Surface grinder mechanically removes severe buildup. Common in warehouse loading docks, parking garages, automotive shops.</p>
          </section>

          <section>
            <h2>Concrete Surface Profile (CSP) Standards</h2>
            <p>International Concrete Repair Institute defines surface profile requirements for coating adhesion. CSP scale ranges 1-10, measuring surface texture from smooth to aggressive.</p>

            <dl>
              <dt>CSP 1-2: Light Cleaning Only</dt>
              <dd>Achieved through pressure washing (3,000-4,000 PSI). Removes surface contaminants but minimal texture. Insufficient for epoxy coating adhesion. Suitable only for stain removal and general maintenance cleaning.</dd>

              <dt>CSP 3-4: Coating Preparation Standard</dt>
              <dd>Requires mechanical abrading via rotary surface grinder or shot blasting. Pressure washing pre-cleans surface before mechanical profiling. Provides adequate texture for standard epoxy, polyurethane, or polyaspartic coatings. Most commercial coating specs require CSP 3 minimum.</dd>

              <dt>CSP 5-7: Heavy-Duty Industrial Coatings</dt>
              <dd>Achieved through scarifying, scabbling, or aggressive shot blasting. Exposes aggregate and creates deep texture. Required for thick-build epoxies, chemical-resistant coatings, or applications with high adhesion demands. Common in food processing, chemical plants, heavy manufacturing.</dd>
            </dl>

            <p>Pressure washing alone never achieves CSP 3+. Claims of "coating-ready" pressure washing misleading. Proper surface prep combines pressure washing (contamination removal) with mechanical profiling (texture creation).</p>
          </section>

          <section>
            <h2>Florida-Specific Concrete Degradation Factors</h2>

            <h3>Alkali-Silica Reaction (ASR) from Limestone Aggregate</h3>
            <p>Florida concrete uses limestone aggregate containing reactive silica. When exposed to moisture plus alkali cement, silica reacts forming expansive gel. Gel absorbs water, swells, creates internal pressure causing map cracking and surface deterioration.</p>
            <p>Humid climate plus frequent rain provide moisture for continuous ASR. Appears as random map cracking with white gel exudation. No cure exists—only mitigation through moisture control. Sealing slows but doesn't stop reaction. Affected concrete has reduced service life.</p>

            <h3>Sulfate Attack from Groundwater</h3>
            <p>Florida groundwater often contains sulfates (SO₄²⁻) from limestone dissolution. Sulfates react with calcium aluminate hydrate in concrete, forming ettringite (expansive mineral) that cracks concrete from within. Appears as surface scaling and crumbling.</p>
            <p>Commercial facilities near wetlands or with high water tables experience accelerated sulfate attack. Requires sulfate-resistant cement (Type V) for new construction. Existing concrete benefits from sealing to reduce groundwater exposure. Cleaning removes surface damage but doesn't address ongoing attack.</p>

            <h3>Chloride Penetration and Reinforcement Corrosion</h3>
            <p>Coastal Florida experiences airborne chloride deposition from salt spray. Chlorides penetrate concrete, reaching rebar and initiating corrosion despite alkaline protection. Corrosion products occupy 2-6 times original volume, creating internal pressure that spalls concrete cover.</p>
            <p>Manifests as rust staining, cracking parallel to rebar, and concrete cover delamination. High-pressure washing can worsen damage by driving chlorides deeper. Proper cleaning includes chloride extraction treatment before pressure washing on deteriorated concrete.</p>
          </section>

          <section>
            <h2>5-Step Deep Concrete Cleaning Process</h2>

            <h3>Step 1: Contamination Analysis and Testing</h3>
            <p>Identify contaminant types: petroleum products, biological growth, mineral deposits, chemical stains. Test small area with appropriate cleaner to verify effectiveness. Check concrete condition: cracking, spalling, delamination, hollow spots (tapping test). Determine if structural issues require repair before cleaning.</p>

            <h3>Step 2: Chemical Pre-Treatment Application</h3>
            <p>Apply contaminant-specific cleaner at proper dilution. Oil/grease: alkaline degreaser pH 13-14. Efflorescence: acidic cleaner pH 2-4. Rust: oxalic acid or sodium hydrosulfite. Biological: sodium hypochlorite 10-15%. Allow full dwell time (typically 15-20 minutes) for chemical reaction completion. Prevent cleaner drying on surface.</p>

            <h3>Step 3: Hot Water High-Pressure Extraction</h3>
            <p>Use 3,500-4,000 PSI with 180-200°F water for maximum cleaning efficiency. Hot water breaks molecular bonds, improves chemical activity, and melts petroleum products. Surface cleaner attachment (dual rotating nozzles under shroud) provides uniform cleaning without wand lines. Clean at consistent speed maintaining 2-inch overlap between passes.</p>

            <h3>Step 4: Neutralization and Rinse</h3>
            <p>If acidic cleaner used, neutralize with baking soda solution (prevents acid damage to adjacent vegetation and drains). If alkaline cleaner used, mild acid rinse (white vinegar 5% acetic acid) prevents residue that interferes with sealer adhesion. Final rinse with clean water at 2,500 PSI removes all chemical residue.</p>

            <h3>Step 5: Surface Evaluation and Protection Recommendation</h3>
            <p>Inspect cleaned surface under good lighting. Document remaining stains or damage requiring additional treatment. Measure moisture content if coating planned (must be below 4% per ASTM F2170). Recommend sealing, coating, or repair based on concrete condition and intended use. Provide maintenance schedule for future cleaning cycles.</p>
          </section>

          <section>
            <h2>Warehouse and Industrial Floor Safety Compliance</h2>
            <p>OSHA 1910.22(a)(1) requires walking/working surfaces maintained free of hazards. Oil, grease, and slippery biofilm create cited violations. Regular cleaning prevents slip hazards and maintains compliance.</p>
            <p>Food processing facilities must follow FDA Food Safety Modernization Act requiring sanitary conditions. Concrete floors need monthly cleaning minimum. Cleaning records required for FDA inspection compliance.</p>
            <p>Forklift traffic requires adequate traction. Oil contamination reduces tire grip causing accidents. Clean concrete provides predictable traction for material handling equipment. Insurance carriers may mandate cleaning schedules for coverage continuation.</p>
          </section>

          <section>
            <h2>Concrete Cleaning FAQ</h2>

            <details>
              <summary>How do you remove oil stains from concrete?</summary>
              <p>Petroleum-based oil requires alkaline degreaser (pH 13-14) with hot water extraction. Apply degreaser, allow 15-minute dwell for saponification, then pressure wash at 3,500-4,000 PSI with 200°F water. Old stains need poultice treatment: mix degreaser with absorbent clay, apply 1/4 inch thick, cover with plastic, let cure 24 hours, then pressure wash.</p>
            </details>

            <details>
              <summary>What causes white powder on concrete surfaces?</summary>
              <p>Efflorescence is calcium carbonate (CaCO₃) crystallization from subsurface moisture migration. Water dissolves calcium hydroxide in concrete, carries it to surface, evaporates leaving white salt deposits. Florida's porous limestone aggregate plus high water table accelerates formation. Requires acidic cleaner (pH 2-4) to dissolve deposits. Sealing prevents recurrence.</p>
            </details>

            <details>
              <summary>Can concrete be cleaned without etching the surface?</summary>
              <p>Surface etching occurs from excessive pressure or incorrect nozzle angle. Concrete tolerates 3,000-4,000 PSI when applied correctly. Use 15-25 degree fan nozzle, maintain 12-inch standoff, keep wand moving. Zero-degree nozzles or holding too close creates visible erosion lines and exposes aggregate. Surface cleaner attachments prevent etching through controlled pressure distribution.</p>
            </details>

            <details>
              <summary>Why does Florida concrete crack and spall faster?</summary>
              <p>Florida's limestone aggregate is more porous than northern granite aggregate. High water table plus seasonal flooding causes continuous wet-dry cycling. Chloride intrusion from coastal salt air penetrates concrete, corroding rebar and causing spalling. UV degradation weakens surface cement paste. Regular cleaning and sealing extends lifespan by reducing moisture penetration.</p>
            </details>

            <details>
              <summary>How often should warehouse concrete floors be cleaned?</summary>
              <p>Industrial floors need quarterly deep cleaning for safety compliance and forklift traction. Food processing facilities require monthly cleaning per FDA standards. Automotive shops benefit from bi-monthly degreasing to prevent slip hazards. Retail spaces typically need semi-annual cleaning unless high traffic or outdoor exposure necessitates quarterly service.</p>
            </details>

            <details>
              <summary>What is concrete surface preparation before coating?</summary>
              <p>Epoxy coating requires CSP 3-5 (Concrete Surface Profile) via mechanical abrasion or acid etching. Pressure washing alone insufficient—creates CSP 1-2. We combine 4,000 PSI cleaning with rotary surface grinder or scarifier to achieve proper profile. Surface must be clean, dry, and properly profiled for coating adhesion. Moisture testing required before coating application.</p>
            </details>
          </section>

          <section>
            <h2>Related Services</h2>
            <nav>
              <ul>
                <li><Link href="/services/driveway-cleaning">Driveway Cleaning</Link></li>
                <li><Link href="/services/sidewalk-cleaning">Sidewalk Cleaning</Link></li>
                <li><Link href="/services/commercial-pressure-washing">Commercial Pressure Washing</Link></li>
              </ul>
            </nav>
          </section>
        </article>
      </main>
    </>
  );
}
