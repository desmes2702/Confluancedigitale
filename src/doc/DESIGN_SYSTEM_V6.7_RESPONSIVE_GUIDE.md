# 📱 Design System V6.7 - Guide Responsive Complet

## 📋 Vue d'Ensemble

**Version** : V6.7.2 + BATCH 21  
**Date** : 9 novembre 2025  
**Philosophie** : Mobile-First, Progressive Enhancement

---

## 🎯 Breakpoints Tailwind Standard

```css
/* Breakpoints officiels */
sm:  640px   /* Mobile landscape, petites tablettes */
md:  768px   /* Tablettes portrait */
lg:  1024px  /* Desktop, tablettes landscape */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large desktop */
```

### Usage Recommandé V6.7

| Device | Breakpoint | Usage Principal |
|--------|------------|-----------------|
| **Mobile (320-639px)** | Base (sans préfixe) | Design par défaut, mobile-first |
| **Mobile Landscape (640-767px)** | `sm:` | Ajustements légers, CTAs plus visibles |
| **Tablet (768-1023px)** | `md:` | Grilles 2 colonnes, espacements augmentés |
| **Desktop (1024-1279px)** | `lg:` | Grilles 3 colonnes, menu desktop |
| **Large Desktop (1280px+)** | `xl:` | Conteneurs max-width, typographie agrandie |

---

## 📐 Typographie Responsive V6.7

### Hiérarchie Standard

#### H1 - Hero Titles (Playfair Display Regular 400)

```tsx
className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
```

**Tailles effectives** :
- Mobile: 36px (text-4xl)
- Mobile Landscape: 48px (text-5xl)
- Tablet: 60px (text-6xl)
- Desktop: 72px (text-7xl)
- Large Desktop: 96px (text-8xl)

**Usage** : Titres hero uniquement, maximum 1 par page.

#### H2 - Section Titles (Playfair Display Regular 400)

```tsx
className="text-3xl md:text-4xl lg:text-5xl"
```

**Tailles effectives** :
- Mobile: 30px (text-3xl)
- Tablet: 36px (text-4xl)
- Desktop: 48px (text-5xl)

**Usage** : Titres de section principale.

#### H3 - Subsection Titles (Playfair Display Regular 400)

```tsx
className="text-2xl md:text-3xl lg:text-4xl"
```

**Tailles effectives** :
- Mobile: 24px (text-2xl)
- Tablet: 30px (text-3xl)
- Desktop: 36px (text-4xl)

**Usage** : Sous-titres, titres de cartes importantes.

#### Body Text - Paragraphes (Inter)

```tsx
className="text-base md:text-lg lg:text-xl"
```

**Tailles effectives** :
- Mobile: 16px (text-base)
- Tablet: 18px (text-lg)
- Desktop: 20px (text-xl)

**Usage** : Paragraphes principaux, descriptions importantes.

#### Body Text - Secondary (Inter)

```tsx
className="text-sm md:text-base"
```

**Tailles effectives** :
- Mobile: 14px (text-sm)
- Tablet: 16px (text-base)

**Usage** : Texte secondaire, listes, détails.

---

## 📦 Containers & Spacing

### Container Principal

```tsx
className="container mx-auto px-4 sm:px-6 lg:px-8"
```

**Breakdowns** :
- Mobile: `max-width: 100%`, `padding: 0 1rem` (16px)
- Mobile Landscape: `padding: 0 1.5rem` (24px)
- Desktop: `max-width: 1280px`, `padding: 0 2rem` (32px)

### Sections - Padding Vertical

```tsx
className="py-12 sm:py-16 md:py-20 lg:py-24"
```

**Tailles effectives** :
- Mobile: 48px top/bottom (py-12)
- Mobile Landscape: 64px (py-16)
- Tablet: 80px (py-20)
- Desktop: 96px (py-24)

### Hero Section - Padding

```tsx
className="pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24"
```

**Breakdown** :
- `pt-28` : Mobile/Tablet (112px) - **BATCH 21 V6.7.2**
- `lg:pt-32` : Desktop (128px) - Respiration laptop optimale
- `pb-*` : Progressif selon device

---

## 🎨 Grilles Responsive

### Grille 3 Colonnes Standard

```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
```

**Comportement** :
- Mobile: 1 colonne, gap 16px
- Tablet: 2 colonnes, gap 24px
- Desktop: 3 colonnes, gap 32px

### Grille 2 Colonnes (50/50)

