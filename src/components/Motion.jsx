import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const FadeInUp = ({ children, delay = 0, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1] // Custom soft spring-like ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FloatingElement = ({ children, delay = 0, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const LiftCard = ({ children, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      className={`bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5),0_0_20px_0_var(--accent-soft)] transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};
