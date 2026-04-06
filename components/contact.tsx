'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Users, Globe, TrendingUp } from 'lucide-react'

export const Contact = () => {
  const links = [
    { icon: <Users size={20} />, label: 'Connect on', strong: 'LinkedIn', href: 'https://www.linkedin.com/in/swapnil-pahari' },
    { icon: <Globe size={20} />, label: 'Code on', strong: 'GitHub', href: 'https://github.com/SWAPNIL72902' },
    { icon: <TrendingUp size={20} />, label: 'View live project', strong: 'Stock Predictor', href: 'https://stock-predictor-beige.vercel.app/' },
    { icon: <Mail size={20} />, label: 'Email me at', strong: 'swapnilpahari05@gmail.com', href: 'mailto:swapnilpahari05@gmail.com' }
  ]

  return (
    <section id="contact" className="px-[clamp(1.5rem,8vw,8rem)] py-[5rem]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="font-mono text-[0.75rem] tracking-[2px] uppercase text-[var(--accent)] mb-[0.75rem] font-medium">
          // contact
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-[var(--text)] leading-[1.2] mb-[0.75rem]">
          Let&apos;s build something
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center mt-[2.5rem]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="font-serif text-[1.8rem] text-[var(--text)] mb-4 leading-[1.3]">
            Open to PM, Analytics & Program Management roles
          </h3>
          <p className="text-[var(--text-muted)] text-[0.9rem] mb-6 leading-[1.7]">
            If you&apos;re looking for someone who can bridge data and product thinking, build systems that scale, and drive real business impact — I&apos;d love to connect. I&apos;m also always up for an interesting conversation about products or ideas.
          </p>
          <a href="mailto:swapnilpahari05@gmail.com" className="bg-[var(--accent)] text-[#0a0a0f] px-7 py-3 rounded-[10px] font-semibold text-[0.9rem] tracking-[0.3px] hover:opacity-85 transition-opacity duration-200 inline-flex items-center gap-2 no-underline">
            📧 Send me an email
          </a>
        </motion.div>

        <div className="flex flex-col gap-4">
          {links.map((link, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 + 0.3 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[var(--card-bg)] border border-[var(--border)] rounded-[var(--radius)] p-5 hover:border-[var(--accent)] hover:translate-x-1 transition-all duration-300 no-underline"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[1.1rem] bg-[var(--surface2)] text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                {link.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[0.78rem] text-[var(--text-dim)] font-medium leading-none mb-1.5">{link.label}</span>
                <strong className="text-[0.9rem] text-[var(--text)] font-semibold">{link.strong}</strong>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