```tsx
className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
```

**Comportement** :
- Mobile/Tablet: 1 colonne, gap 24px
- Desktop: 2 colonnes, gap 32px

### Grille Features (4 colonnes max)

```tsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
```

**Comportement** :
- Mobile: 1 colonne
- Mobile Landscape: 2 colonnes
- Desktop: 4 colonnes

---

## 🎭 Composants Responsive V6.7

### Header V6.7

#### Desktop (≥ lg / 1024px)
```tsx
<nav className="hidden lg:flex items-center gap-8">
  {/* Navigation complète */}
</nav>
```

#### Mobile (< lg)
```tsx
<button className="lg:hidden">
  {/* Burger menu */}
</button>
```

#### CTA Button
```tsx
<Button className="hidden sm:flex">
  {/* Caché sur très petit mobile, visible à partir de 640px */}
</Button>
```

### Cartes / Cards

```tsx
<div className="p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl">
  {/* Padding progressif + border-radius */}
</div>
```

**Padding effectif** :
- Mobile: 24px (p-6)
- Tablet: 32px (p-8)
- Desktop: 40px (p-10)

**Border-radius** :
- Mobile: 12px (rounded-xl)
- Tablet+: 16px (rounded-2xl)

### Boutons CTA

```tsx
<Button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 text-base md:text-lg lg:text-xl">
  {/* Full width mobile, auto width desktop */}
</Button>
```

**Comportement** :
- Mobile: Largeur 100%, padding 32px horizontal
- Mobile Landscape+: Largeur auto, padding 48px horizontal

---

## 📱 Cas d'Usage Spécifiques

### Hero Section - Contraste Avant/Après

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
  {/* Carte AVANT */}
  <div className="p-6 md:p-8 lg:p-10">
    <h3 className="text-2xl md:text-3xl">Invisible</h3>
    <div className="text-5xl md:text-6xl lg:text-7xl">32</div>
  </div>
  
  {/* Carte APRÈS */}
  <div className="p-6 md:p-8 lg:p-10">
    <h3 className="text-2xl md:text-3xl">Premier sur Google</h3>
    <div className="text-5xl md:text-6xl lg:text-7xl">100</div>
  </div>
</div>
```

**Comportement** :
- Mobile: Cartes empilées verticalement
- Desktop: Côte à côte 50/50

### Liste de Features

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map((feature, index) => (
    <div key={index} className="p-6 md:p-8">
      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
        {/* Icon size progressif */}
      </div>
      <h3 className="text-xl md:text-2xl">{feature.title}</h3>
      <p className="text-sm md:text-base">{feature.description}</p>
    </div>
  ))}
</div>
```

### Footer - Multi Colonnes

```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
  {/* 2 colonnes sur mobile, 4 sur tablet+ */}
</div>
```

---

## 🎯 Best Practices V6.7

### ✅ À FAIRE

1. **Mobile-First** : Toujours coder pour mobile d'abord
   ```tsx
   className="text-base md:text-lg lg:text-xl"
   // ✅ Base = mobile, md/lg = enhancements
   ```

2. **Espacement Progressif** : Augmenter les espacements avec la taille d'écran
   ```tsx
   className="p-6 md:p-8 lg:p-10"
   className="gap-4 md:gap-6 lg:gap-8"
   ```

3. **Grilles Adaptatives** : Réduire les colonnes sur mobile
   ```tsx
   className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
   ```

4. **Texte Responsive** : Adapter la taille pour la lisibilité
   ```tsx
   className="text-4xl md:text-5xl lg:text-6xl"
   ```

5. **Images Responsive** : Utiliser object-fit et aspect-ratio
   ```tsx
   <img 
     className="w-full h-auto object-cover aspect-video md:aspect-[4/3]"
     alt="..."
   />
   ```

### ❌ À ÉVITER

1. **Desktop-First** : Ne pas coder d'abord pour desktop
   ```tsx
   className="lg:text-base md:text-sm text-xs"
   // ❌ Mauvais : commence par desktop
   ```

2. **Tailles Fixes** : Éviter width/height absolues
   ```tsx
   className="w-[800px]"
   // ❌ Déborde sur mobile
   ```

3. **Breakpoints Inutiles** : Ne pas sur-complexifier
   ```tsx
   className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
   // ❌ Trop granulaire
   ```

