'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Layers, Database, Code, DollarSign, Settings } from 'lucide-react'

const projectsData = [
  {
    id: 1,
    title: 'AI Stock Intelligence Dashboard',
    cat: 'tech',
    catLabel: 'Tech / Data Science',
    icon: <Layers size={18} />,
    catClass: 'bg-amber-400/5 text-amber-400 border-amber-400/20',
    problem: 'Retail investors lack a unified, AI-powered view of stock movement — data and sentiment are scattered.',
    solution: 'Built a real-time analytics platform combining market data, AI predictions, and news sentiment signals.',
    impact: 'Live predictions with confidence scores · 30-day price trends · Auto-refresh · Glassmorphism UI',
    tools: ['Next.js', 'AI/ML', 'Data Viz', 'Real-time APIs'],
    link: 'https://stock-predictor-beige.vercel.app/'
  },
  {
    id: 2,
    title: 'FoodSwift – Restaurant Reliability Case',
    cat: 'pm',
    catLabel: 'Product Management',
    icon: <Settings size={18} />,
    catClass: 'bg-violet-400/5 text-violet-400 border-violet-400/20',
    problem: 'Orders/user dropped from 3.2 → 2.8 and NPS fell from 42 → 35 across 50K restaurants.',
    solution: 'Designed inventory sync, capacity throttling, and demand forecasting systems. Built rollout strategy.',
    impact: 'Identified core friction: 39.6% failures from inventory, capacity drops during peaks.',
    tools: ['PRD', 'User Research', 'Metrics Design'],
    link: '#'
  },
  {
    id: 5,
    title: 'Financial Risk Analytics – CAPM + GARCH',
    cat: 'finance',
    catLabel: 'Finance · Quantitative',
    icon: <DollarSign size={18} />,
    catClass: 'bg-orange-400/5 text-orange-400 border-orange-400/20',
    problem: 'Traditional models often fail to capture volatility clustering in high-frequency trading data.',
    solution: 'Built predictive models (CAPM, ARIMA, GARCH) + Python-based VaR computation across 4.5 years of data.',
    impact: 'Quantified downside risk via VaR · Delivered beta insights · Identified volatility clusters.',
    tools: ['Python', 'CAPM', 'ARIMA', 'GARCH', 'VaR'],
    link: '#'
  }
]

export const Projects = () => {
  const [filter, setFilter] = useState('all')

  const filteredProjects = projectsData.filter(p => filter === 'all' || p.cat === filter)

  return (
    <section id="projects" className="bg-[#111118]">
      <div className="section-wrapper section-padding">
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="mb-12 md:mb-16"
        >
          <div className="font-mono text-xs tracking-[2px] uppercase text-[#e8c97a] mb-4 font-black">
            // projects
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
            Case Studies & Builds
          </h2>
          <p className="text-lg text-[#8888a8] max-w-2xl leading-relaxed">
            A selection of 15+ projects across technical domains, each solving a unique business challenge.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-12">
          {[
            { id: 'all', label: 'All' },
            { id: 'pm', label: 'Product' },
            { id: 'data', label: 'Analytics' },
            { id: 'tech', label: 'Engineering' },
            { id: 'finance', label: 'Finance' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`pill-base transition-all duration-500 font-bold px-6 py-2 border-2 ${filter === tab.id ? 'bg-[#e8c97a]/15 border-[#e8c97a]/30 text-[#e8c97a] scale-105' : 'bg-white/5 border-white/10 text-[#8888a8] hover:text-white'} cursor-pointer`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card flex flex-col p-8 md:p-10 group"
              >
                <div className={`flex items-center gap-2 mb-6 font-mono text-[0.65rem] tracking-[1.5px] uppercase border px-3 py-1 w-fit rounded-lg font-black ${proj.catClass}`}>
                   {proj.icon} {proj.catLabel}
                </div>
                
                <h3 className="font-serif text-2xl text-white mb-6 group-hover:text-[#e8c97a] transition-colors leading-tight">{proj.title}</h3>
                
                <div className="flex flex-col gap-6 flex-grow">
                  <div className="space-y-2">
                    <label className="font-mono text-[0.6rem] tracking-[2px] uppercase text-[#555570] font-black block">Problem</label>
                    <p className="text-sm text-[#8888a8] leading-relaxed line-clamp-3">{proj.problem}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-mono text-[0.6rem] tracking-[2px] uppercase text-[#555570] font-black block">Impact</label>
                    <p className="text-base text-white/90 leading-relaxed font-bold break-words">{proj.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-10 mt-10 border-t border-white/5">
                  {proj.tools.map((tool) => (
                    <span key={tool} className="text-[0.65rem] text-[#555570] font-mono font-black uppercase tracking-widest">{tool}</span>
                  ))}
                </div>
                
                {proj.link !== '#' && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#e8c97a] mt-8 font-black hover:translate-x-2 transition-all">
                    LIVE DEMO <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
