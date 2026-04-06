'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Share2, Mail, Briefcase, Copy, CheckCircle2, ChevronRight, X, Send, Link2 } from 'lucide-react'

export const ReferralSystem = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showFloating, setShowFloating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [linkInput, setLinkInput] = useState('')
  const [linkError, setLinkError] = useState(false)

  const isValidURL = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  const handleLinkBlur = () => {
    if (!linkInput) {
      setLinkError(false)
      return
    }
    
    let formattedLink = linkInput.trim()
    if (!formattedLink.startsWith('http://') && !formattedLink.startsWith('https://') && formattedLink.includes('.')) {
      formattedLink = `https://${formattedLink}`
    }
    
    if (isValidURL(formattedLink)) {
      setLinkInput(formattedLink)
      setLinkError(false)
    } else {
      setLinkError(true)
    }
  }

  // Floating CTA Logic (> 40% scroll)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const trigger = docHeight * 0.1 // Fires after ~1 regular scroll
      if (scrollY > trigger) {
        setShowFloating(true)
      } else {
        setShowFloating(false)
      }
    }
    
    // Global listener to open it
    const handleOpen = () => setIsOpen(true)
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('open-referral', handleOpen)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('open-referral', handleOpen)
    }
  }, [])

  // Auto-trigger if 20 seconds pass without reaching 40% scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFloating(true)
    }, 20000)
    return () => clearTimeout(timer)
  }, [])

  const portfolioLink = "https://swapnil-pahari.vercel.app" // Ensure valid domain
  const messageTemplate = `Hi,\n\nI came across Swapnil Pahari's portfolio and thought he'd be a great fit for product/data roles.\n\nPortfolio: ${portfolioLink}\n\nHappy to connect you both.`

  const handleCopy = () => {
    navigator.clipboard.writeText(messageTemplate)
    setCopied(true)
    // Analytics tracking representation
    console.log('[Event Tracking] referral_option_selected: copy') 
    setTimeout(() => setCopied(false), 3000)
  }

  const handleEmail = () => {
    console.log('[Event Tracking] referral_option_selected: email')
    const subject = encodeURIComponent(`Candidate Recommendation: Swapnil Pahari`)
    const body = encodeURIComponent(messageTemplate)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  const handleLinkedIn = () => {
    console.log('[Event Tracking] referral_option_selected: linkedin')
    navigator.clipboard.writeText(messageTemplate)
    setCopied(true)
    window.open('https://www.linkedin.com/messaging/compose/', '_blank')
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <>
      {/* Floating CTA */}
      <AnimatePresence>
        {showFloating && !isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => {
               console.log('[Event Tracking] referral_button_click')
               setIsOpen(true)
            }}
            className="fixed bottom-[130px] right-5 md:bottom-[120px] md:right-8 z-[90] bg-[#111117] border border-[#D4AF37] px-5 py-3 rounded-full flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:scale-105 hover:bg-[#D4AF37]/10 transition-all duration-300 group"
          >
            <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-black flex items-center justify-center">
               <Share2 size={16} className="ml-[-1px]" />
            </div>
            <span className="font-heading font-black text-sm tracking-tight text-[#D4AF37] group-hover:text-[#F5D76E] transition-colors">Refer Swapnil</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setIsOpen(false); setShowForm(false) }}
              className="absolute inset-0 bg-[#0B0B0F]/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-[440px] bg-[#111117] border border-white/10 rounded-[20px] shadow-2xl p-6 overflow-hidden md:p-8"
            >
              <button 
                onClick={() => { setIsOpen(false); setShowForm(false) }}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-[#A1A1AA] hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              <div className="text-center mb-8">
                 <div className="w-14 h-14 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#D4AF37]/20">
                    <Share2 size={24} />
                 </div>
                 <h2 className="font-heading text-2xl font-bold text-white mb-2">Refer me forward 🚀</h2>
                 <p className="text-[#A1A1AA] text-sm">Help me reach the right opportunity. Takes 20 seconds, zero spam.</p>
              </div>

              {!showForm ? (
                <div className="space-y-4">
                  {/* Options */}
                  <button onClick={handleEmail} className="w-full flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all group">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-lg bg-[#D4AF37] text-black flex items-center justify-center"><Mail size={18} /></div>
                       <div className="text-left">
                          <div className="text-white font-medium text-sm">Send Email</div>
                          <div className="text-[#A1A1AA] text-xs">Prefilled template opens in app</div>
                       </div>
                    </div>
                    <ChevronRight size={18} className="text-[#71717A] group-hover:text-[#D4AF37] transition-colors" />
                  </button>

                  <button onClick={handleLinkedIn} className="w-full flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all group">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-lg bg-[#D4AF37] text-black flex items-center justify-center"><Briefcase size={18} /></div>
                       <div className="text-left">
                          <div className="text-white font-medium text-sm">Share on LinkedIn</div>
                          <div className="text-[#A1A1AA] text-xs">Copies text & opens DM tab</div>
                       </div>
                    </div>
                    <ChevronRight size={18} className="text-[#71717A] group-hover:text-[#D4AF37] transition-colors" />
                  </button>

                  <button onClick={handleCopy} className="w-full flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all group relative overflow-hidden">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 text-white flex items-center justify-center">
                          {copied ? <CheckCircle2 size={18} className="text-emerald-400" /> : <Copy size={18} />}
                       </div>
                       <div className="text-left">
                          <div className="text-white font-medium text-sm">Copy Message</div>
                          <div className="text-[#A1A1AA] text-xs">{copied ? "Copied successfully 🚀" : "Paste anywhere manually"}</div>
                       </div>
                    </div>
                  </button>
                  
                  <div className="pt-6 mt-4 text-center border-t border-white/5">
                    <button 
                      onClick={() => setShowForm(true)}
                      className="text-xs text-[#71717A] hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
                    >
                      Prefer to submit directly via form?
                    </button>
                  </div>
                </div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                  onSubmit={(e) => { 
                    e.preventDefault(); 
                    
                    if (linkInput.trim() && !isValidURL(linkInput)) {
                      setLinkError(true);
                      return;
                    }

                    console.log('[Event Tracking] referral_completed', {
                      referralLink: linkInput || "Not provided"
                    });
                    
                    setCopied(true); 
                    setTimeout(() => {
                      setIsOpen(false); 
                      setShowForm(false); 
                      setCopied(false);
                      setLinkInput('');
                      setLinkError(false);
                    }, 2000);
                  }}
                >
                  <button type="button" onClick={() => setShowForm(false)} className="text-xs text-[#D4AF37] hover:text-[#F5D76E] mb-2 flex items-center gap-1 font-semibold uppercase tracking-widest pl-1">
                    ← Back
                  </button>
                  <div className="space-y-3">
                    <input type="text" required placeholder="Hiring Manager Name" className="w-full bg-[#0B0B0F] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
                    <input type="email" required placeholder="Their Email Address" className="w-full bg-[#0B0B0F] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
                    
                    <div className="relative">
                      <input 
                        type="text" 
                        value={linkInput}
                        onChange={(e) => {
                          setLinkInput(e.target.value)
                          if (linkError) setLinkError(false)
                        }}
                        onBlur={handleLinkBlur}
                        placeholder="https://company.com/job-role (Optional)" 
                        className={`w-full bg-[#0B0B0F] border rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors ${linkError ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#D4AF37]'}`}
                      />
                      <div className="absolute right-3 top-[18px] text-white/30 pointer-events-none">
                        <Link2 size={16} />
                      </div>
                      {linkError && (
                        <p className="text-red-500 text-xs mt-1.5 ml-1">Please enter a valid URL (include https://)</p>
                      )}
                    </div>

                    <textarea placeholder="Optional context..." rows={3} className="w-full bg-[#0B0B0F] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] resize-none transition-colors"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#F5D76E] text-black font-black font-heading tracking-tight text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                    {copied ? "Sent Successfully ✓" : <><Send size={16} /> Send Referral Intelligently</>}
                  </button>
                </motion.form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
