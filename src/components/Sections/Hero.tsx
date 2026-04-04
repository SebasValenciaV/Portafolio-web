import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, Code, Rocket, Globe } from 'lucide-react';
import { cn } from '../../lib/utils';

const Hero: React.FC = () => {
  const { t } = useApp();

  const metrics = [
    { label: t.hero.metrics.projects, value: '50+', icon: <Rocket size={20} className="text-primary" /> },
    { label: t.hero.metrics.tech, value: '15+', icon: <Code size={20} className="text-primary" /> },
    { label: t.hero.metrics.sectors, value: '10+', icon: <Globe size={20} className="text-primary" /> },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium text-primary mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {t.nav.home}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-gradient"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-2xl bg-primary text-white font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">{t.hero.cta1}</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-2xl glass border border-white/10 text-white font-bold transition-all hover:bg-white/10 hover:scale-105"
          >
            {t.hero.cta2}
          </a>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="glass-card p-6 rounded-3xl flex flex-col items-center gap-2 group"
            >
              <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                {metric.icon}
              </div>
              <span className="text-3xl font-bold text-white tracking-tight">{metric.value}</span>
              <span className="text-sm text-slate-400 font-medium">{metric.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
