import React from 'react';
import { FadeInUp, LiftCard } from './Motion';
import { ExternalLink, FileText } from 'lucide-react';
import { Github } from './BrandIcons';
import { SectionDividerBottom } from './UI';

const items = [
  {
    id: 1,
    title: 'Rag Medical Chatbot',
    description: 'An AI-powered medical encyclopedia chatbot. It answers general medical queries based on its knowledgebase, while strictly advising users to see a doctor instead of prescribing medicine.',
    tech: ['HTML/CSS', 'LangChain', 'OpenAI LLM', 'FastAPI', 'Pinecone', 'PostgreSQL', 'Render', 'Vercel'],
    links: {
      website: 'https://medical-chatbot-zhk6.onrender.com',
      github: 'https://github.com/anushkapolley/Medical-chatbot',
      poc: null
    }
  },
  {
    id: 2,
    title: 'Proposal Generator',
    description: 'Generates detailed project proposals with workflow diagrams based on user-provided project name, description, budget, timeline, and resources. Proposals can be downloaded and edited as DOCX.',
    tech: ['React', 'OpenAI', 'FastAPI', 'PostgreSQL', 'Vercel', 'Render'],
    links: {
      website: 'https://proposal-generator-six-virid.vercel.app/',
      github: 'https://github.com/MonojitVE/Proposal_generator-.git',
      poc: null
    }
  },
  {
    id: 4,
    title: 'Hyperlocal Business Directory Data Acquisition',
    description: 'Data acquisition proof of concept for a hyperlocal business directory in Australia. (Pending full document details)',
    tech: ['Data Acquisition', 'Python', 'Automation'],
    links: {
      website: null,
      github: null,
      poc: '#hyperlocal-directory-poc'
    }
  },
  {
    id: 9,
    title: 'AI Healthcare Platform',
    description: 'An AI-powered digital healthcare ecosystem integrating symptom checking, medical report summarization, and a RAG-based medical chatbot with doctor appointment booking.',
    tech: ['React', 'FastAPI', 'Llama-3.3', 'Pinecone', 'SQLAlchemy'],
    links: {
      website: 'https://ai-healthcare-portal-odyb.vercel.app/',
      github: null,
      poc: '#ai-healthcare-poc'
    }
  },
  {
    id: 3,
    title: 'Intelligent Invoice Approval Automation',
    description: 'An end-to-end invoice automation system with an 8-state lifecycle, duplicate detection, and a 9-stage AI pipeline. Features role-based dashboards (RBAC) and confidence-tier automation to reduce hallucination risk.',
    tech: ['React', 'Tailwind', 'Python', 'FastAPI', 'PostgreSQL', 'LLM API', 'OAuth2', 'Docker'],
    links: {
      website: 'https://intelli-invoice-ve.vercel.app/',
      github: null,
      poc: '#intelligent-invoice-poc'
    }
  },
  {
    id: 6,
    title: 'Fieldstone Mortgage',
    description: 'A modern, responsive landing page designed and developed for a mortgage firm website.',
    tech: ['React', 'Vercel'],
    links: {
      website: 'https://fieldstone-mortgage.vercel.app/',
      github: 'https://github.com/anushkapolleyVE/mortgage-firm.git',
      poc: null
    }
  },
  {
    id: 5,
    title: 'AI Ingredient Analyser',
    description: 'A pantry app capability that captures food photos, runs AI vision recognition (GPT-4o) to detect ingredients, and merges them into a persistent pantry. Can also generate recipes from available ingredients.',
    tech: ['React', 'Vite', 'FastAPI', 'GPT-4o Vision', 'Python'],
    links: {
      website: 'https://ingrient-analyser1-1.onrender.com',
      github: 'https://github.com/AfzalVE/Ingrient-Analyser1.git',
      poc: '#ai-ingredient-poc'
    }
  },
  {
    id: 7,
    title: 'AI Email Automation Agent',
    description: 'A specialised AI agent that reads incoming Microsoft 365 emails, classifies them, applies deterministic business policies, and routes or auto-replies. Includes productivity analytics and a natural-language management interface.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'OpenAI GPT-4', 'Microsoft Graph', 'APScheduler'],
    links: {
      website: 'https://ai-email-automation-pi.vercel.app/',
      github: 'https://github.com/anushkapolleyVE/AI-email-automation.git',
      poc: '#email-automation-poc'
    }
  },
  {
    id: 11,
    title: 'Amazon Price Tracker Pro',
    description: 'A personal shopping assistant Chrome extension that monitors Amazon products in the background and sends desktop notifications with one-click buy links when prices drop to a target.',
    tech: ['Chrome Extension', 'FastAPI', 'PostgreSQL', 'Python'],
    links: {
      website: 'https://ai-email-automation-1-iuyf.onrender.com',
      github: null,
      poc: '#amazon-tracker-poc'
    }
  },
  {
    id: 8,
    title: 'PreSales AI Agent',
    description: 'An AI-powered platform automating software pre-sales and proposal generation. Analyzes requirements to identify skills, effort, cost, and timelines, automatically generating professional proposals and POC documents.',
    tech: ['React', 'OpenAI', 'FastAPI', 'PostgreSQL', 'Vercel', 'Render'],
    links: {
      website: null,
      github: null,
      poc: null
    }
  },
  {
    id: 10,
    title: 'PropoAI - Real Estate Lead Qualification',
    description: 'An AI conversational agent that automates early real estate lead qualification, scoring, and appointment scheduling, syncing data to CRM and auto-assigning to sales reps.',
    tech: ['Next.js', 'FastAPI', 'OpenAI', 'PostgreSQL', 'n8n'],
    links: {
      website: 'https://real-estate-lead-qualification.vercel.app/',
      github: null,
      poc: '#propoai-poc'
    }
  },
  {
    id: 12,
    title: 'AI gramX',
    description: 'A real-time messaging and connection platform inspired by Telegram. Built to handle instant communication and active connections.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Socket.IO', 'MongoDB'],
    links: {
      website: 'https://texts-frontend-swart.vercel.app/login',
      github: null,
      poc: null
    }
  }
];

