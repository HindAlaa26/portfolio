import { EDUCATION, EXPERIENCE } from '../data';
import { Smartphone, Palette, Users, GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function EducationExperience() {
  
  const getExperienceIcon = (name: string) => {
    switch (name) {
      case 'smartphone':
        return <Smartphone className="w-5 h-5 text-purple-400" />;
      case 'palette':
        return <Palette className="w-5 h-5 text-indigo-400" />;
      default:
        return <Users className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      {/* Decorative backdrop gradients */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase font-bold">
            04 / EXPERIENCE & EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Journey & Academic Foundation
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            A chronological timeline showcasing my engineering leadership, community involvement, and specialized software development certifications.
          </p>
        </div>

        {/* Dual-Column Layout: Experience vs Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Experience Column */}
          <div className="space-y-8">
            <h3 className="text-left text-lg font-display font-bold text-white flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 block" />
              <span>Professional & Community Experience</span>
            </h3>

            <div className="relative border-l border-white/[0.08] ml-4 pl-8 space-y-10 text-left">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  id={`experience-item-${exp.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline bullet icon */}
                  <div className="absolute -left-[53px] top-1.5 w-11 h-11 rounded-xl bg-[#090514] border border-white/[0.08] group-hover:border-purple-500/50 flex items-center justify-center transition-all duration-300 shadow-md">
                    <div className="p-1 rounded-lg bg-white/[0.02] group-hover:bg-purple-500/5 transition-colors">
                      {getExperienceIcon(exp.iconName)}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Role & Date row */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.role}
                      </h4>
                      <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono text-purple-400 bg-purple-500/5 px-2.5 py-1 rounded-md border border-purple-500/10">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </span>
                    </div>

                    <h5 className="text-xs font-semibold text-gray-400 font-mono">
                      {exp.organization}
                    </h5>

                    {/* Experience points */}
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                      {exp.details.map((pt, idx) => (
                        <li key={idx} className="leading-relaxed flex items-start space-x-2">
                          <span className="text-purple-500 shrink-0 mt-1.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <h3 className="text-left text-lg font-display font-bold text-white flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 block" />
              <span>Academic Pathway</span>
            </h3>

            <div className="relative border-l border-white/[0.08] ml-4 pl-8 space-y-10 text-left">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  id={`education-item-${edu.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline bullet icon */}
                  <div className="absolute -left-[53px] top-1.5 w-11 h-11 rounded-xl bg-[#090514] border border-white/[0.08] group-hover:border-indigo-500/50 flex items-center justify-center transition-all duration-300 shadow-md">
                    <div className="p-1 rounded-lg bg-white/[0.02] group-hover:bg-indigo-500/5 transition-colors">
                      <GraduationCap className="w-5 h-5 text-indigo-400" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Degree & Period row */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono text-indigo-400 bg-indigo-500/5 px-2.5 py-1 rounded-md border border-indigo-500/10">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.period}</span>
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h5 className="text-xs font-semibold text-gray-300 font-mono">
                        {edu.institution}
                      </h5>
                      {edu.department && (
                        <p className="text-[11px] text-gray-500 font-mono">
                          {edu.department}
                        </p>
                      )}
                      {(edu.grade || edu.gpa) && (
                        <div className="flex items-center space-x-3 pt-1">
                          {edu.grade && (
                            <span className="inline-flex items-center space-x-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">
                              <Award className="w-3 h-3" />
                              <span>{edu.grade}</span>
                            </span>
                          )}
                          {edu.gpa && (
                            <span className="text-[10px] font-mono text-gray-400 bg-white/[0.02] px-2 py-0.5 rounded border border-white/5">
                              GPA: {edu.gpa}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Details list */}
                    {edu.details && (
                      <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                        {edu.details.map((pt, idx) => (
                          <li key={idx} className="leading-relaxed flex items-start space-x-2">
                            <span className="text-indigo-400 shrink-0 mt-1.5">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
