# 🔧 CONFIGURATION VS CODE - BACKEND STRAPI

**Projet** : Confluence Digitale V6.7.2 - Backend  
**IDE** : Visual Studio Code  
**Agent IA** : Gemini Code Assist

---

## 🎯 FICHIERS DE CONFIGURATION

Ce dossier `.vscode/` contient la configuration optimale pour développer le backend Strapi avec Gemini Code Assist.

### Fichiers Présents

| Fichier | Description | Auto-chargé |
|---------|-------------|-------------|
| **gemini-instructions.md** | Instructions complètes pour Gemini Code Assist | ✅ Oui |
| **settings.json** | Configuration VS Code (format, ESLint, Prettier) | ✅ Oui |
| **extensions.json** | Extensions recommandées | ⚠️ Suggestion |
| **README.md** | Ce fichier (guide configuration) | ❌ Non |

---

## 🚀 INSTALLATION

### Étape 1 : Installer VS Code

**Télécharger** : [code.visualstudio.com](https://code.visualstudio.com/)

**Versions supportées** : 1.85+

---

### Étape 2 : Installer Gemini Code Assist

**Méthode 1 : Via Marketplace**
1. Ouvrir VS Code
2. Extensions (⇧⌘X / Ctrl+Shift+X)
3. Chercher "Gemini Code Assist"
4. Installer (by Google)

**Méthode 2 : Via CLI**
```bash
code --install-extension google.gemini-code-assist
```

---

### Étape 3 : Authentifier Gemini

1. **Ouvrir Command Palette** (⇧⌘P / Ctrl+Shift+P)
2. **Taper** : `Gemini: Sign In`
3. **Se connecter** avec compte Google (même que Gemini App)
4. **Autoriser** l'accès

---

### Étape 4 : Installer Extensions Recommandées

**Automatique** (recommandé) :
1. Ouvrir projet backend dans VS Code
2. Notification apparaît : "Install recommended extensions?"
3. Cliquer **Install All**

**Manuel** :
```bash
# ESLint
code --install-extension dbaeumer.vscode-eslint

# Prettier
code --install-extension esbenp.prettier-vscode

# PostgreSQL Client
code --install-extension cweijan.vscode-postgresql-client2

# Thunder Client (API testing)
code --install-extension rangav.vscode-thunder-client

# GitLens
code --install-extension eamodio.gitlens

# Path Intellisense
code --install-extension christian-kohler.path-intellisense

# Error Lens
code --install-extension usernamehw.errorlens

# TODO Tree
code --install-extension gruntfuggly.todo-tree

# DotEnv
code --install-extension mikestead.dotenv
```

---

## ⚙️ CONFIGURATION

### Gemini Code Assist

**Fichier d'instructions** : `.vscode/gemini-instructions.md`

Ce fichier est **automatiquement chargé** par Gemini Code Assist quand vous ouvrez le projet.

**Contient** :
- Identité agent (Expert Backend Strapi)
- Documentation prioritaire
- Règles backend absolues (sécurité, DB, API)
- Templates code (Content Types, Controllers)
- Workflow développement
- Erreurs courantes + solutions

**Modifier** :
Si besoin d'ajuster les instructions :
1. Éditer `.vscode/gemini-instructions.md`
2. Sauvegarder
3. Recharger VS Code (⇧⌘P → "Reload Window")

---

### ESLint

**Configuration** : `.eslintrc.js` (racine projet backend)

**Exemple** :
```javascript
module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off', // Strapi utilise console
    'node/no-unpublished-require': 'off',
  },
};
```

**Auto-fix** : Activé dans `settings.json` (save → fix automatique)

---

### Prettier

**Configuration** : `.prettierrc` (racine projet backend)

**Exemple** :
```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2
}
```

**Format automatique** : Activé dans `settings.json` (save → format)

---

## 🎮 UTILISATION GEMINI CODE ASSIST

### Méthode 1 : Chat Inline

1. **Sélectionner code** (optionnel)
2. **⌘I** (Mac) ou **Ctrl+I** (Windows/Linux)
3. **Taper prompt** :
   ```
   Crée le Content Type "Service" avec name, slug, description, price
   ```
4. **Enter** → Gemini génère le code
5. **Accept** ou **Modify**

---

### Méthode 2 : Chat Panel

1. **Ouvrir Gemini Chat** : Icône 💬 (barre latérale)
2. **Taper prompt** :
   ```
   Configure PostgreSQL production dans database.js avec SSL
   ```
3. **Gemini répond** avec code + explication
4. **Copy to Editor** → Coller dans fichier

---

### Méthode 3 : Autocomplétion

1. **Commencer à taper** code
2. **Gemini suggère** automatiquement
3. **Tab** pour accepter suggestion

**Exemple** :
```javascript
// Taper : "module.exports"
// Gemini suggère structure complète controller
```

---

## 📊 WORKFLOW QUOTIDIEN

### Workflow Standard

```
1. OUVRIR PROJET
   → VS Code charge automatiquement .vscode/gemini-instructions.md

2. CRÉER CONTENT TYPE
   → Gemini Chat : "Crée Content Type Article avec..."
   → Copier schema.json généré
   → Coller dans /src/api/article/content-types/article/schema.json

3. TESTER API
   → Thunder Client (extension)
   → GET http://localhost:1337/api/articles?populate=*

4. COMMIT
   → GitLens pour voir changements
   → Commit avec message descriptif
```

---

### Exemple Complet

**Prompt dans Gemini Chat** :
```
Crée le Content Type "Service" pour Confluence Digitale avec :
- name (string, requis)
- slug (uid auto depuis name)
- description (richtext, requis)
- icon (string, nom icône Lucide)
- features (repeatable component)
- price (decimal)
- priceUnit (string)

Active permissions publiques find et findOne.
```

**Gemini génère** :
1. Schema JSON complet
2. Component features
3. Configuration permissions
4. Exemple requête API

**Tu copies** → Colles dans fichiers Strapi → Testes API ✅

---

## 🐛 TROUBLESHOOTING

### Gemini ne charge pas les instructions

**Cause** : Fichier `gemini-instructions.md` non détecté

**Solution** :
1. Vérifier fichier existe : `.vscode/gemini-instructions.md`
2. Vérifier `settings.json` contient :
   ```json
   "gemini.instructionsFile": ".vscode/gemini-instructions.md"
   ```
3. Recharger VS Code : ⇧⌘P → "Reload Window"

---

### ESLint ne fonctionne pas

**Cause** : Extension non installée ou config manquante

**Solution** :
1. Installer extension ESLint
2. Créer `.eslintrc.js` à la racine backend
3. Installer dépendances : `npm install eslint --save-dev`

---

### Prettier ne formate pas

**Cause** : Prettier non défini comme formatter par défaut

**Solution** :
1. Vérifier `settings.json` :
   ```json
   "editor.defaultFormatter": "esbenp.prettier-vscode"
   ```
2. Ou manuellement : ⇧⌥F (Mac) / Shift+Alt+F (Windows)

---

## 🔗 EXTENSIONS DÉTAILLÉES

### Essentielles

| Extension | Utilité | Priorité |
|-----------|---------|----------|
| **Gemini Code Assist** | Agent IA backend | ⭐⭐⭐⭐⭐ |
| **ESLint** | Linter JavaScript | ⭐⭐⭐⭐⭐ |
| **Prettier** | Formatter code | ⭐⭐⭐⭐⭐ |

### Recommandées

| Extension | Utilité | Priorité |
|-----------|---------|----------|
| **PostgreSQL Client** | Manager DB visuel | ⭐⭐⭐⭐ |
| **Thunder Client** | Tester API (comme Postman) | ⭐⭐⭐⭐ |
| **GitLens** | Historique Git avancé | ⭐⭐⭐⭐ |

### Utiles

| Extension | Utilité | Priorité |
|-----------|---------|----------|
| **Path Intellisense** | Autocomplétion chemins | ⭐⭐⭐ |
| **Error Lens** | Erreurs inline colorées | ⭐⭐⭐ |
| **TODO Tree** | Gérer TODOs | ⭐⭐⭐ |
| **DotEnv** | Syntax highlighting .env | ⭐⭐⭐ |

---

## ✅ CHECKLIST CONFIGURATION

### Première Ouverture Projet

- [ ] VS Code installé (1.85+)
- [ ] Gemini Code Assist installé
- [ ] Authentifié avec compte Google
- [ ] Extensions recommandées installées
- [ ] `.vscode/gemini-instructions.md` présent
- [ ] `settings.json` chargé
- [ ] Test Gemini Chat fonctionne

### Tests

- [ ] Gemini Chat répond (⌘I → prompt test)
- [ ] ESLint détecte erreurs
- [ ] Prettier formate au save
- [ ] Thunder Client peut tester API
- [ ] PostgreSQL Client connecte à DB (si config)

---

## 📚 RESSOURCES

### Documentation

- **Gemini Code Assist** : [Google Cloud Docs](https://cloud.google.com/products/gemini/code-assist)
- **VS Code** : [code.visualstudio.com/docs](https://code.visualstudio.com/docs)
- **ESLint** : [eslint.org](https://eslint.org/)
- **Prettier** : [prettier.io](https://prettier.io/)

### Support

- **Gemini** : Google Cloud Support
- **VS Code** : [GitHub Issues](https://github.com/microsoft/vscode/issues)
- **Strapi Discord** : [discord.strapi.io](https://discord.strapi.io/)

---

**🔧 Configuration VS Code Backend Complète ! Prêt pour développement Strapi avec Gemini ! 💪**

---

**Projet** : Confluence Digitale V6.7.2  
**Date** : Novembre 2025  
**Version** : 1.0
