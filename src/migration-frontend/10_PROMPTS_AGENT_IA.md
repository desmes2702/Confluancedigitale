# 🤖 PROMPTS POUR AGENT IA

**Outils** : Cursor, Windsurf, Claude Code, GitHub Copilot  
**Objectif** : Automatiser la migration avec précision

---

## 🎯 PROMPT INITIAL (Configuration Agent)

### Pour Cursor / Windsurf

**Créer** : `.cursorrules` à la racine du projet

```markdown
# Agent Frontend - Confluence Digitale V6.7.2

Tu es un expert en migration React → Astro avec spécialisation Design System V6.7.2.

## 📚 Documentation Prioritaire (Lire TOUJOURS)

1. **/migration-frontend/** - Tous les fichiers (10 documents)
2. **/doc/01_DESIGN_SYSTEM_V6.7.md** - Bible du Design
3. **/doc/PAGES_COMPLETE_GUIDE.md** - Structure des 14 pages
4. **/doc/FORM_VALIDATION_REFERENCE.md** - Logique formulaires

## 🎨 Design System V6.7.2 - RÈGLES ABSOLUES

### Palette de Couleurs (SEULES autorisées)
- Background : #F9FAFB (Gris Clair Éclatant)
- Texte : #1A1A1A (Noir Mat)
- Premium : #D1A65E (Or/Cuivre - Antoine)
- CTA : #10b981 (Vert - Pascal)
- Contractuel : #A32E3A (Rouge Bordeaux - Laly)
- Blanc : #FFFFFF (Cartes)

### Typographie
- Titres : Playfair Display Regular (400) - JAMAIS font-bold
- Body : Inter Regular (400)
- Classes : font-playfair (titres), font-inter (body)

### Espacement CRITIQUES
- Hero Padding : pt-28 lg:pt-32 (BATCH 21 - OBLIGATOIRE)
- Sections : py-16 lg:py-24
- Padding Horizontal : px-4 sm:px-6 lg:px-8
- Formulaires : space-y-6 (BATCH 20B)
- Conteneur : max-w-7xl mx-auto

### Ombres
- INTERDIT : Classes Tailwind shadow-*
- OBLIGATOIRE : Inline style={{ boxShadow: '...' }}
- Carte standard : boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)'
- Badge Hero : boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.15)'

### Responsive (Mobile-First)
- Mobile : (défaut)
- Tablette : sm: (640px)
- Desktop : lg: (1024px)
- Ordre TOUJOURS : px-4 sm:px-6 lg:px-8

## 🔀 Workflow de Migration

### 1. Analyser le Composant
Question : Le composant a-t-il de l'interactivité ?
- ✅ OUI (useState, onClick, onChange) → Garder en React .tsx
- ❌ NON (contenu statique) → Convertir en Astro .astro

### 2. Format des Fichiers
- Pages : /src/pages/*.astro
- Composants React : /src/components/**/*.tsx
- Layouts : /src/layouts/*.astro
- Hooks : /src/hooks/*.ts

### 3. Hydratation Astro (CRITIQUE)
- client:load → Interactivité immédiate (Header, Menu mobile)
- client:visible → Lazy loading (FAQ, Footer, sections scroll)
- Aucune directive → Statique (texte, images)

### 4. Imports
❌ INTERDIT : 'use client' (syntaxe Next.js, pas Astro)
✅ CORRECT : Pas de directive spéciale dans React components

## 🚨 ERREURS À NE JAMAIS COMMETTRE

1. ❌ Mettre font-bold sur Playfair Display
2. ❌ Utiliser classes shadow-* au lieu de style inline
3. ❌ Hero padding différent de pt-28 lg:pt-32
4. ❌ Formulaires avec space-y-4 ou space-y-8 (DOIT être space-y-6)
5. ❌ Couleurs hors palette Design System
6. ❌ Oublier l'hydratation sur composants React
7. ❌ Utiliser 'use client' dans composants React
8. ❌ Logo Footer en Or (DOIT être blanc text-white)

## ✅ TOUJOURS FAIRE

1. ✅ Lire la documentation dans /migration-frontend/ avant toute action
2. ✅ Respecter le Design System V6.7.2 à 100%
3. ✅ Tester responsive (mobile, tablette, desktop)
4. ✅ Ajouter alt text sur TOUTES les images
5. ✅ Utiliser TypeScript strict (pas de any)
6. ✅ Valider formulaires avec états touched
7. ✅ Commenter le code complexe
8. ✅ Lighthouse > 90 sur toutes métriques

## 📝 Structure Réponse Attendue

Quand je te demande de migrer/créer un composant :

1. **Analyse** : Type de composant (interactif ou statique)
2. **Format** : .tsx ou .astro (avec justification)
3. **Code** : Composant complet avec :
   - Types TypeScript
   - Design System V6.7.2 respecté
   - Responsive mobile-first
   - Hydratation Astro (si React)
   - Commentaires si complexe
4. **Validation** : Checklist (couleurs, typo, espacement)

## 🎯 Exemple de Réponse Attendue

Prompt : "Migre ConfluenceOffrePage.tsx en Astro"

Réponse :
```
1. Analyse : Page avec sections statiques + composants React (formulaire)
2. Format : Page Astro (.astro) important composants React
3. Code : [Code complet]
4. Validation :
   ✅ Hero padding pt-28 lg:pt-32
   ✅ Palette respectée
   ✅ Ombres inline
   ✅ Responsive mobile-first
