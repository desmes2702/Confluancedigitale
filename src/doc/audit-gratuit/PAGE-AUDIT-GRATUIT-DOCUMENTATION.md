# 📄 DOCUMENTATION - PAGE AUDIT GRATUIT
## Confluence Digitale - Application Design System V6.7

---

## 📋 RÉFÉRENCE DESIGN SYSTEM

**⚠️ Pour les éléments génériques du Design System V6.7**, consultez :
👉 `/doc/offre/PAGE-OFFRE-DOCUMENTATION-COMPLETE.md`

Cette documentation se concentre **UNIQUEMENT** sur les spécificités de la page Audit Gratuit.

---

## 1. VUE D'ENSEMBLE

### Objectif de la page
Page de conversion finale. Formulaire de demande d'audit gratuit avec validation complète et UX optimisée pour la confiance.

### Positionnement stratégique
- **Hook principal** : "Audit Gratuit de Votre Site Web"
- **USP** : Réponse sous 24h, sans engagement, analyse complète
- **Cible** : TPE/PME prêts à convertir après parcours de découverte
- **Conversion** : Formulaire 4 champs + consentement RGPD

### Fichier source
`/pages/ConfluenceAuditGratuitPage.tsx`

---

## 2. STRUCTURE UNIQUE DE LA PAGE

### Architecture des sections

```
┌─────────────────────────────────────────┐
│ ConfluenceHeaderV6_7 (Fixed)            │
├─────────────────────────────────────────┤
│ 1. HERO                                 │
│    - Badge "Gratuit"                    │
│    - Titre + sous-titre                 │
│    - 3 bénéfices clés                   │
├─────────────────────────────────────────┤
│ 2. FORMULAIRE (BG: White)               │
│    - Carte formulaire centrée           │
│    - 4 champs + RGPD                    │
│    - Validation temps réel              │
│    - État success après soumission      │
├─────────────────────────────────────────┤
│ 3. RÉASSURANCE (BG: Gris Clair)         │
│    - 3 cartes garanties                 │
├─────────────────────────────────────────┤
│ ConfluenceFooterV6_2                    │
└─────────────────────────────────────────┘
```

---

## 3. GESTION D'ÉTAT DU FORMULAIRE

### 3.1. Interface FormData
```tsx
interface FormData {
  name: string;
  email: string;
  phone: string;
  website: string;
  rgpdConsent: boolean;
}
```

### 3.2. États React
```tsx
const [formData, setFormData] = useState<FormData>({
  name: "",
  email: "",
  phone: "",
  website: "",
  rgpdConsent: false
});

const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);

// États de validation (BATCH 18A)
const [errors, setErrors] = useState({
  name: false,
  email: false,
  website: false,
  rgpdConsent: false
});

const [touched, setTouched] = useState({
  name: false,
  email: false,
  website: false,
  rgpdConsent: false
});

const [errorMessage, setErrorMessage] = useState("");
```

---

## 4. VALIDATION FORMULAIRE

### 4.1. Validation Email (Regex)
```tsx
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
```

### 4.2. Validation URL
```tsx
const validateURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return url.trim() !== ""; // Au minimum, pas vide
  }
};
```

### 4.3. Validation individuelle d'un champ
```tsx
const validateField = (name: string, value: string | boolean): boolean => {
  switch (name) {
    case 'name':
      return typeof value === 'string' && value.trim() !== "";
    case 'email':
      return typeof value === 'string' && value.trim() !== "" && validateEmail(value);
    case 'website':
      return typeof value === 'string' && validateURL(value);
    case 'rgpdConsent':
      return value === true;
    default:
      return true;
  }
};
```

### 4.4. Validation globale du formulaire
```tsx
const isFormValid = (): boolean => {
  return (
    validateField('name', formData.name) &&
    validateField('email', formData.email) &&
    validateField('website', formData.website) &&
    validateField('rgpdConsent', formData.rgpdConsent)
  );
};
```

### 4.5. Validation au blur (onBlur)
```tsx
const handleBlur = (field: string) => {
  setTouched(prev => ({ ...prev, [field]: true }));
  
  const isValid = validateField(field, formData[field as keyof typeof formData]);
  setErrors(prev => ({ ...prev, [field]: !isValid }));
};
```

---

## 5. SECTIONS SPÉCIFIQUES

### 5.1. HERO

#### Badge "Gratuit"
```tsx
<div 
  className="inline-flex items-center gap-2 bg-[#10b981]/10 border border-[#10b981]/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
>
  <Zap className="w-4 h-4 md:w-5 md:h-5 text-[#10b981]" strokeWidth={1.5} />
  <span className="text-sm md:text-base text-[#10b981]">100% Gratuit • Réponse 24h</span>
</div>
```

