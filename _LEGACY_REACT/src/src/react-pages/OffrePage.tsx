import React from 'react';
import { DSSectionHeader } from '@/react-components/ui/DSSectionHeader';
import { DSCard } from '@/react-components/ui/DSCard';
import { DSBadge } from '@/react-components/ui/DSBadge';
import { DSButton } from '@/react-components/ui/DSButton';

/**
 * Page Offre
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - Mostly static with optional island
 * 
 * Changes:
 * - Removed Lucide icons (CheckCircle, X, TrendingUp, Zap, Shield) → Inline SVG
 * - Using DSCard for pricing cards
 * - Using DSBadge for feature highlights
 * - Using DSButton for CTAs
 * - Zero dependencies on Radix/CVA/Lucide
 * - Ready for Astro conversion
 */

// ===== INLINE SVG ICONS =====

const CheckCircleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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

const XIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const TrendingUpIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
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
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

const ZapIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
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

const ShieldIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
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
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

// ===== PRICING DATA =====

const pricingPlans = [
  {
    name: "Essentiel",
    price: "2 500€",
    description: "Pour les TPE qui démarrent",
    badge: "Populaire",
    badgeVariant: "success" as const,
    features: [
      { text: "Site vitrine 5 pages", included: true },
      { text: "Design responsive", included: true },
      { text: "Optimisation SEO basique", included: true },
      { text: "Formulaire de contact", included: true },
      { text: "Formation 1h", included: true },
      { text: "Hébergement 1 an inclus", included: true },
      { text: "Blog intégré", included: false },
      { text: "E-commerce", included: false },
      { text: "Maintenance", included: false },
    ],
    cta: "Choisir Essentiel",
    variant: "default" as const,
  },
  {
    name: "Performance",
    price: "4 500€",
    description: "Pour les PME ambitieuses",
    badge: "Recommandé",
    badgeVariant: "gold" as const,
    features: [
      { text: "Site vitrine 10 pages", included: true },
      { text: "Design sur-mesure", included: true },
      { text: "Optimisation SEO avancée", included: true },
      { text: "Blog intégré", included: true },
      { text: "Animations personnalisées", included: true },
      { text: "Formation 3h", included: true },
      { text: "Hébergement 1 an inclus", included: true },
      { text: "Maintenance 3 mois offerte", included: true },
      { text: "E-commerce", included: false },
    ],
    cta: "Choisir Performance",
    variant: "elevated" as const,
  },
  {
    name: "Premium",
    price: "Sur devis",
    description: "Pour les projets complexes",
    badge: "Sur-mesure",
    badgeVariant: "default" as const,
    features: [
      { text: "Site illimité", included: true },
      { text: "Design unique", included: true },
      { text: "E-commerce complet", included: true },
      { text: "Espace membre", included: true },
      { text: "API personnalisées", included: true },
      { text: "Audit de performance", included: true },
      { text: "Formation complète", included: true },
      { text: "Maintenance 1 an incluse", included: true },
      { text: "Support prioritaire", included: true },
    ],
    cta: "Discutons de votre projet",
    variant: "bordered" as const,
  },
];

// ===== BENEFITS DATA =====

const benefits = [
  {
    icon: <TrendingUpIcon className="w-8 h-8 text-[#10b981]" />,
    title: "ROI mesurable",
    description: "Chaque euro investi génère un retour sur investissement quantifiable. Nous suivons vos métriques clés.",
  },
  {
    icon: <ZapIcon className="w-8 h-8 text-[#D1A65E]" />,
    title: "Performance garantie",
    description: "Sites ultra-rapides avec un score Lighthouse > 90. Vos visiteurs ne partiront plus par impatience.",
  },
  {
    icon: <ShieldIcon className="w-8 h-8 text-[#A32E3A]" />,
    title: "Sécurité maximale",
    description: "SSL, sauvegardes quotidiennes, protection anti-spam. Votre site est entre de bonnes mains.",
  },
];

