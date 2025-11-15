# 🌐 API ENDPOINTS - RÉFÉRENCE COMPLÈTE

**Projet** : Confluence Digitale V6.7.2 - Backend  
**API Type** : REST  
**Base URL** : `https://api.confluence-digitale.fr` (prod) | `http://localhost:1337` (dev)  
**Format** : JSON

---

## 🎯 VUE D'ENSEMBLE

### Endpoints Disponibles

| Content Type | Endpoint | GET | POST | PUT | DELETE |
|--------------|----------|-----|------|-----|--------|
| **Pages** | `/api/pages` | ✅ | 🔒 | 🔒 | 🔒 |
| **Articles** | `/api/articles` | ✅ | 🔒 | 🔒 | 🔒 |
| **Services** | `/api/services` | ✅ | 🔒 | 🔒 | 🔒 |
| **Testimonials** | `/api/testimonials` | ✅ | 🔒 | 🔒 | 🔒 |
| **Team Members** | `/api/team-members` | ✅ | 🔒 | 🔒 | 🔒 |
| **FAQs** | `/api/faqs` | ✅ | 🔒 | 🔒 | 🔒 |
| **Contact** | `/api/contacts` | 🔒 | ✅ | 🔒 | 🔒 |

**Légende** :
- ✅ Public (accessible sans token)
- 🔒 Authentifié (nécessite token Admin)

---

## 📚 STRUCTURE RÉPONSE STRAPI

### Format Standard

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "...",
        "slug": "...",
        "createdAt": "2025-11-15T10:00:00.000Z",
        "updatedAt": "2025-11-15T12:00:00.000Z",
        "publishedAt": "2025-11-15T11:00:00.000Z"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 4,
      "total": 100
    }
  }
}
```

### Relations Populées

```json
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "...",
      "author": {
        "data": {
          "id": 3,
          "attributes": {
            "username": "Antoine",
            "email": "antoine@confluence-digitale.fr"
          }
        }
      }
    }
  }
}
```

---

## 🔍 QUERY PARAMETERS

### Populate (Relations)

**Populate tout** :
```
?populate=*
```

**Populate spécifique** :
```
?populate[author][fields][0]=username
?populate[author][fields][1]=email
?populate[coverImage]=*
```

**Populate nested** :
```
?populate[author][populate][photo]=*
```

---

### Filters (Filtres)

**Égalité** :
```
?filters[slug][$eq]=about
```

**Not Null** (seulement publiés) :
```
?filters[publishedAt][$notNull]=true
```

**Contient** :
```
?filters[title][$contains]=design
```

**Multiple filters** (AND) :
```
?filters[category][$eq]=design&filters[featured][$eq]=true
```

**Opérateurs disponibles** :
- `$eq` : Égal
- `$ne` : Différent
- `$lt` : Inférieur
- `$lte` : Inférieur ou égal
- `$gt` : Supérieur
- `$gte` : Supérieur ou égal
- `$contains` : Contient
- `$notContains` : Ne contient pas
- `$in` : Dans tableau
- `$notIn` : Pas dans tableau
- `$null` : Est null
- `$notNull` : N'est pas null

---

### Sort (Tri)

**Un champ** :
```
?sort=publishedAt:desc
```

**Multiple champs** :
```
?sort[0]=featured:desc&sort[1]=publishedAt:desc
```

**Options** :
- `asc` : Croissant (A→Z, 0→9, ancien→récent)
- `desc` : Décroissant (Z→A, 9→0, récent→ancien)

---

### Pagination

**Par page** :
```
?pagination[page]=1&pagination[pageSize]=10
```

**Par offset** :
```
?pagination[start]=0&pagination[limit]=10
```

**Par défaut** :
- `pageSize` : 25
- `page` : 1
- Max `pageSize` : 100

---

### Fields (Sélection champs)

**Sélectionner champs spécifiques** :
```
?fields[0]=title&fields[1]=slug&fields[2]=publishedAt
```

**Avantage** : Réduire taille réponse (performance)

---

### Locale (Internationalisation)

**Si plugin i18n activé** :
```
?locale=fr
?locale=en
```

---

## 1️⃣ PAGES

### GET - Liste Pages

**Endpoint** :
```
GET /api/pages
```

**Exemple complet** :
```bash
curl "https://api.confluence-digitale.fr/api/pages?filters[template][$eq]=landing&populate[seo]=*&populate[hero]=*&sort=order:asc" \
  -H "Accept: application/json"
