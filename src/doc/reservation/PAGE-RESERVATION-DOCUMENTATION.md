# 📄 DOCUMENTATION - PAGE RÉSERVATION
## Confluence Digitale - Application Design System V6.7

---

## 📋 RÉFÉRENCE DESIGN SYSTEM

**⚠️ Pour les éléments génériques du Design System V6.7**, consultez :
👉 `/doc/offre/PAGE-OFFRE-DOCUMENTATION-COMPLETE.md`

Cette documentation se concentre **UNIQUEMENT** sur les spécificités de la page Réservation.

---

## 1. VUE D'ENSEMBLE

### Objectif de la page
Page de réservation d'exclusivité territoriale. L'utilisateur réserve sa place pour son métier/zone géographique.

### Positionnement stratégique
- **Hook principal** : "Félicitations ! Vous réservez votre exclusivité {Métier}"
- **USP** : Exclusivité territoriale garantie contractuellement
- **Cible** : TPE/PME prêts à réserver leur place (venant de AvailabilityBlock)
- **Conversion** : Formulaire simplifié 3 champs + rappel sous 24h

### Fichier source
`/pages/ConfluenceReservationPage.tsx`

---

## 2. STRUCTURE UNIQUE DE LA PAGE

### Architecture des sections

```
┌─────────────────────────────────────────┐
│ ConfluenceHeaderV6_7 (Fixed)            │
├─────────────────────────────────────────┤
│ 1. HERO DYNAMIQUE                       │
│    - Titre "Félicitations {Métier}"     │
│    - Badge exclusivité                  │
│    - Sous-titre rassurant               │
├─────────────────────────────────────────┤
│ 2. FORMULAIRE SIMPLIFIÉ (BG: White)     │
│    - 3 champs (nom, téléphone, email)   │
│    - Pré-remplissage métier + dépt      │
│    - CTA "Réserver ma place"            │
├─────────────────────────────────────────┤
│ 3. RÉASSURANCE CONTRACTUELLE            │
│    - ContractualReassuranceBlock        │
├─────────────────────────────────────────┤
│ ConfluenceFooterV6_2                    │
└─────────────────────────────────────────┘
```

---

## 3. PRÉ-REMPLISSAGE DYNAMIQUE

### 3.1. Lecture du métier depuis sessionStorage

**Source** : AvailabilityBlock stocke le métier dans `sessionStorage` lors du clic sur "Réserver ma place".

```tsx
// Dans ConfluenceOffrePage.tsx (AvailabilityBlock)
sessionStorage.setItem('reservationMetier', normalizeMetier(item.sector));
onNavigate('reservation');
```

**Lecture dans ReservationPage** :
```tsx
const [metier, setMetier] = useState<string>("");
const [departement, setDepartement] = useState<string>("Lot-et-Garonne");

useEffect(() => {
  // Lecture du métier depuis sessionStorage
  const metierParam = sessionStorage.getItem('reservationMetier') || "";
  setMetier(metierParam);

  // Département par défaut (peut être étendu avec géolocalisation)
  setDepartement("Lot-et-Garonne");

  // Optionnel : nettoyage après lecture
  // sessionStorage.removeItem('reservationMetier');
}, []);
```

### 3.2. Fonction de capitalisation du métier
```tsx
const capitalizeMetier = (metierStr: string): string => {
  if (!metierStr) return "Artisan";
  
  // Convertir les tirets en espaces et capitaliser
  const formatted = metierStr
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return formatted;
};

const metierDisplay = capitalizeMetier(metier);
```

**Exemples** :
- `"plombier"` → `"Plombier"`
- `"couvreur"` → `"Couvreur"`
- `"electricien"` → `"Electricien"`

---

## 4. SECTIONS SPÉCIFIQUES

### 4.1. HERO DYNAMIQUE

#### Badge Exclusivité
```tsx
<div 
  className="inline-flex items-center gap-2 bg-[#D1A65E]/10 border border-[#D1A65E]/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
>
  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#D1A65E]" strokeWidth={1.5} />
  <span className="text-sm md:text-base text-[#D1A65E]">Exclusivité Territoriale</span>
</div>
```

