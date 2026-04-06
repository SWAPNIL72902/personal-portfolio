'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, Globe, ArrowRight } from 'lucide-react'

export const Hero = () => {
  const emailHref = "mailto:swapnilpahari05@gmail.com?subject=Let's%20Connect&body=Hi%20Swapnil%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!"

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 relative overflow-hidden max-w-limit selection-gold">
      {/* Decorative gradient */}
      <div className="absolute top-[20%] right-[-10%] w-[550px] h-[550px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none opacity-40" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full z-10 px-5 md:py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 lg:gap-10"
        >
          <div className="flex items-center gap-4">
             <span className="glass-pill">
                Strategy · Analytics · Product
             </span>
          </div>
          
          <h1 className="font-heading text-[52px] leading-[1.2] font-extrabold tracking-[-0.5px] bg-gradient-to-br from-white to-[#A1A1AA] bg-clip-text text-transparent max-w-xl">
             Swapnil Pahari
          </h1>
          
          <p className="text-[17px] md:text-[18px] text-[#A1A1AA] max-w-lg leading-relaxed font-medium">
            I identify business friction, dig into complex data, and build solutions that drive high-signal impact. Final-year at BITS Pilani Hyderabad.
          </p>
          
          <div className="flex flex-wrap gap-5 pt-4">
            <a href="#projects" className="btn-primary no-underline">
              View Case Studies <ArrowRight size={18} />
            </a>
            <a 
              href={emailHref} 
              aria-label="Send email to Swapnil"
              className="btn-secondary no-underline"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 w-full max-w-md lg:ml-auto"
        >
          {[
            { num: '15+', label: 'Strategic Projects', color: 'text-[#D4AF37]' },
            { num: '82%', label: 'ML Accuracy Models', color: 'text-[#D4AF37]' },
            { num: 'Licious', label: '7+ City Impact', color: 'text-[#D4AF37]' }
          ].map((stat, i) => (
            <div key={i} className="premium-card group p-10 flex flex-col items-center text-center">
              <span className={`metric-text text-3xl mb-3 block ${stat.color} group-hover:scale-110 transition-transform duration-500`}>
                {stat.num}
              </span>
              <span className="text-xs uppercase font-heading font-black tracking-widest text-[#71717A]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
