import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp } from './Motion';
import { Database, FileText, Camera, CheckCircle, Mail, Home, MessageCircle, Rocket } from 'lucide-react';

const journeyData = [
  {
    month: 'Feb-Mar',
    project: 'Learning Phase',
    skills: ['Learning courses and self-study'],
    icon: <Database className="w-14 h-14 md:w-20 md:h-20 text-accent drop-shadow-[0_0_15px_var(--accent-soft)]" />
  },
  {
    month: 'April',
    project: 'Initial Projects',
    skills: ['Rag Medical Chatbot', 'Proposal Generator (in-house)'],
    icon: <FileText className="w-14 h-14 md:w-20 md:h-20 text-accent drop-shadow-[0_0_15px_var(--accent-soft)]" />
  },
  {
    month: 'May',
    project: 'Data & Healthcare',
    skills: ['Hyperlocal Business Directory Data Acquisition (Australia)', 'AI Healthcare Platform'],
    icon: <Camera className="w-14 h-14 md:w-20 md:h-20 text-accent drop-shadow-[0_0_15px_var(--accent-soft)]" />
  },
  {
    month: 'June',
    project: 'Automation Apps',
    skills: ['Intelligent Invoice Approval Automation System', 'Fieldstone', 'Ingredient Analyser'],
    icon: <CheckCircle className="w-14 h-14 md:w-20 md:h-20 text-accent drop-shadow-[0_0_15px_var(--accent-soft)]" />
  },
  {
    month: 'July',
    project: 'Agents & Tracking',
    skills: ['AI Email Automation Agent', 'Amazon Price Tracker'],
    icon: <Home className="w-14 h-14 md:w-20 md:h-20 text-accent drop-shadow-[0_0_15px_var(--accent-soft)]" />
  },
  {
    month: 'August',
    project: 'Sales & Comms',
    skills: ['Pre Sales (in-house)', 'Propo AI', 'AI gramX'],
    icon: <MessageCircle className="w-14 h-14 md:w-20 md:h-20 text-accent drop-shadow-[0_0_15px_var(--accent-soft)]" />
  }
];

export const InternshipWorkflow = () => {
  return (
    <section id="internshipworkflow" className="relative bg-bg py-20 md:py-32 overflow-hidden font-sans text-text-primary border-t border-border/50">
      
      {/* Central Glowing Beam */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 w-24 md:w-48 h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent blur-3xl pointer-events-none"></div>



      {/* Tiny decorative rockets in background */}
      <Rocket className="absolute top-40 left-10 w-8 h-8 text-accent opacity-20 transform rotate-45" />
      <Rocket className="absolute top-1/3 right-20 w-6 h-6 text-accent opacity-20 transform -rotate-12" />
      <Rocket className="absolute bottom-1/4 left-20 w-10 h-10 text-accent opacity-20 transform rotate-90" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 mt-20 md:mt-32">
        
        <div className="flex justify-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-accent text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-xl md:text-2xl tracking-widest uppercase shadow-[0_10px_30px_var(--accent-soft)] z-30 relative"
          >
            Your Journey Starts Here
          </motion.div>
        </div>

        <div className="relative">
          {/* Desktop SVG Curved Dashed Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[500px] h-full pointer-events-none hidden md:block">
             <svg className="w-full h-full" viewBox="0 0 500 1200" preserveAspectRatio="none">
                <motion.path 
                  d="M 250 0 Q 50 100 250 200 Q 450 300 250 400 Q 50 500 250 600 Q 450 700 250 800 Q 50 900 250 1000 Q 450 1100 250 1200" 
                  fill="none" 
                  stroke="var(--border)" 
                  strokeWidth="3" 
                  strokeDasharray="10 10"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "100px" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
                {/* Dots on the path */}
                {[100, 300, 500, 700, 900, 1100].map((y, i) => (
                  <circle key={i} cx={i % 2 === 0 ? 150 : 350} cy={y} r="8" fill="var(--bg)" stroke="var(--accent)" strokeWidth="3" />
                ))}
             </svg>
          </div>

          {/* Mobile Straight Dashed Line */}
          <div className="md:hidden absolute left-8 w-[2px] h-full border-l-2 border-dashed border-border top-0"></div>

          {/* The Journey Items */}
          <div className="flex flex-col relative z-10">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center md:h-[200px] py-12 md:py-0 pl-24 md:pl-0">
                  
                  {/* Content Block */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-32' : 'md:order-2 md:justify-start md:pl-32'}`}>
                    <FadeInUp delay={0.1}>
                      <div className="flex flex-col items-start md:items-center text-left md:text-center w-full max-w-[320px]">
                        <div className="mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-accent font-bold text-xl md:text-3xl mb-1 tracking-wider uppercase">
                          {item.month}
                        </h3>
                        <h4 className="text-text-primary font-bold text-lg md:text-xl mb-4 leading-tight">
                          {item.project}
                        </h4>
                        
                        {/* Bulleted Skills List */}
                        <div className="inline-block text-left w-full md:w-auto">
                          <ul className="text-text-secondary text-sm md:text-base font-medium space-y-2">
                            {item.skills.map((skill, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2"></span>
                                <span className="leading-snug">{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </FadeInUp>
                  </div>

                  {/* Empty block for desktop layout */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'md:order-2' : ''}`}></div>
                  
                  {/* Mobile Dot */}
                  <div className="md:hidden absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-bg rounded-full border-4 border-accent shadow-[0_0_10px_var(--accent-soft)] top-1/2 -translate-y-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Big Rocket and Start Label at the bottom */}
        <div className="relative mt-20 md:mt-32 flex flex-col items-center justify-center pb-12">
          
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="z-20 relative"
          >
            {/* The Rocket Container */}
            <div className="bg-surface p-6 rounded-full shadow-[0_0_40px_var(--accent-soft)] flex items-center justify-center relative z-10 border border-border">
              <Rocket className="w-16 h-16 md:w-24 md:h-24 text-accent transform -rotate-45" />
              {/* Inner circle logo like the image */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-8 h-8 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center opacity-10"></div>
              </div>
            </div>
            {/* Rocket thrust beam */}
            <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-16 h-48 bg-gradient-to-t from-transparent via-accent/40 to-accent blur-2xl opacity-50 z-0 rounded-full"></div>
          </motion.div>


        </div>

      </div>
    </section>
  );
};
