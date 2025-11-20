# Architecture du Site - Confluence Digitale
## Structure Astro + React Islands

**Version** : 6.7.2 V2  
**Date** : Novembre 2024  
**Stack** : Astro + React Islands + TypeScript + Tailwind CSS v3

---

## 📋 Table des matières

1. [Vue d'Ensemble](#vue-densemble)
2. [Arborescence du Projet](#arborescence-du-projet)
3. [Pages Astro](#pages-astro)
4. [Composants Réutilisables](#composants-réutilisables)
5. [React Islands](#react-islands)
6. [Stratégie d'Hydratation](#stratégie-dhydratation)
7. [Hooks & Utilities](#hooks--utilities)
8. [Intégration Backend](#intégration-backend)

---

## 🎯 Vue d'Ensemble

### Philosophie Architecture

**Principe** : Maximum de contenu statique (SSR Astro) + Minimum d'interactivité client-side (React Islands).

**Avantages** :
- ⚡ Performance maximale (SSR + hydratation sélective)
- 🔍 SEO optimal (HTML complet au premier chargement)
- 📦 Bundle JS minimal (uniquement islands nécessaires)
- ♿ Accessibilité native (HTML sémantique Astro)

### Stack Technique

```
Frontend
├─ Astro 4.x (SSR, routing, layouts)
├─ React 18 (Islands uniquement)
├─ TypeScript 5 (typage strict)
├─ Tailwind CSS 3 (styling)
└─ Motion/React (animations)

Backend (optionnel)
├─ Strapi v4 (CMS)
├─ PostgreSQL (database)
└─ Railway (hosting)
```

---

## 📁 Arborescence du Projet

```
confluence-digitale/
├─ src/
│  ├─ pages/                      # Pages Astro (routing automatique)
│  │  ├─ index.astro              # Landing page (/)
│  │  ├─ offre.astro              # Page offre (/offre)
│  │  ├─ methode.astro            # Page méthode (/methode)
│  │  ├─ etudes-de-cas.astro      # Études de cas (/etudes-de-cas)
│  │  ├─ audit-gratuit.astro      # Audit gratuit (/audit-gratuit)
│  │  ├─ contact.astro            # Contact (/contact)
│  │  ├─ reservation.astro        # Réservation (/reservation)
│  │  ├─ cgv.astro                # CGV (/cgv)
│  │  ├─ mentions-legales.astro   # Mentions légales (/mentions-legales)
│  │  ├─ politique-confidentialite.astro  # Politique (/politique-confidentialite)
│  │  └─ 404.astro                # Page 404
│  │
│  ├─ components/
│  │  ├─ islands/                 # React Islands (interactivité)
│  │  │  ├─ HeroAnimation.tsx
│  │  │  ├─ PainPointsSection.tsx
│  │  │  ├─ PageSpeedProof.tsx
│  │  │  ├─ SolutionsSection.tsx
│  │  │  ├─ TeamBlock.tsx
│  │  │  ├─ FAQ.tsx
│  │  │  ├─ AuditForm.tsx
│  │  │  ├─ ArcGauge.tsx
│  │  │  ├─ AuditResults.tsx
│  │  │  ├─ ContactForm.tsx
│  │  │  └─ ReservationForm.tsx
│  │  │
│  │  ├─ ui/                      # Composants DS V6.7.2
│  │  │  ├─ DSButton.tsx
│  │  │  ├─ DSCard.tsx
│  │  │  ├─ DSBadge.tsx
│  │  │  ├─ DSInput.tsx
│  │  │  ├─ DSTextarea.tsx
│  │  │  ├─ DSSelect.tsx
│  │  │  ├─ DSCheckbox.tsx
│  │  │  ├─ DSSwitch.tsx
│  │  │  ├─ DSDialog.tsx
│  │  │  ├─ DSDrawer.tsx
│  │  │  ├─ DSAccordion.tsx
│  │  │  ├─ DSTabs.tsx
│  │  │  ├─ DSAlert.tsx
│  │  │  ├─ DSPanel.tsx
│  │  │  ├─ DSSectionHeader.tsx
│  │  │  └─ DSLabel.tsx
│  │  │
│  │  ├─ layout/                  # Layout components (Astro)
│  │  │  ├─ Header.astro
│  │  │  ├─ Footer.astro
│  │  │  └─ Layout.astro
│  │  │
│  │  └─ features/                # Feature components (statiques)
│  │     ├─ TrustBand.astro
│  │     ├─ TeamBlock.astro
│  │     ├─ FinalCTA.astro
│  │     ├─ GDPRBanner.tsx        # Island
│  │     ├─ GDPRSettings.tsx      # Island
│  │     ├─ GDPRBadge.astro
│  │     └─ ContractualReassurance.astro
│  │
│  ├─ layouts/                    # Layouts Astro
│  │  └─ MainLayout.astro         # Layout principal (Header + Footer)
│  │
│  ├─ hooks/                      # React hooks
│  │  ├─ useGDPRConsent.ts
│  │  └─ useScrollAnimation.ts
│  │
│  ├─ utils/                      # Utilities
│  │  └─ gdprConsent.ts
│  │
│  └─ styles/                     # Styles globaux
│     └─ globals.css
│
├─ public/                        # Assets statiques
│  ├─ images/
│  ├─ fonts/
│  └─ favicon.svg
│
├─ astro.config.mjs               # Config Astro
├─ tailwind.config.js             # Config Tailwind
├─ tsconfig.json                  # Config TypeScript
└─ package.json
```

---

## 📄 Pages Astro

### Liste des Pages (11 pages)

| Page | URL | Fichier | Complexité | Islands |
|------|-----|---------|-----------|---------|
| **Accueil** | `/` | `index.astro` | 🟥 Élevée | 6 islands |
| **Offre** | `/offre` | `offre.astro` | 🟩 Faible | 0 |
| **Méthode** | `/methode` | `methode.astro` | 🟩 Faible | 0 |
| **Études de Cas** | `/etudes-de-cas` | `etudes-de-cas.astro` | 🟩 Faible | 0 |
| **Audit Gratuit** | `/audit-gratuit` | `audit-gratuit.astro` | 🟧 Moyenne | 3 islands |
| **Contact** | `/contact` | `contact.astro` | 🟨 Moyenne | 1-2 islands |
| **Réservation** | `/reservation` | `reservation.astro` | 🟨 Moyenne | 1 island |
| **CGV** | `/cgv` | `cgv.astro` | 🟩 Très faible | 0 |
| **Mentions Légales** | `/mentions-legales` | `mentions-legales.astro` | 🟩 Très faible | 0 |
| **Politique Confidentialité** | `/politique-confidentialite` | `politique-confidentialite.astro` | 🟩 Très faible | 0 |
| **404** | `/404` | `404.astro` | 🟩 Très faible | 0 |

---

### Exemple Page Astro (Landing)

**Fichier** : `src/pages/index.astro`

```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
import { HeroAnimation } from '@/components/islands/HeroAnimation';
import { PainPointsSection } from '@/components/islands/PainPointsSection';
import { PageSpeedProof } from '@/components/islands/PageSpeedProof';
import { SolutionsSection } from '@/components/islands/SolutionsSection';
import { TeamBlock } from '@/components/islands/TeamBlock';
import { FAQ } from '@/components/islands/FAQ';
import TrustBand from '@/components/features/TrustBand.astro';
import FinalCTA from '@/components/features/FinalCTA.astro';

// Optional: Fetch data from Strapi
const faqData = await fetch('https://api.confluence-digitale.fr/api/faqs?populate=*')
  .then(res => res.json())
  .then(data => data.data);
---

<MainLayout title="Confluence Digitale - Transformation Digitale TPE/PME">
  <!-- Hero Section (Island) -->
  <HeroAnimation client:load />
  
  <!-- Pain Points Section (Island) -->
  <PainPointsSection client:visible />
  
  <!-- Performance Proof (Island) -->
  <PageSpeedProof client:visible />
  
  <!-- Solutions Section (Island) -->
  <SolutionsSection client:visible />
  
  <!-- Stats Section (Static) -->
  <section class="py-20 bg-gradient-to-br from-[#D1A65E] to-[#A32E3A] text-white">
    <div class="container mx-auto px-4 text-center">
      <div class="grid md:grid-cols-3 gap-12">
        <div>
          <div class="text-5xl font-bold mb-2">95+</div>
          <p class="text-xl">Score Lighthouse</p>
        </div>
        <div>
          <div class="text-5xl font-bold mb-2">100%</div>
          <p class="text-xl">Satisfaction Client</p>
        </div>
        <div>
          <div class="text-5xl font-bold mb-2">30j</div>
          <p class="text-xl">Mise en ligne garantie</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Team Section (Island) -->
  <TeamBlock client:visible />
  
  <!-- Trust Band (Static) -->
  <TrustBand />
  
  <!-- FAQ Section (Island with SSR data) -->
  <FAQ client:visible questions={faqData} />
  
  <!-- Final CTA (Static) -->
  <FinalCTA />
</MainLayout>
```

---

## 🧩 Composants Réutilisables

### Layout Components (Astro)

**Dossier** : `/src/components/layout/`

#### MainLayout.astro

**Usage** : Layout principal avec Header + Footer

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description = "Transformation digitale TPE/PME" } = Astro.props;
---

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="description" content={description}>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
</head>
<body>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</body>
</html>
```

#### Header.astro

**Responsabilités** :
- Navigation principale (menu desktop + mobile)
- Logo Confluence
- CTA "Réserver un appel"
- Sticky header avec transition

**Sections** :
- Logo (lien vers home)
- Navigation (Offre, Méthode, Études de Cas, Audit, Contact)
- CTA button

#### Footer.astro

**Responsabilités** :
- Liens footer (Services, Légal, Contact)
- Social links (LinkedIn, Twitter, etc.)
- Copyright
- GDPR badge

**Sections** :
- Colonne 1 : À propos + Logo
- Colonne 2 : Services (liens)
- Colonne 3 : Légal (CGV, Mentions, Politique)
- Colonne 4 : Contact (email, téléphone)
- Barre copyright + GDPR

---

### Design System Components (React)

**Dossier** : `/src/components/ui/`

Liste complète des 16 composants DS V6.7.2.

#### DSButton

**Props** :
```typescript
interface DSButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
```

**Usage** :
```tsx
<DSButton variant="primary" size="lg" onClick={handleClick}>
  Réserver un appel
</DSButton>
```

#### DSCard

**Props** :
```typescript
interface DSCardProps {
  variant?: 'default' | 'bordered' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

**Usage** :
```tsx
<DSCard 
  variant="elevated" 
  padding="lg" 
  hover={true}
  className="cursor-pointer"
>
  <h3>Titre carte</h3>
  <p>Description...</p>
</DSCard>
```

**Sous-composants** :
- `DSCardHeader` : En-tête carte
- `DSCardBody` : Corps carte
- `DSCardFooter` : Pied de carte

#### Autres Composants DS

| Composant | Usage Principal |
|-----------|----------------|
| `DSBadge` | Labels, tags, indicateurs |
| `DSInput` | Champs texte formulaires |
| `DSTextarea` | Champs texte longs |
| `DSSelect` | Sélecteurs dropdown |
| `DSCheckbox` | Cases à cocher |
| `DSSwitch` | Toggles on/off |
| `DSDialog` | Modales/popups |
| `DSDrawer` | Panneaux latéraux |
| `DSAccordion` | Accordéons/FAQ |
| `DSTabs` | Onglets |
| `DSAlert` | Alertes/notifications |
| `DSPanel` | Conteneurs |
| `DSSectionHeader` | Titres de section |
| `DSLabel` | Labels formulaires |

---

### Feature Components

**Dossier** : `/src/components/features/`

#### TrustBand.astro (Statique)

**Description** : Bande de confiance avec logos partenaires/clients.

**Usage** : Landing, Offre, Études de Cas

**Contenu** :
- Titre "Ils nous font confiance"
- Grid de logos (6-8 logos)
- Logos en grayscale + hover color

#### FinalCTA.astro (Statique)

**Description** : CTA de fin de page (call-to-action).

**Usage** : Landing, Offre, Méthode

**Contenu** :
- Titre impactant
- Sous-titre court
- 2 boutons CTA (Réserver + Audit)
- Background gradient premium

#### ContractualReassurance.astro (Statique)

**Description** : Bloc garanties contractuelles.

**Usage** : Réservation, Offre

**Contenu** :
- 4 garanties (30j, Satisfaction, Performance, Support)
- Icônes + texte
- Badge "Garantie contractuelle"

---

## ⚡ React Islands

### Liste des 11 Islands

**Dossier** : `/src/components/islands/`

| Island | Hydratation | Complexité | Pages | Description |
|--------|-------------|-----------|-------|-------------|
| `HeroAnimation` | `client:load` | Moyenne | Landing | Hero avec animations (fade-in, slide-up) |
| `PainPointsSection` | `client:visible` | Moyenne | Landing | Accordion pain points + solutions |
| `PageSpeedProof` | `client:visible` | Moyenne | Landing | Compteurs animés (score PageSpeed) |
| `SolutionsSection` | `client:visible` | Moyenne | Landing | Cartes solutions interactives |
| `TeamBlock` | `client:visible` | Faible | Landing | Équipe triad (Antoine, Pascal, Laly) |
| `FAQ` | `client:visible` | Moyenne | Landing, Contact | Accordion FAQ |
| `AuditForm` | `client:load` | Élevée | Audit | Formulaire + validation |
| `ArcGauge` | (child) | Moyenne | Audit | Jauge animée SVG |
| `AuditResults` | (child) | Faible | Audit | Affichage résultats |
| `ContactForm` | `client:load` | Moyenne | Contact | Formulaire contact |
| `ReservationForm` | `client:load` | Élevée | Réservation | Formulaire + date picker |

---

### Island Détaillé : AuditForm

**Fichier** : `/src/components/islands/AuditForm.tsx`

**Complexité** : 🟥 Élevée (parent de 2 child islands)

**Responsabilités** :
- État formulaire (URL site, email)
- Validation champs (regex, required)
- Fetch API audit (simulation ou Strapi)
- Gestion score (0-100)
- Orchestration de 2 child islands

**Props** :
```typescript
interface AuditFormProps {
  onScoreChange?: (score: number) => void;
  apiEndpoint?: string;
}
```

**Architecture** :
```
AuditForm (client:load)
├─ ArcGauge (child, animated gauge)
└─ AuditResults (child, conditional render)
```

**État** :
```typescript
const [url, setUrl] = useState('');
const [email, setEmail] = useState('');
const [score, setScore] = useState(0);
const [loading, setLoading] = useState(false);
const [results, setResults] = useState(null);
```

**Usage dans Astro** :
```astro
---
import { AuditForm } from '@/components/islands/AuditForm';
---

<section class="container mx-auto px-4 py-20">
  <h2>Auditez votre site gratuitement</h2>
  <AuditForm client:load />
</section>
```

---

### Island Détaillé : ContactForm

**Fichier** : `/src/components/islands/ContactForm.tsx`

**Complexité** : 🟨 Moyenne

**Responsabilités** :
- Validation temps réel (email, téléphone, message)
- Submit API (Strapi ou EmailJS)
- Loading states + feedback (toast)
- Accessibility (labels, aria-*)

**Technologies** :
- `react-hook-form` (validation)
- `sonner` (toast notifications)

**Code** :
```tsx
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { DSInput, DSTextarea, DSButton } from '@/components/ui';

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  
  const onSubmit = async (data) => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      toast.success('Message envoyé !');
    } catch (error) {
      toast.error('Erreur lors de l\'envoi');
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Champs formulaire */}
    </form>
  );
}
```

---

## 🚀 Stratégie d'Hydratation

### Règles de Décision

| Condition | Hydratation | Justification |
|-----------|-------------|---------------|
| Formulaire (input utilisateur) | `client:load` | Interaction immédiate nécessaire |
| Animation au load | `client:load` | Effet visuel dès l'arrivée |
| Contenu interactif (hover, click) | `client:visible` | Lazy-load quand visible |
| Contenu statique (texte, image) | **Aucune** | Pure SSR (optimal SEO + perf) |
| Layout (Header, Footer) | **Aucune** | Composants Astro (zero JS) |

### Directives Astro

| Directive | Moment | Usage |
|-----------|--------|-------|
| `client:load` | Immédiat (page load) | Forms critiques, Hero animations |
| `client:visible` | Quand visible (IntersectionObserver) | FAQ, Sections interactives |
| `client:idle` | Après idle (requestIdleCallback) | Widgets non critiques |
| `client:media` | Selon media query | Mobile vs Desktop |
| `client:only` | Client-side uniquement (no SSR) | Composants incompatibles SSR |

### Performance Budget

| Page | Islands | JS Total (estimé) | Hydratation |
|------|---------|-------------------|-------------|
| Landing | 6 | ~150 KB | 1 load + 5 visible |
| Audit | 3 (1 parent + 2 child) | ~80 KB | 1 load (parent orchestre) |
| Contact | 1-2 | ~40 KB | 1 load + 1 visible (FAQ optionnel) |
| Réservation | 1 | ~50 KB | 1 load |
| Offre, Méthode, Légales | 0 | **0 KB** | Pure SSR |

**Cibles Lighthouse** :
- Performance : 95+ (Desktop), 90+ (Mobile)
- SEO : 100
- Accessibility : 100
- Best Practices : 100

---

## 🔧 Hooks & Utilities

### React Hooks

**Dossier** : `/src/hooks/`

#### useGDPRConsent

**Fichier** : `useGDPRConsent.ts`

**Description** : Hook pour gérer le consentement RGPD et initialiser analytics.

**Retour** :
```typescript
{
  consent: ConsentData | null;
  hasConsent: boolean;
  hasAnalytics: boolean;
  hasPerformance: boolean;
}
```

**Usage** :
```tsx
import { useGDPRConsent } from '@/hooks/useGDPRConsent';

function MyComponent() {
  const { hasAnalytics, hasPerformance } = useGDPRConsent();
  
  useEffect(() => {
    if (hasAnalytics) {
      // Google Analytics 4 actif
      initializeGA4('G-XXXXXXXXXX');
    }
  }, [hasAnalytics]);
}
```

**Responsabilités** :
- Lecture localStorage (`confluence-gdpr-consent`)
- État réactif du consentement
- Écoute changements (multi-tab sync)
- Initialisation conditionnelle GA4 + Hotjar

---

#### useScrollAnimation

**Fichier** : `useScrollAnimation.ts`

**Description** : Hook pour animer les éléments au scroll (IntersectionObserver).

**Usage** :
```tsx
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function MyComponent() {
  const ref = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '0px'
  });
  
  return (
    <div 
      ref={ref} 
      className="opacity-0 translate-y-8 transition-all duration-700"
      data-animate="fade-up"
    >
      Contenu animé au scroll
    </div>
  );
}
```

**Responsabilités** :
- Détection visibilité éléments (IntersectionObserver)
- Ajout/suppression classes CSS
- Cleanup automatique (performance)

---

### Utilities

**Dossier** : `/src/utils/`

#### gdprConsent.ts

**Fichier** : `gdprConsent.ts`

**Description** : Utilitaires RGPD (localStorage, analytics).

**Fonctions exportées** :

| Fonction | Paramètres | Retour | Description |
|----------|------------|--------|-------------|
| `getConsent()` | - | `ConsentData \| null` | Récupère le consentement actuel |
| `hasAnalyticsConsent()` | - | `boolean` | Vérifie si analytics autorisé |
| `hasPerformanceConsent()` | - | `boolean` | Vérifie si performance autorisé |
| `updateConsent()` | `analytics: boolean, performance: boolean` | `void` | Met à jour le consentement |
| `clearConsent()` | - | `void` | Supprime le consentement |
| `initializeGA4()` | `measurementId: string` | `void` | Initialise Google Analytics 4 |
| `initializeHotjar()` | `siteId: number, version?: number` | `void` | Initialise Hotjar |

**Interface** :
```typescript
interface ConsentData {
  timestamp: string;
  analytics: boolean;
  performance: boolean;
}
```

**Usage** :
```tsx
import { updateConsent, initializeGA4 } from '@/utils/gdprConsent';

// User accepte cookies
updateConsent(true, true);

// Initialiser GA4 (si consent donné)
if (hasAnalyticsConsent()) {
  initializeGA4('G-XXXXXXXXXX');
}
```

---

## 🔌 Intégration Backend

### Architecture Backend (Optionnel)

**Stack Backend** :
- Strapi v4 (CMS headless)
- PostgreSQL (database)
- Railway (hosting)
- Cloudinary (media storage)

**Documentation** : `/backend-documentation/`

### Content Types Disponibles (9 types)

| Content Type | Usage Frontend | Endpoint API | Page Astro |
|--------------|----------------|--------------|------------|
| **Page** | Pages dynamiques | `/api/pages?populate=*` | Toutes pages |
| **Article** | Blog (futur) | `/api/articles?populate=*` | `/blog` |
| **Service** | Services détaillés | `/api/services?populate=*` | `/offre` |
| **Testimonial** | Témoignages clients | `/api/testimonials?populate=*` | Landing, Études |
| **Team Member** | Équipe (Antoine, Pascal, Laly) | `/api/team-members?populate=*` | Landing, Méthode |
| **FAQ** | Questions fréquentes | `/api/faqs?populate=*` | Landing, Contact |
| **Contact** | Soumissions formulaires | `/api/contacts` (POST) | Contact |
| **Case Study** | Études de cas | `/api/case-studies?populate=*` | Études de Cas |
| **Availability** | Disponibilités | `/api/availabilities?populate=*` | Réservation |

---

### Intégration Astro SSR

**Exemple** : Fetch FAQ depuis Strapi

**Fichier** : `src/pages/index.astro`

```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
import { FAQ } from '@/components/islands/FAQ';

// Fetch FAQ data (SSR)
const STRAPI_URL = import.meta.env.STRAPI_URL;
const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN;

const faqData = await fetch(`${STRAPI_URL}/api/faqs?populate=*`, {
  headers: {
    'Authorization': `Bearer ${STRAPI_TOKEN}`
  }
})
  .then(res => res.json())
  .then(data => data.data)
  .catch(err => {
    console.error('Error fetching FAQ:', err);
    return [];
  });
---

<MainLayout title="Accueil - Confluence Digitale">
  <!-- Static content -->
  
  <!-- Dynamic FAQ from Strapi (SSR + client:visible) -->
  <section class="container mx-auto px-4 py-20">
    <h2>Questions fréquentes</h2>
    <FAQ client:visible questions={faqData} />
  </section>
</MainLayout>
```

**Avantages** :
- ✅ SEO optimal (contenu dans HTML initial)
- ✅ Contenu éditable via Strapi CMS
- ✅ Pas de fetch côté client (performance)
- ✅ Hydratation sélective (FAQ island)

---

### Variables d'Environnement

**Fichier** : `.env`

```bash
# Strapi Backend
STRAPI_URL=https://api.confluence-digitale.fr
STRAPI_TOKEN=your_read_only_token_here

# Google Analytics (GDPR)
GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# Hotjar (GDPR)
HOTJAR_SITE_ID=1234567

# EmailJS (Formulaires)
EMAILJS_SERVICE_ID=service_xxx
EMAILJS_TEMPLATE_ID=template_xxx
EMAILJS_PUBLIC_KEY=xxx
```

**Usage dans Astro** :
```astro
---
const strapiUrl = import.meta.env.STRAPI_URL;
const strapiToken = import.meta.env.STRAPI_TOKEN;
---
```

**Usage dans React Islands** :
```tsx
// ⚠️ Attention : Accessible côté client (ne pas exposer secrets)
const publicKey = import.meta.env.PUBLIC_EMAILJS_KEY;
```

---

### Pages Connectées au Backend

| Page | Content Type | Fetch Moment | Hydratation | Statique possible |
|------|--------------|--------------|-------------|-------------------|
| **Landing** | FAQ, Team, Testimonial | SSR (Astro) | Islands `client:visible` | Oui (avec fallback) |
| **Études de Cas** | Case Study | SSR (Astro) | Statique | Oui (HTML pur) |
| **Contact** | Contact (POST) | Client (Form) | Island `client:load` | Non (formulaire) |
| **Réservation** | Availability, Contact | SSR + Client | Island `client:load` | Partiel |
| **Offre** | Service | SSR (Astro) | Statique | Oui (HTML pur) |

**Note** : Toutes les pages peuvent fonctionner **sans backend** (données hardcodées).

---

## 📊 Statistiques du Projet

### Résumé Architecture

```
📁 Pages : 11 pages Astro
   ├─ 🟥 Complexes : 2 (Landing, Audit)
   ├─ 🟨 Moyennes : 2 (Contact, Réservation)
   └─ 🟩 Simples : 7 (Offre, Méthode, Études, Légales, 404)

⚡ React Islands : 11 islands
   ├─ client:load : 3 (forms + hero)
   ├─ client:visible : 6 (accordions, sections)
   └─ child islands : 2 (ArcGauge, AuditResults)

🧩 Composants DS : 16 composants UI
🔧 Composants Features : 8 composants métier
🛡️ Composants GDPR : 4 composants conformité
📐 Layouts : 3 layouts Astro (Main, Header, Footer)

📦 Total fichiers :
   ├─ Pages : 11 fichiers .astro
   ├─ Islands : 11 fichiers .tsx
   ├─ DS Components : 16 fichiers .tsx
   ├─ Feature Components : 8 fichiers .astro
   ├─ Layouts : 3 fichiers .astro
   └─ Hooks/Utils : 3 fichiers .ts
```

---

## ✅ Checklist Migration Complète

### Phase 1 : Setup Astro

- [ ] Initialiser projet Astro (`npm create astro@latest`)
- [ ] Installer dépendances (React, Tailwind, TypeScript)
- [ ] Configurer `astro.config.mjs` (intégrations)
- [ ] Configurer `tailwind.config.js` (theme extend)
- [ ] Copier `/styles/globals.css`

### Phase 2 : Layout & Composants

- [ ] Créer `MainLayout.astro` (structure HTML)
- [ ] Convertir Header en `Header.astro` (statique)
- [ ] Convertir Footer en `Footer.astro` (statique)
- [ ] Migrer 16 composants DS dans `/src/components/ui/`
- [ ] Créer composants features (TrustBand, FinalCTA, etc.)

### Phase 3 : Pages Statiques (7 pages)

- [ ] Créer pages légales (CGV, Mentions, Politique, 404)
- [ ] Créer Offre, Méthode, Études de Cas
- [ ] Valider SEO (meta tags, Open Graph)
- [ ] Tester Lighthouse (95+ score)

### Phase 4 : Pages avec Islands (4 pages)

- [ ] Landing : 6 islands (HeroAnimation, FAQ, etc.)
- [ ] Audit : 3 islands imbriqués (AuditForm, ArcGauge, AuditResults)
- [ ] Contact : 1 island (ContactForm)
- [ ] Réservation : 1 island (ReservationForm)
- [ ] Valider hydratation sélective

### Phase 5 : Intégration Backend (Optionnel)

- [ ] Setup Strapi (9 Content Types)
- [ ] Configurer variables d'environnement
- [ ] Fetch SSR dans pages Astro
- [ ] Tester API endpoints

### Phase 6 : Production

- [ ] Générer sitemap.xml
- [ ] Créer robots.txt
- [ ] Optimiser images (WebP, lazy-load)
- [ ] Tests E2E (Playwright/Cypress)
- [ ] Déployer (Vercel/Netlify/Cloudflare)

---

## 🔗 Ressources

### Documentation

- **Design System** : `/design-system.md`
- **Guidelines** : `/guidelines/Guidelines.md`
- **Backend** : `/backend-documentation/`

### Configuration

- **Astro Config** : `astro.config.mjs`
- **Tailwind Config** : `tailwind.config.js`
- **TypeScript Config** : `tsconfig.json`

### Scripts NPM

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  }
}
```

---

**Dernière mise à jour** : Novembre 2024  
**Auteur** : Confluence Digitale  
**Version** : 6.7.2 V2 - Architecture Finale Astro  
**Statut** : ✅ Prêt pour développement VS Code
