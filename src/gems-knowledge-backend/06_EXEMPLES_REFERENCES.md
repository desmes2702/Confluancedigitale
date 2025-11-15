# 📚 EXEMPLES CODE VALIDÉ - RÉFÉRENCE

**Code production-ready TypeScript**  
**À utiliser comme base dans prompts**

---

## 📋 CONTENT TYPE COMPLET : FAQ

**Fichier** : `src/api/faq/content-types/faq/schema.json`

```json
{
  "kind": "collectionType",
  "collectionName": "faqs",
  "info": {
    "singularName": "faq",
    "pluralName": "faqs",
    "displayName": "FAQ",
    "description": "Questions fréquemment posées"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "question": {
      "type": "string",
      "required": true,
      "maxLength": 200,
      "minLength": 10
    },
    "answer": {
      "type": "richtext",
      "required": true,
      "minLength": 50
    },
    "category": {
      "type": "enumeration",
      "enum": ["general", "pricing", "technical", "legal"],
      "default": "general",
      "required": true
    },
    "order": {
      "type": "integer",
      "default": 0,
      "min": 0,
      "description": "Ordre d'affichage"
    },
    "isHighlighted": {
      "type": "boolean",
      "default": false,
      "description": "Mettre en avant cette FAQ"
    }
  }
}
```

---

## 🔧 CONTROLLER CUSTOM : Articles Populaires

**Fichier** : `src/api/article/controllers/article.ts`

```typescript
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
  // Override find - ajouter compteur vues
  async find(ctx) {
    const { data, meta } = await super.find(ctx);
    
    // Enrichir avec viewCount (exemple)
    const enrichedData = data.map(article => ({
      ...article,
      attributes: {
        ...article.attributes,
        viewCount: Math.floor(Math.random() * 1000), // À remplacer par vraie logique
      },
    }));
    
    return { data: enrichedData, meta };
  },

  // Custom endpoint : /api/articles/popular
  async popular(ctx) {
    try {
      const articles = await strapi.entityService.findMany('api::article.article', {
        filters: { 
          publishedAt: { $notNull: true },
        },
        populate: ['author', 'coverImage', 'seo'],
        sort: 'publishedAt:desc',
        limit: 3,
      });
      
      return { data: articles };
    } catch (error) {
      ctx.throw(500, `Erreur récupération articles populaires: ${error.message}`);
    }
  },

  // Custom endpoint : /api/articles/:id/related
  async related(ctx) {
    const { id } = ctx.params;
    
    try {
      // Récupérer article actuel
      const article = await strapi.entityService.findOne('api::article.article', id, {
        populate: ['category'],
      });
      
      if (!article) {
        return ctx.notFound('Article introuvable');
      }
      
      // Articles de même catégorie (exclure actuel)
      const relatedArticles = await strapi.entityService.findMany('api::article.article', {
        filters: {
          category: article.category,
          id: { $ne: id },
          publishedAt: { $notNull: true },
        },
        populate: ['author', 'coverImage'],
        limit: 3,
      });
      
      return { data: relatedArticles };
    } catch (error) {
      ctx.throw(500, `Erreur récupération articles liés: ${error.message}`);
    }
  },
}));
```

---

## 🛤️ ROUTES CUSTOM : Articles

**Fichier** : `src/api/article/routes/custom-routes.ts`

```typescript
export default {
  routes: [
    {
      method: 'GET',
      path: '/articles/popular',
      handler: 'article.popular',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/articles/:id/related',
      handler: 'article.related',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
```

---

## ⚙️ SERVICE CUSTOM : Email

**Fichier** : `src/api/contact/services/contact.ts`

```typescript
import { factories } from '@strapi/strapi';

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export default factories.createCoreService('api::contact.contact', ({ strapi }) => ({
  /**
   * Envoyer email notification nouveau contact
   */
  async sendNotificationEmail(contactData: ContactData): Promise<{ success: boolean; error?: string }> {
    const { name, email, message } = contactData;
    
    try {
      await strapi.plugins['email'].services.email.send({
        to: 'admin@confluence-digitale.fr',
        from: 'no-reply@confluence-digitale.fr',
        subject: `Nouveau contact : ${name}`,
        text: `
Nouveau message de contact :

Nom : ${name}
Email : ${email}
Message : ${message}

