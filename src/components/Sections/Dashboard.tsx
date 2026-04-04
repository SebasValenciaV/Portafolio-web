import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { Clock, Timer, Activity, TrendingUp, Cpu } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const techGrowthData = [
  { year: '2020', growth: 40 },
  { year: '2021', growth: 55 },
  { year: '2022', growth: 70 },
  { year: '2023', growth: 85 },
  { year: '2024', growth: 100 },
  { year: '2025', growth: 120 },
  { year: '2026', growth: 150 },
];

const aiAdoptionData = [
  { month: 'Ene', value: 20 },
  { month: 'Feb', value: 35 },
  { month: 'Mar', value: 45 },
  { month: 'Abr', value: 60 },
  { month: 'May', value: 80 },
  { month: 'Jun', value: 110 },
  { month: 'Jul', value: 140 },
];

const Dashboard: React.FC = () => {
  const { settings } = useApp();
  const [time, setTime] = useState(new Date());
  const [sessionSeconds, setSessionSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setSessionSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatSessionTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
            Dashboard
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Métricas en Tiempo Real
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Visualiza el crecimiento tecnológico y el avance de la inteligencia artificial, junto con datos de tu sesión actual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Clock Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <Clock size={48} className="text-primary" />
            </div>
            <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-2">Hora Local</p>
            <p className="text-3xl font-bold text-white tracking-tight font-mono">
              {time.toLocaleTimeString()}
            </p>
            <p className="text-xs text-slate-500 mt-2">
              {time.toLocaleDateString()}
            </p>
          </motion.div>

          {/* Session Timer Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <Timer size={48} className="text-primary" />
            </div>
            <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-2">Tiempo de Sesión</p>
            <p className="text-3xl font-bold text-white tracking-tight font-mono">
              {formatSessionTime(sessionSeconds)}
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Actividad detectada
            </p>
          </motion.div>

          {/* AI Status Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <Cpu size={48} className="text-primary" />
            </div>
            <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-2">Estado IA</p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-2xl font-bold text-white tracking-tight">
                Óptimo
              </p>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Sistemas en línea
            </p>
          </motion.div>

          {/* Network Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <Activity size={48} className="text-primary" />
            </div>
            <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-2">Latencia</p>
            <p className="text-3xl font-bold text-white tracking-tight font-mono">
              12<span className="text-lg text-slate-500">ms</span>
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Conexión estable
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tech Growth Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-3xl border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingUp size={20} className="text-primary" />
                Crecimiento Tecnológico
              </h3>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={techGrowthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                  />
                  <Bar dataKey="growth" radius={[4, 4, 0, 0]}>
                    {techGrowthData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={settings.themeColor} fillOpacity={0.8 + (index * 0.05)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* AI Adoption Area Chart (Trading Style) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-3xl border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Activity size={20} className="text-primary" />
                Adopción de IA (Tendencia)
              </h3>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={aiAdoptionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={settings.themeColor} stopOpacity={0.5}/>
                      <stop offset="95%" stopColor={settings.themeColor} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="value" stroke={settings.themeColor} strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
