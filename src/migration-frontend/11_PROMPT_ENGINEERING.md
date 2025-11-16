# 🎯 PROMPT ENGINEERING - GUIDE DE RÉFÉRENCE

**Objectif** : Guide de référence pour structurer les prompts  
**Public** : Gemini Code Assist (extension VS Code)  
**Niveau** : Référence technique

**⚠️ Note** : Ce fichier est une référence. Pour configurer le Gem's, voir `/gems-knowledge/`

---

## 🧠 AGENT IA PRINCIPAL

### Gemini Code Assist (Recommandé)

| Caractéristique | Valeur |
|----------------|--------|
| **Intégration** | VS Code (extension native) |
| **Contexte** | ~100K tokens |
| **Forces** | Google AI + Context projet VS Code |
| **Idéal pour** | Migration Astro, génération code, debug |
| **Workflow** | Prompt → Code Assist → Code généré |

---

## 📚 STRUCTURE D'UN PROMPT EFFICACE

### Template Universel

```markdown
# [TYPE DE TÂCHE] : [OBJECTIF PRÉCIS]

## Contexte
- Projet : Confluence Digitale V6.7.2
- Stack : Astro 5.x + React 18 + TypeScript 5.x + Tailwind 3.x
- Design System : V6.7.2 "App Moderne 2025"
- Documentation : /migration-frontend/ + /doc/

## Contraintes OBLIGATOIRES
1. Respecter Design System V6.7.2 à 100%
2. [Contrainte spécifique 1]
3. [Contrainte spécifique 2]

## Tâche à Réaliser
[Description détaillée]

## Fichiers Concernés
- [fichier1.tsx]
- [fichier2.astro]

## Résultat Attendu
- [Critère de succès 1]
- [Critère de succès 2]
```

---

## 🎯 PROMPTS PAR CAS D'USAGE

### 1️⃣ MIGRATION PAGE REACT → ASTRO

```markdown
# MIGRATION : Page React vers Astro

## Contexte
- Fichier source : /pages/ConfluenceOffrePage.tsx
- Fichier destination : /src/pages/offre.astro
- Documentation : /migration-frontend/09_EXEMPLES_MIGRATION.md

## Contraintes OBLIGATOIRES
1. Hero padding : pt-28 lg:pt-32 (BATCH 21)
2. Ombres : style={{ boxShadow }} uniquement
3. Playfair Display Regular (jamais bold)
4. Formulaires : space-y-6
5. Hydratation : client:load (Header) / client:visible (autres)

## Analyse Requise
1. Identifier composants interactifs (useState, onClick) → Garder React
2. Identifier composants statiques → Convertir Astro
3. Liste des composants React à importer

## Tâche
Migre /pages/ConfluenceOffrePage.tsx vers /src/pages/offre.astro

Structure attendue :
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/layout/ConfluenceHeaderV6_7.tsx';
import [ComposantsInteractifs] from '../components/...';
import Footer from '../components/layout/ConfluenceFooterV6_2.tsx';

const seoData = {
  title: "...",
  description: "...",
  canonical: "..."
};
---

<BaseLayout {...seoData}>
  <Header client:load />
  <main>
    <!-- Sections -->
  </main>
  <Footer client:visible />
</BaseLayout>

## Validation
- [ ] SEO complet (title, description, canonical)
- [ ] Hero padding pt-28 lg:pt-32
- [ ] Hydratation correcte
- [ ] Responsive px-4 sm:px-6 lg:px-8
- [ ] Design System respecté
```

---

### 2️⃣ CRÉATION COMPOSANT REACT

```markdown
# CRÉATION : Composant React Interactif

## Contexte
- Type : Composant FAQ avec accordéons
- Emplacement : /src/components/sections/ConfluenceFAQ.tsx
- Documentation : /migration-frontend/05_TEMPLATES.md

## Contraintes Design System V6.7.2
1. Couleurs : Palette exclusive (Gris #F9FAFB, Noir #1A1A1A, Vert #10b981)
2. Typographie : Titres en Playfair Regular (jamais bold)
3. Ombres : style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}
4. Responsive : px-4 sm:px-6 lg:px-8
5. Espacement : py-16 lg:py-24 pour sections

## Spécifications
- useState pour gérer l'accordéon (index ouvert)
- Animation douce (transition-all duration-300)
- Accessibilité : aria-expanded, aria-controls
- Icons : Lucide React (ChevronDown)

## Structure TypeScript
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

Props : Pas de props (data hardcodée)

## Data (Contenu)
[
  { id: 1, question: "Combien coûte votre service ?", answer: "Setup 0€ HT puis 149€ HT/mois..." },
  { id: 2, question: "Quelle est la durée d'engagement ?", answer: "24 mois minimum..." },
  // ... 5 FAQs au total
]

## Validation
- [ ] TypeScript strict (pas de any)
- [ ] Responsive testé (mobile, tablette, desktop)
- [ ] Accessibilité clavier (Tab, Enter)
- [ ] Design System V6.7.2 respecté
- [ ] Ombres inline (pas de classes Tailwind shadow-*)
```

