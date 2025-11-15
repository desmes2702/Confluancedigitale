# 🚀 DÉPLOIEMENT PRODUCTION

**Projet** : Confluence Digitale V6.7.2 - Backend  
**Plateforme** : Railway (recommandé) ou Render  
**Database** : PostgreSQL (production)  
**Temps** : 45 minutes (premier déploiement)

---

## 🎯 ARCHITECTURE PRODUCTION

```
┌─────────────────────────────────────────────┐
│  FRONTEND (Vercel)                          │
│  https://confluence-digitale.fr             │
│                                             │
│  Astro + React + Tailwind                  │
└─────────────┬───────────────────────────────┘
              │
              │ HTTPS (API REST)
              │ Authorization: Bearer TOKEN
              ▼
┌─────────────────────────────────────────────┐
│  BACKEND (Railway)                          │
│  https://api.confluence-digitale.fr         │
│                                             │
│  Strapi v4 + Node.js                        │
│  ├─ API REST (/api/*)                       │
│  ├─ Admin Panel (/admin)                    │
│  └─ Media Upload                            │
└─────────────┬───────────────────────────────┘
              │
              │ PostgreSQL Connection
              ▼
┌─────────────────────────────────────────────┐
│  DATABASE (Railway PostgreSQL)              │
│                                             │
│  PostgreSQL 15+                             │
│  ├─ Content Types                           │
│  ├─ Users                                   │
│  └─ Media references                        │
└─────────────────────────────────────────────┘
```

---

## ☁️ RAILWAY (RECOMMANDÉ)

### Pourquoi Railway ?

| Feature | Railway | Render | Avantages |
|---------|---------|--------|-----------|
| **PostgreSQL inclus** | ✅ Gratuit | ✅ Gratuit | Base de données intégrée |
| **Déploiement Git** | ✅ Auto | ✅ Auto | Push = deploy automatique |
| **Custom Domain** | ✅ Gratuit | ✅ Gratuit | Domaine personnalisé |
| **SSL Automatique** | ✅ | ✅ | HTTPS inclus |
| **Environnement variables** | ✅ UI simple | ✅ | Configuration facile |
| **Logs temps réel** | ✅ Excellent | ✅ | Debugging facile |
| **Prix** | $5/mois (500h) | Free tier | Railway = meilleur rapport qualité/prix |

**Railway** est recommandé pour sa **simplicité** et **PostgreSQL intégré**.

---

## 🛤️ DÉPLOIEMENT RAILWAY

### Prérequis

- [ ] Compte Railway : [railway.app](https://railway.app)
- [ ] Projet Strapi local fonctionnel
- [ ] Git repository (GitHub, GitLab, Bitbucket)
- [ ] Domaine configuré (optionnel)

---

### Étape 1 : Préparer Projet Strapi

#### 1.1 Configuration Database Production

**Fichier** : `config/database.js`

```javascript
const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'sqlite'),
    connection:
      env('DATABASE_CLIENT') === 'postgres'
        ? {
            connectionString: env('DATABASE_URL'),
            ssl: env.bool('DATABASE_SSL', false) && {
              rejectUnauthorized: env.bool(
                'DATABASE_SSL_REJECT_UNAUTHORIZED',
                false
              ),
            },
          }
        : {
            filename: path.join(
              __dirname,
              '..',
              env('DATABASE_FILENAME', '.tmp/data.db')
            ),
          },
    useNullAsDefault: true,
  },
});
```

**Important** : `DATABASE_SSL_REJECT_UNAUTHORIZED: false` nécessaire pour Railway.

---

#### 1.2 Configuration Server

**Fichier** : `config/server.js`

```javascript
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  proxy: true, // IMPORTANT pour Railway (proxy inverse)
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
```

**Important** : `proxy: true` obligatoire pour Railway/Render.

---

#### 1.3 Configuration CORS

**Fichier** : `config/middlewares.js`

```javascript
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://res.cloudinary.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://res.cloudinary.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        // Production frontend
        'https://confluence-digitale.fr',
        'https://www.confluence-digitale.fr',
        // Vercel preview
        /\.vercel\.app$/,
        // Local dev
        'http://localhost:4321',
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

---

#### 1.4 Vérifier package.json

**Fichier** : `package.json`

```json
{
  "name": "confluence-digitale-backend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "develop": "strapi develop",
    "start": "strapi start",
    "build": "strapi build",
    "strapi": "strapi"
  },
  "dependencies": {
    "@strapi/strapi": "^4.x",
    "@strapi/plugin-users-permissions": "^4.x",
    "@strapi/plugin-i18n": "^4.x",
    "pg": "^8.11.0",
    "better-sqlite3": "^9.0.0"
  },
  "engines": {
    "node": ">=18.0.0 <=20.x.x",
    "npm": ">=8.0.0"
  }
}
```

**Important** : 
- `pg` : Driver PostgreSQL (production)
- `better-sqlite3` : SQLite (dev local)

---

#### 1.5 Créer .env.example

**Fichier** : `.env.example`

```bash
# Server
HOST=0.0.0.0
PORT=1337

