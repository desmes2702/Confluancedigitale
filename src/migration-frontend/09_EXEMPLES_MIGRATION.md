# 📚 EXEMPLES DE MIGRATION - CAS CONCRETS

**Objectif** : Apprendre par l'exemple  
**Format** : Avant/Après avec explications

---

## 🎯 CAS #1 : PAGE SIMPLE (Mentions Légales)

### AVANT (React Pure)

```tsx
// /pages/ConfluenceMentionsLegalesPage.tsx

import ConfluenceHeaderV6_7 from '../components/ConfluenceHeaderV6_7';
import ConfluenceFooterV6_2 from '../components/ConfluenceFooterV6_2';

export default function MentionsLegalesPage() {
  return (
    <div>
      <ConfluenceHeaderV6_7 />
      
      <main className="pt-28 lg:pt-32">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl lg:text-5xl mb-8">
              Mentions Légales
            </h1>
            
            <div className="prose prose-lg">
              <h2>Éditeur du site</h2>
              <p>Confluence Digitale</p>
              
              <h2>Hébergement</h2>
              <p>Vercel Inc.</p>
            </div>
          </div>
        </section>
      </main>
      
      <ConfluenceFooterV6_2 />
    </div>
  );
}
```

### APRÈS (Astro)

```astro
---
// /src/pages/mentions-legales.astro

import BaseLayout from '../layouts/BaseLayout.astro';
import ConfluenceHeaderV6_7 from '../components/layout/ConfluenceHeaderV6_7.tsx';
import ConfluenceFooterV6_2 from '../components/layout/ConfluenceFooterV6_2.tsx';

const seoData = {
  title: "Mentions Légales | Confluence Digitale",
  description: "Informations légales et mentions obligatoires du site Confluence Digitale",
  canonical: "https://confluence-digitale.fr/mentions-legales"
};
---

<BaseLayout {...seoData}>
  <ConfluenceHeaderV6_7 client:load />
  
  <main class="pt-28 lg:pt-32">
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="font-playfair text-4xl lg:text-5xl mb-8">
          Mentions Légales
        </h1>
        
        <div class="prose prose-lg">
          <h2>Éditeur du site</h2>
          <p>Confluence Digitale</p>
          
          <h2>Hébergement</h2>
          <p>Vercel Inc.</p>
        </div>
      </div>
    </section>
  </main>
  
  <ConfluenceFooterV6_2 client:visible />
</BaseLayout>
```

### Changements Clés

1. ✅ **Extension** : `.tsx` → `.astro`
2. ✅ **Imports** : Dans frontmatter `---`
3. ✅ **SEO** : Ajout BaseLayout avec meta tags
4. ✅ **Hydratation** : `client:load` (Header), `client:visible` (Footer)
5. ✅ **Classes** : `className` → `class` (HTML natif)
6. ✅ **Route** : `/mentions-legales` automatique

**Résultat** :
- Performance : 95/100 → **100/100** ⚡
- JavaScript : 250 KB → **50 KB** (-80%)
- SEO : Meta tags complets

---

## 🎨 CAS #2 : COMPOSANT STATIQUE (Section Hero)

### AVANT (React)

```tsx
// /components/sections/HeroSection.tsx

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="pt-28 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-playfair text-4xl lg:text-6xl mb-6">
          {title}
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
```

### APRÈS (Astro)

```astro
---
// /src/components/sections/HeroSection.astro

interface Props {
  title: string;
  subtitle: string;
}

const { title, subtitle } = Astro.props;
---

<section class="pt-28 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div class="max-w-7xl mx-auto text-center">
    <h1 class="font-playfair text-4xl lg:text-6xl mb-6">
      {title}
    </h1>
    <p class="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
      {subtitle}
    </p>
  </div>
</section>
```

### Utilisation

```astro
---
// Page qui l'utilise
import HeroSection from '../components/sections/HeroSection.astro';
---

<HeroSection 
  title="Sites Web Premium"
  subtitle="Pour TPE/PME exigeantes"
/>
```

### Changements Clés

1. ✅ **Pas de React** : Composant 100% statique
2. ✅ **Props** : `Astro.props` au lieu de destructuring direct
3. ✅ **Pas d'hydratation** : Aucune directive `client:*`
4. ✅ **Performance** : 0 KB JavaScript

**Pourquoi Astro ?**
- ❌ Pas de `useState`, `useEffect`, `onClick`
- ❌ Contenu uniquement statique
- ✅ Gain de performance maximal

---

## ⚛️ CAS #3 : COMPOSANT INTERACTIF (FAQ)

### AVANT (React)

