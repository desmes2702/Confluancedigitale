import React, { useState } from 'react';
import { DSInput } from '@/react-components/ui/DSInput';
import { DSCheckbox } from '@/react-components/ui/DSCheckbox';
import { DSButton } from '@/react-components/ui/DSButton';
import { DSAlert } from '@/react-components/ui/DSAlert';
import { DSSelect } from '@/react-components/ui/DSSelect';

/**
 * ReservationForm Island
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - React Island with state management
 * 
 * Pattern: Based on ContactForm pattern
 * 
 * Features:
 * - Reservation/appointment booking form
 * - Project type selection with DSSelect
 * - Budget range selection
 * - Preferred date/time
 * - Full validation
 * 
 * Will be used in Astro with: <ReservationForm client:load />
 */

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  preferredDate: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

// ===== INLINE SVG ICONS =====

const SendIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
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

const CheckCircleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
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
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

export function ReservationForm() {
  // ===== STATE MANAGEMENT =====
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    preferredDate: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // ===== OPTIONS FOR SELECTS =====
  const projectTypeOptions = [
    { value: '', label: 'Sélectionnez votre projet' },
    { value: 'vitrine', label: 'Site vitrine' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'refonte', label: 'Refonte de site existant' },
    { value: 'maintenance', label: 'Maintenance / Support' },
    { value: 'seo', label: 'Optimisation SEO' },
    { value: 'autre', label: 'Autre projet' },
  ];

  const budgetOptions = [
    { value: '', label: 'Sélectionnez votre budget' },
    { value: '2500-5000', label: '2 500€ - 5 000€' },
    { value: '5000-10000', label: '5 000€ - 10 000€' },
    { value: '10000-20000', label: '10 000€ - 20 000€' },
    { value: '20000+', label: 'Plus de 20 000€' },
    { value: 'non-defini', label: 'Budget non défini' },
  ];

  // ===== VALIDATION =====
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Veuillez sélectionner un type de projet';
    }

    if (!formData.consent) {
      newErrors.consent = 'Vous devez accepter la politique de confidentialité';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ===== FORM SUBMISSION =====
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        preferredDate: '',
        message: '',
        consent: false,
      });
      setErrors({});

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(
        'Une erreur est survenue. Veuillez réessayer.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ===== RENDER =====
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <DSInput
        label="Nom complet"
        value={formData.name}
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
          if (errors.name) setErrors({ ...errors, name: '' });
        }}
        error={errors.name}
        required
        disabled={isSubmitting}
      />

      {/* Email */}
      <DSInput
        type="email"
        label="Email"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
          if (errors.email) setErrors({ ...errors, email: '' });
        }}
        error={errors.email}
        required
        disabled={isSubmitting}
      />

      {/* Phone */}
      <DSInput
        type="tel"
        label="Téléphone"
        value={formData.phone}
        onChange={(e) => {
          setFormData({ ...formData, phone: e.target.value });
          if (errors.phone) setErrors({ ...errors, phone: '' });
        }}
        error={errors.phone}
        required
        helperText="Nous vous appellerons pour confirmer le rendez-vous"
        disabled={isSubmitting}
      />

      {/* Company */}
      <DSInput
        label="Entreprise"
        value={formData.company}
        onChange={(e) => {
          setFormData({ ...formData, company: e.target.value });
        }}
        helperText="Optionnel"
        disabled={isSubmitting}
      />

      {/* Project Type */}
      <DSSelect
        label="Type de projet"
        value={formData.projectType}
        onChange={(e) => {
          setFormData({ ...formData, projectType: e.target.value });
          if (errors.projectType) setErrors({ ...errors, projectType: '' });
        }}
        options={projectTypeOptions}
        error={errors.projectType}
        required
        disabled={isSubmitting}
      />

      {/* Budget */}
      <DSSelect
        label="Budget estimé"
        value={formData.budget}
        onChange={(e) => {
          setFormData({ ...formData, budget: e.target.value });
        }}
        options={budgetOptions}
        helperText="Optionnel - pour mieux préparer notre échange"
        disabled={isSubmitting}
      />

      {/* Preferred Date */}
      <DSInput
        type="date"
        label="Date souhaitée pour le rendez-vous"
        value={formData.preferredDate}
        onChange={(e) => {
          setFormData({ ...formData, preferredDate: e.target.value });
        }}
        helperText="Nous vous proposerons un créneau si votre choix n'est pas disponible"
        disabled={isSubmitting}
        min={new Date().toISOString().split('T')[0]}
      />

      {/* Message */}
      <DSInput
        label="Message (optionnel)"
        value={formData.message}
        onChange={(e) => {
          setFormData({ ...formData, message: e.target.value });
        }}
        helperText="Informations complémentaires sur votre projet"
        disabled={isSubmitting}
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
        disabled={isSubmitting}
      />

      {/* Success Alert */}
      {isSuccess && (
        <DSAlert variant="success" title="Demande envoyée !" onClose={() => setIsSuccess(false)}>
          <div className="flex items-start gap-3">
            <CheckCircleIcon className="w-6 h-6 text-[#10b981] flex-shrink-0" />
            <div>
              <p className="mb-2">
                Merci ! Nous avons bien reçu votre demande de rendez-vous.
              </p>
              <p className="text-sm">
                Notre équipe vous contactera par téléphone dans les 24h pour confirmer le créneau et préparer notre échange.
              </p>
            </div>
          </div>
        </DSAlert>
      )}

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
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2Icon className="w-5 h-5" />
            Envoi en cours...
          </>
        ) : (
          <>
            <SendIcon className="w-5 h-5" />
            Réserver mon créneau
          </>
        )}
      </DSButton>
    </form>
  );
}
