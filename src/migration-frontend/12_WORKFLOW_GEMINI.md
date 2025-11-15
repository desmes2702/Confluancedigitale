# 🤖 WORKFLOW GEMINI - GUIDE COMPLET

**Outils** : Gemini 2.5 Pro (App) + Gemini Code Assist (VS Code)  
**Objectif** : Automatiser la migration avec prompts optimisés

---

## 🎯 MODUS OPERANDI

### Workflow en 4 Étapes

```
┌─────────────────────────────────────────────┐
│  1️⃣ GEMINI 2.5 PRO (App avec Gem's)        │
│     - Créer/affiner le prompt               │
│     - Contexte : Design System V6.7.2       │
│     - Objectif : Prompt optimal             │
└─────────────┬───────────────────────────────┘
              │
              ▼ COPIER le prompt
              │
┌─────────────▼───────────────────────────────┐
│  2️⃣ GEMINI CODE ASSIST (VS Code)           │
│     - Coller le prompt                      │
│     - Exécuter                              │
└─────────────┬───────────────────────────────┘
              │
              ▼ Génération automatique
              │
┌─────────────▼───────────────────────────────┐
│  3️⃣ CODE GÉNÉRÉ dans VS Code               │
│     - Fichiers créés/modifiés               │
│     - Design System respecté                │
└─────────────┬───────────────────────────────┘
              │
              ▼ Validation
              │
┌─────────────▼───────────────────────────────┐
│  4️⃣ VALIDATION                             │
│     - Checklist Design System               │
│     - Test responsive                       │
│     - Lighthouse > 90                       │
└─────────────────────────────────────────────┘
```

---

## 🔧 CONFIGURATION INITIALE

### 1️⃣ Gemini 2.5 Pro (App)

**Créer un Gem's "Confluence Digitale"** avec ce contexte :

```markdown
# Gem's : Confluence Digitale V6.7.2

Tu es un expert en migration React → Astro avec spécialisation Design System V6.7.2.

## Ton Rôle
Créer des prompts optimisés pour Gemini Code Assist qui respectent à 100% le Design System V6.7.2.

## Design System V6.7.2 - RÈGLES ABSOLUES

### Couleurs (SEULES autorisées)
- Background : #F9FAFB (Gris Clair)
- Texte : #1A1A1A (Noir Mat)
- Premium : #D1A65E (Or/Cuivre - Antoine)
- CTA : #10b981 (Vert - Pascal)
- Contractuel : #A32E3A (Rouge Bordeaux - Laly)
- Blanc : #FFFFFF (Cartes)

### Règles Critiques
- Titres : font-playfair Regular (JAMAIS bold)
- Hero Padding : pt-28 lg:pt-32 (OBLIGATOIRE)
- Formulaires : space-y-6 (OBLIGATOIRE)
- Ombres : style={{ boxShadow }} (JAMAIS classes shadow-*)
- Responsive : px-4 sm:px-6 lg:px-8 (Mobile-first)

## Format Prompt à Générer

Pour chaque demande, génère un prompt structuré ainsi :

```
# TÂCHE : [Type - Objectif]

## CONTEXTE
- Projet : Confluence Digitale V6.7.2
- Stack : Astro + React + TypeScript + Tailwind
- Design System : V6.7.2 "App Moderne 2025"
- Documentation : /.vscode/gemini-instructions.md

## CONTRAINTES OBLIGATOIRES
1. Design System V6.7.2 à 100%
2. [Contrainte spécifique 1]
3. [Contrainte spécifique 2]

## FICHIERS CONCERNÉS
- [fichier1.tsx]
- [fichier2.astro]

## CODE ATTENDU
[Structure détaillée]

## VALIDATION
- [ ] Checklist item 1
- [ ] Checklist item 2
```

## Exemples Prompts à Générer

Quand je demande "migration page offre", tu génères :

```
# MIGRATION : Page Offre React → Astro

## CONTEXTE
- Fichier source : /pages/ConfluenceOffrePage.tsx
- Fichier destination : /src/pages/offre.astro
- Documentation : /migration-frontend/09_EXEMPLES_MIGRATION.md

## CONTRAINTES OBLIGATOIRES
1. Hero padding : pt-28 lg:pt-32 (BATCH 21)
2. Ombres : style={{ boxShadow }} uniquement
3. Playfair Display Regular (jamais bold)
4. Formulaires : space-y-6
5. Hydratation : client:load (Header) / client:visible (autres)