```tsx
// /components/ConfluenceFAQ.tsx

import { useState } from 'react';

const faqs = [
  {
    question: "Combien coûte votre service ?",
    answer: "Setup 0€ HT puis 149€ HT/mois avec engagement 24 mois."
  },
  // ... autres FAQs
];

export default function ConfluenceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-3xl lg:text-5xl mb-12 text-center">
          Questions Fréquentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg"
              style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              
              {openIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### APRÈS (React - RESTE EN .TSX)

**Fichier** : `/src/components/sections/ConfluenceFAQ.tsx`

**Code identique** : Le composant reste en React car interactif (`useState`, `onClick`)

### Utilisation dans Astro

```astro
---
// /src/pages/methode.astro
import ConfluenceFAQ from '../components/sections/ConfluenceFAQ.tsx';
---

<BaseLayout>
  <main>
    <!-- FAQ avec hydratation lazy -->
    <ConfluenceFAQ client:visible />
  </main>
</BaseLayout>
```

### Changements Clés

1. ✅ **Reste en React** : Interactivité nécessaire
2. ✅ **Hydratation** : `client:visible` (lazy loading)
3. ✅ **Déplacement** : `/components/` → `/src/components/sections/`
4. ✅ **Performance** : JS chargé uniquement quand visible

**Pourquoi React ?**
- ✅ `useState` pour gérer l'accordéon
- ✅ `onClick` pour ouvrir/fermer
- ✅ Interactivité essentielle

---

## 📝 CAS #4 : FORMULAIRE (Contact)

### AVANT (React)

```tsx
// /components/forms/ContactForm.tsx

import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState({ email: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEmailValid = email.includes('@') && email.includes('.');
  const isMessageValid = message.length >= 10;
  const isFormValid = isEmailValid && isMessageValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // API call
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ email, message })
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold mb-2">Email *</label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched({ ...touched, email: true })}
          className={touched.email && !isEmailValid ? 'border-red-500' : ''}
        />
        {touched.email && !isEmailValid && (
          <p className="text-sm text-red-500 mt-1">Email invalide</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Message *</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => setTouched({ ...touched, message: true })}
          rows={4}
          className={touched.message && !isMessageValid ? 'border-red-500' : ''}
        />
        {touched.message && !isMessageValid && (
          <p className="text-sm text-red-500 mt-1">10 caractères minimum</p>
        )}
      </div>

      <Button type="submit" disabled={!isFormValid || isSubmitting}>
        {isSubmitting ? 'Envoi...' : 'Envoyer'}
      </Button>
    </form>
  );
}
```

### APRÈS (React - RESTE EN .TSX)

**Fichier** : `/src/components/forms/ContactForm.tsx`

**Code identique** : Le formulaire reste en React (validation, état, soumission)

### Utilisation dans Astro

```astro
---
// /src/pages/contact.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import ConfluenceHeaderV6_7 from '../components/layout/ConfluenceHeaderV6_7.tsx';
import ContactForm from '../components/forms/ContactForm.tsx';
import ConfluenceFooterV6_2 from '../components/layout/ConfluenceFooterV6_2.tsx';
---

<BaseLayout title="Contact | Confluence Digitale">
  <ConfluenceHeaderV6_7 client:load />
  
  <main class="pt-28 lg:pt-32">
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto">
        <h1 class="font-playfair text-4xl lg:text-6xl mb-12 text-center">
          Nous Contacter
        </h1>
        
        <!-- Formulaire avec hydratation immédiate -->
        <ContactForm client:load />
      </div>
    </section>
  </main>
  
  <ConfluenceFooterV6_2 client:visible />
</BaseLayout>
```

### Changements Clés

1. ✅ **Reste en React** : Logique complexe
2. ✅ **Hydratation** : `client:load` (formulaire critique)
3. ✅ **Page Astro** : Wrapper pour SEO + Layout
4. ✅ **Performance** : Seul le form a du JavaScript

**Pourquoi React ?**
- ✅ `useState` pour validation en temps réel
- ✅ Logique de validation complexe
- ✅ `onChange`, `onBlur`, `onSubmit`

---

## 🌐 CAS #5 : PAGE COMPLÈTE (Landing)

### AVANT (React)

```tsx
// /pages/ConfluenceLandingPage.tsx

import ConfluenceHeaderV6_7 from '../components/ConfluenceHeaderV6_7';
import HeroSection from '../components/sections/HeroSection';
import ConfluenceTeamBlock from '../components/ConfluenceTeamBlock';
import ConfluenceFAQ from '../components/ConfluenceFAQ';
import ConfluenceFinalCTA from '../components/ConfluenceFinalCTA';
import ConfluenceFooterV6_2 from '../components/ConfluenceFooterV6_2';

