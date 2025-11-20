import { useState } from "react";
import { Toaster } from "./components/ui/sonner";
import { ConfluenceGDPRBanner } from "./components/ConfluenceGDPRBanner";
import { ConfluenceLandingPage } from "./pages/ConfluenceLandingPage";
import { ConfluenceMethodePage } from "./pages/ConfluenceMethodePage";
import { ConfluenceEquipePage } from "./pages/ConfluenceEquipePage";
import { ConfluenceEtudesDeCasPage } from "./pages/ConfluenceEtudesDeCasPage";
import { ConfluenceReservationPage } from "./pages/ConfluenceReservationPage_BATCH44";
import { ConfluenceMentionsLegalesPage } from "./pages/ConfluenceMentionsLegalesPage";
import { ConfluenceContactPageV2 } from "./pages/ConfluenceContactPageV2";
import { ConfluenceAuditGratuitPageV4 } from "./pages/ConfluenceAuditGratuitPageV4";
import { ConfluencePolitiqueConfidentialitePage } from "./pages/ConfluencePolitiqueConfidentialitePage";
import { ConfluenceCGVPage } from "./pages/ConfluenceCGVPage";
import { Confluence404Page } from "./pages/Confluence404Page";
import { ConfluenceLogoShowcase } from "./pages/ConfluenceLogoShowcase";
import { ConfluenceOffrePage } from "./pages/ConfluenceOffrePage";
import { ConfluenceConcurrentsPage } from "./pages/ConfluenceConcurrentsPage";
import { ConfluenceExclusivitePage } from "./pages/ConfluenceExclusivitePage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // V5.0 : Scroll immédiat en haut (auto au lieu de smooth) pour éviter les conflits d'ancrage
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // Valid pages list
  const validPages = [
    'home',
    'offre',
    'exclusivite',
    'concurrents',
    'etudes-de-cas',
    'methode',
    'qui-sommes-nous',
    'contact',
    'audit-gratuit',
    'reservation',
    'politique-confidentialite',
    'cgv',
    'mentions-legales',
    'logo-showcase'
  ];

  // Check if current page is valid, otherwise show 404
  const isValidPage = validPages.includes(currentPage);

  return (
    <div className="min-h-screen antialiased">
      {/* 404 Page - No Header/Footer */}
      {!isValidPage ? (
        <Confluence404Page onNavigate={handleNavigate} />
      ) : currentPage === 'offre' ? (
        /* Page Offre avec son propre Header/Footer V6.7/V6.2 */
        <ConfluenceOffrePage onNavigate={handleNavigate} />
      ) : currentPage === 'exclusivite' ? (
        /* Page Exclusivité avec son propre Header/Footer V6.7/V6.2 */
        <ConfluenceExclusivitePage onNavigate={handleNavigate} />
      ) : currentPage === 'concurrents' ? (
        /* Page Concurrents avec son propre Header/Footer V6.7/V6.2 */
        <ConfluenceConcurrentsPage onNavigate={handleNavigate} />
      ) : currentPage === 'methode' ? (
        /* Page Méthode avec son propre Header/Footer V6.7/V6.2 */
        <ConfluenceMethodePage onNavigate={handleNavigate} />
      ) : currentPage === 'qui-sommes-nous' ? (
        /* Page Qui sommes-nous avec son propre Header/Footer V6.7/V6.2 */
        <ConfluenceEquipePage onNavigate={handleNavigate} />
      ) : currentPage === 'etudes-de-cas' ? (
        /* Page Études de Cas avec son propre Header/Footer V6.7/V6.2 */
        <ConfluenceEtudesDeCasPage onNavigate={handleNavigate} />
      ) : currentPage === 'contact' ? (
        /* Page Contact V2 - Flux Confiance (BATCH 3A) avec Header/Footer V6.7/V6.2 */
        <ConfluenceContactPageV2 onNavigate={handleNavigate} />
      ) : currentPage === 'audit-gratuit' ? (
        /* Page Audit Gratuit - Flux Sniper (BATCH 37) avec Header/Footer V6.7/V6.2 */
        <ConfluenceAuditGratuitPageV4 onNavigate={handleNavigate} />
      ) : currentPage === 'reservation' ? (
        /* Page Réservation - Flux Concierge (BATCH 11A) avec Header/Footer V6.7/V6.2 */
        <ConfluenceReservationPage onNavigate={handleNavigate} />
      ) : currentPage === 'home' ? (
        /* Page Home avec son propre Header/Footer V6.7/V6.2 */
        <ConfluenceLandingPage onNavigate={handleNavigate} />
      ) : currentPage === 'politique-confidentialite' ? (
        /* Page Politique de Confidentialité avec son propre Header/Footer V6.7/V6.2 */
        <ConfluencePolitiqueConfidentialitePage onNavigate={handleNavigate} />
      ) : currentPage === 'cgv' ? (
        /* Page CGV avec son propre Header/Footer V6.7/V6.2 */
        <ConfluenceCGVPage onNavigate={handleNavigate} />
      ) : currentPage === 'mentions-legales' ? (
        /* Page Mentions Légales avec son propre Header/Footer V6.7/V6.2 */
        <ConfluenceMentionsLegalesPage onNavigate={handleNavigate} />
      ) : currentPage === 'logo-showcase' ? (
        /* Page Logo Showcase */
        <>
          <ConfluenceLogoShowcase />
        </>
      ) : null}

      {/* Toast Notifications */}
      <Toaster />

      {/* GDPR Consent Banner - Global */}
      <ConfluenceGDPRBanner />
    </div>
  );
}