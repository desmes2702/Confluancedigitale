# 📄 DOCUMENTATION - PAGE ÉTUDES DE CAS
## Confluence Digitale - Application Design System V6.7

---

## 📋 RÉFÉRENCE DESIGN SYSTEM

**⚠️ Pour les éléments génériques du Design System V6.7**, consultez :
👉 `/doc/offre/PAGE-OFFRE-DOCUMENTATION-COMPLETE.md`

Cette documentation se concentre **UNIQUEMENT** sur les spécificités de la page Études de Cas.

---

## 1. VUE D'ENSEMBLE

### Objectif de la page
Prouver la crédibilité avec des résultats concrets et mesurables de clients réels. Social proof maximal.

### Positionnement stratégique
- **Hook principal** : "Du Invisible au Visible sur Google"
- **USP** : Résultats en moins de 14 jours
- **Cible** : TPE/PME sceptiques qui veulent voir des preuves
- **Conversion** : CTA "Audit Gratuit" après démonstration de crédibilité

### Fichier source
`/pages/ConfluenceEtudesDeCasPage.tsx`

---

## 2. STRUCTURE UNIQUE DE LA PAGE

### Architecture des sections

```
┌─────────────────────────────────────────┐
│ ConfluenceHeaderV6_7 (Fixed)            │
├─────────────────────────────────────────┤
│ 1. HERO                                 │
│    - Badge "Résultats Prouvés"          │
│    - Titre (Invisible → Visible)        │
├─────────────────────────────────────────┤
│ 2. ÉTUDES DE CAS (BG: White)            │
│    - Carte étude Marc le Couvreur       │
│    - Carte étude Julie la Plombière     │
│    (Format Before/After détaillé)       │
├─────────────────────────────────────────┤
│ 3. CTA FINAL (BG: Gris Clair)           │
│    - "Obtenez les Mêmes Résultats"      │
├─────────────────────────────────────────┤
│ ConfluenceFooterV6_2                    │
└─────────────────────────────────────────┘
```

---

## 3. DATA STRUCTURE - CASE STUDIES

### Interface CaseStudy
```tsx
interface CaseStudy {
  id: string;
  name: string;
  sector: string;
  location: string;
  before: {
    score: number;
    loadTime: string;
    googleRank: string;
    calls: string;
  };
  after: {
    score: number;
    loadTime: string;
    googleRank: string;
    calls: string;
  };
  testimonial: string;
  results: {
    traffic: string;
    conversion: string;
    delivery: string;
  };
}
```

### Données actuelles
```tsx
const caseStudies = [
  {
    id: "marc-couvreur",
    name: "Marc le Couvreur",
    sector: "Couverture & Toiture",
    location: "Agen (47)",
    before: {
      score: 32,
      loadTime: "8.2s",
      googleRank: "Page 3",
      calls: "4-5/mois"
    },
    after: {
      score: 100,
      loadTime: "0.9s",
      googleRank: "1ère page",
      calls: "15-20/mois"
    },
    testimonial: "En 14 jours, mon site cartonnait sur Google. Le téléphone n'arrête pas de sonner. Et je peux tout modifier moi-même !",
    results: {
      traffic: "+320%",
      conversion: "+250%",
      delivery: "14 jours"
    }
  },
  {
    id: "julie-plombier",
    name: "Julie la Plombière",
    sector: "Plomberie & Chauffage",
    location: "Villeneuve-sur-Lot (47)",
    before: {
      score: 28,
      loadTime: "9.5s",
      googleRank: "Page 4",
      calls: "3-4/mois"
    },
    after: {
      score: 100,
      loadTime: "0.8s",
      googleRank: "Top 3",
      calls: "22-25/mois"
    },
    testimonial: "Je ne pensais pas que ça changerait autant. Mon téléphone sonne en continu. Je peux enfin montrer mes réalisations en temps réel !",
    results: {
      traffic: "+450%",
      conversion: "+550%",
      delivery: "12 jours"
    }
  }
];
```

