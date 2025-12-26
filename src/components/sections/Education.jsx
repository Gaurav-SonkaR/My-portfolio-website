import React from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/constants';

const Education = ({ darkMode }) => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl font-bold mb-4 flex items-center justify-center gap-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <div className="p-2 rounded-lg bg-purple-500/20">
              <GraduationCap className="text-purple-500" />
            </div>
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {EDUCATION_DATA.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`p-8 rounded-3xl border relative overflow-hidden group backdrop-blur-xl transition-all mb-8 ${
                darkMode ? 'bg-gray-900/40 border-white/5 hover:border-purple-500/30' : 'bg-white/40 border-white/20 hover:border-purple-500/30'
              }`}
            >
              <div className={`absolute top-0 right-0 p-4 opacity-5 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform ${
                darkMode ? 'text-white' : 'text-black'
              }`}>
                <GraduationCap size={120} />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className={`text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500`}>
                        {edu.degree}
                        </h3>
                        <div className={`text-lg font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {edu.institution}
                        </div>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full inline-block border ${
                    darkMode ? 'bg-purple-500/10 border-purple-500/20 text-purple-300' : 'bg-purple-50 border-purple-200 text-purple-800'
                    }`}>
                    {edu.duration}
                    </span>
                </div>

                <div className={`flex items-center gap-2 mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span>Grade: <span className="text-yellow-500 font-bold">{edu.grade}</span></span>
                </div>

                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;