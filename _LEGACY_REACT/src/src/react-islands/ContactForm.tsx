import React, { useState } from 'react';
import { DSInput } from '@/react-components/ui/DSInput';
import { DSTextarea } from '@/react-components/ui/DSTextarea';
import { DSCheckbox } from '@/react-components/ui/DSCheckbox';
import { DSButton } from '@/react-components/ui/DSButton';
import { DSAlert } from '@/react-components/ui/DSAlert';

/**
 * ContactForm Island
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - React Island with full state management
 * 
 * This is the REFERENCE PATTERN for all forms in the project
 * 
 * Features:
 * - Full form state management with useState
 * - Validation (required fields, email format, consent)
 * - Error handling per field
 * - Success/error states with DSAlert
 * - Loading state during submission
 * - DSCheckbox with proper onChange handler (e.target.checked)
 * 
 * Will be used in Astro with: <ContactForm client:load />
 */

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
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

export function ContactForm() {
  // ===== STATE MANAGEMENT =====
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // ===== VALIDATION =====
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    // Consent validation
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

    // Validate
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call (replace with real endpoint)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        consent: false,
      });
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(
        'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'
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
          if (errors.name) {
            setErrors({ ...errors, name: '' });
          }
        }}
        error={errors.name}
        required
        helperText="Votre prénom et nom"
        disabled={isSubmitting}
      />

      {/* Email */}
      <DSInput
        type="email"
        label="Email"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
          if (errors.email) {
            setErrors({ ...errors, email: '' });
          }
        }}
        error={errors.email}
        required
        helperText="Nous vous répondrons à cette adresse"
        disabled={isSubmitting}
      />

      {/* Phone */}
      <DSInput
        type="tel"
        label="Téléphone"
        value={formData.phone}
        onChange={(e) => {
          setFormData({ ...formData, phone: e.target.value });
        }}
        helperText="Optionnel - pour être rappelé"
        disabled={isSubmitting}
      />

      {/* Company */}
      <DSInput
        label="Entreprise"
        value={formData.company}
        onChange={(e) => {
          setFormData({ ...formData, company: e.target.value });
        }}
        helperText="Optionnel - nom de votre entreprise"
        disabled={isSubmitting}
      />

      {/* Message */}
      <DSTextarea
        label="Votre message"
        value={formData.message}
        onChange={(e) => {
          setFormData({ ...formData, message: e.target.value });
          if (errors.message) {
            setErrors({ ...errors, message: '' });
          }
        }}
        error={errors.message}
        rows={6}
        required
        helperText="Décrivez votre projet ou votre question"
        disabled={isSubmitting}
      />

      {/* Consent Checkbox - IMPORTANT: onChange receives event */}
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
          // IMPORTANT: DSCheckbox onChange receives event, not boolean
          setFormData({ ...formData, consent: e.target.checked });
          if (errors.consent) {
            setErrors({ ...errors, consent: '' });
          }
        }}
        error={errors.consent}
        disabled={isSubmitting}
      />

      {/* Success Alert */}
      {isSuccess && (
        <DSAlert variant="success" title="Message envoyé !">
          Merci pour votre message. Nous vous répondrons dans les plus brefs
          délais (généralement sous 24h).
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
            Envoyer le message
          </>
        )}
      </DSButton>

      {/* Helper text */}
      <p className="text-sm text-gray-500 text-center">
        Nous nous engageons à répondre à tous les messages dans les 24 heures
        ouvrées.
      </p>
    </form>
  );
}
