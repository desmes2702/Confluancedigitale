# 📝 CONVENTIONS DE CODE

**Objectif** : Standardiser le code pour cohérence et maintenabilité  
**Niveau** : Tous niveaux

---

## 📁 NOMMAGE DES FICHIERS

### Règles Générales

| Type de Fichier | Convention | Exemple |
|----------------|-----------|---------|
| **Composant React** | PascalCase + `.tsx` | `ConfluenceHeaderV6_7.tsx` |
| **Page Astro** | kebab-case + `.astro` | `audit-gratuit.astro` |
| **Hook React** | camelCase + `.ts` | `useScrollAnimation.ts` |
| **Utility** | camelCase + `.ts` | `gdprConsent.ts` |
| **Type/Interface** | PascalCase + `.ts` | `FormTypes.ts` |
| **Layout Astro** | PascalCase + `.astro` | `BaseLayout.astro` |

### Exemples Concrets

```
✅ CORRECT
/components/ConfluenceHeaderV6_7.tsx
/components/sections/ConfluenceTeamBlock.tsx
/pages/audit-gratuit.astro
/hooks/useScrollAnimation.ts
/utils/gdprConsent.ts

❌ INCORRECT
/components/confluence-header.tsx
/components/ConfluenceHeader.jsx
/pages/AuditGratuit.astro
/hooks/ScrollAnimation.ts
```

---

## 🏗️ STRUCTURE D'UN COMPOSANT REACT

### Template Standard

```tsx
// 1. IMPORTS EXTERNES (React, Libraries)
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

// 2. IMPORTS INTERNES (Components, Utils)
import { Button } from '../ui/button';
import { validateEmail } from '@/utils/validation';

// 3. TYPES & INTERFACES
interface MonComposantProps {
  title: string;
  description?: string;
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  email: string;
  message: string;
}

// 4. CONSTANTES
const DEFAULT_MESSAGE = "Message par défaut";
const MAX_LENGTH = 500;

// 5. COMPOSANT PRINCIPAL
export default function MonComposant({ 
  title, 
  description, 
  onSubmit 
}: MonComposantProps) {
  // 6. ÉTATS
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 7. EFFETS
  useEffect(() => {
    // Logique d'effet
  }, [email]);

  // 8. HANDLERS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit?.({ email, message });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // 9. COMPUTED VALUES
  const isValid = validateEmail(email) && message.length > 0;

  // 10. RENDER
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl mb-8">{title}</h2>
        
        {description && (
          <p className="text-gray-600 mb-6">{description}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-3 border rounded-lg"
          />
          
          <Button 
            type="submit" 
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? 'Envoi...' : 'Envoyer'}
          </Button>
        </form>
      </div>
    </section>
  );
}
```

---

## 📄 STRUCTURE D'UNE PAGE ASTRO

### Template Standard

```astro
---
// 1. IMPORTS
import BaseLayout from '../layouts/BaseLayout.astro';
import ConfluenceHeaderV6_7 from '../components/layout/ConfluenceHeaderV6_7.tsx';
import MonSection from '../components/sections/MonSection.tsx';
import ConfluenceFooterV6_2 from '../components/layout/ConfluenceFooterV6_2.tsx';

// 2. DATA / API CALLS
const data = await fetch('https://api.example.com/data').then(r => r.json());

// 3. SEO CONFIGURATION
const seoData = {
  title: "Titre de la Page | Confluence Digitale",
  description: "Description SEO de 150-160 caractères optimisée pour Google",
  canonical: "https://confluence-digitale.fr/ma-page",
  ogImage: "/images/og-ma-page.jpg"
};
---

<!-- 4. HTML -->
<BaseLayout {...seoData}>
  <!-- Header -->
  <ConfluenceHeaderV6_7 client:load />
  
  <!-- Main Content -->
  <main>
    <!-- Hero Section -->
    <section className="pt-28 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-playfair text-4xl lg:text-6xl mb-6">
          Titre Principal
        </h1>
      </div>
    </section>

    <!-- Other Sections -->
    <MonSection data={data} client:visible />
  </main>

  <!-- Footer -->
  <ConfluenceFooterV6_2 client:visible />
</BaseLayout>
```

