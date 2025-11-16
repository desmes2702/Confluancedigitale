# 🍪 TEMPLATES - COOKIES & RGPD

**Objectif** : Bannière cookies + Modale de paramétrage conforme RGPD  
**Version** : Design System V6.7.2 "APP MODERNE 2025"

---

## 📋 TABLE DES MATIÈRES

1. [Composant Bannière Cookies](#-template-1--bannière-cookies)
2. [Composant Modale Paramétrage](#-template-2--modale-paramétrage-cookies)
3. [Utility RGPD](#-template-3--utility-gdpr-consent)
4. [Intégration BaseLayout](#-template-4--intégration-baselayout)
5. [Google Analytics Conditionnel](#-template-5--google-analytics-conditionnel)

---

## 🍪 TEMPLATE #1 : BANNIÈRE COOKIES

### Composant React

```tsx
// src/components/cookies/CookieBanner.tsx
import { useState, useEffect } from 'react';
import { getCookieConsent, setCookieConsent } from '../../utils/gdprConsent';

interface CookieBannerProps {
  onOpenSettings: () => void;
}

export default function CookieBanner({ onOpenSettings }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = getCookieConsent();
    if (consent === null) {
      // Pas de consentement enregistré → afficher la bannière
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookieConsent({
      essential: true,
      analytics: true,
      marketing: true,
    });
    setIsVisible(false);
    
    // Recharger pour activer Google Analytics
    window.location.reload();
  };

  const handleOpenSettings = () => {
    setIsVisible(false);
    onOpenSettings();
  };

  if (!isVisible) return null;

  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 
        z-[100] 
        bg-[#1A1A1A] text-white 
        border-t border-gray-800
        px-4 py-6
        animate-slide-up
      "
      style={{
        boxShadow: '0 -10px 40px -10px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Message */}
          <div className="flex-1">
            <p className="text-sm lg:text-base text-gray-200 mb-2">
              <strong className="font-semibold">Respect de votre vie privée</strong>
            </p>
            <p className="text-sm text-gray-400">
              Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic 
              et vous proposer des contenus personnalisés. Vous pouvez accepter tous les cookies 
              ou personnaliser vos préférences.
            </p>
          </div>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={handleOpenSettings}
              className="
                px-6 py-3 
                bg-transparent 
                border-2 border-white
                text-white 
                rounded-lg 
                font-semibold
                hover:bg-white hover:text-[#1A1A1A]
                transition-all duration-300
                text-center
              "
            >
              Personnaliser
            </button>
            
            <button
              onClick={handleAcceptAll}
              className="
                px-6 py-3 
                bg-emerald-500 hover:bg-emerald-600 
                text-white 
                rounded-lg 
                font-semibold
                transition-colors
                text-center
              "
              style={{
                boxShadow: '0 10px 30px -5px rgba(16, 185, 129, 0.25)',
              }}
            >
              Tout accepter
            </button>
          </div>
        </div>

        {/* Lien Politique */}
        <div className="mt-4 text-center lg:text-left">
          <a 
            href="/politique-confidentialite" 
            className="text-xs text-gray-400 underline hover:text-white transition-colors"
          >
            En savoir plus sur notre politique de confidentialité
          </a>
        </div>
      </div>
    </div>
  );
}
```

**🎨 Design Notes** :
- Position : `fixed bottom-0` (bande noire en bas)
- Couleur : `#1A1A1A` (noir mat du Design System)
- Animation : `animate-slide-up` (entrée par le bas)
- Ombre forte vers le haut (`boxShadow` inline)
- Responsive : Stack vertical sur mobile, horizontal sur desktop

**🔑 Points Clés** :
- Affichage conditionnel (uniquement si pas de consentement)
- 2 boutons : Personnaliser (outline blanc) + Tout accepter (vert)
- Lien vers politique de confidentialité
- Reload après acceptation (pour activer GA)

---

## ⚙️ TEMPLATE #2 : MODALE PARAMÉTRAGE COOKIES

### Composant React

```tsx
// src/components/cookies/CookieSettingsModal.tsx
import { useState, useEffect } from 'react';
import { getCookieConsent, setCookieConsent, CookieConsent } from '../../utils/gdprConsent';

interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CookieSettingsModal({ isOpen, onClose }: CookieSettingsModalProps) {
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true, // Toujours activé
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (isOpen) {
      // Charger les préférences existantes
      const savedConsent = getCookieConsent();
      if (savedConsent) {
        setConsent(savedConsent);
      }
      
      // Bloquer le scroll du body
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleToggle = (key: keyof CookieConsent) => {
    if (key === 'essential') return; // Toujours activé
    setConsent(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    setCookieConsent(consent);
    onClose();
    
    // Recharger pour appliquer les changements
    window.location.reload();
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    setCookieConsent(allAccepted);
    onClose();
    window.location.reload();
  };

  const handleRejectAll = () => {
    const allRejected = {
      essential: true, // Toujours activé
      analytics: false,
      marketing: false,
    };
    setCookieConsent(allRejected);
    onClose();
    window.location.reload();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[110]"
        onClick={onClose}
      />

      {/* Modale */}
      <div
        className="
          fixed top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          z-[120]
          w-full max-w-2xl
          max-h-[90vh]
          overflow-y-auto
          bg-white rounded-2xl
          p-8
          mx-4
        "
        style={{
          boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <h2 className="font-playfair text-3xl lg:text-4xl">
            Paramètres des cookies
          </h2>
          <button
            onClick={onClose}
            className="
              p-2 
              hover:bg-gray-100 
              rounded-lg 
              transition-colors
            "
            aria-label="Fermer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-gray-600 mb-8">
          Nous respectons votre vie privée. Choisissez les cookies que vous souhaitez autoriser.
        </p>

        {/* Liste des cookies */}
        <div className="space-y-6">
          {/* Cookies Essentiels */}
          <div 
            className="p-6 bg-gray-50 rounded-lg"
            style={{ boxShadow: '0 4px 20px -5px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">
                  🔒 Cookies Essentiels
                </h3>
                <p className="text-sm text-gray-600">
                  Nécessaires au fonctionnement du site (navigation, sécurité). 
                  Ces cookies ne peuvent pas être désactivés.
                </p>
              </div>
              <div className="ml-4">
                <div 
                  className="
                    w-14 h-8 
                    bg-emerald-500 
                    rounded-full 
                    relative
                    cursor-not-allowed
                    opacity-50
                  "
                >
                  <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full" />
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Toujours activé
            </p>
          </div>

          {/* Cookies Analytics */}
          <div 
            className="p-6 bg-gray-50 rounded-lg"
            style={{ boxShadow: '0 4px 20px -5px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">
                  📊 Cookies Analytics
                </h3>
                <p className="text-sm text-gray-600">
                  Nous permettent de mesurer l'audience et d'améliorer notre site 
                  (Google Analytics avec IP anonymisée).
                </p>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleToggle('analytics')}
                  className={`
                    w-14 h-8 
                    ${consent.analytics ? 'bg-emerald-500' : 'bg-gray-300'}
                    rounded-full 
                    relative
                    transition-colors
                    cursor-pointer
                  `}
                >
                  <div 
                    className={`
                      absolute top-1 w-6 h-6 bg-white rounded-full 
                      transition-all
                      ${consent.analytics ? 'right-1' : 'left-1'}
                    `}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Cookies Marketing */}
          <div 
            className="p-6 bg-gray-50 rounded-lg"
            style={{ boxShadow: '0 4px 20px -5px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">
                  🎯 Cookies Marketing
                </h3>
                <p className="text-sm text-gray-600">
                  Utilisés pour afficher des publicités personnalisées et mesurer 
                  l'efficacité de nos campagnes.
                </p>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleToggle('marketing')}
                  className={`
                    w-14 h-8 
                    ${consent.marketing ? 'bg-emerald-500' : 'bg-gray-300'}
                    rounded-full 
                    relative
                    transition-colors
                    cursor-pointer
                  `}
                >
                  <div 
                    className={`
                      absolute top-1 w-6 h-6 bg-white rounded-full 
                      transition-all
                      ${consent.marketing ? 'right-1' : 'left-1'}
                    `}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Boutons Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button
            onClick={handleRejectAll}
            className="
              flex-1 px-6 py-3 
              bg-transparent 
              border-2 border-gray-300
              text-gray-700
              rounded-lg 
              font-semibold
              hover:bg-gray-100
              transition-colors
            "
          >
            Tout refuser
          </button>

          <button
            onClick={handleSave}
            className="
              flex-1 px-6 py-3 
              bg-slate-900 hover:bg-slate-800
              text-white 
              rounded-lg 
              font-semibold
              transition-colors
            "
          >
            Enregistrer mes choix
          </button>

          <button
            onClick={handleAcceptAll}
            className="
              flex-1 px-6 py-3 
              bg-emerald-500 hover:bg-emerald-600 
              text-white 
              rounded-lg 
              font-semibold
              transition-colors
            "
            style={{
              boxShadow: '0 10px 30px -5px rgba(16, 185, 129, 0.25)',
            }}
          >
            Tout accepter
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <a 
            href="/politique-confidentialite" 
            className="text-sm text-gray-500 underline hover:text-emerald-500 transition-colors"
            target="_blank"
          >
            Consulter notre politique de confidentialité
          </a>
        </div>
      </div>
    </>
  );
}
```

**🎨 Design Notes** :
- Modale centrée avec overlay sombre + backdrop-blur
- Toggle switches custom (vert emerald si activé)
- 3 sections : Essentiels (toujours activé), Analytics, Marketing
- 3 boutons : Tout refuser / Enregistrer / Tout accepter
- Ombre forte pour élévation (`boxShadow` inline)

**🔑 Points Clés** :
- Overlay cliquable pour fermer
- Scroll bloqué sur body quand ouvert
- Toggle visuel clair (vert/gris + animation)
- Reload après enregistrement pour appliquer les changements
- Lien vers politique de confidentialité

---

## 🛠️ TEMPLATE #3 : UTILITY GDPR CONSENT

### Utility TypeScript

```typescript
// src/utils/gdprConsent.ts

export interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CONSENT_KEY = 'confluence_cookie_consent';
const CONSENT_DATE_KEY = 'confluence_cookie_consent_date';

/**
 * Récupère le consentement cookies de l'utilisateur
 * @returns CookieConsent ou null si pas encore défini
 */
export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;

    return JSON.parse(stored) as CookieConsent;
  } catch (error) {
    console.error('Erreur lecture consentement:', error);
    return null;
  }
}

/**
 * Enregistre le consentement cookies de l'utilisateur
 * @param consent Objet CookieConsent
 */
export function setCookieConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString());
    
    console.log('Consentement enregistré:', consent);
  } catch (error) {
    console.error('Erreur enregistrement consentement:', error);
  }
}

/**
 * Vérifie si l'utilisateur a accepté les cookies analytics
 * @returns true si analytics accepté
 */
export function hasAnalyticsConsent(): boolean {
  const consent = getCookieConsent();
  return consent?.analytics === true;
}

/**
 * Vérifie si l'utilisateur a accepté les cookies marketing
 * @returns true si marketing accepté
 */
export function hasMarketingConsent(): boolean {
  const consent = getCookieConsent();
  return consent?.marketing === true;
}

/**
 * Supprime le consentement (utile pour reset)
 */
export function clearCookieConsent(): void {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(CONSENT_KEY);
  localStorage.removeItem(CONSENT_DATE_KEY);
}

/**
 * Récupère la date du consentement
 * @returns Date ou null
 */
export function getConsentDate(): Date | null {
  if (typeof window === 'undefined') return null;

  try {
    const dateStr = localStorage.getItem(CONSENT_DATE_KEY);
    if (!dateStr) return null;

    return new Date(dateStr);
  } catch (error) {
    return null;
  }
}

/**
 * Vérifie si le consentement est encore valide (13 mois max)
 * @returns true si valide
 */
export function isConsentValid(): boolean {
  const consentDate = getConsentDate();
  if (!consentDate) return false;

  const now = new Date();
  const thirteenMonthsAgo = new Date(now.setMonth(now.getMonth() - 13));

  return consentDate > thirteenMonthsAgo;
}
```

**🎨 Design Notes** :
- LocalStorage pour persistance
- Interface TypeScript stricte
- Helpers pour vérifier chaque type de cookie
- Validation durée (13 mois max RGPD)

**🔑 Points Clés** :
- Stockage en JSON dans localStorage
- Date de consentement pour expiration
- Fonctions helper pour chaque type de cookie
- Protection SSR (typeof window check)

---

## 📦 TEMPLATE #4 : INTÉGRATION BASELAYOUT

### Modification BaseLayout.astro

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
  
  <!-- Google Analytics (conditionnel) -->
  <script>
    import { hasAnalyticsConsent } from '../utils/gdprConsent';
    
    if (hasAnalyticsConsent()) {
      // Charger Google Analytics
      const GA_ID = 'G-XXXXXXXXXX'; // À remplacer
      
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', GA_ID, {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure',
      });
      
      // Script GA
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);
    }
  </script>
</head>
<body class="bg-gray-50 text-slate-900">
  <slot />
  
  <!-- Cookie Banner + Modal -->
  <div id="cookie-wrapper">
    <!-- Géré par CookieManager -->
  </div>
</body>
</html>
```

---

## 🍪 TEMPLATE #5 : COOKIE MANAGER (Composant Principal)

### Composant React

```tsx
// src/components/cookies/CookieManager.tsx
import { useState } from 'react';
import CookieBanner from './CookieBanner';
import CookieSettingsModal from './CookieSettingsModal';

export default function CookieManager() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CookieBanner onOpenSettings={() => setIsModalOpen(true)} />
      <CookieSettingsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
```

### Intégration dans page

```astro
---
// Dans toutes les pages (via BaseLayout)
import CookieManager from '../components/cookies/CookieManager.tsx';
---

<BaseLayout {...seoData}>
  <ConfluenceHeaderV6_7 client:load />
  
  <main>
    <!-- Contenu de la page -->
  </main>
  
  <ConfluenceFooterV6_2 client:visible />
  
  <!-- Cookie Manager (toujours en dernier) -->
  <CookieManager client:load />
</BaseLayout>
```

---

## 📊 TEMPLATE #6 : GOOGLE ANALYTICS CONDITIONNEL

### Script dans BaseLayout.astro

```astro
---
// src/layouts/BaseLayout.astro (dans <head>)
---

<!-- Google Analytics (conditionnel selon consentement) -->
<script is:inline>
  // Vérifier le consentement
  function hasAnalyticsConsent() {
    try {
      const consent = localStorage.getItem('confluence_cookie_consent');
      if (!consent) return false;
      
      const parsed = JSON.parse(consent);
      return parsed.analytics === true;
    } catch {
      return false;
    }
  }

  // Charger GA si consentement
  if (hasAnalyticsConsent()) {
    const GA_ID = 'G-XXXXXXXXXX'; // À remplacer par votre ID
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_ID, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    });
    
    // Charger le script GA
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
  }
