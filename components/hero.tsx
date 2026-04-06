'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Globe } from 'lucide-react'

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-[100px] relative overflow-hidden px-[clamp(1.5rem,8vw,8rem)]">
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(232,201,122,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-[4rem] items-center w-full max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-[0.75rem] font-mono text-[0.8rem] text-[var(--accent2)] tracking-[2px] uppercase mb-[1.5rem] before:content-[''] before:inline-block before:w-[32px] before:h-[1px] before:bg-[var(--accent2)]">
            Product · Analytics · Strategy
          </div>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] mb-[1.25rem] bg-gradient-to-br from-[var(--text)] via-[var(--text)] to-[var(--accent)] bg-clip-text text-transparent">
            Swapnil<br />Pahari
          </h1>
          <p className="text-[clamp(1rem,1.5vw,1.2rem)] text-[var(--text-muted)] max-width-[500px] mb-[0.75rem] font-medium">
            I identify problems, dig into data, and build solutions that drive real impact.
          </p>
          <p className="text-[0.9rem] text-[var(--text-dim)] max-width-[440px] mb-[2.5rem] leading-[1.6]">
            Final-year student at BITS Pilani Hyderabad, working at the intersection of product, analytics, and systems thinking. Open to PM, analytics, and program management roles.
          </p>
          <div className="flex flex-wrap gap-[1rem]">
            <a href="#projects" className="bg-[var(--accent)] text-[#0a0a0f] px-[1.75rem] py-[0.75rem] rounded-[10px] font-semibold text-[0.9rem] tracking-[0.3px] hover:opacity-85 hover:translate-y-[-1px] transition-all duration-200 inline-flex items-center gap-[0.5rem] no-underline">
              View Projects <ArrowDown size={16} />
            </a>
            <a href="#contact" className="border border-[var(--border)] text-[var(--text)] px-[1.75rem] py-[0.75rem] rounded-[10px] font-medium text-[0.9rem] hover:border-[var(--accent)] hover:translate-y-[-1px] transition-all duration-200 inline-flex items-center gap-[0.5rem] no-underline">
              Contact Me
            </a>
            <a href="https://github.com/SWAPNIL72902" target="_blank" rel="noopener noreferrer" className="border border-[var(--border)] text-[var(--text)] px-[1.75rem] py-[0.75rem] rounded-[10px] font-medium text-[0.9rem] hover:border-[var(--accent)] hover:translate-y-[-1px] transition-all duration-200 inline-flex items-center gap-[0.5rem] no-underline">
              GitHub <Globe size={16} />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row lg:flex-col gap-[1.25rem]"
        >
          {[
            { num: '15+', label: 'Real-world Projects' },
            { num: '7+', label: 'Cities — Licious Impact' },
            { num: '82%', label: 'ML Model Accuracy' }
          ].map((stat, i) => (
            <div key={i} className="bg-[var(--card-bg)] border border-[var(--border)] rounded-[var(--radius)] p-[1.25rem_1.5rem] min-w-[160px] text-center backdrop-blur-sm">
              <span className="font-serif text-[2rem] text-[var(--accent)] block">
                {stat.num}
              </span>
              <span className="text-[0.78rem] text-[var(--text-muted)] mt-[0.2rem]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
