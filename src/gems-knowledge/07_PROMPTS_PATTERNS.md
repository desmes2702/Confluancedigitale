# 🎯 PATTERNS DE PROMPTS - BIBLIOTHÈQUE

**Usage** : Templates prêts à adapter selon la demande utilisateur  
**Objectif** : Gagner du temps avec des patterns éprouvés

---

## 📋 PATTERNS PAR TYPE DE TÂCHE

### Pattern 1 : Migration Page

```markdown
# MIGRATION : Page [NomPage] React → Astro

## 📍 Contexte Projet
- Projet : Confluence Digitale V6.7.2
- Stack : Astro 5.x + React 18 + TypeScript 5.x + Tailwind 4.x
- Design System : V6.7.2 "App Moderne 2025"

## 🎨 Contraintes Design System OBLIGATOIRES

### Couleurs (SEULES autorisées)
- Background : #F9FAFB
- Texte : #1A1A1A
- Premium Antoine : #D1A65E
- CTA Pascal : #10b981
- Contractuel Laly : #A32E3A

### Typographie
- Titres : font-playfair (Regular 400 - JAMAIS bold)
- Body : font-inter

### Espacements
- Hero : pt-28 lg:pt-32
- Sections : py-16 lg:py-24
- Container : max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

### Ombres
- JAMAIS classes shadow-*
- Toujours style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}

### Formulaires
- Espacement : space-y-6

## 🎯 Tâche à Réaliser

Migre `/pages/[FichierSource].tsx` vers `/src/pages/[destination].astro`

### Analyse requise
1. Identifier composants interactifs (useState, onClick, useEffect) → Garder React
2. Identifier composants statiques → Convertir Astro
3. Extraire data statique vers props ou fichiers séparés
4. Définir SEO complet (title, description, canonical, OG)

### Structure attendue
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/layout/ConfluenceHeaderV6_7.tsx';
import [ComposantsNécessaires] from '../components/sections/...';
import Footer from '../components/layout/ConfluenceFooterV6_2.tsx';

const seoData = {
  title: "[Titre SEO] - Confluence Digitale",
  description: "[Description meta]",
  canonical: "https://confluence-digitale.fr/[url]",
  ogImage: "/images/og-[page].jpg"
};
---

<BaseLayout {...seoData}>
  <Header client:load />
  <main>
    <!-- Sections -->
  </main>
  <Footer client:visible />
</BaseLayout>
```

### Composants React à créer/réutiliser
- [Liste des composants nécessaires]

## 📁 Fichiers

**Source** : `/pages/[FichierSource].tsx`
**Destination** : `/src/pages/[destination].astro`
**Composants** : `/src/components/sections/*.tsx`

## ✅ Validation

- [ ] Structure Astro correcte (frontmatter + template)
- [ ] SEO complet (title, description, canonical, OG)
- [ ] Hero padding pt-28 lg:pt-32 (si hero présent)
- [ ] Hydratation correcte (client:load Header, client:visible reste)
- [ ] Playfair Regular (pas bold)
- [ ] Ombres inline uniquement
- [ ] Formulaires space-y-6 (si formulaire)
- [ ] Container max-w-7xl partout
- [ ] Responsive mobile-first
- [ ] TypeScript strict

## 📚 Documentation

- `/migration-frontend/09_EXEMPLES_MIGRATION.md`
- `/migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md`
- `/migration-frontend/02_GUIDE_TECHNIQUE.md`
```

---

### Pattern 2 : Création Composant Statique

```markdown
# CRÉATION : Composant [NomComposant] (Statique)

## 📍 Contexte Projet
- Projet : Confluence Digitale V6.7.2
- Stack : Astro 5.x + React 18 + TypeScript 5.x + Tailwind 4.x
- Design System : V6.7.2 "App Moderne 2025"

## 🎨 Contraintes Design System OBLIGATOIRES

[... Bloc complet contraintes ...]

## 🎯 Tâche à Réaliser

Crée un composant [Type] statique : [Description]

### Spécifications

**Type** : Composant Astro (.astro) - aucune interactivité

**Layout** :
- [Description du layout]

**Contenu** :
- [Éléments à afficher]

**Design** :
- Section : py-16 lg:py-24
- Container : max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Grid : grid-cols-1 md:grid-cols-2 lg:grid-cols-[N]
- Gap : gap-6 lg:gap-8

### Structure Astro

```astro
---
// Imports si nécessaire
---

<section class="py-16 lg:py-24 bg-[background]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Titre -->
    <h2 class="font-playfair text-3xl lg:text-5xl text-center mb-12">
      [Titre Section]
    </h2>

    <!-- Contenu -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[N] gap-6 lg:gap-8">
      <!-- Items -->
    </div>
  </div>
</section>
```

