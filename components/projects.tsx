'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Layers, Database, Code, DollarSign, Settings, PieChart, Briefcase, CheckCircle2, FileText, Cpu } from 'lucide-react'

const projectsData = [
  // FEATURED
  {
    id: 'licious-analytics',
    title: 'Licious – Program Management & Analytics',
    cat: 'featured',
    displayCat: 'Featured · Business',
    icon: <CheckCircle2 size={16} />,
    catClass: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    problem: 'Manual reporting and fragmented data across city business teams slowed down daily decision-making.',
    impact: 'Automated 7+ city pipelines · Enabled real-time KPI tracking · Reduced manual effort · Improved decision speed.',
    tags: ['SQL', 'Python', 'Analytics', 'Automation'],
    link: '#',
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/LICIOUS_FINAL_REVIEW%20(3)%20(1).pdf'
  },
  {
    id: 'stock-predictor',
    title: 'AI Stock Intelligence Dashboard',
    cat: 'featured',
    displayCat: 'Featured · Engineering',
    icon: <Layers size={16} />,
    catClass: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
    problem: 'Retail investors find it hard to track real-time market sentiment and price predictions in one place.',
    impact: '82% prediction accuracy · Real-time sentiment signals · Interactive 30-day price charts.',
    tags: ['Next.js', 'AI/ML', 'Market APIs', 'Tailwind'],
    link: 'https://stock-predictor-beige.vercel.app/'
  },
  {
    id: 'paytm-upi',
    title: 'Paytm UPI Failure Recovery System',
    cat: 'featured',
    displayCat: 'Featured · Product',
    icon: <Briefcase size={16} />,
    catClass: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
    problem: 'High churn rates during intermittent UPI downtime causing transaction drop-offs.',
    impact: 'Designed recovery flow · Optimized transaction retry logic · Stabilized payment success rates.',
    tags: ['Product Design', 'SQL', 'Payment Ops'],
    link: '#'
  },

  // PRODUCT MANAGEMENT
  {
    id: 'foodswift',
    title: 'FoodSwift – Delivery Reliability Case',
    cat: 'pm',
    displayCat: 'Product Management',
    icon: <Settings size={16} />,
    catClass: 'bg-violet-400/10 text-violet-400 border-violet-400/20',
    problem: 'Orders/user dropped from 3.2 to 2.8 while NPS fell from 42 to 35 across 50K restaurants.',
    impact: 'Built inventory sync & capacity throttling · 2M MAU focus · Designed forecasting dashboard.',
    tags: ['PRD', 'Metrics', 'Inventory Sync'],
    link: '#'
  },
  {
    id: 'insta-reels',
    title: 'Instagram Reels – Strategy & Growth',
    cat: 'pm',
    displayCat: 'Product Management',
    icon: <Settings size={16} />,
    catClass: 'bg-violet-400/10 text-violet-400 border-violet-400/20',
    problem: '12% drop in watch time across 50M users due to feed monotony.',
    impact: 'Designed "Mood Selector" feature · +4.5 min/session watch time · ₹350Cr projected revenue impact.',
    tags: ['GTM', 'Recommender Systems', 'Retention'],
    link: '#'
  },
  {
    id: 'skillsync',
    title: 'SkillSync – AI Learning Path Product',
    cat: 'pm',
    displayCat: 'Product Management',
    icon: <Settings size={16} />,
    catClass: 'bg-violet-400/10 text-violet-400 border-violet-400/20',
    problem: '68% of users interviewed felt confused about what to learn next in a crowded edtech market.',
    impact: 'Built AI roadmap generator · RICE prioritization mapping · Full GTM strategy development.',
    tags: ['0 → 1', 'AI Roadmap', 'User Research'],
    link: '#'
  },
  {
    id: 'gnani-ai',
    title: 'Gnani AI – Reverse Logistics Optimization',
    cat: 'pm',
    displayCat: 'Product Management',
    icon: <Settings size={16} />,
    catClass: 'bg-violet-400/10 text-violet-400 border-violet-400/20',
    problem: 'High costs in reverse logistics due to manual verification of returned goods.',
    impact: 'Reduced costs by 30-40% · Cut retries by 50-60% · Designed AI automated call verification system.',
    tags: ['Reverse Logistics', 'AI Voice', 'Ops Efficiency'],
    link: '#'
  },
  {
    id: 'meesho-cart',
    title: 'Meesho – Cart Abandonment Optimization',
    cat: 'pm',
    displayCat: 'Product Management',
    icon: <Settings size={16} />,
    catClass: 'bg-violet-400/10 text-violet-400 border-violet-400/20',
    problem: 'Conversion gap of 45% vs industry 60% standard due to lack of social trust.',
    impact: 'Designed "Confidence Bar" feedback loop · Projected +10% conversion · 500K additional orders.',
    tags: ['Conversion', 'E-commerce', 'Social Trust'],
    link: '#'
  },

  // DATA / ANALYTICS
  {
    id: 'healthcare-ml',
    title: 'Healthcare – Patient Data ML Prediction',
    cat: 'data',
    displayCat: 'Data · Analytics',
    icon: <Database size={16} />,
    catClass: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
    problem: 'Low diagnostic accuracy in large scale patient data sets (10,000+ records).',
    impact: 'Feature engineering improved data quality by 20% · Achieved 82% ML model accuracy.',
    tags: ['Python', 'Scikit-Learn', 'Feature Engineering'],
    link: '#'
  },
  {
    id: 'edtech-viz',
    title: 'EdTech – Enterprise Course Dashboard',
    cat: 'data',
    displayCat: 'Data · Analytics',
    icon: <Database size={16} />,
    catClass: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
    problem: 'Course performance across 1,000+ courses was invisible to the leadership team.',
    impact: 'Built interactive Power BI dashboard · 25% improvement in insight extraction time.',
    tags: ['Power BI', 'ETL', 'Dashboarding'],
    link: '#'
  },
  {
    id: 'ecommerce-sales',
    title: 'E-commerce – Global Sales Performance',
    cat: 'data',
    displayCat: 'Data · Analytics',
    icon: <Database size={16} />,
    catClass: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
    problem: 'Fragmented sales data from 5,000+ transactions made revenue forecasting difficult.',
    impact: 'Identified top 40% high-revenue regions · Built automated KPI monitoring dashboard.',
    tags: ['Excel', 'SQL', 'Revenue Analytics'],
    link: '#'
  },

  // FINANCE
  {
    id: 'risk-modelling',
    title: 'Financial Risk Modelling (CAPM + GARCH)',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
    problem: 'Traditional models fail to capture price volatility during market stress events.',
    impact: 'Processed 4.5 years of dataset · Built VaR (Value at Risk) models · CAPM, ARIMA, GARCH.',
    tags: ['Quant Finance', 'Python', 'VaR'],
    link: '#',
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/16_EKC_EMAMILTD_ENGINERSIN_ESABINDIA.pdf'
  },
  {
    id: 'fofa-analysis',
    title: 'FOFA Financial Statement Analysis',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
    problem: 'Manual comparison of 10+ financial ratios across multi-company benchmarks is slow.',
    impact: 'Built comparison engine · Automated 10+ core ratio computations.',
    tags: ['Ratios', 'Comparison', 'Efficiency'],
    link: '#',
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/39_FOFA_Assignment.pdf'
  },
  {
    id: 'industry-ambuja',
    title: 'Industry Analysis – Ambuja Cement',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
    problem: 'Understanding competitive moats in a commoditized cement market segment.',
    impact: 'Revenue split breakdown (80-85% core) · Detailed multi-competitor mapping.',
    tags: ['Strategy', 'Competitor Mapping', 'Cement'],
    link: '#',
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/Ambuja.pdf'
  },
  {
    id: 'manappuram-derivatives',
    title: 'Manappuram Finance – Derivatives Analysis',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
    problem: 'Complexity in visualizing pay-off structures of multi-leg option strategies.',
    impact: 'Built 5+ strategies (Bull Call, Iron Condor, etc.) · Real-time pay-off calculation.',
    tags: ['Options', 'Risk Mgmt', 'Strategy'],
    link: '#',
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/Group_44-Manappuram_Finance.pdf'
  },
  {
    id: 'portfolio-opt',
    title: 'Multi-Asset Portfolio Optimization',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
    problem: 'Inefficient asset allocation across 8+ assets lowering risk-adjusted returns.',
    impact: 'Built "Minimum Variance Portfolio" model · Significantly improved Sharpe ratio.',
    tags: ['Markowitz', 'Optimization', 'Excel'],
    link: '#',
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/SAPM%20Project%20.pdf'
  },
  {
    id: 'wacc-lt',
    title: 'L&T Capital Cost Model (WACC Analysis)',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
    problem: 'Estimating cost of capital for a ₹1.83 lakh crore diversified conglomerate.',
    impact: 'Detailed capital cost modeling · Provided valuation baseline for infrastructure segments.',
    tags: ['Valuation', 'WACC', 'Infrastructure'],
    link: '#',
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/Wacc%20LnT.pdf'
  },

  // BUSINESS / STRATEGY
  {
    id: 'apple-sc',
    title: 'Apple Inc. – Global Supply Chain Analysis',
    cat: 'strategy',
    displayCat: 'Business · Strategy',
    icon: <PieChart size={16} />,
    catClass: 'bg-indigo-400/10 text-indigo-400 border-indigo-400/20',
    problem: 'Managing 200+ suppliers across 50 countries without inventory bloat.',
    impact: 'Identified key efficiency driver: 5-day inventory vs 18-day average · 90% forecast accuracy.',
    tags: ['Supply Chain', 'Logistics', 'Inventory'],
    link: '#'
  },

  // ENGINEERING
  {
    id: 'epicyclic-gear',
    title: 'Fabricated Epicyclic Gearbox System',
    cat: 'eng',
    displayCat: 'Engineering',
    icon: <Cpu size={16} />,
    catClass: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
    problem: 'Requirement for high-torque gear reduction within a compact system footprint.',
    impact: 'End-to-end design (CAD) + Fabrication (CNC) + Assembly · Full lifecycle execution.',
    tags: ['CAD', 'CNC', 'Mechatronics'],
    link: '#'
  }
]

