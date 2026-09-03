import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [botField, setBotField] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setErrorMessage('');

    const formElement = e.currentTarget;
    const data = new FormData(formElement);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as any).toString(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form submission failed');
        }
        setIsSending(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setBotField('');
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch(() => {
        setIsSending(false);
        setErrorMessage('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="py-24 relative z-10">
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
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">GET IN TOUCH</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC]">
            LET'S BUILD <span className="text-[#00E5FF]">SOMETHING TOGETHER</span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] rounded-full" />
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* LEFT SIDE: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel rounded-3xl p-8 border border-[#1E293B] space-y-6">
              <h3 className="font-outfit text-xl font-bold text-[#F8FAFC] mb-4">
                Contact Details
              </h3>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#111827]/70 border border-[#1E293B] hover:border-[#00E5FF]/40 hover:bg-[#111827] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl glass-panel border border-[#1E293B] flex items-center justify-center text-[#94A3B8] group-hover:text-[#00E5FF] group-hover:border-[#00E5FF]/40 group-hover:scale-110 transition-all shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-xs font-mono text-[#94A3B8]">Email</span>
                  <span className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors truncate block">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              {/* Mobile */}
              <a
                href={`tel:${PERSONAL_INFO.mobile}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#111827]/70 border border-[#1E293B] hover:border-[#00E5FF]/40 hover:bg-[#111827] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl glass-panel border border-[#1E293B] flex items-center justify-center text-[#94A3B8] group-hover:text-[#00E5FF] group-hover:border-[#00E5FF]/40 group-hover:scale-110 transition-all shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-[#94A3B8]">Mobile</span>
                  <span className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors">
                    {PERSONAL_INFO.mobile}
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#111827]/70 border border-[#1E293B] hover:border-[#00E5FF]/40 hover:bg-[#111827] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl glass-panel border border-[#1E293B] flex items-center justify-center text-[#94A3B8] group-hover:text-[#00E5FF] group-hover:border-[#00E5FF]/40 group-hover:scale-110 transition-all shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-[#94A3B8]">GitHub</span>
                  <span className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors">
                    {PERSONAL_INFO.githubUser}
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#111827]/70 border border-[#1E293B] hover:border-[#00E5FF]/40 hover:bg-[#111827] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl glass-panel border border-[#1E293B] flex items-center justify-center text-[#94A3B8] group-hover:text-[#00E5FF] group-hover:border-[#00E5FF]/40 group-hover:scale-110 transition-all shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-[#94A3B8]">LinkedIn</span>
                  <span className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors">
                    {PERSONAL_INFO.linkedinUser}
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Modern Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-3xl p-8 border border-[#1E293B]">
              <h3 className="font-outfit text-xl font-bold text-[#F8FAFC] mb-6">
                Send a Message
              </h3>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center gap-3 text-[#00E5FF] text-sm">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form
                name="contact"
                method="POST"
                action="/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Netlify Form Hidden & Honeypot Fields */}
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  name="bot-field"
                  value={botField}
                  onChange={(e) => setBotField(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[#94A3B8] mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0F1C] border border-[#1E293B] text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[#94A3B8] mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0F1C] border border-[#1E293B] text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[#94A3B8] mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0F1C] border border-[#1E293B] text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 rounded-xl bg-[#00E5FF] text-[#0A0F1C] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#00E5FF]/90 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all active:scale-[0.99] disabled:opacity-50"
                >
                  {isSending ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
