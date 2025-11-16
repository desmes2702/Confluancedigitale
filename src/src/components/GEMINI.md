# 🧩 Contexte Composants : Confluence Digitale

**Dossier** : `/src/components/`  
**Type** : Composants React interactifs (.tsx)  
**Framework** : React 18 + TypeScript + Tailwind CSS + Motion

---

## 📋 RÈGLES DE NOMMAGE

### Convention stricte : Préfixe "Confluence"

```typescript
✅ BON :
- ConfluenceHeader.tsx
- ConfluenceHeaderV6_7.tsx (avec version Design System)
- ConfluenceTeamBlock.tsx
- ConfluenceFAQ.tsx
- ConfluenceGDPRBanner.tsx

❌ MAUVAIS :
- Header.tsx
- TeamBlock.tsx
- FAQ.tsx
```

**Raison** : Éviter les conflits avec les composants ShadCN UI et améliorer la traçabilité.

### Exceptions autorisées

- ✅ Composants dans `/components/ui/` (ShadCN) : pas de préfixe
- ✅ Composants dans `/components/figma/` : préfixe optionnel
- ✅ Hooks personnalisés : préfixe "use" (ex: `useScrollAnimation.ts`)

---

## 🎨 STRUCTURE TYPE D'UN COMPOSANT

### Template de base

```tsx
import { motion } from 'motion/react';

interface ConfluenceMyComponentProps {
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function ConfluenceMyComponent({ 
  title, 
  description,
  variant = 'primary',
  className = ''
}: ConfluenceMyComponentProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={`py-16 lg:py-24 ${className}`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-gold-premium">{title}</h2>
        {description && (
          <p className="mt-4 text-texte-principal/80">{description}</p>
        )}
      </div>
    </motion.section>
  );
}
```

### Template avec état local

```tsx
import { useState } from 'react';
import { motion } from 'motion/react';

interface ConfluenceInteractiveComponentProps {
  items: string[];
  onItemClick?: (item: string) => void;
}

export function ConfluenceInteractiveComponent({ 
  items,
  onItemClick
}: ConfluenceInteractiveComponentProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (item: string, index: number) => {
    setActiveIndex(index);
    onItemClick?.(item);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.button
          key={item}
          onClick={() => handleClick(item, index)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`
            w-full p-4 rounded-lg transition-colors
            ${activeIndex === index 
              ? 'bg-gold-premium text-white' 
              : 'bg-fond-clair text-texte-principal hover:bg-gold-premium/10'
            }
          `}
        >
          {item}
        </motion.button>
      ))}
    </div>
  );
}
```

### Template avec hook personnalisé

```tsx
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ConfluenceAnimatedComponentProps {
  children: React.ReactNode;
}

export function ConfluenceAnimatedComponent({ 
  children 
}: ConfluenceAnimatedComponentProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

---

## 🎯 IMPORTS STANDARDS

### Toujours importer dans cet ordre

```tsx
// 1. React et hooks
import { useState, useEffect, useCallback } from 'react';

// 2. Bibliothèques externes
import { motion } from 'motion/react';

// 3. Composants ShadCN UI
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

// 4. Icônes Lucide
import { Check, X, ArrowRight } from 'lucide-react';

// 5. Hooks personnalisés
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useGDPRConsent } from '../hooks/useGDPRConsent';

// 6. Utilitaires
import { cn } from './ui/utils';

// 7. Types
import type { StrapiProject, StrapiTestimonial } from '../types/strapi';
```

---

## 🎨 DESIGN SYSTEM V6.7.2

### Couleurs disponibles (Tailwind)

```tsx
// Fond et structure
className="bg-fond-clair"           // #F9FAFB
className="text-texte-principal"    // #1A1A1A

// Couleurs métier
className="bg-gold-premium"         // #D1A65E
className="text-gold-premium"       // #D1A65E
className="border-gold-premium"     // #D1A65E

className="bg-red-contractuel"      // #A32E3A
className="text-red-contractuel"    // #A32E3A

className="bg-green-validation"     // #10b981
className="text-green-validation"   // #10b981

// Opacité
className="bg-gold-premium/10"      // 10% opacité
className="text-texte-principal/80" // 80% opacité
```

### ⚠️ INTERDIT : Classes typographiques Tailwind

```tsx
❌ NE PAS utiliser :
- text-xs, text-sm, text-lg, text-2xl, text-4xl (font-size)
- font-bold, font-semibold, font-medium (font-weight)
- leading-tight, leading-none, leading-relaxed (line-height)

✅ À LA PLACE :
- Utiliser les balises HTML appropriées (<h1>, <h2>, <p>)
- Les styles sont définis dans /styles/globals.css
```

### Layout responsive

```tsx
// Container standard
className="container mx-auto px-6 lg:px-12"

