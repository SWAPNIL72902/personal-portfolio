'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Globe } from 'lucide-react'

export const Hero = () => {
  const emailHref = "mailto:swapnilpahari05@gmail.com?subject=Let's%20Connect&body=Hi%20Swapnil%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!"

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 relative overflow-hidden section-wrapper">
      <div className="absolute top-[15%] right-[-5%] w-[450px] h-[450px] bg-radial-gradient(circle,rgba(232,201,122,0.1)_0%,transparent_70%) pointer-events-none opacity-40 blur-3xl" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full z-10 py-12 md:py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 lg:gap-8"
        >
          <div className="flex items-center gap-3 font-mono text-xs text-[#6ee7b7] tracking-[3px] uppercase font-semibold before:content-[''] before:inline-block before:w-10 before:h-[1px] before:bg-[#6ee7b7]">
            Product · Analytics · Strategy
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1] bg-gradient-to-br from-white via-white to-[#e8c97a] bg-clip-text text-transparent break-words max-w-2xl font-black">
            Swapnil<br />Pahari
          </h1>
          
          <p className="text-lg md:text-xl text-[#8888a8] max-w-lg leading-relaxed font-medium">
            I identify problems, dig into data, and build solutions that drive real impact.
          </p>
          
          <p className="text-sm md:text-base text-[#555570] max-w-[460px] leading-relaxed">
            Final-year student at BITS Pilani Hyderabad, working at the intersection of product, analytics, and systems thinking. Open to PM, analytics, and program management roles.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="bg-[#e8c97a] text-[#0a0a0f] px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-[#e8c97a]/20 flex items-center gap-2 no-underline">
              View Projects <ArrowDown size={18} />
            </a>
            <a 
              href={emailHref} 
              aria-label="Send email to Swapnil"
              className="border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-sm hover:border-[#e8c97a] hover:bg-[#e8c97a]/5 hover:scale-105 active:scale-95 transition-all no-underline"
            >
              Contact Me
            </a>
            <a href="https://github.com/SWAPNIL72902" target="_blank" rel="noopener noreferrer" className="border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-sm hover:border-[#e8c97a] hover:bg-[#e8c97a]/5 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 no-underline">
              GitHub <Globe size={18} />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8 w-full max-w-sm lg:ml-auto"
        >
          {[
            { num: '15+', label: 'Real-world Projects', color: 'text-[#e8c97a]' },
            { num: '7+', label: 'Cities — Licious Impact', color: 'text-[#6ee7b7]' },
            { num: '82%', label: 'ML Model Accuracy', color: 'text-[#a78bfa]' }
          ].map((stat, i) => (
            <div key={i} className="glass-card hover:scale-105 group text-center p-8 md:p-10">
              <span className={`font-serif text-4xl mb-2 block ${stat.color} group-hover:scale-110 transition-transform`}>
                {stat.num}
              </span>
              <span className="text-xs md:text-sm text-[#8888a8] font-bold tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
