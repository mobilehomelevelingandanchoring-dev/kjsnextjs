# Component Quick Reference

## Import Statements

```jsx
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import LocationsSection from '@/components/LocationsSection';
import CTASection from '@/components/CTASection';
```

---

## Components

### 1. HeroSection
```jsx
<HeroSection />
```
**What it shows:**
- Large hero banner with gradient background
- Business headline and description
- "Get Free Quote" and "View Services" buttons
- Stats: 500+ Clients, 10+ Years, 5★ Rating
- Image placeholder on right side (desktop)

**Best for:** Home page top section

---

### 2. ServicesSection
```jsx
<ServicesSection />
```
**What it shows:**
- Section title: "Professional Cleaning Solutions"
- 6 service cards in a grid:
  - House Washing
  - Driveway Cleaning
  - Roof Cleaning
  - Deck Cleaning
  - Gutter Cleaning
  - Commercial Services
- Each card links to its service page
- "View All Services" button at bottom

**Best for:** Home page, Services overview page

---

### 3. LocationsSection
```jsx
<LocationsSection />
```
**What it shows:**
- Section title: "Serving Central Florida"
- Featured location card: Deltona (large)
- 4 smaller location cards:
  - Orlando
  - Daytona Beach
  - Sanford
  - Lake Mary
- Map placeholder
- "Contact Us About Your Location" button

**Best for:** Home page, Locations page

---

### 4. CTASection

#### Variant: Default
```jsx
<CTASection variant="default" />
```
**What it shows:**
- Blue gradient background
- "Ready to Transform Your Property?" headline
- "Get Free Quote" and "Call Now" buttons

**Best for:** End of home page, service pages

#### Variant: Contact
```jsx
<CTASection variant="contact" />
```
**What it shows:**
- White card on green background
- "Let's Get Started!" headline
- Contact info with icons (phone, address, hours)
- Three CTA buttons
- Trust badges (stats)

**Best for:** Contact page, location pages

#### Variant: Simple
```jsx
<CTASection variant="simple" />
```
**What it shows:**
- Dark background, horizontal layout
- "Ready to Get Started?" headline
- Two buttons side by side

**Best for:** About page, FAQ page, footer area

---

## Common Page Layouts

### Home Page
```jsx
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
```

### Services Page
```jsx
export default function ServicesPage() {
  return (
    <>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center">Our Services</h1>
        </div>
      </div>
      <ServicesSection />
      <CTASection variant="contact" />
    </>
  );
}
```

### About Page
```jsx
export default function AboutPage() {
  return (
    <>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8">About KJS Supreme</h1>
          <div className="prose max-w-none">
            {/* Your about content */}
          </div>
        </div>
      </div>
      <CTASection variant="simple" />
    </>
  );
}
```

### Contact Page
```jsx
export default function ContactPage() {
  return (
    <>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12">Contact Us</h1>
          {/* Contact form here */}
        </div>
      </div>
      <CTASection variant="contact" />
    </>
  );
}
```

### Locations Page
```jsx
export default function LocationsPage() {
  return (
    <>
      <LocationsSection />
      <CTASection variant="default" />
    </>
  );
}
```

---

## Container & Spacing Classes

### Standard Container
```jsx
<div className="container mx-auto px-4">
  {/* Content */}
</div>
```

### Section Spacing
```jsx
// Large sections
<section className="py-20">

// Medium sections
<section className="py-16">

// Small sections
<section className="py-12">
```

### Background Colors
```jsx
// White
<section className="bg-white">

// Light gray
<section className="bg-gray-50">

// Blue gradient
<section className="bg-gradient-to-r from-blue-600 to-blue-800">
```

---

## Quick Tips

✅ **DO:**
- Use HeroSection only on home page
- Add CTASection at the end of most pages
- Use ServicesSection on home and services pages
- Use LocationsSection on home and locations pages

❌ **DON'T:**
- Don't use multiple HeroSections on one page
- Don't stack multiple CTASections
- Don't modify component files directly (copy and rename instead)

---

## File Locations

- **Components:** `components/HeroSection.jsx`, etc.
- **Example Home Page:** `app/page-example.tsx`
- **Integration Guide:** `INTEGRATION_GUIDE.md`
- **This Reference:** `COMPONENT_QUICK_REFERENCE.md`

---

## Need Help?

1. Check `INTEGRATION_GUIDE.md` for detailed instructions
2. Look at `app/page-example.tsx` for a working example
3. All components are independent - use only what you need
