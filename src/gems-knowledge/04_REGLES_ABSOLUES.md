# 🚨 RÈGLES ABSOLUES - À NE JAMAIS VIOLER

**Statut** : CRITIQUE - Zéro tolérance  
**Usage** : À vérifier dans CHAQUE prompt

---

## ❌ LES 10 INTERDICTIONS ABSOLUES

### 1. ❌ Playfair Bold

```tsx
// ❌ INTERDIT - JAMAIS JAMAIS JAMAIS
<h1 className="font-playfair font-bold">

// ✅ CORRECT - TOUJOURS
<h1 className="font-playfair">
```

**Pourquoi** : Identité visuelle unique, élégance premium  
**Sanction** : Violation = rejet complet du code

---

### 2. ❌ Classes Shadow Tailwind

```tsx
// ❌ INTERDIT
<div className="shadow-lg">
<div className="shadow-xl">
<div className="shadow-2xl">

// ✅ CORRECT
<div style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}>
```

**Pourquoi** : Ombres custom spécifiques au Design System  
**Sanction** : Violation = rejet complet du code

---

### 3. ❌ Hero Padding Incorrect

```tsx
// ❌ INTERDIT
<section className="pt-20 lg:pt-24">
<section className="pt-24 lg:pt-28">

// ✅ CORRECT - BATCH 21
<section className="pt-28 lg:pt-32">
```

**Pourquoi** : Compensation hauteur header sticky (112px desktop)  
**Sanction** : Décalage visuel, contenu caché sous header

---

### 4. ❌ Formulaire Spacing Incorrect

```tsx
// ❌ INTERDIT
<form className="space-y-4">
<form className="space-y-8">

// ✅ CORRECT - BATCH 20B
<form className="space-y-6">
```

**Pourquoi** : Lisibilité et aération optimales  
**Sanction** : Formulaire trop serré ou trop espacé

---

### 5. ❌ Couleurs Hors Palette

```tsx
// ❌ INTERDIT
<div className="bg-blue-500">
<div className="bg-purple-600">
<div className="text-red-500">

// ✅ CORRECT
<div className="bg-emerald-500">     // CTA
<div className="bg-[#D1A65E]">       // Premium Antoine
<div className="bg-[#A32E3A]">       // Important Laly
```

**Pourquoi** : Cohérence identité visuelle stricte  
**Sanction** : Perte identité de marque

---

### 6. ❌ Container Sans Max-Width

```tsx
// ❌ INTERDIT
<div className="mx-auto px-4">

// ✅ CORRECT
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

**Pourquoi** : Contenu lisible sur grands écrans  
**Sanction** : Lignes de texte trop longues (>80 caractères)

---

### 7. ❌ TypeScript Any

```tsx
// ❌ INTERDIT
const data: any = fetchData();
function handleClick(event: any) { }

// ✅ CORRECT
const data: BlogPost[] = fetchData();
function handleClick(event: React.MouseEvent<HTMLButtonElement>) { }
```

**Pourquoi** : Type safety, prévention bugs  
**Sanction** : Perte bénéfices TypeScript

---

### 8. ❌ Hydratation Incorrecte

```tsx
// ❌ INTERDIT (Header pas immédiat)
<Header client:visible />

// ❌ INTERDIT (Footer trop prioritaire)
<Footer client:load />

// ✅ CORRECT
<Header client:load />      // Prioritaire (menu mobile)
<Footer client:visible />   // Lazy (non critique)
```

**Pourquoi** : Performance optimale  
**Sanction** : Header non-interactif au chargement

---

### 9. ❌ Responsive Sans Mobile-First

```tsx
// ❌ INTERDIT
<div className="px-8 sm:px-4">        // Desktop first
<h1 className="text-6xl lg:text-4xl"> // Desktop first

// ✅ CORRECT
<div className="px-4 sm:px-6 lg:px-8">     // Mobile first
<h1 className="text-4xl lg:text-6xl">      // Mobile first
```

**Pourquoi** : Mobile = 35% trafic  
**Sanction** : Expérience mobile dégradée

---

### 10. ❌ SEO Incomplet

```astro
<!-- ❌ INTERDIT -->
<head>
  <title>Ma Page</title>
