import React from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { Trophy, ExternalLink } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../../data/constants';

const Achievements = ({ darkMode }) => {
  return (
    <section id="achievements" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold mb-4 flex items-center justify-center gap-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <div className="p-2 rounded-lg bg-yellow-500/20">
              <Trophy className="text-yellow-500" />
            </div>
            Certifications
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-6 rounded-2xl border flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl backdrop-blur-md ${
                darkMode 
                  ? 'bg-gray-800/30 border-white/5 hover:border-yellow-500/30' 
                  : 'bg-white/40 border-white/20 hover:border-yellow-500/30'
              }`}
            >
              <div className={`p-4 rounded-full mb-4 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
                {item.icon}
              </div>
              
              <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {item.title}
              </h3>
              
              <div className={`text-sm font-medium mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {item.issuer}
              </div>

              <div className={`text-xs mb-4 px-2 py-1 rounded border ${darkMode ? 'bg-gray-900/50 border-gray-700 text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>
                Issued: {item.date}
              </div>
              
              <p className={`text-sm mb-6 flex-grow ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {item.description}
              </p>

              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto w-full py-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  darkMode 
                    ? 'bg-white/5 hover:bg-white/10 text-blue-400' 
                    : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
                }`}
              >
                Verify Credential <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;