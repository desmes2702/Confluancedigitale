# 📄 DOCUMENTATION - PAGE POLITIQUE DE CONFIDENTIALITÉ
## Confluence Digitale - Application Design System V6.7

---

## 📋 RÉFÉRENCE DESIGN SYSTEM

**⚠️ Pour les éléments génériques du Design System V6.7**, consultez :
👉 `/doc/offre/PAGE-OFFRE-DOCUMENTATION-COMPLETE.md`

Cette documentation se concentre **UNIQUEMENT** sur les spécificités de la page Politique de Confidentialité.

---

## 1. VUE D'ENSEMBLE

### Objectif de la page
Page légale obligatoire (RGPD) expliquant la collecte, l'utilisation et la protection des données personnelles.

### Positionnement stratégique
- **Hook principal** : "Politique de Confidentialité - Protection de Vos Données"
- **USP** : Conformité RGPD, transparence radicale sur les données
- **Cible** : Visiteurs soucieux de la protection de leurs données
- **Conversion** : Renforcer la confiance par la transparence sur la vie privée

### Fichier source
`/pages/ConfluencePolitiqueConfidentialitePage.tsx`

---

## 2. STRUCTURE UNIQUE DE LA PAGE

### Architecture des sections

```
┌─────────────────────────────────────────┐
│ ConfluenceHeaderV6_7 (Fixed)            │
├─────────────────────────────────────────┤
│ 1. HERO                                 │
│    - Badge "RGPD"                       │
│    - Titre                              │
│    - Date de MAJ                        │
├─────────────────────────────────────────┤
│ 2. CONTENU (BG: White)                  │
│    - Données collectées                 │
│    - Utilisation des données            │
│    - Stockage et sécurité               │
│    - Droits des utilisateurs            │
│    - Cookies                            │
│    - Contact DPO                        │
├─────────────────────────────────────────┤
│ ConfluenceFooterV6_2                    │
└─────────────────────────────────────────┘
```

---

## 3. SECTIONS SPÉCIFIQUES

### 3.1. HERO

#### Badge RGPD
```tsx
<div 
  className="inline-flex items-center gap-2 bg-[#10b981]/10 border border-[#10b981]/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
>
  <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#10b981]" strokeWidth={1.5} />
  <span className="text-sm md:text-base text-[#10b981]">Conformité RGPD</span>
</div>
```