</head>

<!-- ✅ CORRECT -->
<head>
  <title>Offre - Confluence Digitale</title>
  <meta name="description" content="..." />
  <link rel="canonical" href="..." />
  <meta property="og:title" content="..." />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="..." />
</head>
```

**Pourquoi** : Référencement Google, partage réseaux sociaux  
**Sanction** : Perte trafic organique

---

## ✅ LES 10 OBLIGATIONS ABSOLUES

### 1. ✅ Playfair Regular Uniquement

```tsx
// TOUJOURS
<h1 className="font-playfair">
<h2 className="font-playfair">
<h3 className="font-playfair">
```

---

### 2. ✅ Ombres Inline Uniquement

```tsx
// TOUJOURS
<div style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}>
```

---

### 3. ✅ Hero PT-28 LG:PT-32

```tsx
// TOUJOURS pour sections hero
<section className="pt-28 lg:pt-32">
```

---

### 4. ✅ Formulaires Space-Y-6

```tsx
// TOUJOURS pour formulaires
<form className="space-y-6">
```

---

### 5. ✅ 5 Couleurs Exclusives

```tsx
// UNIQUEMENT ces couleurs
#F9FAFB  // Background
#1A1A1A  // Texte
#D1A65E  // Premium
#10b981  // CTA
#A32E3A  // Important
```

---

### 6. ✅ Container Standard

```tsx
// TOUJOURS pour container principal
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

---

### 7. ✅ TypeScript Strict

```tsx
// TOUJOURS typer
interface Props { }
const data: Type[] = [];
function func(param: Type): ReturnType { }
```

---

### 8. ✅ Hydratation Correcte

```tsx
// TOUJOURS respecter
<Header client:load />       // Prioritaire
<Section client:visible />   // Lazy
<Footer client:visible />    // Lazy
```

---

### 9. ✅ Mobile-First

```tsx
// TOUJOURS partir du mobile
className="text-base sm:text-lg lg:text-xl"
className="px-4 sm:px-6 lg:px-8"
className="py-12 sm:py-16 lg:py-24"
```

---

### 10. ✅ SEO Complet

```astro
<!-- TOUJOURS inclure -->
<title>Page - Confluence Digitale</title>
<meta name="description" content="..." />
<link rel="canonical" href="..." />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
```

---

## 🎯 CHECKLIST VALIDATION ABSOLUE

Avant de générer un prompt, vérifie que tu inclus :

### Design System

- [ ] Playfair Regular (jamais bold)
- [ ] Ombres inline (jamais classes shadow-*)
- [ ] Hero pt-28 lg:pt-32
- [ ] Formulaires space-y-6
- [ ] 5 couleurs exclusives

### Architecture

- [ ] Container max-w-7xl
- [ ] Hydratation correcte (client:load vs client:visible)
- [ ] Structure Astro valide

### Code Quality

- [ ] TypeScript strict (pas any)
- [ ] Mobile-first responsive
- [ ] Accessibilité (ARIA, focus)

### SEO

- [ ] Title unique
- [ ] Meta description
- [ ] Canonical URL
- [ ] Open Graph complet

---

## 🚨 ERREURS FRÉQUENTES

### Erreur #1 : Oublier BATCH 21

```tsx
// ❌ Code généré sans vérifier
<section className="pt-20">

// ✅ Correction
<section className="pt-28 lg:pt-32">
```

**Solution** : Toujours vérifier le padding hero

---

### Erreur #2 : Copier classes shadow Tailwind

```tsx
// ❌ Code copié d'un exemple externe
<div className="shadow-lg rounded-lg">

// ✅ Correction Design System
<div 
  className="rounded-lg"
  style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}
>
```

**Solution** : Remplacer toute classe shadow-* par style inline

---

### Erreur #3 : Font-bold sur Playfair

```tsx
// ❌ Réflexe de mettre bold sur titres
<h1 className="font-playfair font-bold text-5xl">

// ✅ Correction
<h1 className="font-playfair text-5xl">
```

**Solution** : Supprimer systématiquement font-bold de Playfair

---

