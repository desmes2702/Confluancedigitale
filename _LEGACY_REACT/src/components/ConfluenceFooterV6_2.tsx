import { ConfluenceGDPRSettings } from "./ConfluenceGDPRSettings";
import { ConfluenceGDPRBadge } from "./ConfluenceGDPRBadge";
import { ConfluenceLogo } from "./ConfluenceLogo";
import { ContractualReassuranceBlock } from "./ContractualReassuranceBlock";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Phone, MapPin } from "lucide-react";

interface ConfluenceFooterV6_2Props {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export function ConfluenceFooterV6_2({ onNavigate, currentPage = 'home' }: ConfluenceFooterV6_2Props = {}) {
  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // BATCH 4B : Navigation simplifiée (3 liens principaux + 2 liens secondaires)
  const navLinks = [
    { id: 'offre', label: "L'Offre" },
    { id: 'methode', label: 'Notre Méthode' },
    { id: 'etudes-de-cas', label: 'Nos Réalisations' }
  ];

  const secondaryLinks = [
    { id: 'etudes-de-cas', label: 'Blog / Études de cas' },
    { id: 'qui-sommes-nous', label: 'Qui sommes-nous ?' }
  ];

  // BATCH 4B : Légalité (transparence totale)
  const legalLinks = [
    { id: 'mentions-legales', label: 'Mentions Légales' },
    { id: 'politique-confidentialite', label: 'Politique de Confidentialité' },
    { id: 'cgv', label: 'Conditions Générales de Vente' }
  ];

  return (
    <footer className="bg-[#1A1A1A] border-t border-[#D1A65E]/20">
      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* BATCH 48 V10 : Grille 4 Colonnes (lg: et +) avec Mini-Triade */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12">
            
            {/* COLONNE 1 : AGENCE (Confiance Locale) */}
            <div>
              <button
                onClick={() => handleNavigation('home')}
                className="mb-4 md:mb-6 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <ConfluenceLogo variant="horizontal" size="sm" colorScheme="gold-white-light" />
              </button>
              
              <p className="text-sm text-gray-400 mb-4 md:mb-6">
                Sites web ultra-performants pour artisans et TPE/PME.
                <br />
                <strong className="text-[#10b981]">Performance garantie 100/100.</strong>
              </p>

              {/* Adresse (Confiance Locale - BATCH 6A) */}
              <div className="space-y-2 md:space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#D1A65E] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p>Montayral, 47500</p>
                    <p className="text-xs text-gray-500 mt-1">Zone d'intervention : 30km</p>
                  </div>
                </div>

                {/* Téléphone (Ligne directe - Placeholder) */}
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#10b981] flex-shrink-0" strokeWidth={1.5} />
                  <a 
                    href="tel:06XXXXXXXX" 
                    className="hover:text-[#10b981] transition-colors cursor-pointer"
                  >
                    <strong>06 XX XX XX XX</strong> <span className="text-xs">(Ligne directe)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* COLONNE 2 : NAVIGATION (Plan du site) */}
            <div>
              <h3 className="text-sm md:text-base text-white mb-4 md:mb-6">Navigation</h3>
              
              {/* Liens Principaux */}
              <ul className="space-y-2 md:space-y-3 text-sm text-gray-400 mb-4 md:mb-6">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavigation(link.id)}
                      className={`hover:text-[#D1A65E] transition-colors text-left relative group cursor-pointer ${
                        currentPage === link.id ? 'text-[#D1A65E]' : ''
                      }`}
                    >
                      {link.label}
                      {/* Indicateur actif */}
                      {currentPage === link.id && (
                        <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#D1A65E] rounded-full"></span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Liens Secondaires (séparés visuellement) */}
              <ul className="space-y-2 md:space-y-3 text-sm text-gray-500 border-t border-gray-700 pt-4 md:pt-6">
                {secondaryLinks.map((link) => (
                  <li key={`secondary-${link.id}`}>
                    <button
                      onClick={() => handleNavigation(link.id)}
                      className="hover:text-[#D1A65E] transition-colors text-left cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* === NOUVELLE COLONNE 3 : NOS EXPERTS (MINI-TRIADE BATCH 48 V10) === */}
            <div>
              <h3 className="text-sm md:text-base text-white mb-4 md:mb-6">Nos Experts</h3>
              
              <div className="space-y-3">
                
                {/* Mini-Carte Antoine (Or/Cuivre) */}
                <button
                  onClick={() => handleNavigation('qui-sommes-nous')}
                  className="w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-opacity hover:opacity-80"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderLeft: '3px solid #D1A65E'
                  }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI1MDU0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Antoine, Garant Performance"
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="text-left">
                    <div className="text-sm text-white">Antoine</div>
                    <div className="text-xs text-gray-400">Architecte UX/UI</div>
                  </div>
                </button>
                
                {/* Mini-Carte Pascal (Vert) */}
                <button
                  onClick={() => handleNavigation('qui-sommes-nous')}
                  className="w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-opacity hover:opacity-80"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderLeft: '3px solid #10b981'
                  }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1709715357564-ab64e091ead9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hcmtldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjI0MTk0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Pascal, Garant Stratégie"
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="text-left">
                    <div className="text-sm text-white">Pascal</div>
                    <div className="text-xs text-gray-400">Conseiller Numérique (RENM)</div>
                  </div>
                </button>
                
                {/* Mini-Carte Laly (Rouge Bordeaux) */}
                <button
                  onClick={() => handleNavigation('qui-sommes-nous')}
                  className="w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-opacity hover:opacity-80"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderLeft: '3px solid #A32E3A'
                  }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyNDc1NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Laly, Garante Sérénité"
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="text-left">
                    <div className="text-sm text-white">Laly</div>
                    <div className="text-xs text-gray-400">Enseignante spécialisée</div>
                  </div>
                </button>
              </div>
            </div>
            {/* === FIN NOUVELLE COLONNE 3 === */}

            {/* COLONNE 4 : LÉGALITÉ (Sérieux) - Anciennement Colonne 3 */}
            <div>
              <h3 className="text-sm md:text-base text-white mb-4 md:mb-6">Légal</h3>
              <ul className="space-y-2 md:space-y-3 text-sm text-gray-400">
                {legalLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavigation(link.id)}
                      className={`hover:text-[#D1A65E] transition-colors text-left relative group cursor-pointer ${
                        currentPage === link.id ? 'text-[#D1A65E]' : ''
                      }`}
                    >
                      {link.label}
                      {/* Indicateur actif */}
                      {currentPage === link.id && (
                        <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#D1A65E] rounded-full"></span>
                      )}
                    </button>
                  </li>
                ))}
                <li>
                  <ConfluenceGDPRSettings variant="link" />
                </li>
              </ul>

              {/* BATCH 6A : Bloc Transparence Contractuelle (Rouge Bordeaux) */}
              <ContractualReassuranceBlock />
            </div>
          </div>

          {/* LIGNE INFÉRIEURE (Bottom-bar) */}
          <div className="pt-6 md:pt-8 border-t border-[#D1A65E]/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">
                © 2025 Confluence Digitale. Tous droits réservés.
              </p>

              <div className="flex items-center gap-4">
                <ConfluenceGDPRBadge />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}