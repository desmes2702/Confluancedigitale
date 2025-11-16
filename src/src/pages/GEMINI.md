# 📄 Contexte Pages : Confluence Digitale

**Dossier** : `/src/pages/`  
**Type** : Pages Astro (.astro)  
**Framework** : Astro 5.x (SSG - Static Site Generation)  
**Output** : HTML statique optimisé

---

## 🎯 PHILOSOPHIE ASTRO POUR LES PAGES

### Principe : Zero JavaScript par défaut

```astro
<!-- ✅ BON : Astro génère du HTML statique pur -->
<h1>Bienvenue sur Confluence Digitale</h1>
<p>Pas de JavaScript envoyé au client !</p>

<!-- ✅ BON : Composant React uniquement si interactif -->
<ConfluenceContactForm client:visible />

<!-- ❌ MAUVAIS : Tout en React sans raison -->
<ReactPage />
```

### Stratégie d'hydratation

```astro
<!-- Charger immédiatement (header, navigation) -->
<ConfluenceHeaderV6_7 client:load />

<!-- Charger quand visible (FAQ, formulaires) -->
<ConfluenceFAQ client:visible />

<!-- Charger quand idle (analytics, chat) -->
<AnalyticsScript client:idle />

<!-- Charger sur interaction média (carousels) -->
<ImageCarousel client:media="(min-width: 768px)" />
```

---

## 📁 STRUCTURE TYPE D'UNE PAGE ASTRO

### Template de base

```astro
---
// 1. Imports
import MainLayout from '../layouts/MainLayout.astro';
import ConfluenceHeaderV6_7 from '../components/ConfluenceHeaderV6_7';
import ConfluenceFooterV6_2 from '../components/ConfluenceFooterV6_2';
import ConfluenceTeamBlock from '../components/ConfluenceTeamBlock';

// 2. Métadonnées SEO
const pageTitle = "Titre de la Page | Confluence Digitale";
const pageDescription = "Description SEO optimisée (150-160 caractères) pour cette page.";
const pageKeywords = "mots-clés, séparés, par, virgules";

// 3. Données dynamiques (optionnel - Strapi)
const response = await fetch(`${import.meta.env.STRAPI_URL}/api/projects?populate=*`);
const data = await response.json();
const projects = data.data;
---

<!-- 4. Layout principal -->
<MainLayout 
  title={pageTitle} 
  description={pageDescription}
  keywords={pageKeywords}
>
  <!-- 5. Header -->
  <ConfluenceHeaderV6_7 client:load />

  <!-- 6. Contenu principal -->
  <main>
    <!-- Hero section -->
    <section class="py-16 lg:py-24 bg-fond-clair">
      <div class="container mx-auto px-6 lg:px-12">
        <h1 class="text-gold-premium">Titre Principal</h1>
        <p class="mt-4">Description de la page.</p>
      </div>
    </section>

    <!-- Autres sections -->
    <section class="py-16 lg:py-24">
      <!-- Contenu statique ou composants React -->
    </section>

    <!-- Triade professionnelle (si page clé) -->
    <ConfluenceTeamBlock client:visible />
  </main>

  <!-- 7. Footer -->
  <ConfluenceFooterV6_2 client:load />
</MainLayout>
```

### Template avec données Strapi

```astro
---
import MainLayout from '../layouts/MainLayout.astro';
import ConfluenceHeaderV6_7 from '../components/ConfluenceHeaderV6_7';
import ConfluenceProjectCard from '../components/ConfluenceProjectCard';
import type { StrapiProject } from '../types/strapi';

// Fetch data au build time
const strapiUrl = import.meta.env.STRAPI_URL || 'http://localhost:1337';
const response = await fetch(`${strapiUrl}/api/projects?populate=*`);
const data = await response.json();
const projects: StrapiProject[] = data.data;

const pageTitle = "Projets | Confluence Digitale";
const pageDescription = "Découvrez nos projets réalisés pour des TPE et PME.";
---

<MainLayout title={pageTitle} description={pageDescription}>
  <ConfluenceHeaderV6_7 client:load />

  <main>
    <section class="py-16 lg:py-24">
      <div class="container mx-auto px-6 lg:px-12">
        <h1>Nos Projets</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <ConfluenceProjectCard 
              project={project} 
              client:visible 
            />
          ))}
        </div>
      </div>
    </section>
  </main>

  <ConfluenceFooterV6_2 client:load />
</MainLayout>
```

---

## 🗺️ PAGES DU SITE

### Pages principales (obligatoires)

