# 🚀 DÉPLOIEMENT VERCEL PRO

**Objectif** : Déployer Confluence Digitale V6.7.2 sur Vercel Pro  
**Prérequis** : Compte Vercel Pro, Git repository configuré  
**Temps** : 30 minutes (premier déploiement)

---

## 🎯 POURQUOI VERCEL PRO ?

### Avantages Vercel pour Astro

| Feature | Vercel Free | Vercel Pro | Confluence Digitale |
|---------|-------------|------------|---------------------|
| **Build Minutes** | 6,000/mois | Unlimited | ✅ Pro requis |
| **Bandwidth** | 100 GB | 1 TB | ✅ Pro requis |
| **Concurrent Builds** | 1 | 10 | ✅ Pro pour CI/CD |
| **Analytics** | Basique | Advanced | ✅ Pro requis |
| **Edge Functions** | 100k invocations | 1M invocations | ✅ Pro pour API |
| **Support** | Community | Priority | ✅ Pro requis |
| **Domains** | Limité | Unlimited | ✅ Pro pour multi-env |

### Performance Astro + Vercel

- ✅ **SSG natif** : Pages statiques ultra-rapides
- ✅ **Edge Network** : CDN global automatique
- ✅ **Zero Config** : Détection automatique Astro
- ✅ **Incremental Builds** : Build rapide (uniquement pages modifiées)
- ✅ **Image Optimization** : Compression automatique
- ✅ **Analytics Temps Réel** : Core Web Vitals

---

## 📦 ÉTAPE 1 : PRÉPARATION PROJET

### 1.1 Configuration `astro.config.mjs`

**Fichier** : `/astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static'; // Adapter Vercel

// https://astro.build/config
export default defineConfig({
  // Intégrations
  integrations: [
    react(),
    tailwind()
  ],
  
  // Adapter Vercel (déploiement statique)
  output: 'static',
  adapter: vercel({
    // Configuration analytics Vercel
    webAnalytics: {
      enabled: true
    },
    // Configuration image optimization
    imageService: true,
    // Configuration edge functions (si besoin)
    edgeMiddleware: false
  }),
  
  // Site URL (production)
  site: 'https://confluence-digitale.fr',
  
  // Base path (si sous-domaine)
  // base: '/',
  
  // Optimisation build
  build: {
    inlineStylesheets: 'auto',
    // Génération sitemap
    sitemap: true
  },
  
  // Configuration images
  image: {
    // Service Vercel (WebP, AVIF automatique)
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  
  // Configuration serveur dev
  server: {
    port: 3000,
    host: true
  },
  
  // Prefetch automatique (performance)
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});
```

---

### 1.2 Installation Adapter Vercel

```bash
npm install @astrojs/vercel
```

---

### 1.3 Configuration `package.json`

**Fichier** : `/package.json`

```json
{
  "name": "confluence-digitale-v6.7.2",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "type-check": "tsc --noEmit",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx,.astro",
    "format": "prettier --write ."
  },
  "dependencies": {
    "astro": "^4.0.0",
    "@astrojs/react": "^3.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "@astrojs/vercel": "^7.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.4.0",
    "lucide-react": "^0.300.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.3.0",
    "prettier": "^3.1.0",
    "eslint": "^8.55.0"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```

---

### 1.4 Configuration `.gitignore`

**Fichier** : `/.gitignore`

```bash
# Dependencies
node_modules/

# Build output
dist/
.astro/
.vercel/

# Environment variables
.env
.env.local
.env.production
.env.*.local

# IDE
.vscode/*
!.vscode/extensions.json
!.vscode/settings.json
!.vscode/gemini-instructions.md
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Testing
coverage/

# Temporary files
*.tmp
*.temp
```

---

## 🔐 ÉTAPE 2 : VARIABLES D'ENVIRONNEMENT

### 2.1 Fichier `.env.example`

**Créer** : `/.env.example` (committed dans Git)

```bash
# Strapi CMS API
PUBLIC_STRAPI_URL=https://api.confluence-digitale.fr
PUBLIC_STRAPI_TOKEN=your_read_only_token_here

# Vercel Analytics
PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id

# Google Analytics (si utilisé)
PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX

# Email service (si API email)
EMAIL_API_KEY=your_email_api_key
EMAIL_FROM=contact@confluence-digitale.fr

# Feature flags
PUBLIC_MAINTENANCE_MODE=false
PUBLIC_ENABLE_BLOG=true
```

---

### 2.2 Fichier `.env` (local dev)

