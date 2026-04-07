'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Sparkles, 
  X, 
  Package, 
  TrendingUp, 
  BarChart3, 
  Settings2,
  ChevronRight,
  Target,
  ArrowRight
} from 'lucide-react'
import { projects, Project, ProjectCategory } from '@/data/projects'

const CATEGORY_INFO: Record<ProjectCategory, { label: string; icon: React.ReactNode; color: string }> = {
  Product: { 
    label: "Product & Strategy", 
    icon: <Package size={18} />, 
    color: "#D4AF37" 
  },
  Finance: { 
    label: "Finance & Quant", 
    icon: <TrendingUp size={18} />, 
    color: "#D4AF37" 
  },
  Data: { 
    label: "Data & Analytics", 
    icon: <BarChart3 size={18} />, 
    color: "#D4AF37" 
  },
  Mechanical: { 
    label: "Systems & Mechanical", 
    icon: <Settings2 size={18} />, 
    color: "#D4AF37" 
  }
}

export const Projects = () => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    // Step 8: Debug log
    console.log("TOTAL PROJECTS:", projects.length);
  }, []);

  // Search logic from Step 5
  const filteredBySearch = useMemo(() => {
    if (!query) return projects;
    
    const results = projects.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );

    // Failsafe Logic from Step 6
    if (results.length === 0) {
      return projects;
    }
    return results;
  }, [query]);

  const isFailsafeActive = query.length > 0 && projects.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  ).length === 0;

  // Grouping logic for sections
  const featuredProjects = useMemo(() => filteredBySearch.filter(p => p.featured), [filteredBySearch]);
  const productProjects = useMemo(() => filteredBySearch.filter(p => p.category === 'Product'), [filteredBySearch]);
  const financeProjects = useMemo(() => filteredBySearch.filter(p => p.category === 'Finance'), [filteredBySearch]);
  const dataProjects = useMemo(() => filteredBySearch.filter(p => p.category === 'Data'), [filteredBySearch]);
  const mechanicalProjects = useMemo(() => filteredBySearch.filter(p => p.category === 'Mechanical'), [filteredBySearch]);

  const renderProjectGrid = (title: string, icon: React.ReactNode, projectList: Project[]) => {
    if (projectList.length === 0) return null;
    return (
      <div className="mb-24 last:mb-0">
        <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-6">
          <div className="p-3 bg-accent-gold/10 text-accent-gold rounded-xl border border-accent-gold/20">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tight">{title}</h3>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-[0.3em] font-bold mt-1">
              Showing {projectList.length} Matching Entites
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="bg-[#0B0B0F] py-32 relative overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/4 -right-1/4 w-[50%] h-[50%] bg-accent-gold/5 rounded-full blur-[150px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[50%] h-[50%] bg-accent-gold/5 rounded-full blur-[150px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-accent-gold" />
              <span className="text-accent-gold font-mono text-xs uppercase tracking-[0.4em] font-black">Project Repository</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-6 leading-[1.1]">
              Architecting <span className="text-accent-gold">Impact</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              A comprehensive showcase of multidisciplinary work across 0→1 products, high-stakes finance, and complex engineering systems.
            </p>
          </motion.div>

          {/* Search Box */}
          <div className="w-full md:w-96 relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent-gold transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search by keywords..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-[#13131A] border border-white/10 rounded-2xl py-5 pl-14 pr-12 text-sm focus:outline-none focus:border-accent-gold/50 focus:ring-4 focus:ring-accent-gold/5 transition-all text-white placeholder:text-text-muted/40 font-medium"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-5 top-1/2 -translate-y-1/2 text-text-muted hover:text-white">
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Failsafe Notice */}
        <AnimatePresence>
          {isFailsafeActive && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-6 rounded-2xl mb-16 flex items-center gap-4 text-accent-gold shadow-xl"
            >
              <div className="p-2 bg-accent-gold rounded-lg text-black">
                <Target size={18} />
              </div>
              <div>
                <p className="font-heading font-black text-sm uppercase tracking-wider">No exact matches for &quot;{query}&quot;</p>
                <p className="text-xs text-accent-gold/70 mt-0.5">Showing all relevant work to ensure full context.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sectioned Display */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {/* Featured Section */}
            {!query && featuredProjects.length > 0 && renderProjectGrid("Featured Projects ⭐", <Sparkles size={18} />, featuredProjects)}
            
            {/* Category Sections */}
            {renderProjectGrid("Product & Strategy 🚀", <Package size={18} />, productProjects)}
            {renderProjectGrid("Finance & Quant 💰", <TrendingUp size={18} />, financeProjects)}
            {renderProjectGrid("Data & Analytics 📊", <BarChart3 size={18} />, dataProjects)}
            {renderProjectGrid("Systems & Mechanical ⚙️", <Settings2 size={18} />, mechanicalProjects)}
          </AnimatePresence>
        </div>

        {/* Footer info */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 group">
          <div className="flex items-center gap-3">
             <div className="h-2 w-2 rounded-full bg-accent-gold animate-pulse" />
             <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold">Total Compiled Projects: {projects.length}</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Build Version 4.0.1</span>
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      className="group bg-[#13131A] border border-white/5 rounded-3xl p-10 flex flex-col h-full hover:border-[#D4AF37]/30 transition-all duration-500 shadow-2xl relative overflow-hidden"
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Header Info */}
      <div className="flex items-start justify-between mb-8 relative z-10">
        <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map(tag => (
                <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-[#A1A1AA] bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    {tag}
                </span>
            ))}
        </div>
        {project.featured && (
            <div className="bg-accent-gold text-black p-1.5 rounded-lg shadow-lg">
                <Sparkles size={14} />
            </div>
        )}
      </div>

      {/* Title & Description */}
      <div className="relative z-10 mb-8">
        <h4 className="text-2xl font-heading font-black text-white mb-4 group-hover:text-accent-gold transition-colors duration-300 leading-tight">
          {project.title}
        </h4>
        <p className="text-text-secondary text-[15px] leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Metrics Section */}
      <div className="mt-auto relative z-10">
        <label className="text-[9px] font-mono text-accent-gold uppercase tracking-[0.3em] font-black block mb-4">Hard Metrics & Results</label>
        <div className="flex flex-wrap gap-3 mb-8">
          {project.metrics.map((metric, i) => (
            <div 
              key={i} 
              className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl text-xs font-bold text-white flex items-center gap-2 group-hover:bg-accent-gold/10 group-hover:border-accent-gold/30 transition-all duration-500"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              {metric}
            </div>
          ))}
        </div>

        {/* Action Button */}
        {project.link ? (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-accent-gold transition-colors group-hover:gap-5 cursor-pointer"
          >
             View Case Study <ArrowRight size={16} className="text-accent-gold" />
          </a>
        ) : (
          <button className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-accent-gold transition-colors group-hover:gap-5">
             Deep Dive <ArrowRight size={16} className="text-accent-gold" />
          </button>
        )}
      </div>
    </motion.div>
  )
}
