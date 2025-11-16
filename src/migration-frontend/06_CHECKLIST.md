# ✅ CHECKLIST - VALIDATION COMPLÈTE

**Objectif** : Valider chaque composant/page avant production  
**Format** : Checklists par niveau

---

## 📋 CHECKLIST #1 : COMPOSANT REACT

### Avant de Valider un Composant

- [ ] **Types TypeScript**
  - [ ] Interface/Type défini pour les props
  - [ ] Pas de `any` dans le code
  - [ ] Valeurs par défaut pour props optionnelles

- [ ] **Design System V6.7.2**
  - [ ] Palette de couleurs respectée
  - [ ] Titres en Playfair Display Regular (jamais bold)
  - [ ] Ombres en inline `style={{ boxShadow }}`
  - [ ] Espacement `space-y-6` pour formulaires
  - [ ] Responsive `px-4 sm:px-6 lg:px-8`

- [ ] **Performance**
  - [ ] Pas de re-render inutiles
  - [ ] `useMemo`/`useCallback` si nécessaire
  - [ ] Images optimisées (WebP)
  - [ ] Lazy loading images

- [ ] **Accessibilité**
  - [ ] Toutes les images ont un `alt`
  - [ ] Boutons/liens ont un label clair
  - [ ] Contraste texte/background > 4.5:1
  - [ ] Navigation au clavier fonctionnelle

- [ ] **Code Quality**
  - [ ] Pas de `console.log` ou `debugger`
  - [ ] Code commenté si complexe
  - [ ] Nommage explicite des variables
  - [ ] Aucune erreur ESLint

---

## 📄 CHECKLIST #2 : PAGE ASTRO

### Avant de Valider une Page

- [ ] **Structure**
  - [ ] Utilise `BaseLayout.astro`
  - [ ] Header avec `client:load`
  - [ ] Footer avec `client:visible`
  - [ ] Hero padding `pt-28 lg:pt-32`

- [ ] **SEO**
  - [ ] Title unique (< 60 caractères)
  - [ ] Description unique (150-160 caractères)
  - [ ] Canonical URL définie
  - [ ] OG Image définie
  - [ ] H1 unique et pertinent
  - [ ] Structure H1 → H2 → H3 logique

- [ ] **Performance**
  - [ ] Hydratation minimale (`client:visible` préféré)
  - [ ] Images optimisées
  - [ ] Pas de JS inutile
  - [ ] CSS minimal

- [ ] **Responsive**
  - [ ] Testé sur iPhone SE (375px)
  - [ ] Testé sur iPad (768px)
  - [ ] Testé sur Desktop (1280px)
  - [ ] Pas de scroll horizontal
  - [ ] Texte lisible sur tous supports

- [ ] **Contenu**
  - [ ] Pas de Lorem Ipsum
  - [ ] Pas de placeholder non remplacé
  - [ ] Liens fonctionnels
  - [ ] CTA visible et clair

---

## 🎨 CHECKLIST #3 : DESIGN SYSTEM

### Validation Design System V6.7.2

- [ ] **Couleurs**
  - [ ] Background : `#F9FAFB` (Gris Clair)
  - [ ] Texte : `#1A1A1A` (Noir Mat)
  - [ ] Premium : `#D1A65E` (Or/Cuivre - Antoine)
  - [ ] CTA : `#10b981` (Vert - Pascal)
  - [ ] Contractuel : `#A32E3A` (Rouge Bordeaux - Laly)
  - [ ] Aucune couleur custom hors palette

- [ ] **Typographie**
  - [ ] Titres : Playfair Display Regular
  - [ ] Body : Inter Regular
  - [ ] Jamais de `font-bold` sur Playfair
  - [ ] Tailles responsive (`text-4xl lg:text-6xl`)

- [ ] **Espacement**
  - [ ] Hero : `pt-28 lg:pt-32`
  - [ ] Sections : `py-16 lg:py-24`
  - [ ] Padding horizontal : `px-4 sm:px-6 lg:px-8`
  - [ ] Formulaires : `space-y-6`
  - [ ] Conteneur : `max-w-7xl mx-auto`

- [ ] **Effets**
  - [ ] Ombres inline (`style={{ boxShadow }}`)
  - [ ] Transitions : `transition-all duration-300`
  - [ ] Hover states définis
  - [ ] Focus visible

---

## 📝 CHECKLIST #4 : FORMULAIRE

### Validation Formulaire

- [ ] **Structure**
  - [ ] `space-y-6` entre champs
  - [ ] Labels explicites avec `*` si requis
  - [ ] Placeholders informatifs
  - [ ] CTA en bas du formulaire

- [ ] **Validation**
  - [ ] États `touched` pour chaque champ
  - [ ] Validation temps réel
  - [ ] Messages d'erreur clairs
  - [ ] Bordure rouge si invalide (`border-red-500`)
  - [ ] CTA désactivé si formulaire invalide

