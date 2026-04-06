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
import { ProjectSearch } from '@/components/project-search'

export default function Home() {
  return (
    <div className="bg-bg-main min-h-screen text-text-primary overflow-x-hidden antialiased transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <ProjectSearch />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Chatbot />
      <Footer />
    </div>
  )
}
