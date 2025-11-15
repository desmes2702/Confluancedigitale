# 🗄️ DATABASE POSTGRESQL

**Projet** : Confluence Digitale V6.7.2 - Backend  
**Database** : PostgreSQL 15+  
**Environnements** : Dev (local optionnel) + Production (Railway/Render)

---

## 🎯 POURQUOI POSTGRESQL ?

### PostgreSQL vs SQLite

| Aspect | SQLite | PostgreSQL |
|--------|--------|------------|
| **Performance** | Limitée (fichier) | Excellente (server) |
| **Concurrent Users** | 1 writer | Illimité |
| **Relations** | Basique | Avancées (foreign keys) |
| **Backup** | Copier fichier | Dump SQL + automatisé |
| **Production** | ❌ Non recommandé | ✅ Standard |
| **Dev Local** | ✅ Pratique | ⚠️ Setup requis |

**Recommandation** :
- ✅ **Dev local** : SQLite (simplicité)
- ✅ **Production** : PostgreSQL (performance + fiabilité)

---

## 🏠 POSTGRESQL LOCAL (OPTIONNEL)

### Installation

**macOS (Homebrew)** :
```bash
# Installer PostgreSQL
brew install postgresql@15

# Démarrer service
brew services start postgresql@15

# Vérifier installation
psql --version
# PostgreSQL 15.x
```

