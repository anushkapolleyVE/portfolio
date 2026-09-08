import React from 'react';
import { FadeInUp, LiftCard } from './Motion';
import { ExternalLink, FileText } from 'lucide-react';
import { Github } from './BrandIcons';
import { SectionDividerBottom } from './UI';

const items = [
  {
    id: 1,
    title: 'Rag Medical Chatbot',
    description: 'A Retrieval-Augmented Generation (RAG) powered conversational assistant built with Flask that answers medical questions accurately by grounding its responses in verified medical literature.',
    tech: ['Python', 'Flask', 'LangChain', 'OpenAI GPT-4o-mini', 'Pinecone', 'PyPDF', 'Sentence-Transformers', 'HTML/CSS'],
    links: {
      website: 'https://medical-chatbot-zhk6.onrender.com',
      github: 'https://github.com/anushkapolley/Medical-chatbot',
      poc: null
    }
  },
  {
    id: 2,
    title: 'Proposal Generator',
    description: 'Generates structured project proposals via a sequential-context LLM pipeline to minimize hallucination. Features client-side document parsing, Mermaid.js diagram generation, and fully in-browser PDF rendering without backend dependencies.',
    tech: ['React', 'Vite', 'FastAPI', 'Pydantic', 'OpenAI API', 'jsPDF', 'Mermaid.js'],
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
      poc: '/poc/hyperlocal_poc.pdf'
    }
  },
  {
    id: 9,
    title: 'AI Healthcare Platform',
    description: 'A FastAPI-based healthcare backend featuring secure user management and three AI capabilities via Groq API: a RAG medical chatbot (Pinecone & Sentence-Transformers), a symptom checker, and a PDF report summarizer. Includes offline medical knowledge base ingestion.',
    tech: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Groq API', 'Pinecone', 'Sentence-Transformers', 'PyPDF', 'BeautifulSoup'],
    links: {
      website: 'https://ai-healthcare-portal-odyb.vercel.app/',
      github: null,
      poc: '/poc/healthcare_poc.pdf'
    }
  },
  {
    id: 3,
    title: 'Intelligent Invoice Approval Automation',
    description: 'An AI-augmented invoice approval pipeline with an 8-state lifecycle. Features email ingestion, OCR/PDF extraction, Groq API structured extraction, human-in-the-loop validation, deterministic PDF generation, and PKI-based cryptographic digital signatures.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Groq API', 'Pydantic', 'pdfplumber/pytesseract', 'pyHanko'],
    links: {
      website: 'https://intelli-invoice-ve.vercel.app/',
      github: null,
      poc: '/poc/invoice_poc.pdf'
    }
  },
  {
    id: 6,
    title: 'Fieldstone Mortgage',
    description: 'A static, zero-backend single-page marketing site for a mortgage firm built without frameworks. Features a CSS Custom Properties theme layer, fluid typography, an IntersectionObserver-driven scroll reveal, and a fully client-side mortgage calculator.',
    tech: ['HTML5', 'CSS3', 'Vanilla JS', 'IntersectionObserver', 'Inline SVG'],
    links: {
      website: 'https://fieldstone-mortgage.vercel.app/',
      github: 'https://github.com/anushkapolleyVE/mortgage-firm.git',
      poc: null
    }
  },
  {
    id: 5,
    title: 'AI Ingredient Analyser',
    description: 'A multimodal pantry management system using GPT-4o Vision for structured JSON extraction. Features raw ingredient detection with human-in-the-loop review, dish reconstruction, intelligent pantry merging, and inventory-constrained recipe generation.',
    tech: ['React', 'Vite', 'FastAPI', 'GPT-4o Vision', 'Pydantic', 'Python'],
    links: {
      website: 'https://ingrient-analyser1-1.onrender.com',
      github: 'https://github.com/AfzalVE/Ingrient-Analyser1.git',
      poc: '/poc/ingredient_poc.pdf'
    }
  },
  {
    id: 7,
    title: 'AI Email Automation Agent',
    description: 'An AI-driven email triage and routing platform orchestrating raw inbox polling to human tasks. Uses Groq Llama-3.1-8b for structured classification, feeding a deterministic policy engine for routing, SLA calculation, and AI auto-replies.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Groq (Llama-3.1)', 'Gmail API', 'APScheduler', 'React Query'],
    links: {
      website: 'https://ai-email-automation-pi.vercel.app/',
      github: 'https://github.com/anushkapolleyVE/AI-email-automation.git',
      poc: '/poc/email_agent_poc.pdf'
    }
  },
  {
    id: 11,
    title: 'Amazon Price Tracker Pro',
    description: 'A Manifest V3 Chrome extension and FastAPI backend that monitors prices via headless background HTML fetching and regex extraction. Powered by an event-driven MV3 Service Worker and the Chrome Alarms API.',
    tech: ['Chrome Extension (MV3)', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'JWT'],
    links: {
      website: 'https://ai-email-automation-1-iuyf.onrender.com',
      github: null,
      poc: '/poc/amazon_tracker_poc.pdf'
    }
  },
  {
    id: 8,
    title: 'PreSales AI Agent',
    description: 'A role-based multi-tenant SaaS platform automating the pre-sales lifecycle. Separates AI-driven requirement extraction and conversational negotiation from deterministic backend bench allocation and timeline estimation.',
    tech: ['React', 'Vite', 'Zustand', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'OpenAI API', 'Jinja2', 'JWT'],
    links: {
      website: 'https://presalesaiagent.vestaging.in/',
      github: null,
      poc: null
    }
  },
  {
    id: 10,
    title: 'PropoAI - Real Estate Lead Qualification',
    description: 'An AI agent acting as a natural-language interface and structured data-extraction engine for real estate leads. Uses GPT-4o for generative intent-detection, feeding into deterministic backend scoring and appointment scheduling systems.',
    tech: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Pydantic', 'GPT-4o'],
    links: {
      website: 'https://real-estate-lead-qualification.vercel.app/',
      github: null,
      poc: '/poc/propoai_poc.pdf'
    }
  },
  {
    id: 12,
    title: 'AI gramX',
    description: 'A full-stack, real-time social messaging platform featuring a hybrid REST and WebSocket architecture. Supports 1:1/group chats, media, ephemeral stories, and real-time presence with stateless JWT authentication.',
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Zustand', 'TailwindCSS'],
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
                        <FileText className="w-4 h-4" /> View POC Document
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
