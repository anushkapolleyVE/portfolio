import React from 'react';
import { FadeInUp, LiftCard } from './Motion';
import { SectionDivider } from './UI';
import { Mail } from 'lucide-react';
import { Github, Linkedin, Twitter } from './BrandIcons';

export const Contact = () => {
  return (
    <section id="contact" className="relative bg-bg pt-24 pb-12 overflow-hidden">
      <SectionDivider className="absolute top-0 transform -translate-y-full text-surface rotate-180" />
      
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <FadeInUp>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's build something.</h2>
          <p className="text-text-secondary text-xl mb-12 max-w-2xl mx-auto">
            Currently available for freelance opportunities or full-time roles.
            If you have a project that needs a polished frontend, I'd love to hear about it.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.2} className="flex flex-col sm:flex-row justify-center gap-6 mb-24">
          <a href="mailto:hello@example.com" className="inline-block">
             <LiftCard className="px-8 py-6 flex items-center justify-center gap-3 bg-surface-raised border-accent/20 group">
                <Mail className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                <span className="font-medium text-lg">hello@example.com</span>
             </LiftCard>
          </a>
        </FadeInUp>

        <FadeInUp delay={0.3} className="flex justify-center gap-6 mb-12">
          {[
            { icon: <Github />, label: 'GitHub', href: '#' },
            { icon: <Linkedin />, label: 'LinkedIn', href: '#' }
          ].map((social) => (
            <a 
              key={social.label} 
              href={social.href}
              aria-label={social.label}
              className="w-12 h-12 rounded-full bg-surface-raised border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-300"
            >
              {React.cloneElement(social.icon, { className: 'w-5 h-5' })}
            </a>
          ))}
        </FadeInUp>
        
        <FadeInUp delay={0.4} className="text-sm text-text-muted">
          <p>© {new Date().getFullYear()} Antigravity Portfolio. Designed and built with React & Framer Motion.</p>
        </FadeInUp>
      </div>
    </section>
  );
};
