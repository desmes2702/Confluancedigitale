# 🛠️ MAINTENANCE & BACKUP - STRAPI PRODUCTION

**Projet** : Confluence Digitale V6.7.2 - Backend  
**Objectif** : Assurer disponibilité, sécurité et récupération données  
**Fréquence** : Quotidien (backup) + Hebdomadaire (maintenance)

---

## 🎯 VUE D'ENSEMBLE

### Stratégie 3-2-1

**3 copies** : Production + 2 backups  
**2 supports** : PostgreSQL + S3/Cloudinary  
**1 hors-site** : Cloud externe (AWS S3, Backblaze)

```
┌────────────────────────────────────────────────────┐
│  PRODUCTION (Railway)                              │
│  PostgreSQL Database + Media Files                 │
└─────────────┬──────────────────────────────────────┘
              │
              │ Backup automatique quotidien
              ▼
┌────────────────────────────────────────────────────┐
│  BACKUP 1 : Railway Snapshots (7 jours)           │
│  Rotation automatique                              │
└────────────────────────────────────────────────────┘
              │
              │ Backup externe quotidien
              ▼
┌────────────────────────────────────────────────────┐
│  BACKUP 2 : AWS S3 / Backblaze (30 jours)         │
│  Stockage long terme                               │
└────────────────────────────────────────────────────┘
```

---

## 💾 PARTIE 1 : BACKUP DATABASE

### Méthode 1 : Railway Snapshots (Automatique)

**Avantages** :
- ✅ Automatique (quotidien)
- ✅ 7 jours rétention
- ✅ Restauration 1-click

**Configuration Railway** :

1. **Dashboard Railway** → Projet → **Database**
2. **Backups** → **Enable Automated Backups**
3. **Schedule** : Daily (3:00 AM UTC)
4. **Retention** : 7 days

**Restaurer depuis Railway** :
1. **Backups** → Sélectionner backup
2. **Restore** → Confirmer
3. ⚠️ Arrêt temporaire service (2-5 min)

---

### Méthode 2 : pg_dump Manuel (PostgreSQL)

**Backup manuel complet** :

```bash
# Connexion PostgreSQL (depuis .env)
DATABASE_URL="postgresql://user:password@host.railway.app:5432/railway"

# Backup complet (.sql)
pg_dump -Fc \
  --no-acl \
  --no-owner \
  -h host.railway.app \
  -U user \
  -d railway \
  -f backup_$(date +%Y%m%d_%H%M%S).dump

# Backup SQL lisible (.sql)
pg_dump \
  -h host.railway.app \
  -U user \
  -d railway \
  -f backup_$(date +%Y%m%d_%H%M%S).sql
```

**Sortie** :
```
backup_20251115_100000.dump (format binaire, plus petit)
backup_20251115_100000.sql (format texte, lisible)
```

---

### Méthode 3 : Script Automatique (Cron)

**Script bash** : `backup-database.sh`

```bash
#!/bin/bash

# Configuration
DB_HOST="host.railway.app"
DB_PORT="5432"
DB_NAME="railway"
DB_USER="postgres"
DB_PASSWORD="your_password_here"
BACKUP_DIR="/backups/database"
RETENTION_DAYS=30

# Créer dossier backup
mkdir -p $BACKUP_DIR

# Nom fichier avec date
BACKUP_FILE="confluence_backup_$(date +%Y%m%d_%H%M%S).dump"

# Export password (évite prompt)
export PGPASSWORD=$DB_PASSWORD

# Backup
pg_dump -Fc \
  --no-acl \
  --no-owner \
  -h $DB_HOST \
  -p $DB_PORT \
  -U $DB_USER \
  -d $DB_NAME \
  -f "$BACKUP_DIR/$BACKUP_FILE"

# Vérifier succès
if [ $? -eq 0 ]; then
  echo "✅ Backup réussi : $BACKUP_FILE"
  
  # Uploader vers S3 (optionnel)
  aws s3 cp "$BACKUP_DIR/$BACKUP_FILE" s3://confluence-backups/database/
  
  # Supprimer backups > 30 jours (local)
  find $BACKUP_DIR -name "*.dump" -mtime +$RETENTION_DAYS -delete
  
else
  echo "❌ Backup échoué"
  exit 1
fi

# Nettoyer variable
unset PGPASSWORD
```

