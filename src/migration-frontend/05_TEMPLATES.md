# 📋 TEMPLATES - PRÊTS À L'EMPLOI

**Objectif** : Copier-coller pour gagner du temps  
**Formats** : Pages Astro + Composants React

---

## 📄 TEMPLATE #1 : PAGE ASTRO COMPLÈTE

```astro
---
// src/pages/ma-page.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import ConfluenceHeaderV6_7 from '../components/layout/ConfluenceHeaderV6_7.tsx';
import ConfluenceFooterV6_2 from '../components/layout/ConfluenceFooterV6_2.tsx';

const seoData = {
  title: "Titre de la Page | Confluence Digitale",
  description: "Description SEO de 150-160 caractères pour améliorer le référencement naturel",
  canonical: "https://confluence-digitale.fr/ma-page",
  ogImage: "/images/og-ma-page.jpg"
};
---

<BaseLayout {...seoData}>
  <!-- Header -->
  <ConfluenceHeaderV6_7 client:load />
  
  <main>
    <!-- Hero Section -->
    <section className="pt-28 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-playfair text-4xl lg:text-6xl mb-6">
          Titre Principal de la Page
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Sous-titre ou description courte de la page
        </p>
        <button className="
          px-8 py-4 
          bg-emerald-500 hover:bg-emerald-600 
          text-white font-semibold 
          rounded-lg 
          transition-all duration-300
        ">
          Appel à l'Action
        </button>
      </div>
    </section>

    <!-- Section Contenu -->
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl lg:text-5xl mb-12 text-center">
          Section Titre
        </h2>
        
        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-6 lg:gap-8
        ">
          {/* Cartes */}
          <div 
            className="bg-white p-6 rounded-lg"
            style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
          >
            <h3 className="font-playfair text-2xl mb-4">Item 1</h3>
            <p className="text-gray-600">Description de l'item</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <ConfluenceFooterV6_2 client:visible />
</BaseLayout>
```

---

## ⚛️ TEMPLATE #2 : COMPOSANT REACT SIMPLE

```tsx
// src/components/sections/MonComposant.tsx

interface MonComposantProps {
  title: string;
  description?: string;
}

export default function MonComposant({ title, description }: MonComposantProps) {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl lg:text-5xl mb-8 text-center">
          {title}
        </h2>
        
        {description && (
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            {description}
          </p>
        )}

        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-6
        ">
          {/* Contenu */}
        </div>
      </div>
    </section>
  );
}
```

---

## 🎛️ TEMPLATE #3 : COMPOSANT REACT INTERACTIF

```tsx
// src/components/sections/MonComposantInteractif.tsx
import { useState } from 'react';

interface Item {
  id: number;
  title: string;
  content: string;
}

const items: Item[] = [
  { id: 1, title: "Item 1", content: "Contenu 1" },
  { id: 2, title: "Item 2", content: "Contenu 2" },
  { id: 3, title: "Item 3", content: "Contenu 3" },
];

export default function MonComposantInteractif() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-3xl lg:text-5xl mb-12 text-center">
          Questions Fréquentes
        </h2>

        <div className="space-y-4">
          {items.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg overflow-hidden"
              style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
            >
              <button
                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                className="
                  w-full 
                  px-6 py-4 
                  text-left 
                  flex items-center justify-between
                  hover:bg-gray-50 
                  transition-colors
                "
              >
                <span className="font-semibold text-lg">{item.title}</span>
                <svg 
                  className={`
                    w-6 h-6 
                    transition-transform 
                    ${activeId === item.id ? 'rotate-180' : ''}
                  `}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeId === item.id && (
                <div className="px-6 pb-4 text-gray-600">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 📝 TEMPLATE #4 : FORMULAIRE REACT

```tsx
// src/components/forms/MonFormulaire.tsx
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface TouchedFields {
  name: boolean;
  email: boolean;
  message: boolean;
}

