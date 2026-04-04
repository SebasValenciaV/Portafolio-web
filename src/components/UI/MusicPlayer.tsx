import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { Music, Play, Pause, Minimize2, Maximize2, X, Volume2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const MusicPlayer: React.FC = () => {
  const { settings, updateSettings } = useApp();
  const [isMinimized, setIsMinimized] = useState(true);

  if (!settings.musicEnabled) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      className={cn(
        'fixed bottom-6 right-6 z-[80] glass border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500',
        isMinimized ? 'w-16 h-16' : 'w-80 h-[450px]'
      )}
    >
      {/* Minimized Button - Always present but only visible when minimized */}
      <button
        onClick={() => setIsMinimized(false)}
        className={cn(
          "absolute inset-0 flex items-center justify-center text-primary hover:bg-white/5 transition-all group z-10",
          !isMinimized && "opacity-0 pointer-events-none"
        )}
      >
        <Music size={24} className="group-hover:scale-110 transition-transform" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </div>
      </button>

      {/* Player Content - Always in DOM but hidden when minimized */}
      <div className={cn(
        "flex flex-col h-full transition-opacity duration-300",
        isMinimized ? "opacity-0 pointer-events-none" : "opacity-100"
      )}>
        <div className="p-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <Music size={16} />
            </div>
            <span className="text-sm font-bold text-white uppercase tracking-wider">Ambient Music</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(true)}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors text-slate-400 hover:text-white"
            >
              <Minimize2 size={16} />
            </button>
            <button
              onClick={() => updateSettings({ musicEnabled: false })}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors text-slate-400 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>
        </div>
        
        <div className="flex-1 p-4">
          <iframe
            title="Spotify Playlist"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/4Hf8CIVKsgFR1kxbyXCbS1?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

        <div className="p-4 bg-white/5 border-t border-white/5 flex items-center gap-4">
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
    </motion.div>
  );
};

export default MusicPlayer;
