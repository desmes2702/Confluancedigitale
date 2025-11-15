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
