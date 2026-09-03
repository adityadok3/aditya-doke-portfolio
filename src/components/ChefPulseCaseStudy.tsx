import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Users, Sparkles, AlertCircle, Lightbulb, Maximize2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { ImageLightbox } from './ImageLightbox';
import { CHEFPULSE_PROJECT } from '../data/portfolioData';

export const ChefPulseCaseStudy: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const project = CHEFPULSE_PROJECT;
  const screenshots = project.screenshots || [];

  return (
    <section className="relative z-10 mb-20">
      
      {/* Featured Case Study Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-12 border border-[#1E293B] shadow-[0_0_40px_rgba(0,229,255,0.1)] relative overflow-hidden"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#00E5FF]/10 via-[#7C3AED]/5 to-transparent blur-3xl pointer-events-none" />

        {/* Featured Case Study Badge Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-[#1E293B]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED CASE STUDY</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/30 text-xs font-mono font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>Developed by: {project.developedByNote}</span>
          </div>
        </div>

        {/* Mobile Header Title (Visible on mobile before photos per request order) */}
        <div className="block lg:hidden mb-6">
          <h3 className="font-outfit text-3xl sm:text-4xl font-extrabold text-[#F8FAFC]">
            {project.title}
          </h3>
          <p className="text-sm font-semibold text-[#00E5FF] mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Grid Layout: Left Gallery, Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT SIDE: SYMMETRICAL IMAGE GALLERY (3 PHOTO ARRANGEMENT) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono text-[#94A3B8] flex items-center justify-between">
              <span>PROJECT INTERFACE PREVIEW</span>
              <span className="text-[#00E5FF]">Click image for fullscreen lightbox</span>
            </div>

            {/* PHOTO 1: Large Wide Top Screenshot */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              onClick={() => openLightbox(0)}
              className="relative aspect-video rounded-2xl bg-[#0A0F1C] border border-[#1E293B] hover:border-[#00E5FF]/50 p-2 shadow-lg cursor-pointer transition-all duration-300 group overflow-hidden"
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-[#0A0F1C] border border-[#1E293B]/60 relative flex items-center justify-center">
                {screenshots[0]?.src ? (
                  <img
                    src={screenshots[0].src}
                    alt={screenshots[0].label}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-xs font-mono text-[#94A3B8]">{screenshots[0]?.label}</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 pointer-events-none">
                  <span className="text-xs font-mono text-[#00E5FF] flex items-center gap-1.5 font-medium">
                    <Maximize2 className="w-3.5 h-3.5" /> Fullscreen Lightbox
                  </span>
                </div>
              </div>
            </motion.div>

            {/* PHOTO 2 & PHOTO 3: Two Symmetrical Side-by-Side Screenshots */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => openLightbox(1)}
                className="relative aspect-video sm:aspect-[4/3] rounded-2xl bg-[#0A0F1C] border border-[#1E293B] hover:border-[#00E5FF]/50 p-2 shadow-lg cursor-pointer transition-all duration-300 group overflow-hidden"
              >
                <div className="w-full h-full rounded-xl overflow-hidden bg-[#0A0F1C] border border-[#1E293B]/60 relative flex items-center justify-center">
                  {screenshots[1]?.src ? (
                    <img
                      src={screenshots[1].src}
                      alt={screenshots[1].label}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5 pointer-events-none">
                    <span className="text-[11px] font-mono text-[#00E5FF] flex items-center gap-1 font-medium">
                      <Maximize2 className="w-3 h-3" /> Fullscreen
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => openLightbox(2)}
                className="relative aspect-video sm:aspect-[4/3] rounded-2xl bg-[#0A0F1C] border border-[#1E293B] hover:border-[#00E5FF]/50 p-2 shadow-lg cursor-pointer transition-all duration-300 group overflow-hidden"
              >
                <div className="w-full h-full rounded-xl overflow-hidden bg-[#0A0F1C] border border-[#1E293B]/60 relative flex items-center justify-center">
                  {screenshots[2]?.src ? (
                    <img
                      src={screenshots[2].src}
                      alt={screenshots[2].label}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5 pointer-events-none">
                    <span className="text-[11px] font-mono text-[#00E5FF] flex items-center gap-1 font-medium">
                      <Maximize2 className="w-3 h-3" /> Fullscreen
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* RIGHT SIDE: PROJECT TEXT CONTENT */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Desktop Header Title */}
            <div className="hidden lg:block">
              <h3 className="font-outfit text-4xl lg:text-5xl font-extrabold text-[#F8FAFC]">
                {project.title}
              </h3>
              <p className="text-base font-semibold text-[#00E5FF] mt-1.5">
                {project.subtitle}
              </p>
            </div>

            {/* About */}
            <div>
              <h4 className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider mb-1.5 font-bold">
                ABOUT THE PLATFORM
              </h4>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem Statement */}
            <div className="p-4 rounded-2xl bg-[#111827]/80 border border-[#1E293B]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#7C3AED] font-bold mb-1.5">
                <AlertCircle className="w-4 h-4" />
                <span>PROBLEM STATEMENT</span>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            {/* Solution */}
            <div className="p-4 rounded-2xl bg-[#00E5FF]/5 border border-[#00E5FF]/20">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF] font-bold mb-1.5">
                <Lightbulb className="w-4 h-4" />
                <span>THE SOLUTION</span>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {project.solutionStatement}
              </p>
            </div>

            {/* Key Features List */}
            <div>
              <h4 className="text-xs font-mono text-[#F8FAFC] uppercase tracking-wider mb-3 font-bold">
                KEY FEATURES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures?.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0A0F1C] border border-[#1E293B] text-xs text-[#F8FAFC]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tags */}
            <div>
              <h4 className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2 font-bold">
                TECHNOLOGIES USED
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[#0A0F1C] border border-[#1E293B] text-xs font-mono text-[#00E5FF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 border-t border-[#1E293B] flex flex-wrap items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl glass-panel text-xs font-semibold text-[#F8FAFC] flex items-center gap-2 border border-[#1E293B] hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#00E5FF] text-[#0A0F1C] text-xs font-bold flex items-center gap-2 hover:bg-[#00E5FF]/90 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

          </div>

        </div>

      </motion.div>

      {/* Lightbox Modal Instance */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        screenshots={screenshots}
        currentIndex={lightboxIndex}
        onNavigate={(idx) => setLightboxIndex(idx)}
        projectTitle="ChefPulse Case Study"
      />

    </section>
  );
};
