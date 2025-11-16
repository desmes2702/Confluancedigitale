# 📧 TEMPLATE - PAGE CONTACT COMPLÈTE

**Objectif** : Template complet de la page Contact avec layout 2 colonnes  
**Version** : Design System V6.7.2 "APP MODERNE 2025"  
**Architecture** : Astro + React Islands

---

## 📋 TABLE DES MATIÈRES

1. [Page Astro Complète](#-template-1--page-contactastro-complète)
2. [Composant Formulaire Contact](#-template-2--composant-contactformtsx)
3. [Composant Carte Infos](#-template-3--composant-contactinfocardtsx)
4. [Constantes Coordonnées](#-template-4--constantes-coordonnées)
5. [Copywriting Spécifique](#-copywriting-spécifique)

---

## 🎯 VUE D'ENSEMBLE

### Structure de la page

```
┌─────────────────────────────────────────┐
│ ConfluenceHeaderV6_7 (Fixed)            │
├─────────────────────────────────────────┤
│ 1. HERO                                 │
│    - Badge "Contact Direct"             │
│    - Titre "Parlons de Votre Projet"    │
│    - Sous-titre "Réponse sous 24h"      │
├─────────────────────────────────────────┤
│ 2. SECTION 2 COLONNES (BG: White)       │
│    ┌──────────────┬──────────────────┐  │
│    │ Formulaire   │ Carte Infos      │  │
│    │ ContactForm  │ (Sticky)         │  │
│    │              │ • Email          │  │
│    │              │ • Téléphone      │  │
│    │              │ • Adresse        │  │
│    │              │ • Horaires       │  │
│    │              │ • Garantie 24h   │  │
│    └──────────────┴──────────────────┘  │
├─────────────────────────────────────────┤
│ ConfluenceFooterV6_2                    │
│ CookieManager                           │
└─────────────────────────────────────────┘
```

---

## 📄 TEMPLATE #1 : PAGE `contact.astro` COMPLÈTE

```astro
---
// src/pages/contact.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import ConfluenceHeaderV6_7 from '../components/layout/ConfluenceHeaderV6_7.tsx';
import ConfluenceFooterV6_2 from '../components/layout/ConfluenceFooterV6_2.tsx';
import ContactForm from '../components/forms/ContactForm.tsx';
import ContactInfoCard from '../components/contact/ContactInfoCard.tsx';
import CookieManager from '../components/cookies/CookieManager.tsx';
import { MessageCircle } from 'lucide-react';

const seoData = {
  title: "Contact | Confluence Digitale - Parlons de Votre Projet",
  description: "Contactez Confluence Digitale pour votre projet web. Réponse garantie sous 24h. Email, téléphone, formulaire de contact.",
  canonical: "https://confluence-digitale.fr/contact"
};
---

<BaseLayout {...seoData}>
  <ConfluenceHeaderV6_7 client:load />
  
  <main className="pt-28 lg:pt-32">
    {/* HERO SECTION */}
    <section className="relative py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge Contact Direct */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 md:px-6 py-2 md:py-3">
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" strokeWidth={1.5} />
            <span className="text-sm md:text-base text-emerald-600 font-semibold">
              Contact Direct
            </span>
          </div>
        </div>

        {/* Titre */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 mb-4 md:mb-6"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
        >
          Parlons de <span className="text-emerald-500">Votre Projet</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-base md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto">
          Une question ? Un projet ? Nous vous répondons sous <span className="font-semibold text-emerald-500">24h</span>.
        </p>
      </div>
    </section>

    {/* SECTION 2 COLONNES : FORMULAIRE + INFOS */}
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Colonne Gauche : Formulaire */}
            <div>
              <ContactForm client:load />
            </div>

            {/* Colonne Droite : Carte Informations */}
            <div>
              <ContactInfoCard client:only="react" />
            </div>

          </div>
        </div>
      </div>
    </section>
  </main>
  
  <ConfluenceFooterV6_2 client:visible />
  <CookieManager client:load />
</BaseLayout>
```

**🎨 Design Notes** :
- Hero avec gradient subtil (white → gray-50)
- Badge vert avec icône MessageCircle
- Titre avec accent vert sur "Votre Projet"
- Layout 2 colonnes à partir de `lg:` (desktop)
- Stack vertical sur mobile

---

## 📝 TEMPLATE #2 : COMPOSANT `ContactForm.tsx`

```tsx
// src/components/forms/ContactForm.tsx
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface TouchedFields {
  name: boolean;
  email: boolean;
  phone: boolean;
  message: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [touched, setTouched] = useState<TouchedFields>({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isNameValid = formData.name.trim().length >= 2;
  const isMessageValid = formData.message.trim().length >= 10;

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
    
    // Marquer tous les champs comme touchés
    setTouched({ name: true, email: true, phone: true, message: true });

    if (!isFormValid) {
      toast.error("Veuillez corriger les erreurs du formulaire");
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Remplacer par appel API réel
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Formulaire soumis:', formData);
      
      toast.success("Message envoyé !", {
        description: "Nous vous répondons sous 24h."
      });

      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTouched({ name: false, email: false, phone: false, message: false });
    } catch (error) {
      toast.error("Erreur lors de l'envoi. Réessayez.");
      console.error('Erreur:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 
        className="text-2xl md:text-3xl lg:text-4xl text-slate-900 mb-6 md:mb-8"
        style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
      >
        Envoyez-nous un Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Champ Nom */}
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-semibold text-slate-900 mb-2"
          >
            Nom complet <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            placeholder="Jean Dupont"
            required
            className={`
              h-12 md:h-14 rounded-lg border-2
              ${touched.name && !isNameValid ? 'border-red-500' : 'border-gray-200'}
              focus:border-emerald-500 focus:outline-none
              transition-colors
            `}
          />
          {touched.name && !isNameValid && (
            <p className="text-sm text-red-500 mt-1">
              Le nom doit contenir au moins 2 caractères
            </p>
          )}
        </div>

        {/* Champ Email */}
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-semibold text-slate-900 mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            placeholder="contact@votreentreprise.fr"
            required
            className={`
              h-12 md:h-14 rounded-lg border-2
              ${touched.email && !isEmailValid ? 'border-red-500' : 'border-gray-200'}
              focus:border-emerald-500 focus:outline-none
              transition-colors
            `}
          />
          {touched.email && !isEmailValid && (
            <p className="text-sm text-red-500 mt-1">
              Adresse email invalide
            </p>
          )}
        </div>

        {/* Champ Téléphone (optionnel) */}
        <div>
          <label 
            htmlFor="phone" 
            className="block text-sm font-semibold text-slate-900 mb-2"
          >
            Téléphone <span className="text-gray-400 font-normal">(optionnel)</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            placeholder="06 12 34 56 78"
            className="h-12 md:h-14 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Champ Message */}
        <div>
          <label 
            htmlFor="message" 
            className="block text-sm font-semibold text-slate-900 mb-2"
          >
            Votre message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onBlur={() => handleBlur('message')}
            placeholder="Décrivez-nous votre projet ou posez votre question..."
            required
            rows={6}
            className={`
              rounded-lg border-2
              ${touched.message && !isMessageValid ? 'border-red-500' : 'border-gray-200'}
              focus:border-emerald-500 focus:outline-none
              transition-colors
              resize-none
            `}
          />
          {touched.message && !isMessageValid && (
            <p className="text-sm text-red-500 mt-1">
              Le message doit contenir au moins 10 caractères
            </p>
          )}
        </div>

        {/* Bouton Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full 
            bg-emerald-500 hover:bg-emerald-600 
            text-white 
            h-12 md:h-14 
            rounded-lg 
            text-base md:text-lg
            font-semibold
            transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed
          "
          style={{
            boxShadow: '0 10px 30px -5px rgba(16, 185, 129, 0.25)',
          }}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Envoi en cours...
            </span>
          ) : (
            "Envoyer Mon Message"
          )}
        </Button>

        {/* Note RGPD */}
        <p className="text-xs text-gray-500 text-center">
          En soumettant ce formulaire, vous acceptez notre{' '}
          <a 
            href="/politique-confidentialite" 
            className="text-emerald-500 underline hover:text-emerald-600"
            target="_blank"
          >
            politique de confidentialité
          </a>
          .
        </p>
      </form>
    </div>
  );
}
```

**🎨 Design Notes** :
- Textarea pour message (6 rows, non-resizable)
- Champ téléphone optionnel (grisé)
- Validation inline avec messages d'erreur rouges
- CTA vert avec ombre
- Loading state avec spinner
- Note RGPD en bas

---

## 📋 TEMPLATE #3 : COMPOSANT `ContactInfoCard.tsx`

```tsx
// src/components/contact/ContactInfoCard.tsx
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function ContactInfoCard() {
  return (
    <div 
      className="
        rounded-xl md:rounded-2xl 
        overflow-hidden 
        relative 
        p-8 md:p-12 
        bg-gray-50 
        border border-gray-200
        lg:sticky lg:top-32
      "
      style={{ boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.04)' }}
    >
      {/* Titre */}
      <h2 
        className="text-2xl md:text-3xl text-slate-900 mb-6"
        style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
      >
        Nos Coordonnées
      </h2>

      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-emerald-500" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Email</p>
            <a 
              href="mailto:contact@confluence-digitale.fr"
              className="text-base md:text-lg text-slate-900 hover:text-emerald-500 transition-colors font-medium"
            >
              contact@confluence-digitale.fr
            </a>
          </div>
        </div>

        {/* Téléphone */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <Phone className="w-5 h-5 text-emerald-500" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Téléphone</p>
            <a 
              href="tel:+33612345678"
              className="text-base md:text-lg text-slate-900 hover:text-emerald-500 transition-colors font-medium"
            >
              06 12 34 56 78
            </a>
          </div>
        </div>

        {/* Adresse */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-emerald-500" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Adresse</p>
            <p className="text-base md:text-lg text-slate-900">
              Fumel, Lot-et-Garonne (47)<br />
              France
            </p>
          </div>
        </div>

        {/* Horaires */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-emerald-500" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Horaires</p>
            <p className="text-base md:text-lg text-slate-900">
              Lun - Ven : 9h - 18h<br />
              Sam - Dim : Fermé
            </p>
          </div>
        </div>
      </div>

      {/* Bloc Réponse Garantie */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center gap-3 p-4 rounded-lg bg-emerald-500/10">
          <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" strokeWidth={2} />
          <p className="text-sm md:text-base text-gray-700">
            <strong className="text-emerald-600">Réponse garantie sous 24h</strong> (jours ouvrés)
          </p>
        </div>
      </div>
    </div>
  );
}
```

**🎨 Design Notes** :
- `sticky top-32` sur desktop (reste visible au scroll)
- Icônes dans cercles verts clairs
- Liens cliquables (mailto:, tel:)
- Hover vert sur liens
- Bloc garantie avec background vert clair
- Border et shadow subtiles

---

## 📦 TEMPLATE #4 : CONSTANTES COORDONNÉES

```typescript
// src/config/contact.ts

export const CONTACT_INFO = {
  email: 'contact@confluence-digitale.fr',
  phone: '+33612345678',
  phoneDisplay: '06 12 34 56 78',
  address: {
    city: 'Fumel',
    region: 'Lot-et-Garonne (47)',
    country: 'France',
    full: 'Fumel, Lot-et-Garonne (47), France'
  },
  hours: {
    weekdays: 'Lun - Ven : 9h - 18h',
    weekend: 'Sam - Dim : Fermé',
    full: 'Lun - Ven : 9h - 18h | Sam - Dim : Fermé'
  },
  responseTime: '24h',
  responseTimeDetail: '24h (jours ouvrés)'
} as const;

export const CONTACT_SEO = {
  title: 'Contact | Confluence Digitale - Parlons de Votre Projet',
  description: 'Contactez Confluence Digitale pour votre projet web. Réponse garantie sous 24h. Email, téléphone, formulaire de contact.',
  canonical: 'https://confluence-digitale.fr/contact',
  ogImage: 'https://confluence-digitale.fr/images/og-contact.jpg'
} as const;
```

**Utilisation** :
```tsx
import { CONTACT_INFO } from '@/config/contact';

<a href={`mailto:${CONTACT_INFO.email}`}>
  {CONTACT_INFO.email}
</a>
```

---

## ✍️ COPYWRITING SPÉCIFIQUE

### Hero Section

| Élément | Texte | Style |
|---------|-------|-------|
| **Badge** | "Contact Direct" | Vert, avec icône MessageCircle |
| **Titre H1** | "Parlons de **Votre Projet**" | "Votre Projet" en vert |
| **Sous-titre** | "Une question ? Un projet ? Nous vous répondons sous **24h**." | "24h" en gras vert |

### Formulaire

| Élément | Texte |
|---------|-------|
| **Titre** | "Envoyez-nous un Message" |
| **Label Nom** | "Nom complet *" |
| **Label Email** | "Email *" |
| **Label Téléphone** | "Téléphone (optionnel)" |
| **Label Message** | "Votre message *" |
| **Placeholder Message** | "Décrivez-nous votre projet ou posez votre question..." |
| **CTA** | "Envoyer Mon Message" |
| **CTA Loading** | "Envoi en cours..." |
| **Note RGPD** | "En soumettant ce formulaire, vous acceptez notre politique de confidentialité." |

### Carte Infos

| Élément | Texte |
|---------|-------|
| **Titre** | "Nos Coordonnées" |
| **Garantie** | "**Réponse garantie sous 24h** (jours ouvrés)" |

### Toast Notifications

| Cas | Titre | Description |
|-----|-------|-------------|
| **Succès** | "Message envoyé !" | "Nous vous répondons sous 24h." |
| **Erreur validation** | "Veuillez corriger les erreurs du formulaire" | - |
| **Erreur envoi** | "Erreur lors de l'envoi. Réessayez." | - |

---

## 📊 COMPARAISON FORMULAIRES

| Caractéristique | **Contact** | **Audit Gratuit** | **Réservation** |
|-----------------|-------------|-------------------|-----------------|
| **Champs** | Nom, Email, Tél, Message | Nom, Email, Tél, Site, RGPD | Nom, Tél, Email |
| **Textarea** | ✅ Oui (Message, 6 rows) | ❌ Non | ❌ Non |
| **Champ optionnel** | Téléphone | - | - |
| **Couleur CTA** | Vert #10b981 | Vert #10b981 | Or #D1A65E |
| **Layout page** | 2 colonnes | 1 colonne | 1 colonne |
| **Élément unique** | Carte sticky coordonnées | Section réassurance | Bloc contractuel |
| **Validation** | Inline (rouge) | Inline (rouge) | Inline (rouge) |
| **Toast** | Sonner | Sonner | Sonner |

---

## 🔌 FICHIERS LIÉS

### Composants
- `/src/components/forms/ContactForm.tsx` - Formulaire
- `/src/components/contact/ContactInfoCard.tsx` - Carte coordonnées
- `/src/components/layout/ConfluenceHeaderV6_7.tsx` - Header
- `/src/components/layout/ConfluenceFooterV6_2.tsx` - Footer
- `/src/components/ui/button.tsx` - ShadCN Button
- `/src/components/ui/input.tsx` - ShadCN Input
- `/src/components/ui/textarea.tsx` - ShadCN Textarea

### Config
- `/src/config/contact.ts` - Constantes coordonnées

### Pages
- `/src/pages/contact.astro` - Page Contact

---

## ✅ CHECKLIST INTÉGRATION

### Fichiers à créer
- [ ] `/src/pages/contact.astro`
- [ ] `/src/components/forms/ContactForm.tsx`
- [ ] `/src/components/contact/ContactInfoCard.tsx`
- [ ] `/src/config/contact.ts`

### Dépendances
- [ ] `lucide-react` (icônes)
- [ ] `sonner` (toast notifications)
- [ ] ShadCN UI : `button`, `input`, `textarea`

### Tests
- [ ] Formulaire s'affiche correctement
- [ ] Validation inline fonctionne (nom, email, message)
- [ ] Champ téléphone optionnel (pas d'erreur si vide)
- [ ] Textarea accepte texte long
- [ ] Toast de succès après envoi
- [ ] Toast d'erreur si échec
- [ ] Carte sticky reste visible au scroll (desktop)
- [ ] Liens mailto: et tel: fonctionnent
- [ ] Responsive mobile/desktop
- [ ] Encodage UTF-8 vérifié

---

## 🎨 CUSTOMISATION

### Couleurs

```css
/* Vert principal */
#10b981 (emerald-500)

/* Vert hover */
#059669 (emerald-600)

/* Background carte */
#F9FAFB (gray-50)

/* Border */
#E5E7EB (gray-200)

/* Texte */
#1A1A1A (slate-900)
```

### Tailles

```css
/* Input/Textarea */
h-12 md:h-14 (48px → 56px)

/* Textarea rows */
rows={6}

/* Icônes */
w-5 h-5 (20px)

/* Cercles icônes */
w-12 h-12 (48px)
```

---

**📧 Template Page Contact Complet ! Prêt à Intégrer ! ✅**

**Prochaine étape** : Créer les composants dans votre projet Astro
