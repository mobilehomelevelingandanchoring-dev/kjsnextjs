import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderWithDropdowns from "@/components/HeaderWithDropdowns";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kjsupremepressurewashing.com"),
  title: {
    default: "KJS Supreme Pressure Washing LLC | Professional Pressure Washing Services",
    template: "%s | KJS Supreme Pressure Washing",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description: "Professional residential and commercial pressure washing services in Central Florida. Serving Deltona, Orlando, Sanford, Daytona Beach & 30+ cities. Free estimates!",
  keywords: [
    "pressure washing",
    "power washing",
    "house washing",
    "driveway cleaning",
    "roof cleaning",
    "soft washing",
    "Central Florida",
    "Deltona FL",
    "Orlando FL",
  ],
  authors: [{ name: "KJS Supreme Pressure Washing LLC" }],
  creator: "KJS Supreme Pressure Washing LLC",
  publisher: "KJS Supreme Pressure Washing LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kjsupremepressurewashing.com",
    siteName: "KJS Supreme Pressure Washing LLC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KJS Supreme Pressure Washing - Professional Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KJS Supreme Pressure Washing LLC",
    description: "Professional pressure washing services in Central Florida",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://kjsupremepressurewashing.com",
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Deltona",
    "geo.position": "28.9005;-81.2637",
    "ICBM": "28.9005, -81.2637",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData data={[generateOrganizationSchema(), generateWebsiteSchema()]} />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        <HeaderWithDropdowns />
        <main className="min-h-screen">
          {children}
        </main>
        <TrustSection />
        <Footer />
      </body>
    </html>
  );
}
