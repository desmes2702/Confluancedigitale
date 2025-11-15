import { useEffect, useState } from 'react';
import { getConsent, ConsentData, initializeGA4, initializeHotjar } from '../utils/gdprConsent';

/**
 * Hook to manage GDPR consent and initialize analytics
 * Usage:
 * 
 * const { consent, hasConsent } = useGDPRConsent();
 * 
 * if (hasConsent) {
 *   // User has given consent, analytics are active
 * }
 */
export function useGDPRConsent() {
  const [consent, setConsent] = useState<ConsentData | null>(null);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check consent on mount
    const currentConsent = getConsent();
    setConsent(currentConsent);
    setHasConsent(currentConsent !== null);

    // Initialize analytics if consent is given
    if (currentConsent) {
      if (currentConsent.analytics) {
        // Replace with your actual GA4 Measurement ID
        // initializeGA4('G-XXXXXXXXXX');
        console.log('📊 GA4 ready to initialize (add your Measurement ID)');
      }

      if (currentConsent.performance) {
        // Replace with your actual Hotjar Site ID
        // initializeHotjar(1234567);
        console.log('🔥 Hotjar ready to initialize (add your Site ID)');
      }
    }

    // Listen for storage changes (if user changes consent in another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'confluence-gdpr-consent') {
        const newConsent = getConsent();
        setConsent(newConsent);
        setHasConsent(newConsent !== null);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return {
    consent,
    hasConsent,
    hasAnalytics: consent?.analytics || false,
    hasPerformance: consent?.performance || false
  };
}