**Créer** : `/.env` (JAMAIS commit, dans .gitignore)

```bash
# Strapi CMS API (local)
PUBLIC_STRAPI_URL=http://localhost:1337
PUBLIC_STRAPI_TOKEN=your_local_dev_token

# Autres configs locales
PUBLIC_ENABLE_DEBUG=true
```

---

### 2.3 Variables dans Vercel Dashboard

**Important** : Les variables `PUBLIC_*` sont exposées côté client.

| Variable | Environment | Valeur Production | Secret |
|----------|-------------|-------------------|--------|
| `PUBLIC_STRAPI_URL` | Production | `https://api.confluence-digitale.fr` | ❌ |
| `PUBLIC_STRAPI_TOKEN` | Production | `[Token Read-Only Strapi]` | ✅ |
| `PUBLIC_VERCEL_ANALYTICS_ID` | Production | Auto-généré | ❌ |
| `EMAIL_API_KEY` | Production | `[Clé API Email]` | ✅ |
| `EMAIL_FROM` | Production | `contact@confluence-digitale.fr` | ❌ |

**Ajouter dans Vercel** :
1. Vercel Dashboard → Projet → Settings → Environment Variables
2. Ajouter chaque variable
3. Sélectionner environnements : Production, Preview, Development

---

## 🌐 ÉTAPE 3 : DÉPLOIEMENT INITIAL

### 3.1 Via Vercel Dashboard (Recommandé première fois)

**Étapes** :

1. **Créer compte Vercel Pro**
   - Aller sur [vercel.com](https://vercel.com)
   - Sign up avec GitHub
   - Upgrade vers Pro (€20/mois)

2. **Importer projet**
   ```
   Dashboard → Add New → Project → Import Git Repository
   ```

3. **Configurer projet**
   ```
   Framework Preset: Astro (détection auto)
   Root Directory: ./
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   Node Version: 18.x
   ```

4. **Ajouter variables d'environnement**
   - Copier depuis .env.example
   - Remplir valeurs production
   - Marquer secrets si sensible

5. **Déployer**
   ```
   Deploy → Attendre build (2-5 min)
   ```

6. **Configurer domaine**
   ```
   Settings → Domains → Add Domain
   → confluence-digitale.fr
   → Configurer DNS (Vercel fournit les records)
   ```

---

### 3.2 Via Vercel CLI (Développeurs)

**Installation** :
```bash
npm install -g vercel
```

**Login** :
```bash
vercel login
```

**Premier déploiement** :
```bash
# À la racine du projet
vercel

# Répondre aux questions :
? Set up and deploy "~/confluence-digitale"? [Y/n] y
? Which scope? Your Team Name
? Link to existing project? [y/N] n
? What's your project's name? confluence-digitale
? In which directory is your code located? ./
```

**Déploiement production** :
```bash
vercel --prod
```

---

## 🔄 ÉTAPE 4 : CI/CD AUTOMATIQUE

### 4.1 Workflow Git

Vercel détecte automatiquement les pushs Git et déploie :

| Branch | Action | Déploiement | URL |
|--------|--------|-------------|-----|
| `main` | Push | Production | `https://confluence-digitale.fr` |
| `develop` | Push | Preview | `https://confluence-digitale-git-develop.vercel.app` |
| `feature/*` | Push | Preview | `https://confluence-digitale-git-feature-xxx.vercel.app` |
| PR | Create | Preview | `https://confluence-digitale-pr-123.vercel.app` |

---

### 4.2 Configuration Build

**Fichier** : `/vercel.json` (optionnel, config avancée)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "astro",
  "regions": ["cdg1"],
  "functions": {
    "api/**/*.ts": {
      "memory": 1024,
      "maxDuration": 10
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/_astro/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    }
  ],
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://api.confluence-digitale.fr/:path*"
    }
  ]
}
```

---

### 4.3 GitHub Actions (Optionnel - Tests avant déploiement)

**Fichier** : `/.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Type check
        run: npm run type-check
      
      - name: Lint
        run: npm run lint
      
      - name: Build
        run: npm run build
        env:
          PUBLIC_STRAPI_URL: ${{ secrets.PUBLIC_STRAPI_URL }}
          PUBLIC_STRAPI_TOKEN: ${{ secrets.PUBLIC_STRAPI_TOKEN }}
      
      - name: Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            https://confluence-digitale-preview.vercel.app/
          uploadArtifacts: true
          temporaryPublicStorage: true
