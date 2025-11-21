import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { ContractualReassurance } from "./ContractualReassurance";

export const ReservationBenefits = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl md:rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] p-6 md:p-8 lg:p-10"
            style={{ boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.04)' }}
        >
            <div className="text-center mb-6 md:mb-8">
                <h2
                    className="text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] mb-3 font-playfair font-normal"
                >
                    Le Privilège de l'Exclusivité
                </h2>
                <p className="text-sm md:text-base text-gray-700">
                    Un engagement mutuel pour votre succès territorial.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-[#10b981]" strokeWidth={2} />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg text-[#1A1A1A] mb-1">
                            <strong>Territoire protégé</strong>
                        </h3>
                        <p className="text-sm text-gray-600">
                            Aucun concurrent direct dans votre zone de 30km.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-[#10b981]" strokeWidth={2} />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg text-[#1A1A1A] mb-1">
                            <strong>Visibilité maximale</strong>
                        </h3>
                        <p className="text-sm text-gray-600">
                            Référencement prioritaire sur votre secteur d'activité.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-[#10b981]" strokeWidth={2} />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg text-[#1A1A1A] mb-1">
                            <strong>Accompagnement dédié</strong>
                        </h3>
                        <p className="text-sm text-gray-600">
                            Un interlocuteur unique qui connaît votre métier.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-[#10b981]" strokeWidth={2} />
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg text-[#1A1A1A] mb-1">
                            <strong>Transparence totale</strong>
                        </h3>
                        <p className="text-sm text-gray-600">
                            149€ HT/mois après setup gratuit. Aucun frais caché.
                        </p>
                    </div>
                </div>
            </div>

            <ContractualReassurance />
        </motion.div>
    );
};
