import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { Search, PenTool, Code2, ShieldCheck, Rocket, Quote } from 'lucide-react';

const ProcessAndReviews: React.FC = () => {
  const { t } = useApp();

  const steps = [
    { title: t.process.step1, icon: <Search size={24} />, color: 'from-blue-500 to-cyan-500' },
    { title: t.process.step2, icon: <PenTool size={24} />, color: 'from-purple-500 to-pink-500' },
    { title: t.process.step3, icon: <Code2 size={24} />, color: 'from-orange-500 to-red-500' },
    { title: t.process.step4, icon: <ShieldCheck size={24} />, color: 'from-green-500 to-emerald-500' },
    { title: t.process.step5, icon: <Rocket size={24} />, color: 'from-primary to-primary/60' },
  ];

  const reviews = [
    {
      name: "Carlos Rodriguez",
      role: "CEO, TechFlow",
      comment: "La capacidad de Sebas para comprender problemas complejos y transformarlos en simples soluciones digitales es increíble.",
    },
    {
      name: "Elena Martinez",
      role: "Directora de Marketing, Innova",
      comment: "Nuestras ventas aumentaron un 40% tras el rediseño de nuestra landing page. Un profesional excepcional.",
    },
    {
      name: "Ricardo Gomez",
      role: "Fundador, StartupX",
      comment: "La integración de IA que desarrolló para nuestro chatbot local cambió por completo nuestra atención al cliente.",
    },
  ];

  return (
    <div className="space-y-24 py-24 bg-slate-100/50 dark:bg-slate-950/50">
      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            {t.process.title}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Metodología de Trabajo
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-primary/20`}>
                  <div className="w-full h-full rounded-[1.4rem] bg-white dark:bg-slate-950 flex items-center justify-center text-slate-900 dark:text-white">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-xs font-bold text-primary">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            Testimonios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Lo que dicen mis clientes
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: 1000 }}>
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-8 rounded-[2.5rem] relative group hover:bg-primary/5 transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02, z: 20 }}
            >
              <div 
                className="absolute -top-4 -left-4 p-4 rounded-2xl bg-primary text-white shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform"
                style={{ transform: 'translateZ(40px)' }}
              >
                <Quote size={24} />
              </div>
              <p 
                className="text-slate-400 italic mb-8 leading-relaxed pt-4"
                style={{ transform: 'translateZ(20px)' }}
              >
                "{review.comment}"
              </p>
              <div 
                className="flex items-center gap-4"
                style={{ transform: 'translateZ(30px)' }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessAndReviews;
