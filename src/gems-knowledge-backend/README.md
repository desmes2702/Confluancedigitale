# 💎 GEMS KNOWLEDGE BACKEND - BASE DE CONNAISSANCES

**Pour** : Configuration Gem's Backend (Gemini 2.5 Pro App)  
**Objectif** : Donner au Gem's toutes les connaissances pour générer des prompts backend Strapi TypeScript  
**Statut** : Documentation complète et production-ready

---

## 🎯 OBJECTIF DE CE DOSSIER

Ce dossier contient **TOUTES les connaissances** que ton Gem's backend doit maîtriser pour :
- Générer des prompts optimaux pour Gemini Code Assist (backend Strapi TypeScript)
- Respecter à 100% l'architecture Strapi v4 + PostgreSQL + TypeScript
- Comprendre le contexte business Confluence Digitale
- Connaître les 7 Content Types du projet
- Appliquer les bonnes pratiques Strapi + TypeScript

**⚠️ Important** : Ce dossier est uniquement pour configurer le Gem's, pas pour l'utilisateur final.

---

## 📚 STRUCTURE DES FICHIERS (7 fichiers)

### 00_GEMS_CONTEXT_BACKEND.md
**Rôle du Gem's Backend - À lire en PREMIER**

- Définition du rôle (générateur prompts backend)
- Mission et workflow
- Format de sortie attendu
- Template prompt universel
- Règles de génération

**Quand utiliser** : Toujours en premier pour comprendre le rôle

---

### 01_PROJET_STRAPI.md
**Contexte Backend - Stack Technique**

- Stack : Strapi v4 + PostgreSQL + TypeScript + Cloudinary + Railway
- Architecture backend
- 7 Content Types
- Relations entre entités
- Configuration API REST
- Objectifs techniques

**Quand utiliser** : Pour inclure contexte technique dans prompts

---

### 02_CONTENT_TYPES_COMPLET.md
**Structure Données - 7 Content Types**

- Schemas JSON complets (Page, Article, Service, etc.)
- Composants réutilisables (SEO, Hero, Media)
- Relations (1-N, N-N)
- Validations et contraintes
- Permissions par rôle

**Quand utiliser** : Pour créer/modifier Content Types

---

### 03_API_CONFIGURATION.md
**API REST - Endpoints & Configuration**

- Routes API Strapi
- Query parameters (populate, filters, sort)
- Pagination
- Authentification JWT
- CORS et sécurité
- Rate limiting

**Quand utiliser** : Pour configurer API ou tester endpoints

---

### 04_BONNES_PRATIQUES.md
**Règles Absolues Backend TypeScript**

- Structure fichiers Strapi
- Nomenclature (kebab-case, camelCase, PascalCase)
- **TypeScript obligatoire (.ts)**
- Validations données
- Sécurité (JWT, permissions)
- Performance (indexation, cache)
- Tests et monitoring

**Quand utiliser** : TOUJOURS respecter ces règles

---

### 05_WORKFLOW_BACKEND.md
**Workflow Complet Gem's Backend**

- Processus génération prompt
- Template par cas d'usage :
  - Créer Content Type
  - Modifier schema
  - Créer endpoint custom
  - Configurer permissions
  - Débugger erreur
- Validation checklist

**Quand utiliser** : Pour structurer un prompt

---

### 06_EXEMPLES_REFERENCES.md
**Code TypeScript Validé - Exemples Concrets**

- Content Types complets (JSON)
- Controllers customs (.ts)
- Services (.ts)
- Middlewares (.ts)
- Policies (.ts)
- Lifecycles (.ts)
- Webhooks

**Quand utiliser** : Pour inclure exemples dans prompts

---

## 🚀 COMMENT UTILISER CE DOSSIER

### Étape 1 : Configuration Gem's (One-time)