# Secrets (générer avec : npm run strapi generate:keys)
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your_api_token_salt_here
ADMIN_JWT_SECRET=your_admin_jwt_secret_here
JWT_SECRET=your_jwt_secret_here
TRANSFER_TOKEN_SALT=your_transfer_token_salt_here

# Database (PostgreSQL production)
DATABASE_CLIENT=postgres
DATABASE_URL=postgresql://user:password@host:5432/database
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false

# Public URL
PUBLIC_URL=https://api.confluence-digitale.fr

# Admin Panel
ADMIN_URL=/admin

# Frontend (CORS)
FRONTEND_URL=https://confluence-digitale.fr
```

---

#### 1.6 Commit & Push

```bash
# Ajouter tous les fichiers
git add .

# Commit
git commit -m "chore: prepare production deployment"

# Push vers GitHub
git push origin main
```

---

### Étape 2 : Créer Projet Railway

#### 2.1 Connexion Railway

1. Aller sur [railway.app](https://railway.app)
2. Cliquer **Login with GitHub**
3. Autoriser Railway

---

#### 2.2 Nouveau Projet

1. Dashboard → **New Project**
2. Choisir **Deploy from GitHub repo**
3. Sélectionner repository `confluence-digitale-backend`
4. Cliquer **Deploy Now**

**Railway va** :
- ✅ Détecter Node.js automatiquement
- ✅ Installer dépendances (`npm install`)
- ✅ Builder Strapi (`npm run build`)
- ⚠️ Échouer au démarrage (variables env manquantes)

---

### Étape 3 : Ajouter PostgreSQL

#### 3.1 Créer Database

1. Dans projet Railway → **New** (bouton +)
2. Choisir **Database** → **PostgreSQL**
3. Railway crée automatiquement :
   - ✅ PostgreSQL 15
   - ✅ Variable `DATABASE_URL` (connection string)

---

#### 3.2 Lier Database au Service

**Railway crée automatiquement la variable** `DATABASE_URL` :
```
postgresql://postgres:password@containers-xxx.railway.app:5432/railway
```

---

### Étape 4 : Configurer Variables Environnement

#### 4.1 Générer Secrets Localement

```bash
# Dans projet Strapi local
npm run strapi generate:keys
```

**Copier sortie** (exemple) :
```
APP_KEYS=abc123,def456,ghi789,jkl012
API_TOKEN_SALT=mno345pqr678
ADMIN_JWT_SECRET=stu901vwx234
JWT_SECRET=yza567bcd890
TRANSFER_TOKEN_SALT=efg123hij456
```

---

#### 4.2 Ajouter Variables dans Railway

**Service Strapi** → **Variables** → **Raw Editor** :

```bash
# Server
HOST=0.0.0.0
PORT=1337
NODE_ENV=production

# Secrets (remplacer par vos vrais secrets)
APP_KEYS=abc123,def456,ghi789,jkl012
API_TOKEN_SALT=mno345pqr678
ADMIN_JWT_SECRET=stu901vwx234
JWT_SECRET=yza567bcd890
TRANSFER_TOKEN_SALT=efg123hij456

# Database (déjà fournie par Railway)
DATABASE_CLIENT=postgres
DATABASE_URL=${{Postgres.DATABASE_URL}}
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false

# Public URL (domaine Railway temporaire, à changer après)
PUBLIC_URL=https://confluence-digitale-backend-production.up.railway.app

# Admin
ADMIN_URL=/admin

