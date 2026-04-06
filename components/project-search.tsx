'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Sparkles, Box, LinkIcon, PlayCircle, FileText, Loader2, X } from 'lucide-react'
import { projects } from '@/lib/projects-data'

const synonymMap: Record<string, string[]> = {
  finance: ["fintech", "payments", "revenue", "transactions", "quant"],
  ai: ["machine learning", "ml", "prediction", "models"],
  backend: ["api", "server", "database", "python"],
  analytics: ["sql", "data", "dashboard", "metrics", "bi"],
  product: ["pm", "strategy", "roadmap", "growth"],
};

function scoreProject(project: any, query: string) {
  let score = 0;
  const q = query.toLowerCase();

  const sk = project.skills.map((s: string) => s.toLowerCase());
  const dm = project.domain.toLowerCase();
  const kw = project.keywords.map((k: string) => k.toLowerCase());

  if (sk.some((s: string) => s.includes(q))) score += 3;
  if (dm.includes(q)) score += 2;
  if (kw.some((k: string) => k.includes(q))) score += 2;
  if (project.title.toLowerCase().includes(q)) score += 3;

  for (const [key, synonyms] of Object.entries(synonymMap)) {
    if (key.includes(q) || synonyms.some(syn => syn.includes(q) || q.includes(syn))) {
      synonyms.forEach(syn => {
        if (
          sk.some((s: string) => s.includes(syn)) ||
          dm.includes(syn) ||
          kw.some((k: string) => k.includes(syn))
        ) {
          score += 2;
        }
      });
    }
  }

  return score;
}

export const ProjectSearch = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setActive(true)

    // 1. Instant Local Scoring (Zero Latency)
    const scored = projects
      .map(p => ({ ...p, score: scoreProject(p, query) }))
      .sort((a, b) => b.score - a.score);

    // If scores are all 0, return top 3 defaults, else return scored matches
    const bestMatches = scored[0].score === 0 ? projects.slice(0, 3) : scored.slice(0, 3);
    setResults(bestMatches);

    // 2. Async AI Refinement (Non-blocking)
    try {
      fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, topProjects: bestMatches.map(p => ({ id: p.id, title: p.title })) })
      })
      .then(res => res.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
           // Merge AI reasons back into our instant results
           setResults(prev => prev.map(p => {
             const aiMatch = data.results.find((r: any) => r.id === p.id || r.title === p.title);
             return aiMatch ? { ...p, aiReason: aiMatch.aiReason } : p;
           }));
        }
      })
      .finally(() => setLoading(false));
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 mb-20 px-5">
      <form onSubmit={handleSearch} className="relative group">
         <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-text-secondary group-focus-within:text-accent-gold transition-colors">
            <Search size={22} />
         </div>
         <input
           type="text"
           value={query}
           onChange={(e) => setQuery(e.target.value)}
           placeholder="Search skills, domains, or problems (e.g. 'fintech', 'ML models')..."
           className="w-full bg-bg-card border border-border-color rounded-2xl py-6 pl-14 pr-32 text-lg focus:outline-none focus:ring-2 focus:ring-accent-gold/20 focus:border-accent-gold shadow-2xl transition-all font-medium placeholder-text-muted"
         />
         <div className="absolute inset-y-0 right-3 flex items-center gap-2">
            {query && (
              <button 
                type="button"
                onClick={() => { setQuery(''); setActive(false); setResults([]); }}
                className="p-2 text-text-muted hover:text-text-primary transition-colors"
                aria-label="Clear search"
              >
                <X size={20} />
              </button>
            )}
            <button 
              type="submit"
              disabled={loading}
              className="bg-accent-gold text-bg-main px-6 py-3 rounded-xl font-heading font-black text-sm tracking-tighter hover:bg-accent-gold-hover hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-2"
            >
               {loading ? <><Loader2 size={18} className="animate-spin" /> Thinking...</> : <>Match <Sparkles size={16} /></>}
            </button>
         </div>
      </form>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="mt-12 space-y-8"
          >
             <div className="flex items-center justify-between border-b border-border-color pb-6">
                <h4 className="font-heading font-black text-xs uppercase tracking-[4px] text-accent-gold flex items-center gap-3">
                   <Sparkles size={16} /> {loading ? "Analyzing Context..." : `Showing best matches for "${query}"`}
                </h4>
                <span className="text-xs text-text-muted font-mono">{results.length} results</span>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {results.map((proj, i) => (
                  <motion.div
                    key={proj.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="premium-card p-10 flex flex-col group h-full border-[#D4AF37]/10"
                  >
                     <div className="text-[10px] uppercase font-mono font-black text-accent-gold mb-3 flex items-center gap-2 opacity-70">
                        {proj.cat} · Match Logic
                     </div>
                     <h3 className="font-heading text-xl text-text-primary font-bold mb-4 group-hover:text-accent-gold transition-colors">{proj.title}</h3>
                     
                     <p className="text-sm text-text-secondary leading-relaxed mb-6 italic line-clamp-3">
                        &ldquo;{proj.aiReason || proj.impact}&rdquo;
                     </p>

                     <div className="mt-auto pt-6 border-t border-border-color flex flex-wrap gap-3">
                        {proj.links.github && (
                          <a href={proj.links.github} target="_blank" rel="noopener noreferrer" className="p-2 border border-border-color rounded-lg text-text-muted hover:text-accent-gold hover:border-accent-gold transition-all" aria-label="GitHub">
                             <LinkIcon size={16} />
                          </a>
                        )}
                        {proj.links.live && (
                          <a href={proj.links.live} target="_blank" rel="noopener noreferrer" className="p-2 border border-border-color rounded-lg text-text-muted hover:text-accent-gold hover:border-accent-gold transition-all" aria-label="Live Demo">
                             <PlayCircle size={16} />
                          </a>
                        )}
                        {proj.links.caseStudy && (
                          <a href={proj.links.caseStudy} target="_blank" rel="noopener noreferrer" className="p-2 border border-border-color rounded-lg text-text-muted hover:text-accent-gold hover:border-accent-gold transition-all" aria-label="Case Study">
                             <FileText size={16} />
                          </a>
                        )}
                     </div>
                  </motion.div>
                ))}
                {/* Empty State Completely Removed as per Requirements */}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
