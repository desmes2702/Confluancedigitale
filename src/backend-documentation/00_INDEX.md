# 📚 INDEX - DOCUMENTATION BACKEND STRAPI

**Projet** : Confluence Digitale V6.7.2 - Backend  
**Stack** : Strapi v4 + PostgreSQL + Cloudinary + Railway  
**Version Documentation** : 1.0 - Novembre 2025

---

## 🎯 INTRODUCTION

Cette documentation complète couvre **tous les aspects** du backend Strapi pour Confluence Digitale V6.7.2.

### Destinataires

- **Développeurs humains** : Instructions pas-à-pas
- **Agents IA** : Gemini Code Assist (via `.vscode/gemini-instructions.md`)
- **DevOps** : Déploiement, maintenance, backup

---

## 📂 STRUCTURE DOCUMENTATION

### Configuration Initiale

| Fichier | Description | Priorité | Temps |
|---------|-------------|----------|-------|
| **`.vscode/`** | Configuration VS Code + Gemini | ⭐⭐⭐⭐⭐ | 10 min |
| **GEMINI_BACKEND_CONFIGURATION.md** | Gem's Gemini 2.5 Pro | ⭐⭐⭐⭐⭐ | 15 min |
| **00_WORKFLOW_GEMINI_BACKEND.md** | Workflow 4 étapes | ⭐⭐⭐⭐⭐ | 10 min |

### Documentation Technique (01-09)

| Fichier | Contenu | Priorité | Temps |
|---------|---------|----------|-------|
| **01_STRAPI_SETUP.md** | Installation Strapi (local + prod) | ⭐⭐⭐⭐⭐ | 30 min |
| **02_CONTENT_TYPES.md** | 7 Content Types (Page, Article, etc.) | ⭐⭐⭐⭐⭐ | 45 min |
| **03_API_ENDPOINTS.md** | Routes REST + Query params | ⭐⭐⭐⭐ | 20 min |
| **04_AUTHENTIFICATION.md** | JWT, permissions, rôles | ⭐⭐⭐⭐ | 25 min |
| **05_DEPLOYMENT_PRODUCTION.md** | Déploiement Railway | ⭐⭐⭐⭐⭐ | 40 min |
| **06_DATABASE_POSTGRESQL.md** | PostgreSQL local/prod | ⭐⭐⭐ | 30 min |
| **07_MEDIA_CLOUDINARY.md** | Upload images CDN | ⭐⭐⭐ | 25 min |
| **08_WEBHOOKS_INTEGRATION.md** | Webhooks Vercel | ⭐⭐ | 20 min |
| **09_MAINTENANCE_BACKUP.md** | Backup, monitoring | ⭐⭐ | 30 min |

### Validation & Synthèse

| Fichier | Description |
|---------|-------------|
| **VALIDATION_COHERENCE.md** | Audit cohérence frontend ↔ backend |
| **README.md** | Ce fichier (index global) |

---

## 🚀 QUICK START

### Pour Débutants (Jamais utilisé Strapi)

**Parcours recommandé** :

1. ✅ **Installation** → `01_STRAPI_SETUP.md` (30 min)
2. ✅ **Créer Content Types** → `02_CONTENT_TYPES.md` (45 min)
3. ✅ **Tester API** → `03_API_ENDPOINTS.md` (20 min)
4. ✅ **Permissions** → `04_AUTHENTIFICATION.md` (25 min)
5. ✅ **Déployer** → `05_DEPLOYMENT_PRODUCTION.md` (40 min)

**Temps total** : ~3 heures (backend complet fonctionnel) ✅

---

### Pour Développeurs Expérimentés

**Parcours accéléré** :

1. ✅ `01_STRAPI_SETUP.md` → Installation (skim, focus PostgreSQL)
2. ✅ `02_CONTENT_TYPES.md` → Copier schemas JSON (10 min)
3. ✅ `05_DEPLOYMENT_PRODUCTION.md` → Railway one-click (20 min)

**Temps total** : ~30 minutes (skip détails) ✅

---

### Pour Agents IA (Gemini Code Assist)

**Setup unique** :

1. ✅ **Configuration Gem's** → `GEMINI_BACKEND_CONFIGURATION.md`
2. ✅ **Workflow** → `00_WORKFLOW_GEMINI_BACKEND.md`
3. ✅ **Instructions VS Code** → `.vscode/gemini-instructions.md` (auto-chargé)