```

## 🔧 Commandes Disponibles

- npm run dev → Serveur dev (localhost:4321)
- npm run build → Build production
- npm run preview → Preview build
- lighthouse [URL] --view → Test performance

---

Tu es maintenant configuré pour respecter le Design System V6.7.2 à 100% !
```

---

## 💬 PROMPTS FRÉQUENTS

### Prompt #1 : Migrer une Page Complète

```
Migre la page /pages/ConfluenceOffrePage.tsx vers /src/pages/offre.astro.

Règles :
1. Consulte /doc/offre/PAGE-OFFRE-DOCUMENTATION-COMPLETE.md pour la structure
2. Respecte le Design System V6.7.2 (/migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md)
3. Utilise BaseLayout.astro avec SEO complet
4. Hero padding : pt-28 lg:pt-32
5. Composants React avec hydratation appropriée (client:load ou client:visible)

Génère :
- Le fichier offre.astro complet
- La liste des composants React à créer (si manquants)
- La checklist de validation
```

---

### Prompt #2 : Créer un Composant React

```
Crée un composant React ConfluenceTestimonials.tsx pour afficher 3 témoignages clients.

Spécifications :
1. Design System V6.7.2 strict
2. Grille responsive : 1 col mobile, 2 cols tablette, 3 cols desktop
3. Chaque carte : bg-white, ombres inline, rounded-lg
4. Contenu : citation + nom + rôle + entreprise
5. TypeScript strict avec interface TestimonialProps

Structure :
- Section : py-16 lg:py-24, px-4 sm:px-6 lg:px-8
- Container : max-w-7xl mx-auto
- Titre H2 : font-playfair text-3xl lg:text-5xl mb-12
- Grille : grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

Génère le composant complet avec 3 témoignages d'exemple.
```

---

### Prompt #3 : Créer un Formulaire Validé

```
Crée un formulaire de contact React avec validation complète.

Champs :
- Nom (min 2 caractères)
- Email (format email valide)
- Message (min 10 caractères)

Règles :
1. Design System V6.7.2
2. space-y-6 entre champs (BATCH 20B)
3. États touched pour chaque champ
4. Validation temps réel
5. Bordure rouge si invalide + message erreur
6. CTA désactivé si formulaire invalide
7. Loading state pendant submit
8. Message succès après submit

Génère :
- Le composant complet avec TypeScript
- Les interfaces FormData et TouchedFields
- La logique de validation
- Les handlers (onChange, onBlur, onSubmit)
```

---

### Prompt #4 : Corriger un Bug Design System

```
Le composant ConfluenceTeamBlock.tsx ne respecte pas le Design System V6.7.2.

Problèmes identifiés :
- Titre utilise font-bold (INTERDIT sur Playfair)
- Ombres utilisent shadow-lg (INTERDIT)
- Hero padding est pt-20 (DOIT être pt-28 lg:pt-32)
- Couleur custom #FF5733 (hors palette)

Corrige le composant en respectant :
1. /migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md
2. Titres : font-playfair (sans bold)
3. Ombres : style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
4. Hero : pt-28 lg:pt-32
5. Palette autorisée uniquement

Génère le composant corrigé avec commentaires expliquant les changements.
```

---

### Prompt #5 : Optimiser Performance

