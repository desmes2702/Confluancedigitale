# 🚀 SEO & PERFORMANCE

**Objectif** : Atteindre 100/100 Lighthouse + SEO optimal  
**Niveau** : Intermédiaire/Avancé

---

## 📊 OBJECTIFS LIGHTHOUSE

### Targets Obligatoires

| Métrique | Target | Critique |
|----------|--------|----------|
| **Performance** | > 90 | 🎯 Obligatoire |
| **Accessibilité** | > 90 | 🎯 Obligatoire |
| **Best Practices** | > 90 | 🎯 Obligatoire |
| **SEO** | > 90 | 🎯 Obligatoire |

### Core Web Vitals

| Métrique | Target | Description |
|----------|--------|-------------|
| **LCP** | < 2.5s | Largest Contentful Paint (chargement principal) |
| **FID** | < 100ms | First Input Delay (réactivité) |
| **CLS** | < 0.1 | Cumulative Layout Shift (stabilité visuelle) |
| **INP** | < 200ms | Interaction to Next Paint (interactivité) |
| **TTFB** | < 600ms | Time to First Byte (serveur) |

---

## 🎯 OPTIMISATION SEO

### Meta Tags Essentiels

```astro
---
// src/layouts/BaseLayout.astro
interface Props {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  keywords?: string[];
  author?: string;
}

const { 
  title, 
  description, 
  canonical, 
  ogImage = '/images/og-default.jpg',
  keywords = [],
  author = 'Confluence Digitale'
} = Astro.props;
---

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Essentiels -->
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords.join(', ')} />
    <meta name="author" content={author} />
    <link rel="canonical" href={canonical} />
    
    <!-- Open Graph (Facebook, LinkedIn) -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Confluence Digitale" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:url" content={canonical} />
    <meta property="og:locale" content="fr_FR" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />
    
    <!-- Robots -->
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    
    <!-- Theme Color -->
    <meta name="theme-color" content="#10b981" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

### Règles SEO

```typescript
// Exemples de bonnes pratiques
const SEO_RULES = {
  title: {
    length: { min: 30, max: 60 },
    format: "Titre Principal | Confluence Digitale",
    unique: true,
  },
  description: {
    length: { min: 120, max: 160 },
    format: "Description attractive avec mots-clés principaux",
    unique: true,
  },
  h1: {
    count: 1, // Un seul H1 par page
    position: "Au début du contenu principal",
  },
  images: {
    alt: "Obligatoire, descriptif, 125 caractères max",
    format: "WebP préféré",
  },
};
```

### Structured Data (JSON-LD)

```astro
---
// src/components/seo/StructuredData.astro
interface Props {
  type: 'Organization' | 'LocalBusiness' | 'WebSite';
}

