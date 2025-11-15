import { Gauge, Shield, MapPin, Clock, ArrowRight, CheckCircle2, AlertTriangle, X, XCircle, Users, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ConfluenceHeaderV6_7 } from "../components/ConfluenceHeaderV6_7";
import { ConfluenceFooterV6_2 } from "../components/ConfluenceFooterV6_2";
import { AvailabilityBlock } from "../components/offre/AvailabilityBlock";
import { ConfluenceTeamBlock } from "../components/ConfluenceTeamBlock";
import { Button } from "../components/ui/button";

interface ConfluenceOffrePageProps {
  onNavigate?: (page: string) => void;
}

export function ConfluenceOffrePage({ onNavigate }: ConfluenceOffrePageProps = {}) {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: investmentRef, isVisible: investmentVisible } = useScrollAnimation();
  const { ref: availabilityRef, isVisible: availabilityVisible } = useScrollAnimation();
  const { ref: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation();
  const { ref: valueRef, isVisible: valueVisible } = useScrollAnimation();
  const { ref: triadeRef, isVisible: triadeVisible } = useScrollAnimation();
  const { ref: contractRef, isVisible: contractVisible } = useScrollAnimation();

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const valueCards = [
    {
      icon: Gauge,
      title: "Performance 100/100",
      description: "Score PageSpeed garanti. Site ultra-rapide qui convertit.",
      features: [
        "Vitesse de chargement < 1 seconde",
        "Optimisé pour être trouvé sur Google",
        "La garantie technique (100/100) pour viser la Page 1"
      ]
    },
    {
      icon: Shield,
      title: "Souveraineté Totale",
      description: "Votre site. Vos données. Votre autonomie complète.",
      features: [
        "Interface admin sans code",
        "Modification en temps réel",
        "Autonomie via Strapi pour gérer votre contenu"
      ]
    },
    {
      icon: MapPin,
      title: "Exclusivité Territoriale",
      description: "1 seul client par secteur. Vous êtes protégé.",
      features: [
        "Votre zone géographique protégée",
        "Aucun concurrent direct pris par notre agence",
        "Toute notre énergie pour vous faire gagner"
      ]
    },
    {
      icon: Clock,
      title: "Sérénité Garantie",
      description: "Support illimité. Maintenance incluse. Zéro surprise.",
      features: [
        "Mises à jour automatiques",
        "Support technique réactif",
        "Hébergement sécurisé inclus"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header V6.7 */}
      <ConfluenceHeaderV6_7 onNavigate={handleNavigation} currentPage="offre" />

      {/* 1. HERO - V6.8 - BATCH 26 V2 */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center pt-28 lg:pt-32 pb-12 md:pb-16 px-4 overflow-hidden"
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
            {/* V5.21 : Badge "Prix Garanti" - Cohérence avec autres pages */}
            <div 
              className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
              style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.06)' }}
            >
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-[#D1A65E]" strokeWidth={1.5} />
              <span className="text-sm md:text-base text-[#1A1A1A]">Prix Garanti</span>
            </div>

            {/* Titre Principal */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Du Devis <span style={{ color: '#A32E3A' }}>Surprise</span>
              <br />
              au <span style={{ color: '#D1A65E' }}>149€/mois</span> Garanti
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto">
              Nous ne vendons pas un site web. Nous vendons une <span style={{ color: '#10b981' }}>garantie de performance</span><br className="hidden md:block" />
              et une tranquillité d'esprit totale, pour un tarif mensuel unique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SECTION INVESTISSEMENT PARTAGÉ - NOUVEAU - V6.8 */}
      <section 
        ref={investmentRef}
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={investmentVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto"
          >
            {/* Titre Section */}
            <div className="text-center mb-8 md:mb-12">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4 md:mb-6"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                Notre <span className="text-[#D1A65E]">Investissement Partagé</span> : Une Offre Unique
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700">
                Un modèle transparent basé sur la confiance mutuelle.
              </p>
            </div>

            {/* Carte Premium */}
            <div 
              className="rounded-2xl overflow-hidden relative p-8 md:p-12 bg-white border-2 border-[#D1A65E]/30"
              style={{
                boxShadow: '0 4px 24px 0 rgba(209, 166, 94, 0.12)',
              }}
            >
              {/* Grille 2 Colonnes */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                
                {/* Colonne 1 : Notre Investissement */}
                <div>
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#D1A65E]/10 flex items-center justify-center">
                      <span className="text-[#D1A65E] text-lg md:text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>1</span>
                    </div>
                    <h3 
                      className="text-xl md:text-2xl text-[#1A1A1A]"
                      style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                    >
                      Nous finançons votre site à 100%
                    </h3>
                  </div>
                  
                  <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                    <p>
                      Un site garanti <span className="text-[#10b981]">100/100</span> représente un investissement initial 
                      (valeur <span className="text-[#D1A65E]">3 000€ HT</span>). Au lieu de vous demander cette somme d'avance, 
                      nous finançons votre projet.
                    </p>
                    <p>
                      Votre <strong>'ticket d'entrée'</strong> est de <span className="text-[#10b981]">0€</span>.
                    </p>
                  </div>
                </div>

                {/* Colonne 2 : Votre Engagement */}
                <div>
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#10b981]/10 flex items-center justify-center">
                      <span className="text-[#10b981] text-lg md:text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>2</span>
                    </div>
                    <h3 
                      className="text-xl md:text-2xl text-[#1A1A1A]"
                      style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                    >
                      Votre "Service Sérénité & Performance"
                    </h3>
                  </div>
                  
                  <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                    <p>
                      En retour, nous demandons un partenariat de <span className="text-[#A32E3A]">24 mois</span> à{' '}
                      <span className="text-[#10b981]">149€ HT/mois</span>.
                    </p>
                    <p>
                      C'est le temps minimum pour amortir notre investissement et garantir 
                      votre <strong>retour sur investissement</strong>.
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-8 md:mt-12 text-center px-2">
                <Button
                  onClick={() => handleNavigation('audit-gratuit')}
                  className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white px-6 sm:px-8 md:px-12 py-4 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl rounded-xl md:rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{ boxShadow: '0 8px 24px 0 rgba(16, 185, 129, 0.2)' }}
                >
                  <span className="inline-flex items-center gap-2">
                    Je sécurise mon Exclusivité
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={2} />
                  </span>
                </Button>

                <p className="text-xs md:text-sm text-gray-500 mt-4 md:mt-6 px-2">
                  Audit gratuit • Réponse sous 24h • Sans engagement initial
                </p>
              </div>

              {/* Note Support */}
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-[#E5E7EB] text-center px-2">
                <p className="text-xs sm:text-sm text-gray-600">
                  <strong>Support & Intervention</strong> (Zone 30km inclus). Intervention au-delà : sur devis.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SECTION TABLEAU COMPARATIF - BATCH 28 */}
      <section 
        ref={comparisonRef}
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Titre */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={comparisonVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4 md:mb-6"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                L'Agence Classique <span className="text-[#D1A65E]">vs.</span> Notre Offre
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700">
                La différence est évidente.
              </p>
            </motion.div>

            {/* Tableau Comparatif */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={comparisonVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Version Desktop (lg+) : Tableau classique */}
              <div className="hidden lg:block">
                <div 
                  className="rounded-xl md:rounded-2xl overflow-hidden bg-white border border-[#E5E7EB]"
                  style={{
                    boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <table className="w-full">
                    {/* Header */}
                    <thead className="bg-[#F9FAFB]">
                      <tr>
                        <th className="px-6 py-5 text-left text-base text-[#1A1A1A] border-b border-[#E5E7EB] w-[25%]">
                          Critère
                        </th>
                        <th className="px-6 py-5 text-left text-base text-[#1A1A1A] border-b border-[#E5E7EB] w-[37.5%]">
                          L'Agence "Classique"<br />
                          <span className="text-sm text-gray-600">(Le Problème)</span>
                        </th>
                        <th className="px-6 py-5 text-left text-base text-[#1A1A1A] border-b border-[#E5E7EB] w-[37.5%]">
                          Confluence Digitale<br />
                          <span className="text-sm text-gray-600">(La Solution)</span>
                        </th>
                      </tr>
                    </thead>
                    {/* Body */}
                    <tbody>
                      {/* Ligne 1 : Démarrage */}
                      <tr className="border-b border-[#E5E7EB] last:border-b-0">
                        <td className="px-6 py-5 text-base text-[#1A1A1A]">
                          Démarrage
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-start gap-3">
                            <X className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="text-base text-gray-700">
                              3 000€ - 5 000€ à payer d'avance.
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="text-base text-gray-700">
                              <strong>0€ d'Avance de Frais</strong> (Nous finançons votre projet).
                            </span>
                          </div>
                        </td>
                      </tr>

                      {/* Ligne 2 : Délai de Livraison */}
                      <tr className="border-b border-[#E5E7EB] last:border-b-0">
                        <td className="px-6 py-5 text-base text-[#1A1A1A]">
                          Délai de Livraison
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-start gap-3">
                            <X className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="text-base text-gray-700">
                              Des mois de délais (et de réunions).
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="text-base text-gray-700">
                              <strong>Un site prêt en quelques semaines.</strong>
                            </span>
                          </div>
                        </td>
                      </tr>

                      {/* Ligne 3 : Votre Vitesse */}
                      <tr className="border-b border-[#E5E7EB] last:border-b-0">
                        <td className="px-6 py-5 text-base text-[#1A1A1A]">
                          Votre Vitesse
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-start gap-3">
                            <X className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="text-base text-gray-700">
                              "On fera de notre mieux." (Promesse vague)
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="text-base text-gray-700">
                              <strong>Garantie 100/100 sur Google</strong> (Écrit au contrat).
                            </span>
                          </div>
                        </td>
                      </tr>

                      {/* Ligne 4 : Modifier vos Chantiers */}
                      <tr className="border-b border-[#E5E7EB] last:border-b-0">
                        <td className="px-6 py-5 text-base text-[#1A1A1A]">
                          Modifier vos Chantiers
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-start gap-3">
                            <X className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="text-base text-gray-700">
                              "Fausse autonomie" (WordPress...) : Vous avez peur de "casser le design".
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="text-base text-gray-700">
                              <strong>Autonomie Sans Casse (Strapi)</strong> : Vous gérez votre contenu, nous protégeons votre design.
                            </span>
                          </div>
                        </td>
                      </tr>

                      {/* Ligne 5 : La Maintenance */}
                      <tr className="border-b border-[#E5E7EB] last:border-b-0">
                        <td className="px-6 py-5 text-base text-[#1A1A1A]">
                          La Maintenance
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-start gap-3">
                            <X className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="text-base text-gray-700">
                              Factures surprises (Mises à jour, sécurité...).
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="text-base text-gray-700">
                              <strong>Zéro surprise</strong> (Tout est inclus).
                            </span>
                          </div>
                        </td>
                      </tr>

                      {/* Ligne 6 : Vos Concurrents */}
                      <tr className="border-b border-[#E5E7EB] last:border-b-0">
                        <td className="px-6 py-5 text-base text-[#1A1A1A]">
                          Vos Concurrents
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-start gap-3">
                            <X className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="text-base text-gray-700">
                              Votre agence travaille aussi pour eux.
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <span className="text-base text-gray-700">
                              <strong>Exclusivité totale</strong> (1 seul artisan par zone).
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Version Mobile (<lg) : Cartes empilées */}
              <div className="lg:hidden space-y-4">
                {/* Carte 1 : Démarrage */}
                <div 
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-6"
                  style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.04)' }}
                >
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Démarrage</h3>
                  
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-gray-700">
                      3 000€ - 5 000€ à payer d'avance.
                    </p>
                  </div>

                  <hr className="my-4 border-t border-[#E5E7EB]" />

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-[#1A1A1A]">
                      <strong>0€ d'Avance de Frais</strong> (Nous finançons votre projet).
                    </p>
                  </div>
                </div>

                {/* Carte 2 : Délai de Livraison */}
                <div 
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-6"
                  style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.04)' }}
                >
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Délai de Livraison</h3>
                  
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-gray-700">
                      Des mois de délais (et de réunions).
                    </p>
                  </div>

                  <hr className="my-4 border-t border-[#E5E7EB]" />

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-[#1A1A1A]">
                      <strong>Un site prêt en quelques semaines.</strong>
                    </p>
                  </div>
                </div>

                {/* Carte 3 : Votre Vitesse */}
                <div 
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-6"
                  style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.04)' }}
                >
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Votre Vitesse</h3>
                  
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-gray-700">
                      "On fera de notre mieux." (Promesse vague)
                    </p>
                  </div>

                  <hr className="my-4 border-t border-[#E5E7EB]" />

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-[#1A1A1A]">
                      <strong>Garantie 100/100 sur Google</strong> (Écrit au contrat).
                    </p>
                  </div>
                </div>

                {/* Carte 4 : Modifier vos Chantiers */}
                <div 
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-6"
                  style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.04)' }}
                >
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Modifier vos Chantiers</h3>
                  
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-gray-700">
                      "Fausse autonomie" (WordPress...) : Vous avez peur de "casser le design".
                    </p>
                  </div>

                  <hr className="my-4 border-t border-[#E5E7EB]" />

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-[#1A1A1A]">
                      <strong>Autonomie Sans Casse (Strapi)</strong> : Vous gérez votre contenu, nous protégeons votre design.
                    </p>
                  </div>
                </div>

                {/* Carte 5 : La Maintenance */}
                <div 
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-6"
                  style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.04)' }}
                >
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">La Maintenance</h3>
                  
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-gray-700">
                      Factures surprises (Mises à jour, sécurité...).
                    </p>
                  </div>

                  <hr className="my-4 border-t border-[#E5E7EB]" />

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-[#1A1A1A]">
                      <strong>Zéro surprise</strong> (Tout est inclus).
                    </p>
                  </div>
                </div>

                {/* Carte 6 : Vos Concurrents */}
                <div 
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-6"
                  style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.04)' }}
                >
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Vos Concurrents</h3>
                  
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-gray-700">
                      Votre agence travaille aussi pour eux.
                    </p>
                  </div>

                  <hr className="my-4 border-t border-[#E5E7EB]" />

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-[#1A1A1A]">
                      <strong>Exclusivité totale</strong> (1 seul artisan par zone).
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SECTION DISPONIBILITÉ PAR SECTEUR - V6.8 - BATCH 26 V2 */}
      <section 
        ref={availabilityRef}
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-[#F9FAFB]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Titre de Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={availabilityVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-8 md:mb-12"
            >
              <div 
                className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
                style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.04)' }}
              >
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#D1A65E]" strokeWidth={1.5} />
                <span className="text-sm md:text-base text-[#1A1A1A]">Exclusivité Territoriale</span>
              </div>
              
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-3 md:mb-4"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                Votre <span className="text-[#D1A65E]">Exclusivité</span> Territoriale
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                Notre offre est limitée à <span className="text-[#D1A65E]">1 artisan par métier et par zone</span>.<br className="hidden md:block" />
                Vérifiez si votre place est encore disponible.
              </p>
            </motion.div>

            {/* Bloc AvailabilityBlock */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={availabilityVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <AvailabilityBlock onNavigate={handleNavigation} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5.5. NOUVELLE SECTION TRIADE - BATCH 48 V10 */}
      <section 
        ref={triadeRef}
        className="relative py-16 md:py-24 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Titre de la section (H2, Playfair, centré) */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={triadeVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
          >
            Les Experts qui Garantissent Cette Valeur
          </motion.h2>
          
          {/* Sous-titre (Inter, centré, max-w-3xl) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={triadeVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-gray-700"
          >
            149€/mois, ce n'est pas un abonnement automatique. 
            C'est l'accès permanent à trois experts qui garantissent 
            personnellement votre réussite.
          </motion.p>
          
          {/* Composant Triade (corrigé) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={triadeVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ConfluenceTeamBlock />
          </motion.div>

        </div>
      </section>

      {/* 6. SECTION NOTRE PARTENARIAT GAGNANT-GAGNANT - V6.7.2 */}
      <section 
        ref={contractRef}
        className="relative py-16 md:py-24 px-4 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Titre Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contractVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12"
            >
              <h2 
                className="mb-4"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                Notre Partenariat : Engagement et Garantie
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700">
                Nous sommes transparents sur l'engagement. Nous sommes fiers de notre garantie.
              </p>
            </motion.div>

            {/* Grid 2 Cartes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contractVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
            >
              {/* Carte 1 : La Friction - Votre Engagement */}
              <div 
                className="rounded-xl md:rounded-2xl p-6 md:p-8 bg-white border-2 border-[#A32E3A]"
                style={{
                  boxShadow: '0 4px 24px 0 rgba(163, 46, 58, 0.08)',
                }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#A32E3A]/10 rounded-full px-4 py-2 mb-6">
                  <AlertTriangle className="w-4 h-4 text-[#A32E3A]" strokeWidth={1.5} />
                  <span className="text-sm text-[#A32E3A]">Engagement Contractuel</span>
                </div>

                {/* Titre */}
                <h3 
                  className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  Votre Engagement
                </h3>

                {/* Texte Large */}
                <div 
                  className="text-4xl md:text-5xl text-[#A32E3A] mb-6"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  24 mois
                </div>

                {/* Liste */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-base text-gray-700">
                      Engagement ferme de 24 mois
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-base text-gray-700">
                      Paiement 149€ HT/mois
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-base text-gray-700">
                      Résiliation anticipée (Indemnité max 1 990€ HT)
                    </p>
                  </div>
                </div>
              </div>

              {/* Carte 2 : La Solution - Notre Garantie */}
              <div 
                className="rounded-xl md:rounded-2xl p-6 md:p-8 bg-white border-2 border-[#10b981]"
                style={{
                  boxShadow: '0 4px 24px 0 rgba(16, 185, 129, 0.08)',
                }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#10b981]/10 rounded-full px-4 py-2 mb-6">
                  <Users className="w-4 h-4 text-[#10b981]" strokeWidth={1.5} />
                  <span className="text-sm text-[#10b981]">Notre Garantie Humaine</span>
                </div>

                {/* Titre */}
                <h3 
                  className="text-2xl md:text-3xl text-[#1A1A1A] mb-4"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  Nos Garanties
                </h3>

                {/* Texte Large */}
                <div 
                  className="text-4xl md:text-5xl text-[#10b981] mb-6"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  24 mois
                </div>

                {/* Liste */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-base text-gray-700">
                      Performance 100/100 (Garantie par Antoine)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-base text-gray-700">
                      Sérénité & Autonomie (Garantie par Laly)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-base text-gray-700">
                      Stratégie Zéro Jargon (Garantie par Pascal)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Final */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contractVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mt-12"
            >
              <Button
                onClick={() => handleNavigation('audit-gratuit')}
                className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white px-8 md:px-12 py-4 md:py-6 text-base md:text-lg lg:text-xl rounded-xl md:rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ boxShadow: '0 8px 24px 0 rgba(16, 185, 129, 0.2)' }}
              >
                <span className="inline-flex items-center gap-2">
                  J'accepte ces conditions, je demande mon audit
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer V6.2 */}
      <ConfluenceFooterV6_2 onNavigate={handleNavigation} currentPage="offre" />
    </div>
  );
}