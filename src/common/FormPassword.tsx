import type { InputHTMLAttributes } from 'react';
import React, { useState, useEffect } from 'react';
import type { FieldError } from 'react-hook-form';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { twMerge } from 'tailwind-merge';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: FieldError;
  validation?: boolean;
}

const Password: React.ForwardRefRenderFunction<
  HTMLInputElement,
  IProps
> = ({ className, error, validation, ...rest }, ref) => {
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validations, setValidations] = useState<{[key: number]: boolean}>({ 1: false });

  // const isEdge = detectBrowser('edge') || detectBrowser('edge-chromium');
  
  useEffect(() => {
    setValidations((previous) => ({
      ...previous,
      1: value.length >= 8, // minimum of 8 characters
      2: /[A-Z]/.test(value), // 1 upper-case
      3: /[a-z]/.test(value), // 1 lower-case
      4: /\d/.test(value), // numerical number
      5: /^.*[!"#$%&'()*+,./:;<=>?@[\\\]^_{|}\-].*$/.test(value) // 1 special character
    }));
  }, [value]);

  const renderValidationChecker = () => {
    if (value.length === 0) return null;

    const validationsObject = [
      { id: 1, label: 'Minimum of 8 characters' },
      { id: 2, label: 'At least 1 upper-case character (A-Z)' },
      { id: 3, label: 'At least 1 lower-case character (a-z)' },
      { id: 4, label: 'At least 1 numeric character (0-9)' },
      { id: 5, label: 'At least 1 special character' }
    ];

    return (
      <div className="flex flex-grow flex-col mt-3">
        <p className="text-sm font-medium text-gray-700">
          Your password must have:
        </p>
        <div className="mt-2">
          {validationsObject.map((validation, index) => (
            <span key={index} className="flex items-center text-sm text-gray-500 mt-2.5">
              <CheckCircleIcon className={twMerge(
                validations[validation.id] ? 'text-primary' : 'text-gray-400',
                'h-5 w-5 mr-2.5'
              )} />
              {validation.label}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          className={twMerge(
            error ? 'border-red-700 bg-red-100' : 'border border-[#747474]/20 rounded-md',
            'shadow-sm focus:ring-primary focus:border-primary block w-full text-sm p-2',
            'disabled:bg-custom-gray-100',
            ` ${className}`
          )}
          {...rest}
          onChange={(event) => {
            if (validation) setValue(event.target.value);
            if (rest.onChange) rest.onChange(event);
          }}
          ref={ref}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {showPassword ? (
            <EyeIcon
              onClick={() => { setShowPassword(!showPassword); }}
              className="h-5 w-5 text-gray-400 cursor-pointer"
              aria-hidden="true"
            />
          ) : (
            <EyeSlashIcon
              onClick={() => { setShowPassword(!showPassword); }}
              className="h-5 w-5 text-gray-400 cursor-pointer"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
      {error && (
        <p className="text-red-700 text-xs pl-1 py-2">{error.message}</p>
      )}
      {validation && renderValidationChecker()}
    </>
  );
};

const FormPassword = React.forwardRef(Password);

export default FormPassword;
