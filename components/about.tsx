'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <section id="about" className="bg-[var(--surface)] px-[clamp(1.5rem,8vw,8rem)] py-[5rem]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="font-mono text-[0.75rem] tracking-[2px] uppercase text-[var(--accent)] mb-[0.75rem] font-medium">
          // about me
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-[var(--text)] leading-[1.2] mb-[0.75rem]">
          A problem-solver at heart
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-start mt-[2.5rem]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[var(--text-muted)] text-[0.95rem] leading-[1.7]"
        >
          <p className="mb-4">
            I&apos;m a <span className="text-[var(--text)] font-semibold">Mechanical Engineering student with a Finance minor</span> at BITS Pilani Hyderabad — but my real passion sits at the intersection of product thinking and data-driven decision-making.
          </p>
          <p className="mb-4">
            At Licious, I built analytics systems from scratch — automating reporting pipelines, enabling real-time city-level insights, and driving decisions across 7+ cities. That experience taught me how to operate in ambiguity, move fast, and tie every action back to business impact.
          </p>
          <p className="mb-4">
            I enjoy working on problems where <span className="text-[var(--text)] font-semibold">data meets product strategy</span> — whether it&apos;s designing a feature to reduce cart abandonment or building a financial risk model from a 4.5-year dataset.
          </p>
          <p className="mb-6">
            I&apos;m always open to discussing ideas, products, or interesting problems. If you&apos;re building something ambitious — I&apos;d love to hear about it.
          </p>
          <div className="flex flex-wrap gap-[0.5rem]">
            {['Product Thinking', 'Data Analytics', 'Systems Design', 'Stakeholder Mgmt', 'Financial Modeling', 'Automation'].map((pill) => (
              <span key={pill} className="bg-[var(--card-bg)] border border-[var(--border)] px-[0.85rem] py-[0.35rem] rounded-[100px] text-[0.78rem] text-[var(--text-muted)] font-mono">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-[var(--card-bg)] border border-[var(--border)] rounded-[var(--radius-lg)] p-8"
        >
          <h3 className="font-serif text-[1.1rem] text-[var(--text)] mb-6">How I work</h3>
          <div className="space-y-6">
            {[
              { icon: '🎯', title: 'Problem-first thinking', text: 'I start with the problem, not the solution. Every project begins with "what\'s actually broken here?"' },
              { icon: '📊', title: 'Data-driven decisions', text: 'Gut feel is a starting point — data is the validator. I build dashboards and models before drawing conclusions.' },
              { icon: '⚡', title: 'Bias for action', text: 'I\'d rather ship a working V1 and iterate than wait for perfect conditions.' },
              { icon: '🤝', title: 'Cross-functional mindset', text: 'I thrive bridging data teams, ops, and leadership — translating insights into action.' }
            ].map((trait, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="text-[1.1rem] mt-1">{trait.icon}</div>
                <div>
                  <strong className="text-[var(--text)] block text-[0.875rem] font-semibold mb-1">{trait.title}</strong>
                  <p className="text-[0.875rem] text-[var(--text-muted)]">{trait.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
