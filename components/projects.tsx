'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LinkIcon, PlayCircle, FileText, CheckCircle2, Briefcase, Layers, Settings, Database, DollarSign, PieChart, Cpu } from 'lucide-react'
import { projectsData } from '@/data/projects'

const IconMap = {
  check: <CheckCircle2 size={16} />,
  briefcase: <Briefcase size={16} />,
  layers: <Layers size={16} />,
  settings: <Settings size={16} />,
  database: <Database size={16} />,
  dollar: <DollarSign size={16} />,
  pie: <PieChart size={16} />,
  cpu: <Cpu size={16} />
}

export const Projects = () => {
  const [filter, setFilter] = useState('featured')

  const filteredProjects = projectsData.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'featured') return p.featured;
    return p.category.toLowerCase() === filter.toLowerCase();
  })

  const tabs = [
    { id: 'featured', label: 'Featured ⭐' },
    { id: 'all', label: 'All Projects' },
    { id: 'product', label: 'Product & Strategy 🚀' },
    { id: 'finance', label: 'Finance & Quant 💰' },
    { id: 'data', label: 'Data & Analytics 📊' },
    { id: 'mechanical', label: 'Systems & Mechanical ⚙️' }
  ]

  return (
    <section id="projects" className="bg-bg-main selection-gold">
      <div className="max-w-limit section-padding px-5">
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="mb-16 md:mb-20"
        >
          <div className="glass-pill mb-6 w-fit">
            Project Archives
          </div>
          <h2 className="font-heading text-[30px] font-semibold text-text-primary leading-tight mb-6">
            Case Studies & Systems
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            A comprehensive overview of multidisciplinary projects across product, finance, and engineering.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-16 overflow-x-auto pb-4 no-scrollbar border-b border-border-color">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`font-heading text-xs font-black tracking-widest uppercase pb-4 transition-all duration-300 relative ${filter === tab.id ? 'text-accent-gold' : 'text-text-muted hover:text-text-secondary'} cursor-pointer`}
            >
              {tab.label}
              {filter === tab.id && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold" />}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="premium-card flex flex-col group relative overflow-hidden h-full"
              >
                {/* Header Category */}
                <div className="flex items-center gap-2 mb-6 font-heading text-[0.65rem] tracking-[2px] uppercase border px-3 py-1.5 w-fit rounded-lg font-black bg-white/5 border-white/10 text-[#A1A1AA]">
                   {proj.category}
                </div>
                
                <h3 className="font-heading text-[21px] leading-tight text-text-primary mb-6 group-hover:text-accent-gold transition-colors duration-500 min-h-[3rem] line-clamp-2">
                   {proj.title}
                </h3>
                
                <div className="flex flex-col gap-6 flex-grow">
                  <p className="text-[15px] text-text-secondary leading-relaxed line-clamp-3">{proj.description}</p>
                  
                  <div className="space-y-3">
                    <label className="font-mono text-[0.65rem] tracking-[2px] uppercase text-accent-gold font-black block opacity-90">Metrics</label>
                    <div className="flex flex-wrap gap-2">
                        {proj.metrics.map(metric => (
                            <div key={metric} className="text-[13px] text-text-primary font-bold bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-3 py-1 rounded-[6px]">
                                {metric}
                            </div>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-8 mt-auto border-t border-border-color">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="text-[0.65rem] text-text-muted font-mono font-medium uppercase tracking-wider bg-text-secondary/5 px-2.5 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
                
                {/* Dynamic Buttons Container */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[0.7rem] bg-text-secondary/10 text-text-secondary px-5 py-2.5 rounded-[8px] font-heading font-black hover:bg-text-secondary/20 hover:text-text-primary transition duration-300 no-underline whitespace-nowrap"
                    >
                      <LinkIcon size={14} /> VIEW DETAILS
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
