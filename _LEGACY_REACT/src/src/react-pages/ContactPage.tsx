import React from 'react';
import { DSSectionHeader } from '@/react-components/ui/DSSectionHeader';
import { DSCard } from '@/react-components/ui/DSCard';
import { ContactForm } from '@/react-islands/ContactForm';

/**
 * Page Contact
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - Static page with ContactForm island
 * 
 * Changes:
 * - Removed Lucide icons (Phone, Mail, MapPin, User, MessageSquare) → Inline SVG
 * - Using ContactForm island for form (client:load in Astro)
 * - Using DSCard for contact info
 * - Zero dependencies on Radix/CVA/Lucide
 * - Ready for Astro conversion
 * 
 * Astro usage:
 * <ContactForm client:load />
 */

// ===== INLINE SVG ICONS =====

const PhoneIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const MapPinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const MessageSquareIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const ClockIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header placeholder */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-gray-500">Header placeholder</p>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <DSSectionHeader
              title="Contactez-nous"
              subtitle="Nous sommes à votre écoute"
              description="Une question, un projet ? Discutons-en ensemble. Nous vous répondons généralement sous 24h."
              align="center"
              accent={true}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form Column - React Island */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquareIcon className="w-8 h-8 text-[#D1A65E]" />
                  <h2 
                    className="text-[#1A1A1A]" 
                    style={{ fontFamily: 'Playfair Display', fontSize: '2rem' }}
                  >
                    Envoyez-nous un message
                  </h2>
                </div>
                <p className="text-gray-600">
                  Remplissez le formulaire ci-dessous et nous reviendrons vers vous rapidement.
                </p>
              </div>

              {/* ContactForm Island - Will be used with client:load in Astro */}
              <ContactForm />
            </div>

            {/* Info Column - Static */}
            <div className="space-y-6">
              {/* Contact Info Card */}
              <DSCard variant="bordered">
                <DSCard.Header>
                  <h3 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                    Nos coordonnées
                  </h3>
                </DSCard.Header>
                <DSCard.Body>
                  <div className="space-y-4">
                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <PhoneIcon className="w-6 h-6 text-[#D1A65E] flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Téléphone</div>
                        <a 
                          href="tel:+33123456789" 
                          className="text-[#1A1A1A] hover:text-[#D1A65E] transition-colors"
                        >
                          01 23 45 67 89
                        </a>
                        <p className="text-sm text-gray-500 mt-1">
                          Lun-Ven : 9h-18h
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <MailIcon className="w-6 h-6 text-[#D1A65E] flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Email</div>
                        <a 
                          href="mailto:contact@confluence-digitale.fr" 
                          className="text-[#1A1A1A] hover:text-[#D1A65E] transition-colors"
                        >
                          contact@confluence-digitale.fr
                        </a>
                        <p className="text-sm text-gray-500 mt-1">
                          Réponse sous 24h
                        </p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="w-6 h-6 text-[#D1A65E] flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Adresse</div>
                        <p className="text-[#1A1A1A]">
                          123 Avenue du Digital<br />
                          75001 Paris, France
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <ClockIcon className="w-6 h-6 text-[#D1A65E] flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Horaires</div>
                        <p className="text-[#1A1A1A]">
                          Lundi - Vendredi : 9h - 18h<br />
                          Samedi - Dimanche : Fermé
                        </p>
                      </div>
                    </div>
                  </div>
                </DSCard.Body>
              </DSCard>

              {/* FAQ Card */}
              <DSCard variant="elevated">
                <DSCard.Header>
                  <h3 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                    Besoin d'une réponse rapide ?
                  </h3>
                </DSCard.Header>
                <DSCard.Body>
                  <p className="text-gray-600 mb-4">
                    Consultez notre FAQ ou réservez directement un créneau pour un appel découverte gratuit.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a 
                      href="/offre#faq" 
                      className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors font-semibold inline-flex items-center gap-2"
                    >
                      → Voir la FAQ
                    </a>
                    <a 
                      href="/reservation" 
                      className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors font-semibold inline-flex items-center gap-2"
                    >
                      → Réserver un appel
                    </a>
                  </div>
                </DSCard.Body>
              </DSCard>

              {/* Social proof */}
              <div className="bg-[#10b981] bg-opacity-10 rounded-xl p-6 border border-[#10b981]">
                <p className="text-sm text-gray-700">
                  <strong className="text-[#10b981]">⚡ Réponse rapide garantie</strong>
                  <br />
                  Nous nous engageons à répondre à tous les messages dans les 24 heures ouvrées. 
                  En cas d'urgence, appelez-nous directement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="container mx-auto px-4 py-16">
          <DSSectionHeader
            title="Nous trouver"
            subtitle="Notre bureau à Paris"
            align="center"
            accent={true}
          />

          <div className="mt-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Placeholder for map - replace with actual map embed */}
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPinIcon className="w-16 h-16 mx-auto mb-4 text-[#D1A65E]" />
                  <p className="text-lg">Carte interactive</p>
                  <p className="text-sm mt-2">
                    123 Avenue du Digital, 75001 Paris
                  </p>
                  <p className="text-sm text-gray-400 mt-4">
                    Google Maps iframe sera intégré ici
                  </p>
                </div>
              </div>
            </div>

            {/* Transport info */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <div className="text-2xl mb-2">🚇</div>
                <div className="font-semibold text-[#1A1A1A] mb-1">Métro</div>
                <div className="text-sm text-gray-600">
                  Ligne 1, 7 - Station Palais Royal
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <div className="text-2xl mb-2">🚌</div>
                <div className="font-semibold text-[#1A1A1A] mb-1">Bus</div>
                <div className="text-sm text-gray-600">
                  Lignes 21, 27, 39, 95
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <div className="text-2xl mb-2">🅿️</div>
                <div className="font-semibold text-[#1A1A1A] mb-1">Parking</div>
                <div className="text-sm text-gray-600">
                  Parking public à 100m
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative contact methods */}
        <section className="bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] text-white py-16">
          <div className="container mx-auto px-4">
            <DSSectionHeader
              title="Autres moyens de nous contacter"
              subtitle="Choisissez votre canal préféré"
              align="center"
              accent={true}
            />

            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="w-8 h-8 text-[#D1A65E]" />
                </div>
                <h3 className="text-white mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  Par téléphone
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Pour une réponse immédiate
                </p>
                <a 
                  href="tel:+33123456789"
                  className="text-[#D1A65E] hover:text-white transition-colors"
                >
                  01 23 45 67 89
                </a>
              </div>

              <div className="text-center">
                <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquareIcon className="w-8 h-8 text-[#D1A65E]" />
                </div>
                <h3 className="text-white mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  Rendez-vous
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Réservez un créneau
                </p>
                <a 
                  href="/reservation"
                  className="text-[#D1A65E] hover:text-white transition-colors"
                >
                  Prendre RDV
                </a>
              </div>

              <div className="text-center">
                <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MailIcon className="w-8 h-8 text-[#D1A65E]" />
                </div>
                <h3 className="text-white mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  Par email
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Réponse sous 24h
                </p>
                <a 
                  href="mailto:contact@confluence-digitale.fr"
                  className="text-[#D1A65E] hover:text-white transition-colors"
                >
                  Nous écrire
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer placeholder */}
      <footer className="bg-[#1A1A1A] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">Footer placeholder</p>
        </div>
      </footer>
    </div>
  );
}
