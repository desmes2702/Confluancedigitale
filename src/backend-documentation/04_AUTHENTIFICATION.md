# 🔐 AUTHENTIFICATION & PERMISSIONS

**Projet** : Confluence Digitale V6.7.2 - Backend  
**Système** : JWT (JSON Web Tokens)  
**Plugin** : Users & Permissions (intégré Strapi)

---

## 🎯 VUE D'ENSEMBLE

### Types d'Authentification

| Type | Usage | Token | Permissions |
|------|-------|-------|-------------|
| **Public** | Frontend visiteurs | Aucun ou Read-Only | find, findOne (seulement) |
| **Authenticated** | Utilisateurs connectés | JWT User | Selon rôle |
| **Admin** | Strapi Admin Panel | JWT Admin | Toutes |
| **API Token** | Intégrations externes | API Token | Configurables |

---

## 🔑 API TOKENS (Recommandé Frontend)

### Créer API Token

**Étapes** :
1. Strapi Admin Panel → **Settings**
2. **API Tokens** (section Global settings)
3. **Create new API Token**
4. Remplir formulaire :
   - **Name** : `Frontend Read-Only`
   - **Description** : `Token pour frontend Astro (lecture seule)`
   - **Token type** : **Read-only** (recommandé pour frontend)
   - **Token duration** : **Unlimited** (ou date expiration)
5. **Save** → Copier token (affiché **une seule fois** !)

**Token généré** :
```
abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
```

---

### Types de Tokens

| Type | Permissions | Usage |
|------|-------------|-------|
| **Read-only** | GET uniquement | ✅ Frontend public |
| **Full access** | GET, POST, PUT, DELETE | ⚠️ Admin/backend uniquement |
| **Custom** | Permissions spécifiques | Avancé |

**⚠️ IMPORTANT** : **JAMAIS** exposer token Full Access côté client !

---

### Utiliser API Token

**Frontend (.env)** :
```bash
PUBLIC_STRAPI_URL=https://api.confluence-digitale.fr
PUBLIC_STRAPI_TOKEN=abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
```

**Requête avec Token** :
```javascript
const response = await fetch(
  `${import.meta.env.PUBLIC_STRAPI_URL}/api/articles`,
  {
    headers: {
      Authorization: `Bearer ${import.meta.env.PUBLIC_STRAPI_TOKEN}`,
    },
  }
);
```

---

## 👥 RÔLES & PERMISSIONS

### Rôles par Défaut

**Strapi inclut 3 rôles** :

| Rôle | Description | Utilisateurs |
|------|-------------|--------------|
| **Public** | Visiteurs non connectés | Tous |
| **Authenticated** | Utilisateurs connectés | Après login |
| **Admin** | Administrateurs Strapi | Team interne |

---

### Configurer Permissions Public

**Pour chaque Content Type** (Pages, Articles, Services, etc.) :

**Étapes** :
1. Strapi Admin → **Settings**
2. **Roles** (section Users & Permissions plugin)
3. Cliquer sur **Public**
4. Descendre jusqu'au Content Type (ex: **Article**)
5. Cocher permissions :
   - ✅ **find** (liste articles)
   - ✅ **findOne** (article par ID/slug)
   - ❌ **create** (NON public)
   - ❌ **update** (NON public)
   - ❌ **delete** (NON public)
6. **Save**

---

### Permissions Recommandées

#### Content Types Lecture Publique

**Pages, Articles, Services, Testimonials, Team Members, FAQs** :

| Permission | Public | Authenticated | Admin |
|------------|--------|---------------|-------|
| **find** | ✅ | ✅ | ✅ |
| **findOne** | ✅ | ✅ | ✅ |
| **create** | ❌ | ❌ | ✅ |
| **update** | ❌ | ❌ | ✅ |
| **delete** | ❌ | ❌ | ✅ |

---

#### Contact (Formulaire)

**Permissions spéciales** :

| Permission | Public | Authenticated | Admin |
|------------|--------|---------------|-------|
| **find** | ❌ | ❌ | ✅ |
| **findOne** | ❌ | ❌ | ✅ |
| **create** | ✅ | ✅ | ✅ |
| **update** | ❌ | ❌ | ✅ |
| **delete** | ❌ | ❌ | ✅ |

**Raison** : Public peut **créer** message, mais pas voir messages des autres (sécurité).

---

### Conditions Avancées

**Filtrer données selon statut** :

**Exemple : Seulement articles publiés pour Public** :

1. Settings → Roles → **Public** → **Article** → **find**
2. Activer **Enable filters**
3. Ajouter condition :
   ```json
   {
     "publishedAt": {
       "$notNull": true
     }
   }
   ```
4. Save

**Résultat** : Rôle Public ne peut voir que articles avec `publishedAt` non null (publiés).

---

## 🔒 JWT AUTHENTICATION (Utilisateurs)

### Système Users & Permissions

