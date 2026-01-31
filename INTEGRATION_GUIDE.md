# Component Integration Guide

## Overview
This guide explains how to safely integrate the new Tailwind CSS theme components into your Next.js project without breaking existing pages.

---

## Components Created

### 1. HeroSection
**File:** `components/HeroSection.jsx`
**Purpose:** Eye-catching hero section with CTA buttons and stats
**Features:**
- Gradient background with pattern
- Responsive grid layout
- Call-to-action buttons
- Statistics display
- Image placeholder

### 2. ServicesSection
**File:** `components/ServicesSection.jsx`
**Purpose:** Showcase all services in a modern card grid
**Features:**
- 6 service cards with hover effects
- Gradient color coding per service
- Responsive grid (1/2/3 columns)
- Links to individual service pages

### 3. LocationsSection
**File:** `components/LocationsSection.jsx`
**Purpose:** Display service areas with featured location
**Features:**
- Featured location (Deltona) with large card
- Grid of 4 additional locations
- Map placeholder
- Contact CTA for unlisted areas

### 4. CTASection
**File:** `components/CTASection.jsx`
**Purpose:** Call-to-action sections with multiple variants
**Variants:**
- `variant="default"` - Standard CTA with buttons
- `variant="contact"` - Contact info + CTA buttons
- `variant="simple"` - Minimal horizontal CTA

---

## Safe Integration Methods

### Method 1: Update Home Page Only (Recommended)

This is the **safest** method - only modify the home page, leaving all other pages untouched.

**File:** `app/page.tsx` or `app/page.js`

```jsx
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import LocationsSection from '@/components/LocationsSection';
import CTASection from '@/components/CTASection';

export default function HomePage() {
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

### Method 2: Add Sections to Specific Pages

Add individual sections to specific pages as needed.

**Example - Services Page:**
```jsx
// app/services/page.js
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';

export default function ServicesPage() {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8">
            Our Services
          </h1>
        </div>
      </div>
      <ServicesSection />
      <CTASection variant="contact" />
    </>
  );
}
```

**Example - About Page:**
```jsx
// app/about/page.js
import CTASection from '@/components/CTASection';

export default function AboutPage() {
  return (
    <>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8">About Us</h1>
          <p className="text-lg text-gray-600">Your about content here...</p>
        </div>
      </div>
      <CTASection variant="simple" />
    </>
  );
}
```

### Method 3: Create Reusable Page Layouts

Create layout components that can be reused across multiple pages.

**Example - Create a Page Layout Component:**
```jsx
// components/PageLayout.jsx
import CTASection from '@/components/CTASection';

export default function PageLayout({
  children,
  title,
  description,
  showCTA = true,
  ctaVariant = 'simple'
}) {
  return (
    <>
      {title && (
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
            {description && (
              <p className="text-xl text-gray-600">{description}</p>
            )}
          </div>
        </div>
      )}

      <div className="py-12">
        {children}
      </div>

      {showCTA && <CTASection variant={ctaVariant} />}
    </>
  );
}
```

**Then use it in any page:**
```jsx
// app/faq/page.js
import PageLayout from '@/components/PageLayout';

export default function FAQPage() {
  return (
    <PageLayout
      title="Frequently Asked Questions"
      description="Find answers to common questions about our services"
    >
      <div className="container mx-auto px-4">
        {/* Your FAQ content here */}
      </div>
    </PageLayout>
  );
}
```

---

## Component Usage Examples

### HeroSection
```jsx
import HeroSection from '@/components/HeroSection';

// Simple usage - just add to any page
<HeroSection />
```

### ServicesSection
```jsx
import ServicesSection from '@/components/ServicesSection';

// Shows all 6 services with links
<ServicesSection />
```

### LocationsSection
```jsx
import LocationsSection from '@/components/LocationsSection';

// Shows featured location + grid of areas
<LocationsSection />
```

### CTASection - All Variants
```jsx
import CTASection from '@/components/CTASection';

// Default variant - Blue gradient with buttons
<CTASection variant="default" />