**Couleur** : Vert (#10b981) pour rappeler le CTA et l'action positive.

#### Titre
```tsx
<h1 
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-4 md:mb-6"
  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
>
  Audit <span className="text-[#10b981]">Gratuit</span> de Votre Site Web
</h1>
```

#### 3 bénéfices clés
```tsx
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base text-gray-700">
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-5 h-5 text-[#10b981]" strokeWidth={2} />
    <span>Analyse complète gratuite</span>
  </div>
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-5 h-5 text-[#10b981]" strokeWidth={2} />
    <span>Réponse sous 24h</span>
  </div>
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-5 h-5 text-[#10b981]" strokeWidth={2} />
    <span>Sans engagement</span>
  </div>
</div>
```

---

### 5.2. FORMULAIRE

#### Structure de la carte
```tsx
<div 
  className="rounded-xl md:rounded-2xl overflow-hidden relative p-8 md:p-12 bg-white border border-[#E5E7EB]"
  style={{ boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.04)' }}
>
  {!isSubmitted ? (
    <form onSubmit={handleSubmit}>
      {/* Champs formulaire */}
    </form>
  ) : (
    <div className="text-center py-8">
      {/* État success */}
    </div>
  )}
</div>
```

#### Champ Input avec validation visuelle
```tsx
<div>
  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
    Nom complet <span className="text-red-600">*</span>
  </label>
  <div className="relative">
    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
    <Input
      id="name"
      name="name"
      type="text"
      value={formData.name}
      onChange={handleChange}
      onBlur={() => handleBlur('name')}
      placeholder="Jean Dupont"
      required
      className={`pl-12 h-12 md:h-14 rounded-lg border ${
        touched.name && errors.name 
          ? 'border-red-500 focus:border-red-500' 
          : 'border-[#E5E7EB] focus:border-[#10b981]'
      }`}
    />
  </div>
  
  {/* Message d'erreur */}
  {touched.name && errors.name && (
    <div className="flex items-center gap-2 mt-2 text-sm text-red-600">
      <AlertCircle className="w-4 h-4" strokeWidth={2} />
      <span>Veuillez renseigner votre nom complet</span>
    </div>
  )}
</div>
```

**Logique de couleur de bordure** :
- **Défaut** : `border-[#E5E7EB]`
- **Focus valide** : `focus:border-[#10b981]` (Vert)
- **Erreur** : `border-red-500` si `touched && errors`

#### Champ Email
```tsx
<div>
  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
    Email professionnel <span className="text-red-600">*</span>
  </label>
  <div className="relative">
    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
    <Input
      id="email"
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      onBlur={() => handleBlur('email')}
      placeholder="contact@votreentreprise.fr"
      required
      className={`pl-12 h-12 md:h-14 rounded-lg border ${
        touched.email && errors.email 
          ? 'border-red-500 focus:border-red-500' 
          : 'border-[#E5E7EB] focus:border-[#10b981]'
      }`}
    />
  </div>
  
  {touched.email && errors.email && (
    <div className="flex items-center gap-2 mt-2 text-sm text-red-600">
      <AlertCircle className="w-4 h-4" strokeWidth={2} />
      <span>Veuillez renseigner un email valide</span>
    </div>
  )}
</div>
```

#### Champ Téléphone (optionnel)
```tsx
<div>
  <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
    Téléphone <span className="text-gray-400">(optionnel)</span>
  </label>
  <div className="relative">
    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
    <Input
      id="phone"
      name="phone"
      type="tel"
      value={formData.phone}
      onChange={handleChange}
      placeholder="06 12 34 56 78"
      className="pl-12 h-12 md:h-14 rounded-lg border border-[#E5E7EB] focus:border-[#10b981]"
    />
  </div>
</div>
```

**Note** : Le téléphone n'a pas de validation requise.

#### Champ Site Web
```tsx
<div>
  <label htmlFor="website" className="block text-sm text-gray-700 mb-2">
    URL de votre site actuel <span className="text-red-600">*</span>
  </label>
  <div className="relative">
    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
    <Input
      id="website"
      name="website"
      type="url"
      value={formData.website}
      onChange={handleChange}
      onBlur={() => handleBlur('website')}
      placeholder="https://votresite.fr"
      required
      className={`pl-12 h-12 md:h-14 rounded-lg border ${
        touched.website && errors.website 
          ? 'border-red-500 focus:border-red-500' 
          : 'border-[#E5E7EB] focus:border-[#10b981]'
      }`}
    />
  </div>
  
  {touched.website && errors.website && (
    <div className="flex items-center gap-2 mt-2 text-sm text-red-600">
      <AlertCircle className="w-4 h-4" strokeWidth={2} />
      <span>Veuillez renseigner l'URL de votre site</span>
    </div>
  )}
</div>
```

#### Consentement RGPD
```tsx
<div className="flex items-start gap-3">
  <Checkbox
    id="rgpd"
    checked={formData.rgpdConsent}
    onCheckedChange={(checked) => {
      setFormData(prev => ({ ...prev, rgpdConsent: checked === true }));
      setTouched(prev => ({ ...prev, rgpdConsent: true }));
      setErrors(prev => ({ ...prev, rgpdConsent: checked !== true }));
    }}
    className={`mt-0.5 ${
      touched.rgpdConsent && errors.rgpdConsent 
        ? 'border-red-500' 
        : ''
    }`}
  />
  <label htmlFor="rgpd" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
    J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande d'audit. 
    <button 
      type="button"
      onClick={() => handleNavigation('politique-confidentialite')}
      className="text-[#10b981] hover:text-[#059669] underline ml-1 cursor-pointer"
    >
      Politique de confidentialité
    </button>
  </label>
</div>

{touched.rgpdConsent && errors.rgpdConsent && (
  <div className="flex items-center gap-2 mt-2 text-sm text-red-600">
    <AlertCircle className="w-4 h-4" strokeWidth={2} />
    <span>Vous devez accepter la politique de confidentialité</span>
  </div>
)}
```

#### Bouton de soumission
```tsx
<Button
  type="submit"
  disabled={isSubmitting || !isFormValid()}
  className="w-full bg-[#10b981] hover:bg-[#059669] text-white h-12 md:h-14 rounded-lg text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
>
  {isSubmitting ? (
    <div className="flex items-center justify-center gap-2">
      <Loader2 className="w-5 h-5 animate-spin" strokeWidth={2} />
      <span>Envoi en cours...</span>
    </div>
  ) : (
    <span>Demander Mon Audit Gratuit</span>
  )}
</Button>
```

**États** :
- **Normal** : Vert (#10b981)
- **Disabled** : `opacity-50` si formulaire invalide
- **Loading** : Icône Loader2 avec animation spin

---

### 5.3. ÉTAT SUCCESS (Après soumission)

```tsx
{isSubmitted && (
  <div className="text-center py-8">
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#10b981]/10 flex items-center justify-center mx-auto mb-6">
      <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-[#10b981]" strokeWidth={2} />
    </div>
    
    <h2 
      className="text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] mb-4"
      style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
    >
      Demande Reçue !
    </h2>
    
    <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
      Merci <span className="text-[#D1A65E]">{formData.name}</span> ! Nous analysons votre site{' '}
      <span className="text-[#10b981]">{formData.website}</span> et vous recontactons sous 24h à{' '}
      <span className="text-[#10b981]">{formData.email}</span>.
    </p>
    
    <Button
      onClick={() => handleNavigation('home')}
      className="bg-[#D1A65E] hover:bg-[#B8914E] text-white px-8 py-4 rounded-lg"
    >
      Retour à l'accueil
    </Button>
  </div>
)}
```

**Personnalisation** :
- Nom du client en Or/Cuivre (#D1A65E)
- URL et email en Vert (#10b981)
- Bouton retour en Or/Cuivre

---

### 5.4. SECTION RÉASSURANCE

#### 3 cartes garanties
```tsx
<section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-[#F9FAFB]">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        
        {/* Carte 1 : Gratuit */}
        <div className="text-center p-6 md:p-8 rounded-xl bg-white border border-[#E5E7EB]">
          <Zap className="w-12 h-12 text-[#10b981] mx-auto mb-4" strokeWidth={1.5} />
          <h3 className="text-xl md:text-2xl text-[#1A1A1A] mb-3">
            100% Gratuit
          </h3>
          <p className="text-sm md:text-base text-gray-700">
            Aucune carte bancaire requise. Audit complet sans engagement.
          </p>
        </div>

        {/* Carte 2 : Rapide */}
        <div className="text-center p-6 md:p-8 rounded-xl bg-white border border-[#E5E7EB]">
          <TrendingUp className="w-12 h-12 text-[#10b981] mx-auto mb-4" strokeWidth={1.5} />
          <h3 className="text-xl md:text-2xl text-[#1A1A1A] mb-3">
            Réponse 24h
          </h3>
          <p className="text-sm md:text-base text-gray-700">
            Analyse complète de votre site et recommandations personnalisées.
          </p>
        </div>

        {/* Carte 3 : Confidentiel */}
        <div className="text-center p-6 md:p-8 rounded-xl bg-white border border-[#E5E7EB]">
          <Shield className="w-12 h-12 text-[#10b981] mx-auto mb-4" strokeWidth={1.5} />
          <h3 className="text-xl md:text-2xl text-[#1A1A1A] mb-3">
            Confidentiel
          </h3>
          <p className="text-sm md:text-base text-gray-700">
            Vos données sont sécurisées. Aucune revente, aucun spam.
          </p>
        </div>
        
      </div>
    </div>
  </div>
</section>
```

---

## 6. SOUMISSION DU FORMULAIRE

### 6.1. Fonction handleSubmit
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validation finale
  if (!validateForm()) {
    setErrorMessage("Veuillez corriger les erreurs avant de soumettre.");
    toast.error("Veuillez corriger les erreurs avant de soumettre.");
    return;
  }
  
  setIsSubmitting(true);
  setErrorMessage("");
  
  try {
    // Simulation d'envoi (à remplacer par vraie API)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Success
    setIsSubmitted(true);
    toast.success("Demande envoyée ! Nous vous recontactons sous 24h.");
  } catch (error) {
    setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
    toast.error("Une erreur est survenue. Veuillez réessayer.");
  } finally {
    setIsSubmitting(false);
  }
};
```

### 6.2. Intégration future (Supabase/API)
```tsx
// À implémenter
const response = await fetch('/api/audit-requests', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

---

## 7. NOTIFICATIONS TOAST

### Import
```tsx
import { toast } from "sonner@2.0.3";
```

### Usage
```tsx
// Success
toast.success("Demande envoyée ! Nous vous recontactons sous 24h.");

// Error
toast.error("Veuillez corriger les erreurs avant de soumettre.");
```

**Note** : Le composant `<Toaster />` doit être intégré dans le layout global.

---

## 8. ÉLÉMENTS UNIQUES

### 8.1. Validation temps réel
- **onBlur** : Validation au moment où l'utilisateur quitte le champ
- **onChange** : Mise à jour de l'état (pas de validation immédiate)
- **touched** : Tracker si l'utilisateur a interagi avec le champ
- **errors** : Tracker les erreurs de validation

### 8.2. États de bordure dynamiques
```tsx
className={`border ${
  touched.email && errors.email 
    ? 'border-red-500 focus:border-red-500' 
    : 'border-[#E5E7EB] focus:border-[#10b981]'
}`}
```

### 8.3. Bouton disabled intelligent
```tsx
disabled={isSubmitting || !isFormValid()}
```

Le bouton est désactivé si :
- Soumission en cours (`isSubmitting`)
- OU formulaire invalide (`!isFormValid()`)

### 8.4. Personnalisation État Success
- Nom en Or/Cuivre
- Email et URL en Vert
- Message rassurant et chaleureux

---

## 9. COPYWRITING SPÉCIFIQUE

### 9.1. Hero
- **Badge** : "100% Gratuit • Réponse 24h"
- **Titre** : "Audit **Gratuit**" (accent vert)
- **3 bénéfices** : Analyse gratuite, 24h, Sans engagement

### 9.2. Formulaire
- **Labels clairs** : "Nom complet", "Email professionnel", "URL de votre site actuel"
- **Placeholders explicites** : "Jean Dupont", "contact@votreentreprise.fr"
- **Champ optionnel** : "(optionnel)" en gris clair

### 9.3. Messages d'erreur
- **Nom** : "Veuillez renseigner votre nom complet"
- **Email** : "Veuillez renseigner un email valide"
- **Site Web** : "Veuillez renseigner l'URL de votre site"
- **RGPD** : "Vous devez accepter la politique de confidentialité"

### 9.4. État Success
- **Titre** : "Demande Reçue !"
- **Message personnalisé** : "Merci {name} ! Nous analysons {website}..."

---

## 10. OPTIMISATIONS FUTURES SUGGÉRÉES

### 10.1. Autocomplete intelligent
- Détecter le domaine du site et pré-remplir l'email professionnel

### 10.2. Validation en temps réel du site
- Vérifier si le site existe (ping API)
- Afficher un badge "✓ Site accessible" ou "⚠️ Site inaccessible"

### 10.3. Estimation de délai
- Basé sur la charge actuelle : "Estimation : Réponse demain 14h"

### 10.4. A/B Testing
- Tester variantes du CTA : "Demander Mon Audit" vs "Obtenir Mon Analyse Gratuite"

---

## 11. FICHIERS LIÉS

### Composants
- `/components/ConfluenceHeaderV6_7.tsx`
- `/components/ConfluenceFooterV6_2.tsx`
- `/components/ui/button.tsx`
- `/components/ui/input.tsx`
- `/components/ui/checkbox.tsx`

### Hooks
- `/hooks/useScrollAnimation.ts`

### Pages connexes
- `/pages/ConfluencePolitiqueConfidentialitePage.tsx` (lien RGPD)
- `/pages/ConfluenceLandingPage.tsx` (retour après success)

---

**FIN DU DOCUMENT**
