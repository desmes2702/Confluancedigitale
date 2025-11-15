# 📦 GUIDE D'INSTALLATION STRAPI - CONFLUENCE DIGITALE

**Durée estimée** : 30-45 minutes  
**Niveau** : Intermédiaire  
**Prérequis** : Node.js 18+, PostgreSQL 14+

---

## 🎯 ÉTAPE 1 : INSTALLATION STRAPI

### **1.1. Créer le projet Strapi**

```bash
# Aller dans le dossier racine du projet
cd /path/to/confluence-digitale

# Créer le projet Strapi (TypeScript recommandé)
npx create-strapi-app@latest strapi-confluence --typescript

# Choisir les options suivantes:
# ? Choose your installation type: Custom (manual settings)
# ? Choose your preferred language: TypeScript
# ? Choose your default database client: postgres
# ? Database name: strapi_confluence
# ? Host: 127.0.0.1
# ? Port: 5432
# ? Username: postgres
# ? Password: [votre_mot_de_passe]
# ? Enable SSL connection: No
```

### **1.2. Vérifier l'installation**

```bash
cd strapi-confluence

# Démarrer Strapi
npm run develop

# Accéder à http://localhost:1337/admin
# Créer votre compte administrateur
```

---

## 🗄️ ÉTAPE 2 : CONFIGURER LA BASE DE DONNÉES

### **2.1. PostgreSQL (recommandé en production)**

**Option A : Installation locale**

```bash
# macOS (Homebrew)
brew install postgresql@14
brew services start postgresql@14

# Linux (Ubuntu/Debian)
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql

# Windows
# Télécharger depuis https://www.postgresql.org/download/windows/
```

**Créer la base de données** :

```bash
# Se connecter à PostgreSQL
psql -U postgres

# Créer la base
CREATE DATABASE strapi_confluence;

# Créer un utilisateur dédié (optionnel, recommandé)
CREATE USER strapi_user WITH PASSWORD 'votre_mot_de_passe_fort';
GRANT ALL PRIVILEGES ON DATABASE strapi_confluence TO strapi_user;

# Quitter
\q
```

**Option B : PostgreSQL Cloud (production)**

- **Supabase** : https://supabase.com (PostgreSQL gratuit jusqu'à 500MB)
- **Neon** : https://neon.tech (serverless PostgreSQL gratuit)
- **Railway** : https://railway.app (PostgreSQL + Strapi en 1 clic)

### **2.2. SQLite (développement local uniquement)**

Si vous voulez juste tester localement sans installer PostgreSQL :

```bash
# Modifier /strapi-confluence/config/database.ts
# Changer 'postgres' en 'sqlite'

# SQLite est déjà inclus par défaut
# La base sera créée automatiquement dans /.tmp/data.db
```

⚠️ **Attention** : SQLite est OK pour dev, mais **PostgreSQL obligatoire pour production**.

---

## 🔐 ÉTAPE 3 : CONFIGURATION SÉCURISÉE

### **3.1. Fichier .env**

Créer `/strapi-confluence/.env` :

```bash
# Server
HOST=0.0.0.0
PORT=1337
APP_KEYS=generez_une_cle_aleatoire_ici_1,generez_une_cle_aleatoire_ici_2
API_TOKEN_SALT=generez_un_salt_aleatoire_ici
ADMIN_JWT_SECRET=generez_un_secret_aleatoire_ici
TRANSFER_TOKEN_SALT=generez_un_salt_aleatoire_ici
JWT_SECRET=generez_un_secret_aleatoire_ici

# Database (PostgreSQL)
DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=strapi_confluence
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=votre_mot_de_passe
DATABASE_SSL=false

# Email (Gmail App Password)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=votre_email@gmail.com
SMTP_PASSWORD=votre_app_password_gmail
DEFAULT_FROM=noreply@confluencedigitale.fr
DEFAULT_REPLY_TO=contact@confluencedigitale.fr

# Public URL (production)
PUBLIC_URL=https://api.confluencedigitale.fr
```

### **3.2. Générer les clés aléatoires**

```bash
# Utiliser Node.js pour générer des clés sécurisées
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Répéter 5 fois pour :
# - APP_KEYS (2 clés séparées par une virgule)
# - API_TOKEN_SALT
# - ADMIN_JWT_SECRET
# - TRANSFER_TOKEN_SALT
# - JWT_SECRET
```

### **3.3. Gmail App Password (pour les emails)**