| Page | Fichier | Triade | Description |
|------|---------|--------|-------------|
| **Landing** | `index.astro` | ✅ Oui | Page d'accueil |
| **Offre** | `offre.astro` | ✅ Oui | Détails de l'offre unique |
| **Méthode** | `methode.astro` | ✅ Oui | Process de travail |
| **Études de cas** | `etudes-de-cas.astro` | ✅ Oui | Portfolio clients |
| **Équipe** | `equipe.astro` | ✅ Oui | Présentation de l'équipe |
| **Audit Gratuit** | `audit-gratuit.astro` | ❌ Non | Formulaire audit |
| **Contact** | `contact.astro` | ❌ Non | Formulaire contact |
| **Exclusivité** | `exclusivite.astro` | ✅ Oui | Garantie exclusivité sectorielle |
| **Concurrents** | `concurrents.astro` | ✅ Oui | Comparaison avec concurrents |

### Pages légales (obligatoires)

| Page | Fichier | Triade |
|------|---------|--------|
| **Mentions légales** | `mentions-legales.astro` | ❌ Non |
| **Politique de confidentialité** | `politique-confidentialite.astro` | ❌ Non |
| **CGV** | `cgv.astro` | ❌ Non |

### Pages système

| Page | Fichier | Description |
|------|---------|-------------|
| **404** | `404.astro` | Page d'erreur |
| **Logos** | `logos.astro` | Showcase logos clients |
| **Réservation** | `reservation.astro` | Système de réservation |

---

## 🎨 SECTIONS STANDARDS

### Hero section (haut de page)

```astro
<section class="relative py-24 lg:py-32 bg-gradient-to-b from-fond-clair to-white">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-gold-premium">
        Titre Principal de la Page
      </h1>
      <p class="mt-6 max-w-2xl mx-auto">
        Sous-titre explicatif qui donne le contexte et incite à l'action.
      </p>
      
      <!-- CTA principal -->
      <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="/audit-gratuit" 
          class="inline-flex items-center justify-center px-6 py-3 bg-gold-premium text-white rounded-lg hover:bg-gold-premium/90 transition-colors"
        >
          Demander mon audit gratuit
        </a>
        <a 
          href="/offre" 
          class="inline-flex items-center justify-center px-6 py-3 border border-gold-premium text-gold-premium rounded-lg hover:bg-gold-premium/10 transition-colors"
        >
          Découvrir l'offre
        </a>
      </div>
    </div>
  </div>
</section>
```

### Section de contenu (milieu de page)

```astro
<section class="py-16 lg:py-24">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="max-w-4xl mx-auto">
      <!-- Titre de section -->
      <h2 class="text-gold-premium text-center">
        Titre de la Section
      </h2>
      
      <!-- Contenu -->
      <div class="mt-12 space-y-6">
        <p>
          Contenu texte de la section avec paragraphes bien espacés.
        </p>
        <p>
          Autre paragraphe avec des informations complémentaires.
        </p>
      </div>
    </div>
  </div>
</section>
```

### Section avec grille (projets, services)

```astro
<section class="py-16 lg:py-24 bg-fond-clair">
  <div class="container mx-auto px-6 lg:px-12">
    <h2 class="text-gold-premium text-center">
      Nos Services
    </h2>
    
    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Cards statiques ou composants React -->
      {services.map((service) => (
        <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-gold-premium">{service.title}</h3>
          <p class="mt-4">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Section CTA (appel à l'action)

```astro
<section class="py-16 lg:py-24 bg-gold-premium text-white">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="max-w-3xl mx-auto text-center">
      <h2>
        Prêt à transformer votre présence digitale ?
      </h2>
      <p class="mt-4 opacity-90">
        Demandez votre audit gratuit et découvrez comment nous pouvons 
        vous aider à atteindre vos objectifs.
      </p>
      
      <a 
        href="/audit-gratuit" 
        class="mt-8 inline-flex items-center justify-center px-8 py-4 bg-white text-gold-premium rounded-lg hover:bg-fond-clair transition-colors"
      >
        Demander mon audit gratuit
      </a>
    </div>
  </div>
</section>
```

---

## 🎨 DESIGN SYSTEM V6.7.2

### Couleurs (classes Tailwind)

```astro
<!-- Fonds -->
<section class="bg-fond-clair">      <!-- #F9FAFB -->
<section class="bg-white">
<section class="bg-gold-premium">    <!-- #D1A65E -->
<section class="bg-red-contractuel"> <!-- #A32E3A -->

<!-- Textes -->
<h1 class="text-gold-premium">
<h2 class="text-texte-principal">    <!-- #1A1A1A -->
<p class="text-texte-principal/80">  <!-- 80% opacité -->

<!-- Bordures -->
<div class="border border-gold-premium">
<div class="border-t border-texte-principal/10">
```

### ⚠️ INTERDIT : Classes typographiques

```astro
❌ NE PAS utiliser :
<h1 class="text-5xl font-bold leading-tight">

