# 📋 Référence de Validation des Formulaires
## Design System V6.7.2 - Confluence Digitale

> **Ce document est basé sur le formulaire de contact (`ConfluenceContactPageV2.tsx`) qui sert de référence absolue pour tous les formulaires du site.**

---

## 🎯 Objectif

Ce document centralise **tous les patterns de validation** utilisés sur les formulaires du site Confluence Digitale. Il garantit une **expérience utilisateur cohérente** et conforme au Design System V6.7.2.

---

## 📐 Formulaires du Site

### **Formulaires concernés**
1. **Page Contact** (`/pages/ConfluenceContactPageV2.tsx`) ✅ **RÉFÉRENCE ABSOLUE**
2. **Page Audit Gratuit** (`/pages/ConfluenceAuditGratuitPage.tsx`)
3. **Page Réservation** (`/pages/ConfluenceReservationPage_BATCH44.tsx`)

---

## 🎨 États Visuels des Inputs (Pattern Contact)

### **1. État Neutre (par défaut)**

```tsx
className="border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-[#D1A65E]"
```

**Quand** : L'utilisateur n'a pas encore interagi avec le champ (`!touched.email`).

**Couleurs** :
- Bordure : `#E5E7EB` (Gris clair)
- Focus : `#D1A65E` (Or/Cuivre - accent premium)
- Icône de description : `#D1D5DB` (Gris très clair, **TOUJOURS fixe**)

---

### **2. État Erreur (validation échouée)**

```tsx
className="border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]"
```

