'use client'

import React from 'react'

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] py-12 md:py-16">
      <div className="section-wrapper flex flex-col md:flex-row justify-between items-center text-[#555570] text-xs font-bold gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-[#8888a8]">© 2025 Swapnil Pahari</span>
          <span className="font-mono text-[0.6rem] uppercase tracking-widest opacity-60">BITS Pilani Hyderabad Campus</span>
        </div>
        <span className="font-mono text-center md:text-right flex items-center gap-2">
          BUILT BY <span className="text-[#e8c97a]">SWAPNIL PAHARI</span>
        </span>
      </div>
    </footer>
  )
}
