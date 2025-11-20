import { ConfluenceHeaderV6_7 } from "../components/ConfluenceHeaderV6_7";
import { ConfluenceFooterV6_2 } from "../components/ConfluenceFooterV6_2";
import { ConfluenceFAQ } from "../components/ConfluenceFAQ";
import { Button } from "../components/ui/button";
import { MapPin, TrendingUp, AlertTriangle, ExternalLink, Target } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ConfluenceConcurrentsPageProps {
  onNavigate?: (page: string) => void;
}

export function ConfluenceConcurrentsPage({ onNavigate }: ConfluenceConcurrentsPageProps = {}) {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: tableRef, isVisible: tableVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const competitorData = [
    {
      metier: "Plomberie",
      entreprise: "Plombier X",
      ville: "Fumel",
      statut: "À Auditer",
      distance: "15 km"
    },
    {
      metier: "Couverture",
      entreprise: "Couvreur Y",
      ville: "Villeneuve-sur-Lot",
      statut: "À Auditer",
      distance: "8 km"
    },
    {
      metier: "Restaurant",
      entreprise: "Hostellerie Du Rooy",
      ville: "Villeneuve-sur-Lot",
      statut: "À Auditer",
      distance: "10 km"
    },
    {
      metier: "Boulangerie",
      entreprise: "Boulangerie Artisanale Z",
      ville: "Fumel",
      statut: "À Auditer",
      distance: "12 km"
    },
    {
      metier: "Électricité",
      entreprise: "Électricien Pro",
      ville: "Villeneuve-sur-Lot",
      statut: "À Auditer",
      distance: "6 km"
    },
    {
      metier: "Menuiserie",
      entreprise: "Menuiserie Bois Noble",
      ville: "Fumel",
      statut: "À Auditer",
      distance: "18 km"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header V6.7 */}
      <ConfluenceHeaderV6_7 onNavigate={handleNavigation} currentPage="concurrents" />

      {/* 1. HERO - ZÉRO GAP - BATCH 19A : Responsive Padding */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center pt-28 lg:pt-32 pb-12 md:pb-16 px-4 overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-[#D1A65E]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#D1A65E]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8" 
              style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.06)' }}
            >
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#D1A65E]" strokeWidth={1.5} />
              <span className="text-sm md:text-base text-[#1A1A1A]">Cartographie Locale • Rayon 30km</span>
            </div>

            {/* Titre */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              L'Écosystème Digital Local :
              <br />
              <span className="text-[#D1A65E]">Qui est vraiment visible</span> autour de vous ?
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-6 md:mb-8">
              Nous cartographions la performance web dans un rayon de 30km<br className="hidden md:block" />
              <span className="text-[#D1A65E]">(Fumel & Villeneuve-sur-Lot)</span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div 
                  className="text-3xl sm:text-4xl md:text-5xl text-[#D1A65E] mb-1 md:mb-2" 
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  150+
                </div>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">Sites Analysés</p>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl sm:text-4xl md:text-5xl text-[#A32E3A] mb-1 md:mb-2" 
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  87%
                </div>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">À Auditer</p>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl sm:text-4xl md:text-5xl text-[#10b981] mb-1 md:mb-2" 
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  30km
                </div>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">Rayon d'Action</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TABLEAU - Bloc V6.7 */}
      <section 
        ref={tableRef}
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={tableVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-7xl mx-auto"
          >
            {/* Titre */}
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 bg-[#D1A65E]/10 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
                <Target className="w-4 h-4 md:w-5 md:h-5 text-[#D1A65E]" strokeWidth={1.5} />
                <span className="text-sm md:text-base text-[#D1A65E]">L'Outil SNIPER</span>
              </div>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-3 md:mb-4"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                Tableau de <span className="text-[#D1A65E]">Performance Locale</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                Découvrez qui domine réellement le digital dans votre secteur.<br className="hidden md:block" />
                <span className="text-xs md:text-sm text-gray-500">Mise à jour quotidienne • Données PageSpeed Insights</span>
              </p>
            </div>

            {/* VERSION MOBILE - Cartes */}
            <div className="md:hidden space-y-3">
              {competitorData.map((competitor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={tableVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl overflow-hidden bg-white border border-[#E5E7EB] p-4"
                  style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.04)' }}
                >
                  {/* Métier + Badge */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Métier</div>
                      <h3 className="text-[#1A1A1A]">{competitor.metier}</h3>
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-[#A32E3A]/10 rounded-full px-2.5 py-1">
                      <AlertTriangle className="w-3 h-3 text-[#A32E3A]" strokeWidth={1.5} />
                      <span className="text-[#A32E3A] text-xs">{competitor.statut}</span>
                    </div>
                  </div>

                  {/* Entreprise */}
                  <div className="mb-2">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Entreprise</div>
                    <p className="text-gray-700">{competitor.entreprise}</p>
                  </div>

                  {/* Ville + Distance */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#D1A65E]" strokeWidth={1.5} />
                      <span className="text-gray-700 text-sm">{competitor.ville}</span>
                    </div>
                    <span className="text-gray-600 text-xs">{competitor.distance}</span>
                  </div>

                  {/* Action */}
                  <Button
                    onClick={() => handleNavigation('contact')}
                    className="w-full bg-[#10b981] hover:bg-[#059669] text-white py-2 rounded-lg hover:scale-105 transition-all duration-300 text-sm"
                    style={{ boxShadow: 'none' }}
                  >
                    Auditer ce concurrent
                    <ExternalLink className="ml-2 w-4 h-4" strokeWidth={2} />
                  </Button>
                </motion.div>
              ))}
              <div className="bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] px-4 py-3 mt-4">
                <p className="text-xs text-gray-600 text-center">
                  Données actualisées quotidiennement • Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>

            {/* VERSION DESKTOP - Tableau */}
            <div className="hidden md:block overflow-x-auto">
              <div 
                className="rounded-xl md:rounded-2xl overflow-hidden bg-white border border-[#E5E7EB]"
                style={{
                  boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)',
                }}
              >
                {/* Header */}
                <div className="bg-[#F9FAFB] border-b border-[#E5E7EB] px-4 md:px-6 py-3 md:py-4">
                  <div className="grid grid-cols-12 gap-2 md:gap-4 items-center">
                    <div className="col-span-2 text-xs md:text-sm text-[#1A1A1A] uppercase tracking-wider">Métier</div>
                    <div className="col-span-3 text-xs md:text-sm text-[#1A1A1A] uppercase tracking-wider">Entreprise</div>
                    <div className="col-span-2 text-xs md:text-sm text-[#1A1A1A] uppercase tracking-wider">Ville</div>
                    <div className="col-span-2 text-xs md:text-sm text-[#1A1A1A] uppercase tracking-wider">Distance</div>
                    <div className="col-span-2 text-xs md:text-sm text-[#1A1A1A] uppercase tracking-wider">Statut</div>
                    <div className="col-span-1 text-xs md:text-sm text-[#1A1A1A] uppercase tracking-wider text-center">Action</div>
                  </div>
                </div>

                {/* Corps */}
                <div className="divide-y divide-[#E5E7EB]">
                  {competitorData.map((competitor, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={tableVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="grid grid-cols-12 gap-4 items-center px-6 py-6 hover:bg-[#F9FAFB] transition-colors duration-300"
                    >
                      {/* Métier */}
                      <div className="col-span-2">
                        <span className="text-[#1A1A1A]">{competitor.metier}</span>
                      </div>

                      {/* Entreprise */}
                      <div className="col-span-3">
                        <span className="text-gray-700">{competitor.entreprise}</span>
                      </div>

                      {/* Ville */}
                      <div className="col-span-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#D1A65E]" strokeWidth={1.5} />
                          <span className="text-gray-700">{competitor.ville}</span>
                        </div>
                      </div>

                      {/* Distance */}
                      <div className="col-span-2">
                        <span className="text-gray-600 text-sm">{competitor.distance}</span>
                      </div>

                      {/* Statut */}
                      <div className="col-span-2">
                        <div className="inline-flex items-center gap-2 bg-[#A32E3A]/10 rounded-full px-3 py-1">
                          <AlertTriangle className="w-4 h-4 text-[#A32E3A]" strokeWidth={1.5} />
                          <span className="text-[#A32E3A] text-sm">{competitor.statut}</span>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="col-span-1 text-center">
                        <Button
                          onClick={() => handleNavigation('contact')}
                          className="bg-[#10b981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 text-sm"
                          style={{ boxShadow: 'none' }}
                        >
                          <ExternalLink className="w-4 h-4" strokeWidth={2} />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="bg-[#F9FAFB] border-t border-[#E5E7EB] px-6 py-4">
                  <p className="text-sm text-gray-600 text-center">
                    Données actualisées quotidiennement via PageSpeed Insights • Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 max-w-3xl mx-auto">
                <strong className="text-[#D1A65E]">Méthodologie :</strong> Analyse automatisée des sites web professionnels dans un rayon de 30km autour de Fumel et Villeneuve-sur-Lot. 
                Score PageSpeed, vitesse de chargement, SEO technique, et accessibilité mobile. Seuls les scores inférieurs à 70/100 sont classés "À Auditer".
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2.5. FAQ CONTEXTUELLE - V6.7 */}
      <ConfluenceFAQ
        title="Questions sur la Différenciation"
        subtitle="Comprendre ce qui fait la différence entre nous et les autres solutions."
        items={[
          {
            question: "Pourquoi est-ce meilleur que WordPress, Wix ou les Pages Jaunes ?",
            answer: "Performance et Autonomie. Les autres sont lents, ce qui est pénalisé par Google. Notre stack (Astro/Strapi) garantit un score de 100/100 et une autonomie totale sans risque de 'casser' le design."
          },
          {
            question: "Comment le 0€ de setup est-il possible pour un site sur-mesure ?",
            answer: "Grâce à l'efficacité de notre usine de production. <strong>Antoine</strong> a créé une architecture si optimisée (Astro/Strapi) que nos coûts de développement et de maintenance sont très bas. Nous vous répercutons ce gain."
          },
          {
            question: "Pourquoi vous choisir plutôt qu'une grosse agence ?",
            answer: "La garantie et l'équipe. Une grosse agence vous facture cher et ne vous donne aucune garantie de performance. Nous vous garantissons le 100/100 et vous connaissez les 3 visages (<strong>Antoine</strong>, <strong>Pascal</strong>, <strong>Laly</strong>) qui travaillent pour vous."
          }
        ]}
      />

      {/* 3. CTA FINAL - Bandeau Noir Mat */}
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
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#A32E3A]/10 border-2 border-[#A32E3A]/30 mb-6 md:mb-8">
              <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-[#A32E3A]" strokeWidth={1.5} />
            </div>

            {/* Titre */}
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Vous êtes dans cette liste ?<br />
              <span className="text-[#D1A65E]">Ne laissez pas votre performance au hasard.</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12">
              Un site lent, c'est un client perdu. Un score PageSpeed faible, c'est une pénalité Google.<br className="hidden sm:block" />
              <strong className="text-white">Demandez votre audit gratuit aujourd'hui.</strong>
            </p>

            {/* CTA */}
            <Button
              onClick={() => handleNavigation('audit-gratuit')}
              className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 text-base md:text-lg lg:text-2xl rounded-xl md:rounded-2xl hover:scale-105 transition-all duration-300"
              style={{ boxShadow: '0 12px 40px 0 rgba(16, 185, 129, 0.3)' }}
            >
              Je demande mon Audit Gratuit
              <TrendingUp className="ml-2 md:ml-4 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" strokeWidth={2} />
            </Button>

            {/* Micro-copie */}
            <p className="text-xs md:text-sm text-gray-400 mt-6 md:mt-8">
              Analyse complète en 48h • Rapport détaillé • Recommandations personnalisées • 100% Gratuit
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer V6.2 */}
      <ConfluenceFooterV6_2 onNavigate={handleNavigation} currentPage="concurrents" />
    </div>
  );
}