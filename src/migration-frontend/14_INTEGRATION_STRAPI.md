# 🔗 INTÉGRATION STRAPI CMS

**Objectif** : Connecter le frontend Astro avec Strapi Pro (backend headless)  
**Architecture** : Astro (frontend statique) ↔ Strapi API (backend)  
**Temps** : 20 minutes (configuration initiale)

---

## 🎯 ARCHITECTURE GLOBALE

```
┌─────────────────────────────────────────────────────────┐
│  FRONTEND - Astro (Vercel)                              │
│  https://confluence-digitale.fr                         │
│                                                          │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐       │
│  │ Pages .astro│  │ Components │  │ API Client │       │
│  │   (SSG)     │  │  React.tsx │  │  (fetch)   │       │
│  └─────┬──────┘  └────────────┘  └─────┬──────┘       │
│        │                                 │               │
└────────┼─────────────────────────────────┼──────────────┘
         │                                 │
         │                                 │ API REST/GraphQL
         │                                 ▼
┌────────┼─────────────────────────────────────────────────┐
│        │  BACKEND - Strapi Pro                           │
│        │  https://api.confluence-digitale.fr             │
│        │                                                  │
│        │  ┌────────────┐  ┌────────────┐  ┌───────────┐│
│        └─▶│ Content    │  │ API REST   │  │ PostgreSQL││
│           │ Types      │  │ /api/*     │  │ Database  ││
│           └────────────┘  └────────────┘  └───────────┘│
└──────────────────────────────────────────────────────────┘
```

---

## 📦 ÉTAPE 1 : CONFIGURATION STRAPI (Backend)

### 1.1 Variables d'Environnement Strapi

**Fichier** : `/backend/.env` (côté Strapi)

```bash
# Server
HOST=0.0.0.0
PORT=1337
APP_KEYS=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
API_TOKEN_SALT=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ADMIN_JWT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
JWT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Database (Production - PostgreSQL)
DATABASE_CLIENT=postgres
DATABASE_HOST=your-postgres-host.com
DATABASE_PORT=5432
DATABASE_NAME=confluence_digitale_prod
DATABASE_USERNAME=strapi_user
DATABASE_PASSWORD=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
DATABASE_SSL=true

# Public URL
STRAPI_ADMIN_URL=https://admin.confluence-digitale.fr
PUBLIC_URL=https://api.confluence-digitale.fr

# CORS (Frontend autorisé)
FRONTEND_URL=https://confluence-digitale.fr

# CDN (si images hébergées ailleurs)
CDN_URL=https://cdn.confluence-digitale.fr
```

---

### 1.2 Configuration CORS Strapi

**Fichier** : `/backend/config/middlewares.ts`

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
            'https://confluence-digitale.fr',
            'https://cdn.confluence-digitale.fr',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://cdn.confluence-digitale.fr',
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
        'https://confluence-digitale.fr',
        'https://www.confluence-digitale.fr',
        'http://localhost:3000', // Dev local
        'http://localhost:4321', // Dev Astro
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
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

### 1.3 Génération API Token Strapi

**Dans Strapi Admin Panel** :

1. **Settings** → **API Tokens** → **Create new API Token**
2. **Configuration** :
   ```
   Name: Frontend Read-Only
   Token duration: Unlimited
   Token type: Read-only
   ```
3. **Permissions** :
   ```
   ✅ find (GET /api/pages)
   ✅ findOne (GET /api/pages/:id)
   ❌ create (POST)
   ❌ update (PUT)
   ❌ delete (DELETE)
   ```
4. **Copier le token** (une seule fois) :
   ```
   abcd1234efgh5678ijkl9012mnop3456qrst7890uvwx
   ```

---

## 🔌 ÉTAPE 2 : CONFIGURATION FRONTEND (Astro)

### 2.1 Variables d'Environnement Frontend

**Fichier** : `/.env.example`

```bash
# Strapi API
PUBLIC_STRAPI_URL=https://api.confluence-digitale.fr
PUBLIC_STRAPI_TOKEN=your_read_only_token_here

# Strapi endpoints
PUBLIC_STRAPI_API_URL=https://api.confluence-digitale.fr/api
PUBLIC_STRAPI_UPLOADS_URL=https://api.confluence-digitale.fr/uploads
```

**Fichier** : `/.env` (local dev)

```bash
PUBLIC_STRAPI_URL=http://localhost:1337
PUBLIC_STRAPI_TOKEN=your_local_dev_token
PUBLIC_STRAPI_API_URL=http://localhost:1337/api
PUBLIC_STRAPI_UPLOADS_URL=http://localhost:1337/uploads
```

**Ajouter dans Vercel** :
- Dashboard → Settings → Environment Variables
- Ajouter `PUBLIC_STRAPI_URL` et `PUBLIC_STRAPI_TOKEN` (Production)

