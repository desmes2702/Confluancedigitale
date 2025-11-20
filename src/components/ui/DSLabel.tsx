import React from 'react';

interface DSLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
}

export const DSLabel: React.FC<DSLabelProps> = ({ children, className = '', ...props }) => {
    return (
        <label className={`block text-sm font-medium text-gray-700 mb-1 ${className}`} {...props}>
            {children}
        </label>
    );
};
