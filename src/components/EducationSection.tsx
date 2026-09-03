import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, CheckCircle2, MapPin, Sparkles, Cpu } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10">
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
            <GraduationCap className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">ACADEMIC JOURNEY</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC]">
            EDUCATION
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Connecting Vertical Line (Progressive Scroll Draw) */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#00E5FF] via-[#7C3AED] to-[#1E293B] origin-top -translate-x-1/2"
          />

          <div className="space-y-12">
            {EDUCATION_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Point */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all ${
                      item.isCurrent
                        ? 'bg-[#0A0F1C] border-[#00E5FF] shadow-[0_0_20px_#00E5FF]'
                        : 'bg-[#0A0F1C] border-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.3)]'
                    }`}>
                      {item.isCurrent ? (
                        <div className="w-3.5 h-3.5 rounded-full bg-[#00E5FF] animate-ping" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" />
                      )}
                    </div>
                  </div>

                  {/* Education Item Card */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                    isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                  }`}>
                    <div className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 relative overflow-hidden ${
                      item.isCurrent
                        ? 'border-[#00E5FF]/60 bg-gradient-to-br from-[#111827] via-[#111827] to-[#00E5FF]/10 shadow-[0_0_30px_rgba(0,229,255,0.18)] scale-[1.02]'
                        : 'border-[#1E293B] hover:border-[#7C3AED]/40'
                    }`}>

                      {/* Subtle Background Accent Grid for Current Entry */}
                      {item.isCurrent && (
                        <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
                      )}

                      {/* Top Badges */}
                      <div className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <span className="text-[11px] font-mono font-semibold px-3 py-0.5 rounded-full bg-[#111827] border border-[#1E293B] text-[#94A3B8]">
                          {item.stage}
                        </span>

                        {item.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 text-xs font-mono font-bold">
                            <Sparkles className="w-3 h-3" />
                            CURRENT DEGREE
                          </span>
                        )}
                      </div>

                      {/* Institution Name & Logo */}
                      <div className={`flex items-center gap-3 my-2 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        {item.logoUrl && (
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#0A0F1C]/90 border border-[#1E293B] p-1 sm:p-1.5 flex items-center justify-center shrink-0 shadow-md transition-all group-hover:border-[#00E5FF]/30">
                            <img
                              src={item.logoUrl}
                              alt={`${item.institution} logo`}
                              loading="lazy"
                              decoding="async"
                              width={40}
                              height={40}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        <h3 className="font-outfit text-xl sm:text-2xl font-bold text-[#F8FAFC] leading-snug">
                          {item.institution}
                        </h3>
                      </div>

                      {/* Qualification / Degree */}
                      <p className={`font-semibold text-sm sm:text-base mt-1 ${
                        item.isCurrent ? 'text-[#00E5FF]' : 'text-[#94A3B8]'
                      }`}>
                        {item.degreeOrCourse}
                      </p>

                      {/* Location & Status (If available) */}
                      {(item.location || item.status) && (
                        <div className={`flex flex-wrap items-center gap-3 text-xs font-mono text-[#94A3B8] mt-2 ${
                          isEven ? 'sm:justify-end' : 'sm:justify-start'
                        }`}>
                          {item.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-[#00E5FF]" />
                              {item.location}
                            </span>
                          )}

                          {item.status && (
                            <span className="flex items-center gap-1 text-[#00E5FF] font-semibold">
                              <Cpu className="w-3.5 h-3.5" />
                              {item.status}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Score & Timeline Details Footer */}
                      <div className={`mt-5 pt-4 border-t border-[#1E293B] flex flex-wrap items-center gap-3 text-xs font-mono ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0A0F1C] border border-[#1E293B] text-[#F8FAFC] font-semibold">
                          <Award className="w-4 h-4 text-[#7C3AED]" />
                          <span>{item.scoreLabel}: <strong className="text-[#00E5FF] font-bold">{item.scoreValue}</strong></span>
                        </div>

                        {item.timeline && (
                          <div className="flex items-center gap-1 text-[#94A3B8] px-2.5 py-1 rounded-lg bg-[#0A0F1C]/60 border border-[#1E293B]/60">
                            <Calendar className="w-3.5 h-3.5 text-[#00E5FF]" />
                            <span>{item.timeline}</span>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