---

### 2.2 Client API Strapi

**Créer** : `/src/lib/strapi.ts`

```typescript
// Types génériques Strapi
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiEntity<T> {
  id: number;
  attributes: T;
}

export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      formats: {
        thumbnail?: { url: string };
        small?: { url: string };
        medium?: { url: string };
        large?: { url: string };
      };
      url: string;
    };
  };
}

// Configuration
const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_URL = `${STRAPI_URL}/api`;
const STRAPI_TOKEN = import.meta.env.PUBLIC_STRAPI_TOKEN;

// Client Strapi générique
export async function fetchStrapi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<StrapiResponse<T>> {
  const url = `${STRAPI_API_URL}${endpoint}`;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
    ...options.headers,
  };
  
  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });
    
    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error);
    throw error;
  }
}

// Helper pour URL images
export function getStrapiImageUrl(image: StrapiImage | null | undefined): string {
  if (!image?.data?.attributes?.url) return '';
  
  const url = image.data.attributes.url;
  
  // Si URL relative, ajouter base Strapi
  if (url.startsWith('/')) {
    return `${STRAPI_URL}${url}`;
  }
  
  return url;
}

// Helper pour format image spécifique
export function getStrapiImageFormat(
  image: StrapiImage | null | undefined,
  format: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'
): string {
  if (!image?.data?.attributes) return '';
  
  const formatUrl = image.data.attributes.formats?.[format]?.url;
  if (formatUrl) {
    return formatUrl.startsWith('/') ? `${STRAPI_URL}${formatUrl}` : formatUrl;
  }
  
  // Fallback vers image originale
  return getStrapiImageUrl(image);
}
```

---

### 2.3 Types TypeScript (Exemple Page)

**Créer** : `/src/types/strapi.ts`

```typescript
import type { StrapiImage } from '../lib/strapi';

// Type pour une Page Strapi
export interface Page {
  title: string;
  slug: string;
  description: string;
  content: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    metaImage: StrapiImage;
    keywords: string;
    canonicalURL: string;
  };
  hero: {
    title: string;
    subtitle: string;
    image: StrapiImage;
    ctaText: string;
    ctaLink: string;
  };
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

// Type pour un Article Blog
export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: StrapiImage;
  author: {
    data: {
      id: number;
      attributes: {
        name: string;
        avatar: StrapiImage;
      };
    };
  };
  category: {
    data: {
      id: number;
      attributes: {
        name: string;
        slug: string;
      };
    };
  };
  publishedAt: string;
}

// Type pour Service
export interface Service {
  name: string;
  slug: string;
  description: string;
  icon: string; // Lucide icon name
  features: Array<{
    id: number;
    feature: string;
  }>;
  price: number;
  priceUnit: string;
}
```

---

## 📄 ÉTAPE 3 : UTILISATION DANS PAGES ASTRO

### 3.1 Page Dynamique (Exemple : Blog)

**Fichier** : `/src/pages/blog/[slug].astro`

```astro
---
import { fetchStrapi, getStrapiImageUrl } from '../../lib/strapi';
import type { StrapiEntity } from '../../lib/strapi';
import type { Article } from '../../types/strapi';
import BaseLayout from '../../layouts/BaseLayout.astro';

export async function getStaticPaths() {
  // Récupérer tous les articles
  const response = await fetchStrapi<StrapiEntity<Article>[]>('/articles?populate=*');
  
  return response.data.map((article) => ({
    params: { slug: article.attributes.slug },
    props: { article: article.attributes },
  }));
}

const { article } = Astro.props;
const coverImageUrl = getStrapiImageUrl(article.coverImage);
---

<BaseLayout
  title={`${article.title} | Confluence Digitale`}
  description={article.excerpt}
>
  <article class="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <header class="mb-12">
        <h1 class="font-playfair text-4xl lg:text-6xl mb-4">
          {article.title}
        </h1>
        <p class="text-lg text-gray-600 mb-6">
          {article.excerpt}
        </p>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <time datetime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          {article.author.data && (
            <span>Par {article.author.data.attributes.name}</span>
          )}
        </div>
      </header>

      <!-- Cover Image -->
      {coverImageUrl && (
        <img
          src={coverImageUrl}
          alt={article.coverImage.data?.attributes.alternativeText || article.title}
          class="w-full rounded-lg mb-12"
          style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
        />
      )}

      <!-- Content (Rich Text de Strapi) -->
      <div class="prose prose-lg max-w-none" set:html={article.content} />
    </div>
  </article>
</BaseLayout>
```

---

### 3.2 Liste Articles (Exemple : Page Blog)

**Fichier** : `/src/pages/blog/index.astro`

