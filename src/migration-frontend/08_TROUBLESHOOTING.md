# 🔧 TROUBLESHOOTING - RÉSOLUTION DE PROBLÈMES

**Objectif** : Débugger rapidement les erreurs courantes  
**Format** : Problème → Solution

---

## 🚨 ERREURS ASTRO

### Erreur #1 : "Cannot use import statement outside a module"

**Problème** :
```bash
SyntaxError: Cannot use import statement outside a module
```

**Causes** :
- Fichier `.js` au lieu de `.mjs` ou `.ts`
- Configuration package.json incorrecte

**Solutions** :

```json
// ✅ Solution 1 : package.json
{
  "type": "module"
}
```

```javascript
// ✅ Solution 2 : Renommer astro.config.js → astro.config.mjs
// astro.config.mjs
import { defineConfig } from 'astro/config';
```

---

### Erreur #2 : Composant React ne s'affiche pas

**Problème** :
```astro
<!-- Le composant React est invisible sur la page -->
<MonComposant />
```

**Cause** : Hydratation manquante

**Solution** :

```astro
<!-- ❌ FAUX : Pas d'hydratation -->
<MonComposant />

<!-- ✅ CORRECT : Ajouter directive client:* -->
<MonComposant client:load />
<MonComposant client:visible />
```

**Debug** :
```astro
<!-- Test : Forcer hydratation immédiate -->
<MonComposant client:only="react" />
```

---

### Erreur #3 : "Error: Cannot import .astro file in .tsx"

**Problème** :
```tsx
// MonComposant.tsx
import Layout from '../layouts/BaseLayout.astro'; // ❌ ERREUR
```

**Cause** : Les fichiers `.astro` ne peuvent pas être importés dans `.tsx`

**Solution** :

```astro
<!-- ✅ CORRECT : Utiliser .astro pour importer .astro -->
---
// ma-page.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import MonComposant from '../components/MonComposant.tsx';
---

<BaseLayout>
  <MonComposant client:load />
</BaseLayout>
```

**Alternative** :
```tsx
// ✅ Créer un Layout React si nécessaire
// layouts/BaseLayout.tsx (React version)
export default function BaseLayout({ children }) {
  return <div>{children}</div>;
}
```

---

### Erreur #4 : "TypeError: Astro.props is undefined"

**Problème** :
```astro
---
const { title } = Astro.props; // ❌ undefined
---
```

**Cause** : Props non passées ou mauvais contexte

**Solution** :

```astro
<!-- ✅ Page Astro : Utiliser Astro.props -->
---
// src/pages/ma-page.astro
const title = "Mon Titre"; // Pas de props sur pages
---

<!-- ✅ Composant Astro : Props passées par parent -->
---
// src/components/MonComposant.astro
interface Props {
  title: string;
}
const { title } = Astro.props;
---
<h1>{title}</h1>
```

```astro
<!-- Parent : Passer les props -->
---
import MonComposant from './MonComposant.astro';
---
<MonComposant title="Mon Titre" />
```

---

### Erreur #5 : Build échoue mais dev fonctionne

**Problème** :
```bash
npm run dev  # ✅ Fonctionne
npm run build  # ❌ Échoue
```

**Causes** :
1. Erreur TypeScript non bloquante en dev
2. Import dynamique non supporté
3. Variable d'environnement manquante

**Solutions** :

```bash
# ✅ Solution 1 : Check TypeScript
npm run type-check

# ✅ Solution 2 : Build avec logs détaillés
npm run build -- --verbose

# ✅ Solution 3 : Clean cache
rm -rf node_modules/.astro dist
npm run build
```

```typescript
// ✅ Solution 4 : Forcer type strict
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

---

## ⚛️ ERREURS REACT

### Erreur #6 : "Warning: validateDOMNesting"

**Problème** :
```bash
Warning: validateDOMNesting(...): <div> cannot appear as a descendant of <p>
```

**Cause** : HTML invalide (div dans p, button dans button, etc.)

**Solution** :

```tsx
// ❌ FAUX : div dans p
<p>
  <div>Texte</div>
</p>

// ✅ CORRECT : div dans div
<div>
  <p>Texte</p>
  <div>Autre</div>
</div>
```

---

### Erreur #7 : "Warning: Each child should have a unique key"

**Problème** :
```tsx
// ❌ Pas de key
items.map(item => <div>{item.name}</div>)
```

**Solution** :

```tsx
// ✅ CORRECT : Ajouter key unique
items.map(item => (
  <div key={item.id}>{item.name}</div>
))