export const Projects = () => {
  const [filter, setFilter] = useState('featured')

  const filteredProjects = projectsData.filter(p => filter === 'all' || p.cat === filter)

  const tabs = [
    { id: 'featured', label: 'Featured' },
    { id: 'all', label: 'All Projects' },
    { id: 'pm', label: 'Product' },
    { id: 'finance', label: 'Finance' },
    { id: 'data', label: 'Analytics' },
    { id: 'strategy', label: 'Business' },
    { id: 'eng', label: 'Engineering' }
  ]

  return (
    <section id="projects" className="bg-[#111118]">
      <div className="section-wrapper section-padding">
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="mb-12 md:mb-16"
        >
          <div className="font-mono text-xs tracking-[4px] uppercase text-[#e8c97a] mb-4 font-black">
            // portfolio of projects
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
            Case Studies, Products & Analytics
          </h2>
          <p className="text-lg text-[#8888a8] max-w-2xl leading-relaxed">
            A comprehensive look at 15+ projects solving complex problems across product strategy, quant-finance, and data engineering.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-10 overflow-x-auto pb-4 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`pill-base transition-all duration-300 font-black px-6 py-2.5 border-2 whitespace-nowrap ${filter === tab.id ? 'bg-[#e8c97a]/15 border-[#e8c97a]/40 text-[#e8c97a] scale-105 shadow-[0_0_20px_rgba(232,201,122,0.1)]' : 'bg-white/5 border-white/5 text-[#555570] hover:text-[#8888a8] hover:border-white/10'} cursor-pointer`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card flex flex-col p-8 group border-opacity-30 relative"
              >
                {/* Header Category */}
                <div className={`flex items-center gap-2 mb-6 font-mono text-[0.65rem] tracking-[2px] uppercase border px-3 py-1.5 w-fit rounded-lg font-black ${proj.catClass} shadow-sm`}>
                   {proj.icon} {proj.displayCat}
                </div>
                
                <h3 className="font-serif text-2xl text-white mb-6 group-hover:text-[#e8c97a] transition-colors leading-tight min-h-[3rem] line-clamp-2">{proj.title}</h3>
                
                <div className="flex flex-col gap-6 flex-grow">
                  <div className="space-y-2">
                    <label className="font-mono text-[0.6rem] tracking-[2px] uppercase text-[#555570] font-black block">The Problem</label>
                    <p className="text-sm text-[#8888a8] leading-relaxed line-clamp-3">{proj.problem}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-mono text-[0.6rem] tracking-[2px] uppercase text-[#e8c97a] font-black block opacity-80">Solution & Impact</label>
                    <p className="text-base text-white font-bold leading-relaxed break-words">{proj.impact}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-8 mt-auto border-t border-white/5">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="text-[0.6rem] text-[#555570] font-mono font-black uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
                
                {/* Buttons Container */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {proj.link !== '#' && (
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-xs text-[#e8c97a] font-black hover:translate-x-2 transition-all no-underline tracking-widest bg-[#e8c97a]/5 px-4 py-2 rounded-lg border border-[#e8c97a]/10 hover:border-[#e8c97a]/30"
                    >
                      LIVE DEMO <ExternalLink size={12} />
                    </a>
                  )}

                  {proj.caseStudy && (
                    <a
                      href={proj.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-[#e8c97a] font-black hover:bg-[#e8c97a] hover:text-[#0a0a0f] transition-all no-underline tracking-widest border border-[#e8c97a]/30 px-4 py-2 rounded-lg"
                      title="Opens detailed case study in a new tab"
                    >
                      📊 VIEW CASE STUDY
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
