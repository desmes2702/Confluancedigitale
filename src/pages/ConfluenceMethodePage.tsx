import { ConfluenceHeaderV6_7 } from "../components/ConfluenceHeaderV6_7";
import { ConfluenceFooterV6_2 } from "../components/ConfluenceFooterV6_2";
import { ConfluenceFAQ } from "../components/ConfluenceFAQ";
import { Search, PenTool, Code, GraduationCap, Target, Award, CheckCircle2, X, ArrowRight, TrendingUp, DollarSign, Clock, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface ConfluenceMethodePageProps {
  onNavigate?: (page: string) => void;
}

export function ConfluenceMethodePage({ onNavigate }: ConfluenceMethodePageProps = {}) {
  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const processSteps = [
    {
      icon: Search,
      number: "01",
      title: "Audit Sniper",
      subtitle: "La Découverte",
      description: "Analyse technique complète de votre secteur et de vos concurrents. Nous identifions précisément ce qui manque à votre visibilité.",
      duration: "48h"
    },
    {
      icon: PenTool,
      number: "02",
      title: "Maquette Hifi",
      subtitle: "La Vision",
      description: "Design professionnel adapté à votre métier. Vous validez le visuel avant toute production. Zéro surprise.",
      duration: "3-5 jours"
    },
    {
      icon: Code,
      number: "03",
      title: "Construction Site Ultra-Rapide",
      subtitle: "Le 100/100",
      description: "Développement avec une technologie invisible pour vous, mais qui garantit le site le plus rapide de Google. Score 100/100 garanti.",
      duration: "7-10 jours"
    },
    {
      icon: GraduationCap,
      number: "04",
      title: "Formation Autonomie",
      subtitle: "La Souveraineté",
      description: "Session de formation complète sur votre interface d'administration. Vous devenez 100% autonome, sans dépendance.",
      duration: "2h"
    },
    {
      icon: Target,
      number: "05",
      title: "Suivi Sérénité",
      subtitle: "Le MRR",
      description: "Support technique illimité, mises à jour automatiques, optimisation continue. Vous n'êtes jamais seul.",
      duration: "À vie"
    }
  ];

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header V6.7 */}
      <ConfluenceHeaderV6_7 onNavigate={handleNavigation} currentPage="methode" />

      {/* 1. HERO - ZÉRO GAP - BATCH 19A : Responsive Padding */}
      <section 
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
              <Award className="w-4 h-4 md:w-5 md:h-5 text-[#D1A65E]" strokeWidth={1.5} />
              <span className="text-sm md:text-base text-[#1A1A1A]">Méthode Éprouvée</span>
            </div>

            {/* Titre */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Du Score <span className="text-[#D1A65E]">Médiocre</span>
              <br />
              au <span className="text-[#10b981]">100/100</span> Garanti
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto">
              Notre processus en 5 étapes transforme votre présence digitale<br className="hidden md:block" />
              en <span className="text-[#D1A65E]">machine de conversion</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PROCESSUS EN 5 ÉTAPES */}
      <section 
        ref={processRef}
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Titre Section */}
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-3 md:mb-4"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                Notre <span className="text-[#D1A65E]">Processus</span> en 5 Étapes
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                De l'audit initial à votre autonomie totale.<br className="hidden md:block" />
                <span className="text-xs md:text-sm text-gray-500">Durée moyenne : 2-3 semaines</span>
              </p>
            </div>

            {/* Timeline des Étapes - Cartes V6.7 */}
            <div className="space-y-6 md:space-y-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={processVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    {/* Carte Étape V6.7 */}
                    <div 
                      className="rounded-xl md:rounded-2xl overflow-hidden relative bg-white border border-[#E5E7EB] hover:border-[#D1A65E] transition-all duration-300"
                      style={{
                        boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)',
                      }}
                    >
                      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 p-6 md:p-8">
                        {/* Icône */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-[#D1A65E]/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#D1A65E]" strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Contenu */}
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-3 md:mb-4">
                            <div>
                              <p className="text-xs md:text-sm text-[#D1A65E] uppercase tracking-wider mb-2">
                                {step.subtitle}
                              </p>
                              <h3 
                                className="text-xl md:text-2xl lg:text-3xl text-[#1A1A1A]"
                                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                              >
                                {step.title}
                              </h3>
                            </div>
                            <div className="flex-shrink-0">
                              <div className="inline-flex items-center gap-2 bg-[#10b981]/10 rounded-full px-3 md:px-4 py-1.5 md:py-2">
                                <Zap className="w-3 h-3 md:w-4 md:h-4 text-[#10b981]" strokeWidth={2} />
                                <span className="text-[#10b981] text-xs md:text-sm">{step.duration}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm md:text-base lg:text-lg text-gray-700">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. SECTION AUTONOMIE ET SUPPORT (DIRECTIVE 3) */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Titre */}
            <div className="text-center mb-8 md:mb-12">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-4 md:mb-6"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                L'Autonomie <span className="text-[#D1A65E]">ET</span> le Support
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                Vous avez <strong>le choix</strong>. À chaque instant.
              </p>
            </div>

            {/* Bloc Explicatif V6.7 */}
            <div 
              className="rounded-xl md:rounded-2xl overflow-hidden relative p-6 md:p-8 lg:p-10 bg-white border border-[#E5E7EB]"
              style={{
                boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="space-y-6 md:space-y-8">
                {/* Option 1 : Autonomie */}
                <div>
                  <div className="flex items-start gap-3 md:gap-4 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center">
                      <span className="text-[#10b981] text-lg md:text-xl">1</span>
                    </div>
                    <h3 className="text-xl md:text-2xl text-[#1A1A1A] mt-0.5">
                      Vous modifiez vous-même en <span className="text-[#10b981]">2 minutes</span>
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed ml-11 md:ml-14">
                    On vous forme à utiliser votre interface d'administration. 
                    C'est <strong>plus simple que Facebook</strong>. 
                    Vous changez vos textes, vos photos, vos tarifs, vos horaires... en 2 clics. 
                    <span className="text-[#D1A65E]"> Zéro code. Zéro dépendance.</span>
                  </p>
                </div>

                {/* Séparateur OR */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="text-base md:text-lg text-[#D1A65E]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
                    OU
                  </span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Option 2 : Support */}
                <div>
                  <div className="flex items-start gap-3 md:gap-4 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#D1A65E]/10 flex items-center justify-center">
                      <span className="text-[#D1A65E] text-lg md:text-xl">2</span>
                    </div>
                    <h3 className="text-xl md:text-2xl text-[#1A1A1A] mt-0.5">
                      Vous nous envoyez un <span className="text-[#D1A65E]">email</span>
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed ml-11 md:ml-14">
                    Vous n'avez pas le temps ? Vous bloquez sur une modification ? 
                    <strong> Envoyez-nous un email, c'est inclus dans votre support illimité.</strong> 
                    Nous le faisons pour vous sous 48h. 
                    <span className="text-[#10b981]"> Fini les factures à 150€ pour changer un numéro de téléphone.</span>
                  </p>
                </div>

                {/* Message Final */}
                <div className="pt-4 md:pt-6 border-t border-gray-200">
                  <p className="text-base md:text-lg text-[#1A1A1A] text-center leading-relaxed">
                    <strong>En résumé :</strong> Vous n'êtes <span className="text-[#A32E3A]">jamais bloqué</span>. 
                    Vous faites vous-même OU vous nous appelez. 
                    <span className="text-[#D1A65E]"> Les deux sont inclus dans les 149€/mois.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ CONTEXTUELLE - V6.7 */}
      <ConfluenceFAQ
        title="Questions sur la Méthode"
        subtitle="Tout comprendre sur notre processus de A à Z."
        items={[
          {
            question: "Combien de temps faut-il entre l'audit et la mise en ligne ?",
            answer: "Notre processus est rapide. Après l'Audit Sniper (48h), la phase de construction et de formation prend en moyenne 2 à 3 semaines, en fonction de la vitesse à laquelle vous fournissez vos contenus."
          },
          {
            question: "La formation de 2h est-elle suffisante si je suis débutant ?",
            answer: "Absolument. <strong>Laly</strong> est une Enseignante spécialisée, sa pédagogie est conçue pour les débutants. De plus, le support est illimité : si vous avez un doute, elle est là."
          },
          {
            question: "Dois-je fournir tous les textes et photos ?",
            answer: "Vous fournissez les contenus métier (vos photos de chantiers, vos textes de présentation). Notre équipe (<strong>Pascal</strong> et <strong>Antoine</strong>) s'occupe de les structurer et de les optimiser pour le SEO et la conversion."
          },
          {
            question: "L'Audit Sniper, c'est un rapport technique incompréhensible ?",
            answer: "Non. C'est un plan d'action 'Zéro Jargon'. <strong>Pascal</strong> (Conseiller Numérique RENM) vous montre simplement où sont vos clients et comment les attirer, sans jargon technique."
          }
        ]}
      />

      {/* 5. CTA FINAL - Bandeau Noir Mat */}
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
              <Award className="w-8 h-8 md:w-10 md:h-10 text-[#D1A65E]" strokeWidth={1.5} />
            </div>

            {/* Titre */}
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Prêt à Passer au <span className="text-[#10b981]">100/100</span> ?<br />
              <span className="text-[#D1A65E]">Commencez par votre Audit Gratuit.</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12">
              Découvrez exactement ce qui bloque votre visibilité.<br className="hidden sm:block" />
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
      <ConfluenceFooterV6_2 onNavigate={handleNavigation} currentPage="methode" />
    </div>
  );
}