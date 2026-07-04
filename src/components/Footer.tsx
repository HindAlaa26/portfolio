import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="main-portfolio-footer" className="relative border-t border-white/[0.05] bg-[#090514] py-12 z-10 overflow-hidden">
      {/* Absolute subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright Narrative */}
          <div className="text-center md:text-left space-y-1">
            <span className="block text-sm font-bold text-white font-display tracking-wide">
              {PERSONAL_INFO.name}
            </span>
            <span className="block text-xs text-gray-500 font-mono">
              © {new Date().getFullYear()} All Rights Reserved. Built with React & Tailwind.
            </span>
          </div>

          {/* Social connections */}
          <div className="flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-gray-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-gray-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-gray-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top anchor */}
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="group p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-purple-500/20 text-gray-400 hover:text-white transition-all cursor-pointer"
            title="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        {/* Small designed credentials with heart */}
        <div className="mt-8 pt-8 border-t border-white/[0.03] flex items-center justify-center space-x-1.5 text-[10px] text-gray-500 font-mono">
          <span>Engineered with passion</span>
          <Heart className="w-3 h-3 text-rose-500 animate-pulse" />
          <span>& polished to Apple-standards</span>
        </div>

      </div>
    </footer>
  );
}
