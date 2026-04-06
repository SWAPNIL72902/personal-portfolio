'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

export const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const emailHref = "mailto:swapnilpahari05@gmail.com?subject=Let's%20Connect&body=Hi%20Swapnil%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!"

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-[#0B0B0F]/90 backdrop-blur-xl">
      <div className="max-w-[1200px] mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading font-extrabold text-xl text-[#D4AF37] tracking-tighter hover:scale-105 transition-transform">
          SP.
        </Link>
        
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-[#A1A1AA]">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-white transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 flex items-center justify-center border border-white/5 rounded-lg text-[#A1A1AA] hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <a
            href={emailHref}
            aria-label="Send email to Swapnil"
            className="hidden md:flex bg-[#D4AF37] text-[#0B0B0F] px-6 py-2.5 rounded-lg text-xs font-heading font-black tracking-tight hover:bg-[#F5D76E] hover:scale-105 active:scale-95 transition-all duration-300 items-center gap-2 no-underline"
          >
            Connect <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#A1A1AA] hover:text-white"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-white/5 bg-[#111117] overflow-hidden"
          >
            <ul className="p-10 flex flex-col gap-6 text-lg font-heading font-semibold text-[#A1A1AA]">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block hover:text-[#D4AF37] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={emailHref}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-4 text-[#D4AF37] font-black border-t border-white/5 mt-4"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
