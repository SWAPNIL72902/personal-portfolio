'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Layers, Database, Code, DollarSign, Settings, PieChart, Briefcase, CheckCircle2, FileText, Cpu, Github, Play } from 'lucide-react'

const projectsData = [
  // ⭐ FEATURED
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
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/raw/main/LICIOUS_FINAL_REVIEW%20(3)%20(1).pdf'
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
    github: 'https://github.com/SWAPNIL72902/Paytm'
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
    live: 'https://stock-predictor-beige.vercel.app/'
  },

  // 🚀 PRODUCT MANAGEMENT
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
    github: 'https://github.com/SWAPNIL72902/FoodSwift'
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
    github: 'https://github.com/SWAPNIL72902/Insta_PM'
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
    github: 'https://github.com/SWAPNIL72902/Skill_Sync'
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
    github: 'https://github.com/SWAPNIL72902/GNANI-AI'
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
    github: 'https://github.com/SWAPNIL72902/Messho_PM'
  },
  {
    id: 'campusync-pm',
    title: 'Campusync – AI Learning Product',
    cat: 'pm',
    displayCat: 'Product Management',
    icon: <Settings size={16} />,
    catClass: 'bg-violet-400/10 text-violet-400 border-violet-400/20',
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
    catClass: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
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
    catClass: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
    problem: 'Unoptimized revenue generation across multi-region transactions.',
    impact: 'Identified top 40% revenue drivers · Mapped transaction flows for global datasets.',
    tags: ['Python', 'SQL', 'Exploratory Data Analysis'],
    github: 'https://github.com/SWAPNIL72902/Analysis-of-E-Commerce-Sales-Data'
  },

  // 💰 FINANCE (CASE STUDIES)
  {
    id: 'risk-analytics',
    title: 'Financial Risk Analytics (CAPM+GARCH)',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
    problem: 'High portfolio volatility exposure in standard equity selections.',
    impact: 'Computed VaR metrics across 4.5 years of data · Applied GARCH for volatility clusters.',
    tags: ['Quant Finance', 'VaR', 'Time Series'],
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/raw/main/16_EKC_EMAMILTD_ENGINERSIN_ESABINDIA%20.pdf'
  },
  {
    id: 'fofa-analysis',
    title: 'FOFA Financial Analysis',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
    problem: 'Inefficient manual benchmarking across multi-sector competitors.',
    impact: 'Automated 10+ core ratio analysis engine · Reduced analysis time by 40%.',
    tags: ['Ratio Analysis', 'Corporate Finance', 'Automation'],
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/raw/main/39_FOFA_Assignment.pdf'
  },
  {
    id: 'ambuja-cement',
    title: 'Ambuja Cement Analysis',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
    problem: 'Understanding market positioning within the commoditized cement segment.',
    impact: 'Mapped core moats and revenue splits · Benchmarked against industry standards.',
    tags: ['Equity Research', 'Industry Mapping'],
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/raw/main/Ambuja.pdf'
  },
  {
    id: 'manappuram-strategy',
    title: 'Manappuram Finance Strategy',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
    problem: 'Visualizing risk payoff structures for multi-asset derivatives.',
    impact: 'Derived optimum options strategy through pay-off calculation for various scenarios.',
    tags: ['Derivatives', 'Options Trading', 'Finance Strategy'],
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/raw/main/Group_44-Manappuram_Finance.pdf'
  },
  {
    id: 'portfolio-sapm',
    title: 'Portfolio Optimization (SAPM)',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
    problem: 'Unoptimized Sharpe ratios in multi-asset class allocation.',
    impact: 'Built Minimum Variance Portfolio across 8+ assets · Maximized risk-adjusted returns.',
    tags: ['Modern Portfolio Theory', 'Sharpe Ratio'],
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/raw/main/SAPM%20Project%20.pdf'
  },
  {
    id: 'wacc-lt',
    title: 'WACC Analysis (L&T)',
    cat: 'finance',
    displayCat: 'Finance',
    icon: <DollarSign size={16} />,
    catClass: 'bg-orange-400/10 text-orange-400 border-orange-400/20',
    problem: 'Estimating capital costs for diversified heavy engineering segments.',
    impact: 'Detailed cost of debt and equity modeling for ₹1.83 lakh crore conglomerate.',
    tags: ['WACC', 'Valuation', 'Corporate Strategy'],
    caseStudy: 'https://github.com/SWAPNIL72902/Finance/raw/main/Wacc%20LnT.pdf'
  },

  // 🧠 BUSINESS / STRATEGY
  {
    id: 'apple-supply-chain',
    title: 'Apple Supply Chain Case Study',
    cat: 'strategy',
    displayCat: 'Strategy',
    icon: <PieChart size={16} />,
    catClass: 'bg-indigo-400/10 text-indigo-400 border-indigo-400/20',
    problem: 'High capital lock-up due to decentralized global inventory models.',
    impact: 'Identified 5-day inventory vs 18-day average efficiency · Mapped 200+ supplier strategies.',
    tags: ['Supply Chain', 'Logistics', 'Inventory Mgmt'],
    github: 'https://github.com/SWAPNIL72902/Apple-s-Supply-Chain-Management'
  },

  // ⚙️ ENGINEERING
  {
    id: 'mechanical-gearbox',
    title: 'Epicyclic Gearbox Design & Fabrication',
    cat: 'eng',
    displayCat: 'Mechanical Engineering',
    icon: <Cpu size={16} />,
    catClass: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
    problem: 'Design requirement for high-reduction torque transmission in a compact system.',
    impact: 'Fabricated full system with CAD+CNC execution · Tested for end-to-end performance.',
    tags: ['CAD', 'CNC', 'Mechatronics'],
    github: 'https://github.com/SWAPNIL72902/mechanical/blob/main/EpicyclicGearTrain_Group-12%20(1).pdf'
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
            // portfolio results
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
            Products, Systems & Research
          </h2>
          <p className="text-lg text-[#8888a8] max-w-2xl leading-relaxed">
            From 0→1 products and financial models to mechatronic systems.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar">
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
                className="glass-card flex flex-col p-8 group border-opacity-30 relative overflow-hidden"
              >
                {/* Header Category */}
                <div className={`flex items-center gap-2 mb-6 font-mono text-[0.65rem] tracking-[2px] uppercase border px-3 py-1.5 w-fit rounded-lg font-black ${proj.catClass}`}>
                   {proj.icon} {proj.displayCat}
                </div>
                
                <h3 className="font-serif text-2xl text-white mb-6 group-hover:text-[#e8c97a] transition-colors leading-tight min-h-[3rem] line-clamp-2">{proj.title}</h3>
                
                <div className="flex flex-col gap-6 flex-grow">
                  <div className="space-y-2">
                    <label className="font-mono text-[0.6rem] tracking-[2px] uppercase text-[#555570] font-black block">The Challenge</label>
                    <p className="text-sm text-[#8888a8] leading-relaxed line-clamp-3">{proj.problem}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-mono text-[0.6rem] tracking-[2px] uppercase text-[#e8c97a] font-black block opacity-80">Impact achieved</label>
                    <p className="text-base text-white font-bold leading-relaxed break-words">{proj.impact}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-8 mt-auto border-t border-white/5">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="text-[0.6rem] text-[#555570] font-mono font-black uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
                
                {/* Dynamic Buttons Container */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[0.7rem] bg-slate-800 text-slate-200 px-4 py-2 rounded-lg font-black hover:bg-slate-700 transition no-underline items-center whitespace-nowrap"
                    >
                      <Github size={14} /> VIEW CODE
                    </a>
                  )}

                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[0.7rem] bg-blue-600 text-white px-4 py-2 rounded-lg font-black hover:bg-blue-500 transition no-underline items-center whitespace-nowrap"
                    >
                      <Play size={14} /> LIVE DEMO
                    </a>
                  )}

                  {proj.caseStudy && (
                    <a
                      href={proj.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[0.7rem] border border-[#e8c97a]/30 text-[#e8c97a] px-4 py-2 rounded-lg font-black hover:bg-[#e8c97a] hover:text-[#0a0a0f] transition no-underline items-center whitespace-nowrap"
                    >
                      <FileText size={14} /> VIEW CASE STUDY
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