// Contact variant - Contact info + multiple CTAs
<CTASection variant="contact" />

// Simple variant - Horizontal layout, minimal
<CTASection variant="simple" />
```

---

## Suggested Page Structures

### Home Page (/)
```jsx
<HeroSection />
<ServicesSection />
<LocationsSection />
<CTASection variant="default" />
```

### Services Page (/services)
```jsx
<div className="page-header">...</div>
<ServicesSection />
<CTASection variant="contact" />
```

### Individual Service Pages (/services/*)
```jsx
<div className="page-content">
  {/* Service-specific content */}
</div>
<CTASection variant="simple" />
```

### About Page (/about)
```jsx
<div className="about-content">
  {/* About content */}
</div>
<CTASection variant="contact" />
```

### Locations Page (/locations)
```jsx
<LocationsSection />
<CTASection variant="default" />
```

### Contact Page (/contact)
```jsx
<div className="contact-form">
  {/* Contact form */}
</div>
<LocationsSection />
```

### FAQ Page (/faq)
```jsx
<div className="faq-content">
  {/* FAQ items */}
</div>
<CTASection variant="simple" />
```

---

## Styling Notes

### Color Scheme
- **Primary Blue:** `blue-600`, `blue-700`, `blue-800`
- **Accent Yellow:** `yellow-400`, `yellow-300`
- **Success Green:** `green-500`, `green-600`, `green-700`
- **Neutral Gray:** `gray-50`, `gray-100`, `gray-600`, `gray-900`

### Responsive Breakpoints
- **Mobile:** Default (< 768px)
- **Tablet:** `md:` (>= 768px)
- **Desktop:** `lg:` (>= 1024px)

### Container Class
All components use:
```jsx
<div className="container mx-auto px-4">
  {/* Content */}
</div>
```

This provides consistent margins and responsive padding.

---

## Customization Tips

### Change Colors
Find and replace color classes in component files:
- `bg-blue-600` → `bg-[yourcolor]-600`
- `text-blue-600` → `text-[yourcolor]-600`
- `from-blue-600` → `from-[yourcolor]-600`

### Adjust Spacing
Modify padding/margin classes:
- `py-20` → `py-16` (smaller) or `py-24` (larger)
- `mb-6` → `mb-4` (smaller) or `mb-8` (larger)

### Change Font Sizes
Update text size classes:
- `text-4xl` → `text-3xl` (smaller) or `text-5xl` (larger)
- `text-lg` → `text-base` (smaller) or `text-xl` (larger)

### Remove Sections
Simply don't import/use components you don't need. Each component is independent.

---

## Testing Checklist

After integration, test:
- [ ] Home page loads correctly
- [ ] All existing pages still work
- [ ] Mobile responsiveness (resize browser)
- [ ] All links work correctly
- [ ] Hover effects work on cards/buttons
- [ ] CTA buttons link to correct pages
- [ ] No console errors
- [ ] Layout looks good on different screen sizes

---

## Troubleshooting

### Issue: Components not found
**Solution:** Make sure imports use `@/components/` prefix:
```jsx
import HeroSection from '@/components/HeroSection';
```

### Issue: Styling not applied
**Solution:** Ensure Tailwind CSS is configured in `tailwind.config.js`:
```js
content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
]
```

### Issue: Layout breaks on mobile
**Solution:** Check that parent containers don't have fixed widths. Use responsive classes like `w-full` or `max-w-7xl mx-auto`.

### Issue: Links not working
**Solution:** Verify all href paths match your page structure. Update links in components if needed.

---

## Next Steps

1. Start with the home page - safest integration point
2. Test thoroughly on different devices
3. Gradually add components to other pages
4. Customize colors and content to match your brand
5. Replace placeholder images with real images
6. Update phone numbers and addresses throughout

---

## Support

If you encounter issues:
1. Check the console for error messages
2. Verify all imports are correct
3. Ensure Tailwind CSS is properly configured
4. Test on a clean browser (clear cache)

Happy building! 🚀