**Windows** :
1. Télécharger : [postgresql.org/download/windows](https://www.postgresql.org/download/windows/)
2. Installer via `.exe`
3. Vérifier : `psql --version`

**Linux (Ubuntu/Debian)** :
```bash
# Ajouter repository
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

# Importer clé
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

# Installer
sudo apt-get update
sudo apt-get install postgresql-15

# Démarrer
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Vérifier
psql --version
```

---

### Créer Database Locale

```bash
# Se connecter à PostgreSQL (user postgres par défaut)
psql postgres

# OU si erreur, créer user postgres
createuser -s postgres

# Créer database
CREATE DATABASE confluence_digitale_dev;

# Créer utilisateur Strapi
CREATE USER strapi_dev WITH ENCRYPTED PASSWORD 'dev_password_123';

# Donner permissions
GRANT ALL PRIVILEGES ON DATABASE confluence_digitale_dev TO strapi_dev;

# Donner accès schema public
\c confluence_digitale_dev
GRANT ALL ON SCHEMA public TO strapi_dev;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO strapi_dev;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO strapi_dev;

# Quitter
\q
```

---

### Configuration Strapi Local

**Fichier** : `.env` (projet Strapi)

```bash
# Database PostgreSQL (local)
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=confluence_digitale_dev
DATABASE_USERNAME=strapi_dev
DATABASE_PASSWORD=dev_password_123
DATABASE_SSL=false
```

**Fichier** : `config/database.js`

```javascript
const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'sqlite'),
    connection:
      env('DATABASE_CLIENT') === 'postgres'
        ? {
            host: env('DATABASE_HOST', 'localhost'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'confluence_digitale_dev'),
            user: env('DATABASE_USERNAME', 'strapi_dev'),
            password: env('DATABASE_PASSWORD', 'dev_password_123'),
            ssl: env.bool('DATABASE_SSL', false) && {
              rejectUnauthorized: env.bool(
                'DATABASE_SSL_REJECT_UNAUTHORIZED',
                true
              ),
            },
            schema: env('DATABASE_SCHEMA', 'public'),
          }
        : {
            filename: path.join(
              __dirname,
              '..',
              env('DATABASE_FILENAME', '.tmp/data.db')
            ),
          },
    useNullAsDefault: true,
  },
});
```

---

### Installer Driver PostgreSQL

```bash
# Dans projet Strapi
npm install pg --save
```

---

### Lancer Strapi avec PostgreSQL

```bash
npm run develop
```

**Logs attendus** :
```
[INFO] Database connection established
[INFO] Server running on http://localhost:1337
```

---

## ☁️ POSTGRESQL PRODUCTION

### Railway PostgreSQL

**Railway inclut PostgreSQL intégré** (voir `05_DEPLOYMENT_PRODUCTION.md`).

**Automatique** :
- ✅ PostgreSQL 15+ créé
- ✅ Variable `DATABASE_URL` générée
- ✅ SSL activé
- ✅ Backup automatique

**Connection String** :
```
postgresql://postgres:password@containers-xxx.railway.app:5432/railway
```

---

### Configuration Production

**Variables env (Railway)** :
```bash
DATABASE_CLIENT=postgres
DATABASE_URL=${{Postgres.DATABASE_URL}}
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

**Strapi** utilise automatiquement `DATABASE_URL` (connection string).

---

## 📊 STRUCTURE BASE DE DONNÉES

### Tables Strapi Automatiques

**Strapi crée automatiquement tables** pour :

| Table | Description |
|-------|-------------|
| `strapi_migrations` | Historique migrations |
| `strapi_database_schema` | Schema actuel |
| `strapi_core_store_settings` | Configuration Strapi |
| `admin_users` | Utilisateurs admin panel |
| `admin_roles` | Rôles admin |
| `admin_permissions` | Permissions admin |
| `up_users` | Utilisateurs plugin Users & Permissions |
| `up_roles` | Rôles (Public, Authenticated) |
| `up_permissions` | Permissions API |
| `files` | Media Library (images, fichiers) |

---

### Tables Content Types

**Créées automatiquement** selon Content Types définis :

| Content Type | Table | Exemple |
|--------------|-------|---------|
| **Page** | `pages` | id, title, slug, content, published_at |
| **Article** | `articles` | id, title, slug, content, cover_image, author_id |
| **Service** | `services` | id, name, slug, description, price |
| **Testimonial** | `testimonials` | id, client_name, company, content, rating |
| **Team Member** | `team_members` | id, name, role, bio, photo |
| **FAQ** | `faqs` | id, question, answer, category |
| **Contact** | `contacts` | id, name, email, message, status |

---

### Relations

**Tables de liaison** pour relations many-to-many :

**Exemple** : Article ↔ Categories (si many-to-many) :
- Table : `articles_categories_links`
- Colonnes : `article_id`, `category_id`

---

### Indexes Automatiques

**Strapi crée automatiquement indexes** :
- Primary keys (`id`)
- Foreign keys (relations)
- Champs `slug` (unique)
- `published_at`

---

## 🔍 REQUÊTES SQL UTILES

### Se Connecter à Database

**Local** :
```bash
psql -h localhost -U strapi_dev -d confluence_digitale_dev
```

**Railway** (via CLI) :
```bash
# Installer Railway CLI
npm install -g @railway/cli

# Login
railway login

# Connect
railway link
railway connect Postgres
```

---

### Voir Tables

```sql
-- Liste toutes les tables
\dt

-- Résultat :
-- pages
-- articles
-- services
-- testimonials
-- team_members
-- faqs
-- contacts
-- files
-- up_users
-- ...
```

---

### Structure Table

```sql
-- Voir structure table
\d articles

-- OU
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'articles';
```

---

### Compter Entrées

```sql
-- Compter articles
SELECT COUNT(*) FROM articles;

-- Compter articles publiés
SELECT COUNT(*) FROM articles WHERE published_at IS NOT NULL;
```

---

### Voir Données

```sql
-- Voir derniers 10 articles
SELECT id, title, slug, published_at
FROM articles
ORDER BY published_at DESC
LIMIT 10;
```

---

### Relations

```sql
-- Articles avec auteur (JOIN)
SELECT 
  a.id,
  a.title,
  a.slug,
  u.username AS author
FROM articles a
LEFT JOIN up_users u ON a.author_id = u.id
WHERE a.published_at IS NOT NULL
ORDER BY a.published_at DESC
LIMIT 10;
```

---

## 🔧 MAINTENANCE

### Backup Database

**Local** :
```bash
# Créer dump SQL
pg_dump -h localhost -U strapi_dev -d confluence_digitale_dev > backup_$(date +%Y%m%d_%H%M%S).sql

# Résultat : backup_20251115_143022.sql
```

**Restaurer** :
```bash
psql -h localhost -U strapi_dev -d confluence_digitale_dev < backup_20251115_143022.sql
```

---

**Railway** :

1. **Via UI** :
   - PostgreSQL service → **Data** → **Backups**
   - Railway fait backups automatiques quotidiens
   - Cliquer **Create Backup** (manuel)

2. **Via CLI** :
```bash
# Export database
railway run pg_dump $DATABASE_URL > backup.sql

# Restore
railway run psql $DATABASE_URL < backup.sql
```

---

### Optimisation

**Analyser performance** :
```sql
-- Tables les plus volumineuses
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

**Vacuum** (nettoyage) :
```sql
-- Nettoyer et analyser
VACUUM ANALYZE;

-- Nettoyer table spécifique
VACUUM ANALYZE articles;
```

---

### Indexes Personnalisés

**Améliorer performance requêtes** :

```sql
-- Index sur slug (si pas déjà créé)
CREATE INDEX idx_articles_slug ON articles(slug);

-- Index sur category
CREATE INDEX idx_articles_category ON articles(category);

-- Index composite (published_at + category)
CREATE INDEX idx_articles_published_category ON articles(published_at, category);
```

**Vérifier indexes** :
```sql
SELECT indexname, indexdef
FROM pg_indexes
WHERE tablename = 'articles';
```

---

## 🔄 MIGRATIONS

### Migrations Automatiques Strapi

**Strapi gère migrations automatiquement** :
- Changement Content Type → Strapi MAJ table
- Nouveau champ → Strapi ajoute colonne
- Suppression champ → Strapi supprime colonne

**Table** : `strapi_migrations`

---

### Migration Manuelle (si besoin)

**Exemple** : Ajouter colonne `views` à `articles` :

```sql
ALTER TABLE articles ADD COLUMN views INTEGER DEFAULT 0;
```

**⚠️ Attention** : Faire via Strapi Content Type Builder recommandé.

---

### Migration entre Environnements

**Dev → Production** :

1. **Exporter Content** (via Admin Panel) :
   - Settings → Transfer Tokens → Create
   - Utiliser Strapi CLI :
   ```bash
   strapi transfer --to https://api.confluence-digitale.fr
   ```

2. **OU Export/Import manuel** :
   - Exporter JSON (Admin Panel)
   - Importer dans Production

---

## 🐛 TROUBLESHOOTING

### Erreur : "Connection refused"

**Cause** : PostgreSQL non démarré

**Solution** :
```bash
# macOS
brew services start postgresql@15

# Linux
sudo systemctl start postgresql

# Vérifier
psql --version
```

---

### Erreur : "Password authentication failed"

**Cause** : Credentials incorrects

**Solution** :
1. Vérifier `.env` : `DATABASE_USERNAME`, `DATABASE_PASSWORD`
2. Recréer user PostgreSQL :
```sql
DROP USER IF EXISTS strapi_dev;
CREATE USER strapi_dev WITH ENCRYPTED PASSWORD 'dev_password_123';
GRANT ALL PRIVILEGES ON DATABASE confluence_digitale_dev TO strapi_dev;
```

---

### Erreur : "Database does not exist"

**Cause** : Database non créée

**Solution** :
```bash
createdb -U postgres confluence_digitale_dev
```

---

### Erreur : "SSL connection failed" (Production)

**Cause** : SSL mal configuré

**Solution** :
```bash
# Variables env (Railway/Render)
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
```

---

### Erreur : "Too many connections"

**Cause** : Limite connexions atteinte

**Solution** :
```sql
-- Voir connexions actives
SELECT COUNT(*) FROM pg_stat_activity;

-- Tuer connexions inactives
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE state = 'idle'
AND state_change < NOW() - INTERVAL '10 minutes';
```

---

## 📊 MONITORING

### Logs PostgreSQL

**Local** :
```bash
# macOS
tail -f /usr/local/var/log/postgresql@15.log

# Linux
sudo tail -f /var/log/postgresql/postgresql-15-main.log
```

---

### Performance

**Requêtes lentes** :
```sql
-- Activer logging requêtes lentes (> 200ms)
ALTER DATABASE confluence_digitale_dev
SET log_min_duration_statement = 200;

-- Voir requêtes actives
SELECT pid, age(clock_timestamp(), query_start), usename, query
FROM pg_stat_activity
WHERE query != '<IDLE>' AND query NOT ILIKE '%pg_stat_activity%'
ORDER BY query_start DESC;
```

---

## ✅ CHECKLIST

### Installation Locale

- [ ] PostgreSQL installé (version 15+)
- [ ] Service PostgreSQL démarré
- [ ] Database `confluence_digitale_dev` créée
- [ ] User `strapi_dev` créé avec permissions
- [ ] Driver `pg` installé (`npm install pg`)
- [ ] `.env` configuré (DATABASE_CLIENT=postgres, etc.)
- [ ] Strapi démarre sans erreur

### Production

- [ ] PostgreSQL Railway/Render créé
- [ ] Variable `DATABASE_URL` configurée
- [ ] SSL activé (`DATABASE_SSL=true`)
- [ ] Connexion réussie (logs Strapi OK)
- [ ] Backup automatique activé

### Maintenance

- [ ] Backup manuel testé
- [ ] Restore testé
- [ ] Indexes créés (champs recherchés)
- [ ] VACUUM exécuté (si gros volume)

---

**🗄️ Database PostgreSQL Configurée ! Backend Prêt pour Production ! 💪**

---

**Projet** : Confluence Digitale V6.7.2  
**Date** : Novembre 2025  
**Version** : 1.0
