import React, { useState, useEffect, useRef } from 'react';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
/* eslint-enable no-unused-vars */
import { X, MessageSquare, Sparkles, Send } from 'lucide-react';
import { callGemini } from '../../services/geminiService';
import { SKILLS_DATA, PROJECTS_DATA, EXPERIENCE_DATA, EDUCATION_DATA, ACHIEVEMENTS_DATA } from '../../data/constants';

const AIChatBot = ({ isOpen, setIsOpen, darkMode }) => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hi! I'm Gaurav's AI Assistant, powered by Gemini. Ask me about his tech stack, specific projects, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Sanitize Achievements Data for LLM context (remove React elements)
    const sanitizedAchievements = ACHIEVEMENTS_DATA.map((item) => {
      const { icon: _icon, ...rest } = item;
      return rest;
    });

    // Context for the AI
    const systemPrompt = `
      You are an AI Assistant for a developer portfolio named 'Gaurav'. 
      You are polite, professional, yet friendly. 
      Here is the data about Gaurav:
      Skills: ${JSON.stringify(SKILLS_DATA)}
      Projects: ${JSON.stringify(PROJECTS_DATA)}
      Experience: ${JSON.stringify(EXPERIENCE_DATA)}
      Education: ${JSON.stringify(EDUCATION_DATA)}
      Achievements: ${JSON.stringify(sanitizedAchievements)}
      
      Instructions:
      1. Answer questions specifically about Gaurav's skills and projects based on the data above.
      2. If asked about contact, suggest emailing contact@gaurav.ai.
      3. Keep responses concise (under 50 words) unless asked for details.
      4. If asked something unrelated to web dev or AI, politely steer back to Gaurav's work.
      5. Use a few emojis to be friendly.
    `;

    const aiResponse = await callGemini(userMessage, systemPrompt);
    
    setMessages(prev => [...prev, { type: 'bot', text: aiResponse }]);
    setIsTyping(false);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg shadow-purple-500/40 text-white group"
      >
        {isOpen ? <X size={24} /> : (
          <div className="relative">
            <MessageSquare size={24} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </div>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className={`fixed bottom-24 right-6 w-80 sm:w-96 rounded-3xl shadow-2xl z-50 overflow-hidden border flex flex-col backdrop-blur-2xl ${
              darkMode ? 'bg-gray-900/80 border-white/10' : 'bg-white/80 border-gray-200'
            }`}
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 bg-white/20 rounded-xl mr-3 backdrop-blur-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">AI Assistant</h3>
                    <p className="text-xs text-blue-100 flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5"></span>
                      Powered by Gemini
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${darkMode ? 'bg-gray-900/50' : 'bg-white/50'}`}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.type === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs mr-2 shrink-0 shadow-lg">
                      AI
                    </div>
                  )}
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.type === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-sm' 
                      : darkMode ? 'bg-gray-800 text-gray-200 rounded-tl-sm border border-gray-700' : 'bg-white text-gray-800 rounded-tl-sm border border-gray-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs mr-2 shrink-0">AI</div>
                  <div className={`p-3 rounded-2xl rounded-tl-sm ${darkMode ? 'bg-gray-800' : 'bg-white shadow-sm'}`}>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className={`p-3 border-t shrink-0 ${darkMode ? 'border-gray-800 bg-gray-900/80' : 'border-gray-200 bg-white/80'}`}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className={`flex-1 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    darkMode ? 'bg-gray-800 text-white placeholder-gray-500 border border-gray-700' : 'bg-gray-100 text-gray-900 placeholder-gray-400 border border-gray-200'
                  }`}
                />
                <button 
                  type="submit" 
                  disabled={!input.trim() || isTyping}
                  className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-blue-500/20"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatBot;