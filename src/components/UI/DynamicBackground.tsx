import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';

const DynamicBackground: React.FC = () => {
  const { settings } = useApp();

  if (!settings.visualEffects) return null;

  const intensity = settings.effectsIntensity / 100;
  const isPaused = settings.effectsPaused;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-950">
      {/* Dynamic Gradient Orbs */}
      <motion.div
        animate={isPaused ? { opacity: 0.6 * intensity, scale: 1 } : {
          x: [0, 150 * intensity, -50 * intensity, 100 * intensity, 0],
          y: [0, -150 * intensity, 100 * intensity, -50 * intensity, 0],
          scale: [1, 1 + 0.4 * intensity, 1 - 0.1 * intensity, 1 + 0.3 * intensity, 1],
          opacity: [0.5 * intensity, 0.9 * intensity, 0.6 * intensity, 0.8 * intensity, 0.5 * intensity],
        }}
        transition={{
          duration: 15 / (0.5 + intensity),
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/40 rounded-full blur-[100px] mix-blend-screen"
      />
      <motion.div
        animate={isPaused ? { opacity: 0.5 * intensity, scale: 1 } : {
          x: [0, -120 * intensity, 80 * intensity, -100 * intensity, 0],
          y: [0, 120 * intensity, -60 * intensity, 100 * intensity, 0],
          scale: [1, 1 + 0.5 * intensity, 1 - 0.2 * intensity, 1 + 0.4 * intensity, 1],
          opacity: [0.4 * intensity, 0.8 * intensity, 0.5 * intensity, 0.7 * intensity, 0.4 * intensity],
        }}
        transition={{
          duration: 20 / (0.5 + intensity),
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/30 rounded-full blur-[120px] mix-blend-screen"
      />
      <motion.div
        animate={isPaused ? { opacity: 0.6 * intensity, scale: 1 } : {
          x: [0, 80 * intensity, -40 * intensity, 60 * intensity, 0],
          y: [0, 80 * intensity, -40 * intensity, 60 * intensity, 0],
          opacity: [0.5 * intensity, 0.9 * intensity, 0.6 * intensity, 0.8 * intensity, 0.5 * intensity],
          scale: [1, 1.3 * intensity, 0.9 * intensity, 1.2 * intensity, 1],
        }}
        transition={{
          duration: 12 / (0.5 + intensity),
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] right-[20%] w-[40%] h-[40%] bg-primary/35 rounded-full blur-[100px] mix-blend-screen"
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ 
          opacity: 0.08 * intensity,
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} 
      />
      
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" 
        style={{ opacity: 0.05 * intensity }}
      />
    </div>
  );
};

export default DynamicBackground;
