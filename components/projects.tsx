'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projectsData = [
  {
    id: 1,
    title: 'AI Stock Intelligence Dashboard',
    cat: 'tech',
    catLabel: 'Tech / Data Science',
    catClass: 'bg-[rgba(232,201,122,0.1)] text-[var(--accent)] border-[rgba(232,201,122,0.2)]',
    problem: 'Retail investors lack a unified, AI-powered view of stock movement — data, predictions, and sentiment are scattered across platforms.',
    solution: 'Built a real-time analytics platform combining market data, AI-based predictions, news sentiment signals, and interactive visualizations.',
    impact: 'Live UP/DOWN predictions with confidence scores · 30-day price trends · Auto-refresh every 60s · Full glassmorphism UI',
    tools: ['Next.js', 'AI/ML', 'Data Viz', 'Real-time APIs'],
    link: 'https://stock-predictor-beige.vercel.app/'
  },
  {
    id: 2,
    title: 'FoodSwift – Restaurant Reliability PM Case Study',
    cat: 'pm',
    catLabel: 'Product Management',
    catClass: 'bg-[rgba(167,139,250,0.1)] text-[var(--accent3)] border-[rgba(167,139,250,0.2)]',
    problem: 'Orders/user dropped from 3.2 → 2.8 and NPS fell from 42 → 35 across a 50K-restaurant, 2M MAU platform.',
    solution: 'Designed 3 core systems: real-time inventory sync, capacity throttling, and a demand forecasting dashboard. Built phased rollout strategy.',
    impact: 'Root cause: 39.6% failures from inventory issues, peak-hour capacity drops (~81.6% success at lunch), and underperforming partners.',
    tools: ['PRD', 'User Research', 'Metrics Design'],
    link: '#'
  },
  {
    id: 3,
    title: 'Instagram Reels – Content Personalization Strategy',
    cat: 'pm',
    catLabel: 'Product Management',
    catClass: 'bg-[rgba(167,139,250,0.1)] text-[var(--accent3)] border-[rgba(167,139,250,0.2)]',
    problem: '12% drop in watch time for 50M users in India due to algorithm stagnation and lack of intent signals.',
    solution: 'Proposed "Content Mood Selector" feature (Laugh / Learn / Relax) capturing user intent before feed loads.',
    impact: '+4.5 min/session projected increase · ₹350 Cr/year estimated ad revenue uplift · RICE score of ~23M',
    tools: ['RICE Framework', 'KPI Design', 'A/B Testing'],
    link: '#'
  },
  {
    id: 4,
    title: 'SkillSync – AI-Powered Learning Path Product',
    cat: 'pm',
    catLabel: 'Product Management · 0→1',
    catClass: 'bg-[rgba(167,139,250,0.1)] text-[var(--accent3)] border-[rgba(167,139,250,0.2)]',
    problem: '68% young professionals feel stuck on "what to learn next." 55% waste money on wrong courses. 72% lack structured guidance.',
    solution: 'End-to-end 0→1 product: Onboarding → AI Skill Gap Analysis → Personalized Roadmap → Progress Tracking.',
    impact: 'Targeting $28.4B India edtech market · 38 survey responses + interviews · RICE prioritization (MVP score: 135) · Full GTM strategy defined',
    tools: ['Primary Research', 'RICE', 'GTM Strategy', 'AI Product'],
    link: '#'
  },
  {
    id: 5,
    title: 'Financial Risk Analytics – CAPM + ARIMA + GARCH + VaR',
    cat: 'finance',
    catLabel: 'Finance · Quantitative',
    catClass: 'bg-[rgba(251,146,60,0.1)] text-[#fb923c] border-[rgba(251,146,60,0.2)]',
    problem: '4 companies (EKC, EMAMILTD, ENGINERSIN, ESABINDIA) · 4.5-year dataset (Apr 2020 – Sep 2024) · 1,000+ daily data points',
    solution: 'Built 4 predictive models (CAPM for beta estimation, ARIMA time-series, GARCH volatility) + Python-based VaR computation.',
    impact: 'Quantified downside risk via VaR · Delivered market risk exposure (beta) insights · Identified volatility clustering patterns',
    tools: ['Python', 'CAPM', 'ARIMA', 'GARCH', 'VaR'],
    link: '#'
  }
]

export const Projects = () => {
  const [filter, setFilter] = useState('all')

  const filteredProjects = projectsData.filter(p => filter === 'all' || p.cat === filter)

  return (
    <section id="projects" className="bg-[var(--surface)] px-[clamp(1.5rem,8vw,8rem)] py-[5rem]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="font-mono text-[0.75rem] tracking-[2px] uppercase text-[var(--accent)] mb-[0.75rem] font-medium">
          // projects
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] text-[var(--text)] leading-[1.2] mb-[0.75rem]">
          Case Studies & Builds
        </h2>
        <p className="text-[var(--text-muted)] text-[0.95rem] max-w-[520px]">
          15+ projects across product, analytics, finance, and engineering. Each one taught me something new about how to solve real problems.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-2 mt-4 mb-10">
        {[
          { id: 'all', label: 'All' },
          { id: 'pm', label: 'Product Management' },
          { id: 'data', label: 'Data & Analytics' },
          { id: 'tech', label: 'Tech' },
          { id: 'finance', label: 'Finance' },
          { id: 'mech', label: 'Engineering' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`bg-[var(--card-bg)] border ${filter === tab.id ? 'bg-[rgba(232,201,122,0.1)] border-[rgba(232,201,122,0.3)] text-[var(--accent)]' : 'border-[var(--border)] text-[var(--text-muted)]'} px-4 py-1.5 rounded-lg text-[0.8rem] transition-all duration-200 cursor-pointer font-medium`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        <AnimatePresence>
          {filteredProjects.map((proj) => (
            <motion.div
              key={proj.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="bg-[var(--card-bg)] border border-[var(--border)] hover:border-[rgba(232,201,122,0.3)] hover:-translate-y-1 transition-all duration-300 rounded-[var(--radius-lg)] p-8 flex flex-col"
            >
              <span className={`font-mono text-[0.68rem] tracking-[1.5px] uppercase px-2.5 py-1 rounded-md mb-4 border w-fit ${proj.catClass}`}>
                {proj.catLabel}
              </span>
              <h3 className="font-serif text-[1.1rem] text-[var(--text)] mb-4">{proj.title}</h3>
              <div className="mb-4">
                <label className="font-mono text-[0.65rem] tracking-[1.5px] uppercase text-[var(--text-dim)] block mb-1">Problem</label>
                <p className="text-[0.82rem] text-[var(--text-muted)] leading-[1.6]">{proj.problem}</p>
              </div>
              <div className="mb-4 mt-auto">
                <label className="font-mono text-[0.65rem] tracking-[1.5px] uppercase text-[var(--text-dim)] block mb-1">Impact</label>
                <p className="text-[0.82rem] text-[var(--text-muted)] leading-[1.6]">
                  <span className="text-[var(--accent)] font-semibold">{proj.impact}</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)] mt-4">
                {proj.tools.map((tool) => (
                  <span key={tool} className="bg-[var(--surface2)] px-2 py-1 rounded-[4px] text-[0.7rem] text-[var(--text-dim)] font-mono">
                    {tool}
                  </span>
                ))}
              </div>
              {proj.link !== '#' && (
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[0.8rem] text-[var(--accent)] mt-4 font-semibold hover:underline">
                  Live Demo <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