**Quand** : `errors.email && touched.email` (l'utilisateur a quitté le champ ET la validation a échoué).

**Couleurs** :
- Bordure : `#A32E3A` (Rouge Bordeaux)
- Focus : `#A32E3A` (Rouge Bordeaux)
- Icône de description : `#D1D5DB` (**reste grise, ne change PAS**)

**Message d'erreur** :
```tsx
{errors.email && touched.email && (
  <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
    <AlertCircle className="w-3 h-3" />
    Veuillez saisir un email valide.
  </p>
)}
```

---

### **3. État Validé (validation réussie)**

```tsx
className="border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]"
```

**Quand** : `!errors.email && touched.email && formData.email` (validation réussie ET champ non vide).

**Couleurs** :
- Bordure : `#10b981` (Vert - CTA principal)
- Focus : `#10b981` (Vert)
- Icône de description : `#D1D5DB` (**reste grise, ne change PAS**)
- Icône de validation : `#10b981` (CheckCircle2 verte à droite)

**Icône de validation** :
```tsx
{!errors.email && touched.email && formData.email && (
  <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#10b981]" strokeWidth={2} />
)}
```

---

## 🧠 Logique de Validation (Pattern Contact)

### **Structure des États**

```tsx
// 1. État du formulaire
const [formData, setFormData] = useState({
  email: "",
  message: "",
  rgpdConsent: false
});

// 2. États des erreurs
const [errors, setErrors] = useState({
  email: false,
  message: false,
  rgpdConsent: false
});

// 3. États "touched" (champs déjà visités)
const [touched, setTouched] = useState({
  email: false,
  message: false,
  rgpdConsent: false
});

// 4. États UI
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
const [errorMessage, setErrorMessage] = useState("");
```

---

### **Fonction de Validation Email**

```tsx
// Validation Email Regex
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
```

---

### **Fonction de Validation de Champ**

```tsx
// Validation individuelle d'un champ
const validateField = (name: string, value: string | boolean): boolean => {
  switch (name) {
    case 'email':
      return typeof value === 'string' && value.trim() !== "" && validateEmail(value);
    case 'message':
      return typeof value === 'string' && value.trim() !== "";
    case 'rgpdConsent':
      return value === true;
    default:
      return true;
  }
};
```

---

### **Fonction de Validation Globale**

```tsx
// Vérifier si le formulaire est entièrement valide
const isFormValid = (): boolean => {
  return (
    validateField('email', formData.email) &&
    validateField('message', formData.message) &&
    validateField('rgpdConsent', formData.rgpdConsent)
  );
};
```

---

### **Handler onChange (Validation en Temps Réel)**

```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
  
  // Validation en temps réel
  const isValid = validateField(name, value);
  setErrors({
    ...errors,
    [name]: !isValid
  });
};
```

**Points clés** :
- ✅ Met à jour `formData` avec la nouvelle valeur
- ✅ Valide le champ en temps réel et met à jour `errors`
- ✅ **NE touche PAS à `touched`** (seulement onBlur)

---

### **Handler onBlur (Marquer comme "Touché")**

```tsx
const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name } = e.target;
  setTouched({
    ...touched,
    [name]: true
  });
};
```

**Points clés** :
- ✅ Marque le champ comme "touché" (`touched[name] = true`)
- ✅ Permet d'afficher les erreurs visuelles seulement après que l'utilisateur ait quitté le champ

---

### **Handler Checkbox RGPD**

```tsx
const handleCheckboxChange = (checked: boolean) => {
  setFormData({
    ...formData,
    rgpdConsent: checked
  });
  
  // Marquer comme touché et valider
  setTouched({
    ...touched,
    rgpdConsent: true
  });
  
  setErrors({
    ...errors,
    rgpdConsent: !checked
  });
};
```

**Points clés** :
- ✅ Met à jour `formData.rgpdConsent`
- ✅ Marque immédiatement comme "touché"
- ✅ Valide immédiatement (erreur si `!checked`)

---

### **Handler Submit avec Validation Complète**

```tsx
// Validation complète du formulaire avant soumission
const validateForm = (): boolean => {
  const newErrors = {
    email: !validateField('email', formData.email),
    message: !validateField('message', formData.message),
    rgpdConsent: !validateField('rgpdConsent', formData.rgpdConsent)
  };

  setErrors(newErrors);
  
  // Marquer tous les champs comme touchés
  setTouched({
    email: true,
    message: true,
    rgpdConsent: true
  });

  const hasErrors = Object.values(newErrors).some(error => error);
  
  if (hasErrors) {
    setErrorMessage("Veuillez corriger les champs en rouge.");
    return false;
  }

  setErrorMessage("");
  return true;
};

// Soumission du formulaire
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validation Client
  if (!validateForm()) {
    return; // Ne pas passer à l'état Loading
  }

  // Loading
  setIsSubmitting(true);
  setErrorMessage("");

  try {
    // Simulate API call
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.05) {
          resolve(true);
        } else {
          reject(new Error("API Error"));
        }
      }, 1500);
    });

    // Succès
    setIsSubmitting(false);
    setIsSubmitted(true);

    toast.success("Message envoyé !", {
      description: "Nous vous recontactons sous 48h maximum."
    });

  } catch (error) {
    // Erreur Serveur
    setIsSubmitting(false);
    setErrorMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
    
    toast.error("Erreur d'envoi", {
      description: "Une erreur est survenue. Veuillez réessayer plus tard."
    });
  }
};
```

---

## 🎨 Classes Tailwind (Pattern Contact)

### **Input Standard (Email, Téléphone)**

```tsx
<div className="relative">
  {/* Icône de description (gauche) - TOUJOURS GRISE */}
  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
  
  {/* Input avec états conditionnels */}
  <Input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    onBlur={handleBlur}
    placeholder="contact@exemple.fr"
    required
    className={`w-full pl-11 pr-11 bg-[#F9FAFB] cursor-text transition-all duration-200 ${
      errors.email && touched.email
        ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]' 
        : !errors.email && touched.email && formData.email
        ? 'border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]'
        : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-[#D1A65E]'
    }`}
  />
  
  {/* Icône de validation (droite) - APPARAÎT SI VALIDÉ */}
  {!errors.email && touched.email && formData.email && (
    <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#10b981]" strokeWidth={2} />
  )}
</div>

{/* Message d'erreur */}
{errors.email && touched.email && (
  <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
    <AlertCircle className="w-3 h-3" />
    Veuillez saisir un email valide.
  </p>
)}
```

**Classes obligatoires** :
- `w-full` : Largeur 100%
- `pl-11 pr-11` : Padding left/right pour les icônes (44px)
- `bg-[#F9FAFB]` : Fond gris clair
- `cursor-text` : Curseur texte sur hover
- `transition-all duration-200` : Transition fluide

---

### **Textarea Standard (Message)**

```tsx
<div className="relative">
  {/* Icône de description (gauche, top-3 pour textarea) */}
  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
  
  {/* Textarea avec états conditionnels */}
  <Textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    onBlur={handleBlur}
    placeholder="Décrivez votre projet, vos questions..."
    rows={5}
    required
    className={`w-full pl-11 pr-11 bg-[#F9FAFB] cursor-text transition-all duration-200 ${
      errors.message && touched.message
        ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]' 
        : !errors.message && touched.message && formData.message
        ? 'border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]'
        : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-[#D1A65E]'
    }`}
  />
  
  {/* Icône de validation (droite, top-3 pour textarea) */}
  {!errors.message && touched.message && formData.message && (
    <CheckCircle2 className="absolute right-3 top-3 w-5 h-5 text-[#10b981]" strokeWidth={2} />
  )}
</div>

{/* Message d'erreur */}
{errors.message && touched.message && (
  <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
    <AlertCircle className="w-3 h-3" />
    Ce champ est requis.
  </p>
)}
```

**Différences avec Input** :
- ⚠️ Icônes positionnées avec `top-3` au lieu de `top-1/2 -translate-y-1/2`
- ✅ Même logique de bordures conditionnelles
- ✅ Même structure de messages d'erreur

---

## 🔒 Pattern RGPD (Checkbox Obligatoire)

### **Rendu UI (Pattern Contact)**

```tsx
{/* Checkbox RGPD avec fond rouge si erreur */}
<div className={`flex items-start gap-3 p-3 rounded-lg ${
  errors.rgpdConsent ? 'bg-[#A32E3A]/5 border border-[#A32E3A]/20' : ''
}`}>
  <Checkbox
    id="rgpd-consent"
    checked={formData.rgpdConsent}
    onCheckedChange={handleCheckboxChange}
    className={errors.rgpdConsent ? 'border-[#A32E3A]' : ''}
  />
  <label 
    htmlFor="rgpd-consent" 
    className="text-xs md:text-sm text-gray-700 leading-relaxed cursor-pointer"
  >
    J'accepte que mes informations soient utilisées pour être recontacté.{' '}
    <span className="text-gray-500">
      (Conformément à notre{' '}
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleNavigation('politique-confidentialite');
        }}
        className="text-[#D1A65E] hover:underline"
      >
        politique de confidentialité
      </a>
      .)
    </span>
  </label>
</div>

{/* Message d'erreur RGPD */}
{errors.rgpdConsent && (
  <p className="text-xs text-[#A32E3A] flex items-center gap-1">
    <AlertCircle className="w-3 h-3" />
    Vous devez accepter cette condition pour continuer.
  </p>
)}
```

**Points clés** :
- ✅ Fond rouge `bg-[#A32E3A]/5` + bordure `border-[#A32E3A]/20` si erreur
- ✅ Bordure checkbox rouge `border-[#A32E3A]` si erreur
- ✅ Label avec `cursor-pointer` pour indiquer qu'on peut cliquer sur le texte
- ✅ Lien vers politique de confidentialité avec `text-[#D1A65E] hover:underline`

---

## 🚀 Pattern CTA Dynamique (Pattern Contact)

### **CTA avec Désactivation Conditionnelle**

```tsx
<Button
  type="submit"
  disabled={isSubmitting || !isFormValid()}
  className={`w-full py-5 text-base rounded-xl transition-all duration-300 ${
    isSubmitting || !isFormValid()
      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
      : 'bg-[#10b981] hover:bg-[#059669] text-white hover:scale-[1.02]'
  }`}
  style={
    isSubmitting || !isFormValid()
      ? undefined
      : { boxShadow: '0 4px 16px 0 rgba(16, 185, 129, 0.2)' }
  }
>
  {isSubmitting ? (
    <span className="flex items-center justify-center gap-2">
      <Loader2 className="w-5 h-5 animate-spin" />
      Envoi en cours...
    </span>
  ) : (
    <span className="flex items-center justify-center gap-2">
      Envoyer
      <Send className="w-5 h-5" strokeWidth={2} />
    </span>
  )}
</Button>
```

**Points clés** :
- ✅ Désactivé si `isSubmitting || !isFormValid()`
- ✅ Classes conditionnelles : gris si désactivé, vert si actif
- ✅ Shadow conditionnelle (seulement si actif)
- ✅ Loader `Loader2` avec animation `animate-spin` pendant soumission
- ✅ `hover:scale-[1.02]` pour effet de survol (seulement si actif)

---

### **États du CTA**

| État | Condition | Couleur | Curseur | Shadow | Hover |
|------|-----------|---------|---------|--------|-------|
| **Actif** | `!isSubmitting && isFormValid()` | `bg-[#10b981]` | `cursor-pointer` | ✅ Verte | `hover:scale-[1.02]` |
| **Désactivé (Invalide)** | `!isFormValid()` | `bg-gray-300` | `cursor-not-allowed` | ❌ Aucune | ❌ Aucun |
| **Chargement** | `isSubmitting` | `bg-gray-300` | `cursor-not-allowed` | ❌ Aucune | ❌ Aucun |

---

## 🔍 Messages d'Erreur Standardisés

### **Pattern Message d'Erreur (Contact)**

```tsx
<p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
  <AlertCircle className="w-3 h-3" />
  [Message d'erreur]
</p>
```

**Classes obligatoires** :
- `text-xs` : Taille petite (12px)
- `text-[#A32E3A]` : Rouge bordeaux
- `mt-1` : Marge top 4px
- `flex items-center gap-1` : Icône + texte alignés

---

### **Messages par Type de Champ**

| Champ | Message | Condition |
|-------|---------|-----------|
| **Email** | "Veuillez saisir un email valide." | Email invalide |
| **Téléphone** | "Format de téléphone invalide (ex: 06 12 34 56 78)" | Téléphone invalide |
| **Nom** | "Veuillez entrer un nom valide (min. 3 caractères)" | Nom trop court |
| **Message** | "Ce champ est requis." | Champ vide |
| **Champ générique requis** | "Ce champ est requis." | Champ vide |
| **RGPD** | "Vous devez accepter cette condition pour continuer." | Checkbox non cochée |

---

## 📦 Imports Requis (Pattern Contact)

```tsx
import { ConfluenceHeaderV6_7 } from "../components/ConfluenceHeaderV6_7";
import { ConfluenceFooterV6_2 } from "../components/ConfluenceFooterV6_2";
import { Phone, Mail, Send, CheckCircle2, Loader2, AlertCircle, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { toast } from "sonner@2.0.3";
```

---

## ✅ Checklist de Validation (Basée sur Contact)

Avant de créer ou modifier un formulaire, vérifier que :

### **États & Logique**
- [x] États `formData`, `errors`, `touched`, `isSubmitting` déclarés
- [x] Fonction `validateField()` pour validation individuelle
- [x] Fonction `isFormValid()` pour validation globale
- [x] Handler `handleChange()` avec validation en temps réel
- [x] Handler `handleBlur()` qui marque le champ comme "touché"
- [x] Handler `handleCheckboxChange()` pour la checkbox RGPD

### **Visuel - 3 États**
- [x] État neutre : `border-[#E5E7EB] focus:border-[#D1A65E]`
- [x] État erreur : `border-[#A32E3A] focus:border-[#A32E3A]` si `errors.x && touched.x`
- [x] État validé : `border-[#10b981] focus:border-[#10b981]` si `!errors.x && touched.x && formData.x`

### **Icônes**
- [x] Icône de description (gauche) : **TOUJOURS** `text-[#D1D5DB]`, ne change JAMAIS
- [x] Icône de description : `left-3 top-1/2 -translate-y-1/2` pour Input
- [x] Icône de description : `left-3 top-3` pour Textarea
- [x] Icône de validation (CheckCircle2) : apparaît à droite si validé
- [x] Icône de validation : `right-3 top-1/2 -translate-y-1/2` pour Input
- [x] Icône de validation : `right-3 top-3` pour Textarea

### **Messages d'Erreur**
- [x] Condition : `errors.x && touched.x`
- [x] Classes : `text-xs text-[#A32E3A] mt-1 flex items-center gap-1`
- [x] Icône `AlertCircle` rouge `w-3 h-3` obligatoire

### **RGPD**
- [x] Checkbox obligatoire dans `formData.rgpdConsent`
- [x] Fond rouge `bg-[#A32E3A]/5` si erreur
- [x] Bordure checkbox rouge si erreur
- [x] Label avec `cursor-pointer`
- [x] Lien vers politique de confidentialité `text-[#D1A65E] hover:underline`

### **CTA**
- [x] Désactivé si `!isFormValid() || isSubmitting`
- [x] Classes grises `bg-gray-300 text-gray-500 cursor-not-allowed` si désactivé
- [x] Classes vertes `bg-[#10b981] hover:bg-[#059669]` si actif
- [x] Shadow verte seulement si actif
- [x] Loader `Loader2 animate-spin` pendant soumission
- [x] `hover:scale-[1.02]` seulement si actif

### **Classes Tailwind Inputs**
- [x] `w-full pl-11 pr-11` : Largeur + padding pour icônes
- [x] `bg-[#F9FAFB]` : Fond gris clair
- [x] `cursor-text` : Curseur texte
- [x] `transition-all duration-200` : Transition fluide

---

## 🎯 Règles d'Or (Pattern Contact)

1. **Validation onBlur uniquement** : Les erreurs visuelles n'apparaissent que quand l'utilisateur quitte le champ (`touched`)
2. **Validation onChange en arrière-plan** : Les erreurs sont calculées en temps réel, mais affichées seulement si `touched`
3. **Icône de description fixe** : L'icône de gauche reste **toujours grise** `text-[#D1D5DB]`, ne change JAMAIS de couleur
4. **Icône de validation conditionnelle** : L'icône verte `CheckCircle2` apparaît à droite seulement si `!errors && touched && valeur non vide`
5. **RGPD obligatoire** : Bloque le CTA si non coché (`isFormValid()` retourne `false`)
6. **CTA désactivé si invalide** : `disabled={!isFormValid() || isSubmitting}` systématiquement
7. **Loader pendant soumission** : Icône `Loader2 animate-spin` + texte "Envoi en cours..."
8. **Messages d'erreur avec AlertCircle** : Tous les messages d'erreur ont l'icône rouge `AlertCircle w-3 h-3`

---

## 📚 Exemple Complet (Pattern Contact)

### **Input Email avec Tous les États**

```tsx
{/* Label */}
<label className="block text-sm text-[#1A1A1A] mb-2">
  Votre email *
</label>

{/* Conteneur avec icônes */}
<div className="relative">
  {/* Icône de description (gauche) - TOUJOURS GRISE */}
  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
  
  {/* Input avec états conditionnels */}
  <Input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    onBlur={handleBlur}
    placeholder="contact@exemple.fr"
    required
    className={`w-full pl-11 pr-11 bg-[#F9FAFB] cursor-text transition-all duration-200 ${
      errors.email && touched.email
        ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]' 
        : !errors.email && touched.email && formData.email
        ? 'border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]'
        : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-[#D1A65E]'
    }`}
  />
  
  {/* Icône de validation (droite) - APPARAÎT SI VALIDÉ */}
  {!errors.email && touched.email && formData.email && (
    <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#10b981]" strokeWidth={2} />
  )}
</div>

{/* Message d'erreur */}
{errors.email && touched.email && (
  <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
    <AlertCircle className="w-3 h-3" />
    Veuillez saisir un email valide.
  </p>
)}
```

---

### **Formulaire Complet (Pattern Contact)**

```tsx
const [formData, setFormData] = useState({
  email: "",
  message: "",
  rgpdConsent: false
});

const [errors, setErrors] = useState({
  email: false,
  message: false,
  rgpdConsent: false
});

const [touched, setTouched] = useState({
  email: false,
  message: false,
  rgpdConsent: false
});

const [isSubmitting, setIsSubmitting] = useState(false);

// Validation Email
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validation individuelle
const validateField = (name: string, value: string | boolean): boolean => {
  switch (name) {
    case 'email':
      return typeof value === 'string' && value.trim() !== "" && validateEmail(value);
    case 'message':
      return typeof value === 'string' && value.trim() !== "";
    case 'rgpdConsent':
      return value === true;
    default:
      return true;
  }
};

// Validation globale
const isFormValid = (): boolean => {
  return (
    validateField('email', formData.email) &&
    validateField('message', formData.message) &&
    validateField('rgpdConsent', formData.rgpdConsent)
  );
};

// Handler onChange
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  
  const isValid = validateField(name, value);
  setErrors({ ...errors, [name]: !isValid });
};

// Handler onBlur
const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name } = e.target;
  setTouched({ ...touched, [name]: true });
};

// Handler Checkbox
const handleCheckboxChange = (checked: boolean) => {
  setFormData({ ...formData, rgpdConsent: checked });
  setTouched({ ...touched, rgpdConsent: true });
  setErrors({ ...errors, rgpdConsent: !checked });
};

// Handler Submit
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!isFormValid()) {
    toast.error("Veuillez remplir tous les champs obligatoires");
    return;
  }
  
  setIsSubmitting(true);
  
  // Simulation envoi
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  setIsSubmitting(false);
  toast.success("Message envoyé !", {
    description: "Nous vous recontactons sous 48h maximum."
  });
};

return (
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Email */}
    <div>
      <label className="block text-sm text-[#1A1A1A] mb-2">
        Votre email *
      </label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="contact@exemple.fr"
          required
          className={`w-full pl-11 pr-11 bg-[#F9FAFB] cursor-text transition-all duration-200 ${
            errors.email && touched.email
              ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]' 
              : !errors.email && touched.email && formData.email
              ? 'border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]'
              : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-[#D1A65E]'
          }`}
        />
        {!errors.email && touched.email && formData.email && (
          <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#10b981]" strokeWidth={2} />
        )}
      </div>
      {errors.email && touched.email && (
        <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          Veuillez saisir un email valide.
        </p>
      )}
    </div>

    {/* Message */}
    <div>
      <label className="block text-sm text-[#1A1A1A] mb-2">
        Votre message *
      </label>
      <div className="relative">
        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Décrivez votre projet, vos questions..."
          rows={5}
          required
          className={`w-full pl-11 pr-11 bg-[#F9FAFB] cursor-text transition-all duration-200 ${
            errors.message && touched.message
              ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]' 
              : !errors.message && touched.message && formData.message
              ? 'border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]'
              : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-[#D1A65E]'
          }`}
        />
        {!errors.message && touched.message && formData.message && (
          <CheckCircle2 className="absolute right-3 top-3 w-5 h-5 text-[#10b981]" strokeWidth={2} />
        )}
      </div>
      {errors.message && touched.message && (
        <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          Ce champ est requis.
        </p>
      )}
    </div>

    {/* Checkbox RGPD */}
    <div className={`flex items-start gap-3 p-3 rounded-lg ${
      errors.rgpdConsent ? 'bg-[#A32E3A]/5 border border-[#A32E3A]/20' : ''
    }`}>
      <Checkbox
        id="rgpd-consent"
        checked={formData.rgpdConsent}
        onCheckedChange={handleCheckboxChange}
        className={errors.rgpdConsent ? 'border-[#A32E3A]' : ''}
      />
      <label 
        htmlFor="rgpd-consent" 
        className="text-xs md:text-sm text-gray-700 leading-relaxed cursor-pointer"
      >
        J'accepte que mes informations soient utilisées pour être recontacté.{' '}
        <span className="text-gray-500">
          (Conformément à notre{' '}
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('politique-confidentialite');
            }}
            className="text-[#D1A65E] hover:underline"
          >
            politique de confidentialité
          </a>
          .)
        </span>
      </label>
    </div>
    {errors.rgpdConsent && (
      <p className="text-xs text-[#A32E3A] flex items-center gap-1">
        <AlertCircle className="w-3 h-3" />
        Vous devez accepter cette condition pour continuer.
      </p>
    )}

    {/* CTA */}
    <Button
      type="submit"
      disabled={isSubmitting || !isFormValid()}
      className={`w-full py-5 text-base rounded-xl transition-all duration-300 ${
        isSubmitting || !isFormValid()
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-[#10b981] hover:bg-[#059669] text-white hover:scale-[1.02]'
      }`}
      style={
        isSubmitting || !isFormValid()
          ? undefined
          : { boxShadow: '0 4px 16px 0 rgba(16, 185, 129, 0.2)' }
      }
    >
      {isSubmitting ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin" />
          Envoi en cours...
        </span>
      ) : (
        <span className="flex items-center justify-center gap-2">
          Envoyer
          <Send className="w-5 h-5" strokeWidth={2} />
        </span>
      )}
    </Button>
  </form>
);
```

---

## 📚 Références

- **Formulaire de Contact (RÉFÉRENCE)** : `/pages/ConfluenceContactPageV2.tsx`
- **Design System** : `/doc/01_DESIGN_SYSTEM_V6.7.md`
- **Page Audit** : `/doc/audit-gratuit/PAGE-AUDIT-GRATUIT-DOCUMENTATION.md`
- **Page Réservation** : `/doc/reservation/PAGE-RESERVATION-DOCUMENTATION.md`

---

**Dernière mise à jour** : Batch 45.4 - Mise à jour avec le pattern exact du formulaire de contact  
**Auteur** : Design System V6.7.2  
**Source** : ConfluenceContactPageV2.tsx (Référence Absolue)
