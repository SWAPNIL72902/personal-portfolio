'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Sparkles, X, Loader2, Package, TrendingUp, BarChart3, Settings2 } from 'lucide-react'
import { projects } from '@/data/projects'

export const ProjectSearch = () => {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [loading, setLoading] = useState(false)

  // Search Logic from Step 5
  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  // Failsafe from Step 6
  const isFailsafeActive = query.length > 0 && filteredProjects.length === 0;
  const displayProjects = isFailsafeActive ? projects : filteredProjects;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      setLoading(true);
      setTimeout(() => setLoading(false), 600);
      setActive(true);
    }
  };

  return (
    <div id="quick-search" className="w-full max-w-5xl mx-auto mt-24 mb-32 px-5">
      <div className="flex flex-col items-center mb-10 text-center">
         <div className="glass-pill mb-4 flex items-center gap-2 px-4 py-1.5 border border-white/5 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-[#A1A1AA]">
            <Sparkles size={12} className="text-accent-gold" /> AI Search Index Activated
         </div>
         <h3 className="text-3xl font-heading font-black text-white mb-2">Find <span className="text-accent-gold">Specific Expertise</span></h3>
         <p className="text-text-secondary text-sm max-w-md">Query the repository for specific tools, domains, or business impact metrics.</p>
      </div>

      <form onSubmit={handleSearch} className="relative group max-w-3xl mx-auto">
         <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-text-muted group-focus-within:text-accent-gold transition-colors">
            <Search size={20} />
         </div>
         <input
           type="text"
           value={query}
           onChange={(e) => {
             setQuery(e.target.value);
             if (!e.target.value) setActive(false);
           }}
           placeholder="Try 'Revenue Growth', 'Supply Chain', 'Python'..."
           className="w-full bg-[#13131A] border border-white/10 rounded-2xl py-6 pl-16 pr-32 text-lg focus:outline-none focus:ring-2 focus:ring-accent-gold/10 focus:border-accent-gold/50 shadow-2xl transition-all font-medium placeholder-text-muted/40 text-white"
         />
         <div className="absolute inset-y-0 right-4 flex items-center gap-3">
            {query && (
              <button 
                type="button"
                onClick={() => { setQuery(''); setActive(false); }}
                className="p-2 text-text-muted hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            )}
            <button 
              type="submit"
              disabled={loading}
              className="bg-accent-gold text-black px-8 py-3.5 rounded-xl font-heading font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-2"
            >
               {loading ? <Loader2 size={16} className="animate-spin" /> : "SEARCH"}
            </button>
         </div>
      </form>

      <AnimatePresence>
        {active && query && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="mt-16"
          >
             {/* Match Header */}
             <div className="flex items-center justify-between border-b border-white/5 pb-8 mb-10">
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-accent-gold/10 rounded-xl">
                      <Sparkles size={20} className="text-accent-gold" />
                   </div>
                   <div>
                      <h4 className="font-heading font-black text-xs uppercase tracking-[0.2em] text-accent-gold">
                         {isFailsafeActive ? "No exact matches found" : `Best Results for "${query}"`}
                      </h4>
                      <p className="text-[10px] text-text-muted uppercase tracking-widest font-mono mt-1">
                         {isFailsafeActive ? "Showing all relevant work as fallback" : `Showing ${displayProjects.length} matching entities`}
                      </p>
                   </div>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayProjects.slice(0, 6).map((proj, i) => (
                  <motion.div
                    key={proj.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-white/[0.02] border border-white/5 p-8 rounded-2xl flex flex-col hover:border-accent-gold/20 transition-all"
                  >
                     <div className="flex items-center justify-between mb-4">
                        <span className="text-[9px] font-black font-mono text-accent-gold/40 group-hover:text-accent-gold/80 uppercase tracking-[0.2em] transition-colors">
                           {proj.category}
                        </span>
                        <div className="p-1 rounded bg-white/5 text-text-muted">
                           <LayoutGrid size={10} />
                        </div>
                     </div>
                     <h5 className="text-lg font-heading font-black text-white group-hover:text-accent-gold transition-colors mb-3">{proj.title}</h5>
                     <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 mb-6">{proj.description}</p>
                     
                     <div className="mt-auto flex flex-wrap gap-1.5">
                        {proj.tags.slice(0, 3).map(tag => (
                           <span key={tag} className="text-[8px] font-mono text-text-muted uppercase border border-white/5 px-2 py-0.5 rounded">#{tag}</span>
                        ))}
                     </div>
                  </motion.div>
                ))}
             </div>

             {displayProjects.length > 6 && (
                <div className="mt-12 text-center">
                   <button 
                     onClick={() => {
                        const target = document.getElementById('projects');
                        target?.scrollIntoView({ behavior: 'smooth' });
                     }}
                     className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted hover:text-accent-gold transition-colors inline-flex items-center gap-2"
                   >
                      EXPLORE ALL {displayProjects.length} PROJECTS <TrendingUp size={12} />
                   </button>
                </div>
             )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
