import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { X, Moon, Sun, Palette, Music, Volume2, Sparkles, Sliders, Play, Pause } from 'lucide-react';
import { cn } from '../../lib/utils';

const Customizer: React.FC = () => {
  const { settings, updateSettings, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    window.addEventListener('toggle-customizer', handleToggle);
    return () => window.removeEventListener('toggle-customizer', handleToggle);
  }, []);

  const colors = [
    // Claros / Pasteles
    { name: 'Rojo Claro', value: '#fca5a5' },
    { name: 'Naranja Claro', value: '#fdba74' },
    { name: 'Amarillo Claro', value: '#fde047' },
    { name: 'Verde Claro', value: '#86efac' },
    { name: 'Azul Claro', value: '#93c5fd' },
    { name: 'Morado Claro', value: '#d8b4fe' },

    // Vibrantes / Medios
    { name: 'Rojo', value: '#ef4444' },
    { name: 'Naranja', value: '#f97316' },
    { name: 'Amarillo', value: '#eab308' },
    { name: 'Verde', value: '#22c55e' },
    { name: 'Azul', value: '#3b82f6' },
    { name: 'Morado', value: '#a855f7' },

    // Alternativos / Fríos
    { name: 'Rosa', value: '#ec4899' },
    { name: 'Fucsia', value: '#d946ef' },
    { name: 'Índigo', value: '#6366f1' },
    { name: 'Cian', value: '#06b6d4' },
    { name: 'Teal', value: '#14b8a6' },
    { name: 'Esmeralda', value: '#10b981' },

    // Oscuros / Profundos
    { name: 'Rojo Oscuro', value: '#991b1b' },
    { name: 'Naranja Oscuro', value: '#9a3412' },
    { name: 'Amarillo Oscuro', value: '#854d0e' },
    { name: 'Verde Oscuro', value: '#166534' },
    { name: 'Azul Oscuro', value: '#1e40af' },
    { name: 'Morado Oscuro', value: '#6b21a8' },

    // Tonos Tierra y Neutros
    { name: 'Rosa Oscuro', value: '#9d174d' },
    { name: 'Cian Oscuro', value: '#155e75' },
    { name: 'Teal Oscuro', value: '#115e59' },
    { name: 'Lima', value: '#84cc16' },
    { name: 'Oliva', value: '#3f6212' },
    { name: 'Marrón', value: '#78350f' },

    // Escala de Grises y Negro
    { name: 'Blanco', value: '#ffffff' },
    { name: 'Gris Claro', value: '#d1d5db' },
    { name: 'Gris Medio', value: '#6b7280' },
    { name: 'Gris Oscuro', value: '#374151' },
    { name: 'Casi Negro', value: '#111827' },
    { name: 'Negro', value: '#000000' },
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
            className="fixed inset-0 z-[60] bg-slate-900/40 dark:bg-slate-950/40 backdrop-blur-sm"
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
                <h2 className="text-xl font-bold text-white tracking-tight">{t.customizer.title}</h2>
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
                  {t.customizer.mainColor}
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
                  {t.customizer.displayMode}
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
                    {t.customizer.darkMode}
                  </button>
                  <button
                    onClick={() => updateSettings({ isDarkMode: false })}
                    className={cn(
                      'flex-1 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all',
                      !settings.isDarkMode ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-white'
                    )}
                  >
                    <Sun size={16} />
                    {t.customizer.lightMode}
                  </button>
                </div>
              </div>

              {/* Visual Effects */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                    <Sparkles size={16} />
                    {t.customizer.visualEffects}
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
                {settings.visualEffects && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      <span>{t.customizer.intensity}</span>
                      <span>{settings.effectsIntensity}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={settings.effectsIntensity}
                      onChange={(e) => updateSettings({ effectsIntensity: parseInt(e.target.value) })}
                      className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {settings.effectsPaused ? <Pause size={14} /> : <Play size={14} />}
                        {t.customizer.animations}
                      </div>
                      <button
                        onClick={() => updateSettings({ effectsPaused: !settings.effectsPaused })}
                        className={cn(
                          'w-12 h-6 rounded-full transition-all relative',
                          !settings.effectsPaused ? 'bg-primary' : 'bg-white/10'
                        )}
                      >
                        <div className={cn(
                          'absolute top-1 w-4 h-4 rounded-full bg-white transition-all',
                          !settings.effectsPaused ? 'left-7' : 'left-1'
                        )} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Music Settings */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                    <Music size={16} />
                    {t.music.ambientMusic}
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
                      <span>{t.customizer.volume}</span>
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
                {t.customizer.description}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
