// src/react-components/ui/DSCard.tsx
import React from 'react';

interface DSCardProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'bordered' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

interface DSCardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

interface DSCardBodyProps {
  className?: string;
  children: React.ReactNode;
}

interface DSCardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export function DSCard({
  className = '',
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
}: DSCardProps) {
  const baseCard = 'bg-white rounded-xl transition-all duration-300';

  const variants = {
    default: 'border-2 border-gray-100',
    bordered: 'border-2 border-[#D1A65E]',
    elevated: '',
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverEffect = hover
    ? 'hover:scale-[1.02] cursor-pointer'
    : '';

  const elevatedShadow = variant === 'elevated'
    ? { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }
    : {};

  const classes = `${baseCard} ${variants[variant]} ${paddings[padding]} ${hoverEffect} ${className}`;

  return (
    <div className={classes} style={elevatedShadow}>
      {children}
    </div>
  );
}

export function DSCardHeader({
  className = '',
  children,
}: DSCardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function DSCardBody({
  className = '',
  children,
}: DSCardBodyProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function DSCardFooter({
  className = '',
  children,
}: DSCardFooterProps) {
  return (
    <div className={`mt-4 pt-4 border-t-2 border-gray-100 ${className}`}>
      {children}
    </div>
  );
}

// Export du composant composé
DSCard.Header = DSCardHeader;
DSCard.Body = DSCardBody;
DSCard.Footer = DSCardFooter;
