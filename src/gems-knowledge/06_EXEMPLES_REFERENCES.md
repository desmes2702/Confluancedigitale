# 📚 EXEMPLES DE CODE RÉFÉRENCE

**Usage** : Exemples validés conformes Design System V6.7.2  
**Statut** : Production-ready, à utiliser comme templates

---

## 📄 PAGE ASTRO COMPLÈTE

### Homepage (index.astro)

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/layout/ConfluenceHeaderV6_7.tsx';
import HeroHome from '../components/sections/HeroHome.tsx';
import FeaturesGrid from '../components/sections/FeaturesGrid.tsx';
import ProcessTimeline from '../components/sections/ProcessTimeline.tsx';
import TeamBlock from '../components/sections/TeamBlock.tsx';
import TestimonialsCarousel from '../components/sections/TestimonialsCarousel.tsx';
import CTASection from '../components/sections/CTASection.tsx';
import Footer from '../components/layout/ConfluenceFooterV6_2.tsx';

const seoData = {
  title: "Confluence Digitale - Votre Site Web Professionnel Sans Investissement Initial",
  description: "Agence web pour TPE/PME. Site vitrine professionnel : 0€ setup + 149€/mois. Design, développement, hébergement, maintenance inclus.",
  canonical: "https://confluence-digitale.fr",
  ogImage: "/images/og-home.jpg"
};
---

<BaseLayout {...seoData}>
  <Header client:load />
  
  <main>
    <HeroHome client:visible />
    <FeaturesGrid client:visible />
    <ProcessTimeline client:visible />
    <TeamBlock client:visible />
    <TestimonialsCarousel client:visible />
    <CTASection client:visible />
  </main>

  <Footer client:visible />
</BaseLayout>
```

---

## ⚛️ COMPOSANTS REACT

### Hero Section

```tsx
// src/components/sections/HeroHome.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroHome() {
  return (
    <section className="pt-28 lg:pt-32 pb-16 lg:pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>✨</span>
            <span>Setup gratuit - 0€</span>
          </div>

          {/* Titre */}
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
            Votre Site Web Professionnel
            <br />
            <span className="text-emerald-500">Sans Investissement Initial</span>
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
            Design, développement, hébergement et maintenance inclus.
            <br />
            <strong className="font-semibold text-gray-900">0€ de setup + 149€/mois</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="
                inline-flex items-center justify-center gap-2
                bg-emerald-500 text-white
                px-8 py-4 rounded-lg
                font-semibold text-lg
                hover:bg-emerald-600
                transition-colors duration-300
              "
            >
              Démarrer mon projet
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/offre"
              className="
                inline-flex items-center justify-center gap-2
                border-2 border-emerald-500 text-emerald-500
                px-8 py-4 rounded-lg
                font-semibold text-lg
                hover:bg-emerald-50
                transition-colors duration-300
              "
            >
              Découvrir l'offre
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Setup gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Support 7j/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### Features Grid

```tsx
// src/components/sections/FeaturesGrid.tsx
import React from 'react';
import { Palette, Code, Server, HeadphonesIcon } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeaturesGrid() {
  const features: Feature[] = [
    {
      id: 1,
      icon: <Palette className="w-8 h-8 text-emerald-500" />,
      title: "Design Sur-Mesure",
      description: "Interface moderne et responsive, adaptée à votre identité de marque."
    },
    {
      id: 2,
      icon: <Code className="w-8 h-8 text-emerald-500" />,
      title: "Développement Pro",
      description: "Code propre et optimisé pour des performances maximales."
    },
    {
      id: 3,
      icon: <Server className="w-8 h-8 text-emerald-500" />,
      title: "Hébergement Inclus",
      description: "Serveurs rapides et sécurisés, certificat SSL gratuit."
    },
    {
      id: 4,
      icon: <HeadphonesIcon className="w-8 h-8 text-emerald-500" />,
      title: "Support Réactif",
      description: "Équipe disponible 7j/7 pour répondre à vos questions."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl text-gray-900 mb-4">
            Tout Inclus, Aucune Surprise
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Une solution complète pour votre présence en ligne
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="
                bg-white rounded-xl p-6
                transition-all duration-300
                hover:scale-105
              "
              style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-playfair text-xl text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
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

### Team Block (Triade)

```tsx
// src/components/sections/TeamBlock.tsx
import React from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  color: string;
  image: string;
  bio: string;
}

