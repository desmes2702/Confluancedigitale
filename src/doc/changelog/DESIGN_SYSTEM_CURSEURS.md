# 🎯 Design System V6.7.2 - Gestion Intelligente des Curseurs

**Date** : 6 novembre 2025  
**Version** : V6.7.2 (Curseurs Intelligents)  
**Objectif** : UX cohérente sur tous les éléments interactifs du site

---

## 📋 RÈGLES ABSOLUES

### 1️⃣ **`cursor-pointer`** — Éléments Cliquables

Appliquer sur **TOUS** les éléments interactifs :

```tsx
// ✅ Boutons
<button className="... cursor-pointer">CTA</button>
<Button className="... cursor-pointer">CTA</Button>

// ✅ Liens
<a href="..." className="... cursor-pointer">Lien</a>
<Link href="..." className="... cursor-pointer">Lien</Link>

// ✅ Cartes cliquables
<div onClick={...} className="... cursor-pointer">Card</div>

// ✅ Images cliquables
<img src="..." onClick={...} className="... cursor-pointer" />

// ✅ Icônes cliquables
<X onClick={...} className="... cursor-pointer" />
<Menu onClick={...} className="... cursor-pointer" />

// ✅ Labels de checkbox/radio
<label htmlFor="..." className="cursor-pointer">Label</label>
```

---

### 2️⃣ **`cursor-default`** — Éléments Non-Cliquables

Appliquer sur éléments qui **semblent** cliquables mais ne le sont **pas** :

```tsx
// ✅ Boutons désactivés
<button disabled className="... cursor-default opacity-50">
  CTA Désactivé
</button>

// ✅ Liens désactivés (visuel mais pas interactif)
<span className="text-gray-400 cursor-default">Lien inactif</span>

// ✅ Cartes informatives (pas de onClick)
<div className="border rounded-lg p-4 cursor-default">
  Info card (non cliquable)
</div>
```

---

### 3️⃣ **`cursor-text`** — Champs de Saisie

Appliquer automatiquement par les navigateurs, mais peut être forcé :

```tsx
// ✅ Inputs
<input type="text" className="... cursor-text" />

// ✅ Textareas
<textarea className="... cursor-text"></textarea>

// ✅ Divs éditables
<div contentEditable className="... cursor-text">Texte éditable</div>
```

---

### 4️⃣ **`cursor-not-allowed`** — Actions Impossibles

Appliquer sur éléments **désactivés** ou **bloqués** :

```tsx
// ✅ Bouton désactivé
<button disabled className="... cursor-not-allowed opacity-50">
  CTA Désactivé
</button>

// ✅ Input read-only
<input readOnly className="... cursor-not-allowed bg-gray-100" />

// ✅ Zone verrouillée
<div className="... cursor-not-allowed opacity-60">
  Contenu verrouillé
</div>
```

---

## 🎨 APPLICATIONS CONCRÈTES

### Header (ConfluenceHeaderV6_7)

```tsx
// Logo cliquable
<div onClick={() => onNavigate('landing')} className="cursor-pointer">
  <ConfluenceLogo />
</div>

// Items menu cliquables
<button 
  onClick={() => onNavigate('offre')} 
  className="... cursor-pointer hover:text-[#D1A65E]"
>
  Offre
</button>

// Menu mobile toggle
<Menu onClick={toggleMobile} className="cursor-pointer" />
```

---

### Footer (ConfluenceFooterV6_2)

```tsx
// Liens de navigation
<a 
  onClick={() => onNavigate('cgv')} 
  className="... cursor-pointer hover:text-[#D1A65E]"
>
  CGV
</a>

// Liens externes (email, téléphone)
<a href="mailto:contact@..." className="cursor-pointer hover:underline">
  contact@confluence-digitale.fr
</a>
```

---

### Formulaires

