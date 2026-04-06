import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { ExternalLink } from 'lucide-react';
import { cn } from '../../lib/utils';

const Portfolio: React.FC = () => {
  const { t } = useApp();

  const projects = [
    {
      id: 'fugas',
      name: t.portfolio.projects.fugas.name,
      desc: t.portfolio.projects.fugas.desc,
      problem: t.portfolio.projects.fugas.problem,
      solution: t.portfolio.projects.fugas.solution,
      url: 'https://fugas-de-agua.vercel.app/',
      image: 'https://lh3.googleusercontent.com/d/18-A65zJSZ4PgYLWwCrreR9Jh0SMlmDHS',
      tech: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
      color: '#3b82f6',
    },
    {
      id: 'fitness',
      name: t.portfolio.projects.fitness.name,
      desc: t.portfolio.projects.fitness.desc,
      problem: t.portfolio.projects.fitness.problem,
      solution: t.portfolio.projects.fitness.solution,
      url: 'https://my-outlet-fitness.vercel.app/',
      image: 'https://lh3.googleusercontent.com/d/1M3cDiVgKrt7QpY78xze5I-u47gY58JtR',
      tech: ['React', 'Tailwind', 'E-commerce', 'Responsive Design'],
      color: '#ef4444',
    },
  ];

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            {t.nav.projects}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {t.portfolio.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ perspective: 1000 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative"
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02, z: 20 }}
            >
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-3xl glass-card p-4 aspect-[4/3] group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500" 
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <div className="flex gap-4">
                    <div className="flex-1 py-3 rounded-xl bg-white text-slate-950 font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all">
                      <ExternalLink size={18} />
                      {t.portfolio.viewProject}
                    </div>
                  </div>
                </div>
              </a>
              <div className="mt-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-slate-400 line-clamp-2">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
