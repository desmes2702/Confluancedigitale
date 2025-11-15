# 🎨 DESIGN SYSTEM V6.7.2 - BIBLE COMPLÈTE

**Version** : 6.7.2 "APP MODERNE 2025"  
**Statut** : OBLIGATOIRE - Aucune exception autorisée  
**Usage** : À inclure dans TOUS les prompts

---

## 🚨 RÈGLES CRITIQUES (À NE JAMAIS VIOLER)

### 1. Typographie Titres

```
❌ INTERDIT : <h1 className="font-playfair font-bold">
✅ CORRECT : <h1 className="font-playfair">
```

**Règle** : Playfair Display = TOUJOURS Regular (400), JAMAIS bold

**Raison** : Identité visuelle unique, élégance premium

### 2. Ombres

```
❌ INTERDIT : <div className="shadow-lg">
✅ CORRECT : <div style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}>
```

**Règle** : Ombres UNIQUEMENT via style inline, JAMAIS classes Tailwind shadow-*

**Raison** : Ombres custom spécifiques au Design System

### 3. Hero Padding

```
❌ INTERDIT : <section className="pt-20 lg:pt-24">
✅ CORRECT : <section className="pt-28 lg:pt-32">
```

**Règle** : Hero sections = pt-28 lg:pt-32 (BATCH 21)

**Raison** : Compensation hauteur header sticky

### 4. Formulaires Spacing

```
❌ INTERDIT : <form className="space-y-4">
✅ CORRECT : <form className="space-y-6">
```

**Règle** : Formulaires = space-y-6 (BATCH 20B)

**Raison** : Lisibilité et aération optimales

### 5. Palette Couleurs

```
❌ INTERDIT : <div className="bg-blue-500">
✅ CORRECT : <div className="bg-emerald-500">
```

**Règle** : SEULEMENT 5 couleurs autorisées

**Raison** : Cohérence identité visuelle stricte

---

## 🎨 PALETTE COULEURS (EXCLUSIVE)

### Couleurs Autorisées (5 uniquement)

| Couleur | Code HEX | Usage | Classe Tailwind | Exemple |
|---------|----------|-------|-----------------|---------|
| **Gris Clair** | #F9FAFB | Background global | bg-gray-50 | Fond page |
| **Noir** | #1A1A1A | Texte principal | text-gray-900 | Paragraphes |
| **Or Premium** | #D1A65E | Accents premium | bg-[#D1A65E] | Badge Antoine |
| **Vert Émeraude** | #10b981 | CTA & success | bg-emerald-500 | Boutons |
| **Rouge Bordeaux** | #A32E3A | Alerte & important | bg-[#A32E3A] | Badge Laly |

### Variantes Grises (Autorisées)

- **gray-50** : #F9FAFB (background)
- **gray-100** : #F3F4F6 (background alt)
- **gray-200** : #E5E7EB (bordures)
- **gray-300** : #D1D5DB (bordures foncées)
- **gray-500** : #6B7280 (texte secondaire)
- **gray-600** : #4B5563 (texte tertiaire)
- **gray-900** : #1A1A1A (texte principal)

### Exemples Usage

```tsx
// ✅ Background page
<body className="bg-gray-50">

// ✅ Texte principal
<p className="text-gray-900">

// ✅ Texte secondaire
<span className="text-gray-500">

// ✅ CTA principal
<button className="bg-emerald-500 text-white">

// ✅ Badge Antoine
<span className="bg-[#D1A65E] text-white">

// ✅ Badge Laly
<span className="bg-[#A32E3A] text-white">
```

---

## 📝 TYPOGRAPHIE

### Polices

#### Playfair Display (Titres)

```tsx
// Import
import '@fontsource/playfair-display/400.css';

// Usage
<h1 className="font-playfair">         // ✅ Regular (400)
<h1 className="font-playfair font-bold"> // ❌ INTERDIT
```

**Règles** :
- ✅ Titres H1, H2, H3 uniquement
- ✅ Toujours Regular (400)
- ❌ JAMAIS bold, semibold, etc.

#### Inter (Body)

```tsx
// Import
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';

// Usage
<p className="font-inter">              // Regular (défaut)
<strong className="font-semibold">      // SemiBold (600)
```

**Règles** :
- ✅ Tout le texte body
- ✅ Regular (400) par défaut
- ✅ SemiBold (600) pour emphase

### Tailles Typographiques

| Élément | Mobile | Desktop | Classes Tailwind |
|---------|--------|---------|------------------|
| **H1 Hero** | 36px | 56px | text-4xl lg:text-6xl |
| **H1 Standard** | 32px | 48px | text-3xl lg:text-5xl |
| **H2** | 28px | 40px | text-2xl lg:text-4xl |
| **H3** | 24px | 32px | text-xl lg:text-3xl |
| **H4** | 20px | 24px | text-lg lg:text-xl |
| **Body Large** | 18px | 20px | text-lg lg:text-xl |
| **Body** | 16px | 16px | text-base |
| **Body Small** | 14px | 14px | text-sm |