**Couleur** : Or/Cuivre (#D1A65E) pour l'aspect premium de l'exclusivité.

#### Titre dynamique
```tsx
<h1 
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-4 md:mb-6"
  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
>
  Félicitations !<br />
  Vous Réservez Votre Exclusivité <span className="text-[#D1A65E]">{metierDisplay}</span>
</h1>
```

**Personnalisation** :
- Métier injecté dynamiquement
- Métier en Or/Cuivre pour mise en avant

#### Sous-titre rassurant
```tsx
<p className="text-base md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto">
  Vous êtes à 1 clic de sécuriser votre zone géographique.<br className="hidden md:block" />
  <span className="text-[#10b981]">Aucun concurrent ne pourra prendre votre place</span> dans votre secteur.
</p>
```

**Accent vert** : Promesse d'exclusivité en couleur action positive.

---

### 4.2. FORMULAIRE SIMPLIFIÉ

#### Différence vs Audit Gratuit
| Audit Gratuit | Réservation |
|---------------|-------------|
| 4 champs + RGPD | 3 champs (nom, téléphone, email) |
| Validation stricte | Validation légère |
| Focus : Site actuel | Focus : Contact rapide |

#### Structure
```tsx
<form onSubmit={handleSubmit} className="space-y-6">
  {/* Info pré-remplie (lecture seule) */}
  <div className="p-4 md:p-6 rounded-xl bg-[#D1A65E]/5 border border-[#D1A65E]/20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p className="text-sm text-gray-600 mb-1">Métier</p>
        <p className="text-base md:text-lg text-[#1A1A1A]">{metierDisplay}</p>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-1">Département</p>
        <p className="text-base md:text-lg text-[#1A1A1A]">{departement}</p>
      </div>
    </div>
  </div>

  {/* Champs éditables */}
  {/* Nom, Téléphone, Email */}
  
  {/* CTA */}
  <Button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-[#D1A65E] hover:bg-[#B8914E] text-white h-12 md:h-14 rounded-lg text-base md:text-lg"
  >
    {isSubmitting ? (
      <span>Envoi en cours...</span>
    ) : (
      <span>Réserver Ma Place Maintenant</span>
    )}
  </Button>
</form>
```

#### Bloc info pré-remplie (lecture seule)
```tsx
<div className="p-4 md:p-6 rounded-xl bg-[#D1A65E]/5 border border-[#D1A65E]/20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <p className="text-sm text-gray-600 mb-1">Métier</p>
      <p className="text-base md:text-lg text-[#1A1A1A]">{metierDisplay}</p>
    </div>
    <div>
      <p className="text-sm text-gray-600 mb-1">Département</p>
      <p className="text-base md:text-lg text-[#1A1A1A]">{departement}</p>
    </div>
  </div>
</div>
```

**Design** :
- Background Or/Cuivre très clair (`bg-[#D1A65E]/5`)
- Bordure Or/Cuivre subtile
- Texte non éditable (display only)

#### Champ Nom
```tsx
<div>
  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
    Nom complet
  </label>
  <div className="relative">
    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
    <Input
      id="name"
      name="name"
      type="text"
      value={formData.name}
      onChange={handleChange}
      placeholder="Jean Dupont"
      required
      className="pl-12 h-12 md:h-14 rounded-lg border border-[#E5E7EB] focus:border-[#D1A65E]"
    />
  </div>
</div>
```

**Focus color** : Or/Cuivre (#D1A65E) au lieu de Vert (différenciation vs Audit Gratuit).

#### Champ Téléphone
```tsx
<div>
  <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
    Téléphone
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
      required
      className="pl-12 h-12 md:h-14 rounded-lg border border-[#E5E7EB] focus:border-[#D1A65E]"
    />
  </div>
</div>
```

**Note** : Téléphone requis (contrairement à Audit Gratuit) car besoin de rappel rapide.

#### Champ Email
```tsx
<div>
  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
    Email
  </label>
  <div className="relative">
    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
    <Input
      id="email"
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="contact@votreentreprise.fr"
      required
      className="pl-12 h-12 md:h-14 rounded-lg border border-[#E5E7EB] focus:border-[#D1A65E]"
    />
  </div>
</div>
```

#### CTA Bouton
```tsx
<Button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-[#D1A65E] hover:bg-[#B8914E] text-white h-12 md:h-14 rounded-lg text-base md:text-lg disabled:opacity-50 transition-all duration-300"
>
  {isSubmitting ? (
    <div className="flex items-center justify-center gap-2">
      <Send className="w-5 h-5 animate-pulse" strokeWidth={2} />
      <span>Envoi en cours...</span>
    </div>
  ) : (
    <span>Réserver Ma Place Maintenant</span>
  )}
</Button>
```

**Couleur** : Or/Cuivre (#D1A65E) pour cohérence avec le thème "Exclusivité Premium".

---

### 4.3. RÉASSURANCE CONTRACTUELLE

#### Composant ContractualReassuranceBlock
```tsx
<section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      <ContractualReassuranceBlock />
    </div>
  </div>
</section>
```

**Voir documentation** : `/components/ContractualReassuranceBlock.tsx`

**Objectif** : Rassurer l'utilisateur sur :
- La clause d'exclusivité contractuelle
- Les garanties légales
- Le processus après réservation

---

## 5. SOUMISSION DU FORMULAIRE

### 5.1. Fonction handleSubmit
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Simulation d'envoi (à remplacer par vraie API)
  await new Promise(resolve => setTimeout(resolve, 1500));

  setIsSubmitting(false);

  toast.success("Réservation confirmée !", {
    description: "Nous vous rappelons sous 24h pour finaliser votre exclusivité."
  });

  // Reset form
  setFormData({
    name: "",
    phone: "",
    email: ""
  });
};
```

### 5.2. Notification Toast
```tsx
toast.success("Réservation confirmée !", {
  description: "Nous vous rappelons sous 24h pour finaliser votre exclusivité."
});
```

**Note** : Pas d'état "isSubmitted" avec écran de succès (contrairement à Audit Gratuit). Ici, un toast suffit et le formulaire se réinitialise.

---

## 6. ÉLÉMENTS UNIQUES

### 6.1. Personnalisation par métier
- Titre Hero dynamique avec métier injecté
- Bloc info pré-remplie (métier + département)

### 6.2. Couleur thème Or/Cuivre
| Élément | Couleur |
|---------|---------|
| Badge | Or/Cuivre (#D1A65E) |
| Métier dans titre | Or/Cuivre |
| Focus inputs | Or/Cuivre |
| CTA bouton | Or/Cuivre |

**Différence vs Audit Gratuit** : Audit = Vert, Réservation = Or/Cuivre.

### 6.3. Formulaire simplifié
- Seulement 3 champs (vs 4 pour Audit)
- Pas de validation RGPD explicite (incluse dans CGV)
- Téléphone requis (vs optionnel dans Audit)

### 6.4. Pas d'écran de succès dédié
- Toast notification uniquement
- Formulaire réinitialisé après succès
- Utilisateur peut faire une autre réservation immédiatement

---

## 7. COPYWRITING SPÉCIFIQUE

### 7.1. Hero
- **Badge** : "Exclusivité Territoriale"
- **Titre** : "Félicitations ! Vous Réservez Votre Exclusivité **{Métier}**"
- **Sous-titre** : "**Aucun concurrent ne pourra prendre votre place**" (vert)

### 7.2. Bloc info pré-remplie
- **Labels** : "Métier", "Département"
- **Valeurs dynamiques** : Personnalisées selon sessionStorage

### 7.3. CTA
- **Bouton** : "Réserver Ma Place Maintenant"
- **Loading** : "Envoi en cours..."

### 7.4. Toast
- **Success** : "Réservation confirmée !"
- **Description** : "Nous vous rappelons sous 24h pour finaliser votre exclusivité."

---

## 8. PARCOURS UTILISATEUR

```
Clic "Réserver ma place" (AvailabilityBlock)
    ↓
sessionStorage.setItem('reservationMetier', ...)
    ↓
Navigation vers /reservation
    ↓
Lecture sessionStorage → Affichage Hero personnalisé
    ↓
Remplissage formulaire (3 champs)
    ↓
Soumission
    ↓
Toast success + reset formulaire
    ↓
Utilisateur peut naviguer librement
```

---

## 9. OPTIMISATIONS FUTURES SUGGÉRÉES

### 9.1. Géolocalisation automatique
- Détecter le département de l'utilisateur via IP
- Pré-remplir automatiquement le champ "Département"

### 9.2. Vérification de disponibilité en temps réel
- Avant soumission, vérifier que la place est toujours disponible
- Afficher message si réservé entre-temps

### 9.3. Calendrier de rappel
- Proposer à l'utilisateur de choisir une plage horaire pour le rappel
- Intégration Calendly ou équivalent

### 9.4. Multi-step form
- Étape 1 : Métier + Département (éditable)
- Étape 2 : Contact
- Étape 3 : Confirmation finale avec résumé

---

## 10. FICHIERS LIÉS

### Composants
- `/components/ConfluenceHeaderV6_7.tsx`
- `/components/ConfluenceFooterV6_2.tsx`
- `/components/ContractualReassuranceBlock.tsx`
- `/components/ui/button.tsx`
- `/components/ui/input.tsx`

### Hooks
- `/hooks/useScrollAnimation.ts`

### Pages connexes
- `/pages/ConfluenceOffrePage.tsx` (source : AvailabilityBlock)
- `/pages/ConfluenceCGVPage.tsx` (conditions contractuelles)

### sessionStorage
- **Clé** : `reservationMetier`
- **Valeur** : Métier normalisé (ex: "plombier", "couvreur")
- **Setter** : AvailabilityBlock (ConfluenceOffrePage)
- **Getter** : ConfluenceReservationPage

---

**FIN DU DOCUMENT**
