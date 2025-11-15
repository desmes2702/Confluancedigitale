# 🎨 Design System V6.7 "App Moderne 2025" - Spécifications Complètes

> **Ce document est la source de vérité absolue pour le Design System V6.7.2 de Confluence Digitale.**

**Version** : V6.7.2  
**Date de dernière mise à jour** : 9 novembre 2025  
**Projet** : Confluence Digitale  
**Nom** : "App Moderne 2025"  
**Évolution depuis** : V6.2 "Matériaux Nobles Parfait"  
**Status** : ✅ **Production Ready V6.7.2** (V5.27g - UX Landing optimisé + Contact mobile fix + Astro sync)

---

## 📚 TABLE DES MATIÈRES

1. [Philosophie V6.7](#-philosophie-v67)
2. [Palette de Couleurs](#-palette-de-couleurs-v67)
3. [Typographie](#-typographie-v67)
4. [Composants](#-composants-v67)
5. [Animations](#-animations-v67)
6. [Responsive](#-responsive-v67)
7. [Structure des Pages](#-structure-des-pages-v67)
8. [Finitions UX Premium V6.7.2](#-finitions-ux-premium-v672)
9. [Validation des Formulaires](#-validation-des-formulaires-v672)
10. [Interactivité & Curseurs](#-interactivité--curseurs-v672)
11. [Pages Conformes](#-pages-conformes-v672)
12. [Checklist de Conformité](#-checklist-de-conformité-v672)
13. [Architecture & Composants](#-architecture--composants)
14. [Stratégie UX/Conversion TPE](#-stratégie-uxconversion-tpe)
15. [Évolutions & Changelog](#-évolutions--changelog)
16. [Avant Mise en Production](#-avant-mise-en-production)
17. [Notes pour UX/UI Designer](#-notes-pour-uxui-designer)

---

## 🎯 Philosophie V6.7

### Principe Central : **Zéro Friction, Zéro Gap, Zéro Bruit**

| Concept | Description | Objectif UX |
|---------|-------------|-------------|
| **Zéro Gap** | Header collé au contenu (pt-20), pas d'espace vide | Maximiser l'espace utile, effet "app" |
| **Zéro Bruit** | Pas d'ombres, blocs clairs solides | Clarté maximale, lisibilité premium |
| **Zéro Friction** | Animations fluides, navigation intuitive | Conversion maximale |

---

## 🎨 Palette de Couleurs V6.7

### Couleurs Principales

```css
/* === PALETTE V6.7 === */

/* Fond Principal - Gris Clair Éclatant */
--bg-main: #F9FAFB;

/* Noir Mat - Texte & Fonds Sombres Premium */
--color-noir-mat: #1A1A1A;

/* Or/Cuivre - Accents Premium */
--color-or-cuivre: #D1A65E;
--color-or-cuivre-hover: #c89a52;

/* Rouge Bordeaux - Éléments Contractuels, Alerte */
--color-rouge-bordeaux: #A32E3A;
--color-rouge-bordeaux-hover: #8a2730;

/* Vert Performance - CTAs, Succès */
--color-vert-performance: #10b981;
--color-vert-performance-hover: #059669;

/* Neutres */
--color-blanc: #FFFFFF;
--color-gris-100: #F3F4F6;
--color-gris-200: #E5E7EB;
--color-gris-300: #D1D5DB;
--color-gris-700: #374151;
```

### Utilisation des Couleurs

| Élément | Couleur | HEX | Usage |
|---------|---------|-----|-------|
| **Background principal** | Gris Clair Éclatant | #F9FAFB | Toutes les pages |
| **Texte principal** | Noir Mat | #1A1A1A | Titres, body text |
| **Accents premium** | Or/Cuivre | #D1A65E | Badges, highlights, hover states |
| **Liens contractuels** | Rouge Bordeaux | #A32E3A | CGV, mentions légales, alertes |
| **CTAs primaires** | Vert Performance | #10b981 | Boutons d'action, succès |
| **Blocs blancs** | Blanc | #FFFFFF | Cartes, sections alternées |
| **Bordures** | Gris 200 | #E5E7EB | Séparateurs, contours de cartes |

---

## 📐 Typographie V6.7

### Hiérarchie

```css
/* Titres - Playfair Display Regular (400) */
h1 {
  font-family: 'Playfair Display', serif;
  font-weight: 400; /* IMPORTANT: toujours 400, jamais bold */
  font-size: clamp(2.25rem, 5vw, 4rem); /* 36px → 64px (fluide) */
  line-height: 1.1;
  color: #1A1A1A;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: clamp(1.875rem, 4vw, 3rem); /* 30px → 48px (fluide) */
  line-height: 1.2;
  color: #1A1A1A;
}

h3 {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: clamp(1.5rem, 3vw, 2.25rem); /* 24px → 36px (fluide) */
  line-height: 1.3;
  color: #1A1A1A;
}

/* Corps de texte - Inter */
body, p, span, button {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: clamp(1rem, 1.5vw, 1.125rem); /* 16px → 18px (fluide) */
  line-height: 1.6;
  color: #1A1A1A;
}
```

### ⚠️ RÈGLE CRITIQUE

**NE JAMAIS utiliser ces classes Tailwind** (sauf demande explicite) :
- ❌ `text-xl`, `text-2xl`, `text-3xl`, etc. (tailles)
- ❌ `font-bold`, `font-semibold`, `font-medium` (graisses)
- ❌ `leading-tight`, `leading-none`, etc. (line-height)

**Exception** : `leading-none` ou `style={{ lineHeight: '1' }}` est autorisé pour **centrage parfait des chiffres dans les cercles** (voir BATCH 20D).

**Raison** : La typographie est définie dans `styles/globals.css` pour chaque élément HTML avec fluidité automatique via `clamp()`.

---

## 🏗️ Composants V6.7

### 1. Header V6.7

**Fichier** : `/components/ConfluenceHeaderV6_7.tsx`

#### Spécifications Desktop

```typescript
// Style
background: 'rgba(255, 255, 255, 0.75)'
backdropFilter: 'blur(12px)'
boxShadow: 'none' // PAS D'OMBRE
position: 'fixed'
height: '80px' (h-20)

// Navigation
color: '#1A1A1A' // Noir Mat
hover: '#D1A65E' // Or/Cuivre
active: border-bottom 2px #D1A65E

// CTA
background: '#10b981' // Vert
hover: '#059669'
```

#### Spécifications Mobile (Menu Panel)

**Philosophie** : Même style que le header desktop, **PAS de dark mode**. Pas de logo dans le panel, uniquement le bouton de fermeture.

```typescript
// Panel Style
background: 'rgba(255, 255, 255, 0.95)' // Clair, pas dark
backdropFilter: 'blur(20px)'
borderLeft: '1px solid rgba(229, 231, 235, 0.5)'
boxShadow: 'none'

// Texte
color: '#1A1A1A' // Noir Mat
hover-bg: '#F9FAFB'
hover-color: '#D1A65E'

// État actif (identique au desktop - underline)
color: '#D1A65E'
after: 'border-bottom 2px #D1A65E'
```

**Animations** :
- **Bouton Burger → Croix** : Morphing avec rotation (0.3s) dans le header
- **Bouton Fermeture Panel** : Fade-in + rotation -90° → 0° (delay 0.2s)
- **Overlay** : fade-in (0.3s)
- **Panel** : slide-in from right (0.4s)
- **Links** : staggered fade-in (delay 0.05s entre chaque)
- **CTA** : fade-in + up-drift (delay 0.5s)

### 2. Footer V6.2

**Fichier** : `/components/ConfluenceFooterV6_2.tsx`

#### Spécifications

```typescript
// Style
background: '#1A1A1A' // Noir Mat (contraste avec corps de page)
color: '#FFFFFF'
padding-top: 4rem
padding-bottom: 4rem

// Liens
color: '#9CA3AF' // Gris clair
hover: '#D1A65E' // Or/Cuivre

// Séparateurs
border-color: 'rgba(255, 255, 255, 0.1)'

// Logo
colorScheme: 'gold-white-light' // Blanc + Or/Cuivre
```

#### 🔧 Placeholders à Finaliser

⚠️ **Avant mise en production**, remplacer dans `ConfluenceFooterV6_2.tsx` :
- **Photo Fondateur** : Ligne ~95 (actuellement placeholder Unsplash)
- **Numéro de téléphone** : Ligne ~73 (actuellement "06 XX XX XX XX")

### 3. Cartes V6.7

**Style** : Blocs clairs solides, **ZÉRO ombre portée**.

```typescript
// Carte Standard
background: '#FFFFFF'
border: '1px solid #E5E7EB'
border-radius: '1rem' (rounded-2xl)
padding: '2rem'
boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' // Très subtile

// Hover
border-color: '#D1A65E'
transform: 'scale(1.02)'
transition: 'all 0.3s'
```

### 4. Boutons V6.7

```typescript
// CTA Principal (Vert)
background: '#10b981'
hover: '#059669'
color: '#FFFFFF'
padding: '1rem 2rem'
border-radius: '0.75rem' (rounded-xl)
boxShadow: '0 4px 20px 0 rgba(16, 185, 129, 0.2)'
hover: 'scale(1.05)'

// CTA Secondaire (Or/Cuivre)
background: '#D1A65E'
hover: '#c89a52'
color: '#FFFFFF'
border: '2px solid #D1A65E'
```

---

## 🎭 Animations V6.7

### Courbe d'Accélération Standard

```typescript
ease: [0.22, 1, 0.36, 1] // Cubic bezier "ease-out expo"
```

### Durées

| Élément | Durée |
|---------|-------|
| Badges, petits éléments | 0.3-0.4s |
| Cartes, sections | 0.5-0.6s |
| Hero, grandes sections | 0.8s |

### Patterns Réutilisables

#### Pattern 1 : Titre de Section (H2)
```typescript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
```

#### Pattern 2 : Cartes en Grille (Staggered)
```typescript
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ 
  duration: 0.6, 
  delay: index * 0.15,
  ease: [0.22, 1, 0.36, 1]
}}
```

#### Pattern 3 : Liste d'Items
```typescript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ 
  duration: 0.5, 
  delay: index * 0.1,
  ease: [0.22, 1, 0.36, 1]
}}
```

---

## 📱 Responsive V6.7

### Philosophie : Mobile-First

Le Design System V6.7 adopte une approche **Mobile-First** avec Progressive Enhancement :
1. Code pour mobile d'abord (base, sans préfixe)
2. Ajoute des améliorations pour écrans plus grands (md:, lg:, xl:)
3. Utilise `clamp()` pour la fluidité typographique native

### Breakpoints Tailwind

```css
sm:  640px   /* Mobile landscape, petites tablettes */
md:  768px   /* Tablettes portrait */
lg:  1024px  /* Desktop, tablettes landscape */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large desktop */
```

### Typographie Responsive Automatique (via globals.css)

Grâce à `clamp()`, la typographie s'adapte automatiquement sans classes :

```css
/* H1 - 36px à 64px (fluide) */
h1 { font-size: clamp(2.25rem, 5vw, 4rem); }

/* H2 - 30px à 48px (fluide) */
h2 { font-size: clamp(1.875rem, 4vw, 3rem); }

/* H3 - 24px à 36px (fluide) */
h3 { font-size: clamp(1.5rem, 3vw, 2.25rem); }

/* P - 16px à 18px (fluide) */
p { font-size: clamp(1rem, 1.5vw, 1.125rem); }
```

### Grilles Responsive Standard

```tsx
/* 1 → 2 → 3 colonnes */
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"

/* 1 → 2 colonnes */
className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"

/* 1 → 2 → 4 colonnes */
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
```

### Espacements Progressifs

```tsx
/* Padding vertical sections */
className="py-12 sm:py-16 md:py-20 lg:py-24"
// Mobile: 48px → Desktop: 96px

/* Padding horizontal container */
className="px-4 sm:px-6 lg:px-8"
// Mobile: 16px → Desktop: 32px

/* Padding cartes */
className="p-6 md:p-8 lg:p-10"
// Mobile: 24px → Desktop: 40px
```

### 🔥 BATCH 19A : Correction "Héro Collé" Mobile (V6.7.1)

**Problème identifié** : Sur mobile, le contenu des sections Hero était collé au header sans respiration visuelle.

**Solution appliquée** : Padding-top différencié selon la largeur d'écran.

```tsx
/* AVANT (Problématique) */
className="pt-20 pb-16"

/* APRÈS (Corrigé BATCH 19A) */
className="pt-28 lg:pt-20 pb-16"
// Mobile (<1024px): pt-28 (112px) → Respiration visuelle
// Desktop (≥1024px): pt-20 (80px) → Compensation header fixe classique
```

**Pages corrigées (13 au total)** : Landing Page, Méthode, Offre, Exclusivité, Concurrents, Études de Cas, Contact, Audit Gratuit, Réservation, Page 404, Politique Confidentialité, Mentions Légales, CGV

**Résultat** : Espace confortable entre header et contenu sur mobile, tout en conservant l'effet "app moderne" sur desktop.

### 🔥 BATCH 21 : Respiration Laptop (V6.7.2)

**Problème identifié** : Sur laptop/desktop, le contenu Hero était collé au header (0px de respiration avec `pt-20`).

**Solution appliquée** : Augmentation du padding-top laptop de `pt-20` à `pt-32`.

```tsx
/* AVANT (BATCH 19A - Insuffisant) */
className="pt-28 lg:pt-20"
// Mobile: 112px ✅
// Laptop: 80px ❌ (0px de respiration car header = 80px)

/* APRÈS (BATCH 21 - Corrigé) */
className="pt-28 lg:pt-32"
// Mobile: 112px ✅ (inchangé)
// Laptop: 128px ✅ (48px de respiration)
```

**Pages corrigées (13 au total)** : Landing Page, Méthode, Offre, Exclusivité, Concurrents, Études de Cas, Contact, Audit Gratuit, Réservation, Politique Confidentialité, Mentions Légales, CGV

**Résultat** : 
- Mobile : 32px de respiration (112px - 80px header)
- Laptop : 48px de respiration (128px - 80px header)

**Justification** : Le header a une hauteur fixe de `h-20` (80px). Avec `pt-20` (80px) sur laptop, le contenu commençait exactement sous le header sans marge.

### Checklist Responsive Rapide

- [x] Container : `px-4 sm:px-6 lg:px-8`
- [x] Section : `py-12 md:py-16 lg:py-24`
- [x] **Hero** : `pt-28 lg:pt-32` (BATCH 21) + padding bottom progressif
- [x] Grilles : 1→2→3 colonnes
- [x] Cartes : `p-6 md:p-8 lg:p-10`
- [x] Boutons : `w-full sm:w-auto`
- [x] Testé 320px, 768px, 1024px, 1280px

> **📘 Pour un guide responsive complet** : Consultez `/doc/DESIGN_SYSTEM_V6.7_RESPONSIVE_GUIDE.md` qui contient :
> - Templates réutilisables
> - Best practices détaillées
> - Checklist exhaustive
> - Cas d'usage spécifiques
> - Performance responsive

---

## 🎯 Structure des Pages V6.7

### Template Standard (V6.7.2)

```tsx
<div className="min-h-screen bg-[#F9FAFB]">
  {/* Header V6.7 - Fixed */}
  <ConfluenceHeaderV6_7 onNavigate={handleNavigation} currentPage="..." />

  {/* 1. HERO - RESPIRATION MOBILE (BATCH 19A) */}
  <section className="relative min-h-[60vh] pt-28 lg:pt-32 pb-16 px-4">
    {/* Contenu Hero */}
  </section>

  {/* 2. SECTION ALTERNÉE - Fond Blanc */}
  <section className="relative py-16 md:py-24 px-4 bg-white">
    {/* Contenu */}
  </section>

  {/* 3. SECTION ALTERNÉE - Fond Gris Clair */}
  <section className="relative py-16 md:py-24 px-4 bg-[#F9FAFB]">
    {/* Contenu */}
  </section>

  {/* CTA FINAL - Fond Noir Mat (contraste maximal) */}
  <section className="relative py-16 md:py-24 px-4 bg-[#1A1A1A] text-white">
    {/* CTA */}
  </section>

  {/* Footer V6.2 - Fond Noir Mat */}
  <ConfluenceFooterV6_2 onNavigate={handleNavigation} />
</div>
```

---

## 🎨 Finitions UX Premium (V6.7.2)

### 🔧 BATCH 20A : Alignement Bullets Numérotés (Exclusivité)

**Contexte** : Page Exclusivité - Section "Comment ça marche" avec bullets numérotés 1, 2, 3, 4.

**Problème** : Les cercles numérotés n'étaient pas alignés verticalement avec le texte à côté.

**Solution** :
```tsx
/* APRÈS (BATCH 20A) */
<div className="flex items-center gap-4"> {/* Ajout items-center */}
  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D1A65E]/10 flex items-center justify-center">
    <span>1</span>
  </div>
  <div>
    <h3>Titre</h3>
    <p>Description...</p>
  </div>
</div>
```

**Résultat** : Les cercles numérotés sont maintenant parfaitement alignés avec la première ligne du texte.

---

### 🔧 BATCH 20B : Uniformisation Espacements Formulaires

**Contexte** : 3 formulaires majeurs du site (Contact, Audit Gratuit, Réservation).

**Problème** : Espacements incohérents entre champs (`space-y-4`, `space-y-5`, `gap-6`).

**Solution** : Standardisation à `space-y-6` (24px) pour tous les formulaires.

```tsx
/* APRÈS (BATCH 20B - Unifié) */
<form className="space-y-6">  {/* Tous les formulaires */}
```

**Pages corrigées** : ConfluenceContactPageV2.tsx, ConfluenceAuditGratuitPage.tsx, ConfluenceReservationPage_BATCH44.tsx

**Résultat** : Cohérence visuelle parfaite entre tous les formulaires (24px d'espacement vertical).

---

### 🔧 BATCH 20C : Alignement Réassurance Formulaire Audit

**Contexte** : Page Audit Gratuit - 3 points de réassurance sous le bouton CTA.

**Problème** : Les 3 points étaient en grille horizontale et centrés individuellement, rendant le scan difficile.

**Solution** : Colonne verticale alignée à gauche, mais centrée dans le conteneur parent.

```tsx
/* APRÈS (BATCH 20C - Colonne centrée) */
<div className="flex justify-center">
  <div className="inline-flex flex-col gap-3">
    <div className="flex items-center gap-1.5">
      <CheckCircle2 />
      <span>100% Gratuit</span>
    </div>
    <div className="flex items-center gap-1.5">
      <CheckCircle2 />
      <span>Sans engagement</span>
    </div>
    <div className="flex items-center gap-1.5">
      <CheckCircle2 />
      <span>Réponse sous 24h</span>
    </div>
  </div>
</div>
```

**Résultat** : 
- Points empilés verticalement (plus compact)
- Alignés à gauche entre eux (scan naturel)
- Ensemble centré dans le formulaire (équilibre visuel)

---

### 🔧 BATCH 20D : Centrage Parfait Chiffres dans Cercles

**Contexte** : 
- Page Exclusivité : Chiffres 1, 2, 3, 4 dans les bullets "Comment ça marche"
- Composant AvailabilityBlock : Badges départements "46", "47"

**Problème** : Les chiffres avec la police **Playfair Display** n'étaient pas parfaitement centrés verticalement dans les cercles (décalage vers le haut).

**Solution** : `grid place-items-center` + `lineHeight: '1'` (inline style).

```tsx
/* APRÈS (BATCH 20D - Centrage absolu) */
<div className="grid place-items-center w-12 h-12 rounded-full bg-[#D1A65E]/10">
  <span className="text-[#D1A65E] text-xl" style={{ fontFamily: 'Playfair Display, serif', lineHeight: '1' }}>
    1
  </span>
</div>
```

**Pourquoi ça fonctionne** :
- `grid place-items-center` → Centrage strict horizontal ET vertical (meilleur que flex)
- `lineHeight: '1'` (inline style) → Force un line-height exact à 1, non surchargeable par la police

**Fichiers corrigés** : `/pages/ConfluenceExclusivitePage.tsx`, `/components/AvailabilityBlock.tsx`

**Résultat** : Chiffres parfaitement centrés dans les cercles, finition pixel-perfect.

---

## 📊 Récapitulatif Finitions V6.7.2

| BATCH | Objectif | Fichiers Modifiés | Statut |
|-------|----------|------------------|--------|
| **19A** | Respiration Mobile (Hero `pt-28 lg:pt-20`) | 13 pages | ✅ 100% |
| **20A** | Alignement Bullets Numérotés (`items-center`) | Exclusivité | ✅ 100% |
| **20B** | Uniformisation Espacements Formulaires (`space-y-6`) | 3 formulaires | ✅ 100% |
| **20C** | Alignement Réassurance Audit (Colonne centrée) | Audit Gratuit | ✅ 100% |
| **20D** | Centrage Chiffres Cercles (`grid place-items-center`) | Exclusivité + AvailabilityBlock | ✅ 100% |
| **21** | Respiration Laptop (Hero `pt-28 lg:pt-32`) | 13 pages | ✅ 100% |
| **22** | Zéro Friction Formulaire Contact (2 champs au lieu de 4) | Contact V2 | ✅ 100% |
| **40** | Validations regex (phone, email) | Réservation | ✅ 100% |
| **44** | Bouton désactivé si formulaire incomplet | Réservation BATCH44 | ✅ 100% |
| **45** | Harmonisation Validation Formulaires (États visuels) | 3 formulaires | ✅ 100% |
| **45.2** | États "touched" (validation après blur uniquement) | Réservation BATCH44 | ✅ 100% |
| **45.4** | Bordures vertes/rouges + icônes validation | 3 formulaires | ✅ 100% |
| **46 V7** | Triade professionnelle Contact | Contact V2 | ✅ 100% |
| **48 V10** | Triade professionnelle complète | Méthode + Audit Gratuit + Contact V2 | ✅ 100% |

---

## 🚀 Pages Conformes V6.7.2

### ✅ Pages Principales (11)
- Landing Page (`ConfluenceLandingPage.tsx`)
- Page Méthode (`ConfluenceMethodePage.tsx`) — ✅ **Triade BATCH 48 intégrée**
- Page Offre (`ConfluenceOffrePage.tsx`) — ⚠️ **Sans triade** (priorité critique à intégrer)
- Page Exclusivité (`ConfluenceExclusivitePage.tsx`)
- Page Concurrents (`ConfluenceConcurrentsPage.tsx`)
- Page Études de Cas (`ConfluenceEtudesDeCasPage.tsx`)
- Page Contact (`ConfluenceContactPageV2.tsx`) — ✅ **V2 avec triade BATCH 48 + BATCH 22 Zéro Friction**
- Page Audit Gratuit (`ConfluenceAuditGratuitPage.tsx`) — ✅ **Triade BATCH 48 intégrée**
- Page Réservation (`ConfluenceReservationPage_BATCH44.tsx`) — ✅ **BATCH 44 validation avancée**
- Page 404 (`Confluence404Page.tsx`)
- Logo Showcase (`ConfluenceLogoShowcase.tsx`)

### ✅ Pages Légales (3)
- Politique de Confidentialité (`ConfluencePolitiqueConfidentialitePage.tsx`)
- CGV (`ConfluenceCGVPage.tsx`)
- Mentions Légales (`ConfluenceMentionsLegalesPage.tsx`)

**Total** : 14 pages 100% conformes V6.7.2

### 📋 Statut Triade BATCH 48

| Page | Triade Intégrée | Statut |
|------|----------------|--------|
| Méthode | ✅ Oui | Production |
| Audit Gratuit | ✅ Oui | Production |
| Contact V2 | ✅ Oui | Production (BATCH 46 V7) |
| Offre | ❌ Non | **Priorité critique** |
| Études de Cas | ❌ Non | À planifier |
| Landing Page | ❌ Non | À planifier |
| Footer V6.2 | ❌ Non | **Priorité critique** |

---

## ✅ Checklist de Conformité V6.7.2

Avant de valider un composant ou une page V6.7.2 :

### Design
- [x] Fond principal : `#F9FAFB` (Gris Clair Éclatant)
- [x] Texte : `#1A1A1A` (Noir Mat)
- [x] Header : Glassmorphism clair avec `blur(12px)`
- [x] Header mobile : **CLAIR**, pas dark (même style que desktop)
- [x] Footer : `#1A1A1A` (Noir Mat) avec logo blanc/or
- [x] Cartes : Blocs blancs solides avec bordure `#E5E7EB`
- [x] Ombres : **Très subtiles** (max `rgba(0, 0, 0, 0.04)`)
- [x] CTA : Vert `#10b981` avec shadow douce

### Typographie
- [x] Titres : Playfair Display **Regular (400)** uniquement
- [x] Corps : Inter, sans surcharge de classes Tailwind
- [x] Pas de `font-bold`, `text-2xl`, `leading-tight` (sauf demande explicite)
- [x] Exception : `lineHeight: '1'` pour chiffres dans cercles (BATCH 20D)

### Layout
- [x] **Hero** : `pt-28 lg:pt-32` (BATCH 21) - Respiration mobile
- [x] Sections : alternance blanc/gris clair
- [x] CTA final : fond Noir Mat pour contraste maximal
- [x] Formulaires : `space-y-6` (24px) uniformisé (BATCH 20B)

### Alignements & Espacements (V6.7.2)
- [x] Bullets numérotés : `flex items-center` (BATCH 20A)
- [x] Chiffres cercles : `grid place-items-center` + `lineHeight: '1'` (BATCH 20D)
- [x] Réassurance formulaires : colonne centrée (BATCH 20C)
- [x] Espacements formulaires : 24px entre champs (BATCH 20B)

### Animations
- [x] Courbe ease : `[0.22, 1, 0.36, 1]`
- [x] Stagger cartes : `delay: index * 0.15s`
- [x] Stagger listes : `delay: index * 0.1s`
- [x] Menu mobile : slide-in 0.4s + stagger links 0.05s

### Mobile (V6.7.2)
- [x] Header : burger menu < lg, CTA masqué < sm
- [x] Menu mobile : panel clair glassmorphism (pas dark)
- [x] **Hero** : `pt-28` (112px) pour respiration (BATCH 19A)
- [x] Grilles : responsive 1→2→3 colonnes
- [x] Overlay body scroll bloqué quand menu ouvert

---

## 🎯 Architecture & Composants

### Composants Réutilisables

| Composant | Fichier | Usage |
|-----------|---------|-------|
| **Header** | `ConfluenceHeaderV6_7.tsx` | Navigation fixe + menu mobile glassmorphism |
| **Footer** | `ConfluenceFooterV6_2.tsx` | Footer noir mat avec réassurance |
| **Logo** | `ConfluenceLogo.tsx` | Logo responsive 3 color schemes |
| **FAQ** | `ConfluenceFAQ.tsx` | Accordion Questions/Réponses |
| **CTA Final** | `ConfluenceFinalCTA.tsx` | Section CTA noir mat avec stats |
| **Disponibilité** | `AvailabilityBlock.tsx` | Tableau exclusivités territoriales |
| **Réassurance Contractuelle** | `ContractualReassuranceBlock.tsx` | Badge rouge bordeaux engagement |
| **Badge RGPD** | `ConfluenceGDPRBadge.tsx` | Badge conformité données |
| **Triade Professionnelle** | `ConfluenceTeamBlock.tsx` | BATCH 48 V10 - Antoine/Pascal/Laly |

### Système de Navigation

**Méthode** : Prop `onNavigate` passée à tous les composants avec routing custom.

```tsx
const handleNavigation = (page: string) => {
  setCurrentPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

<ConfluenceHeaderV6_7 
  onNavigate={handleNavigation} 
  currentPage={currentPage} 
/>
```

---

## 🛠️ Stratégie UX/Conversion TPE

### 4 Directives Critiques

| # | Directive | Application |
|---|-----------|-------------|
| 1 | **Purger tout jargon technique** | Langage simple, métaphores métier (ex: "Visible 24/7 comme un panneau lumineux") |
| 2 | **Transparence radicale pricing** | Prix affiché partout : 0€ Setup + 149€/mois, engagement 24 mois |
| 3 | **Autonomie + Support ensemble** | Toujours présenter les 2 : "Vous pouvez tout modifier VOUS-MÊME + on vous forme ET on est là" |
| 4 | **Bloc confiance TPE** | Contact humain direct (photo fondateur + téléphone + email) |

### Triade Professionnelle (BATCH 48 V10)

**Principe** : Fusionner bénéfice client + légitimité professionnelle pour créer la confiance absolue.

**Format officiel** : "En tant que [Statut Professionnel], je garantis [Bénéfice Client]"

#### Antoine — Garant de la Performance & Conversion
- **Statut professionnel** : Architecte UX/UI et Expert Technique de l'entreprise
- **Garantie officielle** : "En tant qu'Architecte UX/UI et Expert Technique de l'entreprise, je garantis personnellement que votre design (V6.7) sera premium et que votre performance technique atteindra 100/100."
- **Icône** : Award (récompense/excellence)
- **Couleur** : Or/Cuivre #D1A65E
- **Périmètre** : Score PageSpeed 100/100, design premium V6.7, architecture technique, conversion

#### Pascal — Garant de la Stratégie (Zéro Jargon)
- **Statut professionnel** : Conseiller Numérique et Responsable d'Espace de Médiation Numérique (RENM)
- **Garantie officielle** : "En tant que Conseiller Numérique et Resp. d'Espace de Médiation (RENM), mon expertise (Marketing) est de traduire la technique en chiffre d'affaires pour votre croissance locale."
- **Icône** : TrendingUp (croissance business)
- **Couleur** : Vert #10b981
- **Périmètre** : Stratégie marketing, visibilité locale, SEO sans jargon, ROI, exclusivité territoriale

#### Laly — Garante de la Sérénité & l'Autonomie
- **Statut professionnel** : Enseignante spécialisée
- **Garantie officielle** : "En tant qu'Enseignante spécialisée, ma pédagogie est votre garantie. Je vous forme à Strapi avec clarté, pour que vous soyez 100% autonome sans rien casser."
- **Icône** : ShieldCheck (protection/sécurité)
- **Couleur** : Rouge Bordeaux #A32E3A
- **Périmètre** : Formation Strapi, autonomie 100%, pédagogie claire, sérénité, support illimité

**Pages intégrant la triade** :
- Page Méthode : `ConfluenceTeamBlock` (BATCH 48 V10)
- Page Audit Gratuit : 3 cartes "Ce que contient votre audit" + 3 cartes "Pourquoi gratuit" + humanisation Pascal (BATCH 48 V10)
- Page Contact : `ConfluenceTeamBlock` + humanisation du contact (BATCH 46 V7)

**Pages prioritaires à intégrer** :
- Page Offre : Après section "La Valeur Incluse", avant "Engagement Contractuel"
- Page Études de Cas : À planifier
- Footer V6.2 : Bloc triade à ajouter

### Offre Commerciale

```
Setup : 0€ HT
Abonnement : 149€ HT/mois
Engagement : 24 mois minimum
CTA Principal : "Audit Gratuit" (sans engagement)
```

### Éléments de Réassurance

- ✅ 100% Gratuit (audit)
- ✅ Sans engagement (audit)
- ✅ Réponse sous 48h
- ✅ Score 100/100 garanti (Performance Google)
- ✅ Exclusivité territoriale contractuelle
- ✅ Formation incluse
- ✅ Support illimité

---

## 🔄 Évolutions & Changelog

### V6.7.2 (7 novembre 2025) - Finition UX Premium + Triade BATCH 48
- ✅ **BATCH 19A** : Respiration mobile (`pt-28 lg:pt-20`) sur 13 pages
- ✅ **BATCH 20A** : Alignement bullets numérotés (Exclusivité)
- ✅ **BATCH 20B** : Uniformisation espacements formulaires (`space-y-6`)
- ✅ **BATCH 20C** : Réassurance Audit en colonne centrée
- ✅ **BATCH 20D** : Centrage parfait chiffres dans cercles
- ✅ **BATCH 21** : Respiration Laptop (`pt-28 lg:pt-32`) sur 13 pages
- ✅ **BATCH 22** : Zéro Friction formulaire Contact (2 champs au lieu de 4) — Page Contact V2
- ✅ **BATCH 40** : Validations regex (phone, email) — Page Réservation
- ✅ **BATCH 44** : Bouton désactivé si formulaire incomplet — Page Réservation BATCH44
- ✅ **BATCH 45** : Harmonisation validation formulaires (États visuels)
- ✅ **BATCH 45.2** : États "touched" (validation après blur) — Page Réservation BATCH44
- ✅ **BATCH 45.4** : Standardisation pixel-perfect formulaires (Icônes `left-3`/`right-3`, padding `pl-11 pr-11`, messages `text-xs mt-1`)
- ✅ **BATCH 46 V7** : Triade professionnelle Contact — Page Contact V2
- ✅ **BATCH 48 V10** : Triade professionnelle (Antoine/Pascal/Laly) — Page Méthode + Page Audit Gratuit + Page Contact V2

### V6.7.1 (2-5 novembre 2025) - Responsive 100%
- ✅ Correction "Héro collé" mobile (BATCH 19A)
- ✅ Menu mobile glassmorphism clair (pas dark)
- ✅ Uniformisation animations Motion
- ✅ 14 pages 100% responsive

### V6.7.0 (1er novembre 2025) - Lancement
- 🎨 Palette V6.7 "App Moderne 2025"
- 🏗️ Header V6.7 glassmorphism fixe
- 📐 Typographie fluide avec `clamp()`
- 🎭 Animations Motion standardisées

### V6.2 (Octobre 2025) - Base
- Palette "Matériaux Nobles Parfait"
- Footer V6.2 noir mat
- Logo responsive 3 variants

---

## ⚠️ Avant Mise en Production

### Placeholders à Finaliser

1. **Photo Fondateur** (Footer)
   - Fichier : `/components/ConfluenceFooterV6_2.tsx`
   - Ligne : ~95
   - Actuel : Placeholder Unsplash "professional portrait"
   - **Action** : Remplacer par photo réelle du fondateur

2. **Numéro de Téléphone** (Footer)
   - Fichier : `/components/ConfluenceFooterV6_2.tsx`
   - Ligne : ~73
   - Actuel : "06 XX XX XX XX"
   - **Action** : Remplacer par numéro de téléphone réel

### Tests Finaux Recommandés

- [ ] Test responsive sur vrais appareils (iPhone, Android, iPad)
- [ ] Test performance Lighthouse (score > 90)
- [ ] Test accessibilité WCAG AA
- [ ] Test tous les formulaires (validation + soumission)
- [ ] Test navigation complète (toutes les pages)
- [ ] Vérification orthographe & contenu
- [ ] Test liens footer (tous fonctionnels)

---

## 📝 Notes pour UX/UI Designer

### Règles d'Or V6.7.2

1. **Toujours** partir du Design System, jamais improviser
2. **Toujours** utiliser `clamp()` pour la typo (pas de classes Tailwind)
3. **Toujours** `pt-28 lg:pt-32` sur les Hero (respiration)
4. **Toujours** `space-y-6` pour les formulaires
5. **Toujours** tester mobile + desktop + laptop

### Commandes Utiles

```bash
# Vérifier conformité
grep -r "pt-20" pages/  # Devrait être vide (tous pt-28 lg:pt-32)
grep -r "space-y-[0-5]" pages/  # Formulaires devraient être space-y-6
grep -r "font-bold" pages/  # Devrait être minimal (sauf cas exceptionnels)

# Compter les pages conformes
ls pages/*.tsx | wc -l  # Devrait être 14
```

---

**Document maintenu par** : Équipe Confluence Digitale  
**Dernière révision** : 9 novembre 2025  
**Prochaine révision** : Après intégration triade BATCH 48 sur pages Offre + Études de Cas + Footer