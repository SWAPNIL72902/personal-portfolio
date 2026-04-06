'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { Chatbot } from '@/components/chatbot'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen text-[#e8e8f0] font-sans selection:bg-[#e8c97a]/20 selection:text-[#e8c97a] overflow-x-hidden antialiased">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Chatbot />
      <Footer />
    </div>
  )
}
