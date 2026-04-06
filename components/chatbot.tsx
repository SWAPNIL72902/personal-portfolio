'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'bot'
  content: string
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: "Hi! I'm Swapnil's AI assistant. Ask me about his experience at Licious, his product strategy, or his technical projects!" }
  ])
  
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return
    
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMsg }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history: messages.slice(-5) })
      })

      if (!response.ok) throw new Error('API Error')
      
      const data = await response.json()
      setMessages(prev => [...prev, { role: 'bot', content: data.reply }])
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', content: "I'm having a bit of trouble connecting to the brain! Please try again in a second." }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-[110] font-body selection-gold">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="mb-6 w-[360px] md:w-[420px] h-[550px] bg-[#111117] border border-white/5 rounded-2xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-3xl"
          >
            {/* Header */}
            <div className="bg-[#1a1a24] p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/20">
                    <Bot size={18} className="text-[#D4AF37]" />
                 </div>
                 <div>
                    <h4 className="font-heading font-black text-white text-sm tracking-tight">AI Assistant</h4>
                    <span className="flex items-center gap-1.5 text-[10px] text-[#D4AF37] uppercase font-mono font-black tracking-widest">
                       <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" /> Live Now
                    </span>
                 </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[#71717A] hover:text-white transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow p-6 overflow-y-auto space-y-8 no-scrollbar scroll-smooth"
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.role === 'user' ? 15 : -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border shrink-0 ${m.role === 'user' ? 'bg-[#1a1a24] border-white/5' : 'bg-[#D4AF37]/10 border-[#D4AF37]/20'}`}>
                    {m.role === 'user' ? <User size={14} className="text-[#A1A1AA]" /> : <Bot size={14} className="text-[#D4AF37]" />}
                  </div>
                  <div className={`p-4 rounded-xl text-sm leading-relaxed max-w-[80%] font-medium ${m.role === 'user' ? 'bg-[#D4AF37] text-[#0B0B0F]' : 'bg-[#1a1a24] text-[#A1A1AA] border border-white/5'}`}>
                    {m.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full flex items-center justify-center shrink-0">
                    <Loader2 size={14} className="text-[#D4AF37] animate-spin" />
                  </div>
                  <div className="p-4 rounded-xl bg-[#1a1a24] border border-white/5">
                     <span className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-[#D4AF37]/40 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-[#D4AF37]/40 rounded-full animate-bounce delay-150" />
                        <span className="w-1.5 h-1.5 bg-[#D4AF37]/40 rounded-full animate-bounce delay-300" />
                     </span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-[#1a1a24] border-t border-white/5">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Ask about Projects or Experience..."
                  className="flex-grow bg-[#111117] border border-white/5 text-sm rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#D4AF37]/40 transition-all font-medium placeholder-[#71717A]"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-[#D4AF37] text-[#0B0B0F] p-4 rounded-xl hover:scale-105 active:scale-95 disabled:hover:scale-100 disabled:opacity-50 transition-all shadow-lg hover:bg-[#F5D76E]"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#D4AF37] text-[#0B0B0F] rounded-full shadow-2xl flex items-center justify-center hover:bg-[#F5D76E] transition-all duration-300 group ring-4 ring-[#D4AF37]/5"
        aria-label="AI Chat"
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={26} className="group-hover:-rotate-12 transition-transform duration-300" />}
      </motion.button>
    </div>
  )
}