**Strapi inclut** :
- Table `users` (utilisateurs)
- Endpoints `/api/auth/*`
- JWT tokens automatiques

**Usage** : Si vous voulez que des utilisateurs créent compte et se connectent (ex: espace membre, blog contributif).

---

### Enregistrement Utilisateur

**Endpoint** :
```
POST /api/auth/local/register
```

**Body** :
```json
{
  "username": "jean_dupont",
  "email": "jean.dupont@example.com",
  "password": "MotDePasse123!"
}
```

**Réponse** :
```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 5,
    "username": "jean_dupont",
    "email": "jean.dupont@example.com",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "createdAt": "2025-11-15T10:00:00.000Z",
    "updatedAt": "2025-11-15T10:00:00.000Z"
  }
}
```

**Exemple curl** :
```bash
curl -X POST "https://api.confluence-digitale.fr/api/auth/local/register" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "jean_dupont",
    "email": "jean.dupont@example.com",
    "password": "MotDePasse123!"
  }'
```

---

### Connexion Utilisateur

**Endpoint** :
```
POST /api/auth/local
```

**Body** :
```json
{
  "identifier": "jean.dupont@example.com",
  "password": "MotDePasse123!"
}
```

**Réponse** :
```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 5,
    "username": "jean_dupont",
    "email": "jean.dupont@example.com"
  }
}
```

---

### Utiliser JWT Token

**Requête authentifiée** :
```javascript
const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

const response = await fetch(
  'https://api.confluence-digitale.fr/api/users/me',
  {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  }
);

const user = await response.json();
// { id: 5, username: 'jean_dupont', email: '...' }
```

---

### Obtenir Profil Utilisateur

**Endpoint** :
```
GET /api/users/me
```

**Headers** :
```
Authorization: Bearer {JWT_TOKEN}
```

**Réponse** :
```json
{
  "id": 5,
  "username": "jean_dupont",
  "email": "jean.dupont@example.com",
  "provider": "local",
  "confirmed": true,
  "blocked": false,
  "createdAt": "2025-11-15T10:00:00.000Z",
  "updatedAt": "2025-11-15T10:00:00.000Z",
  "role": {
    "id": 1,
    "name": "Authenticated",
    "description": "Default role given to authenticated user.",
    "type": "authenticated"
  }
}
```

---

### Mot de Passe Oublié

**Étape 1 : Demander reset** :
```
POST /api/auth/forgot-password
```

**Body** :
```json
{
  "email": "jean.dupont@example.com"
}
```

**Réponse** :
```json
{
  "ok": true
}
```

**Email envoyé** avec lien reset + code.

---

**Étape 2 : Reset password** :
```
POST /api/auth/reset-password
```

**Body** :
```json
{
  "code": "code_reçu_par_email",
  "password": "NouveauMotDePasse123!",
  "passwordConfirmation": "NouveauMotDePasse123!"
}
```

**Réponse** :
```json
{
  "jwt": "nouveau_token...",
  "user": { ... }
}
```

---

## 🛡️ SÉCURITÉ

### Règles Critiques

1. ✅ **JAMAIS exposer Admin JWT côté client**
   - Admin JWT : Strapi Admin Panel uniquement
   - Frontend : API Token Read-Only

2. ✅ **API Tokens séparés**
   - Frontend : Read-Only Token
   - Backend/Scripts : Full Access Token (si nécessaire)

3. ✅ **CORS strict en production**
   ```javascript
   // config/middlewares.js
   origin: [
     'https://confluence-digitale.fr',
     'https://www.confluence-digitale.fr'
   ]
   ```

4. ✅ **Rate Limiting**
   - Activer rate limiting (plugin `@strapi/plugin-rate-limit`)
   - Limiter requêtes API (ex: 100 req/min par IP)

5. ✅ **HTTPS obligatoire en production**
   - HTTP → HTTPS redirect
   - Tokens transmis uniquement sur HTTPS

---

### Variables Environnement Sécurisées

**Ne JAMAIS commit** :
```bash
# .env (GIT IGNORE)
JWT_SECRET=xxx_secret_xxx
ADMIN_JWT_SECRET=yyy_admin_yyy
API_TOKEN_SALT=zzz_salt_zzz
```

**Commit** `.env.example` avec placeholders :
```bash
# .env.example (GIT OK)
JWT_SECRET=your_jwt_secret_here
ADMIN_JWT_SECRET=your_admin_jwt_secret_here
API_TOKEN_SALT=your_api_token_salt_here
```

---

### Validation Données

**Toujours valider inputs** (custom controllers) :

