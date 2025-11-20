import React from 'react';
import { DSButton } from '@/react-components/ui/DSButton';

/**
 * Page 404 - Not Found
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - 100% Static - No islands needed
 * 
 * Changes:
 * - Removed Lucide icons (ArrowRight, Home, AlertTriangle) → Inline SVG
 * - Using DSButton for navigation
 * - Simple error page
 * - Zero dependencies on Radix/CVA/Lucide
 * - Ready for Astro conversion (will become 404.astro)
 */

// ===== INLINE SVG ICONS =====

const AlertTriangleIcon = () => (
  <svg 
    className="w-24 h-24 text-[#D1A65E]" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const HomeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const ArrowRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      {/* Header placeholder */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-gray-500">Header placeholder</p>
        </div>
      </header>

      {/* 404 Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <AlertTriangleIcon />
          </div>

          {/* 404 Number */}
          <div 
            className="text-[#1A1A1A] mb-6" 
            style={{ 
              fontFamily: 'Playfair Display',
              fontSize: '8rem',
              fontWeight: 'bold',
              lineHeight: 1
            }}
          >
            404
          </div>

          {/* Title */}
          <h1 
            className="text-[#1A1A1A] mb-4" 
            style={{ 
              fontFamily: 'Playfair Display',
              fontSize: '2.5rem'
            }}
          >
            Page introuvable
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-8 text-lg">
            Oups ! La page que vous recherchez semble avoir disparu. <br />
            Elle a peut-être été déplacée, supprimée ou n'a jamais existé.
          </p>

          {/* Suggestions */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-[#1A1A1A] mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Que faire maintenant ?
            </h2>
            <ul className="text-left space-y-3 max-w-md mx-auto text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#10b981] font-bold">→</span>
                <span>Vérifiez l'URL pour vous assurer qu'elle est correcte</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10b981] font-bold">→</span>
                <span>Retournez à la page d'accueil</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10b981] font-bold">→</span>
                <span>Contactez-nous si vous pensez qu'il s'agit d'une erreur</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DSButton variant="primary" size="lg" href="/" className="inline-flex items-center gap-2">
              <HomeIcon className="w-5 h-5" />
              Retour à l'accueil
            </DSButton>
            <DSButton variant="outline" size="lg" href="/contact" className="inline-flex items-center gap-2">
              Nous contacter
              <ArrowRightIcon className="w-5 h-5" />
            </DSButton>
          </div>

          {/* Additional links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-4">Pages les plus consultées :</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a 
                href="/offre" 
                className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors"
              >
                Nos offres
              </a>
              <span className="text-gray-300">•</span>
              <a 
                href="/methode" 
                className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors"
              >
                Notre méthode
              </a>
              <span className="text-gray-300">•</span>
              <a 
                href="/etudes-de-cas" 
                className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors"
              >
                Études de cas
              </a>
              <span className="text-gray-300">•</span>
              <a 
                href="/audit-gratuit" 
                className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors"
              >
                Audit gratuit
              </a>
            </div>
          </div>
        </div>
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
