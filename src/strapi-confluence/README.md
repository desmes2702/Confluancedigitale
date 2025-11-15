# 🎯 STRAPI BACKEND - CONFLUENCE DIGITALE

**Version** : V1.0 (compatible Astro V5.27g)  
**Date** : 9 novembre 2025  
**Stack** : Strapi 4.x + PostgreSQL + Node.js  
**Status** : 📋 **Architecture Complète - Prêt à installer**

---

## 📦 QUICK START

```bash
# Installation Strapi
cd strapi-confluence
npm install

# Configuration base de données
# Éditer .env avec vos credentials PostgreSQL

# Lancer Strapi
npm run develop

# Accéder au panel admin
# http://localhost:1337/admin
```

---

## 🎯 ARCHITECTURE BACKEND

### **Collections Types (8)**

| Collection | Description | Champs |
|------------|-------------|--------|
| **Expert** | Triade professionnelle (Antoine, Pascal, Laly) | name, title, description, guarantees, color, icon, image |
| **FAQ** | Questions/Réponses dynamiques | question, answer, expert, category, order |
| **Case Study** | Études de cas clients | title, client, sector, description, metrics, before_after, images |
| **Availability** | Exclusivités territoriales | sector, location, status, reserved_date |
| **Testimonial** | Témoignages clients | client_name, company, role, content, rating, photo |
| **Lead** | Formulaires (Contact/Audit/Réservation) | type, name, email, phone, message, status, source |
| **Page Content** | Blocs de contenu réutilisables | title, content, page, order |
| **Metric** | Statistiques PageSpeed/Performance | metric_name, value, description, icon |

### **Single Types (5)**

| Single Type | Description | Sections |
|-------------|-------------|----------|
| **Homepage** | Page Landing | Hero, Pain Points, PageSpeed, Solution, Triade, CTA |
| **Offer Page** | Page Offre | Pricing, Benefits, Availability Table, Contract |
| **Method Page** | Notre Méthode | Process Steps, Tools, Guarantees |
| **Contact Page** | Page Contact | Form Settings, Contact Info, Map |
| **Global Settings** | Config globale | Site Name, Logo, Colors, Fonts, Footer |

---

## 📊 SCHEMA DÉTAILLÉ

### **1. Collection: Expert**

```json
{
  "name": "Text (required, unique)",
  "title": "Text (required)",
  "description": "Rich Text",
  "guarantees": "JSON (array of strings)",
  "color": "Text (Hex color)",
  "icon": "Enumeration (shield, code, rocket)",
  "image": "Media (single)",
  "order": "Number",
  "slug": "UID (auto-generated from name)"
}
```

**Exemple de données** :
```json
{
  "name": "Antoine",
  "title": "Stratège Web & Architecte Technique",
  "description": "15 ans d'expertise...",
  "guarantees": [
    "Performance 100/100 garantie",
    "Architecture technique robuste",
    "Code propre et maintenable"
  ],
  "color": "#D1A65E",
  "icon": "shield",
  "image": "/uploads/antoine.jpg",
  "order": 1,
  "slug": "antoine"
}
```

---

### **2. Collection: FAQ**

```json
{
  "question": "Text (required)",
  "answer": "Rich Text (required)",
  "expert": "Relation (Expert, many-to-one)",
  "category": "Enumeration (general, pricing, technical, process)",
  "order": "Number",
  "published": "Boolean (default: true)"
}
```

**Exemple de données** :
```json
{
  "question": "Pourquoi 149€/mois et pas un prix unique ?",
  "answer": "Parce que votre site doit rester performant...",
  "expert": "pascal",
  "category": "pricing",
  "order": 1,
  "published": true
}
```

---

### **3. Collection: Case Study**

```json
{
  "title": "Text (required)",
  "client": "Text (required)",
  "sector": "Enumeration (artisan, restaurant, service, commerce, sante)",
  "location": "Text",
  "description": "Rich Text",
  "challenge": "Rich Text",
  "solution": "Rich Text",
  "results": "Rich Text",
  "metrics": "Component (repeatable)",
  "before_score": "Number (0-100)",
  "after_score": "Number (0-100)",
  "testimonial": "Relation (Testimonial, one-to-one)",
  "images": "Media (multiple)",
  "featured": "Boolean",
  "published_date": "Date",
  "slug": "UID"
}
```

**Component: Metric**
```json
{
  "label": "Text",
  "value": "Text",
  "improvement": "Number"
}
```

