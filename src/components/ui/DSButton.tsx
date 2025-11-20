import React from 'react';

interface DSButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    href?: string;
}

export const DSButton: React.FC<DSButtonProps> = ({
    variant = 'primary',
    size = 'md',
    isLoading = false,
    href,
    children,
    className = '',
    disabled,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D1A65E] disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-[#D1A65E] text-white hover:bg-[#B8934F] active:bg-[#9F7F43]',
        secondary: 'bg-[#F9FAFB] text-[#1A1A1A] hover:bg-[#E5E7EB]',
        outline: 'border-2 border-[#D1A65E] text-[#D1A65E] hover:bg-[#D1A65E] hover:text-white',
        ghost: 'text-[#1A1A1A] hover:bg-[#F9FAFB]',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes}>
                {isLoading ? 'Chargement...' : children}
            </a>
        );
    }

    return (
        <button className={classes} disabled={isLoading || disabled} {...props}>
            {isLoading ? (
                <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    {children}
                </span>
            ) : (
                children
            )}
        </button>
    );
};
