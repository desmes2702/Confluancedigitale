# 🛠️ GUIDE TECHNIQUE - ASTRO + REACT

**Niveau** : Intermédiaire  
**Temps de lecture** : 20 minutes  
**Objectif** : Maîtriser l'architecture technique

---

## 🏗️ ARCHITECTURE ASTRO

### Concept Fondamental : Islands Architecture

```
┌────────────────────────────────────────┐
│         PAGE ASTRO (HTML Static)       │
│                                        │
│  ┌──────────┐  ┌──────────┐  ┌─────┐ │
│  │  React   │  │  React   │  │React│ │
│  │  Island  │  │  Island  │  │ Isl.│ │
│  │ (Header) │  │  (FAQ)   │  │(Form)│ │
│  └──────────┘  └──────────┘  └─────┘ │
│                                        │
│  HTML Statique (0 KB JavaScript)      │
│  - Textes                              │
│  - Images                              │
│  - Cartes                              │
└────────────────────────────────────────┘
```

**Avantages** :
- ⚡ Performance : HTML statique = chargement instantané
- 🚀 SEO : Contenu indexable par Google
- 💰 Coût : Moins de JavaScript = moins de bande passante

---

## 📁 STRUCTURE DU PROJET

```
/
├── public/                     # Assets statiques
│   ├── images/                # Images
│   ├── fonts/                 # Polices
│   └── favicon.ico           # Favicon
│
├── src/
│   ├── components/            # Composants React + Astro
│   │   ├── layout/           # Header, Footer, Logo
│   │   ├── sections/         # Sections réutilisables
│   │   ├── forms/            # Formulaires
│   │   └── ui/               # Shadcn UI (Button, Input...)
│   │
│   ├── layouts/              # Layouts Astro
│   │   └── BaseLayout.astro  # Layout de base (SEO, meta)
│   │
│   ├── pages/                # Routes Astro
│   │   ├── index.astro       # Landing Page (/)
│   │   ├── offre.astro       # Page Offre (/offre)
│   │   ├── contact.astro     # Page Contact (/contact)
│   │   └── [...].astro       # 14 pages au total
│   │
│   ├── hooks/                # Hooks React
│   │   └── useScrollAnimation.ts
│   │
│   ├── styles/               # Styles globaux
│   │   └── globals.css       # Tailwind + Custom CSS
│   │
│   └── config/               # Configuration
│       └── seo.ts            # Config SEO
│
├── astro.config.mjs          # Config Astro
├── tailwind.config.ts        # Config Tailwind
├── tsconfig.json             # Config TypeScript
└── package.json              # Dépendances
```

---

## 🔧 CONFIGURATION ASTRO

### `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Intégrations
  integrations: [
    react(), // Support React
    tailwind({
      applyBaseStyles: false, // On utilise globals.css
    }),
  ],
  
  // Génération statique (SSG)
  output: 'static',
  
  // Site URL (pour sitemap)
  site: 'https://confluence-digitale.fr',
  
  // Compression
  compressHTML: true,
  
  // Build
  build: {
    assets: '_assets', // Dossier assets
    inlineStylesheets: 'auto', // CSS inline si petit
  },
});
```

---

## 🎨 CONFIGURATION TAILWIND

### `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      // Couleurs Custom
      colors: {
        'confluence-gold': '#D1A65E',
        'confluence-green': '#10b981',
        'confluence-red': '#A32E3A',
      },
      
      // Polices
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      
      // Animations Custom
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-in-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
```

---

## 🔄 HYDRATATION ASTRO (Critique)

### Directives d'Hydratation

| Directive | Quand | Performance | Exemple |
|-----------|-------|-------------|---------|
| `client:load` | JS immédiat (DOMContentLoaded) | ⚡⚡ Moyenne | Header avec menu |
| `client:idle` | Après chargement (requestIdleCallback) | ⚡⚡⚡ Bonne | Chat widget |
| `client:visible` | Visible dans viewport | ⚡⚡⚡⚡ Excellente | FAQ, Footer |
| `client:media` | Media query match | ⚡⚡⚡ Bonne | Mobile menu |
| Aucune | Jamais (statique) | ⚡⚡⚡⚡⚡ Parfaite | Texte, images |

### Exemples

```astro
<!-- Header : Toujours visible, menu mobile interactif -->
<ConfluenceHeaderV6_7 client:load />

<!-- FAQ : Scroll pour voir, accordéons interactifs -->
<ConfluenceFAQ client:visible />

<!-- Menu Mobile : Seulement sur mobile -->
<MobileMenu client:media="(max-width: 768px)" />

<!-- Footer : Tout en bas de page -->
<ConfluenceFooterV6_2 client:visible />

<!-- Section statique : Pas de JS -->
<HeroSection />
```

### Impact Performance

```typescript
// Sans hydratation sélective (tout React)
Page Size: 250 KB JS
First Load: ~3s
Lighthouse: 60/100

// Avec hydratation sélective (Astro)
Page Size: 50 KB JS (-80%)
First Load: ~0.8s
Lighthouse: 95/100
```

---

## 📄 LAYOUTS ASTRO

### BaseLayout.astro

```astro
---
// src/layouts/BaseLayout.astro
import '../styles/globals.css';

