import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { toast, Toaster } from 'sonner';
import {
    User,
    Phone,
    Mail,
    Briefcase,
    MapPin,
    CircleDot,
    CheckCircle2,
    AlertCircle,
    Send,
} from 'lucide-react';

export const ReservationForm = () => {
    const [metier, setMetier] = useState<string>("");

    // États du formulaire
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        secteur: "",
        ville: "",
        zone: "",
        rgpdConsent: false
    });

    // États d'erreur
    const [erreurName, setErreurName] = useState(false);
    const [erreurPhone, setErreurPhone] = useState(false);
    const [erreurEmail, setErreurEmail] = useState(false);
    const [erreurSecteur, setErreurSecteur] = useState(false);
    const [erreurVille, setErreurVille] = useState(false);
    const [erreurZone, setErreurZone] = useState(false);

    // États touched
    const [touched, setTouched] = useState({
        name: false,
        phone: false,
        email: false,
        secteur: false,
        ville: false,
        zone: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const capitalizeMetier = (metierStr: string): string => {
        if (!metierStr) return "Artisan";
        const formatted = metierStr
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        return formatted;
    };

    useEffect(() => {
        const metierParam = sessionStorage.getItem('reservationMetier') || "";
        setMetier(metierParam);

        if (metierParam) {
            setFormData(prev => ({
                ...prev,
                secteur: capitalizeMetier(metierParam)
            }));
        }
    }, []);

    // Validations
    const isValidName = formData.name.trim().length >= 3;
    const cleanPhone = formData.phone.replace(/\s/g, '');
    const isValidPhone = /^(?:(?:\+|00)33|0)[1-9](?:\d{8}|\s\d{2}\s\d{2}\s\d{2}\s\d{2})$/.test(cleanPhone) || cleanPhone.length === 10;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isValidSecteur = formData.secteur.trim().length >= 3;
    const isValidVille = formData.ville.trim().length >= 2;
    const isValidZone = formData.zone.trim().length >= 3;

    const isFormValid =
        isValidName &&
        isValidPhone &&
        isValidEmail &&
        isValidSecteur &&
        isValidVille &&
        isValidZone &&
        formData.rgpdConsent;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);

        toast.success("Réservation confirmée !", {
            description: "Nous vous rappelons sous 24h pour finaliser votre exclusivité."
        });

        setFormData({
            name: "",
            phone: "",
            email: "",
            secteur: "",
            ville: "",
            zone: "",
            rgpdConsent: false
        });
        setTouched({
            name: false,
            phone: false,
            email: false,
            secteur: false,
            ville: false,
            zone: false
        });
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Toaster position="top-center" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-xl md:rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] p-6 md:p-8 lg:p-10"
                style={{ boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.04)' }}
            >
                <div className="mb-6 md:mb-8 text-center">
                    <h2
                        className="text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] mb-3"
                        style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                    >
                        Finalisez votre réservation prioritaire
                    </h2>
                    <p className="text-sm md:text-base text-gray-700">
                        Un conseiller vous rappelle sous <strong className="text-[#10b981]">24h</strong> pour activer votre exclusivité.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Nom complet */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-2">
                            Nom complet <span className="text-[#A32E3A]">*</span>
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={(e) => {
                                    setFormData({ ...formData, name: e.target.value });
                                    setErreurName(false);
                                }}
                                onBlur={() => {
                                    setTouched({ ...touched, name: true });
                                    if (formData.name && !isValidName) {
                                        setErreurName(true);
                                    }
                                }}
                                placeholder="Ex: Jean Dupont"
                                required
                                className={`w-full pl-11 pr-11 py-2 rounded-md border bg-white cursor-text transition-all duration-200 outline-none ${erreurName && touched.name
                                    ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-1 focus:ring-[#A32E3A]'
                                    : !erreurName && touched.name && formData.name && isValidName
                                        ? 'border-[#10b981] focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]'
                                        : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-1 focus:ring-[#D1A65E]'
                                    }`}
                            />
                            {!erreurName && touched.name && formData.name && isValidName && (
                                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#10b981]" strokeWidth={2} />
                            )}
                        </div>
                        {erreurName && touched.name && (
                            <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                Veuillez entrer un nom valide (min. 3 caractères)
                            </p>
                        )}
                    </div>

                    {/* Téléphone */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-2">
                            Téléphone (pour rappel prioritaire) <span className="text-[#A32E3A]">*</span>
                        </label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={(e) => {
                                    setFormData({ ...formData, phone: e.target.value });
                                    setErreurPhone(false);
                                }}
                                onBlur={() => {
                                    setTouched({ ...touched, phone: true });
                                    if (formData.phone && !isValidPhone) {
                                        setErreurPhone(true);
                                    }
                                }}
                                placeholder="06 12 34 56 78"
                                required
                                className={`w-full pl-11 pr-11 py-2 rounded-md border bg-white cursor-text transition-all duration-200 outline-none ${erreurPhone && touched.phone
                                    ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-1 focus:ring-[#A32E3A]'
                                    : !erreurPhone && touched.phone && formData.phone && isValidPhone
                                        ? 'border-[#10b981] focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]'
                                        : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-1 focus:ring-[#D1A65E]'
                                    }`}
                            />
                            {!erreurPhone && touched.phone && formData.phone && isValidPhone && (
                                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#10b981]" strokeWidth={2} />
                            )}
                        </div>
                        {erreurPhone && touched.phone && (
                            <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                Format de téléphone invalide (ex: 06 12 34 56 78)
                            </p>
                        )}
                        {!erreurPhone && (
                            <p className="text-xs text-gray-600 mt-1.5">
                                📞 Rappel "Sniper" sous 24h garanti
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-2">
                            Email <span className="text-[#A32E3A]">*</span>
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => {
                                    setFormData({ ...formData, email: e.target.value });
                                    setErreurEmail(false);
                                }}
                                onBlur={() => {
                                    setTouched({ ...touched, email: true });
                                    if (formData.email && !isValidEmail) {
                                        setErreurEmail(true);
                                    }
                                }}
                                placeholder="votre@email.fr"
                                required
                                className={`w-full pl-11 pr-11 py-2 rounded-md border bg-white cursor-text transition-all duration-200 outline-none ${erreurEmail && touched.email
                                    ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-1 focus:ring-[#A32E3A]'
                                    : !erreurEmail && touched.email && formData.email && isValidEmail
                                        ? 'border-[#10b981] focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]'
                                        : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-1 focus:ring-[#D1A65E]'
                                    }`}
                            />
                            {!erreurEmail && touched.email && formData.email && isValidEmail && (
                                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#10b981]" strokeWidth={2} />
                            )}
                        </div>
                        {erreurEmail && touched.email && (
                            <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                Veuillez saisir un email valide.
                            </p>
                        )}
                    </div>

                    {/* Secteur d'activité */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-2">
                            Secteur d'activité <span className="text-[#A32E3A]">*</span>
                        </label>
                        <div className="relative">
                            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                            <input
                                type="text"
                                name="secteur"
                                value={formData.secteur}
                                onChange={(e) => {
                                    setFormData({ ...formData, secteur: e.target.value });
                                    setErreurSecteur(false);
                                }}
                                onBlur={() => {
                                    setTouched({ ...touched, secteur: true });
                                    if (formData.secteur && !isValidSecteur) {
                                        setErreurSecteur(true);
                                    }
                                }}
                                disabled={!!metier}
                                placeholder="Ex: Couverture, Plomberie, Maçonnerie..."
                                required
                                className={`w-full pl-11 pr-11 py-2 rounded-md border cursor-text transition-all duration-200 outline-none ${erreurSecteur && touched.secteur
                                    ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-1 focus:ring-[#A32E3A]'
                                    : !erreurSecteur && touched.secteur && formData.secteur && isValidSecteur
                                        ? 'border-[#10b981] focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]'
                                        : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-1 focus:ring-[#D1A65E]'
                                    } ${!!metier ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
                            />
                            {!erreurSecteur && touched.secteur && formData.secteur && isValidSecteur && !(!!metier) && (
                                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#10b981]" strokeWidth={2} />
                            )}
                        </div>
                        {metier && (
                            <p className="text-xs text-[#10b981] mt-1.5">
                                ✓ Pré-rempli automatiquement depuis votre sélection
                            </p>
                        )}
                        {erreurSecteur && !metier && touched.secteur && (
                            <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                Veuillez entrer votre secteur d'activité (min. 3 caractères)
                            </p>
                        )}
                    </div>

                    {/* Ville principale */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-2">
                            Ville principale <span className="text-[#A32E3A]">*</span>
                        </label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                            <input
                                type="text"
                                name="ville"
                                value={formData.ville}
                                onChange={(e) => {
                                    setFormData({ ...formData, ville: e.target.value });
                                    setErreurVille(false);
                                }}
                                onBlur={() => {
                                    setTouched({ ...touched, ville: true });
                                    if (formData.ville && !isValidVille) {
                                        setErreurVille(true);
                                    }
                                }}
                                placeholder="Ex: Fumel, Villeneuve-sur-Lot..."
                                required
                                className={`w-full pl-11 pr-11 py-2 rounded-md border bg-white cursor-text transition-all duration-200 outline-none ${erreurVille && touched.ville
                                    ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-1 focus:ring-[#A32E3A]'
                                    : !erreurVille && touched.ville && formData.ville && isValidVille
                                        ? 'border-[#10b981] focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]'
                                        : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-1 focus:ring-[#D1A65E]'
                                    }`}
                            />
                            {!erreurVille && touched.ville && formData.ville && isValidVille && (
                                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#10b981]" strokeWidth={2} />
                            )}
                        </div>
                        {erreurVille && touched.ville && (
                            <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                Veuillez entrer une ville valide (min. 2 caractères)
                            </p>
                        )}
                    </div>

                    {/* Zone souhaitée */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-2">
                            Zone souhaitée <span className="text-[#A32E3A]">*</span>
                        </label>
                        <div className="relative">
                            <CircleDot className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                            <input
                                type="text"
                                name="zone"
                                value={formData.zone}
                                onChange={(e) => {
                                    setFormData({ ...formData, zone: e.target.value });
                                    setErreurZone(false);
                                }}
                                onBlur={() => {
                                    setTouched({ ...touched, zone: true });
                                    if (formData.zone && !isValidZone) {
                                        setErreurZone(true);
                                    }
                                }}
                                placeholder="Ex: Lot-et-Garonne, Dordogne..."
                                required
                                className={`w-full pl-11 pr-11 py-2 rounded-md border bg-white cursor-text transition-all duration-200 outline-none ${erreurZone && touched.zone
                                    ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-1 focus:ring-[#A32E3A]'
                                    : !erreurZone && touched.zone && formData.zone && isValidZone
                                        ? 'border-[#10b981] focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981]'
                                        : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-1 focus:ring-[#D1A65E]'
                                    }`}
                            />
                            {!erreurZone && touched.zone && formData.zone && isValidZone && (
                                <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#10b981]" strokeWidth={2} />
                            )}
                        </div>
                        {erreurZone && touched.zone ? (
                            <p className="text-xs text-[#A32E3A] mt-1 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                Veuillez entrer une zone valide (min. 3 caractères)
                            </p>
                        ) : (
                            <p className="text-xs text-gray-600 mt-1.5">
                                🎯 Zone d'exclusivité territoriale (30km autour de votre ville)
                            </p>
                        )}
                    </div>

                    {/* Checkbox RGPD */}
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB]">
                        <input
                            id="rgpd-reservation"
                            type="checkbox"
                            checked={formData.rgpdConsent}
                            onChange={(e) =>
                                setFormData({ ...formData, rgpdConsent: e.target.checked })
                            }
                            required
                            className="mt-0.5 w-4 h-4 text-[#D1A65E] border-gray-300 rounded focus:ring-[#D1A65E] focus:ring-offset-0 cursor-pointer"
                        />
                        <label htmlFor="rgpd-reservation" className="text-xs md:text-sm text-gray-700 cursor-pointer">
                            J'accepte que mes informations soient utilisées pour être recontacté.
                            (Conformément à notre{' '}
                            <a
                                href="/politique-confidentialite"
                                target="_blank"
                                className="text-[#D1A65E] hover:underline"
                            >
                                politique de confidentialité
                            </a>
                            .)
                        </label>
                    </div>

                    {/* CTA */}
                    <button
                        type="submit"
                        disabled={isSubmitting || !isFormValid}
                        className={`w-full py-4 md:py-6 text-base md:text-lg font-medium rounded-xl transition-all duration-300 flex items-center justify-center ${isSubmitting || !isFormValid
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-[#10b981] hover:bg-[#059669] text-white hover:scale-[1.02] cursor-pointer'
                            }`}
                        style={
                            isSubmitting || !isFormValid
                                ? undefined
                                : { boxShadow: '0 4px 16px 0 rgba(16, 185, 129, 0.2)' }
                        }
                    >
                        {isSubmitting ? (
                            <span>Confirmation en cours...</span>
                        ) : (
                            <>
                                <span>Confirmer ma réservation</span>
                                <Send className="ml-2 w-5 h-5" strokeWidth={2} />
                            </>
                        )}
                    </button>

                    <p className="text-xs md:text-sm text-gray-500 text-center">
                        En confirmant, vous acceptez d'être recontacté par Confluence Digitale pour finaliser votre réservation d'exclusivité territoriale.
                    </p>
                </form>

                {/* Bloc Contact Direct */}
                <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-200">
                    <p className="text-center text-sm text-gray-600 mb-4">
                        Vous préférez un contact immédiat ?
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="tel:06XXXXXXXX"
                            className="inline-flex items-center gap-2 text-sm md:text-base text-[#1A1A1A] hover:text-[#10b981] transition-colors"
                        >
                            <Phone className="w-4 h-4" strokeWidth={1.5} />
                            <strong>06 XX XX XX XX</strong>
                        </a>
                        <span className="hidden sm:block text-gray-300">•</span>
                        <a
                            href="mailto:contact@confluence-digitale.fr"
                            className="inline-flex items-center gap-2 text-sm md:text-base text-[#1A1A1A] hover:text-[#D1A65E] transition-colors"
                        >
                            <Mail className="w-4 h-4" strokeWidth={1.5} />
                            contact@confluence-digitale.fr
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
