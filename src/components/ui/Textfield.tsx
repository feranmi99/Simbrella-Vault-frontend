'use client';

import clsx from 'classnames';
import { Icon } from '@iconify/react';

export const Textfield = ({
  type = 'text',
  id,
  label,
  error,
  disabled = false,
  required = false,
  prefixIcon,
  surfixIcon,
  width,
  placeholder,
  register,
  className,
  hasError,
  searchField,
  labelPosition,
  showLabel = true,
  defaultValue,
  labelClassName = 'top',
  onChange,
  ...rest
}: TextfieldProps) => {
  const textfieldBaseClass = `block w-full rounded-md border-0 py-2 ring-1 placeholder:text-[#BCBCBC] focus:ring-1 focus:outline-none text-sm leading-6 ${width} disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:ring-gray-300`;

  const textfieldState = error || hasError ? 'ring-red-500' : 'ring-gray-300';

  const newPrefixIcon = searchField ? (
    <Icon icon='mdi:magnify' className='text-gray-400 h-5 w-5' />

  ) : (
    prefixIcon
  );

  const textfieldClasses = clsx(
    textfieldBaseClass,
    textfieldState,
    newPrefixIcon ? 'pl-10' : 'px-5',
    surfixIcon ? 'pr-10' : 'pr-3',
    className
  );

  return (
    <div>
      {showLabel && label && (
        <label
          htmlFor={id}
          className={`block text-gray-700 font-semibold text-sm ${labelPosition === 'left' ? 'md:hidden' : ''
            } ${labelClassName}`}>
          {label} {required && <span className='text-red-500'>*</span>}
        </label>
      )}

      <div className='mt-2 relative rounded-md'>
        {!!newPrefixIcon && (
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            {newPrefixIcon}
          </div>
        )}

        {surfixIcon && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-3'>{surfixIcon}</div>
        )}

        <input
          id={id}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          {...(register ? register(id) : {})}
          {...rest}
          className={textfieldClasses}
          defaultValue={defaultValue}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
      </div>
      <p className='text-red-500 text-xs mt-2'>{error}</p>
    </div>
  );
};

type BaseInputProps = {
  id: string;
  label?: string | React.ReactNode;
  error?: any;
  width?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  hasError?: boolean;
  disabled?: boolean;
  labelClassName?: string;
  showLabel?: boolean;
  [key: string]: any;
};
export type TextfieldProps = BaseInputProps & {
  type?: string;
  prefixIcon?: any;
  surfixIcon?: any;
  width?: string;
  labelPosition?: 'top' | 'left';
};