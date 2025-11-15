# 📋 CONTENT TYPES - STRUCTURE DONNÉES

**Projet** : Confluence Digitale V6.7.2 - Backend  
**Total Content Types** : 7  
**Méthode** : Content Type Builder (UI) ou schema.json (code)

---

## 🎯 VUE D'ENSEMBLE

### 7 Content Types Standards

| # | Content Type | Slug | Usage | Champs Clés |
|---|--------------|------|-------|-------------|
| 1 | **Page** | `page` | Pages statiques | title, slug, content, seo, hero |
| 2 | **Article** | `article` | Blog | title, slug, content, coverImage, author, category |
| 3 | **Service** | `service` | Services offerts | name, slug, description, icon, features, price |
| 4 | **Testimonial** | `testimonial` | Témoignages clients | clientName, company, content, rating, photo |
| 5 | **Team Member** | `team-member` | Triade Pro | name, role, bio, photo, color |
| 6 | **FAQ** | `faq` | Questions fréquentes | question, answer, category, order |
| 7 | **Contact** | `contact` | Messages formulaire | name, email, phone, message, status |

---

## 📦 COMPOSANTS RÉUTILISABLES

### Component : SEO

**Utilisé par** : Page, Article, Service

**Fichier** : `src/components/seo/seo.json`

```json
{
  "collectionName": "components_seo_seos",
  "info": {
    "displayName": "SEO",
    "icon": "search",
    "description": "Métadonnées SEO pour optimisation moteurs de recherche"
  },
  "options": {},
  "attributes": {
    "metaTitle": {
      "type": "string",
      "required": true,
      "maxLength": 60,
      "minLength": 10
    },
    "metaDescription": {
      "type": "text",
      "required": true,
      "maxLength": 160,
      "minLength": 50
    },
    "keywords": {
      "type": "text",
      "description": "Mots-clés séparés par des virgules"
    },
    "metaImage": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images"]
    },
    "canonicalURL": {
      "type": "string",
      "description": "URL canonique (optionnel)"
    },
    "metaRobots": {
      "type": "string",
      "default": "index, follow"
    }
  }
}
```

**Création via UI** :
1. Content-Type Builder → **Create new component**
2. Category : `seo`
3. Name : `seo`
4. Add fields selon schema ci-dessus

---

### Component : Feature

**Utilisé par** : Service

**Fichier** : `src/components/features/feature.json`

```json
{
  "collectionName": "components_features_features",
  "info": {
    "displayName": "Feature",
    "icon": "check",
    "description": "Caractéristique d'un service"
  },
  "options": {},
  "attributes": {
    "feature": {
      "type": "string",
      "required": true,
      "maxLength": 255
    },
    "isHighlighted": {
      "type": "boolean",
      "default": false,
      "description": "Mettre en évidence cette feature"
    }
  }
}
```

---

## 1️⃣ CONTENT TYPE : PAGE

**Usage** : Pages statiques (Offre, Contact, À Propos, etc.)

### Schema JSON

**Fichier** : `src/api/page/content-types/page/schema.json`

```json
{
  "kind": "collectionType",
  "collectionName": "pages",
  "info": {
    "singularName": "page",
    "pluralName": "pages",
    "displayName": "Page",
    "description": "Pages statiques du site"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "title": {
      "type": "string",
      "required": true,
      "maxLength": 255,
      "minLength": 3
    },
    "slug": {
      "type": "uid",
      "targetField": "title",
      "required": true
    },
    "content": {
      "type": "richtext",
      "required": true
    },
    "excerpt": {
      "type": "text",
      "maxLength": 300,
      "description": "Résumé court de la page"
    },
    "hero": {
      "type": "component",
      "repeatable": false,
      "component": "hero.hero"
    },
    "seo": {
      "type": "component",
      "repeatable": false,
      "component": "seo.seo"
    },
    "template": {
      "type": "enumeration",
      "enum": ["default", "landing", "contact", "about"],
      "default": "default",
      "required": true
    },
    "order": {
      "type": "integer",
      "default": 0,
      "description": "Ordre d'affichage dans menu"
    }
  }
}
```

### Component Hero (Optionnel)

**Fichier** : `src/components/hero/hero.json`

