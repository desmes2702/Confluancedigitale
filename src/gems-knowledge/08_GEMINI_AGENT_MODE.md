# 🤖 MODE AGENT GEMINI CODE ASSIST - GUIDE COMPLET

**Version** : Preview  
**Date** : 15 novembre 2025  
**Projet** : Confluence Digitale  
**Source** : Documentation officielle Google Cloud

---

## 📚 TABLE DES MATIÈRES

1. [Vue d'ensemble](#vue-densemble)
2. [Configuration initiale](#configuration-initiale)
3. [Utiliser le mode Agent](#utiliser-le-mode-agent)
4. [Configuration des outils](#configuration-des-outils)
5. [Serveurs MCP](#serveurs-mcp)
6. [Fichiers de contexte](#fichiers-de-contexte)
7. [Commandes](#commandes)
8. [Mode YOLO](#mode-yolo)
9. [Prompts recommandés](#prompts-recommandés)
10. [Clé API (optionnel)](#clé-api-optionnel)

---

## 🎯 Vue d'ensemble

Le **mode Agent de Gemini Code Assist** est un assistant en programmation avancé qui permet de :

✅ Poser des questions sur votre code  
✅ Utiliser le contexte et les outils intégrés pour améliorer le contenu généré  
✅ Configurer les serveurs MCP pour étendre les capacités de l'agent  
✅ Obtenir des solutions à des tâches complexes avec plusieurs étapes  
✅ Générer du code à partir de documents de conception, de problèmes et de commentaires TODO  
✅ Contrôler le comportement de l'agent en commentant, modifiant et approuvant les plans

### ⚠️ Limites

- **Pas de récitation** : Gemini ne cite pas de sources en mode Agent
- **Actions irréversibles** : Il n'est pas possible d'annuler les modifications apportées aux ressources en dehors de votre IDE
- Certaines fonctionnalités du chat standard peuvent ne pas être disponibles

---

## 🚀 Configuration initiale

### VS Code

1. **Installer Gemini Code Assist**
   - Extension disponible dans le marketplace VS Code
   - Versions disponibles : Particuliers, Standard, Enterprise

2. **Activer le mode Agent**
   - Ouvrir le chat Gemini Code Assist (icône `spark` dans la barre d'activité)
   - Cliquer sur le bouton **Agent** pour passer en mode Agent
   - Le bouton est mis en surbrillance quand le mode est activé

3. **Arrêter l'agent**
   - Cliquer sur `stop` Arrêter
   - Ou créer un nouveau chat standard avec `addNouveau chat`

---

## 💬 Utiliser le mode Agent

### Bonnes pratiques pour les prompts

Pour exploiter au mieux le mode Agent, suivez ces principes :

#### ✅ Fournir un contexte détaillé

```markdown
❌ MAUVAIS :
"Crée une page de contact"

✅ BON :
"Crée une page de contact Astro avec React pour Confluence Digitale :
- Formulaire avec validation Zod
- Design System V6.7.2 (couleurs #F9FAFB, #D1A65E)
- Typographie Playfair Display/Inter
- Responsive mobile-first
- Integration avec Strapi backend"
```

#### ✅ Décomposer les tâches complexes

```markdown
❌ MAUVAIS :
"Fais tout le site"

✅ BON :
"Étape 1/3 : Crée la structure de base du composant Header Astro
Étape 2/3 : Ajoute le menu de navigation responsive
Étape 3/3 : Intègre les animations au scroll"
```

#### ✅ Référencer des fichiers existants

```markdown
✅ "Refactorise le composant ConfluenceHeaderV6_7.tsx pour utiliser
    les mêmes patterns que ConfluenceFooterV6_2.tsx"

✅ "Migre ConfluenceLandingPage.tsx vers Astro en suivant les 
    conventions de /migration-frontend/05_TEMPLATES.md"
```

---

## 🛠️ Configuration des outils

### Outils intégrés

Le mode Agent a accès aux outils suivants par défaut :

- 🔍 **Recherche** : grep, recherche de fichiers
- 📄 **Fichiers** : lecture, écriture, modification
- 💻 **Terminal** : exécution de commandes shell
- 🔗 **Git** : opérations Git de base

### Contrôler les outils intégrés

#### Fichier de configuration : `~/.gemini/settings.json`

```json
{
  // Autoriser uniquement certains outils
  "coreTools": ["ReadTool", "WriteTool", "SearchTool"],
  
  // Autoriser une commande spécifique
  "coreTools": ["ShellTool(ls -l)"],
  
  // Bloquer certains outils
  "excludeTools": ["ShellTool(rm -rf)", "ShellTool(sudo)"],
  
  // Bloquer un outil complètement
  "excludeTools": ["TerminalTool"]
}
```

### Liste des outils disponibles

Pour voir les outils disponibles dans votre session :

```bash
/tools
```

---

## 🌐 Serveurs MCP (Model Context Protocol)

### ⚠️ AVERTISSEMENT SÉCURITÉ

Les serveurs MCP peuvent exécuter du code arbitraire avec les autorisations de votre compte utilisateur. **Assurez-vous que la source des serveurs MCP que vous utilisez est fiable.**

### Configuration des serveurs MCP

#### Fichier : `~/.gemini/settings.json`

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_YOUR_TOKEN"
      }
    },
    "gitlab": {
      "command": "npx",
      "args": ["mcp-remote", "https://your-gitlab-instance.com/api/v4/mcp"]
    },
    "cloudflare-observability": {
      "command": "npx",
      "args": ["mcp-remote", "https://observability.mcp.cloudflare.com/sse"]
    },
    "cloudflare-bindings": {
      "command": "npx",
      "args": ["mcp-remote", "https://bindings.mcp.cloudflare.com/sse"]
    }
  }
}
```

### Authentification des serveurs MCP

#### Serveurs locaux (avec variable d'environnement)

```json
{
  "mcpServers": {
    "github-local": {
      "command": "/path/to/github-mcp-server",
      "args": ["stdio"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_YOUR_TOKEN"
      }
    }
  }
}
```

#### Serveurs distants (avec en-tête HTTP)

```json
{
  "mcpServers": {
    "github-remote": {
      "httpUrl": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "Authorization": "Bearer YOUR_ACCESS_TOKEN"
      }
    }
  }
}
```

### Lister les serveurs MCP configurés

```bash
/mcp
```

Cette commande affiche :
- Serveurs MCP configurés
- État de connexion
- Détails des serveurs
- Outils disponibles

### Appliquer les modifications

Après modification de `~/.gemini/settings.json` :

1. Ouvrir la palette de commandes (`Ctrl/Cmd+Shift+P`)
2. Sélectionner **Developer: Reload Window**

---

## 📝 Fichiers de contexte (GEMINI.md)

### Principe

Le contexte permet à l'agent de générer de meilleures réponses. Il peut provenir de :

- 📁 Fichiers de votre IDE
- 📂 Dossiers de votre système local
- 🛠️ Réponses d'outils
- 💬 Détails de votre prompt

### Emplacements des fichiers de contexte

| Champ d'application | Emplacement | Priorité |
|---------------------|-------------|----------|
| **Global (tous vos projets)** | `~/.gemini/GEMINI.md` | Basse |
| **Projet spécifique** | `~/mon-projet/GEMINI.md` | Moyenne |
| **Composant/module** | `~/mon-projet/components/GEMINI.md` | Haute |

### Système de priorité

Les fichiers plus spécifiques **remplacent ou complètent** les fichiers plus généraux.

```
~/.gemini/GEMINI.md                      (base)
  ↓ complété par
~/confluence-digitale/GEMINI.md          (projet)
  ↓ complété par
~/confluence-digitale/src/GEMINI.md      (source)
  ↓ complété par
~/confluence-digitale/src/components/GEMINI.md  (composants)
```

### Exemple de fichier de contexte pour Confluence Digitale

#### `~/confluence-digitale/GEMINI.md`

```markdown
# Contexte Projet : Confluence Digitale

## Stack technique
- Frontend : Astro + React .tsx + TypeScript + Tailwind CSS 4.x
- Backend : Strapi v4 + TypeScript
- Design System : V6.7.2 "APP MODERNE 2025"

## Règles absolues
1. **100% TypeScript** : Aucun fichier .js ou .jsx
2. **Composants Astro** : Fichiers .astro pour les pages
3. **Composants React** : Fichiers .tsx pour les composants interactifs
4. **Pas de classes Tailwind** pour font-size, font-weight, line-height (sauf demande explicite)

## Couleurs (palette obligatoire)
- Fond clair : #F9FAFB
- Texte principal : #1A1A1A
- Or premium : #D1A65E
- Rouge contractuel : #A32E3A
- Vert validation : #10b981

## Typographie
- Titres : Playfair Display
- Corps de texte : Inter

## Triade professionnelle (obligatoire sur pages clés)
- Antoine : Performance & Conversion
- Pascal : Stratégie (Zéro Jargon)
- Laly : Sérénité & Autonomie

## Documentation de référence
- Design System : /gems-knowledge/02_DESIGN_SYSTEM_COMPLET.md
- Migration Astro : /migration-frontend/02_GUIDE_TECHNIQUE.md
- Architecture : /gems-knowledge/03_ARCHITECTURE_PROJET.md
```

#### `~/confluence-digitale/src/components/GEMINI.md`

```markdown
# Contexte Composants : Confluence Digitale

## Conventions de nommage
- Préfixe `Confluence` pour tous les composants métier
- Suffixe `V6_7` ou version pour les composants Design System

## Structure type d'un composant React

\`\`\`tsx
import { motion } from 'motion/react';

interface ConfluenceMyComponentProps {
  title: string;
  description?: string;
}

export function ConfluenceMyComponent({ 
  title, 
  description 
}: ConfluenceMyComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="container mx-auto px-6"
    >
      <h2 className="text-gold-premium">{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}
\`\`\`

## Imports standards
\`\`\`tsx
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card } from './ui/card';
\`\`\`
```

---

## 💻 Commandes

### Commandes à barre oblique disponibles en mode Agent

```bash
# Lister les outils disponibles
/tools

# Lister les serveurs MCP et leur état
/mcp
```

### Commandes Gemini CLI

Certaines commandes Gemini CLI sont disponibles en mode Agent. Consultez la documentation Gemini CLI pour plus de détails.

---

## 🚀 Mode YOLO (Auto-approbation)

### ⚠️ AVERTISSEMENT

Le mode YOLO autorise automatiquement **toutes les actions de l'agent** sans demander de confirmation. L'agent a accès :

- 📁 Au système de fichiers de votre machine
- 💻 Aux actions de terminal
- 🛠️ À tous les outils configurés

**Faites preuve d'une extrême prudence !**

### Configuration du mode YOLO

#### 1. Ouvrir les paramètres utilisateur VS Code

- Palette de commandes : `Ctrl/Cmd+Shift+P`
- Sélectionner : **Preferences: Open User Settings (JSON)**

#### 2. Ajouter la configuration

```json
{
  // ... autres paramètres ...
  
  "geminicodeassist.agentYoloMode": true,
  
  // ... autres paramètres ...
}
```

#### 3. Recharger la fenêtre

- Palette de commandes : `Ctrl/Cmd+Shift+P`
- Sélectionner : **Developer: Reload Window**

### Restrictions

Le mode YOLO ne peut être utilisé que dans un **espace de travail de confiance**.

Si vous utilisez un espace de travail restreint, l'agent vous demandera confirmation avant d'effectuer des actions, quel que soit ce paramètre.

---

## 💡 Prompts recommandés

### Compréhension de code

```markdown
"À quoi sert ce dépôt ? Aide-moi à comprendre l'architecture."

"À quoi sert cette classe ConfluenceHeaderV6_7 ?"

"Explique-moi le flux de données entre le composant 
ConfluenceLandingPage et le backend Strapi."
```

### Ajout de fonctionnalités

```markdown
"Ajoute une fonctionnalité de recherche en temps réel 
à la page Études de cas en utilisant l'API Strapi."

"Implémente un système de filtres pour la page Blog 
avec les catégories définies dans Strapi."
```

### Refactoring

```markdown
"Refactorise les fonctions ConfluenceHeaderV6_7 et 
ConfluenceFooterV6_2 pour utiliser un composant commun 
ConfluenceNavigation."

"Migre tous les composants React .tsx vers Astro .astro 
en conservant l'interactivité uniquement là où nécessaire."
```

### Correction de bugs

```markdown
"Corrige le problème GitHub #42 : Le menu mobile ne se ferme 
pas quand on clique sur un lien."

"Le formulaire de contact ne valide pas correctement l'email. 
Utilise Zod pour la validation et affiche les erreurs."
```

### Création d'applications

```markdown
"Crée une application Astro + React pour Confluence Digitale 
avec une UI qui permet à l'utilisateur de générer un audit SEO 
en temps réel dans le navigateur."
```

### Migration de versions

```markdown
"Migre les versions de bibliothèque de ce dépôt de React 17 vers React 18."

"Mets à jour Tailwind CSS de v3 vers v4 en conservant 
toutes les personnalisations du Design System V6.7.2."
```

### Optimisation

```markdown
"Optimise les performances de ce code TypeScript 
pour qu'il s'exécute plus rapidement."

"Réduis la taille du bundle JavaScript de la page Landing 
en utilisant le lazy loading pour les composants lourds."
```

### Utilisation d'API

```markdown
"Utilise l'API Strapi pour développer un système de 
gestion des études de cas dynamiques."

"Implémente l'API Google Analytics pour tracker 
les conversions sur la page Audit Gratuit."
```

### Algorithmes

```markdown
"Implémente un algorithme pour calculer un score SEO 
basé sur les critères : vitesse, accessibilité, SEO technique."
```

---

## 🔑 Clé API (optionnel)

### Quotas et limitations

Gemini Code Assist inclut différents **quotas quotidiens** pour les fonctionnalités agentiques, selon votre niveau (Particuliers, Standard, Enterprise).

Si vous avez épuisé votre capacité quotidienne, vous pouvez continuer à utiliser le service en fournissant une **clé API**.

### Types de clés API supportées

- 🔹 **Clé API Gemini** (Google AI Studio)
- 🔹 **Clé API Vertex AI** (Google Cloud)

### Configuration de la clé API

#### 1. Obtenir une clé API

**Option A : Google AI Studio (Gemini)**
- Aller sur : https://aistudio.google.com/apikey
- Créer une nouvelle clé API

**Option B : Vertex AI (Google Cloud)**
- Aller sur : https://console.cloud.google.com/vertex-ai
- Créer un projet et activer l'API Vertex AI
- Générer une clé API

#### 2. Ajouter la clé dans VS Code

Ouvrir le fichier `settings.json` de VS Code et ajouter :

```json
{
  // ... autres paramètres ...
  
  "geminicodeassist.geminiApiKey": "YOUR_KEY",
  
  // ... autres paramètres ...
}
```

Remplacer `YOUR_KEY` par votre clé API.

#### 3. Recharger la fenêtre

- Palette de commandes : `Ctrl/Cmd+Shift+P`
- Sélectionner : **Developer: Reload Window**

---

## 📚 RESSOURCES

### Documentation officielle

- [Gemini Code Assist](https://cloud.google.com/gemini/docs/codeassist)
- [Gemini CLI](https://github.com/google/generative-ai-docs/tree/main/gemini-cli)
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)

### Exemples de serveurs MCP

- [GitHub MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/github)
- [GitLab MCP Server](https://gitlab.com/gitlab-org/editor-extensions/gitlab-lsp)
- [Cloudflare MCP Servers](https://developers.cloudflare.com/mcp/)

### Communauté

- [Serveurs MCP sur GitHub](https://github.com/topics/mcp-server)
- [Documentation MCP](https://modelcontextprotocol.io/docs)

---

## 🎯 CHECKLIST CONFIGURATION

### Configuration de base

- [ ] Extension Gemini Code Assist installée dans VS Code
- [ ] Mode Agent activé (bouton Agent en surbrillance)
- [ ] Fichier `~/.gemini/settings.json` créé

### Configuration des outils

- [ ] Outils intégrés configurés (`coreTools`, `excludeTools`)
- [ ] Commande `/tools` testée

### Configuration MCP (optionnel)

- [ ] Serveurs MCP configurés dans `settings.json`
- [ ] Authentification MCP configurée (jetons d'accès)
- [ ] Commande `/mcp` testée
- [ ] Fenêtre VS Code rechargée après configuration

### Configuration du contexte

- [ ] Fichier `~/.gemini/GEMINI.md` créé (contexte global)
- [ ] Fichier `~/confluence-digitale/GEMINI.md` créé (contexte projet)
- [ ] Fichier `~/confluence-digitale/src/components/GEMINI.md` créé (contexte composants)

### Configuration avancée (optionnel)

- [ ] Mode YOLO configuré (si nécessaire)
- [ ] Clé API Gemini/Vertex AI ajoutée (si quotas dépassés)

---

## ⚠️ NOTES IMPORTANTES POUR CONFLUENCE DIGITALE

### 1. Ne pas utiliser le mode YOLO en production

Le mode YOLO est **trop risqué** pour un projet en production. Privilégier la **validation manuelle** des actions de l'agent.

### 2. Utiliser les fichiers de contexte

Les fichiers `GEMINI.md` sont **essentiels** pour maintenir la cohérence du Design System V6.7.2 et des règles TypeScript.

### 3. Configurer les serveurs MCP avec précaution

Ne configurer que les serveurs MCP dont vous avez **réellement besoin** et dont la source est **fiable**.

### 4. Limiter les outils intégrés

Pour éviter les erreurs, **bloquer les commandes dangereuses** :

```json
{
  "excludeTools": [
    "ShellTool(rm -rf)",
    "ShellTool(sudo)",
    "ShellTool(npm uninstall)",
    "ShellTool(git push --force)"
  ]
}
```

---

## 📞 SUPPORT ET FEEDBACK

Pour envoyer des commentaires sur le mode Agent :

1. Ouvrir le chat Gemini Code Assist
2. Cliquer sur le menu `...`
3. Sélectionner **Send Feedback**

---

**💡 CONSEIL FINAL** : Commencez avec une configuration minimale (fichiers de contexte uniquement), puis ajoutez progressivement les serveurs MCP et les outils avancés selon vos besoins.

**🚀 Le mode Agent est un outil puissant, utilisez-le avec intelligence !**
