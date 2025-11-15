# 🖼️ MEDIA & CLOUDINARY

**Projet** : Confluence Digitale V6.7.2 - Backend  
**CDN** : Cloudinary (recommandé) ou Upload Provider  
**Formats** : Images, Vidéos, PDFs

---

## 🎯 GESTION MEDIA

### Options Stockage

| Option | Avantages | Inconvénients | Recommandation |
|--------|-----------|---------------|----------------|
| **Local (Strapi)** | ✅ Gratuit, simple | ❌ Pas de CDN, backup manuel | Dev uniquement |
| **Cloudinary** | ✅ CDN global, transformations, gratuit (10GB) | ⚠️ Limite free tier | ✅ **Recommandé Prod** |
| **AWS S3** | ✅ Scalable, pas de limite | ❌ Configuration complexe, payant | Gros projets |
| **Vercel Blob** | ✅ Intégré Vercel | ❌ Payant, limite taille | Alternative |

**Recommandation** : **Cloudinary** (CDN + transformations + free tier généreux).

---

## ☁️ CLOUDINARY SETUP

### Étape 1 : Créer Compte

1. Aller sur [cloudinary.com](https://cloudinary.com)
2. Cliquer **Sign Up** (gratuit)
3. Remplir formulaire :
   - Email
   - Password
   - Cloud name : `confluence-digitale` (personnalisable)
4. Vérifier email

---

### Étape 2 : Obtenir Credentials

**Dashboard Cloudinary** → **Dashboard** :

**Informations affichées** :
```
Cloud name: confluence-digitale
API Key: 123456789012345
API Secret: abcdefghijklmnopqrstuvwxyz123
```

**Copier ces 3 valeurs** ⚠️

---

### Étape 3 : Installer Plugin Strapi

```bash
# Dans projet Strapi
npm install @strapi/provider-upload-cloudinary --save
```

---

### Étape 4 : Configuration Strapi

**Créer** : `config/plugins.js`

```javascript
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
```

---

### Étape 5 : Variables Environnement

**Fichier** : `.env` (local)

```bash
# Cloudinary
CLOUDINARY_NAME=confluence-digitale
CLOUDINARY_KEY=123456789012345
CLOUDINARY_SECRET=abcdefghijklmnopqrstuvwxyz123
```

**Railway/Render (Production)** :

Ajouter dans **Variables** :
```bash
CLOUDINARY_NAME=confluence-digitale
CLOUDINARY_KEY=123456789012345
CLOUDINARY_SECRET=abcdefghijklmnopqrstuvwxyz123
```

---

### Étape 6 : Redémarrer Strapi

```bash
npm run develop
```

**Logs attendus** :
```
[INFO] Cloudinary provider configured
[INFO] Server running on http://localhost:1337
```

---

### Étape 7 : Tester Upload

1. **Strapi Admin** → **Media Library**
2. Cliquer **Add new assets**
3. Uploader image (ex: test.jpg)
4. Image uploadée → **URL Cloudinary** :
   ```
   https://res.cloudinary.com/confluence-digitale/image/upload/v1234567890/abc123.jpg
   ```

✅ **Setup Cloudinary Réussi !**

---

## 🔧 CONFIGURATION AVANCÉE

### Options Upload

**Fichier** : `config/plugins.js`

```javascript
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          folder: 'confluence-digitale', // Organiser dans dossier
          resource_type: 'auto', // Détection auto (image/video/raw)
          allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'pdf'], // Formats autorisés
          max_file_size: 10485760, // 10MB max
        },
        uploadStream: {
          folder: 'confluence-digitale',
        },
        delete: {},
      },
    },
  },
});
```

---

### Transformations Images

**Cloudinary transforme automatiquement images** :

**URL originale** :
```
https://res.cloudinary.com/confluence-digitale/image/upload/v1234567890/abc123.jpg
```

**Transformations** :

**Resize (largeur 800px)** :
```
https://res.cloudinary.com/confluence-digitale/image/upload/w_800/v1234567890/abc123.jpg
```

**Crop carré (300x300)** :
```
https://res.cloudinary.com/confluence-digitale/image/upload/w_300,h_300,c_fill/v1234567890/abc123.jpg
```

**Format WebP (performance)** :
```
https://res.cloudinary.com/confluence-digitale/image/upload/f_webp/v1234567890/abc123.jpg
```

**Qualité optimisée** :
```
https://res.cloudinary.com/confluence-digitale/image/upload/q_auto/v1234567890/abc123.jpg
```

**Combiné** :
```
https://res.cloudinary.com/confluence-digitale/image/upload/w_800,q_auto,f_webp/v1234567890/abc123.jpg
```

---

### Responsive Images

**Générer plusieurs tailles** :

```javascript
// Frontend (Astro/React)
const imageUrl = 'https://res.cloudinary.com/confluence-digitale/image/upload/v1234567890/abc123.jpg';

const srcSet = `
  ${imageUrl.replace('/upload/', '/upload/w_400/')} 400w,
  ${imageUrl.replace('/upload/', '/upload/w_800/')} 800w,
  ${imageUrl.replace('/upload/', '/upload/w_1200/')} 1200w
`;

// HTML
<img
  src={imageUrl.replace('/upload/', '/upload/w_800/')}
  srcSet={srcSet}
  sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
  alt="Description"
  loading="lazy"
/>
```

---

## 📊 FORMATS SUPPORTÉS

### Images

| Format | Extension | Usage | Recommandation |
|--------|-----------|-------|----------------|
| **JPEG** | .jpg, .jpeg | Photos | ✅ Standard |
| **PNG** | .png | Transparence | ✅ Logos |
| **WebP** | .webp | Performance | ✅ **Préféré** |
| **SVG** | .svg | Vectoriel | ✅ Icônes |
| **GIF** | .gif | Animation | ⚠️ Lourd |

---

### Vidéos

| Format | Extension | Usage |
|--------|-----------|-------|
| **MP4** | .mp4 | Standard |
| **WebM** | .webm | Web moderne |
| **MOV** | .mov | Apple |

**⚠️ Attention** : Vidéos consomment rapidement quota Cloudinary free (10GB stockage + 25 crédits transformation/mois).

---

### Documents

| Format | Extension | Usage |
|--------|-----------|-------|
| **PDF** | .pdf | Documents |
| **DOC/DOCX** | .doc, .docx | Word |
| **XLS/XLSX** | .xls, .xlsx | Excel |

---

## 🔒 SÉCURITÉ UPLOADS

### Restrictions Taille

**Strapi** : `config/middlewares.js`

```javascript
module.exports = [
  // ... autres middlewares
  {
    name: 'strapi::body',
    config: {
      formLimit: '10mb', // Limite formulaires
      jsonLimit: '10mb',
      textLimit: '10mb',
      formidable: {
        maxFileSize: 10 * 1024 * 1024, // 10MB max par fichier
      },
    },
  },
  // ... autres middlewares
];
```

---

### Validation Types MIME

**Custom controller** (optionnel) :

```javascript
// src/api/upload/controllers/upload.js
module.exports = {
  async upload(ctx) {
    const files = ctx.request.files;
    
    // Validation MIME type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
    
    for (const file of Object.values(files)) {
      if (!allowedTypes.includes(file.type)) {
        return ctx.badRequest(`Type de fichier non autorisé : ${file.type}`);
      }
    }
    
    // Upload via service Strapi
    return strapi.plugins.upload.services.upload.upload({
      data: {},
      files,
    });
  },
};
```

---

### Permissions Upload

**Par défaut** : Seulement **Admin** peut uploader.

**Autoriser Authenticated** :

1. Settings → Roles → **Authenticated**
2. **Upload** → Permissions :
   - ✅ `upload` (créer fichiers)
   - ❌ `destroy` (supprimer fichiers - sécurité)
3. Save

---

## 🌐 UTILISATION FRONTEND

### Récupérer Media depuis API

**API Strapi** retourne media avec relations :

```json
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "Article Exemple",
      "coverImage": {
        "data": {
          "id": 42,
          "attributes": {
            "name": "hero-image.jpg",
            "alternativeText": "Image hero",
            "caption": "Description",
            "width": 1920,
            "height": 1080,
            "formats": {
              "large": {
                "url": "/uploads/large_hero_image.jpg",
                "width": 1000,
                "height": 563
              },
              "medium": {
                "url": "/uploads/medium_hero_image.jpg",
                "width": 750,
                "height": 422
              },
              "small": {
                "url": "/uploads/small_hero_image.jpg",
                "width": 500,
                "height": 281
              },
              "thumbnail": {
                "url": "/uploads/thumbnail_hero_image.jpg",
                "width": 245,
                "height": 138
              }
            },
            "url": "/uploads/hero_image.jpg",
            "previewUrl": null,
            "provider": "cloudinary",
            "provider_metadata": {
              "public_id": "confluence-digitale/abc123",
              "resource_type": "image"
            },
            "createdAt": "2025-11-15T10:00:00.000Z",
            "updatedAt": "2025-11-15T10:00:00.000Z"
          }
        }
      }
    }
  }
}
```

---

### Helper Frontend (Astro)

**Fichier** : `src/lib/media.ts`

```typescript
/**
 * Get image URL from Strapi media object
 */
export function getImageUrl(media: any): string | null {
  if (!media?.data) return null;
  
  const { url, provider } = media.data.attributes;
  
  // Si Cloudinary, URL complète déjà
  if (provider === 'cloudinary') {
    return url;
  }
  
  // Sinon, préfixer avec URL Strapi
  return `${import.meta.env.PUBLIC_STRAPI_URL}${url}`;
}

/**
 * Get responsive image URLs
 */
export function getResponsiveImageUrls(media: any) {
  if (!media?.data) return null;
  
  const { url, formats } = media.data.attributes;
  
  return {
    original: getImageUrl(media),
    large: formats?.large?.url || url,
    medium: formats?.medium?.url || url,
    small: formats?.small?.url || url,
    thumbnail: formats?.thumbnail?.url || url,
  };
}

/**
 * Get Cloudinary transformed URL
 */
export function getCloudinaryUrl(
  media: any,
  transforms: string = 'w_800,q_auto,f_webp'
): string | null {
  const url = getImageUrl(media);
  if (!url || !url.includes('cloudinary.com')) return url;
  
  // Insert transformations
  return url.replace('/upload/', `/upload/${transforms}/`);
}
```

**Usage** :
```astro
---
import { getImageUrl, getCloudinaryUrl } from '@/lib/media';

const article = await getArticleBySlug('example');
const coverImage = article.attributes.coverImage;

const imageUrl = getCloudinaryUrl(coverImage, 'w_1200,h_630,c_fill,q_auto,f_webp');
---

<img
  src={imageUrl}
  alt={coverImage.data.attributes.alternativeText}
  width="1200"
  height="630"
  loading="lazy"
/>
```

---

## 📦 COMPOSANT IMAGE (React)

```tsx
// src/components/StrapiImage.tsx
import { getCloudinaryUrl } from '@/lib/media';

interface StrapiImageProps {
  media: any;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  transforms?: string;
}

export default function StrapiImage({
  media,
  width = 800,
  height,
  className = '',
  loading = 'lazy',
  transforms,
}: StrapiImageProps) {
  if (!media?.data) return null;

  const { alternativeText, caption } = media.data.attributes;
  
  const defaultTransforms = height
    ? `w_${width},h_${height},c_fill,q_auto,f_webp`
    : `w_${width},q_auto,f_webp`;
  
  const imageUrl = getCloudinaryUrl(media, transforms || defaultTransforms);

  return (
    <figure className={className}>
      <img
        src={imageUrl}
        alt={alternativeText || caption || ''}
        width={width}
        height={height}
        loading={loading}
        className="w-full h-auto"
      />
      {caption && (
        <figcaption className="text-sm text-gray-600 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// Usage
<StrapiImage
  media={article.coverImage}
  width={1200}
  height={630}
  className="rounded-lg shadow-lg"
/>
```

---

## 🗂️ ORGANISATION CLOUDINARY

### Dossiers (Folders)

**Organiser uploads par type** :

**Configuration** : `config/plugins.js`

```javascript
upload: {
  config: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    actionOptions: {
      upload: {
        folder: env('NODE_ENV') === 'production'
          ? 'confluence-digitale/production'
          : 'confluence-digitale/dev',
      },
    },
  },
}
```

**Résultat** :
```
Cloudinary/
├── confluence-digitale/
│   ├── production/      (images prod)
│   │   ├── articles/
│   │   ├── services/
│   │   └── team/
│   └── dev/             (images dev)
```

---

### Tags

**Ajouter tags automatiques** :

```javascript
actionOptions: {
  upload: {
    folder: 'confluence-digitale',
    tags: ['confluence', 'website'], // Tags globaux
  },
}
```

---

## 📊 MONITORING

### Quota Cloudinary Free

**Plan Gratuit** :
- ✅ 25 crédits/mois (transformations)
- ✅ 25 GB bande passante/mois
- ✅ 10 GB stockage

**Vérifier usage** :
1. Cloudinary Dashboard
2. **Settings** → **Usage**

**⚠️ Si dépassement** → Upgrade plan ($89/mois) ou optimiser usage.

---

### Optimisations Quota

1. **Format WebP** : -30% poids vs JPEG
   ```
   /upload/f_webp,q_auto/...
   ```

2. **Lazy loading** : Charger images seulement visibles

3. **Transformations serveur** : Éviter transformations client

4. **Cache CDN** : Images cached automatiquement (Cloudinary CDN)

---

## 🐛 TROUBLESHOOTING

### Erreur : "Cloudinary credentials invalid"

**Cause** : Credentials incorrects

**Solution** :
1. Vérifier `.env` : `CLOUDINARY_NAME`, `CLOUDINARY_KEY`, `CLOUDINARY_SECRET`
2. Dashboard Cloudinary → Copier credentials exactement
3. Redémarrer Strapi

---

### Erreur : "File too large"

**Cause** : Fichier > limite

**Solution** :
1. Augmenter limite : `config/middlewares.js` → `maxFileSize`
2. OU compresser image avant upload

---

### Erreur : "Upload failed"

**Cause** : Problème réseau ou quota dépassé

**Solution** :
1. Vérifier connexion internet
2. Vérifier quota Cloudinary (Settings → Usage)
3. Vérifier logs Strapi (erreur détaillée)

---

### Images ne s'affichent pas (CORS)

**Cause** : CORS Cloudinary

**Solution** :
Cloudinary autorise CORS par défaut. Si problème :
- Vérifier URL image correcte
- Vérifier `provider: 'cloudinary'` dans `plugins.js`

---

## ✅ CHECKLIST

### Configuration

- [ ] Compte Cloudinary créé
- [ ] Credentials récupérées (name, key, secret)
- [ ] Plugin `@strapi/provider-upload-cloudinary` installé
- [ ] `config/plugins.js` créé et configuré
- [ ] Variables env ajoutées (local + production)
- [ ] Strapi redémarré

### Tests

- [ ] Upload image test dans Media Library
- [ ] URL Cloudinary générée (https://res.cloudinary.com/...)
- [ ] Image affichée dans Admin Panel
- [ ] API retourne URL image correctement
- [ ] Frontend affiche images Cloudinary

### Optimisation

- [ ] Format WebP activé (`f_webp`)
- [ ] Qualité auto (`q_auto`)
- [ ] Lazy loading frontend
- [ ] Helper functions créés (getCloudinaryUrl)

---

**🖼️ Media & Cloudinary Configurés ! CDN Opérationnel ! 💪**

---

**Projet** : Confluence Digitale V6.7.2  
**Date** : Novembre 2025  
**Version** : 1.0
