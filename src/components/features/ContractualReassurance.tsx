import { ShieldCheck } from "lucide-react";

export function ContractualReassurance() {
    return (
        <div
            className="mt-6 md:mt-8 p-3 md:p-4 bg-[#A32E3A]/10 border border-[#A32E3A]/50 rounded-lg hover:border-[#A32E3A] transition-colors duration-300"
            style={{
                boxShadow: '0 2px 8px 0 rgba(163, 46, 58, 0.15)'
            }}
        >
            <div className="flex items-start gap-2 md:gap-3">
                <ShieldCheck className="w-4 h-4 text-[#A32E3A] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                    <p className="text-xs leading-relaxed">
                        <strong className="text-[#1A1A1A]">Transparence totale :</strong>
                        <br />
                        <span className="text-gray-600">Nos CGV détaillent l'engagement minimum de 24 mois pour un accompagnement optimal.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
