import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export const ReservationHero = () => {
    const [metier, setMetier] = useState<string>("");
    const [departement, setDepartement] = useState<string>("Lot-et-Garonne");

    useEffect(() => {
        const metierParam = sessionStorage.getItem('reservationMetier') || "";
        setMetier(metierParam);
        setDepartement("Lot-et-Garonne");
    }, []);

    const capitalizeMetier = (metierStr: string): string => {
        if (!metierStr) return "Artisan";
        const formatted = metierStr
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        return formatted;
    };

    const metierDisplay = capitalizeMetier(metier);

    return (
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6 md:mb-8 font-playfair font-normal"
                >
                    Finalisez votre réservation prioritaire
                    {metier && <span className="text-[#D1A65E]"> en tant que {metierDisplay}</span>}
                </h1>

                <div className="max-w-2xl mx-auto mb-6 md:mb-8">
                    <div
                        className="p-4 md:p-6 bg-white/80 border border-[#10b981]/30 rounded-xl"
                        style={{ boxShadow: '0 2px 12px 0 rgba(16, 185, 129, 0.1)' }}
                    >
                        <div className="flex items-start gap-3 md:gap-4">
                            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                            <div className="text-left">
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    <strong className="text-[#10b981]">Zéro répétition.</strong> Nous avons bien noté votre demande d'exclusivité pour le métier de <strong>{metierDisplay}</strong> sur notre zone <strong>{departement}</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
