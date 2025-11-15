# 🏗️ ARCHITECTURE PROJET - STRUCTURE TECHNIQUE

**Stack** : Astro 5.x + React 18 + TypeScript 5.x + Tailwind 4.x  
**Migration** : React → Astro (Islands Architecture)  
**Déploiement** : Vercel

---

## 📁 STRUCTURE DOSSIERS

```
confluence-digitale/
│
├── public/                           ← Assets statiques
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
│
├── src/                              ← Code source
│   ├── pages/                        ← Pages Astro (routing auto)
│   │   ├── index.astro               ← Homepage (/)
│   │   ├── offre.astro               ← Page offre (/offre)
│   │   ├── realisations.astro        ← Portfolio (/realisations)
│   │   ├── processus.astro           ← Processus (/processus)
│   │   ├── equipe.astro              ← Équipe (/equipe)
│   │   ├── blog/
│   │   │   ├── index.astro           ← Liste articles (/blog)
│   │   │   └── [slug].astro          ← Article (/blog/[slug])
│   │   └── contact.astro             ← Contact (/contact)
│   │
│   ├── layouts/                      ← Layouts Astro
│   │   ├── BaseLayout.astro          ← Layout de base
│   │   └── BlogLayout.astro          ← Layout blog
│   │
│   ├── components/                   ← Composants
│   │   ├── layout/                   ← Header, Footer, Nav
│   │   │   ├── ConfluenceHeaderV6_7.tsx
│   │   │   ├── ConfluenceFooterV6_2.tsx
│   │   │   └── MobileMenu.tsx
│   │   │
│   │   ├── sections/                 ← Sections de page
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesGrid.tsx
│   │   │   ├── TeamBlock.tsx
│   │   │   ├── TestimonialsCarousel.tsx
│   │   │   └── FAQ.tsx
│   │   │
│   │   ├── forms/                    ← Formulaires
│   │   │   ├── ContactForm.tsx
│   │   │   └── NewsletterForm.tsx
│   │   │
│   │   └── ui/                       ← Composants UI réutilisables
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Badge.tsx
│   │
│   ├── content/                      ← Content Collections (blog)
│   │   └── blog/
│   │       ├── article-1.md
│   │       └── article-2.md
│   │
│   ├── styles/                       ← Styles globaux
│   │   └── global.css
│   │
│   └── types/                        ← Types TypeScript
│       ├── index.ts
│       └── blog.ts
│
├── migration-frontend/               ← Documentation migration (13 fichiers)
├── doc/                              ← Documentation projet
├── astro.config.mjs                  ← Config Astro
├── tailwind.config.mjs               ← Config Tailwind
├── tsconfig.json                     ← Config TypeScript
└── package.json
```

---

## 🎯 PHILOSOPHIE ARCHITECTURE

### Islands Architecture (Astro)

**Principe** : Pages statiques + îlots React interactifs

```
Page Astro (statique)
├── Header React (interactif - client:load)
├── Hero Astro (statique)
├── Features Astro (statique)
├── Testimonials React (interactif - client:visible)
└── Footer React (interactif - client:visible)
```

### Quand utiliser .astro vs .tsx ?

| Critère | Astro | React |
|---------|-------|-------|
| **Interactivité** | Aucune | useState, onClick, etc. |
| **Hydratation** | Aucune (0 JS) | Partielle (JS client) |
| **Performance** | ⚡ Maximum | 🐢 Plus lent |
| **Exemple** | Hero, Features | Header, Forms, Carousels |

### Décision Flow

```
Est-ce que le composant a :
├─ useState ?           ───→ OUI ───→ React (.tsx)
├─ onClick ?            ───→ OUI ───→ React (.tsx)
├─ useEffect ?          ───→ OUI ───→ React (.tsx)
├─ Formulaire validé ?  ───→ OUI ───→ React (.tsx)
└─ Contenu statique ?   ───→ OUI ───→ Astro (.astro)
```

---

## 📄 PAGES ASTRO

### Structure Page Type

```astro
---
// Frontmatter (côté serveur uniquement)
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/layout/ConfluenceHeaderV6_7.tsx';
import HeroSection from '../components/sections/HeroSection.tsx';
import Footer from '../components/layout/ConfluenceFooterV6_2.tsx';

// SEO Data
const seoData = {
  title: "Offre - Confluence Digitale",
  description: "Site web professionnel sans investissement initial. 0€ setup + 149€/mois.",
  canonical: "https://confluence-digitale.fr/offre",
  ogImage: "/images/og-offre.jpg"
};
---

<BaseLayout {...seoData}>
  <!-- Header (toujours interactif) -->
  <Header client:load />

  <!-- Main Content -->
  <main>
    <!-- Hero Section -->
    <HeroSection client:visible />

    <!-- Autres sections... -->
  </main>

  <!-- Footer -->
  <Footer client:visible />
</BaseLayout>
```

### Directives Hydratation

| Directive | Quand charger | Usage |
|-----------|---------------|-------|
| `client:load` | Immédiatement | Header (prioritaire) |
| `client:visible` | Quand visible | Footer, sections non-critiques |
| `client:idle` | Quand navigateur inactif | Widgets, chat |
| `client:only` | Client uniquement | Composants incompatibles SSR |

