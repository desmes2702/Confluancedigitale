import React from 'react';

interface DSCardProps {
    variant?: 'default' | 'bordered' | 'elevated';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hover?: boolean;
    className?: string;
    children: React.ReactNode;
}

export const DSCard: React.FC<DSCardProps> = ({
    variant = 'default',
    padding = 'md',
    hover = false,
    className = '',
    children,
}) => {
    const baseStyles = 'bg-white rounded-xl transition-all duration-300';

    const variants = {
        default: '',
        bordered: 'border border-gray-200',
        elevated: 'shadow-elevated',
    };

    const paddings = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    const hoverStyles = hover ? 'hover:shadow-hover hover:scale-[1.02] cursor-pointer' : '';

    return (
        <div className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${className}`}>
            {children}
        </div>
    );
};
