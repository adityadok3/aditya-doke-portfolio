import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Cpu, Wrench, Info } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5 text-[#00E5FF]" />,
  Layout: <Layout className="w-5 h-5 text-[#00E5FF]" />,
  Server: <Server className="w-5 h-5 text-[#00E5FF]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#00E5FF]" />,
  Wrench: <Wrench className="w-5 h-5 text-[#00E5FF]" />,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#00E5FF]/20 text-[#00E5FF] mb-3">
            <Cpu className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC]">
            TECHNICAL <span className="text-[#00E5FF]">SKILLS</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] rounded-full" />
          
          {/* Explicit Prompt Disclaimer Note */}
          <div className="mt-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111827]/80 border border-[#1E293B] text-xs text-[#94A3B8] max-w-xl">
            <Info className="w-4 h-4 text-[#00E5FF] shrink-0" />
            <span>Note: These percentages represent self-assessed proficiency levels.</span>
          </div>
        </motion.div>

        {/* 5 Distinct Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-[#1E293B] flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#1E293B]">
                  <div className="p-2.5 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20">
                    {ICON_MAP[category.iconName]}
                  </div>
                  <h3 className="font-outfit text-lg font-bold text-[#F8FAFC]">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-[#F8FAFC]">{skill.name}</span>
                        <span className="font-mono text-[#00E5FF]">{skill.percentage}%</span>
                      </div>
                      
                      {/* Animated Progress Bar Track */}
                      <div className="h-2 w-full bg-[#0A0F1C] rounded-full overflow-hidden border border-[#1E293B]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                          className="h-full rounded-full bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] shadow-[0_0_8px_rgba(0,229,255,0.4)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
