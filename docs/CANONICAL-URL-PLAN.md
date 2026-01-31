# Complete Canonical URL Plan
## KJS Supreme Pressure Washing - https://kjsupremepressurewashing.com

---

## Canonical URL Rules

| Rule | Implementation |
|------|----------------|
| Protocol | Always HTTPS (redirect HTTP → HTTPS) |
| WWW | Always non-www (redirect www → non-www) |
| Trailing Slash | No trailing slashes (redirect /page/ → /page) |
| Case | Always lowercase (redirect /Page → /page) |
| Self-Referencing | Every page has a canonical pointing to itself |

---

## 1. Homepage

| Page | Browser URL | Canonical URL |
|------|-------------|---------------|
| Homepage | `https://kjsupremepressurewashing.com` | `https://kjsupremepressurewashing.com` |

```html
<link rel="canonical" href="https://kjsupremepressurewashing.com" />
```

---

## 2. Static Pages (8 Total)

| Page | Browser URL | Canonical URL |
|------|-------------|---------------|
| About | `/about` | `https://kjsupremepressurewashing.com/about` |
| Contact | `/contact` | `https://kjsupremepressurewashing.com/contact` |
| Services Hub | `/services` | `https://kjsupremepressurewashing.com/services` |
| Locations Hub | `/locations` | `https://kjsupremepressurewashing.com/locations` |
| Residential | `/residential` | `https://kjsupremepressurewashing.com/residential` |
| Commercial | `/commercial` | `https://kjsupremepressurewashing.com/commercial` |
| FAQ | `/faq` | `https://kjsupremepressurewashing.com/faq` |

### Example Tags:
```html
<!-- About Page -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/about" />

<!-- Contact Page -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/contact" />

<!-- Services Hub -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/services" />

<!-- Locations Hub -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/locations" />

<!-- FAQ Page -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/faq" />
```

---

## 3. Service Pages (14 Total)

| Service | Browser URL | Canonical URL |
|---------|-------------|---------------|
| House Washing | `/services/house-washing` | `https://kjsupremepressurewashing.com/services/house-washing` |
| Driveway Cleaning | `/services/driveway-cleaning` | `https://kjsupremepressurewashing.com/services/driveway-cleaning` |
| Roof Cleaning | `/services/roof-cleaning` | `https://kjsupremepressurewashing.com/services/roof-cleaning` |
| Deck Cleaning | `/services/deck-cleaning` | `https://kjsupremepressurewashing.com/services/deck-cleaning` |
| Gutter Cleaning | `/services/gutter-cleaning` | `https://kjsupremepressurewashing.com/services/gutter-cleaning` |
| Patio Cleaning | `/services/patio-cleaning` | `https://kjsupremepressurewashing.com/services/patio-cleaning` |
| Fence Cleaning | `/services/fence-cleaning` | `https://kjsupremepressurewashing.com/services/fence-cleaning` |
| Pool Deck Cleaning | `/services/pool-deck-cleaning` | `https://kjsupremepressurewashing.com/services/pool-deck-cleaning` |
| Sidewalk Cleaning | `/services/sidewalk-cleaning` | `https://kjsupremepressurewashing.com/services/sidewalk-cleaning` |
| Concrete Cleaning | `/services/concrete-cleaning` | `https://kjsupremepressurewashing.com/services/concrete-cleaning` |
| Paver Cleaning | `/services/paver-cleaning` | `https://kjsupremepressurewashing.com/services/paver-cleaning` |
| Soft Washing | `/services/soft-washing` | `https://kjsupremepressurewashing.com/services/soft-washing` |
| Window Cleaning | `/services/window-cleaning` | `https://kjsupremepressurewashing.com/services/window-cleaning` |
| Commercial | `/services/commercial-pressure-washing` | `https://kjsupremepressurewashing.com/services/commercial-pressure-washing` |

### Example Tags:
```html
<!-- House Washing -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/services/house-washing" />

<!-- Driveway Cleaning -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/services/driveway-cleaning" />

<!-- Roof Cleaning -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/services/roof-cleaning" />

<!-- Gutter Cleaning -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/services/gutter-cleaning" />
```

---

## 4. Location Pages (33 Total)

