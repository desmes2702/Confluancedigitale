import React from 'react';
import { DSSectionHeader } from '@/react-components/ui/DSSectionHeader';

/**
 * Page Mentions Légales
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - 100% Static - No islands needed
 * 
 * Changes:
 * - Removed Lucide icons (Scale, Shield) → Inline SVG
 * - Using DSSectionHeader for page title
 * - Pure HTML/Tailwind for content
 * - Zero dependencies on Radix/CVA/Lucide
 * - Ready for Astro conversion
 */

const ScaleIcon = () => (
  <svg 
    className="w-12 h-12 text-[#D1A65E]" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v18"/>
    <path d="M3 12h18"/>
    <path d="M8 8l-5 5 5 5"/>
    <path d="M16 8l5 5-5 5"/>
  </svg>
);

const ShieldIcon = () => (
  <svg 
    className="w-6 h-6 text-[#10b981]" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header placeholder - will be replaced by Astro component */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-gray-500">Header placeholder</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Page Header with icon */}
        <div className="flex flex-col items-center mb-12">
          <ScaleIcon />
          <DSSectionHeader
            title="Mentions Légales"
            subtitle="Informations légales obligatoires"
            description="Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique"
            align="center"
            accent={true}
          />
        </div>

        {/* Legal content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Éditeur du site */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <ShieldIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Éditeur du site
              </h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Raison sociale :</strong> Confluence Digitale SARL
              </p>
              <p>
                <strong>Siège social :</strong> 123 Avenue du Digital, 75001 Paris, France
              </p>
              <p>
                <strong>SIRET :</strong> 123 456 789 00012
              </p>
              <p>
                <strong>Capital social :</strong> 10 000 €
              </p>
              <p>
                <strong>Directeur de la publication :</strong> Antoine Durand
              </p>
              <p>
                <strong>Contact :</strong>{' '}
                <a 
                  href="mailto:contact@confluence-digitale.fr" 
                  className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors"
                >
                  contact@confluence-digitale.fr
                </a>
              </p>
            </div>
          </section>

          {/* Hébergeur */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <ShieldIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Hébergeur
              </h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Raison sociale :</strong> Vercel Inc.
              </p>
              <p>
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
              </p>
              <p>
                <strong>Site web :</strong>{' '}
                <a 
                  href="https://vercel.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors"
                >
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <ShieldIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Propriété intellectuelle
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </div>
          </section>

          {/* Limitation de responsabilité */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <ShieldIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Limitation de responsabilité
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Les informations contenues sur ce site sont aussi précises que possibles et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
              </p>
              <p>
                Si vous constatez une lacune, erreur ou ce qui semble être un dysfonctionnement, merci de bien vouloir le signaler par email à{' '}
                <a 
                  href="mailto:contact@confluence-digitale.fr"
                  className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors"
                >
                  contact@confluence-digitale.fr
                </a>
                , en décrivant le problème de la manière la plus précise possible.
              </p>
            </div>
          </section>

          {/* Liens hypertextes */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <ShieldIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Liens hypertextes
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Confluence Digitale.
              </p>
            </div>
          </section>

          {/* CNIL */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <ShieldIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Protection des données personnelles
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante :{' '}
                <a 
                  href="mailto:contact@confluence-digitale.fr"
                  className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors"
                >
                  contact@confluence-digitale.fr
                </a>
              </p>
              <p>
                Pour plus d'informations, consultez notre{' '}
                <a 
                  href="/politique-confidentialite" 
                  className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors"
                >
                  Politique de Confidentialité
                </a>
                .
              </p>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Une question sur nos mentions légales ?</p>
          <a 
            href="/contact"
            className="inline-block bg-[#D1A65E] text-white px-8 py-3 rounded-lg hover:bg-[#A32E3A] transition-all duration-300"
          >
            Contactez-nous
          </a>
        </div>
      </main>

      {/* Footer placeholder */}
      <footer className="bg-[#1A1A1A] text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">Footer placeholder</p>
        </div>
      </footer>
    </div>
  );
}
