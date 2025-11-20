import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'sonner';
import { Mail, MessageSquare, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactFormData {
    email: string;
    message: string;
    rgpdConsent: boolean;
}

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = async (data: ContactFormData) => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Success state
            setIsSubmitted(true);
            toast.success("Message envoyé !", {
                description: "Nous vous recontactons sous 48h maximum."
            });
            reset();
        } catch (error) {
            toast.error("Erreur d'envoi", {
                description: "Une erreur est survenue. Veuillez réessayer plus tard."
            });
        }
    };

    if (isSubmitted) {
        return (
            <div className="py-12 text-center space-y-4">
                <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#10b981]/10 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-[#10b981]" strokeWidth={2} />
                    </div>
                </div>
                <h4
                    className="text-xl md:text-2xl text-[#1A1A1A]"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                    Merci !
                </h4>
                <p className="text-base text-gray-700">
                    Votre message a bien été envoyé.<br />
                    <strong className="text-[#10b981]">Nous vous répondons sous 48h.</strong>
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <Toaster position="top-center" />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email */}
                <div>
                    <label className="block text-sm text-[#1A1A1A] mb-2">
                        Votre email *
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                        <input
                            type="email"
                            placeholder="contact@exemple.fr"
                            className={`w-full pl-11 pr-11 py-2 rounded-lg border bg-[#F9FAFB] cursor-text transition-all duration-200 outline-none ${errors.email
                                    ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-1 focus:ring-[#A32E3A]'
                                    : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-1 focus:ring-[#D1A65E]'
                                }`}
                            {...register('email', {
                                required: 'Veuillez saisir un email valide.',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Veuillez saisir un email valide.'
                                }
                            })}
                        />
                    </div>
                    {errors.email && (
                        <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm text-[#1A1A1A] mb-2">
                        Votre message *
                    </label>
                    <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                        <textarea
                            placeholder="Décrivez votre projet, vos questions..."
                            rows={5}
                            className={`w-full pl-11 pr-11 py-2 rounded-lg border bg-[#F9FAFB] cursor-text transition-all duration-200 outline-none ${errors.message
                                    ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-1 focus:ring-[#A32E3A]'
                                    : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-1 focus:ring-[#D1A65E]'
                                }`}
                            {...register('message', { required: 'Ce champ est requis.' })}
                        />
                    </div>
                    {errors.message && (
                        <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.message.message}
                        </p>
                    )}
                </div>

                {/* Checkbox RGPD */}
                <div className={`flex items-start gap-3 p-3 rounded-lg ${errors.rgpdConsent ? 'bg-[#A32E3A]/5 border border-[#A32E3A]/20' : ''
                    }`}>
                    <input
                        type="checkbox"
                        id="rgpd-consent"
                        className={`mt-1 rounded border-gray-300 text-[#10b981] focus:ring-[#10b981] ${errors.rgpdConsent ? 'border-[#A32E3A]' : ''
                            }`}
                        {...register('rgpdConsent', { required: 'Vous devez accepter cette condition pour continuer.' })}
                    />
                    <label
                        htmlFor="rgpd-consent"
                        className="text-xs md:text-sm text-gray-700 leading-relaxed cursor-pointer"
                    >
                        J'accepte que mes informations soient utilisées pour être recontacté.{' '}
                        <span className="text-gray-500">
                            (Conformément à notre{' '}
                            <a
                                href="/politique-confidentialite"
                                className="text-[#D1A65E] hover:underline"
                            >
                                politique de confidentialité
                            </a>
                            .)
                        </span>
                    </label>
                </div>
                {errors.rgpdConsent && (
                    <p className="text-xs text-[#A32E3A] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.rgpdConsent.message}
                    </p>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 text-base rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-[#10b981] hover:bg-[#059669] text-white hover:scale-[1.02]'
                        }`}
                    style={
                        isSubmitting
                            ? undefined
                            : { boxShadow: '0 4px 16px 0 rgba(16, 185, 129, 0.2)' }
                    }
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Envoi en cours...
                        </>
                    ) : (
                        <>
                            Envoyer
                            <Send className="w-5 h-5" strokeWidth={2} />
                        </>
                    )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez d'être recontacté par Confluence Digitale.
                </p>
            </form>
        </div>
    );
};