**Règle** : `client:load` pour Header, `client:visible` pour le reste

---

## 🎨 LAYOUTS

### BaseLayout.astro

```astro
---
import '../styles/global.css';

interface Props {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const { title, description, canonical, ogImage } = Astro.props;
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
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage || '/images/og-default.jpg'} />
  <meta property="og:type" content="website" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
</head>
<body class="bg-gray-50 text-gray-900 font-inter">
  <slot />
</body>
</html>
```

---

## ⚛️ COMPOSANTS REACT

### Header (Client:Load)

```tsx
// src/components/layout/ConfluenceHeaderV6_7.tsx
import React, { useState } from 'react';

export default function ConfluenceHeaderV6_7() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
      </div>
    </header>
  );
}
```

**Raison client:load** : Header doit être interactif immédiatement (menu mobile)

### Section (Client:Visible)

```tsx
// src/components/sections/FeaturesGrid.tsx
import React from 'react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function FeaturesGrid() {
  const features: Feature[] = [
    // Data...
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.id}>
              {/* Feature card */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Raison client:visible** : Section non-critique, peut attendre d'être visible

---

## 📝 FORMULAIRES

### ContactForm.tsx (Validation Temps Réel)

```tsx
// src/components/forms/ContactForm.tsx
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string | undefined => {
    if (name === 'name' && value.length < 2) {
      return 'Le nom doit contenir au moins 2 caractères';
    }
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Email invalide';
    }
    if (name === 'message' && value.length < 10) {
      return 'Le message doit contenir au moins 10 caractères';
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation complète
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Submit (API call ici)
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
  };

  const isFormValid = Object.keys(errors).length === 0 && 
                      Object.values(formData).every(v => v.length > 0);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Champs du formulaire... */}
    </form>
  );
}
```

---

## 🎨 STYLES GLOBAUX

### global.css

```css
@import '@fontsource/playfair-display/400.css';
@import '@fontsource/inter/400.css';
@import '@fontsource/inter/600.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-inter;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-playfair;
  }
}
```

---

## ⚙️ CONFIGURATION

### astro.config.mjs

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static', // SSG
  site: 'https://confluence-digitale.fr',
});
```

### tailwind.config.mjs

```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'gold-premium': '#D1A65E',
        'red-contractuel': '#A32E3A',
      },
    },
  },
  plugins: [],
};
```

---

## 📊 ROUTING ASTRO

### Routing Automatique

| Fichier | URL |
|---------|-----|
| `src/pages/index.astro` | `/` |
| `src/pages/offre.astro` | `/offre` |
| `src/pages/blog/index.astro` | `/blog` |
| `src/pages/blog/[slug].astro` | `/blog/mon-article` |

### Dynamic Routes

```astro
---
// src/pages/blog/[slug].astro
export async function getStaticPaths() {
  const posts = await Astro.glob('../content/blog/*.md');
  
  return posts.map(post => ({
    params: { slug: post.frontmatter.slug },
    props: { post }
  }));
}

const { post } = Astro.props;
---

<h1>{post.frontmatter.title}</h1>
<div set:html={post.compiledContent()} />
```

---

## 🎯 CONVENTIONS NOMMAGE

### Fichiers

| Type | Convention | Exemple |
|------|------------|---------|
| **Page Astro** | kebab-case | `etudes-de-cas.astro` |
| **Composant React** | PascalCase | `ContactForm.tsx` |
| **Layout** | PascalCase | `BaseLayout.astro` |
| **Style** | kebab-case | `global.css` |
| **Type** | PascalCase | `BlogPost.ts` |

### Composants

```tsx
// ✅ BON
ConfluenceHeaderV6_7.tsx
ContactFormV2.tsx
TeamBlock.tsx

// ❌ MAUVAIS
header.tsx
contactForm.tsx
team_block.tsx
```

---

## 🚀 BUILD & DÉPLOIEMENT

### Commandes

```bash
# Dev
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Lint
npm run lint
```

### Build Output

```
dist/
├── index.html
├── offre/index.html
├── blog/index.html
├── _astro/
│   ├── *.css
│   └── *.mjs  <!-- JavaScript optimisé et bundlé par Astro -->
└── images/
```

---

## 🎯 RÉSUMÉ POUR TOI (GEM'S)

### Structure à inclure dans prompts

```markdown
## 📁 Structure Fichiers

**Page destination** : `/src/pages/[nom].astro`
**Composants React** : `/src/components/[categorie]/[Nom].tsx`
**Layout** : `/src/layouts/BaseLayout.astro`

## ⚛️ Hydratation

- Header : `<Header client:load />`
- Sections : `<Section client:visible />`
- Footer : `<Footer client:visible />`

## 📝 Structure Page

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/layout/ConfluenceHeaderV6_7.tsx';

const seoData = {
  title: "...",
  description: "...",
  canonical: "..."
};
---

<BaseLayout {...seoData}>
  <Header client:load />
  <main>
    {/* Sections */}
  </main>
  <Footer client:visible />
</BaseLayout>
```
```

**Toujours préciser cette structure dans tes prompts !**

---

**🏗️ Architecture Astro maîtrisée ! 💪**