## ANALYSE REQUISE
1. Identifier composants interactifs (useState, onClick) → Garder React
2. Identifier composants statiques → Convertir Astro
3. Lister imports nécessaires

## CODE ATTENDU
Structure page Astro avec :
- BaseLayout + SEO complet (title, description, canonical)
- Header client:load
- Sections principales
- Footer client:visible

## VALIDATION
- [ ] SEO complet
- [ ] Hero pt-28 lg:pt-32
- [ ] Hydratation correcte
- [ ] Responsive px-4 sm:px-6 lg:px-8
- [ ] Design System respecté
```
```

---

### 2️⃣ Gemini Code Assist (VS Code)

**Configuration automatique via** `.vscode/gemini-instructions.md`

Vérifie que :
- ✅ Extension "Gemini Code Assist" installée
- ✅ VS Code ouvert dans le projet
- ✅ Fichier `.vscode/gemini-instructions.md` présent

**Test** :
1. `Cmd/Ctrl + I`
2. Taper : "test"
3. Gemini doit mentionner Design System V6.7.2

---

## 📝 PROMPTS PRÊTS À L'EMPLOI

### 🔸 PROMPT #1 : Migration Page Simple

**À envoyer dans Gemini 2.5 Pro App** :

```
Crée un prompt pour Gemini Code Assist qui migre la page Mentions Légales React vers Astro.

Fichier source : /pages/ConfluenceMentionsLegalesPage.tsx
Fichier destination : /src/pages/mentions-legales.astro

La page est 100% statique (pas d'interactivité).
```

**Gemini 2.5 Pro génère** → Copier → Coller dans Gemini Code Assist

---

### 🔸 PROMPT #2 : Migration Page Complexe

**À envoyer dans Gemini 2.5 Pro App** :

```
Crée un prompt pour Gemini Code Assist qui migre la page Offre React vers Astro.

Fichier source : /pages/ConfluenceOffrePage.tsx
Fichier destination : /src/pages/offre.astro

La page contient :
- Section hero (statique)
- Grille de services (statique)
- FAQ (interactif - accordéons)
- CTA final (bouton tracking)

Composants React à réutiliser :
- ConfluenceHeaderV6_7.tsx
- ConfluenceFAQ.tsx
- ConfluenceFinalCTA.tsx
- ConfluenceFooterV6_2.tsx
```

---

### 🔸 PROMPT #3 : Création Composant React

**À envoyer dans Gemini 2.5 Pro App** :

```
Crée un prompt pour Gemini Code Assist qui crée un composant React FAQ avec accordéons.

Fichier : /src/components/sections/ConfluenceFAQ.tsx

Spécifications :
- useState pour gérer l'index ouvert
- Animation smooth (transition-all duration-300)
- Accessibilité (aria-expanded, aria-controls)
- Icons : Lucide React (ChevronDown)
- Design System V6.7.2 strict

Data : 5 FAQs sur l'offre (Setup 0€ HT, 149€/mois, engagement 24 mois, etc.)
```

---

### 🔸 PROMPT #4 : Formulaire avec Validation

**À envoyer dans Gemini 2.5 Pro App** :

```
Crée un prompt pour Gemini Code Assist qui crée un formulaire Contact avec validation temps réel.

Fichier : /src/components/forms/ContactFormV2.tsx

Champs :
- Nom (required, min 2 caractères)
- Email (required, format email)
- Téléphone (optional, format FR)
- Message (required, min 10, max 500 caractères)

Logique :
- Validation onChange + onBlur
- États : touched, errors, isSubmitting
- Icônes : Check si valide, X si invalide
- CTA disabled si formulaire invalide
- Design System V6.7.2 : space-y-6, border colors, etc.
```

---

### 🔸 PROMPT #5 : Debug Erreur

**À envoyer dans Gemini 2.5 Pro App** :

```
Crée un prompt pour Gemini Code Assist qui debug une erreur dans TeamBlock.tsx.

Erreur : TypeError: Cannot read property 'map' of undefined
Fichier : /src/components/sections/TeamBlock.tsx ligne 45

Contexte :
- Composant affiche la triade professionnelle (Antoine, Pascal, Laly)
- Hydratation : client:visible
- Page : /src/pages/equipe.astro

Analyser :
1. Props data passées correctement ?
2. Type guard nécessaire ?
3. Hydratation correcte ?
```

---

### 🔸 PROMPT #6 : Optimisation Performance

**À envoyer dans Gemini 2.5 Pro App** :

