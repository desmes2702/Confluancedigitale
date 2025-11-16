# 🏗️ Contexte Layouts : Confluence Digitale

**Dossier** : `/src/layouts/`  
**Type** : Layouts Astro (.astro)  
**Framework** : Astro 5.x  
**Usage** : Structure réutilisable pour les pages

---

## 🎯 PHILOSOPHIE DES LAYOUTS

### Principe : DRY (Don't Repeat Yourself)

Les layouts permettent de **centraliser** :

✅ La structure HTML de base (`<html>`, `<head>`, `<body>`)  
✅ Les métadonnées SEO (title, description, Open Graph)  
✅ Les scripts globaux (analytics, GDPR, fonts)  
✅ Les styles globaux (Tailwind, globals.css)  
✅ Les composants persistants (GDPR banner)

### Avantages

```astro
<!-- ❌ SANS layout : Répétition dans chaque page -->
<html>
  <head>
    <title>Titre</title>
    <meta name="description" content="...">
    <!-- 50+ lignes répétées -->
  </head>
  <body>
    <!-- Contenu de la page -->
  </body>
</html>

<!-- ✅ AVEC layout : DRY et maintenable -->
<MainLayout title="Titre" description="...">
  <!-- Contenu de la page uniquement -->
</MainLayout>
```

---

## 📁 STRUCTURE DES LAYOUTS

### Layout principal : MainLayout.astro

```
/src/layouts/
├── MainLayout.astro      # Layout principal (99% des pages)
├── BlogLayout.astro      # Layout spécifique blog (optionnel)
└── LegalLayout.astro     # Layout pages légales (optionnel)
```

---

## 🏗️ MAINLAYOUT.ASTRO - STRUCTURE COMPLÈTE

### Props TypeScript

```astro
---
interface Props {
  title: string;                    // Titre de la page (obligatoire)
  description?: string;              // Description SEO (recommandé)
  keywords?: string;                 // Mots-clés SEO (optionnel)
  image?: string;                    // Image Open Graph (optionnel)
  noindex?: boolean;                 // Bloquer indexation (optionnel)
  canonicalUrl?: string;             // URL canonique (optionnel)
  structuredData?: object;           // JSON-LD (optionnel)
}

const {
  title,
  description = "Confluence Digitale : Agence web sur-mesure pour TPE et PME. Design moderne, stratégie claire, accompagnement humain.",
  keywords = "agence web, design moderne, TPE, PME, Bordeaux, site sur-mesure",
  image = "/images/og-image-default.jpg",
  noindex = false,
  canonicalUrl,
  structuredData
} = Astro.props;

// URL de base
const siteUrl = "https://confluence-digitale.fr";
const currentUrl = canonicalUrl || `${siteUrl}${Astro.url.pathname}`;

// Import global styles
import '../styles/globals.css';
---
```

### Structure HTML

```astro
<!DOCTYPE html>
<html lang="fr">
  <head>
    <!-- Meta charset et viewport -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO de base -->
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    
    <!-- Canonical URL -->
    <link rel="canonical" href={currentUrl} />
    
    <!-- Robots (noindex si nécessaire) -->
    {noindex ? (
      <meta name="robots" content="noindex, nofollow" />
    ) : (
      <meta name="robots" content="index, follow" />
    )}
    
    <!-- Open Graph (Facebook, LinkedIn) -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={currentUrl} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={`${siteUrl}${image}`} />
    <meta property="og:site_name" content="Confluence Digitale" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={currentUrl} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`${siteUrl}${image}`} />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    
    <!-- Fonts (Playfair Display + Inter) -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link 
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" 
      rel="stylesheet"
    />
    
    <!-- Données structurées JSON-LD -->
    {structuredData && (
      <script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
    )}
    
    <!-- Theme color (barre d'adresse mobile) -->
    <meta name="theme-color" content="#D1A65E" />
  </head>
  
  <body class="bg-fond-clair text-texte-principal antialiased">
    <!-- Contenu de la page -->
    <slot />
    
    <!-- GDPR Banner (persistant sur toutes les pages) -->
    <ConfluenceGDPRBanner client:load />
    
    <!-- Scripts globaux (analytics, etc.) -->
    <script>
      // Script d'initialisation (si nécessaire)
    </script>
  </body>
</html>
```

