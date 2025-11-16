import React, { useState } from 'react';
import { DSInput } from '@/react-components/ui/DSInput';
import { DSCheckbox } from '@/react-components/ui/DSCheckbox';
import { DSButton } from '@/react-components/ui/DSButton';
import { DSAlert } from '@/react-components/ui/DSAlert';
import { ArcGauge } from './ArcGauge';
import { AuditResults } from './AuditResults';

/**
 * AuditForm Island
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - Complex form with child islands
 * 
 * Features:
 * - URL input for website audit
 * - Email for results delivery
 * - Orchestrates ArcGauge and AuditResults islands
 * - Simulated audit with fake data
 * 
 * Will be used in Astro with: <AuditForm client:load />
 */

interface FormData {
  url: string;
  email: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

interface AuditData {
  globalScore: number;
  results: {
    performance: {
      name: string;
      score: number;
      status: 'good' | 'medium' | 'poor';
      description: string;
    };
    seo: {
      name: string;
      score: number;
      status: 'good' | 'medium' | 'poor';
      description: string;
    };
    accessibility: {
      name: string;
      score: number;
      status: 'good' | 'medium' | 'poor';
      description: string;
    };
    bestPractices: {
      name: string;
      score: number;
      status: 'good' | 'medium' | 'poor';
      description: string;
    };
    recommendations: string[];
  };
}

// ===== INLINE SVG ICONS =====

const SearchIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

const Loader2Icon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    className={`${className} animate-spin`}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
  </svg>
);

