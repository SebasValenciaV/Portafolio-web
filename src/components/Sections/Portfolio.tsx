import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { ExternalLink, Info, X, Code, Target, Lightbulb } from 'lucide-react';
import { cn } from '../../lib/utils';

const Portfolio: React.FC = () => {
  const { t } = useApp();
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const projects = [
    {
      id: 'fugas',
      name: t.portfolio.projects.fugas.name,
      desc: t.portfolio.projects.fugas.desc,
      problem: t.portfolio.projects.fugas.problem,
      solution: t.portfolio.projects.fugas.solution,
      url: 'https://fugas-de-agua.vercel.app/',
      image: 'https://picsum.photos/seed/water/800/600',
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
      image: 'https://picsum.photos/seed/fitness/800/600',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl glass-card p-4 aspect-[4/3] group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-3 rounded-xl bg-white text-slate-950 font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all"
                    >
                      <Info size={18} />
                      {t.portfolio.viewProject}
                    </button>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl glass border border-white/20 text-white hover:bg-white/10 transition-all"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-4xl glass rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 rounded-full glass border border-white/10 text-white hover:bg-white/10 z-10"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-full relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/20" />
                </div>
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-bold text-white mb-6">{selectedProject.name}</h3>
                  
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 shrink-0 h-fit">
                        <Target size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{t.portfolio.problem}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.problem}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 shrink-0 h-fit">
                        <Lightbulb size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{t.portfolio.solution}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.solution}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 shrink-0 h-fit">
                        <Code size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{t.portfolio.details}</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech: string) => (
                            <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 flex gap-4">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 rounded-2xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl shadow-primary/20"
                    >
                      <ExternalLink size={20} />
                      {t.portfolio.viewProject}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