---

## 🎨 ORDRE DES CLASSES TAILWIND

### Règle : Layout → Spacing → Sizing → Typography → Colors → Effects → Responsive

```tsx
<div className="
  /* 1. LAYOUT (display, position, flex) */
  flex flex-col items-center justify-center
  
  /* 2. SPACING (padding, margin, gap) */
  p-6 space-y-4 gap-6
  
  /* 3. SIZING (width, height, max-width) */
  w-full max-w-7xl h-screen
  
  /* 4. TYPOGRAPHY (font, text size, weight) */
  font-playfair text-3xl font-semibold leading-relaxed
  
  /* 5. COLORS (text, background, border) */
  text-slate-900 bg-white border-gray-200
  
  /* 6. EFFECTS (shadow, opacity, transform) */
  rounded-lg opacity-90 transition-all duration-300
  
  /* 7. RESPONSIVE (breakpoints en dernier) */
  sm:flex-row lg:p-8 lg:text-5xl
">
  Contenu
</div>
```

### Exemples Bons/Mauvais

```tsx
// ❌ MAUVAIS (désorganisé)
<button className="text-white rounded-lg bg-emerald-500 py-3 hover:bg-emerald-600 px-6 font-semibold transition-all">

// ✅ BON (organisé selon la règle)
<button className="
  px-6 py-3 
  bg-emerald-500 hover:bg-emerald-600 
  text-white font-semibold 
  rounded-lg 
  transition-all
">
```

---

## 🔤 NOMMAGE DES VARIABLES

### Règles

| Type | Convention | Exemple |
|------|-----------|---------|
| **Variable/Fonction** | camelCase | `userName`, `getUserData()` |
| **Constante** | UPPER_SNAKE_CASE | `MAX_RETRY`, `API_URL` |
| **Composant** | PascalCase | `MyComponent` |
| **Type/Interface** | PascalCase | `UserData`, `FormState` |
| **Enum** | PascalCase (clés UPPER) | `enum Status { PENDING, ACTIVE }` |
| **Boolean** | is/has/should prefix | `isVisible`, `hasError` |

### Exemples

```typescript
// ✅ BON
const userName = "John";
const MAX_ATTEMPTS = 3;
const isLoading = false;
const hasError = false;

function getUserData() { ... }
function validateEmail(email: string) { ... }

interface UserProfile {
  firstName: string;
  lastName: string;
}

// ❌ MAUVAIS
const UserName = "John";        // PascalCase pour variable
const max_attempts = 3;         // snake_case
const loading = false;          // Pas de préfixe boolean
function get_user_data() { ... } // snake_case
```

---

## 📐 INDENTATION & FORMATAGE

