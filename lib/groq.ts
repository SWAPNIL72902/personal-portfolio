import Groq from "groq-sdk";

export const groq = new Groq({
  apiKey: process.env.PORTFOLIO_GROQ_KEY,
});
