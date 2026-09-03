import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark Ambient Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] bg-[#7C3AED]/5 rounded-full blur-[160px]" />
      
      {/* Subtle Engineering Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30" />

      {/* Futuristic Grid Accent Nodes */}
      <div className="absolute top-24 left-10 w-1.5 h-1.5 bg-[#00E5FF]/40 rounded-full animate-ping" />
      <div className="absolute top-1/2 right-12 w-1.5 h-1.5 bg-[#7C3AED]/40 rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-[#00E5FF]/30 rounded-full" />
    </div>
  );
};
