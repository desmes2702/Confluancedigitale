/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                premium: '#D1A65E',
                contractual: '#A32E3A',
                cta: '#10b981',
                background: '#F9FAFB',
                confluence: {
                    blue: '#0059B2',
                    'blue-dark': '#003d7a',
                    gray: '#4b5563',
                }
            },
            fontFamily: {
                playfair: ['Playfair Display', 'Georgia', 'serif'],
                inter: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                elevated: '0 4px 20px rgba(0, 0, 0, 0.08)',
                hover: '0 8px 30px rgba(0, 0, 0, 0.12)',
                premium: '0 0 0 3px rgba(209, 166, 94, 0.3)',
            },
            borderRadius: {
                lg: '10px',
                xl: '12px',
            }
        },
    },
    plugins: [],
}