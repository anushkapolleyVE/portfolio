import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Skills', 'Learning', 'Workflow', 'Work', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tight text-text-primary">
          Anushka<span className="text-accent">.</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-text-secondary hover:text-accent transition-colors text-sm font-medium"
            >
              {link}
            </a>
          ))}
        </div>
        
        <div className="md:hidden">
          {/* Simple mobile menu button placeholder */}
          <button className="text-text-secondary hover:text-accent">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