```astro
---
import { fetchStrapi, getStrapiImageUrl } from '../../lib/strapi';
import type { StrapiEntity } from '../../lib/strapi';
import type { Article } from '../../types/strapi';
import BaseLayout from '../../layouts/BaseLayout.astro';

// Récupérer tous les articles (avec pagination)
const response = await fetchStrapi<StrapiEntity<Article>[]>(
  '/articles?populate=*&sort=publishedAt:desc&pagination[pageSize]=12'
);

const articles = response.data;
---

<BaseLayout
  title="Blog | Confluence Digitale"
  description="Actualités, conseils et guides sur le développement web moderne."
>
  <section class="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="font-playfair text-4xl lg:text-6xl mb-12 text-center">
        Notre Blog
      </h1>

      <!-- Grille Articles -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => {
          const coverUrl = getStrapiImageUrl(article.attributes.coverImage);
          
          return (
            <article
              class="bg-white rounded-lg overflow-hidden transition-transform hover:scale-105"
              style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
            >
              <!-- Image -->
              {coverUrl && (
                <img
                  src={coverUrl}
                  alt={article.attributes.title}
                  class="w-full h-48 object-cover"
                />
              )}

              <!-- Content -->
              <div class="p-6">
                <h2 class="font-playfair text-2xl mb-3">
                  <a
                    href={`/blog/${article.attributes.slug}`}
                    class="hover:text-[#D1A65E] transition-colors"
                  >
                    {article.attributes.title}
                  </a>
                </h2>
                <p class="text-gray-600 mb-4">
                  {article.attributes.excerpt}
                </p>
                <time
                  datetime={article.attributes.publishedAt}
                  class="text-sm text-gray-500"
                >
                  {new Date(article.attributes.publishedAt).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
</BaseLayout>
```

---

### 3.3 Composant React avec Données Strapi

**Fichier** : `/src/components/sections/ServicesGrid.tsx`

```typescript
import { useEffect, useState } from 'react';
import { fetchStrapi, type StrapiEntity } from '../../lib/strapi';
import type { Service } from '../../types/strapi';
import * as Icons from 'lucide-react';

export default function ServicesGrid() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadServices() {
      try {
        const response = await fetchStrapi<StrapiEntity<Service>[]>('/services?populate=*');
        setServices(response.data.map(s => s.attributes));
      } catch (err) {
        setError('Impossible de charger les services');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, []);

  if (loading) {
    return (
      <div class="text-center py-12">
        <p>Chargement des services...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div class="text-center py-12 text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl lg:text-5xl mb-12 text-center">
          Nos Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            // Dynamically get Lucide icon
            const IconComponent = Icons[service.icon as keyof typeof Icons] || Icons.Package;

            return (
              <div
                key={service.slug}
                className="bg-white p-8 rounded-lg"
                style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
              >
                {/* Icon */}
                <IconComponent className="w-12 h-12 text-[#D1A65E] mb-4" />

                {/* Title */}
                <h3 className="font-playfair text-2xl mb-3">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature.id} className="flex items-start gap-2">
                      <Icons.Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feature.feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <p className="text-2xl font-semibold text-[#D1A65E]">
                  {service.price}€ {service.priceUnit}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

**Utilisation dans page Astro** :

```astro
---
import ServicesGrid from '../components/sections/ServicesGrid.tsx';
---

<ServicesGrid client:visible />
```

---

## 🔄 ÉTAPE 4 : REVALIDATION & CACHE

### 4.1 Revalidation Vercel (ISR)

**Si besoin revalidation** (hybrid mode) :

```javascript
// astro.config.mjs
export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    isr: {
      expiration: 60 * 60, // 1 heure
    }
  })
});
```

**Dans page** :

```astro
---
export const prerender = false; // Page SSR (revalidation possible)

import { fetchStrapi } from '../lib/strapi';
const data = await fetchStrapi('/pages/home');
---
```

---

### 4.2 Webhook Strapi → Rebuild Vercel

**Configuration Strapi** :

1. **Strapi Admin** → **Settings** → **Webhooks** → **Create**
2. **Configuration** :
   ```
   Name: Vercel Rebuild
   URL: https://api.vercel.com/v1/integrations/deploy/[project-id]/[token]
   Events: entry.publish, entry.update, entry.delete
   ```

**Obtenir URL Vercel** :
- Vercel Dashboard → Projet → Settings → Git → Deploy Hooks
- Create Hook : "Strapi Content Updated"
- Copier URL générée

**Résultat** : À chaque publication/modification dans Strapi, Vercel rebuild automatiquement

---

## 🔐 ÉTAPE 5 : SÉCURITÉ

### 5.1 Variables d'Environnement Sécurisées

**Règles** :
- ✅ `PUBLIC_STRAPI_URL` : OK côté client (URL publique)
- ✅ `PUBLIC_STRAPI_TOKEN` : OK si Read-Only + permissions limitées
- ❌ `STRAPI_ADMIN_TOKEN` : JAMAIS côté client (uniquement server-side)

---

### 5.2 Validation Données Strapi

**Créer** : `/src/lib/validators.ts`

```typescript
import type { Article } from '../types/strapi';