```
Crée un prompt pour Gemini Code Assist qui optimise la Landing Page pour Lighthouse > 90.

Page : /src/pages/index.astro
Score actuel : Performance 75/100

Problèmes identifiés :
1. LCP : 3.2s (target < 2.5s)
2. JavaScript : 250 KB (trop lourd)
3. Images non optimisées

Actions à réaliser :
- Convertir images PNG → WebP
- Lazy loading (loading="lazy")
- Précharger polices critiques
- Remplacer client:load par client:visible (sauf Header)
- Inline CSS critique

Documentation : /migration-frontend/07_SEO_PERFORMANCE.md
```

---

### 🔸 PROMPT #7 : Validation Design System

**À envoyer dans Gemini 2.5 Pro App** :

```
Crée un prompt pour Gemini Code Assist qui valide la conformité Design System V6.7.2 de HeroOffre.tsx.

Fichier : /src/components/sections/HeroOffre.tsx

Checklist à vérifier :
- Couleurs : Palette respectée
- Typographie : font-playfair Regular (pas bold)
- Hero padding : pt-28 lg:pt-32
- Ombres : style={{ boxShadow }} (pas shadow-*)
- Responsive : px-4 sm:px-6 lg:px-8
- Espacement : sections py-16 lg:py-24

Lister TOUTES les violations avec :
1. Ligne concernée
2. Règle violée
3. Correction proposée

Documentation : /migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md
```

---

## 🎨 TEMPLATES DE PROMPTS

### Template Générique

**À personnaliser et envoyer dans Gemini 2.5 Pro App** :

```
Crée un prompt pour Gemini Code Assist qui [ACTION] [CIBLE].

Fichier : [CHEMIN]

Contexte :
- [Contexte 1]
- [Contexte 2]

Contraintes Design System V6.7.2 :
- [Contrainte 1]
- [Contrainte 2]

Spécifications :
- [Spec 1]
- [Spec 2]

Documentation : /migration-frontend/[FICHIER_REFERENCE].md
```

---

### Template Migration Page

```
Crée un prompt pour Gemini Code Assist qui migre la page [NOM] React vers Astro.

Fichier source : /pages/Confluence[NOM]Page.tsx
Fichier destination : /src/pages/[nom-kebab-case].astro

Analyse :
- Sections statiques : [LISTE]
- Composants React interactifs : [LISTE]
- Formulaires : [OUI/NON]

SEO :
- Title : "[TITLE] | Confluence Digitale"
- Description : "[DESCRIPTION 150-160 caractères]"
- Canonical : "https://confluence-digitale.fr/[url]"

Documentation : /migration-frontend/09_EXEMPLES_MIGRATION.md
```

---

### Template Composant React

```
Crée un prompt pour Gemini Code Assist qui crée un composant React [NOM].

Fichier : /src/components/[categorie]/[NomComposant].tsx

Interactivité :
- useState : [ÉTATS]
- Événements : [onClick, onChange, etc.]

Props :
- [prop1] : [type] (required/optional)
- [prop2] : [type] (required/optional)

Design System V6.7.2 :
- Couleurs : [PALETTE]
- Typographie : [PLAYFAIR/INTER]
- Ombres : style={{ boxShadow: '...' }}
- Responsive : px-4 sm:px-6 lg:px-8

Documentation : /migration-frontend/05_TEMPLATES.md
```

---

## 🔄 WORKFLOW OPTIMISÉ

### Scénario 1 : Migration Simple (Page Statique)

**Temps estimé** : 10-15 minutes

```
1️⃣ GEMINI 2.5 PRO APP (2 min)
   Prompt : "Crée prompt migration page Mentions Légales"
   → Copier le prompt généré

2️⃣ GEMINI CODE ASSIST (3 min)
   Cmd/Ctrl + I → Coller prompt
   → Attendre génération code

3️⃣ VALIDATION (5 min)
   - Vérifier Design System
   - Test responsive
   - Lighthouse

4️⃣ COMMIT (2 min)
   git add . && git commit -m "Migration page mentions légales"
```

---

### Scénario 2 : Migration Complexe (Page Interactive)

**Temps estimé** : 30-45 minutes

```
1️⃣ GEMINI 2.5 PRO APP (5 min)
   Prompt détaillé avec :
   - Analyse composants (statique vs interactif)
   - Liste composants React à importer
   - Structure SEO
   → Copier prompt

2️⃣ GEMINI CODE ASSIST (10 min)
   Cmd/Ctrl + I → Coller prompt
   → Génération page Astro
   → Vérifier imports composants React

3️⃣ AJUSTEMENTS (10 min)
   - Vérifier hydratation (client:load vs client:visible)
   - Tester interactivité (formulaires, accordéons)

4️⃣ VALIDATION (10 min)
   - Checklist Design System complète
   - Test responsive 3 breakpoints
   - Lighthouse > 90

5️⃣ COMMIT (5 min)
   git add . && git commit -m "Migration page [nom] avec composants React"
```

