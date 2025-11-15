# 🔄 WORKFLOW BACKEND - TEMPLATES PROMPTS

**Pour Gem's Backend**  
**Templates par type de tâche**

---

## 🎯 TYPES DE TÂCHES (8)

1. CRÉATION Content Type
2. MODIFICATION Schema
3. CRÉATION Controller Custom
4. CRÉATION Service
5. CONFIGURATION API/Database
6. DEBUG Erreur
7. DÉPLOIEMENT Production
8. OPTIMISATION Performance

---

## 1️⃣ TEMPLATE : CRÉATION CONTENT TYPE

```markdown
# CRÉATION : Content Type "[name]"

## Contexte
- Projet : Confluence Digitale V6.7.2 Backend
- Stack : Strapi v4.25+ / PostgreSQL 16 / Cloudinary
- Documentation : /backend-documentation/02_CONTENT_TYPES.md

## Contraintes OBLIGATOIRES
1. API ID : [kebab-case] (ex: case-study)
2. Model : [PascalCase] (ex: CaseStudy)
3. Validations strictes sur tous champs
4. Component SEO obligatoire si Content Type public
5. Permissions : Public (find, findOne) / Authenticated (create, update, delete)

## Structure Content Type

### Champs Principaux
- [champ1] ([type], [required], [contraintes])
- [champ2] ([type], [required], [contraintes])
...

### Relations (si applicable)
- [relation1] (type relation, target)

### Components (si applicable)
- seo (component seo.seo, required pour CT publics)

## Code Attendu

Fichier : /src/api/[kebab-case]/content-types/[kebab-case]/schema.json

```json
{
  "kind": "collectionType",
  "collectionName": "[pluriel_snake_case]",
  "info": {
    "singularName": "[kebab-case]",
    "pluralName": "[kebab-case-pluriel]",
    "displayName": "[Display Name]",
    "description": "[Description]"
  },
  "options": {
    "draftAndPublish": true
  },
  "attributes": {
    // ... champs
  }
}
```

## Fichiers Concernés
- /src/api/[name]/content-types/[name]/schema.json
- /src/api/[name]/controllers/[name].ts (auto-généré)
- /src/api/[name]/services/[name].ts (auto-généré)
- /src/api/[name]/routes/[name].ts (auto-généré)

## Validation
- [ ] Fichier schema.json créé
- [ ] Nomenclature respectée (kebab-case)
- [ ] Validations sur tous champs
- [ ] Component SEO ajouté si nécessaire
- [ ] Build Strapi réussi (npm run build)
- [ ] Endpoint /api/[pluriel] accessible
- [ ] Permissions configurées (Settings → Roles)
```

---

## 2️⃣ TEMPLATE : MODIFICATION SCHEMA

```markdown
# MODIFICATION : Schema "[content-type]"

## Contexte
- Projet : Confluence Digitale V6.7.2 Backend
- Stack : Strapi v4.25+ / PostgreSQL 16
- Content Type existant : [name]
- Documentation : /backend-documentation/02_CONTENT_TYPES.md

## Modification Demandée
[Description précise : ajouter champ, modifier validation, ajouter relation, etc.]

## Contraintes
1. Ne PAS casser données existantes
2. Migration database si nécessaire
3. Update permissions si nouveau champ
4. Respecter nomenclature existante

## Code Attendu

Fichier : /src/api/[name]/content-types/[name]/schema.json

### Avant :
```json
{
  "attributes": {
    "existingField": { ... }
  }
}
```

### Après :
```json
{
  "attributes": {
    "existingField": { ... },
    "newField": {
      "type": "[type]",
      "required": [true/false],
      // ... contraintes
    }
  }
}
```

## Migration Database (si nécessaire)
[SQL ou instructions Strapi]

## Validation
- [ ] Schema modifié
- [ ] Build Strapi réussi
- [ ] Migration database OK
- [ ] Données existantes préservées
- [ ] Tests API passent
```

---

## 3️⃣ TEMPLATE : CONTROLLER CUSTOM

```markdown
# CRÉATION : Controller Custom "[endpoint]"

## Contexte
- Projet : Confluence Digitale V6.7.2 Backend
- Stack : Strapi v4.25+
- Content Type : [name]
- Endpoint custom : /api/[pluriel]/[action]
- Documentation : /backend-documentation/

## Objectif
[Description logique métier]

## Contraintes
1. Utiliser createCoreController
2. Respecter structure retour API Strapi
3. Gérer erreurs (try/catch)
4. Ajouter route custom si nécessaire

## Code Attendu

### Controller
Fichier : /src/api/[name]/controllers/[name].js

```javascript
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::[name].[name]', ({ strapi }) => ({
  async [action](ctx) {
    try {
      // Logique métier
      const result = await strapi.entityService.findMany('api::[name].[name]', {
        // ... query
      });
      
      return { data: result };
    } catch (error) {
      ctx.throw(500, error.message);
    }
  },
}));
```

### Route (si nécessaire)
Fichier : /src/api/[name]/routes/custom-routes.js

```javascript
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/[pluriel]/[action]',
      handler: '[name].[action]',
      config: {
        auth: false, // ou true si auth requise
      },
    },
  ],
};
```

## Validation
- [ ] Controller créé/modifié
- [ ] Route custom ajoutée si nécessaire
- [ ] Endpoint accessible
- [ ] Logique métier fonctionne
- [ ] Gestion erreurs OK
```

---

