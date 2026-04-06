'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <section id="about" className="bg-[#111118]">
      <div className="section-wrapper section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="font-mono text-xs tracking-widest uppercase text-[#e8c97a] mb-3 font-black">
            // about me
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
            A problem-solver at heart
          </h2>
          <p className="text-lg text-[#8888a8] max-w-2xl leading-relaxed">
            I start with the problem, not the solution. Every project begins with &quot;what&apos;s actually broken here?&quot;
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#8888a8] text-base leading-relaxed space-y-6"
          >
            <p>
              I&apos;m a <span className="text-white font-bold">Mechanical Engineering student with a Finance minor</span> at BITS Pilani Hyderabad — but my real passion sits at the intersection of product thinking and data-driven decision-making.
            </p>
            <p>
              At Licious, I built analytics systems from scratch — automating reporting pipelines, enabling real-time city-level insights, and driving decisions across 7+ cities. That experience taught me how to operate in ambiguity, move fast, and tie every action back to business impact.
            </p>
            <p>
              I enjoy working on problems where <span className="text-white font-bold">data meets product strategy</span> — whether it&apos;s designing a feature to reduce cart abandonment or building a financial risk model from a 4.5-year dataset.
            </p>
            <p>
              I&apos;m always open to discussing ideas, products, or interesting problems. If you&apos;re building something ambitious — I&apos;d love to hear about it.
            </p>
            <div className="flex flex-wrap gap-2 pt-6">
              {['Product Thinking', 'Data Analytics', 'Systems Design', 'Stakeholder Mgmt', 'Financial Modeling', 'Automation'].map((pill) => (
                <span key={pill} className="pill-base hover:border-[#e8c97a]/30 hover:scale-105">
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
            className="glass-card flex flex-col justify-center space-y-10"
          >
            <h3 className="font-serif text-2xl text-white">How I work</h3>
            <div className="grid gap-8">
              {[
                { icon: '🎯', title: 'Problem-first thinking', text: 'Every project begins with a clear root-cause analysis.' },
                { icon: '📊', title: 'Data-driven decisions', text: 'Gut feel is a starting point — data is the validator.' },
                { icon: '⚡', title: 'Bias for action', text: 'I\'d rather ship a working V1 and iterate than wait for perfection.' },
                { icon: '🤝', title: 'Cross-functional mindset', text: 'I thrive bridging data teams, operations, and leadership.' }
              ].map((trait, i) => (
                <div key={i} className="flex items-start gap-5 hover:translate-x-2 transition-transform">
                  <div className="text-2xl mt-1">{trait.icon}</div>
                  <div>
                    <strong className="text-white block text-sm font-bold mb-1 tracking-wide">{trait.title}</strong>
                    <p className="text-xs md:text-sm text-[#8888a8] leading-relaxed">{trait.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
