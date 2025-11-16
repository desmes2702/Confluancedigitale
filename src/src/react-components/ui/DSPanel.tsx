// src/react-components/ui/DSPanel.tsx
import React from 'react';

interface DSPanelProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'light' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  actions?: React.ReactNode;
}

export function DSPanel({
  title,
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  actions,
}: DSPanelProps) {
  const variants = {
    default: {
      container: 'bg-white border-2 border-gray-200',
      title: 'text-[#1A1A1A]',
    },
    accent: {
      container: 'bg-[#D1A65E] bg-opacity-10 border-2 border-[#D1A65E]',
      title: 'text-[#D1A65E]',
    },
    light: {
      container: 'bg-[#F9FAFB] border-2 border-gray-100',
      title: 'text-[#1A1A1A]',
    },
    dark: {
      container: 'bg-[#1A1A1A] border-2 border-[#1A1A1A]',
      title: 'text-white',
    },
  };

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const variantStyles = variants[variant];

  return (
    <div
      className={`${variantStyles.container} ${paddings[padding]} rounded-xl transition-all duration-300 ${className}`}
    >
      {/* Header avec titre et actions */}
      {(title || actions) && (
        <div className="flex items-center justify-between mb-4">
          {title && (
            <h3
              className={`text-xl font-semibold ${variantStyles.title}`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {title}
            </h3>
          )}
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}

      {/* Contenu */}
      <div
        className={variant === 'dark' ? 'text-white' : 'text-[#1A1A1A]'}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {children}
      </div>
    </div>
  );
}