---

### 3️⃣ DEBUGGING ERREUR

```markdown
# DEBUG : Erreur Composant React

## Erreur Observée
```
TypeError: Cannot read property 'map' of undefined
File: /src/components/sections/TeamBlock.tsx:45
```

## Contexte
- Composant : TeamBlock
- Hydratation : client:visible
- Page : /src/pages/equipe.astro

## Analyse Requise
1. Vérifier si data est bien passée en props
2. Vérifier si data existe avant .map()
3. Vérifier type TypeScript de data
4. Vérifier hydratation Astro

## Documentation
- Référence : /migration-frontend/08_TROUBLESHOOTING.md (Erreur #12)

## Tâche
Identifie et corrige l'erreur dans TeamBlock.tsx

## Solution Attendue
- Type guard ou optional chaining
- Fallback si data undefined
- Message d'erreur explicite si nécessaire

## Validation
- [ ] Erreur résolue
- [ ] TypeScript satisfait
- [ ] Composant s'affiche correctement
- [ ] Pas de régression
```

---

### 4️⃣ OPTIMISATION PERFORMANCE

```markdown
# OPTIMISATION : Performance Lighthouse

## Contexte
- Page : /src/pages/index.astro (Landing)
- Score actuel : Performance 75/100
- Target : Performance > 90/100

## Problèmes Identifiés
1. LCP : 3.2s (target < 2.5s)
2. JavaScript : 250 KB (trop lourd)
3. Images non optimisées

## Documentation
- Référence : /migration-frontend/07_SEO_PERFORMANCE.md

## Tâche
Optimise la Landing Page pour atteindre 90/100

Actions à réaliser :
1. Convertir images PNG → WebP
2. Ajouter lazy loading (loading="lazy")
3. Précharger polices critiques
4. Remplacer client:load par client:visible (sauf Header)
5. Inline CSS critique

## Validation
- [ ] Lighthouse Performance > 90
- [ ] LCP < 2.5s
- [ ] JavaScript < 100 KB
- [ ] Images WebP avec alt text
- [ ] Fonctionnalités préservées
```

---

### 5️⃣ REFACTORING RESPONSIVE

```markdown
# REFACTORING : Responsive Mobile-First

## Contexte
- Composant : /src/components/sections/ServicesGrid.tsx
- Problème : Pas responsive sur mobile (< 640px)

## Contraintes Design System
- Padding horizontal : px-4 sm:px-6 lg:px-8
- Grille : grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Gap : gap-6 lg:gap-8
- Conteneur : max-w-7xl mx-auto

## Documentation
- Référence : /migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md (Section Responsive)

## Tâche
Rends le composant ServicesGrid responsive selon les breakpoints Tailwind

Breakpoints :
- Mobile (défaut) : 1 colonne, px-4, gap-6
- Tablette (640px) : 2 colonnes, px-6
- Desktop (1024px) : 3 colonnes, px-8, gap-8

## Validation
- [ ] Test iPhone SE (375px) ✅
- [ ] Test iPad (768px) ✅
- [ ] Test Desktop (1280px) ✅
- [ ] Pas de scroll horizontal
- [ ] Texte lisible sur tous supports
```

---

## 🎨 PROMPTS DESIGN SYSTEM

### 6️⃣ VALIDATION DESIGN SYSTEM

