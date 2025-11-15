# 📄 DOCUMENTATION - PAGE CONTACT
## Confluence Digitale - Application Design System V6.7

---

## 📋 RÉFÉRENCE DESIGN SYSTEM

**⚠️ Pour les éléments génériques du Design System V6.7**, consultez :
👉 `/doc/offre/PAGE-OFFRE-DOCUMENTATION-COMPLETE.md`

Cette documentation se concentre **UNIQUEMENT** sur les spécificités de la page Contact.

---

## 1. VUE D'ENSEMBLE

### Objectif de la page
Permettre aux prospects et clients de contacter Confluence Digitale de manière simple et directe.

### Positionnement stratégique
- **Hook principal** : "Parlons de Votre Projet"
- **USP** : Contact humain direct, réponse garantie sous 24h
- **Cible** : Prospects avec questions spécifiques, clients existants
- **Conversion** : Formulaire de contact + informations directes (email, téléphone)

### Fichier source
`/pages/ConfluenceContactPage.tsx` ou `/pages/ConfluenceContactPageV2.tsx`

---

## 2. STRUCTURE UNIQUE DE LA PAGE

### Architecture des sections

```
┌─────────────────────────────────────────┐
│ ConfluenceHeaderV6_7 (Fixed)            │
├─────────────────────────────────────────┤
│ 1. HERO                                 │
│    - Badge "Contact Direct"             │
│    - Titre + sous-titre                 │
├─────────────────────────────────────────┤
│ 2. LAYOUT 2 COLONNES (BG: White)        │
│    ┌──────────────┬──────────────────┐  │
│    │ Formulaire   │ Infos de contact │  │
│    │              │ • Email          │  │
│    │              │ • Téléphone      │  │
│    │              │ • Adresse        │  │
│    │              │ • Horaires       │  │
│    └──────────────┴──────────────────┘  │
├─────────────────────────────────────────┤
│ ConfluenceFooterV6_2                    │
└─────────────────────────────────────────┘
```

---

## 3. SECTIONS SPÉCIFIQUES

### 3.1. HERO

#### Badge Contact
```tsx
<div 
  className="inline-flex items-center gap-2 bg-[#10b981]/10 border border-[#10b981]/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
>
  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-[#10b981]" strokeWidth={1.5} />
  <span className="text-sm md:text-base text-[#10b981]">Contact Direct</span>
</div>
```

#### Titre
```tsx
<h1 
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-4 md:mb-6"
  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
>
  Parlons de <span className="text-[#10b981]">Votre Projet</span>
</h1>
```

#### Sous-titre
```tsx
<p className="text-base md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto">
  Une question ? Un projet ? Nous vous répondons sous <span className="text-[#10b981]">24h</span>.
</p>
```

---

### 3.2. LAYOUT 2 COLONNES

#### Structure
```tsx
<section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        
        {/* Colonne Gauche : Formulaire */}
        <div>
          {/* Formulaire de contact */}
        </div>

        {/* Colonne Droite : Informations */}
        <div>
          {/* Carte informations de contact */}
        </div>

      </div>
    </div>
  </div>
</section>
```

---

### 3.3. FORMULAIRE DE CONTACT

#### Structure du formulaire
```tsx
<form onSubmit={handleSubmit} className="space-y-6">
  {/* Champ Nom */}
  <div>
    <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
      Nom complet
    </label>
    <Input
      id="name"
      name="name"
      type="text"
      value={formData.name}
      onChange={handleChange}
      placeholder="Jean Dupont"
      required
      className="h-12 md:h-14 rounded-lg border border-[#E5E7EB] focus:border-[#10b981]"
    />
  </div>

  {/* Champ Email */}
  <div>
    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
      Email
    </label>
    <Input
      id="email"
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="contact@votreentreprise.fr"
      required
      className="h-12 md:h-14 rounded-lg border border-[#E5E7EB] focus:border-[#10b981]"
    />
  </div>

  {/* Champ Téléphone (optionnel) */}
  <div>
    <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
      Téléphone <span className="text-gray-400">(optionnel)</span>
    </label>
    <Input
      id="phone"
      name="phone"
      type="tel"
      value={formData.phone}
      onChange={handleChange}
      placeholder="06 12 34 56 78"
      className="h-12 md:h-14 rounded-lg border border-[#E5E7EB] focus:border-[#10b981]"
    />
  </div>

  {/* Champ Message */}
  <div>
    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
      Votre message
    </label>
    <Textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Décrivez-nous votre projet ou posez votre question..."
      required
      rows={6}
      className="rounded-lg border border-[#E5E7EB] focus:border-[#10b981]"
    />
  </div>

  {/* Bouton */}
  <Button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-[#10b981] hover:bg-[#059669] text-white h-12 md:h-14 rounded-lg text-base md:text-lg"
  >
    {isSubmitting ? "Envoi en cours..." : "Envoyer Mon Message"}
  </Button>
</form>
```

