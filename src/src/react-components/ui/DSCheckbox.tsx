// src/react-components/ui/DSCheckbox.tsx
import React from 'react';

interface DSCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function DSCheckbox({
  label,
  error,
  className = '',
  id,
  ...props
}: DSCheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      <div className="flex items-start gap-3">
        {/* Checkbox input */}
        <input
          type="checkbox"
          id={checkboxId}
          className={`
            mt-1 w-5 h-5 rounded
            border-2 transition-all duration-300 cursor-pointer
            ${
              error
                ? 'border-[#A32E3A] focus:ring-[#A32E3A]/20'
                : 'border-gray-300 focus:ring-[#D1A65E]/20'
            }
            text-[#D1A65E]
            focus:ring-2 focus:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed
            ${className}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${checkboxId}-error` : undefined}
          {...props}
        />

        {/* Label */}
        {label && (
          <label
            htmlFor={checkboxId}
            className="flex-1 text-[#1A1A1A] cursor-pointer select-none"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {label}
          </label>
        )}
      </div>

      {/* Error message */}
      {error && (
        <p
          id={`${checkboxId}-error`}
          className="mt-2 ml-8 text-sm text-[#A32E3A]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
