import React from 'react';
import { motion } from 'motion/react';
import { DSButton } from '@/react-components/ui/DSButton';

/**
 * HeroAnimation Island
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - Animated hero section with motion/react
 * 
 * Features:
 * - Animated headline with stagger effect
 * - Animated CTA buttons
 * - Scroll indicator
 * - Motion/react animations
 * 
 * Will be used in Astro with: <HeroAnimation client:load />
 */

// ===== INLINE SVG ICONS =====

const MouseIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
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
    <rect x="7" y="3" width="10" height="18" rx="5" ry="5"/>
    <line x1="12" y1="7" x2="12" y2="10"/>
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

export function HeroAnimation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-96 bg-[#D1A65E] rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-32 w-96 h-96 bg-[#10b981] rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [20, -20, 20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block bg-[#10b981] bg-opacity-20 text-[#10b981] px-4 py-2 rounded-full text-sm font-semibold border border-[#10b981]">
            ⚡ Sites ultra-rapides pour TPE & PME
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-white mb-6 max-w-4xl mx-auto"
          style={{
            fontFamily: 'Playfair Display',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
          }}
          variants={itemVariants}
        >
          Un site web qui{' '}
          <span className="text-[#D1A65E]">convertit vos visiteurs</span> en
          clients
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Conception, développement et optimisation de sites web performants.
          Score Lighthouse {'>'} 90, livraison en 6 semaines, accompagnement
          personnalisé.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          variants={itemVariants}
        >
          <div>
            <div
              className="text-[#10b981] mb-1"
              style={{
                fontFamily: 'Playfair Display',
                fontSize: '2.5rem',
                fontWeight: 'bold',
              }}
            >
              95+
            </div>
            <div className="text-gray-400 text-sm">Score Lighthouse</div>
          </div>
          <div>
            <div
              className="text-[#10b981] mb-1"
              style={{
                fontFamily: 'Playfair Display',
                fontSize: '2.5rem',
                fontWeight: 'bold',
              }}
            >
              6 sem
            </div>
            <div className="text-gray-400 text-sm">Livraison moyenne</div>
          </div>
          <div>
            <div
              className="text-[#10b981] mb-1"
              style={{
                fontFamily: 'Playfair Display',
                fontSize: '2.5rem',
                fontWeight: 'bold',
              }}
            >
              100%
            </div>
            <div className="text-gray-400 text-sm">Clients satisfaits</div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <DSButton
            variant="primary"
            size="lg"
            href="/reservation"
            className="inline-flex items-center gap-2"
          >
            Réserver un appel gratuit
            <ArrowRightIcon className="w-5 h-5" />
          </DSButton>
          <DSButton
            variant="outline"
            size="lg"
            href="/audit-gratuit"
            className="bg-transparent border-white text-white hover:bg-white hover:text-[#1A1A1A]"
          >
            Audit gratuit de votre site
          </DSButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-sm">Découvrir</span>
            <MouseIcon className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