```javascript
// src/api/contact/controllers/contact.js
module.exports = {
  async create(ctx) {
    const { email, phone } = ctx.request.body.data;

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return ctx.badRequest('Email invalide');
    }

    // Validation téléphone français
    const phoneRegex = /^(?:(?:\+|00)33|0)[1-9](?:[0-9]{8})$/;
    if (phone && !phoneRegex.test(phone)) {
      return ctx.badRequest('Téléphone invalide (format français)');
    }

    // Sanitization (XSS protection)
    const sanitizedMessage = ctx.request.body.data.message.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      ''
    );

    // Créer entrée
    const entry = await strapi.entityService.create('api::contact.contact', {
      data: {
        ...ctx.request.body.data,
        message: sanitizedMessage,
        status: 'new',
      },
    });

    return entry;
  },
};
```

---

## 📊 EXEMPLES FRONTEND

### Composant Login (React)

```tsx
// src/components/LoginForm.tsx
import { useState } from 'react';

export default function LoginForm() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `${import.meta.env.PUBLIC_STRAPI_URL}/api/auth/local`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ identifier, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message || 'Erreur connexion');
      }

      const data = await response.json();
      
      // Stocker JWT (localStorage ou cookie sécurisé)
      localStorage.setItem('jwt', data.jwt);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Redirection
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-800 p-4 rounded">
          {error}
        </div>
      )}

      <input
        type="email"
        placeholder="Email"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Connexion...' : 'Se connecter'}
      </button>
    </form>
  );
}
```

---

### Protected Route (Astro)

```typescript
// src/pages/dashboard.astro
---
// Vérifier JWT
const jwt = Astro.cookies.get('jwt')?.value;

if (!jwt) {
  return Astro.redirect('/login');
}

// Vérifier validité JWT
try {
  const response = await fetch(
    `${import.meta.env.PUBLIC_STRAPI_URL}/api/users/me`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('JWT invalide');
  }

  const user = await response.json();
} catch (error) {
  return Astro.redirect('/login');
}
---

<h1>Dashboard - Bienvenue {user.username}</h1>
```

---

### Hook useAuth (React)

```tsx
// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const jwt = localStorage.getItem('jwt');
    
    if (!jwt) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.PUBLIC_STRAPI_URL}/api/users/me`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Auth check error:', error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  return { user, loading, logout };
}

// Usage
// const { user, loading, logout } = useAuth();
```

---

## 🔧 CONFIGURATION AVANCÉE

### Email Provider (Reset Password)

**Plugin Email requis pour** :
- Reset password
- Confirmation email
- Notifications

**Configuration** : `config/plugins.js`

```javascript
module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid', // ou 'smtp', 'mailgun', etc.
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'noreply@confluence-digitale.fr',
        defaultReplyTo: 'contact@confluence-digitale.fr',
      },
    },
  },
});
```

---

### Custom Roles

**Créer rôle personnalisé** :

1. Settings → Roles → **Add new role**
2. Name : `Contributor` (exemple)
3. Description : `Peut créer articles mais pas publier`
4. Permissions :
   - Article : create ✅, update ✅, delete ❌
   - publish ❌ (reste draft)
5. Save

---

### Relations User → Content

**Exemple : Article avec author** :

**Schema Article** (déjà dans `02_CONTENT_TYPES.md`) :
```json
{
  "author": {
    "type": "relation",
    "relation": "manyToOne",
    "target": "plugin::users-permissions.user",
    "inversedBy": "articles"
  }
}
```

**Créer article avec author** :
```javascript
// Custom controller
const entry = await strapi.entityService.create('api::article.article', {
  data: {
    title: 'Mon Article',
    slug: 'mon-article',
    content: 'Contenu...',
    author: ctx.state.user.id, // User connecté (JWT)
  },
});
```

---

## 🐛 TROUBLESHOOTING

### Erreur : "Forbidden" (403)

**Cause** : Permissions non configurées

**Solution** :
1. Settings → Roles → Public
2. Activer `find` et `findOne` pour Content Type
3. Save

---

### Erreur : "Invalid token"

**Cause** : JWT expiré ou invalide

**Solution** :
- Re-login pour obtenir nouveau JWT
- Vérifier `JWT_SECRET` identique (dev/prod)

---

### Erreur : "Email already taken"

**Cause** : Email existe déjà (register)

**Solution** :
- Utiliser email unique
- Ou implémenter login au lieu de register

---

## ✅ CHECKLIST SÉCURITÉ

### Configuration

- [ ] API Token Read-Only créé pour frontend
- [ ] Permissions Public configurées (find, findOne uniquement)
- [ ] CORS configuré (origins autorisées)
- [ ] HTTPS activé en production
- [ ] Variables `.env` sécurisées (non commitées)

### Tokens

- [ ] API Token stocké dans `.env` (non exposé)
- [ ] Pas de token Full Access côté client
- [ ] JWT_SECRET complexe et unique

### Validation

- [ ] Validation email (regex)
- [ ] Validation téléphone (regex)
- [ ] Sanitization inputs (XSS protection)
- [ ] Rate limiting activé (optionnel mais recommandé)

---

**🔐 Authentification Configurée ! Backend Sécurisé ! 💪**

---

**Projet** : Confluence Digitale V6.7.2  
**Date** : Novembre 2025  
**Version** : 1.0
