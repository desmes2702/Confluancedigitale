import { ArrowRight, Shield } from "lucide-react";

interface AvailabilityItem {
  sector: string;
  location: string;
  status: "available" | "reserved" | "taken";
}

interface AvailabilityBlockProps {
  onNavigate?: (page: string) => void;
}

/**
 * AvailabilityBlock Component
 * 
 * Displays a list of available, reserved, or taken business sectors
 * Used exclusively in ConfluenceOffrePage
 * 
 * Design System V6.7:
 * - Background: White solid blocks
 * - Border: #D1A65E for available
 * - Status colors: Green (#10b981) available, Orange reserved, Gray taken
 */
export function AvailabilityBlock({ onNavigate }: AvailabilityBlockProps = {}) {
  // Helper function to normalize sector names to match reservation form values
  const normalizeMetier = (sector: string): string => {
    const mapping: { [key: string]: string } = {
      "Couvreur": "couvreur",
      "Plombier": "plombier",
      "Électricien": "electricien",
      "Maçon": "macon",
      "Menuisier": "menuisier",
      "Peintre": "peintre",
      "Carreleur": "carreleur",
      "Plaquiste": "plaquiste"
    };
    return mapping[sector] || sector.toLowerCase();
  };

  const availabilityData: AvailabilityItem[] = [
    { sector: "Couvreur", location: "Fumel (47)", status: "taken" },
    { sector: "Plombier", location: "Fumel (47)", status: "available" },
    { sector: "Électricien", location: "Fumel (47)", status: "available" },
    { sector: "Maçon", location: "Fumel (47)", status: "reserved" },
    { sector: "Menuisier", location: "Fumel (47)", status: "available" },
    { sector: "Peintre", location: "Fumel (47)", status: "available" },
    { sector: "Carreleur", location: "Fumel (47)", status: "available" },
    { sector: "Plaquiste", location: "Fumel (47)", status: "available" },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "available":
        return {
          label: "Disponible",
          bgColor: "bg-[#10b981]/10",
          textColor: "text-[#10b981]",
          borderColor: "border-[#10b981]/30",
        };
      case "reserved":
        return {
          label: "Réservé",
          bgColor: "bg-orange-500/10",
          textColor: "text-orange-600",
          borderColor: "border-orange-500/30",
        };
      case "taken":
        return {
          label: "Pris",
          bgColor: "bg-gray-500/10",
          textColor: "text-gray-600",
          borderColor: "border-gray-500/30",
        };
      default:
        return {
          label: "Inconnu",
          bgColor: "bg-gray-500/10",
          textColor: "text-gray-600",
          borderColor: "border-gray-500/30",
        };
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h3 className="text-2xl md:text-3xl text-[#1A1A1A] mb-3 md:mb-4">
          Disponibilité par Secteur
        </h3>
        <p className="text-base md:text-lg text-gray-600">
          Exclusivité territoriale garantie. <span className="text-[#1A1A1A]">Un seul artisan par métier et par zone.</span>
        </p>
      </div>

      {/* Availability List */}
      <div className="space-y-3 md:space-y-4">
        <ul className="space-y-0">
          {availabilityData.map((item, itemIndex) => {
            const statusConfig = getStatusConfig(item.status);

            return (
              <li 
                key={itemIndex}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 p-4 md:p-5 rounded-xl bg-[#F9FAFB] transition-colors duration-200 border-b border-[#E5E7EB] last:border-b-0"
              >
                {/* Left: Sector & Location */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <h4 className="text-lg md:text-xl text-[#1A1A1A] flex-shrink-0">
                      {item.sector}
                    </h4>
                    <span className="text-sm md:text-base text-gray-600">
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Right: Status Badge + CTA */}
                <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                  {/* Status Badge */}
                  <span
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg border ${statusConfig.bgColor} ${statusConfig.textColor} ${statusConfig.borderColor} text-sm whitespace-nowrap`}
                  >
                    {statusConfig.label}
                  </span>

                  {/* CTA Button - Only for Available */}
                  {item.status === "available" && (
                    <button
                      onClick={() => {
                        if (onNavigate) {
                          // Store metier parameter in session storage for the reservation page
                          sessionStorage.setItem('reservationMetier', normalizeMetier(item.sector));
                          onNavigate('reservation');
                        }
                      }}
                      className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-lg border-2 border-[#D1A65E] bg-transparent text-[#1A1A1A] hover:bg-[#D1A65E]/5 transition-all duration-300 group whitespace-nowrap cursor-pointer"
                      style={{
                        boxShadow: '0 2px 8px 0 rgba(209, 166, 94, 0.15)',
                      }}
                    >
                      <span className="text-sm md:text-base">
                        Réserver ma place
                      </span>
                      <ArrowRight 
                        className="w-4 h-4 text-[#D1A65E] group-hover:translate-x-1 transition-transform duration-300" 
                        strokeWidth={2} 
                      />
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer Note */}
      <div className="mt-6 md:mt-8 p-4 md:p-5 bg-[#D1A65E]/5 border border-[#D1A65E]/20 rounded-xl">
        <p className="text-sm md:text-base text-gray-700 leading-relaxed flex items-start gap-2">
          <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#D1A65E] flex-shrink-0 mt-0.5" strokeWidth={2} />
          <span>
            <span className="text-[#1A1A1A]">Votre zone reste disponible jusqu'à validation définitive de votre réservation.</span>{" "}
            Les places "Réservées" sont en cours de finalisation contractuelle.
          </span>
        </p>
      </div>
    </div>
  );
}