const { type } = Astro.props;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Confluence Digitale",
  "url": "https://confluence-digitale.fr",
  "logo": "https://confluence-digitale.fr/logo.png",
  "description": "Agence web B2B premium pour TPE/PME",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-6-XX-XX-XX-XX",
    "contactType": "customer service",
    "areaServed": "FR",
    "availableLanguage": "fr"
  },
  "sameAs": [
    "https://linkedin.com/company/confluence-digitale"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://confluence-digitale.fr",
  "name": "Confluence Digitale",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://confluence-digitale.fr/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const schema = type === 'Organization' ? organizationSchema : websiteSchema;
---

<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

---

## ⚡ OPTIMISATION PERFORMANCE

### 1. Images

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<!-- ✅ BON : Image optimisée -->
<Image 
  src={heroImage}
  alt="Héro de la page d'accueil"
  width={1920}
  height={1080}
  format="webp"
  quality={80}
  loading="eager"  {/* Above the fold */}
/>

<!-- Pour images below the fold -->
<Image 
  src={serviceImage}
  alt="Service web premium"
  width={800}
  height={600}
  format="webp"
  quality={75}
  loading="lazy"  {/* Lazy loading */}
/>

<!-- ❌ MAUVAIS : Image non optimisée -->
<img src="/images/hero.jpg" alt="Héro" />
```

### 2. Fonts

```astro
---
// Précharger les polices critiques
---
<head>
  <!-- Préconnexion -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  
  <!-- Précharger polices critiques -->
  <link
    rel="preload"
    href="/fonts/inter-v12-latin-regular.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />
  
  <!-- Google Fonts avec display=swap -->
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400&display=swap"
    rel="stylesheet"
  />
</head>
```

### 3. CSS

```astro
---
// Inline CSS critique dans <head>
---
<style is:inline>
  /* CSS critique pour above-the-fold */
  body {
    font-family: Inter, sans-serif;
    background: #F9FAFB;
    color: #1A1A1A;
  }
  
  .hero {
    min-height: 60vh;
    padding-top: 7rem;
  }
</style>

<!-- CSS non-critique lazy loaded -->
<link rel="stylesheet" href="/styles/non-critical.css" media="print" onload="this.media='all'" />
```

### 4. JavaScript

```astro
---
// Composants avec hydratation sélective
import Header from '../components/Header.tsx';
import FAQ from '../components/FAQ.tsx';
import Footer from '../components/Footer.tsx';
---

<!-- Hydratation immédiate (critique) -->
<Header client:load />

<!-- Hydratation lazy (non-critique) -->
<FAQ client:visible />
<Footer client:visible />

<!-- Hydratation idle (très faible priorité) -->
<ChatWidget client:idle />
```

### 5. Préchargement

```astro
<head>
  <!-- Précharger ressources critiques -->
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="/images/hero.webp" as="image" />
  
  <!-- DNS Prefetch pour ressources externes -->
  <link rel="dns-prefetch" href="https://www.google-analytics.com" />
  
  <!-- Preconnect pour connexions critiques -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
</head>
```

---

## 🎨 OPTIMISATION RENDERING

### Éviter Layout Shift (CLS)

```tsx
// ✅ BON : Dimensions explicites
<img 
  src="/image.jpg" 
  alt="Description"
  width={800}
  height={600}  {/* Réserve l'espace */}
  className="w-full h-auto"
/>

// ✅ BON : Aspect ratio
<div className="aspect-video">
  <img src="/video-thumbnail.jpg" alt="Vidéo" />
</div>

// ❌ MAUVAIS : Pas de dimensions
<img src="/image.jpg" alt="Description" />
```

### Skeleton Loaders

```tsx
// Pendant le chargement
export function ProductSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
      <div className="bg-gray-200 h-6 w-3/4 rounded mb-2"></div>
      <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
    </div>
  );
}

// Utilisation
import { Suspense } from 'react';

<Suspense fallback={<ProductSkeleton />}>
  <ProductList />
</Suspense>
```

---

## 🔍 SITEMAP & ROBOTS

### Sitemap.xml

```typescript
// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';

const pages = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/offre', priority: 0.9, changefreq: 'weekly' },
  { url: '/contact', priority: 0.8, changefreq: 'monthly' },
  // ... autres pages
];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>https://confluence-digitale.fr${page.url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
```

### Robots.txt

```txt
# public/robots.txt
User-agent: *
Allow: /

# Sitemap
Sitemap: https://confluence-digitale.fr/sitemap.xml

# Disallow admin/private
Disallow: /admin/
Disallow: /api/

# Crawl-delay
Crawl-delay: 1
```

---

## 📱 RESPONSIVE IMAGES

### Picture Element

```astro
<picture>
  <!-- Mobile (< 640px) -->
  <source 
    media="(max-width: 639px)" 
    srcset="/images/hero-mobile.webp"
    type="image/webp"
  />
  
  <!-- Tablette (640px - 1023px) -->
  <source 
    media="(min-width: 640px) and (max-width: 1023px)" 
    srcset="/images/hero-tablet.webp"
    type="image/webp"
  />
  
  <!-- Desktop (> 1024px) -->
  <source 
    media="(min-width: 1024px)" 
    srcset="/images/hero-desktop.webp"
    type="image/webp"
  />
  
  <!-- Fallback -->
  <img 
    src="/images/hero-desktop.jpg" 
    alt="Héro"
    width={1920}
    height={1080}
  />
