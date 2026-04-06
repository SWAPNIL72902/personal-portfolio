'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Globe, Users, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const socials = [
    { icon: <Users size={20} />, label: 'LinkedIn', href: 'https://linkedin.com/in/swapnil-pahari', color: 'bg-[#a78bfa]' },
    { icon: <Globe size={20} />, label: 'GitHub', href: 'https://github.com/SWAPNIL72902', color: 'bg-[#6ee7b7]' }
  ]

  return (
    <section id="contact" className="bg-[#0B0B0F] selection-gold">
      <div className="max-w-limit section-padding px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
           >
              <div className="space-y-6">
                 <div className="glass-pill mb-6 w-fit uppercase font-mono tracking-widest text-[#71717A]">
                    Get In Touch
                 </div>
                 <h2 className="font-heading text-[30px] font-bold text-white leading-tight">
                    Let&apos;s Build the Next<br />Big Outcome.
                 </h2>
                 <p className="text-lg text-[#A1A1AA] max-w-lg leading-relaxed">
                    Always open to discussing 0→1 builds, analytics strategy, or potential full-time roles in Product & Engineering.
                 </p>
              </div>

              <div className="flex flex-col gap-6">
                 <button 
                   onClick={() => document.getElementById('contact-form')?.focus()}
                   className="btn-primary w-fit no-underline"
                 >
                    <Mail size={18} /> Send a Message
                 </button>
                 <div className="flex gap-4">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center border border-white/5 bg-[#111117] rounded-lg text-[#A1A1AA] hover:border-[#D4AF37]/40 hover:text-[#D4AF37] hover:scale-110 transition-all duration-300 no-underline"
                        aria-label={social.label}
                      >
                         {social.icon}
                      </a>
                    ))}
                 </div>
              </div>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="premium-card p-12 text-center flex flex-col items-center border-[#D4AF37]/10"
           >
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full space-y-4 py-8">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-heading text-[24px] font-bold text-white">Message Sent! 🚀</h3>
                  <p className="text-[#A1A1AA]">I've received your message and will get back to you shortly.</p>
                  <button onClick={() => {setStatus('idle'); setFormData({name: '', email: '', message: ''})}} className="mt-4 text-sm text-[#D4AF37] hover:text-[#F5D76E] transition-colors underline underline-offset-4">Send another message</button>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-[24px] font-bold text-white w-full text-left mb-6">Drop a Note</h3>
                  <form 
                    className="w-full space-y-4 flex flex-col"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setStatus('loading');
                      console.log("Submitting:", formData);
                      try {
                        const res = await fetch("/api/contact", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(formData),
                        });
                        const data = await res.json();
                        if (!data.success) throw new Error(data.error);
                        setStatus('success');
                      } catch (err) {
                        setStatus('error');
                      }
                    }}
                  >
                    <input id="contact-form" type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Your Name" className="w-full bg-[#0B0B0F] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
                    <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="Your Email Address" className="w-full bg-[#0B0B0F] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
                    <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="How can we collaborate?" rows={4} className="w-full bg-[#0B0B0F] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] resize-none transition-colors"></textarea>
                    
                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 p-3 rounded-lg text-xs font-medium w-full text-left">
                         <AlertCircle size={14} /> Something went wrong. Try again.
                      </div>
                    )}

                    <button disabled={status === 'loading'} type="submit" className="w-full bg-[#D4AF37] hover:bg-[#F5D76E] disabled:bg-white/10 disabled:text-white/50 text-black font-black font-heading tracking-tight text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition-all mt-2">
                       {status === 'loading' ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <><Send size={16} /> Send Securely</>}
                    </button>
                  </form>
                </>
              )}
           </motion.div>
        </div>
      </div>
    </section>
  )
}
