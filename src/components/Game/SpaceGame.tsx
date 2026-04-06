import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { X, Trophy, Crosshair, Clock, RotateCcw, Play } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface SpaceGameProps {
  onClose: () => void;
}

const SpaceGame: React.FC<SpaceGameProps> = ({ onClose }) => {
  const { t } = useApp();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameover'>('menu');
  const [stats, setStats] = useState({ score: 0, enemies: 0, level: 1, time: 0 });
  
  // Game state ref to avoid stale closures in requestAnimationFrame
  const gameRef = useRef({
    player: { x: 0, y: 0, w: 30, h: 40, speed: 7, hp: 100, maxHp: 100, lastShot: 0, targetX: 0, targetY: 0 },
    keys: { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false, w: false, a: false, s: false, d: false, ' ': false },
    bullets: [] as any[],
    enemies: [] as any[],
    particles: [] as any[],
    planets: [] as any[],
    stars: [] as any[],
    score: 0,
    enemiesDefeated: 0,
    level: 1,
    startTime: 0,
    lastTime: 0,
    isMobile: false,
    isShooting: false,
  });

  const animationRef = useRef<number>();

  useEffect(() => {
    const checkMobile = () => {
      gameRef.current.isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const initGame = () => {
    setGameState('playing');
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const state = gameRef.current;
    state.player.x = canvas.width / 2;
    state.player.y = canvas.height - 100;
    state.player.targetX = state.player.x;
    state.player.targetY = state.player.y;
    state.player.hp = state.player.maxHp;
    state.bullets = [];
    state.enemies = [];
    state.particles = [];
    state.planets = [];
    state.score = 0;
    state.enemiesDefeated = 0;
    state.level = 1;
    state.startTime = Date.now();
    
    // Init stars
    state.stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 3 + 0.5,
      color: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`
    }));

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    gameLoop();
  };

  const spawnEnemy = (canvas: HTMLCanvasElement) => {
    const state = gameRef.current;
    // Spawn rate increases with level
    if (Math.random() < 0.02 + (state.level * 0.005)) {
      const type = Math.random();
      let hp = 20 + state.level * 10;
      let speed = 2 + state.level * 0.5;
      let color = '#ef4444';
      let w = 30, h = 30;

      if (type > 0.8) { // Tank
        hp *= 3; speed *= 0.5; color = '#f59e0b'; w = 50; h = 50;
      } else if (type > 0.6) { // Fast
        hp *= 0.5; speed *= 1.5; color = '#a855f7'; w = 20; h = 20;
      }

      state.enemies.push({
        x: Math.random() * (canvas.width - w),
        y: -h,
        w, h, hp, maxHp: hp, speed, color,
        vx: (Math.random() - 0.5) * 2 // slight horizontal drift
      });
    }
  };

  const spawnPlanet = (canvas: HTMLCanvasElement) => {
    const state = gameRef.current;
    if (Math.random() < 0.005 && state.planets.length < 3) {
      const r = Math.random() * 100 + 50;
      state.planets.push({
        x: Math.random() * canvas.width,
        y: -r,
        r,
        speed: Math.random() * 0.5 + 0.2,
        color1: `hsl(${Math.random() * 360}, 70%, 30%)`,
        color2: `hsl(${Math.random() * 360}, 70%, 10%)`,
      });
    }
  };

  const createExplosion = (x: number, y: number, color: string, count: number = 15) => {
    const state = gameRef.current;
    for (let i = 0; i < count; i++) {
      state.particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        life: 1,
        color,
        size: Math.random() * 4 + 2
      });
    }
  };

  const gameLoop = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const state = gameRef.current;
    const now = Date.now();
    
    // Resize canvas if needed
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    // --- UPDATE LOGIC ---
    
    // Level progression
    state.level = Math.floor(state.score / 1000) + 1;

    // Player movement
    if (state.isMobile) {
      // Smooth follow for touch
      const dx = state.player.targetX - state.player.x;
      const dy = state.player.targetY - state.player.y;
      state.player.x += dx * 0.15;
      state.player.y += dy * 0.15;
    } else {
      // Keyboard movement
      if (state.keys.ArrowLeft || state.keys.a) state.player.x -= state.player.speed;
      if (state.keys.ArrowRight || state.keys.d) state.player.x += state.player.speed;
      if (state.keys.ArrowUp || state.keys.w) state.player.y -= state.player.speed;
      if (state.keys.ArrowDown || state.keys.s) state.player.y += state.player.speed;
    }

    // Constrain player to screen
    state.player.x = Math.max(state.player.w/2, Math.min(canvas.width - state.player.w/2, state.player.x));
    state.player.y = Math.max(state.player.h/2, Math.min(canvas.height - state.player.h/2, state.player.y));

    // Shooting
    if ((state.keys[' '] || state.isShooting) && now - state.player.lastShot > 150) {
      state.bullets.push({
        x: state.player.x,
        y: state.player.y - state.player.h/2,
        w: 4, h: 15, speed: 15, color: '#0ea5e9', isPlayer: true
      });
      state.player.lastShot = now;
      
      // Double shot for higher levels
      if (state.level >= 3) {
        state.bullets.push({ x: state.player.x - 15, y: state.player.y, w: 4, h: 15, speed: 15, color: '#0ea5e9', isPlayer: true });
        state.bullets.push({ x: state.player.x + 15, y: state.player.y, w: 4, h: 15, speed: 15, color: '#0ea5e9', isPlayer: true });
      }
    }

    // Update Stars
    state.stars.forEach(star => {
      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    });

    // Update Planets
    spawnPlanet(canvas);
    for (let i = state.planets.length - 1; i >= 0; i--) {
      const p = state.planets[i];
      p.y += p.speed;
      if (p.y - p.r > canvas.height) state.planets.splice(i, 1);
    }

    // Update Bullets
    for (let i = state.bullets.length - 1; i >= 0; i--) {
      const b = state.bullets[i];
      b.y += b.isPlayer ? -b.speed : b.speed;
      if (b.y < 0 || b.y > canvas.height) state.bullets.splice(i, 1);
    }

    // Update Enemies & Collisions
    spawnEnemy(canvas);
    for (let i = state.enemies.length - 1; i >= 0; i--) {
      const e = state.enemies[i];
      e.y += e.speed;
      e.x += e.vx;
      
      // Bounce off walls
      if (e.x <= 0 || e.x + e.w >= canvas.width) e.vx *= -1;

      // Enemy shoots
      if (Math.random() < 0.01 && e.y > 0) {
        state.bullets.push({
          x: e.x + e.w/2, y: e.y + e.h, w: 4, h: 15, speed: 8, color: '#ef4444', isPlayer: false
        });
      }

      // Collision with player
      const distToPlayer = Math.hypot(e.x + e.w/2 - state.player.x, e.y + e.h/2 - state.player.y);
      if (distToPlayer < (e.w/2 + state.player.w/2)) {
        state.player.hp -= 20;
        createExplosion(e.x + e.w/2, e.y + e.h/2, e.color, 20);
        state.enemies.splice(i, 1);
        continue;
      }

      // Collision with player bullets
      let enemyDestroyed = false;
      for (let j = state.bullets.length - 1; j >= 0; j--) {
        const b = state.bullets[j];
        if (b.isPlayer && b.x > e.x && b.x < e.x + e.w && b.y > e.y && b.y < e.y + e.h) {
          e.hp -= 20;
          state.bullets.splice(j, 1);
          createExplosion(b.x, b.y, '#0ea5e9', 3); // Small hit spark
          
          if (e.hp <= 0) {
            createExplosion(e.x + e.w/2, e.y + e.h/2, e.color, 15);
            state.score += (e.maxHp);
            state.enemiesDefeated++;
            state.enemies.splice(i, 1);
            enemyDestroyed = true;
            break;
          }
        }
      }

      if (!enemyDestroyed && e.y > canvas.height) {
        state.enemies.splice(i, 1);
      }
    }

    // Player hit by enemy bullets
    for (let i = state.bullets.length - 1; i >= 0; i--) {
      const b = state.bullets[i];
      if (!b.isPlayer) {
        const dist = Math.hypot(b.x - state.player.x, b.y - state.player.y);
        if (dist < state.player.w/2) {
          state.player.hp -= 10;
          createExplosion(b.x, b.y, '#ef4444', 5);
          state.bullets.splice(i, 1);
        }
      }
    }

    // Update Particles
    for (let i = state.particles.length - 1; i >= 0; i--) {
      const p = state.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.02;
      if (p.life <= 0) state.particles.splice(i, 1);
    }

    // Check Game Over
    if (state.player.hp <= 0) {
      setStats({
        score: state.score,
        enemies: state.enemiesDefeated,
        level: state.level,
        time: Math.floor((now - state.startTime) / 1000)
      });
      setGameState('gameover');
      return; // Stop loop
    }

    // --- DRAW LOGIC ---
    
    // Clear background
    ctx.fillStyle = '#020617'; // Deep space blue/black
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Stars
    state.stars.forEach(star => {
      ctx.fillStyle = star.color;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI*2);
      ctx.fill();
    });

    // Draw Planets
    state.planets.forEach(p => {
      const grad = ctx.createRadialGradient(p.x - p.r*0.3, p.y - p.r*0.3, p.r*0.1, p.x, p.y, p.r);
      grad.addColorStop(0, p.color1);
      grad.addColorStop(1, p.color2);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
    });

    // Draw Particles
    state.particles.forEach(p => {
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    // Draw Bullets
    state.bullets.forEach(b => {
      ctx.shadowBlur = 10;
      ctx.shadowColor = b.color;
      ctx.fillStyle = b.color;
      ctx.fillRect(b.x - b.w/2, b.y - b.h/2, b.w, b.h);
    });
    ctx.shadowBlur = 0;

    // Draw Enemies
    state.enemies.forEach(e => {
      ctx.fillStyle = e.color;
      ctx.beginPath();
      ctx.moveTo(e.x + e.w/2, e.y + e.h); // Bottom point
      ctx.lineTo(e.x + e.w, e.y); // Top right
      ctx.lineTo(e.x + e.w/2, e.y + e.h/4); // Top middle indent
      ctx.lineTo(e.x, e.y); // Top left
      ctx.closePath();
      ctx.fill();
      
      // Enemy Health bar
      ctx.fillStyle = 'rgba(255,0,0,0.5)';
      ctx.fillRect(e.x, e.y - 10, e.w, 4);
      ctx.fillStyle = '#22c55e';
      ctx.fillRect(e.x, e.y - 10, e.w * (e.hp / e.maxHp), 4);
    });

    // Draw Player
    ctx.save();
    ctx.translate(state.player.x, state.player.y);
    
    // Engine glow
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#0ea5e9';
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.moveTo(-10, 10);
    ctx.lineTo(10, 10);
    ctx.lineTo(0, 25 + Math.random() * 15); // flickering flame
    ctx.fill();
    
    // Ship body
    ctx.shadowBlur = 0;
    const grad = ctx.createLinearGradient(0, -20, 0, 20);
    grad.addColorStop(0, '#f8fafc');
    grad.addColorStop(1, '#94a3b8');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, -20);
    ctx.lineTo(15, 15);
    ctx.lineTo(-15, 15);
    ctx.closePath();
    ctx.fill();
    
    // Cockpit
    ctx.fillStyle = '#0ea5e9';
    ctx.beginPath();
    ctx.moveTo(0, -5);
    ctx.lineTo(5, 5);
    ctx.lineTo(-5, 5);
    ctx.fill();
    ctx.restore();

    // Draw HUD
    ctx.fillStyle = 'white';
    ctx.font = 'bold 20px Inter, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${t.game.score}: ${state.score}`, 20, 40);
    ctx.fillText(`${t.game.level}: ${state.level}`, 20, 70);
    
    // Player Health Bar
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.fillRect(20, 90, 200, 15);
    ctx.fillStyle = state.player.hp > 30 ? '#22c55e' : '#ef4444';
    ctx.fillRect(20, 90, 200 * (Math.max(0, state.player.hp) / state.player.maxHp), 15);

    animationRef.current = requestAnimationFrame(gameLoop);
  };

  // Input Handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameRef.current.keys.hasOwnProperty(e.key)) {
        gameRef.current.keys[e.key as keyof typeof gameRef.current.keys] = true;
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (gameRef.current.keys.hasOwnProperty(e.key)) {
        gameRef.current.keys[e.key as keyof typeof gameRef.current.keys] = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Touch Handling for Mobile
  const handleTouchMove = (e: React.TouchEvent) => {
    if (gameState !== 'playing') return;
    const touch = e.touches[0];
    // Offset Y so finger doesn't cover ship
    gameRef.current.player.targetX = touch.clientX;
    gameRef.current.player.targetY = touch.clientY - 60; 
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center overflow-hidden"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-md"
      >
        <X size={24} />
      </button>

      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full touch-none cursor-crosshair ${gameState === 'playing' ? 'block' : 'hidden'}`}
        onTouchStart={(e) => {
          gameRef.current.isShooting = true;
          handleTouchMove(e);
        }}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => { gameRef.current.isShooting = false; }}
        onMouseDown={() => { gameRef.current.isShooting = true; }}
        onMouseUp={() => { gameRef.current.isShooting = false; }}
        onMouseLeave={() => { gameRef.current.isShooting = false; }}
      />

      {gameState === 'menu' && (
        <div className="relative z-10 glass-card p-12 rounded-[3rem] max-w-lg w-full mx-4 text-center border border-white/10 shadow-2xl">
          <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)]">
            <Play size={40} className="text-primary ml-2" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">{t.game.title}</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            {t.game.description}
          </p>
          
          <div className="bg-slate-900/50 rounded-2xl p-6 mb-8 text-left space-y-4 border border-white/5">
            <h3 className="text-white font-bold mb-2">{t.game.controls}:</h3>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <kbd className="px-2 py-1 bg-white/10 rounded-lg font-mono">W A S D</kbd> o <kbd className="px-2 py-1 bg-white/10 rounded-lg font-mono">{t.game.movement}</kbd>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <kbd className="px-2 py-1 bg-white/10 rounded-lg font-mono">{t.game.shoot}</kbd> o <kbd className="px-2 py-1 bg-white/10 rounded-lg font-mono">Click</kbd>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300 pt-2 border-t border-white/10">
              <span className="text-primary font-bold">{t.game.mobile}:</span> {t.game.mobileDesc}
            </div>
          </div>

          <button
            onClick={initGame}
            className="w-full py-4 rounded-2xl bg-primary text-white font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20"
          >
            {t.game.startMission}
          </button>
        </div>
      )}

      {gameState === 'gameover' && (
        <div className="relative z-10 glass-card p-12 rounded-[3rem] max-w-lg w-full mx-4 text-center border border-white/10 shadow-2xl">
          <h2 className="text-4xl font-bold text-red-500 mb-2">{t.game.missionFailed}</h2>
          <p className="text-slate-400 mb-8">{t.game.shipDestroyed}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
              <Trophy className="text-yellow-500 mx-auto mb-2" size={24} />
              <p className="text-xs text-slate-500 uppercase font-bold">{t.game.score}</p>
              <p className="text-2xl font-bold text-white">{stats.score}</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
              <Crosshair className="text-primary mx-auto mb-2" size={24} />
              <p className="text-xs text-slate-500 uppercase font-bold">{t.game.enemies}</p>
              <p className="text-2xl font-bold text-white">{stats.enemies}</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
              <div className="text-purple-500 font-bold text-2xl mx-auto mb-2">Lv</div>
              <p className="text-xs text-slate-500 uppercase font-bold">{t.game.level}</p>
              <p className="text-2xl font-bold text-white">{stats.level}</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
              <Clock className="text-emerald-500 mx-auto mb-2" size={24} />
              <p className="text-xs text-slate-500 uppercase font-bold">{t.game.time}</p>
              <p className="text-2xl font-bold text-white">{stats.time}s</p>
            </div>
          </div>

          <button
            onClick={initGame}
            className="w-full py-4 rounded-2xl bg-primary text-white font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} />
            {t.game.playAgain}
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default SpaceGame;
