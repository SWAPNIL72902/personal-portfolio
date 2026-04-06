'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Briefcase, Settings } from 'lucide-react'

const skillCategories = [
  {
    title: 'Product Management',
    icon: <Briefcase className="text-[#D4AF37]" />,
    skills: ['PRD Writing', 'RICE Prioritization', 'GTM Strategy', 'User Persona Development', 'Product-Market Fit']
  },
  {
    title: 'Data & Analytics',
    icon: <Database className="text-[#D4AF37]" />,
    skills: ['SQL (PostgreSQL)', 'Python (Pandas/NumPy)', 'Power BI / Tableau', 'Feature Engineering', 'Market Sentiment']
  },
  {
    title: 'Engineering & Systems',
    icon: <Settings className="text-[#D4AF37]" />,
    skills: ['Mechanical Systems', 'CAD (AutoCAD/Fusion360)', 'CNC Programming', 'Logic Design', 'Mechatronics']
  },
  {
    title: 'Quant & Finance',
    icon: <Code className="text-[#D4AF37]" />,
    skills: ['Linear Regression', 'CAPM / WACC Analysis', 'Portfolio Selection', 'VaR Modelling', 'Derivatives Analysis']
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
                <h3 className="font-heading text-[21px] text-white mb-8 border-b border-white/5 pb-6 font-semibold group-hover:text-[#D4AF37] transition-colors">{cat.title}</h3>
                <div className="flex flex-wrap gap-2.5 mt-auto">
                   {cat.skills.map((skill, idx) => (
                     <span key={idx} className="bg-white/5 text-[#A1A1AA] text-[13px] font-bold px-4 py-2 rounded-lg border border-white/5 hover:border-[#D4AF37]/30 hover:text-white transition-all duration-300">
                        {skill}
                     </span>
                   ))}
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
