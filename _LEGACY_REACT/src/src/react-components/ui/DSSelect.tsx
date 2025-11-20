// src/react-components/ui/DSSelect.tsx
import React from 'react';

interface DSSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface DSSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: DSSelectOption[];
  placeholder?: string;
}

export function DSSelect({
  label,
  error,
  helperText,
  options,
  placeholder,
  className = '',
  id,
  required,
  ...props
}: DSSelectProps) {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={selectId}
          className="block mb-2 text-[#1A1A1A]"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
        >
          {label}
          {required && <span className="text-[#A32E3A] ml-1">*</span>}
        </label>
      )}

      {/* Select wrapper */}
      <div className="relative">
        <select
          id={selectId}
          className={`
            w-full px-4 py-3 pr-10 rounded-lg
            border-2 transition-all duration-300
            appearance-none cursor-pointer
            ${
              error
                ? 'border-[#A32E3A] focus:border-[#A32E3A] focus:ring-2 focus:ring-[#A32E3A]/20'
                : 'border-gray-200 focus:border-[#D1A65E] focus:ring-2 focus:ring-[#D1A65E]/20'
            }
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${className}
          `}
          style={{ fontFamily: 'Inter, sans-serif' }}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
          }
          {...props}
        >
          {/* Placeholder option */}
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {/* Options */}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Chevron icon */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <p
          id={`${selectId}-error`}
          className="mt-2 text-sm text-[#A32E3A]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {error}
        </p>
      )}

      {/* Helper text */}
      {!error && helperText && (
        <p
          id={`${selectId}-helper`}
          className="mt-2 text-sm text-gray-600"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
