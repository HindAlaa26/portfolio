import { useState, ReactNode } from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../data';
import { Code, Cpu, Database, Cloud, Wrench, Layers } from 'lucide-react';

type SkillCategory = 'All' | 'Languages' | 'Frameworks' | 'State Management' | 'Databases' | 'Cloud' | 'Tools';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('All');

  const categories: { id: SkillCategory; label: string; icon: ReactNode }[] = [
    { id: 'All', label: 'All Tech', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'Languages', label: 'Languages', icon: <Code className="w-3.5 h-3.5" /> },
    { id: 'Frameworks', label: 'Frameworks', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'State Management', label: 'State Management', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'Databases', label: 'Databases', icon: <Database className="w-3.5 h-3.5" /> },
    { id: 'Cloud', label: 'Cloud & DevOps', icon: <Cloud className="w-3.5 h-3.5" /> },
    { id: 'Tools', label: 'Tools', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase font-bold">
            02 / MY SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Specialized Toolkit & Expertise
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            A comprehensive overview of my software engineering capabilities, spanning mobile application architectures, databases, cloud engineering, and AI tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`skill-tab-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25 border border-purple-500/30'
                  : 'bg-white/[0.02] border border-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => {
            // Category specific color accentuation
            let glowColor = 'bg-purple-500';
            let textColor = 'text-purple-300';
            let bgColor = 'bg-purple-500/10';

            if (skill.category === 'Languages') {
              glowColor = 'bg-emerald-500';
              textColor = 'text-emerald-300';
              bgColor = 'bg-emerald-500/10';
            } else if (skill.category === 'Frameworks') {
              glowColor = 'bg-cyan-500';
              textColor = 'text-cyan-300';
              bgColor = 'bg-cyan-500/10';
            } else if (skill.category === 'Databases') {
              glowColor = 'bg-amber-500';
              textColor = 'text-amber-300';
              bgColor = 'bg-amber-500/10';
            } else if (skill.category === 'Cloud') {
              glowColor = 'bg-indigo-500';
              textColor = 'text-indigo-300';
              bgColor = 'bg-indigo-500/10';
            } else if (skill.category === 'Tools') {
              glowColor = 'bg-rose-500';
              textColor = 'text-rose-300';
              bgColor = 'bg-rose-500/10';
            }

            return (
              <motion.div
                key={idx}
                id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${bgColor} ${textColor} border border-white/[0.03]`}>
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">
                    {skill.proficiency}%
                  </span>
                </div>

                <div className="space-y-3 text-left">
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {skill.name}
                  </h3>

                  {/* Level gauge bar */}
                  <div className="w-full h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: idx * 0.03 }}
                      className={`h-full ${glowColor} rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
