// EXAMPLE HOME PAGE - Using new theme components
// To use this: Rename page.tsx to page-old.tsx (backup)
//              Then rename this file to page.tsx

import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import LocationsSection from '@/components/LocationsSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <LocationsSection />
      <CTASection variant="default" />
    </>
  );
}
