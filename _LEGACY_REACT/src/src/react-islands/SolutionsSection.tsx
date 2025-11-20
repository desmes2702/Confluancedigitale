import React from 'react';
import { motion } from 'motion/react';
import { DSCard } from '@/react-components/ui/DSCard';
import { DSButton } from '@/react-components/ui/DSButton';

/**
 * SolutionsSection Island
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - Solutions cards with hover animations
 * 
 * Features:
 * - Animated solution cards
 * - Hover effects with motion/react
 * - CTAs per solution
 * 
 * Will be used in Astro with: <SolutionsSection client:visible />
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

export function SolutionsSection() {
  const solutions = [
    {
      icon: <ZapIcon className="w-8 h-8 text-[#D1A65E]" />,
      title: 'Sites ultra-rapides',
      description: 'Performance optimale garantie',
      features: [
        'Score Lighthouse > 90',
        'Temps de chargement < 2s',
        'Optimisation images & code',
        'CDN & cache intelligents',
      ],
      cta: 'En savoir plus',
      href: '/offre',
      gradient: 'from-[#D1A65E] to-[#A32E3A]',
    },
    {
      icon: <TrendingUpIcon className="w-8 h-8 text-[#10b981]" />,
      title: 'Optimisés pour convertir',
      description: 'Transformez vos visiteurs en clients',
      features: [
        'Parcours utilisateur optimisé',
        'CTA stratégiquement placés',
        'Design persuasif',
        'A/B testing intégré',
      ],
      cta: 'Voir notre méthode',
      href: '/methode',
      gradient: 'from-[#10b981] to-[#0ea572]',
    },
    {
      icon: <ShieldIcon className="w-8 h-8 text-[#1A1A1A]" />,
      title: 'Sécurisés & conformes',
      description: 'Tranquillité d\'esprit garantie',
      features: [
        'SSL & HTTPS obligatoires',
        'Conformité RGPD',
        'Sauvegardes quotidiennes',
        'Monitoring 24/7',
      ],
      cta: 'Découvrir nos garanties',
      href: '/offre#garanties',
      gradient: 'from-[#1A1A1A] to-[#2D2D2D]',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-[#1A1A1A] mb-4"
            style={{
              fontFamily: 'Playfair Display',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            Nos solutions sur-mesure
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Chaque site est conçu pour répondre à vos objectifs business et dépasser vos attentes
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={cardVariants}>
              <DSCard
                variant="elevated"
                hover={true}
                className="h-full flex flex-col group"
              >
                <DSCard.Body className="flex-1">
                  {/* Icon with gradient background */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white">{solution.icon}</div>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-[#1A1A1A] mb-2"
                    style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem' }}
                  >
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{solution.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2Icon className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </DSCard.Body>

                <DSCard.Footer>
                  <DSButton
                    variant="outline"
                    size="md"
                    href={solution.href}
                    className="w-full group-hover:bg-[#1A1A1A] group-hover:text-white group-hover:border-[#1A1A1A] transition-all duration-300"
                  >
                    {solution.cta}
                  </DSButton>
                </DSCard.Footer>
              </DSCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-4 text-lg">
            Besoin d'une solution sur-mesure ?
          </p>
          <DSButton variant="primary" size="lg" href="/contact">
            Discutons de votre projet
          </DSButton>
        </motion.div>
      </div>
    </div>
  );
}
