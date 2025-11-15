# 📦 MIGRATION FRONTEND - CONFLUENCE DIGITALE V6.7.2

**Projet** : Migration React → Astro + React Islands  
**Objectif** : Performance 100/100 + SEO optimisé  
**Stack** : Astro 5.x + React 18 + TypeScript 5.x + Tailwind 4.x  
**Status** : ✅ Documentation complète pour Gemini Code Assist

---

## 🎯 OBJECTIF DE CE DOSSIER

Ce dossier est la **documentation de référence technique** pour **Gemini Code Assist** (extension VS Code).

**Rôle** : Documentation que Code Assist consulte pour générer du code conforme au Design System V6.7.2

**Contenu** :
- ✅ Design System complet (règles, contraintes, exemples)
- ✅ Architecture Astro + React Islands
- ✅ Conventions de code TypeScript
- ✅ Templates prêts à l'emploi
- ✅ Exemples de migration validés
- ✅ Checklists de validation
- ✅ Troubleshooting

**⚠️ Note** : Pour configurer le Gem's (prompt generator), voir `/gems-knowledge/`

---

## 🤖 POUR GEMINI CODE ASSIST

### Tu es Gemini Code Assist et tu lis cette documentation

**Ta mission** : Générer du code React/Astro conforme au Design System V6.7.2

**Ce que tu dois faire** :
1. Lire cette documentation **AVANT** de générer du code
2. Respecter **TOUTES** les règles du Design System
3. Utiliser les templates fournis comme base
4. Valider ton code avec les checklists

