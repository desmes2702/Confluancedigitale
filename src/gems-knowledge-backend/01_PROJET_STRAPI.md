# 🏗️ PROJET STRAPI - CONFLUENCE DIGITALE V6.7.2

**Backend** : API REST Strapi v4  
**Database** : PostgreSQL 16  
**Media** : Cloudinary  
**Hosting** : Railway  
**Status** : Production Ready

---

## 🎯 VUE D'ENSEMBLE BACKEND

### Stack Technique Complète

| Composant | Technologie | Version | Rôle |
|-----------|-------------|---------|------|
| **Runtime** | Node.js | 20.x LTS | Exécution TypeScript/JavaScript |
| **Framework** | Strapi | 4.25+ | CMS Headless + API REST |
| **Database** | PostgreSQL | 16+ | Base de données relationnelle |
| **ORM** | Knex.js | 3.x | Query builder SQL |
| **Media Storage** | Cloudinary | Latest | CDN images/vidéos |
| **Authentication** | JWT | Strapi built-in | Tokens sécurisés |
| **Hosting** | Railway | - | Déploiement cloud |
| **CI/CD** | GitHub Actions | - | Automatisation |

---

## 📋 ARCHITECTURE BACKEND

### Structure Générale

```
confluence-digitale-backend/
├── src/
│   ├── api/                    ← 7 Content Types
│   │   ├── page/
│   │   ├── article/
│   │   ├── service/
│   │   ├── testimonial/
│   │   ├── team-member/
│   │   ├── faq/
│   │   └── contact/
│   ├── components/             ← Composants réutilisables
│   │   ├── seo/
│   │   ├── hero/
│   │   └── media/
│   ├── extensions/             ← Extensions Strapi
│   └── middlewares/            ← Middlewares customs
├── config/
│   ├── database.js             ← Config PostgreSQL
│   ├── plugins.js              ← Config Cloudinary
│   ├── api.js                  ← Config API REST
│   └── server.js               ← Config serveur
├── public/                     ← Assets statiques
└── .env                        ← Variables environnement
```

---

## 📊 7 CONTENT TYPES

### Liste Complète

| # | Content Type | API Endpoint | Usage | Champs Clés |
|---|--------------|--------------|-------|-------------|
| 1 | **Page** | `/api/pages` | Pages statiques | title, slug, content, seo, hero |
| 2 | **Article** | `/api/articles` | Blog posts | title, slug, content, author, category, coverImage |
| 3 | **Service** | `/api/services` | Services offerts | name, slug, description, icon, features, price |
| 4 | **Testimonial** | `/api/testimonials` | Témoignages | clientName, company, content, rating, photo |
| 5 | **Team Member** | `/api/team-members` | Triade Pro | name, role, bio, photo, color |
| 6 | **FAQ** | `/api/faqs` | Questions fréquentes | question, answer, category, order |
| 7 | **Contact** | `/api/contacts` | Messages formulaire | name, email, phone, message, status |

---

## 🔗 RELATIONS ENTRE ENTITÉS

### Relations Principales

```
Page
├─ has many Components (Hero, CTA, Features)
└─ has one SEO

Article
├─ belongs to Team Member (author)
├─ has many Tags
└─ has one SEO

Service
├─ has many Features (component)
└─ has one SEO

Team Member
├─ has many Articles (authored)
└─ has one Color (enum: gold, green, red)

Testimonial
└─ belongs to Service (optional)

FAQ
└─ has one Category (enum)

Contact
└─ has one Status (enum: new, read, replied, archived)
```

---

## 🌐 API REST CONFIGURATION

### Endpoints Standards Strapi

**Pattern** : `/api/{plural}` ou `/api/{plural}/{id}`

**Méthodes HTTP** :
- `GET /api/pages` → Liste toutes les pages
- `GET /api/pages/:id` → Détail page
- `POST /api/pages` → Créer page (auth required)
- `PUT /api/pages/:id` → Update page (auth required)
- `DELETE /api/pages/:id` → Supprimer page (auth required)

---

### Query Parameters

**Population** :
```
GET /api/articles?populate=author,seo,coverImage
```

**Filtres** :
```
GET /api/articles?filters[category][$eq]=web
GET /api/faqs?filters[category][$eq]=pricing
```

**Tri** :
```
GET /api/articles?sort=publishedAt:desc
GET /api/faqs?sort=order:asc
```

**Pagination** :
```
GET /api/articles?pagination[page]=1&pagination[pageSize]=10
```

---

## 🔐 AUTHENTIFICATION & PERMISSIONS

### JWT Authentication

**Flow** :
1. User login → `POST /api/auth/local`
2. Receive JWT token
3. Include token in headers : `Authorization: Bearer {token}`
4. Access protected routes

**Rôles par défaut** :
- **Public** : Lecture seule (find, findOne)
- **Authenticated** : CRUD complet
- **Admin** : Accès panel Strapi

