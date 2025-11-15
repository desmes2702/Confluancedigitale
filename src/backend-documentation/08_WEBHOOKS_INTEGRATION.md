# 🔗 WEBHOOKS & INTÉGRATION - STRAPI ↔ VERCEL

**Projet** : Confluence Digitale V6.7.2  
**Objectif** : Synchroniser Strapi (backend) ↔ Astro (frontend Vercel)  
**Temps** : 20 minutes

---

## 🎯 ARCHITECTURE WEBHOOKS

### Workflow Complet

```
┌─────────────────────────────────────────────────────────┐
│  STRAPI ADMIN PANEL                                     │
│  https://api.confluence-digitale.fr/admin              │
│                                                          │
│  1. Admin publie Article                                │
│  2. Strapi déclenche webhook                            │
└───────────────────┬─────────────────────────────────────┘
                    │
                    │ POST webhook
                    ▼
┌─────────────────────────────────────────────────────────┐
│  VERCEL DEPLOY HOOK                                     │
│  https://api.vercel.com/v1/integrations/deploy/...     │
│                                                          │
│  3. Vercel reçoit requête                               │
│  4. Déclenche rebuild frontend                          │
└───────────────────┬─────────────────────────────────────┘
                    │
                    │ Rebuild
                    ▼
┌─────────────────────────────────────────────────────────┐
│  ASTRO BUILD                                            │
│  https://confluence-digitale.fr                         │
│                                                          │
│  5. Fetch nouvelles données Strapi                      │
│  6. Génère pages statiques (SSG)                        │
│  7. Déploiement automatique                             │
└─────────────────────────────────────────────────────────┘
```

**Avantages** :
- ✅ Contenu toujours à jour (rebuild auto)
- ✅ Zéro action manuelle
- ✅ Performance SSG préservée
- ✅ SEO optimal (pages statiques)

---

## 📦 ÉTAPE 1 : CRÉER DEPLOY HOOK VERCEL

### Via Dashboard Vercel

1. **Connexion** : https://vercel.com/dashboard
2. **Sélectionner projet** : `confluence-digitale-frontend`
3. **Settings** → **Git** → **Deploy Hooks**
4. **Create Hook** :
   - **Name** : `Strapi Content Update`
   - **Branch** : `main` (ou production)
   - **Cliquer** : Create Hook

**URL générée** (exemple) :
```
https://api.vercel.com/v1/integrations/deploy/prj_abc123xyz/abc123xyz456
```

**⚠️ IMPORTANT** : Copier cette URL (elle contient un token secret)

---

### Via Vercel CLI (Alternative)

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Créer Deploy Hook
vercel project hooks add \
  --name "Strapi Content Update" \
  --branch main \
  confluence-digitale-frontend
```

**Sortie** :
```
Deploy Hook created:
https://api.vercel.com/v1/integrations/deploy/prj_abc123xyz/abc123xyz456
```

---

## 🔧 ÉTAPE 2 : CONFIGURER WEBHOOK STRAPI

### Via Admin Panel (Recommandé)

1. **Connexion Strapi Admin** : http://localhost:1337/admin (ou https://api.confluence-digitale.fr/admin)
2. **Settings** → **Webhooks**
3. **Create new webhook** :

**Configuration** :

| Champ | Valeur |
|-------|--------|
| **Name** | `Vercel Deploy on Content Update` |
| **URL** | `https://api.vercel.com/v1/integrations/deploy/prj_abc123xyz/abc123xyz456` |
| **Headers** | (vide - token dans URL) |
| **Events** | Sélectionner selon besoin (voir ci-dessous) |
| **Enabled** | ✅ Coché |

---

### Events à Activer

**Pour rebuild complet (recommandé)** :

| Content Type | Events |
|--------------|--------|
| **Article** | `entry.publish`, `entry.unpublish`, `entry.update` |
| **Page** | `entry.publish`, `entry.unpublish`, `entry.update` |
| **Service** | `entry.publish`, `entry.unpublish`, `entry.update` |
| **Testimonial** | `entry.publish`, `entry.unpublish`, `entry.update` |
| **Team Member** | `entry.publish`, `entry.unpublish`, `entry.update` |
| **FAQ** | `entry.publish`, `entry.unpublish`, `entry.update` |