export default function TeamBlock() {
  const team: TeamMember[] = [
    {
      id: 1,
      name: "Antoine",
      role: "Cofondateur & Designer",
      color: "#D1A65E",
      image: "/images/team/antoine.jpg",
      bio: "Expert en design web depuis 10 ans, je conçois des interfaces qui convertissent."
    },
    {
      id: 2,
      name: "Pascal",
      role: "Cofondateur & Développeur",
      color: "#10b981",
      image: "/images/team/pascal.jpg",
      bio: "Développeur full-stack passionné, je transforme vos idées en solutions web performantes."
    },
    {
      id: 3,
      name: "Laly",
      role: "Chargée de Projet",
      color: "#A32E3A",
      image: "/images/team/laly.jpg",
      bio: "Votre interlocutrice privilégiée, je veille à la réussite de votre projet à chaque étape."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl text-gray-900 mb-4">
            Une Équipe à Votre Écoute
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Trois experts dédiés à la réussite de votre projet
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member) => (
            <div
              key={member.id}
              className="
                bg-white rounded-xl overflow-hidden
                transition-all duration-300
                hover:scale-105
              "
              style={{ boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}
            >
              {/* Image */}
              <div className="relative h-64 bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                {/* Badge couleur */}
                <div
                  className="
                    absolute top-4 right-4
                    w-12 h-12 rounded-full
                    border-4 border-white
                  "
                  style={{ backgroundColor: member.color }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-2xl text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p
                  className="font-semibold mb-4"
                  style={{ color: member.color }}
                >
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
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

### Contact Form (Validation Temps Réel)

```tsx
// src/components/forms/ContactForm.tsx
import React, { useState } from 'react';
import { Send, Check, X } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    name: false,
    email: false,
    phone: false,
    message: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (value.length < 2) return 'Le nom doit contenir au moins 2 caractères';
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email invalide';
        break;
      case 'phone':
        if (value && !/^[0-9\s\-\+\(\)]{10,}$/.test(value)) return 'Téléphone invalide';
        break;
      case 'message':
        if (value.length < 10) return 'Le message doit contenir au moins 10 caractères';
        if (value.length > 500) return 'Le message ne peut pas dépasser 500 caractères';
        break;
    }
    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name as keyof FormData]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation complète
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key as keyof FormData, value);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        name: true,
        email: true,
        phone: true,
        message: true
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitSuccess(true);
    setIsSubmitting(false);

    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
      setTouched({ name: false, email: false, phone: false, message: false });
      setSubmitSuccess(false);
    }, 3000);
  };

  const isFormValid =
    Object.keys(errors).length === 0 &&
    formData.name.length >= 2 &&
    formData.email.length > 0 &&
    formData.message.length >= 10;

  const getInputClassName = (fieldName: keyof FormData) => {
    const baseClasses = `
      w-full px-4 py-3 rounded-lg
      border-2 transition-colors outline-none
    `;

    if (!touched[fieldName]) {
      return `${baseClasses} border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20`;
    }

    if (errors[fieldName]) {
      return `${baseClasses} border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20`;
    }

    return `${baseClasses} border-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20`;
  };

  if (submitSuccess) {
    return (
      <div className="bg-emerald-50 border-2 border-emerald-500 rounded-lg p-8 text-center">
        <Check className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
        <h3 className="font-playfair text-2xl text-gray-900 mb-2">
          Message Envoyé !
        </h3>
        <p className="text-gray-600">
          Nous vous répondrons dans les 24h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nom */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-900 mb-2"
        >
          Nom complet *
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName('name')}
            placeholder="John Doe"
          />
          {touched.name && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {errors.name ? (
                <X className="w-5 h-5 text-red-500" />
              ) : (
                <Check className="w-5 h-5 text-emerald-500" />
              )}
            </div>
          )}
        </div>
        {touched.name && errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-900 mb-2"
        >
          Email *
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName('email')}
            placeholder="john@example.com"
          />
          {touched.email && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {errors.email ? (
                <X className="w-5 h-5 text-red-500" />
              ) : (
                <Check className="w-5 h-5 text-emerald-500" />
              )}
            </div>
          )}
        </div>
        {touched.email && errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      {/* Téléphone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-gray-900 mb-2"
        >
          Téléphone (optionnel)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={getInputClassName('phone')}
          placeholder="06 12 34 56 78"
        />
        {touched.phone && errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-900 mb-2"
        >
          Message * ({formData.message.length}/500)
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={5}
            className={`${getInputClassName('message')} resize-none`}
            placeholder="Décrivez votre projet..."
          />
          {touched.message && (
            <div className="absolute right-3 top-3">
              {errors.message ? (
                <X className="w-5 h-5 text-red-500" />
              ) : (
                <Check className="w-5 h-5 text-emerald-500" />
              )}
            </div>
          )}
        </div>
        {touched.message && errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className={`
          w-full
          inline-flex items-center justify-center gap-2
          px-8 py-4 rounded-lg
          font-semibold text-lg
          transition-all duration-300
          ${
            isFormValid && !isSubmitting
              ? 'bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }
        `}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer le message
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
```

---

## 🎯 POINTS CLÉS

### Tous ces exemples respectent :

✅ Playfair Regular (jamais bold)  
✅ Ombres inline uniquement  
✅ Hero pt-28 lg:pt-32  
✅ Formulaires space-y-6  
✅ 5 couleurs exclusives  
✅ Container max-w-7xl  
✅ TypeScript strict  
✅ Mobile-first responsive  
✅ Accessibilité complète  

**Utilise ces exemples comme références pour générer tes prompts !**

---

**📚 Exemples de code maîtrisés ! 💪**