**Exemple de données** :
```json
{
  "title": "Plombier Lyon 3e - De 2/100 à 100/100",
  "client": "Plomberie Martin",
  "sector": "artisan",
  "location": "Lyon 3e",
  "description": "Un plombier local invisible sur Google...",
  "metrics": [
    { "label": "PageSpeed", "value": "100/100", "improvement": 98 },
    { "label": "Conversions", "value": "+340%", "improvement": 340 },
    { "label": "Devis/mois", "value": "47", "improvement": 285 }
  ],
  "before_score": 2,
  "after_score": 100,
  "featured": true,
  "slug": "plombier-lyon-3e"
}
```

---

### **4. Collection: Availability**

```json
{
  "sector": "Enumeration (plombier, electricien, menuisier, peintre, etc.)",
  "location": "Text (required)",
  "status": "Enumeration (available, reserved, taken)",
  "reserved_by": "Text",
  "reserved_date": "Date",
  "expiration_date": "Date",
  "price": "Number"
}
```

**Exemple de données** :
```json
{
  "sector": "plombier",
  "location": "Lyon 6e",
  "status": "available",
  "reserved_by": null,
  "reserved_date": null,
  "expiration_date": null,
  "price": 149
}
```

---

### **5. Collection: Testimonial**

```json
{
  "client_name": "Text (required)",
  "company": "Text",
  "role": "Text",
  "content": "Text (required, max 280 chars)",
  "rating": "Number (1-5)",
  "photo": "Media (single)",
  "case_study": "Relation (Case Study, one-to-one)",
  "featured": "Boolean",
  "published_date": "Date"
}
```

---

### **6. Collection: Lead**

```json
{
  "type": "Enumeration (contact, audit, reservation)",
  "name": "Text",
  "email": "Email (required)",
  "phone": "Text",
  "message": "Text",
  "sector": "Text",
  "location": "Text",
  "status": "Enumeration (new, contacted, qualified, converted, lost)",
  "source": "Text (page URL)",
  "created_at": "DateTime (auto)",
  "contacted_at": "DateTime",
  "notes": "Rich Text"
}
```

**Webhook** : Envoyer email notification à chaque nouveau lead

---

### **7. Single Type: Homepage**

```json
{
  "hero": {
    "badge_text": "Text",
    "title": "Text",
    "subtitle": "Rich Text",
    "cta_primary_text": "Text",
    "cta_primary_link": "Text",
    "cta_secondary_text": "Text",
    "cta_secondary_link": "Text",
    "trust_badges": "Component (repeatable)"
  },
  "pain_points": "Component (repeatable, max 3)",
  "pagespeed": {
    "title": "Text",
    "subtitle": "Text",
    "cta_text": "Text",
    "cta_link": "Text"
  },
  "solutions": "Component (repeatable, max 6)",
  "cta_final": {
    "title": "Text",
    "subtitle": "Text",
    "cta_primary_text": "Text",
    "cta_secondary_text": "Text",
    "stats": "Component (repeatable, max 3)"
  }
}
```

---

### **8. Single Type: Global Settings**

```json
{
  "site_name": "Text",
  "site_description": "Text",
  "contact_email": "Email",
  "contact_phone": "Text",
  "address": "Text",
  "logo": "Media",
  "favicon": "Media",
  "colors": {
    "primary": "Text (Hex)",
    "secondary": "Text (Hex)",
    "accent": "Text (Hex)",
    "success": "Text (Hex)",
    "danger": "Text (Hex)"
  },
  "social_links": {
    "linkedin": "Text (URL)",
    "twitter": "Text (URL)",
    "facebook": "Text (URL)"
  },
  "seo": {
    "meta_title": "Text",
    "meta_description": "Text",
    "og_image": "Media"
  },
  "analytics": {
    "google_analytics_id": "Text",
    "google_tag_manager_id": "Text"
  }
}
```

---

## 🔌 INTÉGRATION ASTRO

### **Installation**

```bash
# Dans le projet Astro
npm install @strapi/strapi axios
```

### **Configuration**

Créer `/astro-confluence/.env` :

```bash
PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_api_token_here
```

### **Exemple de fetch**

```typescript
// /astro-confluence/src/lib/strapi.ts
const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = import.meta.env.STRAPI_API_TOKEN;

export async function fetchExperts() {
  const response = await fetch(`${STRAPI_URL}/api/experts?populate=*`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  });
  
  const data = await response.json();
  return data.data;
}
```

### **Utilisation dans Astro**

```astro
---
// /astro-confluence/src/pages/index.astro
import { fetchExperts } from '../lib/strapi';

const experts = await fetchExperts();
---

<section>
  {experts.map((expert) => (
    <div>
      <h3>{expert.attributes.name}</h3>
      <p>{expert.attributes.title}</p>
    </div>
  ))}
</section>
```