// Grille responsive
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Flex responsive
className="flex flex-col md:flex-row gap-4 items-center justify-between"

// Padding/margin responsive
className="py-16 lg:py-24"
className="mt-8 lg:mt-12"
className="space-y-6 lg:space-y-8"
```

---

## 🎬 ANIMATIONS MOTION/REACT

### Pattern standard : Fade + Slide

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  viewport={{ once: true }}
>
  {/* Contenu */}
</motion.div>
```

### Pattern : Hover + Tap

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  Cliquez-moi
</motion.button>
```

### Pattern : Stagger children (liste)

```tsx
<motion.ul
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.li
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

### Courbe d'accélération standard (Bézier)

```typescript
// Toujours utiliser cette courbe pour la cohérence
ease: [0.22, 1, 0.36, 1]
```

---

## 👥 TRIADE PROFESSIONNELLE

### Composant ConfluenceTeamBlock.tsx

Utiliser ce composant pour afficher la Triade sur les pages clés :

```tsx
import { ConfluenceTeamBlock } from './ConfluenceTeamBlock';

// Dans votre composant
<ConfluenceTeamBlock
  variant="default" // ou "compact"
  showImages={true}
  className="my-16"
/>
```

### Données de la Triade (BATCH 48 V10)

```typescript
const triadeData = [
  {
    name: "Antoine",
    role: "Garant de la Performance & Conversion",
    message: "PageSpeed 98+, temps de chargement <1s",
    color: "#D1A65E" // gold-premium
  },
  {
    name: "Pascal",
    role: "Garant de la Stratégie (Zéro Jargon)",
    message: "Zéro jargon, stratégie claire",
    color: "#D1A65E" // gold-premium
  },
  {
    name: "Laly",
    role: "Garante de la Sérénité & l'Autonomie",
    message: "Formation incluse, autonomie garantie",
    color: "#D1A65E" // gold-premium
  }
];
```

---

## 📦 COMPOSANTS SHADCN UI

### Composants disponibles dans `/components/ui/`

```tsx
// Boutons et interactions
import { Button } from './ui/button';
import { Badge } from './ui/badge';

// Cartes et conteneurs
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';

// Formulaires
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

// Navigation
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

// Dialogs et modals
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';

// Feedback
import { Progress } from './ui/progress';
import { Skeleton } from './ui/skeleton';
import { toast } from 'sonner@2.0.3';

// Utilitaires
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
```

### Exemples d'utilisation

```tsx
// Bouton avec variantes
<Button variant="default" size="lg">
  CTA Principal
</Button>

<Button variant="outline" size="sm">
  CTA Secondaire
</Button>

// Card avec motion
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
>
  <Card>
    <CardHeader>
      <CardTitle>Titre</CardTitle>
      <CardDescription>Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Contenu de la carte</p>
    </CardContent>
    <CardFooter>
      <Button>Action</Button>
    </CardFooter>
  </Card>
</motion.div>

// Toast notification
import { toast } from 'sonner@2.0.3';

toast.success('Formulaire envoyé avec succès !', {
  description: 'Nous vous recontacterons sous 24h.',
});

toast.error('Une erreur est survenue', {
  description: 'Veuillez réessayer plus tard.',
});
```

---

## 🔗 INTÉGRATION STRAPI

### Types TypeScript Strapi

```tsx
import type { 
  StrapiProject, 
  StrapiTestimonial,
  StrapiBlogPost,
  StrapiCaseStudy
} from '../types/strapi';
```

### Fetch data depuis Strapi (dans Astro)

```typescript
// Dans une page .astro
const response = await fetch(`${import.meta.env.STRAPI_URL}/api/projects?populate=*`);
const data = await response.json();
const projects: StrapiProject[] = data.data;
```

### Passer data à un composant React

```astro
---
// page.astro
const projects = await fetchProjects();
---

<ConfluenceProjectsList 
  projects={projects} 
  client:visible 
/>
```

```tsx
// ConfluenceProjectsList.tsx
interface ConfluenceProjectsListProps {
  projects: StrapiProject[];
}

export function ConfluenceProjectsList({ projects }: ConfluenceProjectsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle>{project.attributes.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{project.attributes.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

---

## 🪝 HOOKS PERSONNALISÉS

### useScrollAnimation (disponible)

```tsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function ConfluenceMyComponent() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div ref={ref} className={isVisible ? 'animate-fade-in' : ''}>
      Contenu animé au scroll
    </div>
  );
}
```

### useGDPRConsent (disponible)

```tsx
import { useGDPRConsent } from '../hooks/useGDPRConsent';