```
Optimise la page /src/pages/index.astro pour Lighthouse 100/100.

Analyse actuelle :
- Performance : 75/100
- Accessibilité : 85/100
- Best Practices : 90/100
- SEO : 95/100

Optimisations à appliquer :
1. Images : lazy loading + WebP + dimensions explicites
2. Hydratation : client:visible au lieu de client:load (sauf Header)
3. Fonts : preconnect Google Fonts
4. Meta : ajouter description + OG image
5. Alt text : vérifier toutes les images
6. Contraste : vérifier textes < 4.5:1

Génère :
- Le fichier index.astro optimisé
- La liste des changements effectués
- Les scores Lighthouse attendus après optimisation
```

---

### Prompt #6 : Rendre Responsive

```
Le composant ConfluenceHeroSection.tsx n'est pas responsive.

Problèmes :
- Texte trop grand sur mobile (déborde)
- Image non adaptée (ratio cassé)
- Boutons trop larges sur mobile
- Espacement non responsive

Rends-le responsive selon Design System V6.7.2 :
1. Titre : text-4xl lg:text-6xl
2. Description : text-base lg:text-xl
3. Padding : px-4 sm:px-6 lg:px-8
4. Section : pt-28 lg:pt-32
5. Image : w-full lg:w-1/2
6. Boutons : flex-col sm:flex-row

Génère le composant responsive testé sur :
- Mobile (375px)
- Tablette (768px)
- Desktop (1280px)
```

---

### Prompt #7 : Ajouter l'Accessibilité

```
Améliore l'accessibilité du composant ConfluenceFAQ.tsx pour WCAG AA.

Manquements actuels :
- Pas de labels ARIA sur accordéons
- Focus non visible
- Contraste insuffisant sur certains textes
- Navigation clavier non optimale

Ajoute :
1. aria-expanded sur boutons accordéon
2. aria-controls + aria-labelledby
3. Focus visible avec ring-2 ring-emerald-500
4. Contraste > 4.5:1 sur tous textes
5. Navigation clavier (Enter, Space, Tab)

Génère le composant accessible avec :
- ARIA complet
- Focus management
- Keyboard navigation
- Contraste validé
```

---

### Prompt #8 : Intégrer Triade Professionnelle

```
Ajoute la Triade Professionnelle (BATCH 48 V10) à la page Méthode.

Profils :
1. Antoine - Architecte UX/UI - Or #D1A65E - "Performance 100/100"
2. Pascal - Conseiller Numérique - Vert #10b981 - "Stratégie ROI"
3. Laly - Enseignante - Rouge #A32E3A - "Formation Autonomie"

Structure :
- Section : py-16 lg:py-24
- Grille : 1 col mobile, 3 cols desktop
- Chaque carte : photo + nom + rôle + citation + couleur accent

Respecte :
1. Design System V6.7.2
2. Couleurs spécifiques par profil
3. Citations alignées avec périmètre
4. Responsive mobile-first

Génère le composant ConfluenceTriadeBlock.tsx complet.
```

---

### Prompt #9 : Débugger Hydratation

```
Le composant ConfluenceContactForm.tsx ne s'affiche pas sur la page /contact.astro.

Code actuel :
```astro
<ConfluenceContactForm />
```

Problème probable : Hydratation manquante.

Corrige :
1. Ajoute la directive d'hydratation appropriée
2. Justifie le choix (client:load vs client:visible)
3. Teste que le formulaire est bien interactif
4. Vérifie que la validation fonctionne

Génère :
- Le code Astro corrigé
- L'explication du choix d'hydratation
- La checklist de test
```

---

### Prompt #10 : Audit Complet

```
Fais un audit complet du projet selon /migration-frontend/06_CHECKLIST.md.

Vérifie :
1. Design System V6.7.2 (14 pages)
2. Performance Lighthouse (14 pages)
3. Responsive (3 breakpoints)
4. Accessibilité WCAG AA
5. SEO (title, description, sitemap)
6. TypeScript (aucune erreur)
7. Formulaires (validation)
8. Liens (tous fonctionnels)

Génère :
- Rapport d'audit complet (format Markdown)
- Score par page (Lighthouse)
- Liste des non-conformités
- Plan d'action priorisé
- Estimation temps correction
```

---

## 🎯 PROMPTS AVANCÉS

### Prompt #11 : Migration Batch