---

## 🎨 EXEMPLE D'UTILISATION

### Page simple

```astro
---
// src/pages/offre.astro
import MainLayout from '../layouts/MainLayout.astro';
import ConfluenceHeaderV6_7 from '../components/ConfluenceHeaderV6_7';
import ConfluenceFooterV6_2 from '../components/ConfluenceFooterV6_2';

const pageTitle = "Notre Offre | Confluence Digitale";
const pageDescription = "Découvrez notre offre unique de site web sur-mesure pour TPE et PME.";
---

<MainLayout title={pageTitle} description={pageDescription}>
  <ConfluenceHeaderV6_7 client:load />
  
  <main>
    <section class="py-16 lg:py-24">
      <div class="container mx-auto px-6 lg:px-12">
        <h1>Notre Offre</h1>
        <p class="mt-4">Contenu de la page...</p>
      </div>
    </section>
  </main>
  
  <ConfluenceFooterV6_2 client:load />
</MainLayout>
```

### Page avec métadonnées complètes

```astro
---
import MainLayout from '../layouts/MainLayout.astro';
import ConfluenceHeaderV6_7 from '../components/ConfluenceHeaderV6_7';
import ConfluenceFooterV6_2 from '../components/ConfluenceFooterV6_2';

const pageTitle = "Études de Cas | Confluence Digitale";
const pageDescription = "Découvrez comment nous avons aidé des TPE et PME à transformer leur présence digitale.";
const pageKeywords = "études de cas, portfolio, projets web, TPE, PME";
const pageImage = "/images/etudes-de-cas-og.jpg";

// Données structurées pour les études de cas
const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": pageTitle,
  "description": pageDescription,
  "url": "https://confluence-digitale.fr/etudes-de-cas",
  "publisher": {
    "@type": "Organization",
    "name": "Confluence Digitale",
    "url": "https://confluence-digitale.fr"
  }
};
---

<MainLayout 
  title={pageTitle} 
  description={pageDescription}
  keywords={pageKeywords}
  image={pageImage}
  structuredData={structuredData}
>
  <ConfluenceHeaderV6_7 client:load />
  
  <main>
    <!-- Contenu -->
  </main>
  
  <ConfluenceFooterV6_2 client:load />
</MainLayout>
```

### Page sans indexation (404, pages de test)

```astro
---
import MainLayout from '../layouts/MainLayout.astro';

const pageTitle = "Page non trouvée | Confluence Digitale";
const pageDescription = "La page que vous recherchez n'existe pas.";
---

<MainLayout 
  title={pageTitle} 
  description={pageDescription}
  noindex={true}
>
  <main>
    <section class="py-24 text-center">
      <h1>404 - Page non trouvée</h1>
      <p class="mt-4">La page que vous recherchez n'existe pas.</p>
      <a href="/" class="mt-8 inline-block text-gold-premium hover:underline">
        Retour à l'accueil
      </a>
    </section>
  </main>
</MainLayout>
```

---

## 🔧 LAYOUTS SPÉCIALISÉS (OPTIONNELS)

### BlogLayout.astro (pour articles de blog)

