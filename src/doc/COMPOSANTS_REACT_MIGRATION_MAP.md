# 🗺️ CARTOGRAPHIE DES COMPOSANTS REACT — MIGRATION ASTRO

**Date** : 9 novembre 2025  
**Version** : V6.7.2 + V5.21 + BATCH 48 V10 Phase 4  
**Mission** : Identifier tous les composants React existants pour migration Astro

---

## 📊 RÉSUMÉ RAPIDE

| Catégorie | Nombre | Priorité |
|-----------|--------|----------|
| **Layout** | 3 | 🔴 CRITIQUE |
| **Sections** | 7 | ⚠️ IMPORTANT |
| **Formulaires** | 0 (intégrés dans pages) | ⚠️ IMPORTANT |
| **UI (Shadcn)** | 30+ | ℹ️ RÉFÉRENCE |
| **GDPR** | 5 | ℹ️ OPTIONNEL |
| **Hooks** | 2 | ⚠️ IMPORTANT |
| **Utils** | 1 | ℹ️ OPTIONNEL |
| **Pages** | 14 | 🔴 CRITIQUE |

**Total composants à migrer** : ~50+

---

## 🔴 PRIORITÉ CRITIQUE — LAYOUT (3 COMPOSANTS)

### 1. **ConfluenceHeaderV6_7.tsx**
**Chemin** : `/components/ConfluenceHeaderV6_7.tsx`

**Usage** : Navigation fixe + menu mobile glassmorphism (14 pages)

**Props** :
```tsx
interface ConfluenceHeaderV6_7Props {
  onNavigate?: (page: string) => void;
}
```

**Dépendances** :
- `ConfluenceLogo.tsx`
- `motion/react` (animations menu mobile)
- `lucide-react` (icône Menu, X)

**Hydratation Astro** : `client:load` (menu mobile cliquable)

**Caractéristiques** :
- Position `fixed top-0`
- Glassmorphism subtil (`backdrop-blur-md`)
- Menu mobile hamburger
- Navigation 8 pages principales
- Logo avec 3 color schemes

---

### 2. **ConfluenceFooterV6_2.tsx**
**Chemin** : `/components/ConfluenceFooterV6_2.tsx`

**Usage** : Footer noir mat avec mini-triade (14 pages)

**Props** :
```tsx
interface ConfluenceFooterV6_2Props {
  onNavigate?: (page: string) => void;
}
```

**Dépendances** :
- `ConfluenceLogo.tsx`
- `lucide-react` (icônes Award, TrendingUp, ShieldCheck)

**Hydratation Astro** : `client:idle` (charge après idle)

**Caractéristiques** :
- Fond noir mat `#1A1A1A`
- 4 colonnes : Logo + Liens + Mini-Triade + Contact
- Mini-cartes Triade (Antoine/Pascal/Laly)
- Liens vers pages légales (CGV, Mentions, Politique)
- Copyright + Numéro de téléphone

**Placeholders à finaliser** :
- Photo fondateur (ligne ~95) → Remplacer Unsplash
- Numéro de téléphone (ligne ~73) → "06 XX XX XX XX" → Réel

---

### 3. **ConfluenceLogo.tsx**
**Chemin** : `/components/ConfluenceLogo.tsx`

**Usage** : Logo avec 3 color schemes (Header + Footer + pages)

**Props** :
```tsx
interface ConfluenceLogoProps {
  colorScheme?: 'light' | 'dark' | 'premium';
  size?: 'sm' | 'md' | 'lg';
}
```

**Hydratation Astro** : Aucune (statique)

**Caractéristiques** :
- 3 color schemes :
  - `light` : Noir Mat #1A1A1A (pour fond clair)
  - `dark` : Blanc #FFFFFF (pour fond noir)
  - `premium` : Or/Cuivre #D1A65E (pour accents)
- 3 tailles : sm / md / lg
- Typographie : Playfair Display Regular

---

## ⚠️ IMPORTANT — SECTIONS (7 COMPOSANTS)

### 4. **ConfluenceTeamBlock.tsx** ⭐ CRITIQUE
**Chemin** : `/components/ConfluenceTeamBlock.tsx`