```

**Réponse** :
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "Notre Offre",
        "slug": "offre",
        "excerpt": "Découvrez nos services",
        "template": "landing",
        "order": 1,
        "seo": {
          "metaTitle": "Notre Offre | Confluence Digitale",
          "metaDescription": "Services digitaux professionnels pour TPE/PME"
        },
        "hero": {
          "title": "Transformez Votre Présence Digitale",
          "subtitle": "Design System + Développement + Stratégie",
          "ctaText": "Découvrir",
          "ctaLink": "#services"
        },
        "publishedAt": "2025-11-15T10:00:00.000Z"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 5
    }
  }
}
```

---

### GET - Page par Slug

**Endpoint** :
```
GET /api/pages?filters[slug][$eq]=offre&populate=*
```

**Exemple** :
```bash
curl "https://api.confluence-digitale.fr/api/pages?filters[slug][$eq]=offre&populate[seo]=*&populate[hero]=*" \
  -H "Accept: application/json"
```

**Utilisation Frontend (Astro)** :
```typescript
// src/lib/strapi.ts
const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = import.meta.env.PUBLIC_STRAPI_TOKEN;

export async function getPageBySlug(slug: string) {
  const response = await fetch(
    `${STRAPI_URL}/api/pages?filters[slug][$eq]=${slug}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data.data[0] || null;
}

// src/pages/[slug].astro
const page = await getPageBySlug(Astro.params.slug);
```

---

## 2️⃣ ARTICLES

### GET - Liste Articles

**Endpoint** :
```
GET /api/articles
```

**Exemple : Articles publiés, catégorie "design-system", 6 derniers** :
```bash
curl "https://api.confluence-digitale.fr/api/articles?filters[publishedAt][$notNull]=true&filters[category][$eq]=design-system&sort=publishedAt:desc&pagination[pageSize]=6&populate[author][fields][0]=username&populate[coverImage]=*&populate[seo]=*" \
  -H "Accept: application/json"
