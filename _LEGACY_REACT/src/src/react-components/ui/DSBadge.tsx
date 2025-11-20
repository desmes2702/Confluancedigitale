// src/react-components/ui/DSBadge.tsx
import React from 'react';

interface DSBadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'gold' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export function DSBadge({
  variant = 'default',
  size = 'md',
  className = '',
  children,
}: DSBadgeProps) {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300';

  const variants = {
    default: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-[#10B981]',
    warning: 'bg-yellow-100 text-[#D1A65E]',
    error: 'bg-red-100 text-[#A32E3A]',
    gold: 'bg-[#D1A65E] text-white',
    outline: 'border-2 border-[#D1A65E] text-[#D1A65E] bg-transparent',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <span className={classes} style={{ fontFamily: 'Inter, sans-serif' }}>
      {children}
    </span>
  );
}
