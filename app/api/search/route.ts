import { NextResponse } from 'next/server';
import { groq } from '@/lib/groq';
import { projects } from '@/lib/projects-data';

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    if (!query) {
      return NextResponse.json({ results: [] });
    }

    // Minify project data for AI processing
    const projectSummaries = projects.map(p => ({
      title: p.title,
      domain: p.domain,
      skills: p.skills.join(', '),
      problem: p.problem
    }));

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a semantic project matcher. Given a user query and a project dataset, return the top 3 most relevant projects.
          Analyze domain, technical skills, and problem-solving impact. Use semantic understanding, not keyword matching.
          Return ONLY valid JSON in this format:
          {
            "results": [
              { "title": "Project Title", "reason": "Why it is relevant" }
            ]
          }`
        },
        {
          role: "user",
          content: `Project Dataset: ${JSON.stringify(projectSummaries)}
          User Query: "${query}"`
        }
      ],
      model: "llama3-70b-8192",
      response_format: { type: "json_object" }
    });

    const body = JSON.parse(response.choices[0].message.content || '{"results": []}');
    
    // Map AI titles back to full project objects
    const finalResults = body.results.map((aiResult: any) => {
      const fullProject = projects.find(p => p.title === aiResult.title);
      return fullProject ? { ...fullProject, aiReason: aiResult.reason } : null;
    }).filter(Boolean);

    return NextResponse.json({ results: finalResults });

  } catch (error) {
    console.error("Groq Search Error:", error);
    
    // Fallback: Local keyword matching
    const { query } = await req.json();
    const fallback = projects.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) || 
      p.skills.some(s => s.toLowerCase().includes(query.toLowerCase())) ||
      p.domain.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 3);

    return NextResponse.json({ results: fallback, fallback: true });
  }
}