interface Props {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const { 
  title, 
  description, 
  canonical, 
  ogImage = '/images/og-default.jpg' 
} = Astro.props;
---

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO -->
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:url" content={canonical} />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link 
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500&display=swap" 
      rel="stylesheet" 
    />
  </head>
  
  <body class="bg-gray-50 text-slate-900">
    <slot />
  </body>
</html>
```

---

## ⚛️ COMPOSANTS REACT DANS ASTRO

### Règles d'Importation

```astro
---
// ✅ CORRECT : Importer composant React dans Astro
import MonComposant from '../components/MonComposant.tsx';

// ❌ IMPOSSIBLE : Importer .astro dans .tsx
// Les fichiers .astro ne peuvent être importés que dans .astro
---

<MonComposant client:visible />
```

### Passage de Props

```astro
---
import MonComposant from '../components/MonComposant.tsx';

const data = {
  title: "Mon Titre",
  items: [1, 2, 3]
};
---

<!-- Props simples -->
<MonComposant 
  title="Mon Titre"
  count={42}
  isVisible={true}
/>

<!-- Props complexes -->
<MonComposant 
  data={data}
  onClick={() => console.log('Click')}
  client:load
/>
```

### Children / Slots

```astro
---
import Wrapper from '../components/Wrapper.tsx';
---

<Wrapper client:load>
  <p>Contenu enfant</p>
</Wrapper>
```

```tsx
// Wrapper.tsx
export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper">
      {children}
    </div>
  );
}
```

---

## 🎯 ROUTING ASTRO

### Routes Statiques

```
src/pages/
├── index.astro           → /
├── offre.astro           → /offre
├── contact.astro         → /contact
└── about.astro           → /about
```

### Routes Dynamiques

```astro
---
// src/pages/blog/[slug].astro
export async function getStaticPaths() {
  const posts = [
    { slug: 'post-1', title: 'Post 1' },
    { slug: 'post-2', title: 'Post 2' },
  ];
  
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
---

<h1>{post.title}</h1>
```

### Redirections

```javascript
// astro.config.mjs
export default defineConfig({
  redirects: {
    '/old-url': '/new-url',
    '/blog': '/articles',
  },
});
```

---

## 🔌 INTÉGRATIONS UTILES

### Installation

```bash
# React
npx astro add react

# Tailwind CSS
npx astro add tailwind

# Sitemap
npx astro add sitemap

# MDX (Markdown)
npx astro add mdx
```

### Configuration Sitemap

```javascript
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://confluence-digitale.fr',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
```

---

## 📊 OPTIMISATION PERFORMANCE

### Images

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<!-- Image optimisée automatiquement -->
<Image 
  src={heroImage} 
  alt="Hero" 
  width={1200} 
  height={600}
  format="webp"
  quality={80}
/>
```

### Préchargement

```astro
---
// Précharger les polices
---
<link rel="preload" href="/fonts/playfair.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin />

<!-- Précharger composant critique -->
<link rel="modulepreload" href="/src/components/Header.tsx" />
```

### Lazy Loading

```tsx
// Composant React avec lazy loading
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

export default function Page() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

---

## 🧪 TESTS & DEBUGGING

### Build & Preview

```bash
# Build de production
npm run build

# Preview du build
npm run preview

# Build avec logs détaillés
npm run build -- --verbose
```

### Debugging

```astro
---
// Debug props
console.log('Props:', Astro.props);

// Debug URL
console.log('URL:', Astro.url.pathname);

// Debug request
console.log('Request:', Astro.request);
---
```

### Lighthouse

```bash
# Installer Lighthouse CLI
npm install -g lighthouse

# Tester une page
lighthouse http://localhost:4321 --view

# Tester avec options
lighthouse http://localhost:4321 \
  --only-categories=performance,accessibility,seo \
  --output=html \
  --output-path=./lighthouse-report.html
```

---

## 🚀 DÉPLOIEMENT

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel

# Déployer en production
vercel --prod
```

**Configuration** : `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "cleanUrls": true,
  "trailingSlash": false
}
```

### Netlify

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Pages

```bash
# Build avec base path
npm run build -- --base=/mon-repo/

# Déployer
npm run deploy
```

---

## 📚 RESSOURCES

### Documentation Officielle

- [Astro Docs](https://docs.astro.build/)
- [Astro + React](https://docs.astro.build/en/guides/integrations-guide/react/)
- [Astro Islands](https://docs.astro.build/en/concepts/islands/)

### Tutoriels

- [Astro Tutorial](https://docs.astro.build/en/tutorial/0-introduction/)
- [Astro Blog Course](https://docs.astro.build/en/tutorial/0-introduction/)

### Communauté

- [Astro Discord](https://astro.build/chat)
- [Astro GitHub](https://github.com/withastro/astro)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/astro)

---

**🛠️ Guide Technique Maîtrisé ! 💪**

**Prochaine lecture** : `04_CONVENTIONS_CODE.md`
