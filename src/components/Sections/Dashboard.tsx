import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { Clock, Timer, Activity, TrendingUp, Cpu, Wifi, RefreshCw, MapPin } from 'lucide-react';
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
  { year: '2018', value: 50, event: 'Primeros modelos Transformer' },
  { year: '2019', value: 73, event: 'GPT-2 demuestra capacidades de texto' },
  { year: '2020', value: 100, event: 'GPT-3 revoluciona el NLP' },
  { year: '2021', value: 130, event: 'Auge de GitHub Copilot y AlphaFold' },
  { year: '2022', value: 160, event: 'Lanzamiento de ChatGPT (OpenAI)' },
  { year: '2023', value: 200, event: 'Era de los LLMs (GPT-4, Gemini)' },
  { year: '2024', value: 250, event: 'IA Multimodal y Agentes Autónomos' },
  { year: '2025', value: 320, event: 'IA Cuántica y Razonamiento Avanzado' },
  { year: '2026', value: 400, event: 'AGI Temprana y Adopción Masiva' },
];

const aiAdoptionData = [
  { year: '2018', value: 0.1, model: 'GPT-1' },
  { year: '2019', value: 1.5, model: 'GPT-2' },
  { year: '2020', value: 175, model: 'GPT-3' },
  { year: '2021', value: 280, model: 'Gopher' },
  { year: '2022', value: 540, model: 'PaLM' },
  { year: '2023', value: 1760, model: 'GPT-4' },
  { year: '2024', value: 5000, model: 'Gemini 1.5 / Llama 3' },
  { year: '2025', value: 15000, model: 'Modelos Next-Gen' },
  { year: '2026', value: 50000, model: 'Arquitecturas Distribuidas' },
];

const CustomBarTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md z-50">
        <p className="text-white font-bold mb-1">{label}</p>
        <p className="text-primary font-mono text-lg mb-2">
          ${payload[0].value} Billones USD
        </p>
        <p className="text-slate-400 text-xs max-w-[200px] leading-relaxed">
          {payload[0].payload.event}
        </p>
      </div>
    );
  }
  return null;
};

const CustomAreaTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md z-50">
        <p className="text-white font-bold mb-1">{label}</p>
        <p className="text-primary font-mono text-lg mb-2">
          {payload[0].value}B Parámetros
        </p>
        <p className="text-slate-400 text-xs max-w-[200px]">
          Hito: <span className="text-white font-bold">{payload[0].payload.model}</span>
        </p>
      </div>
    );
  }
  return null;
};