```

**Réponse** :
```json
{
  "data": [
    {
      "id": 12,
      "attributes": {
        "title": "Design System V6.7.2 : Les Nouveautés",
        "slug": "design-system-v6-7-2-nouveautes",
        "excerpt": "Découvrez les dernières évolutions du Design System moderne...",
        "category": "design-system",
        "tags": ["design", "ui", "update"],
        "readTime": 8,
        "featured": true,
        "views": 142,
        "coverImage": {
          "data": {
            "attributes": {
              "url": "/uploads/cover_design_system_abc123.jpg",
              "alternativeText": "Design System V6.7.2",
              "width": 1200,
              "height": 630
            }
          }
        },
        "author": {
          "data": {
            "attributes": {
              "username": "Antoine"
            }
          }
        },
        "publishedAt": "2025-11-10T09:00:00.000Z",
        "createdAt": "2025-11-09T14:00:00.000Z",
        "updatedAt": "2025-11-10T08:55:00.000Z"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 6,
      "pageCount": 3,
      "total": 18
    }
  }
}
```

---

### GET - Article par Slug

**Endpoint** :
```
GET /api/articles?filters[slug][$eq]=design-system-v6-7-2-nouveautes&populate=*
```

**Utilisation Frontend** :
```typescript
// src/lib/strapi.ts
export async function getArticleBySlug(slug: string) {
  const response = await fetch(
    `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate[author][populate][photo]=*&populate[coverImage]=*&populate[seo]=*`,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data.data[0] || null;
}

// src/pages/blog/[slug].astro
const article = await getArticleBySlug(Astro.params.slug);

if (!article) {
  return Astro.redirect('/404');
}
```

---

### GET - Articles Featured

**Endpoint** :
```
GET /api/articles?filters[featured][$eq]=true&filters[publishedAt][$notNull]=true&sort=publishedAt:desc&pagination[pageSize]=3
```

**Usage** : Homepage (3 articles mis en avant)

---

## 3️⃣ SERVICES

### GET - Liste Services

**Endpoint** :
```
GET /api/services
```

**Exemple : Services catégorie "design", triés par popularité** :
```bash
curl "https://api.confluence-digitale.fr/api/services?filters[category][$eq]=design&sort[0]=isPopular:desc&sort[1]=order:asc&populate[features]=*&populate[assignedTo][fields][0]=name&populate[assignedTo][fields][1]=color&populate[assignedTo][populate][photo]=*" \
  -H "Accept: application/json"
```

**Réponse** :
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "name": "Design System Pro",
        "slug": "design-system-pro",
        "description": "<p>Création Design System complet...</p>",
        "shortDescription": "Design System sur mesure pour votre marque",
        "icon": "Palette",
        "features": [
          {
            "feature": "Composants réutilisables",
            "isHighlighted": true
          },
          {
            "feature": "Documentation complète",
            "isHighlighted": false
          },
          {
            "feature": "Thème personnalisable",
            "isHighlighted": true
          }
        ],
        "price": 2500,
        "priceUnit": "/ projet",
        "category": "design",
        "color": "premium",
        "isPopular": true,
        "order": 1,
        "assignedTo": {
          "data": {
            "attributes": {
              "name": "Antoine",
              "color": "premium",
              "photo": {
                "data": {
                  "attributes": {
                    "url": "/uploads/antoine_photo.jpg"
                  }
                }
              }
            }
          }
        },
        "publishedAt": "2025-11-15T10:00:00.000Z"
      }
    }
  ]
}
```

---

### GET - Service par Slug

**Endpoint** :
```
GET /api/services?filters[slug][$eq]=design-system-pro&populate=*
```

---

## 4️⃣ TESTIMONIALS

### GET - Liste Témoignages

**Endpoint** :
```
GET /api/testimonials
```

**Exemple : 6 témoignages featured, rating 5/5** :
```bash
curl "https://api.confluence-digitale.fr/api/testimonials?filters[featured][$eq]=true&filters[rating][$eq]=5&sort=order:asc&pagination[pageSize]=6&populate[photo]=*&populate[companyLogo]=*" \
  -H "Accept: application/json"
```

**Réponse** :
```json
{
  "data": [
    {
      "id": 3,
      "attributes": {
        "clientName": "Marie Dubois",
        "company": "Tech Innov",
        "role": "CEO",
        "content": "Confluence Digitale a transformé notre présence en ligne. Le Design System créé est exceptionnel et notre site est désormais ultra-performant.",
        "rating": 5,
        "projectType": "design",
        "featured": true,
        "order": 1,
        "photo": {
          "data": {
            "attributes": {
              "url": "/uploads/marie_dubois.jpg"
            }
          }
        },
        "companyLogo": {
          "data": {
            "attributes": {
              "url": "/uploads/tech_innov_logo.png"
            }
          }
        },
        "publishedAt": "2025-11-10T15:00:00.000Z"
      }
    }
  ]
}
```

---

## 5️⃣ TEAM MEMBERS

### GET - Triade Complète

**Endpoint** :
```
GET /api/team-members?sort=order:asc&populate[photo]=*&populate[services][fields][0]=name&populate[services][fields][1]=slug
```

**Réponse** :
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "name": "Antoine",
        "slug": "antoine",
        "role": "Expert Design & UX",
        "shortBio": "Spécialiste Design System et UI/UX moderne",
        "color": "premium",
        "expertise": ["Design System", "UI/UX", "Figma", "Branding"],
        "order": 1,
        "photo": {
          "data": {
            "attributes": {
              "url": "/uploads/antoine_photo.jpg"
            }
          }
        },
        "services": {
          "data": [
            {
              "attributes": {
                "name": "Design System Pro",
                "slug": "design-system-pro"
              }
            }
          ]
        }
      }
    },
    {
      "id": 2,
      "attributes": {
        "name": "Pascal",
        "slug": "pascal",
        "role": "Lead Développeur",
        "shortBio": "Architecte solutions web & IA",
        "color": "cta",
        "expertise": ["React", "Astro", "Node.js", "IA", "API"],
        "order": 2
      }
    },
    {
      "id": 3,
      "attributes": {
        "name": "Laly",
        "slug": "laly",
        "role": "Experte Juridique",
        "shortBio": "Conseil juridique numérique TPE/PME",
        "color": "contractuel",
        "expertise": ["RGPD", "Contrats", "Propriété intellectuelle", "CGV"],
        "order": 3
      }
    }
  ]
}
```

---

## 6️⃣ FAQS

### GET - FAQs par Catégorie

**Endpoint** :
```
GET /api/faqs?filters[category][$eq]=tarifs&sort[0]=isPopular:desc&sort[1]=order:asc
```

**Réponse** :
```json
{
  "data": [
    {
      "id": 8,
      "attributes": {
        "question": "Quels sont vos tarifs ?",
        "answer": "<p>Nos tarifs varient selon le projet...</p>",
        "category": "tarifs",
        "isPopular": true,
        "order": 1,
        "publishedAt": "2025-11-15T10:00:00.000Z"
      }
    }
  ]
}
```

---

### GET - Toutes FAQs Groupées

**Endpoint** :
```
GET /api/faqs?sort[0]=category:asc&sort[1]=order:asc
```

**Utilisation Frontend** :
```typescript
// Grouper FAQs par catégorie
const faqs = await fetch(`${STRAPI_URL}/api/faqs?sort[0]=category:asc&sort[1]=order:asc`);
const data = await faqs.json();

