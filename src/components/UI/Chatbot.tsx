import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Minimize2, Maximize2, User, Bot, Loader2, Phone, Mail } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { cn } from '../../lib/utils';

const Chatbot: React.FC = () => {
  const { t, settings } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: '¡Hola! Soy tu asistente virtual de Portafolio Web. ¿En qué puedo ayudarte hoy? Puedo contarte sobre mis servicios, tecnologías o ayudarte a agendar una llamada.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const handleOpenChatbot = () => setIsOpen(true);
    window.addEventListener('open-chatbot', handleOpenChatbot);
    return () => window.removeEventListener('open-chatbot', handleOpenChatbot);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const model = "gemini-3-flash-preview";
      
      const systemInstruction = `
        Eres el asistente virtual de "Portafolio Web", la marca personal de Sebas Valencia.
        Tu objetivo es ayudar a reclutadores y clientes potenciales.
        
        Información clave:
        - Servicios: Desarrollo web profesional, Landing pages, Sistemas personalizados, Automatización digital, Dashboards, IA.
        - Tecnologías: React, Next.js, Node.js, Tailwind, Gemini API, Firebase.
        - Proceso: Análisis -> Diseño -> Desarrollo -> Pruebas -> Implementación.
        - Contacto: +57 3168859466, sebasvalenciav.gia@gmail.com.
        
        Reglas:
        1. Sé profesional, innovador y amable.
        2. Si el usuario pregunta por servicios o tecnologías, responde basándote en la info anterior.
        3. Si el usuario quiere contratar o contactar, sugiérele llenar el formulario de contacto o escribir al correo sebasvalenciav.gia@gmail.com.
        4. Si el usuario pide una llamada, dile que puede dejar su número aquí o usar el botón de contacto del sitio.
        5. Mantén las respuestas concisas y útiles.
        6. Responde en el idioma en que te hablen (Español, Inglés, Portugués o Francés).
      `;

      const response = await ai.models.generateContent({
        model: model,
        contents: [
          { role: 'user', parts: [{ text: `Contexto del sistema: ${systemInstruction}\n\nHistorial: ${messages.map(m => `${m.role}: ${m.text}`).join('\n')}\n\nUsuario: ${userMessage}` }] }
        ],
      });

      const botText = response.text || 'Lo siento, tuve un problema al procesar tu mensaje. ¿Podrías repetirlo?';
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error('Chatbot Error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: 'Lo siento, parece que hay un problema de conexión. Por favor, intenta más tarde o contáctame directamente por email.' }]);
    } finally {
      setIsLoading(false);
    }
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
              height: isMinimized ? '80px' : '600px',
              width: isMinimized ? '300px' : '400px'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className={cn(
              "fixed bottom-6 left-6 z-[90] glass border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col transition-all duration-500",
              isMinimized && "rounded-2xl"
            )}
          >
            {/* Header */}
            <div className="p-4 bg-primary/10 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Asistente IA</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">En línea</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
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
                  className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth"
                >
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={cn(
                        "flex gap-3 max-w-[85%]",
                        msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                      )}
                    >
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                        msg.role === 'user' ? "bg-primary/20 text-primary" : "bg-white/5 text-slate-400"
                      )}>
                        {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                      </div>
                      <div className={cn(
                        "p-4 rounded-2xl text-sm leading-relaxed",
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
                      <div className="glass border border-white/10 p-4 rounded-2xl rounded-tl-none">
                        <Loader2 size={16} className="animate-spin text-primary" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="px-6 py-2 flex gap-2 overflow-x-auto no-scrollbar">
                  <button 
                    onClick={() => setInput('¿Qué servicios ofreces?')}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full glass border border-white/10 text-[10px] font-bold text-slate-400 hover:text-primary hover:border-primary transition-all"
                  >
                    Servicios
                  </button>
                  <button 
                    onClick={() => setInput('¿Qué tecnologías usas?')}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full glass border border-white/10 text-[10px] font-bold text-slate-400 hover:text-primary hover:border-primary transition-all"
                  >
                    Tecnologías
                  </button>
                  <button 
                    onClick={() => setInput('Quiero agendar una llamada')}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full glass border border-white/10 text-[10px] font-bold text-slate-400 hover:text-primary hover:border-primary transition-all"
                  >
                    Agendar Llamada
                  </button>
                </div>

                {/* Input Area */}
                <div className="p-6 border-t border-white/5">
                  <div className="relative flex items-center gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Escribe tu mensaje..."
                      className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-primary transition-all"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="p-4 rounded-2xl bg-primary text-white hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all shadow-xl shadow-primary/20"
                    >
                      <Send size={20} />
                    </button>
                  </div>
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
