import { Settings, Cookie } from "lucide-react";
import { openGDPRSettings } from "../../hooks/useGDPRConsent";

/**
 * GDPR Settings Trigger Button
 * 
 * This component can be placed anywhere (footer, privacy policy page, etc.)
 * to allow users to reopen the GDPR configuration modal at any time.
 * 
 * Usage:
 * <GDPRSettings />
 */

interface GDPRSettingsProps {
    variant?: "button" | "link";
    className?: string;
}

export function GDPRSettings({
    variant = "link",
    className = ""
}: GDPRSettingsProps) {

    const handleOpenSettings = () => {
        // Open the GDPR modal directly without reloading
        openGDPRSettings();
    };

    if (variant === "button") {
        return (
            <button
                onClick={handleOpenSettings}
                className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[#D1A65E]/40 text-[#D1A65E] hover:bg-[#D1A65E]/10 hover:border-[#D1A65E] h-10 px-4 py-2 ${className}`}
            >
                <Settings className="w-4 h-4 mr-2" strokeWidth={1.5} />
                <span>Paramètres de Cookies</span>
            </button>
        );
    }

    // Link variant (default)
    return (
        <button
            onClick={handleOpenSettings}
            className={`inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors duration-300 group cursor-pointer ${className}`}
        >
            <Cookie className="w-4 h-4 group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
            <span className="underline underline-offset-2 decoration-gray-700 group-hover:decoration-gray-900">
                Gérer mes cookies
            </span>
        </button>
    );
}
