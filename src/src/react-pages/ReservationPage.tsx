import React from 'react';
import { DSSectionHeader } from '@/react-components/ui/DSSectionHeader';
import { DSPanel } from '@/react-components/ui/DSPanel';
import { ReservationForm } from '@/react-islands/ReservationForm';

/**
 * Page Réservation
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - Static page with ReservationForm island
 * 
 * Changes:
 * - Removed Lucide icons → Inline SVG
 * - Using ReservationForm island (client:load in Astro)
 * - Using DSPanel for process timeline
 * - Zero dependencies on Radix/CVA/Lucide
 */

// ===== INLINE SVG ICONS =====

const CircleDotIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
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
    <circle cx="12" cy="12" r="1"/>
  </svg>
);

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

const CalendarIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
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
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export default function ReservationPage() {
  const processSteps = [
    {
      number: "1",
      title: "Vous réservez",
      description: "Remplissez le formulaire pour choisir votre créneau",
      icon: <CalendarIcon className="w-8 h-8 text-[#D1A65E]" />,
    },
    {
      number: "2",
      title: "Nous confirmons",
      description: "Nous vous appelons sous 24h pour confirmer le rendez-vous",
      icon: <CircleDotIcon className="w-8 h-8 text-[#10b981]" />,
    },
    {
      number: "3",
      title: "Nous discutons",
      description: "Échange de 30-45 min pour comprendre votre projet en détail",
      icon: <CheckCircle2Icon className="w-8 h-8 text-[#A32E3A]" />,
    },
  ];

  const benefits = [
    "Échange gratuit et sans engagement",
    "Conseils personnalisés sur votre projet",
    "Estimation budgétaire indicative",
    "Réponses à toutes vos questions",
    "Proposition de solutions adaptées",
    "Devis détaillé si vous souhaitez continuer",
  ];

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
              title="Réservez votre créneau"
              subtitle="Échange gratuit de 30 minutes"
              description="Discutons de votre projet sans engagement. Nous vous accompagnons pour définir la meilleure solution."
              align="center"
              accent={true}
            />
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form Column */}
            <div>
              <div className="mb-6">
                <h2 
                  className="text-[#1A1A1A] mb-3" 
                  style={{ fontFamily: 'Playfair Display', fontSize: '2rem' }}
                >
                  Choisissez votre créneau
                </h2>
                <p className="text-gray-600">
                  Remplissez ce formulaire et nous vous appellerons pour confirmer le rendez-vous.
                </p>
              </div>

              {/* ReservationForm Island */}
              <ReservationForm />
            </div>

            {/* Info Column */}
            <div className="space-y-6">
              {/* Process Steps */}
              <div>
                <h3 
                  className="text-[#1A1A1A] mb-6" 
                  style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem' }}
                >
                  Comment ça marche ?
                </h3>
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <DSPanel key={index} variant="light" padding="md">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div 
                              className="text-[#D1A65E] font-bold" 
                              style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem' }}
                            >
                              {step.number}
                            </div>
                            <h4 className="text-[#1A1A1A] font-semibold">
                              {step.title}
                            </h4>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </DSPanel>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <DSPanel variant="accent" padding="lg">
                <h3 
                  className="text-[#1A1A1A] mb-4" 
                  style={{ fontFamily: 'Playfair Display', fontSize: '1.25rem' }}
                >
                  Ce que vous obtiendrez
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2Icon className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </DSPanel>

              {/* Availability */}
              <div className="bg-[#10b981] bg-opacity-10 rounded-xl p-6 border border-[#10b981]">
                <div className="flex items-start gap-3">
                  <CalendarIcon className="w-8 h-8 text-[#10b981] flex-shrink-0" />
                  <div>
                    <h4 className="text-[#1A1A1A] font-semibold mb-2">
                      Places limitées
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Nous limitons volontairement le nombre de rendez-vous pour garantir la qualité de nos échanges. <br/>
                      <strong>2 créneaux disponibles cette semaine</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <DSSectionHeader
              title="Questions fréquentes"
              subtitle="Réponses rapides"
              align="center"
              accent={true}
            />

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  q: "Combien de temps dure l'échange ?",
                  a: "30 à 45 minutes selon la complexité de votre projet.",
                },
                {
                  q: "C'est vraiment gratuit ?",
                  a: "Oui, totalement gratuit et sans engagement de votre part.",
                },
                {
                  q: "Dois-je préparer quelque chose ?",
                  a: "Non, venez comme vous êtes ! Un brief écrit peut aider mais n'est pas obligatoire.",
                },
                {
                  q: "Puis-je annuler ou reporter ?",
                  a: "Oui, prévenez-nous au moins 24h avant si possible.",
                },
                {
                  q: "Le rendez-vous est en visio ou physique ?",
                  a: "Au choix : visio (Google Meet/Zoom) ou dans nos bureaux à Paris.",
                },
                {
                  q: "Vais-je recevoir un devis ?",
                  a: "Si vous le souhaitez, nous vous enverrons un devis détaillé sous 48h.",
                },
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-[#F9FAFB] rounded-lg p-4"
                >
                  <h4 className="text-[#1A1A1A] font-semibold mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <DSPanel variant="elevated" padding="lg">
              <div className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <p className="text-gray-700 italic mb-4 text-lg">
                  "L'échange initial m'a vraiment rassuré. Antoine et Pascal ont pris le temps de comprendre mon projet et m'ont proposé une solution parfaitement adaptée à mon budget."
                </p>
                <div className="text-[#1A1A1A] font-semibold">
                  Sophie M. — Fondatrice de Fleurs & Co
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Site vitrine livré en 5 semaines
                </div>
              </div>
            </DSPanel>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#D1A65E] to-[#A32E3A] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 
              className="text-white mb-4" 
              style={{ 
                fontFamily: 'Playfair Display',
                fontSize: '2rem'
              }}
            >
              Encore des questions ?
            </h2>
            <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              N'hésitez pas à nous contacter directement ou à consulter notre FAQ complète.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-block bg-white text-[#1A1A1A] px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Nous contacter
              </a>
              <a 
                href="/offre#faq"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 font-semibold"
              >
                Voir la FAQ
              </a>
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
