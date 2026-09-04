import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, FloatingElement } from './Motion';
import { Button } from './UI';
import { ArrowRight, Mail, User, Briefcase, Hash } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0} className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <FloatingElement delay={2} className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <FadeInUp delay={0.1}>
            <div className="inline-block px-3 py-1 rounded-full bg-surface-raised border border-border text-sm text-accent font-medium mb-4">
              Internship Journey (Feb '24 - Aug '24)
            </div>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                Anushka Polley.
              </span>
            </h1>
          </FadeInUp>
          
          <FadeInUp delay={0.3}>
            <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
              Welcome to my digital portfolio showcasing my internship journey. 
              Here you'll find the skills I've acquired, projects and POCs I've developed, 
              and my complete workflow over the past several months.
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.4} className="flex flex-wrap gap-4">
            <Button variant="primary">
              View Work <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="secondary">
              <Github className="mr-2 w-4 h-4" /> GitHub
            </Button>
          </FadeInUp>
        </div>
        
        <FadeInUp delay={0.5} className="hidden lg:block relative perspective-1000">
           <FloatingElement delay={1}>
             <div className="relative w-full aspect-square max-w-md mx-auto cursor-pointer" onClick={() => setIsFlipped(!isFlipped)} style={{ perspective: '1000px' }}>
               <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl transform rotate-6 border border-border/50"></div>
               
               <motion.div 
                 className="absolute inset-0 w-full h-full"
                 initial={false}
                 animate={{ rotateY: isFlipped ? 180 : 0 }}
                 transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                 style={{ transformStyle: 'preserve-3d' }}
               >
                  {/* Front Side: Picture */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-surface rounded-3xl border border-border overflow-hidden shadow-2xl flex items-center justify-center"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent z-10 flex flex-col justify-end p-8 text-center">
                       <p className="text-white font-medium mb-1 drop-shadow-md">Click to reveal ID</p>
                    </div>
                    {/* Placeholder picture. Replace the src with your actual image path like '/profile.jpg' */}
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600&h=600" 
                      alt="Anushka Polley" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Back Side: ID Details */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-surface-raised rounded-3xl border border-accent/50 shadow-2xl flex flex-col p-8 items-center text-center"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-4 border border-accent/30 text-accent">
                      <User className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-1">Anushka Polley</h3>
                    
                    <div className="w-full h-px bg-border my-6"></div>
                    
                    <div className="flex flex-col gap-4 w-full text-left">
                      <div className="flex items-center gap-3 text-text-secondary">
                        <Briefcase className="w-5 h-5 text-accent" />
                        <span>Intern</span>
                      </div>
                      <div className="flex items-center gap-3 text-text-secondary">
                        <Hash className="w-5 h-5 text-accent" />
                        <span>ID: EMP-2024-INT</span>
                      </div>
                      <div className="flex items-center gap-3 text-text-secondary">
                        <Mail className="w-5 h-5 text-accent" />
                        <span>hello@example.com</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mt-auto w-full justify-center pt-4">
                      <a href="#" className="p-3 bg-bg rounded-xl border border-border hover:border-accent hover:text-accent transition-colors text-text-secondary">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="p-3 bg-bg rounded-xl border border-border hover:border-accent hover:text-accent transition-colors text-text-secondary">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
               </motion.div>
             </div>
           </FloatingElement>
        </FadeInUp>
      </div>
    </section>
  );
};
