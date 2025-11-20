import { Shield, Check } from "lucide-react";

/**
 * GDPR Compliance Badge
 * 
 * A small visual badge that shows GDPR compliance status.
 * Can be placed in footer, header, or any page section.
 * 
 * Usage:
 * <ConfluenceGDPRBadge />
 * <ConfluenceGDPRBadge size="sm" />
 * <ConfluenceGDPRBadge variant="minimal" />
 */

interface ConfluenceGDPRBadgeProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "minimal" | "premium";
  className?: string;
}

export function ConfluenceGDPRBadge({ 
  size = "md",
  variant = "default",
  className = "" 
}: ConfluenceGDPRBadgeProps) {
  
  // Size variants
  const sizeClasses = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-3"
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  // Default variant (green badge)
  if (variant === "default") {
    return (
      <div className={`inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full ${sizeClasses[size]} ${className}`}>
        <Check className={`${iconSizes[size]} text-green-600`} strokeWidth={2} />
        <span className="text-green-800">RGPD Compliant</span>
      </div>
    );
  }

  // Minimal variant (text + icon only)
  if (variant === "minimal") {
    return (
      <div className={`inline-flex items-center gap-2 text-gray-600 ${className}`}>
        <Shield className={`${iconSizes[size]}`} strokeWidth={1.5} />
        <span className={`${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'}`}>
          RGPD Compliant
        </span>
      </div>
    );
  }

  // Premium variant (gold/copper - Design System V6.1)
  if (variant === "premium") {
    return (
      <div className={`inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#D1A65E]/40 rounded-lg ${sizeClasses[size]} ${className}`}>
        <Shield className={`${iconSizes[size]} text-[#D1A65E]`} strokeWidth={1.5} />
        <span className="text-white">RGPD Compliant</span>
      </div>
    );
  }

  return null;
}