**Usage quotidien** :
- Gemini charge automatiquement `.vscode/gemini-instructions.md`
- Référence automatique aux 9 fichiers techniques
- Génère code conforme aux règles absolues

---

## 📊 ARCHITECTURE BACKEND

### Stack Technique

```
┌─────────────────────────────────────────────────┐
│  FRONTEND (Astro - Vercel)                      │
│  https://confluence-digitale.fr                 │
└────────────┬────────────────────────────────────┘
             │
             │ API REST (JWT)
             ▼
┌─────────────────────────────────────────────────┐
│  BACKEND (Strapi v4 - Railway)                  │
│  https://api.confluence-digitale.fr             │
│                                                  │
│  ┌──────────────┐  ┌──────────────┐            │
│  │ Content      │  │ API REST     │            │
│  │ Types (7)    │  │ /api/*       │            │
│  └──────────────┘  └──────────────┘            │
└────────────┬────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────┐
│  DATABASE (PostgreSQL 15 - Railway)             │
│  Tables : pages, articles, services, etc.       │
└─────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────┐
│  MEDIA (Cloudinary CDN)                         │
│  Images optimisées + transformations auto       │
└─────────────────────────────────────────────────┘
```

---

### 7 Content Types Principaux

| Content Type | Slug | Usage | API Endpoint |
|--------------|------|-------|--------------|
| **Page** | `page` | Pages statiques (Offre, Contact) | `/api/pages` |
| **Article** | `article` | Blog posts | `/api/articles` |
| **Service** | `service` | Services offerts | `/api/services` |
| **Testimonial** | `testimonial` | Témoignages clients | `/api/testimonials` |
| **Team Member** | `team-member` | Triade (Antoine, Pascal, Laly) | `/api/team-members` |
| **FAQ** | `faq` | Questions fréquentes | `/api/faqs` |
| **Contact** | `contact` | Messages formulaire | `/api/contacts` |

**Détails complets** : `02_CONTENT_TYPES.md`

---

## 🔑 CONCEPTS CLÉS

### 1. Strapi CMS Headless

**Qu'est-ce que c'est ?**
- CMS backend-only (pas de frontend intégré)
- API REST automatique pour chaque Content Type
- Admin Panel graphique pour gérer contenu

**Avantages** :
- ✅ Frontend découplé (Astro, React, Vue, etc.)
- ✅ API REST standard (facile à consommer)
- ✅ Évolutivité (microservices)

---

### 2. Content Types vs Components

**Content Types** :
- Collections de données (ex: Article, Service)
- Ont leur propre table DB
- Endpoint API dédié

**Components** :
- Blocs réutilisables (ex: SEO, Feature)
- Pas d'endpoint API propre
- Utilisés dans Content Types

**Exemple** :
```
Content Type : Article
  ├── title (string)
  ├── slug (uid)
  └── seo (Component SEO) ← réutilisable
      ├── metaTitle
      └── metaDescription
```

---

### 3. Permissions & Rôles

**3 niveaux d'accès** :

| Rôle | Accès | Tokens | Usage |
|------|-------|--------|-------|
| **Public** | Lecture seule | Read-Only Token (public) | Frontend Astro |
| **Authenticated** | CRUD limité | JWT User Token | Utilisateurs connectés |
| **Admin** | Full control | Admin Token (secret) | Backend, Webhooks |

**Configuration** : `04_AUTHENTIFICATION.md`

---

### 4. Webhooks Vercel

**Workflow automatique** :

```
Admin publie Article (Strapi)
  ↓
Webhook déclenché
  ↓
Vercel rebuild frontend (Astro)
  ↓
Nouveau contenu visible (frontend)
```

**Configuration** : `08_WEBHOOKS_INTEGRATION.md`

---

## ⚙️ WORKFLOW GEMINI (4 ÉTAPES)

### Étape 1 : Gem's (Gemini 2.5 Pro App)

**Créer prompt optimisé** pour Gemini Code Assist

**Gem's configuré** : `GEMINI_BACKEND_CONFIGURATION.md`

---

### Étape 2 : Code Assist (VS Code)

**Coller prompt** → Gemini génère code Strapi

**Auto-chargement** : `.vscode/gemini-instructions.md`

---

### Étape 3 : Validation

**Tester** :
- API avec Thunder Client / curl
- Database avec PostgreSQL Client
- Logs Strapi (erreurs)

---

### Étape 4 : Commit & Deploy

**Git** :
```bash
git add .
git commit -m "feat: add Service Content Type"
git push
```

