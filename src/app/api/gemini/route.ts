// // npm install ai
// import {streamText, Message} from "ai";
// import { createGoogleGenerativeAI } from "@ai-sdk/google"
// import { initialMessage } from "@/lib/data";

// const google = createGoogleGenerativeAI({
//   apiKey : process.env.GEMINI_API_KEY || "",
// })

// export const runtime = "edge";

// const generateId = () => Math.random().toString(36).slice(2, 15);

// const buildGoogleGenAIPrompt = (messages:Message[]): Message[] => [
//   {
//     id: generateId(),
//     role: "user",
//     content: initialMessage.content
//   },
//   ...messages.map((message) => ({
//     id: message.id || generateId(),
//     role: message.role,
//     content: message.content
//   }))
// ] 

// export async function Post(request:Request) {
//   const {message} = await request.json();

//   const stream = await streamText({
//     model: google("gemini-pro"),
//     messages: buildGoogleGenAIPrompt(message),
//     temperature: 0.7,
//   });
//   return stream?.toDataStreamResponse();

// }

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GOOGLE_API_KEY}`,
        },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: body.input }] }],
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json({ content: data.candidates?.[0]?.content ?? "No response" });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return NextResponse.json({ error: "Failed to fetch AI response" }, { status: 500 });
  }
}
