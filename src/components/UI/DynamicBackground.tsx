import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';

const DynamicBackground: React.FC = () => {
  const { settings } = useApp();

  if (!settings.visualEffects) return null;

  const intensity = settings.effectsIntensity / 100;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Dynamic Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100 * intensity, 0],
          y: [0, -100 * intensity, 0],
          scale: [1, 1 + 0.2 * intensity, 1],
          opacity: [0.3 * intensity, 0.6 * intensity, 0.3 * intensity],
        }}
        transition={{
          duration: 20 / (0.5 + intensity),
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -100 * intensity, 0],
          y: [0, 100 * intensity, 0],
          scale: [1, 1 + 0.5 * intensity, 1],
          opacity: [0.2 * intensity, 0.4 * intensity, 0.2 * intensity],
        }}
        transition={{
          duration: 25 / (0.5 + intensity),
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, 50 * intensity, 0],
          y: [0, 50 * intensity, 0],
          opacity: [0.3 * intensity, 0.6 * intensity, 0.3 * intensity],
        }}
        transition={{
          duration: 15 / (0.5 + intensity),
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-primary/15 rounded-full blur-[100px]"
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ 
          opacity: 0.03 * intensity,
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} 
      />
      
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" 
        style={{ opacity: 0.02 * intensity }}
      />
    </div>
  );
};

export default DynamicBackground;
