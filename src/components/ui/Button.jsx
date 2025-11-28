import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  icon: Icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white hover:shadow-lg hover:shadow-blue-900/50 hover:scale-105",
    outline: "border border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm",
    ghost: "text-white/80 hover:text-white hover:bg-white/5",
    accent: "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-orange)] text-black hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};
