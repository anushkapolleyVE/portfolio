import React from 'react';
import { FadeInUp } from './Motion';
import { SectionDivider, SectionDividerBottom } from './UI';

const steps = [
  {
    number: 'Feb-Mar',
    title: 'Learning & Foundation',
    description: 'Learning courses and self-directed study.'
  },
  {
    number: 'April',
    title: 'Initial Projects',
    description: 'RAG Medical Chatbot, Proposal Generator (in-house).'
  },
  {
    number: 'May',
    title: 'Data & Healthcare',
    description: 'Hyperlocal Business Directory Data Acquisition (Australia), AI Healthcare Platform.'
  },
  {
    number: 'June',
    title: 'Automation & Applications',
    description: 'Intelligent Invoice Approval Automation System, Fieldstone Mortgage, AI Ingredient Analyser.'
  },
  {
    number: 'July',
    title: 'Agents & Tracking',
    description: 'AI Email Automation Agent, Amazon Price Tracker Pro.'
  },
  {
    number: 'August',
    title: 'Sales & Communications',
    description: 'PreSales AI Agent (in-house), PropoAI, AI gramX.'
  }
];

export const Process = () => {
  return (
    <section id="workflow" className="relative bg-bg">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <FadeInUp className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Internship Workflow</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            A timeline of my progress and contributions from February 2024 to August 2024.
          </p>
        </FadeInUp>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <FadeInUp key={step.number} delay={0.1 * index} className="relative flex flex-col md:flex-row gap-8 md:gap-12 mb-16 last:mb-0 group">
              {/* Connecting line for desktop */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute left-[4.5rem] top-24 bottom-[-4rem] w-px bg-border group-hover:bg-accent/30 transition-colors"></div>
              )}
              
              <div className="flex-shrink-0 flex items-center md:items-start md:flex-col gap-4">
                <div className="w-24 h-24 rounded-2xl bg-surface border border-border flex items-center justify-center text-sm text-center px-2 font-bold text-accent/70 group-hover:text-accent group-hover:border-accent/50 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10">
                  {step.number}
                </div>
                <div className="md:hidden h-px flex-grow bg-border"></div>
              </div>
              
              <div className="pt-2">
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed">{step.description}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};
