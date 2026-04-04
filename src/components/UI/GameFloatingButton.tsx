import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gamepad2 } from 'lucide-react';
import SpaceGame from '../Game/SpaceGame';

const GameFloatingButton: React.FC = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsGameOpen(true)}
        className="fixed bottom-6 right-28 z-[90] p-4 rounded-full bg-primary text-white shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.8)] transition-shadow flex items-center justify-center group"
      >
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
        <Gamepad2 size={28} className="relative z-10 group-hover:rotate-12 transition-transform" />
      </motion.button>

      <AnimatePresence>
        {isGameOpen && (
          <SpaceGame onClose={() => setIsGameOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default GameFloatingButton;