**Rendre exécutable** :
```bash
chmod +x backup-database.sh
```

---

### Automatisation Cron (Linux/macOS)

**Ouvrir crontab** :
```bash
crontab -e
```

**Ajouter ligne** (backup quotidien 3h du matin) :
```cron
0 3 * * * /path/to/backup-database.sh >> /var/log/backup-db.log 2>&1
```

**Vérifier cron actif** :
```bash
crontab -l
```

---

### Restauration Database

**Depuis fichier .dump** :

```bash
# Méthode 1 : Restauration complète (écrase DB)
pg_restore -Fc \
  --clean \
  --no-acl \
  --no-owner \
  -h host.railway.app \
  -U user \
  -d railway \
  backup_20251115_100000.dump

# Méthode 2 : Restauration sélective (table spécifique)
pg_restore -Fc \
  --table=articles \
  -h host.railway.app \
  -U user \
  -d railway \
  backup_20251115_100000.dump
```

**Depuis fichier .sql** :

```bash
psql -h host.railway.app \
  -U user \
  -d railway \
  -f backup_20251115_100000.sql
```

---

## 📂 PARTIE 2 : BACKUP MEDIA FILES

### Strapi Upload Provider (Cloudinary)

**Avantages** :
- ✅ CDN intégré
- ✅ Backup automatique (Cloudinary)
- ✅ Pas besoin backup manuel

**Configuration** : Voir `07_MEDIA_CLOUDINARY.md`

---

### Upload Local (Alternative)

Si upload local (`public/uploads/`) :

**Script backup** : `backup-uploads.sh`

```bash
#!/bin/bash

UPLOADS_DIR="/app/public/uploads"
BACKUP_DIR="/backups/uploads"
BACKUP_FILE="uploads_$(date +%Y%m%d_%H%M%S).tar.gz"

# Créer archive
tar -czf "$BACKUP_DIR/$BACKUP_FILE" -C /app/public uploads/

# Upload S3
aws s3 cp "$BACKUP_DIR/$BACKUP_FILE" s3://confluence-backups/uploads/

# Nettoyer anciens backups
find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete

echo "✅ Uploads backup : $BACKUP_FILE"
```

**Cron** (quotidien 4h) :
```cron
0 4 * * * /path/to/backup-uploads.sh >> /var/log/backup-uploads.log 2>&1
```

---

### Restauration Media Files

```bash
# Télécharger backup S3
aws s3 cp s3://confluence-backups/uploads/uploads_20251115.tar.gz .

# Extraire
tar -xzf uploads_20251115.tar.gz -C /app/public/

# Vérifier permissions
chown -R strapi:strapi /app/public/uploads
chmod -R 755 /app/public/uploads
```

---

## 🔄 PARTIE 3 : BACKUP COMPLET (DB + Uploads)

### Script Unified Backup

**Script** : `backup-all.sh`

```bash
#!/bin/bash

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_ROOT="/backups"
BACKUP_DIR="$BACKUP_ROOT/full_$DATE"

# Créer dossier backup
mkdir -p $BACKUP_DIR

echo "🚀 Starting full backup: $DATE"

# 1. Backup Database
echo "📊 Backing up database..."
pg_dump -Fc \
  --no-acl \
  --no-owner \
  -h $DB_HOST \
  -U $DB_USER \
  -d $DB_NAME \
  -f "$BACKUP_DIR/database.dump"

# 2. Backup Uploads
echo "📂 Backing up uploads..."
tar -czf "$BACKUP_DIR/uploads.tar.gz" -C /app/public uploads/

# 3. Backup Config (.env, etc.)
echo "⚙️ Backing up config..."
cp /app/.env "$BACKUP_DIR/env.backup"
cp -r /app/config "$BACKUP_DIR/config"

# 4. Créer archive complète
echo "📦 Creating full archive..."
cd $BACKUP_ROOT
tar -czf "full_backup_$DATE.tar.gz" "full_$DATE/"

# 5. Upload S3
echo "☁️ Uploading to S3..."
aws s3 cp "full_backup_$DATE.tar.gz" s3://confluence-backups/full/

# 6. Nettoyer local (garder 7 jours)
find $BACKUP_ROOT -name "full_backup_*.tar.gz" -mtime +7 -delete
find $BACKUP_ROOT -type d -name "full_*" -mtime +7 -exec rm -rf {} +

echo "✅ Full backup completed: full_backup_$DATE.tar.gz"
```

