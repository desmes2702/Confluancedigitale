import React from 'react';
import { DSLabel } from './DSLabel';

interface DSInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const DSInput: React.FC<DSInputProps> = ({ label, error, className = '', id, ...props }) => {
    const inputId = id || props.name;

    return (
        <div className="w-full">
            {label && <DSLabel htmlFor={inputId}>{label}</DSLabel>}
            <input
                id={inputId}
                className={`
          w-full px-4 py-2 rounded-md border border-gray-300 bg-[#f3f3f5]
          focus:outline-none focus:ring-2 focus:ring-[#D1A65E] focus:border-transparent focus:shadow-premium
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
};