**Ne PAS activer** :
- ❌ `Contact` (messages ne nécessitent pas rebuild)
- ❌ `entry.create` (brouillons ne nécessitent pas rebuild)
- ❌ `entry.delete` (gérer manuellement si nécessaire)

---

### Configuration JSON (Alternative)

**Fichier** : `config/env/production/webhooks.js`

```javascript
module.exports = {
  settings: {
    webhooks: [
      {
        name: 'Vercel Deploy on Content Update',
        url: process.env.VERCEL_DEPLOY_HOOK_URL,
        headers: {},
        events: [
          'entry.publish',
          'entry.unpublish',
          'entry.update',
        ],
        enabled: true,
      },
    ],
  },
};
```

**Variables environnement** (`.env.production`) :
```bash
VERCEL_DEPLOY_HOOK_URL=https://api.vercel.com/v1/integrations/deploy/prj_abc123xyz/abc123xyz456
```

---

## 🧪 ÉTAPE 3 : TESTER WEBHOOK

### Test Manuel via Strapi

1. **Admin Panel** → **Content Manager** → **Article**
2. **Créer nouveau** ou **éditer** article existant
3. **Publish** (ou **Update**)
4. **Observer** :
   - Dashboard Vercel : Nouveau build apparaît
   - Logs Strapi : Webhook envoyé (Settings → Webhooks → View logs)

---

### Test Manuel via curl

**Tester Deploy Hook Vercel directement** :

```bash
curl -X POST \
  https://api.vercel.com/v1/integrations/deploy/prj_abc123xyz/abc123xyz456
```

**Réponse attendue** :
```json
{
  "job": {
    "id": "dpl_abc123xyz",
    "state": "PENDING",
    "createdAt": 1699876543210
  }
}
```

**Vérifier** : Dashboard Vercel → Deployments (nouveau build en cours)

---

### Vérifier Logs Strapi

**Admin Panel** :
1. **Settings** → **Webhooks**
2. **Cliquer webhook** : `Vercel Deploy on Content Update`
3. **View logs**

**Logs attendus** :
```
✅ 2025-11-15 10:23:45 | POST | 200 OK | entry.publish | article:5
✅ 2025-11-15 09:15:22 | POST | 200 OK | entry.update | page:2
❌ 2025-11-15 08:05:10 | POST | 500 ERROR | entry.publish | service:3
```

**Erreurs possibles** :
- `500 ERROR` : URL Deploy Hook incorrecte ou expirée
- `Timeout` : Vercel inaccessible (vérifier connexion)

---

## ⚡ OPTIMISATIONS

### 1. Debounce Webhooks (Éviter Builds Excessifs)

**Problème** : Plusieurs updates rapides → Plusieurs builds inutiles

**Solution** : Créer middleware custom Strapi

**Fichier** : `src/middlewares/webhook-debounce.js`

```javascript
'use strict';

const debounce = require('lodash.debounce');

module.exports = () => {
  // Debounce 5 minutes (300000ms)
  const triggerDeploy = debounce(async () => {
    try {
      const response = await fetch(process.env.VERCEL_DEPLOY_HOOK_URL, {
        method: 'POST',
      });
      
      if (response.ok) {
        strapi.log.info('Vercel deploy triggered successfully');
      } else {
        strapi.log.error('Vercel deploy failed:', response.status);
      }
    } catch (error) {
      strapi.log.error('Webhook error:', error);
    }
  }, 300000); // 5 minutes

  return async (ctx, next) => {
    await next();
    
    // Vérifier si update sur Content Type concerné
    const contentTypesWithWebhook = [
      'api::article.article',
      'api::page.page',
      'api::service.service',
      'api::testimonial.testimonial',
      'api::team-member.team-member',
      'api::faq.faq',
    ];
    
    if (
      ctx.state.route &&
      contentTypesWithWebhook.includes(ctx.state.route.info.type) &&
      ['publish', 'unpublish', 'update'].includes(ctx.state.action)
    ) {
      triggerDeploy();
    }
  };
};
```

**Installer lodash** :
```bash
npm install lodash.debounce --save
```

