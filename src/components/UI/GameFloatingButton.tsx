import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gamepad2, Rocket, Sparkles, X } from 'lucide-react';
import Match3Game from '../Game/Match3Game';
import SpaceGame from '../Game/SpaceGame';

const GameFloatingButton: React.FC = () => {
  const [view, setView] = useState<'closed' | 'menu' | 'match3' | 'space'>('closed');

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setView(view === 'closed' ? 'menu' : 'closed')}
        className="fixed bottom-6 right-28 z-[90] p-4 rounded-full bg-primary text-white shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.8)] transition-shadow flex items-center justify-center group"
      >
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
        {view === 'closed' ? (
          <Gamepad2 size={28} className="relative z-10 group-hover:rotate-12 transition-transform" />
        ) : (
          <X size={28} className="relative z-10" />
        )}
      </motion.button>

      {/* Game Selection Menu */}
      <AnimatePresence>
        {view === 'menu' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-[100] w-80 glass-card p-6 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-black text-white mb-1 tracking-tight">CENTRO DE JUEGOS</h3>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Elige tu aventura espacial</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setView('match3')}
                className="w-full group relative overflow-hidden p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="p-3 rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Match Master</h4>
                    <p className="text-xs text-slate-500">Puzzle premium de gemas</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setView('space')}
                className="w-full group relative overflow-hidden p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Space Defender</h4>
                    <p className="text-xs text-slate-500">Acción y disparos galácticos</p>
                  </div>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game Overlays */}
      <AnimatePresence>
        {view === 'match3' && (
          <Match3Game onClose={() => setView('menu')} />
        )}
        {view === 'space' && (
          <SpaceGame onClose={() => setView('menu')} />
        )}
      </AnimatePresence>
    </>
  );
};

export default GameFloatingButton;
