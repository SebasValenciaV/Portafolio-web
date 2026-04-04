import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '573168859466';
  const message = 'Hola Sebas, vi tu portafolio y me gustaría obtener más información sobre tus servicios.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-28 right-6 z-[90] w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 flex items-center justify-center group"
    >
      <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-[#25D366] flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-20 bg-slate-900 text-white text-xs font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 shadow-2xl">
        WhatsApp
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
