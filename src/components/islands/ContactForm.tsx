import { useState } from "react";
import { Mail, MessageSquare, AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { DSButton } from "../ui/DSButton";
import { DSInput } from "../ui/DSInput";
import { DSTextarea } from "../ui/DSTextarea";
import { DSCheckbox } from "../ui/DSCheckbox";
import { toast } from "sonner";

export const ContactForm = () => {
    // État du formulaire
    const [formData, setFormData] = useState({
        email: "",
        message: "",
        rgpdConsent: false
    });

    // États des interactions
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({
        email: false,
        message: false,
        rgpdConsent: false
    });
    const [touched, setTouched] = useState({
        email: false,
        message: false,
        rgpdConsent: false
    });
    const [errorMessage, setErrorMessage] = useState("");

    // Validation Email Regex
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Validation individuelle d'un champ
    const validateField = (name: string, value: string | boolean): boolean => {
        switch (name) {
            case 'email':
                return typeof value === 'string' && value.trim() !== "" && validateEmail(value);
            case 'message':
                return typeof value === 'string' && value.trim() !== "";
            case 'rgpdConsent':
                return value === true;
            default:
                return true;
        }
    };

    // Vérifier si le formulaire est entièrement valide
    const isFormValid = (): boolean => {
        return (
            validateField('email', formData.email) &&
            validateField('message', formData.message) &&
            validateField('rgpdConsent', formData.rgpdConsent)
        );
    };

    // Validation Client (Instantanée)
    const validateForm = (): boolean => {
        const newErrors = {
            email: !validateField('email', formData.email),
            message: !validateField('message', formData.message),
            rgpdConsent: !validateField('rgpdConsent', formData.rgpdConsent)
        };

        setErrors(newErrors);

        // Marquer tous les champs comme touchés
        setTouched({
            email: true,
            message: true,
            rgpdConsent: true
        });

        const hasErrors = Object.values(newErrors).some(error => error);

        if (hasErrors) {
            setErrorMessage("Veuillez corriger les champs en rouge.");
            return false;
        }

        setErrorMessage("");
        return true;
    };

    // Soumission du formulaire
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setErrorMessage("");

        try {
            // Simulate API call
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simuler un succès (95% du temps)
                    if (Math.random() > 0.05) {
                        resolve(true);
                    } else {
                        reject(new Error("API Error"));
                    }
                }, 1500);
            });

            setIsSubmitting(false);
            setIsSubmitted(true);

            toast.success("Message envoyé !", {
                description: "Nous vous recontactons sous 48h maximum."
            });

        } catch (error) {
            setIsSubmitting(false);
            setErrorMessage("Une erreur est survenue. Veuillez réessayer plus tard.");

            toast.error("Erreur d'envoi", {
                description: "Une erreur est survenue. Veuillez réessayer plus tard."
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        const isValid = validateField(name, value);
        setErrors({
            ...errors,
            [name]: !isValid
        });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true
        });
    };

    const handleCheckboxChange = (checked: boolean) => {
        setFormData({
            ...formData,
            rgpdConsent: checked
        });

        setTouched({
            ...touched,
            rgpdConsent: true
        });

        setErrors({
            ...errors,
            rgpdConsent: !checked
        });
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
                    className="text-xl md:text-2xl text-[#1A1A1A] font-playfair font-normal"
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
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ Email */}
            <div>
                <label className="block text-sm text-[#1A1A1A] mb-2">
                    Votre email *
                </label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                    <DSInput
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="contact@exemple.fr"
                        required
                        className={`pl-11 pr-11 ${errors.email && touched.email
                                ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]'
                                : !errors.email && touched.email && formData.email
                                    ? 'border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]'
                                    : ''
                            }`}
                    />
                    {!errors.email && touched.email && formData.email && (
                        <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#10b981]" strokeWidth={2} />
                    )}
                </div>
                {errors.email && touched.email && (
                    <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Veuillez saisir un email valide.
                    </p>
                )}
            </div>

            {/* Champ Message */}
            <div>
                <label className="block text-sm text-[#1A1A1A] mb-2">
                    Votre message *
                </label>
                <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                    <DSTextarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Décrivez votre projet, vos questions..."
                        rows={5}
                        required
                        className={`pl-11 pr-11 ${errors.message && touched.message
                                ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]'
                                : !errors.message && touched.message && formData.message
                                    ? 'border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]'
                                    : ''
                            }`}
                    />
                    {!errors.message && touched.message && formData.message && (
                        <CheckCircle2 className="absolute right-3 top-3 w-5 h-5 text-[#10b981]" strokeWidth={2} />
                    )}
                </div>
                {errors.message && touched.message && (
                    <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Ce champ est requis.
                    </p>
                )}
            </div>

            {/* Checkbox RGPD */}
            <div className={`flex items-start gap-3 p-3 rounded-lg ${errors.rgpdConsent ? 'bg-[#A32E3A]/5 border border-[#A32E3A]/20' : ''
                }`}>
                <DSCheckbox
                    id="rgpd-consent"
                    checked={formData.rgpdConsent}
                    onCheckedChange={handleCheckboxChange}
                    className={errors.rgpdConsent ? 'border-[#A32E3A]' : ''}
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
                    Vous devez accepter cette condition pour continuer.
                </p>
            )}

            {/* Message d'Erreur Global */}
            {errorMessage && (
                <div className="p-3 rounded-lg bg-[#A32E3A]/5 border border-[#A32E3A]/20">
                    <p className="text-sm text-[#A32E3A] flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        {errorMessage}
                    </p>
                </div>
            )}

            {/* Bouton Envoyer */}
            <DSButton
                type="submit"
                variant="primary"
                disabled={isSubmitting || !isFormValid()}
                className="w-full py-5 text-base rounded-xl"
                style={
                    isSubmitting || !isFormValid()
                        ? undefined
                        : { boxShadow: '0 4px 16px 0 rgba(16, 185, 129, 0.2)' }
                }
            >
                {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Envoi en cours...
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        Envoyer
                        <Send className="w-5 h-5" strokeWidth={2} />
                    </span>
                )}
            </DSButton>

            <p className="text-xs text-gray-500 text-center">
                En soumettant ce formulaire, vous acceptez d'être recontacté par Confluence Digitale.
            </p>
        </form>
    );
};
