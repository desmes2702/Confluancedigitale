import { ConfluenceHeaderV6_7 } from "../components/ConfluenceHeaderV6_7";
import { ConfluenceFooterV6_2 } from "../components/ConfluenceFooterV6_2";
import { ConfluenceFAQ } from "../components/ConfluenceFAQ";
import { ConfluenceTeamBlock } from "../components/ConfluenceTeamBlock";
import { ConfluencePageSpeedProof } from "../components/ConfluencePageSpeedProof";
import { Button } from "../components/ui/button";
import { Gauge, X, CheckCircle2, ArrowRight, ChevronRight, TrendingUp, Shield, Clock, Zap, Mouse } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ConfluenceLandingPageProps {
  onNavigate?: (page: string) => void;
}

export function ConfluenceLandingPage({ onNavigate }: ConfluenceLandingPageProps = {}) {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: contrastRef, isVisible: contrastVisible } = useScrollAnimation();
  const { ref: painRef, isVisible: painVisible } = useScrollAnimation();
  const { ref: solutionRef, isVisible: solutionVisible } = useScrollAnimation();
  const { ref: proofRef, isVisible: proofVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const handleScrollToNextSection = () => {
    const painSection = document.querySelector('section[id="pain-points"]');
    if (painSection) {
      painSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const painPoints = [
    "Site extrêmement lent (8-10 secondes de chargement)",
    "Invisible sur Google (Page 3 ou 4)",
    "Dépendance totale à votre agence web",
    "Impossible de modifier quoi que ce soit sans payer"
  ];

  const solutions = [
    {
      icon: Gauge,
      title: "Performance 100/100",
      description: "Score PageSpeed garanti. Site ultra-rapide qui convertit vraiment."
    },
    {
      icon: Shield,
      title: "Autonomie Totale",
      description: "Vous modifiez votre site quand vous voulez. Sans coder. Sans dépendre de personne."
    },
    {
      icon: Clock,
      title: "Support Illimité",
      description: "Vous n'êtes jamais seul. Support technique réactif inclus dans le MRR."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header V6.7 - AVEC animations d'entrée (stratégie "Grande Ouverture") */}
      <ConfluenceHeaderV6_7 
        onNavigate={handleNavigation} 
        currentPage="home" 
        enableEntryAnimations={true}
      />

      {/* 1. HERO - ZÉRO GAP - BATCH 19A : Responsive Padding */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-28 lg:pt-32 pb-16 px-4 overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-[#D1A65E]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* --- H1 : Text Reveal Animation --- */}
            <div className="overflow-hidden mb-6">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A]"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Devenez visible. <span className="text-[#D1A65E]">Vraiment</span> visible.
              </motion.h1>
            </div>

            {/* --- SOUS-TITRE : Text Reveal Animation --- */}
            <div className="overflow-hidden mb-12">
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Nous garantissons la performance. <strong className="text-[#D1A65E]">100/100</strong>. 
                C'est la garantie technique pour viser la première place sur Google.
              </motion.p>
            </div>

            {/* --- CTA GROUPE : Fade-in + up-drift --- */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Bouton Principal - Audit Gratuit */}
              <button
                onClick={() => handleNavigation('audit-gratuit')}
                className="px-8 py-4 rounded-full bg-[#10b981] text-white text-base lg:text-lg flex items-center justify-center gap-2
                           hover:bg-[#0e9f73] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Je demande mon Audit Gratuit 
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </button>
              
              {/* Bouton Secondaire - Découvrir notre méthode */}
              <button
                onClick={() => handleNavigation('methode')}
                className="px-8 py-4 rounded-full bg-transparent border-2 border-[#D1A65E] text-[#D1A65E] text-base lg:text-lg flex items-center justify-center gap-2
                           hover:bg-[#D1A65E] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Découvrir notre méthode 
                <ChevronRight className="w-5 h-5" strokeWidth={2} />
              </button>
            </motion.div>

            {/* --- MICRO-COPIE : Même timing que les CTAs (V4.7) --- */}
            <motion.p 
              className="mt-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Réponse sous 48h • 100% Gratuit • Sans engagement
            </motion.p>

          </div>
        </div>

        {/* Scroll Hint Animé - BATCH 23 */}
        <button
          onClick={handleScrollToNextSection}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:scale-110 transition-transform duration-300"
          aria-label="Défiler vers la section suivante"
        >
          <Mouse className="w-6 h-6 lg:w-12 lg:h-12 text-[#9CA3AF] animate-bounce" strokeWidth={1.5} />
        </button>
      </section>

      {/* 2. PAIN POINTS - V5.26 (Anciennement S3, inversé pour flux logique) */}
      <section 
        ref={painRef}
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white"
        id="pain-points"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={painVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-3 md:mb-4"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                Vous Reconnaissez-Vous <span className="text-[#A32E3A]">Ici</span> ?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {painPoints.map((pain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={painVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <div 
                    className="rounded-xl p-4 md:p-6 bg-white border border-[#E5E7EB]"
                    style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.04)' }}
                  >
                    <div className="flex items-start gap-2 md:gap-3">
                      <X className="w-4 h-4 md:w-5 md:h-5 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-gray-700 text-sm md:text-base">{pain}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PREUVE PAGESPEED - V5.26 (Anciennement S2, inversé pour flux logique) */}
      <ConfluencePageSpeedProof />

      {/* 4. LA SOLUTION */}
      <section 
        ref={solutionRef}
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={solutionVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-3 md:mb-4"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                Notre <span className="text-[#D1A65E]">Solution</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                Un site web qui performe. Vraiment. À tous les niveaux.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={solutionVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <div 
                      className="rounded-xl md:rounded-2xl p-6 md:p-8 h-full bg-white border border-[#E5E7EB] hover:border-[#D1A65E] hover:scale-[1.02] transition-all duration-300"
                      style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-[#D1A65E]/10 flex items-center justify-center mb-4 md:mb-6">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#D1A65E]" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl md:text-2xl text-[#1A1A1A] mb-2 md:mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base">
                        {solution.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5. NOUVELLE SECTION TRIADE - BATCH 48 V10 */}
      <section className="relative py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Titre de la section (H2, Playfair, centré) */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-4 text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A]"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
          >
            L'Équipe qui Garantit cette Méthode
          </motion.h2>
          
          {/* Sous-titre (Inter, centré, max-w-3xl) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-gray-700"
          >
            Derrière chaque étape, il y a un expert dédié. 
            Nous lions nos garanties à nos visages.
          </motion.p>
          
          {/* Composant Triade (corrigé avec les 3 couleurs) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ConfluenceTeamBlock />
          </motion.div>

        </div>
      </section>

      {/* 6. FAQ CONTEXTUELLE - V6.7 */}
      <ConfluenceFAQ
        title="Questions Fréquentes"
        subtitle="Tout ce que vous devez savoir avant de demander votre audit gratuit."
        items={[
          {
            question: "L'offre à 0€ de setup et 149€/mois, c'est tout inclus ?",
            answer: "Oui. Le 0€ de setup couvre la création complète. Les 149€/mois couvrent l'hébergement, la maintenance, et le support illimité de Laly. Zéro surprise, zéro frais caché."
          },
          {
            question: "Comment pouvez-vous garantir un score de 100/100 ?",
            answer: "Parce que notre architecte, <strong>Antoine</strong>, ne 'répare' pas un site lent. Il construit avec des technologies (Astro) qui sont nativement conçues pour la performance maximale. C'est une garantie technique, pas une promesse marketing."
          },
          {
            question: "Vais-je pouvoir modifier mon site moi-même sans 'tout casser' ?",
            answer: "Oui. C'est la garantie de <strong>Laly</strong>, notre Enseignante. Vous gérez votre contenu (textes, photos) via Strapi, qui est simple d'accès. Le design (la structure) est verrouillé par Antoine. Vous avez la liberté sans le risque."
          },
          {
            question: "Pourquoi un engagement de 24 mois ?",
            answer: "C'est notre garantie mutuelle. Cet engagement nous permet de financer votre site à 0€ et de vous garantir l'exclusivité territoriale de <strong>Pascal</strong> (nous refusons vos concurrents). C'est un partenariat, pas une simple prestation."
          }
        ]}
      />

      {/* 7. CTA FINAL - Bandeau Noir Mat */}
      <section 
        ref={ctaRef}
        className="relative py-12 sm:py-16 md:py-20 lg:py-32 px-4 overflow-hidden bg-[#1A1A1A]"
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
              Prêt à Devenir <span className="text-[#10b981]">Visible</span> ?<br />
              <span className="text-[#D1A65E]">Commencez par votre Audit Gratuit.</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12">
              Découvrez exactement ce qui bloque votre visibilité.<br className="hidden md:block" />
              <strong className="text-white">Analyse complète en 48h. 100% gratuit. Sans engagement.</strong>
            </p>

            {/* CTA */}
            <Button
              onClick={() => handleNavigation('audit-gratuit')}
              className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 text-base md:text-lg lg:text-2xl rounded-xl md:rounded-2xl hover:scale-105 transition-all duration-300"
              style={{ boxShadow: '0 12px 40px 0 rgba(16, 185, 129, 0.3)' }}
            >
              Je demande mon Audit Gratuit
              <ArrowRight className="ml-2 md:ml-3 lg:ml-4 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" strokeWidth={2} />
            </Button>

            {/* Micro-copie */}
            <p className="text-xs md:text-sm text-gray-400 mt-4 md:mt-6 lg:mt-8">
              Réponse en 24h • Sans obligation d'achat • Rapport détaillé offert
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer V6.2 */}
      <ConfluenceFooterV6_2 onNavigate={handleNavigation} currentPage="home" />
    </div>
  );
}