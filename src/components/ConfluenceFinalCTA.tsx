import { Button } from "./ui/button";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface ConfluenceFinalCTAProps {
  onNavigate?: (page: string) => void;
}

export function ConfluenceFinalCTA({ onNavigate }: ConfluenceFinalCTAProps = {}) {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1A1A1A] via-black to-[#1A1A1A] overflow-hidden">
      {/* Animated background elements - Gold/Copper */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#D1A65E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D1A65E] rounded-full blur-3xl"></div>
      </div>

      {/* Subtle grain texture - Design System V6.2 */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#D1A65E]/10 backdrop-blur-sm border border-[#D1A65E]/30 rounded-full px-6 py-3 mb-8"
          >
            <AlertTriangle className="w-5 h-5 text-[#D1A65E]" strokeWidth={1.5} />
            <span className="text-[#D1A65E] text-sm">Places limitées</span>
          </motion.div>

          {/* Main Urgency Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-6 leading-tight"
          >
            Nous ne prenons qu'un <span className="text-[#D1A65E]">client par métier</span> et par ville.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
          >
            Votre concurrent a déjà demandé l'Audit ?
          </motion.p>

          {/* Massive CTA - Vert Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <Button
              onClick={handleClick}
              size="lg"
              className="bg-[#10b981] hover:bg-[#059669] text-white px-12 py-8 text-lg md:text-xl group shadow-2xl hover:shadow-[#10b981]/30 hover:scale-105 transition-all duration-300 rounded-xl cursor-pointer"
            >
              <span className="mr-3">Je sécurise mon Audit Gratuit Maintenant</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D1A65E] rounded-full animate-pulse"></div>
              <span>Réponse en 48h maximum</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D1A65E] rounded-full animate-pulse"></div>
              <span>Analyse complète de votre situation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D1A65E] rounded-full animate-pulse"></div>
              <span>100% gratuit, 0% engagement</span>
            </div>
          </motion.div>

          {/* Social Proof Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-12 border-t border-[#D1A65E]/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl text-[#D1A65E] mb-2">47</div>
                <div className="text-sm text-white/70">Sites livrés</div>
              </div>
              <div>
                <div className="text-4xl text-[#D1A65E] mb-2">100%</div>
                <div className="text-sm text-white/70">Score garantit</div>
              </div>
              <div>
                <div className="text-4xl text-[#D1A65E] mb-2">14j</div>
                <div className="text-sm text-white/70">Délai moyen</div>
              </div>
              <div>
                <div className="text-4xl text-[#D1A65E] mb-2">+40%</div>
                <div className="text-sm text-white/70">Visibilité moyenne</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}