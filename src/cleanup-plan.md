# 🗑️ CLEANUP PLAN — Post-Migration Astro

**Projet** : Confluence Digitale  
**Date** : 2025  
**Objectif** : Supprimer tous les fichiers React obsolètes après migration Astro

---

## ✅ PRÉ-REQUIS AVANT CLEANUP

**⚠️ NE PAS SUPPRIMER avant d'avoir :**

1. ✅ Migré TOUTES les pages vers Astro (.astro files)
2. ✅ Copié tous les islands vers `/src/components/islands/`
3. ✅ Copié tous les composants DS vers `/src/components/ui/`
4. ✅ Créé Header.astro et Footer.astro
5. ✅ Créé BaseLayout.astro
6. ✅ Testé chaque page Astro en local
7. ✅ Vérifié que tous les islands se chargent correctement
8. ✅ Vérifié les formulaires (Contact, Réservation, Audit)
9. ✅ Testé les animations motion/react
10. ✅ Build Astro réussi (`npm run build`)

---

## 📂 FICHIERS À SUPPRIMER

### 1️⃣ Pages React (APRÈS conversion Astro)

**Dossier** : `/src/react-pages/`

```bash
# Supprimer TOUT le dossier après migration
rm -rf src/react-pages/
```

**Fichiers concernés** (11 fichiers) :
- ❌ `LandingPage.tsx` → Migré vers `src/pages/index.astro`
- ❌ `OffrePage.tsx` → Migré vers `src/pages/offre.astro`
- ❌ `MethodePage.tsx` → Migré vers `src/pages/methode.astro`
- ❌ `ContactPage.tsx` → Migré vers `src/pages/contact.astro`
- ❌ `ReservationPage.tsx` → Migré vers `src/pages/reservation.astro`
- ❌ `AuditGratuitPage.tsx` → Migré vers `src/pages/audit-gratuit.astro`
- ❌ `EtudesDeCasPage.tsx` → Migré vers `src/pages/etudes-de-cas.astro`
- ❌ `MentionsLegalesPage.tsx` → Migré vers `src/pages/mentions-legales.astro`
- ❌ `PolitiqueConfidentialitePage.tsx` → Migré vers `src/pages/politique-confidentialite.astro`
- ❌ `CGVPage.tsx` → Migré vers `src/pages/cgv.astro`
- ❌ `NotFoundPage.tsx` → Migré vers `src/pages/404.astro`

**Action** :
```bash
# Vérifier d'abord que toutes les pages Astro fonctionnent
# Puis supprimer le dossier complet
rm -rf src/react-pages/
```

---

### 2️⃣ React Islands (APRÈS copie vers Astro)

**Dossier** : `/src/react-islands/`

**⚠️ IMPORTANT** : Copier d'abord vers `/src/components/islands/` avant de supprimer !

```bash
# 1. Copier les islands vers le projet Astro
cp -r src/react-islands/* astro-project/src/components/islands/

# 2. Vérifier que tout fonctionne dans Astro

# 3. Supprimer le dossier source
rm -rf src/react-islands/
```

**Fichiers concernés** (11 fichiers) :
- ✅ `HeroAnimation.tsx` → Copié vers `src/components/islands/`
- ✅ `PainPointsSection.tsx` → Copié
- ✅ `PageSpeedProof.tsx` → Copié
- ✅ `SolutionsSection.tsx` → Copié
- ✅ `TeamBlock.tsx` → Copié
- ✅ `FAQ.tsx` → Copié
- ✅ `ContactForm.tsx` → Copié
- ✅ `ReservationForm.tsx` → Copié
- ✅ `AuditForm.tsx` → Copié
- ✅ `ArcGauge.tsx` → Copié
- ✅ `AuditResults.tsx` → Copié

---

### 3️⃣ Composants UI (APRÈS copie vers Astro)

**Dossier** : `/src/react-components/ui/`

**⚠️ IMPORTANT** : Copier d'abord vers `/src/components/ui/` avant de supprimer !

```bash
# 1. Copier les composants DS vers le projet Astro
cp -r src/react-components/ui/* astro-project/src/components/ui/

# 2. Vérifier que tout fonctionne dans Astro

# 3. Supprimer le dossier source
rm -rf src/react-components/
```