### Line Heights

```tsx
// Titres
<h1 className="leading-tight">    // 1.25

// Body
<p className="leading-relaxed">   // 1.625
```

---

## 📐 ESPACEMENTS

### Container Principal

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Contenu */}
</div>
```

**Règle** : Toujours ce container pour contenu principal

### Sections

| Type | Padding Vertical | Classes |
|------|------------------|---------|
| **Hero** | 112px / 128px | pt-28 lg:pt-32 |
| **Section Standard** | 64px / 96px | py-16 lg:py-24 |
| **Section Compacte** | 48px / 64px | py-12 lg:py-16 |

### Espacements Internes

```tsx
// Formulaires
<form className="space-y-6">

// Grilles
<div className="grid gap-6 lg:gap-8">

// Flexbox vertical
<div className="flex flex-col gap-6">

// Contenus
<div className="space-y-4">
```

---

## 🎨 OMBRES (CRITIQUE)

### Ombres Standard

**Carte Standard** :
```tsx
<div style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}>
```

**Carte Hover** :
```tsx
<div 
  style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}
  className="transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]"
>
```

**Modal/Dropdown** :
```tsx
<div style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
```

### ❌ INTERDIT

```tsx
// JAMAIS de classes Tailwind shadow-*
<div className="shadow-lg">        // ❌
<div className="shadow-xl">        // ❌
<div className="shadow-2xl">       // ❌
```

---

## 🔘 BOUTONS (CTA)

### Bouton Principal (Emerald)

```tsx
<button className="
  bg-emerald-500 
  text-white 
  px-6 py-3 
  rounded-lg
  hover:bg-emerald-600 
  transition-colors 
  duration-300
  font-semibold
">
  Contactez-nous
</button>
```

### Bouton Secondaire (Outline)

```tsx
<button className="
  border-2 
  border-emerald-500 
  text-emerald-500
  px-6 py-3 
  rounded-lg
  hover:bg-emerald-50 
  transition-colors 
  duration-300
  font-semibold
">
  En savoir plus
</button>
```

### Bouton Disabled

```tsx
<button 
  disabled
  className="
    bg-gray-300 
    text-gray-500 
    px-6 py-3 
    rounded-lg
    cursor-not-allowed
  "
>
  Envoi...
</button>
```

---

## 📝 FORMULAIRES

### Structure Standard

```tsx
<form className="space-y-6">
  {/* Champ Input */}
  <div>
    <label 
      htmlFor="name" 
      className="block text-sm font-semibold text-gray-900 mb-2"
    >
      Nom complet
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="
        w-full 
        px-4 py-3 
        border-2 border-gray-200 
        rounded-lg
        focus:border-emerald-500 
        focus:ring-2 
        focus:ring-emerald-500/20
        transition-colors
        outline-none
      "
      placeholder="John Doe"
    />
  </div>

  {/* Champ Textarea */}
  <div>
    <label 
      htmlFor="message" 
      className="block text-sm font-semibold text-gray-900 mb-2"
    >
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={5}
      className="
        w-full 
        px-4 py-3 
        border-2 border-gray-200 
        rounded-lg
        focus:border-emerald-500 
        focus:ring-2 
        focus:ring-emerald-500/20
        transition-colors
        outline-none
        resize-none
      "
      placeholder="Décrivez votre projet..."
    />
  </div>

  {/* Submit */}
  <button 
    type="submit"
    className="
      w-full
      bg-emerald-500 
      text-white 
      px-6 py-3 
      rounded-lg
      hover:bg-emerald-600 
      transition-colors 
      font-semibold
    "
  >
    Envoyer
  </button>
</form>
```

### États Validation

```tsx
// Input Valide
<input className="border-2 border-emerald-500" />

// Input Erreur
<input className="border-2 border-red-500" />

// Message Erreur
<p className="text-sm text-red-500 mt-1">Ce champ est requis</p>
```

---

## 📱 RESPONSIVE

### Breakpoints Tailwind

| Breakpoint | Taille | Usage |
|------------|--------|-------|
| **Base** | < 640px | Mobile (défaut) |
| **sm** | ≥ 640px | Mobile large / Tablette petite |
| **md** | ≥ 768px | Tablette |
| **lg** | ≥ 1024px | Desktop |
| **xl** | ≥ 1280px | Desktop large |
| **2xl** | ≥ 1536px | Desktop XL |

### Patterns Responsive

**Container** :
```tsx
<div className="px-4 sm:px-6 lg:px-8">
```

**Grid** :
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
```

