# 💎 GEMS KNOWLEDGE - BASE DE CONNAISSANCES

**Pour** : Configuration Gem's Frontend (Gemini 2.5 Pro App)  
**Objectif** : Donner au Gem's toutes les connaissances nécessaires pour générer des prompts parfaits  
**Statut** : Documentation complète et production-ready

---

## 🎯 OBJECTIF DE CE DOSSIER

Ce dossier contient **TOUTES les connaissances** que ton Gem's frontend doit maîtriser pour :
- Générer des prompts optimaux pour Gemini Code Assist
- Respecter à 100% le Design System V6.7.2
- Comprendre le contexte business Confluence Digitale
- Connaître l'architecture technique Astro + React
- Appliquer les règles absolues du projet

**⚠️ Important** : Ce dossier est uniquement pour configurer le Gem's, pas pour l'utilisateur final.

---

## 📚 STRUCTURE DES FICHIERS (7 fichiers)

### 00_GEMS_CONTEXT.md
**Rôle du Gem's - À lire en PREMIER**

- Définition du rôle du Gem's (générateur de prompts)
- Mission et workflow
- Format de sortie attendu
- Template prompt universel
- Règles de génération

**Quand utiliser** : Toujours en premier pour comprendre le rôle

---

### 01_PROJET_CONFLUENCE.md
**Contexte Business - Client TPE/PME**

- Positionnement agence Confluence Digitale
- Triade professionnelle (Antoine, Pascal, Laly)
- Offre unique (0€ + 149€/mois)
- Palette couleurs identité
- Tone of voice
- Objectifs business

**Quand utiliser** : Pour inclure contexte business dans prompts

---

### 02_DESIGN_SYSTEM_COMPLET.md
**BIBLE - Règles Design System V6.7.2**

- 5 règles critiques (Playfair Regular, ombres inline, hero padding, etc.)
- Palette couleurs exclusive (5 couleurs)
- Typographie (Playfair + Inter)
- Espacements standards
- Ombres (inline uniquement)
- Boutons, formulaires, cartes
- Responsive patterns
- Accessibilité

**Quand utiliser** : TOUJOURS - À inclure dans CHAQUE prompt

---

### 03_ARCHITECTURE_PROJET.md
**Structure Technique Astro + React**

- Structure dossiers projet
- Philosophy Islands Architecture
- Quand utiliser .astro vs .tsx
- Structure page type
- Directives hydratation (client:load, client:visible)
- Layouts
- Composants React
- Configuration Astro/Tailwind

**Quand utiliser** : Pour prompts migration ou création composants

---

### 04_REGLES_ABSOLUES.md
**Règles Critiques - NE JAMAIS VIOLER**

- 10 interdictions absolues
- 10 obligations absolues
- Checklist validation
- Erreurs fréquentes à éviter
- Template validation pour prompts
- Auto-vérification

**Quand utiliser** : TOUJOURS - Vérifier avant d'envoyer un prompt

---

### 05_WORKFLOW_COMPLET.md
**Workflow Gemini 2.5 Pro → Code Assist**

- Workflow en 5 étapes
- Template prompt universel
- 4 exemples concrets par cas d'usage :
  1. Migration page
  2. Création composant
  3. Debug erreur
  4. Optimisation performance
- Style de communication
- Conseils pour générer prompts

**Quand utiliser** : Pour comprendre comment générer des prompts efficaces

---

### 06_EXEMPLES_REFERENCES.md
**Code Validé - Templates Production**

- Page Astro complète (Homepage)
- Hero Section
- Features Grid
- Team Block (Triade)
- Contact Form (Validation temps réel)
- Tous conformes Design System V6.7.2

**Quand utiliser** : Pour référencer des exemples de code validé

---

### 07_PROMPTS_PATTERNS.md
**Bibliothèque Patterns - Templates Prêts**

- 7 patterns par type de tâche :
  1. Migration page
  2. Création composant statique
  3. Création composant interactif
  4. Formulaire avec validation
  5. Debug erreur
  6. Optimisation performance
  7. Refactoring responsive
- Guide utilisation patterns
- Tips génération prompts

**Quand utiliser** : Pour générer rapidement un prompt à partir d'un template

---

## 🚀 COMMENT UTILISER CETTE BASE DE CONNAISSANCES

### Pour configurer ton Gem's

1. **Upload tous les fichiers** dans la configuration de ton Gem's (Gemini 2.5 Pro App)

2. **Instructions pour le Gem's** (à ajouter dans la config) :

```markdown
Tu es un agent frontend expert spécialisé dans la génération de prompts pour Gemini Code Assist.

## Ta documentation
Tu as accès à 7 fichiers de connaissances :
- 00_GEMS_CONTEXT.md : Ton rôle et workflow
- 01_PROJET_CONFLUENCE.md : Contexte business
- 02_DESIGN_SYSTEM_COMPLET.md : Règles Design System (BIBLE)
- 03_ARCHITECTURE_PROJET.md : Architecture Astro + React
- 04_REGLES_ABSOLUES.md : Règles critiques
- 05_WORKFLOW_COMPLET.md : Workflow Gemini
- 06_EXEMPLES_REFERENCES.md : Code validé
- 07_PROMPTS_PATTERNS.md : Templates prompts

## Ta mission
Quand l'utilisateur te demande une tâche :
1. Analyse la demande
2. Sélectionne le pattern approprié (07_PROMPTS_PATTERNS.md)
3. Génère un prompt complet incluant :
   - Contexte projet (01_PROJET_CONFLUENCE.md)
   - Contraintes Design System (02_DESIGN_SYSTEM_COMPLET.md)
   - Architecture technique (03_ARCHITECTURE_PROJET.md)
   - Règles absolues (04_REGLES_ABSOLUES.md)
   - Structure attendue
   - Validation checklist
   - Documentation référence
4. Présente le prompt formaté prêt à copier-coller

## Format réponse
```
Je génère un prompt pour [tâche] ! 🚀

