import { ConfluenceLogo, ConfluenceFavicon } from "../components/ConfluenceLogo";

export function ConfluenceLogoShowcase() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              Logo <span className="text-[#D1A65E]">Confluence Digitale</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Design System V6.1 "Matériaux Nobles"
            </p>

            {/* Main Logo Display */}
            <div className="bg-white rounded-3xl shadow-2xl p-16 border border-[#D1A65E]/20">
              <ConfluenceLogo variant="full" size="xl" colorScheme="color" />
            </div>
          </div>
        </div>
      </section>

      {/* Variants Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Full Variants */}
            <div className="mb-20">
              <h2 className="text-3xl text-gray-900 mb-8">
                Variante <span className="text-[#D1A65E]">Complète</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Small */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex flex-col items-center justify-center min-h-[300px]">
                  <ConfluenceLogo variant="full" size="sm" colorScheme="color" />
                  <p className="text-sm text-gray-500 mt-6">Small</p>
                </div>

                {/* Medium */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex flex-col items-center justify-center min-h-[300px]">
                  <ConfluenceLogo variant="full" size="md" colorScheme="color" />
                  <p className="text-sm text-gray-500 mt-6">Medium</p>
                </div>

                {/* Large */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex flex-col items-center justify-center min-h-[300px]">
                  <ConfluenceLogo variant="full" size="lg" colorScheme="color" />
                  <p className="text-sm text-gray-500 mt-6">Large</p>
                </div>

                {/* XLarge */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex flex-col items-center justify-center min-h-[300px]">
                  <ConfluenceLogo variant="full" size="xl" colorScheme="color" />
                  <p className="text-sm text-gray-500 mt-6">X-Large</p>
                </div>
              </div>
            </div>

            {/* Horizontal Variants */}
            <div className="mb-20">
              <h2 className="text-3xl text-gray-900 mb-8">
                Variante <span className="text-[#D1A65E]">Horizontale</span>
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex items-center justify-center">
                  <ConfluenceLogo variant="horizontal" size="sm" colorScheme="color" />
                </div>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex items-center justify-center">
                  <ConfluenceLogo variant="horizontal" size="md" colorScheme="color" />
                </div>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex items-center justify-center">
                  <ConfluenceLogo variant="horizontal" size="lg" colorScheme="color" />
                </div>
              </div>
            </div>

            {/* Icon Only Variants */}
            <div className="mb-20">
              <h2 className="text-3xl text-gray-900 mb-8">
                Variante <span className="text-[#D1A65E]">Icône</span> (Favicon)
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col items-center justify-center">
                  <ConfluenceLogo variant="icon" size="sm" colorScheme="color" />
                  <p className="text-xs text-gray-500 mt-3">32px</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col items-center justify-center">
                  <ConfluenceLogo variant="icon" size="md" colorScheme="color" />
                  <p className="text-xs text-gray-500 mt-3">48px</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col items-center justify-center">
                  <ConfluenceLogo variant="icon" size="lg" colorScheme="color" />
                  <p className="text-xs text-gray-500 mt-3">64px</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col items-center justify-center">
                  <ConfluenceLogo variant="icon" size="xl" colorScheme="color" />
                  <p className="text-xs text-gray-500 mt-3">96px</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col items-center justify-center">
                  <ConfluenceFavicon size={32} />
                  <p className="text-xs text-gray-500 mt-3">Favicon</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col items-center justify-center">
                  <ConfluenceFavicon size={64} />
                  <p className="text-xs text-gray-500 mt-3">Favicon 2x</p>
                </div>
              </div>
            </div>

            {/* Color Schemes */}
            <div className="mb-20">
              <h2 className="text-3xl text-gray-900 mb-8">
                Schémas de <span className="text-[#D1A65E]">Couleurs</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Color */}
                <div className="bg-white rounded-2xl p-8 border-2 border-[#D1A65E] shadow-lg">
                  <ConfluenceLogo variant="horizontal" size="md" colorScheme="color" />
                  <p className="text-sm text-gray-600 mt-6 text-center">
                    <strong>Couleur</strong><br/>
                    Noir Charbon + Or/Cuivre
                  </p>
                </div>

                {/* Monochrome Dark */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <ConfluenceLogo variant="horizontal" size="md" colorScheme="monochrome-dark" />
                  <p className="text-sm text-gray-600 mt-6 text-center">
                    <strong>Monochrome Sombre</strong><br/>
                    Noir uniquement
                  </p>
                </div>

                {/* Monochrome Light */}
                <div className="bg-[#0D0D0D] rounded-2xl p-8 shadow-lg">
                  <ConfluenceLogo variant="horizontal" size="md" colorScheme="monochrome-light" />
                  <p className="text-sm text-white/80 mt-6 text-center">
                    <strong>Monochrome Clair</strong><br/>
                    Blanc uniquement
                  </p>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-20">
              <h2 className="text-3xl text-gray-900 mb-8">
                Cas d'<span className="text-[#D1A65E]">Usage</span>
              </h2>
              
              <div className="space-y-6">
                {/* Header Example */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                    <p className="text-sm text-gray-600">Header / Navigation</p>
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <ConfluenceLogo variant="horizontal" size="sm" colorScheme="color" />
                    <div className="flex gap-6 text-sm text-gray-600">
                      <span>Accueil</span>
                      <span>Méthode</span>
                      <span>Contact</span>
                    </div>
                  </div>
                </div>

                {/* Footer Example */}
                <div className="bg-[#0D0D0D] rounded-2xl p-8">
                  <div className="mb-6">
                    <p className="text-sm text-white/60 mb-4">Footer (fond sombre)</p>
                  </div>
                  <ConfluenceLogo variant="horizontal" size="sm" colorScheme="monochrome-light" />
                </div>

                {/* Card Example */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-12 text-center">
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-8">Card / Section Hero</p>
                  </div>
                  <ConfluenceLogo variant="full" size="lg" colorScheme="color" />
                  <p className="text-gray-600 mt-8 max-w-md mx-auto">
                    Votre partenaire pour une présence digitale performante et autonome.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-[#D1A65E]/20 p-12">
              <h2 className="text-3xl text-gray-900 mb-8">
                Spécifications <span className="text-[#D1A65E]">Techniques</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Colors */}
                <div>
                  <h3 className="text-xl text-gray-900 mb-4">Couleurs</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#0D0D0D] rounded-lg shadow-md"></div>
                      <div>
                        <p className="text-sm text-gray-900">#0D0D0D</p>
                        <p className="text-xs text-gray-500">Noir Charbon</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#D1A65E] rounded-lg shadow-md"></div>
                      <div>
                        <p className="text-sm text-gray-900">#D1A65E</p>
                        <p className="text-xs text-gray-500">Or/Cuivre</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Typography */}
                <div>
                  <h3 className="text-xl text-gray-900 mb-4">Typographie</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Playfair Display
                      </p>
                      <p className="text-xs text-gray-500">Serif • "Confluence"</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-900 tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                        INTER
                      </p>
                      <p className="text-xs text-gray-500">Sans-serif • "DIGITALE"</p>
                    </div>
                  </div>
                </div>

                {/* Concept */}
                <div className="md:col-span-2 mt-6">
                  <h3 className="text-xl text-gray-900 mb-4">Concept</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Deux formes géométriques (triangles/flèches) se rejoignant au centre, 
                    symbolisant la <strong>confluence</strong> et la <strong>synergie</strong>. 
                    L'élément central doré représente un indicateur de performance ascendant, 
                    aligné avec la promesse de <strong>score 100/100</strong>.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Download/Export Instructions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-gray-900 mb-8 text-center">
              Utilisation du <span className="text-[#D1A65E]">Logo</span>
            </h2>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl text-gray-900 mb-4">Code d'Import</h3>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-6 overflow-x-auto">
                <code className="text-sm">
                  {`import { ConfluenceLogo, ConfluenceFavicon } from './components/ConfluenceLogo';

// Logo complet
<ConfluenceLogo variant="full" size="lg" colorScheme="color" />

// Logo horizontal (header)
<ConfluenceLogo variant="horizontal" size="md" colorScheme="color" />

// Icône seule
<ConfluenceLogo variant="icon" size="sm" colorScheme="color" />

// Favicon
<ConfluenceFavicon size={32} />`}
                </code>
              </div>

              <h3 className="text-xl text-gray-900 mb-4 mt-8">Props Disponibles</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>variant:</strong> 'full' | 'icon' | 'horizontal'</p>
                <p><strong>size:</strong> 'sm' | 'md' | 'lg' | 'xl'</p>
                <p><strong>colorScheme:</strong> 'color' | 'monochrome-dark' | 'monochrome-light'</p>
                <p><strong>className:</strong> Classes Tailwind additionnelles</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
