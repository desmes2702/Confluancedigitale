/**
 * GDPR Consent Management Utilities
 * Confluence Digitale - Design System V6.1
 */

export interface ConsentData {
  timestamp: string;
  analytics: boolean;
  performance: boolean;
}

/**
 * Get current GDPR consent status
 */
export function getConsent(): ConsentData | null {
  try {
    const consent = localStorage.getItem('confluence-gdpr-consent');
    if (!consent) return null;
    return JSON.parse(consent);
  } catch (error) {
    console.error('Error reading GDPR consent:', error);
    return null;
  }
}

/**
 * Check if user has given consent for analytics
 */
export function hasAnalyticsConsent(): boolean {
  const consent = getConsent();
  return consent?.analytics === true;
}

/**
 * Check if user has given consent for performance tracking
 */
export function hasPerformanceConsent(): boolean {
  const consent = getConsent();
  return consent?.performance === true;
}

/**
 * Initialize Google Analytics 4 (GA4)
 * Only call this if user has given consent
 */
export function initializeGA4(measurementId: string) {
  if (!hasAnalyticsConsent()) {
    console.log('⚠️ GA4 not initialized: No consent');
    return;
  }

  // Load GA4 script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', measurementId, {
    anonymize_ip: true, // GDPR compliance
    cookie_flags: 'SameSite=None;Secure'
  });

  console.log('✅ GA4 initialized:', measurementId);
}

/**
 * Initialize Hotjar
 * Only call this if user has given consent
 */
export function initializeHotjar(siteId: number, version: number = 6) {
  if (!hasPerformanceConsent()) {
    console.log('⚠️ Hotjar not initialized: No consent');
    return;
  }

  // Load Hotjar script
  (function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
    h.hj = h.hj || function() {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
    h._hjSettings = { hjid: siteId, hjsv: version };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

  console.log('✅ Hotjar initialized:', siteId);
}

/**
 * Clear all GDPR consent and remove tracking
 */
export function clearConsent() {
  localStorage.removeItem('confluence-gdpr-consent');
  console.log('🗑️ GDPR consent cleared');
}

/**
 * Update consent preferences
 */
export function updateConsent(analytics: boolean, performance: boolean) {
  const consentData: ConsentData = {
    timestamp: new Date().toISOString(),
    analytics,
    performance
  };
  localStorage.setItem('confluence-gdpr-consent', JSON.stringify(consentData));
  console.log('✅ GDPR consent updated:', consentData);
}

// Type augmentation for window object
declare global {
  interface Window {
    dataLayer: any[];
    hj: any;
    _hjSettings: any;
  }
}
