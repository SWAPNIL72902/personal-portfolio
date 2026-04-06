import { NextResponse } from 'next/server'
import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

const SYSTEM_PROMPT = `You are Swapnil Pahari's AI assistant. Answer questions about his background, work at Licious, skills, and projects concisely and professionally.

KEY FACTS:
- Final-year Mechanical student with Finance minor at BITS Pilani.
- Interned at Licious in Program Management & Data Analytics.
- Skills: SQL, Python, Power BI, Excel, Product Management (NextLeap fellowship).
- Top Project: AI Stock Predictor (Next.js, AI, Real-time APIs).
- Career Goals: Product Management, Analytics, Program Management.

Respond in 3-5 lines maximum. Be analytical and professional.`

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json()

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ reply: "Groq API Key not configured." }, { status: 500 })
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...(history || []).map((m: any) => ({ role: m.role, content: m.content })),
        { role: "user", content: message },
      ],
      temperature: 0.6,
      max_tokens: 500,
    })

    const reply = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that.";

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Groq Chat Error:', error)
    return NextResponse.json({ reply: "I'm having a technical hiccup. Please reach Swapnil directly!" }, { status: 500 })
  }
}
