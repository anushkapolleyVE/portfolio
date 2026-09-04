// Replace each liveUrl below with the real Vercel deployment for that project.
// Clicking a project card opens liveUrl in a new tab.
// The "Read the case study" button opens the in-page detail modal instead.

export const projects = [
  {
    key: "propai",
    order: "01 · featured",
    tag: "AI agent · real estate",
    title: "PropAI — real estate lead qualification",
    overview:
      "A conversational AI sales assistant for qualifying real-estate leads and moving qualified prospects toward property visits.",
    liveUrl: "https://propai.vercel.app", // TODO: replace with real deployed URL
    flow: ["Next.js", "FastAPI", "AI workflow", "OpenAI", "PostgreSQL"],
    points: [
      "Conversation-driven lead qualification",
      "Intent-aware workflow routing",
      "Property conversation support",
      "Appointment availability and booking",
      "Structured conversation summaries stored as application state",
      "Frontend and backend deployment"
    ],
    stack: ["Next.js", "FastAPI", "OpenAI", "LangGraph", "SQLAlchemy", "PostgreSQL"],
    visualType: "terminal",
    terminal: [
      { role: "user", text: "I'm looking for a 2BHK around my budget." },
      { role: "assistant", text: "Happy to help narrow that down — which location are you considering?" },
      { role: "user", text: "New Town. I'd like to visit this weekend." }
    ],
    terminalResult: "appointment_flow.triggered → slot confirmed, Sat 11:00"
  },
  {
    key: "presales",
    order: "02",
    tag: "AI workflow · presales",
    title: "PreSales AI Agent V2",
    overview:
      "An AI-powered proposal-generation platform that helps presales teams move from raw client requirements to structured project proposals.",
    liveUrl: "https://presales-agent.vercel.app", // TODO: replace with real deployed URL
    flow: ["Client portal", "Requirement analysis", "AI workflow", "Estimation", "Proposal", "Export"],
    points: [
      "Requirement collection and analysis",
      "Stateful, multi-step AI workflow",
      "Resource allocation modeling",
      "Effort and cost estimation",
      "Professional proposal generation",
      "RAG-ready knowledge architecture"
    ],
    stack: ["LangGraph", "RAG", "LLMs", "React", "FastAPI", "PostgreSQL"],
    visualType: "schematic",
    schematic: ["Requirements", "Analysis", "Proposal"]
  },
  {
    key: "medical",
    order: "03",
    tag: "RAG · knowledge AI",
    title: "Medical Knowledge Chatbot",
    overview:
      "A retrieval-augmented chatbot that makes domain documents searchable and uses retrieved context to generate grounded responses.",
    liveUrl: "https://medical-knowledge-chatbot.vercel.app", // TODO: replace with real deployed URL
    flow: ["Documents", "Chunking", "Embeddings", "Pinecone", "Retrieval", "LLM", "Response"],
    points: [
      "Document ingestion and chunking",
      "Semantic embeddings",
      "Vector indexing and retrieval",
      "Context-aware response generation",
      "Flask backend integration",
      "Answers grounded in retrieved context rather than model memory alone"
    ],
    stack: ["Flask", "LangChain", "Pinecone", "HuggingFace", "Embeddings", "RAG"],
    visualType: "schematic",
    schematic: ["Documents", "Embeddings", "Answer"]
  },
  {
    key: "knowledge",
    order: "04 · in progress",
    tag: "AI knowledge · in progress",
    title: "AI Knowledge & Workflow Agent",
    overview:
      "A knowledge and workflow assistant concept focused on organizational documents, retrieval, and task-oriented AI interactions.",
    liveUrl: "https://ai-knowledge-agent.vercel.app", // TODO: replace with real deployed URL
    flow: ["User", "FastAPI", "Agent layer", "RAG", "Vector DB + PostgreSQL", "Action"],
    points: [
      "Document and knowledge management",
      "Semantic retrieval",
      "Stateful workflow design",
      "PostgreSQL-backed application data",
      "Redis-ready asynchronous processing",
      "Agent-oriented task execution"
    ],
    stack: ["FastAPI", "PostgreSQL", "RAG", "Vector DB", "Redis", "LangGraph"],
    visualType: "schematic",
    schematic: ["Docs + tasks", "Agent layer", "Action"]
  }
];
