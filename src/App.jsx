import React, { useState, useEffect } from 'react';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { Coffee, Mail, Linkedin, Github } from 'lucide-react';
import { NAV_LINKS } from './data/constants';
import { useScrollSpy } from './hooks/useScrollSpy';
import ParticleBackground from './components/ui/ParticleBackground';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import AIChatBot from './components/features/AIChatBot';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  
  const activeSection = useScrollSpy(NAV_LINKS.map(l => l.id));

  const toggleTheme = () => setDarkMode(!darkMode);

  // Auto-hide welcome screen after animation
  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`fixed inset-0 z-[9999] flex items-center justify-center ${
              darkMode ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x mb-4">
                Hello
              </h1>
              <p className="text-xl md:text-2xl text-gray-400">Welcome to my portfolio</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        
        {/* Global Background - Visible everywhere */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob ${darkMode ? 'bg-purple-700' : 'bg-purple-300'}`}></div>
          <div className={`absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000 ${darkMode ? 'bg-blue-700' : 'bg-blue-300'}`}></div>
          <div className={`absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-4000 ${darkMode ? 'bg-pink-700' : 'bg-pink-300'}`}></div>
          <ParticleBackground darkMode={darkMode} />
        </div>

        <Navbar 
          activeSection={activeSection}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />

        <main className="relative z-10">
          <Hero darkMode={darkMode} />
          
          {/* About Section */}
          <section id="about" className="py-20 relative z-10">
            <div className="max-w-4xl mx-auto px-6 text-center">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                 <h2 className={`text-3xl font-bold mb-6 flex items-center justify-center gap-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                   <div className="p-2 rounded-lg bg-orange-500/20">
                     <Coffee className="text-orange-500" />
                   </div>
                   About Me
                 </h2>
                 <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                   As a <b>Software Developer</b> with a passion for building intelligent systems, I specialize in crafting robust web applications and autonomous AI agents. 
                   My journey combines academic excellence in Computer Applications with hands-on industry experience in <b>Django, Vue.js, and GenAI</b>.
                   I thrive in environments that challenge me to innovate and deliver scalable solutions.
                 </p>
               </motion.div>
            </div>
          </section>

          <Experience darkMode={darkMode} />
          <Education darkMode={darkMode} />
          <Achievements darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          
          {/* Contact Section */}
          <section id="contact" className="py-24 relative z-10">
             <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Let's Connect</h2>
                <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Currently looking for opportunities to contribute to impactful projects.
                </p>
                <div className="flex justify-center gap-6">
                  <a href="mailto:gauravsonkar.bhu@gmail.com" className="p-4 rounded-full bg-gray-800 text-white hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/25">
                    <Mail />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gray-800 text-white hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/25">
                    <Linkedin />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-gray-800 text-white hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/25">
                    <Github />
                  </a>
                </div>
             </div>
          </section>
        </main>

        <footer className={`py-8 text-center border-t relative z-10 backdrop-blur-sm ${darkMode ? 'bg-gray-900/50 border-white/10 text-gray-500' : 'bg-white/50 border-gray-200 text-gray-600'}`}>
          <p>© 2025 Gaurav Sonkar. Built with React & Tailwind.</p>
        </footer>

        <AIChatBot isOpen={aiChatOpen} setIsOpen={setAiChatOpen} darkMode={darkMode} />
      </div>
    </>
  );
}
