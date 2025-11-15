import { ConfluenceHeaderV6_7 } from "../components/ConfluenceHeaderV6_7";
import { ConfluenceFooterV6_2 } from "../components/ConfluenceFooterV6_2";
import { Shield, ChevronRight, FileText, Lock, Scale } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ConfluenceMentionsLegalesPageProps {
  onNavigate?: (page: string) => void;
}

export function ConfluenceMentionsLegalesPage({ onNavigate }: ConfluenceMentionsLegalesPageProps = {}) {
  const [activeSection, setActiveSection] = useState<string>("");
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const sections = [
    { id: "editeur", label: "Éditeur du Site" },
    { id: "hebergeur", label: "Hébergeur" },
    { id: "responsable", label: "Responsable de Publication" },
    { id: "propriete", label: "Propriété Intellectuelle" },
    { id: "donnees", label: "Données Personnelles & RGPD" },
    { id: "cookies", label: "Cookies" },
    { id: "limitations", label: "Limitations de Responsabilité" },
    { id: "droit", label: "Droit Applicable" }
  ];

  const trustBadges = [
    { icon: Shield, label: "100% Conforme RGPD" },
    { icon: Lock, label: "Hébergement France" },
    { icon: Scale, label: "Transparence Totale" }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header V6.7 */}
      <ConfluenceHeaderV6_7 onNavigate={handleNavigation} currentPage="mentions-legales" />

      {/* HERO - ZÉRO GAP - BATCH 19A : Responsive Padding */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-24 px-4 bg-gradient-to-b from-white to-[#F9FAFB] overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-[#D1A65E]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* Icon */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#D1A65E]/10 rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 md:w-10 md:h-10 text-[#D1A65E]" strokeWidth={1.5} />
              </div>
            </div>

            {/* Title */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-6 md:mb-8"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Mentions Légales
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 md:mb-12">
              Notre engagement : <span className="text-[#D1A65E]">Transparence Totale</span>.<br />
              Conformité RGPD. Protection de vos données. Sécurité maximale.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + (index * 0.1),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200"
                >
                  <badge.icon className="w-5 h-5 text-[#10b981]" strokeWidth={2} />
                  <span className="text-sm md:text-base text-gray-700">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* LEGAL CONTENT - Fond Blanc */}
      <section 
        ref={contentRef}
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main Title */}
            <div className="mb-8 md:mb-12 pb-6 md:pb-8 border-b border-gray-200">
              <h2 
                className="text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] mb-3 md:mb-4"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                Conditions Générales d'Utilisation (CGU)
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-[#F9FAFB] rounded-xl md:rounded-2xl p-6 md:p-8 mb-8 md:mb-12 border border-gray-200">
              <h3 
                className="text-xl md:text-2xl text-[#1A1A1A] mb-4 md:mb-6 flex items-center gap-2"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#D1A65E]" strokeWidth={2} />
                Sommaire
              </h3>
              <nav className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white hover:shadow-sm group ${
                      activeSection === section.id ? 'bg-white shadow-sm' : ''
                    }`}
                  >
                    <span className="text-sm text-gray-500 mr-2">{index + 1}.</span>
                    <span className="text-sm md:text-base text-gray-700 group-hover:text-[#D1A65E]">
                      {section.label}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Legal Sections */}
            <div className="space-y-8 md:space-y-12">
              {/* Section 1: Éditeur */}
              <div id="editeur" className="scroll-mt-24">
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl text-[#1A1A1A] mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 border-[#D1A65E]/20"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  1. Éditeur du Site
                </h3>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  <p>
                    Le site web <strong className="text-[#1A1A1A]">Confluence Digitale</strong> est édité par :
                  </p>
                  <div className="bg-[#F9FAFB] rounded-xl p-4 md:p-6 border border-gray-200 space-y-2">
                    <p><strong className="text-[#1A1A1A]">Raison sociale :</strong> Confluence Digitale SARL</p>
                    <p><strong className="text-[#1A1A1A]">Siège social :</strong> 123 Avenue de la Performance, 47000 Agen, France</p>
                    <p><strong className="text-[#1A1A1A]">SIRET :</strong> 123 456 789 00012</p>
                    <p><strong className="text-[#1A1A1A]">Capital social :</strong> 10 000 €</p>
                    <p><strong className="text-[#1A1A1A]">RCS :</strong> Agen B 123 456 789</p>
                    <p><strong className="text-[#1A1A1A]">Email :</strong> contact@confluence-digitale.fr</p>
                    <p><strong className="text-[#1A1A1A]">Téléphone :</strong> +33 (0)5 53 XX XX XX</p>
                  </div>
                </div>
              </div>

              {/* Section 2: Hébergeur */}
              <div id="hebergeur" className="scroll-mt-24">
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl text-[#1A1A1A] mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 border-[#D1A65E]/20"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  2. Hébergeur
                </h3>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  <p>
                    Le site est hébergé par :
                  </p>
                  <div className="bg-[#F9FAFB] rounded-xl p-4 md:p-6 border border-gray-200 space-y-2">
                    <p><strong className="text-[#1A1A1A]">Nom :</strong> OVH SAS</p>
                    <p><strong className="text-[#1A1A1A]">Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
                    <p><strong className="text-[#1A1A1A]">Téléphone :</strong> 1007</p>
                    <p><strong className="text-[#1A1A1A]">Site web :</strong> www.ovh.com</p>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 italic mt-3 md:mt-4 flex items-start gap-2">
                    <Shield className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>
                      L'hébergement est assuré sur des serveurs situés en France, 
                      garantissant la conformité avec le RGPD européen.
                    </span>
                  </p>
                </div>
              </div>

              {/* Section 3: Responsable de Publication */}
              <div id="responsable" className="scroll-mt-24">
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl text-[#1A1A1A] mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 border-[#D1A65E]/20"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  3. Responsable de Publication
                </h3>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  <p>
                    Le Directeur de la publication est <strong className="text-[#1A1A1A]">M. Jean Dupont</strong>, 
                    Gérant de Confluence Digitale SARL.
                  </p>
                  <p>
                    Contact : <a href="mailto:direction@confluence-digitale.fr" className="text-[#D1A65E] hover:underline">direction@confluence-digitale.fr</a>
                  </p>
                </div>
              </div>

              {/* Section 4: Propriété Intellectuelle */}
              <div id="propriete" className="scroll-mt-24">
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl text-[#1A1A1A] mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 border-[#D1A65E]/20"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  4. Propriété Intellectuelle
                </h3>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  <p>
                    L'ensemble de ce site relève de la législation française et internationale 
                    sur le droit d'auteur et la propriété intellectuelle.
                  </p>
                  <p>
                    Tous les droits de reproduction sont réservés, y compris pour les documents 
                    téléchargeables et les représentations iconographiques et photographiques.
                  </p>
                  <p>
                    La reproduction de tout ou partie de ce site sur un support électronique 
                    quel qu'il soit est formellement interdite sauf autorisation expresse du 
                    directeur de la publication.
                  </p>
                </div>
              </div>

              {/* Section 5: Données Personnelles & RGPD */}
              <div id="donnees" className="scroll-mt-24">
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl text-[#1A1A1A] mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 border-[#D1A65E]/20"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  5. Données Personnelles & RGPD
                </h3>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  <p>
                    Confluence Digitale accorde une importance particulière à la protection 
                    de vos données personnelles et s'engage à les traiter conformément au 
                    Règlement Général sur la Protection des Données (RGPD).
                  </p>
                  
                  <h4 
                    className="text-lg md:text-xl text-[#1A1A1A] mt-4 md:mt-6 mb-2 md:mb-3"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    5.1. Responsable du traitement
                  </h4>
                  <p>
                    Le responsable du traitement des données est Confluence Digitale SARL, 
                    dont les coordonnées sont mentionnées à l'article 1.
                  </p>

                  <h4 
                    className="text-lg md:text-xl text-[#1A1A1A] mt-4 md:mt-6 mb-2 md:mb-3"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    5.2. Données collectées
                  </h4>
                  <p>
                    Les données collectées via nos formulaires de contact sont :
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-1 md:space-y-2">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone (optionnel)</li>
                    <li>Entreprise et secteur d'activité</li>
                    <li>Message ou demande spécifique</li>
                  </ul>

                  <h4 
                    className="text-lg md:text-xl text-[#1A1A1A] mt-4 md:mt-6 mb-2 md:mb-3"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    5.3. Finalité du traitement
                  </h4>
                  <p>
                    Vos données sont collectées uniquement pour :
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-1 md:space-y-2">
                    <li>Répondre à vos demandes de contact</li>
                    <li>Établir un devis personnalisé</li>
                    <li>Assurer le suivi commercial de votre projet</li>
                  </ul>

                  <h4 
                    className="text-lg md:text-xl text-[#1A1A1A] mt-4 md:mt-6 mb-2 md:mb-3"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    5.4. Vos droits
                  </h4>
                  <p>
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-1 md:space-y-2">
                    <li><strong className="text-[#1A1A1A]">Droit d'accès :</strong> Vous pouvez demander une copie de vos données</li>
                    <li><strong className="text-[#1A1A1A]">Droit de rectification :</strong> Vous pouvez corriger vos données inexactes</li>
                    <li><strong className="text-[#1A1A1A]">Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
                    <li><strong className="text-[#1A1A1A]">Droit d'opposition :</strong> Vous pouvez vous opposer au traitement</li>
                    <li><strong className="text-[#1A1A1A]">Droit à la portabilité :</strong> Vous pouvez récupérer vos données</li>
                  </ul>
                  <p className="mt-3 md:mt-4">
                    Pour exercer ces droits, contactez-nous à : <a href="mailto:rgpd@confluence-digitale.fr" className="text-[#D1A65E] hover:underline font-medium">rgpd@confluence-digitale.fr</a>
                  </p>

                  <h4 
                    className="text-lg md:text-xl text-[#1A1A1A] mt-4 md:mt-6 mb-2 md:mb-3"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    5.5. Durée de conservation
                  </h4>
                  <p>
                    Vos données sont conservées pendant 3 ans à compter de notre dernier contact, 
                    puis supprimées automatiquement.
                  </p>

                  <h4 
                    className="text-lg md:text-xl text-[#1A1A1A] mt-4 md:mt-6 mb-2 md:mb-3"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    5.6. Sécurité
                  </h4>
                  <p>
                    Nous mettons en œuvre toutes les mesures techniques et organisationnelles 
                    appropriées pour garantir la sécurité de vos données contre tout accès, 
                    modification, divulgation ou destruction non autorisés.
                  </p>
                </div>
              </div>

              {/* Section 6: Cookies */}
              <div id="cookies" className="scroll-mt-24">
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl text-[#1A1A1A] mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 border-[#D1A65E]/20"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  6. Cookies
                </h3>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  <p>
                    Le site Confluence Digitale utilise des cookies uniquement pour améliorer 
                    votre expérience de navigation.
                  </p>
                  
                  <h4 
                    className="text-lg md:text-xl text-[#1A1A1A] mt-4 md:mt-6 mb-2 md:mb-3"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    6.1. Types de cookies utilisés
                  </h4>
                  <ul className="list-disc pl-5 md:pl-6 space-y-1 md:space-y-2">
                    <li><strong className="text-[#1A1A1A]">Cookies strictement nécessaires :</strong> Essentiels au fonctionnement du site</li>
                    <li><strong className="text-[#1A1A1A]">Cookies analytiques :</strong> Pour mesurer l'audience (anonymisés)</li>
                  </ul>

                  <h4 
                    className="text-lg md:text-xl text-[#1A1A1A] mt-4 md:mt-6 mb-2 md:mb-3"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                  >
                    6.2. Gestion des cookies
                  </h4>
                  <p>
                    Vous pouvez à tout moment désactiver les cookies dans les paramètres de 
                    votre navigateur. Cependant, cela peut affecter certaines fonctionnalités du site.
                  </p>
                </div>
              </div>

              {/* Section 7: Limitations de Responsabilité */}
              <div id="limitations" className="scroll-mt-24">
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl text-[#1A1A1A] mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 border-[#D1A65E]/20"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  7. Limitations de Responsabilité
                </h3>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  <p>
                    Confluence Digitale met tout en œuvre pour offrir aux utilisateurs des 
                    informations fiables et vérifiées. Cependant, nous ne pouvons garantir 
                    l'exactitude, la précision ou l'exhaustivité des informations mises à 
                    disposition sur ce site.
                  </p>
                  <p>
                    Confluence Digitale ne saurait être tenue responsable des dommages directs 
                    ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder.
                  </p>
                  <p>
                    Les liens hypertextes présents sur le site peuvent renvoyer vers d'autres 
                    sites internet. Confluence Digitale ne saurait être responsable du contenu 
                    de ces sites tiers.
                  </p>
                </div>
              </div>

              {/* Section 8: Droit Applicable */}
              <div id="droit" className="scroll-mt-24">
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl text-[#1A1A1A] mb-4 md:mb-6 pb-2 md:pb-3 border-b-2 border-[#D1A65E]/20"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  8. Droit Applicable et Juridiction
                </h3>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  <p>
                    Les présentes mentions légales sont régies par le droit français.
                  </p>
                  <p>
                    En cas de litige et à défaut d'accord amiable, le litige sera porté devant 
                    les tribunaux compétents du ressort d'Agen, France.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer V6.2 */}
      <ConfluenceFooterV6_2 onNavigate={handleNavigation} currentPage="mentions-legales" />
    </div>
  );
}