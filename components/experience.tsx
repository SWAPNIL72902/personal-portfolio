'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

const experiences = [
  {
    role: 'Program Management Intern',
    company: 'Licious',
    period: 'Jan 2026 – Present',
    location: 'Bangalore, India',
    desc: 'Driving city-level impact through automated reporting and data-led operational strategy.',
    details: [
      'Automated 7+ city analytics pipelines, reducing manual reporting time by 60%.',
      'Enabled real-time KPI visibility for regional managers through interactive dashboards.',
      'Optimizing delivery efficiency using predictive delivery interval models.'
    ]
  },
  {
    role: 'Product Analytics & Strategy',
    company: 'BITS Pilani',
    period: '2022 – 2026',
    location: 'Hyderabad, India',
    desc: 'Final year student specializing in product-market fit validation and engineering systems.',
    details: [
      'Developed 15+ multidisciplinary projects across finance, ML, and product management.',
      'Consistently applying RICE prioritization to drive high-impact problem-solving.',
      'Bridge engineering precision and core software scalability.'
    ]
  }
]

export const Experience = () => {
  return (
    <section id="experience" className="bg-[#0B0B0F] selection-gold">
      <div className="max-w-limit section-padding px-5">
         <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="mb-16 md:mb-24"
        >
          <div className="glass-pill mb-6 w-fit uppercase font-mono tracking-widest text-[#71717A]">
            Professional Journey
          </div>
          <h2 className="font-heading text-[30px] font-semibold text-white leading-tight mb-8">
            Experience & Impact
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl leading-relaxed">
            Focused on building data-driven solutions at intersection of product and operations.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
           {experiences.map((exp, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: i * 0.15 }}
               className="premium-card p-12 group hover:translate-x-2 transition-all duration-500"
             >
                <div className="flex flex-wrap items-start justify-between gap-6 mb-10 border-b border-white/5 pb-10">
                   <div className="space-y-4">
                      <h3 className="font-heading text-[24px] font-bold text-white group-hover:text-[#D4AF37] transition-colors">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-[#D4AF37] font-heading font-black tracking-widest text-xs uppercase">
                         <span className="bg-[#D4AF37]/10 px-3 py-1.5 rounded-lg border border-[#D4AF37]/20">{exp.company}</span>
                      </div>
                   </div>
                   <div className="space-y-3 md:text-right">
                      <div className="flex items-center md:justify-end gap-2 text-[#71717A] text-sm font-medium">
                         <Calendar size={14} className="text-[#D4AF37]" /> {exp.period}
                      </div>
                      <div className="flex items-center md:justify-end gap-2 text-[#71717A] text-sm font-medium">
                         <MapPin size={14} className="text-[#D4AF37]" /> {exp.location}
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12">
                   <p className="text-lg text-[#A1A1AA] leading-relaxed italic font-medium border-l-2 border-[#D4AF37]/40 pl-8">
                      {exp.desc}
                   </p>
                   <ul className="space-y-6">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-4 text-[#A1A1AA] leading-relaxed group/li">
                           <ChevronRight size={18} className="shrink-0 text-[#D4AF37] group-hover/li:translate-x-2 transition-transform duration-300 mt-1" />
                           <span className="font-medium group-hover:text-white transition-colors duration-300">{detail}</span>
                        </li>
                      ))}
                   </ul>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