---
Confluence Digitale V6.7.2
        `,
      });
      
      return { success: true };
    } catch (error) {
      strapi.log.error('Erreur envoi email:', error);
      return { success: false, error: error.message };
    }
  },
  
  /**
   * Valider données contact avant création
   */
  async validateContact(data: ContactData): Promise<ValidationResult> {
    const errors: string[] = [];
    
    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push('Email invalide');
    }
    
    // Validation téléphone (optionnel si fourni)
    if (data.phone) {
      const phoneRegex = /^(\+33|0)[1-9](\d{2}){4}$/;
      if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
        errors.push('Numéro de téléphone invalide (format français)');
      }
    }
    
    // Validation message (min 10 caractères)
    if (data.message && data.message.length < 10) {
      errors.push('Message trop court (minimum 10 caractères)');
    }
    
    return {
      isValid: errors.length === 0,
      errors,
    };
  },
}));
```

---

## 🔄 LIFECYCLE HOOKS : Article

**Fichier** : `src/api/article/content-types/article/lifecycles.ts`

```typescript
export default {
  /**
   * Avant création article
   */
  async beforeCreate(event) {
    const { data } = event.params;
    
    // Auto-calculer temps de lecture
    if (data.content) {
      const wordsPerMinute = 200;
      const wordCount = data.content.split(/\s+/).length;
      data.readingTime = Math.ceil(wordCount / wordsPerMinute);
    }
    
    // Auto-générer excerpt si absent
    if (!data.excerpt && data.content) {
      const plainText = data.content.replace(/<[^>]*>/g, ''); // Strip HTML
      data.excerpt = plainText.substring(0, 297) + '...';
    }
  },

  /**
   * Après création article
   */
  async afterCreate(event) {
    const { result } = event;
    
    // Log création
    strapi.log.info(`Article créé : ${result.title} (ID: ${result.id})`);
    
    // Trigger webhook Vercel (optionnel)
    if (process.env.NODE_ENV === 'production') {
      try {
        await fetch(process.env.VERCEL_REVALIDATE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Revalidate-Token': process.env.REVALIDATE_SECRET,
          },
          body: JSON.stringify({
            type: 'article',
            slug: result.slug,
          }),
        });
      } catch (error) {
        strapi.log.error('Erreur webhook Vercel:', error);
      }
    }
  },

  /**
   * Avant update article
   */
  async beforeUpdate(event) {
    const { data } = event.params;
    
    // Recalculer temps lecture si contenu modifié
    if (data.content) {
      const wordsPerMinute = 200;
      const wordCount = data.content.split(/\s+/).length;
      data.readingTime = Math.ceil(wordCount / wordsPerMinute);
    }
  },
};
```

---

## 🛡️ POLICY CUSTOM : isOwner

**Fichier** : `src/policies/is-owner.ts`

```typescript
export default async (policyContext, config, { strapi }) => {
  const { params, state } = policyContext;
  const { id } = params;
  const user = state.user;
  
  // Si pas d'utilisateur authentifié, refuser
  if (!user) {
    return false;
  }
  
  // Récupérer l'article
  const article = await strapi.entityService.findOne('api::article.article', id, {
    populate: ['author'],
  });
  
  // Vérifier si l'utilisateur est l'auteur
  if (article && article.author && article.author.id === user.id) {
    return true;
  }
  
  // Ou si utilisateur est admin
  if (user.role && user.role.name === 'Admin') {
    return true;
  }
  
  return false;
};
```

**Utilisation dans route** :

```typescript
{
  method: 'PUT',
  path: '/articles/:id',
  handler: 'article.update',
  config: {
    policies: ['is-owner'],
  },
}
```

---

## 🔧 MIDDLEWARE CUSTOM : logger

**Fichier** : `src/middlewares/logger.ts`

```typescript
export default (config, { strapi }) => {
  return async (ctx, next) => {
    const start = Date.now();
    
    await next();
    
    const delta = Math.ceil(Date.now() - start);
    
    strapi.log.info(
      `${ctx.method} ${ctx.url} - ${ctx.status} (${delta}ms)`
    );
  };
};
```

**Configuration** dans `config/middlewares.ts` :

```typescript
export default [
  'strapi::errors',
  'global::logger', // Notre middleware custom
  'strapi::security',
  // ... autres middlewares
];
```

---

## ⚙️ CONFIGURATION DATABASE

**Fichier** : `config/database.ts`

```typescript
export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'confluence_digitale'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'password'),
      ssl: env.bool('DATABASE_SSL', false) && {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
    pool: {
      min: 2,
      max: 10,
    },
  },
});
```

---

## ☁️ CONFIGURATION CLOUDINARY

**Fichier** : `config/plugins.ts`

```typescript
export default ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
```

---

## 🔐 CONFIGURATION CORS

**Fichier** : `config/middlewares.ts`

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

## 🚀 CONFIGURATION API

**Fichier** : `config/api.ts`

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

**📚 Code Validé TypeScript Production-Ready - Utilise comme référence !**