// ❌ MAUVAIS : Index comme key (si ordre change)
items.map((item, index) => (
  <div key={index}>{item.name}</div>
))

// ✅ BON : Index OK si liste statique
STATIC_ITEMS.map((item, index) => (
  <div key={index}>{item.name}</div>
))
```

---

### Erreur #8 : Hook appelé conditionnellement

**Problème** :
```tsx
// ❌ FAUX : Hook dans if
if (condition) {
  const [state, setState] = useState(false);
}
```

**Cause** : Les hooks doivent toujours être appelés dans le même ordre

**Solution** :

```tsx
// ✅ CORRECT : Hook avant condition
const [state, setState] = useState(false);

if (condition) {
  // Utiliser state
}
```

---

### Erreur #9 : State ne se met pas à jour

**Problème** :
```tsx
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
  setCount(count + 1); // ❌ count vaut toujours 0 ici
  // Résultat : count = 1 (au lieu de 2)
}
```

**Solution** :

```tsx
// ✅ CORRECT : Fonction de mise à jour
function increment() {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  // Résultat : count = 2
}
```

---

## 🎨 ERREURS TAILWIND

### Erreur #10 : Classes Tailwind ne s'appliquent pas

**Problème** :
```tsx
<div className="my-custom-class">
  {/* Styles ne s'appliquent pas */}
</div>
```

**Causes** :
1. Fichier non dans `content` de tailwind.config
2. Build cache
3. JIT désactivé

**Solutions** :

```typescript
// ✅ Solution 1 : Vérifier tailwind.config.ts
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}', // ✅ Tous formats
  ],
}
```

```bash
# ✅ Solution 2 : Clean cache
rm -rf node_modules/.astro dist
npm run dev
```

```tsx
// ✅ Solution 3 : Forcer compilation
<div className="px-4 sm:px-6 lg:px-8"> {/* Pas de template literal */}
```

---

### Erreur #11 : Classes dynamiques ne fonctionnent pas

**Problème** :
```tsx
// ❌ FAUX : Template literal
const color = 'red';
<div className={`text-${color}-500`}> {/* Ne fonctionne pas */}
```

**Cause** : JIT Tailwind ne détecte pas les classes dynamiques

**Solution** :

```tsx
// ✅ CORRECT : Classes complètes
const colorClass = color === 'red' ? 'text-red-500' : 'text-blue-500';
<div className={colorClass}>

// ✅ CORRECT : Object avec clsx/cn
import { cn } from '@/utils/classnames';

<div className={cn(
  'base-class',
  color === 'red' && 'text-red-500',
  color === 'blue' && 'text-blue-500'
)}>
```

```typescript
// ✅ Safelist dans tailwind.config.ts (dernier recours)
export default {
  safelist: [
    'text-red-500',
    'text-blue-500',
    'text-green-500',
  ],
}
```

---

## 🔐 ERREURS TYPESCRIPT

### Erreur #12 : "Property does not exist on type"

**Problème** :
```typescript
const data = getData(); // type unknown
console.log(data.name); // ❌ Error
```

**Solution** :

```typescript
// ✅ Solution 1 : Type assertion
const data = getData() as User;
console.log(data.name);

// ✅ Solution 2 : Type guard
if ('name' in data) {
  console.log(data.name);
}

// ✅ Solution 3 : Optional chaining
console.log(data?.name);
```

---

### Erreur #13 : "Type 'null' is not assignable to type"

**Problème** :
```typescript
const [user, setUser] = useState<User>(null); // ❌ Error
```

**Solution** :

```typescript
// ✅ CORRECT : Union type
const [user, setUser] = useState<User | null>(null);