## 4️⃣ TEMPLATE : DEBUG ERREUR

```markdown
# DEBUG : [Type Erreur]

## Contexte
- Projet : Confluence Digitale V6.7.2 Backend
- Stack : Strapi v4.25+ / PostgreSQL 16
- Erreur : "[Message erreur]"
- Fichier concerné : [path]
- Documentation : /backend-documentation/08_TROUBLESHOOTING.md

## Erreur Observée
```
[Stack trace complète]
```

## Analyse
[Cause probable de l'erreur]

## Solution Proposée

### Option 1 : [Solution principale]
[Description + code]

### Option 2 : [Solution alternative]
[Description + code]

## Code Correction

Fichier : [path]

### Avant :
```javascript
// Code causant erreur
```

### Après :
```javascript
// Code corrigé
```

## Validation
- [ ] Erreur résolue
- [ ] Build Strapi réussi
- [ ] Tests passent
- [ ] Pas de régression
```

---

## 5️⃣ TEMPLATE : CONFIGURATION API

```markdown
# CONFIGURATION : [Élément] (Database/CORS/Cloudinary/etc.)

## Contexte
- Projet : Confluence Digitale V6.7.2 Backend
- Stack : Strapi v4.25+
- Configuration : [nom]
- Documentation : /backend-documentation/

## Objectif
[Description configuration demandée]

## Contraintes
1. Variables environnement (.env)
2. Ne PAS committer secrets
3. Tester local + production

## Code Attendu

### Fichier Config
Fichier : /config/[nom].js

```javascript
module.exports = ({ env }) => ({
  // ... configuration
});
```

### Variables Environnement
Fichier : .env (à créer, ne PAS committer)

```env
KEY=value
SECRET=your_secret
```

## Documentation Ajoutée
Mettre à jour /backend-documentation/[fichier concerné]

## Validation
- [ ] Fichier config créé/modifié
- [ ] Variables .env configurées
- [ ] .env dans .gitignore
- [ ] Build Strapi réussi
- [ ] Configuration fonctionne local
- [ ] Configuration fonctionne production
```

---

## 6️⃣ TEMPLATE : DÉPLOIEMENT

```markdown
# DÉPLOIEMENT : [Environnement] (Railway/Vercel/etc.)

## Contexte
- Projet : Confluence Digitale V6.7.2 Backend
- Stack : Strapi v4.25+ / PostgreSQL 16
- Plateforme : [nom]
- Documentation : /backend-documentation/05_DEPLOYMENT_PRODUCTION.md

## Prérequis
- [ ] PostgreSQL database créée
- [ ] Cloudinary account configuré
- [ ] Variables environnement prêtes
- [ ] Build local réussi

## Variables Environnement Production

```env
NODE_ENV=production
DATABASE_CLIENT=postgres
DATABASE_URL=[postgres connection string]
DATABASE_SSL=true
JWT_SECRET=[secure random string 32+ chars]
ADMIN_JWT_SECRET=[secure random string 32+ chars]
APP_KEYS=[secure random string]
API_TOKEN_SALT=[secure random string]

CLOUDINARY_NAME=[your cloudinary name]
CLOUDINARY_KEY=[your api key]
CLOUDINARY_SECRET=[your api secret]
```

## Étapes Déploiement
1. [Étape 1]
2. [Étape 2]
...

## Validation Post-Déploiement
- [ ] API accessible (https://...)
- [ ] Admin panel accessible
- [ ] Database connectée
- [ ] Cloudinary fonctionne
- [ ] Endpoints testés
- [ ] SSL/HTTPS actif
```

---

## 7️⃣ TEMPLATE : OPTIMISATION

```markdown
# OPTIMISATION : [Aspect] (Performance/Database/API/etc.)

## Contexte
- Projet : Confluence Digitale V6.7.2 Backend
- Stack : Strapi v4.25+ / PostgreSQL 16
- Problème : [description performance issue]
- Métrique actuelle : [temps réponse, queries, etc.]
- Objectif : [métrique cible]

## Analyse
[Identification du bottleneck]

## Solution Proposée

### Optimisation 1 : [Nom]
[Description + code]

### Optimisation 2 : [Nom]
[Description + code]

## Code Optimisé

### Avant :
```javascript
// Code non optimisé
```

### Après :
```javascript
// Code optimisé
```

## Validation
- [ ] Performance améliorée
- [ ] Métrique atteinte
- [ ] Fonctionnalités préservées
- [ ] Tests passent
```

---

## 8️⃣ TEMPLATE : CRÉATION SERVICE

```markdown
# CRÉATION : Service Custom "[name]"

## Contexte
- Projet : Confluence Digitale V6.7.2 Backend
- Stack : Strapi v4.25+
- Content Type : [name]
- Documentation : /backend-documentation/

## Objectif
[Description logique métier réutilisable]

## Code Attendu

Fichier : /src/api/[name]/services/[name].js

```javascript
const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::[name].[name]', ({ strapi }) => ({
  async customMethod(params) {
    // Logique métier réutilisable
    return result;
  },
}));
```

## Utilisation dans Controller

```javascript
// controller.js
async myAction(ctx) {
  const result = await strapi.service('api::[name].[name]').customMethod(params);
  return { data: result };
}
```

## Validation
- [ ] Service créé
- [ ] Logique métier implémentée
- [ ] Utilisable dans controller
- [ ] Tests unitaires passent
```

---

**🔄 Templates Prompts Backend - Prêts à utiliser !**