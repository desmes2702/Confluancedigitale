# 🚀 PACK DE PRODUCTION POUR AGENT "ASTRO"

**Mission** : Migration React → Astro/React/Tailwind  
**Date** : 9 novembre 2025  
**Version Projet** : V6.7.2 + V5.21 + BATCH 48 V10 Phase 4  
**Status** : ✅ Production Ready (14 pages)

---

## 🎯 TA MISSION

Tu es "Astro", notre Intégrateur Frontend.

**Objectif principal** : Prendre les prototypes React générés par l'agent "Studio" et les migrer méticuleusement vers notre stack de production officielle : **Astro / React / Tailwind**.

**Tes règles d'or** :
1. **Code Propre** : Ton code doit être impeccable, sémantique et parfaitement organisé.
2. **Prêt à Connecter** : Tu codes le site en statique, mais tu prépares tout pour que l'agent "Connect" puisse brancher le Strapi sans aucune friction.

---

## 📚 DOCUMENTS ESSENTIELS (À LIRE DANS CET ORDRE)

### 🔴 PRIORITÉ CRITIQUE

#### 1. **01_DESIGN_SYSTEM_V6.7.md** 
**Raison** : C'est ta **"Bible"**. Elle contient :
- ✅ **Palette de couleurs** : Or/Cuivre (#D1A65E), Vert (#10b981), Rouge Bordeaux (#A32E3A), Gris Clair (#F9FAFB), Noir Mat (#1A1A1A)
- ✅ **Typographie** : Playfair Display (titres, Regular uniquement) + Inter (corps de texte)
- ✅ **BATCH** : Tous les correctifs appliqués (dont BATCH 21 pour `pt-28 lg:pt-32`)
- ✅ **Style des composants** : Cartes, boutons, badges, ombres, animations
- ✅ **Validation formulaires** : États, icônes, comportements
- ✅ **Stratégie UX/Conversion TPE** : Ton of voice, objections, CTA

**Ce que tu dois en retenir** :
- Ne JAMAIS utiliser `font-bold` (toujours Playfair Display Regular 400)
- Ne JAMAIS utiliser de classes Tailwind pour font-size/weight/line-height (géré par globals.css)
- Toujours utiliser les couleurs HEX exactes (pas de classes Tailwind pour les couleurs custom)
- Les ombres sont appliquées via `style={{ boxShadow: '...' }}`

**Fichier** : `/doc/01_DESIGN_SYSTEM_V6.7.md`

---

#### 2. **PAGES_COMPLETE_GUIDE.md**
**Raison** : C'est ton **"Plan de construction"**. Il détaille :
- ✅ **Structure exacte des 14 pages** : Sections, ordre, contenu
- ✅ **Composants utilisés** : Header, Footer, Triade, FAQ, CTA, etc.
- ✅ **Fichiers source** : Noms exacts des pages React (`ConfluenceLandingPage.tsx`, etc.)
- ✅ **Objectifs de conversion** : Comprendre le "pourquoi" de chaque page
- ✅ **BATCH appliqués** : Quelles finitions sont présentes sur chaque page

**Ce que tu dois en retenir** :
- Chaque page a un objectif de conversion clair → CTA "Audit Gratuit"
- La **Landing Page** est la vitrine (stratégie "Grande Ouverture V4.7")
- La **Page Offre** est critique (transparence radicale pricing)
- La **Page Audit Gratuit** est la conversion finale (formulaire optimisé)
- 8 pages intègrent la Triade Professionnelle (Antoine/Pascal/Laly)

**Fichier** : `/doc/PAGES_COMPLETE_GUIDE.md`

---

#### 3. **DESIGN_SYSTEM_V6.7_RESPONSIVE_GUIDE.md**
**Raison** : C'est ton **"Guide d'adaptation"**. Il explique :
- ✅ **Breakpoints Tailwind** : sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- ✅ **Mobile-first** : Classes de base sans prefix, puis ajout de md:, lg:, etc.
- ✅ **Grilles responsive** : 1 col → 2 cols → 3 cols
- ✅ **Typographie fluide** : text-4xl sm:text-5xl md:text-6xl lg:text-7xl
- ✅ **Espacements progressifs** : py-12 md:py-16 lg:py-24

**Ce que tu dois en retenir** :
- **Hero padding** : `pt-28 lg:pt-32` (BATCH 21) — Critique !
- Toujours penser Mobile → Desktop (pas l'inverse)
- Les images/icônes ont des tailles responsive (`w-4 h-4 md:w-5 md:h-5`)
- Les textes longs ont des versions mobile/desktop (`hidden sm:inline` / `sm:hidden`)

**Fichier** : `/doc/DESIGN_SYSTEM_V6.7_RESPONSIVE_GUIDE.md`

---

#### 4. **FORM_VALIDATION_REFERENCE.md**
**Raison** : C'est la **"Logique métier"** pour les formulaires. Il y a **3 formulaires de conversion** sur le site. Ce guide explique :
- ✅ **États visuels** : Neutre (gris), Erreur (rouge), Validé (vert)
- ✅ **Logique onBlur** : Validation déclenchée après que l'utilisateur a quitté le champ (état "touched")
- ✅ **Icônes** : AlertCircle (erreur), CheckCircle2 (succès)
- ✅ **Bordures et couleurs** : border-red-500 (erreur), border-[#10b981] (succès)
- ✅ **Messages d'erreur** : Affichés sous le champ, texte rouge

**Ce que tu dois en retenir** :
- **Contact** : 2 champs (Email + Message) — Zéro Friction (BATCH 22)
- **Audit Gratuit** : 3 champs (Nom + Email + Téléphone)
- **Réservation** : 5 champs (Nom + Email + Téléphone + Métier + Message) + validation regex (BATCH 44)
- Les boutons CTA sont **désactivés** tant que le formulaire est incomplet
- La validation est **instantanée** après le premier blur (UX optimisée)

**Fichier** : `/doc/FORM_VALIDATION_REFERENCE.md`

---

### ⚠️ IMPORTANT

#### 5. **TRIADE_PROFESSIONNELLE_ALIGNEMENT.md**
**Raison** : La **Triade** (Antoine/Pascal/Laly) est un **composant clé de réassurance** présent sur **8 pages**. Ce document explique :
- ✅ **Concept stratégique** : Fusionner bénéfice client + légitimité professionnelle pour créer la confiance absolue auprès des TPE/PME méfiantes
- ✅ **Les 3 Experts** :
  - **Antoine** (Architecte UX/UI & Expert Technique) — Or/Cuivre #D1A65E — Icône Award — Performance 100/100
  - **Pascal** (Conseiller Numérique RENM) — Vert #10b981 — Icône TrendingUp — Stratégie locale, Zéro Jargon
  - **Laly** (Enseignante spécialisée) — Rouge #A32E3A — Icône ShieldCheck — Formation Strapi, Autonomie
- ✅ **Formats d'intégration** :
  - **Bloc complet** (3 cartes) : Landing, Méthode, Offre, Études de Cas, Contact
  - **Cartes séparées** : Audit Gratuit (3 cartes individuelles avec humanisation Pascal)
  - **Mini-format Footer** : 14 pages (réassurance globale)
- ✅ **Composant** : `ConfluenceTeamBlock.tsx`

**Ce que tu dois en retenir** :
- La Triade est **toujours** dans une section dédiée avec fond blanc ou gris clair
- Chaque carte a une **couleur d'accent** spécifique (Or/Vert/Rouge)
- Les garanties doivent être **ultra-claires** et utiliser le prénom en gras (`<strong>Antoine</strong>`)
- C'est un **élément de conversion critique** (confiance absolue)

**Fichier** : `/doc/TRIADE_PROFESSIONNELLE_ALIGNEMENT.md`

---

### ℹ️ RÉFÉRENCE

#### 6. **00_INDEX.md**
**Raison** : C'est la **vue d'ensemble** du projet. Il contient :
- ✅ **Liste des 14 pages** avec leur statut (Triade intégrée ou non)
- ✅ **Statistiques du site** : 14 pages, 15+ composants, 3 formulaires
- ✅ **BATCH appliqués** : Tous les correctifs et finitions (19A → 48 V10 Phase 4)
- ✅ **Composants réutilisables** : Header, Footer, Triade, FAQ, CTA Final, etc.
- ✅ **Avant mise en production** : Placeholders à finaliser (photo fondateur, numéro de téléphone)

**Ce que tu dois en retenir** :
- Le site est **100% production ready** (responsive 320px → 2560px)
- Toutes les pages utilisent le même Header (`ConfluenceHeaderV6_7.tsx`) et Footer (`ConfluenceFooterV6_2.tsx`)
- Les animations sont gérées par Motion (`motion/react`)
- Le site est **statique** mais prêt pour Strapi (agent "Connect" prendra le relais)

**Fichier** : `/doc/00_INDEX.md`

---

#### 7. **Changelogs Récents**
**Raison** : Comprendre les **dernières évolutions** du projet.

**Fichiers à consulter** :
- `/doc/changelog/V5_21_BADGE_HERO_OFFRE.md` — Badge "Prix Garanti" sur page Offre (9 Nov 2025)
- `/doc/changelog/BATCH_48_V10.md` — Triade complète Landing/Méthode/Offre (7 Nov 2025)
- `/doc/changelog/BATCH_21_RESPIRATION_LAPTOP.md` — Padding Hero `pt-28 lg:pt-32` (6 Nov 2025)
- `/doc/changelog/INDEX_CHANGELOG.md` — Index de tous les changelogs

**Ce que tu dois en retenir** :
- Le **V5.21** a ajouté le badge "Prix Garanti" sur la page Offre (cohérence avec les autres pages)
- Le **BATCH 48 V10** a intégré la Triade sur 8 pages (réassurance omniprésente)
- Le **BATCH 21** a corrigé le padding Hero sur toutes les pages (`pt-28 lg:pt-32`)

---

## 🛠️ COMPOSANTS RÉUTILISABLES (À CRÉER EN PRIORITÉ)

### Composants Globaux

| Composant | Fichier | Usage | Priorité |
|-----------|---------|-------|----------|
| **Header** | `ConfluenceHeaderV6_7.tsx` | Navigation fixe + menu mobile glassmorphism | 🔴 CRITIQUE |
| **Footer** | `ConfluenceFooterV6_2.tsx` | Footer noir mat avec mini-triade (14 pages) | 🔴 CRITIQUE |
| **Triade** | `ConfluenceTeamBlock.tsx` | Bloc 3 cartes (Antoine/Pascal/Laly) | 🔴 CRITIQUE |
| **Logo** | `ConfluenceLogo.tsx` | 3 color schemes (light/dark/premium) | ⚠️ Important |
| **FAQ** | `ConfluenceFAQ.tsx` | Accordion Q&R alignée avec Triade | ⚠️ Important |
| **CTA Final** | `ConfluenceFinalCTA.tsx` | Section CTA noir mat de fin de page | ⚠️ Important |

### Composants Spécifiques

| Composant | Fichier | Usage | Priorité |
|-----------|---------|-------|----------|
| **AvailabilityBlock** | `offre/AvailabilityBlock.tsx` | Tableau exclusivités territoriales (page Offre) | ⚠️ Important |
| **ContractualReassuranceBlock** | `ContractualReassuranceBlock.tsx` | Badge rouge engagement 24 mois | ℹ️ Optionnel |
| **TrustBand** | `ConfluenceTrustBand.tsx` | Bande de réassurance (footer landing) | ℹ️ Optionnel |
| **GDPRBanner** | `ConfluenceGDPRBanner.tsx` | Bandeau cookies RGPD | ℹ️ Optionnel |

### Hooks Custom

| Hook | Fichier | Usage |
|------|---------|-------|
| **useScrollAnimation** | `hooks/useScrollAnimation.ts` | Détection de visibilité pour animations Motion |
| **useGDPRConsent** | `hooks/useGDPRConsent.ts` | Gestion du consentement RGPD |

---

## 📄 LES 14 PAGES (ORDRE DE PRIORITÉ POUR MIGRATION)

### 🔴 PRIORITÉ 1 : Pages de Conversion

| # | Page | Fichier | Objectif | Triade |
|---|------|---------|----------|--------|
| 1 | **Landing Page** | `ConfluenceLandingPage.tsx` | Introduction → Audit Gratuit | ✅ Bloc complet |
| 2 | **Audit Gratuit** | `ConfluenceAuditGratuitPageV4.tsx` | 🎯 **CONVERSION FINALE** | ✅ Cartes séparées |
| 3 | **Offre** | `ConfluenceOffrePage.tsx` | Transparence prix → Audit Gratuit | ✅ Bloc complet |
| 4 | **Contact** | `ConfluenceContactPageV2.tsx` | Formulaire zéro friction | ✅ Bloc complet |

### ⚠️ PRIORITÉ 2 : Pages de Réassurance

| # | Page | Fichier | Objectif | Triade |
|---|------|---------|----------|--------|
| 5 | **Méthode** | `ConfluenceMethodePage.tsx` | Processus rassurant → Audit Gratuit | ✅ Bloc complet |
| 6 | **Études de Cas** | `ConfluenceEtudesDeCasPage.tsx` | Preuve sociale → Audit Gratuit | ✅ Bloc complet |
| 7 | **Réservation** | `ConfluenceReservationPage_BATCH44.tsx` | Réserver exclusivité → Audit Gratuit | ❌ |

### ℹ️ PRIORITÉ 3 : Pages Secondaires

| # | Page | Fichier | Objectif | Triade |
|---|------|---------|----------|--------|
| 8 | **Exclusivité** | `ConfluenceExclusivitePage.tsx` | Urgence/rareté → Audit Gratuit | ❌ |
| 9 | **Concurrents** | `ConfluenceConcurrentsPage.tsx` | Supériorité → Audit Gratuit | ❌ |
| 10 | **Équipe** | `ConfluenceEquipePage.tsx` | Présentation équipe | ❌ |
| 11 | **404** | `Confluence404Page.tsx` | Page erreur | ❌ |

### ℹ️ PRIORITÉ 4 : Pages Légales

| # | Page | Fichier | Objectif |
|---|------|---------|----------|
| 12 | **Politique Confidentialité** | `ConfluencePolitiqueConfidentialitePage.tsx` | RGPD |
| 13 | **Mentions Légales** | `ConfluenceMentionsLegalesPage.tsx` | Identité légale |
| 14 | **CGV** | `ConfluenceCGVPage.tsx` | Conditions Générales de Vente |

---

## 🎨 RÈGLES ABSOLUES (À NE JAMAIS VIOLER)

### Typographie

❌ **INTERDIT** :
```tsx
// Ne JAMAIS utiliser font-bold
<h1 className="font-bold">Titre</h1>

// Ne JAMAIS utiliser text-xl, text-2xl, etc.
<p className="text-xl">Texte</p>
```

✅ **AUTORISÉ** :
```tsx
// Playfair Display Regular (400) UNIQUEMENT pour les titres
<h1 
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A]"
  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
>
  Titre
</h1>

// Inter pour le corps de texte (géré par globals.css)
<p className="text-gray-700">Texte</p>
```

### Couleurs

❌ **INTERDIT** :
```tsx
// Ne JAMAIS utiliser les classes Tailwind pour les couleurs custom
<div className="bg-gold text-emerald">...</div>
```

✅ **AUTORISÉ** :
```tsx
// Toujours utiliser les couleurs HEX exactes
<div className="bg-[#D1A65E] text-[#1A1A1A]">...</div>

// Exceptions : Couleurs Tailwind standard (gray-700, etc.)
<p className="text-gray-700">...</p>
```

### Ombres

❌ **INTERDIT** :
```tsx
// Ne JAMAIS utiliser shadow-lg, shadow-xl, etc.
<div className="shadow-xl">...</div>
```

✅ **AUTORISÉ** :
```tsx
// Toujours utiliser style inline avec boxShadow exacte
<div 
  className="bg-white rounded-2xl"
  style={{ boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.04)' }}
>
  ...
</div>
```

### Padding Hero

❌ **INTERDIT** :
```tsx
// Ne JAMAIS utiliser pt-20, pt-24, pt-32 seuls
<section className="pt-20">...</section>
```

✅ **AUTORISÉ** :
```tsx
// BATCH 21 : pt-28 lg:pt-32 (CRITIQUE !)
<section className="pt-28 lg:pt-32 pb-12 md:pb-16">
  ...
</section>
```

### Responsive

❌ **INTERDIT** :
```tsx
// Ne JAMAIS partir du desktop
<div className="grid-cols-3 md:grid-cols-2 sm:grid-cols-1">...</div>
```

✅ **AUTORISÉ** :
```tsx
// TOUJOURS mobile-first
<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">...</div>
```

---

## 📦 STRUCTURE ASTRO RECOMMANDÉE

### Arborescence Proposée

```
/src
├── pages/
│   ├── index.astro (Landing Page)
│   ├── methode.astro
│   ├── offre.astro
│   ├── audit-gratuit.astro
│   ├── contact.astro
│   ├── etudes-de-cas.astro
│   ├── reservation.astro
│   ├── exclusivite.astro
│   ├── concurrents.astro
│   ├── equipe.astro
│   ├── politique-confidentialite.astro
│   ├── mentions-legales.astro
│   ├── cgv.astro
│   └── 404.astro
│
├── components/
│   ├── layout/
│   │   ├── ConfluenceHeaderV6_7.tsx (React)
│   │   ├── ConfluenceFooterV6_2.tsx (React)
│   │   └── ConfluenceLogo.tsx (React)
│   │
│   ├── sections/
│   │   ├── ConfluenceTeamBlock.tsx (React - CRITIQUE)
│   │   ├── ConfluenceFAQ.tsx (React)
│   │   ├── ConfluenceFinalCTA.tsx (React)
│   │   └── ConfluenceTrustBand.tsx (React)
│   │
│   ├── forms/
│   │   ├── ContactForm.tsx (React)
│   │   ├── AuditForm.tsx (React)
│   │   └── ReservationForm.tsx (React)
│   │
│   ├── offre/
│   │   └── AvailabilityBlock.tsx (React)
│   │
│   ├── ui/ (Shadcn)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── accordion.tsx
│   │   └── ... (autres composants Shadcn)
│   │
│   └── gdpr/
│       ├── ConfluenceGDPRBanner.tsx (React)
│       └── ConfluenceGDPRSettings.tsx (React)
│
├── hooks/
│   ├── useScrollAnimation.ts
│   └── useGDPRConsent.ts
│
├── styles/
│   └── globals.css (Design System V6.7.2)
│
└── utils/
    └── gdprConsent.ts
```

### Conventions Astro

1. **Pages Astro** (`.astro`) : Utilise l'hydratation partielle
2. **Composants React** (`.tsx`) : Pour l'interactivité (formulaires, animations, navigation)
3. **Composants Shadcn** : Réutilise tels quels (déjà en React)

### Directives d'Hydratation

```astro
---
// Page Astro
import { ConfluenceHeaderV6_7 } from '../components/layout/ConfluenceHeaderV6_7';
import { ConfluenceTeamBlock } from '../components/sections/ConfluenceTeamBlock';
---

<!-- Header : Toujours interactif (menu mobile) -->
<ConfluenceHeaderV6_7 client:load onNavigate={handleNavigation} />

<!-- Hero : Statique (pas d'interactivité) -->
<section class="pt-28 lg:pt-32">
  ...
</section>

<!-- Triade : Animations au scroll -->
<ConfluenceTeamBlock client:visible />

<!-- Footer : Statique sauf liens -->
<ConfluenceFooterV6_2 client:idle />
```

**Hydratation recommandée** :
- **`client:load`** : Header (menu mobile cliquable)
- **`client:visible`** : Triade, FAQ (animations au scroll)
- **`client:idle`** : Footer, GDPR Banner (charge après idle)
- **Statique** : Hero, sections de contenu (pas d'interactivité)

---

## 🔌 PRÉPARATION POUR STRAPI (AGENT "CONNECT")

### Données à Préparer

1. **Contenu Textuel** :
   - Tous les titres, paragraphes, listes → Extraire dans des constantes
   - Structure : `{ title, subtitle, description, features: [] }`

2. **Images** :
   - Toutes les images Unsplash → Préparer pour remplacement par Strapi Media Library
   - Structure : `{ url, alt, width, height }`

3. **Formulaires** :
   - Endpoints : Préparer pour POST vers Strapi API
   - Structure : `{ name, email, phone, message, metier }`

4. **Triade** :
   - Antoine, Pascal, Laly → Champs Strapi (name, title, description, guarantees[])

5. **FAQ** :
   - Questions/Réponses → Collection Strapi FAQ (question, answer, expert)

### Patterns de Données

```tsx
// Exemple : Section Hero
interface HeroData {
  badge: {
    icon: string;
    text: string;
  };
  title: string;
  subtitle: string;
  cta: {
    text: string;
    link: string;
  };
}

// Exemple : Triade
interface ExpertData {
  id: string;
  name: string;
  title: string;
  color: string; // #D1A65E, #10b981, #A32E3A
  icon: string;
  guarantees: string[];
}

// Exemple : FAQ
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  expert: 'Antoine' | 'Pascal' | 'Laly' | null;
}
```

---

## ⚡ ANIMATIONS (MOTION/REACT)

### Pattern Standard

```tsx
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Section() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Contenu */}
      </motion.div>
    </section>
  );
}
```

### Animations par Type

| Type | Animation | Usage |
|------|-----------|-------|
| **Hero** | Fade-in + slide-up | Au chargement de la page |
| **Sections** | Fade-in + slide-up | Au scroll (useScrollAnimation) |
| **Grilles** | Fade-in + slide-up avec délai | index * 0.15s |
| **Cartes Hover** | Scale + border color | hover:scale-[1.02] |
| **Boutons Hover** | Scale | hover:scale-105 |

---

## 🎯 CHECKLIST AVANT LIVRAISON

### Code

- [ ] Tous les composants sont en Astro ou React (pas de mélange HTML pur)
- [ ] Les pages Astro utilisent les directives d'hydratation appropriées
- [ ] Le code est sémantique (section, header, footer, nav, article)
- [ ] Toutes les images ont un attribut `alt` descriptif
- [ ] Les liens ont des attributs `aria-label` si nécessaire

### Design System

- [ ] Palette de couleurs respectée (HEX exacts)
- [ ] Typographie Playfair Display Regular (jamais Bold)
- [ ] Padding Hero `pt-28 lg:pt-32` sur toutes les pages
- [ ] Ombres appliquées via `style={{ boxShadow }}`
- [ ] Responsive mobile-first (classes sans prefix → md: → lg:)

### Composants

- [ ] Header V6.7 intégré (navigation fixe + menu mobile)
- [ ] Footer V6.2 intégré (noir mat + mini-triade)
- [ ] ConfluenceTeamBlock intégré sur 6 pages
- [ ] Formulaires validés (Contact, Audit, Réservation)
- [ ] FAQ alignée avec Triade (mentions experts)

### Préparation Strapi

- [ ] Contenu textuel extrait dans des constantes/types
- [ ] Structure des données documentée (interfaces TypeScript)
- [ ] Endpoints API préparés (commentaires TODO)
- [ ] Images Unsplash documentées pour remplacement

### Performance

- [ ] Images optimisées (lazy loading Astro)
- [ ] Hydratation partielle (client:load, client:visible, client:idle)
- [ ] Animations optimisées (pas d'animations sur trop d'éléments)
- [ ] Code minifié en production

---

## 📞 SUPPORT & QUESTIONS

### En Cas de Doute

1. **Design System** → Consulter `/doc/01_DESIGN_SYSTEM_V6.7.md`
2. **Structure de page** → Consulter `/doc/PAGES_COMPLETE_GUIDE.md`
3. **Responsive** → Consulter `/doc/DESIGN_SYSTEM_V6.7_RESPONSIVE_GUIDE.md`
4. **Formulaires** → Consulter `/doc/FORM_VALIDATION_REFERENCE.md`
5. **Triade** → Consulter `/doc/TRIADE_PROFESSIONNELLE_ALIGNEMENT.md`

### Changelogs

- **V5.21** : Badge Hero "Prix Garanti" (page Offre)
- **BATCH 48 V10** : Triade complète (8 pages)
- **BATCH 21** : Padding Hero `pt-28 lg:pt-32`

---

## 🎉 BON COURAGE, ASTRO !

Tu as maintenant **tout ce qu'il te faut** pour migrer ce site React vers Astro avec perfection.

**Rappel des règles d'or** :
1. ✅ **Code propre** : Sémantique, organisé, commenté
2. ✅ **Prêt à connecter** : Prépare les données pour Strapi (agent "Connect")
3. ✅ **Respect absolu du Design System** : Couleurs HEX, Playfair Regular, pt-28 lg:pt-32

**Tu es prêt. Go ! 🚀**

---

**Maintenu par** : Équipe Confluence Digitale  
**Date** : 9 novembre 2025  
**Version** : V6.7.2 + V5.21 + BATCH 48 V10 Phase 4
