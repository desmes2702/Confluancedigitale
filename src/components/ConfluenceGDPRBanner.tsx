import { useState, useEffect } from "react";
import { X, Shield, Settings, Cookie } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

// Export a function to open the modal from anywhere
let openGDPRModal: (() => void) | null = null;

export function openGDPRSettings() {
  if (openGDPRModal) {
    openGDPRModal();
  }
}

export function ConfluenceGDPRBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    performance: false
  });

  // Check if user has already made a choice
  useEffect(() => {
    const consent = localStorage.getItem('confluence-gdpr-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    // Check if there are any disabled cookies
    const hasDisabledCookies = !preferences.analytics || !preferences.performance;
    
    if (hasDisabledCookies) {
      // First, activate all toggles visually
      setPreferences({
        necessary: true,
        analytics: true,
        performance: true
      });
      
      // Wait for animation, then save and close
      setTimeout(() => {
        const consentData = {
          timestamp: new Date().toISOString(),
          analytics: true,
          performance: true
        };
        localStorage.setItem('confluence-gdpr-consent', JSON.stringify(consentData));
        setShowBanner(false);
        setShowConfig(false);
        
        console.log('✅ Analytics enabled: GA4 + Hotjar');
      }, 800);
    } else {
      // Everything already accepted, close immediately
      const consentData = {
        timestamp: new Date().toISOString(),
        analytics: true,
        performance: true
      };
      localStorage.setItem('confluence-gdpr-consent', JSON.stringify(consentData));
      setShowBanner(false);
      setShowConfig(false);
      
      console.log('✅ Analytics enabled: GA4 + Hotjar');
    }
  };

  const handleRejectAll = () => {
    // Check if there are any enabled cookies (excluding necessary which can't be disabled)
    const hasEnabledCookies = preferences.analytics || preferences.performance;
    
    if (hasEnabledCookies) {
      // First, deactivate all toggles visually
      setPreferences({
        necessary: true,
        analytics: false,
        performance: false
      });
      
      // Wait for animation, then save and close
      setTimeout(() => {
        const consentData = {
          timestamp: new Date().toISOString(),
          analytics: false,
          performance: false
        };
        localStorage.setItem('confluence-gdpr-consent', JSON.stringify(consentData));
        setShowBanner(false);
        setShowConfig(false);
        
        console.log('❌ Analytics disabled');
      }, 800);
    } else {
      // Everything already rejected, close immediately
      const consentData = {
        timestamp: new Date().toISOString(),
        analytics: false,
        performance: false
      };
      localStorage.setItem('confluence-gdpr-consent', JSON.stringify(consentData));
      setShowBanner(false);
      setShowConfig(false);
      
      console.log('❌ Analytics disabled');
    }
  };

  const handleSavePreferences = () => {
    const consentData = {
      timestamp: new Date().toISOString(),
      analytics: preferences.analytics,
      performance: preferences.performance
    };
    localStorage.setItem('confluence-gdpr-consent', JSON.stringify(consentData));
    setShowBanner(false);
    setShowConfig(false);
    
    if (preferences.analytics || preferences.performance) {
      console.log('✅ Partial analytics enabled:', preferences);
    } else {
      console.log('❌ Analytics disabled');
    }
  };

  const openConfigModal = () => {
    setShowConfig(true);
  };

  // Expose the function globally
  useEffect(() => {
    openGDPRModal = openConfigModal;
    return () => {
      openGDPRModal = null;
    };
  }, []);

  return (
    <>
      {/* Main Banner - Sticky Footer */}
      <AnimatePresence>
        {showBanner && !showConfig && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A1A] border-t border-[#D1A65E]/20"
          >
            <div className="container mx-auto px-4 py-6 md:py-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                {/* Left: Content */}
                <div className="flex-1 space-y-3">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#D1A65E]/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-[#D1A65E]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl text-white">
                      Respect de votre vie privée.
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-3xl">
                    Nous utilisons des outils d'analyse (
                    <span className="text-white">GA4</span>, 
                    <span className="text-white"> Hotjar</span>) pour optimiser votre expérience 
                    et la performance de ce site. Votre accord est nécessaire pour activer ces scripts.
                  </p>

                  {/* Learn More Link */}
                  <button
                    onClick={() => {
                      // Navigate to privacy policy
                    }}
                    className="text-xs text-[#D1A65E] hover:text-[#D1A65E]/80 underline underline-offset-2 inline-block cursor-pointer"
                  >
                    En savoir plus sur notre politique de confidentialité
                  </button>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                  {/* Primary CTA - Accept */}
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-[#10b981] hover:bg-[#059669] text-white px-6 py-6 md:py-3 text-base shadow-lg hover:shadow-[#10b981]/20 transition-all duration-300 rounded-lg group cursor-pointer"
                  >
                    <span>Accepter et Continuer</span>
                  </Button>

                  {/* Secondary CTA - Configure */}
                  <Button
                    onClick={openConfigModal}
                    variant="outline"
                    className="border-[#D1A65E]/40 text-[#D1A65E] hover:bg-[#D1A65E]/10 hover:border-[#D1A65E] px-6 py-6 md:py-3 text-base rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    <Settings className="w-4 h-4 mr-2" strokeWidth={1.5} />
                    <span>Configurer / Refuser</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Configuration Modal */}
      <AnimatePresence>
        {showConfig && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setShowConfig(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-[#1A1A1A] border-2 border-[#D1A65E]/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                {/* Header */}
                <div className="sticky top-0 bg-[#1A1A1A] border-b border-[#D1A65E]/10 px-6 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#D1A65E]/10 flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-[#D1A65E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="text-2xl text-white">
                        Paramètres de Confidentialité
                      </h2>
                      <p className="text-sm text-gray-500">
                        Gérez vos préférences de cookies
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowConfig(false)}
                    className="w-10 h-10 rounded-lg hover:bg-white/5 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5 text-gray-400 hover:text-white transition-colors" strokeWidth={1.5} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Introduction */}
                  <div className="bg-[#D1A65E]/5 border border-[#D1A65E]/20 rounded-xl p-5">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Nous respectons votre vie privée. Vous pouvez choisir quels types de cookies 
                      vous souhaitez autoriser. Les cookies nécessaires au fonctionnement du site 
                      ne peuvent pas être désactivés.
                    </p>
                  </div>

                  {/* Cookie Categories */}
                  <div className="space-y-4">
                    {/* Necessary Cookies */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg text-white mb-2 flex items-center gap-2">
                            <span>Cookies Nécessaires</span>
                            <span className="text-xs bg-[#10b981]/20 text-[#10b981] px-2 py-1 rounded">
                              Obligatoire
                            </span>
                          </h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            Ces cookies sont essentiels au fonctionnement du site. Ils permettent 
                            la navigation de base et l'accès aux zones sécurisées.
                          </p>
                        </div>
                        <div className="ml-4">
                          <div className="w-12 h-7 bg-[#10b981] rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                            <div className="w-5 h-5 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 pt-3 border-t border-white/5">
                        <strong>Exemples :</strong> Session utilisateur, préférences de langue
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg text-white mb-2">
                            Cookies Analytiques
                          </h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            Ces cookies nous aident à comprendre comment les visiteurs interagissent 
                            avec le site en collectant des données anonymes.
                          </p>
                        </div>
                        <div className="ml-4">
                          <button
                            onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                            className={`w-12 h-7 rounded-full flex items-center px-1 transition-all duration-300 cursor-pointer ${
                              preferences.analytics 
                                ? 'bg-[#10b981] justify-end' 
                                : 'bg-gray-700 justify-start'
                            }`}
                          >
                            <div className="w-5 h-5 bg-white rounded-full"></div>
                          </button>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 pt-3 border-t border-white/5">
                        <strong>Outils :</strong> Google Analytics 4 (GA4)
                      </div>
                    </div>

                    {/* Performance Cookies */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg text-white mb-2">
                            Cookies de Performance
                          </h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            Ces cookies nous permettent d'analyser le comportement des utilisateurs 
                            pour améliorer l'expérience (heatmaps, enregistrements de session).
                          </p>
                        </div>
                        <div className="ml-4">
                          <button
                            onClick={() => setPreferences(prev => ({ ...prev, performance: !prev.performance }))}
                            className={`w-12 h-7 rounded-full flex items-center px-1 transition-all duration-300 cursor-pointer ${
                              preferences.performance 
                                ? 'bg-[#10b981] justify-end' 
                                : 'bg-gray-700 justify-start'
                            }`}
                          >
                            <div className="w-5 h-5 bg-white rounded-full"></div>
                          </button>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 pt-3 border-t border-white/5">
                        <strong>Outils :</strong> Hotjar
                      </div>
                    </div>
                  </div>

                  {/* RGPD Info */}
                  <div className="bg-[#A32E3A]/10 border border-[#A32E3A]/50 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div className="flex-1">
                        <h4 className="text-sm text-[#A32E3A] mb-1">
                          Conformité RGPD
                        </h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          Vos données sont traitées conformément au RGPD. Vous pouvez modifier vos 
                          préférences à tout moment et exercer vos droits (accès, rectification, 
                          suppression) en nous contactant.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="sticky bottom-0 bg-[#1A1A1A] border-t border-[#D1A65E]/10 px-6 py-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    onClick={handleRejectAll}
                    variant="outline"
                    className="bg-transparent border-2 border-[#A32E3A] text-white hover:bg-[#A32E3A]/10 hover:border-[#A32E3A] px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    Tout Refuser
                  </Button>
                  <Button
                    onClick={handleSavePreferences}
                    className="bg-[#D1A65E] hover:bg-[#D1A65E]/90 text-[#1A1A1A] px-6 py-3 rounded-lg shadow-lg hover:shadow-[#D1A65E]/20 transition-all duration-300 flex-1 cursor-pointer"
                  >
                    Enregistrer mes Préférences
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-[#10b981] hover:bg-[#059669] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-[#10b981]/20 transition-all duration-300 cursor-pointer"
                  >
                    Tout Accepter
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}