```markdown
# VALIDATION : Conformité Design System V6.7.2

## Composant à Valider
- Fichier : /src/components/sections/HeroOffre.tsx

## Checklist Design System
Vérifie la conformité à 100% :

### Couleurs
- [ ] Background : #F9FAFB uniquement
- [ ] Texte : #1A1A1A
- [ ] CTA : #10b981 (vert)
- [ ] Accent Premium : #D1A65E (or) si Antoine
- [ ] Aucune couleur custom hors palette

### Typographie
- [ ] Titres : font-playfair (Regular 400)
- [ ] Body : font-inter
- [ ] JAMAIS font-bold sur Playfair
- [ ] Tailles responsive (text-4xl lg:text-6xl)

### Espacement
- [ ] Hero : pt-28 lg:pt-32
- [ ] Sections : py-16 lg:py-24
- [ ] Padding horizontal : px-4 sm:px-6 lg:px-8
- [ ] Conteneur : max-w-7xl mx-auto

### Ombres
- [ ] JAMAIS classes shadow-*
- [ ] Toujours style={{ boxShadow: '...' }}
- [ ] Carte standard : boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)'

### Documentation
- Référence : /migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md
- Bible : /doc/01_DESIGN_SYSTEM_V6.7.md

## Action
Liste TOUTES les violations détectées avec :
1. Ligne concernée
2. Règle violée
3. Correction proposée

## Format Réponse
```
❌ Ligne 23 : <h1 className="font-playfair font-bold">
Règle : JAMAIS font-bold sur Playfair
Correction : <h1 className="font-playfair">

❌ Ligne 45 : <div className="shadow-lg">
Règle : Ombres inline uniquement
Correction : <div style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}>
```
```

---

## 🔧 PROMPTS TECHNIQUES AVANCÉS

### 7️⃣ MULTI-FICHIERS (Gemini Code Assist)

```markdown
# MULTI-FICHIERS : Migration Complète Page + Composants

## Contexte
Migration page Études de Cas avec tous ses composants

## Fichiers Source
1. /pages/ConfluenceEtudesDeCasPage.tsx
2. /components/sections/CaseStudyCard.tsx
3. /components/sections/CaseStudyFilters.tsx

## Fichiers Destination
1. /src/pages/etudes-de-cas.astro
2. /src/components/sections/CaseStudyCard.tsx (React)
3. /src/components/sections/CaseStudyFilters.tsx (React)

## Workflow
1. Analyse chaque composant (interactif ou statique)
2. Décision format (.tsx ou .astro)
3. Migration avec respect Design System
4. Tests responsive + fonctionnels

## Contraintes
- Design System V6.7.2 strict
- SEO complet sur page principale
- Hydratation optimale (client:visible prioritaire)
- TypeScript strict (pas de any)

## Validation Globale
- [ ] Build sans erreur (npm run build)
- [ ] Lighthouse > 90 sur toutes métriques
- [ ] Responsive testé (3 breakpoints)
- [ ] Filtres fonctionnels (state React)
- [ ] SEO complet (title, description, meta)
```

---

### 8️⃣ FORMULAIRE COMPLEXE

```markdown
# FORMULAIRE : Contact avec Validation Temps Réel

## Spécifications
- Fichier : /src/components/forms/ContactFormV2.tsx
- Validation : Temps réel (onChange + onBlur)
- États : touched, errors, isSubmitting
- Design System : V6.7.2

## Champs
1. Nom (required, min 2 caractères)
2. Email (required, format email)
3. Téléphone (optional, format FR)
4. Message (required, min 10 caractères, max 500)

## Logique Validation
- État "pristine" : Pas d'erreur affichée
- État "touched" : Erreur si invalide
- CTA disabled si formulaire invalide
- Icônes : Check (✓) si valide, X si invalide

## Référence
- Doc : /doc/FORM_VALIDATION_REFERENCE.md
- Template : /migration-frontend/05_TEMPLATES.md

## Design System
- Espacement : space-y-6 (BATCH 20B)
- Input border : border-2 border-gray-200
- Input error : border-2 border-red-500
- Input valid : border-2 border-emerald-500
- CTA : bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed

## TypeScript
```typescript
interface FormData {
  nom: string;
  email: string;
  telephone: string;
  message: string;
}

interface FormErrors {
  nom?: string;
  email?: string;
  telephone?: string;
  message?: string;
}

interface TouchedFields {
  nom: boolean;
  email: boolean;
  telephone: boolean;
  message: boolean;
}
```

## Validation
- [ ] TypeScript strict
- [ ] Validation temps réel fonctionne
- [ ] Icônes affichées correctement
- [ ] CTA disabled si invalide
- [ ] Messages erreur clairs
- [ ] space-y-6 respecté
```

