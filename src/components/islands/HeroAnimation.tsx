import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Mouse } from 'lucide-react';

export const HeroAnimation = () => {
    const handleScrollToNextSection = () => {
        const painSection = document.querySelector('section[id="pain-points"]');
        if (painSection) {
            painSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section
            className="relative min-h-screen flex items-center justify-center pt-28 lg:pt-32 pb-16 px-4 overflow-hidden bg-[#F9FAFB]"
        >
            {/* Decorative background */}
            <div className="absolute top-10 right-0 w-96 h-96 bg-premium/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-0 w-96 h-96 bg-cta/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-6xl mx-auto text-center">
                    {/* --- H1 : Text Reveal Animation --- */}
                    <div className="overflow-hidden mb-6">
                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A]"
                            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Devenez visible. <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium to-contractual">Vraiment</span> visible.
                        </motion.h1>
                    </div>

                    {/* --- SOUS-TITRE : Text Reveal Animation --- */}
                    <div className="overflow-hidden mb-12">
                        <motion.p
                            className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Nous garantissons la performance. <strong className="text-premium">100/100</strong>.
                            C'est la garantie technique pour viser la première place sur Google.
                        </motion.p>
                    </div>

                    {/* --- CTA GROUPE : Fade-in + up-drift --- */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Bouton Principal - Audit Gratuit */}
                        <a
                            href="/audit-gratuit"
                            className="px-8 py-4 rounded-full bg-cta text-white text-base lg:text-lg flex items-center justify-center gap-2
                         hover:bg-[#0e9f73] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Je demande mon Audit Gratuit
                            <ArrowRight className="w-5 h-5" strokeWidth={2} />
                        </a>

                        {/* Bouton Secondaire - Découvrir notre méthode */}
                        <a
                            href="/methode"
                            className="px-8 py-4 rounded-full bg-transparent border-2 border-premium text-premium text-base lg:text-lg flex items-center justify-center gap-2
                         hover:bg-premium hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Découvrir notre méthode
                            <ChevronRight className="w-5 h-5" strokeWidth={2} />
                        </a>
                    </motion.div>

                    {/* --- MICRO-COPIE : Même timing que les CTAs (V4.7) --- */}
                    <motion.p
                        className="mt-6 text-sm text-gray-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Réponse sous 48h • 100% Gratuit • Sans engagement
                    </motion.p>

                </div>
            </div>

            {/* Scroll Hint Animé - BATCH 23 */}
            <button
                onClick={handleScrollToNextSection}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:scale-110 transition-transform duration-300"
                aria-label="Défiler vers la section suivante"
            >
                <Mouse className="w-6 h-6 lg:w-12 lg:h-12 text-[#9CA3AF] animate-bounce" strokeWidth={1.5} />
            </button>
        </section>
    );
};
