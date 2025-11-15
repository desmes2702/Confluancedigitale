# 🚀 STRAPI SETUP - INSTALLATION & CONFIGURATION

**Projet** : Confluence Digitale V6.7.2 - Backend  
**Stack** : Strapi v4 + PostgreSQL + Node.js  
**Temps** : 30 minutes (local) + 30 minutes (production)

---

## 🎯 OBJECTIFS

Ce document couvre :
1. ✅ Installation Strapi locale (dev)
2. ✅ Configuration PostgreSQL (local + production)
3. ✅ Variables d'environnement
4. ✅ Premier lancement
5. ✅ Création compte Admin

---

## 📦 PRÉREQUIS

### Versions Requises

| Outil | Version Minimale | Version Recommandée | Vérification |
|-------|------------------|---------------------|--------------|
| **Node.js** | 18.x | 20.x (LTS) | `node -v` |
| **npm** | 8.x | 10.x | `npm -v` |
| **PostgreSQL** | 12+ | 15+ | `psql --version` |
| **Git** | 2.x | Latest | `git --version` |

### Installation Prérequis

**macOS** :
```bash
# Homebrew
brew install node postgresql

# Vérification
node -v  # v20.x
npm -v   # 10.x
psql --version  # 15.x
```

**Windows** :
```powershell
# Installer Node.js depuis nodejs.org
# Installer PostgreSQL depuis postgresql.org

# Vérification
node -v
npm -v
psql --version
```

**Linux (Ubuntu/Debian)** :
```bash
# Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# PostgreSQL
sudo apt-get install postgresql postgresql-contrib

# Vérification
node -v
npm -v
psql --version
```

---

## 🏗️ INSTALLATION STRAPI LOCAL

### Méthode 1 : Create Strapi App (Recommandé)

```bash
# Créer nouveau projet Strapi
npx create-strapi-app@latest confluence-digitale-backend \
  --quickstart \
  --no-run

# Naviguer dans le dossier
cd confluence-digitale-backend

# Structure créée :
# confluence-digitale-backend/
# ├── config/           # Configuration
# ├── src/              # Code source
# │   ├── api/          # Content Types
# │   ├── components/   # Components réutilisables
# │   └── extensions/   # Extensions plugins
# ├── public/           # Fichiers publics
# ├── .env              # Variables environnement
# ├── package.json
# └── README.md
```

**Options Quickstart** :
- ✅ Installation automatique dépendances
- ✅ Configuration SQLite (dev local)
- ✅ Structure projet complète

---

### Méthode 2 : Installation Manuelle

```bash
# Créer dossier projet
mkdir confluence-digitale-backend
cd confluence-digitale-backend

# Initialiser npm
npm init -y

# Installer Strapi
npm install @strapi/strapi@latest

# Installer dépendances requises
npm install @strapi/plugin-users-permissions@latest
npm install @strapi/plugin-i18n@latest

# Créer structure
npx strapi init
```

---

## 🗄️ CONFIGURATION BASE DE DONNÉES

### Local : SQLite (Développement)

**Par défaut**, Strapi quickstart utilise SQLite → **Parfait pour dev local** ✅

**Fichier** : `config/database.js`

```javascript
const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
```

**Avantages SQLite (dev)** :
- ✅ Zéro configuration
- ✅ Fichier unique `.tmp/data.db`
- ✅ Idéal pour tests/développement
- ❌ **Ne PAS utiliser en production**

---

### Local : PostgreSQL (Optionnel)

Si vous voulez PostgreSQL **dès le dev local** :

#### Étape 1 : Créer Database PostgreSQL

```bash
# Se connecter à PostgreSQL
psql postgres

# Créer database
CREATE DATABASE confluence_digitale_dev;

# Créer utilisateur
CREATE USER strapi_dev WITH ENCRYPTED PASSWORD 'dev_password_123';

# Donner permissions
GRANT ALL PRIVILEGES ON DATABASE confluence_digitale_dev TO strapi_dev;

# Quitter
\q
```

---

#### Étape 2 : Installer Dépendance PostgreSQL

```bash
npm install pg --save
```