export default function MonFormulaire() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState<TouchedFields>({
    name: false,
    email: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation
  const isEmailValid = formData.email.includes('@') && formData.email.includes('.');
  const isNameValid = formData.name.length >= 2;
  const isMessageValid = formData.message.length >= 10;

  const isFormValid = isEmailValid && isNameValid && isMessageValid;

  // Handlers
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field: keyof TouchedFields) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      // Simuler appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Formulaire soumis:', formData);
      setSubmitSuccess(true);
      
      // Reset
      setFormData({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-playfair text-3xl lg:text-5xl mb-8 text-center">
          Contactez-nous
        </h2>

        {submitSuccess && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="text-emerald-700 font-semibold">
              ✅ Message envoyé avec succès !
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nom */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Nom *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              className={`
                w-full px-4 py-3 
                border-2 
                ${touched.name && !isNameValid ? 'border-red-500' : 'border-gray-200'}
                focus:border-emerald-500 focus:outline-none 
                rounded-lg 
                transition-colors
              `}
              placeholder="Votre nom"
            />
            {touched.name && !isNameValid && (
              <p className="text-sm text-red-500 mt-1">
                Le nom doit contenir au moins 2 caractères
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              className={`
                w-full px-4 py-3 
                border-2 
                ${touched.email && !isEmailValid ? 'border-red-500' : 'border-gray-200'}
                focus:border-emerald-500 focus:outline-none 
                rounded-lg 
                transition-colors
              `}
              placeholder="votre@email.com"
            />
            {touched.email && !isEmailValid && (
              <p className="text-sm text-red-500 mt-1">
                Email invalide
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Message *
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              className={`
                w-full px-4 py-3 
                border-2 
                ${touched.message && !isMessageValid ? 'border-red-500' : 'border-gray-200'}
                focus:border-emerald-500 focus:outline-none 
                rounded-lg 
                transition-colors
                resize-none
              `}
              placeholder="Votre message..."
            />
            {touched.message && !isMessageValid && (
              <p className="text-sm text-red-500 mt-1">
                Le message doit contenir au moins 10 caractères
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`
              w-full px-8 py-4 
              font-semibold 
              rounded-lg 
              transition-all duration-300
              ${isFormValid && !isSubmitting
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      </div>
    </section>
  );
}
```

---

## 🃏 TEMPLATE #5 : CARTE PRODUIT/SERVICE

```tsx
// src/components/cards/ServiceCard.tsx

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  cta?: {
    text: string;
    href: string;
  };
}

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  features, 
  cta 
}: ServiceCardProps) {
  return (
    <div 
      className="bg-white p-6 lg:p-8 rounded-lg h-full flex flex-col"
      style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
    >
      {/* Icône */}
      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>

      {/* Titre */}
      <h3 className="font-playfair text-2xl mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 flex-grow">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {cta && (
        <a 
          href={cta.href}
          className="
            block text-center
            px-6 py-3 
            bg-emerald-500 hover:bg-emerald-600 
            text-white font-semibold 
            rounded-lg 
            transition-colors
          "
        >
          {cta.text}
        </a>
      )}
    </div>
  );
}
```

**Utilisation** :
```tsx
<ServiceCard
  icon={<svg>...</svg>}
  title="Service Premium"
  description="Description du service"
  features={[
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]}
  cta={{
    text: "En savoir plus",
    href: "/service"
  }}
/>
```

---

## 📊 TEMPLATE #6 : SECTION STATS

```tsx
// src/components/sections/StatsSection.tsx

interface Stat {
  value: string;
  label: string;
  color?: string;
}

const stats: Stat[] = [
  { value: "100/100", label: "Performance", color: "#D1A65E" },
  { value: "24 mois", label: "Engagement", color: "#A32E3A" },
  { value: "149€", label: "Par mois", color: "#10b981" },
  { value: "0€", label: "Setup", color: "#10b981" },
];

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl lg:text-5xl mb-12 text-center">
          Nos Chiffres Clés
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg"
            >
              <p 
                className="font-playfair text-4xl lg:text-5xl mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="text-sm lg:text-base text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 💬 TEMPLATE #7 : SECTION TÉMOIGNAGES

```tsx
// src/components/sections/TestimonialsSection.tsx

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jean Dupont",
    role: "Gérant",
    company: "Boulangerie Dupont",
    content: "Excellent service, site performant et professionnel."
  },
  // ...
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl lg:text-5xl mb-12 text-center">
          Ce Que Disent Nos Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg"
              style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
            >
              {/* Citation */}
              <p className="text-gray-600 italic mb-6">
                "{testimonial.content}"
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-emerald-600">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 🎯 TEMPLATE #8 : SECTION CTA FINALE

```tsx
// src/components/sections/FinalCTASection.tsx

export default function FinalCTASection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-500 to-emerald-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-3xl lg:text-5xl text-white mb-6">
          Prêt à Transformer Votre Présence en Ligne ?
        </h2>
        
        <p className="text-lg lg:text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
          Obtenez un audit gratuit de votre site actuel et découvrez comment nous pouvons vous aider.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/audit-gratuit"
            className="
              px-8 py-4 
              bg-white text-emerald-600 
              font-semibold 
              rounded-lg 
              hover:bg-gray-100 
              transition-colors
            "
          >
            Audit Gratuit
          </a>
          
          <a 
            href="/contact"
            className="
              px-8 py-4 
              border-2 border-white text-white 
              font-semibold 
              rounded-lg 
              hover:bg-white hover:text-emerald-600 
              transition-all
            "
          >
            Nous Contacter
          </a>
        </div>

        <p className="text-sm text-emerald-100 mt-6">
          Sans engagement • Réponse sous 24h
        </p>
      </div>
    </section>
  );
}
```

---

## 🎨 TEMPLATE #9 : BADGE HERO

```tsx
// src/components/ui/HeroBadge.tsx

interface HeroBadgeProps {
  text: string;
  variant?: 'default' | 'premium' | 'success';
}

export default function HeroBadge({ text, variant = 'default' }: HeroBadgeProps) {
  const colors = {
    default: 'bg-white text-slate-900',
    premium: 'bg-white text-[#D1A65E]',
    success: 'bg-emerald-50 text-emerald-600'
  };

  return (
    <span 
      className={`
        inline-block 
        px-4 py-2 
        ${colors[variant]} 
        rounded-full 
        text-sm font-semibold
      `}
      style={{ boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.15)' }}
    >
      {text}
    </span>
  );
}
```

**Utilisation** :
```tsx
<HeroBadge text="🎉 Grande Ouverture" variant="premium" />
<HeroBadge text="✅ 100% Satisfait ou Remboursé" variant="success" />
```

---

## 🌟 TEMPLATE #11 : SECTION PROPOSITION DE VALEUR

```tsx
// src/components/sections/ValuePropositionSection.tsx

interface ValuePoint {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const valuePoints: ValuePoint[] = [
  {
    id: 1,
    icon: "✅",
    title: "Setup gratuit (0€ HT)",
    description: "Design, développement et mise en ligne sans investissement initial"
  },
  {
    id: 2,
    icon: "💰",
    title: "149€ HT/mois",
    description: "Un tarif mensuel fixe et transparent, tout compris"
  },
  {
    id: 3,
    icon: "🔧",
    title: "Solution clé en main",
    description: "Hébergement, maintenance, support et mises à jour inclus"
  },
  {
    id: 4,
    icon: "👥",
    title: "Équipe dédiée",
    description: "Une triade professionnelle à votre écoute (Antoine, Pascal, Laly)"
  }
];

export default function ValuePropositionSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl mb-6">
            Votre présence web professionnelle, sans investissement initial
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Une offre unique qui combine qualité professionnelle et accessibilité financière
          </p>
        </div>

        {/* Grid de valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {valuePoints.map((point) => (
            <div 
              key={point.id}
              className="bg-gray-50 p-6 rounded-lg text-center"
              style={{ boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.1)' }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">
                {point.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-3">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Utilisation dans page Astro** :
```astro
---
import ValuePropositionSection from '../components/sections/ValuePropositionSection.tsx';
---

<!-- Section statique, pas besoin d'hydratation -->
<ValuePropositionSection />
```

**🎨 Design Notes** :
- Background blanc pour contraster avec le Hero (bg-gray-50)
- Grid responsive : 1 col mobile, 2 cols tablette, 4 cols desktop
- Ombre inline subtile pour les cartes
- Icônes emoji (faciles à remplacer par SVG/Lucide React)
- Pas besoin d'hydratation (composant statique)

---

## 🔄 TEMPLATE #12 : SECTION NOTRE MÉTHODE EN 3 ÉTAPES

```tsx
// src/components/sections/ConfluenceMethodSteps.tsx
interface Step {
  number: number;
  title: string;
  description: string;
  duration: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Audit & Stratégie",
    description: "Analyse approfondie de votre site actuel, de vos objectifs et de votre marché. Définition de la stratégie digitale.",
    duration: "1 semaine"
  },
  {
    number: 2,
    title: "Conception & Design",
    description: "Création de maquettes sur-mesure, validation avec vous, puis développement avec les meilleures technologies.",
    duration: "2-3 semaines"
  },
  {
    number: 3,
    title: "Lancement & Suivi",
    description: "Mise en ligne, formation à la gestion du site, puis accompagnement continu et optimisations régulières.",
    duration: "Continu"
  }
];

export default function ConfluenceMethodSteps() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl mb-6">
            Notre méthode : simple et transparente
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            De la première prise de contact à la mise en ligne, nous vous accompagnons à chaque étape
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne de connexion (desktop uniquement) */}
          <div 
            className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gray-200"
            style={{ 
              marginLeft: 'calc(16.666% + 48px)',
              marginRight: 'calc(16.666% + 48px)'
            }}
          />

          {/* Étapes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative"
              >
                {/* Numéro avec couleur */}
                <div 
                  className="
                    w-16 h-16 
                    rounded-full 
                    flex items-center justify-center 
                    text-white font-bold text-xl
                    mb-6
                    mx-auto lg:mx-0
                    relative z-10
                  "
                  style={{ backgroundColor: step.number === 1 ? '#A32E3A' : step.number === 2 ? '#D1A65E' : '#10b981' }}
                >
                  {step.number}
                </div>

                {/* Contenu */}
                <div className="text-center lg:text-left">
                  <h3 className="font-semibold text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Durée : {step.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Utilisation dans page Astro** :
```astro
---
import ConfluenceMethodSteps from '../components/sections/ConfluenceMethodSteps.tsx';
---

<!-- Section statique, pas besoin d'hydratation -->
<ConfluenceMethodSteps />
```

**🎨 Design Notes** :
- Timeline visuelle avec ligne de connexion (desktop)
- Numéros circulaires avec couleurs de la triade (rouge, or, vert)
- Grid responsive : 1 col mobile, 3 cols desktop
- Texte centré mobile, aligné à gauche desktop
- Composant statique (pas d'interactivité)

---

## 👥 TEMPLATE #13 : SECTION TRIADE PROFESSIONNELLE

```tsx
// src/components/sections/TeamSection.tsx

interface TeamMember {
  id: number;
  name: string;
  role: string;
  color: string;
  image: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Antoine",
    role: "Cofondateur & Designer",
    color: "#D1A65E",
    image: "/team/antoine.jpg",
    bio: "Expert en design web depuis 10 ans, je conçois des interfaces qui convertissent et reflètent l'identité de votre entreprise."
  },
  {
    id: 2,
    name: "Pascal",
    role: "Cofondateur & Développeur",
    color: "#10b981",
    image: "/team/pascal.jpg",
    bio: "Développeur full-stack passionné, je transforme vos idées en solutions web performantes et évolutives."
  },
  {
    id: 3,
    name: "Laly",
    role: "Chargée de Projet",
    color: "#A32E3A",
    image: "/team/laly.jpg",
    bio: "Votre interlocutrice privilégiée, je veille à la réussite de votre projet à chaque étape et reste disponible pour vous accompagner."
  }
];

export default function TeamSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl mb-6">
            Une équipe à votre écoute
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pas de plateforme anonyme : vous travaillez avec une vraie équipe humaine et dédiée
          </p>
        </div>

        {/* Grid équipe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member) => (
            <div 
              key={member.id}
              className="text-center"
            >
              {/* Photo avec bordure colorée */}
              <div className="mb-6">
                <div 
                  className="
                    relative 
                    w-48 h-48 
                    mx-auto 
                    rounded-full 
                    overflow-hidden
                  "
                  style={{ 
                    boxShadow: `0 0 0 4px ${member.color}` 
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Nom avec accent couleur */}
              <h3 
                className="font-semibold text-2xl mb-2"
                style={{ color: member.color }}
              >
                {member.name}
              </h3>

              {/* Rôle */}
              <p className="text-gray-500 font-semibold mb-4">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-gray-600">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Utilisation dans page Astro** :
```astro
---
import TeamSection from '../components/sections/TeamSection.tsx';
---

<!-- Section statique, pas besoin d'hydratation -->
<TeamSection />
```

**🎨 Design Notes** :
- Background blanc pour contraste visuel
- Photos rondes avec bordure colorée (couleur signature de chaque membre)
- Nom coloré avec couleur signature (#D1A65E, #10b981, #A32E3A)
- Grid responsive : 1 col mobile, 3 cols desktop
- Images dans `/public/team/` (à remplacer par vraies photos)
- Composant statique (pas d'interactivité)

**⚠️ CRITIQUE** : 
- Les couleurs des membres de l'équipe doivent TOUJOURS être respectées :
  - Antoine : #D1A65E (Or premium)
  - Pascal : #10b981 (Vert CTA)
  - Laly : #A32E3A (Rouge contractuel)
- Utiliser de vraies photos professionnelles (portraits, fond neutre)
- L'ordre doit rester : Antoine, Pascal, Laly

---

## 📝 TEMPLATE #14 : PAGE AUDIT GRATUIT

```astro
---
// src/pages/audit-gratuit.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import ConfluenceHeaderV6_7 from '../components/layout/ConfluenceHeaderV6_7.tsx';
import ConfluenceFooterV6_2 from '../components/layout/ConfluenceFooterV6_2.tsx';
import AuditForm from '../components/forms/AuditForm.tsx';

const seoData = {
  title: "Audit Gratuit de Votre Site Web | Confluence Digitale",
  description: "Obtenez un audit gratuit et personnalisé de votre site web. Performance, SEO, UX, Mobile : découvrez comment améliorer votre présence en ligne. Retour sous 48h.",
  canonical: "https://confluence-digitale.fr/audit-gratuit",
  ogImage: "/images/og-audit.jpg"
};
---

<BaseLayout {...seoData}>
  <!-- Header -->
  <ConfluenceHeaderV6_7 client:load />

  <!-- Main Content -->
  <main className="pt-28 lg:pt-32">
    <!-- Hero Section -->
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-playfair text-4xl lg:text-6xl mb-6">
          Audit Gratuit de Votre Site Web
        </h1>
        
        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Découvrez le potentiel inexploité de votre site web. Obtenez un audit complet et personnalisé 
          de votre Performance, SEO, UX et Accessibilité.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold">Retour sous 48h</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold">100% Gratuit</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold">Sans engagement</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Ce qu'on analyse Section -->
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl lg:text-5xl text-center mb-12 lg:mb-16">
          Ce que nous analysons
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Performance -->
          <div className="text-center">
            <div 
              className="w-16 h-16 bg-[#D1A65E] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3">Performance</h3>
            <p className="text-gray-600 text-sm">
              Vitesse de chargement, temps de réponse, optimisation des ressources
            </p>
          </div>

          <!-- SEO -->
          <div className="text-center">
            <div 
              className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3">SEO</h3>
            <p className="text-gray-600 text-sm">
              Référencement naturel, structure, mots-clés, méta-données
            </p>
          </div>

          <!-- UX Design -->
          <div className="text-center">
            <div 
              className="w-16 h-16 bg-[#A32E3A] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3">UX Design</h3>
            <p className="text-gray-600 text-sm">
              Expérience utilisateur, navigation, ergonomie, accessibilité
            </p>
          </div>

          <!-- Mobile -->
          <div className="text-center">
            <div 
              className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3">Mobile</h3>
            <p className="text-gray-600 text-sm">
              Adaptation mobile, responsive design, tactile
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Formulaire Audit -->
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div 
          className="bg-white p-8 lg:p-12 rounded-2xl"
          style={{ boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.15)' }}
        >
          <h2 className="font-playfair text-2xl lg:text-4xl text-center mb-8">
            Demandez votre audit gratuit
          </h2>

          <AuditForm client:load />

          <p className="text-sm text-gray-500 text-center mt-6">
            Vos données sont protégées et ne seront jamais partagées avec des tiers. 
            <a href="/mentions-legales" className="underline hover:text-emerald-500">En savoir plus</a>
          </p>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl lg:text-5xl text-center mb-12">
          Ils nous font confiance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Témoignage 1 -->
          <div 
            className="bg-gray-50 p-6 rounded-lg"
            style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4 italic">
              "L'audit gratuit m'a permis de comprendre les vrais problèmes de mon site. 
              Recommandations claires et actionnables."
            </p>
            <p className="font-semibold">— Sophie Martin</p>
            <p className="text-sm text-gray-500">Artisan Pâtissier</p>
          </div>

          <!-- Témoignage 2 -->
          <div 
            className="bg-gray-50 p-6 rounded-lg"
            style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4 italic">
              "Retour en 24h avec un rapport complet. J'ai enfin compris pourquoi 
              mon site ne convertissait pas."
            </p>
            <p className="font-semibold">— Thomas Dubois</p>
            <p className="text-sm text-gray-500">Consultant RH</p>
          </div>

          <!-- Témoignage 3 -->
          <div 
            className="bg-gray-50 p-6 rounded-lg"
            style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <p className="text-gray-600 mb-4 italic">
              "Analyse technique précise, recommandations pertinentes. 
              Je recommande à 100%."
            </p>
            <p className="font-semibold">— Marie Leroy</p>
            <p className="text-sm text-gray-500">Architecte d'intérieur</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Audit -->
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-3xl lg:text-5xl text-center mb-12">
          Questions fréquentes
        </h2>

        <div className="space-y-4">
          <!-- FAQ Item 1 -->
          <details className="bg-white p-6 rounded-lg" style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}>
            <summary className="font-semibold cursor-pointer">
              Combien de temps prend l'audit ?
            </summary>
            <p className="text-gray-600 mt-4">
              Nous analysons votre site sous 48h maximum et vous envoyons un rapport détaillé par email.
            </p>
          </details>

          <!-- FAQ Item 2 -->
          <details className="bg-white p-6 rounded-lg" style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}>
            <summary className="font-semibold cursor-pointer">
              L'audit est-il vraiment gratuit ?
            </summary>
            <p className="text-gray-600 mt-4">
              Oui, 100% gratuit et sans engagement. Nous analysons votre site et vous envoyons 
              nos recommandations. Vous décidez ensuite si vous souhaitez aller plus loin.
            </p>
          </details>

          <!-- FAQ Item 3 -->
          <details className="bg-white p-6 rounded-lg" style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}>
            <summary className="font-semibold cursor-pointer">
              Que contient le rapport d'audit ?
            </summary>
            <p className="text-gray-600 mt-4">
              Le rapport inclut : analyse de performance (scores Lighthouse), audit SEO technique, 
              analyse UX/ergonomie, recommandations d'amélioration priorisées.
            </p>
          </details>

          <!-- FAQ Item 4 -->
          <details className="bg-white p-6 rounded-lg" style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}>
            <summary className="font-semibold cursor-pointer">
              Et si je n'ai pas encore de site ?
            </summary>
            <p className="text-gray-600 mt-4">
              Pas de problème ! Contactez-nous directement via notre 
              <a href="/contact" className="text-emerald-500 underline"> formulaire de contact</a> 
              pour discuter de votre projet.
            </p>
          </details>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <ConfluenceFooterV6_2 client:visible />
</BaseLayout>
```

**🎨 Design Notes** :
- Hero avec gradient subtle (gray-50 to gray-100)
- 4 points d'analyse avec icônes colorées (couleurs triade)
- Formulaire centré avec ombre forte (carte isolée)
- Social proof avec 3 témoignages
- FAQ avec `<details>` natif HTML (pas de JS)

**🔑 Points Clés** :
- Formulaire avec `client:load` (critique pour UX)
- Social proof pour rassurer
- FAQ pour lever les objections
- CTA clair : "Retour sous 48h + Gratuit + Sans engagement"

---

## 🔧 TEMPLATE #15 : FORMULAIRE AUDIT

```tsx
// src/components/forms/AuditForm.tsx
import { useState } from 'react';

interface AuditFormData {
  url: string;
  email: string;
  sector: string;
  message: string;
}

interface FormErrors {
  url?: string;
  email?: string;
  sector?: string;
}

export default function AuditForm() {
  const [formData, setFormData] = useState<AuditFormData>({
    url: '',
    email: '',
    sector: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'url':
        if (!value.trim()) return 'URL requise';
        try {
          new URL(value.startsWith('http') ? value : `https://${value}`);
        } catch {
          return 'URL invalide (ex: monsite.fr)';
        }
        break;
      
      case 'email':
        if (!value.trim()) return 'Email requis';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Email invalide';
        }
        break;
      
      case 'sector':
        if (!value.trim()) return 'Secteur requis';
        break;
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Valider si le champ a été touché
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Valider tous les champs
    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof AuditFormData>).forEach(key => {
      if (key !== 'message') { // message est optionnel
        const error = validateField(key, formData[key]);
        if (error) newErrors[key as keyof FormErrors] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        url: true,
        email: true,
        sector: true
      });
      return;
    }

    // Soumettre
    setIsSubmitting(true);

    try {
      // TODO: Remplacer par vraie API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      
      // Reset formulaire
      setFormData({
        url: '',
        email: '',
        sector: '',
        message: ''
      });
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-semibold text-2xl mb-3">
          Demande envoyée avec succès !
        </h3>
        <p className="text-gray-600 mb-6">
          Vous recevrez votre audit sous 48h par email.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="text-emerald-500 font-semibold underline"
        >
          Faire une nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* URL du site */}
      <div>
        <label htmlFor="url" className="block text-sm font-semibold text-slate-900 mb-2">
          URL de votre site web *
        </label>
        <input
          type="text"
          id="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="monsite.fr"
          className={`
            w-full px-4 py-3 
            border-2 
            ${errors.url && touched.url ? 'border-red-500' : 'border-gray-200'}
            focus:border-emerald-500 focus:outline-none 
            rounded-lg 
            transition-colors
          `}
        />
        {errors.url && touched.url && (
          <p className="text-sm text-red-500 mt-2">{errors.url}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
          Votre email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="votre@email.com"
          className={`
            w-full px-4 py-3 
            border-2 
            ${errors.email && touched.email ? 'border-red-500' : 'border-gray-200'}
            focus:border-emerald-500 focus:outline-none 
            rounded-lg 
            transition-colors
          `}
        />
        {errors.email && touched.email && (
          <p className="text-sm text-red-500 mt-2">{errors.email}</p>
        )}
      </div>

      {/* Secteur */}
      <div>
        <label htmlFor="sector" className="block text-sm font-semibold text-slate-900 mb-2">
          Votre secteur d'activité *
        </label>
        <select
          id="sector"
          name="sector"
          value={formData.sector}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`
            w-full px-4 py-3 
            border-2 
            ${errors.sector && touched.sector ? 'border-red-500' : 'border-gray-200'}
            focus:border-emerald-500 focus:outline-none 
            rounded-lg 
            transition-colors
          `}
        >
          <option value="">Sélectionnez un secteur</option>
          <option value="artisan">Artisan</option>
          <option value="commerce">Commerce</option>
          <option value="services-b2b">Services B2B</option>
          <option value="profession-liberale">Profession libérale</option>
          <option value="restauration">Restauration</option>
          <option value="sante">Santé</option>
          <option value="autre">Autre</option>
        </select>
        {errors.sector && touched.sector && (
          <p className="text-sm text-red-500 mt-2">{errors.sector}</p>
        )}
      </div>

      {/* Message optionnel */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
          Message (optionnel)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Des points spécifiques à analyser ?"
          className="
            w-full px-4 py-3 
            border-2 border-gray-200 
            focus:border-emerald-500 focus:outline-none 
            rounded-lg 
            transition-colors
            resize-none
          "
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || Object.keys(errors).length > 0}
        className="
          w-full px-8 py-4 
          bg-emerald-500 hover:bg-emerald-600 
          disabled:bg-gray-300 disabled:cursor-not-allowed
          text-white font-semibold 
          rounded-lg 
          transition-all duration-300
        "
        style={{ 
          boxShadow: isSubmitting ? 'none' : '0 10px 30px -5px rgba(16, 185, 129, 0.25)' 
        }}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Demander mon audit gratuit'}
      </button>
    </form>
  );
}
```

**🎨 Design Notes** :
- Formulaire `space-y-6` (règle BATCH 20B)
- Validation temps réel sur `blur`
- États `touched` pour éviter erreurs prématurées
- Success screen après soumission
- Désactivation CTA si erreurs présentes

**🔑 Points Techniques** :
- TypeScript strict
- Validation inline avec `validateField`
- Gestion d'état propre
- UX optimale (pas d'erreurs avant blur)

---

## 📦 TEMPLATE #10 : LAYOUT DE BASE

```astro
---
// src/layouts/BaseLayout.astro
interface Props {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const { title, description, canonical, ogImage } = Astro.props;
const canonicalURL = canonical || Astro.url.href;
const ogImageURL = ogImage || '/images/og-default.jpg';
---

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO -->
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalURL} />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:image" content={ogImageURL} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImageURL} />
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
</head>
<body class="bg-gray-50 text-slate-900">
  <slot />
</body>
</html>
```

---

**📋 Templates Prêts ! Copiez-Collez ! 🚀**

**Prochaine lecture** : `06_CHECKLIST.md`