# Frontend
FRONTEND_URL=https://confluence-digitale.fr
```

**⚠️ Important** : 
- `DATABASE_URL=${{Postgres.DATABASE_URL}}` référence automatiquement PostgreSQL
- Remplacer `PUBLIC_URL` par votre domaine custom après configuration

**Cliquer** : **Save**

---

### Étape 5 : Redéployer

**Railway redéploie automatiquement** après sauvegarde variables.

**Vérifier Logs** :
1. Service Strapi → **Deployments** → **View Logs**
2. Attendre message :
   ```
   [INFO] Server running on http://0.0.0.0:1337
   [INFO] Admin panel is available
   ```

**Si erreur** → Vérifier logs et variables env.

---

### Étape 6 : Domaine Custom (Optionnel)

#### 6.1 Obtenir URL Railway

**Railway génère URL automatique** :
```
https://confluence-digitale-backend-production.up.railway.app
```

**Tester** :
```bash
curl https://confluence-digitale-backend-production.up.railway.app/_health
```

**Réponse** :
```json
{"status":"ok"}
```

---

#### 6.2 Configurer Domaine Custom

**Prérequis** : Domaine `confluence-digitale.fr` acheté (ex: OVH, Gandi).

**Étapes** :

1. **Railway** :
   - Service Strapi → **Settings** → **Domains**
   - Cliquer **Add Domain**
   - Entrer : `api.confluence-digitale.fr`
   - Railway affiche CNAME requis

2. **DNS Provider (OVH/Gandi)** :
   - Ajouter enregistrement CNAME :
     - Type : `CNAME`
     - Name : `api`
     - Value : `confluence-digitale-backend-production.up.railway.app`
     - TTL : 300

3. **Attendre propagation** (5-60 min)

4. **Vérifier** :
   ```bash
   curl https://api.confluence-digitale.fr/_health
   ```

5. **Mettre à jour `PUBLIC_URL`** dans Railway :
   ```bash
   PUBLIC_URL=https://api.confluence-digitale.fr
   ```

6. **Redéployer** (automatique après save)

---

### Étape 7 : Créer Compte Admin

1. Ouvrir **Admin Panel** :
   ```
   https://api.confluence-digitale.fr/admin
   ```

2. **Premier accès** → Formulaire création Admin :
   - First name : Antoine
   - Last name : Confluence
   - Email : admin@confluence-digitale.fr
   - Password : **Mot de passe fort** (min 8 char, 1 maj, 1 chiffre)

3. **Se connecter** avec credentials

4. **Configurer Permissions** (voir `04_AUTHENTIFICATION.md`)

---

## 🖼️ RENDER (ALTERNATIVE)

### Différences Railway vs Render

| Aspect | Railway | Render |
|--------|---------|--------|
| **UI** | Plus simple | Plus options |
| **PostgreSQL** | Intégré 1-click | Service séparé |
| **Logs** | Temps réel excellent | Temps réel OK |
| **Prix** | $5/mois | Free tier (limité) |

---

### Déploiement Render

**Étapes** :

1. **Compte** : [render.com](https://render.com)

2. **Nouveau Web Service** :
   - New → **Web Service**
   - Connect GitHub repo
   - Settings :
     - Name : `confluence-digitale-backend`
     - Environment : `Node`
     - Build Command : `npm install && npm run build`
     - Start Command : `npm run start`
     - Instance Type : Starter ($7/mois) ou Free (limité)

3. **PostgreSQL** :
   - New → **PostgreSQL**
   - Name : `confluence-digitale-db`
   - Plan : Free ou Starter
   - Copier **Internal Database URL**

4. **Variables Env** (Web Service) :
   - Ajouter toutes variables (comme Railway)
   - `DATABASE_URL` : Coller Internal Database URL

5. **Deploy** → Render build et démarre automatiquement

---

## 🔒 SÉCURITÉ PRODUCTION

### Checklist Sécurité

- [ ] **Variables env** non commitées (`.gitignore` inclut `.env`)
- [ ] **Secrets complexes** (APP_KEYS, JWT_SECRET, etc.)
- [ ] **HTTPS activé** (automatique Railway/Render)
- [ ] **CORS configuré** (seulement origins autorisées)
- [ ] **Database SSL activé**
- [ ] **Admin password fort**
- [ ] **Rate limiting** (optionnel, recommandé)

---

### CORS Strict

**Production** : Autoriser **uniquement** frontend production :

```javascript
// config/middlewares.js
origin: [
  'https://confluence-digitale.fr',
  'https://www.confluence-digitale.fr'
]
```

**Si preview Vercel** :
```javascript
origin: [
  'https://confluence-digitale.fr',
  'https://www.confluence-digitale.fr',
  /^https:\/\/confluence-digitale-.*\.vercel\.app$/ // Preview deployments
]
```

---

### Variables Sensibles

**JAMAIS dans code** :
```javascript
// ❌ MAUVAIS
const apiKey = 'abc123_secret_key';

