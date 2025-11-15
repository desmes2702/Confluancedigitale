import { ShieldCheck } from "lucide-react";

/**
 * BATCH 6A : Composant "Transparence Totale"
 * 
 * Bloc de réassurance contractuelle avec accent Rouge Bordeaux (#A32E3A)
 * pour mettre en avant l'engagement minimum de 24 mois de manière transparente.
 * 
 * Design System V6.7 : Fond Rouge Bordeaux transparent + bordure Rouge Bordeaux
 * Optimisé pour footer sur fond noir (#1A1A1A)
 */
export function ContractualReassuranceBlock() {
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
            <strong className="text-[#F3F4F6]">Transparence totale :</strong>
            <br />
            <span className="text-[#D1D5DB]">Nos CGV détaillent l'engagement minimum de 24 mois pour un accompagnement optimal.</span>
          </p>
        </div>
      </div>
    </div>
  );
}