```
Migre les 5 pages légales en batch :
1. Mentions Légales
2. CGV
3. Politique de Confidentialité
4. Cookies
5. 404

Pour chaque page :
1. Crée /src/pages/[nom].astro
2. Structure simple (titre + contenu texte)
3. Design System V6.7.2
4. SEO complet
5. Responsive

Génère :
- Les 5 fichiers .astro
- Le rapport de migration (temps, conformité)
- La checklist de validation pour chaque page
```

---

### Prompt #12 : Refactoring Design System

```
Refactorise tous les composants du projet pour respecter Design System V6.7.2.

Scanne le projet et identifie :
1. Composants avec font-bold sur Playfair
2. Composants avec classes shadow-*
3. Hero sections avec padding incorrect
4. Couleurs hors palette
5. Formulaires avec spacing incorrect

Pour chaque problème :
1. Liste le fichier concerné
2. Indique la ligne du problème
3. Propose la correction
4. Génère le code corrigé

Génère :
- Rapport d'audit Design System
- Fichiers corrigés
- Temps estimé de correction
```

---

### Prompt #13 : Créer Test Suite

```
Crée une suite de tests pour valider le Design System V6.7.2.

Tests à créer :
1. Test couleurs (palette respectée)
2. Test typographie (Playfair sans bold)
3. Test espacement (Hero padding, sections)
4. Test responsive (3 breakpoints)
5. Test accessibilité (contraste, alt text)

Utilise :
- Vitest pour tests unitaires
- Playwright pour tests E2E
- axe-core pour accessibilité

Génère :
- Configuration Vitest + Playwright
- Tests complets par catégorie
- Script npm run test
- Documentation tests
```

---

## 🔧 PROMPTS UTILITAIRES

### Générer Documentation Composant

```
Génère la documentation complète du composant ConfluenceHeaderV6_7.tsx.

Inclus :
1. Description fonctionnelle
2. Props (interface TypeScript)
3. Exemple d'utilisation
4. Hydratation Astro
5. Variants (desktop, mobile)
6. Design System appliqué
7. Accessibilité
8. Performance

Format : Markdown avec code examples.
```

---

### Générer Rapport Migration

```
Génère un rapport de migration complet du projet.

Sections :
1. État initial (React pur)
2. État final (Astro + React Islands)
3. Métriques Performance (avant/après Lighthouse)
4. Composants migrés (liste + status)
5. Pages migrées (liste + status)
6. Problèmes rencontrés + solutions
7. Recommandations futures
8. Checklist production

Format : Markdown professionnel avec tableaux et métriques.
```

---

### Générer Checklist Page

```
Génère une checklist spécifique pour la page /offre.astro.

Basée sur /migration-frontend/06_CHECKLIST.md mais adaptée à la page Offre :
- Sections spécifiques (Pack, Tarifs, Garanties)
- Composants utilisés (AvailabilityBlock, ContractualReassuranceBlock)
- SEO spécifique (keywords, description)
- Conversions (CTA Audit Gratuit)

Format : Markdown avec checkboxes.
```

---

## 📚 RESSOURCES POUR PROMPTS

### Fichiers à Référencer

```
Documentation Design System :
- /migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md
- /doc/01_DESIGN_SYSTEM_V6.7.md

Documentation Pages :
- /doc/PAGES_COMPLETE_GUIDE.md
- /doc/landing/PAGE-LANDING-DOCUMENTATION.md
- /doc/offre/PAGE-OFFRE-DOCUMENTATION-COMPLETE.md

Templates :
- /migration-frontend/05_TEMPLATES.md

Checklists :
- /migration-frontend/06_CHECKLIST.md

Exemples :
- /migration-frontend/09_EXEMPLES_MIGRATION.md
```

---

## 🎓 CONSEILS D'UTILISATION

### Pour Cursor

1. Créer `.cursorrules` avec le prompt initial
2. Utiliser `Ctrl+K` (chat) ou `Ctrl+I` (inline edit)
3. Référencer les docs avec `@/migration-frontend/`
4. Tester avec `Ctrl+Shift+P` > "Run Task"

### Pour Windsurf

1. Créer `.windsurfrules` (similaire à .cursorrules)
2. Utiliser le mode Cascade pour migrations complexes
3. Flows pour automatiser les tâches répétitives

### Pour Claude Code

1. Copier le prompt initial dans le chat
2. Référencer les docs manuellement (copier-coller sections)
3. Demander validation étape par étape

---

**🤖 Prompts Prêts ! Automatisez la Migration ! 🚀**

**Prochaine lecture** : `/doc/01_DESIGN_SYSTEM_V6.7.md` (Bible Design)