---

## 4. SECTIONS SPÉCIFIQUES

### 4.1. HERO

#### Badge "Résultats Prouvés"
```tsx
<div 
  className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
  style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.06)' }}
>
  <Target className="w-4 h-4 md:w-5 md:h-5 text-[#10b981]" strokeWidth={1.5} />
  <span className="text-sm md:text-base text-[#1A1A1A]">Résultats Prouvés</span>
</div>
```

**Icône** : `Target` (cible) en vert pour symboliser les objectifs atteints.

#### Titre avec contraste couleur
```tsx
<h1 
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-4 md:mb-6"
  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
>
  Ils Sont Passés du <span className="text-[#A32E3A]">Invisible</span>
  <br />
  au <span className="text-[#10b981]">Visible sur Google</span>
</h1>
```

**Couleurs** :
- "Invisible" : Rouge Bordeaux (#A32E3A) → Problème
- "Visible sur Google" : Vert (#10b981) → Solution

#### Sous-titre avec accent
```tsx
<p className="text-base md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto">
  Découvrez comment nos clients TPE/PME ont transformé leur visibilité<br className="hidden md:block" />
  en <span className="text-[#D1A65E]">moins de 14 jours</span>.
</p>
```

**Accent** : "moins de 14 jours" en Or/Cuivre (#D1A65E) pour mettre en avant la rapidité.

---

### 4.2. CARTES ÉTUDES DE CAS

#### Structure d'une carte
```
┌──────────────────────────────────────────────────────┐
│ Header (BG: Gris Clair #F9FAFB)                      │
│ • Nom client + secteur + localisation                │
├──────────────────────────────────────────────────────┤
│ Comparatif Before/After (2 colonnes)                 │
│                                                      │
│ AVANT               │         APRÈS                  │
│ Score: 32 (rouge)   │   Score: 100 (vert)           │
│ Temps: 8.2s         │   Temps: 0.9s                 │
│ Google: Page 3      │   Google: 1ère page           │
│ Appels: 4-5/mois    │   Appels: 15-20/mois          │
├──────────────────────────────────────────────────────┤
│ Témoignage (encadré Or/Cuivre)                       │
│ "En 14 jours, mon site cartonnait..."                │
├──────────────────────────────────────────────────────┤
│ Résultats chiffrés (3 badges)                        │
│ +320% Traffic │ +250% Conversion │ 14 jours          │
└──────────────────────────────────────────────────────┘
```

#### Code Layout
```tsx
<div 
  className="rounded-xl md:rounded-2xl overflow-hidden relative bg-white border border-[#E5E7EB]"
  style={{ boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.04)' }}
>
  {/* Header Carte */}
  <div className="bg-[#F9FAFB] border-b border-[#E5E7EB] p-6 md:p-8">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
      <div>
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] mb-2"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
        >
          {study.name}
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          {study.sector} • {study.location}
        </p>
      </div>
      
      {/* Badge Secteur */}
      <div className="inline-flex items-center gap-2 bg-white border border-[#D1A65E]/30 rounded-full px-4 py-2">
        <Zap className="w-4 h-4 text-[#D1A65E]" strokeWidth={1.5} />
        <span className="text-sm text-[#1A1A1A]">{study.sector}</span>
      </div>
    </div>
  </div>

  {/* Body - Before/After */}
  <div className="p-6 md:p-8 lg:p-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
      {/* Colonne AVANT (Rouge) */}
      <div>
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <X className="w-5 h-5 text-red-600" strokeWidth={2} />
          <h3 className="text-xl md:text-2xl text-red-600">Avant</h3>
        </div>
        
        <div className="space-y-4">
          {/* Score PageSpeed */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-red-50 border border-red-200">
            <span className="text-sm md:text-base text-gray-700">Score PageSpeed</span>
            <span 
              className="text-2xl md:text-3xl text-red-600"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              {study.before.score}
            </span>
          </div>

          {/* Temps de chargement */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-red-50 border border-red-200">
            <span className="text-sm md:text-base text-gray-700">Temps de chargement</span>
            <span className="text-lg md:text-xl text-red-600">{study.before.loadTime}</span>
          </div>

          {/* Position Google */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-red-50 border border-red-200">
            <span className="text-sm md:text-base text-gray-700">Position Google</span>
            <span className="text-lg md:text-xl text-red-600">{study.before.googleRank}</span>
          </div>

          {/* Appels/mois */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-red-50 border border-red-200">
            <span className="text-sm md:text-base text-gray-700">Appels clients/mois</span>
            <span className="text-lg md:text-xl text-red-600">{study.before.calls}</span>
          </div>
        </div>
      </div>

      {/* Colonne APRÈS (Vert) */}
      <div>
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <CheckCircle2 className="w-5 h-5 text-[#10b981]" strokeWidth={2} />
          <h3 className="text-xl md:text-2xl text-[#10b981]">Après</h3>
        </div>
        
        <div className="space-y-4">
          {/* Score PageSpeed */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-[#10b981]/10 border border-[#10b981]/30">
            <span className="text-sm md:text-base text-gray-700">Score PageSpeed</span>
            <span 
              className="text-2xl md:text-3xl text-[#10b981]"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              {study.after.score}
            </span>
          </div>

          {/* (Même structure pour les 3 autres métriques) */}
        </div>
      </div>
    </div>

    {/* Témoignage */}
    <div 
      className="mt-8 md:mt-12 p-6 md:p-8 rounded-xl bg-[#D1A65E]/5 border-l-4 border-[#D1A65E]"
    >
      <p className="text-base md:text-lg text-gray-800 italic leading-relaxed">
        "{study.testimonial}"
      </p>
      <p className="text-sm md:text-base text-[#D1A65E] mt-3">
        — {study.name}
      </p>
    </div>

    {/* Résultats chiffrés */}
    <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
      <div className="text-center p-4 md:p-6 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB]">
        <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#10b981] mx-auto mb-2" strokeWidth={1.5} />
        <div 
          className="text-2xl md:text-3xl text-[#10b981] mb-1"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
        >
          {study.results.traffic}
        </div>
        <p className="text-sm text-gray-600">Trafic organique</p>
      </div>

      <div className="text-center p-4 md:p-6 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB]">
        <Gauge className="w-6 h-6 md:w-8 md:h-8 text-[#10b981] mx-auto mb-2" strokeWidth={1.5} />
        <div 
          className="text-2xl md:text-3xl text-[#10b981] mb-1"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
        >
          {study.results.conversion}
        </div>
        <p className="text-sm text-gray-600">Taux de conversion</p>
      </div>

      <div className="text-center p-4 md:p-6 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB]">
        <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#D1A65E] mx-auto mb-2" strokeWidth={1.5} />
        <div 
          className="text-2xl md:text-3xl text-[#D1A65E] mb-1"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
        >
          {study.results.delivery}
        </div>
        <p className="text-sm text-gray-600">Délai de livraison</p>
      </div>
    </div>
  </div>
</div>
```

---

### 4.3. CTA FINAL

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
        Vous Voulez les <span className="text-[#10b981]">Mêmes Résultats</span> ?
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
        Audit gratuit • Réponse sous 24h • Résultats comme Marc et Julie
      </p>
    </motion.div>
  </div>
</section>
```

---

## 5. ÉLÉMENTS UNIQUES

### 5.1. Comparatif Before/After asymétrique

**Colonne AVANT (Rouge)** :
- Background : `bg-red-50`
- Bordure : `border-red-200`
- Texte : `text-red-600`
- Icône : `X` rouge

**Colonne APRÈS (Vert)** :
- Background : `bg-[#10b981]/10`
- Bordure : `border-[#10b981]/30`
- Texte : `text-[#10b981]`
- Icône : `CheckCircle2` verte

### 5.2. Bloc Témoignage

**Design spécifique** :
- Background : `bg-[#D1A65E]/5` (Or/Cuivre très clair)
- Bordure gauche accentuée : `border-l-4 border-[#D1A65E]`
- Texte en italique
- Signature en Or/Cuivre

```tsx
<div className="mt-8 md:mt-12 p-6 md:p-8 rounded-xl bg-[#D1A65E]/5 border-l-4 border-[#D1A65E]">
  <p className="text-base md:text-lg text-gray-800 italic leading-relaxed">
    "{study.testimonial}"
  </p>
  <p className="text-sm md:text-base text-[#D1A65E] mt-3">
    — {study.name}
  </p>
</div>
```

### 5.3. Résultats chiffrés (3 badges)

**Structure** :
- Grille 3 colonnes responsive (`grid-cols-1 sm:grid-cols-3`)
- Icône centrée (couleur selon métrique)
- Chiffre en Playfair Display
- Label explicite

**Couleurs** :
- Traffic : Vert (#10b981)
- Conversion : Vert (#10b981)
- Délai : Or/Cuivre (#D1A65E)

---

## 6. COPYWRITING SPÉCIFIQUE

### 6.1. Hero
- **Badge** : "Résultats Prouvés"
- **Titre** : Contraste "**Invisible**" (rouge) → "**Visible sur Google**" (vert)
- **Sous-titre** : Accent sur "**moins de 14 jours**" (Or/Cuivre)

### 6.2. Cartes études
- **Métriques Before** : Toujours en rouge (problème)
- **Métriques After** : Toujours en vert (solution)
- **Témoignage** : Langage direct, émotionnel ("Le téléphone n'arrête pas de sonner")

### 6.3. CTA Final
- **Titre** : "Vous Voulez les **Mêmes Résultats** ?"
- **Micro-copie** : "Résultats comme Marc et Julie" (personnalisation)

---

## 7. ANIMATION

### 7.1. Délai progressif sur cartes
```tsx
{caseStudies.map((study, index) => (
  <motion.div
    key={study.id}
    initial={{ opacity: 0, y: 40 }}
    animate={casesVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, delay: index * 0.2 }}
  >
    {/* Carte */}
  </motion.div>
))}
```

**Délai** : `index * 0.2s` → Chaque carte apparaît 0.2s après la précédente.

---

## 8. METRICS TRACKING (Suggéré)

### KPIs à tracker
- **Temps passé sur chaque carte** : Voir quelle étude est la plus engageante
- **Taux de clic CTA après lecture** : Conversion post-démonstration
- **Scroll depth** : % d'utilisateurs qui lisent toutes les études

### Events suggérés
```tsx
// À implémenter
onCaseStudyView(study.id)
onTestimonialRead(study.id)
onCTAClickAfterCaseStudy()
```

---

## 9. OPTIMISATIONS FUTURES SUGGÉRÉES

### 9.1. Ajout d'études de cas
- **Plaquiste**
- **Électricien**
- **Menuisier**
- Objectif : Couvrir tous les secteurs avec exclusivité territoriale

### 9.2. Vidéos témoignages
- Remplacer/compléter le texte par vidéo courte (30-60s)
- Format vertical mobile-first

### 9.3. Filtres par secteur
- Ajouter un filtre en haut de page pour voir uniquement son secteur
- Améliore la personnalisation

### 9.4. Comparateur interactif
- Slider Before/After avec images de sites (capture d'écran)
- Effet "wipe" pour révéler la transformation

---

## 10. FICHIERS LIÉS

### Composants
- `/components/ConfluenceHeaderV6_7.tsx`
- `/components/ConfluenceFooterV6_2.tsx`
- `/components/ui/button.tsx`

### Hooks
- `/hooks/useScrollAnimation.ts`

### Pages connexes
- `/pages/ConfluenceAuditGratuitPage.tsx` (destination CTA)
- `/pages/ConfluenceLandingPage.tsx` (navigation depuis Hero)

---

**FIN DU DOCUMENT**
