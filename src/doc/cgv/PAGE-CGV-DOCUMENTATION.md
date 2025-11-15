# 📄 DOCUMENTATION - PAGE CGV (Conditions Générales de Vente)
## Confluence Digitale - Application Design System V6.7

---

## 📋 RÉFÉRENCE DESIGN SYSTEM

**⚠️ Pour les éléments génériques du Design System V6.7**, consultez :
👉 `/doc/offre/PAGE-OFFRE-DOCUMENTATION-COMPLETE.md`

Cette documentation se concentre **UNIQUEMENT** sur les spécificités de la page CGV.

---

## 1. VUE D'ENSEMBLE

### Objectif de la page
Page légale présentant les Conditions Générales de Vente de Confluence Digitale avec transparence radicale.

### Positionnement stratégique
- **Hook principal** : "Conditions Générales de Vente - Transparence Totale"
- **USP** : CGV rédigées en langage clair, pas de jargon juridique inutile
- **Cible** : Clients existants et prospects qui veulent comprendre l'engagement
- **Conversion** : Renforcer la confiance par la clarté contractuelle

### Fichier source
`/pages/ConfluenceCGVPage.tsx`

---

## 2. STRUCTURE UNIQUE DE LA PAGE

### Architecture des sections

```
┌─────────────────────────────────────────┐
│ ConfluenceHeaderV6_7 (Fixed)            │
├─────────────────────────────────────────┤
│ 1. HERO                                 │
│    - Badge "Légal"                      │
│    - Titre CGV                          │
│    - Date de mise à jour                │
├─────────────────────────────────────────┤
│ 2. CONTENU CGV (BG: White)              │
│    - Structure hiérarchique             │
│    - Articles numérotés                 │
│    - Clauses importantes accentuées     │
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
  className="inline-flex items-center gap-2 bg-[#A32E3A]/10 border border-[#A32E3A]/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
>
  <FileText className="w-4 h-4 md:w-5 md:h-5 text-[#A32E3A]" strokeWidth={1.5} />
  <span className="text-sm md:text-base text-[#A32E3A]">Document Légal</span>
</div>
```

