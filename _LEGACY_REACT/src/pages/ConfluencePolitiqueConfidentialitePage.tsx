import { ConfluenceHeaderV6_7 } from "../components/ConfluenceHeaderV6_7";
import { ConfluenceFooterV6_2 } from "../components/ConfluenceFooterV6_2";
import { Shield, Lock, Eye, UserCheck, Database, Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ConfluenceGDPRStatus } from "../components/ConfluenceGDPRStatus";
import { ConfluenceGDPRSettings } from "../components/ConfluenceGDPRSettings";

interface ConfluencePolitiqueConfidentialitePageProps {
  onNavigate?: (page: string) => void;
}

export function ConfluencePolitiqueConfidentialitePage({ onNavigate }: ConfluencePolitiqueConfidentialitePageProps = {}) {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const [activeSection, setActiveSection] = useState<string>("");

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const sections = [
    { id: "qui-sommes-nous", label: "Qui sommes-nous", icon: UserCheck },
    { id: "donnees-collectees", label: "Données collectées", icon: Database },
    { id: "outils-techniques", label: "Outils techniques", icon: Lock },
    { id: "vos-droits", label: "Vos droits", icon: Eye },
    { id: "contact", label: "Nous contacter", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header V6.7 */}
      <ConfluenceHeaderV6_7 onNavigate={handleNavigation} currentPage="politique-confidentialite" />

      {/* HERO - ZÉRO GAP - BATCH 19A : Responsive Padding */}
      <section 
        ref={heroRef}
        className="relative min-h-[50vh] flex items-center justify-center pt-28 lg:pt-32 pb-12 md:pb-16 px-4 overflow-hidden bg-white"
      >
        <div className="absolute top-10 right-0 w-96 h-96 bg-[#D1A65E]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
              style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.06)' }}
            >
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#10b981]" strokeWidth={1.5} />
              <span className="text-sm md:text-base text-[#1A1A1A]">RGPD Compliant</span>
            </div>

            {/* Titre */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Politique de <span className="text-[#D1A65E]">Confidentialité</span> & RGPD
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
              Transparence totale sur la collecte et l'utilisation de vos données personnelles.
            </p>

            <p className="mt-4 md:mt-6 text-xs md:text-sm text-gray-500">
              Dernière mise à jour : 1er novembre 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table des Matières Sticky */}
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="py-4 overflow-x-auto">
              <div className="flex items-center gap-2 md:gap-4 min-w-max md:min-w-0 md:justify-center">
                <Menu className="w-4 h-4 text-gray-400 flex-shrink-0" strokeWidth={1.5} />
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-sm px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                      activeSection === section.id
                        ? 'bg-[#D1A65E] text-white'
                        : 'text-[#1A1A1A] hover:bg-[#F9FAFB]'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu Principal */}
      <section 
        ref={contentRef}
        className="relative py-16 md:py-24 px-4 bg-[#F9FAFB]"
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Section 1 - Qui sommes-nous */}
            <motion.div
              id="qui-sommes-nous"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 bg-white border border-[#E5E7EB]"
              style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#D1A65E]/10 flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-[#D1A65E]" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 
                    className="text-3xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    Qui sommes-nous ?
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong className="text-[#1A1A1A]">Confluence Digitale</strong> est une agence web spécialisée dans la création de sites performants pour TPE et PME.
                </p>
                <p>
                  Responsable du traitement : <strong className="text-[#1A1A1A]">Confluence Digitale</strong><br />
                  Siège social : Fumel, France<br />
                  Email : <a href="mailto:contact@confluence-digitale.fr" className="text-[#D1A65E] hover:underline">contact@confluence-digitale.fr</a>
                </p>
              </div>
            </motion.div>

            {/* Section 2 - Données collectées */}
            <motion.div
              id="donnees-collectees"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl p-8 bg-white border border-[#E5E7EB]"
              style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#D1A65E]/10 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-[#D1A65E]" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 
                    className="text-3xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    Quelles données collectons-nous ?
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>Nous collectons uniquement les données nécessaires au bon fonctionnement de nos services :</p>
                
                <div className="space-y-3">
                  <div className="pl-4 border-l-2 border-[#D1A65E]">
                    <h3 className="text-lg text-[#1A1A1A] mb-2">Données de contact</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Nom de l'entreprise</li>
                    </ul>
                  </div>

                  <div className="pl-4 border-l-2 border-[#D1A65E]">
                    <h3 className="text-lg text-[#1A1A1A] mb-2">Données techniques (cookies)</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Adresse IP</li>
                      <li>Type de navigateur</li>
                      <li>Pages visitées</li>
                      <li>Préférences de consentement RGPD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 3 - Outils techniques */}
            <motion.div
              id="outils-techniques"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-8 bg-white border border-[#E5E7EB]"
              style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#D1A65E]/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-[#D1A65E]" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 
                    className="text-3xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    Outils techniques & cookies
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>Nous utilisons les outils suivants :</p>
                
                <div className="space-y-3">
                  <div className="pl-4 border-l-2 border-[#D1A65E]">
                    <h3 className="text-lg text-[#1A1A1A] mb-2">Cookies strictement nécessaires</h3>
                    <p>Ces cookies sont indispensables au fonctionnement du site (consentement RGPD, session, sécurité).</p>
                  </div>

                  <div className="pl-4 border-l-2 border-[#D1A65E]">
                    <h3 className="text-lg text-[#1A1A1A] mb-2">Cookies analytiques (optionnels)</h3>
                    <p>Avec votre consentement, nous utilisons des outils d'analyse pour améliorer nos services. Vous pouvez refuser ces cookies à tout moment.</p>
                  </div>
                </div>

                {/* Widget GDPR */}
                <div className="mt-6 p-6 bg-[#F9FAFB] rounded-xl">
                  <ConfluenceGDPRStatus />
                  <div className="mt-4">
                    <ConfluenceGDPRSettings />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 4 - Vos droits */}
            <motion.div
              id="vos-droits"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl p-8 bg-white border border-[#E5E7EB]"
              style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#D1A65E]/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-[#D1A65E]" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 
                    className="text-3xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    Vos droits RGPD
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span><strong className="text-[#1A1A1A]">Droit d'accès :</strong> Vous pouvez demander une copie de vos données.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span><strong className="text-[#1A1A1A]">Droit de rectification :</strong> Vous pouvez corriger vos données inexactes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span><strong className="text-[#1A1A1A]">Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span><strong className="text-[#1A1A1A]">Droit d'opposition :</strong> Vous pouvez refuser l'utilisation de vos données.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span><strong className="text-[#1A1A1A]">Droit à la portabilité :</strong> Vous pouvez récupérer vos données dans un format réutilisable.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Section 5 - Contact */}
            <motion.div
              id="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl p-8 bg-white border border-[#E5E7EB]"
              style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#D1A65E]/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#D1A65E]" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 
                    className="text-3xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    Nous contacter
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>Pour toute question concernant vos données personnelles ou pour exercer vos droits :</p>
                
                <div className="p-6 bg-[#F9FAFB] rounded-xl">
                  <p className="mb-2">
                    <strong className="text-[#1A1A1A]">Email :</strong>{' '}
                    <a href="mailto:rgpd@confluence-digitale.fr" className="text-[#D1A65E] hover:underline">
                      rgpd@confluence-digitale.fr
                    </a>
                  </p>
                  <p>
                    <strong className="text-[#1A1A1A]">Délai de réponse :</strong> 30 jours maximum
                  </p>
                </div>

                <p className="text-sm">
                  En cas de litige non résolu, vous pouvez introduire une réclamation auprès de la CNIL :{' '}
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#D1A65E] hover:underline">
                    www.cnil.fr
                  </a>
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer V6.2 */}
      <ConfluenceFooterV6_2 onNavigate={handleNavigation} currentPage="politique-confidentialite" />
    </div>
  );
}