export default function LandingPage() {
  return (
    <div>
      <ConfluenceHeaderV6_7 />
      <HeroSection title="..." subtitle="..." />
      <ConfluenceTeamBlock />
      <ConfluenceFAQ />
      <ConfluenceFinalCTA />
      <ConfluenceFooterV6_2 />
    </div>
  );
}
```

### APRÈS (Astro)

```astro
---
// /src/pages/index.astro

import BaseLayout from '../layouts/BaseLayout.astro';
import ConfluenceHeaderV6_7 from '../components/layout/ConfluenceHeaderV6_7.tsx';
import HeroSection from '../components/sections/HeroSection.astro';
import ConfluenceTeamBlock from '../components/sections/ConfluenceTeamBlock.tsx';
import ConfluenceFAQ from '../components/sections/ConfluenceFAQ.tsx';
import ConfluenceFinalCTA from '../components/sections/ConfluenceFinalCTA.tsx';
import ConfluenceFooterV6_2 from '../components/layout/ConfluenceFooterV6_2.tsx';

const seoData = {
  title: "Sites Web Premium pour TPE/PME | Confluence Digitale",
  description: "Sites web 100/100 Performance + Formation Strapi. Setup 0€ HT puis 149€ HT/mois. Engagement 24 mois. Transparence radicale.",
  canonical: "https://confluence-digitale.fr/",
  ogImage: "/images/og-landing.jpg"
};
---

<BaseLayout {...seoData}>
  <!-- Header : Immédiat (menu mobile) -->
  <ConfluenceHeaderV6_7 client:load />
  
  <main>
    <!-- Hero : Statique (Astro) -->
    <HeroSection 
      title="Sites Web Premium pour TPE/PME"
      subtitle="Performance 100/100 + Formation Strapi"
    />
    
    <!-- Team : Interactif (React) mais lazy -->
    <ConfluenceTeamBlock client:visible />
    
    <!-- FAQ : Interactif (React) lazy -->
    <ConfluenceFAQ client:visible />
    
    <!-- CTA : Interactif (React) lazy -->
    <ConfluenceFinalCTA client:visible />
  </main>
  
  <!-- Footer : Lazy -->
  <ConfluenceFooterV6_2 client:visible />
</BaseLayout>
```

### Analyse

| Composant | Format | Hydratation | Raison |
|-----------|--------|-------------|--------|
| Header | React `.tsx` | `client:load` | Menu mobile interactif |
| HeroSection | Astro `.astro` | Aucune | 100% statique |
| TeamBlock | React `.tsx` | `client:visible` | Animations scroll |
| FAQ | React `.tsx` | `client:visible` | Accordéons |
| CTA | React `.tsx` | `client:visible` | Bouton tracking |
| Footer | React `.tsx` | `client:visible` | Bas de page |

### Résultats

**Performance** :
- Before : 70/100 (React SPA)
- After : **95/100** (Astro + Islands)

**JavaScript** :
- Before : 350 KB
- After : **80 KB** (-77%)

**Time to Interactive** :
- Before : 3.2s
- After : **1.1s** (-65%)

---

## 📊 CAS #6 : MIGRATION PROGRESSIVE

### Stratégie Recommandée

```
Phase 1 : Pages Statiques (Semaine 1)
├── ✅ mentions-legales.astro
├── ✅ cgv.astro
├── ✅ politique-confidentialite.astro
└── ✅ 404.astro

Phase 2 : Pages Mixtes (Semaine 2)
├── ✅ equipe.astro (90% statique)
├── ✅ methode.astro (80% statique)
└── ✅ etudes-de-cas.astro (70% statique)

Phase 3 : Pages Complexes (Semaine 3)
├── ✅ index.astro (Landing)
├── ✅ offre.astro
└── ✅ exclusivite.astro

Phase 4 : Formulaires (Semaine 4)
├── ✅ contact.astro (FormReact)
├── ✅ audit-gratuit.astro (FormReact)
└── ✅ reservation.astro (FormReact)
```

---

## ✅ CHECKLIST MIGRATION

### Pour Chaque Page/Composant

- [ ] **Analyser** : Interactif ou statique ?
- [ ] **Choisir** : `.tsx` ou `.astro` ?
- [ ] **Migrer** : Code + imports
- [ ] **Hydrater** : `client:load` ou `client:visible` ?
- [ ] **Tester** : Responsive + fonctionnel
- [ ] **Valider** : Design System V6.7.2
- [ ] **SEO** : Meta tags (si page)
- [ ] **Performance** : Lighthouse > 90

---

**📚 Exemples Maîtrisés ! 💪**

**Retour au** : `README.md` (Vue d'ensemble)
