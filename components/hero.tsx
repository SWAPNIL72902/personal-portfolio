'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, Globe, ArrowRight } from 'lucide-react'
import { FlipWords } from './ui/flip-words'

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 relative overflow-hidden max-w-limit selection-gold">
      {/* Decorative gradient */}
      <div className="absolute top-[20%] right-[-10%] w-[550px] h-[550px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none opacity-40" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full z-10 px-5 md:py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 lg:gap-10"
        >
          <div className="flex flex-col gap-4">
             <span className="glass-pill w-fit">
                Strategy · Analytics · Product
             </span>
             <h2 className="font-heading font-black text-text-secondary/50 text-xs tracking-[4px] uppercase ml-1">
                Swapnil Pahari
             </h2>
          </div>
          
          <h1 className="font-heading text-[52px] leading-[1.2] font-extrabold tracking-[-0.5px] text-text-primary max-w-2xl min-h-[140px] md:min-h-0">
             I build{" "}
             <br className="md:hidden" />
             <FlipWords 
               words={["impactful", "scalable", "data-driven", "high-growth"]} 
               duration={2500}
               className="text-accent-gold px-0 inline-block" 
             /> 
             <br className="md:hidden" />
             {" "}products.
          </h1>
          
          <p className="text-[17px] md:text-[18px] text-text-secondary max-w-lg leading-relaxed font-medium">
            Helping companies identify business friction and deliver high-signal results through data and design. Final-year at BITS Pilani Hyderabad.
          </p>
          
          <div className="flex flex-wrap gap-5 pt-4">
            <a href="#projects" className="btn-primary no-underline">
              View Case Studies <ArrowRight size={18} />
            </a>
            <a 
              href="#contact"
              aria-label="Contact Swapnil"
              className="btn-secondary no-underline"
            >
              Contact Me
            </a>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-referral'))}
              aria-label="Refer Swapnil to a role"
              className="px-8 py-4 rounded-[8px] font-heading font-black text-sm tracking-tight border border-secondary text-secondary hover:bg-secondary hover:text-bg-main transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Refer Me 🚀
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 w-full max-w-md lg:ml-auto"
        >
          {[
            { num: '15+', label: 'Strategic Projects', color: 'text-accent-gold' },
            { num: '82%', label: 'ML Accuracy Models', color: 'text-accent-gold' },
            { num: 'Licious', label: '7+ City Impact', color: 'text-accent-gold' }
          ].map((stat, i) => (
            <div key={i} className="premium-card group p-10 flex flex-col items-center text-center">
              <span className={`metric-text text-3xl mb-3 block ${stat.color} group-hover:scale-110 transition-transform duration-500`}>
                {stat.num}
              </span>
              <span className="text-xs uppercase font-heading font-black tracking-widest text-text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
