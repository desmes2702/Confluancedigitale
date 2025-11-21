# 🧠 CONTEXTE PROJET : MIGRATION REACT VERS ASTRO (CONFLUENCE DIGITALE)

Ce fichier est la **CONSTITUTION** du projet. L'Agent doit s'y référer avant chaque ligne de code.

## 1. 🎯 OBJECTIF SUPRÊME
Migrer le prototype Figma Make (`_LEGACY_REACT`) vers Astro SSR (`src`) avec deux impératifs :
1.  **Fidélité Visuelle 100% :** Aucun changement de design accepté (Pixel Perfect).
2.  **Performance 100/100 :** Zéro TBT, LCP optimisé, CLS nul.

## 2. 🛠️ STACK TECHNIQUE (STRICT & IMMUABLE)
- **Core :** Astro 5.x (Mode SSR `output: 'server'`).
- **Hosting :** Vercel (`adapter: vercel()`).
- **Style :** **Tailwind CSS v3.4**
  - ⛔ **INTERDICTION ABSOLUE** d'installer Tailwind v4 ou `@tailwindcss/vite`.
  - ✅ Utiliser `tailwind.config.mjs` classique.
- **Interactive UI :** React 19 (Islands uniquement).
- **Data :** Strapi (via `src/utils/strapi.ts`).

## 3. 🔮 ANTI-FRICTION & TROUBLESHOOTING (LEÇONS APPRISES)
*Ces règles corrigent des erreurs critiques rencontrées lors de la Session 1.*

### A. Sécurité Git (Anti-Destruction)
- ⛔ **INTERDICTION TOTALE** d'utiliser des commandes destructrices : `git reset --hard`, `git clean`, `rm -rf`.
- ✅ Utiliser `git restore <fichier>` pour annuler des changements locaux.
- ✅ Toujours vérifier que le travail est commité avant une grosse modification.

### B. Stabilité du Code (Anti-Crash Build)
- ⛔ **Pas de Fragments JSX complexes dans les props Astro.**
  - *Mauvais :* `title={<>Du texte <span.../></>}`
  - *Bon :* Utiliser des `<div>` ou passer le HTML brut.
- ✅ **SVGs Complexes :** Pour les icônes SVG complexes, utiliser `<Fragment set:html={svgString} />`.

### C. Intégrité Astro (Anti-Compiler Panic)
- ⛔ **INTERDICTION** de commencer un fichier `.astro` directement par des `import`.
- ✅ **OBLIGATOIRE :** Tout fichier `.astro` DOIT commencer par `---` (ligne 1) et se fermer par `---` avant le template HTML.
- *Note :* L'oubli des tirets provoque l'erreur fatale `panic: html: bad parser state`.

### D. Gestion de Mémoire
- ⛔ Ne jamais scanner tout le dossier `_LEGACY_REACT` d'un coup.

## 4. ⚡ RÈGLES DE PERFORMANCE (LIGHTHOUSE 100)
- **Images :**
  - Remplacer `<img>` par `<Image />` (`astro:assets`).
  - Hero = `loading="eager"`. Autres = `loading="lazy"`.
  - Dimensions explicites obligatoires.
- **Hydratation :**
  - `client:load` : Réservé aux formulaires et éléments critiques.
  - `client:visible` : Pour tout le reste (Animations Reveal).
- **Polices :** Utiliser `@fontsource` (Inter/Playfair). Pas de CDN.

## 5. 🎨 MÉTHODE DE CLONAGE (DESIGN SYSTEM)
**Source de vérité :** `.gemini/specs/design-system.md`
- **Clonage Littéral :** Copier les classes Tailwind (`className`) exactes du Legacy.
- **Règle Typo :** `Playfair Display` est toujours `font-weight: 400`. **Jamais de Bold.**
- **Animations :** Utiliser les utilitaires `src/components/ui/Reveal.tsx` et `PageHeader.tsx`.

## 6. 📂 STRUCTURE CIBLE
- `src/pages/` : Routes Astro (Majoritairement HTML statique).
- `src/components/ui/` : Composants atomiques (Boutons, Cards).
- `src/components/islands/` : Logique React complexe (Formulaires, State).
- `src/layouts/` : `MainLayout.astro`.