export function validateArticle(article: unknown): article is Article {
  if (typeof article !== 'object' || article === null) return false;
  
  const a = article as Partial<Article>;
  
  return (
    typeof a.title === 'string' &&
    typeof a.slug === 'string' &&
    typeof a.content === 'string'
  );
}

// Utilisation
const response = await fetchStrapi<StrapiEntity<Article>[]>('/articles');
const validArticles = response.data
  .map(a => a.attributes)
  .filter(validateArticle);
```

---

## 📊 ÉTAPE 6 : OPTIMISATIONS

### 6.1 Cache Browser

**Headers Vercel** (déjà dans `vercel.json`) :

```json
{
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=300, s-maxage=600, stale-while-revalidate=86400"
        }
      ]
    }
  ]
}
```

---

### 6.2 Lazy Loading Images Strapi

**Composant** : `/src/components/StrapiImage.astro`

```astro
---
import type { StrapiImage } from '../lib/strapi';
import { getStrapiImageUrl, getStrapiImageFormat } from '../lib/strapi';

interface Props {
  image: StrapiImage;
  alt?: string;
  format?: 'thumbnail' | 'small' | 'medium' | 'large';
  loading?: 'lazy' | 'eager';
  class?: string;
}

const { image, alt, format = 'medium', loading = 'lazy', class: className } = Astro.props;

const imageUrl = format ? getStrapiImageFormat(image, format) : getStrapiImageUrl(image);
const altText = alt || image.data?.attributes?.alternativeText || '';
const width = image.data?.attributes?.width;
const height = image.data?.attributes?.height;
---

<img
  src={imageUrl}
  alt={altText}
  width={width}
  height={height}
  loading={loading}
  class={className}
/>
```

**Utilisation** :

```astro
<StrapiImage
  image={article.coverImage}
  format="large"
  loading="lazy"
  class="w-full rounded-lg"
/>
```

---

## ✅ CHECKLIST INTÉGRATION

### Configuration Strapi

- [ ] CORS configuré (frontend URL autorisée)
- [ ] API Token généré (Read-Only)
- [ ] Content Types créés (Pages, Articles, Services, etc.)
- [ ] Permissions publiques configurées
- [ ] Webhook Vercel configuré (rebuild auto)

### Configuration Frontend

- [ ] Variables env ajoutées (`.env`, Vercel)
- [ ] Client Strapi créé (`/src/lib/strapi.ts`)
- [ ] Types TypeScript définis (`/src/types/strapi.ts`)
- [ ] Test fetch Strapi OK (dev local)
- [ ] Images Strapi affichées
- [ ] Deployment Vercel OK

### Tests

- [ ] Pages dynamiques générées (SSG)
- [ ] Images Strapi chargent
- [ ] Pas d'erreur CORS
- [ ] Lighthouse > 90
- [ ] Responsive OK
- [ ] Webhook rebuild fonctionne

---

## 🐛 TROUBLESHOOTING

### Erreur CORS

**Symptôme** : `Access to fetch blocked by CORS policy`

**Solution** :
1. Vérifier `middlewares.ts` Strapi (origin autorisé)
2. Vérifier URL frontend exacte (https vs http)
3. Redémarrer Strapi après modification

---

### Images ne chargent pas

**Symptôme** : Images 404

**Solution** :
1. Vérifier `getStrapiImageUrl()` (URL complète)
2. Vérifier populate dans fetch : `?populate=*`
3. Vérifier permissions Strapi (upload public)

---

### Build Vercel échoue

**Symptôme** : Build fail "Cannot fetch Strapi"

**Solution** :
1. Vérifier variables env Vercel (PUBLIC_STRAPI_URL, TOKEN)
2. Vérifier Strapi accessible publiquement (pas localhost)
3. Vérifier token valide

---

## 📚 RESSOURCES

- [Strapi Documentation](https://docs.strapi.io/)
- [Strapi REST API](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html)
- [Astro Data Fetching](https://docs.astro.build/en/guides/data-fetching/)

---

**🔗 Intégration Strapi Maîtrisée ! 💪**

**Frontend Astro ↔ Backend Strapi opérationnel !** ⚡

---

**Projet** : Confluence Digitale V6.7.2  
**Date** : Novembre 2025  
**Version** : 1.0