---

## 🚀 PROMPTS GEMINI CODE ASSIST

### Configuration Contexte

```markdown
# CONTEXTE GEMINI : Confluence Digitale V6.7.2

Tu es un expert en migration React → Astro avec spécialisation Design System.

## Documentation Prioritaire (Toujours lire)
1. /migration-frontend/ (11 fichiers)
2. /doc/01_DESIGN_SYSTEM_V6.7.md
3. /doc/PAGES_COMPLETE_GUIDE.md

## Règles ABSOLUES (Ne JAMAIS violer)
1. Titres : Playfair Display Regular (400) - JAMAIS bold
2. Hero Padding : pt-28 lg:pt-32 (BATCH 21)
3. Ombres : style={{ boxShadow }} - JAMAIS classes shadow-*
4. Formulaires : space-y-6 (BATCH 20B)
5. Responsive : px-4 sm:px-6 lg:px-8
6. Hydratation : client:load (urgent) / client:visible (lazy)

## Palette (SEULES couleurs autorisées)
- Background : #F9FAFB
- Texte : #1A1A1A
- Premium : #D1A65E (Antoine)
- CTA : #10b981 (Pascal)
- Contractuel : #A32E3A (Laly)

## Workflow Standard
1. Analyser interactivité (useState/onClick → React)
2. Choisir format (.tsx ou .astro)
3. Appliquer Design System V6.7.2
4. Tester responsive (mobile, tablette, desktop)
5. Valider Lighthouse > 90

## Format Réponse Attendu
1. Analyse (type composant)
2. Code (complet avec types TS)
3. Validation (checklist Design System)
```

---

## 📋 TEMPLATES PROMPTS RAPIDES

### Quick Prompts (1 ligne)

```markdown
# Migration
"Migre /pages/ConfluenceOffrePage.tsx vers /src/pages/offre.astro selon Design System V6.7.2"

# Création
"Crée composant React FAQ accordéon selon /migration-frontend/05_TEMPLATES.md"

# Debug
"Debug erreur TypeError ligne 45 dans TeamBlock.tsx selon /migration-frontend/08_TROUBLESHOOTING.md"

# Validation
"Valide conformité Design System V6.7.2 de HeroSection.tsx selon /migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md"

# Optimisation
"Optimise performance Landing Page pour Lighthouse > 90 selon /migration-frontend/07_SEO_PERFORMANCE.md"

# Responsive
"Rends ServicesGrid responsive mobile-first selon /migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md"
```

---

## 🎓 BONNES PRATIQUES

### ✅ Prompts Efficaces

1. **Contexte Complet** : Toujours mentionner le projet et la doc
2. **Contraintes Explicites** : Lister les règles à respecter
3. **Références Doc** : Pointer vers les fichiers pertinents
4. **Validation Claire** : Définir les critères de succès
5. **Format Attendu** : Décrire la structure de réponse

### ❌ Pièges à Éviter

1. ❌ Prompt trop vague : "Fais une page"
2. ❌ Pas de contraintes : L'IA inventera
3. ❌ Pas de doc : Résultat non conforme
4. ❌ Pas de validation : Erreurs non détectées
5. ❌ Trop d'objectifs : Diviser en sous-tâches

---

## 📊 MÉTRIQUES SUCCÈS

### Évaluation d'un Prompt

| Critère | Poids | Check |
|---------|-------|-------|
| **Contexte clair** | 20% | ✅/❌ |
| **Contraintes Design System** | 30% | ✅/❌ |
| **Références doc** | 20% | ✅/❌ |
| **Validation explicite** | 20% | ✅/❌ |
| **Format attendu** | 10% | ✅/❌ |

**Score minimum** : 80% pour un prompt de qualité

---

## 🔗 RÉFÉRENCES

### Documentation Interne

- `/migration-frontend/` : Tous les guides
- `/doc/01_DESIGN_SYSTEM_V6.7.md` : Bible du design
- `/doc/PAGES_COMPLETE_GUIDE.md` : Structure pages

### Outils IA

- [Windsurf](https://codeium.com/windsurf)
- [Gemini Code Assist](https://cloud.google.com/products/gemini/code-assist)

---

**🎯 Prompt Engineering Maîtrisé ! 💪**

**Fichier suivant** : Configuration `.vscode/gemini-instructions.md`