import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Github, ExternalLink, X, ChevronRight, Eye, Code2, Play, Sparkles, Smartphone, Terminal } from 'lucide-react';
import DeviceMockup from './DeviceMockup';

function ProjectPhoneMockup({ screenshots }: { screenshots: string[] }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (!screenshots || screenshots.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screenshots]);

  return (
    <div className="relative w-[180px] sm:w-[200px] h-[360px] sm:h-[400px] rounded-[36px] border-[8px] border-slate-900 bg-black shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden shrink-0 group/phone transition-transform duration-500 hover:rotate-1 hover:scale-[1.03]">
      {/* Ear Speaker Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-b-xl z-20 flex items-center justify-center">
        <div className="w-8 h-1 bg-gray-700 rounded-full" />
      </div>

      {/* Screen Content */}
      <div className="relative w-full h-full bg-slate-950 overflow-hidden">
        {/* Animated image slider */}
        <div className="relative w-full h-full">
          {screenshots.map((screen, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                idx === currentIdx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
              }`}
            >
              <img
                src={screen}
                alt={`Screenshot ${idx + 1}`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-top select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
        
        {/* Shine/Glare overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-20" />
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Mobile' | 'Games'>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const categories = ['All', 'Mobile', 'Games'] as const;

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left space-y-3">
            <span className="text-xs font-mono tracking-widest text-purple-400 uppercase font-bold">
              03 / FEATURED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Crafting High-Performance Software
            </h2>
            <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
              Explore my collection of production-ready mobile apps, gaming experiences, and smart terminals engineered with Dart, Flutter, SQLite, and custom animations.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex items-center gap-2 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                    : 'bg-white/[0.02] border border-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Project Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            // Asymmetric layout logic for bento grids
            const isFirst = idx === 0;
            const isSecond = idx === 1;
            const gridSpanClass = isFirst
              ? 'lg:col-span-8'
              : isSecond
              ? 'lg:col-span-4'
              : idx % 3 === 0
              ? 'lg:col-span-4'
              : idx % 3 === 1
              ? 'lg:col-span-4'
              : 'lg:col-span-4';

            const isHorizontal = isFirst; // Wide split card style

            return (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${gridSpanClass} group relative rounded-3xl overflow-hidden glass-panel border border-white/[0.06] hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 p-6 sm:p-8 flex flex-col ${
                  isHorizontal ? 'md:flex-row items-center gap-8' : 'gap-6 justify-between'
                }`}
              >
                {/* Details Section */}
                <div className={`flex flex-col justify-between flex-grow text-left space-y-4 ${isHorizontal ? 'md:max-w-[55%]' : ''}`}>
                  <div className="space-y-3">
                    {/* Interactive Details Indicator */}
                    <div className="inline-flex items-center space-x-1 bg-purple-500/10 border border-purple-500/15 px-2.5 py-1 rounded-lg text-[10px] font-mono text-purple-300 w-fit">
                      <Code2 className="w-3.5 h-3.5" />
                      <span>{project.category}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology badging tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-semibold font-mono tracking-wide px-2 py-0.5 rounded-md bg-purple-500/5 text-purple-300 border border-purple-500/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Grid */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/[0.04] w-full">
                    <button
                      id={`project-text-link-${project.id}`}
                      onClick={() => setActiveModalProject(project)}
                      className="flex items-center space-x-1.5 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors group/link cursor-pointer"
                    >
                      <span>Explore Sandbox</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center space-x-2">
                      {project.videoUrl && (
                        <button
                          id={`project-video-btn-${project.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveVideoUrl(project.videoUrl!);
                          }}
                          className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-[10px] font-bold bg-purple-600 hover:bg-purple-500 text-white transition-all cursor-pointer"
                        >
                          <Play className="w-3 h-3 fill-current text-white mr-1" />
                          <span>Watch Demo</span>
                        </button>
                      )}
                      
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          id={`project-github-${project.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] text-gray-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                          title="GitHub Source"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Smartphone Mockup Visual */}
                <div className="flex items-center justify-center shrink-0 w-full md:w-auto">
                  <ProjectPhoneMockup screenshots={project.screenshots} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal Overlay */}
      {activeModalProject && (
        <div
          id="project-detail-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            id="project-detail-modal"
            className="relative w-full max-w-5xl glass-panel border border-white/10 rounded-3xl overflow-hidden shadow-2xl overflow-y-auto max-h-[90vh] animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="close-project-modal-btn"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-black/50 hover:bg-black/80 text-gray-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Dual Column Layout Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-[#090514]/95">
              
              {/* Left Column: Interactive Mobile Mockup Simulator */}
              <div className="md:col-span-5 p-6 sm:p-8 bg-[#0c081b] border-r border-white/5 flex flex-col items-center justify-center gap-4">
                <div className="text-center space-y-1 mb-4 select-none">
                  <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-bold">Interactive Sandbox</span>
                  <h4 className="text-sm font-bold text-white flex items-center justify-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-purple-400" />
                    Live Emulator
                  </h4>
                </div>

                {/* Device Emulator */}
                <DeviceMockup 
                  projectId={activeModalProject.id} 
                  projectTitle={activeModalProject.title} 
                  screenshot={activeModalProject.image}
                />

                {/* Interaction Instruction Badge */}
                <span className="text-[9px] text-gray-500 font-mono text-center max-w-[200px] leading-relaxed mt-2 select-none">
                  💡 This simulation is interactive. Click buttons and tabs inside the phone screen to try the offline app!
                </span>

                {/* Watch Demo CTA below Phone Mockup */}
                {activeModalProject.videoUrl && (
                  <button
                    id={`modal-watch-demo-btn-${activeModalProject.id}`}
                    onClick={() => setActiveVideoUrl(activeModalProject.videoUrl!)}
                    className="w-full mt-2 flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Full Demo Video</span>
                  </button>
                )}
              </div>

              {/* Right Column: Case Study Specs */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between text-left space-y-6">
                
                {/* Header title */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
                      {activeModalProject.category} Case Study
                    </span>
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    <span className="text-[10px] font-mono text-gray-500">
                      ID: {activeModalProject.id}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    {activeModalProject.title}
                  </h3>
                </div>

                {/* Project Overview */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
                    Project Summary & Mission
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {activeModalProject.longDescription || activeModalProject.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
                    Architectural Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance Achievements list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
                    Key Performance Metrics & Features
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 font-bold mt-0.5">•</span>
                      <span><strong>State-Driven reactivity:</strong> Built with strict state controllers (Bloc / Cubit) ensuring robust separation of concerns.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 font-bold mt-0.5">•</span>
                      <span><strong>Zero-network tolerance:</strong> Configured advanced offline-first caching via secure local SQLite database tables.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 font-bold mt-0.5">•</span>
                      <span><strong>Optimized Asset Pipeline:</strong> Lazy-loaded dynamic streams reducing overall CPU strain in mobile environments.</span>
                    </li>
                  </ul>
                </div>

                {/* Footer Action items */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5 justify-between items-center">
                  <div className="flex items-center space-x-1.5 text-[10px] text-gray-500 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    <span>Public repository available</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    {activeModalProject.githubUrl && (
                      <a
                        href={activeModalProject.githubUrl}
                        id={`modal-github-url-${activeModalProject.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 transition-all cursor-pointer"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}

                    <a
                      href="#contact"
                      id={`modal-hire-cta-${activeModalProject.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveModalProject(null);
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all cursor-pointer"
                    >
                      <span>Inquire About Project</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

      {/* Immersive Video Theatre Player Modal Popup */}
      {activeVideoUrl && (
        <div
          id="video-player-overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveVideoUrl(null)}
        >
          <div
            id="video-player-container"
            className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.3)] bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="close-video-modal-btn"
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-xl bg-black/60 hover:bg-black/80 text-gray-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Iframe or Native Video controls depending on Source */}
            {activeVideoUrl.includes('youtube.com') || activeVideoUrl.includes('youtu.be') ? (
              <iframe
                src={`${activeVideoUrl}?autoplay=1&rel=0`}
                title="Project Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="no-referrer"
                className="w-full h-full border-none"
              />
            ) : (
              <video
                src={activeVideoUrl}
                controls
                autoPlay
                referrerPolicy="no-referrer"
                className="w-full h-full border-none object-contain"
              />
            )}
          </div>
        </div>
      )}

    </section>
  );
}
