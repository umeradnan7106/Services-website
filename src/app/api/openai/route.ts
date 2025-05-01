"use server";

import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { initialMessage } from "@/lib/data";

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY. Please set it in your environment variables.");
}

const openai = createOpenAI({
    apiKey,
    compatibility: "strict",
});

export async function GET() {
    return new Response(JSON.stringify({ message: "API is working!" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST(req: Request) {
    try {
        const rawBody = await req.text();
        if (!rawBody) {
            return new Response(JSON.stringify({ error: "Empty request body" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        let messages;
        try {
            const body = JSON.parse(rawBody);
            messages = body.messages;
        } catch (jsonError) {
            console.error("JSON parse error:", jsonError);
            return new Response(JSON.stringify({ error: "Invalid JSON format" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }

        if (!Array.isArray(messages)) {
            return new Response(JSON.stringify({ error: "Invalid messages format" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const stream = await streamText({
            model: openai("gpt-4o-mini"),
            messages: [initialMessage, ...messages],
            temperature: 1,
        });

        return (
            stream?.toDataStreamResponse() ??
            new Response(JSON.stringify({ error: "Stream failed" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            })
        );

    } catch (error) {
        console.error("Error processing request:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
