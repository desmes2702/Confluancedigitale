/**
 * Configuration Serveur - Strapi Confluence
 * 
 * Renommer ce fichier en `server.ts`
 */

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [
      'generez_une_cle_aleatoire_ici_1',
      'generez_une_cle_aleatoire_ici_2',
    ]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  proxy: env.bool('IS_PROXIED', false),
  cron: {
    enabled: env.bool('CRON_ENABLED', false),
    tasks: {
      // Exemple : Nettoyer les leads expirés
      // '0 0 * * *': async ({ strapi }) => {
      //   // Logique de nettoyage
      // },
    },
  },
});