```json
{
  "collectionName": "components_hero_heroes",
  "info": {
    "displayName": "Hero",
    "icon": "picture"
  },
  "options": {},
  "attributes": {
    "title": {
      "type": "string",
      "required": true
    },
    "subtitle": {
      "type": "string"
    },
    "backgroundImage": {
      "type": "media",
      "multiple": false,
      "allowedTypes": ["images"]
    },
    "ctaText": {
      "type": "string"
    },
    "ctaLink": {
      "type": "string"
    }
  }
}
```

### Permissions

**Public** :
- ✅ `find` (liste pages)
- ✅ `findOne` (page par ID ou slug)

**Authenticated** :
- ✅ `find`
- ✅ `findOne`

**Admin** :
- ✅ Toutes permissions

### Exemple API

**GET toutes les pages** :
```bash
GET /api/pages?populate=*
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
        "content": "<p>Contenu riche...</p>",
        "excerpt": "Découvrez nos services",
        "template": "landing",
        "order": 1,
        "seo": {
          "metaTitle": "Notre Offre | Confluence Digitale",
          "metaDescription": "Découvrez l'offre complète..."
        },
        "publishedAt": "2025-11-15T10:00:00.000Z"
      }
    }
  ]
}
```

---

## 2️⃣ CONTENT TYPE : ARTICLE

**Usage** : Articles de blog

### Schema JSON

**Fichier** : `src/api/article/content-types/article/schema.json`

```json
{
  "kind": "collectionType",
  "collectionName": "articles",
  "info": {
    "singularName": "article",
    "pluralName": "articles",
    "displayName": "Article",
    "description": "Articles de blog"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "title": {
      "type": "string",
      "required": true,
      "maxLength": 255
    },
    "slug": {
      "type": "uid",
      "targetField": "title",
      "required": true
    },
    "excerpt": {
      "type": "text",
      "required": true,
      "maxLength": 300,
      "minLength": 50
    },
    "content": {
      "type": "richtext",
      "required": true
    },
    "coverImage": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images"]
    },
    "author": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "plugin::users-permissions.user",
      "inversedBy": "articles"
    },
    "category": {
      "type": "enumeration",
      "enum": [
        "design-system",
        "developpement-web",
        "strategie-digitale",
        "juridique",
        "ia-automation",
        "actualites"
      ],
      "required": true
    },
    "tags": {
      "type": "json",
      "description": "Array de tags"
    },
    "readTime": {
      "type": "integer",
      "description": "Temps de lecture en minutes (auto-calculé)",
      "min": 1
    },
    "seo": {
      "type": "component",
      "repeatable": false,
      "component": "seo.seo"
    },
    "featured": {
      "type": "boolean",
      "default": false,
      "description": "Article mis en avant"
    },
    "views": {
      "type": "integer",
      "default": 0,
      "description": "Nombre de vues"
    }
  }
}
```

### Permissions

**Public** :
- ✅ `find` (liste articles publiés)
- ✅ `findOne` (article par ID ou slug)

**Conditions (Public)** :
- Seulement articles avec `publishedAt` non null

### Exemple API

**GET articles publiés, catégorie "design-system", triés par date** :
```bash
GET /api/articles?filters[category][$eq]=design-system&filters[publishedAt][$notNull]=true&sort=publishedAt:desc&populate[author][fields][0]=username&populate[coverImage]=*&populate[seo]=*
```

**Réponse** :
```json
{
  "data": [
    {
      "id": 5,
      "attributes": {
        "title": "Design System V6.7.2 : Les Nouveautés",
        "slug": "design-system-v6-7-2-nouveautes",
        "excerpt": "Découvrez les dernières évolutions...",
        "content": "<p>Contenu complet...</p>",
        "category": "design-system",
        "tags": ["design", "ui", "update"],
        "readTime": 8,
        "featured": true,
        "views": 142,
        "coverImage": {
          "data": {
            "attributes": {
              "url": "/uploads/cover_abc123.jpg"
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
        "publishedAt": "2025-11-10T09:00:00.000Z"
      }
    }
  ]
}
```

---

## 3️⃣ CONTENT TYPE : SERVICE

**Usage** : Services offerts par Confluence Digitale

### Schema JSON

**Fichier** : `src/api/service/content-types/service/schema.json`

