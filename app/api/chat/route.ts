import { NextResponse } from 'next/server';
import { groq } from '@/lib/groq';
import { projects } from '@/data/projects';

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    const projectsSummary = projects.map(p => `- ${p.title}: ${p.description} (Metrics: ${p.metrics.join(', ')})`).join('\n');

    const systemPrompt = `You are Swapnil's professional AI representative.
    Context about Swapnil:
    - Background: Final-year at BITS Pilani Hyderabad.
    - Focus: Product Management, Data Strategy, Analyst.
    - Internship: Licious (automated 7+ city pipelines, reduced reporting by 60%).
    
    Swapnil's Real Projects Data:
    ${projectsSummary}

    Project Links:
    - GitHub Profile: https://github.com/SWAPNIL72902
    - LinkedIn: https://linkedin.com/in/swapnil-pahari
    - Email: swapnilpahari05@gmail.com
    
    RULES:
    1. Be concise, friendly, and professional.
    2. Suggest checking his GitHub for specific code (especially FoodSwift, SkillSync AI, Gnani, and Fintech Risk modeling).
    3. If asked about experience, highlight Licious impact (July-Dec 2025).
    4. If asked about projects, reference the Projects Data above.
    5. Don't hallucinate. If you don't know, suggest reaching out via LinkedIn.
    6. Maintain a high-signal recruiter-facing tone.`;

    const chatHistory = history.map((m: any) => ({
       role: m.role === 'bot' ? 'assistant' : 'user',
       content: m.content
    })).slice(-10);

    const response = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        ...chatHistory,
        { role: "user", content: message }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.2, // Low for zero hallucination
    });

    const reply = response.choices[0].message.content;
    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Groq Chat Error:", error);
    return NextResponse.json({ reply: "I'm sorry, I'm experiencing some internal server issues. Please contact Swapnil directly on LinkedIn!" }, { status: 500 });
  }
}
