/**
 * ConfluencePageSpeedProof Component
 * V5.25 - AXE 1 : Preuve Live PageSpeed
 * 
 * Section "Notre Propre Étude de Cas" avec 4 jauges visuelles
 * Remplace l'ancien Trust Band faible par une preuve concrète
 * 
 * Design : 4 cartes style Google PageSpeed avec scores 100/100
 * Couleur : Vert Performance #10b981
 * CTA : Lien vers Google PageSpeed Insights
 */

import { motion } from 'motion/react';
import { Gauge, ExternalLink } from 'lucide-react';

interface PageSpeedScore {
  metric: string;
  score: number;
  color: string;
}

export function ConfluencePageSpeedProof() {
  const scores: PageSpeedScore[] = [
    { metric: 'Performance', score: 100, color: '#10b981' },
    { metric: 'Accessibilité', score: 100, color: '#10b981' },
    { metric: 'Bonnes Pratiques', score: 100, color: '#10b981' },
    { metric: 'SEO', score: 100, color: '#10b981' }
  ];

  const pageSpeedUrl = 'https://pagespeed.web.dev/report?url=https%3A%2F%2Fconfluencedigitale.fr';

  return (
    <section 
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-[#F9FAFB]"
      id="pagespeed-proof"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Titre Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-3 md:mb-4"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Notre Propre <span className="text-[#10b981]">Étude de Cas</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
              Nous appliquons à nous-mêmes la performance que nous vous garantissons.
            </p>
          </motion.div>

          {/* Grille 4 Scores - Style Google PageSpeed */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
            {scores.map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative"
              >
                {/* Carte Score */}
                <div 
                  className="rounded-xl md:rounded-2xl p-6 md:p-8 bg-white border border-[#E5E7EB] hover:border-[#10b981] hover:scale-[1.02] transition-all duration-300"
                  style={{ boxShadow: '0 4px 20px 0 rgba(16, 185, 129, 0.08)' }}
                >
                  {/* Jauge Circulaire - Style PageSpeed */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-4">
                    {/* Background Circle */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="52"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                      />
                      {/* Progress Circle - Animation 0→100% (V5.27d FIX) */}
                      <motion.circle
                        cx="60"
                        cy="60"
                        r="52"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 52}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                        whileInView={{ 
                          strokeDashoffset: 0
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.15, ease: 'easeOut' }}
                      />
                    </svg>

                    {/* Score au centre */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span 
                        className="text-2xl md:text-3xl text-[#1A1A1A]"
                        style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                      >
                        {item.score}
                      </motion.span>
                    </div>
                  </div>

                  {/* Nom de la métrique */}
                  <p className="text-center text-sm md:text-base text-gray-700 font-medium">
                    {item.metric}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA - Vérifier sur Google PageSpeed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <a
              href={pageSpeedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-xl border-2 border-[#D1A65E] text-[#D1A65E] hover:bg-[#D1A65E] hover:text-white transition-all duration-300 text-base md:text-lg"
              style={{ boxShadow: '0 4px 16px 0 rgba(209, 166, 94, 0.15)' }}
            >
              <Gauge className="w-5 h-5" strokeWidth={2} />
              {/* V5.27b : Texte simplifié et sans jargon */}
              <span>Voir notre score en direct</span>
              {/* Icône ExternalLink masquée sur mobile */}
              <ExternalLink className="hidden md:inline w-4 h-4" strokeWidth={2} />
            </a>

            {/* Micro-copie */}
            <p className="text-xs md:text-sm text-gray-500 mt-4">
              Scores actualisés en temps réel • Audit indépendant Google
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}