```tsx
// Labels (associés à inputs)
<label htmlFor="email" className="cursor-pointer">
  Votre email
</label>

// Checkbox + Label
<div className="flex items-center gap-2">
  <input type="checkbox" id="rgpd" className="cursor-pointer" />
  <label htmlFor="rgpd" className="cursor-pointer">
    J'accepte la politique de confidentialité
  </label>
</div>

// Bouton submit actif
<button type="submit" className="... cursor-pointer">
  Envoyer
</button>

// Bouton submit désactivé
<button 
  type="submit" 
  disabled={!isValid} 
  className="... cursor-not-allowed opacity-50"
>
  Envoyer
</button>
```

---

### Cartes Interactives

```tsx
// Card cliquable (ex: Études de cas)
<div 
  onClick={() => openCaseStudy(id)} 
  className="... cursor-pointer hover:border-[#D1A65E] transition-all"
>
  <h3>Titre</h3>
  <p>Description</p>
</div>

// Card informative (non cliquable)
<div className="... cursor-default">
  <h3>Info</h3>
  <p>Texte</p>
</div>
```

---

### Modals & Overlays

```tsx
// Bouton fermeture modal
<X 
  onClick={closeModal} 
  className="... cursor-pointer hover:text-[#A32E3A]" 
/>

// Overlay cliquable (fermer modal en cliquant dehors)
<div 
  onClick={closeModal} 
  className="fixed inset-0 bg-black/50 cursor-pointer"
/>

// Contenu modal (ne pas fermer si cliqué)
<div 
  onClick={(e) => e.stopPropagation()} 
  className="... cursor-default"
>
  Contenu modal
</div>
```

---

## ✅ CHECKLIST PAR COMPOSANT

### ConfluenceHeaderV6_7
- [x] Logo cliquable : `cursor-pointer`
- [x] Items menu : `cursor-pointer`
- [x] CTA "Audit Gratuit" : `cursor-pointer`
- [x] Menu burger mobile : `cursor-pointer`

### ConfluenceFooterV6_2
- [x] Liens navigation : `cursor-pointer`
- [x] Liens sociaux : `cursor-pointer`
- [x] Email/Téléphone : `cursor-pointer`

### ConfluenceFAQ
- [x] Questions (accordion) : `cursor-pointer`
- [x] Icônes expand : `cursor-pointer`

### Formulaires (Contact, Audit, Réservation)
- [x] Labels : `cursor-pointer`
- [x] Inputs : `cursor-text` (par défaut)
- [x] Checkbox : `cursor-pointer`
- [x] Boutons actifs : `cursor-pointer`
- [x] Boutons désactivés : `cursor-not-allowed`

### Pages Études de Cas
- [x] Cards cliquables : `cursor-pointer`
- [x] Filtres : `cursor-pointer`

### Page Exclusivité
- [x] Cards secteurs : `cursor-pointer` (si disponible)
- [x] Cards secteurs : `cursor-not-allowed` (si complet)

---

## 🎯 IMPACT UX

### Avant (Sans curseurs cohérents)
- Utilisateurs cliquent sur éléments non-cliquables
- Confusion sur ce qui est interactif
- Frustration UX

### Après (Curseurs intelligents) ✅
- Feedback visuel immédiat
- Clarté sur ce qui est cliquable
- UX professionnelle et fluide

---

## 🧪 TESTS RECOMMANDÉS

### Tests Visuels
- [ ] Hover sur logo → cursor pointer
- [ ] Hover sur menu items → cursor pointer
- [ ] Hover sur CTAs → cursor pointer
- [ ] Hover sur inputs → cursor text
- [ ] Hover sur boutons désactivés → cursor not-allowed

### Tests Fonctionnels
- [ ] Tous les clics fonctionnent sur éléments cursor-pointer
- [ ] Aucun clic possible sur éléments cursor-not-allowed
- [ ] Labels checkbox/radio cliquables

---

## 📚 RESSOURCES

### Documentation MDN
- [cursor (CSS)](https://developer.mozilla.org/fr/docs/Web/CSS/cursor)

### Tailwind CSS
- [Cursor utilities](https://tailwindcss.com/docs/cursor)

---

**Dernière mise à jour** : 6 novembre 2025  
**Version** : V6.7.2  
**Status** : ✅ Production Ready  
**Priorité** : 🔴 CRITIQUE (UX fondamentale)
