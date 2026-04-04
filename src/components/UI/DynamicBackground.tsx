import React, { useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';

const DynamicBackground: React.FC = () => {
  const { settings } = useApp();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!settings.visualEffects) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; z: number; size: number }[] = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 1500);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * canvas.width,
          size: Math.random() * 1.2 + 0.3,
        });
      }
    };

    const draw = () => {
      // Clear with a slight opacity for trail effect
      ctx.fillStyle = settings.isDarkMode ? 'rgba(2, 6, 23, 0.3)' : 'rgba(248, 250, 252, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      
      ctx.fillStyle = settings.isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(15, 23, 42, 0.9)';

      // Speed based on intensity, 0 if paused
      const speed = settings.effectsPaused ? 0 : (settings.effectsIntensity / 50) * 3;

      stars.forEach(star => {
        star.z -= speed;
        
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width - cx;
          star.y = Math.random() * canvas.height - cy;
        }
        
        const projectedX = (star.x / star.z) * canvas.width + cx;
        const projectedY = (star.y / star.z) * canvas.width + cy;
        const projectedSize = (star.size / star.z) * 100;
        
        if (projectedX >= 0 && projectedX <= canvas.width && projectedY >= 0 && projectedY <= canvas.height) {
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [settings.effectsIntensity, settings.effectsPaused, settings.isDarkMode, settings.visualEffects]);

  if (!settings.visualEffects) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-50/80 to-slate-50 dark:via-slate-950/80 dark:to-slate-950" />
    </div>
  );
};

export default DynamicBackground;