### Règles ESLint/Prettier

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "es5",
  "printWidth": 80,
  "arrowParens": "avoid"
}
```

### Exemples

```tsx
// ✅ BON (2 espaces, single quotes)
export default function MyComponent() {
  const handleClick = () => {
    console.log('Click');
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

// ❌ MAUVAIS (4 espaces, double quotes, points-virgules manquants)
export default function MyComponent() {
    const handleClick = () => {
        console.log("Click")
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    )
}
```

---

## 💬 COMMENTAIRES

### Règles

1. **Commenter le POURQUOI, pas le QUOI**
2. **Utiliser JSDoc pour fonctions publiques**
3. **TODO/FIXME pour rappels**

### Exemples

```tsx
// ❌ MAUVAIS (commente l'évident)
// Déclare la variable email
const email = user.email;

// Vérifie si l'email est valide
if (validateEmail(email)) {
  // Envoie l'email
  sendEmail(email);
}

// ✅ BON (explique le contexte)
/**
 * Valide et envoie un email de confirmation.
 * 
 * Note: On utilise validateEmail au lieu de regex simple
 * car il gère les domaines internationaux (IDN).
 */
const email = user.email;
if (validateEmail(email)) {
  sendEmail(email);
}

// TODO: Ajouter retry logic (ticket #123)
// FIXME: Race condition possible ici (voir issue #456)
```

### JSDoc

```typescript
/**
 * Valide un email selon RFC 5322
 * 
 * @param email - L'email à valider
 * @returns true si valide, false sinon
 * 
 * @example
 * validateEmail('user@example.com') // true
 * validateEmail('invalid') // false
 */
export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

---

## 🔒 TYPESCRIPT

### Règles

1. **Toujours typer les props**
2. **Éviter `any` (utiliser `unknown` si nécessaire)**
3. **Utiliser interfaces pour objets, types pour unions**
4. **Définir les types dans le même fichier (sauf réutilisation)**

### Exemples

```typescript
// ✅ BON
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export default function Button({ 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false 
}: ButtonProps) {
  // ...
}

// ❌ MAUVAIS
export default function Button(props: any) { // any interdit
  const { label, onClick } = props; // Pas de type
  // ...
}
```

### Union Types

```typescript
// Type pour unions/primitifs
type Status = 'pending' | 'success' | 'error';
type ID = string | number;

// Interface pour objets
interface User {
  id: ID;
  name: string;
  status: Status;
}
```

---

## 🎯 PROPS & DESTRUCTURING

### Règles

1. **Destructurer les props dans la signature**
2. **Définir valeurs par défaut dans la signature**
3. **Typer TOUTES les props**

### Exemples

```tsx
// ✅ BON
interface CardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function Card({ 
  title, 
  description, 
  icon,
  onClick 
}: CardProps) {
  return (
    <div onClick={onClick}>
      {icon}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}

// ❌ MAUVAIS
export default function Card(props) { // Pas de type
  return (
    <div onClick={props.onClick}>
      {props.icon}
      <h3>{props.title}</h3>
      {props.description && <p>{props.description}</p>}
    </div>
  );
}
```

---

## 📦 IMPORTS

### Ordre

```tsx
// 1. React
import { useState, useEffect } from 'react';

// 2. Libraries externes
import { motion } from 'motion/react';
import { z } from 'zod';

// 3. Composants internes
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// 4. Utils/Hooks
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/utils/classnames';

// 5. Types
import type { User } from '@/types';

// 6. Assets
import Logo from '@/assets/logo.svg';
```

### Alias de Chemin

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/utils/*": ["src/utils/*"]
    }
  }
}
```

```tsx
// ✅ BON (avec alias)
import { Button } from '@/components/ui/button';

// ❌ ÉVITER (chemin relatif long)
import { Button } from '../../../components/ui/button';
```

---

## ✅ CHECKLIST CODE QUALITY

### Avant de Commit

- [ ] Pas de `console.log` ou `debugger`
- [ ] Aucune erreur TypeScript
- [ ] Aucune erreur ESLint
- [ ] Code formaté (Prettier)
- [ ] Imports organisés
- [ ] Props typées
- [ ] Fonctions commentées (JSDoc si public)
- [ ] Nommage cohérent
- [ ] Classes Tailwind ordonnées
- [ ] Responsive testé

---

## 🛠️ OUTILS RECOMMANDÉS

### VS Code Extensions

```json
{
  "recommendations": [
    "astro-build.astro-vscode",
    "bradlc.vscode-tailwindcss",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### Scripts Package.json

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx,.astro",
    "lint:fix": "eslint . --ext .ts,.tsx,.astro --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,astro}\"",
    "type-check": "tsc --noEmit"
  }
}
```

---

**📝 Conventions Maîtrisées ! 💪**

**Prochaine lecture** : `07_SEO_PERFORMANCE.md`
