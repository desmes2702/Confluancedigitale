import { Settings, Cookie } from "lucide-react";
import { Button } from "./ui/button";
import { openGDPRSettings } from "./ConfluenceGDPRBanner";

/**
 * GDPR Settings Trigger Button
 * 
 * This component can be placed anywhere (footer, privacy policy page, etc.)
 * to allow users to reopen the GDPR configuration modal at any time.
 * 
 * Usage:
 * <ConfluenceGDPRSettings />
 */

interface ConfluenceGDPRSettingsProps {
  variant?: "button" | "link";
  className?: string;
}

export function ConfluenceGDPRSettings({ 
  variant = "link",
  className = "" 
}: ConfluenceGDPRSettingsProps) {
  
  const handleOpenSettings = () => {
    // Open the GDPR modal directly without reloading
    openGDPRSettings();
  };

  if (variant === "button") {
    return (
      <Button
        onClick={handleOpenSettings}
        variant="outline"
        className={`border-[#D1A65E]/40 text-[#D1A65E] hover:bg-[#D1A65E]/10 hover:border-[#D1A65E] transition-all duration-300 cursor-pointer ${className}`}
      >
        <Settings className="w-4 h-4 mr-2" strokeWidth={1.5} />
        <span>Paramètres de Cookies</span>
      </Button>
    );
  }

  // Link variant (default)
  return (
    <button
      onClick={handleOpenSettings}
      className={`inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 group cursor-pointer ${className}`}
    >
      <Cookie className="w-4 h-4 group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
      <span className="underline underline-offset-2 decoration-gray-700 group-hover:decoration-white">
        Gérer mes cookies
      </span>
    </button>
  );
}