```json
{
  "kind": "collectionType",
  "collectionName": "services",
  "info": {
    "singularName": "service",
    "pluralName": "services",
    "displayName": "Service",
    "description": "Services offerts"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "name": {
      "type": "string",
      "required": true,
      "maxLength": 100
    },
    "slug": {
      "type": "uid",
      "targetField": "name",
      "required": true
    },
    "description": {
      "type": "richtext",
      "required": true
    },
    "shortDescription": {
      "type": "text",
      "maxLength": 200,
      "required": true
    },
    "icon": {
      "type": "string",
      "required": true,
      "description": "Nom de l'icône Lucide React (ex: 'Palette', 'Code')"
    },
    "features": {
      "type": "component",
      "repeatable": true,
      "component": "features.feature"
    },
    "price": {
      "type": "decimal",
      "required": false,
      "min": 0,
      "description": "Prix en euros"
    },
    "priceUnit": {
      "type": "string",
      "default": "/ mois",
      "description": "Unité de prix (ex: '/ mois', '/ projet')"
    },
    "category": {
      "type": "enumeration",
      "enum": ["design", "developpement", "strategie", "juridique", "ia"],
      "required": true
    },
    "color": {
      "type": "enumeration",
      "enum": ["premium", "cta", "contractuel"],
      "default": "cta",
      "description": "Couleur thème (premium=#D1A65E, cta=#10b981, contractuel=#A32E3A)"
    },
    "assignedTo": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "api::team-member.team-member",
      "inversedBy": "services"
    },
    "seo": {
      "type": "component",
      "repeatable": false,
      "component": "seo.seo"
    },
    "order": {
      "type": "integer",
      "default": 0,
      "description": "Ordre d'affichage"
    },
    "isPopular": {
      "type": "boolean",
      "default": false,
      "description": "Service populaire (badge)"
    }
  }
}
```

### Permissions

**Public** :
- ✅ `find`
- ✅ `findOne`

### Exemple API

**GET services catégorie "design", populaires, avec features et membre assigné** :
```bash
GET /api/services?filters[category][$eq]=design&filters[isPopular][$eq]=true&populate[features]=*&populate[assignedTo][fields][0]=name&populate[assignedTo][fields][1]=photo
```

---

## 4️⃣ CONTENT TYPE : TESTIMONIAL

**Usage** : Témoignages clients

### Schema JSON

**Fichier** : `src/api/testimonial/content-types/testimonial/schema.json`

```json
{
  "kind": "collectionType",
  "collectionName": "testimonials",
  "info": {
    "singularName": "testimonial",
    "pluralName": "testimonials",
    "displayName": "Testimonial",
    "description": "Témoignages clients"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "clientName": {
      "type": "string",
      "required": true,
      "maxLength": 100
    },
    "company": {
      "type": "string",
      "required": true,
      "maxLength": 100
    },
    "role": {
      "type": "string",
      "maxLength": 100,
      "description": "Poste du client (ex: 'CEO', 'Directeur Marketing')"
    },
    "content": {
      "type": "text",
      "required": true,
      "maxLength": 500,
      "minLength": 50
    },
    "rating": {
      "type": "integer",
      "required": true,
      "min": 1,
      "max": 5,
      "default": 5
    },
    "photo": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images"]
    },
    "companyLogo": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images"]
    },
    "projectType": {
      "type": "enumeration",
      "enum": ["design", "developpement", "strategie", "juridique", "ia"],
      "required": false
    },
    "featured": {
      "type": "boolean",
      "default": false,
      "description": "Témoignage mis en avant"
    },
    "order": {
      "type": "integer",
      "default": 0
    }
  }
}
```

### Permissions

**Public** :
- ✅ `find` (seulement testimonials publiés)
- ✅ `findOne`

### Exemple API

**GET 3 témoignages featured, triés par rating** :
```bash
GET /api/testimonials?filters[featured][$eq]=true&sort=rating:desc&pagination[pageSize]=3&populate=*
```

---

## 5️⃣ CONTENT TYPE : TEAM MEMBER

**Usage** : Triade professionnelle (Antoine, Pascal, Laly)

### Schema JSON

**Fichier** : `src/api/team-member/content-types/team-member/schema.json`