```

---

## 📊 ÉTAPE 5 : MONITORING & ANALYTICS

### 5.1 Vercel Analytics

**Activation** :
1. Dashboard → Projet → Analytics
2. Enable Web Analytics (inclus dans Pro)

**Métriques disponibles** :
- ✅ Page Views
- ✅ Unique Visitors
- ✅ Top Pages
- ✅ Top Referrers
- ✅ Core Web Vitals (LCP, FID, CLS)
- ✅ Performance Score

**Intégration dans Astro** (automatique avec adapter Vercel)

---

### 5.2 Speed Insights

**Activation** :
1. Dashboard → Projet → Speed Insights
2. Enable (inclus dans Pro)

**Données collectées** :
- ✅ Real User Monitoring (RUM)
- ✅ Core Web Vitals temps réel
- ✅ Performance par page
- ✅ Performance par région
- ✅ Performance par device

---

### 5.3 Logs (Monitoring Erreurs)

**Accès logs** :
```bash
# Via CLI
vercel logs [deployment-url]

# Logs temps réel
vercel logs --follow
```

**Dashboard** :
- Vercel Dashboard → Projet → Deployments → [Deployment] → Logs

---

## 🔒 ÉTAPE 6 : SÉCURITÉ & PERFORMANCE

### 6.1 Headers de Sécurité

Déjà configurés dans `vercel.json` (voir 4.2) :
- ✅ `X-Content-Type-Options: nosniff`
- ✅ `X-Frame-Options: DENY`
- ✅ `X-XSS-Protection: 1; mode=block`
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`

---

### 6.2 Cache Stratégies

| Ressource | Cache-Control | Durée |
|-----------|---------------|-------|
| **HTML** | `public, max-age=0, must-revalidate` | Revalidate |
| **CSS/JS** | `public, max-age=31536000, immutable` | 1 an |
| **Images** | `public, max-age=31536000, immutable` | 1 an |
| **Fonts** | `public, max-age=31536000, immutable` | 1 an |
| **API** | `no-cache, no-store, must-revalidate` | Jamais |

---

### 6.3 CSP (Content Security Policy)

**Fichier** : `/public/_headers` (Vercel lit ce fichier)

```
/*
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://vercel.live; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.confluence-digitale.fr https://vercel.live;
```

---

## 🌍 ÉTAPE 7 : DOMAINE PERSONNALISÉ

### 7.1 Configuration DNS

**Chez votre registrar (ex: OVH, Cloudflare)** :

| Type | Nom | Valeur | TTL |
|------|-----|--------|-----|
| A | @ | 76.76.21.21 | Auto |
| CNAME | www | cname.vercel-dns.com. | Auto |

**Ou utiliser Vercel Nameservers** (recommandé) :
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

---

### 7.2 Ajout Domaine dans Vercel

1. Dashboard → Projet → Settings → Domains
2. Add Domain : `confluence-digitale.fr`
3. Add Domain : `www.confluence-digitale.fr`
4. Configure redirect : `www` → `confluence-digitale.fr` (ou inverse)

