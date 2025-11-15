# 🌐 API CONFIGURATION - REST ENDPOINTS

**Strapi v4 API REST**  
**Base URL** : `http://localhost:1337/api` (local) ou `https://api.confluence-digitale.fr/api` (prod)

---

## 🎯 ENDPOINTS STANDARDS

### Pattern Strapi v4

```
GET    /api/{plural}           → Liste toutes les entrées
GET    /api/{plural}/:id       → Détail d'une entrée
POST   /api/{plural}           → Créer entrée (auth required)
PUT    /api/{plural}/:id       → Update entrée (auth required)
DELETE /api/{plural}/:id       → Supprimer entrée (auth required)
```

---

## 📋 ENDPOINTS PAR CONTENT TYPE

| Content Type | Endpoint | Méthodes | Auth Requise |
|--------------|----------|----------|--------------|
| **Page** | `/api/pages` | GET | Non (liste/détail) |
| **Article** | `/api/articles` | GET | Non (liste/détail) |
| **Service** | `/api/services` | GET | Non (liste/détail) |
| **Testimonial** | `/api/testimonials` | GET | Non (liste/détail) |
| **Team Member** | `/api/team-members` | GET | Non (liste/détail) |
| **FAQ** | `/api/faqs` | GET | Non (liste/détail) |
| **Contact** | `/api/contacts` | POST | Non (création uniquement) |

**Note** : POST, PUT, DELETE requièrent JWT token sauf Contact (POST public)

---

## 🔍 QUERY PARAMETERS

### Population (Charger Relations)

**Syntax** : `?populate={field1},{field2}`

**Exemples** :
```http
# Charger SEO + coverImage d'un article
GET /api/articles/1?populate=seo,coverImage

# Charger auteur (relation) d'un article
GET /api/articles/1?populate=author

# Charger TOUT (deep populate)
GET /api/articles/1?populate=*
```

**Deep Populate** :
```http
# Articles avec auteur ET ses articles
GET /api/articles?populate[author][populate]=articles
```

---

### Filtres

**Syntax** : `?filters[field][$operator]={value}`

**Opérateurs** :
- `$eq` : égal
- `$ne` : différent
- `$lt` : inférieur
- `$lte` : inférieur ou égal
- `$gt` : supérieur
- `$gte` : supérieur ou égal
- `$contains` : contient
- `$notContains` : ne contient pas
- `$startsWith` : commence par
- `$endsWith` : finit par

**Exemples** :
```http
# Articles de catégorie "web"
GET /api/articles?filters[category][$eq]=web

# FAQs de catégorie "pricing"
GET /api/faqs?filters[category][$eq]=pricing

# Articles publiés après date
GET /api/articles?filters[publishedAt][$gte]=2024-01-01

# Services avec prix < 200
GET /api/services?filters[price][$lt]=200

# Recherche dans titre
GET /api/articles?filters[title][$contains]=migration
```

---

### Tri (Sort)

**Syntax** : `?sort={field}:{order}`

**Order** : `asc` ou `desc`

**Exemples** :
```http
# Articles par date décroissante
GET /api/articles?sort=publishedAt:desc

# FAQs par ordre croissant
GET /api/faqs?sort=order:asc

# Services par prix croissant
GET /api/services?sort=price:asc

# Tri multiple
GET /api/articles?sort[0]=category:asc&sort[1]=publishedAt:desc
```

---

### Pagination

**Syntax** : `?pagination[page]={n}&pagination[pageSize]={size}`

**Exemples** :
```http
# Page 1, 10 résultats
GET /api/articles?pagination[page]=1&pagination[pageSize]=10

# Page 2, 20 résultats
GET /api/articles?pagination[page]=2&pagination[pageSize]=20

# Sans pagination (tout charger)
GET /api/articles?pagination[pageSize]=100
```

**Réponse** :
```json
{
  "data": [...],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 10,
      "pageCount": 5,
      "total": 50
    }
  }
}
```

---

### Champs Sélectionnés

**Syntax** : `?fields={field1},{field2}`

**Exemples** :
```http
# Seulement titre et slug
GET /api/articles?fields=title,slug

# ID, titre, date publication
GET /api/articles?fields=id,title,publishedAt
```

---

## 🔐 AUTHENTIFICATION JWT

### Login

```http
POST /api/auth/local
Content-Type: application/json

{
  "identifier": "admin@confluence-digitale.fr",
  "password": "your_password"
}
```

**Réponse** :
```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "admin",
    "email": "admin@confluence-digitale.fr"
  }
}
```

---

### Utiliser JWT Token

```http
GET /api/articles
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

### Register (Si activé)

```http
POST /api/auth/local/register
Content-Type: application/json

{
  "username": "john",
  "email": "john@example.com",
  "password": "SecurePassword123!"
}
```

---

## 🚀 EXEMPLES COMPLETS

### Récupérer Articles Blog avec Auteur et SEO

```http
GET /api/articles?populate=author,seo,coverImage&sort=publishedAt:desc&pagination[pageSize]=6
```

**Réponse** :
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "Migration React vers Astro",
        "slug": "migration-react-astro",
        "publishedAt": "2024-11-15",
        "author": {
          "data": {
            "id": 1,
            "attributes": {
              "name": "Antoine",
              "role": "Lead Developer"
            }
          }
        },
        "seo": {
          "metaTitle": "Migration React → Astro | Performance x10",
          "metaDescription": "Guide complet migration React vers Astro..."
        },
        "coverImage": {
          "data": {
            "attributes": {
              "url": "https://res.cloudinary.com/..."
            }
          }
        }
      }
    }
  ]
}
```

---

### Créer Contact (Public)

```http
POST /api/contacts
Content-Type: application/json

{
  "data": {
    "name": "Jean Dupont",
    "email": "jean@example.com",
    "phone": "0612345678",
    "message": "Je souhaite un devis pour...",
    "source": "contact-form"
  }
}
```

---

### Filtrer FAQs par Catégorie

```http
GET /api/faqs?filters[category][$eq]=pricing&sort=order:asc
```

---

## ⚙️ CONFIGURATION API

### CORS (config/middlewares.ts)

```typescript
export default [
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
            'res.cloudinary.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:4321',
        'https://confluence-digitale.vercel.app',
        'https://confluence-digitale.fr',
        'https://www.confluence-digitale.fr',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
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

### Rate Limiting (config/api.ts)

```typescript
export default {
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
  rateLimit: {
    enabled: true,
    interval: { min: 1 },
    max: 100,
    prefixKey: 'confluence-digitale:',
    whitelist: [],
    store: {
      type: 'memory',
      options: {},
    },
  },
};
```

---

## 📊 CODES RÉPONSE HTTP

| Code | Signification | Exemple |
|------|---------------|---------|
| **200** | OK | GET réussi |
| **201** | Created | POST réussi (création) |
| **204** | No Content | DELETE réussi |
| **400** | Bad Request | Validation échouée |
| **401** | Unauthorized | JWT token manquant/invalide |
| **403** | Forbidden | Pas de permissions |
| **404** | Not Found | Ressource introuvable |
| **500** | Server Error | Erreur serveur |

---

## 🔧 WEBHOOKS (Optionnel)

### Configuration Webhook Vercel

**Trigger** : Publier/Dépublier Article

**URL** : `https://confluence-digitale.vercel.app/api/revalidate`

**Headers** :
```
X-Revalidate-Token: your_secret_token
```

**Payload** :
```json
{
  "event": "entry.publish",
  "model": "article",
  "entry": {
    "id": 1,
    "slug": "migration-react-astro"
  }
}
```

---

**🌐 API REST Strapi v4 - Configuration Complète !**