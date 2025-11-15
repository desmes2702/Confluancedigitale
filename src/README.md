# 🌊 CONFLUENCE DIGITALE V6.7.2

**Design System** : App Moderne 2025  
**Stack** : Astro + React + Tailwind + Strapi  
**Status** : ✅ Production Ready

---

## 📚 DOCUMENTATION

### 🎨 Frontend (Astro + React + Tailwind)

👉 **[/migration-frontend/](/migration-frontend/README.md)**

**Quick Start** :
```bash
npm install
npm run dev
# → http://localhost:4321
```

**Contenu** : 16 fichiers (~6,000 lignes)
- Installation & Setup
- Design System V6.7.2
- Templates & Composants
- SEO & Performance
- Deployment Vercel
- Intégration API Strapi

---

### 🗄️ Backend (Strapi v4 + PostgreSQL)

👉 **[/backend-documentation/](/backend-documentation/README.md)**

**Quick Start** :
```bash
cd backend-strapi
npm install
npm run develop
# → http://localhost:1337/admin
```

**Contenu** : 19 fichiers (~15,000 lignes)
- Installation Strapi
- 9 Content Types
- API REST Endpoints
- Auth JWT & Permissions
- Deployment Railway
- Backup & Monitoring

---

## 🚀 WORKFLOW GEMINI

### Frontend

**Config VS Code** : `/.vscode/gemini-instructions.md` (auto-chargé)

**Workflow** :
1. Gem's (Gemini 2.5 Pro) → Prompt
2. Code Assist (VS Code) → Code Astro
3. Validation → Tests + Lighthouse
4. Deploy → Vercel

**Guide** : `/migration-frontend/12_WORKFLOW_GEMINI.md`

---

### Backend

**Config VS Code** : `/backend-documentation/.vscode/gemini-instructions.md` (auto-chargé)

**Workflow** :
1. Gem's (Gemini 2.5 Pro) → Prompt
2. Code Assist (VS Code) → Code Strapi
3. Validation → API Tests + DB
4. Deploy → Railway

**Guide** : `/backend-documentation/00_WORKFLOW_GEMINI_BACKEND.md`

---

## 📂 STRUCTURE PROJET

```
/
├── .vscode/                  Config VS Code Frontend
│   ├── gemini-instructions.md
│   ├── settings.json
│   └── extensions.json
│
├── /migration-frontend/      📖 DOC FRONTEND (16 fichiers)
│   ├── 00_INDEX.md
│   ├── 01-14 (guides)
│   └── README.md
│
├── /backend-documentation/   📖 DOC BACKEND (19 fichiers)
│   ├── .vscode/              Config VS Code Backend
│   │   ├── gemini-instructions.md
│   │   ├── settings.json
│   │   └── extensions.json
│   ├── 00_INDEX.md
│   ├── 01-09 (guides)
│   └── README.md
│
├── /components/              💻 Composants React
├── /pages/                   💻 Pages React
├── /hooks/                   💻 Custom Hooks
├── /styles/                  💻 CSS Global
│
├── confluence.code-workspace ⚙️ VS Code Workspace (recommandé)
└── README.md                 📖 Ce fichier
```

---

## 🎯 PARCOURS DÉBUTANT

### 1. Frontend (3h)

1. `/migration-frontend/00_INDEX.md` → Vue d'ensemble
2. `/migration-frontend/01_QUICK_START.md` → Installation
3. `/migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md` → Design
4. `/migration-frontend/13_DEPLOYMENT_VERCEL.md` → Deploy

---

### 2. Backend (3h)

1. `/backend-documentation/00_INDEX.md` → Vue d'ensemble
2. `/backend-documentation/01_STRAPI_SETUP.md` → Installation
3. `/backend-documentation/02_CONTENT_TYPES.md` → Données
4. `/backend-documentation/05_DEPLOYMENT_PRODUCTION.md` → Deploy

---

### 3. Intégration (1h)

1. `/backend-documentation/08_WEBHOOKS_INTEGRATION.md` → Webhooks
2. `/migration-frontend/14_INTEGRATION_STRAPI.md` → API Frontend

---

## 🔗 LIENS RAPIDES

- **Design System** : `/migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md`
- **Content Types** : `/backend-documentation/02_CONTENT_TYPES.md`
- **API Strapi** : `/backend-documentation/03_API_ENDPOINTS.md`
- **Workflow Gemini Frontend** : `/migration-frontend/12_WORKFLOW_GEMINI.md`
- **Workflow Gemini Backend** : `/backend-documentation/00_WORKFLOW_GEMINI_BACKEND.md`
- **Config Gem's** : `/migration-frontend/GEMINI_GEMS_CONFIGURATION.md`

---

## 📞 SUPPORT

**Documentation** :
- Frontend → `/migration-frontend/`
- Backend → `/backend-documentation/`

**Communauté** :
- Astro : https://astro.build/chat
- Strapi : https://discord.strapi.io/

---

**🌊 Confluence Digitale V6.7.2 - Ready to Ship ! 🚀**