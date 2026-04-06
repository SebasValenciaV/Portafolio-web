import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { Download, Send, Phone, Mail, Github, Linkedin, Twitter, ExternalLink, User, Building, MessageSquare, Briefcase, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const RecruitersAndContact: React.FC = () => {
  const { t } = useApp();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={24} />, url: 'https://github.com/SebasValenciaV?tab=repositories' },
    { name: 'LinkedIn', icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/sebastian-valencia-v-23506b243' },
  ];

  return (
    <div className="space-y-24 py-24">
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
              ¿Buscas talento tecnológico?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              He desarrollado proyectos de alto impacto utilizando las tecnologías más modernas del mercado. Mi enfoque está en la escalabilidad, el rendimiento y la experiencia de usuario.
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
                Ver Repositorios
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ perspective: 1000 }}
          >
            <motion.div style={{ transformStyle: 'preserve-3d' }} whileHover={{ rotateX: 2, rotateY: 2, scale: 1.02, z: 20 }}>
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block" style={{ transform: 'translateZ(10px)' }}>
                {t.contact.title}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight" style={{ transform: 'translateZ(20px)' }}>
                Iniciemos tu próximo gran proyecto digital.
              </h2>
              <p className="text-lg text-slate-400 mb-12 leading-relaxed" style={{ transform: 'translateZ(15px)' }}>
                Estoy listo para ayudarte a transformar tus ideas en soluciones tecnológicas de alto impacto. Contáctame hoy mismo.
              </p>

              <div className="space-y-8 mb-12" style={{ transform: 'translateZ(25px)' }}>
                <div className="flex items-center gap-6 group">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Llámanos</p>
                    <p className="text-xl font-bold text-white">+57 3168859466</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Email</p>
                    <p className="text-xl font-bold text-white">sebasvalenciav.gia@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4" style={{ transform: 'translateZ(30px)' }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl glass border border-white/10 text-slate-400 hover:text-white hover:bg-primary transition-all hover:-translate-y-1 shadow-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 rounded-[2.5rem] border border-white/10 shadow-2xl"
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            whileHover={{ rotateX: -2, rotateY: -2, scale: 1.02, z: 20 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" style={{ transform: 'translateZ(30px)' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-2">{t.contact.name}</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-2">{t.contact.email}</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-2">{t.contact.company}</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      type="text"
                      placeholder="Nombre de tu empresa"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-2">{t.contact.projectType}</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <select
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    >
                      <option value="" className="bg-slate-900">Seleccionar tipo</option>
                      <option value="web" className="bg-slate-900">Sitio Web</option>
                      <option value="app" className="bg-slate-900">Aplicación Web</option>
                      <option value="automation" className="bg-slate-900">Automatización</option>
                      <option value="other" className="bg-slate-900">Otro</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-2">{t.contact.message}</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-slate-500" size={18} />
                  <textarea
                    required
                    rows={4}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={cn(
                  "w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-2xl group",
                  isSubmitted 
                    ? "bg-green-500 text-white cursor-default" 
                    : "bg-primary text-white hover:scale-[1.02] shadow-primary/30"
                )}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 size={20} />
                    ¡Mensaje Enviado!
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    {t.contact.button}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RecruitersAndContact;
