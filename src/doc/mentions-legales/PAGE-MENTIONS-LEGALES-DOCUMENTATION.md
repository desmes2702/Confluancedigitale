# 📄 DOCUMENTATION - PAGE MENTIONS LÉGALES
## Confluence Digitale - Application Design System V6.7

---

## 📋 RÉFÉRENCE DESIGN SYSTEM

**⚠️ Pour les éléments génériques du Design System V6.7**, consultez :
👉 `/doc/offre/PAGE-OFFRE-DOCUMENTATION-COMPLETE.md`

Cette documentation se concentre **UNIQUEMENT** sur les spécificités de la page Mentions Légales.

---

## 1. VUE D'ENSEMBLE

### Objectif de la page
Page légale obligatoire présentant les informations légales de Confluence Digitale (éditeur, hébergeur, propriété intellectuelle).

### Positionnement stratégique
- **Hook principal** : "Mentions Légales"
- **USP** : Conformité légale, transparence
- **Cible** : Visiteurs cherchant informations légales, conformité RGPD
- **Conversion** : Renforcer la confiance par la transparence légale

### Fichier source
`/pages/ConfluenceMentionsLegalesPage.tsx`

---

## 2. STRUCTURE UNIQUE DE LA PAGE

### Architecture des sections

```
┌─────────────────────────────────────────┐
│ ConfluenceHeaderV6_7 (Fixed)            │
├─────────────────────────────────────────┤
│ 1. HERO                                 │
│    - Badge "Légal"                      │
│    - Titre                              │
│    - Date de MAJ                        │
├─────────────────────────────────────────┤
│ 2. CONTENU (BG: White)                  │
│    - Éditeur du site                    │
│    - Hébergeur                          │
│    - Propriété intellectuelle           │
│    - Données personnelles               │
│    - Cookies                            │
├─────────────────────────────────────────┤
│ ConfluenceFooterV6_2                    │
└─────────────────────────────────────────┘
```

---

## 3. SECTIONS SPÉCIFIQUES

### 3.1. HERO

#### Badge Légal
```tsx
<div 
  className="inline-flex items-center gap-2 bg-gray-500/10 border border-gray-500/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
>
  <Info className="w-4 h-4 md:w-5 md:h-5 text-gray-600" strokeWidth={1.5} />
  <span className="text-sm md:text-base text-gray-600">Informations Légales</span>
</div>
```

**Couleur** : Gris neutre (pas de couleur accent).

#### Titre
```tsx
<h1 
  className="text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-4 md:mb-6"
  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
>
  Mentions Légales
</h1>
```

#### Date
```tsx
<p className="text-base md:text-lg text-gray-600">
  Dernière mise à jour : <span className="text-[#1A1A1A]">6 novembre 2025</span>
</p>
```

---

### 3.2. STRUCTURE DU CONTENU

#### Layout
```tsx
<section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
      
      {/* Bloc Éditeur */}
      <div>
        <h2 
          className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
        >
          Éditeur du Site
        </h2>
        <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
          <p><strong>Raison sociale :</strong> Confluence Digitale</p>
          <p><strong>Forme juridique :</strong> [À compléter : SARL, SAS, Auto-entrepreneur...]</p>
          <p><strong>Siège social :</strong> Fumel, Lot-et-Garonne (47), France</p>
          <p><strong>SIRET :</strong> [À compléter]</p>
          <p><strong>Email :</strong> contact@confluence-digitale.fr</p>
          <p><strong>Téléphone :</strong> 06 12 34 56 78</p>
        </div>
      </div>

      {/* Bloc Hébergeur */}
      <div>
        <h2 
          className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
        >
          Hébergeur du Site
        </h2>
        <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
          <p><strong>Hébergeur :</strong> [À compléter : Vercel, OVH, etc.]</p>
          <p><strong>Adresse :</strong> [À compléter]</p>
          <p><strong>Téléphone :</strong> [À compléter]</p>
        </div>
      </div>

      {/* Bloc Propriété Intellectuelle */}
      <div>
        <h2 
          className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
        >
          Propriété Intellectuelle
        </h2>
        <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-3">
          <p>
            L'ensemble du contenu de ce site (textes, images, logos, icônes) est la propriété 
            exclusive de Confluence Digitale, sauf mention contraire.
          </p>
          <p>
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, 
            même partielle, de ces différents éléments est strictement interdite sans l'accord 
            exprès par écrit de Confluence Digitale.
          </p>
        </div>
      </div>

      {/* Bloc Données Personnelles */}
      <div>
        <h2 
          className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
        >
          Données Personnelles
        </h2>
        <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-3">
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez 
            d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant.
          </p>
          <p>
            Pour exercer ces droits, veuillez consulter notre{' '}
            <button 
              onClick={() => handleNavigation('politique-confidentialite')}
              className="text-[#10b981] hover:text-[#059669] underline cursor-pointer"
            >
              Politique de Confidentialité
            </button>{' '}
            ou nous contacter à{' '}
            <a 
              href="mailto:contact@confluence-digitale.fr"
              className="text-[#10b981] hover:text-[#059669] underline"
            >
              contact@confluence-digitale.fr
            </a>.
          </p>
        </div>
      </div>

      {/* Bloc Cookies */}
      <div>
        <h2 
          className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
        >
          Cookies
        </h2>
        <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-3">
          <p>
            Ce site utilise des cookies strictement nécessaires à son fonctionnement. 
            Aucun cookie de tracking tiers n'est utilisé.
          </p>
          <p>
            Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
```

