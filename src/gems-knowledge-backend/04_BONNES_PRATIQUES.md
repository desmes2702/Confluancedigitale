# ✅ BONNES PRATIQUES BACKEND - RÈGLES ABSOLUES

**Strapi v4 + PostgreSQL + TypeScript**  
**À respecter TOUJOURS**

---

## 🎯 RÈGLE #1 : NOMENCLATURE STRICTE

### API IDs → kebab-case

```typescript
// ✅ CORRECT
"singularName": "team-member"
"singularName": "case-study"
"singularName": "faq"

// ❌ INCORRECT
"singularName": "TeamMember"
"singularName": "team_member"
"singularName": "caseStudy"
```

---

### Models → PascalCase

```typescript
// ✅ CORRECT
const TeamMember = strapi.db.query('api::team-member.team-member');
const CaseStudy = strapi.db.query('api::case-study.case-study');

// ❌ INCORRECT
const teamMember = strapi.db.query('api::team-member.team-member');
const team_member = strapi.db.query('api::team-member.team-member');
```

---

### Variables → camelCase

```typescript
// ✅ CORRECT
const teamMemberData = await strapi.entityService.findMany(...);
const caseStudyId = params.id;

// ❌ INCORRECT
const TeamMemberData = ...;
const case_study_id = ...;
```

---

### Fichiers → kebab-case.ts

```
✅ /src/api/team-member/
✅ /src/api/case-study/
✅ case-study.ts
✅ contact.ts

❌ /src/api/TeamMember/
❌ /src/api/team_member/
❌ caseStudy.ts
❌ contact.js (JavaScript obsolète)
```

---

## 🎯 RÈGLE #2 : TYPESCRIPT OBLIGATOIRE

### Tous les fichiers → .ts

```typescript
// ✅ CORRECT - TypeScript
// controllers/article.ts
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
  async find(ctx) {
    // ... code
  }
}));

// ❌ INCORRECT - JavaScript
// controllers/article.js
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async find(ctx) {
    // ... code
  }
}));
```

---

### Typage strict

```typescript
// ✅ CORRECT - Types définis
interface ContactData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

async function sendEmail(data: ContactData): Promise<{ success: boolean }> {
  // ... code
}

// ❌ INCORRECT - Pas de types
async function sendEmail(data) {
  // ... code
}
```

---

## 🎯 RÈGLE #3 : STRAPI V4 UNIQUEMENT

### Entity Service (v4)

```typescript
// ✅ CORRECT (Strapi v4)
const articles = await strapi.entityService.findMany('api::article.article', {
  filters: { category: 'web' },
  populate: ['author', 'seo'],
});

// ❌ INCORRECT (Strapi v3 - obsolète)
const articles = await strapi.query('article').find({ category: 'web' });
```

---

### Query Engine (v4)

```typescript
// ✅ CORRECT
const article = await strapi.db.query('api::article.article').findOne({
  where: { slug: 'my-article' },
  populate: ['author'],
});

// ❌ INCORRECT (v3)
const article = await strapi.query('article').findOne({ slug: 'my-article' });
```

---

## 🎯 RÈGLE #4 : VALIDATIONS OBLIGATOIRES

### Tous les Champs DOIVENT Avoir :

1. **type** (string, text, richtext, email, etc.)
2. **required** (true/false)
3. **constraints** (min, max, unique, etc.)

```json
{
  "title": {
    "type": "string",
    "required": true,
    "maxLength": 255,
    "minLength": 3
  },
  "email": {
    "type": "email",
    "required": true,
    "unique": true
  },
  "content": {
    "type": "richtext",
    "required": true,
    "minLength": 100
  }
}
```

---

## 🎯 RÈGLE #5 : COMPONENT SEO OBLIGATOIRE

### Content Types Publics

**DOIVENT avoir** component SEO :
- ✅ Page
- ✅ Article
- ✅ Service

**N'ont PAS besoin** :
- ❌ Contact (formulaire)
- ❌ FAQ (partie de page)
- ❌ Testimonial (embed)

```json
{
  "seo": {
    "type": "component",
    "repeatable": false,
    "component": "seo.seo",
    "required": true
  }
}
```

---

## 🎯 RÈGLE #6 : PERMISSIONS GRANULAIRES

### Par Défaut

| Rôle | Permissions |
|------|-------------|
| **Public** | find, findOne |
| **Authenticated** | create, update, delete |
| **Admin** | Full access |

**Exception Contact** :
- Public : create (formulaire public)
- Authenticated : find, findOne, update, delete
- Admin : Full access

---

### Configuration Permissions

**Settings → Users & Permissions plugin → Roles**

```
Public :
  page: ✅ find, ✅ findOne
  article: ✅ find, ✅ findOne
  contact: ✅ create

Authenticated :
  page: ✅ create, ✅ update, ✅ delete
  article: ✅ create, ✅ update, ✅ delete
  contact: ✅ find, ✅ findOne, ✅ update, ✅ delete
```

---

## 🎯 RÈGLE #7 : POSTGRESQL (PAS SQLITE)

### Configuration Database

```typescript
// ✅ CORRECT - PostgreSQL
export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'confluence_digitale'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

// ❌ INTERDIT (sauf dev local rapide)
export default {
  connection: {
    client: 'sqlite',
    connection: {
      filename: '.tmp/data.db',
    },
  },
};
```

