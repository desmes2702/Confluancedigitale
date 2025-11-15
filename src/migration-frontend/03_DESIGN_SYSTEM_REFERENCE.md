# 🎨 DESIGN SYSTEM V6.7.2 - RÉFÉRENCE COMPLÈTE

**Version** : V6.7.2 "App Moderne 2025"  
**Batch** : BATCH 48 V10  
**Status** : ✅ Production Ready

---

## 🎯 PALETTE DE COULEURS

### Couleurs Principales

| Couleur | HEX | Tailwind | Usage |
|---------|-----|----------|-------|
| **Gris Clair Éclatant** | `#F9FAFB` | `bg-gray-50` | Background principal |
| **Noir Mat** | `#1A1A1A` | `text-slate-900` | Texte + Footer |
| **Or/Cuivre** | `#D1A65E` | Custom | Accents premium (Antoine) |
| **Vert** | `#10b981` | `bg-emerald-500` | CTAs (Pascal) |
| **Rouge Bordeaux** | `#A32E3A` | Custom | Contractuel (Laly) |
| **Blanc** | `#FFFFFF` | `bg-white` | Cartes + Sections |

### Utilisation des Couleurs

```tsx
// Background principal
<body className="bg-gray-50">

// Texte principal
<p className="text-slate-900">

// CTA Principal (Vert)
<button className="bg-emerald-500 hover:bg-emerald-600 text-white">
  Demander un Audit Gratuit
</button>

// Accent Premium (Or/Cuivre) - Antoine
<span className="text-[#D1A65E]">100/100</span>

// Accent Contractuel (Rouge Bordeaux) - Laly
<span className="text-[#A32E3A]">Engagement 24 mois</span>
```

---

## 📝 TYPOGRAPHIE

### Polices

| Élément | Police | Poids | Taille Mobile | Taille Desktop |
|---------|--------|-------|---------------|----------------|
| **H1** | Playfair Display | Regular (400) | 2.5rem (40px) | 3.75rem (60px) |
| **H2** | Playfair Display | Regular (400) | 2rem (32px) | 3rem (48px) |
| **H3** | Playfair Display | Regular (400) | 1.5rem (24px) | 2rem (32px) |
| **Body** | Inter | Regular (400) | 1rem (16px) | 1.125rem (18px) |
| **Small** | Inter | Regular (400) | 0.875rem (14px) | 0.875rem (14px) |

### 🚨 RÈGLE CRITIQUE : Playfair JAMAIS Bold

```tsx
// ❌ INTERDIT
<h1 className="font-playfair font-bold">

// ✅ CORRECT
<h1 className="font-playfair">Mon Titre</h1>
```

**Explication** : Playfair Display Regular (400) est déjà suffisamment élégant. Le bold casse l'harmonie.

### Utilisation Typographie

```tsx
// H1 - Landing Page
<h1 className="font-playfair text-4xl lg:text-6xl">
  Site Web Premium pour TPE/PME
</h1>

// H2 - Sections
<h2 className="font-playfair text-3xl lg:text-5xl">
  Notre Offre
</h2>

// H3 - Sous-sections
<h3 className="font-playfair text-2xl lg:text-3xl">
  Détails du Pack
</h3>

// Body
<p className="text-base lg:text-lg leading-relaxed">
  Texte du paragraphe
</p>

// Small (footer, mentions)
<p className="text-sm">
  © 2025 Confluence Digitale
</p>
```

---

## 📐 ESPACEMENT & LAYOUT

### Padding Hero (Règle BATCH 21)

```tsx
// 🚨 RÈGLE ABSOLUE : pt-28 lg:pt-32
<section className="pt-28 lg:pt-32">
  <h1>Mon Titre Hero</h1>
</section>
```

**Pourquoi ?**
- `pt-28` (112px mobile) : Compense le header fixe (80px) + respiration (32px)
- `lg:pt-32` (128px desktop) : Compense header + respiration optimale

### Espacement Sections