1. **Ouvre Gemini 2.5 Pro App** (https://gemini.google.com)
2. **Crée un nouveau Gem's** nommé "Confluence Backend Assistant"
3. **Upload les 7 fichiers** de ce dossier dans les "Fichiers de connaissances"
4. **Configure les instructions système** :

```
Tu es un expert Strapi v4 + PostgreSQL + TypeScript spécialisé dans la génération de prompts pour Gemini Code Assist.

MISSION :
Générer des prompts structurés pour que Gemini Code Assist crée/modifie du code backend Strapi TypeScript conforme au projet Confluence Digitale V6.7.2.

CONNAISSANCES :
Tu as accès à 7 fichiers de connaissances :
- 00_GEMS_CONTEXT_BACKEND.md (ton rôle)
- 01_PROJET_STRAPI.md (contexte technique)
- 02_CONTENT_TYPES_COMPLET.md (7 Content Types)
- 03_API_CONFIGURATION.md (API REST)
- 04_BONNES_PRATIQUES.md (règles absolues TypeScript)
- 05_WORKFLOW_BACKEND.md (workflow)
- 06_EXEMPLES_REFERENCES.md (code TypeScript validé)

WORKFLOW :
1. Analyser demande utilisateur
2. Identifier type de tâche (Content Type, API, permissions, etc.)
3. Consulter fichiers pertinents
4. Générer prompt structuré avec :
   - Contexte technique complet
   - Contraintes Strapi v4 + TypeScript
   - Code exemple TypeScript si pertinent
   - Checklist validation

FORMAT SORTIE :
Toujours structurer le prompt avec :
# [TYPE] : [OBJECTIF]
## Contexte
## Contraintes
## Tâche
## Code Attendu (TypeScript)
## Validation

RÈGLES ABSOLUES :
- Strapi v4 uniquement (pas v3)
- TypeScript obligatoire (.ts) - JAMAIS JavaScript (.js)
- PostgreSQL (pas SQLite)
- Nomenclature : kebab-case (API) / PascalCase (Model) / camelCase (variables)
- Validations strictes sur tous champs
- Permissions granulaires par rôle

Tu NE génères JAMAIS de code directement.
Tu génères UNIQUEMENT des prompts pour Gemini Code Assist.
```

5. **Sauvegarde le Gem's**

---

### Étape 2 : Utilisation Quotidienne

**Demande à ton Gem's** :
```
Crée un Content Type "CaseStudy" avec :
- title (string)
- slug (UID)
- client (string)
- description (richtext)
- technologies (JSON array)
- coverImage (media)
- publishedAt (datetime)
```

**Gem's génère un prompt structuré** :
```markdown
# CREATION : Content Type "CaseStudy"

## Contexte
- Projet : Confluence Digitale V6.7.2 Backend
- Stack : Strapi v4 + PostgreSQL + TypeScript
- Documentation : /backend-documentation/

## Contraintes
- Strapi v4 API
- Nomenclature : kebab-case (API) / PascalCase (Model) / camelCase (code)
- Validations strictes
- SEO component obligatoire
- Permissions par défaut : Public (find, findOne) / Authenticated (create, update, delete)

## Tâche
Crée le Content Type "case-study" avec ces champs...

[... reste du prompt détaillé ...]
```

**Tu copies ce prompt → Colles dans Code Assist → Code généré ✅**

---

## 🎯 WORKFLOW COMPLET

```
Utilisateur
    ↓ Demande backend
Gem's Backend (lit /gems-knowledge-backend/)
    ↓ Génère prompt structuré
Utilisateur (copie prompt)
    ↓
Gemini Code Assist (lit /backend-documentation/)
    ↓ Génère code Strapi
Code backend prêt ✅
```

---

## 📊 RÉSUMÉ PAR FICHIER

| Fichier | Contenu | Taille | Priorité |
|---------|---------|--------|----------|
| **00_GEMS_CONTEXT_BACKEND.md** | Rôle Gem's | ~3 KB | ⭐⭐⭐⭐⭐ |
| **01_PROJET_STRAPI.md** | Contexte technique | ~5 KB | ⭐⭐⭐⭐⭐ |
| **02_CONTENT_TYPES_COMPLET.md** | 7 Content Types | ~25 KB | ⭐⭐⭐⭐⭐ |
| **03_API_CONFIGURATION.md** | API REST | ~8 KB | ⭐⭐⭐⭐ |
| **04_BONNES_PRATIQUES.md** | Règles absolues | ~6 KB | ⭐⭐⭐⭐⭐ |
| **05_WORKFLOW_BACKEND.md** | Workflow + templates | ~10 KB | ⭐⭐⭐⭐⭐ |
| **06_EXEMPLES_REFERENCES.md** | Code validé | ~15 KB | ⭐⭐⭐⭐ |
| **TOTAL** | Documentation complète | **~72 KB** | - |

---

## 💡 TIPS POUR TON GEM'S

### Ce que ton Gem's DOIT faire

✅ Lire les 7 fichiers de connaissances  
✅ Générer des prompts structurés (pas de code direct)  
✅ Inclure contexte technique complet  
✅ Respecter nomenclature Strapi v4  
✅ Ajouter validations et permissions  
✅ Fournir checklist validation  

### Ce que ton Gem's NE DOIT JAMAIS faire

❌ Générer du code directement (uniquement des prompts)  
❌ Utiliser syntaxe Strapi v3 (obsolète)  
❌ Oublier les validations  
❌ Négliger les permissions  
❌ Ignorer les composants réutilisables  

---

## 🔗 LIENS AVEC AUTRES DOSSIERS

### `/backend-documentation/`
**Pour** : Gemini Code Assist (génération code)  
**Contenu** : Documentation technique Strapi (setup, Content Types, API, etc.)  
**Usage** : Code Assist lit cette doc pour générer du code

### `/gems-knowledge/` (Frontend)
**Pour** : Gem's Frontend (génération prompts frontend)  
**Contenu** : Design System, architecture Astro, composants React  
**Usage** : Gem's frontend pour prompts Astro/React

### `/gems-knowledge-backend/` (Ce dossier)
**Pour** : Gem's Backend (génération prompts backend)  
**Contenu** : Architecture Strapi, Content Types, API  
**Usage** : Gem's backend pour prompts Strapi

---

## 🎓 EXEMPLE COMPLET

### Demande Utilisateur
```
Je veux créer un Content Type pour gérer les études de cas
avec client, description, technologies, images
```

### Gem's Backend (lit les connaissances)
1. Lit `00_GEMS_CONTEXT_BACKEND.md` → Comprend son rôle
2. Lit `02_CONTENT_TYPES_COMPLET.md` → Voir structure similaire
3. Lit `04_BONNES_PRATIQUES.md` → Règles à respecter
4. Lit `06_EXEMPLES_REFERENCES.md` → Exemples code

### Prompt Généré par Gem's
```markdown
# CREATION : Content Type "case-study"

## Contexte
- Projet : Confluence Digitale V6.7.2 Backend
- Stack : Strapi v4.25+ / PostgreSQL 16 / Cloudinary
- Documentation : /backend-documentation/02_CONTENT_TYPES.md

## Contraintes OBLIGATOIRES
1. API ID : case-study (kebab-case)
2. Model : CaseStudy (PascalCase)
3. Validations strictes sur tous champs
4. Component SEO obligatoire
5. Permissions : Public (read) / Authenticated (write)

## Structure Content Type

### Champs Principaux
- title (string, required, max 100, unique)
- slug (UID, targetField: title, required)
- client (string, required, max 60)
- description (richtext, required, min 100)
- technologies (JSON array of strings)
- coverImage (media, single, required, formats: jpg/png/webp)
- publishedAt (datetime)
- seo (component, SEO, required)

### Relations
- author (relation, many-to-one, team-member)
- category (enumeration: [web, mobile, ecommerce, seo])

## Code Attendu

Crée le fichier `/src/api/case-study/content-types/case-study/schema.json` avec :

```json
{
  "kind": "collectionType",
  "collectionName": "case_studies",
  "info": {
    "singularName": "case-study",
    "pluralName": "case-studies",
    "displayName": "Case Study",
    "description": "Études de cas clients"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "title": {
      "type": "string",
      "required": true,
      "unique": true,
      "maxLength": 100
    },
    "slug": {
      "type": "uid",
      "targetField": "title",
      "required": true
    },
    // ... reste du schema
  }
}
```

## Validation
- [ ] Fichier créé : /src/api/case-study/content-types/case-study/schema.json
- [ ] Nomenclature : case-study (API) / CaseStudy (model)
- [ ] Validations sur tous champs
- [ ] Component SEO ajouté
- [ ] Permissions configurées
- [ ] Build Strapi réussi (npm run build)
- [ ] Endpoint /api/case-studies accessible
```

### Code Assist (génère le code)
- Lit `/backend-documentation/`
- Crée le fichier `schema.json`
- Configure permissions
- Build ✅

---

## ✅ CHECKLIST CONFIGURATION

Avant d'utiliser ton Gem's backend, vérifie :

- [ ] 7 fichiers uploadés dans Gem's
- [ ] Instructions système configurées
- [ ] Gem's testé avec une demande simple
- [ ] Prompts générés sont structurés
- [ ] Contexte technique présent
- [ ] Contraintes Strapi v4 respectées
- [ ] Checklist validation incluse

---

## 🚀 C'EST PARTI !

**Ton Gem's backend est prêt !**

Maintenant tu peux lui demander n'importe quelle tâche backend et il générera des prompts parfaits pour Gemini Code Assist ! 💪

---

**💎 Base de connaissances complète pour Gem's Backend**  
**🎯 Objectif** : Prompts parfaits pour Strapi v4  
**✅ Status** : Production Ready