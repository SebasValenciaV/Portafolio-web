import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

interface FuturisticSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const FuturisticSection: React.FC<FuturisticSectionProps> = ({ children, id, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
        animate={inView ? { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.2
          }
        } : {}}
        className="relative"
      >
        {/* Scanline effect on entrance */}
        {inView && (
          <motion.div
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 1, ease: "linear" }}
            className="absolute inset-0 z-20 pointer-events-none border-t-2 border-primary/30 bg-gradient-to-b from-primary/5 to-transparent h-1"
          />
        )}
        
        {/* Glitch-like reveal for children */}
        <motion.div
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={inView ? { clipPath: 'inset(0% 0 0 0)' } : {}}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FuturisticSection;
