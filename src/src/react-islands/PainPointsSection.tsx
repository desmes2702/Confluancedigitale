import React from 'react';
import { motion } from 'motion/react';

/**
 * PainPointsSection Island
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - Pain points section with scroll animations
 * 
 * Features:
 * - Scroll-triggered stagger animations
 * - Pain points with icons
 * - Motion/react animations
 * 
 * Will be used in Astro with: <PainPointsSection client:visible />
 */

// ===== INLINE SVG ICONS =====

const XIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
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

const CheckCircle2Icon = ({ className = "w-8 h-8" }: { className?: string }) => (
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

export function PainPointsSection() {
  const painPoints = [
    {
      icon: <XIcon className="w-8 h-8 text-[#A32E3A]" />,
      title: "Site trop lent",
      description: "Vos visiteurs partent avant même que la page ne charge. Chaque seconde perdue = clients perdus.",
    },
    {
      icon: <XIcon className="w-8 h-8 text-[#A32E3A]" />,
      title: "Pas de conversions",
      description: "Du trafic mais aucune vente. Votre site n'est pas optimisé pour transformer les visiteurs en clients.",
    },
    {
      icon: <XIcon className="w-8 h-8 text-[#A32E3A]" />,
      title: "Invisible sur Google",
      description: "Personne ne vous trouve en ligne. Votre site est noyé dans la masse, invisible pour vos prospects.",
    },
    {
      icon: <XIcon className="w-8 h-8 text-[#A32E3A]" />,
      title: "Design dépassé",
      description: "Votre site fait \"années 2000\". Les visiteurs ne vous font pas confiance et partent immédiatement.",
    },
  ];

  const solutions = [
    {
      icon: <CheckCircle2Icon className="w-8 h-8 text-[#10b981]" />,
      title: "Performance garantie",
      description: "Score Lighthouse > 90, temps de chargement < 2s. Vos visiteurs restent et convertissent.",
    },
    {
      icon: <CheckCircle2Icon className="w-8 h-8 text-[#10b981]" />,
      title: "Optimisé pour convertir",
      description: "Parcours utilisateur étudié, CTA stratégiques, tunnels de conversion optimisés.",
    },
    {
      icon: <CheckCircle2Icon className="w-8 h-8 text-[#10b981]" />,
      title: "SEO intégré",
      description: "Optimisation dès la conception : structure, balises, vitesse. Visible sur Google dès le lancement.",
    },
    {
      icon: <CheckCircle2Icon className="w-8 h-8 text-[#10b981]" />,
      title: "Design moderne 2025",
      description: "Interface actuelle et professionnelle qui inspire confiance et rassure vos prospects.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        {/* Pain Points */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-12"
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
              Vous reconnaissez-vous ?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ces problèmes freinent votre croissance et vous font perdre des clients chaque jour
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 border-2 border-red-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-red-50 rounded-full p-3">
                    {point.icon}
                  </div>
                  <div>
                    <h3
                      className="text-[#1A1A1A] mb-2"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {point.title}
                    </h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#F9FAFB] px-6 text-[#D1A65E] font-semibold text-lg">
                Notre solution
              </span>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <motion.div
            className="text-center mb-12"
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
              Nous transformons ces problèmes en opportunités
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des sites web qui génèrent des résultats mesurables
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 border-2 border-green-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-green-50 rounded-full p-3">
                    {solution.icon}
                  </div>
                  <div>
                    <h3
                      className="text-[#1A1A1A] mb-2"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {solution.title}
                    </h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
