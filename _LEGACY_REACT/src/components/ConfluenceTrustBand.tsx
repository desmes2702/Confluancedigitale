import { Gauge, Unlock, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function ConfluenceTrustBand() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-24 bg-white border-t border-b border-[#D1A65E]/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            L'obsession du <span className="text-[#D1A65E]">score parfait</span>.
          </h2>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Indicator 1 - Performance */}
          <div 
            className={`text-center space-y-4 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-[#D1A65E]/10 rounded-2xl flex items-center justify-center shadow-lg">
                <Gauge className="w-10 h-10 text-[#D1A65E]" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <p className="text-6xl md:text-7xl text-[#D1A65E] mb-2">100</p>
              <p className="text-xl text-gray-900">Performance</p>
              <p className="text-sm text-gray-500 mt-2">Garantie de vitesse maximale</p>
            </div>
          </div>

          {/* Indicator 2 - Autonomie */}
          <div 
            className={`text-center space-y-4 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-[#D1A65E]/10 rounded-2xl flex items-center justify-center shadow-lg">
                <Unlock className="w-10 h-10 text-[#D1A65E]" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <p className="text-6xl md:text-7xl text-[#D1A65E] mb-2">0%</p>
              <p className="text-xl text-gray-900">Dépendance</p>
              <p className="text-sm text-gray-500 mt-2">Vous gérez tout, sans code</p>
            </div>
          </div>

          {/* Indicator 3 - Visibilité */}
          <div 
            className={`text-center space-y-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-[#D1A65E]/10 rounded-2xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-10 h-10 text-[#D1A65E]" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <p className="text-6xl md:text-7xl text-[#D1A65E] mb-2">+40%</p>
              <p className="text-xl text-gray-900">Visibilité Locale</p>
              <p className="text-sm text-gray-500 mt-2">Position Google moyenne</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