**Couleur** : Rouge Bordeaux (#A32E3A) pour sérieux contractuel.

#### Titre
```tsx
<h1 
  className="text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-4 md:mb-6"
  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
>
  Conditions Générales de Vente
</h1>
```

#### Date de mise à jour
```tsx
<p className="text-base md:text-lg text-gray-600">
  Dernière mise à jour : <span className="text-[#1A1A1A]">6 novembre 2025</span>
</p>
```

---

### 3.2. STRUCTURE DU CONTENU

#### Layout principal
```tsx
<section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      
      {/* Introduction */}
      <div className="mb-8 md:mb-12 p-6 md:p-8 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB]">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles 
          entre Confluence Digitale et ses clients dans le cadre de la prestation de services web.
        </p>
      </div>

      {/* Articles CGV */}
      <div className="space-y-8 md:space-y-12">
        {/* Article 1, 2, 3... */}
      </div>

    </div>
  </div>
</section>
```

#### Structure d'un article
```tsx
<article className="space-y-4">
  {/* Titre de l'article */}
  <h2 
    className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
  >
    <span className="text-[#D1A65E]">Article 1.</span> Objet
  </h2>

  {/* Contenu de l'article */}
  <div className="space-y-3 text-base md:text-lg text-gray-700 leading-relaxed">
    <p>
      Les présentes CGV ont pour objet de définir les droits et obligations 
      des parties dans le cadre de la vente de prestations de création et 
      maintenance de sites web.
    </p>
  </div>
</article>
```

#### Clause importante accentuée
```tsx
<div 
  className="p-4 md:p-6 rounded-xl bg-[#A32E3A]/5 border-l-4 border-[#A32E3A] my-4"
>
  <p className="text-base md:text-lg text-gray-800">
    <strong className="text-[#A32E3A]">⚠️ Clause importante :</strong>{" "}
    L'engagement minimum est de 24 mois. En cas de résiliation anticipée, 
    le client s'engage à régler les mensualités restantes, dans la limite 
    de 1 990€ HT.
  </p>
</div>
```

**Design** :
- Background Rouge Bordeaux très clair (`bg-[#A32E3A]/5`)
- Bordure gauche accentuée (`border-l-4 border-[#A32E3A]`)
- Icône ⚠️ pour attirer l'attention

---

### 3.3. ARTICLES CGV (Contenu suggéré)

#### Liste des articles types
1. **Objet** : Définition des CGV
2. **Définitions** : Termes utilisés (Client, Prestataire, Services...)
3. **Offre de services** : Description Setup 0€ + MRR 149€
4. **Durée d'engagement** : 24 mois minimum
5. **Tarifs et paiement** : Modalités de facturation mensuelle
6. **Exclusivité territoriale** : Clause de non-concurrence contractuelle
7. **Obligations du prestataire** : Performance 100/100, support illimité
8. **Obligations du client** : Paiement mensuel, fourniture de contenus
9. **Résiliation** : Conditions de résiliation anticipée (plafond 1 990€ HT)
10. **Propriété intellectuelle** : Le client est propriétaire de son site
11. **Confidentialité** : Protection des données
12. **Loi applicable** : Droit français

#### Exemple Article Exclusivité Territoriale
```tsx
<article className="space-y-4">
  <h2 
    className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
  >
    <span className="text-[#D1A65E]">Article 6.</span> Exclusivité Territoriale
  </h2>

  <div className="space-y-3 text-base md:text-lg text-gray-700 leading-relaxed">
    <p>
      Le Prestataire s'engage contractuellement à ne pas accepter de client 
      concurrent du Client dans sa zone géographique d'intervention définie 
      lors de la signature du contrat.
    </p>

    <p>
      Cette exclusivité territoriale est garantie pendant toute la durée 
      de la relation contractuelle.
    </p>

    <p>
      En cas de manquement à cette obligation, le Client pourra demander 
      la résiliation immédiate du contrat sans pénalité.
    </p>
  </div>
</article>
```

---

## 4. ÉLÉMENTS UNIQUES

### 4.1. Tone of Voice
- **Clair et accessible** : Pas de jargon juridique complexe
- **Transparence radicale** : Tous les chiffres explicites (24 mois, 1 990€, 149€)
- **Mise en avant des clauses importantes** : Blocs accentués en Rouge Bordeaux

### 4.2. Hiérarchie visuelle
- **Numérotation des articles** : En Or/Cuivre (#D1A65E)
- **Clauses critiques** : Blocs avec bordure Rouge Bordeaux
- **Texte courant** : Gris foncé pour lisibilité

### 4.3. Accessibilité
- **Max-width 4xl** : Largeur optimale pour lecture longue
- **Leading relaxed** : Interligne confortable
- **Espacements généreux** : `space-y-8 md:space-y-12` entre articles

---

## 5. COPYWRITING SPÉCIFIQUE

### 5.1. Hero
- **Badge** : "Document Légal"
- **Titre** : "Conditions Générales de Vente"
- **Date** : "Dernière mise à jour : {date}"

### 5.2. Introduction
- Texte rassurant et clair
- Éviter "ci-après dénommé" et autres formulations juridiques lourdes

### 5.3. Clauses importantes
- Préfixe "⚠️ Clause importante :"
- Texte en gras avec couleur Rouge Bordeaux

---

## 6. DIFFÉRENCES vs AUTRES PAGES

| Élément | CGV | Autres pages |
|---------|-----|--------------|
| **Badge Hero** | Rouge Bordeaux (#A32E3A) | Varie selon page |
| **Numérotation** | Or/Cuivre (#D1A65E) | N/A |
| **Clauses accentuées** | Bordure gauche Rouge | N/A |
| **Max-width** | 4xl (lecture longue) | 3xl-6xl (varie) |
| **Tone** | Juridique clair | Commercial/conversationnel |

---

## 7. OPTIMISATIONS FUTURES SUGGÉRÉES

### 7.1. Table des matières interactive
- Ancres cliquables pour sauter à un article spécifique
- Sticky sidebar sur desktop

### 7.2. Version PDF téléchargeable
- Bouton "Télécharger en PDF" dans le Hero
- Génération côté serveur

### 7.3. Historique des versions
- Archive des CGV précédentes avec date de modification
- Diff visuel entre versions

### 7.4. Glossaire pop-up
- Hover sur termes techniques → définition
- Améliore la compréhension

---

## 8. FICHIERS LIÉS

### Composants
- `/components/ConfluenceHeaderV6_7.tsx`
- `/components/ConfluenceFooterV6_2.tsx`

### Pages connexes
- `/pages/ConfluenceOffrePage.tsx` (lien vers CGV)
- `/pages/ConfluenceMentionsLegalesPage.tsx` (autre page légale)
- `/pages/ConfluencePolitiqueConfidentialitePage.tsx` (autre page légale)

### Références externes
- Lien depuis Section Exclusivité (ConfluenceOffrePage)
- Lien depuis Section Engagement (ConfluenceOffrePage)
- Footer (lien dans navigation légale)

---

**FIN DU DOCUMENT**
