import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, Smartphone, Sparkles, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { motion } from 'motion/react';
import profileImage from '../assets/images/avatar_hijab_coder_1782976160774.jpg';

export default function Hero() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = (clientX - width / 2) / 30; // subtle movement
    const y = (clientY - height / 2) / 30;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative radial lighting backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 animate-fade-in w-full">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/20 text-xs font-semibold text-purple-300">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>Available for Freelance & Remote Work</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1] max-w-2xl">
              Building Modern <span className="text-gradient">Mobile</span> & <span className="text-gradient-purple">AI-Powered</span> Experiences.
            </h1>

            {/* Underline bio details */}
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-purple-400 font-mono tracking-wide">
                {PERSONAL_INFO.name}
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
                {PERSONAL_INFO.subtitle}
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 py-4 w-full max-w-md">
              <div className="bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl backdrop-blur-sm text-left">
                <span className="block text-xl sm:text-2xl font-bold font-display text-white">4+</span>
                <span className="block text-[10px] sm:text-xs text-gray-400 font-mono">Years Coding</span>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl backdrop-blur-sm text-left">
                <span className="block text-xl sm:text-2xl font-bold font-display text-white">10+</span>
                <span className="block text-[10px] sm:text-xs text-gray-400 font-mono">Mobile Apps</span>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl backdrop-blur-sm text-left">
                <span className="block text-xl sm:text-2xl font-bold font-display text-white">GDSC</span>
                <span className="block text-[10px] sm:text-xs text-purple-300 font-mono">Flutter Lead</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-cta-projects"
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                id="hero-cta-contact"
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold glass-panel text-white hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Get in touch</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4 text-gray-500 w-full">
              <a
                href={PERSONAL_INFO.github}
                id="hero-social-github"
                target="_blank"
                referrerPolicy="no-referrer"
                className="hover:text-white transition-colors duration-200 p-1.5"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                id="hero-social-linkedin"
                target="_blank"
                referrerPolicy="no-referrer"
                className="hover:text-white transition-colors duration-200 p-1.5"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <div className="w-10 h-px bg-white/10" />
              <span className="text-xs font-mono tracking-widest text-gray-400">CONNECT</span>
            </div>

          </div>

          {/* Circular Premium Avatar with Spinning Gradient Border and Soft Glow */}
          <div className="relative flex justify-center items-center select-none w-full">
            {/* Outer Glowing Background Frame */}
            <div className="absolute w-72 sm:w-80 h-72 sm:h-80 bg-purple-600/25 rounded-full blur-3xl -z-10 animate-pulse duration-[6000ms]" />

            {/* Floating Container with Mouse Parallax */}
            <motion.div
              animate={{
                x: coords.x,
                y: [coords.y, coords.y - 12, coords.y],
              }}
              transition={{
                x: { type: "spring", stiffness: 100, damping: 20 },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
              className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 flex items-center justify-center group"
            >
              {/* Rotating Gradient Border Wrapper */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-purple-600 via-indigo-500 to-fuchsia-500 shadow-[0_0_50px_rgba(168,85,247,0.4)]"
              />

              {/* Inner Circle Frame */}
              <div className="absolute inset-[3px] rounded-full overflow-hidden bg-slate-950 flex items-center justify-center p-1.5 z-10">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border border-white/5">
                   {/* Premium Image with No-Referrer, cropped top */}
                   <img
                     src={profileImage}
                     alt={PERSONAL_INFO.name}
                     referrerPolicy="no-referrer"
                     className="w-full h-full object-cover object-top scale-100 hover:scale-105 transition-all duration-700 select-none"
                   />
                   {/* Subtle vignette border shadow (not darkening the face) */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>
              </div>

              {/* Floating Interactive Badge (Flutter) */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -left-4 bg-[#090514]/90 backdrop-blur-md border border-purple-500/30 px-3 py-1.5 rounded-xl flex items-center space-x-2 shadow-lg z-20 hover:scale-105 transition-transform"
              >
                <Smartphone className="w-3.5 h-3.5 text-purple-400" />
                <div>
                  <span className="block text-[8px] text-gray-400 uppercase font-mono leading-none">Specialist</span>
                  <span className="block text-[10px] font-bold text-white">Flutter Dev</span>
                </div>
              </motion.div>

              {/* Floating Interactive Badge (AI Enthusiast) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-4 bg-[#090514]/90 backdrop-blur-md border border-indigo-500/30 px-3 py-1.5 rounded-xl flex items-center space-x-2 shadow-lg z-20 hover:scale-105 transition-transform"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <div>
                  <span className="block text-[8px] text-gray-400 uppercase font-mono leading-none">Domain</span>
                  <span className="block text-[10px] font-bold text-white">AI & ML</span>
                </div>
              </motion.div>

              {/* Rotating glowing dot around the avatar */}
              <div className="absolute -inset-4 rounded-full border border-purple-500/10 pointer-events-none" />
              <div className="absolute -inset-8 rounded-full border border-indigo-500/5 pointer-events-none" />
            </motion.div>

            {/* Technical grid overlays or frames */}
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b border-r border-purple-500/20 rounded-br-2xl pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-16 h-16 border-t border-l border-indigo-500/20 rounded-tl-2xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