// ✅ BON
const apiKey = process.env.API_KEY;
```

---

## 📊 MONITORING

### Railway Logs

**Accéder Logs** :
- Service Strapi → **Deployments** → **View Logs**

**Logs temps réel** :
```
[INFO] Server running on http://0.0.0.0:1337
[INFO] Admin panel is available at /admin
```

**Erreurs** :
```
[ERROR] Database connection failed
```

---

### Métriques Railway

**Disponible** :
- CPU usage
- Memory usage
- Network (in/out)

**Accès** : Service → **Metrics**

---

## 🐛 TROUBLESHOOTING PRODUCTION

### Erreur : "Application failed to respond"

**Cause** : Strapi ne démarre pas

**Solutions** :
1. Vérifier **Logs** (erreur détaillée)
2. Vérifier **Variables env** (toutes présentes ?)
3. Vérifier **DATABASE_URL** (correct ?)
4. Vérifier **Build réussi** (npm install + build OK ?)

---

### Erreur : "Database connection failed"

**Cause** : PostgreSQL non accessible

**Solutions** :
1. Vérifier `DATABASE_URL` correct
2. Vérifier PostgreSQL service **UP**
3. Vérifier `DATABASE_SSL=true`
4. Vérifier `DATABASE_SSL_REJECT_UNAUTHORIZED=false`

---

### Erreur : "CORS policy blocked"

**Cause** : Frontend non autorisé

**Solution** :
- Ajouter URL frontend dans `config/middlewares.js` :
```javascript
origin: ['https://confluence-digitale.fr']
```
- Redéployer

---

### Admin Panel inaccessible

**Cause** : Build admin non fait

**Solution** :
1. Vérifier **Build Command** : `npm install && npm run build`
2. Vérifier logs build (erreurs ?)
3. Redéployer

---

## ✅ CHECKLIST DÉPLOIEMENT

### Préparation

- [ ] Projet Strapi local fonctionne
- [ ] Git repository créé et pusher
- [ ] Configuration database.js (PostgreSQL)
- [ ] Configuration server.js (proxy: true)
- [ ] Configuration middlewares.js (CORS)
- [ ] .env.example créé (sans secrets)

### Railway

- [ ] Compte Railway créé
- [ ] Projet créé (GitHub repo connecté)
- [ ] PostgreSQL ajouté
- [ ] Variables env configurées
- [ ] Déploiement réussi (logs OK)
- [ ] Health check fonctionne
- [ ] Domaine custom configuré (optionnel)
- [ ] Admin Panel accessible
- [ ] Compte Admin créé
- [ ] Permissions configurées

### Sécurité

- [ ] Secrets complexes générés
- [ ] HTTPS activé (automatique)
- [ ] CORS strict (production uniquement)
- [ ] Variables env non commitées
- [ ] Admin password fort

### Tests

- [ ] API accessible (`/api/articles`)
- [ ] Admin Panel accessible (`/admin`)
- [ ] Frontend peut fetch API
- [ ] Upload media fonctionne

---

## 🚀 WORKFLOW CONTINU

### Déploiement Automatique

**Railway/Render** redéploient automatiquement à chaque **push Git** :

```bash
# Développement local
git add .
git commit -m "feat: add FAQ content type"
git push origin main

# Railway détecte push → Build → Deploy automatique
```

**Branches** :
- `main` → Production (Railway)
- `dev` → Preview (Railway branch deploy)

---

**🚀 Backend Déployé en Production ! Strapi Live ! 💪**

---

**Projet** : Confluence Digitale V6.7.2  
**Date** : Novembre 2025  
**Version** : 1.0