1. Aller sur https://myaccount.google.com/security
2. Activer "Validation en 2 étapes"
3. Aller dans "Mots de passe des applications"
4. Générer un mot de passe pour "Autre (nom personnalisé)" → "Strapi Confluence"
5. Copier le mot de passe dans `.env` → `SMTP_PASSWORD`

---

## 🏗️ ÉTAPE 4 : CRÉER LES COLLECTIONS

### **4.1. Collection: Expert**

**Via l'interface Strapi** (http://localhost:1337/admin) :

1. **Content-Type Builder** → **Create new collection type**
2. **Display name**: `Expert`
3. **Ajouter les champs** :

| Nom du champ | Type | Options |
|--------------|------|---------|
| `name` | Text | Required, Unique |
| `title` | Text | Required |
| `description` | Rich Text (Markdown) | |
| `guarantees` | JSON | |
| `color` | Text | Default: "#D1A65E" |
| `icon` | Enumeration | Values: shield, code, rocket |
| `image` | Media | Single image |
| `order` | Number | Default: 0 |

4. **Save** → **Configure the view** → Ajouter `order` dans les filtres

### **4.2. Collection: FAQ**

1. **Create new collection type** → `FAQ`
2. **Champs** :

| Nom du champ | Type | Options |
|--------------|------|---------|
| `question` | Text | Required |
| `answer` | Rich Text (Markdown) | Required |
| `expert` | Relation | Expert (many-to-one) |
| `category` | Enumeration | general, pricing, technical, process |
| `order` | Number | Default: 0 |
| `published` | Boolean | Default: true |

### **4.3. Collection: Case Study**

1. **Create new collection type** → `CaseStudy`
2. **Champs** :

| Nom du champ | Type | Options |
|--------------|------|---------|
| `title` | Text | Required |
| `client` | Text | Required |
| `sector` | Enumeration | artisan, restaurant, service, commerce, sante |
| `location` | Text | |
| `description` | Rich Text | |
| `challenge` | Rich Text | |
| `solution` | Rich Text | |
| `results` | Rich Text | |
| `metrics` | Component (repeatable) | Créer composant Metric |
| `before_score` | Number | Min: 0, Max: 100 |
| `after_score` | Number | Min: 0, Max: 100 |
| `testimonial` | Relation | Testimonial (one-to-one) |
| `images` | Media | Multiple images |
| `featured` | Boolean | Default: false |
| `published_date` | Date | |

**Component: Metric** (avant de créer Case Study) :
- **Create new component** → `shared.metric`
- Champs :
  - `label` : Text
  - `value` : Text
  - `improvement` : Number

### **4.4. Collection: Availability**

| Nom du champ | Type | Options |
|--------------|------|---------|
| `sector` | Enumeration | plombier, electricien, menuisier, peintre, etc. |
| `location` | Text | Required |
| `status` | Enumeration | available, reserved, taken |
| `reserved_by` | Text | |
| `reserved_date` | Date | |
| `expiration_date` | Date | |
| `price` | Number | Default: 149 |

### **4.5. Collection: Testimonial**

| Nom du champ | Type | Options |
|--------------|------|---------|
| `client_name` | Text | Required |
| `company` | Text | |
| `role` | Text | |
| `content` | Text | Required, Max: 280 chars |
| `rating` | Number | Min: 1, Max: 5, Default: 5 |
| `photo` | Media | Single image |
| `case_study` | Relation | CaseStudy (one-to-one) |
| `featured` | Boolean | Default: false |
| `published_date` | Date | |

### **4.6. Collection: Lead**

| Nom du champ | Type | Options |
|--------------|------|---------|
| `type` | Enumeration | contact, audit, reservation |
| `name` | Text | |
| `email` | Email | Required |
| `phone` | Text | |
| `message` | Text (long) | |
| `sector` | Text | |
| `location` | Text | |
| `status` | Enumeration | new, contacted, qualified, converted, lost |
| `source` | Text | URL de la page |
| `contacted_at` | DateTime | |
| `notes` | Rich Text | |

---

## 🌐 ÉTAPE 5 : CRÉER LES SINGLE TYPES

### **5.1. Single Type: Homepage**

1. **Content-Type Builder** → **Create new single type** → `Homepage`
2. **Champs** :

| Nom du champ | Type | Options |
|--------------|------|---------|
| `hero` | Component | Créer composant `homepage.hero` |
| `pain_points` | Component (repeatable) | Max: 3, composant `homepage.pain-point` |
| `pagespeed_section` | Component | composant `homepage.pagespeed` |
| `solutions` | Component (repeatable) | Max: 6, composant `homepage.solution` |
| `cta_final` | Component | composant `homepage.cta-final` |

