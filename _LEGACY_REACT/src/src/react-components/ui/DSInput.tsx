// src/react-components/ui/DSInput.tsx
import React from 'react';

interface DSInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function DSInput({
  label,
  error,
  helperText,
  className = '',
  id,
  required,
  ...props
}: DSInputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className="block mb-2 text-[#1A1A1A]"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
        >
          {label}
          {required && <span className="text-[#A32E3A] ml-1">*</span>}
        </label>
      )}

      {/* Input */}
      <input
        id={inputId}
        className={`
          w-full px-4 py-3 rounded-lg
          border-2 transition-all duration-300
          ${
            error
              ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-2 focus:ring-[#A32E3A]/20'
              : 'border-gray-200 focus:border-[#D1A65E] focus:ring-2 focus:ring-[#D1A65E]/20'
          }
          placeholder:text-gray-400
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${className}
        `}
        style={{ fontFamily: 'Inter, sans-serif' }}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={
          error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
        }
        {...props}
      />

      {/* Error message */}
      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-2 text-sm text-[#A32E3A]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {error}
        </p>
      )}

      {/* Helper text */}
      {!error && helperText && (
        <p
          id={`${inputId}-helper`}
          className="mt-2 text-sm text-gray-600"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
