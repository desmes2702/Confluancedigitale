import React from 'react';
import { DSSectionHeader } from '@/react-components/ui/DSSectionHeader';
import { DSButton } from '@/react-components/ui/DSButton';

// Islands imports - will be used with client:load/client:visible in Astro
import { HeroAnimation } from '@/react-islands/HeroAnimation';
import { PainPointsSection } from '@/react-islands/PainPointsSection';
import { PageSpeedProof } from '@/react-islands/PageSpeedProof';
import { SolutionsSection } from '@/react-islands/SolutionsSection';
import { TeamBlock } from '@/react-islands/TeamBlock';
import { FAQ } from '@/react-islands/FAQ';

/**
 * Landing Page (Home Page)
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - Complex landing with 6 islands
 * 
 * Islands:
 * - HeroAnimation (client:load) - Hero avec animations
 * - PainPointsSection (client:visible) - Pain points + solutions
 * - PageSpeedProof (client:visible) - Performance proof
 * - SolutionsSection (client:visible) - Solutions cards
 * - TeamBlock (client:visible) - Team triad
 * - FAQ (client:visible) - Questions fréquentes
 * 
 * Changes:
 * - Removed all Lucide icons → Inline SVG or icons in islands
 * - Using 6 React islands for interactivity
 * - Zero dependencies on Radix/CVA/Lucide
 * - Ready for Astro conversion
 * 
 * Astro conversion:
 * <HeroAnimation client:load />
 * <PainPointsSection client:visible />
 * <PageSpeedProof client:visible />
 * <SolutionsSection client:visible />
 * <TeamBlock client:visible />
 * <FAQ client:visible />
 */

// ===== INLINE SVG ICONS =====

const CheckCircle2Icon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const ArrowRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header placeholder - will be replaced by Astro Header component */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-gray-500">Header placeholder (transparent)</p>
        </div>
      </header>

      <main>
        {/* Hero Section - Island 1 */}
        <HeroAnimation />

        {/* Pain Points + Solutions Section - Island 2 */}
        <PainPointsSection />

        {/* Performance Proof Section - Island 3 */}
        <PageSpeedProof />

        {/* Solutions Section - Island 4 */}
        <SolutionsSection />

        {/* Social Proof / Stats */}
        <section className="py-20 bg-gradient-to-br from-[#D1A65E] to-[#A32E3A] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-white mb-4"
                style={{
                  fontFamily: 'Playfair Display',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                }}
              >
                Ils nous font confiance
              </h2>
              <p className="text-white text-opacity-90 text-lg max-w-2xl mx-auto">
                Des résultats mesurables pour des clients satisfaits
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {[
                { metric: '+150%', label: 'Trafic moyen' },
                { metric: '95+', label: 'Score Lighthouse' },
                { metric: '-70%', label: 'Temps de chargement' },
                { metric: '100%', label: 'Clients satisfaits' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-white mb-2"
                    style={{
                      fontFamily: 'Playfair Display',
                      fontSize: '3rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {stat.metric}
                  </div>
                  <div className="text-white text-opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <p className="text-white text-lg italic mb-4">
                  "Site livré en 5 semaines, score de 97 sur Lighthouse, et +180% de trafic en 3 mois. L'équipe de Confluence Digitale est ultra-professionnelle et réactive."
                </p>
                <div className="font-semibold text-white">
                  Sophie Martin — Fondatrice de Fleurs & Co
                </div>
                <div className="text-white text-opacity-70 text-sm mt-1">
                  Site e-commerce · 8 semaines
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Island 5 */}
        <TeamBlock />

        {/* Process Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <DSSectionHeader
              title="Notre processus en 4 étapes"
              subtitle="Simple et efficace"
              description="De la première rencontre à la mise en ligne, nous vous accompagnons à chaque étape"
              align="center"
              accent={true}
            />

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12">
              {[
                {
                  number: '01',
                  title: 'Découverte',
                  description: 'Échange gratuit pour comprendre vos besoins et objectifs',
                },
                {
                  number: '02',
                  title: 'Conception',
                  description: 'Maquettes et validation de la structure avant développement',
                },
                {
                  number: '03',
                  title: 'Développement',
                  description: 'Création de votre site avec suivi hebdomadaire de l\'avancement',
                },
                {
                  number: '04',
                  title: 'Lancement',
                  description: 'Mise en ligne, formation et suivi pendant 30 jours',
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-[#D1A65E] mb-4"
                    style={{
                      fontFamily: 'Playfair Display',
                      fontSize: '3rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-[#1A1A1A] mb-3"
                    style={{ fontFamily: 'Playfair Display' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <DSButton variant="outline" size="lg" href="/methode">
                En savoir plus sur notre méthode
              </DSButton>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-[#F9FAFB]">
          <div className="container mx-auto px-4">
            <DSSectionHeader
              title="Pourquoi choisir Confluence Digitale ?"
              subtitle="Ce qui nous différencie"
              description="Nous ne sommes pas une agence comme les autres"
              align="center"
              accent={true}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
              {[
                {
                  title: 'Transparence totale',
                  description: 'Devis détaillé, planning précis, aucune surprise. Vous savez exactement ce que vous payez.',
                },
                {
                  title: 'Performance garantie',
                  description: 'Score Lighthouse > 90 ou on vous rembourse. Nous nous engageons sur les résultats.',
                },
                {
                  title: 'Accompagnement humain',
                  description: 'Une équipe dédiée, disponible et réactive. Nous répondons en moins de 24h.',
                },
                {
                  title: 'Technologies modernes',
                  description: 'React, Astro, TypeScript. Votre site est construit avec les meilleurs outils du marché.',
                },
                {
                  title: 'Formation incluse',
                  description: 'Vous apprenez à gérer votre site en toute autonomie. Support 30 jours offert.',
                },
                {
                  title: 'Prix juste',
                  description: 'Pas de surcoût, pas de frais cachés. Qualité professionnelle à prix accessible.',
                },
              ].map((reason, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2Icon className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4
                        className="text-[#1A1A1A] mb-2"
                        style={{ fontFamily: 'Playfair Display' }}
                      >
                        {reason.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Island 6 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <DSSectionHeader
              title="Questions fréquentes"
              subtitle="Tout ce que vous devez savoir"
              description="Vous avez une question ? Nous avons la réponse"
              align="center"
              accent={true}
            />

            <div className="mt-12">
              <FAQ />
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Vous ne trouvez pas la réponse à votre question ?
              </p>
              <DSButton variant="outline" size="lg" href="/contact">
                Contactez-nous
              </DSButton>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-white mb-6"
                style={{
                  fontFamily: 'Playfair Display',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                }}
              >
                Prêt à transformer votre présence en ligne ?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Commencez par un audit gratuit de votre site actuel ou réservez un appel découverte de 30 minutes. Sans engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <DSButton
                  variant="primary"
                  size="lg"
                  href="/audit-gratuit"
                  className="inline-flex items-center gap-2"
                >
                  Audit gratuit de mon site
                  <ArrowRightIcon className="w-5 h-5" />
                </DSButton>
                <DSButton
                  variant="outline"
                  size="lg"
                  href="/reservation"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-[#1A1A1A]"
                >
                  Réserver un appel gratuit
                </DSButton>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="w-4 h-4 text-[#10b981]" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="w-4 h-4 text-[#10b981]" />
                  <span>Réponse sous 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="w-4 h-4 text-[#10b981]" />
                  <span>Devis gratuit</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer placeholder - will be replaced by Astro Footer component */}
      <footer className="bg-[#1A1A1A] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">Footer placeholder</p>
        </div>
      </footer>
    </div>
  );
}
