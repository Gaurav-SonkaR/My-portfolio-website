import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/constants';

const Experience = ({ darkMode }) => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold mb-4 flex items-center justify-center gap-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Briefcase className="text-blue-500" />
            </div>
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30`} />

          <div className="space-y-16">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 transform -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)] ${
                  darkMode ? 'bg-gray-900 border-cyan-500' : 'bg-white border-cyan-500'
                }`} />

                <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                  <div className={`p-8 rounded-3xl backdrop-blur-xl border transition-all hover:shadow-2xl group ${
                    darkMode 
                      ? 'bg-gray-800/30 border-white/5 hover:border-cyan-500/30' 
                      : 'bg-white/40 border-white/20 hover:border-cyan-500/30'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                        {exp.role}
                      </h3>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                        darkMode ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
                      }`}>
                        {exp.duration}
                      </span>
                    </div>
                    
                    <div className={`flex items-center gap-2 mb-6 text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>

                    {/* Conditional Rendering for Multiple Projects */}
                    {exp.projects ? (
                      <div className="space-y-8">
                        {exp.projects.map((project, pIdx) => (
                          <div key={pIdx} className="relative pl-4 border-l-2 border-gray-500/20 hover:border-cyan-500/50 transition-colors">
                            <h4 className={`text-lg font-semibold mb-2 flex items-center gap-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                              {project.title}
                            </h4>
                            <p className={`text-sm leading-relaxed mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((t, tIdx) => (
                                <span key={tIdx} className={`text-[10px] px-2 py-0.5 rounded-md font-mono uppercase tracking-wider ${
                                  darkMode ? 'bg-white/5 text-gray-400' : 'bg-black/5 text-gray-500'
                                }`}>
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;