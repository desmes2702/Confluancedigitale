import { ConfluenceHeaderV6_7 } from "../components/ConfluenceHeaderV6_7";
import { ConfluenceFooterV6_2 } from "../components/ConfluenceFooterV6_2";
import { ConfluenceTeamBlock } from "../components/ConfluenceTeamBlock";
import { ConfluenceFAQ } from "../components/ConfluenceFAQ";
import { Users, ArrowRight, Award, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Button } from "../components/ui/button";

interface ConfluenceEquipePageProps {
  onNavigate?: (page: string) => void;
}

export function ConfluenceEquipePage({ onNavigate }: ConfluenceEquipePageProps = {}) {
  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header V6.7 */}
      <ConfluenceHeaderV6_7 onNavigate={handleNavigation} currentPage="qui-sommes-nous" />

      {/* S1. HERO - Notre Équipe */}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8"
              style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.06)' }}
            >
              <Users className="w-4 h-4 md:w-5 md:h-5 text-[#D1A65E]" strokeWidth={1.5} />
              <span className="text-sm md:text-base text-[#1A1A1A]">Notre Équipe</span>
            </div>

            {/* Titre */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Nos Experts.<br />
              <span className="text-[#D1A65E]">Vos Garanties.</span>
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto">
              Nous ne sommes pas une agence « random ».<br className="hidden md:block" />
              Nous sommes <span className="text-[#D1A65E]">trois experts locaux (47/46)</span> qui lient<br className="hidden md:block" />
              leurs garanties à leurs visages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* S2. TRIADE DE GARANTIES - Le Composant */}
      <section 
        ref={teamRef}
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ConfluenceTeamBlock />
          </div>
        </div>
      </section>

      {/* S3. NOTRE MISSION (ZÉRO JARGON) */}
      <section 
        ref={visionRef}
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-[#F9FAFB]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Titre */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={visionVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4 md:mb-6"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                Notre Mission<br />
                <span className="text-[#D1A65E]">(Zéro Jargon)</span>
              </h2>
            </motion.div>

            {/* Bloc Contenu V6.7 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={visionVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl md:rounded-2xl overflow-hidden relative p-6 md:p-8 lg:p-10 bg-white border border-[#E5E7EB]"
              style={{
                boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="space-y-6 md:space-y-8">
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Fournir aux <strong>TPE/PME</strong> les outils numériques (sites, SEO) qui génèrent un <span className="text-[#10b981]">ROI mesurable</span>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-6 border-t border-gray-200">
                  {/* Performance - Antoine */}
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#D1A65E]/10 mb-3 md:mb-4 mx-auto md:mx-0">
                      <Award className="w-6 h-6 md:w-7 md:h-7 text-[#D1A65E]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg md:text-xl text-[#1A1A1A] mb-2">
                      Performance
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Score <span className="text-[#D1A65E]">100/100</span> garanti sur Google
                    </p>
                  </div>

                  {/* Stratégie - Pascal */}
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#10b981]/10 mb-3 md:mb-4 mx-auto md:mx-0">
                      <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-[#10b981]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg md:text-xl text-[#1A1A1A] mb-2">
                      Stratégie
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Génère un <span className="text-[#10b981]">ROI mesurable</span>
                    </p>
                  </div>

                  {/* Autonomie - Laly */}
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#A32E3A]/10 mb-3 md:mb-4 mx-auto md:mx-0">
                      <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-[#A32E3A]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg md:text-xl text-[#1A1A1A] mb-2">
                      Autonomie
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Interface <span className="text-[#A32E3A]">Strapi</span> simple et puissante
                    </p>
                  </div>
                </div>

                {/* Message Final */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-base md:text-lg text-[#1A1A1A] text-center leading-relaxed">
                    <strong>En résumé :</strong> Nous transformons votre investissement digital en <span className="text-[#10b981]">croissance mesurable</span>, 
                    avec une <span className="text-[#D1A65E]">transparence radicale</span> et un <span className="text-[#A32E3A]">support humain</span> constant.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* S3.5. FAQ CONTEXTUELLE - V5.16 : Renforcement de la Confiance dans la Triade */}
      <ConfluenceFAQ
        title="Questions sur Notre Équipe"
        subtitle="Transparence totale sur qui nous sommes et comment nous travaillons."
        background="bg-white"
        items={[
          {
            question: "Vos statuts (Architecte UX, Conseiller RENM) sont-ils réels ?",
            answer: "Oui, absolument. Ce sont nos statuts professionnels officiels et vérifiables. <strong>Antoine</strong> est Architecte UX/UI, <strong>Pascal</strong> est Conseiller Numérique certifié (RENM), et <strong>Laly</strong> est Enseignante spécialisée. Nous lions nos garanties à notre expertise réelle pour assurer une confiance absolue."
          },
          {
            question: "Est-ce bien vous trois qui travaillez sur mon projet, ou un sous-traitant ?",
            answer: "C'est nous. Confluence Digitale est une structure « Lean » (SASU) et nous ne sous-traitons aucune étape stratégique. <strong>Antoine</strong> gère l'architecture et le design, <strong>Pascal</strong> la stratégie locale, et <strong>Laly</strong> votre formation. Vous parlez directement aux experts."
          },
          {
            question: "Comment une équipe d'experts peut-elle proposer un site à 0€ de frais de création ?",
            answer: "C'est notre modèle de « Partenariat Lean ». Nous finançons la création de votre site (notre investissement). Notre rémunération (MRR) provient du service « Sérénité & Performance » à 149€ HT/mois, qui couvre l'hébergement, la maintenance, le support et l'exclusivité."
          },
          {
            question: "Pourquoi être basé localement (47/46) est-il un avantage ?",
            answer: "Parce que nous comprenons le marché du Fumélois et du Villeneuvois. Nous ne sommes pas une agence parisienne qui cible « l'artisan ». Nous ciblons « Marc, Couvreur à Fumel ». Nous connaissons vos concurrents et nous pouvons nous déplacer pour vous former."
          }
        ]}
      />

      {/* S4. CTA FINAL - Bandeau Noir Mat */}
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
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#D1A65E]/10 border-2 border-[#D1A65E]/30 mb-6 md:mb-8">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-[#D1A65E]" strokeWidth={1.5} />
            </div>

            {/* Titre */}
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Prêt à Travailler avec<br />
              <span className="text-[#D1A65E]">une Équipe Locale</span> qui s'Engage ?
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12">
              Démarrons par un Audit Gratuit pour comprendre vos besoins.<br className="hidden sm:block" />
              <strong className="text-white">Analyse complète en 48h. 100% gratuit. Sans engagement.</strong>
            </p>

            {/* CTA */}
            <Button
              onClick={() => handleNavigation('audit-gratuit')}
              className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 text-base md:text-lg lg:text-2xl rounded-xl md:rounded-2xl hover:scale-105 transition-all duration-300"
              style={{ boxShadow: '0 12px 40px 0 rgba(16, 185, 129, 0.3)' }}
            >
              Je demande mon Audit Gratuit
              <ArrowRight className="ml-2 md:ml-4 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" strokeWidth={2} />
            </Button>

            {/* Micro-copie */}
            <p className="text-xs md:text-sm text-gray-400 mt-6 md:mt-8">
              Réponse en 24h • Sans obligation d'achat • Rapport détaillé offert
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer V6.2 */}
      <ConfluenceFooterV6_2 onNavigate={handleNavigation} currentPage="qui-sommes-nous" />
    </div>
  );
}