---

## 4. ÉLÉMENTS UNIQUES

### 4.1. Informations à compléter
**Champs marqués `[À compléter]`** :
- Forme juridique (SARL, SAS, Auto-entrepreneur...)
- SIRET
- Nom du directeur de publication
- Détails hébergeur (nom, adresse, téléphone)

### 4.2. Liens internes
- **Politique de Confidentialité** : `onClick={() => handleNavigation('politique-confidentialite')}`
- **Email cliquable** : `href="mailto:contact@confluence-digitale.fr"`

### 4.3. Tone of Voice
- **Formel mais accessible** : Pas trop juridique, reste compréhensible
- **Transparence** : Tous les contacts affichés clairement

---

## 5. STRUCTURE DES BLOCS

### Pattern répété
```tsx
<div>
  {/* Titre H2 */}
  <h2 
    className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
  >
    Titre du Bloc
  </h2>

  {/* Contenu */}
  <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
    <p><strong>Label :</strong> Valeur</p>
    {/* Ou paragraphes pour texte long */}
  </div>
</div>
```

---

## 6. COPYWRITING SPÉCIFIQUE

### 6.1. Hero
- **Badge** : "Informations Légales"
- **Titre** : "Mentions Légales"
- **Date** : "Dernière mise à jour : {date}"

### 6.2. Blocs
- **Titres** : Courts et descriptifs (Éditeur, Hébergeur, Propriété Intellectuelle...)
- **Labels** : En gras pour clarté (Raison sociale, SIRET, Email...)

---

## 7. DIFFÉRENCES vs CGV

| Élément | Mentions Légales | CGV |
|---------|------------------|-----|
| **Badge color** | Gris neutre | Rouge Bordeaux |
| **Contenu** | Infos société, hébergeur | Conditions contractuelles |
| **Tone** | Informatif | Contractuel |
| **Liens internes** | Vers Politique Confidentialité | Vers Offre, Engagement |

---

## 8. CONFORMITÉ LÉGALE

### Éléments obligatoires (France)
✅ **Nom de l'éditeur**  
✅ **Forme juridique**  
✅ **Siège social**  
✅ **SIRET**  
✅ **Contact (email, téléphone)**  
✅ **Hébergeur (nom, adresse)**  
✅ **Directeur de publication** (si applicable)  
✅ **Mention RGPD/Données personnelles**  

---

## 9. OPTIMISATIONS FUTURES SUGGÉRÉES

### 9.1. Lien vers Politique de Cookies
- Créer une page dédiée si cookies complexes
- Intégrer bannière de consentement cookies

### 9.2. Icônes pour chaque section
- Email : `Mail` icon
- Téléphone : `Phone` icon
- Adresse : `MapPin` icon

### 9.3. Mode édition admin
- Interface pour modifier facilement SIRET, contacts, etc.
- Sans toucher au code

---

## 10. FICHIERS LIÉS

### Composants
- `/components/ConfluenceHeaderV6_7.tsx`
- `/components/ConfluenceFooterV6_2.tsx`

### Pages connexes
- `/pages/ConfluencePolitiqueConfidentialitePage.tsx` (lien RGPD)
- `/pages/ConfluenceCGVPage.tsx` (autre page légale)
- Footer (lien Mentions Légales)

---

**FIN DU DOCUMENT**
