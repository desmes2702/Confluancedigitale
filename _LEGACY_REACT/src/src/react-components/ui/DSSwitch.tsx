// src/react-components/ui/DSSwitch.tsx
import React, { useState } from 'react';

interface DSSwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
  id?: string;
}

export function DSSwitch({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  className = '',
  id,
}: DSSwitchProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

  const handleToggle = () => {
    if (disabled) return;

    const newValue = !isChecked;

    if (!isControlled) {
      setInternalChecked(newValue);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Switch */}
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-labelledby={label ? `${switchId}-label` : undefined}
        disabled={disabled}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-[#D1A65E] focus:ring-offset-2
          ${isChecked ? 'bg-[#10B981]' : 'bg-gray-300'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white
            transition-transform duration-300
            ${isChecked ? 'translate-x-6' : 'translate-x-1'}
          `}
          style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
        />
      </button>

      {/* Label */}
      {label && (
        <label
          id={`${switchId}-label`}
          onClick={disabled ? undefined : handleToggle}
          className={`
            text-[#1A1A1A] select-none
            ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
          `}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {label}
        </label>
      )}
    </div>
  );
}
