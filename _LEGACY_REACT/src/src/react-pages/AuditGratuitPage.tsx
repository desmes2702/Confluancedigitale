import React from 'react';
import { DSSectionHeader } from '@/react-components/ui/DSSectionHeader';
import { DSCard } from '@/react-components/ui/DSCard';
import { DSBadge } from '@/react-components/ui/DSBadge';
import { AuditForm } from '@/react-islands/AuditForm';

/**
 * Page Audit Gratuit
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - Complex page with 3 nested islands
 * 
 * Changes:
 * - Removed Lucide icons → Inline SVG
 * - Using AuditForm island (orchestrates ArcGauge + AuditResults)
 * - Using DSCard for benefits
 * - Zero dependencies on Radix/CVA/Lucide
 * 
 * Islands architecture:
 * - AuditForm (parent island, manages state)
 *   ├─ ArcGauge (child island, animated gauge)
 *   └─ AuditResults (child island, results display)
 */

// ===== INLINE SVG ICONS =====

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

const ShieldIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
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

const TrendingUpIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
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

export default function AuditGratuitPage() {
  const benefits = [
    {
      icon: <ZapIcon className="w-8 h-8 text-[#D1A65E]" />,
      title: 'Analyse instantanée',
      description: 'Résultats en quelques secondes grâce à notre outil automatisé.',
    },
    {
      icon: <ShieldIcon className="w-8 h-8 text-[#10b981]" />,
      title: '100% gratuit',
      description: 'Sans engagement, sans carte bancaire, sans publicité.',
    },
    {
      icon: <TrendingUpIcon className="w-8 h-8 text-[#A32E3A]" />,
      title: 'Recommandations concrètes',
      description: 'Des conseils actionnables pour améliorer votre site immédiatement.',
    },
  ];

  const metricsChecked = [
    {
      category: 'Performance',
      items: [
        'Temps de chargement des pages',
        'Optimisation des images',
        'Poids total du site',
        'Mise en cache navigateur',
      ],
    },
    {
      category: 'SEO',
      items: [
        'Balises meta (title, description)',
        'Structure des URLs',
        'Liens internes et externes',
        'Sitemap XML',
      ],
    },
    {
      category: 'Accessibilité',
      items: [
        'Contraste des couleurs',
        'Textes alternatifs des images',
        'Navigation au clavier',
        'Hiérarchie des titres',
      ],
    },
    {
      category: 'Sécurité',
      items: [
        'Certificat SSL',
        'Protocoles de sécurité',
        'Scripts tiers',
        'Headers de sécurité',
      ],
    },
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
              title="Audit Gratuit de votre Site Web"
              subtitle="Découvrez les points à améliorer"
              description="Analysez gratuitement les performances, le SEO et l'accessibilité de votre site en quelques secondes."
              align="center"
              accent={true}
            />

            {/* Badges */}
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              <DSBadge variant="success" size="lg">
                ✨ 100% Gratuit
              </DSBadge>
              <DSBadge variant="gold" size="lg">
                ⚡ Résultats instantanés
              </DSBadge>
              <DSBadge variant="default" size="lg">
                🔒 Sans engagement
              </DSBadge>
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form Column */}
            <div>
              <div className="mb-6">
                <h2 
                  className="text-[#1A1A1A] mb-3" 
                  style={{ fontFamily: 'Playfair Display', fontSize: '2rem' }}
                >
                  Lancez votre audit
                </h2>
                <p className="text-gray-600">
                  Entrez l'URL de votre site et recevez instantanément une analyse complète.
                </p>
              </div>

              {/* AuditForm Island (contains ArcGauge + AuditResults) */}
              <AuditForm />
            </div>

            {/* Info Column */}
            <div className="space-y-6">
              {/* Benefits */}
              <div>
                <h3 
                  className="text-[#1A1A1A] mb-6" 
                  style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem' }}
                >
                  Pourquoi faire un audit ?
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <DSCard key={index} variant="light" hover={true}>
                      <DSCard.Body>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            {benefit.icon}
                          </div>
                          <div>
                            <h4 className="text-[#1A1A1A] font-semibold mb-1">
                              {benefit.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </DSCard.Body>
                    </DSCard>
                  ))}
                </div>
              </div>

              {/* Trust indicators */}
              <div className="bg-[#10b981] bg-opacity-10 rounded-xl p-6 border border-[#10b981]">
                <div className="flex items-start gap-3">
                  <CheckCircle2Icon className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#1A1A1A] font-semibold mb-2">
                      Plus de 500 audits réalisés
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Des centaines d'entreprises nous font confiance pour améliorer leurs performances web.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we check */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <DSSectionHeader
              title="Ce que nous analysons"
              subtitle="Une analyse complète"
              description="Notre outil vérifie plus de 50 critères pour vous donner une vision globale de votre site"
              align="center"
              accent={true}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
              {metricsChecked.map((category, index) => (
                <DSCard key={index} variant="bordered">
                  <DSCard.Header>
                    <h3 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                      {category.category}
                    </h3>
                  </DSCard.Header>
                  <DSCard.Body>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2Icon className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </DSCard.Body>
                </DSCard>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="container mx-auto px-4 py-16">
          <DSSectionHeader
            title="Comment ça marche ?"
            subtitle="3 étapes simples"
            align="center"
            accent={true}
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: 'Entrez votre URL',
                description: 'Renseignez l\'adresse de votre site web et votre email',
              },
              {
                step: '2',
                title: 'Analyse automatique',
                description: 'Notre outil scanne votre site en quelques secondes',
              },
              {
                step: '3',
                title: 'Recevez vos résultats',
                description: 'Consultez vos scores et nos recommandations personnalisées',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-[#D1A65E] mb-4" 
                  style={{ 
                    fontFamily: 'Playfair Display',
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                    lineHeight: 1
                  }}
                >
                  {item.step}
                </div>
                <h3 
                  className="text-[#1A1A1A] mb-2" 
                  style={{ fontFamily: 'Playfair Display', fontSize: '1.25rem' }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gradient-to-br from-[#F9FAFB] to-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <DSSectionHeader
              title="Questions fréquentes"
              align="center"
              accent={true}
            />

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  q: "L'audit est-il vraiment gratuit ?",
                  a: 'Oui, 100% gratuit et sans engagement. Aucune carte bancaire requise.',
                },
                {
                  q: 'Combien de temps prend l\'analyse ?',
                  a: 'L\'analyse est instantanée : quelques secondes seulement !',
                },
                {
                  q: 'Que faire après l\'audit ?',
                  a: 'Vous recevez des recommandations concrètes. Nous pouvons aussi vous accompagner pour les mettre en œuvre.',
                },
                {
                  q: 'Mes données sont-elles protégées ?',
                  a: 'Absolument. Nous ne stockons que l\'URL et l\'email, conformément au RGPD.',
                },
                {
                  q: 'Puis-je auditer plusieurs sites ?',
                  a: 'Oui, sans limitation ! Auditez autant de sites que vous le souhaitez.',
                },
                {
                  q: 'Les résultats sont-ils fiables ?',
                  a: 'Nous utilisons les mêmes critères que Google Lighthouse, l\'outil de référence.',
                },
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm"
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

        {/* CTA Final */}
        <section className="bg-gradient-to-br from-[#D1A65E] to-[#A32E3A] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 
              className="text-white mb-4" 
              style={{ 
                fontFamily: 'Playfair Display',
                fontSize: '2.5rem'
              }}
            >
              Prêt à booster votre site ?
            </h2>
            <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Après l'audit, nous pouvons vous accompagner pour optimiser votre site et atteindre vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-block bg-white text-[#1A1A1A] px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Discutons de votre projet
              </a>
              <a 
                href="/offre"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 font-semibold"
              >
                Voir nos offres
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