</picture>
```

### Srcset

```astro
<img
  src="/images/hero-800w.webp"
  srcset="
    /images/hero-400w.webp 400w,
    /images/hero-800w.webp 800w,
    /images/hero-1200w.webp 1200w,
    /images/hero-1920w.webp 1920w
  "
  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 90vw,
    1200px
  "
  alt="Héro de la page"
  loading="eager"
/>
```

---

## 🧪 TESTING PERFORMANCE

### Lighthouse CLI

```bash
# Test simple
lighthouse https://confluence-digitale.fr --view

# Test avec options
lighthouse https://confluence-digitale.fr \
  --only-categories=performance,accessibility,seo \
  --preset=desktop \
  --output=html \
  --output-path=./reports/lighthouse-$(date +%Y%m%d).html

# Test mobile
lighthouse https://confluence-digitale.fr \
  --preset=mobile \
  --throttling.cpuSlowdownMultiplier=4 \
  --view
```

### WebPageTest

```bash
# Via CLI
webpagetest test https://confluence-digitale.fr \
  --location=Paris \
  --connectivity=4G \
  --runs=3
```

### Chrome DevTools

```javascript
// Performance API
const perfData = performance.getEntriesByType('navigation')[0];
console.log('TTFB:', perfData.responseStart);
console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd);
console.log('Load Complete:', perfData.loadEventEnd);

// Core Web Vitals (via web-vitals library)
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
```

---

## 📊 MONITORING PRODUCTION

### Budget Performance

```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: [
        'https://confluence-digitale.fr/',
        'https://confluence-digitale.fr/offre',
        'https://confluence-digitale.fr/contact',
      ],
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
      },
    },
  },
};
```

### Analytics

```astro
---
// Google Analytics 4
const GA_ID = 'G-XXXXXXXXXX';
---

<script is:inline define:vars={{ GA_ID }}>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA_ID, {
    anonymize_ip: true, // RGPD
    cookie_flags: 'SameSite=None;Secure',
  });
</script>
<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
```

---

## ✅ CHECKLIST SEO/PERFORMANCE

### Avant Production

#### SEO
- [ ] Title unique (30-60 caractères)
- [ ] Description unique (120-160 caractères)
- [ ] Canonical URL définie
- [ ] OG Image (1200x630px)
- [ ] H1 unique par page
- [ ] Structure H1→H2→H3 logique
- [ ] Alt text sur toutes images
- [ ] Sitemap.xml généré
- [ ] Robots.txt configuré
- [ ] Structured Data (JSON-LD)

#### Performance
- [ ] Images WebP + lazy loading
- [ ] Fonts préchargées
- [ ] CSS critique inline
- [ ] Hydratation minimale (`client:visible`)
- [ ] Lighthouse Performance > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Compression Gzip/Brotli activée

#### Accessibilité
- [ ] Contraste texte > 4.5:1
- [ ] Navigation clavier
- [ ] Labels ARIA
- [ ] Focus visible
- [ ] Lighthouse Accessibility > 90

---

## 🛠️ OUTILS RECOMMANDÉS

### Analyse

- **Lighthouse** : Audit complet
- **WebPageTest** : Test multi-locations
- **PageSpeed Insights** : Google officiel
- **GTmetrix** : Analyse détaillée
- **Screaming Frog** : Audit SEO technique

### Optimisation Images

- **Squoosh** : Compression images
- **ImageOptim** : Optimisation batch
- **TinyPNG** : Compression PNG/JPG

### Monitoring

- **Google Search Console** : SEO monitoring
- **Google Analytics 4** : Traffic analysis
- **Sentry** : Error tracking
- **Vercel Analytics** : Performance monitoring

---

**🚀 SEO & Performance Maîtrisés ! 💪**

**Prochaine lecture** : `08_TROUBLESHOOTING.md`