export default function OffrePage() {
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
              title="Nos Offres"
              subtitle="Transparence et simplicité"
              description="Des solutions web adaptées à chaque besoin et chaque budget. Pas de surprise, pas de frais cachés."
              align="center"
              accent={true}
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <DSCard
                key={index}
                variant={plan.variant}
                hover={true}
                className="flex flex-col"
              >
                <DSCard.Header>
                  <div className="flex items-center justify-between mb-2">
                    <h3 
                      className="text-[#1A1A1A]" 
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {plan.name}
                    </h3>
                    <DSBadge variant={plan.badgeVariant} size="sm">
                      {plan.badge}
                    </DSBadge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span 
                      className="text-[#D1A65E]" 
                      style={{ 
                        fontFamily: 'Playfair Display',
                        fontSize: '2.5rem',
                        fontWeight: 'bold'
                      }}
                    >
                      {plan.price}
                    </span>
                    {plan.price !== "Sur devis" && (
                      <span className="text-gray-500 text-sm">HT</span>
                    )}
                  </div>
                </DSCard.Header>

                <DSCard.Body>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <CheckCircleIcon className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                        ) : (
                          <XIcon className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span 
                          className={
                            feature.included 
                              ? "text-gray-700" 
                              : "text-gray-400 line-through"
                          }
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </DSCard.Body>

                <DSCard.Footer>
                  <DSButton
                    variant={plan.variant === "elevated" ? "primary" : "outline"}
                    size="lg"
                    href="/contact"
                    className="w-full"
                  >
                    {plan.cta}
                  </DSButton>
                </DSCard.Footer>
              </DSCard>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Tous nos tarifs incluent la TVA à 20%
            </p>
            <p className="text-gray-600 text-sm">
              Paiement en 3 fois sans frais disponible pour tous les forfaits
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <DSSectionHeader
              title="Pourquoi nous choisir ?"
              subtitle="Nos engagements"
              description="Des prestations qui font la différence pour votre business"
              align="center"
              accent={true}
            />

            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-[#F9FAFB] transition-colors duration-300"
                >
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 
                    className="text-[#1A1A1A] mb-3" 
                    style={{ fontFamily: 'Playfair Display' }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="container mx-auto px-4 py-16">
          <DSSectionHeader
            title="Ce que comprend chaque prestation"
            subtitle="Inclus dans tous nos forfaits"
            align="center"
            accent={true}
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              "Design responsive adapté à tous les écrans",
              "Optimisation des performances (score > 90)",
              "Sécurisation SSL et certificats",
              "Conformité RGPD et accessibilité",
              "Formation à la gestion de votre site",
              "Support technique pendant 30 jours",
              "Référencement naturel (SEO) de base",
              "Intégration avec vos outils existants",
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm"
              >
                <CheckCircleIcon className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] text-white py-16">
          <div className="container mx-auto px-4">
            <DSSectionHeader
              title="Notre processus"
              subtitle="4 étapes simples"
              description="De la prise de contact à la mise en ligne, tout est pensé pour votre sérénité"
              align="center"
              accent={true}
            />

            <div className="grid md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Découverte",
                  description: "Échange gratuit de 30 min pour comprendre vos besoins",
                },
                {
                  step: "02",
                  title: "Proposition",
                  description: "Devis détaillé sous 48h avec mockups si besoin",
                },
                {
                  step: "03",
                  title: "Réalisation",
                  description: "Développement en 4-6 semaines avec validations régulières",
                },
                {
                  step: "04",
                  title: "Lancement",
                  description: "Mise en ligne, formation et suivi pendant 30 jours",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-[#D1A65E] mb-4" 
                    style={{ 
                      fontFamily: 'Playfair Display',
                      fontSize: '3rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 
                    className="text-white mb-2" 
                    style={{ fontFamily: 'Playfair Display' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Availability Block */}
        <section className="container mx-auto px-4 py-16">
          <DSCard variant="elevated" className="max-w-3xl mx-auto text-center">
            <DSCard.Body>
              <div className="flex flex-col items-center gap-4">
                <DSBadge variant="success" size="lg">
                  📅 Disponibilité
                </DSBadge>
                <h3 
                  className="text-[#1A1A1A]" 
                  style={{ fontFamily: 'Playfair Display', fontSize: '2rem' }}
                >
                  Places limitées
                </h3>
                <p className="text-gray-600 max-w-xl">
                  Nous accompagnons seulement <strong>3 nouveaux clients par mois</strong> pour garantir la qualité de nos prestations. <br/>
                  Actuellement : <DSBadge variant="warning" size="sm">2 places disponibles en décembre</DSBadge>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <DSButton variant="primary" size="lg" href="/reservation">
                    Réserver ma place
                  </DSButton>
                  <DSButton variant="outline" size="lg" href="/contact">
                    Poser une question
                  </DSButton>
                </div>
              </div>
            </DSCard.Body>
          </DSCard>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <DSSectionHeader
              title="Questions fréquentes"
              subtitle="Tout ce que vous devez savoir"
              align="center"
              accent={true}
            />

            <div className="space-y-6 mt-12">
              {[
                {
                  q: "Quels sont les délais de réalisation ?",
                  a: "Comptez 4 à 6 semaines pour un site vitrine classique, 8 à 12 semaines pour un projet e-commerce. Les délais précis sont indiqués dans votre devis personnalisé.",
                },
                {
                  q: "Puis-je modifier mon site moi-même après la livraison ?",
                  a: "Oui ! Nous utilisons des technologies modernes et nous vous formons à la gestion de votre contenu. Vous pourrez modifier textes, images et ajouter des pages en toute autonomie.",
                },
                {
                  q: "Qu'est-ce qui est inclus dans la maintenance ?",
                  a: "La maintenance comprend : mises à jour de sécurité, sauvegardes quotidiennes, monitoring de performance, corrections de bugs, et support technique prioritaire.",
                },
                {
                  q: "Proposez-vous des facilités de paiement ?",
                  a: "Oui, paiement en 3 fois sans frais pour tous nos forfaits. Nous acceptons également les virements bancaires échelonnés pour les projets > 5000€.",
                },
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-[#F9FAFB] rounded-xl p-6 border border-gray-200"
                >
                  <h4 
                    className="text-[#1A1A1A] mb-3" 
                    style={{ fontFamily: 'Playfair Display' }}
                  >
                    {faq.q}
                  </h4>
                  <p className="text-gray-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
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
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Parlons de votre projet dès aujourd'hui. Échange gratuit de 30 minutes pour définir ensemble la meilleure solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DSButton variant="secondary" size="lg" href="/contact">
                Discutons de votre projet
              </DSButton>
              <DSButton variant="outline" size="lg" href="/audit-gratuit" className="bg-transparent border-white text-white hover:bg-white hover:text-[#1A1A1A]">
                Commencer par un audit gratuit
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