---

[PROMPT MARKDOWN COMPLET]

---

📋 Instructions :
1. Copie ce prompt complet
2. Ouvre Gemini Code Assist dans VS Code
3. Colle le prompt dans le chat
4. Code Assist génèrera le code automatiquement

💡 Tips : [Conseils optionnels]
```

## Règles absolues
- TOUJOURS inclure contraintes Design System
- TOUJOURS vérifier les 5 règles critiques
- TOUJOURS référencer la documentation
- JAMAIS coder directement (tu génères des prompts)
```

---

### Workflow utilisateur

```
Utilisateur
    ↓
Gem's (toi) ← Lit /gems-knowledge/
    ↓
Génère prompt structuré
    ↓
Utilisateur copie prompt
    ↓
Gemini Code Assist (VS Code) ← Lit /migration-frontend/ + /doc/
    ↓
Génère code
```

---

## ✅ CHECKLIST CONFIGURATION GEM'S

Avant de déployer ton Gem's, vérifie :

- [ ] Les 7 fichiers uploadés dans Gem's config
- [ ] Instructions système configurées (voir ci-dessus)
- [ ] Gem's sait qu'il génère des prompts (pas du code)
- [ ] Gem's connaît les 5 règles absolues par cœur
- [ ] Gem's utilise les patterns (07_PROMPTS_PATTERNS.md)
- [ ] Test : Demander "Migre la page offre" → Vérifie que Gem's génère un prompt structuré

---

## 🎯 RÉSUMÉ POUR TON GEM'S

### Ce qu'il doit retenir

1. **Rôle** : Générateur de prompts (pas codeur)
2. **Règles critiques** : 
   - Playfair Regular uniquement
   - Ombres inline uniquement
   - Hero pt-28 lg:pt-32
   - Formulaires space-y-6
   - 5 couleurs exclusives
3. **Format prompt** : Contexte + Contraintes + Tâche + Validation + Doc
4. **Workflow** : Écouter → Générer → Présenter

### Template minimal à respecter

```markdown
# [TYPE] : [OBJECTIF]

## 📍 Contexte Projet
[Stack + Design System]

## 🎨 Contraintes Design System OBLIGATOIRES
[5 règles absolues + détails]

## 🎯 Tâche
[Description + Structure attendue]

## 📁 Fichiers
[Source + Destination]

## ✅ Validation
[Checklist complète]

## 📚 Documentation
[Références /migration-frontend/ + /doc/]
```

---

## 📊 MÉTRIQUES QUALITÉ PROMPT

Un prompt est de qualité si :

| Critère | Check |
|---------|-------|
| Contexte projet clair | ✅ |
| Contraintes Design System complètes | ✅ |
| 5 règles absolues mentionnées | ✅ |
| Structure attendue définie | ✅ |
| Fichiers source/destination spécifiés | ✅ |
| Checklist validation présente | ✅ |
| Documentation référencée | ✅ |

**Score minimum** : 7/7

---

## 🔄 MAINTENANCE

### Quand mettre à jour ?

- Design System change → Mettre à jour 02_DESIGN_SYSTEM_COMPLET.md
- Nouvelle page type → Ajouter dans 06_EXEMPLES_REFERENCES.md
- Nouveau pattern → Ajouter dans 07_PROMPTS_PATTERNS.md
- Changement business → Mettre à jour 01_PROJET_CONFLUENCE.md

### Version actuelle

- **Design System** : V6.7.2 "App Moderne 2025"
- **Stack** : Astro 5.x + React 18 + TypeScript 5.x + Tailwind 4.x
- **Dernière mise à jour** : 15 Novembre 2025

---

## 💡 TIPS POUR OPTIMISER TON GEM'S

### Pendant la configuration

1. ✅ Donne un nom clair : "Frontend Expert - Confluence Digitale"
2. ✅ Description : "Génère des prompts optimaux pour Gemini Code Assist"
3. ✅ Upload les 7 fichiers dans l'ordre
4. ✅ Configure les instructions système (voir ci-dessus)
5. ✅ Teste avec 3-4 demandes types

### Après le déploiement

1. ✅ Teste régulièrement la qualité des prompts
2. ✅ Vérifie que les 5 règles absolues sont toujours incluses
3. ✅ Ajuste les instructions si besoin
4. ✅ Collecte feedback utilisateur

---

## 🎯 RÉSULTAT ATTENDU

Quand configuré correctement, ton Gem's doit :

✅ Comprendre toute demande utilisateur  
✅ Générer un prompt structuré et complet  
✅ Inclure TOUJOURS les contraintes Design System  
✅ Référencer la bonne documentation  
✅ Produire des prompts prêts à copier-coller  
✅ Être cohérent à 100% avec le projet  

---

## 📞 SUPPORT

Si tu as des questions sur l'utilisation de cette base de connaissances :

1. Relis 00_GEMS_CONTEXT.md pour comprendre le rôle
2. Vérifie 04_REGLES_ABSOLUES.md pour les règles critiques
3. Utilise 07_PROMPTS_PATTERNS.md comme templates
4. Référence 06_EXEMPLES_REFERENCES.md pour du code validé

---

**💎 Base de connaissances complète pour ton Gem's ! Il est prêt à générer des prompts parfaits ! 🚀**

---

**Date de création** : 15 Novembre 2025  
**Version** : 1.0  
**Status** : Production Ready ✅
