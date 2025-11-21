import { BarChart3, ArrowRightCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const AuditHero = () => {
    const scrollToTerminal = () => {
        const terminalSection = document.getElementById('terminal-audit');
        if (terminalSection) {
            terminalSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D1A65E]/10 border border-[#D1A65E]/20 mb-6">
                    <BarChart3 className="w-4 h-4 text-[#D1A65E]" strokeWidth={2} />
                    <span className="text-sm text-[#D1A65E]">Audit Gratuit 48h</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Découvrez ce qui freine votre visibilité.
                </h1>

                <p className="text-lg md:text-xl text-[#1A1A1A] max-w-3xl mx-auto mb-8">
                    Obtenez une analyse technique et stratégique complète de votre site actuel. 100% gratuit, sans engagement.
                </p>
            </motion.div>

            {/* CTA d'ancrage pour "les pressés" */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                <button
                    onClick={scrollToTerminal}
                    className="px-8 py-4 rounded-full bg-[#10b981] text-white text-base lg:text-lg flex items-center justify-center gap-2 mx-auto
                     hover:bg-[#0e9f73] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
                >
                    Commencer l'audit (1 minute)
                    <ArrowRightCircle className="w-5 h-5" strokeWidth={2} />
                </button>
            </motion.div>
        </div>
    );
};