---

## 🎯 RÈGLE #8 : RELATIONS EXPLICITES

### Many-to-One (Article → Team Member)

**Article schema** :
```json
{
  "author": {
    "type": "relation",
    "relation": "manyToOne",
    "target": "api::team-member.team-member",
    "inversedBy": "articles"
  }
}
```

**Team Member schema** :
```json
{
  "articles": {
    "type": "relation",
    "relation": "oneToMany",
    "target": "api::article.article",
    "mappedBy": "author"
  }
}
```

**⚠️ Important** : `inversedBy` et `mappedBy` doivent correspondre !

---

## 🎯 RÈGLE #9 : LIFECYCLE HOOKS

### beforeCreate / afterCreate

```typescript
// src/api/article/content-types/article/lifecycles.ts
export default {
  async beforeCreate(event) {
    const { data } = event.params;
    
    // Auto-calculate reading time
    const wordsPerMinute = 200;
    const wordCount = data.content?.split(/\s+/).length || 0;
    data.readingTime = Math.ceil(wordCount / wordsPerMinute);
  },
  
  async afterCreate(event) {
    const { result } = event;
    
    // Send notification (webhook, email, etc.)
    console.log(`New article created: ${result.title}`);
  },
};
```

---

## 🎯 RÈGLE #10 : CONTROLLERS CUSTOMS

### Cas d'Usage

Créer controller custom pour :
- ✅ Logique métier complexe
- ✅ Agrégation données multiple sources
- ✅ Validations custom
- ✅ Transformations réponse

**Exemple** :
```typescript
// src/api/article/controllers/article.ts
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
  // Override find - ajouter popularité
  async find(ctx) {
    const { data, meta } = await super.find(ctx);
    
    // Ajouter viewCount pour chaque article
    const enrichedData = await Promise.all(
      data.map(async (article) => {
        const viewCount = await getViewCount(article.id);
        return { ...article, viewCount };
      })
    );
    
    return { data: enrichedData, meta };
  },
  
  // Custom endpoint /api/articles/popular
  async popular(ctx) {
    const articles = await strapi.entityService.findMany('api::article.article', {
      filters: { isHighlighted: true },
      populate: ['author', 'coverImage'],
      sort: 'publishedAt:desc',
      limit: 3,
    });
    
    return { data: articles };
  },
}));
```

---

## 🎯 RÈGLE #11 : SÉCURITÉ

### JWT Secret

```env
# .env
JWT_SECRET=your_very_long_and_secure_random_string_here_minimum_32_characters
```

**⚠️ Ne JAMAIS committer .env !**

---

### CORS Configuration

```typescript
// config/middlewares.ts
export default [
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:4321',
        'https://confluence-digitale.fr',
        'https://www.confluence-digitale.fr',
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
];
```

---

### Rate Limiting

```typescript
// config/api.ts
export default {
  rateLimit: {
    enabled: true,
    interval: 60000, // 1 minute
    max: 100, // max 100 requests/minute
  },
};
```

---

## 🎯 RÈGLE #12 : PERFORMANCE

### Indexes Database

```json
// src/api/article/content-types/article/schema.json
{
  "attributes": {
    "slug": {
      "type": "uid",
      "targetField": "title",
      "required": true,
      "unique": true // ← Crée automatiquement un index
    },
    "category": {
      "type": "enumeration",
      "enum": ["web", "mobile", "seo"]
      // Add index manuellement via migration si queries fréquentes
    }
  }
}
```

---

### Populate Sélectif

```typescript
// ❌ MAUVAIS - Charge TOUT
const articles = await strapi.entityService.findMany('api::article.article', {
  populate: '*',
});

// ✅ BON - Charge uniquement nécessaire
const articles = await strapi.entityService.findMany('api::article.article', {
  populate: ['author', 'coverImage', 'seo'],
});
```

---

## 🎯 RÈGLE #13 : TESTS

### Variables Environnement Test

```env
# .env.test
DATABASE_NAME=confluence_digitale_test
NODE_ENV=test
```

---

### Test Controller

```typescript
// tests/api/article.test.ts
import request from 'supertest';

describe('Article API', () => {
  it('GET /api/articles returns list', async () => {
    const res = await request(strapi.server.httpServer)
      .get('/api/articles')
      .expect(200);
    
    expect(res.body.data).toBeInstanceOf(Array);
  });
});
```

---

## ✅ CHECKLIST QUALITÉ

### Avant chaque Commit

- [ ] TypeScript (.ts) - PAS JavaScript (.js)
- [ ] Nomenclature respectée (kebab-case, camelCase, PascalCase)
- [ ] Strapi v4 API (pas v3)
- [ ] Validations sur TOUS les champs
- [ ] Component SEO si Content Type public
- [ ] Permissions configurées
- [ ] PostgreSQL (pas SQLite)
- [ ] Relations bidirectionnelles correctes
- [ ] CORS configuré
- [ ] JWT_SECRET sécurisé
- [ ] .env pas committé
- [ ] Tests passent

---

**✅ Bonnes Pratiques Strapi v4 + TypeScript - Respecte TOUJOURS !**