- [ ] **UX**
  - [ ] Focus automatique sur premier champ
  - [ ] Enter pour submit
  - [ ] Loading state pendant submit
  - [ ] Message de succès après submit
  - [ ] Reset formulaire après succès

- [ ] **Accessibilité**
  - [ ] Labels associés aux inputs
  - [ ] Erreurs annoncées (ARIA)
  - [ ] Navigation clavier
  - [ ] Messages d'erreur avec rôle `alert`

---

## 🚀 CHECKLIST #5 : PERFORMANCE (LIGHTHOUSE)

### Scores à Atteindre

- [ ] **Performance > 90**
  - [ ] First Contentful Paint < 1.8s
  - [ ] Largest Contentful Paint < 2.5s
  - [ ] Total Blocking Time < 200ms
  - [ ] Cumulative Layout Shift < 0.1
  - [ ] Speed Index < 3.4s

- [ ] **Accessibilité > 90**
  - [ ] Contraste texte suffisant
  - [ ] Alt text sur images
  - [ ] Labels sur formulaires
  - [ ] Navigation clavier

- [ ] **Best Practices > 90**
  - [ ] HTTPS activé
  - [ ] Pas d'erreurs console
  - [ ] Images format moderne (WebP)
  - [ ] Pas de librairies obsolètes

- [ ] **SEO > 90**
  - [ ] Meta description présente
  - [ ] Title présent et unique
  - [ ] Sitemap.xml généré
  - [ ] Robots.txt configuré
  - [ ] Liens descriptifs

### Optimisations

- [ ] **Images**
  - [ ] Format WebP
  - [ ] Lazy loading (`loading="lazy"`)
  - [ ] Dimensions explicites (width/height)
  - [ ] Compression optimale

- [ ] **JavaScript**
  - [ ] Hydratation minimale
  - [ ] Code splitting automatique (Astro)
  - [ ] Pas de JS inutilisé

- [ ] **CSS**
  - [ ] Tailwind JIT (CSS minimal)
  - [ ] Pas de CSS inline excessif
  - [ ] Critical CSS inline

---

## 🔍 CHECKLIST #6 : ACCESSIBILITÉ (WCAG AA)

### Critères WCAG 2.1 Niveau AA

- [ ] **Perceptible**
  - [ ] Alternatives textuelles (alt, aria-label)
  - [ ] Contraste > 4.5:1 (texte normal)
  - [ ] Contraste > 3:1 (texte large)
  - [ ] Pas de contenu uniquement visuel

- [ ] **Utilisable**
  - [ ] Navigation clavier complète
  - [ ] Focus visible
  - [ ] Pas de piège clavier
  - [ ] Temps suffisant pour lire

- [ ] **Compréhensible**
  - [ ] Langue de la page définie (`lang="fr"`)
  - [ ] Labels clairs
  - [ ] Messages d'erreur explicites
  - [ ] Navigation cohérente

- [ ] **Robuste**
  - [ ] HTML valide
  - [ ] ARIA utilisé correctement
  - [ ] Compatible lecteurs d'écran

### Tests Manuels

- [ ] **Navigation Clavier**
  - [ ] Tab : naviguer vers l'avant
  - [ ] Shift+Tab : naviguer vers l'arrière
  - [ ] Enter : activer liens/boutons
  - [ ] Escape : fermer modales

- [ ] **Lecteur d'Écran** (NVDA/JAWS/VoiceOver)
  - [ ] Titres annoncés
  - [ ] Liens descriptifs
  - [ ] Formulaires compréhensibles
  - [ ] Images décrites

---

## 📱 CHECKLIST #7 : RESPONSIVE

### Breakpoints à Tester

- [ ] **Mobile (375px - iPhone SE)**
  - [ ] Pas de scroll horizontal
  - [ ] Texte lisible (min 16px)
  - [ ] Boutons tapables (min 44x44px)
  - [ ] Images adaptées
  - [ ] Menu burger fonctionnel

- [ ] **Tablette Portrait (768px - iPad)**
  - [ ] Layout adapté (2 colonnes)
  - [ ] Espacement optimisé
  - [ ] Navigation visible

- [ ] **Desktop (1280px+)**
  - [ ] Layout 3-4 colonnes
  - [ ] Max-width 1280px (`max-w-7xl`)
  - [ ] Espacement large
  - [ ] Hover states visibles

### Tests Devices

- [ ] iPhone SE (375x667)
- [ ] iPhone 12 Pro (390x844)
- [ ] iPad (768x1024)
- [ ] iPad Pro (1024x1366)
- [ ] Desktop HD (1920x1080)

---

## 🧪 CHECKLIST #8 : TESTS FONCTIONNELS

### Avant Production

- [ ] **Navigation**
  - [ ] Tous les liens internes fonctionnent
  - [ ] Menu principal accessible
  - [ ] Footer liens fonctionnels
  - [ ] Breadcrumbs corrects (si présents)

