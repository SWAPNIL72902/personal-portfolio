'use client'

import React from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: '🎯 Product Management',
    fillClass: 'fill-product',
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
    fillClass: 'fill-analytics',
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
    fillClass: 'fill-tech',
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
    <section id="skills" className="px-[clamp(1.5rem,8vw,8rem)] py-[5rem]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="font-mono text-[0.75rem] tracking-[2px] uppercase text-[var(--accent)] mb-[0.75rem] font-medium">
          // skills
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-[var(--text)] leading-[1.2] mb-[0.75rem]">
          What I bring to the table
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.5rem] mt-[2.5rem]">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <h3 className="font-serif text-[1.1rem] text-[var(--text)] mb-6 pb-3 border-b border-[var(--border)]">
              {group.title}
            </h3>
            <div className="flex flex-col gap-5">
              {group.skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[0.85rem] text-[var(--text)] font-medium">{skill.name}</span>
                    <span className="text-[0.72rem] text-[var(--text-dim)] font-mono">{skill.level}</span>
                  </div>
                  <div className="h-1 bg-[var(--border)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.width }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className={`h-full rounded-full ${group.fillClass}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
