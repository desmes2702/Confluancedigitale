# 🗄️ DOCUMENTATION BACKEND - CONFLUENCE DIGITALE V6.7.2

**Stack** : Strapi v4 + PostgreSQL + Cloudinary + Railway  
**Public** : Gemini Code Assist (VS Code extension)  
**Status** : ✅ Documentation complète pour Code Assist

---

## 🎯 OBJECTIF DE CE DOSSIER

Ce dossier est la **documentation de référence technique** pour **Gemini Code Assist** (extension VS Code).

**Rôle** : Documentation que Code Assist consulte pour générer du code backend Strapi conforme au projet Confluence Digitale V6.7.2.

**Contenu** :
- ✅ Installation et setup Strapi v4
- ✅ 7 Content Types complets (schemas JSON)
- ✅ API REST endpoints et configuration
- ✅ Authentification JWT
- ✅ Déploiement production Railway
- ✅ Database PostgreSQL
- ✅ Media storage Cloudinary
- ✅ Webhooks et intégrations
- ✅ Maintenance et backup

**⚠️ Note** : Pour configurer le Gem's (prompt generator backend), voir `/gems-knowledge-backend/`

---

## 🤖 POUR GEMINI CODE ASSIST

### Tu es Gemini Code Assist et tu lis cette documentation

**Ta mission** : Générer du code backend Strapi v4 conforme au projet Confluence Digitale V6.7.2

**Ce que tu dois faire** :
1. Lire cette documentation **AVANT** de générer du code
2. Respecter **TOUTES** les règles Strapi v4
3. Utiliser les schemas fournis comme base
4. Valider ton code avec les bonnes pratiques

**Règles CRITIQUES à respecter** :
- ⚠️ Strapi v4 API uniquement (JAMAIS v3)
- ⚠️ Nomenclature : kebab-case (API) / PascalCase (Model) / camelCase (variables)
- ⚠️ PostgreSQL uniquement (JAMAIS SQLite en production)
- ⚠️ Validations strictes sur TOUS les champs
- ⚠️ Component SEO obligatoire pour Content Types publics (Page, Article, Service)
- ⚠️ Permissions granulaires par rôle

**Workflow** :
```
1. Recevoir prompt utilisateur
   ↓
2. Lire /backend-documentation/ (cette doc)
   ↓
3. Identifier contraintes applicables
   ↓
4. Générer code Strapi v4 conforme
   ↓
5. Auto-valider avec bonnes pratiques
```

---

## 📚 STRUCTURE DU DOSSIER

```
/backend-documentation/
├── README.md                        ← Tu es ici (Guide pour Code Assist)
├── 00_INDEX.md                      ← Navigation complète
│
├── 01_STRAPI_SETUP.md               ← Installation Strapi (30 min)
├── 02_CONTENT_TYPES.md              ← ⭐ 7 Content Types complets (45 min)
├── 03_API_ENDPOINTS.md              ← API REST configuration (20 min)
├── 04_AUTHENTIFICATION.md           ← JWT, permissions (25 min)
├── 05_DEPLOYMENT_PRODUCTION.md      ← Déploiement Railway (40 min)
├── 06_DATABASE_POSTGRESQL.md        ← PostgreSQL (30 min)
├── 07_MEDIA_CLOUDINARY.md           ← Upload images (25 min)
├── 08_WEBHOOKS_INTEGRATION.md       ← Webhooks Vercel (20 min)
└── 09_MAINTENANCE_BACKUP.md         ← Backup (30 min)
```

**Total** : 9 fichiers techniques | ~4h de lecture complète

---

## 🎯 FICHIERS ESSENTIELS (À LIRE EN PRIORITÉ)

### 1. 02_CONTENT_TYPES.md ⭐ CRITIQUE

**Contenu** :
- 7 Content Types complets (schemas JSON)
- 3 Composants réutilisables (SEO, Feature, Hero)
- Relations entre entités
- Validations et contraintes
- Permissions par rôle

**Quand lire** : **TOUJOURS avant de créer/modifier** un Content Type

**Content Types** :
1. Page (pages statiques)
2. Article (blog posts)
3. Service (services offerts)
4. Testimonial (témoignages)
5. Team Member (triade pro)
6. FAQ (questions fréquentes)
7. Contact (messages formulaires)

---

### 2. 03_API_ENDPOINTS.md ⭐ API REST

