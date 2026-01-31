import CTASection from '@/components/CTASection';

export default function ClermontPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Pressure Washing in Clermont, FL</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Residential & Commercial Cleaning in Clermont, FL
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors">
              Get Free Quote
            </a>
            <a href="tel:+12138416924" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-colors border-2 border-white/30">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professional Pressure Washing Services in Clermont</h2>
            <p className="text-lg text-gray-700 mb-4">
              We serve Clermont with top-quality pressure washing for homes and businesses. From house exteriors to driveways, we deliver exceptional results.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Residential Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ House washing</li>
                  <li>✓ Driveway cleaning</li>
                  <li>✓ Roof cleaning</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Commercial Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Building exteriors</li>
                  <li>✓ Parking lots</li>
                  <li>✓ Storefronts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection variant="default" />
    </>
  );
}
