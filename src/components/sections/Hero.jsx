import React, { useState, useEffect, useRef } from 'react';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { Download, ChevronDown, ChevronRight, Heart, Database, Brain, Briefcase  } from 'lucide-react';
import myImage from '../../../assets/profile-pic.png';

const Hero = ({ darkMode }) => {
  const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDownloadMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const handleDownload = (role) => {
    alert(`Downloading ${role} Resume... (Mock Action)`);
    setDownloadMenuOpen(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-12 z-10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1 relative z-20"
          >
            {/* Name with High Contrast Logic */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight flex flex-col justify-center h-full">
              <span className={darkMode ? 'text-white mt-4' : 'text-gray-900 mt-4'}>
                Gaurav Sonkar
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x mt-2">
                Software Developer
              </span>
            </h1>
            
            <p className={`mt-4 text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Bridging the gap between <b>Modern Web Development</b> and <b>Agentic AI</b>. 
              Experienced in building scalable Django/Vue systems and autonomous LangGraph workflows.
            </p>

            <div className="mt-10 flex flex-col gap-6 items-center lg:items-start">
              {/* Top Row: Download & View Projects */}
              <div className="flex flex-col sm:flex-row gap-6 w-full justify-center lg:justify-start">
                
                {/* Dropdown Container */}
                <div className="relative z-50 w-full sm:w-auto" ref={dropdownRef}>
                  <motion.button
                    onClick={() => setDownloadMenuOpen(!downloadMenuOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/30 overflow-hidden flex items-center justify-center gap-2 w-full"
                  >
                    <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 skew-x-12 -translate-x-full"></div>
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${downloadMenuOpen ? 'rotate-180' : ''}`} />
                  </motion.button>

                  <AnimatePresence>
                    {downloadMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className={`absolute top-full left-0 mt-2 w-full sm:w-72 rounded-2xl shadow-2xl border backdrop-blur-2xl overflow-hidden z-[100] ${ 
                          darkMode ? 'bg-gray-800/95 border-white/10 shadow-black/50' : 'bg-white/95 border-gray-200 shadow-gray-200/50'
                        }`}
                      >
                        <div className="p-2 space-y-1">
                          <button
                            onClick={() => handleDownload('SDE Resume')}
                            className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-4 transition-colors group ${
                              darkMode ? 'hover:bg-white/10 text-gray-200' : 'hover:bg-gray-100 text-gray-700'
                            }`}
                          >
                            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-500 group-hover:scale-110 transition-transform">
                              <Briefcase className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="block text-sm font-bold">Software Developer</span>
                              <span className="block text-xs opacity-60">Focus: Django, Vue, SQL</span>
                            </div>
                          </button>
                          <button
                            onClick={() => handleDownload('AI Resume')}
                            className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-4 transition-colors group ${
                              darkMode ? 'hover:bg-white/10 text-gray-200' : 'hover:bg-gray-100 text-gray-700'
                            }`}
                          >
                            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-500 group-hover:scale-110 transition-transform">
                              <Brain className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="block text-sm font-bold">AI/ML Engineer</span>
                              <span className="block text-xs opacity-60">Focus: LangChain, Agents</span>
                            </div>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-2xl font-bold flex items-center justify-center border-2 backdrop-blur-md transition-all w-full sm:w-auto ${
                    darkMode 
                      ? 'border-gray-700 bg-gray-800/30 hover:bg-gray-800 text-white hover:border-cyan-500' 
                      : 'border-gray-200 bg-white/30 hover:bg-white text-gray-900 hover:border-cyan-500'
                  }`}
                >
                  View Projects
                  <ChevronRight className="ml-2 w-5 h-5" />
                </motion.a>
              </div>

              {/* Bottom Centered: Hire Me Button */}
              <div className="flex w-full justify-center lg:justify-start">
                 <div className="flex justify-center w-full sm:w-auto" style={{ minWidth: '200px' }}>
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative px-10 py-4 rounded-2xl font-bold flex items-center justify-center border-2 backdrop-blur-md transition-all w-full sm:w-auto overflow-hidden shadow-lg ${
                        darkMode 
                          ? 'border-pink-500/50 bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 hover:border-pink-400 hover:shadow-pink-500/30' 
                          : 'border-pink-400 bg-pink-100/50 hover:bg-pink-100 text-pink-600 hover:border-pink-500 hover:shadow-pink-400/30'
                      }`}
                    >
                      <div className="absolute inset-0 bg-pink-500/10 group-hover:translate-x-full transition-transform duration-500 skew-x-12 -translate-x-full"></div>
                      <span className="flex items-center gap-2 group-hover:hidden transition-all duration-200">
                        Hire Me <Heart className="w-5 h-5 fill-current" />
                      </span>
                      <span className="hidden group-hover:flex items-center gap-2 font-extrabold tracking-wider transition-all duration-200 animate-pulse">
                        pls 🙏🏻🥺
                      </span>
                    </motion.a>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2 h-full "
          >
            <motion.div
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.05 } // Image Zoom In
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-80 h-80 md:w-96 md:h-96 group flex flex-col items-center"
            >
              {/* "Hello" Pop-up Badge */}
              <motion.div
                variants={{
                  initial: { opacity: 0, scale: 0, x: -20 },
                  hover: { opacity: 1, scale: 1, x: 0 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={`absolute -top-12 -right-12 z-50 pointer-events-none drop-shadow-2xl`}
              >
                <div className={`relative px-6 py-4 backdrop-blur-xl border shadow-xl ${
                  darkMode ? 'bg-purple-900/80 border-purple-500/40 text-white' : 'bg-white/80 border-purple-200 text-purple-900'
                }`}
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 15% 85%, 0% 100%, 0% 85%)', 
                  borderRadius: '1rem',
                  minWidth: '140px',
                  paddingBottom: '25px'
                }}>
                  <div className="flex items-center gap-2 justify-center -mt-2">
                    <motion.span 
                      animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                      className="text-3xl inline-block origin-bottom-right"
                    >
                      👋
                    </motion.span>
                    <span className="font-bold text-xl tracking-wide">Hello!</span>
                  </div>
                </div>
              </motion.div>

              {/* Colorful Gradient Blob behind photo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-[60px] opacity-60 animate-pulse"></div>
              
              <div className={`relative w-full h-full rounded-full overflow-hidden border-[6px] shadow-2xl backdrop-blur-sm ${
                darkMode ? 'border-gray-800/50 shadow-cyan-500/20' : 'border-white/50 shadow-xl'
              }`}>
                <img 
                  src={myImage} 
                  alt="Gaurav Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Badge: Open to Work (Moved Below Image with spacing and glass effect) */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -bottom-16 left-1/2 transform -translate-x-1/2 px-5 py-2 rounded-full border shadow-xl flex items-center gap-2 backdrop-blur-xl whitespace-nowrap z-50 ${
                  darkMode ? 'bg-green-900/30 border-green-500/30 text-emerald-400' : 'bg-green-50/50 border-green-200 text-emerald-700'
                }`}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-s font-bold tracking-wide">Open to Work: Full-Stack & AI Roles</span>
              </motion.div>

              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute top-10 -left-8 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-xl border ${
                  darkMode ? 'bg-gray-900/60 border-white/10 text-white' : 'bg-white/60 border-white text-gray-900'
                }`}
              >
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <Database className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs font-medium opacity-70">Expert</p>
                  <p className="text-sm font-bold">Backend</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                className={`absolute bottom-20 -right-8 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-xl border ${
                  darkMode ? 'bg-gray-900/60 border-white/10 text-white' : 'bg-white/60 border-white text-gray-900'
                }`}
              >
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <Brain className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-xs font-medium opacity-70">Specialist</p>
                  <p className="text-sm font-bold">AI / ML</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className={`w-8 h-8 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
      </motion.div>
    </section>
  );
};

export default Hero;