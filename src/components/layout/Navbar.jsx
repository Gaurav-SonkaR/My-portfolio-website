import React from 'react';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { Menu, X, Code, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../../data/constants';

const Navbar = ({ activeSection, mobileMenuOpen, setMobileMenuOpen, darkMode, toggleTheme }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-xl border-b shadow-lg ${
      darkMode 
        ? 'bg-gray-900/40 border-white/5 text-white shadow-blue-900/10' 
        : 'bg-white/40 border-white/20 text-gray-900 shadow-purple-200/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center gap-2"
          >
            <div className="p-1.5 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
              <Code size={20} className="text-white" />
            </div>
            {/* CHANGED: Replaced 'GAURAV.DEV' with 'Gaurav Sonkar' */}
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Gaurav Sonkar
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-medium transition-all relative group py-2 ${
                  activeSection === link.id
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500'
                    : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span 
                    layoutId="underline"
                    className="absolute left-0 bottom-0 block h-0.5 w-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" 
                  />
                )}
              </a>
            ))}
            
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full transition-all duration-300 backdrop-blur-md border shadow-lg ${
                darkMode 
                  ? 'bg-white/10 text-yellow-400 border-white/10 hover:bg-white/20' 
                  : 'bg-white/60 text-purple-600 border-purple-100 hover:bg-white/80'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full">
               {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-xl border-b ${
              darkMode ? 'bg-gray-900/90 border-white/10' : 'bg-white/90 border-white/20'
            }`}
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-xl text-base font-medium ${
                    activeSection === link.id
                      ? 'bg-blue-500/10 text-blue-500'
                      : darkMode ? 'text-gray-300 hover:bg-white/5' : 'text-gray-600 hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;