**Fichiers concernés** (16 fichiers) :

**Composants utilisés** (11 composants) :
- ✅ `DSSectionHeader.tsx` → Copié
- ✅ `DSButton.tsx` → Copié
- ✅ `DSCard.tsx` → Copié
- ✅ `DSBadge.tsx` → Copié
- ✅ `DSPanel.tsx` → Copié
- ✅ `DSInput.tsx` → Copié
- ✅ `DSTextarea.tsx` → Copié
- ✅ `DSCheckbox.tsx` → Copié
- ✅ `DSSelect.tsx` → Copié
- ✅ `DSAlert.tsx` → Copié
- ✅ `DSAccordion.tsx` → Copié

**Composants NON utilisés** (5 composants) :
- ⚪ `DSDialog.tsx` → Copier quand même (peut servir plus tard)
- ⚪ `DSDrawer.tsx` → Copier quand même
- ⚪ `DSTabs.tsx` → Copier quand même
- ⚪ `DSSwitch.tsx` → Copier quand même
- ⚪ `DSLabel.tsx` → Copier quand même (utilisé dans inputs)

**Action** : Copier TOUS les composants DS pour garder le Design System complet.

---

### 4️⃣ Fichiers de documentation obsolètes

**⚠️ À CONSERVER** : Ces fichiers documentent la migration, peuvent être archivés

**Fichiers à archiver** (ne pas supprimer immédiatement) :
- `MIGRATION_PROGRESS.md` → Archive
- `MIGRATION_STATUS_INTERIM.md` → Archive
- `MIGRATION_STATUS_FINAL.md` → Archive
- `MIGRATION_COMPLETE_SUMMARY.md` → Archive
- `FINAL_SPRINT_STATUS.md` → Archive
- `MIGRATION_COMPLETE.md` → Archive

**Action** :
```bash
# Créer un dossier archive
mkdir archive-migration-react/

# Déplacer les docs de migration
mv MIGRATION*.md archive-migration-react/
mv FINAL_SPRINT_STATUS.md archive-migration-react/
```

**Fichiers à GARDER** :
- ✅ `astro-migration-plan.json` → Référence pour Astro
- ✅ `astro-file-map.json` → Référence pour Astro
- ✅ `react-islands-plan.json` → Référence pour Astro
- ✅ `cleanup-plan.md` → Ce fichier
- ✅ `README.md` → Documentation principale

---

### 5️⃣ Configuration React obsolète

**Fichiers à supprimer** (selon votre setup) :

**Si vous aviez un projet React standalone** :
```bash
# Supprimer config React si migration complète vers Astro
rm -f vite.config.ts  # Si Vite était utilisé pour React
rm -f tsconfig.json   # Si spécifique au projet React (Astro a le sien)
```

**⚠️ NE PAS SUPPRIMER** :
- `package.json` → Peut contenir des dépendances partagées
- `tailwind.config.js` → Utilisé par Astro aussi
- `.gitignore` → Toujours utile

---

### 6️⃣ Node Modules à nettoyer

**Dépendances à RETIRER du package.json** (après migration Astro) :

```bash
# Dépendances qui ne sont PLUS nécessaires dans Astro
npm uninstall radix-ui  # Déjà supprimé normalement
npm uninstall lucide-react  # Remplacé par inline SVG
npm uninstall cva  # Déjà supprimé normalement
```

**Dépendances à GARDER** :
- ✅ `react` → Utilisé par les islands
- ✅ `react-dom` → Utilisé par les islands
- ✅ `motion` / `motion/react` → Utilisé dans les islands
- ✅ `tailwindcss` → Utilisé par Astro
- ✅ `typescript` → Utilisé par Astro

---

## 📋 CHECKLIST DE CLEANUP

### Phase 1 : Vérification pré-cleanup
- [ ] Toutes les pages Astro fonctionnent en local
- [ ] Tous les islands se chargent correctement
- [ ] Formulaires testés (Contact, Réservation, Audit)
- [ ] Animations motion/react fonctionnent
- [ ] Build Astro réussi (`npm run build`)
- [ ] Tests E2E passent (si applicable)

