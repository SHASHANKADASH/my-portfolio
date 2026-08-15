import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost';
};

export function Button({ variant = 'default', className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md';
  const variants: Record<string, string> = {
    default: 'bg-cp-accent text-black',
    ghost: 'bg-transparent border border-cp-accent text-cp-accent'
  };

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export default Button;