| Location | Browser URL | Canonical URL |
|----------|-------------|---------------|
| Deltona | `/locations/deltona` | `https://kjsupremepressurewashing.com/locations/deltona` |
| Orlando | `/locations/orlando` | `https://kjsupremepressurewashing.com/locations/orlando` |
| Daytona Beach | `/locations/daytona-beach` | `https://kjsupremepressurewashing.com/locations/daytona-beach` |
| Sanford | `/locations/sanford` | `https://kjsupremepressurewashing.com/locations/sanford` |
| Lake Mary | `/locations/lake-mary` | `https://kjsupremepressurewashing.com/locations/lake-mary` |
| Winter Park | `/locations/winter-park` | `https://kjsupremepressurewashing.com/locations/winter-park` |
| Apopka | `/locations/apopka` | `https://kjsupremepressurewashing.com/locations/apopka` |
| Altamonte Springs | `/locations/altamonte-springs` | `https://kjsupremepressurewashing.com/locations/altamonte-springs` |
| Casselberry | `/locations/casselberry` | `https://kjsupremepressurewashing.com/locations/casselberry` |
| Maitland | `/locations/maitland` | `https://kjsupremepressurewashing.com/locations/maitland` |
| Winter Garden | `/locations/winter-garden` | `https://kjsupremepressurewashing.com/locations/winter-garden` |
| Oviedo | `/locations/oviedo` | `https://kjsupremepressurewashing.com/locations/oviedo` |
| Winter Springs | `/locations/winter-springs` | `https://kjsupremepressurewashing.com/locations/winter-springs` |
| DeBary | `/locations/debary` | `https://kjsupremepressurewashing.com/locations/debary` |
| DeLand | `/locations/deland` | `https://kjsupremepressurewashing.com/locations/deland` |
| Orange City | `/locations/orange-city` | `https://kjsupremepressurewashing.com/locations/orange-city` |
| Port Orange | `/locations/port-orange` | `https://kjsupremepressurewashing.com/locations/port-orange` |
| New Smyrna Beach | `/locations/new-smyrna-beach` | `https://kjsupremepressurewashing.com/locations/new-smyrna-beach` |
| Palm Coast | `/locations/palm-coast` | `https://kjsupremepressurewashing.com/locations/palm-coast` |
| Kissimmee | `/locations/kissimmee` | `https://kjsupremepressurewashing.com/locations/kissimmee` |
| St. Cloud | `/locations/st-cloud` | `https://kjsupremepressurewashing.com/locations/st-cloud` |
| Celebration | `/locations/celebration` | `https://kjsupremepressurewashing.com/locations/celebration` |
| Clermont | `/locations/clermont` | `https://kjsupremepressurewashing.com/locations/clermont` |
| Mount Dora | `/locations/mount-dora` | `https://kjsupremepressurewashing.com/locations/mount-dora` |
| Tavares | `/locations/tavares` | `https://kjsupremepressurewashing.com/locations/tavares` |
| Eustis | `/locations/eustis` | `https://kjsupremepressurewashing.com/locations/eustis` |
| Ocoee | `/locations/ocoee` | `https://kjsupremepressurewashing.com/locations/ocoee` |
| Winter Haven | `/locations/winter-haven` | `https://kjsupremepressurewashing.com/locations/winter-haven` |
| Davenport | `/locations/davenport` | `https://kjsupremepressurewashing.com/locations/davenport` |
| Haines City | `/locations/haines-city` | `https://kjsupremepressurewashing.com/locations/haines-city` |
| Wekiwa Springs | `/locations/wekiwa-springs` | `https://kjsupremepressurewashing.com/locations/wekiwa-springs` |
| Osteen | `/locations/osteen` | `https://kjsupremepressurewashing.com/locations/osteen` |
| Zellwood | `/locations/zellwood` | `https://kjsupremepressurewashing.com/locations/zellwood` |

### Example Tags:
```html
<!-- Deltona -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/locations/deltona" />

<!-- Orlando -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/locations/orlando" />

<!-- Sanford -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/locations/sanford" />

<!-- DeBary -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/locations/debary" />

<!-- Orange City -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/locations/orange-city" />
```

---

## 5. Service + Location Pages (462 Total = 14 Services × 33 Locations)

### URL Pattern:
```
/services/{service-slug}/{location-slug}
```

### Examples (Sample of 462 pages):

| Service + Location | Browser URL | Canonical URL |
|--------------------|-------------|---------------|
| House Washing in Deltona | `/services/house-washing/deltona` | `https://kjsupremepressurewashing.com/services/house-washing/deltona` |
| House Washing in Orlando | `/services/house-washing/orlando` | `https://kjsupremepressurewashing.com/services/house-washing/orlando` |
| Driveway Cleaning in Deltona | `/services/driveway-cleaning/deltona` | `https://kjsupremepressurewashing.com/services/driveway-cleaning/deltona` |
| Driveway Cleaning in Sanford | `/services/driveway-cleaning/sanford` | `https://kjsupremepressurewashing.com/services/driveway-cleaning/sanford` |
| Roof Cleaning in DeBary | `/services/roof-cleaning/debary` | `https://kjsupremepressurewashing.com/services/roof-cleaning/debary` |
| Roof Cleaning in Orange City | `/services/roof-cleaning/orange-city` | `https://kjsupremepressurewashing.com/services/roof-cleaning/orange-city` |
| Gutter Cleaning in Winter Park | `/services/gutter-cleaning/winter-park` | `https://kjsupremepressurewashing.com/services/gutter-cleaning/winter-park` |
| Paver Cleaning in Celebration | `/services/paver-cleaning/celebration` | `https://kjsupremepressurewashing.com/services/paver-cleaning/celebration` |

