import { ConfluenceHeaderV6_7 } from "../components/ConfluenceHeaderV6_7";
import { ConfluenceFooterV6_2 } from "../components/ConfluenceFooterV6_2";
import { ContractualReassuranceBlock } from "../components/ContractualReassuranceBlock";
import { Phone, Mail, CheckCircle, Send, User, Briefcase, MapPin, CircleDot, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { motion } from "motion/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { toast } from "sonner@2.0.3";

interface ConfluenceReservationPageProps {
  onNavigate?: (page: string) => void;
}

export function ConfluenceReservationPage({ onNavigate }: ConfluenceReservationPageProps = {}) {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // Lecture du paramètre métier depuis sessionStorage
  const [metier, setMetier] = useState<string>("");
  const [departement, setDepartement] = useState<string>("Lot-et-Garonne");

  useEffect(() => {
    const metierParam = sessionStorage.getItem('reservationMetier') || "";
    setMetier(metierParam);
    setDepartement("Lot-et-Garonne");
    
    // BATCH 45 : Pré-remplir le champ Secteur si métier réservé
    if (metierParam) {
      setFormData(prev => ({
        ...prev,
        secteur: capitalizeMetier(metierParam)
      }));
    }
  }, []);

  const capitalizeMetier = (metierStr: string): string => {
    if (!metierStr) return "Artisan";
    const formatted = metierStr
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return formatted;
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    secteur: "",
    ville: "",
    zone: "",
    rgpdConsent: false
  });

  // États d'erreur BATCH 40
  const [erreurName, setErreurName] = useState(false);
  const [erreurPhone, setErreurPhone] = useState(false);
  const [erreurEmail, setErreurEmail] = useState(false);
  const [erreurSecteur, setErreurSecteur] = useState(false);
  const [erreurVille, setErreurVille] = useState(false);
  const [erreurZone, setErreurZone] = useState(false);

  // BATCH 45.2 : Ajout des états "touched"
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
    secteur: false,
    ville: false,
    zone: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validations BATCH 40
  const isValidName = formData.name.trim().length >= 3;
  const cleanPhone = formData.phone.replace(/\s/g, '');
  const isValidPhone = /^(?:(?:\+|00)33|0)[1-9](?:\d{8}|\s\d{2}\s\d{2}\s\d{2}\s\d{2})$/.test(cleanPhone) || cleanPhone.length === 10;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isValidSecteur = formData.secteur.trim().length >= 3;
  const isValidVille = formData.ville.trim().length >= 2;
  const isValidZone = formData.zone.trim().length >= 3;

  // Validation formulaire complet (BATCH 44)
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
  };

  const metierDisplay = capitalizeMetier(metier);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <ConfluenceHeaderV6_7 onNavigate={handleNavigation} currentPage="reservation" />

      {/* 1. HERO SECTION */}
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
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6 md:mb-8"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              Finalisez votre réservation prioritaire
              {metier && <span className="text-[#D1A65E]"> en tant que {metierDisplay}</span>}
            </h1>

            <div className="max-w-2xl mx-auto mb-6 md:mb-8">
              <div 
                className="p-4 md:p-6 bg-white/80 border border-[#10b981]/30 rounded-xl"
                style={{ boxShadow: '0 2px 12px 0 rgba(16, 185, 129, 0.1)' }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div className="text-left">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      <strong className="text-[#10b981]">Zéro répétition.</strong> Nous avons bien noté votre demande d'exclusivité pour le métier de <strong>{metierDisplay}</strong> sur notre zone <strong>{departement}</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. BLOC RAPPEL DE VALEUR */}
      <section className="relative py-8 sm:py-12 md:py-16 px-4 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-xl md:rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] p-6 md:p-8 lg:p-10"
              style={{ boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.04)' }}
            >
              <div className="text-center mb-6 md:mb-8">
                <h2 
                  className="text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] mb-3"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
                >
                  Le Privilège de l'Exclusivité
                </h2>
                <p className="text-sm md:text-base text-gray-700">
                  Un engagement mutuel pour votre succès territorial.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#10b981]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg text-[#1A1A1A] mb-1">
                      <strong>Territoire protégé</strong>
                    </h3>
                    <p className="text-sm text-gray-600">
                      Aucun concurrent direct dans votre zone de 30km.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#10b981]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg text-[#1A1A1A] mb-1">
                      <strong>Visibilité maximale</strong>
                    </h3>
                    <p className="text-sm text-gray-600">
                      Référencement prioritaire sur votre secteur d'activité.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#10b981]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg text-[#1A1A1A] mb-1">
                      <strong>Accompagnement dédié</strong>
                    </h3>
                    <p className="text-sm text-gray-600">
                      Un interlocuteur unique qui connaît votre métier.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#10b981]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg text-[#1A1A1A] mb-1">
                      <strong>Transparence totale</strong>
                    </h3>
                    <p className="text-sm text-gray-600">
                      149€ HT/mois après setup gratuit. Aucun frais caché.
                    </p>
                  </div>
                </div>
              </div>

              <ContractualReassuranceBlock />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FORMULAIRE PRIORITAIRE - BATCH 40+44 États Dynamiques */}
      <section 
        ref={formRef}
        className="relative py-8 sm:py-12 md:py-16 px-4 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formVisible ? { opacity: 1, y: 0 } : {}}
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
                
                {/* Nom complet - BATCH 40 États Dynamiques */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Nom complet <span className="text-[#A32E3A]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                    <Input
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
                      className={`w-full pl-11 pr-11 bg-white cursor-text transition-all duration-200 ${
                        erreurName && touched.name
                          ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]' 
                          : !erreurName && touched.name && formData.name && isValidName
                          ? 'border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]'
                          : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-[#D1A65E]'
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

                {/* Téléphone - BATCH 40 États Dynamiques */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Téléphone (pour rappel prioritaire) <span className="text-[#A32E3A]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                    <Input
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
                      className={`w-full pl-11 pr-11 bg-white cursor-text transition-all duration-200 ${
                        erreurPhone && touched.phone
                          ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]' 
                          : !erreurPhone && touched.phone && formData.phone && isValidPhone
                          ? 'border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]'
                          : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-[#D1A65E]'
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

                {/* Email - BATCH 40 États Dynamiques */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Email <span className="text-[#A32E3A]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                    <Input
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
                      className={`w-full pl-11 pr-11 bg-white cursor-text transition-all duration-200 ${
                        erreurEmail && touched.email
                          ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]' 
                          : !erreurEmail && touched.email && formData.email && isValidEmail
                          ? 'border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]'
                          : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-[#D1A65E]'
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

                {/* Secteur d'activité - BATCH 45 : Pré-rempli et Verrouillé */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Secteur d'activité <span className="text-[#A32E3A]">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                    <Input
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
                      className={`w-full pl-11 pr-11 cursor-text transition-all duration-200 ${
                        erreurSecteur && touched.secteur
                          ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]' 
                          : !erreurSecteur && touched.secteur && formData.secteur && isValidSecteur
                          ? 'border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]'
                          : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-[#D1A65E]'
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

                {/* Ville principale - BATCH 40 États Dynamiques */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Ville principale <span className="text-[#A32E3A]">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                    <Input
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
                      className={`w-full pl-11 pr-11 bg-white cursor-text transition-all duration-200 ${
                        erreurVille && touched.ville
                          ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]' 
                          : !erreurVille && touched.ville && formData.ville && isValidVille
                          ? 'border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]'
                          : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-[#D1A65E]'
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

                {/* Zone souhaitée - BATCH 40 États Dynamiques */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Zone souhaitée <span className="text-[#A32E3A]">*</span>
                  </label>
                  <div className="relative">
                    <CircleDot className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D1D5DB]" strokeWidth={1.5} />
                    <Input
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
                      className={`w-full pl-11 pr-11 bg-white cursor-text transition-all duration-200 ${
                        erreurZone && touched.zone
                          ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-[#A32E3A]' 
                          : !erreurZone && touched.zone && formData.zone && isValidZone
                          ? 'border-[#10b981] focus:border-[#10b981] focus:ring-[#10b981]'
                          : 'border-[#E5E7EB] focus:border-[#D1A65E] focus:ring-[#D1A65E]'
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

                {/* Checkbox RGPD - BATCH 44 V2 Standardisé */}
                <div className="flex items-start gap-3 p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB]">
                  <Checkbox
                    id="rgpd-reservation"
                    checked={formData.rgpdConsent}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, rgpdConsent: checked as boolean })
                    }
                    required
                    className="mt-0.5"
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

                {/* CTA - BATCH 44 : disabled si formulaire incomplet */}
                <Button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className={`w-full py-4 md:py-6 text-base md:text-lg rounded-xl transition-all duration-300 ${
                    isSubmitting || !isFormValid
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
                </Button>

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
        </div>
      </section>

      <ConfluenceFooterV6_2 onNavigate={handleNavigation} currentPage="reservation" />
    </div>
  );
}