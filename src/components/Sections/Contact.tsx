import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { Download, Github } from 'lucide-react';

const RecruitersSection: React.FC = () => {
  const { t } = useApp();

  return (
    <div className="py-24">
      {/* Recruiters Section */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-[3rem] text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              {t.recruiters.title}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {t.recruiters.heading}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              {t.recruiters.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-8 py-4 rounded-2xl bg-primary text-white font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-primary/20">
                <Download size={20} />
                {t.recruiters.downloadCV}
              </button>
              <a
                href="https://github.com/SebasValenciaV?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl glass border border-white/10 text-white font-bold flex items-center gap-3 hover:bg-white/10 hover:scale-105 transition-all"
              >
                <Github size={20} />
                {t.recruiters.viewRepos}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecruitersSection;
