import React from 'react';
import { motion } from 'motion/react';
import { DSBadge } from '@/react-components/ui/DSBadge';

/**
 * TeamBlock Island
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - Team triad with animations
 * 
 * Features:
 * - Professional triad (Antoine, Pascal, Laly)
 * - Stagger animations
 * - Trust building section
 * - Placeholder for team photos
 * 
 * Will be used in Astro with: <TeamBlock client:visible />
 */

// ===== INLINE SVG ICONS =====

const UserIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
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
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

export function TeamBlock() {
  const team = [
    {
      name: 'Antoine Durand',
      role: 'Fondateur & Développeur',
      expertise: 'Full-stack · React · Astro',
      description: '10 ans d\'expérience dans le développement web. Passionné par les performances et l\'UX.',
      badge: 'Lead Dev',
      color: '#D1A65E',
    },
    {
      name: 'Pascal Martin',
      role: 'Designer & UX Strategist',
      expertise: 'UI/UX · Figma · Branding',
      description: 'Expert en conception d\'interfaces qui convertissent. 8 ans dans le design digital.',
      badge: 'Designer',
      color: '#10b981',
    },
    {
      name: 'Laly Chen',
      role: 'SEO & Marketing Digital',
      expertise: 'SEO · Analytics · Content',
      description: 'Spécialiste en référencement naturel et stratégies d\'acquisition. ROI garanti.',
      badge: 'SEO Expert',
      color: '#A32E3A',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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
    <div className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <DSBadge variant="gold" size="lg" className="mb-4">
            👥 Notre équipe
          </DSBadge>
          <h2
            className="text-[#1A1A1A] mb-4"
            style={{
              fontFamily: 'Playfair Display',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            Une équipe d'experts à votre service
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Développement, design et marketing : tout ce dont vous avez besoin sous un même toit
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                {/* Photo placeholder */}
                <div className="mb-6">
                  <motion.div
                    className="w-32 h-32 mx-auto rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${member.color}20`, border: `3px solid ${member.color}` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <UserIcon className="w-16 h-16" style={{ color: member.color }} />
                  </motion.div>
                </div>

                {/* Badge */}
                <div className="text-center mb-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: `${member.color}20`,
                      color: member.color,
                      border: `1px solid ${member.color}`,
                    }}
                  >
                    {member.badge}
                  </span>
                </div>

                {/* Name */}
                <h3
                  className="text-[#1A1A1A] text-center mb-2"
                  style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem' }}
                >
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-gray-600 text-center mb-3 font-semibold">
                  {member.role}
                </p>

                {/* Expertise */}
                <p className="text-gray-500 text-sm text-center mb-4">
                  {member.expertise}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-center text-sm flex-1">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div
                  className="text-[#10b981] mb-2"
                  style={{
                    fontFamily: 'Playfair Display',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  10+
                </div>
                <div className="text-gray-600">Années d'expérience</div>
              </div>
              <div>
                <div
                  className="text-[#10b981] mb-2"
                  style={{
                    fontFamily: 'Playfair Display',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  50+
                </div>
                <div className="text-gray-600">Projets livrés</div>
              </div>
              <div>
                <div
                  className="text-[#10b981] mb-2"
                  style={{
                    fontFamily: 'Playfair Display',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  100%
                </div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600 mb-4">
            Une équipe complémentaire pour votre réussite
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm text-gray-700">
              🎯 Réactivité garantie
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm text-gray-700">
              💬 Communication transparente
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm text-gray-700">
              ⚡ Expertise technique pointue
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
