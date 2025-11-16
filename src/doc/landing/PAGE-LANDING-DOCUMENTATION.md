# 📄 DOCUMENTATION - PAGE LANDING (Accueil)
## Confluence Digitale - Application Design System V6.7

---

## ⚠️ NOTE IMPORTANTE - MIGRATION ASTRO

**Cette documentation décrit la version React pure (SPA) - obsolète**

Pour la **version Astro actuelle** (migration frontend), consultez :
👉 **`/migration-frontend/05D_TEMPLATE_PAGE_LANDING.md`**

**Différences clés** :
- **Architecture** : React pur → Astro + React Islands
- **Fichier page** : `/pages/ConfluenceLandingPage.tsx` → `/src/pages/index.astro`
- **Composants** : Monolithique → 7 sections séparées (.astro + .tsx)
- **Hydratation** : N/A → Sélective (`client:visible` pour FAQ et CTA)
- **Sections** : Toutes React → 5 Astro statiques + 2 React interactives

**Cette documentation reste valide pour** :
- Structure visuelle (7 sections)
- Copywriting (titres, sous-titres, textes, CTA)
- Data arrays (otherAgencies, confluenceOffers, painPoints, solutions, proofStats)
- Animations (Motion, délais, transitions)
- Design System V6.7
- Parcours utilisateur

---

## 📋 RÉFÉRENCE DESIGN SYSTEM

**⚠️ Pour les éléments génériques du Design System V6.7** (palette couleurs, typographie, ombres, espacements, animations, responsive, accessibilité), consultez :
👉 `/doc/offre/PAGE-OFFRE-DOCUMENTATION-COMPLETE.md`

Cette documentation se concentre **UNIQUEMENT** sur les spécificités de la page Landing.

---

## 1. VUE D'ENSEMBLE

### Objectif de la page
Page d'accueil principale de Confluence Digitale. Présente le problème (sites lents/invisibles), la solution (Performance 100/100 + Autonomie), et convertit vers l'Audit Gratuit.

### Positionnement stratégique
- **Hook principal** : "Devenez visible. Vraiment visible."
- **USP** : Performance 100/100 PageSpeed garantie
- **Cible** : TPE/PME frustrées par leur agence web actuelle
- **Conversion** : CTA "Audit Gratuit" récurrent

### Fichier source
`/pages/ConfluenceLandingPage.tsx`

---

## 2. STRUCTURE UNIQUE DE LA PAGE

### Architecture des sections

```
┌─────────────────────────────────────────┐
│ ConfluenceHeaderV6_7 (Fixed)            │
├─────────────────────────────────────────┤
│ 1. HERO FULL-SCREEN                     │
│    - Titre + Sous-titre                 │
│    - CTA principal                      │
│    - Scroll indicator (Mouse icon)      │
├─────────────────────────────────────────┤
│ 2. SECTION CONTRASTE                    │
│    - Tableau comparatif Nous vs Autres  │
├─────────────────────────────────────────┤
│ 3. PAIN POINTS (Points de douleur)      │
│    - Liste des frustrations TPE         │
├─────────────────────────────────────────┤
│ 4. SOLUTIONS (3 piliers)                │
│    - Grille 3 cartes                    │
├─────────────────────────────────────────┤
│ 5. SOCIAL PROOF                         │
│    - Chiffres clés + résultats          │
├─────────────────────────────────────────┤
│ 6. FAQ                                  │
│    - Composant ConfluenceFAQ            │
├─────────────────────────────────────────┤
│ 7. CTA FINAL                            │
│    - Bloc conversion ultime             │
├─────────────────────────────────────────┤
│ ConfluenceFooterV6_2                    │
└─────────────────────────────��───────────┘
```

---

## 3. SECTIONS SPÉCIFIQUES

### 3.1. HERO FULL-SCREEN

#### Particularité
Seule page avec Hero en `min-h-screen` (plein écran).

#### Layout
```tsx
<section 
  ref={heroRef}
  className="relative min-h-screen flex items-center justify-center pt-28 lg:pt-32 pb-16 px-4 overflow-hidden"
>
```