**Railway** : Auto-deploy (si configuré)

---

## 🛠️ OUTILS RECOMMANDÉS

### Extensions VS Code

| Extension | Utilité | Priorité |
|-----------|---------|----------|
| **Gemini Code Assist** | Agent IA backend | ⭐⭐⭐⭐⭐ |
| **ESLint** | Linter JavaScript | ⭐⭐⭐⭐⭐ |
| **Prettier** | Formatter code | ⭐⭐⭐⭐⭐ |
| **PostgreSQL Client** | Manager DB | ⭐⭐⭐⭐ |
| **Thunder Client** | Tester API | ⭐⭐⭐⭐ |

**Liste complète** : `.vscode/extensions.json`

---

### SaaS & Services

| Service | Usage | Plan |
|---------|-------|------|
| **Railway** | Hébergement Strapi + PostgreSQL | $5-20/mois |
| **Cloudinary** | CDN images | Free tier (25 crédits) |
| **Vercel** | Hébergement frontend Astro | Free tier |
| **AWS S3** | Backup database (optionnel) | ~$1/mois |

---

## 📋 CHECKLIST SETUP COMPLET

### Phase 1 : Installation Local (30 min)

- [ ] Node.js 20+ installé
- [ ] PostgreSQL installé (optionnel, SQLite OK local)
- [ ] Strapi créé (`npx create-strapi-app`)
- [ ] Premier lancement (`npm run develop`)
- [ ] Compte Admin créé
- [ ] `.env` configuré

**Guide** : `01_STRAPI_SETUP.md`

---

### Phase 2 : Content Types (45 min)

- [ ] Component SEO créé
- [ ] Component Feature créé
- [ ] Content Type Page créé
- [ ] Content Type Article créé
- [ ] Content Type Service créé
- [ ] Content Type Testimonial créé
- [ ] Content Type Team Member créé
- [ ] Content Type FAQ créé
- [ ] Content Type Contact créé

**Guide** : `02_CONTENT_TYPES.md`

---

### Phase 3 : Permissions (15 min)

- [ ] Permissions Public configurées (find, findOne)
- [ ] Token Read-Only créé
- [ ] Token Admin créé (sécurisé)
- [ ] CORS configuré (frontend autorisé)

**Guide** : `04_AUTHENTIFICATION.md`

---

### Phase 4 : Déploiement Production (40 min)

