import React from 'react';

interface DSSectionHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    align?: 'left' | 'center' | 'right';
    accent?: boolean;
    className?: string;
}

export const DSSectionHeader: React.FC<DSSectionHeaderProps> = ({
    title,
    subtitle,
    description,
    align = 'center',
    accent = true,
    className = '',
}) => {
    const alignClasses = {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto',
    };

    return (
        <div className={`max-w-3xl ${alignClasses[align]} ${className}`}>
            {subtitle && (
                <span className={`block text-[#D1A65E] font-semibold tracking-wide uppercase mb-2 ${accent ? 'text-sm' : 'text-base'}`}>
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-normal text-[#1A1A1A] mb-6 leading-tight">
                {title}
            </h2>
            {description && (
                <p className="text-lg text-gray-600 leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
};
