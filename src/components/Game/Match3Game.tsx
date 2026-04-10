import React from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface Match3GameProps {
  onClose: () => void;
}

const Match3Game: React.FC<Match3GameProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center overflow-hidden"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 shadow-xl"
      >
        <X size={24} />
      </button>

      {/* The Exact Game from /match3.html */}
      <iframe 
        src="/match3.html" 
        className="w-full h-full border-none"
        title="Match Master Premium"
      />
    </motion.div>
  );
};

export default Match3Game;
