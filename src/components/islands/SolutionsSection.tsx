import React from 'react';
import { motion } from 'motion/react';
import { Gauge, Shield, Clock } from 'lucide-react';

const solutions = [
    {
        icon: Gauge,
        title: "Performance 100/100",
        description: "Score PageSpeed garanti. Site ultra-rapide qui convertit vraiment."
    },
    {
        icon: Shield,
        title: "Autonomie Totale",
        description: "Vous modifiez votre site quand vous voulez. Sans coder. Sans dépendre de personne."
    },
    {
        icon: Clock,
        title: "Support Illimité",
        description: "Vous n'êtes jamais seul. Support technique réactif inclus dans le MRR."
    }
];

export const SolutionsSection = () => {
    return (
        <section
            className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
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
                            Notre <span className="text-premium">Solution</span>
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
                            Un site web qui performe. Vraiment. À tous les niveaux.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {solutions.map((solution, index) => {
                            const Icon = solution.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                >
                                    <div
                                        className="rounded-xl md:rounded-2xl p-6 md:p-8 h-full bg-white border border-[#E5E7EB] hover:border-premium hover:scale-[1.02] transition-all duration-300"
                                        style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
                                    >
                                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl bg-premium/10 flex items-center justify-center mb-4 md:mb-6">
                                            <Icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-premium" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-xl md:text-2xl text-[#1A1A1A] mb-2 md:mb-3">
                                            {solution.title}
                                        </h3>
                                        <p className="text-gray-700 text-sm md:text-base">
                                            {solution.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