**Cron** (hebdomadaire dimanche 2h) :
```cron
0 2 * * 0 /path/to/backup-all.sh >> /var/log/backup-all.log 2>&1
```

---

## 🗂️ PARTIE 4 : STOCKAGE CLOUD (AWS S3)

### Configuration AWS S3

**Créer bucket** :

```bash
# Installer AWS CLI
npm install -g aws-cli

# Configurer credentials
aws configure
# AWS Access Key ID: YOUR_KEY
# AWS Secret Access Key: YOUR_SECRET
# Default region: eu-west-3 (Paris)

# Créer bucket
aws s3 mb s3://confluence-backups --region eu-west-3

# Activer versioning (recommandé)
aws s3api put-bucket-versioning \
  --bucket confluence-backups \
  --versioning-configuration Status=Enabled

# Lifecycle policy (30 jours → Glacier, 90 jours → Suppression)
cat > lifecycle.json <<EOF
{
  "Rules": [
    {
      "Id": "Archive old backups",
      "Status": "Enabled",
      "Transitions": [
        {
          "Days": 30,
          "StorageClass": "GLACIER"
        }
      ],
      "Expiration": {
        "Days": 90
      }
    }
  ]
}
EOF

aws s3api put-bucket-lifecycle-configuration \
  --bucket confluence-backups \
  --lifecycle-configuration file://lifecycle.json
```

---

### Alternative : Backblaze B2 (Plus Économique)

**Avantages** :
- ✅ 10 GB gratuits
- ✅ ~$5/TB/mois (vs $23 S3)
- ✅ API compatible S3

**Installation** :

```bash
# Installer B2 CLI
pip install b2

# Authentifier
b2 authorize-account YOUR_KEY_ID YOUR_APPLICATION_KEY

# Créer bucket
b2 create-bucket confluence-backups allPrivate

# Upload
b2 upload-file confluence-backups backup_20251115.tar.gz backup_20251115.tar.gz
```

---

## 🔍 PARTIE 5 : MONITORING & ALERTES

### Script Monitoring Backup

**Script** : `check-backups.sh`

```bash
#!/bin/bash

# Configuration
MAX_AGE_HOURS=26  # Alerte si dernier backup > 26h
BACKUP_DIR="/backups"
ALERT_EMAIL="admin@confluence-digitale.fr"

# Trouver dernier backup
LATEST_BACKUP=$(ls -t $BACKUP_DIR/*.tar.gz | head -1)

if [ -z "$LATEST_BACKUP" ]; then
  echo "❌ No backup found!"
  # Envoyer email alerte
  echo "No backup found in $BACKUP_DIR" | mail -s "⚠️ BACKUP ALERT" $ALERT_EMAIL
  exit 1
fi

# Vérifier âge
BACKUP_AGE=$(($(date +%s) - $(stat -c %Y "$LATEST_BACKUP")))
BACKUP_AGE_HOURS=$((BACKUP_AGE / 3600))

if [ $BACKUP_AGE_HOURS -gt $MAX_AGE_HOURS ]; then
  echo "⚠️ Backup too old: ${BACKUP_AGE_HOURS}h"
  echo "Last backup: $LATEST_BACKUP (${BACKUP_AGE_HOURS}h ago)" | \
    mail -s "⚠️ BACKUP ALERT" $ALERT_EMAIL
  exit 1
else
  echo "✅ Backup OK: ${BACKUP_AGE_HOURS}h ago"
fi
```

**Cron** (vérification quotidienne 9h) :
```cron
0 9 * * * /path/to/check-backups.sh >> /var/log/check-backups.log 2>&1
```

---

### Notifications Slack (Alternative)

**Script** : `notify-slack.sh`

