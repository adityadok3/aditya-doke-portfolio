import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const resumeUrl = PERSONAL_INFO.resumePath || '/resume/aditya-doke-resume.pdf';

  return (
    <section id="resume" className="py-24 relative z-10">
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
            <FileText className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">
              CURRICULUM VITAE
            </span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC]">
            MY RESUME
          </h2>

          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] rounded-full mb-4" />

          <p className="text-sm sm:text-base text-[#94A3B8] max-w-2xl leading-relaxed">
            View my resume, explore my experience, and download a copy if you'd like to know more about my journey.
          </p>
        </motion.div>

        {/* Action Buttons Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          {/* Button 1: Preview Resume (New Tab) */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Preview Resume in new browser tab"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#00E5FF] text-[#0A0F1C] font-bold text-sm flex items-center justify-center gap-2.5 hover:bg-[#00E5FF]/90 hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all duration-300 active:scale-95 group"
          >
            <Eye className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Preview Resume</span>
          </a>

          {/* Button 2: Download Resume */}
          <a
            href={resumeUrl}
            download="Aditya_Doke_Resume.pdf"
            aria-label="Download Resume PDF"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-panel text-[#F8FAFC] font-semibold text-sm flex items-center justify-center gap-2.5 border border-[#1E293B] hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all duration-300 active:scale-95 group"
          >
            <Download className="w-4 h-4 text-[#00E5FF] transition-transform group-hover:translate-y-0.5" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Embedded Resume Viewer Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-panel rounded-3xl p-2 sm:p-4 border border-[#1E293B] shadow-[0_0_40px_rgba(0,229,255,0.08)] relative overflow-hidden bg-[#0A0F1C]">
            <div className="w-full h-[550px] sm:h-[700px] lg:h-[820px] rounded-2xl overflow-hidden bg-[#111827]">
              <iframe
                src={`${resumeUrl}#toolbar=1`}
                title="Aditya Doke Resume PDF Viewer"
                className="w-full h-full border-0 rounded-2xl"
              />
            </div>
          </div>

          {/* Fallback Option */}
          <div className="mt-4 text-center text-xs sm:text-sm font-mono text-[#94A3B8] flex items-center justify-center gap-2 flex-wrap">
            <span>Having trouble viewing the resume?</span>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume in a new tab"
              className="text-[#00E5FF] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Open Resume</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
