import React, { useState } from 'react';
import { DSAccordion } from '@/react-components/ui/DSAccordion';

/**
 * FAQ Island
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - FAQ with DSAccordion
 * 
 * Features:
 * - Accordion FAQ with DSAccordion component
 * - Multiple items expand/collapse
 * - Smooth animations
 * 
 * Will be used in Astro with: <FAQ client:load />
 */

export function FAQ() {
  const faqItems = [
    {
      question: "Combien coûte un site web ?",
      answer: "Nos tarifs varient de 2 500€ à 10 000€+ selon la complexité. Un site vitrine simple démarre à 2 500€, tandis qu'un e-commerce complet peut atteindre 10 000€. Chaque projet est unique : contactez-nous pour un devis personnalisé gratuit."
    },
    {
      question: "Quels sont les délais de réalisation ?",
      answer: "Comptez 4 à 6 semaines pour un site vitrine, 8 à 12 semaines pour un e-commerce. Les délais incluent la conception, le développement, les tests et la formation. Nous nous engageons sur des délais réalistes et tenables."
    },
    {
      question: "Puis-je modifier mon site moi-même après la livraison ?",
      answer: "Oui, absolument ! Nous utilisons des technologies modernes et vous formons à la gestion de votre contenu. Vous pourrez modifier textes, images et ajouter des pages en toute autonomie grâce à une interface intuitive."
    },
    {
      question: "Mon site sera-t-il compatible mobile ?",
      answer: "Tous nos sites sont 100% responsive et mobile-first. Plus de 60% du trafic web vient du mobile : nous optimisons donc chaque page pour une expérience parfaite sur smartphone, tablette et desktop."
    },
    {
      question: "Qu'est-ce qui est inclus dans vos forfaits ?",
      answer: "Tous nos forfaits incluent : design responsive, optimisation SEO basique, sécurisation SSL, conformité RGPD, formation à la gestion, support 30 jours post-livraison, et hébergement la première année."
    },
    {
      question: "Proposez-vous de la maintenance ?",
      answer: "Oui ! Nous proposons des forfaits de maintenance mensuels comprenant : mises à jour de sécurité, sauvegardes quotidiennes, monitoring de performance, corrections de bugs et support technique prioritaire."
    },
    {
      question: "Mon site sera-t-il bien référencé sur Google ?",
      answer: "Nous intégrons les bonnes pratiques SEO dès la conception : structure optimisée, balises meta, vitesse de chargement, sitemap XML, etc. Pour un référencement avancé, nous proposons des prestations SEO complémentaires."
    },
    {
      question: "Puis-je payer en plusieurs fois ?",
      answer: "Oui, nous proposons un paiement en 3 fois sans frais pour tous nos forfaits : 30% à la commande, 40% à la validation des maquettes, 30% à la livraison. Pour les projets > 5000€, des facilités supplémentaires sont possibles."
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <DSAccordion type="multiple">
        {faqItems.map((item, index) => (
          <DSAccordion.Item key={index} value={`item-${index}`}>
            <DSAccordion.Trigger>
              {item.question}
            </DSAccordion.Trigger>
            <DSAccordion.Content>
              {item.answer}
            </DSAccordion.Content>
          </DSAccordion.Item>
        ))}
      </DSAccordion>
    </div>
  );
}