```bash
#!/bin/bash

SLACK_WEBHOOK="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"
MESSAGE="$1"

curl -X POST $SLACK_WEBHOOK \
  -H 'Content-Type: application/json' \
  -d "{\"text\":\"$MESSAGE\"}"
```

**Usage dans backup script** :
```bash
# À la fin du backup
if [ $? -eq 0 ]; then
  /path/to/notify-slack.sh "✅ Backup réussi : full_backup_$DATE.tar.gz"
else
  /path/to/notify-slack.sh "❌ Backup échoué !"
fi
```

---

## 🛠️ PARTIE 6 : MAINTENANCE STRAPI

### Tâches Hebdomadaires

**1. Vérifier Logs Erreurs**

```bash
# Railway logs (30 dernières minutes)
railway logs --tail 500

# Grep erreurs
railway logs | grep -i "error"
railway logs | grep -i "failed"
```

---

**2. Nettoyer Sessions Expirées**

**Script SQL** :

```sql
-- Connexion DB
psql $DATABASE_URL

-- Supprimer sessions > 7 jours
DELETE FROM strapi_sessions 
WHERE expires_at < NOW() - INTERVAL '7 days';

-- Supprimer tokens API expirés
DELETE FROM strapi_api_tokens 
WHERE expires_at < NOW() AND expires_at IS NOT NULL;
```

---

**3. Optimiser Database (VACUUM)**

```sql
-- Analyser tables (stats)
ANALYZE;

-- Nettoyer espace (VACUUM)
VACUUM FULL;

-- Reindex (améliore performances)
REINDEX DATABASE railway;
```

**OU via script** :

```bash
psql $DATABASE_URL -c "VACUUM FULL; ANALYZE; REINDEX DATABASE railway;"
```

---

**4. Vérifier Espace Disque**

**Railway** :

```bash
# Vérifier usage disque
railway run df -h

# Vérifier taille DB
psql $DATABASE_URL -c "SELECT pg_size_pretty(pg_database_size('railway'));"
```

**Alertes si** :
- ❌ DB > 80% quota (Railway Free: 512MB)
- ❌ Uploads > 5GB

---

**5. Update Strapi (Mensuel)**

```bash
# Vérifier version actuelle
npm list @strapi/strapi

# Vérifier updates disponibles
npm outdated @strapi/strapi

# Backup AVANT update
./backup-all.sh

# Update Strapi
npm update @strapi/strapi@latest

# Rebuild admin
npm run build

# Tester local
npm run develop

# Si OK → Commit & Deploy
git add package.json package-lock.json
git commit -m "chore: update Strapi to vX.Y.Z"
git push
```

---

### Tâches Mensuelles

**1. Audit Sécurité**

```bash
# Vérifier vulnérabilités npm
npm audit

# Fix automatique (si possible)
npm audit fix

# Si vulnérabilités critiques
npm audit fix --force
```

---

**2. Nettoyer Media Inutilisés**

**Plugin Strapi** : `strapi-plugin-unused-uploads`

```bash
npm install strapi-plugin-unused-uploads

# Admin Panel → Plugins → Unused Uploads
# → Scan → Delete unused
```

---

**3. Analyser Performances**

**Queries lentes PostgreSQL** :

```sql
-- Top 10 queries lentes
SELECT 
  query, 
  calls, 
  total_time, 
  mean_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;
```

**Strapi Admin** :
- Settings → Performance
- Vérifier API response times

---

## 🚨 PARTIE 7 : PLAN DE REPRISE (DISASTER RECOVERY)

### Scénario 1 : Corruption Database

**Symptômes** :
- ❌ Strapi ne démarre plus
- ❌ Erreurs "relation does not exist"

**Solution** :

```bash
# 1. Arrêter Strapi
railway down

# 2. Restaurer backup le plus récent
pg_restore -Fc \
  --clean \
  -h host.railway.app \
  -U user \
  -d railway \
  backup_latest.dump

# 3. Redémarrer
railway up

# 4. Vérifier
curl https://api.confluence-digitale.fr/_health
```

---

### Scénario 2 : Railway Down