- [ ] Compte Railway créé
- [ ] PostgreSQL Railway provisionné
- [ ] Variables env configurées (Railway)
- [ ] Code pushé vers Git
- [ ] Strapi déployé (Railway)
- [ ] Database migrée
- [ ] API accessible (https://api.confluence-digitale.fr)

**Guide** : `05_DEPLOYMENT_PRODUCTION.md`

---

### Phase 5 : Intégration Frontend (20 min)

- [ ] Webhook Vercel créé
- [ ] Webhook Strapi configuré
- [ ] Test : Publier article → Vercel rebuild
- [ ] Frontend consomme API Strapi

**Guides** : 
- `08_WEBHOOKS_INTEGRATION.md` (backend)
- `/migration-frontend/14_INTEGRATION_STRAPI.md` (frontend)

---

### Phase 6 : Maintenance (optionnel)

- [ ] Backup automatique configuré (Railway)
- [ ] Backup externe configuré (S3/Backblaze)
- [ ] Monitoring activé (Railway metrics)
- [ ] Alertes configurées (email/Slack)

**Guide** : `09_MAINTENANCE_BACKUP.md`

---

## 🎯 PARCOURS PAR PROFIL

### Profil 1 : Développeur Full-Stack

**Objectif** : Backend + Frontend intégré

**Parcours** :
1. ✅ `01_STRAPI_SETUP.md` → Installation
2. ✅ `02_CONTENT_TYPES.md` → Structure données
3. ✅ `03_API_ENDPOINTS.md` → Tests API
4. ✅ `05_DEPLOYMENT_PRODUCTION.md` → Deploy Railway
5. ✅ `08_WEBHOOKS_INTEGRATION.md` → Sync Vercel
6. ✅ `/migration-frontend/14_INTEGRATION_STRAPI.md` → Frontend consomme API

**Temps** : 4-5 heures

---

### Profil 2 : Backend Developer

**Objectif** : API Strapi pro

**Parcours** :
1. ✅ `01_STRAPI_SETUP.md` → Installation
2. ✅ `02_CONTENT_TYPES.md` → Content Types
3. ✅ `03_API_ENDPOINTS.md` → Routes optimisées
4. ✅ `04_AUTHENTIFICATION.md` → Sécurité JWT
5. ✅ `06_DATABASE_POSTGRESQL.md` → Optimisations DB
6. ✅ `09_MAINTENANCE_BACKUP.md` → Backup pro

**Temps** : 5-6 heures

---

### Profil 3 : DevOps / SRE

**Objectif** : Déploiement + Monitoring

**Parcours** :
1. ✅ `01_STRAPI_SETUP.md` → Installation (skim)
2. ✅ `05_DEPLOYMENT_PRODUCTION.md` → Railway setup
3. ✅ `06_DATABASE_POSTGRESQL.md` → PostgreSQL prod
4. ✅ `08_WEBHOOKS_INTEGRATION.md` → CI/CD
5. ✅ `09_MAINTENANCE_BACKUP.md` → Backup + Monitoring

**Temps** : 3-4 heures

---

### Profil 4 : Agent IA (Gemini)

**Objectif** : Génération code automatique

**Setup** :
1. ✅ `GEMINI_BACKEND_CONFIGURATION.md` → Créer Gem's
2. ✅ `.vscode/gemini-instructions.md` → Auto-chargé VS Code

**Usage** :
- Prompt via Gem's → Copier → Coller dans Code Assist
- Gemini génère code conforme règles absolues
- Tests automatiques (Thunder Client)

**Temps setup** : 15 minutes (one-time)

---

## 🔗 LIENS UTILES

### Documentation Officielle

- **Strapi Docs** : https://docs.strapi.io/
- **Strapi REST API** : https://docs.strapi.io/dev-docs/api/rest
- **Railway Docs** : https://docs.railway.app/
- **PostgreSQL** : https://www.postgresql.org/docs/

### Communauté

- **Strapi Discord** : https://discord.strapi.io/
- **Strapi Forum** : https://forum.strapi.io/
- **Railway Community** : https://discord.gg/railway

### Outils

- **Thunder Client** : https://www.thunderclient.com/
- **Cloudinary** : https://cloudinary.com/documentation
- **Gemini Code Assist** : https://cloud.google.com/products/gemini/code-assist

---

## ❓ FAQ RAPIDE

### Q : SQLite ou PostgreSQL en dev local ?

**R** : **SQLite** pour simplicité (défaut Strapi), **PostgreSQL** si tu veux environment identique prod.

**Guide** : `01_STRAPI_SETUP.md` → Section "Configuration Base de Données"

---

### Q : Comment créer un nouveau Content Type ?

**R** : 2 méthodes :
1. **UI** : Admin Panel → Content-Type Builder → Create
2. **Code** : Créer `schema.json` (voir templates dans `02_CONTENT_TYPES.md`)

---

### Q : Comment tester l'API ?

**R** : 3 méthodes :
1. **Thunder Client** (extension VS Code)
2. **curl** (terminal)
3. **Insomnia / Postman**

**Exemples** : `03_API_ENDPOINTS.md`

---

### Q : Comment sécuriser l'API ?

**R** :
- ✅ CORS strict (seul frontend autorisé)
- ✅ Token Read-Only (public) vs Admin (secret)
- ✅ Rate limiting (100 req/min)
- ✅ HTTPS uniquement (production)

**Guide complet** : `04_AUTHENTIFICATION.md`

---

### Q : Combien coûte l'hébergement ?

**R** :
- **Railway** : $5-20/mois (Strapi + PostgreSQL)
- **Cloudinary** : Free (25 crédits/mois, ~25 GB)
- **Vercel** : Free (frontend)

**Total** : ~$5-20/mois ✅

---

### Q : Comment faire un backup ?

**R** :
- **Automatique** : Railway snapshots (7 jours gratuit)
- **Manuel** : `pg_dump` + upload S3
- **Script** : Voir `09_MAINTENANCE_BACKUP.md`

---

## 📞 SUPPORT

### Problème Technique

1. **Consulter** : `08_TROUBLESHOOTING.md` (section dans chaque fichier)
2. **Logs Strapi** : `railway logs` ou admin panel
3. **Strapi Discord** : https://discord.strapi.io/

### Suggestions Documentation

**Contact** : Créer issue GitHub ou email admin@confluence-digitale.fr

---

**📚 Documentation Backend Complète ! Prêt pour Développement Professionnel ! 💪**

---

**Projet** : Confluence Digitale V6.7.2  
**Date** : Novembre 2025  
**Version** : 1.0
