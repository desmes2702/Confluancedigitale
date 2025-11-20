import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ConfluenceLogo } from "./ConfluenceLogo";

interface ConfluenceHeaderV6_7Props {
  onNavigate?: (page: string) => void;
  currentPage?: string;
  enableEntryAnimations?: boolean; // Prop pour activer/désactiver animations d'entrée
}

export function ConfluenceHeaderV6_7({ 
  onNavigate, 
  currentPage = 'home',
  enableEntryAnimations = false // Par défaut: DÉSACTIVÉ (chargement instantané)
}: ConfluenceHeaderV6_7Props = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Empêche le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setMobileMenuOpen(false);
  };

  // BATCH 4A : 3 liens max (centre) + Contact + Audit Gratuit (droite)
  // V5.18 : Ordre Storytelling (Quoi → Comment → Qui → Preuve)
  const navItems = [
    { id: 'offre', label: "L'Offre" },
    { id: 'methode', label: 'Notre Méthode' },
    { id: 'qui-sommes-nous', label: 'Qui sommes-nous ?' },
    { id: 'etudes-de-cas', label: 'Nos Réalisations' }
  ];

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: 'none'
        }}
        // V4.8 : AUCUNE animation d'entrée (instantané partout)
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container mx-auto px-0">
          <div className="flex items-center justify-between h-20 px-4 sm:px-6">
            {/* Logo - SANS animation individuelle (V4.7) */}
            <button
              onClick={() => handleNavigation('home')}
              className="group hover:opacity-80 transition-opacity flex-shrink-0 cursor-pointer"
            >
              <ConfluenceLogo variant="horizontal" size="sm" colorScheme="color" />
            </button>

            {/* Desktop Navigation - SANS animation individuelle (V4.7) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-[#1A1A1A] hover:text-[#D1A65E] transition-colors relative group pl-4 whitespace-nowrap cursor-pointer ${
                    currentPage === item.id ? 'text-[#D1A65E]' : ''
                  }`}
                >
                  {/* Puce dorée à gauche pour le lien actif */}
                  {currentPage === item.id && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#D1A65E] rounded-full"></span>
                  )}
                  {item.label}
                </button>
              ))}
            </nav>

            {/* BATCH 4A : Actions (Desktop : Contact + Audit | Mobile : Audit + Burger) */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
              {/* Contact - Desktop uniquement (FORCE masquage mobile) - V5.27f FIX */}
              <button
                onClick={() => handleNavigation('contact')}
                className="max-md:!hidden text-[#1A1A1A] hover:text-[#D1A65E] transition-colors whitespace-nowrap cursor-pointer"
              >
                Contact
              </button>

              {/* CTA Audit Gratuit - SANS animation individuelle (V4.7) */}
              <Button
                onClick={() => handleNavigation('audit-gratuit')}
                className="bg-[#10b981] hover:bg-[#059669] text-white px-3 sm:px-4 lg:px-6 py-2 hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm sm:text-base cursor-pointer"
                style={{ boxShadow: 'none' }}
              >
                Audit Gratuit
              </Button>

              {/* Mobile Menu Button - Animation Burger → Croix */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#1A1A1A] hover:text-[#D1A65E] relative z-[60] flex-shrink-0 cursor-pointer"
                aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                <div className="relative w-6 h-6">
                  {/* Burger Icon */}
                  <motion.div
                    animate={mobileMenuOpen ? { opacity: 0, rotate: 180 } : { opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Menu className="w-6 h-6" strokeWidth={1.5} />
                  </motion.div>
                  
                  {/* Cross Icon */}
                  <motion.div
                    animate={mobileMenuOpen ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -180 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <X className="w-6 h-6" strokeWidth={1.5} />
                  </motion.div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MENU MOBILE V6.7 - GLASSMORPHISM CLAIR (même style que header) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay - Animation Fade-in */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Panel Mobile - Glassmorphism Clair V6.7 */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                duration: 0.4, 
                ease: [0.22, 1, 0.36, 1]
              }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm z-50 lg:hidden overflow-y-auto"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: 'none',
                borderLeft: '1px solid rgba(229, 231, 235, 0.5)'
              }}
            >
              <div className="flex flex-col h-full">
                {/* Header du Panel - Bouton de fermeture */}
                <div className="px-6 h-20 flex items-center justify-end border-b border-[#E5E7EB]">
                  <motion.button
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-[#1A1A1A] hover:text-[#D1A65E] hover:bg-[#F9FAFB] rounded-xl transition-all cursor-pointer"
                    aria-label="Fermer le menu"
                  >
                    <X className="w-6 h-6" strokeWidth={1.5} />
                  </motion.button>
                </div>

                {/* Navigation Links - Staggered Animation */}
                <nav className="flex-1 p-6 overflow-y-auto">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 0.1 + (index * 0.05),
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        onClick={() => handleNavigation(item.id)}
                        className={`text-left px-6 py-4 rounded-xl transition-all relative cursor-pointer ${
                          currentPage === item.id 
                            ? 'text-[#D1A65E]' 
                            : 'text-[#1A1A1A] hover:bg-[#F9FAFB] hover:text-[#D1A65E]'
                        }`}
                        style={{
                          fontFamily: 'Inter, sans-serif'
                        }}
                      >
                        {/* Puce dorée à gauche pour le lien actif */}
                        {currentPage === item.id && (
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#D1A65E] rounded-full"></span>
                        )}
                        {item.label}
                      </motion.button>
                    ))}
                    
                    {/* V5.27b : Contact uniquement dans menu burger */}
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.1 + (navItems.length * 0.05),
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      onClick={() => handleNavigation('contact')}
                      className={`text-left px-6 py-4 rounded-xl transition-all relative cursor-pointer ${
                        currentPage === 'contact' 
                          ? 'text-[#D1A65E]' 
                          : 'text-[#1A1A1A] hover:bg-[#F9FAFB] hover:text-[#D1A65E]'
                      }`}
                      style={{
                        fontFamily: 'Inter, sans-serif'
                      }}
                    >
                      {/* Puce dorée à gauche pour le lien actif */}
                      {currentPage === 'contact' && (
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#D1A65E] rounded-full"></span>
                      )}
                      Contact
                    </motion.button>
                  </div>
                </nav>

                {/* CTA Section - Fade-in avec délai */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.5,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="p-6 border-t border-[#E5E7EB]"
                >
                  {/* CTA Principal */}
                  <Button
                    onClick={() => handleNavigation('audit-gratuit')}
                    className="w-full bg-[#10b981] hover:bg-[#059669] text-white py-4 mb-4 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                    style={{ 
                      boxShadow: '0 4px 20px 0 rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    <span className="text-lg">Audit Gratuit</span>
                  </Button>

                  {/* Footer Text */}
                  <p className="text-xs text-gray-500 text-center">
                    Réponse sous 48h • 100% Gratuit • Sans engagement
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}