**Activer middleware** (`config/middlewares.js`) :
```javascript
module.exports = [
  // ... autres middlewares
  'global::webhook-debounce',
];
```

---

### 2. Rebuild Sélectif (Économiser Temps Build)

**Astro Config** : Ne rebuild que pages modifiées

**Fichier** : `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  adapter: vercel({
    // Activer Incremental Static Regeneration
    isr: {
      expiration: 60 * 60 * 24, // 24h
      bypassToken: process.env.VERCEL_BYPASS_TOKEN,
    },
  }),
  // ...
});
```

**Avantage** : Pages non modifiées gardent cache 24h

---

### 3. Notifications Rebuild (Optionnel)

**Recevoir email quand rebuild terminé**

**Vercel** :
1. **Project Settings** → **Notifications**
2. **Enable** : Deployment notifications
3. **Email** : admin@confluence-digitale.fr

**Slack (Alternative)** :
1. Créer webhook Slack
2. Strapi webhook custom → Envoie à Slack après Vercel webhook

---

## 🔐 SÉCURITÉ WEBHOOKS

### 1. Sécuriser URL Deploy Hook

**⚠️ NE JAMAIS** :
- Commit URL dans Git
- Partager URL publiquement
- Utiliser dans frontend

**✅ TOUJOURS** :
- Stocker dans `.env` (backend uniquement)
- Régénérer si compromise (Vercel → Delete Hook → Créer nouveau)

---

### 2. Vérifier Origine Requête (Optionnel)

**Strapi Custom Webhook** avec signature :

**Fichier** : `src/webhooks/vercel-deploy.js`

```javascript
const crypto = require('crypto');

module.exports = async (event) => {
  // Signature webhook (évite appels non autorisés)
  const secret = process.env.WEBHOOK_SECRET;
  const payload = JSON.stringify(event);
  const signature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  try {
    const response = await fetch(process.env.VERCEL_DEPLOY_HOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Signature': signature,
      },
      body: payload,
    });
    
    if (response.ok) {
      strapi.log.info(`Vercel deploy triggered for ${event.model}`);
    } else {
      strapi.log.error(`Vercel deploy failed: ${response.status}`);
    }
  } catch (error) {
    strapi.log.error('Webhook error:', error);
  }
};
```

---

## 📊 MONITORING WEBHOOKS

### Métriques à Suivre

| Métrique | Outil | Alerte si... |
|----------|-------|--------------|
| **Webhook Success Rate** | Strapi Logs | < 95% |
| **Build Time** | Vercel Analytics | > 5 minutes |
| **Build Frequency** | Vercel Dashboard | > 20/jour |
| **Failed Deploys** | Vercel Notifications | > 0 |

---

### Dashboard Monitoring (Optionnel)

**Strapi Plugin Analytics** :

```bash
npm install @strapi/plugin-sentry --save
```

**Configuration** (`config/plugins.js`) :
```javascript
module.exports = {
  sentry: {
    enabled: true,
    config: {
      dsn: process.env.SENTRY_DSN,
      sendMetadata: true,
    },
  },
};
```

---

## 🧩 INTÉGRATIONS AVANCÉES

### 1. Webhook Conditionnel (Filtres)

**Exemple** : Ne rebuild que si article avec `featured: true`

**Fichier** : `src/webhooks/conditional-deploy.js`

```javascript
module.exports = async (event) => {
  const { model, entry } = event;
  
  // Conditions rebuild
  const shouldTriggerDeploy = 
    (model === 'article' && entry.featured === true) ||
    (model === 'page' && entry.template === 'landing') ||
    model === 'team-member';
  
  if (shouldTriggerDeploy) {
    await fetch(process.env.VERCEL_DEPLOY_HOOK_URL, {
      method: 'POST',
    });
    strapi.log.info(`Deploy triggered for ${model}:${entry.id}`);
  } else {
    strapi.log.info(`Deploy skipped for ${model}:${entry.id}`);
  }
};
```

---

### 2. Multi-Environnements

**Webhooks différents par environnement** :

**Development** (localhost) :
```bash
VERCEL_DEPLOY_HOOK_URL_DEV=https://api.vercel.com/v1/.../dev-branch
```

