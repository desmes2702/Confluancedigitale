# Design System V6.7.2 - Confluence Digitale
## "App Moderne 2025"

**Version** : 6.7.2  
**Date** : Novembre 2024  
**Stack** : Astro + React Islands + Tailwind CSS v3 + TypeScript

---

## 📋 Table des matières

1. [Couleurs](#couleurs)
2. [Typographie](#typographie)
3. [Espacements](#espacements)
4. [Arrondis](#arrondis)
5. [Ombres & Effets](#ombres--effets)
6. [Gradients](#gradients)
7. [Animations](#animations)
8. [Icônes](#icônes)
9. [Breakpoints Responsive](#breakpoints-responsive)
10. [États & Interactions](#états--interactions)
11. [GDPR & Analytics](#gdpr--analytics)
12. [Configuration Tailwind](#configuration-tailwind)
13. [Dépendances](#dépendances)

---

## 🎨 Couleurs

### Palette Principale (Brand)

| Nom Sémantique | Code Hex | Usage | Tailwind Class |
|----------------|----------|-------|----------------|
| `premium` | `#D1A65E` | Or - Accent premium, badges exclusifs | `bg-[#D1A65E]` |
| `contractual` | `#A32E3A` | Rouge - Garanties contractuelles | `bg-[#A32E3A]` |
| `cta` | `#10b981` | Vert émeraude - Boutons d'action | `bg-[#10b981]` |
| `text-primary` | `#1A1A1A` | Noir mat - Texte principal | `text-[#1A1A1A]` |
| `background` | `#F9FAFB` | Gris très clair - Fond de page | `bg-[#F9FAFB]` |
| `white` | `#FFFFFF` | Blanc pur - Cartes, modales | `bg-white` |

### Palette Secondaire (Confluence)

| Nom Sémantique | Code Hex | Usage |
|----------------|----------|-------|
| `confluence-blue` | `#0059B2` | Bleu corporate - Liens, accents |
| `confluence-blue-dark` | `#003d7a` | Bleu foncé - Hover états |
| `confluence-gray` | `#4b5563` | Gris moyen - Texte secondaire |

### Palette Système (UI States)

| Nom Sémantique | Code CSS Variable | Code Hex/OKLCH | Usage |
|----------------|-------------------|----------------|-------|
| `primary` | `--primary` | `#0f172a` | Éléments principaux UI |
| `secondary` | `--secondary` | `oklch(0.95 0.0058 264.53)` | Éléments secondaires |
| `accent` | `--accent` | `#10b981` | Accents (identique à CTA) |
| `destructive` | `--destructive` | `#d4183d` | Actions destructives, erreurs |
| `muted` | `--muted` | `#ececf0` | Arrière-plans désactivés |
| `muted-foreground` | `--muted-foreground` | `#717182` | Texte désactivé |
| `border` | `--border` | `rgba(0, 0, 0, 0.1)` | Bordures standard |
| `input-background` | `--input-background` | `#f3f3f5` | Fond des champs de saisie |
| `switch-background` | `--switch-background` | `#cbced4` | Fond des switches/toggles |

### Palette Charts

| Variable | Code OKLCH | Usage |
|----------|-----------|-------|
| `--chart-1` | `oklch(0.646 0.222 41.116)` | Graphiques - Couleur 1 |
| `--chart-2` | `oklch(0.6 0.118 184.704)` | Graphiques - Couleur 2 |
| `--chart-3` | `oklch(0.398 0.07 227.392)` | Graphiques - Couleur 3 |
| `--chart-4` | `oklch(0.828 0.189 84.429)` | Graphiques - Couleur 4 |
| `--chart-5` | `oklch(0.769 0.188 70.08)` | Graphiques - Couleur 5 |

---

## ✍️ Typographie

### Familles de Police

**Font Stack Principal** :

```css
/* Titres (h1, h2, h3) */
font-family: 'Playfair Display', Georgia, serif;

/* Corps de texte (body, p, button, input) */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Import Google Fonts** :
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
```

### Tailles de Police (Responsive avec clamp)

| Élément | Taille Min | Taille Fluide | Taille Max | Line Height | Letter Spacing | Font Weight |
|---------|-----------|---------------|-----------|-------------|----------------|-------------|
| **h1** | `2.25rem` (36px) | `5vw` | `4rem` (64px) | `1.1` | `-0.02em` | `400` Regular |
| **h2** | `1.875rem` (30px) | `4vw` | `3rem` (48px) | `1.2` | `-0.01em` | `400` Regular |
| **h3** | `1.5rem` (24px) | `3vw` | `2.25rem` (36px) | `1.3` | `0` | `400` Regular |
| **h4** | `1.25rem` (20px) | `2.5vw` | `1.875rem` (30px) | `1.4` | `0` | `400` Regular |
| **p** | `1rem` (16px) | `1.5vw` | `1.125rem` (18px) | `1.6` | `0` | `400` Regular |
| **label** | `1rem` (16px) | - | `1rem` (16px) | `1.5` | `0` | `500` Medium |
| **button** | `1rem` (16px) | - | `1rem` (16px) | `1.5` | `0` | `500` Medium |
| **input** | `1rem` (16px) | - | `1rem` (16px) | `1.5` | `0` | `400` Regular |

### Graisses (Font Weights)

**Inter** (Corps de texte) :
- `300` Light
- `400` Regular (par défaut)
- `500` Medium (labels, boutons)
- `600` Semi-Bold
- `700` Bold

**Playfair Display** (Titres) :
- `400` Regular (par défaut) ⭐ **OBLIGATOIRE**
- `500` Medium
- `600` Semi-Bold
- `700` Bold

⚠️ **RÈGLE ABSOLUE** : **JAMAIS** utiliser `font-bold` sur Playfair Display (h1, h2, h3). Toujours `font-normal` (400).

### Exemple CSS

```css
/* Titre principal */
h1 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2.25rem, 5vw, 4rem);
  font-weight: 400; /* OBLIGATOIRE */
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Paragraphe */
p {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  font-weight: 400;
  line-height: 1.6;
}
```

---

## 📏 Espacements

### Padding Standard (Design System)

| Usage | Valeur | Tailwind Class |
|-------|--------|----------------|
| Hero Section (top) | `pt-28 lg:pt-32` | Mobile: 7rem (112px), Desktop: 8rem (128px) |
| Section padding (vertical) | `py-20` | 5rem (80px) |
| Section padding (large) | `py-24` | 6rem (96px) |
| Container padding (horizontal) | `px-4` | 1rem (16px) |
| Card padding (small) | `p-4` | 1rem (16px) |
| Card padding (medium) | `p-6` | 1.5rem (24px) |
| Card padding (large) | `p-8` | 2rem (32px) |
| Button padding (small) | `px-4 py-2` | 1rem × 0.5rem |
| Button padding (medium) | `px-6 py-3` | 1.5rem × 0.75rem |
| Button padding (large) | `px-8 py-4` | 2rem × 1rem |

### Gap/Spacing Entre Éléments

| Usage | Valeur | Tailwind Class |
|-------|--------|----------------|
| Formulaires (vertical) | `space-y-6` | 1.5rem (24px) ⭐ **OBLIGATOIRE** |
| Grilles (colonnes) | `gap-8` | 2rem (32px) |
| Grilles (colonnes large) | `gap-12` | 3rem (48px) |
| Flex items | `gap-4` | 1rem (16px) |
| Flex items (small) | `gap-2` | 0.5rem (8px) |

---

## 🔄 Arrondis (Border Radius)

### Variables CSS

```css
--radius: 0.625rem; /* 10px - Base */
--radius-sm: calc(var(--radius) - 4px); /* 6px */
--radius-md: calc(var(--radius) - 2px); /* 8px */
--radius-lg: var(--radius); /* 10px */
--radius-xl: calc(var(--radius) + 4px); /* 14px */
```

### Valeurs Tailwind

| Élément | Arrondi | Tailwind Class |
|---------|---------|----------------|
| Boutons | `10px` | `rounded-lg` |
| Cartes | `12px` | `rounded-xl` |
| Inputs | `8px` | `rounded-md` |
| Badges | `9999px` | `rounded-full` |
| Modales/Dialogs | `12px` | `rounded-xl` |

---

## ✨ Ombres & Effets

### Ombres Standards (Tailwind Classes)

⚠️ **IMPORTANT** : Utiliser les classes Tailwind custom définies dans `tailwind.config.js`.

| Nom | Classe Tailwind | Valeur CSS | Usage |
|-----|----------------|-----------|-------|
| **Elevated** | `shadow-elevated` | `0 4px 20px rgba(0, 0, 0, 0.08)` | Cartes en élévation |
| **Hover** | `shadow-hover` | `0 8px 30px rgba(0, 0, 0, 0.12)` | Cartes au hover |
| **Premium** | `shadow-premium` | `0 0 0 3px rgba(209, 166, 94, 0.3)` | Focus ring premium (inputs) |

**Exemple usage** :
```tsx
// Card elevated
<div className="bg-white rounded-xl shadow-elevated p-6">

// Card avec hover
<div className="shadow-elevated hover:shadow-hover transition-shadow duration-300">

// Input avec focus premium
<input className="focus:shadow-premium focus:outline-none" />
```

### Transitions

| Propriété | Durée | Timing Function | Tailwind Class |
|-----------|-------|-----------------|----------------|
| Standard | `300ms` | `ease-in-out` | `transition-all duration-300` |
| Rapide | `150ms` | `ease-in-out` | `transition-all duration-150` |
| Lente | `500ms` | `ease-in-out` | `transition-all duration-500` |
| Shadow only | `300ms` | `ease-in-out` | `transition-shadow duration-300` |

### Effets Hover

#### Bouton Primary
```tsx
<button className="bg-[#D1A65E] hover:bg-[#B8934F] active:bg-[#9F7F43] transition-colors duration-300">
  Cliquer ici
</button>
```

#### Carte avec Hover
```tsx
<div className="shadow-elevated hover:shadow-hover hover:scale-[1.02] transition-all duration-300 cursor-pointer">
  Contenu carte
</div>
```

---

## 🎨 Gradients

### Gradients Principaux

| Nom | Classes Tailwind | Usage | Exemple |
|-----|------------------|-------|---------|
| **Hero Dark** | `bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D]` | Hero sections, headers sombres | Landing Hero |
| **Premium Gold** | `bg-gradient-to-br from-[#D1A65E] to-[#A32E3A]` | CTA premium, sections garanties | Stats section |
| **Success Green** | `bg-gradient-to-r from-[#10b981] to-[#059669]` | Boutons de succès, badges | Validation forms |
| **Subtle Gray** | `bg-gradient-to-b from-[#F9FAFB] to-white` | Sections alternées | Background sections |

### Overlays & Blur

```css
/* Background decoration avec blur */
.decoration-blur {
  background: radial-gradient(circle, rgba(209, 166, 94, 0.1) 0%, transparent 70%);
  filter: blur(100px);
}

/* Overlay sombre sur images */
.image-overlay {
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%);
}
```

---

## 🎞️ Animations

### Motion/React (Framer Motion)

**Package** : `motion/react` (anciennement Framer Motion)

**Import** :
```tsx
import { motion } from 'motion/react';
```

### Animations Prédéfinies

#### Fade In

```tsx
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeIn}
>
  Contenu
</motion.div>
```

#### Slide Up

```tsx
const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};
```

#### Stagger Children

```tsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div variants={container} initial="hidden" animate="visible">
  <motion.div variants={item}>Item 1</motion.div>
  <motion.div variants={item}>Item 2</motion.div>
  <motion.div variants={item}>Item 3</motion.div>
</motion.div>
```

#### Infinite Loop

```tsx
<motion.div
  animate={{
    scale: [1, 1.2, 1],
    x: [-20, 20, -20]
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut'
  }}
>
  Blob animé
</motion.div>
```

### Animations CSS Tailwind

#### Spin (Loading)

```tsx
<div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
```

#### Pulse (Attention)

```tsx
<div className="animate-pulse bg-emerald-500 w-3 h-3 rounded-full" />
```

#### Bounce (Scroll indicator)

```tsx
<div className="animate-bounce">
  <ArrowDown />
</div>
```

---

## 🖼️ Icônes

### Stratégie Icônes

⚠️ **RÈGLE ABSOLUE** : Utiliser **Inline SVG** au lieu de bibliothèques d'icônes.

**Raison** : Zero dépendance externe, contrôle total du style, optimisation bundle.

### Template Icône Standard

```tsx
const IconName = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* SVG path here */}
  </svg>
);
```

### Icônes Fréquentes

#### CheckCircle

```tsx
const CheckCircle = ({ className = "w-6 h-6" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);
```

#### ArrowRight

```tsx
const ArrowRight = ({ className = "w-5 h-5" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);
```

#### Zap (Performance)

```tsx
const Zap = ({ className = "w-6 h-6" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
```

#### Mail

```tsx
const Mail = ({ className = "w-6 h-6" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
```

### Tailles Icônes

| Taille | Tailwind Class | Usage |
|--------|----------------|-------|
| Small | `w-4 h-4` | Inline text icons |
| Medium | `w-5 h-5` | Boutons, badges |
| Large | `w-6 h-6` | Titres, cards |
| XLarge | `w-8 h-8` | Features, benefits |
| Huge | `w-12 h-12` | Hero, illustrations |

---

## 📱 Breakpoints Responsive

Tailwind CSS v3 - Breakpoints par défaut :

| Breakpoint | Min Width | Usage | Prefix |
|------------|-----------|-------|--------|
| Mobile | `< 640px` | Par défaut | - |
| Small (sm) | `640px` | Petits tablets | `sm:` |
| Medium (md) | `768px` | Tablets | `md:` |
| Large (lg) | `1024px` | Desktops | `lg:` |
| XLarge (xl) | `1280px` | Grands écrans | `xl:` |
| 2XLarge (2xl) | `1536px` | Très grands écrans | `2xl:` |

### Exemples d'utilisation

```tsx
// Hero padding responsive
<section className="pt-28 lg:pt-32">

// Grid responsive
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// Typography responsive
<h1 className="text-4xl md:text-5xl lg:text-6xl">
```

---

## 🎯 États & Interactions

### Curseurs Sémantiques

```css
/* Cliquable */
a[href], button, label, [role="button"] {
  cursor: pointer;
}

/* Désactivé */
button:disabled, [aria-disabled="true"] {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Texte sélectionnable */
p, li, textarea, input[type="text"] {
  cursor: text;
}

/* Chargement */
[aria-busy="true"] {
  cursor: wait;
}
```

### États des Boutons

| État | CSS | Comportement |
|------|-----|--------------|
| Normal | `opacity: 1` | État par défaut |
| Hover | `brightness(0.9)` | Assombrissement léger |
| Active | `scale(0.98)` | Réduction légère |
| Disabled | `opacity: 0.5` + `cursor: not-allowed` | Non cliquable |
| Loading | `cursor: wait` + spinner | Animation de chargement |

### Focus Ring

```css
/* Tous les éléments interactifs */
focus:outline-none 
focus:ring-2 
focus:ring-offset-2 
focus:ring-[#D1A65E]

/* Ou avec shadow premium */
focus:shadow-premium
focus:outline-none
```

---

## 🛡️ GDPR & Analytics

### Consentement RGPD

**Composants** :
- `GDPRBanner` : Bannière cookies (apparaît au 1er chargement)
- `GDPRSettings` : Modale paramètres (analytics, performance)
- `GDPRBadge` : Badge "Conforme RGPD" (footer)
- `GDPRStatus` : Indicateur statut (footer)

**Hook** : `useGDPRConsent`

```tsx
import { useGDPRConsent } from '@/hooks/useGDPRConsent';

function MyComponent() {
  const { hasAnalytics, hasPerformance } = useGDPRConsent();
  
  if (hasAnalytics) {
    // Google Analytics 4 actif
  }
  
  if (hasPerformance) {
    // Hotjar actif
  }
}
```

### Analytics Intégrations

#### Google Analytics 4 (GA4)

**Initialisation** (si consent donné) :

```tsx
import { initializeGA4 } from '@/utils/gdprConsent';

initializeGA4('G-XXXXXXXXXX');
```

**Configuration** :
- `anonymize_ip: true` (RGPD)
- `cookie_flags: 'SameSite=None;Secure'`

#### Hotjar

**Initialisation** (si consent donné) :

```tsx
import { initializeHotjar } from '@/utils/gdprConsent';

initializeHotjar(1234567, 6);
```

### localStorage

**Clé** : `confluence-gdpr-consent`

**Structure** :
```json
{
  "timestamp": "2024-11-20T10:00:00.000Z",
  "analytics": true,
  "performance": false
}
```

---

## ⚙️ Configuration Tailwind

### tailwind.config.js - Theme Extend

Ajouter dans votre `tailwind.config.js` :

```js
module.exports = {
  theme: {
    extend: {
      // Ombres custom
      boxShadow: {
        'elevated': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'premium': '0 0 0 3px rgba(209, 166, 94, 0.3)',
      },
      
      // Couleurs custom
      colors: {
        'confluence': {
          'blue': '#0059B2',
          'blue-dark': '#003d7a',
          'gray': '#4b5563',
        },
        'premium': '#D1A65E',
        'contractual': '#A32E3A',
      },
      
      // Border radius custom
      borderRadius: {
        'lg': '10px',
        'xl': '12px',
      },
      
      // Fonts
      fontFamily: {
        'playfair': ['Playfair Display', 'Georgia', 'serif'],
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

---

## 📦 Dépendances

### package.json - Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "motion": "^10.16.0",
    "react-hook-form": "^7.55.0",
    "sonner": "^2.0.3"
  },
  "devDependencies": {
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.0"
  }
}
```

### Versions Recommandées

| Package | Version | Raison |
|---------|---------|--------|
| `react-hook-form` | `7.55.0` | Validation formulaires stable |
| `sonner` | `2.0.3` | Toast notifications performant |
| `motion` | `10.16+` | Animations fluides (ex-Framer Motion) |
| `tailwindcss` | `3.4+` | CSS utility-first |

---

## 🎯 Exemples de Code

### Bouton Primary avec Loading

```tsx
import { DSButton } from '@/components/ui/DSButton';

<DSButton 
  variant="primary" 
  size="lg" 
  isLoading={isSubmitting}
  onClick={handleSubmit}
>
  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
</DSButton>
```

### Card Elevated avec Hover

```tsx
import { DSCard } from '@/components/ui/DSCard';

<DSCard className="shadow-elevated hover:shadow-hover transition-shadow duration-300">
  <h3>Titre de la carte</h3>
  <p>Description...</p>
</DSCard>
```

### Input avec Label et Focus Premium

```tsx
import { DSInput } from '@/components/ui/DSInput';
import { DSLabel } from '@/components/ui/DSLabel';

<div className="space-y-2">
  <DSLabel htmlFor="email">Votre email</DSLabel>
  <DSInput
    id="email"
    type="email"
    placeholder="exemple@email.com"
    className="focus:shadow-premium"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
</div>
```

### Section Header

```tsx
import { DSSectionHeader } from '@/components/ui/DSSectionHeader';

<DSSectionHeader
  title="Notre Méthode"
  subtitle="Approche éprouvée"
  description="Nous suivons un processus rigoureux en 6 étapes pour garantir la réussite de votre projet digital."
  align="center"
  accent={true}
/>
```

### Formulaire Complet

```tsx
import { useForm } from 'react-hook-form';
import { DSInput } from '@/components/ui/DSInput';
import { DSButton } from '@/components/ui/DSButton';
import { toast } from 'sonner';

function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  
  const onSubmit = async (data) => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      
      toast.success('Message envoyé !');
    } catch (error) {
      toast.error('Erreur lors de l\'envoi');
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <DSInput
          {...register('email', { 
            required: 'Email requis',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email invalide'
            }
          })}
          placeholder="Votre email"
          type="email"
          className="focus:shadow-premium"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      
      <DSButton type="submit" variant="primary" size="lg" isLoading={isSubmitting}>
        Envoyer
      </DSButton>
    </form>
  );
}
```

---

## 📦 Composants DS Disponibles

Liste des composants du Design System (dossier `/src/components/ui/`) :

- `DSButton` (4 variants : primary, secondary, outline, ghost)
- `DSCard` (3 variants : default, bordered, elevated)
- `DSBadge` (3 variants : default, success, warning)
- `DSInput`, `DSTextarea`, `DSSelect`
- `DSCheckbox`, `DSSwitch`
- `DSDialog`, `DSDrawer`
- `DSAccordion`, `DSTabs`, `DSAlert`
- `DSPanel`, `DSSectionHeader`, `DSLabel`

---

## ✅ Règles Absolues du Design System

1. ❌ **JAMAIS** `font-bold` sur Playfair Display (h1, h2, h3)
2. ✅ **TOUJOURS** `font-normal` (400) pour les titres
3. ✅ Hero padding : `pt-28 lg:pt-32` (obligatoire)
4. ✅ Formulaires : `space-y-6` (obligatoire)
5. ✅ Ombres : Classes Tailwind (`shadow-elevated`, `shadow-hover`, `shadow-premium`)
6. ✅ CTA principal : `bg-emerald-500` (#10b981)
7. ✅ Transitions : `duration-300` (standard)
8. ✅ Border radius : `rounded-lg` (boutons), `rounded-xl` (cartes)
9. ✅ Icônes : Inline SVG uniquement (pas de lib externe)
10. ✅ Imports : Sans numéro de version (géré dans package.json)

---

**Dernière mise à jour** : Novembre 2024  
**Auteur** : Confluence Digitale  
**Version** : 6.7.2 V2 - Optimisé VS Code Local  
**Stack** : Astro + React Islands + Tailwind v3 + TypeScript
