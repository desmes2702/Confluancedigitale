import React from 'react';
import { DSAccordion } from '../ui/DSAccordion';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

interface FAQProps {
    questions?: FAQItem[];
}

const defaultQuestions: FAQItem[] = [
    {
        id: '1',
        question: 'Combien de temps pour créer mon site ?',
        answer: 'Nous nous engageons contractuellement sur un délai de 30 jours ouvrés pour la mise en ligne de votre site vitrine complet, à partir de la validation de la maquette.'
    },
    {
        id: '2',
        question: 'Le site sera-t-il bien référencé sur Google ?',
        answer: 'Absolument. Nous utilisons Astro et le SSR (Server Side Rendering) pour garantir une structure HTML parfaite et des performances optimales (Core Web Vitals), deux critères essentiels pour le SEO.'
    },
    {
        id: '3',
        question: 'Puis-je modifier le contenu moi-même ?',
        answer: 'Oui, nous intégrons le CMS Strapi qui vous permet de modifier vos textes, images et articles de blog en toute autonomie via une interface simple et sécurisée.'
    },
    {
        id: '4',
        question: 'Proposez-vous une maintenance ?',
        answer: 'Oui, nous proposons des forfaits de maintenance incluant les mises à jour de sécurité, les sauvegardes quotidiennes et un support technique prioritaire.'
    }
];

export const FAQ: React.FC<FAQProps> = ({ questions = defaultQuestions }) => {
    const items = questions.map(q => ({
        id: q.id,
        title: q.question,
        content: <p className="text-gray-600 leading-relaxed">{q.answer}</p>
    }));

    return (
        <div className="max-w-3xl mx-auto">
            <DSAccordion items={items} allowMultiple={true} />
        </div>
    );
};
