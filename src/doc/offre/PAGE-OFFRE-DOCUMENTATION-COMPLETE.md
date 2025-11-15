# 📄 DOCUMENTATION EXHAUSTIVE - PAGE OFFRE
## Confluence Digitale - Design System V6.7 "APP MODERNE 2025"

**Version** : V6.7.2 + V5.21  
**Dernière mise à jour** : 9 novembre 2025

---

## 📋 TABLE DES MATIÈRES

1. [Vue d'ensemble](#vue-densemble)
2. [Design System V6.7](#design-system-v67)
3. [Structure de la page](#structure-de-la-page)
4. [Sections détaillées](#sections-détaillées)
5. [Composants réutilisables](#composants-réutilisables)
6. [Interactions & Animations](#interactions--animations)
7. [Responsive Design](#responsive-design)
8. [Accessibilité](#accessibilité)
9. [Directives UX/Conversion](#directives-uxconversion)
10. [**NOUVEAU : Badge Hero "Prix Garanti" (V5.21)**](#badge-hero-prix-garanti-v521)

---

## 1. VUE D'ENSEMBLE

### Objectif de la page
La page "Offre" présente l'offre commerciale unique de Confluence Digitale avec une **transparence radicale** sur le pricing et l'engagement. Elle vise à convertir les visiteurs TPE/PME méfiants vers le CTA "Audit Gratuit".

### Positionnement
- **Setup : 0€ HT** (investissement agence)
- **MRR : 149€ HT/mois**
- **Engagement minimum : 24 mois**
- **Exclusivité territoriale garantie**

### Fichier source
`/pages/ConfluenceOffrePage.tsx`

### Dépendances
- `/components/ConfluenceHeaderV6_7.tsx` - Header fixe avec glassmorphism
- `/components/ConfluenceFooterV6_2.tsx` - Footer moderne
- `/components/offre/AvailabilityBlock.tsx` - Tableau de disponibilité des exclusivités
- `/components/ui/button.tsx` - Bouton Shadcn
- `motion/react` - Animations (Motion)
- `lucide-react` - Icons

---

## 2. DESIGN SYSTEM V6.7

### 🎨 Palette de couleurs

#### Couleurs principales
```css
/* Fond principal */
--background-primary: #F9FAFB;      /* Gris Clair Éclatant */
--background-white: #FFFFFF;         /* Blanc pur */

/* Texte */
--text-primary: #1A1A1A;            /* Noir Mat */
--text-secondary: #6B7280;          /* Gray-700 */
--text-muted: #9CA3AF;              /* Gray-500 */

/* Accents */
--accent-premium: #D1A65E;          /* Or/Cuivre - Premium */
--accent-cta: #10b981;              /* Vert - CTA & Success */
--accent-contract: #A32E3A;         /* Rouge Bordeaux - Engagement */
--accent-warning: #F59E0B;          /* Orange - Réservation */

/* Bordures */
--border-default: #E5E7EB;          /* Gray-200 */
```

#### Usage des couleurs

| Couleur | Usage | Contexte psychologique |
|---------|-------|----------------------|
| **#D1A65E** (Or/Cuivre) | Titres accentués, éléments premium, badges exclusivité | Prestige, rareté, valeur haut de gamme |
| **#10b981** (Vert) | CTA principaux, éléments de succès, badges "Disponible" | Action, croissance, validation positive |
| **#A32E3A** (Rouge Bordeaux) | Engagement contractuel, clauses importantes, alertes légales | Sérieux, engagement, attention requise |
| **#1A1A1A** (Noir Mat) | Texte principal, titres | Professionnalisme, clarté, autorité |
| **#F9FAFB** (Gris Clair) | Fond de page, sections alternées | Modernité, légèreté, respiration |

### 📝 Typographie

#### Polices

```css
/* Titres & Display */
font-family: 'Playfair Display', serif;
font-weight: 400;  /* Regular UNIQUEMENT - jamais Bold */

/* Corps de texte & UI */
font-family: 'Inter', sans-serif;
font-weight: 400 | 500 | 600;  /* Selon le contexte */
```

#### Hiérarchie typographique

```tsx
/* H1 - Hero Principal */
className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}

/* H2 - Titres de section */
className="text-3xl md:text-4xl lg:text-5xl"
style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}

/* H3 - Sous-titres de cartes */
className="text-xl md:text-2xl"
/* Utilise Inter par défaut */

/* Body Large */
className="text-base md:text-lg lg:text-xl"

/* Body Regular */
className="text-sm md:text-base"

/* Small / Caption */
className="text-xs md:text-sm"
```

**⚠️ RÈGLE CRITIQUE** : Ne JAMAIS utiliser de classes Tailwind pour `font-size`, `font-weight` ou `line-height` sauf si explicitement demandé, car le Design System les gère via `globals.css`.

### 🎭 Ombres & Effets

#### Box Shadows (appliqués via style inline)

```tsx
/* Carte standard V6.7 */
style={{ boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.04)' }}

/* Carte avec accent Or/Cuivre */
style={{ boxShadow: '0 4px 24px 0 rgba(209, 166, 94, 0.12)' }}

/* Carte Engagement (Rouge Bordeaux) */
style={{ boxShadow: '0 4px 24px 0 rgba(163, 46, 58, 0.08)' }}

/* CTA Vert (effet "levitation") */
style={{ boxShadow: '0 8px 24px 0 rgba(16, 185, 129, 0.2)' }}

/* Badge subtil */
style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.06)' }}
```

#### Bordures

```tsx
/* Bordure standard */
className="border border-[#E5E7EB]"

/* Bordure accentuée Premium */
className="border-2 border-[#D1A65E]/30"

/* Bordure hover */
className="hover:border-[#D1A65E]"
```

#### Backgrounds décoratifs

```tsx
/* Blur circulaire - Or/Cuivre */
<div className="absolute top-10 right-0 w-96 h-96 bg-[#D1A65E]/5 rounded-full blur-3xl"></div>

/* Blur circulaire - Vert */
<div className="absolute bottom-10 left-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl"></div>
```

### 📐 Espacements & Layout

#### Container
```tsx
className="container mx-auto px-4 sm:px-6 lg:px-8"
```

#### Max-width par contexte
```tsx
/* Texte centré (hero, intro) */
className="max-w-3xl mx-auto"

/* Contenu principal */
className="max-w-4xl mx-auto"

/* Large (grilles de cartes) */
className="max-w-5xl mx-auto"
className="max-w-6xl mx-auto"
```

#### Padding sections
```tsx
/* Section standard */
className="py-12 sm:py-16 md:py-20 lg:py-24 px-4"

/* Section Hero (avec Header fixe) */
className="pt-28 lg:pt-32 pb-12 md:pb-16 px-4"
```

#### Gaps
```tsx
/* Spacing entre éléments de liste */
className="space-y-3 md:space-y-4"
className="space-y-6 md:space-y-8"

/* Grid gap */
className="gap-4 md:gap-6"
className="gap-6 md:gap-8"
```

### 🎨 Cartes & Blocs V6.7

#### Carte Standard Blanche
```tsx
<div 
  className="rounded-xl md:rounded-2xl overflow-hidden relative p-6 md:p-8 bg-white border border-[#E5E7EB]"
  style={{ boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.04)' }}
>
  {/* Contenu */}
</div>
```

#### Carte Premium (Accent Or/Cuivre)
```tsx
<div 
  className="rounded-2xl overflow-hidden relative p-8 md:p-12 bg-white border-2 border-[#D1A65E]/30"
  style={{ boxShadow: '0 4px 24px 0 rgba(209, 166, 94, 0.12)' }}
>
  {/* Contenu */}
</div>
```

#### Carte Hover Interactive
```tsx
<div 
  className="rounded-xl md:rounded-2xl overflow-hidden relative p-6 md:p-8 h-full bg-white border border-[#E5E7EB] hover:border-[#D1A65E] hover:scale-[1.02] transition-all duration-300"
  style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
>
  {/* Contenu */}
</div>
```

#### Background Gris Clair (alternance)
```tsx
className="bg-[#F9FAFB]"
```

---

## 3. STRUCTURE DE LA PAGE

### Architecture globale

```
┌─────────────────────────────────────────┐
│ ConfluenceHeaderV6_7 (Fixed)            │
├─────────────────────────────────────────┤
│ 1. HERO                                 │
│    - Titre "149€/mois"                  │
│    - Sous-titre transparence            │
├─────────────────────────────────────────┤
│ 2. BLOC PRIX PRINCIPAL (BG: White)      │
│    - Setup 0€ HT                        │
│    - MRR 149€ HT/mois                   │
│    - CTA principal                      │
│    - Note support 30km                  │
├─────────────────────────────────────────┤
│ 2.25. EXCLUSIVITÉ TERRITORIALE          │
│      (BG: Gris Clair #F9FAFB)           │
│    - Badge Shield                       │
│    - Titre + description                │
│    - Bloc explicatif 4 points           │
│    - AvailabilityBlock (SSR)            │
├─────────────────────────────────────────┤
│ 2.5. INVESTISSEMENT MUTUEL (BG: White)  │
│    - Titre "Notre Investissement"       │
│    - 3 points transparence radicale     │
├─────────────────────────────────────────┤
│ 3. LA VALEUR INCLUSE (BG: Gris Clair)   │
│    - Grille 2x2 cartes                  │
│    - 4 value cards interactives         │
├─────────────────────────────────────────┤
│ 4. L'ENGAGEMENT (BG: White)             │
│    - Badge AlertTriangle Rouge          │
│    - Titre "24 mois"                    │
│    - 4 points contractuels              │
│    - CTA final                          │
├─────────────────────────────────────────┤
│ ConfluenceFooterV6_2                    │
└─────────────────────────────────────────┘
```

### Alternance des backgrounds
- **White (#FFFFFF)** : Sections avec informations critiques (prix, engagement)
- **Gris Clair (#F9FAFB)** : Sections de respiration, valeur ajoutée

---

## 4. SECTIONS DÉTAILLÉES

### 4.1. SECTION HERO

#### Objectif
Annoncer immédiatement le prix avec transparence radicale.

#### Layout
```tsx
<section 
  ref={heroRef}
  className="relative min-h-[60vh] flex items-center justify-center pt-28 lg:pt-32 pb-12 md:pb-16 px-4 overflow-hidden"
>
  {/* Decorative backgrounds */}
  <div className="absolute top-10 right-0 w-96 h-96 bg-[#D1A65E]/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl"></div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={heroVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-5xl mx-auto text-center"
    >
      {/* Titre Principal */}
      <h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-4 md:mb-6"
        style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
      >
        Votre Seul Investissement :
        <br />
        <span className="text-[#D1A65E]">149€/mois</span>
      </h1>

      <p className="text-base md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto">
        Transparence totale. Pas de frais cachés. Pas de surprise.<br className="hidden md:block" />
        Que de la performance.
      </p>
    </motion.div>
  </div>
</section>
```

#### Éléments clés
- **Background décoratif** : 2 cercles floutés (Or/Cuivre + Vert) pour profondeur visuelle
- **Titre géant** : Prix 149€/mois en Or/Cuivre (#D1A65E) pour impact visuel maximum
- **Message anti-bullshit** : "Pas de frais cachés. Pas de surprise."
- **Animation** : Fade-in + slide-up avec easing fluide

---

### 4.2. BLOC PRIX PRINCIPAL

#### Objectif
Présenter le modèle tarifaire (Setup 0€ + MRR 149€) avec maximum de clarté.

#### Structure visuelle
```
┌───────────────────────────────────────────┐
│         Setup Initial                     │
│           0€ HT*                          │  ← Énorme, Or/Cuivre
│         (*Notre investissement)           │
├───────────────────────────────────────────┤
│            Puis                           │  ← Séparateur
├───────────────────────────────────────────┤
│        149€ HT / mois                     │  ← MRR, Noir Mat
├───────────────────────────────────────────┤
│  [CTA VERT: Je sécurise mon Exclusivité]  │
│                                           │
│  Audit gratuit • Réponse 24h • Sans       │
│  engagement                               │
└───────────────────────────────────────────┘
```

#### Code Layout
```tsx
<div 
  className="rounded-2xl md:rounded-3xl overflow-hidden relative p-8 md:p-12 lg:p-16 text-center bg-white border border-[#E5E7EB]"
  style={{ boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.04)' }}
>
  {/* Setup GRATUIT */}
  <div className="mb-6 md:mb-8">
    <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-2">Setup Initial</p>
    <div 
      className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#D1A65E] mb-2" 
      style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
    >
      0 €<span className="text-4xl md:text-5xl align-super">*</span>
    </div>
    <p className="text-xl md:text-2xl text-gray-500">HT</p>
    <p className="text-xs md:text-sm text-gray-500 mt-2">
      * Notre investissement sur vous. Détails ci-dessous.
    </p>
  </div>

  {/* Séparateur "Puis" */}
  <div className="flex items-center gap-3 md:gap-4 max-w-md mx-auto mb-6 md:mb-8">
    <div className="flex-1 h-px bg-gray-200"></div>
    <span className="text-sm md:text-base text-gray-500">Puis</span>
    <div className="flex-1 h-px bg-gray-200"></div>
  </div>

  {/* MRR */}
  <div className="mb-8 md:mb-12">
    <div 
      className="text-5xl sm:text-6xl md:text-7xl text-[#1A1A1A] mb-2" 
      style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
    >
      149 € <span className="text-3xl md:text-4xl text-gray-500">HT</span>
    </div>
    <p className="text-lg md:text-xl text-gray-600">/ mois</p>
  </div>

  {/* CTA Principal */}
  <Button
    onClick={() => handleNavigation('audit-gratuit')}
    className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white px-8 md:px-12 py-4 md:py-6 text-base md:text-lg lg:text-xl rounded-xl md:rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
    style={{ boxShadow: '0 8px 24px 0 rgba(16, 185, 129, 0.2)' }}
  >
    Je sécurise mon Exclusivité
    <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
  </Button>

  <p className="text-xs md:text-sm text-gray-500 mt-4 md:mt-6">
    Audit gratuit • Réponse sous 24h • Sans engagement initial
  </p>
</div>
```

#### Hiérarchie visuelle
1. **0€ HT** : Taille text-9xl, Or/Cuivre → Maximum d'attention
2. **149€ HT** : Taille text-7xl, Noir Mat → Information principale
3. **CTA Vert** : Couleur action + shadow levitation → Déclenche la conversion

#### Note légale additionnelle
```tsx
<div className="mt-6 md:mt-8 text-center">
  <p className="text-sm text-gray-600">
    <strong>Support & Intervention</strong> (Zone 30km inclus). Intervention au-delà : sur devis.
  </p>
</div>
```

---

### 4.3. EXCLUSIVITÉ TERRITORIALE

#### Objectif
Expliquer le mécanisme d'exclusivité territoriale et montrer la disponibilité en temps réel.

#### Badge de section
```tsx
<div 
  className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
  style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.04)' }}
>
  <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#D1A65E]" strokeWidth={1.5} />
  <span className="text-sm md:text-base text-[#1A1A1A]">Protection Territoriale Garantie</span>
</div>
```

#### Bloc explicatif (4 étapes)

**Design** : Carte Premium avec bordure Or/Cuivre accentuée
```tsx
<div 
  className="rounded-2xl overflow-hidden relative p-8 md:p-12 bg-white border-2 border-[#D1A65E]/30"
  style={{ boxShadow: '0 4px 24px 0 rgba(209, 166, 94, 0.12)' }}
>
```

**Structure des 4 points** :
```tsx
{/* Point 1 */}
<div className="flex items-start gap-4">
  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D1A65E]/10 flex items-center justify-center">
    <span className="text-[#D1A65E] text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>1</span>
  </div>
  <div>
    <h3 className="text-xl text-[#1A1A1A] mb-2">Définition de Votre Zone</h3>
    <p className="text-gray-700">
      Nous définissons ensemble votre zone géographique d'intervention (ville, rayon 30km, département...).
    </p>
  </div>
</div>

{/* Points 2, 3, 4 suivent la même structure */}
```

**Contenus des 4 points** :
1. **Définition de Votre Zone** : Co-construction de la zone géographique
2. **Clause Contractuelle** : Engagement contractuel de non-concurrence
3. **Protection Totale** : Vous êtes le seul client pour votre métier dans votre zone
4. **Stratégie SEO Unique** : 100% dédié, pas de cannibalisation

#### AvailabilityBlock (Composant SSR)

**Intégration** :
```tsx
<div className="mt-8 md:mt-12 lg:mt-16">
  <AvailabilityBlock onNavigate={handleNavigation} />
</div>
```

**Voir documentation détaillée** : [Section 5.1 - AvailabilityBlock](#51-availabilityblock)

---

### 4.4. INVESTISSEMENT MUTUEL (Transparence Radicale)

#### Objectif
Expliquer pourquoi le Setup est à 0€ et l'engagement à 24 mois. **Anti-bullshit radical**.

#### Structure des 3 points

```tsx
<div className="space-y-6 md:space-y-8">
  {/* Point 1 : Le 0€ n'est pas un cadeau */}
  <div>
    <h3 className="text-xl md:text-2xl text-[#1A1A1A] mb-3 md:mb-4">
      Le Setup <span className="text-[#D1A65E]">0€ HT</span> n'est pas un cadeau.
    </h3>
    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      C'est <strong>notre investissement sur vous</strong>. Valeur réelle du setup (audit, maquette, développement, formation) : <span className="text-[#D1A65E]">3 000€ HT</span>. 
      Nous le prenons à notre charge parce que nous sommes <strong>certains du résultat</strong>. 
      Votre site atteindra le 100/100 et vous générera des devis. On mise sur vous.
    </p>
  </div>

  {/* Point 2 : L'engagement n'est pas un piège */}
  <div>
    <h3 className="text-xl md:text-2xl text-[#1A1A1A] mb-3 md:mb-4">
      L'engagement <span className="text-[#A32E3A]">24 mois</span> n'est pas un piège.
    </h3>
    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
      C'est notre <strong>garantie mutuelle de succès</strong>. 24 mois, c'est le temps nécessaire pour :
    </p>
    <ul className="mt-3 md:mt-4 space-y-2 md:space-y-3 text-sm md:text-base text-gray-700">
      <li className="flex items-start gap-2 md:gap-3">
        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span>Amortir notre investissement initial (3 000€)</span>
      </li>
      <li className="flex items-start gap-2 md:gap-3">
        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span>Garantir votre exclusivité territoriale sur le long terme</span>
      </li>
      <li className="flex items-start gap-2 md:gap-3">
        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span>Vous accompagner jusqu'à ce que vous dominiez Google (ça prend 6-12 mois)</span>
      </li>
    </ul>
  </div>

  {/* Point 3 : Équilibre investissement/confiance */}
  <div className="pt-4 md:pt-6 border-t border-gray-200">
    <p className="text-base md:text-lg text-[#1A1A1A] leading-relaxed">
      <strong>En résumé :</strong> Nous investissons <span className="text-[#D1A65E]">3 000€</span> sur vous. 
      Vous investissez votre <span className="text-[#10b981]">confiance</span> sur 24 mois. 
      C'est un <strong>partenariat</strong>, pas une vente. 
      Si vous gagnez, nous gagnons. Si vous perdez, nous perdons notre investissement.
    </p>
  </div>
</div>
```

#### Tone of voice
- **Brutal honesty** : "n'est pas un cadeau", "n'est pas un piège"
- **Explicite** : Valeur réelle chiffrée (3 000€)
- **Alignement d'intérêt** : "Si vous gagnez, nous gagnons"

---

### 4.5. LA VALEUR INCLUSE

#### Objectif
Montrer les 4 piliers de valeur inclus dans les 149€/mois.

#### Grille responsive
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
  {valueCards.map((card, index) => {
    const Icon = card.icon;
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={valueVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {/* Carte V6.7 avec hover */}
      </motion.div>
    );
  })}
</div>
```

#### Structure d'une carte
```tsx
<div 
  className="rounded-xl md:rounded-2xl overflow-hidden relative p-6 md:p-8 h-full bg-white border border-[#E5E7EB] hover:border-[#D1A65E] hover:scale-[1.02] transition-all duration-300"
  style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
>
  <div className="relative z-10">
    {/* Icône */}
    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 bg-[#D1A65E]/10">
      <Icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#D1A65E]" strokeWidth={1.5} />
    </div>

    {/* Titre */}
    <h3 className="text-xl md:text-2xl text-[#1A1A1A] mb-2 md:mb-3">
      {card.title}
    </h3>

    {/* Description */}
    <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
      {card.description}
    </p>

    {/* Features List */}
    <ul className="space-y-2 md:space-y-3">
      {card.features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2 md:gap-3">
          <CheckCircle2 
            className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5 text-[#D1A65E]" 
            strokeWidth={2} 
          />
          <span className="text-sm md:text-base text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
</div>
```

#### Les 4 value cards

| Icône | Titre | Description | Features |
|-------|-------|-------------|----------|
| **Gauge** | Performance 100/100 | Score PageSpeed garanti. Site ultra-rapide qui convertit. | • Vitesse < 1s<br>• Optimisé pour être trouvé sur Google<br>• Position Page 1 Google en 90 jours |
| **Shield** | Souveraineté Totale | Votre site. Vos données. Votre autonomie complète. | • Interface admin sans code<br>• Modification en temps réel<br>• Aucune dépendance technique |
| **MapPin** | Exclusivité Territoriale | 1 seul client par secteur. Vous êtes protégé. | • Votre zone protégée<br>• Aucun concurrent direct<br>• Toute notre énergie pour vous |
| **Clock** | Sérénité Garantie | Support illimité. Maintenance incluse. Zéro surprise. | • Mises à jour automatiques<br>• Support technique réactif<br>• Hébergement sécurisé inclus |

#### Effet hover
- **Border** : Passe de `border-[#E5E7EB]` à `border-[#D1A65E]`
- **Scale** : Légère augmentation `scale-[1.02]`
- **Transition** : Fluide `duration-300`

---

### 4.6. L'ENGAGEMENT (Section contractuelle)

#### Objectif
Présenter les conditions d'engagement de 24 mois avec **transparence radicale** sur la résiliation.

#### Badge d'alerte
```tsx
<div className="inline-flex items-center gap-2 bg-[#A32E3A]/10 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
  <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-[#A32E3A]" strokeWidth={1.5} />
  <span className="text-sm md:text-base text-[#A32E3A]">Engagement Contractuel</span>
</div>
```

#### Bloc principal
```tsx
<div 
  className="rounded-xl md:rounded-2xl overflow-hidden relative p-6 md:p-8 lg:p-12 bg-white border border-[#E5E7EB]"
  style={{ boxShadow: '0 4px 24px 0 rgba(163, 46, 58, 0.08)' }}
>
  {/* Durée Minimale */}
  <div className="text-center mb-6 md:mb-8">
    <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-2 md:mb-3">
      Durée d'engagement minimum
    </p>
    <div 
      className="text-5xl sm:text-6xl md:text-7xl text-[#A32E3A] mb-2" 
      style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
    >
      24 mois
    </div>
  </div>
  
  {/* 4 détails contractuels */}
</div>
```

#### Les 4 détails contractuels

```tsx
<div className="space-y-4 md:space-y-6 text-[#1A1A1A]">
  {/* 1. Engagement ferme */}
  <div className="flex items-start gap-3 md:gap-4">
    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#A32E3A] flex-shrink-0 mt-1" strokeWidth={2} />
    <div>
      <p className="text-base md:text-lg mb-1">
        <strong>Engagement ferme de 24 mois</strong>
      </p>
      <p className="text-sm md:text-base text-gray-700">
        Pour garantir votre exclusivité territoriale et assurer un ROI maximal sur le long terme.
      </p>
    </div>
  </div>

  {/* 2. Paiement mensuel */}
  <div className="flex items-start gap-3 md:gap-4">
    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#A32E3A] flex-shrink-0 mt-1" strokeWidth={2} />
    <div>
      <p className="text-base md:text-lg mb-1">
        <strong>Paiement mensuel de 149 € HT</strong>
      </p>
      <p className="text-sm md:text-base text-gray-700">
        Prélevé automatiquement chaque mois. Aucune surprise, aucun frais caché.
      </p>
    </div>
  </div>

  {/* 3. Résiliation anticipée */}
  <div className="flex items-start gap-3 md:gap-4">
    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#A32E3A] flex-shrink-0 mt-1" strokeWidth={2} />
    <div>
      <p className="text-base md:text-lg mb-1">
        <strong>En cas de résiliation anticipée</strong>
      </p>
      <p className="text-sm md:text-base text-gray-700">
        Si vous résiliez avant 24 mois, vous réglez les mensualités restantes. 
        <strong className="text-[#A32E3A]"> Maximum : 1 990€ HT</strong> (si résiliation au mois 10, exemple : 14 mois × 149€ = 2 086€ HT, plafonné à 1 990€). 
        C'est la protection de notre investissement initial de 3 000€. 
        Exceptions : cessation d'activité, motif légitime prouvé.
      </p>
    </div>
  </div>

  {/* 4. Renouvellement */}
  <div className="flex items-start gap-3 md:gap-4">
    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#A32E3A] flex-shrink-0 mt-1" strokeWidth={2} />
    <div>
      <p className="text-base md:text-lg mb-1">
        <strong>Renouvellement tacite par période de 12 mois</strong>
      </p>
      <p className="text-gray-700">
        Après les 24 mois initiaux. Résiliable avec un préavis de 3 mois.
      </p>
    </div>
  </div>
</div>
```

#### CTA Final
```tsx
<div className="text-center mt-8 md:mt-12">
  <Button
    onClick={() => handleNavigation('audit-gratuit')}
    className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white px-6 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 text-base md:text-lg lg:text-xl rounded-xl md:rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
    style={{ boxShadow: '0 8px 24px 0 rgba(16, 185, 129, 0.2)' }}
  >
    <span className="hidden sm:inline">J'accepte ces conditions, je demande mon audit</span>
    <span className="sm:hidden">Je demande mon audit</span>
    <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
  </Button>
</div>
```

---

## 5. COMPOSANTS RÉUTILISABLES

### 5.1. AvailabilityBlock

#### Localisation
`/components/offre/AvailabilityBlock.tsx`

#### Objectif
Afficher un tableau de disponibilité des exclusivités territoriales en temps réel avec possibilité de réservation directe.

#### Props Interface
```tsx
interface AvailabilityBlockProps {
  onNavigate?: (page: string) => void;
}
```

#### Structure visuelle

```
┌──────────────────────────────────────────────────────────┐
│ Disponibilité par Secteur                                │
│ Exclusivité territoriale garantie. Un seul artisan par   │
│ métier et par zone.                                      │
├──────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────┐  │
│ │ Couvreur • Fumel (47)      [Pris]                  │  │
│ └────────────────────────────────────────────────────┘  │
│ ┌────────────────────────────────────────────────────┐  │
│ │ Plombier • Fumel (47)      [Disponible] [Réserver] │  │
│ └────────────────────────────────────────────────────┘  │
│ ┌────────────────────────────────────────────────────┐  │
│ │ Maçon • Fumel (47)         [Réservé]               │  │
│ └────────────────────────────────────────────────────┘  │
│ ... (8 lignes au total)                                 │
├──────────────────────────────────────────────────────────┤
│ 🔒 Votre zone reste disponible jusqu'à validation       │
│ définitive de votre réservation. Les places "Réservées" │
│ sont en cours de finalisation contractuelle.            │
└──────────────────────────────────────────────────────────┘
```

#### Data Structure
```tsx
interface AvailabilityItem {
  sector: string;
  location: string;
  status: "available" | "reserved" | "taken";
}

const availabilityData: AvailabilityItem[] = [
  { sector: "Couvreur", location: "Fumel (47)", status: "taken" },
  { sector: "Plombier", location: "Fumel (47)", status: "available" },
  { sector: "Électricien", location: "Fumel (47)", status: "available" },
  { sector: "Maçon", location: "Fumel (47)", status: "reserved" },
  { sector: "Menuisier", location: "Fumel (47)", status: "available" },
  { sector: "Peintre", location: "Fumel (47)", status: "available" },
  { sector: "Carreleur", location: "Fumel (47)", status: "available" },
  { sector: "Plaquiste", location: "Fumel (47)", status: "available" },
];
```

#### Status Badges Configuration
```tsx
const getStatusConfig = (status: string) => {
  switch (status) {
    case "available":
      return {
        label: "Disponible",
        bgColor: "bg-[#10b981]/10",
        textColor: "text-[#10b981]",
        borderColor: "border-[#10b981]/30",
      };
    case "reserved":
      return {
        label: "Réservé",
        bgColor: "bg-orange-500/10",
        textColor: "text-orange-600",
        borderColor: "border-orange-500/30",
      };
    case "taken":
      return {
        label: "Pris",
        bgColor: "bg-gray-500/10",
        textColor: "text-gray-600",
        borderColor: "border-gray-500/30",
      };
  }
};
```

#### Code d'une ligne de disponibilité
```tsx
<li className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 p-4 md:p-5 rounded-xl bg-[#F9FAFB] transition-colors duration-200">
  {/* Left: Sector & Location */}
  <div className="flex-1 min-w-0">
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
      <h4 className="text-lg md:text-xl text-[#1A1A1A] flex-shrink-0">
        {item.sector}
      </h4>
      <span className="text-sm md:text-base text-gray-600">
        {item.location}
      </span>
    </div>
  </div>

  {/* Right: Status Badge + CTA */}
  <div className="flex items-center gap-3 md:gap-4 flex-wrap">
    {/* Status Badge */}
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-lg border ${statusConfig.bgColor} ${statusConfig.textColor} ${statusConfig.borderColor} text-sm whitespace-nowrap`}
    >
      {statusConfig.label}
    </span>

    {/* CTA Button - Only for Available */}
    {item.status === "available" && (
      <button
        onClick={() => {
          if (onNavigate) {
            sessionStorage.setItem('reservationMetier', normalizeMetier(item.sector));
            onNavigate('reservation');
          }
        }}
        className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-lg border-2 border-[#D1A65E] bg-transparent text-[#1A1A1A] hover:bg-[#D1A65E]/5 transition-all duration-300 group whitespace-nowrap cursor-pointer"
        style={{ boxShadow: '0 2px 8px 0 rgba(209, 166, 94, 0.15)' }}
      >
        <span className="text-sm md:text-base">Réserver ma place</span>
        <ArrowRight 
          className="w-4 h-4 text-[#D1A65E] group-hover:translate-x-1 transition-transform duration-300" 
          strokeWidth={2} 
        />
      </button>
    )}
  </div>
</li>
```

#### Footer Note
```tsx
<div className="mt-6 md:mt-8 p-4 md:p-5 bg-[#D1A65E]/5 border border-[#D1A65E]/20 rounded-xl">
  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
    <span className="text-[#1A1A1A]">🔒 Votre zone reste disponible jusqu'à validation définitive de votre réservation.</span>{" "}
    Les places "Réservées" sont en cours de finalisation contractuelle.
  </p>
</div>
```

#### Fonction de navigation avec pré-remplissage
```tsx
const normalizeMetier = (sector: string): string => {
  const mapping: { [key: string]: string } = {
    "Couvreur": "couvreur",
    "Plombier": "plombier",
    "Électricien": "electricien",
    "Maçon": "macon",
    "Menuisier": "menuisier",
    "Peintre": "peintre",
    "Carreleur": "carreleur",
    "Plaquiste": "plaquiste"
  };
  return mapping[sector] || sector.toLowerCase();
};

// Lors du clic sur "Réserver ma place"
sessionStorage.setItem('reservationMetier', normalizeMetier(item.sector));
onNavigate('reservation');
```

---

## 6. INTERACTIONS & ANIMATIONS

### 6.1. Animations d'entrée (Motion)

#### Hook personnalisé
```tsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
const { ref: priceRef, isVisible: priceVisible } = useScrollAnimation();
```

#### Pattern d'animation fade-in + slide-up
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={heroVisible ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  {/* Contenu */}
</motion.div>
```

#### Animation de grille avec délais décalés
```tsx
{valueCards.map((card, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    animate={valueVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.15,  // Décalage progressif
      ease: [0.22, 1, 0.36, 1]
    }}
  >
    {/* Carte */}
  </motion.div>
))}
```

### 6.2. Hovers interactifs

#### Hover sur carte (border + scale)
```tsx
className="hover:border-[#D1A65E] hover:scale-[1.02] transition-all duration-300"
```

#### Hover sur bouton CTA (scale)
```tsx
className="hover:scale-105 transition-all duration-300"
```

#### Hover sur bouton secondaire (background)
```tsx
className="hover:bg-[#D1A65E]/5 transition-all duration-300"
```

#### Hover sur icône (translateX)
```tsx
className="group-hover:translate-x-1 transition-transform duration-300"
```

### 6.3. Easing curves

#### Easing fluide (Material Design inspired)
```tsx
ease: [0.22, 1, 0.36, 1]
```

---

## 7. RESPONSIVE DESIGN

### 7.1. Breakpoints Tailwind

| Prefix | Min-width | Usage |
|--------|-----------|-------|
| **sm:** | 640px | Petits ajustements |
| **md:** | 768px | Tablet portrait |
| **lg:** | 1024px | Tablet landscape / Desktop small |
| **xl:** | 1280px | Desktop large |
| **2xl:** | 1536px | Desktop extra-large |

### 7.2. Patterns responsifs récurrents

#### Titre Hero
```tsx
className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
```

#### Titre H2
```tsx
className="text-3xl md:text-4xl lg:text-5xl"
```

#### Body text
```tsx
className="text-base md:text-lg lg:text-xl"
```

#### Padding sections
```tsx
className="py-12 sm:py-16 md:py-20 lg:py-24 px-4"
```

#### Padding cartes
```tsx
className="p-6 md:p-8 lg:p-10"
className="p-8 md:p-12 lg:p-16"
```

#### Gaps
```tsx
className="gap-3 md:gap-4"
className="gap-4 md:gap-6"
className="space-y-6 md:space-y-8"
```

#### Grille 1-col → 2-col
```tsx
className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6"
```

#### Bouton full-width → auto
```tsx
className="w-full sm:w-auto"
```

#### Texte caché sur mobile
```tsx
<span className="hidden sm:inline">Texte long desktop</span>
<span className="sm:hidden">Texte court mobile</span>
```

### 7.3. Images & Icons responsifs

#### Icônes de section
```tsx
className="w-4 h-4 md:w-5 md:h-5"
```

#### Icônes de carte
```tsx
className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
```

#### Container d'icône
```tsx
className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
```

---

## 8. ACCESSIBILITÉ

### 8.1. Sémantique HTML

#### Hiérarchie des titres
```
<h1> - Titre principal de page (1 seul par page)
  <h2> - Titres de sections principales
    <h3> - Sous-titres de cartes/blocs
      <h4> - Titres de listes/items
```

#### Sections avec landmarks
```tsx
<section> - Chaque section majeure
<nav> - Navigation (dans Header/Footer)
<main> - Contenu principal
<footer> - Footer
```

### 8.2. Boutons & Links

#### Boutons cliquables
```tsx
<Button onClick={() => handleNavigation('audit-gratuit')}>
  {/* Texte explicite */}
</Button>

<button onClick={() => handleNavigation('cgv')} className="...">
  {/* Texte explicite */}
</button>
```

#### Curseur pointer
```tsx
className="cursor-pointer"
```

### 8.3. Contraste & Lisibilité

#### Texte sur fond blanc
- **Primaire** : `text-[#1A1A1A]` sur `bg-white` → Contraste AAA
- **Secondaire** : `text-gray-700` sur `bg-white` → Contraste AA

#### Texte sur fond gris clair
- **Primaire** : `text-[#1A1A1A]` sur `bg-[#F9FAFB]` → Contraste AAA

### 8.4. Focus states

**Note** : Les états focus sont gérés automatiquement par Tailwind et Shadcn/UI.

---

## 9. DIRECTIVES UX/CONVERSION

### 9.1. Les 4 Directives Critiques

#### 1. Purger tout jargon technique
❌ **Interdit** :
- "Infrastructure cloud scalable"
- "Pipeline CI/CD"
- "Headless CMS"

✅ **Autorisé** :
- "Site ultra-rapide"
- "Interface sans code"
- "Hébergement sécurisé inclus"

#### 2. Transparence radicale sur le pricing
✅ **Implémenté** :
- Prix 149€/mois affiché dès le Hero
- Explication du 0€ setup (valeur 3 000€)
- Clause de résiliation détaillée avec plafond 1 990€
- Aucun frais caché

#### 3. Autonomie ET Support ensemble
✅ **Implémenté** :
- Carte "Souveraineté Totale" : autonomie sans code
- Carte "Sérénité Garantie" : support illimité
- Les deux cohabitent dans la section "Valeur Incluse"

#### 4. Bloc de confiance TPE avec contact humain
✅ **Implémenté** :
- CTA "Audit Gratuit" → humain répond en 24h
- Section "Investissement Mutuel" → "On mise sur vous"
- Tone of voice : "Si vous gagnez, nous gagnons"

### 9.2. Tone of Voice

#### Caractéristiques
- **Anti-bullshit** : "n'est pas un cadeau", "n'est pas un piège"
- **Transparence radicale** : Tous les chiffres sont explicites (3 000€, 1 990€, 24 mois)
- **Alignement d'intérêt** : "Si vous perdez, nous perdons notre investissement"
- **Confiance** : "On mise sur vous"

#### Exemples de formulations

| ❌ Formulation corporate | ✅ Formulation Confluence |
|-------------------------|--------------------------|
| "Offre promotionnelle" | "Notre investissement sur vous" |
| "Engagement de durée" | "L'engagement 24 mois n'est pas un piège" |
| "Solutions digitales" | "Site ultra-rapide qui convertit" |
| "Optimisation SEO" | "Optimisé pour être trouvé sur Google" |

### 9.3. CTA Strategy

#### CTA Principal (Vert #10b981)
```tsx
<Button className="bg-[#10b981] hover:bg-[#059669] ...">
  Je sécurise mon Exclusivité
  <ArrowRight />
</Button>
```

**Localisation** :
1. Sous le bloc prix principal
2. En bas de la section Engagement

#### CTA Secondaire (Bordure Or/Cuivre)
```tsx
<button className="border-2 border-[#D1A65E] hover:bg-[#D1A65E]/5 ...">
  Réserver ma place
  <ArrowRight />
</button>
```

**Localisation** : AvailabilityBlock (uniquement statut "Disponible")

#### Micro-copie de réassurance
```tsx
<p className="text-xs md:text-sm text-gray-500 mt-4 md:mt-6">
  Audit gratuit • Réponse sous 24h • Sans engagement initial
</p>
```

### 9.4. Objections handling

| Objection TPE | Réponse dans la page | Localisation |
|---------------|---------------------|--------------|
| "C'est trop cher" | Setup 0€, puis 149€/mois (moins cher qu'un employé) | Section Prix |
| "C'est un piège" | Transparence radicale : explication du 0€ et du 24 mois | Section Investissement Mutuel |
| "Ils vont prendre mes concurrents" | Exclusivité territoriale contractuelle | Section Exclusivité + AvailabilityBlock |
| "Je serai dépendant" | "Souveraineté Totale" : autonomie sans code | Section Valeur Incluse |
| "En cas de problème ?" | Support illimité inclus + clause de résiliation claire | Section Valeur + Section Engagement |

---

## 10. CHECKLIST DE COHÉRENCE

### Design System V6.7
- [ ] Fond principal : `bg-[#F9FAFB]`
- [ ] Alternance sections : White / Gris Clair
- [ ] Cartes : Fond blanc + bordure `#E5E7EB` + shadow V6.7
- [ ] Accents Or/Cuivre : `#D1A65E` pour éléments premium
- [ ] CTA : Vert `#10b981` avec shadow levitation
- [ ] Engagement : Rouge Bordeaux `#A32E3A`

### Typographie
- [ ] Titres : Playfair Display Regular (jamais Bold)
- [ ] Corps : Inter (weights 400/500/600)
- [ ] Pas de classes Tailwind `text-xl`, `font-bold`, etc. sauf si demandé

### Responsive
- [ ] Mobile-first : classes de base sans prefix
- [ ] Breakpoints : sm: / md: / lg: appliqués
- [ ] Texte alternatif : `hidden sm:inline` / `sm:hidden`
- [ ] Grilles : `grid-cols-1 lg:grid-cols-2`

### Accessibilité
- [ ] Hiérarchie H1 > H2 > H3 respectée
- [ ] Boutons avec texte explicite
- [ ] Contraste AA minimum
- [ ] `cursor-pointer` sur éléments cliquables

### UX/Conversion
- [ ] Pricing affiché dès le Hero
- [ ] Transparence radicale (0€ = investissement 3000€)
- [ ] CTA "Audit Gratuit" visible et récurrent
- [ ] Tone of voice anti-bullshit
- [ ] Objections TPE traitées

### Animations
- [ ] useScrollAnimation sur sections majeures
- [ ] Motion fade-in + slide-up
- [ ] Delays progressifs sur grilles
- [ ] Hovers fluides (scale, border, translateX)

---

## 11. AMÉLIORATIONS FUTURES SUGGÉRÉES

### Optimisations UX
1. **Calculateur de ROI dynamique** : Saisir CA mensuel → voir le ROI estimé
2. **Comparateur transparence** : Tableau "Nous vs Agences Classiques"
3. **Témoignages vidéo** : Intégrer vidéos de clients dans la section Valeur
4. **Chat en direct** : Widget pour questions instantanées sur le pricing

### Optimisations techniques
1. **SSR complet** : Pré-render de AvailabilityBlock côté serveur
2. **Animation skeleton** : Pendant le chargement de AvailabilityBlock
3. **A/B Testing** : Tester variantes CTA ("Je sécurise" vs "Je demande")
4. **Analytics events** : Tracker clics sur chaque CTA pour optimisation

### Optimisations conversion
1. **Exit-intent popup** : Offre "Audit Gratuit" au moment de quitter
2. **Social proof dynamique** : "X artisans ont réservé cette semaine"
3. **Scarcity urgency** : Countdown "Plus que X places dans votre département"
4. **Garantie satisfait/remboursé** : Badge visible pour rassurer davantage

---

## 12. BADGE HERO "PRIX GARANTI" (V5.21)

### 12.1. Contexte & Objectif

#### Problème Identifié (V5.21)
La page `/offre` était la **seule page principale** dont le Hero n'avait **pas de badge**, créant une incohérence visuelle avec les autres pages du site (Landing, Méthode, Qui sommes-nous, Études de Cas, Audit Gratuit).

#### Solution Implémentée
Ajout d'un badge "Prix Garanti" au-dessus du H1 du Hero pour :
- ✅ **Cohérence visuelle** : Toutes les pages principales ont maintenant un badge Hero
- ✅ **Réassurance immédiate** : Renforce la transparence radicale dès la première seconde
- ✅ **Alignement sémantique** : "Prix Garanti" prépare et amplifie le H1 "...149€/mois Garanti"

### 12.2. Spécifications du Badge

#### Code Complet
```tsx
{/* V5.21 : Badge "Prix Garanti" - Cohérence avec autres pages */}
<div 
  className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
  style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.06)' }}
>
  <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-[#D1A65E]" strokeWidth={1.5} />
  <span className="text-sm md:text-base text-[#1A1A1A]">Prix Garanti</span>
</div>
```

#### Import Nécessaire
```tsx
import { ..., ShieldCheck } from "lucide-react";
```

#### Composition du Badge

| Élément | Valeur | Justification DS |
|---------|--------|------------------|
| **Texte** | "Prix Garanti" | Alignement sémantique H1 "...149€/mois Garanti" |
| **Couleur Texte** | #1A1A1A (Noir Mat) | Couleur texte principale DS V6.7.2 ✅ |
| **Icône** | ShieldCheck (lucide-react) | Réassurance garantie/protection |
| **Couleur Icône** | #D1A65E (Or/Cuivre) | Accent premium DS V6.7.2 ✅ |
| **Background** | bg-white | Standard badge DS ✅ |
| **Border** | border-[#E5E7EB] | Bordure standard DS ✅ |
| **Border Radius** | rounded-full | Style badge DS ✅ |
| **Shadow** | `0 2px 12px rgba(0,0,0,0.06)` | Élévation subtile DS ✅ |
| **Padding** | px-4 md:px-6 py-2 md:py-3 | Padding responsive DS ✅ |
| **Margin Bottom** | mb-6 md:mb-8 | Espacement Hero DS ✅ |

#### Responsive

| Breakpoint | Taille Texte | Taille Icône | Padding Horizontal |
|------------|--------------|--------------|-------------------|
| **Mobile** | text-sm | w-4 h-4 | px-4 |
| **Desktop** | md:text-base | md:w-5 md:h-5 | md:px-6 |

### 12.3. Cohérence Badges Site-Wide

#### Tableau Comparatif Post-V5.21

| Page | Badge Hero | Texte | Icône | Couleur Texte | Couleur Icône |
|------|------------|-------|-------|---------------|---------------|
| **Landing** | "La solution que tout artisan cherche" | ✅ | Target | #1A1A1A (Noir) | #10b981 (Vert) |
| **/offre** | **"Prix Garanti"** ✅ | ✅ | ShieldCheck | **#1A1A1A (Noir)** | #D1A65E (Or) |
| **/methode** | "Méthode Flux Confiance" | ✅ | Workflow | #1A1A1A (Noir) | #10b981 (Vert) |
| **/qui-sommes-nous** | "Notre Histoire" | ✅ | Users | #1A1A1A (Noir) | #D1A65E (Or) |
| **/etudes-de-cas** | "Résultats Prouvés" | ✅ | Target | #1A1A1A (Noir) | #10b981 (Vert) |
| **/audit-gratuit** | "Audit Gratuit 48h" | ✅ | BarChart3 | #1A1A1A (Noir) | #D1A65E (Or) |

#### Règles Universelles des Badges Hero

Tous les badges du site respectent maintenant ces règles :

1. **Texte** : Toujours Noir Mat (#1A1A1A) ✅
2. **Icône** : Couleur d'accent contextuelle (Or/Cuivre #D1A65E ou Vert #10b981) ✅
3. **Background** : Blanc (bg-white) ✅
4. **Border** : Gris clair (#E5E7EB) ✅
5. **Border Radius** : rounded-full ✅
6. **Shadow** : Subtile (0 2px 12px rgba(0,0,0,0.06)) ✅
7. **Emplacement** : Au-dessus du H1 ✅
8. **Margin Bottom** : mb-6 md:mb-8 ✅

### 12.4. Documentation Liée

- **Changelog Complet** : `/doc/changelog/V5_21_BADGE_HERO_OFFRE.md`
- **Design System** : `/doc/01_DESIGN_SYSTEM_V6.7.md`
- **Index Changelog** : `/doc/changelog/INDEX_CHANGELOG.md`

---

## 13. FICHIERS LIÉS

### Composants
- `/components/ConfluenceHeaderV6_7.tsx`
- `/components/ConfluenceFooterV6_2.tsx`
- `/components/offre/AvailabilityBlock.tsx`
- `/components/ui/button.tsx`

### Hooks
- `/hooks/useScrollAnimation.ts`

### Pages connexes
- `/pages/ConfluenceAuditGratuitPage.tsx` (destination CTA principal)
- `/pages/ConfluenceReservationPage.tsx` (destination CTA AvailabilityBlock)
- `/pages/ConfluenceCGVPage.tsx` (lien conditions contractuelles)

### Styles
- `/styles/globals.css` (Design System V6.7, typographie)

---

## 14. CONTACT & SUPPORT

**Documentation rédigée par** : Figma Make AI Assistant  
**Date** : 9 novembre 2025  
**Version** : V6.7.2 + V5.21  
**Version Design System** : V6.7 "APP MODERNE 2025"  
**Destinataire** : UX/UI Designer Senior - Confluence Digitale

---

**FIN DU DOCUMENT**