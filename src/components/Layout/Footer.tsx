import React from 'react';
import { useApp } from '../../context/AppContext';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 relative overflow-hidden border-t border-slate-200 dark:border-white/5 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Portafolio<span className="text-primary">Web</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/SebasValenciaV?tab=repositories" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass border border-white/10 text-slate-400 hover:text-white hover:bg-primary transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sebastian-valencia-v-23506b243" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass border border-white/10 text-slate-400 hover:text-white hover:bg-primary transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t.footer.quickLinks}</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-400 hover:text-primary transition-colors text-sm">{t.nav.home}</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-primary transition-colors text-sm">{t.nav.about}</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-primary transition-colors text-sm">{t.nav.projects}</a></li>
              <li><a href="#tech" className="text-slate-400 hover:text-primary transition-colors text-sm">{t.nav.tech}</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-primary transition-colors text-sm">{t.nav.services}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{t.nav.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone size={16} className="text-primary" />
                +57 3168859466
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={16} className="text-primary" />
                sebasvalenciav.gia@gmail.com
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin size={16} className="text-primary" />
                Colombia
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-xs font-medium">
            © {currentYear} Portafolio Web. {t.footer.rights}
          </p>
          <button
            onClick={scrollToTop}
            className="p-4 rounded-2xl glass border border-white/10 text-slate-400 hover:text-white hover:bg-primary transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