export const Projects = () => {
  return (
    <section id="work" className="relative bg-surface">
      <SectionDividerBottom className="absolute top-0 transform -translate-y-full text-bg" />
      
      <div className="max-w-6xl mx-auto px-6 py-24">
        <FadeInUp>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects & POCs</h2>
          <p className="text-text-secondary max-w-2xl mb-16 text-lg">
            A collection of deployed projects and proof of concepts explored during my internship.
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => {
            return (
              <FadeInUp key={item.id} delay={0.1 * (index % 2 + 1)} className="h-full">
                <LiftCard className="h-full flex flex-col p-8 bg-surface-raised border-border/50 hover:border-accent/50 transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-bg border border-border flex items-center justify-center text-accent">
                      {item.links.poc && !item.links.website ? (
                        <FileText className="w-6 h-6" />
                      ) : (
                        <ExternalLink className="w-6 h-6" />
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-text-primary">{item.title}</h3>
                  <p className="text-text-secondary mb-6 flex-grow leading-relaxed">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {item.tech.map(t => (
                      <span key={t} className="text-xs font-medium text-text-muted bg-bg px-2 py-1 rounded-md border border-border">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
                    {item.links.website && (
                      <a 
                        href={item.links.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-text-primary bg-bg border border-border hover:border-accent hover:text-accent px-4 py-2 rounded-lg transition-all"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Website
                      </a>
                    )}
                    
                    {item.links.poc && (
                      <a 
                        href={item.links.poc} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-text-primary bg-bg border border-border hover:border-accent hover:text-accent px-4 py-2 rounded-lg transition-all"
                      >
                        <FileText className="w-4 h-4" /> View POC (PDF)
                      </a>
                    )}

                    {item.links.github && (
                      <a 
                        href={item.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-text-primary bg-bg border border-border hover:border-accent hover:text-accent px-4 py-2 rounded-lg transition-all"
                      >
                        <Github className="w-4 h-4" /> GitHub
                      </a>
                    )}
                  </div>
                </LiftCard>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};