## 📁 Fichiers

**Destination** : `/src/components/sections/[NomComposant].astro`

## ✅ Validation

- [ ] Format .astro (pas d'interactivité)
- [ ] Playfair Regular pour titres
- [ ] Container max-w-7xl
- [ ] Responsive grid
- [ ] Pas de classes shadow-*
- [ ] Couleurs palette exclusive
- [ ] Section spacing py-16 lg:py-24

## 📚 Documentation

- `/migration-frontend/05_TEMPLATES.md`
- `/migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md`
```

---

### Pattern 3 : Création Composant Interactif React

```markdown
# CRÉATION : Composant [NomComposant] React

## 📍 Contexte Projet
- Projet : Confluence Digitale V6.7.2
- Stack : Astro 5.x + React 18 + TypeScript 5.x + Tailwind 4.x
- Design System : V6.7.2 "App Moderne 2025"

## 🎨 Contraintes Design System OBLIGATOIRES

[... Bloc complet contraintes ...]

## 🎯 Tâche à Réaliser

Crée un composant React interactif : [Description]

### Spécifications Techniques

**Interactivité** :
- [Décrire comportements interactifs]
- useState pour [état à gérer]
- onClick, onChange, etc.

**Accessibilité** :
- ARIA labels complets
- Navigation clavier (Tab, Enter, Espace)
- Focus states visibles

**Icons** :
- Lucide React ([Icons nécessaires])

**Design** :
- [Spécificités design]

### Structure TypeScript

```typescript
interface [DataType] {
  id: number;
  [autres propriétés]: type;
}

interface [ComponentName]Props {
  [props si nécessaire]: type;
}
```

### Data

```typescript
const [dataName]: [DataType][] = [
  // Data hardcodée ou props
];
```

### Structure Composant

```tsx
import React, { useState } from 'react';
import { [Icons] } from 'lucide-react';

export default function [ComponentName]() {
  const [state, setState] = useState<Type>(initialValue);

  // Handlers
  const handleAction = () => {
    // Logic
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
      </div>
    </section>
  );
}
```

## 📁 Fichiers

**Destination** : `/src/components/[categorie]/[NomComposant].tsx`

## ✅ Validation

- [ ] Format .tsx (React)
- [ ] TypeScript strict (interfaces)
- [ ] useState pour état
- [ ] Handlers typés
- [ ] Accessibilité complète (ARIA)
- [ ] Navigation clavier
- [ ] Transitions duration-300
- [ ] Playfair Regular pour titres
- [ ] Ombres inline si cartes
- [ ] Responsive mobile-first

## 📚 Documentation

- `/migration-frontend/05_TEMPLATES.md`
- `/migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md`
- `/migration-frontend/04_CONVENTIONS_CODE.md`
```

---

### Pattern 4 : Formulaire avec Validation

```markdown
# CRÉATION : Formulaire [Type] avec Validation

## 📍 Contexte Projet
- Projet : Confluence Digitale V6.7.2
- Stack : Astro 5.x + React 18 + TypeScript 5.x + Tailwind 4.x
- Design System : V6.7.2 "App Moderne 2025"

## 🎨 Contraintes Design System OBLIGATOIRES

[... Bloc complet contraintes ...]

### Formulaires (CRITIQUE)
- Espacement : space-y-6 (BATCH 20B)
- Input border : border-2 border-gray-200
- Input focus : focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
- Input error : border-2 border-red-500
- Input valid : border-2 border-emerald-500

## 🎯 Tâche à Réaliser

Crée un formulaire [Type] avec validation temps réel

### Champs Formulaire

1. **[Champ 1]** (required)
   - Validation : [règle]
   - Message erreur : "[message]"

2. **[Champ 2]** (required/optional)
   - Validation : [règle]
   - Message erreur : "[message]"

[... autres champs ...]

### Logique Validation

**États** :
- formData : Données du formulaire
- errors : Erreurs par champ
- touched : Champs modifiés
- isSubmitting : État submit en cours

**Validation** :
- onChange : Validation si champ déjà touché
- onBlur : Marquer champ comme touché + valider
- onSubmit : Validation complète

**Indicateurs** :
- Icône Check (✓) si champ valide
- Icône X si champ invalide
- CTA disabled si formulaire invalide

### Structure TypeScript

```typescript
interface FormData {
  [champ1]: string;
  [champ2]: string;
  // ...
}

interface FormErrors {
  [champ1]?: string;
  [champ2]?: string;
  // ...
}
```

### Handlers

```typescript
const validateField = (name: string, value: string): string | undefined => {
  // Logique validation par champ
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  // Update formData
  // Valider si touched
};

const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  // Marquer touched
  // Valider
};

const handleSubmit = async (e: React.FormEvent) => {
  // Validation complète
  // Submit si valide
};
```

## 📁 Fichiers

**Destination** : `/src/components/forms/[NomFormulaire].tsx`

## ✅ Validation

- [ ] Format .tsx (React)
- [ ] TypeScript strict (FormData, FormErrors)
- [ ] useState pour formData, errors, touched, isSubmitting
- [ ] Validation temps réel (onChange + onBlur)
- [ ] Icônes Check/X selon état
- [ ] CTA disabled si invalide
- [ ] Messages erreur clairs
- [ ] space-y-6 (BATCH 20B)
- [ ] Input borders selon état (gray-200, emerald-500, red-500)
- [ ] Accessibilité (labels, aria-required, aria-invalid)
- [ ] Responsive mobile-first

## 📚 Documentation

- `/migration-frontend/05_TEMPLATES.md`
- `/migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md`
```

---

### Pattern 5 : Debug Erreur

```markdown
# DEBUG : [Type d'Erreur] dans [Fichier]

## 📍 Contexte Projet
- Projet : Confluence Digitale V6.7.2
- Stack : Astro 5.x + React 18 + TypeScript 5.x + Tailwind 4.x
- Design System : V6.7.2 "App Moderne 2025"

## 🚨 Erreur Observée

```
[Message d'erreur exact]
File: [Chemin fichier]
Line: [Numéro ligne si connu]
```

## 🎯 Tâche

Identifier et corriger l'erreur dans `[Fichier]`

### Analyse à effectuer

1. **Hypothèse #1** : [Cause possible]
   - Vérifier : [Quoi vérifier]
   - Solution : [Comment corriger]

2. **Hypothèse #2** : [Cause possible]
   - Vérifier : [Quoi vérifier]
   - Solution : [Comment corriger]

3. **Hypothèse #3** : [Cause possible]
   - Vérifier : [Quoi vérifier]
   - Solution : [Comment corriger]

### Solutions Possibles

**Option 1** : [Nom solution]
```tsx
[Code solution]
```

**Option 2** : [Nom solution]
```tsx
[Code solution]
```

## 📁 Fichiers

**À débugger** : `[Fichier problématique]`
**À vérifier** : `[Fichiers liés]`

## ✅ Validation

- [ ] Erreur résolue (plus de message d'erreur)
- [ ] TypeScript satisfait (npm run build sans erreur TS)
- [ ] Composant/Page s'affiche correctement
- [ ] Fonctionnalité préservée
- [ ] Pas de régression (reste du code OK)
- [ ] Design System toujours respecté

## 📚 Documentation

- `/migration-frontend/08_TROUBLESHOOTING.md`
```

---

### Pattern 6 : Optimisation Performance

```markdown
# OPTIMISATION : Performance [Page/Composant]

## 📍 Contexte Projet
- Projet : Confluence Digitale V6.7.2
- Stack : Astro 5.x + React 18 + TypeScript 5.x + Tailwind 4.x
- Design System : V6.7.2 "App Moderne 2025"

## 🎯 Objectif

Optimiser `[Fichier]` pour Lighthouse > 90

### Métriques Actuelles

- Performance : [Score actuel]/100
- LCP : [Temps actuel]s
- FID : [Temps actuel]ms
- CLS : [Score actuel]
- JavaScript : [Poids actuel] KB

### Métriques Cibles

- Performance : > 90/100
- LCP : < 2.5s
- FID : < 100ms
- CLS : < 0.1
- JavaScript : < 100 KB

## 🎯 Actions à Réaliser

### 1. Optimisation Images

- [ ] Convertir PNG/JPG → WebP
- [ ] Ajouter lazy loading (loading="lazy")
- [ ] Optimiser dimensions (srcset responsive)
- [ ] Compresser (TinyPNG, Squoosh)
- [ ] Ajouter alt text SEO

### 2. Optimisation JavaScript

- [ ] Remplacer client:load par client:visible (sauf Header)
- [ ] Lazy load composants non-critiques
- [ ] Code splitting si nécessaire
- [ ] Supprimer libraries inutilisées
- [ ] Minifier code

### 3. Optimisation Fonts

- [ ] Précharger polices critiques (Playfair, Inter)
```html
<link rel="preload" href="/fonts/playfair-display.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
```

### 4. Optimisation CSS

- [ ] Inline CSS critique (above-the-fold)
- [ ] Defer CSS non-critique
- [ ] Supprimer CSS inutilisé (PurgeCSS)

### 5. Optimisation Hydratation

**Avant** :
```astro
<Component1 client:load />
<Component2 client:load />
<Component3 client:load />
```

**Après** :
```astro
<Header client:load />           <!-- Prioritaire -->
<Component1 client:visible />    <!-- Lazy -->
<Component2 client:visible />    <!-- Lazy -->
<Component3 client:visible />    <!-- Lazy -->
```

## 📁 Fichiers

**À optimiser** : `[Fichier principal]`
**Images** : `/public/images/*`
**Composants** : `/src/components/sections/*`

## ✅ Validation

- [ ] Lighthouse Performance > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] JavaScript < 100 KB
- [ ] Images WebP avec lazy loading
- [ ] Fonts préchargées
- [ ] Hydratation optimisée
- [ ] Fonctionnalités préservées
- [ ] Design System respecté

## 📚 Documentation

- `/migration-frontend/07_SEO_PERFORMANCE.md`
```

---

### Pattern 7 : Refactoring Responsive

```markdown
# REFACTORING : Responsive [Composant]

## 📍 Contexte Projet
- Projet : Confluence Digitale V6.7.2
- Stack : Astro 5.x + React 18 + TypeScript 5.x + Tailwind 4.x
- Design System : V6.7.2 "App Moderne 2025"

## 🎯 Objectif

Rendre `[Composant]` responsive mobile-first

### Problème Actuel

- [ ] Pas responsive mobile (< 640px)
- [ ] Layout cassé tablette (768px)
- [ ] Texte illisible sur petit écran
- [ ] Scroll horizontal
- [ ] [Autre problème]

## 🎯 Actions à Réaliser

### Breakpoints à Respecter

| Device | Width | Layout |
|--------|-------|--------|
| **Mobile** | < 640px | [Layout mobile] |
| **Tablet** | 640-1023px | [Layout tablet] |
| **Desktop** | ≥ 1024px | [Layout desktop] |

### Patterns Responsive

**Container** :
```tsx
className="px-4 sm:px-6 lg:px-8"
```

**Grid** :
```tsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[N] gap-4 sm:gap-6 lg:gap-8"
```

**Texte** :
```tsx
className="text-base sm:text-lg lg:text-xl"
```

**Espacement** :
```tsx
className="py-12 sm:py-16 lg:py-24"
```

**Flexbox** :
```tsx
className="flex flex-col sm:flex-row gap-4"
```

## 📁 Fichiers

**À refactorer** : `[Fichier]`

## ✅ Validation

- [ ] Test iPhone SE (375px) ✅
- [ ] Test iPhone 12 (390px) ✅
- [ ] Test iPad (768px) ✅
- [ ] Test iPad Pro (1024px) ✅
- [ ] Test Desktop (1280px) ✅
- [ ] Test Desktop XL (1920px) ✅
- [ ] Pas de scroll horizontal
- [ ] Texte lisible tous supports
- [ ] Images adaptées
- [ ] Navigation mobile accessible
- [ ] Design System respecté

## 📚 Documentation

- `/migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md` (Section Responsive)
```

---

## 🎯 UTILISATION DES PATTERNS

### Comment utiliser ?

1. **Identifier le type de tâche** de l'utilisateur
2. **Sélectionner le pattern** correspondant
3. **Remplacer les [placeholders]** par les valeurs réelles
4. **Ajouter détails spécifiques** selon besoin
5. **Vérifier présence** des 5 règles absolues

### Exemple d'utilisation

**Utilisateur** : "Crée un composant Pricing avec cartes"

**Tu sélectionnes** : Pattern 3 (Composant Interactif) ou Pattern 2 (Statique) selon besoin

**Tu remplaces** :
- `[NomComposant]` → `PricingCards`
- `[Description]` → "Grille de 3 cartes pricing avec features"
- `[Type]` → "Section pricing"
- etc.

---

## 💡 TIPS POUR GÉNÉRER DES PROMPTS

### Toujours inclure

1. ✅ Contexte projet complet
2. ✅ Bloc contraintes Design System
3. ✅ Structure attendue (code ou pseudocode)
4. ✅ Fichiers source + destination
5. ✅ Checklist validation
6. ✅ Documentation référence

### Adapter selon contexte

- Migration → Pattern 1
- Nouveau composant statique → Pattern 2
- Nouveau composant interactif → Pattern 3
- Formulaire → Pattern 4
- Bug → Pattern 5
- Performance → Pattern 6
- Responsive → Pattern 7

---

**🎯 Patterns de prompts maîtrisés ! Utilise-les pour générer rapidement ! 💪**
