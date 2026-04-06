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
        },
        {
          title: '🌐 Web Scraping & Data Independence Project',
          problem: 'City teams were dependent on the Analytics team for city-wise society data, causing delays in local decision-making.',
          action: 'Built an independent web scraping solution to extract city-level society data, reducing cross-team dependency.',
          impact: 'Reduced turnaround time for city-level decision execution. Improved data independence for City Delivery Managers (CDMs).'
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
    <section id="experience" className="px-[clamp(1.5rem,8vw,8rem)] py-[5rem]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="font-mono text-[0.75rem] tracking-[2px] uppercase text-[var(--accent)] mb-[0.75rem] font-medium">
          // work experience
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-[var(--text)] leading-[1.2] mb-[0.75rem]">
          Where I&apos;ve delivered impact
        </h2>
      </motion.div>

      <div className="flex flex-col gap-[2.5rem] mt-[2.5rem]">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`bg-[var(--card-bg)] border ${exp.featured ? 'border-[rgba(232,201,122,0.25)]' : 'border-[var(--border)]'} rounded-[var(--radius-lg)] p-10 relative overflow-hidden`}
          >
            {exp.featured && (
              <div className="absolute top-6 right-6 font-mono text-[0.65rem] tracking-[2px] text-[var(--accent)] bg-[rgba(232,201,122,0.1)] px-2.5 py-1 rounded-[4px] border border-[rgba(232,201,122,0.2)]">
                FEATURED
              </div>
            )}
            <div className="flex items-start gap-5 mb-6">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white text-base ${exp.logoClass}`}>
                {exp.logoLetter}
              </div>
              <div>
                <h3 className="font-serif text-[1.2rem] text-[var(--text)]">{exp.company}</h3>
                <p className="text-[0.82rem] text-[var(--text-muted)] mt-1">{exp.role}</p>
                <div className="font-mono text-[0.72rem] text-[var(--text-dim)] mt-1">{exp.period}</div>
              </div>
            </div>
            <p className="text-[var(--text-muted)] text-[0.875rem] leading-[1.7] mb-8">{exp.overview}</p>
            
            {exp.initiatives.length > 0 && (
              <div className="flex flex-col gap-6">
                {exp.initiatives.map((init, idx) => (
                  <div key={idx} className="bg-[var(--surface2)] rounded-[var(--radius)] p-6 border-l-3 border-[var(--accent)]">
                    <h4 className="font-semibold text-[var(--text)] text-[0.95rem] mb-4">{init.title}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-mono text-[0.65rem] tracking-[1.5px] uppercase text-[var(--accent2)] block mb-1">Problem</label>
                        <p className="text-[0.82rem] text-[var(--text-muted)]">{init.problem}</p>
                      </div>
                      <div>
                        <label className="font-mono text-[0.65rem] tracking-[1.5px] uppercase text-[var(--accent2)] block mb-1">Action</label>
                        <p className="text-[0.82rem] text-[var(--text-muted)]">{init.action}</p>
                      </div>
                      <div className="md:col-span-2">
                        <label className="font-mono text-[0.65rem] tracking-[1.5px] uppercase text-[var(--accent2)] block mb-1">Impact</label>
                        <p className="text-[0.82rem] text-[var(--text-muted)] font-medium"><span className="text-[var(--accent)]">{init.impact}</span></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-6">
              {exp.tools.map((tool) => (
                <span key={tool} className="bg-[rgba(110,231,183,0.08)] border border-[rgba(110,231,183,0.15)] text-[var(--accent2)] px-[0.7rem] py-[0.25rem] rounded-[6px] text-[0.75rem] font-mono whitespace-nowrap">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
