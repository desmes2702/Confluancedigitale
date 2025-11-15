# 📄 GUIDE COMPLET DES 14 PAGES — Confluence Digitale

**Version** : V6.7.2 + V5.21 (BATCH 48 V10 Phase 4)  
**Date** : 9 novembre 2025  
**Pour** : UX/UI Designer  
**Objectif** : Documentation exhaustive du contenu de chaque page

---

## 📚 TABLE DES MATIÈRES

### Pages Principales (11)
1. [Landing Page](#1-landing-page) — Introduction globale
2. [Méthode](#2-méthode) — Processus rassurant
3. [Offre](#3-offre) — Transparence pricing
4. [Exclusivité](#4-exclusivité) — Urgence/rareté
5. [Concurrents](#5-concurrents) — Preuve supériorité
6. [Études de Cas](#6-études-de-cas) — Preuve sociale
7. [Contact](#7-contact) — Conversion (formulaire simple)
8. [Audit Gratuit](#8-audit-gratuit) — 🔴 CONVERSION FINALE
9. [Réservation](#9-réservation) — Réserver exclusivité
10. [404](#10-404) — Page d'erreur
11. [Logo Showcase](#11-logo-showcase) — Présentation logo

### Pages Légales (3)
12. [Politique Confidentialité](#12-politique-confidentialité) — RGPD
13. [Mentions Légales](#13-mentions-légales) — Identité légale
14. [CGV](#14-cgv) — Conditions Générales de Vente

---

## 1. LANDING PAGE

**Fichier** : `ConfluenceLandingPage.tsx`  
**Route** : `/`  
**Objectif** : Introduction globale → Audit Gratuit  
**Version** : BATCH 48 V10 Phase 4 (Hero "Zéro Bruit" + Section S5.5 Triade) ✨

### Structure (9 sections)

#### S1 : Hero (Fond Gris #F9FAFB) — BATCH 48 V10 Phase 4 "Zéro Bruit" ✨
- **Padding** : `pt-28 lg:pt-32 pb-16` (BATCH 21)
- **Badge** : "Performance Garantie" (Or/Cuivre #D1A65E)
- **H1** : "Devenez visible. Vraiment visible."
- **Sous-titre** : "Nous garantissons la performance. **100/100**. C'est la seule façon d'être premier sur Google."
- **CTA Principal** : "Audit Gratuit" (Vert #10b981)
- **CTA Secondaire** : "Découvrir notre méthode" (Or/Cuivre outline)
- **Micro-copie réassurance** : "Réponse sous 48h • Sans engagement • Expertise locale 47"
- **Animation** : Fade-in + up-drift (0.8s)

**⚠️ MODIFICATION PHASE 4 - "Zéro Bruit"** :
- ✅ **Suppression** : 3 badges Mini-Triade (Or/Vert/Rouge) retirés du Hero
- ✅ **Philosophie** : Hero épuré, clarté maximale, hiérarchie visuelle optimisée
- ✅ **Fin du Hero** : Se termine après la micro-copie de réassurance
- ✅ **Triade** : Déplacée dans section dédiée S5.5 (voir ci-dessous)

#### S2 : Trust Band (Fond Blanc #FFFFFF)
- 4 statistiques :
  - "47 Sites livrés"
  - "100/100 Score garanti"
  - "0€ Setup"
  - "24 mois Engagement minimum"
- **Composant** : `ConfluenceTrustBand`
- **Animation** : Fade-in au scroll

#### S3 : Pain Points (Fond Gris #F9FAFB)
- **H2** : "Vous en avez assez..."
- **Sous-titre** : "Ces 4 frustrations qui bloquent votre croissance."
- 4 cards avec icônes X (rouge #A32E3A) :
  1. "D'être invisible sur Google"
  2. "De payer sans résultats"
  3. "D'être bloqué par la technique"
  4. "De voir vos concurrents devant vous"
- **Animation** : Stagger cards (0.15s delay)
- **Grid** : 1→2→4 colonnes responsive

#### S4 : Solution (Fond Blanc #FFFFFF)
- **H2** : "La solution : Performance garantie"
- **Sous-titre** : "Trois garanties concrètes pour transformer votre visibilité."
- 3 blocs avec icônes ✓ (vert #10b981) :
  1. **100/100 contractuel** - Score PageSpeed garanti
  2. **Exclusivité territoriale** - 1 seul client par zone
  3. **Autonomie totale** - Formation incluse
- **CTA** : "Voir notre offre" (Or/Cuivre outline)
- **Grid** : 1→3 colonnes responsive

#### S5 : Méthode en 3 étapes (Fond Gris #F9FAFB)
- **H2** : "Comment ça marche"
- **Sous-titre** : "De l'audit à votre autonomie, en 3 étapes simples."
- 3 cards numérotées (1, 2, 3) :
  1. **Audit Gratuit** - "On analyse votre situation actuelle"
  2. **Création** - "On livre votre site 100/100"
  3. **Autonomie** - "Vous gérez en toute liberté"
- **CTA** : "Découvrir notre méthode complète" (Vert)
- **Grid** : 1→3 colonnes responsive

#### S5.5 : L'Équipe qui Garantit cette Méthode (Fond Blanc #FFFFFF) — ✨ NOUVEAU BATCH 48 V10 Phase 4
- **H2** : "L'Équipe qui Garantit cette Méthode"
  - Font : Playfair Display Regular 400
  - Size : text-3xl md:text-4xl lg:text-5xl
  - Color : #1A1A1A
- **Sous-titre** : "Derrière chaque étape, il y a un expert dédié. Nous lions nos garanties à nos visages."
  - Size : text-base md:text-lg lg:text-xl
  - Color : gray-700
- **Composant** : `<ConfluenceTeamBlock />`
  - 3 cartes (Antoine/Pascal/Laly)
  - Photos + Statuts + Garanties personnelles
  - Icônes (Award/TrendingUp/ShieldCheck)
  - Couleurs (Or #D1A65E / Vert #10b981 / Rouge #A32E3A)
- **Animation** : whileInView avec viewport trigger
  - Titre : opacity 0→1, y 20→0, duration 0.8s
  - Sous-titre : delay 0.1s
  - ConfluenceTeamBlock : delay 0.2s
- **Padding** : py-16 md:py-24

**🎯 Objectif Section S5.5** :
- Humaniser l'agence après présentation de la méthode
- Rassurer avec statuts professionnels vérifiables
- Créer confiance avant les preuves sociales
- Légitimer les promesses avec expertise réelle

#### S6 : Preuve Sociale (Fond Gris #F9FAFB)
- **H2** : "Résultats concrets"
- **Sous-titre** : "Des artisans du Lot-et-Garonne qui nous font confiance."
- 3 case studies cards :
  - Couvreur Lot-et-Garonne (+250% visibilité)
  - Plombier Villeneuve-sur-Lot (+280% trafic)
  - Restaurant Fumel (60% réservations en ligne)
- **Metrics** : Badges Vert avec chiffres clés
- **CTA** : "Voir toutes les études de cas" (Or/Cuivre outline)

#### S7 : FAQ (Fond Blanc #FFFFFF)
- **H2** : "Questions fréquentes"
- **Sous-titre** : "Tout ce que vous devez savoir avant de vous lancer."
- **Composant** : `ConfluenceFAQ`
- 8 questions avec accordion
- **CTA** : "Lancer mon audit gratuit" (Vert)

#### S8 : CTA Final (Fond Noir Mat #1A1A1A)
- **Composant** : `ConfluenceFinalCTA`
- **H2** : "Prêt à devenir visible ?"
- **Sous-titre** : "Commencez par un audit gratuit. Sans engagement. Réponse sous 48h."
- **CTA** : "Je demande mon Audit Gratuit" (Vert)
- **Stats** : 47 sites, 100% score, 0€ setup, Support illimité

### Colors
- Background : Alternance #F9FAFB / #FFFFFF
- CTA Final : #1A1A1A
- Badge Hero : #D1A65E
- CTAs principaux : #10b981
- CTAs secondaires : #D1A65E (outline)
- Icons X : #A32E3A
- Icons ✓ : #10b981
- Triade S5.5 : Or #D1A65E / Vert #10b981 / Rouge #A32E3A

### Responsive
- Hero : `pt-28 lg:pt-32 pb-16` (BATCH 21)
- Sections : `py-16 md:py-24`
- Grids : 1→2→3 (ou 4) colonnes
- CTAs : `w-full sm:w-auto`
- Typography : clamp() automatique

### Animations (Motion)
- **Hero** : Fade-in immédiat
- **Sections S2-S8** : whileInView {{ once: true, amount: 0.3 }}
- **Cards** : Stagger 0.15s
- **Ease** : [0.22, 1, 0.36, 1]
- **Duration** : 0.6-0.8s

### Finitions UX
- ✅ **BATCH 21** : `pt-28 lg:pt-32` (respiration laptop)
- ✅ **BATCH 48 V10 Phase 4** : **Hero "Zéro Bruit" + Section S5.5 Triade** ✨

### 🎯 Philosophie "Zéro Bruit" (Phase 4)

> "Supprimer les 3 badges Mini-Triade du Hero permet d'aérer et de privilégier la clarté. La Triade complète apparaît plus bas dans une section dédiée avec contexte explicatif. C'est plus professionnel et moins 'surcharge informationnelle'."

**Bénéfices** :
- ✅ Clarté visuelle maximale au-dessus de la ligne de flottaison
- ✅ Hiérarchie d'information optimisée
- ✅ Réassurance contextualisée (Triade après méthode)
- ✅ Professionnalisme renforcé

---

## 2. MÉTHODE

**Fichier** : `ConfluenceMethodePage.tsx`  
**Route** : `/methode`  
**Objectif** : Rassurer sur le processus → Audit Gratuit

### Structure (7 sections)

#### S1 : Hero
- **Badge** : "Méthode Éprouvée" (Or/Cuivre)
- **H1** : "Du Score Médiocre au 100/100 Garanti"
- **Sous-titre** : "Notre processus en 5 étapes transforme votre présence digitale en machine de conversion."
- **Animation** : Fade-in immédiate (pas de scroll)

#### S2 : Processus en 5 Étapes (Fond Blanc)
- **H2** : "Notre Processus en 5 Étapes"
- **Sous-titre** : "De l'audit initial à votre autonomie totale. Durée moyenne : 2-3 semaines"
- **Timeline des Étapes** (5 cartes V6.7) :
  1. **Audit Sniper** (48h) - La Découverte
     - Analyse technique complète
     - Identification des manques de visibilité
  2. **Maquette Hifi** (3-5 jours) - La Vision
     - Design professionnel adapté au métier
     - Validation avant production
  3. **Construction Site Ultra-Rapide** (7-10 jours) - Le 100/100
     - Développement avec technologie invisible
     - Score 100/100 garanti
  4. **Formation Autonomie** (2h) - La Souveraineté
     - Session formation complète
     - 100% autonome sans dépendance
  5. **Suivi Sérénité** (À vie) - Le MRR
     - Support illimité
     - Mises à jour automatiques
- **Animation** : Cards stagger 0.15s au scroll

#### S3 : Autonomie ET Support (Fond Gris - Directive 3)
- **H2** : "L'Autonomie ET le Support"
- **Sous-titre** : "Vous avez le choix. À chaque instant."
- **2 Options présentées côte à côte** :
  - **Option 1** : Modification autonome en 2 minutes
    - Interface plus simple que Facebook
    - Zéro code, zéro dépendance
  - **Option 2** : Email au support (inclus)
    - Support illimité dans les 149€/mois
    - Intervention sous 48h
- **Message final** : "Vous n'êtes jamais bloqué. Les deux sont inclus."

#### S4 : Triade de Garanties (Fond Blanc - BATCH 48 V10)
- **Composant** : `ConfluenceTeamBlock`
- **H2** : "Vos 3 Garanties. Notre Expertise."
- **Sous-titre** : "Une équipe familiale qui s'engage avec des compétences certifiées."
- **3 Profils** (Cards avec photos) :
  1. **Antoine** - Garant de la Performance & Conversion
     - Architecte UX/UI et Expert Technique
     - Design V6.7 premium + Performance 100/100
     - Icône : Award
  2. **Pascal** - Garant de la Stratégie (Zéro Jargon)
     - Conseiller Numérique et Resp. d'Espace de Médiation (RENM)
     - Traduction technique → chiffre d'affaires
     - Icône : TrendingUp
  3. **Laly** - Garante de la Sérénité & l'Autonomie
     - Enseignante spécialisée
     - Formation Strapi claire + 100% autonome
     - Icône : ShieldCheck

#### S5 : FAQ Contextuelle (Fond Gris)
- **Composant** : `ConfluenceFAQ`
- **H2** : "Questions sur la Méthode"
- **Sous-titre** : "Tout comprendre sur notre processus de A à Z."
- **6 Questions** :
  1. Durée phase Audit Sniper ?
  2. Validation maquette obligatoire ?
  3. Déroulement phase Dev Éclair ?
  4. Formation nécessaire ?
  5. Que comprend Domination SEO ?
  6. Modifications après livraison ?

#### S6 : CTA Final (Fond Noir Mat)
- **H2** : "Prêt à Passer au 100/100 ? Commencez par votre Audit Gratuit."
- **Sous-titre** : "Découvrez exactement ce qui bloque votre visibilité. Analyse complète en 48h. 100% gratuit. Sans engagement."
- **CTA** : "Je demande mon Audit Gratuit" (Vert)
- **Micro-copie** : "Réponse en 24h • Sans obligation d'achat • Rapport détaillé offert"
- **Animation** : Scale au scroll

### Colors
- Badges phases : #D1A65E
- Icons : #10b981
- Timeline : #E5E7EB

### Animations
- Timeline scroll reveal
- Cards stagger 0.15s

---

## 3. OFFRE

**Fichier** : `ConfluenceOffrePage.tsx`  
**Route** : `/offre`  
**Objectif** : Transparence pricing → Audit Gratuit  
**Version** : V6.8 (BATCH 26 V2) — **Sans triade BATCH 48** (à intégrer)

### Structure (6 sections)

#### S1 : Hero (Fond Gris #F9FAFB) — V6.8 BATCH 26 V2
- **Padding** : `pt-28 lg:pt-32 pb-12 md:pb-16` (BATCH 21)
- **H1** : "Du Devis **Surprise** (rouge #A32E3A) au **149€/mois** (or #D1A65E) Garanti"
- **Sous-titre** : "Nous ne vendons pas un site web. Nous vendons une **garantie de performance** (vert) et une tranquillité d'esprit totale, pour un tarif mensuel unique."
- **Décorations** : 2 cercles blur (Or/Cuivre et Vert en arrière-plan)

#### S2 : Investissement Partagé (Fond Blanc #FFFFFF) — V6.8 NOUVEAU
- **H2** : "Notre **Investissement Partagé** (or) : Une Offre Unique"
- **Sous-titre** : "Un modèle transparent basé sur la confiance mutuelle."
- **Carte premium** (bordure Or/Cuivre, shadow Or) :
  - **Layout** : 2 colonnes (grid 1→2)
  - **Colonne 1** : "Nous finançons votre site à 100%"
    - Badge numéroté "1" (or)
    - Texte : "Un site 100/100 = 3 000€ HT. Nous finançons. Votre ticket d'entrée = **0€**."
  - **Colonne 2** : "Votre 'Service Sérénité & Performance'"
    - Badge numéroté "2" (vert)
    - Texte : "Partenariat **24 mois** à **149€ HT/mois**. Temps minimum pour ROI."
  - **CTA** : "Je sécurise mon Exclusivité" (Vert)
  - **Micro-copie** : "Audit gratuit • Réponse sous 24h • Sans engagement initial"
  - **Note Support** (bordure top) : "Support & Intervention (Zone 30km inclus). Intervention au-delà : sur devis."

#### S3 : Tableau Comparatif (Fond Blanc #FFFFFF) — BATCH 28
- **H2** : "L'Agence Classique **vs.** (or) Notre Offre"
- **Sous-titre** : "La différence est évidente."
- **Tableau 3 colonnes** (Desktop lg+) :
  - **Header** : "Critère" | "L'Agence 'Classique' (Le Problème)" | "Confluence Digitale (La Solution)"
  - **6 lignes** :
    1. **Démarrage** : ❌ 3 000-5 000€ avance | ✅ **0€ Avance** (Nous finançons)
    2. **Délai** : ❌ Mois de délais | ✅ **Site prêt en quelques semaines**
    3. **Vitesse** : ❌ "On fera de notre mieux" | ✅ **Garantie 100/100** (Contrat)
    4. **Modifier Chantiers** : ❌ "Fausse autonomie" (peur de casser) | ✅ **Autonomie Sans Casse (Strapi)**
    5. **Maintenance** : ❌ Factures surprises | ✅ **Zéro surprise** (Tout inclus)
    6. **Concurrents** : ❌ Agence travaille pour eux | ✅ **Exclusivité totale** (1 seul/zone)
- **Version Mobile** (<lg) : 6 cartes empilées (space-y-4)
  - Chaque carte : Titre + Problème (❌ XCircle rouge) + HR + Solution (✅ CheckCircle2 vert)

#### S4 : Disponibilité Exclusivité (Fond Gris #F9FAFB) — V6.8 BATCH 26 V2
- **Badge** : "Exclusivité Territoriale" (Shield or, fond blanc)
- **H2** : "Votre **Exclusivité** (or) Territoriale"
- **Sous-titre** : "Notre offre est limitée à **1 artisan par métier et par zone** (or). Vérifiez si votre place est encore disponible."
- **Composant** : `AvailabilityBlock` (Tableau secteurs disponibles/complets)

#### S5 : La Valeur Incluse (Fond Gris #F9FAFB) — Cartes V6.7
- **H2** : "La **Valeur** (or) Incluse"
- **Sous-titre** : "Tout ce dont vous avez besoin pour dominer votre marché. Rien de superflu. Que l'essentiel."
- **Grid 2 colonnes** (lg, responsive 1→2) :
  - **4 cartes V6.7** (fond blanc, bordure #E5E7EB, hover or + scale) :
    1. **Performance 100/100** (Icône Gauge, or)
       - "Score PageSpeed garanti. Site ultra-rapide qui convertit."
       - Features : Vitesse < 1s, Optimisé Google, Garantie 100/100 pour Page 1
    2. **Souveraineté Totale** (Icône Shield, or)
       - "Votre site. Vos données. Votre autonomie complète."
       - Features : Interface sans code, Modification temps réel, Autonomie Strapi
    3. **Exclusivité Territoriale** (Icône MapPin, or)
       - "1 seul client par secteur. Vous êtes protégé."
       - Features : Zone protégée, Aucun concurrent direct, Toute énergie pour vous
    4. **Sérénité Garantie** (Icône Clock, or)
       - "Support illimité. Maintenance incluse. Zéro surprise."
       - Features : MAJ auto, Support réactif, Hébergement sécurisé inclus

#### S6 : Engagement Contractuel (Fond Gris #F9FAFB) — Transparence
- **Badge** : "Engagement Contractuel" (AlertTriangle rouge bordeaux, fond rouge/10)
- **H2** : "L'**Engagement** (rouge) : Transparence Totale"
- **Carte blanche** (shadow rouge, bordure #E5E7EB) :
  - **Durée affichée** : "**24 mois**" (texte 5xl-7xl rouge bordeaux, Playfair)
  - **4 points CheckCircle2 rouge** :
    1. **Engagement ferme 24 mois** : Pour garantir exclusivité et ROI
    2. **Paiement 149€ HT/mois** : Prélèvement auto, aucun frais caché
    3. **Résiliation anticipée** : Mensualités restantes, max 1 990€ HT (protection investissement 3 000€). Exceptions : cessation activité, motif légitime
    4. **Renouvellement proactif 12 mois** : Contact 3 mois avant avec Bilan Performance
  - **Note légale** (bordure top) : Lien vers CGV
  - **CTA final** : "J'accepte ces conditions, je demande mon audit" (Vert)

### Colors
- Backgrounds : Alternance #F9FAFB / #FFFFFF
- Or/Cuivre : #D1A65E (accents, badges, bordures)
- Vert : #10b981 (CTAs, checkmarks positifs)
- Rouge Bordeaux : #A32E3A (contractuel, X négatifs)
- Texte : #1A1A1A (titres), #374151 / gray-700 (corps)

### Animations
- Ease : `[0.22, 1, 0.36, 1]` (standard Motion)
- Stagger cards : 0.15s delay
- Hover cartes : scale(1.02) + bordure or
- CTA hover : scale(1.05)

### Responsive
- Hero : `pt-28 lg:pt-32` (BATCH 21)
- Grids : 1→2 colonnes
- Tableau : Desktop (table) | Mobile (cartes empilées)
- Typographie : Responsive avec md/lg breakpoints

### Finitions UX (V6.7.2)
- ✅ **BATCH 21** : `pt-28 lg:pt-32` (respiration laptop)
- ✅ **BATCH 26 V2** : Hero avec décorations blur
- ✅ **BATCH 28** : Tableau comparatif responsive
- ✅ **Triade BATCH 48 V10** : **INTÉGRÉE** ✅ (Production)
- ✅ **V5.21** : Badge Hero "Prix Garanti" avec icône ShieldCheck

### Intégration Triade BATCH 48 V10
La page Offre intègre le `<ConfluenceTeamBlock />` complet dans une section dédiée après S5 "La Valeur Incluse", avant S6 "Engagement Contractuel". Format : Bloc complet (3 cartes avec Antoine/Pascal/Laly).

---

## 4. EXCLUSIVITÉ

**Fichier** : `ConfluenceExclusivitePage.tsx`  
**Route** : `/exclusivite`  
**Objectif** : Urgence/rareté → Audit Gratuit

### Structure (7 sections)

#### S1 : Hero
- **Badge** : "Exclusivité Territoriale"
- **H1** : "1 seul client par métier et par zone"
- **Sous-titre** : "Clause contractuelle. Zéro concurrence interne. Zéro conflit d'intérêt."

#### S2 : Principe (Fond Blanc)
- **H2** : "Le principe"
- **Description** : Exclusivité géographique contractuelle
- **Exemple visuel** : Carte zone 30km
- **Icon** : MapPin (Or/Cuivre)

#### S3 : Comment ça marche (Fond Gris)
- **H2** : "Comment ça marche"
- **4 étapes avec bullets numérotés** (BATCH 20A + 20D) :
  1. Définition de votre zone
  2. Clause contractuelle
  3. Protection totale
  4. Stratégie SEO unique
- **Centrage parfait** : `grid place-items-center` + `lineHeight: '1'`

#### S4 : Disponibilité (Fond Blanc)
- **Composant** : `AvailabilityBlock`
- **H2** : "Nos Exclusivités"
- **2 départements** :
  - Lot-et-Garonne (47)
  - Lot (46)
- **Secteurs** : Couvreur, Plombier, Restaurant, Maçonnerie, Hôtellerie
- **États** :
  - "1 PLACE DISPONIBLE" (Vert)
  - "COMPLET" (Rouge Bordeaux)
- **CTA** : "Réserver ma place" (Or/Cuivre outline)

#### S5 : Bénéfices (Fond Gris)
- **H2** : "Vos bénéfices"
- **3 cards** :
  1. SEO dédié à vous
  2. Pas de cannibalisation
  3. ROI maximisé

#### S6 : FAQ Exclusivité (Fond Blanc)
- **H2** : "Questions sur l'exclusivité"
- 5 questions :
  - Comment définir ma zone ?
  - Que se passe-t-il si un concurrent veut aussi ?
  - Puis-je agrandir ma zone ?
  - L'exclusivité est-elle à vie ?
  - Combien ça coûte ?

#### S7 : CTA Final (Fond Noir Mat)
- **H2** : "Sécurisez votre zone maintenant"
- **CTA** : "Vérifier disponibilité"

### Colors
- Badges départements : #D1A65E/10 (bg), #D1A65E (text)
- "DISPONIBLE" : #10b981
- "COMPLET" : #A32E3A
- Bullets numérotés : #D1A65E/10 (bg)

### Finitions UX (V6.7.2)
- ✅ **BATCH 20A** : Bullets alignés `flex items-center`
- ✅ **BATCH 20D** : Chiffres 1,2,3,4 centrés `grid place-items-center`

---

## 5. CONCURRENTS

**Fichier** : `ConfluenceConcurrentsPage.tsx`  
**Route** : `/concurrents`  
**Objectif** : Prouver supériorité → Audit Gratuit

### Structure (6 sections)

#### S1 : Hero
- **Badge** : "Analyse Concurrents"
- **H1** : "Pourquoi sommes-nous différents ?"
- **Sous-titre** : "Comparaison transparente avec les agences classiques."

#### S2 : Tableau Comparatif (Fond Blanc)
- **H2** : "Nous vs. Autres Agences"
- **Table 3 colonnes** :
  | Critère | Autres | Nous |
  |---------|--------|------|
  | Setup | 2000-5000€ | **0€** |
  | /mois | 200-500€ | **149€** |
  | Score garanti | Non | **100/100** |
  | Exclusivité | Non | **Oui** |
  | Formation | Payante | **Incluse** |
  | Support | Limité | **Illimité** |
  | Autonomie | Non | **Totale** |

- **Icons** :
  - X (rouge) pour "Autres"
  - ✓ (vert) pour "Nous"

#### S3 : 3 Différenciateurs (Fond Gris)
- **H2** : "Nos 3 garanties uniques"
- **Cards** :
  1. **100/100 contractuel**
     - Seule agence à le garantir
     - Pénalités si non-atteint
  
  2. **0€ Setup**
     - Nous investissons sur vous
     - Confiance mutuelle
  
  3. **Exclusivité territoriale**
     - Clause contractuelle
     - Zéro conflit d'intérêt

#### S4 : Pourquoi nous faire confiance (Fond Blanc)
- **H2** : "Pourquoi nous faire confiance ?"
- **Composant** : `DiagnosticSectionV5_1`
- **4 arguments** :
  1. Transparence totale (prix affichés)
  2. Contrat clair (clause résiliation)
  3. Résultats prouvés (case studies)
  4. Support humain (photo + contact)

#### S5 : FAQ Concurrence (Fond Gris)
- **H2** : "Questions sur notre différence"
- 4 questions :
  - Pourquoi moins cher ?
  - Comment garantir 100/100 ?
  - Quelle est la contrepartie ?
  - Puis-je changer d'agence après ?

#### S6 : CTA Final (Fond Noir Mat)
- **H2** : "Convaincu ? Testez-nous."
- **CTA** : "Audit Gratuit"

### Colors
- Icons X : #A32E3A
- Icons ✓ : #10b981
- Tableau : Bordure #E5E7EB
- Headers : #F9FAFB

---

## 6. ÉTUDES DE CAS

**Fichier** : `ConfluenceEtudesDeCasPage.tsx`  
**Route** : `/etudes-de-cas`  
**Objectif** : Preuve sociale → Audit Gratuit

### Structure (5 sections)

#### S1 : Hero
- **Badge** : "Études de Cas"
- **H1** : "Résultats concrets pour nos clients"
- **Sous-titre** : "Des TPE/PME du 47 qui ont transformé leur présence digitale"

#### S2 : Filtres (sticky) (Fond Blanc)
- **Filtres** :
  - Tous
  - Artisans
  - Commerces
  - Professions libérales

#### S3 : Grid Case Studies (Fond Gris)
- **Grid 3 colonnes responsive** (1→2→3)
- **3 case studies** :

##### Case Study 1 : Couvreur
- **Nom** : "Couvreur - Lot-et-Garonne"
- **Secteur** : Artisan
- **Avant** : Invisible Google, 0 appels web
- **Après** : Position #1 "couvreur 47", +250% visibilité
- **Métriques** :
  - Score : 100/100
  - Trafic : +300%
  - Conversions : +45 devis/mois
- **CTA** : "Voir l'étude complète"

##### Case Study 2 : Plombier
- **Nom** : "Plombier - Villeneuve-sur-Lot"
- **Secteur** : Artisan
- **Avant** : Site lent (45/100), perdu en page 3
- **Après** : 100/100, position #1-3 constante
- **Métriques** :
  - Score : 100/100
  - Trafic : +280%
  - Conversions : +38 appels/mois
- **CTA** : "Voir l'étude complète"

##### Case Study 3 : Restaurant
- **Nom** : "Restaurant - Fumel"
- **Secteur** : Commerce
- **Avant** : Pas de site, juste Facebook
- **Après** : Site 100/100, réservations en ligne
- **Métriques** :
  - Score : 100/100
  - Réservations en ligne : 60%
  - Visibilité locale : +320%
- **CTA** : "Voir l'étude complète"

#### S4 : Témoignages (Fond Blanc)
- **H2** : "Ce qu'ils en disent"
- **3 quotes avec photos** :
  1. "Enfin une agence qui tient ses promesses" — Couvreur
  2. "Le téléphone sonne tous les jours" — Plombier
  3. "Plus de 60% de réservations en ligne" — Restaurant

#### S5 : CTA Final (Fond Noir Mat)
- **H2** : "À votre tour d'obtenir ces résultats"
- **CTA** : "Audit Gratuit"

### Colors
- Cards : #FFFFFF avec bordure #E5E7EB
- Badges secteurs : #D1A65E
- Métriques : #10b981 (positif)
- Quotes : Bordure gauche #D1A65E

### Animations
- Cards stagger 0.15s
- Hover : scale(1.02) + bordure Or/Cuivre

---

## 7. CONTACT

**Fichier** : `ConfluenceContactPageV2.tsx` ⚠️ (Version V2 avec triade BATCH 48)
**Route** : `/contact`  
**Objectif** : Conversion (formulaire contact simple) + Humanisation  
**Version** : BATCH 46 V7 (avec triade professionnelle intégrée)

### Structure (5 sections)

#### S1 : Hero (Fond Gris #F9FAFB)
- **Padding** : `pt-28 lg:pt-32` (BATCH 21)
- **Badge** : "Contact Direct" (Or/Cuivre)
- **H1** : "Parlons de votre projet"
- **Sous-titre** : "Une question précise ? Un audit gratuit ? Réponse humaine garantie sous 24h."

#### S2 : Formulaire Simplifié (Fond Blanc #FFFFFF) — BATCH 22 : Zéro Friction
**Formulaire réduit à 2 champs** (au lieu de 4) pour maximiser la conversion :
- **Layout** : 1 colonne centrée (max-w-2xl)
- **3 champs** (space-y-6, BATCH 20B) :
  1. **Email professionnel** (required)
     - Validation instantanée (regex email)
     - Bordure verte si valide, rouge si erreur (BATCH 45.4)
     - Icône CheckCircle2 verte si valide
  2. **Message** (textarea, required)
     - Placeholder : "Décrivez votre projet, posez votre question..."
     - Validation instantanée (non vide)
  3. **Checkbox RGPD** (required)
     - Lien vers Politique de Confidentialité
- **CTA** : "Envoyer ma demande" (Vert #10b981)
  - États : Désactivé (gris) / Actif (vert) / Loading (Loader2) / Succès (CheckCircle2)
- **Réassurance sous CTA** (BATCH 20C) :
  - "✓ Réponse sous 24h"
  - "✓ Sans engagement"
  - "✓ Audit offert possible"

**États du formulaire (BATCH 22)** :
1. Désactivé (gris) si formulaire incomplet
2. Validation instantanée (bordures vertes/rouges)
3. Loading (spinner)
4. Succès (message + redirection)
5. Erreur (toast notification)

#### S3 : Triade d'Experts (Fond Blanc #FFFFFF) — BATCH 46 V7
- **Composant** : `ConfluenceTeamBlock`
- **H2** : "Vos 3 Garanties. Notre Expertise."
- **Sous-titre** : "Une équipe familiale qui s'engage avec des compétences certifiées."
- **3 Profils** (Cards avec photos) :
  1. **Antoine** - Garant de la Performance & Conversion
  2. **Pascal** - Garant de la Stratégie (Zéro Jargon)
  3. **Laly** - Garante de la Sérénité & l'Autonomie
- **Objectif** : Humanisation du contact, rassurer sur l'interlocuteur

#### S4 : Où Nous Trouver (Fond Gris #F9FAFB) — BATCH 16A
- **H2** : "Où nous trouver ?"
- **Sous-titre** : "Basés dans le Lot-et-Garonne (47), nous intervenons localement."
- **Carte statique** (fond blanc, shadow subtile) :
  - **Adresse** :
    - Montayral, 47500
    - Zone d'intervention : Lot-et-Garonne (47) + Lot (46)
  - **Icône** : MapPin (Or/Cuivre)
  - **Note** : "Déplacements dans un rayon de 30 km inclus dans l'offre. Au-delà : sur devis."
- **Pas de carte interactive** (performance > UX)

#### S5 : CTA Final (Fond Noir Mat #1A1A1A)
- **H2** : "Préférez commencer par un audit gratuit ?"
- **Sous-titre** : "Découvrez ce qui bloque votre visibilité. Analyse complète en 48h."
- **CTA** : "Je demande mon Audit Gratuit" (Vert)

### Colors
- Formulaire : Fond blanc, inputs #F9FAFB
- Icons coordonnées : #10b981 (vert)
- Labels : #374151
- Bordures focus : #D1A65E
- Bordures validation : Vert #10b981 / Rouge #A32E3A

### Finitions UX (V6.7.2 + BATCH)
- ✅ **BATCH 21** : `pt-28 lg:pt-32` (respiration laptop)
- ✅ **BATCH 20B** : `space-y-6` formulaire
- ✅ **BATCH 20C** : Réassurance sous CTA
- ✅ **BATCH 22** : Zéro Friction (2 champs au lieu de 4)
- ✅ **BATCH 45.4** : Validation visuelle (bordures + icônes)
- ✅ **BATCH 46 V7** : Triade professionnelle intégrée
- ✅ **BATCH 16A** : Carte statique (performance)

### Note Migration
⚠️ Le fichier actuel est `ConfluenceContactPageV2.tsx` (et non `ConfluenceContactPage.tsx`). La V2 est la version optimisée avec triade BATCH 48 et formulaire BATCH 22 Zéro Friction.

---

## 8. AUDIT GRATUIT

> **📄 DOCUMENTATION COMPLÈTE : `/doc/pages/08_audit-gratuit/README.md`**

**Fichier** : `ConfluenceAuditGratuitPage.tsx`  
**Route** : `/audit-gratuit`  
**Objectif** : 🔴 **CONVERSION FINALE**  
**Version** : BATCH 48 V10 FINALISÉ

### Résumé Structure (4 sections - Alternance Gris/Blanc/Gris/Blanc)

1. **Hero** (Fond Gris #F9FAFB) :
   - Badge "Audit Gratuit 48h" (Or/Cuivre)
   - H1 : "Découvrez ce qui freine votre visibilité."
   - Sous-titre : "Obtenez une analyse technique et stratégique complète..."
   - Padding : `pt-28 lg:pt-32 pb-16` (BATCH 21)

2. **Ce que contient votre audit** (Fond Blanc #FFFFFF) :
   - H2 : "Votre Audit Gratuit (48h) : Technique, Stratégie, Pédagogie"
   - **3 cartes triade professionnelle** :
     * **Antoine** (icône BarChart3, Or #D1A65E) : Analyse Technique
     * **Pascal** (icône MapPin, Vert #10b981) : Stratégie Locale
     * **Laly** (icône GraduationCap, Rouge #A32E3A) : Plan d'Autonomie

3. **Pourquoi c'est gratuit ?** (Fond Gris #F9FAFB) :
   - H2 : "Pourquoi cet audit est-il vraiment gratuit ?"
   - **3 cartes transparence** (Antoine prouve/Pascal révèle/Laly lève)
   - Conclusion : "Vous décidez ensuite... **Aucune pression.**"

4. **Formulaire** (Fond Blanc #FFFFFF) :
   - **Layout 2 colonnes** (lg:grid-cols-2) :
     * **Col 1** : Humanisation (Pascal, interlocuteur dédié)
     * **Col 2** : Formulaire (carte gris clair #F9FAFB, inputs blancs)
   - **5 champs** (space-y-6, BATCH 20B) :
     1. Nom complet (required)
     2. Email professionnel (required)
     3. Téléphone (optionnel)
     4. Secteur d'activité (required) + micro-copie justification
     5. Ville (required) + micro-copie justification
   - **Validation BATCH 45.4** : bordures vertes/rouges, icônes CheckCircle2
   - **Checkbox RGPD** (required, fond blanc)
   - **CTA** : "Recevoir mon Audit Gratuit" (Vert #10b981)
   - **Réassurance BATCH 20C** : 3 points en colonne centrée

### Triade Professionnelle (BATCH 48 V10)

**Antoine - Garant Performance & Conversion** :
- Statut : Architecte UX/UI et Expert Technique
- Analyse : Score PageSpeed 100/100, vitesse chargement, blocages conversion
- Couleur : Or/Cuivre #D1A65E

**Pascal - Garant Stratégie (Zéro Jargon)** :
- Statut : Conseiller Numérique (RENM)
- Analyse : Position Google, mots-clés gagnants, concurrence locale, croissance chiffrée
- Couleur : Vert #10b981
- **Humanisation** : Photo + texte dédié dans formulaire

**Laly - Garante Sérénité & Autonomie** :
- Statut : Enseignante spécialisée
- Analyse : Interface Strapi expliquée, temps estimé 5 min/sem, support illimité
- Couleur : Rouge Bordeaux #A32E3A

### Finitions UX (V6.7.2 + BATCH 48)
- ✅ **BATCH 21** : `pt-28 lg:pt-32` (respiration laptop)
- ✅ **BATCH 20B** : `space-y-6` formulaire
- ✅ **BATCH 20C** : Réassurance colonne centrée
- ✅ **BATCH 48** : Triade professionnelle intégrée
- ✅ **Micro-copies** : Justifications sous Secteur et Ville
- ✅ **Téléphone optionnel** : Validation corrigée
- ✅ **Structure alternée** : Gris/Blanc/Gris/Blanc respectée
- ✅ **CTA Noir supprimé** : Pas de section redondante

**Voir documentation complète pour détails exhaustifs.**

---

## 9. RÉSERVATION

**Fichier** : `ConfluenceReservationPage_BATCH44.tsx` ⚠️ (Version BATCH 44 avec validation améliorée)
**Route** : `/reservation?metier=XXX`  
**Objectif** : Réserver exclusivité territoriale → Audit Gratuit  
**Version** : BATCH 44 (Validation états visuels avancés)

### Structure (5 sections)

#### S1 : Hero (Fond Gris #F9FAFB)
- **Padding** : `pt-28 lg:pt-32` (BATCH 21)
- **Badge** : "Réservation Exclusivité" (Or/Cuivre)
- **H1** : "Réservez votre exclusivité"
- **Sous-titre** : "Sécurisez votre zone géographique avant vos concurrents"

#### S2 : Récap Métier (Fond Blanc #FFFFFF)
**Si `?metier=` fourni via sessionStorage** :
- **Card centrée** (max-w-2xl) :
  - Badge : Département (Lot-et-Garonne)
  - **Icon** : Briefcase (Or/Cuivre)
  - **Texte** : "Vous souhaitez réserver : **[Métier capitalisé]**"
  - **Exemple** : "plombier" → "Plombier"
- **Pré-remplissage automatique** : Champ "Secteur d'activité" pré-rempli (BATCH 45)

#### S3 : Formulaire Réservation (Fond Blanc #FFFFFF) — BATCH 44
- **Layout** : 1 colonne centrée (max-w-2xl)
- **6 champs** (space-y-6, BATCH 20B) :
  
  1. **Nom complet** (required)
     - Validation : ≥ 3 caractères
     - Bordure verte/rouge (BATCH 45.2)
     - Icône CheckCircle2 si valide
  
  2. **Téléphone** (required)
     - Validation : Regex français (10 chiffres ou format +33)
     - Format accepté : 06 12 34 56 78 ou +33612345678
     - Bordure verte/rouge
  
  3. **Email professionnel** (required)
     - Validation : Regex email
     - Bordure verte/rouge
  
  4. **Secteur d'activité** (required, pré-rempli si métier réservé)
     - Validation : ≥ 3 caractères
     - Micro-copie : "Ex: Plombier, Couvreur, Restaurant..."
  
  5. **Ville principale** (required)
     - Validation : ≥ 2 caractères
     - Micro-copie : "Ex: Villeneuve-sur-Lot, Fumel..."
  
  6. **Zone souhaitée** (required)
     - Type : Text input (au lieu de select)
     - Validation : ≥ 3 caractères
     - Placeholder : "Ex: Villeneuve-sur-Lot + 30km, Tout le Lot-et-Garonne..."

- **Validation BATCH 45.2** : États "touched" (validation après perte de focus uniquement)
- **Checkbox RGPD** (required, fond blanc)
- **CTA** : "Réserver mon exclusivité" (Vert #10b981)
  - Désactivé (gris) si formulaire incomplet (BATCH 44)
  - Actif (vert) si tous les champs valides

#### S4 : Bloc Contractuel (Fond Gris #F9FAFB)
- **Composant** : `ContractualReassuranceBlock`
- **H2** : "Ce qui se passe ensuite"
- **3 étapes** avec CheckCircle (vert) :
  1. **Vérification disponibilité** (sous 48h)
     - "Nous vérifions que votre zone/métier est bien disponible"
  2. **Audit gratuit de votre zone**
     - "Analyse technique + stratégie locale offerte"
  3. **Signature contrat exclusivité**
     - "Protection contractuelle de votre zone pendant 24 mois minimum"
- **Micro-copie finale** : "Engagement : 149€ HT/mois sur 24 mois minimum"

#### S5 : CTA Final (Fond Noir Mat #1A1A1A)
- **H2** : "Pas encore prêt à réserver ?"
- **Sous-titre** : "Commencez par découvrir ce qui bloque votre visibilité actuelle"
- **CTA** : "Je demande mon Audit Gratuit" (Vert)

### Finitions UX (V6.7.2 + BATCH)
- ✅ **BATCH 21** : `pt-28 lg:pt-32` (respiration laptop)
- ✅ **BATCH 20B** : `space-y-6` formulaire
- ✅ **BATCH 40** : Validations regex (phone, email)
- ✅ **BATCH 44** : Bouton désactivé si formulaire incomplet
- ✅ **BATCH 45** : Pré-remplissage secteur depuis sessionStorage
- ✅ **BATCH 45.2** : États "touched" (validation après blur uniquement)
- ✅ **BATCH 45.4** : Bordures vertes/rouges + icônes

### Pre-remplissage (sessionStorage)
**Source** : AvailabilityBlock (page Offre ou Exclusivité)
```tsx
// Stockage lors du clic "Réserver ma place"
sessionStorage.setItem('reservationMetier', normalizeMetier(item.sector));
```

**Lecture** : ConfluenceReservationPage
```tsx
useEffect(() => {
  const metierParam = sessionStorage.getItem('reservationMetier') || "";
  setMetier(metierParam);
  // Pré-remplissage du champ Secteur
  if (metierParam) {
    setFormData(prev => ({ ...prev, secteur: capitalizeMetier(metierParam) }));
  }
}, []);
```

### Note Migration
⚠️ Le fichier actuel est `ConfluenceReservationPage_BATCH44.tsx`. Le suffixe "_BATCH44" indique la version avec validation avancée et états visuels.

---

## 10. 404

**Fichier** : `Confluence404Page.tsx`  
**Route** : `/404` (auto)  
**Objectif** : Retour navigation

### Structure (1 section)

#### Section Unique (Fond Gris, centré)
- **Icon** : AlertCircle (Or/Cuivre, très large w-24 h-24)
- **Code** : "404"
- **H1** : "Page non trouvée"
- **Texte** : "Désolé, la page que vous cherchez n'existe pas ou a été déplacée."
- **2 CTAs** :
  - "Retour à l'accueil" (Vert)
  - "Audit Gratuit" (Or/Cuivre outline)

### Colors
- Background : #F9FAFB
- Icon : #D1A65E
- Code "404" : #D1A65E (très large text-9xl)

### Responsive
- Hero : `pt-28 lg:pt-20` (BATCH 19A)
- Icon : w-16 md:w-24
- CTAs : `w-full sm:w-auto`

---

## 11. LOGO SHOWCASE

**Fichier** : `ConfluenceLogoShowcase.tsx`  
**Route** : `/logo-showcase`  
**Objectif** : Présentation des 3 variants du logo

### Structure (4 sections)

#### S1 : Hero
- **H1** : "Logo Confluence Digitale"
- **Sous-titre** : "3 variations pour tous les fonds"

#### S2 : Variant 1 - Dark (Fond Blanc)
- **Badge** : "Variant Dark"
- **Logo** : `colorScheme="dark"`
- **Couleurs** : Noir (#1A1A1A) + Or/Cuivre (#D1A65E)
- **Usage** : Fonds clairs (blanc, gris clair)

#### S3 : Variant 2 - Gold White (Fond Noir Mat)
- **Badge** : "Variant Gold White"
- **Logo** : `colorScheme="gold-white"`
- **Couleurs** : Blanc (#FFFFFF) + Or/Cuivre (#D1A65E)
- **Usage** : Footer, fonds sombres

#### S4 : Variant 3 - Light (Fond Gris foncé)
- **Badge** : "Variant Light"
- **Logo** : `colorScheme="light"`
- **Couleurs** : Blanc (#FFFFFF) uniquement
- **Usage** : Fonds très sombres

### Props Logo
```tsx
<ConfluenceLogo 
  colorScheme="dark" | "gold-white" | "light"
  className="h-8" // Hauteur customisable
/>
```

---

## 12. POLITIQUE CONFIDENTIALITÉ

**Fichier** : `ConfluencePolitiqueConfidentialitePage.tsx`  
**Route** : `/politique-confidentialite`  
**Objectif** : RGPD (conformité légale)

### Structure (10+ sections)

#### S1 : Hero
- **Badge** : "Politique de Confidentialité" (Rouge Bordeaux)
- **H1** : "Politique de Confidentialité"
- **Sous-titre** : "Dernière mise à jour : [Date]"

#### S2-10 : Sections Légales (Fond Blanc)
1. **Collecte des données**
   - Données collectées (nom, email, téléphone)
   - Finalité (recontact, devis)
   
2. **Utilisation des données**
   - Traitement formulaires
   - Envoi emails
   - Amélioration services

3. **Conservation des données**
   - Durée : 3 ans
   - Archivage : 5 ans

4. **Droits RGPD**
   - Droit d'accès
   - Droit de rectification
   - Droit à l'effacement
   - Droit à la portabilité

5. **Cookies**
   - Types (essentiels, analytics, marketing)
   - Gestion consentement
   - Durée conservation

6. **Sécurité**
   - Mesures techniques
   - Hébergement sécurisé
   - Chiffrement SSL

7. **Partage données**
   - Pas de vente
   - Sous-traitants (hébergeur)
   - Transferts hors UE (non)

8. **Contact DPO**
   - Email : dpo@confluence-digitale.fr
   - Formulaire contact

9. **Modifications politique**
   - Notification changements
   - Date dernière MAJ

10. **Loi applicable**
    - Droit français
    - RGPD

### Colors
- Badge : #A32E3A (Rouge Bordeaux, contractuel)
- Liens : #D1A65E
- Icons : #10b981

### Responsive
- Hero : `pt-28 lg:pt-20` (BATCH 19A)
- Texte : clamp() automatique
- Liens : underline au hover

---

## 13. MENTIONS LÉGALES

**Fichier** : `ConfluenceMentionsLegalesPage.tsx`  
**Route** : `/mentions-legales`  
**Objectif** : Identité légale (obligation)

### Structure (8 sections)

#### S1 : Hero
- **Badge** : "Mentions Légales" (Rouge Bordeaux)
- **H1** : "Mentions Légales"
- **Sous-titre** : "Informations légales du site"

#### S2-8 : Sections Légales (Fond Blanc)

1. **Éditeur du site**
   - Raison sociale : Confluence Digitale
   - Forme juridique : [À compléter]
   - SIRET : [À compléter]
   - Adresse : Montayral, 47500
   - Email : contact@confluence-digitale.fr
   - Téléphone : 06 XX XX XX XX

2. **Directeur de publication**
   - Nom : [Fondateur]
   - Fonction : Gérant

3. **Hébergeur**
   - Nom : [À compléter]
   - Adresse : [À compléter]
   - Contact : [À compléter]

4. **Propriété intellectuelle**
   - Droits réservés
   - Marque Confluence Digitale
   - Contenus protégés

5. **Crédits**
   - Photos : Unsplash (voir Attributions.md)
   - Icons : Lucide React
   - Fonts : Google Fonts

6. **Cookies**
   - Lien vers Politique Confidentialité
   - Bannière RGPD

7. **Contact**
   - Formulaire
   - Email
   - Téléphone

8. **Loi applicable**
   - Droit français
   - Tribunal compétent

### Colors
- Badge : #A32E3A
- Liens : #D1A65E (hover underline)
- Sections : Alternance #FFFFFF / #F9FAFB

### Responsive
- Hero : `pt-28 lg:pt-20`
- Text : responsive automatique

---

## 14. CGV

**Fichier** : `ConfluenceCGVPage.tsx`  
**Route** : `/cgv`  
**Objectif** : Conditions Générales de Vente

### Structure (12+ sections)

#### S1 : Hero
- **Badge** : "CGV" (Rouge Bordeaux)
- **H1** : "Conditions Générales de Vente"
- **Sous-titre** : "Applicables à compter du [Date]"

#### S2-12 : Articles CGV (Fond Blanc)

1. **Article 1 : Objet**
   - Prestation : Création site web
   - Garantie : 100/100 PageSpeed

2. **Article 2 : Prix**
   - Setup : 0€ HT
   - Abonnement : 149€ HT/mois
   - TVA : 20% (France)

3. **Article 3 : Engagement**
   - Durée minimale : 24 mois
   - Tacite reconduction : Non
   - Résiliation : Lettre recommandée (1 mois préavis)

4. **Article 4 : Modalités de paiement**
   - Prélèvement mensuel
   - Échéance : 1er du mois
   - Retard : Pénalités 3x taux BCE + 40€

5. **Article 5 : Prestations incluses**
   - Création site
   - Hébergement
   - Maintenance
   - Support
   - Formation
   - Updates

6. **Article 6 : Garantie 100/100**
   - Score PageSpeed contractuel
   - Pénalité si non-atteint : -50€/mois
   - Vérification : Google PageSpeed Insights

7. **Article 7 : Exclusivité territoriale**
   - Zone définie au contrat
   - Clause d'exclusivité
   - Durée : Pendant toute la collaboration

8. **Article 8 : Obligations du client**
   - Fournir contenus (textes, images)
   - Respecter délais validation
   - Payer factures

9. **Article 9 : Propriété intellectuelle**
   - Code : Confluence Digitale
   - Contenus : Client
   - Licence d'utilisation

10. **Article 10 : Responsabilité**
    - Obligation de moyens
    - Force majeure
    - Limitations

11. **Article 11 : Résiliation**
    - Après 24 mois : Préavis 1 mois
    - Manquement grave : Immédiate
    - Restitution accès

12. **Article 12 : Loi applicable**
    - Droit français
    - Tribunal : Agen

### Colors
- Badge : #A32E3A (contractuel)
- Articles : Numérotation #1A1A1A
- Liens : #D1A65E
- Highlights prix : #D1A65E

### Responsive
- Hero : `pt-28 lg:pt-20`
- Articles : max-w-4xl centrés

---

## 📊 RÉCAPITULATIF GLOBAL

### Statistiques

| Métrique | Valeur |
|----------|--------|
| **Total pages** | 14 |
| **Pages conversion** | 3 (Contact, Audit, Réservation) |
| **Formulaires** | 3 |
| **Pages légales** | 3 |
| **Sections totales** | ~70 |
| **Composants réutilisés** | 15+ |

### Parcours Utilisateur Principal

```
Landing Page
  ↓ (CTA "Audit Gratuit")
Audit Gratuit Page
  ↓ (Formulaire soumis)
Modal Succès
  ↓ (Retour accueil)
Email de confirmation
```

### Parcours Alternatifs

```
Landing → Méthode → Audit Gratuit
Landing → Offre → Audit Gratuit
Landing → Exclusivité → Réservation → Audit Gratuit
Landing → Concurrents → Audit Gratuit
Landing → Études de Cas → Audit Gratuit
```

### Hiérarchie de Conversion

| Niveau | Pages | Objectif |
|--------|-------|----------|
| **1 - Conversion finale** | Audit Gratuit | Capture lead |
| **2 - Conversion secondaire** | Réservation, Contact | Capture lead spécifique |
| **3 - Persuasion** | Méthode, Offre, Exclusivité, Concurrents | Rassurer, convaincre |
| **4 - Preuve** | Études de Cas | Preuve sociale |
| **5 - Support** | 404, Logo | Navigation, branding |
| **6 - Légal** | CGV, Mentions, Politique | Conformité |

---

## 🎨 DESIGN PATTERNS RÉCURRENTS

### Pattern 1 : Hero Section
**Toutes les pages sauf 404**
```tsx
<section className="pt-28 lg:pt-20 pb-16 px-4 bg-[#F9FAFB]">
  <Badge colorScheme="gold">Texte Badge</Badge>
  <h1>Titre Principal</h1>
  <p>Sous-titre</p>
  <CTAs />
</section>
```

### Pattern 2 : Section Alternée
```tsx
// Blanc
<section className="py-16 md:py-24 px-4 bg-white">
  <Container>...</Container>
</section>

// Gris
<section className="py-16 md:py-24 px-4 bg-[#F9FAFB]">
  <Container>...</Container>
</section>
```

### Pattern 3 : CTA Final
**Toutes les pages**
```tsx
<ConfluenceFinalCTA 
  onNavigate={handleNavigation}
  ctaText="Audit Gratuit"
  ctaPage="audit-gratuit"
/>
```

### Pattern 4 : Formulaire
**Contact, Audit, Réservation**
```tsx
<form className="space-y-6" onSubmit={handleSubmit}>
  <Input label="..." required />
  <!-- Autres champs -->
  <Checkbox label="RGPD" required />
  <Button 
    disabled={!isValid} 
    className={isValid ? 'bg-[#10b981]' : 'bg-gray-300'}
  >
    CTA
  </Button>
</form>
```

---

## 🎯 CHECKLIST PAR PAGE

Avant de valider une page :

- [ ] Hero : `pt-28 lg:pt-20` (BATCH 19A)
- [ ] Sections : `py-16 md:py-24`
- [ ] Container : `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- [ ] Formulaires : `space-y-6` (BATCH 20B)
- [ ] Colors : Respecte palette V6.7
- [ ] Fonts : Playfair 400 (titres), Inter 400 (corps)
- [ ] Animations : Ease `[0.22, 1, 0.36, 1]`
- [ ] Responsive : 1→2→3 colonnes
- [ ] CTAs : Vert #10b981 ou Or/Cuivre #D1A65E
- [ ] Footer : Composant `ConfluenceFooterV6_2`
- [ ] Header : Composant `ConfluenceHeaderV6_7`

---

**Dernière mise à jour** : 7 novembre 2025 (V6.7.2)  
**Maintenu par** : Équipe Confluence Digitale  
**Pour** : UX/UI Designer