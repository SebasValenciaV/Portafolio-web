import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../../context/AppContext';
import { ShoppingBag, Briefcase, Building2, HeartPulse, GraduationCap, Rocket, Cpu, CheckCircle2 } from 'lucide-react';

const SectorsAndSolutions: React.FC = () => {
  const { t } = useApp();

  const sectors = [
    { name: t.sectors.ecommerce, icon: <ShoppingBag size={24} /> },
    { name: t.sectors.services, icon: <Briefcase size={24} /> },
    { name: t.sectors.construction, icon: <Building2 size={24} /> },
    { name: t.sectors.health, icon: <HeartPulse size={24} /> },
    { name: t.sectors.education, icon: <GraduationCap size={24} /> },
    { name: t.sectors.startups, icon: <Rocket size={24} /> },
    { name: t.sectors.tech, icon: <Cpu size={24} /> },
  ];

  const solutions = [
    { title: t.solutions.web, desc: "Desarrollo de sitios web profesionales a medida." },
    { title: t.solutions.landing, desc: "Landing pages optimizadas para la conversión." },
    { title: t.solutions.custom, desc: "Sistemas web complejos y personalizados." },
    { title: t.solutions.automation, desc: "Automatización de procesos digitales." },
    { title: t.solutions.dashboards, desc: "Visualización de datos y dashboards." },
    { title: t.solutions.ai, desc: "Integración de inteligencia artificial." },
    { title: t.solutions.portals, desc: "Portales empresariales y de clientes." },
  ];

  return (
    <div className="space-y-24 py-24">
      {/* Sectors Section */}
      <section id="sectors" className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            {t.sectors.title}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Soluciones para cada industria
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center gap-4 text-center group hover:bg-primary/10 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                {sector.icon}
              </div>
              <span className="text-xs font-bold text-slate-300 group-hover:text-white uppercase tracking-wider">
                {sector.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section id="services" className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            {t.solutions.title}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            ¿Qué puedo desarrollar para ti?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl flex items-start gap-6 group hover:bg-primary/5 transition-all duration-500"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {solution.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectorsAndSolutions;
