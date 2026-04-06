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
      skills: p.skills,
      problem: p.problem
    }));

    const systemPrompt = `You are an intelligent portfolio assistant.
Given a user query and a list of projects, return ONLY the most relevant projects.

Rules:
- Use semantic understanding (not exact keyword match)
- Always return at least 2-3 best matches
- Even if weak match, still return closest ones
- DO NOT return empty results

Output format (STRICT JSON):
{
  "results": [
    {
      "title": "Project Name",
      "reason": "Why this matches"
    }
  ]
}`;

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt
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
    let finalResults = body.results.map((aiResult: any) => {
      const fullProject = projects.find(p => p.title === aiResult.title);
      return fullProject ? { ...fullProject, aiReason: aiResult.reason } : null;
    }).filter(Boolean);

    // Hard fallback if AI returns 0 valid results
    if (finalResults.length === 0) {
      console.warn("AI returned 0 results, using hard fallback");
      finalResults = getHardFallback(query);
    }

    return NextResponse.json({ results: finalResults });

  } catch (error) {
    console.error("Groq Search Error:", error);
    
    // Fallback: Local keyword matching
    const { query } = await req.json();
    return NextResponse.json({ results: getHardFallback(query), fallback: true });
  }
}

// Fallback logic
function getHardFallback(query: string) {
  const lq = query.toLowerCase();
  const matched = projects.filter(project =>
    project.skills.some(skill => skill.toLowerCase().includes(lq)) ||
    project.domain.toLowerCase().includes(lq) ||
    project.title.toLowerCase().includes(lq)
  );
  
  if (matched.length > 0) return matched.slice(0, 3);
  
  // Ultimate fallback: Top 3 projects
  return projects.slice(0, 3);
}

