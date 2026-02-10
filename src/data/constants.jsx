import { Code, Brain, Star } from 'lucide-react';

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education'},
  { id: 'achievements', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const SKILLS_DATA = {
  programming: [
    { name: 'Python', level: 95 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 60 },
    { name: 'C/C++', level: 75 },
    { name: 'Java', level: 75 },
    { name: 'SQL (Structured Query Language)', level: 90 },
  ],
  backend: [
    { name: 'Django & Django REST Framework (REST APIs)', level: 94 },
    { name: 'Python (FastAPI)', level: 80 },
    { name: 'ColdFusion (FW/1 & Fusebox)', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'Elasticsearch', level: 75 },
    { name: 'Relational Databases : MySQL & PostgreSQL', level: 90 },
    { name: 'NoSQL Databases : MongoDB', level: 70 },
    { name: 'Schedulers & Microservices', level: 70 },
  ],
  frontend: [
    { name: 'Vue.js', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Tailwind CSS/Bootstrap', level: 90 },
    { name: 'JavaScript (ES6+)', level: 85 },
  ],
  ai_ml: [
    { name: 'LangChain & LangGraph (Multi-Agent Systems)', level: 95 },
    { name: 'RAG Pipelines & Vector Databases (FAISS, Chroma)', level: 92 },
    { name: 'LLM Implementation (DeepSeek R1, GPT-4, Llama)', level: 88 },
    { name: 'Computer Vision & PyTorch', level: 82 },
  ],
  cloud_tools: [
    { name: 'AWS (EC2, S3, RDS)', level: 80 },
    { name: 'Git/GitHub', level: 90 },
    { name: 'Vercel', level: 85 },
    { name: 'CI/CD Pipelines & Linux OS', level: 80 },
    { name: 'PowerBI/Tableau', level: 75 },
  ]
};

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Software Developer",
    company: "Divyal Technology Pvt. Ltd.",
    duration: "June 2025 - Present",
    projects: [
      {
        title: "Railpay Project",
        description: "Spearheaded end-to-end full-stack maintenance for Railpay, a mission-critical passenger compensation system, utilizing ColdFusion (FW/1 & Fusebox). I managed the complete lifecycle of AWS server environments, including initial setup, the engineering of automated deployment pipelines, and proactive infrastructure maintenance.",
        tech: ["ColdFusion","Fusebox", "FW/1", "AWS EC2/RDS", "DevOps", "Cron Job"]
      },
      {
        title: "PMD Project (Project Management Dashboard)",
        description: "Promoted to full-time role. Developing scalable PMD platforms using Vue.js frontend and Django REST APIs. Optimized API efficiency by 20% through database query tuning. Managing AWS deployments (EC2, RDS) and maintaining CI/CD pipelines for reliable software delivery.",
        tech: ["Python", "Django", "Vue.js", "MySQL", "REST API", "AWS"]
      }
    ]
  },
  {
    id: 2,
    role: "Software Developer Intern",
    company: "Divyal Technology Pvt. Ltd.",
    duration: "Feb 2025 - May 2025",
    projects: [
      {
        title: "PMD Project (Project Management Dashboard)",
        description: "Contributed to PMD system modules, focusing on building scalable REST APIs and optimizing frontend components in Vue.js.",
        tech: ["Python", "Django", "Vue.js", "MySQL", "REST API", "AWS"]
      }
    ]
  }
];

export const EDUCATION_DATA = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Banaras Hindu University (BHU), Varanasi",
    duration: "Oct 2023 - June 2025",
    grade: "7.3 GPA",
    details: "Core focus on Data Structures & Algorithms, Object Oriented Programming, Database Management System, and Computer Networks. Specialized coursework in Artificial Neural Networks, Artificial Intelligence, Image Processing, Machine Learning, Internet of Things, and Mobile Adhoc Networks (MANETs)."
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