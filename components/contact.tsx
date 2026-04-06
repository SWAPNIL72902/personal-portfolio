'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'

export const Contact = () => {
  const emailHref = "mailto:swapnilpahari05@gmail.com?subject=Let's%20Connect&body=Hi%20Swapnil%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!"

  const socials = [
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://linkedin.com/in/swapnil-pahari', color: 'bg-[#a78bfa]' },
    { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/SWAPNIL72902', color: 'bg-[#6ee7b7]' }
  ]

  return (
    <section id="contact" className="bg-[#0B0B0F] selection-gold">
      <div className="max-w-limit section-padding px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
           >
              <div className="space-y-6">
                 <div className="glass-pill mb-6 w-fit uppercase font-mono tracking-widest text-[#71717A]">
                    Get In Touch
                 </div>
                 <h2 className="font-heading text-[30px] font-bold text-white leading-tight">
                    Let&apos;s Build the Next<br />Big Outcome.
                 </h2>
                 <p className="text-lg text-[#A1A1AA] max-w-lg leading-relaxed">
                    Always open to discussing 0→1 builds, analytics strategy, or potential full-time roles in Product & Engineering.
                 </p>
              </div>

              <div className="flex flex-col gap-6">
                 <a 
                   href={emailHref}
                   className="btn-primary w-fit no-underline"
                 >
                    <Mail size={18} /> Send an Email
                 </a>
                 <div className="flex gap-4">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center border border-white/5 bg-[#111117] rounded-lg text-[#A1A1AA] hover:border-[#D4AF37]/40 hover:text-[#D4AF37] hover:scale-110 transition-all duration-300 no-underline"
                        aria-label={social.label}
                      >
                         {social.icon}
                      </a>
                    ))}
                 </div>
              </div>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="premium-card p-12 text-center flex flex-col items-center border-[#D4AF37]/10"
           >
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-10 border border-[#D4AF37]/20 shadow-lg shadow-[#D4AF37]/5">
                 <Mail size={24} className="text-[#D4AF37]" />
              </div>
              <h3 className="font-heading text-[24px] font-bold text-white mb-6">Drop a Note</h3>
              <p className="text-[#A1A1AA] mb-10 max-w-xs mx-auto leading-relaxed font-medium">
                 Direct inquiry? I usually respond within a few hours for high-signal opportunities.
              </p>
              <a 
                href={emailHref}
                className="btn-secondary w-full no-underline"
              >
                 Open Mail Client <Send size={16} />
              </a>
           </motion.div>
        </div>
      </div>
    </section>
  )
}
