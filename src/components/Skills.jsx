import React from 'react';
import { FadeInUp, LiftCard } from './Motion';
import { SectionDivider } from './UI';
import { Code2, Layout, Database, Terminal, Brain, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & Web',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['Python, Java, SQL', 'HTML5, CSS3, Bootstrap, React', 'Streamlit, Flask, Fastapi']
  },
  {
    title: 'AI & Vibe Coding',
    icon: <Sparkles className="w-6 h-6" />,
    skills: ['Claude Code, Cursor, Copilot', 'ChatGPT, Antigravity', 'Prompt Engineering', 'LangChain, OpenAI API']
  },
  {
    title: 'Data Science & ML',
    icon: <Brain className="w-6 h-6" />,
    skills: ['NumPy, Pandas, Scikit-learn', 'Matplotlib, Seaborn', 'Power BI, MS Excel']
  },
  {
    title: 'Databases & DevOps',
    icon: <Database className="w-6 h-6" />,
    skills: ['MySQL', 'Pinecone, ChromaDB', 'Render, GitHub']
  },
  {
    title: 'Core Concepts',
    icon: <Terminal className="w-6 h-6" />,
    skills: ['Machine Learning, Deep Learning', 'RAG, Vector Embeddings', 'Semantic Search', 'Data Cleaning, Statistical Analysis', 'Feature Eng., Recommendation Systems']
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="relative bg-bg">
      <SectionDivider className="absolute top-0 transform -translate-y-full text-surface rotate-180" />
      
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <FadeInUp>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Skills</h2>
              <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                A diverse toolkit spanning frontend development, backend architecture, 
                data science, and cutting-edge artificial intelligence engineering.
              </p>
              <div className="hidden lg:block relative w-full aspect-square opacity-20 pointer-events-none">
                 <div className="absolute inset-0 bg-accent rounded-full blur-[100px]"></div>
              </div>
            </FadeInUp>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <FadeInUp key={category.title} delay={0.1 * index}>
                <LiftCard className="p-6 h-full bg-surface-raised border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-bg border border-border flex items-center justify-center text-text-secondary mb-6 group-hover:text-accent group-hover:border-accent/30 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-text-primary">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.skills.map(skill => (
                      <li key={skill} className="text-text-secondary flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 mt-2 flex-shrink-0"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </LiftCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