**Texte** :
```tsx
<h1 className="text-3xl sm:text-4xl lg:text-5xl">
```

**Espacement** :
```tsx
<section className="py-12 sm:py-16 lg:py-24">
```

---

## 🖼️ CARTES

### Carte Standard

```tsx
<div 
  className="
    bg-white 
    rounded-xl 
    p-6 lg:p-8
    transition-all 
    duration-300
  "
  style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}
>
  <h3 className="font-playfair text-xl lg:text-2xl text-gray-900 mb-4">
    Titre Carte
  </h3>
  <p className="text-gray-600 leading-relaxed">
    Contenu de la carte...
  </p>
</div>
```

### Carte Hover

```tsx
<div 
  className="
    bg-white 
    rounded-xl 
    p-6 lg:p-8
    transition-all 
    duration-300
    hover:scale-105
  "
  style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}
>
  {/* Contenu */}
</div>
```

---

## 🎯 BADGES & TAGS

### Badge Antoine (Premium)

```tsx
<span className="
  inline-flex 
  items-center 
  gap-2
  bg-[#D1A65E] 
  text-white 
  px-3 py-1 
  rounded-full 
  text-sm 
  font-semibold
">
  Premium
</span>
```

### Badge Pascal (Success)

```tsx
<span className="
  inline-flex 
  items-center 
  gap-2
  bg-emerald-500 
  text-white 
  px-3 py-1 
  rounded-full 
  text-sm 
  font-semibold
">
  Actif
</span>
```

### Badge Laly (Important)

```tsx
<span className="
  inline-flex 
  items-center 
  gap-2
  bg-[#A32E3A] 
  text-white 
  px-3 py-1 
  rounded-full 
  text-sm 
  font-semibold
">
  Important
</span>
```

---

## 🎨 ANIMATIONS

### Transitions Standard

```tsx
// Couleur
className="transition-colors duration-300"

// All
className="transition-all duration-300"

// Transform
className="transition-transform duration-300 hover:scale-105"

// Opacity
className="transition-opacity duration-300 hover:opacity-80"
```

### Hover States

```tsx
// Bouton
hover:bg-emerald-600

// Carte
hover:scale-105

// Lien
hover:text-emerald-500

// Ombre
hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]
```

---

## ♿ ACCESSIBILITÉ

### Contraste Couleurs

| Combinaison | Ratio | WCAG |
|-------------|-------|------|
| #1A1A1A sur #F9FAFB | 16.5:1 | AAA ✅ |
| #10b981 sur white | 4.6:1 | AA ✅ |
| #D1A65E sur white | 4.1:1 | AA ✅ |

### Focus States

```tsx
<button className="
  focus:outline-none 
  focus:ring-2 
  focus:ring-emerald-500 
  focus:ring-offset-2
">
```

### ARIA Labels

```tsx
<button aria-label="Ouvrir le menu">
  <MenuIcon />
</button>

<input 
  type="text" 
  aria-required="true"
  aria-invalid={hasError}
  aria-describedby="error-message"
/>
```

---

## 🔧 UTILITAIRES

### Classes Réutilisables

```css
/* Container Standard */
.container-standard {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

/* Section Spacing */
.section-spacing {
  @apply py-16 lg:py-24;
}

/* Hero Spacing */
.hero-spacing {
  @apply pt-28 lg:pt-32;
}

/* Form Spacing */
.form-spacing {
  @apply space-y-6;
}
```

---

## ✅ CHECKLIST VALIDATION

Avant de valider un composant :

- [ ] Playfair Regular (pas bold)
- [ ] Ombres inline (pas classes shadow-*)
- [ ] Hero padding pt-28 lg:pt-32
- [ ] Formulaires space-y-6
- [ ] Palette 5 couleurs uniquement
- [ ] Responsive px-4 sm:px-6 lg:px-8
- [ ] Container max-w-7xl
- [ ] Transitions duration-300
- [ ] Focus states accessibles
- [ ] ARIA labels complets

---

## 🎯 RÉSUMÉ POUR TOI (GEM'S)

### Règles à inclure SYSTÉMATIQUEMENT dans tes prompts

1. **Playfair Regular uniquement** (jamais bold)
2. **Ombres inline** (jamais classes shadow-*)
3. **Hero pt-28 lg:pt-32**
4. **Formulaires space-y-6**
5. **5 couleurs exclusives**

### Template Contraintes pour Prompts

```markdown
## 🎨 Contraintes Design System OBLIGATOIRES

### Couleurs (SEULES autorisées)
- Background : #F9FAFB
- Texte : #1A1A1A
- Premium : #D1A65E
- CTA : #10b981
- Important : #A32E3A

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
```

**Copie-colle ce bloc dans CHAQUE prompt !**

---

**🎨 Design System V6.7.2 maîtrisé ! 💪**
