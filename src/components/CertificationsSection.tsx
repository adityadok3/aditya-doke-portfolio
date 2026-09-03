import React from 'react';
import { motion } from 'framer-motion';
import { Award, Eye, BadgeCheck, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
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
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC]">
            PROFESSIONAL <span className="text-[#00E5FF]">CERTIFICATIONS</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] rounded-full" />
        </motion.div>

        {/* 3 Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-[#1E293B] flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Award Badge Left & Institution Logo Top-Right */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>

                  {cert.logoUrl && (
                    <div className="w-[46px] h-[46px] sm:w-[52px] sm:h-[52px] rounded-xl bg-[#0A0F1C]/90 border border-[#1E293B] p-1.5 sm:p-2 flex items-center justify-center shrink-0 shadow-md shadow-black/40 group-hover:border-[#00E5FF]/40 transition-colors">
                      <img
                        src={cert.logoUrl}
                        alt={`${cert.issuer} logo`}
                        loading="lazy"
                        decoding="async"
                        width={52}
                        height={52}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>

                <h3 className="font-outfit text-lg font-bold text-[#F8FAFC] mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-[#00E5FF] mb-6">
                  ISSUER: {cert.issuer}
                </p>
              </div>

              {/* Two Action Buttons: Watch Certificate & Verify Certificate */}
              <div className="pt-4 border-t border-[#1E293B] grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={cert.certificateUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${cert.title} Certificate PDF`}
                  className="px-3 py-2.5 rounded-xl glass-panel text-xs font-semibold text-[#F8FAFC] flex items-center justify-center gap-1.5 border border-[#1E293B] hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all duration-300 group"
                >
                  <Eye className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 transition-transform group-hover:scale-110" />
                  <span className="truncate">Watch Certificate</span>
                </a>

                <a
                  href={cert.verificationUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Verify ${cert.title} Credential`}
                  className="px-3 py-2.5 rounded-xl glass-panel text-xs font-semibold text-[#F8FAFC] flex items-center justify-center gap-1.5 border border-[#1E293B] hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-all duration-300 group"
                >
                  <BadgeCheck className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 transition-transform group-hover:scale-110" />
                  <span className="truncate">Verify Certificate</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
