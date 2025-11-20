import React from 'react';
import { DSLabel } from './DSLabel';

interface Option {
    value: string;
    label: string;
}

interface DSSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: Option[];
}

export const DSSelect: React.FC<DSSelectProps> = ({ label, error, options, className = '', id, ...props }) => {
    const inputId = id || props.name;

    return (
        <div className="w-full">
            {label && <DSLabel htmlFor={inputId}>{label}</DSLabel>}
            <div className="relative">
                <select
                    id={inputId}
                    className={`
            w-full px-4 py-2 rounded-md border border-gray-300 bg-[#f3f3f5] appearance-none
            focus:outline-none focus:ring-2 focus:ring-[#D1A65E] focus:border-transparent focus:shadow-premium
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
            ${className}
          `}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
};