**Production** :
```bash
VERCEL_DEPLOY_HOOK_URL_PROD=https://api.vercel.com/v1/.../main-branch
```

**Configuration** (`config/webhooks.js`) :
```javascript
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  settings: {
    webhooks: [
      {
        name: isProduction ? 'Vercel Production' : 'Vercel Dev',
        url: isProduction 
          ? process.env.VERCEL_DEPLOY_HOOK_URL_PROD
          : process.env.VERCEL_DEPLOY_HOOK_URL_DEV,
        enabled: true,
      },
    ],
  },
};
```

---

### 3. Webhooks Multiples (Backup, Analytics)

**Exemple** : Déclencher aussi backup après publish

**Strapi Webhooks** :
1. **Webhook 1** : Vercel Deploy
2. **Webhook 2** : Database Backup (vers S3/Cloudinary)
3. **Webhook 3** : Analytics (Google Analytics API)

**Configuration** :
```javascript
module.exports = {
  settings: {
    webhooks: [
      {
        name: 'Vercel Deploy',
        url: process.env.VERCEL_DEPLOY_HOOK_URL,
        events: ['entry.publish'],
      },
      {
        name: 'Backup Database',
        url: process.env.BACKUP_WEBHOOK_URL,
        events: ['entry.publish', 'entry.delete'],
      },
      {
        name: 'Analytics Tracking',
        url: process.env.ANALYTICS_WEBHOOK_URL,
        events: ['entry.publish'],
      },
    ],
  },
};
```

---

## 🐛 TROUBLESHOOTING

### Webhook ne se déclenche pas

**Causes possibles** :
1. ❌ Webhook désactivé (Enabled = false)
2. ❌ Events non cochés
3. ❌ Content Type non publié (draft)

**Solution** :
- Vérifier Settings → Webhooks → Enabled ✅
- Vérifier Events contient `entry.publish`
- Publier article (bouton Publish, pas Save)

---

### Build Vercel échoue

**Causes possibles** :
1. ❌ Erreur dans code Astro
2. ❌ API Strapi inaccessible (CORS, token)
3. ❌ Variable env manquante (PUBLIC_STRAPI_URL)

**Solution** :
```bash
# Vérifier logs Vercel
vercel logs confluence-digitale-frontend --production

# Tester API Strapi accessible
curl https://api.confluence-digitale.fr/api/articles?populate=*

# Vérifier variables env Vercel
vercel env ls
```

---

### Builds trop fréquents (>10/jour)

**Causes** :
- Admin fait beaucoup de updates
- Webhook déclenché sur `entry.create` (brouillons)
- Plusieurs admins travaillent simultanément

**Solutions** :
1. Activer debounce (voir Optimisations)
2. Enlever event `entry.create`
3. Utiliser branches dev (webhook séparé)

---

## ✅ CHECKLIST WEBHOOKS

### Configuration

- [ ] Deploy Hook Vercel créé
- [ ] URL Deploy Hook copiée
- [ ] Webhook Strapi configuré
- [ ] Events corrects activés (`entry.publish`, etc.)
- [ ] Webhook enabled ✅

### Tests

- [ ] Test manuel : Publier article → Build Vercel déclenché
- [ ] Test curl : Deploy Hook répond 200 OK
- [ ] Logs Strapi : Webhook success (200)
- [ ] Logs Vercel : Build démarre
- [ ] Frontend : Nouveau contenu visible après build

### Sécurité

- [ ] URL Deploy Hook dans `.env` (pas en clair)
- [ ] `.env` dans `.gitignore`
- [ ] Webhook non activé sur Contact (messages)
- [ ] Notifications déploiement activées

---

## 🚀 PROCHAINES ÉTAPES

Après configuration webhooks :

1. ✅ **Maintenance** → `09_MAINTENANCE_BACKUP.md`
2. ✅ **Monitoring** → Configurer Sentry/Analytics
3. ✅ **Optimisation** → Caching, ISR

---

**🔗 Webhooks Configurés ! Backend ↔ Frontend Synchronisés ! 💪**

---

**Projet** : Confluence Digitale V6.7.2  
**Date** : Novembre 2025  
**Version** : 1.0
