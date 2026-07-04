import { Cloud, Cpu, Smartphone, ShieldCheck, Award, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const values = [
    {
      icon: <Smartphone className="w-6 h-6 text-purple-400" />,
      title: "Pixel-Perfect Flutter",
      description: "Crafting beautiful, fluid, high-performance applications compiled natively for iOS & Android with Bloc and Clean Architecture."
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: "AI & Intelligence",
      description: "Integrating intelligent models, LLMs, and real-time inference workflows to enrich application functionality."
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      title: "DevOps & Cloud Ready",
      description: "Expanding into AWS DevOps pipelines, building reliable container workloads using Docker, and deploying with Kubernetes."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Detailed Narrative column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-purple-400 uppercase font-bold">
                01 / ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Engineering with passion, <br/>
                deploying with precision.
              </h2>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
              {PERSONAL_INFO.aboutText}
            </p>

            {/* Quick Badges of Honour */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl backdrop-blur-sm">
                <Award className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs font-bold text-white">Honors Graduate</span>
                  <span className="block text-[10px] text-gray-400">Kafr Elsheikh Uni</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 bg-white/[0.02] border border-white/[0.04] p-3 rounded-xl backdrop-blur-sm">
                <GraduationCap className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs font-bold text-white">MSc Student</span>
                  <span className="block text-[10px] text-gray-400">Queen's University</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Feature Value Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-4"
          >
            <h3 className="text-left text-xs font-mono tracking-widest text-purple-400 uppercase font-bold mb-6">
              Core Technical Philosophies
            </h3>
            
            <div className="space-y-4">
              {values.map((val, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl flex items-start space-x-4 text-left"
                >
                  <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl shrink-0">
                    {val.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      {val.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
