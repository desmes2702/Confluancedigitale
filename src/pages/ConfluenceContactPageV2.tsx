import { ConfluenceHeaderV6_7 } from "../components/ConfluenceHeaderV6_7";
import { ConfluenceFooterV6_2 } from "../components/ConfluenceFooterV6_2";
import { ConfluenceTeamBlock } from "../components/ConfluenceTeamBlock";
import { Phone, Mail, Send, CheckCircle2, Loader2, AlertCircle, MapPin, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { toast } from "sonner@2.0.3";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface ConfluenceContactPageV2Props {
  onNavigate?: (page: string) => void;
}

export function ConfluenceContactPageV2({ onNavigate }: ConfluenceContactPageV2Props = {}) {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: trustRef, isVisible: trustVisible } = useScrollAnimation();

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // État du formulaire - BATCH 22 : V7.2 Zéro Friction (2 champs)
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

  // Validation individuelle d'un champ - BATCH 22
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

  // Vérifier si le formulaire est entièrement valide - BATCH 22
  const isFormValid = (): boolean => {
    return (
      validateField('email', formData.email) &&
      validateField('message', formData.message) &&
      validateField('rgpdConsent', formData.rgpdConsent)
    );
  };

  // État 2 : Validation Client (Instantanée) - BATCH 22
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
      // État 5 : Erreur Client
      setErrorMessage("Veuillez corriger les champs en rouge.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // État 2 : Validation Client
    if (!validateForm()) {
      return; // Ne pas passer à l'état Loading
    }

    // État 3 : Loading
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

      // État 4 : Succès
      setIsSubmitting(false);
      setIsSubmitted(true);

      toast.success("Message envoyé !", {
        description: "Nous vous recontactons sous 48h maximum."
      });

    } catch (error) {
      // État 5 : Erreur Serveur
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
    
    // Validation en temps réel
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
    
    // Marquer comme touché et valider
    setTouched({
      ...touched,
      rgpdConsent: true
    });
    
    setErrors({
      ...errors,
      rgpdConsent: !checked
    });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header V6.7 - Zéro Gap */}
      <ConfluenceHeaderV6_7 onNavigate={handleNavigation} currentPage="contact" />

      {/* 1. HERO SECTION - pt-28 lg:pt-32 - BATCH 21 : Respiration Laptop */}
      <section 
        ref={heroRef}
        className="relative pt-28 lg:pt-32 pb-12 md:pb-16 px-4"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Titre H1 - Playfair Display Regular - BATCH 22 : V7.2 Zéro Friction */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-6 md:mb-8"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Laissez-nous un message.
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto">
              Une question ? Un projet ? Envoyez-nous simplement votre email et votre message.<br className="hidden md:block" />
              Nous vous répondons <span className="text-[#10b981]">sous 48h</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CARTE UNIFIÉE CONTACT (FUSION 50/50) - BATCH 13B */}
      <section 
        ref={trustRef}
        className="relative py-12 sm:py-16 md:py-20 px-4 bg-[#F9FAFB]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* CARTE UNIFIÉE - UNE SEULE CARTE BLANCHE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={trustVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] p-8"
              style={{
                boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.04)',
              }}
            >
              {/* GRILLE 50/50 - grid-cols-1 lg:grid-cols-2 gap-8 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                
                {/* COLONNE 1 (GAUCHE) - LA CONFIANCE */}
                <div className="space-y-6">
                  <div>
                    <h3 
                      className="text-2xl md:text-3xl text-[#1A1A1A] mb-3"
                      style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                    >
                      Vous préférez le <span className="text-[#D1A65E]">contact direct</span> ?
                    </h3>
                    <p className="text-sm md:text-base text-gray-700">
                      Pas de formulaire anonyme. Un humain répond.
                    </p>
                  </div>

                  {/* Bloc Ligne Directe */}
                  <div 
                    className="rounded-xl p-6 bg-[#F9FAFB] border border-[#E5E7EB]"
                    style={{ boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.02)' }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-[#10b981]" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-600 mb-1">Ligne Directe</p>
                        <a 
                          href="tel:06XXXXXXXX" 
                          className="text-xl text-[#1A1A1A] hover:text-[#10b981] transition-colors"
                        >
                          06 XX XX XX XX
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bloc Email Direct */}
                  <div 
                    className="rounded-xl p-6 bg-[#F9FAFB] border border-[#E5E7EB]"
                    style={{ boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.02)' }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D1A65E]/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-[#D1A65E]" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-600 mb-1">Email Direct</p>
                        <a 
                          href="mailto:contact@confluence-digitale.fr" 
                          className="text-lg text-[#1A1A1A] hover:text-[#D1A65E] transition-colors break-all"
                        >
                          contact@confluence-digitale.fr
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Note de confiance */}
                  <div className="pt-2">
                    <p className="text-xs md:text-sm text-gray-600">
                      <strong className="text-[#10b981]">Réponse garantie sous 48h.</strong> Souvent bien avant.
                    </p>
                  </div>
                </div>

                {/* COLONNE 2 (DROITE) - LE FORMULAIRE */}
                <div className="space-y-6">
                  <div>
                    <h3 
                      className="text-2xl md:text-3xl text-[#1A1A1A] mb-3"
                      style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                    >
                      Laissez-nous un <span className="text-[#D1A65E]">message</span>
                    </h3>
                    <p className="text-sm md:text-base text-gray-700">
                      Nous reviendrons vers vous rapidement.
                    </p>
                  </div>

                  {/* État 4 : Message de Succès - Masque le formulaire */}
                  {isSubmitted ? (
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
                  ) : (
                    /* Formulaire - BATCH 22 : V7.2 Zéro Friction (2 champs) */
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* BATCH 22 : Champ Email avec Icône DANS le champ */}
                      <div>
                        <label className="block text-sm text-[#1A1A1A] mb-2">
                          Votre email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="contact@exemple.fr"
                            required
                            className={`w-full pl-11 pr-11 bg-[#F9FAFB] cursor-text transition-all duration-200 ${
                              errors.email && touched.email
                                ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]' 
                                : !errors.email && touched.email && formData.email
                                ? 'border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]'
                                : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-[#D1A65E]'
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

                      {/* BATCH 22 : Champ Message avec Icône */}
                      <div>
                        <label className="block text-sm text-[#1A1A1A] mb-2">
                          Votre message *
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Décrivez votre projet, vos questions..."
                            rows={5}
                            required
                            className={`w-full pl-11 pr-11 bg-[#F9FAFB] cursor-text transition-all duration-200 ${
                              errors.message && touched.message
                                ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]' 
                                : !errors.message && touched.message && formData.message
                                ? 'border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]'
                                : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-[#D1A65E]'
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

                      {/* BATCH 14A : Checkbox RGPD (Obligatoire) */}
                      <div className={`flex items-start gap-3 p-3 rounded-lg ${
                        errors.rgpdConsent ? 'bg-[#A32E3A]/5 border border-[#A32E3A]/20' : ''
                      }`}>
                        <Checkbox
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
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigation('politique-confidentialite');
                              }}
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

                      {/* État 5 : Message d'Erreur Global */}
                      {errorMessage && (
                        <div className="p-3 rounded-lg bg-[#A32E3A]/5 border border-[#A32E3A]/20">
                          <p className="text-sm text-[#A32E3A] flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            {errorMessage}
                          </p>
                        </div>
                      )}

                      {/* État 3 : Bouton Envoyer avec Loading */}
                      <Button
                        type="submit"
                        disabled={isSubmitting || !isFormValid()}
                        className={`w-full py-5 text-base rounded-xl transition-all duration-300 ${
                          isSubmitting || !isFormValid()
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-[#10b981] hover:bg-[#059669] text-white hover:scale-[1.02]'
                        }`}
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
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        En soumettant ce formulaire, vous acceptez d'être recontacté par Confluence Digitale.
                      </p>
                    </form>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. BATCH 46 V7 : SECTION TRIADE D'EXPERTS - Humanisation du Contact */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ConfluenceTeamBlock />
          </div>
        </div>
      </section>

      {/* 4. BATCH 16A : SECTION "OÙ NOUS TROUVER" - Carte Statique (Performance) */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Titre et Adresse */}
            <div className="text-center mb-8 md:mb-12">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] mb-4"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                Où nous trouver
              </h2>
              <div className="flex items-center justify-center gap-2 text-base md:text-lg text-gray-700">
                <MapPin className="w-5 h-5 text-[#D1A65E]" strokeWidth={1.5} />
                <p>Montayral, 47500</p>
              </div>
            </div>

            {/* Carte Statique Cliquable - Performance Optimisée */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <a
                href="https://www.google.com/maps/place/Montayral,+47500"
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative overflow-hidden rounded-2xl border border-[#E5E7EB] hover:border-[#D1A65E] transition-all duration-300"
                style={{ boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.04)' }}
              >
                {/* Image statique de carte */}
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1754299356969-2b7d4ffefd9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXAlMjBsb2NhdGlvbiUyMHBpbnxlbnwxfHx8fDE3NjIzOTg0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Carte - Montayral, 47500"
                  className="w-full h-auto object-cover aspect-[16/9]"
                  loading="lazy"
                />
                
                {/* Overlay avec CTA au hover */}
                <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-xl px-6 py-3 shadow-lg">
                    <p className="text-sm text-[#1A1A1A] flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#10b981]" strokeWidth={2} />
                      Voir l'itinéraire sur Google Maps
                    </p>
                  </div>
                </div>
              </a>

              {/* Note de confiance locale */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  <span className="text-[#10b981]">📍 Ancrage local.</span> Nous sommes basés dans le Lot-et-Garonne et accompagnons les TPE/PME de la région.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer V6.2 */}
      <ConfluenceFooterV6_2 onNavigate={handleNavigation} currentPage="contact" />
    </div>
  );
}