✅ À LA PLACE :
<h1 class="text-gold-premium">
<!-- Les styles sont dans /styles/globals.css -->
```

### Espacement responsive

```astro
<!-- Padding de section -->
<section class="py-16 lg:py-24">

<!-- Container -->
<div class="container mx-auto px-6 lg:px-12">

<!-- Gap grille -->
<div class="grid gap-6 lg:gap-8">

<!-- Espace vertical -->
<div class="space-y-6 lg:space-y-8">
```

---

## 🔗 NAVIGATION ET LIENS

### Liens internes

```astro
<!-- Navigation simple -->
<a href="/offre">Découvrir l'offre</a>

<!-- Navigation avec style -->
<a 
  href="/audit-gratuit"
  class="inline-flex items-center gap-2 text-gold-premium hover:underline"
>
  Audit gratuit
  <svg><!-- icône --></svg>
</a>

<!-- Bouton de navigation -->
<a 
  href="/contact"
  class="inline-flex items-center justify-center px-6 py-3 bg-gold-premium text-white rounded-lg hover:bg-gold-premium/90 transition-colors"
>
  Nous contacter
</a>
```

### Liens externes

```astro
<!-- Lien externe avec sécurité -->
<a 
  href="https://example.com" 
  target="_blank" 
  rel="noopener noreferrer"
  class="text-gold-premium hover:underline"
>
  Lien externe
</a>
```

---

## 📊 SEO ET MÉTADONNÉES

### Métadonnées dans MainLayout

```astro
---
// page.astro
const pageTitle = "Titre de la Page | Confluence Digitale";
const pageDescription = "Description SEO de 150-160 caractères maximum décrivant le contenu de la page.";
const pageKeywords = "web design, agence digitale, TPE, PME, Bordeaux";
const pageImage = "/images/og-image.jpg"; // Open Graph image
---

<MainLayout 
  title={pageTitle} 
  description={pageDescription}
  keywords={pageKeywords}
  image={pageImage}
>
  <!-- Contenu -->
</MainLayout>
```

### Structure HTML sémantique

```astro
<!-- ✅ BON : Structure sémantique -->
<main>
  <article>
    <header>
      <h1>Titre principal</h1>
      <p>Introduction</p>
    </header>
    
    <section>
      <h2>Section 1</h2>
      <p>Contenu</p>
    </section>
    
    <section>
      <h2>Section 2</h2>
      <p>Contenu</p>
    </section>
    
    <footer>
      <p>Conclusion</p>
    </footer>
  </article>
</main>

<!-- ❌ MAUVAIS : Divs partout -->
<div>
  <div>
    <div>Titre</div>
    <div>Contenu</div>
  </div>
</div>
```

### Données structurées (JSON-LD)

```astro
---
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": pageTitle,
  "description": pageDescription,
  "url": `https://confluence-digitale.fr${Astro.url.pathname}`,
};
---

<script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
```

---

## 🖼️ IMAGES ET MÉDIAS

### Images optimisées Astro

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/images/hero.jpg';
---

<!-- Image optimisée automatiquement -->
<Image 
  src={heroImage} 
  alt="Description de l'image" 
  width={1200} 
  height={600}
  loading="lazy"
  class="w-full h-auto rounded-lg"
/>
```

### Images depuis Strapi/Cloudinary

```astro
<img 
  src={project.attributes.image.data.attributes.url}
  alt={project.attributes.image.data.attributes.alternativeText || project.attributes.title}
  loading="lazy"
  class="w-full h-64 object-cover rounded-lg"
/>
```

### Composant ImageWithFallback (pour images dynamiques)

```astro
---
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
---

<ImageWithFallback 
  src={imageSrc}
  alt="Description"
  className="w-full h-64 object-cover"
  client:load
/>
```

---

## 👥 TRIADE PROFESSIONNELLE

### Intégration sur pages clés

```astro
---
import ConfluenceTeamBlock from '../components/ConfluenceTeamBlock';
---

<main>
  <!-- Contenu de la page -->
  
  <!-- Triade avant le footer (pages clés) -->
  <ConfluenceTeamBlock 
    variant="default"
    showImages={true}
    client:visible 
  />
</main>
```

### Pages nécessitant la Triade

✅ **OUI** : Landing, Offre, Méthode, Études de cas, Équipe, Exclusivité, Concurrents  
❌ **NON** : Audit gratuit, Contact, Mentions légales, CGV, Politique de confidentialité, 404

---

## 📱 RESPONSIVE DESIGN

### Mobile-first approach