### Phase 2 : Copie des fichiers
- [ ] Islands copiés vers `/src/components/islands/`
- [ ] Composants DS copiés vers `/src/components/ui/`
- [ ] Imports vérifiés dans les islands
- [ ] Imports vérifiés dans les pages Astro

### Phase 3 : Suppression
- [ ] Supprimer `/src/react-pages/`
- [ ] Supprimer `/src/react-islands/`
- [ ] Supprimer `/src/react-components/`
- [ ] Archiver docs de migration

### Phase 4 : Nettoyage package.json
- [ ] Retirer dépendances obsolètes
- [ ] `npm install` pour nettoyer node_modules
- [ ] Vérifier que le build fonctionne toujours

### Phase 5 : Test final
- [ ] Build Astro (`npm run build`)
- [ ] Preview (`npm run preview`)
- [ ] Tester toutes les pages
- [ ] Tester tous les formulaires
- [ ] Vérifier les animations
- [ ] Tester sur mobile

---

## 🎯 ORDRE DE CLEANUP RECOMMANDÉ

### Étape 1 : Migration complète vers Astro
**Durée** : 8-12 heures

1. Créer projet Astro
2. Copier DS components
3. Copier islands
4. Migrer toutes les pages
5. Créer Header/Footer
6. Tester en local

### Étape 2 : Validation
**Durée** : 2-3 heures

1. Build Astro
2. Tests manuels
3. Vérifications cross-browser
4. Tests mobile

### Étape 3 : Cleanup
**Durée** : 30 minutes

1. ✅ Confirmer que tout fonctionne
2. ✅ Copier islands et components (déjà fait normalement)
3. 🗑️ Supprimer `/src/react-pages/`
4. 🗑️ Supprimer `/src/react-islands/`
5. 🗑️ Supprimer `/src/react-components/`
6. 📦 Archiver docs migration
7. 🧹 Nettoyer package.json
8. ✅ Test final

---

## ⚠️ WARNINGS

### NE JAMAIS supprimer AVANT d'avoir :
1. ❌ Toutes les pages Astro fonctionnelles
2. ❌ Build Astro réussi
3. ❌ Tests passés
4. ❌ Backup Git créé

### GARDER temporairement :
- Les fichiers React TANT que les pages Astro ne sont pas testées
- Les islands TANT qu'ils ne sont pas copiés et testés dans Astro
- Les docs de migration (archiver, ne pas supprimer)

### BACKUP recommandé :
```bash
# Créer une branche Git avant cleanup
git checkout -b pre-cleanup-backup
git add .
git commit -m "Backup avant cleanup React"

# Revenir sur main pour cleanup
git checkout main
```

---

## 📊 RÉSUMÉ DES SUPPRESSIONS

| Catégorie | Dossier | Fichiers | Action |
|-----------|---------|----------|--------|
| Pages React | `/src/react-pages/` | 11 fichiers | ❌ Supprimer après migration |
| Islands React | `/src/react-islands/` | 11 fichiers | ✅ Copier puis supprimer |
| Composants DS | `/src/react-components/ui/` | 16 fichiers | ✅ Copier puis supprimer |
| Docs migration | `/` | 6 fichiers .md | 📦 Archiver |
| Config obsolète | `/` | Variable | ⚠️ Vérifier avant suppression |

**Total** : ~44 fichiers à traiter

---

## 🎉 RÉSULTAT FINAL

Après cleanup, votre projet Astro aura cette structure :

```
astro-project/
├── src/
│   ├── pages/              # 11 pages .astro ✅
│   ├── components/
│   │   ├── islands/        # 11 islands React ✅
│   │   ├── ui/             # 16 composants DS ✅
│   │   ├── Header.astro    ✅
│   │   └── Footer.astro    ✅
│   ├── layouts/
│   │   └── BaseLayout.astro ✅
│   └── styles/
│       └── globals.css     ✅
├── public/
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

**Code propre et optimisé** ✅  
**Zero legacy React** ✅  
**Islands architecture** ✅  
**Design System V6.7.2** ✅

---

**Date de création** : 2025  
**Statut** : Prêt pour cleanup après migration Astro
