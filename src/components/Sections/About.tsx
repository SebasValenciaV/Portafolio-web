import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useApp();

  const features = [
    { title: t.about.focus, icon: <Zap size={24} className="text-primary" /> },
    { title: t.about.innovation, icon: <ShieldCheck size={24} className="text-primary" /> },
    { title: "Confianza y capacidad técnica probada.", icon: <CheckCircle2 size={24} className="text-primary" /> },
  ];

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
            style={{ perspective: 1000 }}
          >
            <motion.div 
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05, z: 20 }}
              className="relative z-10 rounded-full overflow-hidden glass-card p-3 w-64 h-64 md:w-80 md:h-80 shadow-2xl shadow-primary/20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src="https://lh3.googleusercontent.com/d/1hIWG0_nbjB3I21oM3HRdCnQ-sDAhgVpO"
                alt="Sebastian Valencia"
                className="rounded-full w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              {t.nav.about}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
              {t.about.title}
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              {t.about.description}
            </p>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    {feature.icon}
                  </div>
                  <p className="text-slate-300 font-medium pt-1">{feature.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
