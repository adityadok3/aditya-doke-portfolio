import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import type { ScreenshotItem } from '../types';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: ScreenshotItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  projectTitle: string;
}

export const ImageLightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  screenshots,
  currentIndex,
  onNavigate,
  projectTitle,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const currentItem = screenshots[currentIndex];

  // Lock background scroll when open, restore on close
  useEffect(() => {
    if (!isOpen) return;

    // Store original scroll position
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Save original styles
    const prevStyle = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      height: document.body.style.height,
      paddingRight: document.body.style.paddingRight,
    };

    // Lock body scrolling completely
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Prevent touchmove and wheel default actions on background
    const preventDefault = (e: Event) => {
      e.preventDefault();
    };

    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });

    // Focus close button for accessibility
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      clearTimeout(timer);

      // Restore body styles
      document.body.style.overflow = prevStyle.overflow;
      document.body.style.position = prevStyle.position;
      document.body.style.top = prevStyle.top;
      document.body.style.left = prevStyle.left;
      document.body.style.right = prevStyle.right;
      document.body.style.width = prevStyle.width;
      document.body.style.height = prevStyle.height;
      document.body.style.paddingRight = prevStyle.paddingRight;

      // Disable smooth scroll temporarily so restoring scroll position doesn't animate
      const html = document.documentElement;
      const prevScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollY);
      html.style.scrollBehavior = prevScrollBehavior;

      window.removeEventListener('wheel', preventDefault);
      window.removeEventListener('touchmove', preventDefault);
    };
  }, [isOpen]);

  // Keyboard navigation & scroll key prevention
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollKeys = [
        'ArrowUp',
        'ArrowDown',
        'PageUp',
        'PageDown',
        'Space',
        ' ',
        'Home',
        'End',
      ];
      if (scrollKeys.includes(e.key)) {
        e.preventDefault();
      }

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft' && screenshots.length > 1) {
        e.preventDefault();
        onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length);
      } else if (e.key === 'ArrowRight' && screenshots.length > 1) {
        e.preventDefault();
        onNavigate((currentIndex + 1) % screenshots.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, screenshots.length, onClose, onNavigate]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && currentItem && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 lg:p-10 select-none w-screen h-screen overflow-hidden pointer-events-auto">
          {/* Dark Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A0F1C]/90 backdrop-blur-xl pointer-events-auto"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-5xl max-h-[90vh] glass-panel rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#1E293B] shadow-[0_0_50px_rgba(0,229,255,0.15)] flex flex-col items-center overflow-hidden pointer-events-auto"
          >
            {/* Header Bar */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-[#1E293B] mb-4 shrink-0">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 text-xs font-mono font-semibold">
                  {projectTitle}
                </span>
                <span className="text-xs font-mono text-[#94A3B8]">
                  {currentIndex + 1} / {screenshots.length}
                </span>
              </div>

              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close Lightbox"
                className="p-2 rounded-xl bg-[#111827] text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 border border-[#1E293B] transition-all focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Preview Area */}
            <div className="relative w-full max-h-[60vh] sm:max-h-[70vh] aspect-video rounded-2xl bg-[#0A0F1C] border border-[#1E293B] flex flex-col items-center justify-center p-2 sm:p-4 text-center overflow-hidden group shrink">
              
              {/* Subtle Tech Grid overlay */}
              <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

              {currentItem.src ? (
                <img
                  src={currentItem.src}
                  alt={currentItem.label}
                  className="w-full h-full object-contain relative z-10 rounded-xl"
                />
              ) : (
                /* High-End Vector Placeholder Frame */
                <div className="relative z-10 flex flex-col items-center justify-center space-y-4 max-w-md p-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] animate-pulse">
                    <ImageIcon className="w-8 h-8" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-outfit text-xl font-bold text-[#F8FAFC]">
                      {currentItem.label}
                    </h4>
                  </div>

                  {currentItem.caption && (
                    <p className="text-sm text-[#94A3B8] leading-relaxed pt-2 border-t border-[#1E293B]">
                      {currentItem.caption}
                    </p>
                  )}
                </div>
              )}

              {/* Navigation Arrows */}
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      onNavigate((currentIndex - 1 + screenshots.length) % screenshots.length)
                    }
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#111827]/80 text-[#F8FAFC] hover:text-[#00E5FF] border border-[#1E293B] hover:border-[#00E5FF]/40 backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/50 z-20"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={() => onNavigate((currentIndex + 1) % screenshots.length)}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#111827]/80 text-[#F8FAFC] hover:text-[#00E5FF] border border-[#1E293B] hover:border-[#00E5FF]/40 backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/50 z-20"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Footer Bar */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#94A3B8] border-t border-[#1E293B] pt-3 shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#F8FAFC]">{currentItem.label}</span>
                {currentItem.caption && <span className="text-[#00E5FF] hidden md:inline">• {currentItem.caption}</span>}
              </div>
              <span>ESC / Click outside to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

