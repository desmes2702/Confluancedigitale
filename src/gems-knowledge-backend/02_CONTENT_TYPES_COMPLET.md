# 📋 CONTENT TYPES COMPLET - 7 STRUCTURES

**Source** : `/backend-documentation/02_CONTENT_TYPES.md`  
**Usage** : Référence complète schemas JSON

---

## 🎯 LISTE DES 7 CONTENT TYPES

| # | Content Type | API | Usage |
|---|--------------|-----|-------|
| 1 | Page | `/api/pages` | Pages statiques |
| 2 | Article | `/api/articles` | Blog posts |
| 3 | Service | `/api/services` | Services offerts |
| 4 | Testimonial | `/api/testimonials` | Témoignages |
| 5 | Team Member | `/api/team-members` | Triade Pro |
| 6 | FAQ | `/api/faqs` | Questions fréquentes |
| 7 | Contact | `/api/contacts` | Messages formulaires |

---

## 📦 COMPOSANTS RÉUTILISABLES

### SEO Component (Requis pour Page, Article, Service)

**Fichier** : `src/components/seo/seo.json`

**Champs** :
- metaTitle (string, required, max 60)
- metaDescription (text, required, max 160)
- keywords (text)
- metaImage (media, single image)
- canonicalURL (string)

---

### Feature Component (Pour Service)

**Fichier** : `src/components/features/feature.json`

**Champs** :
- feature (string, required, max 255)
- isHighlighted (boolean, default false)

---

## 1️⃣ PAGE CONTENT TYPE

**API** : `/api/pages`

**Champs Principaux** :
- title (string, required, max 255)
- slug (UID based on title, required, unique)
- content (richtext, required)
- excerpt (text, max 300)
- seo (component SEO, required)
- template (enum: default/landing/contact/about)
- order (integer, default 0)

**Options** : draftAndPublish = true

---

## 2️⃣ ARTICLE CONTENT TYPE

**API** : `/api/articles`

**Champs Principaux** :
- title (string, required, max 255)
- slug (UID based on title, required, unique)
- content (richtext, required, min 500)
- excerpt (text, required, max 300)
- coverImage (media, single, required, images only)
- author (relation many-to-one avec team-member, required)
- category (enum: web/mobile/seo/marketing, required)
- tags (JSON array of strings)
- publishedAt (datetime)
- seo (component SEO, required)
- readingTime (integer, auto-calculated)

**Options** : draftAndPublish = true

---

## 3️⃣ SERVICE CONTENT TYPE

**API** : `/api/services`

**Champs Principaux** :
- name (string, required, max 100)
- slug (UID based on name, required, unique)
- description (richtext, required)
- icon (string, required - lucide icon name)
- features (component repeatable Feature)
- price (decimal, required)
- priceUnit (enum: month/year/project)
- isPopular (boolean, default false)
- order (integer, default 0)
- seo (component SEO, required)

**Options** : draftAndPublish = true

---

## 4️⃣ TESTIMONIAL CONTENT TYPE

**API** : `/api/testimonials`

**Champs Principaux** :
- clientName (string, required, max 100)
- company (string, required, max 100)
- role (string, max 60)
- content (text, required, min 50, max 500)
- rating (integer, required, min 1, max 5)
- photo (media, single, images only)
- service (relation many-to-one avec service, optional)
- isHighlighted (boolean, default false)
- publishedAt (datetime)

**Options** : draftAndPublish = true

---

## 5️⃣ TEAM MEMBER CONTENT TYPE

**API** : `/api/team-members`

**Champs Principaux** :
- name (string, required, max 100)
- role (string, required, max 100)
- bio (text, required, min 100, max 500)
- photo (media, single, required, images only)
- color (enum: gold/green/red, required)
  - gold = Antoine (#D1A65E)
  - green = Pascal (#10b981)
  - red = Laly (#A32E3A)
- email (email, required, unique)
- linkedin (string, URL)
- order (integer, default 0)

**Options** : draftAndPublish = true

**Relations** :
- articles (has many Article via author field)

---

## 6️⃣ FAQ CONTENT TYPE

**API** : `/api/faqs`

**Champs Principaux** :
- question (string, required, max 200)
- answer (richtext, required, min 50)
- category (enum: general/pricing/technical/legal, required)
- order (integer, default 0)
- isHighlighted (boolean, default false)

**Options** : draftAndPublish = true

---

## 7️⃣ CONTACT CONTENT TYPE

**API** : `/api/contacts`

**Champs Principaux** :
- name (string, required, max 100)
- email (email, required)
- phone (string, max 20)
- message (text, required, min 10, max 2000)
- status (enum: new/read/replied/archived, default new, required)
- source (enum: contact-form/audit-form/reservation-form)
- submittedAt (datetime, auto-set on creation)
- repliedAt (datetime, optional)

**Options** : draftAndPublish = false (pas de brouillon pour contacts)

**Permissions** :
- Public : create only
- Authenticated : find, findOne, update, delete

---

## 🔗 RELATIONS COMPLÈTES

### Article → Team Member
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

### Team Member → Article
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

### Testimonial → Service
```json
{
  "service": {
    "type": "relation",
    "relation": "manyToOne",
    "target": "api::service.service"
  }
}
```

---

## 📝 NOMENCLATURE STRICTE

### API IDs (kebab-case)
- ✅ `page`, `article`, `team-member`, `faq`
- ❌ `Page`, `TeamMember`, `team_member`

### Model Names (PascalCase)
- ✅ `Page`, `Article`, `TeamMember`, `FAQ`
- ❌ `page`, `team-member`, `faq`

### Database Tables (snake_case auto-généré)
- `pages`, `articles`, `team_members`, `faqs`

---

## ✅ VALIDATIONS OBLIGATOIRES

### Tous les champs DOIVENT avoir :
1. **type** (string, text, richtext, media, etc.)
2. **required** (true/false)
3. **constraints** (min, max, unique selon type)

### Exemples :

```json
// String avec contraintes
{
  "title": {
    "type": "string",
    "required": true,
    "maxLength": 255,
    "minLength": 3
  }
}

// Email avec validation
{
  "email": {
    "type": "email",
    "required": true,
    "unique": true
  }
}

// Richtext avec minimum
{
  "content": {
    "type": "richtext",
    "required": true,
    "minLength": 100
  }
}

// Media avec restrictions
{
  "coverImage": {
    "type": "media",
    "multiple": false,
    "required": true,
    "allowedTypes": ["images"]
  }
}
```

---

## 🔐 PERMISSIONS PAR DÉFAUT

| Content Type | Public | Authenticated | Admin |
|--------------|--------|---------------|-------|
| Page | find, findOne | create, update, delete | Full |
| Article | find, findOne | create, update, delete | Full |
| Service | find, findOne | create, update, delete | Full |
| Testimonial | find, findOne | create, update, delete | Full |
| Team Member | find, findOne | update | Full |
| FAQ | find, findOne | create, update, delete | Full |
| Contact | create | find, findOne, update, delete | Full |

---

**📋 7 Content Types Complets - Production Ready !**