export function ConfluenceAnalyticsComponent() {
  const { hasConsent, updateConsent } = useGDPRConsent();

  if (!hasConsent('analytics')) {
    return null; // Ne pas charger les scripts analytics
  }

  return (
    <div>
      {/* Contenu nécessitant le consentement analytics */}
    </div>
  );
}
```

---

## 🎯 COMPOSANTS EXISTANTS (RÉUTILISER)

### Header et Footer

```tsx
// Header (toujours en haut)
import { ConfluenceHeaderV6_7 } from './ConfluenceHeaderV6_7';

<ConfluenceHeaderV6_7 client:load />

// Footer (toujours en bas)
import { ConfluenceFooterV6_2 } from './ConfluenceFooterV6_2';

<ConfluenceFooterV6_2 client:load />
```

### Blocks réutilisables

```tsx
// Triade professionnelle
import { ConfluenceTeamBlock } from './ConfluenceTeamBlock';

// FAQ
import { ConfluenceFAQ } from './ConfluenceFAQ';

// CTA final
import { ConfluenceFinalCTA } from './ConfluenceFinalCTA';

// Bande de confiance
import { ConfluenceTrustBand } from './ConfluenceTrustBand';

// Bloc contractuel
import { ContractualReassuranceBlock } from './ContractualReassuranceBlock';

// Disponibilité
import { AvailabilityBlock } from './offre/AvailabilityBlock';

// GDPR
import { ConfluenceGDPRBanner } from './ConfluenceGDPRBanner';
import { ConfluenceGDPRSettings } from './ConfluenceGDPRSettings';
import { ConfluenceGDPRStatus } from './ConfluenceGDPRStatus';
```

---

## 🛡️ VALIDATION ET ERREURS

### Validation de formulaire (Zod + React Hook Form)

```tsx
import { useForm } from 'react-hook-form@7.55.0';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type FormData = z.infer<typeof formSchema>;

export function ConfluenceContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Traitement du formulaire
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Nom</Label>
        <Input id="name" {...register('name')} />
        {errors.name && (
          <p className="text-red-contractuel text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      
      <Button type="submit">Envoyer</Button>
    </form>
  );
}
```

---

## 📱 RESPONSIVE DESIGN

### Breakpoints Tailwind

```typescript
// Breakpoints par défaut
sm: '640px'   // Mobile landscape
md: '768px'   // Tablet
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
2xl: '1536px' // Extra large desktop
```

### Patterns responsive

```tsx
// Mobile-first : par défaut mobile, puis adaptations
<div className="
  flex flex-col gap-4        // Mobile
  md:flex-row md:gap-6       // Tablet
  lg:gap-8                   // Desktop
">

// Images responsive
<img 
  src={image}
  className="
    w-full h-48 object-cover  // Mobile
    md:h-64                   // Tablet
    lg:h-80                   // Desktop
  "
  alt="Description"
/>

// Typographie responsive (via globals.css)
<h2>Mon titre</h2>  {/* Taille adaptée automatiquement */}

// Padding responsive
<section className="
  px-4 py-12              // Mobile
  md:px-8 md:py-16        // Tablet
  lg:px-12 lg:py-24       // Desktop
">
```

---

## ⚠️ ERREURS FRÉQUENTES

### 1. Oublier le préfixe "Confluence"

```tsx
❌ MAUVAIS :
export function TeamBlock() {}

✅ BON :
export function ConfluenceTeamBlock() {}
```

### 2. Utiliser des classes typographiques

```tsx
❌ MAUVAIS :
<h2 className="text-4xl font-bold">Titre</h2>

✅ BON :
<h2 className="text-gold-premium">Titre</h2>
```

### 3. Oublier les props TypeScript

```tsx
❌ MAUVAIS :
export function MyComponent({ title, description }) {}

✅ BON :
interface MyComponentProps {
  title: string;
  description?: string;
}
export function MyComponent({ title, description }: MyComponentProps) {}
```

### 4. Ne pas utiliser motion/react

```tsx
❌ MAUVAIS :
<div className="animate-fade-in">

✅ BON :
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
```

### 5. Oublier client:load ou client:visible dans Astro

```astro
❌ MAUVAIS :
<ConfluenceInteractiveComponent />

✅ BON :
<ConfluenceInteractiveComponent client:visible />
```

---

## ✅ CHECKLIST AVANT COMMIT

- [ ] Composant nommé avec préfixe "Confluence"
- [ ] Interface TypeScript définie pour les props
- [ ] Imports organisés (React → Libs → UI → Icons → Hooks → Types)
- [ ] Animations motion/react présentes
- [ ] Couleurs du Design System V6.7.2 utilisées
- [ ] Aucune classe typographique Tailwind (text-*, font-*, leading-*)
- [ ] Responsive testé (mobile, tablet, desktop)
- [ ] Accessibilité vérifiée (ARIA labels si nécessaire)
- [ ] `npm run type-check` passe sans erreur

---

**💡 Ce fichier de contexte guide Gemini Code Assist pour créer des composants cohérents avec le Design System V6.7.2 et les conventions du projet.**