```astro
---
import MainLayout from './MainLayout.astro';
import ConfluenceHeaderV6_7 from '../components/ConfluenceHeaderV6_7';
import ConfluenceFooterV6_2 from '../components/ConfluenceFooterV6_2';

interface Props {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  image?: string;
  category?: string;
}

const {
  title,
  description,
  author,
  publishedDate,
  image,
  category
} = Astro.props;

// Données structurées Article
const structuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": title,
  "description": description,
  "author": {
    "@type": "Person",
    "name": author
  },
  "datePublished": publishedDate,
  "publisher": {
    "@type": "Organization",
    "name": "Confluence Digitale",
    "url": "https://confluence-digitale.fr"
  }
};
---

<MainLayout 
  title={title} 
  description={description} 
  image={image}
  structuredData={structuredData}
>
  <ConfluenceHeaderV6_7 client:load />
  
  <main>
    <article class="py-16 lg:py-24">
      <div class="container mx-auto px-6 lg:px-12 max-w-4xl">
        <!-- Header article -->
        <header class="mb-12">
          {category && (
            <span class="text-gold-premium uppercase text-sm">{category}</span>
          )}
          <h1 class="mt-4">{title}</h1>
          <div class="mt-4 flex items-center gap-4 text-sm text-texte-principal/60">
            <span>Par {author}</span>
            <span>•</span>
            <time datetime={publishedDate}>
              {new Date(publishedDate).toLocaleDateString('fr-FR')}
            </time>
          </div>
        </header>
        
        <!-- Contenu article -->
        <div class="prose prose-lg max-w-none">
          <slot />
        </div>
      </div>
    </article>
  </main>
  
  <ConfluenceFooterV6_2 client:load />
</MainLayout>
```

### LegalLayout.astro (pour pages légales)

```astro
---
import MainLayout from './MainLayout.astro';
import ConfluenceHeaderV6_7 from '../components/ConfluenceHeaderV6_7';
import ConfluenceFooterV6_2 from '../components/ConfluenceFooterV6_2';

interface Props {
  title: string;
  lastUpdated: string;
}

const { title, lastUpdated } = Astro.props;
---

<MainLayout 
  title={title}
  description={`${title} - Confluence Digitale`}
>
  <ConfluenceHeaderV6_7 client:load />
  
  <main>
    <article class="py-16 lg:py-24">
      <div class="container mx-auto px-6 lg:px-12 max-w-4xl">
        <header class="mb-12">
          <h1>{title}</h1>
          <p class="mt-4 text-sm text-texte-principal/60">
            Dernière mise à jour : {new Date(lastUpdated).toLocaleDateString('fr-FR')}
          </p>
        </header>
        
        <div class="prose prose-lg max-w-none">
          <slot />
        </div>
      </div>
    </article>
  </main>
  
  <ConfluenceFooterV6_2 client:load />
</MainLayout>
```

---

## 🔍 SEO ET MÉTADONNÉES

### Métadonnées obligatoires

```typescript
✅ OBLIGATOIRE :
- title (< 60 caractères)
- description (150-160 caractères)
- canonical URL (auto-généré)

⚠️ RECOMMANDÉ :
- keywords (mots-clés pertinents)
- image Open Graph (1200x630px)
- structuredData (JSON-LD)

❌ OPTIONNEL :
- noindex (uniquement pour 404, pages de test)
```

### Bonnes pratiques SEO

```astro
<!-- ✅ BON : Titre unique et descriptif -->
<MainLayout 
  title="Études de Cas Web Design | Confluence Digitale"
  description="Découvrez comment nous avons aidé +20 TPE/PME à transformer leur présence digitale avec des sites performants et sur-mesure."
/>

<!-- ❌ MAUVAIS : Titre générique -->
<MainLayout 
  title="Confluence Digitale"
  description="Notre site."
/>
```

### Open Graph (partage réseaux sociaux)

```astro
---
// Image Open Graph optimale : 1200x630px
const ogImage = "/images/og-image-offre.jpg";
---

<MainLayout 
  title="Notre Offre Unique | Confluence Digitale"
  description="Site web sur-mesure, stratégie claire, accompagnement humain."
  image={ogImage}
/>
```

---

## 🎨 STYLES GLOBAUX

### Import dans MainLayout

```astro
---
// Import styles globaux (Tailwind + customs)
import '../styles/globals.css';
---
```

### Contenu de /styles/globals.css

```css
/* Tailwind directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Variables CSS (couleurs Design System V6.7.2) */
@layer base {
  :root {
    --fond-clair: #F9FAFB;
    --texte-principal: #1A1A1A;
    --gold-premium: #D1A65E;
    --red-contractuel: #A32E3A;
    --green-validation: #10b981;
  }
}

/* Typographie (NE PAS MODIFIER) */
@layer base {
  h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    line-height: 1.2;
  }

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 600;
    line-height: 1.3;
  }

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
    line-height: 1.4;
  }

  p, li, a, button, input, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
  }
}

/* Utilitaires */
@layer utilities {
  .container {
    max-width: 1280px;
  }
}
```

