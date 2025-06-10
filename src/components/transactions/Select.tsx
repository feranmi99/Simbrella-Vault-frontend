"use client";

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import clsx from 'clsx';

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
    value,
    onChange,
    options,
    className,
    size = 'md',
    disabled = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find(option => option.value === value) || options[0];

    const handleSelect = (option: SelectOption) => {
        onChange(option.value);
        setIsOpen(false);
    };

    const sizeClasses = {
        sm: 'py-1 text-sm',
        md: 'py-2 text-base',
        lg: 'py-3 text-lg',
    };

    return (
        <div className={clsx('relative', className)}>
            <button
                type="button"
                className={clsx(
                    'w-full flex items-center justify-between px-4 border border-gray-300 rounded-md bg-white',
                    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
                    sizeClasses[size],
                    disabled ? 'bg-gray-100 cursor-not-allowed opacity-75' : 'hover:border-gray-400'
                )}
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
            >
                <span className="truncate">{selectedOption?.label}</span>
                <Icon
                    icon={isOpen ? "heroicons:chevron-up" : "heroicons:chevron-down"}
                    className="ml-2 h-4 w-4 text-gray-500"
                />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute z-50 mt-1 w-full rounded-md bg-white shadow-lg border border-gray-200">
                        <ul className="max-h-60 overflow-auto py-1">
                            {options.map((option) => (
                                <li
                                    key={option.value}
                                    className={clsx(
                                        'px-4 py-2 text-sm cursor-pointer hover:bg-blue-50',
                                        option.value === value ? 'bg-blue-100 text-blue-800' : 'text-gray-800'
                                    )}
                                    onClick={() => handleSelect(option)}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};