import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-opacity-90 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:-translate-y-1",
    secondary: "bg-surface-raised text-text-primary border border-border hover:border-accent/50 hover:bg-accent-soft hover:-translate-y-1",
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const SectionDivider = ({ className }) => (
  <div className={cn("w-full overflow-hidden leading-none", className)}>
    <svg 
      className="relative block w-full h-[50px] md:h-[100px]" 
      data-name="Layer 1" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none"
    >
      <path 
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        className="fill-surface"
      ></path>
    </svg>
  </div>
);

export const SectionDividerBottom = ({ className }) => (
  <div className={cn("w-full overflow-hidden leading-none rotate-180", className)}>
    <svg 
      className="relative block w-full h-[50px] md:h-[100px]" 
      data-name="Layer 1" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none"
    >
      <path 
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        className="fill-surface"
      ></path>
    </svg>
  </div>
);