---

## 📱 RESPONSIVE ET PERFORMANCE

### Viewport et mobile

```astro
<head>
  <!-- Viewport responsive -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Theme color (barre d'adresse mobile) -->
  <meta name="theme-color" content="#D1A65E" />
  
  <!-- Apple touch icon -->
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</head>
```

### Fonts loading (performance)

```astro
<head>
  <!-- Preconnect pour fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  
  <!-- Google Fonts avec display=swap -->
  <link 
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" 
    rel="stylesheet"
  />
</head>
```

---

## 🍪 GDPR ET CONFORMITÉ

### Banner GDPR persistant

```astro
<body>
  <!-- Contenu de la page -->
  <slot />
  
  <!-- GDPR Banner (toujours présent) -->
  <ConfluenceGDPRBanner client:load />
</body>
```

### Scripts analytics (conditionnels)

```astro
---
import { getGDPRConsent } from '../utils/gdprConsent';
---

<body>
  <slot />
  
  <!-- Analytics (si consentement) -->
  <script>
    // Charger analytics uniquement si consentement
    const consent = localStorage.getItem('gdpr_consent');
    if (consent && JSON.parse(consent).analytics) {
      // Charger Google Analytics
    }
  </script>
</body>
```

---

## 🚫 ERREURS FRÉQUENTES

### 1. Oublier le slot

```astro
❌ MAUVAIS : Pas de slot pour le contenu
<body>
  <!-- Pas de <slot /> -->
</body>

✅ BON :
<body>
  <slot />
</body>
```

### 2. Dupliquer les imports de styles

```astro
❌ MAUVAIS : Importer globals.css dans chaque page
// page.astro
import '../styles/globals.css'; // ❌ Doublon

✅ BON : Importer uniquement dans MainLayout
// MainLayout.astro
import '../styles/globals.css'; // ✅ Une seule fois
```

### 3. Métadonnées manquantes

```astro
❌ MAUVAIS : Pas de description
<MainLayout title="Ma Page">

✅ BON : Description complète
<MainLayout 
  title="Ma Page | Confluence Digitale"
  description="Description SEO de 150-160 caractères."
>
```

### 4. Image Open Graph manquante

```astro
❌ MAUVAIS : Pas d'image OG
<MainLayout title="Ma Page" description="...">

✅ BON : Image OG spécifique
<MainLayout 
  title="Ma Page" 
  description="..."
  image="/images/ma-page-og.jpg"
>
```

---

## ✅ CHECKLIST MAINLAYOUT

### Métadonnées

- [ ] Props TypeScript définies (Props interface)
- [ ] title obligatoire (< 60 caractères)
- [ ] description par défaut fournie (150-160 caractères)
- [ ] keywords optionnels
- [ ] image Open Graph par défaut

### SEO

- [ ] Canonical URL auto-généré
- [ ] Meta robots configuré (index/noindex)
- [ ] Open Graph complet (title, description, image, url)
- [ ] Twitter Card configuré
- [ ] JSON-LD supporté (structuredData)

### Performance

- [ ] Preconnect fonts
- [ ] display=swap sur Google Fonts
- [ ] Theme color défini

### Styles et scripts

- [ ] globals.css importé
- [ ] Tailwind directives présentes
- [ ] GDPR Banner présent
- [ ] Scripts analytics conditionnels

### HTML

- [ ] lang="fr" sur <html>
- [ ] charset UTF-8
- [ ] viewport responsive
- [ ] Favicon configuré
- [ ] <slot /> présent dans <body>

---

**💡 Le MainLayout est la fondation de toutes vos pages. Il centralise la configuration SEO, les styles globaux et garantit la cohérence du site.**

**🚀 Une fois configuré correctement, vous n'avez plus qu'à l'utiliser dans chaque page avec les props appropriées !**
