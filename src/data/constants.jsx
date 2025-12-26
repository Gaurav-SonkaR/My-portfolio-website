import React from 'react';
import { Code, Brain, Star } from 'lucide-react';

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const SKILLS_DATA = {
  ai_ml: [
    { name: 'LangChain/LangGraph', level: 95 },
    { name: 'RAG Pipelines/Vector DBs', level: 90 },
    { name: 'DeepSeek R1/LLMs', level: 85 },
    { name: 'Scikit-Learn/Pandas', level: 88 },
  ],
  backend: [
    { name: 'Python (Django/FastAPI)', level: 92 },
    { name: 'REST API Design', level: 90 },
    { name: 'PostgreSQL/MySQL', level: 88 },
    { name: 'Elasticsearch', level: 75 },
  ],
  frontend: [
    { name: 'Vue.js', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Tailwind CSS/Bootstrap', level: 90 },
    { name: 'JavaScript (ES6+)', level: 85 },
  ],
  cloud_tools: [
    { name: 'AWS (EC2, S3, RDS)', level: 80 },
    { name: 'Docker/CI/CD', level: 82 },
    { name: 'Git/GitHub', level: 90 },
    { name: 'PowerBI/Tableau', level: 75 },
  ]
};

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Software Developer",
    company: "Divyal Technology PVT. LTD. (for Tracsis PLC, UK)",
    duration: "June 2025 - Present",
    location: "Remote / Hybrid",
    description: "Promoted to full-time role. Developing scalable PMD platforms using Vue.js frontend and Django REST APIs. Optimized API efficiency by 20% through database query tuning. Managing AWS deployments (EC2, RDS) and maintaining CI/CD pipelines for reliable software delivery."
  },
  {
    id: 2,
    role: "Software Developer Intern",
    company: "Divyal Technology PVT. LTD.",
    duration: "Feb 2025 - May 2025",
    location: "Remote / Hybrid",
    description: "Contributed to PMD system development. Assisted in MySQL schema design, API integration, and initial AWS cloud deployments. Collaborated in an Agile environment, participating in daily Scrum meetings and peer code reviews."
  }
];

export const EDUCATION_DATA = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Banaras Hindu University (BHU), Varanasi",
    duration: "Oct 2023 - June 2025",
    grade: "7.3 GPA",
    details: "Focused on AI/ML, Data Structures, Software Engineering, and Operating Systems."
  }
];

export const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    title: "Programming in Modern C++",
    issuer: "NPTEL - IIT Kharagpur",
    date: "2024",
    icon: <Code className="w-6 h-6 text-blue-500" />,
    description: "Advanced certification covering modern C++ standards, STL, and efficient coding practices.",
    link: "https://nptel.ac.in/" 
  },
  {
    id: 2,
    title: "The Joy of Computing using Python",
    issuer: "NPTEL - IIT Madras",
    date: "2023",
    icon: <Brain className="w-6 h-6 text-yellow-500" />,
    description: "Comprehensive course on Python programming paradigms and problem-solving.",
    link: "https://nptel.ac.in/"
  },
  {
    id: 3,
    title: "5 Star Coder (Problem Solving)",
    issuer: "HackerRank",
    date: "2023",
    icon: <Star className="w-6 h-6 text-purple-500" />,
    description: "Achieved top rank in Problem Solving and Python domains through consistent algorithmic practice.",
    link: "https://www.hackerrank.com/"
  }
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'AI Research Agentic System',
    category: 'ai',
    description: 'Designed LangGraph workflow with 4 specialized agents for automated research. Integrated Tavily API for web research and DeepSeek R1 for context-aware summarization with recursion safeguards.',
    tech: ['LangGraph', 'LangChain', 'DeepSeek R1', 'Tavily API', 'Python'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600&h=400',
    github: 'https://github.com', 
    demo: '#',
    stats: { accuracy: '92%', agents: '4' }
  },
  {
    id: 2,
    title: 'Online Fraud Detection System',
    category: 'ai',
    description: 'Built a fraud detection AI model using Random Forest Classifier (99.96% accuracy). Integrated the model into a Django web app for real-time transaction analysis.',
    tech: ['Django', 'Scikit-Learn', 'Python', 'Bootstrap', 'SQL'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600&h=400',
    github: 'https://github.com',
    demo: '#',
    stats: { accuracy: '99.96%', latency: 'Low' }
  },
  {
    id: 3,
    title: 'E-commerce with Recommendation',
    category: 'web',
    description: 'Decoupled architecture with Vue.js frontend and Django REST backend. Features ML-based product recommendations, Elasticsearch for search, and Razorpay payments.',
    tech: ['Vue.js', 'Django REST', 'Elasticsearch', 'Razorpay', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=600&h=400',
    github: 'https://github.com',
    demo: '#',
    stats: { architecture: 'Decoupled', search: 'Elastic' }
  },
  {
    id: 4,
    title: 'Pizza Sales Analysis',
    category: 'data',
    description: 'Analyzed 10K+ sales records and built interactive PowerBI dashboards for demand forecasting using SQL queries and exploratory data analysis.',
    tech: ['PowerBI', 'SQL', 'MySQL', 'Data Analysis'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600&h=400',
    github: 'https://github.com',
    demo: '#',
    stats: { records: '10K+', tool: 'PowerBI' }
  },
];