---

### Permissions par Content Type

| Content Type | Public | Authenticated | Admin |
|--------------|--------|---------------|-------|
| **Page** | find, findOne | create, update, delete | Full access |
| **Article** | find, findOne | create, update, delete | Full access |
| **Service** | find, findOne | create, update, delete | Full access |
| **Testimonial** | find, findOne | create, update, delete | Full access |
| **Team Member** | find, findOne | update | Full access |
| **FAQ** | find, findOne | create, update, delete | Full access |
| **Contact** | create | find, findOne, update, delete | Full access |

---

## 🗄️ DATABASE POSTGRESQL

### Configuration

**Local** :
```env
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=confluence_digitale
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_password
DATABASE_SSL=false
```

**Production (Railway)** :
```env
DATABASE_CLIENT=postgres
DATABASE_URL=postgresql://user:pass@host:5432/db
DATABASE_SSL=true
```

---

### Tables Générées

Strapi génère automatiquement les tables :

```sql
-- Content Types
pages
articles
services
testimonials
team_members
faqs
contacts

-- Components
components_seo_seos
components_hero_heroes
components_media_medias

-- Strapi System
admin_users
admin_permissions
upload_files
upload_folders
i18n_locale
```

---

## 📦 COMPOSANTS RÉUTILISABLES

### 1. SEO Component

**Utilisation** : Page, Article, Service

**Champs** :
- metaTitle (string, max 60)
- metaDescription (text, max 160)
- keywords (text)
- metaImage (media)
- canonicalURL (string)

---

### 2. Hero Component

**Utilisation** : Page

**Champs** :
- title (string, required)
- subtitle (text)
- backgroundImage (media)
- ctaText (string)
- ctaLink (string)

---

### 3. Media Component

**Utilisation** : Multiple Content Types

**Champs** :
- file (media, required)
- alt (string, required)
- caption (text)
- credits (string)

---

## 🎨 COULEURS TRIADE PROFESSIONNELLE

### Configuration Team Member

**Champ color** (enumeration) :

```json
{
  "color": {
    "type": "enumeration",
    "enum": ["gold", "green", "red"],
    "required": true
  }
}
```

**Mapping Frontend** :
- `gold` → `#D1A65E` (Antoine - Premium)
- `green` → `#10b981` (Pascal - CTA)
- `red` → `#A32E3A` (Laly - Contractuel)

---

## 🚀 OBJECTIFS TECHNIQUES

### Performance

- [ ] API response time < 200ms
- [ ] Database queries optimisées (indexes)
- [ ] Images optimisées via Cloudinary
- [ ] Cache API (Redis optionnel)

---

### Sécurité

- [ ] JWT tokens sécurisés
- [ ] CORS configuré (origin whitelist)
- [ ] Rate limiting activé
- [ ] Validations strictes sur tous champs
- [ ] Sanitization input utilisateur

---

### Scalabilité

- [ ] PostgreSQL (horizontal scaling)
- [ ] Cloudinary (CDN global)
- [ ] Railway (auto-scaling)
- [ ] Stateless API (JWT)

---

### SEO

- [ ] Sitemap généré automatiquement
- [ ] Meta tags via component SEO
- [ ] Canonical URLs
- [ ] Structured data (JSON-LD)

---

## 📚 RESSOURCES PROJET

### Documentation Interne

- `/backend-documentation/` → Documentation complète Strapi
- `/gems-knowledge-backend/` → Connaissances pour Gem's
- `/doc/` → Documentation frontend (référence)

---

### APIs Externes

- **Cloudinary** : https://cloudinary.com/documentation
- **Railway** : https://docs.railway.app
- **Strapi** : https://docs.strapi.io/dev-docs/intro

---

## 🔄 WORKFLOW DÉVELOPPEMENT

### Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start PostgreSQL
brew services start postgresql

# 3. Start Strapi dev
npm run develop

# 4. Access admin
http://localhost:1337/admin
```

---

### Production Deployment

```bash
# 1. Build production
npm run build

# 2. Deploy Railway
git push origin main

# 3. Auto-deploy triggered
# Railway builds & deploys automatically
```

---

## ✅ CHECKLIST PROJET

### Setup Initial

- [ ] Strapi installé (v4.25+)
- [ ] PostgreSQL configuré
- [ ] 7 Content Types créés
- [ ] 3 Components créés
- [ ] Permissions configurées
- [ ] Cloudinary intégré
- [ ] Railway déployé

---

### Production Ready

- [ ] Database migrations OK
- [ ] Seed data loaded
- [ ] API endpoints testés
- [ ] JWT authentication active
- [ ] CORS configuré
- [ ] SSL/HTTPS activé
- [ ] Backup automatisé
- [ ] Monitoring activé

---

**🏗️ Backend Confluence Digitale V6.7.2 - Production Ready !**