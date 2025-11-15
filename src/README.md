# 🌊 CONFLUENCE DIGITALE V6.7.2

**Design System** : App Moderne 2025  
**Stack** : Astro + React + Tailwind + Strapi  
**Status** : ✅ Production Ready

---

## 📚 DOCUMENTATION

### 🎨 Frontend (Astro + React + Tailwind)

👉 **[/migration-frontend/](/migration-frontend/README.md)** ← Pour Gemini Code Assist

**Quick Start** :
```bash
npm install
npm run dev
# → http://localhost:4321
```

**Contenu** : 14 fichiers (~5,000 lignes)
- Installation & Setup
- Design System V6.7.2
- Templates & Composants
- SEO & Performance
- Deployment Vercel
- Intégration API Strapi

---

### 🗄️ Backend (Strapi v4 + PostgreSQL + TypeScript)

👉 **[/backend-documentation/](/backend-documentation/README.md)** ← Pour Gemini Code Assist

**Quick Start** :
```bash
cd backend-strapi
npm install
npm run develop
# → http://localhost:1337/admin
```

**Contenu** : 11 fichiers (~12,000 lignes)
- Installation Strapi
- 7 Content Types
- API REST Endpoints
- Auth JWT & Permissions
- Deployment Railway
- Backup & Monitoring

**⚠️ Important** : Backend 100% TypeScript (.ts) pour cohérence avec frontend

---

## 🚀 WORKFLOW GEMINI 2.5 PRO + CODE ASSIST

### Frontend

**Gem's Knowledge** : `/gems-knowledge/` (8 fichiers)  
**Code Assist Doc** : `/migration-frontend/` (14 fichiers)

**Workflow** :
1. Gem's Frontend (Gemini 2.5 Pro App) → Génère prompt structuré
2. Copier prompt → Coller dans Code Assist (VS Code)
3. Code Assist génère code Astro/React conforme Design System V6.7.2
4. Validation → Tests + Lighthouse
5. Deploy → Vercel

---

### Backend

**Gem's Knowledge** : `/gems-knowledge-backend/` (7 fichiers)  
**Code Assist Doc** : `/backend-documentation/` (11 fichiers)

**Workflow** :
1. Gem's Backend (Gemini 2.5 Pro App) → Génère prompt structuré
2. Copier prompt → Coller dans Code Assist (VS Code)
3. Code Assist génère code Strapi v4 conforme
4. Validation → API Tests + DB
5. Deploy → Railway

---

## 📂 STRUCTURE PROJET

```
/
├── /gems-knowledge/              💎 CONNAISSANCES GEM'S FRONTEND (8 fichiers)
│   ├── 00_GEMS_CONTEXT.md       ← Rôle Gem's
│   ├── 01_PROJET_CONFLUENCE.md  ← Contexte business
│   ├── 02_DESIGN_SYSTEM_COMPLET.md
│   ├── 03_ARCHITECTURE_PROJET.md
│   ├── 04_REGLES_ABSOLUES.md
│   ├── 05_WORKFLOW_COMPLET.md
│   ├── 06_EXEMPLES_REFERENCES.md
│   ├── 07_PROMPTS_PATTERNS.md
│   └── README.md
│
├── /gems-knowledge-backend/      💎 CONNAISSANCES GEM'S BACKEND (7 fichiers)
│   ├── 00_GEMS_CONTEXT_BACKEND.md
│   ├── 01_PROJET_STRAPI.md
│   ├── 02_CONTENT_TYPES_COMPLET.md
│   ├── 03_API_CONFIGURATION.md
│   ├── 04_BONNES_PRATIQUES.md
│   ├── 05_WORKFLOW_BACKEND.md
│   ├── 06_EXEMPLES_REFERENCES.md
│   └── README.md
│
├── /migration-frontend/          📖 DOC CODE ASSIST FRONTEND (14 fichiers)
│   ├── 00_INDEX.md
│   ├── 01-09, 11, 13-14 (guides techniques)
│   └── README.md
│
├── /backend-documentation/       📖 DOC CODE ASSIST BACKEND (11 fichiers)
│   ├── 00_INDEX.md
│   ├── 01-09 (guides techniques)
│   └── README.md
│
├── /components/                  💻 Composants React
├── /pages/                       💻 Pages React
├── /hooks/                       💻 Custom Hooks
├── /styles/                      💻 CSS Global
│
├── confluence.code-workspace     ⚙️ VS Code Workspace
└── README.md                     📖 Ce fichier
```

