import { useState } from 'react';
import {
    BarChart3,
    CheckCircle2,
    AlertCircle,
    Loader2,
    Send,
    ArrowRightCircle,
} from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { DSButton } from '../ui/DSButton';
import { DSCheckbox } from '../ui/DSCheckbox';
import { ArcGauge } from './ArcGauge';

// Types
interface FormData {
    website: string;
    name: string;
    email: string;
    secteur: string;
    ville: string;
    rgpdConsent: boolean;
}

interface FormErrors {
    website: boolean;
    name: boolean;
    email: boolean;
    secteur: boolean;
    ville: boolean;
    rgpdConsent: boolean;
}

interface FormTouched {
    website: boolean;
    name: boolean;
    email: boolean;
    secteur: boolean;
    ville: boolean;
    rgpdConsent: boolean;
}

export function AuditForm() {
    // État du formulaire (Terminal de Saisie Dynamique)
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        website: '',
        name: '',
        email: '',
        secteur: '',
        ville: '',
        rgpdConsent: false,
    });

    const [errors, setErrors] = useState<FormErrors>({
        website: false,
        name: false,
        email: false,
        secteur: false,
        ville: false,
        rgpdConsent: false,
    });

    const [touched, setTouched] = useState<FormTouched>({
        website: false,
        name: false,
        email: false,
        secteur: false,
        ville: false,
        rgpdConsent: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Validation des champs
    const validateField = (name: keyof FormData, value: string | boolean): boolean => {
        switch (name) {
            case 'website':
                return typeof value === 'string' && value.includes('.');
            case 'name':
                return typeof value === 'string' && value.trim().length > 2;
            case 'email':
                return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            case 'secteur':
                return typeof value === 'string' && value.trim().length > 2;
            case 'ville':
                return typeof value === 'string' && value.trim().length > 2;
            case 'rgpdConsent':
                return value === true;
            default:
                return true;
        }
    };

    // Gestion du changement de champ
    const handleChange = (name: keyof FormData, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [name]: value }));

        if (validateField(name, value)) {
            setErrors(prev => ({ ...prev, [name]: false }));
        }
    };

    // Gestion du onBlur
    const handleBlur = (name: keyof FormData) => {
        setTouched(prev => ({ ...prev, [name]: true }));

        const value = formData[name];
        const isValid = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: !isValid }));
    };

    // Gestion de l'avancement d'étape
    const handleNextStep = () => {
        if (currentStep < 6) {
            setCurrentStep(currentStep + 1);
        }
    };

    // Vérification si le formulaire est valide
    const isFormValid = (): boolean => {
        return (
            validateField('website', formData.website) &&
            validateField('name', formData.name) &&
            validateField('email', formData.email) &&
            validateField('secteur', formData.secteur) &&
            validateField('ville', formData.ville) &&
            formData.rgpdConsent
        );
    };

    // Soumission du formulaire
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!isFormValid()) {
            toast.error('Veuillez remplir tous les champs requis');
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccessModal(true);
            toast.success('Votre demande d\'audit a été envoyée avec succès !');

            setFormData({
                website: '',
                name: '',
                email: '',
                secteur: '',
                ville: '',
                rgpdConsent: false,
            });
            setCurrentStep(1);
            setTouched({
                website: false,
                name: false,
                email: false,
                secteur: false,
                ville: false,
                rgpdConsent: false,
            });
        }, 2000);
    };

    return (
        <div className="w-full max-w-2xl py-16">
            {/* Titre H2 */}
            <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] text-center mb-2 font-playfair font-normal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                Lancer votre audit technique
            </motion.h2>

            {/* Sous-titre "(1 minute)" */}
            <motion.p
                className="text-2xl md:text-3xl lg:text-4xl text-[#D1A65E] text-center mb-12 font-playfair font-normal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                (1 minute)
            </motion.p>

            {/* Bloc Humanisation Antoine */}
            <motion.div
                className="flex items-center gap-4 mb-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Photo Antoine */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D1A65E]/20 to-[#D1A65E]/10 flex items-center justify-center border-2 border-[#D1A65E]/30 flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-[#D1A65E]" strokeWidth={1.5} />
                </div>

                {/* Texte */}
                <p className="text-sm md:text-base text-[#374151]">
                    C'est <strong className="text-[#1A1A1A]">Antoine</strong>, votre Expert Performance. Je m'occupe personnellement de votre analyse technique.
                </p>
            </motion.div>

            {/* Jauge d'Arc */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                <ArcGauge currentStep={currentStep} totalSteps={5} />
            </motion.div>

            {/* Terminal de Saisie Dynamique */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Ligne 1: Site web actuel (URL) */}
                    {(formData.website || currentStep === 1) && (
                        <div className="space-y-1">
                            {currentStep === 1 && (
                                <label className="text-sm md:text-base text-[#374151]">Site web actuel (URL)</label>
                            )}

                            {currentStep === 1 ? (
                                <motion.div
                                    className="relative"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <input
                                        type="url"
                                        name="website"
                                        autoComplete="url"
                                        placeholder="votre-site.fr"
                                        value={formData.website}
                                        onChange={(e) => handleChange('website', e.target.value)}
                                        onBlur={() => handleBlur('website')}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && validateField('website', formData.website)) {
                                                e.preventDefault();
                                                handleNextStep();
                                            }
                                        }}
                                        autoFocus
                                        className={`w-full bg-transparent border-0 border-b-2 pr-12 md:pr-20 py-3 md:py-6 text-xl md:text-3xl lg:text-4xl font-light transition-all duration-200 outline-none ${errors.website && touched.website
                                                ? 'border-[#A32E3A]'
                                                : 'border-gray-300 focus:border-[#D1A65E]'
                                            }`}
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    />
                                    {validateField('website', formData.website) && (
                                        <button
                                            type="button"
                                            onClick={handleNextStep}
                                            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-[#D1A65E] hover:text-[#B8924F] transition-colors cursor-pointer"
                                        >
                                            <ArrowRightCircle className="w-7 h-7 md:w-12 md:h-12" strokeWidth={1.5} />
                                        </button>
                                    )}
                                </motion.div>
                            ) : formData.website ? (
                                <div
                                    onClick={() => setCurrentStep(1)}
                                    className="flex items-center justify-between p-2 md:p-2.5 bg-white rounded-lg border border-[#10b981]/30 cursor-pointer hover:bg-[#F9FAFB] hover:border-[#D1A65E] transition-all duration-200 group"
                                >
                                    <span className="text-xs md:text-sm text-[#6B7280] group-hover:text-[#D1A65E] transition-colors truncate">{formData.website}</span>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] md:text-xs text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity">Modifier</span>
                                        <CheckCircle2 className="w-4 h-4 text-[#10b981]" strokeWidth={2} />
                                    </div>
                                </div>
                            ) : null}

                            {errors.website && touched.website && currentStep === 1 && (
                                <p className="text-xs text-[#A32E3A] flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    Veuillez saisir une URL valide (ex: www.monsite.fr)
                                </p>
                            )}
                        </div>
                    )}

                    {/* Ligne 2: Nom complet */}
                    {(formData.name || currentStep === 2) && (
                        <div className="space-y-1">
                            {currentStep === 2 && (
                                <label className="text-sm md:text-base text-[#374151]">Nom complet</label>
                            )}

                            {currentStep === 2 ? (
                                <motion.div
                                    className="relative"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <input
                                        type="text"
                                        name="name"
                                        autoComplete="name"
                                        placeholder="Ex: Marc Dupont"
                                        value={formData.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                        onBlur={() => handleBlur('name')}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && validateField('name', formData.name)) {
                                                e.preventDefault();
                                                handleNextStep();
                                            }
                                        }}
                                        autoFocus
                                        className={`w-full bg-transparent border-0 border-b-2 pr-12 md:pr-20 py-3 md:py-6 text-xl md:text-3xl lg:text-4xl font-light transition-all duration-200 outline-none ${errors.name && touched.name
                                                ? 'border-[#A32E3A]'
                                                : 'border-gray-300 focus:border-[#D1A65E]'
                                            }`}
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    />
                                    {validateField('name', formData.name) && (
                                        <button
                                            type="button"
                                            onClick={handleNextStep}
                                            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-[#D1A65E] hover:text-[#B8924F] transition-colors cursor-pointer"
                                        >
                                            <ArrowRightCircle className="w-7 h-7 md:w-12 md:h-12" strokeWidth={1.5} />
                                        </button>
                                    )}
                                </motion.div>
                            ) : formData.name ? (
                                <div
                                    onClick={() => setCurrentStep(2)}
                                    className="flex items-center justify-between p-2 md:p-2.5 bg-white rounded-lg border border-[#10b981]/30 cursor-pointer hover:bg-[#F9FAFB] hover:border-[#D1A65E] transition-all duration-200 group"
                                >
                                    <span className="text-xs md:text-sm text-[#6B7280] group-hover:text-[#D1A65E] transition-colors truncate">{formData.name}</span>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] md:text-xs text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity">Modifier</span>
                                        <CheckCircle2 className="w-4 h-4 text-[#10b981]" strokeWidth={2} />
                                    </div>
                                </div>
                            ) : null}

                            {errors.name && touched.name && currentStep === 2 && (
                                <p className="text-xs text-[#A32E3A] flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    Veuillez saisir votre nom (3 caractères minimum)
                                </p>
                            )}
                        </div>
                    )}

                    {/* Ligne 3: Email professionnel */}
                    {(formData.email || currentStep === 3) && (
                        <div className="space-y-1">
                            {currentStep === 3 && (
                                <label className="text-sm md:text-base text-[#374151]">Email professionnel</label>
                            )}

                            {currentStep === 3 ? (
                                <motion.div
                                    className="relative"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        placeholder="votre.email@professionnel.fr"
                                        value={formData.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        onBlur={() => handleBlur('email')}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && validateField('email', formData.email)) {
                                                e.preventDefault();
                                                handleNextStep();
                                            }
                                        }}
                                        autoFocus
                                        className={`w-full bg-transparent border-0 border-b-2 pr-12 md:pr-20 py-3 md:py-6 text-xl md:text-3xl lg:text-4xl font-light transition-all duration-200 outline-none ${errors.email && touched.email
                                                ? 'border-[#A32E3A]'
                                                : 'border-gray-300 focus:border-[#D1A65E]'
                                            }`}
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    />
                                    {validateField('email', formData.email) && (
                                        <button
                                            type="button"
                                            onClick={handleNextStep}
                                            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-[#D1A65E] hover:text-[#B8924F] transition-colors cursor-pointer"
                                        >
                                            <ArrowRightCircle className="w-7 h-7 md:w-12 md:h-12" strokeWidth={1.5} />
                                        </button>
                                    )}
                                </motion.div>
                            ) : formData.email ? (
                                <div
                                    onClick={() => setCurrentStep(3)}
                                    className="flex items-center justify-between p-2 md:p-2.5 bg-white rounded-lg border border-[#10b981]/30 cursor-pointer hover:bg-[#F9FAFB] hover:border-[#D1A65E] transition-all duration-200 group"
                                >
                                    <span className="text-xs md:text-sm text-[#6B7280] group-hover:text-[#D1A65E] transition-colors truncate">{formData.email}</span>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] md:text-xs text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity">Modifier</span>
                                        <CheckCircle2 className="w-4 h-4 text-[#10b981]" strokeWidth={2} />
                                    </div>
                                </div>
                            ) : null}

                            {errors.email && touched.email && currentStep === 3 && (
                                <p className="text-xs text-[#A32E3A] flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    Veuillez saisir un email valide
                                </p>
                            )}
                        </div>
                    )}

                    {/* Ligne 4: Secteur d'activité */}
                    {(formData.secteur || currentStep === 4) && (
                        <div className="space-y-1">
                            {currentStep === 4 && (
                                <label className="text-sm md:text-base text-[#374151]">Secteur d'activité</label>
                            )}

                            {currentStep === 4 ? (
                                <motion.div
                                    className="relative"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <input
                                        type="text"
                                        name="secteur"
                                        placeholder="Ex: Couvreur, Boulangerie"
                                        value={formData.secteur}
                                        onChange={(e) => handleChange('secteur', e.target.value)}
                                        onBlur={() => handleBlur('secteur')}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && validateField('secteur', formData.secteur)) {
                                                e.preventDefault();
                                                handleNextStep();
                                            }
                                        }}
                                        autoFocus
                                        className={`w-full bg-transparent border-0 border-b-2 pr-12 md:pr-20 py-3 md:py-6 text-xl md:text-3xl lg:text-4xl font-light transition-all duration-200 outline-none ${errors.secteur && touched.secteur
                                                ? 'border-[#A32E3A]'
                                                : 'border-gray-300 focus:border-[#D1A65E]'
                                            }`}
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    />
                                    {validateField('secteur', formData.secteur) && (
                                        <button
                                            type="button"
                                            onClick={handleNextStep}
                                            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-[#D1A65E] hover:text-[#B8924F] transition-colors cursor-pointer"
                                        >
                                            <ArrowRightCircle className="w-7 h-7 md:w-12 md:h-12" strokeWidth={1.5} />
                                        </button>
                                    )}
                                </motion.div>
                            ) : formData.secteur ? (
                                <div
                                    onClick={() => setCurrentStep(4)}
                                    className="flex items-center justify-between p-2 md:p-2.5 bg-white rounded-lg border border-[#10b981]/30 cursor-pointer hover:bg-[#F9FAFB] hover:border-[#D1A65E] transition-all duration-200 group"
                                >
                                    <span className="text-xs md:text-sm text-[#6B7280] group-hover:text-[#D1A65E] transition-colors truncate">{formData.secteur}</span>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] md:text-xs text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity">Modifier</span>
                                        <CheckCircle2 className="w-4 h-4 text-[#10b981]" strokeWidth={2} />
                                    </div>
                                </div>
                            ) : null}

                            {currentStep === 4 && (
                                <p className="text-xs text-[#6B7280]">
                                    Requis pour vérifier votre exclusivité territoriale.
                                </p>
                            )}

                            {errors.secteur && touched.secteur && currentStep === 4 && (
                                <p className="text-xs text-[#A32E3A] flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    Veuillez saisir votre secteur d'activité (3 caractères minimum)
                                </p>
                            )}
                        </div>
                    )}

                    {/* Ligne 5: Ville */}
                    {(formData.ville || currentStep === 5) && (
                        <div className="space-y-1">
                            {currentStep === 5 && (
                                <label className="text-sm md:text-base text-[#374151]">Ville</label>
                            )}

                            {currentStep === 5 ? (
                                <motion.div
                                    className="relative"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <input
                                        type="text"
                                        name="ville"
                                        placeholder="Ex: Lyon, Paris"
                                        value={formData.ville}
                                        onChange={(e) => handleChange('ville', e.target.value)}
                                        onBlur={() => handleBlur('ville')}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && validateField('ville', formData.ville)) {
                                                e.preventDefault();
                                                handleNextStep();
                                            }
                                        }}
                                        autoFocus
                                        className={`w-full bg-transparent border-0 border-b-2 pr-12 md:pr-20 py-3 md:py-6 text-xl md:text-3xl lg:text-4xl font-light transition-all duration-200 outline-none ${errors.ville && touched.ville
                                                ? 'border-[#A32E3A]'
                                                : 'border-gray-300 focus:border-[#D1A65E]'
                                            }`}
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    />
                                    {validateField('ville', formData.ville) && (
                                        <button
                                            type="button"
                                            onClick={handleNextStep}
                                            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-[#D1A65E] hover:text-[#B8924F] transition-colors cursor-pointer"
                                        >
                                            <ArrowRightCircle className="w-7 h-7 md:w-12 md:h-12" strokeWidth={1.5} />
                                        </button>
                                    )}
                                </motion.div>
                            ) : formData.ville ? (
                                <div
                                    onClick={() => setCurrentStep(5)}
                                    className="flex items-center justify-between p-2 md:p-2.5 bg-white rounded-lg border border-[#10b981]/30 cursor-pointer hover:bg-[#F9FAFB] hover:border-[#D1A65E] transition-all duration-200 group"
                                >
                                    <span className="text-xs md:text-sm text-[#6B7280] group-hover:text-[#D1A65E] transition-colors truncate">{formData.ville}</span>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] md:text-xs text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity">Modifier</span>
                                        <CheckCircle2 className="w-4 h-4 text-[#10b981]" strokeWidth={2} />
                                    </div>
                                </div>
                            ) : null}

                            {currentStep === 5 && (
                                <p className="text-xs text-[#6B7280]">
                                    Requis pour l'analyse de concurrence locale.
                                </p>
                            )}

                            {errors.ville && touched.ville && currentStep === 5 && (
                                <p className="text-xs text-[#A32E3A] flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    Veuillez saisir votre ville (3 caractères minimum)
                                </p>
                            )}
                        </div>
                    )}

                    {/* Ligne 6: RGPD Consent + Bouton de soumission */}
                    {currentStep >= 6 && (
                        <motion.div
                            className="space-y-6 pt-4"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Checkbox RGPD */}
                            <div className="flex items-start gap-3">
                                <DSCheckbox
                                    id="rgpd"
                                    checked={formData.rgpdConsent}
                                    onChange={(e) => handleChange('rgpdConsent', e.target.checked)}
                                    className="mt-1"
                                    label={
                                        <span className="text-sm text-[#374151] leading-relaxed cursor-pointer">
                                            J'accepte que mes données soient utilisées exclusivement pour réaliser mon audit gratuit.
                                            Aucune donnée n'est transmise à des tiers. Politique de confidentialité disponible sur demande.
                                        </span>
                                    }
                                />
                            </div>

                            {errors.rgpdConsent && touched.rgpdConsent && (
                                <p className="text-xs text-[#A32E3A] flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" />
                                    Vous devez accepter les conditions pour continuer
                                </p>
                            )}

                            {/* Bouton de soumission */}
                            <DSButton
                                type="submit"
                                variant="primary"
                                disabled={!isFormValid() || isSubmitting}
                                className="w-full py-6 text-lg bg-[#10b981] hover:bg-[#059669] disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-2" />
                                        Recevoir mon Audit Gratuit
                                    </>
                                )}
                            </DSButton>

                            {/* Micro-copie de réassurance */}
                            <p className="text-xs text-center text-[#6B7280]">
                                Réponse sous 48h • 100% Gratuit • Sans engagement
                            </p>
                        </motion.div>
                    )}

                </form>
            </motion.div>

            {/* Modal de Succès */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
                    <motion.div
                        className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="w-16 h-16 bg-[#10b981]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-10 h-10 text-[#10b981]" strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Demande envoyée !
                        </h3>
                        <p className="text-[#374151] mb-6">
                            <strong>Antoine</strong> lance votre analyse technique dès maintenant.
                            <strong> Pascal</strong> vous contacte sous 48h pour organiser la restitution complète.
                        </p>
                        <DSButton
                            onClick={() => setShowSuccessModal(false)}
                            className="w-full bg-[#D1A65E] hover:bg-[#B8924F] text-white"
                        >
                            Compris
                        </DSButton>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
