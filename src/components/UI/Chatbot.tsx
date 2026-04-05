import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Minimize2, Maximize2, User, Bot, Loader2, Sparkles, RotateCcw, HelpCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { cn } from '../../lib/utils';
import { useChatbot } from '../../hooks/useChatbot';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const STORAGE_KEY = 'portfolio_chat_v2_history';

const SUGGESTED_QUESTIONS = [
  '¿Qué servicios ofrece este sitio?',
  '¿Cómo puedo contactarlos?',
  '¿Dónde están ubicados?',
  '¿Cómo funciona este sitio web?',
  '¿Qué información puedo encontrar aquí?'
];

const Chatbot: React.FC = () => {
  const { t } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [
      { 
        role: 'bot', 
        text: '¡Hola! Soy tu asistente virtual inteligente. 👋\n\nEstoy aquí para ayudarte a navegar por el sitio, contarte sobre nuestros servicios o responder cualquier duda general que tengas.\n\n¿En qué puedo ayudarte hoy?' 
      }
    ];
  });
  const [input, setInput] = useState('');
  const { sendMessage, isLoading } = useChatbot();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = useCallback(async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage = text.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);

    try {
      // Pass the messages history (excluding the current user message which is already in state)
      const botText = await sendMessage(userMessage, messages);
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error: any) {
      console.error('Chatbot Error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: `Ups, algo salió mal: ${error.message || 'Error desconocido'}` }]);
    }
  }, [input, isLoading, messages, sendMessage]);

  const resetConversation = () => {
    const initialMessage: Message[] = [
      { 
        role: 'bot', 
        text: '¡Hola! Soy tu asistente virtual inteligente. 👋\n\nEstoy aquí para ayudarte a navegar por el sitio, contarte sobre nuestros servicios o responder cualquier duda general que tengas.\n\n¿En qué puedo ayudarte hoy?' 
      }
    ];
    setMessages(initialMessage);
    localStorage.removeItem(STORAGE_KEY);
  };

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
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Asistente Virtual</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">En línea</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={resetConversation}
                  className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
                  title="Reiniciar conversación"
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
                  {isLoading && (
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
                    <span>Preguntas sugeridas</span>
                  </div>
                  <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button 
                        key={i}
                        onClick={() => handleSend(q)}
                        disabled={isLoading}
                        className="whitespace-nowrap px-4 py-2 rounded-xl glass border border-white/10 text-xs font-medium text-slate-300 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all disabled:opacity-50"
                      >
                        {q}
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
                      placeholder="Escribe tu duda aquí..."
                      className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                      disabled={isLoading}
                    />
                    <button
                      onClick={() => handleSend()}
                      disabled={!input.trim() || isLoading}
                      className="p-4 rounded-2xl bg-primary text-white hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all shadow-xl shadow-primary/30"
                      aria-label="Enviar mensaje"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                  <p className="mt-3 text-[10px] text-center text-slate-500 font-medium">
                    Puedes preguntarme sobre servicios, contacto o cultura general.
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

export default Chatbot;