---

#### Étape 3 : Configuration `database.js`

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
            host: env('DATABASE_HOST', 'localhost'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'confluence_digitale_dev'),
            user: env('DATABASE_USERNAME', 'strapi_dev'),
            password: env('DATABASE_PASSWORD', 'dev_password_123'),
            ssl: env.bool('DATABASE_SSL', false) && {
              rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
            },
            schema: env('DATABASE_SCHEMA', 'public'),
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

---

#### Étape 4 : Variables Environnement

**Fichier** : `.env`

```bash
# Database (PostgreSQL local)
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=confluence_digitale_dev
DATABASE_USERNAME=strapi_dev
DATABASE_PASSWORD=dev_password_123
DATABASE_SSL=false
```

---

### Production : PostgreSQL (Railway/Render)

**Configuration détaillée dans** : `05_DEPLOYMENT_PRODUCTION.md`

**Résumé** :
- ✅ PostgreSQL hébergé (Railway, Supabase, Neon)
- ✅ SSL activé
- ✅ Connexion via `DATABASE_URL` (connection string)

---

## ⚙️ VARIABLES D'ENVIRONNEMENT

### Fichier `.env` (Local)

**Créer** : `.env` à la racine du projet

```bash
# Server
HOST=0.0.0.0
PORT=1337

# Secrets (GÉNÉRER AVEC : npm run strapi generate:keys)
APP_KEYS=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
API_TOKEN_SALT=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ADMIN_JWT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
JWT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TRANSFER_TOKEN_SALT=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Database (SQLite par défaut)
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db

# OU PostgreSQL local (décommenter si besoin)
# DATABASE_CLIENT=postgres
# DATABASE_HOST=localhost
# DATABASE_PORT=5432
# DATABASE_NAME=confluence_digitale_dev
# DATABASE_USERNAME=strapi_dev
# DATABASE_PASSWORD=dev_password_123

# Admin Panel
ADMIN_URL=/admin

# Public URL (local)
PUBLIC_URL=http://localhost:1337

# CORS (Frontend local Astro)
FRONTEND_URL=http://localhost:4321
```

---

### Générer Secrets

**Commande** :
```bash
# Génère automatiquement tous les secrets nécessaires
npm run strapi generate:keys

# Copier la sortie dans .env
```

**Exemple sortie** :
```
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=saltabc123
ADMIN_JWT_SECRET=secretxyz789
JWT_SECRET=jwtsecret456
TRANSFER_TOKEN_SALT=transfersalt789
```

---

### Fichier `.env.example`

**Créer** : `.env.example` (pour Git - sans valeurs sensibles)

```bash
# Server
HOST=0.0.0.0
PORT=1337

# Secrets (GÉNÉRER AVEC : npm run strapi generate:keys)
APP_KEYS=your_app_keys_here
API_TOKEN_SALT=your_api_token_salt_here
ADMIN_JWT_SECRET=your_admin_jwt_secret_here
JWT_SECRET=your_jwt_secret_here
TRANSFER_TOKEN_SALT=your_transfer_token_salt_here

# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db

# Admin Panel
ADMIN_URL=/admin

# Public URL
PUBLIC_URL=http://localhost:1337

# CORS
FRONTEND_URL=http://localhost:4321
```

**Ajouter à** `.gitignore` :
```
# Environment
.env
.env.local
.env.production
```

---

## 🚀 PREMIER LANCEMENT

### Étape 1 : Installer Dépendances

```bash
# Si pas déjà fait avec create-strapi-app
npm install
```

---

### Étape 2 : Build Admin Panel

```bash
npm run build
```

**Durée** : 2-3 minutes

**Sortie attendue** :
```
Building your admin UI with development configuration...
✔ Building admin panel... 
Admin UI built successfully
```

---

### Étape 3 : Lancer Strapi

```bash
# Mode développement (avec hot reload)
npm run develop

# OU mode production
npm run start
```

**Sortie attendue** :
```
[INFO] Server running on http://localhost:1337
[INFO] Admin panel is available at http://localhost:1337/admin
```

---

### Étape 4 : Accéder Admin Panel