---

## 🎯 CONFIGURATION GEM'S

### Gem's Frontend (Gemini 2.5 Pro App)

1. **Ouvre** Gemini 2.5 Pro App
2. **Crée** nouveau Gem's "Confluence Frontend Assistant"
3. **Upload** les 8 fichiers de `/gems-knowledge/`
4. **Configure** instructions (voir `/gems-knowledge/README.md`)
5. **Sauvegarde**

**Résultat** : Gem's prêt à générer prompts frontend ✅

---

### Gem's Backend (Gemini 2.5 Pro App)

1. **Ouvre** Gemini 2.5 Pro App
2. **Crée** nouveau Gem's "Confluence Backend Assistant"
3. **Upload** les 7 fichiers de `/gems-knowledge-backend/`
4. **Configure** instructions (voir `/gems-knowledge-backend/README.md`)
5. **Sauvegarde**

**Résultat** : Gem's prêt à générer prompts backend ✅

---

## 🎯 PARCOURS DÉBUTANT

### 1. Setup Gem's (30 min - one-time)

1. **Gem's Frontend** → Upload `/gems-knowledge/` (8 fichiers)
2. **Gem's Backend** → Upload `/gems-knowledge-backend/` (7 fichiers)

---

### 2. Frontend (3h)

1. `/migration-frontend/README.md` → Comprendre workflow
2. `/migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md` → Design System
3. `/migration-frontend/05_TEMPLATES.md` → Templates code
4. `/migration-frontend/13_DEPLOYMENT_VERCEL.md` → Deploy

---

### 3. Backend (3h)

1. `/backend-documentation/README.md` → Comprendre workflow
2. `/backend-documentation/02_CONTENT_TYPES.md` → 7 Content Types
3. `/backend-documentation/03_API_ENDPOINTS.md` → API REST
4. `/backend-documentation/05_DEPLOYMENT_PRODUCTION.md` → Deploy

---

### 4. Workflow Quotidien (5 min par tâche)

**Frontend** :
```
Demande → Gem's Frontend → Prompt → Code Assist → Code Astro/React ✅
```

**Backend** :
```
Demande → Gem's Backend → Prompt → Code Assist → Code Strapi ✅
```

---

## 🔗 LIENS RAPIDES

### Configuration

- **Gem's Frontend** : `/gems-knowledge/README.md`
- **Gem's Backend** : `/gems-knowledge-backend/README.md`

### Documentation Code Assist

- **Frontend** : `/migration-frontend/README.md`
- **Backend** : `/backend-documentation/README.md`

### Références Techniques

- **Design System** : `/migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md`
- **Content Types** : `/backend-documentation/02_CONTENT_TYPES.md`
- **API Strapi** : `/backend-documentation/03_API_ENDPOINTS.md`

---

## 📊 RÉSUMÉ ORGANISATION

| Dossier | Pour | Rôle | Fichiers |
|---------|------|------|----------|
| `/gems-knowledge/` | **Gem's Frontend** | Génère prompts frontend | 8 |
| `/gems-knowledge-backend/` | **Gem's Backend** | Génère prompts backend | 7 |
| `/migration-frontend/` | **Code Assist** | Doc technique frontend | 14 |
| `/backend-documentation/` | **Code Assist** | Doc technique backend | 11 |

**Workflow** :
```
Gem's (lit /gems-knowledge/) → Prompt → Code Assist (lit /migration-frontend/) → Code ✅
```

---

## 📞 SUPPORT

**Documentation** :
- Frontend → `/migration-frontend/`
- Backend → `/backend-documentation/`
- Gem's Frontend → `/gems-knowledge/`
- Gem's Backend → `/gems-knowledge-backend/`

**Communauté** :
- Astro : https://astro.build/chat
- Strapi : https://discord.strapi.io/

---

**🌊 Confluence Digitale V6.7.2 - Ready to Ship ! 🚀**