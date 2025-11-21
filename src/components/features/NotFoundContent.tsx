import { ArrowRight, Home, AlertTriangle } from "lucide-react";
import { DSButton } from "../ui/DSButton";
import { motion } from "motion/react";

export const NotFoundContent = () => {
    return (
        <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-4 py-8 md:py-12 relative overflow-hidden">
            {/* Decorative Gold Accents */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-[#D1A65E]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#D1A65E]/5 rounded-full blur-3xl"></div>

            {/* Content Container */}
            <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6">
                {/* 404 Number - Impact */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-6 md:mb-8"
                >
                    <h1 className="text-[120px] sm:text-[180px] md:text-[240px] lg:text-[320px] leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#D1A65E] via-[#D1A65E]/80 to-[#D1A65E]/40 select-none font-playfair">
                        404
                    </h1>
                </motion.div>

                {/* Warning Icon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mb-6 md:mb-8"
                >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#D1A65E]/10 border border-[#D1A65E]/20 flex items-center justify-center">
                        <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-[#D1A65E]" strokeWidth={1.5} />
                    </div>
                </motion.div>

                {/* Humor Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-4 md:mb-6"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 md:mb-4 leading-tight font-playfair">
                        Oups ! Erreur : Notre Page Performance
                        <br className="hidden sm:block" />
                        <span className="text-[#D1A65E]">a encore fait des siennes...</span>
                    </h2>
                </motion.div>

                {/* Justification */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8 md:mb-12"
                >
                    <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Les liens cassés sont une hantise. Si vous êtes perdu,
                        <br className="hidden sm:block" />
                        retrouvez le <span className="text-[#D1A65E]">chemin de la performance</span>.
                    </p>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#D1A65E] to-transparent mx-auto mb-8 md:mb-12"
                ></motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-4 md:space-y-6"
                >
                    {/* Primary CTA - Green */}
                    <div>
                        <a href="/audit-gratuit">
                            <DSButton
                                variant="primary"
                                size="lg"
                                className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-white px-6 md:px-10 py-4 md:py-7 text-base md:text-lg lg:text-xl group shadow-2xl hover:shadow-[#10b981]/30 hover:scale-105 transition-all duration-300 rounded-xl border border-[#10b981]/20"
                            >
                                <span className="mr-2 md:mr-3">Je sécurise mon Audit Gratuit</span>
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                            </DSButton>
                        </a>
                    </div>

                    {/* Trust Line */}
                    <p className="text-xs md:text-sm text-gray-500">
                        ✓ Sans engagement • ✓ Réponse en 48h • ✓ Score 100/100 garanti
                    </p>

                    {/* Divider */}
                    <div className="relative py-4 md:py-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-800"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#0D0D0D] px-3 md:px-4 text-gray-600">ou</span>
                        </div>
                    </div>

                    {/* Secondary CTA - Minimalist Link */}
                    <div>
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                        >
                            <Home className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                            <span className="text-sm md:text-base underline underline-offset-4 decoration-gray-700 group-hover:decoration-white">
                                Retour à l'Accueil
                            </span>
                        </a>
                    </div>
                </motion.div>

                {/* Optional Footer Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-gray-900"
                >
                    <p className="text-xs text-gray-600">
                        Si cette erreur persiste, contactez-nous :{" "}
                        <a
                            href="mailto:contact@confluence-digitale.fr"
                            className="text-[#D1A65E] hover:text-[#D1A65E]/80 transition-colors"
                        >
                            contact@confluence-digitale.fr
                        </a>
                    </p>
                </motion.div>
            </div>

            {/* Subtle Grid Overlay (Optional) */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(#D1A65E 1px, transparent 1px), linear-gradient(90deg, #D1A65E 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            ></div>
        </div>
    );
};
