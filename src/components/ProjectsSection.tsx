import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import { ChefPulseCaseStudy } from './ChefPulseCaseStudy';
import { ProjectShowcaseCard } from './ProjectShowcaseCard';
import { OTHER_PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
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
            <FolderGit2 className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">PORTFOLIO WORK</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC]">
            FEATURED <span className="text-[#00E5FF]">PROJECTS</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] rounded-full" />
        </motion.div>

        {/* 1. CHEFPULSE FEATURED CASE STUDY (ONLY ONCE) */}
        <ChefPulseCaseStudy />

        {/* 2. OTHER FEATURED PROJECT SHOWCASES (ApexTracker AI & ResQAI) */}
        <div className="space-y-12">
          {OTHER_PROJECTS.map((project, index) => (
            <ProjectShowcaseCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
