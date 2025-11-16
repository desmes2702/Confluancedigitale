import React from 'react';
import { DSSectionHeader } from '@/react-components/ui/DSSectionHeader';
import { DSCard } from '@/react-components/ui/DSCard';
import { DSBadge } from '@/react-components/ui/DSBadge';
import { DSButton } from '@/react-components/ui/DSButton';

/**
 * Page Études de Cas
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - Content showcase with DSCard grid
 * 
 * Changes:
 * - Removed Lucide icons → Inline SVG
 * - Using DSCard for case study cards
 * - Using DSBadge for metrics and tags
 * - Zero dependencies on Radix/CVA/Lucide
 * - Ready for Astro conversion
 */

// ===== INLINE SVG ICONS =====

const TrendingUpIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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

const CheckCircle2Icon = ({ className = "w-5 h-5" }: { className?: string }) => (
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

const ZapIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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

const TargetIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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

export default function EtudesDeCasPage() {
  // ===== CASE STUDIES DATA =====
  const caseStudies = [
    {
      title: "Fleurs & Co",
      category: "E-commerce",
      description: "Refonte complète d'une boutique en ligne de fleuriste avec optimisation SEO et tunnel de conversion.",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop",
      tags: ["E-commerce", "SEO", "UX"],
      metrics: [
        { label: "Trafic", value: "+180%", icon: <TrendingUpIcon className="w-4 h-4" /> },
        { label: "Conversions", value: "+95%", icon: <TargetIcon className="w-4 h-4" /> },
        { label: "Score Lighthouse", value: "94", icon: <ZapIcon className="w-4 h-4" /> },
      ],
      duration: "8 semaines",
      results: [
        "Site 3x plus rapide qu'avant",
        "Positionnement top 3 sur Google pour 12 mots-clés",
        "Taux de conversion de 4.2% (vs 2.1% avant)",
      ],
    },
    {
      title: "Cabinet Martin",
      category: "Site vitrine",
      description: "Création d'un site vitrine professionnel pour un cabinet d'avocats spécialisé en droit des affaires.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      tags: ["Vitrine", "Responsive", "Accessibilité"],
      metrics: [
        { label: "Contacts", value: "+140%", icon: <TrendingUpIcon className="w-4 h-4" /> },
        { label: "Accessibilité", value: "100", icon: <CheckCircle2Icon className="w-4 h-4" /> },
        { label: "Chargement", value: "1.2s", icon: <ZapIcon className="w-4 h-4" /> },
      ],
      duration: "5 semaines",
      results: [
        "Site 100% accessible (RGAA)",
        "+40 demandes de contact par mois",
        "Taux de rebond réduit de 65% à 32%",
      ],
    },
    {
      title: "TechStart SaaS",
      category: "Application web",
      description: "Développement d'une plateforme SaaS pour la gestion de projets avec tableau de bord analytique.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["SaaS", "Dashboard", "API"],
      metrics: [
        { label: "Utilisateurs", value: "2500+", icon: <TrendingUpIcon className="w-4 h-4" /> },
        { label: "Disponibilité", value: "99.9%", icon: <CheckCircle2Icon className="w-4 h-4" /> },
        { label: "Performance", value: "95", icon: <ZapIcon className="w-4 h-4" /> },
      ],
      duration: "12 semaines",
      results: [
        "Application scalable pour 10k+ utilisateurs",
        "API REST complète et documentée",
        "Interface intuitive (NPS de 82)",
      ],
    },
    {
      title: "Bio Saveurs",
      category: "E-commerce",
      description: "Boutique en ligne de produits bio avec système de livraison locale et abonnements.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
      tags: ["E-commerce", "Click & Collect", "Mobile"],
      metrics: [
        { label: "CA mensuel", value: "+220%", icon: <TrendingUpIcon className="w-4 h-4" /> },
        { label: "Commandes mobile", value: "68%", icon: <TargetIcon className="w-4 h-4" /> },
        { label: "Score mobile", value: "96", icon: <ZapIcon className="w-4 h-4" /> },
      ],
      duration: "10 semaines",
      results: [
        "Système de click & collect intégré",
        "Gestion des abonnements récurrents",
        "Application mobile-first",
      ],
    },
    {
      title: "Coach Wellness",
      category: "Site vitrine",
      description: "Plateforme de coaching en ligne avec système de réservation et paiement intégré.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      tags: ["Booking", "Paiement", "SEO"],
      metrics: [
        { label: "Réservations", value: "+310%", icon: <TrendingUpIcon className="w-4 h-4" /> },
        { label: "Taux conversion", value: "8.4%", icon: <TargetIcon className="w-4 h-4" /> },
        { label: "SEO local", value: "Top 1", icon: <CheckCircle2Icon className="w-4 h-4" /> },
      ],
      duration: "6 semaines",
      results: [
        "Intégration Stripe pour paiements",
        "Système de réservation en ligne",
        "Référencement local optimisé",
      ],
    },
    {
      title: "Artisan Meuble",
      category: "Site vitrine",
      description: "Portfolio en ligne pour un artisan ébéniste avec galerie photos et devis en ligne.",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&h=600&fit=crop",
      tags: ["Portfolio", "Galerie", "Contact"],
      metrics: [
        { label: "Demandes devis", value: "+250%", icon: <TrendingUpIcon className="w-4 h-4" /> },
        { label: "Temps sur site", value: "5m 20s", icon: <TargetIcon className="w-4 h-4" /> },
        { label: "Images", value: "WebP", icon: <ZapIcon className="w-4 h-4" /> },
      ],
      duration: "4 semaines",
      results: [
        "Galerie photos optimisée (WebP + lazy loading)",
        "Formulaire devis personnalisé",
        "Site ultra-rapide malgré nombreuses images",
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
              title="Études de Cas"
              subtitle="Nos réalisations"
              description="Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs grâce à des solutions web performantes"
              align="center"
              accent={true}
            />
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white border-b border-gray-200 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              {[
                { value: "50+", label: "Projets réalisés" },
                { value: "+180%", label: "Trafic moyen" },
                { value: "95", label: "Score Lighthouse moyen" },
                { value: "4.9/5", label: "Satisfaction client" },
              ].map((stat, index) => (
                <div key={index}>
                  <div 
                    className="text-[#D1A65E] mb-2" 
                    style={{ 
                      fontFamily: 'Playfair Display',
                      fontSize: '2.5rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <DSCard key={index} variant="bordered" hover={true} className="flex flex-col">
                {/* Image */}
                <div className="aspect-video w-full overflow-hidden rounded-t-xl">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <DSCard.Header>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                      {study.title}
                    </h3>
                    <DSBadge variant="default" size="sm">
                      {study.category}
                    </DSBadge>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 bg-[#F9FAFB] text-gray-600 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </DSCard.Header>

                <DSCard.Body>
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="flex justify-center mb-1 text-[#10b981]">
                          {metric.icon}
                        </div>
                        <div 
                          className="text-[#1A1A1A] font-bold" 
                          style={{ fontFamily: 'Playfair Display' }}
                        >
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2Icon className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </DSCard.Body>

                <DSCard.Footer>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      ⏱️ {study.duration}
                    </span>
                    <DSButton variant="outline" size="sm" className="inline-flex items-center gap-1">
                      Voir le projet
                      <ArrowRightIcon className="w-4 h-4" />
                    </DSButton>
                  </div>
                </DSCard.Footer>
              </DSCard>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <DSSectionHeader
              title="Ce qu'en disent nos clients"
              subtitle="Témoignages"
              align="center"
              accent={true}
            />

            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
              {[
                {
                  quote: "Une équipe ultra-réactive qui a parfaitement compris nos besoins. Le site dépasse nos attentes !",
                  author: "Sophie M.",
                  company: "Fleurs & Co",
                  avatar: "🌸",
                },
                {
                  quote: "Professionnalisme et expertise. Notre site est maintenant notre meilleur outil de prospection.",
                  author: "Jean-Paul M.",
                  company: "Cabinet Martin",
                  avatar: "⚖️",
                },
                {
                  quote: "Rapport qualité/prix imbattable. Notre application SaaS tourne parfaitement depuis 6 mois.",
                  author: "Thomas L.",
                  company: "TechStart",
                  avatar: "💻",
                },
              ].map((testimonial, index) => (
                <DSCard key={index} variant="elevated">
                  <DSCard.Body>
                    <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
                    <p className="text-gray-700 italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="text-center">
                      <div className="text-[#1A1A1A] font-semibold">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </DSCard.Body>
                </DSCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#D1A65E] to-[#A32E3A] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 
              className="text-white mb-4" 
              style={{ 
                fontFamily: 'Playfair Display',
                fontSize: '2.5rem'
              }}
            >
              Prêt à écrire votre success story ?
            </h2>
            <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Rejoignez nos clients satisfaits et donnez à votre entreprise le site web qu'elle mérite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DSButton variant="secondary" size="lg" href="/contact">
                Discutons de votre projet
              </DSButton>
              <DSButton 
                variant="outline" 
                size="lg" 
                href="/audit-gratuit"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#1A1A1A]"
              >
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
