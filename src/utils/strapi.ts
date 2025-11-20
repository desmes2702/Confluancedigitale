// Utility for Strapi fetching
export const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';
export const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN || '';

export async function fetchAPI(endpoint: string) {
    // TODO: Implement fetch logic
    return null;
}
