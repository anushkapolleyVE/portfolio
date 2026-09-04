import React from 'react';
import { FadeInUp, LiftCard } from './Motion';
import { SectionDivider } from './UI';
import { BookOpen, Target, Brain } from 'lucide-react';
import { Github } from './BrandIcons';

const learnings = [
  {
    title: 'LLM Engineering',
    icon: <BookOpen className="w-6 h-6" />,
    description: 'Comprehensive course focusing on Large Language Model engineering and practical implementations.',
    link: { url: '#', label: 'Course Repository' } // Placeholder link
  },
  {
    title: 'Self-Taught AI & ML',
    icon: <Brain className="w-6 h-6" />,
    description: 'Self-directed learning via free online resources covering: Machine Learning, Deep Learning, NLP, Transformers, LLM, GenAI, LangChain, LangGraph, FastAPI, Vector Databases, and Pinecone.',
  }
];

export const Learning = () => {
  return (
    <section id="learning" className="relative bg-surface pb-24">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Learning & Development</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Continuous education and self-improvement across AI engineering and web development.
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {learnings.map((learning, index) => (
            <FadeInUp key={learning.title} delay={0.1 * index}>
              <LiftCard className="p-8 h-full bg-surface-raised border-border/50 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-bg border border-border flex items-center justify-center text-text-secondary mb-6 group-hover:text-accent group-hover:border-accent/30 transition-colors">
                  {learning.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-text-primary">{learning.title}</h3>
                <p className="text-text-secondary mb-6 flex-grow">{learning.description}</p>
                
                {learning.link && (
                  <a 
                    href={learning.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white bg-bg border border-border hover:border-accent px-4 py-2 rounded-lg transition-all mt-auto"
                  >
                    <Github className="w-4 h-4" /> {learning.link.label}
                  </a>
                )}
              </LiftCard>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};
