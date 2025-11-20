import React from 'react';

interface DSPanelProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'muted';
}

export const DSPanel: React.FC<DSPanelProps> = ({
    children,
    className = '',
    variant = 'default',
}) => {
    const variants = {
        default: 'bg-white border border-gray-100',
        muted: 'bg-[#F9FAFB] border border-gray-200',
    };

    return (
        <div className={`rounded-xl p-6 ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
};
