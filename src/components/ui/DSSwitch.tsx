import React from 'react';

interface DSSwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
}

export const DSSwitch: React.FC<DSSwitchProps> = ({ label, checked, onCheckedChange, className = '', id, disabled, ...props }) => {
    const inputId = id || props.name;

    return (
        <div className={`flex items-center ${className}`}>
            <button
                type="button"
                role="switch"
                aria-checked={checked}
                id={inputId}
                disabled={disabled}
                onClick={() => !disabled && onCheckedChange(!checked)}
                className={`
          relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
          transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#D1A65E] focus:ring-offset-2
          ${checked ? 'bg-[#D1A65E]' : 'bg-gray-200'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
                {...props}
            >
                <span
                    aria-hidden="true"
                    className={`
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 
            transition duration-200 ease-in-out
            ${checked ? 'translate-x-5' : 'translate-x-0'}
          `}
                />
            </button>
            {label && (
                <label htmlFor={inputId} className="ml-3 text-sm font-medium text-gray-700 cursor-pointer" onClick={() => !disabled && onCheckedChange(!checked)}>
                    {label}
                </label>
            )}
        </div>
    );
};
