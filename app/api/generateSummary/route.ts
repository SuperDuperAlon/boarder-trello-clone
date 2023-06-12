import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: "say that this is a test",
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, in progress and done, then tell the user have a productive day! Here the JSON data: ${JSON.stringify(
          todos
        )}, you may parse it as you want`,
      },
    ],
  });

  const { data } = response;

  return NextResponse.json(data.choices[0].message);
}