```json
{
  "kind": "collectionType",
  "collectionName": "team_members",
  "info": {
    "singularName": "team-member",
    "pluralName": "team-members",
    "displayName": "Team Member",
    "description": "Membres de l'équipe Confluence Digitale"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "name": {
      "type": "string",
      "required": true,
      "maxLength": 100
    },
    "slug": {
      "type": "uid",
      "targetField": "name",
      "required": true
    },
    "role": {
      "type": "string",
      "required": true,
      "maxLength": 100,
      "description": "Poste (ex: 'Expert Design & UX')"
    },
    "bio": {
      "type": "richtext",
      "required": true
    },
    "shortBio": {
      "type": "text",
      "maxLength": 200,
      "required": true
    },
    "photo": {
      "type": "media",
      "multiple": false,
      "required": true,
      "allowedTypes": ["images"]
    },
    "color": {
      "type": "enumeration",
      "enum": ["premium", "cta", "contractuel"],
      "required": true,
      "description": "Couleur associée (Antoine=premium, Pascal=cta, Laly=contractuel)"
    },
    "expertise": {
      "type": "json",
      "description": "Array de compétences"
    },
    "email": {
      "type": "email",
      "required": false
    },
    "linkedin": {
      "type": "string",
      "required": false,
      "description": "URL profil LinkedIn"
    },
    "services": {
      "type": "relation",
      "relation": "oneToMany",
      "target": "api::service.service",
      "mappedBy": "assignedTo"
    },
    "order": {
      "type": "integer",
      "default": 0,
      "required": true
    }
  }
}
```

### Permissions

**Public** :
- ✅ `find`
- ✅ `findOne`

### Exemple API

**GET triade complète (3 membres), triée par order** :
```bash
GET /api/team-members?sort=order:asc&populate[photo]=*&populate[services][fields][0]=name
```

**Données attendues** :
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "name": "Antoine",
        "role": "Expert Design & UX",
        "shortBio": "Spécialiste Design System et UI/UX moderne",
        "color": "premium",
        "order": 1,
        "expertise": ["Design System", "UI/UX", "Figma"],
        "photo": { "data": { "attributes": { "url": "/uploads/antoine.jpg" } } }
      }
    },
    {
      "id": 2,
      "attributes": {
        "name": "Pascal",
        "role": "Lead Développeur",
        "shortBio": "Architecte solutions web & IA",
        "color": "cta",
        "order": 2,
        "expertise": ["React", "Astro", "Node.js", "IA"]
      }
    },
    {
      "id": 3,
      "attributes": {
        "name": "Laly",
        "role": "Experte Juridique",
        "shortBio": "Conseil juridique numérique TPE/PME",
        "color": "contractuel",
        "order": 3,
        "expertise": ["RGPD", "Contrats", "Propriété intellectuelle"]
      }
    }
  ]
}
```

---

## 6️⃣ CONTENT TYPE : FAQ

**Usage** : Questions fréquentes

### Schema JSON

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
      "maxLength": 255
    },
    "answer": {
      "type": "richtext",
      "required": true
    },
    "category": {
      "type": "enumeration",
      "enum": ["general", "design", "developpement", "juridique", "tarifs"],
      "required": true
    },
    "order": {
      "type": "integer",
      "default": 0,
      "description": "Ordre d'affichage dans la catégorie"
    },
    "isPopular": {
      "type": "boolean",
      "default": false,
      "description": "Question populaire (affichée en premier)"
    }
  }
}
```

### Permissions

**Public** :
- ✅ `find`
- ✅ `findOne`

### Exemple API

**GET FAQs catégorie "tarifs", triées par popularity puis order** :
```bash
GET /api/faqs?filters[category][$eq]=tarifs&sort[0]=isPopular:desc&sort[1]=order:asc
```

---

## 7️⃣ CONTENT TYPE : CONTACT

**Usage** : Messages formulaire de contact

### Schema JSON

**Fichier** : `src/api/contact/content-types/contact/schema.json`

