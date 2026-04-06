'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Send, X } from 'lucide-react'

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', content: "Hey! I'm Swapnil's AI assistant. I can tell you about his projects, work at Licious, skills, and career goals. What would you like to know? 👋" }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = async (text: string) => {
    const messageToSend = text || input
    if (!messageToSend.trim() || isTyping) return
    
    const userMsg = { role: 'user' as const, content: messageToSend }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageToSend, history: messages.slice(-5) })
      })
      
      const data = await response.json()
      setIsTyping(false)
      setMessages(prev => [...prev, { role: 'bot', content: data.reply || "I'm having trouble connecting. Feel free to contact Swapnil directly!" }])
    } catch (err) {
      setIsTyping(false)
      setMessages(prev => [...prev, { role: 'bot', content: "Connection issue! Please reach Swapnil directly via LinkedIn or email." }])
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[1000] w-14 h-14 rounded-full bg-[#e8c97a] text-[#0a0a0f] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all outline-none"
        title="Ask Swapnil AI"
      >
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-[5.5rem] right-4 md:right-8 z-[1000] w-[calc(100vw-2rem)] md:w-[380px] h-[500px] md:h-[550px] max-w-[90vw] bg-[#111118]/95 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 md:p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e8c97a] flex items-center justify-center font-bold text-[#0a0a0f]">S</div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white tracking-tight">Ask Swapnil AI</span>
                  <span className="text-[0.65rem] text-[#6ee7b7] font-black uppercase tracking-widest leading-none">● Online</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[#8888a8] hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-4 scroll-smooth">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'bot' ? 'bg-white/5 border border-white/5 text-[#e8e8f0] self-start rounded-bl-sm' : 'bg-[#e8c97a] text-[#0a0a0f] font-bold self-end rounded-br-sm'}`}
                >
                  {msg.content}
                </div>
              ))}
              {isTyping && (
                <div className="bg-white/5 border border-white/5 self-start rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5 min-w-[60px]">
                  <div className="typing-dot" style={{ animationDelay: '0s' }}></div>
                  <div className="typing-dot" style={{ animationDelay: '0.2s' }}></div>
                  <div className="typing-dot" style={{ animationDelay: '0.4s' }}></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            <div className="px-4 py-3 flex flex-wrap gap-2 border-t border-white/5 bg-black/10">
              {['About Swapnil', 'Licious work', 'Top projects'].map((sug) => (
                <button
                  key={sug}
                  onClick={() => handleSend(sug)}
                  className="bg-white/5 border border-white/10 text-[#8888a8] text-[0.65rem] font-bold px-3 py-1.5 rounded-lg hover:border-[#e8c97a] hover:text-[#e8c97a] transition-all"
                >
                  {sug}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 md:p-6 border-t border-white/10 bg-white/5">
              <div className="flex items-center gap-2 bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-2 focus-within:border-[#e8c97a] transition-all shadow-inner">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                  placeholder="Ask anything..."
                  className="flex-1 bg-transparent border-none text-white text-sm outline-none font-medium h-10"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={isTyping}
                  className="text-[#e8c97a] hover:scale-110 active:scale-95 disabled:opacity-30 disabled:scale-100 transition-all cursor-pointer"
                  aria-label="Send"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