#### Titre principal
```tsx
<h1 
  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#1A1A1A] mb-6"
  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
>
  Devenez visible.
  <br />
  <span className="text-[#D1A65E]">Vraiment</span> visible.
</h1>
```

**Tailles responsive** :
- Mobile : `text-5xl` (48px)
- md : `text-6xl` (60px)
- lg : `text-7xl` (72px)
- xl : `text-8xl` (96px)

#### Sous-titre avec score 100/100
```tsx
<p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-16">
  Nous garantissons la performance. <span className="text-[#10b981]">100/100</span>.<br />
  C'est la meilleure base pour dominer votre marché local sur Google.
</p>
```

**Note** : Le score `100/100` est en vert (#10b981) pour impact visuel maximum.

#### Scroll indicator (unique à cette page)
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={heroVisible ? { opacity: 1 } : {}}
  transition={{ delay: 1.2, duration: 0.8 }}
  className="mt-16"
>
  <button
    onClick={handleScrollToNextSection}
    className="mx-auto flex flex-col items-center gap-2 text-gray-500 hover:text-[#D1A65E] transition-colors duration-300 cursor-pointer"
    aria-label="Scroll to next section"
  >
    <span className="text-sm">Découvrir</span>
    <Mouse className="w-6 h-6 animate-bounce" strokeWidth={1.5} />
  </button>
</motion.div>
```

**Comportement** :
- Apparaît avec délai de 1.2s après le Hero
- Animation bounce sur l'icône Mouse
- Scroll smooth vers la section Contraste

**Fonction de scroll**
```tsx
const handleScrollToNextSection = () => {
  const contrastSection = document.getElementById('contrast-section');
  if (contrastSection) {
    contrastSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
```

---

### 3.2. SECTION CONTRASTE (Comparatif)

#### Objectif
Créer un contraste radical entre "Autres agences" (rouges) et "Nous" (verts).

#### ID de section
```tsx
<section 
  id="contrast-section"
  ref={contrastRef}
  className="..."
>
```

#### Structure du tableau comparatif
```
┌──────────────────────────────────────────────┐
│         Autres Agences Web     │    Nous     │
├────────────────────────────────┼─────────��───┤
│ ❌ Promesses floues            │ ✓ Garantie  │
│ ❌ Site lent (4-8s)            │ ✓ < 1s      │
│ ❌ Dépendance totale           │ ✓ Autonomie │
│ ❌ Support payant              │ ✓ Inclus    │
└──────────────────────────────────────────────┘
```

#### Code du tableau
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
  {/* Colonne Gauche - Autres agences (Rouge) */}
  <div className="rounded-2xl overflow-hidden relative p-8 bg-white border border-red-200">
    <div className="text-center mb-6">
      <h3 className="text-2xl md:text-3xl text-red-600 mb-2">
        Autres Agences Web
      </h3>
      <p className="text-sm text-gray-600">Ce que vous subissez actuellement</p>
    </div>

    <ul className="space-y-4">
      {otherAgencies.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Colonne Droite - Nous (Vert) */}
  <div 
    className="rounded-2xl overflow-hidden relative p-8 bg-white border-2 border-[#10b981]"
    style={{ boxShadow: '0 4px 24px 0 rgba(16, 185, 129, 0.12)' }}
  >
    <div className="text-center mb-6">
      <h3 className="text-2xl md:text-3xl text-[#10b981] mb-2">
        Confluence Digitale
      </h3>
      <p className="text-sm text-gray-600">Notre engagement contractuel</p>
    </div>

    <ul className="space-y-4">
      {confluenceOffers.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>
```

#### Data du tableau
```tsx
const otherAgencies = [
  "Promesses vagues et floues",
  "Site lent (4 à 8 secondes de chargement)",
  "Position Google aléatoire",
  "Dépendance totale à l'agence",
  "Support technique payant en supplément"
];

const confluenceOffers = [
  "Garantie Performance 100/100 PageSpeed",
  "Chargement < 1 seconde garanti",
  "Optimisation pour être trouvé sur Google (Page 1 en 90 jours)",
  "Autonomie complète (interface sans code)",
  "Support technique illimité inclus"
];
```

**Asymétrie visuelle** :
- Colonne gauche : Bordure rouge fine, pas de shadow accent
- Colonne droite : Bordure verte épaisse (border-2), shadow verte

---

### 3.3. PAIN POINTS (Points de douleur)

#### Objectif
Lister les frustrations concrètes que vivent les TPE/PME avec leur agence actuelle.

#### Layout
```tsx
<section 
  ref={painRef}
  className="relative py-20 md:py-32 px-4 bg-white"
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={painVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
        >
          Vous avez un site web.<br />
          Mais <span className="text-red-600">rien ne se passe</span>.
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          Ces problèmes vous parlent ?
        </p>
      </motion.div>

      {/* Liste des pain points */}
      <div className="space-y-4">
        {painPoints.map((pain, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={painVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-start gap-4 p-6 rounded-xl bg-red-50 border border-red-200"
          >
            <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" strokeWidth={2} />
            <p className="text-base md:text-lg text-gray-800">{pain}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
```

#### Data Pain Points
```tsx
const painPoints = [
  "Site extrêmement lent (8-10 secondes de chargement)",
  "Invisible sur Google (Page 3 ou 4)",
  "Dépendance totale à votre agence web",
  "Impossible de modifier quoi que ce soit sans payer"
];
```

**Animation spécifique** :
- Slide-in depuis la gauche (`x: -30`)
- Délai progressif (`delay: index * 0.1`)
- Background rouge clair (`bg-red-50`) pour amplifier la douleur

---

### 3.4. SOLUTIONS (3 piliers)

#### Objectif
Présenter les 3 piliers de valeur de Confluence Digitale.

#### Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
  {solutions.map((solution, index) => {
    const Icon = solution.icon;
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={solutionVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
      >
        {/* Carte solution */}
      </motion.div>
    );
  })}
</div>
```

#### Data Solutions
```tsx
const solutions = [
  {
    icon: Gauge,
    title: "Performance 100/100",
    description: "Score PageSpeed garanti. Site ultra-rapide qui convertit vraiment."
  },
  {
    icon: Shield,
    title: "Autonomie Totale",
    description: "Vous modifiez votre site quand vous voulez. Sans coder. Sans dépendre de personne."
  },
  {
    icon: Clock,
    title: "Support Illimité",
    description: "Vous n'êtes jamais seul. Support technique réactif inclus dans le MRR."
  }
];
```

**Grille responsive** : 1 colonne sur mobile, 3 colonnes sur desktop.

---

### 3.5. SOCIAL PROOF

#### Objectif
Montrer des chiffres concrets et résultats mesurables.

#### Structure
```tsx
<section 
  ref={proofRef}
  className="relative py-20 md:py-32 px-4 bg-[#F9FAFB]"
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      {/* Titre */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={proofVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-4"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
        >
          Des <span className="text-[#10b981]">Résultats</span> Mesurables
        </h2>
      </motion.div>

      {/* Grille de stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {proofStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={proofVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="text-center p-8 rounded-2xl bg-white border border-[#E5E7EB]"
            style={{ boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <div 
              className="text-5xl md:text-6xl text-[#D1A65E] mb-4"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              {stat.number}
            </div>
            <p className="text-lg text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
```

#### Data Stats (exemple)
```tsx
const proofStats = [
  { number: "100/100", label: "Score PageSpeed garanti" },
  { number: "< 1s", label: "Temps de chargement" },
  { number: "90j", label: "Pour atteindre Page 1 Google" }
];
```

**Animation spécifique** : Scale-in (`scale: 0.9 → 1`) pour effet "pop".

---

### 3.6. FAQ

#### Composant réutilisable
```tsx
<section className="relative py-20 md:py-32 px-4 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <ConfluenceFAQ />
    </div>
  </div>
</section>
```

**Voir documentation** : `/components/ConfluenceFAQ.tsx`

---

### 3.7. CTA FINAL

#### Objectif
Bloc de conversion ultime avant le Footer.

#### Layout
```tsx
<section 
  ref={ctaRef}
  className="relative py-20 md:py-32 px-4 bg-[#F9FAFB]"
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h2 
        className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6"
        style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
      >
        Prêt à <span className="text-[#10b981]">Dominer</span> Votre Marché ?
      </h2>

      <p className="text-xl md:text-2xl text-gray-700 mb-12">
        Demandez votre audit gratuit. Réponse sous 24h.
      </p>

      <Button
        onClick={() => handleNavigation('audit-gratuit')}
        className="bg-[#10b981] hover:bg-[#059669] text-white px-12 py-6 text-xl rounded-2xl hover:scale-105 transition-all duration-300"
        style={{ boxShadow: '0 8px 24px 0 rgba(16, 185, 129, 0.2)' }}
      >
        Je Demande Mon Audit Gratuit
        <ArrowRight className="ml-3 w-6 h-6" strokeWidth={2} />
      </Button>

      <p className="text-sm text-gray-500 mt-6">
        Audit gratuit • Réponse sous 24h • Sans engagement initial
      </p>
    </motion.div>
  </div>
</section>
```

---

## 4. ÉLÉMENTS UNIQUES

### 4.1. Hook useScrollAnimation

**Utilisé pour chaque section** :
```tsx
const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
const { ref: contrastRef, isVisible: contrastVisible } = useScrollAnimation();
const { ref: painRef, isVisible: painVisible } = useScrollAnimation();
const { ref: solutionRef, isVisible: solutionVisible } = useScrollAnimation();
const { ref: proofRef, isVisible: proofVisible } = useScrollAnimation();
const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
```

### 4.2. Scroll Indicator

**Unique à la page Landing** :
- Icône Mouse avec animation bounce
- Smooth scroll vers section suivante
- Apparition avec délai de 1.2s

### 4.3. Asymétrie visuelle Contraste

**Colonne "Autres agences"** :
- Bordure rouge fine
- Pas de shadow accent
- Icône X rouge

**Colonne "Nous"** :
- Bordure verte épaisse (border-2)
- Shadow verte accent
- Icône CheckCircle2 verte

### 4.4. Pain Points en rouge

**Unique à cette page** :
- Background rouge clair (`bg-red-50`)
- Bordure rouge (`border-red-200`)
- Animation slide-in depuis la gauche

---

## 5. COPYWRITING SPÉCIFIQUE

### 5.1. Hero
- **Titre** : "Devenez visible. **Vraiment** visible."
- **Sous-titre** : Score **100/100** en vert pour impact

### 5.2. Pain Points
- **Titre** : "Mais **rien ne se passe**." (rouge)
- **Tone** : Brutal, direct, empathique

### 5.3. CTA Final
- **Titre** : "Prêt à **Dominer** Votre Marché ?"
- **Bouton** : "Je Demande Mon Audit Gratuit"

---

## 6. PARCOURS UTILISATEUR

```
Arrivée sur Hero (plein écran)
    ↓
Scroll indicator (découverte)
    ↓
Tableau Contraste (prise de conscience)
    ↓
Pain Points (identification du problème)
    ↓
Solutions (découverte de l'offre)
    ↓
Social Proof (validation)
    ↓
FAQ (objections handling)
    ↓
CTA Final (conversion)
    ↓
Footer (navigation secondaire)
```

---

## 7. FICHIERS LIÉS

### Composants
- `/components/ConfluenceHeaderV6_7.tsx`
- `/components/ConfluenceFooterV6_2.tsx`
- `/components/ConfluenceFAQ.tsx`
- `/components/ui/button.tsx`

### Hooks
- `/hooks/useScrollAnimation.ts`

### Pages connexes
- `/pages/ConfluenceAuditGratuitPage.tsx` (destination CTA)
- `/pages/ConfluenceOffrePage.tsx` (navigation secondaire)

---

## 8. DIFFÉRENCES vs AUTRES PAGES

| Élément | Page Landing | Autres pages |
|---------|-------------|--------------|
| **Hero height** | `min-h-screen` | `min-h-[60vh]` |
| **Scroll indicator** | ✅ Oui (Mouse icon) | ❌ Non |
| **Tableau comparatif** | ✅ Oui (Nous vs Autres) | ❌ Non |
| **Pain Points rouge** | ✅ Oui (bg-red-50) | ❌ Non |
| **Grille 3 colonnes** | ✅ Oui (Solutions) | Varie (2 ou 4) |
| **FAQ composant** | ✅ Oui | ❌ Non (sauf pages spécifiques) |

---

**FIN DU DOCUMENT**