```tsx
// Sections principales
<section className="py-16 lg:py-24">
  {/* Contenu */}
</section>

// Sections secondaires
<section className="py-12 lg:py-16">
  {/* Contenu */}
</section>

// Padding horizontal (responsive)
<div className="px-4 sm:px-6 lg:px-8">
  {/* Mobile : 16px, Tablette : 24px, Desktop : 32px */}
</div>

// Conteneur max-width
<div className="max-w-7xl mx-auto">
  {/* Max 1280px, centré */}
</div>
```

### Espacement Formulaires (BATCH 20B)

```tsx
// 🚨 RÈGLE : space-y-6 entre champs
<form className="space-y-6">
  <div>
    <label>Nom</label>
    <input />
  </div>
  
  <div>
    <label>Email</label>
    <input />
  </div>
  
  <button>Envoyer</button>
</form>
```

**Pourquoi `space-y-6` ?** : 24px d'espacement = lisibilité optimale sur mobile.

---

## 🎭 OMBRES

### 🚨 RÈGLE CRITIQUE : Jamais de Classes Tailwind

```tsx
// ❌ INTERDIT (classes shadow-*)
<div className="shadow-lg shadow-md shadow-sm">

// ✅ CORRECT (inline style)
<div style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}>
```

### Ombres Prédéfinies

```typescript
// Carte (légère)
const SHADOW_CARD = {
  boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)'
};

// Badge (moyenne)
const SHADOW_BADGE = {
  boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.15)'
};

// CTA (forte - hover)
const SHADOW_CTA_HOVER = {
  boxShadow: '0 20px 60px -10px rgba(16, 185, 129, 0.35)'
};

// Modal/Dialog (très forte)
const SHADOW_MODAL = {
  boxShadow: '0 30px 80px -10px rgba(0, 0, 0, 0.25)'
};
```

### Utilisation

```tsx
// Carte de service
<div 
  className="bg-white rounded-lg p-6"
  style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
>
  <h3>Service</h3>
</div>

// Badge Hero
<span 
  className="inline-block px-4 py-2 bg-white rounded-full"
  style={{ boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.15)' }}
>
  Nouveau
</span>

// CTA avec hover
<button 
  className="bg-emerald-500 text-white px-6 py-3 rounded-lg transition-all"
  style={{ boxShadow: '0 10px 30px -5px rgba(16, 185, 129, 0.25)' }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = '0 20px 60px -10px rgba(16, 185, 129, 0.35)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(16, 185, 129, 0.25)';
  }}
>
  CTA
</button>
```

---

## 📱 RESPONSIVE (MOBILE-FIRST)

### Breakpoints Tailwind

| Prefix | Min Width | Device |
|--------|-----------|--------|
| (défaut) | 0px | Mobile (iPhone SE, etc.) |
| `sm:` | 640px | Tablette portrait |
| `md:` | 768px | Tablette paysage |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Grand écran |
| `2xl:` | 1536px | Très grand écran |

### Règles Responsive

```tsx
// 1. Padding Horizontal (Standard)
<div className="px-4 sm:px-6 lg:px-8">
  {/* Mobile : 16px, Tablette : 24px, Desktop : 32px */}
</div>

// 2. Titres
<h1 className="
  text-4xl      /* Mobile : 36px */
  lg:text-6xl   /* Desktop : 60px */
">

// 3. Grilles
<div className="
  grid 
  grid-cols-1       /* Mobile : 1 colonne */
  md:grid-cols-2    /* Tablette : 2 colonnes */
  lg:grid-cols-3    /* Desktop : 3 colonnes */
  gap-6             /* 24px gap */
">

// 4. Flex Direction
<div className="
  flex 
  flex-col          /* Mobile : vertical */
  lg:flex-row       /* Desktop : horizontal */
  gap-8
">

// 5. Images
<img 
  className="
    w-full          /* Mobile : pleine largeur */
    lg:w-1/2        /* Desktop : 50% */
  "
  src="..."
  alt="..."
/>
```

