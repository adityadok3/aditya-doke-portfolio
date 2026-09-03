import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { ProfileAvatar } from './ProfileAvatar';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Radial Background Glow for Hero */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE (Profile & Social Icons) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              <ProfileAvatar imageSrc="/profile/profile.png" />

              {/* Perfectly Symmetrical Circular Social Buttons */}
              <div className="mt-8 flex items-center justify-center gap-5">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[#F8FAFC] hover:text-[#00E5FF] hover:border-[#00E5FF]/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 group"
                >
                  <GithubIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[#F8FAFC] hover:text-[#00E5FF] hover:border-[#00E5FF]/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 group"
                >
                  <LinkedinIcon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-6" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE (Content, Titles, CTAs) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">
            
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#00E5FF]/20 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#00E5FF] uppercase">
                HELLO, I'M
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-outfit text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F8FAFC] leading-none mb-3"
            >
              ADITYA <span className="text-[#00E5FF] filter drop-shadow-[0_0_25px_rgba(0,229,255,0.3)]">DOKE</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl font-semibold text-[#94A3B8] mb-6 tracking-wide"
            >
              {PERSONAL_INFO.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed mb-8 font-normal"
            >
              {PERSONAL_INFO.description}
            </motion.p>

            {/* Primary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-5"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl bg-[#00E5FF] text-[#0A0F1C] font-bold text-sm flex items-center gap-2 hover:bg-[#00E5FF]/90 hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all duration-300 active:scale-95 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl glass-panel text-[#F8FAFC] font-semibold text-sm flex items-center gap-2 border border-[#1E293B] hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all duration-300 active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Resume Button (Visually Secondary but Noticeable) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <a
                href={PERSONAL_INFO.resumePath}
                download="Aditya_Doke_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111827]/80 text-[#94A3B8] hover:text-[#00E5FF] border border-[#1E293B] hover:border-[#00E5FF]/30 text-xs sm:text-sm font-medium transition-all duration-300 group"
              >
                <Download className="w-4 h-4 text-[#00E5FF] group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Subtle Tag Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4 border-t border-[#1E293B]/60 text-xs sm:text-sm font-mono text-[#94A3B8]/90 tracking-wide"
            >
              {PERSONAL_INFO.tagline}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
