import { useState, useEffect } from 'react';

export interface GDPRConsent {
    timestamp: string;
    analytics: boolean;
    performance: boolean;
}

export const useGDPRConsent = () => {
    const [consent, setConsent] = useState<GDPRConsent | null>(null);
    const [hasConsent, setHasConsent] = useState(false);

    useEffect(() => {
        const loadConsent = () => {
            const stored = localStorage.getItem('confluence-gdpr-consent');
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    setConsent(parsed);
                    setHasConsent(true);
                } catch (e) {
                    console.error('Failed to parse GDPR consent', e);
                }
            } else {
                setConsent(null);
                setHasConsent(false);
            }
        };

        loadConsent();

        // Listen for storage events (cross-tab) and custom events (same-tab)
        const handleStorage = () => loadConsent();
        window.addEventListener('storage', handleStorage);
        window.addEventListener('confluence-gdpr-update', handleStorage);

        return () => {
            window.removeEventListener('storage', handleStorage);
            window.removeEventListener('confluence-gdpr-update', handleStorage);
        };
    }, []);

    return {
        consent,
        hasConsent,
        hasAnalytics: consent?.analytics ?? false,
        hasPerformance: consent?.performance ?? false,
    };
};

export const openGDPRSettings = () => {
    window.dispatchEvent(new CustomEvent('open-gdpr-settings'));
};
