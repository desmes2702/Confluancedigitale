import React from 'react';
import { motion } from 'motion/react';
import { ArcGauge } from './ArcGauge';
import { DSBadge } from '@/react-components/ui/DSBadge';

/**
 * PageSpeedProof Island
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - Performance proof with ArcGauge
 * 
 * Features:
 * - Reuses ArcGauge component
 * - Before/after comparison
 * - Performance metrics
 * - Scroll animations
 * 
 * Will be used in Astro with: <PageSpeedProof client:visible />
 */

// ===== INLINE SVG ICONS =====

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

export function PageSpeedProof() {
  const beforeMetrics = [
    { label: 'Performance', value: 45, color: '#A32E3A' },
    { label: 'Accessibilité', value: 62, color: '#f59e0b' },
    { label: 'SEO', value: 58, color: '#f59e0b' },
    { label: 'Best Practices', value: 50, color: '#A32E3A' },
  ];

  const afterMetrics = [
    { label: 'Performance', value: 95, color: '#10b981' },
    { label: 'Accessibilité', value: 98, color: '#10b981' },
    { label: 'SEO', value: 100, color: '#10b981' },
    { label: 'Best Practices', value: 96, color: '#10b981' },
  ];

  const benefits = [
    {
      icon: <ZapIcon className="w-6 h-6 text-[#10b981]" />,
      metric: '-70%',
      label: 'Temps de chargement',
    },
    {
      icon: <TrendingUpIcon className="w-6 h-6 text-[#10b981]" />,
      metric: '+150%',
      label: 'Taux de conversion',
    },
    {
      icon: <TrendingUpIcon className="w-6 h-6 text-[#10b981]" />,
      metric: '+200%',
      label: 'Trafic organique',
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <DSBadge variant="success" size="lg" className="mb-4">
            ⚡ Performance garantie
          </DSBadge>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: 'Playfair Display',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            Score Lighthouse {'>'} 90 garanti
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Nous optimisons chaque site pour la vitesse et les performances. Résultats mesurables et prouvés.
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-white bg-opacity-5 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-10">
                <div className="mb-6">
                  <span className="inline-block bg-red-500 bg-opacity-20 text-red-300 px-4 py-2 rounded-full text-sm font-semibold border border-red-500">
                    ❌ Avant
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  {beforeMetrics.map((metric, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="mb-2">
                        <ArcGauge score={metric.value} size={100} strokeWidth={12} />
                      </div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="text-gray-400 text-sm">
                  Score moyen : <span className="text-red-400 font-bold">54/100</span>
                </div>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-white bg-opacity-5 rounded-2xl p-8 backdrop-blur-sm border-2 border-[#10b981] border-opacity-50 shadow-lg shadow-[#10b981]/20">
                <div className="mb-6">
                  <span className="inline-block bg-[#10b981] bg-opacity-20 text-[#10b981] px-4 py-2 rounded-full text-sm font-semibold border border-[#10b981]">
                    ✅ Après (Nos sites)
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  {afterMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex flex-col items-center"
                    >
                      <div className="mb-2">
                        <ArcGauge score={metric.value} size={100} strokeWidth={12} />
                      </div>
                      <div className="text-sm text-gray-300">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-gray-300 text-sm">
                  Score moyen : <span className="text-[#10b981] font-bold">97/100</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Benefits */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white bg-opacity-5 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-10">
            <h3
              className="text-white text-center mb-8"
              style={{ fontFamily: 'Playfair Display', fontSize: '1.75rem' }}
            >
              Impact sur votre business
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="bg-[#10b981] bg-opacity-20 rounded-full p-3">
                      {benefit.icon}
                    </div>
                  </div>
                  <div
                    className="text-[#10b981] mb-2"
                    style={{
                      fontFamily: 'Playfair Display',
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {benefit.metric}
                  </div>
                  <div className="text-gray-300">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-400 mb-4">
            Prêt à booster les performances de votre site ?
          </p>
          <a
            href="/audit-gratuit"
            className="inline-block bg-[#10b981] text-white px-8 py-3 rounded-lg hover:bg-[#0ea572] transition-all duration-300 font-semibold"
          >
            Tester mon site gratuitement
          </a>
        </motion.div>
      </div>
    </div>
  );
}
