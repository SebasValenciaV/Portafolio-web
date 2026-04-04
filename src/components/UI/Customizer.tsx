import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { X, Moon, Sun, Palette, Music, Volume2, Sparkles, Sliders } from 'lucide-react';
import { cn } from '../../lib/utils';

const Customizer: React.FC = () => {
  const { settings, updateSettings } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    window.addEventListener('toggle-customizer', handleToggle);
    return () => window.removeEventListener('toggle-customizer', handleToggle);
  }, []);

  const colors = [
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Purple', value: '#a855f7' },
    { name: 'Emerald', value: '#10b981' },
    { name: 'Rose', value: '#f43f5e' },
    { name: 'Amber', value: '#f59e0b' },
    { name: 'Indigo', value: '#6366f1' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm z-[70] glass border-l border-white/10 shadow-2xl p-8 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Sliders size={20} />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">Personalización</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/5 transition-colors text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-10">
              {/* Theme Color */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                  <Palette size={16} />
                  Color Principal
                </div>
                <div className="grid grid-cols-6 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => updateSettings({ themeColor: color.value })}
                      className={cn(
                        'w-full aspect-square rounded-lg transition-all hover:scale-110',
                        settings.themeColor === color.value ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950 scale-110' : 'opacity-60 hover:opacity-100'
                      )}
                      style={{ backgroundColor: color.value }}
                    />
                  ))}
                </div>
              </div>

              {/* Dark Mode */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                  {settings.isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
                  Modo de Visualización
                </div>
                <div className="flex p-1 rounded-xl bg-white/5 border border-white/10">
                  <button
                    onClick={() => updateSettings({ isDarkMode: true })}
                    className={cn(
                      'flex-1 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all',
                      settings.isDarkMode ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-white'
                    )}
                  >
                    <Moon size={16} />
                    Oscuro
                  </button>
                  <button
                    onClick={() => updateSettings({ isDarkMode: false })}
                    className={cn(
                      'flex-1 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all',
                      !settings.isDarkMode ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-white'
                    )}
                  >
                    <Sun size={16} />
                    Claro
                  </button>
                </div>
              </div>

              {/* Visual Effects */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                    <Sparkles size={16} />
                    Efectos Visuales
                  </div>
                  <button
                    onClick={() => updateSettings({ visualEffects: !settings.visualEffects })}
                    className={cn(
                      'w-12 h-6 rounded-full transition-all relative',
                      settings.visualEffects ? 'bg-primary' : 'bg-white/10'
                    )}
                  >
                    <div className={cn(
                      'absolute top-1 w-4 h-4 rounded-full bg-white transition-all',
                      settings.visualEffects ? 'left-7' : 'left-1'
                    )} />
                  </button>
                </div>
              </div>

              {/* Music Settings */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                    <Music size={16} />
                    Música Ambiental
                  </div>
                  <button
                    onClick={() => updateSettings({ musicEnabled: !settings.musicEnabled })}
                    className={cn(
                      'w-12 h-6 rounded-full transition-all relative',
                      settings.musicEnabled ? 'bg-primary' : 'bg-white/10'
                    )}
                  >
                    <div className={cn(
                      'absolute top-1 w-4 h-4 rounded-full bg-white transition-all',
                      settings.musicEnabled ? 'left-7' : 'left-1'
                    )} />
                  </button>
                </div>
                {settings.musicEnabled && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      <span>Volumen</span>
                      <span>{Math.round(settings.volume * 100)}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Volume2 size={16} className="text-slate-500" />
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={settings.volume}
                        onChange={(e) => updateSettings({ volume: parseFloat(e.target.value) })}
                        className="flex-1 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/5">
              <p className="text-xs text-slate-500 text-center leading-relaxed">
                Personaliza tu experiencia para que el portafolio se adapte a tu estilo visual preferido.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
