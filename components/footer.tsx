'use client'

import React from 'react'

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] px-[clamp(1.5rem,8vw,8rem)] py-8 flex flex-col md:flex-row justify-between items-center text-[var(--text-dim)] text-[0.78rem] gap-4">
      <span>© 2025 Swapnil Pahari · BITS Pilani</span>
      <span className="font-mono">Built with ❤️ + data</span>
    </footer>
  )
}