export function AuditForm() {
  // ===== STATE =====
  const [formData, setFormData] = useState<FormData>({
    url: '',
    email: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [auditData, setAuditData] = useState<AuditData | null>(null);
  const [submitError, setSubmitError] = useState('');

  // ===== VALIDATION =====
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // URL validation
    if (!formData.url.trim()) {
      newErrors.url = "L'URL est requise";
    } else if (!/^https?:\/\/.+\..+/.test(formData.url)) {
      newErrors.url = 'URL invalide (doit commencer par http:// ou https://)';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    // Consent
    if (!formData.consent) {
      newErrors.consent = 'Vous devez accepter la politique de confidentialité';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ===== SIMULATE AUDIT =====
  const simulateAudit = (): AuditData => {
    // Generate random but realistic scores
    const performance = Math.floor(Math.random() * 30) + 60; // 60-90
    const seo = Math.floor(Math.random() * 30) + 65; // 65-95
    const accessibility = Math.floor(Math.random() * 40) + 50; // 50-90
    const bestPractices = Math.floor(Math.random() * 25) + 70; // 70-95

    const globalScore = Math.round(
      (performance + seo + accessibility + bestPractices) / 4
    );

    const getStatus = (score: number): 'good' | 'medium' | 'poor' => {
      if (score >= 85) return 'good';
      if (score >= 65) return 'medium';
      return 'poor';
    };

    return {
      globalScore,
      results: {
        performance: {
          name: 'Performance',
          score: performance,
          status: getStatus(performance),
          description:
            performance >= 85
              ? 'Excellent ! Votre site charge rapidement.'
              : performance >= 65
              ? 'Correct, mais des optimisations sont possibles.'
              : 'Attention : votre site est trop lent.',
        },
        seo: {
          name: 'SEO',
          score: seo,
          status: getStatus(seo),
          description:
            seo >= 85
              ? 'Très bon référencement naturel.'
              : seo >= 65
              ? 'Bon départ, quelques améliorations possibles.'
              : 'Votre SEO nécessite une refonte.',
        },
        accessibility: {
          name: 'Accessibilité',
          score: accessibility,
          status: getStatus(accessibility),
          description:
            accessibility >= 85
              ? 'Site accessible à tous.'
              : accessibility >= 65
              ? "Quelques problèmes d'accessibilité détectés."
              : "Nombreux problèmes d'accessibilité.",
        },
        bestPractices: {
          name: 'Bonnes pratiques',
          score: bestPractices,
          status: getStatus(bestPractices),
          description:
            bestPractices >= 85
              ? 'Vous respectez les standards web modernes.'
              : bestPractices >= 65
              ? 'Globalement conforme aux standards.'
              : 'Plusieurs bonnes pratiques ne sont pas respectées.',
        },
        recommendations: [
          'Optimiser les images (format WebP, lazy loading)',
          'Améliorer les balises meta pour le SEO',
          'Corriger les problèmes de contraste des couleurs',
          'Ajouter des textes alternatifs aux images',
          'Réduire le temps de chargement des scripts',
          'Mettre en place un certificat SSL valide',
        ].slice(0, Math.floor(Math.random() * 3) + 3), // 3-5 recommendations
      },
    };
  };

  // ===== FORM SUBMISSION =====
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    setIsAnalyzing(true);

    try {
      // Simulate API call with delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Generate fake audit data
      const data = simulateAudit();
      setAuditData(data);

      // Scroll to results
      setTimeout(() => {
        document.getElementById('audit-results')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    } catch (error) {
      setSubmitError(
        "Une erreur est survenue lors de l'analyse. Veuillez réessayer."
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  // ===== RENDER =====
  return (
    <div className="space-y-12">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* URL Input */}
        <DSInput
          type="url"
          label="URL de votre site web"
          placeholder="https://monsite.fr"
          value={formData.url}
          onChange={(e) => {
            setFormData({ ...formData, url: e.target.value });
            if (errors.url) setErrors({ ...errors, url: '' });
          }}
          error={errors.url}
          required
          helperText="L'URL complète de votre site (avec http:// ou https://)"
          disabled={isAnalyzing}
        />

        {/* Email Input */}
        <DSInput
          type="email"
          label="Votre email"
          placeholder="vous@exemple.fr"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: '' });
          }}
          error={errors.email}
          required
          helperText="Pour recevoir le rapport complet par email"
          disabled={isAnalyzing}
        />

        {/* Consent */}
        <DSCheckbox
          label={
            <span>
              J'accepte la{' '}
              <a
                href="/politique-confidentialite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D1A65E] hover:text-[#A32E3A] underline"
              >
                politique de confidentialité
              </a>
            </span>
          }
          checked={formData.consent}
          onChange={(e) => {
            setFormData({ ...formData, consent: e.target.checked });
            if (errors.consent) setErrors({ ...errors, consent: '' });
          }}
          error={errors.consent}
          disabled={isAnalyzing}
        />

        {/* Error Alert */}
        {submitError && (
          <DSAlert variant="error" title="Erreur">
            {submitError}
          </DSAlert>
        )}

        {/* Submit Button */}
        <DSButton
          type="submit"
          variant="primary"
          size="lg"
          disabled={isAnalyzing}
          className="w-full inline-flex items-center justify-center gap-2"
        >
          {isAnalyzing ? (
            <>
              <Loader2Icon className="w-5 h-5" />
              Analyse en cours...
            </>
          ) : (
            <>
              <SearchIcon className="w-5 h-5" />
              Lancer l'audit gratuit
            </>
          )}
        </DSButton>

        {/* Info */}
        <p className="text-sm text-gray-500 text-center">
          ✨ Audit 100% gratuit • Résultats instantanés • Sans engagement
        </p>
      </form>

      {/* Results (shown after analysis) */}
      {auditData && (
        <div id="audit-results" className="space-y-8">
          {/* Divider */}
          <div className="border-t border-gray-200 pt-8">
            <h3
              className="text-[#1A1A1A] text-center mb-8"
              style={{ fontFamily: 'Playfair Display', fontSize: '2rem' }}
            >
              Résultats de l'audit
            </h3>
          </div>

          {/* Global Score with ArcGauge */}
          <div className="flex flex-col items-center gap-6 bg-white rounded-2xl p-8 shadow-lg">
            <div>
              <h4 className="text-center text-gray-600 mb-4">Score global</h4>
              <ArcGauge score={auditData.globalScore} size={220} />
            </div>
            <div className="text-center max-w-md">
              <p className="text-gray-700">
                {auditData.globalScore >= 85
                  ? '🎉 Excellent ! Votre site est très performant.'
                  : auditData.globalScore >= 65
                  ? '👍 Bon score, mais des améliorations sont possibles.'
                  : '⚠️ Votre site nécessite des optimisations importantes.'}
              </p>
            </div>
          </div>

          {/* Detailed Results with AuditResults island */}
          <AuditResults results={auditData.results} />

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#D1A65E] to-[#A32E3A] rounded-2xl p-8 text-center text-white">
            <h4
              className="text-white mb-3"
              style={{ fontFamily: 'Playfair Display', fontSize: '1.75rem' }}
            >
              Besoin d'aide pour améliorer ces résultats ?
            </h4>
            <p className="text-white text-opacity-90 mb-6">
              Nous analysons votre site en profondeur et vous proposons un plan
              d'action personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-[#1A1A1A] px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Discutons de votre projet
              </a>
              <a
                href="/offre"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 font-semibold"
              >
                Voir nos offres
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