### Erreur #4 : Couleurs par défaut Tailwind

```tsx
// ❌ Utilisation couleurs Tailwind standard
<button className="bg-blue-600">

// ✅ Correction palette exclusive
<button className="bg-emerald-500">
```

**Solution** : Vérifier que couleur est dans la palette des 5

---

### Erreur #5 : TypeScript any

```tsx
// ❌ Par flemme de typer
const handleSubmit = (data: any) => { }

// ✅ Typer correctement
interface FormData {
  name: string;
  email: string;
}
const handleSubmit = (data: FormData) => { }
```

**Solution** : Créer interface/type approprié

---

## 📋 TEMPLATE VALIDATION POUR PROMPTS

### À inclure dans CHAQUE prompt

```markdown
## ✅ Validation OBLIGATOIRE

Avant de générer le code, vérifie que tu respectes :

### Design System V6.7.2
- [ ] Playfair Regular (JAMAIS font-bold)
- [ ] Ombres inline (JAMAIS classes shadow-*)
- [ ] Hero pt-28 lg:pt-32 (BATCH 21)
- [ ] Formulaires space-y-6 (BATCH 20B)
- [ ] Palette 5 couleurs (#F9FAFB, #1A1A1A, #D1A65E, #10b981, #A32E3A)

### Architecture
- [ ] Container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- [ ] Header client:load
- [ ] Sections/Footer client:visible
- [ ] Structure Astro correcte

### Code Quality
- [ ] TypeScript strict (pas de any)
- [ ] Mobile-first responsive
- [ ] Accessibilité (ARIA labels, focus states)

### SEO
- [ ] Title unique
- [ ] Meta description
- [ ] Canonical URL
- [ ] Open Graph complet
```

---

## 🎯 RÉSUMÉ POUR TOI (GEM'S)

### Les 5 règles les PLUS critiques

1. **Playfair = Regular** (jamais bold)
2. **Ombres = Inline** (jamais classes shadow-*)
3. **Hero = pt-28 lg:pt-32**
4. **Formulaires = space-y-6**
5. **5 couleurs uniquement**

### Comment assurer le respect

**Dans chaque prompt que tu génères, inclure** :

```markdown
## 🚨 Contraintes ABSOLUES

1. Playfair Display Regular uniquement (JAMAIS font-bold)
2. Ombres inline uniquement (JAMAIS classes shadow-*)
3. Hero padding pt-28 lg:pt-32 (BATCH 21)
4. Formulaires space-y-6 (BATCH 20B)
5. Palette exclusive : #F9FAFB, #1A1A1A, #D1A65E, #10b981, #A32E3A

⚠️ Aucune exception autorisée - Ces règles sont critiques pour l'identité du projet.
```

### Phrase magique à inclure

**"Avant de coder, vérifie que tu respectes les 5 règles absolues du Design System V6.7.2"**

---

## 🔍 AUTO-VÉRIFICATION

### Questions à te poser avant d'envoyer un prompt

1. ❓ Ai-je mentionné "Playfair Regular uniquement" ?
2. ❓ Ai-je mentionné "Ombres inline uniquement" ?
3. ❓ Ai-je spécifié "pt-28 lg:pt-32" pour hero ?
4. ❓ Ai-je spécifié "space-y-6" pour formulaires ?
5. ❓ Ai-je listé les 5 couleurs exclusives ?

**Si 1 seule réponse = NON → Prompt incomplet**

---

## 💡 AIDE-MÉMOIRE

### Copie-colle ce bloc dans TOUS tes prompts

```markdown
## 🚨 RÈGLES ABSOLUES (À VÉRIFIER)

- Playfair Regular uniquement (JAMAIS bold)
- Ombres inline uniquement (JAMAIS shadow-*)
- Hero pt-28 lg:pt-32
- Formulaires space-y-6
- 5 couleurs : #F9FAFB, #1A1A1A, #D1A65E, #10b981, #A32E3A
- Container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Header client:load, reste client:visible
- TypeScript strict (pas any)
- Mobile-first responsive
- SEO complet
```

---

**🚨 Règles Absolues maîtrisées ! Ne jamais violer ! 💪**