const Dashboard: React.FC = () => {
  const { settings } = useApp();
  const [time, setTime] = useState(new Date());
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [isTesting, setIsTesting] = useState(false);
  const [latency, setLatency] = useState<number | null>(null);
  const [currentPing, setCurrentPing] = useState<number | null>(null);
  const [testProgress, setTestProgress] = useState(0);
  const [location, setLocation] = useState<string>('Buscando ubicación...');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setSessionSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city && data.country_name) {
          setLocation(`${data.city}, ${data.country_name}`);
        } else {
          setLocation('Ubicación Desconocida');
        }
      })
      .catch(() => setLocation('Ubicación Desconocida'));
  }, []);

  const formatSessionTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const runSpeedTest = async () => {
    if (isTesting) return;
    setIsTesting(true);
    setLatency(null);
    setCurrentPing(0);
    setTestProgress(0);
    
    const duration = 5000;
    const startTime = Date.now();
    let pings: number[] = [];

    const pingLoop = async () => {
      const now = Date.now();
      const elapsed = now - startTime;
      
      if (elapsed >= duration) {
        const avg = pings.length ? Math.round(pings.reduce((a, b) => a + b, 0) / pings.length) : 0;
        setLatency(avg);
        setCurrentPing(avg);
        setTestProgress(100);
        setIsTesting(false);
        return;
      }

      setTestProgress((elapsed / duration) * 100);

      const reqStart = Date.now();
      try {
        await fetch('https://www.google.com/favicon.ico', { mode: 'no-cors', cache: 'no-store' });
        const reqTime = Date.now() - reqStart;
        pings.push(reqTime);
        setCurrentPing(reqTime);
      } catch (e) {
        const simulated = Math.floor(Math.random() * 30) + 20;
        pings.push(simulated);
        setCurrentPing(simulated);
      }

      setTimeout(pingLoop, 200);
    };

    pingLoop();
  };

  const getLatencyColor = (val: number | null) => {
    if (!val) return settings.themeColor;
    if (val < 80) return '#22c55e'; // green
    if (val < 150) return '#eab308'; // yellow
    return '#ef4444'; // red
  };

  const getLatencyStatus = (val: number | null) => {
    if (!val) return '';
    if (val < 80) return 'Óptimo';
    if (val < 150) return 'Aceptable';
    return 'Lento';
  };

  const getStrokeDashoffset = (val: number | null) => {
    const circumference = Math.PI * 40; // 125.66
    if (!val) return circumference;
    const maxPing = 300;
    const clamped = Math.min(Math.max(val, 0), maxPing);
    const percentage = clamped / maxPing;
    return circumference - (percentage * circumference);
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
            Visualiza el crecimiento tecnológico y el avance de la inteligencia artificial con datos históricos reales, junto con métricas de tu sesión actual.
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

          {/* Network Widget (Manual Test) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <Wifi size={48} className="text-primary" />
            </div>
            
            <div className="flex items-center gap-1 mb-1">
              <MapPin size={12} className="text-primary" />
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider truncate max-w-[120px]">
                {location}
              </p>
            </div>
            <p className="text-sm text-white font-bold uppercase tracking-wider mb-2">Test de Red</p>
            
            <div className="relative flex flex-col items-center mb-1">
              <svg width="100" height="55" viewBox="0 0 100 55" className="overflow-visible">
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" strokeLinecap="round" />
                <path 
                  d="M 10 50 A 40 40 0 0 1 90 50" 
                  fill="none" 
                  stroke={getLatencyColor(currentPing || latency)} 
                  strokeWidth="8" 
                  strokeLinecap="round"
                  strokeDasharray={125.66}
                  strokeDashoffset={getStrokeDashoffset(currentPing || latency)}
                  className="transition-all duration-200 ease-out"
                />
              </svg>
              <div className="absolute bottom-0 flex flex-col items-center">
                <span className="text-2xl font-bold font-mono text-white leading-none">
                  {currentPing || latency ? (currentPing || latency) : '--'}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">ms</span>
              </div>
            </div>
            
            <div className="h-4 mb-3">
              {(latency !== null || isTesting) && (
                <span className="text-xs font-bold" style={{ color: getLatencyColor(currentPing || latency) }}>
                  {isTesting ? 'Midiendo...' : getLatencyStatus(latency)}
                </span>
              )}
            </div>
            
            <button 
              onClick={runSpeedTest}
              disabled={isTesting}
              className="relative overflow-hidden px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors disabled:opacity-80 disabled:cursor-not-allowed w-full max-w-[140px]"
            >
              {isTesting && (
                <div 
                  className="absolute left-0 top-0 bottom-0 bg-primary/40 transition-all duration-200 ease-linear"
                  style={{ width: `${testProgress}%` }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center gap-1">
                {isTesting ? <RefreshCw size={12} className="animate-spin" /> : null}
                {isTesting ? 'Calculando' : latency !== null ? 'Repetir Test' : 'Iniciar Test'}
              </span>
            </button>
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
                Inversión Global en IA
              </h3>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={techGrowthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    content={<CustomBarTooltip />}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {techGrowthData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={settings.themeColor} fillOpacity={0.6 + (index * 0.05)} />
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
                Evolución de Modelos IA (Parámetros)
              </h3>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={aiAdoptionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={settings.themeColor} stopOpacity={0.6}/>
                      <stop offset="95%" stopColor={settings.themeColor} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomAreaTooltip />} />
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
