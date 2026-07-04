import { CERTIFICATIONS } from '../data';
import { Award, Cloud, Smartphone, BookOpen, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export default function Certifications() {
  
  const getCertIcon = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes('flutter') || lower.includes('mobile')) {
      return <Smartphone className="w-5 h-5 text-purple-400" />;
    }
    if (lower.includes('aws')) {
      return <Cloud className="w-5 h-5 text-indigo-400" />;
    }
    if (lower.includes('docker') || lower.includes('kubernetes')) {
      return <Layers className="w-5 h-5 text-blue-400" />;
    }
    return <BookOpen className="w-5 h-5 text-emerald-400" />;
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background glow element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase font-bold">
            05 / CERTIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Validated Technical Credentials
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Professional certifications confirming advanced expertise in cross-platform mobile frameworks, AWS cloud structures, and agile container orchestration.
          </p>
        </div>

        {/* Certificates Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between text-left h-full space-y-6"
            >
              {/* Header: Icon & Medal */}
              <div className="flex items-start justify-between">
                <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl">
                  {getCertIcon(cert.title)}
                </div>
                <Award className="w-4 h-4 text-purple-500/40" />
              </div>

              {/* Title & Issuer */}
              <div className="space-y-1.5 flex-grow">
                <h3 className="text-sm font-bold text-white leading-snug tracking-wide">
                  {cert.title}
                </h3>
                {cert.issuer && (
                  <p className="text-[11px] font-semibold text-purple-400 font-mono uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                )}
              </div>

              {/* Tag Badges */}
              {cert.tags && (
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04]">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded-md bg-white/[0.03] text-gray-400 border border-white/[0.04]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
