import { ConfluenceHeaderV6_7 } from "../components/ConfluenceHeaderV6_7";
import { ConfluenceFooterV6_2 } from "../components/ConfluenceFooterV6_2";
import { ConfluenceTeamBlock } from "../components/ConfluenceTeamBlock";
import { Button } from "../components/ui/button";
import { TrendingUp, Gauge, ArrowRight, Target, Zap, CheckCircle2, X, MessageSquare, PhoneCall, CalendarCheck } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ConfluenceEtudesDeCasPageProps {
  onNavigate?: (page: string) => void;
}

export function ConfluenceEtudesDeCasPage({ onNavigate }: ConfluenceEtudesDeCasPageProps = {}) {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: casesRef, isVisible: casesVisible } = useScrollAnimation();
  const { ref: triadeRef, isVisible: triadeVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const caseStudies = [
    {
      id: "couvreur-lot-et-garonne",
      sector: "Artisan",
      title: "Couvreur - Lot-et-Garonne",
      notifIcon: "message" as const,
      notifTitle: "Nouveau Devis (via Site Web)",
      notifMessage: "Bonjour, j'aurais besoin d'un devis pour refaire ma toiture à Fumel...",
      conversion: "+45 devis/mois",
      performance: "Score 100/100"
    },
    {
      id: "plombier-villeneuve",
      sector: "Artisan",
      title: "Plombier - Villeneuve-sur-Lot",
      notifIcon: "phone" as const,
      notifTitle: "Appel Entrant (via Google Local)",
      notifMessage: "Le prospect a cliqué pour appeler (Urgence fuite d'eau Villeneuve-sur-Lot).",
      conversion: "+38 appels/mois",
      performance: "Score 100/100"
    },
    {
      id: "restaurant-agen",
      sector: "Restaurant",
      title: "Restaurant - Agen",
      notifIcon: "calendar" as const,
      notifTitle: "Nouvelle Réservation (via Site Web)",
      notifMessage: "Table pour 4 personnes, Samedi 19h. Nom: Dupont.",
      conversion: "+120 réservations/mois",
      performance: "Score 100/100"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header V6.7 */}
      <ConfluenceHeaderV6_7 onNavigate={handleNavigation} currentPage="etudes-de-cas" />

      {/* 1. HERO - ZÉRO GAP - BATCH 19A : Responsive Padding */}
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
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
              style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.06)' }}
            >
              <Target className="w-4 h-4 md:w-5 md:h-5 text-[#10b981]" strokeWidth={1.5} />
              <span className="text-sm md:text-base text-[#1A1A1A]">Résultats Prouvés</span>
            </div>

            {/* Titre */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Ils Sont Passés du <span className="text-[#A32E3A]">Invisible</span>
              <br />
              au <span className="text-[#10b981]">Visible sur Google</span>
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto">
              Découvrez comment nos clients TPE/PME ont transformé leur visibilité<br className="hidden md:block" />
              en <span className="text-[#D1A65E]">moins de 14 jours</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. ÉTUDES DE CAS - Nouvelles Cartes "Résultat Tangible" V6.7.2 */}
      <section 
        ref={casesRef}
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Grid 3 colonnes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={casesVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="group"
                >
                  {/* Carte Résultat Tangible V6.7.2 */}
                  <div 
                    className="rounded-2xl p-6 md:p-8 bg-white border border-[#E5E7EB] hover:border-[#D1A65E] transition-all duration-300 hover:scale-[1.02] h-full flex flex-col"
                    style={{
                      boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    {/* Badge Secteur */}
                    <div className="inline-flex items-center gap-2 bg-[#D1A65E]/10 rounded-full px-3 py-1.5 mb-4 self-start">
                      <span className="text-xs md:text-sm text-[#D1A65E]">{study.sector}</span>
                    </div>

                    {/* Titre */}
                    <h3 
                      className="text-xl md:text-2xl text-[#1A1A1A] mb-6"
                      style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                    >
                      {study.title}
                    </h3>

                    {/* Mock-up Smartphone avec Notification */}
                    <div className="mb-6 flex-grow flex items-center justify-center">
                      {/* Container Smartphone */}
                      <div 
                        className="relative w-full max-w-[280px] rounded-3xl border-4 border-gray-200 bg-gray-50 p-4"
                        style={{ aspectRatio: '9/16' }}
                      >
                        {/* Encoche (notch) */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-200 rounded-b-2xl"></div>
                        
                        {/* Écran avec notification */}
                        <div className="relative z-10 h-full flex flex-col justify-start pt-8">
                          {/* Notification de Message/Devis */}
                          <div 
                            className="bg-white rounded-2xl p-4 border border-[#E5E7EB] shadow-lg"
                            style={{ boxShadow: '0 8px 24px 0 rgba(0, 0, 0, 0.12)' }}
                          >
                            {/* Header Notification */}
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
                                {study.notifIcon === "message" && <MessageSquare className="w-5 h-5 text-[#10b981]" strokeWidth={2} />}
                                {study.notifIcon === "phone" && <PhoneCall className="w-5 h-5 text-[#10b981]" strokeWidth={2} />}
                                {study.notifIcon === "calendar" && <CalendarCheck className="w-5 h-5 text-[#10b981]" strokeWidth={2} />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs text-[#10b981] truncate">
                                  {study.notifTitle}
                                </p>
                                <p className="text-[10px] text-gray-500">Il y a 2 minutes</p>
                              </div>
                            </div>
                            {/* Aperçu Message */}
                            <p className="text-xs text-gray-700 line-clamp-3">
                              {study.notifMessage}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Métriques (La Preuve) */}
                    <div className="grid grid-cols-2 gap-4 mt-6 mb-6">
                      {/* Preuve 1 : Conversion */}
                      <div>
                        <p className="text-xs md:text-sm text-gray-700 mb-1">Conversion (Résultat)</p>
                        <div 
                          className="text-lg md:text-xl text-[#10b981]"
                          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                        >
                          {study.conversion}
                        </div>
                      </div>
                      {/* Preuve 2 : Performance */}
                      <div>
                        <p className="text-xs md:text-sm text-gray-700 mb-1">Performance (Cause)</p>
                        <div 
                          className="text-lg md:text-xl text-[#10b981]"
                          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                        >
                          {study.performance}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <button 
                      className="inline-flex items-center gap-2 text-[#D1A65E] hover:text-[#1A1A1A] transition-colors duration-200 mt-auto"
                      onClick={() => handleNavigation('audit-gratuit')}
                    >
                      <span className="text-sm md:text-base">Voir l'étude complète</span>
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3.5. SECTION TRIADE - BATCH 48 V10 - V5.20 : Fix "Zéro Bruit" */}
      <section 
        ref={triadeRef}
        className="relative py-16 md:py-24 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Titre de la section (H2, Playfair, centré) - V5.20 : Taille DS conforme */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-4 text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A]"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
          >
            L'Équipe Derrière Ces Résultats
          </motion.h2>
          
          {/* Sous-titre (Inter, centré, max-w-3xl) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-gray-700"
          >
            Ces clients ont tous bénéficié de la même équipe d'experts.
            Trois garanties personnelles pour des résultats mesurables et une
            autonomie réelle.
          </motion.p>
          
          {/* Composant Triade - V5.20 : Variant "cards-only" (sans H2/sous-titre redondants) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ConfluenceTeamBlock variant="cards-only" />
          </motion.div>

        </div>
      </section>

      {/* 4. CTA FINAL - Bandeau Noir Mat */}
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
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#10b981]/10 border-2 border-[#10b981]/30 mb-6 md:mb-8">
              <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-[#10b981]" strokeWidth={1.5} />
            </div>

            {/* Titre */}
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Prêt à Obtenir les Mêmes <span className="text-[#10b981]">Résultats</span> ?<br />
              <span className="text-[#D1A65E]">Commencez par votre Audit Gratuit.</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12">
              Découvrez votre potentiel de croissance inexploité.<br className="hidden sm:block" />
              <strong className="text-white">Analyse complète en 48h. 100% gratuit. Sans engagement.</strong>
            </p>

            {/* CTA */}
            <Button
              onClick={() => handleNavigation('audit-gratuit')}
              className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white px-6 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 text-sm md:text-base lg:text-xl rounded-xl md:rounded-2xl hover:scale-105 transition-all duration-300"
              style={{ boxShadow: '0 12px 40px 0 rgba(16, 185, 129, 0.3)' }}
            >
              <span className="hidden md:inline">Je veux ces résultats pour mon entreprise</span>
              <span className="md:hidden">Je demande mon Audit</span>
              <ArrowRight className="ml-2 md:ml-4 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" strokeWidth={2} />
            </Button>

            {/* Micro-copie */}
            <p className="text-xs md:text-sm text-gray-400 mt-6 md:mt-8">
              Réponse en 24h • Rapport détaillé offert • Sans obligation d'achat
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer V6.2 */}
      <ConfluenceFooterV6_2 onNavigate={handleNavigation} currentPage="etudes-de-cas" />
    </div>
  );
}