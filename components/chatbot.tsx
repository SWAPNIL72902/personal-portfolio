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
    if (!text.trim()) return
    const userMsg = { role: 'user' as const, content: text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: messages })
      })
      const data = await response.json()
      setIsTyping(false)
      setMessages(prev => [...prev, { role: 'bot', content: data.reply || "I'm having trouble connecting. Feel free to contact Swapnil directly on LinkedIn or via email!" }])
    } catch (err) {
      setIsTyping(false)
      setMessages(prev => [...prev, { role: 'bot', content: "Connection issue! Please reach Swapnil directly via LinkedIn or email." }])
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[1000] w-14 h-14 rounded-full bg-[var(--accent)] text-[#0a0a0f] border-none cursor-pointer flex items-center justify-center shadow-[0_4px_24px_rgba(232,201,122,0.35)] hover:scale-105 hover:shadow-[0_6px_32px_rgba(232,201,122,0.45)] transition-all duration-200"
        title="Ask Swapnil AI"
      >
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-[5.5rem] right-8 z-[1000] w-[380px] max-h-[520px] bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-lg)] flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            <div className="bg-gradient-to-br from-[rgba(232,201,122,0.15)] to-[rgba(110,231,183,0.1)] border-b border-[var(--border)] p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[var(--accent)] flex items-center justify-center text-[1.1rem] text-[#0a0a0f] font-bold">
                S
              </div>
              <div className="flex-1">
                <strong className="text-[0.9rem] text-[var(--text)] block font-semibold leading-tight">Ask Swapnil AI</strong>
                <span className="text-[0.72rem] text-[var(--accent2)]">● Online — ask me anything</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-[var(--text-dim)] hover:text-[var(--text)] transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 scroll-smooth max-h-[350px]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-4 py-2.5 rounded-[12px] text-[0.82rem] leading-[1.55] ${msg.role === 'bot' ? 'bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text)] self-start rounded-bl-[4px]' : 'bg-[var(--accent)] text-[#0a0a0f] font-medium self-end rounded-br-[4px]'}`}
                >
                  {msg.content}
                </div>
              ))}
              {isTyping && (
                <div className="bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text)] self-start rounded-[12px] rounded-bl-[4px] px-4 py-2.5 flex items-center gap-1">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="px-4 pb-2 pt-1 flex flex-wrap gap-1.5 border-t border-[var(--border)] bg-[var(--surface)]">
              {['About Swapnil', 'Licious work', 'Top projects', 'Strengths'].map((sug) => (
                <button
                  key={sug}
                  onClick={() => handleSend(sug)}
                  className="bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text-muted)] text-[0.72rem] px-2.5 py-1 rounded-full cursor-pointer hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                >
                  {sug}
                </button>
              ))}
            </div>

            <div className="p-4 border-t border-[var(--border)] flex gap-2 bg-[var(--surface2)]">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder="Ask anything about Swapnil..."
                className="flex-1 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg px-3.5 py-2 text-[0.82rem] text-[var(--text)] outline-none focus:border-[var(--accent)] transition-all font-sans"
              />
              <button
                onClick={() => handleSend(input)}
                className="bg-[var(--accent)] text-[#0a0a0f] border-none rounded-lg w-9 h-9 flex items-center justify-center cursor-pointer hover:opacity-85 transition-opacity"
                aria-label="Send"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
