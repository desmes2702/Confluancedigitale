// src/react-components/ui/DSButton.tsx
import React from 'react';

interface DSButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  href?: string;
  children: React.ReactNode;
}

export function DSButton({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  href,
  className = '',
  children,
  disabled,
  ...props
}: DSButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    rounded-lg transition-all duration-300
    font-medium disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const variants = {
    primary: `
      bg-[#D1A65E] text-white
      hover:bg-[#B8934F] active:bg-[#9F7F43]
      focus:ring-[#D1A65E]
    `,
    secondary: `
      bg-[#1A1A1A] text-white
      hover:bg-[#2A2A2A] active:bg-[#0A0A0A]
      focus:ring-[#1A1A1A]
    `,
    outline: `
      bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A]
      hover:bg-[#1A1A1A] hover:text-white
      focus:ring-[#1A1A1A]
    `,
    ghost: `
      bg-transparent text-[#1A1A1A]
      hover:bg-[#F9FAFB]
      focus:ring-[#D1A65E]
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Si href est fourni, rendre un lien
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Chargement...
          </>
        ) : (
          children
        )}
      </a>
    );
  }

  // Sinon, rendre un bouton
  return (
    <button
      className={buttonClasses}
      style={{ fontFamily: 'Inter, sans-serif' }}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Chargement...
        </>
      ) : (
        children
      )}
    </button>
  );
}
