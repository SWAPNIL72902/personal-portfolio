'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Briefcase, Settings } from 'lucide-react'

const skillCategories = [
  {
    title: 'Product Management',
    icon: <Briefcase className="text-[#D4AF37]" />,
    skills: [
      { name: 'PRD Writing', level: 95 },
      { name: 'RICE Prioritization', level: 90 },
      { name: 'GTM Strategy', level: 85 },
      { name: 'User Persona', level: 90 },
      { name: 'PM-Fit Strategy', level: 85 }
    ]
  },
  {
    title: 'Data & Analytics',
    icon: <Database className="text-[#D4AF37]" />,
    skills: [
      { name: 'SQL (PostgreSQL)', level: 90 },
      { name: 'Python (Pandas)', level: 85 },
      { name: 'Power BI / Tableau', level: 90 },
      { name: 'Feature Engineering', level: 80 },
      { name: 'Market Sentiment', level: 80 }
    ]
  },
  {
    title: 'Engineering & Systems',
    icon: <Settings className="text-[#D4AF37]" />,
    skills: [
      { name: 'Mechanical Systems', level: 90 },
      { name: 'CAD (Solidworks)', level: 95 },
      { name: 'CNC Programming', level: 80 },
      { name: 'Logic Design', level: 85 },
      { name: 'Mechatronics', level: 80 }
    ]
  },
  {
    title: 'Quant & Finance',
    icon: <Code className="text-[#D4AF37]" />,
    skills: [
      { name: 'Linear Regression', level: 90 },
      { name: 'CAPM / WACC', level: 90 },
      { name: 'Portfolio Selection', level: 85 },
      { name: 'VaR Modelling', level: 85 },
      { name: 'Derivatives', level: 80 }
    ]
  }
]

export const Skills = () => {
  return (
    <section id="skills" className="bg-[#0B0B0F] selection-gold">
      <div className="max-w-limit section-padding px-5">
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="mb-16 md:mb-24"
        >
          <div className="glass-pill mb-6 w-fit uppercase font-mono tracking-widest text-[#71717A]">
            Technical Stack
          </div>
          <h2 className="font-heading text-[30px] font-semibold text-white leading-tight mb-8">
            The Toolbox of Impact
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl leading-relaxed">
            Multidisciplinary skills bridging theoretical engineering and high-impact software products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {skillCategories.map((cat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="premium-card p-10 group h-full flex flex-col"
             >
                <div className="w-12 h-12 bg-[#1a1a24] rounded-lg flex items-center justify-center mb-10 border border-white/5 group-hover:bg-[#D4AF37]/10 group-hover:scale-110 transition-all duration-500">
                   {cat.icon}
                </div>
                <h3 className="font-heading text-[21px] text-white mb-10 border-b border-white/5 pb-6 font-semibold group-hover:text-[#D4AF37] transition-colors">{cat.title}</h3>
                
                <div className="flex flex-col gap-8 flex-grow">
                   {cat.skills.map((skill, idx) => (
                     <div key={idx} className="space-y-4">
                        <div className="flex justify-between items-center px-1">
                           <span className="text-xs font-heading font-black text-[#A1A1AA] uppercase tracking-widest group-hover:text-white transition-colors">
                              {skill.name}
                           </span>
                           <span className="text-[10px] font-mono font-black text-[#D4AF37]">
                              {skill.level}%
                           </span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
                           {/* Static background for the bar */}
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 + idx * 0.05 }}
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] shadow-[0_0_10px_rgba(212,175,55,0.2)]"
                           />
                        </div>
                     </div>
                   ))}
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
