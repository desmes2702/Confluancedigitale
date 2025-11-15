/**
 * Configuration Plugins - Strapi Confluence
 * 
 * Renommer ce fichier en `plugins.ts`
 */

export default ({ env }) => ({
  // Email Plugin (Nodemailer)
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env.int('SMTP_PORT', 587),
        secure: false, // true pour port 465, false pour autres ports
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('DEFAULT_FROM', 'noreply@confluencedigitale.fr'),
        defaultReplyTo: env('DEFAULT_REPLY_TO', 'contact@confluencedigitale.fr'),
      },
    },
  },

  // Upload Plugin (optionnel : Cloudinary pour production)
  upload: {
    config: {
      provider: 'local', // Changer en 'cloudinary' ou 'aws-s3' pour production
      providerOptions: {
        // Pour Cloudinary :
        // cloud_name: env('CLOUDINARY_NAME'),
        // api_key: env('CLOUDINARY_KEY'),
        // api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },

  // Documentation Plugin (Swagger)
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        version: '1.0.0',
        title: 'Confluence Digitale API',
        description: 'API documentation for Confluence Digitale backend',
        contact: {
          name: 'Confluence Digitale',
          email: 'contact@confluencedigitale.fr',
        },
      },
      servers: [
        {
          url: env('PUBLIC_URL', 'http://localhost:1337'),
          description: 'Development server',
        },
      ],
    },
  },
});
