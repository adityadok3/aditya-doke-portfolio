import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Maximize2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { ImageLightbox } from './ImageLightbox';
import type { Project } from '../types';

interface ProjectShowcaseCardProps {
  project: Project;
  index: number;
}

export const ProjectShowcaseCard: React.FC<ProjectShowcaseCardProps> = ({ project, index }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const screenshots = project.screenshots || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-[#1E293B] relative overflow-hidden group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Left Side: Text Details */}
        <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
          <div>
            <span className="text-xs font-mono font-semibold text-[#00E5FF] uppercase tracking-wider px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3">
              {project.subtitle}
            </span>
            <h3 className="font-outfit text-3xl font-extrabold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div>
            <span className="block text-xs font-mono text-[#94A3B8] mb-2 font-bold uppercase tracking-wider">
              TECHNOLOGY STACK
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#0A0F1C] border border-[#1E293B] text-xs font-mono text-[#94A3B8] group-hover:border-[#00E5FF]/30 group-hover:text-[#F8FAFC] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-3 border-t border-[#1E293B] flex flex-wrap items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl glass-panel text-xs font-semibold text-[#F8FAFC] flex items-center gap-2 border border-[#1E293B] hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#00E5FF] text-[#0A0F1C] text-xs font-bold flex items-center gap-2 hover:bg-[#00E5FF]/90 hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Right Side: Interactive Single Screenshot Frame */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          {screenshots.length > 0 && screenshots[0].src && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                setLightboxIndex(0);
                setLightboxOpen(true);
              }}
              className="relative aspect-video rounded-2xl bg-[#0A0F1C] border border-[#1E293B] hover:border-[#00E5FF]/50 p-2 shadow-xl cursor-pointer transition-all duration-300 group/frame overflow-hidden"
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-[#0A0F1C] border border-[#1E293B]/60 relative flex items-center justify-center">
                <img
                  src={screenshots[0].src}
                  alt={screenshots[0].label}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={340}
                  className="w-full h-full object-contain p-1 group-hover/frame:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 via-transparent to-transparent opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3 pointer-events-none">
                  <span className="text-xs font-mono text-[#00E5FF] flex items-center gap-1.5 font-medium">
                    <Maximize2 className="w-3.5 h-3.5" /> Fullscreen View
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

      </div>

      {/* Lightbox Modal */}
      {screenshots.length > 0 && (
        <ImageLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          screenshots={screenshots}
          currentIndex={lightboxIndex}
          onNavigate={(idx) => setLightboxIndex(idx)}
          projectTitle={project.title}
        />
      )}
    </motion.div>
  );
};