**Contenu** :
- Endpoints standards Strapi v4
- Query parameters (populate, filters, sort, pagination)
- Authentification JWT
- CORS configuration
- Rate limiting
- Exemples requêtes complètes

**Quand lire** : Pour configurer API ou tester endpoints

---

### 3. 01_STRAPI_SETUP.md ⭐ SETUP

**Contenu** :
- Installation Strapi v4
- Configuration PostgreSQL
- Variables environnement
- Premier lancement
- Création compte admin

**Quand lire** : Setup initial projet

---

### 4. 05_DEPLOYMENT_PRODUCTION.md ⭐ DÉPLOIEMENT

**Contenu** :
- Déploiement Railway
- Configuration production
- Variables environnement
- SSL/HTTPS
- Monitoring

**Quand lire** : Pour déployer en production

---

### 5. 04_AUTHENTIFICATION.md ⭐ SÉCURITÉ

**Contenu** :
- JWT authentication
- Rôles et permissions
- Configuration sécurité
- Rate limiting
- CORS

**Quand lire** : Pour configurer auth/permissions

---

## 🚨 RÈGLES ABSOLUES (À RESPECTER TOUJOURS)

### Règle #1 : Strapi v4 API Uniquement

```javascript
// ❌ INTERDIT (Strapi v3)
const articles = await strapi.query('article').find();

// ✅ OBLIGATOIRE (Strapi v4)
const articles = await strapi.entityService.findMany('api::article.article');
```

---

### Règle #2 : Nomenclature Stricte

```json
// ✅ CORRECT
{
  "info": {
    "singularName": "team-member",    // kebab-case
    "pluralName": "team-members"      // kebab-case
  }
}
```

**Model** : `TeamMember` (PascalCase)  
**Variables** : `teamMember` (camelCase)  
**Fichiers** : `team-member.ts` (kebab-case)  
**Tables DB** : `team_members` (snake_case, auto-généré)

---

### Règle #3 : PostgreSQL Uniquement

```typescript
// ✅ CORRECT
export default {
  connection: {
    client: 'postgres',
    // ...
  }
};

// ❌ INTERDIT (sauf dev local rapide)
export default {
  connection: {
    client: 'sqlite',
    // ...
  }
};
```

---

### Règle #4 : Validations Obligatoires

```json
// ✅ TOUS les champs DOIVENT avoir type + required + contraintes
{
  "title": {
    "type": "string",
    "required": true,
    "maxLength": 255,
    "minLength": 3
  }
}

// ❌ INCOMPLET
{
  "title": {
    "type": "string"
  }
}
```

---

### Règle #5 : Component SEO

```json
// ✅ Content Types publics (Page, Article, Service)
{
  "seo": {
    "type": "component",
    "repeatable": false,
    "component": "seo.seo",
    "required": true
  }
}

// ❌ Content Types internes (Contact, FAQ)
// Pas besoin de SEO
```

---

### Règle #6 : Permissions Par Défaut

| Content Type | Public | Authenticated | Admin |
|--------------|--------|---------------|-------|
| **Page, Article, Service** | find, findOne | create, update, delete | Full |
| **Testimonial, Team Member, FAQ** | find, findOne | create, update, delete | Full |
| **Contact** | create | find, findOne, update, delete | Full |

---

## ✅ CHECKLIST AVANT GÉNÉRATION

Avant de générer du code, vérifie que tu connais :

- [ ] Les 7 Content Types (lu `02_CONTENT_TYPES.md`)
- [ ] La nomenclature Strapi v4 (kebab-case, PascalCase, camelCase)
- [ ] Les règles de validation (type, required, constraints)
- [ ] L'API REST Strapi v4 (entityService, db.query)
- [ ] Les permissions par rôle

---

## ✅ CHECKLIST APRÈS GÉNÉRATION

Après avoir généré du code, valide :

- [ ] Strapi v4 API (pas v3)
- [ ] Nomenclature respectée (kebab-case pour API ID)
- [ ] Validations sur tous champs (type, required, constraints)
- [ ] Component SEO si Content Type public
- [ ] Permissions configurées
- [ ] PostgreSQL (pas SQLite)
- [ ] Build Strapi réussi (`npm run build`)
- [ ] Endpoint API accessible

---

## 📋 WORKFLOW TYPE

### Exemple : Créer Content Type "CaseStudy"

**Prompt reçu** :
```
Crée un Content Type "case-study" avec :
- title, slug, client, description, technologies, coverImage
```

