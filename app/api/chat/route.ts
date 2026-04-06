import { NextResponse } from 'next/server'
import Groq from 'groq-sdk'

// Initialize outside for potential reuse but ensure key exists
const getGroqClient = () => {
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) return null
  return new Groq({ apiKey })
}

const SYSTEM_PROMPT = `You are Swapnil Pahari's AI assistant. 
Be helpful, concise, and professional. 
Answer questions about his background (BITS Pilani, Finance minor), work (Licious Intern, NrityaTech), and projects (Stock Predictor, FoodSwift PM case study).

PERSONALITY:
- Analytical but approachable.
- Concise (3-5 lines max).
- Professional tone.

KEY STATS:
- 15+ projects
- 7+ cities impacted at Licious
- 82% ML model accuracy

Always favor brevity and structure.`

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json()

    const groq = getGroqClient()
    if (!groq) {
      console.error('GROQ_API_KEY is missing in environment variables')
      return NextResponse.json({ reply: "I'm having a technical configuration issue. Please reach Swapnil directly!" }, { status: 500 })
    }

    if (!message) {
      return NextResponse.json({ reply: "I didn't catch that. Could you repeat?" }, { status: 400 })
    }

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(history || []).map((m: any) => ({ 
        role: m.role === 'user' ? 'user' : 'assistant', 
        content: m.content 
      })).slice(-6),
      { role: "user", content: message },
    ]

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: messages as any,
      temperature: 0.5,
      max_tokens: 400,
    })

    const reply = completion.choices[0]?.message?.content || "I couldn't generate a response. Please try again!";

    return NextResponse.json({ reply })
  } catch (error: any) {
    console.error('Groq API Error Debug:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    })
    
    return NextResponse.json({ 
      reply: "Technical hiccup! It might be a connection issue or high traffic. Please reach me on LinkedIn!" 
    }, { status: 500 })
  }
}
