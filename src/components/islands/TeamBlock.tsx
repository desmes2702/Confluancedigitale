import React from 'react';
import { Award, TrendingUp, ShieldCheck } from 'lucide-react';

interface TeamMember {
    name: string;
    role: string;
    description: string;
    icon: React.ReactNode;
    imageUrl: string;
    nameColor: string;
}

interface TeamBlockProps {
    variant?: 'default' | 'compact';
    images?: {
        antoine: string;
        pascal: string;
        laly: string;
    };
}

export const TeamBlock = ({ variant = 'default', images }: TeamBlockProps) => {
    const teamMembers: TeamMember[] = [
        {
            name: "Antoine",
            role: "Garant de la Performance & Conversion",
            description: "En tant qu'Architecte UX/UI et Expert Technique de l'entreprise, je garantis personnellement que votre design (V6.7) sera premium et que votre performance technique atteindra 100/100.",
            icon: <Award className="w-6 h-6 text-premium" strokeWidth={1.5} />,
            imageUrl: images?.antoine || "https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI1MDU0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
            nameColor: "#D1A65E"
        },
        {
            name: "Pascal",
            role: "Garant de la Stratégie (Zéro Jargon)",
            description: "En tant que Conseiller Numérique et Resp. d'Espace de Médiation (RENM), mon expertise (Marketing) est de traduire la technique en chiffre d'affaires pour votre croissance locale.",
            icon: <TrendingUp className="w-6 h-6 text-cta" strokeWidth={1.5} />,
            imageUrl: images?.pascal || "https://images.unsplash.com/photo-1709715357564-ab64e091ead9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hcmtldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjI0MTk0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
            nameColor: "#10b981"
        },
        {
            name: "Laly",
            role: "Garante de la Sérénité & l'Autonomie",
            description: "En tant qu'Enseignante spécialisée, ma pédagogie est votre garantie. Je vous forme à Strapi avec clarté, pour que vous soyez 100% autonome sans rien casser.",
            icon: <ShieldCheck className="w-6 h-6 text-contractual" strokeWidth={1.5} />,
            imageUrl: images?.laly || "https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyNDc1NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
            nameColor: "#A32E3A"
        }
    ];

    return (
        <div className="w-full">
            {/* Grille de Profils */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white border border-[#E5E7EB] rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-premium/30"
                        style={{ boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.04)' }}
                    >
                        {/* Photo de Profil */}
                        <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 md:mb-6">
                            <img
                                src={member.imageUrl}
                                alt={`Photo de ${member.name}`}
                                loading="lazy"
                                className="w-full h-full object-cover rounded-full border-4 border-premium/20"
                            />
                            {/* Badge Icône en bas à droite */}
                            <div className="absolute -bottom-1 -right-1 w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-premium/30 rounded-full flex items-center justify-center">
                                {member.icon}
                            </div>
                        </div>

                        {/* Contenu */}
                        <div className="text-center">
                            <h3
                                className="text-xl md:text-2xl mb-1 md:mb-2"
                                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, color: member.nameColor }}
                            >
                                {member.name}
                            </h3>
                            <p className="text-sm md:text-base text-[#1A1A1A] mb-3 md:mb-4">
                                <strong>{member.role}</strong>
                            </p>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                {member.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
