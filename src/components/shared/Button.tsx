// components/shared/Button.tsx
import { Loader2 } from 'lucide-react';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'outline' | 'danger';
    loading?: boolean;
    disabled?: boolean;
    className?: string;
}

export default function Button({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    loading = false,
    disabled = false,
    className = '',
}: ButtonProps) {
    const baseClasses = 'rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center';

    const variantClasses = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
        danger: 'bg-red-600 text-white hover:bg-red-700',
    };

    const sizeClasses = 'px-4 py-2 text-sm';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses} ${className}`}
        >
            {loading && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
            {children}
        </button>
    );
}