- [ ] **Formulaires**
  - [ ] Contact : envoi OK
  - [ ] Audit Gratuit : envoi OK
  - [ ] Réservation : envoi OK
  - [ ] Validation fonctionne
  - [ ] Messages d'erreur clairs

- [ ] **Interactivité**
  - [ ] FAQ accordéons fonctionnels
  - [ ] Menu mobile s'ouvre/ferme
  - [ ] Modales s'ouvrent/ferment
  - [ ] Animations fluides

- [ ] **Multi-navigateurs**
  - [ ] Chrome (90%+ users)
  - [ ] Safari (mobile)
  - [ ] Firefox
  - [ ] Edge

---

## 🔐 CHECKLIST #9 : SÉCURITÉ & LÉGAL

### Conformité

- [ ] **RGPD**
  - [ ] Bannière cookies présente et fonctionnelle
  - [ ] Modale de paramétrage des cookies accessible
  - [ ] Consentement enregistré dans localStorage
  - [ ] Google Analytics chargé uniquement si consentement
  - [ ] Politique de confidentialité
  - [ ] Mentions légales
  - [ ] CGV (si applicable)

- [ ] **Sécurité**
  - [ ] HTTPS forcé
  - [ ] Pas de données sensibles en clair
  - [ ] Validation côté serveur (formulaires)
  - [ ] Protection CSRF (si nécessaire)

- [ ] **Légal**
  - [ ] Mentions légales complètes
  - [ ] Contact visible
  - [ ] Numéro SIRET (si société)
  - [ ] Hébergeur mentionné

---

## 📦 CHECKLIST #10 : DÉPLOIEMENT

### Avant de Déployer

- [ ] **Code**
  - [ ] Build sans erreur (`npm run build`)
  - [ ] Aucune erreur TypeScript
  - [ ] Tests passent (si tests)
  - [ ] Aucun TODO critique
  - [ ] **Encodage UTF-8 vérifié** (tous les fichiers)

- [ ] **Configuration**
  - [ ] Variables d'environnement configurées
  - [ ] Domaine pointé correctement
  - [ ] SSL/HTTPS activé
  - [ ] Redirections 301 (si migration)

- [ ] **SEO**
  - [ ] Sitemap.xml accessible
  - [ ] Robots.txt configuré
  - [ ] Google Search Console configurée
  - [ ] Google Analytics ajouté

- [ ] **Performance**
  - [ ] CDN activé (si applicable)
  - [ ] Compression Gzip/Brotli
  - [ ] Cache headers configurés
  - [ ] Images sur CDN

### Après Déploiement

- [ ] **Vérifications**
  - [ ] Site accessible (domaine principal)
  - [ ] Toutes les pages se chargent
  - [ ] Formulaires envoient
  - [ ] Analytics trackent

- [ ] **Monitoring**
  - [ ] Uptime monitoring actif
  - [ ] Erreurs 404 surveillées
  - [ ] Performance surveillée
  - [ ] Logs accessibles

---

## 🎯 CHECKLIST FINALE : READY FOR PRODUCTION

### Validation Ultime

- [ ] ✅ **11 pages migrées et fonctionnelles** (8 principales + 3 légales)
- [ ] ✅ **Lighthouse > 90 sur toutes les pages**
- [ ] ✅ **Design System V6.7.2 respecté à 100%**
- [ ] ✅ **Responsive testé (mobile, tablette, desktop)**

---

## 📝 TEMPLATE RAPPORT DE VALIDATION

```markdown
# Rapport de Validation - [Nom du Composant/Page]

**Date** : [Date]
**Auteur** : [Nom]
**Status** : ✅ Validé / ⚠️ À corriger / ❌ Non validé

## Design System V6.7.2
- [ ] Couleurs : ✅/❌
- [ ] Typographie : ✅/❌
- [ ] Espacement : ✅/❌
- [ ] Ombres : ✅/❌

## Performance
- Lighthouse Performance : [Score]/100
- Lighthouse Accessibilité : [Score]/100
- Lighthouse Best Practices : [Score]/100
- Lighthouse SEO : [Score]/100

## Responsive
- [ ] Mobile (375px) : ✅/❌
- [ ] Tablette (768px) : ✅/❌
- [ ] Desktop (1280px) : ✅/❌

## Accessibilité
- [ ] Navigation clavier : ✅/❌
- [ ] Contraste : ✅/❌
- [ ] Alt text : ✅/❌
- [ ] ARIA : ✅/❌

## Problèmes Identifiés
1. [Problème 1]
2. [Problème 2]

## Actions Correctives
1. [Action 1]
2. [Action 2]

## Validation Finale
- [ ] Prêt pour production
```

---

**✅ Checklists Complètes ! Validez Tout ! 🎯**

**Prochaine lecture** : `07_SEO_PERFORMANCE.md`