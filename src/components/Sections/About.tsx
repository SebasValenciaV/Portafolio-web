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
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden glass-card p-2">
              <img
                src="https://picsum.photos/seed/tech/800/800"
                alt="Tech Workspace"
                className="rounded-2xl w-full h-full object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="absolute top-1/2 -right-8 glass p-6 rounded-2xl shadow-2xl border border-white/10 animate-float hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                  10+
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Años de</p>
                  <p className="text-sm font-bold text-white">Experiencia</p>
                </div>
              </div>
            </div>
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
    </section>
  );
};

export default About;