**Certificat SSL** : Automatique (Let's Encrypt), renouvelé automatiquement

---

## 🔄 ÉTAPE 8 : WORKFLOW QUOTIDIEN

### 8.1 Déploiement Développement

```bash
# 1. Travailler sur branche feature
git checkout -b feature/nouvelle-page

# 2. Développer + commit
git add .
git commit -m "feat: ajout page Services"

# 3. Push
git push origin feature/nouvelle-page

# 4. Vercel crée automatiquement Preview Deployment
# URL : https://confluence-digitale-git-feature-nouvelle-page.vercel.app

# 5. Tester preview, partager avec équipe

# 6. Merge vers develop
git checkout develop
git merge feature/nouvelle-page
git push origin develop

# 7. Vercel crée Preview Deployment de develop
# URL : https://confluence-digitale-git-develop.vercel.app

# 8. Valider, puis merge vers main
git checkout main
git merge develop
git push origin main

# 9. Vercel déploie automatiquement en PRODUCTION
# URL : https://confluence-digitale.fr
```

---

### 8.2 Rollback (si problème production)

**Via Dashboard** :
1. Vercel Dashboard → Projet → Deployments
2. Trouver le déploiement précédent (stable)
3. Cliquer sur "..." → "Promote to Production"
4. Confirmer → Rollback instantané

**Via CLI** :
```bash
# Lister déploiements
vercel ls

# Rollback vers déploiement spécifique
vercel rollback [deployment-url]
```

---

## 📈 ÉTAPE 9 : OPTIMISATIONS AVANCÉES

### 9.1 Edge Functions (si besoin API)

**Créer** : `/api/contact.ts`

```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', 'https://confluence-digitale.fr');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  
  if (req.method === 'POST') {
    const { email, message } = req.body;
    
    // Logique envoi email
    // ...
    
    return res.status(200).json({ success: true });
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}
```

**Configuration** : Déjà géré par adapter Vercel

---

### 9.2 Image Optimization

**Utiliser composant Astro Image** :

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<Image
  src={heroImage}
  alt="Hero Confluence Digitale"
  width={1920}
  height={1080}
  format="webp"
  quality={80}
  loading="lazy"
/>
```

**Vercel optimise automatiquement** :
- ✅ Génération WebP/AVIF
- ✅ Responsive images
- ✅ Lazy loading
- ✅ Cache agressif

---

### 9.3 Prerendering (SSG)

**Toutes les pages sont pré-générées** (SSG par défaut avec `output: 'static'`)

Si besoin SSR partiel :
```javascript
// astro.config.mjs
export default defineConfig({
  output: 'hybrid', // SSG + SSR
  adapter: vercel()
});
```

---

## ✅ CHECKLIST DÉPLOIEMENT

### Avant Premier Déploiement

- [ ] `astro.config.mjs` configuré avec adapter Vercel
- [ ] `@astrojs/vercel` installé
- [ ] `.env.example` créé avec toutes les variables
- [ ] `.gitignore` configuré (pas de .env committed)
- [ ] `vercel.json` créé (headers, redirects)
- [ ] Git repository initialisé et poussé
- [ ] Compte Vercel Pro créé
- [ ] Variables d'environnement notées (Strapi token, etc.)

### Déploiement

- [ ] Projet importé dans Vercel
- [ ] Variables d'environnement ajoutées dans Dashboard
- [ ] Build réussi (vérifier logs)
- [ ] Preview deployment testé
- [ ] Domaine personnalisé configuré
- [ ] DNS configuré chez registrar
- [ ] SSL activé (automatique)
- [ ] Vercel Analytics activé
- [ ] Speed Insights activé

### Post-Déploiement

- [ ] Lighthouse > 90 sur toutes métriques
- [ ] Toutes les pages accessibles
- [ ] Formulaires fonctionnels
- [ ] Intégration Strapi OK
- [ ] Images optimisées (WebP)
- [ ] Fonts chargent correctement
- [ ] Responsive testé (mobile, tablette, desktop)
- [ ] SEO vérifié (meta tags, sitemap)
- [ ] Logs sans erreur
- [ ] Monitoring configuré

---

## 🎯 MÉTRIQUES SUCCÈS

### Lighthouse Targets (Post-déploiement)

| Métrique | Target | Vercel Optimisé |
|----------|--------|-----------------|
| **Performance** | > 90 | 95-100 |
| **Accessibilité** | > 90 | 95-100 |
| **Best Practices** | > 90 | 95-100 |
| **SEO** | > 90 | 95-100 |

### Core Web Vitals Targets

| Métrique | Target | Vercel Optimisé |
|----------|--------|-----------------|
| **LCP** | < 2.5s | < 1.5s |
| **FID** | < 100ms | < 50ms |
| **CLS** | < 0.1 | < 0.05 |

---

## 🐛 TROUBLESHOOTING

### Erreur : Build Failed

**Vérifier** :
1. Logs Vercel (Dashboard → Deployment → Build Logs)
2. Variables d'environnement présentes
3. `npm run build` fonctionne en local
4. Node version (18.x minimum)

---

### Erreur : 404 sur Pages

**Vérifier** :
1. Routes Astro correctes (`/src/pages/`)
2. Nommage fichiers (kebab-case)
3. Build output contient HTML générés

---

### Erreur : Strapi API Non Accessible

**Vérifier** :
1. Variable `PUBLIC_STRAPI_URL` correcte
2. CORS configuré dans Strapi
3. Token Strapi valide
4. Network tab (DevTools) pour voir requête

---

## 📚 RESSOURCES

### Documentation Officielle

- [Vercel Docs](https://vercel.com/docs)
- [Vercel + Astro](https://vercel.com/docs/frameworks/astro)
- [Astro Deployment](https://docs.astro.build/en/guides/deploy/vercel/)

### Outils

- [Vercel CLI](https://vercel.com/docs/cli)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

**🚀 Déploiement Vercel Pro Maîtrisé ! 💪**

**Prêt pour production avec performance maximale !** ⚡

---

**Projet** : Confluence Digitale V6.7.2  
**Date** : Novembre 2025  
**Version** : 1.0