**Couleur** : Vert (#10b981) pour aspect protecteur et positif.

#### Titre
```tsx
<h1 
  className="text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-4 md:mb-6"
  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
>
  Politique de <span className="text-[#10b981]">Confidentialité</span>
</h1>
```

#### Sous-titre
```tsx
<p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
  Nous prenons la protection de vos données personnelles très au sérieux.<br className="hidden md:block" />
  Conformément au RGPD, voici comment nous collectons et utilisons vos informations.
</p>
```

---

### 3.2. STRUCTURE DU CONTENU

#### Layout
```tsx
<section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
      
      {/* 1. Données Collectées */}
      {/* 2. Utilisation des Données */}
      {/* 3. Stockage et Sécurité */}
      {/* 4. Droits des Utilisateurs */}
      {/* 5. Cookies */}
      {/* 6. Contact DPO */}

    </div>
  </div>
</section>
```

---

### 3.3. BLOCS DE CONTENU

#### 1. Données Collectées
```tsx
<div>
  <h2 
    className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
  >
    <span className="text-[#10b981]">1.</span> Données Collectées
  </h2>

  <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-3">
    <p>
      Nous collectons uniquement les données nécessaires au fonctionnement de nos services :
    </p>

    <ul className="space-y-2 ml-6">
      <li className="flex items-start gap-2">
        <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span><strong>Formulaire Audit Gratuit :</strong> Nom, email, téléphone (optionnel), URL du site</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span><strong>Formulaire Réservation :</strong> Nom, téléphone, email, métier, département</span>
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span><strong>Formulaire Contact :</strong> Nom, email, téléphone (optionnel), message</span>
      </li>
    </ul>

    <p>
      <strong className="text-[#10b981]">Nous ne collectons JAMAIS :</strong>
    </p>

    <ul className="space-y-2 ml-6">
      <li className="flex items-start gap-2">
        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span>Coordonnées bancaires (sauf via passerelle de paiement sécurisée tierce)</span>
      </li>
      <li className="flex items-start gap-2">
        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span>Données sensibles (santé, religion, orientation politique...)</span>
      </li>
      <li className="flex items-start gap-2">
        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span>Données de navigation sans consentement</span>
      </li>
    </ul>
  </div>
</div>
```

#### 2. Utilisation des Données
```tsx
<div>
  <h2 
    className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
  >
    <span className="text-[#10b981]">2.</span> Utilisation des Données
  </h2>

  <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-3">
    <p>Vos données sont utilisées exclusivement pour :</p>

    <ul className="space-y-2 ml-6">
      <li className="flex items-start gap-2">
        <ArrowRight className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span>Vous recontacter suite à votre demande d'audit ou de réservation</span>
      </li>
      <li className="flex items-start gap-2">
        <ArrowRight className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span>Gérer votre contrat et notre relation commerciale</span>
      </li>
      <li className="flex items-start gap-2">
        <ArrowRight className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span>Vous envoyer des informations pertinentes sur nos services (avec votre consentement)</span>
      </li>
    </ul>

    <div className="p-4 md:p-6 rounded-xl bg-[#10b981]/5 border-l-4 border-[#10b981] mt-4">
      <p className="text-base md:text-lg text-gray-800">
        <strong className="text-[#10b981]">⚠️ Engagement :</strong>{" "}
        Nous ne vendons, ne louons, ni ne partageons vos données personnelles 
        avec des tiers à des fins commerciales. Jamais.
      </p>
    </div>
  </div>
</div>
```

#### 3. Stockage et Sécurité
```tsx
<div>
  <h2 
    className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
  >
    <span className="text-[#10b981]">3.</span> Stockage et Sécurité
  </h2>

  <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-3">
    <p>
      <strong>Hébergement :</strong> Vos données sont hébergées sur des serveurs 
      sécurisés en Europe (conformité RGPD).
    </p>

    <p>
      <strong>Durée de conservation :</strong>
    </p>
    <ul className="space-y-2 ml-6">
      <li className="flex items-start gap-2">
        <Clock className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
        <span>Données prospects : 3 ans maximum après dernier contact</span>
      </li>
      <li className="flex items-start gap-2">
        <Clock className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
        <span>Données clients : Durée du contrat + 5 ans (obligations comptables)</span>
      </li>
    </ul>

    <p>
      <strong>Sécurité :</strong> Nous mettons en œuvre des mesures techniques et 
      organisationnelles pour protéger vos données contre toute perte, 
      altération ou accès non autorisé.
    </p>
  </div>
</div>
```

#### 4. Droits des Utilisateurs (RGPD)
```tsx
<div>
  <h2 
    className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
  >
    <span className="text-[#10b981]">4.</span> Vos Droits (RGPD)
  </h2>

  <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-3">
    <p>Conformément au RGPD, vous disposez des droits suivants :</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {/* Droit d'accès */}
      <div className="p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB]">
        <div className="flex items-center gap-2 mb-2">
          <Eye className="w-5 h-5 text-[#10b981]" strokeWidth={1.5} />
          <strong className="text-[#1A1A1A]">Droit d'accès</strong>
        </div>
        <p className="text-sm text-gray-700">
          Obtenir une copie de vos données personnelles
        </p>
      </div>

      {/* Droit de rectification */}
      <div className="p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB]">
        <div className="flex items-center gap-2 mb-2">
          <Edit className="w-5 h-5 text-[#10b981]" strokeWidth={1.5} />
          <strong className="text-[#1A1A1A]">Droit de rectification</strong>
        </div>
        <p className="text-sm text-gray-700">
          Corriger des données inexactes ou incomplètes
        </p>
      </div>

      {/* Droit à l'effacement */}
      <div className="p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB]">
        <div className="flex items-center gap-2 mb-2">
          <Trash2 className="w-5 h-5 text-[#10b981]" strokeWidth={1.5} />
          <strong className="text-[#1A1A1A]">Droit à l'effacement</strong>
        </div>
        <p className="text-sm text-gray-700">
          Supprimer vos données personnelles
        </p>
      </div>

      {/* Droit d'opposition */}
      <div className="p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB]">
        <div className="flex items-center gap-2 mb-2">
          <Ban className="w-5 h-5 text-[#10b981]" strokeWidth={1.5} />
          <strong className="text-[#1A1A1A]">Droit d'opposition</strong>
        </div>
        <p className="text-sm text-gray-700">
          Refuser le traitement de vos données
        </p>
      </div>
    </div>

    <p className="mt-4">
      Pour exercer ces droits, contactez-nous à{' '}
      <a 
        href="mailto:contact@confluence-digitale.fr"
        className="text-[#10b981] hover:text-[#059669] underline"
      >
        contact@confluence-digitale.fr
      </a>{' '}
      avec la mention "Exercice de mes droits RGPD".
    </p>
  </div>
</div>
```

#### 5. Cookies
```tsx
<div>
  <h2 
    className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
  >
    <span className="text-[#10b981]">5.</span> Cookies
  </h2>

  <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-3">
    <p>
      Ce site utilise uniquement des <strong>cookies strictement nécessaires</strong> 
      au fonctionnement du site (ex: session, préférences de navigation).
    </p>

    <p>
      <strong className="text-[#10b981]">Nous n'utilisons PAS :</strong>
    </p>
    <ul className="space-y-2 ml-6">
      <li className="flex items-start gap-2">
        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span>Cookies de tracking publicitaire (Google Ads, Facebook Pixel...)</span>
      </li>
      <li className="flex items-start gap-2">
        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span>Cookies de profilage comportemental</span>
      </li>
      <li className="flex items-start gap-2">
        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span>Cookies tiers sans votre consentement</span>
      </li>
    </ul>

    <p>
      Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.
    </p>
  </div>
</div>
```

#### 6. Contact DPO (Délégué à la Protection des Données)
```tsx
<div>
  <h2 
    className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
  >
    <span className="text-[#10b981]">6.</span> Contact
  </h2>

  <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-3">
    <p>
      Pour toute question relative à la protection de vos données personnelles, 
      vous pouvez nous contacter :
    </p>

    <div className="p-6 md:p-8 rounded-xl bg-[#10b981]/5 border border-[#10b981]/20">
      <div className="space-y-2">
        <p>
          <strong className="text-[#1A1A1A]">Email :</strong>{' '}
          <a 
            href="mailto:contact@confluence-digitale.fr"
            className="text-[#10b981] hover:text-[#059669] underline"
          >
            contact@confluence-digitale.fr
          </a>
        </p>
        <p>
          <strong className="text-[#1A1A1A]">Objet :</strong> "Protection des données personnelles - RGPD"
        </p>
      </div>
    </div>

    <p className="text-sm text-gray-600 mt-4">
      Si vous estimez que vos droits ne sont pas respectés, vous pouvez également 
      déposer une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : 
      <a 
        href="https://www.cnil.fr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#10b981] hover:text-[#059669] underline ml-1"
      >
        www.cnil.fr
      </a>
    </p>
  </div>
</div>
```

---

## 4. ÉLÉMENTS UNIQUES

### 4.1. Numérotation verte
- Chaque section numérotée avec couleur Vert (#10b981)
- Cohérence visuelle avec le thème "Protection/Sécurité"

### 4.2. Blocs accentués
- **Engagement "Pas de revente"** : Bordure gauche verte
- **Droits RGPD** : Grille 2x2 avec icônes
- **Contact DPO** : Background vert clair

### 4.3. Listes avec icônes
- **Données collectées** : CheckCircle2 (vert) + X (rouge)
- **Utilisation** : ArrowRight (vert)
- **Stockage** : Clock (vert)

---

## 5. COPYWRITING SPÉCIFIQUE

### 5.1. Hero
- **Badge** : "Conformité RGPD"
- **Titre** : "Politique de **Confidentialité**" (vert)
- **Sous-titre** : "Nous prenons la protection de vos données très au sérieux"

### 5.2. Engagement clé
- "⚠️ **Engagement** : Nous ne vendons, ne louons, ni ne partageons vos données. **Jamais.**"

### 5.3. Tone
- **Rassurant** : "Conformité RGPD", "Serveurs sécurisés en Europe"
- **Transparent** : Liste exhaustive des données collectées
- **Anti-bullshit** : "Nous n'utilisons PAS..." avec liste explicite

---

## 6. DIFFÉRENCES vs AUTRES PAGES LÉGALES

| Élément | Politique Confidentialité | Mentions Légales | CGV |
|---------|--------------------------|------------------|-----|
| **Badge color** | Vert (#10b981) | Gris neutre | Rouge Bordeaux |
| **Focus** | Données personnelles | Infos société | Conditions contractuelles |
| **Numérotation** | Verte | Pas de numérotation | Or/Cuivre |
| **Icônes** | ✅ Oui (Eye, Edit, Trash2...) | ❌ Non | ❌ Non |
| **Grille 2x2** | ✅ Oui (Droits RGPD) | ❌ Non | ❌ Non |

---

## 7. CONFORMITÉ RGPD

### Éléments obligatoires
✅ **Identité du responsable de traitement**  
✅ **Finalités du traitement**  
✅ **Base légale du traitement**  
✅ **Durée de conservation**  
✅ **Droits des personnes (accès, rectification, effacement, opposition...)**  
✅ **Contact DPO ou responsable**  
✅ **Transferts de données hors UE** (si applicable)  
✅ **Mention cookies**  

---

## 8. FICHIERS LIÉS

### Composants
- `/components/ConfluenceHeaderV6_7.tsx`
- `/components/ConfluenceFooterV6_2.tsx`

### Pages connexes
- `/pages/ConfluenceMentionsLegalesPage.tsx` (lien réciproque)
- `/pages/ConfluenceAuditGratuitPage.tsx` (consentement RGPD)
- Footer (lien Politique Confidentialité)

---

**FIN DU DOCUMENT**
