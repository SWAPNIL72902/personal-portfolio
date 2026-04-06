'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-[var(--border)] bg-[rgba(10,10,15,0.85)] backdrop-blur-md px-[clamp(1.5rem,5vw,4rem)] h-[60px] flex items-center justify-between transition-colors duration-300 dark:bg-[rgba(10,10,15,0.85)] light:bg-[rgba(244,243,239,0.85)]">
      <div className="font-serif text-[1.2rem] text-[var(--accent)] tracking-[0.5px]">SP</div>
      <ul className="hidden md:flex gap-[2rem] list-none">
        {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="text-[var(--text-muted)] text-[0.875rem] font-medium tracking-[0.3px] hover:text-[var(--text)] transition-colors duration-200"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-[1rem]">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-[36px] h-[36px] flex items-center justify-center border border-[var(--border)] rounded-[8px] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a
          href="https://www.linkedin.com/in/swapnil-pahari"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--accent)] text-[#0a0a0f] px-[1rem] py-[0.4rem] rounded-[8px] text-[0.8rem] font-semibold tracking-[0.3px] hover:opacity-85 transition-opacity duration-200 no-underline"
        >
          Let&apos;s Connect
        </a>
      </div>
    </nav>
  )
}
