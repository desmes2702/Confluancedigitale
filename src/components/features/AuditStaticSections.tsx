import {
    BarChart3,
    MapPin,
    GraduationCap,
    CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';

export const AuditFeatures = () => {
    const auditContent = [
        {
            icon: BarChart3,
            title: 'Analyse Technique (par Antoine)',
            points: [
                'Score PageSpeed actuel vs. 100/100 garanti',
                'Vitesse de chargement (mobile/desktop)',
                'Points de blocage conversion (design)',
            ],
            garant: 'antoine' as const,
        },
        {
            icon: MapPin,
            title: 'Analyse Stratégie Locale (par Pascal)',
            points: [
                'Position Google (ville + métier)',
                'Mots-clés gagnants de votre zone',
                'Analyse concurrence locale',
                'Potentiel de croissance chiffré',
            ],
            garant: 'pascal' as const,
        },
        {
            icon: GraduationCap,
            title: 'Plan d\'Autonomie (par Laly)',
            points: [
                'Interface Strapi expliquée en français clair',
                'Temps estimé pour gérer seul (5 min/sem.)',
                'Support inclus si besoin (illimité)',
            ],
            garant: 'laly' as const,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {auditContent.map((item, index) => (
                <motion.div
                    key={item.title}
                    className="bg-white p-6 md:p-8 rounded-2xl border border-[#E5E7EB] hover:border-[#D1A65E] transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
                >
                    <item.icon
                        className={`w-10 h-10 mb-4 ${item.garant === 'antoine'
                                ? 'text-[#D1A65E]'
                                : item.garant === 'pascal'
                                    ? 'text-[#10b981]'
                                    : 'text-[#A32E3A]'
                            }`}
                        strokeWidth={1.5}
                    />
                    <h3 className="text-2xl text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {item.title}
                    </h3>
                    <ul className="space-y-2 text-[#374151]">
                        {item.points.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                                <CheckCircle2
                                    className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5"
                                    strokeWidth={2}
                                />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
    );
};

export const AuditWhyFree = () => {
    const whyFreeContent = [
        {
            title: 'Antoine prouve son expertise',
            description: 'Pas de bla-bla. Il vous montre par A+B les failles techniques et comment il garantit le 100/100.',
            garant: 'antoine' as const,
        },
        {
            title: 'Pascal révèle votre potentiel',
            description: 'Pas de promesse vague. Il vous montre les chiffres de votre marché local et qui prend vos clients aujourd\'hui.',
            garant: 'pascal' as const,
        },
        {
            title: 'Laly lève vos doutes',
            description: 'Pas de piège technique. Elle vous montre l\'interface simple et vous rassure sur votre future autonomie.',
            garant: 'laly' as const,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyFreeContent.map((item, index) => (
                <motion.div
                    key={item.title}
                    className="bg-white p-6 md:p-8 rounded-2xl border border-[#E5E7EB] text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    style={{ boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.04)' }}
                >
                    <div
                        className={`w-12 h-12 rounded-full grid place-items-center mx-auto mb-4 ${item.garant === 'antoine'
                                ? 'bg-[#D1A65E]/10 text-[#D1A65E]'
                                : item.garant === 'pascal'
                                    ? 'bg-[#10b981]/10 text-[#10b981]'
                                    : 'bg-[#A32E3A]/10 text-[#A32E3A]'
                            }`}
                    >
                        {item.garant === 'antoine' ? (
                            <BarChart3 className="w-6 h-6" />
                        ) : item.garant === 'pascal' ? (
                            <MapPin className="w-6 h-6" />
                        ) : (
                            <GraduationCap className="w-6 h-6" />
                        )}
                    </div>
                    <h3 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {item.title}
                    </h3>
                    <p className="text-[#374151]">{item.description}</p>
                </motion.div>
            ))}
        </div>
    );
};