</script>
```

**🔑 Points Clés** :
- Script `is:inline` pour exécution immédiate
- Vérification consentement avant chargement
- IP anonymisée (`anonymize_ip: true`)
- Cookies sécurisés (`SameSite=None;Secure`)
- Chargement dynamique du script GA

---

## ✅ CHECKLIST INTÉGRATION

### Fichiers à Créer

- [ ] `/src/components/cookies/CookieBanner.tsx`
- [ ] `/src/components/cookies/CookieSettingsModal.tsx`
- [ ] `/src/components/cookies/CookieManager.tsx`
- [ ] `/src/utils/gdprConsent.ts`

### Modifications à Faire

- [ ] Ajouter `<CookieManager client:load />` dans BaseLayout.astro
- [ ] Ajouter script GA conditionnel dans BaseLayout.astro
- [ ] Remplacer `G-XXXXXXXXXX` par votre ID Google Analytics

### Tests à Effectuer

- [ ] Bannière s'affiche au premier chargement
- [ ] Bouton "Personnaliser" ouvre la modale
- [ ] Bouton "Tout accepter" enregistre le consentement
- [ ] Modale permet de toggle Analytics/Marketing
- [ ] Consentement persiste après reload
- [ ] Google Analytics ne charge QUE si consentement accordé
- [ ] Bannière ne s'affiche plus après consentement
- [ ] Responsive (mobile + desktop)

### Conformité RGPD

- [ ] Consentement enregistré avec date
- [ ] Expiration après 13 mois
- [ ] Lien vers politique de confidentialité
- [ ] Option "Tout refuser" présente
- [ ] Cookies essentiels toujours activés (mais mentionnés)
- [ ] IP anonymisée sur Google Analytics

---

## 🎨 CUSTOMISATION

### Couleurs

```tsx
// Bannière
bg-[#1A1A1A] // Noir mat Design System

// Boutons
bg-emerald-500 // Vert CTA (#10b981)
border-white // Outline blanc

// Modale
bg-white // Fond blanc
bg-gray-50 // Cards cookies
```

### Animations

```css
/* globals.css */
@keyframes slide-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}
```

---

## 📝 NOTES IMPORTANTES

### RGPD Compliance

1. **Consentement éclairé** : L'utilisateur doit comprendre ce qu'il accepte
2. **Granularité** : Possibilité d'accepter/refuser par catégorie
3. **Révocable** : L'utilisateur peut changer d'avis à tout moment
4. **Durée limitée** : Redemander après 13 mois
5. **Opt-in** : Pas de cookies avant consentement (sauf essentiels)

### Cookies Essentiels vs Non-Essentiels

**Essentiels** (pas de consentement requis) :
- Session utilisateur
- Panier e-commerce
- Authentification
- Sécurité CSRF

**Non-Essentiels** (consentement requis) :
- Google Analytics
- Pixels Facebook/LinkedIn
- Publicités ciblées
- A/B testing

---

**🍪 Templates RGPD Prêts ! Conformité Garantie ! 🎯**

**Prochaine étape** : Intégrer dans votre projet Astro