**Composants à créer** (via "Create new component") :

**`homepage.hero`** :
- `badge_text` : Text
- `title` : Text (long)
- `subtitle` : Rich Text
- `cta_primary_text` : Text
- `cta_primary_link` : Text
- `cta_secondary_text` : Text
- `cta_secondary_link` : Text
- `trust_badges` : Component (repeatable) → créer `shared.trust-badge`

**`shared.trust-badge`** :
- `icon` : Text (nom de l'icône)
- `text` : Text

**`homepage.pain-point`** :
- `title` : Text
- `description` : Text
- `icon` : Text

**`homepage.pagespeed`** :
- `title` : Text
- `subtitle` : Text
- `cta_text` : Text
- `cta_link` : Text

**`homepage.solution`** :
- `title` : Text
- `description` : Text
- `icon` : Text
- `color` : Text (Hex)

**`homepage.cta-final`** :
- `title` : Text
- `subtitle` : Text
- `cta_primary_text` : Text
- `cta_secondary_text` : Text
- `stats` : Component (repeatable, max 3) → créer `shared.stat`

**`shared.stat`** :
- `value` : Text
- `label` : Text
- `color` : Text (Hex)

### **5.2. Single Type: Global Settings**

| Nom du champ | Type | Options |
|--------------|------|---------|
| `site_name` | Text | Default: "Confluence Digitale" |
| `site_description` | Text (long) | |
| `contact_email` | Email | |
| `contact_phone` | Text | |
| `address` | Text (long) | |
| `logo` | Media | Single image |
| `favicon` | Media | Single image |
| `colors` | Component | composant `settings.colors` |
| `social_links` | Component | composant `settings.social` |
| `seo` | Component | composant `settings.seo` |
| `analytics` | Component | composant `settings.analytics` |

**Composants** :

**`settings.colors`** :
- `primary` : Text (Hex)
- `secondary` : Text (Hex)
- `accent` : Text (Hex)
- `success` : Text (Hex)
- `danger` : Text (Hex)

**`settings.social`** :
- `linkedin` : Text (URL)
- `twitter` : Text (URL)
- `facebook` : Text (URL)

**`settings.seo`** :
- `meta_title` : Text
- `meta_description` : Text
- `og_image` : Media

**`settings.analytics`** :
- `google_analytics_id` : Text
- `google_tag_manager_id` : Text

---

## 🔓 ÉTAPE 6 : CONFIGURER LES PERMISSIONS

### **6.1. Permissions Public (non authentifié)**

1. **Settings** → **Users & Permissions Plugin** → **Roles** → **Public**
2. **Activer les permissions suivantes** :

| Collection | Permissions |
|------------|-------------|
| **Expert** | ✅ find, ✅ findOne |
| **FAQ** | ✅ find, ✅ findOne |
| **Case Study** | ✅ find, ✅ findOne |
| **Availability** | ✅ find, ✅ findOne |
| **Testimonial** | ✅ find, ✅ findOne |
| **Lead** | ✅ create |
| **Homepage** | ✅ find |
| **Global Settings** | ✅ find |

3. **Save**

### **6.2. Permissions Authenticated (admin)**

Par défaut, les admins ont accès complet. Pas de modification nécessaire.

---

## 📧 ÉTAPE 7 : CONFIGURER LES EMAILS

### **7.1. Installer le plugin Email**

```bash
cd strapi-confluence
npm install @strapi/provider-email-nodemailer
```

### **7.2. Configuration**

Créer `/strapi-confluence/config/plugins.ts` :

```typescript
export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('DEFAULT_FROM', 'noreply@confluencedigitale.fr'),
        defaultReplyTo: env('DEFAULT_REPLY_TO', 'contact@confluencedigitale.fr'),
      },
    },
  },
});
```

### **7.3. Tester l'envoi d'email**

Créer `/strapi-confluence/src/api/lead/content-types/lead/lifecycles.ts` :

```typescript
export default {
  async afterCreate(event) {
    const { result } = event;

    try {
      // Email à l'équipe
      await strapi.plugins['email'].services.email.send({
        to: 'contact@confluencedigitale.fr',
        subject: `Nouveau lead ${result.type}`,
        html: `
          <h2>Nouveau lead reçu</h2>
          <p><strong>Type:</strong> ${result.type}</p>
          <p><strong>Nom:</strong> ${result.name || 'Non renseigné'}</p>
          <p><strong>Email:</strong> ${result.email}</p>
          <p><strong>Téléphone:</strong> ${result.phone || 'Non renseigné'}</p>
          <p><strong>Message:</strong> ${result.message || 'Aucun message'}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
        `,
      });

      // Email de confirmation au client
      if (result.email) {
        await strapi.plugins['email'].services.email.send({
          to: result.email,
          subject: 'Votre demande a bien été reçue - Confluence Digitale',
          html: `
            <h2>Merci ${result.name || 'cher client'} !</h2>
            <p>Nous avons bien reçu votre demande de type <strong>${result.type}</strong>.</p>
            <p>Nous vous répondrons sous <strong>48h maximum</strong>.</p>
            <p>À très bientôt,<br>L'équipe Confluence Digitale</p>
            <hr>
            <p style="font-size: 12px; color: #666;">
              Cet email est envoyé automatiquement suite à votre demande sur confluencedigitale.fr.
            </p>
          `,
        });
      }

      console.log('✅ Emails envoyés avec succès');
    } catch (error) {
      console.error('❌ Erreur envoi email:', error);
    }
  },
};
```

---

## 📊 ÉTAPE 8 : IMPORTER LES DONNÉES INITIALES

### **8.1. Données Triade (Expert)**

Via **Content Manager** → **Expert** → **Create new entry** :

**Expert 1: Antoine** :
```json
{
  "name": "Antoine",
  "title": "Stratège Web & Architecte Technique",
  "description": "15 ans d'expertise en développement web et architecture technique. Spécialiste des performances extrêmes et de l'optimisation SEO. Ancien lead dev chez une grande agence parisienne, Antoine conçoit des sites qui atteignent systématiquement 100/100 sur PageSpeed.",
  "guarantees": [
    "Performance 100/100 garantie contractuellement",
    "Architecture technique robuste et évolutive",
    "Code propre et maintenable"
  ],
  "color": "#D1A65E",
  "icon": "shield",
  "order": 1
}
```

**Expert 2: Pascal** :
```json
{
  "name": "Pascal",
  "title": "Expert SEO & Conversion",
  "description": "12 ans d'expertise en référencement naturel et optimisation des conversions. Ancien consultant SEO indépendant, Pascal a propulsé des centaines de TPE/PME en première page Google. Son obsession : faire sonner votre téléphone.",
  "guarantees": [
    "Domination locale garantie (1 seul client par zone)",
    "Stratégie SEO sur-mesure adaptée à votre métier",
    "Taux de conversion optimisé"
  ],
  "color": "#10b981",
  "icon": "code",
  "order": 2
}
```

**Expert 3: Laly** :
```json
{
  "name": "Laly",
  "title": "Designer UX/UI & Cheffe de Projet",
  "description": "10 ans d'expertise en design d'interfaces et gestion de projet web. Ancienne designer chez une startup tech, Laly crée des interfaces qui convertissent. Son approche : comprendre votre client, concevoir l'expérience parfaite.",
  "guarantees": [
    "Design moderne et professionnel (V6.7.2)",
    "UX pensée pour convertir vos visiteurs",
    "Formation Strapi incluse (autonomie totale)"
  ],
  "color": "#A32E3A",
  "icon": "rocket",
  "order": 3
}
```

### **8.2. Données Homepage (Single Type)**

Via **Content Manager** → **Homepage** :

Remplir avec le contenu actuel de `/astro-confluence/src/pages/index.astro`.

---

## 🔌 ÉTAPE 9 : INTÉGRER AVEC ASTRO

### **9.1. Créer le service Strapi**

Créer `/astro-confluence/src/lib/strapi.ts` :

```typescript
const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = import.meta.env.STRAPI_API_TOKEN;

interface StrapiResponse<T> {
  data: T;
  meta?: any;
}

async function fetchAPI(endpoint: string) {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
  }

  const response = await fetch(`${STRAPI_URL}/api${endpoint}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error(`Erreur Strapi: ${response.status}`);
  }

  return response.json();
}

