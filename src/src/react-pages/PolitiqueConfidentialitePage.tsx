import React from 'react';
import { DSSectionHeader } from '@/react-components/ui/DSSectionHeader';

/**
 * Page Politique de Confidentialité
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - 100% Static - No islands needed
 * 
 * Changes:
 * - Removed Lucide icons (Shield, Lock) → Inline SVG
 * - Using DSSectionHeader for page title
 * - Pure HTML/Tailwind for content
 * - Zero dependencies on Radix/CVA/Lucide
 * - Ready for Astro conversion
 */

const ShieldIcon = () => (
  <svg 
    className="w-12 h-12 text-[#10b981]" 
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

const LockIcon = () => (
  <svg 
    className="w-6 h-6 text-[#D1A65E]" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header placeholder */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-gray-500">Header placeholder</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="flex flex-col items-center mb-12">
          <ShieldIcon />
          <DSSectionHeader
            title="Politique de Confidentialité"
            subtitle="Protection de vos données personnelles"
            description="Confluence Digitale s'engage à protéger votre vie privée et vos données personnelles conformément au RGPD"
            align="center"
            accent={true}
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <LockIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Introduction
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                La présente Politique de Confidentialité décrit la façon dont Confluence Digitale collecte, utilise, conserve et protège les informations personnelles que vous nous fournissez via notre site web.
              </p>
              <p>
                Nous nous engageons à respecter votre vie privée et à protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
            </div>
          </section>

          {/* Responsable du traitement */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <LockIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Responsable du traitement
              </h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Raison sociale :</strong> Confluence Digitale SARL
              </p>
              <p>
                <strong>Adresse :</strong> 123 Avenue du Digital, 75001 Paris, France
              </p>
              <p>
                <strong>Email :</strong>{' '}
                <a 
                  href="mailto:contact@confluence-digitale.fr"
                  className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors"
                >
                  contact@confluence-digitale.fr
                </a>
              </p>
            </div>
          </section>

          {/* Données collectées */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <LockIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Données collectées
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Nous collectons les données personnelles suivantes lorsque vous utilisez notre site :
              </p>
              
              <div className="space-y-3">
                <div className="pl-6 border-l-2 border-[#D1A65E]">
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">
                    Données d'identification
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Nom de l'entreprise (si applicable)</li>
                  </ul>
                </div>

                <div className="pl-6 border-l-2 border-[#D1A65E]">
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">
                    Données de navigation
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées</li>
                    <li>Durée de visite</li>
                    <li>Date et heure de connexion</li>
                  </ul>
                </div>

                <div className="pl-6 border-l-2 border-[#D1A65E]">
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">
                    Données de communication
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Messages envoyés via les formulaires de contact</li>
                    <li>Historique des échanges</li>
                    <li>Préférences de communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Finalités du traitement */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <LockIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Finalités du traitement
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Gestion des demandes de contact :</strong> répondre à vos questions et demandes d'information
                </li>
                <li>
                  <strong>Fourniture de nos services :</strong> création de devis, suivi de projet, livraison des prestations
                </li>
                <li>
                  <strong>Communication :</strong> envoi de newsletters, actualités et offres (avec votre consentement)
                </li>
                <li>
                  <strong>Amélioration de nos services :</strong> analyse statistique anonymisée de l'utilisation du site
                </li>
                <li>
                  <strong>Respect de nos obligations légales :</strong> comptabilité, facturation, archivage
                </li>
              </ul>
            </div>
          </section>

          {/* Base légale */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <LockIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Base légale du traitement
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Le traitement de vos données personnelles repose sur les bases légales suivantes :
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Votre consentement :</strong> pour l'envoi de communications commerciales
                </li>
                <li>
                  <strong>L'exécution d'un contrat :</strong> pour la fourniture de nos services
                </li>
                <li>
                  <strong>Notre intérêt légitime :</strong> pour l'amélioration de nos services et la sécurité du site
                </li>
                <li>
                  <strong>Nos obligations légales :</strong> pour la comptabilité et l'archivage légal
                </li>
              </ul>
            </div>
          </section>

          {/* Durée de conservation */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <LockIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Durée de conservation
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Données de contact :</strong> 3 ans à compter du dernier contact
                </li>
                <li>
                  <strong>Données de prospects :</strong> 3 ans à compter de leur collecte
                </li>
                <li>
                  <strong>Données clients :</strong> 10 ans conformément aux obligations comptables
                </li>
                <li>
                  <strong>Données de navigation :</strong> 13 mois maximum
                </li>
              </ul>
            </div>
          </section>

          {/* Vos droits */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border-2 border-[#10b981]">
            <div className="flex items-start gap-3 mb-4">
              <LockIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Vos droits
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold text-[#1A1A1A]">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              
              <div className="space-y-3">
                <div className="bg-[#F9FAFB] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">
                    ✓ Droit d'accès
                  </h3>
                  <p>
                    Vous pouvez obtenir la confirmation que vos données sont traitées et accéder à ces données
                  </p>
                </div>

                <div className="bg-[#F9FAFB] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">
                    ✓ Droit de rectification
                  </h3>
                  <p>
                    Vous pouvez demander la correction de vos données inexactes ou incomplètes
                  </p>
                </div>

                <div className="bg-[#F9FAFB] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">
                    ✓ Droit à l'effacement
                  </h3>
                  <p>
                    Vous pouvez demander la suppression de vos données dans certaines conditions
                  </p>
                </div>

                <div className="bg-[#F9FAFB] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">
                    ✓ Droit à la limitation
                  </h3>
                  <p>
                    Vous pouvez demander la limitation du traitement de vos données
                  </p>
                </div>

                <div className="bg-[#F9FAFB] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">
                    ✓ Droit d'opposition
                  </h3>
                  <p>
                    Vous pouvez vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière
                  </p>
                </div>

                <div className="bg-[#F9FAFB] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">
                    ✓ Droit à la portabilité
                  </h3>
                  <p>
                    Vous pouvez recevoir vos données dans un format structuré et les transmettre à un autre responsable
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#10b981] bg-opacity-10 rounded-lg border border-[#10b981]">
                <p className="font-semibold text-[#1A1A1A] mb-2">
                  Comment exercer vos droits ?
                </p>
                <p>
                  Pour exercer vos droits, contactez-nous à l'adresse :{' '}
                  <a 
                    href="mailto:contact@confluence-digitale.fr"
                    className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors font-semibold"
                  >
                    contact@confluence-digitale.fr
                  </a>
                </p>
                <p className="mt-2 text-sm">
                  Nous nous engageons à répondre à votre demande dans un délai d'un mois.
                </p>
              </div>
            </div>
          </section>

          {/* Sécurité */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <LockIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Sécurité de vos données
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles :
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Chiffrement SSL/TLS pour toutes les communications</li>
                <li>Stockage sécurisé des données</li>
                <li>Accès limité aux données personnelles</li>
                <li>Authentification forte pour nos systèmes</li>
                <li>Sauvegardes régulières et sécurisées</li>
                <li>Surveillance continue des accès</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <LockIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Cookies et traceurs
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Nous utilisons uniquement :
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site (pas de consentement requis)
                </li>
                <li>
                  <strong>Cookies analytiques :</strong> pour comprendre l'utilisation du site (avec votre consentement)
                </li>
              </ul>

              <p>
                Vous pouvez à tout moment modifier vos préférences de cookies via les paramètres de votre navigateur.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <LockIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Contact et réclamation
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits, vous pouvez nous contacter :
              </p>
              
              <div className="bg-[#F9FAFB] rounded-lg p-4">
                <p>
                  <strong>Email :</strong>{' '}
                  <a 
                    href="mailto:contact@confluence-digitale.fr"
                    className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors"
                  >
                    contact@confluence-digitale.fr
                  </a>
                </p>
                <p className="mt-2">
                  <strong>Courrier :</strong> Confluence Digitale SARL, 123 Avenue du Digital, 75001 Paris, France
                </p>
              </div>

              <p className="mt-4">
                Vous avez également le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
              </p>
              
              <div className="bg-[#F9FAFB] rounded-lg p-4">
                <p><strong>CNIL</strong></p>
                <p>3 Place de Fontenoy - TSA 80715</p>
                <p>75334 PARIS CEDEX 07</p>
                <p>Tél : 01 53 73 22 22</p>
                <p>
                  Site web :{' '}
                  <a 
                    href="https://www.cnil.fr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors"
                  >
                    www.cnil.fr
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Mise à jour */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <LockIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Mise à jour de la politique
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
              </p>
              <p className="font-semibold">
                Dernière mise à jour : 16 novembre 2025
              </p>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Des questions sur la protection de vos données ?</p>
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
