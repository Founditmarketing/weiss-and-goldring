import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyle = "px-8 py-3 uppercase tracking-widest text-xs font-sans font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-navy-900 text-white hover:bg-gold-500 border border-navy-900 hover:border-gold-500",
    outline: "bg-transparent text-navy-900 border border-navy-900 hover:bg-navy-900 hover:text-white",
    text: "bg-transparent text-navy-900 hover:text-gold-500 underline-offset-4 hover:underline"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};