// Experts (Triade)
export async function getExperts() {
  const res: StrapiResponse<any[]> = await fetchAPI('/experts?populate=*&sort=order:asc');
  return res.data;
}

// FAQ
export async function getFAQs(category?: string) {
  const filter = category ? `&filters[category][$eq]=${category}` : '';
  const res: StrapiResponse<any[]> = await fetchAPI(`/faqs?populate=*&sort=order:asc${filter}`);
  return res.data;
}

// Case Studies
export async function getCaseStudies(featured?: boolean) {
  const filter = featured ? '&filters[featured][$eq]=true' : '';
  const res: StrapiResponse<any[]> = await fetchAPI(`/case-studies?populate=*${filter}`);
  return res.data;
}

// Availabilities
export async function getAvailabilities(status?: string) {
  const filter = status ? `&filters[status][$eq]=${status}` : '';
  const res: StrapiResponse<any[]> = await fetchAPI(`/availabilities?${filter}`);
  return res.data;
}

// Homepage
export async function getHomepage() {
  const res: StrapiResponse<any> = await fetchAPI('/homepage?populate=deep');
  return res.data;
}

// Global Settings
export async function getGlobalSettings() {
  const res: StrapiResponse<any> = await fetchAPI('/global-setting?populate=*');
  return res.data;
}

