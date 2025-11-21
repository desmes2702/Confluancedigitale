// Utility for Strapi fetching
export const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';
export const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN || '';

/**
 * Fetch data from Strapi API
 * Currently returns mock data - ready for production connection
 */
export async function fetchAPI(endpoint: string) {
    // TODO: Implement real Strapi fetch when backend is ready
    // const response = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
    //     headers: {
    //         Authorization: `Bearer ${STRAPI_TOKEN}`,
    //     },
    // });
    // return response.json();

    return null; // Mock response for now
}
