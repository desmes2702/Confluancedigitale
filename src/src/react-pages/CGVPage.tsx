import React from 'react';
import { DSSectionHeader } from '@/react-components/ui/DSSectionHeader';

/**
 * Page Conditions Générales de Vente (CGV)
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - 100% Static - No islands needed
 * 
 * Changes:
 * - Removed Lucide icons (FileText, CheckCircle) → Inline SVG
 * - Using DSSectionHeader for page title
 * - Pure HTML/Tailwind for content
 * - Zero dependencies on Radix/CVA/Lucide
 * - Ready for Astro conversion
 */

const FileTextIcon = () => (
  <svg 
    className="w-12 h-12 text-[#D1A65E]" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg 
    className="w-6 h-6 text-[#10b981]" 
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

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header placeholder */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-gray-500">Header placeholder</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="flex flex-col items-center mb-12">
          <FileTextIcon />
          <DSSectionHeader
            title="Conditions Générales de Vente"
            subtitle="Modalités de nos prestations"
            description="Applicables à toutes les prestations de Confluence Digitale"
            align="center"
            accent={true}
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Préambule */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Préambule
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Confluence Digitale SARL, ci-après dénommée « le Prestataire », et toute personne physique ou morale, ci-après dénommée « le Client », souhaitant bénéficier des services proposés.
              </p>
              <p>
                Toute commande implique l'acceptation sans réserve par le Client et son adhésion pleine et entière aux présentes CGV.
              </p>
              <p className="font-semibold text-[#1A1A1A]">
                Date d'entrée en vigueur : 16 novembre 2025
              </p>
            </div>
          </section>

          {/* Objet */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Objet
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Les présentes CGV ont pour objet de définir les droits et obligations des parties dans le cadre de la fourniture des prestations suivantes :
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Création et développement de sites web</li>
                <li>Refonte de sites existants</li>
                <li>Maintenance et hébergement de sites web</li>
                <li>Optimisation SEO</li>
                <li>Audit de performance web</li>
                <li>Conseil en stratégie digitale</li>
                <li>Formation aux outils web</li>
              </ul>
            </div>
          </section>

          {/* Devis et commande */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Devis et commande
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-[#1A1A1A]">3.1 Devis</h3>
              <p>
                Tout projet fait l'objet d'un devis détaillé établi par le Prestataire. Le devis est valable 30 jours à compter de sa date d'émission.
              </p>
              
              <h3 className="font-semibold text-[#1A1A1A] mt-6">3.2 Bon de commande</h3>
              <p>
                L'acceptation du devis par le Client, matérialisée par sa signature du bon de commande ou son accord écrit (email), vaut commande ferme et définitive.
              </p>
              
              <h3 className="font-semibold text-[#1A1A1A] mt-6">3.3 Acompte</h3>
              <p>
                Un acompte de 30% du montant total HT est demandé à la signature du bon de commande. Cet acompte est non remboursable sauf en cas de force majeure.
              </p>
            </div>
          </section>

          {/* Prix */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Prix et conditions de paiement
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-[#1A1A1A]">4.1 Prix</h3>
              <p>
                Les prix sont indiqués en euros hors taxes (HT). La TVA en vigueur (20%) sera ajoutée au montant HT.
              </p>
              
              <h3 className="font-semibold text-[#1A1A1A] mt-6">4.2 Modalités de paiement</h3>
              <p>
                Le paiement s'effectue selon l'échéancier suivant :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>30%</strong> à la signature du bon de commande</li>
                <li><strong>40%</strong> à la validation de la maquette/prototype</li>
                <li><strong>30%</strong> à la livraison finale du projet</li>
              </ul>
              
              <h3 className="font-semibold text-[#1A1A1A] mt-6">4.3 Moyens de paiement</h3>
              <p>
                Les paiements peuvent être effectués par :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Virement bancaire</li>
                <li>Chèque à l'ordre de Confluence Digitale SARL</li>
                <li>Carte bancaire (via lien de paiement sécurisé)</li>
              </ul>
              
              <h3 className="font-semibold text-[#1A1A1A] mt-6">4.4 Retard de paiement</h3>
              <p>
                En cas de retard de paiement, des pénalités de 3 fois le taux d'intérêt légal seront appliquées, ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement.
              </p>
            </div>
          </section>

          {/* Obligations du prestataire */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Obligations du Prestataire
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Le Prestataire s'engage à :
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Réaliser les prestations conformément au cahier des charges validé</li>
                <li>Respecter les délais convenus dans la mesure du possible</li>
                <li>Informer le Client de l'avancement du projet</li>
                <li>Livrer un site fonctionnel et conforme aux standards web actuels</li>
                <li>Assurer un suivi post-livraison pendant 30 jours (correction de bugs)</li>
                <li>Former le Client à l'utilisation du site si prévu au devis</li>
              </ul>
              
              <div className="mt-6 p-4 bg-[#F9FAFB] rounded-lg border border-[#D1A65E]">
                <p className="font-semibold text-[#1A1A1A] mb-2">
                  ⚠️ Clause de non-garantie de résultat
                </p>
                <p>
                  Le Prestataire est tenu à une obligation de moyens et non de résultat. Les prestations d'optimisation SEO, de génération de trafic ou de conversion ne donnent lieu à aucune garantie de résultat chiffré.
                </p>
              </div>
            </div>
          </section>

          {/* Obligations du client */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Obligations du Client
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Le Client s'engage à :
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Fournir tous les éléments nécessaires à la réalisation du projet (textes, images, logos, etc.)</li>
                <li>Garantir qu'il dispose des droits sur tous les contenus fournis</li>
                <li>Répondre aux demandes de validation dans les délais convenus</li>
                <li>Effectuer les paiements selon l'échéancier défini</li>
                <li>Collaborer activement à la réalisation du projet</li>
              </ul>
              
              <div className="mt-6 p-4 bg-[#F9FAFB] rounded-lg border border-[#A32E3A]">
                <p className="font-semibold text-[#1A1A1A] mb-2">
                  ⚠️ Impact des retards client
                </p>
                <p>
                  Tout retard du Client dans la fourniture d'éléments ou la validation de livrables entraîne un report des délais de livraison sans que la responsabilité du Prestataire puisse être engagée.
                </p>
              </div>
            </div>
          </section>

          {/* Délais */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Délais de réalisation
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Les délais de réalisation sont indiqués dans le devis à titre indicatif. Ils courent à compter de la réception de l'acompte et de tous les éléments nécessaires à la réalisation du projet.
              </p>
              
              <p>
                Les délais peuvent être prolongés en cas de :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Retard dans la fourniture d'éléments par le Client</li>
                <li>Modifications substantielles du cahier des charges</li>
                <li>Force majeure</li>
                <li>Indisponibilité de services tiers nécessaires au projet</li>
              </ul>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border-2 border-[#D1A65E]">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Propriété intellectuelle
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-[#1A1A1A]">8.1 Transfert des droits</h3>
              <p>
                À l'issue du projet et après paiement intégral des prestations, le Prestataire cède au Client les droits d'utilisation du site web développé.
              </p>
              
              <h3 className="font-semibold text-[#1A1A1A] mt-6">8.2 Code source</h3>
              <p>
                Le code source du site reste la propriété du Prestataire. Une licence d'utilisation non exclusive est accordée au Client pour l'exploitation du site.
              </p>
              
              <h3 className="font-semibold text-[#1A1A1A] mt-6">8.3 Contenus fournis par le Client</h3>
              <p>
                Le Client garantit être propriétaire ou disposer des droits nécessaires sur tous les contenus fournis (textes, images, vidéos, etc.). Il garantit le Prestataire contre toute action en contrefaçon.
              </p>
              
              <h3 className="font-semibold text-[#1A1A1A] mt-6">8.4 Signature du Prestataire</h3>
              <p>
                Sauf demande contraire du Client, le Prestataire se réserve le droit d'apposer une mention discrète « Réalisé par Confluence Digitale » avec lien vers son site.
              </p>
            </div>
          </section>

          {/* Garantie */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Garantie et maintenance
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-[#1A1A1A]">9.1 Garantie de bon fonctionnement</h3>
              <p>
                Le Prestataire garantit le bon fonctionnement du site pendant 30 jours suivant la livraison. Les corrections de bugs constatés pendant cette période sont gratuites.
              </p>
              
              <h3 className="font-semibold text-[#1A1A1A] mt-6">9.2 Maintenance</h3>
              <p>
                Au-delà de la période de garantie, toute intervention de maintenance fait l'objet d'un devis distinct. Des forfaits de maintenance mensuelle sont proposés sur demande.
              </p>
              
              <h3 className="font-semibold text-[#1A1A1A] mt-6">9.3 Exclusions</h3>
              <p>
                Ne sont pas couverts par la garantie :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Les dysfonctionnements liés à des modifications effectuées par le Client ou un tiers</li>
                <li>Les problèmes liés à l'hébergement ou au nom de domaine</li>
                <li>Les incompatibilités avec des navigateurs obsolètes</li>
                <li>Les dysfonctionnements liés à des virus ou attaques informatiques</li>
              </ul>
            </div>
          </section>

          {/* Résiliation */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Résiliation
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-[#1A1A1A]">10.1 Par le Client</h3>
              <p>
                Le Client peut résilier le contrat à tout moment moyennant un préavis de 15 jours et le paiement de l'intégralité des prestations déjà réalisées.
              </p>
              
              <h3 className="font-semibold text-[#1A1A1A] mt-6">10.2 Par le Prestataire</h3>
              <p>
                Le Prestataire peut résilier le contrat en cas de :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Non-paiement après mise en demeure restée sans effet pendant 15 jours</li>
                <li>Manquement grave du Client à ses obligations</li>
                <li>Force majeure rendant impossible la poursuite du contrat</li>
              </ul>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Limitation de responsabilité
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                La responsabilité du Prestataire ne peut être engagée qu'en cas de faute ou de négligence prouvée. En tout état de cause, la responsabilité du Prestataire est limitée au montant des sommes effectivement perçues au titre du contrat.
              </p>
              
              <p>
                Le Prestataire ne saurait être tenu responsable :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Des préjudices indirects (perte de chiffre d'affaires, d'image, etc.)</li>
                <li>De l'utilisation du site par le Client ou des tiers</li>
                <li>Du contenu publié par le Client</li>
                <li>Des interruptions de service liées à l'hébergeur</li>
              </ul>
            </div>
          </section>

          {/* Force majeure */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Force majeure
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Aucune des parties ne sera tenue responsable de l'inexécution de ses obligations en cas de force majeure telle que définie par la jurisprudence française.
              </p>
            </div>
          </section>

          {/* Données personnelles */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Données personnelles
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Les données personnelles collectées dans le cadre de la relation contractuelle font l'objet d'un traitement informatique conforme au RGPD.
              </p>
              <p>
                Pour plus d'informations, consultez notre{' '}
                <a 
                  href="/politique-confidentialite"
                  className="text-[#D1A65E] hover:text-[#A32E3A] transition-colors font-semibold"
                >
                  Politique de Confidentialité
                </a>
                .
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Droit applicable et litiges
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-[#1A1A1A]">14.1 Droit applicable</h3>
              <p>
                Les présentes CGV sont soumises au droit français.
              </p>
              
              <h3 className="font-semibold text-[#1A1A1A] mt-6">14.2 Médiation</h3>
              <p>
                En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.
              </p>
              
              <h3 className="font-semibold text-[#1A1A1A] mt-6">14.3 Juridiction compétente</h3>
              <p>
                À défaut de résolution amiable, tout litige relève de la compétence exclusive du Tribunal de Commerce de Paris.
              </p>
            </div>
          </section>

          {/* Acceptation */}
          <section className="bg-[#10b981] bg-opacity-10 rounded-2xl p-8 border-2 border-[#10b981]">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircleIcon />
              <h2 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
                Acceptation des CGV
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold text-[#1A1A1A]">
                La signature du devis ou du bon de commande vaut acceptation sans réserve des présentes Conditions Générales de Vente.
              </p>
              <p>
                Le Client reconnaît avoir pris connaissance de ces CGV et en accepte les termes.
              </p>
              <p className="mt-4 text-sm">
                <strong>Version en vigueur :</strong> 16 novembre 2025
              </p>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Prêt à démarrer votre projet ?</p>
          <a 
            href="/contact"
            className="inline-block bg-[#D1A65E] text-white px-8 py-3 rounded-lg hover:bg-[#A32E3A] transition-all duration-300"
          >
            Demander un devis
          </a>
        </div>
      </main>

      {/* Footer placeholder */}
      <footer className="bg-[#1A1A1A] text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">Footer placeholder</p>
        </div>
      </footer>
    </div>
  );
}
