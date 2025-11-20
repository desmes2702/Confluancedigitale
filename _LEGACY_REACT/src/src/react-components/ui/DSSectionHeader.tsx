// src/react-components/ui/DSSectionHeader.tsx
import React from 'react';

interface DSSectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  accent?: boolean;
  className?: string;
}

export function DSSectionHeader({
  title,
  subtitle,
  description,
  align = 'left',
  accent = false,
  className = '',
}: DSSectionHeaderProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const alignmentClass = alignments[align];

  return (
    <div className={`mb-8 ${alignmentClass} ${className}`}>
      {/* Subtitle (petit texte au-dessus du titre) */}
      {subtitle && (
        <p
          className="text-sm font-medium text-[#D1A65E] mb-2 uppercase tracking-wider"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {subtitle}
        </p>
      )}

      {/* Titre principal */}
      <h2
        className="text-4xl md:text-5xl text-[#1A1A1A] mb-4"
        style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
      >
        {title}
      </h2>

      {/* Accent décoratif (trait doré) */}
      {accent && (
        <div
          className={`
            w-20 h-1 bg-[#D1A65E] mb-4
            ${align === 'center' ? 'mx-auto' : ''}
            ${align === 'right' ? 'ml-auto' : ''}
          `}
        />
      )}

      {/* Description */}
      {description && (
        <p
          className="text-lg text-gray-600 max-w-3xl"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
