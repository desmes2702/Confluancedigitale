import { motion } from 'motion/react';

interface ArcGaugeProps {
    currentStep: number;
    totalSteps: number;
}

export function ArcGauge({ currentStep, totalSteps }: ArcGaugeProps) {
    // Calcul du pourcentage basé sur les champs VALIDÉS (currentStep - 1)
    // Step 1 = 0%, Step 2 = 20%, Step 3 = 40%, Step 4 = 60%, Step 5 = 80%, Step 6 = 100%
    const validatedFields = currentStep - 1;
    const percentage = (validatedFields / totalSteps) * 100;

    // L'arc fait 180° (demi-cercle)
    // strokeDasharray définit la circonférence totale de l'arc
    // Pour un arc de rayon 80 et 180°, la longueur d'arc est π * r = π * 80 ≈ 251
    const radius = 80;
    const circumference = Math.PI * radius;

    // strokeDashoffset : on part de la circonférence complète et on réduit selon le %
    const strokeDashoffset = circumference - (circumference * percentage) / 100;

    return (
        <div className="flex flex-col items-center justify-center py-6 md:py-8">
            {/* SVG Arc Gauge */}
            <svg
                width="200"
                height="120"
                viewBox="0 0 200 120"
                className="overflow-visible"
            >
                {/* Arc de fond (Or/Cuivre à 10% d'opacité) */}
                <path
                    d="M 20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="rgba(209, 166, 94, 0.1)"
                    strokeWidth="12"
                    strokeLinecap="round"
                />

                {/* Arc de progression (Or/Cuivre solide avec animation) */}
                <motion.path
                    d="M 20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="#D1A65E"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />

                {/* Pourcentage au centre de l'arc */}
                <text
                    x="100"
                    y="95"
                    textAnchor="middle"
                    className="text-3xl md:text-4xl"
                    style={{ fontFamily: 'Playfair Display, serif', fill: '#D1A65E', fontWeight: 400 }}
                >
                    {Math.round(percentage)}%
                </text>
            </svg>
        </div>
    );
}
