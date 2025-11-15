# ⚡ QUICK START - MIGRATION FRONTEND

**Temps de lecture** : 5 minutes  
**Objectif** : Démarrer rapidement la migration

---

## 🎯 L'ESSENTIEL EN 5 MINUTES

### Qu'est-ce qu'on fait ?

On transforme une **app React pure** en **site Astro hybride** :

```
AVANT                      APRÈS
React (SPA)       →        Astro (SSG) + React Islands
100% JavaScript   →        HTML statique + JS minimal
Client-side       →        Server-side + Hydratation sélective
Perf ~70/100      →        Perf 100/100
```

---

## 🧠 COMPRENDRE ASTRO EN 30 SECONDES

### Concept Clé : Les "Îles" (Islands)

```
┌─────────────────────────────────┐
│     PAGE ASTRO (Statique)       │
│                                 │
│  ┌──────────┐   ┌──────────┐  │
│  │  React   │   │  React   │  │
│  │  Island  │   │  Island  │  │
│  │  (JS)    │   │  (JS)     │  │
│  └──────────┘   └──────────┘  │
│                                 │
│  HTML Statique (Pas de JS)     │
└─────────────────────────────────┘
```

**Principe** : Seules les parties **interactives** deviennent des "îles React".

---

## 🔀 DÉCISION RAPIDE : .tsx ou .astro ?

### Composant a-t-il de l'interactivité ?

```typescript
// ❓ Mon composant utilise-t-il :
- useState, useEffect  
- onClick, onChange
- Animations dynamiques
- Formulaires avec validation

// ✅ OUI → Garder en REACT (.tsx)
// ❌ NON → Convertir en ASTRO (.astro)
```

### Exemples Concrets

| Composant | Interactif ? | Format |
|-----------|--------------|--------|
| Header avec menu mobile | ✅ Oui | `.tsx` |
| Footer simple | ❌ Non | `.astro` |
| Formulaire Contact | ✅ Oui | `.tsx` |
| Section Héro (texte) | ❌ Non | `.astro` |
| FAQ avec accordéons | ✅ Oui | `.tsx` |
| Carte de service | ❌ Non | `.astro` |

---

## 🚀 WORKFLOW EN 5 ÉTAPES

### 1️⃣ Analyser le Composant

```tsx
// Exemple : ConfluenceTeamBlock.tsx
export default function ConfluenceTeamBlock() {
  return (
    <section>
      <h2>Notre Équipe</h2>
      {/* Contenu statique, pas d'état */}
    </section>
  );
}
```

**Question** : Y a-t-il du `useState` ou `onClick` ?
- ❌ Non → **Convertir en .astro**

---

### 2️⃣ Créer la Page Astro

```astro
---
// src/pages/equipe.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import ConfluenceHeaderV6_7 from '../components/layout/ConfluenceHeaderV6_7.tsx';
import ConfluenceTeamBlock from '../components/sections/ConfluenceTeamBlock.tsx';
import ConfluenceFooterV6_2 from '../components/layout/ConfluenceFooterV6_2.tsx';
---

<BaseLayout title="Notre Équipe | Confluence Digitale">
  <ConfluenceHeaderV6_7 client:load />
  
  <main>
    <ConfluenceTeamBlock client:visible />
  </main>

  <ConfluenceFooterV6_2 client:visible />
</BaseLayout>
```

---

### 3️⃣ Ajouter l'Hydratation

**Règles** :
- `client:load` → Interactivité immédiate (Header, Menu)
- `client:visible` → Visible dans viewport (FAQ, Footer)
- Aucune → Statique (texte, images)

```astro
<!-- Header : toujours visible, menu mobile -->
<ConfluenceHeaderV6_7 client:load />

<!-- FAQ : scroll down pour voir -->
<ConfluenceFAQ client:visible />

<!-- Footer : scroll down pour voir -->
<ConfluenceFooterV6_2 client:visible />
```

---

### 4️⃣ Respecter le Design System

**3 Règles Critiques** :

1. **Titres** : Playfair Display Regular (jamais bold)
   ```tsx
   <h1 className="font-playfair text-5xl">Mon Titre</h1>
   ```

2. **Hero Padding** : `pt-28 lg:pt-32`
   ```tsx
   <section className="pt-28 lg:pt-32">
   ```

3. **Ombres** : Inline style (pas de classes Tailwind)
   ```tsx
   <div style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}>
   ```

---

### 5️⃣ Tester

```bash
# Lancer le serveur dev
npm run dev

# Ouvrir http://localhost:4321

# Tester :
✅ Responsive (mobile, tablette, desktop)
✅ Interactivité (menu, formulaires)
✅ Performance (Lighthouse)
```

---

## 🎨 DESIGN SYSTEM - RÈGLES EXPRESS

### Couleurs (Palette complète)

