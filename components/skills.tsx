'use client'

import React from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: '🎯 Product Management',
    fillClass: 'bg-gradient-to-r from-violet-500 to-[#e8c97a]',
    skills: [
      { name: 'PRD Writing', level: 'Advanced', width: '85%' },
      { name: 'Roadmapping', level: 'Advanced', width: '80%' },
      { name: 'User Research', level: 'Intermediate', width: '75%' },
      { name: 'RICE / Prioritization', level: 'Advanced', width: '82%' },
      { name: 'Funnel Analysis', level: 'Intermediate', width: '70%' },
      { name: 'Stakeholder Management', level: 'Advanced', width: '88%' }
    ]
  },
  {
    title: '📊 Analytics',
    fillClass: 'bg-gradient-to-r from-emerald-500 to-cyan-400',
    skills: [
      { name: 'SQL', level: 'Advanced', width: '85%' },
      { name: 'Python (Pandas, NumPy)', level: 'Advanced', width: '82%' },
      { name: 'Power BI', level: 'Advanced', width: '80%' },
      { name: 'Excel / Google Sheets', level: 'Advanced', width: '90%' },
      { name: 'Data Storytelling', level: 'Advanced', width: '85%' },
      { name: 'Financial Modeling', level: 'Intermediate', width: '72%' }
    ]
  },
  {
    title: '⚙️ Technical',
    fillClass: 'bg-gradient-to-r from-[#e8c97a] to-orange-400',
    skills: [
      { name: 'Django / REST APIs', level: 'Intermediate', width: '70%' },
      { name: 'MySQL', level: 'Intermediate', width: '72%' },
      { name: 'Web Scraping', level: 'Intermediate', width: '68%' },
      { name: 'Google Apps Script', level: 'Intermediate', width: '65%' },
      { name: 'Machine Learning', level: 'Intermediate', width: '68%' },
      { name: 'Next.js / Frontend', level: 'Beginner', width: '45%' }
    ]
  }
]

export const Skills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0f]">
      <div className="section-wrapper section-padding">
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="mb-12 md:mb-16"
        >
          <div className="font-mono text-xs tracking-[2px] uppercase text-[#e8c97a] mb-4 font-black">
            // skills
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
            Technical Arsenal
          </h2>
          <p className="text-lg text-[#8888a8] max-w-2xl leading-relaxed">
            Data-driven. Product-focused. Technically rigorous.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 items-stretch">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass-card flex flex-col p-8 md:p-12 hover:-translate-y-2"
            >
              <h3 className="font-serif text-xl md:text-2xl text-white mb-10 pb-4 border-b border-white/5 border-spacing-8">
                {group.title}
              </h3>
              <div className="flex flex-col gap-8">
                {group.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white font-bold">{skill.name}</span>
                      <span className="text-[#555570] font-mono text-[0.6rem] font-black uppercase tracking-widest">{skill.level}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'circOut', delay: idx * 0.05 }}
                        className={`h-full rounded-full ${group.fillClass} shadow-[0_0_8px_rgba(0,0,0,0.5)]`}
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
