import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BackgroundShader from './components/BackgroundShader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationExperience from './components/EducationExperience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Disable scrolling during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090514] text-gray-100 overflow-hidden font-sans antialiased selection:bg-purple-500/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-purple-500 via-indigo-500 to-fuchsia-500 z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#090514] z-[9999] flex flex-col items-center justify-center space-y-6 select-none"
          >
            <div className="relative flex items-center justify-center">
              {/* Spinning purple circle */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 rounded-full border-t-2 border-r-2 border-purple-500 flex items-center justify-center"
              />
              <div className="absolute text-xl font-bold font-display text-white tracking-widest uppercase">
                H<span className="text-purple-400">A</span>
              </div>
            </div>
            <div className="space-y-2 text-center">
              <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-gray-400">
                Hind Alaa Fathy
              </h2>
              <p className="text-[10px] font-mono tracking-widest text-purple-400/80 uppercase">
                Software Engineer & Flutter Developer
              </p>
            </div>
            {/* Loading Bar */}
            <div className="w-48 h-1 bg-white/[0.04] rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic Animated Ambient Background */}
      <BackgroundShader />

      {/* Sticky Header Nav */}
      <Header />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        
        {/* Subtle Section Dividers */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        </div>

        <About />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        </div>

        <Skills />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        </div>

        <Projects />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        </div>

        <EducationExperience />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        </div>

        <Certifications />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        </div>

        <Contact />
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  );
}
