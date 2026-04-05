import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Minimize2, Maximize2, User, Bot, HelpCircle, RotateCcw, Info, Phone, MapPin, Clock } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ChatbotEngine, ChatMessage } from '../../lib/chatbot/engine';

const ChatbotLocal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const engineRef = useRef<ChatbotEngine | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize engine and load history
  useEffect(() => {
    if (!engineRef.current) {
      engineRef.current = new ChatbotEngine();
      const history = engineRef.current.getHistory();
      if (history.length === 0) {
        setMessages([{ 
          role: 'bot', 
          text: '¡Hola! Soy tu asistente virtual local. 👋\n\nEstoy aquí para ayudarte con información sobre servicios, contacto, ubicación y horarios. No necesito internet ni claves de API para funcionar.\n\n¿En qué puedo apoyarte hoy?',
          timestamp: Date.now()
        }]);
      } else {
        setMessages(history);
      }
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = useCallback(async (text: string = input) => {
    if (!text.trim() || isTyping || !engineRef.current) return;

    const userMessage = text.trim();
    setInput('');
    
    // Optimistically add user message to state
    setMessages(prev => [...prev, { role: 'user', text: userMessage, timestamp: Date.now() }]);
    setIsTyping(true);

    try {
      const response = await engineRef.current.processMessage(userMessage);
      setMessages(prev => [...prev, { role: 'bot', text: response, timestamp: Date.now() }]);
    } catch (error) {
      console.error('Chatbot Error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: 'Ups, algo salió mal en mi lógica local.', timestamp: Date.now() }]);
    } finally {
      setIsTyping(false);
    }
  }, [input, isTyping]);

  const resetConversation = () => {
    if (engineRef.current) {
      engineRef.current.clearHistory();
      setMessages([{ 
        role: 'bot', 
        text: '¡Hola! Soy tu asistente virtual local. 👋\n\nEstoy aquí para ayudarte con información sobre servicios, contacto, ubicación y horarios. No necesito internet ni claves de API para funcionar.\n\n¿En qué puedo apoyarte hoy?',
        timestamp: Date.now()
      }]);
    }
  };

  const SUGGESTED_QUESTIONS = [
    { label: 'Servicios', icon: <Info size={12} />, text: '¿Qué servicios ofrecen?' },
    { label: 'Contacto', icon: <Phone size={12} />, text: '¿Cómo puedo contactarlos?' },
    { label: 'Ubicación', icon: <MapPin size={12} />, text: '¿Dónde están ubicados?' },
    { label: 'Horarios', icon: <Clock size={12} />, text: '¿Cuáles son sus horarios?' },
    { label: 'Ayuda', icon: <HelpCircle size={12} />, text: '/ayuda' },
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-[90] w-16 h-16 rounded-full bg-primary text-white shadow-2xl shadow-primary/30 flex items-center justify-center group"
          id="chatbot-toggle"
        >
          <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-950 animate-pulse" />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '80px' : 'min(600px, calc(100vh - 48px))',
            }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className={cn(
              "fixed bottom-6 left-6 z-[90] glass border border-white/10 shadow-2xl overflow-hidden flex flex-col transition-all duration-500",
              isMinimized ? "w-[300px] rounded-2xl" : "w-[calc(100vw-48px)] sm:w-[420px] max-h-[calc(100vh-48px)] rounded-[2rem]"
            )}
            id="chatbot-window"
          >
            {/* Header */}
            <div className="p-4 bg-primary/10 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Asistente Local</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">100% Offline</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={resetConversation}
                  className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                  title="Limpiar historial"
                >
                  <RotateCcw size={16} />
                </button>
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div 
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-gradient-to-b from-transparent to-primary/5"
                >
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={cn(
                        "flex gap-3 max-w-[90%]",
                        msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                      )}
                    >
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm",
                        msg.role === 'user' ? "bg-primary/20 text-primary" : "bg-white/5 text-slate-400"
                      )}>
                        {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                      </div>
                      <div className={cn(
                        "p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap",
                        msg.role === 'user' 
                          ? "bg-primary text-white rounded-tr-none shadow-lg shadow-primary/20" 
                          : "glass border border-white/10 text-slate-300 rounded-tl-none"
                      )}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <div className="flex gap-3 mr-auto">
                      <div className="w-8 h-8 rounded-lg bg-white/5 text-slate-400 flex items-center justify-center">
                        <Bot size={16} />
                      </div>
                      <div className="glass border border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Suggested Questions */}
                <div className="px-6 py-3 border-t border-white/5 bg-white/2">
                  <div className="flex items-center gap-2 mb-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <HelpCircle size={12} />
                    <span>Preguntas frecuentes</span>
                  </div>
                  <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button 
                        key={i}
                        onClick={() => handleSend(q.text)}
                        disabled={isTyping}
                        className="whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10 text-xs font-medium text-slate-300 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all disabled:opacity-50"
                      >
                        {q.icon}
                        {q.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-6 border-t border-white/5">
                  <div className="relative flex items-center gap-3">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Escribe tu duda o /ayuda..."
                      className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                      disabled={isTyping}
                    />
                    <button
                      onClick={() => handleSend()}
                      disabled={!input.trim() || isTyping}
                      className="p-4 rounded-2xl bg-primary text-white hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all shadow-xl shadow-primary/30"
                      aria-label="Enviar mensaje"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                  <p className="mt-3 text-[10px] text-center text-slate-500 font-medium">
                    Funciona localmente. Prueba comandos como /servicios o /contacto.
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotLocal;