// Créer un lead (formulaire)
export async function createLead(data: any) {
  const response = await fetch(`${STRAPI_URL}/api/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  });

  if (!response.ok) {
    throw new Error('Erreur lors de l\'envoi du formulaire');
  }

  return response.json();
}
```

### **9.2. Configurer .env Astro**

Créer `/astro-confluence/.env` :

```bash
PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_api_token_here
```

**Obtenir le token API** :
1. Strapi Admin → **Settings** → **API Tokens** → **Create new API Token**
2. Name: `Astro Integration`
3. Token type: `Read-only`
4. Token duration: `Unlimited`
5. **Copy token** → Coller dans `.env`

### **9.3. Utiliser dans les pages Astro**

Exemple `/astro-confluence/src/pages/index.astro` :

```astro
---
import { getExperts, getHomepage } from '../lib/strapi';

// Fetch Strapi data au build time
const experts = await getExperts();
const homepage = await getHomepage();
---

<section>
  <h1>{homepage.attributes.hero.title}</h1>
  
  <div class="team-grid">
    {experts.map((expert) => (
      <div class="expert-card">
        <h3>{expert.attributes.name}</h3>
        <p>{expert.attributes.title}</p>
      </div>
    ))}
  </div>
</section>
```

---

## ✅ ÉTAPE 10 : TESTER

### **10.1. Checklist**

- [ ] Strapi démarre correctement (`npm run develop`)
- [ ] Admin accessible sur http://localhost:1337/admin
- [ ] 6 Collections créées (Expert, FAQ, Case Study, etc.)
- [ ] 2 Single Types créés (Homepage, Global Settings)
- [ ] Permissions Public configurées (find, findOne, create Lead)
- [ ] Plugin Email installé et configuré
- [ ] Webhook Lead → Email fonctionne
- [ ] Données Triade importées (Antoine, Pascal, Laly)
- [ ] API accessible depuis Astro
- [ ] Formulaire Contact → Lead → Email OK

### **10.2. Test API manuel**

```bash
# Test GET Experts
curl http://localhost:1337/api/experts?populate=*

# Test POST Lead (formulaire)
curl -X POST http://localhost:1337/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "type": "contact",
      "name": "Test",
      "email": "test@example.com",
      "message": "Test message"
    }
  }'
```

---

## 🚀 ÉTAPE 11 : DÉPLOIEMENT PRODUCTION

### **Option A : Railway (recommandé)**

```bash
# Installer Railway CLI
npm install -g @railway/cli

# Login
railway login

# Créer un projet
railway init

# Ajouter PostgreSQL
railway add -d postgresql

# Déployer
railway up

# Obtenir l'URL publique
railway domain
```

### **Option B : Strapi Cloud**

1. Push code sur GitHub
2. Aller sur https://cloud.strapi.io
3. Connecter le repo GitHub
4. Deploy automatique

### **Option C : VPS Custom**

```bash
# SSH sur votre serveur
ssh user@your-server.com

# Cloner le repo
git clone https://github.com/your-repo/strapi-confluence.git
cd strapi-confluence

# Installer les dépendances
npm install --production

# Configurer .env production
nano .env

# Build
npm run build

# Démarrer avec PM2
npm install -g pm2
pm2 start npm --name "strapi" -- start
pm2 save
pm2 startup
```

---

## 📚 RESSOURCES

- **Strapi Docs** : https://docs.strapi.io
- **Strapi Forum** : https://forum.strapi.io
- **Discord Strapi** : https://discord.strapi.io

---

**✅ Installation terminée ! Votre backend Strapi est prêt.**

---

**Créé par** : Figma Make AI  
**Date** : 9 novembre 2025  
**Version** : Strapi 4.x + PostgreSQL
