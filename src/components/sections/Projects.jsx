import React, { useState } from 'react';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { Github, ExternalLink, Loader2, Wand2 } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/constants';
import { callGemini } from '../../services/geminiService';

const Projects = ({ darkMode }) => {
  const [filter, setFilter] = useState('all');
  const [analyzingId, setAnalyzingId] = useState(null);
  const [analyses, setAnalyses] = useState({}); 

  const filteredProjects = PROJECTS_DATA.filter(
    p => filter === 'all' || p.category === filter
  );

  const handleAnalyze = async (project) => {
    if (analyses[project.id]) return; 
    setAnalyzingId(project.id);

    const prompt = `
      Analyze this technical project: "${project.title}: ${project.description}". 
      Tech stack: ${project.tech.join(', ')}.
      
      Task: Explain briefly (1-2 sentences) why this tech stack combination is powerful or efficient for this specific use case. Start with "✨ Analysis:".
    `;

    const result = await callGemini(prompt);
    setAnalyses(prev => ({ ...prev, [project.id]: result }));
    setAnalyzingId(null);
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <div className="flex justify-center gap-4 mt-8">
            {['all', 'ai', 'web'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : darkMode ? 'bg-gray-800/50 text-gray-400 hover:bg-gray-700' : 'bg-white/50 text-gray-600 hover:bg-white shadow-sm'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                key={project.id}
                className={`group rounded-3xl overflow-hidden border backdrop-blur-md flex flex-col transition-all duration-300 hover:shadow-2xl ${
                  darkMode 
                    ? 'bg-gray-800/30 border-white/10 hover:border-cyan-500/40' 
                    : 'bg-white/40 border-white/20 hover:border-cyan-500/40'
                }`}
              >
                {/* Image Area */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-white rounded-full hover:scale-110 transition-transform text-gray-900 shadow-lg" 
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-white rounded-full hover:scale-110 transition-transform text-gray-900 shadow-lg" 
                      title="View Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-xl font-bold group-hover:text-cyan-500 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className={`text-xs px-2 py-1 rounded-md border ${
                        darkMode 
                          ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' 
                          : 'bg-cyan-50 border-cyan-200 text-cyan-700'
                      }`}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={`mt-auto pt-4 border-t ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                    {analyses[project.id] ? (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={`text-xs p-3 rounded-xl border ${
                          darkMode ? 'bg-purple-900/20 border-purple-500/20 text-purple-200' : 'bg-purple-50 border-purple-200 text-purple-800'
                        }`}
                      >
                         {analyses[project.id]}
                      </motion.div>
                    ) : (
                      <button
                        onClick={() => handleAnalyze(project)}
                        disabled={analyzingId === project.id}
                        className={`w-full flex items-center justify-center gap-2 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                          darkMode 
                            ? 'bg-white/5 hover:bg-white/10 text-gray-300' 
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        {analyzingId === project.id ? (
                          <>
                            <Loader2 className="w-3 h-3 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <Wand2 className="w-3 h-3 text-purple-500" />
                            <span>Ask AI to Analyze</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;