// Utilisation
if (user) {
  console.log(user.name); // user est User ici
}
```

---

## 🐛 ERREURS COURANTES CONFLUENCE DIGITALE

### Erreur #14 : Hero Padding incorrect

**Problème** :
```tsx
// ❌ FAUX : Padding non conforme BATCH 21
<section className="pt-20 lg:pt-28">
```

**Solution** :

```tsx
// ✅ CORRECT : BATCH 21
<section className="pt-28 lg:pt-32">
```

---

### Erreur #15 : Ombres avec classes Tailwind

**Problème** :
```tsx
// ❌ FAUX : Classes shadow-* interdites
<div className="shadow-lg">
```

**Solution** :

```tsx
// ✅ CORRECT : Inline style
<div style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}>
```

---

### Erreur #16 : Playfair Display en bold

**Problème** :
```tsx
// ❌ FAUX : font-bold interdit sur Playfair
<h1 className="font-playfair font-bold">
```

**Solution** :

```tsx
// ✅ CORRECT : Regular uniquement
<h1 className="font-playfair">Mon Titre</h1>
```

---

### Erreur #17 : Formulaires avec mauvais espacement

**Problème** :
```tsx
// ❌ FAUX : space-y-4 ou space-y-8
<form className="space-y-4">
```

**Solution** :

```tsx
// ✅ CORRECT : BATCH 20B = space-y-6
<form className="space-y-6">
```

---

## 🌐 ERREURS DÉPLOIEMENT

### Erreur #18 : 404 sur routes Astro

**Problème** :
```
https://mon-site.com/offre → 404 Not Found
```

**Cause** : Configuration serveur incorrecte

**Solution** :

```json
// ✅ Vercel : vercel.json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

```toml
# ✅ Netlify : netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Erreur #19 : Images 404 en production

**Problème** :
```
Images fonctionnent en dev, 404 en production
```

**Cause** : Chemin absolu vs relatif

**Solution** :

```tsx
// ❌ FAUX : Chemin absolu
<img src="/images/logo.png" />

// ✅ CORRECT : Import Astro
---
import logo from '../assets/logo.png';
---
<img src={logo.src} alt="Logo" />

// ✅ CORRECT : Public folder
<img src="/logo.png" alt="Logo" /> {/* Fichier dans /public/logo.png */}
```

---

### Erreur #20 : Variables d'environnement undefined

**Problème** :
```typescript
const apiKey = import.meta.env.VITE_API_KEY; // undefined
```

**Solution** :

```bash
# ✅ Créer .env
VITE_API_KEY=ma-cle-api
PUBLIC_GA_ID=G-XXXXXXX
```

```typescript
// ✅ Utiliser
const apiKey = import.meta.env.VITE_API_KEY;
const gaId = import.meta.env.PUBLIC_GA_ID; // Exposé client
```

```typescript
// ✅ Typer env.d.ts
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly PUBLIC_GA_ID: string;
}
```

---

## 🛠️ OUTILS DE DEBUGGING

### Console Logs Améliorés

```typescript
// ✅ Log avec contexte
console.log('User:', user);
console.table(users); // Tableau
console.group('Form Validation');
console.log('Email:', email);
console.log('Valid:', isValid);
console.groupEnd();
```

### React DevTools

```bash
# Installer extension Chrome/Firefox
# https://chrome.google.com/webstore/detail/react-developer-tools/
```

### Astro DevTools

```bash
# Logs détaillés
npm run dev -- --verbose

# Debug mode
DEBUG=astro:* npm run dev
```

---

## 📋 CHECKLIST DEBUGGING

### Quand une erreur survient

1. [ ] **Lire le message d'erreur complet**
2. [ ] **Vérifier la stack trace** (fichier + ligne)
3. [ ] **Reproduire l'erreur** (dev vs build)
4. [ ] **Isoler le problème** (commenter code)
5. [ ] **Consulter la doc** (Astro, React, Tailwind)
6. [ ] **Chercher sur Stack Overflow**
7. [ ] **Demander sur Discord** (Astro, Tailwind)

### Questions à se poser

- ❓ L'erreur apparaît en dev ou build (ou les deux) ?
- ❓ L'erreur est-elle TypeScript, Runtime, ou Build ?
- ❓ Ai-je modifié un fichier récemment ?
- ❓ Les dépendances sont-elles à jour ?
- ❓ Le cache peut-il être corrompu ?

---

## 🆘 RESSOURCES D'AIDE

### Documentation

- [Astro Docs](https://docs.astro.build/)
- [React Docs](https://react.dev/)
- [Tailwind Docs](https://tailwindcss.com/docs)

### Communautés

- [Astro Discord](https://astro.build/chat)
- [Tailwind Discord](https://tailwindcss.com/discord)
- [Stack Overflow](https://stackoverflow.com/)

### Outils

- [Can I Use](https://caniuse.com/) - Compatibilité navigateurs
- [Regex101](https://regex101.com/) - Test regex
- [TypeScript Playground](https://www.typescriptlang.org/play) - Test TS

---

**🔧 Troubleshooting Maîtrisé ! 💪**

**Prochaine lecture** : `09_EXEMPLES_MIGRATION.md`