4. **Espacements Fixes** : Utiliser responsive spacing
   ```tsx
   className="mb-20"
   // ⚠️ Risqué : trop d'espace sur mobile
   className="mb-8 md:mb-12 lg:mb-20"
   // ✅ Mieux
   ```

---

## 📊 Checklist Responsive V6.7

Avant de valider une page/composant :

### Layout
- [ ] Container avec padding responsive (`px-4 sm:px-6 lg:px-8`)
- [ ] Sections avec padding vertical progressif (`py-12 md:py-16 lg:py-24`)
- [ ] Hero avec `pt-28 lg:pt-32` (respiration BATCH 21)
- [ ] Grilles adaptatives (1→2→3 colonnes)

### Typographie
- [ ] H1: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl`
- [ ] H2: `text-3xl md:text-4xl lg:text-5xl`
- [ ] H3: `text-2xl md:text-3xl lg:text-4xl`
- [ ] Body: `text-base md:text-lg` ou `text-sm md:text-base`
- [ ] Line-height adapté pour lisibilité

### Composants
- [ ] Cartes avec padding progressif (`p-6 md:p-8 lg:p-10`)
- [ ] Boutons full-width mobile, auto desktop
- [ ] Icons avec taille progressive
- [ ] Images avec aspect-ratio et object-fit
- [ ] Gap responsive dans les grilles

### Navigation
- [ ] Menu burger visible `< lg` (1024px)
- [ ] Navigation desktop visible `≥ lg`
- [ ] CTA caché sur très petit mobile (`hidden sm:flex`)
- [ ] Menu mobile panel avec animations

### Test
- [ ] Testé à 320px (iPhone SE)
- [ ] Testé à 375px (iPhone standard)
- [ ] Testé à 768px (iPad portrait)
- [ ] Testé à 1024px (iPad landscape)
- [ ] Testé à 1280px (Desktop standard)
- [ ] Scroll bloqué quand menu mobile ouvert
- [ ] Pas de débordement horizontal

---

## 🎨 Templates Responsive Réutilisables

### Template 1 : Section Standard

```tsx
<section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-12">
      {title}
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map((item, index) => (
        <div key={index} className="p-6 md:p-8 bg-white rounded-xl md:rounded-2xl">
          {/* Content */}
        </div>
      ))}
    </div>
  </div>
</section>
```

### Template 2 : Hero Section

```tsx
<section className="min-h-screen flex items-center pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-24 px-4">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 md:mb-8">
        {title}
      </h1>
      
      <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-12 max-w-4xl mx-auto">
        {description}
      </p>
      
      <Button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 text-base md:text-lg lg:text-xl">
        {ctaText}
      </Button>
    </div>
  </div>
</section>
```

### Template 3 : Grille Features

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  {features.map((feature, index) => (
    <div key={index} className="p-6 md:p-8 bg-white rounded-xl border border-gray-200">
      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#D1A65E]/10 rounded-xl flex items-center justify-center mb-4">
        <feature.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#D1A65E]" />
      </div>
      
      <h3 className="text-xl md:text-2xl mb-3">{feature.title}</h3>
      <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
    </div>
  ))}
</div>
```

---

## 🚀 Performance Responsive

### Images

```tsx
// ✅ Responsive images avec lazy loading
<img
  src={imageSrc}
  alt={alt}
  className="w-full h-auto object-cover"
  loading="lazy"
  decoding="async"
/>

// ✅ Avec aspect-ratio responsive
<div className="aspect-video md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-xl">
  <img 
    src={imageSrc}
    alt={alt}
    className="w-full h-full object-cover"
  />
</div>
```

### Animations

```tsx
// ✅ Désactiver animations complexes sur mobile si nécessaire
const shouldAnimate = useMediaQuery('(min-width: 768px)');

<motion.div
  initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
  animate={shouldAnimate && isVisible ? { opacity: 1, y: 0 } : {}}
>
  {/* Content */}
</motion.div>
```

---

## 📚 Ressources

| Fichier | Description |
|---------|-------------|
| `/doc/01_DESIGN_SYSTEM_V6.7.md` | Spécifications complètes V6.7 |
| `/doc/DESIGN_SYSTEM_V6.7_RESPONSIVE_GUIDE.md` | Ce guide (guide responsive détaillé) |
| `/DESIGN_SYSTEM_V6_7_2_CURSEURS.md` | Guide curseurs |
| `/styles/globals.css` | Typographie de base |

---

**Date de création** : 1er novembre 2025  
**Version** : V6.7 Responsive  
**Status** : ✅ Production Ready
