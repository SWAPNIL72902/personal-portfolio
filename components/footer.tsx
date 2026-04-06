'use client'

import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-[#0B0B0F] border-t border-white/5 py-12 md:py-20 selection-gold">
      <div className="max-w-limit px-5 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
           <span className="font-heading font-extrabold text-white text-xl tracking-tighter hover:scale-105 transition-transform duration-300">SP.</span>
           <p className="text-[#71717A] text-sm font-medium tracking-tight">Built with Next.js, Framer Motion & Impact.</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
           <p className="text-[#A1A1AA] text-sm font-bold">© 2026 Swapnil Pahari. All rights reserved.</p>
           <p className="text-[#71717A] text-xs font-mono uppercase tracking-[2px] font-black">Strategy · Analytics · Product</p>
        </div>
      </div>
    </footer>
  )
}
