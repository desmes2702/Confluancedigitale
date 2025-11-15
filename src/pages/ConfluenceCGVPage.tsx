import { ConfluenceHeaderV6_7 } from "../components/ConfluenceHeaderV6_7";
import { ConfluenceFooterV6_2 } from "../components/ConfluenceFooterV6_2";
import { FileText, Clock, AlertCircle, Target, CheckCircle2, Shield, Euro, Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ConfluenceCGVPageProps {
  onNavigate?: (page: string) => void;
}

export function ConfluenceCGVPage({ onNavigate }: ConfluenceCGVPageProps = {}) {
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
    { id: "preambule", label: "Préambule", icon: FileText },
    { id: "engagement", label: "Durée d'engagement", icon: Clock },
    { id: "services", label: "Services inclus", icon: CheckCircle2 },
    { id: "exclusivite", label: "Exclusivité", icon: Shield },
    { id: "rupture", label: "Rupture anticipée", icon: AlertCircle },
    { id: "tarifs", label: "Tarifs", icon: Euro }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header V6.7 */}
      <ConfluenceHeaderV6_7 onNavigate={handleNavigation} currentPage="cgv" />

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
              <FileText className="w-4 h-4 md:w-5 md:h-5 text-[#D1A65E]" strokeWidth={1.5} />
              <span className="text-sm md:text-base text-[#1A1A1A]">Documents Légaux</span>
            </div>

            {/* Titre */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-3 md:mb-4"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Conditions Générales de Vente
            </h1>
            <p 
              className="text-xl sm:text-2xl md:text-3xl text-[#D1A65E] mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Offre Partenariat Lean
            </p>

            <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto">
              Transparence totale sur notre modèle de partenariat MRR et nos engagements contractuels.
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
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-[#F9FAFB]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            
            {/* Section 1 - Préambule */}
            <motion.div
              id="preambule"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="rounded-xl md:rounded-2xl p-6 md:p-8 bg-white border border-[#E5E7EB]"
              style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
            >
              <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#D1A65E]/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#D1A65E]" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 
                    className="text-2xl md:text-3xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    Préambule
                  </h2>
                </div>
              </div>
              
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                <p>
                  Les présentes Conditions Générales de Vente (CGV) régissent la relation contractuelle entre 
                  <strong className="text-[#1A1A1A]"> Confluence Digitale</strong> et le Client dans le cadre de l'offre 
                  <strong className="text-[#D1A65E]"> "Partenariat Lean"</strong>.
                </p>
                <p>
                  Cette offre repose sur un modèle de <strong className="text-[#1A1A1A]">MRR (Monthly Recurring Revenue)</strong> transparent :
                </p>
                <ul className="list-disc pl-4 md:pl-5 space-y-2">
                  <li><strong className="text-[#1A1A1A]">Setup initial :</strong> 0 € HT</li>
                  <li><strong className="text-[#1A1A1A]">Abonnement mensuel :</strong> 149 € HT/mois</li>
                  <li><strong className="text-[#A32E3A]">Engagement minimum :</strong> 24 mois ferme</li>
                </ul>
              </div>
            </motion.div>

            {/* Section 2 - Durée d'engagement */}
            <motion.div
              id="engagement"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-xl md:rounded-2xl p-6 md:p-8 bg-white border border-[#E5E7EB]"
              style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#A32E3A]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#A32E3A]" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 
                    className="text-3xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    Durée d'engagement
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="p-6 bg-[#A32E3A]/5 rounded-xl border border-[#A32E3A]/20">
                  <p className="text-lg text-[#1A1A1A] mb-4">
                    <strong>Engagement ferme de 24 mois</strong>
                  </p>
                  <p>
                    Le contrat prend effet à la date de signature et court pour une durée minimale de 
                    <strong className="text-[#A32E3A]"> 24 mois consécutifs</strong>.
                  </p>
                </div>

                <p>
                  Cette durée garantit :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Votre <strong className="text-[#1A1A1A]">exclusivité territoriale</strong> protégée pendant toute la durée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Un <strong className="text-[#1A1A1A]">ROI maximisé</strong> sur le long terme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10b981] mt-1">✓</span>
                    <span>Un <strong className="text-[#1A1A1A]">investissement mutuellement rentable</strong></span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
                  <p className="text-sm">
                    <strong className="text-[#1A1A1A]">Renouvellement :</strong> À l'issue des 24 mois, le contrat se renouvelle 
                    tacitement par périodes de 12 mois, résiliable avec un préavis de 3 mois.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 3 - Services inclus */}
            <motion.div
              id="services"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-8 bg-white border border-[#E5E7EB]"
              style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#10b981]" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 
                    className="text-3xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    Services inclus dans le MRR
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>Pour 149 € HT/mois, vous bénéficiez de :</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#F9FAFB] rounded-lg">
                    <h3 className="text-lg text-[#1A1A1A] mb-2">Hébergement & Infrastructure</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Hébergement haute performance</li>
                      <li>• SSL/HTTPS inclus</li>
                      <li>• Sauvegardes quotidiennes</li>
                      <li>• CDN mondial</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#F9FAFB] rounded-lg">
                    <h3 className="text-lg text-[#1A1A1A] mb-2">Maintenance & Sécurité</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Mises à jour automatiques</li>
                      <li>• Monitoring 24/7</li>
                      <li>• Correctifs de sécurité</li>
                      <li>• Protection anti-DDoS</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#F9FAFB] rounded-lg">
                    <h3 className="text-lg text-[#1A1A1A] mb-2">Support Technique</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Support illimité par email</li>
                      <li>• Réponse sous 48h garantie</li>
                      <li>• Assistance technique</li>
                      <li>• Formation continue</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#F9FAFB] rounded-lg">
                    <h3 className="text-lg text-[#1A1A1A] mb-2">Performance & SEO</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Score 100/100 garanti</li>
                      <li>• Optimisation continue</li>
                      <li>• Suivi des positions Google</li>
                      <li>• Rapports mensuels</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 4 - Exclusivité territoriale */}
            <motion.div
              id="exclusivite"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
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
                    Clause d'exclusivité territoriale
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="p-6 bg-[#D1A65E]/5 rounded-xl border border-[#D1A65E]/20">
                  <p className="text-lg text-[#1A1A1A] mb-4">
                    <strong>Protection contractuelle garantie</strong>
                  </p>
                  <p>
                    Confluence Digitale s'engage à <strong className="text-[#D1A65E]">ne jamais accepter un concurrent direct</strong> du 
                    Client dans sa zone géographique d'intervention pendant toute la durée du contrat.
                  </p>
                </div>

                <p>Cette clause protège :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D1A65E] mt-1">✓</span>
                    <span>Votre <strong className="text-[#1A1A1A]">positionnement unique</strong> dans votre zone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D1A65E] mt-1">✓</span>
                    <span>Votre <strong className="text-[#1A1A1A]">stratégie SEO locale</strong> sans cannibalisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D1A65E] mt-1">✓</span>
                    <span>Votre <strong className="text-[#1A1A1A]">investissement marketing</strong> contre la concurrence interne</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
                  <p className="text-sm">
                    <strong className="text-[#1A1A1A]">Définition de la zone :</strong> La zone géographique est définie conjointement 
                    lors de la signature du contrat (ville, rayon 30km, département, etc.).
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 5 - Rupture anticipée */}
            <motion.div
              id="rupture"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl p-8 bg-white border border-[#E5E7EB]"
              style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#A32E3A]/10 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-[#A32E3A]" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 
                    className="text-3xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    Rupture anticipée du contrat
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="p-6 bg-[#A32E3A]/5 rounded-xl border border-[#A32E3A]/20">
                  <p className="text-lg text-[#1A1A1A] mb-4">
                    <strong>Résiliation anticipée impossible</strong>
                  </p>
                  <p>
                    Le contrat ne peut être résilié avant le terme des 24 mois, sauf motif légitime prévu par la loi 
                    (cessation d'activité, liquidation judiciaire, etc.).
                  </p>
                </div>

                <p>En cas de rupture anticipée non justifiée :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A32E3A] mt-1">•</span>
                    <span>Le Client reste redevable de l'intégralité des <strong className="text-[#1A1A1A]">mensualités restantes</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A32E3A] mt-1">•</span>
                    <span>Le site web et tous les services sont <strong className="text-[#1A1A1A]">immédiatement suspendus</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A32E3A] mt-1">•</span>
                    <span>L'exclusivité territoriale est <strong className="text-[#1A1A1A]">automatiquement levée</strong></span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
                  <p className="text-sm">
                    <strong className="text-[#1A1A1A]">Note :</strong> Cette clause protège notre investissement mutuel et garantit 
                    la viabilité du modèle économique pour tous nos clients.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 6 - Tarifs */}
            <motion.div
              id="tarifs"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-2xl p-8 bg-white border border-[#E5E7EB]"
              style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
                  <Euro className="w-6 h-6 text-[#10b981]" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 
                    className="text-3xl text-[#1A1A1A] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    Tarification & Paiement
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="p-6 bg-[#10b981]/5 rounded-xl border border-[#10b981]/20">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Setup Initial</p>
                      <p 
                        className="text-4xl text-[#10b981]" 
                        style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                      >
                        0 € <span className="text-xl">HT</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Abonnement Mensuel</p>
                      <p 
                        className="text-4xl text-[#1A1A1A]" 
                        style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                      >
                        149 € <span className="text-xl">HT</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg text-[#1A1A1A]">Modalités de paiement :</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10b981] mt-1">✓</span>
                      <span><strong className="text-[#1A1A1A]">Prélèvement automatique mensuel</strong> le 1er de chaque mois</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10b981] mt-1">✓</span>
                      <span><strong className="text-[#1A1A1A]">Facturation HT</strong> + TVA applicable (20%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10b981] mt-1">✓</span>
                      <span><strong className="text-[#1A1A1A]">Paiement par virement ou prélèvement SEPA</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
                  <p className="text-sm">
                    <strong className="text-[#1A1A1A]">Révision tarifaire :</strong> Les tarifs peuvent être révisés annuellement, 
                    avec un préavis de 2 mois minimum. Le client peut alors résilier sans frais dans un délai de 30 jours.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer V6.2 */}
      <ConfluenceFooterV6_2 onNavigate={handleNavigation} currentPage="cgv" />
    </div>
  );
}