---

### Scénario 3 : Création Composant React

**Temps estimé** : 20-30 minutes

```
1️⃣ GEMINI 2.5 PRO APP (3 min)
   Prompt avec spécifications détaillées :
   - Props + types TypeScript
   - États (useState)
   - Événements
   - Design System V6.7.2
   → Copier prompt

2️⃣ GEMINI CODE ASSIST (5 min)
   Cmd/Ctrl + I → Coller prompt
   → Génération composant

3️⃣ TEST ISOLATION (5 min)
   Créer page test Astro pour voir le composant

4️⃣ AJUSTEMENTS (5 min)
   - Tester interactivité
   - Vérifier responsive

5️⃣ VALIDATION (5 min)
   - Checklist Design System
   - TypeScript strict

6️⃣ COMMIT (2 min)
   git add . && git commit -m "Création composant [Nom]"
```

---

## 📊 MÉTRIQUES DE SUCCÈS

### Indicateurs par Prompt

| Métrique | Target | Validation |
|----------|--------|------------|
| **Génération code** | < 30 sec | Gemini Code Assist |
| **Design System conforme** | 100% | Checklist manuelle |
| **TypeScript compile** | 0 erreur | `npm run type-check` |
| **Responsive OK** | 3 breakpoints | Test manuel |
| **Lighthouse** | > 90 | Audit Chrome |

---

## 🚨 ERREURS COURANTES

### Erreur #1 : Prompt trop vague

**❌ Mauvais** :
```
Crée un composant FAQ
```

**✅ Bon** :
```
Crée un prompt pour Gemini Code Assist qui crée un composant React FAQ avec accordéons, animation smooth, accessibilité ARIA, Design System V6.7.2, 5 questions hardcodées
```

---

### Erreur #2 : Oubli contraintes Design System

**❌ Mauvais** :
```
Migre la page Offre
```

**✅ Bon** :
```
Crée un prompt qui migre page Offre en OBLIGEANT :
- Hero pt-28 lg:pt-32
- Ombres inline style={{ boxShadow }}
- Playfair Regular (pas bold)
- space-y-6 formulaires
```

---

### Erreur #3 : Pas de validation

**❌ Mauvais** :
```
[Code généré] → Commit direct
```

**✅ Bon** :
```
[Code généré] 
→ Vérifier Design System (checklist)
→ Test responsive
→ Lighthouse
→ PUIS commit
```

---

## ✅ CHECKLIST WORKFLOW

### Avant de Commencer

- [ ] Gemini 2.5 Pro App configuré (Gem's "Confluence Digitale")
- [ ] Gemini Code Assist installé dans VS Code
- [ ] `.vscode/gemini-instructions.md` présent
- [ ] Documentation `/migration-frontend/` lue

### Pour Chaque Tâche

- [ ] **Prompt créé** dans Gemini 2.5 Pro App
- [ ] **Prompt optimisé** (contraintes Design System incluses)
- [ ] **Code généré** dans Gemini Code Assist
- [ ] **Design System validé** (checklist manuelle)
- [ ] **Responsive testé** (3 breakpoints)
- [ ] **TypeScript compile** (`npm run type-check`)
- [ ] **Lighthouse > 90** (si page)
- [ ] **Commit** avec message clair

---

## 🎯 RÉSUMÉ

### Ton Workflow

```
GEMINI 2.5 PRO (App)
  ↓ Prompt détaillé + Design System
  
COPIER
  ↓
  
GEMINI CODE ASSIST (VS Code)
  ↓ Coller + Exécuter
  
CODE GÉNÉRÉ
  ↓
  
VALIDATION
  ↓ Checklist + Tests
  
COMMIT ✅
```

### Tes Outils

1. **Gemini 2.5 Pro App** : Créateur de prompts optimaux
2. **Gemini Code Assist** : Générateur de code
3. `/migration-frontend/` : Documentation référence
4. `.vscode/gemini-instructions.md` : Contexte auto Gemini Code Assist

---

**🤖 Workflow Gemini Maîtrisé ! 💪**

**Prêt à automatiser la migration avec Gemini !** 🚀
