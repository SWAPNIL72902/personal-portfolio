'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Award, Target, Coffee } from 'lucide-react'

export const About = () => {
  const cards = [
    {
       icon: <Target className="text-[#D4AF37]" />,
       title: "Product Execution",
       desc: "Specializing in 0→1 builds, requirement gathering, and navigating high-uncertainty environments."
    },
    {
       icon: <BookOpen className="text-[#D4AF37]" />,
       title: "Analytical Depth",
       desc: "Leveraging SQL, Python, and advanced ML to derive actionable insights from complex datasets."
    },
    {
       icon: <Award className="text-[#D4AF37]" />,
       title: "Systems Thinking",
       desc: "Bridging mechanical engineering precision with enterprise software scalability."
    }
  ]

  return (
    <section id="about" className="bg-[#0B0B0F] selection-gold">
      <div className="max-w-limit section-padding px-5">
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="mb-16 md:mb-24"
        >
          <div className="glass-pill mb-6 w-fit uppercase font-mono tracking-widest text-[#71717A]">
            The Core Persona
          </div>
          <h2 className="font-heading text-[30px] font-semibold text-white leading-tight mb-8">
            Solving Friction Through Analytics & Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
             <p className="text-lg text-[#A1A1AA] leading-relaxed">
               I am Swapnil Pahari, a final-year student at BITS Pilani Hyderabad with a focus on product management and data strategy. My background in mechanical engineering provides me with a unique structural perspective when approaching software systems and business logic.
             </p>
             <p className="text-lg text-[#A1A1AA] leading-relaxed">
               From optimizing city-level delivery pipelines at Licious to building automated UPI failure recovery flows, I focus on measurable impact. I thrive where data meets empathy, ensuring products solve real user pain points efficiently.
             </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {cards.map((card, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="premium-card p-10 group"
             >
                <div className="w-12 h-12 bg-[#1a1a24] rounded-lg flex items-center justify-center mb-10 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                   {card.icon}
                </div>
                <h3 className="font-heading text-[21px] text-white mb-6 font-semibold group-hover:text-[#D4AF37] transition-colors">
                   {card.title}
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed font-medium">
                   {card.desc}
                </p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
