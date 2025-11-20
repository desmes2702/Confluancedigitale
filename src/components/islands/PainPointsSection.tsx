import React from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

const painPoints = [
    "Site extrêmement lent (8-10 secondes de chargement)",
    "Invisible sur Google (Page 3 ou 4)",
    "Dépendance totale à votre agence web",
    "Impossible de modifier quoi que ce soit sans payer"
];

export const PainPointsSection = () => {
    return (
        <section
            className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white"
            id="pain-points"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-3 md:mb-4"
                            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                        >
                            Vous Reconnaissez-Vous <span className="text-contractual">Ici</span> ?
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {painPoints.map((pain, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                <div
                                    className="rounded-xl p-4 md:p-6 bg-white border border-[#E5E7EB]"
                                    style={{ boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.04)' }}
                                >
                                    <div className="flex items-start gap-2 md:gap-3">
                                        <X className="w-4 h-4 md:w-5 md:h-5 text-contractual flex-shrink-0 mt-0.5" strokeWidth={2} />
                                        <span className="text-gray-700 text-sm md:text-base">{pain}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
