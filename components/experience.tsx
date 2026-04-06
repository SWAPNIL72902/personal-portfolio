'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const Experience = () => {
  const experiences = [
    {
      company: 'Licious',
      role: 'Program Management & Data Analytics Intern · City Business Team',
      period: 'Jul 2025 – Dec 2025',
      featured: true,
      logoLetter: 'L',
      logoClass: 'bg-gradient-to-br from-[#e63946] to-[#c1121f]',
      overview: 'Drove data-backed decision-making at Licious by building scalable analytics systems, automating reporting pipelines, and enabling real-time business insights across 7+ cities. Worked at the intersection of program management and analytics — bridging BA, Ops, and City leadership teams to improve execution speed and data visibility.',
      initiatives: [
        {
          title: '📊 Analytics Automation & Dashboard Infrastructure',
          problem: 'No structured metric tracking at key ID (3×3 level); manual reporting consumed significant team bandwidth every week.',
          action: 'Built automated weekly/monthly scripts, toggle-based dashboards for granular RCA, and semi-automated pipelines with Google Sheets integration.',
          impact: '7+ cities now have real-time data visibility. Significantly reduced manual reporting effort across the BA team.'
        }
      ],
      tools: ['SQL', 'Python', 'Google Sheets', 'Apps Script', 'Excel', 'Web Scraping', 'Dashboard Design', 'Stakeholder Mgmt']
    },
    {
      company: 'NrityaTech',
      role: 'Backend Developer Intern',
      period: 'Prior Experience',
      featured: false,
      logoLetter: 'N',
      logoClass: 'bg-gradient-to-br from-[#4361ee] to-[#3a0ca3]',
      overview: 'Worked on backend development and API infrastructure, contributing to performance improvements and system scalability. Gained hands-on experience in building production-grade APIs and working with database systems.',
      initiatives: [],
      tools: ['Django', 'REST APIs', 'MySQL', 'Python', 'Backend Development']
    }
  ]

  return (
    <section id="experience" className="bg-[#0a0a0f]">
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="font-mono text-xs tracking-[2px] uppercase text-[#e8c97a] mb-4 font-black">
            // work experience
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
            Where I&apos;ve delivered impact
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10 md:gap-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`glass-card group relative p-8 md:p-12 overflow-hidden w-full max-w-full ${exp.featured ? 'border-[#e8c97a]/30' : ''}`}
            >
              {exp.featured && (
                <div className="absolute top-6 right-6 font-mono text-[0.65rem] tracking-[3px] text-[#e8c97a] bg-[#e8c97a]/10 px-3 py-1 rounded-sm border border-[#e8c97a]/20 font-black">
                  FEATURED
                </div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-xl shrink-0 ${exp.logoClass}`}>
                  {exp.logoLetter}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-2xl text-white group-hover:text-[#e8c97a] transition-colors">{exp.company}</h3>
                  <p className="text-sm font-bold text-[#8888a8] leading-relaxed">{exp.role}</p>
                  <div className="font-mono text-xs text-[#555570] font-medium tracking-tighter">{exp.period}</div>
                </div>
              </div>

              <p className="text-[#8888a8] text-base leading-relaxed mb-10 break-words max-w-4xl">{exp.overview}</p>
              
              {exp.initiatives.length > 0 && (
                <div className="grid gap-8">
                  {exp.initiatives.map((init, idx) => (
                    <div key={idx} className="bg-[#18181f] border border-white/5 rounded-xl p-8 relative overflow-hidden group/init">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#e8c97a] group-hover/init:w-2 transition-all" />
                      <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-3">{init.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="flex flex-col gap-2">
                          <label className="font-mono text-[0.6rem] tracking-[2px] uppercase text-[#6ee7b7] font-black opacity-80">Problem</label>
                          <p className="text-sm text-[#8888a8] leading-relaxed break-words">{init.problem}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-mono text-[0.6rem] tracking-[2px] uppercase text-[#6ee7b7] font-black opacity-80">Action</label>
                          <p className="text-sm text-[#8888a8] leading-relaxed break-words">{init.action}</p>
                        </div>
                        <div className="md:col-span-2 flex flex-col gap-3 pt-4 border-t border-white/5">
                          <label className="font-mono text-[0.6rem] tracking-[2px] uppercase text-[#e8c97a] font-black opacity-80">Impact</label>
                          <p className="text-base text-[#e8c97a] font-bold leading-relaxed break-words">{init.impact}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-10 mt-10 border-t border-white/5">
                {exp.tools.map((tool) => (
                  <span key={tool} className="pill-base bg-emerald-400/5 text-emerald-400 border-emerald-400/20 py-1.5 hover:scale-110">
                    {tool}
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
