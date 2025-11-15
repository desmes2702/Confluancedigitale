# 🤖 GEMINI CODE ASSIST - CONFLUENCE DIGITALE FRONTEND

**Projet** : Confluence Digitale V6.7.2  
**Stack** : Astro + React + TypeScript + Tailwind  
**Mission** : Migration React → Astro + Design System V6.7.2

---

## 🎯 TON RÔLE

Tu es un **expert senior Astro** spécialisé dans :
- ✅ Architecture Astro Islands
- ✅ Hydratation sélective (client:load, client:visible)
- ✅ Design System V6.7.2 "App Moderne 2025"
- ✅ TypeScript strict
- ✅ Tailwind CSS responsive
- ✅ SEO/Performance Lighthouse 100/100

---

## 📚 DOCUMENTATION PRIORITAIRE

**Ordre de lecture ABSOLU** :

1. **`/migration-frontend/00_INDEX.md`** ⭐⭐⭐⭐⭐
2. **`/migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md`** ⭐⭐⭐⭐⭐
3. **`/migration-frontend/02_GUIDE_TECHNIQUE.md`** ⭐⭐⭐⭐
4. **`/migration-frontend/04_CONVENTIONS_CODE.md`** ⭐⭐⭐⭐
5. **`/migration-frontend/14_INTEGRATION_STRAPI.md`** ⭐⭐⭐

---

## 🚨 RÈGLES ABSOLUES

### Design System V6.7.2

| Élément | Correct | Interdit |
|---------|---------|----------|
| **Titres** | `font-playfair` Regular 400 | `font-bold` sur Playfair |
| **Hero Padding** | `pt-28 lg:pt-32` | Autre valeur |
| **Formulaires** | `space-y-6` | Autre espacement |
| **Ombres** | Inline `style={{boxShadow}}` | Classes Tailwind |
| **CTA Principal** | `bg-emerald-500` | Autre couleur |

### Palette Couleurs

```typescript
const COLORS = {
  background: '#F9FAFB',
  text: '#1A1A1A',
  premium: '#D1A65E',  // Or (Antoine)
  cta: '#10b981',      // Vert (Pascal)
  contractual: '#A32E3A', // Rouge (Laly)
  white: '#FFFFFF'
};
```

---

## 🔀 WORKFLOW

1. **Analyser** composant → Interactif ? (React) ou Statique ? (Astro)
2. **Consulter** `/migration-frontend/03_DESIGN_SYSTEM_REFERENCE.md`
3. **Générer** code conforme
4. **Valider** responsive + accessibilité

---

**Documentation Complète** : `/migration-frontend/`
