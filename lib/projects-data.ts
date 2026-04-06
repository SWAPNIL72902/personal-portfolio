import React from 'react'

export interface ProjectLinks {
  github?: string;
  live?: string;
  caseStudy?: string;
}

export interface Project {
  id: string;
  title: string;
  cat: string;
  displayCat: string;
  iconType: string;
  catClass: string;
  problem: string;
  impact: string;
  tags: string[];
  links: ProjectLinks;
  domain: string;
  skills: string[];
  keywords: string[];
}

export const projects: Project[] = [
  // ⭐ FEATURED
  {
    id: 'licious-analytics',
    title: 'Licious – Program Management & Analytics',
    cat: 'featured',
    displayCat: 'Featured · Business',
    iconType: 'check',
    catClass: 'bg-emerald-400/5 text-emerald-400 border-emerald-400/10',
    problem: 'Manual reporting and fragmented data across city business teams slowed down daily decision-making.',
    impact: 'Automated 7+ city pipelines · Enabled real-time KPI tracking · Reduced manual effort · Improved decision speed.',
    tags: ['SQL', 'Python', 'Analytics', 'Automation'],
    links: { caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/LICIOUS_FINAL_REVIEW%20(3)%20(1).pdf' },
    domain: 'Business Analytics, Data',
    skills: ['SQL', 'Python', 'Reporting', 'Automation', 'analytics', 'data'],
    keywords: ['dashboard', 'kpi', 'metrics', 'pipeline', 'business']
  },
  {
    id: 'paytm-upi',
    title: 'Paytm UPI Failure Recovery System',
    cat: 'featured',
    displayCat: 'Featured · Product',
    iconType: 'briefcase',
    catClass: 'bg-blue-400/5 text-blue-400 border-blue-400/10',
    problem: 'High churn rates during intermittent UPI downtime causing transaction drop-offs.',
    impact: 'Designed recovery flow · Optimized transaction retry logic · Stabilized payment success rates.',
    tags: ['Product Design', 'SQL', 'Payment Ops'],
    links: { github: 'https://github.com/SWAPNIL72902/Paytm' },
    domain: 'Product Management, Fintech',
    skills: ['SQL', 'product management', 'analytics', 'experimentation', 'finance', 'UX Design', 'product'],
    keywords: ['upi', 'transactions', 'conversion', 'revenue', 'payments']
  },
  {
    id: 'stock-predictor',
    title: 'AI Stock Intelligence Dashboard',
    cat: 'featured',
    displayCat: 'Featured · Engineering',
    iconType: 'layers',
    catClass: 'bg-amber-400/5 text-amber-400 border-amber-400/10',
    problem: 'Retail investors find it hard to track real-time market sentiment and price predictions in one place.',
    impact: '82% prediction accuracy · Real-time sentiment signals · Interactive 30-day price charts.',
    tags: ['Next.js', 'AI/ML', 'Market APIs', 'Tailwind'],
    links: { live: 'https://stock-predictor-beige.vercel.app/' },
    domain: 'Engineering, Machine Learning',
    skills: ['AI', 'Python', 'React', 'machine learning', 'finance', 'backend'],
    keywords: ['predictive', 'investing', 'market', 'web', 'dashboard', 'api']
  },

  // 🚀 PRODUCT MANAGEMENT
  {
    id: 'foodswift',
    title: 'FoodSwift – Delivery Reliability Case',
    cat: 'pm',
    displayCat: 'Product Management',
    iconType: 'settings',
    catClass: 'bg-violet-400/5 text-violet-400 border-violet-400/10',
    problem: 'Orders/user dropped from 3.2 to 2.8 while NPS fell from 42 to 35 across 50K restaurants.',
    impact: 'Built inventory sync & capacity throttling · 2M MAU focus · Designed forecasting dashboard.',
    tags: ['PRD', 'Metrics', 'Inventory Sync'],
    links: { github: 'https://github.com/SWAPNIL72902/FoodSwift' },
    domain: 'Product Management',
    skills: ['PRD', 'Metrics', 'Strategy', 'product management', 'analytics'],
    keywords: ['delivery', 'reliability', 'nps', 'mau', 'growth']
  },
  {
    id: 'insta-reels',
    title: 'Instagram Reels – Strategy & Growth',
    cat: 'pm',
    displayCat: 'Product Management',
    iconType: 'settings',
    catClass: 'bg-violet-400/5 text-violet-400 border-violet-400/10',
    problem: '12% drop in watch time across 50M users due to feed monotony.',
    impact: 'Designed "Mood Selector" feature · +4.5 min/session watch time · ₹350Cr projected revenue impact.',
    tags: ['GTM', 'Recommender Systems', 'Retention'],
    links: { github: 'https://github.com/SWAPNIL72902/Insta_PM' },
    domain: 'Product Strategy',
    skills: ['GTM', 'Growth', 'ARPU', 'product management', 'analytics'],
    keywords: ['retention', 'engagement', 'revenue', 'monetization', 'social']
  },
  {
    id: 'skillsync',
    title: 'SkillSync – AI Learning Path Product',
    cat: 'pm',
    displayCat: 'Product Management',
    iconType: 'settings',
    catClass: 'bg-violet-400/5 text-violet-400 border-violet-400/10',
    problem: '68% of users interviewed felt confused about what to learn next in a crowded edtech market.',
    impact: 'Built AI roadmap generator · RICE prioritization mapping · Full GTM strategy development.',
    tags: ['0 → 1', 'AI Roadmap', 'User Research'],
    links: { github: 'https://github.com/SWAPNIL72902/Skill_Sync' },
    domain: 'Product Strategy',
    skills: ['0 to 1', 'Product Roadmap', 'RICE', 'product management', 'AI'],
    keywords: ['edtech', 'roadmap', 'generator', 'strategy']
  },

  // 📊 DATA / ANALYTICS
  {
    id: 'edtech-analysis',
    title: 'EdTech Dashboard Analysis',
    cat: 'data',
    displayCat: 'Data · Analytics',
    iconType: 'database',
    catClass: 'bg-rose-400/5 text-rose-400 border-rose-400/10',
    problem: 'Fragmented student engagement data across thousands of courses.',
    impact: 'Built Power BI visualization engine · 25% faster identification of at-risk programs.',
    tags: ['Power BI', 'Data Modeling', 'Business Intelligence'],
    links: { github: 'https://github.com/SWAPNIL72902/EdTech' },
    domain: 'Data Analytics',
    skills: ['Power BI', 'Data Visualization', 'analytics', 'sql', 'backend'],
    keywords: ['dashboard', 'bi', 'intelligence', 'metrics']
  },

  // 💰 FINANCE (CASE STUDIES)
  {
    id: 'risk-analytics',
    title: 'Financial Risk Analytics',
    cat: 'finance',
    displayCat: 'Finance',
    iconType: 'dollar',
    catClass: 'bg-orange-400/5 text-orange-400 border-orange-400/10',
    problem: 'High portfolio volatility exposure in standard equity selections.',
    impact: 'Computed VaR metrics across 4.5 years of data · Applied GARCH for volatility clusters.',
    tags: ['Quant Finance', 'VaR', 'Time Series'],
    links: { caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/16_EKC_EMAMILTD_ENGINERSIN_ESABINDIA%20.pdf' },
    domain: 'Finance',
    skills: ['Risk Analytics', 'VaR', 'GARCH', 'finance', 'analytics'],
    keywords: ['quant', 'volatility', 'equities', 'portfolio', 'financial']
  },
  {
    id: 'portfolio-sapm',
    title: 'Portfolio Optimization (SAPM)',
    cat: 'finance',
    displayCat: 'Finance',
    iconType: 'dollar',
    catClass: 'bg-orange-400/5 text-orange-400 border-orange-400/10',
    problem: 'Unoptimized Sharpe ratios in multi-asset class allocation.',
    impact: 'Built Minimum Variance Portfolio for 8+ assets · Maximized returns.',
    tags: ['Modern Portfolio Theory', 'Sharpe Ratio'],
    links: { caseStudy: 'https://github.com/SWAPNIL72902/Finance/blob/main/SAPM%20Project%20.pdf' },
    domain: 'Finance',
    skills: ['Portfolio Optimization', 'Sharpe Ratio', 'finance', 'analytics'],
    keywords: ['assets', 'allocation', 'variance', 'returns', 'financial']
  },

  // ⚙️ ENGINEERING
  {
    id: 'mechanical-gearbox',
    title: 'Epicyclic Gearbox Fabrication',
    cat: 'eng',
    displayCat: 'Mechanical',
    iconType: 'cpu',
    catClass: 'bg-cyan-400/5 text-cyan-400 border-cyan-400/10',
    problem: 'Design requirement for high-reduction torque transmission in compact systems.',
    impact: 'Fabricated full system with CAD+CNC execution · Tested for performance.',
    tags: ['CAD', 'CNC', 'Mechatronics'],
    links: { caseStudy: 'https://github.com/SWAPNIL72902/mechanical/blob/main/EpicyclicGearTrain_Group-12%20(1).pdf' },
    domain: 'Engineering',
    skills: ['CAD', 'CNC', 'Fabrication', 'backend'],
    keywords: ['torque', 'transmission', 'manufacturing', 'mechanical']
  }
];