```json
{
  "kind": "collectionType",
  "collectionName": "contacts",
  "info": {
    "singularName": "contact",
    "pluralName": "contacts",
    "displayName": "Contact",
    "description": "Messages de contact"
  },
  "options": {
    "draftAndPublish": false
  },
  "pluginOptions": {},
  "attributes": {
    "name": {
      "type": "string",
      "required": true,
      "maxLength": 100
    },
    "email": {
      "type": "email",
      "required": true
    },
    "phone": {
      "type": "string",
      "required": false,
      "maxLength": 20
    },
    "company": {
      "type": "string",
      "required": false,
      "maxLength": 100
    },
    "subject": {
      "type": "enumeration",
      "enum": ["general", "devis", "support", "partenariat"],
      "default": "general",
      "required": true
    },
    "message": {
      "type": "text",
      "required": true,
      "maxLength": 1000,
      "minLength": 20
    },
    "status": {
      "type": "enumeration",
      "enum": ["new", "read", "replied", "archived"],
      "default": "new",
      "required": true
    },
    "ipAddress": {
      "type": "string",
      "required": false,
      "private": true,
      "description": "IP de l'expéditeur (anti-spam)"
    },
    "userAgent": {
      "type": "text",
      "required": false,
      "private": true
    }
  }
}
```

### Permissions

**Public** :
- ✅ `create` (créer nouveau message)
- ❌ `find` (NON - seulement Admin)
- ❌ `findOne` (NON - seulement Admin)

**Admin** :
- ✅ `find` (voir tous messages)
- ✅ `findOne`
- ✅ `update` (changer status)
- ✅ `delete`

### Custom Controller (Optionnel)

**Fichier** : `src/api/contact/controllers/contact.js`

```javascript
'use strict';

module.exports = {
  async create(ctx) {
    const { name, email, phone, company, subject, message } = ctx.request.body.data;
    
    // Validation email
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return ctx.badRequest('Email invalide');
    }
    
    // Validation téléphone français (optionnel)
    if (phone && !phone.match(/^(?:(?:\+|00)33|0)[1-9](?:[0-9]{8})$/)) {
      return ctx.badRequest('Téléphone invalide (format français attendu)');
    }
    
    // Sanitization message
    const sanitizedMessage = message.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    // Créer entrée
    const entry = await strapi.entityService.create('api::contact.contact', {
      data: {
        name,
        email,
        phone,
        company,
        subject,
        message: sanitizedMessage,
        status: 'new',
        ipAddress: ctx.request.ip,
        userAgent: ctx.request.headers['user-agent']
      }
    });
    
    // Optionnel : Envoyer notification email à l'admin
    // await strapi.plugins['email'].services.email.send({
    //   to: 'admin@confluence-digitale.fr',
    //   subject: `Nouveau contact : ${subject}`,
    //   text: `${name} (${email}) a envoyé un message.\n\n${message}`
    // });
    
    // Retourner seulement l'ID (pas toutes les données)
    return { id: entry.id, message: 'Message envoyé avec succès' };
  }
};
```

### Exemple API

**POST nouveau message** :
```bash
POST /api/contacts
Content-Type: application/json

{
  "data": {
    "name": "Jean Dupont",
    "email": "jean.dupont@example.com",
    "phone": "0612345678",
    "company": "Example SAS",
    "subject": "devis",
    "message": "Bonjour, je souhaite obtenir un devis pour la création d'un site web."
  }
}
```

**Réponse** :
```json
{
  "id": 42,
  "message": "Message envoyé avec succès"
}
```

---

## 📊 RÉCAPITULATIF RELATIONS

```
User (Strapi Users)
  └─ oneToMany → Article (author)

Team Member
  └─ oneToMany → Service (assignedTo)
```

---

## ✅ CHECKLIST CRÉATION

### Par Content Type

- [ ] Schema JSON créé (`schema.json`)
- [ ] Components créés (SEO, Feature, Hero si nécessaire)
- [ ] Permissions configurées (Public vs Admin)
- [ ] Content Type visible dans Admin Panel
- [ ] Test création entrée manuelle
- [ ] Test requête API GET

### Globalement

- [ ] 7 Content Types créés
- [ ] 3 Components créés (SEO, Feature, Hero)
- [ ] Toutes permissions configurées
- [ ] Relations testées (Article ↔ User, Service ↔ Team Member)

---

## 🚀 PROCHAINES ÉTAPES

Après création Content Types :

1. ✅ **Tester API** → `03_API_ENDPOINTS.md`
2. ✅ **Configurer Permissions** → `04_AUTHENTIFICATION.md`
3. ✅ **Déployer** → `05_DEPLOYMENT_PRODUCTION.md`

---

**📋 Content Types Définis ! Structure Données Complète ! 💪**

---

**Projet** : Confluence Digitale V6.7.2  
**Date** : Novembre 2025  
**Version** : 1.0
