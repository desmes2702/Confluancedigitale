import { ConfluenceHeaderV6_7 } from "../components/ConfluenceHeaderV6_7";
import { ConfluenceFooterV6_2 } from "../components/ConfluenceFooterV6_2";
import { ConfluenceFAQ } from "../components/ConfluenceFAQ";
import { Button } from "../components/ui/button";
import { Shield, CheckCircle2, AlertTriangle, TrendingUp, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ConfluenceExclusivitePageProps {
  onNavigate?: (page: string) => void;
}

export function ConfluenceExclusivitePage({ onNavigate }: ConfluenceExclusivitePageProps = {}) {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // Données des secteurs d'activité avec statut de disponibilité
  const secteurs = [
    {
      metier: "Couvreur",
      ville: "Fumel",
      statut: "pris",
      description: "Secteur actif depuis 8 mois"
    },
    {
      metier: "Plombier",
      ville: "Villeneuve-sur-Lot",
      statut: "disponible",
      description: "Opportunité immédiate"
    },
    {
      metier: "Restaurateur",
      ville: "Fumel",
      statut: "disponible",
      description: "Zone à forte demande"
    },
    {
      metier: "Menuisier",
      ville: "Villeneuve-sur-Lot",
      statut: "pris",
      description: "Secteur actif depuis 3 mois"
    },
    {
      metier: "Électricien",
      ville: "Fumel",
      statut: "disponible",
      description: "Secteur stratégique"
    },
    {
      metier: "Boulanger",
      ville: "Villeneuve-sur-Lot",
      statut: "pris",
      description: "Secteur actif depuis 12 mois"
    },
    {
      metier: "Paysagiste",
      ville: "Fumel",
      statut: "disponible",
      description: "Haute saisonnalité"
    },
    {
      metier: "Carreleur",
      ville: "Villeneuve-sur-Lot",
      statut: "disponible",
      description: "Zone en croissance"
    }
  ];

  const secteursDisponibles = secteurs.filter(s => s.statut === "disponible");
  const secteursPris = secteurs.filter(s => s.statut === "pris");

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header V6.7 */}
      <ConfluenceHeaderV6_7 onNavigate={handleNavigation} currentPage="exclusivite" />

      {/* 1. HERO SECTION - ZÉRO GAP - BATCH 19A : Responsive Padding */}
      <section 
        ref={heroRef}
        className="relative min-h-[65vh] flex items-center justify-center pt-28 lg:pt-32 pb-12 md:pb-16 px-4 overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-[#D1A65E]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Badge Premium */}
            <div 
              className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
              style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.04)' }}
            >
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#D1A65E]" strokeWidth={1.5} />
              <span className="text-sm md:text-base text-[#1A1A1A]">Protection Territoriale Garantie</span>
            </div>

            {/* Titre Principal */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Votre <span className="text-[#D1A65E]">Protection</span> Contre
              <br />
              la Concurrence Directe
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-6 md:mb-8">
              Un seul expert par métier et par zone géographique.<br className="hidden md:block" />
              <span className="text-[#D1A65E]">Votre exclusivité = Notre engagement contractuel.</span>
            </p>

            {/* Stats d'Urgence */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div 
                  className="text-3xl sm:text-4xl md:text-5xl text-[#10b981] mb-1 md:mb-2" 
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  {secteursDisponibles.length}
                </div>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">Secteurs Disponibles</p>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl sm:text-4xl md:text-5xl text-[#A32E3A] mb-1 md:mb-2" 
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  {secteursPris.length}
                </div>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">Déjà Protégés</p>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl sm:text-4xl md:text-5xl text-[#D1A65E] mb-1 md:mb-2" 
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  1
                </div>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">Place par Secteur</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SECTION EXPERTISE DISPONIBLE - Cartes V6.7 */}
      <section 
        ref={servicesRef}
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Titre de Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={servicesVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12 lg:mb-16"
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-3 md:mb-4"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                Expertise <span className="text-[#D1A65E]">Disponible</span> Aujourd'hui
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                Vérifiez si votre secteur d'activité est encore disponible dans votre zone.<br className="hidden md:block" />
                <span className="text-xs md:text-sm text-gray-500">Mise à jour en temps réel • Attribution définitive après signature</span>
              </p>
            </motion.div>

            {/* Grille des Secteurs - Cartes V6.7 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
              {secteurs.map((secteur, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={servicesVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  {/* Carte V6.7 - Bordure subtile */}
                  <div 
                    className="rounded-xl overflow-hidden relative p-4 md:p-6 bg-white border border-[#E5E7EB] hover:border-[#D1A65E] transition-all duration-300"
                    style={{
                      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-3 md:gap-4">
                      {/* Info Secteur */}
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl text-[#1A1A1A] mb-2">
                          {secteur.metier}
                        </h3>
                        <div className="flex items-center gap-2 mb-2 md:mb-3">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 text-[#D1A65E]" strokeWidth={1.5} />
                          <span className="text-gray-600 text-xs md:text-sm">{secteur.ville}</span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-500">{secteur.description}</p>
                      </div>

                      {/* Badge Statut V6.7 */}
                      <div className="flex-shrink-0">
                        {secteur.statut === "disponible" ? (
                          <div 
                            className="inline-flex items-center gap-1.5 md:gap-2 bg-[#10b981]/10 border border-[#10b981]/30 rounded-full px-3 md:px-4 py-1.5 md:py-2"
                          >
                            <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-[#10b981]" strokeWidth={2} />
                            <span className="text-[#10b981] text-xs md:text-sm whitespace-nowrap">
                              Disponible
                            </span>
                          </div>
                        ) : (
                          <div 
                            className="inline-flex items-center gap-1.5 md:gap-2 bg-[#A32E3A]/10 border border-[#A32E3A]/30 rounded-full px-3 md:px-4 py-1.5 md:py-2"
                          >
                            <Shield className="w-3 h-3 md:w-4 md:h-4 text-[#A32E3A]" strokeWidth={1.5} />
                            <span className="text-[#A32E3A] text-xs md:text-sm whitespace-nowrap">
                              Secteur Actif
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* CTA Conditionnel */}
                    {secteur.statut === "disponible" && (
                      <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-[#E5E7EB]">
                        <Button
                          onClick={() => handleNavigation('contact')}
                          className="w-full bg-[#10b981] hover:bg-[#059669] text-white py-2.5 md:py-3 text-sm md:text-base rounded-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                          style={{ boxShadow: 'none' }}
                        >
                          Je sécurise ce secteur
                          <TrendingUp className="ml-2 w-3 h-3 md:w-4 md:h-4" strokeWidth={2} />
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note d'Urgence */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={servicesVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 md:mt-12 text-center"
            >
              <div 
                className="inline-flex flex-col sm:flex-row items-center gap-2 md:gap-3 bg-[#D1A65E]/10 border border-[#D1A65E]/30 rounded-xl md:rounded-full px-4 md:px-6 py-3"
              >
                <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-[#D1A65E] flex-shrink-0" strokeWidth={1.5} />
                <span className="text-xs md:text-sm lg:text-base text-[#1A1A1A] text-center sm:text-left">
                  <strong className="text-[#D1A65E]">Attention :</strong> Une fois un secteur attribué, il est définitivement fermé pour 24 mois minimum.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SECTION GARANTIE CONTRACTUELLE */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-3 md:mb-4"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                Comment Fonctionne
                <br />
                <span className="text-[#D1A65E]">L'Exclusivité Territoriale</span> ?
              </h2>
            </div>

            {/* Bloc d'explication */}
            <div 
              className="rounded-2xl overflow-hidden relative p-8 md:p-12 bg-white border border-[#E5E7EB]"
              style={{
                boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="space-y-6 md:space-y-8">
                {/* BATCH 20D : Correction Centrage - grid place-items-center pour centrage parfait */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D1A65E]/10 grid place-items-center">
                    <span className="text-[#D1A65E] text-xl" style={{ fontFamily: 'Playfair Display, serif', lineHeight: '1' }}>1</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#1A1A1A] mb-2">Définition de Votre Zone</h3>
                    <p className="text-gray-700">
                      Nous définissons ensemble votre zone géographique d'intervention (ville, rayon 30km, département...).
                    </p>
                  </div>
                </div>

                {/* BATCH 20D : Correction Centrage - grid place-items-center pour centrage parfait */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D1A65E]/10 grid place-items-center">
                    <span className="text-[#D1A65E] text-xl" style={{ fontFamily: 'Playfair Display, serif', lineHeight: '1' }}>2</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#1A1A1A] mb-2">Clause Contractuelle</h3>
                    <p className="text-gray-700">
                      Nous nous engageons par contrat à <strong>ne jamais accepter un concurrent direct</strong> dans votre zone pendant toute la durée de notre collaboration.
                    </p>
                  </div>
                </div>

                {/* BATCH 20D : Correction Centrage - grid place-items-center pour centrage parfait */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D1A65E]/10 grid place-items-center">
                    <span className="text-[#D1A65E] text-xl" style={{ fontFamily: 'Playfair Display, serif', lineHeight: '1' }}>3</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#1A1A1A] mb-2">Protection Totale</h3>
                    <p className="text-gray-700">
                      Vous êtes le <strong>seul et unique client</strong> pour votre métier dans votre zone. Zéro concurrence interne. Zéro conflit d'intérêt.
                    </p>
                  </div>
                </div>

                {/* BATCH 20D : Correction Centrage - grid place-items-center pour centrage parfait */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D1A65E]/10 grid place-items-center">
                    <span className="text-[#D1A65E] text-xl" style={{ fontFamily: 'Playfair Display, serif', lineHeight: '1' }}>4</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#1A1A1A] mb-2">Stratégie SEO Unique</h3>
                    <p className="text-gray-700">
                      Votre stratégie de référencement local est <strong>100% dédiée à vous</strong>. Pas de cannibalisation. Pas de dilution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Note Légale */}
              <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
                <p className="text-sm text-gray-600 text-center">
                  Clause d'exclusivité territoriale inscrite dans nos{' '}
                  <button 
                    onClick={() => handleNavigation('cgv')}
                    className="text-[#D1A65E] hover:text-[#1A1A1A] underline transition-colors cursor-pointer"
                  >
                    Conditions Générales de Vente
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ CONTEXTUELLE - V6.7 */}
      <ConfluenceFAQ
        title="Exclusivité Territoriale : Vos Questions"
        subtitle="Tout savoir sur notre modèle unique de protection géographique."
        items={[
          {
            question: "Comment est définie ma zone d'exclusivité ?",
            answer: "C'est une discussion stratégique avec <strong>Pascal</strong>. Nous regardons votre zone de chalandise actuelle (ex: \"Villeneuve-sur-Lot + 30km\") et nous la verrouillons contractuellement."
          },
          {
            question: "Que se passe-t-il si mon concurrent direct (même métier, même zone) vous contacte ?",
            answer: "Nous lui refusons l'accès à notre service. Notre engagement, garanti par <strong>Pascal</strong>, est de dédier 100% de notre stratégie SEO locale à un seul client par métier et par zone."
          },
          {
            question: "L'exclusivité s'arrête-t-elle après les 24 mois ?",
            answer: "Non. Tant que vous restez notre partenaire (renouvellement de 12 mois), votre exclusivité est maintenue. Nous vous contacterons 3 mois avant l'échéance pour faire un bilan de performance."
          }
        ]}
      />

      {/* 5. CTA FINAL - Bandeau Noir Mat (#1A1A1A) */}
      <section 
        ref={ctaRef}
        className="relative py-20 md:py-32 px-4 overflow-hidden bg-[#1A1A1A]"
      >
        {/* Grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ctaVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Icon Shield */}
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#D1A65E]/10 border-2 border-[#D1A65E]/30 mb-6 md:mb-8">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-[#D1A65E]" strokeWidth={1.5} />
            </div>

            {/* Titre */}
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Votre Secteur est Disponible ?<br />
              <span className="text-[#D1A65E]">Sécurisez-le Avant qu'il ne Soit Trop Tard.</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12">
              Une fois attribué, un secteur est <strong className="text-white">définitivement fermé</strong> pour minimum 24 mois.<br className="hidden sm:block" />
              Ne laissez pas un concurrent prendre votre place.
            </p>

            {/* CTA Massif - Vert Performance V6.7 */}
            <Button
              onClick={() => handleNavigation('audit-gratuit')}
              className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 text-base md:text-lg lg:text-2xl rounded-xl md:rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ boxShadow: '0 12px 40px 0 rgba(16, 185, 129, 0.3)' }}
            >
              Je demande mon Audit Gratuit
              <TrendingUp className="ml-2 md:ml-4 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" strokeWidth={2} />
            </Button>

            {/* Micro-copie rassurante */}
            <p className="text-xs md:text-sm text-gray-400 mt-6 md:mt-8">
              Réponse en 24h • Vérification de disponibilité gratuite • Sans engagement initial
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer V6.2 */}
      <ConfluenceFooterV6_2 onNavigate={handleNavigation} currentPage="exclusivite" />
    </div>
  );
}