**Spécificité** :
- Champ `Textarea` pour le message (vs Input dans autres formulaires)
- Focus color Vert (#10b981)

---

### 3.4. CARTE INFORMATIONS DE CONTACT

#### Structure
```tsx
<div 
  className="rounded-xl md:rounded-2xl overflow-hidden relative p-8 md:p-12 bg-[#F9FAFB] border border-[#E5E7EB] sticky top-32"
  style={{ boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.04)' }}
>
  <h2 
    className="text-2xl md:text-3xl text-[#1A1A1A] mb-6"
    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
  >
    Nos Coordonnées
  </h2>

  <div className="space-y-6">
    {/* Email */}
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#10b981]/10 flex items-center justify-center">
        <Mail className="w-5 h-5 text-[#10b981]" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-1">Email</p>
        <a 
          href="mailto:contact@confluence-digitale.fr"
          className="text-base md:text-lg text-[#1A1A1A] hover:text-[#10b981] transition-colors"
        >
          contact@confluence-digitale.fr
        </a>
      </div>
    </div>

    {/* Téléphone */}
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#10b981]/10 flex items-center justify-center">
        <Phone className="w-5 h-5 text-[#10b981]" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-1">Téléphone</p>
        <a 
          href="tel:+33612345678"
          className="text-base md:text-lg text-[#1A1A1A] hover:text-[#10b981] transition-colors"
        >
          06 12 34 56 78
        </a>
      </div>
    </div>

    {/* Adresse */}
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#10b981]/10 flex items-center justify-center">
        <MapPin className="w-5 h-5 text-[#10b981]" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-1">Adresse</p>
        <p className="text-base md:text-lg text-[#1A1A1A]">
          Fumel, Lot-et-Garonne (47)<br />
          France
        </p>
      </div>
    </div>

    {/* Horaires */}
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#10b981]/10 flex items-center justify-center">
        <Clock className="w-5 h-5 text-[#10b981]" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-1">Horaires</p>
        <p className="text-base md:text-lg text-[#1A1A1A]">
          Lun - Ven : 9h - 18h<br />
          Sam - Dim : Fermé
        </p>
      </div>
    </div>
  </div>

  {/* Bloc Réponse Garantie */}
  <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
    <div className="flex items-center gap-3 p-4 rounded-lg bg-[#10b981]/10">
      <CheckCircle2 className="w-6 h-6 text-[#10b981] flex-shrink-0" strokeWidth={2} />
      <p className="text-sm md:text-base text-gray-700">
        <strong className="text-[#10b981]">Réponse garantie sous 24h</strong> (jours ouvrés)
      </p>
    </div>
  </div>
</div>
```

**Note** : `sticky top-32` pour que la carte reste visible pendant le scroll sur desktop.

---

## 4. ÉLÉMENTS UNIQUES

### 4.1. Champ Textarea
- Plus grand que Input (6 rows par défaut)
- Permet message long et détaillé

### 4.2. Carte sticky
- Reste visible pendant scroll sur desktop (`sticky top-32`)
- Améliore l'UX : infos toujours accessibles

### 4.3. Liens cliquables
- Email : `href="mailto:..."`
- Téléphone : `href="tel:..."`
- Hover color Vert (#10b981)

### 4.4. Bloc "Réponse garantie"
- Background Vert clair (`bg-[#10b981]/10`)
- Icône CheckCircle2
- Texte rassurant en gras

---

## 5. COPYWRITING SPÉCIFIQUE

### 5.1. Hero
- **Badge** : "Contact Direct"
- **Titre** : "Parlons de **Votre Projet**" (vert)
- **Sous-titre** : "Réponse sous **24h**" (vert)

### 5.2. Formulaire
- **Placeholder message** : "Décrivez-nous votre projet ou posez votre question..."
- **CTA** : "Envoyer Mon Message"

### 5.3. Carte infos
- **Titre** : "Nos Coordonnées"
- **Labels** : "Email", "Téléphone", "Adresse", "Horaires"
- **Garantie** : "**Réponse garantie sous 24h** (jours ouvrés)"

---

## 6. DIFFÉRENCES vs AUTRES FORMULAIRES

| Élément | Contact | Audit Gratuit | Réservation |
|---------|---------|---------------|-------------|
| **Champs** | Nom, Email, Tél, Message | Nom, Email, Tél, Site, RGPD | Nom, Tél, Email |
| **Textarea** | ✅ Oui (message) | ❌ Non | ❌ Non |
| **Couleur CTA** | Vert (#10b981) | Vert (#10b981) | Or/Cuivre (#D1A65E) |
| **Info complémentaire** | Carte coordonnées | Section réassurance | Bloc contractuel |
| **Layout** | 2 colonnes | 1 colonne | 1 colonne |

---

## 7. SOUMISSION DU FORMULAIRE

### Fonction handleSubmit (suggérée)
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Simulation d'envoi (à remplacer par API)
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("Message envoyé !", {
      description: "Nous vous répondons sous 24h."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  } catch (error) {
    toast.error("Erreur lors de l'envoi. Réessayez.");
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## 8. OPTIMISATIONS FUTURES SUGGÉRÉES

### 8.1. Map interactive
- Intégrer Google Maps ou OpenStreetMap
- Afficher la localisation de Fumel

### 8.2. Live chat
- Widget de chat en bas à droite
- Réponse instantanée pendant horaires ouvrés

### 8.3. Sélecteur de sujet
- Dropdown : "Question", "Projet", "Support", "Autre"
- Routage intelligent des messages

### 8.4. Estimation de temps de réponse
- Basé sur charge actuelle : "Temps de réponse estimé : 6h"

---

## 9. FICHIERS LIÉS

### Composants
- `/components/ConfluenceHeaderV6_7.tsx`
- `/components/ConfluenceFooterV6_2.tsx`
- `/components/ui/button.tsx`
- `/components/ui/input.tsx`
- `/components/ui/textarea.tsx`

### Hooks
- `/hooks/useScrollAnimation.ts`

### Pages connexes
- `/pages/ConfluenceAuditGratuitPage.tsx` (autre formulaire)
- Footer (lien Contact)

---

**FIN DU DOCUMENT**