**Ouvrir navigateur** : http://localhost:1337/admin

**Premier accès** → Formulaire création compte Admin

---

## 👤 CRÉATION COMPTE ADMIN

### Formulaire Initial

**Champs requis** :
- **First name** : Antoine (exemple)
- **Last name** : Confluence
- **Email** : admin@confluence-digitale.fr
- **Password** : Minimum 8 caractères, 1 majuscule, 1 chiffre
- **Confirm Password** : Identique

**Cliquer** : **Create the first administrator**

---

### Connexion Admin

**URL** : http://localhost:1337/admin

**Credentials** :
- Email : admin@confluence-digitale.fr
- Password : Votre mot de passe

**Dashboard** :
- ✅ Content Manager (vide pour l'instant)
- ✅ Content-Type Builder
- ✅ Media Library
- ✅ Settings

---

## 🎨 CONFIGURATION MIDDLEWARES

### Fichier `config/middlewares.js`

**Créer/Modifier** : `config/middlewares.js`

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
            'https://res.cloudinary.com', // Cloudinary
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
        // Production
        'https://confluence-digitale.fr',
        'https://www.confluence-digitale.fr',
        // Local
        'http://localhost:3000',
        'http://localhost:4321', // Astro dev
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

### Fichier `config/server.js`

**Créer/Modifier** : `config/server.js`

```javascript
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  proxy: env.bool('IS_PROXIED', false), // true en production (Railway/Render)
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    url: env('ADMIN_URL', '/admin'),
  },
});
```

---

## ✅ VÉRIFICATIONS POST-INSTALLATION

### Checklist

- [ ] Strapi démarre sans erreur (`npm run develop`)
- [ ] Admin panel accessible : http://localhost:1337/admin
- [ ] Compte Admin créé et connexion OK
- [ ] Database connectée (SQLite ou PostgreSQL)
- [ ] Variables `.env` configurées
- [ ] CORS configuré (middlewares.js)
- [ ] `.gitignore` contient `.env`

---

### Tests API

**Test 1 : Health Check**
```bash
curl http://localhost:1337/_health
```

**Réponse attendue** :
```json
{
  "status": "ok"
}
```

---

**Test 2 : Admin API (nécessite token)**
```bash
# Obtenir token : Admin Panel → Settings → API Tokens → Create
curl http://localhost:1337/admin/users \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN"
```

---

## 🐛 TROUBLESHOOTING

### Erreur : "Port 1337 already in use"

**Cause** : Strapi déjà lancé ou port occupé

**Solution** :
```bash
# Tuer processus sur port 1337
lsof -ti:1337 | xargs kill -9

# OU changer port dans .env
PORT=1338
```

---

### Erreur : "Database connection failed"

**Cause** : PostgreSQL non démarré ou config incorrecte

**Solution** :
```bash
# Vérifier PostgreSQL lancé
brew services list  # macOS
sudo systemctl status postgresql  # Linux

# Démarrer PostgreSQL
brew services start postgresql  # macOS
sudo systemctl start postgresql  # Linux

# Vérifier connexion
psql -h localhost -U strapi_dev -d confluence_digitale_dev
```

---

### Erreur : "Invalid APP_KEYS"

**Cause** : Secrets non générés

**Solution** :
```bash
npm run strapi generate:keys
# Copier sortie dans .env
```

---

### Admin Panel ne charge pas

**Cause** : Build admin non fait

**Solution** :
```bash
npm run build
npm run develop
```

---

## 📚 PROCHAINES ÉTAPES

Après installation réussie :

1. ✅ **Créer Content Types** → `02_CONTENT_TYPES.md`
2. ✅ **Configurer API** → `03_API_ENDPOINTS.md`
3. ✅ **Permissions** → `04_AUTHENTIFICATION.md`
4. ✅ **Déployer** → `05_DEPLOYMENT_PRODUCTION.md`

---

**🚀 Strapi Installé avec Succès ! Backend Prêt pour Développement ! 💪**

---

**Projet** : Confluence Digitale V6.7.2  
**Date** : Novembre 2025  
**Version** : 1.0
