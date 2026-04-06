'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

export const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const emailHref = "mailto:swapnilpahari05@gmail.com?subject=Let's%20Connect&body=Hi%20Swapnil%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!"

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl text-[#e8c97a] tracking-tight hover:scale-105 transition-transform">SP</Link>
        
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8888a8]">
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-lg text-[#8888a8] hover:border-[#e8c97a] hover:text-[#e8c97a] transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <a
            href={emailHref}
            aria-label="Send email to Swapnil"
            className="hidden md:block bg-[#e8c97a] text-[#0a0a0f] px-5 py-2 rounded-lg text-xs font-bold hover:scale-105 transition-transform no-underline"
          >
            Connect
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#8888a8] hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-[#111118] overflow-hidden"
          >
            <ul className="p-6 flex flex-col gap-4 text-sm font-medium text-[#8888a8]">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={emailHref}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-[#e8c97a] hover:text-white font-bold"
                >
                  Connect
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