```typescript
const COLORS = {
  background: '#F9FAFB',     // Fond gris clair
  text: '#1A1A1A',           // Texte noir mat
  premium: '#D1A65E',        // Or/Cuivre (Antoine)
  cta: '#10b981',            // Vert (Pascal)
  contractual: '#A32E3A',    // Rouge Bordeaux (Laly)
  white: '#FFFFFF'           // Blanc (cartes)
};
```

### Responsive (Mobile-First)

```tsx
<div className="
  px-4           /* Mobile : 16px */
  sm:px-6        /* Tablette : 24px */
  lg:px-8        /* Desktop : 32px */
  max-w-7xl      /* Max 1280px */
  mx-auto        /* Centré */
">
```

### Espacement (Formulaires)

```tsx
<form className="space-y-6">
  <input /> {/* Espacement 24px (6 * 4px) */}
  <input />
  <button />
</form>
```

---

## 🛠️ COMMANDES ESSENTIELLES

```bash
# Installation
npm install

# Développement (localhost:4321)
npm run dev

# Build production
npm run build

# Preview du build
npm run preview

# Tester performance
npm run build && npm run preview
# Puis ouvrir Lighthouse
```

---

## ⚡ TEMPLATES ULTRA-RAPIDES

### Template Page Astro

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/layout/ConfluenceHeaderV6_7.tsx';
import Footer from '../components/layout/ConfluenceFooterV6_2.tsx';
---

<BaseLayout title="Titre | Confluence Digitale">
  <Header client:load />
  
  <main>
    <section className="pt-28 lg:pt-32 px-4">
      <h1 className="font-playfair text-5xl">Mon Titre</h1>
    </section>
  </main>

  <Footer client:visible />
</BaseLayout>
```

### Template Composant React

```tsx
// src/components/sections/MonComposant.tsx
import { useState } from 'react';

export default function MonComposant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl mb-8">Section</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          Toggle
        </button>
      </div>
    </section>
  );
}
```

---

## 🚨 PIÈGES À ÉVITER

### ❌ Erreur #1 : Utiliser 'use client'

```tsx
// ❌ FAUX (syntaxe Next.js)
'use client';
import { useState } from 'react';

// ✅ CORRECT (Astro n'en a pas besoin)
import { useState } from 'react';
```

### ❌ Erreur #2 : Oublier l'Hydratation

```astro
<!-- ❌ FAUX : composant React non hydraté -->
<MonComposant />

<!-- ✅ CORRECT -->
<MonComposant client:load />
```

### ❌ Erreur #3 : Mauvais Padding Hero

```tsx
// ❌ FAUX
<section className="pt-20 lg:pt-28">

// ✅ CORRECT (BATCH 21)
<section className="pt-28 lg:pt-32">
```

### ❌ Erreur #4 : Ombres Tailwind

```tsx
// ❌ FAUX
<div className="shadow-lg">

// ✅ CORRECT
<div style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}>
```

---

## ✅ CHECKLIST EXPRESS

### Avant de Pusher le Code

- [ ] Composant respecte Design System V6.7.2
- [ ] Hydratation correcte (`client:load` ou `client:visible`)
- [ ] Responsive testé (mobile, tablette, desktop)
- [ ] Aucune erreur TypeScript
- [ ] Hero padding = `pt-28 lg:pt-32`
- [ ] Ombres = inline `style={{ boxShadow }}`
- [ ] Images ont un `alt` text

---

## 📚 PROCHAINES ÉTAPES

### Vous Maîtrisez le Quick Start ?

**Lire ensuite** :

1. **`03_DESIGN_SYSTEM_REFERENCE.md`** - Règles complètes
2. **`05_TEMPLATES.md`** - Plus de templates
3. **`09_EXEMPLES_MIGRATION.md`** - Cas concrets
4. **`06_CHECKLIST.md`** - Validation finale

---

## 💡 ASTUCE PRO

### Commencer Par les Pages Simples

**Ordre recommandé** :

1. ✅ Page Mentions Légales (100% statique)
2. ✅ Page CGV (100% statique)
3. ✅ Page Équipe (90% statique)
4. ✅ Page Landing (50% statique, 50% interactif)
5. ✅ Page Contact (formulaire complexe)

**Pourquoi ?** : Commencer simple pour apprendre, puis complexifier.

---

## 🎯 RÉSUMÉ EN 3 POINTS

1. **Analyse** → Composant interactif ? → `.tsx` ou `.astro`
2. **Hydratation** → `client:load` (urgent) ou `client:visible` (lazy)
3. **Design System** → Playfair Regular + `pt-28 lg:pt-32` + Ombres inline

---

**🚀 Vous êtes prêt ! Commencez la migration !**

---

**Temps de lecture** : 5 minutes ✅  
**Prochaine lecture** : `03_DESIGN_SYSTEM_REFERENCE.md` (15 min)