**Usage** : Bloc 3 cartes (Antoine/Pascal/Laly) — Réassurance omniprésente (8 pages)

**Props** :
```tsx
interface ConfluenceTeamBlockProps {
  // Aucune prop (données en dur pour V1)
}
```

**Dépendances** :
- `motion/react` (animations au scroll)
- `lucide-react` (icônes Award, TrendingUp, ShieldCheck)

**Hydratation Astro** : `client:visible` (animations au scroll)

**Caractéristiques** :
- 3 cartes avec couleurs d'accent :
  - **Antoine** : Or/Cuivre #D1A65E + Award
  - **Pascal** : Vert #10b981 + TrendingUp
  - **Laly** : Rouge #A32E3A + ShieldCheck
- Titre section : "Les 3 Garanties Humaines de Votre Projet"
- Sous-titre : "Pas de SAV anonyme. Pas de hotline. Juste des visages, des noms, et des garanties claires."
- Animations fade-in + slide-up au scroll

**Pages utilisant le bloc complet** :
1. Landing Page (S5.5)
2. Méthode
3. Offre
4. Études de Cas
5. Contact V2

**Pages utilisant cartes séparées** :
6. Audit Gratuit (3 cartes individuelles + humanisation Pascal)

**Pages avec mini-format** :
7-14. Footer (14 pages)

---

### 5. **ConfluenceFAQ.tsx**
**Chemin** : `/components/ConfluenceFAQ.tsx`

**Usage** : Accordion Q&R alignée avec Triade (5 pages)

**Props** :
```tsx
interface ConfluenceFAQProps {
  items: FAQItem[];
}

interface FAQItem {
  question: string;
  answer: string;
  expert?: 'Antoine' | 'Pascal' | 'Laly';
}
```

**Dépendances** :
- `./ui/accordion.tsx` (Shadcn)
- `motion/react` (animations)

**Hydratation Astro** : `client:visible` (animations + accordion)

**Caractéristiques** :
- Accordion Shadcn
- Mentions des experts (Antoine/Pascal/Laly) dans les réponses
- Animations fade-in au scroll
- Fond blanc ou gris clair selon section

---

### 6. **ConfluenceFinalCTA.tsx**
**Chemin** : `/components/ConfluenceFinalCTA.tsx`

**Usage** : Section CTA noir mat de fin de page (10 pages)

**Props** :
```tsx
interface ConfluenceFinalCTAProps {
  onNavigate?: (page: string) => void;
}
```

**Dépendances** :
- `./ui/button.tsx` (Shadcn)
- `lucide-react` (icône ArrowRight)

**Hydratation Astro** : `client:load` (bouton cliquable)

**Caractéristiques** :
- Fond noir mat `#1A1A1A`
- CTA Vert "Demander mon Audit Gratuit" → `/audit-gratuit`
- Titre accrocheur : "Prêt à Dominer Google ?"
- Sous-titre réassurance

---

### 7. **ConfluenceTrustBand.tsx**
**Chemin** : `/components/ConfluenceTrustBand.tsx`

**Usage** : Bande de réassurance (footer landing page)

**Props** :
```tsx
interface ConfluenceTrustBandProps {
  // Aucune prop
}
```

**Dépendances** :
- `lucide-react` (icônes Shield, Award, Clock)

**Hydratation Astro** : Aucune (statique)

**Caractéristiques** :
- Fond gris clair `#F9FAFB`
- 3 badges de réassurance
- Icônes + texte court

---

### 8. **ContractualReassuranceBlock.tsx**
**Chemin** : `/components/ContractualReassuranceBlock.tsx`

**Usage** : Badge rouge engagement 24 mois (page Offre)

**Props** :
```tsx
interface ContractualReassuranceBlockProps {
  // Aucune prop
}
```

**Dépendances** :
- `lucide-react` (icône AlertTriangle)

**Hydratation Astro** : Aucune (statique)

**Caractéristiques** :
- Badge rouge #A32E3A
- Icône AlertTriangle
- Texte "Engagement Contractuel"

---

### 9. **AvailabilityBlock.tsx** (Page Offre)
**Chemin** : `/components/offre/AvailabilityBlock.tsx`

