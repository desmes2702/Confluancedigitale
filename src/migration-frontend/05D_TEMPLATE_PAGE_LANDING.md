# 🏠 TEMPLATE - PAGE LANDING (ACCUEIL) COMPLÈTE

**Objectif** : Template complet de la page Landing avec 7 sections  
**Version** : Design System V6.7.2 "APP MODERNE 2025"  
**Architecture** : Astro + React Islands

---

## 📋 TABLE DES MATIÈRES

1. [Page index.astro Complète](#-template-1--page-indexastro-complète)
2. [Hero Full-Screen](#-template-2--hero-full-screen)
3. [Scroll Indicator](#-template-3--scroll-indicator)
4. [Section Contraste](#-template-4--section-contraste-nous-vs-autres)
5. [Pain Points](#-template-5--pain-points-frustrations)
6. [Solutions (3 Piliers)](#-template-6--solutions-3-piliers)
7. [Social Proof](#-template-7--social-proof-stats)
8. [Config Data](#-template-8--config-data)

---

## 🎯 VUE D'ENSEMBLE

### Structure complète de la landing page

```
┌─────────────────────────────────────────┐
│ ConfluenceHeaderV6_7 (Fixed)            │
├─────────────────────────────────────────┤
│ 1. HERO FULL-SCREEN                     │
│    - Titre "Devenez visible"            │
│    - Score 100/100 (vert)               │
│    - Scroll indicator (Mouse bounce)    │
├─────────────────────────────────────────┤
│ 2. SECTION CONTRASTE                    │
│    - Tableau Nous vs Autres             │
│    - Rouge (Autres) vs Vert (Nous)      │
├─────────────────────────────────────────┤
│ 3. PAIN POINTS                          │
│    - Frustrations TPE (rouge)           │
│    - Animation slide-in gauche          │
├─────────────────────────────────────────┤
│ 4. SOLUTIONS (3 Piliers)                │
│    - Performance 100/100                │
│    - Autonomie Totale                   │
│    - Support Illimité                   │
├─────────────────────────────────────────┤
│ 5. SOCIAL PROOF                         │
│    - Stats : 100/100, < 1s, 90j         │
│    - Animation scale-in                 │
├─────────────────────────────────────────┤
│ 6. FAQ                                  │
│    - ConfluenceFAQ (React)              │
├─────────────────────────────────────────┤
│ 7. CTA FINAL                            │
│    - "Dominer Votre Marché"             │
│    - CTA Audit Gratuit                  │
├─────────────────────────────────────────┤
│ ConfluenceFooterV6_2                    │
│ CookieManager                           │
└─────────────────────────────────────────┘
```

---

## 📄 TEMPLATE #1 : PAGE `index.astro` COMPLÈTE

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import ConfluenceHeaderV6_7 from '../components/layout/ConfluenceHeaderV6_7.tsx';
import ConfluenceFooterV6_2 from '../components/layout/ConfluenceFooterV6_2.tsx';
import HeroFullScreen from '../components/landing/HeroFullScreen.astro';
import ContrastSection from '../components/landing/ContrastSection.astro';
import PainPointsSection from '../components/landing/PainPointsSection.astro';
import SolutionsSection from '../components/landing/SolutionsSection.astro';
import SocialProofSection from '../components/landing/SocialProofSection.astro';
import ConfluenceFAQ from '../components/sections/ConfluenceFAQ.tsx';
import FinalCTASection from '../components/landing/FinalCTASection.tsx';
import CookieManager from '../components/cookies/CookieManager.tsx';

const seoData = {
  title: "Sites Web Premium pour TPE/PME | Confluence Digitale - Performance 100/100 Garantie",
  description: "Devenez visible. Vraiment visible. Sites web 100/100 Performance PageSpeed garantie. Autonomie totale + Support illimité. Setup 0€ puis 149€/mois.",
  canonical: "https://confluence-digitale.fr/",
  ogImage: "/images/og-landing.jpg"
};
---

<BaseLayout {...seoData}>
  <ConfluenceHeaderV6_7 client:load />
  
  <main>
    <!-- 1. HERO FULL-SCREEN (Statique) -->
    <HeroFullScreen />
    
    <!-- 2. SECTION CONTRASTE (Statique) -->
    <ContrastSection />
    
    <!-- 3. PAIN POINTS (Statique avec animations CSS) -->
    <PainPointsSection />
    
    <!-- 4. SOLUTIONS (Statique) -->
    <SolutionsSection />
    
    <!-- 5. SOCIAL PROOF (Statique) -->
    <SocialProofSection />
    
    <!-- 6. FAQ (React - Accordéons) -->
    <section class="relative py-20 md:py-32 px-4 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <ConfluenceFAQ client:visible />
        </div>
      </div>
    </section>
    
    <!-- 7. CTA FINAL (React - Tracking) -->
    <FinalCTASection client:visible />
  </main>
  
  <ConfluenceFooterV6_2 client:visible />
  <CookieManager client:load />
</BaseLayout>
```

**Notes** :
- Sections 1-5 : **Astro** (statiques)
- Section 6 (FAQ) : **React** avec `client:visible` (accordéons)
- Section 7 (CTA) : **React** avec `client:visible` (tracking)

---

## 🚀 TEMPLATE #2 : HERO FULL-SCREEN

```astro
---
// src/components/landing/HeroFullScreen.astro
import ScrollIndicator from './ScrollIndicator.tsx';
import { Button } from '../ui/button';
---

<section 
  class="
    relative 
    min-h-screen 
    flex items-center justify-center 
    pt-28 lg:pt-32 pb-16 px-4 
    overflow-hidden
    bg-gradient-to-b from-white via-gray-50 to-white
  "
>
  <div class="max-w-6xl mx-auto text-center">
    {/* Titre principal */}
    <h1 
      class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-slate-900 mb-6"
      style="font-family: 'Playfair Display', serif; font-weight: 400;"
    >
      Devenez visible.
      <br />
      <span class="text-[#D1A65E]">Vraiment</span> visible.
    </h1>

    {/* Sous-titre avec score 100/100 */}
    <p class="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-16">
      Nous garantissons la performance. <span class="font-bold text-emerald-500">100/100</span>.<br />
      C'est la meilleure base pour dominer votre marché local sur Google.
    </p>

    {/* CTA principal */}
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a 
        href="/audit-gratuit"
        class="
          px-8 py-4 
          bg-emerald-500 hover:bg-emerald-600 
          text-white 
          rounded-lg 
          text-lg font-semibold
          transition-all duration-300
          hover:scale-105
          shadow-lg hover:shadow-xl
        "
        style="box-shadow: 0 10px 30px -5px rgba(16, 185, 129, 0.3);"
      >
        Audit Gratuit de Mon Site
      </a>
      
      <a 
        href="/offre"
        class="
          px-8 py-4 
          bg-white hover:bg-gray-50 
          text-slate-900 
          border-2 border-gray-200
          rounded-lg 
          text-lg font-semibold
          transition-all duration-300
        "
      >
        Découvrir l'Offre
      </a>
    </div>

    {/* Scroll Indicator */}
    <ScrollIndicator client:load />
  </div>
</section>
```

**Spécificités** :
- `min-h-screen` : **UNIQUE** à la landing page
- Titre responsive : `text-5xl → text-8xl`
- Score 100/100 en vert (`emerald-500`)
- Accent "Vraiment" en or (`#D1A65E`)
- 2 CTA : principal (vert) + secondaire (blanc)

---

## 🖱️ TEMPLATE #3 : SCROLL INDICATOR

```tsx
// src/components/landing/ScrollIndicator.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mouse } from 'lucide-react';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Apparaît après 1.2s
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleScrollToNextSection = () => {
    const contrastSection = document.getElementById('contrast-section');
    if (contrastSection) {
      contrastSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="mt-16"
    >
      <button
        onClick={handleScrollToNextSection}
        className="
          mx-auto 
          flex flex-col items-center gap-2 
          text-gray-500 hover:text-[#D1A65E] 
          transition-colors duration-300 
          cursor-pointer
        "
        aria-label="Scroll to next section"
      >
        <span className="text-sm">Découvrir</span>
        <Mouse className="w-6 h-6 animate-bounce" strokeWidth={1.5} />
      </button>
    </motion.div>
  );
}
```

**Spécificités** :
- Délai 1.2s avant apparition
- Smooth scroll vers section suivante (`#contrast-section`)
- Animation bounce sur l'icône Mouse
- Hover or (`#D1A65E`)

---

## ⚖️ TEMPLATE #4 : SECTION CONTRASTE (Nous vs Autres)

```astro
---
// src/components/landing/ContrastSection.astro
import { X, CheckCircle2 } from 'lucide-react';
import { LANDING_DATA } from '@/config/landing-data';

const { otherAgencies, confluenceOffers } = LANDING_DATA;
---

<section 
  id="contrast-section"
  class="relative py-20 md:py-32 px-4 bg-white"
>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      {/* Titre */}
      <div class="text-center mb-12 md:mb-16">
        <h2 
          class="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6"
          style="font-family: 'Playfair Display', serif; font-weight: 400;"
        >
          Le <span class="text-red-600">Problème</span> vs La <span class="text-emerald-500">Solution</span>
        </h2>
        <p class="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Comparez votre situation actuelle avec ce que nous garantissons contractuellement.
        </p>
      </div>

      {/* Tableau comparatif 2 colonnes */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* COLONNE GAUCHE - Autres agences (Rouge) */}
        <div class="rounded-2xl overflow-hidden relative p-8 bg-white border border-red-200">
          <div class="text-center mb-6">
            <h3 class="text-2xl md:text-3xl text-red-600 mb-2 font-semibold">
              Autres Agences Web
            </h3>
            <p class="text-sm text-gray-600">Ce que vous subissez actuellement</p>
          </div>

          <ul class="space-y-4">
            {otherAgencies.map((item) => (
              <li class="flex items-start gap-3">
                <X class="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" stroke-width={2} />
                <span class="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* COLONNE DROITE - Nous (Vert) */}
        <div 
          class="rounded-2xl overflow-hidden relative p-8 bg-white border-2 border-emerald-500"
          style="box-shadow: 0 4px 24px 0 rgba(16, 185, 129, 0.12);"
        >
          <div class="text-center mb-6">
            <h3 class="text-2xl md:text-3xl text-emerald-500 mb-2 font-semibold">
              Confluence Digitale
            </h3>
            <p class="text-sm text-gray-600">Notre engagement contractuel</p>
          </div>

          <ul class="space-y-4">
            {confluenceOffers.map((item) => (
              <li class="flex items-start gap-3">
                <CheckCircle2 class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" stroke-width={2} />
                <span class="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  </div>
</section>
```

**Asymétrie visuelle** :
- Gauche : Bordure rouge fine, pas de shadow accent
- Droite : Bordure verte épaisse (`border-2`), shadow verte

---

## 😰 TEMPLATE #5 : PAIN POINTS (Frustrations)

```astro
---
// src/components/landing/PainPointsSection.astro
import { X } from 'lucide-react';
import { LANDING_DATA } from '@/config/landing-data';

const { painPoints } = LANDING_DATA;
---

<section class="relative py-20 md:py-32 px-4 bg-gray-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      {/* Titre */}
      <div class="text-center mb-12 md:mb-16">
        <h2 
          class="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6"
          style="font-family: 'Playfair Display', serif; font-weight: 400;"
        >
          Vous avez un site web.<br />
          Mais <span class="text-red-600">rien ne se passe</span>.
        </h2>
        <p class="text-lg md:text-xl text-gray-700">
          Ces problèmes vous parlent ?
        </p>
      </div>

      {/* Liste des pain points */}
      <div class="space-y-4">
        {painPoints.map((pain, index) => (
          <div 
            class="
              flex items-start gap-4 
              p-6 rounded-xl 
              bg-red-50 border border-red-200
              pain-point-item
            "
            style={`animation-delay: ${index * 0.1}s;`}
          >
            <X class="w-6 h-6 text-red-600 flex-shrink-0 mt-1" stroke-width={2} />
            <p class="text-base md:text-lg text-gray-800">{pain}</p>
          </div>
        ))}
      </div>

      {/* CTA intermédiaire */}
      <div class="mt-12 text-center">
        <a 
          href="/audit-gratuit"
          class="
            inline-flex items-center gap-2
            px-6 py-3
            bg-emerald-500 hover:bg-emerald-600
            text-white
            rounded-lg
            font-semibold
            transition-colors
          "
        >
          Résoudre Ces Problèmes Maintenant
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .pain-point-item {
    animation: slideInLeft 0.6s ease-out forwards;
    opacity: 0;
  }
</style>
```

**Spécificités** :
- Background rouge clair (`bg-red-50`)
- Animation slide-in depuis la gauche
- Délai progressif avec `animation-delay`
- CTA intermédiaire après les pain points

---

## 💡 TEMPLATE #6 : SOLUTIONS (3 Piliers)

```astro
---
// src/components/landing/SolutionsSection.astro
import { Gauge, Shield, Clock } from 'lucide-react';
import { LANDING_DATA } from '@/config/landing-data';

const { solutions } = LANDING_DATA;

// Map des icônes
const iconMap = {
  'Gauge': Gauge,
  'Shield': Shield,
  'Clock': Clock
};
---

<section class="relative py-20 md:py-32 px-4 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      {/* Titre */}
      <div class="text-center mb-12 md:mb-16">
        <h2 
          class="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6"
          style="font-family: 'Playfair Display', serif; font-weight: 400;"
        >
          Notre <span class="text-emerald-500">Promesse</span> Contractuelle
        </h2>
        <p class="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          3 piliers pour transformer votre présence en ligne
        </p>
      </div>

      {/* Grille 3 colonnes */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => {
          const IconComponent = iconMap[solution.icon as keyof typeof iconMap];
          return (
            <div 
              class="
                solution-card
                p-8 rounded-2xl 
                bg-white border-2 border-gray-200
                hover:border-emerald-500
                transition-all duration-300
              "
              style={`animation-delay: ${index * 0.15}s; box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.04);`}
            >
              {/* Icône */}
              <div class="mb-6">
                <div class="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <IconComponent class="w-8 h-8 text-emerald-500" stroke-width={1.5} />
                </div>
              </div>

              {/* Titre */}
              <h3 
                class="text-2xl text-slate-900 mb-4"
                style="font-family: 'Playfair Display', serif; font-weight: 600;"
              >
                {solution.title}
              </h3>

              {/* Description */}
              <p class="text-gray-700">
                {solution.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .solution-card {
    animation: slideUp 0.6s ease-out forwards;
    opacity: 0;
  }

  .solution-card:hover {
    transform: translateY(-5px);
  }
</style>
```

**Spécificités** :
- Grille 3 colonnes (`md:grid-cols-3`)
- Icônes dans cercles verts clairs
- Hover : bordure verte + translate up
- Animation slide-up avec délai progressif

---

## 📊 TEMPLATE #7 : SOCIAL PROOF (Stats)

```astro
---
// src/components/landing/SocialProofSection.astro
import { LANDING_DATA } from '@/config/landing-data';

const { proofStats } = LANDING_DATA;
---

<section class="relative py-20 md:py-32 px-4 bg-gray-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      {/* Titre */}
      <div class="text-center mb-12 md:mb-16">
        <h2 
          class="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-4"
          style="font-family: 'Playfair Display', serif; font-weight: 400;"
        >
          Des <span class="text-emerald-500">Résultats</span> Mesurables
        </h2>
        <p class="text-lg md:text-xl text-gray-700">
          Pas de promesses floues. Juste des garanties contractuelles.
        </p>
      </div>

      {/* Grille de stats */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {proofStats.map((stat, index) => (
          <div 
            class="
              stat-card
              text-center 
              p-8 rounded-2xl 
              bg-white border border-gray-200
            "
            style={`
              animation-delay: ${index * 0.15}s;
              box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.04);
            `}
          >
            {/* Chiffre */}
            <div 
              class="text-5xl md:text-6xl text-[#D1A65E] mb-4"
              style="font-family: 'Playfair Display', serif; font-weight: 600;"
            >
              {stat.number}
            </div>

            {/* Label */}
            <p class="text-lg text-gray-700 font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .stat-card {
    animation: scaleIn 0.6s ease-out forwards;
    opacity: 0;
  }
</style>
```

**Spécificités** :
- Chiffres en or (`#D1A65E`) avec Playfair Display
- Animation scale-in (effet "pop")
- Délai progressif

---

## 📦 TEMPLATE #8 : CONFIG DATA

```typescript
// src/config/landing-data.ts

export const LANDING_DATA = {
  hero: {
    title: "Devenez visible.",
    titleAccent: "Vraiment",
    subtitle: "Nous garantissons la performance. 100/100. C'est la meilleure base pour dominer votre marché local sur Google.",
    ctaPrimary: "Audit Gratuit de Mon Site",
    ctaSecondary: "Découvrir l'Offre"
  },

  otherAgencies: [
    "Promesses vagues et floues",
    "Site lent (4 à 8 secondes de chargement)",
    "Position Google aléatoire",
    "Dépendance totale à l'agence",
    "Support technique payant en supplément"
  ],

  confluenceOffers: [
    "Garantie Performance 100/100 PageSpeed",
    "Chargement < 1 seconde garanti",
    "Optimisation pour être trouvé sur Google (Page 1 en 90 jours)",
    "Autonomie complète (interface sans code)",
    "Support technique illimité inclus"
  ],

  painPoints: [
    "Site extrêmement lent (8-10 secondes de chargement)",
    "Invisible sur Google (Page 3 ou 4)",
    "Dépendance totale à votre agence web",
    "Impossible de modifier quoi que ce soit sans payer"
  ],

  solutions: [
    {
      icon: "Gauge",
      title: "Performance 100/100",
      description: "Score PageSpeed garanti. Site ultra-rapide qui convertit vraiment."
    },
    {
      icon: "Shield",
      title: "Autonomie Totale",
      description: "Vous modifiez votre site quand vous voulez. Sans coder. Sans dépendre de personne."
    },
    {
      icon: "Clock",
      title: "Support Illimité",
      description: "Vous n'êtes jamais seul. Support technique réactif inclus dans le MRR."
    }
  ],

  proofStats: [
    { number: "100/100", label: "Score PageSpeed garanti" },
    { number: "< 1s", label: "Temps de chargement" },
    { number: "90j", label: "Pour atteindre Page 1 Google" }
  ],

  finalCTA: {
    title: "Prêt à Dominer Votre Marché ?",
    subtitle: "Demandez votre audit gratuit. Réponse sous 24h.",
    button: "Je Demande Mon Audit Gratuit",
    note: "Audit gratuit • Réponse sous 24h • Sans engagement initial"
  }
} as const;
```

---

## 🎨 COPYWRITING COMPLET

### Hero
- **Titre** : "Devenez visible. **Vraiment** visible." (accent or)
- **Sous-titre** : "Nous garantissons la performance. **100/100**." (vert)
- **CTA 1** : "Audit Gratuit de Mon Site"
- **CTA 2** : "Découvrir l'Offre"

### Contraste
- **Titre** : "Le **Problème** vs La **Solution**"
- **Gauche** : "Autres Agences Web" / "Ce que vous subissez"
- **Droite** : "Confluence Digitale" / "Notre engagement contractuel"

### Pain Points
- **Titre** : "Vous avez un site web. Mais **rien ne se passe**." (rouge)
- **Sous-titre** : "Ces problèmes vous parlent ?"
- **CTA** : "Résoudre Ces Problèmes Maintenant"

### Solutions
- **Titre** : "Notre **Promesse** Contractuelle"
- **Sous-titre** : "3 piliers pour transformer votre présence en ligne"

### Social Proof
- **Titre** : "Des **Résultats** Mesurables"
- **Sous-titre** : "Pas de promesses floues. Juste des garanties contractuelles."

### CTA Final
- **Titre** : "Prêt à **Dominer** Votre Marché ?"
- **Sous-titre** : "Demandez votre audit gratuit. Réponse sous 24h."
- **Bouton** : "Je Demande Mon Audit Gratuit"
- **Note** : "Audit gratuit • Réponse sous 24h • Sans engagement initial"

---

## 🔌 FICHIERS LIÉS

### Composants Astro (statiques)
- `/src/components/landing/HeroFullScreen.astro`
- `/src/components/landing/ContrastSection.astro`
- `/src/components/landing/PainPointsSection.astro`
- `/src/components/landing/SolutionsSection.astro`
- `/src/components/landing/SocialProofSection.astro`

### Composants React (interactifs)
- `/src/components/landing/ScrollIndicator.tsx`
- `/src/components/sections/ConfluenceFAQ.tsx`
- `/src/components/landing/FinalCTASection.tsx`

### Config
- `/src/config/landing-data.ts`

### Pages
- `/src/pages/index.astro`

---

## ✅ CHECKLIST INTÉGRATION

### Fichiers à créer
- [ ] `/src/pages/index.astro`
- [ ] `/src/components/landing/HeroFullScreen.astro`
- [ ] `/src/components/landing/ScrollIndicator.tsx`
- [ ] `/src/components/landing/ContrastSection.astro`
- [ ] `/src/components/landing/PainPointsSection.astro`
- [ ] `/src/components/landing/SolutionsSection.astro`
- [ ] `/src/components/landing/SocialProofSection.astro`
- [ ] `/src/components/landing/FinalCTASection.tsx`
- [ ] `/src/config/landing-data.ts`

### Dépendances
- [ ] `lucide-react` (icônes)
- [ ] `motion/react` (animations)
- [ ] ShadCN UI : `button`

### Tests
- [ ] Hero s'affiche en plein écran (`min-h-screen`)
- [ ] Scroll indicator apparaît après 1.2s
- [ ] Smooth scroll vers section suivante fonctionne
- [ ] Tableau comparatif affiche 2 colonnes (desktop)
- [ ] Pain points slide-in depuis la gauche
- [ ] Solutions en grille 3 colonnes
- [ ] Stats social proof scale-in
- [ ] FAQ accordéons fonctionnent
- [ ] CTA final redirige vers `/audit-gratuit`
- [ ] Responsive mobile/desktop
- [ ] Encodage UTF-8 vérifié

---

## 📊 COMPARAISON LANDING vs AUTRES PAGES

| Élément | Landing | Autres pages |
|---------|---------|--------------|
| **Hero height** | `min-h-screen` | `min-h-[60vh]` ou `py-20` |
| **Scroll indicator** | ✅ Oui (Mouse bounce) | ❌ Non |
| **Tableau comparatif** | ✅ Oui (Nous vs Autres) | ❌ Non |
| **Pain Points** | ✅ Oui (rouge, slide-in) | ❌ Non |
| **Solutions 3 piliers** | ✅ Oui | Varie (Features 4 cartes) |
| **Social Proof** | ✅ Oui (stats) | Parfois (témoignages) |
| **FAQ** | ✅ Oui | Parfois |

---

## 🎯 PARCOURS UTILISATEUR

```
Arrivée sur Hero (plein écran)
     ↓ (Scroll indicator)
Tableau Contraste (prise de conscience)
     ↓
Pain Points (identification problème)
     ↓
Solutions (découverte offre)
     ↓
Social Proof (validation chiffres)
     ↓
FAQ (objections handling)
     ↓
CTA Final (conversion)
     ↓
Footer (navigation secondaire)
```

---

**🏠 Template Page Landing Complet ! Prêt à Intégrer ! ✅**

**Prochaine étape** : Créer les 7 composants dans votre projet Astro