---

## 📧 EMAIL SERVICE

### **Configuration Strapi Email Plugin**

```bash
npm install @strapi/provider-email-nodemailer
```

`/config/plugins.js` :

```javascript
module.exports = ({ env }) => ({
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
        defaultFrom: 'noreply@confluencedigitale.fr',
        defaultReplyTo: 'contact@confluencedigitale.fr',
      },
    },
  },
});
```

### **Webhook: Nouveau Lead**

`/src/api/lead/content-types/lead/lifecycles.js` :

```javascript
module.exports = {
  async afterCreate(event) {
    const { result } = event;

    // Envoyer email à l'équipe
    await strapi.plugins['email'].services.email.send({
      to: 'contact@confluencedigitale.fr',
      subject: `Nouveau lead ${result.type}`,
      html: `
        <h2>Nouveau lead reçu</h2>
        <p><strong>Type:</strong> ${result.type}</p>
        <p><strong>Nom:</strong> ${result.name}</p>
        <p><strong>Email:</strong> ${result.email}</p>
        <p><strong>Message:</strong> ${result.message}</p>
      `,
    });

    // Envoyer email de confirmation au client
    if (result.email) {
      await strapi.plugins['email'].services.email.send({
        to: result.email,
        subject: 'Votre demande a bien été reçue',
        html: `
          <h2>Merci ${result.name} !</h2>
          <p>Nous avons bien reçu votre demande ${result.type}.</p>
          <p>Nous vous répondrons sous 48h maximum.</p>
          <p>À très bientôt,<br>L'équipe Confluence Digitale</p>
        `,
      });
    }
  },
};
```

---

## 🔐 PERMISSIONS & SÉCURITÉ

### **Rôles Strapi**

1. **Public** (non authentifié)
   - ✅ GET Experts (find, findOne)
   - ✅ GET FAQ (find, findOne)
   - ✅ GET Case Studies (find, findOne)
   - ✅ GET Testimonials (find)
   - ✅ GET Availabilities (find)
   - ✅ GET Homepage (find)
   - ✅ GET Global Settings (find)
   - ✅ POST Lead (create)
   - ❌ Tout le reste

2. **Authenticated** (admin)
   - ✅ CRUD complet sur toutes les collections

### **Variables d'environnement**

```bash
# .env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your_app_keys_here
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
JWT_SECRET=your_jwt_secret

# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=strapi_confluence
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_password
DATABASE_SSL=false

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

---

## 📦 STRUCTURE FINALE

```
/strapi-confluence
├── config/
│   ├── database.js
│   ├── plugins.js
│   ├── server.js
│   └── admin.js
├── src/
│   ├── api/
│   │   ├── expert/
│   │   ├── faq/
│   │   ├── case-study/
│   │   ├── availability/
│   │   ├── testimonial/
│   │   ├── lead/
│   │   ├── page-content/
│   │   └── metric/
│   ├── extensions/
│   └── index.js
├── public/
│   └── uploads/
├── .env
├── package.json
└── README.md
```

---

## 🚀 DÉPLOIEMENT

### **Options recommandées**

1. **Strapi Cloud** (le plus simple)
   - https://strapi.io/cloud
   - Hébergement managé
   - PostgreSQL inclus

2. **Railway** (excellent rapport qualité/prix)
   - https://railway.app
   - PostgreSQL + Strapi
   - ~10€/mois

3. **DigitalOcean App Platform**
   - Droplet + Managed PostgreSQL
   - ~20€/mois

4. **VPS Custom** (le plus flexible)
   - OVH, Scaleway, Hetzner
   - Nginx + Node.js + PostgreSQL
   - ~10-15€/mois

---

## 📚 PROCHAINES ÉTAPES

1. ✅ Installer Strapi (`npx create-strapi-app@latest strapi-confluence`)
2. ✅ Configurer PostgreSQL
3. ✅ Créer les Collections Types (Expert, FAQ, etc.)
4. ✅ Créer les Single Types (Homepage, Settings)
5. ✅ Importer les données initiales (Triade, FAQ)
6. ✅ Configurer les permissions Public
7. ✅ Configurer le service Email
8. ✅ Créer les webhooks (nouveau lead)
9. ✅ Intégrer avec Astro (fetchExperts, fetchFAQ, etc.)
10. ✅ Tester le formulaire Contact → Email

---

**🎉 Architecture backend complète ! Prêt pour l'installation.**

---

**Créé par** : Figma Make AI  
**Date** : 9 novembre 2025  
**Version** : Strapi 4.x + Astro V5.27g  
**Status** : 📋 Architecture Complète
