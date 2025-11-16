// src/react-components/ui/DSLabel.tsx
import React from 'react';

interface DSLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  children: React.ReactNode;
}

export function DSLabel({
  required = false,
  className = '',
  children,
  ...props
}: DSLabelProps) {
  return (
    <label
      className={`
        block text-[#1A1A1A]
        ${className}
      `}
      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
      {...props}
    >
      {children}
      {required && <span className="text-[#A32E3A] ml-1">*</span>}
    </label>
  );
}
