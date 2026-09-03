import React from 'react';
import { motion } from 'framer-motion';

interface ProfileAvatarProps {
  imageSrc?: string;
  altText?: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  imageSrc = '/profile/profile.png',
  altText = 'Aditya Doke Profile',
}) => {
  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex items-center justify-center select-none">
      {/* Outer Orbital Ring 1 (Clockwise) */}
      <div className="absolute inset-0 rounded-full border border-[#00E5FF]/20 animate-orbit pointer-events-none">
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]" />
      </div>

      {/* Inner Orbital Ring 2 (Counter Clockwise with dashes) */}
      <div className="absolute inset-3 rounded-full border border-dashed border-[#7C3AED]/30 animate-orbit-reverse pointer-events-none" />

      {/* Subtle Cyan & Purple Background Glow */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#00E5FF]/15 via-transparent to-[#7C3AED]/20 blur-xl animate-pulse-glow pointer-events-none" />

      {/* Main Circular Profile Frame Container with Floating Animation */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full p-[2px] bg-gradient-to-br from-[#00E5FF] via-[#1E293B] to-[#7C3AED] shadow-[0_0_30px_rgba(0,229,255,0.2)]"
      >
        <div className="w-full h-full rounded-full bg-[#0A0F1C] p-3 flex items-center justify-center relative overflow-hidden border border-[#1E293B]">
          
          {/* Subtle Circuit Grid Overlay inside Avatar Frame */}
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

          {imageSrc ? (
            <img
              src={imageSrc}
              alt={altText}
              className="w-full h-full object-cover rounded-full relative z-10"
            />
          ) : (
            /* High-End Robotics Engineering Placeholder Vector Graphic */
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
              {/* Technical Node SVG Graphic */}
              <svg
                viewBox="0 0 100 100"
                className="w-24 h-24 sm:w-28 sm:h-28 text-[#00E5FF] filter drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Microcontroller Outer Hexagon */}
                <polygon
                  points="50,10 85,30 85,70 50,90 15,70 15,30"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                  className="opacity-70"
                />
                
                {/* Inner Core Circle */}
                <circle cx="50" cy="50" r="22" stroke="#7C3AED" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="14" fill="#00E5FF" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" />
                
                {/* Circuit Traces */}
                <line x1="50" y1="10" x2="50" y2="28" stroke="currentColor" strokeWidth="1.5" />
                <line x1="50" y1="90" x2="50" y2="72" stroke="currentColor" strokeWidth="1.5" />
                <line x1="15" y1="30" x2="36" y2="42" stroke="currentColor" strokeWidth="1.5" />
                <line x1="85" y1="70" x2="64" y2="58" stroke="currentColor" strokeWidth="1.5" />

                {/* Nodes */}
                <circle cx="50" cy="10" r="3" fill="#00E5FF" />
                <circle cx="50" cy="90" r="3" fill="#7C3AED" />
                <circle cx="15" cy="30" r="2.5" fill="#00E5FF" />
                <circle cx="85" cy="70" r="2.5" fill="#00E5FF" />
                <circle cx="50" cy="50" r="4" fill="#00E5FF" />
              </svg>

              <span className="mt-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#94A3B8] font-semibold">
                [ ROBOTICS • CORE ]
              </span>
            </div>
          )}

          {/* Corner Technical Crosshairs */}
          <div className="absolute top-3 left-3 text-[#00E5FF]/40 text-[9px] font-mono">+</div>
          <div className="absolute top-3 right-3 text-[#00E5FF]/40 text-[9px] font-mono">+</div>
          <div className="absolute bottom-3 left-3 text-[#00E5FF]/40 text-[9px] font-mono">+</div>
          <div className="absolute bottom-3 right-3 text-[#00E5FF]/40 text-[9px] font-mono">+</div>
        </div>
      </motion.div>
    </div>
  );
};
