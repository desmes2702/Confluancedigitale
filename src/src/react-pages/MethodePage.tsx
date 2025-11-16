import React from 'react';
import { DSSectionHeader } from '@/react-components/ui/DSSectionHeader';
import { DSPanel } from '@/react-components/ui/DSPanel';
import { DSButton } from '@/react-components/ui/DSButton';

/**
 * Page Méthode
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - Mostly static with optional animations
 * 
 * Changes:
 * - Removed Lucide icons (CheckCircle2, ArrowRight, Zap, Users, Target) → Inline SVG
 * - Using DSPanel for process steps
 * - Using DSSectionHeader for section titles
 * - Zero dependencies on Radix/CVA/Lucide
 * - Ready for Astro conversion
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

const ZapIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
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
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const UsersIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
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
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const TargetIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
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
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

// ===== PROCESS STEPS DATA =====

const processSteps = [
  {
    number: "01",
    title: "Découverte & Audit",
    description: "Nous commençons par un échange approfondi pour comprendre vos objectifs, votre cible et vos contraintes.",
    details: [
      "Analyse de votre projet et de vos besoins",
      "Étude de votre positionnement et concurrence",
      "Audit technique si refonte d'un site existant",
      "Définition des objectifs mesurables (KPIs)",
    ],
    duration: "1 semaine",
    icon: <TargetIcon className="w-8 h-8 text-[#D1A65E]" />,
  },
  {
    number: "02",
    title: "Stratégie & Maquettage",
    description: "Nous élaborons une stratégie digitale sur-mesure et créons les maquettes de votre site.",
    details: [
      "Arborescence et architecture de l'information",
      "Wireframes pour valider la structure",
      "Maquettes graphiques haute-fidélité",
      "Choix des technologies adaptées à vos besoins",
    ],
    duration: "1-2 semaines",
    icon: <UsersIcon className="w-8 h-8 text-[#10b981]" />,
  },
  {
    number: "03",
    title: "Développement & Tests",
    description: "Notre équipe développe votre site en respectant les standards les plus exigeants.",
    details: [
      "Développement front-end responsive",
      "Intégrations back-end et bases de données",
      "Optimisation des performances (score > 90)",
      "Tests cross-browser et cross-device",
    ],
    duration: "2-4 semaines",
    icon: <ZapIcon className="w-8 h-8 text-[#A32E3A]" />,
  },
  {
    number: "04",
    title: "Lancement & Accompagnement",
    description: "Nous mettons en ligne votre site et vous accompagnons dans sa prise en main.",
    details: [
      "Migration et mise en production",
      "Formation complète à la gestion du site",
      "Optimisation SEO et indexation",
      "Suivi post-lancement pendant 30 jours",
    ],
    duration: "1 semaine",
    icon: <CheckCircle2Icon className="w-8 h-8 text-[#D1A65E]" />,
  },
];

// ===== BENEFITS DATA =====

const benefits = [
  {
    title: "Approche collaborative",
    description: "Vous êtes impliqué à chaque étape pour garantir un résultat qui vous ressemble.",
  },
  {
    title: "Transparence totale",
    description: "Devis détaillé, planning précis, et suivi en temps réel de l'avancement.",
  },
  {
    title: "Qualité garantie",
    description: "Respect des standards web, performance optimale, et code maintenable.",
  },
  {
    title: "Livraison dans les délais",
    description: "Planning réaliste et tenu, avec points d'étape réguliers.",
  },
];

export default function MethodePage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header placeholder */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-gray-500">Header placeholder</p>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <DSSectionHeader
              title="Notre Méthode"
              subtitle="Un processus éprouvé"
              description="4 étapes clés pour transformer votre vision en un site web performant et rentable"
              align="center"
              accent={true}
            />
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <DSPanel
                key={index}
                variant={index % 2 === 0 ? "accent" : "default"}
                padding="lg"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Step number & icon */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:w-32 flex-shrink-0">
                    <div 
                      className="text-[#D1A65E]" 
                      style={{ 
                        fontFamily: 'Playfair Display',
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        lineHeight: 1
                      }}
                    >
                      {step.number}
                    </div>
                    <div className="hidden md:block">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 
                        className="text-[#1A1A1A]" 
                        style={{ fontFamily: 'Playfair Display' }}
                      >
                        {step.title}
                      </h3>
                      <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-4">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2Icon className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Arrow separator (except last) */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center mt-6">
                    <ArrowRightIcon className="w-6 h-6 text-[#D1A65E] rotate-90 md:rotate-0" />
                  </div>
                )}
              </DSPanel>
            ))}
          </div>
        </section>

        {/* Timeline Visual */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <DSSectionHeader
              title="Combien de temps ça prend ?"
              subtitle="Timeline estimée"
              description="De la première rencontre à la mise en ligne"
              align="center"
              accent={true}
            />

            <div className="max-w-4xl mx-auto mt-12">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#D1A65E] transform md:-translate-x-1/2"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  {[
                    { week: "Semaine 1", event: "Découverte & Audit", side: "left" },
                    { week: "Semaines 2-3", event: "Stratégie & Maquettage", side: "right" },
                    { week: "Semaines 4-7", event: "Développement & Tests", side: "left" },
                    { week: "Semaine 8", event: "Lancement & Formation", side: "right" },
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className={`relative flex items-center ${
                        item.side === "right" ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Dot */}
                      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#D1A65E] rounded-full transform md:-translate-x-1/2 border-4 border-white"></div>

                      {/* Content */}
                      <div className={`ml-8 md:ml-0 md:w-5/12 ${
                        item.side === "right" ? "md:mr-auto md:ml-8" : "md:ml-auto md:mr-8"
                      }`}>
                        <DSPanel variant="light" padding="md">
                          <div className="text-sm text-[#D1A65E] font-semibold mb-1">
                            {item.week}
                          </div>
                          <div className="text-[#1A1A1A]">
                            {item.event}
                          </div>
                        </DSPanel>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600">
                  <strong>Durée totale moyenne :</strong> 6 à 8 semaines pour un site vitrine complet
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Les délais peuvent varier selon la complexité du projet
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <DSSectionHeader
            title="Nos engagements"
            subtitle="Ce qui nous différencie"
            description="Une méthode éprouvée, des valeurs fortes"
            align="center"
            accent={true}
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <DSPanel key={index} variant="default" padding="md">
                <div className="flex items-start gap-3">
                  <CheckCircle2Icon className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#1A1A1A] mb-2" style={{ fontFamily: 'Playfair Display' }}>
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </DSPanel>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] text-white py-16">
          <div className="container mx-auto px-4">
            <DSSectionHeader
              title="Technologies modernes"
              subtitle="Les meilleurs outils"
              description="Nous utilisons des technologies de pointe pour garantir performance et pérennité"
              align="center"
              accent={true}
            />

            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
              {[
                {
                  category: "Front-end",
                  tools: ["React / Astro", "TypeScript", "Tailwind CSS", "Motion/React"],
                },
                {
                  category: "Back-end",
                  tools: ["Node.js", "Next.js", "Supabase", "PostgreSQL"],
                },
                {
                  category: "DevOps",
                  tools: ["Vercel", "Git/GitHub", "CI/CD", "Monitoring"],
                },
              ].map((tech, index) => (
                <div key={index}>
                  <h4 
                    className="text-[#D1A65E] mb-4" 
                    style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem' }}
                  >
                    {tech.category}
                  </h4>
                  <ul className="space-y-2">
                    {tech.tools.map((tool, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></div>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Teaser */}
        <section className="container mx-auto px-4 py-16">
          <DSSectionHeader
            title="Des résultats concrets"
            subtitle="Ils nous font confiance"
            description="Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs"
            align="center"
            accent={true}
          />

          <div className="max-w-3xl mx-auto mt-12">
            <DSPanel variant="accent" padding="lg">
              <div className="text-center">
                <div className="flex justify-center gap-12 mb-6">
                  <div>
                    <div 
                      className="text-[#10b981]" 
                      style={{ 
                        fontFamily: 'Playfair Display',
                        fontSize: '3rem',
                        fontWeight: 'bold'
                      }}
                    >
                      +150%
                    </div>
                    <p className="text-gray-600">Trafic moyen</p>
                  </div>
                  <div>
                    <div 
                      className="text-[#10b981]" 
                      style={{ 
                        fontFamily: 'Playfair Display',
                        fontSize: '3rem',
                        fontWeight: 'bold'
                      }}
                    >
                      95
                    </div>
                    <p className="text-gray-600">Score Lighthouse</p>
                  </div>
                  <div>
                    <div 
                      className="text-[#10b981]" 
                      style={{ 
                        fontFamily: 'Playfair Display',
                        fontSize: '3rem',
                        fontWeight: 'bold'
                      }}
                    >
                      -70%
                    </div>
                    <p className="text-gray-600">Temps de chargement</p>
                  </div>
                </div>
                <DSButton variant="outline" size="lg" href="/etudes-de-cas">
                  Voir toutes les études de cas
                </DSButton>
              </div>
            </DSPanel>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-[#D1A65E] to-[#A32E3A] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 
              className="text-white mb-4" 
              style={{ 
                fontFamily: 'Playfair Display',
                fontSize: '2.5rem'
              }}
            >
              Prêt à démarrer ?
            </h2>
            <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet. Nous vous proposons un échange gratuit de 30 minutes pour définir ensemble la meilleure approche.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DSButton variant="secondary" size="lg" href="/contact">
                Réserver un appel gratuit
              </DSButton>
              <DSButton variant="outline" size="lg" href="/offre" className="bg-transparent border-white text-white hover:bg-white hover:text-[#1A1A1A]">
                Voir nos offres
              </DSButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer placeholder */}
      <footer className="bg-[#1A1A1A] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">Footer placeholder</p>
        </div>
      </footer>
    </div>
  );
}
