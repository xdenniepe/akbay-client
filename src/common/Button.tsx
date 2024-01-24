import type React from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'white';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  form?: string,
}

const Button: React.FC<IProps> = ({ children, onClick, variant = 'primary', className, disabled = false, type = 'submit', form }) => {
  const primaryClass = 'bg-[#2C9B54] hover:bg-custom-green-900 border-transparent disabled:bg-primary text-white';
  const secondaryClass = 'bg-white hover:bg-gray-100 border-gray-300 disabled:bg-white';
  const dangerClass = 'bg-custom-red-500 hover:bg-custom-red-600 border-transparent disabled:bg-custom-red-500 text-white';
  const whiteClass = 'bg-white text-[#747474]';

  return (
    <button
      type={type}
      form={form}
      onClick={onClick}
      className={twMerge(
        variant === 'primary' ? primaryClass : '',
        variant === 'secondary' ? secondaryClass : '',
        variant === 'danger' ? dangerClass : '',
        variant === 'white' ? whiteClass : '',
        'border rounded-lg shadow-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
        className ?? '', 
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
