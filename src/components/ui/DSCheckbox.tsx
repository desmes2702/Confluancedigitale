import React from 'react';

interface DSCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const DSCheckbox: React.FC<DSCheckboxProps> = ({ label, error, className = '', id, ...props }) => {
    const inputId = id || props.name;

    return (
        <div className="flex flex-col">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input
                        id={inputId}
                        type="checkbox"
                        className={`
              w-4 h-4 text-[#D1A65E] border-gray-300 rounded 
              focus:ring-[#D1A65E] focus:ring-offset-0
              disabled:opacity-50 disabled:cursor-not-allowed
              ${className}
            `}
                        {...props}
                    />
                </div>
                <div className="ml-3 text-sm">
                    <label htmlFor={inputId} className="font-medium text-gray-700 select-none">
                        {label}
                    </label>
                </div>
            </div>
            {error && <p className="mt-1 text-sm text-red-500 ml-7">{error}</p>}
        </div>
    );
};