### Template Responsive Complet

```tsx
export default function ResponsiveSection() {
  return (
    <section className="
      py-16 lg:py-24          /* Padding vertical */
      px-4 sm:px-6 lg:px-8    /* Padding horizontal */
    ">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <h2 className="
          font-playfair 
          text-3xl lg:text-5xl 
          mb-8 lg:mb-12
        ">
          Section Titre
        </h2>

        {/* Grille */}
        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-6 lg:gap-8
        ">
          {/* Items */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl lg:text-2xl mb-4">Item</h3>
            <p className="text-base lg:text-lg">Description</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 🎨 COMPOSANTS UI

### Boutons

```tsx
// CTA Principal (Vert)
<button className="
  px-6 py-3 
  bg-emerald-500 hover:bg-emerald-600 
  text-white font-semibold 
  rounded-lg 
  transition-all duration-300
">
  Demander un Audit Gratuit
</button>

// Bouton Secondaire (Outline)
<button className="
  px-6 py-3 
  border-2 border-slate-900 
  text-slate-900 hover:bg-slate-900 hover:text-white 
  font-semibold 
  rounded-lg 
  transition-all duration-300
">
  En Savoir Plus
</button>

// Bouton Tertiaire (Texte)
<button className="
  text-emerald-500 hover:text-emerald-600 
  font-semibold 
  underline underline-offset-4
">
  Voir les Détails →
</button>
```

### Cartes

```tsx
// Carte Standard
<div 
  className="bg-white p-6 lg:p-8 rounded-lg"
  style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
>
  <h3 className="font-playfair text-2xl mb-4">Titre Carte</h3>
  <p className="text-base text-gray-600 mb-6">Description</p>
  <button className="text-emerald-500 font-semibold">
    En savoir plus →
  </button>
</div>

// Carte avec Icône
<div 
  className="bg-white p-6 rounded-lg text-center"
  style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
>
  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
    {/* Icône */}
  </div>
  <h3 className="font-semibold text-xl mb-2">Service</h3>
  <p className="text-gray-600 text-sm">Description courte</p>
</div>
```

### Inputs (Formulaires)

```tsx
// Input Standard
<div className="space-y-2">
  <label className="block text-sm font-semibold text-slate-900">
    Email *
  </label>
  <input 
    type="email"
    className="
      w-full px-4 py-3 
      border-2 border-gray-200 
      focus:border-emerald-500 focus:outline-none 
      rounded-lg 
      transition-colors
    "
    placeholder="votre@email.com"
  />
</div>

// Input avec Erreur
<div className="space-y-2">
  <label className="block text-sm font-semibold text-slate-900">
    Email *
  </label>
  <input 
    type="email"
    className="
      w-full px-4 py-3 
      border-2 border-red-500 
      rounded-lg
    "
  />
  <p className="text-sm text-red-500">Email invalide</p>
</div>

// Textarea
<textarea 
  rows={4}
  className="
    w-full px-4 py-3 
    border-2 border-gray-200 
    focus:border-emerald-500 focus:outline-none 
    rounded-lg 
    transition-colors
    resize-none
  "
  placeholder="Votre message..."
/>
```

---

## 🏷️ TRIADE PROFESSIONNELLE (BATCH 48 V10)

### Concept

3 experts qui incarnent les valeurs de Confluence Digitale :

| Profil | Rôle | Couleur | Périmètre |
|--------|------|---------|-----------|
| **Antoine** | Architecte UX/UI | Or `#D1A65E` | Performance 100/100, Design |
| **Pascal** | Conseiller Numérique | Vert `#10b981` | Stratégie, ROI, Zéro Jargon |
| **Laly** | Enseignante | Rouge `#A32E3A` | Formation Strapi, Autonomie |

### Utilisation

