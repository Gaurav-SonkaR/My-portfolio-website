import React from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { Code, Server, Brain, Cloud } from 'lucide-react';
import { SKILLS_DATA } from '../../data/constants';

const Skills = ({ darkMode }) => {
  const categoryLabels = {
    ai_ml: "AI & Machine Learning",
    backend: "Backend & APIs",
    frontend: "Frontend Development",
    cloud_tools: "Cloud & Tools"
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(SKILLS_DATA).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border backdrop-blur-xl ${
                darkMode ? 'bg-gray-900/40 border-white/5' : 'bg-white/40 border-white/20'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-2 rounded-lg mr-3 ${
                  category === 'ai_ml' ? 'bg-purple-500/20 text-purple-500' :
                  category === 'backend' ? 'bg-blue-500/20 text-blue-500' :
                  category === 'frontend' ? 'bg-pink-500/20 text-pink-500' : 'bg-orange-500/20 text-orange-500'
                }`}>
                  {category === 'frontend' && <Code className="w-6 h-6" />}
                  {category === 'backend' && <Server className="w-6 h-6" />}
                  {category === 'ai_ml' && <Brain className="w-6 h-6" />}
                  {category === 'cloud_tools' && <Cloud className="w-6 h-6" />}
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {categoryLabels[category]}
                </h3>
              </div>

              <div className="space-y-6">
                {skills.map((skill, sIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{skill.name}</span>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: sIdx * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          category === 'frontend' ? 'from-pink-400 to-pink-600' :
                          category === 'backend' ? 'from-blue-400 to-blue-600' : 
                          category === 'ai_ml' ? 'from-purple-400 to-purple-600' : 'from-orange-400 to-orange-600'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;