import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[#1E293B] bg-[#0A0F1C]/90 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          
          {/* Brand & Tagline */}
          <div className="text-center sm:text-left">
            <h3 className="font-outfit text-xl font-extrabold text-[#F8FAFC] tracking-wider">
              ADITYA <span className="text-[#00E5FF]">DOKE</span>
            </h3>
            <p className="text-xs font-mono text-[#94A3B8] mt-1">
              Robotics • Automation • Technology • Innovation
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full glass-panel text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full glass-panel text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="p-2.5 rounded-full glass-panel text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 hover:bg-[#00E5FF] hover:text-[#0A0F1C] transition-all ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 pt-8 border-t border-[#1E293B]/60 text-center text-xs font-mono text-[#94A3B8]">
          © 2026 Aditya Doke. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