```astro
<!-- Toujours commencer par mobile -->
<div class="
  flex flex-col gap-4        <!-- Mobile par défaut -->
  md:flex-row md:gap-6       <!-- Tablet -->
  lg:gap-8                   <!-- Desktop -->
">

<!-- Images responsive -->
<img 
  src={image}
  class="
    w-full h-48 object-cover  <!-- Mobile -->
    md:h-64                   <!-- Tablet -->
    lg:h-80                   <!-- Desktop -->
  "
  alt="Description"
/>

<!-- Container responsive -->
<div class="container mx-auto px-6 lg:px-12">
  <!-- Contenu -->
</div>
```

---

## 🔄 MIGRATION DEPUIS REACT

### Pattern de migration

```tsx
// ❌ AVANT : ConfluenceLandingPage.tsx (React)
export default function ConfluenceLandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
```

```astro
<!-- ✅ APRÈS : index.astro (Astro) -->
---
import MainLayout from '../layouts/MainLayout.astro';
import ConfluenceHeaderV6_7 from '../components/ConfluenceHeaderV6_7';
import ConfluenceHero from '../components/ConfluenceHero';
import ConfluenceFeatures from '../components/ConfluenceFeatures';
import ConfluenceFooterV6_2 from '../components/ConfluenceFooterV6_2';
---

<MainLayout title="Accueil | Confluence Digitale">
  <ConfluenceHeaderV6_7 client:load />
  
  <main>
    <!-- Hero statique (HTML pur) -->
    <section class="py-24 lg:py-32">
      <!-- Contenu hero en HTML -->
    </section>
    
    <!-- Features interactives (React si nécessaire) -->
    <ConfluenceFeatures client:visible />
  </main>
  
  <ConfluenceFooterV6_2 client:load />
</MainLayout>
```

### Règles de migration

1. **Contenu statique** → HTML Astro pur
2. **Contenu interactif** → Composant React avec `client:*`
3. **Animations** → Motion/React avec `client:visible`
4. **Formulaires** → Composant React avec `client:load`

---

## 🚫 ERREURS FRÉQUENTES

### 1. Tout mettre en React

```astro
❌ MAUVAIS : Charger React pour du contenu statique
<ReactComponent client:load />

✅ BON : HTML statique Astro
<section>
  <h1>Titre statique</h1>
  <p>Contenu statique</p>
</section>
```

### 2. Oublier client:* sur composants React

```astro
❌ MAUVAIS : React non hydraté
<ConfluenceContactForm />

✅ BON : React hydraté au bon moment
<ConfluenceContactForm client:visible />
```

### 3. Classes typographiques Tailwind

```astro
❌ MAUVAIS :
<h1 class="text-5xl font-bold">

✅ BON :
<h1 class="text-gold-premium">
```

### 4. Oublier les métadonnées SEO

```astro
❌ MAUVAIS : Pas de métadonnées
<MainLayout>

✅ BON : Métadonnées complètes
<MainLayout 
  title="Titre | Confluence Digitale"
  description="Description SEO"
>
```

### 5. Structure HTML non sémantique

```astro
❌ MAUVAIS :
<div>
  <div>Titre</div>
  <div>Contenu</div>
</div>

✅ BON :
<section>
  <h2>Titre</h2>
  <p>Contenu</p>
</section>
```

---

## ✅ CHECKLIST AVANT COMMIT

### SEO et métadonnées

- [ ] Titre de page unique et descriptif (< 60 caractères)
- [ ] Description SEO (150-160 caractères)
- [ ] Mots-clés pertinents
- [ ] Image Open Graph (si applicable)
- [ ] Données structurées JSON-LD (si applicable)

### Structure et contenu

- [ ] HTML sémantique (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`)
- [ ] Hiérarchie de titres correcte (H1 → H2 → H3)
- [ ] Attributs `alt` sur toutes les images
- [ ] Liens externes avec `rel="noopener noreferrer"`

### Design System V6.7.2

- [ ] Couleurs de la palette utilisées
- [ ] Aucune classe typographique Tailwind (text-*, font-*, leading-*)
- [ ] Espacement responsive (py-16 lg:py-24)
- [ ] Container responsive (px-6 lg:px-12)

### Performance et interactivité

- [ ] Contenu statique en HTML Astro pur
- [ ] Composants React avec directive `client:*` appropriée
- [ ] Images avec `loading="lazy"` (sauf above-the-fold)
- [ ] Triade intégrée (si page clé)

### Responsive et accessibilité

- [ ] Testé sur mobile, tablet, desktop
- [ ] Navigation au clavier fonctionnelle
- [ ] Contrastes de couleurs suffisants
- [ ] ARIA labels sur éléments interactifs si nécessaire

---

**💡 Ce fichier de contexte guide Gemini Code Assist pour créer des pages Astro optimisées, SEO-friendly et conformes au Design System V6.7.2.**
