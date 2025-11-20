interface ConfluenceLogoProps {
  variant?: 'full' | 'icon' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  colorScheme?: 'color' | 'monochrome-dark' | 'monochrome-light' | 'gold-white' | 'gold-white-light';
  className?: string;
}

export function ConfluenceLogo({ 
  variant = 'full', 
  size = 'md',
  colorScheme = 'color',
  className = ''
}: ConfluenceLogoProps) {
  
  // Size configurations
  const sizes = {
    sm: { icon: 32, width: 120, height: 140 },
    md: { icon: 48, width: 180, height: 200 },
    lg: { icon: 64, width: 240, height: 280 },
    xl: { icon: 96, width: 320, height: 360 }
  };

  const currentSize = sizes[size];

  // Color configurations - Design System V6.7
  const colors = {
    color: {
      primary: '#1A1A1A', // Noir Mat
      accent: '#D1A65E',  // Or/Cuivre
      text: '#1A1A1A'
    },
    'monochrome-dark': {
      primary: '#1A1A1A',
      accent: '#1A1A1A',
      text: '#1A1A1A'
    },
    'monochrome-light': {
      primary: '#FFFFFF',
      accent: '#FFFFFF',
      text: '#FFFFFF'
    },
    'gold-white': {
      primary: '#FFFFFF',    // Blanc pour les formes
      accent: '#D1A65E',     // Or/Cuivre pour l'accent
      text: '#1A1A1A'        // Noir Mat pour le texte (Header sur fond clair)
    },
    'gold-white-light': {
      primary: '#FFFFFF',    // Blanc pour les formes
      accent: '#D1A65E',     // Or/Cuivre pour l'accent
      text: '#FFFFFF'        // Blanc pour le texte (Footer sur fond noir)
    }
  };

  const currentColors = colors[colorScheme];

  // Icon Only
  if (variant === 'icon') {
    return (
      <svg 
        width={currentSize.icon} 
        height={currentSize.icon} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Background circle (optional, for contrast) */}
        {/* <circle cx="50" cy="50" r="48" fill="#F9FAFB" /> */}
        
        {/* Left geometric shape - Triangle/Arrow pointing right */}
        <path 
          d="M 20 30 L 45 50 L 20 70 Z" 
          fill={currentColors.primary}
          opacity="0.9"
        />
        
        {/* Right geometric shape - Triangle/Arrow pointing left */}
        <path 
          d="M 80 30 L 55 50 L 80 70 Z" 
          fill={currentColors.primary}
          opacity="0.9"
        />
        
        {/* Central confluence point - Gold/Copper accent (upward arrow/performance indicator) */}
        <path 
          d="M 50 35 L 58 50 L 50 50 L 50 65 L 42 50 L 50 50 Z" 
          fill={currentColors.accent}
        />
        
        {/* Subtle glow effect for premium feel */}
        <circle 
          cx="50" 
          cy="50" 
          r="12" 
          fill={currentColors.accent} 
          opacity="0.15"
        />
      </svg>
    );
  }

  // Horizontal variant (logo + text side by side)
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Icon */}
        <svg 
          width={currentSize.icon} 
          height={currentSize.icon} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M 20 30 L 45 50 L 20 70 Z" 
            fill={currentColors.primary}
            opacity="0.9"
          />
          <path 
            d="M 80 30 L 55 50 L 80 70 Z" 
            fill={currentColors.primary}
            opacity="0.9"
          />
          <path 
            d="M 50 35 L 58 50 L 50 50 L 50 65 L 42 50 L 50 50 Z" 
            fill={currentColors.accent}
          />
          <circle 
            cx="50" 
            cy="50" 
            r="12" 
            fill={currentColors.accent} 
            opacity="0.15"
          />
        </svg>

        {/* Text */}
        <div className="flex flex-col">
          <div 
            className="tracking-tight leading-none"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: size === 'sm' ? '1.25rem' : size === 'md' ? '1.5rem' : size === 'lg' ? '2rem' : '2.5rem',
              color: currentColors.text,
              fontWeight: 600
            }}
          >
            Confluence
          </div>
          <div 
            className="tracking-wide leading-none mt-0.5"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: size === 'sm' ? '0.75rem' : size === 'md' ? '0.875rem' : size === 'lg' ? '1rem' : '1.25rem',
              color: currentColors.text,
              fontWeight: 500,
              letterSpacing: '0.05em'
            }}
          >
            DIGITALE
          </div>
        </div>
      </div>
    );
  }

  // Full variant (icon above text)
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Icon */}
      <svg 
        width={currentSize.icon} 
        height={currentSize.icon} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mb-4"
      >
        {/* Left geometric shape */}
        <path 
          d="M 20 30 L 45 50 L 20 70 Z" 
          fill={currentColors.primary}
          opacity="0.9"
        />
        
        {/* Right geometric shape */}
        <path 
          d="M 80 30 L 55 50 L 80 70 Z" 
          fill={currentColors.primary}
          opacity="0.9"
        />
        
        {/* Central confluence point - Performance indicator */}
        <path 
          d="M 50 35 L 58 50 L 50 50 L 50 65 L 42 50 L 50 50 Z" 
          fill={currentColors.accent}
        />
        
        {/* Glow effect */}
        <circle 
          cx="50" 
          cy="50" 
          r="12" 
          fill={currentColors.accent} 
          opacity="0.15"
        />
      </svg>

      {/* Text */}
      <div className="flex flex-col items-center text-center">
        {/* Confluence - Serif elegant */}
        <div 
          className="tracking-tight leading-none"
          style={{ 
            fontFamily: 'Playfair Display, serif',
            fontSize: size === 'sm' ? '1.5rem' : size === 'md' ? '2rem' : size === 'lg' ? '2.5rem' : '3rem',
            color: currentColors.text,
            fontWeight: 600,
            letterSpacing: '0.02em'
          }}
        >
          Confluence
        </div>

        {/* Separator line - Gold/Copper */}
        <div 
          className="my-2"
          style={{ 
            width: size === 'sm' ? '60px' : size === 'md' ? '80px' : size === 'lg' ? '100px' : '120px',
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${currentColors.accent}, transparent)`
          }}
        />

        {/* Digitale - Sans-serif modern */}
        <div 
          className="tracking-widest leading-none"
          style={{ 
            fontFamily: 'Inter, sans-serif',
            fontSize: size === 'sm' ? '0.875rem' : size === 'md' ? '1rem' : size === 'lg' ? '1.25rem' : '1.5rem',
            color: currentColors.text,
            fontWeight: 500,
            letterSpacing: '0.15em'
          }}
        >
          DIGITALE
        </div>
      </div>
    </div>
  );
}

// Export standalone icon for favicon use
export function ConfluenceFavicon({ size = 32 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simplified version for small sizes - Noir Mat V6.2 */}
      <rect width="100" height="100" fill="#1A1A1A" rx="20"/>
      
      {/* Left arrow */}
      <path 
        d="M 25 35 L 45 50 L 25 65 Z" 
        fill="#FFFFFF"
        opacity="0.9"
      />
      
      {/* Right arrow */}
      <path 
        d="M 75 35 L 55 50 L 75 65 Z" 
        fill="#FFFFFF"
        opacity="0.9"
      />
      
      {/* Central gold accent */}
      <path 
        d="M 50 40 L 55 50 L 50 60 L 45 50 Z" 
        fill="#D1A65E"
      />
    </svg>
  );
}
