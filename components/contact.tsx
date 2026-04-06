'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Users, Globe, TrendingUp } from 'lucide-react'

export const Contact = () => {
  const links = [
    { icon: <Users size={22} />, label: 'Professional networking', strong: 'LinkedIn', href: 'https://www.linkedin.com/in/swapnil-pahari', color: 'group-hover:text-blue-400' },
    { icon: <Globe size={22} />, label: 'Code & contributions', strong: 'GitHub', href: 'https://github.com/SWAPNIL72902', color: 'group-hover:text-emerald-400' },
    { icon: <TrendingUp size={22} />, label: 'Live market project', strong: 'Stock Predictor', href: 'https://stock-predictor-beige.vercel.app/', color: 'group-hover:text-amber-400' },
    { icon: <Mail size={22} />, label: 'Inquiries & collaborations', strong: 'Email me', href: 'mailto:swapnilpahari05@gmail.com', color: 'group-hover:text-red-400' }
  ]

  return (
    <section id="contact" className="bg-[#111118]">
      <div className="section-wrapper section-padding">
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="mb-12 md:mb-16"
        >
          <div className="font-mono text-xs tracking-[2px] uppercase text-[#e8c97a] mb-4 font-black">
            // contact
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
            Let&apos;s build something
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <h3 className="font-serif text-3xl text-white leading-[1.3] max-w-lg">
               Open to PM, Analytics & Program Management roles
            </h3>
            <p className="text-lg text-[#8888a8] leading-relaxed max-w-xl">
              I bridge technical execution with business strategy. If you need a partner to solve complex systems-level problems — I&apos;m your person.
            </p>
            <a href="mailto:swapnilpahari05@gmail.com" className="bg-[#e8c97a] text-[#0a0a0f] px-10 py-5 rounded-2xl font-black text-sm tracking-widest hover:scale-105 active:scale-95 transition-all w-fit shadow-lg hover:shadow-[#e8c97a]/20 flex items-center gap-3">
              📧 SEND AN EMAIL
            </a>
          </motion.div>

          <div className="grid gap-4 lg:gap-6">
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
                className="glass-card group flex items-center gap-6 p-6 md:p-8 hover:translate-x-4 transition-all"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center bg-white/5 text-[#555570] transition-colors ${link.color}`}>
                  {link.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[0.65rem] md:text-[0.7rem] text-[#555570] font-mono font-black uppercase tracking-widest">{link.label}</span>
                  <strong className="text-base md:text-lg text-white font-black group-hover:text-[#e8c97a] transition-all">{link.strong}</strong>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