const grouped = data.data.reduce((acc, faq) => {
  const category = faq.attributes.category;
  if (!acc[category]) acc[category] = [];
  acc[category].push(faq);
  return acc;
}, {});

// Result:
// {
//   "general": [FAQ1, FAQ2],
//   "tarifs": [FAQ3, FAQ4],
//   "design": [FAQ5]
// }
```

---

## 7️⃣ CONTACT

### POST - Créer Message

**Endpoint** :
```
POST /api/contacts
```

**Headers** :
```
Content-Type: application/json
```

**Body** :
```json
{
  "data": {
    "name": "Jean Dupont",
    "email": "jean.dupont@example.com",
    "phone": "0612345678",
    "company": "Example SAS",
    "subject": "devis",
    "message": "Bonjour, je souhaite obtenir un devis pour la création d'un site web avec Design System personnalisé."
  }
}
```

**Exemple curl** :
```bash
curl -X POST "https://api.confluence-digitale.fr/api/contacts" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "name": "Jean Dupont",
      "email": "jean.dupont@example.com",
      "phone": "0612345678",
      "company": "Example SAS",
      "subject": "devis",
      "message": "Bonjour, je souhaite obtenir un devis..."
    }
  }'
```

**Réponse Success** :
```json
{
  "data": {
    "id": 42,
    "attributes": {
      "name": "Jean Dupont",
      "email": "jean.dupont@example.com",
      "phone": "0612345678",
      "company": "Example SAS",
      "subject": "devis",
      "message": "Bonjour, je souhaite obtenir un devis...",
      "status": "new",
      "createdAt": "2025-11-15T14:30:00.000Z"
    }
  }
}
```

**Réponse Error (validation)** :
```json
{
  "error": {
    "status": 400,
    "name": "BadRequestError",
    "message": "Email invalide",
    "details": {}
  }
}
```

---

### Utilisation Frontend (Astro/React)

**Composant React** :
```tsx
// src/components/ContactForm.tsx
import { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch(
        `${import.meta.env.PUBLIC_STRAPI_URL}/api/contacts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message || 'Erreur envoi');
      }

      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {success && (
        <div className="bg-green-50 text-green-800 p-4 rounded">
          Message envoyé avec succès !
        </div>
      )}
      {error && (
        <div className="bg-red-50 text-red-800 p-4 rounded">
          {error}
        </div>
      )}

      <input type="text" name="name" required placeholder="Nom" />
      <input type="email" name="email" required placeholder="Email" />
      <input type="tel" name="phone" placeholder="Téléphone" />
      <input type="text" name="company" placeholder="Entreprise" />
      
      <select name="subject" required>
        <option value="general">Question générale</option>
        <option value="devis">Demande de devis</option>
        <option value="support">Support</option>
        <option value="partenariat">Partenariat</option>
      </select>

      <textarea name="message" required placeholder="Message" rows={5} />

      <button type="submit" disabled={loading}>
        {loading ? 'Envoi...' : 'Envoyer'}
      </button>
    </form>
  );
}
```

---

## 🔐 AUTHENTIFICATION

### Obtenir Token (Admin)

**Strapi Admin Panel** :
1. Settings → API Tokens → Create new API Token
2. Name : "Frontend Read-Only"
3. Token type : **Read-only** (pour frontend)
4. Copy token : `abc123...xyz`

**Utiliser Token** :
```bash
curl "https://api.confluence-digitale.fr/api/articles" \
  -H "Authorization: Bearer abc123...xyz"
```

**Frontend (.env)** :
```bash
PUBLIC_STRAPI_URL=https://api.confluence-digitale.fr
PUBLIC_STRAPI_TOKEN=abc123...xyz
```

---

## 🚀 HELPER FUNCTIONS (Astro)

### Fichier : `src/lib/strapi.ts`

```typescript
const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = import.meta.env.PUBLIC_STRAPI_TOKEN;

// Helper fetch
async function fetchStrapi(endpoint: string) {
  const response = await fetch(`${STRAPI_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.statusText}`);
  }

  return response.json();
}

// Pages
export async function getAllPages() {
  const data = await fetchStrapi('/api/pages?populate=*&sort=order:asc');
  return data.data;
}

export async function getPageBySlug(slug: string) {
  const data = await fetchStrapi(`/api/pages?filters[slug][$eq]=${slug}&populate=*`);
  return data.data[0] || null;
}

// Articles
export async function getAllArticles() {
  const data = await fetchStrapi('/api/articles?filters[publishedAt][$notNull]=true&sort=publishedAt:desc&populate[author][fields][0]=username&populate[coverImage]=*');
  return data.data;
}

export async function getArticleBySlug(slug: string) {
  const data = await fetchStrapi(`/api/articles?filters[slug][$eq]=${slug}&populate[author][populate][photo]=*&populate[coverImage]=*&populate[seo]=*`);
  return data.data[0] || null;
}

export async function getFeaturedArticles(limit = 3) {
  const data = await fetchStrapi(`/api/articles?filters[featured][$eq]=true&filters[publishedAt][$notNull]=true&sort=publishedAt:desc&pagination[pageSize]=${limit}&populate[coverImage]=*`);
  return data.data;
}

// Services
export async function getAllServices() {
  const data = await fetchStrapi('/api/services?sort[0]=isPopular:desc&sort[1]=order:asc&populate[features]=*&populate[assignedTo][fields][0]=name&populate[assignedTo][fields][1]=color');
  return data.data;
}

// Testimonials
export async function getFeaturedTestimonials(limit = 6) {
  const data = await fetchStrapi(`/api/testimonials?filters[featured][$eq]=true&sort=order:asc&pagination[pageSize]=${limit}&populate[photo]=*&populate[companyLogo]=*`);
  return data.data;
}

// Team
export async function getTeamMembers() {
  const data = await fetchStrapi('/api/team-members?sort=order:asc&populate[photo]=*&populate[services][fields][0]=name');
  return data.data;
}

// FAQs
export async function getFAQsByCategory(category: string) {
  const data = await fetchStrapi(`/api/faqs?filters[category][$eq]=${category}&sort[0]=isPopular:desc&sort[1]=order:asc`);
  return data.data;
}

export async function getAllFAQs() {
  const data = await fetchStrapi('/api/faqs?sort[0]=category:asc&sort[1]=order:asc');
  return data.data;
}
```

---

## 🐛 ERREURS COURANTES

### 403 Forbidden

**Cause** : Permissions non configurées

**Solution** :
1. Strapi Admin → Settings → Roles → Public
2. Activer `find` et `findOne` pour Content Type
3. Sauvegarder

---

### 404 Not Found

**Cause** : Endpoint incorrect ou Content Type non créé

**Solution** :
- Vérifier URL : `/api/articles` (pluriel)
- Vérifier Content Type existe dans Admin Panel

---

### CORS Error (Frontend)

**Cause** : Frontend non autorisé dans CORS

**Solution** :
- Ajouter URL frontend dans `config/middlewares.js` :
```javascript
origin: [
  'https://confluence-digitale.fr',
  'http://localhost:4321' // Astro dev
]
```

---

## ✅ CHECKLIST INTÉGRATION

- [ ] Token API créé (Read-Only pour frontend)
- [ ] Variables `.env` configurées
- [ ] Helper functions créées (`strapi.ts`)
- [ ] Permissions Public configurées (find, findOne)
- [ ] CORS configuré (origine frontend autorisée)
- [ ] Tests API réussis (curl ou Thunder Client)

---

**🌐 API REST Complète ! Prêt pour Intégration Frontend ! 💪**

---

**Projet** : Confluence Digitale V6.7.2  
**Date** : Novembre 2025  
**Version** : 1.0