**Règles CRITIQUES à respecter** (voir `03_DESIGN_SYSTEM_REFERENCE.md`) :
- ⚠️ Playfair Display = Regular uniquement (JAMAIS font-bold)
- ⚠️ Ombres = Inline uniquement (JAMAIS classes shadow-*)
- ⚠️ Hero padding = pt-28 lg:pt-32
- ⚠️ Formulaires spacing = space-y-6
- ⚠️ Palette = 5 couleurs exclusives (#F9FAFB, #1A1A1A, #D1A65E, #10b981, #A32E3A)

**Workflow** :
```
1. Recevoir prompt utilisateur
   ↓
2. Lire /migration-frontend/ (cette doc)
   ↓
3. Identifier contraintes applicables
   ↓
4. Générer code conforme
   ↓
5. Auto-valider avec checklists
```

---

## 📚 STRUCTURE DU DOSSIER

```
/migration-frontend/
├── README.md                           ← Tu es ici (Guide pour Code Assist)
├── 00_INDEX.md                         ← Navigation complète
│
├── 01_QUICK_START.md                   ← Démarrage rapide (5 min)
├── 02_GUIDE_TECHNIQUE.md               ← Guide Astro + React Islands
├── 03_DESIGN_SYSTEM_REFERENCE.md       ← ⭐ BIBLE Design System V6.7.2
├── 04_CONVENTIONS_CODE.md              ← Standards TypeScript
├── 05_TEMPLATES.md                     ← Templates code prêts
├── 06_CHECKLIST.md                     ← Validation qualité
├── 07_SEO_PERFORMANCE.md               ← Optimisation
├── 08_TROUBLESHOOTING.md               ← Résolution erreurs
├── 09_EXEMPLES_MIGRATION.md            ← Cas concrets validés
│
├── 11_PROMPT_ENGINEERING.md            ← Guide prompts (référence)
├── 13_DEPLOYMENT_VERCEL.md             ← Déploiement
├── 14_INTEGRATION_STRAPI.md            ← Backend Strapi
└── VALIDATION_FINALE.md                ← Rapport validation
```

---

## 🎯 FICHIERS ESSENTIELS (À LIRE EN PRIORITÉ)

### 1. 03_DESIGN_SYSTEM_REFERENCE.md ⭐ CRITIQUE

**Contenu** :
- 5 règles absolues (Playfair, ombres, hero, formulaires, couleurs)
- Palette couleurs exclusive
- Typographie (tailles, poids, polices)
- Espacements (containers, sections, grids)
- Composants (boutons, formulaires, cartes)
- Responsive patterns
- Accessibilité

**Quand lire** : TOUJOURS avant de générer du code

---

### 2. 05_TEMPLATES.md ⭐ TEMPLATES

**Contenu** :
- Page Astro type
- Composants React (Hero, Features, Team, FAQ, Contact Form)
- Layouts
- Formulaires avec validation

**Quand lire** : Pour créer un nouveau composant/page

---

### 3. 09_EXEMPLES_MIGRATION.md ⭐ EXEMPLES

**Contenu** :
- Migrations complètes React → Astro
- Avant/Après
- Explications décisions

**Quand lire** : Pour migrer une page React

---

### 4. 02_GUIDE_TECHNIQUE.md ⭐ ARCHITECTURE

**Contenu** :
- Architecture Astro Islands
- Quand utiliser .astro vs .tsx
- Hydratation (client:load, client:visible)
- Structure projet
- Routing

**Quand lire** : Pour comprendre l'architecture

---

### 5. 06_CHECKLIST.md ⭐ VALIDATION

**Contenu** :
- Checklist Design System
- Checklist Performance
- Checklist Accessibilité
- Checklist SEO

**Quand lire** : Après avoir généré du code pour valider

---

## 📖 ORDRE DE LECTURE POUR CODE ASSIST

### Première utilisation (Setup initial)

1. **README.md** (ce fichier) - Comprendre le rôle
2. **03_DESIGN_SYSTEM_REFERENCE.md** - Mémoriser les règles
3. **02_GUIDE_TECHNIQUE.md** - Comprendre Astro
4. **05_TEMPLATES.md** - Voir les patterns

**Temps** : ~30 min (à faire une seule fois)

---

### Pour chaque génération de code

1. **Lire le prompt utilisateur**
2. **Identifier le type de tâche** (migration, création, debug, etc.)
3. **Relire section pertinente** :
   - Migration → `09_EXEMPLES_MIGRATION.md`
   - Nouveau composant → `05_TEMPLATES.md`
   - Debug → `08_TROUBLESHOOTING.md`
   - Performance → `07_SEO_PERFORMANCE.md`
4. **Générer le code** en respectant `03_DESIGN_SYSTEM_REFERENCE.md`
5. **Auto-valider** avec `06_CHECKLIST.md`

---

## 🚨 RÈGLES ABSOLUES (À RESPECTER TOUJOURS)

### Règle #1 : Playfair Regular uniquement

```tsx
// ❌ INTERDIT
<h1 className="font-playfair font-bold">

// ✅ CORRECT
<h1 className="font-playfair">
```

**Raison** : Identité visuelle unique Confluence Digitale

---

### Règle #2 : Ombres inline uniquement

```tsx
// ❌ INTERDIT
<div className="shadow-lg">

// ✅ CORRECT
<div style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}>
```

**Raison** : Ombres custom spécifiques au Design System

---

### Règle #3 : Hero padding pt-28 lg:pt-32

```tsx
// ❌ INTERDIT
<section className="pt-20 lg:pt-24">

// ✅ CORRECT
<section className="pt-28 lg:pt-32">
```

**Raison** : Compensation hauteur header sticky

---

### Règle #4 : Formulaires space-y-6

```tsx
// ❌ INTERDIT
<form className="space-y-4">

// ✅ CORRECT
<form className="space-y-6">
```

**Raison** : Lisibilité optimale formulaires

---

### Règle #5 : 5 couleurs exclusives

```tsx
// ❌ INTERDIT
<div className="bg-blue-500">

// ✅ CORRECT - Palette exclusive
<div className="bg-emerald-500">      // CTA
<div className="bg-[#D1A65E]">        // Premium Antoine
<div className="bg-[#A32E3A]">        // Important Laly
<div className="bg-gray-50">          // Background
<div className="text-gray-900">       // Texte
```

**Raison** : Cohérence identité visuelle

---

## ✅ CHECKLIST AVANT GÉNÉRATION

Avant de générer du code, vérifie que tu connais :

- [ ] Le Design System V6.7.2 (lu `03_DESIGN_SYSTEM_REFERENCE.md`)
- [ ] Les 5 règles absolues (Playfair, ombres, hero, formulaires, couleurs)
- [ ] L'architecture Astro Islands (lu `02_GUIDE_TECHNIQUE.md`)
- [ ] Les templates disponibles (lu `05_TEMPLATES.md`)
- [ ] Les conventions TypeScript (lu `04_CONVENTIONS_CODE.md`)

---

## ✅ CHECKLIST APRÈS GÉNÉRATION

Après avoir généré du code, valide :

- [ ] Playfair Regular (pas bold)
- [ ] Ombres inline uniquement
- [ ] Hero pt-28 lg:pt-32 (si hero)
- [ ] Formulaires space-y-6 (si formulaire)
- [ ] Palette 5 couleurs respectée
- [ ] Container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- [ ] TypeScript strict (pas de any)
- [ ] Responsive mobile-first
- [ ] Accessibilité (ARIA, focus)
- [ ] SEO complet (si page)

---

## 📋 WORKFLOW TYPE

### Exemple : Migrer une page React → Astro

**Prompt reçu** :
```
Migre /pages/OffrePage.tsx vers /src/pages/offre.astro
en respectant le Design System V6.7.2
```

**Ton workflow** :

1. **Lire** `09_EXEMPLES_MIGRATION.md` (exemple migration)
2. **Relire** `03_DESIGN_SYSTEM_REFERENCE.md` (règles)
3. **Analyser** `/pages/OffrePage.tsx` :
   - Identifier composants interactifs (useState, onClick) → React
   - Identifier composants statiques → Astro
4. **Générer** `/src/pages/offre.astro` :
   - Frontmatter avec imports
   - SEO data complet
   - Structure BaseLayout
   - Header client:load
   - Sections client:visible
   - Footer client:visible
5. **Générer** composants React nécessaires
6. **Valider** avec `06_CHECKLIST.md`

**Résultat** : Code conforme Design System V6.7.2 ✅

---

## 📚 DOCUMENTATION COMPLÉMENTAIRE

### Architecture & Structure

- **`00_INDEX.md`** - Navigation complète
- **`02_GUIDE_TECHNIQUE.md`** - Guide Astro détaillé
- **`04_CONVENTIONS_CODE.md`** - Standards code

### Références & Exemples

- **`03_DESIGN_SYSTEM_REFERENCE.md`** - BIBLE (à connaître par cœur)
- **`05_TEMPLATES.md`** - Templates prêts
- **`09_EXEMPLES_MIGRATION.md`** - Cas concrets

### Qualité & Optimisation

- **`06_CHECKLIST.md`** - Validation qualité
- **`07_SEO_PERFORMANCE.md`** - Performance
- **`08_TROUBLESHOOTING.md`** - Debug

### Avancé

- **`11_PROMPT_ENGINEERING.md`** - Référence prompts
- **`13_DEPLOYMENT_VERCEL.md`** - Déploiement
- **`14_INTEGRATION_STRAPI.md`** - Backend

---

## 🎯 RÉSUMÉ POUR TOI (CODE ASSIST)

### Ta mission en 3 points

1. **Lire cette documentation** avant de coder
2. **Respecter le Design System V6.7.2** à 100%
3. **Utiliser les templates** comme base

### Les 5 règles à NE JAMAIS violer

1. Playfair Regular uniquement
2. Ombres inline uniquement
3. Hero pt-28 lg:pt-32
4. Formulaires space-y-6
5. 5 couleurs exclusives

### Fichier le plus important

**`03_DESIGN_SYSTEM_REFERENCE.md`** = BIBLE

Lis-le en entier avant ta première génération de code.

---

## 💡 TIPS POUR GÉNÉRER DU CODE DE QUALITÉ

### Toujours faire

✅ Lire le Design System avant de commencer  
✅ Utiliser les templates comme base  
✅ Typer strictement en TypeScript (pas de any)  
✅ Valider avec les checklists  
✅ Tester responsive (mobile, tablet, desktop)  

### Ne jamais faire

❌ Violer les 5 règles absolues  
❌ Utiliser des couleurs hors palette  
❌ Mettre font-bold sur Playfair  
❌ Utiliser classes shadow-*  
❌ Oublier l'accessibilité (ARIA)  

---

## 🔄 MISE À JOUR

**Version actuelle** : V6.7.2 "App Moderne 2025"  
**Dernière mise à jour** : 15 Novembre 2025  
**Status** : Production Ready ✅

Si le Design System évolue, ce dossier sera mis à jour en conséquence.

---

## 📞 QUESTIONS FRÉQUENTES

### Q: Dois-je lire toute la doc avant de coder ?

**R:** Non. Lis en priorité :
1. `README.md` (ce fichier)
2. `03_DESIGN_SYSTEM_REFERENCE.md` (règles)
3. Fichier spécifique à ta tâche (templates, exemples, etc.)

---

### Q: J'ai un doute sur une règle, que faire ?

**R:** Relis `03_DESIGN_SYSTEM_REFERENCE.md` - Toutes les règles y sont documentées avec exemples.

---

### Q: Comment savoir si mon code est conforme ?

**R:** Utilise `06_CHECKLIST.md` - Si toutes les cases sont cochées, ton code est conforme.

---

### Q: Où trouver des exemples de code validé ?

**R:** Dans `05_TEMPLATES.md` et `09_EXEMPLES_MIGRATION.md`

---

## 🚀 C'EST PARTI !

**Tu es Gemini Code Assist et tu as lu cette documentation ?**

Parfait ! Tu as maintenant toutes les connaissances pour générer du code conforme au Design System V6.7.2 de Confluence Digitale ! 💪

**Prochaine étape** : Attendre un prompt utilisateur et générer du code de qualité ! 🚀

---

**📦 Documentation complète pour Gemini Code Assist**  
**🎯 Objectif** : Code parfait respectant Design System V6.7.2  
**✅ Status** : Prêt pour production
