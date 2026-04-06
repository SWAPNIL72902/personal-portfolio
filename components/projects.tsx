'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Layers, Database, Code, DollarSign, Settings, PieChart, Briefcase, CheckCircle2, FileText, Cpu, Link as LinkIcon, PlayCircle, ArrowRight } from 'lucide-react'

const projectsData = [
  // ⭐ FEATURED
  {
    id: 'licious-analytics',
    title: 'Licious – Program Management & Analytics',
    cat: 'featured',
    displayCat: 'Featured · Business',
    icon: <CheckCircle2 size={16} />,
    catClass: 'bg-emerald-400/5 text-emerald-400 border-emerald-400/10',
    problem: 'Manual reporting and fragmented data across city business teams slowed down daily decision-making.',
    impact: 'Automated 7+ city pipelines · Enabled real-time KPI tracking · Reduced manual effort · Improved decision speed.',
    tags: ['SQL', 'Python', 'Analytics', 'Automation'],
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/LICIOUS_FINAL_REVIEW%20(3)%20(1).pdf'
  },
  {
    id: 'paytm-upi',
    title: 'Paytm UPI Failure Recovery System',
    cat: 'featured',
    displayCat: 'Featured · Product',
    icon: <Briefcase size={16} />,
    catClass: 'bg-blue-400/5 text-blue-400 border-blue-400/10',
    problem: 'High churn rates during intermittent UPI downtime causing transaction drop-offs.',
    impact: 'Designed recovery flow · Optimized transaction retry logic · Stabilized payment success rates.',
    tags: ['Product Design', 'SQL', 'Payment Ops'],
    github: 'https://github.com/SWAPNIL72902/Paytm'
  },
  {
    id: 'stock-predictor',
    title: 'AI Stock Intelligence Dashboard',
    cat: 'featured',
    displayCat: 'Featured · Engineering',
    icon: <Layers size={16} />,
    catClass: 'bg-amber-400/5 text-amber-400 border-amber-400/10',
    problem: 'Retail investors find it hard to track real-time market sentiment and price predictions in one place.',
    impact: '82% prediction accuracy · Real-time sentiment signals · Interactive 30-day price charts.',
    tags: ['Next.js', 'AI/ML', 'Market APIs', 'Tailwind'],
    live: 'https://stock-predictor-beige.vercel.app/'
  },

  // 🚀 PRODUCT MANAGEMENT
  {
    id: 'foodswift',
    title: 'FoodSwift – Delivery Reliability Case',
    cat: 'pm',
    displayCat: 'Product Management',
    icon: <Settings size={16} />,
    catClass: 'bg-violet-400/5 text-violet-400 border-violet-400/10',
    problem: 'Orders/user dropped from 3.2 to 2.8 while NPS fell from 42 to 35 across 50K restaurants.',
    impact: 'Built inventory sync & capacity throttling · 2M MAU focus · Designed forecasting dashboard.',
    tags: ['PRD', 'Metrics', 'Inventory Sync'],
    github: 'https://github.com/SWAPNIL72902/FoodSwift'
  },
  {
    id: 'insta-reels',
    title: 'Instagram Reels – Strategy & Growth',
    cat: 'pm',
    displayCat: 'Product Management',
    icon: <Settings size={16} />,
    catClass: 'bg-violet-400/5 text-violet-400 border-violet-400/10',
    problem: '12% drop in watch time across 50M users due to feed monotony.',
    impact: 'Designed "Mood Selector" feature · +4.5 min/session watch time · ₹350Cr projected revenue impact.',
    tags: ['GTM', 'Recommender Systems', 'Retention'],
    github: 'https://github.com/SWAPNIL72902/Insta_PM'
  },
  {
    id: 'skillsync',
    title: 'SkillSync – AI Learning Path Product',
    cat: 'pm',
    displayCat: 'Product Management',
    icon: <Settings size={16} />,
    catClass: 'bg-violet-400/5 text-violet-400 border-violet-400/10',
    problem: '68% of users interviewed felt confused about what to learn next in a crowded edtech market.',
    impact: 'Built AI roadmap generator · RICE prioritization mapping · Full GTM strategy development.',
    tags: ['0 → 1', 'AI Roadmap', 'User Research'],
    github: 'https://github.com/SWAPNIL72902/Skill_Sync'
  },
  {
    id: 'gnani-ai',
    title: 'Gnani AI – Reverse Logistics Optimization',
    cat: 'pm',
    displayCat: 'Product Management',
    icon: <Settings size={16} />,
    catClass: 'bg-violet-400/5 text-violet-400 border-violet-400/10',
    problem: 'High costs in reverse logistics due to manual verification of returned goods.',
    impact: 'Reduced costs by 30-40% · Cut retries by 50-60% · Designed AI automated call verification system.',
    tags: ['Reverse Logistics', 'AI Voice', 'Ops Efficiency'],
    github: 'https://github.com/SWAPNIL72902/GNANI-AI'
  },
  {
    id: 'meesho-cart',
    title: 'Meesho – Cart Abandonment Optimization',
    cat: 'pm',
    displayCat: 'Product Management',
    icon: <Settings size={16} />,
    catClass: 'bg-violet-400/5 text-violet-400 border-violet-400/10',
    problem: 'Conversion gap of 45% vs industry 60% standard due to lack of social trust.',
    impact: 'Designed "Confidence Bar" feedback loop · Projected +10% conversion · 500K additional orders.',
    tags: ['Conversion', 'E-commerce', 'Social Trust'],
    github: 'https://github.com/SWAPNIL72902/Messho_PM'
  },
  {
    id: 'campusync-pm',
    title: 'Campusync – Sync Platform Strategy',
    cat: 'pm',
    displayCat: 'Product Management',
    icon: <Settings size={16} />,
    catClass: 'bg-violet-400/5 text-violet-400 border-violet-400/10',
    problem: 'Disconnected campus ecosystem making student-company interaction inefficient.',
    impact: 'Designed student-first sync platform · Optimized recruiter discovery flow.',
    tags: ['Product Strategy', 'UI/UX', 'GTM'],
    github: 'https://github.com/SWAPNIL72902/Campusync_PM_Project'
  },

  // 📊 DATA / ANALYTICS
  {
    id: 'edtech-analysis',
    title: 'EdTech Dashboard Analysis',
    cat: 'data',
    displayCat: 'Data · Analytics',
    icon: <Database size={16} />,
    catClass: 'bg-rose-400/5 text-rose-400 border-rose-400/10',
    problem: 'Fragmented student engagement data across thousands of courses.',
    impact: 'Built Power BI visualization engine · 25% faster identification of at-risk programs.',
    tags: ['Power BI', 'Data Modeling', 'Business Intelligence'],
    github: 'https://github.com/SWAPNIL72902/EdTech'
  },
  {
    id: 'ecommerce-analysis',
    title: 'E-commerce Sales Analysis',
    cat: 'data',
    displayCat: 'Data · Analytics',
    icon: <Database size={16} />,
    catClass: 'bg-rose-400/5 text-rose-400 border-rose-400/10',
    problem: 'Unoptimized revenue generation across multi-region transactions.',
    impact: 'Identified top 40% revenue drivers · Mapped transaction flows for global datasets.',
    tags: ['Python', 'SQL', 'Exploratory Data Analysis'],
    github: 'https://github.com/SWAPNIL72902/Analysis-of-E-Commerce-Sales-Data'
  },

  // 💰 FINANCE (CASE STUDIES)
  {
    id: 'risk-analytics',
    title: 'Financial Risk Analytics',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/5 text-orange-400 border-orange-400/10',
    problem: 'High portfolio volatility exposure in standard equity selections.',
    impact: 'Computed VaR metrics across 4.5 years of data · Applied GARCH for volatility clusters.',
    tags: ['Quant Finance', 'VaR', 'Time Series'],
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/16_EKC_EMAMILTD_ENGINERSIN_ESABINDIA%20.pdf'
  },
  {
    id: 'fofa-analysis',
    title: 'FOFA Analysis Engine',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/5 text-orange-400 border-orange-400/10',
    problem: 'Inefficient manual benchmarking across multi-sector competitors.',
    impact: 'Automated 10+ core ratio analysis engine · Reduced analysis time by 40%.',
    tags: ['Ratio Analysis', 'Corporate Finance', 'Automation'],
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/39_FOFA_Assignment.pdf'
  },
  {
    id: 'ambuja-cement',
    title: 'Ambuja Cement – Strategic Valuation',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/5 text-orange-400 border-orange-400/10',
    problem: 'Understanding market positioning within the commoditized cement market segment.',
    impact: 'Mapped core moats and revenue splits · Benchmarked against industry standards.',
    tags: ['Equity Research', 'Industry Mapping'],
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/Ambuja.pdf'
  },
  {
    id: 'manappuram-strategy',
    title: 'Manappuram Finance Strategy',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/5 text-orange-400 border-orange-400/10',
    problem: 'Visualizing risk payoff structures for multi-asset derivatives.',
    impact: 'Derived optimum options strategy through pay-off calculation scenarios.',
    tags: ['Derivatives', 'Options Trading', 'Finance Strategy'],
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/Group_44-Manappuram_Finance.pdf'
  },
  {
    id: 'portfolio-sapm',
    title: 'Portfolio Optimization (SAPM)',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/5 text-orange-400 border-orange-400/10',
    problem: 'Unoptimized Sharpe ratios in multi-asset class allocation.',
    impact: 'Built Minimum Variance Portfolio for 8+ assets · Maximized returns.',
    tags: ['Modern Portfolio Theory', 'Sharpe Ratio'],
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/SAPM%20Project%20.pdf'
  },
  {
    id: 'wacc-lt',
    title: 'WACC Analysis (L&T)',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/5 text-orange-400 border-orange-400/10',
    problem: 'Estimating capital costs for diversified heavy engineering segments.',
    impact: 'Detailed cost of debt and equity modeling for ₹1.83 lakh crore conglomerate.',
    tags: ['WACC', 'Valuation', 'Corporate Strategy'],
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/Wacc%20LnT.pdf'
  },

  // 🧠 BUSINESS / STRATEGY
  {
    id: 'apple-supply-chain',
    title: 'Apple Inc. – Global Supply Strategy',
    cat: 'strategy',
    displayCat: 'Strategy',
    icon: <PieChart size={16} />,
    catClass: 'bg-indigo-400/5 text-indigo-400 border-indigo-400/10',
    problem: 'High capital lock-up due to decentralized global inventory models.',
    impact: '5-day inventory vs 18-day average · 90% forecast accuracy mapped.',
    tags: ['Supply Chain', 'Logistics', 'Efficiency'],
    github: 'https://github.com/SWAPNIL72902/Apple-s-Supply-Chain-Management'
  },

  // ⚙️ ENGINEERING
  {
    id: 'mechanical-gearbox',
    title: 'Epicyclic Gearbox Fabrication',
    cat: 'eng',
    displayCat: 'Mechanical',
    icon: <Cpu size={16} />,
    catClass: 'bg-cyan-400/5 text-cyan-400 border-cyan-400/10',
    problem: 'Design requirement for high-reduction torque transmission in compact systems.',
    impact: 'Fabricated full system with CAD+CNC execution · Tested for performance.',
    tags: ['CAD', 'CNC', 'Mechatronics'],
    caseStudy: 'https://github.com/SWAPNIL72902/mechanical/blob/main/EpicyclicGearTrain_Group-12%20(1).pdf'
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
    { id: 'strategy', label: 'Strategy' },
    { id: 'eng', label: 'Mechanical' }
  ]

  return (
    <section id="projects" className="bg-[#0B0B0F] selection-gold">
      <div className="max-w-limit section-padding px-5">
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="mb-16 md:mb-20"
        >
          <div className="glass-pill mb-6 w-fit">
            Project Archives
          </div>
          <h2 className="font-heading text-[30px] font-semibold text-white leading-tight mb-6">
            Case Studies & Systems
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl leading-relaxed">
            A comprehensive overview of multidisciplinary projects across product, finance, and engineering.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-16 overflow-x-auto pb-4 no-scrollbar border-b border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`font-heading text-xs font-black tracking-widest uppercase pb-4 transition-all duration-300 relative ${filter === tab.id ? 'text-[#D4AF37]' : 'text-[#71717A] hover:text-[#A1A1AA]'} cursor-pointer`}
            >
              {tab.label}
              {filter === tab.id && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]" />}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, cubicBezier: [0.16, 1, 0.3, 1] }}
                className="premium-card flex flex-col group relative overflow-hidden h-full"
              >
                {/* Header Category */}
                <div className={`flex items-center gap-2 mb-8 font-heading text-[0.65rem] tracking-[2px] uppercase border px-3 py-1.5 w-fit rounded-lg font-black ${proj.catClass}`}>
                   {proj.icon} {proj.displayCat}
                </div>
                
                <h3 className="font-heading text-[21px] leading-tight text-white mb-8 group-hover:text-[#D4AF37] transition-colors duration-500 min-h-[3rem] line-clamp-2">
                   {proj.title}
                </h3>
                
                <div className="flex flex-col gap-8 flex-grow">
                  <div className="space-y-3">
                    <label className="font-mono text-[0.6rem] tracking-[2px] uppercase text-[#71717A] font-black block">Goal</label>
                    <p className="text-[15px] text-[#A1A1AA] leading-relaxed line-clamp-3">{proj.problem}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="font-mono text-[0.6rem] tracking-[2px] uppercase text-[#D4AF37] font-black block opacity-80">Impact</label>
                    <p className="text-[16px] text-white font-bold leading-relaxed break-words">{proj.impact}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-10 mt-auto border-t border-white/5">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="text-[0.6rem] text-[#71717A] font-mono font-medium uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
                
                {/* Dynamic Buttons Container */}
                <div className="flex flex-wrap gap-3 mt-10">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[0.7rem] bg-[#1a1a24] text-[#A1A1AA] px-5 py-2.5 rounded-[8px] font-heading font-black hover:bg-[#323244] hover:text-white transition duration-300 no-underline whitespace-nowrap"
                    >
                      <LinkIcon size={14} /> VIEW
                    </a>
                  )}

                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[0.7rem] bg-[#1e40af] text-white px-5 py-2.5 rounded-[8px] font-heading font-black hover:bg-[#2563eb] transition duration-300 no-underline whitespace-nowrap"
                    >
                      <PlayCircle size={14} /> LIVE DEMO
                    </a>
                  )}

                  {proj.caseStudy && (
                    <a
                      href={proj.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] rounded-[8px] border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 px-5 py-2.5 font-heading font-black tracking-tight whitespace-nowrap"
                    >
                      📊 View Case Study
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
