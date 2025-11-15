import { Shield, Check, X } from "lucide-react";
import { useGDPRConsent } from "../hooks/useGDPRConsent";

/**
 * GDPR Consent Status Display
 * 
 * This component displays the current GDPR consent status.
 * Useful for debugging or showing users their current preferences.
 * 
 * Usage:
 * <ConfluenceGDPRStatus />
 */

export function ConfluenceGDPRStatus() {
  const { consent, hasConsent, hasAnalytics, hasPerformance } = useGDPRConsent();

  if (!hasConsent) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
          <div>
            <h4 className="text-sm font-medium text-yellow-900 mb-1">
              Aucun consentement enregistré
            </h4>
            <p className="text-xs text-yellow-700">
              Aucune donnée analytique n'est collectée pour le moment.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <div className="flex items-start gap-3 mb-3">
        <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
        <div className="flex-1">
          <h4 className="text-sm font-medium text-green-900 mb-1">
            Consentement enregistré
          </h4>
          <p className="text-xs text-green-700 mb-3">
            Donné le {consent?.timestamp ? new Date(consent.timestamp).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            }) : 'N/A'}
          </p>

          {/* Status List */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs">
              {hasAnalytics ? (
                <>
                  <Check className="w-4 h-4 text-green-600" strokeWidth={2} />
                  <span className="text-green-800">Cookies Analytiques (GA4) : <strong>Activés</strong></span>
                </>
              ) : (
                <>
                  <X className="w-4 h-4 text-gray-400" strokeWidth={2} />
                  <span className="text-gray-600">Cookies Analytiques (GA4) : <strong>Désactivés</strong></span>
                </>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs">
              {hasPerformance ? (
                <>
                  <Check className="w-4 h-4 text-green-600" strokeWidth={2} />
                  <span className="text-green-800">Cookies de Performance (Hotjar) : <strong>Activés</strong></span>
                </>
              ) : (
                <>
                  <X className="w-4 h-4 text-gray-400" strokeWidth={2} />
                  <span className="text-gray-600">Cookies de Performance (Hotjar) : <strong>Désactivés</strong></span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