**Symptômes** :
- ❌ API inaccessible (503)
- ❌ Railway Dashboard erreur

**Solution** :

**Plan B : Render (backup hosting)** :

```bash
# 1. Créer nouveau service Render
# Dashboard Render → New → Web Service

# 2. Connecter repo Git
# → Sélectionner branch main

# 3. Variables env (copier depuis Railway)
DATABASE_URL=...
APP_KEYS=...
# etc.

# 4. Deploy
# Render build automatiquement

# 5. Restaurer DB depuis backup
pg_restore -Fc \
  --clean \
  -h render-postgres-host \
  -U user \
  -d db \
  backup_latest.dump

# 6. Update DNS
# Changer api.confluence-digitale.fr → Render URL

# 7. Update frontend .env
PUBLIC_STRAPI_URL=https://new-api-url.onrender.com
```

**Temps estimé** : 30-60 minutes

---

### Scénario 3 : Hack / Données Compromises

**Symptômes** :
- ❌ Contenu modifié/supprimé
- ❌ Nouveaux admins non autorisés

**Solution** :

```bash
# 1. IMMÉDIAT : Désactiver API publique
# Railway → Service → Networking → Private

# 2. Changer tous secrets (.env)
npm run strapi generate:keys
# Copier dans Railway variables env

# 3. Révoquer tous tokens API
# Admin Panel → Settings → API Tokens → Delete all

# 4. Restaurer DB depuis backup AVANT hack
# Vérifier date backup (ex: 2 jours avant)
pg_restore -Fc backup_20251113.dump

# 5. Audit logs Strapi
# Vérifier qui a fait quoi
SELECT * FROM strapi_audit_logs 
WHERE created_at > '2025-11-13';

# 6. Renforcer sécurité
# - MFA admin
# - Rate limiting strict
# - CORS strict
# - Firewall IP whitelist

# 7. Réactiver API
# Railway → Networking → Public
```

---

## 📋 CHECKLIST MAINTENANCE

### Quotidien (Automatique)

- [ ] Backup database (3h)
- [ ] Backup uploads (4h si local)
- [ ] Upload S3/Backblaze
- [ ] Vérification backup (9h)
- [ ] Logs erreurs (scan automatique)

### Hebdomadaire (Dimanche)

- [ ] Backup complet (DB + Uploads + Config)
- [ ] VACUUM database
- [ ] Nettoyer sessions expirées
- [ ] Vérifier espace disque
- [ ] Review logs erreurs manuellement

### Mensuel

- [ ] Update Strapi (si nouvelle version stable)
- [ ] npm audit (vulnérabilités)
- [ ] Nettoyer media inutilisés
- [ ] Analyser performances (queries lentes)
- [ ] Tester restoration backup (drill)

### Trimestriel

- [ ] Audit sécurité complet
- [ ] Review plan disaster recovery
- [ ] Test backup complet → restoration
- [ ] Optimisation database (indexes)
- [ ] Review permissions utilisateurs

---

## 📊 MÉTRIQUES À SUIVRE

| Métrique | Outil | Alerte si... |
|----------|-------|--------------|
| **Backup Age** | Script monitoring | > 26h |
| **DB Size** | PostgreSQL | > 80% quota |
| **API Uptime** | UptimeRobot | < 99.5% |
| **Response Time** | Railway Metrics | > 500ms |
| **Error Rate** | Logs | > 1% |
| **Failed Logins** | Strapi Admin | > 5/jour |

---

## 🔗 RESSOURCES

### Outils Recommandés

- **Backup** : AWS S3, Backblaze B2
- **Monitoring** : UptimeRobot, Sentry
- **Logs** : Papertrail, Loggly
- **Alertes** : Slack, Email, PagerDuty

### Documentation

- **PostgreSQL Backup** : https://www.postgresql.org/docs/current/backup.html
- **Railway Docs** : https://docs.railway.app/
- **Strapi Backup** : https://docs.strapi.io/dev-docs/deployment

---

**🛠️ Maintenance & Backup Configurés ! Backend Sécurisé ! 💪**

---

**Projet** : Confluence Digitale V6.7.2  
**Date** : Novembre 2025  
**Version** : 1.0
