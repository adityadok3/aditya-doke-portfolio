import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu } from 'lucide-react';
import { ABOUT_TEXT } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#00E5FF]/20 text-[#00E5FF] mb-3">
            <User className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">BIO & BACKGROUND</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC]">
            ABOUT <span className="text-[#00E5FF]">ME</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] rounded-full" />
        </motion.div>

        {/* Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#1E293B] shadow-2xl overflow-hidden max-w-5xl mx-auto"
        >
          {/* Subtle Corner Tech Accents */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-[#00E5FF]/5 rounded-br-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#7C3AED]/5 rounded-tl-full pointer-events-none" />
          
          <div className="absolute top-4 right-6 flex items-center gap-2 text-[#00E5FF]/30 font-mono text-xs pointer-events-none">
            <Cpu className="w-4 h-4" />
            <span>SYS_IDENTITY // ROBOTICS_AUT</span>
          </div>

          {/* Text Content */}
          <div className="space-y-6 relative z-10 text-[#94A3B8] text-base sm:text-lg leading-relaxed">
            {ABOUT_TEXT.map((paragraph, idx) => (
              <p key={idx} className="font-normal">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Highlights Badges */}
          <div className="mt-10 pt-8 border-t border-[#1E293B] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3.5 rounded-xl bg-[#111827]/60 border border-[#1E293B]">
              <span className="block text-xs font-mono text-[#00E5FF] mb-1">FOCUS AREA</span>
              <span className="text-sm font-semibold text-[#F8FAFC]">Robotics & AI</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#111827]/60 border border-[#1E293B]">
              <span className="block text-xs font-mono text-[#7C3AED] mb-1">COLLEGE</span>
              <span className="text-sm font-semibold text-[#F8FAFC]">AISSMS COE Pune</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#111827]/60 border border-[#1E293B]">
              <span className="block text-xs font-mono text-[#00E5FF] mb-1">SKILLSET</span>
              <span className="text-sm font-semibold text-[#F8FAFC]">Full-Stack & Systems</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#111827]/60 border border-[#1E293B]">
              <span className="block text-xs font-mono text-[#7C3AED] mb-1">PASSION</span>
              <span className="text-sm font-semibold text-[#F8FAFC]">Entrepreneurship</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
