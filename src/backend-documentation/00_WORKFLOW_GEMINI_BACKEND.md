# 🔄 WORKFLOW GEMINI - BACKEND STRAPI

**Projet** : Confluence Digitale V6.7.2 - Backend  
**Workflow** : Gemini 2.5 Pro App (Gem's) → Gemini Code Assist (VS Code)  
**Objectif** : Développement backend automatisé et professionnel  
**Temps** : Variable selon tâche

---

## 🎯 MODUS OPERANDI (4 ÉTAPES)

```
┌─────────────────────────────────────────────────────────────┐
│  ÉTAPE 1 : GEM'S (Gemini 2.5 Pro App)                      │
│  ────────────────────────────────────────                   │
│  • Activer Gem's "Backend Developer"                        │
│  • Décrire besoin (Content Type, API, Config, etc.)        │
│  • Gem's génère prompt optimisé pour Code Assist           │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ COPIER PROMPT
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  ÉTAPE 2 : CODE ASSIST (VS Code)                           │
│  ────────────────────────────────────────                   │
│  • Ouvrir projet backend dans VS Code                       │
│  • Chat Gemini (💬) ou Inline (⌘I)                         │
│  • Coller prompt du Gem's                                   │
│  • Code Assist génère code avec contexte projet             │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ CODE GÉNÉRÉ
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  ÉTAPE 3 : VALIDATION                                       │
│  ────────────────────────────────────────                   │
│  • Vérifier code généré (sécurité, validations)            │
│  • Tester API (Thunder Client / curl)                       │
│  • Vérifier DB (PostgreSQL Client)                          │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ VALIDÉ
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  ÉTAPE 4 : COMMIT & DEPLOY                                  │
│  ────────────────────────────────────────────                │
│  • Commit avec message descriptif                            │
│  • Push vers Git                                             │
│  • Déploiement auto (Railway) ou manuel                     │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 SETUP INITIAL (À FAIRE UNE FOIS)

### Checklist Setup

- [ ] **Gem's créé** dans Gemini 2.5 Pro App
  → Voir `/backend-documentation/GEMINI_BACKEND_CONFIGURATION.md`

- [ ] **VS Code configuré** avec Gemini Code Assist
  → Voir `/backend-documentation/.vscode/README.md`

- [ ] **Extensions installées**
  - Gemini Code Assist
  - ESLint, Prettier
  - PostgreSQL Client, Thunder Client

- [ ] **Projet backend ouvert** dans VS Code
  → `.vscode/gemini-instructions.md` chargé automatiquement

- [ ] **Test Gemini Chat** fonctionne
  → ⌘I → "Test" → Réponse OK

---

## 📋 SCÉNARIOS D'UTILISATION

### Scénario #1 : Créer Nouveau Content Type

#### Étape 1 : Dans Gemini App (Gem's)

**Activer Gem's** : "Backend Developer - Confluence Digitale"

**Message** :
```
Crée le Content Type "Service" pour Confluence Digitale avec :

Champs :
- name (string, requis, max 100 caractères)
- slug (uid auto depuis name, unique, requis)
- description (richtext, requis)
- icon (string, nom icône Lucide, requis)
- features (repeatable component avec champ "feature" text)
- price (decimal, requis, min 0)
- priceUnit (string, ex: "/ mois", requis)
- order (integer, pour tri, défaut 0)

Options :
- Draft & Publish activé
- Permissions publiques : find, findOne
- Admin : toutes permissions

Donne-moi :
1. Schema JSON complet (schema.json)
2. Component features (features.json)
3. Configuration permissions
4. Exemple requête GET avec populate
```

**Gem's génère** : Prompt optimisé + code complet

---

#### Étape 2 : Dans VS Code (Code Assist)

**Ouvrir Gemini Chat** : Icône 💬 ou ⌘I

**Coller** : Prompt du Gem's (ou résumé)

**Code Assist génère** :
- `schema.json` complet
- `features.json` (component)
- Instructions permissions
- Exemple curl

---

#### Étape 3 : Valider

**Créer fichiers** :
```bash
# Content Type
src/api/service/content-types/service/schema.json

# Component
src/components/features/features.json
```

**Tester API** (Thunder Client ou curl) :
```bash
curl "http://localhost:1337/api/services?populate=*" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Vérifier DB** : PostgreSQL Client → Table `services` créée

---

#### Étape 4 : Commit

```bash
git add .
git commit -m "feat(content-type): add Service with features component"
git push origin main
```

---

### Scénario #2 : Configurer PostgreSQL Production

#### Étape 1 : Gem's

**Message** :
```
Configure PostgreSQL pour production Railway :

Environnement :
- Host : depuis env DATABASE_HOST
- Port : 5432
- SSL : activé avec rejectUnauthorized false
- Pool : min 2, max 10 connexions
- Timeout : 30 secondes

Besoin :
1. Fichier database.js complet
2. Variables .env production
3. Test de connexion
4. Commande migration si nécessaire
```

---

#### Étape 2 : Code Assist

**Coller prompt** → Code Assist génère :
- `config/database.js` complet
- Liste variables `.env`
- Script test connexion
- Commandes migration

---

#### Étape 3 : Valider

**Créer** : `config/database.js` avec code généré

**Ajouter variables** : Railway Dashboard → Variables

**Tester** :
```bash
# Local
npm run strapi start

# Logs de connexion PostgreSQL doivent apparaître
```

---

#### Étape 4 : Deploy

Railway détecte changement → Redéploie automatiquement

---

### Scénario #3 : Custom Controller (Formulaire Contact)

#### Étape 1 : Gem's

**Message** :
```
Crée un custom controller pour le Content Type "Contact" qui :

1. Valide l'email (format + domaine existant)
2. Valide le téléphone (format français)
3. Sanitize le message (XSS protection)
4. Crée l'entrée avec status "new"
5. Envoie notification email admin
6. Retourne confirmation JSON

Gère les erreurs :
- Email invalide → 400 Bad Request
- Téléphone invalide → 400 Bad Request
- Erreur serveur → 500 Internal Server Error

Respect règles sécurité Strapi v4.
```

---

#### Étape 2 : Code Assist

**Génère** : Controller complet avec validations

---

#### Étape 3 : Valider

**Créer** : `src/api/contact/controllers/contact.js`

**Tester** :
```bash
curl -X POST "http://localhost:1337/api/contacts" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "name": "Test User",
      "email": "test@example.com",
      "phone": "0612345678",
      "message": "Message de test"
    }
  }'
```

**Vérifier** :
- Réponse 200 avec données
- Entrée dans DB
- Email reçu (si configuré)

---

### Scénario #4 : Webhook Rebuild Vercel

#### Étape 1 : Gem's

**Message** :
```
Configure webhook Strapi qui trigger rebuild Vercel quand :
- Article publié (entry.publish)
- Page mise à jour (entry.update)
- Service créé/modifié

URL Vercel : https://api.vercel.com/v1/integrations/deploy/xxx

Donne-moi :
1. Configuration webhook dans Strapi Admin
2. Headers nécessaires
3. Events à sélectionner
4. Test webhook
```

---

#### Étape 2 : Code Assist

**Génère** : Instructions détaillées configuration webhook

---

#### Étape 3 : Valider

**Dans Strapi Admin** :
1. Settings → Webhooks → Create
2. Remplir selon instructions Code Assist
3. Save

**Tester** :
1. Publier un article
2. Vérifier Vercel Dashboard → Nouveau déploiement lancé

---

### Scénario #5 : Migration Base de Données

#### Étape 1 : Gem's

**Message** :
```
J'ai modifié le Content Type "Article" en ajoutant un champ "readTime" (integer).

Besoin :
1. Migration pour ajouter colonne
2. Script pour calculer readTime sur articles existants (300 mots/min)
3. Commandes pour appliquer migration
4. Rollback si problème

Environnement : PostgreSQL production (Railway)
```

---

#### Étape 2 : Code Assist

**Génère** :
- Script migration
- Fonction calcul readTime
- Commandes SQL
- Procédure rollback

---

#### Étape 3 : Valider

**Backup DB** (TOUJOURS avant migration) :
```bash
# Railway CLI
railway run pg_dump > backup_$(date +%Y%m%d).sql
```

**Appliquer migration** :
```bash
npm run strapi console
```

**Vérifier** :
```bash
# Vérifier colonne ajoutée
SELECT column_name FROM information_schema.columns 
WHERE table_name = 'articles';
```

---

### Scénario #6 : Optimisation Performance API

#### Étape 1 : Gem's

**Message** :
```
Mon endpoint GET /api/articles?populate=* est lent (500ms).

Optimise avec :
1. Indexes sur colonnes slug, publishedAt
2. Populate sélectif (pas *)
3. Pagination obligatoire (max 20 items)
4. Cache stratégie (Redis ou simple)
5. Query optimization

Donne-moi :
1. Indexes à créer (migration SQL)
2. Controller optimisé
3. Middleware pagination
4. Métriques avant/après
```

---

#### Étape 2 : Code Assist

**Génère** :
- Script indexes SQL
- Controller avec populate optimisé
- Middleware pagination
- Guide benchmarking

---

#### Étape 3 : Valider

**Appliquer indexes** :
```sql
CREATE INDEX idx_articles_slug ON articles(slug);
CREATE INDEX idx_articles_published ON articles(published_at);
```

**Benchmark** :
```bash
# Avant
time curl "http://localhost:1337/api/articles?populate=*"

# Après
time curl "http://localhost:1337/api/articles?populate[author][fields][0]=name&pagination[pageSize]=20"
```

---

### Scénario #7 : Déploiement Initial Production

#### Étape 1 : Gem's

**Message** :
```
Déploie Strapi en production sur Railway avec :

Infrastructure :
- PostgreSQL 15 (Railway)
- Cloudinary (images)
- Node.js 18+

Configuration :
1. Variables environnement complètes
2. Database setup
3. Cloudinary plugin
4. CORS production
5. SSL/TLS
6. Backup automatique

Checklist complète étape par étape.
```

---

#### Étape 2 : Code Assist

**Génère** :
- Checklist déploiement complète
- Variables env production
- Config files (database, server, middlewares)
- Commandes Railway CLI

---

#### Étape 3 : Valider

**Railway** :
1. Créer projet Railway
2. Ajouter PostgreSQL service
3. Ajouter variables env
4. Connect Git repo
5. Deploy

**Tester production** :
```bash
curl "https://api.confluence-digitale.fr/api/articles?populate=*" \
  -H "Authorization: Bearer PROD_TOKEN"
```

---

## 💡 TIPS & BEST PRACTICES

### Prompts Efficaces

**✅ BON** :
```
Crée le Content Type "Article" avec title (string, requis), 
slug (uid auto, unique), content (richtext), coverImage (media), 
author (relation manyToOne vers users). Active permissions 
publiques find et findOne.
```

**❌ MAUVAIS** :
```
Fais-moi un article
```

---

### Contexte Projet

Toujours mentionner :
- ✅ "Pour Confluence Digitale V6.7.2"
- ✅ Version Strapi (v4)
- ✅ Database (PostgreSQL prod / SQLite dev)
- ✅ Environnement (local / staging / production)

---

### Validation Systématique

Après génération code :
1. ✅ Lire code ligne par ligne
2. ✅ Vérifier sécurité (validation inputs, CORS, etc.)
3. ✅ Tester API (Thunder Client / curl)
4. ✅ Vérifier DB (PostgreSQL Client)
5. ✅ Commit avec message descriptif

---

## 🐛 TROUBLESHOOTING WORKFLOW

### Gem's ne répond pas bien

**Cause** : Prompt trop vague

**Solution** : Être plus spécifique avec :
- Champs exacts (nom, type, requis/optionnel)
- Relations précises
- Validations attendues
- Format réponse souhaité

---

### Code Assist génère code obsolète

**Cause** : Instructions non chargées

**Solution** :
1. Vérifier `.vscode/gemini-instructions.md` existe
2. Reload VS Code (⇧⌘P → "Reload Window")
3. Re-tester

---

### API ne fonctionne pas après génération

**Cause** : Permissions non configurées

**Solution** :
1. Strapi Admin → Settings → Roles → Public
2. Activer `find`, `findOne` sur Content Type
3. Restart Strapi

---

## 📊 MÉTRIQUES SUCCÈS

### Productivité

| Tâche | Manuel | Avec Gemini | Gain |
|-------|--------|-------------|------|
| **Content Type** | 20 min | 5 min | 75% |
| **Custom Controller** | 45 min | 10 min | 78% |
| **Config Production** | 60 min | 15 min | 75% |
| **Webhook** | 30 min | 8 min | 73% |

### Qualité

- ✅ Sécurité : Validations automatiques
- ✅ Performance : Optimisations suggérées
- ✅ Standards : Code conforme Strapi v4
- ✅ Documentation : Explications fournies

---

## 📚 RESSOURCES

### Documentation Interne

- **Configuration Gem's** : `/backend-documentation/GEMINI_BACKEND_CONFIGURATION.md`
- **Setup VS Code** : `/backend-documentation/.vscode/README.md`
- **Content Types** : `/backend-documentation/02_CONTENT_TYPES.md`
- **API Endpoints** : `/backend-documentation/03_API_ENDPOINTS.md`

### Documentation Externe

- **Strapi v4** : [docs.strapi.io](https://docs.strapi.io/)
- **Gemini** : [gemini.google.com](https://gemini.google.com)
- **Railway** : [docs.railway.app](https://docs.railway.app/)

---

**🔄 Workflow Gemini Backend Maîtrisé ! Développement Strapi Automatisé ! 💪**

**Prêt à créer un backend professionnel en un temps record ! ⚡**

---

**Projet** : Confluence Digitale V6.7.2  
**Date** : Novembre 2025  
**Version** : 1.0