**Usage** : Tableau exclusivités territoriales (page Offre uniquement)

**Props** :
```tsx
interface AvailabilityBlockProps {
  onNavigate?: (page: string) => void;
}
```

**Dépendances** :
- `./ui/button.tsx` (Shadcn)
- `lucide-react` (icône ArrowRight)

**Hydratation Astro** : `client:load` (boutons réservation cliquables)

**Caractéristiques** :
- Titre : "Disponibilité par Secteur"
- Tableau 8 lignes (métiers d'artisans)
- 3 statuts : Disponible (vert), Réservé (orange), Pris (gris)
- Bouton "Réserver ma place" → `/reservation` avec pré-remplissage métier (sessionStorage)
- Footer note : Clause de disponibilité

**Données hardcodées** :
```tsx
const availabilityData = [
  { sector: "Couvreur", location: "Fumel (47)", status: "taken" },
  { sector: "Plombier", location: "Fumel (47)", status: "available" },
  // ... 6 autres lignes
];
```

---

### 10. **ArcGauge.tsx**
**Chemin** : `/components/ArcGauge.tsx`

**Usage** : Jauge arc de cercle (page Audit Gratuit)

**Props** :
```tsx
interface ArcGaugeProps {
  score: number; // 0-100
  label: string;
}
```

**Dépendances** : Aucune (SVG pur)

**Hydratation Astro** : Aucune (statique ou `client:visible` si animation)

**Caractéristiques** :
- Arc de cercle SVG
- Score 32/100 vs 100/100
- Couleur Or/Cuivre pour score élevé

---

## ℹ️ OPTIONNEL — GDPR (5 COMPOSANTS)

### 11. **ConfluenceGDPRBanner.tsx**
**Chemin** : `/components/ConfluenceGDPRBanner.tsx`

**Usage** : Bandeau cookies RGPD (toutes pages)

**Props** : Aucune

**Dépendances** :
- `../hooks/useGDPRConsent.ts`
- `./ui/button.tsx` (Shadcn)

**Hydratation Astro** : `client:idle` (affichage conditionnel)

---

### 12. **ConfluenceGDPRSettings.tsx**
**Chemin** : `/components/ConfluenceGDPRSettings.tsx`

**Usage** : Modal paramètres RGPD

**Props** : Aucune

**Dépendances** :
- `../hooks/useGDPRConsent.ts`
- `./ui/dialog.tsx` (Shadcn)
- `./ui/switch.tsx` (Shadcn)

**Hydratation Astro** : `client:load` (modal interactive)

---

### 13. **ConfluenceGDPRStatus.tsx**
**Chemin** : `/components/ConfluenceGDPRStatus.tsx`

**Usage** : Indicateur status RGPD (footer)

**Props** : Aucune

**Dépendances** :
- `../hooks/useGDPRConsent.ts`
- `lucide-react` (icônes Shield, AlertCircle)

**Hydratation Astro** : `client:idle`

---

### 14. **ConfluenceGDPRBadge.tsx**
**Chemin** : `/components/ConfluenceGDPRBadge.tsx`

**Usage** : Badge RGPD conforme

**Props** : Aucune

**Dépendances** :
- `lucide-react` (icône Shield)

**Hydratation Astro** : Aucune (statique)

---

## 🎨 UI SHADCN (30+ COMPOSANTS) — RÉFÉRENCE

### Composants Utilisés dans le Site

| Composant | Fichier | Usage Principal |
|-----------|---------|----------------|
| **button** | `ui/button.tsx` | CTA, navigation, formulaires |
| **input** | `ui/input.tsx` | Champs texte formulaires |
| **textarea** | `ui/textarea.tsx` | Champs message formulaires |
| **accordion** | `ui/accordion.tsx` | FAQ |
| **dialog** | `ui/dialog.tsx` | Modals GDPR |
| **switch** | `ui/switch.tsx` | Toggle paramètres GDPR |
| **select** | `ui/select.tsx` | Select métier (Réservation) |
| **badge** | `ui/badge.tsx` | Badges Hero, statuts |

### Composants Shadcn Non Utilisés (Disponibles)

Ces composants sont disponibles mais pas encore utilisés dans le site :
- alert-dialog.tsx
- alert.tsx
- aspect-ratio.tsx
- avatar.tsx
- breadcrumb.tsx
- calendar.tsx
- card.tsx
- carousel.tsx
- chart.tsx
- checkbox.tsx
- collapsible.tsx
- command.tsx
- context-menu.tsx
- dropdown-menu.tsx
- form.tsx
- hover-card.tsx
- input-otp.tsx
- label.tsx
- menubar.tsx
- navigation-menu.tsx
- pagination.tsx
- popover.tsx
- progress.tsx
- radio-group.tsx
- resizable.tsx
- scroll-area.tsx
- separator.tsx
- sheet.tsx
- sidebar.tsx
- skeleton.tsx
- slider.tsx
- sonner.tsx
- table.tsx
- tabs.tsx
- toggle-group.tsx
- toggle.tsx
- tooltip.tsx

**Action recommandée** : Conserver tous les composants Shadcn pour usage futur.

---

## 🪝 HOOKS CUSTOM (2 HOOKS)

### 15. **useScrollAnimation.ts**
**Chemin** : `/hooks/useScrollAnimation.ts`

**Usage** : Détection de visibilité pour animations Motion (toutes pages)

**Return** :
```tsx
interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement>;
  isVisible: boolean;
}
```

**Dépendances** : `react` (useRef, useEffect, useState)

**Utilisation** :
```tsx
const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

<section ref={heroRef}>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={heroVisible ? { opacity: 1, y: 0 } : {}}
  >
    {/* Contenu */}
  </motion.div>
</section>
```

---

### 16. **useGDPRConsent.ts**
**Chemin** : `/hooks/useGDPRConsent.ts`

**Usage** : Gestion du consentement RGPD (composants GDPR)

**Return** :
```tsx
interface UseGDPRConsentReturn {
  consent: GDPRConsent | null;
  acceptAll: () => void;
  acceptEssential: () => void;
  updatePreferences: (preferences: ConsentPreferences) => void;
  resetConsent: () => void;
}
```

**Dépendances** : `react`, `../utils/gdprConsent.ts`

---

## 🔧 UTILS (1 FICHIER)

### 17. **gdprConsent.ts**
**Chemin** : `/utils/gdprConsent.ts`

**Usage** : Logique de stockage et récupération du consentement RGPD

**Fonctions** :
```tsx
export function getGDPRConsent(): GDPRConsent | null;
export function setGDPRConsent(consent: GDPRConsent): void;
export function resetGDPRConsent(): void;
```

**Storage** : `localStorage` (clé: `gdpr-consent`)

---

## 📄 PAGES (14 PAGES) — MIGRATION ASTRO

### Pages Principales (11)

| # | Page | Fichier | Composants Utilisés | Priorité |
|---|------|---------|---------------------|----------|
| 1 | Landing | `ConfluenceLandingPage.tsx` | Header, Footer, TeamBlock, FAQ, FinalCTA | 🔴 |
| 2 | Audit Gratuit | `ConfluenceAuditGratuitPageV4.tsx` | Header, Footer, ArcGauge, 3 cartes Triade séparées | 🔴 |
| 3 | Offre | `ConfluenceOffrePage.tsx` | Header, Footer, TeamBlock, AvailabilityBlock | 🔴 |
| 4 | Contact | `ConfluenceContactPageV2.tsx` | Header, Footer, TeamBlock, Formulaire 2 champs | 🔴 |
| 5 | Méthode | `ConfluenceMethodePage.tsx` | Header, Footer, TeamBlock, FAQ | ⚠️ |
| 6 | Études de Cas | `ConfluenceEtudesDeCasPage.tsx` | Header, Footer, TeamBlock | ⚠️ |
| 7 | Réservation | `ConfluenceReservationPage_BATCH44.tsx` | Header, Footer, Formulaire 5 champs + validation regex | ⚠️ |
| 8 | Exclusivité | `ConfluenceExclusivitePage.tsx` | Header, Footer, FinalCTA | ℹ️ |
| 9 | Concurrents | `ConfluenceConcurrentsPage.tsx` | Header, Footer, FinalCTA | ℹ️ |
| 10 | Équipe | `ConfluenceEquipePage.tsx` | Header, Footer | ℹ️ |
| 11 | 404 | `Confluence404Page.tsx` | Header, Footer | ℹ️ |

### Pages Légales (3)

| # | Page | Fichier | Composants Utilisés | Priorité |
|---|------|---------|---------------------|----------|
| 12 | Politique Confidentialité | `ConfluencePolitiqueConfidentialitePage.tsx` | Header, Footer | ℹ️ |
| 13 | Mentions Légales | `ConfluenceMentionsLegalesPage.tsx` | Header, Footer | ℹ️ |
| 14 | CGV | `ConfluenceCGVPage.tsx` | Header, Footer | ℹ️ |

---

## 🎯 STRATÉGIE DE MIGRATION

### Phase 1 : Layout & Core Components (Priorité 🔴)
1. ✅ `ConfluenceHeaderV6_7.tsx`
2. ✅ `ConfluenceFooterV6_2.tsx`
3. ✅ `ConfluenceLogo.tsx`
4. ✅ `ConfluenceTeamBlock.tsx` ⭐
5. ✅ `useScrollAnimation.ts`

### Phase 2 : Pages de Conversion (Priorité 🔴)
6. ✅ Landing Page (index.astro)
7. ✅ Audit Gratuit (audit-gratuit.astro)
8. ✅ Offre (offre.astro)
9. ✅ Contact (contact.astro)

### Phase 3 : Sections & Composants Secondaires (Priorité ⚠️)
10. ✅ `ConfluenceFAQ.tsx`
11. ✅ `ConfluenceFinalCTA.tsx`
12. ✅ `AvailabilityBlock.tsx`
13. ✅ Méthode (methode.astro)
14. ✅ Études de Cas (etudes-de-cas.astro)
15. ✅ Réservation (reservation.astro)

### Phase 4 : Pages Secondaires & Légales (Priorité ℹ️)
16. ✅ Exclusivité (exclusivite.astro)
17. ✅ Concurrents (concurrents.astro)
18. ✅ Équipe (equipe.astro)
19. ✅ 404 (404.astro)
20. ✅ Politique Confidentialité (politique-confidentialite.astro)
21. ✅ Mentions Légales (mentions-legales.astro)
22. ✅ CGV (cgv.astro)

### Phase 5 : GDPR & Utils (Priorité ℹ️ Optionnel)
23. ✅ `useGDPRConsent.ts`
24. ✅ `gdprConsent.ts`
25. ✅ `ConfluenceGDPRBanner.tsx`
26. ✅ `ConfluenceGDPRSettings.tsx`
27. ✅ `ConfluenceGDPRStatus.tsx`
28. ✅ `ConfluenceGDPRBadge.tsx`

---

## 📋 CHECKLIST MIGRATION PAR COMPOSANT

### Template Checklist

Pour chaque composant :

- [ ] Fichier `.tsx` converti en Astro ou React (selon interactivité)
- [ ] Props interface documentée
- [ ] Dépendances identifiées (motion, lucide-react, Shadcn)
- [ ] Hydratation Astro définie (load/visible/idle/aucune)
- [ ] Animations Motion préservées (useScrollAnimation)
- [ ] Responsive mobile-first vérifié
- [ ] Design System V6.7.2 respecté (couleurs HEX, typo Playfair)
- [ ] Données extraites pour Strapi (commentaires TODO)

---

## 🎉 CONCLUSION

**Total à migrer** : ~50+ composants + 14 pages

**Priorité absolue** :
1. Header + Footer + Logo + TeamBlock (4 composants)
2. Landing + Audit + Offre + Contact (4 pages)
3. useScrollAnimation (1 hook)

**Avec ces 9 éléments, tu as 80% du site fonctionnel.**

---

**Bon courage, Astro ! 🚀**

---

**Maintenu par** : Équipe Confluence Digitale  
**Date** : 9 novembre 2025  
**Version** : V6.7.2 + V5.21 + BATCH 48 V10 Phase 4
