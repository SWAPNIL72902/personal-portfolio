import { NextResponse } from "next/server";
import { groq } from "@/lib/groq";
import { projectsData } from "@/data/projects";

export async function POST(req: Request) {
  try {
    const { query, topProjects } = await req.json();

    if (!query || !topProjects || topProjects.length === 0) {
      return NextResponse.json({ results: [] });
    }

    // Grab full objects for the top scored projects to give AI context
    const contextProjects = topProjects.map((tp: any) => 
      projectsData.find(p => p.id === tp.id)
    ).filter(Boolean);

    const systemPrompt = `You are a portfolio assistant.
The user searched for: "${query}".
The system has instantly retrieved the following best-match projects using local scoring algorithms:
${JSON.stringify(contextProjects.map((p: any) => ({ title: p.title, description: p.description, metrics: p.metrics })))}

Your task is to write a single-sentence "reason" for each project explaining why it is relevant to the user's search.
Keep the reason professional, high-impact, and directly related to their search term.

Output format (STRICT JSON):
{
  "results": [
    {
      "id": "project-id",
      "aiReason": "Why this matches"
    }
  ]
}`;

    const response = await groq.chat.completions.create({
      messages: [{ role: "system", content: systemPrompt }],
      model: "llama3-70b-8192",
      response_format: { type: "json_object" }
    });

    const body = JSON.parse(response.choices[0].message.content || '{"results": []}');
    return NextResponse.json({ results: body.results });

  } catch (error) {
    console.error("Groq Refinement Error:", error);
    // Silent fail allowing frontend local results to stand without AI reasons
    return NextResponse.json({ results: [] });
  }
}
