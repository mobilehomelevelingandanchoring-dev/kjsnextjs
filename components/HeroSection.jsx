import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden"
      aria-label="Professional Pressure Washing Services Hero Section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/30 rounded-full text-sm font-semibold backdrop-blur-sm">
              Professional Pressure Washing Services
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Property with{" "}
              <span className="text-yellow-300">Premium Cleaning</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Expert residential, commercial, and specialty pressure washing services
              in Deltona, FL. Soft wash, eco-friendly cleaning, roof & gutter care,
              driveways, decks, and more – we restore beauty and boost property value.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-200 border-2 border-white/30"
              >
                View Services
              </Link>
            </div>

            {/* Stats / Social Proof */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">10+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">5★</div>
                <div className="text-sm text-blue-200">Rated Service</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative">
            <Image
              src="/hero-pressure-washing.webp"
              alt="Professional pressure washing cleaning a driveway and home exterior"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl object-cover"
              priority
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-blue-900 px-6 py-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">Eco-Friendly</div>
              <div className="text-sm">Solutions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Structured Data for SEO / Topical Authority */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Professional Pressure Washing Services",
            "description":
              "Expert residential, commercial, and specialty pressure washing services. Soft wash, eco-friendly cleaning, roof & gutter maintenance, driveways, decks, and more.",
            "publisher": {
              "@type": "Organization",
              "name": "KJS Supreme Pressure Washing LLC",
              "logo": {
                "@type": "ImageObject",
                "url": "https://kjsupremepressurewashing.com//logo.webp"
              }
            },
            "mainEntity": [
              {
                "@type": "Service",
                "name": "Residential Pressure Washing",
                "description": "Full home exterior cleaning including siding, driveways, decks, and patios."
              },
              {
                "@type": "Service",
                "name": "Commercial Pressure Washing",
                "description": "Offices, retail stores, warehouses, parking lots, and more."
              },
              {
                "@type": "Service",
                "name": "Soft Wash",
                "description": "Low-pressure cleaning for delicate surfaces like roofs and painted areas."
              },
              {
                "@type": "Service",
                "name": "Eco-Friendly Cleaning",
                "description": "Safe cleaning solutions for plants, pets, and landscaping."
              },
              {
                "@type": "Service",
                "name": "Specialty Services",
                "description": "Roof cleaning, gutter cleaning, graffiti removal, and deck restoration."
              }
            ]
          })
        }}
      />
    </section>
  );
}