```tsx
// Badge Expert
<div className="flex items-center gap-3">
  <div className="w-12 h-12 rounded-full bg-[#D1A65E] flex items-center justify-center">
    <span className="text-white font-semibold">A</span>
  </div>
  <div>
    <p className="font-semibold text-slate-900">Antoine</p>
    <p className="text-sm text-gray-600">Architecte UX/UI</p>
  </div>
</div>

// Citation Expert
<blockquote className="border-l-4 border-[#10b981] pl-6 py-4">
  <p className="text-lg italic mb-2">
    "Un site web doit générer du business, pas des questions."
  </p>
  <footer className="text-sm text-gray-600">
    — Pascal, Conseiller Numérique
  </footer>
</blockquote>
```

---

## 🎯 HEADER V6.7

### Structure

```tsx
// Header Fixe avec Glassmorphism
<header className="
  fixed top-0 left-0 right-0 
  z-50 
  bg-white/80 backdrop-blur-md 
  border-b border-gray-200
">
  <nav className="
    max-w-7xl mx-auto 
    px-4 sm:px-6 lg:px-8 
    h-20 
    flex items-center justify-between
  ">
    {/* Logo */}
    <Logo />
    
    {/* Menu Desktop */}
    <ul className="hidden lg:flex gap-8">
      <li><Link>Offre</Link></li>
      <li><Link>Méthode</Link></li>
      <li><Link>Équipe</Link></li>
    </ul>
    
    {/* CTA */}
    <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg">
      Audit Gratuit
    </button>
    
    {/* Menu Mobile (Burger) */}
    <MobileMenu />
  </nav>
</header>
```

### Logo

```tsx
// Logo toujours BLANC sur fond noir (Footer)
// Logo toujours NOIR sur fond blanc (Header)
<svg className="text-slate-900"> {/* Header */}
<svg className="text-white"> {/* Footer */}
```

---

## 🦶 FOOTER V6.2

### Structure

```tsx
<footer className="bg-[#1A1A1A] text-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {/* Colonne 1 : Logo + Slogan */}
      <div>
        <Logo className="text-white mb-4" />
        <p className="text-gray-400">
          Sites Web Premium pour TPE/PME
        </p>
      </div>
      
      {/* Colonne 2 : Navigation */}
      <div>
        <h4 className="font-semibold mb-4">Navigation</h4>
        <ul className="space-y-2">
          <li><Link>Offre</Link></li>
          <li><Link>Méthode</Link></li>
        </ul>
      </div>
      
      {/* Colonne 3 : Légal */}
      <div>
        <h4 className="font-semibold mb-4">Légal</h4>
        <ul className="space-y-2">
          <li><Link>CGV</Link></li>
          <li><Link>Mentions Légales</Link></li>
        </ul>
      </div>
      
      {/* Colonne 4 : Contact */}
      <div>
        <h4 className="font-semibold mb-4">Contact</h4>
        <p className="text-gray-400">06 XX XX XX XX</p>
      </div>
    </div>
    
    {/* Copyright */}
    <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
      © 2025 Confluence Digitale - Tous droits réservés
    </div>
  </div>
</footer>
```

---

## ✅ CHECKLIST DESIGN SYSTEM

### Avant de Valider un Composant

- [ ] **Couleurs** : Palette respectée (pas de couleurs custom)
- [ ] **Typographie** : Playfair Regular (jamais bold)
- [ ] **Hero Padding** : `pt-28 lg:pt-32`
- [ ] **Ombres** : Inline `style={{ boxShadow }}`
- [ ] **Responsive** : Mobile-first (`px-4 sm:px-6 lg:px-8`)
- [ ] **Formulaires** : `space-y-6` entre champs
- [ ] **Logo Footer** : Toujours blanc `text-white`
- [ ] **CTA** : Vert `bg-emerald-500`
- [ ] **Espacement** : Sections `py-16 lg:py-24`
- [ ] **Conteneur** : `max-w-7xl mx-auto`

---

**🎨 Design System V6.7.2 Maîtrisé ! 💪**

**Prochaine lecture** : `04_CONVENTIONS_CODE.md`