### Example Tags:
```html
<!-- House Washing in Deltona -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/services/house-washing/deltona" />

<!-- Driveway Cleaning in Orlando -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/services/driveway-cleaning/orlando" />

<!-- Roof Cleaning in Sanford -->
<link rel="canonical" href="https://kjsupremepressurewashing.com/services/roof-cleaning/sanford" />
```

---

## 6. Next.js Implementation

### Automatic Self-Canonical URLs

The website uses a centralized canonical URL function in `lib/seo-config.js`:

```javascript
// lib/seo-config.js
export const SITE_CONFIG = {
  url: 'https://kjsupremepressurewashing.com',
  // ... other config
};

export function getCanonicalUrl(path = '') {
  const cleanPath = path
    .toLowerCase()
    .replace(/\/+$/, '') // Remove trailing slashes
    .replace(/^\/+/, '/'); // Ensure single leading slash

  return `${SITE_CONFIG.url}${cleanPath === '/' ? '' : cleanPath}`;
}
```

### Static Page Example:
```javascript
// app/about/page.js
import { getCanonicalUrl } from '@/lib/seo-config';

export const metadata = {
  title: 'About Us | KJS Supreme Pressure Washing',
  description: 'Learn about KJS Supreme Pressure Washing...',
  alternates: {
    canonical: getCanonicalUrl('/about'),
  },
};
```

### Dynamic Page Example:
```javascript
// app/services/[service]/[location]/page.js
import { getCanonicalUrl } from '@/lib/seo-config';

export async function generateMetadata({ params }) {
  const path = `/services/${params.service}/${params.location}`;
  const canonical = getCanonicalUrl(path);

  return {
    title: `${service.name} in ${location.name}, FL`,
    alternates: {
      canonical: canonical,
    },
  };
}
```

### Root Layout (Global Fallback):
```javascript
// app/layout.tsx
export const metadata = {
  metadataBase: new URL('https://kjsupremepressurewashing.com'),
  alternates: {
    canonical: 'https://kjsupremepressurewashing.com',
  },
};
```

---

## 7. Server Redirects (next.config.js)

Add these redirects to ensure URL consistency:

```javascript
// next.config.js
module.exports = {
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.kjsupremepressurewashing.com' }],
        destination: 'https://kjsupremepressurewashing.com/:path*',
        permanent: true,
      },
      // Redirect trailing slashes
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },
};
```

---

## 8. Vercel Configuration (vercel.json)

For Vercel deployment, add this configuration:

```json
{
  "trailingSlash": false,
  "redirects": [
    {
      "source": "/:path*/",
      "destination": "/:path*",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## 9. Complete URL Count Summary

| Page Type | Count | Example Canonical |
|-----------|-------|-------------------|
| Homepage | 1 | `https://kjsupremepressurewashing.com` |
| Static Pages | 7 | `https://kjsupremepressurewashing.com/about` |
| Service Pages | 14 | `https://kjsupremepressurewashing.com/services/house-washing` |
| Location Pages | 33 | `https://kjsupremepressurewashing.com/locations/deltona` |
| Service+Location | 462 | `https://kjsupremepressurewashing.com/services/house-washing/deltona` |
| **TOTAL** | **517** | All self-referencing |

---

## 10. Verification Checklist

Before deployment, verify:

- [ ] All pages have `<link rel="canonical">` tag
- [ ] Canonical URL matches browser URL exactly
- [ ] No duplicate content issues
- [ ] HTTPS enforced on all pages
- [ ] www redirects to non-www
- [ ] Trailing slashes redirect properly
- [ ] Sitemap URLs match canonical URLs
- [ ] Google Search Console shows correct canonical URLs

### Testing Commands:
```bash
# Check canonical tag on a page
curl -s https://kjsupremepressurewashing.com/services/house-washing | grep -i canonical

# Verify redirect behavior
curl -I https://www.kjsupremepressurewashing.com
curl -I https://kjsupremepressurewashing.com/services/

# Validate sitemap
curl -s https://kjsupremepressurewashing.com/sitemap.xml | head -50
```

---

## 11. Google Search Console Setup

After deployment:

1. **Add Property**: `https://kjsupremepressurewashing.com` (not www)
2. **Submit Sitemap**: `https://kjsupremepressurewashing.com/sitemap.xml`
3. **Request Indexing**: Submit homepage and key service pages
4. **Monitor**: Check "Coverage" for canonical issues

---

*Document Generated: January 2026*
*Domain: https://kjsupremepressurewashing.com*
*Total Canonical URLs: 517*