**Ton workflow** :

1. **Lire** `02_CONTENT_TYPES.md` (exemple Content Types similaires)
2. **Identifier** :
   - API ID : `case-study` (kebab-case)
   - Model : `CaseStudy` (PascalCase)
   - Table DB : `case_studies` (auto-généré)
3. **Générer** `schema.json` :
   - Validations strictes sur tous champs
   - Component SEO (Content Type public)
   - Relations si nécessaire
4. **Valider** :
   - Build Strapi OK
   - Endpoint `/api/case-studies` accessible
   - Permissions configurées

**Résultat** : Content Type conforme Strapi v4 ✅

---

## 📚 DOCUMENTATION COMPLÉMENTAIRE

### Architecture & Structure

- **`00_INDEX.md`** - Navigation complète
- **`01_STRAPI_SETUP.md`** - Installation setup
- **`06_DATABASE_POSTGRESQL.md`** - Database

### Références & Exemples

- **`02_CONTENT_TYPES.md`** - ⭐ BIBLE Content Types
- **`03_API_ENDPOINTS.md`** - API REST
- **`04_AUTHENTIFICATION.md`** - JWT sécurité

### Avancé

- **`07_MEDIA_CLOUDINARY.md`** - Upload images
- **`08_WEBHOOKS_INTEGRATION.md`** - Webhooks
- **`09_MAINTENANCE_BACKUP.md`** - Maintenance

### Déploiement

- **`05_DEPLOYMENT_PRODUCTION.md`** - Railway production

---

## 🎯 RÉSUMÉ POUR TOI (CODE ASSIST)

### Ta mission en 3 points

1. **Lire cette documentation** avant de coder
2. **Respecter Strapi v4** à 100%
3. **Utiliser les schemas** comme base

### Les 6 règles à NE JAMAIS violer

1. Strapi v4 API uniquement (pas v3)
2. Nomenclature stricte (kebab-case, PascalCase, camelCase)
3. PostgreSQL uniquement (pas SQLite production)
4. Validations obligatoires (type, required, constraints)
5. Component SEO si public
6. Permissions granulaires

### Fichier le plus important

**`02_CONTENT_TYPES.md`** = BIBLE des Content Types

Lis-le en entier avant ta première génération de code backend.

---

## 💡 TIPS POUR GÉNÉRER DU CODE DE QUALITÉ

### Toujours faire

✅ Lire `02_CONTENT_TYPES.md` avant de commencer  
✅ Respecter nomenclature Strapi v4  
✅ Valider TOUS les champs (type, required, constraints)  
✅ Ajouter Component SEO si Content Type public  
✅ Configurer permissions par rôle  

### Ne jamais faire

❌ Utiliser syntaxe Strapi v3  
❌ Oublier validations sur champs  
❌ Utiliser SQLite en production  
❌ Négliger les permissions  
❌ Oublier Component SEO sur Content Types publics  

---

## 🔄 MISE À JOUR

**Version actuelle** : V6.7.2  
**Dernière mise à jour** : 15 Novembre 2025  
**Status** : Production Ready ✅

---

## 📞 QUESTIONS FRÉQUENTES

### Q: Dois-je lire toute la doc avant de coder ?

**R:** Non. Lis en priorité :
1. `README.md` (ce fichier)
2. `02_CONTENT_TYPES.md` (schemas)
3. Fichier spécifique à ta tâche

---

### Q: Comment savoir si mon code est conforme ?

**R:** Vérifie :
- ✅ Strapi v4 API (entityService, db.query)
- ✅ Nomenclature respectée
- ✅ Validations complètes
- ✅ Build réussi (`npm run build`)

---

### Q: Où trouver des exemples de code validé ?

**R:** Dans `/gems-knowledge-backend/06_EXEMPLES_REFERENCES.md`

---

## 🚀 C'EST PARTI !

**Tu es Gemini Code Assist et tu as lu cette documentation ?**

Parfait ! Tu as maintenant toutes les connaissances pour générer du code backend Strapi v4 conforme au projet Confluence Digitale V6.7.2 ! 💪

**Prochaine étape** : Attendre un prompt utilisateur et générer du code de qualité ! 🚀

---

**🗄️ Documentation complète pour Gemini Code Assist**  
**🎯 Objectif** : Code backend Strapi v4 parfait  
**✅ Status** : Prêt pour production