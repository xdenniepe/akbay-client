import type { InputHTMLAttributes } from 'react';
import React from 'react';
import type { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: FieldError;
  noError?: boolean;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, IProps> = ({ className, error, noError, ...rest }, ref,) => (
  <>
    <div className="shadow-none">
      <input
        type="text"
        className={twMerge(
          className ?? '',
          error ? 'border-red-700 bg-red-100' : 'border border-[#747474]/20 rounded-md',
          'focus:ring-[#2C9B54] focus:border-[#2C9B54] w-full text-sm p-2',
          'disabled:bg-[#747474] placeholder-[#747474]',
        )}
        {...rest}
        ref={ref}
      />
    </div>
    {(error && !noError) && (
      <p className="text-red-700 text-xs pl-1 py-2">{error.message}</p>
    )}
  </>
);

const FormInput = React.forwardRef(Input);

export default FormInput;
