import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { Layout, Server, Cpu, Database, Cloud, Zap } from 'lucide-react';

const Tech: React.FC = () => {
  const { t } = useApp();

  const techStack = [
    {
      category: t.tech.frontend,
      icon: <Layout size={24} className="text-primary" />,
      skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    },
    {
      category: t.tech.backend,
      icon: <Server size={24} className="text-primary" />,
      skills: ['Node.js', 'Express', 'APIs REST', 'GraphQL', 'Firebase', 'Supabase'],
    },
    {
      category: t.tech.ai,
      icon: <Cpu size={24} className="text-primary" />,
      skills: ['IA Generativa', 'Automatización con IA', 'Chatbots', 'Análisis de Datos', 'Gemini API'],
    },
  ];

  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            {t.nav.tech}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Stack Tecnológico
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techStack.map((stack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-8 rounded-[2rem] group hover:bg-primary/5 transition-all duration-500"
            >
              <div className="p-4 rounded-2xl bg-primary/10 w-fit mb-8 group-hover:scale-110 transition-transform">
                {stack.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-3">
                {stack.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 hover:text-white hover:border-primary/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling Tech Icons (Decorative) */}
        <div className="mt-24 flex overflow-hidden gap-12 opacity-20 grayscale">
          {[1, 2].map((_, i) => (
            <div key={i} className="flex gap-12 animate-scroll whitespace-nowrap">
              <Database size={48} />
              <Cloud size={48} />
              <Zap size={48} />
              <Layout size={48} />
              <Server size={48} />
              <Cpu size={48} />
              <Database size={48} />
              <Cloud size={48} />
              <Zap size={48} />
              <Layout size={48} />
              <Server size={48} />
              <Cpu size={48} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
