# 🧠 CONTEXTE PROJET : MIGRATION REACT VERS ASTRO (CONFLUENCE DIGITALE)

Ce fichier définit les règles absolues pour l'assistant IA (Gemini 3 Pro).
**Tu dois consulter ce fichier avant chaque réponse.**

## 1. 🎯 OBJECTIF

Migrer une application React "Hifi" (prototype Figma Make) vers une architecture **Astro SSR de production**.

- **Source (Legacy) :** Dossier `_LEGACY_REACT/` (Lecture seule).
- **Cible (Prod) :** Dossier `src/`.
- **Qualité attendue :** Pixel-Perfect (Clonage visuel) + Lighthouse 100/100.

## 2. 🛠️ STACK TECHNIQUE (STRICT)

- **Framework :** Astro 5.x
- **Mode :** SSR (`output: 'server'`)
- **Déploiement :** Vercel (`adapter: vercel()`)
- **Styling :** **Tailwind CSS v3.4** (⚠️ INTERDICTION d'utiliser Tailwind v4 / Vite plugin).
- **UI Library :** React 19 (Uniquement pour les "Islands" interactifs).
- **Backend :** Strapi (via `src/utils/strapi.ts`).

## 3. 🎨 DESIGN SYSTEM & RÈGLES VISUELLES

**Source de vérité :** `.gemini/specs/design-system.md`

- **Typographie :**
  - Titres : `Playfair Display` (⚠️ RÈGLES ABSOLUE : `font-weight: 400` uniquement, jamais de bold).
  - Corps : `Inter`.
- **Couleurs :** Utiliser les tokens sémantiques (`text-premium`, `bg-contractual`, `bg-cta`). Ne jamais hardcoder d'hexadécimal.
- **Ombres :** Utiliser `shadow-elevated`, `shadow-hover` (définis dans `tailwind.config.mjs`). Pas de styles inline `boxShadow`.
- **Animations :** Utiliser `<Reveal>` et `<PageHeader>` (basés sur `motion/react`).

## 4. 🏗️ ARCHITECTURE & HYDRATATION

**Source de vérité :** `.gemini/specs/architecture.md`

- **Statique par défaut :** Tout ce qui peut être HTML pur DOIT être HTML pur (`.astro`).
- **Islands :** Seuls les composants nécessitant un `state` ou des événements sont en React (`.tsx`).
- **Directives :**
  - `client:load` : Uniquement pour le Hero (LCP) et les Formulaires critiques.
  - `client:visible` : Pour les animations (`Reveal`) et sections secondaires (FAQ).
  - `client:idle` : Pour les widgets non critiques.

## 5. 📝 MÉTHODE DE TRAVAIL (WORKFLOW)

Pour chaque tâche de migration :

1. **Analyser :** Lire le fichier source dans `_LEGACY_REACT`.
2. **Cloner :** Copier LITTÉRALEMENT les classes Tailwind et la structure HTML. Ne pas essayer de "simplifier" le design.
3. **Nettoyer :** Convertir les styles inline React (`style={{}}`) en classes Tailwind ou attributs `style=""`.
4. **Optimiser :** Remplacer `<img>` par `<Image />` (astro:assets).

## 6. ⛔ ANTI-PATTERNS (CE QU'IL NE FAUT PAS FAIRE)

- ❌ Ne jamais installer `@tailwindcss/vite` (v4).
- ❌ Ne jamais modifier le contenu du dossier `_LEGACY_REACT`.
- ❌ Ne jamais mettre de logique métier dans les composants `.astro` (utiliser les utilitaires).
- ❌ Ne jamais utiliser de CDN pour les polices (utiliser `@fontsource`).

## 7. 📂 STRUCTURE CLÉ

- `src/components/ui/` : Composants atomiques (Button, Card).
- `src/components/islands/` : Composants React interactifs avec état.
- `src/components/features/` : Blocs statiques Astro réutilisables.
- `src/pages/` : Routes (Routing fichier).
- `src/utils/` : Logique (API Strapi, Animations).
